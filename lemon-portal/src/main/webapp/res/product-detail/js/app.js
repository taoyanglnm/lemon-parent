/* Date: 2016-09-14T17:43:13Z Path: js/app/app.js */

/*
define("box-list",
function(e, t, i) {
    var a = {
        max: 10
    },
    n = {
        pop: "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/ajax/get_top15_info",
        his: "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/ajax/get_new_pop"
    },
    s = {
        pop: "聚美顾客都爱以下<em>爆款单品</em>，使用现金券享超低价格",
        his: "这是您曾经浏览的商品，使用现金券享超低价格，赶快抢购吧！"
    },
    r = {
        html: '<p class="warp_tit"></p><div class="ecope_carousel warp_carousel clearfix" id="warp_carousel"><a href="javascript:;" class="warp_carousel_slide cs_prev"></a><div class="cs_wrapper us_wrapper"><ul class="cs_list"></ul></div><a href="javascript:;" class="warp_carousel_slide cs_next"></a></div>',
        his: '<div class="cs_list_item"><div class="side_pic"><a target="_blank"><img></a></div><div class="side_item"><p class="side_title"><a target="_blank"></a></p><p class="side_price"><em></em></p></div></div>',
        pop: '<a class="side_top" href="" target="_blank"><img ></a>'
    },
    o = {
        _elem: {},
        init: function(e) {
            this.renderList(e),
            "v0" == e.boxtype ? this.ajaxListPop(e) : this.ajaxListHis(e)
        },
        initControl: function() {
            this._elem.target.find("li").length < 2 && this._elem.target.find("#warp_carousel").css("marginLeft", "30px");
            new Jumei.ui.Carousel("#warp_carousel", {
                indexSwitch: !0
            })
        },
        renderTitle: function(e) {
            var t = "pop" == e ? s.pop: s.his;
            this._elem.target.find(".warp_tit").html(t)
        },
        renderList: function(e) {
            this._elem.target = e.target,
            this._elem.carousel = $(r.html),
            this._elem.clist = this._elem.carousel.find(".cs_list"),
            e.target.append(this._elem.carousel)
        },
        renderPop: function(e) {
            function t(e) {
                var t = $(e),
                i = t.find("img");
                return t.addClass("side_top"),
                i.attr("src", i.attr("original")).removeAttr("original"),
                t.prop("outerHTML")
            }
            var i = 0,
            a = "";
            for (this.renderTitle("pop"); i < e.length; i++) i % 6 === 0 ? (a && this._elem.clist.append("<li>" + a + "</li>"), a = t(e[i])) : a += t(e[i]);
            a && this._elem.clist.append("<li>" + a + "</li>"),
            this.initControl()
        },
        renderHis: function(e) {
            var t, i = 0;
            for (this.renderTitle("his"); i < e.length; i++) i % 6 === 0 && (t = $("<li></li>"), this._elem.clist.append(t)),
            this.renderItem(e[i], t);
            this.initControl()
        },
        renderItem: function(e, t) {
            var i = $(r.his);
            i.find("a").attr({
                title: e.title,
                href: e.url
            }),
            i.find(".side_pic img").attr({
                alt: e.title,
                src: e.img
            }),
            i.find(".side_title a").html(e.title),
            i.find(".side_price em").html("¥" + e.discounted_price),
            t.append(i)
        },
        ajaxListPop: function() {
            $.getJSON(n.pop + "?callback=?").done(function(e) {
                o.renderPop(e)
            })
        },
        ajaxListHis: function() {
            $.getJSON(n.his + "?callback=?").done(function(e) {
                0 === e.type ? o.renderPop(e.data) : 1 === e.type && o.renderHis(e.data)
            })
        }
    },
    l = function(e, t) {
        var i = $.extend({},
        a, t);
        i.target = e,
        this.__o__ = i,
        o.init(this.__o__)
    };
    l.init = function(e, t) {
        return new l(e, t)
    },
    i.exports = l
}),
*/
/*
define("box-chose",
function(e, t, i) {
    var a = {
        v0: {
            bg: "http://p0.jmstatic.com/templates/jumei/images/account/newUser/10-answer.jpg",
            success: "http://p0.jmstatic.com/templates/jumei/images/account/newUser/10-5.jpg",
            error: "http://p0.jmstatic.com/templates/jumei/images/account/newUser/10-b.jpg",
            type: "r",
            price: "百"
        },
        v1: {
            bg: "http://p0.jmstatic.com/templates/jumei/images/account/newUser/1-wen.jpg",
            success: "http://p0.jmstatic.com/templates/jumei/images/account/newUser/5-10.jpg",
            error: "http://p0.jmstatic.com/templates/jumei/images/account/newUser/1-b.jpg",
            type: "r_10",
            price: "百"
        }
    },
    n = {
        bg: '<div class="wrap_answer"><div class="answer_btn answer_btn_a"></div><div class="answer_btn answer_btn_b"></div></div>',
        success: '<div class="answer_shop"></div>',
        error: '<div class="answer_error">知道了, 去领现金券</div>'
    },
    s = "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/ajax/new_user_cash_ticket",
    r = {
        _state: {},
        _element: {},
        init: function(e) {
            this.renderContent(e),
            this.bindEvent(e)
        },
        renderContent: function(e) {
            this._element.bg = $(n.bg),
            this._state = a[e.boxtype],
            this._element.bg.css("background-image", "url(" + this._state.bg + ")"),
            "v1" == e.boxtype && this._element.bg.addClass("wrap_answer_b"),
            e.target.append(this._element.bg)
        },
        answerA: function(e) {
            this.getCash(),
            this._element.bg.find(".answer_btn").hide(),
            this.renderSuc(e),
            Jumei.util.cookie.set("bubbleAmount", this._state.price, {
                exp: "forever"
            })
        },
        renderSuc: function(e) {
            this._element.success = $(n.success),
            this._element.bg.css("background-image", "url(" + this._state.success + ")"),
            this._element.bg.append(this._element.success),
            this._element.bg.find(".answer_shop").bind("click",
            function() {
                e.box.close()
            })
        },
        answerB: function(e) {
            this.getCash(),
            this._element.error = $(n.error),
            this._element.bg.css("background-image", "url(" + this._state.error + ")"),
            this._element.bg.find(".answer_btn").hide(),
            this._element.bg.append(this._element.error),
            this._element.bg.find(".answer_error").bind("click",
            function() {
                $(this).hide(),
                r.renderSuc(e)
            }),
            Jumei.util.cookie.set("bubbleAmount", this._state.price, {
                exp: "forever"
            })
        },
        getCash: function() {
            $.getJSON(s + "?callback=?", {
                type: this._state.type
            },
            function(e) { - 3 == e.errno && window.location.reload()
            })
        },
        bindEvent: function(e) {
            var t = this;
            this._element.bg.find(".answer_btn_a").bind("click",
            function() {
                t.answerA(e)
            }),
            this._element.bg.find(".answer_btn_b").bind("click",
            function() {
                t.answerB(e)
            })
        }
    },
    o = function(e, t) {
        var i = $.extend({},
        t);
        i.target = e,
        this.__o__ = i,
        r.init(this.__o__)
    };
    o.init = function(e, t) {
        return new o(e, t)
    },
    i.exports = o
}),

*/


/*
define("box-title", ["mixcookie"],
function(e, t, i) {
    var a = (e("mixcookie"), {
        price: "百"
    }),
    n = "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/ajax/new_user_cash_ticket",
    s = {
        format: "<span>HH</span><span class='time_two'>MM</span><span class='time_thr'>SS</span>",
        dtime: 1e3,
        scroll: !1,
        onStart: function() {
            this.$target.html(this.html)
        },
        onEnd: function() {
            this.$target.html("")
        }
    },
    r = {
        init: function(e) {
            "v1" == e.boxtype ? this.renderTopTwo(e) : "v2" != e.boxtype && "v3" != e.boxtype || this.renderTopLast(e)
        },
        renderTopTwo: function(e) {
            var t = '<div class="top_num">百</div>',
            i = '<div class="top_time" diff="' + e.diff + '"></div>';
            e.target.html(t + i),
            window.siteTimer ? window.siteTimer.add(e.target.find(".top_time"), s) : window.siteTimer = new Jumei.ui.TimeCounter(e.target.find(".top_time"), s)
        },
        renderTopLast: function(e) {
            var t = '<div class="top_litle">感谢您的回访，下面是小美精心为您挑选的精品，请您查看！</div>',
            i = this;
            e.target.html(t),
            "v2" == e.boxtype && i.getCash(e)
        },
        getCash: function(e) {
            e.target.find(".top_btn").one("click",
            function() {
                var t = $(this);
                t.text("领取成功"),
                $.getJSON(n + "?callback=?", {
                    type: "r_160"
                },
                function(i) { - 3 == i.errno ? location.reload() : -1 == i.errno ? t.text("网络忙，重新领") : 0 === i.errno && (e.target.find(".top_btn_receive").fadeIn(400), Jumei.util.cookie.set("isBubble", 1, {
                        exp: "forever"
                    }), Jumei.util.cookie.set("bubbleTime", 86400, {
                        exp: "forever"
                    }), Jumei.util.cookie.set("bubbleAmount", "百", {
                        exp: "forever"
                    }))
                })
            })
        }
    },
    o = function(e, t) {
        var i = $.extend({},
        a, t);
        i.target = e,
        this.__o__ = i,
        r.init(this.__o__)
    };
    o.init = function(e, t) {
        return new o(e, t)
    },
    i.exports = o
}),
*/

/*
define("user-box", ["box-title", "box-chose", "box-list"],
function(e, t, i) {
    "use strict";
    var a = {
        BoxTitle: e("box-title"),
        BoxChose: e("box-chose"),
        BoxList: e("box-list")
    },
    n = {
        v0: "http://p0.jmstatic.com/templates/jumei/images/account/newUser/raider-bg.jpg",
        v1: "http://p0.jmstatic.com/templates/jumei/images/account/newUser/jiaoyin1117.jpg",
        v2: "http://p0.jmstatic.com/templates/jumei/images/account/newUser/seven_bg.jpg"
    },
    s = {
        boxtype: "v0",
        contype: "list"
    },
    r = $(document.body),
    o = {
        iframe: '<div class="user_content" id="user_content"><div class="user_content_close"></div><div class="user_content_top"></div><div class="user_content_wrap"></div></div>'
    },
    l = {
        renderBg: function(e, t) {
            var i = n[e] || n.v2;
            t.css("background-image", "url(" + i + ")")
        },
        renderTop: function(e, t) {
            a.BoxTitle.init(t.top, e)
        },
        renderCont: function(e, t) {
            "list" == e.contype ? a.BoxList.init(t.wrap, e) : "chose" == e.contype && a.BoxChose.init(t.wrap, e)
        },
        bindHandle: function(e, t) {
            t.iframe.find(".user_content_close").bind("click",
            function() {
                e.box.close()
            })
        },
        init: function(e, t) {
            this.bindHandle(e, t),
            this.renderTop(e, t),
            this.renderCont(e, t),
            $("body").trigger("UserBoxEvent")
        }
    },
    c = function(e) {
        var t = $.extend({},
        s, e);
        this.__o__ = t,
        this.element = {},
        this.draw(this.__o__, this.element),
        l.init(this.__o__, this.element)
    };
    c.prototype = {
        draw: function(e, t) {
            t.iframe = $(o.iframe),
            t.top = t.iframe.find(".user_content_top"),
            t.wrap = t.iframe.find(".user_content_wrap"),
            l.renderBg(e.boxtype, t.iframe),
            r.append(t.iframe),
            e.box = new Jumei.ui.Dialog("body", {
                elem: "#user_content",
                effects: "zoom",
                trigger: "UserBoxEvent"
            })
        },
        close: function() {
            this.__o__.box.close()
        }
    },
    i.exports = c
}),
define("mixcookie",
function(e, t, i) {
    "use strict";
    var a = Jumei.util.cookie,
    n = {
        set: function(e, t, i) {
            e = e.replace(/-/g, ""),
            t = null === t ? "": String(t).replace(/-/g, ""),
            i = !!i;
            for (var n = a.get(i ? "MixCookie": "MixCook"), s = n.split("-"), r = s.length, o = 0; r > o; o += 2) if (s[o] === e) {
                "" === t ? s.splice(o, 2) : s[o + 1] = t,
                e = !1;
                break
            }
            "" === t && (e = !1),
            a.set(i ? "MixCookie": "MixCook", e ? (n && n + "-") + e + "-" + t: s.join("-"), i ? {
                exp: "forever"
            }: {})
        },
        get: function(e, t) {
            e = e.replace(/-/g, "");
            for (var i = a.get(t ? "MixCookie": "MixCook").split("-"), n = i.length, s = 0; n > s; s += 2) if (i[s] === e) return i[s + 1].replace(/\u0001/g, "-");
            return ""
        }
    };
    i.exports = n
}),
*/



