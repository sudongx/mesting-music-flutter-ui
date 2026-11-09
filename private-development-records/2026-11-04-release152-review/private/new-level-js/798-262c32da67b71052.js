(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [798],
  {
    35992: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return nR;
        },
      });
      var r,
        i,
        a,
        o,
        l,
        s = n(13298),
        c = n(77813),
        u = n(5429),
        d = n(55136),
        A = n(55578),
        _ = n(81208),
        p = n(17468),
        v = n(76792),
        f = n(82628),
        g = n.n(f),
        h = n(37667),
        C = n.n(h),
        m = n(83870),
        b = n.n(m),
        x = n(45350),
        w = n(88069),
        y = n(42421);
      function k(e, t) {
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
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                (0, v.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : k(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var j = { pageProps: {}, myInfo: null, nameplateAbType: 0 },
        N = function (e, t) {
          switch ((console.log("commonReducer action", e, t), t.type)) {
            case "SET_PAGE_PROPS":
              return I(I({}, e), {}, { pageProps: t.payload });
            case "SET_MYINFO":
              return I(I({}, e), {}, { myInfo: t.payload });
            case "SET_NAMEPLATE_AB_TYPE":
              return I(I({}, e), {}, { nameplateAbType: t.payload });
            default:
              return e;
          }
        },
        O = (0, h.createContext)(j),
        E = function () {
          return (0, h.useContext)(O);
        },
        D = n(45026),
        R = n(16963),
        P = n.n(R),
        U = n(76801),
        S = n(13812),
        B = n(92301),
        L = n(55452);
      n(29288);
      var Y = n(96278),
        V = n.n(Y),
        M = n(48156),
        Q = n(19481);
      function H(e) {
        var t = (0, h.useState)(e),
          n = t[0],
          r = t[1],
          i = (0, h.useRef)(n);
        return (
          (i.current = n),
          [
            n,
            function (e) {
              (r(e), (i.current = "function" == typeof e ? e(i.current) : e));
            },
            i,
          ]
        );
      }
      var T = n(62172),
        Z = n.n(T),
        F = n(25965);
      function K(e, t) {
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
      var G = ["song_publish"],
        W = function () {
          return (0, F.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            children: [
              (0, F.jsx)("circle", {
                cx: "16",
                cy: "16",
                r: "16",
                fill: "black",
                "fill-opacity": "0.4",
              }),
              (0, F.jsx)("path", {
                d: "M12.4285 12.3571V10.5714C12.4285 8.59898 14.0275 7 15.9999 7C17.9723 7 19.5713 8.59898 19.5713 10.5714V12.3571",
                stroke: "white",
                "stroke-width": "2",
              }),
              (0, F.jsx)("path", {
                d: "M20.5 12.3572C22.1569 12.3572 23.5 13.7003 23.5 15.3572V20.7859C23.4998 22.4426 22.1568 23.7859 20.5 23.7859H11.5C9.84325 23.7859 8.50016 22.4426 8.5 20.7859V15.3572C8.5 13.7003 9.84315 12.3572 11.5 12.3572H20.5ZM15.6426 15.9285C15.2484 15.9287 14.928 16.2482 14.9277 16.6423V17.5496C14.5016 17.7967 14.214 18.2569 14.2139 18.7849C14.2139 19.5737 14.8538 20.2134 15.6426 20.2136C16.4315 20.2136 17.0713 19.5739 17.0713 18.7849C17.0712 18.2564 16.7833 17.7956 16.3564 17.5486V16.6423C16.3562 16.2481 16.0369 15.9285 15.6426 15.9285Z",
                fill: "white",
              }),
            ],
          });
        },
        z = function (e) {
          var t,
            n,
            r = e.data,
            i = void 0 === r ? {} : r,
            a = e.img,
            o =
              void 0 === a
                ? (null == i ? void 0 : i.big_pic_fans) ||
                  (null == i ? void 0 : i.big_pic_v3)
                : a,
            l = e.width,
            s = void 0 === l ? 370 : l,
            c = e.height,
            u = e.opacity,
            d = e.onClick,
            A = e.gain_identifier,
            p = e.isCanLongTouch,
            v = (e.canClickImg, e.hasLockIcon);
          (null == i ? void 0 : i.type) === "singer_energy" &&
            (o =
              (null == i ? void 0 : i.big_pic_fans) ||
              (null == i ? void 0 : i.big_pic_v3));
          var f = !!(
            null != i &&
            i.get_sign &&
            null != i &&
            i.sign_pic &&
            null != i &&
            i.big_pic_fans
          );
          o = Z()(o);
          var g =
              void 0 !== v && v && (null == i ? void 0 : i.current_have) !== 1,
            C = (0, h.useRef)(null),
            m = (0, h.useRef)(null),
            b = H(!1),
            x = (0, _.Z)(b, 3),
            w = x[0],
            y = x[1],
            k = x[2],
            I = (0, h.useState)({}),
            j = I[0],
            N = I[1],
            O = function (e) {
              p && C.current && (clearTimeout(C.current), (C.current = null));
            },
            E = function () {
              if (p) {
                var e = m.current.getBoundingClientRect();
                (y(!0),
                  N(e),
                  document.addEventListener("touchstart", function e(t) {
                    var n;
                    t.target !==
                      (null ===
                        (n = document.getElementsByClassName(V().tooltipBox)) ||
                      void 0 === n
                        ? void 0
                        : n[0]) &&
                      k.current &&
                      (y(!1), document.removeEventListener("touchstart", e));
                  }));
              }
            };
          return (0, F.jsx)("div", {
            className: V().wrap,
            ref: m,
            style: {
              width: (0, M.ht)(s),
              height: (0, M.ht)(void 0 === c ? 370 : c),
              opacity: void 0 === u ? 1 : u,
            },
            onTouchStart: function (e) {
              p &&
                (C.current && clearTimeout(C.current),
                (C.current = setTimeout(function () {
                  E();
                }, 1e3)));
            },
            onTouchMove: O,
            onTouchEnd: O,
            children: (0, F.jsxs)("div", {
              className: V().medal,
              onClick: function () {
                d && d();
              },
              style: { transform: "scale(".concat(s / 370, ")") },
              children: [
                p && w
                  ? ((t =
                      ((null == j ? void 0 : j.top) ||
                        (null == j ? void 0 : j.y)) +
                      j.height / 2),
                    (n =
                      ((null == j ? void 0 : j.left) ||
                        (null == j ? void 0 : j.x)) +
                      j.width / 2),
                    (0, Q.createPortal)(
                      (0, F.jsx)("div", {
                        className: V().tooltipWrap,
                        style: {
                          top: "".concat(t, "px"),
                          left: "".concat(n, "px"),
                        },
                        children: (0, F.jsxs)("div", {
                          className: V().tooltipBox,
                          children: ["NO.", A],
                        }),
                      }),
                      document.body,
                    ))
                  : null,
                (0, F.jsx)("img", {
                  src: o,
                  alt: "",
                  style: { width: (0, M.ht)(370), height: (0, M.ht)(370) },
                }),
                ["singer_energy"].includes(null == i ? void 0 : i.type) &&
                  (0, F.jsxs)(F.Fragment, {
                    children: [
                      !f &&
                        (0, F.jsx)("div", {
                          className: V().top,
                          children: (0, F.jsx)("span", {
                            children: null == i ? void 0 : i.roll_word,
                          }),
                        }),
                      (0, F.jsx)("div", {
                        className: V().bottom,
                        children: (0, F.jsx)("span", {
                          children: null == i ? void 0 : i.level_alias,
                        }),
                      }),
                    ],
                  }),
                (null == i ? void 0 : i.type) === "singer_recommend" &&
                  (0, F.jsxs)(F.Fragment, {
                    children: [
                      (0, F.jsx)("img", {
                        className: V().avatar,
                        src: Z()(
                          (null == i ? void 0 : i.singer_avatar) || "",
                        ).replace("{size}", "100"),
                        alt: "",
                      }),
                      (0, F.jsx)("div", {
                        className: V().recommend_level_alias,
                        children: (0, F.jsx)("span", {
                          children: null == i ? void 0 : i.level_alias,
                        }),
                      }),
                    ],
                  }),
                G.includes(null == i ? void 0 : i.type) &&
                  (0, F.jsx)("div", {
                    className: V().center_text,
                    children: null == i ? void 0 : i.roll_word,
                  }),
                f &&
                  (0, F.jsx)("div", {
                    className: V().sign,
                    children: (0, F.jsx)("img", {
                      className: V().sign1,
                      alt: "",
                      src: null == i ? void 0 : i.sign_pic,
                    }),
                  }),
                !!g &&
                  (0, F.jsx)("div", {
                    className: V().icon_lock,
                    children: (0, F.jsx)(W, {}),
                  }),
              ],
            }),
          });
        },
        J = function (e) {
          return (
            e.data,
            (0, F.jsx)(F.Fragment, {
              children: (0, F.jsx)(
                z,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? K(Object(n), !0).forEach(function (t) {
                          (0, v.Z)(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n),
                          )
                        : K(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t),
                            );
                          });
                  }
                  return e;
                })({}, e),
              ),
            })
          );
        },
        X = n(79267),
        q = n(79745),
        $ = n.n(q),
        ee = n(22301),
        et = (0, M.Dv)("hreffrom") || "",
        en = function (e) {
          var t = e.vip,
            r = e.fromName,
            i = void 0 === r ? "" : r,
            a = E(),
            o = a.myInfo,
            l = a.nameplateAbType,
            s = (0, h.useMemo)(
              function () {
                var e =
                    (null == t ? void 0 : t.svip_level) > 0
                      ? null == t
                        ? void 0
                        : t.svip_level
                      : 1,
                  n = (0, X.j)(t);
                return "超级VIP年费" === n
                  ? "ic_suvip_year_".concat(e)
                  : "超级VIP" === n
                    ? "ic_suvip_".concat(e)
                    : "豪华VIP年费" === n
                      ? "ic_svip_year_".concat(e)
                      : "音乐包年卡" === n
                        ? "ic_music_pack_year"
                        : "豪华VIP" === n
                          ? "ic_svip_".concat(e)
                          : "音乐包" === n
                            ? "ic_music_pack"
                            : null != t && t.su_vip_end_time
                              ? "ic_suvip_none_".concat(e)
                              : "ic_svip_none_".concat(e);
              },
              [t],
            ),
            c = (0, h.useMemo)(
              function () {
                if (s) return n(48294)("./".concat(s, ".png")).default;
              },
              [s],
            ),
            u = (0, h.useMemo)(
              function () {
                if (1 !== l) return null;
                var e = (16 & +(null == t ? void 0 : t.user_type)) == 16,
                  n = (8 & +(null == t ? void 0 : t.user_type)) == 8,
                  r = +(null == t ? void 0 : t.nameplate_type),
                  i = e && [2, 4].includes(r),
                  a = n && [1, 3].includes(r);
                if (!i && !a) return null;
                var o = 3 === r || 4 === r,
                  s = o
                    ? (null == t ? void 0 : t.nameplate_dynamic_v1) ||
                      (null == t ? void 0 : t.nameplate_url_v1)
                    : (null == t ? void 0 : t.nameplate_dynamic) ||
                      (null == t ? void 0 : t.nameplate_url);
                return s
                  ? {
                      src: s,
                      loversPic: o ? (null == t ? void 0 : t.lovers_pic) : "",
                    }
                  : null;
              },
              [t, l],
            ),
            d = (0, h.useMemo)(
              function () {
                var e, n;
                return null != t &&
                  null !== (e = t.fancy_number) &&
                  void 0 !== e &&
                  e.pic &&
                  null != t &&
                  null !== (n = t.fancy_number) &&
                  void 0 !== n &&
                  n.number
                  ? t.fancy_number
                  : null;
              },
              [null == t ? void 0 : t.fancy_number],
            ),
            A = (null == u ? void 0 : u.src) || (null == c ? void 0 : c.src);
          return (0, F.jsxs)("div", {
            className: $().vipNameplate_wrap,
            onClick: function (e) {
              if (
                (e && e.stopPropagation && e.stopPropagation(), (0, M.Dy)())
              ) {
                var t,
                  n = "",
                  r = (o || {}).medal,
                  a = "25_"
                    .concat((null == r ? void 0 : r.classify_id) || "", ",38_")
                    .concat((null == r ? void 0 : r.id) || "", ",29_")
                    .concat(et || "0");
                ((n =
                  -1 !== s.indexOf("ic_suvip")
                    ? M.gn
                      ? "https://m3ws.kugou.com/vip/ios/supervip.html?source_id=202115&custom_field=".concat(
                          a,
                        )
                      : "https://m3ws.kugou.com/vip/v2/supervip.html?source_id=202115&custom_field=".concat(
                          a,
                        )
                    : M.gn
                      ? "https://m3ws.kugou.com/vip/ios/vip.html?source_id=202115&custom_field=".concat(
                          a,
                        )
                      : "https://m3ws.kugou.com/vip/v2/vip.html?source_id=202115&custom_field=".concat(
                          a,
                        )),
                  (0, M.Yo)(n, null, { browser: 4 }),
                  ee.Z.fire("1135200", {
                    svar1:
                      null == o
                        ? void 0
                        : null === (t = o.grade) || void 0 === t
                          ? void 0
                          : t.p_grade,
                    svar2: (0, X.j)(null == o ? void 0 : o.vip),
                    svar3: i,
                  }));
              }
            },
            children: [
              A &&
                (0, F.jsxs)("div", {
                  className: $().vipIcon,
                  children: [
                    (0, F.jsx)("img", { src: A, alt: "" }),
                    (null == u ? void 0 : u.loversPic) &&
                      (0, F.jsx)("img", {
                        className: $().loversPic,
                        src: u.loversPic,
                        alt: "",
                      }),
                  ],
                }),
              d &&
                (0, F.jsxs)("div", {
                  className: $().fancyNumber,
                  onClick: function (e) {
                    (e && e.stopPropagation && e.stopPropagation(),
                      null != d &&
                        d.redirect_url &&
                        (0, M.Dy)() &&
                        (0, M.Yo)(d.redirect_url, null, { browser: 4 }));
                  },
                  children: [
                    (0, F.jsx)("div", {
                      className: $().fancyNumberIcon,
                      style: { backgroundImage: 'url("'.concat(d.pic, '")') },
                    }),
                    (0, F.jsxs)("div", {
                      className: $().fancyNumberPanel,
                      children: [
                        (0, F.jsx)("div", {
                          className: $().fancyNumberText,
                          children: d.number,
                        }),
                        (0, F.jsx)("div", { className: $().fancyNumberShine }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        },
        er = n(93967),
        ei = n.n(er),
        ea = (function () {
          function e() {
            ((0, s.Z)(this, e), (this._events = {}));
          }
          return (
            (0, c.Z)(e, [
              {
                key: "on",
                value: function (e, t) {
                  (this._events[e] || (this._events[e] = []),
                    this._events[e].push(t));
                },
              },
              {
                key: "emit",
                value: function (e, t) {
                  if (this._events[e]) {
                    for (var n = 0; n < this._events[e].length; n++)
                      this._events[e][n].delete || this._events[e][n](t);
                    for (var r = 0; r < this._events[e].length; r++)
                      this._events[e][r].delete &&
                        (this._events[e].splice(r, 1), r--);
                  }
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  if (this._events && this._events[e]) {
                    if (!t) {
                      delete this._events[e];
                      return;
                    }
                    for (var n = 0; n < this._events[e].length; n++)
                      if (this._events[e][n] === t) {
                        this._events[e][n].delete = !0;
                        break;
                      }
                  }
                },
              },
            ]),
            e
          );
        })();
      function eo() {
        return (l || (l = new ea()), l);
      }
      var el = (0, M.Dv)("hreffrom") || "",
        es = !0,
        ec = function (e) {
          var t,
            r = e.user,
            i = e.grade,
            a = e.medal,
            o = e.vip,
            l = e.timestamp,
            s = e.abValues,
            c = (0, y.Yu)(),
            u = (c.bgColor, c.textColor),
            d = c.underTextColor,
            A = c.proccessColors,
            _ = (0, h.useState)(0),
            p = _[0],
            v = _[1],
            f = (0, h.useState)(!1),
            g = f[0],
            C = f[1],
            m = (0, h.useMemo)(
              function () {
                if (!(null != i && i.reg_time)) return "0天";
                var e = Math.floor(
                  ((1e3 * l || new Date().getTime()) -
                    new Date(i.reg_time.replace(/-/g, "/")).getTime()) /
                    864e5,
                );
                if (e >= 360) {
                  var t = Math.floor(e / 360),
                    n = Math.floor((e - 360 * t) / 30);
                  return n > 0
                    ? "".concat(t, "年").concat(n, "个月")
                    : "".concat(t, "年");
                }
                return e >= 30
                  ? "".concat(Math.floor(e / 30), "个月")
                  : e >= 0
                    ? "".concat(e, "天")
                    : "0天";
              },
              [null == i ? void 0 : i.reg_time],
            ),
            b = (0, h.useMemo)(
              function () {
                try {
                  if (
                    (null == i ? void 0 : i.p_speed) > 1 &&
                    (null == i ? void 0 : i.p_grade) > 0
                  ) {
                    var e, t;
                    return null ===
                      (e = n(55647)(
                        "./ic_vip".concat(
                          null == i ? void 0 : i.p_grade,
                          ".png",
                        ),
                      )) || void 0 === e
                      ? void 0
                      : null === (t = e.default) || void 0 === t
                        ? void 0
                        : t.src;
                  }
                  return "";
                } catch (e) {
                  return "";
                }
              },
              [null == i ? void 0 : i.p_speed, null == i ? void 0 : i.p_grade],
            );
          ((0, h.useEffect)(
            function () {
              var e = null;
              return (
                i &&
                  ((e = requestAnimationFrame(function () {
                    var e = (null == i ? void 0 : i.p_current_point) || 0,
                      t = (null == i ? void 0 : i.p_grade_point) || 0;
                    v(
                      100 *
                        ((e - t) /
                          (((null == i ? void 0 : i.p_next_grade_point) || 0) -
                            t)),
                    );
                  })),
                  C(!0),
                  setTimeout(function () {
                    C(!1);
                  }, 3600)),
                function () {
                  return cancelAnimationFrame(e);
                }
              );
            },
            [i],
          ),
            (0, h.useEffect)(
              function () {
                return (
                  eo().on("showVipAnimated", function () {
                    (C(!0),
                      setTimeout(function () {
                        C(!1);
                      }, 3600));
                  }),
                  function () {
                    eo().off("showVipAnimated");
                  }
                );
              },
              [g],
            ));
          var x = function () {
              var e = a.type,
                t = a.classify_id,
                n = a.level,
                r =
                  "https://activity.kugou.com/page/v-21847b5d/detail.html?isHideTitleBar=1&hreffrom="
                    .concat(el, "&type=")
                    .concat(e, "&classifyId=")
                    .concat(t, "&isNew=0&isHide=0&level=")
                    .concat(n || "");
              (0, M.Yo)(r);
            },
            w = (0, h.useMemo)(
              function () {
                return !!["2", "3"].includes(
                  String(null == s ? void 0 : s.pay),
                );
              },
              [null == s ? void 0 : s.pay],
            );
          return (0, F.jsxs)("div", {
            className: P().card_wrap,
            style: { color: u },
            children: [
              (0, F.jsx)("div", {
                className: ei()(P().medal, w && P().new_ui),
                onClick: function () {
                  return x();
                },
                style: {
                  opacity: (null == i ? void 0 : i.p_grade) < 1 ? 0.5 : 1,
                },
                children: (0, F.jsx)(J, {
                  data: a,
                  width: w ? 240 : 280,
                  height: w ? 240 : 280,
                }),
              }),
              (0, F.jsxs)("div", {
                className: P().base_info_wrap,
                children: [
                  (0, F.jsx)("img", {
                    src: (null == r ? void 0 : r.avatar) || L.yo,
                    alt: "",
                  }),
                  (0, F.jsx)("div", {
                    className: P().name,
                    children: null == r ? void 0 : r.nickname,
                  }),
                  (0, F.jsx)(en, { vip: o, fromName: "头部卡片" }),
                ],
              }),
              (0, F.jsxs)("div", {
                className: ei()(P().level_big, w && P().new_ui),
                children: ["Lv.", (null == i ? void 0 : i.p_grade) || "0"],
              }),
              w
                ? (0, F.jsxs)("div", {
                    className: P().listen_value_wrap_outer,
                    children: [
                      ((t = ["超级VIP", "超级VIP年费"].includes((0, X.j)(o))),
                      (0, F.jsx)(h.Fragment, {
                        children:
                          (null == i ? void 0 : i.p_speed) > 1 &&
                          (null == i ? void 0 : i.p_grade) < 20 &&
                          (0, F.jsxs)("div", {
                            className: ei()(
                              P().speed_process,
                              t && P().svip_bgc,
                            ),
                            children: [
                              (0, F.jsx)("i", { className: P().icon }),
                              (0, F.jsxs)("p", {
                                className: P().speed_process_text,
                                children: [
                                  null == i ? void 0 : i.p_speed,
                                  "倍加速中",
                                ],
                              }),
                            ],
                          }),
                      })),
                      (null == i ? void 0 : i.p_grade) < 20
                        ? (0, F.jsxs)(F.Fragment, {
                            children: [
                              (0, F.jsxs)("div", {
                                className: P().tips_isNewIU,
                                children: [
                                  "再听",
                                  (null == i ? void 0 : i.p_remain_grade_min) ||
                                    "",
                                  "分钟可",
                                  (null == i ? void 0 : i.p_grade) === 19
                                    ? "满级"
                                    : "升级",
                                ],
                              }),
                              (0, F.jsxs)("div", {
                                className: P().listen_value_wrap_isNewIU,
                                style: { color: d },
                                children: [
                                  null == i ? void 0 : i.p_current_point,
                                  "/",
                                  (0, M.NH)(
                                    null == i ? void 0 : i.p_next_grade_point,
                                  ).str,
                                ],
                              }),
                            ],
                          })
                        : (0, F.jsx)("div", {
                            className: P().tips_isNewIU,
                            children: "已满级",
                          }),
                    ],
                  })
                : (0, F.jsxs)(F.Fragment, {
                    children: [
                      (0, F.jsxs)("div", {
                        className: P().listen_value_wrap,
                        style: { color: d },
                        children: [
                          null == i ? void 0 : i.p_current_point,
                          "/",
                          null == i ? void 0 : i.p_next_grade_point,
                          "听歌值",
                        ],
                      }),
                      (0, F.jsxs)("div", {
                        className: P().tips,
                        children: [
                          "再听",
                          (null == i ? void 0 : i.p_remain_grade_min) || "",
                          "分钟可升级",
                        ],
                      }),
                    ],
                  }),
              (0, F.jsx)("div", {
                className: ei()(P().proccess_outer, w && P().new_ui),
                children: (0, F.jsxs)("div", {
                  className: ei()(P().proccess_wrap, w && P().new_ui),
                  style: { backgroundColor: (0, U.Wp)(u, 0.1) },
                  children: [
                    (0, F.jsx)("div", {
                      className: P().proccess,
                      style: {
                        width: "".concat(p, "%"),
                        background: "linear-gradient(90deg, "
                          .concat(null == A ? void 0 : A[0], " 0%, ")
                          .concat(null == A ? void 0 : A[1], " 100%)"),
                      },
                    }),
                    (null == i ? void 0 : i.p_speed) > 1 &&
                      (0, F.jsx)("div", {
                        className: P().proccess_rocket,
                        alt: "",
                        style: {
                          left: "".concat(p, "%"),
                          backgroundImage: "url(".concat(b, ")"),
                        },
                        children: (0, F.jsxs)("div", {
                          className: P().rocket_text,
                          children: ["x", null == i ? void 0 : i.p_speed],
                        }),
                      }),
                  ],
                }),
              }),
              (function () {
                var e = (0, X.h)({
                    grade: i,
                    vip: o,
                    medal: a,
                    source_id: "2021",
                    abValues: s,
                    timestamp: l,
                  }),
                  t = e.speed,
                  n = e.vipLevel,
                  r = e.url,
                  c = e.currentVipLevel,
                  u = e.svipUrlToComment,
                  d = e.p2Level,
                  A = "".concat(t || "", "倍加速"),
                  _ = "".concat(d || "", "倍加速"),
                  p = !1,
                  v = !1,
                  f = (0, X.j)(o);
                if (
                  ["2", "3"].includes(
                    String(String(null == s ? void 0 : s.pay)),
                  )
                ) {
                  if (
                    ["2"].includes(String(String(null == s ? void 0 : s.pay)))
                  )
                    A =
                      "豪华VIP" === f || "音乐包" === f
                        ? "升级SVIP享".concat(t, "倍加速")
                        : "豪华VIP年费" === f || "音乐包年卡" === f
                          ? "升级SVIP年卡享".concat(t, "倍加速")
                          : "超级VIP" === f
                            ? "升级SVIP年卡享".concat(t, "倍加速")
                            : "超级VIP年费" === f
                              ? 9 === c
                                ? "立即续费"
                                : "续费升级V"
                                    .concat(n || 1, "会员，享")
                                    .concat(t, "倍加速")
                              : "".concat(t, "倍加速");
                  else {
                    var h = 1e3 * l || new Date().getTime(),
                      C = (0, M.xA)(null == o ? void 0 : o.vip_end_time, h),
                      m = (0, M.xA)(null == o ? void 0 : o.su_vip_end_time, h);
                    A =
                      "豪华VIP" === f || "音乐包" === f
                        ? C > 0 && C <= 7
                          ? ""
                              .concat(C, "天后将失去")
                              .concat(
                                null == i ? void 0 : i.p_speed,
                                "倍加速，立即续费",
                              )
                          : 0 === C
                            ? "今天将失去".concat(
                                null == i ? void 0 : i.p_speed,
                                "倍加速，立即续费",
                              )
                            : "升级SVIP享".concat(t, "倍加速")
                        : "豪华VIP年费" === f || "音乐包年卡" === f
                          ? C > 0 && C <= 7
                            ? ""
                                .concat(C, "天后将失去")
                                .concat(
                                  null == i ? void 0 : i.p_speed,
                                  "倍加速，立即续费",
                                )
                            : 0 === C
                              ? "今天将失去".concat(
                                  null == i ? void 0 : i.p_speed,
                                  "倍加速，立即续费",
                                )
                              : "升级SVIP年卡享".concat(t, "倍加速")
                          : "超级VIP" === f
                            ? m > 0 && m <= 7
                              ? ""
                                  .concat(m, "天后将失去")
                                  .concat(
                                    null == i ? void 0 : i.p_speed,
                                    "倍加速，立即续费",
                                  )
                              : 0 === m
                                ? "今天将失去".concat(
                                    null == i ? void 0 : i.p_speed,
                                    "倍加速，立即续费",
                                  )
                                : "升级SVIP年卡享".concat(t, "倍加速")
                            : "超级VIP年费" === f
                              ? m > 0 && m <= 7
                                ? ""
                                    .concat(m, "天后将失去")
                                    .concat(
                                      null == i ? void 0 : i.p_speed,
                                      "倍加速，立即续费",
                                    )
                                : 0 === m
                                  ? "今天将失去".concat(
                                      null == i ? void 0 : i.p_speed,
                                      "倍加速，立即续费",
                                    )
                                  : 9 === c
                                    ? "立即续费"
                                    : "续费升级V"
                                        .concat(n || 1, "会员，享")
                                        .concat(t, "倍加速")
                              : "".concat(t, "倍加速");
                  }
                } else
                  A =
                    "豪华VIP" === f || "音乐包" === f
                      ? "升SVIP享".concat(t, "倍")
                      : "豪华VIP年费" === f || "音乐包年卡" === f
                        ? "升SVIP年卡享".concat(t, "倍")
                        : "超级VIP" === f
                          ? "升年卡享".concat(t, "倍")
                          : "超级VIP年费" === f
                            ? 9 === c
                              ? "立即续费"
                              : "0" ===
                                    String(
                                      String(null == s ? void 0 : s.pay),
                                    ) ||
                                  "undefined" ===
                                    String(String(null == s ? void 0 : s.pay))
                                ? "续费升V"
                                    .concat(n || 1, "会员享")
                                    .concat(t, "倍")
                                : "升V".concat(n || 1, "会员享").concat(t, "倍")
                            : "升豪华VIP享".concat(t, "倍");
                if ("普通用户" !== f) {
                  if (w) {
                    if (["2"].includes(String(null == s ? void 0 : s.pay)))
                      p = !0;
                    else if (
                      ["3"].includes(String(null == s ? void 0 : s.pay))
                    ) {
                      var b = 1e3 * l || new Date().getTime(),
                        x = (0, M.xA)(null == o ? void 0 : o.vip_end_time, b);
                      x >= 0 &&
                      x <= 7 &&
                      [
                        "豪华VIP",
                        "音乐包",
                        "豪华VIP年费",
                        "音乐包年卡",
                      ].includes(f)
                        ? (v = !0)
                        : (p = !0);
                    }
                  } else p = !0;
                }
                o &&
                  es &&
                  ((es = !1),
                  ee.Z.fire("1135201", {
                    svar1: null == i ? void 0 : i.p_grade,
                    svar2: (0, X.j)(o),
                    svar3: A,
                  }));
                var y = function () {
                    (r && (0, M.Yo)(r, null, { browser: 4 }),
                      ee.Z.fire("1135202", {
                        svar1: null == i ? void 0 : i.p_grade,
                        svar2: (0, X.j)(o),
                        svar3: A,
                      }));
                  },
                  k = function () {
                    (u && (0, M.Yo)(u, null, { browser: 4 }),
                      ee.Z.fire("1135202", {
                        svar1: null == i ? void 0 : i.p_grade,
                        svar2: (0, X.j)(o),
                        svar3: _,
                      }));
                  };
                return (0, F.jsx)(F.Fragment, {
                  children: w
                    ? (0, F.jsx)(F.Fragment, {
                        children:
                          "普通用户" === f
                            ? (0, F.jsx)(F.Fragment, {
                                children: (0, F.jsxs)("div", {
                                  className: P().vip_info_wrap_new_ui,
                                  children: [
                                    (0, F.jsxs)("div", {
                                      className: ei()(P().not_vip_new_ui),
                                      onClick: function () {
                                        return y();
                                      },
                                      children: [
                                        (0, F.jsx)("span", {
                                          className: P().vip_shine,
                                          "aria-hidden": "true",
                                        }),
                                        (0, F.jsx)("img", {
                                          className: P().icon,
                                          src: S.default.src,
                                          alt: "",
                                        }),
                                        A,
                                      ],
                                    }),
                                    (0, F.jsxs)("div", {
                                      className: ei()(
                                        P().not_vip_new_ui,
                                        g ? P().vip_animated_new_ui : "",
                                      ),
                                      onClick: function () {
                                        return k();
                                      },
                                      children: [
                                        (0, F.jsx)("span", {
                                          className: P().vip_shine,
                                          "aria-hidden": "true",
                                        }),
                                        (0, F.jsx)("img", {
                                          className: P().icon,
                                          src: B.default.src,
                                          alt: "",
                                        }),
                                        _,
                                      ],
                                    }),
                                  ],
                                }),
                              })
                            : (0, F.jsx)("div", {
                                className: P().vip_info_wrap_new_ui,
                                children: (0, F.jsxs)("div", {
                                  className: ei()(
                                    P().vip_new_ui,
                                    p && P().suvip,
                                    v && P().vip,
                                    g ? P().vip_animated_new_ui : "",
                                  ),
                                  onClick: function () {
                                    return y();
                                  },
                                  children: [
                                    (0, F.jsx)("span", {
                                      className: P().vip_shine,
                                      "aria-hidden": "true",
                                    }),
                                    (0, F.jsx)("img", {
                                      className: P().icon,
                                      src: p ? B.default.src : S.default.src,
                                      alt: "",
                                    }),
                                    A,
                                  ],
                                }),
                              }),
                      })
                    : (0, F.jsxs)("div", {
                        className: P().vip_info_wrap,
                        onClick: function () {
                          return y();
                        },
                        children: [
                          (0, F.jsxs)("div", {
                            className: P().listen_award,
                            children: [
                              (null == i ? void 0 : i.p_speed) > 1
                                ? "".concat(
                                    null == i ? void 0 : i.p_speed,
                                    "倍加速中,",
                                  )
                                : "",
                              "听10分钟",
                              (0, F.jsxs)("span", {
                                className: P().number,
                                children: [
                                  "+",
                                  parseInt(
                                    10 *
                                      ((null == i ? void 0 : i.p_speed) || 1),
                                  ),
                                ],
                              }),
                              "听歌值",
                            ],
                          }),
                          (0, F.jsxs)("div", {
                            className: ei()(
                              P().vip,
                              p && P().suvip,
                              g ? P().vip_animated : "",
                            ),
                            children: [
                              (0, F.jsx)("span", {
                                className: P().vip_shine,
                                "aria-hidden": "true",
                              }),
                              (0, F.jsx)("img", {
                                className: P().icon,
                                src: p ? B.default.src : S.default.src,
                                alt: "",
                              }),
                              A,
                            ],
                          }),
                        ],
                      }),
                });
              })(),
              (0, F.jsxs)("div", {
                className: P().bottom_wrap,
                children: [
                  (0, F.jsxs)("div", {
                    className: ei()(P().block, w && P().new_ui),
                    children: [
                      (0, F.jsxs)("div", {
                        className: P().block_top,
                        children: [
                          (0, F.jsx)("span", {
                            className: ei()(P().big, w && P().new_ui),
                            children:
                              null != i && i.duration
                                ? Math.floor(
                                    (null == i ? void 0 : i.duration) / 60,
                                  )
                                : "0",
                          }),
                          "小时",
                        ],
                      }),
                      (0, F.jsx)("div", {
                        className: P().block_bottom,
                        style: { color: d },
                        children: "累计听歌",
                      }),
                    ],
                  }),
                  (0, F.jsxs)("div", {
                    className: ei()(P().block, w && P().new_ui),
                    children: [
                      (0, F.jsx)("div", {
                        className: P().block_top,
                        children: m.split(/(\d+)/).map(function (e, t) {
                          return e
                            ? /^\d+$/.test(e)
                              ? (0, F.jsx)(
                                  "span",
                                  {
                                    className: ei()(P().big, w && P().new_ui),
                                    children: e,
                                  },
                                  t,
                                )
                              : e
                            : null;
                        }),
                      }),
                      (0, F.jsx)("div", {
                        className: P().block_bottom,
                        style: { color: d },
                        children: "乐龄",
                      }),
                    ],
                  }),
                  (0, F.jsxs)("div", {
                    className: ei()(P().block, w && P().new_ui),
                    children: [
                      (0, F.jsxs)("div", {
                        className: P().block_top,
                        children: [
                          null != i && i.rank ? "第" : "",
                          (0, F.jsx)("span", {
                            className: ei()(P().big, w && P().new_ui),
                            children:
                              null != i && i.rank
                                ? "".concat(null == i ? void 0 : i.rank)
                                : null != i && i.rank_percent
                                  ? "TOP ".concat(
                                      null == i ? void 0 : i.rank_percent,
                                      "%",
                                    )
                                  : "计算中",
                          }),
                          null != i && i.rank ? "名" : "",
                        ],
                      }),
                      (0, F.jsx)("div", {
                        className: P().block_bottom,
                        style: { color: d },
                        children: (0, L.n4)(null == i ? void 0 : i.rank_type, {
                          city_name: null == i ? void 0 : i.city_name,
                          province_name: null == i ? void 0 : i.province_name,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        eu = n(30986),
        ed = n.n(eu),
        eA = n(86260),
        e_ = n(32283),
        ep = n(75723),
        ev = n(57519),
        ef = n.n(ev),
        eg = n(74223),
        eh = n.n(eg),
        eC = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/icon-like.bfa6be87.png",
          height: 42,
          width: 42,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAsElEQVR42k2OvQrCQBCEzygKwdJGRFtfwtpCwc63ECxstLuL0bsEf0g2sTCNeVO/YIJZGGbnZvZ2lXGZpyht845xUmgrJTxSFF5XNYWxN1a22mY7+tXfcBIamyWYt9+UrOlL4AjGCrM4u9cAnjdD1+jtBS7va4JVIGZqiEjqH3v1ygm4V4EocClpvmsVekH4SEA+XDvluCUYY8zQPnwCmyp5wBAeL6x6oh/0KRxqK/4Xs6xhuu/l3c0AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        em = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/icon-liked.7f330181.png",
          height: 42,
          width: 42,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAwklEQVR42mNo7JjC3Nw1g5EBCBo7Jm9ubJ98AkgLQfhTWBhgoLV7elBD++T/QMH/QFodLgEUmFHfPvl4ZWPfG6jkHyA+C8QngHgBQ33bpC8t3dP+z1206j+Q/Q+kCIYbOia/YahpmfCkb/K8/5euXP9b0zwBJvkL6A6QacsZgIJP+6bM+3/56o3fQPYfoCQI/4SaUAKy4iPIijkLwVYgjG+fDMK2DEBOVX3b5PWltd0rgOyVQMEVje1T1gPp/ob2SewAxsWMRx1+tA4AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        eb = (0, M.Dv)("outerFramework") || "",
        ex = {
          1: {
            src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/icon-top1.ba91360c.png",
            height: 140,
            width: 140,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAu0lEQVR42mMgCrzbFMv+9Vqn3o+7UzOebE1O/3q+TvfF7gJWsOSXEyXMIPrtobLpn69O/f9wVcT/D4dK+kFiX08WsoAV/bvR6vTtYsetD6c7/1/oMPv/7njFtf8P2h3gVvx/1GHy8UjW7Yezbf6f7rD8/3Rd1LX/91oMwZLfThaCrXi3L9/+6VLfR583+d99safQFiy2Kwksx/D9bAU7WPHZ6oAvR4o8wfYfLQSLwcGbdZ7MMPb7XXFwNgCRvluhhYHBNAAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 8,
          },
          2: {
            src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/icon-top2.a3fe2cdf.png",
            height: 140,
            width: 140,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuklEQVR42mMgCkxfv4J9z7ULescf3U1fvGdr+vYLp3QX7NjECpbcev4UC4hec3T/tAO3rv2fs2Xd/3XHD/aBxLZdOA2WY9h7/ZLjrivnbwDp//3LF/7feOrotQN3rjnArTh094bJhlNHbk9bt/x/25yp/2dvXnt9/62rhmDJzWdPMIPo5Qd22k9fv/LRgp2b7i7Zu80OJLZs/05mmDvYIfTJgDXHDniB2EB3gMXgYOGuLcww9srDe+FsAOUwXo7iUdpVAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 8,
          },
          3: {
            src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/icon-top3.07479e1a.png",
            height: 70,
            width: 70,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAvUlEQVR42mMgChxdNY/9ztFNBm8u7c88vbAj486+lfrnNi9gBUveWtHNDKLPrZ0+4/7J3f939ZT8v7R+Rh9I7PaqPhawoheH1jjf2b/25u0D6/8vLYz4f3nDrMufj62yg1vx4eQG00uLO+5srYn7v6Q46v+OjsLrbw4uMwBL3lgOseL4nGb7bY1pDw+3Zdw9urgXrPtoXwlYjuH2phnsIPrm1jmBl1ZN9AaxLy/rBYvBwc4cdyYY+3BLCpwNAFrgV+jo0a3SAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 8,
          },
        };
      eo();
      var ew = function (e) {
          var t,
            n,
            r = e.e,
            i = e.i,
            a = (e.onClick, e.isMine),
            o = void 0 !== a && a,
            l = (e.tabName, e.tab),
            s = E().myInfo,
            c = H((null == r ? void 0 : r.like_num) || 0),
            u = (0, _.Z)(c, 3),
            d = u[0],
            A = u[1],
            v = u[2],
            f = H(!!(null != r && r.is_liked_today)),
            C = (0, _.Z)(f, 3),
            m = C[0],
            b = C[1],
            w = C[2],
            y = (0, h.useRef)(!!(null != r && r.is_liked_today)),
            k = (0, h.useMemo)(
              function () {
                return Z()(null == r ? void 0 : r.avatar) || L.yo;
              },
              [null == r ? void 0 : r.avatar],
            );
          (0, h.useEffect)(
            function () {
              (A((null == r ? void 0 : r.like_num) || 0),
                b(!!(null != r && r.is_liked_today)),
                (y.current = !!(null != r && r.is_liked_today)));
            },
            [r],
          );
          var I = (0, h.useMemo)(
              function () {
                return d < 1e4
                  ? d
                  : d < 1e8
                    ? (d / 1e4).toFixed(1) + "万"
                    : (d / 1e8).toFixed(1) + "亿";
              },
              [d],
            ),
            j = (0, h.useMemo)(
              function () {
                var e,
                  t,
                  n,
                  i =
                    (null == r
                      ? void 0
                      : null === (e = r.vip) || void 0 === e
                        ? void 0
                        : e.svip_level) > 0
                      ? null == r
                        ? void 0
                        : null === (t = r.vip) || void 0 === t
                          ? void 0
                          : t.svip_level
                      : 1,
                  a = (0, X.j)(null == r ? void 0 : r.vip);
                return "超级VIP年费" === a
                  ? "ic_suvip_year_".concat(i)
                  : "超级VIP" === a
                    ? "ic_suvip_".concat(i)
                    : "豪华VIP年费" === a
                      ? "ic_svip_year_".concat(i)
                      : "音乐包年卡" === a
                        ? "ic_music_pack_year"
                        : "豪华VIP" === a
                          ? "ic_svip_".concat(i)
                          : "音乐包" === a
                            ? "ic_music_pack"
                            : null != r &&
                                null !== (n = r.vip) &&
                                void 0 !== n &&
                                n.su_vip_end_time
                              ? "ic_suvip_none_".concat(i)
                              : "ic_svip_none_".concat(i);
              },
              [null == r ? void 0 : r.vip],
            ),
            N =
              ((t = (0, p.Z)(
                g().mark(function e(t) {
                  var n, i, a, o, c, u, d;
                  return g().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((0, M.Dy)()) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (
                            (t && t.stopPropagation && t.stopPropagation(),
                            M.l1.show({ type: "block", msg: "加载中..." }),
                            (i = !w.current),
                            (a = {
                              target_userid: null == r ? void 0 : r.userid,
                              rank_type: l,
                            }),
                            !i)
                          ) {
                            e.next = 13;
                            break;
                          }
                          return ((e.next = 10), e_.Z.like_user(a));
                        case 10:
                          ((e.t0 = e.sent), (e.next = 16));
                          break;
                        case 13:
                          return ((e.next = 15), e_.Z.unlike_user(a));
                        case 15:
                          e.t0 = e.sent;
                        case 16:
                          if (
                            ((o = e.t0),
                            (c = (0, _.Z)(o, 2))[0],
                            (u = c[1]),
                            M.l1.hide(),
                            !u)
                          ) {
                            e.next = 24;
                            break;
                          }
                          return (
                            x.FN.info(
                              (null == u
                                ? void 0
                                : null === (d = u.data) || void 0 === d
                                  ? void 0
                                  : d.message) || "请求失败，请稍后再试",
                            ),
                            e.abrupt("return")
                          );
                        case 24:
                          (i &&
                            x.FN.info(
                              "感谢你点赞我的榜单成绩！一起冲击酷狗听歌王！",
                            ),
                            A(i ? v.current + 1 : Math.max(0, v.current - 1)),
                            b(i),
                            ee.Z.fire("1135206", {
                              svar1:
                                null == s
                                  ? void 0
                                  : null === (n = s.grade) || void 0 === n
                                    ? void 0
                                    : n.p_grade,
                              svar2: (0, X.j)(null == s ? void 0 : s.vip),
                              svar3: i ? "点赞" : "取消",
                            }));
                        case 28:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function (e) {
                return t.apply(this, arguments);
              }),
            O =
              ((n = (0, p.Z)(
                g().mark(function e() {
                  var t;
                  return g().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((0, M.Dy)()) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (M.gn) {
                            e.next = 9;
                            break;
                          }
                          return ((e.next = 5), (0, M.VJ)());
                        case 5:
                          if (((t = e.sent), "1" === eb && t >= 2e4)) {
                            e.next = 9;
                            break;
                          }
                          return e.abrupt("return");
                        case 9:
                          x.my.mobileCall(L.IB.jumpPersonalCenter, {
                            userid: null == r ? void 0 : r.userid,
                          });
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function () {
                return n.apply(this, arguments);
              });
          return (0, F.jsxs)("div", {
            className: eh().otherPos,
            onClick: O,
            children: [
              i > 0 &&
                (3 >= +i
                  ? (0, F.jsx)("img", {
                      className: eh().icon,
                      alt: "",
                      src: ex[i].src,
                    })
                  : (0, F.jsx)("div", {
                      className: eh().num,
                      children: (0, F.jsx)("div", {
                        className: "".concat(eh().otherNameNum),
                        children: i,
                      }),
                    })),
              o &&
                !i &&
                (0, F.jsxs)("div", {
                  className: eh().mine_num,
                  children: [
                    (0, F.jsx)("div", {
                      className: eh().myNameNum,
                      children: "-",
                    }),
                    (0, F.jsx)("div", {
                      className: eh().myNameNum_text,
                      children: "未上榜",
                    }),
                  ],
                }),
              (0, F.jsx)("div", {
                className: eh().picture,
                children: (0, F.jsx)("img", { src: k, alt: "头像" }),
              }),
              (0, F.jsxs)("div", {
                className: eh().nameItem,
                children: [
                  (0, F.jsxs)("div", {
                    className: eh().name,
                    children: [
                      (0, F.jsx)("div", {
                        className: eh().nameText,
                        children: (null == r ? void 0 : r.nickname) || "",
                      }),
                      (0, F.jsx)(en, {
                        vip: null == r ? void 0 : r.vip,
                        fromName: "等级荣誉排行榜",
                      }),
                    ],
                  }),
                  o
                    ? (0, F.jsxs)("div", {
                        className: eh().listen_value,
                        children: [
                          "听歌值",
                          (null == r ? void 0 : r.p_current_point) || "0",
                          !i &&
                            (0, F.jsxs)(F.Fragment, {
                              children: [
                                "，还差",
                                (null == r ? void 0 : r.rank_distance) || "0",
                                "上榜",
                              ],
                            }),
                        ],
                      })
                    : (0, F.jsxs)("div", {
                        className: eh().listen_value,
                        children: [
                          "听歌值 ",
                          (null == r ? void 0 : r.p_current_point) || "0",
                          (null == r ? void 0 : r.p_speed) > 1 &&
                            (0, F.jsxs)("div", {
                              className: ei()(
                                eh().bouns,
                                -1 !== j.indexOf("ic_suvip") && eh().svip_bgc,
                              ),
                              children: [
                                (0, F.jsx)("i", { className: eh().icon }),
                                (0, F.jsxs)("p", {
                                  className: eh().bouns_text,
                                  children: [
                                    null == r ? void 0 : r.p_speed,
                                    "倍加速中",
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                ],
              }),
              (0, F.jsxs)("div", {
                className: eh().like,
                onClick: N,
                children: [
                  (0, F.jsx)("img", {
                    className: eh().icon_like,
                    src: m ? em.src : eC.src,
                    alt: "",
                  }),
                  (0, F.jsx)("span", { className: eh().count, children: I }),
                ],
              }),
            ],
          });
        },
        ey = n(51571),
        ek = n.n(ey),
        eI = n(96486);
      function ej(e) {
        return e
          ? e.pageYOffset || e.scrollTop || 0
          : window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0;
      }
      var eN = (0, h.forwardRef)(function (e, t) {
          var n = e.id,
            r = e.errorInfo,
            i = e.scrollElementId,
            a = e.distance,
            o = void 0 === a ? 200 : a,
            l = e.doLoad,
            s = e.noMore,
            c = e.isSafeArea,
            u = e.enable,
            d = void 0 === u || u,
            A = e.handleRetry,
            _ = e.showNoMore,
            v = (0, h.useState)(null),
            f = v[0];
          v[1];
          var C = (0, h.useRef)();
          (0, h.useEffect)(
            function () {
              if (!s && d) {
                var e,
                  t,
                  n,
                  r,
                  a,
                  c = !1,
                  u = document.querySelector("html"),
                  A = f || (i ? document.querySelector(i) : null),
                  _ = function (e) {
                    var t = !1;
                    return (a < e && (t = !0), (a = e), t);
                  },
                  v = (0, eI.throttle)(function (e, t, n) {
                    !(n >= e) && t >= e - n - o && l && l();
                  }, 500),
                  h = (0, eI.throttle)(
                    ((e = (0, p.Z)(
                      g().mark(function e(i) {
                        return g().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (A
                                    ? ((t = A.clientHeight),
                                      (n = A.scrollHeight))
                                    : ((t = window.innerHeight),
                                      (n =
                                        null == u ? void 0 : u.scrollHeight)),
                                  _((r = A ? A.scrollTop : ej())))
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                return e.abrupt("return");
                              case 4:
                                (c || v(n, r, t), (c = !1));
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      }),
                    )),
                    function (t) {
                      return e.apply(this, arguments);
                    }),
                    500,
                  );
                return (
                  (C.current = function () {
                    (A
                      ? ((t = A.clientHeight), (n = A.scrollHeight))
                      : ((t = window.innerHeight),
                        (n = null == u ? void 0 : u.scrollHeight)),
                      console.log(
                        "checkLoadMore scrollTop: ",
                        (r = A ? A.scrollTop : ej()),
                      ),
                      c || v(n, r, t));
                  }),
                  !(function (e, t) {
                    if (!e) {
                      console.error("addScrollListener: ", e);
                      return;
                    }
                    e.addEventListener("scroll", t);
                  })(A || window, h),
                  function () {
                    !(function (e, t) {
                      if (!e) {
                        console.error("removeScrollListener: ", e);
                        return;
                      }
                      e.removeEventListener("scroll", t);
                    })(A || window, h);
                  }
                );
              }
            },
            [s, d, f],
          );
          var m = function () {
            C.current && C.current();
          };
          return (
            (0, h.useImperativeHandle)(t, function () {
              return { checkLoadMore: m };
            }),
            (0, F.jsx)("div", {
              id: n,
              className: ""
                .concat(ek().loadMoreWrap, " ")
                .concat(
                  c &&
                    (x.my.isIOS
                      ? ek().loadMoreWrapIOS
                      : ek().loadMoreWrapAndroid),
                ),
              style: s && !_ ? { height: 0 } : {},
              children: s
                ? _
                  ? (0, F.jsx)("span", { children: "没有更多了~" })
                  : null
                : r
                  ? (0, F.jsx)("span", {
                      onClick: A,
                      children: r ? r.error : "加载中...",
                    })
                  : (0, F.jsx)("span", { children: "加载中..." }),
            })
          );
        }),
        eO = n(80592),
        eE = n.n(eO),
        eD = n(82215),
        eR = (function (e) {
          (0, u.Z)(r, e);
          var t,
            n =
              ((t = (function () {
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
              })()),
              function () {
                var e,
                  n = (0, A.Z)(r);
                if (t) {
                  var i = (0, A.Z)(this).constructor;
                  e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, d.Z)(this, e);
              });
          function r(e) {
            var t;
            return ((0, s.Z)(this, r), ((t = n.call(this, e)).state = {}), t);
          }
          return (
            (0, c.Z)(r, [
              { key: "componentDidMount", value: function () {} },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.style,
                    n = e.textStyle,
                    r = e.imgStyle,
                    i = e.img,
                    a = e.text,
                    o = e.btnText,
                    l = e.onClickBtn,
                    s = e.btnTextStyle;
                  return (0, F.jsx)("div", {
                    className: eE().wrapper,
                    style: t,
                    children: (0, F.jsxs)("div", {
                      className: eE().load_style_no_result,
                      children: [
                        (0, F.jsx)("img", {
                          style: r,
                          src: i || eD.Z.src,
                          alt: "",
                        }),
                        (0, F.jsx)("div", {
                          className: eE().load_text,
                          style: n,
                          children: a || "暂无数据",
                        }),
                        o
                          ? (0, F.jsx)("div", {
                              style: s,
                              className: eE().btn,
                              onClick: l,
                              children: o,
                            })
                          : null,
                      ],
                    }),
                  });
                },
              },
            ]),
            r
          );
        })(h.Component),
        eP = n(52599),
        eU = n(79341),
        eS = n.n(eU),
        eB = (function (e) {
          (0, u.Z)(i, e);
          var t,
            r =
              ((t = (function () {
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
              })()),
              function () {
                var e,
                  n = (0, A.Z)(i);
                if (t) {
                  var r = (0, A.Z)(this).constructor;
                  e = Reflect.construct(n, arguments, r);
                } else e = n.apply(this, arguments);
                return (0, d.Z)(this, e);
              });
          function i(e) {
            var t;
            return (
              (0, s.Z)(this, i),
              (t = r.call(this, e)),
              (0, v.Z)(
                (0, eP.Z)(t),
                "reload",
                (0, p.Z)(
                  g().mark(function e() {
                    var n, r;
                    return g().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return ((e.next = 2), (0, M.Pd)());
                          case 2:
                            if (e.sent) {
                              e.next = 5;
                              break;
                            }
                            return (
                              x.FN.info("未找到可用的网络连接"),
                              e.abrupt("return")
                            );
                          case 5:
                            if (((n = !1), M.gn)) {
                              e.next = 10;
                              break;
                            }
                            return ((e.next = 9), (0, M.Wh)());
                          case 9:
                            n = e.sent;
                          case 10:
                            n ||
                              ((r = t.props.reloadFn)
                                ? r()
                                : window.location.reload());
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                ),
              ),
              (0, v.Z)((0, eP.Z)(t), "onClose", function (e) {
                (e.stopPropagation(),
                  t.props.onClose ? t.props.onClose() : (0, M.Hm)());
              }),
              (t.state = {}),
              t
            );
          }
          return (
            (0, c.Z)(i, [
              { key: "componentDidMount", value: function () {} },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.style,
                    r = e.textStyle,
                    i = e.showClose,
                    a = e.img,
                    o = e.imgStyle,
                    l = e.errorMsg;
                  return (0, F.jsxs)("div", {
                    className: eS().wrapper,
                    style: t,
                    onClick: this.reload,
                    children: [
                      i && null !== x.my && void 0 !== x.my && x.my.isInClient()
                        ? (0, F.jsx)("img", {
                            className: eS().icon_close,
                            src: n(63481).Z.src,
                            alt: "",
                            onClick: this.onClose,
                          })
                        : null,
                      (0, F.jsxs)("div", {
                        className: eS().load_style_no_result,
                        children: [
                          (0, F.jsx)("img", {
                            style: o,
                            src: a || n(82215).Z.src,
                            alt: "",
                          }),
                          (0, F.jsx)("div", {
                            className: eS().load_text,
                            style: r,
                            children: l || "加载失败，点击屏幕重试",
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            i
          );
        })(h.Component),
        eL = (0, h.memo)(function (e) {
          var t = e.children,
            n = (0, h.useRef)(null),
            r = (0, h.useRef)(null),
            i = (0, h.useRef)(null),
            a = (0, h.useRef)(null),
            o = (0, h.useState)(!1),
            l = o[0],
            s = o[1],
            c = (0, h.useState)(!1),
            u = c[0],
            d = c[1],
            A = (0, h.useCallback)(function () {
              var e = n.current,
                t = r.current;
              e && t && s(t.scrollWidth > e.clientWidth);
            }, []),
            _ = (0, h.useCallback)(function () {
              (a.current && clearTimeout(a.current),
                (a.current = setTimeout(function () {
                  d(!0);
                }, 1500)));
            }, []),
            p = (0, h.useCallback)(
              function () {
                (d(!1), _());
              },
              [_],
            );
          return (
            (0, h.useLayoutEffect)(
              function () {
                A();
              },
              [t, A],
            ),
            (0, h.useLayoutEffect)(
              function () {
                var e = n.current;
                if (e && "undefined" != typeof ResizeObserver) {
                  var t = new ResizeObserver(A);
                  return (
                    t.observe(e),
                    function () {
                      return t.disconnect();
                    }
                  );
                }
              },
              [A],
            ),
            (0, h.useLayoutEffect)(
              function () {
                if ((a.current && clearTimeout(a.current), !l)) {
                  d(!1);
                  return;
                }
                return (
                  d(!0),
                  function () {
                    a.current && clearTimeout(a.current);
                  }
                );
              },
              [l, t],
            ),
            (0, h.useLayoutEffect)(
              function () {
                if (l && u) {
                  var e = i.current,
                    t = r.current;
                  if (e && t) {
                    var n = t.offsetWidth;
                    n <= 0 ||
                      (e.style.setProperty(
                        "--marquee-end",
                        "-".concat(n, "px"),
                      ),
                      (e.style.animationDuration = "".concat(
                        Math.max(n / 50, 4),
                        "s",
                      )));
                  }
                }
              },
              [l, u, t],
            ),
            (0, F.jsxs)("div", {
              ref: n,
              className: ef().name_wrap,
              children: [
                (0, F.jsx)("span", {
                  ref: r,
                  className: ef().name_measure,
                  "aria-hidden": "true",
                  children: t,
                }),
                l
                  ? (0, F.jsx)("div", {
                      ref: i,
                      className: ei()(
                        ef().name_track,
                        u && ef().name_track_playing,
                      ),
                      onAnimationEnd: u ? p : void 0,
                      children: (0, F.jsx)("span", {
                        className: ef().name,
                        children: t,
                      }),
                    })
                  : (0, F.jsx)("span", { className: ef().name, children: t }),
              ],
            })
          );
        }),
        eY = n(43816),
        eV = n.n(eY),
        eM = function (e) {
          return e.toString().padStart(2, "0");
        },
        eQ = function (e) {
          var t = Math.max(0, Math.floor(e / 1e3));
          return [
            Math.floor(t / 86400),
            eM(Math.floor((t % 86400) / 3600)),
            eM(Math.floor((t % 3600) / 60)),
            eM(t % 60),
          ];
        },
        eH = function (e) {
          var t = Date.now();
          if ("number" == typeof e) return t + e;
          if ("string" == typeof e) {
            var n = Date.parse(e);
            return isNaN(n) ? t : n;
          }
          return t;
        },
        eT = function (e) {
          var t = (0, h.useState)(function () {
              return eQ(eH(e) - Date.now());
            }),
            n = t[0],
            r = t[1],
            i = (0, h.useRef)(null),
            a = (0, h.useRef)(e);
          a.current = e;
          var o = (0, h.useCallback)(function () {
              i.current && (clearTimeout(i.current), (i.current = null));
            }, []),
            l = (0, h.useCallback)(
              function (e) {
                o();
                var t = eH(e);
                !(function e() {
                  var n = Math.max(0, t - Date.now());
                  if ((r(eQ(n)), !(n <= 0))) {
                    var a = 1e3 - (Date.now() % 1e3);
                    i.current = setTimeout(e, a);
                  }
                })();
              },
              [o],
            );
          return (
            (0, h.useEffect)(
              function () {
                return (l(e), o);
              },
              [e, l, o],
            ),
            {
              text: n,
              reset: (0, h.useCallback)(
                function (e) {
                  console.log("reset", e);
                  var t = void 0 !== e ? e : a.current;
                  (void 0 !== e && (a.current = e), l(t));
                },
                [l],
              ),
            }
          );
        },
        eZ = (0, h.memo)(function (e) {
          var t,
            n,
            r,
            i,
            a = e.text,
            o = e.textColor;
          return (0, F.jsx)("div", {
            className: eV().countdown_wrap,
            style: { color: o || "#000" },
            children: (0, F.jsxs)("div", {
              className: eV().countdown,
              children: [
                (0, F.jsx)("span", {
                  className: eV().num,
                  children:
                    null !== (t = null == a ? void 0 : a[0]) && void 0 !== t
                      ? t
                      : "00",
                }),
                (0, F.jsx)("span", {
                  className: eV().day_symbol,
                  children: "天",
                }),
                (0, F.jsx)("span", {
                  className: eV().num,
                  children:
                    null !== (n = null == a ? void 0 : a[1]) && void 0 !== n
                      ? n
                      : "00",
                }),
                (0, F.jsx)("span", { className: eV().symbol, children: ":" }),
                (0, F.jsx)("span", {
                  className: eV().num,
                  children:
                    null !== (r = null == a ? void 0 : a[2]) && void 0 !== r
                      ? r
                      : "00",
                }),
                (0, F.jsx)("span", { className: eV().symbol, children: ":" }),
                (0, F.jsx)("span", {
                  className: eV().num,
                  children:
                    null !== (i = null == a ? void 0 : a[3]) && void 0 !== i
                      ? i
                      : "00",
                }),
              ],
            }),
          });
        }),
        eF = n(83859),
        eK = n.n(eF),
        eG = null,
        eW = "listen-level-next-toast",
        ez = function (e) {
          if (eG) {
            (e && (t = document.getElementById(e)),
              t || (t = document.getElementById("__next")),
              (t.style.overflow = "hidden"),
              t.appendChild(eG));
            var t,
              n = setTimeout(function () {
                (clearTimeout(n),
                  (document.getElementById(eW).style.opacity = 1));
              }, 20);
          }
        },
        eJ = function (e) {
          if (eG) {
            var t;
            (e && (t = document.getElementById(e)),
              t || (t = document.getElementById("__next")),
              (t.style.overflow = ""),
              t.removeChild(eG),
              (eG = null));
          }
        },
        eX = (function () {
          function e() {
            (0, s.Z)(this, e);
          }
          return (
            (0, c.Z)(e, null, [
              {
                key: "dialog",
                value: function (e) {
                  var t = e.scrollId,
                    n = void 0 === t ? "" : t,
                    r = e.title,
                    i = void 0 === r ? "" : r,
                    a = e.content,
                    o = e.contentStyle,
                    l = e.confirmText,
                    s = e.confirmStyle,
                    c = void 0 === s ? null : s,
                    u = e.cancelText,
                    d = e.showCancel,
                    A = void 0 === d || d,
                    _ = e.keep,
                    p = void 0 !== _ && _,
                    v = e.showClose,
                    f = void 0 !== v && v,
                    g = e.confirm,
                    h = e.cancel,
                    C = e.style,
                    m = void 0 === C ? "" : C;
                  if (!eG) {
                    if (
                      ((eG = document.createElement("div")).setAttribute(
                        "id",
                        eW,
                      ),
                      console.log("ins", eG),
                      eG.setAttribute("class", "toast_dialog mask"),
                      "object" == typeof m)
                    ) {
                      var b = "";
                      (Object.keys(m).forEach(function (e) {
                        b +=
                          e.replace(/([A-Z])/g, "-$1").toLowerCase() +
                          ":" +
                          m[e] +
                          ";";
                      }),
                        (m = b));
                    }
                    var x = "";
                    return (
                      c &&
                        Object.keys(c).forEach(function (e) {
                          x += "".concat(e, ":").concat(c[e], ";");
                        }),
                      (eG.innerHTML = "\n      <div class="
                        .concat(eK().dialog_wrap, " style=")
                        .concat(m, ">\n        ")
                        .concat(
                          i
                            ? "\n          <div class="
                                .concat(eK().title, ">\n            <strong>")
                                .concat(
                                  i,
                                  "</strong>\n          </div>\n        ",
                                )
                            : "",
                          "\n        <div class=",
                        )
                        .concat(eK().content, " style='")
                        .concat(void 0 === o ? "" : o, "'>")
                        .concat(
                          void 0 === a ? "" : a,
                          "</div>\n        <div class='",
                        )
                        .concat(
                          eK().btns,
                          " border1px border1px-top'}>\n          ",
                        )
                        .concat(
                          A
                            ? "\n            <div id='dialog-btn-cancel' class='"
                                .concat(eK().btn_item, " ")
                                .concat(
                                  eK().btn_cancel,
                                  " border1px border1px-left'>",
                                )
                                .concat(
                                  void 0 === u ? "取消" : u,
                                  "</div>\n          ",
                                )
                            : "",
                          "\n          <div id='dialog-btn-confirm' class='",
                        )
                        .concat(eK().btn_item, " ")
                        .concat(
                          eK().btn_confirm,
                          " border1px border1px-left' style='",
                        )
                        .concat(x, "'>")
                        .concat(
                          void 0 === l ? "确定" : l,
                          "</div>\n        </div>\n      </div>\n      ",
                        )
                        .concat(
                          f
                            ? "\n        <div id='dialog-btn-close' class='".concat(
                                eK().dialog_close,
                                "'></div>\n      ",
                              )
                            : "",
                          "\n    ",
                        )),
                      ez(n),
                      document
                        .getElementById("dialog-btn-confirm")
                        .addEventListener("click", w),
                      A &&
                        document
                          .getElementById("dialog-btn-cancel")
                          .addEventListener("click", y),
                      f &&
                        document
                          .getElementById("dialog-btn-close")
                          .addEventListener("click", function (e) {
                            (e.stopPropagation(),
                              k(function () {
                                h && h();
                              }));
                          }),
                      { close: k }
                    );
                  }
                  function w(e) {
                    (e.stopPropagation(),
                      p
                        ? g && g()
                        : k(function () {
                            g && g();
                          }));
                  }
                  function y(e) {
                    (e.stopPropagation(),
                      p
                        ? h && h()
                        : k(function () {
                            h && h();
                          }));
                  }
                  function k(e) {
                    if (eG) {
                      (A &&
                        document
                          .getElementById("dialog-btn-cancel")
                          .removeEventListener("click", y),
                        document
                          .getElementById("dialog-btn-confirm")
                          .removeEventListener("click", w));
                      var t = setTimeout(function () {
                        (clearTimeout(t), eJ(n), e && e());
                      }, 80);
                    }
                  }
                },
              },
            ]),
            e
          );
        })(),
        eq = {
          initClientCom: function (e, t) {
            if (M.DT) {
              (x.my.mobileCall(L.IB.changeStatusColor, {
                isFullScreen: 1,
                isHideTitleBar: 1,
                isShowArrow: 0,
                backBtnColor: "ffffff",
                backBtnOpacity: 100,
                statusBarMode: t,
              }),
                x.my.mobileCall(
                  L.IB.disableCloseAfterPay,
                  null,
                  function () {},
                ));
              var n = setTimeout(function () {
                (clearTimeout(n),
                  x.my.mobileCall(L.IB.showHideBar, { state: 0 }));
              }, 500);
              e &&
                (x.my.mobileCall(L.IB.forbidSwiperButCanLeftestQuit, {
                  type: 1,
                }),
                M.gn || x.my.mobileCall(711, { canSwipe: !1, height: 1e4 }));
            }
          },
          closeClientLoading: function () {
            (window.vs_finish && window.vs_finish(),
              M.DT &&
                (x.my.mobileCall(1203),
                x.my.mobileCall(L.IB.isShowDialog, { type: 1, isShow: 0 })));
          },
          showLoginDialog: function () {
            var e,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = t.content;
            return eX.dialog({
              content: n || "需要登录后才能查看哦",
              confirmText: "去登录",
              keep: !0,
              confirm:
                ((e = (0, p.Z)(
                  g().mark(function e() {
                    return g().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return ((e.next = 2), sleep(100));
                          case 2:
                            x.my.mobileCall(L.IB.callSoftUserLogin, {
                              topicName: "听歌等级页",
                              loginType: null,
                            });
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return e.apply(this, arguments);
                }),
              cancel: function () {
                (0, M.Hm)();
              },
            });
          },
          showOpenKgDialog: function () {
            var e,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = t.content,
              r = t.fullPath,
              i = t.showCancel;
            return eX.dialog({
              content: n || "需要在酷狗 APP 内才能查看哦",
              confirmText: "去酷狗",
              keep: !i,
              showCancel: i || !1,
              confirm:
                ((e = (0, p.Z)(
                  g().mark(function e() {
                    return g().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (0, x.e0)("303", 9, 0, {
                              url: r
                                ? window.location.href
                                : window.location.origin +
                                  window.location.pathname,
                              title: "勋章收藏馆",
                            });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            });
          },
          getAPMParamsFromErr: function (e, t) {
            var n = {},
              r = (null == e ? void 0 : e.message) || "";
            if (~r.indexOf("timeout"))
              n = { te: "E1", position: t || "01", fs: 1 };
            else if (~r.indexOf("Network"))
              n = { te: "E3", position: t || "01", fs: 404 };
            else {
              var i,
                a,
                o = 500,
                l = "02";
              try {
                var s = /^Request Error: (.*)$/.exec(r);
                if (s && s[1]) {
                  var c = Number(s[1]);
                  isNaN(c)
                    ? (o = 501)
                    : (c < 0 && ((c = Math.abs(c)), (l = "03")),
                      (o = String(c).length > 6 ? 502 : c));
                }
              } catch (e) {}
              n = {
                te: "E3",
                position: t || l,
                fs: o,
                hash: JSON.stringify(e),
                realtime1:
                  (null === (i = window) || void 0 === i
                    ? void 0
                    : null === (a = i.location) || void 0 === a
                      ? void 0
                      : a.href) || "",
              };
            }
            return n;
          },
        };
      function e$(e, t) {
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
      function e1(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? e$(Object(n), !0).forEach(function (t) {
                (0, v.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : e$(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var e2 = (0, M.Yk)(66),
        e0 = function (e) {
          var t,
            n,
            r = e.activeTab,
            i = e.tabName,
            a = e.initList,
            o = e.initHasMore,
            l = e.tab,
            s = e.initArea,
            c = e.initSelfInfo,
            u = e.initPeriodEndTime,
            d = e.onContentReady,
            A = (0, y.Yu)(),
            v = A.bgColor,
            f = A.textColor,
            C = E().myInfo,
            m = (0, h.useState)(""),
            b = m[0],
            x = m[1],
            w = H(1),
            k = (0, _.Z)(w, 3),
            I = (k[0], k[1]),
            j = k[2],
            N = (0, h.useState)(!!o),
            O = N[0],
            D = N[1],
            R = H(!!(null != a && a.length)),
            P = (0, _.Z)(R, 3),
            S = (P[0], P[1]),
            B = P[2],
            Y = H(a),
            V = (0, _.Z)(Y, 3),
            Q = V[0],
            T = V[1],
            Z = V[2],
            K = H(!!(null != a && a.length)),
            G = (0, _.Z)(K, 3),
            W = G[0],
            z = G[1];
          G[2];
          var J = (0, h.useState)(!1);
          (J[0], J[1]);
          var q = (0, h.useState)(null),
            $ = q[0],
            et = q[1],
            en = (0, h.useState)(s),
            er = en[0],
            ea = en[1],
            eo = (0, h.useState)(c),
            el = eo[0],
            es = eo[1],
            ec = (0, h.useState)(u),
            eu = ec[0],
            ed = ec[1],
            eA = (0, h.useState)(0),
            ev = eA[0],
            eg = eA[1],
            eh = (0, h.useState)(0),
            eC = eh[0],
            em = eh[1],
            eb = (0, h.useState)(null),
            ex = eb[0],
            ey = eb[1],
            ek = (0, h.useState)(0),
            eI = ek[0],
            ej = ek[1],
            eO = (0, h.useState)(!0),
            eE = eO[0],
            eD = eO[1],
            eP = (0, h.useState)(e2),
            eU = eP[0],
            eS = eP[1],
            eY = (0, h.useRef)(null),
            eV = (0, h.useRef)(!1),
            eM = (0, h.useMemo)(
              function () {
                return (null == ex ? void 0 : ex.length) > 1
                  ? [].concat((0, ep.Z)(ex), [ex[0]])
                  : ex || [];
              },
              [ex],
            ),
            eQ = eT(eC),
            eH = eQ.text,
            eF = eQ.reset;
          ((0, h.useEffect)(
            function () {
              l !== r || ex || eW();
            },
            [l, r, ex],
          ),
            (0, h.useEffect)(
              function () {
                l === r && (console.log("useEffect setVisible true"), eG(!0));
              },
              [l, r],
            ),
            (0, h.useLayoutEffect)(
              function () {
                l === r && W && "loading" !== b && (null == d || d(l));
              },
              [l, r, W, b, Q, d],
            ),
            (0, h.useLayoutEffect)(
              function () {
                var e,
                  t,
                  n =
                    null === (e = eY.current) || void 0 === e
                      ? void 0
                      : null === (t = e.children) || void 0 === t
                        ? void 0
                        : t[0];
                if (n) {
                  var r = n.offsetHeight;
                  r > 0 && eS(r);
                }
              },
              [eM.length],
            ),
            (0, h.useEffect)(
              function () {
                if (ex && !((null == ex ? void 0 : ex.length) <= 1)) {
                  var e = setInterval(function () {
                    eV.current ||
                      ej(function (e) {
                        return e >= ex.length ? e : e + 1;
                      });
                  }, 5e3);
                  return function () {
                    return clearInterval(e);
                  };
                }
              },
              [ex],
            ),
            (0, h.useLayoutEffect)(
              function () {
                if (!eE && 0 === eI) {
                  var e = eY.current;
                  (e && e.offsetHeight, (eV.current = !1));
                  var t = requestAnimationFrame(function () {
                    eD(!0);
                  });
                  return function () {
                    return cancelAnimationFrame(t);
                  };
                }
              },
              [eE, eI],
            ));
          var eK = (0, h.useCallback)(
              function (e) {
                (null == ex ? void 0 : ex.length) <= 1 ||
                  e.target !== e.currentTarget ||
                  "transform" !== e.propertyName ||
                  eI !== (null == ex ? void 0 : ex.length) ||
                  ((eV.current = !0), eD(!1), ej(0));
              },
              [eI],
            ),
            eG =
              ((t = (0, p.Z)(
                g().mark(function e(t, n) {
                  var i,
                    a,
                    o,
                    l,
                    s,
                    c,
                    u,
                    d,
                    A,
                    p,
                    v,
                    f,
                    h,
                    C,
                    m,
                    b,
                    w,
                    y,
                    k,
                    N;
                  return g().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(t && B.current)) {
                            e.next = 3;
                            break;
                          }
                          return (S(!1), e.abrupt("return"));
                        case 3:
                          if (!(!t && !(0, M.Dy)(1e3, "level-rank-get-list"))) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return");
                        case 5:
                          if (
                            (et(null),
                            t && x("loading"),
                            (u = {
                              rank_type: r,
                              page: t ? 1 : j.current + 1,
                              pagesize: L.Qb,
                            }),
                            (p = n),
                            n)
                          ) {
                            e.next = 17;
                            break;
                          }
                          return ((e.next = 12), e_.Z.get_listen_level_rank(u));
                        case 12:
                          ((v = e.sent),
                            (d = (f = (0, _.Z)(v, 2))[0]),
                            (A = f[1]),
                            (p = null == d ? void 0 : d.data));
                        case 17:
                          if ((x(""), !A)) {
                            e.next = 23;
                            break;
                          }
                          return (
                            console.log("getList-err", A),
                            t
                              ? (x("error"), D(!1), z(!0))
                              : et({ error: "加载失败，请点击重试" }),
                            null !== (h = A) &&
                            void 0 !== h &&
                            h.data &&
                            (null === (C = A) || void 0 === C
                              ? void 0
                              : null === (m = C.data) || void 0 === m
                                ? void 0
                                : m.errmsg) !== void 0
                              ? ee.Z.statAPMN(113948, {
                                  state: 0,
                                  position: "07",
                                  te: "E2",
                                  hash: JSON.stringify({
                                    res:
                                      null === (b = A) || void 0 === b
                                        ? void 0
                                        : b.data,
                                    params: u,
                                  }),
                                })
                              : ee.Z.statAPMN(
                                  113948,
                                  e1(
                                    { state: 0 },
                                    eq.getAPMParamsFromErr(A, "08"),
                                  ),
                                ),
                            e.abrupt("return")
                          );
                        case 23:
                          if (
                            (I(t ? 1 : j.current + 1),
                            ea(
                              null === (i = p) || void 0 === i
                                ? void 0
                                : i.area,
                            ),
                            es(
                              null === (a = p) || void 0 === a
                                ? void 0
                                : a.self_info,
                            ),
                            ed(
                              null === (o = p) || void 0 === o
                                ? void 0
                                : o.period_end_time,
                            ),
                            (null === (l = p) || void 0 === l
                              ? void 0
                              : null === (s = l.list) || void 0 === s
                                ? void 0
                                : s.length) !== 0)
                          ) {
                            e.next = 32;
                            break;
                          }
                          return (
                            (null === (w = Z.current) || void 0 === w
                              ? void 0
                              : w.length) === 0 && x("empty"),
                            D(!1),
                            t && z(!0),
                            e.abrupt("return")
                          );
                        case 32:
                          (T(
                            (y = t
                              ? (null === (k = p) || void 0 === k
                                  ? void 0
                                  : k.list) || []
                              : [].concat(
                                  (0, ep.Z)(Z.current),
                                  (0, ep.Z)(
                                    (null === (N = p) || void 0 === N
                                      ? void 0
                                      : N.list) || [],
                                  ),
                                )),
                          ),
                            D(
                              (null == y ? void 0 : y.length) <
                                (null === (c = p) || void 0 === c
                                  ? void 0
                                  : c.total),
                            ),
                            t && z(!0),
                            ee.Z.statAPMN(113948, {
                              state: 1,
                              position: "04",
                            }));
                        case 37:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function (e, n) {
                return t.apply(this, arguments);
              }),
            eW =
              ((n = (0, p.Z)(
                g().mark(function e() {
                  var t, n, a, o, l, s, c, u, d, A, p, v;
                  return g().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = { rank_type: r }),
                            (e.next = 3),
                            e_.Z.get_activity_list(o)
                          );
                        case 3:
                          if (
                            ((l = e.sent),
                            (c = (s = (0, _.Z)(l, 2))[0]),
                            !(u = s[1]))
                          ) {
                            e.next = 11;
                            break;
                          }
                          return (
                            console.log("getActivityList-err", u),
                            null != u &&
                            u.data &&
                            (null == u
                              ? void 0
                              : null === (d = u.data) || void 0 === d
                                ? void 0
                                : d.errmsg) !== void 0
                              ? ee.Z.statAPMN(113948, {
                                  state: 0,
                                  position: "09",
                                  te: "E2",
                                  hash: JSON.stringify({
                                    res: null == u ? void 0 : u.data,
                                    params: o,
                                  }),
                                })
                              : ee.Z.statAPMN(
                                  113948,
                                  e1(
                                    { state: 0 },
                                    eq.getAPMParamsFromErr(u, "10"),
                                  ),
                                ),
                            e.abrupt("return")
                          );
                        case 11:
                          ((A =
                            null == c
                              ? void 0
                              : null === (t = c.data) || void 0 === t
                                ? void 0
                                : null === (n = t.list) || void 0 === n
                                  ? void 0
                                  : n[0]) &&
                            (ey((null == A ? void 0 : A.prizes) || []),
                            (null == A
                              ? void 0
                              : null === (p = A.prizes) || void 0 === p
                                ? void 0
                                : p.length) > 0 &&
                              ee.Z.fire("1135205", {
                                svar1:
                                  null == C
                                    ? void 0
                                    : null === (v = C.grade) || void 0 === v
                                      ? void 0
                                      : v.p_grade,
                                svar2: (0, X.j)(null == C ? void 0 : C.vip),
                                svar3: "等级荣誉榜",
                                svar4: i,
                              })),
                            eg(
                              (null == c
                                ? void 0
                                : null === (a = c.data) || void 0 === a
                                  ? void 0
                                  : a.timestamp) || 0,
                            ),
                            ee.Z.statAPMN(113948, {
                              state: 1,
                              position: "05",
                            }));
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function () {
                return n.apply(this, arguments);
              });
          (0, h.useEffect)(
            function () {
              if (0 !== eu && 0 !== ev) {
                var e = 1e3 * Math.max(0, (eu || 0) - ev);
                (em(e), eF(e));
              }
            },
            [eu, ev],
          );
          var ez = (0, h.useCallback)(
            function (e, t) {
              return (0, F.jsxs)(
                "div",
                {
                  className: ef().reward_item,
                  children: [
                    (0, F.jsx)("div", {
                      className: ef().text,
                      children:
                        eI === t && (0, F.jsx)(eL, { children: e.name }),
                    }),
                    (0, F.jsx)("img", {
                      className: ef().img,
                      src: e.icon,
                      alt: "",
                    }),
                  ],
                },
                t,
              );
            },
            [eI],
          );
          return (0, F.jsxs)("div", {
            className: ef().tab_page_wrap,
            id: "scroll_wrap_".concat(l),
            children: [
              (0, F.jsxs)("div", {
                className: ef().update_tips,
                children: [
                  "榜单每小时更新",
                  (3 === l || 4 === l) &&
                    (0, F.jsxs)(F.Fragment, {
                      children: [
                        "，",
                        (0, F.jsx)(eZ, {
                          text: eH,
                          textColor: "rgba(0, 0, 0, 0.50)",
                        }),
                        "后结榜",
                      ],
                    }),
                ],
              }),
              l === r &&
                (null == ex ? void 0 : ex.length) > 0 &&
                (0, F.jsx)("div", {
                  className: ef().reward_wrap,
                  style: { backgroundColor: (0, U.Wp)(v, 0.15), color: f },
                  children: (0, F.jsx)("div", {
                    className: ef().reward_scroll_area,
                    children:
                      (null == ex ? void 0 : ex.length) <= 1
                        ? null == eM
                          ? void 0
                          : eM.map(function (e, t) {
                              return ez(e, t);
                            })
                        : (0, F.jsx)("div", {
                            ref: eY,
                            className: ei()(
                              ef().reward_track,
                              !eE && ef().reward_track_no_transition,
                            ),
                            style: {
                              transform: "translate3d(0, -".concat(
                                eI * eU,
                                "px, 0)",
                              ),
                            },
                            onTransitionEnd: eK,
                            children:
                              null == eM
                                ? void 0
                                : eM.map(function (e, t) {
                                    return ez(e, t);
                                  }),
                          }),
                  }),
                }),
              (0, F.jsxs)("div", {
                className: ei()(
                  ef().list_wrap,
                  !(null != ex && ex.length) && ef().list_wrap_no_reward,
                ),
                children: [
                  (0, F.jsx)(ew, {
                    e: el,
                    i: (null == el ? void 0 : el.rank) || 0,
                    onClick: function () {},
                    isMine: !0,
                    tab: l,
                  }),
                  null == Q
                    ? void 0
                    : Q.map(function (e, t) {
                        return (0, F.jsx)(
                          h.Fragment,
                          {
                            children: (0, F.jsx)(ew, {
                              e: e,
                              i: (null == e ? void 0 : e.rank) || t + 1,
                              onClick: function () {},
                              isMine: !1,
                              tabName: i,
                              tab: l,
                            }),
                          },
                          t,
                        );
                      }),
                  r === l &&
                    (0, F.jsx)(eN, {
                      errorInfo: $,
                      scrollElementId: "#scrollerContainer",
                      doLoad: function () {
                        (console.log("doload"), eG());
                      },
                      noMore: !O,
                      handleRetry: function () {
                        eG();
                      },
                      showNoMore: "" === b,
                    }),
                  "empty" === b &&
                    (0, F.jsx)(eR, {
                      style: { margin: "auto" },
                      text:
                        (null != er && er.city_name) || 1 === l || 2 === l
                          ? "暂无排名"
                          : "无法获取您所在地区，请设置定位后加入榜单",
                    }),
                  "error" === b &&
                    (0, F.jsx)(eB, {
                      style: { margin: "auto" },
                      reloadFn: function () {
                        return eG(!0);
                      },
                    }),
                ],
              }),
            ],
          });
        },
        e3 = n(51692),
        e5 = n.n(e3);
      function e4(e, t) {
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
      function e7(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? e4(Object(n), !0).forEach(function (t) {
                (0, v.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : e4(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function e6(e) {
        var t = e.children,
          n = e.open,
          r = e.mask,
          i = e.closeOnMaskClick,
          a = void 0 === i || i,
          o = e.onClose,
          l = e.position,
          s = e.zIndex,
          c = e.maskOpacity,
          u = function () {
            o && o();
          };
        return (0, Q.createPortal)(
          (0, F.jsxs)("div", {
            className: ei()(e5().wrap, (0, v.Z)({}, e5().show, n)),
            style: { display: "none", zIndex: void 0 === s ? 10001 : s },
            children: [
              !!(void 0 === r || r) &&
                (0, F.jsx)("div", {
                  className: e5().mask,
                  style: { opacity: n ? (void 0 === c ? 0.6 : c) : 0 },
                  onClick: function () {
                    a && u();
                  },
                }),
              (0, F.jsx)("div", {
                className: ei()(
                  e5().content,
                  e5()["content_".concat(void 0 === l ? "middle" : l)],
                ),
                children: t,
              }),
            ],
          }),
          document.body,
        );
      }
      var e8 = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.onOk;
          return new Promise(function (r, i) {
            var a;
            (0, M.R7)(
              C().createElement(function () {
                var i = (0, h.useState)(!1),
                  o = i[0],
                  l = i[1],
                  s = function () {
                    (l(!1), setTimeout(a, 300));
                  };
                return (
                  (0, h.useEffect)(function () {
                    return l(!0);
                  }, []),
                  (0, F.jsx)(
                    e,
                    e7(
                      { open: o },
                      e7(
                        {
                          onOk: function () {
                            if (n) {
                              n(function () {
                                (s(), r());
                              });
                              return;
                            }
                            (s(), r());
                          },
                          onCancel: function () {
                            (s(), r({ cancelled: !0 }));
                          },
                        },
                        t,
                      ),
                    ),
                  )
                );
              }),
              function (e) {
                return (a = e);
              },
            );
          });
        },
        e9 = n(16388),
        te = n.n(e9),
        tt = n(94159),
        tn = n.n(tt),
        tr = 60 * Math.floor(1.5);
      function ti(e) {
        var t = e.options,
          n = void 0 === t ? [] : t,
          r = e.value,
          i = e.onChange,
          a = (0, h.useRef)(null),
          o = (0, h.useRef)({ y: 0, top: 0, time: 0 }),
          l = (0, h.useRef)([]);
        (0, h.useRef)(0);
        var s = (0, h.useState)(0),
          c = s[0],
          u = s[1],
          d = (0, h.useState)(""),
          A = d[0],
          _ = d[1],
          p = function (e) {
            var t = n.findIndex(function (t) {
              return t.value === e;
            });
            return t >= 0 ? t : 0;
          },
          v = function (e) {
            return -(60 * e);
          },
          f = function (e) {
            var t =
                !(arguments.length > 1) ||
                void 0 === arguments[1] ||
                arguments[1],
              a = Math.max(0, Math.min(e, n.length - 1));
            (_(t ? "transform 0.3s ease-out" : ""), u(v(a)));
            var o = n[a];
            o && o.value !== r && i && i(o, a);
          };
        (0, h.useEffect)(
          function () {
            f(p(r), !1);
          },
          [r, n],
        );
        var g = function (e) {
            var t = v(n.length - 1);
            return e > 0 ? 0 : e < t ? t : e;
          },
          C = function () {
            var e = l.current;
            if (e.length < 2) return 0;
            var t = e[e.length - 1],
              n = e[e.length - 2];
            return ((t.y - n.y) / Math.max(t.time - n.time, 1)) * 180;
          },
          m = function (e) {
            ((l.current = [{ y: e, time: Date.now() }]),
              (o.current = { y: e, top: c, time: Date.now() }),
              _(""));
          },
          b = function (e) {
            l.current.length &&
              (l.current.push({ y: e, time: Date.now() }),
              u(g(o.current.top + e - o.current.y)));
          },
          x = function () {
            if (l.current.length) {
              var e = g(c + C());
              ((l.current = []), f(Math.round(Math.abs(e) / 60), !0));
            }
          },
          w = function () {
            return x();
          };
        return (0, F.jsxs)("div", {
          className: tn().column,
          style: { height: 180 },
          onTouchStart: function (e) {
            return m(e.touches[0].clientY);
          },
          onTouchMove: function (e) {
            return b(e.touches[0].clientY);
          },
          onTouchEnd: w,
          onTouchCancel: w,
          onMouseDown: function (e) {
            m(e.clientY);
            var t = function (e) {
              return b(e.clientY);
            };
            (document.addEventListener("mousemove", t),
              document.addEventListener("mouseup", function e() {
                (x(),
                  document.removeEventListener("mousemove", t),
                  document.removeEventListener("mouseup", e));
              }));
          },
          children: [
            (0, F.jsx)("div", { className: tn().columnMask }),
            (0, F.jsx)("div", {
              className: tn().columnInner,
              children: (0, F.jsx)("div", {
                ref: a,
                className: tn().columnList,
                style: {
                  transform: "translate3d(0, ".concat(c + tr, "px, 0)"),
                  transition: A,
                },
                children: n.map(function (e, t) {
                  return (0, F.jsx)(
                    "div",
                    {
                      className: tn().columnItem,
                      style: { height: 60 },
                      onClick: function () {
                        return f(t, !0);
                      },
                      children: (0, F.jsx)("span", { children: e.label }),
                    },
                    e.value,
                  );
                }),
              }),
            }),
          ],
        });
      }
      function ta(e) {
        var t = e.visible,
          n = void 0 !== t && t,
          r = (e.title, e.confirmText),
          i = e.value,
          a = void 0 === i ? [] : i,
          o = e.columns,
          l = void 0 === o ? [] : o,
          s = e.zIndex,
          c = e.onConfirm,
          u = e.onClose,
          d = e.style,
          A = (0, h.useState)(a),
          _ = A[0],
          p = A[1];
        (0, h.useEffect)(
          function () {
            n && p(to(a, l));
          },
          [n, a, l],
        );
        var f = (0, h.useMemo)(
            function () {
              var e = _[0],
                t =
                  l.find(function (t) {
                    return t.value === e;
                  }) || l[0];
              return [l, (null == t ? void 0 : t.children) || []];
            },
            [l, _],
          ),
          g = function (e, t) {
            p(function (n) {
              var r = (0, ep.Z)(n);
              return ((r[e] = t.value), to(r, l));
            });
          };
        return (0, Q.createPortal)(
          (0, F.jsxs)("div", {
            className: ei()(tn().wrap, (0, v.Z)({}, tn().show, n)),
            style: { zIndex: void 0 === s ? 10002 : s },
            children: [
              (0, F.jsx)("div", {
                className: tn().mask,
                onClick: function () {
                  return u && u();
                },
              }),
              (0, F.jsxs)("div", {
                className: tn().panel,
                children: [
                  (0, F.jsxs)("div", {
                    className: tn().header,
                    children: [
                      (0, F.jsx)("h5", { children: "榜单设置" }),
                      (0, F.jsx)("p", {
                        style: { color: "red" },
                        children: "90天内只可修改一次位置",
                      }),
                    ],
                  }),
                  (0, F.jsx)("div", {
                    className: tn().body,
                    children: f.map(function (e, t) {
                      return (0, F.jsx)(
                        ti,
                        {
                          options: e,
                          value: _[t],
                          onChange: function (e) {
                            return g(t, e);
                          },
                        },
                        t,
                      );
                    }),
                  }),
                  (0, F.jsxs)("div", {
                    className: tn().footer,
                    children: [
                      (0, F.jsx)("div", {
                        className: tn().cancelBtn,
                        onClick: function () {
                          u && u();
                        },
                        children: (0, F.jsx)("p", { children: "取消" }),
                      }),
                      (0, F.jsx)("div", {
                        className: tn().confirmBtn,
                        onClick: function () {
                          var e = to(_, l);
                          (console.log("result", e), c && c(e), u && u());
                        },
                        style: {
                          backgroundColor: null == d ? void 0 : d.bgColor,
                        },
                        children: (0, F.jsx)("p", {
                          style: { color: null == d ? void 0 : d.textColor },
                          children: void 0 === r ? "确定" : r,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          document.body,
        );
      }
      function to(e, t) {
        var n = (0, ep.Z)(e),
          r =
            t.find(function (e) {
              return e.value === n[0];
            }) || t[0];
        if (!r) return n;
        n[0] = r.value;
        var i = r.children || [],
          a =
            i.find(function (e) {
              return e.value === n[1];
            }) || i[0];
        return ((n[1] = (null == a ? void 0 : a.value) || ""), n);
      }
      function tl(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var ts = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return (e || []).map(function (e) {
            return {
              label: e.name,
              value: e.name,
              full_name: e.full_name,
              level: e.level,
              sort: e.sort,
              children: (e.items || []).map(function (e) {
                return {
                  label: e.name,
                  value: e.name,
                  full_name: e.full_name,
                  area_code: e.area_code,
                  level: e.level,
                  sort: e.sort,
                };
              }),
            };
          });
        },
        tc = function () {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            r = (0, _.Z)(n, 2),
            i = r[0],
            a = r[1],
            o = t.find(function (e) {
              return e.value === i;
            }),
            l =
              null == o
                ? void 0
                : null === (e = o.children) || void 0 === e
                  ? void 0
                  : e.find(function (e) {
                      return e.value === a;
                    });
          return o && l
            ? {
                province_name: o.name || o.value,
                province_full_name: o.full_name,
                city_name: l.name || l.value,
                city_full_name: l.full_name,
                city_id: l.area_code,
                area_code: l.area_code,
              }
            : null;
        },
        tu = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          if (!e) return null;
          var n = e.province_name || e.province,
            r = e.city_name || e.city;
          if (n && r) return [n, r];
          var i = e.city_id || e.area_code;
          if (!i) return null;
          var a,
            o = (function (e, t) {
              var n =
                ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
              if (!n) {
                if (
                  Array.isArray(e) ||
                  (n = (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return tl(e, t);
                      var n = Object.prototype.toString.call(e).slice(8, -1);
                      if (
                        ("Object" === n &&
                          e.constructor &&
                          (n = e.constructor.name),
                        "Map" === n || "Set" === n)
                      )
                        return Array.from(e);
                      if (
                        "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      )
                        return tl(e, t);
                    }
                  })(e))
                ) {
                  n && (e = n);
                  var r = 0,
                    i = function () {};
                  return {
                    s: i,
                    n: function () {
                      return r >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[r++] };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: i,
                  };
                }
                throw TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
              }
              var a,
                o = !0,
                l = !1;
              return {
                s: function () {
                  n = n.call(e);
                },
                n: function () {
                  var e = n.next();
                  return ((o = e.done), e);
                },
                e: function (e) {
                  ((l = !0), (a = e));
                },
                f: function () {
                  try {
                    o || null == n.return || n.return();
                  } finally {
                    if (l) throw a;
                  }
                },
              };
            })(t);
          try {
            for (o.s(); !(a = o.n()).done;) {
              var l,
                s = a.value,
                c =
                  null === (l = s.children) || void 0 === l
                    ? void 0
                    : l.find(function (e) {
                        return e.area_code === String(i);
                      });
              if (c) return [s.value, c.value];
            }
          } catch (e) {
            o.e(e);
          } finally {
            o.f();
          }
          return null;
        },
        td = [
          {
            name: "北京",
            full_name: "北京市",
            level: "1",
            sort: 1,
            items: [
              {
                name: "市辖区",
                full_name: "北京市市辖区",
                area_code: "110100",
                level: "2",
                sort: 1,
              },
            ],
          },
          {
            name: "广东省",
            full_name: "广东省",
            level: "1",
            sort: 19,
            items: [
              {
                name: "广州市",
                full_name: "广东省广州市",
                area_code: "440100",
                level: "2",
                sort: 1,
              },
              {
                name: "深圳市",
                full_name: "广东省深圳市",
                area_code: "440300",
                level: "2",
                sort: 2,
              },
              {
                name: "佛山市",
                full_name: "广东省佛山市",
                area_code: "440600",
                level: "2",
                sort: 3,
              },
            ],
          },
          {
            name: "新疆维吾尔自治区",
            full_name: "新疆维吾尔自治区",
            level: "1",
            sort: 31,
            items: [
              {
                name: "乌鲁木齐市",
                full_name: "新疆维吾尔自治区乌鲁木齐市",
                area_code: "650100",
                level: "2",
                sort: 1,
              },
              {
                name: "克拉玛依市",
                full_name: "新疆维吾尔自治区克拉玛依市",
                area_code: "650200",
                level: "2",
                sort: 2,
              },
            ],
          },
        ];
      function tA(e, t) {
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
      function t_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tA(Object(n), !0).forEach(function (t) {
                (0, v.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tA(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      ts(td);
      var tp = ["北京市", "北京市"],
        tv = function (e) {
          var t = function () {
            (arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              e.onCancel && e.onCancel(),
              e.onClose && e.onClose());
          };
          return (0, F.jsx)(
            e6,
            t_(
              t_({}, e),
              {},
              {
                position: "bottom",
                onClose: t,
                zIndex: 999,
                children: (0, F.jsx)(tg, t_(t_({}, e), {}, { onCancel: t })),
              },
            ),
          );
        },
        tf = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new Promise(function (t) {
            (e8(tv, e), t(!0));
          });
        },
        tg = function (e) {
          var t,
            n = e.onCancel,
            r = e.defaultArea,
            i = e.area,
            a = e.areaList,
            o = e.onAreaChange,
            l = e.bgColor,
            s = e.textColor,
            c = (0, h.useMemo)(
              function () {
                return ts(null != a && a.length ? a : td);
              },
              [a],
            ),
            u = (0, h.useMemo)(
              function () {
                return r || tu(i, c) || tp;
              },
              [r, i, c],
            ),
            d = (0, h.useState)(u),
            A = d[0],
            v = d[1],
            f = (0, h.useState)(!1),
            C = f[0],
            m = f[1],
            b =
              ((t = (0, p.Z)(
                g().mark(function e(t) {
                  var r, i, a;
                  return g().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((a = function () {
                              return (a = (0, p.Z)(
                                g().mark(function e() {
                                  var i, a, l, s, c;
                                  return g().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return ((e.next = 2), (0, M.KD)());
                                        case 2:
                                          return (
                                            (i = e.sent),
                                            (e.next = 5),
                                            e_.Z.set_rank_city({
                                              userid: i.userid || 0,
                                              token: i.token || "",
                                              city_id: r.city_id,
                                            })
                                          );
                                        case 5:
                                          if (
                                            ((a = e.sent),
                                            (l = (0, _.Z)(a, 2))[0],
                                            !(s = l[1]))
                                          ) {
                                            e.next = 13;
                                            break;
                                          }
                                          return (
                                            console.error(
                                              "handlePickerConfirm-err",
                                              s,
                                            ),
                                            x.FN.info(
                                              (null == s
                                                ? void 0
                                                : null === (c = s.data) ||
                                                    void 0 === c
                                                  ? void 0
                                                  : c.errmsg) ||
                                                "设置城市失败，请稍后重试",
                                            ),
                                            e.abrupt("return")
                                          );
                                        case 13:
                                          (v(t),
                                            o && o(r),
                                            x.FN.info("设置成功"),
                                            m(!1),
                                            n());
                                        case 18:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                }),
                              )).apply(this, arguments);
                            }),
                            (i = function () {
                              return a.apply(this, arguments);
                            }),
                            (null == t ? void 0 : t[1]) !==
                              (null == A ? void 0 : A[1]))
                          ) {
                            e.next = 5;
                            break;
                          }
                          return (m(!1), e.abrupt("return"));
                        case 5:
                          if (null != (r = tc(c, t)) && r.city_id) {
                            e.next = 9;
                            break;
                          }
                          return (
                            x.FN.info("请选择有效的城市"),
                            e.abrupt("return")
                          );
                        case 9:
                          eX.dialog({
                            title: "温馨提示",
                            content:
                              "90天内仅有一次选择地区的机会，是否确认提交",
                            confirmText: "确认提交",
                            cancelText: "返回修改",
                            confirm: function () {
                              i();
                            },
                          });
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function (e) {
                return t.apply(this, arguments);
              });
          return (0, F.jsxs)("div", {
            className: te().dialog_area,
            children: [
              (0, F.jsxs)("div", {
                className: te().area_top,
                children: [
                  (0, F.jsx)("h5", { children: "榜单设置" }),
                  (0, F.jsx)("p", {
                    style: { color: "red" },
                    children: "90天内只可修改一次位置",
                  }),
                ],
              }),
              (0, F.jsx)("div", {
                className: te().area_selected,
                children: (0, F.jsxs)("div", {
                  className: te().selected_item,
                  children: [
                    (0, F.jsx)("div", {
                      className: te().selected_item_title,
                      children: (0, F.jsx)("p", { children: A.join(" - ") }),
                    }),
                    (0, F.jsx)("div", {
                      className: te().selected_item_content,
                      onClick: function () {
                        return m(!0);
                      },
                      children: (0, F.jsx)("p", { children: "去修改" }),
                    }),
                  ],
                }),
              }),
              (0, F.jsx)("div", {
                className: te().area_bottom,
                children: (0, F.jsx)("div", {
                  className: te().close_btn,
                  onClick: n,
                  children: (0, F.jsx)("p", { children: "知道了" }),
                }),
              }),
              (0, F.jsx)(ta, {
                title: "选择地区",
                visible: C,
                value: A,
                columns: c,
                zIndex: 10002,
                onConfirm: b,
                onClose: function () {
                  return m(!1);
                },
                style: { bgColor: l, textColor: s },
              }),
            ],
          });
        };
      function th(e, t) {
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
      function tC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? th(Object(n), !0).forEach(function (t) {
                (0, v.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : th(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var tm = function (e) {
          var t,
            n,
            r,
            i = e.rankData,
            a = e.rankRuleUrl,
            o = (null == e ? void 0 : e.defaultLevelRankType) || L.M8,
            l = E().myInfo,
            s = (0, y.Yu)(),
            c = s.bgColor,
            u = s.textColor,
            d = (0, h.useState)(o),
            A = d[0],
            v = d[1],
            f = (0, h.useState)((null == i ? void 0 : i.list) || []),
            C = f[0],
            m = f[1],
            b = (0, h.useState)(!i || (null == i ? void 0 : i.total) > L.Qb),
            w = b[0],
            k = b[1],
            I = (0, h.useState)(null == i ? void 0 : i.list),
            j = I[0],
            N = I[1],
            O = (0, h.useState)((null == i ? void 0 : i.area) || null),
            D = O[0],
            R = O[1],
            P = (0, h.useState)((null == i ? void 0 : i.self_info) || []),
            U = P[0],
            S = P[1],
            B = (0, h.useState)((null == i ? void 0 : i.period_end_time) || 0),
            Y = B[0],
            V = B[1],
            Q = (0, h.useState)([]),
            H = Q[0],
            T = Q[1],
            Z = (0, h.useState)(!0),
            K = Z[0],
            G = Z[1],
            W = (0, h.useRef)(null),
            z = (0, h.useRef)(!0),
            J = (0, h.useRef)(A),
            q = (0, h.useRef)(!1),
            $ = (0, h.useState)(0),
            et = $[0],
            en = $[1],
            er = (0, h.useState)(!1),
            ea = er[0],
            el = er[1];
          (0, h.useMemo)(
            function () {
              if (null != l && l.timestamp) {
                var e = (null == l ? void 0 : l.timestamp) * 1e3,
                  t = new Date(e).getHours() + 1;
                return "".concat(t, "点");
              }
              return "";
            },
            [null == l ? void 0 : l.timestamp],
          );
          var es = (0, h.useMemo)(
              function () {
                return !(null != D && D.next_updatetime);
              },
              [null == D ? void 0 : D.next_updatetime],
            ),
            ec = (0, h.useMemo)(
              function () {
                return L.Ok.map(function (e) {
                  return 3 === e.value || 4 === e.value
                    ? tC(tC({}, e), {}, { name: (0, L.nL)(e.value, D) })
                    : e;
                });
              },
              [
                null == D ? void 0 : D.province_name,
                null == D ? void 0 : D.city_name,
              ],
            );
          (0, h.useLayoutEffect)(
            function () {
              J.current = A;
            },
            [A],
          );
          var eu = (0, h.useCallback)(function () {
              var e = W.current;
              null != e && e.offsetHeight && (en(e.offsetHeight), el(!0));
            }, []),
            ep = (0, h.useCallback)(function () {
              var e = document.getElementById("scrollerContainer"),
                t = W.current,
                n = document.getElementById("tab-list-wrap");
              if (e && t && n && "fixed" === n.style.position) {
                var r = t.getBoundingClientRect(),
                  i = n.getBoundingClientRect(),
                  a = e.scrollTop + (r.top - i.bottom),
                  o = e.scrollHeight - e.clientHeight;
                ((e.scrollTop = Math.min(Math.max(0, a), o)),
                  e.dispatchEvent(new Event("scroll")));
              }
            }, []),
            ev = (0, h.useCallback)(function (e) {
              e === J.current && (el(!1), en(0));
            }, []),
            ef = function (e) {
              var t, n;
              e !== A &&
                (eu(),
                (J.current = e),
                v(e),
                ee.Z.fire("1135204", {
                  svar1:
                    null == l
                      ? void 0
                      : null === (t = l.grade) || void 0 === t
                        ? void 0
                        : t.p_grade,
                  svar2: (0, X.j)(null == l ? void 0 : l.vip),
                  svar3: "等级荣誉榜",
                  svar4:
                    null ===
                      (n = ec.find(function (t) {
                        return t.value === e;
                      })) || void 0 === n
                      ? void 0
                      : n.name,
                }));
            };
          ((0, h.useLayoutEffect)(
            function () {
              if (z.current) {
                z.current = !1;
                return;
              }
              ep();
            },
            [A, ep],
          ),
            (0, h.useLayoutEffect)(
              function () {
                if (ea) {
                  q.current = !0;
                  return;
                }
                q.current && ((q.current = !1), ep());
              },
              [ea, ep],
            ),
            (0, h.useEffect)(function () {
              return (
                eg(i),
                eo().on("rank_city_change", function (e) {
                  (G(!1), el(!1), en(0), eg());
                }),
                function () {
                  eo().off("rank_city_change");
                }
              );
            }, []));
          var eg =
              ((t = (0, p.Z)(
                g().mark(function e(t) {
                  var n, r, i, a, o, l, s, c, u, d, p, v, f, h, C, b, x, w, y;
                  return g().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (N(!1),
                            (u = { rank_type: A, page: 1, pagesize: L.Qb }),
                            (v = t),
                            t)
                          ) {
                            e.next = 11;
                            break;
                          }
                          return ((e.next = 6), e_.Z.get_listen_level_rank(u));
                        case 6:
                          ((f = e.sent),
                            (d = (h = (0, _.Z)(f, 2))[0]),
                            (p = h[1]),
                            (v = null == d ? void 0 : d.data));
                        case 11:
                          if ((G(!0), N(!0), !p)) {
                            e.next = 17;
                            break;
                          }
                          return (
                            console.error("initList-err", p),
                            null !== (C = p) &&
                            void 0 !== C &&
                            C.data &&
                            (null === (b = p) || void 0 === b
                              ? void 0
                              : null === (x = b.data) || void 0 === x
                                ? void 0
                                : x.errmsg) !== void 0
                              ? ee.Z.statAPMN(113948, {
                                  state: 0,
                                  position: "03",
                                  te: "E2",
                                  hash: JSON.stringify({
                                    res:
                                      null === (w = p) || void 0 === w
                                        ? void 0
                                        : w.data,
                                    params: u,
                                  }),
                                })
                              : ee.Z.statAPMN(
                                  113948,
                                  tC(
                                    { state: 0 },
                                    eq.getAPMParamsFromErr(p, "04"),
                                  ),
                                ),
                            e.abrupt("return")
                          );
                        case 17:
                          (console.log("initList-data", v),
                            m(
                              (y =
                                (null === (n = v) || void 0 === n
                                  ? void 0
                                  : n.list) || []),
                            ),
                            k(
                              (null == y ? void 0 : y.length) <
                                (null === (r = v) || void 0 === r
                                  ? void 0
                                  : r.total),
                            ),
                            R(
                              null === (i = v) || void 0 === i
                                ? void 0
                                : i.area,
                            ),
                            S(
                              null === (a = v) || void 0 === a
                                ? void 0
                                : a.self_info,
                            ),
                            console.log(
                              null === (o = v) || void 0 === o
                                ? void 0
                                : o.period_end_time,
                              0xb34c7fb0360,
                            ),
                            V(
                              null === (l = v) || void 0 === l
                                ? void 0
                                : l.period_end_time,
                            ),
                            (null !== (s = v) &&
                              void 0 !== s &&
                              null !== (c = s.area) &&
                              void 0 !== c &&
                              c.next_updatetime) ||
                              eh(),
                            ee.Z.statAPMN(113948, {
                              state: 1,
                              position: "02",
                            }));
                        case 27:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function (e) {
                return t.apply(this, arguments);
              }),
            eh =
              ((n = (0, p.Z)(
                g().mark(function e(t) {
                  var n, r, i, a, o, l, s, c, u, d;
                  return g().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return ((e.next = 2), (0, M.KD)());
                        case 2:
                          return (
                            (i = {
                              userid: (r = e.sent).userid || 0,
                              token: r.token || "",
                            }),
                            (e.next = 6),
                            e_.Z.get_rank_citylist(i)
                          );
                        case 6:
                          if (
                            ((a = e.sent),
                            (l = (o = (0, _.Z)(a, 2))[0]),
                            !(s = o[1]))
                          ) {
                            e.next = 15;
                            break;
                          }
                          return (
                            console.error("getAreaList-err", s),
                            t &&
                              x.FN.info(
                                (null == s
                                  ? void 0
                                  : null === (u = s.data) || void 0 === u
                                    ? void 0
                                    : u.errmsg) ||
                                  "获取城市列表失败，请稍后重试",
                              ),
                            null != s &&
                            s.data &&
                            (null == s
                              ? void 0
                              : null === (c = s.data) || void 0 === c
                                ? void 0
                                : c.errmsg) !== void 0
                              ? ee.Z.statAPMN(113948, {
                                  state: 0,
                                  position: "05",
                                  te: "E2",
                                  hash: JSON.stringify({
                                    res: null == s ? void 0 : s.data,
                                    params: i,
                                  }),
                                })
                              : ee.Z.statAPMN(
                                  113948,
                                  tC(
                                    { state: 0 },
                                    eq.getAPMParamsFromErr(s, "06"),
                                  ),
                                ),
                            e.abrupt("return", [])
                          );
                        case 15:
                          return (
                            T(
                              (d =
                                (null == l
                                  ? void 0
                                  : null === (n = l.data) || void 0 === n
                                    ? void 0
                                    : n.items) || []),
                            ),
                            ee.Z.statAPMN(113948, { state: 1, position: "03" }),
                            e.abrupt("return", d)
                          );
                        case 19:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function (e) {
                return n.apply(this, arguments);
              }),
            eC =
              ((r = (0, p.Z)(
                g().mark(function e() {
                  var t, n, r;
                  return g().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            null !== (t = r = H) &&
                            void 0 !== t &&
                            t.length
                          ) {
                            e.next = 5;
                            break;
                          }
                          return ((e.next = 4), eh(!0));
                        case 4:
                          r = e.sent;
                        case 5:
                          if (null !== (n = r) && void 0 !== n && n.length) {
                            e.next = 7;
                            break;
                          }
                          return e.abrupt("return");
                        case 7:
                          tf({
                            areaList: r,
                            area: D,
                            bgColor: c,
                            textColor: u,
                            onAreaChange: function () {
                              (eg(), eo().emit("rank_city_change"));
                            },
                          });
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function () {
                return r.apply(this, arguments);
              }),
            em = function () {
              (0, M.Yo)(a, null, { isFullScreen: 0 });
            };
          return (0, F.jsxs)("div", {
            className: ed().listen_rank_wrap,
            children: [
              (0, F.jsxs)("div", {
                id: "tab-list-wrap",
                className: ed().tab_list_wrap_outer,
                children: [
                  (0, F.jsx)("div", {
                    className: ed().tab_list_wrap,
                    children: ec.map(function (e, t) {
                      return (0, F.jsx)(
                        "div",
                        {
                          className: ei()(
                            ed().tab_item,
                            A === e.value && ed().active,
                          ),
                          onClick: function () {
                            return ef(e.value);
                          },
                          children: e.name,
                        },
                        e.value,
                      );
                    }),
                  }),
                  es
                    ? (0, F.jsx)("div", {
                        className: ed().icon_position,
                        onClick: function () {
                          return eC();
                        },
                        children: (0, F.jsx)(eA.Z, {
                          name: "position",
                          color: "#B8B8B8",
                        }),
                      })
                    : (0, F.jsx)("div", {
                        className: ed().icon_position,
                        onClick: function () {
                          return em();
                        },
                        children: (0, F.jsx)(eA.Z, {
                          name: "rule",
                          color: "#B8B8B8",
                        }),
                      }),
                ],
              }),
              K &&
                (0, F.jsx)("div", {
                  ref: W,
                  className: ei()(
                    ed().tab_panel_wrap,
                    ea && ed().tab_panel_wrap_locked,
                  ),
                  style: ea && et > 0 ? { height: et } : void 0,
                  children: ec.map(function (t) {
                    return (0, F.jsx)(
                      "div",
                      {
                        className: ei()(
                          ed().tab_page_slot,
                          A === t.value && ed().tab_page_slot_active,
                        ),
                        children: j
                          ? (0, F.jsx)(
                              e0,
                              tC(
                                tC({}, e),
                                {},
                                {
                                  activeTab: A,
                                  tabName: t.name,
                                  initList: t.value === o ? C : [],
                                  initHasMore: t.value !== o || w,
                                  tab: t.value,
                                  finishLoadFirst: j,
                                  initArea: D,
                                  initSelfInfo: U,
                                  onContentReady: ev,
                                  initPeriodEndTime: Y,
                                },
                              ),
                            )
                          : (0, F.jsx)("div", {
                              className: ed().tab_page_slot_loading,
                              children: "加载中...",
                            }),
                      },
                      t.value,
                    );
                  }),
                }),
            ],
          });
        },
        tb = n(6757);
      function tx(e, t) {
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
      function tw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tx(Object(n), !0).forEach(function (t) {
                (0, v.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tx(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var ty = null,
        tk = function (e) {
          if (ty) console.log("getABTData已有数据");
          else {
            var t;
            ty = new Promise(
              ((t = (0, p.Z)(
                g().mark(function t(n, r) {
                  var i;
                  return g().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return ((t.next = 2), (0, M.KD)());
                        case 2:
                          ((i = t.sent),
                            (0, tb.ZP)({
                              headers: [{ "tmeab-olexp": "1,13,939" }],
                              method: "get",
                              sign: "h5",
                              params: tw(
                                tw({}, e),
                                {},
                                {
                                  appid: i.appid,
                                  mid: i.mid,
                                  dfid: i.dfid,
                                  userid: i.userid,
                                  token: i.token,
                                },
                              ),
                              baseURL: "https://els.abt.kugou.com",
                              url: "/v1/tmeab",
                              isGateway: !0,
                            })
                              .then(function (e) {
                                var t,
                                  r = (null == e ? void 0 : e.data) || {};
                                (1 === r.status &&
                                  r.data &&
                                  r.data.TmeabConfigs &&
                                  (t =
                                    "string" == typeof r.data.TmeabConfigs
                                      ? JSON.parse(r.data.TmeabConfigs)
                                      : r.data.TmeabConfigs),
                                  n(t));
                              })
                              .catch(function (e) {
                                (r(e), (ty = null));
                              }));
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              )),
              function (e, n) {
                return t.apply(this, arguments);
              }),
            );
          }
          return ty;
        },
        tI = function (e) {
          var t;
          return new Promise(
            ((t = (0, p.Z)(
              g().mark(function t(n, r) {
                var i;
                return g().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return ((t.next = 2), (0, M.KD)());
                      case 2:
                        ((i = t.sent),
                          tk({
                            plat: M.gn ? 2 : 0,
                            userid: i.kugouID,
                            token: i.token,
                          })
                            .then(function (t) {
                              (console.log("TmeabConfigs2", t, t[e]),
                                n(t[e] || {}));
                            })
                            .catch(function (e) {
                              n({});
                            }));
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            )),
            function (e, n) {
              return t.apply(this, arguments);
            }),
          );
        },
        tj = n(74853),
        tN = n.n(tj),
        tO = n(11248),
        tE = n.n(tO),
        tD = n(17705),
        tR = n.n(tD);
      function tP(e, t) {
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
      var tU = {},
        tS = (0, h.forwardRef)(function () {
          var e,
            t,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                    lottieName: "",
                    show: !0,
                    loop: !0,
                    extendsParams: {},
                    reverseMinFrame: 0,
                    animationData: null,
                    renderer: "svg",
                    preloadWhileHidden: !1,
                    restartOnShow: !1,
                  },
            i = arguments.length > 1 ? arguments[1] : void 0,
            a = !tU[r.lottieName] && r.fadeIn,
            o = (0, h.useState)(!a),
            l = o[0],
            s = o[1],
            c = (0, h.useRef)(),
            u = (0, h.useRef)(null),
            d = (0, h.useRef)(null),
            A = (0, h.useRef)(null),
            _ = (0, h.useRef)(0),
            p = (0, h.useRef)(!1),
            f = (0, h.useRef)(r.show),
            g = (0, h.useRef)(r.onNearComplete);
          ((f.current = r.show), (g.current = r.onNearComplete));
          var C = null !== (e = r.reverseMinFrame) && void 0 !== e ? e : 0,
            m = null !== (t = r.nearCompleteRatio) && void 0 !== t ? t : 0.85,
            b = function () {
              A.current && (clearTimeout(A.current), (A.current = null));
            },
            x = function (e) {
              (b(),
                (_.current = e.currentFrame),
                e.play(),
                (A.current = setTimeout(function () {
                  "function" == typeof r.onError && r.onError(r.lottieName);
                }, 3e3)));
            };
          ((0, h.useEffect)(function () {
            var e = u.current;
            if (e) {
              var t = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? tP(Object(n), !0).forEach(function (t) {
                          (0, v.Z)(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n),
                          )
                        : tP(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t),
                            );
                          });
                  }
                  return e;
                })(
                  {
                    container: e,
                    renderer: r.renderer || "svg",
                    loop: !!r.loop,
                    autoplay: !1,
                  },
                  (null == r ? void 0 : r.extendsParams) || {},
                ),
                i = function (e) {
                  if (((t.animationData = e), !c.current)) {
                    c.current = tE().loadAnimation(t);
                    var n = c.current,
                      i = function () {
                        (n.goToAndStop(0, !0),
                          "function" == typeof r.onReady &&
                            r.onReady(r.lottieName));
                      };
                    (n.isLoaded ? i() : n.addEventListener("DOMLoaded", i),
                      n.addEventListener("enterFrame", function () {
                        if (
                          (A.current && n.currentFrame !== _.current && b(),
                          !p.current && f.current && g.current)
                        ) {
                          var e = Math.max((n.totalFrames || 1) - 1, 1);
                          n.currentFrame >= e * m &&
                            ((p.current = !0), g.current(r.lottieName));
                        }
                      }),
                      (r.show || r.preloadWhileHidden) &&
                        (x(n), r.show && s(!0)),
                      n.addEventListener("complete", function () {
                        "function" == typeof r.onComplete &&
                          r.onComplete(r.lottieName);
                      }));
                  }
                };
              return (
                r.animationData
                  ? i(r.animationData)
                  : tU[r.lottieName]
                    ? i(tU[r.lottieName])
                    : n(97120)("./".concat(r.lottieName, ".json"))
                        .then(function (e) {
                          ((tU[r.lottieName] = e.default), i(e.default));
                        })
                        .catch(function () {
                          "function" == typeof r.onError &&
                            r.onError(r.lottieName);
                        }),
                function () {
                  try {
                    b();
                    var e,
                      t = c.current;
                    (t &&
                      d.current &&
                      (t.removeEventListener("enterFrame", d.current),
                      (d.current = null)),
                      (null == c
                        ? void 0
                        : null === (e = c.current) || void 0 === e
                          ? void 0
                          : e.destroy) && c.current.destroy(),
                      (c.current = null));
                  } catch (e) {
                    console.log(e);
                  }
                }
              );
            }
          }, []),
            (0, h.useEffect)(
              function () {
                var e = c.current;
                e &&
                  (r.show
                    ? (r.restartOnShow &&
                        (e.goToAndStop(0, !0), (p.current = !1)),
                      x(e),
                      s(!0))
                    : r.preloadWhileHidden || (b(), e.pause()));
              },
              [r.show, r.preloadWhileHidden, r.restartOnShow],
            ));
          var w = function () {
            var e = c.current;
            if (e) {
              var t = Math.max(0, (e.totalFrames || 1) - 1);
              if (
                (d.current &&
                  (e.removeEventListener("enterFrame", d.current),
                  (d.current = null)),
                C > 0)
              ) {
                var n = function t() {
                  -1 === e.playDirection &&
                    e.currentFrame <= C + 1e-6 &&
                    (e.removeEventListener("enterFrame", t),
                    (d.current = null),
                    e.pause(),
                    e.goToAndStop(C, !0));
                };
                ((d.current = n), e.addEventListener("enterFrame", n));
              }
              (e.setDirection(-1),
                e.currentFrame <= C && e.goToAndStop(t, !0),
                e.play());
            }
          };
          return (
            (0, h.useImperativeHandle)(i, function () {
              return { handleReversePlay: w };
            }),
            (0, F.jsx)("div", {
              ref: u,
              className: ""
                .concat(tR().lottieBaseWrap, " ")
                .concat(a ? tR().lottieWrapFadeIn : ""),
              style: { width: "100%", opacity: !a || l ? 1 : 0 },
            })
          );
        }),
        tB = n(95394),
        tL = n(4560),
        tY = n.n(tL),
        tV = n(61120),
        tM = n.n(tV),
        tQ = n(1093);
      n(56685);
      var tH = n(43425),
        tT = (function () {
          function e(t) {
            var n = t.ref,
              r = t.slidePrev,
              i = t.slideNext;
            ((0, s.Z)(this, e),
              (this.ref = n),
              (this.touchX = []),
              (this.touchY = []),
              (this.callback = { slideNext: i, slidePrev: r }),
              this.bindTouch());
          }
          return (
            (0, c.Z)(
              e,
              [
                {
                  key: "bindTouch",
                  value: function () {
                    var t = this,
                      n = this.ref;
                    n &&
                      (n.addEventListener("touchstart", function (e) {
                        ((t.touchX = [e.touches[0].pageX]),
                          (t.touchY = [e.touches[0].pageY]));
                      }),
                      n.addEventListener("touchmove", function (e) {
                        (t.touchX.push(e.touches[0].pageX),
                          t.touchY.push(e.touches[0].pageY));
                      }),
                      n.addEventListener("touchend", function (n) {
                        if (
                          !(
                            t.touchX.length <= 0 ||
                            Math.abs(t.touchY[0] - t.touchY[1]) >
                              Math.abs(t.touchX[0] - t.touchX[1])
                          ) &&
                          ((t.endx = n.changedTouches[0].pageX),
                          (t.endy = n.changedTouches[0].pageY),
                          !(50 > Math.abs(t.touchX[0] - t.endx)))
                        ) {
                          var r,
                            i,
                            a = e.getDirection(
                              t.touchX[0],
                              t.touchY[0],
                              t.endx,
                              t.endy,
                            );
                          a === e.TOUCH_LEFT
                            ? (null === (r = t.callback) || void 0 === r
                                ? void 0
                                : r.slideNext) && t.callback.slideNext()
                            : a === e.TOUCH_RIGHT &&
                              (null === (i = t.callback) || void 0 === i
                                ? void 0
                                : i.slidePrev) &&
                              t.callback.slidePrev();
                        }
                      }));
                  },
                },
              ],
              [
                {
                  key: "getAngle",
                  value: function (e, t) {
                    return (180 * Math.atan2(t, e)) / Math.PI;
                  },
                },
                {
                  key: "getDirection",
                  value: function (t, n, r, i) {
                    var a = r - t,
                      o = i - n,
                      l = e.TOUCH_NO_MOVE;
                    if (2 > Math.abs(a) && 2 > Math.abs(o)) return l;
                    var s = e.getAngle(a, o);
                    return (
                      s >= -135 && s <= -45
                        ? (l = e.TOUCH_UP)
                        : s > 45 && s < 135
                          ? (l = e.TOUCH_DOWN)
                          : (s >= 135 && s <= 180) || (s >= -180 && s < -135)
                            ? (l = e.TOUCH_LEFT)
                            : s >= -45 && s <= 45 && (l = e.TOUCH_RIGHT),
                      l
                    );
                  },
                },
              ],
            ),
            e
          );
        })();
      ((0, v.Z)(tT, "isLowerVer", M.gn ? (0, M.CY)(12) : (0, M.Xf)(7)),
        (0, v.Z)(tT, "TOUCH_UP", 1),
        (0, v.Z)(tT, "TOUCH_DOWN", 2),
        (0, v.Z)(tT, "TOUCH_LEFT", 3),
        (0, v.Z)(tT, "TOUCH_RIGHT", 4),
        (0, v.Z)(tT, "TOUCH_NO_MOVE", 5));
      var tZ = n(15719),
        tF = n.n(tZ),
        tK = n(53566),
        tG = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/icon-share-medal-logo.1bd4ca35.png",
          height: 52,
          width: 343,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAH0lEQVR4nGNkYGCIB+LbQPwBiNmA+AUQMwGxFBD/AQBB1gQyfSLEnwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 1,
        },
        tW = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/bg-other-poster-light.b017b8a7.png",
          height: 852,
          width: 540,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAQAAACb+P2wAAAAUUlEQVR42g3DsQnCQAAF0L9GCslhdVipCCo2KcReKxcQF0iabJMM+sg9eBEvq0GimC0mu3j4G/3c4+bj6+0aJ4Nne4zq7NLWKKpDW6LT2+t1G8O1MR2KivpdAAAAAElFTkSuQmCC",
          blurWidth: 5,
          blurHeight: 8,
        },
        tz = function (e) {
          var t,
            n = e.data,
            r = e.qrcodeLink,
            i = n || {},
            a = i.medal,
            o = i.grade,
            l = i.timestamp,
            s = i.user,
            c = (0, h.useMemo)(
              function () {
                if (!(null != o && o.reg_time)) return "0天";
                var e = Math.floor(
                  ((1e3 * l || new Date().getTime()) -
                    new Date(
                      null == o ? void 0 : o.reg_time.replace(/-/g, "/"),
                    ).getTime()) /
                    864e5,
                );
                if (e >= 360) {
                  var t = Math.floor(e / 360),
                    n = Math.floor((e - 360 * t) / 30);
                  return n > 0
                    ? "".concat(t, "年").concat(n, "个月")
                    : "".concat(t, "年");
                }
                return e >= 30
                  ? "".concat(Math.floor(e / 30), "个月")
                  : e >= 0
                    ? "".concat(e, "天")
                    : "0天";
              },
              [null == o ? void 0 : o.reg_time],
            );
          return (
            console.log("myMusicAge", c),
            (0, F.jsxs)("div", {
              className: tF().wrap,
              style: {
                background: "url("
                  .concat(
                    tW.src,
                    ") no-repeat center / 100% 100%, linear-gradient(180deg, ",
                  )
                  .concat(
                    null == a ? void 0 : a.color,
                    " 16.21%, #FFF 86.55%)",
                  ),
              },
              children: [
                (0, F.jsx)("div", {
                  className: tF().box_wrap,
                  children: (0, F.jsx)("div", {
                    className: tF().medal,
                    children: (0, F.jsx)(J, {
                      width: 320,
                      height: 320,
                      data: a,
                    }),
                  }),
                }),
                (0, F.jsxs)("div", {
                  className: tF().text_wrap,
                  children: [
                    (0, F.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "40",
                      height: "81",
                      viewBox: "0 0 40 81",
                      fill: "none",
                      children: (0, F.jsx)("path", {
                        d: "M0.0385474 33.2418C0.0162148 33.4775 -0.0175562 33.6483 0.0110446 33.8105C0.264309 36.1527 1.00186 38.3426 2.09445 40.372C2.56853 41.2488 3.09354 42.0522 3.71151 42.8393C4.45813 43.7995 5.43645 44.456 6.65916 44.5057C6.79991 44.5176 6.93409 44.5759 7.04222 44.6723C7.31882 45.1539 7.68837 45.6192 7.77908 46.1336C8.38235 49.0114 9.1291 51.797 10.2782 54.5093C10.3264 54.6011 10.3435 54.6984 10.2735 54.8446C10.1829 54.6933 10.0613 54.5475 9.99685 54.363C9.30187 52.5956 8.43201 50.9236 7.04271 49.5797C5.35014 47.9524 3.44516 46.764 1.1071 46.3806C1.03941 46.3591 0.977444 46.37 0.909759 46.3485C0.878778 46.354 0.847792 46.3594 0.729581 46.4137C0.786375 46.7358 0.817906 47.0958 0.967237 47.3992C2.11717 50.1161 3.71356 52.4532 6.03624 54.1988C7.10472 55.0043 8.29699 55.4249 9.67055 55.0489C9.79448 55.027 10.0228 55.0536 10.1019 55.14C10.4658 55.5729 10.8916 55.9947 11.1739 56.5088C12.5849 59.2442 14.1625 61.8499 16.0549 64.2351C16.1764 64.381 16.2719 64.56 16.3935 64.7059C16.3372 64.7492 16.3119 64.7871 16.2557 64.8305C16.0607 64.6307 15.8413 64.4735 15.7084 64.2628C14.7386 62.9429 13.6718 61.7715 12.2741 60.9237C10.2647 59.6868 8.1321 59.2003 5.81189 59.6428C5.19223 59.7521 5.17228 59.8201 5.47176 60.4315C6.00543 61.4652 6.76407 62.3253 7.60685 63.1061C8.78796 64.1881 10.0514 65.1934 11.6092 65.6809C13.032 66.1277 14.4463 66.1769 15.7487 65.2162C15.8363 65.1697 15.9545 65.1154 16.0222 65.1369C16.4814 65.3856 17.0477 65.5175 17.3695 65.8932C19.2051 67.9564 21.1984 69.827 23.4341 71.4541C23.5162 71.5094 23.5925 71.5736 23.6618 71.6457C23.6985 71.6727 23.6732 71.7106 23.7439 71.9299C23.4232 71.7547 23.1838 71.6655 22.9946 71.4981C21.7316 70.4951 20.3453 69.7122 18.74 69.4983C16.3222 69.1935 14.1346 69.8444 12.103 71.199C12.0463 71.24 12.021 71.2779 11.889 71.435C12.2667 71.765 12.5885 72.1408 12.9857 72.4004C15.4661 73.9533 18.1003 74.748 20.9728 74.177C21.8036 74.0033 22.5458 73.5319 23.0722 72.8439C23.5391 72.2312 24.215 72.0785 24.9333 72.5157C26.8412 73.7269 28.8797 74.693 31.0038 75.3924L32.4258 75.8346C32.4066 75.9072 32.4123 75.9397 32.3924 76.0077C32.1645 75.9834 31.9419 75.9892 31.7698 75.9192C30.6063 75.4936 29.4312 75.1703 28.1925 75.2239C25.657 75.3389 23.6256 76.5261 21.8649 78.3299C21.569 78.6449 21.2792 78.9946 20.908 79.4256C21.4295 79.6658 21.8271 79.9278 22.2944 80.0413C24.8079 80.6948 27.2946 80.6529 29.684 79.5029C30.8298 78.9353 31.7391 78.1131 32.1567 76.8449C32.3 76.3895 33.1531 75.9739 33.6828 76.0788C35.4464 76.4655 37.2629 76.6087 39.0508 76.5897C39.2119 76.5972 39.3668 76.5699 39.5527 76.5371C39.5297 76.0442 39.298 75.8174 38.8532 75.8313C37.0582 75.8426 35.2644 75.6469 33.5043 75.2478C32.6057 75.0431 32.1741 74.5887 32.1334 73.633C32.0214 71.7294 31.3688 70.0215 30.2939 68.4549C29.1496 66.812 27.5572 65.5655 25.7301 64.8826C25.5947 64.8395 25.4288 64.8043 25.1894 64.7151C25.2825 65.0618 25.3588 65.3136 25.4352 65.5653C26.1331 67.5305 26.6761 69.5229 27.6728 71.3709C28.4292 72.7619 29.4975 73.7347 30.9623 74.2385C31.1646 74.3142 31.3768 74.3551 31.5906 74.3595C32.0244 74.283 32.126 74.4969 32.2053 74.9464C32.0393 74.9112 31.9097 74.9006 31.7743 74.8575C29.0718 74.0841 26.501 72.8581 24.1631 71.2276C23.54 70.7736 23.4965 69.9832 23.6112 69.3657C24.1014 66.5292 23.4758 63.8871 22.1437 61.4054C21.4695 60.1314 20.5416 59.0359 19.4498 58.0982C19.3401 58.0196 19.2357 57.9711 19.0526 57.8386C19.09 58.5941 19.116 59.2848 19.1676 59.9399C19.2682 61.2482 19.34 62.5616 19.5048 63.8586C19.7236 65.643 20.1593 67.3892 21.4738 68.6841C21.8651 69.0786 22.3472 69.4572 22.8687 69.6973C23.2938 69.921 23.4011 70.1673 23.3657 70.704C22.8045 70.239 22.2915 69.866 21.8037 69.455C20.0022 67.9473 18.3414 66.3192 16.9225 64.4453C16.5053 63.8905 16.5608 63.1186 16.8109 62.544C18.6111 58.2461 17.8406 54.239 15.4981 50.3753C15.45 50.2834 15.3766 50.2295 15.3288 50.1399C15.3231 50.1075 15.2612 50.1184 15.1935 50.0969C14.7175 52.8329 13.907 55.4965 14.1466 58.3046C14.2867 60.005 14.8124 61.5369 16.135 62.6967C16.3238 62.8617 16.324 63.2248 16.4003 63.4766C16.3441 63.5199 16.2821 63.5309 16.2568 63.5688L15.512 62.6058C13.7891 60.1433 12.3161 57.5025 11.1175 54.7268C11.0641 54.6048 11.0049 54.4504 11.0187 54.3476C11.215 53.6488 11.2762 52.9093 11.8786 52.3396C12.9922 51.2138 13.4612 49.7071 13.8255 48.1496C14.4053 45.627 14.1039 43.193 13.3245 40.7787C13.3131 40.7138 13.2729 40.654 13.2286 40.5973C13.1724 40.6406 13.1104 40.6516 13.1157 40.6817C12.2839 42.4865 11.3477 44.2428 10.5871 46.102C9.84246 47.858 9.55801 49.7001 10.1768 51.5788C10.3066 51.9525 10.4735 52.3556 10.718 52.6422C11.1075 53.0394 10.9417 53.3673 10.7146 53.9043C10.3473 52.9082 9.9715 52.0451 9.72002 51.1624C9.10027 48.9159 8.5796 46.6877 8.02223 44.4326C7.91198 43.9885 8.37549 42.8125 8.72441 42.6172C10.5419 41.6659 11.5263 40.0015 12.2174 38.1235C12.9552 36.1346 13.103 34.0872 12.8353 32.0127L12.7728 31.6582C12.7671 31.6258 12.7304 31.5988 12.6823 31.5069C12.4744 31.7777 12.2295 32.0192 12.0213 32.2877C11.0741 33.451 10.0924 34.587 9.21772 35.7996C8.16847 37.2772 7.63282 38.9629 7.8378 40.8501C7.8918 41.3376 8.00818 41.8164 8.14901 42.2527C8.32163 42.6882 8.13866 42.9188 7.82366 43.3064C7.73295 42.792 7.63414 42.4128 7.59689 42.0204C7.27819 39.1258 7.08913 36.2419 7.24882 33.3299C7.26321 32.9321 7.40702 32.5534 7.65658 32.2562C7.90613 31.959 8.24654 31.761 8.62173 31.6949C10.3533 31.3561 11.5288 30.2194 12.5023 28.8555C13.6858 27.2205 14.2163 25.3374 14.4725 23.3354C14.4668 23.3029 14.4841 23.233 14.4727 23.1681C14.4674 23.138 14.4307 23.111 14.4254 23.0809C14.3944 23.0863 14.3573 23.0571 14.3263 23.0625C12.8398 24.0533 11.2781 24.9929 9.83754 26.076C8.57405 27.0634 7.75329 28.4003 7.70135 30.0987C7.7019 30.4641 7.70245 30.8296 7.80125 31.2088C7.90578 31.6204 7.7175 31.8209 7.37431 32.0486C7.35143 31.9189 7.29757 31.7946 7.31179 31.6941C7.5504 28.7066 8.05723 25.7536 8.82563 22.8736C8.92334 22.5219 9.77356 21.9085 10.1395 21.9778C12.6324 22.3338 14.3944 21.0937 15.8963 19.2711C16.6438 18.3451 17.215 17.2773 17.5799 16.1239C17.239 16.184 16.9235 16.2061 16.6504 16.2878C15.1215 16.6887 13.5591 16.8997 12.1683 17.7088C10.744 18.5214 9.82996 19.6789 9.75054 21.4156C9.73114 21.8491 9.4523 21.8982 9.09766 22.0611C9.15098 21.82 9.15949 21.687 9.19857 21.5464C9.87143 19.2374 10.7396 16.9983 11.793 14.8553C12.0097 14.454 12.8062 14.0794 13.2123 14.2084C15.9624 15.1165 18.1552 14.1325 19.9967 12.0493C20.4808 11.5339 20.8124 10.8781 21.2175 10.2763C21.175 10.2168 21.1388 10.1922 21.0959 10.1304C20.8427 10.144 20.5529 10.1306 20.2989 10.1396C18.9248 10.1501 17.5278 10.0309 16.1931 10.4335C14.6137 10.9103 13.3583 11.7624 12.9381 13.5591C12.8457 13.941 12.8147 13.9465 12.2089 13.9529C12.6729 13.1424 13.0498 12.3807 13.5328 11.6647C14.2418 10.6127 14.9561 9.59077 15.6956 8.53094C15.8229 8.3639 15.9877 8.23234 16.1757 8.14764C18.5 7.57294 20.0529 6.03999 21.047 3.87445C21.5554 2.78716 21.8681 1.609 21.9697 0.39786C21.9835 0.295074 21.9607 0.165311 21.9635 -3.97116e-05C21.3272 0.377359 20.7472 0.71139 20.1649 1.04581C18.7742 1.8549 17.4236 2.7238 16.4904 4.1475C15.7618 5.26989 15.3603 6.43497 15.7282 7.79649C15.7453 7.89381 15.7115 8.06462 15.63 8.14589C13.9367 10.332 12.5317 12.7038 11.3063 15.1753C11.2864 15.2433 11.1969 15.2925 11.1796 15.3625C11.1407 15.3359 11.0787 15.3468 11.042 15.3199C11.1149 15.0084 11.1169 14.6448 11.2689 14.4197C12.7589 11.9995 13.2176 9.33345 12.9081 6.50419C12.7875 5.26393 12.477 4.05954 12.2329 2.84344C12.199 2.65111 12.0775 2.5053 11.9224 2.16947C11.4274 2.98548 10.9635 3.62875 10.6123 4.35488C9.62631 6.3852 9.01763 8.54967 9.17223 10.8758C9.26124 12.2865 9.55569 13.5941 10.6581 14.5919C10.7372 14.6783 10.8274 14.8273 10.8135 14.9301C10.8648 15.5829 10.8793 16.2087 10.5786 16.859C9.45819 19.2141 8.65232 21.7096 8.01239 24.2403L7.89251 24.6605C7.86153 24.6659 7.79425 24.6467 7.76327 24.6522C7.78519 24.4142 7.73453 24.1269 7.79316 23.9158C8.68276 21.3387 8.6687 18.7225 8.0767 16.0769C7.69226 14.4531 7.04835 12.9754 6.07466 11.6203C6.02692 11.5308 5.9531 11.4745 5.83196 11.331C5.7224 11.6155 5.56861 11.8433 5.5153 12.0845C4.66237 15.2191 4.51927 18.3933 5.37095 21.5929C5.64367 22.6575 6.28545 23.5837 7.17071 24.1904C7.28082 24.2714 7.43335 24.4117 7.41912 24.5122C7.53271 25.1564 7.67156 25.7627 7.53687 26.4482C7.00133 29.0275 6.7237 31.6329 6.70677 34.2545C6.71208 34.2847 6.69254 34.355 6.54334 34.4148C6.49799 34.1576 6.38495 33.8788 6.37058 33.6162C6.30152 32.1374 6.38697 30.6291 6.19397 29.1722C5.79083 26.1612 4.3707 23.7237 2.07607 21.7749C2.03937 21.7479 1.9774 21.7588 1.83672 21.6857C1.79205 22.1571 1.6797 22.6069 1.66602 23.0729C1.6019 25.9704 2.03309 28.7782 3.17118 31.4279C3.67679 32.6648 4.51456 33.6113 5.80731 34.0452C5.90638 34.0636 6.01609 34.1422 6.02753 34.2071C6.22834 34.8024 6.58938 35.4006 6.59858 35.9963C6.67793 38.8016 7.00515 41.5632 7.42491 44.3061C7.43594 44.3687 7.42253 44.4738 7.43356 44.5364C7.40258 44.5418 7.34061 44.5528 7.31535 44.5907C7.24473 44.3714 7.10643 44.1305 7.06639 43.9034C6.81422 42.2922 6.56165 40.6786 5.85577 39.2118C4.6105 36.6789 2.85362 34.6998 0.357029 33.4174C0.314606 33.358 0.210213 33.3095 0.0385474 33.2418Z",
                        fill: "rgba(0, 0, 0, .2)",
                      }),
                    }),
                    (0, F.jsxs)("div", {
                      className: tF().text,
                      children: [
                        (0, F.jsxs)("div", {
                          className: tF().text1,
                          children: [
                            "听歌等级",
                            (null == a ? void 0 : a.level_alias) || "Lv.1",
                          ],
                        }),
                        (0, F.jsxs)("div", {
                          className: tF().user_info_wrap,
                          children: [
                            (0, F.jsx)("img", {
                              className: tF().head_img,
                              alt: "",
                              crossOrigin: "anonymous",
                              src: Z()(null == s ? void 0 : s.avatar) || L.Mm,
                            }),
                            (0, F.jsx)("span", {
                              className: tF().name,
                              children: (0, M.Y)(
                                (null == s ? void 0 : s.nickname) || "",
                                200,
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, F.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "40",
                      height: "81",
                      viewBox: "0 0 40 81",
                      fill: "none",
                      children: (0, F.jsx)("path", {
                        d: "M39.5122 33.2418C39.5346 33.4775 39.5683 33.6483 39.5397 33.8105C39.2865 36.1527 38.5489 38.3426 37.4563 40.372C36.9823 41.2488 36.4572 42.0522 35.8393 42.8393C35.0926 43.7995 34.1143 44.456 32.8916 44.5057C32.7509 44.5176 32.6167 44.5759 32.5086 44.6723C32.232 45.1539 31.8624 45.6192 31.7717 46.1336C31.1684 49.0114 30.4217 51.797 29.2726 54.5093C29.2244 54.6011 29.2073 54.6984 29.2773 54.8446C29.3679 54.6933 29.4894 54.5475 29.5539 54.363C30.2489 52.5956 31.1188 50.9236 32.5081 49.5797C34.2006 47.9524 36.1056 46.764 38.4437 46.3806C38.5114 46.3591 38.5733 46.37 38.641 46.3485C38.672 46.354 38.703 46.3594 38.8212 46.4137C38.7644 46.7358 38.7329 47.0958 38.5835 47.3992C37.4336 50.1161 35.8372 52.4532 33.5145 54.1988C32.4461 55.0043 31.2538 55.4249 29.8802 55.0489C29.7563 55.027 29.528 55.0536 29.4489 55.14C29.085 55.5729 28.6592 55.9947 28.3769 56.5088C26.9659 59.2442 25.3883 61.8499 23.4959 64.2351C23.3743 64.381 23.2789 64.56 23.1573 64.7059C23.2136 64.7492 23.2388 64.7871 23.2951 64.8305C23.49 64.6307 23.7094 64.4735 23.8424 64.2628C24.8122 62.9429 25.879 61.7715 27.2767 60.9237C29.2861 59.6868 31.4187 59.2003 33.7389 59.6428C34.3586 59.7521 34.3785 59.8201 34.079 60.4315C33.5454 61.4652 32.7867 62.3253 31.9439 63.1061C30.7628 64.1881 29.4994 65.1934 27.9416 65.6809C26.5188 66.1277 25.1045 66.1769 23.8021 65.2162C23.7145 65.1697 23.5963 65.1154 23.5286 65.1369C23.0694 65.3856 22.5031 65.5175 22.1813 65.8932C20.3456 67.9564 18.3523 69.827 16.1167 71.4541C16.0346 71.5094 15.9583 71.5736 15.889 71.6457C15.8523 71.6727 15.8775 71.7106 15.8069 71.9299C16.1276 71.7547 16.367 71.6655 16.5562 71.4981C17.8192 70.4951 19.2055 69.7122 20.8108 69.4983C23.2286 69.1935 25.4162 69.8444 27.4478 71.199C27.5045 71.24 27.5297 71.2779 27.6618 71.435C27.2841 71.765 26.9623 72.1408 26.5651 72.4004C24.0847 73.9533 21.4505 74.748 18.5779 74.177C17.7472 74.0033 17.0049 73.5319 16.4786 72.8439C16.0116 72.2312 15.3357 72.0785 14.6174 72.5157C12.7096 73.7269 10.6711 74.693 8.54701 75.3924L7.12502 75.8346C7.14416 75.9072 7.13844 75.9397 7.15839 76.0077C7.3863 75.9834 7.6089 75.9892 7.78098 75.9192C8.94447 75.4936 10.1196 75.1703 11.3583 75.2239C13.8937 75.3389 15.9252 76.5261 17.6859 78.3299C17.9818 78.6449 18.2715 78.9946 18.6428 79.4256C18.1212 79.6658 17.7236 79.9278 17.2564 80.0413C14.7429 80.6948 12.2562 80.6529 9.86678 79.5029C8.72096 78.9353 7.8117 78.1131 7.39412 76.8449C7.25079 76.3895 6.39764 75.9739 5.868 76.0788C4.10439 76.4655 2.28787 76.6087 0.499945 76.5897C0.338902 76.5972 0.183987 76.5699 -0.00191022 76.5371C0.0211106 76.0442 0.25277 75.8174 0.697562 75.8313C2.49257 75.8426 4.28641 75.6469 6.04648 75.2478C6.94513 75.0431 7.37664 74.5887 7.41737 73.633C7.5294 71.7294 8.18197 70.0215 9.25685 68.4549C10.4012 66.812 11.9936 65.5655 13.8207 64.8826C13.9561 64.8395 14.122 64.8043 14.3614 64.7151C14.2683 65.0618 14.192 65.3136 14.1156 65.5653C13.4177 67.5305 12.8747 69.5229 11.878 71.3709C11.1216 72.7619 10.0533 73.7347 8.58845 74.2385C8.38618 74.3142 8.17395 74.3551 7.96015 74.3595C7.52639 74.283 7.42479 74.4969 7.34552 74.9464C7.51147 74.9112 7.64112 74.9006 7.77649 74.8575C10.479 74.0841 13.0498 72.8581 15.3877 71.2276C16.0108 70.7736 16.0543 69.9832 15.9396 69.3657C15.4494 66.5292 16.075 63.8871 17.4071 61.4054C18.0813 60.1314 19.0092 59.0359 20.101 58.0982C20.2107 58.0196 20.3151 57.9711 20.4982 57.8386C20.4608 58.5941 20.4348 59.2848 20.3832 59.9399C20.2826 61.2482 20.2107 62.5616 20.0459 63.8586C19.8271 65.643 19.3914 67.3892 18.0769 68.6841C17.6856 69.0786 17.2036 69.4572 16.6821 69.6973C16.257 69.921 16.1497 70.1673 16.1851 70.704C16.7463 70.239 17.2593 69.866 17.7471 69.455C19.5486 67.9473 21.2094 66.3192 22.6282 64.4453C23.0455 63.8905 22.99 63.1186 22.7399 62.544C20.9397 58.2461 21.7102 54.239 24.0527 50.3753C24.1008 50.2834 24.1742 50.2295 24.2219 50.1399C24.2277 50.1075 24.2896 50.1184 24.3573 50.0969C24.8333 52.8329 25.6437 55.4965 25.4042 58.3046C25.2641 60.005 24.7384 61.5369 23.4158 62.6967C23.2269 62.8617 23.2268 63.2248 23.1505 63.4766C23.2067 63.5199 23.2687 63.5309 23.2939 63.5688L24.0388 62.6058C25.7617 60.1433 27.2347 57.5025 28.4333 54.7268C28.4867 54.6048 28.5459 54.4504 28.5321 54.3476C28.3358 53.6488 28.2745 52.9093 27.6722 52.3396C26.5586 51.2138 26.0895 49.7071 25.7252 48.1496C25.1455 45.627 25.4469 43.193 26.2263 40.7787C26.2377 40.7138 26.2779 40.654 26.3222 40.5973C26.3784 40.6406 26.4404 40.6516 26.4351 40.6817C27.2669 42.4865 28.2031 44.2428 28.9637 46.102C29.7083 47.858 29.9928 49.7001 29.374 51.5788C29.2442 51.9525 29.0773 52.3556 28.8328 52.6422C28.4433 53.0394 28.6091 53.3673 28.8362 53.9043C29.2035 52.9082 29.5793 52.0451 29.8308 51.1624C30.4505 48.9159 30.9712 46.6877 31.5285 44.4326C31.6388 43.9885 31.1753 42.8125 30.8264 42.6172C29.0089 41.6659 28.0245 40.0015 27.3334 38.1235C26.5956 36.1346 26.4478 34.0872 26.7154 32.0127L26.778 31.6582C26.7837 31.6258 26.8204 31.5988 26.8685 31.5069C27.0763 31.7777 27.3213 32.0192 27.5295 32.2877C28.4767 33.451 29.4584 34.587 30.3331 35.7996C31.3823 37.2772 31.918 38.9629 31.713 40.8501C31.659 41.3376 31.5426 41.8164 31.4018 42.2527C31.2292 42.6882 31.4121 42.9188 31.7271 43.3064C31.8178 42.792 31.9166 42.4128 31.9539 42.0204C32.2726 39.1258 32.4616 36.2419 32.302 33.3299C32.2876 32.9321 32.1438 32.5534 31.8942 32.2562C31.6447 31.959 31.3042 31.761 30.9291 31.6949C29.1975 31.3561 28.022 30.2194 27.0485 28.8555C25.865 27.2205 25.3345 25.3374 25.0783 23.3354C25.084 23.3029 25.0666 23.233 25.0781 23.1681C25.0834 23.138 25.1201 23.111 25.1254 23.0809C25.1564 23.0863 25.1935 23.0571 25.2245 23.0625C26.711 24.0533 28.2727 24.9929 29.7132 26.076C30.9767 27.0634 31.7975 28.4003 31.8494 30.0987C31.8489 30.4641 31.8483 30.8296 31.7495 31.2088C31.645 31.6204 31.8333 31.8209 32.1765 32.0486C32.1994 31.9189 32.2532 31.7946 32.239 31.6941C32.0004 28.7066 31.4935 25.7536 30.7252 22.8736C30.6274 22.5219 29.7772 21.9085 29.4113 21.9778C26.9183 22.3338 25.1563 21.0937 23.6545 19.2711C22.907 18.3451 22.3358 17.2773 21.9709 16.1239C22.3117 16.184 22.6273 16.2061 22.9004 16.2878C24.4293 16.6887 25.9917 16.8997 27.3824 17.7088C28.8068 18.5214 29.7208 19.6789 29.8002 21.4156C29.8196 21.8491 30.0985 21.8982 30.4531 22.0611C30.3998 21.82 30.3913 21.687 30.3522 21.5464C29.6794 19.2374 28.8112 16.9983 27.7578 14.8553C27.5411 14.454 26.7446 14.0794 26.3385 14.2084C23.5884 15.1165 21.3956 14.1325 19.5541 12.0493C19.0699 11.5339 18.7383 10.8781 18.3333 10.2763C18.3757 10.2168 18.412 10.1922 18.4549 10.1304C18.708 10.144 18.9979 10.1306 19.2519 10.1396C20.626 10.1501 22.023 10.0309 23.3577 10.4335C24.9371 10.9103 26.1924 11.7624 26.6127 13.5591C26.7051 13.941 26.7361 13.9465 27.3419 13.9529C26.8778 13.1424 26.501 12.3807 26.018 11.6647C25.309 10.6127 24.5947 9.59077 23.8551 8.53094C23.7279 8.3639 23.5631 8.23234 23.3751 8.14764C21.0508 7.57294 19.4979 6.03999 18.5037 3.87445C17.9953 2.78716 17.6827 1.609 17.5811 0.39786C17.5672 0.295074 17.5901 0.165311 17.5873 -3.97116e-05C18.2236 0.377359 18.8036 0.71139 19.3859 1.04581C20.7766 1.8549 22.1272 2.7238 23.0604 4.1475C23.7889 5.26989 24.1905 6.43497 23.8226 7.79649C23.8055 7.89381 23.8392 8.06462 23.9207 8.14589C25.6141 10.332 27.0191 12.7038 28.2445 15.1753C28.2644 15.2433 28.3539 15.2925 28.3712 15.3625C28.4101 15.3359 28.4721 15.3468 28.5088 15.3199C28.4359 15.0084 28.4338 14.6448 28.2819 14.4197C26.7918 11.9995 26.3332 9.33345 26.6427 6.50419C26.7633 5.26393 27.0738 4.05954 27.3178 2.84344C27.3518 2.65111 27.4733 2.5053 27.6284 2.16947C28.1234 2.98548 28.5873 3.62875 28.9384 4.35488C29.9245 6.3852 30.5331 8.54967 30.3786 10.8758C30.2895 12.2865 29.9951 13.5941 28.8927 14.5919C28.8136 14.6783 28.7234 14.8273 28.7372 14.9301C28.686 15.5829 28.6715 16.2087 28.9721 16.859C30.0926 19.2141 30.8985 21.7096 31.5384 24.2403L31.6583 24.6605C31.6892 24.6659 31.7565 24.6467 31.7875 24.6522C31.7656 24.4142 31.8163 24.1269 31.7576 23.9158C30.868 21.3387 30.8821 18.7225 31.4741 16.0769C31.8585 14.4531 32.5024 12.9754 33.4761 11.6203C33.5239 11.5308 33.5977 11.4745 33.7188 11.331C33.8284 11.6155 33.9822 11.8433 34.0355 12.0845C34.8884 15.2191 35.0315 18.3933 34.1798 21.5929C33.9071 22.6575 33.2653 23.5837 32.3801 24.1904C32.27 24.2714 32.1174 24.4117 32.1317 24.5122C32.0181 25.1564 31.8792 25.7627 32.0139 26.4482C32.5494 29.0275 32.8271 31.6329 32.844 34.2545C32.8387 34.2847 32.8582 34.355 33.0074 34.4148C33.0528 34.1576 33.1658 33.8788 33.1802 33.6162C33.2493 32.1374 33.1638 30.6291 33.3568 29.1722C33.76 26.1612 35.1801 23.7237 37.4747 21.7749C37.5114 21.7479 37.5734 21.7588 37.7141 21.6857C37.7587 22.1571 37.8711 22.6069 37.8848 23.0729C37.9489 25.9704 37.5177 28.7782 36.3796 31.4279C35.874 32.6648 35.0362 33.6113 33.7435 34.0452C33.6444 34.0636 33.5347 34.1422 33.5233 34.2071C33.3224 34.8024 32.9614 35.4006 32.9522 35.9963C32.8728 38.8016 32.5456 41.5632 32.1259 44.3061C32.1148 44.3687 32.1283 44.4738 32.1172 44.5364C32.1482 44.5418 32.2102 44.5528 32.2354 44.5907C32.306 44.3714 32.4444 44.1305 32.4844 43.9034C32.7366 42.2922 32.9891 40.6786 33.695 39.2118C34.9403 36.6789 36.6972 34.6998 39.1938 33.4174C39.2362 33.358 39.3406 33.3095 39.5122 33.2418Z",
                        fill: "rgba(0, 0, 0, .2)",
                      }),
                    }),
                  ],
                }),
                (0, F.jsxs)("div", {
                  className: tF().userData,
                  children: [
                    (0, F.jsxs)("div", {
                      className: tF().gridWrap,
                      children: [
                        (0, F.jsxs)("div", {
                          className: tF().top,
                          children: [
                            (0, F.jsx)("p", {
                              children:
                                null != o && o.duration
                                  ? (0, M.NH)(
                                      Math.floor(
                                        (null == o ? void 0 : o.duration) / 60,
                                      ),
                                    ).val
                                  : "0",
                            }),
                            (0, F.jsxs)("span", {
                              children: [
                                (0, M.NH)(
                                  Math.floor(
                                    (null == o ? void 0 : o.duration) / 60,
                                  ),
                                ).uni,
                                "小时",
                              ],
                            }),
                          ],
                        }),
                        (0, F.jsx)("div", {
                          className: tF().bottom,
                          children: (0, F.jsx)("p", { children: "累计听歌" }),
                        }),
                      ],
                    }),
                    (0, F.jsxs)("div", {
                      className: tF().gridWrap,
                      children: [
                        (0, F.jsx)("div", {
                          className: tF().top,
                          children:
                            null === (t = c.match(/\d+|\D+/g)) || void 0 === t
                              ? void 0
                              : t.map(function (e, t) {
                                  var n = /^\d+$/.test(e) ? "p" : "span";
                                  return (0, F.jsx)(n, { children: e }, t);
                                }),
                        }),
                        (0, F.jsx)("div", {
                          className: tF().bottom,
                          children: (0, F.jsx)("p", { children: "乐龄" }),
                        }),
                      ],
                    }),
                    (0, F.jsxs)("div", {
                      className: tF().gridWrap,
                      children: [
                        (0, F.jsxs)("div", {
                          className: tF().top,
                          children: [
                            null != o && o.rank
                              ? (0, F.jsx)("span", { children: "第" })
                              : "",
                            (0, F.jsx)("p", {
                              children:
                                null != o && o.rank
                                  ? "".concat(null == o ? void 0 : o.rank)
                                  : null != o && o.rank_percent
                                    ? "TOP ".concat(
                                        null == o ? void 0 : o.rank_percent,
                                        "%",
                                      )
                                    : "计算中",
                            }),
                            null != o && o.rank
                              ? (0, F.jsx)("span", { children: "名" })
                              : "",
                          ],
                        }),
                        (0, F.jsx)("div", {
                          className: tF().bottom,
                          children: (0, F.jsx)("p", {
                            children: (0, M.Y)(
                              (0, L.n4)(null == o ? void 0 : o.rank_type, {
                                city_name: null == o ? void 0 : o.city_name,
                                province_name:
                                  null == o ? void 0 : o.province_name,
                              }),
                              100,
                            ),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, F.jsxs)("div", {
                  className: tF().footer,
                  children: [
                    (0, F.jsxs)("div", {
                      className: tF().left,
                      children: [
                        (0, F.jsx)("img", { src: tG.src, alt: "" }),
                        (0, F.jsx)("div", {
                          className: tF().tip,
                          children: "来酷狗音乐听歌集勋章",
                        }),
                      ],
                    }),
                    (0, F.jsx)("div", {
                      className: tF().right,
                      children:
                        !!r &&
                        (0, F.jsx)(tK.ZP, {
                          includeMargin: !1,
                          level: "L",
                          renderAs: "canvas",
                          size: (0, M.Yk)(80),
                          value: r,
                        }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        tJ = ["getRef"];
      function tX(e, t) {
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
      function tq(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tX(Object(n), !0).forEach(function (t) {
                (0, v.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tX(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var t$ = function (e) {
          for (
            var t = new Set(), n = e.getElementsByTagName("img"), r = 0;
            r < n.length;
            r++
          )
            n[r].src && t.add(n[r].src);
          for (var i = e.getElementsByTagName("*"), a = 0; a < i.length; a++) {
            var o = i[a],
              l = getComputedStyle(o).backgroundImage;
            if (l && "none" !== l) {
              var s = l.match(/url\(["']?([^"')]+)["']?\)/g);
              if (s)
                for (var c = 0; c < s.length; c++) {
                  var u = s[c].replace(/^url\(["']?|["']?\)$/g, "");
                  u && 0 !== u.indexOf("data:") && t.add(u);
                }
            }
          }
          var d = [];
          return (
            t.forEach(function (e) {
              return d.push(e);
            }),
            d
          );
        },
        t1 =
          ((r = (0, p.Z)(
            g().mark(function e(t) {
              var n, r, i, a, o;
              return g().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(n = t$(t)).length) {
                        e.next = 4;
                        break;
                      }
                      return ((e.next = 4), (0, M.ab)(n));
                    case 4:
                      for (
                        o = 0,
                          r = t.getElementsByTagName("img"),
                          i = [],
                          a = function (e) {
                            var t = r[e];
                            t.complete
                              ? i.push(Promise.resolve())
                              : i.push(
                                  new Promise(function (e) {
                                    t.onload = t.onerror = e;
                                  }),
                                );
                          };
                        o < r.length;
                        o++
                      )
                        a(o);
                      return ((e.next = 10), Promise.all(i));
                    case 10:
                      return (
                        (e.next = 12),
                        new Promise(function (e) {
                          requestAnimationFrame(function () {
                            return requestAnimationFrame(e);
                          });
                        })
                      );
                    case 12:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          )),
          function (e) {
            return r.apply(this, arguments);
          }),
        t2 =
          ((i = (0, p.Z)(
            g().mark(function e(t) {
              var n, r;
              return g().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = M.gn ? (0, M.CY)(12) : (0, M.Xf)(7)),
                        (e.next = 3),
                        tM()(t, {
                          useCORS: !0,
                          scale: n ? 2 : 3,
                          backgroundColor: null,
                          width: t.clientWidth - 2,
                          height: t.clientHeight,
                          scrollX: 0,
                          scrollY: 0,
                          x: 0,
                          y: 0,
                          allowTaint: !0,
                        })
                      );
                    case 3:
                      return (
                        (r = e.sent),
                        e.abrupt("return", r.toDataURL("image/png"))
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          )),
          function (e) {
            return i.apply(this, arguments);
          }),
        t0 = 540 / 940,
        t3 = function (e) {
          var t = e.hidden;
          return (0, F.jsx)("div", {
            className: ei()(
              tY().poster_skeleton,
              t && tY().poster_skeleton_hidden,
            ),
            "aria-hidden": "true",
            children:
              !t &&
              !(null != tT && tT.isLowerVer) &&
              (0, F.jsx)("div", { className: tY().poster_skeleton_shimmer }),
          });
        },
        t5 = function (e) {
          var t = e.src,
            n = (0, h.useRef)(null);
          return (
            (0, h.useLayoutEffect)(function () {
              if (null != tT && tT.isLowerVer && n.current) {
                var e = function () {
                  var e = n.current,
                    t = null == e ? void 0 : e.parentElement;
                  if (e && t) {
                    var r = (0, M.Yk)(940),
                      i = Math.min(t.clientHeight || 0, r);
                    i <= 0 ||
                      ((e.style.width = "".concat(i * t0, "px")),
                      (e.style.height = "".concat(i, "px")));
                  }
                };
                return (
                  e(),
                  requestAnimationFrame(e),
                  window.addEventListener("resize", e),
                  function () {
                    return window.removeEventListener("resize", e);
                  }
                );
              }
            }, []),
            (0, F.jsxs)("div", {
              ref: n,
              className: ei()(
                tY().poster_slot,
                (null == tT ? void 0 : tT.isLowerVer) &&
                  tY().poster_slot_legacy,
              ),
              children: [
                (0, F.jsx)(t3, { hidden: !!t }),
                t &&
                  (0, F.jsx)("img", {
                    src: t,
                    alt: "poster",
                    className: tY().poster_img,
                  }),
              ],
            })
          );
        },
        t4 = function (e) {
          var t,
            n,
            r,
            i,
            a = e.data,
            o = e.qrcodeLink,
            l = e.shareConfig,
            s = e.posterBgColor,
            c = "singer_energy_detail" === e.type ? 2 : 1,
            u = c > 1,
            d = (0, h.useState)([]),
            A = d[0],
            v = d[1],
            f = (0, h.useState)(null),
            C = f[0],
            m = f[1],
            b = (0, h.useRef)([]),
            w = (0, h.useRef)(null),
            y = (0, h.useRef)(null),
            k = H(0),
            I = (0, _.Z)(k, 2),
            j = I[0],
            N = I[1],
            O = (0, h.useRef)(null),
            E = (0, h.useState)(!1),
            D = E[0],
            R = E[1],
            P = (0, h.useRef)(!1),
            U = (0, h.useRef)(null),
            S = (0, h.useRef)(A);
          ((S.current = A),
            (0, h.useEffect)(
              function () {
                if (e.open) {
                  var t;
                  ((t = (0, p.Z)(
                    g().mark(function e() {
                      return g().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (v([]),
                                w.current &&
                                  (w.current.destroy(!0, !0),
                                  (w.current = null)),
                                (P.current = !1),
                                clearTimeout(U.current),
                                (U.current = setTimeout(function () {
                                  P.current ||
                                    (M.l1.hide(),
                                    x.FN.info("海报生成超时，请重试"),
                                    V());
                                }, 15e3)),
                                m(
                                  (null == a ? void 0 : a.singer_avatar) ||
                                    L.C0,
                                ));
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  )),
                  function () {
                    return t.apply(this, arguments);
                  })();
                }
                return function () {
                  clearTimeout(U.current);
                };
              },
              [e.open, a],
            ),
            (0, h.useEffect)(
              function () {
                C && b.current.filter(Boolean).length && B();
              },
              [C],
            ));
          var B =
              ((t = (0, p.Z)(
                g().mark(function e() {
                  var t, n, r, i;
                  return g().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((t = b.current.filter(Boolean)).length) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            return (
                              (e.prev = 3),
                              M.l1.show({
                                type: "block",
                                msg: "海报生成中...",
                              }),
                              (e.next = 7),
                              t1(t[0])
                            );
                          case 7:
                            return ((e.next = 9), t2(t[0]));
                          case 9:
                            if (((n = e.sent), M.l1.hide(), n)) {
                              e.next = 14;
                              break;
                            }
                            return (
                              x.FN.info("海报生成失败，请重试"),
                              e.abrupt("return")
                            );
                          case 14:
                            if (
                              (v(u ? [n, null] : [n]),
                              (O.current = n),
                              (P.current = !0),
                              clearTimeout(U.current),
                              !(t.length <= 1))
                            ) {
                              e.next = 20;
                              break;
                            }
                            return e.abrupt("return");
                          case 20:
                            ((r = g().mark(function e(n) {
                              var r;
                              return g().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          t1(t[n])
                                        );
                                      case 3:
                                        return ((e.next = 5), t2(t[n]));
                                      case 5:
                                        if ((r = e.sent)) {
                                          e.next = 8;
                                          break;
                                        }
                                        return e.abrupt("return", "continue");
                                      case 8:
                                        (v(function (e) {
                                          var t = (0, ep.Z)(e);
                                          return ((t[n] = r), t);
                                        }),
                                          (e.next = 14));
                                        break;
                                      case 11:
                                        ((e.prev = 11),
                                          (e.t0 = e.catch(0)),
                                          console.error("生成海报失败", e.t0));
                                      case 14:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[0, 11]],
                              );
                            })),
                              (i = 1));
                          case 22:
                            if (!(i < t.length)) {
                              e.next = 30;
                              break;
                            }
                            return e.delegateYield(r(i), "t0", 24);
                          case 24:
                            if ("continue" !== e.t0) {
                              e.next = 27;
                              break;
                            }
                            return e.abrupt("continue", 27);
                          case 27:
                            (i++, (e.next = 22));
                            break;
                          case 30:
                            e.next = 37;
                            break;
                          case 32:
                            ((e.prev = 32),
                              (e.t1 = e.catch(3)),
                              console.error("生成海报失败", e.t1),
                              x.FN.info("海报生成失败，请重试"),
                              M.l1.hide());
                          case 37:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 32]],
                  );
                }),
              )),
              function () {
                return t.apply(this, arguments);
              }),
            Y = !!C;
          ((0, h.useLayoutEffect)(
            function () {
              u &&
                Y &&
                y.current &&
                !w.current &&
                ((w.current = new tQ.Z(y.current, {
                  modules: null != tT && tT.isLowerVer ? [] : [tH.lI],
                  effect: null != tT && tT.isLowerVer ? "" : "coverflow",
                  initialSlide: 0,
                  centeredSlides: !0,
                  slidesPerView: "auto",
                  spaceBetween: 30,
                  coverflowEffect:
                    null != tT && tT.isLowerVer
                      ? {}
                      : {
                          rotate: 0,
                          stretch: 0,
                          depth: 100,
                          modifier: 1,
                          slideShadows: !1,
                          scale: 0.9,
                        },
                  on: {
                    slideChange: function (e) {
                      var t = e.realIndex;
                      N(t);
                      var n = S.current;
                      n[t] && (O.current = n[t]);
                    },
                  },
                })),
                null != tT &&
                  tT.isLowerVer &&
                  new tT({
                    ref: y.current,
                    slideNext: function () {
                      return w.current.slideNext();
                    },
                    slidePrev: function () {
                      return w.current.slidePrev();
                    },
                  }));
            },
            [u, Y],
          ),
            (0, h.useEffect)(function () {
              return function () {
                w.current && (w.current.destroy(!0, !0), (w.current = null));
              };
            }, []));
          var V = function () {
              (e.onCancel && e.onCancel(), e.onClose && e.onClose());
            },
            Q =
              ((n = (0, p.Z)(
                g().mark(function e(t) {
                  var n, r, i, s, c;
                  return g().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (ee.Z.fire("1134875", {
                                svar1: null == a ? void 0 : a.classify_id,
                                svar2: 0 == +j ? "实体" : "数据",
                              }),
                              "save" !== t.type)
                            ) {
                              e.next = 6;
                              break;
                            }
                            return (
                              (window.globalSaveImgCallback = function (e) {
                                var t = (e =
                                  "string" == typeof e ? JSON.parse(e) : e)
                                  .status;
                                x.my.isAndroid &&
                                  (M.l1.hide(),
                                  x.FN.info(1 == +t ? "保存成功" : "保存失败"));
                              }),
                              x.my.isAndroid &&
                                M.l1.show({
                                  type: "block",
                                  msg: "正在保存海报",
                                }),
                              x.my.mobileCall(750, {
                                imageData: O.current,
                                callback: "globalSaveImgCallback",
                              }),
                              e.abrupt("return")
                            );
                          case 6:
                            if (
                              ((n = (null == l ? void 0 : l.title) || ""),
                              (r = (null == l ? void 0 : l.content) || ""),
                              (null == t ? void 0 : t.type) === 7 &&
                                ((n = (null == l ? void 0 : l.xhsTitle) || ""),
                                (r =
                                  (null == l ? void 0 : l.xhsContent) || "")),
                              (i = O.current),
                              (null == t ? void 0 : t.type) !== 7)
                            ) {
                              e.next = 32;
                              break;
                            }
                            return (
                              (e.prev = 11),
                              M.l1.show({
                                type: "block",
                                msg: "生成分享图片...",
                              }),
                              R(!0),
                              (e.next = 16),
                              (0, M._v)(200)
                            );
                          case 16:
                            if (!(s = b.current[j])) {
                              e.next = 23;
                              break;
                            }
                            return (
                              (c = M.gn ? (0, M.CY)(12) : (0, M.Xf)(7)),
                              (e.next = 21),
                              tM()(s, {
                                useCORS: !0,
                                scale: c ? 2 : 3,
                                backgroundColor: null,
                                width: s.clientWidth - 2,
                                height: s.clientHeight,
                                scrollX: 0,
                                scrollY: 0,
                                x: 0,
                                y: 0,
                                allowTaint: !0,
                              })
                            );
                          case 21:
                            i = e.sent.toDataURL("image/png");
                          case 23:
                            e.next = 28;
                            break;
                          case 25:
                            ((e.prev = 25),
                              (e.t0 = e.catch(11)),
                              console.error("生成小红书海报失败", e.t0));
                          case 28:
                            return (
                              (e.prev = 28),
                              R(!1),
                              M.l1.hide(),
                              e.finish(28)
                            );
                          case 32:
                            x.my.mobileCall(115, {
                              type: 4,
                              platform_type: t.type,
                              shareData: {
                                type: 4,
                                showXhs: 1,
                                content: r,
                                title: n,
                                linkUrl: o,
                                imageData: i,
                              },
                            });
                          case 33:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[11, 25, 28, 32]],
                  );
                }),
              )),
              function (e) {
                return n.apply(this, arguments);
              }),
            T = u && Y,
            Z = !!A[0];
          return (0, F.jsx)(
            e6,
            tq(
              tq({}, e),
              {},
              {
                position: "middle",
                zIndex: 999,
                maskOpacity: 1,
                children: (0, F.jsx)("div", {
                  className: tY().dialog_posters_wrap,
                  style: {
                    background: "linear-gradient(180deg, #161616 0%, ".concat(
                      s,
                      " 100%)",
                    ),
                  },
                  children: (0, F.jsxs)("div", {
                    className: tY().wrap,
                    children: [
                      (0, F.jsx)(
                        t6,
                        tq(
                          tq({}, e),
                          {},
                          {
                            singerAvatar: C,
                            data: a,
                            qrcodeLink: D ? null : o,
                            getRef: function (e, t) {
                              b.current[t] = e;
                            },
                          },
                        ),
                      ),
                      (0, F.jsx)("div", {
                        className: ei()(
                          tY().swiper_wrap,
                          T ? "swiper-container" : "",
                        ),
                        ref: y,
                        children: (0, F.jsx)("div", {
                          className: ei()(
                            T ? "swiper-wrapper" : tY().single_poster_wrapper,
                          ),
                          children: Y
                            ? u
                              ? Array.from({ length: c }, function (e, t) {
                                  var n = A[t];
                                  return (0, F.jsx)(
                                    "div",
                                    {
                                      className: ei()(
                                        "swiper-slide",
                                        tY().swiper_slide,
                                      ),
                                      children: (0, F.jsx)(t5, { src: n }),
                                    },
                                    t,
                                  );
                                })
                              : (0, F.jsx)("div", {
                                  className: ei()(
                                    "swiper-slide",
                                    tY().swiper_slide,
                                  ),
                                  children: (0, F.jsx)(t5, { src: A[0] }),
                                })
                            : null,
                        }),
                      }),
                      (0, F.jsxs)("div", {
                        className: tY().footer_ways,
                        children: [
                          (0, F.jsx)("div", {
                            className: ei()(
                              tY().list,
                              (null === (r = (0, L.mB)()) || void 0 === r
                                ? void 0
                                : r.length) < 4 && tY().short_list,
                            ),
                            children:
                              null === (i = (0, L.mB)()) || void 0 === i
                                ? void 0
                                : i.map(function (e, t) {
                                    return (0, F.jsxs)(
                                      "div",
                                      {
                                        className: tY().item,
                                        onClick: function () {
                                          return Q(e);
                                        },
                                        style: {
                                          opacity: Z ? 1 : 0,
                                          transitionDelay: "".concat(
                                            600 + 50 * t,
                                            "ms",
                                          ),
                                          transform: Z
                                            ? "translateY(0)"
                                            : "translateY(50%)",
                                        },
                                        children: [
                                          (0, F.jsx)("div", {
                                            className: tY().img,
                                            style: {
                                              backgroundImage: "url(".concat(
                                                null == e ? void 0 : e.img,
                                                ")",
                                              ),
                                            },
                                          }),
                                          (0, F.jsx)("div", {
                                            className: tY().title,
                                            children: e.title,
                                          }),
                                        ],
                                      },
                                      t,
                                    );
                                  }),
                          }),
                          (0, F.jsx)("div", {
                            className: tY().close,
                            onClick: V,
                            style: { opacity: Z ? 1 : 0 },
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              },
            ),
          );
        },
        t7 = function (e) {
          return "achievement_detail" === e.type
            ? (0, F.jsx)(tz, tq({}, e))
            : (0, F.jsx)(F.Fragment, {});
        },
        t6 = function (e) {
          var t = e.getRef,
            n = (0, tB.Z)(e, tJ),
            r = [1];
          return (
            (null == n ? void 0 : n.type) === "singer_energy_detail" &&
              (r = [1, 2]),
            (0, F.jsx)("div", {
              className: tY().PosterDoms_wrap,
              style: { color: n.textColor || "#000" },
              children: r.map(function (e, r) {
                return (0, F.jsx)(
                  "div",
                  {
                    ref: function (e) {
                      return t(e, r);
                    },
                    children: (0, F.jsx)(t7, tq(tq({}, n), {}, { index: r })),
                  },
                  r,
                );
              }),
            })
          );
        },
        t8 = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new Promise(function (t) {
            (e8(t4, e), t(!0));
          });
        };
      function t9(e, t) {
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
      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? t9(Object(n), !0).forEach(function (t) {
                (0, v.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : t9(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var nt = (0, M.Dv)("hreffrom") || "",
        nn = function (e) {
          return new Promise(function (t, n) {
            var r = new Image();
            ((r.onload = function () {
              return t(e);
            }),
              (r.onerror = n),
              (r.crossOrigin = "anonymous"),
              (r.src = e));
          });
        },
        nr =
          ((a = (0, p.Z)(
            g().mark(function e(t) {
              var r, i;
              return g().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        n.e(184).then(n.t.bind(n, 63184, 19))
                      );
                    case 2:
                      return ((r = e.sent), (e.next = 5), nn(t));
                    case 5:
                      return (
                        (i = ne(
                          ne({}, r.default),
                          {},
                          {
                            assets: r.default.assets.map(function (e) {
                              return "image_0" === e.id
                                ? ne(ne({}, e), {}, { p: t, u: "" })
                                : e;
                            }),
                          },
                        )),
                        e.abrupt("return", i)
                      );
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          )),
          function (e) {
            return a.apply(this, arguments);
          }),
        ni = function (e) {
          try {
            if (!e) return "";
            var t = new Date(e.replace(/-/g, "/")).getTime(),
              n = new Date(t).getFullYear(),
              r = new Date(t).getMonth() + 1,
              i = new Date(t).getDate();
            return "".concat(n, "年").concat(r, "月").concat(i, "日");
          } catch (e) {
            return (console.error("formateDate-error", e), "");
          }
        };
      function na(e) {
        return e < 1e4
          ? e
          : e < 1e8
            ? (e / 1e4).toFixed(1) + "万"
            : (e / 1e8).toFixed(1) + "亿";
      }
      var no = function (e) {
          var t,
            n,
            r = e.data,
            i = e.textColor,
            a = e.bgColor,
            o = e.shareConfig,
            l = e.btnColor,
            s = e.levelUpAnimation,
            c = (0, h.useRef)(null),
            u = (0, h.useRef)(null),
            d = (0, h.useRef)(null),
            A = (0, h.useState)(!1),
            f = A[0],
            C = A[1],
            m = (0, h.useState)(!1),
            b = m[0],
            x = m[1],
            w = H(!1),
            y = (0, _.Z)(w, 3),
            k = y[0],
            I = y[1],
            j = y[2],
            N = (0, h.useState)(!1),
            O = N[0],
            E = N[1];
          d.current = I;
          var D = (0, h.useState)(0),
            R = D[0],
            P = D[1],
            U = (0, h.useState)(!0),
            S = U[0],
            B = U[1],
            Y = (0, h.useState)(null),
            V = Y[0],
            Q = Y[1],
            T = M.hc || !S,
            K = (0, h.useMemo)(
              function () {
                var e = null == r ? void 0 : r.user;
                return (
                  e && (e.avatar = Z()(e.avatar) || L.yo),
                  ne(ne({}, r), {}, { user: e })
                );
              },
              [r],
            ),
            G = (K.timestamp, K.user),
            W = K.grade,
            z = K.medal,
            q = K.vip;
          ((0, h.useEffect)(
            function () {
              if (!(null != z && z.big_pic_v3) || M.hc || !S) {
                Q(null);
                return;
              }
              var e = !1,
                t = Z()(z.big_pic_v3);
              return (
                Q(null),
                nr(t)
                  .then(function (t) {
                    e || Q(t);
                  })
                  .catch(function (t) {
                    (console.error("prepareFirstLottie error:", t), e || B(!1));
                  }),
                function () {
                  e = !0;
                }
              );
            },
            [null == z ? void 0 : z.big_pic_v3, R, S],
          ),
            (0, h.useEffect)(
              function () {
                if (!f) {
                  var e = setTimeout(function () {
                      x(!0);
                    }, 3540),
                    t = setTimeout(function () {
                      d.current(!0);
                    }, 4090);
                  return function () {
                    (clearTimeout(e), clearTimeout(t));
                  };
                }
              },
              [f, R],
            ),
            (0, h.useEffect)(
              function () {
                if (!k) {
                  E(!1);
                  return;
                }
                return (
                  (u.current = setTimeout(
                    function () {
                      E(!0);
                    },
                    f || T ? 0 : 1e3,
                  )),
                  function () {
                    u.current && (clearTimeout(u.current), (u.current = null));
                  }
                );
              },
              [k, f, T, R],
            ),
            (0, h.useEffect)(function () {
              return (
                ee.Z.fire("1135208", {
                  svar1: null == W ? void 0 : W.p_grade,
                  svar2: (0, X.j)(q),
                  svar3: "首次上线动画",
                }),
                function () {
                  (c.current && clearTimeout(c.current),
                    u.current && clearTimeout(u.current));
                }
              );
            }, []));
          var $ = function () {
              (arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                e.onCancel && e.onCancel(),
                e.onClose && e.onClose());
            },
            et = (0, h.useCallback)(
              function () {
                (c.current && (clearTimeout(c.current), (c.current = null)),
                  C(!1),
                  x(!1),
                  I(!1),
                  E(!1),
                  B(!0),
                  P(function (e) {
                    return e + 1;
                  }),
                  ee.Z.fire("1135209", {
                    svar1: null == W ? void 0 : W.p_grade,
                    svar2: (0, X.j)(q),
                    svar3: "首次上线动画",
                    svar4: "再看一遍",
                  }));
              },
              [I, null == W ? void 0 : W.p_grade, q],
            ),
            en =
              ((t = (0, p.Z)(
                g().mark(function e() {
                  var t, n, l, s, c, u;
                  return g().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = Number(new Date().valueOf()).toString(32)),
                            (e.next = 3),
                            (0, M.KD)()
                          );
                        case 3:
                          ((n = e.sent),
                            (l = z.type),
                            (s = z.classify_id),
                            (c = z.level),
                            (u =
                              Number(
                                (null == n ? void 0 : n.userid) || "",
                              ).toString(32) + t),
                            t8({
                              type: "achievement_detail",
                              data: ne({}, r),
                              textColor: i,
                              posterBgColor: a,
                              qrcodeLink:
                                "https://activity.kugou.com/page/v-21847b5d/detail.html?isHideTitleBar=1&hreffrom="
                                  .concat(nt, "&type=")
                                  .concat(l, "&classifyId=")
                                  .concat(s, "&level=")
                                  .concat(c || "", "&shareId=")
                                  .concat(u),
                              shareConfig: o,
                            }),
                            ee.Z.fire("1135209", {
                              svar1: null == W ? void 0 : W.p_grade,
                              svar2: (0, X.j)(q),
                              svar3: "首次上线动画",
                              svar4: "炫耀一下",
                            }));
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function () {
                return t.apply(this, arguments);
              });
          return (0, F.jsx)(
            e6,
            ne(
              ne({}, e),
              {},
              {
                onClose: $,
                zIndex: 999,
                maskOpacity: 0.8,
                children: (0, F.jsxs)("div", {
                  className: tN().first_dialog_wrap,
                  children: [
                    (0, F.jsx)("div", {
                      className: tN().close,
                      onClick: function () {
                        if (j.current) {
                          $();
                          return;
                        }
                        (C(!0),
                          I(!0),
                          B(!1),
                          ee.Z.fire("1135209", {
                            svar1: null == W ? void 0 : W.p_grade,
                            svar2: (0, X.j)(q),
                            svar3: "首次上线动画",
                            svar4: "跳过动画",
                          }));
                      },
                      children: k ? "关闭" : "跳过动画",
                    }),
                    (0, F.jsxs)(
                      "div",
                      {
                        className: ei()(
                          tN().one_wrap,
                          ((n = {}),
                          (0, v.Z)(n, tN().one_wrap_skipped, f),
                          (0, v.Z)(n, tN().one_wrap_burst, b),
                          (0, v.Z)(n, tN().one_wrap_hidden, k),
                          n),
                        ),
                        children: [
                          (0, F.jsx)("div", {
                            className: tN().avatar_wrap,
                            children: (0, F.jsx)("img", {
                              src: G.avatar,
                              className: tN().avatar,
                              alt: "",
                            }),
                          }),
                          (0, F.jsx)("div", {
                            className: tN().name,
                            children: G.nickname,
                          }),
                          (0, F.jsxs)("div", {
                            className: ei()(tN().block, tN().block_1),
                            children: [
                              (0, F.jsx)("div", {
                                className: tN().label,
                                children: "我们相遇在",
                              }),
                              (0, F.jsx)("div", {
                                className: tN().value,
                                children: ni(null == W ? void 0 : W.reg_time),
                              }),
                            ],
                          }),
                          (0, F.jsxs)("div", {
                            className: ei()(tN().block, tN().block_2),
                            children: [
                              (0, F.jsx)("div", {
                                className: tN().label,
                                children: "你已在这里听歌",
                              }),
                              (0, F.jsxs)("div", {
                                className: tN().value,
                                children: [
                                  null != W && W.duration
                                    ? Math.floor(
                                        (null == W ? void 0 : W.duration) / 60,
                                      )
                                    : "0",
                                  "小时",
                                ],
                              }),
                            ],
                          }),
                          (0, F.jsxs)("div", {
                            className: ei()(tN().block, tN().block_3),
                            children: [
                              (0, F.jsxs)("div", {
                                className: tN().label,
                                children: [
                                  "你的听歌数据在",
                                  (0, L.n4)(null == W ? void 0 : W.rank_type, {
                                    city_name: null == W ? void 0 : W.city_name,
                                    province_name:
                                      null == W ? void 0 : W.province_name,
                                  }),
                                ],
                              }),
                              (0, F.jsx)("div", {
                                className: tN().value,
                                children:
                                  null != W && W.rank
                                    ? "第".concat(
                                        null == W ? void 0 : W.rank,
                                        "名",
                                      )
                                    : null != W && W.rank_percent
                                      ? "TOP ".concat(
                                          null == W ? void 0 : W.rank_percent,
                                          "%",
                                        )
                                      : "计算中",
                              }),
                            ],
                          }),
                        ],
                      },
                      R,
                    ),
                    !M.hc &&
                      S &&
                      V &&
                      (0, F.jsx)(
                        "div",
                        {
                          className: ei()(
                            tN().lottie_wrap,
                            (0, v.Z)({}, tN().lottie_wrap_hidden, !k),
                          ),
                          children: (0, F.jsx)(tS, {
                            lottieName: "first",
                            animationData: V,
                            show: k,
                            preloadWhileHidden: !0,
                            restartOnShow: !0,
                            fadeIn: !0,
                            loop: !1,
                            onError: function () {
                              return B(!1);
                            },
                          }),
                        },
                        R,
                      ),
                    (0, F.jsx)("div", {
                      className: ei()(
                        tN().two_wrap,
                        (0, v.Z)({}, tN().two_wrap_visible, k),
                      ),
                      children: (0, F.jsxs)("div", {
                        className: ei()(
                          tN().static_content,
                          tN().second_screen,
                          (0, v.Z)({}, tN().static_content_visible, O),
                        ),
                        style: {
                          "--static-content-fade-duration": "".concat(
                            500,
                            "ms",
                          ),
                        },
                        children: [
                          (0, F.jsx)("div", {
                            className: tN().medal,
                            style: { opacity: T ? 1 : 0 },
                            children: (0, F.jsx)(J, {
                              data: z,
                              width: 450,
                              height: 450,
                            }),
                          }),
                          (0, F.jsx)("div", {
                            className: tN().name,
                            children: s
                              ? "恭喜酷狗听歌等级升至Lv.".concat(
                                  null == W ? void 0 : W.p_grade,
                                  "!",
                                )
                              : "你的专属听歌等级勋章",
                          }),
                          (null == z ? void 0 : z.had_user_num) > 0 &&
                            (0, F.jsx)("div", {
                              className: tN().tips,
                              children: s
                                ? "仅".concat(
                                    na(null == z ? void 0 : z.had_user_num),
                                    "人达成成就",
                                  )
                                : "仅".concat(
                                    na(null == z ? void 0 : z.had_user_num),
                                    "人达到此等级",
                                  ),
                            }),
                          (0, F.jsxs)("div", {
                            className: tN().user_info,
                            children: [
                              (0, F.jsx)("img", {
                                src: G.avatar,
                                className: tN().avatar,
                                alt: "",
                              }),
                              (0, F.jsx)("div", {
                                className: tN().nickname,
                                children: G.nickname,
                              }),
                            ],
                          }),
                          (0, F.jsxs)("div", {
                            className: tN().btn_wrap,
                            children: [
                              (0, F.jsx)("div", {
                                className: tN().btn,
                                onClick: en,
                                children: "炫耀一下",
                              }),
                              (0, F.jsx)("div", {
                                className: ei()(tN().btn, tN().btn_replay),
                                style: { backgroundColor: l, color: "#000" },
                                onClick: s
                                  ? function () {
                                      var e = z.type,
                                        t = z.classify_id,
                                        n = z.level,
                                        r =
                                          "https://activity.kugou.com/page/v-21847b5d/detail.html?isHideTitleBar=1&hreffrom="
                                            .concat(nt, "&type=")
                                            .concat(e, "&classifyId=")
                                            .concat(
                                              t,
                                              "&isNew=0&isHide=0&level=",
                                            )
                                            .concat(n || "");
                                      (0, M.Yo)(r);
                                    }
                                  : et,
                                children: s ? "查看勋章" : "再看一遍",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              },
            ),
          );
        },
        nl = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new Promise(function (t) {
            (e8(no, e), t(!0));
          });
        },
        ns = function () {
          var e;
          return {
            initListenLoginStatus:
              ((e = (0, p.Z)(
                g().mark(function e() {
                  var t,
                    n,
                    r,
                    i,
                    a = arguments;
                  return g().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = (t =
                              a.length > 0 && void 0 !== a[0] ? a[0] : {})
                              .cbInit),
                            (i =
                              void 0 === (r = t.isNeedAutoOpenKgDialog) || r),
                            e.abrupt(
                              "return",
                              new Promise(
                                (function () {
                                  var e = (0, p.Z)(
                                    g().mark(function e(t, r) {
                                      var a, o;
                                      return g().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (e.next = 2),
                                                (0, M.KD)(!0)
                                              );
                                            case 2:
                                              if (((a = e.sent), M.DT)) {
                                                e.next = 7;
                                                break;
                                              }
                                              (i
                                                ? (eq.showOpenKgDialog({
                                                    fullPath: 1,
                                                  }),
                                                  eq.closeClientLoading())
                                                : t(!0),
                                                (e.next = 13));
                                              break;
                                            case 7:
                                              if (a.token) {
                                                e.next = 13;
                                                break;
                                              }
                                              return (
                                                (o = eq.showLoginDialog()),
                                                x.my.KgWebMobileCall(
                                                  "KgWebMobileCall.userStatus",
                                                  (0, p.Z)(
                                                    g().mark(function e() {
                                                      var t;
                                                      return g().wrap(function (
                                                        e,
                                                      ) {
                                                        for (;;)
                                                          switch (
                                                            (e.prev = e.next)
                                                          ) {
                                                            case 0:
                                                              return (
                                                                (e.next = 2),
                                                                (0, M.KD)(!0)
                                                              );
                                                            case 2:
                                                              (t = e.sent) &&
                                                                (t.token ||
                                                                  t.userid) &&
                                                                (o && o.close(),
                                                                n && n());
                                                            case 4:
                                                            case "end":
                                                              return e.stop();
                                                          }
                                                      }, e);
                                                    }),
                                                  ),
                                                ),
                                                eq.closeClientLoading(),
                                                t(!1),
                                                e.abrupt("return")
                                              );
                                            case 13:
                                              a.token ? t(!0) : t(!1);
                                            case 14:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    }),
                                  );
                                  return function (t, n) {
                                    return e.apply(this, arguments);
                                  };
                                })(),
                              ),
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function () {
                return e.apply(this, arguments);
              }),
          };
        },
        nc = n(23443),
        nu = n.n(nc),
        nd = n(76375),
        nA = n.n(nd),
        n_ = function (e, t) {
          var n = t.from,
            r = void 0 === n ? 0 : n,
            i = t.duration,
            a = void 0 === i ? 1200 : i,
            o = t.delay,
            l = void 0 === o ? 0 : o,
            s = t.enabled,
            c = void 0 === s || s,
            u = (0, h.useState)(c ? r : e),
            d = u[0],
            A = u[1],
            _ = (0, h.useRef)(e);
          return (
            (_.current = e),
            (0, h.useEffect)(
              function () {
                if (!c) {
                  A(e);
                  return;
                }
                A(r);
                var t = null,
                  n = null,
                  i = setTimeout(function () {
                    t = requestAnimationFrame(function e(i) {
                      null === n && (n = i);
                      var o = Math.min((i - n) / a, 1);
                      (A(
                        Math.round(
                          r + (_.current - r) * (1 - Math.pow(1 - o, 3)),
                        ),
                      ),
                        o < 1 && (t = requestAnimationFrame(e)));
                    });
                  }, l);
                return function () {
                  (clearTimeout(i), t && cancelAnimationFrame(t));
                };
              },
              [e, r, a, l, c],
            ),
            d
          );
        },
        np = (0, h.memo)(function (e) {
          var t = e.value,
            n = e.transitionDuration,
            r = Math.abs(Number(t) || 0) % 10;
          return (0, F.jsx)("span", {
            className: nA().digit_wrap,
            children: (0, F.jsx)("span", {
              className: nA().digit_track,
              style: {
                transform: "translate3d(0, -".concat(10 * r, "%, 0)"),
                transitionDuration: "".concat(void 0 === n ? 180 : n, "ms"),
              },
              children: Array.from({ length: 10 }, function (e, t) {
                return (0, F.jsx)(
                  "span",
                  { className: ei()(nA().digit, "digit_item"), children: t },
                  t,
                );
              }),
            }),
          });
        }),
        nv = (0, h.memo)(function (e) {
          var t = e.value,
            n = void 0 === t ? 0 : t,
            r = e.from,
            i = e.direction,
            a = void 0 === i ? "up" : i,
            o = e.duration,
            l = e.delay,
            s = e.prefix,
            c = void 0 === s ? "" : s,
            u = e.suffix,
            d = void 0 === u ? "" : u,
            A = e.animate,
            _ = e.format,
            p = e.className,
            v = e.style,
            f = e.digitTransition,
            g = void 0 === f ? 180 : f,
            C = (0, h.useMemo)(
              function () {
                var e = Number(n);
                return Number.isFinite(e) ? Math.round(e) : 0;
              },
              [n],
            ),
            m = (0, h.useMemo)(
              function () {
                var e, t, n;
                return (
                  (e = C),
                  (t = r),
                  (n = a),
                  null != t
                    ? t
                    : "down" === n
                      ? e <= 0
                        ? 10
                        : e <= 100
                          ? Math.max(e + 1, 100)
                          : Math.min(
                              Math.pow(10, String(e).length) - 1,
                              e + Math.ceil(0.5 * e),
                            )
                      : 0
                );
              },
              [C, r, a],
            ),
            b = n_(C, {
              from: m,
              duration: void 0 === o ? 1200 : o,
              delay: void 0 === l ? 0 : l,
              enabled: void 0 === A || A,
            }),
            x = (0, h.useMemo)(
              function () {
                return _ ? _(b) : String(Math.abs(b));
              },
              [b, _],
            ).split("");
          return (0, F.jsxs)("span", {
            className: ei()(nA().number_flow, p),
            style: v,
            children: [
              c
                ? (0, F.jsx)("span", { className: nA().affix, children: c })
                : null,
              x.map(function (e, t) {
                return /\d/.test(e)
                  ? (0, F.jsx)(
                      np,
                      { value: e, transitionDuration: g },
                      "d-".concat(t, "-").concat(x.length),
                    )
                  : (0, F.jsx)(
                      "span",
                      { className: nA().separator, children: e },
                      "s-".concat(t),
                    );
              }),
              d
                ? (0, F.jsx)("span", { className: nA().affix, children: d })
                : null,
            ],
          });
        });
      function nf(e, t) {
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
      function ng(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? nf(Object(n), !0).forEach(function (t) {
                (0, v.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : nf(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var nh = (0, M.Dv)("hreffrom") || "",
        nC =
          ((o = (0, p.Z)(
            g().mark(function e() {
              var t;
              return g().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        n.e(120).then(n.t.bind(n, 80120, 19))
                      );
                    case 2:
                      return ((t = e.sent), e.abrupt("return", t.default));
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          )),
          function () {
            return o.apply(this, arguments);
          }),
        nm = function (e) {
          var t,
            n,
            r,
            i,
            a,
            o,
            l,
            s,
            c,
            u,
            d,
            A,
            f,
            C,
            m,
            b,
            x,
            w,
            y,
            k,
            I,
            j,
            N,
            O,
            E,
            D,
            R = e.data,
            P = e.textColor,
            U = e.bgColor,
            S = e.shareConfig;
          e.btnColor;
          var B = (0, h.useRef)(null),
            Y = (0, h.useRef)(null),
            V = (0, h.useRef)(null),
            Q = (0, h.useState)(!1),
            T = Q[0],
            K = Q[1],
            G = H(!1),
            W = (0, _.Z)(G, 3),
            z = W[0],
            J = W[1],
            q = W[2],
            $ = (0, h.useState)(!1),
            et = $[0],
            en = $[1];
          V.current = J;
          var er = (0, h.useState)(0),
            ea = er[0],
            eo = er[1],
            el = (0, h.useState)(!0),
            es = el[0],
            ec = el[1],
            eu = (0, h.useState)(!1),
            ed = eu[0],
            eA = eu[1],
            e_ = (0, h.useState)(null),
            ep = e_[0],
            ev = e_[1],
            ef = M.hc || !es,
            eg = (0, h.useMemo)(
              function () {
                var e = null == R ? void 0 : R.user;
                return (
                  e && (e.avatar = Z()(e.avatar) || L.yo),
                  ng(ng({}, R), {}, { user: e })
                );
              },
              [R],
            ),
            eh = eg.user,
            eC = eg.grade,
            em = eg.vip,
            eb = eg.medal,
            ex = eg.rank,
            ew = (0, h.useMemo)(
              function () {
                return (0, X.j)(em);
              },
              [em],
            );
          ((0, h.useEffect)(
            function () {
              if (M.hc || !es) {
                ev(null);
                return;
              }
              var e = !1;
              return (
                ev(null),
                nC()
                  .then(function (t) {
                    e || ev(t);
                  })
                  .catch(function (t) {
                    (console.error("prepareFirstLottie error:", t),
                      e || ec(!1));
                  }),
                function () {
                  e = !0;
                }
              );
            },
            [ea, es],
          ),
            (0, h.useEffect)(
              function () {
                if (T || ef) {
                  eA(!1);
                  return;
                }
                var e = setTimeout(function () {
                  eA(!0);
                }, 1250);
                return function () {
                  clearTimeout(e);
                };
              },
              [T, ef, ea],
            ),
            (0, h.useEffect)(
              function () {
                if (!T && ef) {
                  var e = setTimeout(function () {
                    V.current(!0);
                  }, 2250);
                  return function () {
                    clearTimeout(e);
                  };
                }
              },
              [T, ef, ea],
            ),
            (0, h.useEffect)(
              function () {
                if (!z) {
                  en(!1);
                  return;
                }
                return (
                  (Y.current = setTimeout(function () {
                    en(!0);
                  }, 0)),
                  function () {
                    Y.current && (clearTimeout(Y.current), (Y.current = null));
                  }
                );
              },
              [z, T, ef, ea],
            ),
            (0, h.useEffect)(function () {
              return (
                ee.Z.fire("1135208", {
                  svar1: null == eC ? void 0 : eC.p_grade,
                  svar2: (0, X.j)(em),
                  svar3: "首次上线动画",
                }),
                function () {
                  (B.current && clearTimeout(B.current),
                    Y.current && clearTimeout(Y.current));
                }
              );
            }, []));
          var ey = function () {
              (arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                e.onCancel && e.onCancel(),
                e.onClose && e.onClose());
            },
            ek = function () {
              if (q.current) {
                (ey(), e.nextAminate && e.nextAminate());
                return;
              }
              (K(!0),
                J(!0),
                ec(!1),
                ee.Z.fire("1135209", {
                  svar1: null == eC ? void 0 : eC.p_grade,
                  svar2: (0, X.j)(em),
                  svar3: "首次上线动画",
                  svar4: "跳过动画",
                }));
            };
          (0, h.useCallback)(
            function () {
              (B.current && (clearTimeout(B.current), (B.current = null)),
                K(!1),
                J(!1),
                en(!1),
                ec(!0),
                eA(!1),
                eo(function (e) {
                  return e + 1;
                }),
                ee.Z.fire("1135209", {
                  svar1: null == eC ? void 0 : eC.p_grade,
                  svar2: (0, X.j)(em),
                  svar3: "首次上线动画",
                  svar4: "再看一遍",
                }));
            },
            [J, null == eC ? void 0 : eC.p_grade, em],
          );
          var eI = function (e) {
              var t = null == ex ? void 0 : ex.area_name;
              return 1 === e
                ? "全国总榜"
                : 2 === e
                  ? "全国年榜"
                  : 3 === e
                    ? "".concat(t, "月榜")
                    : "".concat(t, "周榜");
            },
            ej = function () {
              return null == ex ? void 0 : ex.max_rank;
            },
            eN = (0, h.useCallback)(
              function () {
                T || q.current || J(!0);
              },
              [T, J],
            ),
            eO =
              ((t = (0, p.Z)(
                g().mark(function e() {
                  var t, n, r, i, a, o;
                  return g().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = Number(new Date().valueOf()).toString(32)),
                            (e.next = 3),
                            (0, M.KD)()
                          );
                        case 3:
                          ((n = e.sent),
                            (r = eb.type),
                            (i = eb.classify_id),
                            (a = eb.level),
                            (o =
                              Number(
                                (null == n ? void 0 : n.userid) || "",
                              ).toString(32) + t),
                            t8({
                              type: "achievement_detail",
                              data: ng({}, R),
                              textColor: P,
                              posterBgColor: U,
                              qrcodeLink:
                                "https://activity.kugou.com/page/v-21847b5d/detail.html?isHideTitleBar=1&hreffrom="
                                  .concat(nh, "&type=")
                                  .concat(r, "&classifyId=")
                                  .concat(i, "&level=")
                                  .concat(a || "", "&shareId=")
                                  .concat(o),
                              shareConfig: S,
                            }),
                            ee.Z.fire("1135209", {
                              svar1: null == eC ? void 0 : eC.p_grade,
                              svar2: (0, X.j)(em),
                              svar3: "首次上线动画",
                              svar4: "炫耀一下",
                            }));
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function () {
                return t.apply(this, arguments);
              });
          return (0, F.jsx)(
            e6,
            ng(
              ng({}, e),
              {},
              {
                onClose: ey,
                zIndex: 999,
                maskOpacity: 0.8,
                children: (0, F.jsxs)("div", {
                  className: nu().first_dialog_wrap,
                  children: [
                    (0, F.jsx)("div", {
                      className: nu().close,
                      onClick: ek,
                      children: z ? "" : "跳过动画",
                    }),
                    (0, F.jsxs)(
                      "div",
                      {
                        className: ei()(
                          nu().one_wrap,
                          ((n = {}),
                          (0, v.Z)(n, nu().one_wrap_skipped, T),
                          (0, v.Z)(n, nu().one_wrap_hidden, z),
                          n),
                        ),
                        children: [
                          (0, F.jsxs)("div", {
                            className: nu().rank_group,
                            children: [
                              (0, F.jsx)("div", {
                                className: nu().rank_title,
                                children: (0, F.jsx)("p", {
                                  children: eI(
                                    null == ex ? void 0 : ex.rank_type,
                                  ),
                                }),
                              }),
                              (0, F.jsxs)("div", {
                                className: ei()(
                                  nu().rank_content,
                                  (0, v.Z)({}, nu().rank_content_lottie, ed),
                                ),
                                children: [
                                  (0, F.jsx)("div", {
                                    className: nu().l,
                                    children: (0, F.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "70",
                                      height: "141",
                                      viewBox: "0 0 70 141",
                                      fill: "none",
                                      children: (0, F.jsx)("path", {
                                        d: "M0.0654987 58.1734C0.0264141 58.5858 -0.0326801 58.8847 0.017372 59.1686C0.460581 63.2675 1.75129 67.0998 3.66333 70.6512C4.49297 72.1857 5.41174 73.5917 6.49317 74.9689C7.79978 76.6494 9.51183 77.7983 11.6516 77.8852C11.8979 77.906 12.1327 78.0081 12.3219 78.1767C12.806 79.0196 13.4527 79.8338 13.6114 80.734C14.6672 85.7702 15.974 90.645 17.9849 95.3914C18.0692 95.5522 18.0992 95.7225 17.9766 95.9783C17.8181 95.7135 17.6054 95.4584 17.4925 95.1354C16.2763 92.0425 14.7541 89.1165 12.3228 86.7647C9.36078 83.917 6.02707 81.8372 1.93546 81.1663C1.81701 81.1287 1.70857 81.1478 1.59012 81.1101C1.5359 81.1197 1.48167 81.1293 1.27481 81.2243C1.3742 81.7879 1.42937 82.4179 1.69071 82.9489C3.70309 87.7034 6.49678 91.7934 10.5615 94.8481C12.4313 96.2578 14.5178 96.9937 16.9215 96.3358C17.1384 96.2975 17.5379 96.3441 17.6764 96.4953C18.3131 97.2527 19.0583 97.991 19.5523 98.8907C22.0217 103.678 24.7824 108.237 28.0941 112.412C28.3068 112.667 28.4739 112.98 28.6866 113.236C28.5882 113.311 28.5439 113.378 28.4455 113.454C28.1043 113.104 27.7204 112.829 27.4877 112.46C25.7905 110.15 23.9236 108.1 21.4777 106.617C17.9613 104.452 14.2292 103.601 10.1688 104.375C9.08444 104.566 9.04953 104.685 9.57362 105.755C10.5075 107.564 11.8352 109.07 13.31 110.436C15.377 112.329 17.588 114.089 20.3141 114.942C22.804 115.724 25.279 115.81 27.5582 114.129C27.7116 114.047 27.9185 113.952 28.0369 113.99C28.8404 114.425 29.8315 114.656 30.3947 115.313C33.607 118.924 37.0953 122.197 41.0077 125.045C41.1513 125.142 41.285 125.254 41.4062 125.38C41.4704 125.427 41.4262 125.494 41.5498 125.878C40.9886 125.571 40.5697 125.415 40.2386 125.122C38.0283 123.367 35.6024 121.997 32.793 121.622C28.5619 121.089 24.7335 122.228 21.1782 124.598C21.0791 124.67 21.0349 124.737 20.8038 125.012C21.4647 125.589 22.0279 126.247 22.723 126.701C27.0636 129.419 31.6735 130.809 36.7005 129.81C38.1543 129.506 39.4533 128.681 40.3743 127.477C41.1915 126.405 42.3744 126.138 43.6314 126.903C46.9701 129.022 50.5375 130.713 54.2546 131.937L56.7431 132.711C56.7096 132.838 56.7196 132.895 56.6847 133.014C56.2859 132.971 55.8963 132.981 55.5952 132.859C53.5591 132.114 51.5026 131.548 49.3349 131.642C44.8979 131.843 41.3428 133.921 38.2615 137.078C37.7438 137.629 37.2367 138.241 36.587 138.995C37.4997 139.415 38.1955 139.874 39.0133 140.073C43.4118 141.216 47.7636 141.143 51.945 139.13C53.9502 138.137 55.5414 136.698 56.2722 134.479C56.523 133.682 58.016 132.955 58.9429 133.138C62.0292 133.815 65.2081 134.065 68.337 134.032C68.6188 134.045 68.8899 133.997 69.2153 133.94C69.175 133.078 68.7696 132.681 67.9912 132.705C64.8499 132.725 61.7107 132.382 58.6306 131.684C57.0579 131.326 56.3028 130.531 56.2315 128.858C56.0355 125.527 54.8935 122.538 53.0124 119.796C51.0099 116.921 48.2232 114.74 45.0257 113.545C44.7888 113.469 44.4984 113.408 44.0795 113.252C44.2424 113.858 44.376 114.299 44.5096 114.74C45.7309 118.179 46.6812 121.665 48.4254 124.899C49.7492 127.333 51.6187 129.036 54.1821 129.918C54.5361 130.05 54.9075 130.122 55.2817 130.129C56.0407 129.996 56.2185 130.37 56.3572 131.156C56.0668 131.095 55.84 131.076 55.6031 131.001C50.8736 129.647 46.3748 127.502 42.2835 124.648C41.193 123.854 41.1168 122.471 41.3176 121.39C42.1755 116.426 41.0806 111.803 38.7495 107.46C37.5697 105.23 35.9458 103.313 34.0352 101.672C33.8432 101.535 33.6606 101.45 33.3401 101.218C33.4056 102.54 33.451 103.749 33.5413 104.895C33.7174 107.185 33.8431 109.483 34.1315 111.753C34.5144 114.875 35.2769 117.931 37.5773 120.197C38.262 120.888 39.1056 121.55 40.0183 121.971C40.7622 122.362 40.95 122.793 40.888 123.732C39.906 122.919 39.0082 122.266 38.1546 121.547C35.0019 118.908 32.0955 116.059 29.6125 112.78C28.8822 111.809 28.9795 110.458 29.4172 109.452C32.5674 101.931 31.2191 94.9185 27.1198 88.157C27.0355 87.9963 26.9071 87.9018 26.8235 87.7452C26.8135 87.6884 26.7051 87.7075 26.5866 87.6698C25.7537 92.4578 24.3354 97.1191 24.7546 102.033C24.9998 105.009 25.9198 107.69 28.2343 109.719C28.5648 110.008 28.565 110.644 28.6986 111.084C28.6002 111.16 28.4917 111.179 28.4475 111.246L27.1441 109.56C24.1289 105.251 21.5512 100.63 19.4537 95.7722C19.3602 95.5587 19.2566 95.2885 19.2808 95.1086C19.6242 93.8857 19.7314 92.5915 20.7856 91.5945C22.7343 89.6244 23.5552 86.9876 24.1927 84.262C25.2073 79.8475 24.6799 75.5879 23.3159 71.3629C23.2959 71.2494 23.2255 71.1447 23.1481 71.0454C23.0497 71.1213 22.9413 71.1405 22.9506 71.1932C21.4949 74.3516 19.8565 77.4252 18.5254 80.6787C17.2224 83.7517 16.7246 86.9753 17.8074 90.2631C18.0346 90.9172 18.3267 91.6225 18.7545 92.124C19.4362 92.8192 19.146 93.393 18.7486 94.3327C18.1059 92.5896 17.4482 91.0791 17.0081 89.5344C15.9235 85.603 15.0124 81.7037 14.0369 77.7572C13.844 76.9801 14.6552 74.9221 15.2658 74.5803C18.4464 72.9156 20.169 70.0028 21.3785 66.7164C22.6696 63.2357 22.9283 59.6528 22.4599 56.0225L22.3505 55.4021C22.3405 55.3453 22.2763 55.2981 22.192 55.1374C21.8283 55.6112 21.3997 56.0339 21.0353 56.5037C19.3776 58.5395 17.6597 60.5275 16.1291 62.6496C14.2929 65.2354 13.3555 68.1854 13.7142 71.488C13.8087 72.341 14.0124 73.179 14.2588 73.9425C14.5609 74.7046 14.2407 75.1081 13.6894 75.7865C13.5307 74.8862 13.3578 74.2226 13.2926 73.5359C12.7349 68.4704 12.404 63.4235 12.6835 58.3276C12.7087 57.6314 12.9603 56.9687 13.397 56.4486C13.8338 55.9285 14.4295 55.582 15.0861 55.4663C18.1163 54.8734 20.1734 52.8842 21.877 50.4974C23.9481 47.6361 24.8765 44.3406 25.325 40.8372C25.315 40.7804 25.3453 40.658 25.3253 40.5444C25.316 40.4917 25.2517 40.4445 25.2424 40.3918C25.1882 40.4014 25.1233 40.3501 25.0691 40.3596C22.4677 42.0936 19.7347 43.7379 17.2137 45.6333C15.0026 47.3611 13.5663 49.7008 13.4754 52.6729C13.4764 53.3125 13.4773 53.952 13.6502 54.6156C13.8332 55.336 13.5037 55.6868 12.9031 56.0854C12.863 55.8583 12.7688 55.6407 12.7937 55.4649C13.2112 50.2369 14.0982 45.069 15.4429 40.0291C15.6139 39.4136 17.1018 38.3401 17.7421 38.4613C22.1048 39.0844 25.1883 36.9142 27.8165 33.7247C29.1247 32.1041 30.1243 30.2356 30.7628 28.217C30.1664 28.3222 29.6142 28.361 29.1362 28.5038C26.4606 29.2055 23.7264 29.5748 21.2926 30.9907C18.8 32.4128 17.2005 34.4384 17.0615 37.4775C17.0275 38.2361 16.5396 38.3222 15.9189 38.6072C16.0123 38.1852 16.0271 37.9526 16.0955 37.7064C17.273 33.6656 18.7924 29.7472 20.6358 25.9971C21.015 25.2947 22.4089 24.6391 23.1196 24.865C27.9322 26.4541 31.7696 24.7321 34.9923 21.0865C35.8395 20.1845 36.4198 19.0369 37.1286 17.9837C37.0544 17.8797 36.9909 17.8366 36.9159 17.7285C36.4728 17.7523 35.9656 17.7289 35.5211 17.7445C33.1164 17.7629 30.6716 17.5543 28.336 18.2588C25.572 19.0932 23.3751 20.5844 22.6397 23.7287C22.478 24.397 22.4238 24.4065 21.3636 24.4179C22.1757 22.9994 22.8351 21.6664 23.6804 20.4135C24.9212 18.5724 26.1712 16.7841 27.4654 14.9294C27.6881 14.6371 27.9764 14.4068 28.3055 14.2586C32.3731 13.2529 35.0907 10.5702 36.8304 6.78053C37.7201 4.87777 38.2673 2.816 38.4451 0.696499C38.4693 0.516624 38.4292 0.289538 38.4341 0.00017479C37.3206 0.660623 36.3056 1.24518 35.2867 1.83042C32.8528 3.24633 30.4894 4.7669 28.8562 7.25836C27.5813 9.22254 26.8786 11.2614 27.5223 13.6441C27.5523 13.8144 27.4932 14.1133 27.3506 14.2556C24.3873 18.0812 21.9285 22.2318 19.7841 26.557C19.7492 26.6761 19.5926 26.7622 19.5623 26.8846C19.4942 26.8381 19.3858 26.8572 19.3215 26.81C19.449 26.2649 19.4527 25.6287 19.7187 25.2347C22.3262 20.9994 23.1288 16.3338 22.5872 11.3826C22.3762 9.21212 21.8328 7.10443 21.4057 4.97627C21.3463 4.63969 21.1336 4.38452 20.8623 3.79682C19.996 5.22484 19.1841 6.35056 18.5696 7.62129C16.8441 11.1743 15.7789 14.9622 16.0494 19.0329C16.2052 21.5016 16.7205 23.7899 18.6497 25.5361C18.7882 25.6873 18.9459 25.948 18.9217 26.1279C19.0114 27.2703 19.0368 28.3654 18.5107 29.5035C16.5499 33.6249 15.1396 37.992 14.0197 42.4208L13.8099 43.1561C13.7557 43.1656 13.638 43.132 13.5838 43.1416C13.6221 42.7251 13.5335 42.2223 13.6361 41.8529C15.1929 37.3429 15.1683 32.7646 14.1323 28.1348C13.4595 25.2931 12.3327 22.7071 10.6287 20.3358C10.5452 20.1791 10.416 20.0806 10.204 19.8295C10.0122 20.3274 9.74312 20.7261 9.64982 21.1481C8.1572 26.6336 7.90676 32.1886 9.39721 37.7878C9.87447 39.6508 10.9976 41.2718 12.5468 42.3335C12.7395 42.4751 13.0064 42.7208 12.9815 42.8966C13.1803 44.0239 13.4233 45.0849 13.1876 46.2846C12.2504 50.7983 11.7645 55.3579 11.7349 59.9457C11.7442 59.9984 11.71 60.1215 11.4489 60.2261C11.3695 59.776 11.1717 59.2882 11.1466 58.8285C11.0257 56.2408 11.1752 53.6012 10.8375 51.0516C10.132 45.7823 7.64676 41.5167 3.63117 38.1063C3.56693 38.0591 3.4585 38.0782 3.2123 37.9502C3.13414 38.7751 2.93752 39.5624 2.91357 40.3777C2.80136 45.4484 3.55596 50.3621 5.5476 54.999C6.43242 57.1636 7.89853 58.8201 10.1608 59.5793C10.3342 59.6115 10.5262 59.7491 10.5462 59.8626C10.8976 60.9045 11.5295 61.9513 11.5456 62.9937C11.6844 67.903 12.2571 72.7359 12.9916 77.536C13.0109 77.6455 12.9875 77.8294 13.0068 77.9389C12.9526 77.9484 12.8441 77.9676 12.7999 78.0339C12.6763 77.6501 12.4343 77.2287 12.3642 76.8313C11.9229 74.0115 11.4809 71.1877 10.2456 68.6209C8.06642 64.1884 4.99187 60.7249 0.622842 58.4807C0.5486 58.3767 0.365916 58.2918 0.0654987 58.1734Z",
                                        fill: "rgba(153, 152, 153, 1)",
                                      }),
                                    }),
                                  }),
                                  (0, F.jsxs)("div", {
                                    className: nu().c,
                                    children: [
                                      (0, F.jsx)("p", {
                                        className: nu().top_text,
                                        children: "TOP",
                                      }),
                                      (0, F.jsx)("p", {
                                        children:
                                          ed || T
                                            ? (0, F.jsx)(nv, {
                                                value:
                                                  null == ex ? void 0 : ex.rank,
                                                direction: "down",
                                                from: Number(ej()),
                                                duration: 1e3,
                                                animate: ed && !T,
                                              })
                                            : ej(),
                                      }),
                                    ],
                                  }),
                                  (0, F.jsx)("div", {
                                    className: nu().r,
                                    children: (0, F.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "70",
                                      height: "141",
                                      viewBox: "0 0 70 141",
                                      fill: "none",
                                      children: (0, F.jsx)("path", {
                                        d: "M69.1493 58.1734C69.1884 58.5858 69.2475 58.8847 69.1975 59.1686C68.7543 63.2675 67.4636 67.0998 65.5515 70.6512C64.7219 72.1857 63.8031 73.5917 62.7217 74.9689C61.4151 76.6494 59.703 77.7983 57.5633 77.8852C57.317 77.906 57.0822 78.0081 56.8929 78.1767C56.4089 79.0196 55.7621 79.8338 55.6034 80.734C54.5477 85.7702 53.2409 90.645 51.2299 95.3914C51.1457 95.5522 51.1156 95.7225 51.2383 95.9783C51.3967 95.7135 51.6095 95.4584 51.7223 95.1354C52.9385 92.0425 54.4608 89.1165 56.8921 86.7647C59.8541 83.917 63.1878 81.8372 67.2794 81.1663C67.3978 81.1287 67.5063 81.1478 67.6247 81.1101C67.6789 81.1197 67.7332 81.1293 67.94 81.2243C67.8406 81.7879 67.7855 82.4179 67.5241 82.9489C65.5118 87.7034 62.7181 91.7934 58.6534 94.8481C56.7835 96.2578 54.6971 96.9937 52.2933 96.3358C52.0765 96.2975 51.6769 96.3441 51.5384 96.4953C50.9017 97.2527 50.1566 97.991 49.6625 98.8907C47.1932 103.678 44.4324 108.237 41.1207 112.412C40.908 112.667 40.741 112.98 40.5283 113.236C40.6267 113.311 40.6709 113.378 40.7693 113.454C41.1105 113.104 41.4945 112.829 41.7272 112.46C43.4243 110.15 45.2912 108.1 47.7371 106.617C51.2536 104.452 54.9856 103.601 59.046 104.375C60.1304 104.566 60.1653 104.685 59.6412 105.755C58.7073 107.564 57.3797 109.07 55.9048 110.436C53.8379 112.329 51.6269 114.089 48.9008 114.942C46.4109 115.724 43.9358 115.81 41.6566 114.129C41.5033 114.047 41.2964 113.952 41.1779 113.99C40.3744 114.425 39.3833 114.656 38.8201 115.313C35.6078 118.924 32.1195 122.197 28.2072 125.045C28.0635 125.142 27.9299 125.254 27.8086 125.38C27.7444 125.427 27.7886 125.494 27.665 125.878C28.2263 125.571 28.6451 125.415 28.9763 125.122C31.1866 123.367 33.6125 121.997 36.4219 121.622C40.653 121.089 44.4813 122.228 48.0366 124.598C48.1358 124.67 48.18 124.737 48.411 125.012C47.7502 125.589 47.187 126.247 46.4919 126.701C42.1512 129.419 37.5413 130.809 32.5143 129.81C31.0606 129.506 29.7616 128.681 28.8405 127.477C28.0233 126.405 26.8405 126.138 25.5835 126.903C22.2448 129.022 18.6774 130.713 14.9602 131.937L12.4717 132.711C12.5052 132.838 12.4952 132.895 12.5301 133.014C12.929 132.971 13.3185 132.981 13.6196 132.859C15.6558 132.114 17.7122 131.548 19.88 131.642C24.317 131.843 27.872 133.921 30.9533 137.078C31.4711 137.629 31.9781 138.241 32.6278 138.995C31.7151 139.415 31.0193 139.874 30.2016 140.073C25.803 141.216 21.4513 141.143 17.2698 139.13C15.2646 138.137 13.6734 136.698 12.9426 134.479C12.6918 133.682 11.1988 132.955 10.2719 133.138C7.18561 133.815 4.0067 134.065 0.877833 134.032C0.596009 134.045 0.324909 133.997 -0.000411867 133.94C0.0398735 133.078 0.445276 132.681 1.22366 132.705C4.36494 132.725 7.50415 132.382 10.5843 131.684C12.1569 131.326 12.9121 130.531 12.9833 128.858C13.1794 125.527 14.3214 122.538 16.2024 119.796C18.205 116.921 20.9917 114.74 24.1892 113.545C24.4261 113.469 24.7165 113.408 25.1353 113.252C24.9724 113.858 24.8388 114.299 24.7053 114.74C23.4839 118.179 22.5336 121.665 20.7894 124.899C19.4657 127.333 17.5962 129.036 15.0327 129.918C14.6787 130.05 14.3074 130.122 13.9332 130.129C13.1741 129.996 12.9963 130.37 12.8576 131.156C13.148 131.095 13.3749 131.076 13.6118 131.001C18.3412 129.647 22.84 127.502 26.9314 124.648C28.0218 123.854 28.098 122.471 27.8972 121.39C27.0394 116.426 28.1342 111.803 30.4653 107.46C31.6452 105.23 33.269 103.313 35.1796 101.672C35.3716 101.535 35.5543 101.45 35.8747 101.218C35.8093 102.54 35.7639 103.749 35.6735 104.895C35.4975 107.185 35.3717 109.483 35.0833 111.753C34.7004 114.875 33.938 117.931 31.6376 120.197C30.9528 120.888 30.1092 121.55 29.1965 121.971C28.4526 122.362 28.2648 122.793 28.3268 123.732C29.3089 122.919 30.2067 122.266 31.0603 121.547C34.213 118.908 37.1193 116.059 39.6023 112.78C40.3326 111.809 40.2354 110.458 39.7977 109.452C36.6474 101.931 37.9957 94.9185 42.0951 88.157C42.1793 87.9963 42.3078 87.9018 42.3913 87.7452C42.4013 87.6884 42.5098 87.7075 42.6282 87.6698C43.4612 92.4578 44.8795 97.1191 44.4602 102.033C44.2151 105.009 43.2951 107.69 40.9805 109.719C40.6501 110.008 40.6498 110.644 40.5162 111.084C40.6147 111.16 40.7231 111.179 40.7673 111.246L42.0708 109.56C45.086 105.251 47.6636 100.63 49.7611 95.7722C49.8547 95.5587 49.9582 95.2885 49.9341 95.1086C49.5906 93.8857 49.4834 92.5915 48.4293 91.5945C46.4805 89.6244 45.6596 86.9876 45.0221 84.262C44.0075 79.8475 44.535 75.5879 45.8989 71.3629C45.9189 71.2494 45.9893 71.1447 46.0667 71.0454C46.1651 71.1213 46.2736 71.1405 46.2643 71.1932C47.72 74.3516 49.3583 77.4252 50.6894 80.6787C51.9925 83.7517 52.4903 86.9753 51.4074 90.2631C51.1803 90.9172 50.8882 91.6225 50.4603 92.124C49.7787 92.8192 50.0689 93.393 50.4662 94.3327C51.109 92.5896 51.7667 91.0791 52.2068 89.5344C53.2913 85.603 54.2025 81.7037 55.1779 77.7572C55.3708 76.9801 54.5597 74.9221 53.9491 74.5803C50.7685 72.9156 49.0458 70.0028 47.8363 66.7164C46.5453 63.2357 46.2865 59.6528 46.7549 56.0225L46.8643 55.4021C46.8744 55.3453 46.9386 55.2981 47.0228 55.1374C47.3865 55.6112 47.8152 56.0339 48.1796 56.5037C49.8372 58.5395 51.5552 60.5275 53.0858 62.6496C54.922 65.2354 55.8594 68.1854 55.5006 71.488C55.4061 72.341 55.2025 73.179 54.956 73.9425C54.654 74.7046 54.9741 75.1081 55.5254 75.7865C55.6841 74.8862 55.857 74.2226 55.9222 73.5359C56.48 68.4704 56.8108 63.4235 56.5314 58.3276C56.5062 57.6314 56.2545 56.9687 55.8178 56.4486C55.3811 55.9285 54.7854 55.582 54.1288 55.4663C51.0986 54.8734 49.0414 52.8842 47.3378 50.4974C45.2667 47.6361 44.3383 44.3406 43.8899 40.8372C43.8999 40.7804 43.8696 40.658 43.8896 40.5444C43.8989 40.4917 43.9631 40.4445 43.9724 40.3918C44.0266 40.4014 44.0916 40.3501 44.1458 40.3596C46.7471 42.0936 49.4801 43.7379 52.0011 45.6333C54.2122 47.3611 55.6485 49.7008 55.7394 52.6729C55.7385 53.3125 55.7375 53.952 55.5646 54.6156C55.3817 55.336 55.7112 55.6868 56.3118 56.0854C56.3518 55.8583 56.4461 55.6407 56.4212 55.4649C56.0036 50.2369 55.1166 45.069 53.772 40.0291C53.601 39.4136 52.1131 38.3401 51.4727 38.4613C47.11 39.0844 44.0265 36.9142 41.3983 33.7247C40.0902 32.1041 39.0906 30.2356 38.4521 28.217C39.0485 28.3222 39.6007 28.361 40.0787 28.5038C42.7542 29.2055 45.4884 29.5748 47.9222 30.9907C50.4148 32.4128 52.0144 34.4384 52.1534 37.4775C52.1873 38.2361 52.6753 38.3222 53.2959 38.6072C53.2026 38.1852 53.1877 37.9526 53.1193 37.7064C51.9418 33.6656 50.4225 29.7472 48.5791 25.9971C48.1998 25.2947 46.8059 24.6391 46.0952 24.865C41.2827 26.4541 37.4453 24.7321 34.2226 21.0865C33.3753 20.1845 32.795 19.0369 32.0862 17.9837C32.1605 17.8797 32.224 17.8366 32.2989 17.7285C32.742 17.7523 33.2493 17.7289 33.6938 17.7445C36.0985 17.7629 38.5432 17.5543 40.8788 18.2588C43.6428 19.0932 45.8397 20.5844 46.5751 23.7287C46.7368 24.397 46.791 24.4065 47.8512 24.4179C47.0391 22.9994 46.3797 21.6664 45.5344 20.4135C44.2937 18.5724 43.0437 16.7841 41.7494 14.9294C41.5267 14.6371 41.2384 14.4068 40.9093 14.2586C36.8418 13.2529 34.1242 10.5702 32.3845 6.78053C31.4948 4.87777 30.9476 2.816 30.7698 0.696499C30.7456 0.516624 30.7856 0.289538 30.7807 0.00017479C31.8942 0.660623 32.9093 1.24518 33.9282 1.83042C36.362 3.24633 38.7255 4.7669 40.3586 7.25836C41.6336 9.22254 42.3363 11.2614 41.6925 13.6441C41.6625 13.8144 41.7216 14.1133 41.8642 14.2556C44.8275 18.0812 47.2863 22.2318 49.4308 26.557C49.4657 26.6761 49.6222 26.7622 49.6525 26.8846C49.7206 26.8381 49.8291 26.8572 49.8933 26.81C49.7658 26.2649 49.7622 25.6287 49.4962 25.2347C46.8887 20.9994 46.0861 16.3338 46.6277 11.3826C46.8387 9.21212 47.382 7.10443 47.8092 4.97627C47.8685 4.63969 48.0812 4.38452 48.3526 3.79682C49.2189 5.22484 50.0307 6.35056 50.6452 7.62129C52.3708 11.1743 53.4359 14.9622 53.1654 19.0329C53.0096 21.5016 52.4943 23.7899 50.5652 25.5361C50.4267 25.6873 50.2689 25.948 50.2931 26.1279C50.2035 27.2703 50.1781 28.3654 50.7042 29.5035C52.665 33.6249 54.0752 37.992 55.1951 42.4208L55.4049 43.1561C55.4591 43.1656 55.5769 43.132 55.6311 43.1416C55.5927 42.7251 55.6814 42.2223 55.5788 41.8529C54.022 37.3429 54.0466 32.7646 55.0826 28.1348C55.7553 25.2931 56.8822 22.7071 58.5862 20.3358C58.6697 20.1791 58.7989 20.0806 59.0109 19.8295C59.2026 20.3274 59.4717 20.7261 59.565 21.1481C61.0576 26.6336 61.3081 32.1886 59.8176 37.7878C59.3404 39.6508 58.2173 41.2718 56.6681 42.3335C56.4754 42.4751 56.2084 42.7208 56.2333 42.8966C56.0346 44.0239 55.7916 45.0849 56.0273 46.2846C56.9645 50.7983 57.4503 55.3579 57.48 59.9457C57.4707 59.9984 57.5049 60.1215 57.766 60.2261C57.8453 59.776 58.0431 59.2882 58.0683 58.8285C58.1891 56.2408 58.0396 53.6012 58.3773 51.0516C59.0829 45.7823 61.5681 41.5167 65.5837 38.1063C65.6479 38.0591 65.7563 38.0782 66.0025 37.9502C66.0807 38.7751 66.2773 39.5624 66.3013 40.3777C66.4135 45.4484 65.6589 50.3621 63.6672 54.999C62.7824 57.1636 61.3163 58.8201 59.054 59.5793C58.8806 59.6115 58.6887 59.7491 58.6686 59.8626C58.3172 60.9045 57.6854 61.9513 57.6693 62.9937C57.5304 67.903 56.9578 72.7359 56.2232 77.536C56.2039 77.6455 56.2274 77.8294 56.2081 77.9389C56.2623 77.9484 56.3707 77.9676 56.4149 78.0339C56.5385 77.6501 56.7805 77.2287 56.8506 76.8313C57.2919 74.0115 57.7339 71.1877 58.9692 68.6209C61.1484 64.1884 64.223 60.7249 68.592 58.4807C68.6662 58.3767 68.8489 58.2918 69.1493 58.1734Z",
                                        fill: "rgba(153, 152, 153, 1)",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, F.jsxs)("div", {
                                className: nu().avatar_wrap,
                                children: [
                                  (0, F.jsx)("div", {
                                    className: nu().avatar,
                                    children: (0, F.jsx)("img", {
                                      src: eh.avatar,
                                      alt: "",
                                    }),
                                  }),
                                  (0, F.jsx)("div", {
                                    className: nu().name,
                                    children: (0, F.jsx)("p", {
                                      children: eh.nickname,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          !M.hc &&
                            es &&
                            ep &&
                            (0, F.jsx)(
                              "div",
                              {
                                className: ei()(
                                  nu().lottie_wrap,
                                  (0, v.Z)({}, nu().lottie_wrap_visible, ed),
                                ),
                                children: (0, F.jsx)(tS, {
                                  lottieName: "rocket",
                                  animationData: ep,
                                  show: ed,
                                  preloadWhileHidden: !0,
                                  restartOnShow: !0,
                                  fadeIn: !0,
                                  loop: !1,
                                  nearCompleteRatio: 0.7,
                                  onNearComplete: eN,
                                  onError: function () {
                                    return ec(!1);
                                  },
                                }),
                              },
                              ea,
                            ),
                        ],
                      },
                      ea,
                    ),
                    (0, F.jsx)("div", {
                      className: ei()(
                        nu().two_wrap,
                        (0, v.Z)({}, nu().two_wrap_visible, z),
                      ),
                      children: (0, F.jsxs)("div", {
                        className: ei()(
                          nu().static_content,
                          nu().second_screen,
                          (0, v.Z)({}, nu().static_content_visible, et),
                        ),
                        style: {
                          "--static-content-fade-duration": "".concat(
                            500,
                            "ms",
                          ),
                        },
                        children: [
                          (0, F.jsx)("div", {
                            className: nu().rank_title,
                            children: (0, F.jsxs)("p", {
                              children: [
                                "恭喜已成为 ",
                                eI(null == ex ? void 0 : ex.rank_type),
                              ],
                            }),
                          }),
                          (0, F.jsxs)("div", {
                            className: nu().rank_content,
                            children: [
                              (0, F.jsx)("div", {
                                className: nu().l,
                                children: (0, F.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "70",
                                  height: "141",
                                  viewBox: "0 0 70 141",
                                  fill: "none",
                                  children: (0, F.jsx)("path", {
                                    d: "M0.0654987 58.1734C0.0264141 58.5858 -0.0326801 58.8847 0.017372 59.1686C0.460581 63.2675 1.75129 67.0998 3.66333 70.6512C4.49297 72.1857 5.41174 73.5917 6.49317 74.9689C7.79978 76.6494 9.51183 77.7983 11.6516 77.8852C11.8979 77.906 12.1327 78.0081 12.3219 78.1767C12.806 79.0196 13.4527 79.8338 13.6114 80.734C14.6672 85.7702 15.974 90.645 17.9849 95.3914C18.0692 95.5522 18.0992 95.7225 17.9766 95.9783C17.8181 95.7135 17.6054 95.4584 17.4925 95.1354C16.2763 92.0425 14.7541 89.1165 12.3228 86.7647C9.36078 83.917 6.02707 81.8372 1.93546 81.1663C1.81701 81.1287 1.70857 81.1478 1.59012 81.1101C1.5359 81.1197 1.48167 81.1293 1.27481 81.2243C1.3742 81.7879 1.42937 82.4179 1.69071 82.9489C3.70309 87.7034 6.49678 91.7934 10.5615 94.8481C12.4313 96.2578 14.5178 96.9937 16.9215 96.3358C17.1384 96.2975 17.5379 96.3441 17.6764 96.4953C18.3131 97.2527 19.0583 97.991 19.5523 98.8907C22.0217 103.678 24.7824 108.237 28.0941 112.412C28.3068 112.667 28.4739 112.98 28.6866 113.236C28.5882 113.311 28.5439 113.378 28.4455 113.454C28.1043 113.104 27.7204 112.829 27.4877 112.46C25.7905 110.15 23.9236 108.1 21.4777 106.617C17.9613 104.452 14.2292 103.601 10.1688 104.375C9.08444 104.566 9.04953 104.685 9.57362 105.755C10.5075 107.564 11.8352 109.07 13.31 110.436C15.377 112.329 17.588 114.089 20.3141 114.942C22.804 115.724 25.279 115.81 27.5582 114.129C27.7116 114.047 27.9185 113.952 28.0369 113.99C28.8404 114.425 29.8315 114.656 30.3947 115.313C33.607 118.924 37.0953 122.197 41.0077 125.045C41.1513 125.142 41.285 125.254 41.4062 125.38C41.4704 125.427 41.4262 125.494 41.5498 125.878C40.9886 125.571 40.5697 125.415 40.2386 125.122C38.0283 123.367 35.6024 121.997 32.793 121.622C28.5619 121.089 24.7335 122.228 21.1782 124.598C21.0791 124.67 21.0349 124.737 20.8038 125.012C21.4647 125.589 22.0279 126.247 22.723 126.701C27.0636 129.419 31.6735 130.809 36.7005 129.81C38.1543 129.506 39.4533 128.681 40.3743 127.477C41.1915 126.405 42.3744 126.138 43.6314 126.903C46.9701 129.022 50.5375 130.713 54.2546 131.937L56.7431 132.711C56.7096 132.838 56.7196 132.895 56.6847 133.014C56.2859 132.971 55.8963 132.981 55.5952 132.859C53.5591 132.114 51.5026 131.548 49.3349 131.642C44.8979 131.843 41.3428 133.921 38.2615 137.078C37.7438 137.629 37.2367 138.241 36.587 138.995C37.4997 139.415 38.1955 139.874 39.0133 140.073C43.4118 141.216 47.7636 141.143 51.945 139.13C53.9502 138.137 55.5414 136.698 56.2722 134.479C56.523 133.682 58.016 132.955 58.9429 133.138C62.0292 133.815 65.2081 134.065 68.337 134.032C68.6188 134.045 68.8899 133.997 69.2153 133.94C69.175 133.078 68.7696 132.681 67.9912 132.705C64.8499 132.725 61.7107 132.382 58.6306 131.684C57.0579 131.326 56.3028 130.531 56.2315 128.858C56.0355 125.527 54.8935 122.538 53.0124 119.796C51.0099 116.921 48.2232 114.74 45.0257 113.545C44.7888 113.469 44.4984 113.408 44.0795 113.252C44.2424 113.858 44.376 114.299 44.5096 114.74C45.7309 118.179 46.6812 121.665 48.4254 124.899C49.7492 127.333 51.6187 129.036 54.1821 129.918C54.5361 130.05 54.9075 130.122 55.2817 130.129C56.0407 129.996 56.2185 130.37 56.3572 131.156C56.0668 131.095 55.84 131.076 55.6031 131.001C50.8736 129.647 46.3748 127.502 42.2835 124.648C41.193 123.854 41.1168 122.471 41.3176 121.39C42.1755 116.426 41.0806 111.803 38.7495 107.46C37.5697 105.23 35.9458 103.313 34.0352 101.672C33.8432 101.535 33.6606 101.45 33.3401 101.218C33.4056 102.54 33.451 103.749 33.5413 104.895C33.7174 107.185 33.8431 109.483 34.1315 111.753C34.5144 114.875 35.2769 117.931 37.5773 120.197C38.262 120.888 39.1056 121.55 40.0183 121.971C40.7622 122.362 40.95 122.793 40.888 123.732C39.906 122.919 39.0082 122.266 38.1546 121.547C35.0019 118.908 32.0955 116.059 29.6125 112.78C28.8822 111.809 28.9795 110.458 29.4172 109.452C32.5674 101.931 31.2191 94.9185 27.1198 88.157C27.0355 87.9963 26.9071 87.9018 26.8235 87.7452C26.8135 87.6884 26.7051 87.7075 26.5866 87.6698C25.7537 92.4578 24.3354 97.1191 24.7546 102.033C24.9998 105.009 25.9198 107.69 28.2343 109.719C28.5648 110.008 28.565 110.644 28.6986 111.084C28.6002 111.16 28.4917 111.179 28.4475 111.246L27.1441 109.56C24.1289 105.251 21.5512 100.63 19.4537 95.7722C19.3602 95.5587 19.2566 95.2885 19.2808 95.1086C19.6242 93.8857 19.7314 92.5915 20.7856 91.5945C22.7343 89.6244 23.5552 86.9876 24.1927 84.262C25.2073 79.8475 24.6799 75.5879 23.3159 71.3629C23.2959 71.2494 23.2255 71.1447 23.1481 71.0454C23.0497 71.1213 22.9413 71.1405 22.9506 71.1932C21.4949 74.3516 19.8565 77.4252 18.5254 80.6787C17.2224 83.7517 16.7246 86.9753 17.8074 90.2631C18.0346 90.9172 18.3267 91.6225 18.7545 92.124C19.4362 92.8192 19.146 93.393 18.7486 94.3327C18.1059 92.5896 17.4482 91.0791 17.0081 89.5344C15.9235 85.603 15.0124 81.7037 14.0369 77.7572C13.844 76.9801 14.6552 74.9221 15.2658 74.5803C18.4464 72.9156 20.169 70.0028 21.3785 66.7164C22.6696 63.2357 22.9283 59.6528 22.4599 56.0225L22.3505 55.4021C22.3405 55.3453 22.2763 55.2981 22.192 55.1374C21.8283 55.6112 21.3997 56.0339 21.0353 56.5037C19.3776 58.5395 17.6597 60.5275 16.1291 62.6496C14.2929 65.2354 13.3555 68.1854 13.7142 71.488C13.8087 72.341 14.0124 73.179 14.2588 73.9425C14.5609 74.7046 14.2407 75.1081 13.6894 75.7865C13.5307 74.8862 13.3578 74.2226 13.2926 73.5359C12.7349 68.4704 12.404 63.4235 12.6835 58.3276C12.7087 57.6314 12.9603 56.9687 13.397 56.4486C13.8338 55.9285 14.4295 55.582 15.0861 55.4663C18.1163 54.8734 20.1734 52.8842 21.877 50.4974C23.9481 47.6361 24.8765 44.3406 25.325 40.8372C25.315 40.7804 25.3453 40.658 25.3253 40.5444C25.316 40.4917 25.2517 40.4445 25.2424 40.3918C25.1882 40.4014 25.1233 40.3501 25.0691 40.3596C22.4677 42.0936 19.7347 43.7379 17.2137 45.6333C15.0026 47.3611 13.5663 49.7008 13.4754 52.6729C13.4764 53.3125 13.4773 53.952 13.6502 54.6156C13.8332 55.336 13.5037 55.6868 12.9031 56.0854C12.863 55.8583 12.7688 55.6407 12.7937 55.4649C13.2112 50.2369 14.0982 45.069 15.4429 40.0291C15.6139 39.4136 17.1018 38.3401 17.7421 38.4613C22.1048 39.0844 25.1883 36.9142 27.8165 33.7247C29.1247 32.1041 30.1243 30.2356 30.7628 28.217C30.1664 28.3222 29.6142 28.361 29.1362 28.5038C26.4606 29.2055 23.7264 29.5748 21.2926 30.9907C18.8 32.4128 17.2005 34.4384 17.0615 37.4775C17.0275 38.2361 16.5396 38.3222 15.9189 38.6072C16.0123 38.1852 16.0271 37.9526 16.0955 37.7064C17.273 33.6656 18.7924 29.7472 20.6358 25.9971C21.015 25.2947 22.4089 24.6391 23.1196 24.865C27.9322 26.4541 31.7696 24.7321 34.9923 21.0865C35.8395 20.1845 36.4198 19.0369 37.1286 17.9837C37.0544 17.8797 36.9909 17.8366 36.9159 17.7285C36.4728 17.7523 35.9656 17.7289 35.5211 17.7445C33.1164 17.7629 30.6716 17.5543 28.336 18.2588C25.572 19.0932 23.3751 20.5844 22.6397 23.7287C22.478 24.397 22.4238 24.4065 21.3636 24.4179C22.1757 22.9994 22.8351 21.6664 23.6804 20.4135C24.9212 18.5724 26.1712 16.7841 27.4654 14.9294C27.6881 14.6371 27.9764 14.4068 28.3055 14.2586C32.3731 13.2529 35.0907 10.5702 36.8304 6.78053C37.7201 4.87777 38.2673 2.816 38.4451 0.696499C38.4693 0.516624 38.4292 0.289538 38.4341 0.00017479C37.3206 0.660623 36.3056 1.24518 35.2867 1.83042C32.8528 3.24633 30.4894 4.7669 28.8562 7.25836C27.5813 9.22254 26.8786 11.2614 27.5223 13.6441C27.5523 13.8144 27.4932 14.1133 27.3506 14.2556C24.3873 18.0812 21.9285 22.2318 19.7841 26.557C19.7492 26.6761 19.5926 26.7622 19.5623 26.8846C19.4942 26.8381 19.3858 26.8572 19.3215 26.81C19.449 26.2649 19.4527 25.6287 19.7187 25.2347C22.3262 20.9994 23.1288 16.3338 22.5872 11.3826C22.3762 9.21212 21.8328 7.10443 21.4057 4.97627C21.3463 4.63969 21.1336 4.38452 20.8623 3.79682C19.996 5.22484 19.1841 6.35056 18.5696 7.62129C16.8441 11.1743 15.7789 14.9622 16.0494 19.0329C16.2052 21.5016 16.7205 23.7899 18.6497 25.5361C18.7882 25.6873 18.9459 25.948 18.9217 26.1279C19.0114 27.2703 19.0368 28.3654 18.5107 29.5035C16.5499 33.6249 15.1396 37.992 14.0197 42.4208L13.8099 43.1561C13.7557 43.1656 13.638 43.132 13.5838 43.1416C13.6221 42.7251 13.5335 42.2223 13.6361 41.8529C15.1929 37.3429 15.1683 32.7646 14.1323 28.1348C13.4595 25.2931 12.3327 22.7071 10.6287 20.3358C10.5452 20.1791 10.416 20.0806 10.204 19.8295C10.0122 20.3274 9.74312 20.7261 9.64982 21.1481C8.1572 26.6336 7.90676 32.1886 9.39721 37.7878C9.87447 39.6508 10.9976 41.2718 12.5468 42.3335C12.7395 42.4751 13.0064 42.7208 12.9815 42.8966C13.1803 44.0239 13.4233 45.0849 13.1876 46.2846C12.2504 50.7983 11.7645 55.3579 11.7349 59.9457C11.7442 59.9984 11.71 60.1215 11.4489 60.2261C11.3695 59.776 11.1717 59.2882 11.1466 58.8285C11.0257 56.2408 11.1752 53.6012 10.8375 51.0516C10.132 45.7823 7.64676 41.5167 3.63117 38.1063C3.56693 38.0591 3.4585 38.0782 3.2123 37.9502C3.13414 38.7751 2.93752 39.5624 2.91357 40.3777C2.80136 45.4484 3.55596 50.3621 5.5476 54.999C6.43242 57.1636 7.89853 58.8201 10.1608 59.5793C10.3342 59.6115 10.5262 59.7491 10.5462 59.8626C10.8976 60.9045 11.5295 61.9513 11.5456 62.9937C11.6844 67.903 12.2571 72.7359 12.9916 77.536C13.0109 77.6455 12.9875 77.8294 13.0068 77.9389C12.9526 77.9484 12.8441 77.9676 12.7999 78.0339C12.6763 77.6501 12.4343 77.2287 12.3642 76.8313C11.9229 74.0115 11.4809 71.1877 10.2456 68.6209C8.06642 64.1884 4.99187 60.7249 0.622842 58.4807C0.5486 58.3767 0.365916 58.2918 0.0654987 58.1734Z",
                                    fill: "rgba(153, 152, 153, 1)",
                                  }),
                                }),
                              }),
                              (0, F.jsxs)("div", {
                                className: nu().c,
                                children: [
                                  (0, F.jsxs)("p", {
                                    className: nu().top_text,
                                    children: [
                                      "TOP ",
                                      null == ex ? void 0 : ex.rank,
                                    ],
                                  }),
                                  (0, F.jsx)("span", {
                                    children:
                                      null == ex ? void 0 : ex.rank_period_desc,
                                  }),
                                ],
                              }),
                              (0, F.jsx)("div", {
                                className: nu().r,
                                children: (0, F.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "70",
                                  height: "141",
                                  viewBox: "0 0 70 141",
                                  fill: "none",
                                  children: (0, F.jsx)("path", {
                                    d: "M69.1493 58.1734C69.1884 58.5858 69.2475 58.8847 69.1975 59.1686C68.7543 63.2675 67.4636 67.0998 65.5515 70.6512C64.7219 72.1857 63.8031 73.5917 62.7217 74.9689C61.4151 76.6494 59.703 77.7983 57.5633 77.8852C57.317 77.906 57.0822 78.0081 56.8929 78.1767C56.4089 79.0196 55.7621 79.8338 55.6034 80.734C54.5477 85.7702 53.2409 90.645 51.2299 95.3914C51.1457 95.5522 51.1156 95.7225 51.2383 95.9783C51.3967 95.7135 51.6095 95.4584 51.7223 95.1354C52.9385 92.0425 54.4608 89.1165 56.8921 86.7647C59.8541 83.917 63.1878 81.8372 67.2794 81.1663C67.3978 81.1287 67.5063 81.1478 67.6247 81.1101C67.6789 81.1197 67.7332 81.1293 67.94 81.2243C67.8406 81.7879 67.7855 82.4179 67.5241 82.9489C65.5118 87.7034 62.7181 91.7934 58.6534 94.8481C56.7835 96.2578 54.6971 96.9937 52.2933 96.3358C52.0765 96.2975 51.6769 96.3441 51.5384 96.4953C50.9017 97.2527 50.1566 97.991 49.6625 98.8907C47.1932 103.678 44.4324 108.237 41.1207 112.412C40.908 112.667 40.741 112.98 40.5283 113.236C40.6267 113.311 40.6709 113.378 40.7693 113.454C41.1105 113.104 41.4945 112.829 41.7272 112.46C43.4243 110.15 45.2912 108.1 47.7371 106.617C51.2536 104.452 54.9856 103.601 59.046 104.375C60.1304 104.566 60.1653 104.685 59.6412 105.755C58.7073 107.564 57.3797 109.07 55.9048 110.436C53.8379 112.329 51.6269 114.089 48.9008 114.942C46.4109 115.724 43.9358 115.81 41.6566 114.129C41.5033 114.047 41.2964 113.952 41.1779 113.99C40.3744 114.425 39.3833 114.656 38.8201 115.313C35.6078 118.924 32.1195 122.197 28.2072 125.045C28.0635 125.142 27.9299 125.254 27.8086 125.38C27.7444 125.427 27.7886 125.494 27.665 125.878C28.2263 125.571 28.6451 125.415 28.9763 125.122C31.1866 123.367 33.6125 121.997 36.4219 121.622C40.653 121.089 44.4813 122.228 48.0366 124.598C48.1358 124.67 48.18 124.737 48.411 125.012C47.7502 125.589 47.187 126.247 46.4919 126.701C42.1512 129.419 37.5413 130.809 32.5143 129.81C31.0606 129.506 29.7616 128.681 28.8405 127.477C28.0233 126.405 26.8405 126.138 25.5835 126.903C22.2448 129.022 18.6774 130.713 14.9602 131.937L12.4717 132.711C12.5052 132.838 12.4952 132.895 12.5301 133.014C12.929 132.971 13.3185 132.981 13.6196 132.859C15.6558 132.114 17.7122 131.548 19.88 131.642C24.317 131.843 27.872 133.921 30.9533 137.078C31.4711 137.629 31.9781 138.241 32.6278 138.995C31.7151 139.415 31.0193 139.874 30.2016 140.073C25.803 141.216 21.4513 141.143 17.2698 139.13C15.2646 138.137 13.6734 136.698 12.9426 134.479C12.6918 133.682 11.1988 132.955 10.2719 133.138C7.18561 133.815 4.0067 134.065 0.877833 134.032C0.596009 134.045 0.324909 133.997 -0.000411867 133.94C0.0398735 133.078 0.445276 132.681 1.22366 132.705C4.36494 132.725 7.50415 132.382 10.5843 131.684C12.1569 131.326 12.9121 130.531 12.9833 128.858C13.1794 125.527 14.3214 122.538 16.2024 119.796C18.205 116.921 20.9917 114.74 24.1892 113.545C24.4261 113.469 24.7165 113.408 25.1353 113.252C24.9724 113.858 24.8388 114.299 24.7053 114.74C23.4839 118.179 22.5336 121.665 20.7894 124.899C19.4657 127.333 17.5962 129.036 15.0327 129.918C14.6787 130.05 14.3074 130.122 13.9332 130.129C13.1741 129.996 12.9963 130.37 12.8576 131.156C13.148 131.095 13.3749 131.076 13.6118 131.001C18.3412 129.647 22.84 127.502 26.9314 124.648C28.0218 123.854 28.098 122.471 27.8972 121.39C27.0394 116.426 28.1342 111.803 30.4653 107.46C31.6452 105.23 33.269 103.313 35.1796 101.672C35.3716 101.535 35.5543 101.45 35.8747 101.218C35.8093 102.54 35.7639 103.749 35.6735 104.895C35.4975 107.185 35.3717 109.483 35.0833 111.753C34.7004 114.875 33.938 117.931 31.6376 120.197C30.9528 120.888 30.1092 121.55 29.1965 121.971C28.4526 122.362 28.2648 122.793 28.3268 123.732C29.3089 122.919 30.2067 122.266 31.0603 121.547C34.213 118.908 37.1193 116.059 39.6023 112.78C40.3326 111.809 40.2354 110.458 39.7977 109.452C36.6474 101.931 37.9957 94.9185 42.0951 88.157C42.1793 87.9963 42.3078 87.9018 42.3913 87.7452C42.4013 87.6884 42.5098 87.7075 42.6282 87.6698C43.4612 92.4578 44.8795 97.1191 44.4602 102.033C44.2151 105.009 43.2951 107.69 40.9805 109.719C40.6501 110.008 40.6498 110.644 40.5162 111.084C40.6147 111.16 40.7231 111.179 40.7673 111.246L42.0708 109.56C45.086 105.251 47.6636 100.63 49.7611 95.7722C49.8547 95.5587 49.9582 95.2885 49.9341 95.1086C49.5906 93.8857 49.4834 92.5915 48.4293 91.5945C46.4805 89.6244 45.6596 86.9876 45.0221 84.262C44.0075 79.8475 44.535 75.5879 45.8989 71.3629C45.9189 71.2494 45.9893 71.1447 46.0667 71.0454C46.1651 71.1213 46.2736 71.1405 46.2643 71.1932C47.72 74.3516 49.3583 77.4252 50.6894 80.6787C51.9925 83.7517 52.4903 86.9753 51.4074 90.2631C51.1803 90.9172 50.8882 91.6225 50.4603 92.124C49.7787 92.8192 50.0689 93.393 50.4662 94.3327C51.109 92.5896 51.7667 91.0791 52.2068 89.5344C53.2913 85.603 54.2025 81.7037 55.1779 77.7572C55.3708 76.9801 54.5597 74.9221 53.9491 74.5803C50.7685 72.9156 49.0458 70.0028 47.8363 66.7164C46.5453 63.2357 46.2865 59.6528 46.7549 56.0225L46.8643 55.4021C46.8744 55.3453 46.9386 55.2981 47.0228 55.1374C47.3865 55.6112 47.8152 56.0339 48.1796 56.5037C49.8372 58.5395 51.5552 60.5275 53.0858 62.6496C54.922 65.2354 55.8594 68.1854 55.5006 71.488C55.4061 72.341 55.2025 73.179 54.956 73.9425C54.654 74.7046 54.9741 75.1081 55.5254 75.7865C55.6841 74.8862 55.857 74.2226 55.9222 73.5359C56.48 68.4704 56.8108 63.4235 56.5314 58.3276C56.5062 57.6314 56.2545 56.9687 55.8178 56.4486C55.3811 55.9285 54.7854 55.582 54.1288 55.4663C51.0986 54.8734 49.0414 52.8842 47.3378 50.4974C45.2667 47.6361 44.3383 44.3406 43.8899 40.8372C43.8999 40.7804 43.8696 40.658 43.8896 40.5444C43.8989 40.4917 43.9631 40.4445 43.9724 40.3918C44.0266 40.4014 44.0916 40.3501 44.1458 40.3596C46.7471 42.0936 49.4801 43.7379 52.0011 45.6333C54.2122 47.3611 55.6485 49.7008 55.7394 52.6729C55.7385 53.3125 55.7375 53.952 55.5646 54.6156C55.3817 55.336 55.7112 55.6868 56.3118 56.0854C56.3518 55.8583 56.4461 55.6407 56.4212 55.4649C56.0036 50.2369 55.1166 45.069 53.772 40.0291C53.601 39.4136 52.1131 38.3401 51.4727 38.4613C47.11 39.0844 44.0265 36.9142 41.3983 33.7247C40.0902 32.1041 39.0906 30.2356 38.4521 28.217C39.0485 28.3222 39.6007 28.361 40.0787 28.5038C42.7542 29.2055 45.4884 29.5748 47.9222 30.9907C50.4148 32.4128 52.0144 34.4384 52.1534 37.4775C52.1873 38.2361 52.6753 38.3222 53.2959 38.6072C53.2026 38.1852 53.1877 37.9526 53.1193 37.7064C51.9418 33.6656 50.4225 29.7472 48.5791 25.9971C48.1998 25.2947 46.8059 24.6391 46.0952 24.865C41.2827 26.4541 37.4453 24.7321 34.2226 21.0865C33.3753 20.1845 32.795 19.0369 32.0862 17.9837C32.1605 17.8797 32.224 17.8366 32.2989 17.7285C32.742 17.7523 33.2493 17.7289 33.6938 17.7445C36.0985 17.7629 38.5432 17.5543 40.8788 18.2588C43.6428 19.0932 45.8397 20.5844 46.5751 23.7287C46.7368 24.397 46.791 24.4065 47.8512 24.4179C47.0391 22.9994 46.3797 21.6664 45.5344 20.4135C44.2937 18.5724 43.0437 16.7841 41.7494 14.9294C41.5267 14.6371 41.2384 14.4068 40.9093 14.2586C36.8418 13.2529 34.1242 10.5702 32.3845 6.78053C31.4948 4.87777 30.9476 2.816 30.7698 0.696499C30.7456 0.516624 30.7856 0.289538 30.7807 0.00017479C31.8942 0.660623 32.9093 1.24518 33.9282 1.83042C36.362 3.24633 38.7255 4.7669 40.3586 7.25836C41.6336 9.22254 42.3363 11.2614 41.6925 13.6441C41.6625 13.8144 41.7216 14.1133 41.8642 14.2556C44.8275 18.0812 47.2863 22.2318 49.4308 26.557C49.4657 26.6761 49.6222 26.7622 49.6525 26.8846C49.7206 26.8381 49.8291 26.8572 49.8933 26.81C49.7658 26.2649 49.7622 25.6287 49.4962 25.2347C46.8887 20.9994 46.0861 16.3338 46.6277 11.3826C46.8387 9.21212 47.382 7.10443 47.8092 4.97627C47.8685 4.63969 48.0812 4.38452 48.3526 3.79682C49.2189 5.22484 50.0307 6.35056 50.6452 7.62129C52.3708 11.1743 53.4359 14.9622 53.1654 19.0329C53.0096 21.5016 52.4943 23.7899 50.5652 25.5361C50.4267 25.6873 50.2689 25.948 50.2931 26.1279C50.2035 27.2703 50.1781 28.3654 50.7042 29.5035C52.665 33.6249 54.0752 37.992 55.1951 42.4208L55.4049 43.1561C55.4591 43.1656 55.5769 43.132 55.6311 43.1416C55.5927 42.7251 55.6814 42.2223 55.5788 41.8529C54.022 37.3429 54.0466 32.7646 55.0826 28.1348C55.7553 25.2931 56.8822 22.7071 58.5862 20.3358C58.6697 20.1791 58.7989 20.0806 59.0109 19.8295C59.2026 20.3274 59.4717 20.7261 59.565 21.1481C61.0576 26.6336 61.3081 32.1886 59.8176 37.7878C59.3404 39.6508 58.2173 41.2718 56.6681 42.3335C56.4754 42.4751 56.2084 42.7208 56.2333 42.8966C56.0346 44.0239 55.7916 45.0849 56.0273 46.2846C56.9645 50.7983 57.4503 55.3579 57.48 59.9457C57.4707 59.9984 57.5049 60.1215 57.766 60.2261C57.8453 59.776 58.0431 59.2882 58.0683 58.8285C58.1891 56.2408 58.0396 53.6012 58.3773 51.0516C59.0829 45.7823 61.5681 41.5167 65.5837 38.1063C65.6479 38.0591 65.7563 38.0782 66.0025 37.9502C66.0807 38.7751 66.2773 39.5624 66.3013 40.3777C66.4135 45.4484 65.6589 50.3621 63.6672 54.999C62.7824 57.1636 61.3163 58.8201 59.054 59.5793C58.8806 59.6115 58.6887 59.7491 58.6686 59.8626C58.3172 60.9045 57.6854 61.9513 57.6693 62.9937C57.5304 67.903 56.9578 72.7359 56.2232 77.536C56.2039 77.6455 56.2274 77.8294 56.2081 77.9389C56.2623 77.9484 56.3707 77.9676 56.4149 78.0339C56.5385 77.6501 56.7805 77.2287 56.8506 76.8313C57.2919 74.0115 57.7339 71.1877 58.9692 68.6209C61.1484 64.1884 64.223 60.7249 68.592 58.4807C68.6662 58.3767 68.8489 58.2918 69.1493 58.1734Z",
                                    fill: "rgba(153, 152, 153, 1)",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, F.jsxs)("div", {
                            className: nu().avatar_wrap,
                            children: [
                              (0, F.jsx)("div", {
                                className: nu().avatar,
                                children: (0, F.jsx)("img", {
                                  src: eh.avatar,
                                  alt: "",
                                }),
                              }),
                              (0, F.jsx)("div", {
                                className: nu().name,
                                children: (0, F.jsx)("p", {
                                  children: eh.nickname,
                                }),
                              }),
                            ],
                          }),
                          (null == ex
                            ? void 0
                            : null === (r = ex.prize_list) || void 0 === r
                              ? void 0
                              : r.length) > 0 &&
                            (0, F.jsxs)("div", {
                              className: nu().gift,
                              children: [
                                (null == R ? void 0 : R.popupType) === 1
                                  ? (0, F.jsxs)("p", {
                                      children: [
                                        "已获得",
                                        (null == ex
                                          ? void 0
                                          : null === (i = ex.prize_list) ||
                                              void 0 === i
                                            ? void 0
                                            : null === (a = i[0]) ||
                                                void 0 === a
                                              ? void 0
                                              : a.type) === 1
                                          ? ""
                                              .concat(
                                                null == ex
                                                  ? void 0
                                                  : null ===
                                                        (o = ex.prize_list) ||
                                                      void 0 === o
                                                    ? void 0
                                                    : null === (l = o[0]) ||
                                                        void 0 === l
                                                      ? void 0
                                                      : l.amount,
                                              )
                                              .concat(
                                                null == ex
                                                  ? void 0
                                                  : null ===
                                                        (s = ex.prize_list) ||
                                                      void 0 === s
                                                    ? void 0
                                                    : null === (c = s[0]) ||
                                                        void 0 === c
                                                      ? void 0
                                                      : c.name,
                                              )
                                          : "".concat(
                                              null == ex
                                                ? void 0
                                                : null ===
                                                      (u = ex.prize_list) ||
                                                    void 0 === u
                                                  ? void 0
                                                  : null === (d = u[0]) ||
                                                      void 0 === d
                                                    ? void 0
                                                    : d.name,
                                            ),
                                      ],
                                    })
                                  : (0, F.jsxs)("p", {
                                      children: [
                                        "唯前",
                                        null == ex
                                          ? void 0
                                          : null === (A = ex.prize_list) ||
                                              void 0 === A
                                            ? void 0
                                            : null === (f = A[0]) ||
                                                void 0 === f
                                              ? void 0
                                              : f.max_rank,
                                        "名可获得",
                                        (null == ex
                                          ? void 0
                                          : null === (C = ex.prize_list) ||
                                              void 0 === C
                                            ? void 0
                                            : null === (m = C[0]) ||
                                                void 0 === m
                                              ? void 0
                                              : m.type) === 1
                                          ? ""
                                              .concat(
                                                null == ex
                                                  ? void 0
                                                  : null ===
                                                        (b = ex.prize_list) ||
                                                      void 0 === b
                                                    ? void 0
                                                    : null === (x = b[0]) ||
                                                        void 0 === x
                                                      ? void 0
                                                      : x.amount,
                                              )
                                              .concat(
                                                null == ex
                                                  ? void 0
                                                  : null ===
                                                        (w = ex.prize_list) ||
                                                      void 0 === w
                                                    ? void 0
                                                    : null === (y = w[0]) ||
                                                        void 0 === y
                                                      ? void 0
                                                      : y.name,
                                              )
                                          : "".concat(
                                              null == ex
                                                ? void 0
                                                : null ===
                                                      (k = ex.prize_list) ||
                                                    void 0 === k
                                                  ? void 0
                                                  : null === (I = k[0]) ||
                                                      void 0 === I
                                                    ? void 0
                                                    : I.name,
                                              "哦",
                                            ),
                                      ],
                                    }),
                                (0, F.jsx)("img", {
                                  src:
                                    null == ex
                                      ? void 0
                                      : null === (j = ex.prize_list) ||
                                          void 0 === j
                                        ? void 0
                                        : null === (N = j[0]) || void 0 === N
                                          ? void 0
                                          : N.icon,
                                  alt: "",
                                }),
                              ],
                            }),
                          (0, F.jsxs)("div", {
                            className: nu().btn_wrap,
                            children: [
                              (null == R ? void 0 : R.popupType) !== 1 &&
                                (0, F.jsx)("div", {
                                  className: nu().btn,
                                  onClick: eO,
                                  children: "炫耀一下",
                                }),
                              (null == R ? void 0 : R.popupType) === 1
                                ? (0, F.jsx)(F.Fragment, {
                                    children:
                                      (null == ex
                                        ? void 0
                                        : null === (O = ex.prize_list) ||
                                            void 0 === O
                                          ? void 0
                                          : O.length) > 0
                                        ? (0, F.jsx)(F.Fragment, {
                                            children:
                                              (null == ex
                                                ? void 0
                                                : null ===
                                                      (E = ex.prize_list) ||
                                                    void 0 === E
                                                  ? void 0
                                                  : null === (D = E[0]) ||
                                                      void 0 === D
                                                    ? void 0
                                                    : D.type) === 1
                                                ? (0, F.jsx)("div", {
                                                    className: ei()(
                                                      nu().btn,
                                                      nu().btn_replay,
                                                    ),
                                                    onClick: ek,
                                                    children: "开心收下",
                                                  })
                                                : (0, F.jsx)("div", {
                                                    className: ei()(
                                                      nu().btn,
                                                      nu().btn_replay,
                                                    ),
                                                    onClick: function () {
                                                      var e, t, n, r, i;
                                                      ((n = (t = (
                                                        null == ex
                                                          ? void 0
                                                          : null ===
                                                                (e =
                                                                  ex.prize_list) ||
                                                              void 0 === e
                                                            ? void 0
                                                            : e[0]
                                                      ).medal).type),
                                                        (r = t.classify_id),
                                                        (i =
                                                          "https://activity.kugou.com/page/v-21847b5d/detail.html?isHideTitleBar=1&hreffrom="
                                                            .concat(
                                                              nh,
                                                              "&type=",
                                                            )
                                                            .concat(
                                                              void 0 === n
                                                                ? ""
                                                                : n,
                                                              "&classifyId=",
                                                            )
                                                            .concat(
                                                              void 0 === r
                                                                ? ""
                                                                : r,
                                                              "&isNew=0&isHide=0",
                                                            )),
                                                        (0, M.Yo)(i));
                                                    },
                                                    children: "查看奖励",
                                                  }),
                                          })
                                        : (0, F.jsx)(F.Fragment, {}),
                                  })
                                : (0, F.jsx)("div", {
                                    className: ei()(nu().btn, nu().btn_replay),
                                    onClick: function () {
                                      !(function () {
                                        if ((0, M.Dy)(1e3, "handleUpdate")) {
                                          var e = "",
                                            t = "25_"
                                              .concat(
                                                (null == eb
                                                  ? void 0
                                                  : eb.classify_id) || "",
                                                ",38_",
                                              )
                                              .concat(
                                                (null == eb ? void 0 : eb.id) ||
                                                  "",
                                                ",29_",
                                              )
                                              .concat(nh || "0");
                                          ((e =
                                            "普通用户" === ew
                                              ? (M.gn
                                                  ? "https://m3ws.kugou.com/vip/ios/vip.html"
                                                  : "https://m3ws.kugou.com/vip/v2/vip.html") +
                                                "?source_id=202116&custom_field=".concat(
                                                  t,
                                                )
                                              : "超级VIP年费" === ew
                                                ? "https://h5.kugou.com/2022/v-43a0e8b2/index.html?source_id=202116"
                                                : (M.gn
                                                    ? "https://m3ws.kugou.com/vip/ios/supervip.html"
                                                    : "https://m3ws.kugou.com/vip/v2/supervip.html") +
                                                  "?source_id=202116&custom_field=".concat(
                                                    t,
                                                  )),
                                            (0, M.Yo)(e, null, { browser: 4 }));
                                        }
                                      })();
                                    },
                                    children: "提升排名",
                                  }),
                            ],
                          }),
                          (0, F.jsx)("div", {
                            className: nu().closeButtom,
                            onClick: ek,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              },
            ),
          );
        },
        nb = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new Promise(function (t) {
            (e8(nm, e), t(!0));
          });
        };
      function nx(e, t) {
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
      function nw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? nx(Object(n), !0).forEach(function (t) {
                (0, v.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : nx(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var ny = (function () {
          var e = (0, M.Dv)("abValues");
          if (!e) return null;
          try {
            var t = JSON.parse(decodeURIComponent(e));
            if (t && "object" == typeof t && !Array.isArray(t)) return t;
            return null;
          } catch (e) {
            return null;
          }
        })(),
        nk = !1,
        nI = !1,
        nj = !0,
        nN = !0,
        nO = function (e) {
          return e
            ? nw(
                nw({}, e),
                {},
                {
                  user: nw(
                    nw({}, (null == e ? void 0 : e.user) || {}),
                    {},
                    { avatar: Z()(e.user.avatar) || L.yo },
                  ),
                },
              )
            : {};
        },
        nE = function (e) {
          var t,
            n,
            r,
            i,
            a,
            o,
            l,
            s,
            c = e.normalConfig,
            u = e.colorStateQuery,
            d = e.shareConfig,
            A = e.defaultLevelRankType,
            v = ns().initListenLoginStatus,
            f = (0, h.useReducer)(y.y8, u || y.zS),
            C = f[0],
            m = f[1],
            x = C.bgColor,
            k = C.textColor,
            I = (C.proccessColor, C.btnColor),
            E = (0, h.useReducer)(N, j),
            R = E[0],
            P = E[1],
            S = (0, h.useState)(
              (null == e
                ? void 0
                : null === (a = e.barHeights) || void 0 === a
                  ? void 0
                  : a.dpStatusBarHeight) || 54,
            ),
            B = S[0];
          S[1];
          var Y = (0, h.useState)(
              (null == e
                ? void 0
                : null === (o = e.barHeights) || void 0 === o
                  ? void 0
                  : o.dpTitleBarHeight) || 44,
            ),
            V = Y[0];
          Y[1];
          var Q = (0, h.useState)(null);
          (Q[0], Q[1]);
          var H = (0, h.useRef)(null),
            T = (0, h.useState)(ny),
            Z = T[0],
            K = T[1],
            G = (0, h.useState)(""),
            W = G[0],
            z = G[1],
            J = (0, h.useState)(
              (null == e
                ? void 0
                : null === (l = e.indexDataSSR) || void 0 === l
                  ? void 0
                  : l.infoData) || null,
            ),
            q = J[0],
            $ = J[1],
            et = (0, h.useState)({
              backgroundColor: "transparent",
              transition: "none",
            }),
            en = et[0],
            er = et[1],
            ei = (0, h.useMemo)(
              function () {
                return {
                  isShowListenRank:
                    !Z ||
                    (null == Z ? void 0 : Z.rank) === "1" ||
                    (null == Z ? void 0 : Z.rank) === "2" ||
                    (null == Z ? void 0 : Z.rank) === "3",
                };
              },
              [Z],
            ).isShowListenRank,
            ea = (0, h.useMemo)(
              function () {
                return nO(q);
              },
              [q],
            ),
            el = ea.timestamp,
            es = ea.user,
            eu = ea.grade,
            ed = ea.medal,
            eA = ea.vip;
          ((0, h.useEffect)(function () {
            return (
              ev(),
              P({ type: "SET_PAGE_PROPS", payload: nw({}, e) }),
              eo().on("rank_city_change", function () {
                ef();
              }),
              function () {
                (document.getElementById("scrollerContainer") &&
                  document
                    .getElementById("scrollerContainer")
                    .removeEventListener("scroll", ep),
                  eo().off("rank_city_change"));
              }
            );
          }, []),
            (0, h.useEffect)(
              function () {
                q &&
                  x &&
                  k &&
                  ((null == Z ? void 0 : Z.page) === "1" && ex(q, x, k),
                  eb(q, x, k));
              },
              [q, x, k, Z],
            ));
          var ep = (0, eI.throttle)(function (e) {
              e.target.scrollTop >= 50
                ? nk ||
                  ((nk = !0),
                  er({ backgroundColor: "#fff", transition: "all 0.3s" }))
                : (nk &&
                    er({ backgroundColor: "transparent", transition: "none" }),
                  (nk = !1));
              var t = document.querySelector(
                  ".".concat(b().scroll_plane),
                ).offsetTop,
                n = document.getElementById("titleBarWrap").offsetHeight,
                r = document.querySelector("#tab-list-wrap");
              if (e.target.scrollTop >= t - n) {
                if (!nI) {
                  ((r.style.position = "fixed"),
                    (r.style.top = n + "px"),
                    (r.style.zIndex = "99"),
                    (r.style.backgroundColor = "#fff"));
                  var i = document.createElement("div");
                  (i.setAttribute("id", "stickyPlaceholder"),
                    (i.style.height = r.offsetHeight + "px"),
                    r.insertAdjacentElement("afterend", i),
                    (nI = !0));
                }
              } else
                ((r.style.position = "relative"),
                  (r.style.top = "auto"),
                  (r.style.zIndex = "1"),
                  (r.style.backgroundColor = "transparent"),
                  document.getElementById("stickyPlaceholder") &&
                    document.getElementById("stickyPlaceholder").remove(),
                  (nI = !1));
            }, 50),
            ev =
              ((t = (0, p.Z)(
                g().mark(function t() {
                  var n;
                  return g().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return ((t.next = 2), v({ cbInit: ev }));
                        case 2:
                          if (t.sent) {
                            t.next = 4;
                            break;
                          }
                          return t.abrupt("return");
                        case 4:
                          (ef(
                            !0,
                            null == e
                              ? void 0
                              : null === (n = e.indexDataSSR) || void 0 === n
                                ? void 0
                                : n.infoData,
                          ),
                            eg());
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              )),
              function () {
                return t.apply(this, arguments);
              }),
            ef =
              ((n = (0, p.Z)(
                g().mark(function e(t, n) {
                  var r, i, a, o, l, s, c, d, A, p, v, f, h, C, b, x;
                  return g().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((z(""), (a = n), n)) {
                            e.next = 10;
                            break;
                          }
                          return (
                            (e.next = 5),
                            e_.Z.get_listen_level_my_info({})
                          );
                        case 5:
                          ((o = e.sent),
                            (r = (l = (0, _.Z)(o, 2))[0]),
                            (i = l[1]),
                            (a = null == r ? void 0 : r.data));
                        case 10:
                          if ((console.log("getInfo-data", a), !i)) {
                            e.next = 15;
                            break;
                          }
                          return (
                            z(
                              (null === (s = i) || void 0 === s
                                ? void 0
                                : null === (c = s.data) || void 0 === c
                                  ? void 0
                                  : c.message) || "加载失败，请稍后重试",
                            ),
                            null !== (d = i) &&
                            void 0 !== d &&
                            d.data &&
                            (null === (A = i) || void 0 === A
                              ? void 0
                              : null === (p = A.data) || void 0 === p
                                ? void 0
                                : p.errmsg) !== void 0
                              ? ee.Z.statAPMN(113948, {
                                  state: 0,
                                  position: "01",
                                  te: "E2",
                                  hash: JSON.stringify({
                                    res:
                                      null === (v = i) || void 0 === v
                                        ? void 0
                                        : v.data,
                                  }),
                                })
                              : ee.Z.statAPMN(
                                  113948,
                                  nw(
                                    { state: 0 },
                                    eq.getAPMParamsFromErr(i, "02"),
                                  ),
                                ),
                            e.abrupt("return")
                          );
                        case 15:
                          ($(a),
                            P({ type: "SET_MYINFO", payload: nO(a) }),
                            u ||
                              m({
                                type: "SET_COLOR",
                                payload: {
                                  mainColor:
                                    null === (f = a) || void 0 === f
                                      ? void 0
                                      : null === (h = f.medal) || void 0 === h
                                        ? void 0
                                        : h.color,
                                },
                              }),
                            t &&
                              ee.Z.fire("1135198", {
                                svar1:
                                  null === (C = a) || void 0 === C
                                    ? void 0
                                    : null === (b = C.grade) || void 0 === b
                                      ? void 0
                                      : b.p_grade,
                                svar2: (0, X.j)(
                                  null === (x = a) || void 0 === x
                                    ? void 0
                                    : x.vip,
                                ),
                              }),
                            ee.Z.statAPMN(113948, { state: 1, position: "01" }),
                            document.getElementById("scrollerContainer") &&
                              document
                                .getElementById("scrollerContainer")
                                .addEventListener("scroll", ep));
                        case 21:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function (e, t) {
                return n.apply(this, arguments);
              }),
            eg = function () {
              (tI("TMEAB0medal0tinggedengji").then(function (e) {
                K(null == e ? void 0 : e.mapParams);
              }),
                tI("TMEAB0medal0tinggedengjimingpai").then(function (e) {
                  var t;
                  P({
                    type: "SET_NAMEPLATE_AB_TYPE",
                    payload:
                      "1" ===
                      String(
                        null == e
                          ? void 0
                          : null === (t = e.mapParams) || void 0 === t
                            ? void 0
                            : t.type,
                      )
                        ? 1
                        : 0,
                  });
                }));
            },
            eh = function () {
              ((0, M.Yo)(null == c ? void 0 : c.ruleUrl, null, 0),
                ee.Z.fire("1135199", {
                  svar1: null == eu ? void 0 : eu.p_grade,
                  svar2: (0, X.j)(eA),
                }));
            },
            eC = function () {
              (0, M.Yo)(
                "/reward?ssr_header_param="
                  .concat(L.t2, "&isHideTitleBar=1&mainColor=")
                  .concat(x, "&level=")
                  .concat(null == eu ? void 0 : eu.p_grade),
              );
            },
            em = function () {
              console.log("onTitleBarClick");
              var e = document.getElementById("scrollerContainer");
              (console.log("container", e),
                e && e.scrollTo({ top: 0, behavior: "smooth" }));
            },
            eb =
              ((r = (0, p.Z)(
                g().mark(function e(t, n, r) {
                  var i, a, o, l, s, c;
                  return g().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(
                            !(null != (l = t.user) && l.userid) ||
                            (null == t
                              ? void 0
                              : null === (i = t.grade) || void 0 === i
                                ? void 0
                                : i.p_grade) < 1
                          )) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          if (nj) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return");
                        case 5:
                          if (
                            ((nj = !1),
                            (s = "listen_level_next_first_dialog_".concat(
                              null == l ? void 0 : l.userid,
                            )),
                            !(
                              "1" === window.localStorage.getItem(s) ||
                              (null ===
                                (a = JSON.parse(
                                  window.localStorage.getItem(s),
                                )) || void 0 === a
                                ? void 0
                                : a.switch) === 1
                            ))
                          ) {
                            e.next = 10;
                            break;
                          }
                          return (
                            window.localStorage.setItem(
                              s,
                              JSON.stringify({
                                switch: 1,
                                p_grade:
                                  null == t
                                    ? void 0
                                    : null === (c = t.grade) || void 0 === c
                                      ? void 0
                                      : c.p_grade,
                              }),
                            ),
                            e.abrupt("return")
                          );
                        case 10:
                          (window.localStorage.setItem(
                            s,
                            JSON.stringify({
                              switch: 1,
                              p_grade:
                                null == t
                                  ? void 0
                                  : null === (o = t.grade) || void 0 === o
                                    ? void 0
                                    : o.p_grade,
                            }),
                          ),
                            nl({
                              data: t,
                              bgColor: n,
                              textColor: r,
                              btnColor: I,
                              shareConfig: d,
                            }));
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function (e, t, n) {
                return r.apply(this, arguments);
              }),
            ex =
              ((i = (0, p.Z)(
                g().mark(function e(t, n, r) {
                  var i, a, o, l, s, c, u, A, p, v, f, h;
                  return g().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((i = t.user),
                            (a = t.grade),
                            (o = t.medal),
                            (l = t.vip),
                            !(
                              !(null != i && i.userid) ||
                              (null == a ? void 0 : a.p_grade) < 1
                            ))
                          ) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          if (nN) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return");
                        case 5:
                          if (
                            ((nN = !1),
                            (s = "listen_level_next_first_dialog_".concat(
                              null == i ? void 0 : i.userid,
                            )),
                            0 !==
                              Object.keys(
                                (c = window.localStorage.getItem(s)
                                  ? JSON.parse(window.localStorage.getItem(s))
                                  : {}),
                              ).length)
                          ) {
                            e.next = 10;
                            break;
                          }
                          return e.abrupt("return");
                        case 10:
                          if (
                            !(
                              (null == a ? void 0 : a.p_grade) >
                              (null == c ? void 0 : c.p_grade)
                            )
                          ) {
                            e.next = 14;
                            break;
                          }
                          (nl({
                            data: t,
                            bgColor: n,
                            textColor: r,
                            btnColor: I,
                            shareConfig: d,
                            levelUpAnimation: !0,
                          }),
                            (e.next = 23));
                          break;
                        case 14:
                          return ((e.next = 16), e_.Z.listen_level_popup());
                        case 16:
                          if (
                            ((p = e.sent), (f = (v = (0, _.Z)(p, 2))[0]), !v[1])
                          ) {
                            e.next = 22;
                            break;
                          }
                          return e.abrupt("return");
                        case 22:
                          (null == f ? void 0 : f.status) === 1 &&
                            (null == f
                              ? void 0
                              : null === (u = f.data) || void 0 === u
                                ? void 0
                                : null === (A = u.list) || void 0 === A
                                  ? void 0
                                  : A.length) > 0 &&
                            ((h = f.data.list),
                            (function e(t) {
                              var s, c;
                              t >= h.length ||
                                nb({
                                  data: {
                                    popupType:
                                      null === (s = h[t]) || void 0 === s
                                        ? void 0
                                        : s.popup_type,
                                    rank:
                                      null === (c = h[t]) || void 0 === c
                                        ? void 0
                                        : c.rank,
                                    user: i,
                                    grade: a,
                                    vip: l,
                                    medal: o,
                                  },
                                  bgColor: n,
                                  textColor: r,
                                  btnColor: I,
                                  shareConfig: d,
                                  nextAminate: function () {
                                    return e(t + 1);
                                  },
                                });
                            })(0));
                        case 23:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function (e, t, n) {
                return i.apply(this, arguments);
              });
          return W
            ? (0, F.jsx)("div", {
                className: b().error_wrap,
                children: (0, F.jsx)(eB, {
                  showClose: !0,
                  onClose: M.Hm,
                  textStyle: { color: "#000" },
                  reloadFn: function () {
                    (0, M.Dy)() && ev();
                  },
                  errorMsg: W,
                }),
              })
            : (0, F.jsx)(O.Provider, {
                value: R,
                children: (0, F.jsx)(y.q3.Provider, {
                  value: C,
                  children: (0, F.jsx)("div", {
                    className: b().wrap,
                    id: "scrollerContainer",
                    children: (0, F.jsxs)("div", {
                      className: b().content,
                      style: {
                        backgroundImage: "url("
                          .concat(D.Z.src, "), linear-gradient(")
                          .concat(x, ", ")
                          .concat((0, U.Wp)(x, 0), ")"),
                      },
                      children: [
                        (0, F.jsx)(w.Z, {
                          ref: H,
                          title: "听歌等级",
                          statusBarHeight: B,
                          titleBarHeight: V,
                          hasRule: !0,
                          hasGift: !0,
                          onRuleClick: function () {
                            return eh();
                          },
                          onGiftClick: function () {
                            return eC();
                          },
                          onTitleBarClick: function () {
                            return em();
                          },
                          wrapStyle: en,
                        }),
                        (0, F.jsx)(ec, {
                          user: es,
                          grade: eu,
                          medal: ed,
                          vip: eA,
                          timestamp: el,
                          abValues: Z,
                        }),
                        (0, F.jsx)("div", {
                          className: b().scroll_plane,
                          children:
                            (void 0 === ei || ei) &&
                            (0, F.jsx)(tm, {
                              rankData:
                                null == e
                                  ? void 0
                                  : null === (s = e.indexDataSSR) ||
                                      void 0 === s
                                    ? void 0
                                    : s.rankData,
                              defaultLevelRankType: A,
                              timestamp: el,
                              rankRuleUrl: null == c ? void 0 : c.rankRuleUrl,
                            }),
                        }),
                      ],
                    }),
                  }),
                }),
              });
        },
        nD = (function (e) {
          (0, u.Z)(r, e);
          var t,
            n =
              ((t = (function () {
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
              })()),
              function () {
                var e,
                  n = (0, A.Z)(r);
                if (t) {
                  var i = (0, A.Z)(this).constructor;
                  e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, d.Z)(this, e);
              });
          function r(e) {
            return ((0, s.Z)(this, r), n.call(this, e));
          }
          return (
            (0, c.Z)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  (console.log("Index component mounted"),
                    eq.initClientCom(!0, ""),
                    eq.closeClientLoading());
                },
              },
              {
                key: "render",
                value: function () {
                  return (0, F.jsx)(F.Fragment, {
                    children: (0, F.jsx)("div", {
                      className: b().page_wrap,
                      children: (0, F.jsx)(nE, nw({}, this.props)),
                    }),
                  });
                },
              },
            ]),
            r
          );
        })(h.Component),
        nR = function (e) {
          return (0, F.jsx)(x.SV, {
            needCatchGlobalErrors: !0,
            needCommonErrorPage: !0,
            children: (0, F.jsx)(nD, nw({}, e)),
          });
        };
    },
    63481: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/close.2abb3904.png",
        height: 45,
        width: 45,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAATUlEQVR42mVNOREAIAyLh841gCpcMHXpVgFVgwdMsOIBMtPLkueS4ALSuppa65ALSh1wGOFkAvq+ZmTkmnAqZRZ59tmRYLEYpVJH/9sHSB4uTUyAlpkAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    82215: function (e, t) {
      "use strict";
      t.Z = {
        src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/empty2.0a91749a.png",
        height: 600,
        width: 600,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAwklEQVR42mO4ceshIwMSmPPlP5wPB8dOXtG7fuPe/v//GZhAfH2rJD4Gw0VMDDBw9Ow1ySPnH01PrVhjLdf8eKtb5VEvBhhYOHG61P4pCZ7tNQs6Gbq//RGc8+8/Q+nD+oNtDHJZPRfYGEDg9JIGh3tb+v9vX7Hjx5ltm34eW7Ho/+bJdXkMMLBmaqfa6z2d/38fbfz/53jL/y+H2/8fXdRhw4AEmPbPqou/saF7zpX1Pc3Hl3QUV2bmijEQAku6mxkBFuBZEA74OX0AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    26286: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_vip1.8590b84c.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af///wOb2L036ePeMv8HBXcOBg31Ef8I3yMWHcgqHimYAdbz7FfF5dCj6Ojj/wH9ANDOxcg26uPjAFRGUwA6QEDBAf///wCd2r8+/vT2NuXx6HAD+QH0/e714CYeI8q6/eCZZWw4Hg/hVGIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    81219: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_vip10.447b5e1c.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af///wN42PE37+LUMgMHA3cUBg/1G/383yYVFcgzGxiYAeDs/1eZ7POj5enW/xH7/tDNxsY28uLcAFtFTgA6PkXBAQAAAABz2vc+EfLlNt3y6nAF+QH0Bu3w3zEeIstjAg2ZD0QyKBQGKEIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    29525: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_vip11.cc558e54.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af/3/wPvl8Q35u3rMgj9AHcDDwz1+RUK3xAkF8gULCSYAf3Q9Vfyv8+j7evr//oB/tDI09Y25u/uADhQPQA7NjbBAQAAAADwkMU+8gP8Nvjj7HD0Bv/06//63xomI8sOp+KZPag1T3zhSb8AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    37269: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_vip12.6a2a7bf0.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af/8/wPnmNU35u3uMgn9BHcCDwX1+RMC3w8kFMgUKhuYAfTS81fzw+Oj7erx//sB+9DI1NE25vDtADhNNgA5NjbBAf///wDpl9c+8gH7Nvnk83D0Bff06gD14BomHsoOrveZkR83ZgEiFKAAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    61208: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_vip13.8590b84c.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af///wOb2L036ePeMv8HBXcOBg31Ef8I3yMWHcgqHimYAdbz7FfF5dCj6Ojj/wH9ANDOxcg26uPjAFRGUwA6QEDBAf///wCd2r8+/vT2NuXx6HAD+QH0/e714CYeI8q6/eCZZWw4Hg/hVGIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    19227: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_vip14.fa5957d9.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AdH79wORqfc3/vL3MgADBXcJCP31GQv93yQeC8gpIg2YAazU9Fe10/mj//L8/wH+9NDa08o2++7uAEJELQAsNTLBAQAAAABcpO0+FgT7NunvAnAB+u30Avzq4CMkGMp/0QyZ2ooxfRHMBVAAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    80718: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_vip15.eea94f30.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af/+/wP0jsc36OrtMQf+/3gBEQz19xYK3w0lFsgRLiGYAffS91f7u9Cj8Ons//gD/dDH0tc25+7wADNUOgA5ODXBAf///wD1jsg+8gT+Nvrg7HD0BgD06QH83xYoIcsVmeaZ1qo3T8fHv4wAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    65762: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_vip16.2f9824e6.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af/6+QPifAU32evxMQYBCHgKEvv1/hv23xcqC8ggLwyYAf/I/FfirwOk3+n4/v0I8dDBzsI23O/nAFBfMwBFODnBAf//AADld/4+7Ar1Nu3bA3D9COv07QPn4B4sFcr+bhiZE+00POau2jIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    84179: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_vip17.d57a85a6.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af/6/wPOk9E32+vjMQb9CXgOEAT1AxT73xknEsgnLBmYAfvP5VfTv+uj3+jr/wIC/NDFz8Y24OziAFFYQQBCOD3BAQAAAADQjtI+8gLyNuri9XD/Bff08gDs4CMoHMrtnAaZ6Qky9FJ1Ra0AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    21903: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_vip18.92ab5464.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Afn//wNtovs38O3wMgMECXcSCvv1HQv43ykgDccwJQyZAcTW/1ekzvyj7O31/wsA8tDR0MA29OnlAFtOOgA1OTzBAQAAAABjovs+EgH2NtvsAXAG/e30B/3n3y4nGMt1zxSZsM4wtdU71yEAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    9696: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_vip19.2f969ba2.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af///wPnzsI31tXWMgkHBXcKDhH1+gAG3xgcHsgeJiuYAf/081fq29Cj3NrZ//0BBNC6v8I20dLWAF5jZABLR0bBAf///wDs0sY+6e3xNu/o43D7AQL07vP44CQlKcoE9OaZJms20PaCqNMAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    98913: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_vip2.89c74a3b.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Afr//wOQyOg37O7jMfwGCngQAwP1FgD63ycYEsgtGRiYAc3j+1e+5+2j6fDq/wL7/NDPy8I27eniAFg/QgA4OUDBAQAAAACLyek+A/ryNuH19nEG9vXzAfLq4CggHsqU9QqZJOs0IpTRzWEAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    46717: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_vip20.303b40ce.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af//9AP3y4k349jvMgoG/HcBDhH19gQa3w8cKccUKS6ZAf/4x1f40rak693s/vkCBNDAxM424d7xAD9WWgA/RDfBAf///wD5zn4+7/AJNvno3nDxAQj06PEC4BojKsoV6miZSaU1BMDnPzoAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    25449: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_vip3.9bf2f4d1.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af///wPmpJ435ebsMggA/ncEEA71/BAQ3xEgIcgZLSmYAfng1lfsxMij7OXq//wDAdDJ0dU25+zwADpNRwA7OjXBAf///wDnpqA+9P7/Nvbk6HD2BAL07fz94BslJMoGvryZY003Bn2W+MEAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    32509: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_vip4.408bd287.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af///wPTmts33ujkMgUABncLDwX1ARD+3xkkFcgkKhuYAfXW8Ffdxeqk4+bq/v4D+tDFzsY24OnjAE9VRABBOj7BAQAAAADUm9w+8v/yNu3k9HD9A/j08f3u4CEnHcr0uAGZ+kQ1TbKfDgQAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    23292: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_vip5.705acaa1.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Aeb//wOc0Kc37ebhMf4IBHgOBA71E/wJ3yQSHccnGCeZAb7j11fF7dCj6+zj/wH8AtDTyM027uXlAFA+TwAzOjvBAQAAAACE0ag+AfT4NuX16HAF9wP0/u734CQbIcqoBdqZxl8yaYa9AX8AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    84365: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_vip6.7e57e3f7.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af/5+gN+qf437O/0MgIDCHcRCPr1GAv53ygfC8gvIg2YAc3R+ley0/6j6fD6/wj/8dDQ0cQ27+vpAFpIMwA4NzfBAf///wB/pPk+CQH4Nt7uA3AF++v0A/zo4CwlFspn0hKZSdQ0vx9B0TAAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    48809: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_vip7.6886b841.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af/+/wPlmaw35+zvMQj+/3gDDwv1+hMO3xAjHsgVLCeYAfXW31fwws2j7evv//sA/dDJ1NY25+/xADhNQgA6NzXBAQAAAADmmKw+8wMCNvjk6nH0BP/z7P/83xolJMsLsMyZcMs1E6SjuWsAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    52841: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_vip8.d52231d9.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af//9gPom+A35+rxMgj+BncCEAH1+BL93w4jEMgRLBCYAfHZ41f3w/Wj7uf1//kC+dDJ08825u7tADZPMQA4ODLBAQAAAADpnNc+8QD6Nvrk+nD0BPT07P/x4BcnGsoSswSZhl41acwK5AMAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    35149: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_vip9.96093e82.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af///wO36dA34uLbMQQJB3gMAwv1CPkB3x4UG8goGiWYAeb69VfR79uj5Ong/wH6ANDIwcM24+DdAFRFVAA+QUPBAQAAAAC56tI+9/HxNun163D/9v709+rx4CQdIsrbCfKZ5RM1rrYoh1kAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    5963: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_music_pack.fd65f7f1.png",
          height: 26,
          width: 34,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAoElEQVR42k3HPwsBARzH4Y87i1UWo3RSXgGDV+I1mLwKm5lFWCQGi5SU6yZZSN6AUSnl6P58f6Yrz/bkOnuVUuEnov5NUK0Ajw/O8cW17NLOpyJIjVqSovUTZ1sFGdqfaNwjAkfGOUwgZ9ihCV4RBhcsjAHjBkB9pUl3JzNT/I4Ue1NZZawZ/ypzzfu+rLeRMdKCTGspl8xIB4bys3pjuT9ED1UQXt3OZQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 6,
        }));
    },
    87528: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_music_pack_year.248855a2.png",
          height: 51,
          width: 81,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAApUlEQVR42mPY/eIfT/P5f/UTL/9r6zz3v4Vh418BBmRQefrf2tgj//+vvf3vf9eJf/+dNvw/v+7WrxWrrv/YuP/pv6UMFlv/L6o//O//73//fsWt+fcrf/f//90H3v4vXP34/+7Hf7+BTcne+b+vfse//wXb/v3f+OD//0WXvv+bdfLj/z2P/65A2NX5L3bJjf/uG+//c9nz4r/LyQ//3Y+++i8FAF0JZqVA+VoIAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 5,
        }));
    },
    29288: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_rocket1.6c5707eb.png",
          height: 72,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af///wPzjcY36eruMQf+/ngBEQz19xYL3w0mFscQLyGZAffS+Ff7vM6j8Ojt//gD/NDH0tg25+/wADNTOgA5ODXBAf8AAAD0jsc+8wP+Nvrg7HD0BwD06QD83xUoIssXleWZmeo1Tb/u88EAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    92301: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip.1b40af69.png",
          height: 51,
          width: 60,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA40lEQVR42mMAAmEGKFjRlDJ/67zehVAuRC7X2+SGqwxDPpBTVx9m/n/7lJr/PZVJ9dOrwvJWT627wVAZaLK7Ij7g/4y+jv/Wxob/qkPM/+2f0/B/c1/h/9X9FbsZWmIcy8sCzP8/uHD417m96/6f3bHk/+tTG34tq4r9P6M6toKhOdbZoTfJ5X+iheDvp0dX/nl76/if2fmhv5dWhv/vLQx2ZPBTZRDsSnT5VBVg+H9pRcD/fX1p/5cWuP9fXhP12cnLGOKBBFvl8pogvVWraoLmb+1Onj8733VlT7JTBQMDAwMAbSpm9fC9K9UAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 7,
        }));
    },
    31770: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_1.a2e2519c.png",
          height: 102,
          width: 306,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AWJIOWwqJyFHIiUgw/Tw9Q7Y2975BgwRAv/8+//88egNAYxxYeEyNjUe+/DmAAoYIwDt7O8AAAUHAOnr7QDh1c/aAX1SLYc1OkFfCAP68SIiIQLT09kA2uXv/ebn6g8PCweO22suNV9VNCIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    66542: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_2.fbcd8909.png",
          height: 102,
          width: 306,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AWJIOWwqJyJHIyUfw/Pw9Q7Y2t75Bg0RAvn3+P8D+O8NAYxxYeEyNjUe+/DmAAoYIwDu7e8A/QIGAPv7+wDo4d3aAX1SLYc1OkFfCAP68SIiIQLU09kA1+Pt/QQFCA8FAP2Ovj4svTBkC2wAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    21617: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_3.15e241e3.png",
          height: 102,
          width: 306,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AWJIOWwqJyJHIyUfw/Pw9Q7Y29/5BQsPAgMCA//88egNAYxxYeEyNjUe+/DmAAoYIwDu7e8A/QIGAPr7/ADi2tXaAX5SLYc0OkFfCAP68SIiIQLT09kA2uTv/fT2+A8HAv+OPOEtjG/8pasAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    54563: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_4.1ab30436.png",
          height: 102,
          width: 306,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AWJIOWwqJyJHJCUgw/Lw9A7X2t75CA4TAu3n5P8G/PINAYxxYeEzNzUe/PDnAAcXIgDv7O8A/gQHAPj49wDZz8raAX1SLYc2OkFfBwP68SIiIQLT09kA2ePu/fr+Ag8OCQWOuPgtZRp4vpgAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    5074: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_5.a4ceb260.png",
          height: 102,
          width: 306,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AWJIOWwqJyJHIyUfw/Pw9Q7Y2t75BgwRAv39/P/98OcNAYxxYeEyNjUe+/DmAAoYJADu7e8A/gMFAP8AAQDZz8raAX5SLYc0OkFfCAP68SIiIgLU09gA2OTu/fr7/w8IBAGOwOstgmS43IIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    10734: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_6.7511ca0d.png",
          height: 102,
          width: 306,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AWJIOWwqJyJHIiUfw/Tw9Q7Y2t75Bg0RAvbz8v8D+O8NAYxxYeEyNjUe+/DmAAoYJADu7e8A/QMFAAIBAQDa0c3aAX1SLYc1OkFfCAP68SIiIQLU09kA1+Pu/f4AAw8LBgOORQ4pmWGKWhAAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    37526: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_7.3bf466f0.png",
          height: 102,
          width: 306,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AWJJOWwqJiFHIyUgw/Pw9Q7Y2975BAoPAgkICf/88usNAYxxYeEyNjUe+/DmAAoYIwDu7e8A/gMGAPL09gDq4t7aAX5SLYc0OkFfCAP68SIiIQLT09kA2uXw/ejo6Q8HAfuOQaktedKCUJwAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    58160: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_8.f7af77fa.png",
          height: 102,
          width: 306,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AWJIOWwqJyJHIyUfxPPw9Q3Y2t75BQwQAvr5+v8D+PANAYxxYeEyNjUe+/DmAAoYJADu7e8A/AEEAAwMCwDh29jaAX5SLYc0OkFfCAP68SIiIgLU09kA1+Pt/QMFBw8HAv+OS/Ap4pFwo7gAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    14960: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_9.e2473a83.png",
          height: 102,
          width: 306,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AWJIOWwqJyJHIyUfw/Pw9Q7Y2975BgsQAv7+/v/+8uoNAYxxYeEyNjUe+/DmAAoYIwDu7fAA/AEEAAQEBADm39zaAX5SLYc0OkFfCAP68SIiIQLU09kA2OPu/fX4+g8PCQeOoccsxba84wYAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    6604: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_none_1.6e0a4539.png",
          height: 102,
          width: 306,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPklEQVR42mPIypm4eU3ZgpbG2q76zrrWboaJD3f83/J/5//F/5f/n/a/8SZDQ/uKZxuuH7o562bztdKnTcUADWMgHM9OO3UAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    45193: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_none_2.13400c20.png",
          height: 102,
          width: 306,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPklEQVR42gEzAMz/AGpskbOsdqCEgX2Kf4d+hosAkeG4/7T/uf+j/6b/of+S2QCAh6jmsNfC2ZrZgtaF5YxzD5wgT6CM4NYAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    94679: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_none_3.c2cd86f9.png",
          height: 102,
          width: 306,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPklEQVR42mPIypm4eU3ZgpbG2q763rr2boaJD3f83/J/5//F/5f+X/S/9yZDQ/uKZxuuH7o562bztZqnrcUAEBcgQmK0+jMAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    98174: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_none_4.eb166e54.png",
          height: 102,
          width: 306,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPklEQVR42mPIypm4eU3ZgpaG2p76urqGboaJD3f83/J/5//F/5f/n/+/5SZDQ/uKZxuuH7o562bTtcanvcUADGkgL/b9g6EAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    41316: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_none_5.775c95d9.png",
          height: 102,
          width: 306,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPElEQVR42mPIypm4eU3ZgpbG2q76zrrWboaJD3f83/J/5//F/5cBYedNhob2Fc82XD90c9bNpmv1TzuLAQ9kIENutu7VAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    1010: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_none_6.a190e728.png",
          height: 102,
          width: 306,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPklEQVR42mPIypm4eU3ZgpaG2u76lrqWboaJD3f83/J/5//F/5f9X/6/+yZDQ/uKZxuuH7o562bTtaanvcUADs8gRx5qiNIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    67568: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_none_7.0cfb359e.png",
          height: 102,
          width: 306,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPklEQVR42gEzAMz/AGpskbOsdqCEgX2Jf5J+jYsAkeG4/7T/uf+j/6b/nf+P2QCAh6jmsNfC2ZrZg9Z15X1zES0gO51/50kAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    59975: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_none_8.d0e6f114.png",
          height: 102,
          width: 306,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPklEQVR42gEzAMz/AGpskbOsdqCEgX2Kf4h+h4sAkeG4/7T/uf+j/6X/r/+Y2QCAh6jmsNfC2ZrZgtaE5Y1zEWUgZG/v1LsAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    57631: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_none_9.49d39ff4.png",
          height: 102,
          width: 306,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPklEQVR42gEzAMz/AGpskbOsdqCEgX2Kf4p+hosAkeG4/7T/uf+j/6X/qf+W2QCAh6jmsNfC2ZrZgtZ95YpzEMcgU/jdYCYAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    93658: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_year_1.b0d64ebf.png",
          height: 102,
          width: 354,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nGNszUtYpq4ip8XNxfHg43cGzu+//vz98vMPw98nZ5l1Jf9+YZxcmrBTVUnWiZ+b9ed/Zi6me09eM9x98fGfkfhXbnEB1tUABHYeprCu6scAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 2,
        }));
    },
    99832: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_year_2.1e1ccceb.png",
          height: 102,
          width: 354,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nGNszUtYpq4ip8XNxfHg43cGzm8/f//9w8DM8P/lVWZlntdfGCeXJuxUVZJ14udm/cnAwsV06+Erhi+/Gf+pC3zi5mH5uhoAklwblwuJFpgAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 2,
        }));
    },
    73077: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_year_3.2a2b658b.png",
          height: 102,
          width: 354,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nGNszUtYpq4ip8XNxfHg43cGzq8/fv39z8LO8OfpRWYV3jdfGCeXJuxUVZJz4udm+fmfmYvpzuNXDG+//vunKfiRW5Dz92oAsAsdm0IMn/4AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 2,
        }));
    },
    66697: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_year_4.6baf2f26.png",
          height: 102,
          width: 354,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nGNszU1Ypq4qp8XNyfHg4w8Gzu+//vz9/vsvw6+Hp5h1pf5/YZxcmrBTVUnOiZ+b5ed/Zi6mO49fMbz//v+fOv87bkHOv6sBB1MfovwVD/IAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 2,
        }));
    },
    85418: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_year_5.3912de39.png",
          height: 102,
          width: 354,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nGNszUtYpq4ip8XNxfHg43cGzq8/f/1lYuVk+PbgNLO6wMcvjJNLE3aqKsk58XOz/GRg4WK6/egVw6ffzP9Ued5wC7D/Xg0AZXMam2QYUGMAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 2,
        }));
    },
    67643: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_year_6.968f65f4.png",
          height: 102,
          width: 354,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nGNszUtYpq4ip8XNxfHg43cGzm8/f/9lYGFj+PHwLLOa4McvjJNLE3aqKsk58XOz/GRg4WK69fAVw9e/LP9UeN5y87H9WA0AZaUamhQtJMsAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 2,
        }));
    },
    66217: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_year_7.6a8cc40d.png",
          height: 102,
          width: 354,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nGNszUtYpq4ip8XNxfHg43cGzm8/f/39y8TO8P/VdWYljqdfGCeXJuxUVZJ14udm/fmfmYvp7pPXDI/efvtnKPaVW4T7/2oAr4Ydm91lYOMAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 2,
        }));
    },
    51358: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_year_8.f0da6f1c.png",
          height: 102,
          width: 354,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nGNszUtYpq4ip8XNxfHg4w8Gzi/ffv7l5OVn+PnkMrMsy4MvjJNLE3aqKsk68XOz/mRg4WK69eAFwx9Wnn+KXO+4Of+/Ww0AXbQajJKT0yYAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 2,
        }));
    },
    97445: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_suvip_year_9.52733ad0.png",
          height: 102,
          width: 354,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nGNszUtYpq4ip8XFxfHg03cGzq8/fv5l4eBh+P3sMrM8+5MvjJNLE3aqKsk58XOz/GRg4WK69fAlw6ffzP80BT9zczN9Xg0AZT4akeL9NJ8AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 2,
        }));
    },
    13812: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip.1cb56f2f.png",
          height: 51,
          width: 60,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA00lEQVR42mMAgQcXtk37dmnK/8/7gv9+3hfy99vlKf8fXto1Eyz55PisTT9vLfr/7Wzjv/836v7/v1H7/+uZpn8/rkz7/+Rgx2aGB8cXzf57d8n/LU0mvy9t6/9/amP//7VJDL//7nP4/2BX1WywKS8ONa77cTjhf0uI8K8SH95f33fb/H+xPW4dAxJg/bTe6ObzhTL/nx6t/v/5WPZNkBhY5uR0VxYQHc/AIPf1RMW3b3dWfIsDssFyS1LAcgy3NuSCVR9cUe9zcGGZD1hsVwtYDAB2r3FfZnDL9gAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 7,
        }));
    },
    70661: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_1.d0b99ee7.png",
          height: 102,
          width: 270,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AevPob0D+N5C/gEH8vjq65oC6LTx/xMvAwYPEgAABRD+Ae/GhX/b29uAGAv3APjn4wDo7+8ACRQYABQZEwARExnYAfPktwD43L2N/+PiXPjdqu34EjIDDBMR/QcTFw75AQ1/e6suAugay/4AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    71390: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_2.24f1c9ec.png",
          height: 102,
          width: 270,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AevPob0D995C/gIH8vjq65oC6LTxABMvAwgREwD8Ag/+Ae/GhX/b29uAGAv3APjn5ADo7+4ACRQYAAcODwAUFhnYAfPktwD43L2N/+PiXPjdqu34EjIDCxIR/fkHEg4BCRB/cvMt3Iz7f4QAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    81766: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_3.864a3071.png",
          height: 102,
          width: 270,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AevPob0D+N5C/gEH8vjq65oC6LTxABMwAwIMEAABBxH+Ae/GhX/b29uAGAv3APjn4wDo7+8ACRQYAAcODwAYGhvYAfPktwD43L2N/+PiXPjdqu34EjIDCxIR/QMPFg79BQ1/KmUs8K1kRAAAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    45021: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_4.b99c8e16.png",
          height: 102,
          width: 270,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AevPob0D995C/gEH8vjr65oC6LTx/xMvAw4VFQD5AA7+Ae/GhX/b29uAGAv3APjn4wDo8PAABxEWAAwTEQAZGhvYAfPktwD43L2N/+PiXPjdqu34EjIDCxMR/f0KFA78BA1/yS0v8JHYYkYAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    3084: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_5.28ed13c9.png",
          height: 102,
          width: 270,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AevPob0D+N5C/gEH8vjq65oC6LTx/xMvAwUOEgABBhD+Ae/GhX/b29uAGAv3APjn4wDo8PAABxEWAAQNDwAfHx3YAfPktwD43L2N/+PiXPjdqu34EjIDCxIR/QANFQ7+BQ5/eaEt9PZmprQAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    74891: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_6.8727d6da.png",
          height: 102,
          width: 270,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AevPob0D+N5C/gEH8vjp65oC6bTxABMvAwoSFAD7Ag7+Ae/GhX/b29uAGAv3APjm5ADo8O8ABxIWAAQMDgAeHx3YAfPktwD43L2N/+PiXPjequ34ETIDDBMR/fsJEw7+BQ5/eSQu6NqR3z8AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    53962: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_7.4ad26eaf.png",
          height: 102,
          width: 270,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AevPob0D+N5C/gEH8vjq65oC6LTx/xMwAwAKDwACBxH+Ae/GhX/b29uAGAv3APjn5ADo7+4ACRQYAA0TEQAPExjYAfPktwD43L2N/+PiXPjequ34ETIDCxIR/QgUGA79BA1/dqUt8JrjFrMAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    62893: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_8.caa86398.png",
          height: 102,
          width: 270,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AevPob0D995C/gEH8vjr65oC57TxABUwAwcPEgD9Aw/+Ae/GhX/b29uAGAv3APjn5ADp8O8ABhEXAPcBBwAkJCDYAfPjtwD43b6N/+PhXPjdqu35EjIDCRIR/foHEw4CCQ9/mrou2Wh4skIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    21882: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_none_1.44d5016c.png",
          height: 102,
          width: 270,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAaUlEQVR4nBXHwQmAIBQA0G+pIGoXm6g52sUWaIF2aQhBMNxBQUE9SFEd3uEha+3Ze18opbmUcuScE2Ns/AAh5EHGGO2c25RS0FqDEAIIIeD/PKsLee+h1rqnlNYYY8AYj1LKm3M+DQPSL3jZLA8jVz5zAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    71558: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_none_2.90af0b81.png",
          height: 102,
          width: 270,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAaklEQVR4nA3KzQmAIBiA4e8zxB+ki+BAzdEutkALtEtDCILhDh4U0YMUeXhP74Pe+3uMsTHGSq31KqVkKeUyA0LIh845G0I4tNbQe4eUEiilQAgBxpgHY4zQWjtzzvuciVK6TPAi4so5sz9zvCvm3xsaOgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    96116: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_none_3.b7164c66.png",
          height: 102,
          width: 270,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAaklEQVR4nA3JwQmAIBQA0C/h9yfWxZPrNEe71AIt0C4NIQiGO3hQRA9S1O3BY865q/e+CCFyKeXMOScp5YCIgMhfZq3dvPe71hpaaxBjhGlSQDSCMeZmIQSotR4ppfXPyDkflFIPEc2/tw91Div7Ly2HKgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    11971: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_none_4.689f6512.png",
          height: 102,
          width: 270,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAaUlEQVR4nA2K0QmAIBRFnygIov74leM0R7vYAi3QLg0hCIY7JCiiH1L0LlzOxzkkhHDNOVfOeW2tnbXWIoSgWmvAfcR772KMuzEGxhiQcwYMQCkF1i43SSlB7/0opWwoH8YYlVK+SI13P3ioK/4b3JfjAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    52135: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_none_5.8a527827.png",
          height: 102,
          width: 270,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAaUlEQVR4nBWMwQmAIBRAv4RfEOni3WGao11sgRZol4YQBANnSFAUD1L0e7cHj8e89+cYYxFClFrrUUrJUsqJHBD5y5xzNoSwaa2h9w4pJaAA/sAYc7EYI7TW9pzzehOc80kp9SDiTAf7AXZ+LABMyBUgAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    93814: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_none_6.126cb391.png",
          height: 102,
          width: 270,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAa0lEQVR4nA3KwQnEIBAAwNXFFVTu499iro7rJddAGkgvKUIQDFhDBEXxIQnJvIeFEPY551dKWVtrW621KKVQaw2c85t575cY499aC2MMyDnDG4CIwDl3sJQS9N7XUsrvfAkh0BhzIeKHSCwPdjsr9X2Sdy8AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    12909: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_none_7.8542307e.png",
          height: 102,
          width: 270,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZ0lEQVR4nA2JwQmAIBRAv6QIol10ouZoF1ugBdqlIQTBsBk8KKYHKfoP3uU94r0/xxgL57zUWo9SShZCTAhg+4hzzoYQNq019N4hpQRKKZBSgjH6IneM8LS255xXnIkxNuF80ZlRan9ziCv8v9AftQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    50051: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_none_8.141e5bfc.png",
          height: 102,
          width: 270,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbElEQVR4nA3K0QmFIBQA0KsXMRXejxu8NmmOdqkFWqBdGkIQDJwhQVH80KLO9yHW2qO1NnHOU855TylFKSUKIQARH2KMWZxzq9Yaaq0QQoAvQO8dxvF/Eu89lFK2GON8fRhjqJS6KaW/YeDLC+p5LuKMKLreAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    73527: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_year_1.b305401f.png",
          height: 102,
          width: 315,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AezOnMcC+OI4/P4Jx/rUq7EBERgJChQX/+Dp/QDG1wD+Aee+fJLm5uNtGQLtAOLd4AAAEhYAFxsQAPT+HADg7wriAfj//ADzvHex/NS/M/T65/MIGysCDBYW/c3X8A/+Aw2RGrYytTD4EQIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    26297: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_year_2.6d3aa638.png",
          height: 102,
          width: 315,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AezOnMcC+OI4/P4Jx/rUqrEBEhkJDBUY/97m/ADG2P/+Aee9fJLm5+NtGQLtAOLd4AABExYAChALAPkDHwDq9QziAfn//ADyvHex/NS/M/X65/MHHCsC/QkQ/dng9Q8CBw6RPegyuhY8atoAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    46562: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_year_3.34c73e96.png",
          height: 102,
          width: 315,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AezOnMcC+OI4/P4Jx/rUq7ECEhgJBxEW/+Hp/gDH2f/+Aee+fJLm5uNtGQLtAOLd4AABExcAChAKAPsFIADn8wviAfn//ADyvHex/NS/M/X65/MHGysCBhIU/dPa8Q/+BA2RNhIytlGt9fAAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    88250: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_year_4.ccc444e0.png",
          height: 102,
          width: 315,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AezOnMcC+OI4/P4Jx/rUq7EBERgJERoa/9vk+wDD1v7+Aee+fJLm5uNtGQLtAOLd4AAAEhYADhMLAPwFIQDh8AriAfn//ADyvHex/NS/M/T65/MIHCsCAgwS/dTc8g8DCQ+RMbIxt5KCoE4AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    97860: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_year_5.891f9c05.png",
          height: 102,
          width: 315,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AezOnMcC+OI4/P4Jx/rUqrEBEhkJChMW/+Do/gDG2P/+Aee+fJLm5uNtGQLtAOLd4AAAEhYABw0JAAEKIwDk8QriAfn//ADyvHax/NTAM/T65/MIGysCBBAT/dTb8g8ABg6RCJowt40vHQQAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    47529: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_year_6.2509ebbd.png",
          height: 102,
          width: 315,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AezOnMcC+OI4/P4Jx/rUq7EBERgJDhgZ/93l/ADF1/7+Aee9fJLm5+NtGQLtAOLd4AAAEhYABg0IAAEJJADl8griAfn//ADyvHex/NS/M/T65/MIHCsCAAsS/dbe8g8CBw+RCJIwt3eYfdMAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    3329: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_year_7.b384e16f.png",
          height: 102,
          width: 315,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AezOm8cC+OM4/P4Jx/rUq7ECEhgJBA8V/+Hq/gDL2wH+Aee+fJLm5uNtGQLtAOLd4AABExcADxUMAPX/HgDo9AviAfn//ADyvHex/NS/M/X65/MHGysCDBYW/c/Y8A/7AQyRGxYyt+2Q1V4AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    66203: function (e, t, n) {
      "use strict";
      (n.r(t),
        (t.default = {
          src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/ic_svip_year_8.542132d4.png",
          height: 102,
          width: 315,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AezOnMcC+OI4/P4Jx/rUq7ECEhgJCxUY/93m/ADH2P/+Aee9fJLm5+NtGQLtAOLd4AABExcA+QEBAAgQKADs+A3iAfj//ADzvHex/NS/M/X65/MHGysC/QoQ/dng9A8DCA+RQX4yvvOCpyQAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        }));
    },
    51571: function (e) {
      e.exports = {
        loadMoreWrap: "LoadMore_loadMoreWrap__RqbC6",
        loadMoreWrapIOS: "LoadMore_loadMoreWrapIOS__aAqS7",
        loadMoreWrapAndroid: "LoadMore_loadMoreWrapAndroid__sw5g2",
      };
    },
    17705: function (e) {
      e.exports = {
        lottieWrapFadeIn: "Index_lottieWrapFadeIn__x82_o",
        lottieBaseWrap: "Index_lottieBaseWrap__yc4GY",
      };
    },
    51692: function (e) {
      e.exports = {
        wrap: "Dialog_wrap__gszLs",
        content_middle: "Dialog_content_middle__GCtO_",
        content_bottom: "Dialog_content_bottom__CK0t9",
        mask: "Dialog_mask__SEc1K",
        show: "Dialog_show__B_KqV",
      };
    },
    16388: function (e) {
      e.exports = {
        dialog_area: "Index_dialog_area__Vs6Ek",
        area_top: "Index_area_top__TGEHc",
        area_selected: "Index_area_selected__doPkC",
        selected_item: "Index_selected_item__0R8Kj",
        selected_item_title: "Index_selected_item_title__HDOwr",
        selected_item_content: "Index_selected_item_content__h5dld",
        area_bottom: "Index_area_bottom__A51Mb",
        close_btn: "Index_close_btn__Q5IlO",
      };
    },
    74853: function (e) {
      e.exports = {
        first_dialog_wrap: "Index_first_dialog_wrap__Ydpxy",
        close: "Index_close__5u_fv",
        one_wrap: "Index_one_wrap__GHkvP",
        avatar_wrap: "Index_avatar_wrap__FUU_8",
        avatarRing: "Index_avatarRing__HVQqP",
        avatar: "Index_avatar__V_b_w",
        avatarInBlur: "Index_avatarInBlur__hWd6w",
        name: "Index_name__Bw3GN",
        fadeInBlurUp: "Index_fadeInBlurUp__qQNG8",
        block: "Index_block__sHKv9",
        block_1: "Index_block_1__zGWl2",
        block_2: "Index_block_2__RZsRP",
        block_3: "Index_block_3__Z4Zk4",
        label: "Index_label__6VOlC",
        value: "Index_value__mgwYU",
        one_wrap_skipped: "Index_one_wrap_skipped__b9oSh",
        one_wrap_burst: "Index_one_wrap_burst__nte3z",
        contentFadeOutBlur: "Index_contentFadeOutBlur__uhwUN",
        one_wrap_hidden: "Index_one_wrap_hidden__t3oMy",
        two_wrap: "Index_two_wrap__Y0k2S",
        two_wrap_visible: "Index_two_wrap_visible__p63i0",
        lottie_wrap: "Index_lottie_wrap__l2_s6",
        lottie_wrap_hidden: "Index_lottie_wrap_hidden__Nb8d4",
        second_screen: "Index_second_screen__pWl2o",
        static_content: "Index_static_content__Gv6KO",
        static_content_visible: "Index_static_content_visible__VwdlJ",
        staticContentFadeIn: "Index_staticContentFadeIn__R_ZXg",
        tips: "Index_tips__bt6Iz",
        user_info: "Index_user_info__PDet1",
        nickname: "Index_nickname___B6ID",
        btn_wrap: "Index_btn_wrap__ROxFr",
        btn: "Index_btn__TXR3c",
        btn_replay: "Index_btn_replay__4B9h5",
      };
    },
    4560: function (e) {
      e.exports = {
        dialog_posters_wrap: "Index_dialog_posters_wrap__q6yfp",
        wrap: "Index_wrap__9w7y5",
        PosterDoms_wrap: "Index_PosterDoms_wrap__vAn7h",
        footer_ways: "Index_footer_ways__XJhkn",
        list: "Index_list__yYolQ",
        short_list: "Index_short_list__I9wBK",
        item: "Index_item__Wu9Xc",
        img: "Index_img__J11aG",
        title: "Index_title__CgZzy",
        close: "Index_close__okrSY",
        generated_preview: "Index_generated_preview__o7iS0",
        single_poster_wrapper: "Index_single_poster_wrapper__47CgC",
        swiper_wrap: "Index_swiper_wrap__Zynam",
        swiper_slide: "Index_swiper_slide__3Fk7_",
        poster_slot: "Index_poster_slot__2Vln_",
        poster_slot_legacy: "Index_poster_slot_legacy__GNKo2",
        poster_img: "Index_poster_img__KytB8",
        poster_img_fade_in: "Index_poster_img_fade_in__j94Cu",
        poster_skeleton: "Index_poster_skeleton__BMxmT",
        poster_skeleton_hidden: "Index_poster_skeleton_hidden__jDx7m",
        poster_skeleton_shimmer: "Index_poster_skeleton_shimmer__zxOzr",
        swiper_slideName: "Index_swiper_slideName__ojlLo",
      };
    },
    15719: function (e) {
      e.exports = {
        wrap: "Index_wrap__RD4_2",
        box_wrap: "Index_box_wrap__nYzkj",
        top: "Index_top__kSzSV",
        right: "Index_right__nSqXo",
        bottom: "Index_bottom__Z_mlV",
        left: "Index_left__aXYYx",
        medal: "Index_medal__d3OEC",
        medal_shadow: "Index_medal_shadow__MJ3fd",
        number_wrap: "Index_number_wrap__7s71x",
        number: "Index_number__iP8PP",
        num: "Index_num__1f1_R",
        shadow: "Index_shadow__jB4pi",
        user_info_wrap: "Index_user_info_wrap__RQWWm",
        head_img: "Index_head_img__RLPkK",
        name: "Index_name__QhzJZ",
        text_wrap: "Index_text_wrap__2QthQ",
        text: "Index_text__lyz_1",
        text1: "Index_text1__QSHGm",
        text2: "Index_text2__ndpb9",
        footer: "Index_footer__WXoE1",
        tip: "Index_tip__KplT7",
        userData: "Index_userData__oFMyS",
        gridWrap: "Index_gridWrap__bOIXJ",
      };
    },
    23443: function (e) {
      e.exports = {
        first_dialog_wrap: "Index_first_dialog_wrap__rpGXs",
        close: "Index_close__Kx7sT",
        one_wrap: "Index_one_wrap__3BO66",
        rank_group: "Index_rank_group__HthnR",
        rankGroupShiftDown: "Index_rankGroupShiftDown__bPfDw",
        lottie_wrap: "Index_lottie_wrap__lZvQs",
        lottie_wrap_visible: "Index_lottie_wrap_visible__CzE6t",
        rank_title: "Index_rank_title__qHbKJ",
        fadeInBlurUp: "Index_fadeInBlurUp__1_hy2",
        rank_content: "Index_rank_content__oeo3T",
        l: "Index_l__gYYW7",
        r: "Index_r__e_79f",
        rank_content_lottie: "Index_rank_content_lottie__PU4hj",
        rankSideGradientHide: "Index_rankSideGradientHide__6a5SP",
        c: "Index_c__Qbt4Y",
        top_text: "Index_top_text__HsJHD",
        avatar_wrap: "Index_avatar_wrap__dOfGq",
        avatar: "Index_avatar__8t9aM",
        name: "Index_name__ngB40",
        one_wrap_skipped: "Index_one_wrap_skipped__VkTUR",
        one_wrap_burst: "Index_one_wrap_burst__EiCIX",
        contentFadeOutBlur: "Index_contentFadeOutBlur__PSN1C",
        one_wrap_hidden: "Index_one_wrap_hidden__xYXKf",
        oneWrapFadeOut: "Index_oneWrapFadeOut___Y6tF",
        two_wrap: "Index_two_wrap__rmiuH",
        two_wrap_visible: "Index_two_wrap_visible__fis6_",
        second_screen: "Index_second_screen__v0APF",
        static_content: "Index_static_content__jfq_f",
        static_content_visible: "Index_static_content_visible__Yyi2p",
        staticContentFadeIn: "Index_staticContentFadeIn__XPcRn",
        gift: "Index_gift__lVPBy",
        btn_wrap: "Index_btn_wrap__5eYA6",
        btn: "Index_btn__c4xZ_",
        btn_replay: "Index_btn_replay__jEZPj",
        closeButtom: "Index_closeButtom__Cv9i3",
        avatarInBlur: "Index_avatarInBlur__20NuB",
        avatarRing: "Index_avatarRing__nP5AL",
      };
    },
    80592: function (e) {
      e.exports = {
        wrapper: "Empty_wrapper__ZEuwO",
        load_style_no_result: "Empty_load_style_no_result__C5msO",
        load_text: "Empty_load_text__J_DO5",
        btn: "Empty_btn__M95nD",
      };
    },
    79341: function (e) {
      e.exports = {
        wrapper: "Error_wrapper__1kABl",
        icon_close: "Error_icon_close__KNvzs",
        load_style_no_result: "Error_load_style_no_result___6Ogu",
        load_text: "Error_load_text__azB5p",
      };
    },
    16963: function (e) {
      e.exports = {
        card_wrap: "Index_card_wrap__dOT6_",
        medal: "Index_medal__grAy2",
        medalFloat: "Index_medalFloat__DzZXW",
        new_ui: "Index_new_ui__gu_Zi",
        base_info_wrap: "Index_base_info_wrap__hJP8e",
        name: "Index_name__I7b5w",
        level_big: "Index_level_big__awf0S",
        listen_value_wrap_outer: "Index_listen_value_wrap_outer__BzqQQ",
        speed_process: "Index_speed_process__Nj5kC",
        svip_bgc: "Index_svip_bgc__J9_xf",
        icon: "Index_icon__k5aqs",
        speed_process_text: "Index_speed_process_text__oOpLz",
        listen_value_wrap_isNewIU: "Index_listen_value_wrap_isNewIU__11eqd",
        tips_isNewIU: "Index_tips_isNewIU__49XBd",
        listen_value_wrap: "Index_listen_value_wrap__veBvS",
        tips: "Index_tips__PWMuq",
        proccess_outer: "Index_proccess_outer__DHAAn",
        proccess_wrap: "Index_proccess_wrap__9P_sq",
        proccess: "Index_proccess__5zeFj",
        proccess_rocket: "Index_proccess_rocket__7pnXk",
        rocketFloat: "Index_rocketFloat__IIOYw",
        rocket_text: "Index_rocket_text__Sp5aE",
        vip_info_wrap: "Index_vip_info_wrap__V4_fc",
        listen_award: "Index_listen_award__FMLud",
        num: "Index_num__wA2Fa",
        bottom_wrap: "Index_bottom_wrap__3_PZf",
        block: "Index_block__FSnOA",
        block_top: "Index_block_top__shpmm",
        big: "Index_big__R9fp_",
        block_bottom: "Index_block_bottom__XPAck",
        vip: "Index_vip__yItVE",
        vip_shine: "Index_vip_shine__KDcOX",
        suvip: "Index_suvip__iZlVf",
        vip_animated: "Index_vip_animated__uErvY",
        svipScale: "Index_svipScale__4DbNC",
        svipShine: "Index_svipShine__JAodq",
        vip_animated_new_ui: "Index_vip_animated_new_ui__DkKz3",
        svipScaleNewUI: "Index_svipScaleNewUI__CHLlM",
        vip_info_wrap_new_ui: "Index_vip_info_wrap_new_ui__0bBDq",
        not_vip_new_ui: "Index_not_vip_new_ui__gAQg8",
        vip_new_ui: "Index_vip_new_ui__VTugp",
      };
    },
    43816: function (e) {
      e.exports = {
        countdown_wrap: "Index_countdown_wrap__oYP6d",
        num: "Index_num__h_IUU",
      };
    },
    30986: function (e) {
      e.exports = {
        listen_rank_wrap: "Index_listen_rank_wrap__31NAc",
        icon_position: "Index_icon_position__OnClr",
        tab_list_wrap_outer: "Index_tab_list_wrap_outer__RGmqV",
        tab_panel_wrap: "Index_tab_panel_wrap__gi2U5",
        tab_panel_wrap_locked: "Index_tab_panel_wrap_locked__u2lDY",
        tab_page_slot: "Index_tab_page_slot__GZPFL",
        tab_page_slot_active: "Index_tab_page_slot_active__Sy5v0",
        tab_list_wrap: "Index_tab_list_wrap__oJ7FR",
        tab_item: "Index_tab_item__S6UNt",
        active: "Index_active__GpNj8",
        tab_page_slot_loading: "Index_tab_page_slot_loading__7t5qI",
      };
    },
    74223: function (e) {
      e.exports = {
        otherPos: "Item_otherPos__cIEIL",
        icon: "Item_icon__mRUdc",
        line: "Item_line__RZFFe",
        myNameNum: "Item_myNameNum__IkhcN",
        myNameNum_red: "Item_myNameNum_red__y8T3_",
        num: "Item_num__Sdxrg",
        mine_num: "Item_mine_num__4XPpD",
        myNameNum_text: "Item_myNameNum_text__FHg2b",
        otherNameNum: "Item_otherNameNum__kVlV6",
        medal: "Item_medal__crcdC",
        like: "Item_like__54TEk",
        icon_like: "Item_icon_like__Z9Jcs",
        count: "Item_count__da2b2",
        picture: "Item_picture__8CFfQ",
        nameItem: "Item_nameItem___4JvM",
        name: "Item_name__Lhg__",
        nameText: "Item_nameText__mUrRa",
        listen_value: "Item_listen_value__KjbAw",
        bouns: "Item_bouns__lR8PK",
        svip_bgc: "Item_svip_bgc__rMadn",
        bouns_text: "Item_bouns_text__QdXAa",
      };
    },
    57519: function (e) {
      e.exports = {
        tab_page_wrap: "TabPage_tab_page_wrap__bbZ8k",
        update_tips: "TabPage_update_tips__gitOX",
        reward_wrap: "TabPage_reward_wrap__JZUGT",
        reward_scroll_area: "TabPage_reward_scroll_area__dDrQ6",
        reward_track: "TabPage_reward_track__oZ5Px",
        reward_track_no_transition: "TabPage_reward_track_no_transition__meupt",
        reward_item: "TabPage_reward_item__Aooj6",
        text: "TabPage_text___oIc_",
        bold: "TabPage_bold__Zk19e",
        name_wrap: "TabPage_name_wrap___OrHc",
        name_measure: "TabPage_name_measure__gcnql",
        name: "TabPage_name__Lw8Ub",
        name_track: "TabPage_name_track__nbXr3",
        name_track_playing: "TabPage_name_track_playing__Qr9Y0",
        "listen-rank-name-marquee": "TabPage_listen-rank-name-marquee__un9Bv",
        img: "TabPage_img__EFBjY",
        list_wrap: "TabPage_list_wrap__fkDAV",
        list_wrap_no_reward: "TabPage_list_wrap_no_reward__vCXTR",
      };
    },
    96278: function (e) {
      e.exports = {
        wrap: "Medal_wrap__mm_qw",
        medal: "Medal_medal__CoIDz",
        top: "Medal_top__AJy7d",
        bottom: "Medal_bottom__PBFxw",
        center_text: "Medal_center_text__2_B0r",
        avatar: "Medal_avatar__K2CO5",
        recommend_level_alias: "Medal_recommend_level_alias__5k_wn",
        tooltipWrap: "Medal_tooltipWrap__clvq_",
        tooltipBox: "Medal_tooltipBox__ro9A3",
        tooltipBottom: "Medal_tooltipBottom__FieTT",
        achievement_level: "Medal_achievement_level__qbXTW",
        achievement_vip_level: "Medal_achievement_vip_level__pjWSG",
        sign: "Medal_sign__7ozbK",
        icon_lock: "Medal_icon_lock__P4HM2",
      };
    },
    83859: function (e) {
      e.exports = {
        toast_wrap: "Modal_toast_wrap__Pm2q4",
        dialog_wrap: "Modal_dialog_wrap__UHY7d",
        title: "Modal_title__6eWJ_",
        content: "Modal_content__VXSPI",
        btns: "Modal_btns__I_xjt",
        btn_item: "Modal_btn_item__zHWq1",
        btn_cancel: "Modal_btn_cancel__0GOIT",
        btn_confirm: "Modal_btn_confirm__PS0QH",
        dialog_close: "Modal_dialog_close__J72j5",
      };
    },
    76375: function (e) {
      e.exports = {
        number_flow: "Index_number_flow__uAMKl",
        digit_wrap: "Index_digit_wrap__QQI9B",
        digit_track: "Index_digit_track__ZEXRk",
        digit: "Index_digit__i0qw4",
        affix: "Index_affix__MYGdI",
        separator: "Index_separator___wNzF",
      };
    },
    94159: function (e) {
      e.exports = {
        wrap: "Picker_wrap__HI4U9",
        mask: "Picker_mask__g9Tjh",
        panel: "Picker_panel__o7GBl",
        show: "Picker_show__E5UjT",
        header: "Picker_header__tL_aY",
        body: "Picker_body__2ndyW",
        footer: "Picker_footer__NWnh_",
        cancelBtn: "Picker_cancelBtn__mkK4A",
        confirmBtn: "Picker_confirmBtn__0HYRn",
        column: "Picker_column__gqBSy",
        columnMask: "Picker_columnMask__m48fT",
        columnInner: "Picker_columnInner___FLao",
        columnList: "Picker_columnList__LyVBq",
        columnItem: "Picker_columnItem__5UX2i",
      };
    },
    79745: function (e) {
      e.exports = {
        vipNameplate_wrap: "Index_vipNameplate_wrap__sqGWU",
        vipIcon: "Index_vipIcon__rydpw",
        loversPic: "Index_loversPic__khZRs",
        fancyNumber: "Index_fancyNumber__p7vGv",
        fancyNumberIcon: "Index_fancyNumberIcon__iAJ8t",
        fancyNumberPanel: "Index_fancyNumberPanel__U_jdd",
        fancyNumberText: "Index_fancyNumberText__iCZVw",
        fancyNumberShine: "Index_fancyNumberShine__9yoZd",
        "fancy-number-shine": "Index_fancy-number-shine___sYjl",
      };
    },
    83870: function (e) {
      e.exports = {
        error_wrap: "Index_error_wrap__mNTya",
        wrap: "Index_wrap__pbsNP",
        content: "Index_content__aUoyk",
        scroll_plane: "Index_scroll_plane__63cjB",
      };
    },
    55647: function (e, t, n) {
      var r = {
        "./ic_vip1.png": 26286,
        "./ic_vip10.png": 81219,
        "./ic_vip11.png": 29525,
        "./ic_vip12.png": 37269,
        "./ic_vip13.png": 61208,
        "./ic_vip14.png": 19227,
        "./ic_vip15.png": 80718,
        "./ic_vip16.png": 65762,
        "./ic_vip17.png": 84179,
        "./ic_vip18.png": 21903,
        "./ic_vip19.png": 9696,
        "./ic_vip2.png": 98913,
        "./ic_vip20.png": 46717,
        "./ic_vip3.png": 25449,
        "./ic_vip4.png": 32509,
        "./ic_vip5.png": 23292,
        "./ic_vip6.png": 84365,
        "./ic_vip7.png": 48809,
        "./ic_vip8.png": 52841,
        "./ic_vip9.png": 35149,
      };
      function i(e) {
        return n(a(e));
      }
      function a(e) {
        if (!n.o(r, e)) {
          var t = Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      ((i.keys = function () {
        return Object.keys(r);
      }),
        (i.resolve = a),
        (e.exports = i),
        (i.id = 55647));
    },
    48294: function (e, t, n) {
      var r = {
        "./ic_music_pack.png": 5963,
        "./ic_music_pack_year.png": 87528,
        "./ic_rocket1.png": 29288,
        "./ic_suvip.png": 92301,
        "./ic_suvip_1.png": 31770,
        "./ic_suvip_2.png": 66542,
        "./ic_suvip_3.png": 21617,
        "./ic_suvip_4.png": 54563,
        "./ic_suvip_5.png": 5074,
        "./ic_suvip_6.png": 10734,
        "./ic_suvip_7.png": 37526,
        "./ic_suvip_8.png": 58160,
        "./ic_suvip_9.png": 14960,
        "./ic_suvip_none_1.png": 6604,
        "./ic_suvip_none_2.png": 45193,
        "./ic_suvip_none_3.png": 94679,
        "./ic_suvip_none_4.png": 98174,
        "./ic_suvip_none_5.png": 41316,
        "./ic_suvip_none_6.png": 1010,
        "./ic_suvip_none_7.png": 67568,
        "./ic_suvip_none_8.png": 59975,
        "./ic_suvip_none_9.png": 57631,
        "./ic_suvip_year_1.png": 93658,
        "./ic_suvip_year_2.png": 99832,
        "./ic_suvip_year_3.png": 73077,
        "./ic_suvip_year_4.png": 66697,
        "./ic_suvip_year_5.png": 85418,
        "./ic_suvip_year_6.png": 67643,
        "./ic_suvip_year_7.png": 66217,
        "./ic_suvip_year_8.png": 51358,
        "./ic_suvip_year_9.png": 97445,
        "./ic_svip.png": 13812,
        "./ic_svip_1.png": 70661,
        "./ic_svip_2.png": 71390,
        "./ic_svip_3.png": 81766,
        "./ic_svip_4.png": 45021,
        "./ic_svip_5.png": 3084,
        "./ic_svip_6.png": 74891,
        "./ic_svip_7.png": 53962,
        "./ic_svip_8.png": 62893,
        "./ic_svip_none_1.png": 21882,
        "./ic_svip_none_2.png": 71558,
        "./ic_svip_none_3.png": 96116,
        "./ic_svip_none_4.png": 11971,
        "./ic_svip_none_5.png": 52135,
        "./ic_svip_none_6.png": 93814,
        "./ic_svip_none_7.png": 12909,
        "./ic_svip_none_8.png": 50051,
        "./ic_svip_year_1.png": 73527,
        "./ic_svip_year_2.png": 26297,
        "./ic_svip_year_3.png": 46562,
        "./ic_svip_year_4.png": 88250,
        "./ic_svip_year_5.png": 97860,
        "./ic_svip_year_6.png": 47529,
        "./ic_svip_year_7.png": 3329,
        "./ic_svip_year_8.png": 66203,
      };
      function i(e) {
        return n(a(e));
      }
      function a(e) {
        if (!n.o(r, e)) {
          var t = Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      ((i.keys = function () {
        return Object.keys(r);
      }),
        (i.resolve = a),
        (e.exports = i),
        (i.id = 48294));
    },
    97120: function (e, t, n) {
      var r = { "./first.json": [63184, 184], "./rocket.json": [80120, 120] };
      function i(e) {
        if (!n.o(r, e))
          return Promise.resolve().then(function () {
            var t = Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = r[e],
          i = t[0];
        return n.e(t[1]).then(function () {
          return n.t(i, 19);
        });
      }
      ((i.keys = function () {
        return Object.keys(r);
      }),
        (i.id = 97120),
        (e.exports = i));
    },
  },
]);
