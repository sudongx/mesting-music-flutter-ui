(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8505],
  {
    58636: function (e, t, n) {
      "use strict";
      var i = n(76792),
        a = n(37667),
        o = n(93967),
        r = n.n(o),
        s = n(33562),
        l = n(44421),
        c = n(57434),
        u = n.n(c),
        d = n(93239),
        p = n(2266),
        v = n(57186),
        h = n(22239),
        f = n(93452),
        m = n(25965),
        g = function (e, t) {
          var n;
          return ""
            .concat(null == e ? void 0 : e.format(d.zT[t]))
            .concat(
              t === d.Sr.WEEK
                ? " - ".concat(
                    null == e
                      ? void 0
                      : null === (n = e.add(6, "days")) || void 0 === n
                        ? void 0
                        : n.format(d.zT[d.Sr.WEEK]),
                  )
                : "",
            );
        };
      t.Z = (0, f.Z)(
        (0, s.Pi)(function (e) {
          var t,
            n,
            o,
            s = e.onChange,
            c = void 0 === s ? function () {} : s,
            f = e.showDimension,
            b = void 0 === f || f,
            _ = e.disabled,
            k = void 0 !== _ && _,
            x = e.from,
            y = void 0 === x ? "" : x,
            S = e.type,
            j = void 0 === S ? "normal" : S,
            D = e.stores,
            Z = e.className,
            C = D.dataStore,
            w = C.dimension,
            M = C.dateRanges,
            T = C.dateIndexs,
            N = C.curTimeDesc,
            L = C.skin,
            A = (0, a.useMemo)(
              function () {
                return d.m$.findIndex(function (e) {
                  return e.type === w;
                });
              },
              [w],
            ),
            R = (0, a.useMemo)(
              function () {
                return null == M ? void 0 : M[w];
              },
              [M, w],
            ),
            O = (0, a.useMemo)(
              function () {
                return null == T ? void 0 : T[w];
              },
              [T, w],
            ),
            I = (0, a.useMemo)(
              function () {
                return R[O];
              },
              [R, O],
            ),
            P = function (e) {
              if (!k) {
                var t = M[e].length - 1,
                  n = M[e][t],
                  i = function () {
                    (C.setDimension(e), C.setDateIndex(e, t));
                  };
                if (c) {
                  c(e, t, n, i, "切换".concat(d.En[e]));
                  return;
                }
                i();
              }
            },
            B = (0, a.useCallback)(
              (0, l.Z)(
                function () {
                  if (w === d.Sr.YEAR) {
                    (0, h.FN)("最多可回看至2019年的数据");
                    return;
                  }
                  var e,
                    t = ((e = {}),
                    (0, i.Z)(e, d.Sr.DAY, "".concat(d.QX[d.Sr.DAY] + 1, "日")),
                    (0, i.Z)(
                      e,
                      d.Sr.WEEK,
                      "".concat(d.QX[d.Sr.WEEK] + 1, "周"),
                    ),
                    (0, i.Z)(
                      e,
                      d.Sr.MONTH,
                      "".concat(d.QX[d.Sr.MONTH] + 1, "个月"),
                    ),
                    e)[w];
                  (0, h.FN)(
                    "含".concat(N, "在内，最多可回看").concat(t, "数据"),
                  );
                },
                1500,
                { leading: !0, trailing: !1 },
              ),
              [w],
            ),
            E = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1;
              if (!k) {
                var t = O + e,
                  n = R[t];
                if (!n) {
                  e < 0 && B();
                  return;
                }
                var i = function () {
                  C.setDateIndex(w, t);
                };
                if (c) {
                  c(w, t, n, i, "选择时间范围");
                  return;
                }
                i();
              }
            };
          return (0, m.jsx)(m.Fragment, {
            children: (0, m.jsxs)("div", {
              className: r()(
                u().DateTabWrap,
                u()[L],
                Z,
                ((t = {}),
                (0, i.Z)(t, u().short, !b),
                (0, i.Z)(t, u().rank, "rank" === y),
                t),
              ),
              children: [
                !!b &&
                  (0, m.jsx)("div", {
                    children: (0, m.jsxs)("div", {
                      className: r()(u().DateTabType, {}),
                      children: [
                        (0, m.jsx)("div", {
                          className: r()(u().slide, u()["pos".concat(A)]),
                        }),
                        d.m$ &&
                          d.m$.map(function (e, t) {
                            return (0, m.jsx)(
                              "div",
                              {
                                className: r()(
                                  u().tab,
                                  (0, i.Z)({}, u().active, A === t),
                                ),
                                onClick: P.bind(null, e.type),
                                children: (0, m.jsx)("span", {
                                  children: null == e ? void 0 : e.name,
                                }),
                              },
                              t,
                            );
                          }),
                      ],
                    }),
                  }),
                (0, m.jsxs)("div", {
                  className: r()(u().DateTabRange, (0, i.Z)({}, u().short, !b)),
                  children: [
                    "normal" === j &&
                      (0, m.jsx)("div", {
                        onClick: E.bind(null, -1),
                        className: u().leftWrap,
                        children: (0, m.jsx)("img", {
                          alt: "",
                          className: r()(
                            u().leftPic,
                            ((n = {}),
                            (0, i.Z)(n, u().disabled, k || O <= 0),
                            (0, i.Z)(n, u().rank, "rank" === y),
                            n),
                          ),
                          src:
                            L === d.lu.BLACKV2 ||
                            L === d.lu.BLACK ||
                            L === d.lu.MAGAZINE
                              ? v.Z.src
                              : p.Z.src,
                        }),
                      }),
                    (0, m.jsx)("div", {
                      className: r()(u().center, {}),
                      children: g(I, w),
                    }),
                    "normal" === j &&
                      (0, m.jsx)("div", {
                        onClick: E.bind(null, 1),
                        className: u().rightWrap,
                        children: (0, m.jsx)("img", {
                          alt: "",
                          className: r()(
                            u().rightPic,
                            ((o = {}),
                            (0, i.Z)(o, u().disabled, k || O >= R.length - 1),
                            (0, i.Z)(o, u().rank, "rank" === y),
                            o),
                          ),
                          src:
                            L === d.lu.BLACKV2 ||
                            L === d.lu.BLACK ||
                            L === d.lu.MAGAZINE
                              ? v.Z.src
                              : p.Z.src,
                        }),
                      }),
                  ],
                }),
              ],
            }),
          });
        }),
      );
    },
    32246: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return e0;
        },
      });
      var i = n(81208),
        a = n(17468),
        o = n(13298),
        r = n(77813),
        s = n(52599),
        l = n(25821),
        c = n(55136),
        u = n(55578),
        d = n(76792),
        p = n(82628),
        v = n.n(p),
        h = n(37667),
        f = n.n(h),
        m = n(983),
        g = n(22239),
        b = n(42240),
        _ = n(33562),
        k = n(11284),
        x = n(93239),
        y = n(920),
        S = n(93967),
        j = n.n(S),
        D = n(74722),
        Z = n.n(D),
        C = n(44675),
        w = n.n(C),
        M = n(93452),
        T = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/icon_sing.4005ee32.png",
          height: 20,
          width: 20,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAnklEQVR42l2NoQ7CQBBEFxwKAwmG4BB8ACEhfAH9IQy5Q3DndyuLxIJHYEglCs8v8AflJd2aTjK53ZnZOQlnHQoISSewgDsBrWZ4IGYrYrKat4I35nvM5VgEnHI5Q3zFrEtxMB/RrKvZI1z9m5EH5vDR1a8xmpi0cnPB/uOwFr/aEGowvr5vmdnt3TYkW4WsH3jwhil8ErhIH4iDvvYHc8tSqrljdCYAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        N = n(55500),
        L = n(25965),
        A = (0, M.Z)(
          (0, _.Pi)(function (e) {
            var t,
              n,
              i,
              a = e.stores,
              o = e.type,
              r = a.dataStore,
              s = a.appStore,
              l = r.statistics,
              c = r.listen_duration,
              u = r.grade,
              d = r.skin,
              p = s.baseInfo,
              v = (0, h.useState)(!1),
              f = v[0],
              m = v[1];
            return (
              (0, h.useEffect)(function () {
                m(!0);
              }, []),
              (0, L.jsx)("div", {
                className: j()(w().wrap, [w()[d]], [w()[o]]),
                children: (0, L.jsx)("div", {
                  className: w().userInfo,
                  children:
                    f &&
                    (0, L.jsxs)(L.Fragment, {
                      children: [
                        (0, L.jsx)("img", {
                          alt: "",
                          src: null == p ? void 0 : p.userpic,
                          className: w().avatar,
                        }),
                        (0, L.jsxs)("div", {
                          className: w().middle,
                          children: [
                            (0, L.jsx)("div", {
                              className: w().userName,
                              children: (0, L.jsx)(N.Z, {
                                width: "share" === o ? 300 : 350,
                                targetText: null == p ? void 0 : p.userNickName,
                                style: { fontSize: 30 },
                              }),
                            }),
                            (0, L.jsx)("div", {
                              className: w().vip_box,
                              children: (0, L.jsxs)("div", {
                                className: w().vip,
                                children: [
                                  (0, L.jsx)("img", { src: T.src }),
                                  (0, L.jsxs)("span", {
                                    children: [
                                      "Lv",
                                      (null == l
                                        ? void 0
                                        : null === (t = l.grade_info) ||
                                            void 0 === t
                                          ? void 0
                                          : t.p_grade) ||
                                        u ||
                                        "",
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, L.jsxs)("div", {
                          className: w().right,
                          children: [
                            (0, L.jsxs)("div", {
                              className: w().count,
                              children: [
                                (0, L.jsx)("span", {
                                  children:
                                    (c >
                                    (Math.floor(
                                      (null == l
                                        ? void 0
                                        : null === (n = l.grade_info) ||
                                            void 0 === n
                                          ? void 0
                                          : n.duration) / 60,
                                    ) || 0)
                                      ? c
                                      : Math.floor(
                                          (null == l
                                            ? void 0
                                            : null === (i = l.grade_info) ||
                                                void 0 === i
                                              ? void 0
                                              : i.duration) / 60,
                                        )) || "-",
                                }),
                                "小时",
                              ],
                            }),
                            (0, L.jsx)("div", {
                              className: w().title,
                              children: "累计听歌",
                            }),
                          ],
                        }),
                      ],
                    }),
                }),
              })
            );
          }),
        ),
        R = n(58636),
        O = n(46561),
        I = n(19811),
        P = n(37994),
        B = n(78813),
        E = n(1673),
        Y = n(68918),
        W = n(41691),
        K = n.n(W),
        V = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/icon_change_skin.f9570ca6.png",
          height: 32,
          width: 32,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAWklEQVR42k3BsQqCUAAAwMMgqLGliObWsIL6AAURRRERQSe3t+ni97t6Bx+Vm7vGC4JMrNeL5QKzvYVUwFHkbPWDyQE8dBDpXBQSTyUw+vp7y+TA1aDWaJ3YAAbkCztC7HUaAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        F = n(52835),
        H = n(93491),
        U = n(84241);
      function G(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i));
        }
        return n;
      }
      var z = (function (e) {
          (0, l.Z)(i, e);
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
                  n = (0, u.Z)(i);
                if (t) {
                  var a = (0, u.Z)(this).constructor;
                  e = Reflect.construct(n, arguments, a);
                } else e = n.apply(this, arguments);
                return (0, c.Z)(this, e);
              });
          function i(e) {
            var t;
            return (
              (0, o.Z)(this, i),
              (t = n.call(this, e)),
              (0, d.Z)((0, s.Z)(t), "handleScroll", function (e) {
                var n;
                ((n = !!e && e.scrollTop > 0), t.setState({ scrolled: n }));
              }),
              (t.state = { scrolled: !1, showList: !1 }),
              t
            );
          }
          return (
            (0, r.Z)(i, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    t = document.querySelector("#song_rank_wrap");
                  t &&
                    (null == t ? void 0 : t.addEventListener) &&
                    t.addEventListener("scroll", function () {
                      return e.handleScroll(t);
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t = this,
                    n = this.state,
                    i = n.scrolled,
                    a = n.showList,
                    o = this.props,
                    r = o.title,
                    s = (o.subTitle, o.showMore),
                    l = o.showShare,
                    c = o.jumpUrl,
                    u = o.onOpen,
                    p = o.onShare,
                    v = o.type,
                    h = o.showClose,
                    f = o.forbidShare,
                    m = void 0 !== f && f,
                    b = o._skin,
                    _ = (o.total, o.className),
                    y = this.props.stores,
                    S = y.dataStore,
                    D = y.appStore,
                    Z = S.skin,
                    C = D.statusBarHeight,
                    w = D.titleBarHeight,
                    M = this.props.statusBarHeight || C,
                    T = w > 0 ? { fontSize: w } : {};
                  return (0, L.jsxs)("div", {
                    className: j()(
                      K().title,
                      _,
                      ((e = {}),
                      (0, d.Z)(e, K().bg, i),
                      (0, d.Z)(
                        e,
                        K()[b || Z] || "",
                        "share" !== (void 0 === v ? "normal" : v),
                      ),
                      e),
                    ),
                    children: [
                      a &&
                        (0, L.jsx)("div", {
                          className: K().moreListBg,
                          onClick: function () {
                            t.setState({ showList: !1 });
                          },
                        }),
                      (0, L.jsx)("div", {
                        className: K().statusBar,
                        style: M ? { height: M } : {},
                      }),
                      (0, L.jsxs)("div", {
                        className: K().titleBar,
                        style: w
                          ? (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                var n =
                                  null != arguments[t] ? arguments[t] : {};
                                t % 2
                                  ? G(Object(n), !0).forEach(function (t) {
                                      (0, d.Z)(e, t, n[t]);
                                    })
                                  : Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(
                                        e,
                                        Object.getOwnPropertyDescriptors(n),
                                      )
                                    : G(Object(n)).forEach(function (t) {
                                        Object.defineProperty(
                                          e,
                                          t,
                                          Object.getOwnPropertyDescriptor(n, t),
                                        );
                                      });
                              }
                              return e;
                            })({ height: w }, T)
                          : T,
                        children: [
                          (0, L.jsx)("div", {
                            className: K().left,
                            children:
                              (void 0 === h || h) &&
                              (0, L.jsx)("div", {
                                className: j()(K().icon, K().backBtn),
                                role: "button",
                                tabIndex: 0,
                                "aria-label": "返回",
                                onClick: g.WU,
                                children: (0, L.jsx)(U.Z, {
                                  name: "act_back",
                                  "aria-hidden": "true",
                                }),
                              }),
                          }),
                          (0, L.jsx)("div", {
                            className: K().titleName,
                            children: (0, L.jsx)("span", {
                              className: K().mainTitle,
                              children: r,
                            }),
                          }),
                          (0, L.jsxs)("div", {
                            className: K().right,
                            children: [
                              (void 0 === l || l) &&
                                !D.showFirstSkeleton &&
                                (0, L.jsx)("div", {
                                  className: j()(
                                    K().icon,
                                    K().shareBtn,
                                    (0, d.Z)({}, K().forbit, m),
                                  ),
                                  role: "button",
                                  tabIndex: 0,
                                  "aria-label": "分享",
                                  "aria-disabled": m,
                                  onClick: function () {
                                    if (p) {
                                      p();
                                      return;
                                    }
                                    if (c && !m) {
                                      if (
                                        (t.props.clickMobileLog("右上角分享"),
                                        t.props.isDebug &&
                                          !k.LightMobileCall.isInClient())
                                      ) {
                                        window.open(c);
                                        return;
                                      }
                                      k.LightMobileCall.mobileCall(
                                        x.x8.openURL,
                                        { isFullScreen: 1, url: c },
                                      );
                                    }
                                  },
                                  children: (0, L.jsx)(U.Z, {
                                    name: "act_share",
                                    "aria-hidden": "true",
                                  }),
                                }),
                              (void 0 === s || s) &&
                                (0, L.jsxs)("div", {
                                  className: K().moreBtn,
                                  children: [
                                    (0, L.jsx)("div", {
                                      className: K().icon,
                                      id: "moreBtn",
                                      role: "button",
                                      tabIndex: 0,
                                      "aria-label": "更多",
                                      "aria-haspopup": "menu",
                                      "aria-expanded": a,
                                      onClick: function () {
                                        (t.props.clickMobileLog("更多"),
                                          t.setState({ showList: !a }));
                                      },
                                      children: (0, L.jsx)(U.Z, {
                                        name: "act_more",
                                        "aria-hidden": "true",
                                      }),
                                    }),
                                    a &&
                                      (0, L.jsxs)("div", {
                                        className: K().moreList,
                                        role: "menu",
                                        children: [
                                          (0, L.jsxs)("div", {
                                            className: K().listItem,
                                            role: "menuitem",
                                            tabIndex: 0,
                                            "aria-label": "个性换肤",
                                            onClick: function (e) {
                                              (e && e.stopPropagation(),
                                                u && u("skin"),
                                                t.setState({ showList: !a }));
                                            },
                                            children: [
                                              (0, L.jsx)("img", {
                                                alt: "",
                                                src: V.src,
                                              }),
                                              (0, L.jsx)("span", {
                                                children: "个性换肤",
                                              }),
                                            ],
                                          }),
                                          (0, L.jsxs)("div", {
                                            className: K().listItem,
                                            role: "menuitem",
                                            tabIndex: 0,
                                            "aria-label": "统计说明",
                                            onClick: function (e) {
                                              (e && e.stopPropagation(),
                                                u && u("tip"),
                                                t.setState({ showList: !a }));
                                            },
                                            children: [
                                              (0, L.jsx)("img", {
                                                alt: "",
                                                src: F.Z.src,
                                              }),
                                              (0, L.jsx)("span", {
                                                children: "统计说明",
                                              }),
                                            ],
                                          }),
                                          (0, L.jsxs)("div", {
                                            className: K().listItem,
                                            role: "menuitem",
                                            tabIndex: 0,
                                            "aria-label": "好友听歌排行",
                                            onClick: function (e) {
                                              (e && e.stopPropagation(),
                                                u && u("rank"),
                                                t.setState({ showList: !a }));
                                            },
                                            children: [
                                              (0, L.jsx)("img", {
                                                alt: "",
                                                src: H.Z.src,
                                              }),
                                              (0, L.jsx)("span", {
                                                children: "好友听歌排行",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                            ],
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
        q = (0, M.Z)((0, _.Pi)(z)),
        Q = n(34981),
        J = n.n(Q),
        X = (0, M.Z)(function (e) {
          var t,
            n,
            a = e.open,
            o = void 0 !== a && a,
            r = e.onClose,
            s = void 0 === r ? function () {} : r,
            l = e.stores,
            c = e.query,
            u = e.mobileLog,
            p = l.dataStore,
            v = p.skin,
            f = (null == c ? void 0 : c.clientver) >= x.jv ? x.Mi : x.ER,
            m = (0, g.m2)({
              type: v,
              label:
                null ===
                  (t = f.filter(function (e) {
                    return e.value === v;
                  })) || void 0 === t
                  ? void 0
                  : null === (n = t[0]) || void 0 === n
                    ? void 0
                    : n.label,
            }),
            _ = (0, i.Z)(m, 3),
            y = _[0],
            S = _[1];
          _[2];
          var D = function (e) {
              if (!u) {
                console.warn("SetSkinPopup: mobileLog is not defined");
                return;
              }
              u(e);
            },
            Z = function (e, t) {
              if ("change" === t) {
                ((0, g.FN)("已切换为".concat(y.label)),
                  p.setSkin(y.type),
                  k.LightMobileCall.mobileCall(x.x8.changeStatusColor, {
                    isFullScreen: 1,
                    isHideTitleBar: 1,
                    statusBarMode:
                      y.type === x.lu.BLACKV2 ||
                      y.type === x.lu.BLACK ||
                      y.type === x.lu.MAGAZINE
                        ? 0
                        : 1,
                  }));
                try {
                  (window.localStorage.setItem(x.Uf.SKIN, y.type),
                    (0, b.Ak)(y.type));
                } catch (e) {
                  console.error(e);
                }
                (s(),
                  D({ a: 1133766, b: "统计", ft: "换肤面板", svar1: y.type }));
                return;
              }
              (D({ a: 1133765, b: "点击", ft: "换肤面板", svar1: e.value }),
                S(function (t) {
                  return { type: e.value, label: e.label };
                }));
            };
          return (
            (0, h.useEffect)(
              function () {
                o && D({ a: 1133764, b: "曝光", ft: "换肤面板", svar1: v });
              },
              [o],
            ),
            (0, L.jsx)(k.KgPopup, {
              isVisible: o,
              position: "bottom",
              isMask: !0,
              children: (0, L.jsx)("div", {
                className: J().skinWrap,
                children: (0, L.jsxs)("div", {
                  className: J().skinContent,
                  children: [
                    (0, L.jsx)("div", {
                      className: J().closeBtn,
                      onClick: function () {
                        s();
                      },
                    }),
                    (0, L.jsx)("p", {
                      className: J().skinTitle,
                      children: "听歌统计皮肤",
                    }),
                    (0, L.jsx)("div", {
                      className: J().skins,
                      children: f.map(function (e, t) {
                        return (0, L.jsxs)(
                          "div",
                          {
                            onClick: function () {
                              return Z(e, null);
                            },
                            className: j()(
                              J().item,
                              (0, d.Z)({}, J().active, y.type === e.value),
                            ),
                            children: [
                              (0, L.jsx)("div", {
                                className: J().skin,
                                children: (0, L.jsx)("img", {
                                  alt: "",
                                  src: e.src,
                                }),
                              }),
                              (0, L.jsx)("span", {
                                className: J().label,
                                children: e.label,
                              }),
                            ],
                          },
                          t,
                        );
                      }),
                    }),
                    (0, L.jsx)("div", {
                      className: J().skinBtn,
                      onClick: function () {
                        return Z(null, "change");
                      },
                      children: "确定",
                    }),
                  ],
                }),
              }),
            })
          );
        }),
        $ = n(46440),
        ee = n.n($);
      function et(e) {
        var t = e.data,
          n = e.index,
          i = t || {},
          a = i.title,
          o = i.content,
          r = i.note;
        if (!o && !a) return null;
        var s = o ? o.split("\n") : [];
        return (0, L.jsx)("div", {
          className: ee().txt,
          children: a
            ? (0, L.jsxs)(L.Fragment, {
                children: [
                  (0, L.jsx)("div", { className: ee().subTitle, children: a }),
                  o &&
                    (0, L.jsx)("div", {
                      className: ee().subContent,
                      children: s.map(function (e, t) {
                        return (0, L.jsxs)(
                          "span",
                          {
                            children: [
                              e,
                              t < s.length - 1 && (0, L.jsx)("br", {}),
                            ],
                          },
                          t,
                        );
                      }),
                    }),
                  !!r &&
                    (0, L.jsx)("div", { className: ee().note, children: r }),
                ],
              })
            : (0, L.jsx)(L.Fragment, {
                children: "".concat(n + 1, ". ").concat(o || ""),
              }),
        });
      }
      function en(e) {
        var t = e.tips,
          n = e.title,
          i = e.open,
          a = e.onClose,
          o = void 0 === a ? function () {} : a;
        return (0, L.jsx)(k.KgPopup, {
          isVisible: void 0 !== i && i,
          position: "center",
          isMask: !0,
          children: (0, L.jsx)("div", {
            className: j()("popupWrap", ee().PopupWrap),
            onClick: o,
            children: (0, L.jsxs)("div", {
              className: j()(ee().TipsPopup, "darkmode-dialog_bg"),
              children: [
                (0, L.jsx)("div", {
                  className: ee().title,
                  children: void 0 === n ? "听歌统计说明" : n,
                }),
                (0, L.jsx)("div", {
                  className: ee().content,
                  children:
                    t &&
                    t.map(function (e, t) {
                      return (null != e && e.content) || (null != e && e.title)
                        ? (0, L.jsx)(et, { data: e, index: t }, t)
                        : "";
                    }),
                }),
                (0, L.jsx)("div", {
                  className: ee().cancel,
                  onClick: o,
                  children: "我知道了",
                }),
              ],
            }),
          }),
        });
      }
      var ei = n(62180),
        ea = n.n(ei),
        eo = (0, M.Z)(
          (0, _.Pi)(function (e) {
            var t,
              n,
              i,
              a = e.open,
              o = e.helpText,
              r = e.onClose;
            return (
              e.stores,
              (0, L.jsx)(k.KgPopup, {
                isVisible: void 0 !== a && a,
                children: (0, L.jsxs)("div", {
                  className: ea().PopupWrap,
                  children: [
                    (0, L.jsx)("div", {
                      className: ea().circle,
                      style: {
                        top:
                          null === (t = document) || void 0 === t
                            ? void 0
                            : null === (n = t.querySelector("#moreBtn")) ||
                                void 0 === n
                              ? void 0
                              : null === (i = n.getBoundingClientRect()) ||
                                  void 0 === i
                                ? void 0
                                : i.top,
                      },
                    }),
                    (0, L.jsx)("div", { className: ea().pop, children: o }),
                    (0, L.jsx)("div", {
                      className: ea().btn,
                      onClick: void 0 === r ? function () {} : r,
                      children: "知道了",
                    }),
                  ],
                }),
              })
            );
          }),
        ),
        er = n(77837),
        es = n(12520);
      function el(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i));
        }
        return n;
      }
      function ec(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? el(Object(n), !0).forEach(function (t) {
                (0, d.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : el(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var eu = (function (e) {
          (0, l.Z)(p, e);
          var t,
            n,
            i =
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
                  n = (0, u.Z)(p);
                if (t) {
                  var i = (0, u.Z)(this).constructor;
                  e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, c.Z)(this, e);
              });
          function p(e) {
            var t, n, r, l;
            return (
              (0, o.Z)(this, p),
              (t = i.call(this, e)),
              (0, d.Z)(
                (0, s.Z)(t),
                "onTabChange",
                ((n = (0, a.Z)(
                  v().mark(function e(n, i, a, o, r) {
                    return v().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (t.clickMobileLog(r), t.props.getData(n, i, a, o));
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (e, t, i, a, o) {
                  return n.apply(this, arguments);
                }),
              ),
              (0, d.Z)(
                (0, s.Z)(t),
                "onOpen",
                ((r = (0, a.Z)(
                  v().mark(function e(n) {
                    return v().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("skin" !== n) {
                              e.next = 8;
                              break;
                            }
                            return (
                              t.setState({ open: !0 }),
                              (e.next = 4),
                              (0, g.hj)()
                            );
                          case 4:
                            (e.sent &&
                              k.LightMobileCall.mobileCall(x.x8.showHideBar, {
                                state: 0,
                              }),
                              (e.next = 9));
                            break;
                          case 8:
                            "tip" === n
                              ? t.setState({ tipOpen: !0 })
                              : "rank" === n &&
                                k.LightMobileCall.mobileCall(x.x8.openURL, {
                                  url: "https://h5.kugou.com/rank/v-c842c72c/index_Index.html?channel=listen_statistics",
                                });
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (e) {
                  return r.apply(this, arguments);
                }),
              ),
              (0, d.Z)(
                (0, s.Z)(t),
                "onClose",
                ((l = (0, a.Z)(
                  v().mark(function e(n) {
                    return v().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("skin" !== n) {
                              e.next = 8;
                              break;
                            }
                            return (
                              t.setState({ open: !1 }),
                              (e.next = 4),
                              (0, g.hj)()
                            );
                          case 4:
                            (e.sent &&
                              k.LightMobileCall.mobileCall(x.x8.showHideBar, {
                                state: 1,
                              }),
                              (e.next = 9));
                            break;
                          case 8:
                            "tip" === n && t.setState({ tipOpen: !1 });
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (e) {
                  return l.apply(this, arguments);
                }),
              ),
              (0, d.Z)((0, s.Z)(t), "clickMobileLog", function (e) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                if (e) {
                  var i = t.props.stores.dataStore,
                    a = i.dimension,
                    o = i.skin;
                  t.props.mobileLog(
                    ec(
                      ec(
                        { a: 1131811, b: "点击", svar1: e },
                        t.props.commonBiData(a, o),
                      ),
                      n,
                    ),
                  );
                }
              }),
              (t.state = { open: !1, tipOpen: !1, jump: !1 }),
              t
            );
          }
          return (
            (0, r.Z)(p, [
              {
                key: "componentDidUpdate",
                value:
                  ((n = (0, a.Z)(
                    v().mark(function e() {
                      var t, n, i, a;
                      return v().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (i =
                                    (null === (t = this.props) || void 0 === t
                                      ? void 0
                                      : null === (n = t.query) || void 0 === n
                                        ? void 0
                                        : n.jumpModule) ||
                                    (0, g.re)("jumpModule")),
                                  (e.next = 3),
                                  (0, es.pc)([
                                    { platform: "android", version: 12485 },
                                    { platform: "ios", version: 12e3 },
                                    { platform: "harmony", version: 20141 },
                                  ])
                                );
                              case 3:
                                ((a = e.sent),
                                  document.querySelector("#".concat(i)) &&
                                    !this.state.jump &&
                                    a &&
                                    ((0, g.K)(i), this.setState({ jump: !0 })));
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  )),
                  function () {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t,
                    n = this,
                    i = this.state,
                    a = i.open,
                    o = i.tipOpen,
                    r = this.props,
                    s = r.tabDisabled,
                    l = r.error,
                    c = r.ready,
                    u = r.helpOpen,
                    p = r.helpText,
                    v = r.closeHelp,
                    h = this.props.stores,
                    m = h.dataStore,
                    g = h.appStore.statusAndTitleBarHeight,
                    b = (0, Y.Z)({ dataStore: m }).formatYearData,
                    _ = m.dimension,
                    k = m.date,
                    y = m.statistics,
                    S = m.yearStatistics,
                    D = m.selectedModules,
                    C = m.listen_duration,
                    w = m.dateIndexs,
                    M = m.dateRanges,
                    T = _ === x.Sr.YEAR ? b(k.year(), S) : null,
                    N =
                      _ === x.Sr.YEAR
                        ? !T
                        : (null == D ? void 0 : D.length) === 0,
                    W =
                      (null == w ? void 0 : w[_]) >=
                      (null == M ? void 0 : M[_].length) - 1,
                    K = ""
                      .concat(window.location.origin)
                      .concat(
                        window.location.pathname.replace("home", "share"),
                        "?ssr_header_param=",
                      )
                      .concat(x.Dc, "&ssr_url_param=")
                      .concat(x.By, "&isHideTitleBar=1&dimension=")
                      .concat(_, "&isLatest=")
                      .concat(W, "&date=")
                      .concat(
                        null == k ? void 0 : k.format("YYYYMMDD"),
                        "&duration=",
                      )
                      .concat(C, "&grade=")
                      .concat(
                        null == y
                          ? void 0
                          : null === (e = y.grade_info) || void 0 === e
                            ? void 0
                            : e.p_grade,
                      );
                  return (0, L.jsxs)("div", {
                    className: j()(
                      Z().wrap,
                      (0, d.Z)({}, Z().black, this.props.black),
                    ),
                    id: "song_rank_wrap",
                    children: [
                      (0, L.jsx)(
                        q,
                        ec(
                          {
                            title: "听歌统计",
                            jumpUrl: K,
                            onOpen: this.onOpen,
                            clickMobileLog: this.clickMobileLog,
                            forbidShare: N || l,
                          },
                          this.props,
                        ),
                      ),
                      (0, L.jsx)("div", { className: Z().bg }),
                      (0, L.jsx)("div", {
                        className: Z().holder,
                        style: g ? { height: g } : {},
                      }),
                      (0, L.jsxs)("div", {
                        className: Z().container,
                        children: [
                          (0, L.jsx)(A, {}),
                          (0, L.jsx)(R.Z, {
                            onChange: this.onTabChange,
                            disabled: s,
                          }),
                          0 !== l ||
                          (_ === x.Sr.YEAR ? !T : null === m.statistics) ||
                          N
                            ? (0, L.jsx)(E.Z, {
                                type: 1 === l || N ? "empty" : "error",
                                ready: c,
                              })
                            : (0, L.jsxs)(L.Fragment, {
                                children: [
                                  _ === x.Sr.YEAR
                                    ? (0, L.jsxs)(L.Fragment, {
                                        children: [
                                          T &&
                                            (0, L.jsx)(O.Z, {
                                              yearData: T,
                                              clickMobileLog:
                                                this.clickMobileLog,
                                            }),
                                          (null == T ? void 0 : T.rank_song) &&
                                            (0, L.jsx)(I.Z, {
                                              yearData: T,
                                              clickMobileLog:
                                                this.clickMobileLog,
                                              mobileLog: this.props.mobileLog,
                                            }),
                                          (null == T ? void 0 : T.top_singer) &&
                                            (0, L.jsx)(P.Z, {
                                              yearData: T,
                                              clickMobileLog:
                                                this.clickMobileLog,
                                            }),
                                        ],
                                      })
                                    : D.map(function (e, t) {
                                        return (0, L.jsxs)(
                                          f().Fragment,
                                          {
                                            children: [
                                              (null == e ? void 0 : e.type) ===
                                                x.cG.LISTEN_SUMMARY &&
                                                (0, L.jsx)(O.Z, {
                                                  yearData: T,
                                                  clickMobileLog:
                                                    n.clickMobileLog,
                                                }),
                                              (null == e ? void 0 : e.type) ===
                                                x.cG.SONG &&
                                                (0, L.jsx)(I.Z, {
                                                  yearData: T,
                                                  clickMobileLog:
                                                    n.clickMobileLog,
                                                  mobileLog: n.props.mobileLog,
                                                  isLatest: W,
                                                }),
                                              (null == e ? void 0 : e.type) ===
                                                x.cG.SINGER &&
                                                (0, L.jsx)(P.Z, {
                                                  yearData: T,
                                                  clickMobileLog:
                                                    n.clickMobileLog,
                                                }),
                                              (null == e ? void 0 : e.type) ===
                                                x.cG.SPECIAL_MEMORY &&
                                                (0, L.jsx)(B.Z, {
                                                  clickMobileLog:
                                                    n.clickMobileLog,
                                                }),
                                            ],
                                          },
                                          t,
                                        );
                                      }),
                                  (0, L.jsx)("div", {
                                    className: Z().bottomTip,
                                    children: "- 没有更多数据了 -",
                                  }),
                                  (0, L.jsx)(er.Z, {}),
                                ],
                              }),
                        ],
                      }),
                      (0, L.jsx)(X, {
                        mobileLog: this.props.mobileLog,
                        open: a,
                        onClose: function () {
                          return n.onClose("skin");
                        },
                        query: this.props.query,
                      }),
                      (0, L.jsx)(en, {
                        open: o,
                        onClose: function () {
                          return n.onClose("tip");
                        },
                        tips:
                          null === (t = this.props) || void 0 === t
                            ? void 0
                            : t.tips,
                      }),
                      (0, L.jsx)(eo, { open: u, helpText: p, onClose: v }),
                    ],
                  });
                },
              },
            ]),
            p
          );
        })(h.Component),
        ed = (0, M.Z)((0, _.Pi)(eu)),
        ep = function (e) {
          return (0, L.jsx)(ed, ec({ black: !0 }, e));
        },
        ev = n(46802),
        eh = n.n(ev),
        ef = n(15673),
        em = n(15547),
        eg = n(98115),
        eb = n(34903),
        e_ = n(82651),
        ek = n(54493),
        ex = n(86557),
        ey = n(88985),
        eS = n(68763),
        ej = n(85232);
      function eD(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i));
        }
        return n;
      }
      function eZ(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eD(Object(n), !0).forEach(function (t) {
                (0, d.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eD(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var eC = (function (e) {
          (0, l.Z)(p, e);
          var t,
            n,
            i =
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
                  n = (0, u.Z)(p);
                if (t) {
                  var i = (0, u.Z)(this).constructor;
                  e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, c.Z)(this, e);
              });
          function p(e) {
            var t, n, r, l;
            return (
              (0, o.Z)(this, p),
              (t = i.call(this, e)),
              (0, d.Z)((0, s.Z)(t), "handleScroll", function (e) {
                var n,
                  i,
                  a = document.querySelector(".".concat(eh().holder)),
                  o = document.querySelector(".".concat(eh().dateTabWrap)),
                  r =
                    (null == o
                      ? void 0
                      : null === (n = o.getBoundingClientRect()) || void 0 === n
                        ? void 0
                        : n.height) || 200,
                  s =
                    (null == a
                      ? void 0
                      : null === (i = a.getBoundingClientRect()) || void 0 === i
                        ? void 0
                        : i.height) || 0,
                  l = !1;
                (e && e.scrollTop > r + s && (l = !0),
                  t.setState({
                    showTitleDateTab: l,
                    hasScroll:
                      t.state.hasScroll ||
                      (null == e ? void 0 : e.scrollTop) > 0,
                  }));
              }),
              (0, d.Z)(
                (0, s.Z)(t),
                "onTabChange",
                ((n = (0, a.Z)(
                  v().mark(function e(n, i, a, o, r) {
                    return v().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (t.clickMobileLog(r), t.props.getData(n, i, a, o));
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (e, t, i, a, o) {
                  return n.apply(this, arguments);
                }),
              ),
              (0, d.Z)(
                (0, s.Z)(t),
                "onOpen",
                ((r = (0, a.Z)(
                  v().mark(function e(n) {
                    var i, a, o, r, s;
                    return v().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("skin" !== n) {
                              e.next = 8;
                              break;
                            }
                            return (
                              t.setState({ open: !0 }),
                              (e.next = 4),
                              (0, g.hj)()
                            );
                          case 4:
                            (e.sent &&
                              k.LightMobileCall.mobileCall(x.x8.showHideBar, {
                                state: 0,
                              }),
                              (e.next = 9));
                            break;
                          case 8:
                            "tip" === n
                              ? t.setState({ tipOpen: !0 })
                              : "rank" === n &&
                                ((r =
                                  null ==
                                  (o =
                                    null === (i = t.props) || void 0 === i
                                      ? void 0
                                      : null === (a = i.vooConfig) ||
                                          void 0 === a
                                        ? void 0
                                        : a.inviteFriendPK)
                                    ? void 0
                                    : o.url)
                                  ? k.LightMobileCall.mobileCall(x.x8.openURL, {
                                      isFullScreen: 1,
                                      url: r,
                                    })
                                  : ((s = t.props.stores.dataStore),
                                    (0, ej.w)({
                                      dimension: x.Sr.DAY,
                                      skin: s.skin,
                                      inviteFriendPopup: 1,
                                    })));
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (e) {
                  return r.apply(this, arguments);
                }),
              ),
              (0, d.Z)(
                (0, s.Z)(t),
                "onClose",
                ((l = (0, a.Z)(
                  v().mark(function e(n) {
                    return v().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("skin" !== n) {
                              e.next = 8;
                              break;
                            }
                            return (
                              t.setState({ open: !1 }),
                              (e.next = 4),
                              (0, g.hj)()
                            );
                          case 4:
                            (e.sent &&
                              k.LightMobileCall.mobileCall(x.x8.showHideBar, {
                                state: 1,
                              }),
                              (e.next = 9));
                            break;
                          case 8:
                            "tip" === n && t.setState({ tipOpen: !1 });
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (e) {
                  return l.apply(this, arguments);
                }),
              ),
              (0, d.Z)((0, s.Z)(t), "clickMobileLog", function (e) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                if (e) {
                  var i = t.props.stores.dataStore,
                    a = i.dimension,
                    o = i.skin;
                  t.props.mobileLog(
                    eZ(
                      eZ(
                        { a: 1131811, b: "点击", svar1: e },
                        t.props.commonBiData(a, o),
                      ),
                      n,
                    ),
                  );
                }
              }),
              (t.state = {
                open: !1,
                tipOpen: !1,
                jump: !1,
                showTitleDateTab: !1,
                hasScroll: !1,
              }),
              t
            );
          }
          return (
            (0, r.Z)(p, [
              {
                key: "componentDidUpdate",
                value:
                  ((n = (0, a.Z)(
                    v().mark(function e() {
                      var t, n, i, a;
                      return v().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (i =
                                    (null === (t = this.props) || void 0 === t
                                      ? void 0
                                      : null === (n = t.query) || void 0 === n
                                        ? void 0
                                        : n.jumpModule) ||
                                    (0, g.re)("jumpModule")),
                                  (e.next = 3),
                                  (0, es.pc)([
                                    { platform: "android", version: 12485 },
                                    { platform: "ios", version: 12e3 },
                                    { platform: "harmony", version: 20141 },
                                  ])
                                );
                              case 3:
                                ((a = e.sent),
                                  document.querySelector("#".concat(i)) &&
                                    !this.state.jump &&
                                    a &&
                                    ((0, g.K)(i), this.setState({ jump: !0 })));
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  )),
                  function () {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: "componentDidMount",
                value: function () {
                  var e,
                    t,
                    n,
                    i = this,
                    a = document.querySelector("#song_rank_wrap");
                  (a &&
                    (null == a ? void 0 : a.addEventListener) &&
                    a.addEventListener("scroll", function () {
                      return i.handleScroll(a);
                    }),
                    null !== (e = this.props) &&
                      void 0 !== e &&
                      null !== (t = e.vooConfig) &&
                      void 0 !== t &&
                      null !== (n = t.common) &&
                      void 0 !== n &&
                      n.autoResetSkin &&
                      (this._timeout_resetSkin = setTimeout(function () {
                        var e,
                          t = (
                            null === (e = i.props.stores) || void 0 === e
                              ? void 0
                              : e.dataStore
                          ).skin;
                        t &&
                          (console.warn("autoResetSkin", t),
                          window.localStorage.setItem(x.Uf.SKIN, t),
                          (0, b.Ak)(t));
                      }, 1e3)));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  clearTimeout(this._timeout_resetSkin);
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t,
                    n,
                    i,
                    a,
                    o,
                    r,
                    s,
                    l,
                    c,
                    u,
                    p,
                    v = this,
                    h = this.state,
                    m = h.open,
                    b = h.tipOpen,
                    _ = h.showTitleDateTab,
                    k = h.hasScroll,
                    y = this.props,
                    S = y.tabDisabled,
                    D = y.error,
                    Z = y.ready;
                  (y.helpOpen, y.helpText, y.closeHelp);
                  var C = this.props.stores,
                    w = C.dataStore,
                    M = C.appStore,
                    T = (0, Y.Z)({ dataStore: w }).formatYearData,
                    N = w.dimension,
                    A = w.date,
                    R = w.statistics,
                    O = w.yearStatistics,
                    I = w.selectedModules,
                    P = w.listen_duration,
                    B = w.dateIndexs,
                    W = w.dateRanges,
                    K = w.yearChartData,
                    V = M.statusAndTitleBarHeight,
                    F = N === x.Sr.YEAR ? T(A.year(), O) : null,
                    H =
                      N === x.Sr.YEAR
                        ? null == K
                          ? void 0
                          : K.stat_data_empty
                        : (null == I ? void 0 : I.length) === 0,
                    U =
                      (null == B ? void 0 : B[N]) >=
                      (null == W ? void 0 : W[N].length) - 1,
                    G = (0, g.G8)({
                      page: "share",
                      query: {
                        isHideTitleBar: 1,
                        dimension: N,
                        date: null == A ? void 0 : A.format("YYYYMMDD"),
                        isLatest: U,
                        duration: P,
                        grade:
                          null == R
                            ? void 0
                            : null === (e = R.grade_info) || void 0 === e
                              ? void 0
                              : e.p_grade,
                        showFriendRank:
                          null !== (t = this.props) &&
                          void 0 !== t &&
                          null !== (n = t.vooConfig) &&
                          void 0 !== n &&
                          null !== (i = n.friendRank) &&
                          void 0 !== i &&
                          i.enabled
                            ? "1"
                            : "",
                      },
                    }),
                    z = {
                      clickMobileLog: this.clickMobileLog,
                      mobileLog: this.props.mobileLog,
                      vooConfig:
                        null === (a = this.props) || void 0 === a
                          ? void 0
                          : a.vooConfig,
                      clientDSVersion:
                        null === (o = this.props) || void 0 === o
                          ? void 0
                          : o.clientDSVersion,
                      widgetConfig:
                        null === (r = this.props) || void 0 === r
                          ? void 0
                          : r.widgetConfig,
                      monthReports:
                        null === (s = this.props) || void 0 === s
                          ? void 0
                          : s.monthReports,
                      friendRankData: this.props.friendRankData,
                      onLike: this.props.onLike,
                    };
                  return (0, L.jsxs)("div", {
                    className: j()(
                      eh().wrap,
                      this.props.black ? "skin_black_v2" : "skin_normal_v2",
                      (0, d.Z)({}, eh().black, this.props.black),
                    ),
                    id: "song_rank_wrap",
                    children: [
                      (0, L.jsx)(
                        eS.Z,
                        eZ(
                          eZ(
                            {
                              jumpUrl: G,
                              onOpen: this.onOpen,
                              clickMobileLog: this.clickMobileLog,
                              forbidShare: H || D,
                              showSkin: !0,
                              inviteFriendPK:
                                null === (l = this.props) || void 0 === l
                                  ? void 0
                                  : null === (c = l.vooConfig) || void 0 === c
                                    ? void 0
                                    : c.inviteFriendPK,
                            },
                            this.props,
                          ),
                          {},
                          {
                            children: (0, L.jsxs)(L.Fragment, {
                              children: [
                                (0, L.jsx)("div", {
                                  className: j()(
                                    eh().titleName,
                                    !_ && eh().show,
                                  ),
                                  children: "听歌统计",
                                }),
                                (0, L.jsx)("div", {
                                  className: j()(
                                    eh().titleDateTabWrap,
                                    k && eh().titleDateTabInit,
                                    !!_ && eh().show,
                                  ),
                                  children: (0, L.jsx)(em.Z, {
                                    onChange: this.onTabChange,
                                    disabled: S,
                                    showRange: !1,
                                    from: "titleBar",
                                  }),
                                }),
                              ],
                            }),
                          },
                        ),
                      ),
                      (0, L.jsx)("div", { className: eh().bg }),
                      (0, L.jsx)("div", {
                        className: eh().holder,
                        style: V ? { height: V } : {},
                      }),
                      (0, L.jsxs)("div", {
                        className: eh().container,
                        children: [
                          (0, L.jsx)("div", {
                            className: eh().dateTabWrap,
                            children: (0, L.jsx)(em.Z, {
                              onChange: this.onTabChange,
                              disabled: S,
                            }),
                          }),
                          (0, L.jsx)(ef.Z, {
                            clickMobileLog: this.clickMobileLog,
                            mobileLog: this.props.mobileLog,
                            friendRankData: this.props.friendRankData,
                            vooConfig:
                              null === (u = this.props) || void 0 === u
                                ? void 0
                                : u.vooConfig,
                          }),
                          0 !== D ||
                          (N === x.Sr.YEAR
                            ? null == K
                              ? void 0
                              : K.stat_data_empty
                            : null === R) ||
                          H
                            ? (0, L.jsx)(E.Z, {
                                type: 1 === D || H ? "empty" : "error",
                                ready: Z,
                                tips:
                                  N === x.Sr.YEAR
                                    ? "年度听歌报告将在年底揭晓"
                                    : null,
                              })
                            : (0, L.jsxs)(L.Fragment, {
                                children: [
                                  N === x.Sr.YEAR
                                    ? (0, L.jsx)(L.Fragment, {
                                        children: (0, L.jsx)(eg.Z, eZ({}, z)),
                                      })
                                    : (0, L.jsxs)(
                                        f().Fragment,
                                        {
                                          children: [
                                            (0, L.jsx)(
                                              eb.Z,
                                              eZ(
                                                eZ({}, z),
                                                {},
                                                { yearData: F },
                                              ),
                                            ),
                                            (0, L.jsx)(
                                              e_.Z,
                                              eZ(
                                                eZ({}, z),
                                                {},
                                                { yearData: F, isLatest: U },
                                              ),
                                            ),
                                            (0, L.jsx)(
                                              ek.Z,
                                              eZ(
                                                eZ({}, z),
                                                {},
                                                { yearData: F },
                                              ),
                                            ),
                                            (0, L.jsx)(ex.Z, eZ({}, z)),
                                            (0, L.jsx)(
                                              ey.Z,
                                              eZ(
                                                eZ({}, z),
                                                {},
                                                { yearData: F },
                                              ),
                                            ),
                                          ],
                                        },
                                        "".concat(N, "-").concat(A),
                                      ),
                                  (0, L.jsx)("div", {
                                    className: eh().bottomTip,
                                    children: "- 没有更多数据了 -",
                                  }),
                                  (0, L.jsx)(er.Z, {}),
                                ],
                              }),
                        ],
                      }),
                      (0, L.jsx)(
                        X,
                        eZ(
                          eZ({}, z),
                          {},
                          {
                            open: m,
                            onClose: function () {
                              return v.onClose("skin");
                            },
                            query: this.props.query,
                          },
                        ),
                      ),
                      (0, L.jsx)(en, {
                        open: b,
                        onClose: function () {
                          return v.onClose("tip");
                        },
                        tips:
                          null === (p = this.props) || void 0 === p
                            ? void 0
                            : p.tips,
                      }),
                    ],
                  });
                },
              },
            ]),
            p
          );
        })(h.Component),
        ew = (0, M.Z)((0, _.Pi)(eC)),
        eM = function (e) {
          return (0, L.jsx)(ew, eZ({ black: !0 }, e));
        },
        eT = n(87671),
        eN = n(58116),
        eL = n(43235),
        eA = n(48034),
        eR = n(39566),
        eO = n.n(eR),
        eI = n(75467),
        eP = n(56429),
        eB = n.n(eP),
        eE = (0, M.Z)(
          (0, _.Pi)(function (e) {
            var t,
              n,
              i,
              a,
              o = e.stores,
              r = e.type,
              s = o.dataStore,
              l = o.appStore,
              c = s.dimension,
              u = s.statistics,
              d = s.listen_duration,
              p = s.dateIndexs,
              v = s.dateRanges,
              f = s.skin,
              m = l.baseInfo,
              b = (0, h.useState)(!1),
              _ = b[0],
              k = b[1],
              y = function (e) {
                switch (e) {
                  case "每日推荐":
                    return { content: "音乐尝鲜者" };
                  case "猜你喜欢":
                    return { content: "音乐探险家" };
                  case "我喜欢":
                    return { content: "音乐藏品家" };
                  case "搜索":
                    return { content: "音乐独行侠" };
                  case "榜单":
                    return { content: "热歌追随者" };
                  default:
                    return {};
                }
              };
            (0, h.useEffect)(function () {
              k(!0);
            }, []);
            var S =
                (null == p ? void 0 : p[c]) >=
                (null == v ? void 0 : v[c].length) - 1,
              D =
                c !== x.Sr.DAY && c !== x.Sr.YEAR && ((0, g.rf)(S, c) || !S)
                  ? null ===
                      (a =
                        (null == u ? void 0 : u.duration_defeat_percent) / 100 >
                        60
                          ? { content: "听歌王者" }
                          : ["国语", "粤语", "闽南语", "藏语"].some(
                                function (e) {
                                  var t, n;
                                  return (
                                    e ===
                                    (null == u
                                      ? void 0
                                      : null === (t = u.rank_language) ||
                                          void 0 === t
                                        ? void 0
                                        : null === (n = t[0]) || void 0 === n
                                          ? void 0
                                          : n.language)
                                  );
                                },
                              )
                            ? null != u &&
                              null !== (t = u.hot_collect) &&
                              void 0 !== t &&
                              t.song_info
                              ? { content: "音乐鉴赏家" }
                              : [
                                    "每日推荐",
                                    "猜你喜欢",
                                    "我喜欢",
                                    "搜索",
                                    "榜单",
                                  ].some(function (e) {
                                    var t;
                                    return (
                                      e ===
                                      (null == u
                                        ? void 0
                                        : null === (t = u.most_listen_source) ||
                                            void 0 === t
                                          ? void 0
                                          : t.name)
                                    );
                                  })
                                ? {
                                    content:
                                      null ===
                                        (n = y(
                                          null == u
                                            ? void 0
                                            : null ===
                                                  (i = u.most_listen_source) ||
                                                void 0 === i
                                              ? void 0
                                              : i.name,
                                        )) || void 0 === n
                                        ? void 0
                                        : n.content,
                                  }
                                : null != u && u.most_sound_quality
                                  ? { content: "24K金耳朵" }
                                  : void 0
                            : { content: "音乐旅行家" }) || void 0 === a
                    ? void 0
                    : a.content
                  : "";
            return (0, L.jsx)("div", {
              className: j()(eB().wrap, eB()[f], eB()[r]),
              children: (0, L.jsx)("div", {
                className: eB().userInfo,
                children:
                  _ &&
                  (0, L.jsxs)(L.Fragment, {
                    children: [
                      (0, L.jsx)("div", {
                        className: eB().avatarWrap,
                        style: { backgroundImage: "url(".concat(eI.Z, ")") },
                        children: (0, L.jsx)("img", {
                          alt: "",
                          src: null == m ? void 0 : m.userpic,
                          className: eB().avatar,
                          onError: function (e) {
                            return (e.target.style.display = "none");
                          },
                        }),
                      }),
                      (0, L.jsxs)("div", {
                        className: eB().middle,
                        children: [
                          (0, L.jsx)("div", {
                            className: eB().userName,
                            children: (0, L.jsx)(N.Z, {
                              width:
                                (null == D ? void 0 : D.length) > 0 ? 260 : 350,
                              targetText: null == m ? void 0 : m.userNickName,
                              style: { fontSize: 30 },
                            }),
                          }),
                          (0, L.jsxs)("div", {
                            className: eB().listenDur,
                            children: [
                              "累计听歌",
                              (0, L.jsx)("span", { children: d || "-" }),
                              "小时",
                            ],
                          }),
                        ],
                      }),
                      (0, L.jsx)("div", {
                        className: eB().right,
                        children:
                          (null == D ? void 0 : D.length) > 0 &&
                          (0, L.jsxs)(L.Fragment, {
                            children: [
                              (0, L.jsxs)("div", {
                                className: eB().bigTitleLabel,
                                children: [
                                  0 === c ? "今" : "本",
                                  x.En[c],
                                  "音乐称号",
                                ],
                              }),
                              (0, L.jsx)("div", {
                                className: eB().bigTitle,
                                children: (0, L.jsx)("span", { children: D }),
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
              }),
            });
          }),
        ),
        eY = n(48530),
        eW = n(98875),
        eK = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/arrowWhiteBolder.ba56e191.png",
          height: 22,
          width: 22,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAPUlEQVR42mP4x/CPEYjL/lWAWYwMQIoJiPf8+w8RYoCq4P93AShU9Y8BKABVw/XvOFCoHEMAQwumoejWAgD1sU8TVXNhTwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        eV = n(93179),
        eF = n(75037),
        eH = n(89141);
      function eU(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i));
        }
        return n;
      }
      function eG(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eU(Object(n), !0).forEach(function (t) {
                (0, d.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eU(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var ez = (function (e) {
          (0, l.Z)(p, e);
          var t,
            n,
            i =
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
                  n = (0, u.Z)(p);
                if (t) {
                  var i = (0, u.Z)(this).constructor;
                  e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, c.Z)(this, e);
              });
          function p(e) {
            var t, n, r, l;
            return (
              (0, o.Z)(this, p),
              (t = i.call(this, e)),
              (0, d.Z)((0, s.Z)(t), "handleScroll", function (e) {
                var n,
                  i,
                  a = document.querySelector(".".concat(eO().holder)),
                  o = document.querySelector(".".concat(eO().dateTabWrap)),
                  r =
                    (null == o
                      ? void 0
                      : null === (n = o.getBoundingClientRect()) || void 0 === n
                        ? void 0
                        : n.height) || 200,
                  s =
                    (null == a
                      ? void 0
                      : null === (i = a.getBoundingClientRect()) || void 0 === i
                        ? void 0
                        : i.height) || 0,
                  l = !1;
                (e && e.scrollTop > r + s && (l = !0),
                  t.setState({
                    showTitleDateTab: l,
                    hasScroll:
                      t.state.hasScroll ||
                      (null == e ? void 0 : e.scrollTop) > 0,
                  }));
              }),
              (0, d.Z)(
                (0, s.Z)(t),
                "onTabChange",
                ((n = (0, a.Z)(
                  v().mark(function e(n, i, a, o, r) {
                    return v().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (t.clickMobileLog(r), t.props.getData(n, i, a, o));
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (e, t, i, a, o) {
                  return n.apply(this, arguments);
                }),
              ),
              (0, d.Z)(
                (0, s.Z)(t),
                "onOpen",
                ((r = (0, a.Z)(
                  v().mark(function e(n) {
                    var i, a, o, r, s;
                    return v().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("skin" !== n) {
                              e.next = 8;
                              break;
                            }
                            return (
                              t.setState({ open: !0 }),
                              (e.next = 4),
                              (0, g.hj)()
                            );
                          case 4:
                            (e.sent &&
                              k.LightMobileCall.mobileCall(x.x8.showHideBar, {
                                state: 0,
                              }),
                              (e.next = 9));
                            break;
                          case 8:
                            "tip" === n
                              ? t.setState({ tipOpen: !0 })
                              : "rank" === n &&
                                ((r =
                                  null ==
                                  (o =
                                    null === (i = t.props) || void 0 === i
                                      ? void 0
                                      : null === (a = i.vooConfig) ||
                                          void 0 === a
                                        ? void 0
                                        : a.inviteFriendPK)
                                    ? void 0
                                    : o.url)
                                  ? k.LightMobileCall.mobileCall(x.x8.openURL, {
                                      isFullScreen: 1,
                                      url: r,
                                    })
                                  : ((s = t.props.stores.dataStore),
                                    (0, ej.w)({
                                      dimension: x.Sr.DAY,
                                      skin: s.skin,
                                      inviteFriendPopup: 1,
                                    })));
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (e) {
                  return r.apply(this, arguments);
                }),
              ),
              (0, d.Z)(
                (0, s.Z)(t),
                "onClose",
                ((l = (0, a.Z)(
                  v().mark(function e(n) {
                    return v().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("skin" !== n) {
                              e.next = 8;
                              break;
                            }
                            return (
                              t.setState({ open: !1 }),
                              (e.next = 4),
                              (0, g.hj)()
                            );
                          case 4:
                            (e.sent &&
                              k.LightMobileCall.mobileCall(x.x8.showHideBar, {
                                state: 1,
                              }),
                              (e.next = 9));
                            break;
                          case 8:
                            "tip" === n && t.setState({ tipOpen: !1 });
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (e) {
                  return l.apply(this, arguments);
                }),
              ),
              (0, d.Z)((0, s.Z)(t), "clickMobileLog", function (e) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                if (e) {
                  var i = t.props.stores.dataStore,
                    a = i.dimension,
                    o = i.skin;
                  t.props.mobileLog(
                    eG(
                      eG(
                        { a: 1131811, b: "点击", svar1: e },
                        t.props.commonBiData(a, o),
                      ),
                      n,
                    ),
                  );
                }
              }),
              (t.state = {
                open: !1,
                tipOpen: !1,
                jump: !1,
                showTitleDateTab: !1,
                hasScroll: !1,
              }),
              t
            );
          }
          return (
            (0, r.Z)(p, [
              {
                key: "componentDidUpdate",
                value:
                  ((n = (0, a.Z)(
                    v().mark(function e() {
                      var t, n, i, a;
                      return v().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (i =
                                    (null === (t = this.props) || void 0 === t
                                      ? void 0
                                      : null === (n = t.query) || void 0 === n
                                        ? void 0
                                        : n.jumpModule) ||
                                    (0, g.re)("jumpModule")),
                                  (e.next = 3),
                                  (0, es.pc)([
                                    { platform: "android", version: 12485 },
                                    { platform: "ios", version: 12e3 },
                                    { platform: "harmony", version: 20141 },
                                  ])
                                );
                              case 3:
                                ((a = e.sent),
                                  document.querySelector("#".concat(i)) &&
                                    !this.state.jump &&
                                    a &&
                                    ((0, g.K)(i), this.setState({ jump: !0 })));
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  )),
                  function () {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    t = document.querySelector("#song_rank_wrap");
                  t &&
                    (null == t ? void 0 : t.addEventListener) &&
                    t.addEventListener("scroll", function () {
                      return e.handleScroll(t);
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t,
                    n,
                    i,
                    o,
                    r,
                    s,
                    l,
                    c,
                    u,
                    d,
                    p,
                    h,
                    m = this,
                    b = this.state,
                    _ = b.open,
                    y = b.tipOpen,
                    S = b.showTitleDateTab,
                    D = b.hasScroll,
                    Z = this.props,
                    C = Z.tabDisabled,
                    w = Z.error,
                    M = Z.ready;
                  (Z.helpOpen, Z.helpText, Z.closeHelp);
                  var T = this.props.stores,
                    N = T.dataStore,
                    A = T.appStore,
                    R = (0, Y.Z)({ dataStore: N }).formatYearData,
                    W = N.dimension,
                    K = N.date,
                    V = N.yearStatistics,
                    F = N.statistics,
                    H = N.selectedModules,
                    U = N.listen_duration,
                    G = N.dateIndexs,
                    z = N.dateRanges,
                    q = N.skin,
                    Q = A.statusAndTitleBarHeight,
                    J = W === x.Sr.YEAR ? R(K.year(), V) : null,
                    $ =
                      W === x.Sr.YEAR
                        ? !J
                        : (null == H ? void 0 : H.length) === 0,
                    ee =
                      (null == G ? void 0 : G[W]) >=
                      (null == z ? void 0 : z[W].length) - 1,
                    et = ""
                      .concat(window.location.origin)
                      .concat(
                        window.location.pathname.replace("home", "share"),
                        "?ssr_header_param=",
                      )
                      .concat(x.Dc, "&ssr_url_param=")
                      .concat(x.By, "&isHideTitleBar=1&dimension=")
                      .concat(W, "&isLatest=")
                      .concat(ee, "&date=")
                      .concat(
                        null == K ? void 0 : K.format("YYYYMMDD"),
                        "&duration=",
                      )
                      .concat(U, "&grade=")
                      .concat(
                        null == F
                          ? void 0
                          : null === (e = F.grade_info) || void 0 === e
                            ? void 0
                            : e.p_grade,
                      ),
                    ei =
                      3 !== W && q === x.lu.MAGAZINE
                        ? H.some(function (e) {
                            return (
                              (null == e ? void 0 : e.type) ===
                              x.cG.SPECIAL_MEMORY
                            );
                          })
                          ? "#005485"
                          : "#000"
                        : "transparent";
                  return (0, L.jsxs)("div", {
                    className: j()(eO().wrap, "skin_magazine", {}),
                    id: "song_rank_wrap",
                    children: [
                      (0, L.jsx)(
                        eS.Z,
                        eG(
                          eG(
                            {
                              title: "听歌统计",
                              jumpUrl: et,
                              onOpen: this.onOpen,
                              clickMobileLog: this.clickMobileLog,
                              forbidShare: $ || w,
                              showSkin: !0,
                              inviteFriendPK:
                                null === (t = this.props) || void 0 === t
                                  ? void 0
                                  : null === (n = t.vooConfig) || void 0 === n
                                    ? void 0
                                    : n.inviteFriendPK,
                            },
                            this.props,
                          ),
                          {},
                          {
                            children: (0, L.jsxs)(L.Fragment, {
                              children: [
                                (0, L.jsx)("div", {
                                  className: j()(
                                    eO().titleName,
                                    !S && eO().show,
                                  ),
                                  children: "听歌统计",
                                }),
                                (0, L.jsx)("div", {
                                  className: j()(
                                    eO().titleDateTabWrap,
                                    D && eO().titleDateTabInit,
                                    !!S && eO().show,
                                  ),
                                  children: (0, L.jsx)(em.Z, {
                                    onChange: this.onTabChange,
                                    disabled: C,
                                    showRange: !1,
                                    from: "titleBar",
                                  }),
                                }),
                              ],
                            }),
                          },
                        ),
                      ),
                      (0, L.jsxs)("div", {
                        className: eO().content,
                        children: [
                          (0, L.jsx)("div", {
                            className: eO().holder,
                            style: { height: Q || "" },
                          }),
                          (0, L.jsxs)("div", {
                            className:
                              3 !== W && q === x.lu.MAGAZINE ? eO().topBg : "",
                            children: [
                              (0, L.jsx)("div", {
                                className: eO().dateTabWrap,
                                children: (0, L.jsx)(em.Z, {
                                  onChange: this.onTabChange,
                                  disabled: C,
                                }),
                              }),
                              (0, L.jsx)(eE, {}),
                            ],
                          }),
                          0 !== w ||
                          (W === x.Sr.YEAR ? !J : null === N.statistics) ||
                          $
                            ? (0, L.jsx)(E.Z, {
                                type: 1 === w || $ ? "empty" : "error",
                                ready: M,
                              })
                            : (0, L.jsxs)(L.Fragment, {
                                children: [
                                  W === x.Sr.YEAR
                                    ? (0, L.jsx)(L.Fragment, {
                                        children: (0, L.jsx)("div", {
                                          className: eO().yearWrap,
                                          children: (0, L.jsx)("div", {
                                            className: eO().yearContainer,
                                            id: "year-container",
                                            children: (0, L.jsxs)("div", {
                                              className: eO().inner,
                                              children: [
                                                (0, L.jsxs)("div", {
                                                  className: eO().card,
                                                  style: {
                                                    marginTop: (0, g.ht)(40),
                                                  },
                                                  children: [
                                                    (0, L.jsx)("p", {
                                                      className: eO().title,
                                                      children: "听歌小结",
                                                    }),
                                                    (0, L.jsx)("div", {
                                                      className: "divider",
                                                    }),
                                                    (0, L.jsx)(eH.Z, {
                                                      type: "normal",
                                                      yearData: J,
                                                      clickMobileLog:
                                                        this.clickMobileLog,
                                                    }),
                                                  ],
                                                }),
                                                !!(
                                                  null != J &&
                                                  null !== (i = J.rank_song) &&
                                                  void 0 !== i &&
                                                  i.length
                                                ) &&
                                                  (0, L.jsxs)("div", {
                                                    className: eO().card,
                                                    children: [
                                                      (0, L.jsxs)("p", {
                                                        className: eO().title,
                                                        onClick: (0, a.Z)(
                                                          v().mark(
                                                            function e() {
                                                              var t, n;
                                                              return v().wrap(
                                                                function (e) {
                                                                  for (;;)
                                                                    switch (
                                                                      (e.prev =
                                                                        e.next)
                                                                    ) {
                                                                      case 0:
                                                                        if (
                                                                          ((t =
                                                                            (0,
                                                                            g.G8)(
                                                                              {
                                                                                page: "rank",
                                                                                query:
                                                                                  {
                                                                                    isHideTitleBar: 1,
                                                                                    dimension:
                                                                                      W,
                                                                                    date:
                                                                                      null ==
                                                                                      K
                                                                                        ? void 0
                                                                                        : K.format(
                                                                                            "YYYYMMDD",
                                                                                          ),
                                                                                    rankType:
                                                                                      x
                                                                                        .Jd
                                                                                        .SONG,
                                                                                    skin: q,
                                                                                    sonicparams:
                                                                                      ""
                                                                                        .concat(
                                                                                          q,
                                                                                          "_",
                                                                                        )
                                                                                        .concat(
                                                                                          x
                                                                                            .Jd
                                                                                            .SONG,
                                                                                        ),
                                                                                    sonic_remain_params:
                                                                                      "sonicparams",
                                                                                  },
                                                                              },
                                                                            )),
                                                                          !(
                                                                            !k.LightMobileCall.isInClient() &&
                                                                            "1" ===
                                                                              (0,
                                                                              g.vH)()
                                                                                .debug
                                                                          ))
                                                                        ) {
                                                                          e.next = 4;
                                                                          break;
                                                                        }
                                                                        return (
                                                                          window.open(
                                                                            t,
                                                                          ),
                                                                          e.abrupt(
                                                                            "return",
                                                                          )
                                                                        );
                                                                      case 4:
                                                                        return (
                                                                          (e.next = 6),
                                                                          (0,
                                                                          g.hj)()
                                                                        );
                                                                      case 6:
                                                                        ((n =
                                                                          e.sent),
                                                                          k.LightMobileCall.mobileCall(
                                                                            x.x8
                                                                              .openURL,
                                                                            {
                                                                              browser: 0,
                                                                              isFullScreen: 1,
                                                                              url: t,
                                                                              hasBar:
                                                                                n
                                                                                  ? 1
                                                                                  : 0,
                                                                            },
                                                                          ));
                                                                      case 8:
                                                                      case "end":
                                                                        return e.stop();
                                                                    }
                                                                },
                                                                e,
                                                              );
                                                            },
                                                          ),
                                                        ),
                                                        children: [
                                                          "歌曲收听榜",
                                                          (0, L.jsx)("img", {
                                                            alt: "",
                                                            src: eK.src,
                                                            className:
                                                              eO().arrowIcon,
                                                          }),
                                                        ],
                                                      }),
                                                      (0, L.jsx)("div", {
                                                        className: "divider",
                                                      }),
                                                      (0, L.jsx)("div", {
                                                        className:
                                                          eO().cardBody,
                                                        children: (0, L.jsx)(
                                                          eF.Z,
                                                          {
                                                            arr:
                                                              null == J
                                                                ? void 0
                                                                : null ===
                                                                      (o =
                                                                        J.rank_song) ||
                                                                    void 0 === o
                                                                  ? void 0
                                                                  : o.map(
                                                                      function (
                                                                        e,
                                                                      ) {
                                                                        var t;
                                                                        return eG(
                                                                          eG(
                                                                            {},
                                                                            e,
                                                                          ),
                                                                          {},
                                                                          {
                                                                            cover:
                                                                              (0,
                                                                              k.replaceHttpsImg)(
                                                                                (null ==
                                                                                e
                                                                                  ? void 0
                                                                                  : null ===
                                                                                        (t =
                                                                                          e.cover) ||
                                                                                      void 0 ===
                                                                                        t
                                                                                    ? void 0
                                                                                    : t.replace(
                                                                                        "{size}",
                                                                                        240,
                                                                                      )) ||
                                                                                  eW
                                                                                    .Z
                                                                                    .src,
                                                                              ),
                                                                          },
                                                                        );
                                                                      },
                                                                    ),
                                                            noRequest: !0,
                                                            rankType: x.Jd.SONG,
                                                            type: "squre",
                                                            dataType: "song",
                                                            onItemClick:
                                                              function (e) {
                                                                return (0,
                                                                g._n)(
                                                                  null == e
                                                                    ? void 0
                                                                    : e.id,
                                                                );
                                                              },
                                                            needIcon: !0,
                                                            from: "year",
                                                            title: "",
                                                          },
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                !!(
                                                  null != J &&
                                                  null !== (r = J.top_singer) &&
                                                  void 0 !== r &&
                                                  r.name
                                                ) &&
                                                  (0, L.jsxs)("div", {
                                                    className: eO().card,
                                                    children: [
                                                      (0, L.jsx)("p", {
                                                        className: eO().title,
                                                        children: "年度歌手",
                                                      }),
                                                      (0, L.jsx)("div", {
                                                        className: "divider",
                                                      }),
                                                      (0, L.jsx)("div", {
                                                        className:
                                                          eO().cardBody,
                                                        children: (0, L.jsx)(
                                                          eV.Z,
                                                          {
                                                            type: "circle",
                                                            name:
                                                              null == J
                                                                ? void 0
                                                                : null ===
                                                                      (s =
                                                                        J.top_singer) ||
                                                                    void 0 === s
                                                                  ? void 0
                                                                  : s.name,
                                                            desc: "播放了".concat(
                                                              (null == J
                                                                ? void 0
                                                                : null ===
                                                                      (l =
                                                                        J.top_singer) ||
                                                                    void 0 === l
                                                                  ? void 0
                                                                  : l.plays) ||
                                                                1,
                                                              "首",
                                                            ),
                                                            img:
                                                              (null == J
                                                                ? void 0
                                                                : null ===
                                                                      (c =
                                                                        J.top_singer) ||
                                                                    void 0 === c
                                                                  ? void 0
                                                                  : c.img) ||
                                                              eY.Z.src,
                                                            onClick:
                                                              function () {
                                                                var e, t;
                                                                (0, es.rV)({
                                                                  singerId:
                                                                    null == J
                                                                      ? void 0
                                                                      : null ===
                                                                            (e =
                                                                              J.top_singer) ||
                                                                          void 0 ===
                                                                            e
                                                                        ? void 0
                                                                        : e.id,
                                                                  singerName:
                                                                    null == J
                                                                      ? void 0
                                                                      : null ===
                                                                            (t =
                                                                              J.top_singer) ||
                                                                          void 0 ===
                                                                            t
                                                                        ? void 0
                                                                        : t.name,
                                                                });
                                                              },
                                                            dimension: "year",
                                                          },
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                !!(
                                                  null != J &&
                                                  null !== (u = J.rank_style) &&
                                                  void 0 !== u &&
                                                  u.length
                                                ) &&
                                                  (0, L.jsxs)("div", {
                                                    className: eO().card,
                                                    children: [
                                                      (0, L.jsx)("p", {
                                                        className: eO().title,
                                                        children: "最爱曲风",
                                                      }),
                                                      (0, L.jsx)("div", {
                                                        className: "divider",
                                                      }),
                                                      (0, L.jsx)("div", {
                                                        className:
                                                          eO().cardBody,
                                                        children: (0, L.jsx)(
                                                          eV.Z,
                                                          {
                                                            type: "rank",
                                                            title: "TOP1",
                                                            name:
                                                              null == J
                                                                ? void 0
                                                                : null ===
                                                                      (d =
                                                                        J.rank_style) ||
                                                                    void 0 === d
                                                                  ? void 0
                                                                  : null ===
                                                                        (p =
                                                                          d[0]) ||
                                                                      void 0 ===
                                                                        p
                                                                    ? void 0
                                                                    : p.title,
                                                            rank:
                                                              null == J
                                                                ? void 0
                                                                : J.rank_style,
                                                            dimension: "year",
                                                          },
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      })
                                    : H.map(function (e, t) {
                                        return (0, L.jsxs)(
                                          f().Fragment,
                                          {
                                            children: [
                                              (null == e ? void 0 : e.type) ===
                                                x.cG.LISTEN_SUMMARY &&
                                                (0, L.jsx)(O.Z, {
                                                  yearData: J,
                                                  clickMobileLog:
                                                    m.clickMobileLog,
                                                }),
                                              (null == e ? void 0 : e.type) ===
                                                x.cG.SONG &&
                                                (0, L.jsx)(I.Z, {
                                                  yearData: J,
                                                  clickMobileLog:
                                                    m.clickMobileLog,
                                                  mobileLog: m.props.mobileLog,
                                                  isLatest: ee,
                                                }),
                                              (null == e ? void 0 : e.type) ===
                                                x.cG.SINGER &&
                                                (0, L.jsx)(P.Z, {
                                                  yearData: J,
                                                  clickMobileLog:
                                                    m.clickMobileLog,
                                                }),
                                              (null == e ? void 0 : e.type) ===
                                                x.cG.SPECIAL_MEMORY &&
                                                (0, L.jsx)(B.Z, {
                                                  clickMobileLog:
                                                    m.clickMobileLog,
                                                }),
                                            ],
                                          },
                                          t,
                                        );
                                      }),
                                  (0, L.jsx)("div", {
                                    className: eO().bottomTip,
                                    style: { backgroundColor: ei },
                                    children: "- 没有更多数据了 -",
                                  }),
                                  (0, L.jsx)(er.Z, { bgColor: ei }),
                                ],
                              }),
                        ],
                      }),
                      (0, L.jsx)(X, {
                        mobileLog: this.props.mobileLog,
                        open: _,
                        onClose: function () {
                          return m.onClose("skin");
                        },
                        query: this.props.query,
                      }),
                      (0, L.jsx)(en, {
                        open: y,
                        onClose: function () {
                          return m.onClose("tip");
                        },
                        tips:
                          null === (h = this.props) || void 0 === h
                            ? void 0
                            : h.tips,
                      }),
                    ],
                  });
                },
              },
            ]),
            p
          );
        })(h.Component),
        eq = n(27484),
        eQ = n.n(eq);
      function eJ(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i));
        }
        return n;
      }
      function eX(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eJ(Object(n), !0).forEach(function (t) {
                (0, d.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eJ(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var e$ = (function (e) {
          (0, l.Z)(S, e);
          var t,
            p,
            h,
            _ =
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
                  n = (0, u.Z)(S);
                if (t) {
                  var i = (0, u.Z)(this).constructor;
                  e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, c.Z)(this, e);
              });
          function S(e) {
            var t, r, l, c, u, p, h, m, j, D;
            return (
              (0, o.Z)(this, S),
              (p = _.call(this, e)),
              (0, d.Z)((0, s.Z)(p), "autoRefreshInt", f().createRef(null)),
              (0, d.Z)((0, s.Z)(p), "secondRefresh", f().createRef(null)),
              (0, d.Z)((0, s.Z)(p), "refreshData", function () {
                var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  t = p.props.stores.dataStore;
                return p.getData(
                  t.dimension,
                  t.dateIndexs[t.dimension],
                  t.date,
                  null,
                  e,
                );
              }),
              (0, d.Z)(
                (0, s.Z)(p),
                "fetchFriendRank",
                ((h = (0, a.Z)(
                  v().mark(function e(t, n) {
                    var a, o;
                    return v().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (t !== x.Sr.YEAR) {
                                e.next = 3;
                                break;
                              }
                              return (
                                p.setState({ friendRankData: null }),
                                e.abrupt("return")
                              );
                            case 3:
                              return (
                                (e.prev = 3),
                                (e.next = 6),
                                (0, b.Rh)({
                                  date_type: t,
                                  date: n || "",
                                  page_index: 0,
                                  page_size: 3,
                                })
                              );
                            case 6:
                              ((a = e.sent),
                                (o = (0, i.Z)(a, 1)[0])
                                  ? p.setState({ friendRankData: o })
                                  : p.setState({ friendRankData: null }),
                                (e.next = 15));
                              break;
                            case 12:
                              ((e.prev = 12),
                                (e.t0 = e.catch(3)),
                                p.setState({ friendRankData: null }));
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[3, 12]],
                    );
                  }),
                )),
                function (e, t) {
                  return h.apply(this, arguments);
                }),
              ),
              (0, d.Z)((0, s.Z)(p), "refreshFriendRank", function () {
                var e,
                  t,
                  n = p.props.stores.dataStore;
                n.dimension !== x.Sr.YEAR &&
                  p.fetchFriendRank(
                    n.dimension,
                    (null === (e = n.date) || void 0 === e
                      ? void 0
                      : null === (t = e.format) || void 0 === t
                        ? void 0
                        : t.call(e, "YYYYMMDD")) || "",
                  );
              }),
              (0, d.Z)((0, s.Z)(p), "updateFriendRankLike", function (e, t) {
                p.setState(function (n) {
                  var i,
                    a = n.friendRankData;
                  return null != a &&
                    null !== (i = a.rank_users) &&
                    void 0 !== i &&
                    i.length
                    ? {
                        friendRankData: eX(
                          eX({}, a),
                          {},
                          {
                            rank_users: a.rank_users.map(function (n) {
                              var i;
                              return (null === (i = n.user_info) || void 0 === i
                                ? void 0
                                : i.userid) !== e
                                ? n
                                : eX(
                                    eX({}, n),
                                    {},
                                    {
                                      liked: t,
                                      like_count: Math.max(
                                        0,
                                        (n.like_count || 0) + (t ? 1 : -1),
                                      ),
                                    },
                                  );
                            }),
                          },
                        ),
                      }
                    : null;
                });
              }),
              (0, d.Z)(
                (0, s.Z)(p),
                "handleLike",
                ((m = (0, a.Z)(
                  v().mark(function e(t, n, a) {
                    var o, r, s, l, c, u, d, h, f, m, g, _, y, S;
                    return v().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (a && a.stopPropagation(),
                                !1 !==
                                  (void 0 ===
                                    (l = (p.props.vooConfig || {})
                                      .showLikeBtn) || l))
                              ) {
                                e.next = 4;
                                break;
                              }
                              return e.abrupt("return");
                            case 4:
                              if (window.navigator.onLine) {
                                e.next = 7;
                                break;
                              }
                              return (
                                k.KgToast.fail("网络未连接，请检查网络"),
                                e.abrupt("return")
                              );
                            case 7:
                              if (p._likingTarget !== t) {
                                e.next = 9;
                                break;
                              }
                              return e.abrupt("return");
                            case 9:
                              if (
                                ((p._likingTarget = t),
                                (u = (c = p.props.stores).dataStore),
                                !(
                                  (d =
                                    null === (o = c.appStore.baseInfo) ||
                                    void 0 === o
                                      ? void 0
                                      : o.userid) &&
                                  t &&
                                  Number(d) === Number(t)
                                ))
                              ) {
                                e.next = 16;
                                break;
                              }
                              return (
                                (p._likingTarget = null),
                                p.openWhoLikedMe(),
                                e.abrupt("return")
                              );
                            case 16:
                              return (
                                (h = u.dimension),
                                (f = u.date),
                                (m = !n),
                                null === (r = (s = p.props).mobileLog) ||
                                  void 0 === r ||
                                  r.call(s, {
                                    a: 1135625,
                                    b: "点击",
                                    ft: "好友听歌排行榜",
                                    r: "好友听歌排行榜",
                                    svar1: (0, x.n2)(h),
                                    svar2: m ? "点赞" : "取消点赞",
                                    svar3: "听歌统计详情页",
                                  }),
                                p.updateFriendRankLike(t, m),
                                (e.prev = 20),
                                (e.next = 23),
                                (0, b.vs)({
                                  target_userid: t,
                                  date_type: h,
                                  date:
                                    (null == f
                                      ? void 0
                                      : null === (g = f.format) || void 0 === g
                                        ? void 0
                                        : g.call(f, "YYYYMMDD")) || "",
                                  cancel: n,
                                })
                              );
                            case 23:
                              ((_ = e.sent),
                                (S = (y = (0, i.Z)(_, 2))[0]),
                                y[1] || (null == S ? void 0 : S.status) !== 1
                                  ? (p.updateFriendRankLike(t, n),
                                    k.KgToast.fail("操作失败，请稍后重试"))
                                  : m && p.startLikeIdleTimer());
                            case 28:
                              return (
                                (e.prev = 28),
                                (p._likingTarget = null),
                                e.finish(28)
                              );
                            case 31:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[20, , 28, 31]],
                    );
                  }),
                )),
                function (e, t, n) {
                  return m.apply(this, arguments);
                }),
              ),
              (0, d.Z)((0, s.Z)(p), "openWhoLikedMe", function () {
                var e,
                  t,
                  n,
                  i,
                  a,
                  o = (p.props.vooConfig || {}).showLikeBtn;
                if (!1 !== (void 0 === o || o)) {
                  var r = p.props.stores,
                    s = r.dataStore,
                    l = r.appStore,
                    c = s.dimension,
                    u = s.date;
                  (null === (e = (t = p.props).mobileLog) ||
                    void 0 === e ||
                    e.call(t, {
                      a: 1135626,
                      b: "曝光",
                      ft: "赞过我的人",
                      r: "好友听歌排行榜",
                      svar1: (0, x.n2)(c),
                    }),
                    eL.Z.show({
                      query: {
                        date_type: c,
                        date:
                          (null == u
                            ? void 0
                            : null === (n = u.format) || void 0 === n
                              ? void 0
                              : n.call(u, "YYYYMMDD")) || "",
                      },
                      likeCount:
                        null === (i = p.state.friendRankData) || void 0 === i
                          ? void 0
                          : null === (a = i.myself) || void 0 === a
                            ? void 0
                            : a.like_count,
                      serverTime: l.getServerTimeDayjs(),
                      mobileLog: p.props.mobileLog,
                      onAvatarClick: p.handleLikeUserAvatarClick,
                    }));
                }
              }),
              (0, d.Z)((0, s.Z)(p), "handleLikeUserAvatarClick", function (e) {
                k.LightMobileCall.mobileCall(182, {
                  userid: String(e),
                  source: "listen_report",
                  type: 1,
                });
              }),
              (0, d.Z)((0, s.Z)(p), "stopAutoRefresh", function () {
                p.autoRefreshInt.current &&
                  (clearInterval(p.autoRefreshInt.current),
                  (p.autoRefreshInt.current = null));
              }),
              (0, d.Z)((0, s.Z)(p), "startAutoRefresh", function () {
                var e, t;
                (p.stopAutoRefresh(),
                  console.log("startAutoRefresh"),
                  (p.autoRefreshInt.current = setInterval(
                    function () {
                      ((p.secondRefresh.current = 1), p.refreshData());
                    },
                    (null === (e = p.props) || void 0 === e
                      ? void 0
                      : null === (t = e.common) || void 0 === t
                        ? void 0
                        : t.homeDataRefresh) * 6e4,
                  )));
              }),
              (0, d.Z)(
                (0, s.Z)(p),
                "getData",
                ((j = (0, a.Z)(
                  v().mark(function e(t, n, a, o) {
                    var r,
                      s,
                      l,
                      c,
                      u,
                      d,
                      h,
                      f,
                      m,
                      _,
                      S,
                      j,
                      D,
                      Z,
                      C,
                      w,
                      M,
                      T,
                      N,
                      L,
                      A,
                      R,
                      O,
                      I,
                      P,
                      B,
                      E,
                      Y,
                      W,
                      K,
                      V,
                      F,
                      H,
                      U,
                      G,
                      z,
                      q,
                      Q,
                      J,
                      X = arguments;
                    return v().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((r = X.length > 4 && void 0 !== X[4] && X[4]),
                                (e.prev = 1),
                                (l = (s = p.props.stores).dataStore),
                                (c = s.appStore),
                                (u =
                                  l.skin === x.lu.NORMALV2 ||
                                  l.skin === x.lu.BLACKV2 ||
                                  l.skin === x.lu.MAGAZINE),
                                (d = !1),
                                (h = {}),
                                !(!(f = l.getDataCache(t, n)) || r))
                              ) {
                                e.next = 70;
                                break;
                              }
                              if (
                                ((m = (0, g.EW)(
                                  function () {
                                    p.setState({ tabDisabled: !0 });
                                  },
                                  function () {
                                    p.setState({ tabDisabled: !1 });
                                  },
                                )),
                                (_ = {
                                  is_entrance: !1,
                                  date_type: t,
                                  is_real_time: !1,
                                  date: a.format("YYYYMMDD"),
                                }),
                                t !== x.Sr.YEAR)
                              ) {
                                e.next = 41;
                                break;
                              }
                              return (
                                p.fetchFriendRank(x.Sr.YEAR, ""),
                                (w =
                                  2025 ===
                                  (C = (a || l.dateRanges[t][n]).year())
                                    ? { biz: "v2025" }
                                    : 2024 === C
                                      ? { biz: "v2024" }
                                      : {}),
                                (M = [(0, b.W5)(y.lJ[C], w)]),
                                (T = !1),
                                u &&
                                  !l.yearChartData &&
                                  ((T = !0), M.push((0, b.Jr)())),
                                (e.next = 20),
                                Promise.all(M)
                              );
                            case 20:
                              if (
                                ((N = e.sent),
                                (A = (L = (0, i.Z)(N, 2))[0]),
                                (R = L[1]),
                                !(
                                  (null == A
                                    ? void 0
                                    : null === (S = A.data) || void 0 === S
                                      ? void 0
                                      : S.status) === 1 &&
                                  (!T ||
                                    (null == R
                                      ? void 0
                                      : null === (j = R.data) || void 0 === j
                                        ? void 0
                                        : j.status) === 1)
                                ))
                              ) {
                                e.next = 31;
                                break;
                              }
                              ((h =
                                (null == A
                                  ? void 0
                                  : null === (O = A.data) || void 0 === O
                                    ? void 0
                                    : O.data) || {}),
                                p.setState({ error: 0 }),
                                console.log("date_year", h),
                                T &&
                                  ((P =
                                    null == R
                                      ? void 0
                                      : null === (I = R.data) || void 0 === I
                                        ? void 0
                                        : I.data) &&
                                    ((null === (B = P.stat_data) || void 0 === B
                                      ? void 0
                                      : B.length) > 0
                                      ? (P.stat_data_empty = P.stat_data.every(
                                          function (e) {
                                            var t;
                                            return (
                                              (null == e
                                                ? void 0
                                                : e.play_song_num) <= 0 ||
                                              (null === (t = e.song_list) ||
                                              void 0 === t
                                                ? void 0
                                                : t.length) === 0
                                            );
                                          },
                                        ))
                                      : (P.stat_data_empty = !0)),
                                  l.setYearChartData(P)),
                                (e.next = 39));
                              break;
                            case 31:
                              if (!(
                                (null == A
                                  ? void 0
                                  : null === (D = A.data) || void 0 === D
                                    ? void 0
                                    : D.errcode) === 10004 ||
                                (null == A
                                  ? void 0
                                  : null === (Z = A.data) || void 0 === Z
                                    ? void 0
                                    : Z.errcode) === 10004
                              )) {
                                e.next = 36;
                                break;
                              }
                              ((h = null),
                                p.setState({ error: 1 }),
                                (e.next = 39));
                              break;
                            case 36:
                            case 59:
                              return (
                                (0, g.FN)("加载失败"),
                                m && m(),
                                e.abrupt("return")
                              );
                            case 39:
                              e.next = 64;
                              break;
                            case 41:
                              return (
                                (W = p.fetchFriendRank(
                                  t,
                                  a.format("YYYYMMDD"),
                                )),
                                (e.next = 44),
                                (0, b.CJ)(_, null, {
                                  useMobileCall:
                                    (null == c ? void 0 : c.isInClient) ||
                                    (null === k.LightMobileCall ||
                                    void 0 === k.LightMobileCall
                                      ? void 0
                                      : k.LightMobileCall.isInClient()),
                                  useCache: !0,
                                })
                              );
                            case 44:
                              if (
                                (null == (K = e.sent)
                                  ? void 0
                                  : null === (E = K.data) || void 0 === E
                                    ? void 0
                                    : E.status) !== 1
                              ) {
                                e.next = 54;
                                break;
                              }
                              ((h =
                                (null == K
                                  ? void 0
                                  : null === (V = K.data) || void 0 === V
                                    ? void 0
                                    : V.data) || {}),
                                p.setState({ error: 0 }),
                                console.log(
                                  "duration:",
                                  (z =
                                    Math.floor(
                                      (null === (F = h) || void 0 === F
                                        ? void 0
                                        : null === (H = F.grade_info) ||
                                            void 0 === H
                                          ? void 0
                                          : H.duration) / 60,
                                    ) || 0),
                                  null == l ? void 0 : l.listen_duration,
                                ),
                                (null != l && l.listen_duration) ||
                                  (console.log(
                                    "setListenDuration",
                                    z,
                                    !(null != l && l.listen_duration),
                                  ),
                                  l.setListenDuration(z)),
                                l.setGrade(
                                  null === (U = h) || void 0 === U
                                    ? void 0
                                    : null === (G = U.grade_info) ||
                                        void 0 === G
                                      ? void 0
                                      : G.p_grade,
                                ),
                                (e.next = 62));
                              break;
                            case 54:
                              if (
                                (null == K
                                  ? void 0
                                  : null === (Y = K.data) || void 0 === Y
                                    ? void 0
                                    : Y.errcode) !== 3e4
                              ) {
                                e.next = 59;
                                break;
                              }
                              ((h = null),
                                p.setState({ error: 1 }),
                                (e.next = 62));
                              break;
                            case 62:
                              return ((e.next = 64), W);
                            case 64:
                              (l.setDataCache(t, n, h) || p.startAutoRefresh(),
                                (d = !0),
                                m && m(),
                                (e.next = 74));
                              break;
                            case 70:
                              ((h = f.data),
                                p.setState({ error: h ? 0 : 1 }),
                                p.fetchFriendRank(t, a.format("YYYYMMDD")),
                                (d = !0));
                            case 74:
                              d &&
                                ((p.dataGot = !0),
                                o && o(),
                                t === x.Sr.YEAR
                                  ? l.setYearStatistics(h)
                                  : (l.setStatistics(h),
                                    (q = l.dimension),
                                    (Q = l.dateRanges),
                                    (null == (J = l.dateIndexs)
                                      ? void 0
                                      : J[q]) >=
                                      (null == Q ? void 0 : Q[q].length) - 1 &&
                                      p.getSongMemory({
                                        date_type: t,
                                        date: a.format("YYYYMMDD"),
                                      })));
                            case 75:
                              return (
                                (e.prev = 75),
                                p.props.stores.appStore.setShowFirstSkeleton(
                                  !1,
                                ),
                                e.finish(75)
                              );
                            case 78:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, , 75, 78]],
                    );
                  }),
                )),
                function (e, t, n, i) {
                  return j.apply(this, arguments);
                }),
              ),
              (0, d.Z)(
                (0, s.Z)(p),
                "getSongMemory",
                ((D = (0, a.Z)(
                  v().mark(function e(t) {
                    var n, a, o, r, s, l;
                    return v().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = p.props.stores.dataStore),
                              p.secondRefresh.current ||
                                n.setSongMemoryData(null),
                              (a = {
                                date_type: t.date_type,
                                date: t.date,
                                cursor: 0,
                                limit: 10,
                              }),
                              (e.next = 5),
                              (0, b.HW)(a)
                            );
                          case 5:
                            if (
                              ((o = e.sent),
                              (s = (r = (0, i.Z)(o, 2))[0]),
                              (l = r[1]),
                              (p.secondRefresh.current = 0),
                              !l)
                            ) {
                              e.next = 13;
                              break;
                            }
                            return (
                              n.setSongMemoryData(null),
                              e.abrupt("return")
                            );
                          case 13:
                            n.setSongMemoryData(
                              eX(eX({}, s), {}, { dateParams: a }),
                            );
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (e) {
                  return D.apply(this, arguments);
                }),
              ),
              (0, d.Z)((0, s.Z)(p), "closeHelp", function () {
                p.setState({ helpOpen: !1 });
              }),
              (0, d.Z)(
                (0, s.Z)(p),
                "initCssVar",
                (0, a.Z)(
                  v().mark(function e() {
                    var t;
                    return v().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((t = (0, k.getChromeVersion)()),
                                !(k.LightMobileCall.isAndroid && t < 51))
                              ) {
                                e.next = 12;
                                break;
                              }
                              return (
                                (e.prev = 2),
                                (e.next = 5),
                                n.e(6915).then(n.bind(n, 18037))
                              );
                            case 5:
                              (e.sent.default({ watch: !0 }), (e.next = 12));
                              break;
                            case 9:
                              ((e.prev = 9),
                                (e.t0 = e.catch(2)),
                                console.error(
                                  "cssVars error: ",
                                  e.t0,
                                  null === e.t0 || void 0 === e.t0
                                    ? void 0
                                    : e.t0.message,
                                ));
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[2, 9]],
                    );
                  }),
                ),
              ),
              (p.state = Object.assign(
                {
                  tabDisabled: !1,
                  error: 0,
                  isInClient:
                    !!(null !== (t = e.query) && void 0 !== t && t.clientver) ||
                    k.LightMobileCall.isInClient(),
                  ready:
                    (null === (r = e.stores) || void 0 === r
                      ? void 0
                      : null === (l = r.dataStore) || void 0 === l
                        ? void 0
                        : l.dimension) !== x.Sr.YEAR &&
                    !!(null !== (c = e.state) && void 0 !== c && c.listenData),
                  helpOpen: !1,
                  helpText: "换肤搬到这里了哦！",
                  friendRankData:
                    (null === (u = e.state) || void 0 === u
                      ? void 0
                      : u.friendRankData) || null,
                  settings: null,
                  subscribeOn: !1,
                  subscribePopupVisible: !1,
                },
                null == e ? void 0 : e.state,
              )),
              (p._likingTarget = null),
              (0, eA.o)((0, s.Z)(p), {
                getVooConfig: function () {
                  return p.props.vooConfig || {};
                },
                getDimension: function () {
                  var e, t;
                  return null === (e = p.props.stores) || void 0 === e
                    ? void 0
                    : null === (t = e.dataStore) || void 0 === t
                      ? void 0
                      : t.dimension;
                },
                getIsClose: function () {
                  return !1;
                },
                log: function (e) {
                  var t, n;
                  return null === (t = (n = p.props).mobileLog) || void 0 === t
                    ? void 0
                    : t.call(n, e);
                },
                enableScene2: !1,
                biSource: {
                  popupSource: "听歌统计详情页点赞",
                  toastSource: "听歌统计详情页",
                },
              }),
              (p.debug = !!p.props.isDebug),
              p.debug ||
                (p.debug = !!~window.location.search.indexOf("debug=1")),
              p
            );
          }
          return (
            (0, r.Z)(S, [
              {
                key: "componentDidMount",
                value:
                  ((p = (0, a.Z)(
                    v().mark(function e() {
                      var t,
                        n,
                        i,
                        o = this;
                      return v().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (this.initCssVar(),
                                  (e.t0 = this.state.isInClient),
                                  !e.t0)
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                return ((e.next = 5), (0, es.Xx)());
                              case 5:
                                e.t0 = !e.sent;
                              case 6:
                                if (!e.t0) {
                                  e.next = 8;
                                  break;
                                }
                                return e.abrupt("return");
                              case 8:
                                if (
                                  ((n = (t = this.props.stores).dataStore),
                                  (i = t.appStore),
                                  this.isSubscribeFeatureOn() &&
                                    this.initSubscribeFeature(),
                                  this.bindLikeIdleListeners(),
                                  (this._onVisibilityChange = function () {
                                    "visible" === document.visibilityState &&
                                      o.verifySubscribeOpen();
                                  }),
                                  document.addEventListener(
                                    "visibilitychange",
                                    this._onVisibilityChange,
                                  ),
                                  k.LightMobileCall.mobileCall(
                                    x.x8.changeStatusColor,
                                    {
                                      isFullScreen: 1,
                                      isHideTitleBar: 1,
                                      statusBarMode:
                                        n.skin === x.lu.BLACKV2 ||
                                        n.skin === x.lu.BLACK ||
                                        n.skin === x.lu.MAGAZINE
                                          ? 0
                                          : 1,
                                    },
                                  ),
                                  k.LightMobileCall.mobileCall(
                                    x.x8.showHideBar,
                                    {
                                      state:
                                        (null != i && i.isIOS) ||
                                        (null != i && i.isHarmony) ||
                                        (null == i ? void 0 : i.clientver) >=
                                          x.vK
                                          ? 1
                                          : 0,
                                    },
                                  ),
                                  !(n.dimension !== x.Sr.YEAR))
                                ) {
                                  e.next = 21;
                                  break;
                                }
                                return (
                                  console.time("sonicShouldRefresh"),
                                  (e.next = 19),
                                  (0, m.Z)({
                                    enable: this.props.sonic,
                                    serverTime: this.props.serverTime,
                                    acceptCacheTime: 0,
                                    onData: function (e) {
                                      var t, i, a, r, s;
                                      if (
                                        (console.timeEnd("sonicShouldRefresh"),
                                        !o.dataGot)
                                      ) {
                                        if (
                                          !(
                                            null != e &&
                                            null !== (t = e.state) &&
                                            void 0 !== t &&
                                            t.listenData
                                          ) ||
                                          !(
                                            null != e &&
                                            null !== (i = e.state) &&
                                            void 0 !== i &&
                                            i.songMemoryData
                                          )
                                        )
                                          return (
                                            console.log("onData"),
                                            o.init(!0)
                                          );
                                        (console.log(
                                          "onData2",
                                          n.statistics,
                                          n.songMemoryData,
                                        ),
                                          n.statistics ||
                                            n.setStatistics(e.state.listenData),
                                          n.songMemoryData ||
                                            n.setSongMemoryData(
                                              e.state.songMemoryData,
                                            ),
                                          null !== (a = e.state) &&
                                          void 0 !== a &&
                                          a.friendRankData
                                            ? o.setState({
                                                friendRankData:
                                                  e.state.friendRankData,
                                              })
                                            : o.fetchFriendRank(
                                                n.dimension,
                                                (null === (r = n.date) ||
                                                void 0 === r
                                                  ? void 0
                                                  : null === (s = r.format) ||
                                                      void 0 === s
                                                    ? void 0
                                                    : s.call(r, "YYYYMMDD")) ||
                                                  "",
                                              ),
                                          o.props.closeSkeleton());
                                      }
                                    },
                                    onRefresh: function (e) {
                                      var t, n, i;
                                      (console.log(
                                        "onRefresh",
                                        e,
                                        o.props.sonic,
                                        null === (t = o.props.state) ||
                                          void 0 === t
                                          ? void 0
                                          : t.listenData,
                                        null === (n = o.props) || void 0 === n
                                          ? void 0
                                          : null === (i = n.state) ||
                                              void 0 === i
                                            ? void 0
                                            : i.songMemoryData,
                                      ),
                                        o.init(
                                          !0,
                                          "timeout" === e || "mode2" === e,
                                        ));
                                    },
                                    onIgnore: function () {
                                      var e, t, n;
                                      (console.log(
                                        "onIgnore",
                                        o.props.sonic,
                                        null === (e = o.props.state) ||
                                          void 0 === e
                                          ? void 0
                                          : e.listenData,
                                        null === (t = o.props) || void 0 === t
                                          ? void 0
                                          : null === (n = t.state) ||
                                              void 0 === n
                                            ? void 0
                                            : n.songMemoryData,
                                      ),
                                        o.init());
                                    },
                                  })
                                );
                              case 19:
                                e.next = 22;
                                break;
                              case 21:
                                this.init();
                              case 22:
                                (this.props.mobileLog({
                                  a: 1131810,
                                  b: "曝光",
                                }),
                                  window.localStorage.getItem(
                                    "skinPopListenReportV3",
                                  )
                                    ? window.localStorage.getItem(
                                        "newSkinListenReportV3",
                                      ) ||
                                      n.skin === x.lu.MAGAZINE ||
                                      this.setState(
                                        {
                                          helpOpen: !0,
                                          helpText: "杂志风皮肤回归了",
                                        },
                                        function () {
                                          window.localStorage.setItem(
                                            "newSkinListenReportV3",
                                            !0,
                                          );
                                        },
                                      )
                                    : this.setState(
                                        { helpOpen: !0 },
                                        function () {
                                          window.localStorage.setItem(
                                            "skinPopListenReportV3",
                                            !0,
                                          );
                                        },
                                      ),
                                  k.LightMobileCall.KgWebMobileCall(
                                    "KgWebMobileCall.shareStatus",
                                    function (e) {
                                      try {
                                        var t, n;
                                        ((e =
                                          "string" == typeof e
                                            ? JSON.parse(e)
                                            : e),
                                          console.log(
                                            "KgWebMobileCall.shareStatus",
                                            e,
                                          ),
                                          1 ===
                                            Number(
                                              null === (t = e) || void 0 === t
                                                ? void 0
                                                : t.status,
                                            ) &&
                                            o.props.mobileLog({
                                              a: 1131818,
                                              b: "点击",
                                              svar1: "唱片墙",
                                              svar2: "唱片墙",
                                              svar3:
                                                null === (n = e) || void 0 === n
                                                  ? void 0
                                                  : n.plat,
                                            }));
                                      } catch (e) {
                                        console.log("分享渠道err", e);
                                      }
                                      (0, k.getGlobalEvent)().emit(
                                        "shareStatus",
                                        e,
                                      );
                                    },
                                  ),
                                  k.LightMobileCall.KgWebMobileCall(
                                    "KgWebMobileCall.appStatus",
                                    function (e) {
                                      try {
                                        var t, n;
                                        ((e =
                                          "string" == typeof e
                                            ? JSON.parse(e)
                                            : e),
                                          console.log(
                                            "KgWebMobileCall.appStatus",
                                            e,
                                          ),
                                          null !== (t = e) &&
                                            void 0 !== t &&
                                            t.status &&
                                            (e.status = +(null === (n = e) ||
                                            void 0 === n
                                              ? void 0
                                              : n.status)));
                                      } catch (e) {}
                                      (0, k.getGlobalEvent)().emit(
                                        "appStatus",
                                        e,
                                      );
                                    },
                                  ),
                                  k.LightMobileCall.mobileCall(
                                    x.x8.getListenDuration,
                                    { needRefresh: 1 },
                                    function (e) {
                                      (null == e ? void 0 : e.status) === 1 &&
                                        (console.log(
                                          "getListenDuration",
                                          null == e ? void 0 : e.local_second,
                                        ),
                                        n.setListenDuration(
                                          Math.floor(
                                            (null == e
                                              ? void 0
                                              : e.local_second) / 3600,
                                          ) || 0,
                                        ));
                                    },
                                  ),
                                  k.LightMobileCall.KgWebMobileCall(
                                    "KgWebMobileCall.onListeningDurationUpdate",
                                    function (e) {
                                      var t, i, a;
                                      e &&
                                        (console.log(
                                          "onListeningDurationUpdate_res",
                                          null ===
                                            (t = e =
                                              "string" == typeof e
                                                ? JSON.parse(e)
                                                : e) || void 0 === t
                                            ? void 0
                                            : t.local_second,
                                        ),
                                        (null === (i = e) || void 0 === i
                                          ? void 0
                                          : i.status) === 1 &&
                                          n.setListenDuration(
                                            Math.floor(
                                              (null === (a = e) || void 0 === a
                                                ? void 0
                                                : a.local_second) / 3600,
                                            ) || 0,
                                          ));
                                    },
                                  ),
                                  k.LightMobileCall.KgWebMobileCall(
                                    "KgWebMobileCall.pageStatusNew",
                                    (function () {
                                      var e = (0, a.Z)(
                                        v().mark(function e(t) {
                                          return v().wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  if (t) {
                                                    e.next = 2;
                                                    break;
                                                  }
                                                  return e.abrupt("return");
                                                case 2:
                                                  if (
                                                    ((t =
                                                      "string" == typeof t
                                                        ? JSON.parse(t)
                                                        : t),
                                                    (0,
                                                    k.getGlobalEvent)().emit(
                                                      "pageStatusNew",
                                                      t,
                                                    ),
                                                    3 != +t.status)
                                                  ) {
                                                    e.next = 15;
                                                    break;
                                                  }
                                                  if (
                                                    (o.verifySubscribeOpen(),
                                                    !window.DSDialogOpened)
                                                  ) {
                                                    e.next = 11;
                                                    break;
                                                  }
                                                  return (
                                                    console.warn(
                                                      "pageStatusNew DSDialogClose",
                                                    ),
                                                    (window.DSDialogOpened =
                                                      !1),
                                                    e.abrupt("return")
                                                  );
                                                case 11:
                                                  ((o.secondRefresh.current = 1),
                                                    (window._dontGetAISongData =
                                                      !0),
                                                    o.refreshData(),
                                                    o.refreshFriendRank());
                                                case 15:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        }),
                                      );
                                      return function (t) {
                                        return e.apply(this, arguments);
                                      };
                                    })(),
                                  ),
                                  (0, k.getGlobalEvent)().on(
                                    "DSStatusChange",
                                    function (e) {
                                      (console.warn(
                                        "DSStatusChange",
                                        null == e ? void 0 : e.status,
                                      ),
                                        1 != +(null == e ? void 0 : e.status) &&
                                          ((o.secondRefresh.current = 1),
                                          o.refreshData(!0)));
                                    },
                                  ));
                              case 30:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  )),
                  function () {
                    return p.apply(this, arguments);
                  }),
              },
              {
                key: "init",
                value:
                  ((h = (0, a.Z)(
                    v().mark(function e() {
                      var t,
                        n,
                        i,
                        a,
                        o,
                        r,
                        s,
                        l,
                        c,
                        u,
                        d,
                        p,
                        h,
                        f,
                        m,
                        _,
                        y,
                        S,
                        j,
                        D,
                        Z,
                        C,
                        w,
                        M,
                        T,
                        N,
                        L = this,
                        A = arguments;
                      return v().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((i =
                                    A.length > 0 && void 0 !== A[0] && A[0]),
                                  (a = A.length > 1 && void 0 !== A[1] && A[1]),
                                  (r = (o = this.props.stores).dataStore),
                                  (s = o.appStore),
                                  (l =
                                    !i &&
                                    !!(
                                      null !== (t = this.props.state) &&
                                      void 0 !== t &&
                                      t.listenData
                                    )),
                                  (c =
                                    !i &&
                                    !!(
                                      null !== (n = this.props.state) &&
                                      void 0 !== n &&
                                      n.songMemoryData
                                    )),
                                  r.dimension === x.Sr.YEAR &&
                                    (u = k.KgToast.loading({
                                      content: "加载中",
                                      duration: 0,
                                      mask: !0,
                                    })),
                                  (d = function () {
                                    (k.LightMobileCall.mobileCall(
                                      x.x8.kgLoading,
                                    ),
                                      L.setState({ ready: !0 }),
                                      L.props.closeSkeleton(),
                                      u && u.remove(),
                                      console.log("load finish"));
                                  }),
                                  r.dimension !== x.Sr.YEAR)
                                ) {
                                  e.next = 12;
                                  break;
                                }
                                return ((e.next = 10), this.refreshData());
                              case 10:
                                e.next = 42;
                                break;
                              case 12:
                                if (
                                  ((_ =
                                    null === (p = this.props.state) ||
                                    void 0 === p
                                      ? void 0
                                      : p.listenData),
                                  (y =
                                    null === (h = this.props.state) ||
                                    void 0 === h
                                      ? void 0
                                      : h.songMemoryData),
                                  (S =
                                    r.dimension !== x.Sr.YEAR
                                      ? this.state.friendRankData
                                        ? Promise.resolve()
                                        : this.fetchFriendRank(
                                            r.dimension,
                                            (null === (j = r.date) ||
                                            void 0 === j
                                              ? void 0
                                              : null === (D = j.format) ||
                                                  void 0 === D
                                                ? void 0
                                                : D.call(j, "YYYYMMDD")) || "",
                                          )
                                      : Promise.resolve()),
                                  l)
                                ) {
                                  e.next = 36;
                                  break;
                                }
                                return (
                                  (M = {
                                    date_type:
                                      (0, g.re)("dimension") || r.dimension,
                                    is_real_time:
                                      0 == (w = +((0, g.re)("date") || 0)),
                                    date: w,
                                    is_entrance: !1,
                                  }),
                                  (e.next = 21),
                                  (0, b.CJ)(M, null, {
                                    useMobileCall:
                                      (null == s ? void 0 : s.isInClient) ||
                                      (null === k.LightMobileCall ||
                                      void 0 === k.LightMobileCall
                                        ? void 0
                                        : k.LightMobileCall.isInClient()),
                                    useCache: !0,
                                  })
                                );
                              case 21:
                                if (
                                  (null == (T = e.sent)
                                    ? void 0
                                    : null === (Z = T.data) || void 0 === Z
                                      ? void 0
                                      : Z.status) !== 1
                                ) {
                                  e.next = 26;
                                  break;
                                }
                                ((_ =
                                  (null == T
                                    ? void 0
                                    : null === (N = T.data) || void 0 === N
                                      ? void 0
                                      : N.data) || {}),
                                  (e.next = 36));
                                break;
                              case 26:
                                if (
                                  (null == T
                                    ? void 0
                                    : null === (C = T.data) || void 0 === C
                                      ? void 0
                                      : C.errcode) !== 3e4
                                ) {
                                  e.next = 31;
                                  break;
                                }
                                ((_ = null),
                                  this.setState({ error: 1 }),
                                  (e.next = 36));
                                break;
                              case 31:
                                if ((console.error("init error: ", a, T), !a)) {
                                  e.next = 35;
                                  break;
                                }
                                return (d(), e.abrupt("return"));
                              case 35:
                                this.setState({ error: 2 });
                              case 36:
                                return ((e.next = 38), S);
                              case 38:
                                (setTimeout(function () {
                                  try {
                                    var e,
                                      t =
                                        null === (e = _) || void 0 === e
                                          ? void 0
                                          : e.server_time,
                                      n = parseInt(Date.now() / 1e3),
                                      i = Math.abs(n - t),
                                      a =
                                        new Date(1e3 * n).toDateString() !==
                                          new Date(1e3 * t).toDateString() &&
                                        i > 300,
                                      o = 0.1 > Math.random();
                                    (i > 3600 || a) &&
                                      o &&
                                      (console.log("上报apm"),
                                      (0, g.NH)({
                                        typeid: 112698,
                                        para: "listen-report",
                                        para1: "/v1/listen_statistics",
                                      }));
                                  } catch (e) {
                                    console.log("上报apm_err", e);
                                  }
                                }, 0),
                                  r.setStatistics(_),
                                  !r.listen_duration &&
                                    null !== (f = _) &&
                                    void 0 !== f &&
                                    null !== (m = f.grade_info) &&
                                    void 0 !== m &&
                                    m.duration &&
                                    r.setListenDuration(
                                      Math.floor(_.grade_info.duration / 60) ||
                                        0,
                                    ),
                                  c
                                    ? r.setSongMemoryData(y)
                                    : this.getSongMemory({
                                        date_type:
                                          (0, g.re)("dimension") || r.dimension,
                                        date:
                                          (0, g.re)("date") ||
                                          eQ()(r.date).format("YYYYMMDD"),
                                      }));
                              case 42:
                                d();
                              case 43:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  )),
                  function () {
                    return h.apply(this, arguments);
                  }),
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  (0, eA.G)(this);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.stores.dataStore,
                    t = this.state,
                    n = t.tabDisabled,
                    i = t.error,
                    a = t.isInClient,
                    o = t.ready,
                    r = t.helpOpen,
                    s = t.helpText,
                    l = t.subscribePopupVisible,
                    c = e.skin;
                  if (!a && !this.debug) {
                    var u = "",
                      d = (0, g.re)() || {},
                      p = [];
                    try {
                      ((d.ssr_header_param = d.ssr_header_param || x.Dc),
                        (d.ssr_url_param = d.ssr_url_param || x.By),
                        Object.keys(d).map(function (e) {
                          d[e] &&
                            "isHideTitleBar" !== e &&
                            p.push("".concat(e, "=").concat(d[e]));
                        }));
                    } catch (e) {}
                    return (
                      (u =
                        "https://m.kugou.com/ssr/listen-report/home?isHideTitleBar=1&".concat(
                          p.join("&"),
                        )),
                      (0, L.jsx)(eT.Z, { url: u })
                    );
                  }
                  var v = eX(
                    eX(
                      {
                        getData: this.getData,
                        error: i,
                        tabDisabled: n,
                        ready: o,
                      },
                      this.props,
                    ),
                    {},
                    {
                      helpOpen: r,
                      helpText: s,
                      closeHelp: this.closeHelp,
                      friendRankData: this.state.friendRankData,
                      onLike: this.handleLike,
                    },
                  );
                  return (0, L.jsxs)("main", {
                    children: [
                      c === x.lu.NORMAL && (0, L.jsx)(ed, eX({}, v)),
                      c === x.lu.BLACK && (0, L.jsx)(ep, eX({}, v)),
                      c === x.lu.NORMALV2 && (0, L.jsx)(ew, eX({}, v)),
                      c === x.lu.BLACKV2 && (0, L.jsx)(eM, eX({}, v)),
                      c === x.lu.MAGAZINE && (0, L.jsx)(ez, eX({}, v)),
                      (0, L.jsx)(eN.Z, {
                        visible: l,
                        onLater: this.handleSubscribeLater,
                        onOpen: this.handleSubscribeOpen,
                      }),
                    ],
                  });
                },
              },
            ]),
            S
          );
        })(h.Component),
        e0 = (0, _.Pi)(e$);
    },
    57434: function (e) {
      e.exports = {
        DateTabWrap: "DateTab_DateTabWrap__vJlES",
        black: "DateTab_black__3w3ZD",
        DateTabType: "DateTab_DateTabType__9Sbcr",
        blackV2: "DateTab_blackV2__ZKYq7",
        center: "DateTab_center__Vmycn",
        magazine: "DateTab_magazine__n7XdR",
        tab: "DateTab_tab__Z_Du8",
        active: "DateTab_active__P0pMX",
        slide: "DateTab_slide__5rdmX",
        pos1: "DateTab_pos1__0edvm",
        pos2: "DateTab_pos2__l4zhh",
        pos3: "DateTab_pos3__P86p_",
        DateTabRange: "DateTab_DateTabRange__6Hpq4",
        leftWrap: "DateTab_leftWrap__4a_qm",
        leftPic: "DateTab_leftPic__fn5Pu",
        disabled: "DateTab_disabled__bsWK8",
        rightWrap: "DateTab_rightWrap__7Hyip",
        rightPic: "DateTab_rightPic___On_h",
      };
    },
    62180: function (e) {
      e.exports = {
        PopupWrap: "HelpPopup_PopupWrap__FEhXE",
        circle: "HelpPopup_circle__Q7v1w",
        pop: "HelpPopup_pop__Mj9Wq",
        btn: "HelpPopup_btn__kC5u6",
      };
    },
    34981: function (e) {
      e.exports = {
        skinWrap: "SetSkinPopup_skinWrap__KiK2E",
        skinContent: "SetSkinPopup_skinContent__kQ0oM",
        skinTitle: "SetSkinPopup_skinTitle__v7pfO",
        skins: "SetSkinPopup_skins__EXDX6",
        item: "SetSkinPopup_item__YooAZ",
        skin: "SetSkinPopup_skin__PlEty",
        label: "SetSkinPopup_label__m9KbP",
        active: "SetSkinPopup_active__GdZj1",
        skinBtn: "SetSkinPopup_skinBtn__blz5z",
        closeBtn: "SetSkinPopup_closeBtn__MSzWj",
      };
    },
    39566: function (e) {
      e.exports = {
        wrap: "Magazine_wrap__B3ivf",
        lock: "Magazine_lock__CVbmC",
        content: "Magazine_content__TNU3M",
        holder: "Magazine_holder__bIv2l",
        topBg: "Magazine_topBg___1_Kn",
        dateTabWrap: "Magazine_dateTabWrap__S4Zw0",
        titleDateTabWrap: "Magazine_titleDateTabWrap__wDevq",
        titleDateTabInit: "Magazine_titleDateTabInit__aU46Z",
        show: "Magazine_show__oFJt8",
        titleName: "Magazine_titleName__AkwS_",
        bottomTip: "Magazine_bottomTip__O0nrh",
        yearContainer: "Magazine_yearContainer__h0xg6",
        card: "Magazine_card__bB7I8",
        inner: "Magazine_inner__On4d5",
        title: "Magazine_title__C0LZs",
        share: "Magazine_share__6P4ed",
        cardBody: "Magazine_cardBody__UIZ88",
        arrowIcon: "Magazine_arrowIcon__7oI0d",
      };
    },
    74722: function (e) {
      e.exports = {
        wrap: "Normal_wrap__VStJS",
        lock: "Normal_lock__rLwUR",
        bg: "Normal_bg__7ylgz",
        holder: "Normal_holder__XTxD1",
        container: "Normal_container__ibAks",
        bottomTip: "Normal_bottomTip__NbNB1",
        black: "Normal_black__quov2",
      };
    },
    46802: function (e) {
      e.exports = {
        wrap: "NormalV2_wrap__vjhqE",
        lock: "NormalV2_lock__o3upZ",
        bg: "NormalV2_bg__DXh_N",
        black: "NormalV2_black__V6SNE",
        bottomTip: "NormalV2_bottomTip__IP1ky",
        holder: "NormalV2_holder__PJ38g",
        container: "NormalV2_container__Kr9zY",
        dateTabWrap: "NormalV2_dateTabWrap__KWD_G",
        titleDateTabWrap: "NormalV2_titleDateTabWrap__OVSA6",
        titleDateTabInit: "NormalV2_titleDateTabInit__tQU0U",
        show: "NormalV2_show__WIbl8",
        titleName: "NormalV2_titleName__Cn6ly",
      };
    },
    56429: function (e) {
      e.exports = {
        wrap: "TopInfo_wrap__oT3bi",
        userInfo: "TopInfo_userInfo__Kd1kW",
        avatarWrap: "TopInfo_avatarWrap__kyEv5",
        avatar: "TopInfo_avatar__3NS1U",
        middle: "TopInfo_middle__K0YLG",
        userName: "TopInfo_userName__CCPVp",
        listenDur: "TopInfo_listenDur__WdDxW",
        right: "TopInfo_right__liu53",
        bigTitleLabel: "TopInfo_bigTitleLabel__aWpdX",
        bigTitle: "TopInfo_bigTitle___h0uP",
        magazine: "TopInfo_magazine__YtYzc",
      };
    },
    46440: function (e) {
      e.exports = {
        PopupWrap: "TipsPopup_PopupWrap__15cGy",
        TipsPopup: "TipsPopup_TipsPopup__0CqWu",
        title: "TipsPopup_title__Ng3SU",
        content: "TipsPopup_content___ey05",
        txt: "TipsPopup_txt__3OwIW",
        subTitle: "TipsPopup_subTitle__AKp0I",
        subContent: "TipsPopup_subContent__uVmLs",
        note: "TipsPopup_note__mJ4hr",
        cancel: "TipsPopup_cancel__QIpmj",
      };
    },
    41691: function (e) {
      e.exports = {
        title: "TitleWrap_title__r6Y3t",
        black: "TitleWrap_black__QIQaC",
        titleBar: "TitleWrap_titleBar__y2EJP",
        blackV2: "TitleWrap_blackV2__ZULTg",
        magazine: "TitleWrap_magazine__BbQKe",
        bg: "TitleWrap_bg__l9ceZ",
        statusBar: "TitleWrap_statusBar__3dFw5",
        left: "TitleWrap_left__m6hv5",
        icon: "TitleWrap_icon__CurWA",
        titleName: "TitleWrap_titleName__C3_3s",
        mainTitle: "TitleWrap_mainTitle__yZxKS",
        right: "TitleWrap_right__aS8Rq",
        forbit: "TitleWrap_forbit__Am2un",
        moreBtn: "TitleWrap_moreBtn__hVDIs",
        moreListBg: "TitleWrap_moreListBg__DH_vl",
        moreList: "TitleWrap_moreList__W0EBC",
        listItem: "TitleWrap_listItem__WZgAc",
      };
    },
    44675: function (e) {
      e.exports = {
        wrap: "TopInfo_wrap__XSNa5",
        share: "TopInfo_share__fCuOU",
        avatar: "TopInfo_avatar__DngdH",
        userName: "TopInfo_userName__EtsGV",
        count: "TopInfo_count___SpVU",
        title: "TopInfo_title__ZfJq3",
        black: "TopInfo_black__Mo_dX",
        magazine: "TopInfo_magazine__1BSr7",
        vip: "TopInfo_vip__uNy66",
        userInfo: "TopInfo_userInfo__S2vGB",
        middle: "TopInfo_middle__7QmWE",
        vip_box: "TopInfo_vip_box__eG6hf",
        right: "TopInfo_right__t8EnU",
      };
    },
  },
]);