/*
define("user-new", ["mixcookie", "user-box"],
function(e, t, i) {
    "use strict";
    var a = e("mixcookie"),
    n = e("user-box"),
    s = Jumei.util.cookie,
    r = parseInt(s.get("register_time")) || 0,
    o = parseInt(s.get("first_visit_time")) || 0,
    l = (s.get("uid"), Math.ceil((new Date).getTime() / 1e3)),
    c = l - r,
    d = l - o,
    u = {
        stime: 1,
        etime: 7,
        dis: "d"
    },
    p = {
        format: "<em>HH</em>时<em>MM</em>分<em>SS</em>秒",
        dtime: 1e3,
        scroll: !1,
        onStart: function() {
            var e = this.dif,
            t = $(this.html);
            a.set("b_time", e, "forever"),
            e / 86400 >= 1 && t.eq(0).html(parseInt(e / 86400 * 24 + Number(t.eq(0).html()))),
            this.$target.html(t).append("秒")
        },
        onEnd: function() {
            this.$target.html("")
        }
    },
    h = {
        v0: {
            stime: 10,
            etime: 50,
            dis: "m"
        },
        v1: {
            stime: 1,
            etime: 24,
            dis: "h"
        },
        v2: {
            stime: 1,
            etime: 7,
            dis: "d"
        }
    },
    m = {
        status: "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/ajax/get_float_status",
        order: "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/ajax/get_without_order"
    },
    f = '<div class="user_bubble"><div class="bubble_close"></div><div class="bubble_time"></div><div class="bubble_price"><a href="http://www.' + JM.SITE_MAIN_TOPLEVELDOMAINNAME + '/i/membership/show_promocards">查看您的<em></em>元现金券</a></div></div>',
    _ = {
        _range: -1,
        init: function() {
            r ? (this.getBubble(), this.visitFun()) : this.noVisitFun()
        },
        visitFun: function() {
            var e, t = this,
            i = this.getRange(c, h),
            n = {};
            this._range = i,
            "v0" == i && !a.get("u_m_0", "forever") || "v1" == i && !a.get("u_m_1", "forever") ? (e = m.status, $.extend(n, {
                control: JM.CONTROL,
                action: JM.ACTION
            })) : "v2" != i || a.get("u_m_2", "forever") || (e = m.order),
            $.ajax({
                url: e,
                data: n,
                dataType: "jsonp",
                success: function(e) {
                    t.showVisitBox(e)
                },
                error: function(e) {
                    alert("请求错误，请刷新重试！")
                }
            })
        },
        noVisitFun: function() {
            a.get("u_m_2", "forever") || a.get("u_m_3", "forever") || !this.checkTime(d) || (new n({
                boxtype: "v3",
                contype: "list"
            }), a.set("u_m_3", "v3", "forever"))
        },
        showVisitBox: function(e) {
            switch (this._range) {
            case "v0":
                "0" == e.errno && "0" == e.draw_type && "1" == e.float_type ? new n({
                    boxtype: this._range,
                    contype: "list"
                }) : "0" == e.errno && "r" == e.draw_type && new n({
                    boxtype: this._range,
                    contype: "chose"
                }),
                a.set("u_m_0", "v0", "forever");
                break;
            case "v1":
                "0" == e.errno && "0" == e.draw_type && "2" == e.float_type ? new n({
                    boxtype: this._range,
                    contype: "list",
                    diff: e.time
                }) : "0" == e.errno && "r_10" == e.draw_type && new n({
                    boxtype: this._range,
                    contype: "chose"
                }),
                a.set("u_m_1", "v1", "forever");
                break;
            case "v2":
                "0" == e.errno && new n({
                    boxtype: this._range,
                    contype: "list"
                }),
                a.set("u_m_2", "v2", "forever")
            }
        },
        getBubble: function() {
            var e = this,
            t = a.get("u_m_b", "forever");
            if ("v0" != t) {
                if (777600 > c && "undefined" != typeof JM.CONTROL && "v3" != t) {
                    var i = {
                        control: JM.CONTROL,
                        action: JM.ACTION
                    };
                    $.ajax({
                        url: "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/ajax/get_air_bubble_status",
                        data: i,
                        dataType: "jsonp",
                        success: function(t) {
                            "0" == t.errno && (e.renderBubble(t), a.set("u_m_b", "v0", "forever"), a.set("b_time", t.time, "forever"), a.set("b_amount", t.amount, "forever"))
                        },
                        error: function(e) {
                            alert("请求错误，请刷新重试！")
                        }
                    })
                }
            } else {
                var n = {
                    time: a.get("b_time", "forever"),
                    amount: a.get("b_amount", "forever")
                };
                e.renderBubble(n)
            }
        },
        renderBubble: function(e) {
            var t = $("#headerTopRight").find(".item_ijumei"),
            i = $(f),
            n = i.find(".bubble_time"),
            s = i.find(".bubble_close");
            t.length > 0 && (i.find(".bubble_price em").html("百"), n.attr("diff", e.time), t.append(i), window.siteTimer ? window.siteTimer.add(n, p) : window.siteTimer = new Jumei.ui.TimeCounter(n, p), s.bind("click",
            function() {
                i.fadeOut(),
                a.set("u_m_b", "v3", "forever")
            }))
        },
        getRange: function(e, t) {
            var i, a = "",
            n = -1;
            for (a in t) if (i = t[a], this.checkTime(e, i)) return a;
            return n
        },
        checkTime: function(e, t) {
            var i = $.extend(u, t),
            a = !1;
            return "d" == i.dis ? (i.stime = 24 * i.stime * 60 * 60, i.etime = 7 * i.etime * 24 * 60 * 60) : "h" == i.dis ? (i.stime = 60 * i.stime * 60, i.etime = 60 * i.etime * 60) : (i.stime = 60 * i.stime, i.etime = 60 * i.etime),
            e > i.stime && e < i.etime && (a = !0),
            a
        }
    };
    i.exports = _
}),
*/


/*
define("footer_timer", ["ui"],
function(e, t, i) {
    "use strict";
    e("ui");
    var a, n = new Date((new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate(), "10", "00", "00").getTime(),
    s = $("#footer_today_timer"),
    r = $("#ms_timer"),
    o = JM.CONTROL,
    l = JM.ACTION,
    c = new Date(1e3 * parseInt(JM.SERVER_TIME)).getHours();
    if (("Home" == o && "show" == l || "Deal" == o && "detail" == l || "Home" == o) && 9 == c && s.length > 0) {
        var d = parseInt((n - (new Date).getTime()) / 1e3);
        d > 0 && (r.attr("diff", d), Jumei.util.fixed(s[0], {
            bottom: "0px",
            left: "0px"
        }), s.show(), a = new Jumei.ui.TimeCounter(r, {
            format: '<span class="z">MM</span><span>分</span><span class="z">SS.TT</span><span>秒</span>',
            dtime: 100,
            onStart: function() {
                r.html(this.html)
            },
            onEnd: function() {
                r.html('<span class="z">00</span><span>分</span><span class="z">00.00</span><span>秒</span>'),
                s.hide()
            }
        }))
    }
    s.find(".ms_close").click(function() {
        a.stop(),
        s.hide()
    })
}),

*/

/*
define("new_user_box",
function(e, t, i) {
    "use strict";
    var a, n = $("body"),
    s = Jumei.util.cookie.get("last_reg"),
    r = Jumei.util.cookie.get("newuser0424"),
    o = Jumei.util.cookie.get("sms_banner"),
    l = window.location.href,
    c = "undefined" != typeof JM.CONTROL && "Home" === JM.CONTROL && "undefined" != typeof JM.ACTION && "Home" === JM.ACTION,
    d = l.indexOf("referer=newusers"),
    u = "",
    p = "",
    h = $("#sms_html"),
    m = h.val(),
    f = !o && h.length,
    _ = {
        init: function() { (JM.DEGRADATION || s || JM.RM_UID || r || !$("#newuser_text").length || !c && -1 === d) && !f || (f ? (u = m, p = "sms_banner", a = ".sms_banner .link_top, .sms_banner .link_t") : (u = $("#newuser_text").val(), p = "newuser0424", a = ".newuser0424 .link_btm"), n.append(u), this.create_fn(p), this.close_fn($("#user_btn"), a))
        },
        create_fn: function(e) {
            this.newDialog = new Jumei.ui.Dialog("body", {
                elem: "#" + e,
                trigger: "UserBoxEvent",
                overlayClose: !0,
                effects: "fade"
            }),
            n.trigger("UserBoxEvent"),
            this.newDialog.on("open",
            function() {
                Jumei.util.cookie.set(e, "0", {
                    exp: "forever",
                    path: "/",
                    domain: JM.SITE_MAIN_TOPLEVELDOMAINNAME
                })
            })
        },
        close_fn: function(e, t) {
            var i = this;
            e.one("click",
            function() {
                i.newDialog.destroy()
            }),
            $(t).on("click",
            function() {
                i.newDialog.destroy()
            })
        }
    };
    i.exports = _
}),

*/


/*
define("pop_slide_menu",
function(e, t, i) {
    "use strict";
    function a() {
        var e = function() {
            var e = $(this).find(".pop_act_area");
            if ($(this).addClass("hover").siblings("li").removeClass("hover"), e.length) {
                var t = e.val();
                o.html(t),
                o.slideDown("fast")
            } else o.slideUp("fast")
        },
        t = function() {
            $(this).find(".channel_nav_list li").removeClass("hover"),
            o.slideUp("fast")
        };
        Jumei.util.hoverIntent($(".channel_nav_list li"), {
            interval: 100,
            over: e,
            timeout: 0,
            out: function() {}
        }),
        Jumei.util.hoverIntent($(".channel_nav_list_wrap"), {
            interval: 100,
            over: function() {},
            timeout: 0,
            out: t
        })
    }
    var n = ($("#header_pop_subAct"), $("#zpbz")),
    s = null,
    r = n.find(".bz_list"),
    o = $("#header_pop_subAct"),
    l = function() {
        n.bind("mouseenter",
        function() {
            clearTimeout(s),
            s = setTimeout(function() {
                r.slideDown()
            },
            200)
        }).bind("mouseleave",
        function() {
            clearTimeout(s),
            s = setTimeout(function() {
                r.slideUp()
            },
            200)
        })
    };
    l();
    var c = {};
    c.init = function() {
        a()
    },
    i.exports = c
}),


define("see_more",
function(e, t, i) {
    "use strict";
    function a(e) {
        this.id = $(e.id)
    }
    a.prototype = {
        init: function() {
            var e = this;
            e.check_tab_del(),
            e.check_tab(),
            e.click_btn()
        },
        check_tab_del: function() {
            var e = this,
            t = e.id,
            i = t.find(".look_all"),
            a = null,
            n = t.find(".class_list_wrap"),
            s = n.find("textarea").eq(0);
            e.id.bind("mouseenter",
            function() {
                clearTimeout(a),
                a = setTimeout(function() {
                    i.addClass("cur"),
                    e.loadDom(s),
                    n.slideDown(300)
                },
                200)
            }).bind("mouseleave",
            function() {
                clearTimeout(a),
                a = setTimeout(function() {
                    n.slideUp(300,
                    function() {
                        i.removeClass("cur")
                    })
                },
                200)
            })
        },
        check_tab: function() {
            function e(e) {
                var i = $(e),
                a = i.index(),
                n = s.eq(a),
                r = s.eq(a).find("textarea");
                s.css("left", "0"),
                i.hasClass("current") ? s.css("left", "10px") : n.animate({
                    left: "10px"
                },
                800),
                i.addClass("current").siblings().removeClass("current"),
                n.addClass("current").siblings().removeClass("current"),
                s.eq(a).attr("load") || (t.loadDom(r), s.eq(a).attr("load", "loaded"))
            }
            var t = this,
            i = t.id,
            a = i.find(".pop_list"),
            n = i.find(".pop_item_wrap"),
            s = n.find(".pop_item");
            Jumei.ui.menuAim(a, {
                submenuDirection: "left",
                rowSelector: "> li",
                activate: e,
                tolerance: 300
            })
        },
        loadDom: function(e) {
            var t, i = e.val();
            e[0] && "TEXTAREA" !== e[0].tagName || (t = e.parent(), t.html(i), e.remove())
        },
        click_btn: function() {
            var e = this.id,
            t = e.find(".close"),
            i = e.find(".class_list_wrap"),
            a = e.find(".look_all"),
            n = null;
            t.bind("click",
            function() {
                clearTimeout(n),
                n = setTimeout(function() {
                    i.slideUp(300,
                    function() {
                        a.removeClass("cur")
                    })
                },
                200)
            })
        }
    },
    i.exports = a
}),

*/


