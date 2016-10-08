/* Date: 2016-08-17T17:01:54Z Path: js/pop/pop_main.js */


define("deal_wish",
function(e, t, i) {
    "use strict";
    var a = "";
    a += '<form class="mobile_subscribe" action="post" id="subscribe_form">',
    a += '<span class="wish_act_close"></span>',
    a += '<div class="onsale_layer" id="onsale_start" style="display:none;">',
    a += '<p class="onsale_tit" id="addWishTit">加入心愿单</p>',
    a += '<div class="onsale_layer_wrap">',
    a += '<p class="onsale_layer_tips">请绑定手机号，获取特卖提醒！</p>',
    a += '<div class="onsale_input_wrap">',
    a += '<label for="mobile">手机号：</label>',
    a += "<i></i>",
    a += '<input name="mobile" id="mobile" class="onsale_mobile" type="text" maxlength="11">',
    a += '<input name="get_confirm_code" diff="20" id="get_confirm_code" type="button" value="获取手机校验码" class="get__wish_confirm_code">',
    a += '<div class="onsale_act grey onsale_layer_err">请输入正确的11位手机号码</div>',
    a += "</div>",
    a += '<div class="onsale_input_wrap">',
    a += '<label for="confirm_code">校验码：</label>',
    a += "<i></i>",
    a += '<input name="confirm_code" id="confirm_code" type="text" class="onsale_mobile" maxlength="6">',
    a += '<div class="onsale_act grey onsale_layer_err"></div>',
    a += "</div>",
    a += '<div class="onsale_input_wrap onsale_btn_wrap">',
    a += '<label for="confirm_code">&nbsp;</label><input type="button" value="绑定" class="submit_subscribe" id="bind_act_wish" name="rebind">',
    a += "</div>",
    a += "</div>",
    a += "</div>",
    a += '<div class="onsale_layer" id="onsale_success" style="display: none;">',
    a += '<p class="onsale_tit">订阅成功</p>',
    a += '<div class="onsale_layer_wrap">',
    a += '<p class="onsale_layer_tips success_tips"><i></i>成功加入心愿单！</p>',
    a += '<div class="ok_wrap">',
    a += "小美会在特卖前第一时间发送短信通知至：<br>",
    a += '<b id="onsale_phone"></b>',
    a += "</div>",
    a += '<p class="onsale_cancel"><a href="http://www.jumei.com/i/wishdeal/willsale" target="_blank">设置已订阅的特卖提醒</a></p>',
    a += '<div class="onsale_btn_wrap mt5">',
    a += '<input type="button" value="确定" class="submit_subscribe close_dialog" name="rebind">',
    a += "</div>",
    a += "</div>",
    a += "</div>",
    a += '<input type="hidden" name="wait_time" id="wait_time">',
    a += '<div class="onsale_layer" id="bind_success" style="display: none;">',
    a += '<p class="onsale_tit">开通成功</p>',
    a += '<div class="onsale_layer_wrap">',
    a += '<p class="onsale_layer_tips success_tips"><i></i>成功开通短信提醒！</p>',
    a += '<div class="ok_wrap">',
    a += "小美会在特卖前第一时间发送短信通知至：<br>",
    a += '<b id="bind_phone"></b>',
    a += "</div>",
    a += '<p class="onsale_cancel"><a href="http://www.jumei.com/i/wishdeal/willsale" target="_blank">设置已订阅的特卖提醒</a></p>',
    a += '<div class="onsale_btn_wrap mt5">',
    a += '<input type="button" value="确定" class="submit_subscribe close_dialog" name="rebind">',
    a += "</div>",
    a += "</div>",
    a += "</div>",
    a += "</form>";
    var s = /^(((13[0-9]{1})|15[0-9]{1}|18[0-9]{1}|14[0-9]{1})+\d{8})$/,
    r = {
        error: ["请输入正确的11位手机号码", "请先获取手机校验码！", "手机校验码输入错误!", "请输入手机校验码！"],
        successInfo: ["手机校验码已经发送到您的手机", ",请注意查收"],
        buttonInfo: ["获取手机校验码", "秒后重新发送"]
    },
    n = $("body"),
    o = 60,
    l = !1,
    c = function(e) {
        var t = $("#mobile"),
        i = $("#get_confirm_code"),
        a = null;
        0 >= o && clearInterval(a),
        e === !0 ? t.removeClass("onsale_disabled") : a = setInterval(function() {
            0 >= o ? (o = 60, clearInterval(a), t.removeAttr("readonly").removeAttr("disabled"), i.val(r.buttonInfo[0]).removeClass("onsale_disabled")) : (o--, i.val(o + r.buttonInfo[1]))
        },
        1e3)
    },
    d = function() {
        var e = decodeURIComponent(Jumei.util.cookie.get("nickname")),
        t = !0;
        return "" === e && (t = !1),
        t
    },
    h = function(e) {
        var t = $("#mobile"),
        i = $("#get_confirm_code"),
        a = "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/usermobile/prebind?",
        s = function(a) {
            var s = parseInt(a.errno),
            n = a.message;
            0 !== s ? (e.html(n).css({
                color: "#ed155b"
            }), i.removeClass("onsale_disabled")) : (n = r.successInfo[0] + "<strong>" + t.val() + "</strong>" + r.successInfo[1], e.html(n).css({
                color: "#ed155b"
            }), c(!1), l = !0)
        },
        n = t.val();
        $.ajax({
            url: a,
            data: {
                mobile: n
            },
            dataType: "jsonp",
            success: function(e) {
                s(e)
            },
            error: function() {
                alert("请求错误，请刷新重试！")
            }
        })
    },
    m = function() {
        var e = "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/usermobile/bind_jsonp?",
        t = $("#mobile"),
        i = $("#confirm_code").val(),
        a = ($("#bind_phone"), $("#confirm_code").next(".onsale_layer_err")),
        s = $("#mobile").val();
        $.ajax({
            url: e,
            data: {
                mobile: s,
                code: i
            },
            dataType: "jsonp",
            success: function(e) {
                0 !== e.errno ? (t.removeAttr("readonly").removeAttr("disabled"), a.html(e.message).css({
                    color: "#ed155b"
                })) : u.getWishAjax()
            },
            error: function() {
                alert("请求错误，请刷新重试！")
            }
        })
    },
    _ = function(e) {
        var t = $("#mobile"),
        i = $("#get_confirm_code"),
        a = t.parents(".onsale_input_wrap"),
        n = $("#confirm_code"),
        o = n.parents(".onsale_input_wrap"),
        c = i.next(".onsale_layer_err"),
        d = n.next(".onsale_layer_err"),
        _ = $.trim(t.val());
        s.test(_) ? (c.html(""), a.removeClass("onsale_err"), "undefined" == typeof e && (i.addClass("onsale_disabled"), h(c))) : (a.addClass("onsale_err"), c.html(r.error[0]), t.removeClass("onsale_disabled"), t.trigger("focus")),
        e && (0 === n.val().length ? (o.addClass("onsale_err"), d.html(r.error[1])) : 6 !== n.val().length ? (o.addClass("onsale_err"), d.html(r.error[2])) : (o.removeClass("onsale_err"), d.html(""), l === !0 ? (t.attr("readonly", "readonly").attr("disabled", "true"), m()) : (o.addClass("onsale_err"), d.html(r.error[2]))))
    };
    $(document).on("click", ".wish_act_close,.close_dialog",
    function() {
        window.wishTargetDialog.close()
    }),
    $(document).on("click", "#get_confirm_code",
    function() {
        var e = $(this);
        e.hasClass("onsale_disabled") || _()
    }),
    $(document).on("click", "#bind_act_wish",
    function() {
        $(this);
        _(!0)
    });
    var u = {};
    u = {
        init: function(e) {
            this.options = e,
            this.getUserAjax()
        },
        getWishAjax: function() {
            var e = this,
            t = "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/wishdeal/ajax_add_jsonp?item=" + e.options.sku_no + "," + e.options.hash_id + ",1";
            $.ajax({
                url: t,
                dataType: "jsonp",
                success: function(e) {
                    0 !== e.errno ? alert("请求错误，请刷新重试！") : ($("#onsale_start").hide(), $("#onsale_success").show(), $("#onsale_phone").html(e.data.mobile), n.trigger("wishAddCart"))
                },
                error: function(e) {
                    alert("请求错误，请刷新重试！")
                }
            })
        },
        getUserAjax: function() {
            var e = this,
            t = "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/account/ajax_is_mobile_bind2?",
            i = window.location.href,
            s = d();
            return s ? (n.data("wish_loaded") || n.append(a), "undefined" == typeof window.wishTargetDialog && (window.wishTargetDialog = new Jumei.ui.Dialog("body", {
                elem: $("#subscribe_form"),
                trigger: "wishAddCart"
            })), void $.ajax({
                url: t,
                dataType: "jsonp",
                success: function(t) {
                    1 === t.is_login ? 0 === t.is_bind ? ($("#onsale_success").hide(), $("#bind_success").hide(), $("#onsale_start").show(), n.trigger("wishAddCart")) : e.getWishAjax() : window.location.href = "http://passport.jumei.com/i/account/login?redirect=" + i
                }
            })) : void(window.location.href = "http://passport.jumei.com/i/account/login?redirect=" + i)
        }
    },
    i.exports = u
}),
define("timer_gulp-seajs-cmobo_11",
function(e, t, i) {
    "use strict";
    var a = {
        format: "<em>DD</em><em>HH</em><em>MM</em><em>SS</em>",
        dtime: 1e3,
        scroll: !0,
        attrName: "diff",
        onStart: function() {},
        onEnd: function() {}
    },
    s = {
        getDifTime: function(e, t) {
            var i, a, s, r, n, o = {
                DD: "00",
                D: "0",
                HH: "00",
                MM: "00",
                SS: "00",
                TT: "00",
                H: "0",
                M: "0",
                S: "0",
                T: "0"
            };
            return e = parseInt(1e3 * e),
            a = e,
            a > 0 ? (i = parseInt(a / 864e5).toString(), o.DD = o.D = i, i.toString().length < 2 && (o.DD = "0" + i), a %= 864e5, s = parseInt(a / 36e5).toString(), o.HH = o.H = s, s.toString().length < 2 && (o.HH = "0" + s), a %= 36e5, r = parseInt(a / 6e4).toString(), o.MM = o.M = r, r.toString().length < 2 && (o.MM = "0" + r), n = parseInt(a % 6e4 / 100), a = parseInt(n / 10), o.TT = o.T = n - 10 * a, o.SS = o.S = a, a.toString().length < 2 && (o.SS = "0" + a), t.replace(/\b[DHMST]+\b/g,
            function(e) {
                return o[e] || 0
            })) : ""
        },
        start: function(e, t) {
            var i = this.getDiffs(e.selector, e.attrName);
            e._timer = setInterval(function() {
                if (i.length > 0 && s.dealTimer(e, i), e.diffs && e.diffs.length > 0) for (var t = 0; t < e.diffs.length; t++) s.dealTimer(e.diffs[t].option, e.diffs[t].data)
            },
            e.dtime)
        },
        dealTimer: function(e, t) {
            for (var i = {},
            a = 0; a < t.length; a++) {
                var r = t[a].diff = t[a].diff - e.dtime / 1e3;
                e.scroll && !s.bindScroll(t[a].$selector) || (i.$target = t[a].$selector, r && r > 0 ? (i.html = s.getDifTime(r, e.format), e.onStart.apply(i)) : (e.onEnd.apply(i), t.splice(a, 1), a--))
            }
        },
        getDiffs: function(e, t) {
            var i = [];
            return e.each(function() {
                $(this).attr(t) && $(this).attr(t) > 0 && i.push({
                    $selector: $(this),
                    diff: $(this).attr(t)
                })
            }),
            i
        },
        bindScroll: function(e) {
            var t = $(window),
            i = t.scrollTop(),
            a = i + t.height(),
            s = e.offset();
            return s.top + 30 > i && s.top < a
        }
    },
    r = function(e, t) {
        var i = $.extend({},
        a, t);
        i.selector = e,
        this.__o = i,
        s.start(this.__o)
    };
    r.prototype = {
        stop: function() {
            clearInterval(this.__o._timer)
        },
        add: function(e, t) {
            var i = $.extend({},
            a, t),
            r = {
                data: s.getDiffs(e, i.attrName),
                option: i
            };
            this.__o.diffs instanceof Array ? this.__o.diffs.push(r) : this.__o.diffs = [r]
        }
    },
    i.exports = r
}),
define("size",
function(e, t, i) {
    "use strict";
    var a = function() {
        var e = window.CHIMA_JSON || {};
        if (e.type) {
            var t = !1,
            i = {
                init: function() {
                    i.ChimaClick(),
                    t || (i.ChimaOver(), t = !0)
                },
                CommandChima: function(e, t) {
                    var a, s, r, n, o;
                    if (3 === t.type) {
                        var l = parseFloat(e.shoe);
                        if (l > 0) {
                            for (a = t.sizes, r = 1, n = a.length; n > r; r++) {
                                var c = parseFloat(a[r].size);
                                if (o = 1, c > 100 ? o = c - 180 + 5 * (l - 26) : 100 > c && (o = c - l), o >= 0 && 1 > o) return a[r].size + "码"
                            }
                            return ! 1
                        }
                    } else if (5 === t.type) {
                        if ("" !== e.cup) for (a = t.sizes, r = 1, n = a.length; n > r; r++) if (e.cup === a[r].size) return e.cup
                    } else if (4 === t.type) {
                        a = t.sizes,
                        s = parseInt(e.waist);
                        var d = parseInt(e.hipline);
                        if (0 !== e.waist) for (r = 1, n = a.length; n > r; r++) {
                            var h = parseInt(a[r].waist),
                            m = r + 1 !== n ? parseInt(a[r + 1].waist) : h + 5,
                            _ = r - 1 !== 0 ? parseInt(a[r - 1].waist) : h - 5;
                            if (s >= (h + _) / 2 && (h + m) / 2 > s) return a[r].size
                        } else if (0 !== e.hipline) for (r = 1, n = a.length; n > r; r++) {
                            var u = parseInt(a[r].hipline),
                            p = r + 1 !== n ? parseInt(a[r + 1].hipline) : u + 5,
                            f = r - 1 !== 0 ? parseInt(a[r - 1].hipline) : u - 5;
                            if (d >= (u + f) / 2 && (u + p) / 2 > d) return a[r].size
                        }
                    } else {
                        if (0 === t.type) return ! 1;
                        var g = t.sizes;
                        for (o = i.CommandDiff(e), r = 1, n = g.length; n > r; r++) {
                            if (a = g[r], s = parseInt(e.waist), a.model) {
                                var v = a.model.split("/"),
                                b = parseInt(e.height),
                                w = parseInt(v[0]);
                                if (b >= w - 2 && w + 2 >= b) {
                                    var y = r + o;
                                    y = 1 > y ? 1 : y,
                                    y = y > n - 1 ? n - 1 : y;
                                    var $ = g[y];
                                    return 0 !== s && $ && $.waist && (s >= $.waist - 6 && s < $.waist - 2 ? (y = r - 1 + o, y = 1 > y ? 1 : y, $ = g[y]) : s > $.waist + 2 && s <= $.waist + 6 && (y = r + 1 + o, y = y > n - 1 ? n - 1 : y, $ = g[y])),
                                    $.size
                                }
                            }
                            return ! 1
                        }
                    }
                },
                CommandDiff: function(e) {
                    var t = 0,
                    i = parseInt(e.bust),
                    a = parseInt(e.waist);
                    if (0 !== i && 0 !== a) {
                        var s = i - a;
                        "1" === e.gender ? t = s >= 12 ? 16 >= s ? 0 : 22 >= s ? -1 : -2 : s >= 7 ? 1 : s >= 2 ? 2 : 3 : "0" === e.gender && (t = s >= 14 ? 18 >= s ? 0 : 24 >= s ? -1 : -2 : s >= 9 ? 1 : s >= 4 ? 2 : 3)
                    } else {
                        var r = 0;
                        if ("1" === e.gender) r = .7 * (e.height - 80);
                        else {
                            if ("0" !== e.gender) return "亲，请填写性别哦！";
                            r = .6 * (e.height - 70)
                        }
                        var n = e.weight - r;
                        n > 0 ? n >= .5 * r ? t = 4 : n >= .3 * r ? t = 3 : n >= .2 * r ? t = 2 : n >= .1 * r && (t = 1) : n >= .1 * r ? t = 0 : n >= .2 * r && (t = -2)
                    }
                    return t
                },
                chimaComDiv: function(t) {
                    t.length || (t = $(t));
                    var a = i.CommandChima(t[0], e),
                    s = [];
                    a ? s.push('<div class="logining"><i></i><p id="commandChima">根据您的尺码信息，推荐参考尺码：<i>' + a + "</i> </p>") : s.push('<div class="logining"><i></i><p id="commandChima">尺码助手没有找到可推荐尺码，建议您自行选购</p>'),
                    s.push('<em>尺码角色： <div class="ini_select_div"><p class="ini_sel_input" data-value="' + t[0].id + '">' + t[0].name + "，身高" + t[0].height + "cm，体重" + t[0].weight + 'KG</p><div class="ini_sel_trig"></div><ul class="ini_option">');
                    for (var r = 0,
                    n = t.length; n > r; r++) {
                        var o = "0.0" === t[r].shoulder || "" === t[r].shoulder ? "-": t[r].shoulder + "cm",
                        l = "0.0" === t[r].bust || "" === t[r].bust ? "-": t[r].bust + "cm",
                        c = "0.0" === t[r].waist || "" === t[r].waist ? "-": t[r].waist + "cm",
                        d = "0.0" === t[r].shoe || "" === t[r].shoe ? "-": t[r].shoe + "码",
                        h = "0" === t[r].cup || "" === t[r].cup ? "-": t[r].cup;
                        0 === r ? s.push('<li data-value="' + t[r].id + '" class="curr">') : s.push('<li data-value="' + t[r].id + '">'),
                        s.push('<em><i></i></em><div><p class="ini_blank">' + t[r].name + "，身高" + t[r].height + "cm，体重" + t[r].weight + "KG</p>"),
                        "1" === t[r].gender ? s.push('<p class="ini_gray">肩宽' + o + "，胸围" + l + "，腰围" + c + "，鞋码" + d + "</p></div></li>") : s.push('<p class="ini_gray">肩宽' + o + "，胸围" + l + "，腰围" + c + "，鞋码" + d + "，罩杯" + h + "</p></div></li>")
                    }
                    return s.push('</ul></div></em><a href="http://i.jumei.com/i/account/mysize?pagetag=0_chima_plus" target="_blank">修改尺码信息 》</a><a href="http://i.jumei.com/i/account/mysize?pagetag=0_chima_plus" target="_blank">创建更多尺码角色 》</a></div>'),
                    s.join("")
                },
                chimaHidden: function(t) {
                    var a = $("div.ini_select_div"),
                    s = a.find(".ini_sel_input");
                    $("ul.ini_option"),
                    s.attr("data-value");
                    $("ul.ini_option li").each(function(a) {
                        var r = $(this);
                        r.attr("data-value");
                        r.hover(function() {
                            r.addClass("hover")
                        },
                        function() {
                            r.removeClass("hover")
                        }),
                        r.bind("click",
                        function() {
                            var n = $("#commandChima");
                            r.addClass("curr").siblings("li").removeClass("curr"),
                            s.attr("data-value", r.attr("data-value")),
                            s.text(r.find(".ini_blank").text()),
                            r.attr("data-com") ?
                            function() {
                                "false" === r.attr("data-com") ? n.html("尺码助手没有找到可推荐尺码，建议您自行选购") : n.html("根据您的尺码信息，推荐参考尺码：<i>" + r.attr("data-com") + "</i>")
                            } () : function() {
                                var s = i.CommandChima(t[a], e);
                                r.attr("data-com", s),
                                s ? n.html("根据您的尺码信息，推荐参考尺码：<i>" + s + "</i>") : n.html("尺码助手没有找到可推荐尺码，建议您自行选购")
                            } ()
                        })
                    }),
                    $("#sbm_sizeinfo").click(function() {
                        for (var t = {
                            size_name: "默认"
                        },
                        a = $("#mysize input"), s = 0, r = a.length; r > s; s++) {
                            var n = a.eq(s).val().replace(/^\s+|\s+$/g, "");
                            if ("size_cup" === a[s].id) {
                                if ("" !== n && !n.match(/^[7-9][0|5][ABCDEFG]$/i)) return alert("罩杯请参照格式填写！"),
                                !1
                            } else {
                                if ("size_shoe" === a[s].id && parseFloat(n) > 99.1) return alert("鞋码填写范围为10~99码哦！"),
                                !1;
                                if (("size_height" === a[s].id || "size_weight" === a[s].id) && !n) return alert("身高和体重为必填项！"),
                                !1;
                                if (n.length > 0 && !n.match(/^[0-9]+.[0-9]$|^[0-9]+$/)) return alert("小美提示您，" + $(a[s]).attr("data-name") + "只能填写整数或者包含一位小数哦"),
                                !1;
                                if (parseFloat(n) < 10 || parseFloat(n) > 200) return alert("您填写的数字超出范围，请填写介于10-200的数字！"),
                                !1
                            }
                            t[a[s].id] = n
                        }
                        $.ajax({
                            url: "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/account/ajax_mysize/?op=add",
                            data: t,
                            type: "GET",
                            success: function(t) {
                                if (0 === t.error) {
                                    $(".mySize").css("display", "none");
                                    var a = i.chimaComDiv(t.data, e);
                                    $(".helperTitle").after(a),
                                    $("#cboxLoadedContent").css("height", "auto")
                                } else alert(t.data)
                            }
                        })
                    });
                    var r = $("div.sizeRule");
                    $("#size_shoulder").click(function() {
                        r.css({
                            display: "block",
                            top: "8px",
                            left: "91px",
                            "background-position": "-137px 0px"
                        })
                    }).focusout(function() {
                        r.css("display", "none")
                    }),
                    $("#size_bust").click(function() {
                        r.css({
                            display: "block",
                            top: "71px",
                            left: "91px",
                            "background-position": "-137px -62px"
                        })
                    }).focusout(function() {
                        r.css("display", "none")
                    }),
                    $("#size_waist").click(function() {
                        r.css({
                            display: "block",
                            top: "130px",
                            left: "91px",
                            "background-position": "-137px -125px"
                        })
                    }).focusout(function() {
                        r.css("display", "none")
                    }),
                    $("#size_hipline").click(function() {
                        r.css({
                            display: "block",
                            top: "184px",
                            left: "93px",
                            "background-position": "-137px -176px"
                        })
                    }).focusout(function() {
                        r.css("display", "none")
                    }),
                    $(".ini_select_div").click(function(e) {
                        var t = this,
                        i = $(t).find(".ini_sel_trig"),
                        a = $(t).find(".ini_option");
                        "none" === a.css("display") ? (a.css({
                            display: "block"
                        }), i.addClass("ini_sel_trig_hover")) : (a.css({
                            display: "none"
                        }), i.removeClass("ini_sel_trig_hover")),
                        e.stopPropagation()
                    })
                },
                ChimaOver: function() {
                    $(document).delegate(".infoTitle i", "click",
                    function() {
                        $("#cboxLoadedContent").css("height", "auto");
                        var e = $(this).parent("p"),
                        t = e.next("table");
                        "table" === t.css("display") ? t.css("display", "none") : t.css("display", "table")
                    }).delegate(".sizeHelper", "click",
                    function(e) {
                        var t = $(this).find(".ini_option");
                        "block" === t.css("display") && (t.css("display", "none"), $(this).find(".ini_sel_trig").removeClass("ini_sel_trig_hover"))
                    })
                },
                ChimaClick: function() {
                    var e = [];
                    e.push('<div class="sizeHelper"><div class="helperTitle"><i></i>尺码助手</div>'),
                    Jumei.util.cookie.get("uid") ? $.ajax({
                        url: "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/ajax/mysize/?uid=" + Jumei.util.cookie.get("uid"),
                        dataType: "jsonp",
                        success: function(t) {
                            var a = t,
                            s = "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/account/mysize";
                            a.length > 0 ? e.push(i.chimaComDiv(a)) : (e.push('<div class="mySize"><div class="sizeModo"><i></i><div class="sizeRule"></div><a href="' + s + '?1" target="_blank">详细测量方法》</a></div>'), e.push('<form id="mysize"><div class="sizeContainer"><p>我的尺码</p><ul><li>身高：<input type="text" id="size_height" data-name="身高" /> cm</li><li>体重：<input type="text" id="size_weight" data-name="体重" /> kg</li>'), e.push('<li>肩宽：<input type="text" id="size_shoulder" data-name="肩宽" /> cm</li><li>胸围：<input type="text" id="size_bust" data-name="胸围" /> cm</li><li>腰围：<input type="text" id="size_waist" data-name="腰围" /> cm</li>'), e.push('<li>臀围：<input type="text" id="size_hipline" data-name="臀围" /> cm</li><li>鞋码：<input type="text" id="size_shoe" data-name="鞋码" />&nbsp;码 &nbsp;  <a href="' + s + '?1_shoes" target="_blank" class="padding20">测量帮助》</a></li>'), e.push('<li>罩杯：<input type="text" id="size_cup" data-name="罩杯" /> 例如：80A  <a href="' + s + '?1_underwear" target="_blank" class="padding20">测量帮助》</a></li></ul><a href="javascript:" class="btn_red" id="sbm_sizeinfo">保存</a></div></form></div>')),
                            e.push('<div class="chimaInfo"><p class="infoTitle">该商品尺码信息 <i>展开<em></em></i></p><table class="infoTable" style="display:table">'),
                            e.push($("#chimaInfo").html()),
                            e.push("</table></div>"),
                            $.colorbox({
                                className: "colorbox",
                                html: e.join("")
                            }),
                            i.chimaHidden(a)
                        }
                    }) : (e.push('<div class="unlogin"><p>亲爱的，登陆后小美才能帮你推荐合适的美衣哦~</p><div class="unContainer"><i></i>'), e.push('<div><a href="' + JM.SITE_PASSPORT_WEBBASEURL + "i/account/login?redirect=" + location.href + '?tag=size_helper" target="_blank"  class="btn_red">登&nbsp;  &nbsp;录</a><em>已有 <i>230MM</i> 使用尺码助手选衣了哟</em></div></div></div>'), e.push('<div class="chimaInfo"><p class="infoTitle">该商品尺码信息 <i>展开<em></em></i></p><table class="infoTable">'), e.push($("#chimaInfo").html()), e.push("</table></div>"), $.colorbox({
                        className: "colorbox",
                        html: e.join("")
                    }), i.chimaHidden())
                }
            };
            return i.init
        }
    } ();
    i.exports = a
}),
define("ua",
function(e, t, i) {
    "use strict";
    var a = [/ms(ie)\s(\d+\.\d)/, /(trident)\/\d+\.\d.+?rv\:(\d+\.\d)/, /(chrome)\/(\d+\.\d+)/, /(firefox)\/(\d+\.\d+)/, /version\/(\d+\.\d+)(?:\.\d)?.+?(safari)/, /(opera)(?:.*version)\/([\d.]+)/],
    s = /mac\s(os\sx)|(windows)\snt/,
    r = /macintosh|ipad|windows/,
    n = navigator.userAgent.toLowerCase(),
    o = {},
    l = function() {
        for (var e, t, i, s = a.length,
        r = 0; s > r && !(e = n.match(a[r])); r++);
        e || (e = []),
        t = e[1] || "",
        i = e[2] || 0,
        t && ("safari" === i && (i = t, t = "safari"), "trident" === t && (t = "ie"), o.browser = t, o.browserVersion = i)
    },
    c = function() {
        var e, t = n.match(s);
        t && (t[1] ? e = t[1].replace(/\s/, "_") : t[2] && (e = t[2]), o.os = e)
    },
    d = function() {
        var e, t = n.match(r);
        t && (e = t[0], "windows" === e && (e = "pc"), o.device = e)
    };
    l(),
    c(),
    d(),
    t.ua = o
}),
define("md5",
function(e, t, i) {
    var a = {
        hexcase: 0,
        b64pad: "",
        chrsz: 8,
        core_md5: function(e, t) {
            e[t >> 5] |= 128 << t % 32,
            e[(t + 64 >>> 9 << 4) + 14] = t;
            for (var i = 1732584193,
            a = -271733879,
            s = -1732584194,
            r = 271733878,
            n = 0; n < e.length; n += 16) {
                var o = i,
                l = a,
                c = s,
                d = r;
                i = this.md5_ff(i, a, s, r, e[n + 0], 7, -680876936),
                r = this.md5_ff(r, i, a, s, e[n + 1], 12, -389564586),
                s = this.md5_ff(s, r, i, a, e[n + 2], 17, 606105819),
                a = this.md5_ff(a, s, r, i, e[n + 3], 22, -1044525330),
                i = this.md5_ff(i, a, s, r, e[n + 4], 7, -176418897),
                r = this.md5_ff(r, i, a, s, e[n + 5], 12, 1200080426),
                s = this.md5_ff(s, r, i, a, e[n + 6], 17, -1473231341),
                a = this.md5_ff(a, s, r, i, e[n + 7], 22, -45705983),
                i = this.md5_ff(i, a, s, r, e[n + 8], 7, 1770035416),
                r = this.md5_ff(r, i, a, s, e[n + 9], 12, -1958414417),
                s = this.md5_ff(s, r, i, a, e[n + 10], 17, -42063),
                a = this.md5_ff(a, s, r, i, e[n + 11], 22, -1990404162),
                i = this.md5_ff(i, a, s, r, e[n + 12], 7, 1804603682),
                r = this.md5_ff(r, i, a, s, e[n + 13], 12, -40341101),
                s = this.md5_ff(s, r, i, a, e[n + 14], 17, -1502002290),
                a = this.md5_ff(a, s, r, i, e[n + 15], 22, 1236535329),
                i = this.md5_gg(i, a, s, r, e[n + 1], 5, -165796510),
                r = this.md5_gg(r, i, a, s, e[n + 6], 9, -1069501632),
                s = this.md5_gg(s, r, i, a, e[n + 11], 14, 643717713),
                a = this.md5_gg(a, s, r, i, e[n + 0], 20, -373897302),
                i = this.md5_gg(i, a, s, r, e[n + 5], 5, -701558691),
                r = this.md5_gg(r, i, a, s, e[n + 10], 9, 38016083),
                s = this.md5_gg(s, r, i, a, e[n + 15], 14, -660478335),
                a = this.md5_gg(a, s, r, i, e[n + 4], 20, -405537848),
                i = this.md5_gg(i, a, s, r, e[n + 9], 5, 568446438),
                r = this.md5_gg(r, i, a, s, e[n + 14], 9, -1019803690),
                s = this.md5_gg(s, r, i, a, e[n + 3], 14, -187363961),
                a = this.md5_gg(a, s, r, i, e[n + 8], 20, 1163531501),
                i = this.md5_gg(i, a, s, r, e[n + 13], 5, -1444681467),
                r = this.md5_gg(r, i, a, s, e[n + 2], 9, -51403784),
                s = this.md5_gg(s, r, i, a, e[n + 7], 14, 1735328473),
                a = this.md5_gg(a, s, r, i, e[n + 12], 20, -1926607734),
                i = this.md5_hh(i, a, s, r, e[n + 5], 4, -378558),
                r = this.md5_hh(r, i, a, s, e[n + 8], 11, -2022574463),
                s = this.md5_hh(s, r, i, a, e[n + 11], 16, 1839030562),
                a = this.md5_hh(a, s, r, i, e[n + 14], 23, -35309556),
                i = this.md5_hh(i, a, s, r, e[n + 1], 4, -1530992060),
                r = this.md5_hh(r, i, a, s, e[n + 4], 11, 1272893353),
                s = this.md5_hh(s, r, i, a, e[n + 7], 16, -155497632),
                a = this.md5_hh(a, s, r, i, e[n + 10], 23, -1094730640),
                i = this.md5_hh(i, a, s, r, e[n + 13], 4, 681279174),
                r = this.md5_hh(r, i, a, s, e[n + 0], 11, -358537222),
                s = this.md5_hh(s, r, i, a, e[n + 3], 16, -722521979),
                a = this.md5_hh(a, s, r, i, e[n + 6], 23, 76029189),
                i = this.md5_hh(i, a, s, r, e[n + 9], 4, -640364487),
                r = this.md5_hh(r, i, a, s, e[n + 12], 11, -421815835),
                s = this.md5_hh(s, r, i, a, e[n + 15], 16, 530742520),
                a = this.md5_hh(a, s, r, i, e[n + 2], 23, -995338651),
                i = this.md5_ii(i, a, s, r, e[n + 0], 6, -198630844),
                r = this.md5_ii(r, i, a, s, e[n + 7], 10, 1126891415),
                s = this.md5_ii(s, r, i, a, e[n + 14], 15, -1416354905),
                a = this.md5_ii(a, s, r, i, e[n + 5], 21, -57434055),
                i = this.md5_ii(i, a, s, r, e[n + 12], 6, 1700485571),
                r = this.md5_ii(r, i, a, s, e[n + 3], 10, -1894986606),
                s = this.md5_ii(s, r, i, a, e[n + 10], 15, -1051523),
                a = this.md5_ii(a, s, r, i, e[n + 1], 21, -2054922799),
                i = this.md5_ii(i, a, s, r, e[n + 8], 6, 1873313359),
                r = this.md5_ii(r, i, a, s, e[n + 15], 10, -30611744),
                s = this.md5_ii(s, r, i, a, e[n + 6], 15, -1560198380),
                a = this.md5_ii(a, s, r, i, e[n + 13], 21, 1309151649),
                i = this.md5_ii(i, a, s, r, e[n + 4], 6, -145523070),
                r = this.md5_ii(r, i, a, s, e[n + 11], 10, -1120210379),
                s = this.md5_ii(s, r, i, a, e[n + 2], 15, 718787259),
                a = this.md5_ii(a, s, r, i, e[n + 9], 21, -343485551),
                i = this.safe_add(i, o),
                a = this.safe_add(a, l),
                s = this.safe_add(s, c),
                r = this.safe_add(r, d)
            }
            return Array(i, a, s, r)
        },
        hex_md5: function(e) {
            return this.binl2hex(this.core_md5(this.str2binl(e), e.length * this.chrsz))
        },
        b64_md5: function(e) {
            return this.binl2b64(this.core_md5(this.str2binl(e), e.length * this.chrsz))
        },
        str_md5: function(e) {
            return this.binl2str(this.core_md5(this.str2binl(e), e.length * this.chrsz))
        },
        hex_hmac_md5: function(e, t) {
            return this.binl2hex(this.core_hmac_md5(e, t))
        },
        b64_hmac_md5: function(e, t) {
            return this.binl2b64(this.core_hmac_md5(e, t))
        },
        str_hmac_md5: function(e, t) {
            return this.binl2str(this.core_hmac_md5(e, t))
        },
        md5_vm_test: function() {
            return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc")
        },
        md5_cmn: function(e, t, i, a, s, r) {
            var n = this;
            return this.safe_add(n.bit_rol(n.safe_add(n.safe_add(t, e), n.safe_add(a, r)), s), i)
        },
        md5_ff: function(e, t, i, a, s, r, n) {
            return this.md5_cmn(t & i | ~t & a, e, t, s, r, n)
        },
        md5_gg: function(e, t, i, a, s, r, n) {
            return this.md5_cmn(t & a | i & ~a, e, t, s, r, n)
        },
        md5_hh: function(e, t, i, a, s, r, n) {
            return this.md5_cmn(t ^ i ^ a, e, t, s, r, n)
        },
        md5_ii: function(e, t, i, a, s, r, n) {
            return this.md5_cmn(i ^ (t | ~a), e, t, s, r, n)
        },
        core_hmac_md5: function(e, t) {
            var i = this.str2binl(e);
            i.length > 16 && (i = this.core_md5(i, e.length * this.chrsz));
            for (var a = Array(16), s = Array(16), r = 0; 16 > r; r++) a[r] = 909522486 ^ i[r],
            s[r] = 1549556828 ^ i[r];
            var n = this.core_md5(a.concat(this.str2binl(t)), 512 + t.length * this.chrsz);
            return this.core_md5(s.concat(n), 640)
        },
        safe_add: function(e, t) {
            var i = (65535 & e) + (65535 & t),
            a = (e >> 16) + (t >> 16) + (i >> 16);
            return a << 16 | 65535 & i
        },
        bit_rol: function(e, t) {
            return e << t | e >>> 32 - t
        },
        str2binl: function(e) {
            for (var t = Array(), i = (1 << this.chrsz) - 1, a = 0; a < e.length * this.chrsz; a += this.chrsz) t[a >> 5] |= (e.charCodeAt(a / this.chrsz) & i) << a % 32;
            return t
        },
        binl2str: function(e) {
            for (var t = "",
            i = (1 << this.chrsz) - 1, a = 0; a < 32 * e.length; a += this.chrsz) t += String.fromCharCode(e[a >> 5] >>> a % 32 & i);
            return t
        },
        binl2hex: function(e) {
            for (var t = this.hexcase ? "0123456789ABCDEF": "0123456789abcdef", i = "", a = 0; a < 4 * e.length; a++) i += t.charAt(e[a >> 2] >> a % 4 * 8 + 4 & 15) + t.charAt(e[a >> 2] >> a % 4 * 8 & 15);
            return i
        },
        binl2b64: function(e) {
            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            i = "",
            a = 0; a < 4 * e.length; a += 3) for (var s = (e[a >> 2] >> 8 * (a % 4) & 255) << 16 | (e[a + 1 >> 2] >> 8 * ((a + 1) % 4) & 255) << 8 | e[a + 2 >> 2] >> 8 * ((a + 2) % 4) & 255, r = 0; 4 > r; r++) i += 8 * a + 6 * r > 32 * e.length ? this.b64pad: t.charAt(s >> 6 * (3 - r) & 63);
            return i
        }
    };
    return a
}),
define("md_streamfb",
function(e) {
    "use strict";
    function t(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    var i = {
        fb_type: 3,
        search_product_id: 0,
        search_category_id: 0,
        search_brand_id: 0,
        search_page: 0,
        search_pos: 0,
        price: 0,
        search_product_type: "item_deal",
        search_show_id: 0,
        result_cnt: 0,
        platform: 1,
        search_hash_id: 0,
        search_sku_id: 0,
        search_spu_id: 0,
        search_warehouse_id: 0
    },
    a = {
        fb_type: "ftype",
        search_product_id: "spd",
        search_category_id: "scd",
        search_brand_id: "sbd",
        search_page: "spage",
        search_pos: "spos",
        price: "price",
        search_product_type: "spt",
        search_show_id: "ssd",
        result_cnt: "rc",
        search_hash_id: "hid",
        search_sku_id: "sku",
        search_spu_id: "spu",
        search_warehouse_id: "swd"
    },
    s = {
        init: function(e, t) {
            s.send(e, t)
        },
        send: function(e, t) {
            var r = i;
            Jumei.util.cookie.get("abt114"),
            Jumei.util.cookie.get("abt113");
            for (var n in r) e.attr(n) && (r[n] = e.attr(n));
            var o = $.extend({},
            r, t),
            l = {
                stream: "jumei",
                vl: s.format(o, a)
            };
            return window.monitor && window.monitor.log("custom", l),
            !0
        },
        format: function(e, i) {
            var a, s = [];
            if (arguments.length > 1) for (a in i) if (t(e, a)) {
                var r = i[a];
                r != a && (e[r] = e[a], delete e[a])
            }
            for (a in e) s.push(a + "|" + e[a]);
            return s.join("^")
        }
    };
    window.StreamUtil = s
}),
define("colorbox",
function(e, t, i) { !
    function(e, t, i) {
        function a(i, a, s) {
            var r = t.createElement(i);
            return a && (r.id = Z + a),
            s && (r.style.cssText = s),
            e(r)
        }
        function s() {
            return i.innerHeight ? i.innerHeight: e(i).height()
        }
        function r(t, i) {
            i !== Object(i) && (i = {}),
            this.cache = {},
            this.el = t,
            this.value = function(t) {
                var a;
                return void 0 === this.cache[t] && (a = e(this.el).attr("data-cbox-" + t), void 0 !== a ? this.cache[t] = a: void 0 !== i[t] ? this.cache[t] = i[t] : void 0 !== Y[t] && (this.cache[t] = Y[t])),
                this.cache[t]
            },
            this.get = function(t) {
                var i = this.value(t);
                return e.isFunction(i) ? i.call(this.el, this) : i
            }
        }
        function n(e) {
            var t = k.length,
            i = (H + e) % t;
            return 0 > i ? t + i: i
        }
        function o(e, t) {
            return Math.round((/%/.test(e) ? ("x" === t ? C.width() : s()) / 100 : 1) * parseInt(e, 10))
        }
        function l(e, t) {
            return e.get("photo") || e.get("photoRegex").test(t)
        }
        function c(e, t) {
            return e.get("retinaUrl") && i.devicePixelRatio > 1 ? t.replace(e.get("photoRegex"), e.get("retinaSuffix")) : t
        }
        function d(e) {
            "contains" in b[0] && !b[0].contains(e.target) && e.target !== v[0] && (e.stopPropagation(), b.focus())
        }
        function h(e) {
            h.str !== e && (b.add(v).removeClass(h.str).addClass(e), h.str = e)
        }
        function m(t) {
            H = 0,
            t && t !== !1 && "nofollow" !== t ? (k = e("." + ee).filter(function() {
                var i = e.data(this, X),
                a = new r(this, i);
                return a.get("rel") === t
            }), H = k.index(J.el), -1 === H && (k = k.add(J.el), H = k.length - 1)) : k = e(J.el)
        }
        function _(i) {
            e(t).trigger(i),
            oe.triggerHandler(i)
        }
        function u(i) {
            var s;
            if (!U) {
                if (s = e(i).data(X), J = new r(i, s), m(J.get("rel")), !V) {
                    V = Q = !0,
                    h(J.get("className")),
                    b.css({
                        visibility: "hidden",
                        display: "block",
                        opacity: ""
                    }),
                    M = a(le, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"),
                    y.css({
                        width: "",
                        height: ""
                    }).append(M),
                    P = $.height() + T.height() + y.outerHeight(!0) - y.height(),
                    R = x.width() + I.width() + y.outerWidth(!0) - y.width(),
                    q = M.outerHeight(!0),
                    F = M.outerWidth(!0);
                    var n = o(J.get("initialWidth"), "x"),
                    l = o(J.get("initialHeight"), "y"),
                    c = J.get("maxWidth"),
                    u = J.get("maxHeight");
                    J.w = (c !== !1 ? Math.min(n, o(c, "x")) : n) - F - R,
                    J.h = (u !== !1 ? Math.min(l, o(u, "y")) : l) - q - P,
                    M.css({
                        width: "",
                        height: J.h
                    }),
                    K.position(),
                    _(te),
                    J.get("onOpen"),
                    O.add(E).hide(),
                    b.focus(),
                    J.get("trapFocus") && t.addEventListener && (t.addEventListener("focus", d, !0), oe.one(re,
                    function() {
                        t.removeEventListener("focus", d, !0)
                    })),
                    J.get("returnFocus") && oe.one(re,
                    function() {
                        e(J.el).focus()
                    })
                }
                var p = parseFloat(J.get("opacity"));
                v.css({
                    opacity: p === p ? p: "",
                    cursor: J.get("overlayClose") ? "pointer": "",
                    visibility: "visible"
                }).show(),
                J.get("closeButton") ? L.html(J.get("close")).appendTo(y) : L.appendTo("<div/>"),
                g()
            }
        }
        function p() {
            b || (G = !1, C = e(i), b = a(le).attr({
                id: X,
                "class": e.support.opacity === !1 ? Z + "IE": "",
                role: "dialog",
                tabindex: "-1"
            }).hide(), v = a(le, "Overlay").hide(), j = e([a(le, "LoadingOverlay")[0], a(le, "LoadingGraphic")[0]]), w = a(le, "Wrapper"), y = a(le, "Content").append(E = a(le, "Title"), A = a(le, "Current"), z = e('<button type="button"/>').attr({
                id: Z + "Previous"
            }), D = e('<button type="button"/>').attr({
                id: Z + "Next"
            }), S = a("button", "Slideshow"), j), L = e('<button type="button"/>').attr({
                id: Z + "Close",
                "class": Z + "Close"
            }), w.append(a(le).append(a(le, "TopLeft"), $ = a(le, "TopCenter"), a(le, "TopRight")), a(le, !1, "clear:left").append(x = a(le, "MiddleLeft"), y, I = a(le, "MiddleRight")), a(le, !1, "clear:left").append(a(le, "BottomLeft"), T = a(le, "BottomCenter"), a(le, "BottomRight"))).find("div div").css({
                "float": "left"
            }), N = a(le, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), O = D.add(z).add(A).add(S)),
            t.body && !b.parent().length && e(t.body).append(v, b.append(w, N))
        }
        function f() {
            function i(e) {
                e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey || (e.preventDefault(), u(this))
            }
            return b ? (G || (G = !0, D.click(function() {
                K.next()
            }), z.click(function() {
                K.prev()
            }), L.click(function() {
                K.close()
            }), v.click(function() {
                J.get("overlayClose") && K.close()
            }), e(t).bind("keydown." + Z,
            function(e) {
                var t = e.keyCode;
                V && J.get("escKey") && 27 === t && (e.preventDefault(), K.close()),
                V && J.get("arrowKey") && k[1] && !e.altKey && (37 === t ? (e.preventDefault(), z.click()) : 39 === t && (e.preventDefault(), D.click()))
            }), e.isFunction(e.fn.on) ? e(t).on("click." + Z, "." + ee, i) : e("." + ee).live("click." + Z, i)), !0) : !1
        }
        function g() {
            var t, s, r, n = K.prep,
            d = ++ce;
            if (Q = !0, W = !1, _(ne), _(ie), J.get("onLoad"), J.h = J.get("height") ? o(J.get("height"), "y") - q - P: J.get("innerHeight") && o(J.get("innerHeight"), "y"), J.w = J.get("width") ? o(J.get("width"), "x") - F - R: J.get("innerWidth") && o(J.get("innerWidth"), "x"), J.mw = J.w, J.mh = J.h, J.get("maxWidth") && (J.mw = o(J.get("maxWidth"), "x") - F - R, J.mw = J.w && J.w < J.mw ? J.w: J.mw), J.get("maxHeight") && (J.mh = o(J.get("maxHeight"), "y") - q - P, J.mh = J.h && J.h < J.mh ? J.h: J.mh), t = J.get("href"), B = setTimeout(function() {
                j.show()
            },
            100), J.get("inline")) {
                var h = e(t);
                r = e("<div>").hide().insertBefore(h),
                oe.one(ne,
                function() {
                    r.replaceWith(h)
                }),
                n(h)
            } else J.get("iframe") ? n(" ") : J.get("html") ? n(J.get("html")) : l(J, t) ? (t = c(J, t), W = J.get("createImg"), e(W).addClass(Z + "Photo").bind("error." + Z,
            function() {
                n(a(le, "Error").html(J.get("imgError")))
            }).one("load",
            function() {
                d === ce && setTimeout(function() {
                    var t;
                    J.get("retinaImage") && i.devicePixelRatio > 1 && (W.height = W.height / i.devicePixelRatio, W.width = W.width / i.devicePixelRatio),
                    J.get("scalePhotos") && (s = function() {
                        W.height -= W.height * t,
                        W.width -= W.width * t
                    },
                    J.mw && W.width > J.mw && (t = (W.width - J.mw) / W.width, s()), J.mh && W.height > J.mh && (t = (W.height - J.mh) / W.height, s())),
                    J.h && (W.style.marginTop = Math.max(J.mh - W.height, 0) / 2 + "px"),
                    k[1] && (J.get("loop") || k[H + 1]) && (W.style.cursor = "pointer", e(W).bind("click." + Z,
                    function() {
                        K.next()
                    })),
                    W.style.width = W.width + "px",
                    W.style.height = W.height + "px",
                    n(W)
                },
                1)
            }), W.src = t) : t && N.load(t, J.get("data"),
            function(t, i) {
                d === ce && n("error" === i ? a(le, "Error").html(J.get("xhrError")) : e(this).contents())
            })
        }
        var v, b, w, y, $, x, I, T, k, C, M, N, j, E, A, S, D, z, L, O, J, P, R, q, F, H, W, V, Q, U, B, K, G, Y = {
            html: !1,
            photo: !1,
            iframe: !1,
            inline: !1,
            transition: "elastic",
            speed: 300,
            fadeOut: 300,
            width: !1,
            initialWidth: "600",
            innerWidth: !1,
            maxWidth: !1,
            height: !1,
            initialHeight: "450",
            innerHeight: !1,
            maxHeight: !1,
            scalePhotos: !0,
            scrolling: !0,
            opacity: .9,
            preloading: !0,
            className: !1,
            overlayClose: !0,
            escKey: !0,
            arrowKey: !0,
            top: !1,
            bottom: !1,
            left: !1,
            right: !1,
            fixed: !1,
            data: void 0,
            closeButton: !0,
            fastIframe: !0,
            open: !1,
            reposition: !0,
            loop: !0,
            slideshow: !1,
            slideshowAuto: !0,
            slideshowSpeed: 2500,
            slideshowStart: "start slideshow",
            slideshowStop: "stop slideshow",
            photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
            retinaImage: !1,
            retinaUrl: !1,
            retinaSuffix: "@2x.$1",
            current: "image {current} of {total}",
            previous: "previous",
            next: "next",
            close: "close",
            xhrError: "This content failed to load.",
            imgError: "This image failed to load.",
            returnFocus: !0,
            trapFocus: !0,
            onOpen: !1,
            onLoad: !1,
            onComplete: !1,
            onCleanup: !1,
            onClosed: !1,
            rel: function() {
                return this.rel
            },
            href: function() {
                return e(this).attr("href")
            },
            title: function() {
                return this.title
            },
            createImg: function() {
                var t = new Image,
                i = e(this).data("cbox-img-attrs");
                return "object" == typeof i && e.each(i,
                function(e, i) {
                    t[e] = i
                }),
                t
            },
            createIframe: function() {
                var i = t.createElement("iframe"),
                a = e(this).data("cbox-iframe-attrs");
                return "object" == typeof a && e.each(a,
                function(e, t) {
                    i[e] = t
                }),
                "frameBorder" in i && (i.frameBorder = 0),
                "allowTransparency" in i && (i.allowTransparency = "true"),
                i.name = (new Date).getTime(),
                i.allowFullscreen = !0,
                i
            }
        },
        X = "colorbox",
        Z = "cbox",
        ee = Z + "Element",
        te = Z + "_open",
        ie = Z + "_load",
        ae = Z + "_complete",
        se = Z + "_cleanup",
        re = Z + "_closed",
        ne = Z + "_purge",
        oe = e("<a/>"),
        le = "div",
        ce = 0,
        de = {},
        he = function() {
            function e() {
                clearTimeout(n)
            }
            function t() { (J.get("loop") || k[H + 1]) && (e(), n = setTimeout(K.next, J.get("slideshowSpeed")))
            }
            function i() {
                S.html(J.get("slideshowStop")).unbind(l).one(l, a),
                oe.bind(ae, t).bind(ie, e),
                b.removeClass(o + "off").addClass(o + "on")
            }
            function a() {
                e(),
                oe.unbind(ae, t).unbind(ie, e),
                S.html(J.get("slideshowStart")).unbind(l).one(l,
                function() {
                    K.next(),
                    i()
                }),
                b.removeClass(o + "on").addClass(o + "off")
            }
            function s() {
                r = !1,
                S.hide(),
                e(),
                oe.unbind(ae, t).unbind(ie, e),
                b.removeClass(o + "off " + o + "on")
            }
            var r, n, o = Z + "Slideshow_",
            l = "click." + Z;
            return function() {
                r ? J.get("slideshow") || (oe.unbind(se, s), s()) : J.get("slideshow") && k[1] && (r = !0, oe.one(se, s), J.get("slideshowAuto") ? i() : a(), S.show())
            }
        } ();
        e[X] || (e(p), K = e.fn[X] = e[X] = function(t, i) {
            var a, s = this;
            return t = t || {},
            e.isFunction(s) && (s = e("<a/>"), t.open = !0),
            s[0] ? (p(), f() && (i && (t.onComplete = i), s.each(function() {
                var i = e.data(this, X) || {};
                e.data(this, X, e.extend(i, t))
            }).addClass(ee), a = new r(s[0], t), a.get("open") && u(s[0])), s) : s
        },
        K.position = function(t, i) {
            function a() {
                $[0].style.width = T[0].style.width = y[0].style.width = parseInt(b[0].style.width, 10) - R + "px",
                y[0].style.height = x[0].style.height = I[0].style.height = parseInt(b[0].style.height, 10) - P + "px"
            }
            var r, n, l, c = 0,
            d = 0,
            h = b.offset();
            if (C.unbind("resize." + Z), b.css({
                top: -9e4,
                left: -9e4
            }), n = C.scrollTop(), l = C.scrollLeft(), J.get("fixed") ? (h.top -= n, h.left -= l, b.css({
                position: "fixed"
            })) : (c = n, d = l, b.css({
                position: "absolute"
            })), d += J.get("right") !== !1 ? Math.max(C.width() - J.w - F - R - o(J.get("right"), "x"), 0) : J.get("left") !== !1 ? o(J.get("left"), "x") : Math.round(Math.max(C.width() - J.w - F - R, 0) / 2), c += J.get("bottom") !== !1 ? Math.max(s() - J.h - q - P - o(J.get("bottom"), "y"), 0) : J.get("top") !== !1 ? o(J.get("top"), "y") : Math.round(Math.max(s() - J.h - q - P, 0) / 2), b.css({
                top: h.top,
                left: h.left,
                visibility: "visible"
            }), w[0].style.width = w[0].style.height = "9999px", r = {
                width: J.w + F + R,
                height: J.h + q + P,
                top: c,
                left: d
            },
            t) {
                var m = 0;
                e.each(r,
                function(e) {
                    return r[e] !== de[e] ? void(m = t) : void 0
                }),
                t = m
            }
            de = r,
            t || b.css(r),
            b.dequeue().animate(r, {
                duration: t || 0,
                complete: function() {
                    a(),
                    Q = !1,
                    w[0].style.width = J.w + F + R + "px",
                    w[0].style.height = J.h + q + P + "px",
                    J.get("reposition") && setTimeout(function() {
                        C.bind("resize." + Z, K.position)
                    },
                    1),
                    e.isFunction(i) && i()
                },
                step: a
            })
        },
        K.resize = function(e) {
            var t;
            V && (e = e || {},
            e.width && (J.w = o(e.width, "x") - F - R), e.innerWidth && (J.w = o(e.innerWidth, "x")), M.css({
                width: J.w
            }), e.height && (J.h = o(e.height, "y") - q - P), e.innerHeight && (J.h = o(e.innerHeight, "y")), e.innerHeight || e.height || (t = M.scrollTop(), M.css({
                height: "auto"
            }), J.h = M.height()), M.css({
                height: J.h
            }), t && M.scrollTop(t), K.position("none" === J.get("transition") ? 0 : J.get("speed")))
        },
        K.prep = function(i) {
            function s() {
                return J.w = J.w || M.width(),
                J.w = J.mw && J.mw < J.w ? J.mw: J.w,
                J.w
            }
            function o() {
                return J.h = J.h || M.height(),
                J.h = J.mh && J.mh < J.h ? J.mh: J.h,
                J.h
            }
            if (V) {
                var d, m = "none" === J.get("transition") ? 0 : J.get("speed");
                M.remove(),
                M = a(le, "LoadedContent").append(i),
                M.hide().appendTo(N.show()).css({
                    width: s(),
                    overflow: J.get("scrolling") ? "auto": "hidden"
                }).css({
                    height: o()
                }).prependTo(y),
                N.hide(),
                e(W).css({
                    "float": "none"
                }),
                h(J.get("className")),
                d = function() {
                    function i() {
                        e.support.opacity === !1 && b[0].style.removeAttribute("filter")
                    }
                    var a, s, o = k.length;
                    V && (s = function() {
                        clearTimeout(B),
                        j.hide(),
                        _(ae),
                        J.get("onComplete")
                    },
                    E.html(J.get("title")).show(), M.show(), o > 1 ? ("string" == typeof J.get("current") && A.html(J.get("current").replace("{current}", H + 1).replace("{total}", o)).show(), D[J.get("loop") || o - 1 > H ? "show": "hide"]().html(J.get("next")), z[J.get("loop") || H ? "show": "hide"]().html(J.get("previous")), he(), J.get("preloading") && e.each([n( - 1), n(1)],
                    function() {
                        var i, a = k[this],
                        s = new r(a, e.data(a, X)),
                        n = s.get("href");
                        n && l(s, n) && (n = c(s, n), i = t.createElement("img"), i.src = n)
                    })) : O.hide(), J.get("iframe") ? (a = J.get("createIframe"), J.get("scrolling") || (a.scrolling = "no"), e(a).attr({
                        src: J.get("href"),
                        "class": Z + "Iframe"
                    }).one("load", s).appendTo(M), oe.one(ne,
                    function() {
                        a.src = "//about:blank"
                    }), J.get("fastIframe") && e(a).trigger("load")) : s(), "fade" === J.get("transition") ? b.fadeTo(m, 1, i) : i())
                },
                "fade" === J.get("transition") ? b.fadeTo(m, 0,
                function() {
                    K.position(0, d)
                }) : K.position(m, d)
            }
        },
        K.next = function() { ! Q && k[1] && (J.get("loop") || k[H + 1]) && (H = n(1), u(k[H]))
        },
        K.prev = function() { ! Q && k[1] && (J.get("loop") || H) && (H = n( - 1), u(k[H]))
        },
        K.close = function() {
            V && !U && (U = !0, V = !1, _(se), J.get("onCleanup"), C.unbind("." + Z), v.fadeTo(J.get("fadeOut") || 0, 0), b.stop().fadeTo(J.get("fadeOut") || 0, 0,
            function() {
                b.hide(),
                v.hide(),
                _(ne),
                M.remove(),
                setTimeout(function() {
                    U = !1,
                    _(re),
                    J.get("onClosed")
                },
                1)
            }))
        },
        K.remove = function() {
            b && (b.stop(), e[X].close(), b.stop(!1, !0).remove(), v.remove(), U = !1, b = null, e("." + ee).removeData(X).removeClass(ee), e(t).unbind("click." + Z).unbind("keydown." + Z))
        },
        K.element = function() {
            return e(J.el)
        },
        K.settings = Y)
    } (jQuery, document, window)
}),
define("timer",
function(e, t, i) {
    jQuery.fn.extend({
        everyTime: function(e, t, i, a) {
            return this.each(function() {
                jQuery.timer.add(this, e, t, i, a)
            })
        },
        oneTime: function(e, t, i) {
            return this.each(function() {
                jQuery.timer.add(this, e, t, i, 1)
            })
        },
        stopTime: function(e, t) {
            return this.each(function() {
                jQuery.timer.remove(this, e, t)
            })
        }
    }),
    jQuery.extend({
        timer: {
            global: [],
            guid: 1,
            dataKey: "jQuery.timer",
            regex: /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,
            powers: {
                ms: 1,
                cs: 10,
                ds: 100,
                s: 1e3,
                das: 1e4,
                hs: 1e5,
                ks: 1e6
            },
            timeParse: function(e) {
                if (void 0 === e || null === e) return null;
                var t = this.regex.exec(jQuery.trim(e.toString()));
                if (t[2]) {
                    var i = parseFloat(t[1]),
                    a = this.powers[t[2]] || 1;
                    return i * a
                }
                return e
            },
            add: function(e, t, i, a, s) {
                var r = 0;
                if (jQuery.isFunction(i) && (s || (s = a), a = i, i = t), t = jQuery.timer.timeParse(t), !("number" != typeof t || isNaN(t) || 0 > t)) { ("number" != typeof s || isNaN(s) || 0 > s) && (s = 0),
                    s = s || 0;
                    var n = jQuery.data(e, this.dataKey) || jQuery.data(e, this.dataKey, {});
                    n[i] || (n[i] = {}),
                    a.timerID = a.timerID || this.guid++;
                    var o = function() { (++r > s && 0 !== s || a.call(e, r) === !1) && jQuery.timer.remove(e, i, a)
                    };
                    o.timerID = a.timerID,
                    n[i][a.timerID] || (n[i][a.timerID] = window.setInterval(o, t)),
                    this.global.push(e)
                }
            },
            remove: function(e, t, i) {
                var a, s = jQuery.data(e, this.dataKey);
                if (s) {
                    if (t) {
                        if (s[t]) {
                            if (i) i.timerID && (window.clearInterval(s[t][i.timerID]), delete s[t][i.timerID]);
                            else for (i in s[t]) window.clearInterval(s[t][i]),
                            delete s[t][i];
                            for (a in s[t]) break;
                            a || (a = null, delete s[t])
                        }
                    } else for (t in s) this.remove(e, t, i);
                    for (a in s) break;
                    a || jQuery.removeData(e, this.dataKey)
                }
            }
        }
    }),
    jQuery(window).bind("unload",
    function() {
        jQuery.each(jQuery.timer.global,
        function(e, t) {
            jQuery.timer.remove(t)
        })
    })
}),
define("slider",
function(e, t, i) { !
    function(e) {
        e.fn.Slide = function(t) {
            var i = e.extend({},
            e.fn.Slide.deflunt, t),
            a = 0,
            s = e("." + i.claNav, e(this)),
            r = e("." + i.claNav + " .next", e(this)),
            n = e("." + i.claNav + " .prev", e(this)),
            o = e("." + i.claCon, e(this)),
            l = o.children().size(),
            c = o.children().first().height(),
            d = o.children().first().width();
            i.slideTitle = e("." + i.slideTitle, e(this)),
            i.imgList = o.children().find("img");
            var h, m;
            if (i.createPage === !0 && "scroolLoop" != i.effect && "scroolTxt" != i.effect) {
                for (var _ = '<i class="on">1</i>',
                u = 2; l >= u; u++) _ += "<i>" + u + "</i>";
                s.append(_)
            }
            var p = s.children();
            return "scroolY" == i.effect || "scroolTxt" == i.effect ? m = c: "scroolX" == i.effect || "scroolLoop" == i.effect ? (o.css("width", l * d), m = d) : "fade" == i.effect && (o.children().first().css("z-index", "1").siblings().css({
                "z-index": "0",
                opacity: "0"
            }), i.slideTitle.html(i.imgList.eq(0).attr("alt"))),
            this.each(function() {
                var t = e(this),
                s = function() {
                    return "scroolLoop" === i.effect ? void r.click() : (e.fn.Slide.effect[i.effect](o, p, a, m, i), a++, void(a * i.steps >= l && (a = 0)))
                };
                r.click(function(c) {
                    i.autoPlay && clearInterval(h),
                    i.loop ? (a = 1, e.fn.Slide.effectLoop.scroolLeft(o, p, a, m, i,
                    function() {
                        for (var e = 0; e < i.steps; e++) o.find("li:first", t).appendTo(o);
                        o.css({
                            left: "0"
                        })
                    })) : (a + 1) * i.steps < l && (a++, n.removeClass("preend"), e.fn.Slide.effectLoop.scroolLeft(o, p, a, m, i,
                    function() { (a + 1) * i.steps >= l && r.addClass("nextend")
                    })),
                    c.preventDefault(),
                    i.autoPlay && (h = setInterval(s, i.timer))
                }),
                n.click(function(t) {
                    if (i.autoPlay && clearInterval(h), i.loop) {
                        a = 1;
                        for (var l = 0; l < i.steps; l++) o.find("li:last").prependTo(o);
                        o.css({
                            left: -a * i.steps * d
                        }),
                        e.fn.Slide.effectLoop.scroolRight(o, p, a, m, i)
                    } else a--,
                    0 > a ? a = 0 : (r.removeClass("nextend"), e.fn.Slide.effectLoop.scroolLeft(o, p, a, m, i,
                    function() {
                        0 === a && n.addClass("preend")
                    }));
                    t.preventDefault(),
                    i.autoPlay && (h = setInterval(s, i.timer))
                }),
                i.autoPlay && (h = setInterval(s, i.timer), o.hover(function() {
                    h && clearInterval(h)
                },
                function() {
                    h && clearInterval(h),
                    h = setInterval(s, i.timer)
                })),
                "scroolLoop" != i.effect && p.hover(function() {
                    h && clearInterval(h),
                    a = p.index(this),
                    setTimeout(function() {
                        e.fn.Slide.effect[i.effect](o, p, a, m, i)
                    },
                    200)
                },
                function() {
                    h && clearInterval(h),
                    h = setInterval(s, i.timer)
                })
            })
        },
        e.fn.Slide.deflunt = {
            effect: "scroolY",
            autoPlay: !0,
            speed: "normal",
            timer: 1e3,
            defIndex: 0,
            claNav: "JQ-slide-nav",
            claCon: "JQ-slide-content",
            steps: 1,
            createPage: !0,
            loop: !0,
            slideTitle: "slideTitle"
        },
        e.fn.Slide.effectLoop = {
            scroolLeft: function(e, t, i, a, s, r) {
                e.animate({
                    left: -i * s.steps * a
                },
                s.speed, r),
                t && t.eq(i).addClass("on").siblings().removeClass("on")
            },
            scroolRight: function(e, t, i, a, s, r) {
                e.stop().animate({
                    left: 0
                },
                s.speed, r)
            }
        },
        e.fn.Slide.effect = {
            fade: function(e, t, i, a, s) {
                s.slideTitle.html(s.imgList.eq(i).attr("alt")),
                e.children().eq(i).stop().animate({
                    opacity: 1
                },
                s.speed).css({
                    "z-index": "1"
                }).siblings().animate({
                    opacity: 0
                },
                s.speed).css({
                    "z-index": "0"
                }),
                t.eq(i).addClass("on").siblings().removeClass("on")
            },
            scroolTxt: function(e, t, i, a, s) {
                e.animate({
                    "margin-top": -s.steps * a
                },
                s.speed,
                function() {
                    for (var t = 0; t < s.steps; t++) e.find("li:first").appendTo(e);
                    e.css({
                        "margin-top": "0"
                    })
                })
            },
            scroolX: function(e, t, i, a, s, r) {
                e.stop().animate({
                    left: -i * s.steps * a
                },
                s.speed, r),
                t && t.eq(i).addClass("on").siblings().removeClass("on")
            },
            scroolY: function(e, t, i, a, s) {
                e.stop().animate({
                    top: -i * s.steps * a
                },
                s.speed),
                t && t.eq(i).addClass("on").siblings().removeClass("on")
            },
            fadeIn: function(t) {
                t = e.fn.extend({
                    pageobj: e(this).find(">p"),
                    timer: 3500,
                    auto: !0
                },
                t || {});
                var i = e(this),
                a = e("li", i).length,
                s = '<i class="on">1</i>',
                r = e(t.pageobj),
                n = null,
                o = 0,
                l = null;
                e("li", i).eq(0).show().siblings().hide();
                for (var c = 2; a >= c; c++) s += "<i>" + c + "</i>";
                r.append(s).children("i").click(function() {
                    clearInterval(l);
                    var s = e(this).text() - 1;
                    o = s,
                    s >= a || (e("li", i).eq(s).fadeIn(800).siblings().fadeOut(500), e(this).addClass("on").siblings().removeClass("on"), l = setInterval(n, t.timer))
                }),
                t.auto && (n = function() {
                    o = o >= a - 1 ? 0 : ++o,
                    e("i", i).eq(o).trigger("click")
                },
                l = setInterval(n, t.timer), e(i).hover(function() {
                    clearInterval(l)
                },
                function() {
                    l = setInterval(n, t.timer)
                }))
            }
        }
    } (jQuery)
}),
define("etalage",
function(e, t, i) { !
    function(e) {
        e.fn.etalage = function(t) {
            var i = e.extend({
                align: "left",
                thumb_image_width: 300,
                thumb_image_height: 400,
                source_image_width: 900,
                source_image_height: 1200,
                zoom_area_width: 600,
                zoom_area_height: "justify",
                zoom_area_distance: 10,
                zoom_easing: !0,
                click_to_zoom: !1,
                zoom_element: "auto",
                show_descriptions: !0,
                description_location: "bottom",
                description_opacity: .7,
                small_thumbs: 3,
                smallthumb_inactive_opacity: .4,
                smallthumb_hide_single: !0,
                smallthumb_select_on_hover: !1,
                smallthumbs_position: "bottom",
                show_begin_end_smallthumb: !0,
                magnifier_opacity: .5,
                magnifier_invert: !0,
                show_icon: !0,
                icon_offset: 20,
                hide_cursor: !1,
                show_hint: !1,
                hint_offset: 15,
                speed: 600,
                autoplay: !0,
                autoplay_interval: 6e3,
                keyboard: !0,
                right_to_left: !1,
                click_callback: function() {
                    return ! 0
                },
                change_callback: function() {
                    return ! 0
                }
            },
            t);
            return e.each(this,
            function() {
                var t = e(this);
                if (t.is("ul") && t.children("li").length && t.find("img.etalage_source_image").length) {
                    var a, s, r, n, o, l, c, d, h, m, _ = t.attr("id"),
                    u = Math.floor(.7 * i.speed),
                    p = Math.round(i.speed / 100),
                    f = !1,
                    g = 0,
                    v = !1,
                    b = !0,
                    w = !1,
                    y = 0,
                    $ = 0,
                    x = 0,
                    I = 0,
                    T = 0,
                    k = "hori";
                    "undefined" != typeof _ && _ || (_ = "[no id]"),
                    "left" !== i.smallthumbs_position && "right" !== i.smallthumbs_position || (k = "vert"),
                    "object" == typeof e.browser && e.browser.msie && e.browser.version < 9 && (b = !1, e.browser.version < 7 && (v = !0)),
                    t.addClass("etalage").show();
                    var C = t.children("li").addClass("etalage_thumb");
                    C.first().show().addClass("etalage_thumb_active");
                    var M = C.length,
                    N = i.autoplay;
                    2 > M && (N = !1),
                    "right" === i.align && t.addClass("etalage_right"),
                    e.each(C,
                    function(t) {
                        t += 1;
                        var i = e(this),
                        a = i.find(".etalage_thumb_image").removeAttr("alt").show(),
                        s = i.find(".etalage_source_image"),
                        r = i.find("a");
                        i.data("id", t).addClass("thumb_" + t),
                        !a.length && s.length ? i.prepend('<img class="etalage_thumb_image" src="' + s.attr("src") + '" />') : a.length || s.length || i.remove(),
                        r.length && i.find(".etalage_thumb_image").data("anchor", r.attr("href"))
                    });
                    var j = C.find(".etalage_thumb_image").css({
                        width: i.thumb_image_width,
                        height: i.thumb_image_height
                    }).show();
                    e.each(j,
                    function() {
                        e(this).data("src", this.src)
                    });
                    var E = e('<li class="etalage_magnifier"><div><img /></div></li>').appendTo(t),
                    A = E.children("div"),
                    S = A.children("img"),
                    D = e('<li class="etalage_icon">&nbsp;</li>').appendTo(t);
                    i.show_icon && D.show();
                    var z;
                    i.show_hint && (z = e('<li class="etalage_hint">&nbsp;</li>').appendTo(t).show());
                    var L, O = i.zoom_element;
                    "auto" !== O && O && e(O).length ? L = e(O).addClass("etalage_zoom_area").html('<div><img class="etalage_zoom_img" /></div>') : (O = "auto", L = e('<li class="etalage_zoom_area"><div><img class="etalage_zoom_img" /></div></li>').appendTo(t));
                    var J, P = L.children("div");
                    b && (J = e('<img class="etalage_zoom_preview" />').css({
                        width: i.source_image_width,
                        height: i.source_image_height,
                        opacity: .3
                    }).prependTo(P).show());
                    var R, q = P.children(".etalage_zoom_img").css({
                        width: i.source_image_width,
                        height: i.source_image_height
                    });
                    i.show_descriptions && (R = e('<div class="etalage_description' + (i.right_to_left ? " rtl": "") + '"></div>').prependTo(L));
                    var F, H, W, V, Q, U = i.small_thumbs; (M > 1 || !i.smallthumb_hide_single) && (F = e('<li class="etalage_small_thumbs"><ul></ul></li>').appendTo(t), H = F.children("ul"), e.each(j,
                    function() {
                        var t = e(this);
                        r = t.data("src"),
                        n = t.parents(".etalage_thumb").data("id"),
                        e('<li><img class="etalage_small_thumb" src="' + r + '" /></li>').data("thumb_id", n).appendTo(H)
                    }), W = H.children("li").css({
                        opacity: i.smallthumb_inactive_opacity
                    }), 3 > U && (U = 3), M > U ? (i.show_begin_end_smallthumb ? (r = j.eq(M - 1).data("src"), n = C.eq(M - 1).data("id"), e('<li class="etalage_smallthumb_first etalage_smallthumb_navtoend"><img class="etalage_small_thumb" src="' + r + '" /></li>').data("src", r).data("thumb_id", n).css({
                        opacity: i.smallthumb_inactive_opacity
                    }).prependTo(H), r = j.eq(0).data("src"), n = C.eq(0).data("id"), e('<li class="etalage_smallthumb_navtostart"><img class="etalage_small_thumb" src="' + r + '" /></li>').data("src", r).data("thumb_id", n).css({
                        opacity: i.smallthumb_inactive_opacity
                    }).appendTo(H), W = H.children("li"), W.eq(1).addClass("etalage_smallthumb_active").css({
                        opacity: 1
                    })) : W.eq(0).addClass("etalage_smallthumb_first etalage_smallthumb_active").css({
                        opacity: 1
                    }), W.eq(U - 1).addClass("etalage_smallthumb_last")) : W.eq(0).addClass("etalage_smallthumb_active").css({
                        opacity: 1
                    }), e.each(W,
                    function(t) {
                        e(this).data("id", t + 1)
                    }), V = W.children("img"), Q = W.length, "vert" === k && W.addClass("vertical")),
                    o = i.magnifier_invert ? 1 : i.magnifier_opacity;
                    var B = parseInt(C.css("borderLeftWidth"), 10) + parseInt(C.css("borderRightWidth"), 10) + parseInt(j.css("borderLeftWidth"), 10) + parseInt(j.css("borderRightWidth"), 10),
                    K = parseInt(C.css("marginLeft"), 10) + parseInt(C.css("marginRight"), 10),
                    G = parseInt(C.css("paddingLeft"), 10) + parseInt(C.css("paddingRight"), 10) + parseInt(j.css("marginLeft"), 10) + parseInt(j.css("marginRight"), 10) + parseInt(j.css("paddingLeft"), 10) + parseInt(j.css("paddingRight"), 10),
                    Y = i.thumb_image_width + B + K + G,
                    X = i.thumb_image_height + B + K + G,
                    Z = 0,
                    ee = 0,
                    te = 0,
                    ie = 0,
                    ae = 0,
                    se = 0,
                    re = 0; (M > 1 || !i.smallthumb_hide_single) && (Z = parseInt(W.css("borderLeftWidth"), 10) + parseInt(W.css("borderRightWidth"), 10) + parseInt(V.css("borderLeftWidth"), 10) + parseInt(V.css("borderRightWidth"), 10), ee = parseInt(W.css("marginTop"), 10), te = parseInt(W.css("paddingLeft"), 10) + parseInt(W.css("paddingRight"), 10) + parseInt(V.css("marginLeft"), 10) + parseInt(V.css("marginRight"), 10) + parseInt(V.css("paddingLeft"), 10) + parseInt(V.css("paddingRight"), 10), "vert" === k ? (ae = Math.round((X - (U - 1) * ee) / U) - (Z + te), ie = Math.round(i.thumb_image_width * ae / i.thumb_image_height), se = ie + Z + te, re = ae + Z + te) : (ie = Math.round((Y - (U - 1) * ee) / U) - (Z + te), ae = Math.round(i.thumb_image_height * ie / i.thumb_image_width), se = ie + Z + te, re = ae + Z + te));
                    var ne, oe, le = parseInt(L.css("borderTopWidth"), 10),
                    ce = parseInt(i.zoom_area_distance, 10),
                    de = parseInt(L.css("paddingTop"), 10);
                    ne = i.zoom_area_width - 2 * le - 2 * de > i.source_image_width ? i.source_image_width: i.zoom_area_width - 2 * le - 2 * de,
                    oe = "justify" === i.zoom_area_height ? X + ee + re - 2 * le - 2 * de: i.zoom_area_height - 2 * le - 2 * de,
                    oe > i.source_image_height && (oe = i.source_image_height);
                    var he, me, _e, ue;
                    i.show_descriptions && (he = parseInt(R.css("borderLeftWidth"), 10) + parseInt(R.css("borderRightWidth"), 10), me = parseInt(R.css("marginLeft"), 10) + parseInt(R.css("marginRight"), 10), _e = parseInt(R.css("paddingLeft"), 10) + parseInt(R.css("paddingRight"), 10), ue = ne - he - me - _e);
                    var pe;
                    v && (pe = e('<iframe marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="javascript:\'<html></html>\'"></iframe>').css({
                        position: "absolute",
                        zIndex: 1
                    }).prependTo(L));
                    var fe = parseInt(E.css("borderTopWidth"), 10),
                    ge = parseInt(C.css("borderTopWidth"), 10) + parseInt(C.css("marginTop"), 10) + parseInt(C.css("paddingTop"), 10) + parseInt(j.css("borderTopWidth"), 10) + parseInt(j.css("marginTop"), 10) - fe,
                    ve = j.offset().left - t.offset().left - fe;
                    "left" === i.smallthumbs_position ? ve = ve + se + ee: "top" === i.smallthumbs_position && (ge = ge + re + ee);
                    var be, we, ye = Math.round(ne * (i.thumb_image_width / i.source_image_width)),
                    $e = Math.round(oe * (i.thumb_image_height / i.source_image_height)),
                    xe = ge + i.thumb_image_height - $e,
                    Ie = ve + i.thumb_image_width - ye,
                    Te = Math.round(ye / 2),
                    ke = Math.round($e / 2);
                    if (i.show_hint && (be = parseInt(i.hint_offset, 10) + parseInt(z.css("marginTop"), 10), we = parseInt(i.hint_offset, 10) + parseInt(z.css("marginRight"), 10), "right" === i.smallthumbs_position && (we = we - se - ee)), "vert" === k ? (d = Y + ee + se, t.css({
                        width: d,
                        height: X
                    })) : (d = Y, t.css({
                        width: d,
                        height: X + ee + re
                    })), i.show_icon && (m = {
                        top: X - D.outerHeight(!0) - parseInt(i.icon_offset, 10),
                        left: parseInt(i.icon_offset, 10)
                    },
                    "left" === i.smallthumbs_position ? m.left = se + ee + parseInt(i.icon_offset, 10) : "top" === i.smallthumbs_position && (m.top += re + ee), D.css(m)), i.show_hint && z.css({
                        margin: 0,
                        top: -be,
                        right: -we
                    }), S.css({
                        margin: 0,
                        padding: 0,
                        width: i.thumb_image_width,
                        height: i.thumb_image_height
                    }), A.css({
                        margin: 0,
                        padding: 0,
                        width: ye,
                        height: $e
                    }), m = {
                        margin: 0,
                        padding: 0,
                        left: (Ie - ve) / 2,
                        top: (xe - ge) / 2
                    },
                    "left" === i.smallthumbs_position ? m.left = "+=" + se + ee: "top" === i.smallthumbs_position && (m.top = "+=" + re + ee), E.css(m).hide(), P.css({
                        width: ne,
                        height: oe
                    }), m = {
                        margin: 0,
                        opacity: 0
                    },
                    "right" === i.align && "auto" === O ? m.left = -(ne + 2 * le + 2 * de + ce) : "auto" === O && (m.left = d + ce), L.css(m).hide(), i.show_descriptions && (m = {
                        width: ue,
                        bottom: de,
                        left: de,
                        opacity: i.description_opacity
                    },
                    "top" === i.description_location && (m.top = de, m.bottom = "auto"), R.css(m).hide()), M > 1 || !i.smallthumb_hide_single) if ("vert" === k ? (m = {
                        top: 0,
                        height: X
                    },
                    "left" === i.smallthumbs_position ? C.css({
                        left: se + ee
                    }) : m.marginLeft = Y + ee, F.css(m), H.css({
                        height: re * Q + Q * ee + 100
                    }), V.css({
                        width: ie,
                        height: ae
                    }).attr("height", ae), W.css({
                        margin: 0,
                        marginBottom: ee
                    })) : (m = {
                        width: Y
                    },
                    "top" === i.smallthumbs_position ? C.css({
                        top: re + ee
                    }) : m.top = X + ee, F.css(m), H.css({
                        width: se * Q + Q * ee + 100
                    }), V.css({
                        width: ie,
                        height: ae
                    }).attr("width", ie), W.css({
                        margin: 0,
                        marginRight: ee
                    })), h = "vert" === k ? re * U + (U - 1) * ee - X: se * U + (U - 1) * ee - Y, h > 0) for (a = 1; Q - 1 >= a; a += U - 1) for (s = 1; h >= s; s += 1)"vert" === k ? W.eq(a + s - 1).css({
                        marginBottom: ee - 1
                    }) : W.eq(a + s - 1).css({
                        marginRight: ee - 1
                    });
                    else if (0 > h) for (a = 1; Q - 1 >= a; a += U - 1) for (s = 1; - h >= s; s += 1)"vert" === k ? (W.eq(a + s - 1).css({
                        marginBottom: ee + 1
                    }), H.css({
                        height: parseInt(H.css("height"), 10) + 1
                    })) : (W.eq(a + s - 1).css({
                        marginRight: ee + 1
                    }), H.css({
                        width: parseInt(H.css("width"), 10) + 1
                    }));
                    i.show_icon && !i.magnifier_invert && E.css({
                        background: E.css("background-color") + " " + D.css("background-image") + " center no-repeat"
                    }),
                    i.hide_cursor && E.add(D).css({
                        cursor: "none"
                    }),
                    v && pe.css({
                        width: P.css("width"),
                        height: P.css("height")
                    });
                    var Ce = C.first().find(".etalage_thumb_image"),
                    Me = C.first().find(".etalage_source_image");
                    i.magnifier_invert && S.attr("src", Ce.data("src")).show(),
                    b && J.attr("src", Ce.data("src")),
                    q.attr("src", Me.attr("src")),
                    i.show_descriptions && (c = Me.attr("title"), c && R.html(c).show());
                    var Ne = function() {
                        l && (clearInterval(l), l = !1)
                    },
                    je = function() {
                        l && Ne(),
                        l = setInterval(function() {
                            Oe()
                        },
                        i.autoplay_interval)
                    },
                    Ee = function() {
                        E.stop().fadeTo(u, o),
                        D.stop().animate({
                            opacity: 0
                        },
                        u),
                        L.stop().show().animate({
                            opacity: 1
                        },
                        u),
                        i.magnifier_invert && Ce.stop().animate({
                            opacity: i.magnifier_opacity
                        },
                        u),
                        N && Ne()
                    },
                    Ae = function() {
                        E.stop().fadeOut(i.speed),
                        D.stop().animate({
                            opacity: 1
                        },
                        i.speed),
                        L.stop().animate({
                            opacity: 0
                        },
                        i.speed,
                        function() {
                            e(this).hide()
                        }),
                        i.magnifier_invert && Ce.stop().animate({
                            opacity: 1
                        },
                        i.speed,
                        function() {
                            i.click_to_zoom && (w = !1)
                        }),
                        clearTimeout(y),
                        N && je()
                    },
                    Se = function(a, s) {
                        var r, n, o = t.find(".etalage_smallthumb_active").removeClass("etalage_smallthumb_active");
                        a.addClass("etalage_smallthumb_active"),
                        E.stop().hide(),
                        L.stop().hide(),
                        s || (f = !0, o.stop(!0, !0).animate({
                            opacity: i.smallthumb_inactive_opacity
                        },
                        u), a.stop(!0, !0).animate({
                            opacity: 1
                        },
                        u,
                        function() {
                            f = !1
                        })),
                        t.find(".etalage_thumb_active").removeClass("etalage_thumb_active").stop().animate({
                            opacity: 0
                        },
                        i.speed,
                        function() {
                            e(this).hide()
                        }),
                        r = C.filter(".thumb_" + a.data("thumb_id")).addClass("etalage_thumb_active").show().stop().css({
                            opacity: 0
                        }).animate({
                            opacity: 1
                        },
                        i.speed),
                        Ce = r.find(".etalage_thumb_image"),
                        Me = r.find(".etalage_source_image"),
                        i.magnifier_invert && S.attr("src", Ce.data("src")),
                        b && J.attr("src", Ce.data("src")),
                        q.attr("src", Me.attr("src")),
                        i.show_descriptions && (c = Me.attr("title"), c ? R.html(c).show() : R.hide()),
                        N && (Ne(), je()),
                        n = a.data("id"),
                        M >= U && n--,
                        Re(n)
                    },
                    De = function(t, a, s, r) {
                        e.each(W,
                        function() {
                            var a = e(this),
                            s = {
                                opacity: i.smallthumb_inactive_opacity
                            };
                            a.data("id") === r.data("id") && (s.opacity = 1),
                            "vert" === k ? s.top = "-=" + t: s.left = "-=" + t,
                            a.animate(s, u, "swing",
                            function() {
                                f && (r.addClass("etalage_smallthumb_active"), f = !1)
                            })
                        }),
                        Se(r, !0)
                    },
                    ze = function() {
                        var e = I - $,
                        t = T - x,
                        i = -e / p,
                        a = -t / p;
                        $ -= i,
                        x -= a,
                        1 > e && e > -1 && ($ = I),
                        1 > t && t > -1 && (x = T),
                        q.css({
                            left: $,
                            top: x
                        }),
                        b && J.css({
                            left: $,
                            top: x
                        }),
                        (e > 1 || t > 1 || 1 > e || 1 > t) && (y = setTimeout(function() {
                            ze()
                        },
                        25))
                    },
                    Le = function() {
                        var e;
                        if (i.magnifier_invert && t.find(".etalage_thumb_active").mouseleave(), i.right_to_left) {
                            if (e = t.find(".etalage_smallthumb_active").next(), !e.length) return M > U ? Ve() : W.first().trigger("click"),
                            !0
                        } else if (e = t.find(".etalage_smallthumb_active").prev(), !e.length) return M > U ? Qe() : W.last().trigger("click"),
                        !0;
                        e.trigger("click")
                    },
                    Oe = function() {
                        var e;
                        if (i.magnifier_invert && t.find(".etalage_thumb_active").mouseleave(), i.right_to_left) {
                            if (e = t.find(".etalage_smallthumb_active").prev(), !e.length) return M > U ? Qe() : W.last().trigger("click"),
                            !0
                        } else if (e = t.find(".etalage_smallthumb_active").next(), !e.length) return M > U ? Ve() : W.first().trigger("click"),
                        !0;
                        e.trigger("click")
                    },
                    Je = function(e) { (U >= M || !i.show_begin_end_smallthumb) && (e -= 1);
                        var a = W.eq(e);
                        if (a.length && !f) {
                            var s, r = t.find(".etalage_smallthumb_active"),
                            n = r.data("id") - 1;
                            if (n > e) {
                                g = n - e;
                                var o = t.find(".etalage_smallthumb_first"),
                                l = o.data("id");
                                l > e ? (s = n - l, g -= s, o.trigger("click")) : Se(a, !1)
                            } else if (e > n) {
                                g = e - n;
                                var c = t.find(".etalage_smallthumb_last"),
                                d = c.data("id") - 1;
                                e >= d ? (s = d - n - 1, g -= s, c.trigger("click")) : Se(a, !1)
                            }
                        }
                    };
                    window[_ + "_previous"] = function() {
                        Le()
                    },
                    window[_ + "_next"] = function() {
                        Oe()
                    },
                    window[_ + "_show"] = function(e) {
                        Je(e)
                    };
                    var Pe = function(e) {
                        if (!i.click_callback(e, _)) return ! 1;
                        var t = t || null;
                        return "function" == typeof t ? (t(e, _), !1) : !0
                    },
                    Re = function(e) {
                        if (i.change_callback(e, _)) {
                            var t = t || null;
                            "function" == typeof t && t(e, _)
                        }
                    };
                    C.add(E).add(D).mouseenter(function() {
                        i.show_hint && z.hide(),
                        i.click_to_zoom && !w || Ee()
                    }).mouseleave(function() {
                        Ae()
                    });
                    var qe = -(i.source_image_width - ne),
                    Fe = -(i.source_image_height - oe);
                    C.add(E).add(D).mousemove(function(e) {
                        var t = Math.round(e.pageX - Ce.offset().left + ve),
                        a = Math.round(e.pageY - Ce.offset().top + ge),
                        s = t - Te,
                        r = a - ke;
                        if (ve > s && (s = ve), s > Ie && (s = Ie), ge > r && (r = ge), r > xe && (r = xe), E.css({
                            left: s,
                            top: r
                        }), i.magnifier_invert) {
                            var n = s - ve,
                            o = r - ge;
                            S.css({
                                left: -n,
                                top: -o
                            })
                        }
                        I = -((s - ve) * (1 / (i.thumb_image_width / i.source_image_width))),
                        T = -((r - ge) * (1 / (i.thumb_image_height / i.source_image_height))),
                        qe > I && (I = qe),
                        Fe > T && (T = Fe),
                        i.zoom_easing ? (clearTimeout(y), ze()) : (b && J.css({
                            left: I,
                            top: T
                        }), q.css({
                            left: I,
                            top: T
                        }))
                    });
                    var He = function(e) {
                        g = g ? g - 1 : 0,
                        f = !0;
                        var i, a, s, r, n = t.find(".etalage_smallthumb_first").removeClass("etalage_smallthumb_first"),
                        o = t.find(".etalage_smallthumb_last").removeClass("etalage_smallthumb_last");
                        "left" === e ? (i = n.prev().addClass("etalage_smallthumb_first"), a = o.prev().addClass("etalage_smallthumb_last"), s = n) : (i = n.next().addClass("etalage_smallthumb_first"), a = o.next().addClass("etalage_smallthumb_last"), s = o),
                        g ? "left" === e ? i.trigger("click") : a.trigger("click") : (r = "vert" === k ? i.position().top: i.position().left, De(r, i, a, s))
                    },
                    We = function(e) {
                        f = !0;
                        var i, a, s;
                        t.find(".etalage_smallthumb_first").removeClass("etalage_smallthumb_first"),
                        t.find(".etalage_smallthumb_last").removeClass("etalage_smallthumb_last");
                        "end" === e ? (i = W.eq(Q - U).addClass("etalage_smallthumb_first"), a = W.eq(Q - 1).addClass("etalage_smallthumb_last"), s = a, a.hasClass("etalage_smallthumb_navtostart") && (s = a.prev())) : (i = W.eq(0).addClass("etalage_smallthumb_first"), a = W.eq(U - 1).addClass("etalage_smallthumb_last"), s = i, i.hasClass("etalage_smallthumb_navtoend") && (s = i.next()));
                        var r = "vert" === k ? i.position().top: i.position().left;
                        De(r, i, a, s)
                    },
                    Ve = function() {
                        We("start")
                    },
                    Qe = function() {
                        We("end")
                    }; (M > 1 || !i.smallthumb_hide_single) && (W.click(function() {
                        var t = e(this);
                        if (!t.hasClass("etalage_smallthumb_active") && (!f || g)) if (t.hasClass("etalage_smallthumb_first") && t.prev().length) He("left");
                        else if (t.hasClass("etalage_smallthumb_navtoend")) Qe();
                        else if (t.hasClass("etalage_smallthumb_last") && t.next().length) He("right");
                        else if (t.hasClass("etalage_smallthumb_navtostart")) Ve();
                        else {
                            if (g && !e(this).next().length) return Qe(),
                            !0;
                            if (g && !e(this).prev().length) return Ve(),
                            !0;
                            Se(t, !1)
                        }
                    }), i.smallthumb_select_on_hover && W.mouseenter(function() {
                        e(this).trigger("click")
                    })),
                    i.click_to_zoom ? C.click(function() {
                        w = !0,
                        Ee()
                    }) : E.click(function() {
                        var e = Ce.data("anchor");
                        e && Pe(e) && (window.location = e)
                    }),
                    M > 1 && i.keyboard && e(document).keydown(function(e) {
                        39 !== e.keyCode && "39" !== e.keyCode || (i.right_to_left ? Le() : Oe()),
                        37 !== e.keyCode && "37" !== e.keyCode || (i.right_to_left ? Oe() : Le())
                    }),
                    e(window).bind("load",
                    function() {
                        C.css({
                            "background-image": "none"
                        }),
                        L.css({
                            "background-image": "none"
                        }),
                        b && (b = !1, J.remove())
                    }),
                    N && je()
                }
            }),
            this
        }
    } (jQuery)
}),
define("pop", ["etalage", "slider", "timer", "colorbox", "md_streamfb", "md5", "ua", "size", "timer_gulp-seajs-cmobo_11", "deal_wish"],
function(e, t, i) {
    "use strict";
    function a(e) {
        var t = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
        i = window.location.search.substr(1).match(t);
        return null != i ? decodeURI(i[2]) : ""
    }
    function s(e) {
      /*  var t = window.location.href,
        i = "http://click.srv.jumei.com:8080/jm.gif",
        a = r(),
        s = n(),
        o = s.uid,
        l = s.vid,
        c = t + (t.indexOf("?") < 0 ? "?": "&") + e,
        d = i + "?url=" + encodeURIComponent(c) + "&mid=" + encodeURIComponent(a) + "&uid=" + encodeURIComponent(o) + "&vid=" + encodeURIComponent(l) + "&et=page",
        h = new Image(1, 1);
        h.onload = h.onerror = h.onabort = function() {
            h.onload = h.onerror = h.onabort = null,
            h = null
        },
        h.src = d */
    }
    function r() {
        var e = m.util.cookie.get("cookie_uid");
        return e || (e = String((new Date).getTime()) + String(Math.random()).slice( - 7), m.util.cookie.set("cookie_uid", e, {
            exp: 87600
        })),
        e
    }
    function n() {
        var e = m.util.cookie.get("uid"),
        t = m.util.cookie.get("m_vid");
        return e ? (t = e, m.util.cookie.set("m_vid", e, {
            exp: "forever"
        })) : t ? (e = -1, t = t) : e = t = 0,
        {
            uid: e,
            vid: t
        }
    }
    e("etalage"),
    e("slider"),
    e("timer"),
    e("colorbox"),
    e("md_streamfb");
    var o = e("md5"),
    l = e("ua"),
    c = e("size"),
    d = e("timer_gulp-seajs-cmobo_11"),
    h = e("deal_wish"),
    m = window.Jumei || {},
    _ = window._gaq || [],
    u = m.util.cookie.get("abt114"),
    p = m.util.cookie.get("abt113"),
    f = m.util.cookie.get("abt115"),
    g = !0,
    v = {
        init: function() {
            v.choiceSize(),
            v.etalage(),
            "normal" !== u && v.userDsrAjax(),
            "normal" === p && $("li.deal_eval").hide(),
            JM.DEGRADATION ? $(".deal_reco, .recent_view, .chima").remove() : v.popHistory(),
            $(".sd_reco").length && (JM.DEGRADATION || v.soldOutReco()),
            $.ajax({
                url: "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/static/popDetail",
                data: {
                    hash_id: $("#hash_id").val()
                },
                dataType: "jsonp",
                success: function(e) {
                    var t = "",
                    i = $(".price_now"),
                    a = $(".pop_discount"),
                    s = $(".model_wrap"),
                    r = $(".db_price"),
                    n = $(".sell_status"),
                    o = $("#pop_detail_timer");
                    if ("pre" != e.sale_forms) {
                        var l = "",
                        c = "",
                        d = "",
                        h = "",
                        m = "";
                        e.start_time > e.systemTime ? (l = '<em class="yen">¥ </em>' + ("1" === e.is_published_price ? e.discounted_price: "??"), c = "<em>¥</em>" + ("1" === e.is_published_price ? e.discounted_price: "??"), $(".buy_btn_wrap").addClass("not_begin").html('<a href="javascript:" id="go_to_cart" class="pop_wish_btn" ><i></i>加入心愿单</a>'), o.attr("diff", e.start_time - e.systemTime), $(".buy_btn_wrap").show(), $(".pop_change_size").css("padding-bottom", "20px")) : (l = '<em class="yen" name="' + e.discounted_price + '">¥ </em>' + e.discounted_price, c = "<em>¥</em>" + e.discounted_price, o.attr("diff", e.end_time - e.systemTime), e.start_time <= e.systemTime && e.end_time > e.systemTime && (0 === e.status || 1 === e.status) && ("mobile" === e.platform ? $(".buy_btn_wrap").html('<a href="http://hd.jumei.com/act/9-478-1477-download_app.html" target="_blank"><img src="http://f0.jmstatic.com/btstatic/pc_static/mobilebuy.jpg"/></a>') : $(".buy_btn_wrap").html('<a href="javascript:;"  class="pop_buy_btn addcart_btn" id="add_to_cart"><i></i>加入购物车</a>'), $(".buy_btn_wrap").show())),
                        e.discount < 9 && !JM.$HIDEMARKETPRICE && (c += "<del>¥" + ("0" === e.is_published_price && e.start_time > e.systemTime ? "??": e.original_price) + "</del>"),
                        i.html(l),
                        r.html(c),
                        e.discount < 9 && (JM.$HIDEMARKETPRICE || (d += "<span><del>¥" + ("0" === e.is_published_price && e.start_time > e.systemTime ? "??": e.original_price) + "</del></span>"), JM.HIDEDISCOUNT || (d += '<span class="discount_num">' + ("0" === e.is_published_price && e.start_time > e.systemTime ? "??": e.discount) + "折</span>")),
                        d += "<span></span>",
                        a.append(d),
                        e.start_time - e.systemTime < 0 ? e.end_time < e.systemTime || 2 === e.status ? (m = "sold_out", h = '<a href="javascript:">已抢光</a>') : (m = "on_sell", h = '<a href="javascript:"><i></i>加入购物车</a>', $(".buy_btn_wrap").show()) : (m = "add_wish", h = '<a href="javascript:"><i></i>加入心愿单</a>', $(".pop_sold").show()),
                        (e.end_time < e.systemTime || 2 === e.status && e.start_time < e.systemTime) && ($(".phone_subscribe_wrap,.sd_reco").show(), o.html("<i></i>结束于" + e.end_time_str)),
                        n.addClass(m).html(h),
                        $(".pop_rebates ul").html(e.promo_sale_text_str)
                    } else "pre" === e.sale_forms && ($("#presale-timer").attr("state", e.pre_sale_status).text(e.pre_sale_status_str), 1 === e.pre_sale_status ? ($(".pre-prices .price").text("??"), $(".eq_p1").show()) : ($(".pre-pri .price").text(e.discounted_price), $(".pre-order .price").text(e.deposit)), 2 === e.pre_sale_status && ($(".presale-sta1").addClass("current"), $(".presale-sta1 .status-timer").attr("diff", e.end_time - e.systemTime), $(".eq_p2").show()), 3 === e.pre_sale_status && ($(".presale-sta2").addClass("current"), $(".eq_p3").show()), 4 === e.pre_sale_status && ($(".presale-sta3").addClass("current"), $(".presale-sta3 .status-timer").attr("diff", e.payment_end_time - e.systemTime), $(".eq_p4").show()), 5 === e.pre_sale_status && $(".eq_p5").show(), e.pre_sale_status >= 3 && $(".gt_p3").show(), e.pre_sale_status < 4 && $(".lt_p4").show());
                    e.start_time <= e.systemTime && e.end_time > e.systemTime && (0 === e.status || 1 === e.status) && $(".num_wrap").show();
                    var _ = "";
                    "" === t && 1 === e.deal_attributes.length && (t = e.deal_attributes[0].sku_no);
                    for (var u in e.deal_attributes) _ += "pre" != e.sale_forms ? '<li sku_no="' + e.deal_attributes[u].sku_no + '" class="' + (e.deal_attributes[u].stocks < 1 && e.start_time < e.systemTime ? " pop_disable ": "") + (1 == e.deal_attributes.length ? " size_selected": "") + '"><a href="javascript:"><span>' + e.deal_attributes[u].attribute_name + "</span></a><i>已选中</i></li>": '<li sku_no="' + e.deal_attributes[u].sku_no + '" class="' + (1 == e.deal_attributes.length ? "size_selected": "") + '"><a href="javascript:"><span>' + e.deal_attributes[u].attribute_name + "</span></a><i>已选中</i></li>";
                    $("#sku_no").val(t),
                    $(".J_size_wrap").prepend(_),
                    e.deal_attributes.length > 0 && s.show(),
                    v.selectSKU(),
                    v.cartProductAction(),
                    v.timeCounter()
                }
            }),
            v.detailTabs(),
            v.lazyloadDetail(),
            v.scrollTo(),
            JM.DEGRADATION || "cd" != JM.SITE && v.hotRecommend(),
            $("li.chima").bind("click", c),
            v.other(),
            $("#stream_id").length && window.StreamUtil.init($("#stream_id"))
        },
        userDsrAjax: function(e) {
            var t = this;
            $.ajax({
                url: "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/static/getDsrInfo",
                type: "GET",
                dataType: "jsonp",
                data: {
                    merchant_id: $("#merchant_id").val(),
                    merchant_type: $("#merchant_type").val()
                },
                success: function(e) {
                    t.dataDsrScore(e)
                },
                error: function(e) {
                    alert("~亲，网络不给力，过会试试~")
                }
            })
        },
        dataDsrScore: function(e) {
            var t = "";
            e.score && "" !== e.score && (t += '<div class="deal_dsr_frame"><a class="deal_dsr_brand">', t += "" !== e.logo_url ? '<img src="' + e.logo_url + '">': '<img src="http://images.jumei.com/201511_logo/merchant.png">', t += '<p class="deal_dsr_name">' + e.store_name + '</p></a><div class="deal_dsr_score"><ul class="deal_dsr_list"><li class="deal_dsr_text">商品质量', f && "normal" == f ? ("low" == e.score.prod_quality_score.compare_jumei ? t += '<em class="deal_dsr_num_green">' + Number(e.score.prod_quality_score.score_jumei).toFixed(1) + '</em><span class="deal_dsr_attr_green">低</span><em class="deal_dsr_rate_green">' + Number(100 * e.score.prod_quality_score.compare_result_jumei).toFixed(1) + "%</em></li>": "middle" == e.score.prod_quality_score.compare_jumei ? t += '<em class="deal_dsr_num">' + Number(e.score.prod_quality_score.score_jumei).toFixed(1) + '</em><span class="deal_dsr_attr">中</span><em class="deal_dsr_mid">持平</em></li>': "height" == e.score.prod_quality_score.compare_jumei && (t += '<em class="deal_dsr_num">' + Number(e.score.prod_quality_score.score_jumei).toFixed(1) + '</em><span class="deal_dsr_attr">高</span><em class="deal_dsr_rate">' + Number(100 * e.score.prod_quality_score.compare_result_jumei).toFixed(1) + "%</em></li>"), t += '<li class="deal_dsr_text">物流速度', "low" == e.score.delivery_score.compare_jumei ? t += '<em class="deal_dsr_num_green">' + Number(e.score.delivery_score.score_jumei).toFixed(1) + '</em><span class="deal_dsr_attr_green">低</span><em class="deal_dsr_rate_green">' + Number(100 * e.score.delivery_score.compare_result_jumei).toFixed(1) + "%</em></li>": "middle" == e.score.delivery_score.compare_jumei ? t += '<em class="deal_dsr_num">' + Number(e.score.delivery_score.score_jumei).toFixed(1) + '</em><span class="deal_dsr_attr">中</span><em class="deal_dsr_mid">持平</em></li>': "height" == e.score.delivery_score.compare_jumei && (t += '<em class="deal_dsr_num">' + Number(e.score.delivery_score.score_jumei).toFixed(1) + '</em><span class="deal_dsr_attr">高</span><em class="deal_dsr_rate">' + Number(100 * e.score.delivery_score.compare_result_jumei).toFixed(1) + "%</em></li>"), t += '<li class="deal_dsr_text">服务质量', "low" == e.score.service_score.compare_jumei ? t += '<em class="deal_dsr_num_green">' + Number(e.score.service_score.score_jumei).toFixed(1) + '</em><span class="deal_dsr_attr_green">低</span><em class="deal_dsr_rate_green">' + Number(100 * e.score.service_score.compare_result_jumei).toFixed(1) + "%</em></li>": "middle" == e.score.service_score.compare_jumei ? t += '<em class="deal_dsr_num">' + Number(e.score.service_score.score_jumei).toFixed(1) + '</em><span class="deal_dsr_attr">中</span><em class="deal_dsr_mid">持平</em></li>': "height" == e.score.service_score.compare_jumei && (t += '<em class="deal_dsr_num">' + Number(e.score.service_score.score_jumei).toFixed(1) + '</em><span class="deal_dsr_attr">高</span><em class="deal_dsr_rate">' + Number(100 * e.score.service_score.compare_result_jumei).toFixed(1) + "%</em></li>")) : ("low" == e.score.prod_quality_score.compare ? t += '<em class="deal_dsr_num_green">' + Number(e.score.prod_quality_score.score).toFixed(1) + '</em><span class="deal_dsr_attr_green">低</span><em class="deal_dsr_rate_green">' + Number(100 * e.score.prod_quality_score.compare_result).toFixed(1) + "%</em></li>": "middle" == e.score.prod_quality_score.compare ? t += '<em class="deal_dsr_num">' + Number(e.score.prod_quality_score.score).toFixed(1) + '</em><span class="deal_dsr_attr">中</span><em class="deal_dsr_mid">持平</em></li>': "height" == e.score.prod_quality_score.compare && (t += '<em class="deal_dsr_num">' + Number(e.score.prod_quality_score.score).toFixed(1) + '</em><span class="deal_dsr_attr">高</span><em class="deal_dsr_rate">' + Number(100 * e.score.prod_quality_score.compare_result).toFixed(1) + "%</em></li>"), t += '<li class="deal_dsr_text">物流速度', "low" == e.score.delivery_score.compare ? t += '<em class="deal_dsr_num_green">' + Number(e.score.delivery_score.score).toFixed(1) + '</em><span class="deal_dsr_attr_green">低</span><em class="deal_dsr_rate_green">' + Number(100 * e.score.delivery_score.compare_result).toFixed(1) + "%</em></li>": "middle" == e.score.delivery_score.compare ? t += '<em class="deal_dsr_num">' + Number(e.score.delivery_score.score).toFixed(1) + '</em><span class="deal_dsr_attr">中</span><em class="deal_dsr_mid">持平</em></li>': "height" == e.score.delivery_score.compare && (t += '<em class="deal_dsr_num">' + Number(e.score.delivery_score.score).toFixed(1) + '</em><span class="deal_dsr_attr">高</span><em class="deal_dsr_rate">' + Number(100 * e.score.delivery_score.compare_result).toFixed(1) + "%</em></li>"), t += '<li class="deal_dsr_text">服务质量', "low" == e.score.service_score.compare ? t += '<em class="deal_dsr_num_green">' + Number(e.score.service_score.score).toFixed(1) + '</em><span class="deal_dsr_attr_green">低</span><em class="deal_dsr_rate_green">' + Number(100 * e.score.service_score.compare_result).toFixed(1) + "%</em></li>": "middle" == e.score.service_score.compare ? t += '<em class="deal_dsr_num">' + Number(e.score.service_score.score).toFixed(1) + '</em><span class="deal_dsr_attr">中</span><em class="deal_dsr_mid">持平</em></li>': "height" == e.score.service_score.compare && (t += '<em class="deal_dsr_num">' + Number(e.score.service_score.score).toFixed(1) + '</em><span class="deal_dsr_attr">高</span><em class="deal_dsr_rate">' + Number(100 * e.score.service_score.compare_result).toFixed(1) + "%</em></li>")), t += "</ul></div></div>"),
            $(".deal_dsr_main").append(t)
        },
        choiceSize: function() {
            var e = location.hash.substring(1);
            e.length > 0 && $(".J_size_wrap li").each(function() {
                var t = $(this).attr("sku_no");
                return t == e ? ($(this).addClass("size_selected"), $("#sku_no").val(t), !1) : void 0
            })
        },
        etalage: function() {
            $("#etalage").etalage({
                thumb_image_width: 375,
                thumb_image_height: 500,
                source_image_width: 750,
                source_image_height: 1e3,
                show_hint: !0,
                autoplay: !1,
                icon_offset: 0,
                zoom_area_width: 375,
                zoom_area_height: 500,
                show_descriptions: !1,
                small_thumbs: 5,
                show_begin_end_smallthumb: !1
            })
        },
        popHistory: function() {
            $.getJSON("http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/ajax/set_history?callback=?&hid=" + $("#hash_id").val(), null,
            function() {})
        },
        soldOutReco: function() {
            var e = $(".sd_reco"),
            t = e.find(".no_data"),
            i = "",
            a = $("#search_product_id").val(),
            s = $("#search_brand_id").val(),
            r = $(".pop_price_wrap .price_now em").attr("name") ? $(".pop_price_wrap .price_now em").attr("name") : 0;
            99999 == $("#catid").val() ? 0 : r;
            $.ajax({
                url: "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/ajax/get_pop_sellout",
                data: {
                    pid: a,
                    bid: s,
                    cid: $("#catid").val(),
                    limit: 2
                },
                dataType: "jsonp",
                success: function(s) {
                    s && s.length ? (i += '<ul class="clearfix">', $.each(s,
                    function(e, t) {
                        i += '<li><a href="' + t.url + "?from=r_p_u_" + a + "_1-" + (e + 1) + '" title="' + t.short_name + '" target="_blank"><img src="' + t.image + '" width="190" height="190"><p class="reco_name">' + t.short_name + '</p></a><p class="reco_price">￥' + t.mall_price + "</p></li>"
                    }), i += "</ul>", t.remove(), e.append(i)) : t.css("background-image", "none").text("对不起，暂时没有数据！")
                },
                error: function() {
                    t.css("background-image", "none").text("网络错误！")
                }
            })
        },
        selectSKU: function() {
            var e = $(".J_size_wrap li").not(".pop_disable").not(".chima"),
            t = $(".model_wrap"),
            i = $("#go_to_cart"),
            r = $("#add_to_cart"),
            n = i.hasClass("pop_wish_btn") || $("#main").hasClass("wish_deal"),
            o = this;
            e.length > 0 && e.click(function() {
                return t.removeClass("alert_on"),
                e.removeClass("size_selected"),
                $(this).addClass("size_selected"),
                $("#sku_no").val($(this).attr("sku_no")),
                !1
            }),
            n || $(".not_begin #go_to_cart").click(function(e) {
                return e.preventDefault(),
                alert("不要太心急，特卖尚未开始喔~"),
                !1
            }),
            i.click(function(e) {
                if (e.preventDefault(), $(this).closest(".not_begin").length > 0 && !n) return ! 1;
                var i, s = $("#sku_no").val(),
                r = $("#hash_id").val(),
                o = ($(this), a("from") + "|home_deal_main_buy"),
                l = !0;
                if ($("#deal_brief .is_wish_to_buy").length > 0 && ($.ajax({
                    url: "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/ajax/is_user_wish_deal?hash_id=" + r + "&sku_no=" + s,
                    async: !1,
                    dataType: "jspnp",
                    success: function(e) {
                        l = 1 === e.status
                    }
                }), l === !1)) return alert("此产品仅限加入心愿单用户购买！"),
                !1;
                if (n ? (i = "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/wishdeal/add?item=" + s + "," + r + ",1&from=" + o, _.push(["_trackEvent", "detail_addtowish", r, "clicked"])) : (i = "http://cart." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/cart/new_items/" + s + "," + r + "," + $(".amout_input").val() + "?from=" + o, _.push(["_trackEvent", "deal_index_show_body_addtocart", r, "clicked"])), !s) return t.addClass("alert_on"),
                !1;
                _.push(["_trackEvent", "go_to_cart", JM.CONTROL + "_" + JM.ACTION, r]),
                n || ($("#stream_id").length && window.StreamUtil.init($("#stream_id"), {
                    fb_type: 1
                }), window.location.href = i);
                var c = $(this);
                c.data("click-time") ? c.data("click-time", c.data("click-time") + 1) : c.data("click-time", 1),
                c.data("timer") ? alert("您的操作过于频繁，请稍后再试!") : (c.data("timer", setTimeout(function() {
                    c.data("timer", null),
                    c.data("click-time", null)
                },
                5e3)), h.init({
                    sku_no: s,
                    hash_id: r
                })),
                window.event && (window.event.returnValue = !1)
            }),
            r.click(function(e) {
                var i = $("#sku_no").val(),
                a = $("#hash_id").val(),
                n = $("#etalage .etalage_thumb_image").attr("src"),
                l = "event=add_to_cart&abt113=" + p + "&abt114=" + u + "&abt115=" + f;
                if (i) if (_.push(["_trackEvent", "add_to_cart", JM.CONTROL + "_" + JM.ACTION, a]), $("#stream_id").length && window.StreamUtil.init($("#stream_id"), {
                    fb_type: 1
                }), "seckill" == $("#show_category").val()) {
                    var c = m.util.cookie.get("uid");
                    if (!c || "" === c) {
                        var d = window.location.href;
                        return void(window.location.href = "http://passport." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/account/login?redirect=" + encodeURIComponent(d))
                    }
                    $(".module-content .module-tip").html(""),
                    o.miaoDialog(),
                    $(".module-button span").on("click",
                    function() {
                        var e = $(".module-text input").val(),
                        t = "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/ajax/validationkillcode";
                        $.ajax({
                            url: t,
                            dataType: "jsonp",
                            type: "get",
                            data: {
                                hash_code: e
                            },
                            success: function(e) {
                                "success" === e.date ? ($(".module-dialog").fadeOut(300), $(".module-bg").fadeOut(500), $.ajax({
                                    url: "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/ajax/getseckilltoken",
                                    type: "get",
                                    dataType: "jsonp",
                                    data: {
                                        sku_no: i,
                                        hash_id: a
                                    },
                                    success: function(e) {
                                        var t = {
                                            elem: r,
                                            img: n,
                                            sku: i,
                                            hashid: a,
                                            num: $(".amout_input").val(),
                                            which_cart: "all",
                                            token: e.token
                                        };
                                        m && m.app && m.app.iBar && m.app.iBar.addCart(t)
                                    },
                                    error: function(e) {
                                        alert("token error!")
                                    }
                                })) : ($(".module-content .module-tip").html("验证码输入错误"), $(".module-text img").attr("src", "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/ajax/hash_code?from=seckill&time=" + (new Date).getTime()))
                            }
                        })
                    })
                } else {
                    var h = {
                        elem: r,
                        img: n,
                        sku: i,
                        hashid: a,
                        num: $(".amout_input").val(),
                        which_cart: "all"
                    };
                    m && m.app && m.app.iBar && m.app.iBar.addCart(h)
                } else t.addClass("alert_on");
                e.preventDefault(),
                s(l)
            });
            var l = window.opera ? "CSS1Compat" == document.compatMode ? $("html") : $("body") : $("html,body"),
            c = $("#etalage").offset().top;
            $(".add_wish").find("a").click(function() {
                l.animate({
                    scrollTop: c
                },
                10),
                $(".pop_wish_btn").trigger("click")
            }),
            $(".on_sell").find("a").click(function(e) {
                l.animate({
                    scrollTop: c
                },
                10),
                r.trigger("click"),
                e.preventDefault()
            })
        },
        cartProductAction: function() {
            var e, t = $(".amout_input"),
            i = $("#J_Amount");
            t.click(function() {
                $(this).select()
            }).blur(function() {
                v.cart_item_quantity_change($(this), this.value)
            });
            var a = i.find(".pop_amount_wrap").not(".num_disable");
            a.length > 0 && a.find("a").click(function() {
                var i = $(this);
                i.hasClass("decrease_num") ? (e = parseInt(t.val()) - 1, e > 0 && v.cart_item_quantity_change(t, e)) : i.hasClass("increase_num") && (e = parseInt(t.val()) + 1, e > 0 && 21 > e && v.cart_item_quantity_change(t, e))
            })
        },
        cart_item_quantity_change: function(e, t) {
            var i = (parseInt(e.attr("user_purchase_limit")), t);
            isNaN(i) && (i = 0),
            1 >= i ? (i = 1, e.val(i).prev(".decrease_num").addClass("turn_gray"), e.next(".increase_num").removeClass("turn_gray")) : i > 1 && 20 > i ? (e.val(i).prev(".decrease_num").removeClass("turn_gray"), e.next(".increase_num").removeClass("turn_gray")) : i >= 20 && (i = 20, e.val(i).prev(".decrease_num").removeClass("turn_gray"), e.next(".increase_num").addClass("turn_gray"))
        },
        detailTabs: function() {
            function e() {
                for (var e = t.offset().top, i = 0, a = s.length; a > i; i++) if ($(s[i]).length) {
                    var r = $(s[i]).offset().top;
                    if (!r) break;
                    e > r - 60 && $("a", t).eq(i).parent().addClass("curr_nav").siblings("li").removeClass("curr_nav")
                }
            }
            var t = $("#deal_nav_con"),
            i = $(".main_detail").offset(),
            a = $(document).width(),
            s = [];
            $(".deal_nav ul").eq(0).find("a").each(function() {
                s.push($(this).attr("href"))
            }),
            $(window).scroll(function() {
                return i ? void($(window).scrollTop() > i.top ? ("ie" == l.browser && "6.0" == l.browserVersion ? t.css({
                    position: "absolute",
                    top: $(window).scrollTop(),
                    width: a
                }) : t.css({
                    position: "fixed",
                    top: 0,
                    width: a
                }), t.next().css("padding-top", "50px"), t.addClass("nav_shadow"), e()) : (t.removeClass("nav_shadow"), t.removeAttr("style"), t.next().css("padding-top", "15px"), $(".curr_nav").removeClass("curr_nav"))) : !0
            }).trigger("scroll")
        },
        lazyloadDetail: function() {
            var e = $(window),
            t = $(".J_lazyItems");
            if (0 === t.length) return ! 1;
            var i = function(t) {
                if (null === t || void 0 === t || 0 === t.length) return ! 1;
                t = $(t);
                var i = e.scrollTop(),
                a = i + e.height(),
                s = t.offset();
                if (s.top - 200 > i && s.top < a || s.top > i && s.top < a) {
                    var r = t.find("textarea").val();
                    t.attr("loaded", "loaded"),
                    t.html(r),
                    t.hasClass("deal_eval") && ("normal" !== p ? (v.userCommentsAjax(1), v.initEvent()) : $("div.deal_eval").hide()),
                    JM.DEGRADATION || (t.hasClass("recent_view") && v.historyAndRecommend(), "deal_reco" === t.attr("id") && v.rankandRecommend(4, 0, $("#catid").val())),
                    t.find(".deal_com img").each(function() {
                        var e = $(this),
                        t = $(this).attr("src"),
                        i = function(t) {
                            if (t) {
                                var i = new Image;
                                i.src = t,
                                i.complete ? i.width > 800 && e.css("width", "800px") : i.onload = function() {
                                    i.width > 800 && e.css("width", "800px"),
                                    i.onload = null
                                }
                            }
                        };
                        i(t)
                    })
                }
            };
            new m.ui.Lazyload("#detail_info_box .today_deals li img", {
                type: "img",
                effects: "fade"
            }),
            e.scroll(function() {
                t.each(function(e, t) {
                    "loaded" !== $(t).attr("loaded") && i($(t))
                }),
                t = t.not("[loaded]")
            })
        },
        SwitchPromiseTab: function() {
            var e = function() {
                var e = $(this).find("li[is_show=true]");
                e.attr("is_show", "false"),
                e.length < 1 && (e = $(this).find("li").first()),
                e.next().length > 0 ? e.next().attr("is_show", "true") : $(this).find("li").first().attr("is_show", "true");
                var t = e.attr("tab_name");
                $("#promise .view_box").hide(),
                $("#" + t).show()
            };
            $("#promise .selector").everyTime("2s", "SwitchPromiseTab", e),
            $("#promise .selector li").hover(function() {
                var e = $(this).attr("tab_name");
                $("#promise .view_box").hide(),
                $("#" + e).show(),
                $("#promise .selector").stopTime("SwitchPromiseTab")
            },
            function() {
                $("#promise .selector li").attr("is_show", "false"),
                $(this).attr("is_show", "true"),
                $("#promise .selector").everyTime("2s", "SwitchPromiseTab", e)
            }),
            $("#promise .view_box").hover(function() {
                $("#promise .selector").stopTime("SwitchPromiseTab")
            },
            function() {
                $("#promise .selector").everyTime("2s", "SwitchPromiseTab", e)
            })
        },
        scrollTo: function() {
            var e = window.opera ? "CSS1Compat" == document.compatMode ? $("html") : $("body") : $("html,body");
            $(".deal_nav").find("ul").delegate("a", "click",
            function(t) {
                var i = $(this),
                a = i.attr("href");
                if (!a) return ! 0;
                var s = $(a).offset();
                s = s.top - 35,
                e.animate({
                    scrollTop: s
                },
                10,
                function() {
                    i.parent().addClass("curr_nav").siblings("li").removeClass("curr_nav")
                }),
                _.push(["_trackEvent", "detail_tabs", JM.CONTROL + "_" + JM.ACTION, a]),
                t.preventDefault()
            })
        },
        hotRecommend: function() {
            var e = $("#search_product_id").val(),
            t = $("#search_pop_id").val(),
            i = $("#deal_hot");
            i.length > 0 && $.getJSON("http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/ajax/get_pop_hot_sell?callback=?", {
                ppid: t,
                product_id: e,
                type: 1,
                limit: 4
            },
            function(t) {
                if (t.length > 0 && null != t) {
                    var a = 1,
                    s = '<div class="deal_tit"><h1>热卖推荐<i></i></h1></div><ul class="clearfix">',
                    r = $("#presale-timer"),
                    n = r.length > 0 && "prev" === r.attr("data-sell") && r.attr("state") >= 2;
                    for (var o in t) {
                        var l = t[o],
                        c = l.short_name,
                        d = $(".pop_detail_top .price_now em.yen").attr("name") ? l.discounted_price: "??",
                        h = l.detailUrl,
                        m = l.imgUrl;
                        n && (d = l.discounted_price),
                        s += '<li><a href="' + h + "?from=r_p_h_" + e + "_1-" + a + '" title="' + c + '" target="_blank"><img src="' + m + '" width="200"/><p class="hot_name">' + c + '</p></a><p class="hp_wrap"><span class="hot_price">￥' + d + "</span></p></li>",
                        a++
                    }
                    s += "</ul>",
                    i.append(s).show()
                }
            })
        },
        initEvent: function() {
            var e = this,
            t = $("input[name=radiogrounp]"),
            i = $("input[name=radiogrounp]:checked"),
            a = $(".paging-btns");
            i.next().css({
                color: "red"
            }),
            t.on("change",
            function() {
                $(".eval_loading").show(),
                t.each(function() {
                    $(this).next().css({
                        color: "black"
                    })
                }),
                $(this).next().css({
                    color: "red"
                }),
                e.average_score = $(this).attr("data-average-score"),
                e.userCommentsAjax(1)
            }),
            a.on("click",
            function(t) {
                if ($(".eval_loading").show(), "li" == t.target.nodeName.toLowerCase()) {
                    var i = $(t.target).html();
                    isNaN(i) ? "上一页" == i ? e.userCommentsAjax(parseInt(e.current_pageNum) - 1) : e.userCommentsAjax(parseInt(e.current_pageNum) + 1) : $(t.target).html() != e.current_pageNum && e.userCommentsAjax($(t.target).html())
                }
            })
        },
        userCommentsAjax: function(e) {
            var t = this,
            i = "2e71b087c883dd2fa7b3d405b5db808fc372f49703dd51c5b802e381031b522e",
            a = $("#search_product_id").val(),
            s = a + i,
            r = o.hex_md5(s);
            t.current_pageNum = e,
            $.ajax({
                url: "http://koubei.jumei.com/api/v1/web/getProductScoreList.html",
                type: "GET",
                dataType: "jsonp",
                jsonpCallback: "com_callback",
                cache: !0,
                data: {
                    product_id: a,
                    verify_code: r,
                    page: e,
                    average_score: 0 === t.average_score ? "": t.average_score,
                    page_size: 10,
                    type: g === !0 ? "all": "no"
                },
                success: function(i) {
                    if ("0" === i.status) {
                        var a = parseInt(i.data.high_number) + parseInt(i.data.middle_number) + parseInt(i.data.low_number);
                        t.datalist(i, e),
                        g === !0 && 1 == i.data.page_number && ($(".rate-well").text(i.data.high_number), $(".rate-mid").text(i.data.middle_number), $(".rate-bad").text(i.data.low_number), $(".rate-all").text(a)),
                        g = !1
                    }
                    $(".eval_loading").hide()
                }
            })
        },
        datalist: function(e, t) {
            var i = this,
            a = "",
            s = $(".deal_con_content");
            s.empty(),
            $.each(e.data.filterList,
            function(e, t) {
                a += '<li class="pfTrends"><div class="avatar user_info_wrap"><div class="user-items"><div class="user-name">' + t.uname,
                t.group_url && "" !== t.group_url && (a += '<img src="' + t.group_url + '">'),
                a += '</div></div><p class="urser-buy-time">购买于:' + t.paytime + '</p></div><div class="report"><div class="desc"><div class="report_content">' + t.comments + "</div>",
                t.size && t.attribute && (a += '<p class="user-item-size">型号:' + t.size + "/" + t.attribute + "</p></div></div></li>")
            });
            var r = t + "_" + i.average_score,
            n = '<ul class="' + r + '  reports_list_wrap">' + a + "</ul>";
            s.append(n),
            i.initPageNum(e)
        },
        initPageNum: function(e) {
            var t = $(".paging-btns"),
            i = this,
            a = e.data.page_count;
            if (a > 0) {
                t.empty();
                var s = "",
                r = parseInt(i.current_pageNum);
                if (1 != r && (s += '<li class="pre">上一页</li>'), 10 >= a) for (var n = 0; a > n; n++) s += n == r - 1 ? '<li class="selected">' + (n + 1) + "</li>": "<li>" + (n + 1) + "</li>";
                else if (6 >= r) for (var o = 0; 10 > o; o++) s += o == r - 1 ? '<li class="selected">' + (o + 1) + "</li>": "<li>" + (o + 1) + "</li>";
                else if (r >= a - 4) for (var l = a - 10; a > l; l++) s += l == r - 1 ? '<li class="selected">' + (l + 1) + "</li>": "<li>" + (l + 1) + "</li>";
                else for (var c = r - 6; r + 4 > c; c++) s += c == r - 1 ? '<li class="selected">' + (c + 1) + "</li>": "<li>" + (c + 1) + "</li>";
                r != a && (s += '<li class="next">下一页</li>'),
                t.append(s)
            }
        },
        contains: function(e, t) {
            for (var i = e.length; i--;) if (e[i] == t) return ! 0;
            return ! 1
        },
        historyAndRecommend: function() {
            $.getJSON("http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/ajax/get_view_history?callback=?", null,
            function(e) {
                var t = $(".recent_left"),
                i = t.find(".no_data");
                if (e && e.length) {
                    var a = "<ul>",
                    s = e.length;
                    $.each(e,
                    function(e, t) {
                        var i = t,
                        r = i.short_name,
                        n = i.url,
                        o = i.image_60,
                        l = i.discounted_price,
                        c = i.discount,
                        d = parseInt(i.product_reports_number) || 0,
                        h = parseInt(i.deal_comments_number) || 0,
                        m = d + h ? d + h + "篇评价": "新品上市";
                        i.product_id;
                        a += e >= 2 && e === s - 1 ? '<li class="clearfix nbb">': '<li class="clearfix">',
                        a += '<a href="' + n + "?from=pop_detail_foot_history_null_pos" + e + '" target="_blank" title="' + r + '"><img src="' + o + '" width="60" height="60"></a><div class="view_info"><p class="view_name"><a href="' + n + "?from=pop_detail_foot_history_null_pos" + e + '" target="_blank" title="' + r + '">' + r + '</a></p><p class="reco_price">¥' + l + (parseFloat(c) < 9 ? "(" + c + "折)": "") + '</p><p class="recent_buy">' + m + "</p></div></li>"
                    }),
                    a += "</ul>",
                    i.remove(),
                    t.append(a)
                } else i.css("background-image", "none").html("你最近没有浏览过聚美商品，<br>快去逛逛吧~")
            }),
            $.getJSON("http://www.jumei.com/i/ajax/get_recommend_by_history?callback=?", null,
            function(e) {
                var t = $(".JQ-slide-content"),
                i = t.prev(".no_data"),
                a = $(".JQ-slide-nav"),
                s = $(".recent_tit").find("p"),
                r = s.find(".rr_curr"),
                n = s.find(".rr_tot"),
                o = $("#search_product_id").val();
                if (e && e.length) {
                    var l = "",
                    c = e.length;
                    $.each(e,
                    function(e, t) {
                        var i = t,
                        a = i.short_name,
                        s = i.url,
                        r = i.image_200,
                        n = i.mall_price,
                        c = i.discount,
                        d = parseInt(i.product_reports_number) || 0,
                        h = parseInt(i.deal_comments_number) || 0,
                        m = d + h ? d + h + "篇评价": "新品上市",
                        _ = parseInt(e) + 1,
                        u = _ % 4 === 0 ? _ / 4 : parseInt(_ / 4) + 1,
                        p = _ % 4 === 0 ? 4 : _ % 4;
                        l += '<li><a href="' + s + "?from=r_p_f_" + o + "_" + u + "-" + p + '" target="_blank" title="' + a + '"><img src="' + r + '"></a><div class="view_info"><p class="view_name"><a title="' + a + '" target="_blank" href="' + s + "?from=r_p_f_" + o + "_" + u + "-" + p + '">' + a + '</a><p class="reco_price">¥' + n + (parseFloat(c) < 9.5 ? "(" + c + "折)": "") + '</p><p class="recent_buy">' + m + "</p></div>"
                    }),
                    i.remove(),
                    t.append(l),
                    r.text(1),
                    n.text(Math.ceil(c / 4)),
                    a.show(),
                    s.show(),
                    $("#pop_slide").Slide({
                        effect: "scroolLoop",
                        autoPlay: !1,
                        speed: "normal",
                        timer: 3e3,
                        steps: 4,
                        creatPage: !1,
                        loop: !1
                    }),
                    a.find(".next").click(function() {
                        setTimeout(function() {
                            var e = parseInt(r.text());
                            e + 1 <= n.text() && r.text(e + 1)
                        },
                        300)
                    }),
                    a.find(".prev").click(function() {
                        setTimeout(function() {
                            var e = parseInt(r.text());
                            e - 1 >= 1 && r.text(e - 1)
                        },
                        300)
                    })
                } else i.css("background-image", "none").html("对不起，暂时没有数据！")
            }),
            $(".recent_view").css("visibility", "visible")
        },
        rankandRecommend: function(e, t, i) {
            var a = $(0 === t ? ".others_buy": ".cat_rank"),
            s = a.find(".no_data"),
            r = "",
            n = $("#search_product_id").val();
            if (1 === t) a = a.find(".tab_content");
            else if (!$("#deal_reco").length) return ! 1;
            var o = $(".pop_price_wrap .price_now em").attr("name") ? $(".pop_price_wrap .price_now em").attr("name") : 0,
            l = 99999 == $("#catid").val() ? 0 : o;
            $.ajax({
                url: "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/ajax/get_pop_category_top_recommend",
                data: {
                    catid: i,
                    limit: e,
                    pid: n,
                    type: 0,
                    price: l
                },
                dataType: "jsonp",
                success: function(e) {
                    if (e.length) {
                        if (0 === t) r += '<ul class="clearfix">',
                        $.each(e,
                        function(e, t) {
                            r += '<li><a href="' + t.url + "?from=r_p_a_" + n + "_1-" + (e + 1) + '" title="' + t.short_name + '" target="_blank"><img src="' + t.image + '" width="190" height="190"><p class="reco_name">' + t.short_name + '</p></a><p class="reco_price">￥' + t.mall_price + "</p></li>"
                        }),
                        r += "</ul>",
                        s.remove(),
                        a.append(r);
                        else if (1 === t) {
                            var i = e.slice(0, 5),
                            o = e.slice(5, 10);
                            i.length && ($.each(i,
                            function(e, t) {
                                r += e === i.length - 1 ? '<li class="nbb">': "<li>",
                                r += '<span class="rank_tit">' + (e + 1) + '</span><a href="' + t.url + "?from=r_p_a_" + n + "_1-" + (e + 1) + '" title="' + t.short_name + '" target="_blank"><img src="' + t.image + '" width="190" height="190"></a><p class="rank_price"><span class="hot_price">￥' + t.mall_price + '</span></p><p class="rank_name"><a href="' + t.url + '" title="' + t.short_name + '" target="_blank">' + t.short_name + "</a></p></li>"
                            }), a.find("ul").eq(0).html("").append(r)),
                            o.length ? (r = "", $.each(o,
                            function(e, t) {
                                r += e === o.length - 1 ? '<li class="nbb">': "<li>",
                                r += '<span class="rank_tit">' + (e + 1) + '</span><a href="' + t.url + "?from=r_p_a_" + n + "_1-" + (e + 1) + '" title="' + t.short_name + '" target="_blank"><img src="' + t.image + '" width="190" height="190"></a><p class="rank_price"><span class="hot_price">￥' + t.mall_price + '</span></p><p class="rank_name"><a href="' + t.url + "?from=r_p_a_" + n + "_1-" + (e + 1) + '" title="' + t.short_name + '" target="_blank">' + t.short_name + "</a></p></li>"
                            }), a.find("ul").eq(1).html("").append(r)) : a.find("ul").eq(1).find(".no_data").css("background-image", "none").text("对不起，暂时没有数据！")
                        }
                    } else s.css("background-image", "none").text("对不起，暂时没有数据！")
                },
                error: function() {
                    s.css("background-image", "none").text("网络错误！")
                }
            })
        },
        other: function() { !
            function() {
                function e() {
                    t.html("<em class='free'>新人包邮<em>")
                }
                var t = $("#freight"),
                i = parseFloat($(".yen").attr("name"));
                if (!JM.DEGRADATION) {
                    var a = m.util.cookie.get("uid"),
                    s = m.util.cookie.get("first_visit"),
                    r = m.util.cookie.get("order_new_user");
                    if (null == a && null == r) $.getJSON("http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/ajax/new_user?callback=?",
                    function(t) {
                        return 0 !== t ? (r = m.util.cookie.get("order_new_user"), i >= 39 && e(), !0) : void 0
                    });
                    else if ((s && !a || null != a && 1 == r) && i >= 39) return e(),
                    !0
                }
                i >= 159 && t.find("em").addClass("free").text("包邮")
            } (),
            $(".pb-pay").bind("click",
            function() {
                var e = $("#sku_no").val(),
                t = $("#hash_id").val(),
                i = $(".amout_input").val(),
                a = "http://cart." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/presale/add/" + e + "," + t + "," + i + "?from=popdetail_pay";
                return $(this).attr("href", a),
                !!e
            }),
            $(".sell_rule").hover(function() {
                var e = $(this);
                e.find(".rmb_tax").addClass("over"),
                e.find(".mark_layer").fadeIn()
            },
            function() {
                var e = $(this);
                e.find(".rmb_tax").removeClass("over"),
                e.find(".mark_layer").fadeOut()
            })
        },
        timeCounter: function() {
            function e() {
                var e = "<i></i><em>DD</em>天<em>HH</em>小时<em>MM</em>分<em>SS</em>秒";
                return $(".pop_wish_btn").length && (e = "<i></i>距开售：<em>DD</em>天<em>HH</em>小时<em>MM</em>分<em>SS</em>秒"),
                e
            }
            function t() {
                var e = $("#presale-timer").attr("state"),
                t = "";
                return "2" === e && (t = "<p>距预售结束仅剩 : </p><p><em>DD</em>天<em>HH</em>小时<em>MM</em>分<em>SS</em>秒</p>"),
                "4" === e && (t = "<p>距付尾款结束仅剩 : </p><p><em>DD</em>天<em>HH</em>小时<em>MM</em>分<em>SS</em>秒</p>"),
                t
            }
            new d($("#pop_detail_timer"), {
                format: e(),
                onStart: function() {
                    this.$target.html(this.html)
                },
                onEnd: function() {
                    this.$target.html("<i></i>已结束")
                }
            });
            if ($("#presale-timer").length > 0) {
                new d($("#presale-timer"), {
                    format: t(),
                    onStart: function() {
                        this.$target.html(this.html)
                    }
                })
            }
            if ($(".status-timer").length > 0) {
                new d($(".status-timer"), {
                    format: "剩余时间：<em>DD</em>天<em>HH</em>小时",
                    onStart: function() {
                        this.$target.html(this.html)
                    },
                    onEnd: function() {
                        this.$target.html("已结束")
                    }
                })
            }
        },
        miaoDialog: function() {
            var e = '<div class="module-dialog"><a class="close"></a><div class="module-content"><div class="module-text"></div><div class="module-button"></div><div class="module-tip"></div></div></div>';
            0 === $(".module-dialog").length && $("body").append(e),
            0 === $(".module-bg").length && $("body").append("<div class='module-bg'></div>");
            var t = '小美提示<br/><input type="text" placeholder="验证码" autocomplete="off" class="num_code" maxlength="4"><img src="http://www.' + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/ajax/hash_code?from=seckill&time=" + (new Date).getTime() + '"><div class="change">换一换</div>';
            $(".module-button").html("<span>完成</span>").css("margin-top", "45px"),
            $(".module-text").html(t),
            $(".module-content").css("padding-top", "44px"),
            $(".module-dialog").css({
                background: "url('http://images.jumei.com/pc_global/301-bg2.png') no-repeat",
                width: "460px",
                height: "301px"
            }),
            $(".module-dialog").fadeIn(300),
            $(".module-bg").fadeIn(500),
            $(".module-dialog a.close").on("click",
            function(e) {
                e.preventDefault(),
                $(".module-dialog").fadeOut(300),
                $(".module-bg").fadeOut(500)
            }),
            $(".module-content").on("click", ".change",
            function() {
                $(".module-text img").attr("src", "http://www." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/ajax/hash_code?from=seckill&time=" + (new Date).getTime())
            })
        }
    };
    v.init()
}),
seajs.use(["app", "pop"],
function() {
    var e = "http://cart." + JM.SITE_MAIN_TOPLEVELDOMAINNAME + "/i/cart/ajax_add_to_cart";
    new Jumei.app.iBar({
        addCartAjaxUrl: e
    })
});