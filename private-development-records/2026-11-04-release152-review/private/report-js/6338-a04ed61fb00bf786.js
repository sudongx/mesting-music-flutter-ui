(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6338],
  {
    71875: function (e, t, n) {
      "use strict";
      (n.r(t), n(67833));
    },
    11571: function (e, t, n) {
      "use strict";
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      n.d(t, {
        Popup: function () {
          return d;
        },
      });
      var o = n(76792),
        i = n(95394),
        a = n(37667),
        s = n.n(a),
        c = n(93967),
        u = n.n(c),
        l = [
          "position",
          "isVisible",
          "children",
          "className",
          "isMask",
          "maskClassName",
        ];
      function d(e) {
        var t,
          n = e.position,
          c = e.isVisible,
          d = e.children,
          p = e.className,
          f = e.isMask,
          g = e.maskClassName,
          h = (0, i.Z)(e, l),
          m = (0, a.useState)(!1),
          w = m[0],
          y = m[1],
          b = (0, a.useState)(!1),
          v = b[0],
          k = b[1],
          S = (0, a.useRef)("");
        return (
          (0, a.useEffect)(
            function () {
              (clearTimeout(S.current),
                c
                  ? (y(!0), k(!0))
                  : (k(!1),
                    "top" !== n &&
                    "bottom" !== n &&
                    "left" !== n &&
                    "right" !== n &&
                    "center" !== n &&
                    "opacity" !== n
                      ? y(!1)
                      : (S.current = setTimeout(function () {
                          y(!1);
                        }, 400))));
            },
            [c],
          ),
          w &&
            s().createElement(
              s().Fragment,
              null,
              f &&
                s().createElement("div", {
                  className: u()(
                    "ma-mask",
                    "ma-popup-mask",
                    { "mask-in": v, "mask-out": !v },
                    void 0 === g ? "" : g,
                  ),
                }),
              s().createElement(
                "div",
                r(
                  {
                    className: u()(
                      "ma-popup",
                      ((t = {}),
                      (0, o.Z)(
                        (0, o.Z)(
                          (0, o.Z)(
                            (0, o.Z)(
                              (0, o.Z)(
                                (0, o.Z)(
                                  (0, o.Z)(
                                    (0, o.Z)(
                                      (0, o.Z)(
                                        (0, o.Z)(
                                          t,
                                          "ma-popup-in-top",
                                          "top" === n && v,
                                        ),
                                        "ma-popup-out-top",
                                        "top" === n && !v,
                                      ),
                                      "ma-popup-in-bottom",
                                      "bottom" === n && v,
                                    ),
                                    "ma-popup-out-bottom",
                                    "bottom" === n && !v,
                                  ),
                                  "ma-popup-in-left",
                                  "left" === n && v,
                                ),
                                "ma-popup-out-left",
                                "left" === n && !v,
                              ),
                              "ma-popup-in-right",
                              "right" === n && v,
                            ),
                            "ma-popup-out-right",
                            "right" === n && !v,
                          ),
                          "ma-popup-in-center",
                          "center" === n && v,
                        ),
                        "ma-popup-out-center",
                        "center" === n && !v,
                      ),
                      (0, o.Z)(
                        (0, o.Z)(t, "mask-in", "opacity" === n && v),
                        "mask-out",
                        "opacity" === n && !v,
                      )),
                      p,
                    ),
                  },
                  h,
                ),
                s().createElement("div", { className: "ma-popup-content" }, d),
              ),
            )
        );
      }
      (s().createElement,
        (d.defaultProps = { position: "", isVisible: !1, isMask: !1 }));
    },
    50850: function (e, t, n) {
      var r = n(69468);
      (r.keys().forEach(function (e) {
        r(e);
      }),
        (e.exports = n(11571)));
    },
    37285: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return b;
        },
      });
      var r = n(76792),
        o = n(95394),
        i = n(37667),
        a = n.n(i);
      function s() {
        return a().createElement("div", { className: "KGL20-toast-loading" });
      }
      (n(59325), a().createElement);
      var c = n(17044);
      n(97637);
      var u = [
          "content",
          "mask",
          "duration",
          "wrapClassName",
          "maskClassName",
          "isMulti",
          "icon",
          "align",
          "onClose",
        ],
        l = ["duration", "onClose"];
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          (t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : d(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      a().createElement;
      var f = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t
            .filter(function (e) {
              return !!e;
            })
            .join(" ");
        },
        g = function (e, t) {
          (0, n(19481).render)(e, t);
        };
      function h() {
        return a().createElement(
          "svg",
          { viewBox: "0 0 44 44" },
          a().createElement(
            "g",
            { stroke: "none", fillRule: "evenodd" },
            a().createElement("path", {
              fill: "#FFFFFF",
              fillRule: "nonzero",
              d: "M22.5,0.5 C10.1258779,0.5 0.5,10.1258779 0.5,22.5 C0.5,33.8741221 10.1258779,43.5 22.5,43.5 C33.8741221,43.5 43.5,33.8741221 43.5,22.5 C43.5,10.1258779 33.8741221,0.5 22.5,0.5 Z M22.5,3.5 C32.2172679,3.5 40.5,11.7827321 40.5,22.5 C40.5,32.2172679 32.2172679,40.5 22.5,40.5 C11.7827321,40.5 3.5,32.2172679 3.5,22.5 C3.5,11.7827321 11.7827321,3.5 22.5,3.5 Z",
            }),
            a().createElement("path", {
              fill: "#FFFFFF",
              d: "M29.0606602,14.9393398 C29.609835,15.4885146 29.6441584,16.357577 29.1636304,16.9467378 L29.0606602,17.0606602 L24.121,22 L29.0606602,26.9393398 C29.6464466,27.5251263 29.6464466,28.4748737 29.0606602,29.0606602 C28.5114854,29.609835 27.642423,29.6441584 27.0532622,29.1636304 L26.9393398,29.0606602 L22,24.121 L17.0606602,29.0606602 C16.4748737,29.6464466 15.5251263,29.6464466 14.9393398,29.0606602 C14.390165,28.5114854 14.3558416,27.642423 14.8363696,27.0532622 L14.9393398,26.9393398 L19.879,22 L14.9393398,17.0606602 C14.3535534,16.4748737 14.3535534,15.5251263 14.9393398,14.9393398 C15.4885146,14.390165 16.357577,14.3558416 16.9467378,14.8363696 L17.0606602,14.9393398 L22,19.879 L26.9393398,14.9393398 C27.5251263,14.3535534 28.4748737,14.3535534 29.0606602,14.9393398 Z",
            }),
          ),
        );
      }
      function m() {
        return a().createElement(
          "svg",
          { viewBox: "0 0 44 44" },
          a().createElement(
            "g",
            { stroke: "none", fill: "none", fillRule: "evenodd" },
            a().createElement("path", {
              fill: "#FFFFFF",
              fillRule: "nonzero",
              d: "M22,0 C9.62587788,0 0,9.62587788 0,22 C0,33.3741221 9.62587788,43 22,43 C33.3741221,43 43,33.3741221 43,22 C43,9.62587788 33.3741221,0 22,0 Z M22,3 C31.7172679,3 40,11.2827321 40,22 C40,31.7172679 31.7172679,40 22,40 C11.2827321,40 3,31.7172679 3,22 C3,11.2827321 11.2827321,3 22,3 Z",
            }),
            a().createElement("path", {
              stroke: "#FFFFFF",
              strokeWidth: "3",
              strokeLinecap: "round",
              d: "M10,22 L18,30 M18,30 L32,16",
            }),
          ),
        );
      }
      function w() {
        return a().createElement(
          "svg",
          { viewBox: "0 0 44 44" },
          a().createElement(
            "g",
            { stroke: "none", fill: "none", fillRule: "evenodd" },
            a().createElement("path", {
              fill: "#FFFFFF",
              fillRule: "nonzero",
              d: "M22,0 C9.62587788,0 0,9.62587788 0,22 C0,33.3741221 9.62587788,43 22,43 C33.3741221,43 43,33.3741221 43,22 C43,9.62587788 33.3741221,0 22,0 Z M22,3 C31.7172679,3 40,11.2827321 40,22 C40,31.7172679 31.7172679,40 22,40 C11.2827321,40 3,31.7172679 3,22 C3,11.2827321 11.2827321,3 22,3 Z",
            }),
            a().createElement("path", {
              stroke: "#FFFFFF",
              strokeWidth: "3",
              strokeLinecap: "round",
              d: "M21.5,9.5 L21.5,25.5 M21.5,32 L21.5,33",
            }),
          ),
        );
      }
      function y(e) {
        var t = e.content,
          n = e.mask,
          r = (e.duration, e.wrapClassName),
          i = e.maskClassName,
          c = e.isMulti,
          l = e.icon,
          d = e.align;
        (e.onClose, (0, o.Z)(e, u));
        var p = null;
        l &&
          (p =
            ["loading", "fail", "success", "warn"].indexOf(l) > -1
              ? a().createElement(
                  "div",
                  { className: f("KGToast-icon") },
                  "loading" === l
                    ? a().createElement(s, null)
                    : "fail" === l
                      ? a().createElement(h, null)
                      : "success" === l
                        ? a().createElement(m, null)
                        : "warn" === l
                          ? a().createElement(w, null)
                          : null,
                )
              : a().createElement("div", { className: "KGToast-icon" }, l));
        var g = c;
        return (
          !c && "string" == typeof t && t.length > 16 && (g = !0),
          a().createElement(
            a().Fragment,
            null,
            n && a().createElement("div", { className: f("KGToast-mask", i) }),
            a().createElement(
              "div",
              { className: f("KGToast-main", r) },
              a().createElement(
                "div",
                {
                  className: f(
                    "KGToast-container",
                    g ? "KGToast-multi" : "KGToast-inline",
                    "loading" === l
                      ? "KGToast-mode-loading"
                      : "KGToast-mode-toast",
                  ),
                },
                p,
                t
                  ? a().createElement(
                      "div",
                      {
                        className: f(
                          "KGToast-content",
                          "KGToast-align-".concat(d),
                        ),
                      },
                      "function" == typeof t ? t() : t,
                    )
                  : null,
              ),
            ),
          )
        );
      }
      y.defaultProps = {
        content: "",
        mask: !1,
        duration: 2,
        wrapClassName: "",
        maskClassName: "",
        isMulti: !1,
        align: "center",
        icon: "",
        errInfo: "",
        onClose: function () {},
      };
      var b = (function () {
        if (!window.__KGTOAST_CONTAINER__) {
          var e = document.createElement("div");
          ((e.className = "KGToastContainer KGToastBaseClass"),
            document.body.appendChild(e),
            (window.__KGTOAST_CONTAINER__ = e),
            (window.__KGTOAST_LIST__ = window.__KGTOAST_LIST__ || []));
        }
        var t = function (e) {
            var t = document.createElement("div");
            return (
              (t.className = "KGToast-wrap"),
              (window.__KGTOAST_CONTAINER__ || document.body).appendChild(t),
              t
            );
          },
          n = function (e) {
            var n = e.duration,
              r = e.onClose,
              i = t((0, o.Z)(e, l)),
              s = g(a().createElement(y, e), i),
              c = !1,
              u = function () {
                c ||
                  ((c = !0),
                  s && s.unmount(),
                  i.parentNode && i.parentNode.removeChild(i),
                  "function" == typeof r && r(),
                  clearTimeout(d),
                  window.__KGTOAST_LIST__.splice(
                    window.__KGTOAST_LIST__.indexOf(p),
                    1,
                  ));
              },
              d = 0;
            0 !== n &&
              (d = setTimeout(function () {
                u();
              }, 1e3 * n));
            var p = {
              root: i,
              text: function (t) {
                c || ((e.content = t || ""), g(a().createElement(y, e), i));
              },
              remove: function () {
                u();
              },
            };
            return (window.__KGTOAST_LIST__.push(p), p);
          };
        return {
          add: function (e) {
            ("string" == typeof e && (e = { content: e }),
              (e = p(p({}, y.defaultProps), e)));
            try {
              if (c.Z.isInClient() && "loading" != e.icon) {
                var t = {
                    user: { kugouID: "[REDACTED]" },
                    device: {
                      version: "",
                      appid: "",
                      deviceType: "",
                      osVersion: "",
                      mid: "",
                    },
                  },
                  r =
                    window.external && window.external.getClientInfo
                      ? window.external.getClientInfo()
                      : t;
                "string" == typeof r && "" !== r
                  ? (r = JSON.parse(r)) && r.user && (t = r)
                  : (t = r);
                var o = 127107;
                c.Z.isIOS && (o = 222661);
                var i = window.location.href.split("?");
                c.Z.mobileCall(295, {
                  appid: t.device.appid,
                  userid: t.user.kugouID,
                  mid: t.device.mid,
                  tv: t.device.version,
                  a: o,
                  b: "统计",
                  ft: "提示信息",
                  r: "提示信息",
                  svar1: i[0],
                  svar2: e.content,
                  svar3: e.errInfo,
                  svar4: i[1] ? i[1] : "",
                });
              }
            } catch (e) {}
            return n(e);
          },
          __create: function (e, t) {
            return (
              "string" == typeof t && (t = { content: t }),
              (t = p(p(p({}, y.defaultProps), t), {}, { icon: e })),
              this.add(t)
            );
          },
          info: function (e) {
            return this.add(e);
          },
          loading: function (e) {
            return this.__create("loading", e);
          },
          success: function (e) {
            return this.__create("success", e);
          },
          fail: function (e) {
            return this.__create("fail", e);
          },
          warn: function (e) {
            return this.__create("warn", e);
          },
          clearAll: function () {
            if (window.__KGTOAST_LIST__)
              for (; window.__KGTOAST_LIST__.length;)
                window.__KGTOAST_LIST__[0].remove();
          },
        };
      })();
    },
    9254: function (e, t, n) {},
    80155: function (e, t, n) {
      "use strict";
      n(9254);
    },
    62172: function (e, t, n) {
      var r,
        o,
        i = n(67521);
      ((r = function () {
        "use strict";
        function e(t) {
          return (e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(t);
        }
        return (
          Array.prototype.forEach ||
            (Array.prototype.forEach = function (e) {
              if (null == this) throw TypeError("this is null or not defined");
              var t,
                n,
                r,
                o = Object(this),
                i = o.length >>> 0;
              if ("function" != typeof e)
                throw TypeError(e + " is not a function");
              for (1 < arguments.length && (t = arguments[1]), n = 0; n < i;)
                (n in o && ((r = o[n]), e.call(t, r, n, o)), n++);
            }),
          function (t) {
            if (/^https/i.test(t) || !t || !/^http/i.test(t)) return t;
            var n = "";
            return (
              [
                [
                  "https://imgessl.kugou.com",
                  [
                    "http://imge.kugou.com",
                    "http://imgessl.kugou.com",
                    "http://singerimg.kugou.com",
                    "http://c0.kgimg.com",
                    "http://c1.kgimg.com",
                    "http://c2.kgimg.com",
                    "http://c3.kgimg.com",
                    "http://c4.kgimg.com",
                    "http://c5.kgimg.com",
                    "http://c6.kgimg.com",
                    "http://c7.kgimg.com",
                    "http://c8.kgimg.com",
                    "http://c9.kgimg.com",
                    "http://s1.kgimg.com",
                  ],
                ],
                ["https://webimg.kgimg.com", ["http://webimg.bssdl.kugou.com"]],
                [
                  "https://mobileservicebssdl.kugou.com",
                  [
                    "http://mobileservice.bssdl.kugou.com",
                    "http://mobileservicebssdl.kugou.com",
                  ],
                ],
                [
                  "https://mwebbssdl.kugou.com",
                  ["http://mweb.bssdl.kugou.com"],
                ],
                [
                  "https://schoolimgbssdl.kugou.com",
                  ["http://schoolimg.bssdl.kugou.com"],
                ],
                [
                  "https://activitybssdl.kugou.com",
                  ["http://activity.bssdl.kugou.com"],
                ],
                [
                  "https://adsfile.kugou.com",
                  ["http://adsfile.bssdlbig.kugou.com"],
                ],
                [
                  "https://imgacsing.kugou.com",
                  ["http://img.acsing.kugou.com"],
                ],
                [
                  "https://s10.fxwork.kugou.com",
                  [
                    "http://s10.fxwork.fanxing.kugou.com",
                    "http://s10.fxwork.fanxing.com",
                    "http://s10.fxwork.kugou.com",
                  ],
                ],
                [
                  "https://p3fx.kgimg.com",
                  [
                    "http://imge.kugou.com",
                    "http://s3.fx.kgimg.com",
                    "http://p3.fx.kgimg.com",
                  ],
                ],
                ["https://s4fx.kgimg.com", ["http://s4fx.kgimg.com"]],
                ["https://m3ws.kugou.com", ["http://m.kugou.com"]],
                ["https://ep.kugou.com", ["http://zhuanjistatic.kugou.com"]],
                [
                  "https://ksongbssdl.kugou.com",
                  ["http://ksong.bssdl.kugou.com"],
                ],
                ["https://fxbssdl.kgimg.com", ["http://fxbssdl.kgimg.com"]],
                [
                  "https://fxmimagebssdl.kgimg.com",
                  ["http://fxmimagebssdl.kgimg.com"],
                ],
                [
                  "https://fximgbssdl.kugou.com",
                  ["http://fximgbssdl.kugou.com"],
                ],
                [
                  "https://fxbssdl.kgimg.com/bss/fxvideoimg/",
                  ["http://fxvideoimg.bssdl.kugou.com"],
                ],
                [
                  "https://fxbssdl.kgimg.com/bss/fxams",
                  ["http://fxams.bssdl.kugou.com"],
                ],
                [
                  "https://fxbssdl.kgimg.com/bss/album",
                  ["http://album.bssdl.kugou.com"],
                ],
                ["https://fxv.kugou.com", ["http://fx.v.kugou.com"]],
                [
                  "https://imgulssl.kugou.com",
                  ["http://image.upload.kugou.com"],
                ],
                ["https://imgphpulssl.kugou.com", ["http://imgphp.kugou.com"]],
                [
                  "https://audioulssl.kugou.com",
                  ["http://upload.fs.kugou.com"],
                ],
                [
                  "https://bssulbig.service.kugou.com",
                  ["http://bssulbig.kugou.com"],
                ],
                [
                  "https://qrcodebssdl.kugou.com",
                  ["http://qrcode.bssdl.kugou.com"],
                ],
                ["https://vipbssdl.kugou.com", ["http://vip.bssdl.kugou.com"]],
                [
                  "https://$13fx.kgimg.com",
                  [
                    /^http:\/\/([sp])[1-5]\.fx\.(kgimg)\.com/,
                    /^http:\/\/([sp])[1-5]\.fanxing\.com/,
                  ],
                ],
                [
                  "https://imagemsgbssdl.kugou.com",
                  ["http://imagemsg.bssdl.kugou.com"],
                ],
                [
                  "https://$1.yun.kugou.com",
                  [/^http:\/\/(.+)\.yun\.kugou\.com/],
                ],
                [
                  "https://$1.cloud.kugou.com",
                  [/^http:\/\/(.+)\.cloud\.kugou\.com/],
                ],
                [
                  "https://youthimgbssdl.kugou.com",
                  ["http://youthimgbssdl.kugou.com"],
                ],
                ["https://$1.kugou.com", [/^http:\/\/(.+)\.kugou\.com/]],
              ].forEach(function (r) {
                var o = r[1],
                  i = r[0];
                return (
                  o.forEach(function (r) {
                    if (!n)
                      return (
                        "object" === e(r) && r.test(t)
                          ? (n = t.replace(r, i))
                          : ~t.indexOf(r) && (n = t.replace(r, i)),
                        !n
                      );
                  }),
                  !n
                );
              }),
              n || console.warn("转化https链接失败:" + t),
              n || t
            );
          }
        );
      }),
        "object" === i(t)
          ? (e.exports = r())
          : void 0 !== (o = r.call(t, n, t, e)) && (e.exports = o));
    },
    92170: function (e, t, n) {
      var r,
        o,
        i = n(67521);
      ((r = function () {
        "use strict";
        function e(t) {
          return (e =
            "function" == typeof Symbol && "symbol" == i(Symbol.iterator)
              ? function (e) {
                  return i(e);
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : i(e);
                })(t);
        }
        var t,
          n,
          r,
          o,
          a = navigator.userAgent.toLowerCase(),
          s = {
            Ie: !!document.all,
            Ie6: !!document.all && !window.XMLHttpRequest,
            Ie7:
              !!document.all && /msie 7.0/gi.test(window.navigator.appVersion),
            Ie8:
              !!document.all && /msie 8.0/gi.test(window.navigator.appVersion),
            FF: /firefox/gi.test(window.navigator.userAgent),
            Opera: /opera/gi.test(window.navigator.userAgent),
            Chrom: /Chrom/gi.test(window.navigator.userAgent),
            Maxthon: /Maxthon/gi.test(window.navigator.userAgent),
            android: /android|Adr/gi.test(a),
            iphone: /iPhone|iPod|iPad/gi.test(a),
            isWeiXin: a.indexOf("micromessenger") > -1,
            isMobileQQ:
              (a.indexOf("sq") > -1 && a.indexOf("yyb_d") > -1) ||
              (a.indexOf("iphone os") > -1 && a.indexOf("qq/") > -1),
            isQzone: a.indexOf("qzone") > -1,
            isWeibo: a.indexOf("weibo") > -1,
            isMQQBrowser: a.indexOf("mqqbrowser") > -1,
            isFanxing: /fanxing2/.test(a),
          };
        window.getBase64 = function (e, t) {
          var n = new Image();
          (n.setAttribute("crossOrigin", "anonymous"),
            (n.src = e),
            (n.onload = function () {
              var e = document.createElement("canvas");
              ((e.width = n.width),
                (e.height = n.height),
                e.getContext("2d").drawImage(n, 0, 0, e.width, e.height));
              var r = e.toDataURL();
              t && t(r);
            }));
        };
        var c = function (t, n) {
            if ("object" == e(t) && "object" == e(n))
              for (var r in n) t[r] = n[r];
            if ("function" == typeof t) {
              if ("object" == e(n)) for (var r in n) t.prototype[r] = n[r];
              "function" == typeof n && (t.prototype = n.prototype);
            }
            return t;
          },
          u = {
            ver: "2.2",
            debug: 0,
            isAndroid:
              "undefined" != typeof external && void 0 !== external.superCall,
            isIOS: !!navigator.userAgent.match(/KGBrowser/gi),
            chkAndroidApp: function () {
              try {
                if (external.superCall(122)) return !0;
              } catch (e) {
                return !1;
              }
            },
            cbNum: 0,
            formatURL: { browser: "", url: "" },
            formatSong: {
              filename: "",
              filesize: "",
              hash: "",
              bitrate: "",
              extname: "",
              duration: "",
              mvhash: "",
              m4afilesize: "",
              "320hash": "",
              "320filesize": "",
              sqhash: "",
              sqfilesize: 0,
              feetype: 0,
              isfirst: 0,
            },
            formatMV: { filename: "", singername: "", hash: "", imgurl: "" },
            formatShare: {
              shareName: "",
              topicName: "",
              hash: "",
              listID: "",
              type: "",
              suid: "[REDACTED]",
              slid: "",
              imgUrl: "",
              filename: "",
              duration: "",
              shareData: { linkUrl: "", picUrl: "", content: "", title: "" },
            },
            _extend: function (e, t) {
              if (t) for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
              return t;
            },
            str2Json: function (e) {
              var t = {};
              if ("[object String]" === Object.prototype.toString.call(e))
                try {
                  t = JSON.parse(e);
                } catch (e) {
                  t = {};
                }
              return t;
            },
            json2Str: function (e) {
              var t = "";
              if ("string" != typeof e)
                try {
                  t = JSON.stringify(e);
                } catch (e) {
                  t = "";
                }
              return t;
            },
            loadUrl: function (e) {
              var t;
              ((t = document.createElement("iframe")).setAttribute("src", e),
                t.setAttribute("style", "display:none;"),
                t.setAttribute("height", "0px"),
                t.setAttribute("width", "0px"),
                t.setAttribute("frameborder", "0"),
                document.body.appendChild(t),
                t.parentNode.removeChild(t),
                (t = null));
            },
            callCmd: function (e) {
              var t,
                n = this,
                r = "",
                o = document;
              if (
                (o.getElementById("mod_debugwin_set") &&
                  (o.getElementById("mod_debugwin_set").innerHTML =
                    JSON.stringify(e).replace(/\\/g, "")),
                n.debug > 0)
              )
                switch (n.debug) {
                  case 1:
                    window.console && console.log(e);
                    break;
                  case 2:
                    alert(JSON.stringify(e).replace(/\\/g, ""));
                }
              if (n.chkAndroidApp())
                try {
                  ((t = e.jsonStr
                    ? external.superCall(e.cmd, e.jsonStr)
                    : external.superCall(e.cmd)),
                    e.callback &&
                      "" !== e.callback &&
                      ((t = n.str2Json(t)), e.callback(t)));
                } catch (e) {}
              else if (n.isIOS) {
                if (e.callback) {
                  var i =
                    "kgmobilecall" +
                    ++n.cbNum +
                    Math.random().toString().substr(2, 9);
                  ((window[i] = function (t) {
                    void 0 !== t &&
                      e.callback &&
                      ("[object String]" === Object.prototype.toString.call(t)
                        ? e.callback(n.str2Json(t))
                        : e.callback(t));
                  }),
                    (r = e.jsonStr
                      ? 'kugouurl://start.music/?{"cmd":' +
                        e.cmd +
                        ', "jsonStr":' +
                        e.jsonStr +
                        ', "callback":"' +
                        i +
                        '"}'
                      : 'kugouurl://start.music/?{"cmd":' +
                        e.cmd +
                        ', "callback":"' +
                        i +
                        '"}'));
                } else
                  r = e.jsonStr
                    ? 'kugouurl://start.music/?{"cmd":' +
                      e.cmd +
                      ', "jsonStr":' +
                      e.jsonStr +
                      "}"
                    : 'kugouurl://start.music/?{"cmd":' + e.cmd + "}";
                n.loadUrl(r);
              } else
                e.callback && e.callback({ status: 0, error: "不在客户端内" });
            },
            getVersion: function (e) {
              this.callCmd({ cmd: 122, callback: e });
            },
            getMobileInfo: function (e) {
              this.callCmd({ cmd: 124, callback: e });
            },
            share: function (e, t, n, r) {
              var o = this,
                i = function () {
                  var t = {
                      title: encodeURIComponent(e.shareData.title) || "",
                      url: e.shareData.linkUrl || "",
                      content: encodeURIComponent(e.shareData.content) || "",
                      imgSrc: encodeURI(e.shareData.picUrl) || "",
                      swf: "",
                      appkey: "340086183",
                      ralateUid: "[REDACTED]",
                    },
                    n = "",
                    r = "";
                  ((n = "http://service.t.sina.com.cn/share/share.php"),
                    (r = [
                      "url=" + t.url,
                      "appkey=" + t.appkey,
                      "title=" + t.content,
                      "pic=" + t.imgSrc,
                      "ralateUid=" + t.ralateUid,
                    ].join("&")),
                    (location.href = n + "?" + r));
                };
              e && (e = o._extend(o.formatShare, e));
              try {
                e &&
                  e.shareData &&
                  3 === Number(e.type) &&
                  !e.shareData.linkUrlStrict &&
                  e.shareData.linkUrl &&
                  (e.shareData.linkUrlStrict = 1);
              } catch (e) {
                console.warn("share 组件：", e);
              }
              o.isIOS
                ? t
                  ? o.callCmd({ cmd: 115, jsonStr: o.json2Str(e), callback: t })
                  : o.callCmd({ cmd: 115, jsonStr: o.json2Str(e) })
                : o.chkAndroidApp()
                  ? o.getVersion(function (t) {
                      o.getMobileInfo(function (n) {
                        n &&
                        1005 === Number(n.appid || n.appId) &&
                        t &&
                        e &&
                        3 == e.type &&
                        "android" == t.platform &&
                        6340 > Number(t.version)
                          ? i()
                          : o.callCmd({ cmd: 115, jsonStr: o.json2Str(e) });
                      });
                    })
                  : s.isWeiXin || s.isMobileQQ
                    ? n
                      ? n()
                      : i()
                    : r
                      ? r()
                      : i();
            },
            multiShare: function (e, t) {
              var n = "";
              ((n = this.json2Str(e)),
                t
                  ? this.callCmd({ cmd: 294, jsonStr: n, callback: t })
                  : this.callCmd({ cmd: 294, jsonStr: n }));
            },
            isInClient: function () {
              return (
                !(!this.isAndroid && !this.isKugouAndroid) ||
                (!!this.isIOS && this.isIOS)
              );
            },
            shareMiniProgram: function (e) {
              var t = "";
              ((t = this.json2Str(e)), this.callCmd({ cmd: 269, jsonStr: t }));
            },
          };
        ((t = function (e, t) {
          var n = document,
            r =
              n.head || n.getElementsByTagName("head")[0] || n.documentElement,
            o = n.createElement("script");
          ((o.onload = t),
            (o.onerror = function () {}),
            (o.async = !0),
            (o.src = e[0]),
            r.appendChild(o));
        }),
          (window.setShareInfo = function (e) {
            var n = navigator.userAgent,
              r =
                (n.match(/MicroMessenger\/([\d\.]+)/),
                n.match(/QQ\/([\d\.]+)/)),
              o = -1 !== n.indexOf("Qzone/");
            (r &&
              (function (e) {
                function n() {
                  try {
                    e.callback
                      ? window.mqq.ui.setOnShareHandler(function (t) {
                          (3 == t &&
                          (e.swapTitle ||
                            (e.WXconfig && e.WXconfig.swapTitleInWX))
                            ? (r.title = e.summary)
                            : (r.title = e.title),
                            (r.share_type = t),
                            (r.back = !0),
                            window.mqq.ui.shareMessage(r, function (t) {
                              0 === t.retCode &&
                                e.callback &&
                                e.callback.call(this, t);
                            }));
                        })
                      : window.mqq.data.setShareInfo(r);
                  } catch (e) {}
                }
                var r = {
                  title: e.title,
                  desc: e.summary,
                  share_url: e.url,
                  image_url: e.pic,
                };
                window.mqq
                  ? n()
                  : t(
                      ["//open.mobile.qq.com/sdk/qqapi.js?_bid=152"],
                      function () {
                        n();
                      },
                    );
              })(e),
              o &&
                (function (e) {
                  function n() {
                    if (QZAppExternal && QZAppExternal.setShare) {
                      for (
                        var t = [], n = [], r = [], o = [], i = 0;
                        i < 5;
                        i++
                      )
                        (t.push(e.pic),
                          o.push(e.url),
                          4 === i &&
                          (e.swapTitle ||
                            (e.WXconfig && e.WXconfig.swapTitleInWX))
                            ? (n.push(e.summary), r.push(e.title))
                            : (n.push(e.title), r.push(e.summary)));
                      QZAppExternal.setShare(function (e) {}, {
                        type: "share",
                        image: t,
                        title: n,
                        summary: r,
                        shareURL: o,
                      });
                    }
                  }
                  window.QZAppExternal
                    ? n()
                    : t(
                        [
                          "//qzonestyle.gtimg.cn/qzone/phone/m/v4/widget/mobile/jsbridge.js?_bid=339",
                        ],
                        function () {
                          n();
                        },
                      );
                })(e));
          }));
        var l = (function () {
          function e() {
            var e = window.location.host;
            (-1 !=
            "m3ws.kugou.com,ep.kugou.com,activity.kugou.com,h5.kugou.com,m.kugou.com".indexOf(
              e,
            )
              ? (this.useNewShare = !1)
              : -1 !=
                  "m3ws.kugou.com,mtpls.kugou.com,h5.kugou.com,m.kugou.com".indexOf(
                    e,
                  )
                ? (this.useNewShare = !0)
                : ((this.useNewShare = !1), (this.OffTheWhiteList = !0)),
              (this.hasCheck = !1),
              (this.hasRegister = !1),
              (this.hasReady = !1),
              (this.cbBus = []),
              (this.jsApiList = [
                "launchApplication",
                "onMenuShareTimeline",
                "onMenuShareAppMessage",
                "onMenuShareQQ",
                "onMenuShareWeibo",
                "onMenuShareQZone",
                "updateAppMessageShareData",
                "updateTimelineShareData",
              ]),
              (this.version = "1.4"));
          }
          return (
            window.kgWxEnvir ||
              ((window.kgWxEnvir = new e()),
              (window.hash = window.location.hash),
              "onhashchange" in window &&
              (void 0 === document.documentMode || 8 == document.documentMode)
                ? (window.onhashchange = function () {
                    ((window.kgWxEnvir.hasCheck = !1),
                      (window.kgWxEnvir.hasRegister = !1),
                      (window.kgWxEnvir.hasReady = !1),
                      window.kgWxEnvir.init());
                  })
                : setInterval(function () {
                    window.location.hash != window.hash &&
                      ((window.hash = window.location.hash),
                      (window.kgWxEnvir.hasCheck = !1),
                      (window.kgWxEnvir.hasRegister = !1),
                      (window.kgWxEnvir.hasReady = !1),
                      window.kgWxEnvir.init());
                  }, 150)),
            (e.prototype.init = function (e, t) {
              if (/MicroMessenger/i.test(navigator.userAgent)) {
                (e &&
                  e.jsApiList &&
                  Array.isArray(e.jsApiList) &&
                  (this.jsApiList = this.jsApiList.concat(e.jsApiList)),
                  e && e.version && (this.version = e.version),
                  -1 != window.location.origin.indexOf("kugou.com")
                    ? (this.this_url = encodeURIComponent(window.location.href))
                    : (this.this_url = encodeURIComponent("http://kugou.com")));
                var n = this;
                (n.loadWxJs(function () {
                  if (n.hasReady) t && t(window.wx);
                  else {
                    if ((n.cbBus.push(t), n.hasCheck)) return;
                    (n.wxRegisterTimeout && clearTimeout(n.wxRegisterTimeout),
                      (n.wxRegisterTimeout = setTimeout(function () {
                        ((n.hasCheck = !0), n.getSignature());
                      }, 500)));
                  }
                }),
                  n.loadStatJs());
              }
            }),
            (e.prototype.loadStatJs = function (e) {
              if (window.kgStatPush || this.hasLoadStatJS) e && e();
              else {
                var t = document.createElement("script");
                ((t.type = "text/javascript"),
                  t.readyState
                    ? (t.onreadystatechange = function () {
                        ((this.hasLoadStatJS = !0),
                          ("loaded" != t.readyState &&
                            "complete" != t.readyState) ||
                            ((t.onreadystatechange = null), e && e()));
                      })
                    : (t.onload = function () {
                        ((this.hasLoadStatJS = !0), e && e());
                      }),
                  (t.src =
                    "https://staticssl.kugou.com/common/js/min/npm/stat.min.js"),
                  document.getElementsByTagName("head")[0].appendChild(t));
              }
            }),
            (e.prototype.pushAPM = function (e) {
              if (
                "voo.kugou.com" == window.location.host ||
                "test.kugou.com" == window.location.host
              )
                return null;
              ((e.ver = 1e3),
                (e.useragent = navigator.userAgen),
                (e.os = 1058),
                (e.timestamp = +new Date()),
                this.loadStatJs(function () {
                  kgStatPush(e, 1);
                }));
            }),
            (e.prototype.loadWxJs = function (e) {
              if (window.wx || this.hasLoadJS) e && e();
              else {
                this.hasLoadJS = !0;
                var t = document.createElement("script");
                ((t.type = "text/javascript"),
                  t.readyState
                    ? (t.onreadystatechange = function () {
                        ("loaded" != t.readyState &&
                          "complete" != t.readyState) ||
                          ((t.onreadystatechange = null), e && e());
                      })
                    : (t.onload = function () {
                        e && e();
                      }),
                  "1.6" === this.version
                    ? (t.src =
                        "https://staticssl.kugou.com/common/js/kg-jweixin-1.6.0.js")
                    : (t.src =
                        "https://staticssl.kugou.com/common/js/kg-jweixin-1.4.0.js"),
                  document.getElementsByTagName("head")[0].appendChild(t));
              }
            }),
            (e.prototype.getSignature = function () {
              var e = this;
              (e.OffTheWhiteList &&
                (("voo.kugou.com" == window.location.host &&
                  "test.kugou.com" == window.location.host) ||
                  e.pushAPM({
                    typeid: 110493,
                    state: 0,
                    te: "E1",
                    position: 3,
                    fs: window.location.host,
                    hash: window.location.href,
                  })),
                (function (e) {
                  var t = "cb" + new Date().getTime();
                  window[t] = function (t) {
                    "string" == typeof t
                      ? e.success(JSON.parse(t))
                      : e.success(t);
                  };
                  var n = document.createElement("script");
                  for (var r in ((n.src = e.url + "&callback=" + t), e.data))
                    n.src += "&" + r + "=" + e.data[r];
                  document.getElementsByTagName("body")[0].appendChild(n);
                })(
                  e.useNewShare
                    ? {
                        url:
                          "https://mwechats.kugou.com/service/jssdk/getSignature?sdk=140&caller=kugou_web&url=" +
                          e.this_url,
                        success: function (t) {
                          t &&
                            (window.wx.config({
                              beta: !0,
                              debug: !1,
                              appId: t.appId,
                              timestamp: t.timestamp,
                              nonceStr: t.nonceStr,
                              signature: t.signature,
                              jsApiList: e.jsApiList,
                            }),
                            (e.hasRegister = !0),
                            window.wx.ready(function () {
                              ((e.hasReady = !0),
                                e.cbBus.forEach(function (e) {
                                  e && e(window.wx);
                                }));
                            }),
                            window.wx.error(function (t) {
                              try {
                                t = JSON.stringify(t);
                              } catch (e) {}
                              e.pushAPM({
                                typeid: 110493,
                                state: 0,
                                te: "E1",
                                position: 2,
                                fs: t || 0,
                                hash: window.location.href,
                              });
                            }));
                        },
                      }
                    : {
                        url:
                          "https://mwechats.kugou.com/jssdk/getSignature?sdk=140&caller=kugou_mobile&url=" +
                          e.this_url,
                        success: function (t) {
                          t &&
                            (window.wx.config({
                              debug: !1,
                              beta: !0,
                              appId: t.appId,
                              timestamp: t.timestamp,
                              nonceStr: t.nonceStr,
                              signature: t.signature,
                              jsApiList: e.jsApiList,
                            }),
                            (e.hasRegister = !0),
                            window.wx.ready(function () {
                              ((e.hasReady = !0),
                                e.cbBus.forEach(function (e) {
                                  e && e(window.wx);
                                }));
                            }),
                            window.wx.error(function (t) {
                              try {
                                t = JSON.stringify(t);
                              } catch (e) {}
                              e.pushAPM({
                                typeid: 110493,
                                state: 0,
                                te: "E1",
                                position: 1,
                                fs: t || 0,
                                hash: window.location.href,
                              });
                            }));
                        },
                      },
                ));
            }),
            (e.prototype.share = function (e) {
              var t = this;
              if (!this.hasRegister)
                return "还未完成初始化，请在init回调中调用share方法";
              window.wx.ready(function () {
                (e.title ||
                  t.pushAPM({
                    typeid: 110493,
                    state: 0,
                    te: "E1",
                    position: 5,
                    fs: "no_title",
                    hash: window.location.href,
                  }),
                  e.content ||
                    t.pushAPM({
                      typeid: 110493,
                      state: 0,
                      te: "E1",
                      position: 6,
                      fs: "no_content",
                      hash: window.location.href,
                    }),
                  e.img ||
                    t.pushAPM({
                      typeid: 110493,
                      state: 0,
                      te: "E1",
                      position: 7,
                      fs: "no_img",
                      hash: window.location.href,
                    }),
                  window.wx.onMenuShareAppMessage({
                    title: e.title,
                    desc: e.content,
                    link: e.url,
                    imgUrl: e.img,
                    trigger: function (e) {},
                    success: function (e) {},
                    cancel: function (e) {},
                    fail: function (e) {},
                  }),
                  window.wx.onMenuShareTimeline({
                    title: e.title,
                    desc: e.content,
                    link: e.url,
                    imgUrl: e.img,
                    trigger: function (e) {},
                    success: function (e) {},
                    cancel: function (e) {},
                    fail: function (e) {},
                  }),
                  window.wx.onMenuShareQQ({
                    title: e.title,
                    desc: e.content,
                    link: e.url,
                    imgUrl: e.img,
                    success: function () {},
                    cancel: function () {},
                  }),
                  window.wx.onMenuShareQZone({
                    title: e.title,
                    desc: e.content,
                    link: e.url,
                    imgUrl: e.img,
                    success: function () {},
                    cancel: function () {},
                  }),
                  window.wx.onMenuShareWeibo({
                    title: e.title,
                    desc: e.content,
                    link: e.url,
                    imgUrl: e.img,
                    success: function () {},
                    cancel: function () {},
                  }),
                  window.wx.updateAppMessageShareData({
                    title: e.title,
                    desc: e.content,
                    link: e.url,
                    imgUrl: e.img,
                    success: function () {},
                    cancel: function () {},
                  }),
                  window.wx.updateTimelineShareData({
                    title: e.title,
                    desc: e.content,
                    link: e.url,
                    imgUrl: e.img,
                    success: function () {},
                    cancel: function () {},
                  }),
                  8 === parseInt(10 * Math.random()) &&
                    t.pushAPM({
                      typeid: 110493,
                      state: 1,
                      hash: window.location.href,
                    }));
              });
            }),
            {
              init: function (e, t) {
                window.kgWxEnvir.init(t, e);
              },
              share: function (e) {
                window.kgWxEnvir.share(e);
              },
              getUserInfo: function () {
                if (/MicroMessenger/i.test(navigator.userAgent)) {
                  var e,
                    t = decodeURIComponent(window.location.search);
                  if (
                    ("" == t &&
                      window.location.hash &&
                      -1 != window.location.hash.indexOf("?") &&
                      (t =
                        "?" +
                        decodeURIComponent(window.location.hash).split("?")[1]),
                    -1 != t.indexOf("openid") && -1 != t.indexOf("unionid"))
                  ) {
                    var n = {
                      openid: "",
                      unionid: "",
                      nickname: "",
                      sex: "",
                      city: "",
                      province: "",
                      country: "",
                      headimgurl: "",
                    };
                    t = t.substr(1).split("&");
                    for (var r = 0; r < t.length; r++)
                      (-1 != (e = t[r]).indexOf("openid") &&
                        (e = e.substring(e.indexOf("openid"))),
                        (e = e.split("=")).length > 1 &&
                          void 0 != n[e[0]] &&
                          (n[e[0]] = e[1]));
                    return n;
                  }
                  return void (window.location.href =
                    "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx412c15698d95020e&redirect_uri=" +
                    encodeURIComponent(
                      "https://mwechats.kugou.com/service/user/getInfo?redirect_uri=" +
                        encodeURIComponent(window.location.href),
                    ) +
                    "&response_type=code&scope=snsapi_userinfo&state=1&connect_redirect=1#wechat_redirect");
                }
                return null;
              },
            }
          );
        })();
        window.KgWebMobileCall = window.KgWebMobileCall || {};
        var d = {
            title: document.title,
            url: location.href,
            content: "",
            img: "",
            projectid: "1018",
          },
          p =
            ((n = {
              popupWidth: 615,
              popupHeight: 505,
              title: "",
              url: "",
              content: "",
              img: "",
              swf: "",
              site: "",
              appkey: "",
              source: "",
              ralateUid: "[REDACTED]",
            }),
            (r = ""),
            (o = ""),
            {
              init: function (e, t) {
                var i, a, s;
                ((n = c(n, t || {})),
                  (function (e) {
                    var t = encodeURIComponent(n.title),
                      i = encodeURIComponent(n.url),
                      a = encodeURIComponent(n.content),
                      s = encodeURIComponent(n.img),
                      c = n.hdImg ? encodeURIComponent(n.hdImg) : "",
                      u = encodeURIComponent(n.swf || "");
                    switch (e) {
                      case "qzome":
                      case "qzone":
                        ((r =
                          "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey"),
                          (o = [
                            "url=" + i,
                            "title=" + t,
                            "desc=" + a,
                            "pics=" + s,
                            "summary=" + a,
                          ].join("&")));
                        break;
                      case "rr":
                        ((n.popupHeight = 560),
                          (r = "https://widget.renren.com/dialog/share"),
                          (o = [
                            "link=" + i,
                            "title=" + t,
                            "image_src=" + s,
                            "description=" + a,
                          ].join("&")));
                        break;
                      case "sina":
                        ((n.popupWidth = 615),
                          (n.popupHeight = 505),
                          (r = "https://service.weibo.com/share/share.php"),
                          (o = [
                            "url=" + i,
                            "appkey=" + n.appkey,
                            "title=" + t,
                            "pic=" + (c || s),
                            "ralateUid=" + n.ralateUid,
                          ].join("&")));
                        break;
                      case "qq":
                        ((n.popupWidth = 700), (n.popupHeight = 680));
                        var l = encodeURIComponent(n.appkey),
                          d = s;
                        ((r = "https://v.t.qq.com/share/share.php"),
                          (o = [
                            "title=" + t,
                            "url=" + i,
                            "appkey=" + l,
                            "site=" + n.site,
                            "pic=" + d,
                          ].join("&")));
                        break;
                      case "qq_client":
                        ((n.popupWidth = 765),
                          (n.popupHeight = 620),
                          (r =
                            "https://connect.qq.com/widget/shareqq/index.html"),
                          (o = [
                            "title=" + t,
                            "desc=" + a,
                            "url=" + i,
                            "site=" + n.site,
                            "pics=" + d,
                            "flash=" + u,
                            "summary=" + encodeURIComponent("听音乐，找酷狗"),
                          ].join("&")));
                        break;
                      default:
                        return;
                    }
                  })(e),
                  (i = (screen.width - n.popupWidth) / 2),
                  (a = (screen.height - n.popupHeight) / 2),
                  (s = r + "?" + o),
                  window.open(
                    s,
                    "_blank",
                    "width=" +
                      n.popupWidth +
                      ",height=" +
                      n.popupHeight +
                      ",left=" +
                      i +
                      ",top=" +
                      a,
                  ) || (location.href = s));
              },
            }),
          f = (function () {
            function e(e) {
              window.setShareInfo &&
                window.setShareInfo({
                  title: e.title,
                  summary: e.content,
                  pic: e.img,
                  url: e.url,
                });
            }
            return (s.isMobileQQ && e(d), { share: e });
          })(),
          g = (function () {
            function e(e) {
              l.share(e);
            }
            return (
              /MicroMessenger/i.test(navigator.userAgent) &&
                l.init(function () {
                  e(d);
                }),
              { wxShare: e }
            );
          })(),
          h = [
            {
              retry: "activityretry.kugou.com",
              original: "activity.kugou.com",
            },
            { retry: "h5retry.kugou.com", original: "h5.kugou.com" },
            { retry: "epretry.kugou.com", original: "ep.kugou.com" },
            { retry: "m3wsretery.kugou.com", original: "m3ws.kugou.com" },
            { retry: "mretery.kugou.com", original: "m.kugou.com" },
          ],
          m = (function (e) {
            var t;
            function n() {
              document.getElementById("alertWeixin") &&
                document.getElementById("alertWeixin").remove();
              var e = document.createElement("div");
              ((e.style.cssText =
                "position: fixed;top: 0;right: 0;width: 100%;height: 100%;z-index: 10000;background: rgba(0,0,0,.7);"),
                (e.id = "alertWeixin"),
                document.body.appendChild(e),
                (e.innerHTML =
                  ' <img style="max-height: 149px; max-width: 58%; display: block; z-index: 1000; position: fixed; top: 10px; right: 20px;" src="https://webvoobssdl.kugou.com/87cb91a1d91b3799aa826c3a12c4e74c.png"/>'),
                clearTimeout(t),
                e.addEventListener("click", function () {
                  (clearTimeout(t),
                    document.getElementById("alertWeixin") &&
                      document.getElementById("alertWeixin").remove());
                }),
                (t = setTimeout(function () {
                  document.getElementById("alertWeixin") &&
                    document.getElementById("alertWeixin").remove();
                }, 3e3)));
            }
            function r() {
              p.init("sina", d);
            }
            function o(t) {
              if (e.isInClient() && 5 == d.type)
                return void e.shareMiniProgram({
                  type: d.mpType || 1,
                  id: d.id || "",
                  url: d.url || location.href,
                  path: d.path || "",
                  ver: d.ver || 0,
                  title: d.title || document.title,
                  doc: d.content || "",
                  pic: d.img,
                });
              if (s.isFanxing) {
                var o = {
                  image: d.img,
                  link: d.url || location.href,
                  desc: d.content,
                  title: d.title || document.title,
                };
                !(function (e) {
                  var t =
                    "kz8F9YI0f7EMXyITzpgGFa3aT0wmwYR9Host2yFlPrUKE+DFY9jJDvXdVsQDOLa1YTOY7wnPTEN0PKyiWJsNDuM5ujSh5zvJvALS7sC3t/9mkHJinBN5yc9/pN0s2DyB2qz4W9rL5BUmfTqjcMb4jDbK+TJUZE/fEI9nKMILhs0=";
                  if (s.isFanxing) {
                    e && e.sign && (t = e.sign);
                    var n = {};
                    ((n.cmd = e.cmd),
                      (n.sign = t),
                      (n.jsonStr = e.jsonStr),
                      e.callbackName && (n.callback = e.callbackName));
                    var r = JSON.stringify(n);
                    s.iphone
                      ? (location.href =
                          "fanxing2://" +
                          (e.isBanner ? "fx.activity" : "send.message") +
                          "/?" +
                          r)
                      : window.external &&
                        window.external.callFanxing &&
                        window.external.callFanxing(r);
                  }
                })({
                  cmd: "610",
                  jsonStr: {
                    shareList: [
                      "onShareWechat",
                      "onShareTimeline",
                      "onShareQQ",
                      "onShareQzone",
                      "onShareSina",
                    ],
                    onShareWechat: o,
                    onShareTimeline: o,
                    onShareQQ: o,
                    onShareQzone: o,
                    onShareSina: o,
                  },
                  callbackName: "mobileCall.FxShare",
                });
              } else {
                4 == d.type
                  ? (i = {
                      linkUrl: encodeURIComponent(d.url || location.href),
                      content: d.content,
                      title: d.title || document.title,
                      imageData: d.img,
                      screenshot: d.screenshot || !1,
                      copyContent: d.copyContent || "",
                    })
                  : ((i = {
                      linkUrl: encodeURIComponent(d.url || location.href),
                      picUrl: d.img,
                      content: d.content,
                      title: d.title || document.title,
                      copyContent: d.copyContent || "",
                      shareChannel: d.shareChannel || [1, 2, 3, 4, 5],
                    }),
                    d && d.picBase64 && (i.picBase64 = d.picBase64));
                var i,
                  a = {
                    type: d.type || "3",
                    shareName: d.shareName || "",
                    hash: d.hash || "",
                    listID: d.listID || "",
                    suid: d.suid || "",
                    slid: d.slid || "",
                    imgUrl: d.imgUrl || "",
                    filename: d.filename || "",
                    duration: d.duration || "",
                    topicName: d.topicName || "",
                    singerName: d.singerName || "",
                    needSkin: 0 == d.needSkin ? 0 : 1,
                    subbiz: d.subbiz || "",
                    shareData: i,
                    shareFrom: d.shareFrom || "",
                  };
                if (
                  (t && (a.action = "onlyInitMsg"),
                  (a.isShareLinkNeedShorten = 0),
                  d && 1 != d.isShareLinkNeedShorten
                    ? a.shareData.linkUrl &&
                      a.shareData.linkUrl.length > 255 &&
                      (a.isShareLinkNeedShorten = 1)
                    : d &&
                      d.isShareLinkNeedShorten &&
                      (a.isShareLinkNeedShorten = d.isShareLinkNeedShorten),
                  d.platform && (a.platform_type = d.platform),
                  d.multiCB)
                )
                  ((a.multiCB = d.multiCB), e.share(a, null, n, r));
                else if (d.hdImg || d.wbContent) {
                  var c = d.hdImg || d.img;
                  window.getBase64(c, function (t) {
                    ((window.multiCallBack = function () {
                      var n = {
                        type: "weibo",
                        linkUrl: d.url || location.href,
                        content: d.wbContent || d.content,
                        title: d.title || document.title,
                        list: [t],
                      };
                      e.multiShare(n);
                    }),
                      (a.multiCB = "multiCallBack"),
                      e.share(a, null, n, r));
                  });
                } else e.share(a, null, n, r);
              }
            }
            function i(t) {
              var n = "";
              t.url = t.url || d.url || location.href;
              try {
                var r = new URL(t.url);
                r && r.hostname && (n = r.hostname);
              } catch (e) {}
              if (n) {
                for (var o = "", i = 0, s = h.length; i < s; i++)
                  if (n === h[i].retry) {
                    o = h[i].original;
                    break;
                  }
                o &&
                  (t.url && 0 === t.url.indexOf("https://" + n)
                    ? (t.url = t.url.replace("https://" + n, "https://" + o))
                    : t.url &&
                      0 === t.url.indexOf("http://" + n) &&
                      (t.url = t.url.replace("http://" + n, "http://" + o)));
              }
              if (/MicroMessenger/i.test(navigator.userAgent)) {
                var u = t.img,
                  l = parseInt(new Date().getTime());
                (u &&
                  u.indexOf("http") > -1 &&
                  (u = u.indexOf("?") > 0 ? u + "&t=" + l : u + "?t=" + l),
                  (t.img = u));
              }
              if (
                ((d = c(d, t || {})),
                (window._SHARE_COMPONENT_STATUS = 2),
                e.isInClient() && d.img && !d.picBase64)
              ) {
                var p = d.img;
                window.getBase64(p, function (e) {
                  e && d.img === p && !d.picBase64 && ((d.picBase64 = e), a(d));
                });
              }
            }
            function a(e) {
              if (
                (i(e),
                f.share(d),
                g.wxShare(d),
                u.isInClient() &&
                  window.external &&
                  window.external.getClientInfo &&
                  "function" == typeof window.external.getClientInfo)
              ) {
                var t = window.external.getClientInfo();
                try {
                  t = JSON.parse(t);
                } catch (e) {}
                if (t && t.device && t.device.isSupportShareMsgInit) {
                  if (
                    1005 === Number(t.device.appid) &&
                    20580 > Number(t.device.version)
                  )
                    return null;
                  o(!0);
                }
              }
            }
            return {
              setShareData: i,
              shareAll: o,
              shareWx: n,
              shareOther: r,
              resetShareData: a,
              resetShare: function (e) {
                (i(e), f.share(d), g.wxShare(d), o());
              },
              addRetryHostname: function (e) {
                h = h.concat(e);
              },
            };
          })(u);
        return ((window._SHARE_COMPONENT_STATUS = 1), m);
      }),
        "object" == i(t)
          ? (e.exports = r())
          : void 0 !== (o = r.call(t, n, t, e)) && (e.exports = o));
    },
    78869: function (e, t, n) {
      var r,
        o,
        i = n(67521);
      ((r = function () {
        "use strict";
        function e(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function t(t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? e(Object(r), !0).forEach(function (e) {
                  (function (e, t, n) {
                    var r;
                    ((r = (function (e, t) {
                      if ("object" != i(e) || null === e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != i(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(t, "string")),
                    (t = "symbol" == i(r) ? r : String(r)) in e)
                      ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = n);
                  })(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : e(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e),
                    );
                  });
          }
          return t;
        }
        function r() {
          r = function () {
            return e;
          };
          var e = {},
            t = Object.prototype,
            n = t.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            a = "function" == typeof Symbol ? Symbol : {},
            s = a.iterator || "@@iterator",
            c = a.asyncIterator || "@@asyncIterator",
            u = a.toStringTag || "@@toStringTag";
          function l(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function d(e, t, n, r) {
            var i,
              a,
              s = Object.create(
                (t && t.prototype instanceof g ? t : g).prototype,
              );
            return (
              o(s, "_invoke", {
                value:
                  ((i = new A(r || [])),
                  (a = "suspendedStart"),
                  function (t, r) {
                    if ("executing" === a)
                      throw Error("Generator is already running");
                    if ("completed" === a) {
                      if ("throw" === t) throw r;
                      return x();
                    }
                    for (i.method = t, i.arg = r; ;) {
                      var o = i.delegate;
                      if (o) {
                        var s = (function e(t, n) {
                          var r = n.method,
                            o = t.iterator[r];
                          if (void 0 === o)
                            return (
                              (n.delegate = null),
                              ("throw" === r &&
                                t.iterator.return &&
                                ((n.method = "return"),
                                (n.arg = void 0),
                                e(t, n),
                                "throw" === n.method)) ||
                                ("return" !== r &&
                                  ((n.method = "throw"),
                                  (n.arg = TypeError(
                                    "The iterator does not provide a '" +
                                      r +
                                      "' method",
                                  )))),
                              f
                            );
                          var i = p(o, t.iterator, n.arg);
                          if ("throw" === i.type)
                            return (
                              (n.method = "throw"),
                              (n.arg = i.arg),
                              (n.delegate = null),
                              f
                            );
                          var a = i.arg;
                          return a
                            ? a.done
                              ? ((n[t.resultName] = a.value),
                                (n.next = t.nextLoc),
                                "return" !== n.method &&
                                  ((n.method = "next"), (n.arg = void 0)),
                                (n.delegate = null),
                                f)
                              : a
                            : ((n.method = "throw"),
                              (n.arg = TypeError(
                                "iterator result is not an object",
                              )),
                              (n.delegate = null),
                              f);
                        })(o, i);
                        if (s) {
                          if (s === f) continue;
                          return s;
                        }
                      }
                      if ("next" === i.method) i.sent = i._sent = i.arg;
                      else if ("throw" === i.method) {
                        if ("suspendedStart" === a)
                          throw ((a = "completed"), i.arg);
                        i.dispatchException(i.arg);
                      } else "return" === i.method && i.abrupt("return", i.arg);
                      a = "executing";
                      var c = p(e, n, i);
                      if ("normal" === c.type) {
                        if (
                          ((a = i.done ? "completed" : "suspendedYield"),
                          c.arg === f)
                        )
                          continue;
                        return { value: c.arg, done: i.done };
                      }
                      "throw" === c.type &&
                        ((a = "completed"),
                        (i.method = "throw"),
                        (i.arg = c.arg));
                    }
                  }),
              }),
              s
            );
          }
          function p(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          e.wrap = d;
          var f = {};
          function g() {}
          function h() {}
          function m() {}
          var w = {};
          l(w, s, function () {
            return this;
          });
          var y = Object.getPrototypeOf,
            b = y && y(y(C([])));
          b && b !== t && n.call(b, s) && (w = b);
          var v = (m.prototype = g.prototype = Object.create(w));
          function k(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function S(e, t) {
            var r;
            o(this, "_invoke", {
              value: function (o, a) {
                function s() {
                  return new t(function (r, s) {
                    !(function r(o, a, s, c) {
                      var u = p(e[o], e, a);
                      if ("throw" !== u.type) {
                        var l = u.arg,
                          d = l.value;
                        return d && "object" == i(d) && n.call(d, "__await")
                          ? t.resolve(d.__await).then(
                              function (e) {
                                r("next", e, s, c);
                              },
                              function (e) {
                                r("throw", e, s, c);
                              },
                            )
                          : t.resolve(d).then(
                              function (e) {
                                ((l.value = e), s(l));
                              },
                              function (e) {
                                return r("throw", e, s, c);
                              },
                            );
                      }
                      c(u.arg);
                    })(o, a, r, s);
                  });
                }
                return (r = r ? r.then(s, s) : s());
              },
            });
          }
          function j(e) {
            var t = { tryLoc: e[0] };
            (1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t));
          }
          function O(e) {
            var t = e.completion || {};
            ((t.type = "normal"), delete t.arg, (e.completion = t));
          }
          function A(e) {
            ((this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(j, this),
              this.reset(!0));
          }
          function C(e) {
            if (e) {
              var t = e[s];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var r = -1,
                  o = function t() {
                    for (; ++r < e.length;)
                      if (n.call(e, r))
                        return ((t.value = e[r]), (t.done = !1), t);
                    return ((t.value = void 0), (t.done = !0), t);
                  };
                return (o.next = o);
              }
            }
            return { next: x };
          }
          function x() {
            return { value: void 0, done: !0 };
          }
          return (
            (h.prototype = m),
            o(v, "constructor", { value: m, configurable: !0 }),
            o(m, "constructor", { value: h, configurable: !0 }),
            (h.displayName = l(m, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === h || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, m)
                  : ((e.__proto__ = m), l(e, u, "GeneratorFunction")),
                (e.prototype = Object.create(v)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            k(S.prototype),
            l(S.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = S),
            (e.async = function (t, n, r, o, i) {
              void 0 === i && (i = Promise);
              var a = new S(d(t, n, r, o), i);
              return e.isGeneratorFunction(n)
                ? a
                : a.next().then(function (e) {
                    return e.done ? e.value : a.next();
                  });
            }),
            k(v),
            l(v, u, "Generator"),
            l(v, s, function () {
              return this;
            }),
            l(v, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length;) {
                    var r = n.pop();
                    if (r in t) return ((e.value = r), (e.done = !1), e);
                  }
                  return ((e.done = !0), e);
                }
              );
            }),
            (e.values = C),
            (A.prototype = {
              constructor: A,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(O),
                  !e)
                )
                  for (var t in this)
                    "t" === t.charAt(0) &&
                      n.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = void 0);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var t = this;
                function r(n, r) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (t.next = n),
                    r && ((t.method = "next"), (t.arg = void 0)),
                    !!r
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return r("end");
                  if (i.tryLoc <= this.prev) {
                    var s = n.call(i, "catchLoc"),
                      c = n.call(i, "finallyLoc");
                    if (s && c) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    } else {
                      if (!c)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === e || "continue" === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = e),
                  (a.arg = t),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), f)
                    : this.complete(a)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === e.type && t && (this.next = t),
                  f
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return (this.complete(n.completion, n.afterLoc), O(n), f);
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var o = r.arg;
                      O(n);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function (e, t, n) {
                return (
                  (this.delegate = {
                    iterator: C(e),
                    resultName: t,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  f
                );
              },
            }),
            e
          );
        }
        function o(e, t, n, r, o, i, a) {
          try {
            var s = e[i](a),
              c = s.value;
          } catch (e) {
            return void n(e);
          }
          s.done ? t(c) : Promise.resolve(c).then(r, o);
        }
        var a,
          s,
          c = null;
        c =
          "undefined" != typeof window
            ? {
                isInClient: function () {
                  return !!(
                    navigator.userAgent.match(/KGBrowser/gi) ||
                    navigator.userAgent.match(/KugouBrowser/gi) ||
                    navigator.userAgent.match(/kugouandroid/gi) ||
                    (window && window.external && window.external.superCall)
                  );
                },
                isIOS: !!navigator.userAgent.match(/KGBrowser/gi),
                loadUrl: function (e) {
                  var t;
                  ((t = document.createElement("iframe")).setAttribute(
                    "src",
                    e,
                  ),
                    t.setAttribute("style", "display:none;"),
                    t.setAttribute("height", "0px"),
                    t.setAttribute("width", "0px"),
                    t.setAttribute("frameborder", "0"),
                    document.body.appendChild(t),
                    t.parentNode.removeChild(t),
                    (t = null));
                },
                cbNum: 0,
                getData: function (e, t) {
                  this.cbNum++;
                  var n = "kg_stat_mobilecall_"
                    .concat(186, "_")
                    .concat(this.cbNum, "_")
                    .concat(Math.random().toString().substr(2, 9));
                  ((window[n] = function (e, n) {
                    if (void 0 !== e) {
                      if (
                        "[object String]" === Object.prototype.toString.call(e)
                      )
                        try {
                          e =
                            "#" === n
                              ? decodeURIComponent(e)
                              : decodeURIComponent(decodeURIComponent(e));
                        } catch (e) {
                          console.error("stat mobilecall err");
                        }
                      try {
                        e = JSON.parse(e);
                      } catch (e) {}
                      t && t(e);
                    }
                  }),
                    this.isIOS || (e.AndroidCallback = n));
                  try {
                    e = JSON.stringify(e);
                  } catch (e) {}
                  if (this.isIOS) {
                    var r =
                      "kugouurl://start.music/?" +
                      encodeURIComponent(
                        '{"cmd":186, "jsonStr":' +
                          e +
                          ', "callback":"' +
                          n +
                          '"}',
                      );
                    this.loadUrl(r);
                  } else window.external.superCall(186, e);
                },
                isPigeon: function () {
                  return (
                    0 > window.location.protocol.indexOf("http") ||
                    0 > window.location.host.indexOf("kugou.com")
                  );
                },
              }
            : null;
        var u =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
                ? window
                : void 0 !== n.g
                  ? n.g
                  : "undefined" != typeof self
                    ? self
                    : {},
          l =
            ((a = s = { exports: {} }),
            s.exports,
            (function (e) {
              function t(e, t) {
                var n = (65535 & e) + (65535 & t);
                return (
                  (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n)
                );
              }
              function n(e, n, r, o, i, a) {
                var s;
                return t(
                  ((s = t(t(n, e), t(o, a))) << i) | (s >>> (32 - i)),
                  r,
                );
              }
              function r(e, t, r, o, i, a, s) {
                return n((t & r) | (~t & o), e, t, i, a, s);
              }
              function o(e, t, r, o, i, a, s) {
                return n((t & o) | (r & ~o), e, t, i, a, s);
              }
              function i(e, t, r, o, i, a, s) {
                return n(t ^ r ^ o, e, t, i, a, s);
              }
              function s(e, t, r, o, i, a, s) {
                return n(r ^ (t | ~o), e, t, i, a, s);
              }
              function c(e, n) {
                ((e[n >> 5] |= 128 << (n % 32)),
                  (e[14 + (((n + 64) >>> 9) << 4)] = n));
                var a,
                  c,
                  u,
                  l,
                  d,
                  p = 1732584193,
                  f = -271733879,
                  g = -1732584194,
                  h = 271733878;
                for (a = 0; a < e.length; a += 16)
                  ((c = p),
                    (u = f),
                    (l = g),
                    (d = h),
                    (p = r(p, f, g, h, e[a], 7, -680876936)),
                    (h = r(h, p, f, g, e[a + 1], 12, -389564586)),
                    (g = r(g, h, p, f, e[a + 2], 17, 606105819)),
                    (f = r(f, g, h, p, e[a + 3], 22, -1044525330)),
                    (p = r(p, f, g, h, e[a + 4], 7, -176418897)),
                    (h = r(h, p, f, g, e[a + 5], 12, 1200080426)),
                    (g = r(g, h, p, f, e[a + 6], 17, -1473231341)),
                    (f = r(f, g, h, p, e[a + 7], 22, -45705983)),
                    (p = r(p, f, g, h, e[a + 8], 7, 1770035416)),
                    (h = r(h, p, f, g, e[a + 9], 12, -1958414417)),
                    (g = r(g, h, p, f, e[a + 10], 17, -42063)),
                    (f = r(f, g, h, p, e[a + 11], 22, -1990404162)),
                    (p = r(p, f, g, h, e[a + 12], 7, 1804603682)),
                    (h = r(h, p, f, g, e[a + 13], 12, -40341101)),
                    (g = r(g, h, p, f, e[a + 14], 17, -1502002290)),
                    (p = o(
                      p,
                      (f = r(f, g, h, p, e[a + 15], 22, 1236535329)),
                      g,
                      h,
                      e[a + 1],
                      5,
                      -165796510,
                    )),
                    (h = o(h, p, f, g, e[a + 6], 9, -1069501632)),
                    (g = o(g, h, p, f, e[a + 11], 14, 643717713)),
                    (f = o(f, g, h, p, e[a], 20, -373897302)),
                    (p = o(p, f, g, h, e[a + 5], 5, -701558691)),
                    (h = o(h, p, f, g, e[a + 10], 9, 38016083)),
                    (g = o(g, h, p, f, e[a + 15], 14, -660478335)),
                    (f = o(f, g, h, p, e[a + 4], 20, -405537848)),
                    (p = o(p, f, g, h, e[a + 9], 5, 568446438)),
                    (h = o(h, p, f, g, e[a + 14], 9, -1019803690)),
                    (g = o(g, h, p, f, e[a + 3], 14, -187363961)),
                    (f = o(f, g, h, p, e[a + 8], 20, 1163531501)),
                    (p = o(p, f, g, h, e[a + 13], 5, -1444681467)),
                    (h = o(h, p, f, g, e[a + 2], 9, -51403784)),
                    (g = o(g, h, p, f, e[a + 7], 14, 1735328473)),
                    (p = i(
                      p,
                      (f = o(f, g, h, p, e[a + 12], 20, -1926607734)),
                      g,
                      h,
                      e[a + 5],
                      4,
                      -378558,
                    )),
                    (h = i(h, p, f, g, e[a + 8], 11, -2022574463)),
                    (g = i(g, h, p, f, e[a + 11], 16, 1839030562)),
                    (f = i(f, g, h, p, e[a + 14], 23, -35309556)),
                    (p = i(p, f, g, h, e[a + 1], 4, -1530992060)),
                    (h = i(h, p, f, g, e[a + 4], 11, 1272893353)),
                    (g = i(g, h, p, f, e[a + 7], 16, -155497632)),
                    (f = i(f, g, h, p, e[a + 10], 23, -1094730640)),
                    (p = i(p, f, g, h, e[a + 13], 4, 681279174)),
                    (h = i(h, p, f, g, e[a], 11, -358537222)),
                    (g = i(g, h, p, f, e[a + 3], 16, -722521979)),
                    (f = i(f, g, h, p, e[a + 6], 23, 76029189)),
                    (p = i(p, f, g, h, e[a + 9], 4, -640364487)),
                    (h = i(h, p, f, g, e[a + 12], 11, -421815835)),
                    (g = i(g, h, p, f, e[a + 15], 16, 530742520)),
                    (p = s(
                      p,
                      (f = i(f, g, h, p, e[a + 2], 23, -995338651)),
                      g,
                      h,
                      e[a],
                      6,
                      -198630844,
                    )),
                    (h = s(h, p, f, g, e[a + 7], 10, 1126891415)),
                    (g = s(g, h, p, f, e[a + 14], 15, -1416354905)),
                    (f = s(f, g, h, p, e[a + 5], 21, -57434055)),
                    (p = s(p, f, g, h, e[a + 12], 6, 1700485571)),
                    (h = s(h, p, f, g, e[a + 3], 10, -1894986606)),
                    (g = s(g, h, p, f, e[a + 10], 15, -1051523)),
                    (f = s(f, g, h, p, e[a + 1], 21, -2054922799)),
                    (p = s(p, f, g, h, e[a + 8], 6, 1873313359)),
                    (h = s(h, p, f, g, e[a + 15], 10, -30611744)),
                    (g = s(g, h, p, f, e[a + 6], 15, -1560198380)),
                    (f = s(f, g, h, p, e[a + 13], 21, 1309151649)),
                    (p = s(p, f, g, h, e[a + 4], 6, -145523070)),
                    (h = s(h, p, f, g, e[a + 11], 10, -1120210379)),
                    (g = s(g, h, p, f, e[a + 2], 15, 718787259)),
                    (f = s(f, g, h, p, e[a + 9], 21, -343485551)),
                    (p = t(p, c)),
                    (f = t(f, u)),
                    (g = t(g, l)),
                    (h = t(h, d)));
                return [p, f, g, h];
              }
              function u(e) {
                var t,
                  n = "",
                  r = 32 * e.length;
                for (t = 0; t < r; t += 8)
                  n += String.fromCharCode((e[t >> 5] >>> (t % 32)) & 255);
                return n;
              }
              function l(e) {
                var t,
                  n = [];
                for (
                  n[(e.length >> 2) - 1] = void 0, t = 0;
                  t < n.length;
                  t += 1
                )
                  n[t] = 0;
                var r = 8 * e.length;
                for (t = 0; t < r; t += 8)
                  n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << (t % 32);
                return n;
              }
              function d(e) {
                var t,
                  n,
                  r = "0123456789abcdef",
                  o = "";
                for (n = 0; n < e.length; n += 1)
                  o +=
                    r.charAt(((t = e.charCodeAt(n)) >>> 4) & 15) +
                    r.charAt(15 & t);
                return o;
              }
              function p(e) {
                return unescape(encodeURIComponent(e));
              }
              function f(e) {
                var t;
                return u(c(l((t = p(e))), 8 * t.length));
              }
              function g(e, t) {
                return (function (e, t) {
                  var n,
                    r,
                    o = l(e),
                    i = [],
                    a = [];
                  for (
                    i[15] = a[15] = void 0,
                      o.length > 16 && (o = c(o, 8 * e.length)),
                      n = 0;
                    n < 16;
                    n += 1
                  )
                    ((i[n] = 909522486 ^ o[n]), (a[n] = 1549556828 ^ o[n]));
                  return (
                    (r = c(i.concat(l(t)), 512 + 8 * t.length)),
                    u(c(a.concat(r), 640))
                  );
                })(p(e), p(t));
              }
              function h(e, t, n) {
                return t ? (n ? g(t, e) : d(g(t, e))) : n ? f(e) : d(f(e));
              }
              a.exports ? (a.exports = h) : (e.md5 = h);
            })(u),
            s.exports);
        function d(e) {
          for (
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 25,
              n = [],
              r = 0;
            r < e.length;
            r += t
          ) {
            var o = e.slice(r, r + t).join("");
            n.push(o);
          }
          return n;
        }
        function p(e) {
          var t = RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
            n = window.location.search.substr(1).match(t);
          return null != n ? n[2] : null;
        }
        var f = {
            appid: 1e3,
            appkey: "abcdefg",
            canStartReporting: !1,
            prevRequestTime: 0,
            shouldAggregateReport: 1,
          },
          g = [],
          h = !0,
          m = null,
          w = void 0,
          y = !1,
          b = function (e) {
            w = void 0 !== e ? e : void 0;
          },
          v = function (e) {
            y = e;
          },
          k = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 5,
              t = [],
              n = 0,
              i = !1;
            function a() {
              var e;
              return (
                (e = r().mark(function e(t, n, o) {
                  var i;
                  return r().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ("function" != typeof w) {
                            e.next = 10;
                            break;
                          }
                          return (
                            ((i = {
                              url: t,
                              method: "post",
                              timeout: 2e3,
                              param: n,
                              header: {
                                "Content-type":
                                  "application/x-www-form-urlencoded",
                              },
                            }).AndroidCallback =
                              "kgstathippy_186_" +
                              Math.random().toString().substr(2, 9)),
                            (i = JSON.stringify(i)),
                            (e.next = 6),
                            w("CmdModule", "callCmd", { cmd: 186, params: i })
                          );
                        case 6:
                          (e.sent, o(), (e.next = 12));
                          break;
                        case 10:
                          return (o(), e.abrupt("return", null));
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })),
                (a = function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (r, i) {
                    var a = e.apply(t, n);
                    function s(e) {
                      o(a, r, i, s, c, "next", e);
                    }
                    function c(e) {
                      o(a, r, i, s, c, "throw", e);
                    }
                    s(void 0);
                  });
                }).apply(this, arguments)
              );
            }
            return {
              add: function (r, o) {
                (t.push({ url: r, data: o }),
                  i ||
                    ((i = !0),
                    (function r() {
                      for (; n < e && t.length > 0;) {
                        var o,
                          s,
                          u,
                          l = t.shift();
                        (n++,
                          void 0 !== w
                            ? (function (e, t, n) {
                                return a.apply(this, arguments);
                              })(l.url, l.data, function () {
                                (n--, r());
                              })
                            : c && c.isInClient() && (c.isPigeon() || y)
                              ? ((o = l.url),
                                (s = l.data),
                                (u = function () {
                                  (n--, r());
                                }),
                                c.getData(
                                  {
                                    url: o,
                                    method: "post",
                                    timeout: 2e3,
                                    param: s,
                                    header: {
                                      "Content-type":
                                        "application/x-www-form-urlencoded",
                                    },
                                  },
                                  u,
                                ))
                              : window.wx && "function" == typeof wx.request
                                ? (function (e, t, n) {
                                    wx.request({
                                      url: e,
                                      data: t,
                                      method: "post",
                                      success: function () {
                                        n && n();
                                      },
                                      fail: function () {
                                        n && n();
                                      },
                                    });
                                  })(l.url, l.data, function () {
                                    (n--, r());
                                  })
                                : (function (e, t, n) {
                                    var r = new XMLHttpRequest();
                                    (r.open("post", e, !0),
                                      (r.withCredentials = !0),
                                      r.setRequestHeader(
                                        "Content-type",
                                        "application/x-www-form-urlencoded",
                                      ),
                                      (r.onload = function () {
                                        n && n();
                                      }),
                                      (r.onerror = function () {
                                        n && n();
                                      }),
                                      r.send(t));
                                  })(l.url, l.data, function () {
                                    (n--, r());
                                  }));
                      }
                      (n < e || t.length < e) && (i = !1);
                    })()));
              },
            };
          })(5);
        function S(e, t, n) {
          var r = {
              _t: parseInt(new Date().getTime() / 1e3),
              business: e,
              appid: f.appid,
              split: ";",
            },
            o = (function (e, t, n) {
              var r = "",
                o = [];
              for (var i in e) o.push(i);
              o.sort();
              for (var a = 0, s = o.length; a < s; a++) r += o[a] + e[o[a]];
              return l((r += n.appkey + t));
            })(r, t, f),
            i = "https://webcollects.kugou.com/";
          n && (i = "https://rtwebcollects.kugou.com/");
          var a = ""
            .concat(i, "v3/web/mpost?appid=")
            .concat(r.appid, "&business=")
            .concat(r.business, "&_t=")
            .concat(r._t, "&sign=")
            .concat(o, "&split=")
            .concat(r.split);
          k.add(a, t);
        }
        function j() {
          f.prevRequestTime = Date.now();
          var e,
            t,
            n,
            r = [],
            o = [],
            i = [];
          try {
            if (g && g.length > 0)
              for (var a = 0, s = g.length; a < s; a++) {
                var c = g.pop(),
                  u = c[1];
                try {
                  u = JSON.stringify(u);
                } catch (e) {}
                var l = (function (e) {
                  for (var t = 0, n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    t += r <= 127 ? 1 : r <= 2047 ? 2 : r <= 65535 ? 3 : 4;
                  }
                  return t;
                })(u);
                ((u = "".concat(l).concat(";").concat(u)),
                  30050 == c[0] && u
                    ? o.push(u)
                    : 12 == c[0] && u
                      ? r.push(u)
                      : 30030 == c[0] && u
                        ? i.push(u)
                        : S(c[0], u, !1));
              }
          } catch (e) {}
          ((e = d(r)), (t = d(o)), (n = d(i)));
          for (var p = 0, w = e.length; p < w; p++) S(12, e[p], !0);
          for (var y = 0, b = t.length; y < b; y++) S(30050, t[y], !1);
          for (var v = 0, k = n.length; v < k; v++) S(30030, n[v], !1);
          ((m = null), (h = !1));
        }
        function O() {
          return f.canStartReporting
            ? g && g.length >= 25
              ? (j(), null)
              : h || 2 == f.shouldAggregateReport
                ? void j()
                : Date.now() - f.prevRequestTime > 200
                  ? (j(), null)
                  : (m ||
                      (m = setTimeout(function () {
                        j();
                      }, 200)),
                    null)
            : null;
        }
        var A = function (e) {
          ((f.canStartReporting = !0),
            (f.shouldAggregateReport = e || 1),
            f.prevRequestTime || (f.prevRequestTime = Date.now()),
            (f.prevRequestTime = f.prevRequestTime - 200 - 100));
          try {
            O();
          } catch (e) {}
          return null;
        };
        return {
          kgStatPush: function (e, n, r, o, i) {
            switch (
              (r && b(r),
              o && v(o),
              (e = t(
                t(
                  {},
                  {
                    url: window.location.href,
                    hreffrom: p("hreffrom") || p("fo") || p("from") || "",
                  },
                ),
                e,
              )),
              n)
            ) {
              case 1:
                if (
                  "undefined" != typeof window &&
                  window.external &&
                  window.external.superCall &&
                  "function" == typeof window.external.superCall
                )
                  try {
                    var a = window.external.superCall(788);
                    try {
                      a = JSON.parse(a);
                    } catch (e) {}
                    a &&
                      a.sword_patchid &&
                      e &&
                      !e.sword_ver &&
                      (e = t({ sword_ver: a.sword_patchid }, e));
                  } catch (e) {}
                g.push([12, e, !0]);
                try {
                  O();
                } catch (e) {}
                try {
                  !(function (e) {
                    if (e && e.typeid) {
                      var t = window.location.origin,
                        n =
                          ~t.indexOf("voo.kugou.com") ||
                          ~t.indexOf("http://10.16.4.19:8099") ||
                          ~t.indexOf("//test.kugou.com"),
                        r = window._VO_ACT_ID_;
                      if (n && r) {
                        var o = { typeid: e.typeid, actId: r };
                        c.getData(
                          {
                            url: "https://voo.kugou.com/public/addApmLog",
                            method: "post",
                            timeout: 2e3,
                            param: JSON.stringify(o),
                            header: {
                              "Content-type":
                                "application/x-www-form-urlencoded",
                            },
                          },
                          function (e) {},
                        );
                      }
                    }
                  })(e);
                } catch (e) {}
                break;
              case 2:
                g.push([30050, e, !1]);
                try {
                  O();
                } catch (e) {}
                break;
              case 3:
                g.push([30030, e, !1]);
                try {
                  O();
                } catch (e) {}
                break;
              default:
                var s = n;
                (("number" != typeof s || s <= 0) && (s = 30050),
                  g.push([s, e, !1]));
                try {
                  O();
                } catch (e) {}
            }
            (i && A(),
              setTimeout(function () {
                f.canStartReporting || A();
              }, 1050));
          },
          notifyToStartReporting: A,
        };
      }),
        "object" == i(t)
          ? (e.exports = r())
          : void 0 !== (o = r.call(t, n, t, e)) && (e.exports = o));
    },
    21232: function (e, t, n) {
      "use strict";
      n.d(t, {
        jd: function () {
          return f;
        },
        FY: function () {
          return d;
        },
        Pi: function () {
          return v;
        },
      });
      var r,
        o,
        i,
        a = n(68949),
        s = n(37667),
        c = n.n(s);
      if (!s.useState)
        throw Error("mobx-react-lite requires React with Hooks support");
      if (!a.rC)
        throw Error(
          "mobx-react-lite@3 requires mobx at least version 6 to be available",
        );
      var u = n(19481);
      function l(e) {
        return (0, a.Gf)(e);
      }
      function d() {
        return !1;
      }
      var p = (function () {
          function e(e) {
            var t = this;
            (Object.defineProperty(this, "finalize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e,
            }),
              Object.defineProperty(this, "registrations", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new Map(),
              }),
              Object.defineProperty(this, "sweepTimeout", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "sweep", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  (void 0 === e && (e = 1e4),
                    clearTimeout(t.sweepTimeout),
                    (t.sweepTimeout = void 0));
                  var n = Date.now();
                  (t.registrations.forEach(function (r, o) {
                    n - r.registeredAt >= e &&
                      (t.finalize(r.value), t.registrations.delete(o));
                  }),
                    t.registrations.size > 0 && t.scheduleSweep());
                },
              }),
              Object.defineProperty(this, "finalizeAllImmediately", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  t.sweep(0);
                },
              }));
          }
          return (
            Object.defineProperty(e.prototype, "register", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, n) {
                (this.registrations.set(n, {
                  value: t,
                  registeredAt: Date.now(),
                }),
                  this.scheduleSweep());
              },
            }),
            Object.defineProperty(e.prototype, "unregister", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                this.registrations.delete(e);
              },
            }),
            Object.defineProperty(e.prototype, "scheduleSweep", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                void 0 === this.sweepTimeout &&
                  (this.sweepTimeout = setTimeout(this.sweep, 1e4));
              },
            }),
            e
          );
        })(),
        f = new (
          "undefined" != typeof FinalizationRegistry ? FinalizationRegistry : p
        )(function (e) {
          var t;
          (null === (t = e.reaction) || void 0 === t || t.dispose(),
            (e.reaction = null));
        }),
        g = n(61688);
      function h(e) {
        e.reaction = new a.le("observer".concat(e.name), function () {
          var t;
          ((e.stateVersion = Symbol()),
            null === (t = e.onStoreChange) || void 0 === t || t.call(e));
        });
      }
      var m = "function" == typeof Symbol && Symbol.for,
        w =
          null !==
            (i =
              null ===
                (o = Object.getOwnPropertyDescriptor(function () {}, "name")) ||
              void 0 === o
                ? void 0
                : o.configurable) &&
          void 0 !== i &&
          i,
        y = m
          ? Symbol.for("react.forward_ref")
          : "function" == typeof s.forwardRef &&
            (0, s.forwardRef)(function (e) {
              return null;
            }).$$typeof,
        b = m
          ? Symbol.for("react.memo")
          : "function" == typeof s.memo &&
            (0, s.memo)(function (e) {
              return null;
            }).$$typeof;
      function v(e, t) {
        if (b && e.$$typeof === b)
          throw Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
          );
        var n,
          r =
            null !== (n = null == t ? void 0 : t.forwardRef) &&
            void 0 !== n &&
            n,
          o = e,
          i = e.displayName || e.name;
        if (
          y &&
          e.$$typeof === y &&
          ((r = !0), "function" != typeof (o = e.render))
        )
          throw Error(
            "[mobx-react-lite] `render` property of ForwardRef was not a function",
          );
        var a = function (e, t) {
          return (function (e, t) {
            void 0 === t && (t = "observed");
            var n,
              r,
              o = c().useRef(null);
            if (!o.current) {
              var i = {
                reaction: null,
                onStoreChange: null,
                stateVersion: Symbol(),
                name: t,
                subscribe: function (e) {
                  return (
                    f.unregister(i),
                    (i.onStoreChange = e),
                    i.reaction || (h(i), (i.stateVersion = Symbol())),
                    function () {
                      var e;
                      ((i.onStoreChange = null),
                        null === (e = i.reaction) ||
                          void 0 === e ||
                          e.dispose(),
                        (i.reaction = null));
                    }
                  );
                },
                getSnapshot: function () {
                  return i.stateVersion;
                },
              };
              o.current = i;
            }
            var a = o.current;
            if (
              (a.reaction || (h(a), f.register(o, a, a)),
              c().useDebugValue(a.reaction, l),
              (0, g.useSyncExternalStore)(
                a.subscribe,
                a.getSnapshot,
                a.getSnapshot,
              ),
              a.reaction.track(function () {
                try {
                  n = e();
                } catch (e) {
                  r = e;
                }
              }),
              r)
            )
              throw r;
            return n;
          })(function () {
            return o(e, t);
          }, i);
        };
        return (
          (a.displayName = e.displayName),
          w &&
            Object.defineProperty(a, "name", {
              value: e.name,
              writable: !0,
              configurable: !0,
            }),
          e.contextTypes && (a.contextTypes = e.contextTypes),
          r && (a = (0, s.forwardRef)(a)),
          (function (e, t) {
            Object.keys(e).forEach(function (n) {
              k[n] ||
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(e, n),
                );
            });
          })(e, (a = (0, s.memo)(a))),
          a
        );
      }
      var k = {
        $$typeof: !0,
        render: !0,
        compare: !0,
        type: !0,
        displayName: !0,
      };
      ((r = u.unstable_batchedUpdates) ||
        (r = function (e) {
          e();
        }),
        (0, a.jQ)({ reactionScheduler: r }),
        f.finalizeAllImmediately);
    },
    33562: function (e, t, n) {
      "use strict";
      n.d(t, {
        Pi: function () {
          return v;
        },
        f3: function () {
          return C;
        },
        zt: function () {
          return O;
        },
      });
      var r = n(82561),
        o = n(68949),
        i = n(37667),
        a = n.n(i),
        s = n(21232);
      function c(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      }
      var u = {
          $$typeof: 1,
          render: 1,
          compare: 1,
          type: 1,
          childContextTypes: 1,
          contextType: 1,
          contextTypes: 1,
          defaultProps: 1,
          getDefaultProps: 1,
          getDerivedStateFromError: 1,
          getDerivedStateFromProps: 1,
          mixins: 1,
          displayName: 1,
          propTypes: 1,
        },
        l = Symbol("patchMixins"),
        d = Symbol("patchedDefinition");
      function p(e, t) {
        for (
          var n,
            r = this,
            o = arguments.length,
            i = Array(o > 2 ? o - 2 : 0),
            a = 2;
          a < o;
          a++
        )
          i[a - 2] = arguments[a];
        t.locks++;
        try {
          return (null != e && (n = e.apply(this, i)), n);
        } finally {
          (t.locks--,
            0 === t.locks &&
              t.methods.forEach(function (e) {
                e.apply(r, i);
              }));
        }
      }
      function f(e, t) {
        return function () {
          for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          p.call.apply(p, [this, e, t].concat(r));
        };
      }
      var g = Symbol("ObserverAdministration"),
        h = Symbol("isMobXReactObserver");
      function m(e) {
        var t;
        return null != (t = e[g])
          ? t
          : (e[g] = {
              reaction: null,
              mounted: !1,
              reactionInvalidatedBeforeMount: !1,
              forceUpdate: null,
              name: w(e.constructor),
              state: void 0,
              props: void 0,
              context: void 0,
            });
      }
      function w(e) {
        return e.displayName || e.name || "<component>";
      }
      function y(e) {
        var t = e.bind(this),
          n = m(this);
        return function () {
          n.reaction ||
            ((n.reaction =
              ((e = n),
              new o.le(e.name + ".render()", function () {
                if (!e.mounted) {
                  e.reactionInvalidatedBeforeMount = !0;
                  return;
                }
                try {
                  null == e.forceUpdate || e.forceUpdate();
                } catch (n) {
                  var t;
                  (null == (t = e.reaction) || t.dispose(),
                    (e.reaction = null));
                }
              }))),
            n.mounted || s.jd.register(this, n, this));
          var e,
            r = void 0,
            i = void 0;
          if (
            (n.reaction.track(function () {
              try {
                i = (0, o.$$)(!1, t);
              } catch (e) {
                r = e;
              }
            }),
            r)
          )
            throw r;
          return i;
        };
      }
      function b(e, t) {
        return (
          (0, s.FY)() &&
            console.warn(
              "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
            ),
          this.state !== t ||
            !(function (e, t) {
              if (c(e, t)) return !0;
              if (
                "object" !== (0, r.Z)(e) ||
                null === e ||
                "object" !== (0, r.Z)(t) ||
                null === t
              )
                return !1;
              var n = Object.keys(e),
                o = Object.keys(t);
              if (n.length !== o.length) return !1;
              for (var i = 0; i < n.length; i++)
                if (
                  !Object.hasOwnProperty.call(t, n[i]) ||
                  !c(e[n[i]], t[n[i]])
                )
                  return !1;
              return !0;
            })(this.props, e)
        );
      }
      function v(e, t) {
        if (t && "class" !== t.kind)
          throw Error("The @observer decorator can be used on classes only");
        return (!0 === e.isMobxInjector &&
          console.warn(
            "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
          ),
        Object.prototype.isPrototypeOf.call(i.Component, e) ||
          Object.prototype.isPrototypeOf.call(i.PureComponent, e))
          ? (function (e) {
              var t = e.prototype;
              if (e[h])
                throw Error(
                  "The provided component class (" +
                    w(e) +
                    ") has already been declared as an observer component.",
                );
              if (((e[h] = !0), t.componentWillReact))
                throw Error(
                  "The componentWillReact life-cycle event is no longer supported",
                );
              if (e.__proto__ !== i.PureComponent) {
                if (t.shouldComponentUpdate) {
                  if (t.shouldComponentUpdate !== b)
                    throw Error(
                      "It is not allowed to use shouldComponentUpdate in observer based components.",
                    );
                } else t.shouldComponentUpdate = b;
              }
              var n = t.render;
              if ("function" != typeof n)
                throw Error(
                  "[mobx-react] class component (" +
                    w(e) +
                    ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
                );
              t.render = function () {
                return (
                  Object.defineProperty(this, "render", {
                    configurable: !1,
                    writable: !1,
                    value: (0, s.FY)() ? n : y.call(this, n),
                  }),
                  this.render()
                );
              };
              var r = t.componentDidMount;
              return (
                (t.componentDidMount = function () {
                  var e = this,
                    t = m(this);
                  return (
                    (t.mounted = !0),
                    s.jd.unregister(this),
                    (t.forceUpdate = function () {
                      return e.forceUpdate();
                    }),
                    (!t.reaction || t.reactionInvalidatedBeforeMount) &&
                      t.forceUpdate(),
                    null == r ? void 0 : r.apply(this, arguments)
                  );
                }),
                !(function (e, t, n) {
                  var r,
                    o,
                    i =
                      (((o = (r = e[l] = e[l] || {})[t] = r[t] || {}).locks =
                        o.locks || 0),
                      (o.methods = o.methods || []),
                      o);
                  0 > i.methods.indexOf(n) && i.methods.push(n);
                  var a = Object.getOwnPropertyDescriptor(e, t);
                  if (!a || !a[d]) {
                    var s = e[t],
                      c = (function e(t, n, r, o, i) {
                        var a,
                          s = f(i, o);
                        return (
                          ((a = {})[d] = !0),
                          (a.get = function () {
                            return s;
                          }),
                          (a.set = function (i) {
                            if (this === t) s = f(i, o);
                            else {
                              var a = e(this, n, r, o, i);
                              Object.defineProperty(this, n, a);
                            }
                          }),
                          (a.configurable = !0),
                          (a.enumerable = r),
                          a
                        );
                      })(e, t, a ? a.enumerable : void 0, i, s);
                    Object.defineProperty(e, t, c);
                  }
                })(t, "componentWillUnmount", function () {
                  if (!(0, s.FY)()) {
                    var e,
                      t = m(this);
                    (null == (e = t.reaction) || e.dispose(),
                      (t.reaction = null),
                      (t.forceUpdate = null),
                      (t.mounted = !1),
                      (t.reactionInvalidatedBeforeMount = !1));
                  }
                }),
                e
              );
            })(e)
          : (0, s.Pi)(e);
      }
      function k() {
        return (k = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(null, arguments);
      }
      var S = ["children"],
        j = a().createContext({});
      function O(e) {
        var t = e.children,
          n = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (-1 !== t.indexOf(r)) continue;
                n[r] = e[r];
              }
            return n;
          })(e, S),
          r = a().useContext(j),
          o = a().useRef(k({}, r, n)).current;
        return a().createElement(j.Provider, { value: o }, t);
      }
      function A(e, t, n, r) {
        var o,
          i,
          s,
          c = a().forwardRef(function (n, r) {
            var o = k({}, n);
            return (
              Object.assign(o, e(a().useContext(j) || {}, o) || {}),
              r && (o.ref = r),
              a().createElement(t, o)
            );
          });
        return (
          r && (c = v(c)),
          (c.isMobxInjector = !0),
          !(function (e, t) {
            var n = Object.getOwnPropertyNames(Object.getPrototypeOf(e));
            Object.getOwnPropertyNames(e).forEach(function (r) {
              u[r] ||
                -1 !== n.indexOf(r) ||
                Object.defineProperty(
                  t,
                  r,
                  Object.getOwnPropertyDescriptor(e, r),
                );
            });
          })(t, c),
          (c.wrappedComponent = t),
          (c.displayName =
            ((o = t),
            (i = n),
            (s =
              o.displayName ||
              o.name ||
              (o.constructor && o.constructor.name) ||
              "Component"),
            i ? "inject-with-" + i + "(" + s + ")" : "inject(" + s + ")")),
          c
        );
      }
      function C() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if ("function" != typeof arguments[0])
          return function (e) {
            return A(
              function (e, n) {
                return (
                  t.forEach(function (t) {
                    if (!(t in n)) {
                      if (!(t in e))
                        throw Error(
                          "MobX injector: Store '" +
                            t +
                            "' is not available! Make sure it is provided by some Provider",
                        );
                      n[t] = e[t];
                    }
                  }),
                  n
                );
              },
              e,
              t.join("-"),
              !1,
            );
          };
        var r = arguments[0];
        return function (e) {
          return A(r, e, r.name, !0);
        };
      }
      if (((O.displayName = "MobXProvider"), a().version, !i.Component))
        throw Error("mobx-react requires React to be available");
      if (!o.LO) throw Error("mobx-react requires mobx to be available");
    },
    27484: function (e) {
      var t, n, r, o, i, a, s, c, u, l, d, p, f, g, h, m, w, y, b, v, k, S;
      e.exports =
        ((t = "millisecond"),
        (n = "second"),
        (r = "minute"),
        (o = "hour"),
        (i = "week"),
        (a = "month"),
        (s = "quarter"),
        (c = "year"),
        (u = "date"),
        (l = "Invalid Date"),
        (d =
          /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/),
        (p =
          /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g),
        (f = function (e, t, n) {
          var r = String(e);
          return !r || r.length >= t
            ? e
            : "" + Array(t + 1 - r.length).join(n) + e;
        }),
        ((h = {})[(g = "en")] = {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_",
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_",
            ),
          ordinal: function (e) {
            var t = ["th", "st", "nd", "rd"],
              n = e % 100;
            return "[" + e + (t[(n - 20) % 10] || t[n] || "th") + "]";
          },
        }),
        (m = "$isDayjsObject"),
        (w = function (e) {
          return e instanceof k || !(!e || !e[m]);
        }),
        (y = function e(t, n, r) {
          var o;
          if (!t) return g;
          if ("string" == typeof t) {
            var i = t.toLowerCase();
            (h[i] && (o = i), n && ((h[i] = n), (o = i)));
            var a = t.split("-");
            if (!o && a.length > 1) return e(a[0]);
          } else {
            var s = t.name;
            ((h[s] = t), (o = s));
          }
          return (!r && o && (g = o), o || (!r && g));
        }),
        (b = function (e, t) {
          if (w(e)) return e.clone();
          var n = "object" == typeof t ? t : {};
          return ((n.date = e), (n.args = arguments), new k(n));
        }),
        ((v = {
          s: f,
          z: function (e) {
            var t = -e.utcOffset(),
              n = Math.abs(t);
            return (
              (t <= 0 ? "+" : "-") +
              f(Math.floor(n / 60), 2, "0") +
              ":" +
              f(n % 60, 2, "0")
            );
          },
          m: function e(t, n) {
            if (t.date() < n.date()) return -e(n, t);
            var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
              o = t.clone().add(r, a),
              i = n - o < 0,
              s = t.clone().add(r + (i ? -1 : 1), a);
            return +(-(r + (n - o) / (i ? o - s : s - o)) || 0);
          },
          a: function (e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
          },
          p: function (e) {
            return (
              {
                M: a,
                y: c,
                w: i,
                d: "day",
                D: u,
                h: o,
                m: r,
                s: n,
                ms: t,
                Q: s,
              }[e] ||
              String(e || "")
                .toLowerCase()
                .replace(/s$/, "")
            );
          },
          u: function (e) {
            return void 0 === e;
          },
        }).l = y),
        (v.i = w),
        (v.w = function (e, t) {
          return b(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset });
        }),
        (S = (k = (function () {
          function e(e) {
            ((this.$L = y(e.locale, null, !0)),
              this.parse(e),
              (this.$x = this.$x || e.x || {}),
              (this[m] = !0));
          }
          var f = e.prototype;
          return (
            (f.parse = function (e) {
              ((this.$d = (function (e) {
                var t = e.date,
                  n = e.utc;
                if (null === t) return new Date(NaN);
                if (v.u(t)) return new Date();
                if (t instanceof Date) return new Date(t);
                if ("string" == typeof t && !/Z$/i.test(t)) {
                  var r = t.match(d);
                  if (r) {
                    var o = r[2] - 1 || 0,
                      i = (r[7] || "0").substring(0, 3);
                    return n
                      ? new Date(
                          Date.UTC(
                            r[1],
                            o,
                            r[3] || 1,
                            r[4] || 0,
                            r[5] || 0,
                            r[6] || 0,
                            i,
                          ),
                        )
                      : new Date(
                          r[1],
                          o,
                          r[3] || 1,
                          r[4] || 0,
                          r[5] || 0,
                          r[6] || 0,
                          i,
                        );
                  }
                }
                return new Date(t);
              })(e)),
                this.init());
            }),
            (f.init = function () {
              var e = this.$d;
              ((this.$y = e.getFullYear()),
                (this.$M = e.getMonth()),
                (this.$D = e.getDate()),
                (this.$W = e.getDay()),
                (this.$H = e.getHours()),
                (this.$m = e.getMinutes()),
                (this.$s = e.getSeconds()),
                (this.$ms = e.getMilliseconds()));
            }),
            (f.$utils = function () {
              return v;
            }),
            (f.isValid = function () {
              return this.$d.toString() !== l;
            }),
            (f.isSame = function (e, t) {
              var n = b(e);
              return this.startOf(t) <= n && n <= this.endOf(t);
            }),
            (f.isAfter = function (e, t) {
              return b(e) < this.startOf(t);
            }),
            (f.isBefore = function (e, t) {
              return this.endOf(t) < b(e);
            }),
            (f.$g = function (e, t, n) {
              return v.u(e) ? this[t] : this.set(n, e);
            }),
            (f.unix = function () {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (f.valueOf = function () {
              return this.$d.getTime();
            }),
            (f.startOf = function (e, t) {
              var s = this,
                l = !!v.u(t) || t,
                d = v.p(e),
                p = function (e, t) {
                  var n = v.w(
                    s.$u ? Date.UTC(s.$y, t, e) : new Date(s.$y, t, e),
                    s,
                  );
                  return l ? n : n.endOf("day");
                },
                f = function (e, t) {
                  return v.w(
                    s
                      .toDate()
                      [e].apply(
                        s.toDate("s"),
                        (l ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t),
                      ),
                    s,
                  );
                },
                g = this.$W,
                h = this.$M,
                m = this.$D,
                w = "set" + (this.$u ? "UTC" : "");
              switch (d) {
                case c:
                  return l ? p(1, 0) : p(31, 11);
                case a:
                  return l ? p(1, h) : p(0, h + 1);
                case i:
                  var y = this.$locale().weekStart || 0,
                    b = (g < y ? g + 7 : g) - y;
                  return p(l ? m - b : m + (6 - b), h);
                case "day":
                case u:
                  return f(w + "Hours", 0);
                case o:
                  return f(w + "Minutes", 1);
                case r:
                  return f(w + "Seconds", 2);
                case n:
                  return f(w + "Milliseconds", 3);
                default:
                  return this.clone();
              }
            }),
            (f.endOf = function (e) {
              return this.startOf(e, !1);
            }),
            (f.$set = function (e, i) {
              var s,
                l = v.p(e),
                d = "set" + (this.$u ? "UTC" : ""),
                p = (((s = {}).day = d + "Date"),
                (s[u] = d + "Date"),
                (s[a] = d + "Month"),
                (s[c] = d + "FullYear"),
                (s[o] = d + "Hours"),
                (s[r] = d + "Minutes"),
                (s[n] = d + "Seconds"),
                (s[t] = d + "Milliseconds"),
                s)[l],
                f = "day" === l ? this.$D + (i - this.$W) : i;
              if (l === a || l === c) {
                var g = this.clone().set(u, 1);
                (g.$d[p](f),
                  g.init(),
                  (this.$d = g.set(u, Math.min(this.$D, g.daysInMonth())).$d));
              } else p && this.$d[p](f);
              return (this.init(), this);
            }),
            (f.set = function (e, t) {
              return this.clone().$set(e, t);
            }),
            (f.get = function (e) {
              return this[v.p(e)]();
            }),
            (f.add = function (e, t) {
              var s,
                u = this;
              e = Number(e);
              var l = v.p(t),
                d = function (t) {
                  var n = b(u);
                  return v.w(n.date(n.date() + Math.round(t * e)), u);
                };
              if (l === a) return this.set(a, this.$M + e);
              if (l === c) return this.set(c, this.$y + e);
              if ("day" === l) return d(1);
              if (l === i) return d(7);
              var p =
                  (((s = {})[r] = 6e4), (s[o] = 36e5), (s[n] = 1e3), s)[l] || 1,
                f = this.$d.getTime() + e * p;
              return v.w(f, this);
            }),
            (f.subtract = function (e, t) {
              return this.add(-1 * e, t);
            }),
            (f.format = function (e) {
              var t = this,
                n = this.$locale();
              if (!this.isValid()) return n.invalidDate || l;
              var r = e || "YYYY-MM-DDTHH:mm:ssZ",
                o = v.z(this),
                i = this.$H,
                a = this.$m,
                s = this.$M,
                c = n.weekdays,
                u = n.months,
                d = n.meridiem,
                f = function (e, n, o, i) {
                  return (e && (e[n] || e(t, r))) || o[n].slice(0, i);
                },
                g = function (e) {
                  return v.s(i % 12 || 12, e, "0");
                },
                h =
                  d ||
                  function (e, t, n) {
                    var r = e < 12 ? "AM" : "PM";
                    return n ? r.toLowerCase() : r;
                  };
              return r.replace(p, function (e, r) {
                return (
                  r ||
                  (function (e) {
                    switch (e) {
                      case "YY":
                        return String(t.$y).slice(-2);
                      case "YYYY":
                        return v.s(t.$y, 4, "0");
                      case "M":
                        return s + 1;
                      case "MM":
                        return v.s(s + 1, 2, "0");
                      case "MMM":
                        return f(n.monthsShort, s, u, 3);
                      case "MMMM":
                        return f(u, s);
                      case "D":
                        return t.$D;
                      case "DD":
                        return v.s(t.$D, 2, "0");
                      case "d":
                        return String(t.$W);
                      case "dd":
                        return f(n.weekdaysMin, t.$W, c, 2);
                      case "ddd":
                        return f(n.weekdaysShort, t.$W, c, 3);
                      case "dddd":
                        return c[t.$W];
                      case "H":
                        return String(i);
                      case "HH":
                        return v.s(i, 2, "0");
                      case "h":
                        return g(1);
                      case "hh":
                        return g(2);
                      case "a":
                        return h(i, a, !0);
                      case "A":
                        return h(i, a, !1);
                      case "m":
                        return String(a);
                      case "mm":
                        return v.s(a, 2, "0");
                      case "s":
                        return String(t.$s);
                      case "ss":
                        return v.s(t.$s, 2, "0");
                      case "SSS":
                        return v.s(t.$ms, 3, "0");
                      case "Z":
                        return o;
                    }
                    return null;
                  })(e) ||
                  o.replace(":", "")
                );
              });
            }),
            (f.utcOffset = function () {
              return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
            }),
            (f.diff = function (e, t, u) {
              var l,
                d = this,
                p = v.p(t),
                f = b(e),
                g = (f.utcOffset() - this.utcOffset()) * 6e4,
                h = this - f,
                m = function () {
                  return v.m(d, f);
                };
              switch (p) {
                case c:
                  l = m() / 12;
                  break;
                case a:
                  l = m();
                  break;
                case s:
                  l = m() / 3;
                  break;
                case i:
                  l = (h - g) / 6048e5;
                  break;
                case "day":
                  l = (h - g) / 864e5;
                  break;
                case o:
                  l = h / 36e5;
                  break;
                case r:
                  l = h / 6e4;
                  break;
                case n:
                  l = h / 1e3;
                  break;
                default:
                  l = h;
              }
              return u ? l : v.a(l);
            }),
            (f.daysInMonth = function () {
              return this.endOf(a).$D;
            }),
            (f.$locale = function () {
              return h[this.$L];
            }),
            (f.locale = function (e, t) {
              if (!e) return this.$L;
              var n = this.clone(),
                r = y(e, t, !0);
              return (r && (n.$L = r), n);
            }),
            (f.clone = function () {
              return v.w(this.$d, this);
            }),
            (f.toDate = function () {
              return new Date(this.valueOf());
            }),
            (f.toJSON = function () {
              return this.isValid() ? this.toISOString() : null;
            }),
            (f.toISOString = function () {
              return this.$d.toISOString();
            }),
            (f.toString = function () {
              return this.$d.toUTCString();
            }),
            e
          );
        })()).prototype),
        (b.prototype = S),
        [
          ["$ms", t],
          ["$s", n],
          ["$m", r],
          ["$H", o],
          ["$W", "day"],
          ["$M", a],
          ["$y", c],
          ["$D", u],
        ].forEach(function (e) {
          S[e[1]] = function (t) {
            return this.$g(t, e[0], e[1]);
          };
        }),
        (b.extend = function (e, t) {
          return (e.$i || (e(t, k, b), (e.$i = !0)), b);
        }),
        (b.locale = y),
        (b.isDayjs = w),
        (b.unix = function (e) {
          return b(1e3 * e);
        }),
        (b.en = h[g]),
        (b.Ls = h),
        (b.p = {}),
        b);
    },
    17950: function (e, t, n) {
      var r,
        o,
        i = n(67521);
      ((r = function () {
        "use strict";
        function e(e, t) {
          var n,
            r = Object.keys(e);
          return (
            Object.getOwnPropertySymbols &&
              ((n = Object.getOwnPropertySymbols(e)),
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
              r.push.apply(r, n)),
            r
          );
        }
        function t(t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? e(Object(r), !0).forEach(function (e) {
                  var n, o;
                  ((n = t),
                    (e = r[(o = e)]),
                    o in n
                      ? Object.defineProperty(n, o, {
                          value: e,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (n[o] = e));
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : e(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e),
                    );
                  });
          }
          return t;
        }
        var n = {
          str2Json: function (e) {
            var t = {};
            if ("[object String]" === Object.prototype.toString.call(e))
              try {
                t = JSON.parse(e);
              } catch (e) {
                t = {};
              }
            return t;
          },
          json2Str: function (e) {
            var t = e;
            if ("string" != typeof e)
              try {
                t = JSON.stringify(e);
              } catch (e) {
                t = "";
              }
            return t;
          },
          cbNum: 0,
          isIOS: !!navigator.userAgent.match(/KGBrowser/gi),
          isKugouAndroid: !!navigator.userAgent.match(/kugouandroid/gi),
          isAndroid:
            "undefined" != typeof external && void 0 !== external.superCall,
          isDKAPP: !!navigator.userAgent.match(/kgshortvideo/gi),
          isKGRing: !!navigator.userAgent.match(/KGRingCode/gi),
          isFXAPP: !!navigator.userAgent.match(/Fanxing/gi),
          isChangAPPFXWebview: !!navigator.userAgent.match(/ChangChang/gi),
          isFXQianBanAPP: !!navigator.userAgent.match(/QianBan/gi),
          isIframePage: window.parent && window.parent != window,
          isInClient: function () {
            return (
              !(!n.isAndroid && !n.isKugouAndroid) ||
              !!n.isIOS ||
              !!n.isFXAPP ||
              !!n.isFXQianBanAPP ||
              !!n.isDKAPP ||
              !!n.isKGRing
            );
          },
          loadUrl: function (e) {
            var t = document.createElement("iframe");
            (t.setAttribute("src", e),
              t.setAttribute("style", "display:none;"),
              t.setAttribute("height", "0px"),
              t.setAttribute("width", "0px"),
              t.setAttribute("frameborder", "0"),
              document.body.appendChild(t),
              t.parentNode.removeChild(t),
              (t = null));
          },
          mobileCallInIframe: function (e, t, n) {
            ((e = { type: "KgMobileCall", cmd: e }),
              t && (e.dataJson = t),
              n && (e.cbName = n),
              (e.source = "personal"),
              window.parent.postMessage(e, "*"));
          },
          receiveMessage: function (e) {
            var t = e.data;
            ("KgMobileCall" == t.type &&
              window[t.cbName] &&
              (t.dataJson ? window[t.cbName](t.dataJson) : window[t.cbName](),
              (window[t.cbName] = null)),
              "KgWebMobileCall" == t.type &&
                ((e = t.funcName.split(".")),
                window.KgWebMobileCall &&
                  window.KgWebMobileCall[e[1]] &&
                  (t.dataJson
                    ? KgWebMobileCall[e[1]](t.dataJson)
                    : KgWebMobileCall[e[1]]())));
          },
          callCmd: function (e) {
            var t,
              r,
              o = n.isKugouAndroid
                ? "kugoujsbridge"
                : n.isAndroid
                  ? "superCall"
                  : n.isFXAPP || n.isFXQianBanAPP || n.isChangAPPFXWebview
                    ? "fanxing2"
                    : "kugouurl";
            if (
              "kugoujsbridge" ==
              (o = e && e.useMobileCallType ? e.useMobileCallType : o)
            ) {
              var i = {},
                a = "";
              (e.cmd && (i.cmd = e.cmd),
                e.jsonStr && (i.jsonStr = e.jsonStr),
                e.callback &&
                  (n.cbNum++,
                  (a =
                    "kgandroidmobilecall_" +
                    (e.cmd || 0) +
                    "_" +
                    n.cbNum +
                    Math.random().toString().substr(2, 9)),
                  (window[a] = function (t, r) {
                    if (void 0 !== t) {
                      if (
                        "[object String]" === Object.prototype.toString.call(t)
                      ) {
                        try {
                          t =
                            "#" === r
                              ? decodeURIComponent(t)
                              : decodeURIComponent(decodeURIComponent(t));
                        } catch (e) {
                          console.error("decodeURIComponent", e);
                        }
                        e.callback(n.str2Json(t));
                      } else e.callback(t);
                    }
                  }),
                  e.AndroidCallback
                    ? (((s = n.str2Json(e.jsonStr)).AndroidCallback = a),
                      (e.jsonStr = n.json2Str(s)),
                      e.jsonStr && (i.jsonStr = e.jsonStr))
                    : (i.callback = a)));
              var s = encodeURIComponent(JSON.stringify(i)),
                s = "kugoujsbridge://start.kugou_jsbridge/?".concat(s);
              n.isIframePage
                ? n.mobileCallInIframe(i.cmd, i.jsonStr, a)
                : n.loadUrl(s);
            } else if ("superCall" == o) {
              if (((i = ""), (a = ""), e.jsonStr)) {
                if (
                  (e.callback &&
                    "" !== e.callback &&
                    !0 === e.AndroidCallback &&
                    (n.cbNum++,
                    (a =
                      "kgmobilecall_" +
                      (e.cmd || 0) +
                      "_" +
                      n.cbNum +
                      Math.random().toString().substr(2, 9)),
                    (window[a] = function (t, r) {
                      if (void 0 !== t) {
                        if (
                          "[object String]" ===
                          Object.prototype.toString.call(t)
                        ) {
                          try {
                            t =
                              "#" === r
                                ? decodeURIComponent(t)
                                : decodeURIComponent(decodeURIComponent(t));
                          } catch (e) {
                            console.error(
                              "decodeURIComponent",
                              decodeURIComponent,
                            );
                          }
                          e.callback(n.str2Json(t));
                        } else e.callback(t);
                      }
                    }),
                    ((s = n.str2Json(e.jsonStr)).AndroidCallback = a),
                    (e.jsonStr = n.json2Str(s))),
                  n.isIframePage && e.AndroidCallback)
                )
                  n.mobileCallInIframe(e.cmd, e.jsonStr, a);
                else
                  try {
                    i = external.superCall(e.cmd, e.jsonStr);
                  } catch (e) {}
              } else
                try {
                  i = external.superCall(e.cmd);
                } catch (e) {}
              e.AndroidCallback ||
                (e.callback &&
                  "" !== e.callback &&
                  "AndroidCallback" != i &&
                  ((i = n.str2Json(i)), e.callback(i)));
            } else
              "fanxing2" == o
                ? ((o = r = ""),
                  (r = e.callback
                    ? (n.cbNum++,
                      (o =
                        "kgmobilecall_" +
                        (e.cmd || 0) +
                        "_" +
                        n.cbNum +
                        Math.random().toString().substr(2, 9)),
                      (window[o] = function (t) {
                        void 0 !== t &&
                          e.callback &&
                          ("[object String]" ===
                          Object.prototype.toString.call(t)
                            ? e.callback(n.str2Json(t))
                            : e.callback(t));
                      }),
                      e.jsonStr
                        ? 'fanxing2://send.message/?{"cmd":' +
                          e.cmd +
                          ', "jsonStr":' +
                          e.jsonStr +
                          ', "callback":"' +
                          o +
                          '"}'
                        : 'fanxing2://send.message/?{"cmd":' +
                          e.cmd +
                          ', "callback":"' +
                          o +
                          '"}')
                    : e.jsonStr
                      ? 'fanxing2://send.message/?{"cmd":' +
                        e.cmd +
                        ', "jsonStr":' +
                        e.jsonStr +
                        "}"
                      : 'fanxing2://send.message/?{"cmd":' + e.cmd + "}"),
                  n.isIframePage
                    ? n.mobileCallInIframe(e.cmd, e.jsonStr, o)
                    : navigator.userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
                      ? external && external.callFanxing
                        ? ((t = {
                            cmd: e.cmd,
                            jsonStr: e.jsonStr || "",
                            callback: o,
                          }),
                          external.callFanxing(JSON.stringify(t)))
                        : window.prompt(r)
                      : n.loadUrl(r))
                : ((r = t = ""),
                  e.callback &&
                    (n.cbNum++,
                    (r =
                      "kgmobilecall_" +
                      (e.cmd || 0) +
                      "_" +
                      n.cbNum +
                      Math.random().toString().substr(2, 9)),
                    (window[r] = function (t) {
                      void 0 !== t &&
                        e.callback &&
                        ("[object String]" === Object.prototype.toString.call(t)
                          ? e.callback(n.str2Json(t))
                          : e.callback(t));
                    })),
                  r &&
                    "" != r &&
                    e.jsonStr &&
                    (t =
                      'kugouurl://start.music/?{"cmd":' +
                      e.cmd +
                      ', "jsonStr":' +
                      e.jsonStr +
                      ', "callback":"' +
                      r +
                      '"}'),
                  r &&
                    "" != r &&
                    !e.jsonStr &&
                    (t =
                      'kugouurl://start.music/?{"cmd":' +
                      e.cmd +
                      ', "callback":"' +
                      r +
                      '"}'),
                  "" == r &&
                    e.jsonStr &&
                    (t =
                      'kugouurl://start.music/?{"cmd":' +
                      e.cmd +
                      ', "jsonStr":' +
                      e.jsonStr +
                      "}"),
                  "" != r ||
                    e.jsonStr ||
                    (t = 'kugouurl://start.music/?{"cmd":' + e.cmd + "}"),
                  n.isIframePage
                    ? n.mobileCallInIframe(e.cmd, e.jsonStr, r)
                    : n.loadUrl(t));
          },
          sendCommandOrder: function (e) {
            var t = window.location.origin,
              r =
                ~t.indexOf("voo.kugou.com") ||
                ~t.indexOf("http://10.16.4.19:8099") ||
                ~t.indexOf("http://test.kugou.com:8099"),
              o = window._VO_ACT_ID_;
            r &&
              o &&
              e &&
              ((e = { actId: o, cmd: e }),
              (e = n.json2Str({
                url: "".concat(t, "/public/addCommandOrder"),
                method: "post",
                param: n.json2Str(e),
                header: { "Content-Type": "application/json" },
                AndroidCallback: !0,
              })),
              n.callCmd({
                cmd: 186,
                jsonStr: e,
                callback: function (e) {
                  ~window.location.href.indexOf("debugCmd") && console.log(e);
                },
              }));
          },
          formatUAMethod: function () {
            var e = { os: "", app: "" };
            return (
              n.isIOS
                ? ((e.os = "iphone"),
                  navigator.userAgent.match(/ipad/gi) && (e.os = "ipad"))
                : n.isAndroid || n.isKugouAndroid
                  ? (e.os = "android")
                  : navigator.userAgent.match(/iphone/gi)
                    ? (e.os = "iphone")
                    : navigator.userAgent.match(/ipad/gi)
                      ? (e.os = "ipad")
                      : navigator.userAgent.match(/android/gi)
                        ? (e.os = "android")
                        : navigator.userAgent.match(/openharmony/gi)
                          ? (e.os = "harmony")
                          : (e.os = "other"),
              n.isDKAPP
                ? (e.app = "kgshortvideo")
                : n.isAndroid || n.isKugouAndroid || n.isIOS
                  ? (e.app = "kugou")
                  : n.isKGRing
                    ? (e.app = "KGRingCode")
                    : n.isFXAPP
                      ? (e.app = "Fanxing")
                      : navigator.userAgent.match(/micromessenger/gi) &&
                          !navigator.userAgent.match(/wxwork/gi)
                        ? (e.app = "weixin")
                        : navigator.userAgent.match(/micromessenger/gi) &&
                            navigator.userAgent.match(/wxwork/gi)
                          ? (e.app = "wxwork")
                          : navigator.userAgent.match(/weibo/gi)
                            ? (e.app = "weibo")
                            : (navigator.userAgent.match(/android/gi) &&
                                  navigator.userAgent.match(/qq/gi) &&
                                  navigator.userAgent.match(/mqqbrowser/gi)) ||
                                (("iphone" === e.os || "ipad" === e.os) &&
                                  navigator.userAgent.match(/ qq/gi))
                              ? (e.app = "qq")
                              : (e.app = "other"),
              e
            );
          },
        };
        return {
          isIOS: n.isIOS,
          isKugouAndroid: n.isKugouAndroid,
          isAndroid: n.isAndroid,
          isFXAPP: n.isFXAPP,
          isFXQianBanAPP: n.isFXQianBanAPP,
          isDKAPP: n.isDKAPP,
          isKGRing: n.isKGRing,
          formatUA: n.formatUAMethod(),
          isInClient: function () {
            return n.isInClient();
          },
          mobileCall: function (e, r, o, i) {
            var a = "";
            if ((r && (a = n.json2Str(r)), !e))
              return (console.error("请输入命令号！"), !1);
            if (
              ((r = {}),
              e && (r.cmd = e),
              "" != a && (r.jsonStr = a),
              o && (r.callback = o),
              (r = t(t({}, r), i)),
              !e || (186 != e && 225 != e) || (o && (r.AndroidCallback = !0)),
              r.AndroidCallback && !r.jsonStr && (r.jsonStr = {}),
              n.isInClient())
            ) {
              n.callCmd(r);
              try {
                n.sendCommandOrder(e);
              } catch (e) {}
            } else o && o({ status: 0, error: "不在客户端内" });
          },
          KgWebMobileCall: function (e, t) {
            if (e)
              try {
                n.isIframePage &&
                  window.parent.postMessage(
                    { type: "KgWebMobileCall", funcName: e },
                    "*",
                  );
                var r = e.split(".");
                r.reduce(function (n, o) {
                  if (n[o]) {
                    if (o !== r[r.length - 1]) return n[o];
                    var i = n[o];
                    return "function" == typeof i
                      ? ((n[o] = function () {
                          (i && i.apply(void 0, arguments),
                            t && t.apply(void 0, arguments));
                        }),
                        n[o])
                      : (console.error(
                          "请检查，当前环境变量已注册了对象：" +
                            e +
                            "，且该对象不是方法",
                        ),
                        null);
                  }
                  return (
                    o === r[r.length - 1]
                      ? (n[o] = function () {
                          t && t.apply(void 0, arguments);
                        })
                      : (n[o] = {}),
                    n[o]
                  );
                }, window);
              } catch (e) {}
          },
        };
      }),
        "object" == i(t)
          ? (e.exports = r())
          : void 0 !== (o = r.call(t, n, t, e)) && (e.exports = o));
    },
    17044: function (e, t, n) {
      "use strict";
      var r = n(17950),
        o = n.n(r);
      t.Z = o();
    },
    14142: function (e, t, n) {
      var r,
        o,
        i = n(67521);
      ((r = function () {
        "use strict";
        function e(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function t(t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? e(Object(r), !0).forEach(function (e) {
                  var n, o, a;
                  ((n = t),
                    (o = e),
                    (a = r[e]),
                    (o = (function (e) {
                      var t = (function (e, t) {
                        if ("object" !== i(e) || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var r = n.call(e, t || "default");
                          if ("object" !== i(r)) return r;
                          throw TypeError(
                            "@@toPrimitive must return a primitive value.",
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" === i(t) ? t : String(t);
                    })(o)) in n
                      ? Object.defineProperty(n, o, {
                          value: a,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (n[o] = a));
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : e(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e),
                    );
                  });
          }
          return t;
        }
        function n(e) {
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function r(e) {
          var t = "cb" + new Date().getTime();
          window[t] = function (t) {
            "string" == typeof t ? e.success(JSON.parse(t)) : e.success(t);
          };
          var n = document.createElement("script");
          for (var r in ((n.src = e.url + "&callback=" + t), e.data))
            n.src += "&" + r + "=" + e.data[r];
          document.getElementsByTagName("body")[0].appendChild(n);
        }
        var o = (function () {
            function e() {
              var e = window.location.host;
              (-1 !=
              "m3ws.kugou.com,ep.kugou.com,activity.kugou.com,h5.kugou.com,m.kugou.com".indexOf(
                e,
              )
                ? (this.useNewShare = !1)
                : -1 !=
                    "m3ws.kugou.com,mtpls.kugou.com,h5.kugou.com,m.kugou.com".indexOf(
                      e,
                    )
                  ? (this.useNewShare = !0)
                  : ((this.useNewShare = !1), (this.OffTheWhiteList = !0)),
                (this.hasCheck = !1),
                (this.hasRegister = !1),
                (this.hasReady = !1),
                (this.cbBus = []),
                (this.jsApiList = [
                  "launchApplication",
                  "onMenuShareTimeline",
                  "onMenuShareAppMessage",
                  "onMenuShareQQ",
                  "onMenuShareWeibo",
                  "onMenuShareQZone",
                  "updateAppMessageShareData",
                  "updateTimelineShareData",
                ]),
                (this.version = "1.4"));
            }
            return (
              window.kgWxEnvir ||
                ((window.kgWxEnvir = new e()),
                (window.hash = window.location.hash),
                "onhashchange" in window &&
                (void 0 === document.documentMode || 8 == document.documentMode)
                  ? (window.onhashchange = function () {
                      ((window.kgWxEnvir.hasCheck = !1),
                        (window.kgWxEnvir.hasRegister = !1),
                        (window.kgWxEnvir.hasReady = !1),
                        window.kgWxEnvir.init());
                    })
                  : setInterval(function () {
                      window.location.hash != window.hash &&
                        ((window.hash = window.location.hash),
                        (window.kgWxEnvir.hasCheck = !1),
                        (window.kgWxEnvir.hasRegister = !1),
                        (window.kgWxEnvir.hasReady = !1),
                        window.kgWxEnvir.init());
                    }, 150)),
              (e.prototype.init = function (e, t) {
                if (/MicroMessenger/i.test(navigator.userAgent)) {
                  (e &&
                    e.jsApiList &&
                    Array.isArray(e.jsApiList) &&
                    (this.jsApiList = this.jsApiList.concat(e.jsApiList)),
                    e && e.version && (this.version = e.version),
                    -1 != window.location.origin.indexOf("kugou.com")
                      ? (this.this_url = encodeURIComponent(
                          window.location.href,
                        ))
                      : (this.this_url =
                          encodeURIComponent("http://kugou.com")));
                  var n = this;
                  (n.loadWxJs(function () {
                    if (n.hasReady) t && t(window.wx);
                    else {
                      if ((n.cbBus.push(t), n.hasCheck)) return;
                      (n.wxRegisterTimeout && clearTimeout(n.wxRegisterTimeout),
                        (n.wxRegisterTimeout = setTimeout(function () {
                          ((n.hasCheck = !0), n.getSignature());
                        }, 500)));
                    }
                  }),
                    n.loadStatJs());
                }
              }),
              (e.prototype.loadStatJs = function (e) {
                if (window.kgStatPush || this.hasLoadStatJS) e && e();
                else {
                  var t = document.createElement("script");
                  ((t.type = "text/javascript"),
                    t.readyState
                      ? (t.onreadystatechange = function () {
                          ((this.hasLoadStatJS = !0),
                            ("loaded" == t.readyState ||
                              "complete" == t.readyState) &&
                              ((t.onreadystatechange = null), e && e()));
                        })
                      : (t.onload = function () {
                          ((this.hasLoadStatJS = !0), e && e());
                        }),
                    (t.src =
                      "https://staticssl.kugou.com/common/js/min/npm/stat.min.js"),
                    document.getElementsByTagName("head")[0].appendChild(t));
                }
              }),
              (e.prototype.pushAPM = function (e) {
                if (
                  "voo.kugou.com" == window.location.host ||
                  "test.kugou.com" == window.location.host
                )
                  return null;
                ((e.ver = 1e3),
                  (e.useragent = navigator.userAgen),
                  (e.os = 1058),
                  (e.timestamp = +new Date()),
                  this.loadStatJs(function () {
                    kgStatPush(e, 1);
                  }));
              }),
              (e.prototype.loadWxJs = function (e) {
                if (window.wx || this.hasLoadJS) e && e();
                else {
                  this.hasLoadJS = !0;
                  var t = document.createElement("script");
                  ((t.type = "text/javascript"),
                    t.readyState
                      ? (t.onreadystatechange = function () {
                          ("loaded" == t.readyState ||
                            "complete" == t.readyState) &&
                            ((t.onreadystatechange = null), e && e());
                        })
                      : (t.onload = function () {
                          e && e();
                        }),
                    "1.6" === this.version
                      ? (t.src =
                          "https://staticssl.kugou.com/common/js/kg-jweixin-1.6.0.js")
                      : (t.src =
                          "https://staticssl.kugou.com/common/js/kg-jweixin-1.4.0.js"),
                    document.getElementsByTagName("head")[0].appendChild(t));
                }
              }),
              (e.prototype.getSignature = function () {
                var e = this;
                (e.OffTheWhiteList &&
                  ("voo.kugou.com" != window.location.host ||
                    "test.kugou.com" != window.location.host) &&
                  e.pushAPM({
                    typeid: 110493,
                    state: 0,
                    te: "E1",
                    position: 3,
                    fs: window.location.host,
                    hash: window.location.href,
                  }),
                  e.useNewShare
                    ? r({
                        url:
                          "https://mwechats.kugou.com/service/jssdk/getSignature?sdk=140&caller=kugou_web&url=" +
                          e.this_url,
                        success: function (t) {
                          t &&
                            (window.wx.config({
                              beta: !0,
                              debug: !1,
                              appId: t.appId,
                              timestamp: t.timestamp,
                              nonceStr: t.nonceStr,
                              signature: t.signature,
                              jsApiList: e.jsApiList,
                            }),
                            (e.hasRegister = !0),
                            window.wx.ready(function () {
                              ((e.hasReady = !0),
                                e.cbBus.forEach(function (e) {
                                  e && e(window.wx);
                                }));
                            }),
                            window.wx.error(function (t) {
                              try {
                                t = JSON.stringify(t);
                              } catch (e) {}
                              e.pushAPM({
                                typeid: 110493,
                                state: 0,
                                te: "E1",
                                position: 2,
                                fs: t || 0,
                                hash: window.location.href,
                              });
                            }));
                        },
                      })
                    : r({
                        url:
                          "https://mwechats.kugou.com/jssdk/getSignature?sdk=140&caller=kugou_mobile&url=" +
                          e.this_url,
                        success: function (t) {
                          t &&
                            (window.wx.config({
                              debug: !1,
                              beta: !0,
                              appId: t.appId,
                              timestamp: t.timestamp,
                              nonceStr: t.nonceStr,
                              signature: t.signature,
                              jsApiList: e.jsApiList,
                            }),
                            (e.hasRegister = !0),
                            window.wx.ready(function () {
                              ((e.hasReady = !0),
                                e.cbBus.forEach(function (e) {
                                  e && e(window.wx);
                                }));
                            }),
                            window.wx.error(function (t) {
                              try {
                                t = JSON.stringify(t);
                              } catch (e) {}
                              e.pushAPM({
                                typeid: 110493,
                                state: 0,
                                te: "E1",
                                position: 1,
                                fs: t || 0,
                                hash: window.location.href,
                              });
                            }));
                        },
                      }));
              }),
              (e.prototype.share = function (e) {
                var t = this;
                if (!this.hasRegister)
                  return "还未完成初始化，请在init回调中调用share方法";
                window.wx.ready(function () {
                  (e.title ||
                    t.pushAPM({
                      typeid: 110493,
                      state: 0,
                      te: "E1",
                      position: 5,
                      fs: "no_title",
                      hash: window.location.href,
                    }),
                    e.content ||
                      t.pushAPM({
                        typeid: 110493,
                        state: 0,
                        te: "E1",
                        position: 6,
                        fs: "no_content",
                        hash: window.location.href,
                      }),
                    e.img ||
                      t.pushAPM({
                        typeid: 110493,
                        state: 0,
                        te: "E1",
                        position: 7,
                        fs: "no_img",
                        hash: window.location.href,
                      }),
                    window.wx.onMenuShareAppMessage({
                      title: e.title,
                      desc: e.content,
                      link: e.url,
                      imgUrl: e.img,
                      trigger: function (e) {},
                      success: function (e) {},
                      cancel: function (e) {},
                      fail: function (e) {},
                    }),
                    window.wx.onMenuShareTimeline({
                      title: e.title,
                      desc: e.content,
                      link: e.url,
                      imgUrl: e.img,
                      trigger: function (e) {},
                      success: function (e) {},
                      cancel: function (e) {},
                      fail: function (e) {},
                    }),
                    window.wx.onMenuShareQQ({
                      title: e.title,
                      desc: e.content,
                      link: e.url,
                      imgUrl: e.img,
                      success: function () {},
                      cancel: function () {},
                    }),
                    window.wx.onMenuShareQZone({
                      title: e.title,
                      desc: e.content,
                      link: e.url,
                      imgUrl: e.img,
                      success: function () {},
                      cancel: function () {},
                    }),
                    window.wx.onMenuShareWeibo({
                      title: e.title,
                      desc: e.content,
                      link: e.url,
                      imgUrl: e.img,
                      success: function () {},
                      cancel: function () {},
                    }),
                    window.wx.updateAppMessageShareData({
                      title: e.title,
                      desc: e.content,
                      link: e.url,
                      imgUrl: e.img,
                      success: function () {},
                      cancel: function () {},
                    }),
                    window.wx.updateTimelineShareData({
                      title: e.title,
                      desc: e.content,
                      link: e.url,
                      imgUrl: e.img,
                      success: function () {},
                      cancel: function () {},
                    }),
                    8 === parseInt(10 * Math.random()) &&
                      t.pushAPM({
                        typeid: 110493,
                        state: 1,
                        hash: window.location.href,
                      }));
                });
              }),
              {
                init: function (e, t) {
                  window.kgWxEnvir.init(t, e);
                },
                share: function (e) {
                  window.kgWxEnvir.share(e);
                },
                getUserInfo: function (e) {
                  if (/MicroMessenger/i.test(navigator.userAgent)) {
                    var t,
                      n,
                      r = decodeURIComponent(window.location.search);
                    if (
                      ("" == r &&
                        window.location.hash &&
                        -1 != window.location.hash.indexOf("?") &&
                        (r =
                          "?" +
                          decodeURIComponent(window.location.hash).split(
                            "?",
                          )[1]),
                      -1 != r.indexOf("openid") && -1 != r.indexOf("unionid"))
                    ) {
                      var o = {
                        openid: "",
                        unionid: "",
                        nickname: "",
                        sex: "",
                        city: "",
                        province: "",
                        country: "",
                        headimgurl: "",
                      };
                      r = r.substr(1).split("&");
                      for (var i = 0; i < r.length; i++)
                        (-1 != (n = r[i]).indexOf("openid") &&
                          (n = n.substring(n.indexOf("openid"))),
                          (n = n.split("=")).length > 1 &&
                            void 0 != o[n[0]] &&
                            (o[n[0]] = n[1]));
                      return o;
                    }
                    return void (window.location.href =
                      ((t = encodeURIComponent(
                        "https://mwechats.kugou.com/service/user/getInfo?redirect_uri=" +
                          encodeURIComponent(window.location.href),
                      )),
                      "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
                        ((e || {}).appid || "wx412c15698d95020e") +
                        "&redirect_uri=" +
                        t +
                        "&response_type=code&scope=snsapi_userinfo&state=1&connect_redirect=1#wechat_redirect"));
                  }
                  return null;
                },
              }
            );
          })(),
          a = function (e, t, r) {
            var o = t || "";
            if (t && "object" === n(t)) {
              var i = "";
              for (var a in t) i += a + "=" + t[a] + "&";
              o = i.substr(0, i.length - 1);
            }
            o = o.trim();
            var s = document.createElement("script");
            ((s.type = "text/javascript"),
              (s.src = e + (o ? "?" + o : "")),
              (s.onload = s.onreadystatechange =
                function () {
                  (this.readyState &&
                    "complete" != this.readyState &&
                    "loaded" != this.readyState) ||
                    (r && r(),
                    (s.onreadystatechange = s.onload = null),
                    (s = null));
                }),
              document.getElementsByTagName("head")[0].appendChild(s));
          },
          s = function e(t, n) {
            window.kgStatObj
              ? (window.kgStatObj.kgStatPush(t, n),
                window.kgStatObj.notifyToStartReporting())
              : a(
                  "https://h5.kugou.com/vpublic/stat_3.0.2.min.js",
                  null,
                  function () {
                    e(t, n);
                  },
                );
          },
          c = {
            getSysBowser: function () {
              var e = [, ,],
                t = navigator.userAgent.toLocaleLowerCase(),
                n = function (e) {
                  return t.match(e);
                };
              return (
                n(/android/i)
                  ? (e[0] = 1)
                  : n(/iphone/i) || n(/KGBrowser/i)
                    ? (e[0] = 2)
                    : n(/ipad/i)
                      ? (e[0] = 3)
                      : n(/openharmony/i)
                        ? (e[0] = "harmony")
                        : (e[0] = 4),
                n(/kgbrowser/gi) ||
                c.safeGetJson(window, "external", "superCall")
                  ? (e[1] = 1)
                  : n(/micromessenger/gi) && !n(/wxwork/gi)
                    ? (e[1] = 2)
                    : n(/micromessenger/gi) && n(/wxwork/gi)
                      ? (e[1] = 7)
                      : n(/android/i) && n(/ qq\//gi)
                        ? (e[1] = 3)
                        : (n(/iphone/i) || n(/ipad/i)) && n(/ qq/gi)
                          ? (e[1] = 3)
                          : n(/weibo/gi)
                            ? (e[1] = 4)
                            : n(/fanxing/gi)
                              ? (e[1] = 5)
                              : n(/kgshortvideo/gi)
                                ? (e[1] = 6)
                                : n(/Windows/gi) &&
                                    c.safeGetJson(
                                      window,
                                      "external",
                                      "SuperCall",
                                    )
                                  ? (e[1] = 8)
                                  : (e[1] = 100),
                e
              );
            },
            safeGetJson: function (e) {
              try {
                for (
                  var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
                  r < t;
                  r++
                )
                  n[r - 1] = arguments[r];
                return n.reduce(function (e, t) {
                  return e[t];
                }, e);
              } catch (e) {
                return 0;
              }
            },
            initWXSign: function (e) {
              o.init(function () {
                e && e();
              });
            },
            isWechatWhiteList: function () {
              for (
                var e = [
                    "https://m3ws.kugou.com",
                    "https://ep.kugou.com",
                    "https://activity.kugou.com",
                    "https://m.kugou.com",
                    "https://h5.kugou.com",
                  ],
                  t = window.location.protocol + "//" + window.location.host,
                  n = e.length;
                n--;
              )
                if (e[n] === t) return !0;
              return !1;
            },
            getUrlParam: function (e, t) {
              var n = "",
                r = (t = t || window.location.href).indexOf("?"),
                o = t.indexOf("#");
              (r >= 0 && -1 == o && (n = t.substr(r)),
                o >= 0 && -1 == r && (n = ""),
                o >= 0 && r >= 0 && r > o && (n = t.substr(r)),
                o >= 0 && r >= 0 && o > r && (n = t.substr(r, o - r)));
              var i = {};
              if (-1 != n.indexOf("?"))
                for (var a = n.substr(1).split("&"), s = 0; s < a.length; s++)
                  i[a[s].split("=")[0]] = a[s].split("=")[1];
              return i[e];
            },
            checkOpen: function (e) {
              var t = null,
                n = !1,
                r = 0;
              t = window.setInterval(function () {
                if (
                  (r++,
                  (n =
                    document.hidden ||
                    document.webkitHidden ||
                    document.mozHidden ||
                    document.msHidden) || r > 50)
                ) {
                  if ((clearInterval(t), n)) return null;
                  e(n);
                }
              }, 50);
            },
            getOpenBIData: function () {
              var e = 2 == c.getSysBowser()[1],
                t = 3 == c.getSysBowser()[1],
                n = 4 == c.getSysBowser()[1],
                r = 7 == c.getSysBowser()[1],
                o = "";
              1 == c.getSysBowser()[0]
                ? (o = "android")
                : 2 == c.getSysBowser()[0]
                  ? (o = "iphone")
                  : 3 == c.getSysBowser()[0] && (o = "ipad");
              var i = navigator.userAgent.toLocaleLowerCase();
              return (
                e
                  ? (i = "".concat(o, "-wx"))
                  : t
                    ? (i = "".concat(o, "-qq"))
                    : n
                      ? (i = "".concat(o, "-wb"))
                      : r && (i = "".concat(o, "-work")),
                {
                  key: c.getKey(),
                  actid: "",
                  kugouid: c.Cookie.read("KuGoo", "KugooID") || 0,
                  url: window.location.origin + window.location.pathname,
                  ua: i,
                  expand: window.openKugouAppBIPageKey || d.getId(),
                }
              );
            },
            Cookie: [REDACTED]
              write: function (e, t, n, r, o, i) {
                (/^\w*$/.test(e) || console.error("cookie error"),
                  /; /.test(t) && console.error("cookie error"));
                var a = e + "=" + t;
                if (n) {
                  var s = new Date();
                  (s.setTime(s.getTime() + 1e3 * n),
                    (a += "; expires=" + s.toGMTString()));
                }
                (r && (a += "; path=" + r),
                  o && (a += "; domain=" + o),
                  i && (a += "; secure"),
                  (document.cookie = a));
              },
              read: function (e, t, n) {
                for (
                  var r = "", o = document.cookie.split("; "), i = 0;
                  i < o.length;
                  i++
                ) {
                  var a = o[i].match(/^(\w+)=(.+)$/);
                  if (a && a.length > 1 && a[1] == e) {
                    r = a[2];
                    break;
                  }
                }
                return "" == r
                  ? null
                  : t
                    ? n
                      ? JSON.parse(r)[t]
                      : new c.Param().parse(r)[t]
                    : r;
              },
            },
            Md5: function (e) {
              var t;
              function n(e, t, n, r, o, i) {
                var a;
                return s(
                  ((a = s(s(t, e), s(r, i))) << o) | (a >>> (32 - o)),
                  n,
                );
              }
              function r(e, t, r, o, i, a, s) {
                return n((t & r) | (~t & o), e, t, i, a, s);
              }
              function o(e, t, r, o, i, a, s) {
                return n((t & o) | (r & ~o), e, t, i, a, s);
              }
              function i(e, t, r, o, i, a, s) {
                return n(t ^ r ^ o, e, t, i, a, s);
              }
              function a(e, t, r, o, i, a, s) {
                return n(r ^ (t | ~o), e, t, i, a, s);
              }
              function s(e, t) {
                var n = (65535 & e) + (65535 & t);
                return (
                  (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n)
                );
              }
              return (e = e
                ? (function (e) {
                    for (
                      var t = "0123456789abcdef", n = "", r = 0;
                      r < 4 * e.length;
                      r++
                    )
                      n +=
                        t.charAt((e[r >> 2] >> ((r % 4) * 8 + 4)) & 15) +
                        t.charAt((e[r >> 2] >> ((r % 4) * 8)) & 15);
                    return n;
                  })(
                    (function (e, t) {
                      ((e[t >> 5] |= 128 << (t % 32)),
                        (e[(((t + 64) >>> 9) << 4) + 14] = t));
                      for (
                        var n = 1732584193,
                          c = -271733879,
                          u = -1732584194,
                          l = 271733878,
                          d = 0;
                        d < e.length;
                        d += 16
                      ) {
                        var p = n,
                          f = c,
                          g = u,
                          h = l;
                        ((n = r(n, c, u, l, e[d + 0], 7, -680876936)),
                          (l = r(l, n, c, u, e[d + 1], 12, -389564586)),
                          (u = r(u, l, n, c, e[d + 2], 17, 606105819)),
                          (c = r(c, u, l, n, e[d + 3], 22, -1044525330)),
                          (n = r(n, c, u, l, e[d + 4], 7, -176418897)),
                          (l = r(l, n, c, u, e[d + 5], 12, 1200080426)),
                          (u = r(u, l, n, c, e[d + 6], 17, -1473231341)),
                          (c = r(c, u, l, n, e[d + 7], 22, -45705983)),
                          (n = r(n, c, u, l, e[d + 8], 7, 1770035416)),
                          (l = r(l, n, c, u, e[d + 9], 12, -1958414417)),
                          (u = r(u, l, n, c, e[d + 10], 17, -42063)),
                          (c = r(c, u, l, n, e[d + 11], 22, -1990404162)),
                          (n = r(n, c, u, l, e[d + 12], 7, 1804603682)),
                          (l = r(l, n, c, u, e[d + 13], 12, -40341101)),
                          (u = r(u, l, n, c, e[d + 14], 17, -1502002290)),
                          (c = r(c, u, l, n, e[d + 15], 22, 1236535329)),
                          (n = o(n, c, u, l, e[d + 1], 5, -165796510)),
                          (l = o(l, n, c, u, e[d + 6], 9, -1069501632)),
                          (u = o(u, l, n, c, e[d + 11], 14, 643717713)),
                          (c = o(c, u, l, n, e[d + 0], 20, -373897302)),
                          (n = o(n, c, u, l, e[d + 5], 5, -701558691)),
                          (l = o(l, n, c, u, e[d + 10], 9, 38016083)),
                          (u = o(u, l, n, c, e[d + 15], 14, -660478335)),
                          (c = o(c, u, l, n, e[d + 4], 20, -405537848)),
                          (n = o(n, c, u, l, e[d + 9], 5, 568446438)),
                          (l = o(l, n, c, u, e[d + 14], 9, -1019803690)),
                          (u = o(u, l, n, c, e[d + 3], 14, -187363961)),
                          (c = o(c, u, l, n, e[d + 8], 20, 1163531501)),
                          (n = o(n, c, u, l, e[d + 13], 5, -1444681467)),
                          (l = o(l, n, c, u, e[d + 2], 9, -51403784)),
                          (u = o(u, l, n, c, e[d + 7], 14, 1735328473)),
                          (c = o(c, u, l, n, e[d + 12], 20, -1926607734)),
                          (n = i(n, c, u, l, e[d + 5], 4, -378558)),
                          (l = i(l, n, c, u, e[d + 8], 11, -2022574463)),
                          (u = i(u, l, n, c, e[d + 11], 16, 1839030562)),
                          (c = i(c, u, l, n, e[d + 14], 23, -35309556)),
                          (n = i(n, c, u, l, e[d + 1], 4, -1530992060)),
                          (l = i(l, n, c, u, e[d + 4], 11, 1272893353)),
                          (u = i(u, l, n, c, e[d + 7], 16, -155497632)),
                          (c = i(c, u, l, n, e[d + 10], 23, -1094730640)),
                          (n = i(n, c, u, l, e[d + 13], 4, 681279174)),
                          (l = i(l, n, c, u, e[d + 0], 11, -358537222)),
                          (u = i(u, l, n, c, e[d + 3], 16, -722521979)),
                          (c = i(c, u, l, n, e[d + 6], 23, 76029189)),
                          (n = i(n, c, u, l, e[d + 9], 4, -640364487)),
                          (l = i(l, n, c, u, e[d + 12], 11, -421815835)),
                          (u = i(u, l, n, c, e[d + 15], 16, 530742520)),
                          (c = i(c, u, l, n, e[d + 2], 23, -995338651)),
                          (n = a(n, c, u, l, e[d + 0], 6, -198630844)),
                          (l = a(l, n, c, u, e[d + 7], 10, 1126891415)),
                          (u = a(u, l, n, c, e[d + 14], 15, -1416354905)),
                          (c = a(c, u, l, n, e[d + 5], 21, -57434055)),
                          (n = a(n, c, u, l, e[d + 12], 6, 1700485571)),
                          (l = a(l, n, c, u, e[d + 3], 10, -1894986606)),
                          (u = a(u, l, n, c, e[d + 10], 15, -1051523)),
                          (c = a(c, u, l, n, e[d + 1], 21, -2054922799)),
                          (n = a(n, c, u, l, e[d + 8], 6, 1873313359)),
                          (l = a(l, n, c, u, e[d + 15], 10, -30611744)),
                          (u = a(u, l, n, c, e[d + 6], 15, -1560198380)),
                          (c = a(c, u, l, n, e[d + 13], 21, 1309151649)),
                          (n = a(n, c, u, l, e[d + 4], 6, -145523070)),
                          (l = a(l, n, c, u, e[d + 11], 10, -1120210379)),
                          (u = a(u, l, n, c, e[d + 2], 15, 718787259)),
                          (c = a(c, u, l, n, e[d + 9], 21, -343485551)),
                          (n = s(n, p)),
                          (c = s(c, f)),
                          (u = s(u, g)),
                          (l = s(l, h)));
                      }
                      return [n, c, u, l];
                    })(
                      (function (e) {
                        for (var t = [], n = 0; n < 8 * e.length; n += 8)
                          t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << (n % 32);
                        return t;
                      })((t = e)),
                      8 * t.length,
                    ),
                  )
                : "");
            },
            Param: function () {
              var e = [],
                t = {};
              ((this.parse = function (e) {
                for (var n = e.split("&"), r = 0, o = n.length; r < o; r++) {
                  var i = n[r].split("=");
                  t[i[0]] = i[1];
                }
                return t;
              }),
                (this.toString = function (t) {
                  return ((t = t || "&"), e.join(t));
                }),
                (this.add = function (t, n) {
                  return (e.push(t + "=" + n), this);
                }));
            },
            Guid: function () {
              function e() {
                return (((1 + Math.random()) * 1048576) | 0).toString(16);
              }
              return (
                parseInt(new Date().getTime()) +
                "-" +
                e() +
                e() +
                "-" +
                e() +
                "-" +
                e() +
                "-" +
                e() +
                "-" +
                e() +
                e() +
                e()
              );
            },
            getKey: function () {
              var e = c.Cookie.read("kg_open_key"),
                t = "";
              (window.Storage &&
                window.localStorage &&
                window.localStorage instanceof Storage &&
                ((t = window.localStorage.getItem("kg_open_key")),
                e && e != t && window.localStorage.setItem("kg_open_key", e)),
                !e &&
                  t &&
                  c.Cookie.write(
                    "kg_open_key",
                    t,
                    864e6,
                    "/",
                    "kugou.com",
                    !0,
                    "None",
                  ));
              var n = e || t;
              if (n);
              else {
                var r = c.Guid();
                n = c.Md5(r);
                try {
                  (c.Cookie.write(
                    "kg_open_key",
                    c.Md5(r),
                    864e6,
                    "/",
                    "kugou.com",
                  ),
                    window.localStorage.setItem("kg_open_key", e));
                } catch (e) {}
              }
              return n;
            },
            getOpenId: function () {
              function e() {
                return (((1 + Math.random()) * 1048576) | 0).toString(16);
              }
              return parseInt(new Date().getTime()) + "-" + e() + "-" + e();
            },
            addParamToURL: function (e, t, n) {
              var r = decodeURIComponent(e),
                o = r.indexOf("?"),
                i = r.indexOf("#"),
                a = "",
                s = "",
                c = r;
              return (
                o >= 0 &&
                  -1 == i &&
                  ((a = r.substr(o)), (s = ""), (c = r.substr(0, o))),
                i >= 0 &&
                  -1 == o &&
                  ((a = ""), (s = r.substr(i)), (c = r.substr(0, i))),
                i >= 0 &&
                  o >= 0 &&
                  o > i &&
                  ((a = r.substr(o)),
                  (s = r.substr(i, o - i)),
                  (c = r.substr(0, i))),
                i >= 0 &&
                  o >= 0 &&
                  i > o &&
                  ((a = r.substr(o, i - o)),
                  (s = r.substr(i)),
                  (c = r.substr(0, o))),
                a || (a = "?".concat(t, "=").concat(n)),
                (r = "".concat(c).concat(a)),
                s && (r = "".concat(r).concat(s)),
                r
              );
            },
          },
          u = function () {
            return new Promise(function (e, t) {
              e({
                userid: c.Cookie.read("KuGoo", "KugooID") || 0,
                mid: c.Cookie.read("kg_mid") || "",
                uuid: c.Cookie.read("kg_mid") || "",
                dfid: c.Cookie.read("kg_dfid") || "",
                appid: c.Cookie.read("KuGoo", "a") || 1058,
                clientver: 1e3,
              });
            });
          },
          l = {
            click: function (e) {
              u().then(function (n) {
                var r = {
                    kugouID: n.userid,
                    mid: n.mid,
                    uuid: n.uuid,
                    appid: n.appid,
                    version: n.clientver,
                    dfid: n.dfid,
                  },
                  o = {
                    a: 1128960,
                    b: "点击",
                    ft: "拉端成功率",
                    r: "端外页面点击拉端",
                  };
                o = t(t({}, o), r);
                var i = c.getOpenBIData();
                (i && ((o.svar1 = i.key), (o.svar3 = i.url), (o.svar4 = i.ua)),
                  e && (o = t(t({}, o), e)),
                  s(o));
              });
            },
            process: function (e) {
              u().then(function (n) {
                var r = {
                    kugouID: n.userid,
                    mid: n.mid,
                    uuid: n.uuid,
                    appid: n.appid,
                    version: n.clientver,
                    dfid: n.dfid,
                  },
                  o = {
                    a: 1128958,
                    b: "点击",
                    ft: "拉端成功率",
                    r: "端外拉端方法的中途步骤",
                  };
                o = t(t({}, o), r);
                var i = c.getOpenBIData();
                (i && ((o.svar1 = i.key), (o.svar3 = i.url), (o.svar4 = i.ua)),
                  e && (o = t(t({}, o), e)),
                  s(o));
              });
            },
          },
          d = {
            id: "",
            setId: function () {
              d.id = c.getOpenId();
            },
            getId: function () {
              return d.id;
            },
          },
          p = function () {
            var e = {},
              t = navigator.userAgent.toLocaleLowerCase(),
              n = function (e) {
                return t.match(e);
              };
            return (
              n(/android/i)
                ? (e.os = "android")
                : n(/iphone/i) || n(/KGBrowser/i)
                  ? (e.os = "iOS")
                  : n(/ipad/i)
                    ? (e.os = "iOS")
                    : n(/openharmony/i)
                      ? (e.os = "harmony")
                      : (e.os = "other"),
              n(/kgbrowser/gi) ||
              (window.external &&
                window.external.superCall &&
                "function" == typeof window.external.superCall)
                ? (e.app = "kugou")
                : n(/micromessenger/gi) && !n(/wxwork/gi)
                  ? (e.app = "weixin")
                  : n(/android/i) && n(/ qq\//gi)
                    ? (e.app = "qq")
                    : (n(/iphone/i) || n(/ipad/i)) && n(/ qq/gi)
                      ? (e.app = "qq")
                      : n(/weibo/gi)
                        ? (e.app = "weibo")
                        : n(/baidu/gi)
                          ? (e.app = "baidu")
                          : (e.app = "browser"),
              e
            );
          },
          f = function (e) {
            var t = RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
              n = window.location.search.substr(1).match(t);
            return null != n ? n[2] : null;
          },
          g = function (e) {
            var n = f("sruserid"),
              r = f("kgsscty1") || f("chl"),
              o = f("hreffrom") || f("channel") || f("fo"),
              i =
                window && window._kg_opendata_ && window._kg_opendata_.page
                  ? window._kg_opendata_.page
                  : "活动页",
              a =
                window &&
                window._kg_opendata_ &&
                window._kg_opendata_.activityName
                  ? window._kg_opendata_.activityName
                  : document.title || "",
              s =
                window &&
                window._kg_opendata_ &&
                window._kg_opendata_.activityId
                  ? window._kg_opendata_.activityId
                  : "",
              c =
                window &&
                window._kg_opendata_ &&
                window._kg_opendata_.codeSystem
                  ? window._kg_opendata_.codeSystem
                  : "",
              u =
                window && window._kg_opendata_ && window._kg_opendata_.channel
                  ? window._kg_opendata_.channel
                  : "",
              l =
                window &&
                window._kg_opendata_ &&
                window._kg_opendata_.businessid
                  ? window._kg_opendata_.businessid
                  : "",
              d = {
                cmd: e || "",
                page: i,
                ua: p().app,
                os: p().os,
                url: window.location.origin + window.location.pathname,
                params: window.location.search,
                businessid: l,
                u: n || "",
                chl: r || "",
                activityName: a,
                activityId: s,
                codeSystem: c,
                channel: u || o || "",
                targetApp: "kugou",
              };
            return (
              window &&
                window._kg_opendata_ &&
                (d = t(t({}, d), window._kg_opendata_)),
              d
            );
          };
        window &&
          (window._kg_openkugouapp_pageExposeReported_fun_ = function () {
            var e = function (e) {
              var n = g(),
                r = {
                  uuid: (e && e.uuid) || 0,
                  mid: (e && e.mid) || 0,
                  userid: (e && e.kugouID) || 0,
                  appid: (e && e.appid) || 0,
                  tv: (e && e.version) || 0,
                  url: window.location.href,
                };
              s(
                t(
                  {
                    a: 1133566,
                    b: "曝光",
                    ft: "web",
                    r: "web",
                    svar1: JSON.stringify(n),
                  },
                  r,
                ),
              );
            };
            window.getBaseInfo
              ? getBaseInfo(1058, function (t) {
                  e({
                    kugouID: t.userid,
                    mid: t.mid,
                    uuid: t.uuid,
                    appid: t.appid,
                    version: t.clientver,
                    dfid: t.dfid,
                  });
                })
              : a(
                  "https://h5.kugou.com/vpublic/get-base-info_3.3.0.min.js",
                  null,
                  function () {
                    getBaseInfo(1058, function (t) {
                      e({
                        kugouID: t.userid,
                        mid: t.mid,
                        uuid: t.uuid,
                        appid: t.appid,
                        version: t.clientver,
                        dfid: t.dfid,
                      });
                    });
                  },
                );
          });
        var h = {
          openBySchemelUrl: function (e, n, r, o, i) {
            var a = {
              cmd: e,
              jsonStr: o,
              type: n,
              action: r,
              openBIData: c.getOpenBIData(),
            };
            (i && i.bizParam && (a = t(t({}, a), i.bizParam)),
              i &&
                i.launchBusinessParams &&
                (a.launchBusinessParams = i.launchBusinessParams));
            var s = encodeURIComponent(JSON.stringify(a)),
              u = "kugou://start.weixin?" + s,
              l = "";
            ((l =
              1 == c.getSysBowser()[0]
                ? u
                : "harmony" == c.getSysBowser()[0]
                  ? u
                  : "kugouurl://start.weixin?" + s),
              (window.location.href = l));
          },
          openByWeChat: function (e, n, r, o, i, a) {
            var s = {
              cmd: e,
              jsonStr: o,
              type: n,
              action: r,
              openBIData: c.getOpenBIData(),
            };
            (i && i.bizParam && (s = t(t({}, s), i.bizParam)),
              i &&
                i.launchBusinessParams &&
                (s.launchBusinessParams = i.launchBusinessParams),
              c.initWXSign(function () {
                try {
                  var e = {
                    is_start_weixin: !0,
                    real_content:
                      "kugou://start.weixin?" +
                      encodeURIComponent(JSON.stringify(s)),
                  };
                  wx.invoke(
                    "launchApplication",
                    {
                      appID: "wx79f2c4418704b4f8",
                      parameter:
                        "kugouurl://start.weixin?" +
                        encodeURIComponent(JSON.stringify(s)),
                      extInfo:
                        "kugouURL://start.fanxing?" +
                        encodeURIComponent(JSON.stringify(e)),
                    },
                    function (e) {
                      "launchApplication:ok" === e.err_msg ||
                        (e.err_msg, a && a());
                    },
                  );
                } catch (e) {
                  a && a();
                }
              }));
          },
          openByWeChatWithUrl: function (e, t, n, r, o) {
            var i = {
              cmd: e,
              jsonStr: r,
              type: t,
              action: n,
              openBIData: c.getOpenBIData(),
            };
            o && (i.bizParam = o);
            var a = encodeURIComponent(JSON.stringify(i));
            window.location.href =
              "https://m3ws.kugou.com/share/weixin.html?data=" + a;
          },
          openByUniversalLinks: function (e, t, n, r, o) {
            (r
              ? r.openBIData || (r.openBIData = c.getOpenBIData())
              : (r = { openBIData: c.getOpenBIData() }),
              o &&
                o.launchBusinessParams &&
                (r.launchBusinessParams = o.launchBusinessParams));
            var i = encodeURIComponent(JSON.stringify(r));
            window.location.href =
              "https://mo.kugou.com/universal/?Type=" +
              t +
              "&Action=" +
              n +
              "&Json=" +
              i;
          },
          openByAndroidAppStore: function (e, n, r, o, i, a) {
            var s = {
              cmd: e,
              jsonStr: o,
              type: n,
              action: r,
              openBIData: c.getOpenBIData(),
            };
            (a &&
              a.bizParam &&
              (t(t({}, s), a.bizParam),
              (function (e) {
                throw TypeError('"' + e + '" is read-only');
              })("urlParam")),
              a &&
                a.launchBusinessParams &&
                (s.launchBusinessParams = a.launchBusinessParams),
              (i = i || "CK1350585625598"));
            var u = encodeURIComponent(JSON.stringify(s)),
              l =
                "https://a.app.qq.com/o/simple.jsp?pkgname=com.kugou.android&ckey=".concat(
                  i,
                ),
              d = a.androidDownLoadLink,
              p = a.openKugouStatusCallback;
            if (d)
              ("NoRedirect" !== d && (window.location.href = d),
                p &&
                  p({ step: "download", type: "androidDownLoadLink", url: d }));
            else {
              var f = ""
                .concat(l, "&android_schema=")
                .concat("kugou://start.weixin?" + u);
              window.location.href = f;
            }
          },
          openByIOSAppStore: function (e, t, n, r, o) {
            window.location.href =
              o ||
              "https://itunes.apple.com/app/apple-store/id472208016?pt=624347&ct=schoolstar&mt=8";
          },
          openByHarmonyStore: function () {
            window.location.href =
              "https://appgallery.huawei.com/app/detail?id=com.kugou.hmmusic";
          },
          openByTips: function () {
            var e = 2 == c.getSysBowser()[0] || 3 == c.getSysBowser()[0],
              t = 2 == c.getSysBowser()[1],
              n = document.getElementById("pop_mask2");
            (n
              ? (n.style.display = "block")
              : ((n = document.createElement("div")).classList.add("pop_mask2"),
                n.setAttribute(
                  "style",
                  "width: 100%; height: 100vh; z-index: 9999; position: fixed; top: 0; left: 0; display: none; background: rgba(0,0,0,0.7);",
                ),
                n.setAttribute("id", "pop_mask2"),
                document.body.appendChild(n),
                e && !t
                  ? (n.innerHTML =
                      '<img style="max-height: 199px; max-width: 60%; display: block; z-index: 1000; position: fixed; top: 10px; right: 20px;" src="https://webvoobssdl.kugou.com/f947e04b409cc4d6c0b201815731e50a.png"/>')
                  : (n.innerHTML =
                      '<img style="max-height: 249px; max-width: 65%; display: block; z-index: 1000; position: fixed; top: 10px; right: 20px;" src="https://webvoobssdl.kugou.com/93847a185f34fee7f1bbc0f719fc9f52.png"/>')),
              n.addEventListener(
                "click",
                function () {
                  this.style.display = "none";
                },
                !1,
              ),
              (n.style.display = "block"));
          },
          downLoadkApk: function (e) {
            return (
              (window.location.href =
                "http://downmobile.kugou.com/promote/package/download/channel=" +
                e),
              null
            );
          },
          openQrcode: function (e) {
            var t = e.url || window.location.href,
              n = e.pcCodeTitle || "",
              r = e.pcCodeSubTitle || "",
              o = e.pcCodeTips || "";
            window.pcOpenKugouApp
              ? window.pcOpenKugouApp({
                  url: t,
                  pcCodeTitle: n,
                  pcCodeSubTitle: r,
                  pcCodeTips: o,
                })
              : a(
                  "https://h5.kugou.com/vpublic/pc-open-kugou-app_1.0.8.min.js",
                  null,
                  function () {
                    h.openQrcode(e);
                  },
                );
          },
        };
        navigator.userAgent.toLocaleLowerCase();
        var m = 2 == c.getSysBowser()[1],
          w = 3 == c.getSysBowser()[1],
          y = 4 == c.getSysBowser()[1],
          b = 2 == c.getSysBowser()[0] || 3 == c.getSysBowser()[0],
          v = 1 == c.getSysBowser()[0],
          k = "harmony" == c.getSysBowser()[0],
          S = 7 == c.getSysBowser()[1],
          j = 8 == c.getSysBowser()[1];
        m && c.initWXSign();
        var O = function (e) {
            return "universalLink" === e ||
              "universallink" === e ||
              "mokugou" == e
              ? "universalLink"
              : "scheme" === e ||
                  "schemeurl" === e ||
                  "schemeUrl" == e ||
                  "cmd" == e
                ? "schemeUrl"
                : void 0;
          },
          A = function (e, t, n, r, o, i) {
            var a =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : {};
            c.isWechatWhiteList()
              ? (l.process({
                  svar2: "",
                  svar5: "open_wx_sdk",
                  svar6: window.openKugouAppBIPageKey || d.getId(),
                }),
                b && "universalLink" === o
                  ? (l.process({
                      svar2: "",
                      svar5: "open_wx_universal",
                      svar6: window.openKugouAppBIPageKey || d.getId(),
                    }),
                    h.openByUniversalLinks(e, t, n, r, a))
                  : h.openByWeChat(e, t, n, r, a, function () {
                      if (b && "universalLink" == a.launchFailWay && t)
                        (l.process({
                          svar2: "",
                          svar5: "open_wx_universal",
                          svar6: window.openKugouAppBIPageKey || d.getId(),
                        }),
                          h.openByUniversalLinks(e, t, n, r, a));
                      else if (v && "browser" === a.launchFailWay) {
                        var o = window.location.href;
                        ((o = c.addParamToURL(o, "wxOpenToBrowser", "1")),
                          l.process({
                            svar2: "",
                            svar5: "open_wx_browser_popup",
                            svar6: window.openKugouAppBIPageKey || d.getId(),
                          }),
                          (window.location.href =
                            "https://m.kugou.com/v1/wechat/redirect?filename=1.doc&link=".concat(
                              encodeURIComponent(o),
                            )));
                      } else
                        (l.process({
                          svar2: "",
                          svar5: "open_wx_tips",
                          svar6: window.openKugouAppBIPageKey || d.getId(),
                        }),
                          a && a.weixinOpenFailHandle
                            ? a.weixinOpenFailHandle()
                            : h.openByTips());
                      return null;
                    }))
              : (l.process({
                  svar2: "",
                  svar5: "open_wx_m3wsurl",
                  svar6: window.openKugouAppBIPageKey || d.getId(),
                }),
                h.openByWeChatWithUrl(e, t, n, r, a.bizParam));
          },
          C = function (e, t, n, r, o, i) {
            var a =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : {};
            b && "universalLink" === o
              ? (l.process({
                  svar2: "",
                  svar5: "open_qq_tips",
                  svar6: window.openKugouAppBIPageKey || d.getId(),
                }),
                h.openByTips())
              : (l.process({
                  svar2: "",
                  svar5: "open_qq_scheme",
                  svar6: window.openKugouAppBIPageKey || d.getId(),
                }),
                h.openBySchemelUrl(e, t, n, r, a),
                c.checkOpen(function () {
                  if (a && a.isOnlyOpenNoDownload) return null;
                  b
                    ? (l.process({
                        svar2: "",
                        svar5: "open_qq_tips",
                        svar6: window.openKugouAppBIPageKey || d.getId(),
                      }),
                      h.openByTips())
                    : k
                      ? (l.process({
                          svar2: "",
                          svar5: "open_qq_harmony_store",
                          svar6: window.openKugouAppBIPageKey || d.getId(),
                        }),
                        h.openByHarmonyStore())
                      : (l.process({
                          svar2: "",
                          svar5: "open_qq_tips",
                          svar6: window.openKugouAppBIPageKey || d.getId(),
                        }),
                        h.openByTips());
                }));
          },
          x = function (e, t, n, r, o, i) {
            var a =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : {};
            b && "universalLink" === o
              ? (l.process({
                  svar2: "",
                  svar5: "open_wb_tips",
                  svar6: window.openKugouAppBIPageKey || d.getId(),
                }),
                h.openByTips())
              : (l.process({
                  svar2: "",
                  svar5: "open_wb_scheme",
                  svar6: window.openKugouAppBIPageKey || d.getId(),
                }),
                h.openBySchemelUrl(e, t, n, r, a),
                c.checkOpen(function () {
                  if (a && a.isOnlyOpenNoDownload) return null;
                  if (b)
                    (l.process({
                      svar2: "",
                      svar5: "open_wb_apple_store",
                      svar6: window.openKugouAppBIPageKey || d.getId(),
                    }),
                      h.openByIOSAppStore(e, t, n, r, a.iosAppstoreUrl));
                  else if (k)
                    (l.process({
                      svar2: "",
                      svar5: "open_qq_harmony_store",
                      svar6: window.openKugouAppBIPageKey || d.getId(),
                    }),
                      h.openByHarmonyStore());
                  else {
                    var o = "271";
                    (a && a.chi && (o = a.chi),
                      l.process({
                        svar2: "",
                        svar5: "open_wb_download_apk",
                        svar6: window.openKugouAppBIPageKey || d.getId(),
                      }),
                      h.downLoadkApk(o));
                  }
                }));
          },
          _ = function (e, t, n, r, o, i) {
            (h.openByTips(),
              l.process({
                svar2: "",
                svar5: "open_wecom_tips",
                svar6: window.openKugouAppBIPageKey || d.getId(),
              }));
          },
          P = function (e, t, n, r, o, i) {
            var a =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : {};
            b && "universalLink" === o
              ? (l.process({
                  svar2: "",
                  svar5: "open_other_universal",
                  svar6: window.openKugouAppBIPageKey || d.getId(),
                }),
                h.openByUniversalLinks(e, t, n, r, a))
              : (l.process({
                  svar2: "",
                  svar5: "open_other_scheme",
                  svar6: window.openKugouAppBIPageKey || d.getId(),
                }),
                h.openBySchemelUrl(e, t, n, r, a),
                c.checkOpen(function () {
                  if (a && a.isOnlyOpenNoDownload) return null;
                  b
                    ? (l.process({
                        svar2: "",
                        svar5: "open_other_apple_store",
                        svar6: window.openKugouAppBIPageKey || d.getId(),
                      }),
                      h.openByIOSAppStore(e, t, n, r, a.iosAppstoreUrl))
                    : k
                      ? (l.process({
                          svar2: "",
                          svar5: "open_other_harmony_store",
                          svar6: window.openKugouAppBIPageKey || d.getId(),
                        }),
                        h.openByHarmonyStore())
                      : (l.process({
                          svar2: "",
                          svar5: "open_other_android_store",
                          svar6: window.openKugouAppBIPageKey || d.getId(),
                        }),
                        h.openByAndroidAppStore(e, t, n, r, i, a));
                }));
          },
          I = function (e, t) {
            if (303 === Number(e) && null != t && t.url) {
              var n = null == t ? void 0 : t.url,
                r = c.getUrlParam("promo_h5", n);
              r && 1 === Number(r) && (t.promo_h5 = t.promo_h5 || 1);
            }
            return t;
          },
          E = function (e) {
            h.openQrcode(e);
          },
          M = function (e, t, n, r, o, i) {
            var a =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : {};
            if (a && a.friendship) {
              var s = c.getUrlParam("u"),
                u = c.getUrlParam("kgsscty1"),
                l = c.getUrlParam("chl2");
              (s && r && !r.u && (r.u = s),
                u && r && !r.kgsscty1 && (r.kgsscty1 = u),
                l && r && !r.chl2 && (r.chl2 = l));
            }
            o = O(o) || "";
            var d = g(e);
            (a.launchBusinessParams || (a.launchBusinessParams = d),
              (r = I(e, r)),
              j
                ? E(r)
                : m
                  ? A(e, t, n, r, o, i, a)
                  : w
                    ? C(e, t, n, r, o, i, a)
                    : y
                      ? x(e, t, n, r, o, i, a)
                      : S
                        ? _()
                        : P(e, t, n, r, o, i, a));
          },
          N = function (e) {
            var n = e.cmd,
              r = e.type,
              o = e.action,
              i = e.params || e.param,
              a = O(e.launchWay) || "",
              s = e.ckey,
              u = e.bizParam,
              l = t({}, e);
            (n && delete l.cmd,
              r && delete l.type,
              o && delete l.action,
              i && delete l.params,
              a && delete l.launchWay,
              s && delete l.ckey);
            var d = l;
            if (d && d.friendship) {
              var p = c.getUrlParam("u"),
                f = c.getUrlParam("kgsscty1"),
                h = c.getUrlParam("chl2");
              (p && i && !i.u && (i.u = p),
                f && i && !i.kgsscty1 && (i.kgsscty1 = f),
                h && i && !i.chl2 && (i.chl2 = h));
            }
            var b = g(n);
            (d.launchBusinessParams || (d.launchBusinessParams = b),
              u && (d.bizParam = u),
              (i = I(n, i)),
              j
                ? E(i)
                : m
                  ? A(n, r, o, i, a, s, d)
                  : w
                    ? C(n, r, o, i, a, s, d)
                    : y
                      ? x(n, r, o, i, a, s, d)
                      : S
                        ? _()
                        : P(n, r, o, i, a, s, d));
          };
        return function (e, t, n, r, o, i) {
          var a =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : {},
            s = e;
          (d.setId(),
            l.click({ svar2: "", svar5: d.getId(), svar6: s }),
            l.process({
              svar2: "",
              svar5: "start",
              svar6: window.openKugouAppBIPageKey || d.getId(),
            }),
            e && "[object Object]" === Object.prototype.toString.call(e)
              ? (N(e), (s = e.cmd))
              : M(e, t, n, r, o, i, a));
        };
      }),
        "object" === i(t)
          ? (e.exports = r())
          : void 0 !== (o = r.call(t, n, t, e)) && (e.exports = o));
    },
    42439: function (e, t, n) {
      var r,
        o,
        i = n(67521);
      ((r = function () {
        "use strict";
        function e(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function t(t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? e(Object(r), !0).forEach(function (e) {
                  !(function (e, t, n) {
                    var r;
                    ((r = (function (e, t) {
                      if ("object" != i(e) || !e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != i(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(t, "string")),
                    (t = "symbol" == i(r) ? r : r + "") in e)
                      ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = n);
                  })(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : e(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e),
                    );
                  });
          }
          return t;
        }
        function n(e) {
          return (n =
            "function" == typeof Symbol && "symbol" == i(Symbol.iterator)
              ? function (e) {
                  return i(e);
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : i(e);
                })(e);
        }
        function r(e, t) {
          if (null != e) {
            if (("object" !== n(e) && (e = [e]), o(e)))
              for (var r = 0, i = e.length; r < i; r++)
                t.call(null, e[r], r, e);
            else
              for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) &&
                  t.call(null, e[a], a, e);
          }
        }
        function o(e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        }
        function a(e) {
          return null == e || "" === e;
        }
        var s = {
          forEach: r,
          isArray: o,
          trim: function (e) {
            return a(e) ? "" : e.replace(/^\s*/, "").replace(/\s*$/, "");
          },
          isEmpty: a,
          deepMerge: function e() {
            var t = {};
            function o(r, o) {
              "object" === n(t[o]) && "object" === n(r) && (!r) instanceof Array
                ? (t[o] = e(t[o], r))
                : "object" === n(r) && (!r) instanceof Array
                  ? (t[o] = e({}, r))
                  : (t[o] = r);
            }
            for (var i = 0, a = arguments.length; i < a; i++)
              r(arguments[i], o);
            return t;
          },
          extend: function (e, t, n) {
            return (
              r(t, function (t, r) {
                e[r] = n && "function" == typeof t ? t.bind(n) : t;
              }),
              e
            );
          },
          objToParamStr: function (e) {
            var t = "";
            return (
              Object.keys(e).forEach(function (n) {
                t += "" == t ? n + "=" + e[n] : "&" + n + "=" + e[n];
              }),
              t
            );
          },
          toast: function (e) {
            var t = document.createElement("div"),
              n = document.createElement("div");
            ((e.duration = e.duration ? e.duration : 3e3),
              (t.style.cssText =
                "position: fixed; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; z-index:100000; text-align:center;"),
              (t.id = "toastCover"),
              (n.style.cssText =
                "background:rgba(0, 0, 0, .6); border-radius: 0.10rem; color: #fff; min-width: 40%; max-width: 80%; padding: 0.20rem; font-size: 0.28rem;"),
              (n.id = "toastText"),
              (n.innerText = e.message),
              t.appendChild(n),
              document.body.appendChild(t),
              setTimeout(function () {
                document.querySelector("#toastCover") &&
                  t.parentNode.removeChild(t);
              }, e.duration));
          },
        };
        function c() {
          this.toDoFunctionChain = [];
        }
        function u(e, t, n, r, o) {
          var i = Error((e = e || ""));
          return (
            (i.config = t),
            (i.request = r),
            (i.response = o),
            s.isEmpty(n) || (i.code = n),
            i
          );
        }
        ((c.prototype.on = function (e, t) {
          return (
            this.toDoFunctionChain.push({ fulfilled: e, rejected: t }),
            this.toDoFunctionChain.length - 1
          );
        }),
          (c.prototype.off = function (e) {
            this.toDoFunctionChain[e] && (this.toDoFunctionChain[e] = null);
          }),
          (c.prototype.forEach = function (e) {
            s.forEach(this.toDoFunctionChain, function (t) {
              null !== t && e(t);
            });
          }));
        var l = "undefined" != typeof globalThis ? globalThis : window;
        function d(e, t) {
          return (e((t = { exports: {} }), t.exports), t.exports);
        }
        var p = d(function (e, t) {
          e.exports = (function () {
            function e(e, t) {
              var n,
                r = Object.keys(e);
              return (
                Object.getOwnPropertySymbols &&
                  ((n = Object.getOwnPropertySymbols(e)),
                  t &&
                    (n = n.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                  r.push.apply(r, n)),
                r
              );
            }
            function t(t) {
              for (var n = 1; n < arguments.length; n++) {
                var r = null != arguments[n] ? arguments[n] : {};
                n % 2
                  ? e(Object(r), !0).forEach(function (e) {
                      var n, o;
                      ((n = t),
                        (e = r[(o = e)]),
                        o in n
                          ? Object.defineProperty(n, o, {
                              value: e,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (n[o] = e));
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(r),
                      )
                    : e(Object(r)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(r, e),
                        );
                      });
              }
              return t;
            }
            var n = {
              str2Json: function (e) {
                var t = {};
                if ("[object String]" === Object.prototype.toString.call(e))
                  try {
                    t = JSON.parse(e);
                  } catch (e) {
                    t = {};
                  }
                return t;
              },
              json2Str: function (e) {
                var t = e;
                if ("string" != typeof e)
                  try {
                    t = JSON.stringify(e);
                  } catch (e) {
                    t = "";
                  }
                return t;
              },
              cbNum: 0,
              isIOS: !!navigator.userAgent.match(/KGBrowser/gi),
              isKugouAndroid: !!navigator.userAgent.match(/kugouandroid/gi),
              isAndroid:
                "undefined" != typeof external && void 0 !== external.superCall,
              isDKAPP: !!navigator.userAgent.match(/kgshortvideo/gi),
              isKGRing: !!navigator.userAgent.match(/KGRingCode/gi),
              isFXAPP: !!navigator.userAgent.match(/Fanxing/gi),
              isFXQianBanAPP: !!navigator.userAgent.match(/QianBan/gi),
              isIframePage: window.parent && window.parent != window,
              isInClient: function () {
                return !!(
                  n.isAndroid ||
                  n.isKugouAndroid ||
                  n.isIOS ||
                  n.isFXAPP ||
                  n.isFXQianBanAPP ||
                  n.isDKAPP ||
                  n.isKGRing
                );
              },
              loadUrl: function (e) {
                var t = document.createElement("iframe");
                (t.setAttribute("src", e),
                  t.setAttribute("style", "display:none;"),
                  t.setAttribute("height", "0px"),
                  t.setAttribute("width", "0px"),
                  t.setAttribute("frameborder", "0"),
                  document.body.appendChild(t),
                  t.parentNode.removeChild(t),
                  (t = null));
              },
              mobileCallInIframe: function (e, t, n) {
                ((e = { type: "KgMobileCall", cmd: e }),
                  t && (e.dataJson = t),
                  n && (e.cbName = n),
                  (e.source = "personal"),
                  window.parent.postMessage(e, "*"));
              },
              receiveMessage: function (e) {
                var t = e.data;
                ("KgMobileCall" == t.type &&
                  window[t.cbName] &&
                  (t.dataJson
                    ? window[t.cbName](t.dataJson)
                    : window[t.cbName](),
                  (window[t.cbName] = null)),
                  "KgWebMobileCall" == t.type &&
                    ((e = t.funcName.split(".")),
                    KgWebMobileCall[e[1]] &&
                      (t.dataJson
                        ? KgWebMobileCall[e[1]](t.dataJson)
                        : KgWebMobileCall[e[1]]())));
              },
              callCmd: function (e) {
                var t,
                  r,
                  o = "kugouurl";
                if (
                  ((o = n.isKugouAndroid
                    ? "kugoujsbridge"
                    : n.isAndroid
                      ? "superCall"
                      : n.isFXAPP || n.isFXQianBanAPP
                        ? "fanxing2"
                        : "kugouurl"),
                  "kugoujsbridge" ==
                    (o = e && e.useMobileCallType ? e.useMobileCallType : o))
                ) {
                  var i = {},
                    a = "";
                  (e.cmd && (i.cmd = e.cmd),
                    e.jsonStr && (i.jsonStr = e.jsonStr),
                    e.callback &&
                      (n.cbNum++,
                      (a =
                        "kgandroidmobilecall_" +
                        (e.cmd || 0) +
                        "_" +
                        n.cbNum +
                        Math.random().toString().substr(2, 9)),
                      (window[a] = function (t, r) {
                        if (void 0 !== t) {
                          if (
                            "[object String]" ===
                            Object.prototype.toString.call(t)
                          ) {
                            try {
                              t =
                                "#" === r
                                  ? decodeURIComponent(t)
                                  : decodeURIComponent(decodeURIComponent(t));
                            } catch (e) {
                              console.error("decodeURIComponent", e);
                            }
                            e.callback(n.str2Json(t));
                          } else e.callback(t);
                        }
                      }),
                      e.AndroidCallback
                        ? (((s = n.str2Json(e.jsonStr)).AndroidCallback = a),
                          (e.jsonStr = n.json2Str(s)),
                          e.jsonStr && (i.jsonStr = e.jsonStr))
                        : (i.callback = a)));
                  var s = encodeURIComponent(JSON.stringify(i));
                  ((s = "kugoujsbridge://start.kugou_jsbridge/?".concat(s)),
                    n.isIframePage
                      ? n.mobileCallInIframe(i.cmd, i.jsonStr, a)
                      : n.loadUrl(s));
                } else if ("superCall" == o) {
                  if (((i = ""), (a = ""), e.jsonStr)) {
                    if (
                      (e.callback &&
                        "" !== e.callback &&
                        !0 === e.AndroidCallback &&
                        (n.cbNum++,
                        (a =
                          "kgmobilecall_" +
                          (e.cmd || 0) +
                          "_" +
                          n.cbNum +
                          Math.random().toString().substr(2, 9)),
                        (window[a] = function (t, r) {
                          if (void 0 !== t) {
                            if (
                              "[object String]" ===
                              Object.prototype.toString.call(t)
                            ) {
                              try {
                                t =
                                  "#" === r
                                    ? decodeURIComponent(t)
                                    : decodeURIComponent(decodeURIComponent(t));
                              } catch (e) {
                                console.error(
                                  "decodeURIComponent",
                                  decodeURIComponent,
                                );
                              }
                              e.callback(n.str2Json(t));
                            } else e.callback(t);
                          }
                        }),
                        ((s = n.str2Json(e.jsonStr)).AndroidCallback = a),
                        (e.jsonStr = n.json2Str(s))),
                      n.isIframePage && e.AndroidCallback)
                    )
                      n.mobileCallInIframe(e.cmd, e.jsonStr, a);
                    else
                      try {
                        i = external.superCall(e.cmd, e.jsonStr);
                      } catch (e) {}
                  } else
                    try {
                      i = external.superCall(e.cmd);
                    } catch (e) {}
                  e.AndroidCallback ||
                    (e.callback &&
                      "" !== e.callback &&
                      "AndroidCallback" != i &&
                      ((i = n.str2Json(i)), e.callback(i)));
                } else
                  "fanxing2" == o
                    ? ((o = r = ""),
                      (r = e.callback
                        ? (n.cbNum++,
                          (o =
                            "kgmobilecall_" +
                            (e.cmd || 0) +
                            "_" +
                            n.cbNum +
                            Math.random().toString().substr(2, 9)),
                          (window[o] = function (t) {
                            void 0 !== t &&
                              e.callback &&
                              ("[object String]" ===
                              Object.prototype.toString.call(t)
                                ? e.callback(n.str2Json(t))
                                : e.callback(t));
                          }),
                          e.jsonStr
                            ? 'fanxing2://send.message/?{"cmd":' +
                              e.cmd +
                              ', "jsonStr":' +
                              e.jsonStr +
                              ', "callback":"' +
                              o +
                              '"}'
                            : 'fanxing2://send.message/?{"cmd":' +
                              e.cmd +
                              ', "callback":"' +
                              o +
                              '"}')
                        : e.jsonStr
                          ? 'fanxing2://send.message/?{"cmd":' +
                            e.cmd +
                            ', "jsonStr":' +
                            e.jsonStr +
                            "}"
                          : 'fanxing2://send.message/?{"cmd":' + e.cmd + "}"),
                      n.isIframePage
                        ? n.mobileCallInIframe(e.cmd, e.jsonStr, o)
                        : navigator.userAgent.match(
                              /(Android);?[\s\/]+([\d.]+)?/,
                            )
                          ? external && external.callFanxing
                            ? ((t = {
                                cmd: e.cmd,
                                jsonStr: e.jsonStr || "",
                                callback: o,
                              }),
                              external.callFanxing(JSON.stringify(t)))
                            : window.prompt(r)
                          : n.loadUrl(r))
                    : ((r = t = ""),
                      e.callback &&
                        (n.cbNum++,
                        (r =
                          "kgmobilecall_" +
                          (e.cmd || 0) +
                          "_" +
                          n.cbNum +
                          Math.random().toString().substr(2, 9)),
                        (window[r] = function (t) {
                          void 0 !== t &&
                            e.callback &&
                            ("[object String]" ===
                            Object.prototype.toString.call(t)
                              ? e.callback(n.str2Json(t))
                              : e.callback(t));
                        })),
                      r &&
                        "" != r &&
                        e.jsonStr &&
                        (t =
                          'kugouurl://start.music/?{"cmd":' +
                          e.cmd +
                          ', "jsonStr":' +
                          e.jsonStr +
                          ', "callback":"' +
                          r +
                          '"}'),
                      r &&
                        "" != r &&
                        !e.jsonStr &&
                        (t =
                          'kugouurl://start.music/?{"cmd":' +
                          e.cmd +
                          ', "callback":"' +
                          r +
                          '"}'),
                      "" == r &&
                        e.jsonStr &&
                        (t =
                          'kugouurl://start.music/?{"cmd":' +
                          e.cmd +
                          ', "jsonStr":' +
                          e.jsonStr +
                          "}"),
                      "" != r ||
                        e.jsonStr ||
                        (t = 'kugouurl://start.music/?{"cmd":' + e.cmd + "}"),
                      n.isIframePage
                        ? n.mobileCallInIframe(e.cmd, e.jsonStr, r)
                        : n.loadUrl(t));
              },
              sendCommandOrder: function (e) {
                var t = window.location.origin,
                  r =
                    ~t.indexOf("voo.kugou.com") ||
                    ~t.indexOf("http://10.16.4.19:8099") ||
                    ~t.indexOf("http://test.kugou.com:8099"),
                  o = window._VO_ACT_ID_;
                r &&
                  o &&
                  e &&
                  ((e = { actId: o, cmd: e }),
                  (e = n.json2Str({
                    url: "".concat(t, "/public/addCommandOrder"),
                    method: "post",
                    param: n.json2Str(e),
                    header: { "Content-Type": "application/json" },
                    AndroidCallback: !0,
                  })),
                  n.callCmd({
                    cmd: 186,
                    jsonStr: e,
                    callback: function (e) {
                      ~window.location.href.indexOf("debugCmd") &&
                        console.log(e);
                    },
                  }));
              },
              formatUAMethod: function () {
                var e = { os: "", app: "" };
                return (
                  n.isIOS
                    ? ((e.os = "iphone"),
                      navigator.userAgent.match(/ipad/gi) && (e.os = "ipad"))
                    : n.isAndroid || n.isKugouAndroid
                      ? (e.os = "android")
                      : navigator.userAgent.match(/iphone/gi)
                        ? (e.os = "iphone")
                        : navigator.userAgent.match(/ipad/gi)
                          ? (e.os = "ipad")
                          : navigator.userAgent.match(/android/gi)
                            ? (e.os = "android")
                            : (e.os = "other"),
                  n.isDKAPP
                    ? (e.app = "kgshortvideo")
                    : n.isAndroid || n.isKugouAndroid || n.isIOS
                      ? (e.app = "kugou")
                      : n.isKGRing
                        ? (e.app = "KGRingCode")
                        : n.isFXAPP
                          ? (e.app = "Fanxing")
                          : navigator.userAgent.match(/micromessenger/gi) &&
                              !navigator.userAgent.match(/wxwork/gi)
                            ? (e.app = "weixin")
                            : navigator.userAgent.match(/micromessenger/gi) &&
                                navigator.userAgent.match(/wxwork/gi)
                              ? (e.app = "wxwork")
                              : navigator.userAgent.match(/weibo/gi)
                                ? (e.app = "weibo")
                                : (navigator.userAgent.match(/android/gi) &&
                                      navigator.userAgent.match(/qq/gi) &&
                                      navigator.userAgent.match(
                                        /mqqbrowser/gi,
                                      )) ||
                                    (("iphone" === e.os || "ipad" === e.os) &&
                                      navigator.userAgent.match(/ qq/gi))
                                  ? (e.app = "qq")
                                  : (e.app = "other"),
                  e
                );
              },
            };
            return {
              isIOS: n.isIOS,
              isKugouAndroid: n.isKugouAndroid,
              isAndroid: n.isAndroid,
              isFXAPP: n.isFXAPP,
              isFXQianBanAPP: n.isFXQianBanAPP,
              isDKAPP: n.isDKAPP,
              isKGRing: n.isKGRing,
              formatUA: n.formatUAMethod(),
              isInClient: function () {
                return n.isInClient();
              },
              mobileCall: function (e, r, o, i) {
                var a = "";
                if ((r && (a = n.json2Str(r)), !e))
                  return (console.error("请输入命令号！"), !1);
                if (
                  ((r = {}),
                  e && (r.cmd = e),
                  "" != a && (r.jsonStr = a),
                  o && (r.callback = o),
                  (r = t(t({}, r), i)),
                  !e ||
                    (186 != e && 225 != e) ||
                    (o && (r.AndroidCallback = !0)),
                  r.AndroidCallback && !r.jsonStr && (r.jsonStr = {}),
                  n.isInClient())
                ) {
                  n.callCmd(r);
                  try {
                    n.sendCommandOrder(e);
                  } catch (e) {}
                } else o && o({ status: 0, error: "不在客户端内" });
              },
              KgWebMobileCall: function (e, t) {
                if (e)
                  try {
                    n.isIframePage &&
                      window.parent.postMessage(
                        { type: "KgWebMobileCall", funcName: e },
                        "*",
                      );
                    var r = e.split(".");
                    r.reduce(function (n, o) {
                      if (n[o]) {
                        if (o !== r[r.length - 1]) return n[o];
                        var i = n[o];
                        return "function" == typeof i
                          ? ((n[o] = function () {
                              (i && i.apply(void 0, arguments),
                                t && t.apply(void 0, arguments));
                            }),
                            n[o])
                          : (console.error(
                              "请检查，当前环境变量已注册了对象：" +
                                e +
                                "，且该对象不是方法",
                            ),
                            null);
                      }
                      return (
                        o === r[r.length - 1]
                          ? (n[o] = function () {
                              t && t.apply(void 0, arguments);
                            })
                          : (n[o] = {}),
                        n[o]
                      );
                    }, window);
                  } catch (e) {}
              },
            };
          })();
        });
        function f(e) {
          return e.useMobileCall ||
            (e.requestMethod && "mobilecall" == e.requestMethod)
            ? new Promise(function (t, r) {
                var o = "",
                  i = e.data ? e.data : "";
                e.paramsSerializer
                  ? (o = e.paramsSerializer(e.params))
                  : s.isEmpty(e.params) || (o = s.objToParamStr(e.params));
                var a = e.baseURL + e.url;
                s.isEmpty(e.params) || (a = a + "?" + o);
                var c = { url: a, method: e.method, timeout: e.timeout };
                (s.isEmpty(i) ||
                  ((c.param = i),
                  "object" === n(i) && (c.param = JSON.stringify(i))),
                  s.isEmpty(e.headers) ||
                    ((c.header = {}),
                    s.forEach(e.headers, function (e) {
                      e &&
                      Object.keys(e)[0] &&
                      "content-type" === Object.keys(e)[0].toLowerCase()
                        ? (c.header["Content-Type"] = e[Object.keys(e)[0]])
                        : e &&
                          Object.keys(e)[0] &&
                          e[Object.keys(e)[0]] &&
                          (c.header[Object.keys(e)[0]] = e[Object.keys(e)[0]]);
                    })),
                  e.useWns && (c.useWns = e.useWns),
                  e.wnsCommand && (c.wnsCommand = e.wnsCommand),
                  e.useCache && (c.useCache = e.useCache),
                  e.useCacheKey && (c.useCacheKey = e.useCacheKey));
                var l = 186;
                if (
                  (e.use225cmd && (l = 225),
                  e.log && console.log("--- 客户端命令号发请求，参数：", l, c),
                  e.overrideMethod)
                )
                  return e.overrideMethod("CmdModule", "callCmd", {
                    cmd: 186,
                    params: c,
                  });
                p.mobileCall(l, c, function (n) {
                  try {
                    n = JSON.parse(n);
                  } catch (e) {}
                  if (
                    (e.log && console.log("--- 客户端命令号回调返回值：", l, n),
                    e.isVipWebview && !n.hasOwnProperty("status"))
                  )
                    return null;
                  var o = {
                    data: n.data,
                    config: e,
                    verify: n.verify || null,
                    resHeaders: n.resHeaders || null,
                    time: n.time || 0,
                  };
                  if (n && 1 == n.status) {
                    if (
                      n &&
                      n.verify &&
                      0 == n.verify.status &&
                      e.kgAntiBushErrFun
                    ) {
                      if ((p.isKugouAndroid || p.isAndroid) && n.resHeaders) {
                        if (
                          n.resHeaders["SSA-CODE"] ||
                          n.resHeaders["ssa-code"]
                        )
                          return (
                            e.kgAntiBushErrFun && e.kgAntiBushErrFun(),
                            e.kgAntiBushErrorReject &&
                              r(
                                u(
                                  "client verify Error: 0",
                                  e,
                                  null,
                                  null,
                                  null,
                                ),
                              ),
                            null
                          );
                      } else if (
                        n.resHeaders["SSA-CODE"] ||
                        n.resHeaders["ssa-code"]
                      )
                        return (
                          e.kgAntiBushErrFun && e.kgAntiBushErrFun(),
                          e.kgAntiBushErrorReject &&
                            r(u("client verify Error: 0", e, null, null, null)),
                          null
                        );
                    }
                    t(o);
                  } else {
                    if (n && n.errno && 30021 == n.errno && e.kgAntiBushErrFun)
                      return (
                        e.kgAntiBushErrFun && e.kgAntiBushErrFun(),
                        e.kgAntiBushErrorReject &&
                          r(u("client verify Error: 0", e, null, null, null)),
                        null
                      );
                    r(
                      u(
                        n.errMsg || "Request Error: " + n.errno,
                        e,
                        n.errno,
                        null,
                        o,
                      ),
                    );
                  }
                });
              }).then(
                function (e) {
                  return e;
                },
                function (e) {
                  return Promise.reject(e);
                },
              )
            : e.requestMethod && "miniapp" == e.requestMethod
              ? new Promise(function (r, o) {
                  var i = "",
                    a = e.data ? e.data : "";
                  e.paramsSerializer
                    ? (i = e.paramsSerializer(e.params))
                    : s.isEmpty(e.params) || (i = s.objToParamStr(e.params));
                  var c = e.baseURL + e.url;
                  s.isEmpty(e.params) || (c = c + "?" + i);
                  var l = { url: c, method: e.method, timeout: e.timeout };
                  (s.isEmpty(a) ||
                    ((l.data = a),
                    "object" === n(a) && (l.data = JSON.stringify(a))),
                    s.isEmpty(e.headers) ||
                      ((l.header = {}),
                      Array.isArray(e.headers)
                        ? s.forEach(e.headers, function (e) {
                            l.header[Object.keys(e)[0]] = e[Object.keys(e)[0]];
                          })
                        : (l.header = t({}, e.headers)),
                      l.header &&
                        (l.header["content-type"] ||
                          l.header["content-Type"] ||
                          l.header["Content-type"] ||
                          l.header["Content-Type"]) &&
                        ((l.header["Content-Type"] =
                          l.header["content-type"] ||
                          l.header["content-Type"] ||
                          l.header["Content-type"] ||
                          l.header["Content-Type"]),
                        delete l.header["content-type"],
                        delete l.header["content-Type"],
                        delete l.header["Content-type"])),
                    (l.dataType = e.dataType || "json"),
                    (l.success = function (t) {
                      r({
                        data: t.data,
                        statusCode: t.statusCode,
                        responseHeader: t.header,
                        config: e,
                      });
                    }),
                    (l.fail = function (t) {
                      o(u(t.errMsg, e, t.errCode, null, null));
                    }),
                    window.MiniApp && window.MiniApp.request(l));
                }).then(
                  function (e) {
                    return e;
                  },
                  function (e) {
                    return Promise.reject(e);
                  },
                )
              : new Promise(function (t, n) {
                  var r = e.params,
                    o = e.data,
                    i = new XMLHttpRequest();
                  i = window.XMLHttpRequest
                    ? new XMLHttpRequest()
                    : new window.ActiveXObject();
                  var a = e.baseURL + e.url;
                  (e.paramsSerializer
                    ? (a = a + "?" + e.paramsSerializer(r))
                    : s.isEmpty(e.params) || (a = a + "?" + s.objToParamStr(r)),
                    e.responseType && (i.responseType = e.responseType),
                    i.open(e.method, a, e.async),
                    s.isEmpty(e.headers) ||
                      s.forEach(e.headers, function (e) {
                        e &&
                          Object.keys(e)[0] &&
                          e[Object.keys(e)[0]] &&
                          i.setRequestHeader(
                            Object.keys(e)[0],
                            e[Object.keys(e)[0]],
                          );
                      }),
                    (i.timeout = e.timeout),
                    s.isEmpty(e.withCredentials) ||
                      (i.withCredentials = e.withCredentials),
                    (i.onreadystatechange = function () {
                      if (
                        i &&
                        4 === i.readyState &&
                        (0 !== i.status ||
                          (i.responseURL &&
                            0 === i.responseURL.indexOf("file:")))
                      ) {
                        var r =
                            "getAllResponseHeaders" in i
                              ? (function (e) {
                                  var t = "";
                                  t = s.isArray(e) ? e : e.split(/\r\n/);
                                  for (var n = {}, r = 0; r < t.length; r++) {
                                    var o = t[r].indexOf(":"),
                                      i = s
                                        .trim(t[r].substr(0, o))
                                        .toLowerCase(),
                                      a = s.trim(t[r].substr(o + 1));
                                    i &&
                                      (n[i] =
                                        "set-cookie" === i
                                          ? (n[i] ? n[i] : []).concat([a])
                                          : n[i]
                                            ? n[i] + ", " + a
                                            : a);
                                  }
                                  return n;
                                })(i.getAllResponseHeaders())
                              : null,
                          o = {
                            data:
                              e.responseType && "text" !== e.responseType
                                ? i.response
                                : i.responseText,
                            headers: r,
                            resHeaders: r,
                            config: e,
                            status: i.status,
                            request: i,
                            isTriggerAntiBush: !1,
                          };
                        if (i && 200 === i.status) {
                          if (o && o.headers) {
                            var a = "";
                            try {
                              a =
                                o.headers["ssa-code"] || o.headers["SSA-CODE"];
                            } catch (e) {}
                            a && (o.isTriggerAntiBush = !0);
                          }
                          t(o);
                        } else
                          (n(u("Request Error", e, i.status || -1, i, o)),
                            (i = null));
                      }
                    }),
                    (i.onabort = function () {
                      i &&
                        (n(u("Request aborted", e, "ECONNABORTED", i)),
                        (i = null));
                    }),
                    (i.onerror = function () {
                      (n(u("Network Error", e, "ECONNERROR", i)), (i = null));
                    }),
                    (i.ontimeout = function () {
                      (n(u("request timeout", e, "ECONNTIMEOUT", i)),
                        (i = null));
                    }),
                    e && e.isFormData
                      ? i.send(o)
                      : s.isEmpty(o)
                        ? i.send()
                        : "string" == typeof o
                          ? i.send(o)
                          : i.send(JSON.stringify(o)));
                }).then(
                  function (e) {
                    return e;
                  },
                  function (e) {
                    return Promise.reject(e);
                  },
                );
        }
        function g(e) {
          return new Promise(function (t, n) {
            if (e && e.isAllowKGAntiBush) {
              if (
                ((e.kgAntiBushURL = e.kgAntiBushURL
                  ? e.kgAntiBushURL
                  : window.location.href),
                (e.kgAntiBushAppid = e.kgAntiBushAppid
                  ? e.kgAntiBushAppid
                  : e.params.appid
                    ? e.params.appid
                    : ""),
                (e.kgAntiBushMid = e.kgAntiBushMid
                  ? e.kgAntiBushMid
                  : e.params.mid
                    ? e.params.mid
                    : ""),
                (e.kgAntiBushUserid = e.kgAntiBushUserid
                  ? e.kgAntiBushUserid
                  : e.params.userid
                    ? e.params.userid
                    : 0),
                s.isEmpty(e.kgAntiBushAppid))
              )
                return (
                  console.error(
                    "使用了 isAllowKGAntiBush=true，但是没有传 appid",
                  ),
                  n(e),
                  null
                );
              if (s.isEmpty(e.kgAntiBushMid))
                return (
                  console.error(
                    "使用了 isAllowKGAntiBush=true，但是没有传 mid",
                  ),
                  n(e),
                  null
                );
              t(e);
            } else t(e);
          });
        }
        function h(e) {
          return new Promise(function (t) {
            (e &&
              e.useMobileCall &&
              e.params &&
              (1e3 === Number(e.params.appid) &&
                e.params.clientver < 8800 &&
                (e.useMobileCall = !1),
              1005 === Number(e.params.appid) &&
                e.params.clientver < 8741 &&
                (e.useMobileCall = !1)),
              t(e));
          });
        }
        var m = {
          url: "",
          baseURL: "",
          retryURL: "",
          isGateway: !0,
          gatewayURL: "",
          retryList: [],
          retry: 1,
          timeout: 15e3,
          params: null,
          data: null,
          method: "get",
          async: !0,
          useMobileCall: !1,
          kgAntiBushUrl: window.location.href,
          isAllowKGAntiBush: !0,
          kgAntiBushURL: "",
          kgAntiBushAppid: "",
          kgAntiBushMid: "",
          kgAntiBushUserid: "[REDACTED]",
          sign: "h5",
          signSalt: "",
          isAllowSign: !0,
          cdnApiParamsSerializer: function (e) {
            var t = "",
              n = [];
            for (var r in e) n.push(r);
            return (
              n.sort(),
              n.forEach(function (n) {
                t += "" == t ? n + "=" + e[n] : "&" + n + "=" + e[n];
              }),
              t
            );
          },
        };
        function w(e) {
          ((this.requestConfig = e),
            (this.interceptors = { request: new c(), response: new c() }));
        }
        w.prototype.request = function (e) {
          var t = Promise.resolve(
              (e = (function (e, t) {
                t = t || {};
                var n = {};
                if (
                  (((n = s.deepMerge(m, t)).headers = n.headers
                    ? n.headers
                    : []),
                  (n.url = s.trim(n.url)),
                  s.isEmpty(n.url) ||
                    0 == n.url.indexOf("/") ||
                    (n.url = "/" + n.url),
                  (n.baseURL = s.trim(n.baseURL)),
                  s.isEmpty(n.baseURL) ||
                    "/" !== n.baseURL.charAt(n.baseURL.length - 1) ||
                    (n.baseURL = n.baseURL.substring(0, n.baseURL.length - 1)),
                  (n.retryURL = s.trim(n.retryURL)),
                  s.isEmpty(n.retryURL) && (n.retryURL = n.baseURL),
                  s.isEmpty(n.retryURL) ||
                    "/" !== n.retryURL.charAt(n.retryURL.length - 1) ||
                    (n.retryURL = n.retryURL.substring(
                      0,
                      n.retryURL.length - 1,
                    )),
                  n.isSetRetryListConfig ||
                    ((n.retryList = [n.baseURL, n.retryURL]),
                    (n.retryIndex = 0),
                    (n.baseURL = n.retryList[n.retryIndex]),
                    (n.isSetRetryListConfig = !0)),
                  (n.useMobileCall = !0 === n.useMobileCall),
                  n.useMobileCall && !p.isInClient() && (n.useMobileCall = !1),
                  (n.isGateway = !0 === n.isGateway),
                  n.isGateway && !n.isSetGatewayConfig)
                ) {
                  n.gatewayURL = n.gatewayURL ? n.gatewayURL : n.baseURL;
                  var r = n.gatewayURL.replace(/https:\/\/|http:\/\//gi, ""),
                    o = [];
                  (s.forEach(n.headers, function (e) {
                    "x-router" in e || o.push(e);
                  }),
                    (n.headers = o));
                  var i = r.replace(".kugou.com", "");
                  ((n.retryList = [
                    "https://gateway.kugou.com/".concat(i),
                    "https://gatewayretry.kugou.com/".concat(i),
                    "https://gateway3.kugou.com/".concat(i),
                    "https://".concat(i, ".kugou.com"),
                    n.retryURL,
                  ]),
                    (n.retryIndex = 0),
                    (n.baseURL = n.retryList[n.retryIndex]),
                    n.useMobileCall
                      ? ((n.retry = 0), (n.isSetGatewayConfig = !0))
                      : ((n.retry = n.retryList.length - 1),
                        (n.isSetGatewayConfig = !0)));
                }
                return (
                  (n.timeout = n.timeout ? n.timeout : 15e3),
                  (n.retry = n.retry),
                  (n.data = n.data ? n.data : ""),
                  "{}" !== JSON.stringify(n.data) ||
                    n.isFormData ||
                    (n.data = null),
                  (n.method = n.method ? n.method : "get"),
                  (n.method = n.method.toLowerCase()),
                  (n.async = !0 === n.async),
                  s.isEmpty(n.withCredentials) ||
                    (n.withCredentials = !0 === n.withCredentials),
                  (n.isAllowKGAntiBush = !0 === n.isAllowKGAntiBush),
                  n &&
                    n.useMobileCall &&
                    (n.kgAntiBushErrFun =
                      n.kgAntiBushErrFun ||
                      function () {
                        s.toast({
                          message: "操作过于频繁，请稍后再试",
                          duration: "2000",
                        });
                      }),
                  n &&
                    n.isCDN &&
                    (n.paramsSerializer = n.cdnApiParamsSerializer),
                  n
                );
              })(this.requestConfig, e)),
            ),
            n = [];
          for (
            this.interceptors.request.forEach(function (e) {
              n.unshift(e.fulfilled, e.rejected);
            }),
              n.push(g, void 0),
              n.push(h, void 0),
              n.push(f, void 0),
              this.interceptors.response.forEach(function (e) {
                n.push(e.fulfilled, e.rejected);
              });
            n.length;
          )
            t = t.then(n.shift(), n.shift());
          return t;
        };
        var y = d(function (e) {
            !(function (t) {
              function n(e, t) {
                var n = (65535 & e) + (65535 & t);
                return (
                  (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n)
                );
              }
              function r(e, t, r, o, i, a) {
                var s;
                return n(
                  ((s = n(n(t, e), n(o, a))) << i) | (s >>> (32 - i)),
                  r,
                );
              }
              function o(e, t, n, o, i, a, s) {
                return r((t & n) | (~t & o), e, t, i, a, s);
              }
              function i(e, t, n, o, i, a, s) {
                return r((t & o) | (n & ~o), e, t, i, a, s);
              }
              function a(e, t, n, o, i, a, s) {
                return r(t ^ n ^ o, e, t, i, a, s);
              }
              function s(e, t, n, o, i, a, s) {
                return r(n ^ (t | ~o), e, t, i, a, s);
              }
              function c(e, t) {
                ((e[t >> 5] |= 128 << (t % 32)),
                  (e[14 + (((t + 64) >>> 9) << 4)] = t));
                var r,
                  c,
                  u,
                  l,
                  d,
                  p = 1732584193,
                  f = -271733879,
                  g = -1732584194,
                  h = 271733878;
                for (r = 0; r < e.length; r += 16)
                  ((c = p),
                    (u = f),
                    (l = g),
                    (d = h),
                    (p = o(p, f, g, h, e[r], 7, -680876936)),
                    (h = o(h, p, f, g, e[r + 1], 12, -389564586)),
                    (g = o(g, h, p, f, e[r + 2], 17, 606105819)),
                    (f = o(f, g, h, p, e[r + 3], 22, -1044525330)),
                    (p = o(p, f, g, h, e[r + 4], 7, -176418897)),
                    (h = o(h, p, f, g, e[r + 5], 12, 1200080426)),
                    (g = o(g, h, p, f, e[r + 6], 17, -1473231341)),
                    (f = o(f, g, h, p, e[r + 7], 22, -45705983)),
                    (p = o(p, f, g, h, e[r + 8], 7, 1770035416)),
                    (h = o(h, p, f, g, e[r + 9], 12, -1958414417)),
                    (g = o(g, h, p, f, e[r + 10], 17, -42063)),
                    (f = o(f, g, h, p, e[r + 11], 22, -1990404162)),
                    (p = o(p, f, g, h, e[r + 12], 7, 1804603682)),
                    (h = o(h, p, f, g, e[r + 13], 12, -40341101)),
                    (g = o(g, h, p, f, e[r + 14], 17, -1502002290)),
                    (p = i(
                      p,
                      (f = o(f, g, h, p, e[r + 15], 22, 1236535329)),
                      g,
                      h,
                      e[r + 1],
                      5,
                      -165796510,
                    )),
                    (h = i(h, p, f, g, e[r + 6], 9, -1069501632)),
                    (g = i(g, h, p, f, e[r + 11], 14, 643717713)),
                    (f = i(f, g, h, p, e[r], 20, -373897302)),
                    (p = i(p, f, g, h, e[r + 5], 5, -701558691)),
                    (h = i(h, p, f, g, e[r + 10], 9, 38016083)),
                    (g = i(g, h, p, f, e[r + 15], 14, -660478335)),
                    (f = i(f, g, h, p, e[r + 4], 20, -405537848)),
                    (p = i(p, f, g, h, e[r + 9], 5, 568446438)),
                    (h = i(h, p, f, g, e[r + 14], 9, -1019803690)),
                    (g = i(g, h, p, f, e[r + 3], 14, -187363961)),
                    (f = i(f, g, h, p, e[r + 8], 20, 1163531501)),
                    (p = i(p, f, g, h, e[r + 13], 5, -1444681467)),
                    (h = i(h, p, f, g, e[r + 2], 9, -51403784)),
                    (g = i(g, h, p, f, e[r + 7], 14, 1735328473)),
                    (p = a(
                      p,
                      (f = i(f, g, h, p, e[r + 12], 20, -1926607734)),
                      g,
                      h,
                      e[r + 5],
                      4,
                      -378558,
                    )),
                    (h = a(h, p, f, g, e[r + 8], 11, -2022574463)),
                    (g = a(g, h, p, f, e[r + 11], 16, 1839030562)),
                    (f = a(f, g, h, p, e[r + 14], 23, -35309556)),
                    (p = a(p, f, g, h, e[r + 1], 4, -1530992060)),
                    (h = a(h, p, f, g, e[r + 4], 11, 1272893353)),
                    (g = a(g, h, p, f, e[r + 7], 16, -155497632)),
                    (f = a(f, g, h, p, e[r + 10], 23, -1094730640)),
                    (p = a(p, f, g, h, e[r + 13], 4, 681279174)),
                    (h = a(h, p, f, g, e[r], 11, -358537222)),
                    (g = a(g, h, p, f, e[r + 3], 16, -722521979)),
                    (f = a(f, g, h, p, e[r + 6], 23, 76029189)),
                    (p = a(p, f, g, h, e[r + 9], 4, -640364487)),
                    (h = a(h, p, f, g, e[r + 12], 11, -421815835)),
                    (g = a(g, h, p, f, e[r + 15], 16, 530742520)),
                    (p = s(
                      p,
                      (f = a(f, g, h, p, e[r + 2], 23, -995338651)),
                      g,
                      h,
                      e[r],
                      6,
                      -198630844,
                    )),
                    (h = s(h, p, f, g, e[r + 7], 10, 1126891415)),
                    (g = s(g, h, p, f, e[r + 14], 15, -1416354905)),
                    (f = s(f, g, h, p, e[r + 5], 21, -57434055)),
                    (p = s(p, f, g, h, e[r + 12], 6, 1700485571)),
                    (h = s(h, p, f, g, e[r + 3], 10, -1894986606)),
                    (g = s(g, h, p, f, e[r + 10], 15, -1051523)),
                    (f = s(f, g, h, p, e[r + 1], 21, -2054922799)),
                    (p = s(p, f, g, h, e[r + 8], 6, 1873313359)),
                    (h = s(h, p, f, g, e[r + 15], 10, -30611744)),
                    (g = s(g, h, p, f, e[r + 6], 15, -1560198380)),
                    (f = s(f, g, h, p, e[r + 13], 21, 1309151649)),
                    (p = s(p, f, g, h, e[r + 4], 6, -145523070)),
                    (h = s(h, p, f, g, e[r + 11], 10, -1120210379)),
                    (g = s(g, h, p, f, e[r + 2], 15, 718787259)),
                    (f = s(f, g, h, p, e[r + 9], 21, -343485551)),
                    (p = n(p, c)),
                    (f = n(f, u)),
                    (g = n(g, l)),
                    (h = n(h, d)));
                return [p, f, g, h];
              }
              function u(e) {
                var t,
                  n = "",
                  r = 32 * e.length;
                for (t = 0; t < r; t += 8)
                  n += String.fromCharCode((e[t >> 5] >>> (t % 32)) & 255);
                return n;
              }
              function l(e) {
                var t,
                  n = [];
                for (
                  n[(e.length >> 2) - 1] = void 0, t = 0;
                  t < n.length;
                  t += 1
                )
                  n[t] = 0;
                var r = 8 * e.length;
                for (t = 0; t < r; t += 8)
                  n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << (t % 32);
                return n;
              }
              function d(e) {
                var t,
                  n,
                  r = "0123456789abcdef",
                  o = "";
                for (n = 0; n < e.length; n += 1)
                  o +=
                    r.charAt(((t = e.charCodeAt(n)) >>> 4) & 15) +
                    r.charAt(15 & t);
                return o;
              }
              function p(e) {
                return unescape(encodeURIComponent(e));
              }
              function f(e) {
                var t;
                return u(c(l((t = p(e))), 8 * t.length));
              }
              function g(e, t) {
                return (function (e, t) {
                  var n,
                    r,
                    o = l(e),
                    i = [],
                    a = [];
                  for (
                    i[15] = a[15] = void 0,
                      o.length > 16 && (o = c(o, 8 * e.length)),
                      n = 0;
                    n < 16;
                    n += 1
                  )
                    ((i[n] = 909522486 ^ o[n]), (a[n] = 1549556828 ^ o[n]));
                  return (
                    (r = c(i.concat(l(t)), 512 + 8 * t.length)),
                    u(c(a.concat(r), 640))
                  );
                })(p(e), p(t));
              }
              function h(e, t, n) {
                return t ? (n ? g(t, e) : d(g(t, e))) : n ? f(e) : d(f(e));
              }
              e.exports ? (e.exports = h) : (t.md5 = h);
            })(l);
          }),
          b = d(function (e, t) {
            e.exports = (function () {
              function e(e, t) {
                var n,
                  r = Object.keys(e);
                return (
                  Object.getOwnPropertySymbols &&
                    ((n = Object.getOwnPropertySymbols(e)),
                    t &&
                      (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                    r.push.apply(r, n)),
                  r
                );
              }
              var t,
                n = {
                  isSSR: !1,
                  Cookie: [REDACTED]
                    write: function (e, t, n, r, o, i) {
                      (/^\w*$/.test(e) || alert("cookie格式不正确"),
                        /; /.test(t) && alert("cookie格式不正确"),
                        (e = e + "=" + t),
                        n &&
                          ((t = new Date()).setTime(t.getTime() + 1e3 * n),
                          (e += "; expires=" + t.toGMTString())),
                        r && (e += "; path=" + r),
                        o && (e += "; domain=" + o),
                        i && (e += "; secure"),
                        (document.cookie = e));
                    },
                    read: function (e, t, r) {
                      for (
                        var o = "", i = document.cookie.split("; "), a = 0;
                        a < i.length;
                        a++
                      ) {
                        var s = i[a].match(/^(\w+)=(.+)$/);
                        if (s && 1 < s.length && s[1] == e) {
                          o = s[2];
                          break;
                        }
                      }
                      return "" == o
                        ? null
                        : t
                          ? (r ? JSON : new n.Param()).parse(o)[t]
                          : o;
                    },
                  },
                  Md5: function (e) {
                    function t(e, t, n, r, o, i) {
                      return a(
                        ((i = a(a(t, e), a(r, i))) << o) | (i >>> (32 - o)),
                        n,
                      );
                    }
                    function n(e, n, r, o, i, a, s) {
                      return t((n & r) | (~n & o), e, n, i, a, s);
                    }
                    function r(e, n, r, o, i, a, s) {
                      return t((n & o) | (r & ~o), e, n, i, a, s);
                    }
                    function o(e, n, r, o, i, a, s) {
                      return t(n ^ r ^ o, e, n, i, a, s);
                    }
                    function i(e, n, r, o, i, a, s) {
                      return t(r ^ (n | ~o), e, n, i, a, s);
                    }
                    function a(e, t) {
                      var n = (65535 & e) + (65535 & t);
                      return (
                        (((e >> 16) + (t >> 16) + (n >> 16)) << 16) |
                        (65535 & n)
                      );
                    }
                    return e
                      ? (function (e) {
                          for (
                            var t = "0123456789abcdef", n = "", r = 0;
                            r < 4 * e.length;
                            r++
                          )
                            n +=
                              t.charAt((e[r >> 2] >> ((r % 4) * 8 + 4)) & 15) +
                              t.charAt((e[r >> 2] >> ((r % 4) * 8)) & 15);
                          return n;
                        })(
                          (function (e, t) {
                            ((e[t >> 5] |= 128 << (t % 32)),
                              (e[14 + (((t + 64) >>> 9) << 4)] = t));
                            for (
                              var s = 1732584193,
                                c = -271733879,
                                u = -1732584194,
                                l = 271733878,
                                d = 0;
                              d < e.length;
                              d += 16
                            ) {
                              var p = s,
                                f = c,
                                g = u,
                                h = l;
                              ((s = n(s, c, u, l, e[d + 0], 7, -680876936)),
                                (l = n(l, s, c, u, e[d + 1], 12, -389564586)),
                                (u = n(u, l, s, c, e[d + 2], 17, 606105819)),
                                (c = n(c, u, l, s, e[d + 3], 22, -1044525330)),
                                (s = n(s, c, u, l, e[d + 4], 7, -176418897)),
                                (l = n(l, s, c, u, e[d + 5], 12, 1200080426)),
                                (u = n(u, l, s, c, e[d + 6], 17, -1473231341)),
                                (c = n(c, u, l, s, e[d + 7], 22, -45705983)),
                                (s = n(s, c, u, l, e[d + 8], 7, 1770035416)),
                                (l = n(l, s, c, u, e[d + 9], 12, -1958414417)),
                                (u = n(u, l, s, c, e[d + 10], 17, -42063)),
                                (c = n(c, u, l, s, e[d + 11], 22, -1990404162)),
                                (s = n(s, c, u, l, e[d + 12], 7, 1804603682)),
                                (l = n(l, s, c, u, e[d + 13], 12, -40341101)),
                                (u = n(u, l, s, c, e[d + 14], 17, -1502002290)),
                                (s = r(
                                  s,
                                  (c = n(
                                    c,
                                    u,
                                    l,
                                    s,
                                    e[d + 15],
                                    22,
                                    1236535329,
                                  )),
                                  u,
                                  l,
                                  e[d + 1],
                                  5,
                                  -165796510,
                                )),
                                (l = r(l, s, c, u, e[d + 6], 9, -1069501632)),
                                (u = r(u, l, s, c, e[d + 11], 14, 643717713)),
                                (c = r(c, u, l, s, e[d + 0], 20, -373897302)),
                                (s = r(s, c, u, l, e[d + 5], 5, -701558691)),
                                (l = r(l, s, c, u, e[d + 10], 9, 38016083)),
                                (u = r(u, l, s, c, e[d + 15], 14, -660478335)),
                                (c = r(c, u, l, s, e[d + 4], 20, -405537848)),
                                (s = r(s, c, u, l, e[d + 9], 5, 568446438)),
                                (l = r(l, s, c, u, e[d + 14], 9, -1019803690)),
                                (u = r(u, l, s, c, e[d + 3], 14, -187363961)),
                                (c = r(c, u, l, s, e[d + 8], 20, 1163531501)),
                                (s = r(s, c, u, l, e[d + 13], 5, -1444681467)),
                                (l = r(l, s, c, u, e[d + 2], 9, -51403784)),
                                (u = r(u, l, s, c, e[d + 7], 14, 1735328473)),
                                (s = o(
                                  s,
                                  (c = r(
                                    c,
                                    u,
                                    l,
                                    s,
                                    e[d + 12],
                                    20,
                                    -1926607734,
                                  )),
                                  u,
                                  l,
                                  e[d + 5],
                                  4,
                                  -378558,
                                )),
                                (l = o(l, s, c, u, e[d + 8], 11, -2022574463)),
                                (u = o(u, l, s, c, e[d + 11], 16, 1839030562)),
                                (c = o(c, u, l, s, e[d + 14], 23, -35309556)),
                                (s = o(s, c, u, l, e[d + 1], 4, -1530992060)),
                                (l = o(l, s, c, u, e[d + 4], 11, 1272893353)),
                                (u = o(u, l, s, c, e[d + 7], 16, -155497632)),
                                (c = o(c, u, l, s, e[d + 10], 23, -1094730640)),
                                (s = o(s, c, u, l, e[d + 13], 4, 681279174)),
                                (l = o(l, s, c, u, e[d + 0], 11, -358537222)),
                                (u = o(u, l, s, c, e[d + 3], 16, -722521979)),
                                (c = o(c, u, l, s, e[d + 6], 23, 76029189)),
                                (s = o(s, c, u, l, e[d + 9], 4, -640364487)),
                                (l = o(l, s, c, u, e[d + 12], 11, -421815835)),
                                (u = o(u, l, s, c, e[d + 15], 16, 530742520)),
                                (s = i(
                                  s,
                                  (c = o(c, u, l, s, e[d + 2], 23, -995338651)),
                                  u,
                                  l,
                                  e[d + 0],
                                  6,
                                  -198630844,
                                )),
                                (l = i(l, s, c, u, e[d + 7], 10, 1126891415)),
                                (u = i(u, l, s, c, e[d + 14], 15, -1416354905)),
                                (c = i(c, u, l, s, e[d + 5], 21, -57434055)),
                                (s = i(s, c, u, l, e[d + 12], 6, 1700485571)),
                                (l = i(l, s, c, u, e[d + 3], 10, -1894986606)),
                                (u = i(u, l, s, c, e[d + 10], 15, -1051523)),
                                (c = i(c, u, l, s, e[d + 1], 21, -2054922799)),
                                (s = i(s, c, u, l, e[d + 8], 6, 1873313359)),
                                (l = i(l, s, c, u, e[d + 15], 10, -30611744)),
                                (u = i(u, l, s, c, e[d + 6], 15, -1560198380)),
                                (c = i(c, u, l, s, e[d + 13], 21, 1309151649)),
                                (s = i(s, c, u, l, e[d + 4], 6, -145523070)),
                                (l = i(l, s, c, u, e[d + 11], 10, -1120210379)),
                                (u = i(u, l, s, c, e[d + 2], 15, 718787259)),
                                (c = i(c, u, l, s, e[d + 9], 21, -343485551)),
                                (s = a(s, p)),
                                (c = a(c, f)),
                                (u = a(u, g)),
                                (l = a(l, h)));
                            }
                            return [s, c, u, l];
                          })(
                            (function (e) {
                              for (var t = [], n = 0; n < 8 * e.length; n += 8)
                                t[n >> 5] |=
                                  (255 & e.charCodeAt(n / 8)) << (n % 32);
                              return t;
                            })(e),
                            8 * e.length,
                          ),
                        )
                      : "";
                  },
                  Param: function () {
                    var e = [],
                      t = {};
                    ((this.parse = function (e) {
                      for (
                        var n = e.split("&"), r = 0, o = n.length;
                        r < o;
                        r++
                      ) {
                        var i = n[r].split("=");
                        t[i[0]] = i[1];
                      }
                      return t;
                    }),
                      (this.toString = function (t) {
                        return e.join((t = t || "&"));
                      }),
                      (this.add = function (t, n) {
                        return (e.push(t + "=" + n), this);
                      }));
                  },
                  IsEmpty: function (e) {
                    return void 0 === e || null == e || "" == e;
                  },
                  Guid: function () {
                    function e() {
                      return ((65536 * (1 + Math.random())) | 0)
                        .toString(16)
                        .substring(1);
                    }
                    return (
                      e() +
                      e() +
                      "-" +
                      e() +
                      "-" +
                      e() +
                      "-" +
                      e() +
                      "-" +
                      e() +
                      e() +
                      e()
                    );
                  },
                  getKgMid: function () {
                    if (n.isSSR) return "";
                    var e = n.Cookie.read("kg_mid");
                    if (navigator.cookieEnabled) {
                      if (n.IsEmpty(e)) {
                        var t = n.Guid();
                        e = n.Md5(t);
                        try {
                          n.Cookie.write(
                            "kg_mid",
                            n.Md5(t),
                            864e6,
                            "/",
                            "kugou.com",
                          );
                        } catch (e) {}
                      }
                    } else {
                      var r = navigator.userAgent,
                        o = (function () {
                          var e = navigator.plugins,
                            t = "";
                          if (0 < e.length) {
                            for (var n = [], r = 0, o = e.length; r < o; r++) {
                              var i = e[r].name;
                              n.push(i);
                            }
                            t = n.toString();
                          }
                          return t;
                        })(),
                        i = screen.width + "x" + screen.height,
                        a = screen.colorDepth || "",
                        s = screen.pixelDepth || "";
                      ((t = (function () {
                        var e = ["canvas"];
                        try {
                          var t,
                            r = document.createElement("canvas");
                          r.getContext &&
                            r.getContext("2d") &&
                            ((r.width = 200),
                            (r.height = 200),
                            (r.style.display = "inline"),
                            (t = r.getContext("2d")).rect(0, 0, 10, 10),
                            t.rect(2, 2, 6, 6),
                            e.push(
                              "canvas winding:" +
                                (!1 === t.isPointInPath(5, 5, "evenodd")
                                  ? "yes"
                                  : "no"),
                            ),
                            (t.textBaseline = "alphabetic"),
                            (t.fillStyle = "#f60"),
                            t.fillRect(125, 1, 62, 20),
                            (t.fillStyle = "#069"),
                            (t.font = "14px 'Arial'"),
                            t.fillText("hello kugou", 2, 15),
                            (t.fillStyle = "rgba(102, 204, 0, 0.2)"),
                            (t.font = "18pt Arial"),
                            t.fillText("hello kugou", 4, 45),
                            (t.globalCompositeOperation = "multiply"),
                            (t.fillStyle = "rgb(255,0,255)"),
                            t.beginPath(),
                            t.arc(50, 50, 50, 0, 2 * Math.PI, !0),
                            t.closePath(),
                            t.fill(),
                            (t.fillStyle = "rgb(0,255,255)"),
                            t.beginPath(),
                            t.arc(100, 50, 50, 0, 2 * Math.PI, !0),
                            t.closePath(),
                            t.fill(),
                            (t.fillStyle = "rgb(255,255,0)"),
                            t.beginPath(),
                            t.arc(75, 100, 50, 0, 2 * Math.PI, !0),
                            t.closePath(),
                            t.fill(),
                            (t.fillStyle = "rgb(255,0,255)"),
                            t.arc(75, 75, 75, 0, 2 * Math.PI, !0),
                            t.arc(75, 75, 25, 0, 2 * Math.PI, !0),
                            t.fill("evenodd"),
                            r.toDataURL &&
                              e.push("canvas fp:" + r.toDataURL()));
                        } catch (e) {}
                        return n.Md5(e.toString());
                      })()),
                        (e = n.Md5(r + o + i + a + s + t)));
                    }
                    return e;
                  },
                  isiOS: function () {
                    if (n.isSSR) return !1;
                    var e = (r = navigator.userAgent).match(
                        /(iPad).*OS\s([\d_]+)/,
                      ),
                      t = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                      r = !e && r.match(/(iPhone\sOS)\s([\d_]+)/);
                    return !!(e || t || r);
                  },
                  GetPCClientUserInfo: function (e) {
                    if (n.isSSR) return null;
                    var t =
                        "KGSupercall_GetUserInfo" +
                        Math.random().toString().substr(2, 9),
                      r = null;
                    window[t] = function (n) {
                      (e && e(n), (window[t] = null));
                    };
                    try {
                      r = external.SuperCall(504, '{"callback":"' + t + '"}');
                    } catch (e) {}
                    if (void 0 === r || !e)
                      return e ? void 0 : ((window[t] = null), r);
                    window[t](r);
                  },
                  getPCMID_APPID: function (e) {
                    if (n.isSSR) return null;
                    try {
                      var t;
                      "function" == typeof e
                        ? ((t =
                            "KGSupercall_getMID_APPID" +
                            Math.random().toString().substr(2, 9)),
                          (top.window[t] = function (n) {
                            n && ((top.window[t] = null), e && e(n));
                          }),
                          external.SuperCall(822, '{"callback":"' + t + '"}'))
                        : external.SuperCall(822, e);
                    } catch (e) {}
                  },
                  isPCClient: function () {
                    return (
                      !n.isSSR &&
                      !!(
                        window.external &&
                        window.external.SuperCall &&
                        "function" == typeof window.external.SuperCall &&
                        window.external.GetVersion &&
                        0 < window.external.GetVersion()
                      )
                    );
                  },
                },
                r =
                  ((function (e) {
                    var t;
                    function n(e, t) {
                      var n,
                        r = Object.keys(e);
                      return (
                        Object.getOwnPropertySymbols &&
                          ((n = Object.getOwnPropertySymbols(e)),
                          t &&
                            (n = n.filter(function (t) {
                              return Object.getOwnPropertyDescriptor(e, t)
                                .enumerable;
                            })),
                          r.push.apply(r, n)),
                        r
                      );
                    }
                    function r(e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? n(Object(r), !0).forEach(function (t) {
                              var n,
                                o = e;
                              ((t = r[(n = t)]),
                                n in o
                                  ? Object.defineProperty(o, n, {
                                      value: t,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                    })
                                  : (o[n] = t));
                            })
                          : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(r),
                              )
                            : n(Object(r)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t),
                                );
                              });
                      }
                      return e;
                    }
                    e.exports = {
                      isIOS: (t = {
                        str2Json: function (e) {
                          var t = {};
                          if (
                            "[object String]" ===
                            Object.prototype.toString.call(e)
                          )
                            try {
                              t = JSON.parse(e);
                            } catch (e) {
                              t = {};
                            }
                          return t;
                        },
                        json2Str: function (e) {
                          var t = e;
                          if ("string" != typeof e)
                            try {
                              t = JSON.stringify(e);
                            } catch (e) {
                              t = "";
                            }
                          return t;
                        },
                        cbNum: 0,
                        isIOS: !!navigator.userAgent.match(/KGBrowser/gi),
                        isKugouAndroid:
                          !!navigator.userAgent.match(/kugouandroid/gi),
                        isAndroid:
                          "undefined" != typeof external &&
                          void 0 !== external.superCall,
                        isDKAPP: !!navigator.userAgent.match(/kgshortvideo/gi),
                        isKGRing: !!navigator.userAgent.match(/KGRingCode/gi),
                        isFXAPP: !!navigator.userAgent.match(/Fanxing/gi),
                        isFXQianBanAPP:
                          !!navigator.userAgent.match(/QianBan/gi),
                        isIframePage: window.parent && window.parent != window,
                        isInClient: function () {
                          return !!(
                            t.isAndroid ||
                            t.isKugouAndroid ||
                            t.isIOS ||
                            t.isFXAPP ||
                            t.isFXQianBanAPP ||
                            t.isDKAPP ||
                            t.isKGRing
                          );
                        },
                        loadUrl: function (e) {
                          var t = document.createElement("iframe");
                          (t.setAttribute("src", e),
                            t.setAttribute("style", "display:none;"),
                            t.setAttribute("height", "0px"),
                            t.setAttribute("width", "0px"),
                            t.setAttribute("frameborder", "0"),
                            document.body.appendChild(t),
                            t.parentNode.removeChild(t));
                        },
                        mobileCallInIframe: function (e, t, n) {
                          ((e = { type: "KgMobileCall", cmd: e }),
                            t && (e.dataJson = t),
                            n && (e.cbName = n),
                            (e.source = "personal"),
                            window.parent.postMessage(e, "*"));
                        },
                        receiveMessage: function (e) {
                          var t = e.data;
                          ("KgMobileCall" == t.type &&
                            window[t.cbName] &&
                            (t.dataJson
                              ? window[t.cbName](t.dataJson)
                              : window[t.cbName](),
                            (window[t.cbName] = null)),
                            "KgWebMobileCall" == t.type &&
                              ((e = t.funcName.split(".")),
                              KgWebMobileCall[e[1]] &&
                                (t.dataJson
                                  ? KgWebMobileCall[e[1]](t.dataJson)
                                  : KgWebMobileCall[e[1]]())));
                        },
                        callCmd: function (e) {
                          var n,
                            r,
                            o = "kugouurl";
                          if (
                            ((o = t.isKugouAndroid
                              ? "kugoujsbridge"
                              : t.isAndroid
                                ? "superCall"
                                : t.isFXAPP || t.isFXQianBanAPP
                                  ? "fanxing2"
                                  : "kugouurl"),
                            "kugoujsbridge" ==
                              (o =
                                e && e.useMobileCallType
                                  ? e.useMobileCallType
                                  : o))
                          ) {
                            var i = {},
                              a = "";
                            (e.cmd && (i.cmd = e.cmd),
                              e.jsonStr && (i.jsonStr = e.jsonStr),
                              e.callback &&
                                (t.cbNum++,
                                (a =
                                  "kgandroidmobilecall_" +
                                  (e.cmd || 0) +
                                  "_" +
                                  t.cbNum +
                                  Math.random().toString().substr(2, 9)),
                                (i.callback = a),
                                (window[a] = function (n, r) {
                                  if (void 0 !== n) {
                                    if (
                                      "[object String]" ===
                                      Object.prototype.toString.call(n)
                                    ) {
                                      try {
                                        n =
                                          "#" === r
                                            ? decodeURIComponent(n)
                                            : decodeURIComponent(
                                                decodeURIComponent(n),
                                              );
                                      } catch (e) {
                                        console.error("decodeURIComponent", e);
                                      }
                                      e.callback(t.str2Json(n));
                                    } else e.callback(n);
                                  }
                                })),
                              e.AndroidCallback &&
                                (((s = t.str2Json(e.jsonStr)).AndroidCallback =
                                  a),
                                (e.jsonStr = t.json2Str(s)),
                                e.jsonStr && (i.jsonStr = e.jsonStr)));
                            var s = encodeURIComponent(JSON.stringify(i));
                            ((s =
                              "kugoujsbridge://start.kugou_jsbridge/?".concat(
                                s,
                              )),
                              t.isIframePage
                                ? t.mobileCallInIframe(i.cmd, i.jsonStr, a)
                                : t.loadUrl(s));
                          } else if ("superCall" == o) {
                            if (((a = i = ""), e.jsonStr)) {
                              if (
                                (e.callback &&
                                  "" !== e.callback &&
                                  !0 === e.AndroidCallback &&
                                  (t.cbNum++,
                                  (a =
                                    "kgmobilecall_" +
                                    (e.cmd || 0) +
                                    "_" +
                                    t.cbNum +
                                    Math.random().toString().substr(2, 9)),
                                  (window[a] = function (n, r) {
                                    if (void 0 !== n) {
                                      if (
                                        "[object String]" ===
                                        Object.prototype.toString.call(n)
                                      ) {
                                        try {
                                          n =
                                            "#" === r
                                              ? decodeURIComponent(n)
                                              : decodeURIComponent(
                                                  decodeURIComponent(n),
                                                );
                                        } catch (e) {
                                          console.error(
                                            "decodeURIComponent",
                                            decodeURIComponent,
                                          );
                                        }
                                        e.callback(t.str2Json(n));
                                      } else e.callback(n);
                                    }
                                  }),
                                  ((s = t.str2Json(e.jsonStr)).AndroidCallback =
                                    a),
                                  (e.jsonStr = t.json2Str(s))),
                                t.isIframePage && e.AndroidCallback)
                              )
                                t.mobileCallInIframe(e.cmd, e.jsonStr, a);
                              else
                                try {
                                  i = external.superCall(e.cmd, e.jsonStr);
                                } catch (e) {}
                            } else
                              try {
                                i = external.superCall(e.cmd);
                              } catch (e) {}
                            e.AndroidCallback ||
                              (e.callback &&
                                "" !== e.callback &&
                                "AndroidCallback" != i &&
                                ((i = t.str2Json(i)), e.callback(i)));
                          } else
                            "fanxing2" == o
                              ? ((o = r = ""),
                                (r = e.callback
                                  ? (t.cbNum++,
                                    (o =
                                      "kgmobilecall_" +
                                      (e.cmd || 0) +
                                      "_" +
                                      t.cbNum +
                                      Math.random().toString().substr(2, 9)),
                                    (window[o] = function (n) {
                                      void 0 !== n &&
                                        e.callback &&
                                        ("[object String]" ===
                                        Object.prototype.toString.call(n)
                                          ? e.callback(t.str2Json(n))
                                          : e.callback(n));
                                    }),
                                    e.jsonStr
                                      ? 'fanxing2://send.message/?{"cmd":' +
                                        e.cmd +
                                        ', "jsonStr":' +
                                        e.jsonStr +
                                        ', "callback":"' +
                                        o +
                                        '"}'
                                      : 'fanxing2://send.message/?{"cmd":' +
                                        e.cmd +
                                        ', "callback":"' +
                                        o +
                                        '"}')
                                  : e.jsonStr
                                    ? 'fanxing2://send.message/?{"cmd":' +
                                      e.cmd +
                                      ', "jsonStr":' +
                                      e.jsonStr +
                                      "}"
                                    : 'fanxing2://send.message/?{"cmd":' +
                                      e.cmd +
                                      "}"),
                                t.isIframePage
                                  ? t.mobileCallInIframe(e.cmd, e.jsonStr, o)
                                  : navigator.userAgent.match(
                                        /(Android);?[\s\/]+([\d.]+)?/,
                                      )
                                    ? external && external.callFanxing
                                      ? ((n = {
                                          cmd: e.cmd,
                                          jsonStr: e.jsonStr || "",
                                          callback: o,
                                        }),
                                        external.callFanxing(JSON.stringify(n)))
                                      : window.prompt(r)
                                    : t.loadUrl(r))
                              : ((r = n = ""),
                                e.callback &&
                                  (t.cbNum++,
                                  (r =
                                    "kgmobilecall_" +
                                    (e.cmd || 0) +
                                    "_" +
                                    t.cbNum +
                                    Math.random().toString().substr(2, 9)),
                                  (window[r] = function (n) {
                                    void 0 !== n &&
                                      e.callback &&
                                      ("[object String]" ===
                                      Object.prototype.toString.call(n)
                                        ? e.callback(t.str2Json(n))
                                        : e.callback(n));
                                  })),
                                r &&
                                  "" != r &&
                                  e.jsonStr &&
                                  (n =
                                    'kugouurl://start.music/?{"cmd":' +
                                    e.cmd +
                                    ', "jsonStr":' +
                                    e.jsonStr +
                                    ', "callback":"' +
                                    r +
                                    '"}'),
                                r &&
                                  "" != r &&
                                  !e.jsonStr &&
                                  (n =
                                    'kugouurl://start.music/?{"cmd":' +
                                    e.cmd +
                                    ', "callback":"' +
                                    r +
                                    '"}'),
                                "" == r &&
                                  e.jsonStr &&
                                  (n =
                                    'kugouurl://start.music/?{"cmd":' +
                                    e.cmd +
                                    ', "jsonStr":' +
                                    e.jsonStr +
                                    "}"),
                                "" != r ||
                                  e.jsonStr ||
                                  (n =
                                    'kugouurl://start.music/?{"cmd":' +
                                    e.cmd +
                                    "}"),
                                t.isIframePage
                                  ? t.mobileCallInIframe(e.cmd, e.jsonStr, r)
                                  : t.loadUrl(n));
                        },
                        sendCommandOrder: function (e) {
                          var n = window.location.origin,
                            r =
                              ~n.indexOf("voo.kugou.com") ||
                              ~n.indexOf("http://10.16.4.19:8099") ||
                              ~n.indexOf("http://test.kugou.com:8099"),
                            o = window._VO_ACT_ID_;
                          r &&
                            o &&
                            e &&
                            ((e = { actId: o, cmd: e }),
                            (e = t.json2Str({
                              url: "".concat(n, "/public/addCommandOrder"),
                              method: "post",
                              param: t.json2Str(e),
                              header: { "Content-Type": "application/json" },
                              AndroidCallback: !0,
                            })),
                            t.callCmd({
                              cmd: 186,
                              jsonStr: e,
                              callback: function (e) {
                                ~window.location.href.indexOf("debugCmd") &&
                                  console.log(e);
                              },
                            }));
                        },
                        formatUAMethod: function () {
                          var e = { os: "", app: "" };
                          return (
                            t.isIOS
                              ? ((e.os = "iphone"),
                                navigator.userAgent.match(/ipad/gi) &&
                                  (e.os = "ipad"))
                              : t.isAndroid || t.isKugouAndroid
                                ? (e.os = "android")
                                : navigator.userAgent.match(/iphone/gi)
                                  ? (e.os = "iphone")
                                  : navigator.userAgent.match(/ipad/gi)
                                    ? (e.os = "ipad")
                                    : navigator.userAgent.match(/android/gi)
                                      ? (e.os = "android")
                                      : (e.os = "other"),
                            t.isDKAPP
                              ? (e.app = "kgshortvideo")
                              : t.isAndroid || t.isKugouAndroid || t.isIOS
                                ? (e.app = "kugou")
                                : t.isKGRing
                                  ? (e.app = "KGRingCode")
                                  : t.isFXAPP
                                    ? (e.app = "Fanxing")
                                    : navigator.userAgent.match(
                                          /micromessenger/gi,
                                        ) &&
                                        !navigator.userAgent.match(/wxwork/gi)
                                      ? (e.app = "weixin")
                                      : navigator.userAgent.match(
                                            /micromessenger/gi,
                                          ) &&
                                          navigator.userAgent.match(/wxwork/gi)
                                        ? (e.app = "wxwork")
                                        : navigator.userAgent.match(/weibo/gi)
                                          ? (e.app = "weibo")
                                          : (navigator.userAgent.match(
                                                /android/gi,
                                              ) &&
                                                navigator.userAgent.match(
                                                  /qq/gi,
                                                ) &&
                                                navigator.userAgent.match(
                                                  /mqqbrowser/gi,
                                                )) ||
                                              (("iphone" === e.os ||
                                                "ipad" === e.os) &&
                                                navigator.userAgent.match(
                                                  / qq/gi,
                                                ))
                                            ? (e.app = "qq")
                                            : (e.app = "other"),
                            e
                          );
                        },
                      }).isIOS,
                      isKugouAndroid: t.isKugouAndroid,
                      isAndroid: t.isAndroid,
                      isFXAPP: t.isFXAPP,
                      isFXQianBanAPP: t.isFXQianBanAPP,
                      isDKAPP: t.isDKAPP,
                      isKGRing: t.isKGRing,
                      formatUA: t.formatUAMethod(),
                      isInClient: function () {
                        return t.isInClient();
                      },
                      mobileCall: function (e, n, o, i) {
                        var a = "";
                        if ((n && (a = t.json2Str(n)), !e))
                          return (console.error("请输入命令号！"), !1);
                        if (
                          ((n = {}),
                          e && (n.cmd = e),
                          "" != a && (n.jsonStr = a),
                          o && (n.callback = o),
                          (n = r(r({}, n), i)),
                          !e ||
                            (186 != e && 225 != e) ||
                            (o && (n.AndroidCallback = !0)),
                          n.AndroidCallback && !n.jsonStr && (n.jsonStr = {}),
                          t.isInClient())
                        ) {
                          t.callCmd(n);
                          try {
                            t.sendCommandOrder(e);
                          } catch (e) {}
                        } else o && o({ status: 0, error: "不在客户端内" });
                      },
                      KgWebMobileCall: function (e, n) {
                        if (e)
                          try {
                            t.isIframePage &&
                              window.parent.postMessage(
                                { type: "KgWebMobileCall", funcName: e },
                                "*",
                              );
                            var r = e.split(".");
                            r.reduce(function (t, o) {
                              if (t[o]) {
                                if (o !== r[r.length - 1]) return t[o];
                                var i = t[o];
                                return "function" == typeof i
                                  ? ((t[o] = function () {
                                      (i && i.apply(void 0, arguments),
                                        n && n.apply(void 0, arguments));
                                    }),
                                    t[o])
                                  : (console.error(
                                      "请检查，当前环境变量已注册了对象：" +
                                        e +
                                        "，且该对象不是方法",
                                    ),
                                    null);
                              }
                              return (
                                o === r[r.length - 1]
                                  ? (t[o] = function () {
                                      n && n.apply(void 0, arguments);
                                    })
                                  : (t[o] = {}),
                                t[o]
                              );
                            }, window);
                          } catch (e) {}
                      },
                    };
                  })((t = { exports: {} })),
                  t.exports);
              return function (t, o, i, a) {
                var s, c, u, l;
                n.isSSR
                  ? o && o(null)
                  : ((s = { useMobileCallType: "" }),
                    i &&
                      r.isKugouAndroid &&
                      !r.isIOS &&
                      (s = { useMobileCallType: "superCall" }),
                    (l = 101),
                    (c = {
                      appid: null,
                      mid: null,
                      uuid: null,
                      plat: null,
                      dfid: null,
                      userid: null,
                      userpic: null,
                      userNickName: null,
                      token: null,
                      clientver: null,
                    }),
                    (u = function (e, t) {
                      return (
                        Array.isArray(a) &&
                          a.length &&
                          a.forEach(function (n) {
                            e.hasOwnProperty(n) || (e[n] = t[n] || "");
                          }),
                        e
                      );
                    }),
                    window.MiniApp && window.MiniApp.listenGetUserInfo
                      ? window.MiniApp &&
                        window.MiniApp.listenGetUserInfo({
                          success: function (e) {
                            var t = parseInt(new Date().getTime());
                            (1e3 ===
                            (t = {
                              appid: Number(e.appid) || 1058,
                              clientver: e.clientver || 12e3,
                              uuid: e.uuid || e.mid || t,
                              mid: e.mid || t,
                              dfid: e.dfid || "-",
                              userid: e.kugouID,
                              token: e.token,
                              clienttime: t,
                            }).appid
                              ? (t.plat = 2)
                              : 1005 === t.appid
                                ? (t.plat = 1)
                                : (t.plat = 4),
                              o && o(t));
                          },
                          fail: function (e) {
                            (console.error("miniapp 获取用户信息失败"),
                              o && o(null));
                          },
                        })
                      : r.isInClient() && !r.isFXAPP
                        ? r.mobileCall(
                            l,
                            null,
                            function (t) {
                              (1 == t.status
                                ? ((c.userid = t.kugouID),
                                  (c.token = t.token),
                                  (c.userpic = t.photo),
                                  (c.userNickName = t.nickName),
                                  (c.isVIP = t.isVIP || t.isVip))
                                : ((c.userid = null),
                                  (c.token = null),
                                  (c.userpic = null),
                                  (c.userNickName = null)),
                                (c.appid = t.appid),
                                r.mobileCall(
                                  122,
                                  null,
                                  function (n) {
                                    ((c.clientver = n.version),
                                      (c.platform = n.platform || ""),
                                      r.mobileCall(
                                        124,
                                        null,
                                        function (i) {
                                          ((c.mid = i.mid_v2 || i.mid),
                                            (c.dfid = i.dfid || "-"),
                                            (c.uuid = i.uuid || c.mid),
                                            (c.osVersion = i.osVersion || ""),
                                            r.isIOS
                                              ? (c.plat = 2)
                                              : (c.plat = 1),
                                            (c = u(
                                              c,
                                              (function (t) {
                                                for (
                                                  var n = 1;
                                                  n < arguments.length;
                                                  n++
                                                ) {
                                                  var r =
                                                    null != arguments[n]
                                                      ? arguments[n]
                                                      : {};
                                                  n % 2
                                                    ? e(r, !0).forEach(
                                                        function (e) {
                                                          var n, o;
                                                          ((n = t),
                                                            (e = r[(o = e)]),
                                                            o in n
                                                              ? Object.defineProperty(
                                                                  n,
                                                                  o,
                                                                  {
                                                                    value: e,
                                                                    enumerable:
                                                                      !0,
                                                                    configurable:
                                                                      !0,
                                                                    writable:
                                                                      !0,
                                                                  },
                                                                )
                                                              : (n[o] = e));
                                                        },
                                                      )
                                                    : Object.getOwnPropertyDescriptors
                                                      ? Object.defineProperties(
                                                          t,
                                                          Object.getOwnPropertyDescriptors(
                                                            r,
                                                          ),
                                                        )
                                                      : e(r).forEach(
                                                          function (e) {
                                                            Object.defineProperty(
                                                              t,
                                                              e,
                                                              Object.getOwnPropertyDescriptor(
                                                                r,
                                                                e,
                                                              ),
                                                            );
                                                          },
                                                        );
                                                }
                                                return t;
                                              })({}, t, {}, n, {}, i),
                                            )),
                                            o && o(c));
                                        },
                                        s,
                                      ));
                                  },
                                  s,
                                ));
                            },
                            s,
                          )
                        : r.isInClient() && r.isFXAPP
                          ? r.mobileCall(625, null, function (e) {
                              ((e = JSON.parse(e.jsonStr)),
                                (c.clientver = e.version),
                                (c.mid = e.mid),
                                (c.uuid = e.uuid || c.mid),
                                (c.dfid = e.dfid || "-"),
                                (c.appid = e.appId),
                                n.isiOS() ? (c.plat = 2) : (c.plat = 1),
                                r.mobileCall(410, null, function (e) {
                                  1 == JSON.parse(e.jsonStr).status
                                    ? r.mobileCall(411, {}, function (e) {
                                        ((e = JSON.parse(e.jsonStr).jsonStr
                                          ? JSON.parse(e.jsonStr).jsonStr
                                          : JSON.parse(e.jsonStr)),
                                          (c.userid = e.kugouId),
                                          (c.token = e.token),
                                          (c.pic = e.userLogo),
                                          (c.nickName = e.nickName),
                                          o && o(c));
                                      })
                                    : ((c.userid = null),
                                      (c.token = null),
                                      (c.userpic = null),
                                      (c.userNickName = null),
                                      o && o(c));
                                }));
                            })
                          : n.isPCClient()
                            ? n.GetPCClientUserInfo(function (e) {
                                try {
                                  e = JSON.parse(e);
                                } catch (e) {}
                                ((c.userid = e.kugouid || ""),
                                  (c.token = e.token || ""),
                                  (c.userNickName = e.nickname || ""),
                                  (c.userpic = e.usrPic || ""),
                                  (c.userNickName = c.userNickName
                                    ? unescape(c.userNickName)
                                    : ""),
                                  n.getPCMID_APPID(function (e) {
                                    try {
                                      e = JSON.parse(e);
                                    } catch (e) {}
                                    ((c.appid = e.appid || 1001),
                                      (c.dfid = e.dfid || "-"),
                                      (c.mid = e.mid || ""),
                                      (c.uuid = e.uuid || c.mid),
                                      (c.plat = 3),
                                      (c.clientver =
                                        window.external.GetVersion()),
                                      (c = u(c)),
                                      o && o(c));
                                  }));
                              })
                            : ((i = n.Cookie.read("a_id")),
                              (l = n.Cookie.read("KuGoo", "a_id")),
                              (c.appid = t || null),
                              (c.mid = n.getKgMid()),
                              (c.uuid = c.mid),
                              (c.plat = 4),
                              (c.dfid = n.Cookie.read("kg_dfid") || "-"),
                              (c.userid = n.Cookie.read("KuGoo", "KugooID")),
                              (c.userpic = n.Cookie.read("KuGoo", "Pic")),
                              (c.userNickName = n.Cookie.read(
                                "KuGoo",
                                "NickName",
                              )),
                              (c.token = n.Cookie.read("KuGoo", "t")),
                              (c.appid = c.appid || l || i || null),
                              l &&
                                l != c.appid &&
                                c.appid &&
                                ((1010 != l && 1014 != l) ||
                                  (1010 != c.appid && 1014 != c.appid)) &&
                                ((c.userid = null),
                                (c.token = null),
                                (c.userpic = null),
                                (c.userNickName = null)),
                              (c.clientver = 1e3),
                              (c.userNickName = c.userNickName
                                ? unescape(c.userNickName)
                                : ""),
                              o && o(c)));
              };
            })();
          });
        function v() {
          var e,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            o = !1,
            i = !1,
            a = "json",
            s = t(
              {},
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            ),
            c = p.isInClient(),
            u = !1;
          ("function" == typeof r
            ? (e = r)
            : ((e = r.callback),
              (o = r.useH5 || !1),
              (a = r.postType || "json"),
              (i = r.isCDN || !1),
              (u = r.isFormData || !1)),
            n &&
              ("[object Object]" != Object.prototype.toString.call(n) ||
                "urlencoded" == a) &&
              (c = !1));
          var l = function (t) {
              var o = [],
                i = [],
                s = "NVPh5oo715z5DIWAeQlhMDsWXXQV4hwt";
              for (var c in (r &&
                r.appkey &&
                (delete t.srcappid, (s = r.appkey)),
              t))
                o.push(c);
              if (
                (o.sort(),
                o.forEach(function (e) {
                  i.push(e + "=" + t[e]);
                }),
                n && !u)
              ) {
                if ("[object Object]" == Object.prototype.toString.call(n)) {
                  if ("json" == a) i.push(JSON.stringify(n));
                  else {
                    var l = [];
                    for (var c in n) l.push(c + "=" + n[c]);
                    i.push(l.join("&"));
                  }
                } else i.push(n);
              }
              (i.unshift(s),
                i.push(s),
                (t.signature = y(i.join(""))),
                r.log &&
                  (console.log("H5签名前参数排序结果", i),
                  console.log("H5签名前md5原字符串", i.join("")),
                  console.log("H5签名后返回", t)),
                n
                  ? e &&
                    e(
                      t,
                      "[object Object]" == Object.prototype.toString.call(n) &&
                        "json" == a
                        ? JSON.stringify(n)
                        : n,
                    )
                  : e && e(t));
            },
            d = function () {
              var e = new Date().getTime(),
                n = {
                  srcappid: "2919",
                  clientver: "20000",
                  clienttime: e,
                  mid: e,
                  uuid: e,
                  dfid: "-",
                };
              s && s.appid && s.clientver && s.mid && s.uuid && s.dfid
                ? ((s.srcappid = "2919"),
                  (s.clienttime = s.clienttime || e),
                  l(s))
                : b(1058, function (e) {
                    ((n.appid = e.appid),
                      (n.clientver = e.clientver),
                      (n.mid = e.mid),
                      (n.uuid = e.uuid),
                      (n.dfid = e.dfid),
                      s.appid || delete s.appid,
                      i &&
                        (delete n.clienttime,
                        delete n.mid,
                        delete n.uuid,
                        delete n.dfid),
                      l((s = t(t({}, n), s))));
                  });
            };
          if (c && !o) {
            var f = !1;
            p.mobileCall(764, { get: s, post: n }, function (o) {
              return (
                !f &&
                ((f = !0),
                o && o.status
                  ? (delete o.status,
                    r.log &&
                      (console.log("客户端签名前参数", { get: s, post: n }),
                      console.log("客户端签名后返回", t(t({}, s), o))),
                    (s = t(t({}, s), o)),
                    n
                      ? e &&
                        e(
                          s,
                          "[object Object]" ==
                            Object.prototype.toString.call(n) && "json" == a
                            ? JSON.stringify(n)
                            : n,
                        )
                      : e && e(s),
                    !1)
                  : ((c = !1), void d()))
              );
            });
          } else ((c = !1), d());
        }
        var k,
          S,
          j =
            ((k = new w(m)),
            (S = w.prototype.request.bind(k)),
            s.extend(S, w.prototype, k),
            s.extend(S, k),
            S.interceptors.request.on(function (e) {
              return new Promise(function (n) {
                var r = !1;
                ("h5" == e.sign && (r = !0),
                  e.isAllowSign
                    ? "openapi" == e.sign
                      ? (function () {
                          var e,
                            n =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "",
                            r =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : "",
                            o =
                              arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : {},
                            i = "json",
                            a = t(
                              {},
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            );
                          ("function" == typeof o
                            ? (e = o)
                            : ((e = o.callback), (i = o.postType || "json")),
                            (function () {
                              var t = [],
                                s = [];
                              for (var c in a) t.push(c);
                              if (
                                (t.sort(),
                                t.forEach(function (e) {
                                  s.push(e + "=" + a[e]);
                                }),
                                n)
                              ) {
                                if (
                                  "[object Object]" ==
                                  Object.prototype.toString.call(n)
                                ) {
                                  if ("json" == i) s.push(JSON.stringify(n));
                                  else {
                                    var u = [];
                                    for (var c in n) u.push(c + "=" + n[c]);
                                    s.push(u.join("&"));
                                  }
                                } else s.push(n);
                              }
                              (s.unshift(r),
                                s.push(r),
                                (a.signature = y(s.join(""))),
                                o.log &&
                                  (console.log("H5签名前参数", s),
                                  console.log("H5签名后返回", a)),
                                e && e(a));
                            })());
                        })(e.params, e.data, e.signSalt, {
                          postType: "json",
                          log: !1,
                          callback: function (t) {
                            ((e.params = t), n(e));
                          },
                        })
                      : v(e.params, e.data, {
                          useH5: r,
                          postType: "json",
                          log: e.signLog || !1,
                          appkey: e.signAppkey || e.appkey || null,
                          isCDN: e.isCDN,
                          isFormData: e.isFormData || !1,
                          callback: function (t) {
                            if (
                              ((e.params = t),
                              e &&
                                e.needEncodeData &&
                                e.needEncodeData.getDataKeyList &&
                                e.needEncodeData.getDataKeyList.length > 0)
                            )
                              for (
                                var r = 0,
                                  o = e.needEncodeData.getDataKeyList.length;
                                r < o;
                                r++
                              ) {
                                var i = e.needEncodeData.getDataKeyList[r];
                                i &&
                                  e.params[i] &&
                                  (e.params[i] = encodeURIComponent(
                                    e.params[i],
                                  ));
                              }
                            if (
                              e &&
                              e.needEncodeData &&
                              e.needEncodeData.postDataKeyList &&
                              e.needEncodeData.postDataKeyList.length > 0
                            )
                              for (
                                var a = 0,
                                  s = e.needEncodeData.postDataKeyList.length;
                                a < s;
                                a++
                              ) {
                                var c = e.needEncodeData.postDataKeyList[a];
                                c &&
                                  e.data[c] &&
                                  (e.data[c] = encodeURIComponent(e.data[c]));
                              }
                            n(e);
                          },
                        })
                    : n(e));
              });
            }),
            S.interceptors.request.on(function (e) {
              return new Promise(function (t) {
                t(e);
              });
            }),
            S.interceptors.response.on(void 0, function (e) {
              if (e && e.config && e.config.retry > 0) {
                if (
                  ((e.config.retryIndex =
                    (e.config.retryIndex + 1) % e.config.retryList.length),
                  (e.config.baseURL =
                    e.config.retryList[e.config.retryIndex] ||
                    e.config.baseURL),
                  e.config.retry--,
                  e.request && (e.request.abort(), (e.request = null)),
                  e.config &&
                    e.config.params &&
                    e.config.params.signature &&
                    delete e.config.params.signature,
                  e.config &&
                    e.config.needEncodeData &&
                    e.config.needEncodeData.getDataKeyList &&
                    e.config.needEncodeData.getDataKeyList.length > 0)
                )
                  for (
                    var t = 0,
                      n = e.config.needEncodeData.getDataKeyList.length;
                    t < n;
                    t++
                  ) {
                    var r = e.config.needEncodeData.getDataKeyList[t];
                    r &&
                      e.config.params[r] &&
                      (e.config.params[r] = decodeURIComponent(
                        e.config.params[r],
                      ));
                  }
                if (
                  e.config &&
                  e.config.needEncodeData &&
                  e.config.needEncodeData.postDataKeyList &&
                  e.config.needEncodeData.postDataKeyList.length > 0
                )
                  for (
                    var o = 0,
                      i = e.config.needEncodeData.postDataKeyList.length;
                    o < i;
                    o++
                  ) {
                    var a = e.config.needEncodeData.postDataKeyList[o];
                    a &&
                      e.config.data[a] &&
                      (e.config.data[a] = decodeURIComponent(e.config.data[a]));
                  }
                return S(e.config);
              }
              return Promise.reject(e);
            }),
            S.interceptors.response.on(function (e) {
              try {
                e.data = JSON.parse(e.data);
              } catch (e) {}
              return e;
            }),
            S.interceptors.response.on(function (e) {
              return e;
            }),
            S.interceptors.response.on(function (e) {
              if (
                e &&
                e.config &&
                e.config.isAllowKGAntiBush &&
                e.data &&
                0 === e.data.status
              ) {
                var t = "",
                  n = "";
                try {
                  ((t = e.headers["ssa-code"]), (n = e.headers["ssa-hmid"]));
                } catch (e) {}
                n = n || e.config.kgAntiBushMid || e.config.params.mid || "";
                var r = e.config.kgAntiBushAppid || e.config.params.appid || "";
                if (t) {
                  if (r) {
                    var o = e.config.kgAntiBushURL
                      ? e.config.kgAntiBushURL
                      : "https://m3ws.kugou.com";
                    o = encodeURIComponent(o);
                    var i = "https://h5.kugou.com/apps/verify-h5/dist/#/index/"
                      .concat(t, "/")
                      .concat(e.config.kgAntiBushAppid, "/")
                      .concat(o, "/")
                      .concat(n);
                    window.location.replace(i);
                  } else
                    console.error(
                      "请输入正确的参数。eventid 和 appid 不允许为空！",
                    );
                  return e.config.kgAntiBushErrorReject ? e : null;
                }
              }
              return e;
            }),
            S);
        return (
          (j.getBaseInfo = b),
          (j.LightMobileCall = p),
          (j.md5 = y),
          (j.infSign = v),
          j
        );
      }),
        "object" == i(t)
          ? (e.exports = r())
          : void 0 !== (o = r.call(t, n, t, e)) && (e.exports = o));
    },
    67833: function () {},
    59325: function () {},
    97637: function () {},
    83: function (e, t, n) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim.production.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = n(37667),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        i = r.useState,
        a = r.useEffect,
        s = r.useLayoutEffect,
        c = r.useDebugValue;
      function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !o(e, n);
        } catch (e) {
          return !0;
        }
      }
      var l =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                r = i({ inst: { value: n, getSnapshot: t } }),
                o = r[0].inst,
                l = r[1];
              return (
                s(
                  function () {
                    ((o.value = n),
                      (o.getSnapshot = t),
                      u(o) && l({ inst: o }));
                  },
                  [e, n, t],
                ),
                a(
                  function () {
                    return (
                      u(o) && l({ inst: o }),
                      e(function () {
                        u(o) && l({ inst: o });
                      })
                    );
                  },
                  [e],
                ),
                c(n),
                n
              );
            };
      t.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l;
    },
    61688: function (e, t, n) {
      "use strict";
      e.exports = n(83);
    },
    93967: function (e, t) {
      var n;
      /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function o() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            n &&
              (e = i(
                e,
                (function (e) {
                  if ("string" == typeof e || "number" == typeof e) return e;
                  if ("object" != typeof e) return "";
                  if (Array.isArray(e)) return o.apply(null, e);
                  if (
                    e.toString !== Object.prototype.toString &&
                    !e.toString.toString().includes("[native code]")
                  )
                    return e.toString();
                  var t = "";
                  for (var n in e) r.call(e, n) && e[n] && (t = i(t, n));
                  return t;
                })(n),
              ));
          }
          return e;
        }
        function i(e, t) {
          return t ? (e ? e + " " + t : e + t) : e;
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 !==
              (n = function () {
                return o;
              }.apply(t, [])) && (e.exports = n);
      })();
    },
    6730: function (e, t, n) {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    17468: function (e, t, n) {
      "use strict";
      function r(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value;
        } catch (e) {
          n(e);
          return;
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function o(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, i) {
            var a = e.apply(t, n);
            function s(e) {
              r(a, o, i, s, c, "next", e);
            }
            function c(e) {
              r(a, o, i, s, c, "throw", e);
            }
            s(void 0);
          });
        };
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    13298: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw TypeError("Cannot call a class as a function");
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    8366: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(98313);
      function o(e, t, n) {
        return (o = !(function () {
          if (
            "undefined" == typeof Reflect ||
            !Reflect.construct ||
            Reflect.construct.sham
          )
            return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()
          ? function (e, t, n) {
              var o = [null];
              o.push.apply(o, t);
              var i = new (Function.bind.apply(e, o))();
              return (n && (0, r.Z)(i, n.prototype), i);
            }
          : Reflect.construct).apply(null, arguments);
      }
    },
    77813: function (e, t, n) {
      "use strict";
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      }
      function o(e, t, n) {
        return (t && r(e.prototype, t), n && r(e, n), e);
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    95394: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              ((n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            ((n = i[r]),
              !(t.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n]));
        }
        return o;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    98313: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (r =
          Object.setPrototypeOf ||
          function (e, t) {
            return ((e.__proto__ = t), e);
          })(e, t);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    81208: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(13172);
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n,
              r,
              o =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
            if (null != o) {
              var i = [],
                a = !0,
                s = !1;
              try {
                for (
                  o = o.call(e);
                  !(a = (n = o.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (e) {
                ((s = !0), (r = e));
              } finally {
                try {
                  a || null == o.return || o.return();
                } finally {
                  if (s) throw r;
                }
              }
              return i;
            }
          })(e, t) ||
          (0, r.Z)(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
    },
    82561: function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    13172: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(6730);
      function o(e, t) {
        if (e) {
          if ("string" == typeof e) return (0, r.Z)(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ("Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return (0, r.Z)(e, t);
        }
      }
    },
    17685: function (e, t, n) {
      "use strict";
      var r = n(66092).Z.Symbol;
      t.Z = r;
    },
    78657: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return tp;
        },
      });
      var r,
        o = function (e, t) {
          return e === t || (e != e && t != t);
        },
        i = function (e, t) {
          for (var n = e.length; n--;) if (o(e[n][0], t)) return n;
          return -1;
        },
        a = Array.prototype.splice;
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      ((s.prototype.clear = function () {
        ((this.__data__ = []), (this.size = 0));
      }),
        (s.prototype.delete = function (e) {
          var t = this.__data__,
            n = i(t, e);
          return (
            !(n < 0) &&
            (n == t.length - 1 ? t.pop() : a.call(t, n, 1), --this.size, !0)
          );
        }),
        (s.prototype.get = function (e) {
          var t = this.__data__,
            n = i(t, e);
          return n < 0 ? void 0 : t[n][1];
        }),
        (s.prototype.has = function (e) {
          return i(this.__data__, e) > -1;
        }),
        (s.prototype.set = function (e, t) {
          var n = this.__data__,
            r = i(n, e);
          return (r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this);
        }));
      var c = n(93589),
        u = n(77226),
        l = function (e) {
          if (!(0, u.Z)(e)) return !1;
          var t = (0, c.Z)(e);
          return (
            "[object Function]" == t ||
            "[object GeneratorFunction]" == t ||
            "[object AsyncFunction]" == t ||
            "[object Proxy]" == t
          );
        },
        d = n(66092),
        p = d.Z["__core-js_shared__"],
        f = (r = /[^.]+$/.exec((p && p.keys && p.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + r
          : "",
        g = Function.prototype.toString,
        h = function (e) {
          if (null != e) {
            try {
              return g.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        },
        m = /^\[object .+?Constructor\]$/,
        w = Object.prototype,
        y = Function.prototype.toString,
        b = w.hasOwnProperty,
        v = RegExp(
          "^" +
            y
              .call(b)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ) +
            "$",
        ),
        k = function (e, t) {
          var n,
            r = null == e ? void 0 : e[t];
          return ((n = r),
          (0, u.Z)(n) && (!f || !(f in n)) && (l(n) ? v : m).test(h(n)))
            ? r
            : void 0;
        },
        S = k(d.Z, "Map"),
        j = k(Object, "create"),
        O = Object.prototype.hasOwnProperty,
        A = Object.prototype.hasOwnProperty;
      function C(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      ((C.prototype.clear = function () {
        ((this.__data__ = j ? j(null) : {}), (this.size = 0));
      }),
        (C.prototype.delete = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return ((this.size -= t ? 1 : 0), t);
        }),
        (C.prototype.get = function (e) {
          var t = this.__data__;
          if (j) {
            var n = t[e];
            return "__lodash_hash_undefined__" === n ? void 0 : n;
          }
          return O.call(t, e) ? t[e] : void 0;
        }),
        (C.prototype.has = function (e) {
          var t = this.__data__;
          return j ? void 0 !== t[e] : A.call(t, e);
        }),
        (C.prototype.set = function (e, t) {
          var n = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (n[e] = j && void 0 === t ? "__lodash_hash_undefined__" : t),
            this
          );
        }));
      var x = function (e) {
          var t = typeof e;
          return "string" == t ||
            "number" == t ||
            "symbol" == t ||
            "boolean" == t
            ? "__proto__" !== e
            : null === e;
        },
        _ = function (e, t) {
          var n = e.__data__;
          return x(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
        };
      function P(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function I(e) {
        var t = (this.__data__ = new s(e));
        this.size = t.size;
      }
      ((P.prototype.clear = function () {
        ((this.size = 0),
          (this.__data__ = {
            hash: new C(),
            map: new (S || s)(),
            string: new C(),
          }));
      }),
        (P.prototype.delete = function (e) {
          var t = _(this, e).delete(e);
          return ((this.size -= t ? 1 : 0), t);
        }),
        (P.prototype.get = function (e) {
          return _(this, e).get(e);
        }),
        (P.prototype.has = function (e) {
          return _(this, e).has(e);
        }),
        (P.prototype.set = function (e, t) {
          var n = _(this, e),
            r = n.size;
          return (n.set(e, t), (this.size += n.size == r ? 0 : 1), this);
        }),
        (I.prototype.clear = function () {
          ((this.__data__ = new s()), (this.size = 0));
        }),
        (I.prototype.delete = function (e) {
          var t = this.__data__,
            n = t.delete(e);
          return ((this.size = t.size), n);
        }),
        (I.prototype.get = function (e) {
          return this.__data__.get(e);
        }),
        (I.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (I.prototype.set = function (e, t) {
          var n = this.__data__;
          if (n instanceof s) {
            var r = n.__data__;
            if (!S || r.length < 199)
              return (r.push([e, t]), (this.size = ++n.size), this);
            n = this.__data__ = new P(r);
          }
          return (n.set(e, t), (this.size = n.size), this);
        }));
      var E = function (e, t) {
          for (
            var n = -1, r = null == e ? 0 : e.length;
            ++n < r && !1 !== t(e[n], n, e);
          );
          return e;
        },
        M = (function () {
          try {
            var e = k(Object, "defineProperty");
            return (e({}, "", {}), e);
          } catch (e) {}
        })(),
        N = function (e, t, n) {
          "__proto__" == t && M
            ? M(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0,
              })
            : (e[t] = n);
        },
        R = Object.prototype.hasOwnProperty,
        U = function (e, t, n) {
          var r = e[t];
          (R.call(e, t) && o(r, n) && (void 0 !== n || t in e)) || N(e, t, n);
        },
        D = function (e, t, n, r) {
          var o = !n;
          n || (n = {});
          for (var i = -1, a = t.length; ++i < a;) {
            var s = t[i],
              c = r ? r(n[s], e[s], s, n, e) : void 0;
            (void 0 === c && (c = e[s]), o ? N(n, s, c) : U(n, s, c));
          }
          return n;
        },
        T = function (e, t) {
          for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
          return r;
        },
        B = n(18533),
        L = function (e) {
          return (0, B.Z)(e) && "[object Arguments]" == (0, c.Z)(e);
        },
        K = Object.prototype,
        F = K.hasOwnProperty,
        q = K.propertyIsEnumerable,
        J = L(
          (function () {
            return arguments;
          })(),
        )
          ? L
          : function (e) {
              return (0, B.Z)(e) && F.call(e, "callee") && !q.call(e, "callee");
            },
        W = Array.isArray,
        $ =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        G =
          $ &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        Z = G && G.exports === $ ? d.Z.Buffer : void 0,
        z =
          (Z ? Z.isBuffer : void 0) ||
          function () {
            return !1;
          },
        H = /^(?:0|[1-9]\d*)$/,
        X = function (e, t) {
          var n = typeof e;
          return (
            !!(t = null == t ? 9007199254740991 : t) &&
            ("number" == n || ("symbol" != n && H.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
          );
        },
        Q = function (e) {
          return (
            "number" == typeof e &&
            e > -1 &&
            e % 1 == 0 &&
            e <= 9007199254740991
          );
        },
        V = {};
      ((V["[object Float32Array]"] =
        V["[object Float64Array]"] =
        V["[object Int8Array]"] =
        V["[object Int16Array]"] =
        V["[object Int32Array]"] =
        V["[object Uint8Array]"] =
        V["[object Uint8ClampedArray]"] =
        V["[object Uint16Array]"] =
        V["[object Uint32Array]"] =
          !0),
        (V["[object Arguments]"] =
          V["[object Array]"] =
          V["[object ArrayBuffer]"] =
          V["[object Boolean]"] =
          V["[object DataView]"] =
          V["[object Date]"] =
          V["[object Error]"] =
          V["[object Function]"] =
          V["[object Map]"] =
          V["[object Number]"] =
          V["[object Object]"] =
          V["[object RegExp]"] =
          V["[object Set]"] =
          V["[object String]"] =
          V["[object WeakMap]"] =
            !1));
      var Y = function (e) {
          return function (t) {
            return e(t);
          };
        },
        ee = n(13413),
        et =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        en =
          et &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        er = en && en.exports === et && ee.Z.process,
        eo = (function () {
          try {
            var e = en && en.require && en.require("util").types;
            if (e) return e;
            return er && er.binding && er.binding("util");
          } catch (e) {}
        })(),
        ei = eo && eo.isTypedArray,
        ea = ei
          ? Y(ei)
          : function (e) {
              return (0, B.Z)(e) && Q(e.length) && !!V[(0, c.Z)(e)];
            },
        es = Object.prototype.hasOwnProperty,
        ec = function (e, t) {
          var n = W(e),
            r = !n && J(e),
            o = !n && !r && z(e),
            i = !n && !r && !o && ea(e),
            a = n || r || o || i,
            s = a ? T(e.length, String) : [],
            c = s.length;
          for (var u in e)
            (t || es.call(e, u)) &&
              !(
                a &&
                ("length" == u ||
                  (o && ("offset" == u || "parent" == u)) ||
                  (i &&
                    ("buffer" == u ||
                      "byteLength" == u ||
                      "byteOffset" == u)) ||
                  X(u, c))
              ) &&
              s.push(u);
          return s;
        },
        eu = Object.prototype,
        el = function (e) {
          var t = e && e.constructor,
            n = ("function" == typeof t && t.prototype) || eu;
          return e === n;
        },
        ed = function (e, t) {
          return function (n) {
            return e(t(n));
          };
        },
        ep = ed(Object.keys, Object),
        ef = Object.prototype.hasOwnProperty,
        eg = function (e) {
          if (!el(e)) return ep(e);
          var t = [];
          for (var n in Object(e))
            ef.call(e, n) && "constructor" != n && t.push(n);
          return t;
        },
        eh = function (e) {
          return null != e && Q(e.length) && !l(e);
        },
        em = function (e) {
          return eh(e) ? ec(e) : eg(e);
        },
        ew = function (e) {
          var t = [];
          if (null != e) for (var n in Object(e)) t.push(n);
          return t;
        },
        ey = Object.prototype.hasOwnProperty,
        eb = function (e) {
          if (!(0, u.Z)(e)) return ew(e);
          var t = el(e),
            n = [];
          for (var r in e)
            ("constructor" == r && (t || !ey.call(e, r))) || n.push(r);
          return n;
        },
        ev = function (e) {
          return eh(e) ? ec(e, !0) : eb(e);
        },
        ek =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        eS =
          ek &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        ej = eS && eS.exports === ek ? d.Z.Buffer : void 0,
        eO = ej ? ej.allocUnsafe : void 0,
        eA = function (e, t) {
          if (t) return e.slice();
          var n = e.length,
            r = eO ? eO(n) : new e.constructor(n);
          return (e.copy(r), r);
        },
        eC = function (e, t) {
          var n = -1,
            r = e.length;
          for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
          return t;
        },
        ex = function (e, t) {
          for (
            var n = -1, r = null == e ? 0 : e.length, o = 0, i = [];
            ++n < r;
          ) {
            var a = e[n];
            t(a, n, e) && (i[o++] = a);
          }
          return i;
        },
        e_ = function () {
          return [];
        },
        eP = Object.prototype.propertyIsEnumerable,
        eI = Object.getOwnPropertySymbols,
        eE = eI
          ? function (e) {
              return null == e
                ? []
                : ex(eI((e = Object(e))), function (t) {
                    return eP.call(e, t);
                  });
            }
          : e_,
        eM = function (e, t) {
          for (var n = -1, r = t.length, o = e.length; ++n < r;)
            e[o + n] = t[n];
          return e;
        },
        eN = ed(Object.getPrototypeOf, Object),
        eR = Object.getOwnPropertySymbols
          ? function (e) {
              for (var t = []; e;) (eM(t, eE(e)), (e = eN(e)));
              return t;
            }
          : e_,
        eU = function (e, t, n) {
          var r = t(e);
          return W(e) ? r : eM(r, n(e));
        },
        eD = function (e) {
          return eU(e, em, eE);
        },
        eT = function (e) {
          return eU(e, ev, eR);
        },
        eB = k(d.Z, "DataView"),
        eL = k(d.Z, "Promise"),
        eK = k(d.Z, "Set"),
        eF = k(d.Z, "WeakMap"),
        eq = "[object Map]",
        eJ = "[object Promise]",
        eW = "[object Set]",
        e$ = "[object WeakMap]",
        eG = "[object DataView]",
        eZ = h(eB),
        ez = h(S),
        eH = h(eL),
        eX = h(eK),
        eQ = h(eF),
        eV = c.Z;
      ((eB && eV(new eB(new ArrayBuffer(1))) != eG) ||
        (S && eV(new S()) != eq) ||
        (eL && eV(eL.resolve()) != eJ) ||
        (eK && eV(new eK()) != eW) ||
        (eF && eV(new eF()) != e$)) &&
        (eV = function (e) {
          var t = (0, c.Z)(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            r = n ? h(n) : "";
          if (r)
            switch (r) {
              case eZ:
                return eG;
              case ez:
                return eq;
              case eH:
                return eJ;
              case eX:
                return eW;
              case eQ:
                return e$;
            }
          return t;
        });
      var eY = eV,
        e1 = Object.prototype.hasOwnProperty,
        e0 = function (e) {
          var t = e.length,
            n = new e.constructor(t);
          return (
            t &&
              "string" == typeof e[0] &&
              e1.call(e, "index") &&
              ((n.index = e.index), (n.input = e.input)),
            n
          );
        },
        e2 = d.Z.Uint8Array,
        e3 = function (e) {
          var t = new e.constructor(e.byteLength);
          return (new e2(t).set(new e2(e)), t);
        },
        e5 = function (e, t) {
          var n = t ? e3(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.byteLength);
        },
        e6 = /\w*$/,
        e4 = function (e) {
          var t = new e.constructor(e.source, e6.exec(e));
          return ((t.lastIndex = e.lastIndex), t);
        },
        e7 = n(17685),
        e9 = e7.Z ? e7.Z.prototype : void 0,
        e8 = e9 ? e9.valueOf : void 0,
        te = function (e, t) {
          var n = t ? e3(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.length);
        },
        tt = function (e, t, n) {
          var r = e.constructor;
          switch (t) {
            case "[object ArrayBuffer]":
              return e3(e);
            case "[object Boolean]":
            case "[object Date]":
              return new r(+e);
            case "[object DataView]":
              return e5(e, n);
            case "[object Float32Array]":
            case "[object Float64Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object Int32Array]":
            case "[object Uint8Array]":
            case "[object Uint8ClampedArray]":
            case "[object Uint16Array]":
            case "[object Uint32Array]":
              return te(e, n);
            case "[object Map]":
            case "[object Set]":
              return new r();
            case "[object Number]":
            case "[object String]":
              return new r(e);
            case "[object RegExp]":
              return e4(e);
            case "[object Symbol]":
              return e8 ? Object(e8.call(e)) : {};
          }
        },
        tn = Object.create,
        tr = (function () {
          function e() {}
          return function (t) {
            if (!(0, u.Z)(t)) return {};
            if (tn) return tn(t);
            e.prototype = t;
            var n = new e();
            return ((e.prototype = void 0), n);
          };
        })(),
        to = eo && eo.isMap,
        ti = to
          ? Y(to)
          : function (e) {
              return (0, B.Z)(e) && "[object Map]" == eY(e);
            },
        ta = eo && eo.isSet,
        ts = ta
          ? Y(ta)
          : function (e) {
              return (0, B.Z)(e) && "[object Set]" == eY(e);
            },
        tc = "[object Arguments]",
        tu = "[object Function]",
        tl = "[object Object]",
        td = {};
      ((td[tc] =
        td["[object Array]"] =
        td["[object ArrayBuffer]"] =
        td["[object DataView]"] =
        td["[object Boolean]"] =
        td["[object Date]"] =
        td["[object Float32Array]"] =
        td["[object Float64Array]"] =
        td["[object Int8Array]"] =
        td["[object Int16Array]"] =
        td["[object Int32Array]"] =
        td["[object Map]"] =
        td["[object Number]"] =
        td[tl] =
        td["[object RegExp]"] =
        td["[object Set]"] =
        td["[object String]"] =
        td["[object Symbol]"] =
        td["[object Uint8Array]"] =
        td["[object Uint8ClampedArray]"] =
        td["[object Uint16Array]"] =
        td["[object Uint32Array]"] =
          !0),
        (td["[object Error]"] = td[tu] = td["[object WeakMap]"] = !1));
      var tp = function e(t, n, r, o, i, a) {
        var s,
          c = 1 & n,
          l = 2 & n;
        if ((r && (s = i ? r(t, o, i, a) : r(t)), void 0 !== s)) return s;
        if (!(0, u.Z)(t)) return t;
        var d = W(t);
        if (d) {
          if (((s = e0(t)), !c)) return eC(t, s);
        } else {
          var p,
            f,
            g,
            h,
            m = eY(t),
            w = m == tu || "[object GeneratorFunction]" == m;
          if (z(t)) return eA(t, c);
          if (m == tl || m == tc || (w && !i)) {
            if (
              ((s =
                l || w
                  ? {}
                  : "function" != typeof t.constructor || el(t)
                    ? {}
                    : tr(eN(t))),
              !c)
            )
              return l
                ? ((f = (p = s) && D(t, ev(t), p)), D(t, eR(t), f))
                : ((h = (g = s) && D(t, em(t), g)), D(t, eE(t), h));
          } else {
            if (!td[m]) return i ? t : {};
            s = tt(t, m, c);
          }
        }
        a || (a = new I());
        var y = a.get(t);
        if (y) return y;
        (a.set(t, s),
          ts(t)
            ? t.forEach(function (o) {
                s.add(e(o, n, r, o, t, a));
              })
            : ti(t) &&
              t.forEach(function (o, i) {
                s.set(i, e(o, n, r, i, t, a));
              }));
        var b = d ? void 0 : (4 & n ? (l ? eT : eD) : l ? ev : em)(t);
        return (
          E(b || t, function (o, i) {
            (b && (o = t[(i = o)]), U(s, i, e(o, n, r, i, t, a)));
          }),
          s
        );
      };
    },
    93589: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(17685),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        s = r.Z ? r.Z.toStringTag : void 0,
        c = function (e) {
          var t = i.call(e, s),
            n = e[s];
          try {
            e[s] = void 0;
            var r = !0;
          } catch (e) {}
          var o = a.call(e);
          return (r && (t ? (e[s] = n) : delete e[s]), o);
        },
        u = Object.prototype.toString,
        l = r.Z ? r.Z.toStringTag : void 0,
        d = function (e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : l && l in Object(e)
              ? c(e)
              : u.call(e);
        };
    },
    13413: function (e, t) {
      "use strict";
      var n =
        "object" == typeof global &&
        global &&
        global.Object === Object &&
        global;
      t.Z = n;
    },
    66092: function (e, t, n) {
      "use strict";
      var r = n(13413),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r.Z || o || Function("return this")();
      t.Z = i;
    },
    92346: function (e, t, n) {
      "use strict";
      var r = n(78657);
      t.Z = function (e) {
        return (0, r.Z)(e, 4);
      };
    },
    27601: function (e, t) {
      "use strict";
      t.Z = function (e) {
        return null == e;
      };
    },
    77226: function (e, t) {
      "use strict";
      t.Z = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    18533: function (e, t) {
      "use strict";
      t.Z = function (e) {
        return null != e && "object" == typeof e;
      };
    },
  },
]);
