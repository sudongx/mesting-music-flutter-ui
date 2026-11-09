(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2198],
  {
    89141: function (e, n, t) {
      "use strict";
      (t.d(n, {
        Z: function () {
          return g;
        },
      }),
        t(37667));
      var i = t(33562),
        o = t(93967),
        a = t.n(o),
        l = t(23692),
        r = t.n(l),
        s = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/arrowYear.288a18bf.png",
          height: 24,
          width: 24,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAhklEQVR42mMAgbD0SuaQ1HIpCLuckQEZBCTlgQVCUstiQ1JLTaFsZriC0LQyRrDOjHImoERuaFq5KlQRE4ai8IxyttDUsqLQ1HJxsHhqGSNUQSkTmE4vkwUqzgxJKeeBKwhJKwWrCkkrEwsB664UgEqCNSFbEwNULAdlI0lCVYeml7Jh0wkAyYYqzO9lso4AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        c = t(11284),
        d = t(93239),
        u = t(22239),
        v = t(93452),
        _ = t(25965),
        g = (0, v.Z)(
          (0, i.Pi)(function (e) {
            var n,
              t,
              i,
              o,
              l = e.type,
              v = e.yearData,
              g = e.stores,
              m = e.clickMobileLog,
              p = g.dataStore,
              h = p.date,
              f = p.skin,
              x = h.year();
            return (0, _.jsxs)("div", {
              className: a()(r().wrap, [r()[f]]),
              onClick: function () {
                return m("听歌小结", { svar2: "年度概览" });
              },
              children: [
                (0, _.jsxs)("div", {
                  className: r().data,
                  children: [
                    (0, _.jsxs)("div", {
                      className: r().item,
                      children: [
                        (0, _.jsx)("div", {
                          className: r().label,
                          children: "总时长",
                        }),
                        (0, _.jsxs)("div", {
                          className: r().value,
                          children: [
                            (0, _.jsx)("span", {
                              children:
                                x >= 2024
                                  ? null == v
                                    ? void 0
                                    : v.total_duration
                                  : null ===
                                        (n = (0, u.WJ)(
                                          null == v ? void 0 : v.total_duration,
                                        )) || void 0 === n
                                    ? void 0
                                    : n.count,
                            }),
                            x >= 2024
                              ? "分钟"
                              : null ===
                                    (t = (0, u.WJ)(
                                      null == v ? void 0 : v.total_duration,
                                    )) || void 0 === t
                                ? void 0
                                : t.unit,
                          ],
                        }),
                      ],
                    }),
                    !!(null != v && v.total_days) &&
                      (0, _.jsxs)("div", {
                        className: r().item,
                        children: [
                          (0, _.jsx)("div", {
                            className: r().label,
                            children: "天数",
                          }),
                          (0, _.jsxs)("div", {
                            className: r().value,
                            children: [
                              (0, _.jsx)("span", {
                                children: null == v ? void 0 : v.total_days,
                              }),
                              "天",
                            ],
                          }),
                        ],
                      }),
                    (0, _.jsxs)("div", {
                      className: r().item,
                      children: [
                        (0, _.jsx)("div", {
                          className: r().label,
                          children: "首数",
                        }),
                        (0, _.jsxs)("div", {
                          className: r().value,
                          children: [
                            (0, _.jsx)("span", {
                              children: null == v ? void 0 : v.total_songs,
                            }),
                            "首",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                "share" !== l &&
                  (0, _.jsxs)("div", {
                    className: r().jumpWrap,
                    onClick: function () {
                      var e;
                      null !== (e = d.sh[x]) &&
                        void 0 !== e &&
                        e.url &&
                        c.LightMobileCall.mobileCall(d.x8.openURL, {
                          browser: 0,
                          url: d.sh[x].url,
                          isFullScreen: 1,
                        });
                    },
                    children: [
                      !!(null !== (i = d.sh[x]) && void 0 !== i && i.thumb) &&
                        (0, _.jsx)("img", {
                          className: r().cover,
                          src:
                            null === (o = d.sh[x]) || void 0 === o
                              ? void 0
                              : o.thumb,
                          alt: "",
                        }),
                      (0, _.jsxs)("div", {
                        className: r().text,
                        children: [
                          (0, _.jsxs)("div", {
                            className: r().title,
                            children: [
                              x ? "".concat(x, "年") : "",
                              "年度听歌报告",
                            ],
                          }),
                          (0, _.jsxs)("div", {
                            className: r().desc,
                            children: [
                              "重温我的",
                              x ? "".concat(x, "年") : "",
                              "听歌回忆",
                              (0, _.jsx)("img", { alt: "", src: s.src }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            });
          }),
        );
    },
    46561: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return es;
        },
      });
      var i = t(76792),
        o = t(37667),
        a = t.n(o),
        l = t(33562),
        r = t(93967),
        s = t.n(r),
        c = t(59105),
        d = t.n(c),
        u = t(75723),
        v = t(98961),
        _ = t.n(v),
        g = t(93239),
        m = t(88374),
        p = t(27484),
        h = t.n(p),
        f = t(93452),
        x = t(25965),
        A = (0, f.Z)(
          (0, l.Pi)(function (e) {
            var n = e.type,
              t = e.yearData,
              i = e.stores,
              a = e.clickMobileLog,
              l = i.dataStore,
              r = i.appStore,
              c = l.dimension,
              d = l.statistics,
              v = l.skin,
              p = l.date,
              f = (0, o.useRef)(null),
              A = null;
            (0, o.useEffect)(
              function () {
                A || (A = m.S1(f.current, { renderer: "canvas" }));
                var e = [],
                  t = y(),
                  i = t.x,
                  o = t.y;
                return (
                  (e = {
                    tooltip: { show: !1 },
                    animation: "share" !== n,
                    grid: { left: "5%", right: "5%", top: "70%" },
                    xAxis: {
                      data: i,
                      axisLine: { show: !0, lineStyle: { color: "#DADFF0" } },
                      axisLabel: {
                        show: !0,
                        textStyle: {
                          color:
                            v === g.lu.BLACK
                              ? "rgba(96,121,160,0.5)"
                              : "rgba(0, 0, 0, 0.5)",
                          fontSize: 12,
                        },
                        clickable: !0,
                      },
                      axisTick: { show: !1 },
                    },
                    yAxis: {
                      type: "value",
                      show: !1,
                      axisLabel: { show: !1 },
                      axisLine: { show: !1 },
                      axisTick: { show: !1 },
                    },
                    series: [
                      {
                        type: "bar",
                        data: o,
                        barMinHeight: 2,
                        label: {
                          show: !0,
                          position: "top",
                          formatter: function (e) {
                            return e.value < 60
                              ? "".concat(e.value, "秒")
                              : "".concat(
                                  Math.ceil(
                                    ((null == e ? void 0 : e.value) || 0) / 60,
                                  ),
                                  "分钟",
                                );
                          },
                          textStyle: { color: "rgba(255, 255, 255, 0)" },
                        },
                        itemStyle: {
                          color: "rgba(64, 172, 255, 0.2)",
                          barBorderRadius: [4, 4, 0, 0],
                        },
                      },
                    ],
                  }),
                  A.setOption(e),
                  A.on("click", function (e) {
                    return b(e, "click");
                  }),
                  A.on("mouseover", function (e) {
                    return b(e, "mouseover");
                  }),
                  A.on("mouseout", function (e) {
                    return b(e, "mouseout");
                  }),
                  1 === c
                    ? o.map(function (e, n) {
                        e ===
                          Math.max.apply(
                            Math,
                            (0, u.Z)(
                              o.filter(function (e) {
                                return e >= 0;
                              }),
                            ),
                          ) && b({ dataIndex: n }, "highlight");
                      })
                    : 2 === c &&
                      i.map(function (e, n) {
                        e === (null == p ? void 0 : p.format("M月")) &&
                          b({ dataIndex: n }, "highlight");
                      }),
                  function () {
                    A && A.dispose();
                  }
                );
              },
              [d],
            );
            var b = function (e, t) {
                if ("share" !== n || "highlight" === t) {
                  var i = y(),
                    o = i.x,
                    a = i.y,
                    l = e.dataIndex;
                  A.setOption({
                    xAxis: { data: o, axisLabel: { show: !0 } },
                    series: [
                      {
                        data:
                          null == a
                            ? void 0
                            : a.map(function (e, n) {
                                return {
                                  value: e,
                                  label: {
                                    show: l === n,
                                    position: "top",
                                    animationDuration: 0,
                                    formatter: function (e) {
                                      return e.value < 60
                                        ? "".concat(e.value, "秒")
                                        : "".concat(
                                            Math.ceil(
                                              ((null == e ? void 0 : e.value) ||
                                                0) / 60,
                                            ),
                                            "分钟",
                                          );
                                    },
                                    textStyle: {
                                      color:
                                        "mouseout" === t
                                          ? "rgba(255, 255, 255, 0)"
                                          : "#0077FF",
                                    },
                                  },
                                  itemStyle: {
                                    color:
                                      l === n && "mouseout" !== t
                                        ? j("#0392FF", "#40ACFF")
                                        : "rgba(64, 172, 255, 0.2)",
                                  },
                                };
                              }),
                      },
                    ],
                  });
                }
              },
              j = function (e, n) {
                return new m.Q.o(0, 0, 0, 1, [
                  { offset: 0, color: e },
                  { offset: 1, color: n },
                ]);
              },
              y = function () {
                var e,
                  n = [];
                if (1 === c)
                  ((e = ["一", "二", "三", "四", "五", "六", "七"]),
                    (n = Array(7)
                      .fill(0)
                      .map(function (e, n) {
                        return n;
                      })
                      .map(function (e) {
                        var n,
                          t,
                          i =
                            null == d
                              ? void 0
                              : null === (n = d.dates) || void 0 === n
                                ? void 0
                                : null === (t = n[e]) || void 0 === t
                                  ? void 0
                                  : t.listen_duration;
                        return void 0 !== i ? i || 0 : void 0;
                      })));
                else if (2 === c) {
                  var t = r
                    .getServerTimeDayjs()
                    .startOf("month")
                    .startOf("day");
                  ((n = (e = Array(g.QX[g.Sr.MONTH] + 1)
                    .fill(0)
                    .map(function (e, n) {
                      var i = t.clone().subtract(n, "month");
                      return { date: i, str: i.format("YYYYMM01") };
                    })
                    .reverse()).map(function (e) {
                    var n, t;
                    return (
                      (null == d
                        ? void 0
                        : null === (n = d.months) || void 0 === n
                          ? void 0
                          : null ===
                                (t = n.find(function (n) {
                                  return (
                                    "".concat(n.month) === "".concat(e.str)
                                  );
                                })) || void 0 === t
                            ? void 0
                            : t.listen_duration) || 0
                    );
                  })),
                    (e = e.map(function (e) {
                      return h()(e.date).format("M月");
                    })));
                }
                return {
                  x: e,
                  y: (n = n.map(function (e) {
                    return 0 === e ? null : e;
                  })),
                };
              };
            return (0, x.jsxs)("div", {
              className: s()(_().wrap, [_()[v]]),
              onClick: function () {
                "share" !== n && a("听歌小结", { svar2: "图表" });
              },
              children: [
                (0, x.jsxs)("p", {
                  className: _().listenCount,
                  children: [
                    (0, x.jsxs)("span", {
                      children: [0 === c ? "今" : "本", g.En[c], "听歌"],
                    }),
                    (0, x.jsxs)("span", {
                      children: [
                        (0, x.jsx)("span", {
                          className: _().day,
                          children:
                            (3 === c
                              ? null == t
                                ? void 0
                                : t.total_days
                              : null == d
                                ? void 0
                                : d.accumulate_listen_days) || 0,
                        }),
                        "天",
                      ],
                    }),
                  ],
                }),
                (0, x.jsx)("div", { ref: f, className: _().chart }),
              ],
            });
          }),
        ),
        b = t(21232),
        j = t(36977),
        y = t.n(j),
        w = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/up.0321f19c.png",
          height: 22,
          width: 22,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA1UlEQVR42k3NTYtBYRjG8XvOmaZmPYvZTc1mVrOa5hvMB5idwh4bUiilk5KFoqwtJOkohONdXlYkLxt2NkqWFiL7i0sR//r1PN2L+5ZLjiyehVlTcNLWnMKnMLvOuSsPVZgtiz+bjgOd+B9ZkniVW/4yfr1FHD1F7GlNJ18J7UgHL3JJq+JHq8EUrMOgHYUCVfzTm4RbUORarIcKbeJ9fMljiSE+EgNotKZcsAmVZ9RoF09SmEPRZ6jrU6yokZngW1h6fN1sLKEYC7jLc9j5vgvLTO5nz30efAzVIEuQAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        k = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/down.4861ce33.png",
          height: 22,
          width: 22,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAzklEQVR42k3LP6tBARjH8eceunXnO9zt1l3udKebd+AF2BR2LKRQSicDZWAwIiV/jqKOg8ifmEg6GXgBSkaDkv3HLyW+9aln+D3S2UKhkLGBz9jiS1h1BUUe6Wsomok+7eomBjUTf8Iqr6PiAt/5OVTaF+Zoqm1YIpSZ4E1Sw+cyO0WXDrkZfuU1tYd/cib66NCJkvEuHPQpwmIGbBEdl7COM+3pGtUxSo/xLsEWLMJ8Ddi9Gs505b10l/Ahj/wNWIV5ygjQ0VXGz/1Jg/UGtv178+4TYfUAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        N = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/fair.5746fd67.png",
          height: 22,
          width: 22,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEWGtv2GtvyGtfyGtv2GtvyGtfyGtv2GtfyGtv2GtvyGtfyGtv2Gtf2GtfyGtvyGtfyGtv2GtvyGtfwfib07AAAAEHRSTlMAAAACAgIDAxsbHyAgINv8IWkbNgAAADtJREFUeNo1i1sKwCAQA2O6tvW56v0Pa0AkPwOZAe2J0QwgyMAg+GvOLQFfX+6zv4LhvgRM5VwyNck33zqFAZ6ATKA/AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        C = (0, b.Pi)(function (e) {
          var n = e.data,
            t = n.title,
            i = n.style,
            o = n.content,
            a = n.subContent,
            l = void 0 === a ? "" : a,
            r = n.tip,
            c = n.subTip,
            d = void 0 === c ? "" : c,
            u = n.icon,
            v = void 0 === u ? "" : u,
            _ = n.type,
            g = void 0 === _ ? "" : _,
            m = n.compareType,
            p = void 0 === m ? null : m,
            h = n.cover,
            f = void 0 === h ? "" : h,
            A = n.avatar,
            b = void 0 === A ? "" : A,
            j = n.onClick,
            C = void 0 === j ? function () {} : j,
            S = n.jumpType;
          return (0, x.jsxs)(
            "div",
            {
              style: void 0 === i ? "" : i,
              className: s()(y().wrap, [y()[g]]),
              id: void 0 === S ? "" : S,
              children: [
                v &&
                  (0, x.jsx)("img", { alt: "", src: v, className: y().icon }),
                ("listenLatest" === g || "favSong" === g) &&
                  f &&
                  (0, x.jsx)("div", {
                    className: y().coverBg,
                    onClick: C,
                    children: (0, x.jsx)("img", {
                      alt: "",
                      src: f,
                      className: y().cover,
                    }),
                  }),
                b &&
                  "favSinger" === g &&
                  (0, x.jsx)("div", {
                    className: y().out,
                    children: (0, x.jsx)("div", {
                      className: y().middle,
                      children: (0, x.jsx)("div", {
                        className: y().avatar,
                        onClick: C,
                        children: (0, x.jsx)("img", { alt: "", src: b }),
                      }),
                    }),
                  }),
                (0, x.jsx)("div", {
                  className: y().title,
                  children: void 0 === t ? "" : t,
                }),
                (0, x.jsxs)("div", {
                  className: y().content,
                  children: [
                    void 0 === o ? "" : o,
                    l &&
                      (0, x.jsx)("span", {
                        className: y().subContent,
                        children: l,
                      }),
                  ],
                }),
                (0, x.jsxs)("div", {
                  className: y().tip,
                  children: [
                    ("listenTime" === g || "listenTotal" === g) &&
                      p &&
                      (0, x.jsx)("img", {
                        alt: "",
                        src: "up" === p ? w.src : "down" === p ? k.src : N.src,
                        className: y().up,
                      }),
                    void 0 === r ? "" : r,
                    d && (0, x.jsx)("span", { children: d }),
                  ],
                }),
              ],
            },
            g,
          );
        }),
        S = t(22239),
        L = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/songClock.b553bb62.png",
          height: 131,
          width: 144,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAw0lEQVR42mMAg5y/0o2b/1xR6v07p2Hz373Zy/80gcXb/jGC6ZIVvyJr1v76n7/0z/+yVb//F63682nD9Z/8DDDw6P2/ybdf//t/89W/r7ff/Pt/5O6f+9azXkmBJY9df8B89fm/S8fv//9/7N7//9uu/v8/Yd/vZ+XrXhjBTZh/4pd73/7fZ9p2/brTsP33y4pN3xfWbXoqA5Y88/I/2CGJC2+LlK57YVW94YVl3canktXbvjPDTbj29j/j9/9AhVgAAG4XbYtJAZ1kAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 7,
        },
        M = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/songCount.460f9bda.png",
          height: 164,
          width: 160,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAx0lEQVR42mMAge8l5Yz/C3KZGKAAyGZkgIEf5ZVwzp+aWvO/peVmYEU+HkwQ1T3dYMbfsrIp/ydM+P9/2rT//xoaW8ByNeUQRT98/DT/NTf//3f4yLc/m7d8+5uY+P93amYhAwx8SU3T/ldd/f/fihV/gab8/Jub9/9HacUWuIKDHz6yfczJnfvRz+//z+rqL7/a2///7J9QAVfwq72V8crqVTIPJ09OfDBtWtHj6dMDn0+aLMSADP4zMDB+OH+O+fWypRzI4gBgUGGLC3qihQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        I = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/title_song_king.78f4da04.png",
          height: 155,
          width: 154,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/ElEQVR42mNYP/srMwMQHNz4y2Ll1Hc3Ny/6eHb/+m8FDECweu47FgaTkHymyoAvbG25t3ZXJV8sY2CYrbig692axb2fnRhgYEnfB99V0z6+rMg879lecT1+fueHIxPKXuUzwMDmBd9Xrpr+4X9n4aPdG+Z9eXly17//6+e/qwBKsTGAwNIJH9dtmPPr/4Tqh1u3Lvrx6/Kx///3b/zWA5RiYgCB9vz7Wgu63yWlBByOXDH56/+Nc3/cnth8Q5eBYQMHQ2v+XZAvGEHGxYfvlWjIvG2bH3xNlYEhjL2n5g7Eio7ie8z9tQ/Y63KvcIKMrWhYxTK1+SFQciMjAHKTc79x1qQZAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        E = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/title_song_traveller.344f8017.png",
          height: 155,
          width: 154,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+0lEQVR42mMAgf72v7bLF/37NWvKv2OzJ70UXjLvHHtd0Q2WHL8bjGAFFXl/p9+/9///jEn//8syvAsDCrEWptzgq8w5xwxWMHfGn7bWuv//a0r//dm17fOcU8cf+ZdknpPOjTvNDpTex3b39r/Lc6b//z+l79+fu3f+/3/44N//jWuf2QIlWRgunP/jdfTQ///7dv3/d/bUv9+7d/z/t3fX3xdN1Vc0w222czA8ffwn9dyZf68unvv3/83rf/9PHvv//9rl3weBujmWLXzMyQABd7h2bv1iceLo1/Bd2/5MP7j3ezADEKxd/oqV4eu3/4wMWMDyhU/BPgAApDeHA5TsBvwAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        D = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/title_song_connoisseur.20c2c8f0.png",
          height: 155,
          width: 154,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+Af8AAAD95UxOAu72gP7vBzH38BXU8/0Ld5v3l7tS6TYAAf3kUlAB+hyvAAoqAAH9+P8A5MsB9tPSAOjR4lMjkn2uAfzSLWkCFmeWAf/v+//t6AUBFir7/LZ3BefL9IAeZDaKAfzPGmgCG3yXAPjm+gDq1QQAIUr8AMCHBuvb64d8DQuNAfjPHTQGCUi9ARU1DgAFCAAA8NsA/9apAOXlEGup3cqrAf//AADoqAAoEyRAjAIGETH36rjK5ukftN3l98cSCeHpAem2AAQXSqP+AABdCb93ABnL4B/6HRvh/iAeAPj9AQ30AQAAAADmsxwE9v4kBOfuBwEVBtYF+/v8/fHy8voC//X9GF9+rytZyiUAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        R = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/title_song_24k.37dd1bff.png",
          height: 155,
          width: 154,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+UlEQVR42mPYPVuUb0oZg8v/O17+d3fpbbuzQ2vvl7NGBQxA8Pq4NRMDCKxoZ6jZPFn8f18xx//J5dz/7+7U/vr/rT4/Awz8fxAiNbtR8WdNEsO/mVWMP+9s1/r//ohEPELB/0ql4ystvwfZMvxvzuL5fW+n5v8HW/gLEApe5NifXG39P8Of4Xd/qcjvx3u0/p9dwNDXw6DMwQACny/GyX447fjg7g7N//d2AfE2pVc76hi8T84U5mP4/ziZkQEIDvcwaJyYw9e0o4957ppahpxjE/gV9/czsDKAwP9HMYxbJgUxT9dn4DrcKCR2Y4GUwIEpDGwMDAwMAAP8ajcm8EpCAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        T = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/title_song_taste.42efc4df.png",
          height: 155,
          width: 154,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA90lEQVR42mM4efiv8LL5/4oO7fsTvX3Lv1MH9v578OjBnywGILh4/j8jw/IFf6NnT/v3f+XSf/8P7v3/f/mi///37/n3/+H9nzEMILB22ReROdP+PZ85GSi5+N+fY4f//VoGVHTl0u9NYAU/vn+WWrbw37vtm///37Xt37+ZU/793L4FZMrXWWAF//8vYt226e/1BbP//18y//+fFUv+/9+9/c//ssJzrkBpRrCi0yffmW3Z8OfuqqV//69a+utJZfGtNKAwf1vTbVaGyxf+MzGAwXS+nNQ7ZgwM0+SAHM7SolPsDDBw/gxQERT8/b+CcebkH8wwPgDz+IweljLUOQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        Z = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/title_song_explorer.f254fa04.png",
          height: 155,
          width: 154,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/0lEQVR42mMoz/7DzAAE6YE/3atz/26oL/y7uq3iqw0DEFQXvGNhAIHixJ/B61f8+39o7///m9f8/z9rwr8/k9rfWTJAAdPsiX8vP7r///+pY79/Hjv498f2jSBFP+dD5e8Jrl7y7+mdG///b1n/+8+De39/blr1///Etu+LgZLMDCDQ3/J76dED//8/uPv//+lj//9P7vj3v6P2fhhQipMBBNzUzkt11f1cO7H9z5vWyl+3G0ufFHo5lkpmxR/nZcgMfcycl88Aci17pPt+tdToWQoW+oFCqVEH+JMiVkN8UZbxgLmu5A57ZnovW3rcPs6SrEucmdEbmONDzzACAHZKfc0BCDQjAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        W = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/title_song_collector.97884747.png",
          height: 155,
          width: 154,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABAklEQVR42mMAgb8t1c7/smJ2/LMWbfhrxRP+PStJ/7JHECsDDPyLDV7wZ+2q/z8OHfz/a97s//+yE///SYzrhsj+/8/4N8j3yO+3b////f//1+d//3/+Lsj//zs0aDZY/klDk+g/R6eP/1au/P/r3/9f37bt+vc/KOD/56jYIrCCg35+nJ8CQjN/eftf/pOR9/+vvdO3v6ER/54FhHoyWDEwMZwLDGJj8JBjPRkSZvbG3rXtUmRM1HXfII89vr7ixwID2RkOh4Ux3fYP5NkXEiycnZoovCnAV3p5gI/gsYAAzmMhIUxga46FhzGdDw5lvRsQzHUhIIjjSnAo29mwcLAkAHJmdeFZKPc3AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        O = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/title_song_single.8999f7fc.png",
          height: 155,
          width: 154,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+Aezk/wD29gAy+fj9fAICAA0HCgGfGyECpry07AbPvvX7Ad/X/wf7+vuZy8jcsOTg9PZPVi+B9Pb4bDQ7D9GtpOQBAdbN/R0EBfqHJi5piAAAuAfOxdd++Pn+pTpCYrWdk43/Af///wDb0/yB+Pj3MPj4/Pby7v9T2tAAbcfdz6wiFBX6AXdvygaJkeMLvrRCWv3+/Q7Ftu4nDQwKX+3w7V8p4i6iAYl+1gX7+/kMfIfKBgAAEQ9rYRsL+ez3XwQGA6mYrUHHAZKH3QPs6/QFCgsCCvn4/Qnz8vz/KEEr6vbq8gDx5egBAYRi4AEPJf0C8PD0Avj4/gMA/wAB/vv9AQsPBfsVChr8f3KNwpo4P4EAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        B = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/title_song_hot.8b6111da.png",
          height: 155,
          width: 154,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2UlEQVR42mMAgX/7NjCB6Q3dMv+Wz8sEsf8zMDCCJaEcZrCCxYsn/q9p+P+1rMkQLN4wiZnhf+9ysOSfSavL/vfM+/9/zuK/f5Prnr3sXaoLN+FNbYnov+iCj//nLf//7/yFn//z6v5/CU5rgit46eUm9S886Nv/GbP+/5u78Mf/woL/H+1MOhkYGJgY/idFgR34PcK37V9q8v//Obn/f0WHPD5npW87iYGBHWzCDQYxkCL2J+5mni99bLOP6sqbzGRg4Htsb8wCt+azhzOcs5ZBi+25gwnY8QC7t11a0qWetQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        V = t(11284),
        F = t(98875),
        P = t(48530),
        U = t(89141),
        Y = t(55500),
        H = t(38049),
        z = t.n(H),
        G = t(35183),
        Q = t(3159),
        K = t(3133),
        J = t(78537),
        q = t(79706),
        X = t(73541),
        $ = t(6228),
        ee = t(96930),
        en = t.n(ee),
        et = t(60816);
      (0, G.D)([K.N, J.N, q.N, X.N, $.N]);
      var ei = (0, f.Z)(
          (0, l.Pi)(function (e) {
            var n = e.onDataUrl,
              t = e.height,
              i = e.type,
              a = e.stores,
              l = a.dataStore,
              r = a.appStore,
              s = l.dimension,
              c = l.statistics,
              d = l.date,
              v = null,
              _ = (0, o.useRef)(),
              m = (0, o.useRef)(!1),
              p = function () {
                v || (v = (0, Q.S1)(_.current));
                var e,
                  t,
                  o,
                  a = {
                    animation: !0,
                    grid: {
                      containLabel: !1,
                      top: 26,
                      bottom: 35,
                      left: 20,
                      right: 20,
                    },
                    tooltip: {
                      trigger: "axis",
                      enterable: !0,
                      alwaysShowContent: !0,
                      axisPointer: { type: "none" },
                      padding: 0,
                      backgroundColor: "rgba(255,255,255,0)",
                      borderColor: "rgba(255,255,255,0)",
                      borderWidth: 0,
                      extraCssText: "z-index:1;box-shadow: none;",
                      formatter: function (n) {
                        var t,
                          i,
                          o,
                          a,
                          l,
                          r =
                            null == n
                              ? void 0
                              : null === (t = n[0]) || void 0 === t
                                ? void 0
                                : null === (i = t.data) || void 0 === i
                                  ? void 0
                                  : i[1];
                        return void 0 === r || "share" === e
                          ? ""
                          : '<div class="chart-tooltip kgskin-dialog_bg" onclick="_echart_show_tooltip_('
                              .concat(
                                null == n
                                  ? void 0
                                  : null === (o = n[0]) || void 0 === o
                                    ? void 0
                                    : o.dataIndex,
                                ')">\n                    <span></span>\n                    ',
                              )
                              .concat(
                                null === (a = (0, S.WJ)(r)) || void 0 === a
                                  ? void 0
                                  : a.count,
                              )
                              .concat(
                                null === (l = (0, S.WJ)(r)) || void 0 === l
                                  ? void 0
                                  : l.unit,
                                "\n                </div>",
                              );
                      },
                    },
                    xAxis: {
                      triggerEvent: !0,
                      type: "value",
                      boundaryGap: [0, 0],
                      position: "bottom",
                      axisLine: {
                        show: !0,
                        onZeroAxisIndex: 1,
                        lineStyle: { color: "rgba(255,255,255,0.2)" },
                      },
                      axisTick: { show: !1 },
                      axisLabel: {
                        show: !0,
                        margin: 20,
                        color: "rgba(255,255,255,0.7)",
                        fontSize: 12,
                      },
                      splitLine: { show: !1 },
                    },
                    yAxis: {
                      type: "value",
                      show: !1,
                      axisLabel: { color: "rgba(255,255,255,1)", fontSize: 9 },
                      splitLine: {
                        lineStyle: {
                          width: 1,
                          color: "rgba(255,255,255,0.08)",
                          type: "solid",
                        },
                      },
                    },
                    series: [
                      {
                        data: [],
                        type: "line",
                        smooth: !0,
                        symbolSize: 8,
                        symbol: "share" === (e = i) ? "none" : "circle",
                        showSymbol: !1,
                        lineStyle: { color: "#ffffff", width: 2 },
                        areaStyle: {
                          opacity: 0.8,
                          color: new et.Z(0, 0, 0, 1, [
                            { offset: 0, color: "rgba(255, 255, 255, 0.6)" },
                            { offset: 0.59, color: "rgba(255, 255, 255, 0.1)" },
                            { offset: 1, color: "rgba(255, 255, 255, 0)" },
                          ]),
                        },
                        itemStyle: { borderWidth: 0 },
                        emphasis: {
                          scale: !0,
                          focus: "none",
                          lineStyle: { color: "rgba(255,255,255,1)", width: 2 },
                          itemStyle: {
                            color: "#1A3E55",
                            borderWidth: 2,
                            borderColor: "#ffffff",
                          },
                        },
                      },
                      {
                        type: "bar",
                        barWidth: 1,
                        itemStyle: {
                          color: "rgba(255,255,255,0)",
                          borderColor: "rgba(255,255,255,0.2)",
                          borderWidth: 1,
                          borderType: "dashed",
                          borderDashOffset: 50,
                        },
                        data: [],
                      },
                    ],
                  };
                ((a.animation = !n && "share" !== i),
                  (null === (t = a.series[0].data) || void 0 === t
                    ? void 0
                    : null ===
                          (o = t.filter(function (e) {
                            return void 0 !== e[1];
                          })) || void 0 === o
                      ? void 0
                      : o.length) === 1 && (a.series[0].showSymbol = !0));
                var l = f(a),
                  r = l.x,
                  c = l.y,
                  p = 0;
                (a.series[0].data.forEach(function (e, n) {
                  (e[1] > p && (p = e[1]), e[1]);
                }),
                  (a.yAxis.max = p));
                var h = a.series[0].data.length;
                ((a.tooltip.position = function (e, n, t, i, o) {
                  var l,
                    r,
                    s,
                    c,
                    d = o.viewSize[1] - a.grid.bottom - a.grid.top,
                    u = o.viewSize[0] - a.grid.left - a.grid.right,
                    v =
                      (null == n
                        ? void 0
                        : null === (l = n[0]) || void 0 === l
                          ? void 0
                          : null === (r = l.data) || void 0 === r
                            ? void 0
                            : r[1]) || 0,
                    _ =
                      (null == n
                        ? void 0
                        : null === (s = n[0]) || void 0 === s
                          ? void 0
                          : s.dataIndex) || 0,
                    g = p > 0 ? ((p - v) / p) * (d - 8) + 8 : d,
                    m = u * (_ / (h - 1)) + 20 - t.clientWidth / 2,
                    f = m + t.clientWidth - o.viewSize[0];
                  return (
                    (f >= 0 || m <= 0) &&
                      (t.querySelector && (c = t.querySelector("span")),
                      c &&
                        (f >= 0
                          ? ((m = m - f - 2),
                            (c.style.transform =
                              "translateX(calc(-50% + ".concat(f + 2, "px))")))
                          : ((c.style.transform =
                              "translateX(calc(-50% - ".concat(-m + 2, "px))")),
                            (m = -m + 2)))),
                    [m, g]
                  );
                }),
                  v.on("finished", function () {
                    if (!m.current) {
                      if (((m.current = !0), 0 === s)) {
                        var e = Math.max.apply(
                          Math,
                          (0, u.Z)(
                            c.filter(function (e) {
                              return void 0 !== e;
                            }),
                          ),
                        );
                        v.dispatchAction({
                          type: "showTip",
                          seriesIndex: 0,
                          dataIndex: c.indexOf(e),
                        });
                      } else
                        1 === s
                          ? c.map(function (e, n) {
                              e ===
                                Math.max.apply(
                                  Math,
                                  (0, u.Z)(
                                    c.filter(function (e) {
                                      return e >= 0;
                                    }),
                                  ),
                                ) &&
                                v.dispatchAction({
                                  type: "showTip",
                                  seriesIndex: 0,
                                  dataIndex: n,
                                });
                            })
                          : 2 === s &&
                            r.map(function (e, n) {
                              new Date(
                                null == e ? void 0 : e.date,
                              ).getTime() === new Date(d).getTime() &&
                                v.dispatchAction({
                                  type: "showTip",
                                  seriesIndex: 0,
                                  dataIndex: n,
                                });
                            });
                      n &&
                        n(
                          v.getDataURL({
                            pixelRatio: window.devicePixelRatio || 2,
                            excludeComponents: ["tooltip"],
                          }),
                        );
                    }
                  }),
                  (window._echart_show_tooltip_ = function (e) {
                    if (v && void 0 !== e && ~e) {
                      var n;
                      (v.dispatchAction({ type: "hideTip" }),
                        void 0 !==
                          (null === (n = a.series[0].data[e]) || void 0 === n
                            ? void 0
                            : n[1]) &&
                          v.dispatchAction({
                            type: "showTip",
                            seriesIndex: 0,
                            dataIndex: e,
                          }));
                    }
                  }),
                  v.on("click", "xAxis", function (e) {
                    if ("share" !== i) {
                      var n = e.tickIndex;
                      (s === g.Sr.MONTH
                        ? (n = e.tickIndex - 1)
                        : s === g.Sr.DAY &&
                          (n = [0, 6, 12, 18, -1][e.tickIndex]),
                        window._echart_show_tooltip_(n));
                    }
                  }),
                  v.setOption(a));
              },
              f = function (e) {
                var n,
                  t = [];
                if (s === g.Sr.DAY) {
                  ((e.xAxis.interval = 6),
                    (e.xAxis.max = 24),
                    (t = (n = Array(25)
                      .fill(0)
                      .map(function (e, n) {
                        return n;
                      })).map(function (e) {
                      var n,
                        t,
                        i =
                          null === (n = c.clocks) || void 0 === n
                            ? void 0
                            : null === (t = n[e]) || void 0 === t
                              ? void 0
                              : t.listen_duration;
                      return void 0 !== i ? i || 0 : void 0;
                    })));
                  var i = n.map(function (e) {
                    var n, t;
                    return ~[0, 6, 12, 18, 24].indexOf(e)
                      ? null === (n = c.clocks) || void 0 === n
                        ? void 0
                        : null === (t = n[e]) || void 0 === t
                          ? void 0
                          : t.listen_duration
                      : 0;
                  });
                  ((e.xAxis.axisLabel.formatter = function (e) {
                    return "".concat(e, "时");
                  }),
                    (e.series[0].data = n.map(function (e, n) {
                      return [e, t[n]];
                    })),
                    (e.series[1].data = n.map(function (e, n) {
                      return [e, i[n]];
                    })));
                } else if (s === g.Sr.WEEK) {
                  ((e.xAxis.max = 6),
                    (t = (n = Array(7)
                      .fill(0)
                      .map(function (e, n) {
                        return n;
                      })).map(function (e) {
                      var n,
                        t,
                        i =
                          null === (n = c.dates) || void 0 === n
                            ? void 0
                            : null === (t = n[e]) || void 0 === t
                              ? void 0
                              : t.listen_duration;
                      return void 0 !== i ? i || 0 : void 0;
                    })));
                  var o = n.map(function (e) {
                    var n, t;
                    return ~[0, 6, 12, 18, 24].indexOf(e)
                      ? null === (n = c.dates) || void 0 === n
                        ? void 0
                        : null === (t = n[e]) || void 0 === t
                          ? void 0
                          : t.listen_duration
                      : 0;
                  });
                  ((e.xAxis.axisLabel.formatter = function (e) {
                    return ["一", "二", "三", "四", "五", "六", "日"][e];
                  }),
                    (e.series[0].data = n.map(function (e, n) {
                      return [e, t[n]];
                    })),
                    (e.series[1].data = n.map(function (e, n) {
                      return [e, o[n]];
                    })));
                } else if (s === g.Sr.MONTH) {
                  var a = r
                      .getServerTimeDayjs()
                      .startOf("month")
                      .startOf("day"),
                    l = (n = Array(g.QX[g.Sr.MONTH] + 1)
                      .fill(0)
                      .map(function (e, n) {
                        var t = a.clone().subtract(n, "month");
                        return { date: t, str: t.format("YYYYMM01") };
                      })
                      .reverse())[n.length - 1].date.toDate(),
                    d = n[0].date.toDate();
                  ((e.xAxis.type = "time"),
                    (e.xAxis.min = d),
                    (e.xAxis.max = l),
                    (t = n.map(function (e) {
                      var n, t;
                      return (
                        (null === (n = c.months) || void 0 === n
                          ? void 0
                          : null ===
                                (t = n.find(function (n) {
                                  return (
                                    "".concat(n.month) === "".concat(e.str)
                                  );
                                })) || void 0 === t
                            ? void 0
                            : t.listen_duration) || 0
                      );
                    })),
                    (e.xAxis.axisLabel.formatter = function (e) {
                      return h()(e).format("M月");
                    }),
                    (e.series[0].data = n.map(function (e, n) {
                      return [e.date.toDate(), t[n]];
                    })),
                    (e.series[1].data = e.series[0].data));
                }
                return { x: n, y: t };
              };
            return (
              (0, o.useEffect)(
                function () {
                  return (
                    p(),
                    function () {
                      v && ((m.current = !1), v.dispose());
                    }
                  );
                },
                [c],
              ),
              (0, x.jsx)("div", {
                className: en().container,
                ref: _,
                style: { height: (void 0 === t ? 0 : t) || "" },
              })
            );
          }),
        ),
        eo = (0, f.Z)(
          (0, l.Pi)(function (e) {
            var n,
              t,
              i = e.onClick,
              o = e.type,
              a = e.stores.dataStore,
              l = a.dimension,
              r = a.statistics,
              c =
                (null == r ? void 0 : r.listen_duration) -
                (null == r ? void 0 : r.last_listen_duration);
            return l !== g.Sr.YEAR && r
              ? (0, x.jsx)("div", {
                  className: z().chart,
                  onClick: function () {
                    return i && i();
                  },
                  style: 0 === l ? { height: (0, S.ht)(250) } : {},
                  children: (0, x.jsxs)("div", {
                    className: z().topArea,
                    children: [
                      (0, x.jsxs)("div", {
                        className: z().summery,
                        children: [
                          (0, x.jsxs)("div", {
                            className: s()(z().label, "impact_cn"),
                            children: [
                              "#",
                              0 === l ? "今" : "本",
                              g.En[l],
                              "听歌",
                              " ",
                              l === g.Sr.WEEK &&
                                (0, x.jsx)(x.Fragment, {
                                  children: (0, x.jsxs)("span", {
                                    children: [
                                      r.accumulate_listen_days || 0,
                                      " 天",
                                    ],
                                  }),
                                }),
                              l === g.Sr.MONTH &&
                                (0, x.jsx)(x.Fragment, {
                                  children: (0, x.jsxs)("span", {
                                    children: [
                                      r.accumulate_listen_days || 0,
                                      " 天",
                                    ],
                                  }),
                                }),
                            ],
                          }),
                          (0, x.jsxs)("div", {
                            className: s()(z().value, "impact_cn"),
                            children: [
                              (0, x.jsx)("span", {
                                children:
                                  null ===
                                    (n = (0, S.WJ)(
                                      null == r ? void 0 : r.listen_duration,
                                    )) || void 0 === n
                                    ? void 0
                                    : n.count,
                              }),
                              null ===
                                (t = (0, S.WJ)(
                                  null == r ? void 0 : r.listen_duration,
                                  g.lu.MAGAZINE,
                                )) || void 0 === t
                                ? void 0
                                : t.unit,
                            ],
                          }),
                          0 === l
                            ? (0, x.jsx)("div", {
                                className: s()(z().tips, "impact_cn"),
                                children:
                                  c > 0
                                    ? "比昨日多".concat(
                                        (0, S.rI)(
                                          r.listen_duration,
                                          r.last_listen_duration,
                                        ),
                                      )
                                    : c < 0
                                      ? "比昨日少".concat(
                                          (0, S.rI)(
                                            r.listen_duration,
                                            r.last_listen_duration,
                                          ),
                                        )
                                      : 0 === c
                                        ? "和昨日持平"
                                        : void 0,
                              })
                            : r.duration_defeat_percent > 0
                              ? (0, x.jsxs)("div", {
                                  className: s()(z().tips, "impact_cn"),
                                  children: [
                                    "打败",
                                    (0, S.rl)(r.duration_defeat_percent / 100),
                                    "用户",
                                  ],
                                })
                              : (0, x.jsx)("div", {
                                  className: s()(z().defaultTips, "impact_cn"),
                                  children: "随性听歌，chill一下",
                                }),
                        ],
                      }),
                      (0, x.jsx)(ei, { type: o }),
                    ],
                  }),
                })
              : "";
          }),
        ),
        ea = t(99862),
        el = t.n(ea);
      function er(e) {
        var n = e.arr,
          t = e.itemStyle,
          i = e.wrapStyle,
          o = e.valuefontSize,
          a = e.valueTipStyle,
          l = e.id;
        return (0, x.jsx)("div", {
          className: el().wrap,
          style: i || {},
          id: void 0 === l ? "" : l,
          children: n.map(function (e, n) {
            return (0, x.jsxs)(
              "div",
              {
                className: el().content,
                style: t || {},
                children: [
                  (0, x.jsx)("div", {
                    className: s()(el().left, "impact_cn"),
                    children: e.label,
                  }),
                  (0, x.jsxs)("div", {
                    className: el().right,
                    style:
                      null != e && e.tip
                        ? { flexDirection: "column", alignItems: "flex-end" }
                        : {},
                    children: [
                      (0, x.jsxs)("div", {
                        className: s()(el().value, "impact_cn"),
                        style: o ? { fontSize: o } : {},
                        children: [
                          e.valueText,
                          (0, x.jsx)("span", {
                            className: el().day,
                            children: e.day,
                          }),
                        ],
                      }),
                      (null == e ? void 0 : e.tip) &&
                        (null == e ? void 0 : e.subTip) &&
                        (0, x.jsxs)("div", {
                          className: el().valueTip,
                          style: a || {},
                          children: [
                            null == e ? void 0 : e.tip,
                            null == e ? void 0 : e.subTip,
                          ],
                        }),
                    ],
                  }),
                ],
              },
              n,
            );
          }),
        });
      }
      var es = (0, f.Z)(
        (0, l.Pi)(function (e) {
          var n = e.yearData,
            t = e.type,
            o = void 0 === t ? "normal" : t,
            l = e.stores,
            r = e.clickMobileLog,
            c = l.dataStore,
            u = c.dimension,
            v = c.statistics,
            _ = c.dateIndexs,
            m = c.dateRanges,
            p = c.date,
            h = c.listen_duration,
            f = c.skin,
            b =
              (null == _ ? void 0 : _[u]) >=
              (null == m ? void 0 : m[u].length) - 1,
            j = f;
          3 === u && f === g.lu.MAGAZINE && (j = "black");
          var y = function () {
              var e, n, t, i, o, a, l, r, s, c, d, u, _;
              return (null == v ? void 0 : v.duration_defeat_percent) / 100 > 60
                ? {
                    content: "听歌王者",
                    tip: "听歌时长超过60%的人",
                    backgroundImage:
                      "linear-gradient(0deg, #F6F7FF 0%, #DFDFFF 100%)",
                    icon: I.src,
                  }
                : ["国语", "粤语", "闽南语", "藏语"].some(function (e) {
                      var n, t;
                      return (
                        e ===
                        (null == v
                          ? void 0
                          : null === (n = v.rank_language) || void 0 === n
                            ? void 0
                            : null === (t = n[0]) || void 0 === t
                              ? void 0
                              : t.language)
                      );
                    })
                  ? null != v &&
                    null !== (e = v.hot_collect) &&
                    void 0 !== e &&
                    e.song_info
                    ? {
                        content: "音乐鉴赏家",
                        tip: (0, x.jsxs)(x.Fragment, {
                          children: [
                            "你领先",
                            (0, S.rl)(
                              (null == v
                                ? void 0
                                : null === (n = v.hot_collect) || void 0 === n
                                  ? void 0
                                  : n.defeat_percent) / 100,
                            ),
                            "的人挖到了热歌",
                            (0, x.jsx)(Y.Z, {
                              width: 330,
                              targetText:
                                null == v
                                  ? void 0
                                  : null === (t = v.hot_collect) || void 0 === t
                                    ? void 0
                                    : null === (i = t.song_info) || void 0 === i
                                      ? void 0
                                      : i.name,
                              keepText: ["《", "》"],
                              style: { fontSize: 22 },
                            }),
                          ],
                        }),
                        backgroundImage:
                          "linear-gradient(180deg, #FFE3A6 7%, #F9F5D9 87%)",
                        icon: D.src,
                      }
                    : ["每日推荐", "猜你喜欢", "我喜欢", "搜索", "榜单"].some(
                          function (e) {
                            var n;
                            return (
                              e ===
                              (null == v
                                ? void 0
                                : null === (n = v.most_listen_source) ||
                                    void 0 === n
                                  ? void 0
                                  : n.name)
                            );
                          },
                        )
                      ? {
                          content:
                            null ===
                              (o = w(
                                null == v
                                  ? void 0
                                  : null === (a = v.most_listen_source) ||
                                      void 0 === a
                                    ? void 0
                                    : a.name,
                              )) || void 0 === o
                              ? void 0
                              : o.content,
                          tip:
                            null ===
                              (l = w(
                                null == v
                                  ? void 0
                                  : null === (r = v.most_listen_source) ||
                                      void 0 === r
                                    ? void 0
                                    : r.name,
                              )) || void 0 === l
                              ? void 0
                              : l.tip,
                          backgroundImage:
                            null ===
                              (s = w(
                                null == v
                                  ? void 0
                                  : null === (c = v.most_listen_source) ||
                                      void 0 === c
                                    ? void 0
                                    : c.name,
                              )) || void 0 === s
                              ? void 0
                              : s.backgroundImage,
                          icon:
                            null ===
                              (d = w(
                                null == v
                                  ? void 0
                                  : null === (u = v.most_listen_source) ||
                                      void 0 === u
                                    ? void 0
                                    : u.name,
                              )) || void 0 === d
                              ? void 0
                              : d.icon,
                        }
                      : null != v && v.most_sound_quality
                        ? {
                            content: "24K金耳朵",
                            tip: (0, x.jsxs)(x.Fragment, {
                              children: [
                                "你常用的音质是",
                                (0, x.jsx)(Y.Z, {
                                  width: 220,
                                  targetText:
                                    null == v
                                      ? void 0
                                      : null === (_ = v.most_sound_quality) ||
                                          void 0 === _
                                        ? void 0
                                        : _.name,
                                  style: { fontSize: 22 },
                                }),
                                "，面对热爱不将就",
                              ],
                            }),
                            backgroundImage:
                              "linear-gradient(180deg, #FFF2AA 0%, #FFFBE2 100%)",
                            icon: R.src,
                          }
                        : void 0
                  : {
                      content: "音乐旅行家",
                      tip: "更偏好外文歌的你，用耳朵环游世界",
                      backgroundImage:
                        "linear-gradient(0deg, #F6F7FF 0%, #DFDFFF 100%)",
                      icon: E.src,
                    };
            },
            w = function (e) {
              switch (e) {
                case "每日推荐":
                  return {
                    content: "音乐尝鲜者",
                    tip: "你常用「每日推荐」听歌，等待随时发现好歌，松弛感拉满",
                    backgroundImage:
                      "linear-gradient(0deg, #F6F7FF 0%, #DFDFFF 100%)",
                    icon: T.src,
                  };
                case "猜你喜欢":
                  return {
                    content: "音乐探险家",
                    tip: "你常用「猜你喜欢」听歌，享受音乐的无限惊喜",
                    backgroundImage:
                      "linear-gradient(0deg, #F6F7FF 0%, #DFDFFF 100%)",
                    icon: Z.src,
                  };
                case "我喜欢":
                  return {
                    content: "音乐藏品家",
                    tip: "你常用「我喜欢」听歌，把珍藏的好歌听个够",
                    backgroundImage:
                      "linear-gradient(0deg, #FFF5F5 0%, #FFE4E4 100%)",
                    icon: W.src,
                  };
                case "搜索":
                  return {
                    content: "音乐独行侠",
                    tip: "你常用「搜索」听歌，在音乐的世界里目标清晰，不盲从",
                    backgroundImage:
                      "linear-gradient(0deg, #F6F7FF 0%, #DFDFFF 100%)",
                    icon: O.src,
                  };
                case "榜单":
                  return {
                    content: "热歌追随者",
                    tip: "你常用「榜单」听歌，最潮最热的才能俘获你",
                    backgroundImage:
                      "linear-gradient(0deg, #FFF5F5 0%, #FFE4E4 100%)",
                    icon: B.src,
                  };
                default:
                  return {};
              }
            },
            k = function () {
              var e,
                t,
                i,
                a,
                l,
                s,
                c,
                d,
                _,
                m,
                p,
                h,
                f,
                A,
                j,
                w,
                k,
                N,
                C,
                I,
                E,
                D,
                R,
                T,
                Z,
                W,
                O,
                B,
                U,
                H,
                z,
                G,
                Q,
                K,
                J,
                q,
                X,
                $,
                ee,
                en,
                et,
                ei,
                eo,
                ea = [
                  {
                    style: {
                      backgroundImage:
                        null === (e = y()) || void 0 === e
                          ? void 0
                          : e.backgroundImage,
                      width: (0, S.ht)(660),
                      height: (0, S.ht)(225),
                    },
                    title: ""
                      .concat(0 === u ? "今" : "本")
                      .concat(g.En[u], "音乐称号"),
                    content:
                      null === (t = y()) || void 0 === t ? void 0 : t.content,
                    tip: null === (i = y()) || void 0 === i ? void 0 : i.tip,
                    icon: null === (a = y()) || void 0 === a ? void 0 : a.icon,
                    type: "songTitle",
                    isShow:
                      0 !== u &&
                      3 !== u &&
                      ((0, S.rf)(b, u) || !b) &&
                      (null === (l = y()) || void 0 === l ? void 0 : l.content),
                  },
                ],
                el = [
                  {
                    style: {
                      backgroundImage:
                        "linear-gradient(0deg, #E9F4FB 0%, #CEE7FF 100%)",
                      width: (0, S.ht)(320),
                      height: (0, S.ht)(216),
                    },
                    title: ""
                      .concat(0 === u || 3 === u ? "今" : "本")
                      .concat(g.En[u], "听歌时长"),
                    content:
                      null ===
                        (s = (0, S.WJ)(
                          null == v ? void 0 : v.listen_duration,
                        )) || void 0 === s
                        ? void 0
                        : s.count,
                    subContent:
                      null ===
                        (c = (0, S.WJ)(
                          null == v ? void 0 : v.listen_duration,
                        )) || void 0 === c
                        ? void 0
                        : c.unit,
                    tip:
                      0 === u
                        ? (null == v ? void 0 : v.listen_duration) -
                            (null == v ? void 0 : v.last_listen_duration) ==
                          0
                          ? "与昨日持平"
                          : "比昨日"
                              .concat(
                                (null == v ? void 0 : v.listen_duration) -
                                  (null == v
                                    ? void 0
                                    : v.last_listen_duration) >
                                  0
                                  ? "多"
                                  : "少",
                              )
                              .concat(
                                (0, S.rI)(
                                  null == v ? void 0 : v.listen_duration,
                                  null == v ? void 0 : v.last_listen_duration,
                                ),
                              )
                        : (null == v ? void 0 : v.duration_defeat_percent) > 0
                          ? "超过".concat(
                              (0, S.rl)(
                                (null == v
                                  ? void 0
                                  : v.duration_defeat_percent) / 100,
                              ),
                              "的人",
                            )
                          : "随性听歌，chill一下",
                    icon: L.src,
                    compareType:
                      0 === u
                        ? (null == v ? void 0 : v.listen_duration) -
                            (null == v ? void 0 : v.last_listen_duration) ==
                          0
                          ? "fair"
                          : (null == v ? void 0 : v.listen_duration) -
                                (null == v ? void 0 : v.last_listen_duration) >
                              0
                            ? "up"
                            : "down"
                        : (null == v ? void 0 : v.duration_defeat_percent) > 0
                          ? "up"
                          : "",
                    type: "listenTime",
                    isShow: 3 !== u && (null == v ? void 0 : v.listen_duration),
                  },
                  {
                    style: {
                      backgroundImage:
                        "linear-gradient(0deg, #FFF3F3 0%, #FFD9D9 100%)",
                      width: (0, S.ht)(320),
                      height: 3 === u ? (0, S.ht)(162) : (0, S.ht)(216),
                    },
                    title: "听歌总数",
                    content: null == v ? void 0 : v.listen_total,
                    subContent: "首",
                    tip:
                      3 === u
                        ? ""
                        : (null == v ? void 0 : v.listen_total) -
                              (null == v ? void 0 : v.last_listen_total) ==
                            0
                          ? "与"
                              .concat(0 === u ? "昨" : "上")
                              .concat(g.En[u], "持平")
                          : ""
                              .concat(
                                (null == v ? void 0 : v.listen_total) -
                                  (null == v ? void 0 : v.last_listen_total) >
                                  0
                                  ? "多"
                                  : "少",
                              )
                              .concat(0 === u ? "昨" : "上")
                              .concat(g.En[u])
                              .concat(
                                Math.abs(
                                  (null == v ? void 0 : v.listen_total) -
                                    (null == v ? void 0 : v.last_listen_total),
                                ),
                                "首",
                              ),
                    icon: M.src,
                    type: "listenTotal",
                    compareType:
                      (null == v ? void 0 : v.listen_total) -
                        (null == v ? void 0 : v.last_listen_total) ==
                      0
                        ? "fair"
                        : (null == v ? void 0 : v.listen_total) -
                              (null == v ? void 0 : v.last_listen_total) >
                            0
                          ? "up"
                          : "down",
                    isShow: 3 !== u && (null == v ? void 0 : v.listen_total),
                  },
                  {
                    style: {
                      backgroundImage:
                        "linear-gradient(180deg, rgba(166,237,156,0.5) 0%, rgba(224,240,219,0.5) 100%)",
                      width: (0, S.ht)(320),
                      height: (0, S.ht)(223),
                    },
                    title: "听歌活跃时段",
                    content:
                      g.Rj[null == v ? void 0 : v.most_active_period_type],
                    subContent:
                      g.KM[null == v ? void 0 : v.most_active_period_type],
                    tip: g.Yu[null == v ? void 0 : v.most_active_period_type],
                    type: "listenPeriod",
                    isShow:
                      (null == v ? void 0 : v.most_active_period_type) &&
                      (null == v ? void 0 : v.most_active_period_type) &&
                      (1 === u || 2 === u),
                  },
                  {
                    style: {
                      backgroundImage:
                        "linear-gradient(180deg, #FFF6A8 0%, #FCF9DD 80%)",
                      width: (0, S.ht)(320),
                      height: (0, S.ht)(325),
                    },
                    title: "最晚听歌",
                    content:
                      null ===
                        (d = (0, S.xV)(
                          null == v
                            ? void 0
                            : null === (_ = v.latest_date) || void 0 === _
                              ? void 0
                              : _.ts,
                        )) || void 0 === d
                        ? void 0
                        : d.dateStr,
                    tip: "".concat(
                      null ===
                        (m = (0, S.xV)(
                          null == v
                            ? void 0
                            : null === (p = v.latest_date) || void 0 === p
                              ? void 0
                              : p.ts,
                        )) || void 0 === m
                        ? void 0
                        : m.time,
                      "在听",
                    ),
                    subTip: (0, x.jsx)(Y.Z, {
                      width: 180,
                      targetText:
                        null == v
                          ? void 0
                          : null === (h = v.latest_date) || void 0 === h
                            ? void 0
                            : null === (f = h.song_info) || void 0 === f
                              ? void 0
                              : f.name,
                      keepText: ["《", "》"],
                      style: { fontSize: 26 },
                    }),
                    cover: (0, V.replaceHttpsImg)(
                      (null == v
                        ? void 0
                        : null === (A = v.latest_date) || void 0 === A
                          ? void 0
                          : null === (j = A.song_info) || void 0 === j
                            ? void 0
                            : null === (w = j.cover) || void 0 === w
                              ? void 0
                              : w.replace("{size}", 150)) || F.Z.src,
                    ),
                    type: "listenLatest",
                    jumpType: "latest_date",
                    isShow:
                      (null == v
                        ? void 0
                        : null === (k = v.latest_date) || void 0 === k
                          ? void 0
                          : k.song_info) &&
                      (1 === u || 2 === u),
                    onClick: function (e) {
                      if ("share" !== o) {
                        e && e.stopPropagation();
                        var n,
                          t,
                          i =
                            null == v
                              ? void 0
                              : null === (n = v.latest_date) || void 0 === n
                                ? void 0
                                : null === (t = n.song_info) || void 0 === t
                                  ? void 0
                                  : t.mixsongid;
                        (r("听歌小结", {
                          svar2: "最晚听歌",
                          svar3: "播放",
                          svar5: i,
                        }),
                          (0, S._n)(i));
                      }
                    },
                  },
                  {
                    style: {
                      backgroundImage:
                        "linear-gradient(0deg, #E1F9FF 0%, #9DDEEE 97%)",
                      width: (0, S.ht)(320),
                      height: (0, S.ht)(427),
                    },
                    title: "最爱歌手",
                    jumpType: "singer",
                    content: (0, x.jsx)(Y.Z, {
                      width: 227,
                      targetText:
                        3 === u
                          ? null == n
                            ? void 0
                            : null === (N = n.top_singer) || void 0 === N
                              ? void 0
                              : N.name
                          : null == v
                            ? void 0
                            : null === (C = v.rank_singer) || void 0 === C
                              ? void 0
                              : null === (I = C[0]) || void 0 === I
                                ? void 0
                                : null === (E = I.singer_info) || void 0 === E
                                  ? void 0
                                  : E.name,
                      style: { fontSize: 44 },
                    }),
                    tip: "你的热爱让TA闪闪发光",
                    avatar: (0, V.replaceHttpsImg)(
                      3 === u
                        ? null == n
                          ? void 0
                          : null === (D = n.top_singer) || void 0 === D
                            ? void 0
                            : null === (R = D.img) || void 0 === R
                              ? void 0
                              : R.replace("{size}", 150)
                        : (null == v
                            ? void 0
                            : null === (T = v.rank_singer) || void 0 === T
                              ? void 0
                              : null === (Z = T[0]) || void 0 === Z
                                ? void 0
                                : null === (W = Z.singer_info) || void 0 === W
                                  ? void 0
                                  : null === (O = W.avatar) || void 0 === O
                                    ? void 0
                                    : O.replace("{size}", 150)) || P.Z.src,
                    ),
                    type: "favSinger",
                    isShow:
                      3 === u
                        ? null == n
                          ? void 0
                          : n.top_singer
                        : null == v
                          ? void 0
                          : null === (B = v.rank_singer) || void 0 === B
                            ? void 0
                            : null === (U = B[0]) || void 0 === U
                              ? void 0
                              : U.singer_info,
                    onClick: function () {
                      var e, t, i, a, l, r, s, c;
                      "share" !== o &&
                        V.LightMobileCall.mobileCall(
                          g.x8.categoryJumpSingerPage,
                          {
                            singerId:
                              3 === u
                                ? null == n
                                  ? void 0
                                  : null === (e = n.top_singer) || void 0 === e
                                    ? void 0
                                    : e.id
                                : null == v
                                  ? void 0
                                  : null === (t = v.rank_singer) || void 0 === t
                                    ? void 0
                                    : null === (i = t[0]) || void 0 === i
                                      ? void 0
                                      : null === (a = i.singer_info) ||
                                          void 0 === a
                                        ? void 0
                                        : a.singer_id,
                            singerName:
                              3 === u
                                ? null == n
                                  ? void 0
                                  : null === (l = n.top_singer) || void 0 === l
                                    ? void 0
                                    : l.name
                                : null == v
                                  ? void 0
                                  : null === (r = v.rank_singer) || void 0 === r
                                    ? void 0
                                    : null === (s = r[0]) || void 0 === s
                                      ? void 0
                                      : null === (c = s.singer_info) ||
                                          void 0 === c
                                        ? void 0
                                        : c.name,
                          },
                        );
                    },
                  },
                  {
                    style: {
                      backgroundImage:
                        "linear-gradient(180deg, #FCDFF6 0%, #FAF0F7 100%)",
                      width: (0, S.ht)(320),
                      height: (0, S.ht)(325),
                    },
                    title: "最爱歌曲",
                    content: (0, x.jsx)(Y.Z, {
                      width: 227,
                      targetText:
                        3 === u
                          ? null == n
                            ? void 0
                            : null === (H = n.rank_song) || void 0 === H
                              ? void 0
                              : null === (z = H[0]) || void 0 === z
                                ? void 0
                                : z.title
                          : null == v
                            ? void 0
                            : null === (G = v.rank_song) || void 0 === G
                              ? void 0
                              : null === (Q = G[0]) || void 0 === Q
                                ? void 0
                                : null === (K = Q.song_info) || void 0 === K
                                  ? void 0
                                  : K.name,
                      style: { fontSize: 44 },
                    }),
                    tip: "好旋律值得铭记",
                    cover: (0, V.replaceHttpsImg)(
                      (3 === u
                        ? null == n
                          ? void 0
                          : null === (J = n.rank_song) || void 0 === J
                            ? void 0
                            : null === (q = J[0]) || void 0 === q
                              ? void 0
                              : null === (X = q.cover) || void 0 === X
                                ? void 0
                                : X.replace("{size}", 150)
                        : null == v
                          ? void 0
                          : null === ($ = v.rank_song) || void 0 === $
                            ? void 0
                            : null === (ee = $[0]) || void 0 === ee
                              ? void 0
                              : null === (en = ee.song_info) || void 0 === en
                                ? void 0
                                : null === (et = en.cover) || void 0 === et
                                  ? void 0
                                  : et.replace("{size}", 150)) || F.Z.src,
                    ),
                    type: "favSong",
                    isShow:
                      3 === u
                        ? null == n
                          ? void 0
                          : null === (ei = n.rank_song) || void 0 === ei
                            ? void 0
                            : ei[0]
                        : null == v
                          ? void 0
                          : null === (eo = v.rank_song) || void 0 === eo
                            ? void 0
                            : eo[0],
                    onClick: function (e) {
                      if ("share" !== o) {
                        e && e.stopPropagation();
                        var t,
                          i,
                          a,
                          l,
                          s,
                          c =
                            3 === u
                              ? null == n
                                ? void 0
                                : null === (t = n.rank_song) || void 0 === t
                                  ? void 0
                                  : null === (i = t[0]) || void 0 === i
                                    ? void 0
                                    : i.id
                              : null == v
                                ? void 0
                                : null === (a = v.rank_song) || void 0 === a
                                  ? void 0
                                  : null === (l = a[0]) || void 0 === l
                                    ? void 0
                                    : null === (s = l.song_info) || void 0 === s
                                      ? void 0
                                      : s.mixsongid;
                        (r("听歌小结", {
                          svar2: "最晚听歌",
                          svar3: "播放",
                          svar5: c,
                        }),
                          (0, S._n)(c));
                      }
                    },
                  },
                ].filter(function (e) {
                  return e.isShow;
                }),
                er = el.filter(function (e, n) {
                  return !(n % 2);
                }),
                es = el.filter(function (e, n) {
                  return n % 2;
                });
              return (ea.push(er), ea.push(es), ea);
            };
          return (0, x.jsxs)(
            "div",
            {
              className: s()(d().wrap, [d()[j || f]], [d()[o]]),
              id: "overview",
              children: [
                (0, x.jsx)("p", {
                  className: s()(
                    d().title,
                    (0, i.Z)(
                      {},
                      d().title_day,
                      0 === u && (f === g.lu.NORMAL || f === g.lu.BLACK),
                    ),
                  ),
                  children: "听歌小结",
                }),
                f === g.lu.MAGAZINE &&
                  (0, x.jsx)("div", { className: "divider" }),
                (function () {
                  var e, t, l, s, c, _, m, p, h, f, w;
                  switch (j) {
                    case "normal":
                    case "black":
                      return (0, x.jsx)(x.Fragment, {
                        children: (0, x.jsxs)("div", {
                          children: [
                            (1 === u || 2 === u) &&
                              (0, x.jsx)(A, {
                                type: o,
                                yearData: n,
                                clickMobileLog: r,
                              }),
                            3 === u &&
                              (0, x.jsx)(U.Z, {
                                type: o,
                                yearData: n,
                                clickMobileLog: r,
                              }),
                            (0, x.jsx)("div", {
                              className: d().modules,
                              children: k().map(function (e, n) {
                                return (0, x.jsxs)(
                                  a().Fragment,
                                  {
                                    children: [
                                      ((null == e ? void 0 : e.type) ===
                                        "songTitle" &&
                                        !!(null != e && e.isShow) &&
                                        (0, x.jsx)(C, { data: e })) ||
                                        null,
                                      (null == e ? void 0 : e.type) !==
                                        "songTitle" &&
                                        (0, x.jsx)(
                                          "div",
                                          {
                                            children: e.map(function (e) {
                                              return e.isShow
                                                ? (0, x.jsx)(
                                                    "div",
                                                    {
                                                      className: d().bg,
                                                      onClick: function () {
                                                        return r("听歌小结", {
                                                          svar2: e.title,
                                                        });
                                                      },
                                                      children: (0, x.jsx)(C, {
                                                        data: e,
                                                      }),
                                                    },
                                                    e.type,
                                                  )
                                                : null;
                                            }),
                                          },
                                          n,
                                        ),
                                    ],
                                  },
                                  n,
                                );
                              }),
                            }),
                          ],
                        }),
                      });
                    case "magazine":
                      return (0, x.jsxs)(x.Fragment, {
                        children: [
                          0 !== u &&
                            3 !== u &&
                            ((0, S.rf)(b, u) || !b) &&
                            (null === (e = y()) || void 0 === e
                              ? void 0
                              : e.content) &&
                            (0, x.jsxs)("div", {
                              className: d().listenTitle,
                              children: [
                                (0, x.jsxs)("p", {
                                  className: "impact_cn",
                                  children: [
                                    "#",
                                    0 === u ? "今" : "本",
                                    g.En[u],
                                    "音乐称号",
                                  ],
                                }),
                                (0, x.jsx)("div", {
                                  className: d().content,
                                  children:
                                    null === (t = y()) || void 0 === t
                                      ? void 0
                                      : t.content,
                                }),
                                (0, x.jsx)("div", {
                                  className: d().tip,
                                  children:
                                    null === (l = y()) || void 0 === l
                                      ? void 0
                                      : l.tip,
                                }),
                              ],
                            }),
                          (0, x.jsx)(eo, { type: o }),
                          0 !== u &&
                            (0, x.jsx)(er, {
                              arr: [
                                {
                                  label: "#连续听歌",
                                  value:
                                    null == v ? void 0 : v.continue_listen_days,
                                  day: "天",
                                  valueText:
                                    null == v ? void 0 : v.continue_listen_days,
                                },
                                {
                                  label: "#听歌活跃时段",
                                  value:
                                    null == v
                                      ? void 0
                                      : v.most_active_period_type,
                                  valueText: "".concat(
                                    g.KM[
                                      null == v
                                        ? void 0
                                        : v.most_active_period_type
                                    ],
                                  ),
                                },
                                ((w = {
                                  label: "#最晚听歌",
                                  value:
                                    null == v
                                      ? void 0
                                      : null === (s = v.latest_date) ||
                                          void 0 === s
                                        ? void 0
                                        : s.ts,
                                  valueText: "天",
                                }),
                                (0, i.Z)(
                                  w,
                                  "valueText",
                                  null ===
                                    (c = (0, S.xV)(
                                      null == v
                                        ? void 0
                                        : null === (_ = v.latest_date) ||
                                            void 0 === _
                                          ? void 0
                                          : _.ts,
                                    )) || void 0 === c
                                    ? void 0
                                    : c.dateStrMagazine,
                                ),
                                (0, i.Z)(
                                  w,
                                  "tip",
                                  "".concat(
                                    null ===
                                      (m = (0, S.xV)(
                                        null == v
                                          ? void 0
                                          : null === (p = v.latest_date) ||
                                              void 0 === p
                                            ? void 0
                                            : p.ts,
                                      )) || void 0 === m
                                      ? void 0
                                      : m.time,
                                    "还在听",
                                  ),
                                ),
                                (0, i.Z)(
                                  w,
                                  "subTip",
                                  (0, x.jsx)(Y.Z, {
                                    width: 200,
                                    targetText:
                                      null == v
                                        ? void 0
                                        : null === (h = v.latest_date) ||
                                            void 0 === h
                                          ? void 0
                                          : null === (f = h.song_info) ||
                                              void 0 === f
                                            ? void 0
                                            : f.name,
                                    keepText: ["《", "》"],
                                    style: { fontSize: 24 },
                                  }),
                                ),
                                w),
                              ].filter(function (e) {
                                return e.value > 0;
                              }),
                            }),
                        ],
                      });
                    default:
                      return (0, x.jsx)(x.Fragment, {});
                  }
                })(),
                "share" !== o &&
                  (0, x.jsx)("div", {
                    className: d().btn,
                    onClick: function () {
                      r("听歌小结", { svar3: "分享我的听歌小结" });
                      var e,
                        n = ""
                          .concat(window.location.origin)
                          .concat(
                            window.location.pathname.replace("home", "share"),
                            "?ssr_header_param=",
                          )
                          .concat(g.Dc, "&ssr_url_param=")
                          .concat(g.By, "&isHideTitleBar=1&dimension=")
                          .concat(u, "&date=")
                          .concat(
                            null == p ? void 0 : p.format("YYYYMMDD"),
                            "&shareModule=0&duration=",
                          )
                          .concat(h, "&grade=")
                          .concat(
                            null == v
                              ? void 0
                              : null === (e = v.grade_info) || void 0 === e
                                ? void 0
                                : e.p_grade,
                            "&hreffrom=听歌小结",
                          );
                      V.LightMobileCall.mobileCall(g.x8.openURL, {
                        isFullScreen: 1,
                        url: n,
                      });
                    },
                    children: "分享我的听歌小结",
                  }),
              ],
            },
            "ListenSummary",
          );
        }),
      );
    },
    37994: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return P;
        },
      });
      var i = t(37667),
        o = t(33562),
        a = t(81027),
        l = t.n(a),
        r = t(93239),
        s = t(67188),
        c = t.n(s),
        d = t(2266),
        u = t(11284),
        v = t(48530),
        _ = t(93452),
        g = t(12520),
        m = t(25965),
        p = (0, _.Z)(
          (0, o.Pi)(function (e) {
            var n,
              t,
              o,
              a,
              l,
              r,
              s,
              _,
              p = e.type,
              h = e.stores,
              f = e.jumpSinger,
              x = h.dataStore,
              A = x.statistics;
            x.dimension;
            var b = (0, i.useState)(!1),
              j = b[0],
              y = b[1],
              w = (0, i.useMemo)(
                function () {
                  var e;
                  return (
                    "share" !== p &&
                    (!(
                      (null == A
                        ? void 0
                        : null === (e = A.new_follow_singer) || void 0 === e
                          ? void 0
                          : e.total) > 1
                    ) ||
                      !!j)
                  );
                },
                [p, A, j],
              );
            return (
              (0, i.useEffect)(function () {
                (0, g.pc)([
                  { platform: "android", version: 11069 },
                  { platform: "ios", version: 11069 },
                ]).then(function (e) {
                  y(!!e);
                });
              }, []),
              (0, m.jsxs)("div", {
                className: c().wrap,
                onClick: void 0 === f ? function () {} : f,
                children: [
                  (0, m.jsxs)("div", {
                    className: c().title,
                    children: [
                      "新关注歌手",
                      w && (0, m.jsx)("img", { alt: "", src: d.Z.src }),
                    ],
                  }),
                  (0, m.jsxs)("div", {
                    className: c().count,
                    children: [
                      (0, m.jsx)("span", {
                        children:
                          null == A
                            ? void 0
                            : null === (n = A.new_follow_singer) || void 0 === n
                              ? void 0
                              : n.total,
                      }),
                      "个",
                    ],
                  }),
                  (0, m.jsxs)("div", {
                    className: c().singerName,
                    children: [
                      null == A
                        ? void 0
                        : null === (t = A.new_follow_singer) || void 0 === t
                          ? void 0
                          : null === (o = t.latest_singer_infos) || void 0 === o
                            ? void 0
                            : null === (a = o[0]) || void 0 === a
                              ? void 0
                              : a.name,
                      (null == A
                        ? void 0
                        : null === (l = A.new_follow_singer) || void 0 === l
                          ? void 0
                          : l.total) > 1
                        ? "等"
                        : "",
                    ],
                  }),
                  (0, m.jsx)("div", {
                    className: c().coverWrap,
                    children:
                      null == A
                        ? void 0
                        : null === (r = A.new_follow_singer) || void 0 === r
                          ? void 0
                          : null === (s = r.latest_singer_infos) || void 0 === s
                            ? void 0
                            : null === (_ = s.slice(0, 3)) || void 0 === _
                              ? void 0
                              : _.map(function (e, n) {
                                  var t;
                                  return (0, m.jsx)(
                                    "div",
                                    {
                                      className: c().cover,
                                      style: { zIndex: n },
                                      children: (0, m.jsx)("img", {
                                        alt: "",
                                        src:
                                          (0, u.replaceHttpsImg)(
                                            null == e
                                              ? void 0
                                              : null === (t = e.avatar) ||
                                                  void 0 === t
                                                ? void 0
                                                : t.replace("{size}", 150),
                                          ) || v.Z.src,
                                      }),
                                    },
                                    n,
                                  );
                                }),
                  }),
                ],
              })
            );
          }),
        ),
        h = t(76792),
        f = t(17468),
        x = t(82628),
        A = t.n(x),
        b = t(21153),
        j = t.n(b),
        y = t(57186),
        w = t(22239),
        k = t(42240),
        N = t(93967),
        C = t.n(N),
        S = t(55500),
        L = t(55616),
        M = t(45225),
        I = (0, _.Z)(
          (0, o.Pi)(function (e) {
            var n,
              t,
              o,
              a,
              l,
              s,
              c,
              _,
              g,
              p,
              x,
              b = e.needFollow,
              N = e.yearData,
              I = e.type,
              E = e.stores,
              D = e.clickMobileLog,
              R = e._skin,
              T = E.dataStore,
              Z = (0, M.Z)({ dataStore: T }).mobileLog,
              W = T.statistics,
              O = T.followList,
              B = T.dimension,
              V = T.skin,
              F = T.date,
              P = (0, i.useState)(O),
              U = P[0],
              Y = P[1];
            (0, i.useEffect)(function () {
              (u.LightMobileCall.KgWebMobileCall(
                "KgWebMobileCall.pageStatusNew",
                function (e) {
                  e &&
                    3 ==
                      +(e = "string" == typeof e ? JSON.parse(e) : e).status &&
                    H();
                },
              ),
                b && !T.followList && H());
            }, []);
            var H =
                ((n = (0, f.Z)(
                  A().mark(function e() {
                    var n, t, i, o, a, l;
                    return A().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return ((e.next = 2), (0, k.zd)());
                          case 2:
                            (null == (t = e.sent)
                              ? void 0
                              : null === (n = t.data) || void 0 === n
                                ? void 0
                                : n.status) === 1 &&
                              ((l =
                                null == t
                                  ? void 0
                                  : null === (i = t.data) || void 0 === i
                                    ? void 0
                                    : null === (o = i.data) || void 0 === o
                                      ? void 0
                                      : null === (a = o.list) || void 0 === a
                                        ? void 0
                                        : a.map(function (e) {
                                            return e.singerid;
                                          })),
                              T.setFollowList(l),
                              Y(l));
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return n.apply(this, arguments);
                }),
              z = function (e, n) {
                "share" !== I &&
                  u.LightMobileCall.mobileCall(r.x8.categoryJumpSingerPage, {
                    singerId: e,
                    singerName: n,
                  });
              },
              G = function (e, n, t) {
                if (n) {
                  (L.Z.confirm({
                    isDark: V === r.lu.BLACKV2,
                    title: "取消关注",
                    content: (0, m.jsxs)(m.Fragment, {
                      children: [
                        "取消后，关注时长将清零。",
                        (0, m.jsx)("br", {}),
                        "确定取消关注？",
                      ],
                    }),
                    confirmText: "确定取消",
                    cancelText: "继续关注",
                    confirmBtnStyle: { color: "#EE6655" },
                    onConfirm: function () {
                      return Q(e, n, t);
                    },
                  }),
                    e && e.stopPropagation && e.stopPropagation());
                  return;
                }
                Q(e, n, t);
              },
              Q =
                ((t = (0, f.Z)(
                  A().mark(function e(n, t, i) {
                    var o, a, l, s;
                    return A().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (n && n.stopPropagation(),
                              D(
                                3 === B
                                  ? "年度歌手"
                                  : ""
                                      .concat(0 === B ? "今" : "本")
                                      .concat(r.En[B], "歌手"),
                                {
                                  svar2: "歌手收听榜",
                                  svar3: t ? "已关注" : "关注",
                                  svar4: i,
                                },
                              ),
                              !t)
                            ) {
                              e.next = 9;
                              break;
                            }
                            return ((e.next = 5), (0, k.fv)({ singerid: i }));
                          case 5:
                            ((null == (a = e.sent)
                              ? void 0
                              : null === (o = a.data) || void 0 === o
                                ? void 0
                                : o.status) === 1
                              ? ((0, w.FN)("取消关注成功"),
                                Z({
                                  a: 1131811,
                                  b: "点击",
                                  svar1: "收听歌手",
                                  svar2: "歌手收听榜",
                                  svar3: "取消关注歌手",
                                  svar5: i,
                                }))
                              : (0, w.FN)("取消关注失败"),
                              (e.next = 13));
                            break;
                          case 9:
                            return ((e.next = 11), (0, k.ZN)({ singerid: i }));
                          case 11:
                            (null == (s = e.sent)
                              ? void 0
                              : null === (l = s.data) || void 0 === l
                                ? void 0
                                : l.status) === 1
                              ? ((0, w.FN)("关注成功"),
                                Z({
                                  a: 1131811,
                                  b: "点击",
                                  svar1: "收听歌手",
                                  svar2: "歌手收听榜",
                                  svar3: "关注歌手",
                                  svar5: i,
                                }))
                              : (0, w.FN)("关注失败");
                          case 13:
                            H();
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (e, n, i) {
                  return t.apply(this, arguments);
                });
            return (0, m.jsx)("div", {
              className: C()(j().wrap, [j()[R || V]]),
              children:
                3 === B
                  ? (0, m.jsx)(m.Fragment, {
                      children: (0, m.jsxs)("div", {
                        className: j().yearWrap,
                        children: [
                          (0, m.jsxs)("div", {
                            className: j().yearInfo,
                            children: [
                              (0, m.jsx)("div", {
                                className: j().yearCover,
                                onClick: function () {
                                  var e, n;
                                  return z(
                                    null == N
                                      ? void 0
                                      : null === (e = N.top_singer) ||
                                          void 0 === e
                                        ? void 0
                                        : e.id,
                                    null == N
                                      ? void 0
                                      : null === (n = N.top_singer) ||
                                          void 0 === n
                                        ? void 0
                                        : n.name,
                                  );
                                },
                                children: (0, m.jsx)("img", {
                                  alt: "",
                                  src:
                                    (0, u.replaceHttpsImg)(
                                      null == N
                                        ? void 0
                                        : null === (o = N.top_singer) ||
                                            void 0 === o
                                          ? void 0
                                          : null === (a = o.img) || void 0 === a
                                            ? void 0
                                            : a.replace("{size}", 150),
                                    ) || v.Z.src,
                                }),
                              }),
                              (0, m.jsxs)("div", {
                                children: [
                                  (0, m.jsx)("div", {
                                    className: j().yearName,
                                    children: (0, m.jsx)(S.Z, {
                                      width: 227,
                                      targetText:
                                        3 === B
                                          ? null == N
                                            ? void 0
                                            : null === (l = N.top_singer) ||
                                                void 0 === l
                                              ? void 0
                                              : l.name
                                          : null == W
                                            ? void 0
                                            : null === (s = W.rank_singer) ||
                                                void 0 === s
                                              ? void 0
                                              : null === (c = s[0]) ||
                                                  void 0 === c
                                                ? void 0
                                                : null ===
                                                      (_ = c.singer_info) ||
                                                    void 0 === _
                                                  ? void 0
                                                  : _.name,
                                      style: { fontSize: 44 },
                                    }),
                                  }),
                                  (0, m.jsxs)("div", {
                                    className: j().yearCount,
                                    children: [
                                      "播放",
                                      (0, m.jsx)("span", {
                                        children:
                                          (null == N
                                            ? void 0
                                            : null === (g = N.top_singer) ||
                                                void 0 === g
                                              ? void 0
                                              : g.plays) || 1,
                                      }),
                                      "首",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          b &&
                            (0, m.jsx)("div", {
                              className: j().btn,
                              style: {
                                width: (0, w.ht)(110),
                                height: (0, w.ht)(50),
                              },
                              onClick: function (e) {
                                var n;
                                return G(
                                  e,
                                  null == U
                                    ? void 0
                                    : U.some(function (e) {
                                        var n;
                                        return (
                                          Number(e) ===
                                          Number(
                                            null == N
                                              ? void 0
                                              : null === (n = N.top_singer) ||
                                                  void 0 === n
                                                ? void 0
                                                : n.id,
                                          )
                                        );
                                      }),
                                  null == N
                                    ? void 0
                                    : null === (n = N.top_singer) ||
                                        void 0 === n
                                      ? void 0
                                      : n.id,
                                );
                              },
                              children:
                                null != U &&
                                U.some(function (e) {
                                  var n;
                                  return (
                                    Number(e) ===
                                    Number(
                                      null == N
                                        ? void 0
                                        : null === (n = N.top_singer) ||
                                            void 0 === n
                                          ? void 0
                                          : n.id,
                                    )
                                  );
                                })
                                  ? "已关注"
                                  : "关注",
                            }),
                        ],
                      }),
                    })
                  : (0, m.jsxs)(m.Fragment, {
                      children: [
                        (0, m.jsxs)("div", {
                          className: j().title,
                          onClick: function () {
                            if ("share" !== I) {
                              D(
                                3 === B
                                  ? "年度歌手"
                                  : ""
                                      .concat(0 === B ? "今" : "本")
                                      .concat(r.En[B], "歌手"),
                                { svar2: "歌手收听榜" },
                              );
                              var e = ""
                                .concat(window.location.origin)
                                .concat(
                                  window.location.pathname.replace(
                                    "home",
                                    "rank",
                                  ),
                                  "?ssr_header_param=",
                                )
                                .concat(r.Dc, "&ssr_url_param=")
                                .concat(r.By, "&isHideTitleBar=1&dimension=")
                                .concat(B, "&date=")
                                .concat(
                                  null == F ? void 0 : F.format("YYYYMMDD"),
                                  "&rankType=",
                                )
                                .concat(r.Jd.SINGER, "&skin=")
                                .concat(V);
                              u.LightMobileCall.mobileCall(r.x8.openURL, {
                                isFullScreen: 1,
                                url: e,
                              });
                            }
                          },
                          children: [
                            "歌手收听榜",
                            "share" !== I &&
                              (0, m.jsx)("img", {
                                alt: "",
                                src: V === r.lu.BLACK ? y.Z.src : d.Z.src,
                              }),
                          ],
                        }),
                        (0, m.jsx)("div", {
                          className: j().singerWrap,
                          children:
                            null == W
                              ? void 0
                              : null === (p = W.rank_singer) || void 0 === p
                                ? void 0
                                : null === (x = p.slice(0, 3)) || void 0 === x
                                  ? void 0
                                  : x.map(function (e) {
                                      var n,
                                        t,
                                        i,
                                        o,
                                        a = b
                                          ? null == U
                                            ? void 0
                                            : U.some(function (n) {
                                                var t;
                                                return (
                                                  Number(n) ===
                                                  Number(
                                                    null == e
                                                      ? void 0
                                                      : null ===
                                                            (t =
                                                              e.singer_info) ||
                                                          void 0 === t
                                                        ? void 0
                                                        : t.singer_id,
                                                  )
                                                );
                                              })
                                          : null;
                                      return (0, m.jsxs)(
                                        "div",
                                        {
                                          className: j().singerItem,
                                          children: [
                                            (0, m.jsx)("div", {
                                              className: j().avatar,
                                              onClick: function () {
                                                var n, t;
                                                return z(
                                                  null == e
                                                    ? void 0
                                                    : null ===
                                                          (n = e.singer_info) ||
                                                        void 0 === n
                                                      ? void 0
                                                      : n.singer_id,
                                                  null == e
                                                    ? void 0
                                                    : null ===
                                                          (t = e.singer_info) ||
                                                        void 0 === t
                                                      ? void 0
                                                      : t.name,
                                                );
                                              },
                                              children: (0, m.jsx)("img", {
                                                alt: "",
                                                src:
                                                  (0, u.replaceHttpsImg)(
                                                    null == e
                                                      ? void 0
                                                      : null ===
                                                            (t =
                                                              e.singer_info) ||
                                                          void 0 === t
                                                        ? void 0
                                                        : null ===
                                                              (i = t.avatar) ||
                                                            void 0 === i
                                                          ? void 0
                                                          : i.replace(
                                                              "{size}",
                                                              150,
                                                            ),
                                                  ) || v.Z.src,
                                              }),
                                            }),
                                            (0, m.jsx)("div", {
                                              className: j().singerName,
                                              children: (0, m.jsx)(S.Z, {
                                                width: 140,
                                                targetText:
                                                  null == e
                                                    ? void 0
                                                    : null ===
                                                          (o = e.singer_info) ||
                                                        void 0 === o
                                                      ? void 0
                                                      : o.name,
                                                style: { fontSize: 32 },
                                              }),
                                            }),
                                            (0, m.jsxs)("div", {
                                              className: j().playCount,
                                              children: [
                                                "播放",
                                                (0, m.jsx)("span", {
                                                  children:
                                                    null == e
                                                      ? void 0
                                                      : e.total,
                                                }),
                                                "次",
                                              ],
                                            }),
                                            b &&
                                              (0, m.jsx)("div", {
                                                className: C()(
                                                  j().btn,
                                                  (0, h.Z)({}, j().followed, a),
                                                ),
                                                onClick: function (n) {
                                                  var t;
                                                  return G(
                                                    n,
                                                    a,
                                                    null == e
                                                      ? void 0
                                                      : null ===
                                                            (t =
                                                              e.singer_info) ||
                                                          void 0 === t
                                                        ? void 0
                                                        : t.singer_id,
                                                  );
                                                },
                                                children: a ? "已关注" : "关注",
                                              }),
                                          ],
                                        },
                                        null == e
                                          ? void 0
                                          : null === (n = e.singer_info) ||
                                              void 0 === n
                                            ? void 0
                                            : n.singer_id,
                                      );
                                    }),
                        }),
                      ],
                    }),
            });
          }),
        ),
        E = t(75723),
        D = t(85983),
        R = t.n(D),
        T = t(2851);
      function Z(e) {
        for (
          var n = e.needJumpIcon,
            t = e.total,
            i = e.tips,
            o = e.jumpSinger,
            a = e.avatarArr,
            l = (0, E.Z)(a);
          (null == l ? void 0 : l.length) < 3;
        )
          l.push(null);
        return (0, m.jsxs)("div", {
          className: R().wrap,
          onClick: n ? (void 0 === o ? function () {} : o) : null,
          children: [
            (0, m.jsxs)("div", {
              className: R().left,
              children: [
                (0, m.jsxs)("p", {
                  className: C()(R().title, "impact_cn"),
                  children: [
                    (0, m.jsx)("span", { children: "#新关注歌手" }),
                    n &&
                      (0, m.jsx)("img", {
                        alt: "",
                        src: T.Z.src,
                        className: R().jump,
                      }),
                  ],
                }),
                (0, m.jsxs)("div", {
                  className: C()(R().total, "impact_cn"),
                  children: [(0, m.jsx)("span", { children: t }), "\xa0个"],
                }),
                (0, m.jsx)("div", { className: R().tips, children: i }),
              ],
            }),
            (0, m.jsx)("div", {
              className: R().right,
              children: l.slice(0, 3).map(function (e, n) {
                return (0, m.jsx)(
                  "div",
                  {
                    className: C()(R().avatar, (0, h.Z)({}, R().holder, !e)),
                    style: { zIndex: 3 - n },
                    children:
                      e &&
                      (0, m.jsx)("img", {
                        alt: "",
                        src: (0, u.replaceHttpsImg)(
                          (0, w.Gn)(null == e ? void 0 : e.avatar) || v.Z.src,
                        ),
                      }),
                  },
                  n,
                );
              }),
            }),
            (0, m.jsx)("img", {
              alt: "",
              src: r.Ck.bg_new_singer,
              className: R().bgText,
            }),
          ],
        });
      }
      var W = t(82503),
        O = t.n(W);
      function B(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i));
        }
        return t;
      }
      var V = (0, _.Z)(function (e) {
          var n = e.singerName,
            t = e.singerId,
            i = e.avatar,
            o = e.needJumpIcon,
            a = e.total,
            l = e.stores.dataStore,
            s = l.dimension,
            c = (0, M.Z)({ dataStore: l }).mobileLog,
            d = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              c(
                (function (e) {
                  for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2
                      ? B(Object(t), !0).forEach(function (n) {
                          (0, h.Z)(e, n, t[n]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(t),
                          )
                        : B(Object(t)).forEach(function (n) {
                            Object.defineProperty(
                              e,
                              n,
                              Object.getOwnPropertyDescriptor(t, n),
                            );
                          });
                  }
                  return e;
                })(
                  {
                    a: 1131811,
                    b: "点击",
                    svar1: "收听歌手",
                    svar2: "最爱歌手",
                  },
                  e,
                ),
              );
            };
          return (0, m.jsxs)("div", {
            className: O().wrap,
            onClick: o
              ? function () {
                  (d({ svar3: "点击内容", ivar1: t }),
                    (0, g.rV)({ singerId: t, singerName: n }));
                }
              : null,
            children: [
              (0, m.jsx)("div", {
                className: O().left,
                children: (0, m.jsx)("img", {
                  alt: "",
                  src: (0, u.replaceHttpsImg)((0, w.Gn)(i, 240) || v.Z.src),
                  className: O().avatar,
                }),
              }),
              (0, m.jsxs)("div", {
                className: O().right,
                children: [
                  (0, m.jsxs)("p", {
                    className: C()(O().title, "impact_cn"),
                    children: [
                      (0, m.jsx)("span", { children: "#最爱歌手" }),
                      o &&
                        (0, m.jsx)("img", {
                          alt: "",
                          src: T.Z.src,
                          className: O().jump,
                        }),
                    ],
                  }),
                  (0, m.jsx)("div", {
                    className: O().singerName,
                    children: (0, m.jsx)(S.Z, {
                      width: 360,
                      targetText: n,
                      style: { fontSize: 60 },
                    }),
                  }),
                  (0, m.jsxs)("div", {
                    className: C()(O().tips, "impact_cn"),
                    children: [
                      0 === s || 3 === s ? "今" : "本",
                      r.En[s],
                      "播放",
                      a,
                      "次",
                    ],
                  }),
                ],
              }),
              (0, m.jsx)("img", {
                alt: "",
                src: r.Ck.bg_fav_singer,
                className: O().bgText,
              }),
            ],
          });
        }),
        F = t(75037),
        P = (0, _.Z)(
          (0, o.Pi)(function (e) {
            var n = e.yearData,
              t = e.type,
              i = void 0 === t ? "normal" : t,
              o = e.stores,
              a = e.clickMobileLog,
              s = o.dataStore,
              c = s.dimension,
              d = s.statistics,
              v = s.skin,
              _ = v;
            3 === c && v === r.lu.MAGAZINE && (_ = "black");
            var h = function () {
              var e, n, t, o, l, s, v, _;
              "share" !== i &&
                (a(
                  3 === c
                    ? "年度歌手"
                    : "".concat(0 === c ? "今" : "本").concat(r.En[c], "歌手"),
                  { svar2: "新关注歌手" },
                ),
                (null == d
                  ? void 0
                  : null === (e = d.new_follow_singer) || void 0 === e
                    ? void 0
                    : e.total) > 1
                  ? u.LightMobileCall.mobileCall(r.x8.jumpFriend, { tab: 1 })
                  : (null == d
                      ? void 0
                      : null === (n = d.new_follow_singer) || void 0 === n
                        ? void 0
                        : n.total) === 1 &&
                    u.LightMobileCall.mobileCall(r.x8.categoryJumpSingerPage, {
                      singerId:
                        null == d
                          ? void 0
                          : null === (t = d.new_follow_singer) || void 0 === t
                            ? void 0
                            : null === (o = t.latest_singer_infos) ||
                                void 0 === o
                              ? void 0
                              : null === (l = o[0]) || void 0 === l
                                ? void 0
                                : l.singer_id,
                      singerName:
                        null == d
                          ? void 0
                          : null === (s = d.new_follow_singer) || void 0 === s
                            ? void 0
                            : null === (v = s.latest_singer_infos) ||
                                void 0 === v
                              ? void 0
                              : null === (_ = v[0]) || void 0 === _
                                ? void 0
                                : _.name,
                    }));
            };
            return (0, m.jsxs)(
              "div",
              {
                className: C()(l().wrap, [l()[_ || v]]),
                id: "singerRank",
                children: [
                  (0, m.jsx)("p", {
                    className: l().title,
                    children:
                      3 === c
                        ? "年度歌手"
                        : ""
                            .concat(0 === c ? "今" : "本")
                            .concat(r.En[c], "歌手"),
                  }),
                  v === r.lu.MAGAZINE &&
                    (0, m.jsx)("div", { className: "divider" }),
                  (function () {
                    var e,
                      t,
                      o,
                      s,
                      u,
                      v,
                      f,
                      x,
                      A,
                      b,
                      j,
                      y,
                      w,
                      k,
                      N,
                      C,
                      S,
                      L,
                      M,
                      E,
                      D,
                      R,
                      T,
                      W;
                    switch (_) {
                      case "normal":
                      case "black":
                        return (0, m.jsxs)("div", {
                          children: [
                            3 !== c &&
                              (null == d
                                ? void 0
                                : null === (e = d.new_follow_singer) ||
                                    void 0 === e
                                  ? void 0
                                  : null === (t = e.latest_singer_infos) ||
                                      void 0 === t
                                    ? void 0
                                    : t.length) > 0 &&
                              (0, m.jsx)(p, { type: i, jumpSinger: h }),
                            (3 === c
                              ? null == n
                                ? void 0
                                : n.top_singer
                              : (null == d
                                  ? void 0
                                  : null === (o = d.rank_singer) || void 0 === o
                                    ? void 0
                                    : o.length) > 0) &&
                              (0, m.jsx)(I, {
                                needFollow: "share" !== i,
                                yearData: n,
                                type: i,
                                clickMobileLog: a,
                                _skin: _,
                              }),
                          ],
                        });
                      case "magazine":
                        return (0, m.jsxs)(m.Fragment, {
                          children: [
                            3 !== c &&
                              (null == d
                                ? void 0
                                : null === (s = d.new_follow_singer) ||
                                    void 0 === s
                                  ? void 0
                                  : null === (u = s.latest_singer_infos) ||
                                      void 0 === u
                                    ? void 0
                                    : u.length) > 0 &&
                              (0, m.jsx)(Z, {
                                needJumpIcon: "normal" === i,
                                total:
                                  null == d
                                    ? void 0
                                    : null === (v = d.new_follow_singer) ||
                                        void 0 === v
                                      ? void 0
                                      : v.total,
                                tips: ""
                                  .concat(
                                    null == d
                                      ? void 0
                                      : null === (f = d.new_follow_singer) ||
                                          void 0 === f
                                        ? void 0
                                        : null ===
                                              (x = f.latest_singer_infos) ||
                                            void 0 === x
                                          ? void 0
                                          : null === (A = x[0]) || void 0 === A
                                            ? void 0
                                            : A.name,
                                  )
                                  .concat(
                                    (null == d
                                      ? void 0
                                      : null === (b = d.new_follow_singer) ||
                                          void 0 === b
                                        ? void 0
                                        : b.total) > 1
                                      ? "等"
                                      : "",
                                  ),
                                avatarArr:
                                  null == d
                                    ? void 0
                                    : null === (j = d.new_follow_singer) ||
                                        void 0 === j
                                      ? void 0
                                      : j.latest_singer_infos,
                                jumpSinger: h,
                              }),
                            !!(
                              null != d &&
                              null !== (y = d.rank_song) &&
                              void 0 !== y &&
                              y.length
                            ) &&
                              !!(
                                null != d &&
                                null !== (w = d.rank_song) &&
                                void 0 !== w &&
                                w[0]
                              ) &&
                              (0, m.jsxs)(m.Fragment, {
                                children: [
                                  (0, m.jsx)(V, {
                                    singerName:
                                      null == d
                                        ? void 0
                                        : null === (k = d.rank_singer) ||
                                            void 0 === k
                                          ? void 0
                                          : null === (N = k[0]) || void 0 === N
                                            ? void 0
                                            : null === (C = N.singer_info) ||
                                                void 0 === C
                                              ? void 0
                                              : C.name,
                                    singerId:
                                      null == d
                                        ? void 0
                                        : null === (S = d.rank_singer) ||
                                            void 0 === S
                                          ? void 0
                                          : null === (L = S[0]) || void 0 === L
                                            ? void 0
                                            : null === (M = L.singer_info) ||
                                                void 0 === M
                                              ? void 0
                                              : M.singer_id,
                                    avatar:
                                      null == d
                                        ? void 0
                                        : null === (E = d.rank_singer) ||
                                            void 0 === E
                                          ? void 0
                                          : null === (D = E[0]) || void 0 === D
                                            ? void 0
                                            : null === (R = D.singer_info) ||
                                                void 0 === R
                                              ? void 0
                                              : R.avatar,
                                    needJumpIcon: "normal" === i,
                                    total:
                                      (null == d
                                        ? void 0
                                        : null === (T = d.rank_singer) ||
                                            void 0 === T
                                          ? void 0
                                          : null === (W = T[0]) || void 0 === W
                                            ? void 0
                                            : W.total) || 0,
                                  }),
                                  (0, m.jsxs)("div", {
                                    className: l().cardBody,
                                    children: [
                                      (0, m.jsx)("img", {
                                        alt: "",
                                        className: l().bgText,
                                        src: r.Ck.bg_rank_singer,
                                      }),
                                      (0, m.jsx)(F.Z, {
                                        title: "歌手收听榜",
                                        rankType: r.Jd.SINGER,
                                        arr: null == d ? void 0 : d.rank_singer,
                                        type: "circle",
                                        onItemClick: function (e) {
                                          "normal" === i &&
                                            (0, g.rV)({
                                              singerId:
                                                null == e ? void 0 : e.id,
                                              singerName:
                                                null == e ? void 0 : e.title,
                                            });
                                        },
                                        needIcon: "normal" === i,
                                        needFollow: "normal" === i,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        });
                      default:
                        return (0, m.jsx)(m.Fragment, {});
                    }
                  })(),
                ],
              },
              "Singer",
            );
          }),
        );
    },
    87: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return T;
        },
      });
      var i = t(17468),
        o = t(82628),
        a = t.n(o),
        l = t(37667),
        r = t.n(l),
        s = t(33562),
        c = t(93967),
        d = t.n(c),
        u = t(40784),
        v = t.n(u),
        _ = t(59315),
        g = t.n(_),
        m = t(22239),
        p = t(98875),
        h = t(25965),
        f = (0, s.Pi)(function (e) {
          var n,
            t,
            i = e.yearData,
            o = e.type,
            a = e.stores,
            r = e.maxImgCount,
            s = void 0 === r ? 10 : r,
            c = e.isAnimation,
            u = a.dataStore,
            v = u.dimension,
            _ = u.statistics,
            f = u.skin,
            x =
              null == i
                ? void 0
                : null === (n = i.rank_song) || void 0 === n
                  ? void 0
                  : n.filter(function (e) {
                      return null == e ? void 0 : e.cover;
                    }),
            A =
              null == _
                ? void 0
                : null === (t = _.rank_song) || void 0 === t
                  ? void 0
                  : t.filter(function (e) {
                      var n;
                      return null == e
                        ? void 0
                        : null === (n = e.song_info) || void 0 === n
                          ? void 0
                          : n.cover;
                    }),
            b = (0, l.useMemo)(
              function () {
                var e,
                  n = 3 === v ? x : A;
                (null === (e = n) || void 0 === e ? void 0 : e.length) === 0 &&
                  (n = [{ cover: p.Z.src }]);
                var t = (0, m.o0)(n, s),
                  i = [],
                  o = [];
                return (
                  null == t ||
                    t.forEach(function (e, n) {
                      var t,
                        a =
                          3 === v
                            ? null == e
                              ? void 0
                              : e.cover
                            : null == e
                              ? void 0
                              : null === (t = e.song_info) || void 0 === t
                                ? void 0
                                : t.cover,
                        l = i.length;
                      i.length % 4 == 0 || i.length % 4 == 3
                        ? i.push(
                            (0, h.jsx)(
                              "div",
                              {
                                className: g().img_item_single,
                                children: (0, h.jsx)("img", {
                                  alt: "",
                                  src: (0, m.Yp)(a, 400),
                                  onError: m.k2,
                                }),
                              },
                              l,
                            ),
                          )
                        : (o.push(
                            (0, h.jsx)(
                              "div",
                              {
                                className: g().img_item_slice,
                                children: (0, h.jsx)("img", {
                                  alt: "",
                                  src: (0, m.Yp)(a, 150),
                                  onError: m.k2,
                                }),
                              },
                              l + "_" + o.length,
                            ),
                          ),
                          4 === o.length &&
                            (i.push(
                              (0, h.jsx)(
                                "div",
                                { className: g().img_item, children: o },
                                l,
                              ),
                            ),
                            (o = [])));
                    }),
                  i
                );
              },
              [v, x, A, s],
            ),
            j = function () {
              return b;
            };
          return (0, h.jsx)("div", {
            className: d()(g().wall, g()[void 0 === o ? "normal" : o], g()[f]),
            children: (0, h.jsxs)("div", {
              className: d()(
                g().img_wrapper,
                (void 0 === c || c) && g().img_wrapper_animation,
              ),
              children: [j(), j()],
            }),
          });
        }),
        x = t(55616);
      t(29870);
      var A = t(13298),
        b = t(77813),
        j = t(52599),
        y = t(25821),
        w = t(55136),
        k = t(55578),
        N = t(76792),
        C = t(12211),
        S = t.n(C),
        L = (function (e) {
          (0, y.Z)(i, e);
          var n,
            t =
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
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  t = (0, k.Z)(i);
                if (n) {
                  var o = (0, k.Z)(this).constructor;
                  e = Reflect.construct(t, arguments, o);
                } else e = t.apply(this, arguments);
                return (0, w.Z)(this, e);
              });
          function i(e) {
            var n;
            return (
              (0, A.Z)(this, i),
              (n = t.call(this, e)),
              (0, N.Z)((0, j.Z)(n), "retry", function (e) {
                (e.stopPropagation(),
                  n.setState({ hasError: !1 }),
                  n.props.onRetry && n.props.onRetry());
              }),
              (n.state = {
                hasError: !1,
                showError: void 0 === e.showError || e.showError,
              }),
              n
            );
          }
          return (
            (0, b.Z)(
              i,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, n) {
                    var t, i;
                    (console.warn("PreloadErrorBoundary error: ", e, n),
                      null === (t = this.props) ||
                        void 0 === t ||
                        null === (i = t.onError) ||
                        void 0 === i ||
                        i.call(t));
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props.error;
                    return this.state.hasError
                      ? this.state.showError
                        ? e ||
                          (0, h.jsx)("div", {
                            className: S().wrap,
                            children: (0, h.jsx)("h1", {
                              className: S().text,
                              onClick: this.retry,
                              children: this.props.onRetry
                                ? "加载失败, 点击重试"
                                : "加载失败, 请重试",
                            }),
                          })
                        : null
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { hasError: !0 };
                  },
                },
              ],
            ),
            i
          );
        })(r().PureComponent),
        M = t(93239),
        I = t(11284),
        E = t(93452),
        D = t(12520),
        R = (function e(n, t) {
          var o = r().lazy(n);
          return (
            (o.retry = function () {
              return e(n, t);
            }),
            (o.preload = (0, i.Z)(
              a().mark(function e() {
                return a().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.prev = 0), !t)) {
                            e.next = 6;
                            break;
                          }
                          return ((e.next = 4), t());
                        case 4:
                          e.next = 8;
                          break;
                        case 6:
                          return ((e.next = 8), n());
                        case 8:
                          e.next = 13;
                          break;
                        case 10:
                          ((e.prev = 10),
                            (e.t0 = e.catch(0)),
                            console.error("preload error: ", e.t0));
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 10]],
                );
              }),
            )),
            o
          );
        })(function () {
          return Promise.all([t.e(2603), t.e(9530)]).then(t.bind(t, 93947));
        }),
        T = (0, E.Z)(
          (0, s.Pi)(function (e) {
            var n,
              t,
              o,
              r = e.yearData,
              s = e.type,
              c = e.stores,
              u = e.clickMobileLog,
              _ = e.mobileLog,
              g = e.count,
              p = e.isAnimation,
              A = void 0 === p || p,
              b = e.year;
            e.shareConfig;
            var j = c.dataStore;
            c.appStore.baseInfo;
            var y = j.dimension,
              w = j.date,
              k = j.statistics,
              N = j.skin;
            ((0, l.useRef)(), (0, l.useRef)(null), (0, l.useRef)(null));
            var C = (0, l.useRef)(null),
              S = (0, l.useState)(1),
              E = S[0],
              T = S[1],
              Z = (0, l.useCallback)(
                function () {
                  ((R = R.retry()), T(E + 1));
                },
                [E, R],
              ),
              W =
                ((n = (0, i.Z)(
                  a().mark(function e() {
                    var n, t, i, o, l, s;
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (0, D.PQ)("coverWallToolTipShown", "1"),
                              u(
                                3 === y
                                  ? "年度歌曲"
                                  : ""
                                      .concat(0 === y ? "今" : "本")
                                      .concat(M.En[y], "歌曲"),
                                { svar2: "唱片墙", svar3: "查看我的唱片海报" },
                              ),
                              _({
                                a: 1131814,
                                b: "曝光",
                                ft: M.En[y],
                                svar1: "唱片墙",
                              }),
                              (e.next = 6),
                              (0, m.hj)()
                            );
                          case 6:
                            ((o = e.sent),
                              (l = []),
                              (s =
                                null ===
                                  (n =
                                    3 === y
                                      ? null == r
                                        ? void 0
                                        : null === (t = r.rank_song) ||
                                            void 0 === t
                                          ? void 0
                                          : t.filter(function (e) {
                                              return null == e
                                                ? void 0
                                                : e.cover;
                                            })
                                      : null == k
                                        ? void 0
                                        : null === (i = k.rank_song) ||
                                            void 0 === i
                                          ? void 0
                                          : i.filter(function (e) {
                                              var n;
                                              return null == e
                                                ? void 0
                                                : null === (n = e.song_info) ||
                                                    void 0 === n
                                                  ? void 0
                                                  : n.cover;
                                            })) || void 0 === n
                                  ? void 0
                                  : n.splice(0, 10).map(function (e) {
                                      var n, t, i;
                                      return (
                                        l.push(
                                          3 === y
                                            ? null == e
                                              ? void 0
                                              : e.title
                                            : null == e
                                              ? void 0
                                              : null === (n = e.song_info) ||
                                                  void 0 === n
                                                ? void 0
                                                : n.name,
                                        ),
                                        3 === y
                                          ? ""
                                              .concat(
                                                null == e ? void 0 : e.title,
                                                " - ",
                                              )
                                              .concat(
                                                null == e
                                                  ? void 0
                                                  : e.author_name,
                                              )
                                          : ""
                                              .concat(
                                                null == e
                                                  ? void 0
                                                  : null ===
                                                        (t = e.song_info) ||
                                                      void 0 === t
                                                    ? void 0
                                                    : t.name,
                                                " - ",
                                              )
                                              .concat(
                                                null == e
                                                  ? void 0
                                                  : null ===
                                                        (i = e.song_info) ||
                                                      void 0 === i
                                                    ? void 0
                                                    : i.singer_name,
                                              )
                                      );
                                    })),
                              O({
                                hasBar: o,
                                songNameList: l,
                                songFullNameList: s,
                              }));
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return n.apply(this, arguments);
                }),
              O = function e(n) {
                var t = n.hasBar,
                  i = n.songNameList,
                  o = n.songFullNameList;
                t &&
                  I.LightMobileCall.mobileCall(M.x8.showHideBar, { state: 0 });
                var a = x.Z.show({
                  maskClassName: v().popMask,
                  children: (0, h.jsx)(
                    L,
                    {
                      onRetry: function () {
                        (a.close(),
                          t &&
                            I.LightMobileCall.mobileCall(M.x8.showHideBar, {
                              state: 1,
                            }),
                          Z(),
                          setTimeout(function () {
                            e({
                              hasBar: t,
                              songNameList: i,
                              songFullNameList: o,
                            });
                          }, 10));
                      },
                      children: (0, h.jsx)(l.Suspense, {
                        fallback: (0, h.jsx)("div", {}),
                        children: (0, h.jsx)(R, {
                          stores: c,
                          close: function () {
                            (a.close(),
                              t &&
                                I.LightMobileCall.mobileCall(M.x8.showHideBar, {
                                  state: 1,
                                }));
                          },
                          year: b,
                          yearData: r,
                          statistics: k,
                          songNameList: i,
                          songFullNameList: o,
                          mobileLog: _,
                        }),
                      }),
                    },
                    E,
                  ),
                });
              };
            (0, l.useEffect)(function () {
              R.preload();
            }, []);
            var B =
                null == r
                  ? void 0
                  : null === (t = r.rank_song) || void 0 === t
                    ? void 0
                    : t.filter(function (e) {
                        return null == e ? void 0 : e.cover;
                      }),
              V =
                null == k
                  ? void 0
                  : null === (o = k.rank_song) || void 0 === o
                    ? void 0
                    : o.filter(function (e) {
                        var n;
                        return null == e
                          ? void 0
                          : null === (n = e.song_info) || void 0 === n
                            ? void 0
                            : n.cover;
                      }),
              F = 3 === y ? B : V;
            return (0, h.jsxs)("div", {
              className: d()(v().wrap, v()[N]),
              children: [
                (0, h.jsxs)("div", {
                  className: d()(v().wallWrap, v()[N]),
                  children: [
                    (0, h.jsxs)("div", {
                      className: v().wall,
                      onClick: W,
                      children: [
                        (0, h.jsx)("div", { className: v().wallShadow }),
                        (0, h.jsx)(
                          f,
                          {
                            yearData: r,
                            stores: c,
                            maxImgCount: 10,
                            isAnimation:
                              "boolean" == typeof A ? A : "share" !== s,
                          },
                          "".concat(y, "-").concat(w),
                        ),
                      ],
                    }),
                    (0, h.jsxs)("div", {
                      className: v().totalCount,
                      children: [
                        (0, h.jsx)("span", {
                          className: v().count,
                          children: g || 0,
                        }),
                        (0, h.jsx)("span", { children: "首" }),
                      ],
                    }),
                    "share" !== s &&
                      (null == F ? void 0 : F.length) > 0 &&
                      (0, h.jsx)("div", {
                        className: v().btn,
                        ref: C,
                        onClick: W,
                        children: "生成唱片墙",
                      }),
                  ],
                }),
                null != e && e.children
                  ? (0, h.jsxs)("div", {
                      className: v().paperWrap,
                      children: [
                        (0, h.jsx)("div", { className: v().paperTopShadow }),
                        null == e ? void 0 : e.children,
                        (0, h.jsx)("div", { className: v().paperFooter }),
                      ],
                    })
                  : null,
              ],
            });
          }),
        );
    },
    34903: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return e4;
        },
      });
      var i,
        o,
        a = t(76792),
        l = t(81208),
        r = t(17468),
        s = t(82628),
        c = t.n(s),
        d = t(37667),
        u = t.n(d),
        v = t(33562),
        _ = t(93967),
        g = t.n(_),
        m = t(30898),
        p = t.n(m),
        h = t(75723),
        f = t(62179),
        x = t.n(f),
        A = t(93239),
        b = t(88374),
        j = t(27484),
        y = t.n(j),
        w = t(93452),
        k = t(22239),
        N = function (e, n, t, i, o) {
          var a = e === A.lu.BLACKV2,
            l = i.filter(function (e) {
              return e > 0;
            }),
            r = Math.max.apply(Math, (0, h.Z)(l)),
            s = Math.max.apply(Math, (0, h.Z)(l));
          return {
            tooltip: {
              trigger: "axis",
              axisPointer: { type: "none" },
              showDelay: 0,
              hideDelay: 0,
              padding: 0,
              borderWidth: 0,
              borderRadius: 4,
              backgroundColor: "rgba(255,255,255,0)",
              extraCssText: "z-index:1;box-shadow: none;",
              formatter: function (e) {
                var t,
                  i,
                  l,
                  r,
                  s,
                  c =
                    null == e
                      ? void 0
                      : null === (t = e[0]) || void 0 === t
                        ? void 0
                        : null === (i = t.data) || void 0 === i
                          ? void 0
                          : i.value,
                  d =
                    null == e
                      ? void 0
                      : null === (l = e[0]) || void 0 === l
                        ? void 0
                        : l.dataIndex;
                return void 0 === c || "share" === n || 0 === c
                  ? ""
                  : '<div class="chart-tooltipv2 '
                      .concat(o ? "chart-tooltipv2-week" : "", " ")
                      .concat(
                        a ? "chart-tooltipv2-black" : "",
                        '" onclick="window._echart_tooltip_click && window._echart_tooltip_click(',
                      )
                      .concat(d, ')">\n              <span>')
                      .concat(
                        null === (r = (0, k.WJ)(c)) || void 0 === r
                          ? void 0
                          : r.count,
                        "</span><span>",
                      )
                      .concat(
                        null === (s = (0, k.WJ)(c)) || void 0 === s
                          ? void 0
                          : s.unit,
                        "</span>\n          </div>",
                      );
              },
              position: function (e, n, i, a, l) {
                var r,
                  c,
                  d = 0,
                  u = 0,
                  v = 0.045 * l.viewSize[0],
                  _ = 0.91 * l.viewSize[0],
                  g = l.viewSize[1] - 20 - 8,
                  m = i.offsetWidth,
                  p = i.offsetHeight,
                  h =
                    (null === (r = n[0]) || void 0 === r ? void 0 : r.value) ||
                    0,
                  f = _ / t.length,
                  x =
                    (null === (c = n[0]) || void 0 === c
                      ? void 0
                      : c.dataIndex) || 0,
                  A = g * (h / s);
                ((d = v + (x + 0.5) * f - m / 2), (u = g - A + 8));
                var b = o ? 9 : 5,
                  j = A < p + b;
                if (((u = j ? u - p - b : u + b), o)) {
                  var y = document.querySelector(".chart-tooltipv2-week");
                  y &&
                    (j
                      ? y.classList.add("arrowOnBottom")
                      : y.classList.remove("arrowOnBottom"));
                }
                return [Math.round(d), u];
              },
            },
            animation: "share" !== n,
            grid: { left: "4.5%", right: "4.5%", top: 8, bottom: 20 },
            xAxis: {
              data: [],
              axisLine: {
                show: !0,
                lineStyle: { color: a ? "rgba(255,255,255,0.1)" : "#CCC" },
              },
              axisLabel: {
                show: !0,
                textStyle: { color: a ? "#FFFFFF" : "#000000", fontSize: 9 },
              },
              axisTick: { show: !1 },
              splitLine: {
                show: !0,
                lineStyle: {
                  type: "dashed",
                  color: a ? "rgba(255,255,255,0.3)" : "#CCC",
                  width: 0.5,
                },
              },
            },
            yAxis: {
              type: "value",
              axisLabel: {
                inside: !0,
                show: !0,
                margin: 2,
                color: a ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
                fontSize: 9,
                lineHeight: 14,
                verticalAlign: "top",
                formatter: function (e, n) {
                  return ((s = e), e < r)
                    ? ""
                    : e < 60
                      ? "".concat(e, "秒")
                      : "".concat(Math.ceil((e || 0) / 60), "分钟");
                },
              },
              axisLine: { show: !1 },
              axisTick: { show: !1 },
              splitLine: {
                show: !0,
                lineStyle: {
                  type: "solid",
                  color: a ? "rgba(255,255,255,0.3)" : "#CCC",
                  width: 0.5,
                },
              },
              splitNumber: 2,
            },
            series: [
              {
                type: "bar",
                data: [],
                barMinHeight: 1,
                label: { show: !1 },
                itemStyle: {
                  color: new b.Q.o(0, 0, 0, 1, [
                    { offset: 0, color: "#8EBAFF" },
                    { offset: 1, color: "#87DFFF" },
                  ]),
                },
                barCategoryGap: "20%",
              },
            ],
          };
        },
        C = function (e, n, t, i) {
          A.lu.BLACKV2;
          var o = N(e, n, t, i, !0),
            a = {
              type: "line",
              smooth: !0,
              symbol: "circle",
              symbolSize: 8,
              showSymbol: !1,
              lineStyle: {
                cap: "round",
                join: "round",
                width: 4,
                color: new b.Q.o(0, 0, 1, 0, [
                  { offset: 0, color: "#33C9FF" },
                  { offset: 1, color: "#0077FF" },
                ]),
              },
              itemStyle: { borderWidth: 0 },
              emphasis: {
                scale: 1.15,
                focus: "none",
                itemStyle: {
                  color: "#FFFFFF",
                  borderColor: "#0077FF",
                  borderWidth: 4,
                },
              },
            };
          return ((o.series = [a]), o);
        },
        S = t(25965),
        L = (0, w.Z)(
          (0, v.Pi)(function (e) {
            var n = e.type,
              t = (e.yearData, e.stores),
              i = e.clickMobileLog,
              o = t.dataStore,
              a = t.appStore,
              l = o.dimension,
              r = o.statistics,
              s = o.skin,
              c = o.date,
              u = (0, d.useRef)(!1),
              v = (0, d.useRef)(null),
              _ = null;
            (0, d.useEffect)(
              function () {
                _ || (_ = b.S1(v.current, { renderer: "canvas" }));
                var e = [],
                  t = p(),
                  i = t.x,
                  o = t.y,
                  a = 0;
                (o || []).forEach(function (e, n) {
                  e > 0 && (a = n);
                });
                var r = -1;
                return (
                  (window._echart_tooltip_click = function (e) {
                    e === r
                      ? (_.dispatchAction({ type: "hideTip" }), (r = -1))
                      : (r = e);
                  }),
                  l === A.Sr.WEEK
                    ? (e = C(s, n, i, o))
                    : ((e = N(s, n, i, o)),
                      l === A.Sr.DAY &&
                        ((e.xAxis.axisLabel.interval = 5),
                        (e.xAxis.axisLabel.showMinLabel = !0),
                        (e.xAxis.axisLabel.showMaxLabel = !0),
                        (e.xAxis.axisLabel.formatter = function (e, n) {
                          return e + "点";
                        }))),
                  _.setOption(e),
                  _.on("click", function (e) {
                    m(e, "click");
                  }),
                  _.getZr().on("click", function (e) {
                    !e.target &&
                      r >= 0 &&
                      (_.dispatchAction({ type: "hideTip" }), (r = -1));
                  }),
                  _.on("mouseover", function (e) {
                    return m(e, "mouseover");
                  }),
                  _.on("mouseout", function (e) {
                    return m(e, "mouseout");
                  }),
                  _.on("finished", function () {
                    u.current ||
                      ((u.current = !0),
                      l === A.Sr.WEEK &&
                        _.dispatchAction({
                          type: "showTip",
                          seriesIndex: 0,
                          dataIndex: a,
                        }));
                  }),
                  0 === l
                    ? o.map(function (e, n) {
                        e ===
                          Math.max.apply(
                            Math,
                            (0, h.Z)(
                              o.filter(function (e) {
                                return e >= 0;
                              }),
                            ),
                          ) && m({ dataIndex: n }, "highlight");
                      })
                    : 1 === l
                      ? o.map(function (e, n) {
                          e ===
                            Math.max.apply(
                              Math,
                              (0, h.Z)(
                                o.filter(function (e) {
                                  return e >= 0;
                                }),
                              ),
                            ) && m({ dataIndex: n }, "highlight");
                        })
                      : 2 === l &&
                        i.map(function (e, n) {
                          e === (null == c ? void 0 : c.format("M月")) &&
                            m({ dataIndex: n }, "highlight");
                        }),
                  function () {
                    ((u.current = !1), _ && _.dispose());
                  }
                );
              },
              [r],
            );
            var m = function (e, t) {
                if ("share" !== n || "highlight" === t) {
                  var i = p(),
                    o = i.x,
                    a = i.y;
                  (e.dataIndex,
                    _.setOption({
                      xAxis: { data: o, axisLabel: { show: !0 } },
                      series: [
                        {
                          data:
                            null == a
                              ? void 0
                              : a.map(function (e, n) {
                                  return {
                                    value: e,
                                    dataIndex: n,
                                    emphasis: {
                                      itemStyle: {
                                        opacity:
                                          l === A.Sr.WEEK ? (e ? 1 : 0) : 1,
                                      },
                                    },
                                  };
                                }),
                        },
                      ],
                    }));
                }
              },
              p = function () {
                var e = [],
                  n = [];
                if (0 === l)
                  ((e = ((null == r ? void 0 : r.clocks) || []).map(
                    function (e) {
                      return e.clock;
                    },
                  )),
                    (n = ((null == r ? void 0 : r.clocks) || []).map(
                      function (e) {
                        var n = null == e ? void 0 : e.listen_duration;
                        return void 0 !== n ? n || 0 : void 0;
                      },
                    )));
                else if (1 === l)
                  ((e = ["一", "二", "三", "四", "五", "六", "日"]),
                    (n = Array(7)
                      .fill(0)
                      .map(function (e, n) {
                        return n;
                      })
                      .map(function (e) {
                        var n,
                          t,
                          i =
                            null == r
                              ? void 0
                              : null === (n = r.dates) || void 0 === n
                                ? void 0
                                : null === (t = n[e]) || void 0 === t
                                  ? void 0
                                  : t.listen_duration;
                        return void 0 !== i ? i || 0 : void 0;
                      })));
                else if (2 === l) {
                  var t = a
                    .getServerTimeDayjs()
                    .startOf("month")
                    .startOf("day");
                  ((n = (e = Array(A.QX[A.Sr.MONTH] + 1)
                    .fill(0)
                    .map(function (e, n) {
                      var i = t.clone().subtract(n, "month");
                      return { date: i, str: i.format("YYYYMM01") };
                    })
                    .reverse()).map(function (e) {
                    var n, t;
                    return (
                      (null == r
                        ? void 0
                        : null === (n = r.months) || void 0 === n
                          ? void 0
                          : null ===
                                (t = n.find(function (n) {
                                  return (
                                    "".concat(n.month) === "".concat(e.str)
                                  );
                                })) || void 0 === t
                            ? void 0
                            : t.listen_duration) || 0
                    );
                  })),
                    (e = e.map(function (e) {
                      return y()(e.date).format("M月");
                    })));
                }
                return { x: e, y: n };
              };
            return (0, S.jsxs)("div", {
              className: g()(x().wrap, [x()[s]], e.className),
              onClick: function () {
                "share" !== n && i("听歌小结", { svar2: "图表" });
              },
              children: [
                e.children,
                (0, S.jsx)("div", {
                  ref: v,
                  className: g()(x().chart, e.chartClassName),
                }),
              ],
            });
          }),
        ),
        M = t(35952),
        I = t(11284),
        E = t(55500),
        D = t(87),
        R = t(83841),
        T = t.n(R),
        Z = t(84241),
        W = (0, w.Z)(
          (0, v.Pi)(function (e) {
            var n = e.stores.dataStore,
              t = n.dimension,
              i = n.dateIndexs,
              o = n.dateRanges,
              a = n.skin,
              l = n.statistics,
              r = (0, d.useMemo)(
                function () {
                  var e;
                  return null == o
                    ? void 0
                    : null === (e = o[t]) || void 0 === e
                      ? void 0
                      : e[null == i ? void 0 : i[t]];
                },
                [null == i ? void 0 : i[t], null == o ? void 0 : o[t]],
              ),
              s = (0, d.useState)({ show: !1, date: "", content: "" }),
              c = s[0],
              u = s[1],
              v = r.startOf("month"),
              _ = r.endOf("month"),
              m = 0 === v.day() ? 6 : v.day() - 1,
              p = _.date(),
              f = Array.from({ length: m }, function (e, n) {
                return v.subtract(m - n, "day");
              }),
              x = Array.from({ length: p }, function (e, n) {
                return v.add(n, "day");
              }),
              A = [].concat((0, h.Z)(f), (0, h.Z)(x)),
              b = (0, d.useMemo)(
                function () {
                  var e,
                    n = {};
                  return (
                    null == l ||
                      null === (e = l.every_days) ||
                      void 0 === e ||
                      e.map(function (e) {
                        n[e.date] = e;
                      }),
                    n
                  );
                },
                [null == l ? void 0 : l.every_days],
              );
            (0, d.useEffect)(
              function () {
                u({ show: !1, content: "" });
              },
              [null == i ? void 0 : i[t], null == o ? void 0 : o[t]],
            );
            var j = function (e) {
                u({ show: !0, date: e, content: e });
              },
              y = function () {
                u({ show: !1, content: "" });
              };
            return (0, S.jsxs)("div", {
              className: g()(T().wrap, T()[a]),
              children: [
                e.children,
                (0, S.jsx)("div", {
                  className: T().calendarWrap,
                  children: A.map(function (e, n) {
                    var t,
                      i,
                      o,
                      a,
                      l = e.date(),
                      s = e.format("YYYYMMDD"),
                      d = e.isSame(r, "month"),
                      u = b[s],
                      v = null == u ? void 0 : u.song_info,
                      _ =
                        (null == v
                          ? void 0
                          : null === (o = v.name) || void 0 === o
                            ? void 0
                            : o.length) > 0 &&
                        (null == u ? void 0 : u.duration) > 0,
                      m = _ && c.show && c.date === l;
                    return (0, S.jsx)(
                      "div",
                      {
                        className: g()(T().date, m && T().showTip),
                        children:
                          d &&
                          (0, S.jsxs)(S.Fragment, {
                            children: [
                              (0, S.jsx)("div", {
                                className: T().day,
                                onFocus: function () {
                                  return j(l);
                                },
                                onBlur: y,
                                tabIndex: 1,
                                children:
                                  _ &&
                                  (0, S.jsx)("img", {
                                    className: T().cover,
                                    src: (0, k.Yp)(
                                      null == u
                                        ? void 0
                                        : null === (a = u.song_info) ||
                                            void 0 === a
                                          ? void 0
                                          : a.cover,
                                      100,
                                    ),
                                    alt: "",
                                    onError: k.k2,
                                  }),
                              }),
                              m &&
                                ((t = e.format("MM.DD")),
                                (i = null == u ? void 0 : u.duration),
                                c.show
                                  ? (0, S.jsx)("div", {
                                      className: T().tooltip,
                                      children: (0, S.jsxs)("div", {
                                        className: T().content,
                                        children: [
                                          (0, S.jsxs)("div", {
                                            className: T().tooltipDate,
                                            children: [
                                              (0, S.jsx)(Z.Z, {
                                                name: "headphones",
                                              }),
                                              (0, S.jsx)("span", {
                                                children: t,
                                              }),
                                            ],
                                          }),
                                          (0, S.jsx)("div", {
                                            className: T().tooltipDuration,
                                            children:
                                              i >= 60
                                                ? (0, S.jsxs)(S.Fragment, {
                                                    children: [
                                                      (0, S.jsx)("span", {
                                                        className: T().bigNum,
                                                        children: Math.round(
                                                          i / 60,
                                                        ),
                                                      }),
                                                      (0, S.jsx)("span", {
                                                        className: T().unit,
                                                        children: "分钟",
                                                      }),
                                                    ],
                                                  })
                                                : (0, S.jsxs)(S.Fragment, {
                                                    children: [
                                                      (0, S.jsx)("span", {
                                                        className: T().bigNum,
                                                        children: i,
                                                      }),
                                                      (0, S.jsx)("span", {
                                                        className: T().unit,
                                                        children: "秒",
                                                      }),
                                                    ],
                                                  }),
                                          }),
                                        ],
                                      }),
                                    })
                                  : null),
                            ],
                          }),
                      },
                      n,
                    );
                  }),
                }),
                (0, S.jsx)("div", {
                  className: T().labelWrap,
                  children: ["一", "二", "三", "四", "五", "六", "日"].map(
                    function (e) {
                      return (0, S.jsx)(
                        "div",
                        { className: T().date, children: e },
                        e,
                      );
                    },
                  ),
                }),
              ],
            });
          }),
        ),
        O = t(88058),
        B = t.n(O),
        V = t(75467),
        F = t(23951),
        P = t(49553),
        U = t(99850),
        Y = t(32257),
        H = t(12557),
        z = (0, w.Z)(
          (0, v.Pi)(function (e) {
            var n,
              t = e.data,
              i = e.stores,
              o = t.title,
              a = t.content,
              l = void 0 === a ? "" : a,
              s = t.tip,
              u = void 0 === s ? "" : s,
              v = t.type,
              _ = void 0 === v ? "" : v,
              m = t.cover,
              p = void 0 === m ? "" : m,
              h = t.mixsongid,
              f = t.avatar,
              x = void 0 === f ? "" : f,
              b = t.onClick,
              j = void 0 === b ? function () {} : b,
              y = t.jumpType,
              w = (0, d.useState)(""),
              N = w[0],
              C = w[1],
              L = ((null == i ? void 0 : i.dataStore) || {}).skin,
              M = ((null == i ? void 0 : i.appStore) || {}).playStatus,
              I =
                ((n = (0, r.Z)(
                  c().mark(function e() {
                    var n, t, i, o;
                    return c().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = L === A.lu.BLACKV2),
                                (e.prev = 1),
                                (e.next = 4),
                                (0, U.pe)({
                                  src: p,
                                  saturation: n ? 0.3 : 1,
                                  lightness: n ? 0.5 : 0.6,
                                  opacity: 1,
                                  returnRGBA: !0,
                                })
                              );
                            case 4:
                              ((t = e.sent),
                                (i = "rgba("
                                  .concat(t.r, ", ")
                                  .concat(t.g, ", ")
                                  .concat(t.b, ", ", 0.2, ")")),
                                (o = "rgba("
                                  .concat(t.r, ", ")
                                  .concat(t.g, ", ")
                                  .concat(t.b, ", ", 0.1, ")")),
                                n &&
                                  ((i = "rgba("
                                    .concat(t.r, ", ")
                                    .concat(t.g, ", ")
                                    .concat(t.b, ", ", 1, ")")),
                                  (o = "rgba("
                                    .concat(t.r, ", ")
                                    .concat(t.g, ", ")
                                    .concat(t.b, ", ", 0.1, ")"))),
                                C([i, o]),
                                (e.next = 13));
                              break;
                            case 11:
                              ((e.prev = 11), (e.t0 = e.catch(1)));
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 11]],
                    );
                  }),
                )),
                function () {
                  return n.apply(this, arguments);
                });
            return (
              (0, d.useEffect)(
                function () {
                  p && I();
                },
                [p, L],
              ),
              (0, S.jsxs)(
                "div",
                {
                  className: g()(B().wrap, B()[_]),
                  id: void 0 === y ? "" : y,
                  children: [
                    ("favSong" === _ || "loopSong" === _) &&
                      p &&
                      (0, S.jsxs)("div", {
                        className: B().coverWrap,
                        onClick: j,
                        children: [
                          (0, S.jsx)("img", {
                            className: B().shadow,
                            src: P.Z.src,
                            alt: "",
                          }),
                          (0, S.jsxs)("div", {
                            className: B().coverBg,
                            children: [
                              (0, S.jsx)("img", {
                                className: B().texture,
                                src: F.Z.src,
                                style: {
                                  backgroundColor: N[0],
                                  borderColor: N[1],
                                },
                                alt: "",
                              }),
                              (0, S.jsx)("img", {
                                className: B().cdCover,
                                src: p,
                                onError: k.k2,
                                alt: "",
                                style: {
                                  backgroundColor: N[0],
                                  borderColor: N[1],
                                },
                              }),
                            ],
                          }),
                          (0, S.jsxs)("div", {
                            className: B().cover,
                            children: [
                              (0, S.jsx)("img", {
                                src: p,
                                onError: k.k2,
                                alt: "",
                              }),
                              (0, S.jsx)("div", {
                                className: B().playIcon,
                                children: (0, S.jsx)("img", {
                                  src:
                                    +(null == M ? void 0 : M.mixsongId) ==
                                      +(void 0 === h ? 0 : h) &&
                                    1 == +(null == M ? void 0 : M.status)
                                      ? H.Z.src
                                      : Y.Z.src,
                                  alt: "",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, S.jsxs)("div", {
                      className: B().contentWrap,
                      children: [
                        (0, S.jsx)("div", {
                          className: B().title,
                          children: void 0 === o ? "" : o,
                        }),
                        "favSinger" === _
                          ? (0, S.jsx)("div", {
                              className: g()(B().singerName),
                              children: l,
                            })
                          : "loopSong" === _
                            ? (0, S.jsxs)(S.Fragment, {
                                children: [
                                  (0, S.jsx)("div", {
                                    className: B().rank,
                                    children: (0, S.jsx)("span", {
                                      children: "TOP 1",
                                    }),
                                  }),
                                  (0, S.jsx)("div", {
                                    className: g()(
                                      B().songName,
                                      B().loopSongName,
                                    ),
                                    children: (0, S.jsx)(S.Fragment, {
                                      children: (0, S.jsx)("span", {
                                        children: l,
                                      }),
                                    }),
                                  }),
                                ],
                              })
                            : (0, S.jsx)("div", {
                                className: B().songName,
                                children: (0, S.jsx)(S.Fragment, {
                                  children: (0, S.jsx)("span", { children: l }),
                                }),
                              }),
                        u &&
                          (0, S.jsx)("span", {
                            className: B().desc,
                            children: u,
                          }),
                      ],
                    }),
                    "favSinger" === _ &&
                      !!x &&
                      (0, S.jsx)("div", {
                        className: B().avatarWrap,
                        style: { backgroundImage: "url(".concat(V.Z, ")") },
                        children: (0, S.jsx)("div", {
                          className: B().avatar,
                          onClick: j,
                          children: (0, S.jsx)("img", {
                            alt: "",
                            src: x,
                            onError: k.LG,
                          }),
                        }),
                      }),
                  ],
                },
                _,
              )
            );
          }),
        ),
        G = t(42099),
        Q = t.n(G),
        K = t(64652),
        J = t(55616),
        q = function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            t = document.createElement("div");
          return (
            (t.style.position = "fixed"),
            (t.style.left = "-100vw"),
            (t.style.bottom = "0"),
            (t.style.zIndex = "-9999"),
            (t.style.opacity = "0"),
            (t.style.pointerEvents = "none"),
            Object.keys(n).forEach(function (e) {
              t.style[e] = n[e];
            }),
            (t.innerHTML = (0, k.Xv)(e)),
            document.body.appendChild(t),
            {
              elem: t,
              remove: function () {
                return document.body.removeChild(t);
              },
            }
          );
        },
        X = function (e) {
          var n = e.text,
            t = void 0 === n ? "" : n,
            i = e.fontSize,
            o = void 0 === i ? 14 : i,
            a = e.lineHeight,
            l = void 0 === a ? 20 : a,
            r = e.line,
            s = void 0 === r ? 3 : r,
            c = e.width,
            u = void 0 === c ? 260 : c,
            v = (0, d.useState)(t),
            _ = v[0],
            g = v[1];
          return (
            (0, d.useEffect)(function () {
              if (t) {
                var e = q(
                    t,
                    {
                      fontSize: (0, k.IP)(o) + "px",
                      lineHeight: (0, k.IP)(l) + "px",
                      width: (0, k.IP)(u) + "px",
                    },
                    !0,
                  ),
                  n = e.elem,
                  i = e.remove,
                  a = (0, k.IP)(l) * s + 2,
                  r = t;
                if (n.offsetHeight > a) {
                  for (; n.offsetHeight > a;)
                    ((r = r.substr(0, r.length - 1)),
                      (n.innerHTML = r + "..."));
                  g(r + "...");
                }
                i();
              }
            }, []),
            (0, S.jsx)(S.Fragment, { children: _ })
          );
        },
        $ = t(98875),
        ee = t(58173),
        en = t(24466),
        et = t(66460),
        ei = t.n(et),
        eo = (0, w.Z)(
          (0, v.Pi)(function (e) {
            var n = e.stores,
              t = e.title,
              i = e.linearGradient,
              o = ((null == n ? void 0 : n.dataStore) || {}).skin,
              a = (0, d.useRef)(null);
            return (
              (0, d.useEffect)(
                function () {
                  var e,
                    n,
                    l,
                    r,
                    s = a.current,
                    c = s.getContext("2d"),
                    d = t;
                  (null === (e = d) || void 0 === e ? void 0 : e.length) > 14 &&
                    (d = d.slice(0, 14));
                  var u = 96;
                  (null === (n = d) || void 0 === n ? void 0 : n.length) >= 8 &&
                    (u =
                      576 /
                      (null === (l = d) || void 0 === l ? void 0 : l.length));
                  var v = 1.2185 * u;
                  c.font = "bold ".concat(u, "px sans-serif");
                  var _ = c.measureText(d).width;
                  if (
                    ((s.width = _),
                    (s.height = v),
                    (c.font = "bold ".concat(u, "px sans-serif")),
                    "function" != typeof i ||
                      (r = i(c, s, _, v)) ||
                      console.warn("linearGradient does not return anything"),
                    !r)
                  ) {
                    var g = s.height;
                    ((r = c.createLinearGradient(0, g, _, 0)).addColorStop(
                      0,
                      "#4E6BFE",
                    ),
                      r.addColorStop(
                        1,
                        o === A.lu.BLACKV2 ? "#FFFFFF" : "#000000",
                      ));
                  }
                  ((c.fillStyle = r),
                    (c.textAlign = "left"),
                    (c.textBaseline = "middle"),
                    c.fillText(d, 0, v / 2));
                },
                [t, o],
              ),
              (0, S.jsx)("canvas", {
                ref: a,
                className: g()(ei().cvs, e.className, ei()[o]),
              })
            );
          }),
        ),
        ea = t(53566),
        el = t(4202),
        er = t.n(el),
        es = t(11852),
        ec = t.n(es);
      function ed(e) {
        var n,
          t,
          i = e.stores,
          o = e.type,
          a = void 0 === o ? "" : o,
          l = e.autoFontSize,
          s = e.label,
          u = e.title,
          v = e.desc,
          _ = e.icon,
          m = void 0 === _ ? "" : _,
          p = e.cover,
          h = e.mixsongId,
          f = e.playStatus,
          x = e.onClick,
          b = ((null == i ? void 0 : i.dataStore) || {}).skin,
          j = (0, d.useState)(""),
          y = j[0],
          w = j[1],
          N =
            ((n = (0, r.Z)(
              c().mark(function e() {
                var n, t, i, o;
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = "share_img" !== a && b === A.lu.BLACKV2),
                            (e.prev = 1),
                            (e.next = 4),
                            (0, U.pe)({
                              src: p,
                              saturation: n ? 0.3 : 1,
                              lightness: n ? 0.5 : 0.6,
                              opacity: 1,
                              returnRGBA: !0,
                            })
                          );
                        case 4:
                          ((t = e.sent),
                            (i = "rgba("
                              .concat(t.r, ", ")
                              .concat(t.g, ", ")
                              .concat(t.b, ", ", 0.2, ")")),
                            (o = "rgba("
                              .concat(t.r, ", ")
                              .concat(t.g, ", ")
                              .concat(t.b, ", ", 0.1, ")")),
                            n &&
                              ((i = "rgba("
                                .concat(t.r, ", ")
                                .concat(t.g, ", ")
                                .concat(t.b, ", ", 1, ")")),
                              (o = "rgba("
                                .concat(t.r, ", ")
                                .concat(t.g, ", ")
                                .concat(t.b, ", ", 0.1, ")"))),
                            w([i, o]),
                            (e.next = 13));
                          break;
                        case 11:
                          ((e.prev = 11), (e.t0 = e.catch(1)));
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 11]],
                );
              }),
            )),
            function () {
              return n.apply(this, arguments);
            });
        (0, d.useEffect)(
          function () {
            h && p && N();
          },
          [p, b],
        );
        var C = 36;
        return (
          l &&
            (null == u ? void 0 : u.length) > 8 &&
            ((C = Math.max(24, 36 - (u.length - 8) * 1)),
            (null == u
              ? void 0
              : null === (t = u.match(/[MW]/g)) || void 0 === t
                ? void 0
                : t.length) > 0 &&
              (C = Math.max(
                24,
                C - Math.ceil((u.match(/[MW]/g).length - 1) * 1.5),
              ))),
          (0, S.jsxs)("div", {
            className: g()(
              ec().item,
              "share_img" === a && ec().shareImg,
              e.className,
            ),
            children: [
              (0, S.jsx)("div", { className: ec().itemLabel, children: s }),
              (0, S.jsx)("div", {
                className: ec().itemTitle,
                style: { fontSize: (0, k.ht)("share_img" === a ? 34 : C) },
                children: (0, S.jsx)(E.Z, {
                  width: 280,
                  targetText: u,
                  style: { fontSize: "share_img" === a ? 34 : C },
                }),
              }),
              (0, S.jsx)("div", {
                className: ec().itemContent,
                children: h
                  ? (0, S.jsxs)("div", {
                      className: ec().coverWrap,
                      onClick: x,
                      children: [
                        (0, S.jsxs)("div", {
                          className: ec().coverBg,
                          children: [
                            (0, S.jsx)("img", {
                              className: ec().texture,
                              src: F.Z.src,
                              style: {
                                backgroundColor: y[0],
                                borderColor: y[1],
                              },
                              alt: "",
                            }),
                            (0, S.jsx)("img", {
                              className: ec().cdCover,
                              src: p,
                              onError: k.k2,
                              alt: "",
                              style: {
                                backgroundColor: y[0],
                                borderColor: y[1],
                              },
                            }),
                          ],
                        }),
                        (0, S.jsxs)("div", {
                          className: ec().cover,
                          children: [
                            (0, S.jsx)("img", {
                              src: p,
                              onError: k.k2,
                              alt: "",
                            }),
                            (0, S.jsx)("div", {
                              className: ec().playIcon,
                              children: (0, S.jsx)("img", {
                                src:
                                  +(null == f ? void 0 : f.mixsongId) == +h &&
                                  1 == +(null == f ? void 0 : f.status)
                                    ? H.Z.src
                                    : Y.Z.src,
                                alt: "",
                              }),
                            }),
                          ],
                        }),
                      ],
                    })
                  : m
                    ? (0, S.jsx)("img", { src: m, alt: "" })
                    : null,
              }),
              (0, S.jsx)("div", {
                className: ec().itemDesc,
                children: (0, S.jsx)(X, {
                  text: v,
                  fontSize: 22,
                  lineHeight: 35,
                  line: 3,
                  width: 260,
                }),
              }),
            ],
          })
        );
      }
      var eu = (0, v.Pi)(function (e) {
          var n,
            t,
            i,
            o,
            a,
            l,
            r,
            s,
            c,
            u,
            v,
            _,
            g,
            m,
            p,
            h,
            f = e.stores,
            x = (e.songInfo, e.dsData),
            b = f.dataStore,
            j = f.appStore,
            y = b.dimension,
            w = b.dateRanges,
            N = b.dateIndexs;
          (b.curTimeDesc, b.skin);
          var C = j.baseInfo,
            L = (0, d.useMemo)(
              function () {
                return null == w ? void 0 : w[y];
              },
              [w, y],
            ),
            M = (0, d.useMemo)(
              function () {
                return null == N ? void 0 : N[y];
              },
              [N, y],
            ),
            I = (0, d.useMemo)(
              function () {
                return L[M];
              },
              [L, M],
            );
          return (
            (0, d.useEffect)(function () {}, []),
            (0, S.jsxs)("div", {
              className: er().wrap,
              children: [
                (0, S.jsx)("img", {
                  src: "https://voowebpbssdl.kugou.com/fmt02_3f3af564f7242ecd209115187a1a6317.png",
                  className: er().bg,
                  alt: "",
                }),
                (0, S.jsxs)("div", {
                  className: er().innerWrap,
                  children: [
                    (0, S.jsxs)("div", {
                      className: er().dateWrap,
                      children: [
                        (0, S.jsx)("span", {
                          className: er().date1,
                          children: null == I ? void 0 : I.format(A.zT[1]),
                        }),
                        (0, S.jsx)("span", {
                          className: er().date2,
                          children:
                            null == I
                              ? void 0
                              : null === (n = I.add(6, "days")) || void 0 === n
                                ? void 0
                                : n.format(A.zT[1]),
                        }),
                      ],
                    }),
                    (0, S.jsxs)("div", {
                      className: er().topInfo,
                      children: [
                        (0, S.jsx)("div", {
                          className: er().avatarWrap,
                          style: { backgroundImage: "url(".concat(V.Z, ")") },
                          children: (0, S.jsx)("img", {
                            src: null == C ? void 0 : C.userpic,
                            className: er().avatar,
                            alt: (null == C ? void 0 : C.userNickName) || "",
                            onerror: k.LG,
                          }),
                        }),
                        (0, S.jsxs)("div", {
                          className: er().infoWrap,
                          children: [
                            (0, S.jsx)("div", {
                              className: er().nameWrap,
                              children: (0, S.jsx)("span", {
                                className: er().name,
                                children: (0, S.jsx)(E.Z, {
                                  width: 350,
                                  targetText:
                                    (null == C ? void 0 : C.userNickName) || "",
                                  style: { fontSize: 24 },
                                }),
                              }),
                            }),
                            (0, S.jsx)("div", {
                              className: er().titleWrap,
                              children: (0, S.jsx)(eo, {
                                title:
                                  null == x
                                    ? void 0
                                    : null === (t = x.main) || void 0 === t
                                      ? void 0
                                      : t.title,
                                linearGradient: function (e, n, t, i) {
                                  var o = n.height,
                                    a = e.createLinearGradient(0, o, t, 0);
                                  return (
                                    a.addColorStop(0, "#000000"),
                                    a.addColorStop(1, "#0041DD"),
                                    a
                                  );
                                },
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, S.jsx)("div", {
                      className: er().topInfoDesc,
                      children: (0, S.jsx)(X, {
                        text:
                          null == x
                            ? void 0
                            : null === (i = x.main) || void 0 === i
                              ? void 0
                              : i.desc,
                        fontSize: 22,
                        lineHeight: 35,
                        line: 2,
                        width: 640,
                      }),
                    }),
                    (0, S.jsx)(ed, {
                      className: er().item0,
                      type: "share_img",
                      label: "社交人格",
                      title:
                        null == x
                          ? void 0
                          : null === (o = x.personality) || void 0 === o
                            ? void 0
                            : o.title,
                      desc:
                        null == x
                          ? void 0
                          : null === (a = x.personality) || void 0 === a
                            ? void 0
                            : a.desc,
                      icon:
                        null == x
                          ? void 0
                          : null === (l = x.personality) || void 0 === l
                            ? void 0
                            : l.icon,
                    }),
                    (0, S.jsx)(ed, {
                      className: er().item1,
                      type: "share_img",
                      label: "生活状态",
                      title:
                        null == x
                          ? void 0
                          : null === (r = x.life_state) || void 0 === r
                            ? void 0
                            : r.title,
                      desc:
                        null == x
                          ? void 0
                          : null === (s = x.life_state) || void 0 === s
                            ? void 0
                            : s.desc,
                      icon:
                        null == x
                          ? void 0
                          : null === (c = x.life_state) || void 0 === c
                            ? void 0
                            : c.icon,
                    }),
                    (0, S.jsx)(ed, {
                      className: er().item2,
                      type: "share_img",
                      label: "新发现",
                      title:
                        null == x
                          ? void 0
                          : null === (u = x.discovery) || void 0 === u
                            ? void 0
                            : u.title,
                      desc:
                        null == x
                          ? void 0
                          : null === (v = x.discovery) || void 0 === v
                            ? void 0
                            : v.desc,
                      icon:
                        null == x
                          ? void 0
                          : null === (_ = x.discovery) || void 0 === _
                            ? void 0
                            : _.icon,
                    }),
                    (0, S.jsx)(ed, {
                      className: er().item3,
                      type: "share_img",
                      label: "高光瞬间",
                      title:
                        null == x
                          ? void 0
                          : null === (g = x.songInfo) || void 0 === g
                            ? void 0
                            : g.title,
                      desc:
                        null == x
                          ? void 0
                          : null === (m = x.songInfo) || void 0 === m
                            ? void 0
                            : m.desc,
                      cover:
                        null == x
                          ? void 0
                          : null === (p = x.songInfo) || void 0 === p
                            ? void 0
                            : p.cover,
                      mixsongId:
                        null == x
                          ? void 0
                          : null === (h = x.songInfo) || void 0 === h
                            ? void 0
                            : h.mixsongid,
                      stores: f,
                    }),
                    (0, S.jsx)("div", {
                      className: er().bottomDesc,
                      children: "扫码查看我的精神状态",
                    }),
                    (0, S.jsx)("div", {
                      className: er().qrcode,
                      children: (0, S.jsx)(ea.t, {
                        value:
                          A.XJ +
                          "&dimension=1&ssr_header_param="
                            .concat(A.Dc, "&ssr_url_param=")
                            .concat(A.By),
                        size: 256,
                        marginSize: 3,
                        level: "M",
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        ev = t(12520),
        e_ = (0, w.Z)(
          (0, v.Pi)(function (e) {
            var n,
              t,
              i,
              o,
              a,
              l,
              s,
              u,
              v,
              _,
              m,
              p,
              h,
              f,
              x,
              b,
              j,
              y,
              w,
              N,
              C,
              L,
              E,
              D,
              R = e.stores,
              T = e.type,
              W = R.appStore,
              O = R.dataStore || {},
              B = O.skin,
              V = O.statistics,
              F = O.dimension,
              P = (V || {}).mental_state,
              Y = (0, d.useMemo)(
                function () {
                  if (P) {
                    var e,
                      n,
                      t,
                      i = A.pb[P.new_discovery_tag_id] || A.pb[0],
                      o = A.pb[87641] || A.pb[0];
                    return (
                      o === i && (o = A.pb[87744]),
                      {
                        main: {
                          title: (P.mental_state_kw || "佛系养生").trim(),
                          desc:
                            P.mental_state_detail ||
                            "最近没怎么听歌，生活节奏放缓，可能进入了养生模式，心态平和，没啥大起大落。",
                        },
                        personality: {
                          label: "社交人格",
                          title: P.social_personality_kw || "社恐隐身",
                          desc:
                            P.social_personality_detail ||
                            "可能最近社交活动减少，生活进入了隐身状态。",
                          icon:
                            A.LM[
                              (0, U.Yo)(
                                P.social_personality_kw,
                                Object.keys(A.LM).length,
                              )
                            ] || A.LM[0],
                        },
                        life_state: {
                          label: "生活状态",
                          title: P.lifestyle_kw || "躺平摸鱼",
                          desc:
                            P.lifestyle_detail ||
                            "最近听歌少，生活节奏悠闲，工作学习都按部就班。",
                          icon:
                            A.uR[
                              (0, U.Yo)(
                                null == P ? void 0 : P.lifestyle_kw,
                                Object.keys(A.uR).length,
                              )
                            ] || A.uR[0],
                        },
                        discovery: {
                          label: "新发现",
                          title: P.new_discovery_kw || "空白探索",
                          desc:
                            P.new_discovery_detail ||
                            "没有特别的发现，可能把音乐放在了一边、探索新的兴趣。",
                          icon: i,
                        },
                        songInfo: {
                          label: "高光瞬间",
                          title: P.highlight_kw || "静待花开",
                          desc:
                            P.highlight_detail ||
                            "暂时没有高光瞬间，多听听歌、下次打开会有新的惊喜哦！",
                          icon: A.pb[87641] || A.pb[0],
                          cover:
                            null !== (e = P.highlight_song_info) &&
                            void 0 !== e &&
                            e.cover
                              ? (0, I.replaceHttpsImg)(
                                  (null === (n = P.highlight_song_info) ||
                                  void 0 === n
                                    ? void 0
                                    : n.cover) || "",
                                ).replace("{size}", 150)
                              : $.Z.src,
                          mixsongid:
                            (null === (t = P.highlight_song_info) ||
                            void 0 === t
                              ? void 0
                              : t.mixsongid) || 0,
                        },
                      }
                    );
                  }
                  return null;
                },
                [P],
              ),
              H = (0, d.useRef)(),
              z = (0, d.useRef)(null),
              G =
                ((n = (0, r.Z)(
                  c().mark(function n(t, i) {
                    var o;
                    return c().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if ((t && t.stopPropagation(), z.current)) {
                              n.next = 5;
                              break;
                            }
                            return ((n.next = 4), (0, en.X)());
                          case 4:
                            z.current = n.sent;
                          case 5:
                            ((H.current.style.borderRadius = 0),
                              z.current
                                .default(H.current, {
                                  useCORS: !0,
                                  allowTaint: !1,
                                  scale:
                                    1080 /
                                    (null === (o = H.current) || void 0 === o
                                      ? void 0
                                      : o.getBoundingClientRect().width),
                                  backgroundColor: null,
                                })
                                .then(
                                  (function () {
                                    var n = (0, r.Z)(
                                      c().mark(function n(t) {
                                        var o;
                                        return c().wrap(function (n) {
                                          for (;;)
                                            switch ((n.prev = n.next)) {
                                              case 0:
                                                if (
                                                  ((o = t.toDataURL()),
                                                  "share" !== i)
                                                ) {
                                                  n.next = 6;
                                                  break;
                                                }
                                                (I.share.resetShareData({
                                                  type: 4,
                                                  img: o,
                                                  subbiz: "song_statistics",
                                                  shareChannel: A.AC,
                                                }),
                                                  I.share.shareAll(),
                                                  (n.next = 16));
                                                break;
                                              case 6:
                                                if ("save" !== i) {
                                                  n.next = 16;
                                                  break;
                                                }
                                                return (
                                                  (n.next = 9),
                                                  (0, ev.pc)([
                                                    {
                                                      platform: "android",
                                                      version: 9305,
                                                    },
                                                    {
                                                      platform: "ios",
                                                      version: 9305,
                                                    },
                                                    {
                                                      platform: "harmony",
                                                      version: 20141,
                                                    },
                                                  ])
                                                );
                                              case 9:
                                                if (n.sent) {
                                                  n.next = 13;
                                                  break;
                                                }
                                                return (
                                                  (window.location.href =
                                                    "https://activity.kugou.com/update/v-22e2dee1/index.html"),
                                                  n.abrupt("return")
                                                );
                                              case 13:
                                                (e.mobileLog &&
                                                  e.mobileLog({
                                                    a: 1131818,
                                                    b: "点击",
                                                    svar1: "本周精神状态解读",
                                                    svar2: "本周精神状态解读",
                                                    svar3: "保存图片",
                                                    svar6: 3,
                                                  }),
                                                  I.LightMobileCall.mobileCall(
                                                    A.x8.saveImg,
                                                    {
                                                      imageData: o,
                                                      callback:
                                                        "sceneSaveShareImgCb",
                                                      showToast: 0,
                                                    },
                                                  ),
                                                  (window.sceneSaveShareImgCb =
                                                    function (e) {
                                                      var n;
                                                      if ("string" == typeof e)
                                                        try {
                                                          e = JSON.parse(e);
                                                        } catch (e) {}
                                                      1 ==
                                                      +(null === (n = e) ||
                                                      void 0 === n
                                                        ? void 0
                                                        : n.status)
                                                        ? (0, k.FN)(
                                                            "已保存至本地",
                                                          )
                                                        : (0, k.FN)("保存失败");
                                                    }));
                                              case 16:
                                                ((H.current.style.borderRadius =
                                                  ""),
                                                  t.remove());
                                              case 18:
                                              case "end":
                                                return n.stop();
                                            }
                                        }, n);
                                      }),
                                    );
                                    return function (e) {
                                      return n.apply(this, arguments);
                                    };
                                  })(),
                                )
                                .catch(function (e) {
                                  ((H.current.style.borderRadius = ""),
                                    console.warn("html2canvas_err", e));
                                }));
                          case 7:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  }),
                )),
                function (e, t) {
                  return n.apply(this, arguments);
                }),
              q =
                ((t = (0, r.Z)(
                  c().mark(function n() {
                    var t, i;
                    return c().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              e.clickMobileLog &&
                                e.clickMobileLog("听歌小结", {
                                  svar2: "本周精神状态解读",
                                }),
                              e.mobileLog &&
                                e.mobileLog({
                                  a: 1131814,
                                  b: "曝光",
                                  ft: A.En[F],
                                  svar1: "本周精神状态解读",
                                  svar6: 3,
                                }),
                              e.mobileLog({
                                a: 1133818,
                                b: "点击",
                                ft: "周",
                                svar1: "本周精神状态解读",
                                svar2: "有结果",
                                svar3: "分享",
                              }),
                              (n.next = 5),
                              (0, k.hj)()
                            );
                          case 5:
                            ((t = n.sent) &&
                              I.LightMobileCall.mobileCall(A.x8.showHideBar, {
                                state: 0,
                              }),
                              (i = J.Z.show({
                                maskClassName: Q().popMask,
                                children: (0, S.jsxs)("div", {
                                  className: Q().shareWrap,
                                  onClick: function () {
                                    (i.close(),
                                      t &&
                                        I.LightMobileCall.mobileCall(
                                          A.x8.showHideBar,
                                          { state: 1 },
                                        ));
                                  },
                                  children: [
                                    (0, S.jsxs)("div", {
                                      className: Q().modal,
                                      children: [
                                        (0, S.jsx)("img", {
                                          className: Q().closeBtn,
                                          src: "https://webvoobssdl.kugou.com/f3b557be3d1d8164e81187a2046b1b32.png",
                                          "data-html2canvas-ignore": !0,
                                        }),
                                        (0, S.jsx)("div", {
                                          className: Q().modalContent,
                                          children: (0, S.jsx)("div", {
                                            className: Q().contentWrap,
                                            ref: H,
                                            children: (0, S.jsx)(eu, {
                                              stores: R,
                                              dsData: Y,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, S.jsxs)("div", {
                                      className: Q().btnWrap,
                                      children: [
                                        (0, S.jsx)("div", {
                                          className: Q().shareBtn,
                                          onClick: function (e) {
                                            return G(e, "save");
                                          },
                                          children: "保存图片",
                                        }),
                                        (0, S.jsx)("div", {
                                          className: Q().shareBtn,
                                          onClick: function (e) {
                                            return G(e, "share");
                                          },
                                          children: "分享",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              })));
                          case 8:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  }),
                )),
                function () {
                  return t.apply(this, arguments);
                });
            return (
              (0, d.useEffect)(function () {
                (e.mobileLog
                  ? e.mobileLog({
                      a: 1133817,
                      b: "曝光",
                      ft: "周",
                      svar1: "本周精神状态解读",
                      svar2: "有结果",
                    })
                  : console.warn("Mental mobileLog is undefined"),
                  (I.cacheData.DSDialogAutoOpenWhenNoDSData = void 0));
                var n = (e.vooConfig || {}).shareInit;
                I.share.resetShareData(
                  (0, ee.z)((null == n ? void 0 : n.mental) || {}),
                );
              }, []),
              (0, S.jsxs)("div", {
                className: g()(Q().wrap, Q()[B]),
                children: [
                  (0, S.jsxs)("div", {
                    className: Q().titleBlock,
                    children: [
                      (0, S.jsxs)("div", {
                        className: Q().logoTitle,
                        children: [
                          (0, S.jsx)("span", {
                            className: Q().colorText,
                            children: "深度解析",
                          }),
                          (0, S.jsx)("span", { children: "本周精神状态" }),
                        ],
                      }),
                      (0, S.jsxs)("div", {
                        className: g()(
                          Q().title,
                          (null == Y
                            ? void 0
                            : null === (i = Y.main) || void 0 === i
                              ? void 0
                              : null === (o = i.title) || void 0 === o
                                ? void 0
                                : o.length) > 8
                            ? Q().titleCenter
                            : "",
                        ),
                        children: [
                          (0, S.jsx)(eo, {
                            title:
                              null == Y
                                ? void 0
                                : null === (a = Y.main) || void 0 === a
                                  ? void 0
                                  : a.title,
                          }),
                          (0, S.jsx)("span", { children: "/ 本周精神状态" }),
                        ],
                      }),
                      (0, S.jsx)("div", {
                        className: Q().desc,
                        children: (0, S.jsx)(X, {
                          text:
                            null == Y
                              ? void 0
                              : null === (l = Y.main) || void 0 === l
                                ? void 0
                                : l.desc,
                          fontSize: 22,
                          lineHeight: 35,
                          line: 2,
                          width: 600,
                        }),
                      }),
                    ],
                  }),
                  (0, S.jsx)(M.Z, { className: Q().splitLine }),
                  (0, S.jsxs)("div", {
                    className: Q().blockWrap,
                    children: [
                      (0, S.jsx)(ed, {
                        autoFontSize: !0,
                        label:
                          null == Y
                            ? void 0
                            : null === (s = Y.personality) || void 0 === s
                              ? void 0
                              : s.label,
                        title:
                          null == Y
                            ? void 0
                            : null === (u = Y.personality) || void 0 === u
                              ? void 0
                              : u.title,
                        desc:
                          null == Y
                            ? void 0
                            : null === (v = Y.personality) || void 0 === v
                              ? void 0
                              : v.desc,
                        icon:
                          null == Y
                            ? void 0
                            : null === (_ = Y.personality) || void 0 === _
                              ? void 0
                              : _.icon,
                      }),
                      (0, S.jsx)(K.Z, { className: Q().verticalLine }),
                      (0, S.jsx)(ed, {
                        label:
                          null == Y
                            ? void 0
                            : null === (m = Y.life_state) || void 0 === m
                              ? void 0
                              : m.label,
                        title:
                          null == Y
                            ? void 0
                            : null === (p = Y.life_state) || void 0 === p
                              ? void 0
                              : p.title,
                        desc:
                          null == Y
                            ? void 0
                            : null === (h = Y.life_state) || void 0 === h
                              ? void 0
                              : h.desc,
                        icon:
                          null == Y
                            ? void 0
                            : null === (f = Y.life_state) || void 0 === f
                              ? void 0
                              : f.icon,
                      }),
                    ],
                  }),
                  (0, S.jsx)(M.Z, { className: Q().splitLine }),
                  (0, S.jsxs)("div", {
                    className: Q().blockWrap,
                    children: [
                      (0, S.jsx)(ed, {
                        label:
                          null == Y
                            ? void 0
                            : null === (x = Y.discovery) || void 0 === x
                              ? void 0
                              : x.label,
                        title:
                          null == Y
                            ? void 0
                            : null === (b = Y.discovery) || void 0 === b
                              ? void 0
                              : b.title,
                        desc:
                          null == Y
                            ? void 0
                            : null === (j = Y.discovery) || void 0 === j
                              ? void 0
                              : j.desc,
                        icon:
                          null == Y
                            ? void 0
                            : null === (y = Y.discovery) || void 0 === y
                              ? void 0
                              : y.icon,
                      }),
                      (0, S.jsx)(K.Z, { className: Q().verticalLine }),
                      (0, S.jsx)(ed, {
                        label:
                          null == Y
                            ? void 0
                            : null === (w = Y.songInfo) || void 0 === w
                              ? void 0
                              : w.label,
                        title:
                          null == Y
                            ? void 0
                            : null === (N = Y.songInfo) || void 0 === N
                              ? void 0
                              : N.title,
                        desc:
                          null == Y
                            ? void 0
                            : null === (C = Y.songInfo) || void 0 === C
                              ? void 0
                              : C.desc,
                        icon:
                          null == Y
                            ? void 0
                            : null === (L = Y.songInfo) || void 0 === L
                              ? void 0
                              : L.icon,
                        cover:
                          null == Y
                            ? void 0
                            : null === (E = Y.songInfo) || void 0 === E
                              ? void 0
                              : E.cover,
                        mixsongId:
                          null == Y
                            ? void 0
                            : null === (D = Y.songInfo) || void 0 === D
                              ? void 0
                              : D.mixsongid,
                        onClick: function (n) {
                          if ("share" !== T) {
                            var t,
                              i,
                              o,
                              a =
                                null == Y
                                  ? void 0
                                  : null === (t = Y.songInfo) || void 0 === t
                                    ? void 0
                                    : t.mixsongid,
                              l =
                                +(null == W
                                  ? void 0
                                  : null === (i = W.playStatus) || void 0 === i
                                    ? void 0
                                    : i.mixsongId) == +a,
                              r =
                                l &&
                                1 ==
                                  +(null == W
                                    ? void 0
                                    : null === (o = W.playStatus) ||
                                        void 0 === o
                                      ? void 0
                                      : o.status);
                            (e.clickMobileLog &&
                              e.clickMobileLog("听歌小结", {
                                svar2: "本周精神状态解读",
                                svar3: "播放",
                                svar5: a,
                              }),
                              l ? (0, k._D)(r) : (0, k._n)(a));
                          }
                        },
                        stores: R,
                        playStatus: null == W ? void 0 : W.playStatus,
                      }),
                    ],
                  }),
                  "share" !== T &&
                    (0, S.jsx)("div", {
                      className: Q().btnShareWrap,
                      children: (0, S.jsxs)("div", {
                        className: Q().btnShare,
                        onClick: q,
                        children: [
                          (0, S.jsx)(Z.Z, { name: "act_share" }),
                          (0, S.jsx)("span", { children: "分享我的状态" }),
                        ],
                      }),
                    }),
                ],
              })
            );
          }),
        ),
        eg = t(44421),
        em = t(10816),
        ep = t.n(em),
        eh = t(1375),
        ef = function () {
          var e = 0,
            n = 0,
            t = null,
            i = !1;
          return {
            timeStart: function () {
              e = Date.now();
            },
            timeEnd: function () {
              n || (n = Date.now() - e);
            },
            setError: function (e, n) {
              if (!t)
                try {
                  (t = {
                    code: (null == e ? void 0 : e.code) || n || "1000",
                    msg:
                      (null == e ? void 0 : e.message) ||
                      (null == e ? void 0 : e.content) ||
                      "error",
                  }).para = JSON.stringify(e) || "";
                } catch (n) {
                  console.error("setError error", e, n);
                }
            },
            report: function () {
              i ||
                ((i = !0),
                this.timeEnd(),
                console.warn("report", n, t),
                t
                  ? I.apmUtils.chatFail({ startTime: e, time: n, rej: t })
                  : I.apmUtils.chatSuccess({ startTime: e, time: n }));
            },
          };
        },
        ex = {
          session_id: "",
          receiveStatus: "",
          abortCtrl: null,
          baseURL: "https://llmgatewayrec.kugou.com/listenmusic/report",
          userInfo: null,
          getRequestParams: function () {
            var e = this.userInfo;
            return {
              appid: null == e ? void 0 : e.appid,
              mid: null == e ? void 0 : e.mid,
              uuid: null == e ? void 0 : e.uuid,
              dfid: null == e ? void 0 : e.dfid,
              clientver: null == e ? void 0 : e.clientver,
              clienttime: Math.floor(Date.now() / 1e3),
              platform:
                null !== I.LightMobileCall &&
                void 0 !== I.LightMobileCall &&
                I.LightMobileCall.isIOS
                  ? "ios"
                  : "android",
            };
          },
          init:
            ((i = (0, r.Z)(
              c().mark(function e() {
                var n,
                  t = this;
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(
                            null !== (n = this.userInfo) &&
                            void 0 !== n &&
                            n.userid
                          )) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            (e.next = 4),
                            new Promise(function (e) {
                              (0, I.getBaseInfo)(null, function (n) {
                                ((n.appid = n.appid || 1058),
                                  (n.userid = +(n.userid || n.kugouID || 0)),
                                  (t.userInfo = n),
                                  e());
                              });
                            })
                          );
                        case 4:
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
              return i.apply(this, arguments);
            }),
          send:
            ((o = (0, r.Z)(
              c().mark(function e(n) {
                var t,
                  i,
                  o,
                  a,
                  l,
                  r,
                  s,
                  d,
                  u,
                  v,
                  _,
                  g,
                  m,
                  p,
                  h,
                  f,
                  x,
                  A,
                  b,
                  j,
                  y = this;
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = n || {}),
                            (t = Date.now()),
                            (i = 0),
                            (o = 0),
                            console.warn("aichat startTime:", t),
                            (r =
                              void 0 === (l = (a = n || {}).onMessage)
                                ? function () {
                                    i ||
                                      console.warn(
                                        "aichat firstMessage duration:",
                                        (i = Date.now()) - t,
                                      );
                                  }
                                : l),
                            (d =
                              void 0 === (s = a.onEnd)
                                ? function () {
                                    (o ||
                                      console.warn(
                                        "aichat end duration:",
                                        (o = Date.now()) - t,
                                        o - i,
                                      ),
                                      (0, I.getGlobalEvent)().emit("DSChange", {
                                        status: 2,
                                      }));
                                  }
                                : s),
                            (v =
                              void 0 === (u = a.onError)
                                ? function () {
                                    (o ||
                                      console.warn(
                                        "aichat error duration:",
                                        (o = Date.now()) - t,
                                        o - i,
                                      ),
                                      (0, I.getGlobalEvent)().emit("DSChange", {
                                        status: 3,
                                      }));
                                  }
                                : u),
                            (g =
                              void 0 === (_ = a.onStop)
                                ? function () {
                                    (o ||
                                      console.warn(
                                        "aichat stop duration:",
                                        (o = Date.now()) - t,
                                        o - i,
                                      ),
                                      (0, I.getGlobalEvent)().emit("DSChange", {
                                        status: 3,
                                      }));
                                  }
                                : _),
                            (e.next = 8),
                            this.init()
                          );
                        case 8:
                          return (
                            (m = {
                              userid:
                                (null === (j = this.userInfo) || void 0 === j
                                  ? void 0
                                  : j.userid) || 0,
                            }),
                            this.session_id && (m.session_id = this.session_id),
                            "object" == typeof m && (m = JSON.stringify(m)),
                            ((f = this.getRequestParams()).scene =
                              "thinking_disabled"),
                            (x = Object.assign({}, f, n.params)),
                            (e.next = 16),
                            eA.encrypt(x, m)
                          );
                        case 16:
                          ((h = (A = e.sent)._post),
                            (p = eA.getUrl(this.baseURL, A._get)),
                            this.receiveStatus && this.stop(),
                            (this.abortCtrl = new AbortController()),
                            (this.receiveStatus = "[START]"),
                            (b = ef()).timeStart(),
                            (0, eh.L)(p, {
                              signal: this.abortCtrl.signal,
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json;",
                                "x-rpc-read-timeout": "300000ms",
                              },
                              body: h,
                              openWhenHidden: !0,
                              onmessage: function (e) {
                                try {
                                  var n = y.dataTransformFunc(
                                    null == e ? void 0 : e.data,
                                  );
                                  if (!n) {
                                    console.error("onmessage error", n);
                                    return;
                                  }
                                  switch (
                                    (null != n && n.tag && b.timeEnd(), n.tag)
                                  ) {
                                    case "[END]":
                                      ((y.receiveStatus = ""), b.report(), d());
                                      break;
                                    case "":
                                    case "[THINK]":
                                    case "[TEXT]":
                                      ((y.receiveStatus =
                                        (null == n ? void 0 : n.tag) || ""),
                                        null != n &&
                                          n.id &&
                                          (y.session_id = n.id),
                                        r(n));
                                      break;
                                    case "[ERROR]":
                                      ((y.receiveStatus = ""),
                                        v(),
                                        b.setError(n, "2000"));
                                      break;
                                    default:
                                      ((y.receiveStatus = ""), v());
                                  }
                                } catch (e) {
                                  ((y.receiveStatus = ""), v());
                                }
                              },
                              onclose: function (e) {
                                (console.warn("close connect"),
                                  (y.receiveStatus = ""),
                                  g());
                              },
                              onerror: function (e) {
                                (console.error("aiChat onError", e),
                                  y.abortCtrl.abort(),
                                  (y.abortCtrl = null),
                                  (y.receiveStatus = ""),
                                  v(e),
                                  b.setError(e),
                                  b.report());
                              },
                            }));
                        case 25:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                );
              }),
            )),
            function (e) {
              return o.apply(this, arguments);
            }),
          stop: function () {
            (console.log("stop"),
              this.abortCtrl && this.abortCtrl.abort(),
              (this.abortCtrl = null),
              (this.receiveStatus = ""),
              onStop());
          },
          dataTransformFunc: function (e) {
            return ("string" == typeof e && (e = JSON.parse(e)), e);
          },
        },
        eA = {
          encrypt: function (e, n) {
            return new Promise(function (t) {
              I.KGRequest.infSign(e, n, {
                useH5: !0,
                isCDN: !1,
                postType: "json",
                log: !1,
                appkey: "",
                callback: function (e, n) {
                  t({ _get: e, _post: n });
                },
              });
            });
          },
          getUrl: function (e, n) {
            if (!n) return e;
            var t = "";
            for (var i in n) t += i + "=" + n[i] + "&";
            return (
              (t = t.slice(0, -1)),
              (e += -1 !== e.indexOf("?") ? "&" : "?" + t),
              e
            );
          },
        },
        eb = t(16165),
        ej = t(42240),
        ey = (0, w.Z)(
          (0, v.Pi)(function (e) {
            var n,
              t,
              i,
              o,
              a,
              s,
              u,
              v,
              _,
              m = e.isLatestWeek;
            e.stores.dataStore;
            var p =
                ((t = (n = (0, d.useState)(I.cacheData.__statusCode))[0]),
                (i = n[1]),
                (o = (0, d.useRef)(null)),
                (a = (0, d.useRef)(!1)),
                (s = (0, d.useRef)(0)),
                (u = (0, d.useCallback)(
                  (0, r.Z)(
                    c().mark(function e() {
                      var n, t, d;
                      return c().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!a.current) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return ((e.next = 4), (0, ej.f2)());
                            case 4:
                              if (
                                ((n = e.sent),
                                (t = (0, l.Z)(n, 1)[0]),
                                !a.current)
                              ) {
                                e.next = 9;
                                break;
                              }
                              return e.abrupt("return");
                            case 9:
                              if (
                                ((d = null == t ? void 0 : t.report_status),
                                "number" ==
                                  typeof (null == t
                                    ? void 0
                                    : t.report_status) &&
                                  (i(d), (I.cacheData.__statusCode = d)),
                                console.warn("getStatus2 status", d, t),
                                t)
                              ) {
                                e.next = 21;
                                break;
                              }
                              if (
                                (console.warn(
                                  "getStatus2 retryCount",
                                  s.current,
                                ),
                                !(s.current > 5))
                              ) {
                                e.next = 18;
                                break;
                              }
                              return (
                                (0, eb.i)().emit("DSStatusChange", {
                                  status: 1,
                                }),
                                i(-1),
                                e.abrupt("return")
                              );
                            case 18:
                              return (
                                s.current++,
                                (o.current = setTimeout(
                                  (0, r.Z)(
                                    c().mark(function e() {
                                      return c().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              u();
                                            case 1:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    }),
                                  ),
                                  5e3,
                                )),
                                e.abrupt("return")
                              );
                            case 21:
                              1 === d
                                ? (o.current = setTimeout(
                                    (0, r.Z)(
                                      c().mark(function e() {
                                        return c().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                u();
                                              case 1:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      }),
                                    ),
                                    5e3,
                                  ))
                                : (0, eb.i)().emit("DSStatusChange", {
                                    status: d,
                                  });
                            case 22:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  ),
                  [],
                )),
                (v = (0, d.useCallback)(function () {
                  ((s.current = 0), _(), u());
                }, [])),
                (_ = (0, d.useCallback)(function () {
                  clearTimeout(o.current);
                }, [])),
                (0, d.useEffect)(function () {
                  return function () {
                    (clearTimeout(o.current), (a.current = !0));
                  };
                }, []),
                {
                  setStatusCode: i,
                  statusCode: t,
                  startTimer: v,
                  stopTimer: _,
                }),
              h = p.statusCode,
              f = p.startTimer,
              x = (p.stopTimer, p.setStatusCode),
              A = (0, d.useMemo)(
                function () {
                  return m
                    ? "lock"
                    : 1 === h
                      ? "loading"
                      : 2 === h
                        ? "success"
                        : -2 === h
                          ? "error"
                          : I.cacheData.DSDialogAutoOpenWhenNoDSData
                            ? "loading"
                            : "lock";
                },
                [h, m],
              ),
              b = function () {
                (ex.send(),
                  x(1),
                  setTimeout(function () {
                    f();
                  }, 1e3));
              };
            (0, d.useEffect)(
              function () {
                "loading" === A &&
                  (e.mobileLog
                    ? e.mobileLog({
                        a: 1133817,
                        b: "曝光",
                        ft: "周",
                        svar1: "本周精神状态解读",
                        svar2: "生成中",
                      })
                    : console.warn("MentalEmpty mobileLog is undefined"));
              },
              [A],
            );
            var j = function () {
              if (!navigator.onLine) {
                (0, k.FN)("网络异常，请检查网络设置");
                return;
              }
              if (m)
                ((I.cacheData.DSDialogAutoOpenWhenNoDSData = 1),
                  (0, I.getGlobalEvent)().emit("goLastWeek", -1));
              else {
                if (1 === h) {
                  ((0, k.FN)("状态解读中，请稍候..."), f());
                  return;
                }
                if (-2 === h) {
                  (0, k.FN)("解读失败，已达今日最大重试次数");
                  return;
                }
                "" === ex.receiveStatus && b();
              }
              e.mobileLog
                ? e.mobileLog({
                    a: 1133818,
                    b: "点击",
                    ft: "周",
                    svar1: "本周精神状态解读",
                    svar2: m
                      ? "解锁上周"
                      : "loading" === A
                        ? "生成中"
                        : "待生成",
                    svar3: "提起弹窗",
                  })
                : console.warn("MentalEmpty mobileLog is undefined");
            };
            return (
              (0, d.useEffect)(function () {
                if (
                  (e.mobileLog
                    ? e.mobileLog({
                        a: 1133817,
                        b: "曝光",
                        ft: "周",
                        svar1: "本周精神状态解读",
                        svar2: m ? "解锁上周" : "待生成",
                      })
                    : console.warn("MentalEmpty mobileLog is undefined"),
                  !m)
                ) {
                  (1 === I.cacheData.DSDialogAutoOpenWhenNoDSData
                    ? "" === ex.receiveStatus && b()
                    : f(),
                    (I.cacheData.DSDialogAutoOpenWhenNoDSData = void 0));
                  var n = (0, eg.Z)(function (e) {
                    m ||
                      ((null == e ? void 0 : e.status) !== 2 &&
                        (null == e ? void 0 : e.status) !== 3) ||
                      (f(), (0, I.getGlobalEvent)().emit("DSStatusChange"));
                  }, 500);
                  return (
                    (0, I.getGlobalEvent)().on("DSChange", n),
                    function () {
                      (0, I.getGlobalEvent)().off("DSChange", n);
                    }
                  );
                }
              }, []),
              (0, S.jsxs)("div", {
                className: ep().wrap,
                children: [
                  (0, S.jsx)("div", {
                    className: ep().titleBlock,
                    children: (0, S.jsxs)("div", {
                      className: ep().logoTitle,
                      children: [
                        (0, S.jsx)("span", {
                          className: ep().colorText,
                          children: "深度解析",
                        }),
                        m
                          ? null
                          : (0, S.jsx)("span", { children: "本周精神状态" }),
                      ],
                    }),
                  }),
                  (0, S.jsxs)("div", {
                    className: ep().contentWrap,
                    onClick: j,
                    children: [
                      (0, S.jsx)("div", {
                        className: g()(ep().imgWrap, ep().imgWrap2),
                        children: (0, S.jsx)("img", {
                          src: "https://webvoobssdl.kugou.com/dca24c71e3ddcf74efc735f290ba3b0d.png",
                          alt: "",
                          onError: function (e) {
                            return (e.style.display = "none");
                          },
                        }),
                      }),
                      (0, S.jsx)("div", {
                        className: g()(ep().imgWrap, ep().imgWrap1),
                        children: (0, S.jsx)("img", {
                          src: "https://webvoobssdl.kugou.com/44d786e525d2dc1b93d8ee9ef0ea0a10.png",
                          alt: "",
                          onError: function (e) {
                            return (e.style.display = "none");
                          },
                        }),
                      }),
                      (0, S.jsx)("div", {
                        className: g()(ep().imgWrap, ep().imgWrap3),
                        children: (0, S.jsx)("img", {
                          src: "https://webvoobssdl.kugou.com/3bd2a6da139e604d32881b023a99e300.png",
                          alt: "",
                          onError: function (e) {
                            return (e.style.display = "none");
                          },
                        }),
                      }),
                      (0, S.jsx)("div", {
                        className: g()(ep().imgWrap, ep().imgWrap4),
                        children: (0, S.jsx)("img", {
                          src: "https://webvoobssdl.kugou.com/2a2b25c1a2abc03a928fc1e8634ab356.png",
                          alt: "",
                          onError: function (e) {
                            return (e.style.display = "none");
                          },
                        }),
                      }),
                      (0, S.jsx)("div", {
                        className: g()(ep().imgWrap, ep().imgWrap5),
                        children: (0, S.jsx)("img", {
                          src: "https://webvoobssdl.kugou.com/9936c044f573ee25701a4c4ff3b9b6fb.png",
                          alt: "",
                          onError: function (e) {
                            return (e.style.display = "none");
                          },
                        }),
                      }),
                      (0, S.jsx)("div", {
                        className: g()(ep().imgWrap, ep().imgWrap6),
                        children: (0, S.jsx)("img", {
                          src: "https://webvoobssdl.kugou.com/563792e678718c41383f3c5b4ba9fee7.png",
                          alt: "",
                          onError: function (e) {
                            return (e.style.display = "none");
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, S.jsx)("div", {
                    className: ep().btnWrap,
                    children: m
                      ? (0, S.jsxs)("div", {
                          className: g()(ep().btn, ep().lock),
                          onClick: j,
                          children: [
                            (0, S.jsx)(Z.Z, {
                              name: "lock",
                              className: ep().lockIcon,
                            }),
                            (0, S.jsx)("span", { children: "解锁上周状态" }),
                          ],
                        })
                      : "lock" === A || "success" === A
                        ? (0, S.jsxs)("div", {
                            className: g()(ep().btn, ep().lock),
                            onClick: j,
                            children: [
                              (0, S.jsx)(Z.Z, {
                                name: "lock",
                                className: ep().lockIcon,
                              }),
                              (0, S.jsx)("span", { children: "解锁我的状态" }),
                            ],
                          })
                        : "error" === A
                          ? (0, S.jsxs)("div", {
                              className: g()(ep().btn, ep().lock),
                              children: [
                                (0, S.jsx)(Z.Z, {
                                  name: "lock",
                                  className: ep().lockIcon,
                                }),
                                (0, S.jsx)("span", {
                                  children: "解读失败，已达今日最大重试次数",
                                }),
                              ],
                            })
                          : (0, S.jsx)("div", {
                              className: g()(ep().btn, ep().lock),
                              onClick: j,
                              children: (0, S.jsx)("span", {
                                children: "状态解读中",
                              }),
                            }),
                  }),
                  (0, S.jsx)("div", {
                    className: ep().desc,
                    children: "一键获取你的音乐点评（每周一0点可解锁）",
                  }),
                ],
              })
            );
          }),
        ),
        ew = t(58551),
        ek = t.n(ew),
        eN = (0, w.Z)(
          (0, v.Pi)(function (e) {
            var n = e.reportInfo,
              t = e.clickMobileLog,
              i = e.type,
              o = e.stores,
              a = ((null == o ? void 0 : o.dataStore) || {}).skin;
            return n
              ? (0, S.jsx)("div", {
                  className: g()(ek().wrap, ek()[a]),
                  children: (0, S.jsxs)("div", {
                    className: ek().reportWrap,
                    onClick: function () {
                      "share" !== i &&
                        (I.LightMobileCall.mobileCall(A.x8.openURL, {
                          browser: 0,
                          isFullScreen: 1,
                          url: null == n ? void 0 : n.url,
                        }),
                        t &&
                          t("听歌小结", {
                            svar2: "月度报告",
                            svar3: "点击跳转",
                            svar5: null == n ? void 0 : n.month,
                          }));
                    },
                    children: [
                      (0, S.jsx)("div", {
                        className: ek().cover,
                        children: (0, S.jsx)("img", {
                          src: null == n ? void 0 : n.thumb,
                          alt: "",
                          onError: k.k2,
                        }),
                      }),
                      (0, S.jsxs)("div", {
                        children: [
                          (0, S.jsxs)("div", {
                            className: ek().title,
                            children: [
                              (0, S.jsx)("span", {
                                children: null == n ? void 0 : n.title,
                              }),
                              (0, S.jsx)(Z.Z, { name: "right_normal" }),
                            ],
                          }),
                          (0, S.jsx)("div", {
                            className: ek().desc,
                            children: (0, S.jsx)("span", {
                              children: null == n ? void 0 : n.desc,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              : null;
          }),
        ),
        eC = t(18546),
        eS = t.n(eC),
        eL = function (e) {
          var n = e.split(",");
          return (
            "#" +
            (
              16777216 +
              (parseInt(n[0].split("(")[1]) << 16) +
              (parseInt(n[1]) << 8) +
              parseInt(n[2].split(")")[0])
            )
              .toString(16)
              .slice(1)
          );
        },
        eM = function (e) {
          var n = 0;
          if (!e) return n;
          try {
            var t = e.split(","),
              i = parseInt(t[0].split("(")[1]),
              o = parseInt(t[1]),
              a = parseInt(t[2].split(")")[0]);
            ((i /= 255), (o /= 255), (a /= 255));
            var l = Math.max(i, o, a),
              r = Math.min(i, o, a);
            if (l === r) n = 0;
            else {
              var s = l - r;
              (l === i
                ? (n = ((o - a) / s) % 6)
                : l === o
                  ? (n = (a - i) / s + 2)
                  : l === a && (n = (i - o) / s + 4),
                (n = Math.round(60 * n)) < 0 && (n += 360));
            }
          } catch (e) {}
          return n;
        },
        eI = t(26500).getImgColor,
        eE = t(37667),
        eD = eE.useState,
        eR = eE.useRef,
        eT = eE.useEffect,
        eZ = {},
        eW = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.img;
          (e.opacity, e.format);
          var t = eD(!1),
            i = (0, l.Z)(t, 2),
            o = i[0];
          i[1];
          var a = eD(""),
            r = (0, l.Z)(a, 2),
            s = r[0];
          r[1];
          var c = eD(!1),
            d = (0, l.Z)(c, 2),
            u = d[0];
          d[1];
          var v = function (e) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 186;
              try {
                var t = e
                    .match(/(\d+\.?\d*)/g)
                    .map(Number)
                    .slice(0, 3),
                  i = (0, l.Z)(t, 3),
                  o = i[0],
                  a = i[1],
                  r = i[2];
                return 0.299 * o + 0.587 * a + 0.114 * r > n;
              } catch (e) {
                return (
                  console.error(
                    "isColorCloseToWhiteCalc: ",
                    null == e ? void 0 : e.message,
                  ),
                  !1
                );
              }
            },
            _ = function (e) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 70;
              try {
                var t = e
                    .match(/(\d+\.?\d*)/g)
                    .map(Number)
                    .slice(0, 3),
                  i = (0, l.Z)(t, 3),
                  o = i[0],
                  a = i[1],
                  r = i[2];
                return 0.299 * o + 0.587 * a + 0.114 * r < n;
              } catch (e) {
                return (
                  console.error(
                    "isColorCloseToBlackCalc: ",
                    null == e ? void 0 : e.message,
                  ),
                  !1
                );
              }
            },
            g = eR(!1);
          return (
            eT(
              function () {
                n && !g.current && ((g.current = !0), init());
              },
              [n],
            ),
            {
              error: o,
              themeColor: s,
              isColorCloseToWhite: u,
              getThemeColorByImg: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = e.img,
                  t = e.opacity,
                  i = e.format,
                  o = void 0 === i ? "rgb" : i;
                return new Promise(function (e, i) {
                  try {
                    eI(n).then(function (n) {
                      if (!n) {
                        e({ error: !0, message: "获取图片颜色失败" });
                        return;
                      }
                      n && (n = n.replace(")", ",".concat(t || 1, ")")));
                      var i,
                        a = n;
                      ((i = "hex" === o ? eL(a) : a),
                        e({
                          themeColor: i,
                          hueValue: eM(a),
                          isColorCloseToWhite: v(a),
                          isColorCloseToBlack: _(a),
                        }));
                    });
                  } catch (n) {
                    (console.warn("getThemeColorByImg themeColor: ", n),
                      e({ error: !0, message: "获取图片颜色失败" }));
                  }
                });
              },
            }
          );
        };
      function eO(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i));
        }
        return t;
      }
      var eB = (0, w.Z)(
          (0, v.Pi)(function (e) {
            var n,
              t,
              i,
              o = e.stores,
              l = e.mobileLog,
              s = e.clickMobileLog,
              u = (null == o ? void 0 : o.dataStore) || {},
              v = u.skin,
              _ = u.AISongData,
              m = eW().getThemeColorByImg,
              p = ((null == o ? void 0 : o.appStore) || {}).baseInfo,
              h = (0, d.useState)(""),
              f = h[0],
              x = h[1],
              b = (0, d.useState)(""),
              j = b[0],
              y = b[1],
              w = (0, d.useState)(""),
              N = w[0],
              C = w[1],
              L = (0, d.useRef)(null);
            ((0, d.useEffect)(
              function () {
                if (_)
                  return (
                    L.current && clearTimeout(L.current),
                    (L.current = setTimeout(function () {
                      if (window._dontExposeAISong) {
                        window._dontExposeAISong = !1;
                        return;
                      }
                      (l &&
                        l({
                          a: 1133817,
                          b: "曝光",
                          ft: "周",
                          svar1: "听歌统计_本周AI主题曲卡片",
                        }),
                        (0, k.yY)({
                          a: 1134837,
                          b: "曝光",
                          ft: "听歌统计_本周AI主题曲卡片",
                          r: "音色制作人",
                          hreffrom: (0, k.re)("hreffrom"),
                        }));
                    }, 400)),
                    function () {
                      L.current && clearTimeout(L.current);
                    }
                  );
              },
              [_],
            ),
              (0, d.useEffect)(
                function () {
                  null != _ &&
                    _.image_url &&
                    M(null == _ ? void 0 : _.image_url);
                },
                [null == _ ? void 0 : _.image_url],
              ));
            var M =
                ((n = (0, r.Z)(
                  c().mark(function e(n) {
                    var t;
                    return c().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!(null != eZ && eZ[n])) {
                              e.next = 5;
                              break;
                            }
                            return (
                              C(eZ[n].btnBg),
                              x(eZ[n].themeColor),
                              y(eZ[n].vinylCoverUrl),
                              e.abrupt("return")
                            );
                          case 5:
                            return (
                              (eZ[n] = {
                                btnBg: "#FF4784",
                                themeColor: "254, 225, 233",
                                vinylCoverUrl:
                                  "https://voowebpbssdl.kugou.com/fmt01_1470397827b5f6070b48bdae9182df10.png",
                              }),
                              (e.next = 11),
                              m({
                                img: (0, k.Mb)(n),
                                opacity: 1,
                                format: "rgb",
                              })
                            );
                          case 11:
                            (((t = e.sent.hueValue) > 0 && t <= 20) ||
                              (t <= 80
                                ? ((eZ[n].btnBg = "#FDDB70"),
                                  (eZ[n].themeColor = "255, 248, 199"),
                                  (eZ[n].vinylCoverUrl =
                                    "https://voowebpbssdl.kugou.com/fmt01_22b19c887ee2d8621011c9a3a090dc4e.png"))
                                : t <= 170
                                  ? ((eZ[n].btnBg = "#93FF91"),
                                    (eZ[n].themeColor = "218, 251, 230"),
                                    (eZ[n].vinylCoverUrl =
                                      "https://voowebpbssdl.kugou.com/fmt01_c5bd49868a934bc61b035a9108ea9af3.png"))
                                  : t <= 210
                                    ? ((eZ[n].btnBg = "#00D0C9"),
                                      (eZ[n].themeColor = "209, 254, 248"),
                                      (eZ[n].vinylCoverUrl =
                                        "https://voowebpbssdl.kugou.com/fmt01_a40590b6a87e42255d16b110bc9b0ece.png"))
                                    : t <= 250
                                      ? ((eZ[n].btnBg = "#4AC9FF"),
                                        (eZ[n].themeColor = "208, 246, 255"),
                                        (eZ[n].vinylCoverUrl =
                                          "https://voowebpbssdl.kugou.com/fmt01_8fd479745efb18c951fe5c63087d100a.png"))
                                      : t <= 300
                                        ? ((eZ[n].btnBg = "#C291FF"),
                                          (eZ[n].themeColor = "252, 222, 255"),
                                          (eZ[n].vinylCoverUrl =
                                            "https://voowebpbssdl.kugou.com/fmt01_6e1822335e95189e4a7507193079d4c4.png"))
                                        : t <= 340 &&
                                          ((eZ[n].btnBg = "#FFA3CD"),
                                          (eZ[n].themeColor = "255, 222, 244"),
                                          (eZ[n].vinylCoverUrl =
                                            "https://voowebpbssdl.kugou.com/fmt01_2f90abb2ea6b03ac4076d2b6c18dad0e.png"))),
                              C(eZ[n].btnBg),
                              x(eZ[n].themeColor),
                              y(eZ[n].vinylCoverUrl));
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (e) {
                  return n.apply(this, arguments);
                }),
              E = function (e) {
                if (!e) return "";
                var n = encodeURIComponent(e),
                  t = {
                    "'": "%27",
                    "(": "%28",
                    ")": "%29",
                    "!": "%21",
                    "~": "%7E",
                    "*": "%2A",
                  };
                for (var i in t)
                  t.hasOwnProperty(i) &&
                    (n = n.replace(RegExp("\\" + i, "g"), t[i]));
                return n;
              };
            return _
              ? (0, S.jsxs)("div", {
                  className: g()(eS().wrap, eS()[v]),
                  children: [
                    (0, S.jsx)("div", {
                      className: eS().title,
                      children: "本周听歌主题曲已AI生成，去听听",
                    }),
                    (0, S.jsxs)("div", {
                      className: eS().songCard,
                      style: {
                        background: "linear-gradient(180deg, rgba("
                          .concat(f, ", 1), rgba(")
                          .concat(f, ", 0.5), rgba(")
                          .concat(f, ", 0.36)"),
                      },
                      children: [
                        (0, S.jsxs)("div", {
                          className: eS().songInfo,
                          children: [
                            (0, S.jsxs)("div", {
                              className: eS().coverBox,
                              children: [
                                (0, S.jsx)("img", {
                                  className: eS().cover,
                                  src: (0, k.Mb)(
                                    null == _ ? void 0 : _.image_url,
                                  ),
                                  alt: null == _ ? void 0 : _.song_name,
                                  onError: k.k2,
                                }),
                                (0, S.jsx)("img", {
                                  className: eS().vinylCover,
                                  src: j,
                                }),
                              ],
                            }),
                            (0, S.jsxs)("div", {
                              className: eS().meta,
                              children: [
                                (0, S.jsx)("div", {
                                  className: eS().songName,
                                  children: null == _ ? void 0 : _.song_name,
                                }),
                                (0, S.jsx)("div", {
                                  className: eS().artist,
                                  children: null == p ? void 0 : p.userNickName,
                                }),
                              ],
                            }),
                          ],
                        }),
                        null != _ && _.lyric_text
                          ? (0, S.jsx)("div", {
                              className: eS().lyricBox,
                              children:
                                null == _
                                  ? void 0
                                  : null === (t = _.lyric_text) || void 0 === t
                                    ? void 0
                                    : null === (i = t.split("\n")) ||
                                        void 0 === i
                                      ? void 0
                                      : i.map(function (e, n) {
                                          return (0, S.jsx)(
                                            "p",
                                            { children: e },
                                            n,
                                          );
                                        }),
                            })
                          : null,
                        (0, S.jsxs)("div", {
                          className: eS().okBtn,
                          onClick: function () {
                            ((0, k.yY)({
                              a: 1134838,
                              b: "点击",
                              ft: "听歌统计_AI主题曲_听全曲",
                              r: "音色制作人",
                              hreffrom: (0, k.re)("hreffrom"),
                            }),
                              s("听歌小结", {
                                svar2: "听歌统计_AI主题曲_听全曲",
                              }),
                              localStorage.setItem(
                                "".concat(
                                  null == _ ? void 0 : _.date,
                                  "_aikweek_song_data",
                                ),
                                JSON.stringify(
                                  (function (e) {
                                    for (var n = 1; n < arguments.length; n++) {
                                      var t =
                                        null != arguments[n]
                                          ? arguments[n]
                                          : {};
                                      n % 2
                                        ? eO(Object(t), !0).forEach(
                                            function (n) {
                                              (0, a.Z)(e, n, t[n]);
                                            },
                                          )
                                        : Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(
                                                t,
                                              ),
                                            )
                                          : eO(Object(t)).forEach(function (n) {
                                              Object.defineProperty(
                                                e,
                                                n,
                                                Object.getOwnPropertyDescriptor(
                                                  t,
                                                  n,
                                                ),
                                              );
                                            });
                                    }
                                    return e;
                                  })({}, _),
                                ),
                              ));
                            var e =
                              "https://m.kugou.com/ssr/aik_ssr/aicreatehome?ssr_header_param=983231&isHideTitleBar=1&create_week_song="
                                .concat(
                                  null == _ ? void 0 : _.date,
                                  "&favorite_singer_name=",
                                )
                                .concat(
                                  E(
                                    null == _ ? void 0 : _.favorite_singer_name,
                                  ),
                                  "&favorite_song_name=",
                                )
                                .concat(
                                  E(null == _ ? void 0 : _.favorite_song_name),
                                  "&active_time=",
                                )
                                .concat(
                                  E(null == _ ? void 0 : _.active_time),
                                  "&lyric_text=",
                                )
                                .concat(
                                  E(null == _ ? void 0 : _.lyric_text),
                                  "&image_url=",
                                )
                                .concat(
                                  E(null == _ ? void 0 : _.image_url),
                                  "&hide_theme=1&disable_enhancement=1&disable_thinking=1&hreffrom=listeningstats",
                                );
                            I.LightMobileCall.mobileCall(A.x8.openURL, {
                              browser: 0,
                              url: e,
                            });
                          },
                          style: { backgroundColor: N },
                          children: [(0, S.jsx)("span", {}), "听全曲"],
                        }),
                      ],
                    }),
                  ],
                })
              : null;
          }),
        ),
        eV = t(80168),
        eF = t.n(eV),
        eP = t(85232),
        eU = t(11120),
        eY = t(81470),
        eH = t(28956),
        ez = t(97052);
      function eG(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i));
        }
        return t;
      }
      function eQ(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? eG(Object(t), !0).forEach(function (n) {
                (0, a.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : eG(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n),
                  );
                });
        }
        return e;
      }
      var eK = function (e) {
        return (0, S.jsxs)(
          "svg",
          eQ(
            eQ({}, e),
            {},
            {
              children: [
                (0, S.jsx)("path", {
                  d: "M1.398 23.916V10.5c0-.966.784-1.75 1.75-1.75h5.583l3.517-7h3.039c.966 0 1.75.784 1.75 1.75v5.25h7.937a1.75 1.75 0 0 1 1.714 2.105L23.912 24.27a1.75 1.75 0 0 1-1.714 1.395H3.148a1.75 1.75 0 0 1-1.75-1.75Z",
                  stroke: "#000",
                  strokeWidth: "2",
                  strokeLinejoin: "round",
                }),
                (0, S.jsx)("path", {
                  d: "M8.398 13.941v7.117",
                  stroke: "#000",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                }),
              ],
            },
          ),
        );
      };
      eK.defaultProps = {
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      };
      var eJ = function (e) {
        return (0, S.jsx)(
          "svg",
          eQ(
            eQ({}, e),
            {},
            {
              children: (0, S.jsx)("path", {
                d: "M15.286.75a2.75 2.75 0 0 1 2.75 2.75v4.25h6.939a2.75 2.75 0 0 1 2.692 3.308l-2.775 13.416a2.75 2.75 0 0 1-2.694 2.192H3.148a2.75 2.75 0 0 1-2.75-2.75V10.5a2.75 2.75 0 0 1 2.75-2.75h4.966l3.24-6.45.073-.12a1 1 0 0 1 .821-.43h3.038ZM7.398 22.058h2V12.94h-2v9.117Z",
                fill: "#07F",
              }),
            },
          ),
        );
      };
      eJ.defaultProps = {
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      };
      var eq = (0, w.Z)(
          (0, v.Pi)(function (e) {
            var n,
              t = e.stores,
              i = e.mobileLog,
              o = e.clickMobileLog,
              l = e.SplitLine,
              s = e.type,
              u = e.friendRankData,
              v = e.showLikeBtn,
              _ = void 0 === v || v,
              m = e.onLike,
              p = (null == t ? void 0 : t.dataStore) || {},
              h = p.skin,
              f = p.dimension,
              x = p.date,
              b = null != f ? f : 1,
              j =
                (null == x
                  ? void 0
                  : null === (n = x.format) || void 0 === n
                    ? void 0
                    : n.call(x, "YYYYMMDD")) || "",
              y = (null == u ? void 0 : u.rank_users) || null,
              w = (0, d.useState)(null),
              N = w[0],
              C = w[1],
              L = (0, d.useRef)(null),
              M = (0, d.useCallback)(
                (0, r.Z)(
                  c().mark(function e() {
                    return c().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!L.current) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return", L.current);
                          case 2:
                            return e.abrupt(
                              "return",
                              new Promise(function (e) {
                                I.LightMobileCall.mobileCall(
                                  122,
                                  null,
                                  function (n) {
                                    if (!n) {
                                      e(null);
                                      return;
                                    }
                                    var t = (0, k.o3)(n);
                                    ((L.current =
                                      (null == t
                                        ? void 0
                                        : t.function_module) || null),
                                      e(L.current));
                                  },
                                );
                              }),
                            );
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                ),
                [],
              );
            (0, d.useEffect)(
              function () {
                if (!(null != y && y.length)) {
                  C(null);
                  return;
                }
                var e = !1;
                return (
                  (0, r.Z)(
                    c().mark(function n() {
                      var t;
                      return c().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return ((n.next = 2), M());
                            case 2:
                              if (((t = n.sent), !e)) {
                                n.next = 5;
                                break;
                              }
                              return n.abrupt("return");
                            case 5:
                              C(
                                y.map(function (e) {
                                  return eQ(
                                    eQ({}, e),
                                    {},
                                    {
                                      vipIconInfo: (0, eY.Lk)(
                                        (0, eY.W9)(e.vip_info),
                                        t,
                                      ),
                                    },
                                  );
                                }),
                              );
                            case 7:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    }),
                  )(),
                  function () {
                    e = !0;
                  }
                );
              },
              [y],
            );
            var D = (0, d.useRef)(null),
              R = (0, d.useMemo)(
                function () {
                  return (N || []).slice(0, 3);
                },
                [N],
              ),
              T = A.En[b] || "周",
              W = b === A.Sr.DAY ? "今日" : "本".concat(T),
              O = (0, d.useRef)(!1);
            (0, d.useEffect)(
              function () {
                if (null != N && N.length)
                  return (
                    D.current && clearTimeout(D.current),
                    (D.current = setTimeout(function () {
                      !O.current &&
                        ((O.current = !0),
                        i &&
                          i({
                            a: 1133817,
                            b: "曝光",
                            ft: "周",
                            svar1: "听歌统计_好友排行榜",
                          }),
                        i &&
                          i({
                            a: 1135180,
                            b: "曝光",
                            ft: "好友听歌排行榜",
                            r: "好友听歌排行榜",
                            svar1: (0, A.n2)(b),
                            svar2: "听歌统计抽屉",
                          }));
                    }, 300)),
                    function () {
                      D.current && clearTimeout(D.current);
                    }
                  );
              },
              [null == N ? void 0 : N.length],
            );
            var B = function (e) {
                (o && o("听歌小结", { svar2: "听歌统计_好友排行榜_VIPICON" }),
                  eU.k.clickStat(),
                  eU.k.jumpVipPage({
                    dataType: (0, eY.HQ)(e),
                    sourceId: eU.k.VIP_CONFIG.source_id,
                  }));
              },
              F = function (e) {
                (o && o("听歌小结", { svar2: "听歌统计_好友排行榜_用户头像" }),
                  i &&
                    i({
                      a: 1135181,
                      b: "点击",
                      ft: "好友听歌排行榜",
                      r: "好友听歌排行榜",
                      svar1: "用户信息",
                      svar2: String(e),
                      svar3: (0, A.n2)(b),
                    }),
                  I.LightMobileCall.mobileCall(182, {
                    userid: String(e),
                    source: "listen_report",
                    type: 1,
                  }));
              };
            return ((0, d.useEffect)(
              function () {
                null != N &&
                  N.length &&
                  (null === eU.k || void 0 === eU.k || eU.k.exposeStat());
              },
              [null == N ? void 0 : N.length],
            ),
            (null != u && u.is_close) || !(null != N && N.length))
              ? null
              : (0, S.jsxs)(S.Fragment, {
                  children: [
                    (0, S.jsxs)("div", {
                      className: g()(eF().wrap, h && eF()[h]),
                      children: [
                        (0, S.jsxs)("div", {
                          className: eF().header,
                          onClick: function () {
                            (o &&
                              o("听歌小结", {
                                svar2: "听歌统计_好友排行榜_更多",
                              }),
                              i &&
                                i({
                                  a: 1135181,
                                  b: "点击",
                                  ft: "好友听歌排行榜",
                                  r: "好友听歌排行榜",
                                  svar1: "更多",
                                  svar3: (0, A.n2)(b),
                                }),
                              (0, eP.w)({ dimension: b, date: j, skin: h }));
                          },
                          children: [
                            (0, S.jsxs)("div", {
                              className: eF().title,
                              children: [W, "好友听歌排行"],
                            }),
                            "share" === s
                              ? null
                              : (0, S.jsxs)("span", {
                                  className: eF().more,
                                  children: [
                                    (0, S.jsx)("span", { children: "更多" }),
                                    (0, S.jsx)(Z.Z, { name: "right_half" }),
                                  ],
                                }),
                          ],
                        }),
                        (0, S.jsx)("div", {
                          className: eF().list,
                          children: R.map(function (e, n) {
                            var t,
                              i,
                              o = (null == e ? void 0 : e.user_info) || {},
                              l = (null == e ? void 0 : e.rank) || n + 1,
                              r =
                                (0, I.replaceHttpsImg)(
                                  (0, k.Fq)(null == o ? void 0 : o.t_pic, 150),
                                ) || V.Z;
                            return (0, S.jsxs)(
                              "div",
                              {
                                className: eF().item,
                                children: [
                                  (0, S.jsx)("div", {
                                    className: eF().rank,
                                    children: l,
                                  }),
                                  (0, S.jsx)("div", {
                                    className: eF().avatar,
                                    onClick: function () {
                                      return F(null == o ? void 0 : o.userid);
                                    },
                                    children: (0, S.jsx)("img", {
                                      alt: "",
                                      src: r,
                                      onError: k.LG,
                                    }),
                                  }),
                                  (0, S.jsxs)("div", {
                                    className: eF().info,
                                    children: [
                                      (0, S.jsx)("div", {
                                        className: eF().userName,
                                        onClick: function () {
                                          return F(
                                            null == o ? void 0 : o.userid,
                                          );
                                        },
                                        children: (0, S.jsx)(E.Z, {
                                          width: 240,
                                          targetText:
                                            (null == o
                                              ? void 0
                                              : o.t_nickname) || "酷狗用户",
                                          style: { fontSize: 30 },
                                        }),
                                      }),
                                      (0, S.jsx)("div", {
                                        className: eF().badges,
                                        children:
                                          null != e &&
                                          null !== (t = e.vipIconInfo) &&
                                          void 0 !== t &&
                                          t.isVip
                                            ? (0, S.jsx)("div", {
                                                className: eF().vipIconWrap,
                                                onClick: function () {
                                                  return B(
                                                    null == e
                                                      ? void 0
                                                      : e.vipIconInfo,
                                                  );
                                                },
                                                role: "button",
                                                tabIndex: 0,
                                                children: (0, S.jsx)("img", {
                                                  className: eF().vipIcon,
                                                  src:
                                                    null == e
                                                      ? void 0
                                                      : null ===
                                                            (i =
                                                              e.vipIconInfo) ||
                                                          void 0 === i
                                                        ? void 0
                                                        : i.iconUrl,
                                                  alt: "VIP",
                                                }),
                                              })
                                            : null,
                                      }),
                                    ],
                                  }),
                                  (0, S.jsx)("div", {
                                    className: eF().stats,
                                    children: (0, S.jsx)("span", {
                                      className: eF().duration,
                                      children: (0, ez.e)(
                                        null == e ? void 0 : e.duration,
                                      ),
                                    }),
                                  }),
                                  _ &&
                                    (0, S.jsxs)("div", {
                                      className: eF().likeWrap,
                                      onClick: m
                                        ? function (n) {
                                            return m(
                                              null == o ? void 0 : o.userid,
                                              e.liked,
                                              n,
                                            );
                                          }
                                        : void 0,
                                      children: [
                                        e.liked
                                          ? (0, S.jsx)(eJ, {
                                              className: eF().likedIcon,
                                            })
                                          : (0, S.jsx)(eK, {
                                              className: eF().likeIcon,
                                            }),
                                        e.like_count > 0 &&
                                          (0, S.jsx)("span", {
                                            className: g()(
                                              eF().likeCount,
                                              (0, a.Z)(
                                                {},
                                                eF().likeCountLiked,
                                                e.liked,
                                              ),
                                            ),
                                            children: (0, eH.G)(e.like_count),
                                          }),
                                      ],
                                    }),
                                ],
                              },
                              ""
                                .concat(
                                  (null == o ? void 0 : o.userid) || n,
                                  "_",
                                )
                                .concat(l),
                            );
                          }),
                        }),
                      ],
                    }),
                    (0, S.jsx)(l, { isHollow: !0 }),
                  ],
                });
          }),
        ),
        eX = t(1324),
        e$ = t.n(eX),
        e0 = function (e) {
          var n = (0, d.useState)(e),
            t = n[0],
            i = n[1],
            o = (0, d.useRef)(t);
          return (
            (o.current = t),
            [
              t,
              function (e) {
                ((o.current = "function" == typeof e ? e(o.current) : e),
                  i(o.current));
              },
              o,
            ]
          );
        };
      function e1(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i));
        }
        return t;
      }
      function e2(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? e1(Object(t), !0).forEach(function (n) {
                (0, a.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : e1(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n),
                  );
                });
        }
        return e;
      }
      var e5 = (0, w.Z)(
        (0, v.Pi)(function (e) {
          var n,
            t,
            i,
            o = e.vooConfig,
            r = e.stores,
            s = (e.mobileLog, e.clickMobileLog),
            c = r || {},
            u = c.dataStore,
            v = c.appStore,
            _ = (u || {}).dimension,
            g = e0(null),
            m = (0, l.Z)(g, 3),
            p = m[0],
            h = m[1],
            f = m[2],
            x = (0, d.useState)(!1),
            b = x[0],
            j = x[1],
            y = function (e) {
              if ("string" != typeof e || !e.includes("{time}")) return e;
              var n = null == u ? void 0 : u.date;
              if (!(null != n && n.format)) return e;
              var t = "";
              if (_ === A.Sr.DAY) t = n.format("M.D");
              else if (_ === A.Sr.WEEK)
                t = ""
                  .concat(n.format("M.D"), "~")
                  .concat(n.add(6, "days").format("M.D"));
              else {
                if (_ !== A.Sr.MONTH) return e;
                t = n.format("M月");
              }
              return e.replace(/\{time\}/g, t);
            },
            w = function (e) {
              if ("string" != typeof e) return e;
              var n = null == u ? void 0 : u.date;
              if (!(null != n && n.format)) return e;
              var t = n.format("YYYY-MM-DD"),
                i = t;
              return (
                _ === A.Sr.WEEK
                  ? (i = n.add(6, "days").format("YYYY-MM-DD"))
                  : _ === A.Sr.MONTH &&
                    (i = n.endOf("month").format("YYYY-MM-DD")),
                e.replace(/\{start_time\}/g, t).replace(/\{end_time\}/g, i)
              );
            };
          return ((0, d.useEffect)(
            function () {
              var e,
                n = !0;
              (null != v && v.isInClient
                ? ((0, I.isIOS)()
                    ? (0, I.ltIOS)(12)
                      ? (n = !1)
                      : (null == v
                          ? void 0
                          : null === (e = v.baseInfo) || void 0 === e
                            ? void 0
                            : e.appid) !== "1000" && (n = !1)
                    : (80 > (0, I.getChromeVersion)() || (0, I.ltAndroid)(9)) &&
                      (n = !1),
                  n && null != v && v.isHarmony && (n = !1))
                : (n = !1),
                j(n));
            },
            [
              null == v ? void 0 : v.isHarmony,
              null == v
                ? void 0
                : null === (n = v.baseInfo) || void 0 === n
                  ? void 0
                  : n.appid,
            ],
          ),
          (0, d.useEffect)(
            function () {
              var e,
                n,
                t =
                  ((e = {}),
                  (0, a.Z)(e, A.Sr.DAY, "day"),
                  (0, a.Z)(e, A.Sr.WEEK, "week"),
                  (0, a.Z)(e, A.Sr.MONTH, "month"),
                  e),
                i =
                  null == o
                    ? void 0
                    : null === (n = o.agentConfig) || void 0 === n
                      ? void 0
                      : n[t[_]];
              if (null != i && i.length) {
                h((0, k.J)(i));
                return;
              }
              h(null);
            },
            [_],
          ),
          b && null != p && p.text)
            ? (0, S.jsxs)("div", {
                className: e$().wrap,
                onClick: function () {
                  var e,
                    n = f.current,
                    t = "dayBaseParams";
                  _ === A.Sr.WEEK
                    ? (t = "weekBaseParams")
                    : _ === A.Sr.MONTH && (t = "monthBaseParams");
                  var i =
                    null == o
                      ? void 0
                      : null === (e = o.agentConfig) || void 0 === e
                        ? void 0
                        : e[t];
                  s && s("听歌小结", { svar2: "agent解读" });
                  var a = (null == n ? void 0 : n.params) || i || {};
                  try {
                    var l = "string" == typeof a ? JSON.parse(a) : a;
                    ((a =
                      l && "object" == typeof l && !Array.isArray(l)
                        ? e2({}, l)
                        : {}),
                      Object.keys(a).forEach(function (e) {
                        a[e] = w(a[e]);
                      }));
                  } catch (e) {
                    (console.warn(
                      "jumpToAgent",
                      null == e ? void 0 : e.message,
                    ),
                      (a = {}));
                  }
                  var r = a.query_text || a.text;
                  (r && (a.query_text = y(r)),
                    console.log("jumpToAgent", a),
                    I.LightMobileCall.isInClient() &&
                      I.LightMobileCall.mobileCall(1600, {
                        tab: 0,
                        params: e2({}, a),
                      }));
                },
                children: [
                  (0, S.jsx)("div", {
                    className: e$().icon,
                    style: {
                      backgroundImage: "url(".concat(
                        (null == o
                          ? void 0
                          : null === (t = o.agentConfig) || void 0 === t
                            ? void 0
                            : t.icon) || "",
                        ")",
                      ),
                    },
                  }),
                  (0, S.jsx)("div", {
                    className: e$().text,
                    children: y(p.text),
                  }),
                  (0, S.jsx)("div", {
                    className: e$().btn,
                    children:
                      (null == o
                        ? void 0
                        : null === (i = o.agentConfig) || void 0 === i
                          ? void 0
                          : i.btnText) || "看详情",
                  }),
                ],
              })
            : null;
        }),
      );
      function e3(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i));
        }
        return t;
      }
      function e8(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? e3(Object(t), !0).forEach(function (n) {
                (0, a.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : e3(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n),
                  );
                });
        }
        return e;
      }
      var e4 = (0, w.Z)(
        (0, v.Pi)(function (e) {
          var n,
            t,
            i,
            o,
            a,
            s,
            v,
            _,
            m,
            h,
            f,
            x,
            b,
            j,
            y = e.yearData,
            w = e.type,
            N = void 0 === w ? "normal" : w,
            C = e.stores,
            R = e.clickMobileLog,
            T = e.mobileLog,
            O = e.vooConfig,
            B = e.friendRankData,
            V = e.onLike,
            F = C.dataStore,
            P = C.appStore,
            U = F.dimension,
            Y = F.statistics,
            H = F.dateIndexs,
            G = F.dateRanges,
            Q = F.date,
            K = F.listen_duration,
            J = F.skin,
            q = F.AISongData,
            X =
              (null == H ? void 0 : H[U]) >=
              (null == G ? void 0 : G[U].length) - 1,
            $ =
              (null == H ? void 0 : H[U]) ===
                (null == G ? void 0 : G[U].length) - 2 && U === A.Sr.WEEK,
            ee = X && U === A.Sr.WEEK,
            en = !!(null != Y && Y.is_enable_mental_state),
            et = en && U === A.Sr.WEEK && (null == Y ? void 0 : Y.mental_state),
            ei =
              (null == P ? void 0 : P.isInClient) &&
              (null != P && P.isAndroid
                ? (null == P ? void 0 : P.clientver) >=
                  (null == e
                    ? void 0
                    : null === (x = e.clientDSVersion) || void 0 === x
                      ? void 0
                      : x.Android)
                : null != P &&
                  !!P.isIOS &&
                  (null == P ? void 0 : P.clientver) >=
                    (null == e
                      ? void 0
                      : null === (b = e.clientDSVersion) || void 0 === b
                        ? void 0
                        : b.iOS)),
            eo = en && "share" !== N && ei,
            ea = (null == Y ? void 0 : Y.listen_total) > 0,
            el = (0, d.useMemo)(
              function () {
                var e = null == O ? void 0 : O.friendRank,
                  n =
                    (null == e ? void 0 : e.enabled) ||
                    "1" === (0, k.vH)().showFriendRank;
                return (
                  (U !== A.Sr.MONTH ||
                    (null == e ? void 0 : e.showInMonth) !== !1) &&
                  n
                );
              },
              [null == O ? void 0 : O.friendRank, U],
            ),
            er = (null == O ? void 0 : O.showLikeBtn) !== !1,
            es = (0, d.useRef)(null),
            ec = (0, d.useMemo)(
              function () {
                if (!Q || !(null != Q && Q.format)) return null;
                var n = null == Q ? void 0 : Q.format("YYYY-MM"),
                  t = null;
                return (
                  (e.monthReports || []).some(function (e) {
                    if (
                      (null == e ? void 0 : e.month) === n &&
                      null != e &&
                      e.enabled
                    )
                      return ((t = e), !0);
                  }),
                  t
                );
              },
              [Q],
            );
          (0, d.useEffect)(
            function () {
              if (U === A.Sr.WEEK) {
                if (window._dontGetAISongData) {
                  window._dontGetAISongData = !1;
                  return;
                }
                return (
                  es.current && clearTimeout(es.current),
                  (es.current = setTimeout(function () {
                    var e, n;
                    ed(
                      (null == Y
                        ? void 0
                        : null === (e = Y.dates) || void 0 === e
                          ? void 0
                          : null === (n = e[0]) || void 0 === n
                            ? void 0
                            : n.date) ||
                        (null == Q ? void 0 : Q.format("YYYYMMDD")),
                      Y,
                    );
                  }, 400)),
                  function () {
                    es.current && clearTimeout(es.current);
                  }
                );
              }
            },
            [Y, U],
          );
          var ed =
              ((n = (0, r.Z)(
                c().mark(function e(n, t) {
                  var i, o, a, r, s, d, u, v, _, g, m, p, h, f, x, b, j, y;
                  return c().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(
                            !(
                              null != t &&
                              null !== (i = t.rank_singer) &&
                              void 0 !== i &&
                              null !== (o = i[0]) &&
                              void 0 !== o &&
                              null !== (a = o.singer_info) &&
                              void 0 !== a &&
                              a.name
                            ) &&
                            !(
                              null != t &&
                              null !== (r = t.rank_song) &&
                              void 0 !== r &&
                              null !== (s = r[0]) &&
                              void 0 !== s &&
                              null !== (d = s.song_info) &&
                              void 0 !== d &&
                              d.name
                            ) &&
                            !A.Rj[
                              null == t ? void 0 : t.most_active_period_type
                            ]
                          )) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            (f = {
                              date: n,
                              favorite_singer_name:
                                (h = function (e) {
                                  return e && "string" == typeof e
                                    ? (e = (e = e.replace(
                                        /\s*\([^)]*\)\s*/g,
                                        "",
                                      ))
                                        .replace(/[ \t]+/g, " ")
                                        .replace(/[ \t]+$/gm, ""))
                                    : e;
                                })(
                                  null == t
                                    ? void 0
                                    : null === (u = t.rank_singer) ||
                                        void 0 === u
                                      ? void 0
                                      : null === (v = u[0]) || void 0 === v
                                        ? void 0
                                        : null === (_ = v.singer_info) ||
                                            void 0 === _
                                          ? void 0
                                          : _.name,
                                ) || "",
                              favorite_song_name:
                                h(
                                  null == t
                                    ? void 0
                                    : null === (g = t.rank_song) || void 0 === g
                                      ? void 0
                                      : null === (m = g[0]) || void 0 === m
                                        ? void 0
                                        : null === (p = m.song_info) ||
                                            void 0 === p
                                          ? void 0
                                          : p.name,
                                ) || "",
                              active_time:
                                A.Rj[
                                  null == t ? void 0 : t.most_active_period_type
                                ] || "",
                            }),
                            (e.next = 6),
                            (0, ej.Zg)(f)
                          );
                        case 6:
                          if (
                            ((x = e.sent),
                            (j = (b = (0, l.Z)(x, 2))[0]),
                            (y = b[1]),
                            !(!j || y))
                          ) {
                            e.next = 13;
                            break;
                          }
                          return (F.setAISongData(null), e.abrupt("return"));
                        case 13:
                          (j.lyric_text && (j.lyric_text = h(j.lyric_text)),
                            F.setAISongData(e8(e8({}, j), f)));
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function (e, t) {
                return n.apply(this, arguments);
              }),
            eu = function () {
              var e =
                  0 === U
                    ? (null == Y ? void 0 : Y.listen_duration) -
                        (null == Y ? void 0 : Y.last_listen_duration) ==
                      0
                      ? "fair"
                      : (null == Y ? void 0 : Y.listen_duration) -
                            (null == Y ? void 0 : Y.last_listen_duration) >
                          0
                        ? "up"
                        : "down"
                    : (null == Y ? void 0 : Y.duration_defeat_percent) > 0
                      ? "up"
                      : "",
                n = A.Rj[null == Y ? void 0 : Y.most_active_period_type],
                t =
                  0 === U
                    ? "fair" === e
                      ? "与昨日持平"
                      : "比昨日"
                          .concat("up" === e ? "多" : "少")
                          .concat(
                            (0, k.rI)(
                              null == Y ? void 0 : Y.listen_duration,
                              null == Y ? void 0 : Y.last_listen_duration,
                            ),
                          )
                    : "up" === e
                      ? "超过".concat(
                          (0, k.rl)(
                            (null == Y ? void 0 : Y.duration_defeat_percent) /
                              100,
                          ),
                          "的人",
                        )
                      : "",
                i = (0, k.WJ)(null == Y ? void 0 : Y.listen_duration),
                o =
                  (3 === U
                    ? null == y
                      ? void 0
                      : y.total_days
                    : null == Y
                      ? void 0
                      : Y.accumulate_listen_days) || 0;
              return (0, S.jsxs)("div", {
                className: p().moduleHeader,
                children: [
                  (0, S.jsxs)("div", {
                    className: p().headerLeft,
                    children: [
                      (0, S.jsx)("span", {
                        className: p().bold,
                        children: ""
                          .concat(
                            U === A.Sr.DAY || U === A.Sr.YEAR ? "今" : "本",
                          )
                          .concat(A.En[U], "听歌"),
                      }),
                      0 !== U &&
                        (0, S.jsxs)(S.Fragment, {
                          children: [
                            (0, S.jsx)("span", {
                              className: g()(p().headNum, p().ssmallNum),
                              children: o,
                            }),
                            (0, S.jsxs)("span", {
                              className: p().headUnit,
                              children: [
                                "天",
                                (null == i ? void 0 : i.count) > 0 ? "共" : "",
                              ],
                            }),
                          ],
                        }),
                      (null == i ? void 0 : i.count) >= 0 &&
                        (0, S.jsxs)(S.Fragment, {
                          children: [
                            (0, S.jsx)("span", {
                              className: g()(p().headNum, p().ssmallNum),
                              children: null == i ? void 0 : i.count,
                            }),
                            (0, S.jsx)("span", {
                              className: p().headUnit,
                              children: null == i ? void 0 : i.unit,
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, S.jsxs)("div", {
                    className: p().headerRight,
                    children: [
                      (0, S.jsx)("div", {
                        children:
                          (null == n ? void 0 : n.length) > 0
                            ? (0, S.jsxs)(S.Fragment, {
                                children: [
                                  (0, S.jsx)(Z.Z, {
                                    className: p().headerRightIcon,
                                    name: "headphones2",
                                  }),
                                  (0, S.jsxs)("span", {
                                    children: ["活跃时段", n],
                                  }),
                                ],
                              })
                            : null,
                      }),
                      (null == t ? void 0 : t.length) > 0 &&
                        (0, S.jsxs)("div", {
                          children: [
                            (0, S.jsx)(Z.Z, {
                              className: p().headerRightIcon,
                              name:
                                "up" === e
                                  ? "compare_up"
                                  : "down" === e
                                    ? "compare_down"
                                    : "compare_fair",
                            }),
                            (0, S.jsx)("span", { children: t }),
                          ],
                        }),
                    ],
                  }),
                ],
              });
            },
            ev = (0, k.m2)(0),
            em = (0, l.Z)(ev, 3),
            ep = em[0],
            eh = em[1],
            ef = em[2];
          return ((0, d.useEffect)(function () {
            var e = (0, eg.Z)(function () {
              eh(ef.current + 1);
            }, 200);
            return (
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, d.useEffect)(
            function () {
              (null == e ? void 0 : e.onEmpty) && e.onEmpty(!ea);
            },
            [ea],
          ),
          ea)
            ? (0, S.jsxs)(
                "div",
                {
                  className: g()(p().wrap, p()[J], p()[N]),
                  id: "overview",
                  children: [
                    (0, S.jsxs)(D.Z, {
                      count:
                        U === A.Sr.YEAR
                          ? null == y
                            ? void 0
                            : y.total_songs
                          : null == Y
                            ? void 0
                            : Y.listen_total,
                      type: N,
                      yearData: y,
                      clickMobileLog: R,
                      mobileLog: T,
                      isAnimation: "share" !== N,
                      vooConfig: O,
                      children: [
                        (0, S.jsxs)("div", {
                          className: p().modules,
                          children: [
                            (U === A.Sr.DAY || U === A.Sr.WEEK) &&
                              (0, S.jsx)(S.Fragment, {
                                children: (0, S.jsx)(
                                  L,
                                  {
                                    type: N,
                                    yearData: y,
                                    clickMobileLog: R,
                                    children: eu(),
                                  },
                                  ep,
                                ),
                              }),
                            U === A.Sr.MONTH &&
                              (0, S.jsx)(S.Fragment, {
                                children: X
                                  ? (0, S.jsx)(S.Fragment, {
                                      children: (0, S.jsx)(W, {
                                        children: eu(),
                                      }),
                                    })
                                  : (0, S.jsxs)(S.Fragment, {
                                      children: [
                                        eu(),
                                        !!ec &&
                                          (0, S.jsx)(eN, {
                                            reportInfo: ec,
                                            clickMobileLog: R,
                                            type: N,
                                          }),
                                      ],
                                    }),
                              }),
                            (0, S.jsx)(e5, { vooConfig: O }),
                          ],
                        }),
                        (0, S.jsx)(M.Z, { isHollow: !0 }),
                        (0, S.jsxs)("div", {
                          className: p().modules,
                          children: [
                            el
                              ? (0, S.jsx)(S.Fragment, {
                                  children: (0, S.jsx)(
                                    eq,
                                    {
                                      type: N,
                                      clickMobileLog: R,
                                      mobileLog: T,
                                      SplitLine: M.Z,
                                      friendRankData: B,
                                      showLikeBtn: er,
                                      onLike: V,
                                    },
                                    ""
                                      .concat(U, "_")
                                      .concat(
                                        (null == Q
                                          ? void 0
                                          : null === (j = Q.format) ||
                                              void 0 === j
                                            ? void 0
                                            : j.call(Q, "YYYYMMDD")) || "",
                                      ),
                                  ),
                                })
                              : null,
                            et
                              ? (0, S.jsxs)(S.Fragment, {
                                  children: [
                                    (0, S.jsx)(e_, {
                                      type: N,
                                      clickMobileLog: R,
                                      mobileLog: T,
                                      vooConfig: O,
                                    }),
                                    (0, S.jsx)(M.Z, { isHollow: !0 }),
                                  ],
                                })
                              : ($ && eo) || (ee && eo)
                                ? (0, S.jsxs)(S.Fragment, {
                                    children: [
                                      (0, S.jsx)(ey, {
                                        clickMobileLog: R,
                                        mobileLog: T,
                                        isLatestWeek: ee,
                                      }),
                                      (0, S.jsx)(M.Z, { isHollow: !0 }),
                                    ],
                                  })
                                : null,
                            U === A.Sr.WEEK && q
                              ? (0, S.jsxs)(S.Fragment, {
                                  children: [
                                    (0, S.jsx)(eB, {
                                      clickMobileLog: R,
                                      mobileLog: T,
                                    }),
                                    (0, S.jsx)(M.Z, { isHollow: !0 }),
                                  ],
                                })
                              : null,
                            ((m =
                              null == Y
                                ? void 0
                                : null === (t = Y.rank_song) || void 0 === t
                                  ? void 0
                                  : null === (i = t[0]) || void 0 === i
                                    ? void 0
                                    : i.song_info),
                            (h =
                              null == Y
                                ? void 0
                                : null === (o = Y.rank_singer) || void 0 === o
                                  ? void 0
                                  : null === (a = o[0]) || void 0 === a
                                    ? void 0
                                    : a.singer_info),
                            (f =
                              null == Y
                                ? void 0
                                : null === (s = Y.rank_song_loop) ||
                                    void 0 === s
                                  ? void 0
                                  : null === (v = s[0]) || void 0 === v
                                    ? void 0
                                    : v.song_info),
                            [
                              {
                                title: "#最爱歌曲",
                                content: (0, S.jsx)(E.Z, {
                                  width: 268,
                                  targetText: null == m ? void 0 : m.name,
                                  style: { fontSize: 46 },
                                }),
                                tip: "好旋律值得铭记",
                                mixsongid: null == m ? void 0 : m.mixsongid,
                                cover: (0, k.Yp)(
                                  null == m ? void 0 : m.cover,
                                  240,
                                ),
                                type: "favSong",
                                isShow: null == m ? void 0 : m.mixsongid,
                                onClick: function (e) {
                                  if ("share" !== N) {
                                    e && e.stopPropagation();
                                    var n,
                                      t,
                                      i = null == m ? void 0 : m.mixsongid,
                                      o =
                                        +(null == P
                                          ? void 0
                                          : null === (n = P.playStatus) ||
                                              void 0 === n
                                            ? void 0
                                            : n.mixsongId) == +i,
                                      a =
                                        o &&
                                        1 ==
                                          +(null == P
                                            ? void 0
                                            : null === (t = P.playStatus) ||
                                                void 0 === t
                                              ? void 0
                                              : t.status);
                                    (R("听歌小结", {
                                      svar2: "最爱歌曲",
                                      svar3: "播放",
                                      svar5: i,
                                    }),
                                      o ? (0, k._D)(a) : (0, k._n)(i));
                                  }
                                },
                              },
                              {
                                title: "#最爱歌手",
                                jumpType: "singer",
                                content: (0, S.jsx)(E.Z, {
                                  width: 300,
                                  targetText: null == h ? void 0 : h.name,
                                  style: { fontSize: 44 },
                                }),
                                tip: "你的热爱让TA闪闪发光",
                                avatar: (0, k.I$)(
                                  null == h ? void 0 : h.avatar,
                                  240,
                                ),
                                type: "favSinger",
                                isShow: null == h ? void 0 : h.singer_id,
                                onClick: function () {
                                  if ("share" !== N) {
                                    var e = null == h ? void 0 : h.singer_id;
                                    (R("听歌小结", {
                                      svar2: "最爱歌手",
                                      svar3: "点击内容",
                                      ivar1: e,
                                    }),
                                      I.LightMobileCall.mobileCall(
                                        A.x8.categoryJumpSingerPage,
                                        {
                                          singerId: e,
                                          singerName:
                                            null == h ? void 0 : h.name,
                                        },
                                      ));
                                  }
                                },
                              },
                              {
                                title: "#单曲循环",
                                type: "loopSong",
                                isShow:
                                  (null == f
                                    ? void 0
                                    : null === (_ = f.name) || void 0 === _
                                      ? void 0
                                      : _.length) > 0,
                                content: (0, S.jsx)(E.Z, {
                                  width: 200,
                                  targetText: null == f ? void 0 : f.name,
                                  style: { fontSize: 38 },
                                }),
                                mixsongid: null == f ? void 0 : f.mixsongid,
                                cover: (0, k.Yp)(
                                  null == f ? void 0 : f.cover,
                                  240,
                                ),
                                onClick: function (e) {
                                  if ("share" !== N) {
                                    e && e.stopPropagation();
                                    var n,
                                      t,
                                      i = null == f ? void 0 : f.mixsongid,
                                      o =
                                        +(null == P
                                          ? void 0
                                          : null === (n = P.playStatus) ||
                                              void 0 === n
                                            ? void 0
                                            : n.mixsongId) == +i,
                                      a =
                                        o &&
                                        1 ==
                                          +(null == P
                                            ? void 0
                                            : null === (t = P.playStatus) ||
                                                void 0 === t
                                              ? void 0
                                              : t.status);
                                    (R("听歌小结", {
                                      svar2: "单曲循环",
                                      svar3: "播放",
                                      svar5: i,
                                    }),
                                      o ? (0, k._D)(a) : (0, k._n)(i));
                                  }
                                },
                              },
                            ].filter(function (e) {
                              return e.isShow;
                            })).map(function (e, n) {
                              return (0, S.jsxs)(
                                u().Fragment,
                                {
                                  children: [
                                    n > 0 && (0, S.jsx)(M.Z, {}),
                                    (0, S.jsx)(
                                      "div",
                                      {
                                        onClick: function () {
                                          return R("听歌小结", {
                                            svar2: e.title,
                                          });
                                        },
                                        children: (0, S.jsx)(z, { data: e }),
                                      },
                                      e.type,
                                    ),
                                  ],
                                },
                                n,
                              );
                            }),
                          ],
                        }),
                      ],
                    }),
                    "share" !== N &&
                      !et &&
                      (0, S.jsxs)("div", {
                        className: p().btn,
                        onClick: function () {
                          R("听歌小结", { svar3: "分享我的听歌小结" });
                          var e,
                            n = (0, k.G8)({
                              page: "share",
                              query: {
                                isHideTitleBar: 1,
                                dimension: U,
                                date: null == Q ? void 0 : Q.format("YYYYMMDD"),
                                shareModule: 0,
                                duration: K,
                                grade:
                                  null == Y
                                    ? void 0
                                    : null === (e = Y.grade_info) ||
                                        void 0 === e
                                      ? void 0
                                      : e.p_grade,
                                hreffrom: "听歌小结",
                              },
                            });
                          if (
                            !I.LightMobileCall.isInClient() &&
                            "1" === (0, k.vH)().debug
                          ) {
                            window.open(n);
                            return;
                          }
                          I.LightMobileCall.mobileCall(A.x8.openURL, {
                            isFullScreen: 1,
                            url: n,
                          });
                        },
                        children: [
                          (0, S.jsx)(Z.Z, { name: "act_share" }),
                          (0, S.jsx)("span", { children: "分享我的听歌小结" }),
                        ],
                      }),
                  ],
                },
                "ListenSummary",
              )
            : null;
        }),
      );
    },
    54493: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return M;
        },
      });
      var i = t(37667),
        o = t(33562),
        a = t(93967),
        l = t.n(a),
        r = t(25339),
        s = t.n(r),
        c = t(93452),
        d = t(93239),
        u = t(11284),
        v = t(22239),
        _ = t(76792),
        g = t(17468),
        m = t(82628),
        p = t.n(m),
        h = t(73730),
        f = t.n(h),
        x = t(42240),
        A = t(45225),
        b = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/rank_platform.e2328c39.png",
          height: 178,
          width: 720,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASklEQVR4nGN89+UfHzMTgwYfJwPD5x8MPxiAgJeDge3jNwamP/8YbjDuvvmP6+9/BgkRLoZ7E68wcMpyMjD5KTJ8/fiDQQ0o/gIA+HwYh6W4H0wAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 2,
        },
        j = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/rank_platform_black.4beeb50a.png",
          height: 178,
          width: 720,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAQ0lEQVR42mM4+fg/y+lH//n////NceLOf14QBrHPPP7Pf/DufxYGu6p9XM4NxxUZQCBzDx9Dxg4BENOx9pCqQ90RPgDjYR7unIZOvQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 2,
        },
        y = t(55500),
        w = t(55616),
        k = t(84241),
        N = t(75467),
        C = t(25965),
        S = (0, c.Z)(
          (0, o.Pi)(function (e) {
            var n,
              t,
              o,
              a,
              r,
              s = e.needFollow,
              c = (e.yearData, e.type),
              m = e.stores,
              h = e.clickMobileLog,
              S = m.dataStore,
              L = (0, A.Z)({ dataStore: S }).mobileLog,
              M = S.statistics,
              I = S.followList,
              E = S.dimension,
              D = S.skin;
            S.date;
            var R = (0, i.useState)(I),
              T = R[0],
              Z = R[1];
            (0, i.useEffect)(function () {
              (u.LightMobileCall.KgWebMobileCall(
                "KgWebMobileCall.pageStatusNew",
                function (e) {
                  e &&
                    3 ==
                      +(e = "string" == typeof e ? JSON.parse(e) : e).status &&
                    W();
                },
              ),
                s && !S.followList && W());
            }, []);
            var W =
                ((n = (0, g.Z)(
                  p().mark(function e() {
                    var n, t, i, o, a, l;
                    return p().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return ((e.next = 2), (0, x.zd)());
                          case 2:
                            (null == (t = e.sent)
                              ? void 0
                              : null === (n = t.data) || void 0 === n
                                ? void 0
                                : n.status) === 1 &&
                              ((l =
                                null == t
                                  ? void 0
                                  : null === (i = t.data) || void 0 === i
                                    ? void 0
                                    : null === (o = i.data) || void 0 === o
                                      ? void 0
                                      : null === (a = o.list) || void 0 === a
                                        ? void 0
                                        : a.map(function (e) {
                                            return e.singerid;
                                          })),
                              S.setFollowList(l),
                              Z(l));
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return n.apply(this, arguments);
                }),
              O = function (e, n) {
                "share" !== c &&
                  u.LightMobileCall.mobileCall(d.x8.categoryJumpSingerPage, {
                    singerId: e,
                    singerName: n,
                  });
              },
              B = function (e, n, t) {
                if (n) {
                  (w.Z.confirm({
                    isDark: D === d.lu.BLACKV2,
                    title: "取消关注",
                    content: (0, C.jsxs)(C.Fragment, {
                      children: [
                        "取消后，关注时长将清零。",
                        (0, C.jsx)("br", {}),
                        "确定取消关注？",
                      ],
                    }),
                    confirmText: "确定取消",
                    cancelText: "继续关注",
                    confirmBtnStyle: { color: "#EE6655" },
                    onConfirm: function () {
                      return V(e, n, t);
                    },
                  }),
                    e && e.stopPropagation && e.stopPropagation());
                  return;
                }
                V(e, n, t);
              },
              V =
                ((t = (0, g.Z)(
                  p().mark(function e(n, t, i) {
                    var o, a, l, r;
                    return p().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (n && n.stopPropagation(),
                              h(
                                3 === E
                                  ? "年度歌手"
                                  : ""
                                      .concat(0 === E ? "今" : "本")
                                      .concat(d.En[E], "歌手"),
                                {
                                  svar2: "歌手收听榜",
                                  svar3: t ? "已关注" : "关注",
                                  svar4: i,
                                },
                              ),
                              !t)
                            ) {
                              e.next = 10;
                              break;
                            }
                            return ((e.next = 6), (0, x.fv)({ singerid: i }));
                          case 6:
                            ((null == (a = e.sent)
                              ? void 0
                              : null === (o = a.data) || void 0 === o
                                ? void 0
                                : o.status) === 1
                              ? (u.KgToast.info("取消关注成功"),
                                L({
                                  a: 1131811,
                                  b: "点击",
                                  svar1: "收听歌手",
                                  svar2: "歌手收听榜",
                                  svar3: "取消关注歌手",
                                  svar5: i,
                                }))
                              : u.KgToast.info("取消关注失败"),
                              (e.next = 14));
                            break;
                          case 10:
                            return ((e.next = 12), (0, x.ZN)({ singerid: i }));
                          case 12:
                            (null == (r = e.sent)
                              ? void 0
                              : null === (l = r.data) || void 0 === l
                                ? void 0
                                : l.status) === 1
                              ? (u.KgToast.info("关注成功"),
                                L({
                                  a: 1131811,
                                  b: "点击",
                                  svar1: "收听歌手",
                                  svar2: "歌手收听榜",
                                  svar3: "关注歌手",
                                  svar5: i,
                                }))
                              : u.KgToast.info("关注失败");
                          case 14:
                            W();
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (e, n, i) {
                  return t.apply(this, arguments);
                }),
              F =
                (null == M
                  ? void 0
                  : null === (o = M.rank_singer) || void 0 === o
                    ? void 0
                    : o.length) >= 3
                  ? null == M
                    ? void 0
                    : null === (a = M.rank_singer) || void 0 === a
                      ? void 0
                      : a.slice(0, 3)
                  : [],
              P = (null == F ? void 0 : F.length) || 0,
              U =
                null == M
                  ? void 0
                  : null === (r = M.rank_singer) || void 0 === r
                    ? void 0
                    : r.slice(P, P + 5);
            return (0, C.jsxs)("div", {
              className: l()(f().wrap, f()[D], "share" === c && f().share),
              children: [
                (null == F ? void 0 : F.length) > 0 &&
                  (0, C.jsxs)("div", {
                    className: l()(f().singerPodiumWrap, !s && f().noFollow),
                    children: [
                      F.map(function (e, n) {
                        if (!(null != e && e.singer_info))
                          return (0, C.jsx)(
                            "div",
                            { className: f().singerPodiumItem },
                            n,
                          );
                        var t,
                          i,
                          o,
                          a,
                          r =
                            (0, u.replaceHttpsImg)(
                              null == e
                                ? void 0
                                : null === (t = e.singer_info) || void 0 === t
                                  ? void 0
                                  : null === (i = t.avatar) || void 0 === i
                                    ? void 0
                                    : i.replace("{size}", 150),
                            ) || N.Z,
                          c =
                            null == e
                              ? void 0
                              : null === (o = e.singer_info) || void 0 === o
                                ? void 0
                                : o.singer_id,
                          d = s
                            ? null == T
                              ? void 0
                              : T.some(function (e) {
                                  return Number(e) === Number(c);
                                })
                            : null;
                        return (0, C.jsxs)(
                          "div",
                          {
                            className: f().singerPodiumItem,
                            children: [
                              (0, C.jsx)("div", {
                                className: f().avatar,
                                onClick: function () {
                                  var n;
                                  return O(
                                    c,
                                    null == e
                                      ? void 0
                                      : null === (n = e.singer_info) ||
                                          void 0 === n
                                        ? void 0
                                        : n.name,
                                  );
                                },
                                children: (0, C.jsx)("img", {
                                  alt: "",
                                  src: r,
                                  onError: v.LG,
                                }),
                              }),
                              (0, C.jsxs)("div", {
                                className: f().singerInfo,
                                children: [
                                  (0, C.jsx)("div", {
                                    className: l()(f().singerName, "ut-s"),
                                    children: (0, C.jsx)(y.Z, {
                                      width: 160,
                                      targetText:
                                        null == e
                                          ? void 0
                                          : null === (a = e.singer_info) ||
                                              void 0 === a
                                            ? void 0
                                            : a.name,
                                      style: { fontSize: 30 },
                                    }),
                                  }),
                                  (0, C.jsxs)("div", {
                                    className: f().playCount,
                                    children: [
                                      (0, C.jsx)("span", { children: "播放" }),
                                      (0, C.jsx)("strong", {
                                        children: null == e ? void 0 : e.total,
                                      }),
                                      (0, C.jsx)("span", { children: "次" }),
                                    ],
                                  }),
                                  s &&
                                    (0, C.jsx)("div", {
                                      className: l()(
                                        f().btn,
                                        (0, _.Z)({}, f().followed, d),
                                      ),
                                      onClick: function (e) {
                                        return B(e, d, c);
                                      },
                                      children: d
                                        ? (0, C.jsx)("span", {
                                            children: "已关注",
                                          })
                                        : (0, C.jsxs)(C.Fragment, {
                                            children: [
                                              (0, C.jsx)(k.Z, {
                                                name: "act_add",
                                              }),
                                              (0, C.jsx)("span", {
                                                children: "关注",
                                              }),
                                            ],
                                          }),
                                    }),
                                ],
                              }),
                            ],
                          },
                          c,
                        );
                      }),
                      (0, C.jsx)("img", {
                        className: f().platform,
                        src: D === d.lu.BLACKV2 ? j.src : b.src,
                        alt: "",
                      }),
                    ],
                  }),
                U.length > 0 &&
                  (0, C.jsx)("div", {
                    className: f().singerWrap,
                    children:
                      null == U
                        ? void 0
                        : U.map(function (e, n) {
                            var t,
                              i,
                              o,
                              a,
                              r =
                                (0, u.replaceHttpsImg)(
                                  null == e
                                    ? void 0
                                    : null === (t = e.singer_info) ||
                                        void 0 === t
                                      ? void 0
                                      : null === (i = t.avatar) || void 0 === i
                                        ? void 0
                                        : i.replace("{size}", 150),
                                ) || N.Z,
                              c =
                                null == e
                                  ? void 0
                                  : null === (o = e.singer_info) || void 0 === o
                                    ? void 0
                                    : o.singer_id,
                              d = s
                                ? null == T
                                  ? void 0
                                  : T.some(function (e) {
                                      return Number(e) === Number(c);
                                    })
                                : null;
                            return (0, C.jsxs)(
                              "div",
                              {
                                className: f().singerItem,
                                children: [
                                  (0, C.jsx)("div", {
                                    className: f().rank,
                                    children: n + 1 + P,
                                  }),
                                  (0, C.jsx)("div", {
                                    className: f().avatar,
                                    onClick: function () {
                                      var n;
                                      return O(
                                        c,
                                        null == e
                                          ? void 0
                                          : null === (n = e.singer_info) ||
                                              void 0 === n
                                            ? void 0
                                            : n.name,
                                      );
                                    },
                                    children: (0, C.jsx)("img", {
                                      alt: "",
                                      src: r,
                                      onError: v.LG,
                                    }),
                                  }),
                                  (0, C.jsxs)("div", {
                                    className: f().singerInfo,
                                    children: [
                                      (0, C.jsx)("div", {
                                        className: l()(f().singerName, "ut-s"),
                                        children: (0, C.jsx)(y.Z, {
                                          width: 300,
                                          targetText:
                                            null == e
                                              ? void 0
                                              : null === (a = e.singer_info) ||
                                                  void 0 === a
                                                ? void 0
                                                : a.name,
                                          style: { fontSize: 36 },
                                        }),
                                      }),
                                      s &&
                                        (0, C.jsx)("div", {
                                          className: l()(
                                            f().btn,
                                            (0, _.Z)({}, f().followed, d),
                                          ),
                                          onClick: function (e) {
                                            return B(e, d, c);
                                          },
                                          children: d
                                            ? (0, C.jsx)("span", {
                                                children: "已关注",
                                              })
                                            : (0, C.jsxs)(C.Fragment, {
                                                children: [
                                                  (0, C.jsx)(k.Z, {
                                                    name: "act_add",
                                                  }),
                                                  (0, C.jsx)("span", {
                                                    children: "关注",
                                                  }),
                                                ],
                                              }),
                                        }),
                                    ],
                                  }),
                                  (0, C.jsxs)("div", {
                                    className: f().playCount,
                                    children: [
                                      (0, C.jsx)("span", { children: "播放" }),
                                      (0, C.jsx)("strong", {
                                        children: null == e ? void 0 : e.total,
                                      }),
                                      (0, C.jsx)("span", { children: "次" }),
                                    ],
                                  }),
                                ],
                              },
                              c,
                            );
                          }),
                  }),
              ],
            });
          }),
        ),
        L = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/title-singer_rank.e640e0bd.png",
          height: 119,
          width: 720,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAIElEQVR4nGP89++fMAMDAy8Q/wViJiD+DcSMQMwMxD8BgqcGE0eNI7QAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 1,
        },
        M = (0, c.Z)(
          (0, o.Pi)(function (e) {
            var n,
              t = e.yearData,
              o = e.type,
              a = void 0 === o ? "normal" : o,
              r = e.stores,
              c = e.clickMobileLog,
              _ = r.dataStore,
              g = _.dimension,
              m = _.statistics,
              p = _.skin,
              h = _.date,
              f =
                (null == m
                  ? void 0
                  : null === (n = m.rank_singer) || void 0 === n
                    ? void 0
                    : n.length) > 0;
            return ((0, i.useEffect)(
              function () {
                (null == e ? void 0 : e.onEmpty) && e.onEmpty(!f);
              },
              [f],
            ),
            f)
              ? (0, C.jsxs)(
                  "div",
                  {
                    className: l()(s().wrap, s()[p]),
                    id: "singerRank",
                    children: [
                      (0, C.jsxs)("div", {
                        className: s().title,
                        onClick: function () {
                          if ("share" !== a) {
                            c(
                              3 === g
                                ? "年度歌手"
                                : ""
                                    .concat(0 === g ? "今" : "本")
                                    .concat(d.En[g], "歌手"),
                              { svar2: "歌手收听榜" },
                            );
                            var e = (0, v.G8)({
                              page: "ranksinger",
                              query: {
                                isHideTitleBar: 1,
                                dimension: g,
                                date: null == h ? void 0 : h.format("YYYYMMDD"),
                                rankType: d.Jd.SINGER,
                                skin: p,
                                sonicparams: ""
                                  .concat(p, "_")
                                  .concat(d.Jd.SINGER),
                                sonic_remain_params: "sonicparams",
                              },
                            });
                            if (
                              !u.LightMobileCall.isInClient() &&
                              "1" === (0, v.vH)().debug
                            ) {
                              window.open(e);
                              return;
                            }
                            u.LightMobileCall.mobileCall(d.x8.openURL, {
                              isFullScreen: 1,
                              url: e,
                            });
                          }
                        },
                        children: [
                          (0, C.jsx)("img", {
                            className: s().titleBg,
                            src: L.src,
                            alt: "",
                          }),
                          (0, C.jsx)("strong", {
                            children:
                              3 === g
                                ? "年度歌手收听榜"
                                : ""
                                    .concat(0 === g ? "今" : "本")
                                    .concat(d.En[g], "歌手收听榜"),
                          }),
                          "share" !== a &&
                            (0, C.jsxs)("span", {
                              className: s().more,
                              children: [
                                (0, C.jsx)("span", { children: "更多" }),
                                (0, C.jsx)(k.Z, { name: "right_half" }),
                              ],
                            }),
                        ],
                      }),
                      (0, C.jsx)("div", {
                        children: (0, C.jsx)(S, {
                          needFollow: "share" !== a,
                          yearData: t,
                          type: a,
                          clickMobileLog: c,
                          _skin: p,
                        }),
                      }),
                    ],
                  },
                  "Singer",
                )
              : null;
          }),
        );
    },
    82651: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return T;
        },
      });
      var i = t(17468),
        o = t(82628),
        a = t.n(o),
        l = t(37667),
        r = t(33562),
        s = t(93967),
        c = t.n(s),
        d = t(24454),
        u = t.n(d),
        v = t(66777),
        _ = t.n(v),
        g = t(93452),
        m = t(11284),
        p = t(98875),
        h = t(22239),
        f = t(93239),
        x = t(68652),
        A = t(28618),
        b = t(27856);
      t(60930);
      var j = t(62258),
        y = t.n(j),
        w = t(32257),
        k = t(12557),
        N = function () {
          var e = new Image();
          return ((e.crossOrigin = "*"), e);
        },
        C = function () {
          var e = document.createElement("canvas"),
            n = e.getContext("2d");
          return { canvas: e, ctx: n };
        },
        S = function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            t = n || {},
            i = t.angle,
            o = void 0 === i ? 0 : i,
            a = t.radius;
          return new Promise(function (n, t) {
            var i = N(),
              l = C(),
              r = l.canvas,
              s = l.ctx,
              c = C(),
              d = c.canvas,
              u = c.ctx;
            ((i.onload = function () {
              var e,
                t = i.width,
                l = i.height;
              ((d.width = t),
                (d.height = l),
                (r.width = t),
                (r.height = l),
                (e = u).clearRect(0, 0, d.width, d.height),
                e.beginPath(),
                e.roundRect(
                  0,
                  0,
                  i.width,
                  i.height,
                  a >= 0 ? a : Math.round(0.027 * t),
                ),
                (e.fillStyle = "rgba(255, 255, 255, 1)"),
                e.fill(),
                (e.globalCompositeOperation = "source-atop"),
                e.drawImage(i, 0, 0),
                (function (e, n, t, i) {
                  i.clearRect(0, 0, t.width, t.height);
                  var o = e.width,
                    a = e.height,
                    l = e.width / 2,
                    r = [],
                    s = Math.round(o / l),
                    c = n < 0;
                  n = Math.abs(n);
                  for (var d = 0; d < l; d++) {
                    var u = d * s,
                      v = 600 / (600 + u * Math.sin(n)),
                      _ = u * Math.cos(n) * v,
                      g = t.height / 2 - (a * v) / 2,
                      m = Math.ceil(s * v),
                      p = a * v;
                    r.push({
                      scale: v,
                      x: Math.floor(_),
                      y: g,
                      width: m,
                      height: p,
                    });
                  }
                  c
                    ? r.forEach(function (n, t) {
                        var l = r.length - 1 - t;
                        i.drawImage(
                          e,
                          l * s,
                          0,
                          s,
                          a,
                          o - n.x - n.width,
                          n.y,
                          n.width,
                          n.height,
                        );
                      })
                    : r.forEach(function (n, t) {
                        i.drawImage(
                          e,
                          t * s,
                          0,
                          s,
                          a,
                          n.x,
                          n.y,
                          n.width,
                          n.height,
                        );
                      });
                })(d, o, r, s),
                n([r.toDataURL("image/png"), r]));
            }),
              (i.onerror = function () {
                e && i.src === e && 0 === e.indexOf("https://")
                  ? (i.src = p.Z.src)
                  : n([]);
              }),
              (i.src = e));
          });
        },
        L = t(25965),
        M = (0, g.Z)(
          (0, r.Pi)(function (e) {
            var n,
              t = e.list,
              o = e.stores,
              r = e.type,
              s = e.clickMobileLog,
              d = o.dataStore,
              u = (o.appStore || {}).playStatus,
              v = d.skin,
              _ = d.dimension;
            d.date;
            var g = (0, l.useState)([]),
              j = g[0],
              N = g[1],
              C = (0, l.useState)([]),
              M = C[0],
              I = C[1],
              E = 3 === _,
              D = E
                ? "年度歌曲"
                : "".concat(0 === _ ? "今" : "本").concat(f.En[_], "歌曲"),
              R = (0, l.useRef)(null),
              T = (0, l.useState)(2),
              Z = T[0],
              W = T[1],
              O = (0, l.useRef)([0, 0, 0, 0]),
              B = function () {
                (R.current && R.current.destroy(), console.log("init swiper"));
                var e = !1;
                ((0, m.isIOS)()
                  ? (0, m.ltIOS)(15) && (e = !0)
                  : (70 > (0, m.getChromeVersion)() || (0, m.ltAndroid)(9)) &&
                    (e = !0),
                  (R.current = new A.Z(".swiper-container", {
                    autoplay: "share" !== r && {
                      delay: 2e3,
                      disableOnInteraction: !1,
                    },
                    slideActiveClass: y().slideActive,
                    initialSlide: Z,
                    effect: "coverflow",
                    grabCursor: !0,
                    centeredSlides: !0,
                    slidesPerView: "auto",
                    coverflowEffect: {
                      rotate: 30,
                      stretch: (0, m.rem2pxRealNum)((0, h.ht)(135)),
                      depth: (0, m.rem2pxRealNum)((0, h.ht)(200)),
                      modifier: 1,
                      slideShadows: !1,
                    },
                    loop: !0,
                    on: {
                      init: function () {
                        (U(), V());
                      },
                      slideChange: function () {
                        return (0, i.Z)(
                          a().mark(function e() {
                            return a().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    W(R.current.realIndex);
                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          }),
                        )();
                      },
                      transitionEnd: function () {
                        V();
                      },
                      touchMove: function () {
                        e || F();
                      },
                      slideChangeTransitionStart: function () {
                        var e;
                        null != R &&
                          null !== (e = R.current) &&
                          void 0 !== e &&
                          e.slides &&
                          [].forEach.call(R.current.slides, function (e, n) {
                            var t =
                                e.className.indexOf(y().slideActive) > -1
                                  ? 1
                                  : 0,
                              i = e.querySelector(".".concat(y().shadow2));
                            i && (i.style.opacity = t);
                          });
                      },
                    },
                  })),
                  setTimeout(function () {
                    (U(), V());
                  }, 100));
              },
              V = function (e) {
                if (
                  null != R &&
                  null !== (n = R.current) &&
                  void 0 !== n &&
                  n.slides
                ) {
                  0 === O.current.length && U();
                  var n,
                    t = O.current;
                  [].forEach.call(R.current.slides, function (e) {
                    var n = e.querySelector(".".concat(y().shadow2));
                    if (n) {
                      var i = e.getBoundingClientRect(),
                        o = i.left + i.width / 2,
                        a = 0;
                      (o > t[0] &&
                        o < t[3] &&
                        (a =
                          o > t[1] && o < t[2]
                            ? 1
                            : o < t[1]
                              ? Math.abs(t[0] - o) / (t[1] - t[0])
                              : Math.abs(t[3] - o) / (t[3] - t[2])),
                        (n.style.opacity = a));
                    }
                  });
                }
              },
              F = (0, b.P)(300, function () {
                V("touchMove");
              }),
              P =
                ((n = (0, i.Z)(
                  a().mark(function e() {
                    var n, i;
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            ((n = (0, x.Z)(t.slice(0, 5))),
                              (i = []),
                              n.some(function (e, n) {
                                var t,
                                  o,
                                  a = E
                                    ? null == e
                                      ? void 0
                                      : e.cover
                                    : null == e
                                      ? void 0
                                      : null === (t = e.song_info) ||
                                          void 0 === t
                                        ? void 0
                                        : t.cover,
                                  l = {
                                    cover: (0, h.Yp)(a, 400),
                                    cover240: (0, h.Yp)(a, 480),
                                    mixsongid: E
                                      ? null == e
                                        ? void 0
                                        : e.id
                                      : null == e
                                        ? void 0
                                        : null === (o = e.song_info) ||
                                            void 0 === o
                                          ? void 0
                                          : o.mixsongid,
                                  };
                                n % 2 == 0 ? i.push(l) : i.unshift(l);
                              }),
                              N(i));
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return n.apply(this, arguments);
                }),
              U = function () {
                var e = window.innerWidth / 2,
                  n = Math.floor(0.17 * window.innerWidth),
                  t = Math.floor(0.06 * window.innerWidth),
                  i = [e - n, e - t, e + t, e + n];
                return ((O.current = i), i);
              };
            return (
              (0, l.useEffect)(
                function () {
                  (null == t ? void 0 : t.length) > 0 && P();
                },
                [t],
              ),
              (0, l.useEffect)(
                function () {
                  if (!(null != j && j[0])) {
                    "share" === r && I([]);
                    return;
                  }
                  if ("share" === r) {
                    var e = [0.34, 0.26, 0, -0.26, -0.34];
                    (0, l.startTransition)(
                      (0, i.Z)(
                        a().mark(function n() {
                          return a().wrap(function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  return (
                                    (n.next = 2),
                                    Promise.all(
                                      j.map(function (n, t) {
                                        return S(p.Z.src, { angle: e[t] });
                                      }),
                                    )
                                  );
                                case 2:
                                  return (
                                    I(
                                      n.sent.map(function (e, n) {
                                        var t, i;
                                        return {
                                          cover:
                                            (null == e ? void 0 : e[0]) ||
                                            (null === (t = j[n]) || void 0 === t
                                              ? void 0
                                              : t.cover) ||
                                            p.Z.src,
                                          id:
                                            null === (i = j[n]) || void 0 === i
                                              ? void 0
                                              : i.mixsongid,
                                        };
                                      }),
                                    ),
                                    (n.next = 6),
                                    Promise.all(
                                      j.map(function (n, t) {
                                        return S(n.cover240, { angle: e[t] });
                                      }),
                                    )
                                  );
                                case 6:
                                  I(
                                    n.sent.map(function (e, n) {
                                      var t, i;
                                      return {
                                        cover:
                                          (null == e ? void 0 : e[0]) ||
                                          (null === (t = j[n]) || void 0 === t
                                            ? void 0
                                            : t.cover) ||
                                          p.Z.src,
                                        id:
                                          null === (i = j[n]) || void 0 === i
                                            ? void 0
                                            : i.mixsongid,
                                      };
                                    }),
                                  );
                                case 8:
                                case "end":
                                  return n.stop();
                              }
                          }, n);
                        }),
                      ),
                    );
                  } else
                    (0, l.startTransition)(
                      (0, i.Z)(
                        a().mark(function e() {
                          return a().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (U(), B());
                                case 2:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        }),
                      ),
                    );
                  return function () {
                    R.current && R.current.destroy();
                  };
                },
                [j],
              ),
              (0, l.useEffect)(function () {
                return (
                  U(),
                  function () {
                    R.current && R.current.destroy();
                  }
                );
              }, []),
              (0, L.jsx)("div", {
                className: c()(y().wrap, y()[v]),
                children:
                  "share" !== r
                    ? (0, L.jsx)("div", {
                        className: "swiper-container ".concat(y().container),
                        children: (0, L.jsx)("div", {
                          className: "swiper-wrapper ".concat(y().wrapper),
                          children:
                            null == j
                              ? void 0
                              : j.map(function (e, n) {
                                  var t =
                                      +(null == u ? void 0 : u.mixsongId) ==
                                      +(null == e ? void 0 : e.mixsongid),
                                    i =
                                      t &&
                                      1 == +(null == u ? void 0 : u.status);
                                  return (0, L.jsxs)(
                                    "div",
                                    {
                                      className: c()(y().item, "swiper-slide"),
                                      onClick: function () {
                                        "share" !== r &&
                                          (s(D, {
                                            svar2: "歌曲收听榜",
                                            svar3: "播放",
                                            svar5: e.mixsongid,
                                          }),
                                          t
                                            ? (0, h._D)(i)
                                            : (0, h._n)(e.mixsongid));
                                      },
                                      children: [
                                        (0, L.jsx)("img", {
                                          className: y().cover,
                                          src: e.cover,
                                          alt: "",
                                          onError: h.k2,
                                          style: {
                                            backgroundImage: "url(".concat(
                                              p.Z.src,
                                              ")",
                                            ),
                                          },
                                        }),
                                        (0, L.jsx)("div", {
                                          className: c()(
                                            y().playIcon,
                                            y().show,
                                          ),
                                          children: (0, L.jsx)("img", {
                                            src: i ? k.Z.src : w.Z.src,
                                            alt: "",
                                          }),
                                        }),
                                        (0, L.jsx)("img", {
                                          className: y().shadow2,
                                          src: "https://webvoobssdl.kugou.com/c7ad38293d1f0fd9f152611aff6a4bc8.png",
                                          alt: "",
                                        }),
                                      ],
                                    },
                                    "".concat(n, "_").concat(e.mixsongid),
                                  );
                                }),
                        }),
                      })
                    : (0, L.jsxs)(L.Fragment, {
                        children: [
                          (0, L.jsx)("img", {
                            className: y().shadow,
                            src: "https://webvoobssdl.kugou.com/c7ad38293d1f0fd9f152611aff6a4bc8.png",
                            alt: "",
                          }),
                          (0, L.jsx)("div", {
                            className: "".concat(y().container),
                            children: (0, L.jsx)("div", {
                              className: "".concat(y().wrapper),
                              children:
                                "share" === r &&
                                (null == M ? void 0 : M.length) > 0 &&
                                M.map(function (e, n) {
                                  return (0, L.jsxs)(
                                    "div",
                                    {
                                      className: c()(y().shareItem),
                                      children: [
                                        (0, L.jsx)("img", {
                                          className: y().cover,
                                          src: e.cover,
                                          alt: "",
                                          onError: h.k2,
                                        }),
                                        2 === n &&
                                          (0, L.jsx)("div", {
                                            className: c()(
                                              y().playIcon,
                                              y().show,
                                            ),
                                            children: (0, L.jsx)("img", {
                                              src: w.Z.src,
                                              alt: "",
                                            }),
                                          }),
                                      ],
                                    },
                                    "".concat(n, "_").concat(e.mixsongid),
                                  );
                                }),
                            }),
                          }),
                        ],
                      }),
              })
            );
          }),
        ),
        I = t(55500),
        E = (0, g.Z)(
          (0, r.Pi)(function (e) {
            var n,
              t = e.yearData,
              i = e.type,
              o = e.stores,
              a = e.clickMobileLog,
              l = o.dataStore,
              r = l.statistics,
              s = l.dimension,
              d = l.skin;
            l.date;
            var u = 3 === s,
              v = u
                ? "年度歌曲"
                : "".concat(0 === s ? "今" : "本").concat(f.En[s], "歌曲"),
              g = u
                ? null == t
                  ? void 0
                  : t.rank_song
                : null == r
                  ? void 0
                  : r.rank_song,
              x = (null == g ? void 0 : g.length) > 5;
            return (0, L.jsxs)("div", {
              className: c()(_().wrap, _()[d], x && _().hasSwipeModule),
              children: [
                x &&
                  (0, L.jsx)("div", {
                    className: _().swipeWrap,
                    children: (0, L.jsx)(M, {
                      list: g,
                      type: i,
                      clickMobileLog: a,
                    }),
                  }),
                (0, L.jsx)("div", {
                  className: _().moduleWrap,
                  children:
                    null == g
                      ? void 0
                      : null === (n = g.slice(0, 5)) || void 0 === n
                        ? void 0
                        : n.map(function (e, n) {
                            var t,
                              o,
                              l,
                              r,
                              s,
                              d,
                              g = u
                                ? null == e
                                  ? void 0
                                  : null === (t = e.cover) || void 0 === t
                                    ? void 0
                                    : t.replace("{size}", 150)
                                : null == e
                                  ? void 0
                                  : null === (o = e.song_info) || void 0 === o
                                    ? void 0
                                    : null === (l = o.cover) || void 0 === l
                                      ? void 0
                                      : l.replace("{size}", 150),
                              f = u
                                ? null == e
                                  ? void 0
                                  : e.title
                                : null == e
                                  ? void 0
                                  : null === (r = e.song_info) || void 0 === r
                                    ? void 0
                                    : r.name,
                              x = u
                                ? null == e
                                  ? void 0
                                  : e.author
                                : null == e
                                  ? void 0
                                  : null === (s = e.song_info) || void 0 === s
                                    ? void 0
                                    : s.singer_name,
                              A = u
                                ? null == e
                                  ? void 0
                                  : e.id
                                : null == e
                                  ? void 0
                                  : null === (d = e.song_info) || void 0 === d
                                    ? void 0
                                    : d.mixsongid,
                              b = u
                                ? null == e
                                  ? void 0
                                  : e.value
                                : null == e
                                  ? void 0
                                  : e.count,
                              j = n + 1;
                            return (0, L.jsxs)(
                              "div",
                              {
                                className: _().songWrap,
                                onClick: function () {
                                  "share" !== i &&
                                    (a(v, {
                                      svar2: "歌曲收听榜",
                                      svar3: "播放",
                                      svar5: A,
                                    }),
                                    (0, h._n)(A));
                                },
                                children: [
                                  (0, L.jsx)("div", {
                                    className: c()(
                                      _().rank,
                                      j && _()["rank".concat(j)],
                                    ),
                                    children: j,
                                  }),
                                  (0, L.jsx)("div", {
                                    className: _().cover,
                                    children: (0, L.jsx)("img", {
                                      alt: "",
                                      src: g
                                        ? (0, m.replaceHttpsImg)(g)
                                        : p.Z.src,
                                      onError: h.k2,
                                    }),
                                  }),
                                  (0, L.jsxs)("div", {
                                    className: _().songInfo,
                                    children: [
                                      (0, L.jsx)("div", {
                                        className: c()(_().songName, "ut-s"),
                                        children: (0, L.jsx)(I.Z, {
                                          width: 300,
                                          targetText: f,
                                          style: { fontSize: 30 },
                                        }),
                                      }),
                                      (0, L.jsx)("div", {
                                        className: c()(_().singerName, "ut-s"),
                                        children: (0, L.jsx)(I.Z, {
                                          width: 300,
                                          targetText: x,
                                          style: { fontSize: 24 },
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, L.jsxs)("div", {
                                    className: _().playCount,
                                    children: [
                                      (0, L.jsx)("span", { children: "播放" }),
                                      (0, L.jsx)("strong", { children: b }),
                                      (0, L.jsx)("span", { children: "次" }),
                                    ],
                                  }),
                                ],
                              },
                              n,
                            );
                          }),
                }),
              ],
            });
          }),
        ),
        D = t(84241),
        R = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/title-song_rank.da890438.png",
          height: 119,
          width: 720,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAIElEQVR4nGP89+8fOwMDgyAQMwLxXyD+D8RMQMwMxK8Bfd0GAY27j1wAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 1,
        },
        T = (0, g.Z)(
          (0, r.Pi)(function (e) {
            var n,
              t,
              o,
              r,
              s = e.yearData,
              d = e.type,
              v = void 0 === d ? "normal" : d,
              _ = e.stores,
              g = e.clickMobileLog;
            (e.mobileLog, e.isLatest);
            var p = _.dataStore,
              x = p.dimension,
              A = p.statistics,
              b = p.skin,
              j = p.date,
              y =
                ((n = (0, i.Z)(
                  a().mark(function e() {
                    var n, t;
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("share" !== v) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            if (
                              (g(
                                3 === x
                                  ? "年度歌曲"
                                  : ""
                                      .concat(0 === x ? "今" : "本")
                                      .concat(f.En[x], "歌曲"),
                                { svar2: "歌曲收听榜" },
                              ),
                              (n = (0, h.G8)({
                                page: "rank",
                                query: {
                                  isHideTitleBar: 1,
                                  dimension: x,
                                  date:
                                    null == j ? void 0 : j.format("YYYYMMDD"),
                                  rankType: f.Jd.SONG,
                                  skin: b,
                                  sonicparams: ""
                                    .concat(b, "_")
                                    .concat(f.Jd.SONG),
                                  sonic_remain_params: "sonicparams",
                                },
                              })),
                              !(
                                !m.LightMobileCall.isInClient() &&
                                "1" === (0, h.vH)().debug
                              ))
                            ) {
                              e.next = 8;
                              break;
                            }
                            return (window.open(n), e.abrupt("return"));
                          case 8:
                            return ((e.next = 10), (0, h.hj)());
                          case 10:
                            ((t = e.sent),
                              m.LightMobileCall.mobileCall(f.x8.openURL, {
                                browser: 0,
                                isFullScreen: 1,
                                url: n,
                                hasBar: t ? 1 : 0,
                              }));
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return n.apply(this, arguments);
                }),
              w =
                3 === x
                  ? (null == s
                      ? void 0
                      : null === (t = s.rank_song) || void 0 === t
                        ? void 0
                        : t.length) > 0
                  : !!(
                      null != A &&
                      null !== (o = A.rank_song) &&
                      void 0 !== o &&
                      o.length
                    ) &&
                    !!(
                      null != A &&
                      null !== (r = A.rank_song) &&
                      void 0 !== r &&
                      r[0]
                    );
            if (
              ((0, l.useEffect)(
                function () {
                  (null == e ? void 0 : e.onEmpty) && e.onEmpty(!w);
                },
                [w],
              ),
              w)
            )
              return (0, L.jsxs)(
                "div",
                {
                  className: c()(u().wrap, u()[b], u()[v]),
                  id: "song",
                  children: [
                    (0, L.jsxs)("div", {
                      className: u().title,
                      onClick: y,
                      children: [
                        (0, L.jsx)("img", {
                          className: u().titleBg,
                          src: R.src,
                          alt: "",
                        }),
                        (0, L.jsx)("strong", {
                          children:
                            3 === x
                              ? "年度歌曲收听榜"
                              : ""
                                  .concat(0 === x ? "今" : "本")
                                  .concat(f.En[x], "歌曲收听榜"),
                        }),
                        "share" !== v &&
                          (0, L.jsxs)("span", {
                            className: u().more,
                            children: [
                              (0, L.jsx)("span", { children: "更多" }),
                              (0, L.jsx)(D.Z, { name: "right_half" }),
                            ],
                          }),
                      ],
                    }),
                    (0, L.jsx)("div", {
                      children: (0, L.jsx)(E, {
                        yearData: s,
                        type: v,
                        clickMobileLog: g,
                      }),
                    }),
                  ],
                },
                "Song",
              );
          }),
        );
    },
    86557: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return J;
        },
      });
      var i = t(37667),
        o = t(33562),
        a = t(93967),
        l = t.n(a),
        r = t(73913),
        s = t.n(r),
        c = t(93452),
        d = t(76792),
        u = t(17468),
        v = t(82628),
        _ = t.n(v),
        g = t(14128),
        m = t.n(g),
        p = t(84241),
        h = t(55500),
        f = t(99850),
        x = t(11284),
        A = t(22239),
        b = t(93239),
        j = t(32257),
        y = t(12557),
        w = t(98875),
        k = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/last_year_today-cd.8fe68d5c.png",
          height: 558,
          width: 558,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAl0lEQVR42m3PTwuCMBjH8acFDVMjqN6/vY0KDAzsqnWyQ9of3JybbHOdE0FQ8XP78nsuD/RFUTxLsxeCKWF4XRyOJ9wcOIyV7mB8f77L+HbHXYuqWhnz27VRcoFyQlwYkVKulVIItK7nSuktjFBaOEII1EZtzKbk3O5G3z/jZ5pZ0FcwZueEOkFwsTxvj2EKoRQlyWPw5h+ykkqdWUoUEgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        N = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/last_year_today-mask.2d4d51ef.png",
          height: 520,
          width: 520,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAI0lEQVR42mP49x8VMqAJ/GNA5aKq+AfEj9EFnmJowTQU3VoAwQx/Bc1wF3oAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        C = t(25965);
      function S(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i));
        }
        return t;
      }
      var L = (0, c.Z)(
          (0, o.Pi)(function (e) {
            var n,
              t,
              o = e.type,
              a = e.stores,
              r = e.clickMobileLog,
              s = a.dataStore,
              c = a.appStore,
              v = s.skin,
              g = s.statistics,
              L = (c || {}).playStatus,
              M = (null == g ? void 0 : g.last_year_today) || {},
              I = M.date,
              E = M.song_infos,
              D = (0, i.useState)({}),
              R = D[0],
              T = D[1],
              Z =
                +(null == L ? void 0 : L.mixsongId) ==
                +(null == R ? void 0 : R.mixsongid),
              W = Z && 1 == +(null == L ? void 0 : L.status),
              O = (0, i.useState)(["", "", ""]),
              B = O[0],
              V = O[1],
              F = "去年今日",
              P = function (e) {
                "share" !== o &&
                  (r && r("特别记忆", { svar2: F, svar3: "播放", svar5: e }),
                  Z ? (0, A._D)(W) : (0, A._n)(e));
              },
              U = function (e) {
                var n = "",
                  t = "",
                  i = "";
                return (
                  (!e || e === w.Z.src) &&
                  (v === b.lu.BLACKV2 &&
                    ((n = "rgba(120,120,120,0.2)"),
                    (t = "rgba(120,120,120,0)"),
                    (i = "rgba(120,120,120,0.1)")),
                  V([n, t, n, i]),
                  !0)
                );
              },
              Y =
                ((n = (0, u.Z)(
                  _().mark(function e(n) {
                    var t, i, o, a;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                !U(
                                  (t =
                                    (null == n ? void 0 : n.cover150) ||
                                    w.Z.src),
                                )
                              ) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return");
                            case 3:
                              return (
                                (e.prev = 3),
                                (e.next = 6),
                                (0, f.pe)({
                                  src: t,
                                  saturation: 1,
                                  lightness: 1,
                                  opacity: 0.1,
                                  returnRGBA: !0,
                                })
                              );
                            case 6:
                              return (
                                (i = e.sent),
                                (e.next = 9),
                                (0, f.pe)({
                                  src: t,
                                  saturation: 1,
                                  lightness: 0.9,
                                  opacity: 0.1,
                                  returnRGBA: !0,
                                })
                              );
                            case 9:
                              ((o = e.sent),
                                V([
                                  (a = "rgba("
                                    .concat(i.r, ", ")
                                    .concat(i.g, ", ")
                                    .concat(i.b, ", ", 0.2, ")")),
                                  "rgba("
                                    .concat(i.r, ", ")
                                    .concat(i.g, ", ")
                                    .concat(i.b, ", ", 0, ")"),
                                  a,
                                  "rgba("
                                    .concat(o.r, ", ")
                                    .concat(o.g, ", ")
                                    .concat(o.b, ", ", 0.1, ")"),
                                ]),
                                (e.next = 19));
                              break;
                            case 16:
                              ((e.prev = 16),
                                (e.t0 = e.catch(3)),
                                console.warn(e.t0));
                            case 19:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[3, 16]],
                    );
                  }),
                )),
                function (e) {
                  return n.apply(this, arguments);
                });
            return ((0, i.useEffect)(
              function () {
                var e,
                  n,
                  t,
                  i,
                  o,
                  a,
                  l = null == E ? void 0 : E[0];
                null !== (e = l) &&
                  void 0 !== e &&
                  e.name &&
                  (((l = (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                      var t = null != arguments[n] ? arguments[n] : {};
                      n % 2
                        ? S(Object(t), !0).forEach(function (n) {
                            (0, d.Z)(e, n, t[n]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(t),
                            )
                          : S(Object(t)).forEach(function (n) {
                              Object.defineProperty(
                                e,
                                n,
                                Object.getOwnPropertyDescriptor(t, n),
                              );
                            });
                    }
                    return e;
                  })({}, l)).cover400 =
                    (0, x.replaceHttpsImg)(
                      null === (n = l) || void 0 === n
                        ? void 0
                        : null === (t = n.cover) || void 0 === t
                          ? void 0
                          : t.replace("{size}", 400),
                    ) || w.Z.src),
                  (l.cover150 =
                    null !== (i = l) && void 0 !== i && i.cover
                      ? (0, x.replaceHttpsImg)(
                          null === (o = l) || void 0 === o
                            ? void 0
                            : null === (a = o.cover) || void 0 === a
                              ? void 0
                              : a.replace("{size}", 100),
                        )
                      : ""),
                  T(l || {}),
                  Y(l));
              },
              [
                null == E
                  ? void 0
                  : null === (t = E[0]) || void 0 === t
                    ? void 0
                    : t.name,
              ],
            ),
            (0, i.useEffect)(
              function () {
                null != R && R.name && U(null == R ? void 0 : R.cover150);
              },
              [v],
            ),
            null != R && R.name)
              ? (0, C.jsxs)("div", {
                  className: m().wrap,
                  style: {
                    "--bgstart": B[0],
                    "--bgend": v === b.lu.BLACKV2 ? B[0] : B[1],
                    "--maskimg": "url(".concat(N.src, ")"),
                    "background-color": v === b.lu.BLACKV2 ? "transparent" : "",
                  },
                  children: [
                    (0, C.jsxs)("div", {
                      className: m().topModule,
                      children: [
                        (0, C.jsxs)("div", {
                          className: m().coverBg,
                          children: [
                            (0, C.jsx)("div", {
                              className: m().cdbg,
                              style: {
                                backgroundColor: B[2],
                                borderColor: B[3],
                              },
                            }),
                            (0, C.jsx)("img", {
                              src: k.src,
                              alt: "",
                              className: m().cd,
                            }),
                            (0, C.jsx)("img", {
                              src: null == R ? void 0 : R.cover150,
                              alt: "",
                              onError: A.k2,
                              className: m().cdCenter,
                              style: { borderColor: B[3] },
                            }),
                          ],
                        }),
                        (0, C.jsxs)("div", {
                          className: m().coverWrap,
                          children: [
                            (0, C.jsx)("img", {
                              src: null == R ? void 0 : R.cover400,
                              alt: "",
                              onError: A.k2,
                              className: m().cover,
                            }),
                            (0, C.jsx)("div", {
                              className: m().playIcon,
                              onClick: function (e) {
                                P(null == R ? void 0 : R.mixsongid);
                              },
                              children: (0, C.jsx)("img", {
                                src: W ? y.Z.src : j.Z.src,
                                alt: "",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)("div", {
                      className: m().bottomModule,
                      children: [
                        (0, C.jsxs)("div", {
                          className: m().title,
                          onClick: function () {
                            "share" !== o &&
                              (r("特别记忆", { svar2: F }),
                              x.LightMobileCall.mobileCall(b.x8.openURL, {
                                browser: 0,
                                url: "https://activity.kugou.com/today/v-55720540/index.html?channel=song_statistics_h5",
                                isFullScreen: 1,
                              }));
                          },
                          children: [
                            (0, C.jsxs)("span", { children: ["#", F] }),
                            "share" !== o &&
                              (0, C.jsx)(p.Z, { name: "right_normal" }),
                          ],
                        }),
                        (0, C.jsxs)("div", {
                          className: m().date,
                          children: [
                            (0, C.jsx)("strong", {
                              className: m().num,
                              children: (0, A.fg)(I).year,
                            }),
                            (0, C.jsx)("span", {
                              className: m().small,
                              children: "年",
                            }),
                            (0, C.jsx)("strong", {
                              className: m().num,
                              children: (0, A.fg)(I).month,
                            }),
                            (0, C.jsx)("span", {
                              className: m().small,
                              children: "月",
                            }),
                            (0, C.jsx)("strong", {
                              className: m().num,
                              children: (0, A.fg)(I).day,
                            }),
                            (0, C.jsx)("span", {
                              className: m().small,
                              children: "日",
                            }),
                          ],
                        }),
                        (0, C.jsxs)("div", {
                          className: m().desc,
                          children: [
                            (0, C.jsx)("span", { children: "在听" }),
                            (0, C.jsx)("span", { children: "《" }),
                            (0, C.jsx)("span", {
                              className: l()("ut-s"),
                              children: (0, C.jsx)(h.Z, {
                                width: 460,
                                targetText: null == R ? void 0 : R.name,
                                style: { fontSize: 26 },
                              }),
                            }),
                            (0, C.jsx)("span", { children: "》" }),
                            (0, C.jsxs)("span", {
                              children: [
                                (null == E ? void 0 : E.length) > 1 ? "等" : "",
                                "歌曲",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : null;
          }),
        ),
        M = t(81208),
        I = t(68652),
        E = t(89697),
        D = t.n(E),
        R = t(96360),
        T = t(35952),
        Z = (0, c.Z)(
          (0, o.Pi)(function (e) {
            var n,
              t,
              o = e.stores,
              a = e.type,
              r = e.clickMobileLog,
              s = o.dataStore,
              c = o.appStore,
              d = s.skin,
              v = s.songMemoryData,
              g = s.dimension,
              m = s.date,
              h = c.playStatus,
              x = (0, A.m2)({}),
              k = (0, M.Z)(x, 3),
              N = k[0],
              S = k[1];
            k[2];
            var L = (0, i.useState)([]),
              E = L[0],
              Z = L[1],
              W = (0, i.useRef)(!1),
              O = "歌曲回忆",
              B = (0, R.d)({ data: N }),
              V = B.song_info,
              F = B.first_listen,
              P = B.accumulate_play,
              U = B.cover,
              Y = B.gotoSongMemory,
              H =
                +(null == h ? void 0 : h.mixsongId) ==
                +(null == V ? void 0 : V.mixsongid),
              z = H && 1 == +(null == h ? void 0 : h.status),
              G = function () {
                var e;
                "share" !== a &&
                  Y({
                    mixsongid:
                      null == N
                        ? void 0
                        : null === (e = N.song_info) || void 0 === e
                          ? void 0
                          : e.mixsongid,
                    from: "home",
                    dateType: g,
                    date: m.format("YYYYMMDD"),
                    skin: (null == s ? void 0 : s.skin) || "",
                  });
              },
              Q = function (e) {
                "share" !== a &&
                  (r && r("特别记忆", { svar2: O, svar3: "播放", svar5: e }),
                  H ? (0, A._D)(z) : (0, A._n)(e));
              },
              K =
                ((n = (0, u.Z)(
                  _().mark(function e() {
                    var n, t, i, o, a, l, r;
                    return _().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (null !=
                              (a = (0, I.Z)(
                                (null == v
                                  ? void 0
                                  : null === (n = v.song_memory_infos) ||
                                      void 0 === n
                                    ? void 0
                                    : null ===
                                          (t = n.filter(function (e) {
                                            var n, t, i;
                                            return (
                                              (null == e
                                                ? void 0
                                                : null ===
                                                      (n = e.first_listen) ||
                                                    void 0 === n
                                                  ? void 0
                                                  : n.text) &&
                                              (null == e
                                                ? void 0
                                                : null ===
                                                      (t = e.accumulate_play) ||
                                                    void 0 === t
                                                  ? void 0
                                                  : t.total) &&
                                              (null == e
                                                ? void 0
                                                : null ===
                                                      (i = e.accumulate_play) ||
                                                    void 0 === i
                                                  ? void 0
                                                  : i.duration)
                                            );
                                          })) || void 0 === t
                                      ? void 0
                                      : t.slice(0, 1)) || [],
                              )[0]) &&
                              null !== (i = a.song_info) &&
                              void 0 !== i &&
                              i.cover &&
                              ((l = (0, A.Yp)(a.song_info.cover, 400)),
                              (r = (0, A.Yp)(a.song_info.cover, 100)),
                              (a.song_info.cover = l),
                              (a.song_info.cover100 = r)),
                              q(
                                null == a
                                  ? void 0
                                  : null === (o = a.song_info) || void 0 === o
                                    ? void 0
                                    : o.cover100,
                              ),
                              S(a));
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return n.apply(this, arguments);
                }),
              J = function (e) {
                var n = "",
                  t = "";
                return (
                  (!e || e === w.Z.src) &&
                  (d === b.lu.BLACKV2 &&
                    ((n = "rgba(120,120,120,0.15)"),
                    (t = "rgba(120,120,120,0)")),
                  Z([n, t]),
                  !0)
                );
              },
              q =
                ((t = (0, u.Z)(
                  _().mark(function e(n) {
                    var t, i, o;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (((t = ""), (i = ""), !J(n))) {
                                e.next = 4;
                                break;
                              }
                              return e.abrupt("return");
                            case 4:
                              return (
                                (e.prev = 4),
                                (e.next = 7),
                                (0, f.pe)({
                                  src: n,
                                  saturation: 1,
                                  lightness: 1,
                                  opacity: 1,
                                  returnRGBA: !0,
                                })
                              );
                            case 7:
                              ((null == (o = e.sent) ? void 0 : o.r) >= 0 &&
                                ((t = "rgba("
                                  .concat(o.r, ", ")
                                  .concat(o.g, ", ")
                                  .concat(o.b, ", ", 0.15, ")")),
                                (i = "rgba("
                                  .concat(o.r, ", ")
                                  .concat(o.g, ", ")
                                  .concat(o.b, ", ", 0, ")"))),
                                (e.next = 14));
                              break;
                            case 11:
                              ((e.prev = 11),
                                (e.t0 = e.catch(4)),
                                console.error(e.t0));
                            case 14:
                              Z([t, i]);
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[4, 11]],
                    );
                  }),
                )),
                function (e) {
                  return t.apply(this, arguments);
                });
            return ((0, i.useEffect)(
              function () {
                !W.current && v && ((W.current = !0), K());
              },
              [v],
            ),
            (0, i.useEffect)(
              function () {
                if (null != N && N.song_info) {
                  var e;
                  J(
                    null == N
                      ? void 0
                      : null === (e = N.song_info) || void 0 === e
                        ? void 0
                        : e.cover100,
                  );
                }
              },
              [d],
            ),
            null != N && N.song_info)
              ? (0, C.jsxs)("div", {
                  className: D().wrap,
                  style: {
                    "--bgstart": E[0],
                    "--bgend": d === b.lu.BLACKV2 ? E[0] : E[1],
                    "background-color": d === b.lu.BLACKV2 ? "transparent" : "",
                  },
                  children: [
                    (0, C.jsxs)("div", {
                      className: D().topModule,
                      children: [
                        (0, C.jsxs)("div", {
                          className: D().coverWrap,
                          onClick: function (e) {
                            Q(null == V ? void 0 : V.mixsongid);
                          },
                          children: [
                            (0, C.jsx)("img", {
                              src: U,
                              alt: "",
                              className: D().cover,
                              onError: A.k2,
                            }),
                            (0, C.jsx)("img", {
                              src: z ? y.Z.src : j.Z.src,
                              alt: "",
                              className: D().playIcon,
                            }),
                          ],
                        }),
                        (0, C.jsxs)("div", {
                          className: D().title,
                          onClick: function () {
                            return G();
                          },
                          children: [
                            (0, C.jsxs)("span", { children: ["#", O] }),
                            "share" !== a &&
                              (0, C.jsx)(p.Z, { name: "right_normal" }),
                          ],
                        }),
                        (0, C.jsxs)("div", {
                          className: D().songName,
                          children: [
                            (0, C.jsx)("span", { children: "《" }),
                            (0, C.jsx)("span", {
                              className: l()("ut-s"),
                              children: null == V ? void 0 : V.name,
                            }),
                            (0, C.jsx)("span", { children: "》" }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsx)(T.Z, { isHollow: !0 }),
                    (0, C.jsxs)("div", {
                      className: D().bottomModule,
                      children: [
                        (0, C.jsxs)("div", {
                          className: D().module,
                          children: [
                            (0, C.jsx)("div", {
                              className: D().label,
                              children: "首次收听",
                            }),
                            (0, C.jsx)("div", {
                              className: l()(D().text, D().big),
                              children: null == F ? void 0 : F.text,
                            }),
                          ],
                        }),
                        (0, C.jsxs)("div", {
                          className: D().module,
                          children: [
                            (0, C.jsx)("div", {
                              className: D().label,
                              children: "累计播放",
                            }),
                            (0, C.jsxs)("div", {
                              className: D().text,
                              children: [
                                (0, C.jsx)("strong", {
                                  className: D().num,
                                  children: (0, A.w_)(
                                    null == P ? void 0 : P.total,
                                  ),
                                }),
                                (0, C.jsx)("span", {
                                  className: D().small,
                                  children: "次",
                                }),
                                (0, C.jsx)("strong", {
                                  className: D().num,
                                  children: (0, A.w_)(
                                    null == P ? void 0 : P.duration,
                                  ),
                                }),
                                (0, C.jsx)("span", {
                                  className: D().small,
                                  children: "分钟",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : null;
          }),
        ),
        W = t(63242),
        O = t.n(W);
      function B(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i));
        }
        return t;
      }
      function V(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? B(Object(t), !0).forEach(function (n) {
                (0, d.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n),
                  );
                });
        }
        return e;
      }
      var F = (0, c.Z)(
          (0, o.Pi)(function (e) {
            var n,
              t,
              o,
              a,
              l,
              r,
              s,
              c,
              d,
              v,
              g,
              m = e.type,
              h = e.stores,
              k = e.clickMobileLog,
              N = h.dataStore,
              S = h.appStore,
              L = N.skin,
              M = N.statistics,
              I = S.playStatus,
              E = (null == M ? void 0 : M.longest_date) || {},
              D = E.date,
              R = E.song_infos,
              T = E.duration,
              Z = (0, A.WJ)(T),
              W = (0, i.useState)({}),
              B = W[0],
              F = W[1],
              P =
                +(null == I ? void 0 : I.mixsongId) ==
                +(null == B
                  ? void 0
                  : null === (t = B[0]) || void 0 === t
                    ? void 0
                    : t.mixsongid),
              U = P && 1 == +(null == I ? void 0 : I.status),
              Y = (0, i.useState)(["", "", ""]),
              H = Y[0],
              z = Y[1],
              G = "听歌最久",
              Q = function (e) {
                "share" !== m &&
                  (k("特别记忆", { svar2: G, svar3: "播放", svar5: e }),
                  P ? (0, A._D)(U) : (0, A._n)(e));
              },
              K = function (e) {
                var n = "",
                  t = "";
                return (
                  (!e || e === w.Z.src) &&
                  (L === b.lu.BLACKV2 &&
                    ((n = "rgba(120,120,120,0.2)"),
                    (t = "rgba(120,120,120,0)")),
                  z([n, t]),
                  !0)
                );
              },
              J =
                ((n = (0, u.Z)(
                  _().mark(function e(n) {
                    var t, i, o;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((e.prev = 2),
                                !K(
                                  (i =
                                    (null == n ? void 0 : n.cover150) ||
                                    w.Z.src),
                                ))
                              ) {
                                e.next = 6;
                                break;
                              }
                              return e.abrupt("return");
                            case 6:
                              return (
                                (e.next = 8),
                                (0, f.pe)({
                                  src: i,
                                  saturation: 1,
                                  lightness: 1,
                                  opacity: 0.1,
                                  returnRGBA: !0,
                                })
                              );
                            case 8:
                              ((o = e.sent),
                                z([
                                  "rgba("
                                    .concat(o.r, ", ")
                                    .concat(o.g, ", ")
                                    .concat(o.b, ", ", 0.2, ")"),
                                  "rgba("
                                    .concat(o.r, ", ")
                                    .concat(o.g, ", ")
                                    .concat(o.b, ", ", 0, ")"),
                                ]),
                                (e.next = 17));
                              break;
                            case 14:
                              ((e.prev = 14),
                                (e.t0 = e.catch(2)),
                                console.warn(e.t0));
                            case 17:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[2, 14]],
                    );
                  }),
                )),
                function (e) {
                  return n.apply(this, arguments);
                });
            return ((0, i.useEffect)(
              function () {
                var e = R.slice(0, 3).map(function (e) {
                  var n, t;
                  return V(
                    V({}, e),
                    {},
                    {
                      cover400:
                        (0, x.replaceHttpsImg)(
                          null == e
                            ? void 0
                            : null === (n = e.cover) || void 0 === n
                              ? void 0
                              : n.replace("{size}", 400),
                        ) || w.Z.src,
                      cover150:
                        (0, x.replaceHttpsImg)(
                          null == e
                            ? void 0
                            : null === (t = e.cover) || void 0 === t
                              ? void 0
                              : t.replace("{size}", 150),
                        ) || w.Z.src,
                    },
                  );
                });
                (F(e), J(e[0]));
              },
              [
                null == R
                  ? void 0
                  : null === (o = R[0]) || void 0 === o
                    ? void 0
                    : o.cover,
              ],
            ),
            null != B && null !== (a = B[0]) && void 0 !== a && a.name)
              ? (0, C.jsxs)("div", {
                  className: O().wrap,
                  id: "longest_date",
                  style: {
                    "--bgstart": H[0],
                    "--bgend": L === b.lu.BLACKV2 ? H[0] : H[1],
                    "background-color": L === b.lu.BLACKV2 ? "transparent" : "",
                  },
                  children: [
                    (0, C.jsxs)("div", {
                      className: O().topModule,
                      children: [
                        (0, C.jsx)("div", {
                          className: O().coverBg,
                          children: (0, C.jsx)("img", {
                            src:
                              L === b.lu.BLACKV2
                                ? "https://webvoobssdl.kugou.com/c58449d4038965ff9cc4db81b23301e8.png"
                                : "https://webvoobssdl.kugou.com/5c05b04a39c01f7495d7a7b9494e396e.png",
                            alt: "",
                            className: O().cd,
                          }),
                        }),
                        (0, C.jsx)("div", {
                          className: O().coverBg,
                          children: (0, C.jsx)("img", {
                            src: "https://webvoobssdl.kugou.com/e655160bf0b847620364219aac0bfdb0.png",
                            alt: "",
                            className: O().cd,
                          }),
                        }),
                        (0, C.jsxs)("div", {
                          className: O().cover1Wrap,
                          children: [
                            (0, C.jsx)("img", {
                              src:
                                null == B
                                  ? void 0
                                  : null === (l = B[0]) || void 0 === l
                                    ? void 0
                                    : l.cover400,
                              alt: "",
                              className: O().cover,
                              onError: A.k2,
                            }),
                            (0, C.jsx)("div", {
                              className: O().playIcon,
                              onClick: function (e) {
                                var n;
                                Q(
                                  null == B
                                    ? void 0
                                    : null === (n = B[0]) || void 0 === n
                                      ? void 0
                                      : n.mixsongid,
                                );
                              },
                              children: (0, C.jsx)("img", {
                                src: U ? y.Z.src : j.Z.src,
                                alt: "",
                              }),
                            }),
                          ],
                        }),
                        (0, C.jsx)("div", {
                          className: O().coverBg,
                          style: { opacity: 0.6 },
                          children: (0, C.jsx)("img", {
                            src: "https://webvoobssdl.kugou.com/e655160bf0b847620364219aac0bfdb0.png",
                            alt: "",
                            className: O().cd,
                          }),
                        }),
                        (null == B
                          ? void 0
                          : null === (r = B[1]) || void 0 === r
                            ? void 0
                            : null === (s = r.cover150) || void 0 === s
                              ? void 0
                              : s.length) > 1 &&
                          (0, C.jsx)("div", {
                            className: O().cover2Wrap,
                            children: (0, C.jsx)("img", {
                              src:
                                null == B
                                  ? void 0
                                  : null === (c = B[1]) || void 0 === c
                                    ? void 0
                                    : c.cover150,
                              alt: "",
                              className: O().cover,
                              onError: A.k2,
                            }),
                          }),
                        (null == B
                          ? void 0
                          : null === (d = B[2]) || void 0 === d
                            ? void 0
                            : null === (v = d.cover150) || void 0 === v
                              ? void 0
                              : v.length) > 1 &&
                          (0, C.jsxs)("div", {
                            className: O().cover3Wrap,
                            children: [
                              (0, C.jsx)("img", {
                                src:
                                  null == B
                                    ? void 0
                                    : null === (g = B[2]) || void 0 === g
                                      ? void 0
                                      : g.cover150,
                                alt: "",
                                className: O().cover,
                                onError: A.k2,
                              }),
                              (0, C.jsx)("img", {
                                src: "https://webvoobssdl.kugou.com/5ba70f36a4d5712fdce593269a859586.png",
                                alt: "",
                                className: O().decoration,
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, C.jsxs)("div", {
                      className: O().bottomModule,
                      children: [
                        (0, C.jsxs)("div", {
                          className: O().title,
                          onClick: function () {
                            if ("share" !== m) {
                              k("特别记忆", { svar2: G, svar3: "点击跳转" });
                              var e = (0, A.G8)({
                                page: "rank",
                                query: {
                                  isHideTitleBar: 1,
                                  dimension: 0,
                                  date: D,
                                  rankType: b.Jd.SONG,
                                  skin: L,
                                  sonicparams: ""
                                    .concat(L, "_")
                                    .concat(b.Jd.SONG),
                                  sonic_remain_params: "sonicparams",
                                },
                              });
                              if (
                                !x.LightMobileCall.isInClient() &&
                                "1" === (0, A.vH)().debug
                              ) {
                                window.open(e);
                                return;
                              }
                              x.LightMobileCall.mobileCall(b.x8.openURL, {
                                isFullScreen: 1,
                                url: e,
                              });
                            }
                          },
                          children: [
                            (0, C.jsxs)("span", { children: ["#", G] }),
                            "share" !== m &&
                              (0, C.jsx)(p.Z, { name: "right_normal" }),
                          ],
                        }),
                        (0, C.jsxs)("div", {
                          className: O().date,
                          children: [
                            (0, C.jsx)("strong", {
                              className: O().num,
                              children: (0, A.fg)(D).month,
                            }),
                            (0, C.jsx)("span", {
                              className: O().small,
                              children: "月",
                            }),
                            (0, C.jsx)("strong", {
                              className: O().num,
                              children: (0, A.fg)(D).day,
                            }),
                            (0, C.jsx)("span", {
                              className: O().small,
                              children: "日",
                            }),
                          ],
                        }),
                        (0, C.jsx)("div", {
                          className: O().desc,
                          children: (0, C.jsxs)("span", {
                            children: [
                              "听了",
                              null == Z ? void 0 : Z.count,
                              null == Z ? void 0 : Z.unit,
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                })
              : null;
          }),
        ),
        P = t(75897),
        U = t.n(P),
        Y = t(10082),
        H = (0, c.Z)(
          (0, o.Pi)(function (e) {
            var n,
              t = e.type,
              o = e.stores,
              a = e.clickMobileLog,
              r = o.dataStore,
              s = (o.appStore || {}).playStatus,
              c = r.skin,
              d = r.statistics,
              v = (null == d ? void 0 : d.hot_collect) || {},
              g = v.song_info,
              m = v.defeat_percent,
              p = (0, A.Yp)(null == g ? void 0 : g.cover, 100),
              x = (0, A.Yp)(null == g ? void 0 : g.cover, 400),
              k =
                +(null == s ? void 0 : s.mixsongId) ==
                +(null == g ? void 0 : g.mixsongid),
              N = k && 1 == +(null == s ? void 0 : s.status),
              S = (0, i.useState)(["", "", ""]),
              L = S[0],
              M = S[1],
              I = "热歌收藏",
              E = function (e) {
                "share" !== t &&
                  (a && a("特别记忆", { svar2: I, svar3: "播放", svar5: e }),
                  k ? (0, A._D)(N) : (0, A._n)(e));
              },
              D = function (e) {
                var n = "";
                return (
                  (!e || e === w.Z.src) &&
                  (c === b.lu.BLACKV2 && (n = "rgba(120,120,120,0.15)"),
                  M([n]),
                  !0)
                );
              },
              R =
                ((n = (0, u.Z)(
                  _().mark(function e(n) {
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!D(n)) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                (e.prev = 2),
                                (e.next = 5),
                                (0, f.pe)({
                                  src: n,
                                  saturation: 1,
                                  lightness: 1,
                                  opacity: 0.15,
                                })
                              );
                            case 5:
                              (M([e.sent]), (e.next = 13));
                              break;
                            case 10:
                              ((e.prev = 10),
                                (e.t0 = e.catch(2)),
                                console.warn(e.t0));
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[2, 10]],
                    );
                  }),
                )),
                function (e) {
                  return n.apply(this, arguments);
                });
            return ((0, i.useEffect)(
              function () {
                R(p);
              },
              [p],
            ),
            (0, i.useEffect)(
              function () {
                null != g && g.name && D(p);
              },
              [c],
            ),
            null != g && g.name)
              ? (0, C.jsxs)("div", {
                  className: U().wrap,
                  id: "hot_collect",
                  style: {
                    backgroundColor: c === b.lu.BLACKV2 ? L[0] : "",
                    backgroundImage: "url(".concat(
                      c === b.lu.BLACKV2
                        ? "https://voowebpbssdl.kugou.com/674e332721ca172a52d4d5761c804d81.png"
                        : "https://webvoobssdl.kugou.com/d6d30a4ca8e54a69db9d30491e1ec65f.jpg",
                      ")",
                    ),
                  },
                  children: [
                    (0, C.jsx)("div", {
                      className: U().topModule,
                      children: (0, C.jsxs)("div", {
                        className: U().coverWrap,
                        children: [
                          (0, C.jsx)("img", {
                            src: x,
                            alt: "",
                            className: U().cover,
                            onError: A.k2,
                          }),
                          (0, C.jsx)("div", {
                            className: U().playIcon,
                            onClick: function (e) {
                              E(null == g ? void 0 : g.mixsongid);
                            },
                            children: (0, C.jsx)("img", {
                              src: N ? y.Z.src : j.Z.src,
                              alt: "",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, C.jsxs)("div", {
                      className: U().bottomModule,
                      children: [
                        (0, C.jsx)("div", {
                          className: U().title,
                          children: (0, C.jsxs)("span", { children: ["#", I] }),
                        }),
                        (0, C.jsxs)("div", {
                          className: U().songName,
                          children: [
                            (0, C.jsx)("span", { children: "《" }),
                            (0, C.jsx)("span", {
                              className: l()("ut-s"),
                              children: (0, C.jsx)(h.Z, {
                                width: 460,
                                targetText: null == g ? void 0 : g.name,
                                style: { fontSize: 44 },
                              }),
                            }),
                            (0, C.jsx)("span", { children: "》" }),
                            (0, C.jsx)("img", {
                              className: U().heart,
                              src: Y.Z.src,
                              alt: "",
                            }),
                          ],
                        }),
                        (0, C.jsx)("div", {
                          className: U().desc,
                          children: (0, C.jsx)("span", {
                            children: "领先".concat(
                              (0, A.rl)((m || 0) / 100),
                              "的人收藏",
                            ),
                          }),
                        }),
                      ],
                    }),
                  ],
                })
              : null;
          }),
        ),
        z = t(98195),
        G = t.n(z),
        Q = (0, c.Z)(
          (0, o.Pi)(function (e) {
            var n,
              t,
              o,
              a = e.type,
              l = e.stores,
              r = e.clickMobileLog,
              s = l.dataStore,
              c = l.appStore,
              d = s.skin,
              v = s.statistics,
              g = c.playStatus,
              m = (null == v ? void 0 : v.latest_date) || {},
              p = m.song_info,
              k = m.ts,
              N =
                +(null == g ? void 0 : g.mixsongId) ==
                +(null == p ? void 0 : p.mixsongid),
              S = N && 1 == +(null == g ? void 0 : g.status),
              L = (0, i.useState)(["", "", ""]),
              M = L[0],
              I = L[1],
              E =
                null != p && p.cover
                  ? (0, x.replaceHttpsImg)(
                      null == p
                        ? void 0
                        : null === (t = p.cover) || void 0 === t
                          ? void 0
                          : t.replace("{size}", 400),
                    )
                  : w.Z.src,
              D =
                null != p && p.cover
                  ? (0, x.replaceHttpsImg)(
                      null == p
                        ? void 0
                        : null === (o = p.cover) || void 0 === o
                          ? void 0
                          : o.replace("{size}", 100),
                    )
                  : w.Z.src,
              R = (0, A.Hu)(k),
              T = "最晚听歌",
              Z = function (e) {
                "share" !== a &&
                  (r("特别记忆", { svar2: T, svar3: "播放", svar5: e }),
                  N ? (0, A._D)(S) : (0, A._n)(e));
              },
              W = function (e) {
                var n = "",
                  t = "";
                return (
                  (!e || e === w.Z.src) &&
                  (d === b.lu.BLACKV2 &&
                    ((n = "rgba(120,120,120,0.15)"),
                    (t = "rgba(120,120,120,0)")),
                  I([n, t]),
                  !0)
                );
              },
              O =
                ((n = (0, u.Z)(
                  _().mark(function e(n) {
                    var t;
                    return _().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!W(n)) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                (e.prev = 2),
                                (e.next = 5),
                                (0, f.pe)({
                                  src: n,
                                  saturation: 1,
                                  lightness: 1,
                                  opacity: 0.1,
                                  returnRGBA: !0,
                                })
                              );
                            case 5:
                              ((t = e.sent),
                                I([
                                  "rgba("
                                    .concat(t.r, ", ")
                                    .concat(t.g, ", ")
                                    .concat(t.b, ", ", 0.2, ")"),
                                  "rgba("
                                    .concat(t.r, ", ")
                                    .concat(t.g, ", ")
                                    .concat(t.b, ", ", 0, ")"),
                                ]),
                                (e.next = 14));
                              break;
                            case 11:
                              ((e.prev = 11),
                                (e.t0 = e.catch(2)),
                                console.warn(e.t0));
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[2, 11]],
                    );
                  }),
                )),
                function (e) {
                  return n.apply(this, arguments);
                });
            return ((0, i.useEffect)(
              function () {
                O(D);
              },
              [D],
            ),
            (0, i.useEffect)(
              function () {
                null != p && p.name && W(D);
              },
              [d],
            ),
            null != p && p.name)
              ? (0, C.jsxs)("div", {
                  className: G().wrap,
                  id: "longest_date",
                  style: {
                    "--bgstart": M[0],
                    "--bgend": d === b.lu.BLACKV2 ? M[0] : M[1],
                    backgroundColor: d === b.lu.BLACKV2 ? "transparent" : "",
                  },
                  children: [
                    (0, C.jsxs)("div", {
                      className: G().topModule,
                      children: [
                        (0, C.jsxs)("div", {
                          className: G().coverWrap,
                          children: [
                            (0, C.jsx)("img", {
                              src: E,
                              alt: "",
                              className: G().cover,
                              onError: A.k2,
                            }),
                            (0, C.jsx)("div", {
                              className: G().playIcon,
                              onClick: function (e) {
                                Z(null == p ? void 0 : p.mixsongid);
                              },
                              children: (0, C.jsx)("img", {
                                src: S ? y.Z.src : j.Z.src,
                                alt: "",
                              }),
                            }),
                          ],
                        }),
                        (0, C.jsx)("div", {
                          className: G().coverFg,
                          children: (0, C.jsx)("img", {
                            src: "https://voowebpbssdl.kugou.com/35fe46f90c13352872302923919b0edd.png",
                            alt: "",
                          }),
                        }),
                      ],
                    }),
                    (0, C.jsxs)("div", {
                      className: G().bottomModule,
                      children: [
                        (0, C.jsx)("div", {
                          className: G().title,
                          children: (0, C.jsxs)("span", { children: ["#", T] }),
                        }),
                        (0, C.jsxs)("div", {
                          className: G().date,
                          children: [
                            (0, C.jsx)("strong", {
                              className: G().num,
                              children: null == R ? void 0 : R[1],
                            }),
                            (0, C.jsx)("span", {
                              className: G().small,
                              children: "月",
                            }),
                            (0, C.jsx)("strong", {
                              className: G().num,
                              children: null == R ? void 0 : R[2],
                            }),
                            (0, C.jsx)("span", {
                              className: G().small,
                              children: "日",
                            }),
                          ],
                        }),
                        (0, C.jsxs)("div", {
                          className: G().desc,
                          children: [
                            (0, C.jsxs)("span", {
                              children: [
                                ""
                                  .concat(null == R ? void 0 : R[3], ":")
                                  .concat(null == R ? void 0 : R[4]),
                                "在听《",
                              ],
                            }),
                            (0, C.jsx)("span", {
                              className: "ut-s",
                              children: (0, C.jsx)(h.Z, {
                                width: 460,
                                targetText: null == p ? void 0 : p.name,
                                style: { fontSize: 26 },
                              }),
                            }),
                            (0, C.jsx)("span", { children: "》" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : null;
          }),
        ),
        K = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/title-memory.ae3c4299.png",
          height: 119,
          width: 726,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAIElEQVR4nGP89++fFAMDw38g/gfEv4CYHYiZgBgE/gEAnzwHFJ9ka6QAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 1,
        },
        J = (0, c.Z)(
          (0, o.Pi)(function (e) {
            var n,
              t,
              o,
              a,
              r,
              c,
              d,
              u,
              v,
              _,
              g,
              m = e.type,
              p = void 0 === m ? "normal" : m,
              h = e.stores,
              f = e.clickMobileLog,
              x = h.dataStore,
              A = x.dimension,
              b = x.statistics,
              j = x.dateIndexs,
              y = x.dateRanges,
              w = x.skin,
              k = x.date,
              N = x.songMemoryData,
              S =
                (null == j ? void 0 : j[A]) >=
                (null == y
                  ? void 0
                  : null === (n = y[A]) || void 0 === n
                    ? void 0
                    : n.length) -
                  1,
              M =
                S &&
                (null == N
                  ? void 0
                  : null === (t = N.song_memory_infos) || void 0 === t
                    ? void 0
                    : t.length) > 0,
              I =
                S &&
                (null == b
                  ? void 0
                  : null === (o = b.last_year_today) || void 0 === o
                    ? void 0
                    : o.date) &&
                (null == b
                  ? void 0
                  : null === (a = b.last_year_today) || void 0 === a
                    ? void 0
                    : null === (r = a.song_infos) || void 0 === r
                      ? void 0
                      : r.length) > 0,
              E =
                0 !== A &&
                (null == b
                  ? void 0
                  : null === (c = b.longest_date) || void 0 === c
                    ? void 0
                    : null === (d = c.song_infos) || void 0 === d
                      ? void 0
                      : d.length) > 0,
              D =
                (null == b
                  ? void 0
                  : null === (u = b.hot_collect) || void 0 === u
                    ? void 0
                    : null === (v = u.song_info) || void 0 === v
                      ? void 0
                      : null === (_ = v.name) || void 0 === _
                        ? void 0
                        : _.length) > 0,
              R =
                (1 === A || 2 === A) &&
                (null == b
                  ? void 0
                  : null === (g = b.latest_date) || void 0 === g
                    ? void 0
                    : g.song_info),
              T = !M && !I && !E && !D && !R;
            return ((0, i.useEffect)(
              function () {
                e.onEmpty && e.onEmpty(T);
              },
              [T],
            ),
            T)
              ? null
              : (0, C.jsxs)(
                  "div",
                  {
                    className: l()(s().wrap, s()[w], s()[p]),
                    id: "special_moment",
                    children: [
                      (0, C.jsxs)("div", {
                        className: s().title,
                        children: [
                          (0, C.jsx)("img", {
                            className: s().titleBg,
                            src: K.src,
                            alt: "",
                          }),
                          (0, C.jsx)("strong", { children: "特别记忆" }),
                        ],
                      }),
                      (0, C.jsxs)("div", {
                        className: s().modules,
                        children: [
                          M &&
                            (0, C.jsx)(
                              Z,
                              { type: p, clickMobileLog: f },
                              "".concat(A, "-").concat(k),
                            ),
                          I && (0, C.jsx)(L, { type: p, clickMobileLog: f }),
                          E && (0, C.jsx)(F, { type: p, clickMobileLog: f }),
                          D && (0, C.jsx)(H, { type: p, clickMobileLog: f }),
                          R && (0, C.jsx)(Q, { type: p, clickMobileLog: f }),
                        ],
                      }),
                    ],
                  },
                  "SpecialMemory",
                );
          }),
        );
    },
    15673: function (e, n, t) {
      "use strict";
      t(37667);
      var i = t(33562),
        o = t(93967),
        a = t.n(o),
        l = t(75467),
        r = t(93452),
        s = t(34716),
        c = t.n(s),
        d = t(55500),
        u = t(84241),
        v = t(85232),
        _ = t(93239),
        g = t(25965);
      n.Z = (0, r.Z)(
        (0, i.Pi)(function (e) {
          var n,
            t,
            i,
            o = e.stores,
            r = e.type,
            s = e.clickMobileLog,
            m = (e.mobileLog, e.friendRankData),
            p = e.vooConfig,
            h = o.dataStore,
            f = o.appStore,
            x = h.listen_duration,
            A = h.skin,
            b = h.dimension,
            j = f.baseInfo,
            y =
              null == m
                ? void 0
                : null === (n = m.myself) || void 0 === n
                  ? void 0
                  : n.rank,
            w = y ? { rank: y } : null,
            k =
              (null == p
                ? void 0
                : null === (t = p.friendRank) || void 0 === t
                  ? void 0
                  : t.enabled) !== !1 &&
              (b !== _.Sr.MONTH ||
                (null == p
                  ? void 0
                  : null === (i = p.friendRank) || void 0 === i
                    ? void 0
                    : i.showInMonth) !== !1),
            N =
              (null == w ? void 0 : w.rank) > 0 &&
              (null == h ? void 0 : h.dimension) !== _.Sr.YEAR &&
              !(null != m && m.is_close);
          return (0, g.jsx)("div", {
            className: a()(c().wrap, c()[A], c()[r]),
            children: (0, g.jsxs)("div", {
              className: c().userInfo,
              children: [
                (0, g.jsx)("div", {
                  className: c().avatarWrap,
                  style: { backgroundImage: "url(".concat(l.Z, ")") },
                  children: (0, g.jsx)("img", {
                    alt: "",
                    src: null == j ? void 0 : j.userpic,
                    className: c().avatar,
                    onError: function (e) {
                      return (e.target.style.display = "none");
                    },
                  }),
                }),
                (0, g.jsxs)("div", {
                  className: c().middle,
                  children: [
                    (0, g.jsx)("div", {
                      className: c().userName,
                      children: (0, g.jsx)(d.Z, {
                        width: m ? 260 : 350,
                        targetText: null == j ? void 0 : j.userNickName,
                        style: { fontSize: 30 },
                      }),
                    }),
                    (0, g.jsxs)("div", {
                      className: c().listenDur,
                      children: [
                        "累计听歌",
                        (0, g.jsx)("span", { children: x || "-" }),
                        "小时",
                      ],
                    }),
                  ],
                }),
                (0, g.jsx)("div", {
                  className: c().right,
                  children:
                    m &&
                    k &&
                    (0, g.jsxs)("div", {
                      className: a()(c().rankWrap, !N && c().rankWrapNoValue),
                      onClick: function () {
                        var e,
                          n,
                          t =
                            (null == h ? void 0 : h.dimension) != null
                              ? h.dimension
                              : _.Sr.WEEK,
                          i =
                            (null == h
                              ? void 0
                              : null === (e = h.date) || void 0 === e
                                ? void 0
                                : null === (n = e.format) || void 0 === n
                                  ? void 0
                                  : n.call(e, "YYYYMMDD")) || "";
                        (s &&
                          s("听歌小结", {
                            svar2: "听歌统计_我的好友排行榜排名",
                          }),
                          (0, v.w)({
                            dimension: t,
                            date: i,
                            skin: null == h ? void 0 : h.skin,
                          }));
                      },
                      children: [
                        (0, g.jsxs)("div", {
                          className: c().rankLabel,
                          children: [
                            "好友排行榜",
                            (0, g.jsx)(u.Z, { name: "right_half" }),
                          ],
                        }),
                        N &&
                          (0, g.jsx)("div", {
                            className: c().rankValue,
                            children: (0, g.jsxs)("span", {
                              className: c().rankNo,
                              children: ["No.", w.rank],
                            }),
                          }),
                      ],
                    }),
                }),
              ],
            }),
          });
        }),
      );
    },
    88985: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return D;
        },
      });
      var i = t(37667),
        o = t.n(i),
        a = t(33562),
        l = t(93967),
        r = t.n(l),
        s = t(81884),
        c = t.n(s),
        d = t(93452),
        u = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/title-vehicle.140b0d31.png",
          height: 71,
          width: 719,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAQAAABJCSfIAAAAE0lEQVR42mP4pwWEmv8U/ylDWABRcwkvbQfkqQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 1,
        },
        v = t(93239),
        _ = t(22239),
        g = t(84241),
        m = t(29870),
        p = t(35952),
        h = t(64652),
        f = t(17468),
        x = t(82628),
        A = t.n(x),
        b = t(60363),
        j = t.n(b),
        y = t(75467),
        w = t(23951);
      t(49553);
      var k = t(99850),
        N = t(32257),
        C = t(12557),
        S = t(25965),
        L = (0, d.Z)(
          (0, a.Pi)(function (e) {
            var n,
              t = e.data,
              o = e.stores,
              a = e.className,
              l = t.title,
              s = t.content,
              c = t.tip,
              d = void 0 === c ? "" : c,
              u = t.type,
              m = void 0 === u ? "" : u,
              p = t.cover,
              h = void 0 === p ? "" : p,
              x = t.mixsongid,
              b = t.avatar,
              L = void 0 === b ? "" : b,
              M = t.onTitleClick,
              I = t.onClick,
              E = void 0 === I ? function () {} : I,
              D = (0, i.useState)(""),
              R = D[0],
              T = D[1],
              Z = ((null == o ? void 0 : o.dataStore) || {}).skin,
              W = ((null == o ? void 0 : o.appStore) || {}).playStatus,
              O =
                ((n = (0, f.Z)(
                  A().mark(function e() {
                    var n, t, i, o;
                    return A().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = Z === v.lu.BLACKV2),
                                (e.prev = 1),
                                (e.next = 4),
                                (0, k.pe)({
                                  src: h,
                                  saturation: n ? 0.3 : 1,
                                  lightness: n ? 0.5 : 0.6,
                                  opacity: 1,
                                  returnRGBA: !0,
                                })
                              );
                            case 4:
                              ((t = e.sent),
                                (i = "rgba("
                                  .concat(t.r, ", ")
                                  .concat(t.g, ", ")
                                  .concat(t.b, ", ", 0.2, ")")),
                                (o = "rgba("
                                  .concat(t.r, ", ")
                                  .concat(t.g, ", ")
                                  .concat(t.b, ", ", 0.1, ")")),
                                n &&
                                  ((i = "rgba("
                                    .concat(t.r, ", ")
                                    .concat(t.g, ", ")
                                    .concat(t.b, ", ", 1, ")")),
                                  (o = "rgba("
                                    .concat(t.r, ", ")
                                    .concat(t.g, ", ")
                                    .concat(t.b, ", ", 0.1, ")"))),
                                T([i, o]),
                                (e.next = 13));
                              break;
                            case 11:
                              ((e.prev = 11), (e.t0 = e.catch(1)));
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 11]],
                    );
                  }),
                )),
                function () {
                  return n.apply(this, arguments);
                });
            return (
              (0, i.useEffect)(
                function () {
                  h && O();
                },
                [h, Z],
              ),
              (0, S.jsxs)(
                "div",
                {
                  className: r()(j().wrap, j()[m], a),
                  children: [
                    (0, S.jsxs)("div", {
                      className: j().title,
                      onClick: M,
                      children: [
                        (0, S.jsx)("span", { children: void 0 === l ? "" : l }),
                        !!M &&
                          (0, S.jsx)(g.Z, {
                            name: "right_normal",
                            className: j().titleIcon,
                          }),
                      ],
                    }),
                    (0, S.jsx)("div", {
                      className: r()(j().topName),
                      children: void 0 === s ? "" : s,
                    }),
                    (0, S.jsxs)("div", {
                      className: r()(j().centerWrap),
                      children: [
                        "favSong" === m &&
                          h &&
                          (0, S.jsxs)("div", {
                            className: j().coverWrap,
                            onClick: E,
                            children: [
                              (0, S.jsxs)("div", {
                                className: j().coverBg,
                                children: [
                                  (0, S.jsx)("img", {
                                    className: j().texture,
                                    src: w.Z.src,
                                    style: {
                                      backgroundColor: R[0],
                                      borderColor: R[1],
                                    },
                                    alt: "",
                                  }),
                                  (0, S.jsx)("img", {
                                    className: j().cdCover,
                                    src: h,
                                    onError: _.k2,
                                    alt: "",
                                    style: {
                                      backgroundColor: R[0],
                                      borderColor: R[1],
                                    },
                                  }),
                                ],
                              }),
                              (0, S.jsxs)("div", {
                                className: j().cover,
                                children: [
                                  (0, S.jsx)("img", {
                                    src: h,
                                    onError: _.k2,
                                    alt: "",
                                  }),
                                  (0, S.jsx)("div", {
                                    className: j().playIcon,
                                    children: (0, S.jsx)("img", {
                                      src:
                                        +(null == W ? void 0 : W.mixsongId) ==
                                          +(void 0 === x ? 0 : x) &&
                                        1 == +(null == W ? void 0 : W.status)
                                          ? C.Z.src
                                          : N.Z.src,
                                      alt: "",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        "favSinger" === m &&
                          !!L &&
                          (0, S.jsx)("div", {
                            className: j().avatarWrap,
                            style: { backgroundImage: "url(".concat(y.Z, ")") },
                            children: (0, S.jsx)("div", {
                              className: j().avatar,
                              onClick: E,
                              children: (0, S.jsx)("img", {
                                alt: "",
                                src: L,
                                onError: _.LG,
                              }),
                            }),
                          }),
                      ],
                    }),
                    d &&
                      (0, S.jsx)("div", { className: j().desc, children: d }),
                  ],
                },
                m,
              )
            );
          }),
        ),
        M = t(55500),
        I = t(11284),
        E = {
          no1: "https://voowebpbssdl.kugou.com/c1a31b1b5d9bb382b9100eee509a10ba.png",
          no2: "https://voowebpbssdl.kugou.com/b9e3dc7f4e88500527b13e2c6a6c4b10.png",
          no3: "https://voowebpbssdl.kugou.com/2843e811563b1901cf8534436b80b2c3.png",
        },
        D = (0, d.Z)(
          (0, a.Pi)(function (e) {
            var n,
              t,
              a,
              l,
              s,
              d,
              f,
              x,
              A,
              b,
              j,
              y,
              w,
              k,
              N,
              C,
              D,
              R,
              T,
              Z,
              W,
              O,
              B,
              V = e.type,
              F = void 0 === V ? "normal" : V,
              P = e.stores,
              U = e.clickMobileLog,
              Y = e.vooConfig,
              H = P.dataStore,
              z = P.appStore,
              G = H.dimension,
              Q = H.statistics,
              K = (H.dateIndexs, H.dateRanges, H.date),
              J = H.skin,
              q = (0, i.useRef)(),
              X = (0, i.useState)(!1),
              $ = X[0],
              ee = X[1],
              en = !(
                (null == Q
                  ? void 0
                  : null === (k = Q.car) || void 0 === k
                    ? void 0
                    : k.listen_duration) > 0 &&
                (null == Q
                  ? void 0
                  : null === (N = Q.car) || void 0 === N
                    ? void 0
                    : N.listen_total) > 0
              );
            if (
              ((0, i.useEffect)(
                function () {
                  if (!en) {
                    e.mobileLog
                      ? e.mobileLog({
                          a: 1133817,
                          b: "曝光",
                          ft: v.En[G],
                          svar1: "车载统计",
                        })
                      : console.warn("Vehicle mobileLog is undefined");
                    return;
                  }
                },
                [en],
              ),
              en)
            )
              return null;
            var et =
                null == Q
                  ? void 0
                  : null === (C = Q.car) || void 0 === C
                    ? void 0
                    : C.listen_total,
              ei = (0, _.WJ)(
                null == Q
                  ? void 0
                  : null === (D = Q.car) || void 0 === D
                    ? void 0
                    : D.listen_duration,
              ),
              eo = "";
            (et > 9999 || (null == ei ? void 0 : ei.count) > 9999) &&
              ((eo = c().smallNum),
              (et > 99999 || (null == ei ? void 0 : ei.count) > 99999) &&
                (eo = c().ssmallNum));
            var ea =
              ((j = (b = (null == Q ? void 0 : Q.car) || {}).favorite_song),
              (y = b.favorite_singer),
              (w = []),
              (null == j
                ? void 0
                : null === (n = j.song_info) || void 0 === n
                  ? void 0
                  : null === (t = n.name) || void 0 === t
                    ? void 0
                    : t.length) > 0 &&
                w.push({
                  title: "最爱歌曲",
                  content: (0, S.jsx)(M.Z, {
                    width: 268,
                    targetText:
                      null == j
                        ? void 0
                        : null === (s = j.song_info) || void 0 === s
                          ? void 0
                          : s.name,
                    style: { fontSize: 40 },
                  }),
                  tip: "播放".concat((null == j ? void 0 : j.count) || 1, "次"),
                  mixsongid:
                    null == j
                      ? void 0
                      : null === (d = j.song_info) || void 0 === d
                        ? void 0
                        : d.mixsongid,
                  cover: (0, _.Yp)(
                    null == j
                      ? void 0
                      : null === (f = j.song_info) || void 0 === f
                        ? void 0
                        : f.cover,
                    120,
                  ),
                  type: "favSong",
                  onTitleClick:
                    "share" === F
                      ? null
                      : function () {
                          U("车载统计", { svar2: "最爱歌曲" });
                          var e = (0, _.G8)({
                            page: "rank",
                            query: {
                              isHideTitleBar: 1,
                              dimension: G,
                              date: null == K ? void 0 : K.format("YYYYMMDD"),
                              rankType: v.Jd.SONG_VEHICLE,
                              skin: J,
                              sonicparams: ""
                                .concat(J, "_")
                                .concat(v.Jd.SONG_VEHICLE),
                              sonic_remain_params: "sonicparams",
                            },
                          });
                          if (
                            !I.LightMobileCall.isInClient() &&
                            "1" === (0, _.vH)().debug
                          ) {
                            window.open(e);
                            return;
                          }
                          I.LightMobileCall.mobileCall(v.x8.openURL, {
                            isFullScreen: 1,
                            url: e,
                          });
                        },
                  onClick: function (e) {
                    if ("share" !== F) {
                      e && e.stopPropagation();
                      var n,
                        t,
                        i,
                        o =
                          null == j
                            ? void 0
                            : null === (n = j.song_info) || void 0 === n
                              ? void 0
                              : n.mixsongid,
                        a =
                          +(null == z
                            ? void 0
                            : null === (t = z.playStatus) || void 0 === t
                              ? void 0
                              : t.mixsongId) == +o,
                        l =
                          a &&
                          1 ==
                            +(null == z
                              ? void 0
                              : null === (i = z.playStatus) || void 0 === i
                                ? void 0
                                : i.status);
                      (U("车载统计", {
                        svar2: "最爱歌曲",
                        svar3: "播放",
                        svar5: o,
                      }),
                        a ? (0, _._D)(l) : (0, _._n)(o));
                    }
                  },
                }),
              (null == y
                ? void 0
                : null === (a = y.singer_info) || void 0 === a
                  ? void 0
                  : null === (l = a.name) || void 0 === l
                    ? void 0
                    : l.length) > 0 &&
                w.push({
                  title: "最爱歌手",
                  jumpType: "singer",
                  content: (0, S.jsx)(M.Z, {
                    width: 268,
                    targetText:
                      null == y
                        ? void 0
                        : null === (x = y.singer_info) || void 0 === x
                          ? void 0
                          : x.name,
                    style: { fontSize: 40 },
                  }),
                  tip: "播放".concat((null == y ? void 0 : y.total) || 1, "次"),
                  avatar: (0, _.I$)(
                    null == y
                      ? void 0
                      : null === (A = y.singer_info) || void 0 === A
                        ? void 0
                        : A.avatar,
                    120,
                  ),
                  type: "favSinger",
                  onTitleClick:
                    "share" === F
                      ? null
                      : function () {
                          U("车载统计", { svar2: "最爱歌手" });
                          var e = (0, _.G8)({
                            page: "ranksinger",
                            query: {
                              isHideTitleBar: 1,
                              dimension: G,
                              date: null == K ? void 0 : K.format("YYYYMMDD"),
                              rankType: v.Jd.SINGER_VEHICLE,
                              skin: J,
                              sonicparams: ""
                                .concat(J, "_")
                                .concat(v.Jd.SINGER_VEHICLE),
                              sonic_remain_params: "sonicparams",
                            },
                          });
                          if (
                            !I.LightMobileCall.isInClient() &&
                            "1" === (0, _.vH)().debug
                          ) {
                            window.open(e);
                            return;
                          }
                          I.LightMobileCall.mobileCall(v.x8.openURL, {
                            isFullScreen: 1,
                            url: e,
                          });
                        },
                  onClick: function () {
                    if ("share" !== F) {
                      var e,
                        n,
                        t =
                          null == y
                            ? void 0
                            : null === (e = y.singer_info) || void 0 === e
                              ? void 0
                              : e.singer_id;
                      (U("车载统计", {
                        svar2: "最爱歌手",
                        svar3: "点击内容",
                        ivar1: t,
                      }),
                        I.LightMobileCall.mobileCall(
                          v.x8.categoryJumpSingerPage,
                          {
                            singerId: t,
                            singerName:
                              null == y
                                ? void 0
                                : null === (n = y.singer_info) || void 0 === n
                                  ? void 0
                                  : n.name,
                          },
                        ));
                    }
                  },
                }),
              w);
            return (0, S.jsxs)(
              "div",
              {
                className: r()(c().wrap, c()[J]),
                id: "vehicle_statistics",
                children: [
                  (0, S.jsxs)("div", {
                    className: c().title,
                    children: [
                      (0, S.jsx)("img", {
                        className: c().titleBg,
                        src: u.src,
                        alt: "",
                      }),
                      (0, S.jsxs)("strong", {
                        children: [
                          (0, S.jsx)("span", { children: "车载统计" }),
                          (null == Y
                            ? void 0
                            : null === (R = Y.vehicleConfig) || void 0 === R
                              ? void 0
                              : null === (T = R.tooltip) || void 0 === T
                                ? void 0
                                : T.length) > 0 &&
                            (0, S.jsxs)("span", {
                              className: c().icon,
                              ref: q,
                              children: [
                                "share" !== F &&
                                  (0, S.jsx)(g.Z, {
                                    name: "act_info",
                                    className: c().i,
                                    onFocus: function () {
                                      return ee(!0);
                                    },
                                    onBlur: function () {
                                      return ee(!1);
                                    },
                                    tabIndex: 1,
                                  }),
                                $ &&
                                  (0, S.jsx)(m.Z, {
                                    anchorRef: q,
                                    text:
                                      null == Y
                                        ? void 0
                                        : null === (Z = Y.vehicleConfig) ||
                                            void 0 === Z
                                          ? void 0
                                          : Z.tooltip,
                                  }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, S.jsxs)("div", {
                    className: c().modules,
                    children: [
                      (0, S.jsxs)("div", {
                        className: r()(c().headerModule),
                        children: [
                          (0, S.jsxs)("div", {
                            className: c().leftWrap,
                            children: [
                              (0, S.jsx)("div", {
                                className: c().dataLabel,
                                children: ""
                                  .concat(
                                    G === v.Sr.DAY || G === v.Sr.YEAR
                                      ? "今"
                                      : "本",
                                  )
                                  .concat(v.En[G], "收听"),
                              }),
                              (0, S.jsxs)("div", {
                                className: c().dataWrap,
                                children: [
                                  (0, S.jsx)("span", {
                                    className: r()(c().num, eo),
                                    children: et,
                                  }),
                                  (0, S.jsx)("span", {
                                    className: c().unit,
                                    children: "首",
                                  }),
                                  et > 0 &&
                                    (null == ei ? void 0 : ei.count) > 0 &&
                                    (0, S.jsx)("span", {
                                      className: c().split,
                                      children: "/",
                                    }),
                                  (null == ei ? void 0 : ei.count) > 0 &&
                                    (0, S.jsxs)(S.Fragment, {
                                      children: [
                                        (0, S.jsx)("span", {
                                          className: r()(c().num, eo),
                                          children:
                                            null == ei ? void 0 : ei.count,
                                        }),
                                        (0, S.jsx)("span", {
                                          className: c().unit,
                                          children:
                                            null == ei ? void 0 : ei.unit,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, S.jsxs)("div", {
                                className: c().descWrap,
                                children: [
                                  "超过",
                                  (0, _.rl)(
                                    (null == Q
                                      ? void 0
                                      : null === (W = Q.car) || void 0 === W
                                        ? void 0
                                        : W.duration_defeat_percent) / 100,
                                  ),
                                  "的人",
                                ],
                              }),
                            ],
                          }),
                          (0, S.jsx)("div", {
                            className: c().medalWrap,
                            children: (0, S.jsx)("div", {
                              className: c().medal,
                              children: (0, S.jsx)("img", {
                                alt: "",
                                src:
                                  E[
                                    (null == Q
                                      ? void 0
                                      : null === (O = Q.car) || void 0 === O
                                        ? void 0
                                        : O.duration_defeat_percent) >= 9e3
                                      ? "no1"
                                      : (null == Q
                                            ? void 0
                                            : null === (B = Q.car) ||
                                                void 0 === B
                                              ? void 0
                                              : B.duration_defeat_percent) >=
                                          5e3
                                        ? "no2"
                                        : "no3"
                                  ] || E.no3,
                              }),
                            }),
                          }),
                        ],
                      }),
                      (null == ea ? void 0 : ea.length) > 0 &&
                        (0, S.jsx)(p.Z, {}),
                      (0, S.jsx)("div", {
                        className: r()(
                          c().moduleWrap,
                          (null == ea ? void 0 : ea.length) === 0 && c().empty,
                        ),
                        children: ea.map(function (e, n) {
                          return (0, S.jsxs)(
                            o().Fragment,
                            {
                              children: [
                                n % 2 == 1 &&
                                  (0, S.jsx)(h.Z, {
                                    className: c().splitVerticalLine,
                                  }),
                                (0, S.jsx)(L, {
                                  className: c().splitModule,
                                  data: e,
                                  type: F,
                                }),
                              ],
                            },
                            n,
                          );
                        }),
                      }),
                    ],
                  }),
                ],
              },
              "Vehicle",
            );
          }),
        );
    },
    98115: function (e, n, t) {
      "use strict";
      var i = t(75723),
        o = t(17468),
        a = t(82628),
        l = t.n(a);
      t(37667);
      var r = t(33562),
        s = t(93967),
        c = t.n(s),
        d = t(1625),
        u = t.n(d),
        v = t(35952),
        _ = t(22239),
        g = t(11284),
        m = t(93239),
        p = t(93452),
        h = t(87),
        f = t(84241),
        x = t(25965);
      n.Z = (0, p.Z)(
        (0, r.Pi)(function (e) {
          var n,
            t,
            a,
            r = e.type,
            s = e.stores,
            d = e.clickMobileLog,
            p = e.mobileLog,
            A = s.dataStore,
            b = A.yearChartData,
            j = A.dimension,
            y = A.skin,
            w =
              ((n = (0, o.Z)(
                l().mark(function e(n) {
                  var t, i;
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ("share" !== r) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (
                            (d && d("年度歌曲", { svar2: "歌曲收听榜" }),
                            (t = (0, _.G8)({
                              page: "rank",
                              query: {
                                isHideTitleBar: 1,
                                dimension: j,
                                date: n + "0101",
                                rankType: m.Jd.SONG,
                                skin: y,
                                sonicparams: ""
                                  .concat(y, "_")
                                  .concat(m.Jd.SONG),
                                sonic_remain_params: "sonicparams",
                              },
                            })),
                            !(
                              !g.LightMobileCall.isInClient() &&
                              "1" === (0, _.vH)().debug
                            ))
                          ) {
                            e.next = 7;
                            break;
                          }
                          return (window.open(t), e.abrupt("return"));
                        case 7:
                          return ((e.next = 9), (0, _.hj)());
                        case 9:
                          ((i = e.sent),
                            g.LightMobileCall.mobileCall(m.x8.openURL, {
                              browser: 0,
                              isFullScreen: 1,
                              url: t,
                              hasBar: i ? 1 : 0,
                            }));
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function (e) {
                return n.apply(this, arguments);
              });
          return (0, x.jsx)("div", {
            className: c()(u().wrap, [u()[r]]),
            children:
              null ===
                (t =
                  (null == b
                    ? void 0
                    : null === (a = b.stat_data) || void 0 === a
                      ? void 0
                      : a.length) > 0
                    ? (0, i.Z)(b.stat_data).reverse()
                    : []) || void 0 === t
                ? void 0
                : t.map(function (e) {
                    if (
                      (null == e ? void 0 : e.play_song_num) <= 0 ||
                      (null === (n = e.song_list) || void 0 === n
                        ? void 0
                        : n.length) === 0
                    )
                      return null;
                    var n,
                      t,
                      i,
                      o = {
                        rank_song: (Array.isArray(
                          null == e ? void 0 : e.song_list,
                        )
                          ? null == e
                            ? void 0
                            : e.song_list
                          : []
                        ).map(function (e) {
                          return {
                            author_name: e.author_name,
                            mixsongid: e.mixsongid,
                            title: e.ori_audio_name,
                            cover: e.pic,
                          };
                        }),
                      },
                      a = (0, _.WJ)(
                        60 * ((null == e ? void 0 : e.play_time) || 0),
                      );
                    return (0, x.jsx)(
                      "div",
                      {
                        className: u().itemWrap,
                        children: (0, x.jsxs)(h.Z, {
                          count: null == e ? void 0 : e.play_song_num,
                          type: r,
                          yearData: o,
                          clickMobileLog: d,
                          mobileLog: p,
                          isAnimation: !1,
                          year: null == e ? void 0 : e.year,
                          shareConfig: {
                            title: "".concat(
                              null == e ? void 0 : e.year,
                              "年度",
                            ),
                          },
                          children: [
                            (0, x.jsxs)("div", {
                              className: u().moduleHeader,
                              onClick: function () {
                                return w(null == e ? void 0 : e.year);
                              },
                              children: [
                                (0, x.jsxs)("div", {
                                  className: u().headerLeft,
                                  children: [
                                    (0, x.jsx)("strong", {
                                      children: null == e ? void 0 : e.year,
                                    }),
                                    (0, x.jsx)("span", { children: "年听歌" }),
                                    (null == a ? void 0 : a.count) >= 0 &&
                                      (0, x.jsxs)(x.Fragment, {
                                        children: [
                                          (0, x.jsx)("span", {
                                            className: u().headNum,
                                            children:
                                              null == a ? void 0 : a.count,
                                          }),
                                          (0, x.jsx)("span", {
                                            className: u().headUnit,
                                            children:
                                              null == a ? void 0 : a.unit,
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                (0, x.jsx)("div", {
                                  className: u().headerRight,
                                  children: (0, x.jsxs)("div", {
                                    className: u().rightMore,
                                    children: [
                                      (0, x.jsx)("span", {
                                        children: "收听榜",
                                      }),
                                      (0, x.jsx)(f.Z, { name: "right_rect" }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            null !== (t = m.sh[null == e ? void 0 : e.year]) &&
                            void 0 !== t &&
                            t.url
                              ? (0, x.jsxs)(x.Fragment, {
                                  children: [
                                    (0, x.jsx)(v.Z, { isHollow: !0 }),
                                    (0, x.jsxs)("div", {
                                      className: u().yearReport,
                                      children: [
                                        (0, x.jsx)("div", {
                                          className: u().cover,
                                          children: (0, x.jsx)("img", {
                                            src:
                                              null ===
                                                (i =
                                                  m.sh[
                                                    null == e ? void 0 : e.year
                                                  ]) || void 0 === i
                                                ? void 0
                                                : i.thumb,
                                            alt: "",
                                            onError: _.k2,
                                          }),
                                        }),
                                        (0, x.jsxs)("div", {
                                          children: [
                                            (0, x.jsx)("div", {
                                              className: u().title,
                                              children: "年度听歌报告",
                                            }),
                                            (0, x.jsxs)("div", {
                                              className: u().desc,
                                              onClick: function () {
                                                var n;
                                                "share" !== r &&
                                                  (g.LightMobileCall.mobileCall(
                                                    m.x8.openURL,
                                                    {
                                                      browser: 0,
                                                      isFullScreen: 1,
                                                      url:
                                                        null ===
                                                          (n =
                                                            m.sh[
                                                              null == e
                                                                ? void 0
                                                                : e.year
                                                            ]) || void 0 === n
                                                          ? void 0
                                                          : n.url,
                                                    },
                                                  ),
                                                  d &&
                                                    d("听歌小结", {
                                                      svar2: "年度概览",
                                                      svar3: "点击跳转",
                                                      svar5:
                                                        null == e
                                                          ? void 0
                                                          : e.year,
                                                    }));
                                              },
                                              children: [
                                                (0, x.jsxs)("span", {
                                                  children: [
                                                    "重温我的",
                                                    null == e ? void 0 : e.year,
                                                    "听歌回忆",
                                                  ],
                                                }),
                                                (0, x.jsx)(f.Z, {
                                                  name: "right_normal",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : null,
                          ],
                        }),
                      },
                      null == e ? void 0 : e.year,
                    );
                  }),
          });
        }),
      );
    },
    19811: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return eC;
        },
      });
      var i = t(17468),
        o = t(82628),
        a = t.n(o),
        l = t(37667),
        r = t(33562),
        s = t(74696),
        c = t.n(s),
        d = t(93239),
        u = t(52562),
        v = t.n(u),
        _ = t(54255),
        g = t.n(_),
        m = t(22239),
        p = t(11284),
        h = t(98875),
        f = t(93967),
        x = t.n(f),
        A = t(25965),
        b = (0, r.Pi)(function (e) {
          var n,
            t,
            i = e.yearData,
            o = e.needTitle,
            a = e.type,
            l = e.stores,
            r = e.maxImgCount,
            s = void 0 === r ? 16 : r,
            c = e.isAnimation,
            d = l.dataStore,
            u = d.dimension,
            v = d.statistics,
            _ =
              null == i
                ? void 0
                : null === (n = i.rank_song) || void 0 === n
                  ? void 0
                  : n.filter(function (e) {
                      return null == e ? void 0 : e.cover;
                    }),
            f =
              null == v
                ? void 0
                : null === (t = v.rank_song) || void 0 === t
                  ? void 0
                  : t.filter(function (e) {
                      var n;
                      return null == e
                        ? void 0
                        : null === (n = e.song_info) || void 0 === n
                          ? void 0
                          : n.cover;
                    }),
            b = function () {
              var e;
              return (0, A.jsx)(A.Fragment, {
                children:
                  null === (e = (0, m.o0)(3 === u ? _ : f, s)) || void 0 === e
                    ? void 0
                    : e.map(function (e, n) {
                        var t, i, o;
                        return (0, A.jsx)(
                          "img",
                          {
                            alt: "",
                            src:
                              (0, p.replaceHttpsImg)(
                                3 === u
                                  ? null == e
                                    ? void 0
                                    : null === (t = e.cover) || void 0 === t
                                      ? void 0
                                      : t.replace("{size}", 240)
                                  : null == e
                                    ? void 0
                                    : null === (i = e.song_info) || void 0 === i
                                      ? void 0
                                      : null === (o = i.cover) || void 0 === o
                                        ? void 0
                                        : o.replace("{size}", 240),
                              ) || h.Z.src,
                          },
                          n,
                        );
                      }),
              });
            };
          return (0, A.jsxs)("div", {
            className: x()(g().wall, [g()[void 0 === a ? "normal" : a]]),
            children: [
              (void 0 === o || o) &&
                (0, A.jsx)("div", {
                  className: g().titleWrap,
                  children: (0, A.jsx)("div", {
                    className: g().title,
                    children: "唱片墙",
                  }),
                }),
              (0, A.jsxs)("div", {
                className: x()(
                  g().img_wrapper,
                  (void 0 === c || c) && g().img_wrapper_animation,
                ),
                children: [
                  b(),
                  (0, A.jsx)("div", {
                    className: g().img_wrapper_copy,
                    children: b(),
                  }),
                ],
              }),
            ],
          });
        }),
        j = t(55616),
        y = t(24466),
        w = t(60235),
        k = t(53566),
        N = t(55500),
        C = t(93452),
        S = t(12520),
        L = (0, C.Z)(
          (0, r.Pi)(function (e) {
            var n,
              t,
              o = e.yearData,
              r = e.type,
              s = e.stores,
              c = e.clickMobileLog,
              u = e.mobileLog,
              _ = s.dataStore,
              g = s.appStore.baseInfo,
              h = _.dimension,
              f = _.date,
              C = _.statistics,
              L = _.skin,
              M = (0, l.useRef)(),
              I = (0, l.useRef)(null),
              E =
                ((n = (0, i.Z)(
                  a().mark(function e() {
                    var n, t, i, l, r, _;
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              c(
                                3 === h
                                  ? "年度歌曲"
                                  : ""
                                      .concat(0 === h ? "今" : "本")
                                      .concat(d.En[h], "歌曲"),
                                { svar2: "唱片墙", svar3: "查看我的唱片海报" },
                              ),
                              u({
                                a: 1131814,
                                b: "曝光",
                                ft: d.En[h],
                                svar1: "唱片墙",
                              }),
                              (e.next = 4),
                              (0, m.hj)()
                            );
                          case 4:
                            ((r = e.sent) &&
                              p.LightMobileCall.mobileCall(d.x8.showHideBar, {
                                state: 0,
                              }),
                              (_ = j.Z.show({
                                children: (0, A.jsxs)("div", {
                                  className: v().shareWrap,
                                  onClick: function () {
                                    (_.close(),
                                      r &&
                                        p.LightMobileCall.mobileCall(
                                          d.x8.showHideBar,
                                          { state: 1 },
                                        ));
                                  },
                                  children: [
                                    (0, A.jsxs)("div", {
                                      className: v().modal,
                                      ref: M,
                                      children: [
                                        (0, A.jsx)("img", {
                                          src: "https://webvoobssdl.kugou.com/f3b557be3d1d8164e81187a2046b1b32.png",
                                          className: v().closeBtn,
                                        }),
                                        (0, A.jsx)("div", {
                                          className: v().bgWrap,
                                        }),
                                        (0, A.jsx)("img", {
                                          src: "https://webvoobssdl.kugou.com/25a541ef66a3bf88d8122bcaa79fbbb6.png",
                                          className: v().bg,
                                        }),
                                        (0, A.jsxs)("div", {
                                          className: v().text,
                                          children: [
                                            (0, A.jsx)("div", {
                                              className: v().userName,
                                              children: (0, A.jsx)(N.Z, {
                                                width: 360,
                                                targetText:
                                                  null == g
                                                    ? void 0
                                                    : g.userNickName,
                                                style: { fontSize: 26 },
                                                keepText: "@",
                                              }),
                                            }),
                                            (0, A.jsxs)("div", {
                                              className: v().title,
                                              children: [
                                                3 === h
                                                  ? "".concat(
                                                      null == f
                                                        ? void 0
                                                        : f.format(d.zT[h]),
                                                      "度",
                                                    )
                                                  : ""
                                                      .concat(
                                                        0 === h ? "今" : "本",
                                                      )
                                                      .concat(d.En[h]),
                                                "唱片墙",
                                              ],
                                            }),
                                            (0, A.jsxs)("div", {
                                              className: v().tips,
                                              children: [
                                                null ===
                                                  (n =
                                                    3 === h
                                                      ? null == o
                                                        ? void 0
                                                        : null ===
                                                              (i =
                                                                o.rank_song) ||
                                                            void 0 === i
                                                          ? void 0
                                                          : i.filter(
                                                              function (e) {
                                                                return null == e
                                                                  ? void 0
                                                                  : e.cover;
                                                              },
                                                            )
                                                      : null == C
                                                        ? void 0
                                                        : null ===
                                                              (l =
                                                                C.rank_song) ||
                                                            void 0 === l
                                                          ? void 0
                                                          : l.filter(
                                                              function (e) {
                                                                var n;
                                                                return null == e
                                                                  ? void 0
                                                                  : null ===
                                                                        (n =
                                                                          e.song_info) ||
                                                                      void 0 ===
                                                                        n
                                                                    ? void 0
                                                                    : n.cover;
                                                              },
                                                            )) || void 0 === n
                                                  ? void 0
                                                  : null ===
                                                        (t = n.splice(0, 3)) ||
                                                      void 0 === t
                                                    ? void 0
                                                    : t.map(function (e, n) {
                                                        var t;
                                                        return (0, A.jsx)(
                                                          "div",
                                                          {
                                                            children: (0,
                                                            A.jsx)(N.Z, {
                                                              width: 400,
                                                              targetText:
                                                                3 === h
                                                                  ? null == e
                                                                    ? void 0
                                                                    : e.title
                                                                  : null == e
                                                                    ? void 0
                                                                    : null ===
                                                                          (t =
                                                                            e.song_info) ||
                                                                        void 0 ===
                                                                          t
                                                                      ? void 0
                                                                      : t.name,
                                                              style: {
                                                                fontSize: 30,
                                                              },
                                                            }),
                                                          },
                                                          n,
                                                        );
                                                      }),
                                                (0, A.jsx)("div", {
                                                  children: "...",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, A.jsx)("div", {
                                          className: v().shareWall,
                                          children: (0, A.jsx)(b, {
                                            yearData: o,
                                            needTitle: !1,
                                            type: "share",
                                            stores: s,
                                            maxImgCount: 12,
                                            isAnimation: !1,
                                          }),
                                        }),
                                        (0, A.jsx)("div", {
                                          className: v().bottomWrap,
                                          children: (0, A.jsxs)("div", {
                                            className: v().bottom,
                                            children: [
                                              (0, A.jsxs)("div", {
                                                className: v().left,
                                                children: [
                                                  (0, A.jsx)("img", {
                                                    alt: "",
                                                    src: w.Z.src,
                                                  }),
                                                  (0, A.jsx)("div", {
                                                    className: v().text,
                                                    children:
                                                      "扫码查看我的听歌统计",
                                                  }),
                                                ],
                                              }),
                                              (0, A.jsx)("div", {
                                                className: v().qrcode,
                                                children: (0, A.jsx)(k.t, {
                                                  value: d.XJ,
                                                  size: 256,
                                                  includeMargin: !0,
                                                  level: "M",
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, A.jsxs)("div", {
                                      className: v().btnWrap,
                                      children: [
                                        (0, A.jsx)("div", {
                                          className: v().shareBtn,
                                          onClick: function (e) {
                                            return D(e, "save");
                                          },
                                          children: "保存图片",
                                        }),
                                        (0, A.jsx)("div", {
                                          className: v().shareBtn,
                                          onClick: function (e) {
                                            return D(e, "share");
                                          },
                                          children: "分享",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              })));
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return n.apply(this, arguments);
                }),
              D =
                ((t = (0, i.Z)(
                  a().mark(function e(n, t) {
                    var o, l;
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((n && n.stopPropagation(), I.current)) {
                              e.next = 5;
                              break;
                            }
                            return ((e.next = 4), (0, y.X)());
                          case 4:
                            I.current = e.sent;
                          case 5:
                            ((M.current.style.borderRadius = 0),
                              I.current
                                .default(M.current, {
                                  useCORS: !0,
                                  allowTaint: !1,
                                  width:
                                    null === (o = M.current) || void 0 === o
                                      ? void 0
                                      : o.getBoundingClientRect().width,
                                  height:
                                    null === (l = M.current) || void 0 === l
                                      ? void 0
                                      : l.getBoundingClientRect().height,
                                  scale: 2,
                                  backgroundColor: null,
                                })
                                .then(
                                  (function () {
                                    var e = (0, i.Z)(
                                      a().mark(function e(n) {
                                        var i;
                                        return a().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                if (
                                                  ((i = n.toDataURL()),
                                                  "share" !== t)
                                                ) {
                                                  e.next = 6;
                                                  break;
                                                }
                                                (p.share.resetShareData({
                                                  type: 4,
                                                  img: i,
                                                  subbiz: "song_statistics",
                                                  shareChannel: d.AC,
                                                }),
                                                  p.share.shareAll(),
                                                  (e.next = 16));
                                                break;
                                              case 6:
                                                if ("save" !== t) {
                                                  e.next = 16;
                                                  break;
                                                }
                                                return (
                                                  (e.next = 9),
                                                  (0, S.pc)([
                                                    {
                                                      platform: "android",
                                                      version: 9305,
                                                    },
                                                    {
                                                      platform: "ios",
                                                      version: 9305,
                                                    },
                                                    {
                                                      platform: "harmony",
                                                      version: 20141,
                                                    },
                                                  ])
                                                );
                                              case 9:
                                                if (e.sent) {
                                                  e.next = 13;
                                                  break;
                                                }
                                                return (
                                                  (window.location.href =
                                                    "https://activity.kugou.com/update/v-22e2dee1/index.html"),
                                                  e.abrupt("return")
                                                );
                                              case 13:
                                                (u({
                                                  a: 1131818,
                                                  b: "点击",
                                                  svar1: "唱片墙",
                                                  svar2: "唱片墙",
                                                  svar3: "保存图片",
                                                }),
                                                  p.LightMobileCall.mobileCall(
                                                    d.x8.saveImg,
                                                    {
                                                      imageData: i,
                                                      callback:
                                                        "sceneSaveShareImgCb",
                                                      showToast: 0,
                                                    },
                                                  ),
                                                  (window.sceneSaveShareImgCb =
                                                    function (e) {
                                                      var n;
                                                      if ("string" == typeof e)
                                                        try {
                                                          e = JSON.parse(e);
                                                        } catch (e) {}
                                                      1 ==
                                                      +(null === (n = e) ||
                                                      void 0 === n
                                                        ? void 0
                                                        : n.status)
                                                        ? (0, m.FN)(
                                                            "已保存至本地",
                                                          )
                                                        : (0, m.FN)("保存失败");
                                                    }));
                                              case 16:
                                                ((M.current.style.borderRadius =
                                                  (0, m.ht)(12)),
                                                  n.remove());
                                              case 18:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      }),
                                    );
                                    return function (n) {
                                      return e.apply(this, arguments);
                                    };
                                  })(),
                                )
                                .catch(function (e) {
                                  ((M.current.style.borderRadius = (0, m.ht)(
                                    12,
                                  )),
                                    console.log("html2canvas_err", e));
                                }));
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (e, n) {
                  return t.apply(this, arguments);
                });
            return (0, A.jsxs)("div", {
              className: x()(v().wrap, v()[L]),
              children: [
                (0, A.jsx)("div", {
                  className: v().wall,
                  children: (0, A.jsx)(b, {
                    yearData: o,
                    stores: s,
                    maxImgCount: 16,
                    isAnimation: "share" !== r,
                  }),
                }),
                "share" !== r &&
                  (0, A.jsx)("div", {
                    className: v().btn,
                    onClick: E,
                    children: "查看我的唱片海报",
                  }),
              ],
            });
          }),
        ),
        M = t(6312),
        I = t.n(M),
        E = t(2266),
        D = t(57186),
        R = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/rank1.a038d5a8.png",
          height: 112,
          width: 112,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAQ0lEQVR42mP4x/SP5R8jAzpAEvpn86/7nzyS0L/D/57+swDSzDABwX/d/3SBNBNCU94/RWQtTP9c/4miGqvwjwthHwAgOB2DMzKWHwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        T = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/rank2.11d83019.png",
          height: 112,
          width: 112,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAPUlEQVR42mPAAP+YwBgP+Nf37+i/fCDNCBNo+yf9b8s/eWQhg3/1/9jhAv9M/6X+40eW9/9n+c/4HxfMTADiJhw1F/OUWwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        Z = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/rank3.6b6f680c.png",
          height: 112,
          width: 112,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAARUlEQVR42mPAAP9YwJARUwIm9G/av95/E/6JwYX+Bf2b9W/rP06EANe/yf/cgTQTTAv7P5F/8f+EESoU/nH+0/nHBTMcAJ+RIR+OQR8gAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        W = (0, C.Z)(
          (0, r.Pi)(function (e) {
            var n,
              t,
              o,
              l = e.yearData,
              r = e.type,
              s = e.stores,
              c = e.clickMobileLog,
              u = e._skin,
              v = s.dataStore,
              _ = v.statistics,
              g = v.dimension,
              f = v.skin,
              b = v.date,
              j =
                ((n = (0, i.Z)(
                  a().mark(function e() {
                    var n, t;
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("share" !== r) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (
                              c(
                                3 === g
                                  ? "年度歌曲"
                                  : ""
                                      .concat(0 === g ? "今" : "本")
                                      .concat(d.En[g], "歌曲"),
                                { svar2: "歌曲收听榜" },
                              ),
                              (n = ""
                                .concat(window.location.origin)
                                .concat(
                                  window.location.pathname.replace(
                                    "home",
                                    "rank",
                                  ),
                                  "?ssr_header_param=",
                                )
                                .concat(d.Dc, "&ssr_url_param=")
                                .concat(d.By, "&isHideTitleBar=1&dimension=")
                                .concat(g, "&date=")
                                .concat(
                                  null == b ? void 0 : b.format("YYYYMMDD"),
                                  "&rankType=",
                                )
                                .concat(d.Jd.SONG, "&skin=")
                                .concat(f)),
                              (e.next = 6),
                              (0, m.hj)()
                            );
                          case 6:
                            ((t = e.sent),
                              p.LightMobileCall.mobileCall(d.x8.openURL, {
                                browser: 0,
                                isFullScreen: 1,
                                url: n,
                                hasBar: t ? 1 : 0,
                              }));
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return n.apply(this, arguments);
                });
            return (0, A.jsxs)("div", {
              className: x()(I().wrap, [I()[u || f]]),
              children: [
                (0, A.jsxs)("div", {
                  className: I().title,
                  onClick: j,
                  children: [
                    "歌曲收听榜",
                    "share" !== r &&
                      (0, A.jsx)("img", {
                        alt: "",
                        src: (u || f) === d.lu.BLACK ? D.Z.src : E.Z.src,
                      }),
                  ],
                }),
                null ===
                  (t =
                    3 === g
                      ? null == l
                        ? void 0
                        : l.rank_song
                      : null == _
                        ? void 0
                        : _.rank_song) || void 0 === t
                  ? void 0
                  : null === (o = t.slice(0, 3)) || void 0 === o
                    ? void 0
                    : o.map(function (e, n) {
                        var t, i, o, a, s, u, v;
                        return (0, A.jsxs)(
                          "div",
                          {
                            className: I().songWrap,
                            style: (
                              3 === g
                                ? (null == l
                                    ? void 0
                                    : null === (t = l.rank_song) || void 0 === t
                                      ? void 0
                                      : t.length) === 1
                                : (null == _
                                    ? void 0
                                    : null === (i = _.rank_song) || void 0 === i
                                      ? void 0
                                      : i.length) === 1
                            )
                              ? { marginBottom: 0 }
                              : {},
                            onClick: function () {
                              if ("share" !== r) {
                                var n,
                                  t =
                                    3 === g
                                      ? null == e
                                        ? void 0
                                        : e.id
                                      : null == e
                                        ? void 0
                                        : null === (n = e.song_info) ||
                                            void 0 === n
                                          ? void 0
                                          : n.mixsongid;
                                (c(
                                  3 === g
                                    ? "年度歌曲"
                                    : ""
                                        .concat(0 === g ? "今" : "本")
                                        .concat(d.En[g], "歌曲"),
                                  {
                                    svar2: "歌曲收听榜",
                                    svar3: "播放",
                                    svar5: t,
                                  },
                                ),
                                  (0, m._n)(t));
                              }
                            },
                            children: [
                              (0, A.jsxs)("div", {
                                className: I().songInfo,
                                children: [
                                  (0, A.jsxs)("div", {
                                    className: I().cover,
                                    children: [
                                      (0, A.jsx)("img", {
                                        alt: "",
                                        src:
                                          0 === n
                                            ? R.src
                                            : 1 === n
                                              ? T.src
                                              : Z.src,
                                        className: I().rank,
                                      }),
                                      (0, A.jsx)("img", {
                                        alt: "",
                                        src:
                                          (0, p.replaceHttpsImg)(
                                            3 === g
                                              ? null == e
                                                ? void 0
                                                : null === (o = e.cover) ||
                                                    void 0 === o
                                                  ? void 0
                                                  : o.replace("{size}", 150)
                                              : null == e
                                                ? void 0
                                                : null === (a = e.song_info) ||
                                                    void 0 === a
                                                  ? void 0
                                                  : null === (s = a.cover) ||
                                                      void 0 === s
                                                    ? void 0
                                                    : s.replace("{size}", 150),
                                          ) || h.Z.src,
                                      }),
                                      (0, A.jsx)("div", { className: I().bg }),
                                    ],
                                  }),
                                  (0, A.jsxs)("div", {
                                    className: I().nameWrap,
                                    children: [
                                      (0, A.jsx)("div", {
                                        className: I().songName,
                                        children: (0, A.jsx)(N.Z, {
                                          width: 300,
                                          targetText:
                                            3 === g
                                              ? null == e
                                                ? void 0
                                                : e.title
                                              : null == e
                                                ? void 0
                                                : null === (u = e.song_info) ||
                                                    void 0 === u
                                                  ? void 0
                                                  : u.name,
                                          style: { fontSize: 30 },
                                        }),
                                      }),
                                      (0, A.jsx)("div", {
                                        className: I().singerName,
                                        children: (0, A.jsx)(N.Z, {
                                          width: 250,
                                          targetText:
                                            3 === g
                                              ? null == e
                                                ? void 0
                                                : e.author
                                              : null == e
                                                ? void 0
                                                : null === (v = e.song_info) ||
                                                    void 0 === v
                                                  ? void 0
                                                  : v.singer_name,
                                          style: { fontSize: 22 },
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, A.jsxs)("div", {
                                className: I().playCount,
                                children: [
                                  "播放",
                                  (0, A.jsx)("span", {
                                    children:
                                      3 === g
                                        ? null == e
                                          ? void 0
                                          : e.value
                                        : null == e
                                          ? void 0
                                          : e.count,
                                  }),
                                  "次",
                                ],
                              }),
                            ],
                          },
                          n,
                        );
                      }),
              ],
            });
          }),
        ),
        O = t(63896),
        B = t.n(O),
        V = (0, r.Pi)(function (e) {
          var n = e.data,
            t = n.title,
            i = n.style,
            o = n.content,
            a = n.tip,
            l = n.type,
            r = void 0 === l ? "" : l,
            s = n.cover,
            c = n.coverArr,
            d = void 0 === c ? [] : c,
            u = n.tipWords,
            v = void 0 === u ? [] : u,
            _ = n.onClick,
            g = void 0 === _ ? function () {} : _,
            m = n.value,
            p = n.jumpType;
          return (0, A.jsxs)("div", {
            className: B().song_module,
            children: [
              (0, A.jsx)("div", { className: B().filter_bg }),
              (0, A.jsxs)(
                "div",
                {
                  style: void 0 === i ? "" : i,
                  className: B().wrap,
                  id: void 0 === p ? "" : p,
                  children: [
                    "newFavorite" === r
                      ? (0, A.jsx)("div", {
                          className: B().coverArr,
                          children:
                            null == d
                              ? void 0
                              : d.map(function (e, n) {
                                  return (0, A.jsx)(
                                    "div",
                                    {
                                      className: x()(
                                        B().cover,
                                        B()[r],
                                        B()["pic".concat(n)],
                                      ),
                                      style: { zIndex: 2 - n },
                                      onClick: function () {
                                        return g(
                                          null == e ? void 0 : e.mixsongid,
                                        );
                                      },
                                      children: (0, A.jsx)("img", {
                                        alt: "",
                                        src: null == e ? void 0 : e.cover,
                                      }),
                                    },
                                    n,
                                  );
                                }),
                        })
                      : (0, A.jsx)("div", {
                          className: B().cover,
                          onClick: g,
                          children: (0, A.jsx)("img", {
                            alt: "",
                            src: void 0 === s ? "" : s,
                          }),
                        }),
                    (0, A.jsx)("div", {
                      className: B().title,
                      children: void 0 === t ? "" : t,
                    }),
                    (0, A.jsx)("div", {
                      className: B().content,
                      children: void 0 === o ? "" : o,
                    }),
                    "newFavorite" === r
                      ? (0, A.jsx)("div", {
                          className: B().tip,
                          children: void 0 === a ? "" : a,
                        })
                      : (0, A.jsxs)("div", {
                          className: B().tip,
                          children: [
                            null == v ? void 0 : v[0],
                            (0, A.jsx)("span", {
                              children: void 0 === m ? "" : m,
                            }),
                            null == v ? void 0 : v[1],
                          ],
                        }),
                  ],
                },
                r,
              ),
            ],
          });
        }),
        F = t(75723),
        P = t(8807),
        U = t.n(P),
        Y = t(55735),
        H = t(2851),
        z = (0, C.Z)(function (e) {
          for (
            var n,
              t = e.coverArr,
              i = e.onClick,
              o = e.needJumpIcon,
              a = e.stores.dataStore,
              l = a.statistics,
              r = a.dimension,
              s = function (e) {
                switch (e) {
                  case 0:
                    return { left: (0, m.ht)(0), top: (0, m.ht)(108) };
                  case 1:
                    return { left: (0, m.ht)(108), top: (0, m.ht)(108) };
                  case 2:
                    return { left: (0, m.ht)(108), top: (0, m.ht)(0) };
                  case 3:
                    return { left: (0, m.ht)(216), top: (0, m.ht)(216) };
                  case 4:
                    return { left: (0, m.ht)(324), top: (0, m.ht)(108) };
                  default:
                    return {};
                }
              },
              c = (0, F.Z)(t);
            (null == c ? void 0 : c.length) < 5;
          )
            c.push(null);
          return (0, A.jsxs)("div", {
            className: U().wrap,
            onClick: o ? (void 0 === i ? function () {} : i) : null,
            children: [
              (0, A.jsx)("div", {
                className: U().left,
                children:
                  null == c
                    ? void 0
                    : null === (n = c.slice(0, 5)) || void 0 === n
                      ? void 0
                      : n.map(function (e, n) {
                          var t;
                          return (0, A.jsx)(
                            "div",
                            {
                              className: U().cover,
                              style: s(n),
                              children:
                                e &&
                                (0, A.jsx)("img", {
                                  alt: "",
                                  src: (0, p.replaceHttpsImg)(
                                    (0, m.Gn)(
                                      null == e
                                        ? void 0
                                        : null === (t = e.song_info) ||
                                            void 0 === t
                                          ? void 0
                                          : t.cover,
                                    ) || h.Z.src,
                                  ),
                                }),
                            },
                            n,
                          );
                        }),
              }),
              (0, A.jsxs)("div", {
                className: U().right,
                children: [
                  (0, A.jsxs)("p", {
                    className: x()(U().title, "impact_cn"),
                    children: [
                      "#累计听歌数",
                      o &&
                        (0, A.jsx)("img", {
                          alt: "",
                          src: H.Z.src,
                          className: U().jump,
                        }),
                    ],
                  }),
                  (0, A.jsxs)("div", {
                    className: U().count,
                    children: [
                      (0, A.jsx)("span", {
                        className: "impact_cn",
                        children: null == l ? void 0 : l.listen_total,
                      }),
                      "首",
                    ],
                  }),
                  (0, A.jsx)("div", {
                    className: U().tips,
                    children: (0, Y.B)(
                      null == l ? void 0 : l.listen_total,
                      null == l ? void 0 : l.last_listen_total,
                      r,
                    ),
                  }),
                ],
              }),
              (0, A.jsx)("img", {
                alt: "",
                className: U().bgText,
                src: d.Ck.bg_quantity,
              }),
            ],
          });
        }),
        G = t(58645),
        Q = t.n(G);
      function K(e) {
        var n = e.total,
          t = e.tips,
          i = e.coverArr,
          o = void 0 === i ? [] : i,
          a = e.onClick,
          l = e.needJumpIcon,
          r = function (e) {
            switch (e) {
              case 0:
                return { left: (0, m.ht)(0), top: (0, m.ht)(15), zIndex: 3 };
              case 1:
                return { right: (0, m.ht)(0), top: (0, m.ht)(138), zIndex: 1 };
              default:
                return {};
            }
          };
        return (0, A.jsxs)("div", {
          className: Q().wrap,
          onClick: l ? (void 0 === a ? function () {} : a) : null,
          id: "new_like",
          children: [
            (0, A.jsxs)("div", {
              className: Q().left,
              children: [
                (0, A.jsxs)("p", {
                  className: x()(Q().title, "impact_cn"),
                  children: [
                    "#新喜欢歌曲",
                    l &&
                      (0, A.jsx)("img", {
                        alt: "",
                        src: H.Z.src,
                        className: Q().jump,
                      }),
                  ],
                }),
                (0, A.jsxs)("div", {
                  className: Q().count,
                  children: [
                    (0, A.jsx)("span", { className: "impact_cn", children: n }),
                    "首",
                  ],
                }),
                (0, A.jsx)("div", { className: Q().tips, children: t }),
              ],
            }),
            (0, A.jsxs)("div", {
              className: Q().right,
              style: {
                height:
                  (null == o ? void 0 : o.length) > 1
                    ? (0, m.ht)(384)
                    : (0, m.ht)(246),
              },
              children: [
                (0, A.jsx)("img", {
                  alt: "",
                  src: "https://webvoobssdl.kugou.com/01862ea80733923a31d02a1400e8b42d.png",
                  className: Q().disc,
                }),
                o.slice(0, 2).map(function (e, n) {
                  return (0, A.jsx)(
                    "img",
                    {
                      alt: "",
                      src: (0, p.replaceHttpsImg)(
                        (0, m.Gn)(null == e ? void 0 : e.cover, 240) || h.Z.src,
                      ),
                      className: Q().cover,
                      style: r(n),
                    },
                    n,
                  );
                }),
              ],
            }),
            (0, A.jsx)("img", {
              alt: "",
              className: Q().bgText,
              src: d.Ck.bg_new_like,
            }),
          ],
        });
      }
      var J = t(81208),
        q = t(54915),
        X = t.n(q),
        $ = t(16165),
        ee = t(45225),
        en = t(42240),
        et = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/collect.e8aaa504.png",
          height: 38,
          width: 38,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAX0lEQVR42iXHwQoBYRhG4fefuAVlx13I0oyFjWJBskCsTO5/9+Sr6XROnWgGN0uLai/x0lsZ/aztPeItoisiPvEVMzF1jJNBzNU6OEY87UStu0Th6uxSRqIVsbURnfYH5OJJNh31Y9YAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        ei = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/collected.39fcdf9b.png",
          height: 40,
          width: 40,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEX+U2v+Umz+Umv+Umz+U2z+Umv+U2v+U2z+Umz+Umz+U2z+Umv+U2v+Umv+U2v+U2v+U2z+U2v+U2z+Umv+U2z+U2v+Umz+UmvY9eSqAAAAFHRSTlMAAAADCQlTYnqDp6uzy/b5+vv8/iP43BAAAABASURBVHjaDcKHEcAgDANAEXonYJn9N03+Hog1hBqBLEqqZAx99T+wj5ByNgrnvZMFruta2h2Mb2TzBvYxKZnHfoLIA1WG2npfAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        eo = (0, $.i)(),
        ea = (0, C.Z)(function (e) {
          var n,
            t = e.songName,
            o = e.count,
            r = e.needCollect,
            s = e.collectCover,
            c = e.mixsongid,
            u = e.hash,
            v = e.stores,
            _ = e.onClick,
            g = void 0 === _ ? function () {} : _,
            f = v.dataStore,
            b = (0, m.m2)(!1),
            j = (0, J.Z)(b, 3),
            y = (j[0], j[1]),
            w = j[2],
            k = (0, m.m2)(null),
            N = (0, J.Z)(k, 3),
            C = N[0],
            L = N[1],
            M = N[2],
            I = (0, ee.Z)({ dataStore: f }).mobileLog;
          (0, l.useEffect)(function () {
            r &&
              (E(),
              eo.on("KgWebMobileCall.songCollectStatusChange", E),
              p.LightMobileCall.mobileCall(d.x8.listenLikeState),
              p.LightMobileCall.KgWebMobileCall(
                "KgWebMobileCall.songCollectStatusChange",
                function (e) {
                  eo.emit("KgWebMobileCall.songCollectStatusChange");
                },
              ));
          }, []);
          var E = function () {
              return new Promise(function (e) {
                var n, t;
                p.LightMobileCall.mobileCall(
                  d.x8.getCollect,
                  {
                    hash:
                      (null == M
                        ? void 0
                        : null === (n = M.current) || void 0 === n
                          ? void 0
                          : n.hash) || u,
                    album_audio_id:
                      (null == M
                        ? void 0
                        : null === (t = M.current) || void 0 === t
                          ? void 0
                          : t.album_audio_id) || c,
                  },
                  function (n) {
                    (e(!!+n), y(!!+n));
                  },
                );
              });
            },
            D =
              ((n = (0, i.Z)(
                a().mark(function e(n) {
                  var t, o, l, r;
                  return a().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (C) {
                            e.next = 5;
                            break;
                          }
                          return (
                            (e.next = 3),
                            (0, en.Sy)({
                              hash: "",
                              album_id: "",
                              album_audio_id: n,
                            })
                          );
                        case 3:
                          (null == (r = e.sent)
                            ? void 0
                            : null === (t = r.data) || void 0 === t
                              ? void 0
                              : t.status) === 1 &&
                            null != r &&
                            null !== (o = r.data) &&
                            void 0 !== o &&
                            null !== (l = o.data) &&
                            void 0 !== l &&
                            l.album_audio_id &&
                            L(r.data.data || {});
                        case 5:
                          (w.current
                            ? I({
                                a: 1132532,
                                b: "点击",
                                ft: "收藏按钮点击",
                                svar1: "常听未收藏",
                                svar2: n,
                                svar3: "取消收藏",
                              })
                            : I({
                                a: 1132532,
                                b: "点击",
                                ft: "收藏按钮点击",
                                svar1: "常听未收藏",
                                svar2: n,
                                svar3: "收藏",
                              }),
                            p.LightMobileCall.mobileCall(
                              d.x8.collect,
                              (0, m.Fl)(M.current),
                              (0, i.Z)(
                                a().mark(function e() {
                                  var n, t;
                                  return a().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return ((e.next = 2), E());
                                        case 2:
                                          return (
                                            (n = e.sent),
                                            (e.next = 5),
                                            (0, S.pc)([
                                              {
                                                platform: "android",
                                                version: 12289,
                                              },
                                              {
                                                platform: "ios",
                                                version: 12289,
                                              },
                                              {
                                                platform: "harmony",
                                                version: 20141,
                                              },
                                            ])
                                          );
                                        case 5:
                                          if (
                                            ((t = e.sent), !(n && w.current))
                                          ) {
                                            e.next = 10;
                                            break;
                                          }
                                          return e.abrupt(
                                            "return",
                                            t
                                              ? null
                                              : p.KgToast.success(
                                                  "已添加到我喜欢",
                                                ),
                                          );
                                        case 10:
                                          if (!(!n && !w.current)) {
                                            e.next = 14;
                                            break;
                                          }
                                          return e.abrupt(
                                            "return",
                                            t
                                              ? null
                                              : p.KgToast.success("已取消喜欢"),
                                          );
                                        case 14:
                                          return e.abrupt(
                                            "return",
                                            t
                                              ? null
                                              : p.KgToast.warn("收藏失败"),
                                          );
                                        case 15:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                }),
                              ),
                            ));
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function (e) {
                return n.apply(this, arguments);
              }),
            R = function () {
              (arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                I({
                  a: 1131811,
                  b: "点击",
                  svar1: "收听歌曲",
                  svar2: "常听未收藏",
                  svar3: "点击内容",
                }),
                I({
                  a: 1132533,
                  b: "点击",
                  ft: "播放按钮点击",
                  svar1: "常听未收藏",
                  svar2: c,
                }));
            },
            T = w.current ? ei.src : et.src;
          return (0, A.jsxs)("div", {
            className: X().wrap,
            children: [
              (0, A.jsx)("div", {
                className: X().left,
                onClick: function () {
                  (R({ mixsongid: c }), g && g({ id: c }));
                },
                children: (0, A.jsx)("img", {
                  alt: "",
                  className: X().cover,
                  src: (0, p.replaceHttpsImg)((0, m.Gn)(s, 240) || h.Z.src),
                }),
              }),
              (0, A.jsxs)("div", {
                className: X().right,
                children: [
                  (0, A.jsx)("p", {
                    className: x()(X().title, "impact_cn"),
                    children: "#常听未收藏",
                  }),
                  (0, A.jsx)("div", { className: X().songName, children: t }),
                  (0, A.jsxs)("div", {
                    className: X().count,
                    children: ["共播放", o, "次"],
                  }),
                  r &&
                    (0, A.jsxs)("div", {
                      className: x()(X().collectBtn, "impact_cn"),
                      onClick: function () {
                        return D(c);
                      },
                      children: [
                        (0, A.jsx)("img", {
                          alt: "",
                          src: T,
                          className: X().collect,
                        }),
                        (0, A.jsx)("span", {
                          children: w.current ? "取消收藏" : "收藏",
                        }),
                      ],
                    }),
                ],
              }),
              (0, A.jsx)("img", {
                alt: "",
                className: X().bgText,
                src: d.Ck.bg_not_collect,
              }),
            ],
          });
        }),
        el = t(80731),
        er = t.n(el),
        es = (0, C.Z)(function (e) {
          var n = e.tips,
            t = e.onClick,
            i = void 0 === t ? function () {} : t,
            o = e.singerName,
            a = e.songName,
            l = e.mixsongid,
            r = e.collectCover,
            s = e.stores.dataStore,
            c = (0, ee.Z)({ dataStore: s }).mobileLog,
            u = function () {
              (arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                c({
                  a: 1131811,
                  b: "点击",
                  svar1: "收听歌曲",
                  svar2: "热歌收藏",
                  svar3: "点击内容",
                }),
                c({
                  a: 1132533,
                  b: "点击",
                  ft: "播放按钮点击",
                  svar1: "热歌收藏",
                  svar2: l,
                }));
            };
          return (0, A.jsxs)("div", {
            className: er().wrap,
            id: "hot_collect",
            children: [
              (0, A.jsxs)("div", {
                className: er().left,
                children: [
                  (0, A.jsx)("p", {
                    className: x()(er().title, "impact_cn"),
                    children: "#热歌收藏",
                  }),
                  (0, A.jsx)("div", { className: er().songName, children: a }),
                  (0, A.jsx)("div", {
                    className: er().singerName,
                    children: o,
                  }),
                  (0, A.jsx)("div", { className: er().tips, children: n }),
                ],
              }),
              (0, A.jsx)("div", {
                className: er().right,
                onClick: function () {
                  (u({ mixsongid: l }), i && i({ id: l }));
                },
                children: (0, A.jsx)("img", {
                  alt: "",
                  src: (0, p.replaceHttpsImg)((0, m.Gn)(r, 240) || h.Z.src),
                  className: er().cover,
                }),
              }),
              (0, A.jsx)("img", {
                alt: "",
                className: er().bgText,
                src: d.Ck.bg_hot_collect,
              }),
            ],
          });
        }),
        ec = t(67364),
        ed = t.n(ec),
        eu = (0, C.Z)(function (e) {
          var n,
            t,
            i,
            o,
            a,
            l,
            r = e.title,
            s = e.data,
            c = e.onClick,
            u = void 0 === c ? function () {} : c,
            v = e.stores.dataStore,
            _ = (0, ee.Z)({ dataStore: v }).mobileLog,
            g = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              (_({
                a: 1131811,
                b: "点击",
                svar1: "收听歌曲",
                svar2: "#".concat(r, "榜 Top1"),
                svar3: "点击内容",
              }),
                _({
                  a: 1132533,
                  b: "点击",
                  ft: "播放按钮点击",
                  svar1: "#".concat(r, "榜 Top1"),
                  svar2: e.mixsongid,
                }));
            },
            f = function (e) {
              (g({ mixsongid: e }), u && u({ id: e }));
            };
          return (0, A.jsxs)("div", {
            className: ed().wrap,
            id: "rank_loop",
            children: [
              (0, A.jsxs)("div", {
                children: [
                  (0, A.jsx)("img", {
                    alt: "",
                    src: "https://webvoobssdl.kugou.com/4b9696fbbaa0c36fd13c5468c3189e85.png",
                    className: ed().disc,
                  }),
                  (0, A.jsx)("div", {
                    onClick: function () {
                      var e, n;
                      return f(
                        null == s
                          ? void 0
                          : null === (e = s[0]) || void 0 === e
                            ? void 0
                            : null === (n = e.song_info) || void 0 === n
                              ? void 0
                              : n.mixsongid,
                      );
                    },
                    className: ed().cover,
                    children: (0, A.jsx)("img", {
                      alt: "",
                      src: (0, p.replaceHttpsImg)(
                        (0, m.Gn)(
                          null == s
                            ? void 0
                            : null === (n = s[0]) || void 0 === n
                              ? void 0
                              : null === (t = n.song_info) || void 0 === t
                                ? void 0
                                : t.cover,
                          240,
                        ) || h.Z.src,
                      ),
                    }),
                  }),
                ],
              }),
              (0, A.jsxs)("div", {
                className: ed().songInfo,
                children: [
                  (0, A.jsxs)("p", {
                    className: x()(ed().title, "impact_cn"),
                    children: ["#", r, "榜 Top1"],
                  }),
                  (0, A.jsx)("div", {
                    className: ed().songName,
                    children: (0, A.jsx)(N.Z, {
                      width: 680,
                      targetText:
                        null == s
                          ? void 0
                          : null === (i = s[0]) || void 0 === i
                            ? void 0
                            : null === (o = i.song_info) || void 0 === o
                              ? void 0
                              : o.name,
                      style: { fontSize: 40 },
                      keepText: ["《", "》"],
                    }),
                  }),
                  (0, A.jsx)("div", {
                    className: ed().tips,
                    children:
                      "单曲循环" === r
                        ? "循环了".concat(
                            null == s
                              ? void 0
                              : null === (a = s[0]) || void 0 === a
                                ? void 0
                                : a.count,
                            "次",
                          )
                        : "播放了".concat(
                            null == s
                              ? void 0
                              : null === (l = s[0]) || void 0 === l
                                ? void 0
                                : l.count,
                            "次",
                          ),
                  }),
                ],
              }),
              (0, A.jsx)("img", {
                alt: "",
                className: ed().bgText,
                src: d.Ck.bg_disc,
              }),
            ],
          });
        }),
        ev = t(75037),
        e_ = t(28618);
      t(60930);
      var eg = t(50794),
        em = t.n(eg),
        ep = t(68652),
        eh = t(48320),
        ef = t(81604),
        ex = t(69047),
        eA = t(77449),
        eb = t(30315),
        ej = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/cover_mask.9cf6dd0c.png",
          height: 51,
          width: 140,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAF0lEQVR42mNgYEODDHJokMGJwQUJOgEAMGMDPSUmyjQAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        },
        ey = t(96360),
        ew = function (e) {
          var n = e.data,
            t = e.skin;
          (e.nextCover, e.nextCover2);
          var i = (0, ey.d)({ data: n }),
            o = i.song_info,
            a = i.first_listen,
            l = i.accumulate_play,
            r = i.cover;
          return (0, A.jsxs)("div", {
            className: "".concat(em().item, " ").concat(em()[t]),
            style: {
              backgroundColor:
                t === d.lu.MAGAZINE ? "rgba(255, 255, 255, 0.1)" : n.bgColor,
            },
            children: [
              (0, A.jsxs)("div", {
                className: em().info,
                children: [
                  (0, A.jsxs)("p", {
                    className: em().top,
                    children: [
                      null == o ? void 0 : o.name,
                      (0, A.jsxs)("span", {
                        children: [
                          "\xa0-\xa0",
                          null == o ? void 0 : o.singer_name,
                        ],
                      }),
                    ],
                  }),
                  (0, A.jsxs)("p", {
                    className: em().middle,
                    children: [
                      (0, A.jsx)("img", {
                        src: [d.lu.BLACK, d.lu.MAGAZINE].includes(t)
                          ? eh.Z.src
                          : eA.Z.src,
                        alt: "",
                      }),
                      (0, A.jsxs)("span", {
                        className: em().text,
                        children: ["首次收听-", null == a ? void 0 : a.text],
                      }),
                    ],
                  }),
                  (0, A.jsxs)("p", {
                    className: em().bottom,
                    children: [
                      (0, A.jsx)("img", {
                        src: [d.lu.BLACK, d.lu.MAGAZINE].includes(t)
                          ? ef.Z.src
                          : eb.Z.src,
                        alt: "",
                      }),
                      (0, A.jsxs)("span", {
                        className: em().text,
                        children: [
                          "累计播放-",
                          (0, m.w_)(null == l ? void 0 : l.total),
                          (0, A.jsx)("span", {
                            className: em().small,
                            children: "\xa0次\xa0\xa0",
                          }),
                          (0, m.w_)(null == l ? void 0 : l.duration),
                          (0, A.jsx)("span", {
                            className: em().small,
                            children: "\xa0分钟",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, A.jsxs)("div", {
                className: em().cover,
                onClick: function (e) {
                  (e && e.stopPropagation(),
                    (0, m._n)(null == o ? void 0 : o.mixsongid));
                },
                children: [
                  (0, A.jsx)("div", {
                    className: em().next_cover2,
                    children: (0, A.jsx)("img", {
                      src: null == n ? void 0 : n.nextCover,
                      alt: "",
                    }),
                  }),
                  (0, A.jsx)("div", {
                    className: em().next_cover,
                    children: (0, A.jsx)("img", {
                      src: null == n ? void 0 : n.nextCover2,
                      alt: "",
                    }),
                  }),
                  (0, A.jsx)("img", {
                    src: r,
                    alt: "",
                    className: em().icon_cover,
                  }),
                  (0, A.jsx)("img", {
                    src: ej.src,
                    alt: "",
                    className: em().cover_mask,
                  }),
                  (0, A.jsx)("img", {
                    src: ex.Z.src,
                    alt: "",
                    className: em().icon_play_big,
                  }),
                ],
              }),
            ],
          });
        },
        ek = t(99850),
        eN = (0, C.Z)(
          (0, r.Pi)(function (e) {
            var n,
              t,
              o,
              r = e.stores,
              s = e._skin,
              c = r.dataStore,
              u = c.skin,
              v = c.songMemoryData,
              _ = c.dimension,
              g = c.date,
              h = (0, ey.d)().gotoSongMemory,
              f = (0, m.m2)({}),
              x = (0, J.Z)(f, 3),
              b = (x[0], x[1]),
              j = x[2],
              y = (0, l.useRef)(!1),
              w = (0, l.useRef)(null),
              k = (0, l.useState)(0),
              N = k[0],
              C = k[1],
              S = function () {
                var e, n, t;
                h({
                  mixsongid:
                    null == j
                      ? void 0
                      : null === (e = j.current) || void 0 === e
                        ? void 0
                        : null === (n = e[N]) || void 0 === n
                          ? void 0
                          : null === (t = n.song_info) || void 0 === t
                            ? void 0
                            : t.mixsongid,
                  from: "home",
                  dateType: _,
                  date: g.format("YYYYMMDD"),
                });
              },
              L = function () {
                w.current ||
                  (console.log("init swiper"),
                  setTimeout(function () {
                    w.current = new e_.Z(".swiper-container", {
                      autoplay: { delay: 3e3, disableOnInteraction: !1 },
                      loop: !0,
                      observer: !0,
                      observeParents: !0,
                      on: {
                        slideChange: function () {
                          return (0, i.Z)(
                            a().mark(function e() {
                              return a().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      C(w.current.realIndex);
                                    case 1:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          )();
                        },
                      },
                    });
                  }, 0));
              },
              M =
                ((n = (0, i.Z)(
                  a().mark(function e() {
                    var n, t, i, o, l, r, s, c, d, u;
                    return a().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              ((i = (0, ep.Z)(
                                (null == v
                                  ? void 0
                                  : null === (n = v.song_memory_infos) ||
                                      void 0 === n
                                    ? void 0
                                    : null ===
                                          (t = n.filter(function (e) {
                                            var n, t, i;
                                            return (
                                              (null == e
                                                ? void 0
                                                : null ===
                                                      (n = e.first_listen) ||
                                                    void 0 === n
                                                  ? void 0
                                                  : n.text) &&
                                              (null == e
                                                ? void 0
                                                : null ===
                                                      (t = e.accumulate_play) ||
                                                    void 0 === t
                                                  ? void 0
                                                  : t.total) &&
                                              (null == e
                                                ? void 0
                                                : null ===
                                                      (i = e.accumulate_play) ||
                                                    void 0 === i
                                                  ? void 0
                                                  : i.duration)
                                            );
                                          })) || void 0 === t
                                      ? void 0
                                      : t.slice(0, 5)) || [],
                              )),
                                (o = 0));
                            case 2:
                              if (!(o < i.length)) {
                                e.next = 20;
                                break;
                              }
                              if (
                                ((l = i[o]),
                                (e.prev = 4),
                                !(
                                  null != l &&
                                  null !== (r = l.song_info) &&
                                  void 0 !== r &&
                                  r.cover
                                ))
                              ) {
                                e.next = 12;
                                break;
                              }
                              return (
                                (l.song_info.cover = (0, m.Gn)(
                                  (0, p.replaceHttpsImg)(l.song_info.cover),
                                )),
                                (e.next = 9),
                                (0, ek.pe)({
                                  src: l.song_info.cover,
                                  saturation: 1,
                                  lightness: 1,
                                  opacity: 0.1,
                                })
                              );
                            case 9:
                              ((l.bgColor = e.sent),
                                (l.nextCover2 = (0, m.Gn)(
                                  (0, p.replaceHttpsImg)(
                                    null === (s = i[(o + 1) % i.length]) ||
                                      void 0 === s
                                      ? void 0
                                      : null === (c = s.song_info) ||
                                          void 0 === c
                                        ? void 0
                                        : c.cover,
                                  ),
                                )),
                                (l.nextCover = (0, m.Gn)(
                                  (0, p.replaceHttpsImg)(
                                    null === (d = i[(o + 2) % i.length]) ||
                                      void 0 === d
                                      ? void 0
                                      : null === (u = d.song_info) ||
                                          void 0 === u
                                        ? void 0
                                        : u.cover,
                                  ),
                                )));
                            case 12:
                              e.next = 17;
                              break;
                            case 14:
                              ((e.prev = 14),
                                (e.t0 = e.catch(4)),
                                console.error(e.t0));
                            case 17:
                              (o++, (e.next = 2));
                              break;
                            case 20:
                              return (b(i), e.abrupt("return", i));
                            case 22:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[4, 14]],
                    );
                  }),
                )),
                function () {
                  return n.apply(this, arguments);
                });
            if (
              ((0, l.useEffect)(
                function () {
                  !y.current && v && ((y.current = !0), v && M());
                },
                [v],
              ),
              (0, l.useEffect)(function () {
                return function () {
                  w.current && w.current.destroy();
                };
              }, []),
              null != j && null !== (t = j.current) && void 0 !== t && t.length)
            )
              return (0, A.jsxs)("div", {
                className: ""
                  .concat(em().swiper_song_memory, " ")
                  .concat(em()[s || u]),
                onClick: function () {
                  return S();
                },
                children: [
                  (0, A.jsxs)("p", {
                    className: em().title,
                    children: [
                      "歌曲回忆",
                      (0, A.jsx)("img", {
                        alt: "",
                        src: (function (e) {
                          switch (e) {
                            case d.lu.NORMAL:
                              return E.Z.src;
                            case d.lu.BLACK:
                              return D.Z.src;
                            case d.lu.MAGAZINE:
                              return H.Z.src;
                            default:
                              return;
                          }
                        })(s || u),
                      }),
                    ],
                  }),
                  (0, A.jsx)("div", {
                    className: "swiper-container ".concat(
                      em().swiper_container,
                    ),
                    ref: function (e) {
                      e && L();
                    },
                    children: (0, A.jsx)("div", {
                      className: "swiper-wrapper ".concat(em().swiper_wrapper),
                      children:
                        null == j
                          ? void 0
                          : null === (o = j.current) || void 0 === o
                            ? void 0
                            : o.map(function (e, n) {
                                return (0, A.jsx)(
                                  "div",
                                  {
                                    className: "swiper-slide",
                                    children: (0, A.jsx)(ew, {
                                      data: e,
                                      skin: s || u,
                                    }),
                                  },
                                  n,
                                );
                              }),
                    }),
                  }),
                ],
              });
          }),
        ),
        eC = (0, C.Z)(
          (0, r.Pi)(function (e) {
            var n,
              t,
              o,
              l,
              r,
              s,
              u,
              v,
              _,
              g,
              f,
              b,
              j,
              y,
              w,
              k,
              C,
              M,
              I,
              E,
              D,
              R,
              T,
              Z,
              O,
              B,
              F,
              P,
              U,
              Y,
              H,
              G,
              Q,
              J,
              q,
              X,
              $ = e.yearData,
              ee = e.type,
              en = void 0 === ee ? "normal" : ee,
              et = e.stores,
              ei = e.clickMobileLog,
              eo = e.mobileLog,
              el = e.isLatest,
              er = e.vooConfig,
              ec = et.dataStore,
              ed = ec.dimension,
              e_ = ec.statistics,
              eg = ec.skin,
              em = ec.date,
              ep = eg;
            3 === ed && eg === d.lu.MAGAZINE && (ep = "black");
            var eh = [
                {
                  style: {
                    backgroundImage:
                      "linear-gradient(180deg, #F8DFA8 7%, #F1EFDD 87%)",
                  },
                  title: "单曲循环",
                  content: (0, A.jsx)(N.Z, {
                    width: 220,
                    targetText:
                      null == e_
                        ? void 0
                        : null === (n = e_.rank_song_loop) || void 0 === n
                          ? void 0
                          : null === (t = n[0]) || void 0 === t
                            ? void 0
                            : null === (o = t.song_info) || void 0 === o
                              ? void 0
                              : o.name,
                    style: { fontSize: 32 },
                  }),
                  cover:
                    (0, p.replaceHttpsImg)(
                      null == e_
                        ? void 0
                        : null === (l = e_.rank_song_loop) || void 0 === l
                          ? void 0
                          : null === (r = l[0]) || void 0 === r
                            ? void 0
                            : null === (s = r.song_info) || void 0 === s
                              ? void 0
                              : null === (u = s.cover) || void 0 === u
                                ? void 0
                                : u.replace("{size}", 150),
                    ) || h.Z.src,
                  tipWords: ["循环", "次"],
                  value:
                    null == e_
                      ? void 0
                      : null === (v = e_.rank_song_loop) || void 0 === v
                        ? void 0
                        : null === (_ = v[0]) || void 0 === _
                          ? void 0
                          : _.count,
                  type: "songLoop",
                  jumpType: "rank_loop",
                  onClick: function () {
                    var e, n, t;
                    "share" !== en &&
                      (0, m._n)(
                        null == e_
                          ? void 0
                          : null === (e = e_.rank_song_loop) || void 0 === e
                            ? void 0
                            : null === (n = e[0]) || void 0 === n
                              ? void 0
                              : null === (t = n.song_info) || void 0 === t
                                ? void 0
                                : t.mixsongid,
                      );
                  },
                  isShow:
                    3 !== ed &&
                    (null == e_
                      ? void 0
                      : null === (g = e_.rank_song_loop) || void 0 === g
                        ? void 0
                        : null === (f = g[0]) || void 0 === f
                          ? void 0
                          : null === (b = f.song_info) || void 0 === b
                            ? void 0
                            : b.name),
                },
                {
                  style: {
                    backgroundImage:
                      "linear-gradient(180deg, #9FCFE3 0%, rgba(198,225,225,0.41) 72%, #EAF3F4 87%)",
                  },
                  title: "收藏热歌",
                  content: (0, A.jsx)(N.Z, {
                    width: 220,
                    targetText:
                      null == e_
                        ? void 0
                        : null === (j = e_.hot_collect) || void 0 === j
                          ? void 0
                          : null === (y = j.song_info) || void 0 === y
                            ? void 0
                            : y.name,
                    style: { fontSize: 32 },
                  }),
                  cover:
                    (0, p.replaceHttpsImg)(
                      null == e_
                        ? void 0
                        : null === (w = e_.hot_collect) || void 0 === w
                          ? void 0
                          : null === (k = w.song_info) || void 0 === k
                            ? void 0
                            : null === (C = k.cover) || void 0 === C
                              ? void 0
                              : C.replace("{size}", 150),
                    ) || h.Z.src,
                  tipWords: ["领先", "的人"],
                  value: (0, m.rl)(
                    (null == e_
                      ? void 0
                      : null === (M = e_.hot_collect) || void 0 === M
                        ? void 0
                        : M.defeat_percent) / 100,
                  ),
                  type: "hotCollect",
                  jumpType: "hot_collect",
                  onClick: function () {
                    var e, n;
                    "share" !== en &&
                      (0, m._n)(
                        null == e_
                          ? void 0
                          : null === (e = e_.hot_collect) || void 0 === e
                            ? void 0
                            : null === (n = e.song_info) || void 0 === n
                              ? void 0
                              : n.mixsongid,
                      );
                  },
                  isShow:
                    3 !== ed &&
                    (null == e_
                      ? void 0
                      : null === (I = e_.hot_collect) || void 0 === I
                        ? void 0
                        : null === (E = I.song_info) || void 0 === E
                          ? void 0
                          : E.name),
                },
                {
                  style: {
                    backgroundImage:
                      "linear-gradient(180deg, #F8BBA8 7%, #F1E6DD 87%)",
                  },
                  title: "常听未收藏",
                  content: (0, A.jsx)(N.Z, {
                    width: 220,
                    targetText:
                      null == e_
                        ? void 0
                        : null === (D = e_.not_collect) || void 0 === D
                          ? void 0
                          : null === (R = D.song_info) || void 0 === R
                            ? void 0
                            : R.name,
                    style: { fontSize: 32 },
                  }),
                  cover:
                    (0, p.replaceHttpsImg)(
                      null == e_
                        ? void 0
                        : null === (T = e_.not_collect) || void 0 === T
                          ? void 0
                          : null === (Z = T.song_info) || void 0 === Z
                            ? void 0
                            : null === (O = Z.cover) || void 0 === O
                              ? void 0
                              : O.replace("{size}", 150),
                    ) || h.Z.src,
                  tipWords: ["收听", "次"],
                  value:
                    null == e_
                      ? void 0
                      : null === (B = e_.not_collect) || void 0 === B
                        ? void 0
                        : B.count,
                  type: "notCollect",
                  onClick: function () {
                    var e, n;
                    "share" !== en &&
                      (0, m._n)(
                        null == e_
                          ? void 0
                          : null === (e = e_.not_collect) || void 0 === e
                            ? void 0
                            : null === (n = e.song_info) || void 0 === n
                              ? void 0
                              : n.mixsongid,
                      );
                  },
                  isShow:
                    3 !== ed &&
                    (null == e_
                      ? void 0
                      : null === (F = e_.not_collect) || void 0 === F
                        ? void 0
                        : null === (P = F.song_info) || void 0 === P
                          ? void 0
                          : P.name),
                },
                {
                  style: {
                    backgroundImage:
                      "linear-gradient(180deg, #9FE2E3 0%, rgba(198,225,216,0.41) 72%, #EAF4F1 87%)",
                  },
                  title: "新喜欢歌曲",
                  content: "".concat(
                    (null == e_
                      ? void 0
                      : null === (U = e_.new_favorite_song) || void 0 === U
                        ? void 0
                        : U.total) || 0,
                    "首",
                  ),
                  coverArr:
                    null == e_
                      ? void 0
                      : null === (Y = e_.new_favorite_song) || void 0 === Y
                        ? void 0
                        : null === (H = Y.latest_song_infos) || void 0 === H
                          ? void 0
                          : H.map(function (e) {
                              var n;
                              return {
                                cover:
                                  (0, p.replaceHttpsImg)(
                                    null == e
                                      ? void 0
                                      : null === (n = e.cover) || void 0 === n
                                        ? void 0
                                        : n.replace("{size}", 150),
                                  ) || h.Z.src,
                                mixsongid:
                                  (null == e ? void 0 : e.mixsongid) || 0,
                              };
                            }),
                  tip: (0, A.jsx)(N.Z, {
                    width: 220,
                    targetText:
                      null == e_
                        ? void 0
                        : null === (G = e_.new_favorite_song) || void 0 === G
                          ? void 0
                          : null === (Q = G.latest_song_infos) || void 0 === Q
                            ? void 0
                            : null === (J = Q[0]) || void 0 === J
                              ? void 0
                              : J.name,
                    style: { fontSize: 32 },
                    keepText: [
                      "",
                      (null == e_
                        ? void 0
                        : null === (q = e_.new_favorite_song) || void 0 === q
                          ? void 0
                          : q.total) > 1
                        ? "等"
                        : "",
                    ],
                  }),
                  type: "newFavorite",
                  onClick: function (e) {
                    "share" !== en &&
                      (0, m._n)(e, null, "我的tab/听歌统计/新喜欢的歌曲");
                  },
                  isShow:
                    3 !== ed &&
                    (null == e_
                      ? void 0
                      : null === (X = e_.new_favorite_song) || void 0 === X
                        ? void 0
                        : X.total),
                },
              ],
              ef = function (e, n) {
                "normal" === en && (0, m._n)(null == n ? void 0 : n.id);
              };
            return (0, A.jsxs)(
              "div",
              {
                className: x()(c().wrap, [c()[ep || eg]], [c()[en]]),
                id: "song",
                children: [
                  (0, A.jsx)("p", {
                    className: c().title,
                    children:
                      3 === ed
                        ? "年度歌曲"
                        : ""
                            .concat(0 === ed ? "今" : "本")
                            .concat(d.En[ed], "歌曲"),
                  }),
                  eg === d.lu.MAGAZINE &&
                    (0, A.jsx)("div", {
                      className: "divider",
                      style: { marginLeft: (0, m.ht)(30) },
                    }),
                  (function () {
                    var e,
                      n,
                      t,
                      o,
                      l,
                      r,
                      s,
                      u,
                      v,
                      _,
                      g,
                      h,
                      f,
                      x,
                      b,
                      j,
                      y,
                      w,
                      k,
                      C,
                      M,
                      I,
                      E,
                      D,
                      R,
                      T,
                      Z,
                      O,
                      B,
                      F,
                      P,
                      U,
                      Y,
                      H,
                      G,
                      Q,
                      J,
                      q,
                      X,
                      ee,
                      et,
                      ec,
                      eg,
                      ex,
                      eA,
                      eb,
                      ej,
                      ey,
                      ew,
                      ek,
                      eC,
                      eS;
                    switch (ep) {
                      case "normal":
                      case "black":
                        return (0, A.jsxs)("div", {
                          children: [
                            (3 === ed
                              ? (null == $
                                  ? void 0
                                  : null === (e = $.rank_song) || void 0 === e
                                    ? void 0
                                    : null ===
                                          (n = e.filter(function (e) {
                                            return null == e ? void 0 : e.cover;
                                          })) || void 0 === n
                                      ? void 0
                                      : n.length) >= 4
                              : (null == e_
                                  ? void 0
                                  : null === (t = e_.rank_song) || void 0 === t
                                    ? void 0
                                    : null ===
                                          (o = t.filter(function (e) {
                                            var n;
                                            return null == e
                                              ? void 0
                                              : null === (n = e.song_info) ||
                                                  void 0 === n
                                                ? void 0
                                                : n.cover;
                                          })) || void 0 === o
                                      ? void 0
                                      : o.length) >= 4) &&
                              (0, A.jsx)(L, {
                                yearData: $,
                                type: en,
                                clickMobileLog: ei,
                                mobileLog: eo,
                                vooConfig: er,
                              }),
                            (3 === ed
                              ? null == $
                                ? void 0
                                : null === (l = $.rank_song) || void 0 === l
                                  ? void 0
                                  : l.length
                              : !!(
                                  null != e_ &&
                                  null !== (r = e_.rank_song) &&
                                  void 0 !== r &&
                                  r.length
                                ) &&
                                !!(
                                  null != e_ &&
                                  null !== (s = e_.rank_song) &&
                                  void 0 !== s &&
                                  s[0]
                                )) &&
                              (0, A.jsx)(W, {
                                yearData: $,
                                type: en,
                                clickMobileLog: ei,
                                _skin: ep,
                              }),
                            el &&
                              (0, A.jsx)(eN, {}, "".concat(ed, "-").concat(em)),
                            (0, A.jsx)("div", {
                              className: c().modules,
                              children: eh.map(function (e) {
                                if (e.isShow)
                                  return (0, A.jsx)(
                                    "div",
                                    {
                                      className: c().bg,
                                      children: (0, A.jsx)(V, { data: e }),
                                    },
                                    e.type,
                                  );
                              }),
                            }),
                          ],
                        });
                      case "magazine":
                        return (0, A.jsxs)(A.Fragment, {
                          children: [
                            (0, A.jsxs)("div", {
                              children: [
                                !!(null != e_ && e_.listen_total) &&
                                  (0, A.jsx)(z, {
                                    coverArr: e_.rank_song,
                                    onClick: (0, i.Z)(
                                      a().mark(function e() {
                                        var n, t;
                                        return a().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (n = ""
                                                    .concat(
                                                      window.location.origin,
                                                    )
                                                    .concat(
                                                      window.location.pathname.replace(
                                                        "home",
                                                        "rank",
                                                      ),
                                                      "?ssr_header_param=",
                                                    )
                                                    .concat(
                                                      d.Dc,
                                                      "&ssr_url_param=",
                                                    )
                                                    .concat(
                                                      d.By,
                                                      "&isHideTitleBar=1&dimension=",
                                                    )
                                                    .concat(ed, "&isLatest=")
                                                    .concat(el, "&date=")
                                                    .concat(
                                                      null == em
                                                        ? void 0
                                                        : em.format("YYYYMMDD"),
                                                      "&rankType=",
                                                    )
                                                    .concat(d.Jd.SONG)),
                                                  (e.next = 3),
                                                  (0, m.hj)()
                                                );
                                              case 3:
                                                ((t = e.sent),
                                                  p.LightMobileCall.mobileCall(
                                                    d.x8.openURL,
                                                    {
                                                      isFullScreen: 1,
                                                      url: n,
                                                      hasBar: t ? 1 : 0,
                                                    },
                                                  ));
                                              case 5:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      }),
                                    ),
                                    needJumpIcon: "normal" === en && el,
                                  }),
                                !!(
                                  null != e_ &&
                                  null !== (u = e_.new_favorite_song) &&
                                  void 0 !== u &&
                                  u.total
                                ) &&
                                  !!(
                                    null != e_ &&
                                    null !== (v = e_.new_favorite_song) &&
                                    void 0 !== v &&
                                    null !== (_ = v.latest_song_infos) &&
                                    void 0 !== _ &&
                                    _.length
                                  ) &&
                                  (0, A.jsx)(K, {
                                    total:
                                      null == e_
                                        ? void 0
                                        : null === (g = e_.new_favorite_song) ||
                                            void 0 === g
                                          ? void 0
                                          : g.total,
                                    tips: (0, A.jsx)(N.Z, {
                                      width: 300,
                                      targetText:
                                        null == e_
                                          ? void 0
                                          : null ===
                                                (h = e_.new_favorite_song) ||
                                              void 0 === h
                                            ? void 0
                                            : null ===
                                                  (f = h.latest_song_infos) ||
                                                void 0 === f
                                              ? void 0
                                              : null === (x = f[0]) ||
                                                  void 0 === x
                                                ? void 0
                                                : x.name,
                                      style: { fontSize: 32 },
                                      keepText: [
                                        "《",
                                        (null == e_
                                          ? void 0
                                          : null ===
                                                (b = e_.new_favorite_song) ||
                                              void 0 === b
                                            ? void 0
                                            : b.total) > 1
                                          ? "》等"
                                          : "》",
                                      ],
                                    }),
                                    coverArr:
                                      null == e_
                                        ? void 0
                                        : null === (j = e_.new_favorite_song) ||
                                            void 0 === j
                                          ? void 0
                                          : j.latest_song_infos,
                                    onClick: function () {
                                      (0, S.S6)({
                                        cmd: d.x8.openTab,
                                        json: { tab: 74 },
                                      });
                                    },
                                    needJumpIcon: "normal" === en && el,
                                  }),
                                !!(
                                  null != e_ &&
                                  null !== (y = e_.not_collect) &&
                                  void 0 !== y &&
                                  y.count
                                ) &&
                                  !!(
                                    null != e_ &&
                                    null !== (w = e_.not_collect) &&
                                    void 0 !== w &&
                                    w.song_info
                                  ) &&
                                  (0, A.jsx)(ea, {
                                    songName: (0, A.jsx)(N.Z, {
                                      width: 380,
                                      targetText:
                                        null == e_
                                          ? void 0
                                          : null === (k = e_.not_collect) ||
                                              void 0 === k
                                            ? void 0
                                            : null === (C = k.song_info) ||
                                                void 0 === C
                                              ? void 0
                                              : C.name,
                                      keepText: ["《", "》"],
                                      style: { fontSize: 40 },
                                    }),
                                    count:
                                      null == e_
                                        ? void 0
                                        : null === (M = e_.not_collect) ||
                                            void 0 === M
                                          ? void 0
                                          : M.count,
                                    needCollect: "normal" === en,
                                    collectCover:
                                      null == e_
                                        ? void 0
                                        : null === (I = e_.not_collect) ||
                                            void 0 === I
                                          ? void 0
                                          : null === (E = I.song_info) ||
                                              void 0 === E
                                            ? void 0
                                            : E.cover,
                                    mixsongid:
                                      null == e_
                                        ? void 0
                                        : null === (D = e_.not_collect) ||
                                            void 0 === D
                                          ? void 0
                                          : null === (R = D.song_info) ||
                                              void 0 === R
                                            ? void 0
                                            : R.mixsongid,
                                    hash:
                                      null == e_
                                        ? void 0
                                        : null === (T = e_.not_collect) ||
                                            void 0 === T
                                          ? void 0
                                          : null === (Z = T.song_info) ||
                                              void 0 === Z
                                            ? void 0
                                            : Z.hash,
                                    onClick: ef.bind(null, "not_collect"),
                                  }),
                                !!(
                                  null != e_ &&
                                  null !== (O = e_.hot_collect) &&
                                  void 0 !== O &&
                                  O.defeat_percent
                                ) &&
                                  !!(
                                    null != e_ &&
                                    null !== (B = e_.hot_collect) &&
                                    void 0 !== B &&
                                    B.song_info
                                  ) &&
                                  (0, A.jsx)(es, {
                                    songName: (0, A.jsx)(N.Z, {
                                      width: 400,
                                      targetText:
                                        null == e_
                                          ? void 0
                                          : null === (F = e_.hot_collect) ||
                                              void 0 === F
                                            ? void 0
                                            : null === (P = F.song_info) ||
                                                void 0 === P
                                              ? void 0
                                              : P.name,
                                      keepText: ["《", "》"],
                                      style: { fontSize: 40 },
                                    }),
                                    singerName: (0, A.jsx)(N.Z, {
                                      width: 400,
                                      targetText:
                                        null == e_
                                          ? void 0
                                          : null === (U = e_.hot_collect) ||
                                              void 0 === U
                                            ? void 0
                                            : null === (Y = U.song_info) ||
                                                void 0 === Y
                                              ? void 0
                                              : Y.singer_name,
                                      style: { fontSize: 30 },
                                    }),
                                    tips: "领先".concat(
                                      (0, m.rl)(
                                        (null == e_
                                          ? void 0
                                          : null === (H = e_.hot_collect) ||
                                              void 0 === H
                                            ? void 0
                                            : H.defeat_percent) / 100,
                                      ),
                                      "的人收藏",
                                    ),
                                    collectCover:
                                      null == e_
                                        ? void 0
                                        : null === (G = e_.hot_collect) ||
                                            void 0 === G
                                          ? void 0
                                          : null === (Q = G.song_info) ||
                                              void 0 === Q
                                            ? void 0
                                            : Q.cover,
                                    mixsongid:
                                      null == e_
                                        ? void 0
                                        : null === (J = e_.hot_collect) ||
                                            void 0 === J
                                          ? void 0
                                          : null === (q = J.song_info) ||
                                              void 0 === q
                                            ? void 0
                                            : q.mixsongid,
                                    onClick: ef.bind(null, "hot_collect"),
                                  }),
                                ((!!(
                                  null != e_ &&
                                  null !== (X = e_.rank_song) &&
                                  void 0 !== X &&
                                  X.length
                                ) &&
                                  !!(
                                    null != e_ &&
                                    null !== (ee = e_.rank_song) &&
                                    void 0 !== ee &&
                                    ee[0]
                                  )) ||
                                  (!!(
                                    null != e_ &&
                                    null !== (et = e_.rank_song_loop) &&
                                    void 0 !== et &&
                                    et.length
                                  ) &&
                                    !!(
                                      null != e_ &&
                                      null !== (ec = e_.rank_song_loop[0]) &&
                                      void 0 !== ec &&
                                      ec.song_info
                                    ))) &&
                                  (0, A.jsx)(eu, {
                                    data:
                                      (null == e_
                                        ? void 0
                                        : null === (eg = e_.rank_song_loop) ||
                                            void 0 === eg
                                          ? void 0
                                          : eg.length) > 0
                                        ? null == e_
                                          ? void 0
                                          : e_.rank_song_loop
                                        : null == e_
                                          ? void 0
                                          : e_.rank_song,
                                    title:
                                      (null == e_
                                        ? void 0
                                        : null === (ex = e_.rank_song_loop) ||
                                            void 0 === ex
                                          ? void 0
                                          : ex.length) > 0
                                        ? "单曲循环"
                                        : "歌曲收听",
                                    onClick: ef.bind(null, "disc"),
                                  }),
                              ],
                            }),
                            ((!!(
                              null != e_ &&
                              null !== (eA = e_.rank_song) &&
                              void 0 !== eA &&
                              eA.length
                            ) &&
                              !!(
                                null != e_ &&
                                null !== (eb = e_.rank_song) &&
                                void 0 !== eb &&
                                eb[0]
                              )) ||
                              (!!(
                                null != e_ &&
                                null !== (ej = e_.rank_song_loop) &&
                                void 0 !== ej &&
                                ej.length
                              ) &&
                                (null == e_
                                  ? void 0
                                  : null === (ey = e_.rank_song_loop[0]) ||
                                      void 0 === ey
                                    ? void 0
                                    : ey.song_info))) &&
                              (0, A.jsxs)("div", {
                                className: c().bottom,
                                children: [
                                  !!(
                                    null != e_ &&
                                    null !== (ew = e_.rank_song) &&
                                    void 0 !== ew &&
                                    ew.length
                                  ) &&
                                    !!(
                                      null != e_ &&
                                      null !== (ek = e_.rank_song) &&
                                      void 0 !== ek &&
                                      ek[0]
                                    ) &&
                                    (0, A.jsxs)("div", {
                                      className: c().cardBody,
                                      style: { marginBottom: (0, m.ht)(30) },
                                      children: [
                                        (0, A.jsx)("img", {
                                          alt: "",
                                          className: c().bgText,
                                          src: d.Ck.bg_rank_song,
                                        }),
                                        (0, A.jsx)(ev.Z, {
                                          title: "歌曲收听榜",
                                          rankType: d.Jd.SONG,
                                          arr:
                                            null == e_ ? void 0 : e_.rank_song,
                                          type: "squre",
                                          dataType: "song",
                                          onItemClick: ef.bind(null, d.Jd.SONG),
                                          needIcon: "normal" === en,
                                          id: "rank_song",
                                        }),
                                      ],
                                    }),
                                  !!(
                                    null != e_ &&
                                    null !== (eC = e_.rank_song_loop) &&
                                    void 0 !== eC &&
                                    eC.length
                                  ) &&
                                    (null == e_
                                      ? void 0
                                      : null === (eS = e_.rank_song_loop[0]) ||
                                          void 0 === eS
                                        ? void 0
                                        : eS.song_info) &&
                                    (0, A.jsxs)("div", {
                                      className: c().cardBody,
                                      style: { marginBottom: (0, m.ht)(30) },
                                      children: [
                                        (0, A.jsx)("img", {
                                          alt: "",
                                          className: c().bgText,
                                          src: d.Ck.bg_rank_song_loop,
                                        }),
                                        (0, A.jsx)(ev.Z, {
                                          title: "单曲循环榜",
                                          rankType: d.Jd.SONG_LOOP,
                                          arr:
                                            null == e_
                                              ? void 0
                                              : e_.rank_song_loop,
                                          type: "squre",
                                          dataType: "song",
                                          onItemClick: ef.bind(
                                            null,
                                            d.Jd.SONG_LOOP,
                                          ),
                                          needIcon: "normal" === en,
                                        }),
                                      ],
                                    }),
                                  el &&
                                    (0, A.jsx)(
                                      eN,
                                      {},
                                      "".concat(ed, "-").concat(em),
                                    ),
                                ],
                              }),
                          ],
                        });
                      default:
                        return (0, A.jsx)(A.Fragment, {});
                    }
                  })(),
                ],
              },
              "Song",
            );
          }),
        );
    },
    78813: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return $;
        },
      });
      var i = t(37667),
        o = t(33562),
        a = t(85419),
        l = t.n(a),
        r = t(22239),
        s = t(11284),
        c = t(98875),
        d = t(76792),
        u = t(49089),
        v = t.n(u),
        _ = t(93967),
        g = t.n(_),
        m = t(88374),
        p = t(25965),
        h = (0, o.Pi)(function (e) {
          var n = e.data,
            t = e.pageType,
            o = n.title,
            a = n.style,
            l = n.content,
            r = n.subContent,
            s = void 0 === r ? "" : r,
            c = n.tip,
            u = n.areaColor,
            _ = void 0 === u ? "" : u,
            h = n.lineColor,
            f = void 0 === h ? "" : h,
            x = n.type,
            A = void 0 === x ? "" : x,
            b = n.count,
            j = n.chartData,
            y = void 0 === j ? [] : j,
            w = n.indicator,
            k = void 0 === w ? [] : w,
            N = n.coverArr,
            C = void 0 === N ? [] : N,
            S = n.onClick,
            L = void 0 === S ? function () {} : S,
            M = n.duration,
            I = n.listenTotal,
            E = n.jumpType,
            D = (0, i.useRef)(null);
          for (
            (0, i.useEffect)(
              function () {
                if ("rankStyle" === A || "rankLanguage" === A) {
                  for (; (null == y ? void 0 : y.length) < 5;) y.push(0);
                  for (; (null == k ? void 0 : k.length) < 5;) {
                    var e;
                    k.push({
                      name: "",
                      max:
                        null == k
                          ? void 0
                          : null === (e = k[0]) || void 0 === e
                            ? void 0
                            : e.max,
                    });
                  }
                  var n = m.S1(D.current, { renderer: "canvas" });
                  return (
                    n.setOption({
                      tooltip: { show: !1 },
                      animation: "share" !== t,
                      radar: {
                        radius: "60%",
                        splitNumber: 3,
                        name: {
                          textStyle: {
                            color: "rgba(0, 0, 0, 0.3)",
                            borderRadius: 3,
                            fontSize: 10,
                            padding: [-12, -12],
                          },
                        },
                        splitArea: { show: !0, areaStyle: { color: [] } },
                        splitLine: { borderColor: "#c0c0c0", borderWidth: 0.7 },
                        axisLine: {
                          lineStyle: { color: "#c0c0c0", width: 0.1 },
                        },
                        indicator: k,
                      },
                      series: [
                        {
                          name: "",
                          type: "radar",
                          symbol: "none",
                          lineStyle: { color: f, width: 1 },
                          areaStyle: { color: _ },
                          data: [{ value: y, name: "数据" }],
                        },
                      ],
                    }),
                    function () {
                      n && n.dispose();
                    }
                  );
                }
              },
              [y, k],
            );
            (null == C ? void 0 : C.length) < 3;
          )
            C.push(null);
          return (0, p.jsxs)("div", {
            style: void 0 === a ? "" : a,
            className: g()(v().wrap, [v()[A]]),
            id: void 0 === E ? "" : E,
            children: [
              (0, p.jsx)("div", {
                className: v().title,
                children: void 0 === o ? "" : o,
              }),
              (0, p.jsxs)("div", {
                className: v().content,
                children: [
                  void 0 === l ? "" : l,
                  s &&
                    (0, p.jsx)("span", {
                      className: v().subContent,
                      children: s,
                    }),
                ],
              }),
              "vip" === A &&
                (0, p.jsxs)("div", {
                  className: v().vip,
                  children: [
                    (0, p.jsx)("span", { children: I }),
                    "首",
                    (0, p.jsx)("span", { children: M }),
                    "分钟",
                  ],
                }),
              ("rankStyle" === A || "rankLanguage" === A) &&
                (0, p.jsx)("div", { ref: D, className: v().charts }),
              "listenSource" === A ||
              "mostSoundEffect" === A ||
              "mostSoundQuality" === A
                ? (0, p.jsxs)("div", {
                    className: v().tip,
                    children: [
                      "收听",
                      (0, p.jsx)("span", { children: void 0 === b ? "" : b }),
                      "首歌",
                    ],
                  })
                : (0, p.jsx)("div", {
                    className: v().tip,
                    children: void 0 === c ? "" : c,
                  }),
              ("listenSource" === A || "mostSoundQuality" === A) &&
                (0, p.jsx)("div", {
                  children:
                    null == C
                      ? void 0
                      : C.map(function (e, n) {
                          return (0, p.jsx)(
                            "div",
                            {
                              className: g()(
                                v().cover,
                                v()["pic".concat(n)],
                                v()[A],
                                (0, d.Z)(
                                  {},
                                  v().coverBg,
                                  !(null != e && e.cover),
                                ),
                              ),
                              style: { zIndex: 2 - n },
                              onClick: function (n) {
                                return L(n, null == e ? void 0 : e.mixsongid);
                              },
                              children: (0, p.jsx)("img", {
                                alt: "",
                                src: null == e ? void 0 : e.cover,
                              }),
                            },
                            ""
                              .concat(null == e ? void 0 : e.mixsongid)
                              .concat(n),
                          );
                        }),
                }),
            ],
          });
        }),
        f = t(16175),
        x = t.n(f),
        A = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/quote.3375b9e5.png",
          height: 38,
          width: 46,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAQAAACfUMTVAAAAQklEQVR42i2KCwqAMAzFIpuuMq2o97+rgZrA6xcJHoqXgVwEyMqNNJLiqHv8HwvpqsO0JF1PnRC6OzYz1GawIeagfVQfAW/CsbT2AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 7,
        },
        b = t(55500),
        j = t(93452),
        y = (0, j.Z)(
          (0, o.Pi)(function (e) {
            var n,
              t,
              i = e.stores.dataStore.statistics,
              o = (null == i ? void 0 : i.comment) || {},
              a = o.comment_total,
              l = o.liked_total,
              r = o.replied_total,
              s = o.most_new_like;
            return (0, p.jsxs)("div", {
              className: x().wrap,
              children: [
                (0, p.jsx)("div", {
                  className: x().title,
                  children: "评论足迹",
                }),
                (null == s ? void 0 : s.content) &&
                  (0, p.jsxs)("div", {
                    className: x().content,
                    children: [
                      (0, p.jsx)("span", {
                        className: x().tag,
                        children: "最热评论",
                      }),
                      (0, p.jsxs)("div", {
                        className: x().comment,
                        children: [
                          (0, p.jsx)("img", {
                            alt: "",
                            className: x().quote,
                            src: A.src,
                          }),
                          (null == s
                            ? void 0
                            : null === (n = s.content) || void 0 === n
                              ? void 0
                              : n.length) > 100
                            ? "".concat(
                                null == s
                                  ? void 0
                                  : null === (t = s.content) || void 0 === t
                                    ? void 0
                                    : t.slice(0, 37),
                                "...",
                              )
                            : null == s
                              ? void 0
                              : s.content,
                        ],
                      }),
                      (0, p.jsx)("div", {
                        className: x().from,
                        children: (0, p.jsx)(b.Z, {
                          targetText: null == s ? void 0 : s.song_name,
                          keepText: ["——在《", "》下的评论"],
                          width: 350,
                          style: { fontSize: 22 },
                        }),
                      }),
                    ],
                  }),
                (0, p.jsxs)("div", {
                  className: x().otherInfo,
                  children: [
                    a >= 0 &&
                      (0, p.jsxs)("div", {
                        className: x().item,
                        children: [
                          (0, p.jsx)("div", {
                            className: x().name,
                            children: "发布",
                          }),
                          (0, p.jsx)("div", {
                            className: x().count,
                            children: a || 0,
                          }),
                        ],
                      }),
                    l >= 0 &&
                      (0, p.jsxs)(p.Fragment, {
                        children: [
                          a >= 0
                            ? (0, p.jsx)("div", { className: x().divider })
                            : (0, p.jsx)(p.Fragment, {}),
                          (0, p.jsxs)("div", {
                            className: x().item,
                            children: [
                              (0, p.jsx)("div", {
                                className: x().name,
                                children: "获赞",
                              }),
                              (0, p.jsx)("div", {
                                className: x().count,
                                children: l || 0,
                              }),
                            ],
                          }),
                        ],
                      }),
                    r >= 0 &&
                      (0, p.jsxs)(p.Fragment, {
                        children: [
                          l >= 0
                            ? (0, p.jsx)("div", { className: x().divider })
                            : (0, p.jsx)(p.Fragment, {}),
                          (0, p.jsxs)("div", {
                            className: x().item,
                            children: [
                              (0, p.jsx)("div", {
                                className: x().name,
                                children: "回复",
                              }),
                              (0, p.jsx)("div", {
                                className: x().count,
                                children: r || 0,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            });
          }),
        ),
        w = t(33374),
        k = t.n(w),
        N = t(2266),
        C = t(93239),
        S = (0, j.Z)(
          (0, o.Pi)(function (e) {
            var n,
              t,
              i,
              o,
              a,
              l,
              d,
              u,
              v,
              _,
              m,
              h = e.type,
              f = e.stores,
              x = e.clickMobileLog,
              A = f.dataStore.statistics;
            return (0, p.jsxs)("div", {
              className: k().wrap,
              onClick: function () {
                "share" !== h &&
                  (x("特别记忆", { svar2: "去年今日" }),
                  s.LightMobileCall.mobileCall(C.x8.openURL, {
                    browser: 0,
                    url: "https://activity.kugou.com/today/v-55720540/index.html?channel=song_statistics_h5",
                    isFullScreen: 1,
                  }));
              },
              children: [
                (0, p.jsxs)("div", {
                  className: k().title,
                  children: [
                    "去年今日",
                    "share" !== h &&
                      (0, p.jsx)("img", { alt: "", src: N.Z.src }),
                  ],
                }),
                (0, p.jsx)("div", {
                  className: k().content,
                  children: ""
                    .concat(
                      (0, r.fg)(
                        null == A
                          ? void 0
                          : null === (n = A.last_year_today) || void 0 === n
                            ? void 0
                            : n.date,
                      ).year,
                      "年",
                    )
                    .concat(
                      (0, r.fg)(
                        null == A
                          ? void 0
                          : null === (t = A.last_year_today) || void 0 === t
                            ? void 0
                            : t.date,
                      ).month,
                      "月",
                    )
                    .concat(
                      (0, r.fg)(
                        null === (i = A.last_year_today) || void 0 === i
                          ? void 0
                          : i.date,
                      ).day,
                      "日",
                    ),
                }),
                (0, p.jsxs)("div", {
                  className: k().tip,
                  children: [
                    "在听",
                    (0, p.jsx)("span", {
                      children: (0, p.jsx)(b.Z, {
                        targetText:
                          (null == A
                            ? void 0
                            : null === (o = A.last_year_today) || void 0 === o
                              ? void 0
                              : null === (a = o.song_infos) || void 0 === a
                                ? void 0
                                : null === (l = a[0]) || void 0 === l
                                  ? void 0
                                  : l.name) || "",
                        width: 180,
                        keepText: ["《", "》"],
                        style: { fontSize: 28 },
                      }),
                    }),
                    (null == A
                      ? void 0
                      : null === (d = A.last_year_today) || void 0 === d
                        ? void 0
                        : null === (u = d.song_infos) || void 0 === u
                          ? void 0
                          : u.length) > 1
                      ? "等"
                      : "",
                    "歌曲",
                  ],
                }),
                (0, p.jsx)("div", {
                  className: k().coverWrap,
                  children:
                    null == A
                      ? void 0
                      : null === (v = A.last_year_today) || void 0 === v
                        ? void 0
                        : null === (_ = v.song_infos) || void 0 === _
                          ? void 0
                          : null === (m = _.slice(0, 3)) || void 0 === m
                            ? void 0
                            : m.map(function (e, n) {
                                var t;
                                return (0, p.jsx)(
                                  "div",
                                  {
                                    className: g()(
                                      k().cover,
                                      k()["pic".concat(n)],
                                    ),
                                    style: { zIndex: 2 - n },
                                    children: (0, p.jsx)("img", {
                                      alt: "",
                                      src:
                                        (0, s.replaceHttpsImg)(
                                          null == e
                                            ? void 0
                                            : null === (t = e.cover) ||
                                                void 0 === t
                                              ? void 0
                                              : t.replace("{size}", 150),
                                        ) || c.Z.src,
                                    }),
                                  },
                                  n,
                                );
                              }),
                }),
              ],
            });
          }),
        ),
        L = t(56417),
        M = t.n(L),
        I = (0, j.Z)(
          (0, o.Pi)(function (e) {
            var n,
              t,
              i,
              o,
              a,
              l,
              d,
              u,
              v,
              _,
              m = e.type,
              h = e.stores,
              f = e.clickMobileLog,
              x = h.dataStore.statistics,
              A = function (e) {
                "share" !== m &&
                  (f("特别记忆", {
                    svar2: "听歌最久",
                    svar3: "播放",
                    svar4: e,
                  }),
                  (0, r._n)(e));
              };
            return (0, p.jsxs)("div", {
              className: M().wrap,
              id: "longest_date",
              children: [
                (0, p.jsx)("div", {
                  className: M().title,
                  children: "听歌最久",
                }),
                (0, p.jsx)("div", {
                  className: M().content,
                  children: ""
                    .concat(
                      null ===
                        (n = (0, r.fg)(
                          null == x
                            ? void 0
                            : null === (t = x.longest_date) || void 0 === t
                              ? void 0
                              : t.date,
                        )) || void 0 === n
                        ? void 0
                        : n.month,
                      "月",
                    )
                    .concat(
                      null ===
                        (i = (0, r.fg)(
                          null == x
                            ? void 0
                            : null === (o = x.longest_date) || void 0 === o
                              ? void 0
                              : o.date,
                        )) || void 0 === i
                        ? void 0
                        : i.day,
                      "日",
                    ),
                }),
                (0, p.jsx)("div", {
                  className: M().tip,
                  children: "听歌"
                    .concat(
                      null ===
                        (a = (0, r.WJ)(
                          null == x
                            ? void 0
                            : null === (l = x.longest_date) || void 0 === l
                              ? void 0
                              : l.duration,
                        )) || void 0 === a
                        ? void 0
                        : a.count,
                    )
                    .concat(
                      null ===
                        (d = (0, r.WJ)(
                          null == x
                            ? void 0
                            : null === (u = x.longest_date) || void 0 === u
                              ? void 0
                              : u.duration,
                        )) || void 0 === d
                        ? void 0
                        : d.unit,
                    ),
                }),
                (0, p.jsx)("div", {
                  className: M().coverWrap,
                  children:
                    null == x
                      ? void 0
                      : null === (v = x.longest_date.song_infos) || void 0 === v
                        ? void 0
                        : null === (_ = v.slice(0, 3)) || void 0 === _
                          ? void 0
                          : _.map(function (e, n) {
                              var t;
                              return (0, p.jsx)(
                                "div",
                                {
                                  className: g()(
                                    M().cover,
                                    M()["pic".concat(n)],
                                  ),
                                  style: { zIndex: 2 - n },
                                  onClick: function () {
                                    return A(null == e ? void 0 : e.mixsongid);
                                  },
                                  children: (0, p.jsx)("img", {
                                    alt: "",
                                    src:
                                      (0, s.replaceHttpsImg)(
                                        null == e
                                          ? void 0
                                          : null === (t = e.cover) ||
                                              void 0 === t
                                            ? void 0
                                            : t.replace("{size}", 150),
                                      ) || c.Z.src,
                                  }),
                                },
                                n,
                              );
                            }),
                }),
              ],
            });
          }),
        ),
        E = t(75723),
        D = t(70086),
        R = t.n(D),
        T = t(2851);
      function Z(e) {
        for (
          var n = e.date,
            t = e.coverArr,
            i = e.tips,
            o = e.needJumpIcon,
            a = e.type,
            l = e.clickMobileLog,
            d = e.onClick,
            u = function (e) {
              switch (e) {
                case 0:
                  return { left: (0, r.ht)(0), top: (0, r.ht)(0) };
                case 1:
                  return { left: (0, r.ht)(120), top: (0, r.ht)(120) };
                case 2:
                  return { left: (0, r.ht)(240), top: (0, r.ht)(0) };
                case 3:
                  return { left: (0, r.ht)(360), top: (0, r.ht)(120) };
                case 4:
                  return { left: (0, r.ht)(480), top: (0, r.ht)(0) };
                case 5:
                  return { left: (0, r.ht)(600), top: (0, r.ht)(120) };
                default:
                  return {};
              }
            },
            v = (0, E.Z)(t);
          (null == v ? void 0 : v.length) < 6;
        )
          v.push(null);
        return (0, p.jsxs)("div", {
          className: R().wrap,
          onClick: o
            ? "month" === a
              ? void 0 === d
                ? function () {}
                : d
              : function () {
                  "share" !== a &&
                    (l("特别记忆", { svar2: "去年今日" }),
                    s.LightMobileCall.mobileCall(C.x8.openURL, {
                      browser: 0,
                      url: "https://activity.kugou.com/today/v-55720540/index.html?channel=song_statistics_h5",
                      isFullScreen: 1,
                    }));
                }
            : null,
          children: [
            (0, p.jsxs)("p", {
              className: g()(R().title, "impact_cn"),
              children: [
                (0, p.jsx)("span", { children: "#去年今日" }),
                o &&
                  (0, p.jsx)("img", {
                    alt: "",
                    src: T.Z.src,
                    className: R().jump,
                  }),
              ],
            }),
            (0, p.jsx)("div", {
              className: g()(R().date, "impact_cn"),
              children: n,
            }),
            (0, p.jsx)("div", { className: R().tips, children: i }),
            (0, p.jsx)("div", {
              className: R().coverWrap,
              children: v.slice(0, 6).map(function (e, n) {
                return (0, p.jsx)(
                  "div",
                  {
                    className: R().cover,
                    style: u(n),
                    children:
                      e &&
                      (0, p.jsx)("img", {
                        alt: "",
                        src: (0, s.replaceHttpsImg)(
                          (0, r.Gn)(null == e ? void 0 : e.cover) || c.Z.src,
                        ),
                      }),
                  },
                  n,
                );
              }),
            }),
            (0, p.jsx)("img", {
              alt: "",
              src: C.Ck.bg_last_year_today,
              className: R().bgText,
            }),
          ],
        });
      }
      var W = t(34011),
        O = t.n(W),
        B = t(45225);
      function V(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i));
        }
        return t;
      }
      var F = (0, j.Z)(function (e) {
          for (
            var n = e.date,
              t = e.dateText,
              i = e.tips,
              o = e.coverArr,
              a = e.needJumpIcon,
              l = e.stores.dataStore,
              u = l.skin,
              v = (0, B.Z)({ dataStore: l }).mobileLog,
              _ = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                v(
                  (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                      var t = null != arguments[n] ? arguments[n] : {};
                      n % 2
                        ? V(Object(t), !0).forEach(function (n) {
                            (0, d.Z)(e, n, t[n]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(t),
                            )
                          : V(Object(t)).forEach(function (n) {
                              Object.defineProperty(
                                e,
                                n,
                                Object.getOwnPropertyDescriptor(t, n),
                              );
                            });
                    }
                    return e;
                  })({ a: 1131811, b: "点击", svar2: "听歌最久" }, e),
                );
              },
              m = (0, E.Z)(void 0 === o ? [] : o);
            (null == m ? void 0 : m.length) < 4;
          )
            m.push(null);
          return (0, p.jsxs)("div", {
            className: O().wrap,
            onClick: function () {
              if (a) {
                _({ svar3: "点击跳转" });
                var e = (0, r.G8)({
                  page: "rank",
                  query: {
                    isHideTitleBar: 1,
                    dimension: 0,
                    date: n,
                    skin: u,
                    rankType: C.Jd.SONG,
                    sonicparams: "".concat(u, "_").concat(C.Jd.SONG),
                    sonic_remain_params: "sonicparams",
                  },
                });
                s.LightMobileCall.mobileCall(C.x8.openURL, {
                  isFullScreen: 1,
                  url: e,
                });
              }
            },
            id: "longest_date",
            children: [
              (0, p.jsxs)("div", {
                className: O().left,
                children: [
                  (0, p.jsxs)("p", {
                    className: g()(O().title, "impact_cn"),
                    children: [
                      "#这天听歌最久",
                      a &&
                        (0, p.jsx)("img", {
                          alt: "",
                          src: T.Z.src,
                          className: O().jump,
                        }),
                    ],
                  }),
                  (0, p.jsx)("div", {
                    className: g()(O().date, "impact_cn"),
                    children: t,
                  }),
                  (0, p.jsx)("div", { className: O().tips, children: i }),
                ],
              }),
              (0, p.jsx)("div", {
                className: O().right,
                children: m.slice(0, 4).map(function (e, n) {
                  return (0, p.jsx)(
                    "div",
                    {
                      className: O().cover,
                      children:
                        e &&
                        (0, p.jsx)("img", {
                          alt: "",
                          src: (0, s.replaceHttpsImg)(
                            (0, r.Gn)(null == e ? void 0 : e.cover, 240) ||
                              c.Z.src,
                          ),
                        }),
                    },
                    n,
                  );
                }),
              }),
              (0, p.jsx)("img", {
                alt: "",
                className: O().bgText,
                src: C.Ck.bg_longest_date,
              }),
            ],
          });
        }),
        P = t(50133),
        U = t.n(P),
        Y = (0, j.Z)(
          (0, o.Pi)(function (e) {
            var n = e.stores.dataStore.statistics,
              t = (null == n ? void 0 : n.comment) || {},
              i = t.comment_total,
              o = t.liked_total,
              a = t.replied_total,
              l = t.most_new_like;
            return (0, p.jsxs)("div", {
              className: U().wrap,
              children: [
                (0, p.jsxs)("div", {
                  className: g()(U().top, "impact_cn"),
                  children: [
                    (0, p.jsxs)("div", {
                      children: [
                        (0, p.jsx)("p", {
                          className: U().name,
                          children: "#发表评论",
                        }),
                        (0, p.jsxs)("div", {
                          className: U().count,
                          children: [
                            (0, p.jsx)("span", { children: i || 0 }),
                            "\xa0条",
                          ],
                        }),
                      ],
                    }),
                    (0, p.jsxs)("div", {
                      children: [
                        (0, p.jsx)("p", {
                          className: U().name,
                          children: "#获得点赞",
                        }),
                        (0, p.jsxs)("div", {
                          className: U().count,
                          children: [
                            (0, p.jsx)("span", { children: o || 0 }),
                            "\xa0个",
                          ],
                        }),
                      ],
                    }),
                    (0, p.jsxs)("div", {
                      children: [
                        (0, p.jsx)("p", {
                          className: U().name,
                          children: "#收到回复",
                        }),
                        (0, p.jsxs)("div", {
                          className: U().count,
                          children: [
                            (0, p.jsx)("span", { children: a || 0 }),
                            "\xa0条",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                !!(null != l && l.count) &&
                  !!(null != l && l.content) &&
                  !!(null != l && l.song_name) &&
                  (0, p.jsx)(p.Fragment, {
                    children: (0, p.jsxs)("div", {
                      className: U().bottom,
                      children: [
                        (0, p.jsxs)("div", {
                          className: U().title,
                          children: [
                            "这条评论收获新赞最多，获赞",
                            (0, p.jsx)("span", { children: l.count || 0 }),
                            "个",
                          ],
                        }),
                        (0, p.jsxs)("div", {
                          className: U().comment,
                          children: [
                            "“",
                            l.content.length > 100
                              ? "".concat(l.content.slice(0, 100), "...")
                              : l.content,
                            "”",
                          ],
                        }),
                        (0, p.jsx)("div", {
                          className: U().from,
                          children: (0, p.jsx)(b.Z, {
                            targetText: l.song_name,
                            keepText: ["——在《", "》下的评论"],
                            width: 600,
                            style: { fontSize: 24 },
                          }),
                        }),
                      ],
                    }),
                  }),
              ],
            });
          }),
        ),
        H = t(73123),
        z = t.n(H),
        G = (0, j.Z)(
          (0, o.Pi)(function (e) {
            var n,
              t = e.stores,
              i = e.type,
              o = t.dataStore,
              a = o.submoduleData,
              l = (0, B.Z)({ dataStore: o }).mobileLog,
              d = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                (l({
                  a: 1131811,
                  b: "点击",
                  svar1: "收听歌曲",
                  svar2: e.label,
                  svar3: "点击内容",
                  ivar1: e.mixsongid,
                }),
                  l({
                    a: 1132533,
                    b: "点击",
                    ft: "播放按钮点击",
                    svar1: e.label,
                    svar2: e.mixsongid,
                  }));
              },
              u = function (e, n) {
                n &&
                  "share" !== i &&
                  (d({ mixsongid: n.mixsongid, label: e }),
                  (0, r._n)(n.mixsongid));
              };
            return null !== (n = a.habits) && void 0 !== n && n.length
              ? a.habits.map(function (e, n) {
                  var t,
                    i,
                    o,
                    a = [];
                  if ("最常用音质" === e.label)
                    for (
                      a = (0, E.Z)((null == e ? void 0 : e.song_infos) || []);
                      (null === (o = a) || void 0 === o ? void 0 : o.length) <
                      4;
                    )
                      a.push(null);
                  return (0, p.jsx)(
                    "div",
                    {
                      className: z().item,
                      children:
                        "最常用音质" === e.label
                          ? (0, p.jsxs)("div", {
                              className: g()(z().wrap, z().soundQuality),
                              children: [
                                (0, p.jsx)("div", {
                                  className: z().coverWrap,
                                  onClick: function () {
                                    var n;
                                    return u(
                                      e.label,
                                      null == e
                                        ? void 0
                                        : null === (n = e.song_infos) ||
                                            void 0 === n
                                          ? void 0
                                          : n[0],
                                    );
                                  },
                                  children: a.slice(0, 4).map(function (e, n) {
                                    return (0, p.jsx)(
                                      "div",
                                      {
                                        className: z().cover,
                                        style: e
                                          ? { backgroundImage: "none" }
                                          : {},
                                        children:
                                          e &&
                                          (0, p.jsx)("img", {
                                            alt: "",
                                            src: (0, s.replaceHttpsImg)(
                                              (0, r.Gn)(
                                                null == e ? void 0 : e.cover,
                                                240,
                                              ) || c.Z.src,
                                            ),
                                          }),
                                      },
                                      n,
                                    );
                                  }),
                                }),
                                (0, p.jsxs)("div", {
                                  className: z().left,
                                  children: [
                                    (0, p.jsxs)("p", {
                                      className: g()(z().title, "impact_cn"),
                                      children: ["#", e.label],
                                    }),
                                    (0, p.jsx)("div", {
                                      className: z().name,
                                      children: e.name,
                                    }),
                                    (0, p.jsxs)("div", {
                                      className: z().tips,
                                      children: ["听了", e.total, "首歌"],
                                    }),
                                  ],
                                }),
                                (0, p.jsx)("img", {
                                  alt: "",
                                  className: z().bgText,
                                  src: C.Ck.bg_listen_source,
                                }),
                              ],
                            })
                          : (0, p.jsxs)("div", {
                              className: z().wrap,
                              children: [
                                (0, p.jsxs)("div", {
                                  className: z().left,
                                  children: [
                                    (0, p.jsxs)("p", {
                                      className: g()(z().title, "impact_cn"),
                                      children: ["#", e.label],
                                    }),
                                    (0, p.jsx)("div", {
                                      className: z().name,
                                      children: e.name,
                                    }),
                                    (0, p.jsxs)("div", {
                                      className: z().tips,
                                      children: ["听了", e.total, "首歌"],
                                    }),
                                  ],
                                }),
                                (0, p.jsx)("div", {
                                  className: z().right,
                                  children:
                                    1 !== n
                                      ? (0, p.jsx)("div", {
                                          className: z().cover,
                                          onClick: function () {
                                            var n;
                                            u(
                                              e.label,
                                              null == e
                                                ? void 0
                                                : null === (n = e.song_infos) ||
                                                    void 0 === n
                                                  ? void 0
                                                  : n[0],
                                            );
                                          },
                                          children: (0, p.jsx)("img", {
                                            alt: "",
                                            src: (0, s.replaceHttpsImg)(
                                              (0, r.Gn)(
                                                (null == e
                                                  ? void 0
                                                  : null ===
                                                        (t = e.song_infos) ||
                                                      void 0 === t
                                                    ? void 0
                                                    : null === (i = t[0]) ||
                                                        void 0 === i
                                                      ? void 0
                                                      : i.cover) || "",
                                                240,
                                              ) || c.Z.src,
                                            ),
                                          }),
                                        })
                                      : (0, p.jsx)(p.Fragment, {}),
                                }),
                                (0, p.jsx)("img", {
                                  alt: "",
                                  className: z().bgText,
                                  src: C.Ck.bg_listen_source,
                                }),
                              ],
                            }),
                    },
                    n,
                  );
                })
              : "";
          }),
        ),
        Q = t(9336),
        K = t.n(Q),
        J = (0, j.Z)(
          (0, o.Pi)(function (e) {
            var n,
              t,
              i = e.stores.dataStore.statistics;
            return null != i &&
              null !== (n = i.vip) &&
              void 0 !== n &&
              n.listen_total
              ? (0, p.jsxs)("div", {
                  className: K().wrap,
                  children: [
                    (0, p.jsxs)("div", {
                      className: K().item,
                      children: [
                        (0, p.jsx)("div", {
                          className: g()(K().t, "impact_cn"),
                          children: "#VIP歌曲收听数",
                        }),
                        (0, p.jsxs)("div", {
                          className: g()(K().c, "impact_cn"),
                          children: [
                            (0, p.jsx)("span", {
                              children:
                                null == i
                                  ? void 0
                                  : null === (t = i.vip) || void 0 === t
                                    ? void 0
                                    : t.listen_total,
                            }),
                            "首",
                          ],
                        }),
                      ],
                    }),
                    (0, p.jsx)("div", { className: K().divider }),
                    (0, p.jsxs)("div", {
                      className: K().item,
                      children: [
                        (0, p.jsx)("div", {
                          className: g()(K().t, "impact_cn"),
                          children: "#VIP歌曲收听时长",
                        }),
                        (0, p.jsxs)("div", {
                          className: g()(K().c, "impact_cn"),
                          children: [
                            (0, p.jsx)("span", {
                              children: Math.ceil(i.vip.listen_duration / 60),
                            }),
                            "分钟",
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : "";
          }),
        ),
        q = t(55735),
        X = t(93179),
        $ = (0, j.Z)(
          (0, o.Pi)(function (e) {
            var n,
              t = e.type,
              i = void 0 === t ? "normal" : t,
              o = e.stores,
              a = e.clickMobileLog,
              d = o.dataStore,
              u = d.dimension,
              v = d.statistics,
              _ = d.dateIndexs,
              m = d.dateRanges,
              f = d.skin,
              x = (null == v ? void 0 : v.comment) || {},
              A = x.comment_total,
              j = x.liked_total,
              w = x.replied_total,
              k =
                (null == _ ? void 0 : _[u]) >=
                (null == m
                  ? void 0
                  : null === (n = m[u]) || void 0 === n
                    ? void 0
                    : n.length) -
                  1,
              N = function () {
                var e,
                  n,
                  t,
                  o,
                  l,
                  d,
                  u,
                  _,
                  g,
                  m,
                  h,
                  f,
                  x,
                  A,
                  j,
                  y,
                  w,
                  k,
                  N,
                  C,
                  S,
                  L,
                  M,
                  I,
                  E,
                  D,
                  R,
                  T,
                  Z,
                  W = [],
                  O = [
                    {
                      style: {
                        backgroundImage:
                          "linear-gradient(0deg, #F5F5F5 0%, #DDDDDD 100%)",
                        width: (0, r.ht)(320),
                        height: (0, r.ht)(363),
                      },
                      title: "偏好曲风",
                      content:
                        null == v
                          ? void 0
                          : null === (e = v.rank_style) || void 0 === e
                            ? void 0
                            : null === (n = e[0]) || void 0 === n
                              ? void 0
                              : n.style,
                      type: "rankStyle",
                      jumpType: "rank_style",
                      areaColor: "rgba(105,177,245,0.6)",
                      lineColor: "#69B1F5",
                      chartData:
                        null == v
                          ? void 0
                          : null === (t = v.rank_style) || void 0 === t
                            ? void 0
                            : t.map(function (e) {
                                return null == e ? void 0 : e.total;
                              }),
                      indicator:
                        null == v
                          ? void 0
                          : null === (o = v.rank_style) || void 0 === o
                            ? void 0
                            : o.map(function (e) {
                                var n, t;
                                return {
                                  name: null == e ? void 0 : e.style,
                                  max:
                                    null == v
                                      ? void 0
                                      : null === (n = v.rank_style) ||
                                          void 0 === n
                                        ? void 0
                                        : null === (t = n[0]) || void 0 === t
                                          ? void 0
                                          : t.total,
                                };
                              }),
                      isShow:
                        null == v
                          ? void 0
                          : null === (l = v.rank_style) || void 0 === l
                            ? void 0
                            : l.length,
                    },
                    {
                      style: {
                        backgroundImage:
                          "linear-gradient(0deg, #F6F7FF 0%, #E2E2FF 100%)",
                        width: (0, r.ht)(320),
                        height: (0, r.ht)(363),
                      },
                      title: "偏好语言",
                      content:
                        null == v
                          ? void 0
                          : null === (d = v.rank_language) || void 0 === d
                            ? void 0
                            : null === (u = d[0]) || void 0 === u
                              ? void 0
                              : u.language,
                      type: "rankLanguage",
                      jumpType: "rank_language",
                      areaColor: "rgba(154,148,254,0.6)",
                      lineColor: "#9A94FE",
                      chartData:
                        null == v
                          ? void 0
                          : null === (_ = v.rank_language) || void 0 === _
                            ? void 0
                            : _.map(function (e) {
                                return null == e ? void 0 : e.total;
                              }),
                      indicator:
                        null == v
                          ? void 0
                          : null === (g = v.rank_language) || void 0 === g
                            ? void 0
                            : g.map(function (e) {
                                var n, t;
                                return {
                                  name: null == e ? void 0 : e.language,
                                  max:
                                    null == v
                                      ? void 0
                                      : null === (n = v.rank_language) ||
                                          void 0 === n
                                        ? void 0
                                        : null === (t = n[0]) || void 0 === t
                                          ? void 0
                                          : t.total,
                                };
                              }),
                      isShow:
                        null == v
                          ? void 0
                          : null === (m = v.rank_language) || void 0 === m
                            ? void 0
                            : m.length,
                    },
                    {
                      style: {
                        backgroundImage:
                          "linear-gradient(180deg, rgba(172,229,164,0.5) 0%, rgba(224,240,219,0.5) 100%)",
                        width: (0, r.ht)(320),
                        height: (0, r.ht)(412),
                      },
                      title: "听歌来源",
                      content: (0, p.jsx)(b.Z, {
                        width: 200,
                        targetText:
                          null == v
                            ? void 0
                            : null === (h = v.most_listen_source) ||
                                void 0 === h
                              ? void 0
                              : h.name,
                        style: { fontSize: 44 },
                      }),
                      count:
                        null == v
                          ? void 0
                          : null === (f = v.most_listen_source) || void 0 === f
                            ? void 0
                            : f.total,
                      coverArr:
                        null == v
                          ? void 0
                          : null === (x = v.most_listen_source) || void 0 === x
                            ? void 0
                            : null === (A = x.song_infos) || void 0 === A
                              ? void 0
                              : null === (j = A.slice(0, 3)) || void 0 === j
                                ? void 0
                                : j.map(function (e) {
                                    var n;
                                    return {
                                      cover:
                                        (0, s.replaceHttpsImg)(
                                          null == e
                                            ? void 0
                                            : null === (n = e.cover) ||
                                                void 0 === n
                                              ? void 0
                                              : n.replace("{size}", 150),
                                        ) || c.Z.src,
                                      mixsongid:
                                        (null == e ? void 0 : e.mixsongid) || 0,
                                    };
                                  }),
                      type: "listenSource",
                      isShow:
                        null == v
                          ? void 0
                          : null === (y = v.most_listen_source) || void 0 === y
                            ? void 0
                            : y.name,
                      onClick: function (e, n) {
                        "share" !== i &&
                          (e && e.stopPropagation(),
                          a("特别记忆", {
                            svar2: "听歌来源",
                            svar3: "播放",
                            svar4: n,
                          }),
                          (0, r._n)(n));
                      },
                    },
                    {
                      style: {
                        backgroundImage:
                          "linear-gradient(180deg, #FCDFE5 0%, #FAF0F7 100%)",
                        width: (0, r.ht)(320),
                        height: (0, r.ht)(412),
                      },
                      title: "常用音质",
                      content: (0, p.jsx)(b.Z, {
                        width: 260,
                        targetText:
                          null == v
                            ? void 0
                            : null === (w = v.most_sound_quality) ||
                                void 0 === w
                              ? void 0
                              : w.name,
                        style: { fontSize: 44 },
                      }),
                      count:
                        null == v
                          ? void 0
                          : null === (k = v.most_sound_quality) || void 0 === k
                            ? void 0
                            : k.total,
                      coverArr:
                        null == v
                          ? void 0
                          : null === (N = v.most_sound_quality) || void 0 === N
                            ? void 0
                            : null === (C = N.song_infos) || void 0 === C
                              ? void 0
                              : null === (S = C.slice(0, 3)) || void 0 === S
                                ? void 0
                                : S.map(function (e) {
                                    var n;
                                    return {
                                      cover:
                                        (0, s.replaceHttpsImg)(
                                          null == e
                                            ? void 0
                                            : null === (n = e.cover) ||
                                                void 0 === n
                                              ? void 0
                                              : n.replace("{size}", 150),
                                        ) || c.Z.src,
                                      mixsongid:
                                        (null == e ? void 0 : e.mixsongid) || 0,
                                    };
                                  }),
                      type: "mostSoundQuality",
                      isShow:
                        null == v
                          ? void 0
                          : null === (L = v.most_sound_quality) || void 0 === L
                            ? void 0
                            : L.name,
                      onClick: function (e, n) {
                        "share" !== i &&
                          (e && e.stopPropagation(),
                          a("特别记忆", {
                            svar2: "常用音质",
                            svar3: "播放",
                            svar4: n,
                          }),
                          (0, r._n)(n));
                      },
                    },
                    {
                      style: {
                        backgroundImage:
                          "linear-gradient(180deg, #FFF6A8 0%, #FCF9DD 80%)",
                        width: (0, r.ht)(320),
                        height: (0, r.ht)(220),
                      },
                      title: "常用音效",
                      content: (0, p.jsx)(b.Z, {
                        width: 220,
                        targetText:
                          null == v
                            ? void 0
                            : null === (M = v.most_sound_effect) || void 0 === M
                              ? void 0
                              : M.name,
                        style: { fontSize: 44 },
                      }),
                      count:
                        null == v
                          ? void 0
                          : null === (I = v.most_sound_effect) || void 0 === I
                            ? void 0
                            : I.total,
                      type: "mostSoundEffect",
                      isShow:
                        null == v
                          ? void 0
                          : null === (E = v.most_sound_effect) || void 0 === E
                            ? void 0
                            : E.name,
                    },
                    {
                      style: {
                        backgroundImage:
                          "linear-gradient(0deg, #E1F9FF 0%, #A7DCEA 100%)",
                        width: (0, r.ht)(320),
                        height: (0, r.ht)(220),
                      },
                      title: "VIP歌曲",
                      duration:
                        Math.ceil(
                          (null == v
                            ? void 0
                            : null === (D = v.vip) || void 0 === D
                              ? void 0
                              : D.listen_duration) / 60,
                        ) || 0,
                      listenTotal:
                        (null == v
                          ? void 0
                          : null === (R = v.vip) || void 0 === R
                            ? void 0
                            : R.listen_total) || 0,
                      tip: "VIP收听数&时长",
                      type: "vip",
                      jumpType: "vip",
                      isShow:
                        (null == v
                          ? void 0
                          : null === (T = v.vip) || void 0 === T
                            ? void 0
                            : T.listen_duration) &&
                        (null == v
                          ? void 0
                          : null === (Z = v.vip) || void 0 === Z
                            ? void 0
                            : Z.listen_total),
                    },
                  ].filter(function (e) {
                    return e.isShow;
                  }),
                  B = O.filter(function (e, n) {
                    return !(n % 2);
                  }),
                  V = O.filter(function (e, n) {
                    return n % 2;
                  });
                return (W.push(B), W.push(V), W);
              };
            return (0, p.jsxs)(
              "div",
              {
                className: g()(l().wrap, [l()[f]], [l()[i]]),
                id: "special_moment",
                children: [
                  (0, p.jsx)("p", {
                    className: l().title,
                    children: "特别记忆",
                  }),
                  (function () {
                    var e,
                      n,
                      t,
                      o,
                      s,
                      c,
                      d,
                      _,
                      g,
                      m,
                      x,
                      L,
                      M,
                      E,
                      D,
                      R,
                      T,
                      W,
                      O,
                      B,
                      V,
                      P,
                      U,
                      H,
                      z,
                      Q,
                      K,
                      $,
                      ee,
                      en,
                      et,
                      ei,
                      eo,
                      ea,
                      el,
                      er,
                      es,
                      ec,
                      ed,
                      eu,
                      ev,
                      e_,
                      eg = f;
                    switch (
                      (3 === u && f === C.lu.MAGAZINE && (eg = "black"), eg)
                    ) {
                      case "normal":
                      case "black":
                        return (0, p.jsxs)(p.Fragment, {
                          children: [
                            (null == v
                              ? void 0
                              : null === (e = v.last_year_today) || void 0 === e
                                ? void 0
                                : e.date) &&
                              (null == v
                                ? void 0
                                : null === (n = v.last_year_today) ||
                                    void 0 === n
                                  ? void 0
                                  : null === (t = n.song_infos) || void 0 === t
                                    ? void 0
                                    : t.length) > 0 &&
                              k &&
                              (0, p.jsx)(S, { type: i, clickMobileLog: a }),
                            0 !== u &&
                              (null == v
                                ? void 0
                                : null === (o = v.longest_date) || void 0 === o
                                  ? void 0
                                  : null === (s = o.song_infos) || void 0 === s
                                    ? void 0
                                    : s.length) > 0 &&
                              (0, p.jsx)(I, { type: i, clickMobileLog: a }),
                            0 !== u &&
                              !!(A || j || w) &&
                              (0, p.jsx)("div", {
                                className: l().bg,
                                children: (0, p.jsx)(y, {}),
                              }),
                            (0, p.jsx)("div", {
                              className: l().modules,
                              children: N().map(function (e, n) {
                                return (0, p.jsx)(
                                  "div",
                                  {
                                    children: e.map(function (e) {
                                      if (e.isShow)
                                        return (0, p.jsx)(
                                          "div",
                                          {
                                            className: l().bg,
                                            onClick: function () {
                                              return a("特别记忆", {
                                                svar2: e.title,
                                              });
                                            },
                                            children: (0, p.jsx)(h, {
                                              data: e,
                                              pageType: i,
                                            }),
                                          },
                                          e.type,
                                        );
                                    }),
                                  },
                                  n,
                                );
                              }),
                            }),
                          ],
                        });
                      case "magazine":
                        return (0, p.jsxs)(p.Fragment, {
                          children: [
                            (0, p.jsx)("div", { className: "divider" }),
                            (null == v
                              ? void 0
                              : null === (c = v.last_year_today) || void 0 === c
                                ? void 0
                                : c.date) &&
                              (null == v
                                ? void 0
                                : null === (d = v.last_year_today) ||
                                    void 0 === d
                                  ? void 0
                                  : null === (_ = d.song_infos) || void 0 === _
                                    ? void 0
                                    : _.length) > 0 &&
                              k &&
                              (0, p.jsx)(Z, {
                                type: i,
                                clickMobileLog: a,
                                date: ""
                                  .concat(
                                    null ===
                                      (g = (0, r.fg)(
                                        null == v
                                          ? void 0
                                          : null === (m = v.last_year_today) ||
                                              void 0 === m
                                            ? void 0
                                            : m.date,
                                      )) || void 0 === g
                                      ? void 0
                                      : g.year,
                                    "/",
                                  )
                                  .concat(
                                    null ===
                                      (x = (0, r.fg)(
                                        null == v
                                          ? void 0
                                          : null === (L = v.last_year_today) ||
                                              void 0 === L
                                            ? void 0
                                            : L.date,
                                      )) || void 0 === x
                                      ? void 0
                                      : x.month,
                                    "/",
                                  )
                                  .concat(
                                    null ===
                                      (M = (0, r.fg)(
                                        null == v
                                          ? void 0
                                          : null === (E = v.last_year_today) ||
                                              void 0 === E
                                            ? void 0
                                            : E.date,
                                      )) || void 0 === M
                                      ? void 0
                                      : M.day,
                                  ),
                                tips: (0, p.jsx)(b.Z, {
                                  targetText:
                                    (null == v
                                      ? void 0
                                      : null === (D = v.last_year_today) ||
                                          void 0 === D
                                        ? void 0
                                        : null === (R = D.song_infos[0]) ||
                                            void 0 === R
                                          ? void 0
                                          : R.name) || "",
                                  width: 656,
                                  keepText:
                                    (null == v
                                      ? void 0
                                      : null === (T = v.last_year_today) ||
                                          void 0 === T
                                        ? void 0
                                        : null === (W = T.song_infos) ||
                                            void 0 === W
                                          ? void 0
                                          : W.length) > 1
                                      ? ["在听《", "》等歌曲"]
                                      : ["在听《", "》"],
                                  style: { fontSize: 24 },
                                }),
                                needJumpIcon: "normal" === i && k,
                                coverArr:
                                  null == v
                                    ? void 0
                                    : null === (O = v.last_year_today) ||
                                        void 0 === O
                                      ? void 0
                                      : O.song_infos,
                              }),
                            0 !== u &&
                              (null == v
                                ? void 0
                                : null === (B = v.longest_date) || void 0 === B
                                  ? void 0
                                  : null === (V = B.song_infos) || void 0 === V
                                    ? void 0
                                    : V.length) > 0 &&
                              (0, p.jsx)(F, {
                                type: i,
                                clickMobileLog: a,
                                needJumpIcon: "normal" === i && k,
                                date:
                                  null == v
                                    ? void 0
                                    : null === (P = v.longest_date) ||
                                        void 0 === P
                                      ? void 0
                                      : P.date,
                                coverArr:
                                  null == v
                                    ? void 0
                                    : v.longest_date.song_infos,
                                dateText: ""
                                  .concat(
                                    null == v
                                      ? void 0
                                      : null === (U = v.longest_date.date) ||
                                          void 0 === U
                                        ? void 0
                                        : U.slice(4, 6),
                                    "/",
                                  )
                                  .concat(
                                    null == v
                                      ? void 0
                                      : null === (H = v.longest_date.date) ||
                                          void 0 === H
                                        ? void 0
                                        : H.slice(6, 8),
                                  ),
                                tips: "听歌"
                                  .concat(
                                    null ===
                                      (z = (0, r.WJ)(
                                        null == v
                                          ? void 0
                                          : null === (Q = v.longest_date) ||
                                              void 0 === Q
                                            ? void 0
                                            : Q.duration,
                                      )) || void 0 === z
                                      ? void 0
                                      : z.count,
                                  )
                                  .concat(
                                    null ===
                                      (K = (0, r.WJ)(
                                        null == v
                                          ? void 0
                                          : null === ($ = v.longest_date) ||
                                              void 0 === $
                                            ? void 0
                                            : $.duration,
                                      )) || void 0 === K
                                      ? void 0
                                      : K.unit,
                                  ),
                              }),
                            0 !== u && !!(A || j || w) && (0, p.jsx)(Y, {}),
                            (0, p.jsx)(G, { type: i }),
                            (0, p.jsx)(J, {}),
                            (null == v
                              ? void 0
                              : null === (ee = v.rank_style) || void 0 === ee
                                ? void 0
                                : ee.length) &&
                              (0, p.jsx)("div", {
                                style: { marginBottom: (0, r.ht)(60) },
                                children: (0, p.jsx)(X.Z, {
                                  title: "#偏好曲风",
                                  name:
                                    null == v
                                      ? void 0
                                      : null === (en = v.rank_style) ||
                                          void 0 === en
                                        ? void 0
                                        : null === (et = en[0]) || void 0 === et
                                          ? void 0
                                          : et.style,
                                  desc:
                                    null != v &&
                                    null !== (ei = v.rank_style) &&
                                    void 0 !== ei &&
                                    null !== (eo = ei[0]) &&
                                    void 0 !== eo &&
                                    eo.total
                                      ? "听歌".concat(
                                          null == v
                                            ? void 0
                                            : null === (ea = v.rank_style) ||
                                                void 0 === ea
                                              ? void 0
                                              : null === (el = ea[0]) ||
                                                  void 0 === el
                                                ? void 0
                                                : el.count,
                                          "首",
                                        )
                                      : "",
                                  rank: (0, q.u)(
                                    null == v ? void 0 : v.rank_style,
                                  ),
                                  bgText: C.Ck.bg_rank_style,
                                  bgTextStyle: {
                                    width: (0, r.ht)(304),
                                    height: (0, r.ht)(59),
                                  },
                                  type: "rank",
                                }),
                              }),
                            (null == v
                              ? void 0
                              : null === (er = v.rank_language) || void 0 === er
                                ? void 0
                                : er.length) &&
                              (0, p.jsx)(X.Z, {
                                title: "#偏好语言",
                                name:
                                  null == v
                                    ? void 0
                                    : null === (es = v.rank_language) ||
                                        void 0 === es
                                      ? void 0
                                      : null === (ec = es[0]) || void 0 === ec
                                        ? void 0
                                        : ec.language,
                                desc:
                                  null != v &&
                                  null !== (ed = v.rank_language) &&
                                  void 0 !== ed &&
                                  null !== (eu = ed[0]) &&
                                  void 0 !== eu &&
                                  eu.total
                                    ? "听歌".concat(
                                        null == v
                                          ? void 0
                                          : null === (ev = v.rank_language) ||
                                              void 0 === ev
                                            ? void 0
                                            : null === (e_ = ev[0]) ||
                                                void 0 === e_
                                              ? void 0
                                              : e_.count,
                                        "首",
                                      )
                                    : "",
                                rank: (0, q.u)(v.rank_language),
                                bgText: C.Ck.bg_rank_language,
                                bgTextStyle: {
                                  width: (0, r.ht)(489),
                                  height: (0, r.ht)(59),
                                },
                                type: "rank",
                              }),
                          ],
                        });
                      default:
                        return (0, p.jsx)(p.Fragment, {});
                    }
                  })(),
                ],
              },
              "SpecialMemory",
            );
          }),
        );
    },
    35952: function (e, n, t) {
      "use strict";
      (t.d(n, {
        Z: function () {
          return m;
        },
      }),
        t(37667));
      var i = t(93967),
        o = t.n(i),
        a = t(33562),
        l = t(93452),
        r = t(93239),
        s = t(55723),
        c = t.n(s),
        d = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/split_line-white.d8d944c2.png",
          height: 36,
          width: 660,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAGElEQVR4nGPcvXs3KwMDAzMQowNGIP4DAEYOAzh7v0VvAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 1,
        },
        u = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/split_line-black.fec97bf9.png",
          height: 36,
          width: 660,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAFUlEQVR4nGNkYGBgBWJmIEYHILk/AAIfAQeThcqvAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 1,
        },
        v = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/split_line-hollow_white.b60bf545.png",
          height: 36,
          width: 660,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAKUlEQVR4nGN88Oq9poKY4M1DR46y//z+7T8DELBzcjHa2Vj/fPD6vRoABpgO5NvzMhwAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 1,
        },
        _ = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/split_line-hollow_black.8b69ff0d.png",
          height: 36,
          width: 660,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAHUlEQVR4nGNkYGDQBOKbQMwOxP+BGARA4j+BWA0AMKYDKthbcSoAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 1,
        },
        g = t(25965),
        m = (0, l.Z)(
          (0, a.Pi)(function (e) {
            var n = ((null == e ? void 0 : e.stores).dataStore || {}).skin,
              t = n === r.lu.BLACKV2 ? u : d;
            return (
              e.isHollow && (t = n === r.lu.BLACKV2 ? _ : v),
              (0, g.jsx)("div", {
                className: o()(
                  c().splitLine,
                  e.className,
                  e.isHollow && c().hollow,
                  c()[n],
                ),
                children: (0, g.jsx)("div", {
                  children: (0, g.jsx)("img", { src: t.src }),
                }),
              })
            );
          }),
        );
    },
    64652: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var i = t(37667),
        o = t(93967),
        a = t.n(o),
        l = t(33562),
        r = t(93452),
        s = t(93239),
        c = t(73263),
        d = t.n(c),
        u = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/split_line-vertical.28e29db8.png",
          height: 133,
          width: 7,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAYAAAA4GpVBAAAAFUlEQVR4nGPcvXu3FojQABGauAgNAIAHEti+53jDAAAAAElFTkSuQmCC",
          blurWidth: 1,
          blurHeight: 8,
        },
        v = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/split_line-vertical_black.40c1e023.png",
          height: 133,
          width: 7,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAYAAAA4GpVBAAAAFUlEQVR4nGNkYGDQAhEaIEITF6EBABiUAVBoUzfgAAAAAElFTkSuQmCC",
          blurWidth: 1,
          blurHeight: 8,
        },
        _ = t(25965),
        g = (0, r.Z)(
          (0, l.Pi)(function (e) {
            var n = ((null == e ? void 0 : e.stores).dataStore || {}).skin,
              t = (0, i.useState)(0),
              o = t[0],
              l = t[1],
              r = (0, i.useRef)(null),
              c = function () {
                if (
                  null != r &&
                  r.current &&
                  null != r &&
                  r.current.getBoundingClientRect
                ) {
                  var e =
                      null == r ? void 0 : r.current.getBoundingClientRect(),
                    n = e.width;
                  l(Math.ceil(e.height / ((n / 7) * 133)) || 1);
                }
              };
            (0, i.useEffect)(function () {
              ((0, i.startTransition)(function () {
                c();
              }),
                c());
            }, []);
            var g = n === s.lu.BLACKV2 ? v : u;
            return (0, _.jsx)("div", {
              className: a()(d().splitLine, e.className),
              style: e.style,
              ref: r,
              children: (0, _.jsx)("div", {
                children: Array.from({ length: o }).map(function (e, n) {
                  return (0, _.jsx)("img", { src: g.src }, n);
                }),
              }),
            });
          }),
        );
    },
    93179: function (e, n, t) {
      "use strict";
      var i = t(76792);
      t(37667);
      var o = t(93967),
        a = t.n(o),
        l = t(8683),
        r = t.n(l),
        s = t(22239),
        c = t(93452),
        d = t(11284),
        u = t(25965);
      function v(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i));
        }
        return t;
      }
      function _(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? v(Object(t), !0).forEach(function (n) {
                (0, i.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n),
                  );
                });
        }
        return e;
      }
      var g = function (e) {
        if (!(null != e && e.length)) return [];
        var n = e[0].num;
        return e.map(function (e) {
          var t = (e.num / n) * 65 + 35;
          return _(_({}, e), {}, { num: t <= 100 ? t : 100 });
        });
      };
      n.Z = (0, c.Z)(function (e) {
        var n,
          t = e.title,
          o = e.name,
          l = void 0 === o ? "" : o,
          c = e.songName,
          v = void 0 === c ? "" : c,
          _ = e.desc,
          m = void 0 === _ ? "" : _,
          p = e.albumAuthorDesc,
          h = void 0 === p ? "" : p,
          f = e.rank,
          x = void 0 === f ? [] : f,
          A = e.onClick,
          b = e.txtAbsolute,
          j = void 0 !== b && b,
          y = e.bgText,
          w = e.bgTextStyle,
          k = e.from,
          N = e.stores,
          C = e.type,
          S = e.img,
          L = N.dataStore,
          M = L.skin,
          I = L.dimension,
          E = Array.isArray(x) ? g(x) : [];
        return (0, u.jsxs)("div", {
          className: a()(
            r().V2Card,
            ((n = {}),
            (0, i.Z)(n, r().V2CardCircle, "circle" === C),
            (0, i.Z)(n, r().V2CardRank, "rank" === C),
            (0, i.Z)(n, r().year, 3 === I),
            n),
            [r()[M]],
          ),
          style: j ? { height: (0, s.ht)(200) } : {},
          onClick: A,
          children: [
            (0, u.jsx)("img", {
              alt: "",
              src: y,
              style: w,
              className: r().bgText,
            }),
            (0, u.jsxs)("div", {
              className: r().V2CardLeft,
              children: [
                (0, u.jsx)("div", {
                  className: a()(r().V2CardTitle, "impact_cn"),
                  children: (0, u.jsx)("span", {
                    children: void 0 === t ? "" : t,
                  }),
                }),
                !!l &&
                  (0, u.jsx)("div", {
                    className: a()(r().V2CardName, [
                      r()[void 0 === k ? "" : k],
                    ]),
                    dangerouslySetInnerHTML: { __html: l },
                  }),
                !!v &&
                  (0, u.jsxs)("div", {
                    className: a()(r().V2CardName, r().songName),
                    children: [
                      (0, u.jsx)("div", { className: r().p, children: "《" }),
                      (0, u.jsx)("div", {
                        className: r().inner,
                        dangerouslySetInnerHTML: { __html: v },
                      }),
                      (0, u.jsx)("div", { className: r().p, children: "》" }),
                    ],
                  }),
                !!m &&
                  (0, u.jsx)("div", {
                    className: a()("ellipsis", r().V2CardDesc),
                    children: m,
                  }),
                !!h &&
                  (0, u.jsx)("div", {
                    className: a()(r().V2CardDesc, r().V2CardAlbumAuthorDesc),
                    dangerouslySetInnerHTML: { __html: h },
                    style: j ? { position: "absolute" } : {},
                  }),
              ],
            }),
            ("circle" === C || "squre" === C || "big-squre" === C) &&
              (0, u.jsx)("div", {
                className: r().V2CardRight,
                children: (0, u.jsx)("div", {
                  className: r().V2CardImg,
                  children: (0, u.jsx)("img", {
                    src: (0, d.replaceHttpsImg)((0, s.Gn)(S)),
                    alt: "",
                  }),
                }),
              }),
            "rank" === C &&
              (0, u.jsx)("div", {
                className: r().V2CardRanks,
                children:
                  !!(null != E && E.length) &&
                  E.map(function (e, n) {
                    return (0, u.jsx)(
                      "div",
                      {
                        className: r().rankItem,
                        style: {
                          width: "".concat(null == e ? void 0 : e.num, "%"),
                        },
                        children: (0, u.jsx)("div", {
                          className: r().rankItemTitle,
                          children: null == e ? void 0 : e.title,
                        }),
                      },
                      n,
                    );
                  }),
              }),
          ],
        });
      });
    },
    75037: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return I;
        },
      });
      var i = t(76792),
        o = t(17468),
        a = t(82628),
        l = t.n(a),
        r = t(37667),
        s = t(93967),
        c = t.n(s),
        d = t(79683),
        u = t.n(d),
        v = t(2851),
        _ = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/play.58dfd0b8.png",
          height: 20,
          width: 20,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAR0lEQVR42mP4x8gABv9Y/kFZDP9U/y3/pw6kGf8xQQRs/v3/9/1fPogNFvpn+e/fv/9AePqfNAMDmgAOLWr/lv9TgxuKbi0ARj41Kd1Dww8AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        g = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/rank1.74c8f5ce.png",
          height: 36,
          width: 14,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAQAAACW5o33AAAAI0lEQVR42mP4l//v57/fDP/+/3sNojT/Nfz7z/CP4V8bfgoAWOAmWmLNdVwAAAAASUVORK5CYII=",
          blurWidth: 3,
          blurHeight: 8,
        },
        m = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/rank2.9eedbfde.png",
          height: 37,
          width: 27,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAQAAABwz0azAAAAWUlEQVR42h3MvQ1AYACE4aOwhSlMYQYtsQpaf401JIawBAqJERTv5yJvcnmqExEDwc3EYjFGem8rJjrkdm5JPzMCm0jM3LxIJVGZK8JszIeakkIcBN7//PwAPZBHkUI1rH0AAAAASUVORK5CYII=",
          blurWidth: 6,
          blurHeight: 8,
        },
        p = {
          src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/rank3.3ed24694.png",
          height: 37,
          width: 26,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAQAAABwz0azAAAAW0lEQVR42i3KMQ3CUBiF0btghJAggXpgwwQKEABVQGBixkcHRoYqqYEO529e05zl5uaLt9r8onN1MSj3aHrlJm12a/R3iGbvrAxxdFqP0RQf5eWr9LHzVGYPWQAMS0joufuRggAAAABJRU5ErkJggg==",
          blurWidth: 6,
          blurHeight: 8,
        },
        h = t(15337),
        f = t(93239),
        x = t(98875),
        A = t(48530),
        b = t(45225),
        j = t(22239),
        y = t(11284),
        w = t(93452),
        k = t(42240),
        N = t(55500),
        C = t(33562),
        S = t(55616),
        L = t(25965);
      function M(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i));
        }
        return t;
      }
      var I = (0, w.Z)(
        (0, C.Pi)(function (e) {
          var n,
            t,
            a,
            s = e.title,
            d = e.noRequest,
            w = void 0 === d || d,
            C = e.rankType,
            I = e.type,
            E = void 0 === I ? "" : I,
            D = e.arr,
            R = void 0 === D ? [] : D,
            T = e.dataType,
            Z = void 0 === T ? "" : T,
            W = e.onItemClick,
            O = (e.theme, e.needIcon),
            B = e.needFollow,
            V = void 0 !== B && B,
            F = e.from,
            P = void 0 === F ? "" : F,
            U = e.id,
            Y = e.stores,
            H = Y.dataStore,
            z = C === f.Jd.SINGER || C === f.Jd.SINGER_VEHICLE,
            G = (0, b.Z)({ dataStore: H }).mobileLog,
            Q = H.dimension,
            K = H.date,
            J = H.followList,
            q = H.skin,
            X = (0, h.Z)({ stores: Y, rankType: C }),
            $ = (X.getRankData, X.fixArr),
            ee = X.list;
          X.hasNext;
          var en = (0, r.useState)(!0),
            et = en[0];
          en[1];
          var ei = (0, r.useState)(J),
            eo = ei[0],
            ea = ei[1],
            el = (0, r.useMemo)(
              function () {
                return $(
                  w
                    ? et
                      ? R.slice(0, 3)
                      : R
                    : null != ee && ee.length
                      ? ee
                      : R.slice(0, 3),
                );
              },
              [R, ee, et],
            );
          (0, r.useEffect)(function () {
            (y.LightMobileCall.KgWebMobileCall(
              f.Ks.PAGE_STATUS_NEW,
              function (e) {
                e &&
                  3 == +(e = "string" == typeof e ? JSON.parse(e) : e).status &&
                  er();
              },
            ),
              V && !H.followList && er());
          }, []);
          var er =
              ((n = (0, o.Z)(
                l().mark(function e() {
                  var n, t, i, o, a, r;
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return ((e.next = 2), (0, k.zd)());
                        case 2:
                          (null == (t = e.sent)
                            ? void 0
                            : null === (n = t.data) || void 0 === n
                              ? void 0
                              : n.status) === 1 &&
                            ((r =
                              null == t
                                ? void 0
                                : null === (i = t.data) || void 0 === i
                                  ? void 0
                                  : null === (o = i.data) || void 0 === o
                                    ? void 0
                                    : null === (a = o.list) || void 0 === a
                                      ? void 0
                                      : a.map(function (e) {
                                          return e.singerid;
                                        })),
                            H.setFollowList(r),
                            ea(r));
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function () {
                return n.apply(this, arguments);
              }),
            es = function (e) {
              switch (e) {
                case 0:
                  return { src: g.src, className: [u().one] };
                case 1:
                  return { src: m.src, className: [u().two] };
                case 2:
                  return { src: p.src, className: [u().three] };
                default:
                  return "";
              }
            },
            ec = function () {
              var e,
                n,
                t,
                o =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              (G(
                (function (e) {
                  for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2
                      ? M(Object(t), !0).forEach(function (n) {
                          (0, i.Z)(e, n, t[n]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(t),
                          )
                        : M(Object(t)).forEach(function (n) {
                            Object.defineProperty(
                              e,
                              n,
                              Object.getOwnPropertyDescriptor(t, n),
                            );
                          });
                  }
                  return e;
                })(
                  {
                    a: 1131811,
                    b: "点击",
                    svar1: ((e = {}),
                    (0, i.Z)(e, f.Jd.SINGER, "收听歌手"),
                    (0, i.Z)(e, f.Jd.SONG, "收听歌曲"),
                    (0, i.Z)(e, f.Jd.SONG_LOOP, "收听歌曲"),
                    (0, i.Z)(e, f.Jd.SONG_VEHICLE, "收听歌曲"),
                    e)[C],
                    svar2: ((n = {}),
                    (0, i.Z)(n, f.Jd.SINGER, "歌手收听榜"),
                    (0, i.Z)(n, f.Jd.SONG, "歌曲收听榜"),
                    (0, i.Z)(n, f.Jd.SONG_LOOP, "单曲循环榜"),
                    (0, i.Z)(n, f.Jd.SONG_VEHICLE, "车载端歌曲收听榜"),
                    n)[C],
                  },
                  o,
                ),
              ),
                (C === f.Jd.SONG ||
                  C === f.Jd.SONG_LOOP ||
                  C === f.Jd.SONG_VEHICLE) &&
                  o.ivar1 &&
                  G({
                    a: 1132533,
                    b: "点击",
                    ft: "播放按钮点击",
                    svar1: ((t = {}),
                    (0, i.Z)(t, f.Jd.SONG, "歌曲收听榜"),
                    (0, i.Z)(t, f.Jd.SONG_LOOP, "单曲循环榜"),
                    (0, i.Z)(t, f.Jd.SONG_VEHICLE, "车载端歌曲收听榜"),
                    t)[C],
                    svar2: o.ivar1,
                  }));
            },
            ed =
              ((t = (0, o.Z)(
                l().mark(function e() {
                  var n, t;
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (ec({ svar3: "点击跳转" }),
                            (n = (0, j.G8)({
                              page: z ? "ranksinger" : "rank",
                              query: {
                                isHideTitleBar: 1,
                                dimension: Q,
                                date: null == K ? void 0 : K.format("YYYYMMDD"),
                                rankType: C,
                                skin: q,
                                sonicparams: "".concat(q, "_").concat(C),
                                sonic_remain_params: "sonicparams",
                              },
                            })),
                            !(
                              !y.LightMobileCall.isInClient() &&
                              "1" === (0, j.vH)().debug
                            ))
                          ) {
                            e.next = 5;
                            break;
                          }
                          return (window.open(n), e.abrupt("return"));
                        case 5:
                          return ((e.next = 7), (0, j.hj)());
                        case 7:
                          ((t = e.sent),
                            y.LightMobileCall.mobileCall(f.x8.openURL, {
                              isFullScreen: 1,
                              url: n,
                              hasBar: t ? 1 : 0,
                            }));
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function () {
                return t.apply(this, arguments);
              }),
            eu = function (e, n) {
              (ec({ svar3: "点击内容", ivar1: e.id }), W && W(e, n));
            },
            ev = function (e, n, t) {
              if (n) {
                (S.Z.confirm({
                  isDark: q === f.lu.BLACKV2,
                  title: "取消关注",
                  content: (0, L.jsxs)(L.Fragment, {
                    children: [
                      "取消后，关注时长将清零。",
                      (0, L.jsx)("br", {}),
                      "确定取消关注？",
                    ],
                  }),
                  confirmText: "确定取消",
                  cancelText: "继续关注",
                  confirmBtnStyle: { color: "#EE6655" },
                  onConfirm: function () {
                    return e_(e, n, t);
                  },
                }),
                  e && e.stopPropagation && e.stopPropagation());
                return;
              }
              e_(e, n, t);
            },
            e_ =
              ((a = (0, o.Z)(
                l().mark(function e(n, t, i) {
                  var o, a, r, s;
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((n && n.stopPropagation(), !t)) {
                            e.next = 8;
                            break;
                          }
                          return ((e.next = 4), (0, k.fv)({ singerid: i }));
                        case 4:
                          ((null == (a = e.sent)
                            ? void 0
                            : null === (o = a.data) || void 0 === o
                              ? void 0
                              : o.status) === 1
                            ? (y.KgToast.success("取消关注成功"),
                              G({
                                a: 1131811,
                                b: "点击",
                                svar1: "收听歌手",
                                svar2: "歌手收听榜",
                                svar3: "取消关注歌手",
                                svar5: i,
                              }))
                            : y.KgToast.fail("取消关注失败"),
                            (e.next = 12));
                          break;
                        case 8:
                          return ((e.next = 10), (0, k.ZN)({ singerid: i }));
                        case 10:
                          (null == (s = e.sent)
                            ? void 0
                            : null === (r = s.data) || void 0 === r
                              ? void 0
                              : r.status) === 1
                            ? (y.KgToast.success("关注成功"),
                              G({
                                a: 1131811,
                                b: "点击",
                                svar1: "收听歌手",
                                svar2: "歌手收听榜",
                                svar3: "关注歌手",
                                svar5: i,
                              }))
                            : y.KgToast.fail("关注失败");
                        case 12:
                          er();
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function (e, n, t) {
                return a.apply(this, arguments);
              });
          return (0, L.jsxs)("div", {
            className: c()(
              u().V2List,
              (0, i.Z)({}, u().pb, !0),
              [u()[q]],
              [u()[P]],
            ),
            style: O ? {} : { paddingBottom: (0, j.ht)(48) },
            id: void 0 === U ? "" : U,
            children: [
              s &&
                (0, L.jsxs)("div", {
                  className: c()(u().title, [u()[q]], "impact_cn"),
                  onClick: ed,
                  children: [
                    (0, L.jsx)("span", { children: s }),
                    O &&
                      (0, L.jsx)("img", {
                        alt: "",
                        src: v.Z.src,
                        className: u().jump,
                      }),
                  ],
                }),
              Array.isArray(el) &&
                el.map(function (e, n) {
                  var t,
                    o,
                    a,
                    l,
                    r = V
                      ? null == eo
                        ? void 0
                        : eo.some(function (n) {
                            return (
                              Number(n) === Number(null == e ? void 0 : e.id)
                            );
                          })
                      : null;
                  return (0, L.jsxs)(
                    "div",
                    {
                      className: c()(
                        u().item,
                        ((t = {}),
                        (0, i.Z)(t, u().circle, "circle" === E),
                        (0, i.Z)(t, u().squre, "squre" === E),
                        t),
                        u()[Z],
                      ),
                      onClick: eu.bind(null, e, n),
                      children: [
                        (0, L.jsx)("img", {
                          alt: "",
                          className: c()(
                            u().rankIcon,
                            null === (o = es(n)) || void 0 === o
                              ? void 0
                              : o.className,
                          ),
                          src:
                            null === (a = es(n)) || void 0 === a
                              ? void 0
                              : a.src,
                        }),
                        (0, L.jsx)("div", {
                          className: u().cover,
                          children: (0, L.jsx)("img", {
                            src:
                              (null == e ? void 0 : e.cover) ||
                              (z ? A.Z.src : x.Z.src),
                            alt: "",
                          }),
                        }),
                        (0, L.jsxs)("div", {
                          className: u().content,
                          children: [
                            (0, L.jsx)("div", {
                              className: c()(u().name, [u()[q]]),
                              children: (0, L.jsx)(N.Z, {
                                targetText:
                                  (null == e ? void 0 : e.title) || "",
                                width: V ? 280 : 300,
                                style: { fontSize: 30 },
                              }),
                            }),
                            z &&
                              (0, L.jsxs)("div", {
                                className: c()(u().songRankValue, u().singer, [
                                  u()[q],
                                ]),
                                children: [
                                  (0, L.jsx)("img", { alt: "", src: _.src }),
                                  (0, L.jsx)("span", {
                                    children: e.value || 1,
                                  }),
                                ],
                              }),
                            (0, L.jsx)("div", {
                              className: c()(u().author, [u()[q]]),
                              style: { marginTop: V ? 0 : (0, j.ht)(6) },
                              children: (0, L.jsx)(N.Z, {
                                targetText:
                                  (null == e ? void 0 : e.author) || "",
                                width: 300,
                                style: { fontSize: 22 },
                              }),
                            }),
                          ],
                        }),
                        (0, L.jsxs)("div", {
                          className: u().plays,
                          children: [
                            !z &&
                              (0, L.jsxs)("div", {
                                className: c()(
                                  u().songRankValue,
                                  [u()[q]],
                                  (0, i.Z)({}, u().share, !O || "year" === P),
                                ),
                                children: [
                                  (0, L.jsx)("img", { alt: "", src: _.src }),
                                  (0, L.jsx)("span", {
                                    children: e.value || 1,
                                  }),
                                ],
                              }),
                            V &&
                              (0, L.jsx)("div", {
                                className: c()(
                                  u().followBox,
                                  [u()[q]],
                                  "impact_cn",
                                  ((l = {}),
                                  (0, i.Z)(l, u().follow, !r),
                                  (0, i.Z)(l, u().followed, r),
                                  l),
                                ),
                                onClick: function (n) {
                                  return ev(n, r, e.id);
                                },
                                children: r ? "已关注" : "关注",
                              }),
                          ],
                        }),
                      ],
                    },
                    n,
                  );
                }),
            ],
          });
        }),
      );
    },
    55735: function (e, n, t) {
      "use strict";
      t.d(n, {
        B: function () {
          return l;
        },
        u: function () {
          return r;
        },
      });
      var i = t(76792);
      t(37667);
      var o = t(93239),
        a = t(25965),
        l = function (e, n) {
          var t,
            l =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : o.Sr.DAY;
          arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          var r = ((t = {}),
          (0, i.Z)(t, o.Sr.DAY, "昨日"),
          (0, i.Z)(t, o.Sr.WEEK, "上周"),
          (0, i.Z)(t, o.Sr.MONTH, "上月"),
          (0, i.Z)(t, o.Sr.YEAR, "去年"),
          t)[l];
          return e === n
            ? "和".concat(r, "持平")
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  "比",
                  r,
                  e > n ? "多" : "少",
                  "听",
                  (0, a.jsx)("span", { children: Math.abs(e - n) }),
                  "首",
                ],
              });
        },
        r = function (e) {
          return null != e && e.length
            ? e.slice(0, 5).map(function (e) {
                return {
                  title: e.style || e.language,
                  num: void 0 !== e.total ? e.total : e.count,
                };
              })
            : [];
        };
    },
    96360: function (e, n, t) {
      "use strict";
      t.d(n, {
        d: function () {
          return _;
        },
      });
      var i = t(17468),
        o = t(82628),
        a = t.n(o),
        l = t(62172),
        r = t.n(l),
        s = t(11284),
        c = t(93239),
        d = t(99850),
        u = t(37667),
        v = t(22239),
        _ = function () {
          var e,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = n.data,
            o = (void 0 === t ? null : t) || {},
            l = o.song_info,
            _ = void 0 === l ? {} : l,
            g = o.first_listen,
            m = o.accumulate_play,
            p = function (e) {
              return e
                ? r()(e.replace("{size}", 240))
                : "https://webvoobssdl.kugou.com/49dd6c2fd4ce8a90b64890dfc8166c08.png";
            },
            h = (0, u.useMemo)(
              function () {
                return p(null == _ ? void 0 : _.cover);
              },
              [null == _ ? void 0 : _.cover],
            );
          return {
            song_info: _,
            first_listen: void 0 === g ? {} : g,
            accumulate_play: void 0 === m ? {} : m,
            cover: h,
            gotoSongMemory: function (e) {
              var n = e.mixsongid,
                t = e.from,
                i = e.dateType,
                o = e.date,
                a = e.skin,
                l = void 0 === a ? "" : a,
                r = (0, v.G8)({
                  page: "songmemory",
                  query: {
                    isHideTitleBar: 1,
                    date: void 0 === o ? "" : o,
                    dateType: void 0 === i ? "" : i,
                    skin: l,
                    from: t,
                    mixsongid: n,
                    useListenStatisticsSkin: 1,
                    sonicparams: "".concat(l, "_").concat(n),
                    sonic_remain_params: "sonicparams",
                  },
                });
              if (!s.LightMobileCall.isInClient()) {
                window.location.search.indexOf("debug=1") > 0 && window.open(r);
                return;
              }
              s.LightMobileCall.mobileCall(c.x8.openURL, {
                isFullScreen: 1,
                url: r,
              });
            },
            gotoSingleSongMemory: function (e) {
              var n = e.mixsongid,
                t = e.from,
                i = e.dateType,
                o = e.date,
                a = e.useListenStatisticsSkin,
                l = e.skin,
                r = void 0 === l ? "" : l,
                d = (0, v.G8)({
                  page: "singlesongmemory",
                  query: {
                    isHideTitleBar: 1,
                    date: void 0 === o ? "" : o,
                    dateType: void 0 === i ? "" : i,
                    skin: r,
                    from: t,
                    mixsongid: n,
                    useListenStatisticsSkin: void 0 === a ? "" : a,
                    sonicparams: "".concat(r, "_").concat(n),
                    sonic_remain_params: "sonicparams",
                  },
                });
              if (!s.LightMobileCall.isInClient()) {
                window.location.search.indexOf("debug=1") > 0 && window.open(d);
                return;
              }
              s.LightMobileCall.mobileCall(c.x8.openURL, {
                isFullScreen: 1,
                url: d,
              });
            },
            getBgStyle:
              ((e = (0, i.Z)(
                a().mark(function e(n, t) {
                  var i,
                    o,
                    l = arguments;
                  return a().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (i = l.length > 2 && void 0 !== l[2] ? l[2] : 0.15),
                            (e.next = 3),
                            (0, d.pe)({
                              src: n,
                              saturation: 1,
                              lightness: 1,
                              opacity: i,
                            })
                          );
                        case 3:
                          return (
                            (o = e.sent),
                            null == t || t({ backgroundColor: o }),
                            e.abrupt("return", { backgroundColor: o })
                          );
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              function (n, t) {
                return e.apply(this, arguments);
              }),
            getCover: p,
          };
        };
    },
    26500: function (e, n, t) {
      "use strict";
      (t.r(n),
        t.d(n, {
          getImgColor: function () {
            return u;
          },
          getThemeColor: function () {
            return d;
          },
          replaceAlpha: function () {
            return v;
          },
        }));
      var i = t(17468),
        o = t(82628),
        a = t.n(o),
        l = t(13298),
        r = t(77813),
        s = new ((function () {
          function e(n) {
            if (((0, l.Z)(this, e), (n = n || {}), !(this instanceof e)))
              return new e(n);
            ((this.canvas =
              document.querySelector(n.canvas) ||
              document.createElement("canvas")),
              (this.ctx = this.canvas.getContext("2d")),
              (this.pixelRatio = window.devicePixelRatio || 1),
              (this.hideMode = !document.querySelector(n.canvas)),
              (this.fre_count = 0),
              this.hideMode ||
                ((this.canvas.width =
                  this.pixelRatio *
                  parseInt(getComputedStyle(this.canvas).width)),
                (this.canvas.height =
                  this.pixelRatio *
                  parseInt(getComputedStyle(this.canvas).height))));
          }
          return (
            (0, r.Z)(e, [
              {
                key: "drawWebPic",
                value: function (e, n) {
                  var t = this,
                    i = new Image();
                  i.crossOrigin = "anonymous";
                  var o = this.canvas.width,
                    a = this.canvas.height;
                  (i.addEventListener("load", function () {
                    (t.ctx.clearRect(0, 0, o, a),
                      t.hideMode
                        ? ((e =
                            i.width < window.innerWidth
                              ? 1
                              : window.innerWidth / i.width),
                          (l =
                            i.height < window.innerHeight
                              ? 1
                              : window.innerHeight / i.height))
                        : ((e = i.width < o ? 1 : o / i.width),
                          (l = i.height < a ? 1 : a / i.height)));
                    var e,
                      l,
                      r = Math.min(e, l),
                      s = i.width * r,
                      c = i.height * r;
                    ((t.imgWidth = s),
                      (t.imgHeight = c),
                      t.hideMode
                        ? ((t.canvas.width = s),
                          (t.canvas.height = c),
                          t.ctx.drawImage(
                            i,
                            0,
                            0,
                            i.width,
                            i.height,
                            0,
                            0,
                            s,
                            c,
                          ))
                        : t.ctx.drawImage(
                            i,
                            0,
                            0,
                            i.width,
                            i.height,
                            (o - s) / 2,
                            (a - c) / 2,
                            s,
                            c,
                          ),
                      n instanceof Function && n(i));
                  }),
                    (i.src = e));
                },
              },
              {
                key: "censusColors",
                value: function (e, n) {
                  if (this.imgWidth && this.imgHeight) {
                    var t,
                      i,
                      o,
                      a = this.canvas.width,
                      l = this.canvas.height,
                      r = this.imgWidth,
                      s = this.imgHeight,
                      c =
                        r * s < 25e4
                          ? this.pixelRatio > 1
                            ? 6
                            : 5
                          : this.pixelRatio > 1
                            ? 10
                            : 8,
                      d = this.ctx.getImageData((a - r) / 2, (l - s) / 2, r, s);
                    if (d) {
                      var u = d.height,
                        v = d.width,
                        _ = [],
                        g = [];
                      this.fre_count = 0;
                      for (var m = 1; m < u - 1;) {
                        for (var p = 1; p < v - 1;) {
                          (this.fre_count++, (t = d.data[m * v * 4 + 4 * p]));
                          var h =
                              1e6 * Math.floor(t / 10) +
                              1e3 *
                                Math.floor(
                                  (i = d.data[m * v * 4 + 4 * p + 1]) / 10,
                                ) +
                              Math.floor(
                                (o = d.data[m * v * 4 + 4 * p + 2]) / 10,
                              ),
                            f = _.indexOf(h);
                          if (f < 0) {
                            _.push(h);
                            var x = (function (e, n, t) {
                              var i,
                                o,
                                a = Math.max(
                                  (e /= 255),
                                  (n /= 255),
                                  (t /= 255),
                                ),
                                l = Math.min(e, n, t),
                                r = (a + l) / 2;
                              if (a === l) i = o = 0;
                              else {
                                var s = a - l;
                                switch (
                                  ((o =
                                    r > 0.5 ? s / (2 - a - l) : s / (a + l)),
                                  a)
                                ) {
                                  case e:
                                    i = (n - t) / s + (n < t ? 6 : 0);
                                    break;
                                  case n:
                                    i = (t - e) / s + 2;
                                    break;
                                  case t:
                                    i = (e - n) / s + 4;
                                }
                                i *= 60;
                              }
                              return [i, 100 * o, 100 * r];
                            })(t, i, o);
                            g.push({
                              key: h,
                              fre: 1,
                              r: t,
                              g: i,
                              b: o,
                              h: x[0],
                              s: x[1],
                              l: x[2],
                              category: -1,
                            });
                          } else g[f].fre++;
                          p += c;
                        }
                        m += c;
                      }
                      var A = _.length,
                        b = 0,
                        j = this.fre_count;
                      ((A = (g = g.filter(function (e) {
                        return (b += e.fre) / j < 0.85;
                      })).length),
                        g.sort(function (e, n) {
                          return n.fre - e.fre;
                        }));
                      for (var y = [], w = 0; w < A; w++) {
                        var k = y.length;
                        if (!w) {
                          (y.push({ h: g[w].h, s: g[w].s, l: g[w].l }),
                            (g[w].category = 0));
                          continue;
                        }
                        for (var N = 0; N < k; N++) {
                          var C = Math.abs(y[N].h - g[w].h),
                            S = Math.abs(y[N].s - g[w].s),
                            L = Math.abs(y[N].l - g[w].l);
                          if (C < 15 && S < 15 && L < 15) break;
                        }
                        if (
                          (N === k &&
                            (y.push({ h: g[w].h, s: g[w].s, l: g[w].l }),
                            (g[w].category = y.length - 1)),
                          y.length >= e)
                        )
                          break;
                      }
                      var M = this.kMC(g, y, 100);
                      n instanceof Function && n(g, M);
                    }
                  }
                },
              },
              {
                key: "kMC",
                value: function (e, n, t) {
                  for (var i = 0; i++ < t;) {
                    n = n.filter(function (e) {
                      return e;
                    });
                    for (var o = e.length, a = (o / 8) ^ 0, l = o % 8; l--;)
                      this.classifyColor(e[l], n);
                    for (; a--;)
                      (this.classifyColor(e[--o], n),
                        this.classifyColor(e[--o], n),
                        this.classifyColor(e[--o], n),
                        this.classifyColor(e[--o], n),
                        this.classifyColor(e[--o], n),
                        this.classifyColor(e[--o], n),
                        this.classifyColor(e[--o], n),
                        this.classifyColor(e[--o], n));
                    o = e.length;
                    for (var r = [], s = void 0; o--;)
                      r[(s = e[o].category)]
                        ? (r[s].fre_count += e[o].fre)
                        : ((r[s] = {}),
                          (r[s].h = 0),
                          (r[s].s = 0),
                          (r[s].l = 0),
                          (r[s].fre_count = e[o].fre));
                    for (o = e.length; o--;)
                      ((s = e[o].category),
                        (r[s].h += (e[o].h * e[o].fre) / r[s].fre_count),
                        (r[s].s += (e[o].s * e[o].fre) / r[s].fre_count),
                        (r[s].l += (e[o].l * e[o].fre) / r[s].fre_count));
                    var c = r.every(function (e, t) {
                      return (
                        0.5 > Math.abs(e.h - n[t].h) &&
                        0.5 > Math.abs(e.s - n[t].s) &&
                        0.5 > Math.abs(e.l - n[t].l)
                      );
                    });
                    if (
                      ((n = r.map(function (e, n) {
                        return { h: e.h, s: e.s, l: e.l };
                      })),
                      c)
                    )
                      break;
                  }
                  return n;
                },
              },
              {
                key: "classifyColor",
                value: function (e, n) {
                  for (var t, i = n.length, o = 1e4; i--;) {
                    var a =
                      Math.abs(n[i].h - e.h) +
                      Math.abs(n[i].s - e.s) +
                      Math.abs(n[i].l - e.l);
                    a < o && ((o = a), (t = i));
                  }
                  e.category = t;
                },
              },
            ]),
            e
          );
        })())(),
        c = [],
        d = function (e) {
          return new Promise(function (n, t) {
            var i = new Image();
            ((i.crossOrigin = ""),
              (i.style.objectFit = "fill"),
              (i.onload = function () {
                var e = document.createElement("canvas").getContext("2d");
                e.drawImage(
                  i,
                  0,
                  0,
                  i.width,
                  i.height,
                  0,
                  0,
                  i.width,
                  i.height,
                );
                for (
                  var t = e.getImageData(0, 0, i.width, i.height).data,
                    o = [],
                    a = 0;
                  a < t.length;
                  a += 4
                ) {
                  var l = t[a],
                    r = t[a + 1],
                    s = t[a + 2],
                    d = t[a + 3];
                  d > 125 && o.push([l, r, s, d]);
                }
                (console.time("colorUtils-getThemeColor"),
                  (function e(n) {
                    for (
                      var t = n[0][0],
                        i = n[0][0],
                        o = n[0][1],
                        a = n[0][1],
                        l = n[0][2],
                        r = n[0][2],
                        s = 0;
                      s < n.length;
                      s++
                    )
                      (n[s][0] > t && (t = n[s][0]),
                        n[s][0] < i && (i = n[s][0]),
                        n[s][1] > o && (o = n[s][1]),
                        n[s][1] < a && (a = n[s][1]),
                        n[s][2] > l && (l = n[s][2]),
                        n[s][2] < r && (r = n[s][2]));
                    if (t - i < 100 && o - a < 100 && l - r < 100) {
                      for (var d = 0, u = 0, v = 0, _ = 0; _ < n.length; _++)
                        ((d += n[_][0]), (u += n[_][1]), (v += n[_][2]));
                      var g = "rgba("
                          .concat(Math.ceil(d / n.length), ", ")
                          .concat(Math.ceil(u / n.length), ", ")
                          .concat(Math.ceil(v / n.length), ")"),
                        m = document.getElementById("imageColors");
                      if (m) {
                        var p = document.createElement("div");
                        ((p.style.backgroundColor =
                          "rgba(" +
                          d / n.length +
                          "," +
                          u / n.length +
                          "," +
                          v / n.length +
                          ")"),
                          (p.style.width = "100px"),
                          (p.style.height = "100px"),
                          m.appendChild(p));
                      }
                      c.push(g);
                    } else {
                      var h = 0,
                        f = 0,
                        x = 0;
                      (t - i > 0 && ((h = t - i), (x = (t + i) / 2), (f = 0)),
                        o - a > h && ((h = o - a), (x = (o + a) / 2), (f = 1)),
                        l - r > h && ((h = l - r), (x = (l + r) / 2), (f = 2)),
                        n.sort(function (e, n) {
                          return e[f] - n[f];
                        }));
                      for (var A = [], b = [], j = 0; j < n.length; j++)
                        n[j][f] < x ? A.push(n[j]) : b.push(n[j]);
                      (e(b), e(A));
                    }
                  })(o),
                  console.timeEnd("colorUtils-getThemeColor"),
                  n(c));
              }),
              (i.src = e));
          });
        },
        u = function (e) {
          var n;
          return new Promise(
            ((n = (0, i.Z)(
              a().mark(function n(t) {
                return a().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        s.drawWebPic(e, function (e) {
                          s.censusColors(5, function (e, n) {
                            for (
                              var i = e.length, o = 0, a = 0, l = 0, r = 0;
                              i--;
                            )
                              ((o += e[i].r * e[i].fre),
                                (a += e[i].g * e[i].fre),
                                (l += e[i].b * e[i].fre),
                                (r += e[i].fre));
                            t(
                              "rgba("
                                .concat(Math.floor(o / r) || 255, ",")
                                .concat(Math.floor(a / r) || 255, ",")
                                .concat(Math.floor(l / r) || 255, ")"),
                            );
                          });
                        });
                      case 1:
                      case "end":
                        return n.stop();
                    }
                }, n);
              }),
            )),
            function (e) {
              return n.apply(this, arguments);
            }),
          );
        };
      function v(e, n) {
        try {
          if (n < 0 || n > 1)
            return (console.error("透明度值必须在0~1之间"), e);
          return e.replace(
            /(rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*)[\d.]+(\s*\))/,
            "$1".concat(n, "$2"),
          );
        } catch (n) {
          return e;
        }
      }
    },
    85232: function (e, n, t) {
      "use strict";
      t.d(n, {
        w: function () {
          return c;
        },
      });
      var i = t(17468),
        o = t(82628),
        a = t.n(o),
        l = t(11284),
        r = t(93239),
        s = t(22239);
      function c() {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = (0, i.Z)(
          a().mark(function e() {
            var n,
              t,
              i,
              o,
              c,
              d,
              u,
              v,
              _ = arguments;
            return a().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((t = (n = _.length > 0 && void 0 !== _[0] ? _[0] : {})
                        .dimension),
                      (i = n.date),
                      (o = n.skin),
                      (d = {
                        isHideTitleBar: 1,
                        sonic_remain_params: "sonicparams,dimension,date",
                        invite_friend_popup:
                          void 0 === (c = n.inviteFriendPopup) ? 0 : c,
                      }),
                      void 0 !== t && (d.dimension = t),
                      i && (d.date = i),
                      o &&
                        ((d.skin = o),
                        (d.sonicparams = "".concat(o, "_friendrank"))),
                      (u = (0, s.G8)({ page: "friendrank", query: d })),
                      !(
                        !l.LightMobileCall.isInClient() &&
                        "1" === (0, s.vH)().debug
                      ))
                    ) {
                      e.next = 10;
                      break;
                    }
                    return (window.open(u), e.abrupt("return"));
                  case 10:
                    return ((e.next = 12), (0, s.hj)());
                  case 12:
                    ((v = e.sent),
                      l.LightMobileCall.mobileCall(r.x8.openURL, {
                        browser: 0,
                        isFullScreen: 1,
                        url: u,
                        hasBar: v ? 1 : 0,
                      }));
                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
    },
    99850: function (e, n, t) {
      "use strict";
      function i(e, n) {
        if (!e) {
          console.error("addScrollListener: ", e);
          return;
        }
        e.addEventListener("scroll", n);
      }
      function o(e, n) {
        if (!e) {
          console.error("removeScrollListener: ", e);
          return;
        }
        e.removeEventListener("scroll", n);
      }
      function a(e) {
        return e
          ? e.pageYOffset || e.scrollTop || 0
          : window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0;
      }
      function l(e) {
        var n = e.src,
          t = e.saturation,
          i = e.lightness,
          o = e.opacity,
          a = e.returnRGBA,
          l = void 0 !== a && a,
          r = e.isPlayerBg,
          s = void 0 !== r && r;
        return new Promise(function (e) {
          var a = new Image();
          (a.setAttribute("crossOrigin", ""),
            (a.src = n),
            (a.onload = function () {
              var n = a.width,
                r = a.height,
                c = document.createElement("canvas"),
                d = c.getContext("2d");
              ((c.width = n), (c.height = r), d.drawImage(a, 0, 0, n, r));
              for (
                var u = d.getImageData(0, 0, c.width, c.height).data,
                  v = c.width * c.height,
                  _ = 0,
                  g = 0,
                  m = 0,
                  p = 0,
                  h = 0;
                h < v;
                h++
              ) {
                var f = u[4 * h],
                  x = u[4 * h + 1],
                  A = u[4 * h + 2],
                  b = u[4 * h + 3];
                ((_ += f), (g += x), (m += A), (p += b));
              }
              var j = Math.floor(_ / v),
                y = Math.floor(g / v),
                w = Math.floor(m / v),
                k = Math.floor(p / v),
                N =
                  ((T =
                    (D = Math.max(
                      (M = j / 255),
                      (I = y / 255),
                      (E = w / 255),
                    )) - (R = Math.min(M, I, E))),
                  (Z = 0),
                  D === R
                    ? (Z = 0)
                    : D === M
                      ? (Z = ((I - E) / T) % 6)
                      : D === I
                        ? (Z = (E - M) / T + 2)
                        : D === E && (Z = (M - I) / T + 4),
                  (Z *= 60) < 0 && (Z += 360),
                  { h: Z, s: 0 === D ? 0 : T / D, v: D }),
                C = {
                  h: N.h,
                  s: null != t ? t : N.s,
                  v: null != i ? i : N.v,
                  a: null != o ? o : k,
                };
              if (s) {
                var S = C.s,
                  L = C.v;
                if (S < 0.03 || L < 0.1 || (S < 0.03 && L > 0.2)) {
                  e("rgba(137, 143, 153, ".concat(C.a, ")"));
                  return;
                }
                (S < 0.1
                  ? (C.s = 0.1)
                  : S < 0.65
                    ? (C.s = 0.65)
                    : S > 0.75 && (C.s = 0.75),
                  L < 0.25 ? (C.v = 0.25) : L > 0.35 && (C.v = 0.35));
              }
              if (C) {
                var M,
                  I,
                  E,
                  D,
                  R,
                  T,
                  Z,
                  W,
                  O,
                  B,
                  V,
                  F,
                  P,
                  U,
                  Y,
                  H,
                  z,
                  G =
                    ((V = C.h),
                    (F = C.s),
                    (P = C.v),
                    (U = C.a),
                    (H = (Y = P * F) * (1 - Math.abs(((V / 60) % 2) - 1))),
                    (z = P - Y),
                    V >= 0 && V < 60
                      ? ((W = Y), (O = H), (B = 0))
                      : V >= 60 && V < 120
                        ? ((W = H), (O = Y), (B = 0))
                        : V >= 120 && V < 180
                          ? ((W = 0), (O = Y), (B = H))
                          : V >= 180 && V < 240
                            ? ((W = 0), (O = H), (B = Y))
                            : V >= 240 && V < 300
                              ? ((W = H), (O = 0), (B = Y))
                              : V >= 300 &&
                                V < 360 &&
                                ((W = Y), (O = 0), (B = H)),
                    {
                      r: (W = Math.round((W + z) * 255)),
                      g: (O = Math.round((O + z) * 255)),
                      b: (B = Math.round((B + z) * 255)),
                      a: U,
                    }),
                  Q = G.r,
                  K = G.g,
                  J = G.b,
                  q = G.a;
                if (l) return e({ r: Q, g: K, b: J, a: q });
                e(
                  "rgba("
                    .concat(Q, ",")
                    .concat(K, ",")
                    .concat(J, ",")
                    .concat(q, ")"),
                );
              }
            }));
        });
      }
      function r(e) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        if (!e || "string" != typeof e) return 0;
        for (var t = 0, i = 0; i < e.length; i++) t += e.charCodeAt(i);
        return t % n;
      }
      t.d(n, {
        KR: function () {
          return o;
        },
        Sn: function () {
          return i;
        },
        Yo: function () {
          return r;
        },
        cx: function () {
          return a;
        },
        pe: function () {
          return l;
        },
      });
    },
    23951: function (e, n) {
      "use strict";
      n.Z = {
        src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/cd_texture.b26e5a25.png",
        height: 220,
        width: 220,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAhFBMVEX////9/f339/f29vb09PTv7+/u7u7l5eXi4uLg4OHW1tfV1dbU1NXS0tK8vL2oqKmioqKenp+Xl5iGhodxcXQAAAD4+Pjs7Ozq6urR0dEAAADy8vLQ0NHk5OTg4OH4+PiHh4fW1ta/v7+vr7CWlpbr6+vt7e3h4eHz8/Pq6ur09PT19fVT/N0SAAAALHRSTlMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQIGBgoLFxcYGBseJCgsMDA2WsTAcl0AAABESURBVHjaFcbFAYAwAAPAYMWd4u6y/36k9zpIaUG7JwNMqb9fxwinEsepYtb28DB+0YTjxXhxGs0bE+TZureMCyx98gOvqQT/wJYHqQAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    60235: function (e, n) {
      "use strict";
      n.Z = {
        src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/kgLogoWhite.46eb2f24.png",
        height: 40,
        width: 150,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAKklEQVR42mP4t//f5n9F/4r/pQJh4r9ghn/b/234V/iv4F/Iv5x/if98AZzdF2zir32eAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    2851: function (e, n) {
      "use strict";
      n.Z = {
        src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/jump.7f1163f1.png",
        height: 24,
        width: 24,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEX/1ln+1ln+1Vn+1ln91Vn/2Fr/11r91Vn/2Fr/11r/2lv/11n91Vn/3l3tyFT/21v/2Vv91ln91Vn50ljwylXYtk3WtUwiIh4AABo7byxRAAAAD3RSTlMAAAAqKr29vevr+Pj4+fnCOM0XAAAANElEQVR42mNgZGHl4mFjZmBg4RAW4RfkZGZgF+ATF+MVYmPgFuQXlRDl54Ez4FIIxUxQ7QBuSwMQgR3NMAAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    48320: function (e, n) {
      "use strict";
      n.Z = {
        src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/icon_listen.8406d889.png",
        height: 26,
        width: 27,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAYUlEQVR42g3IMQrCUAAE0fkStPErqCBibQottDFF0oVAmtS5/0mGLA+WYbGI1VccxQL4dPLrL/sQPDhaJc6pPXn/4i6w8443F1uJNnUlx+og0acueHL2I/FOVcDGIpJtZAMgqUOrXRbVxgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    77449: function (e, n) {
      "use strict";
      n.Z = {
        src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/icon_listen_black.c3d46707.png",
        height: 30,
        width: 30,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAATElEQVR42gXAMQqDQBAAwHEJiYEEBV0sTsTS69RO8P/vEhq8pdQC9KpZUY3wUn1A2LR0VoRAkfycCkingb/LBla35Gu3gMmhg9AAggcIEwP1DEXrzgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    81604: function (e, n) {
      "use strict";
      n.Z = {
        src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/icon_play.b9ba8b00.png",
        height: 26,
        width: 26,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAASElEQVR42mNAgH+MCKbJPy0UoX/O/8L+2f8TRKiw/+cPhH7/tKBq/jn88//n8y/kn/U/JphA6D/vf8oILXb/bP5xIVvIibADAM+UImPxALRBAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    69047: function (e, n) {
      "use strict";
      n.Z = {
        src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/icon_play_big.45ac8cbe.png",
        height: 44,
        width: 44,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAATUlEQVR42mNgYPjPyMDAwPCfhQEB3oWcl2Fg+M/8hJGBASz/69qfzy8CGBgYGD4xggV+Hvr//9//7xsP8zEwYAhgagGB9yHnEIaiWwsA6mMsYcap+wsAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    30315: function (e, n) {
      "use strict";
      n.Z = {
        src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/icon_play_black.bbf520ba.png",
        height: 30,
        width: 30,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAARUlEQVR42k3NIQ6AIABA0WdyI2hxg+ABKAamg+n9D2ZiUH545cNiFByydcbkU0QAoupWZaFDUzxeaUB12QCS5pwvwT4ePwdEBBIDzmTvAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    32257: function (e, n) {
      "use strict";
      n.Z = {
        src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/play_icon.c7ff3dc1.png",
        height: 72,
        width: 72,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAASklEQVR42mNgYHjOzAAE/1nuMDJAwHPJn3veWzIAwU9mBhC4I/H3/7//3zsYgOA/EwMDw32Jvx/+A8Gfxx/sGBjQBTC1YBqKbi0AZiIx++kcidQAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    12557: function (e, n) {
      "use strict";
      n.Z = {
        src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/play_icon_pause.4e51bced.png",
        height: 60,
        width: 60,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAOUlEQVR42mNgYHil8j78Ad8Dvvfhr1QYQOB7y9//ry1eW/z9/70FLPCj6R9Y4N//H01kCWAaim4tAC3eREEx4MJHAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    49553: function (e, n) {
      "use strict";
      n.Z = {
        src: "https://h5.kugou.com/apps/listen-report-next/_next/static/media/shadow.70fe7e70.png",
        height: 30,
        width: 240,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAEUlEQVR4nGNkYGDggmJs4AsAA1IBCtNLe5QAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 1,
      };
    },
    36977: function (e) {
      e.exports = {
        wrap: "ListenModule_wrap__TuBpv",
        songTitle: "ListenModule_songTitle__30iY1",
        content: "ListenModule_content___VfO9",
        tip: "ListenModule_tip__sAVlK",
        icon: "ListenModule_icon__3spG0",
        listenTime: "ListenModule_listenTime__b4uOn",
        listenTotal: "ListenModule_listenTotal__9KjVv",
        listenPeriod: "ListenModule_listenPeriod__PsvTm",
        listenLatest: "ListenModule_listenLatest__2CdV_",
        favSong: "ListenModule_favSong__Lh7LT",
        favSinger: "ListenModule_favSinger__TqPPp",
        title: "ListenModule_title__406Vg",
        subContent: "ListenModule_subContent__Nh5Ki",
        up: "ListenModule_up__hxwDs",
        coverBg: "ListenModule_coverBg__XOLYc",
        cover: "ListenModule_cover__Xe6Yl",
        out: "ListenModule_out__72hLw",
        middle: "ListenModule_middle___l0TO",
        avatar: "ListenModule_avatar__LG5Vj",
      };
    },
    12211: function (e) {
      e.exports = {
        wrap: "PreloadErrorBoundary_wrap__cVGXv",
        text: "PreloadErrorBoundary_text__4jS20",
      };
    },
    67188: function (e) {
      e.exports = {
        wrap: "NewSinger_wrap__bkiA_",
        title: "NewSinger_title__DsdDr",
        count: "NewSinger_count__cAORY",
        singerName: "NewSinger_singerName__naYo7",
        coverWrap: "NewSinger_coverWrap__LPBF1",
        cover: "NewSinger_cover__vgw24",
      };
    },
    63896: function (e) {
      e.exports = {
        song_module: "SongModule_song_module__LgT3_",
        wrap: "SongModule_wrap__ztGnW",
        filter_bg: "SongModule_filter_bg__uRTzR",
        coverArr: "SongModule_coverArr__WnqU5",
        cover: "SongModule_cover__rxBmi",
        newFavorite: "SongModule_newFavorite__w88_j",
        pic0: "SongModule_pic0__6zDwJ",
        pic1: "SongModule_pic1__U3QXe",
        pic2: "SongModule_pic2___BGrN",
        title: "SongModule_title__W2_8b",
        content: "SongModule_content__zMo9e",
        tip: "SongModule_tip__d8P1X",
      };
    },
    16175: function (e) {
      e.exports = {
        wrap: "Comment_wrap__kO69f",
        title: "Comment_title__fsprO",
        content: "Comment_content__KD2zG",
        quote: "Comment_quote__VFQhV",
        tag: "Comment_tag__kQ8NZ",
        comment: "Comment_comment__NrXtB",
        from: "Comment_from__Z7xWM",
        otherInfo: "Comment_otherInfo__DngkB",
        item: "Comment_item__Vm_g5",
        divider: "Comment_divider__cwyUB",
        name: "Comment_name__Jqq09",
        count: "Comment_count__Hwdfr",
      };
    },
    33374: function (e) {
      e.exports = {
        wrap: "LastYearToday_wrap__WG_FK",
        title: "LastYearToday_title__44m__",
        content: "LastYearToday_content__ES5DY",
        tip: "LastYearToday_tip__hB9u2",
        cover: "LastYearToday_cover__EzDKC",
        pic0: "LastYearToday_pic0__YA4NE",
        pic1: "LastYearToday_pic1__5TXJ5",
        pic2: "LastYearToday_pic2__myRV6",
      };
    },
    56417: function (e) {
      e.exports = {
        wrap: "ListenLongest_wrap__9mL_R",
        title: "ListenLongest_title__alc8D",
        content: "ListenLongest_content__n3loA",
        tip: "ListenLongest_tip___Rogc",
        cover: "ListenLongest_cover__hwDlt",
        pic0: "ListenLongest_pic0__0TXec",
        pic1: "ListenLongest_pic1__4SvgS",
        pic2: "ListenLongest_pic2__rAwH1",
      };
    },
    98961: function (e) {
      e.exports = {
        wrap: "Chart_wrap__0q0Y_",
        black: "Chart_black__prHaF",
        listenCount: "Chart_listenCount__gHdWw",
        day: "Chart_day__a_Yqr",
        chart: "Chart_chart__fgULM",
      };
    },
    96930: function (e) {
      e.exports = { container: "ChartCanvas_container__GS4eP" };
    },
    38049: function (e) {
      e.exports = {
        chart: "ChartMagazine_chart__a4J2g",
        topArea: "ChartMagazine_topArea__D86mN",
        summery: "ChartMagazine_summery__wWKEp",
        label: "ChartMagazine_label__oasax",
        tips: "ChartMagazine_tips__9EbU9",
        defaultTips: "ChartMagazine_defaultTips__HucGX",
        value: "ChartMagazine_value__9DQGn",
        bottomArea: "ChartMagazine_bottomArea__4JfvR",
        item: "ChartMagazine_item__evFEy",
        middle: "ChartMagazine_middle__mCL1p",
      };
    },
    99862: function (e) {
      e.exports = {
        wrap: "ListItem_wrap__wSPhK",
        content: "ListItem_content__k1use",
        left: "ListItem_left__OJJvv",
        collectItemLfet: "ListItem_collectItemLfet__nhsJf",
        right: "ListItem_right__P_xSM",
        collectItemRight: "ListItem_collectItemRight__vBtu8",
        collcetCover: "ListItem_collcetCover__1bar6",
        specialTimeCover: "ListItem_specialTimeCover__085kl",
        value: "ListItem_value__pBrDX",
        day: "ListItem_day___ldZc",
        valueTip: "ListItem_valueTip__cLG2O",
      };
    },
    23692: function (e) {
      e.exports = {
        wrap: "YearTab_wrap__c7mzX",
        magazine: "YearTab_magazine__5w_AG",
        value: "YearTab_value__bfJGT",
        label: "YearTab_label__8rCYv",
        black: "YearTab_black__WCLCL",
        data: "YearTab_data__QkacK",
        item: "YearTab_item__Ug4TV",
        jumpWrap: "YearTab_jumpWrap__Mqz_8",
        title: "YearTab_title__af9oE",
        cover: "YearTab_cover__KRPHn",
        desc: "YearTab_desc__zmvFq",
      };
    },
    59105: function (e) {
      e.exports = {
        wrap: "ListenSummary_wrap__Ae9tP",
        share: "ListenSummary_share__APEuM",
        magazine: "ListenSummary_magazine__Tygg_",
        title: "ListenSummary_title__MYmyv",
        btn: "ListenSummary_btn__u8pSi",
        black: "ListenSummary_black__H5Nd0",
        title_day: "ListenSummary_title_day__t9UCd",
        modules: "ListenSummary_modules__p33Sh",
        bg: "ListenSummary_bg__M9HyD",
        listenTitle: "ListenSummary_listenTitle__sxNMM",
        content: "ListenSummary_content__Q7Qb2",
        tip: "ListenSummary_tip__ZRE2c",
      };
    },
    82503: function (e) {
      e.exports = {
        wrap: "FavSinger_wrap__4WnQH",
        left: "FavSinger_left__jufqH",
        avatar: "FavSinger_avatar__wUtoR",
        right: "FavSinger_right__i5nV2",
        title: "FavSinger_title__C5ch8",
        jump: "FavSinger_jump__Po0gC",
        singerName: "FavSinger_singerName__YssKp",
        tips: "FavSinger_tips__s0sIu",
        bgText: "FavSinger_bgText__Kwmf_",
      };
    },
    85983: function (e) {
      e.exports = {
        wrap: "NewSingerMagazine_wrap__ObrX0",
        left: "NewSingerMagazine_left___fCXg",
        title: "NewSingerMagazine_title__XGU47",
        jump: "NewSingerMagazine_jump__o1D6B",
        total: "NewSingerMagazine_total__RpWCT",
        tips: "NewSingerMagazine_tips__u0_WY",
        right: "NewSingerMagazine_right__zY7hW",
        avatar: "NewSingerMagazine_avatar__d5i4t",
        holder: "NewSingerMagazine_holder__OTQmX",
        bgText: "NewSingerMagazine_bgText__iEPa6",
      };
    },
    21153: function (e) {
      e.exports = {
        wrap: "SingerRank_wrap__bmcta",
        black: "SingerRank_black__iqd7M",
        title: "SingerRank_title__C3BCB",
        singerName: "SingerRank_singerName__QSUXL",
        yearName: "SingerRank_yearName__ozq4m",
        playCount: "SingerRank_playCount__Qq_MP",
        yearCount: "SingerRank_yearCount__ah4QP",
        singerWrap: "SingerRank_singerWrap__bb_OR",
        singerItem: "SingerRank_singerItem__cF52K",
        avatar: "SingerRank_avatar__rqlGM",
        btn: "SingerRank_btn__YQJZk",
        followed: "SingerRank_followed__Ht8XH",
        yearWrap: "SingerRank_yearWrap__g5Bvf",
        yearInfo: "SingerRank_yearInfo__2yLJp",
        yearCover: "SingerRank_yearCover__d_in5",
      };
    },
    81027: function (e) {
      e.exports = {
        wrap: "Singer_wrap__If4s6",
        magazine: "Singer_magazine__hiFwJ",
        title: "Singer_title__gdnxh",
        black: "Singer_black__t_iI3",
        cardBody: "Singer_cardBody__vlMTL",
        bgText: "Singer_bgText__mc36f",
      };
    },
    18546: function (e) {
      e.exports = {
        wrap: "AISong_wrap__FrWwG",
        title: "AISong_title__AFG00",
        songCard: "AISong_songCard__OT92E",
        songInfo: "AISong_songInfo__a_Ica",
        coverBox: "AISong_coverBox__yCNOO",
        cover: "AISong_cover__5w_ct",
        vinylCover: "AISong_vinylCover__AuxQ3",
        meta: "AISong_meta__09kyN",
        songName: "AISong_songName__Gmgq0",
        artist: "AISong_artist__VS0iD",
        lyricBox: "AISong_lyricBox__7UuAZ",
        okBtn: "AISong_okBtn__HYSf9",
      };
    },
    1324: function (e) {
      e.exports = {
        wrap: "AgentEntry_wrap__nYpxj",
        icon: "AgentEntry_icon__7RwLd",
        text: "AgentEntry_text__Z1Jg_",
        btn: "AgentEntry_btn__rDzjm",
      };
    },
    83841: function (e) {
      e.exports = {
        wrap: "Calendar_wrap__8ACou",
        blackV2: "Calendar_blackV2__nuKkl",
        calendarWrap: "Calendar_calendarWrap__d5jof",
        day: "Calendar_day__RRPxo",
        labelWrap: "Calendar_labelWrap__kZmhf",
        date: "Calendar_date__HiRQH",
        showTip: "Calendar_showTip__bya2m",
        tooltip: "Calendar_tooltip__vpT9x",
        content: "Calendar_content__47El2",
        tooltipDate: "Calendar_tooltipDate__CnlTf",
        tooltipDuration: "Calendar_tooltipDuration__cJt5z",
        bigNum: "Calendar_bigNum__qTjr2",
        unit: "Calendar_unit__Nmx7d",
      };
    },
    62179: function (e) {
      e.exports = { wrap: "Chart_wrap__qXYAH", chart: "Chart_chart__vN0xd" };
    },
    59315: function (e) {
      e.exports = {
        wall: "Wall_wall__bPGWg",
        share: "Wall_share__r7_HC",
        blackV2: "Wall_blackV2__P3y94",
        img_item: "Wall_img_item__YpjY7",
        img_item_single: "Wall_img_item_single__lnkAF",
        img_wrapper: "Wall_img_wrapper__pcnzy",
        img_wrapper_animation: "Wall_img_wrapper_animation__j1s_U",
        lightHorse: "Wall_lightHorse__bFPb0",
        img_item_slice: "Wall_img_item_slice__AH6Cl",
      };
    },
    40784: function (e) {
      e.exports = {
        wrap: "CoverWall_wrap__bu6xL",
        wallWrap: "CoverWall_wallWrap__acN2_",
        wall: "CoverWall_wall__i_MMD",
        wallShadow: "CoverWall_wallShadow__L6XSj",
        btn: "CoverWall_btn__5jg4_",
        totalCount: "CoverWall_totalCount__9uVc7",
        count: "CoverWall_count__nh1px",
        shareWrap: "CoverWall_shareWrap__LbQ_w",
        modal: "CoverWall_modal__deTDS",
        bgWrap: "CoverWall_bgWrap__J7Zow",
        bg: "CoverWall_bg__VFkXD",
        shareWall: "CoverWall_shareWall__bbtss",
        userName: "CoverWall_userName__gSIdX",
        title: "CoverWall_title__ERhIg",
        tips: "CoverWall_tips__gbKEt",
        btnWrap: "CoverWall_btnWrap__V7xG4",
        shareBtn: "CoverWall_shareBtn__P76fn",
        closeBtn: "CoverWall_closeBtn__igo82",
        bottomWrap: "CoverWall_bottomWrap__8C_4s",
        bottom: "CoverWall_bottom__m0Odq",
        left: "CoverWall_left__qbkYR",
        text: "CoverWall_text__yV86H",
        qrcode: "CoverWall_qrcode__qza3o",
        paperWrap: "CoverWall_paperWrap__TNzb1",
        paperTopShadow: "CoverWall_paperTopShadow__5xDi4",
        paperFooter: "CoverWall_paperFooter__OamZr",
        popMask: "CoverWall_popMask__Z2wHX",
      };
    },
    80168: function (e) {
      e.exports = {
        wrap: "FriendRank_wrap__Iu8YV",
        header: "FriendRank_header__dO0qX",
        title: "FriendRank_title__e6MaT",
        more: "FriendRank_more__k6SXb",
        list: "FriendRank_list__ia74A",
        item: "FriendRank_item__9Fktj",
        rank: "FriendRank_rank__mivKj",
        avatar: "FriendRank_avatar__ddvX_",
        info: "FriendRank_info__Ogn15",
        userName: "FriendRank_userName__zSFYg",
        badges: "FriendRank_badges__g1Occ",
        vipIconWrap: "FriendRank_vipIconWrap__qcP1O",
        vipIcon: "FriendRank_vipIcon__mDhV2",
        likeWrap: "FriendRank_likeWrap__lA6kt",
        likeIcon: "FriendRank_likeIcon__UtfOl",
        likedIcon: "FriendRank_likedIcon__fZkgu",
        likeCount: "FriendRank_likeCount__wFOiT",
        likeCountLiked: "FriendRank_likeCountLiked__s1w3U",
        stats: "FriendRank_stats__GtclN",
        duration: "FriendRank_duration__v6Cw0",
      };
    },
    88058: function (e) {
      e.exports = {
        wrap: "ListenModule_wrap__3FHta",
        favSong: "ListenModule_favSong__mhDB9",
        loopSong: "ListenModule_loopSong__JvQgH",
        favSinger: "ListenModule_favSinger__2Op2J",
        contentWrap: "ListenModule_contentWrap__QSN9l",
        title: "ListenModule_title__6tDOM",
        coverWrap: "ListenModule_coverWrap__JD6YT",
        shadow: "ListenModule_shadow__mp0ar",
        coverBg: "ListenModule_coverBg__guSF8",
        texture: "ListenModule_texture__Wg9a0",
        cdCover: "ListenModule_cdCover__DOMaa",
        cover: "ListenModule_cover__6S4ZG",
        playIcon: "ListenModule_playIcon__AqKin",
        singerName: "ListenModule_singerName__7ElCN",
        songName: "ListenModule_songName__6yE6j",
        loopSongName: "ListenModule_loopSongName__zNfuK",
        rank: "ListenModule_rank__Dbo_T",
        desc: "ListenModule_desc__P3hWy",
        avatarWrap: "ListenModule_avatarWrap__zyaUb",
        avatar: "ListenModule_avatar__9cWhU",
      };
    },
    10816: function (e) {
      e.exports = {
        wrap: "Empty_wrap__MYbQo",
        titleBlock: "Empty_titleBlock__cjCbu",
        logoTitle: "Empty_logoTitle__dmHn2",
        colorText: "Empty_colorText__5JpL9",
        title: "Empty_title__JY7Z5",
        desc: "Empty_desc__cUpX2",
        contentWrap: "Empty_contentWrap___tH8A",
        btnWrap: "Empty_btnWrap__GRcwj",
        btn: "Empty_btn__s6oIN",
        lockIcon: "Empty_lockIcon__NBPDm",
        rightIcon: "Empty_rightIcon__86rTO",
        lock: "Empty_lock__lCE0v",
        loading: "Empty_loading__JOXzu",
        rotateIcon: "Empty_rotateIcon__L4e53",
        rolling: "Empty_rolling__B8TWV",
        imgWrap: "Empty_imgWrap__Ta6Sd",
        imgWrap1: "Empty_imgWrap1__branj",
        float1: "Empty_float1__eoJZq",
        imgWrap2: "Empty_imgWrap2__dskRY",
        float2: "Empty_float2__Hek9X",
        imgWrap3: "Empty_imgWrap3__wHwEv",
        float3: "Empty_float3__NLS0A",
        imgWrap4: "Empty_imgWrap4__JfT1r",
        float4: "Empty_float4__ewux8",
        imgWrap5: "Empty_imgWrap5__4MG_a",
        float5: "Empty_float5__lbUNo",
        imgWrap6: "Empty_imgWrap6__9dKmO",
        float6: "Empty_float6__myKby",
      };
    },
    66460: function (e) {
      e.exports = { cvs: "GradientText_cvs__Vlg72" };
    },
    11852: function (e) {
      e.exports = {
        item: "Item_item__xERB7",
        shareImg: "Item_shareImg__M84iu",
        itemLabel: "Item_itemLabel__aUGCS",
        itemTitle: "Item_itemTitle__Ryrbw",
        itemContent: "Item_itemContent__TBTc9",
        itemDesc: "Item_itemDesc__ERRHx",
        coverWrap: "Item_coverWrap__berPT",
        coverBg: "Item_coverBg__ffBg_",
        cover: "Item_cover__paA5g",
        playIcon: "Item_playIcon__xVraW",
        texture: "Item_texture__5Dckb",
        cdCover: "Item_cdCover__MKP2n",
      };
    },
    4202: function (e) {
      e.exports = {
        wrap: "Share_wrap__lihrG",
        bg: "Share_bg__hObWL",
        innerWrap: "Share_innerWrap___en2S",
        dateWrap: "Share_dateWrap__yt7yV",
        date1: "Share_date1__Ib6QW",
        date2: "Share_date2__gMpOH",
        topInfo: "Share_topInfo__1eBAC",
        avatarWrap: "Share_avatarWrap__n0ULf",
        avatar: "Share_avatar__DneQ7",
        infoWrap: "Share_infoWrap__atrzS",
        nameWrap: "Share_nameWrap__36hpS",
        name: "Share_name__x_Gkd",
        titleWrap: "Share_titleWrap__3u0Gs",
        topInfoDesc: "Share_topInfoDesc__DEp_8",
        item0: "Share_item0__rLrUO",
        item1: "Share_item1__Iep7z",
        item2: "Share_item2__UzV0b",
        item3: "Share_item3__uUWZ8",
        qrcode: "Share_qrcode__NG18g",
        logos: "Share_logos__mypJT",
        bottomDesc: "Share_bottomDesc__UPksb",
      };
    },
    42099: function (e) {
      e.exports = {
        titleBlock: "Mental_titleBlock__m9WSk",
        logoTitle: "Mental_logoTitle__kd23N",
        colorText: "Mental_colorText__p9xqQ",
        title: "Mental_title__Bh8sE",
        titleCenter: "Mental_titleCenter__tEAxn",
        desc: "Mental_desc__bE_AO",
        blockWrap: "Mental_blockWrap__Ie0EU",
        splitLine: "Mental_splitLine__qMYAn",
        verticalLine: "Mental_verticalLine__QZovo",
        shareWrap: "Mental_shareWrap__I_cAi",
        modal: "Mental_modal__U_tIZ",
        modalContent: "Mental_modalContent__daMoE",
        contentWrap: "Mental_contentWrap__s3RGL",
        closeBtn: "Mental_closeBtn__L6hQr",
        btnShareWrap: "Mental_btnShareWrap__exobH",
        btnShare: "Mental_btnShare__6VVVS",
        popMask: "Mental_popMask__X8h9R",
        btnWrap: "Mental_btnWrap__9dlIs",
        shareBtn: "Mental_shareBtn__EnaAX",
      };
    },
    58551: function (e) {
      e.exports = {
        wrap: "MonthReport_wrap___gKTV",
        blackV2: "MonthReport_blackV2__Cu99i",
        reportWrap: "MonthReport_reportWrap__cXPhD",
        cover: "MonthReport_cover__1DzYO",
        title: "MonthReport_title__DQK1Z",
        desc: "MonthReport_desc__QnuNE",
      };
    },
    30898: function (e) {
      e.exports = {
        wrap: "ListenSummary_wrap__O4EP2",
        blackV2: "ListenSummary_blackV2__8_Yub",
        btn: "ListenSummary_btn__rSe9o",
        moduleHeader: "ListenSummary_moduleHeader__6NvZD",
        headerLeft: "ListenSummary_headerLeft__xOAYp",
        bold: "ListenSummary_bold__Oy14h",
        headNum: "ListenSummary_headNum__r3SZx",
        smallNum: "ListenSummary_smallNum__KDJpq",
        ssmallNum: "ListenSummary_ssmallNum__0gUhF",
        headUnit: "ListenSummary_headUnit__toxGX",
        headerRight: "ListenSummary_headerRight__ltLit",
        headerRightIcon: "ListenSummary_headerRightIcon__V36qU",
        modules: "ListenSummary_modules__aQA5k",
        compareIcon: "ListenSummary_compareIcon__itfkd",
        monthReportSplitLine: "ListenSummary_monthReportSplitLine__2cxHw",
      };
    },
    73730: function (e) {
      e.exports = {
        wrap: "SingerRank_wrap__q4Q_V",
        blackV2: "SingerRank_blackV2__dAPqE",
        btn: "SingerRank_btn__LO_xf",
        followed: "SingerRank_followed__tXOYX",
        singerPodiumItem: "SingerRank_singerPodiumItem__CuDXw",
        singerWrap: "SingerRank_singerWrap__9mH6f",
        singerPodiumWrap: "SingerRank_singerPodiumWrap__CJ26U",
        platform: "SingerRank_platform__Jhkmm",
        noFollow: "SingerRank_noFollow__Zyskv",
        avatar: "SingerRank_avatar__Rb8H1",
        singerInfo: "SingerRank_singerInfo__IdWpm",
        singerName: "SingerRank_singerName__JtcIC",
        playCount: "SingerRank_playCount__ApZUm",
        singerItem: "SingerRank_singerItem__lbii1",
        rank: "SingerRank_rank__lEvgg",
      };
    },
    25339: function (e) {
      e.exports = {
        wrap: "Singer_wrap__nHhhg",
        blackV2: "Singer_blackV2__ACZj4",
        title: "Singer_title__c7FjT",
        titleBg: "Singer_titleBg__EMQgs",
        more: "Singer_more__5xGlf",
      };
    },
    66777: function (e) {
      e.exports = {
        wrap: "SongRank_wrap__vnvc7",
        blackV2: "SongRank_blackV2__Kn_iE",
        moduleWrap: "SongRank_moduleWrap__fb94c",
        hasSwipeModule: "SongRank_hasSwipeModule__xIBYi",
        swipeWrap: "SongRank_swipeWrap__cfswH",
        songWrap: "SongRank_songWrap__58K0V",
        rank: "SongRank_rank__NRRZA",
        rank1: "SongRank_rank1__sgwxZ",
        rank2: "SongRank_rank2__r_ixw",
        rank3: "SongRank_rank3__EGQgm",
        cover: "SongRank_cover__fqsDU",
        songInfo: "SongRank_songInfo__kfsCF",
        songName: "SongRank_songName__ebVJB",
        singerName: "SongRank_singerName__sSy9q",
        playCount: "SongRank_playCount__O7Mig",
      };
    },
    62258: function (e) {
      e.exports = {
        wrap: "SwiperCover_wrap__RbTZE",
        blackV2: "SwiperCover_blackV2__XXthu",
        wrapper: "SwiperCover_wrapper__TjRzQ",
        item: "SwiperCover_item__y3H2q",
        cover: "SwiperCover_cover__7iMpe",
        shadow: "SwiperCover_shadow__rdPKu",
        shadow2: "SwiperCover_shadow2__NPBh_",
        container: "SwiperCover_container___1Lgh",
        playIcon: "SwiperCover_playIcon__q7fZ1",
        show: "SwiperCover_show__uX2et",
        slideActive: "SwiperCover_slideActive__w8WZp",
        shareItem: "SwiperCover_shareItem__WbYmQ",
      };
    },
    24454: function (e) {
      e.exports = {
        wrap: "Song_wrap__bKR9e",
        blackV2: "Song_blackV2__dUoj2",
        title: "Song_title__4aAUG",
        titleBg: "Song_titleBg__gh275",
        more: "Song_more__xm6Fl",
      };
    },
    75897: function (e) {
      e.exports = {
        wrap: "HotCollect_wrap__wQvbo",
        topModule: "HotCollect_topModule__cN7dv",
        bottomModule: "HotCollect_bottomModule__pRbfw",
        coverWrap: "HotCollect_coverWrap__ukuGy",
        cover: "HotCollect_cover__M5QCT",
        playIcon: "HotCollect_playIcon__E7tZQ",
        title: "HotCollect_title__l4hqn",
        desc: "HotCollect_desc__N_IcW",
        songName: "HotCollect_songName__PMTcs",
        heart: "HotCollect_heart__sA8p9",
      };
    },
    14128: function (e) {
      e.exports = {
        wrap: "LastYearToday_wrap__VhTPG",
        topModule: "LastYearToday_topModule__cNflb",
        bottomModule: "LastYearToday_bottomModule__0f6hP",
        coverBg: "LastYearToday_coverBg__IOBO7",
        cdbg: "LastYearToday_cdbg__8D0Uc",
        cd: "LastYearToday_cd__hj4UG",
        cdCenter: "LastYearToday_cdCenter__ZADlt",
        coverWrap: "LastYearToday_coverWrap__pc6Z4",
        cover: "LastYearToday_cover__znGCh",
        playIcon: "LastYearToday_playIcon__bGDpV",
        title: "LastYearToday_title__0zwRK",
        desc: "LastYearToday_desc__1aDZt",
        date: "LastYearToday_date__ajaPn",
        num: "LastYearToday_num__WeISL",
        small: "LastYearToday_small__AoqHg",
      };
    },
    98195: function (e) {
      e.exports = {
        wrap: "ListenLatest_wrap__J7k7A",
        topModule: "ListenLatest_topModule__TYYN8",
        bottomModule: "ListenLatest_bottomModule__QE_IN",
        coverFg: "ListenLatest_coverFg__O4eed",
        coverWrap: "ListenLatest_coverWrap__eRpPu",
        cover: "ListenLatest_cover__NuoJN",
        playIcon: "ListenLatest_playIcon__r91DH",
        title: "ListenLatest_title___vKWX",
        desc: "ListenLatest_desc__nBwRZ",
        date: "ListenLatest_date__TdmO9",
        num: "ListenLatest_num__HIH_J",
        small: "ListenLatest_small__BkrX_",
      };
    },
    63242: function (e) {
      e.exports = {
        wrap: "ListenLongest_wrap__hefFf",
        topModule: "ListenLongest_topModule__JAl_1",
        bottomModule: "ListenLongest_bottomModule__QHV_f",
        coverBg: "ListenLongest_coverBg__gs5TV",
        cover1Wrap: "ListenLongest_cover1Wrap__42WvH",
        cover: "ListenLongest_cover__Qv3ZR",
        cover2Wrap: "ListenLongest_cover2Wrap__jme2X",
        cover3Wrap: "ListenLongest_cover3Wrap___Ja5V",
        decoration: "ListenLongest_decoration__2PS4j",
        playIcon: "ListenLongest_playIcon__OPPsA",
        title: "ListenLongest_title__6NtfW",
        desc: "ListenLongest_desc__VD91A",
        date: "ListenLongest_date__mIG5h",
        num: "ListenLongest_num__ZQTSr",
        small: "ListenLongest_small__rCaOC",
      };
    },
    89697: function (e) {
      e.exports = {
        wrap: "SongMemory_wrap__pahIq",
        topModule: "SongMemory_topModule__bJhET",
        bottomModule: "SongMemory_bottomModule__Si48w",
        label: "SongMemory_label__E2Gig",
        text: "SongMemory_text__udEvc",
        big: "SongMemory_big__K1AMe",
        num: "SongMemory_num__pa9kj",
        small: "SongMemory_small__35AyO",
        module: "SongMemory_module__ForIm",
        coverWrap: "SongMemory_coverWrap__J4zQ2",
        cover: "SongMemory_cover__0Moym",
        playIcon: "SongMemory_playIcon__0LnTI",
        title: "SongMemory_title__OC1ia",
        songName: "SongMemory_songName__BJ7Bt",
      };
    },
    73913: function (e) {
      e.exports = {
        wrap: "SpecialMemory_wrap__u_11Q",
        blackV2: "SpecialMemory_blackV2__wDOiY",
        title: "SpecialMemory_title__9EHJh",
        titleBg: "SpecialMemory_titleBg__8bbT2",
        more: "SpecialMemory_more___DoaA",
        modules: "SpecialMemory_modules__gyHYC",
      };
    },
    34716: function (e) {
      e.exports = {
        wrap: "TopInfoV2_wrap__xWRNV",
        userInfo: "TopInfoV2_userInfo__iOiKr",
        avatarWrap: "TopInfoV2_avatarWrap__Hyrl0",
        avatar: "TopInfoV2_avatar__6MTZ_",
        middle: "TopInfoV2_middle__H4dcs",
        userName: "TopInfoV2_userName__k8oNu",
        listenDur: "TopInfoV2_listenDur__3d8Nx",
        right: "TopInfoV2_right__Ife69",
        rankWrap: "TopInfoV2_rankWrap__GuPSN",
        rankWrapNoValue: "TopInfoV2_rankWrapNoValue__KlZA5",
        rankLabel: "TopInfoV2_rankLabel__9lypA",
        rankValue: "TopInfoV2_rankValue__LUygG",
        rankNo: "TopInfoV2_rankNo__E48bO",
        magazine: "TopInfoV2_magazine__rErff",
        blackV2: "TopInfoV2_blackV2__6R3kP",
        share: "TopInfoV2_share__5q82w",
      };
    },
    60363: function (e) {
      e.exports = {
        wrap: "ListenModule_wrap__OLzwK",
        title: "ListenModule_title__QiNHQ",
        titleIcon: "ListenModule_titleIcon__eDHW_",
        topName: "ListenModule_topName__ojYUc",
        desc: "ListenModule_desc__xxzNk",
        centerWrap: "ListenModule_centerWrap__XBFfv",
        coverWrap: "ListenModule_coverWrap__fq8s4",
        coverBg: "ListenModule_coverBg__mEdZ3",
        texture: "ListenModule_texture__pUGLi",
        cdCover: "ListenModule_cdCover__YUOtY",
        cover: "ListenModule_cover__lR2QX",
        playIcon: "ListenModule_playIcon__wf_U4",
        avatarWrap: "ListenModule_avatarWrap__T28g1",
        avatar: "ListenModule_avatar__CDWq5",
      };
    },
    81884: function (e) {
      e.exports = {
        wrap: "Vehicle_wrap__NPTZA",
        blackV2: "Vehicle_blackV2__1x2mw",
        title: "Vehicle_title__uzcgb",
        titleBg: "Vehicle_titleBg__Ta9VI",
        modules: "Vehicle_modules__S8dwY",
        icon: "Vehicle_icon__uHLGP",
        i: "Vehicle_i__JwhnP",
        more: "Vehicle_more__4BO5v",
        headerModule: "Vehicle_headerModule__RBL9e",
        leftWrap: "Vehicle_leftWrap__JAdNc",
        dataLabel: "Vehicle_dataLabel__cKF5j",
        dataWrap: "Vehicle_dataWrap__CsAwR",
        num: "Vehicle_num__4vRku",
        smallNum: "Vehicle_smallNum__GJk5e",
        ssmallNum: "Vehicle_ssmallNum__kRGgr",
        unit: "Vehicle_unit___HZ7a",
        split: "Vehicle_split__n_Qt5",
        descWrap: "Vehicle_descWrap__eeciv",
        medalWrap: "Vehicle_medalWrap__vWwFp",
        medal: "Vehicle_medal__sR9aP",
        moduleWrap: "Vehicle_moduleWrap__NX78h",
        empty: "Vehicle_empty__CGR8c",
        splitVerticalLine: "Vehicle_splitVerticalLine__fRfVj",
        splitModule: "Vehicle_splitModule__jwgKa",
      };
    },
    1625: function (e) {
      e.exports = {
        wrap: "YearsData_wrap__zuADw",
        itemWrap: "YearsData_itemWrap__A29P_",
        moduleHeader: "YearsData_moduleHeader__Rwiq8",
        headerLeft: "YearsData_headerLeft__oO1t8",
        headNum: "YearsData_headNum__VLlFA",
        smallNum: "YearsData_smallNum__aZKZv",
        headUnit: "YearsData_headUnit__ihDaW",
        headerRight: "YearsData_headerRight__uu4za",
        rightMore: "YearsData_rightMore__TMtyf",
        yearReport: "YearsData_yearReport__vIIC_",
        cover: "YearsData_cover__hF6Wu",
        title: "YearsData_title__HJvUc",
        desc: "YearsData_desc__Ye9dK",
      };
    },
    54255: function (e) {
      e.exports = {
        wall: "Wall_wall__u47Fh",
        img_wrapper: "Wall_img_wrapper__ob95s",
        img_wrapper_animation: "Wall_img_wrapper_animation__4D7_A",
        lightHorse: "Wall_lightHorse__C7NHs",
        img_wrapper_copy: "Wall_img_wrapper_copy__4fUGt",
        share: "Wall_share__rKjbH",
        titleWrap: "Wall_titleWrap__9P5oE",
        title: "Wall_title__DlCC4",
      };
    },
    52562: function (e) {
      e.exports = {
        wrap: "CoverWall_wrap__Z4ZzR",
        black: "CoverWall_black__8uwMT",
        btn: "CoverWall_btn__j0rHk",
        wall: "CoverWall_wall__5iZ6x",
        shareWrap: "CoverWall_shareWrap__YnaxW",
        modal: "CoverWall_modal__Nc6j0",
        bgWrap: "CoverWall_bgWrap__oW9tC",
        bg: "CoverWall_bg__locx7",
        shareWall: "CoverWall_shareWall__g3hVO",
        userName: "CoverWall_userName__sD2Ox",
        title: "CoverWall_title__DzMS_",
        tips: "CoverWall_tips__fo1Mf",
        btnWrap: "CoverWall_btnWrap__nIl4H",
        shareBtn: "CoverWall_shareBtn__sbAhM",
        closeBtn: "CoverWall_closeBtn__mFNjV",
        bottomWrap: "CoverWall_bottomWrap__ckVCn",
        bottom: "CoverWall_bottom__eR3TW",
        left: "CoverWall_left__k6gkL",
        text: "CoverWall_text___J_zM",
        qrcode: "CoverWall_qrcode__rNQ0q",
      };
    },
    67364: function (e) {
      e.exports = {
        wrap: "Disc_wrap__LzXMo",
        disc: "Disc_disc__KBbGA",
        cover: "Disc_cover__BBXos",
        songInfo: "Disc_songInfo__Bj1nE",
        title: "Disc_title__V4KEy",
        songName: "Disc_songName__Lsm2A",
        tips: "Disc_tips__vz_v6",
        bgText: "Disc_bgText__bjMoQ",
      };
    },
    80731: function (e) {
      e.exports = {
        wrap: "HotCollect_wrap__awXfW",
        left: "HotCollect_left__UsTc0",
        title: "HotCollect_title__uLX0_",
        songName: "HotCollect_songName__e8LU9",
        singerName: "HotCollect_singerName__Icpvz",
        tips: "HotCollect_tips__rSjE1",
        right: "HotCollect_right__uE5FQ",
        cover: "HotCollect_cover__dSmXu",
        bgText: "HotCollect_bgText__2R2hd",
      };
    },
    58645: function (e) {
      e.exports = {
        wrap: "NewLike_wrap__ODW3I",
        left: "NewLike_left__P8A2T",
        title: "NewLike_title__Aq258",
        jump: "NewLike_jump__O4A4a",
        count: "NewLike_count__WyKsU",
        tips: "NewLike_tips__WvHKQ",
        right: "NewLike_right__FwbBz",
        cover: "NewLike_cover__VOp6e",
        disc: "NewLike_disc__vrhGX",
        bgText: "NewLike_bgText__TF82D",
      };
    },
    54915: function (e) {
      e.exports = {
        wrap: "NotCollect_wrap__tjhCM",
        left: "NotCollect_left__Tf4Ec",
        cover: "NotCollect_cover__jUzeG",
        right: "NotCollect_right__JJZeT",
        title: "NotCollect_title__ns5NP",
        songName: "NotCollect_songName__CgypW",
        count: "NotCollect_count__QgDnL",
        collectBtn: "NotCollect_collectBtn__LqVDR",
        collect: "NotCollect_collect__WOjtr",
        bgText: "NotCollect_bgText__XOUY_",
      };
    },
    6312: function (e) {
      e.exports = {
        wrap: "SongRank_wrap__ByQL4",
        black: "SongRank_black__Mmgae",
        title: "SongRank_title__E8C8H",
        songName: "SongRank_songName__JbIb0",
        singerName: "SongRank_singerName__1iIYO",
        playCount: "SongRank_playCount__KA2MM",
        songWrap: "SongRank_songWrap__ElRLj",
        songInfo: "SongRank_songInfo__FrcHc",
        cover: "SongRank_cover__w24CC",
        bg: "SongRank_bg__UGnaj",
        rank: "SongRank_rank__vCGkc",
      };
    },
    50794: function (e) {
      e.exports = {
        swiper_song_memory: "SwiperSongMemory_swiper_song_memory__XBffn",
        title: "SwiperSongMemory_title__bCslo",
        swiper_container: "SwiperSongMemory_swiper_container__OHzFY",
        swiper_wrapper: "SwiperSongMemory_swiper_wrapper__3Efj5",
        item: "SwiperSongMemory_item__dk6sw",
        cover: "SwiperSongMemory_cover__std1X",
        next_cover: "SwiperSongMemory_next_cover__qKlg2",
        next_cover2: "SwiperSongMemory_next_cover2__dJpAg",
        icon_cover: "SwiperSongMemory_icon_cover__r4q49",
        cover_mask: "SwiperSongMemory_cover_mask__TvCPn",
        icon_play_big: "SwiperSongMemory_icon_play_big__Ia6iV",
        info: "SwiperSongMemory_info__AVbOg",
        top: "SwiperSongMemory_top__GKuyN",
        middle: "SwiperSongMemory_middle__cAr4e",
        bottom: "SwiperSongMemory_bottom__6M1p9",
        text: "SwiperSongMemory_text__SFDz5",
        black: "SwiperSongMemory_black__oYweM",
        magazine: "SwiperSongMemory_magazine__Evm9s",
      };
    },
    8807: function (e) {
      e.exports = {
        wrap: "TotalSong_wrap__3bMx6",
        left: "TotalSong_left__V3q7x",
        cover: "TotalSong_cover__C9kf6",
        right: "TotalSong_right__GD6QO",
        title: "TotalSong_title__1FZmB",
        jump: "TotalSong_jump__p8U4u",
        count: "TotalSong_count__bq9Is",
        tips: "TotalSong_tips__e_iru",
        bgText: "TotalSong_bgText__C8HNe",
      };
    },
    74696: function (e) {
      e.exports = {
        wrap: "Song_wrap__s_3jS",
        magazine: "Song_magazine__ci2NV",
        title: "Song_title__QyBNH",
        bottom: "Song_bottom__VdSbb",
        black: "Song_black__HbVMt",
        modules: "Song_modules__OdfDX",
        bg: "Song_bg___ohZl",
        cardBody: "Song_cardBody__ZapRJ",
        bgText: "Song_bgText__lHTGL",
      };
    },
    50133: function (e) {
      e.exports = {
        wrap: "CommentMagazine_wrap__CbP_l",
        top: "CommentMagazine_top__saRG7",
        name: "CommentMagazine_name__jYRia",
        count: "CommentMagazine_count__vHwPY",
        bottom: "CommentMagazine_bottom__oPRJ3",
        title: "CommentMagazine_title__o0i2N",
        comment: "CommentMagazine_comment__r7KFo",
        from: "CommentMagazine_from__S9LRi",
      };
    },
    73123: function (e) {
      e.exports = {
        item: "Habit_item__M_atj",
        wrap: "Habit_wrap__xamCg",
        soundQuality: "Habit_soundQuality__zzEp4",
        left: "Habit_left__ybVBC",
        coverWrap: "Habit_coverWrap__7He3J",
        cover: "Habit_cover__I4HJr",
        title: "Habit_title__FCEXy",
        name: "Habit_name__pgUZa",
        tips: "Habit_tips__kQM_O",
        right: "Habit_right__atCkR",
        bgText: "Habit_bgText__tB0OP",
      };
    },
    70086: function (e) {
      e.exports = {
        wrap: "LastYearTodayMagazine_wrap__Z_T5z",
        title: "LastYearTodayMagazine_title__ygRXt",
        jump: "LastYearTodayMagazine_jump__BnRwZ",
        date: "LastYearTodayMagazine_date__Ly_2P",
        tips: "LastYearTodayMagazine_tips__qI8hR",
        coverWrap: "LastYearTodayMagazine_coverWrap___X_ob",
        cover: "LastYearTodayMagazine_cover__kPIZ_",
        bgText: "LastYearTodayMagazine_bgText__Lcwpl",
      };
    },
    34011: function (e) {
      e.exports = {
        wrap: "ListenLongestMagazine_wrap__Hew_4",
        left: "ListenLongestMagazine_left__IEKBT",
        title: "ListenLongestMagazine_title__DLNvW",
        jump: "ListenLongestMagazine_jump__epyf2",
        date: "ListenLongestMagazine_date__ZPIdP",
        tips: "ListenLongestMagazine_tips__nj1ns",
        right: "ListenLongestMagazine_right__MJ4AS",
        cover: "ListenLongestMagazine_cover__qWS4_",
        bgText: "ListenLongestMagazine_bgText__LkuH5",
      };
    },
    49089: function (e) {
      e.exports = {
        wrap: "SpecialModule_wrap__moIMM",
        rankStyle: "SpecialModule_rankStyle__EXMUH",
        rankLanguage: "SpecialModule_rankLanguage__PxyRS",
        content: "SpecialModule_content__Jec0A",
        title: "SpecialModule_title__koXa8",
        listenSource: "SpecialModule_listenSource__pQTjO",
        mostSoundQuality: "SpecialModule_mostSoundQuality__YwLC1",
        subContent: "SpecialModule_subContent__r_Xq_",
        tip: "SpecialModule_tip__JbZ2W",
        charts: "SpecialModule_charts__J6gkJ",
        cover: "SpecialModule_cover__NflqR",
        pic0: "SpecialModule_pic0__CD4qf",
        pic1: "SpecialModule_pic1__sH3xr",
        pic2: "SpecialModule_pic2__NXXfx",
        coverBg: "SpecialModule_coverBg__KFtCj",
        vip: "SpecialModule_vip__SJuOZ",
      };
    },
    9336: function (e) {
      e.exports = {
        wrap: "VipCard_wrap__4qg87",
        item: "VipCard_item__7Bo25",
        t: "VipCard_t__nR2ci",
        c: "VipCard_c__UGEJ5",
        b: "VipCard_b__f7cPR",
        divider: "VipCard_divider__Kqfr0",
      };
    },
    85419: function (e) {
      e.exports = {
        wrap: "SpecialMemory_wrap__Sa0pl",
        magazine: "SpecialMemory_magazine___1idg",
        title: "SpecialMemory_title__AlZDl",
        share: "SpecialMemory_share__5RoTA",
        black: "SpecialMemory_black__79Fw_",
        modules: "SpecialMemory_modules__O5EkB",
        bg: "SpecialMemory_bg__qRE9L",
      };
    },
    55723: function (e) {
      e.exports = { splitLine: "SplitLine_splitLine__1Qd3s" };
    },
    73263: function (e) {
      e.exports = { splitLine: "vertical_splitLine___qnQs" };
    },
    8683: function (e) {
      e.exports = {
        V2Card: "V3Card_V2Card___itjI",
        magazine: "V3Card_magazine__Na1lZ",
        year: "V3Card_year__wu_uL",
        V2CardLeft: "V3Card_V2CardLeft__PhI7H",
        V2CardName: "V3Card_V2CardName__i2V3m",
        V2CardRanks: "V3Card_V2CardRanks__wF3W6",
        V2CardRight: "V3Card_V2CardRight__am7yy",
        V2CardImg: "V3Card_V2CardImg__MiriT",
        V2CardTitle: "V3Card_V2CardTitle__eSZH5",
        V2CardDesc: "V3Card_V2CardDesc__77YVt",
        V2CardCircle: "V3Card_V2CardCircle__GesNx",
        rankItem: "V3Card_rankItem__qZg4H",
        rankItemTitle: "V3Card_rankItemTitle__G9YBU",
        fixedHeight: "V3Card_fixedHeight__6xLpp",
        bgText: "V3Card_bgText__fwMJt",
        lastYearToday: "V3Card_lastYearToday__jjG5y",
        songName: "V3Card_songName__7Bda4",
        inner: "V3Card_inner__0Ih1S",
        V2CardAlbumAuthorDesc: "V3Card_V2CardAlbumAuthorDesc__i_v3Y",
        V2CardImgMore: "V3Card_V2CardImgMore__i1aCg",
        circle: "V3Card_circle__dE3aj",
        bigSingerCover: "V3Card_bigSingerCover__ll89x",
        V2CardInfo: "V3Card_V2CardInfo__7F5kD",
        V2CardItem: "V3Card_V2CardItem__0vXYZ",
        V2CardItemTxt: "V3Card_V2CardItemTxt__48ZxE",
        V2CardSqure: "V3Card_V2CardSqure__KPxhh",
        V2CardBigSqure: "V3Card_V2CardBigSqure__kinhV",
        V2CardBetween: "V3Card_V2CardBetween__YgShd",
        album: "V3Card_album__3sx3m",
        V2CardRank: "V3Card_V2CardRank__KlenR",
        theme001: "V3Card_theme001__cFVZb",
      };
    },
    79683: function (e) {
      e.exports = {
        V2List: "V3List_V2List__JNy_j",
        year: "V3List_year__afbT6",
        magazine: "V3List_magazine__F4WPM",
        item: "V3List_item__GjlBj",
        cover: "V3List_cover__NkLnK",
        circle: "V3List_circle__2Or9z",
        title: "V3List_title__bGaic",
        jump: "V3List_jump__PbXYz",
        rankIcon: "V3List_rankIcon__lRJwz",
        one: "V3List_one__YRIJC",
        two: "V3List_two__L03BJ",
        three: "V3List_three__i7Iab",
        number: "V3List_number__iMiW3",
        highlight: "V3List_highlight__p1e7i",
        songRankValue: "V3List_songRankValue__d9RU0",
        singer: "V3List_singer__fhKs6",
        squre: "V3List_squre__ucqaq",
        content: "V3List_content___Tq_Z",
        name: "V3List_name__TnAHx",
        author: "V3List_author__rzAqy",
        followBox: "V3List_followBox__Pq_bU",
        follow: "V3List_follow__6XFC_",
        followed: "V3List_followed__Y04Mz",
        plays: "V3List_plays___m_ki",
        collapse: "V3List_collapse__8yBza",
        btn: "V3List_btn__VLPSU",
      };
    },
  },
]);
