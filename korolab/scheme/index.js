$(function () {

    var GREEN = 'green';

    var mape = {
        cam: {
            clazz : GREEN
        },
        basip: {
            clazz : GREEN
        },
        finger: {
            clazz : GREEN
        },
        ipad: {
            clazz : GREEN
        },
        motionSensor: {
            clazz : GREEN
        },
        socket: {
            clazz : GREEN
        },
        button: {
            clazz : GREEN
        },
        hallCond: {
            clazz : GREEN
        },
        bedroomCond: {
            clazz : GREEN
        },
        livingUnifi: {
            clazz : GREEN
        },
        bedroomUnifi: {
            clazz : GREEN
        },
        kitchenAcoustics: {
            clazz : GREEN
        },
        bathroomAcoustics: {
            clazz : GREEN
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
        src.style.left = x + 'px';
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
        return Math.round(src.offsetWidth / m)
    }

    function swipe(src, dst, d) {
        return function () {
            shift(src, dst, d * dx(oi), 500)
        }
    }

    function move(src, dst) {
        return function (e) {
            var touch = e.originalEvent.targetTouches[0];
            var dx = src.touch.pageX - touch.pageX;
            var dy = src.touch.pageY - touch.pageY;
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
            src.v = [0, 0];
        }
    }

    function end(src, dst) {
        return function () {
            console.log(src.v);
            var t0 = performance.now();
            var v0 = v = src.v.reduce(function (a, b) {
                    return a + b
                }) / src.v.length;
            var a = (v > 0 ? -1 : 1) / 400;
            console.log('->', v);
            function step() {
                var t1 = performance.now();
                var dt = (t1 - t0);
                var dx = v * dt;
                v += a * dt;
                console.log(v, dx, dt);
                if (v0 * v <= 0) return;
                t0 = t1;
                shift(src, dst, dx, 0);
                id = requestAnimationFrame(step);
            }

            id = requestAnimationFrame(step);
        }
    }

    function map(svg, m) {
        for (var i in mape) {
            var e = svg.getElementById(i);
            e.setAttribute('class', m[i].clazz);
            $(e).qtip({
                content: {
                    text: i
                },
                position: {
                    my: 'top left',
                    at: 'center center',
                    adjust: { x: 0, y: 0 }
                },
                style: {
                    classes: 'qtip-bootstrap qtip-shadow'
                }
            })
        }
    }

    var oe = $('#oe')[0];
    var oi = $('#oi')[0];

    var svgi = oi.getSVGDocument();
    var svge = oe.getSVGDocument();

    map(svgi,mape);

    $('#bl').click(swipe(oi, oe, -1));
    $('#br').click(swipe(oi, oe, 1));

    $(svgi)
        .find('svg')
        .on('touchstart', start(oi))
        .on('touchmove', move(oi, oe))
        .on('touchend', end(oi, oe))
        .mousewheel(scroll(oi, oe));
    $(svge)
        .find('svg')
        .on('touchstart', start(oe))
        .on('touchmove', move(oe, oi))
        .on('touchend', end(oe, oi))
        .mousewheel(scroll(oe, oi));


});
