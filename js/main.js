! function ($) {
    "use strict";
    
    var e = $(window);
    e.on("load", function () {
        $(".pre-loader").fadeOut("slow").delay(5000),
        $('body').css('position','static'), 
        AOS.refresh(),
        $("#numOfTeams").html(numberOfTeam),
        $("#Place1").html(Prices[0]),
        $("#Place2").html(Prices[1]),
        $("#Place3").html(Prices[2])
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
        $(".dropdown-button").dropdown({
            belowOrigin: !0,
            constrainWidth: !1
        }),  
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