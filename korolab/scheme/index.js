$(function () {

    var BEDROOM_LIGHTING = 'bedroom-lighting';
    var HALL_LIGHTING = 'hall-lighting';
    var INDIGO_GLOW = 'indigo-glow';
    var GREEN_GLOW = 'green-glow';
    var OPACITY = 'opacity';


    function homeTheater(adjust) {
        return {
            style: GREEN_GLOW,
            title: 'Домашний кинотеатр',
            text: 'Воспроизводит различные виды контента: тв передачи, фильмы, музыку, радио и создает объемный звук',
            my: 'top center',
            at: 'bottom center',
            adjust: adjust
        }
    }

    var mapi = {
        cam: {
            style: GREEN_GLOW,
            title: 'Камера наблюдения',
            text: 'Показывает, что происходит в холле у лифтов',
            adjust: {x: -30, y: -30}
        },
        basip: {
            style: GREEN_GLOW,
            title: 'Видеодомофон',
            text: 'Отправляет вызов домофона на все панели управления, позволяет поговорить с гостями и открыть им дверь',
            adjust: {x: -330, y: 20}
        },
        finger: {
            style: GREEN_GLOW,
            title: 'Сканер отпечатка пальца',
            text: 'При выходе из дома запускает сценарий "ухожу из дома", а при возвращении запускает сценарий "пришел домой"'
        },
        ipad: {
            style: GREEN_GLOW,
            title: 'Настенная панель',
            text: 'Позволяет управлять всеми функциями умного дома и просматривать камеры видеонаблюдения'
        },
        motionSensor: {
            style: GREEN_GLOW,
            title: 'Датчик движения',
            text: 'Автоматически управляет светом в коридоре',
            my: 'center center',
            adjust: {x: -180, y: -80}
        },
        socket: {
            style: GREEN_GLOW,
            title: 'Управляемая розетка',
            text: 'Не позволит оставить утюг включенным, когда дома никого нет',
            my: 'center center',
            adjust: {x: -240, y: 40}
        },
        button: {
            style: GREEN_GLOW,
            title: 'Кнопки управления',
            text: 'Регулируют яркость света'
        },
        hallCond: {
            style: GREEN_GLOW,
            title: 'Кондиционер',
            text: 'Поддерживает комфортную температуру летом',
            my: 'top center',
            adjust: {x: -90, y: 30}

        },
        bedroomCond: {
            style: GREEN_GLOW,
            title: 'Кондиционер',
            text: 'Поддерживает комфортную температуру летом',
            my: 'top center',
            adjust: {x: -105, y: 30}
        },
        livingUnifi: {
            style: GREEN_GLOW,
            title: 'Wi-Fi точка доступа',
            text: 'Раздает интернет в гостинной'
        },
        bedroomUnifi: {
            style: GREEN_GLOW,
            title: 'Wi-Fi точка доступа',
            text: 'Раздает интернет в спальне'
        },
        kitchenAcoustics: {
            style: GREEN_GLOW,
            title: 'Встраиваемые колонки',
            text: 'Проигрывают музыку, интернет радио, потоки AirPlay и передают системые сообщения'
        },
        bathroomAcoustics: {
            style: GREEN_GLOW,
            title: 'Встраиваемые колонки',
            text: 'Проигрывают музыку, интернет радио, потоки AirPlay и передают системые сообщения',
            my: 'top right',
            adjust: {x: -50, y: 0}
        },
        hallLighting: {
            style: HALL_LIGHTING,
            title: 'Торшер',
            text: 'Автоматически регулирует яркость света в светлое и темное время суток',
            my: 'top right',
            adjust: {x: -80, y: 0}
        },
        bedroomLeftLamp: {
            style: BEDROOM_LIGHTING,
            title: 'Люстра',
            text: 'Создает приятную подсветку в спальне'
        },
        bedroomRightLamp: {
            style: BEDROOM_LIGHTING,
            title: 'Люстра',
            text: 'Создает приятную подсветку в спальне',
            adjust: {x: -360, y: 0}
        },

        a1: homeTheater({x: 0, y: 0}),
        a2: homeTheater({x: 0, y: 0}),
        a3: homeTheater({x: 0, y: 0}),
        a4: {
            style: GREEN_GLOW,
            title: 'Колонки домашнего кинотеатра',
            text: 'Воспроизводит различные виды контента: тв передачи, фильмы, музыку, радио',
            my: 'top right',
            adjust: {x: 200, y: 0}
        },
        a5: {
            style: GREEN_GLOW,
            title: 'Колонки домашнего кинотеатра',
            text: 'Воспроизводит различные виды контента: тв передачи, фильмы, музыку, радио',
            my: 'top right',
            adjust: {x: -50, y: 0}
        },
        a6: {
            style: GREEN_GLOW,
            title: 'Напольные колонки домашнего кинотеатра',
            text: 'Проигрывают тв передачи, фильмы, музыку с аудиомултирума',
            my: 'top right',
            adjust: {x: -50, y: 0}
        },
        a7: {
            style: GREEN_GLOW,
            title: 'Напольные колонки домашнего кинотеатра',
            text: 'Проигрывают музыку, интернет радио, потоки AirPlay',
            my: 'top right',
            adjust: {x: -50, y: 0}
        },
        x: homeTheater({x: 0, y: 0}),

        bath: {
            style: OPACITY,
            title: 'Датчик наливания ванны',
            text: 'Автоматически перекроет воду при наполнении ванны',
            adjust: {x: -330, y: -250}
            text: 'Автоматически перекроет воду при наполнении ванны до нужного уровня',
            adjust: {x: 100, y: 0}
        },

        kitchenFloor : {
            style: OPACITY,
            title: 'Датчик наливания ванны',
            text: 'Автоматически перекроет воду при наполнении ванны до нужного уровня',
            adjust: {x: 100, y: 0}

        },

        bathroomFloor : {
            style: OPACITY,
            title: 'Датчик наливания ванны',
            text: 'Автоматически перекроет воду при наполнении ванны до нужного уровня',
            adjust: {x: 100, y: 0}

        }
    };

    var mape = {
        iphone: {
            style: INDIGO_GLOW,
            title: 'iPhone',
            text: 'Позволяет управлять всеми функциями умного дома, просматривать камеры и получать голосовые сообщения',
            my: 'top center',
            adjust: {x: -30, y: 0}
        },
        mikrotik: {
            style: INDIGO_GLOW,
            title: 'Роутер',
            text: 'Подключает умный дом к интернету и обеспечивает удаленное защищенное управление по VPN',
            my: 'top center',
            adjust: {x: -50, y: 0}
        },
        plc: {
            style: INDIGO_GLOW,
            title: 'Контроллер управления',
            text: 'Сердце системы - собирает информацию с датчиков, управляет светом, климатом и сигнализацией',
            my: 'top center',
            adjust: {x: -50, y: 0}
        },
        zotac: {
            style: INDIGO_GLOW,
            title: 'Медиаплеер',
            text: 'Показывает фильмы из домашней медиатеки и интернет телевидение',
            my: 'top center',
            adjust: {x: -50, y: 0}
        },
        appletv: {
            style: INDIGO_GLOW,
            title: 'Apple TV',
            text: 'Показывает контент из App store и вопроизводит потоки AirPlay',
            my: 'top center',
            adjust: {x: -50, y: 0}
        },

        trendent: {
            style: INDIGO_GLOW,
            title: 'Коммутатор',
            text: 'Объединяет все IP устройства в единую сеть',
            my: 'top center',
            adjust: {x: -110, y: 0}
        },
        gsm: {
            style: INDIGO_GLOW,
            title: 'GSM модем',
            text: 'В экстеренных ситуациях звонит хозяину на мобильный телефон и сообщает о проишествиях',
            my: 'top center',
            adjust: {x: -80, y: 0}
        },
        server: {
            style: INDIGO_GLOW,
            title: 'Сервер',
            text: 'Передает данные с контроллера на панели управления, управляет мультирумом, кинотеатром и системой информирования',
            my: 'top center',
            adjust: {x: -110, y: 0}
        },
        pioneer: {
            style: INDIGO_GLOW,
            title: 'AV ресивер',
            text: 'Выдает многоканальный звук на колонки домашего кинотеатра',
            my: 'top center',
            adjust: {x: -130, y: 0}
        },
        nas: {
            style: INDIGO_GLOW,
            title: 'Сетевое хранилище',
            text: 'Хранит домашнюю медиатеку: фильмы, музыку, фотографии',
            my: 'top center',
            adjust: {x: -40, y: 0}
        },
        nvr: {
            style: INDIGO_GLOW,
            title: 'Видеорегистратор',
            text: 'Записывает данные с камер наблюдения и предоставляет доступ к архиву',
            my: 'top center',
            adjust: {x: -130, y: 0}
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
            return false;
        }
    }

    function validMouse(e) {
        return e.originalEvent.button === 0 && e.originalEvent.buttons === 1
    }

    function validTouch(e) {
        return e.originalEvent.targetTouches.length === 1
    }

    function getMouse(e) {
        return e.originalEvent
    }

    function getTouch(e) {
        return e.originalEvent.targetTouches[0]
    }

    function start(src, get, valid) {
        return function (e) {
            if (!valid(e)) return true;
            src.touch = get(e);
            src.t = e.timeStamp;
            src.v = [0];
            return true;
        }
    }

    function move(src, dst, valid, get) {
        return function (e) {
            if (!valid(e)) return true;
            if (!src.touch) return true;
            var touch = get(e);
            var dx = src.touch.screenX - touch.screenX;
            var dy = src.touch.screenY - touch.screenY;
            if (dy * dy > dx * dx) return true;
            src.v.push(dx / (e.timeStamp - src.t));
            if (src.v.length > 3) src.v.shift();
            src.t = e.timeStamp;
            src.touch = touch;
            if (dy * dy > dx * dx) return true;
            shift(src, dst, dx, 0);
            return false;
        }
    }

    function end(src, dst) {
        return function () {
            if (!src.v) return true;
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

            delete src.touch;
            delete src.v;
            delete src.t;

            return true;
        }
    }

    function tip(e, t, container) {
        e.qtip({
            content: {
                title: t.title,
                text: t.text
            },
            position: {
                my: t.my || 'top left',
                at: t.at || 'center center',
                adjust: t.adjust || {x: 0, y: 5},
                container: container
            },
            style: {
                classes: 'qtip-bootstrap qtip-shadow'
            }
        })
    }

    function map(svg, m, container) {
        for (var i in m) {
            var e = svg.getElementById(i);
            e.setAttribute('class', m[i].style);
            tip($(e), m[i], container);
        }
    }

    function handle(handler, src, dst) {
        handler
            .mousedown(start(src, validMouse, getMouse))
            .on('touchstart', start(src, validTouch, getTouch))
            .mousemove(move(src, dst, validMouse, getMouse))
            .on('touchmove', move(src, dst, validTouch, getTouch))
            .mouseup(end(src, dst))
            .on('touchend', end(src, dst))
            .mousewheel(scroll(src, dst));
    }

    function init(container, src, dst, m) {
        var o = container.find('object')[0];
        var svg = o.getSVGDocument();
        var f = function (svg) {
            handle($(svg).find('svg'), src, dst);
            map(svg, m, container)
        };
        if (svg)
            f(svg);
        else
            o.addEventListener('load', function () {
                f(o.getSVGDocument())
            });
    }

    var $ce = $('#ce');
    var ce = $ce[0];
    var $ci = $('#ci');
    var ci = $ci[0];

    init($ce, ce, ci, mape);
    init($ci, ci, ce, mapi);

    $('#bl').click(swipe(ci, ce, -1));
    $('#br').click(swipe(ci, ce, 1));

    var living = $('#living');
    var video = $('video');

    handle(living, ci, ce);
    handle(video, ci, ce);

    living.hide();

    video
        .mouseenter(function () {
            video.css('opacity', 1)[0].play();
            living.fadeIn({duration: 1000});
            return true;
        })
        .mouseout(function () {
            video.css('opacity', 0)[0].pause();
            living.fadeOut({duration: 1000});
            return true;
        })
        .on('ended', function () {
            video.css('opacity', 0);
            living.fadeOut({duration: 1000});
            return true;
        });

});