define("shop_sort",
function(e, t, i) {
    "use strict";
    function a(e) {
        this.headerMallItem = $(e.headerMallItem),
        this.headerMallLink = $(e.headerMallLink),
        this.headerMallSubNav = $(e.headerMallSubNav),
        this.oBtn = e.oBtn,
        this.init()
    }
    var n = function(e) {
        var t, i = e.val();
        e[0] && "TEXTAREA" !== e[0].tagName || (t = e.parent(), t.html(i), e.remove())
    };
    a.prototype = {
        init: function() {
            this.oBtn && this.slideAnimate()
        },
        slideAnimate: function() {
            var e, t, i = this.headerMallItem,
            a = this.headerMallLink,
            s = this.headerMallSubNav;
            i.bind("mouseenter",
            function() {
                s.length <= 0 || (clearTimeout(t), e = setTimeout(function() {
                    s.hasClass("loaded") || (n(s.find("textarea.fragment")), s.addClass("loaded")),
                    s.stop().slideDown(200,
                    function() {
                        $(this).css({
                            height: "auto"
                        })
                    }),
                    a.addClass("link_mall_current")
                },
                200))
            }).bind("mouseleave",
            function() {
                clearTimeout(e),
                t = setTimeout(function() {
                    s.stop().slideUp(200,
                    function() {
                        a.removeClass("link_mall_current"),
                        $(this).css({
                            height: "auto"
                        })
                    })
                },
                200)
            })
        }
    };
    var s = {
        headerMallItem: "#headerMallItem",
        headerMallLink: "#headerMallLink",
        headerMallSubNav: "#headerMallSubNav",
        oBtn: !0
    };
    a.init = function(e) {
        return "undefined" != typeof e && (s = $.extend(s, e)),
        new a(s)
    },
    i.exports = a
}),
define("cartbox",
function(e, t, i) {
    "use strict";
    function a(e) {
        this.ele = $(e.ele),
        this.ibar = e.ibar,
        this.oBeal = e.oBtn,
        this.init()
    }
    var n = {
        ele: "#cart_box",
        oBtn: !0
    };
    a.prototype = {
        init: function() {
            this.oBeal && (this.CarHover(), this.ele.cartNull = this.ele.find(".cart_content_null"), this.ele.carCenter = this.ele.find(".cart_content_center"), this.ele.cartAll = this.ele.find(".cart_content_all"), this.ele.parentAll = this.ele.find("#cart_content"), this.ele.priceAll = this.ele.find(".total_price"), this.ele.numberAll = this.ele.find(".num_all"), this.ele.showNum = this.ele.find(".num"), this.ele.cartTime = this.ele.find(".cart_left_time"), JM.DEGRADATION || this.showCartResult(!0))
        },
        setCartHtml: function(e, t) {
            var i = e.details,
            a = t.quantity,
            n = t.total_amount;
            this.ele.carCenter.empty();
            for (var s in i) i[s].is_cb ? "1" == i[s].is_cb && this.renderGroup(i[s], this.ele.carCenter) : this.renderItem(i[s], this.ele.carCenter);
            this.ele.numberAll.html(a),
            this.ele.priceAll.html(n)
        },
        renderItem: function(e, t) {
            var i = e.url,
            a = e.image_60,
            n = e.item_discount_price,
            s = e.quantity,
            r = (e.sku_no, e.deal_hash_id, e.short_name),
            o = "";
            i += i.indexOf("?") > -1 ? "&from=home_cart_float": "?from=home_cart_float",
            o += '<div class="cart_con_over cart_con_single"><div class="single_pic"><a href="' + i + '" target="_blank" alt="' + r + '"><img src="' + a + '" /></a></div>',
            o += '<div class="single_info"><a href="' + i + '" target="_blank" alt="' + r + '" class="name">' + r + "</a>",
            o += '<span class="price">￥' + n + '</span><span class="price_plus"> x </span><span class="price_num">' + s + "</span></div></div>",
            t.append(o)
        },
        renderGroup: function(e, t) {
            for (var i = 0,
            a = "<div class='cart_con_over cart_con_group'>",
            n = e.sub_items; i < n.length; i++) {
                var s = n[i],
                r = s.url,
                o = s.image_60,
                l = (s.item_discount_price, s.quantity),
                c = s.short_name;
                r += r.indexOf("?") > -1 ? "&from=home_cart_float": "?from=home_cart_float",
                a += '<div class="cart_con_single"><div class="single_pic"><a href="' + r + '" target="_blank" alt="' + c + '"><img src="' + o + '" /></a></div>',
                a += '<div class="single_info"><a href="' + r + '" target="_blank" alt="' + c + '" class="name">' + c + "<em>x" + l + "</em></a></div></div>"
            }
            var d = "<div class='group_count'><span>组合购买价 </span><span class='group_count_price'><em>¥" + e.item_price + "</em>x" + e.quantity + "</span></div></div>";
            a += d,
            t.append(a)
        },
        refreshTimer: function(e) {
            var t = e.etime;
            this.ele.cartTime.find(".cart_timer");
            t > 0 ? this.ele.cartTime.attr("diff", t) : this.ele.cartTime.html("已超过购物车商品保留时间，请尽快结算。"),
            "undefined" != typeof cartCounter && window.cartCounter.stop(),
            window.cartCounter = new Jumei.ui.TimeCounter(this.ele.cartTime, {
                format: '<span class="cart_timer">MM分SS.TT</span>后购物车将被清空,请及时结算',
                dtime: 100,
                onStart: function() {
                    this.$target.html(this.html)
                },
                onEnd: function() {
                    this.$target.html("已超过购物车商品保留时间，请尽快结算。")
                }
            })
        },
        setCartNum: function(e, t) {
            if ("0" == e) this.ele.cartNull.show(),
            this.ele.cartAll.hide();
            else {
                var i = t.details,
                a = (t.quantity, t.total_amount, t.etime);
                this.setCartHtml({
                    details: i,
                    total_quantity: i,
                    total_amount: i,
                    etime: a
                },
                t),
                this.ele.showNum.html(e),
                this.ele.showNum.show(),
                this.ele.cartAll.show(),
                this.ele.cartNull.hide()
            }
        },
        updateCartNum: function(e) {
            "0" == e ? this.ele.showNum.hide() : (this.ele.showNum.html(e), window.IbarNum = e, this.ele.showNum.show(), Jumei.app.iBar.cartNumberUpdate(e))
        },
        showCartResult: function(e) {
            var t = this;
            $.ajax({
                url: "http://cart.jumei.com/i/ajax/get_cart_data",
                data: {
                    _ajax_: 1,
                    which_cart: "all"
                },
                dataType: "jsonp",
                success: function(i) {
                    var a = i.quantity;
                    e ? (t.updateCartNum(a), t.refreshTimer(i)) : (t.setCartNum(a, i), t.refreshTimer(i))
                }
            })
        },
        CarHover: function() {
            var e = $(this.ele),
            t = this;
            Jumei.util.hoverIntent(e, {
                interval: 80,
                over: function() {
                    //t.showCartResult(), 注解掉
                    $(this).addClass("car-current")
                },
                timeout: 120,
                out: function() {
                    t.ele.cartNull.css({
                        display: "none"
                    }),
                    t.ele.cartAll.css({
                        display: "none"
                    }),
                    $(this).removeClass("car-current")
                }
            })
        }
    },
    a.init = function(e) {
        return n = $.extend(n, e),
        new a(n)
    },
    i.exports = a
}),


/*
define("nav_icon_animate",
function(e, t, i) {
    "use strict";
    function a(e) {
        this.target = $(e),
        this.items = this.target.find("li")
    }
    var n = [],
    s = 0,
    r = 0,
    o = !1,
    l = null,
    c = null;
    a.prototype = {
        init: function() {
            if (0 !== this.target.length) {
                var e = this,
                t = Jumei.util.cookie.get("animate_Cookie"),
                i = Jumei.util.cookie.get("pop_cookie");
                this.each_aW(),
                t && "" !== t || (l = setInterval(function() {
                    e.autoPlay()
                },
                2e3)),
                "Pop" === JM.CONTROL ? (i && "" !== i || (l = setInterval(function() {
                    e.autoPlay()
                },
                2e3)), Jumei.util.cookie.set("pop_cookie", "1", {
                    exp: 1e3,
                    path: "/",
                    domain: JM.SITE_MAIN_TOPLEVELDOMAINNAME
                })) : this.setCookies(),
                this.mouseEvent()
            }
        },
        each_aW: function() {
            this.items.each(function() {
                var e = $(this),
                t = e.find("a").width();
                n.push(t)
            })
        },
        autoPlay: function() {
            r++,
            r > 6 ? (clearInterval(l), l = null, this.setDefault(), o = !0) : (s > 2 && (s = 0), this.autoMove(s), s++)
        },
        setDefault: function() {
            this.items.stop().animate({
                width: "30px"
            },
            300)
        },
        autoMove: function(e) {
            var t = n[e];
            this.items.eq(e).stop().animate({
                width: t + "px"
            },
            300),
            this.items.eq(e).siblings().stop().animate({
                width: "30px"
            },
            300)
        },
        mouseEvent: function() {
            var e = this;
            this.items.bind("mouseenter",
            function() {
                if (clearInterval(l), clearTimeout(c), 30 == $(this).width() && (o = !0), o) {
                    var t = $(this),
                    i = t.index();
                    c = setTimeout(function() {
                        e.autoMove(i)
                    },
                    200),
                    o = !1
                } else c = setTimeout(function() {
                    e.setDefault()
                },
                200),
                o = !0
            }).bind("mouseleave",
            function() {
                clearInterval(l),
                clearTimeout(c),
                e.setDefault(),
                o = !0
            })
        },
        setCookies: function() {
            Jumei.util.cookie.set("animate_Cookie", "0", {
                exp: 1e3,
                path: "/",
                domain: JM.SITE_MAIN_TOPLEVELDOMAINNAME
            })
        }
    }
}),

*/

