(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9465],
  {
    55616: function (t, n, e) {
      "use strict";
      var o = e(13298),
        i = e(77813),
        r = e(52599),
        a = e(25821),
        l = e(55136),
        s = e(55578),
        u = e(76792),
        d = e(37667),
        c = e(87235),
        v = e(90418),
        p = e.n(v),
        _ = e(93967),
        g = e.n(_),
        f = e(25965);
      function m(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          (n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            e.push.apply(e, o));
        }
        return e;
      }
      function y(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? m(Object(e), !0).forEach(function (n) {
                (0, u.Z)(t, n, e[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
              : m(Object(e)).forEach(function (n) {
                  Object.defineProperty(
                    t,
                    n,
                    Object.getOwnPropertyDescriptor(e, n),
                  );
                });
        }
        return t;
      }
      var h = (function (t) {
        (0, a.Z)(d, t);
        var n,
          e =
            ((n = (function () {
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
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = (0, s.Z)(d);
              if (n) {
                var o = (0, s.Z)(this).constructor;
                t = Reflect.construct(e, arguments, o);
              } else t = e.apply(this, arguments);
              return (0, l.Z)(this, t);
            });
        function d(t) {
          var n;
          return (
            (0, o.Z)(this, d),
            (n = e.call(this, t)),
            (0, u.Z)((0, r.Z)(n), "time", 50),
            (0, u.Z)((0, r.Z)(n), "onClose", function () {
              var t = n.props,
                e = t.remove,
                o = t.onClose;
              (n.setState({ isClose: !0 }), o && o());
              var i = setTimeout(function () {
                (clearTimeout(i), e && e());
              }, n.time);
            }),
            (0, u.Z)((0, r.Z)(n), "onClickMask", function () {
              n.props.closeOnMaskClick && n.onClose();
            }),
            (n.state = { isClose: !1 }),
            n
          );
        }
        return (
          (0, i.Z)(d, [
            {
              key: "componentDidMount",
              value: function () {
                this.props.bindClose &&
                  this.props.bindClose(this.onClose.bind(this));
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  n = t.contentStyle,
                  e = t.maskClassName,
                  o = this.state.isClose;
                return (0, f.jsxs)("div", {
                  className: p().wrap,
                  children: [
                    (0, f.jsx)("div", {
                      className: ""
                        .concat(p().mask, " ")
                        .concat(o ? p().mask_out : "", " ")
                        .concat(e || ""),
                      onClick: this.onClickMask,
                    }),
                    this.props.noContent
                      ? this.props.children
                      : (0, f.jsx)("div", {
                          className: ""
                            .concat(p().content, " ")
                            .concat(o ? p().content_out : ""),
                          style: n,
                          children: this.props.children,
                        }),
                  ],
                });
              },
            },
          ]),
          d
        );
      })(d.Component);
      ((h.defaultProps = {
        contentStyle: null,
        closeOnMaskClick: !0,
        remove: function () {},
      }),
        (n.Z = (function () {
          function t(t, n) {
            n &&
              ((document.body.style.overflow = "auto"),
              n.unmount(),
              document.body.removeChild(t));
          }
          return {
            show: function (n) {
              document.body.style.overflow = "hidden";
              var e,
                o = document.createElement("div");
              document.body.appendChild(o);
              var i = (0, c.createRoot)(o);
              return (
                i.render(
                  (0, f.jsx)(
                    h,
                    y(
                      y({}, n),
                      {},
                      {
                        remove: function () {
                          return t(o, i);
                        },
                        bindClose: function (t) {
                          return (e = t);
                        },
                      },
                    ),
                  ),
                ),
                {
                  close: function () {
                    e && e();
                  },
                }
              );
            },
            confirm: function (n) {
              var e,
                o = n.title,
                i = n.content,
                r = n.confirmText,
                a = void 0 === r ? "确定" : r,
                l = n.cancelText,
                s = void 0 === l ? "取消" : l,
                u = n.confirmBtnStyle,
                d = void 0 === u ? {} : u,
                v = n.cancelBtnStyle,
                _ = void 0 === v ? {} : v,
                m = n.onConfirm,
                A = void 0 === m ? function () {} : m,
                b = n.onCancel,
                k = void 0 === b ? function () {} : b;
              (n.isDark, (document.body.style.overflow = "hidden"));
              var x = document.createElement("div");
              document.body.appendChild(x);
              var C = function () {
                  (k(), t(x, S));
                },
                E = function () {
                  (A(), t(x, S));
                },
                S = (0, c.createRoot)(x),
                O =
                  (null == a ? void 0 : a.length) > 0 &&
                  (null == s ? void 0 : s.length) > 0;
              return (
                S.render(
                  (0, f.jsx)(
                    h,
                    y(
                      y({}, n),
                      {},
                      {
                        noContent: !0,
                        remove: function () {
                          return t(x, S);
                        },
                        bindClose: function (t) {
                          return (e = t);
                        },
                        children: (0, f.jsxs)("div", {
                          className: g()(p().dialogWrap),
                          children: [
                            (0, f.jsxs)("div", {
                              className: p().dialogBody,
                              children: [
                                (null == o ? void 0 : o.length) > 0 &&
                                  (0, f.jsx)("div", {
                                    className: p().dialogTitle,
                                    children: o,
                                  }),
                                (0, f.jsx)("div", {
                                  className: p().dialogContent,
                                  children: i,
                                }),
                              ],
                            }),
                            (0, f.jsx)("div", {
                              className: g()(
                                p().dialogFooter,
                                O && p().dialogFooter2Btns,
                              ),
                              children: O
                                ? (0, f.jsxs)(f.Fragment, {
                                    children: [
                                      (0, f.jsx)("div", {
                                        className: p().dialogBtnCancel,
                                        onClick: C,
                                        style: _,
                                        children: s,
                                      }),
                                      (0, f.jsx)("div", {
                                        className: p().dialogBtnConfirm,
                                        onClick: E,
                                        style: d,
                                        children: a,
                                      }),
                                    ],
                                  })
                                : (0, f.jsxs)(f.Fragment, {
                                    children: [
                                      (null == s ? void 0 : s.length) &&
                                        (0, f.jsx)("div", {
                                          className: p().dialogBtnCancel,
                                          onClick: C,
                                          style: _,
                                          children: s,
                                        }),
                                      (null == a ? void 0 : a.length) &&
                                        (0, f.jsx)("div", {
                                          className: p().dialogBtnConfirm,
                                          onClick: E,
                                          style: d,
                                          children: a,
                                        }),
                                    ],
                                  }),
                            }),
                          ],
                        }),
                      },
                    ),
                  ),
                ),
                {
                  close: function () {
                    e && e();
                  },
                }
              );
            },
          };
        })()));
    },
    55500: function (t, n, e) {
      "use strict";
      var o = e(22239),
        i = e(37667);
      n.Z = function (t) {
        var n = (0, i.useState)(!1),
          e = n[0],
          r = n[1];
        return ((0, i.useEffect)(function () {
          r(!0);
        }, []),
        e)
          ? (0, o.hC)(t)
          : "";
      };
    },
    15337: function (t, n, e) {
      "use strict";
      e.d(n, {
        Z: function () {
          return p;
        },
      });
      var o = e(75723),
        i = e(17468),
        r = e(82628),
        a = e.n(r),
        l = e(37667),
        s = e(42240),
        u = e(93239),
        d = e(22239),
        c = e(11284),
        v = function (t, n) {
          (n &&
            t.appStore.setServerTimeOffset(n - Math.floor(Date.now() / 1e3)),
            t.dataStore.initDateRanges(t.appStore.getServerTimeDayjs()));
        };
      function p(t) {
        var n,
          e,
          r = t.stores,
          p = t.rankType,
          _ = void 0 === p ? 0 : p,
          g = t.limit,
          f = void 0 === g ? 3 : g,
          m = t.directPush,
          y = void 0 !== m && m,
          h = t.initialData,
          A = r.dataStore,
          b = r.appStore,
          k = _ === u.Jd.SINGER || _ === u.Jd.SINGER_VEHICLE,
          x = k ? "rank_singer" : "rank_song",
          C = b.hasSyncServerTime,
          E = {
            songRankArrFix: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return t.map(function (t) {
                var n, e, o, i;
                return t.id
                  ? t
                  : {
                      id:
                        (null == t
                          ? void 0
                          : null === (n = t.song_info) || void 0 === n
                            ? void 0
                            : n.mixsongid) || t.mixsongid,
                      cover: (0, d.Yp)(
                        (null == t
                          ? void 0
                          : null === (e = t.song_info) || void 0 === e
                            ? void 0
                            : e.cover) ||
                          t.pic ||
                          t.cover,
                        150,
                      ),
                      title:
                        (null == t
                          ? void 0
                          : null === (o = t.song_info) || void 0 === o
                            ? void 0
                            : o.name) ||
                        t.songname ||
                        t.name,
                      author:
                        (null == t
                          ? void 0
                          : null === (i = t.song_info) || void 0 === i
                            ? void 0
                            : i.singer_name) ||
                        t.author_name ||
                        t.singer_name,
                      value: t.count || t.play_cnt || 1,
                    };
              });
            },
            singerRankArrFix: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return t.map(function (t) {
                var n, e, o;
                return t.id
                  ? t
                  : {
                      id:
                        null == t
                          ? void 0
                          : null === (n = t.singer_info) || void 0 === n
                            ? void 0
                            : n.singer_id,
                      cover: (0, d.I$)(
                        (null == t
                          ? void 0
                          : null === (e = t.singer_info) || void 0 === e
                            ? void 0
                            : e.avatar) || (null == t ? void 0 : t.avatar),
                        150,
                      ),
                      title:
                        (null == t
                          ? void 0
                          : null === (o = t.singer_info) || void 0 === o
                            ? void 0
                            : o.name) || (null == t ? void 0 : t.name),
                      value: t.total || 1,
                    };
              });
            },
          },
          S = E.singerRankArrFix,
          O = E.songRankArrFix,
          P = function (t) {
            return k ? S(t) : O(t);
          },
          j = A.dimension,
          R = A.date,
          w = (0, l.useState)(0),
          B = w[0],
          D = w[1],
          Z = (0, l.useState)(null != h && h[x] ? P(h[x]) : []),
          N = Z[0],
          I = Z[1],
          M = (0, l.useRef)([]),
          G = (0, l.useRef)(null),
          T = (0, l.useState)(""),
          U = T[0],
          F = T[1],
          Y = (0, l.useState)(""),
          Q = Y[0],
          L = Y[1],
          V = (0, l.useState)(0),
          K = V[0],
          J = V[1],
          W = (0, l.useMemo)(
            function () {
              return (null == N ? void 0 : N.length) < 100 && !!~B;
            },
            [B, N],
          );
        (0, l.useEffect)(function () {
          h || j === u.Sr.YEAR ? L(R) : z(!1, j, R);
        }, []);
        var z =
            ((n = (0, i.Z)(
              a().mark(function t() {
                var n,
                  e,
                  i,
                  l,
                  p,
                  g,
                  m,
                  h,
                  A,
                  b,
                  k,
                  E = arguments;
                return a().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((e = !(E.length > 0) || void 0 === E[0] || E[0]),
                            (i = E.length > 1 ? E[1] : void 0),
                            (l = E.length > 2 ? E[2] : void 0),
                            !(
                              !(p = E.length > 3 && void 0 !== E[3] && E[3]) &&
                              !W
                            ))
                          ) {
                            t.next = 6;
                            break;
                          }
                          return t.abrupt("return");
                        case 6:
                          if (!(
                            !p &&
                            null !== (n = M.current) &&
                            void 0 !== n &&
                            n.length
                          )) {
                            t.next = 12;
                            break;
                          }
                          return (
                            I([].concat((0, o.Z)(N), (0, o.Z)(P(M.current)))),
                            D(G.current || -1),
                            (M.current = []),
                            (G.current = null),
                            t.abrupt("return")
                          );
                        case 12:
                          return (
                            e &&
                              (g = c.KgToast.loading({
                                content: "加载中",
                                duration: 0,
                                mask: !0,
                              })),
                            (m = p ? 0 : B),
                            L(l || R),
                            J(void 0 !== i ? i : j),
                            (t.prev = 16),
                            (t.next = 19),
                            (0, s.Zr)({
                              limit: y ? f : 2 * f,
                              cursor: m,
                              rank_type:
                                +_ === u.Jd.SONG_VEHICLE
                                  ? u.Jd.SONG
                                  : +_ === u.Jd.SINGER_VEHICLE
                                    ? u.Jd.SINGER
                                    : _,
                              date: (l || R).format("YYYYMMDD"),
                              date_type: void 0 !== i ? i : j,
                              source_type:
                                +_ === u.Jd.SONG_VEHICLE ||
                                +_ === u.Jd.SINGER_VEHICLE
                                  ? 1
                                  : 0,
                            })
                          );
                        case 19:
                          return (
                            (A = t.sent),
                            g && g.remove(),
                            (b =
                              null == A
                                ? void 0
                                : null === (h = A.data) || void 0 === h
                                  ? void 0
                                  : h.data),
                            C || v(r, null == b ? void 0 : b.server_time),
                            null != (k = null == b ? void 0 : b[x]) && k.length
                              ? p || !(null != N && N.length) || y
                                ? (I(P(k)),
                                  D((null == b ? void 0 : b.next_cursor) || -1))
                                : k.length <= f
                                  ? (I([].concat((0, o.Z)(N), (0, o.Z)(P(k)))),
                                    D(-1))
                                  : (I(
                                      [].concat(
                                        (0, o.Z)(N),
                                        (0, o.Z)(P(k.slice(0, f))),
                                      ),
                                    ),
                                    (M.current = k.slice(f)),
                                    (G.current =
                                      void 0 !==
                                      (null == b ? void 0 : b.next_cursor)
                                        ? A.data.next_cursor
                                        : -1))
                              : (0 === m && I([]), D(-1)),
                            t.abrupt("return", !0)
                          );
                        case 28:
                          if (
                            ((t.prev = 28),
                            (t.t0 = t.catch(16)),
                            console.error(t.t0),
                            g && g.remove(),
                            !(3e4 === t.t0.code || 3e4 === t.t0.name))
                          ) {
                            t.next = 36;
                            break;
                          }
                          return (I([]), D(-1), t.abrupt("return", !0));
                        case 36:
                          return (
                            (0, d.FN)("加载失败"),
                            t.abrupt("return", !1)
                          );
                        case 38:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[16, 28]],
                );
              }),
            )),
            function () {
              return n.apply(this, arguments);
            }),
          H =
            ((e = (0, i.Z)(
              a().mark(function t() {
                var n, e, o, i, r, l;
                return a().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (0 !== N.length) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return");
                        case 2:
                          ((n = ""),
                            (t.t0 = K),
                            (t.next = 1 === t.t0 ? 6 : 2 === t.t0 ? 8 : 10));
                          break;
                        case 6:
                          return (
                            (n =
                              Q.format("MM月DD日") +
                              "-" +
                              Q.add(6, "days").format("MM月DD日")),
                            t.abrupt("break", 12)
                          );
                        case 8:
                          return (
                            (n = Q.format("YYYY年MM月")),
                            t.abrupt("break", 12)
                          );
                        case 10:
                          return (
                            (n = Q.format("MM月DD日")),
                            t.abrupt("break", 12)
                          );
                        case 12:
                          for (
                            i = 0,
                              e = { rank_type: _, share_data: { time: n } },
                              o = [];
                            i < N.length;
                            i++
                          )
                            o.push(N[i].id);
                          return (
                            k
                              ? (e.share_data.singer_id_list = o)
                              : (e.share_data.mixsongid_list = o),
                            (t.prev = 16),
                            (t.next = 19),
                            (0, s.Gg)(e)
                          );
                        case 19:
                          if (!((r = t.sent) && r.data.data)) {
                            t.next = 23;
                            break;
                          }
                          return (
                            F(r.data.data.share_id || ""),
                            t.abrupt(
                              "return",
                              (null === (l = r.data.data) || void 0 === l
                                ? void 0
                                : l.share_id) || "",
                            )
                          );
                        case 23:
                          return t.abrupt("return", !0);
                        case 26:
                          if (
                            ((t.prev = 26),
                            (t.t1 = t.catch(16)),
                            console.error(t.t1),
                            !(3e4 === t.t1.code || 3e4 === t.t1.name))
                          ) {
                            t.next = 31;
                            break;
                          }
                          return t.abrupt("return", !0);
                        case 31:
                          return (
                            (0, d.FN)("加载失败"),
                            t.abrupt("return", !1)
                          );
                        case 33:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[16, 26]],
                );
              }),
            )),
            function () {
              return e.apply(this, arguments);
            });
        return (
          (0, l.useEffect)(
            function () {
              F("");
            },
            [R],
          ),
          {
            getRankData: z,
            syncTimeAndInitRanges: v,
            fixArr: P,
            list: N.slice(0, 100),
            hasNext: W,
            createShareKey: H,
            shareKey: U,
          }
        );
      }
    },
    68918: function (t, n) {
      "use strict";
      n.Z = function (t) {
        var n = t.dataStore.yearStatistics;
        return {
          formatYearData: function (t, e) {
            if (!t || (!e && !n)) return null;
            var o,
              i,
              r,
              a,
              l,
              s,
              u,
              d,
              c,
              v,
              p,
              _,
              g,
              f,
              m,
              y,
              h,
              A,
              b,
              k,
              x,
              C,
              E,
              S,
              O,
              P,
              j = {
                total_duration: 0,
                total_days: 0,
                total_songs: 0,
                rank_song: [],
                rank_singer: [],
                rank_style: [],
              },
              R =
                t >= 2022
                  ? null === (o = e || n) || void 0 === o
                    ? void 0
                    : o.year_data
                  : e || n;
            if (
              !(t >= 2025
                ? null == R
                  ? void 0
                  : null === (i = R.play_all) || void 0 === i
                    ? void 0
                    : i.total_play_duration
                : t >= 2024
                  ? null == R
                    ? void 0
                    : null === (r = R.year_all) || void 0 === r
                      ? void 0
                      : r.play_min
                  : t >= 2022
                    ? null === (a = e || n) || void 0 === a
                      ? void 0
                      : a.year_data
                    : e || n)
            )
              return null;
            var w = function (t) {
                if (!t) return null;
                var n,
                  e,
                  o,
                  i = {
                    id:
                      t.singer_id ||
                      (null === (n = t.singer_info) || void 0 === n
                        ? void 0
                        : n.author_id),
                    name:
                      t.singer_name ||
                      (null === (e = t.singer_info) || void 0 === e
                        ? void 0
                        : e.author_name),
                    plays: t.song_cnt || t.play_times || 0,
                    img:
                      t.singer_pic ||
                      (null === (o = t.singer_info) || void 0 === o
                        ? void 0
                        : o.author_pic),
                  };
                return i.id && i.name ? i : null;
              },
              B = function (n) {
                return null != n && n.length
                  ? n.map(function (n) {
                      var e,
                        o,
                        i,
                        r,
                        a = {
                          id:
                            n.mixsongid ||
                            (null === (e = n.audio_info) || void 0 === e
                              ? void 0
                              : e.mixsongid),
                          cover:
                            n.pic ||
                            (null === (o = n.audio_info) || void 0 === o
                              ? void 0
                              : o.pic),
                          title:
                            n.songname ||
                            n.ori_audio_name ||
                            n.name ||
                            (null === (i = n.audio_info) || void 0 === i
                              ? void 0
                              : i.songname),
                          author:
                            n.author_name ||
                            (null === (r = n.audio_info) || void 0 === r
                              ? void 0
                              : r.author_name),
                          value:
                            n.play_cnt || n.num || n.times || n.play_times || 0,
                        };
                      if (
                        ("string" == typeof a.id && (a.id = Number(a.id)),
                        t <= 2020)
                      ) {
                        var l = n.name ? n.name.split(" - ") : "";
                        ((a.title = null == l ? void 0 : l[1]),
                          (a.author = null == l ? void 0 : l[0]));
                      }
                      return a;
                    })
                  : [];
              },
              D = function (t) {
                return null != t && t.length
                  ? t.slice(0, 5).map(function (t) {
                      return {
                        title: t.style || t.style_name,
                        num:
                          t.rate ||
                          (t.ratio ? Number(t.ratio) : Number(t.pct)) ||
                          0,
                      };
                    })
                  : [];
              };
            return (
              t >= 2025
                ? (j = {
                    total_duration: Math.round(
                      ((null === (l = R.play_all) || void 0 === l
                        ? void 0
                        : l.total_play_duration) || 0) / 60,
                    ),
                    total_days:
                      (null === (s = R.login_days) || void 0 === s
                        ? void 0
                        : s.days) || 0,
                    total_songs:
                      (null === (u = R.play_all) || void 0 === u
                        ? void 0
                        : u.total_play_count) || 0,
                    rank_song: B(
                      null === (d = R.year_play_list) || void 0 === d
                        ? void 0
                        : d.list,
                    ),
                    top_singer: w(
                      null === (c = R.top_singer_list) || void 0 === c
                        ? void 0
                        : c.list,
                    ),
                    rank_style: D(
                      null === (v = R.style_top) || void 0 === v
                        ? void 0
                        : v.style_list,
                    ),
                  })
                : t >= 2024
                  ? (j = {
                      total_duration:
                        (null === (p = R.year_all) || void 0 === p
                          ? void 0
                          : p.play_min) || 0,
                      total_days:
                        (null === (_ = R.year_all) || void 0 === _
                          ? void 0
                          : _.open_day) || 0,
                      total_songs:
                        (null === (g = R.year_all) || void 0 === g
                          ? void 0
                          : g.song_count) || 0,
                      rank_song: B(
                        null === (f = R.year_play_detail) || void 0 === f
                          ? void 0
                          : f.song_list,
                      ),
                      top_singer: w(R.year_topsinger_topmixsong),
                      rank_style: D(
                        null === (m = R.style_top) || void 0 === m
                          ? void 0
                          : m.style_list,
                      ),
                    })
                  : t >= 2023
                    ? (j = {
                        total_duration:
                          (null === (y = R.play_all) || void 0 === y
                            ? void 0
                            : y.play_time) || 0,
                        total_days: R.active_days_year || 0,
                        total_songs:
                          (null === (h = R.play_all) || void 0 === h
                            ? void 0
                            : h.play_song_num) || 0,
                        rank_song: B(R.top10_scid),
                        top_singer: w(R.top1_singer_scid),
                        rank_style: D(
                          null === (A = R.style_cnt) || void 0 === A
                            ? void 0
                            : A.top,
                        ),
                      })
                    : t >= 2022
                      ? (j = {
                          total_duration:
                            60 *
                            ((null === (b = R.play_all) || void 0 === b
                              ? void 0
                              : b.play_time) || 0),
                          total_days:
                            (null === (k = R.active_cnt) || void 0 === k
                              ? void 0
                              : k.day_cnt) || 0,
                          total_songs:
                            (null === (x = R.play_all) || void 0 === x
                              ? void 0
                              : x.play_song_num) || 0,
                          rank_song: B(R.top10_scid),
                          top_singer: w(R.top1_singer_scid),
                          rank_style: D(
                            null === (C = R.style_cnt) || void 0 === C
                              ? void 0
                              : C.top,
                          ),
                        })
                      : t >= 2021
                        ? (j = {
                            total_duration:
                              60 *
                              ((null === (E = R.play_all) || void 0 === E
                                ? void 0
                                : E.play_time) || 0),
                            total_songs:
                              (null === (S = R.play_all) || void 0 === S
                                ? void 0
                                : S.play_song_num) || 0,
                            rank_song: B(R.top10_scid),
                            top_singer: w(R.top1_singer),
                          })
                        : t >= 2020
                          ? (j = {
                              total_duration: 60 * (R.play_times || 0),
                              total_songs: R.play_count || 0,
                              rank_song: B(R.top10_scid),
                              top_singer: w(
                                null === (O = R.top1_singer) || void 0 === O
                                  ? void 0
                                  : O[0],
                              ),
                              rank_style: D(R.style_like),
                            })
                          : t >= 2019 &&
                            (j = {
                              total_duration: 60 * (R.play_times || 0),
                              total_songs: R.play_count || 0,
                              rank_song: B(R.top10_scid),
                              top_singer: w(
                                null === (P = R.top10_singer) || void 0 === P
                                  ? void 0
                                  : P[0],
                              ),
                              rank_style: D(R.style_like),
                            }),
              j
            );
          },
        };
      };
    },
    58173: function (t, n, e) {
      "use strict";
      e.d(n, {
        z: function () {
          return l;
        },
      });
      var o = e(76792);
      function i(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          (n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            e.push.apply(e, o));
        }
        return e;
      }
      function r(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? i(Object(e), !0).forEach(function (n) {
                (0, o.Z)(t, n, e[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
              : i(Object(e)).forEach(function (n) {
                  Object.defineProperty(
                    t,
                    n,
                    Object.getOwnPropertyDescriptor(e, n),
                  );
                });
        }
        return t;
      }
      var a = {
        type: 3,
        title: "",
        content: "",
        img: "",
        url: "",
        copyContent: "",
        platform: "",
        shareChannel: [],
        subbiz: "",
      };
      function l() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r(
          r({}, a),
          {},
          {
            title: (null == t ? void 0 : t.title) || "",
            content: (null == t ? void 0 : t.content) || "",
            img: (null == t ? void 0 : t.img) || "",
          },
          n,
        );
      }
    },
    2266: function (t, n) {
      "use strict";
      n.Z = {
        src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/arrow.a88a2ca0.png",
        height: 18,
        width: 18,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAASElEQVR42lXLoQ2AQBBE0bdHG9AheAz0gEcSEloAiaQpxGXFqZ+8zBAY9eigZvWCAAoOZ0LmtrS3y55QsHlAVJt9AkU1kyHnP1JpCMtc01eXAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    57186: function (t, n) {
      "use strict";
      n.Z = {
        src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/arrowWhite.a1b85d0f.png",
        height: 18,
        width: 18,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAT0lEQVR42lWLsQ2AMBAD/bAGbAg9DexAT4mQWAFKSnY6RYqTIpVPtk+ExMQg0UtysPFlDledxMlViho8rK12c5is7Lx+e134CU/KMDNWPwH2dymJhvh9HgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    10082: function (t, n) {
      "use strict";
      n.Z = {
        src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/collected.b6d7e479.png",
        height: 36,
        width: 36,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAlElEQVR42kWPsQrCQBBEF7UR/BfxE8RahEvjD8TmrrG28v8EC/E70gUSkkvecBtyMMzs7OztnenkKl5ySA9wQO/hOlfpXJohvikmzAn+EvjgSQsvBZrSjD1aQaGnFjeG+HlgYGKER+oBlvdXIKyTCgBqx3V55LPsxFz3195MGw/duaGDW7ybe1v/SREETuijezszsxmaEYNvle25SQAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    48530: function (t, n) {
      "use strict";
      n.Z = {
        src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/defaultUser.ef9e798d.png",
        height: 165,
        width: 165,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEX////+/v79/f38/P38/Pz7+/z7+/v5+fr4+fr4+Pr09Pfx8vbv8PTu7/Pt7vPt7vLt7fLs7fLr7PLr7PEydK9RAAAAO0lEQVR42h2KWQ6AIBTECq5sowP3v6t5/jRtUmTZsghEIPecu4XcoP2yal3xjGvf7mFmASiT9yAlzucDdZkC024ifwUAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    90418: function (t) {
      t.exports = {
        wrap: "Popup_wrap__xTCtZ",
        mask: "Popup_mask__7kD9C",
        content: "Popup_content__WRgGF",
        dialogWrap: "Popup_dialogWrap__2ZkKi",
        dialogBtnCancel: "Popup_dialogBtnCancel__2lAq8",
        dialogBtnConfirm: "Popup_dialogBtnConfirm__IGddB",
        darkSkin: "Popup_darkSkin__rAiri",
        dialogTitle: "Popup_dialogTitle__iShww",
        dialogBody: "Popup_dialogBody__Y3x9P",
        dialogContent: "Popup_dialogContent___dv72",
        dialogFooter: "Popup_dialogFooter__b9xAL",
        maskIn: "Popup_maskIn__iS_jq",
        maskOut: "Popup_maskOut__wf4iz",
        contentIn: "Popup_contentIn__hYedq",
        contentIn2: "Popup_contentIn2__bBo71",
        contentOut: "Popup_contentOut__cnosy",
      };
    },
  },
]);
