$(function () {

    var GREEN_GLOW = 'green-glow';
    var SCALE = 'scale';

    var mapi = {
        cam: {
            style: GREEN_GLOW,
            title: 'Камера наблюдения',
            text: 'Показывает, что проиходит в холле у лифтов'
        },
        basip: {
            style: GREEN_GLOW,
            title: 'Видеодомофон',
            text: 'Позволяет хозяину поговорить с гостями и открыть им дверь'
        },
        finger: {
            style: GREEN_GLOW,
            title: 'Сканер отпечатка пальца',
            text: 'При уходе из кватиры запускает сценарий "ухожу из дома", котрый выключает весь свет, отключает управляемые розетки, переводит климат-контроль в режим экомии и включает охрану' +
            'При возващении домой запускает сценарий "пришел домой", который выключает охрану и переводит климат контороль в комфортный режим'
        },
        ipad: {
            style: GREEN_GLOW,
            title: 'Настенная панель',
            text: 'Позволяет управлять всеми функциями умного дома'
        },
        motionSensor: {
            style: GREEN_GLOW,
            title: 'Датчик движения',
            text: 'Автоматически управляет светом в коридоре'
        },
        socket: {
            style: GREEN_GLOW,
            title: 'Управляемая розетка',
            text: ''
        },
        button: {
            style: GREEN_GLOW,
            title: 'Кнопки управления',
            text: 'регулируют яркость света'
        },
        hallCond: {
            style: GREEN_GLOW,
            title: 'Кондиционер',
            text: 'Поддерживает комфортную температуру летом'
        },
        bedroomCond: {
            style: GREEN_GLOW,
            title: 'Кондиционер',
            text: 'Поддерживает комфортную температуру летом'
        },
        livingUnifi: {
            style: GREEN_GLOW,
            title: 'Wi-Fi точка доступа',
            text: 'Раздает интернет в гостинной'
        },
        bedroomUnifi: {
            style: GREEN_GLOW,
            title: 'Wi-Fi точка доступа',
            text: 'Раздает интернет в ванной комнате'
        },
        kitchenAcoustics: {
            style: GREEN_GLOW,
            title: 'Встраваемые колонки',
            text: 'Проигрывают музыку, интеренет радио и передают системые сообщения'
        },
        bathroomAcoustics: {
            style: GREEN_GLOW,
            title: 'Встраваемые колонки',
            text: 'Проигрывают музыку, интеренет радио и передают системые сообщения'
        }
    };

    var mape = {
        mikrotik: {
            style: SCALE,
            title: 'Роутер',
            text: 'Раздает интернет и обеспечивает внешнее управление умным домом'
        },
        plc: {
            style: SCALE,
            title: 'Контроллер управления',
            text: 'Сердце системы - управляет всеми функциями '
        },
        zotac: {
            style: SCALE,
            title: 'Медиаплеер',
            text: 'Показывает фильмы из домашней библитеки и интернет телевидение'
        },
        appletv: {
            style: SCALE,
            title: 'APPLE TV',
            text: 'Показывает контент из APPLE store и вопроизводит потоки по AirPlay'
        },
        iphone: {
            style: SCALE,
            title: 'iPhone',
            text: 'Управляет всеми функция умного дома'
        },
        trendent: {
            style: SCALE,
            title: 'Коммутатор',
            text: 'Объединяет все IP устройства в единую сеть'
        },
        gsm: {
            style: SCALE,
            title: 'GSM модем',
            text: 'Сообщает хозяину о проишествиях призошедших в доме'
        },
        server: {
            style: SCALE,
            title: 'Собирает и передает данные панелям управления, упрвляет домашеней мультимедия системой и системой голосового информирования',
            text: ''
        },
        pioneer: {
            style: SCALE,
            title: 'AV ресивер',
            text: 'Выдает многоканальный звук для домашего кинотеатра'
        }
    };

    var id;

    function sync(src, dst, x) {
        var k = (dst.offsetWidth - document.body.clientWidth)
            / (src.offsetWidth - document.body.clientWidth);
        dst.style.left = Math.round(x * k) + 'px'
    }

    function shift(src, dst, dx, dt) {
        cancelAnimationFrame(id);
        dt += 'ms';
        src.style.transitionDuration = dt;
        dst.style.transitionDuration = dt;
        var l = document.body.clientWidth - src.offsetWidth;
        var x = src.offsetLeft - dx;
        x = x > 0 ? 0 : x < l ? l : x;
        src.style.left = Math.round(x) + 'px';
        sync(src, dst, x)
    }

    function scroll(src, dst) {
        return function (e) {
            if (e.deltaY * e.deltaY > e.deltaX * e.deltaX)
                return true;
            var dx = e.deltaX * e.deltaFactor;
            shift(src, dst, dx, 0);
            return false;
        }
    }

    function dx(src) {
        var n = src.offsetWidth / document.body.clientWidth;
        var m = Math.floor(n);
        if (n > m) m++;
        return src.offsetWidth / m
    }

    function swipe(src, dst, d) {
        return function () {
            shift(src, dst, d * dx(ci), 500)
        }
    }

    function move(src, dst) {
        return function (e) {
            var touch = e.originalEvent.targetTouches[0];
            var dx = src.touch.screenX - touch.screenX;
            var dy = src.touch.screenY - touch.screenY;
            src.v.push(dx / (e.timeStamp - src.t));
            if (src.v.length > 3) src.v.shift();
            src.t = e.timeStamp;
            src.touch = touch;
            if (dy * dy > dx * dx) return true;
            shift(src, dst, dx, 0);
            return false;
        }
    }

    function start(src) {
        return function (e) {
            src.touch = e.originalEvent.targetTouches[0];
            src.t = e.timeStamp;
            src.v = [0];
        }
    }

    function end(src, dst) {
        return function () {
            var t0 = performance.now();
            var v0 = v = src.v.reduce(function (a, b) {
                    return a + b
                }) / src.v.length;
            var a = (v > 0 ? -1 : 1) / 400;

            function step() {
                var t1 = performance.now();
                var dt = (t1 - t0);
                var dx = v * dt;
                v += a * dt;
                if (v0 * v <= 0) return;
                t0 = t1;
                shift(src, dst, dx, 0);
                id = requestAnimationFrame(step);
            }

            id = requestAnimationFrame(step);
        }
    }

    function map(svg, m, conteiner) {
        for (var i in m) {
            var e = svg.getElementById(i);
            e.setAttribute('class', m[i].style);
            $(e).qtip({
                content: {
                    title: m[i].title,
                    text: m[i].text
                },
                position: {
                    my: m[i].my || 'top center',
                    at: m[i].at || 'center center',
                    adjust: m[i].adjust || {x: 0, y: 10},
                    container: conteiner
                },
                style: {
                    classes: 'qtip-bootstrap qtip-shadow'
                }
            })
        }
    }

    function init(conteiner, src, dst, m) {
        var o = conteiner.find('object')[0];
        o.addEventListener('load', function () {
            var svg = o.getSVGDocument();
            $(svg)
                .find('svg')
                .on('touchstart', start(src))
                .on('touchmove', move(src, dst))
                .on('touchend', end(src, dst))
                .mousewheel(scroll(src, dst));
            map(svg, m, conteiner)
        })
    }

    var $ce = $('#ce');
    var ce = $ce[0];
    var $ci = $('#ci');
    var ci = $ci[0];

    init($ce, ce, ci, mape);
    init($ci, ci, ce, mapi);

    $('#bl').click(swipe(ci, ce, -1));
    $('#br').click(swipe(ci, ce, 1));


});