/*
define("search",
function(e, t, i) {
    "use strict";
    window.searchCallback = function(e, t) {
        var i = $("#" + t),
        a = "",
        n = 0,
        s = !1;
        for (var r in e) {
            var o = e[r];
            n++;
            var l = "",
            c = o.q,
            d = "";
            parseInt(o.at) >= 0 && (l = "约" + o.at + "件"),
            void 0 !== o.cn && (s || (a += '<div title="' + o.q + '" pos=' + n + ' class="' + d + '"><span>' + c + "</span><label>" + l + "</label></div>"), d = "cat", c = "在<em>" + o.cn + "</em>分类中搜索", parseInt(o.ct) >= 0 && (l = "约" + o.ct + "件"), s = !0),
            a += '<div title="' + o.q + '" pos=' + n + ' class="' + d + '" cid="' + o.c_id + '"><span>' + c + "</span><label>" + l + "</label></div>"
        }
        n > 0 && i.html(a);
        var u = $("div", i);
        $("div.cat:last", i).css("border-bottom", "solid 1px #ddd"),
        u.hover(function() {
            $(this).addClass("selected").siblings().removeClass("selected")
        }),
        u.bind("click",
        function() {
            var e = $(this).attr("title"),
            a = $(this).attr("cid");
            if ("undefined" != a && i.prev().find("[name=cat]").val(a), i.prev().find("[name=search]").val(e), "" === e) alert("搜索字数太少，会影响到搜索结果，重新填写一下吧");
            else {
                var n = "foot_search_pop_div" == t ? "btmlist": "toplist",
                s = "search_" + n + "_" + e + "_word_pos_" + $(this).attr("pos");
                i.prev().find("[name=from]").val(s),
                i.prev().submit()
            }
        }),
        n > 0 ? i.addClass("search_result_pop").removeClass("search_result_pop_a") : i.addClass("search_result_pop_a").removeClass("search_result_pop")
    },
    function(e) {
        var t, i = [],
        a = !1,
        n = !0,
        s = function(n) {
            i.push(n),
            a || (a = !0, e.getJSON("http://search.jumei.com/ajax_get_default_word?callback=?", {},
            function(e) {
                t = e.content;
                for (var a = i.length,
                n = 0; a > n; n++) i[n](t)
            }))
        };
        e.fn.extend({
            JumeiSearch: function(i) {
                return this.each(function() {
                    var a, r, o = e(this),
                    l = e(this).parent().next(),
                    c = e(this).next(),
                    d = e(this).next().next(),
                    u = -1,
                    p = null;
                    "" === o.val() && (t ? o.attr("default_val", t).val(t) : s(function(e) {
                        o.attr("default_val", e).val(e)
                    })),
                    o.focus(function(t) {
                        n && (o.val() == o.attr("default_val") && o.val(""), setTimeout(function() {
                            n && e.getJSON("http://search.jumei.com/ajax_get_assoc_word?search=" + encodeURI(o.val()) + "&container=" + i + "&callback=?",
                            function(e) {})
                        },
                        100)),
                        o.addClass("focus")
                    }).keydown(function(t) {
                        if (9 == t.keyCode) return l.addClass("search_result_pop_a").removeClass("search_result_pop"),
                        !1;
                        r = e.trim(o.val());
                        var a = e("div", l),
                        n = "",
                        s = "",
                        p = "";
                        return 40 == t.keyCode && (u = u + 1 == a.length ? -1 : u, u++, a.removeClass("selected").eq(u).addClass("selected"), a.length > 0 && (n = a.eq(u).attr("title"), o.val(n), a.eq(u).hasClass("cat") ? d.val(a.eq(u).attr("cid")) : d.val(""), s = "foot_search_pop_div" == i ? "btmlist": "toplist", p = "search_" + s + "_" + n + "_word_pos_" + a.eq(u).attr("pos"), c.val(p))),
                        38 == t.keyCode ? (u = 0 > u ? a.length - 1 : u, u--, a.removeClass("selected").eq(u).addClass("selected"), a.length > 0 && (n = a.eq(u).attr("title"), o.val(n), a.eq(u).hasClass("cat") ? d.val(a.eq(u).attr("cid")) : d.val(""), s = "foot_search_pop_div" == i ? "btmlist": "toplist", p = "search_" + s + "_" + n + "_word_pos_" + a.eq(u).attr("pos"), c.val(p)), !1) : void 0
                    }).keyup(function(t) {
                        if (clearTimeout(p), 13 != t.keyCode && 37 != t.keyCode && 38 != t.keyCode && 39 != t.keyCode && 40 != t.keyCode && 9 != t.keyCode) {
                            a = e.trim(o.val());
                            var s = (a.substring(0, 1), !0);
                            s && (u = -1, a = encodeURI(a), n && (p = setTimeout(function() {
                                e.getJSON("http://search.jumei.com/ajax_get_assoc_word?search=" + a + "&container=" + i + "&callback=?",
                                function(e) {})
                            },
                            100)))
                        }
                    }).blur(function() {
                        "" === e(this).val() && "" !== o.attr("default_val") && e(this).val(o.attr("default_val")),
                        u = -1,
                        o.removeClass("focus")
                    }),
                    e("body").click(function(e) {
                        l.removeClass("search_result_pop").addClass("search_result_pop_a")
                    })
                })
            }
        })
    } (jQuery),
    $("#mall_search_input").JumeiSearch("top_search_pop_div"),
    $("#header_search_input").JumeiSearch("top_out_search_pop_div")
}),

*/




/*  城市选择*/
/*
define("city_choose",
function(e, t, i) {
    "use strict";
    var a, n = (Jumei.util.cookie.get("local_city_new") || Jumei.util.cookie.get("local_city"), {
        beijing: {
            site: "bj",
            name: "北京"
        },
        tianjin: {
            site: "bj",
            name: "天津"
        },
        hebei: {
            site: "bj",
            name: "河北"
        },
        shanxi1: {
            site: "bj",
            name: "山西"
        },
        shandong: {
            site: "bj",
            name: "山东"
        },
        neimenggu: {
            site: "bj",
            name: "内蒙古"
        },
        shanghai: {
            site: "sh",
            name: "上海"
        },
        zhejiang: {
            site: "sh",
            name: "浙江"
        },
        jiangsu: {
            site: "sh",
            name: "江苏"
        },
        anhui: {
            site: "sh",
            name: "安徽"
        },
        guangdong: {
            site: "gz",
            name: "广东"
        },
        fujian: {
            site: "gz",
            name: "福建"
        },
        hainan: {
            site: "gz",
            name: "海南"
        },
        guangxi: {
            site: "gz",
            name: "广西"
        },
        jiangxi: {
            site: "gz",
            name: "江西"
        },
        hunan: {
            site: "gz",
            name: "湖南"
        },
        henan: {
            site: "bj",
            name: "河南"
        },
        hubei: {
            site: "sh",
            name: "湖北"
        },
        liaoning: {
            site: "bj",
            name: "辽宁"
        },
        jilin: {
            site: "bj",
            name: "吉林"
        },
        heilongjiang: {
            site: "bj",
            name: "黑龙江"
        },
        sichuan: {
            site: "cd",
            name: "四川"
        },
        chongqing: {
            site: "cd",
            name: "重庆"
        },
        yunnan: {
            site: "cd",
            name: "云南"
        },
        guizhou: {
            site: "cd",
            name: "贵州"
        },
        xizang: {
            site: "bj",
            name: "西藏"
        },
        shanxi: {
            site: "bj",
            name: "陕西"
        },
        gansu: {
            site: "bj",
            name: "甘肃"
        },
        qinghai: {
            site: "bj",
            name: "青海"
        },
        xinjiang: {
            site: "bj",
            name: "新疆"
        },
        ningxia: {
            site: "bg",
            name: "宁夏"
        },
        xianggang: {
            site: "bj",
            name: "香港"
        },
        taiwan: {
            site: "bj",
            name: "台湾"
        },
        aomen: {
            site: "bj",
            name: "澳门"
        },
        diaoyudao: {
            site: "bj",
            name: "钓鱼岛"
        },
        haiwai: {
            site: "bj",
            name: "海外"
        }
    }),
    s = function(e) {
        var t = "";
        return t += '<dl class="user-local-city">',
        e ? (t += '<dt><span class="user-close"></span></dt>', t += '<dd><span class="sheng">华北</span><div class="city-list">') : t += '<dd class="noborder"><span class="sheng">华北</span><div class="city-list">',
        t += '<a class="city" href="javascript:;" data-id="bj" data-city="beijing">北京</a><a href="javascript:;" class="city" data-id="bj" data-city="tianjin">天津</a><a href="javascript:;" class="city" data-city="hebei" data-id="bj">河北</a><a href="javascript:;" class="city" data-id="bj" data-city="shanxi1">山西</a><a href="javascript:;" class="city" data-id="bj" data-city="neimenggu">内蒙古</a>',
        t += "</div></dd>",
        t += '<dd><span class="sheng">华东</span><div class="city-list">',
        t += '<a href="javascript:;" class="city" data-id="sh" data-city="shanghai">上海</a><a href="javascript:;" class="city" data-id="sh" data-city="zhejiang">浙江</a><a href="javascript:;" class="city" data-id="sh" data-city="jiangsu">江苏</a><a href="javascript:;" class="city" data-id="gz" data-city="fujian">福建</a><a href="javascript:;" class="city" data-id="gz" data-city="jiangxi">江西</a><a href="javascript:;" class="city" data-id="bj" data-city="shandong">山东</a><a href="javascript:;" class="city" data-id="sh" data-city="anhui">安徽</a>',
        t += "</div></dd>",
        t += '<dd><span class="sheng">华南</span><div class="city-list">',
        t += '<a href="javascript:;" class="city" data-id="gz" data-city="guangdong">广东</a><a href="javascript:;" class="city" data-id="gz" data-city="hainan">海南</a><a href="javascript:;" class="city" data-id="gz" data-city="guangxi">广西</a>',
        t += "</div></dd>",
        t += '<dd><span class="sheng">华中</span><div class="city-list">',
        t += '<a href="javascript:;" class="city" data-id="sh" data-city="hubei">湖北</a><a href="javascript:;" class="city" data-id="gz" data-city="hunan">湖南</a><a href="javascript:;" class="city" data-id="bj" data-city="henan">河南</a>',
        t += "</div></dd>",
        t += '<dd><span class="sheng">东北</span><div class="city-list">',
        t += '<a href="javascript:;" class="city" data-id="bj" data-city="liaoning">辽宁</a><a href="javascript:;" class="city" data-id="bj" data-city="jilin">吉林</a><a href="javascript:;" class="city" data-id="bj" data-city="heilongjiang">黑龙江</a>',
        t += "</div></dd>",
        t += '<dd><span class="sheng">西南</span><div class="city-list">',
        t += '<a href="javascript:;" class="city" data-id="cd" data-city="chongqing">重庆</a><a href="javascript:;" class="city" data-id="cd" data-city="sichuan">四川</a><a href="javascript:;" class="city" data-id="cd" data-city="yunnan">云南</a><a href="javascript:;" class="city" data-id="cd" data-city="guizhou">贵州</a><a href="javascript:;" class="city" data-id="bj" data-city="xizang">西藏</a>',
        t += "</div></dd>",
        t += '<dd><span class="sheng">西北</span><div class="city-list">',
        t += '<a href="javascript:;" class="city" data-id="bj" data-city="shanxi">陕西</a><a href="javascript:;" class="city" data-id="bj" data-city="gansu">甘肃</a><a href="javascript:;" class="city" data-id="bj" data-city="ningxia">宁夏</a><a href="javascript:;" class="city" data-id="bj" data-city="qinghai">青海</a><a href="javascript:;" class="city" data-id="bj" data-city="xinjiang">新疆</a>',
        t += "</div></dd>",
        t += '<dd><span class="sheng">更多</span><div class="city-list">',
        t += '<a href="javascript:;" class="city" data-id="bj" data-city="xianggang">香港</a><a href="javascript:;" class="city" data-id="bj" data-city="aomen">澳门</a><a  href="javascript:;" class="city" data-id="bj" data-city="taiwan">台湾</a><a href="javascript:;" class="city" data-id="bj" data-city="diaoyudao">钓鱼岛</a><a href="javascript:;" class="city" data-id="bj" data-city="haiwai">海外</a>',
        t += "</div></dd>",
        t += "</dl>"
    },
    r = function() {
        var e = "";
        return e += '<div class="city-loading hidden">',
        e += "<i></i>正在切换至<span>上海</span>...",
        e += "</div>"
    },
    o = function(e) {
        var t, i = void 0 === e ? window.location.host.split(".")[0] : e;
        switch (i) {
        case "cd":
            t = n.sichuan.name;
            break;
        case "bj":
            t = n.beijing.name;
            break;
        case "sh":
            t = n.shanghai.name;
            break;
        case "gz":
            t = n.guangdong.name;
            break;
        default:
            t = "other"
        }
        return t
    },
    l = function(e) {
        var t;
        switch (e) {
        case "cd":
            t = "sichuan";
            break;
        case "bj":
            t = "beijing";
            break;
        case "sh":
            t = "shanghai";
            break;
        case "gz":
            t = "guangdong"
        }
        return t
    },
    c = function(e) {
        $(".header-city-list").find(".city").each(function() {
            var t = $(this);
            $.trim(t.html()) == e && t.addClass("user-hover")
        })
    },
    d = function(e) {
        for (var t = ["cd", "bj", "sh", "gz"], i = !1, a = 0; a < t.length; a++) {
            var n = t[a];
            n == e && (i = !0)
        }
        return i
    },
    u = function() {
        var e, t, i, a = Jumei.util.cookie.get("local_city"),
        s = $(".default-city"),
        r = Jumei.util.cookie.get("local_city_new"),
        u = window.location.hostname.match(/(^\w+)/g).join("");
        t = r ? Jumei.util.parseUrl(r) : $.parseJSON(a),
        i = n[t.city].name,
        t.site && "undefined" != typeof i ? (d(u) && u != t.site && (i = o(u), m(u, l(u))), p(i), c(i)) : (e = o("bj"), p(e)),
        s.css({
            visibility: "visible"
        })
    },
    p = function(e) {
        $(".add-default-city").html(e)
    },
    h = function(e) {
        var t = "{ ";
        return t += '"site":"' + e.site + '",',
        t += '"city":"' + e.city + '"',
        t += " }"
    },
    m = function(e, t) {
        var i = "." + window.location.host.split(".").slice(1).join("."),
        a = h({
            site: e,
            city: t
        });
        Jumei.util.cookie.set("default_site_25", e, {
            exp: "forever",
            domain: i,
            path: "/"
        }),
        Jumei.util.cookie.set("local_city_new", "?site=" + e + "&city=" + t, {
            exp: "forever",
            domain: i,
            path: "/"
        }),
        Jumei.util.cookie.set("local_city", a, {
            exp: "forever",
            domain: i,
            path: "/"
        })
    },
    f = function(e) {
        var t = $(".header-city-list"),
        i = s(e),
        a = r(),
        n = $(".default-city"),
        o = $(".user-local-icon"),
        l = null;
        t.append(i),
        t.append(a),
        n.mouseenter(function() {
            var e = $(this);
            clearTimeout(l),
            l = setTimeout(function() {
                e.find(".add-city-icons").addClass("default-city-border"),
                o.css({
                    display: "block"
                }),
                t.stop().slideDown(200,
                function() {
                    $(this).css({
                        height: "auto"
                    })
                })
            },
            300)
        }).mouseleave(function() {
            var e = $(this),
            i = $(".city-loading");
            i.hasClass("hidden") && (clearTimeout(l), l = setTimeout(function() {
                t.stop().slideUp(200,
                function() {
                    $(this).css({
                        height: "auto"
                    }),
                    e.find(".add-city-icons").removeClass("default-city-border"),
                    o.css({
                        display: "none"
                    })
                })
            },
            600))
        }),
        _()
    },
    _ = function() {
        var e = $(".user-local-city"),
        t = $(".header-city-list"),
        i = ($(".user-city-choose"), $(".city-loading")),
        a = null,
        n = window.location.href,
        s = function(e, s, r, o) {
            p(s),
            m(r, o),
            e.parents().hasClass("header-city-list") && $(".header-city-list").find(".user-local-city").css({
                display: "none"
            }),
            i.find("span").html(s),
            i.removeClass("hidden");
            var l = window.location.host.split(".")[0],
            c = d(l);
            if (c) clearTimeout(a),
            a = setTimeout(function() {
                window.location.href = "http://" + r + "." + JM.SITE_MAIN_TOPLEVELDOMAINNAME
            },
            1e3);
            else {
                var u = /(site=)+\w+/g,
                h = n.replace(u, "site=" + r);
                u.test(n) ? window.location.href = h: window.location.href = n.indexOf("?") > 0 ? n + "&site=" + r: n + "?site=" + r,
                t.trigger("mouseleave")
            }
        };
        $(".city-list").on("click", ".city",
        function() {
            var t = $(this),
            i = $.trim(t.html()),
            a = t.attr("data-id"),
            n = t.attr("data-city");
            e.find(".city").removeClass("user-hover"),
            t.addClass("user-hover"),
            s(t, i, a, n)
        })
    },
    v = function() {
        var e, t, i;
        $(".user-city-choose");
        $(".user-close").one("click",
        function() {
            a.destroy(),
            "other" !== o() ? (t = window.location.host.split(".")[0], e = l(), i = o()) : (t = "" === Jumei.util.cookie.get("default_site_25") ? "bj": Jumei.util.cookie.get("default_site_25"), e = l(t), i = o(t)),
            m(t, e),
            p(i),
            $(".default-city").css({
                visibility: "visible"
            })
        })
    },
    g = function(e) {
        var t = "",
        i = s(e);
        t += '<div class="user-city-choose">',
        t += i,
        t += "</div>",
        $("body").append(t);
        var n = $(".user-city-choose");
        n.css({
            width: "550px",
            height: "352px"
        }),
        _(),
        a = new Jumei.ui.Dialog("body", {
            elem: ".user-city-choose",
            dragHandle: ".user-local-city dt",
            trigger: "showCityChoose"
        }),
        $("body").trigger("showCityChoose"),
        v(),
        f(!1)
    },
    b = function() {
        var e, t = Jumei.util.cookie.get("local_city"),
        i = Jumei.util.cookie.get("local_city_new");
        return "" !== i ? e = Jumei.util.parseUrl(i) : (e = $.parseJSON(t), m(e.site, e.city)),
        e
    },
    w = function() {
        var e = Jumei.util.cookie.get("local_city_new") || Jumei.util.cookie.get("local_city"),
        t = Jumei.util.cookie.get("default_site_25");
        if ("undefined" != typeof JM.CONTROL && "Account" !== JM.CONTROL) if (e && null != e) {
            var i;
            try {
                var a = b();
                "other" !== o(a.site) && void 0 !== n[a.city] || (i = l(t), m(t, i)),
                f(!1),
                u()
            } catch(s) {
                i = l(t),
                m(t, i),
                f(!1),
                u()
            }
        } else g(!0)
    },
    y = navigator.userAgent.toLowerCase(),
    x = y.match(/\b(ipad)\b/) || !1,
    k = y.match(/\b(jumei)\b/) || !1;
    x || k || w()
}),


*/
/*
define("nav_animate",
function(e, t, i) {
    "use strict";
    var a = $(".channel_nav_list_wrap"),
    n = a.find("li"),
    s = a.find(".current"),
    r = $(".animate_line"),
    o = $(".main_nav_list"),
    l = function(e) {
        var t = s.index(),
        i = void 0 === arguments[0] ? t: e,
        a = n.eq(i).find("a").innerWidth(),
        o = c(i);
        r.stop(!1, !0).animate({
            width: a + "px",
            left: o + "px"
        },
        200)
    },
    c = function(e) {
        var t = 0;
        if (0 === i) return void(t = 0);
        for (var i = 0; e > i; i++) t += n.eq(i).innerWidth() + 18;
        return t + 18
    };
    a.on("mouseenter", "li",
    function(e) {
        var t = $(this),
        i = t.index();
        c(i);
        l(i)
    }),
    a.mouseleave(function() {
        var e, t = $(this);
        if (s.length <= 0) {
            var i = n.eq(0).width();
            r.stop(!1, !0).animate({
                left: "18px",
                width: i + "px"
            },
            200,
            function() { (o.find(".current").find(".zp").length > 0 || JM.RM_CONTROL && "Search" == JM.RM_CONTROL) && r.css({
                    display: "none"
                })
            })
        } else {
            e = s.index();
            t.find(".current").index();
            l(e)
        }
    }),
    s.length <= 0 ? o.find(".current").find(".zp").length > 0 || JM.RM_CONTROL && "Search" == JM.RM_CONTROL ? r.hide() : l(0) : l()
}),
*/

