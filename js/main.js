! function ($) {
    "use strict";
    var e = $(window);
    e.on("load", function () {
        $(".pre-loader").fadeOut("slow").delay(5000),
            $('.parallax').parallax(),
            $('body').css('position', 'static'),
            AOS.refresh(),
            $("#numOfTeams").html(numberOfTeam)
    }), $(document).ready(function () {

        function a(e) {
            var XTime = Date.parse(e) - Date.parse(new Date),
                XSeconds = Math.floor(XTime / 1e3 % 60),
                XMinutes = Math.floor(XTime / 1e3 / 60 % 60),
                XHours = Math.floor(XTime / 36e5 % 24),
                XDays = Math.floor(XTime / 864e5);
            return {
                total: XTime,
                days: XDays,
                hours: XHours,
                minutes: XMinutes,
                seconds: XSeconds
            }
        }

        function s(e, o) {
            function t() {
                var e = a(o);
                s.innerHTML = e.days, i.innerHTML = ("0" + e.hours).slice(-2),
                    r.innerHTML = ("0" + e.minutes).slice(-2),
                    l.innerHTML = ("0" + e.seconds).slice(-2),
                    e.total <= 0 && clearInterval(c)
            }
            var n = document.getElementById(e),
                s = n.querySelector(".days"),
                i = n.querySelector(".hours"),
                r = n.querySelector(".minutes"),
                l = n.querySelector(".seconds");
            t();
            var c = setInterval(t, 1e3)
        }
        var i = $("#hamburger-menu"),
            r = $("#social-hamburger"),
            l = $(".button-collapse"),
            c = $("#main-header"),
            u = c.outerHeight(),
            d = u / 2,
            v = $("#nav-color"),
            h = 200,
            p, f = 0,
            m = 5,
            g = $("#main-nav"),
            w = g.outerHeight(),
            C = e.width(),
            y;
        e.on("resize", function () {
                C != e.width() && (C = e.width(), l.sideNav("hide"))
            }),
            r.on("click", function () {
                $(this).toggleClass("open")
            }),
            l.sideNav({
                draggable: !0,
                closeOnClick: !0,
                onOpen: function () {
                    i.addClass("open")
                },
                onClose: function () {
                    i.removeClass("open")
                }
            }),
            // $(".dropdown-button").dropdown({
            //     belowOrigin: !0,
            //     constrainWidth: !1
            // }),
            setInterval(function () {
                $(".carousel").carousel("next")
            }, 1e4),
            $(".collapsible").collapsible(),
            // e.on("scroll", function () {
            //     if (p = !0, y = $(this).scrollTop(), y > 1e3) return void v.css({
            //         opacity: 1
            //     });
            //     var e = 1 - (d - y + h) / h + 1;
            //     1 > e ? v.css({
            //         opacity: e
            //     }) : v.css({
            //         opacity: 1
            //     })
            // }), 
            // 0 === $(document).scrollTop() && v.css({
            //     opacity: 0
            // }),
            $.scrollIt({
                easing: "ease-out",
                topOffset: -1
            });

        AOS.init({
                disable: "mobile",
                once: !0,
                duration: 400,
                easing: "ease-in-sine"
            }),
            $(".counter").counterUp({
                delay: 100,
                time: 1000
            }),
            $(".same-height").matchHeight({
                property: "min-height",
                byRow: !1
            });
        var k = $(".count-down-wrapper"),
            I = "Oct 15 2018 09:00:00 GMT+0530";
        k.length && s("clockdiv", I)
    })
}(jQuery);

particlesJS("particles-js", {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#aa5dab"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#aa5dab"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#333",
            opacity: .5,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: true,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: false,
                mode: "remove"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    color: "#333"
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 10
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

/* JQuery.Countdown Clock */

$(window).on('load', function () {
    var labels = ['Days', 'Hours', 'Min', 'Sec'],
        eventDate = '2018/10/15 ',
        template = _.template($('#clock-template').html()),
        currDate = '00:00:00:00',
        nextDate = '00:00:00:00',
        parser = /([0-9]{2})/gi,
        $example = $('#count-clock');

    // Parse countdown string to an object
    function strfobj(str) {
        var parsed = str.match(parser),
            obj = {};
        labels.forEach(function (label, i) {
            obj[label] = parsed[i]
        });
        return obj;
    }
    // Return the time components that diffs
    function diff(obj1, obj2) {
        var diff = [];
        labels.forEach(function (key) {
            if (obj1[key] !== obj2[key]) {
                diff.push(key);
            }
        });
        return diff;
    }
    // Build the layout
    var initData = strfobj(currDate);
    labels.forEach(function (label, i) {
        $example.append(template({
            curr: initData[label],
            next: initData[label],
            label: label
        }));
    });
    // Starts the countdown
    $example.countdown(eventDate, function (event) {
        var newDate = event.strftime('%D:%H:%M:%S'),
            data;
        if (newDate !== nextDate) {
            currDate = nextDate;
            nextDate = newDate;
            // Setup the data
            data = {
                'curr': strfobj(currDate),
                'next': strfobj(nextDate)
            };
            // Apply the new values to each node that changed
            diff(data.curr, data.next).forEach(function (label) {
                var selector = '.%s'.replace(/%s/, label),
                    $node = $example.find(selector);
                // Update the node
                $node.removeClass('flip');
                $node.find('.curr').text(data.curr[label]);
                $node.find('.next').text(data.next[label]);
                // Wait for a repaint to then flip
                _.delay(function ($node) {
                    $node.addClass('flip');
                }, 50, $node);
            });
        }
    });
});

$(document).ready(function(){
    $('.tooltipped').tooltip({
        position:'top'
    });
    $('.modal').modal();
  });

$("#js-rotating").Morphext({
    animation: "bounceIn",
    separator: ",",
    speed: 2000,
    complete: function () {
    }
});