/*
define("ibar-faq",
function(e, t, i) {
    "use strict";
    var a = '<div class="dialog_ser"><div class="faq_title"><span class="title">请您选择咨询类型</span><span class="close"><img class="close_ser" src="http://chat.jumei.com/images/ser_close.jpg"></span></div><div class="faq_content" id="faq_content"></div></div>',
    n = $(a),
    s = {
        dialog: null,
        manager: function() {
            this.isNewEdition() && n.addClass("dialog_ser_new"),
            this.addContent(),
            this.show()
        },
        content: [{
            be: "售前咨询",
            fe: '<a href="http://chat.jumei.com/custom?groupid=106" target="faq_view">名品咨询</a><a href="http://chat.jumei.com/custom?groupid=107" target="faq_view">化妆品咨询</a><a href="http://chat.jumei.com/custom?groupid=155" target="faq_view">极速免税店咨询</a>'
        },
        {
            be: "名品特卖",
            fe: '<a href="http://chat.jumei.com/custom?groupid=108" target="faq_view">名品配送</a><a href="http://chat.jumei.com/custom?groupid=109" target="faq_view">名品售后</a><a href="http://chat.jumei.com/custom?groupid=110" target="faq_view">POP产品问题</a>'
        },
        {
            be: "化妆品业务",
            fe: '<a href="http://chat.jumei.com/custom?groupid=111" target="faq_view">配送服务</a><a href="http://chat.jumei.com/custom?groupid=112" target="faq_view">售后服务</a><a href="http://chat.jumei.com/custom?groupid=113" target="faq_view">自营产品问题</a>'
        },
        {
            be: "极速免税店业务",
            fe: '<a href="http://chat.jumei.com/custom?groupid=157" target="faq_view">配送服务</a><a href="http://chat.jumei.com/custom?groupid=158" target="faq_view">售后服务</a><a href="http://chat.jumei.com/custom?groupid=159" target="faq_view">产品问题</a>'
        },
        {
            be: "会员服务",
            fe: '<a href="http://chat.jumei.com/custom?groupid=104" target="faq_view">会员服务</a>'
        },
        {
            be: "投诉建议",
            fe: '<div class="tou_child"><a href="javascript:;" class="tou_tit">投诉快递</a><div class="tou_child_list" style="display:none"><a href="http://chat.jumei.com/custom?groupid=160" target="faq_view">自营产品</a><a href="http://chat.jumei.com/custom?groupid=161" target="faq_view">名品特卖</a><a href="http://chat.jumei.com/custom?groupid=162" target="faq_view">极速免税店</a></div></div><div class="tou_child"><a href="javascript:;" class="tou_tit">投诉产品</a><div class="tou_child_list" style="display:none"><a href="http://chat.jumei.com/custom?groupid=163" target="faq_view">自营产品</a><a href="http://chat.jumei.com/custom?groupid=164" target="faq_view">名品特卖</a><a href="http://chat.jumei.com/custom?groupid=165" target="faq_view">极速免税店</a></div></div><p style=" height: 1px; line-height: 1px; margin: 0; clear: both"></p><a href="http://chat.jumei.com/custom?groupid=116" target="faq_view">投诉客服</a><a href="http://chat.jumei.com/custom?groupid=117" target="faq_view">投诉其他</a>'
        }],
        newContent: [{
            be: "售前咨询",
            fe: '<a href="http://chat.jumei.com/custom?groupid=201" target="faq_view">服饰</a><a href="http://chat.jumei.com/custom?groupid=202" target="faq_view">化妆品</a><a href="http://chat.jumei.com/custom?groupid=203" target="faq_view">母婴</a><a href="http://chat.jumei.com/custom?groupid=204" target="faq_view">轻奢</a>'
        },
        {
            be: "售后服务",
            fe: '<a href="http://chat.jumei.com/custom?groupid=206" target="faq_view">快递咨询</a><a href="http://chat.jumei.com/custom?groupid=207" target="faq_view">退货</a><div class="tou_child"><a href="javascript:;" class="tou_tit">产品问题</a><div class="tou_child_list" style="display:none"><a href="http://chat.jumei.com/custom?groupid=209" target="faq_view">服饰</a><a href="http://chat.jumei.com/custom?groupid=210" target="faq_view">化妆品</a><a href="http://chat.jumei.com/custom?groupid=211" target="faq_view">母婴</a><a href="http://chat.jumei.com/custom?groupid=212" target="faq_view">轻奢</a></div></div><p style=" height: 1px; line-height: 1px; margin: 0; clear: both"></p>'
        }],
        isNewEdition: function() {
            var e = JM.SERVER_TIME || JM.CLIENT_TIME,
            t = 1435766400;
            return e >= t
        },
        show: function() {
            var e = this;
            this.dialog = new Jumei.ui.Dialog(".mpbtn_support", {
                elem: n,
                dragHandle: ".dialog_ser",
                overlayClose: !0,
                effects: "fade"
            }),
            this.dialog.on("open",
            function() {
                e.bindEvents()
            })
        },
        addContent: function() {
            for (var e = this.isNewEdition(), t = e ? this.newContent: this.content, i = t.length, a = "", s = 0; i > s; s++) a += '<li class="li_on"><div class="be">' + t[s].be + '</div><div class="fe clearfix">' + t[s].fe + "</div></li>";
            e && (a += '<li class="li_on_a"><a href="http://chat.jumei.com/custom?groupid=213" target="faq_view">会员服务</a></li><li class="li_on_a"><a href="http://chat.jumei.com/custom?groupid=214" target="faq_view">投诉建议</a></li>'),
            n.find("#faq_content").html(a)
        },
        bindEvents: function() {
            var e = $(".dialog_ser").find("li"),
            t = $(".dialog_ser").find(".close"),
            i = this.dialog;
            e.hover(function() {
                $(this).children(".be").hide(),
                $(this).addClass("li_on_hover").children(".fe").show()
            },
            function() {
                $(this).children(".be").show(),
                $(this).removeClass("li_on_hover").children(".fe").hide(),
                $(".tou_child_list").hide()
            }),
            $(".tou_tit").click(function(e) {
                var t = $(this).siblings("div"),
                i = $(this).parents(".li_on_hover");
                i.css({
                    height: "auto"
                }),
                "none" == t.css("display") ? t.show() : t.hide(),
                e.stopPropagation()
            }),
            n.find("a:not(.tou_tit)").on("click",
            function() {
                e.each(function() {
                    $(this).removeClass("li_on_hover"),
                    $(this).children(".be").show(),
                    $(this).children(".fe").hide()
                }),
                $(".tou_child_list").hide(),
                i.close()
            }),
            t.bind("click",
            function() {
                i.close()
            })
        }
    };
    s.init = function() {
        null == s.dialog && s.manager()
    },
    i.exports = s
}),

*/






/*
define("ibar-tips",
function(e, t, i) {
    function a(e, t) {
        var i = e.offset().top;
        i -= k.scrollTop(),
        t.css({
            top: i + "px"
        })
    }
    function n() {
        if (r = $("#iBar"), o = r.find("div.ibar_main_panel"), l = o.find("li.mpbtn_cart"), c = l.find("a"), 0 === w) {
            p.append(h);
            var e = $(".tips_cash_box"),
            t = parseInt(g("newCash")),
            i = function() {
                b("newCash", "1", {
                    exp: "forever",
                    path: "/",
                    domain: v
                })
            };
            x - y > 120 && (!t || 1 !== t) && (e.show(), a(c, e), setTimeout(function() {
                e.hide(),
                i(),
                k.unbind("resize.cashbox")
            },
            15e3), e.is(":visible") && k.bind("resize.cashbox",
            function() {
                a(c, e)
            }), e.find("a.ibar_closebtn").bind("click",
            function(t) {
                e.remove(),
                i(),
                t.preventDefault(),
                k.unbind("resize.cashbox")
            }))
        }
    }
    function s() {
        r = $("#iBar"),
        o = r.find("div.ibar_main_panel"),
        d = o.find("li.mpbtn_asset"),
        u = d.find("a"),
        p.append(f);
        var e = $(".tips_customer_box"),
        t = function() {
            e.remove(),
            b("cash160", null),
            k.unbind("resize.olduser")
        };
        g("cash160") && (e.show(), a(u, e), setTimeout(t, 2e4), e.is(":visible") && k.bind("resize.olduser",
        function() {
            a(u, e)
        }), e.find("a.ibar_closebtn").bind("click",
        function(e) {
            t(),
            e.preventDefault()
        }), u.bind("click",
        function(e) {
            t(),
            e.preventDefault()
        }))
    }
    var r, o, l, c, d, u, p, h, m, f, _ = window.location.host.split(".").slice( - 2).join(".");
    h = '<div class="tips_cash_box"><div class="newuser_tips_cash"><h3>领取新人百元现金券</h3><p>今天下单尽享优惠</p><a class="coupon_btn" href="http://passport.' + _ + '/i/account/signup" target="_blank">注册领取</a></div><s class="icon_arrow_white"></s><a href="javascript:;" class="ibar_closebtn" title="关闭"></a></div>',
    m = '<div class="tips_cart_box"><div class="newuser_tips_cart"><h3>您已获得百元现金券</h3><p>今天之内下单最多立减40元</p><p>还有5分钟购物车就要清空了</p></div><s class="icon_arrow_white"></s><a href="javascript:;" class="ibar_closebtn" title="关闭"></a></div>',
    f = '<div class="tips_customer_box"><div class="olduser_cash"><h3>这里查看百元现金券</h3><p>有效期24小时</p></div><s class="icon_arrow_white"></s><a href="javascript:;" class="ibar_closebtn" title="关闭"></a></div>';
    var v, g = Jumei.util.cookie.get,
    b = Jumei.util.cookie.set,
    w = parseInt(g("register_time")) || 0,
    y = parseInt(g("first_visit_time")) || 0,
    x = Math.ceil((new Date).getTime() / 1e3),
    k = $(window),
    j = window.location.hostname.split(".");
    j = j.slice( - 2),
    v = j.join(".");
    var C = {
        init: function(e) {
            p = e.container,
            n()
        }
    };
    i.exports = C
}),

*/


/*
define("ibar-monitor",
function(e, t, i) {
    "use strict";
    var a = function() {
        window._gaq && $("#iBar div.ibar_main_panel").find("a").bind("mousedown",
        function() {
            var e = $(this).parent()[0].className,
            t = e.match(/mpbtn_(\w+)\b/);
            t && (t = "ibar_" + t[1], "gotop" !== t && window._gaq.push(["_trackEvent", t, "clicked"]))
        })
    };
    i.exports = a
}),
define("ibar-fly",
function(e, t, i) {
    var a = $(window),
    n = {
        targeter: null,
        bubbler: null,
        bubbleAni: function(e, t) {
            var i = this;
            e.fadeOut(10,
            function() {
                e.css({
                    width: "45px",
                    height: "45px"
                }),
                setTimeout(function() {
                    var e = i.targeter.offset();
                    e = {
                        left: e.left - a.scrollLeft(),
                        top: e.top - a.scrollTop()
                    },
                    i.bubbler.css({
                        position: "fixed",
                        display: "block",
                        opacity: 1,
                        top: e.top - 13,
                        left: e.left + 4
                    }).animate({
                        top: e.top - 40,
                        opacity: 0
                    },
                    {
                        duration: 800,
                        complete: function() {
                            i.bubbler.hide(),
                            t && t()
                        }
                    })
                },
                300)
            })
        },
        cartScale: function() {
            var e = this;
            e.targeter.css({
                zIndex: 9992
            }),
            e.targeter.animate({
                scale: .3
            },
            {
                duration: 100,
                step: function(t) {
                    e.targeter.css("transform", "scale(" + (1 + t) + ")")
                }
            }).animate({
                scale: .3
            },
            {
                duration: 500,
                step: function(t) {
                    e.targeter.css("transform", "scale(" + (1.3 - t) + ")")
                }
            })
        },
        main: function(e) {
            var t = this;
            t.targeter = e.targeter,
            t.starter = e.starter,
            t.bubbler = e.bubbler;
            var i, n = e.flyer,
            s = e.start,
            r = e.target,
            o = e.complete,
            l = {
                left: s.left,
                top: s.top
            },
            c = {
                left: r.left,
                top: r.top
            },
            d = e.unAnim,
            u = e.isIE6,
            p = e.speed ? e.speed: 1,
            h = void 0 === e.bubble ? !0 : e.bubble,
            m = (e.hideDelay ? e.hideDelay: "", !u),
            f = e.targetOffset || {
                left: 0,
                top: 0
            },
            _ = e.flyerOffset || {
                left: 0,
                top: 0
            },
            v = e.flyerResize || {
                x: 15,
                y: 15
            };
            n.css({
                left: s.left - a.scrollLeft(),
                top: s.top - a.scrollTop(),
                position: m ? "fixed": "absolute"
            }),
            m ? (l = {
                left: s.left - a.scrollLeft(),
                top: s.top - a.scrollTop()
            },
            r && (c = {
                left: parseFloat(r.left - a.scrollLeft() + f.left),
                top: parseFloat(r.top - a.scrollTop() + f.top)
            })) : r && (c = {
                left: parseFloat(r.left + f.left),
                top: parseFloat(r.top + f.top)
            });
            var g = m ? 0 : a.scrollTop(),
            b = Math.min(l.top, c.top) - Math.abs(l.left - c.left) * (1 / 3);
            g > b && (l.left == c.left && (b = c.top), b = Math.min(g, Math.min(l.top, c.top))),
            p = u ? p: p / 2;
            var w = Math.sqrt(Math.pow(l.top - c.top, 2) + Math.pow(l.left - c.left, 2)),
            y = Math.ceil(Math.min(Math.max(Math.log(w) / .05 - 75, 30), 100) / p) + 5,
            x = l.top == b ? 0 : -Math.sqrt((c.top - b) / (l.top - b)),
            $ = (x * l.left - c.left) / (x - 1),
            k = c.left == $ ? 0 : (c.top - b) / Math.pow(c.left - $, 2),
            j = Math.cos,
            C = Math.PI,
            T = (Math.min, Math.pow),
            M = -1;
            if (v && (i = {
                x: n.width(),
                y: n.height()
            }), d) t.bubbleAni(n, o);
            else var I = setInterval(function() {++M;
                var e = l.left + (c.left - l.left) * M / y,
                a = 0 === k ? l.top + (c.top - l.top) * M / y: k * T(e - $, 2) + b,
                s = {
                    left: e,
                    top: a
                };
                if (v) {
                    var r = y / 2,
                    d = v.x - (v.x - i.x) * j(r > M ? 0 : (M - r) / (y - r) * C / 2),
                    u = v.y - (v.y - i.y) * j(r > M ? 0 : (M - r) / (y - r) * C / 2);
                    n.css({
                        width: d + "px",
                        height: u + "px"
                    })
                }
                n.css({
                    left: s.left + _.left + "px",
                    top: s.top + _.top + "px"
                }),
                M == y - 1 && t.cartScale(),
                M == y && (clearInterval(I), h ? t.bubbleAni(n, o) : o && o())
            },
            16)
        }
    };
    t.main = function(e) {
        n.main(e)
    }
}),

*/

/*
define("ibar-helper",
function() {
    Handlebars.registerHelper("Helper_userinfo",
    function(e, t) {
        var i = "http://passport." + t,
        a = "";
        return a = e.nickname ? '<ul class="user_info"><li>用户名：' + e.nickname + "</li><li>级&emsp;别：" + e.group + "</li></ul>": '<p>你好！请&nbsp;<a href="' + i + '/i/account/login">登录</a>&nbsp;|&nbsp;<a href="' + i + '/i/account/signup">注册</a></p>',
        new Handlebars.SafeString(a)
    })
}),
*/

/*
define("site", ["ui"],
function(e) {
    "use strict";
    e("ui");
    var t = Jumei.util.cookie.get,
    i = Jumei.util.cookie.set,
    a = Jumei.util.parseUrl(),
    n = t("etc_n");
    n || (n = a.etc_n, "adnet" !== n && "sem" !== n && "dsp" !== n || i("etc_n", "true", {
        exp: 24
    }));
    var s, r = a.referer,
    o = document.referrer,
    l = /http(?:s)?\:\/\/([^:\/]+)[:\/]/; ! r && o && (s = o.match(l), s && (r = s[1])),
    r && !~r.indexOf(JM.SITE_MAIN_TOPLEVELDOMAINNAME) && (i("referer_site", r, {
        exp: 24
    }), $.ajax({
        url: "http://ajax.jumeiglobal.com/ajax_new/ref",
        dataType: "jsonp",
        data: {
            ref: r
        }
    }));
    var c = t("last_reg"),
    d = a.r;
    c || (d = d ? d.slice(1) : a.referer_id, d && i("referer_id", d, {
        exp: 72
    }))
}),
define("server",
function(e, t, i) {
    "use strict";
    function a(e) {
        0 === n ? $.ajax({
            url: "http://www.jumei.com/serverinfo.php",
            dataType: "jsonp",
            success: function(t) {
                n = t.timestamp,
                $.isFunction(e) && e(t.timestamp)
            },
            error: function() {}
        }) : $.isFunction(e) && e(n)
    }
    var n = 0;
    window.Jumei = window.Jumei || {},
    window.Jumei.app = window.Jumei.app || {},
    window.Jumei.app.getServerTime = a
}),
define("user", ["user-new", "user-old"],
function(e, t, i) {
    "use strict";
    var a = {
        UserNew: e("user-new"),
        UserOld: e("user-old")
    },
    n = {
        type: "old"
    }; !
    function(e) {
        var t = $.extend({},
        n, e); ! JM.DEGRADATION && (JM.SERVER_TIME <= 1469969999 || JM.SERVER_TIME >= 1470239999) && ("old" == t.type ? a.UserOld.init() : a.UserNew.init())
    } ()
}),
*/


define("footer", ["footer_timer"],
function(e, t, i) {
    "use strict";
    e("footer_timer");
    var a = $("#footer"),
    n = $("#footer_textarea"),
    s = a.find("textarea").val(),
    r = $(window),
    o = !1,
    l = function() {
        var e = r.scrollTop(),
        t = e + r.height(),
        i = a.offset().top;
        t + 500 > i && !o && (n.html(s), o = !0, r.off("scroll.footer"))
    };
    r.on("scroll.footer",
    function() {
        l()
    }),
    o || l()
}),





/*
define("ad", ["see_more", "pop_slide_menu", "new_user_box"],
function(e, t, i) {
    "use strict";
    var a = e("see_more"),
    n = e("pop_slide_menu"),
    s = e("new_user_box"),
    r = ["all_top_banner_all_html_null", "all_top_banner_all_null_null", "all_top_nav_logo_null_null", "all_null_index_nav_right_null", "all_null_index_top_nav_cosmetics", "all_top_nav_special_null_null", "all_top_nav_special_promotion_null", "all_top_nav_fashion_null_null"],
    o = "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/static/getDealDetailAdvInfo?locations=",
    l = {
        get_parameter: function(e) {
            for (var t = "",
            i = 0,
            a = e.length; a > i; i++) {
                var n = e[i] + ",";
                t += n
            }
            return t = t.replace(/\s+/g, "").replace(/,$/, "")
        },
        get_ad_json: function() {
            var e = this,
            t = this.get_parameter(r);
            $.getJSON(o + t + "&callback=?", null,
            function(t) {
                e.append_ad(t)
            })
        },
        append_ad: function(e) {
            var t = e.all_top_banner_all_html_null,
            i = e.all_top_banner_all_null_null,
            r = e.all_top_nav_logo_null_null,
            o = e.all_null_index_nav_right_null,
            l = e.all_null_index_top_nav_cosmetics,
            c = e.all_top_nav_special_null_null,
            d = e.all_top_nav_special_promotion_null,
            u = e.all_top_nav_fashion_null_null;
            void 0 !== t ? ($("body").prepend(t), s.init()) : s.init(),
            void 0 !== i && $("body").prepend(i),
            void 0 !== r && $(".logo").after(r),
            void 0 !== o && ($("#see_more").append(o), new a({
                id: "#look_all_box"
            }).init()),
            void 0 !== l && ($(".pop_act_area").val(l), n.init()),
            void 0 !== c && $(".haitao_li").after(c),
            void 0 !== d && $(".channel_nav_list li").eq(0).after(d),
            void 0 !== u && $(".channel_nav_list li").eq( - 2).before(u)
        }
    };
    JM.ASYNCAD ? l.get_ad_json() : (s.init(), new a({
        id: "#look_all_box"
    }).init(), n.init())
}),
*/

define("header", ["monitor", "ui", "nav_animate", /*"city_choose",*/ "search", "nav_icon_animate", "cartbox", "shop_sort"],
function(e, t, i) {
    "use strict";
    e("monitor"),
    e("ui"),
    e("nav_animate"),
   /* e("city_choose"),*/
    e("search"),
    e("nav_icon_animate");
    var a = e("cartbox");
    a.init();
    var n = e("shop_sort");
    n.init();
    var s = $("#header_banner_switch");
    s.length > 0 && new Jumei.ui.Switchable("#header_banner_switch", {
        nav: !1
    });
    var r = $("#headerTopRight > li");
    r.topNavTimer = null,
    $("#headerTopRight > li").bind("mouseenter",
    function() {
        var e = $(this),
        t = e.find("div.sub_nav");
        t.length > 0 && (clearTimeout(e.topNavTimer), e.topNavTimer = setTimeout(function() { (e.hasClass("item_ijumei") || e.hasClass("item_more")) && e.addClass("hover"),
            t.stop().slideDown(200,
            function() {
                t.css({
                    height: "auto",
                    overflow: "visible"
                })
            })
        },
        200))
    }).bind("mouseleave",
    function() {
        var e = $(this),
        t = e.find("div.sub_nav");
        t.length && (clearTimeout(e.topNavTimer), e.topNavTimer = setTimeout(function() {
            t.stop().slideUp(200,
            function() {
                t.css({
                    height: "auto",
                    overflow: "visible"
                }),
                (e.hasClass("item_ijumei") || e.hasClass("item_more")) && e.removeClass("hover")
            })
        },
        200))
    }).find("a.er_box").bind("mouseover",
    function() {
        var e = $(this).find("span");
        e.length && e.show()
    }).bind("mouseout",
    function() {
        var e = $(this).find("span");
        e.length && e.hide()
    });
    var o = $("#bookmark_us");
    o.click(function() {
        Jumei.util.addFavorite("http://www.jumei.com", "聚美优品 – 中国知名正品化妆品限时特卖网")
    });
    var l = "";
    if (null != Jumei.util.cookie.get("nickname") && (l = decodeURIComponent(Jumei.util.cookie.get("nickname"))), null !== l && "" !== l && $("#headerTopLeft").length > 0) {
        var c = '<li class="signin">欢迎您，<span class="col_jumei"><a href="http://www.' + JM.SITE_MAIN_TOPLEVELDOMAINNAME + '/i/order/list" target="_blank">' + l + ' </a></span> [ <a class="signout" href="http://www.jumei.com/i/account/logout">退出</a> ]</li>';
        $("#headerTopLeft").html(c)
    }
}),



/*
define("ibar", ["ui", "ibar-helper", "ibar_main.tpl", "ibar-fly", "ibar-monitor", "ibar-tips", "template", "ibar-recharge", "ibar-cart", "ibar-asset", "ibar-favorite", "ibar-history", "ibar-faq"],
function(e, t, i) {
    "use strict";
    e("ui"),
    e("ibar-helper");
    var a, n, s, r, o, l, c, d, u, p, h, m, f, _, v, g, b, w, y, x, k, j, C, T, M, I, E = e("ibar_main.tpl"),
    J = e("ibar-fly"),
    N = e("ibar-monitor"),
    O = e("ibar-tips"),
    A = window.location.host.split(".").slice( - 2).join("."),
    S = !0,
    q = (e("template"), {
        iBarRecharge: e("ibar-recharge"),
        iBarCart: e("ibar-cart"),
        iBarAsset: e("ibar-asset"),
        iBarFavorite: e("ibar-favorite"),
        iBarHistroy: e("ibar-history")
        //iBarFaq: e("ibar-faq")
    }),
    B = {
        zIndex: 9990,
        compactWidth: 1050,
        addCartAjaxUrl: "http://cart." + A + "/i/cart/ajax_add_to_cart"
    },
    D = ["普通会员", "黄金会员", "白金会员", "钻石会员"],
    L = !1,
    P = Jumei.util,
    z = P.throttle,
    R = $(window),
    H = $(document.body),
    U = 0,
    V = 0,
    F = [],
    G = !!~navigator.userAgent.toLowerCase().indexOf("msie 6.0"),
    W = {
        getCookie: function(e) {
            e = " " + e + "=";
            var t = document.cookie,
            i = t.indexOf(e),
            a = t.indexOf(";", i),
            n = "";
            return~i && (~a || (a = t.length), n = t.slice(i + e.length, a)),
            decodeURIComponent(n)
        },
        createiBar: function(e) {
            var t, i, a, n = W.getCookie("nickname"),
            s = "status_logout",
            r = "../img/avatar_nonesign.jpg",
            o = R.height();
            e.isLogin = "" !== n,
            e.isLogin && (r = W.getCookie("avatar_small"), i = W.getCookie("privilege_group"), i = D[parseInt(i)], s = "status_login"),
            a = {
                domain: A,
                zIndex: e.zIndex,
                avatar: r,
                height: o,
                statusClassName: s,
                userinfo: {
                    nickname: n,
                    group: i
                }
            },
            t = Handlebars.compilePlus(E, a),
            H.append(t),
            r || $.ajax({
                url: "http://www." + A + "/i/ajax/syncCookie",
                dataType: "jsonp",
                success: function(e) {
                    e.avatar_small && ($("#iBar .avatar_imgbox img")[0].src = e.avatar_small)
                }
            })
        },
        createAnimElem: function() {
            var e = '<div style="width:45px;height:45px;border-radius:50%;background:#fff;position:absolute;display:none;overflow:hidden;border:1px solid #ed145b;z-index:9992;"><img width="45" height="45"></div>';
            return $(e)
        },
        configAnim: function(e) {
            var t = e.animElem,
            i = (e.sourceElem, e.numProxyElem),
            a = e.sourcePos,
            n = e.targetPos,
            s = e.animElem.width(),
            r = e.sourceElem.width() / 2 - s / 2,
            o = {
                top: a.top,
                left: a.left + r
            },
            l = {
                top: a.top - s - 10,
                left: o.left
            };
            t.css({
                position: "absolute",
                display: "block",
                top: o.top + "px",
                left: o.left + "px",
                opacity: 0
            }).animate({
                top: l.top + "px",
                opacity: 1
            },
            300,
            function() {
                var e = $(this);
                J.main({
                    flyer: e,
                    starter: null,
                    bubbler: i,
                    targeter: $("li.mpbtn_cart a s"),
                    start: l,
                    target: n,
                    unAnim: !1,
                    bubble: !0,
                    speed: 4,
                    isIE6: G,
                    hideDelay: "",
                    targetOffset: {
                        left: 12,
                        top: 28
                    },
                    complete: function() {
                        d.text(U),
                        e.remove()
                    }
                })
            })
        },
        getAddCartData: function(e) {
            var t, i, n = "http://cart." + A + "/i/cart/new_items/",
            s = "",
            r = 0;
            if (e.multiple) {
                for (t = e.sku.length; t > r; r++) i = 0 === parseInt(e.hashid[r]) ? "": e.hashid[r],
                s += e.sku[r] + "," + i + "," + e.num[r] + "|";
                s = s.slice(0, s.length - 1)
            } else e.combt ? s = e.combt: (i = 0 === parseInt(e.hashid) ? "": e.hashid, s = e.sku + "," + i + "," + e.num);
            L ? window.location.href = n + s + "?from=" + e.from: $.ajax({
                url: I,
                data: {
                    _ajax_: 1,
                    items: s,
                    which_cart: e.which_cart,
                    from: e.from,
                    token: e.token
                },
                dataType: "jsonp",
                success: function(t) {
                    if ("success" === t.type) U = t.cart_item_number,
                    e.callback(),
                    a.trigger("likecartadd");
                    else if ("fail" === t.type) {
                        var i = '<div class="module-dialog"><a class="close"></a><div class="module-content"><div class="module-text"></div><div class="module-button"></div></div></div>';
                        0 === $(".module-dialog").length && $("body").append(i),
                        0 === $(".module-bg").length && $("body").append("<div class='module-bg'></div>"),
                        $(".module-content").css("padding-top", "140px"),
                        $(".module-content .module-tip").html(""),
                        $(".module-text").html(t.error_msg),
                        $(".module-button").html("<span class='ok'>我知道了</span>").css("margin-top", "0px"),
                        $(".module-dialog").css({
                            background: "url('http://images.jumei.com/pc_global/301-bg.png') no-repeat",
                            width: "521px",
                            height: "321px"
                        }),
                        $(".module-dialog a.close,.module-button span.ok").on("click",
                        function(e) {
                            e.preventDefault(),
                            $(".module-dialog").fadeOut(300),
                            $(".module-bg").fadeOut(500)
                        }),
                        $(".module-dialog").fadeIn(500),
                        $(".module-bg").fadeIn(300)
                    } else a.trigger("likecarterror", t)
                },
                error: function() {
                    window.location.href = n + s + "?from=" + e.from
                }
            })
        },
        addCartCallback: function(e) {
            var t, i = $.isArray(e.num) ? e.num.length: e.num,
            a = $(e.elem),
            n = a.offset(),
            s = o.offset(),
            r = {};
            n.top = n.top - a.outerHeight(),
            a.is(":hidden") && (a.css({
                visibility: "hidden",
                display: "block"
            }), n = a.offset(), n.top = n.top - a.outerHeight(), a.css({
                visibility: "",
                display: "none"
            })),
            m || (m = $('<div style="width:13px;height:13px;line-height:13px;z-index:9991;border-radius:50%;background:#ed145b;position:absolute;display:none;overflow:hidden;border:2px solid #ed145b;color:#fff;text-align: center"/>'), H.append(m)),
            m.text(i),
            h || (h = W.createAnimElem()),
            t = h.clone(),
            t.find("img")[0].src = e.img,
            H.append(t),
            r = {
                animElem: t,
                sourceElem: a,
                numProxyElem: m,
                sourcePos: n,
                targetPos: s
            },
            W.configAnim(r)
        },
        slideMainPanel: function(e) {
            var t = e ? T + "px": "0px";
            n.is(":animated") && n.stop(!0, !0),
            n.animate({
                left: t
            },
            200)
        },
        slideCartItem: function(e) {
            var t = e ? 0 - T + "px": "0px",
            i = function() {
                o[e ? "addClass": "removeClass"]("mpbtn_cart_compact")
            };
            o.is(":animated") && o.stop(!0, !0),
            o.animate({
                left: t
            },
            200, i)
        },
        initMainPanel: function(e) {
            var t, i = R.width();
            a.unbind("mouseenter.slidemainpanel mouseleave.slidemainpanel"),
            i < e.compactWidth ? (t = parseInt(n.css("left")), 0 === t && W.slideMainPanel(!0), W.slideCartItem(!0), W.bindMainPanelSlide()) : (t = parseInt(o.css("left")), W.slideMainPanel(!1), 0 !== t && W.slideCartItem(!1))
        },
        bindMainPanelSlide: function() {
            a.bind("mouseenter.slidemainpanel",
            function(e) {
                clearTimeout(C);
                var t = parseInt(n.css("left"));
                0 !== t && (j = setTimeout(function() {
                    W.slideMainPanel(!1),
                    W.slideCartItem(!1)
                },
                200))
            }).bind("mouseleave.slidemainpanel",
            function() {
                clearTimeout(j);
                var e = parseInt(n.css("left"));
                c.is(":hidden") && l.is(":hidden") && 0 === e && (C = setTimeout(function() {
                    W.slideMainPanel(!0),
                    W.slideCartItem(!0)
                },
                200))
            })
        },
        initPluginLayout: function() {
            var e, t, i = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
            a = ".ibar .ibar_sub_panel .ibar_plugin_content",
            n = R.height() - 39;
            n = Math.max(n, 600),
            e = "height:" + n + "px;overflow-y:auto;",
            t = document.createElement("style"),
            t.type = "text/css",
            void 0 !== t.textContent ? t.textContent = a + "{" + e + "}": t.styleSheet.addRule(a, e, 0),
            i.appendChild(t)
        },
        reComputedPluginLayout: function(e) {
            var t = e.find(".ibar_plugin_title"),
            i = e.find(".ibar_plugin_content"),
            a = R.height();
            i.css({
                height: a - t.outerHeight() + "px",
                "overflow-y": "auto"
            })
        },
        initPlugins: function(e) {
            var t, i = $(e),
            n = $(e).attr("data-plugin"),
            s = F.length,
            r = 0;
            if (n && q[n]) if (t = $("#" + n), l.children("div").hide(), u.filter(".current").removeClass("current"), i.addClass("current"), t.length) {
                if (t.show(), a.trigger("likepanelopen", n), "iBarCart" === n && U !== V) for (V = U; s > r; r++) F[r]();
                W.reComputedPluginLayout(t),
                a.trigger("afterreopenplugin", n)
            } else setTimeout(function() {
                q[n].init({
                    container: l
                });
                var e = $("#" + n);
                e.length && R.height() < 650 && W.reComputedPluginLayout(e),
                a.trigger("likepanelopen", n)
            },
            10)
        },
        slideCallback: function(e) {
            W.initPlugins(e),
            H.bind("click.closesubpanel",
            function(e) {
                var t = e.target;
                t === a[0] || $.contains(a[0], t) || (W.slideSubPanel(), H.unbind("click.closeloginbox"), a.trigger("mouseleave.slidemainpanel"))
            })
        },
        slideSubPanel: function(e) {
            var t, i = l.is(":visible");
            e && (t = $(e).parents("li").find("div.mp_tooltip"), t.length && t.stop(!0, !0).css("visibility", "hidden")),
            i ? e ? W.initPlugins(e) : (l.animate({
                left: "0px"
            },
            250,
            function() {
                l.hide(),
                u.filter(".current").removeClass("current"),
                a.trigger("mouseleave.slidemainpanel")
            }), H.unbind("click.closesubpanel")) : (l.children("div").hide(), l.css("display", "block").animate({
                left: 0 - M + "px"
            },
            200,
            function() {
                W.slideCallback(e)
            }))
        },
        showTooltip: function() {
            var e = this;
            b = setTimeout(function() {
                var t, i = $(e).find("div.mp_tooltip");
                i.length && (t = parseInt(i.css("left")), i.css({
                    left: t - 30 + "px",
                    opacity: 0,
                    visibility: "visible"
                }).animate({
                    left: t + "px",
                    opacity: 1
                },
                300))
            },
            150)
        },
        hideTooltip: function() {
            var e, t = $(this).find("div.mp_tooltip");
            t.length && (clearTimeout(b), e = parseInt(t.css("left")), t.animate({
                left: e - 30 + "px",
                opacity: 0
            },
            300,
            function() {
                t.css({
                    visibility: "hidden",
                    left: "",
                    opacity: ""
                })
            }))
        },
        showSignBox: function(e) {
            var t = $(e),
            i = t.offset().top;
            i -= R.scrollTop(),
            c.css({
                top: i + "px",
                display: "block"
            }),
            H.bind("click.closeloginbox",
            function(e) {
                var t = e.target;
                t === a[0] || $.contains(a[0], t) || (W.hideSignBox(), H.unbind("click.closeloginbox"))
            })
        },
        hideSignBox: function() {
            c.is(":visible") && (c.hide(), H.unbind("click.hideloginbox"), a.trigger("mouseleave.slidemainpanel"))
        },
        showQrcode: function() {
            clearTimeout(k),
            x = setTimeout(function() {
                var e;
                _.show(),
                v && (e = v.attr("data-lazysrc"), v[0].src = e, v.removeAttr("data-lazysrc"), v = null)
            },
            150)
        },
        hideQrcode: function() {
            clearTimeout(x),
            k = setTimeout(function() {
                _.hide()
            },
            150)
        },
        initCartNum: function() {
            var e = "http://cart." + A + "/i/ajax/get_cart_data_right";
            $.ajax({
                url: e,
                data: {
                    show_type: "all_quantity",
                    _ajax_: 1,
                    which_cart: "all"
                },
                dataType: "jsonp",
                success: function(e) {
                    e && d.text(e.quantity)
                }
            })
        },
        initDom: function() {
            a = $("#iBar"),
            n = a.find("div.ibar_main_panel"),
            s = n.find("li"),
            r = n.find("li.mpbtn_login").find("a"),
            o = n.find("li.mpbtn_cart"),
            l = a.find("div.ibar_sub_panel"),
            g = a.find("div.ibar_tips_box"),
            c = a.find("div.ibar_login_box"),
            d = n.find("span.cart_num").html(window.IbarNum || 0),
            u = n.find("ul.ibar_mp_center").find("a"),
            f = n.find("li.mpbtn_qrcode"),
            _ = n.find("div.mp_qrcode"),
            v = _.find("img"),
            p = n.find("li.mpbtn_support").find("a")
        },
        initEvent: function(e) {
            u.bind("click",
            function(t) {
                var i = $(this),
                a = void 0 !== i.attr("data-plugin"),
                n = parseInt(i.attr("data-judgelogin"));
                a && (1 === n ? e.isLogin ? W.slideSubPanel(this) : (W.hideSignBox(), W.showSignBox(this)) : W.slideSubPanel(this)),
                t.preventDefault()
            }).bind("mouseleave",
            function() {
                clearTimeout(w),
                y = setTimeout(function() {
                    W.hideSignBox()
                },
                200)
            });
            var t = this;
            p.on("click",
            function(e) {
                var i = JM.SERVER_TIME;
                i >= 1454774401 && 1454806799 >= i || i >= 1454839201 && 1454893199 >= i || i >= 1454925601 && 1454979599 >= i || i >= 1455012001 && 1455065999 >= i || i >= 1455098401 && 1455152399 >= i || i >= 1455184801 && 1455238799 >= i || i >= 1455271201 && 1455325199 >= i ? (t.springDialog(), $(".spring_bg").fadeIn(300), $(".spring").fadeIn(500)) : ($(".spring_bg").hide(), $(".spring").hide(), q.iBarFaq.init()),
                e.preventDefault()
            }),
            s.bind("mouseenter", W.showTooltip).bind("mouseleave", W.hideTooltip),
            f.bind("mouseenter", W.showQrcode).bind("mouseleave", W.hideQrcode),
            r.bind("mouseenter",
            function() {
                var e = this;
                clearTimeout(y),
                w = setTimeout(function() {
                    W.showSignBox(e)
                },
                200)
            }),
            c.bind("mouseenter",
            function() {
                clearTimeout(y)
            }).bind("mouseleave",
            function() {
                clearTimeout(w),
                y = setTimeout(function() {
                    W.hideSignBox()
                },
                200)
            }),
            c.find("a.ibar_closebtn").bind("click",
            function(e) {
                W.hideSignBox(),
                e.preventDefault()
            }),
            l.find("a.ibar_closebtn").bind("click",
            function(e) {
                W.slideSubPanel(),
                e.preventDefault()
            })
        },
        hiddenNavEleven: function() {
            var e = JM.SERVER_TIME || JM.CLIENT_TIME;
            e > 1415721599 && $(".mpbtn_eleven, .mpbtn_strategy, .yixing").css({
                visibility: "hidden"
            })
        },
        init: function(e) {
            L || ($("html,body").css("height", "100%"), W.createiBar(e), W.initDom(), P.fixed(a[0], {
                top: "0px",
                right: "0px"
            }), a.css("display", "block"), I = e.addCartAjaxUrl, T = n.outerWidth(), M = l.outerWidth(), W.initPluginLayout(), void 0 !== window.__cartNumber__ && d.text(window.__cartNumber__), window.__initiBar__ = !0, W.initEvent(e), W.initMainPanel(e), !JM.DEGRADATION && (JM.SERVER_TIME <= 1469969999 || JM.SERVER_TIME >= 1470239999) && O.init({
                container: g
            }), R.bind("resize.ibar", z(function() {
                l.is(":visible") && (l.css({
                    display: "none",
                    left: "0px"
                }), H.unbind("click.closesubpanel")),
                W.initMainPanel(e),
                a.css("height", R.height() + "px")
            },
            50)), new Jumei.ui.Gotop({
                fixed: !1
            }), N())
        },
        springDialog: function() {
            var e = '<div class="spring" style="z-index:1000"><div class="spring_title"><span class="title">温馨提示</span><div class="close"></div></div><div class="spring_content"><div class="content">春节2月7日-12日，客服时间暂调整为9:00-18:00。<br/>2月13日9:00起，恢复24小时服务。祝您春节愉快！</div><div class="close">我知道了</div></div> </div>',
            t = '<div class="spring_bg"></div>';
            $(".spring").length <= 0 && $("body").append(e),
            $(".spring_bg").length <= 0 && $("body").append(t),
            $(".close").on("click",
            function() {
                $(".spring_bg").fadeOut(500),
                $(".spring").fadeOut(300)
            })
        }
    },
    Q = function(e) {
        var t = $.extend({},
        B, e);
        this.__o__ = t,
        $(function() {
            W.init(t)
        })
    };
    Q.addCart = function(e) {
        S && (S = !1, e.callback = function() {
            W.addCartCallback(e)
        },
        W.getAddCartData(e), setTimeout(function() {
            S = !0
        },
        2e3))
    },
    Q.cartUpdate = function(e) {
        "function" == typeof e && F.push(e)
    },
    Q.cartNumberUpdate = function(e) {
        d && d.text(e)
    },
    Q.tips = O,
    Q.prototype = {
        on: function(e, t) {
            if (this.__o__) {
                var i = this;
                a.bind("like" + e,
                function(a, n) {
                    a.type = e,
                    "string" == typeof n && (a.pluginName = n),
                    t.call(i, a),
                    a.stopPropagation()
                })
            }
            return this
        },
        un: function(e) {
            return this.__o__ && this.__o__.target.unbind("like" + e),
            this
        }
    },
    window.Jumei = window.Jumei || {},
    window.Jumei.app = window.Jumei.app || {},
    window.Jumei.app.iBar = Q
}),


*/

/*define("degradation",
function() {
    "use strict";
    JM.DEGRADATION && $(document.body).addClass("degradation")
}),
*/

define("app", ["degradation", "ibar", "header", "ad", "footer", "user", "server", "site"],
function(e) {
    e("degradation"),
    e("ibar"),
    e("header"),
    e("ad"),
    e("footer"),
    e("user"),
    e("server"),
    e("site")
}

);