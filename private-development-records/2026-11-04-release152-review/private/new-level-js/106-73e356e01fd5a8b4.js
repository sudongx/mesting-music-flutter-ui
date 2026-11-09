(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [106],
  {
    32283: function (t, e, n) {
      "use strict";
      var r,
        i,
        o,
        u,
        a,
        c,
        s,
        l,
        f,
        p,
        d,
        v,
        h = n(76792),
        g = n(17468),
        m = n(82628),
        b = n.n(m),
        w = n(48156),
        y = n(6757);
      function k(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          (e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function P(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? k(Object(n), !0).forEach(function (e) {
                (0, h.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : k(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      var x = {
          baseURL: "https://medal.kugou.com",
          retryURL: "https://medalretry.kugou.com",
          sign: "h5",
          isGateway: !0,
        },
        O = {
          get_listen_level_rank:
            ((r = (0, g.Z)(
              b().mark(function t(e) {
                return b().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var t = (0, g.Z)(
                                b().mark(function t(n) {
                                  var r;
                                  return b().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return ((t.next = 2), (0, w.KD)());
                                        case 2:
                                          if (!(
                                            !(r = t.sent).userid && !r.token
                                          )) {
                                            t.next = 6;
                                            break;
                                          }
                                          return (
                                            n([null, { isLogin: !1 }]),
                                            t.abrupt("return")
                                          );
                                        case 6:
                                          (0, y.ZP)(
                                            P(
                                              P({}, x),
                                              {},
                                              {
                                                baseURL:
                                                  "https://songplay.kugou.com",
                                                method: "get",
                                                url: "/v1/listen_level/rank",
                                                params: P(
                                                  {
                                                    appid: r.appid || 1058,
                                                    mid: r.mid,
                                                    dfid: r.dfid,
                                                    userid: r.userid || 0,
                                                    token: r.token || "",
                                                  },
                                                  e,
                                                ),
                                              },
                                            ),
                                          )
                                            .then(function (t) {
                                              var e =
                                                null == t ? void 0 : t.data;
                                              (null == e
                                                ? void 0
                                                : e.status) === 1
                                                ? n([e, null])
                                                : n([null, t]);
                                            })
                                            .catch(function (t) {
                                              n([null, t]);
                                            });
                                        case 7:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                }),
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            )),
            function (t) {
              return r.apply(this, arguments);
            }),
          get_listen_level_my_info:
            ((i = (0, g.Z)(
              b().mark(function t(e) {
                return b().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var t = (0, g.Z)(
                                b().mark(function t(n) {
                                  var r;
                                  return b().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return ((t.next = 2), (0, w.KD)());
                                        case 2:
                                          if (!(
                                            !(r = t.sent).userid && !r.token
                                          )) {
                                            t.next = 6;
                                            break;
                                          }
                                          return (
                                            n([null, { isLogin: !1 }]),
                                            t.abrupt("return")
                                          );
                                        case 6:
                                          (0, y.ZP)(
                                            P(
                                              P({}, x),
                                              {},
                                              {
                                                baseURL:
                                                  "https://songplay.kugou.com",
                                                method: "get",
                                                url: "/v1/listen_level/my_info",
                                                params: P(
                                                  {
                                                    appid: r.appid || 1058,
                                                    mid: r.mid,
                                                    dfid: r.dfid,
                                                    userid: r.userid || 0,
                                                    token: r.token || "",
                                                  },
                                                  e,
                                                ),
                                              },
                                            ),
                                          )
                                            .then(function (t) {
                                              var e =
                                                null == t ? void 0 : t.data;
                                              (null == e
                                                ? void 0
                                                : e.status) === 1
                                                ? n([e, null])
                                                : n([null, t]);
                                            })
                                            .catch(function (t) {
                                              n([null, t]);
                                            });
                                        case 7:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                }),
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            )),
            function (t) {
              return i.apply(this, arguments);
            }),
          like_user:
            ((o = (0, g.Z)(
              b().mark(function t(e) {
                return b().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var t = (0, g.Z)(
                                b().mark(function t(n) {
                                  var r;
                                  return b().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return ((t.next = 2), (0, w.KD)());
                                        case 2:
                                          if (!(
                                            !(r = t.sent).userid && !r.token
                                          )) {
                                            t.next = 6;
                                            break;
                                          }
                                          return (
                                            n([null, { isLogin: !1 }]),
                                            t.abrupt("return")
                                          );
                                        case 6:
                                          (0, y.ZP)(
                                            P(
                                              P({}, x),
                                              {},
                                              {
                                                baseURL:
                                                  "https://songplay.kugou.com",
                                                method: "post",
                                                url: "/v1/listen_level/like_user",
                                                params: {
                                                  appid: r.appid || 1058,
                                                  mid: r.mid,
                                                  dfid: r.dfid,
                                                  userid: r.userid || 0,
                                                  token: r.token || "",
                                                },
                                                data: e,
                                              },
                                            ),
                                          )
                                            .then(function (t) {
                                              var e =
                                                null == t ? void 0 : t.data;
                                              (null == e
                                                ? void 0
                                                : e.status) === 1
                                                ? n([e, null])
                                                : n([null, t]);
                                            })
                                            .catch(function (t) {
                                              n([null, t]);
                                            });
                                        case 7:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                }),
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            )),
            function (t) {
              return o.apply(this, arguments);
            }),
          unlike_user:
            ((u = (0, g.Z)(
              b().mark(function t(e) {
                return b().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var t = (0, g.Z)(
                                b().mark(function t(n) {
                                  var r;
                                  return b().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return ((t.next = 2), (0, w.KD)());
                                        case 2:
                                          if (!(
                                            !(r = t.sent).userid && !r.token
                                          )) {
                                            t.next = 6;
                                            break;
                                          }
                                          return (
                                            n([null, { isLogin: !1 }]),
                                            t.abrupt("return")
                                          );
                                        case 6:
                                          (0, y.ZP)(
                                            P(
                                              P({}, x),
                                              {},
                                              {
                                                baseURL:
                                                  "https://songplay.kugou.com",
                                                method: "post",
                                                url: "/v1/listen_level/unlike_user",
                                                params: {
                                                  appid: r.appid || 1058,
                                                  mid: r.mid,
                                                  dfid: r.dfid,
                                                  userid: r.userid || 0,
                                                  token: r.token || "",
                                                },
                                                data: e,
                                              },
                                            ),
                                          )
                                            .then(function (t) {
                                              var e =
                                                null == t ? void 0 : t.data;
                                              (null == e
                                                ? void 0
                                                : e.status) === 1
                                                ? n([e, null])
                                                : n([null, t]);
                                            })
                                            .catch(function (t) {
                                              n([null, t]);
                                            });
                                        case 7:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                }),
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            )),
            function (t) {
              return u.apply(this, arguments);
            }),
          get_activity_list:
            ((a = (0, g.Z)(
              b().mark(function t(e) {
                return b().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var t = (0, g.Z)(
                                b().mark(function t(n) {
                                  var r;
                                  return b().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return ((t.next = 2), (0, w.KD)());
                                        case 2:
                                          if (!(
                                            !(r = t.sent).userid && !r.token
                                          )) {
                                            t.next = 6;
                                            break;
                                          }
                                          return (
                                            n([null, { isLogin: !1 }]),
                                            t.abrupt("return")
                                          );
                                        case 6:
                                          (0, y.ZP)(
                                            P(
                                              P({}, x),
                                              {},
                                              {
                                                baseURL:
                                                  "https://songplay.kugou.com",
                                                method: "get",
                                                url: "/v1/listen_level/activity_list",
                                                params: P(
                                                  {
                                                    appid: r.appid || 1058,
                                                    mid: r.mid,
                                                    dfid: r.dfid,
                                                    userid: r.userid || 0,
                                                    token: r.token || "",
                                                  },
                                                  e,
                                                ),
                                              },
                                            ),
                                          )
                                            .then(function (t) {
                                              var e =
                                                null == t ? void 0 : t.data;
                                              (null == e
                                                ? void 0
                                                : e.status) === 1
                                                ? n([e, null])
                                                : n([null, t]);
                                            })
                                            .catch(function (t) {
                                              n([null, t]);
                                            });
                                        case 7:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                }),
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            )),
            function (t) {
              return a.apply(this, arguments);
            }),
          get_rank_citylist:
            ((c = (0, g.Z)(
              b().mark(function t(e) {
                return b().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var t = (0, g.Z)(
                                b().mark(function t(n) {
                                  var r;
                                  return b().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (
                                            console.log("get_rank_citylist", e),
                                            (t.next = 3),
                                            (0, w.KD)()
                                          );
                                        case 3:
                                          if (!(
                                            !(r = t.sent).userid && !r.token
                                          )) {
                                            t.next = 7;
                                            break;
                                          }
                                          return (
                                            n([null, { isLogin: !1 }]),
                                            t.abrupt("return")
                                          );
                                        case 7:
                                          (0, y.ZP)(
                                            P(
                                              P({}, x),
                                              {},
                                              {
                                                baseURL:
                                                  "https://userinfo.user.kugou.com",
                                                method: "post",
                                                url: "/v1/get_rank_citylist",
                                                params: {
                                                  appid: r.appid || 1058,
                                                  mid: r.mid,
                                                  dfid: r.dfid,
                                                  userid: r.userid || 0,
                                                  token: r.token || "",
                                                },
                                                data: e,
                                              },
                                            ),
                                          )
                                            .then(function (t) {
                                              var e =
                                                null == t ? void 0 : t.data;
                                              (null == e
                                                ? void 0
                                                : e.status) === 1
                                                ? n([e, null])
                                                : n([null, t]);
                                            })
                                            .catch(function (t) {
                                              n([null, t]);
                                            });
                                        case 8:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                }),
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            )),
            function (t) {
              return c.apply(this, arguments);
            }),
          set_rank_city:
            ((s = (0, g.Z)(
              b().mark(function t(e) {
                return b().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var t = (0, g.Z)(
                                b().mark(function t(n) {
                                  var r;
                                  return b().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return ((t.next = 2), (0, w.KD)());
                                        case 2:
                                          if (!(
                                            !(r = t.sent).userid && !r.token
                                          )) {
                                            t.next = 6;
                                            break;
                                          }
                                          return (
                                            n([null, { isLogin: !1 }]),
                                            t.abrupt("return")
                                          );
                                        case 6:
                                          (0, y.ZP)(
                                            P(
                                              P({}, x),
                                              {},
                                              {
                                                baseURL:
                                                  "https://userinfo.user.kugou.com",
                                                method: "post",
                                                url: "/v1/set_rank_city",
                                                params: {
                                                  appid: r.appid || 1058,
                                                  mid: r.mid,
                                                  dfid: r.dfid,
                                                  userid: r.userid || 0,
                                                  token: r.token || "",
                                                },
                                                data: e,
                                              },
                                            ),
                                          )
                                            .then(function (t) {
                                              var e =
                                                null == t ? void 0 : t.data;
                                              (null == e
                                                ? void 0
                                                : e.status) === 1
                                                ? n([e, null])
                                                : n([null, t]);
                                            })
                                            .catch(function (t) {
                                              n([null, t]);
                                            });
                                        case 7:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                }),
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            )),
            function (t) {
              return s.apply(this, arguments);
            }),
          level_welfare:
            ((l = (0, g.Z)(
              b().mark(function t() {
                return b().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var t = (0, g.Z)(
                                b().mark(function t(e) {
                                  var n;
                                  return b().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return ((t.next = 2), (0, w.KD)());
                                        case 2:
                                          if (!(
                                            !(n = t.sent).userid && !n.token
                                          )) {
                                            t.next = 6;
                                            break;
                                          }
                                          return (
                                            e([null, { isLogin: !1 }]),
                                            t.abrupt("return")
                                          );
                                        case 6:
                                          (0, y.ZP)(
                                            P(
                                              P({}, x),
                                              {},
                                              {
                                                baseURL:
                                                  "https://vip.kugou.com",
                                                method: "get",
                                                url: "/v2/external/level_welfare/list",
                                                params: {
                                                  appid: n.appid || 1058,
                                                  mid: n.mid,
                                                  dfid: n.dfid,
                                                  kugouid: n.userid || 0,
                                                  token: n.token || "",
                                                },
                                              },
                                            ),
                                          )
                                            .then(function (t) {
                                              var n =
                                                null == t ? void 0 : t.data;
                                              (null == n
                                                ? void 0
                                                : n.status) === 1
                                                ? e([n, null])
                                                : e([null, t]);
                                            })
                                            .catch(function (t) {
                                              e([null, t]);
                                            });
                                        case 7:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                }),
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            )),
            function () {
              return l.apply(this, arguments);
            }),
          get_vip_level_welfare_list:
            ((f = (0, g.Z)(
              b().mark(function t(e) {
                return b().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var t = (0, g.Z)(
                                b().mark(function t(n) {
                                  var r;
                                  return b().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return ((t.next = 2), (0, w.KD)());
                                        case 2:
                                          if (!(
                                            !(r = t.sent).userid && !r.token
                                          )) {
                                            t.next = 6;
                                            break;
                                          }
                                          return (
                                            n([null, { isLogin: !1 }]),
                                            t.abrupt("return")
                                          );
                                        case 6:
                                          (0, y.ZP)(
                                            P(
                                              P({}, x),
                                              {},
                                              {
                                                baseURL:
                                                  "https://promotionvip.kugou.com",
                                                method: "get",
                                                url: "/v3/vip_level/welfare_list",
                                                params: P(
                                                  {
                                                    appid: r.appid || 1058,
                                                    mid: r.mid,
                                                    dfid: r.dfid,
                                                    userid: r.userid || 0,
                                                    token: r.token || "",
                                                  },
                                                  e,
                                                ),
                                              },
                                            ),
                                          )
                                            .then(function (t) {
                                              var e =
                                                null == t ? void 0 : t.data;
                                              (null == e
                                                ? void 0
                                                : e.status) === 1
                                                ? n([e, null])
                                                : n([null, t]);
                                            })
                                            .catch(function (t) {
                                              n([null, t]);
                                            });
                                        case 7:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                }),
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            )),
            function (t) {
              return f.apply(this, arguments);
            }),
          get_activity_my_prizes:
            ((p = (0, g.Z)(
              b().mark(function t(e) {
                return b().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var t = (0, g.Z)(
                                b().mark(function t(n) {
                                  var r;
                                  return b().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return ((t.next = 2), (0, w.KD)());
                                        case 2:
                                          if (!(
                                            !(r = t.sent).userid && !r.token
                                          )) {
                                            t.next = 6;
                                            break;
                                          }
                                          return (
                                            n([null, { isLogin: !1 }]),
                                            t.abrupt("return")
                                          );
                                        case 6:
                                          (0, y.ZP)(
                                            P(
                                              P({}, x),
                                              {},
                                              {
                                                baseURL:
                                                  "https://songplay.kugou.com",
                                                method: "get",
                                                url: "/v1/listen_level/activity_my_prizes",
                                                params: P(
                                                  {
                                                    appid: r.appid || 1058,
                                                    mid: r.mid,
                                                    dfid: r.dfid,
                                                    userid: r.userid || 0,
                                                    token: r.token || "",
                                                  },
                                                  e,
                                                ),
                                              },
                                            ),
                                          )
                                            .then(function (t) {
                                              var e =
                                                null == t ? void 0 : t.data;
                                              (null == e
                                                ? void 0
                                                : e.status) === 1
                                                ? n([e, null])
                                                : n([null, t]);
                                            })
                                            .catch(function (t) {
                                              n([null, t]);
                                            });
                                        case 7:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                }),
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            )),
            function (t) {
              return p.apply(this, arguments);
            }),
          receive_level_welfare:
            ((d = (0, g.Z)(
              b().mark(function t(e) {
                return b().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var t = (0, g.Z)(
                                b().mark(function t(n) {
                                  var r;
                                  return b().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return ((t.next = 2), (0, w.KD)());
                                        case 2:
                                          ((r = t.sent),
                                            (0, y.ZP)(
                                              P(
                                                P({}, x),
                                                {},
                                                {
                                                  baseURL:
                                                    "https://vip.kugou.com",
                                                  method: "post",
                                                  url: "/external/level_welfare/receive",
                                                  params: P(
                                                    {
                                                      appid: r.appid || 1058,
                                                      mid: r.mid,
                                                      dfid: r.dfid,
                                                      kugouid: r.userid || 0,
                                                      token: r.token || "",
                                                    },
                                                    e,
                                                  ),
                                                  kgAntiBushErrorReject: !0,
                                                  kgAntiBushErrFun:
                                                    function () {},
                                                },
                                              ),
                                            )
                                              .then(function (t) {
                                                var e =
                                                  null == t ? void 0 : t.data;
                                                (null == e
                                                  ? void 0
                                                  : e.status) === 1
                                                  ? n([e, null])
                                                  : n([null, t]);
                                              })
                                              .catch(function (t) {
                                                n([null, t]);
                                              }));
                                        case 4:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                }),
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            )),
            function (t) {
              return d.apply(this, arguments);
            }),
          listen_level_popup:
            ((v = (0, g.Z)(
              b().mark(function t(e) {
                return b().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var t = (0, g.Z)(
                                b().mark(function t(n) {
                                  var r;
                                  return b().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return ((t.next = 2), (0, w.KD)());
                                        case 2:
                                          if (!(
                                            !(r = t.sent).userid && !r.token
                                          )) {
                                            t.next = 6;
                                            break;
                                          }
                                          return (
                                            n([null, { isLogin: !1 }]),
                                            t.abrupt("return")
                                          );
                                        case 6:
                                          (0, y.ZP)(
                                            P(
                                              P({}, x),
                                              {},
                                              {
                                                baseURL:
                                                  "https://songplay.kugou.com",
                                                method: "get",
                                                url: "/v1/listen_level/popup",
                                                params: P(
                                                  {
                                                    appid: r.appid || 1058,
                                                    mid: r.mid,
                                                    dfid: r.dfid,
                                                    userid: r.userid || 0,
                                                    token: r.token || "",
                                                  },
                                                  e,
                                                ),
                                              },
                                            ),
                                          )
                                            .then(function (t) {
                                              var e =
                                                null == t ? void 0 : t.data;
                                              (null == e
                                                ? void 0
                                                : e.status) === 1
                                                ? n([e, null])
                                                : n([null, t]);
                                            })
                                            .catch(function (t) {
                                              n([null, t]);
                                            });
                                        case 7:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                }),
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            )),
            function (t) {
              return v.apply(this, arguments);
            }),
        };
      e.Z = O;
    },
    86260: function (t, e, n) {
      "use strict";
      var r = n(76792);
      n(37667);
      var i = n(48156),
        o = n(25965);
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          (e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      e.Z = function (t) {
        var e = t.name,
          n = t.size,
          a = t.color,
          c = t.onClick,
          s = t.className,
          l = t.style,
          f = n ? (0, i.Yk)(n) : null;
        return (0, o.jsx)("i", {
          className: "rIcon-".concat(e, " ").concat(void 0 === s ? "" : s),
          onClick: c,
          style: (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? u(Object(n), !0).forEach(function (e) {
                    (0, r.Z)(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n),
                    )
                  : u(Object(n)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(n, e),
                      );
                    });
            }
            return t;
          })(
            {
              fontSize: f,
              color: a,
              display: "inline-block",
              cursor: c ? "pointer" : "default",
            },
            void 0 === l ? {} : l,
          ),
        });
      };
    },
    88069: function (t, e, n) {
      "use strict";
      var r = n(17468),
        i = n(13298),
        o = n(77813),
        u = n(52599),
        a = n(5429),
        c = n(55136),
        s = n(55578),
        l = n(76792),
        f = n(82628),
        p = n.n(f),
        d = n(37667),
        v = n(53069),
        h = n.n(v),
        g = n(48156),
        m = n(96486),
        b = n(86260),
        w = n(25965);
      function y(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          (e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? y(Object(n), !0).forEach(function (e) {
                (0, l.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : y(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      var P = !1,
        x = (function (t) {
          (0, a.Z)(f, t);
          var e,
            n =
              ((e = (function () {
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
                  n = (0, s.Z)(f);
                if (e) {
                  var r = (0, s.Z)(this).constructor;
                  t = Reflect.construct(n, arguments, r);
                } else t = n.apply(this, arguments);
                return (0, c.Z)(this, t);
              });
          function f(t) {
            var e, o;
            return (
              (0, i.Z)(this, f),
              (e = n.call(this, t)),
              (0, l.Z)((0, u.Z)(e), "componentWillUnmount", function () {
                e.scrollElement &&
                  e.scrollElement.removeEventListener("scroll", e.listenScroll);
              }),
              (0, l.Z)((0, u.Z)(e), "initBarHeight", function () {
                (0, g.ne)().then(function (t) {
                  e.setState({
                    titleBarHeight:
                      (null == t ? void 0 : t.dpTitleBarHeight) || 44,
                    statusBarHeight:
                      (null == t ? void 0 : t.dpStatusBarHeight) || 0,
                  });
                });
              }),
              (0, l.Z)((0, u.Z)(e), "onTitleBarClick", function () {
                if (e.props.onTitleBarClick) {
                  e.props.onTitleBarClick();
                  return;
                }
              }),
              (0, l.Z)(
                (0, u.Z)(e),
                "onBack",
                ((o = (0, r.Z)(
                  p().mark(function t(n) {
                    var r;
                    return p().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              (n && n.stopPropagation && n.stopPropagation(),
                              !(r = e.props.onClose))
                            ) {
                              t.next = 5;
                              break;
                            }
                            return (r(), t.abrupt("return"));
                          case 5:
                            (0, g.Hm)();
                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function (t) {
                  return o.apply(this, arguments);
                }),
              ),
              (0, l.Z)((0, u.Z)(e), "shareButtonClick", function (t) {
                if (
                  (t && t.stopPropagation && t.stopPropagation(),
                  e.props.onShareClick)
                ) {
                  e.props.onShareClick();
                  return;
                }
              }),
              (0, l.Z)((0, u.Z)(e), "moreButtonClick", function (t) {
                if (
                  (t && t.stopPropagation && t.stopPropagation(),
                  e.props.onMoreClick)
                ) {
                  e.props.onMoreClick();
                  return;
                }
              }),
              (0, l.Z)((0, u.Z)(e), "ruleButtonClick", function (t) {
                if (
                  (t && t.stopPropagation && t.stopPropagation(),
                  e.props.onRuleClick)
                ) {
                  e.props.onRuleClick();
                  return;
                }
              }),
              (0, l.Z)((0, u.Z)(e), "giftButtonClick", function (t) {
                if (
                  (t && t.stopPropagation && t.stopPropagation(),
                  e.props.onGiftClick)
                ) {
                  e.props.onGiftClick();
                  return;
                }
              }),
              (0, l.Z)(
                (0, u.Z)(e),
                "listenScroll",
                (0, m.throttle)(function (t) {
                  t.target.scrollTop >= (e.offsetTop || 50)
                    ? P ||
                      ((P = !0),
                      e.setState({
                        myWrapStyle: {
                          backgroundColor: "#fff",
                          transition: "all 0.3s",
                        },
                        isFixedTitleBarWrap: P,
                      }))
                    : (P &&
                        e.setState({
                          isFixedTitleBarWrap: !1,
                          myWrapStyle: {
                            backgroundColor: "transparent",
                            transition: "none",
                          },
                        }),
                      (P = !1));
                }, 50),
              ),
              (0, l.Z)((0, u.Z)(e), "initScroll", function (t, n) {
                t &&
                  (t.addEventListener("scroll", e.listenScroll),
                  (e.scrollElement = t),
                  (e.offsetTop = n));
              }),
              (e.state = {
                titleBarHeight: (null == t ? void 0 : t.titleBarHeight) || 44,
                statusBarHeight: (null == t ? void 0 : t.statusBarHeight) || 0,
                bgOpacity: 0,
                myWrapStyle: null,
                isFixedTitleBarWrap: !1,
              }),
              e
            );
          }
          return (
            (0, o.Z)(f, [
              {
                key: "componentDidMount",
                value: function () {
                  this.initBarHeight();
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.props,
                    n = e.title,
                    r = e.subTitle,
                    i = e.isTitleAlignLeft,
                    o = e.isGradualTitle,
                    u = e.hideContent,
                    a = e.hideContentWithoutArrow,
                    c = e.titleStyle,
                    s = e.noteContent,
                    l = e.type,
                    f = e.wrapStyle,
                    p = e.isFixed,
                    d = void 0 === p || p,
                    v = e.hasShare,
                    m = e.hasMore,
                    y = e.hasRule,
                    P = e.hasGift,
                    x = e.hasPlaceholder,
                    O = e.scrollingTitle,
                    _ = void 0 === O ? "" : O,
                    C = e.renderRight,
                    A = this.state,
                    j = A.titleBarHeight,
                    I = A.statusBarHeight,
                    H = A.bgOpacity,
                    S = A.myWrapStyle,
                    B = A.isFixedTitleBarWrap,
                    D = { visibility: a ? "hidden" : "visible" };
                  (i &&
                    ((D.justifyContent = "flex-start"),
                    (D.paddingLeft = (0, g.ht)(92))),
                    o && (D.opacity = H));
                  var R = "normal" === (void 0 === l ? "normal" : l) || B,
                    Z = n;
                  return (
                    !n & B && _ && (Z = _),
                    (0, w.jsxs)("div", {
                      onClick: function () {
                        return t.onTitleBarClick();
                      },
                      children: [
                        (0, w.jsxs)("div", {
                          id: "titleBarWrap",
                          className: ""
                            .concat(h().wrap, " ")
                            .concat(d && h().wrap_fixed),
                          style: k(
                            k(k({}, S), f),
                            {},
                            { height: I + j + "px" },
                          ),
                          children: [
                            (0, w.jsx)("div", {
                              className: h().statusBar,
                              style: { height: I },
                            }),
                            (0, w.jsxs)("div", {
                              className: h().barWrap,
                              style: {
                                height: j + "px",
                                visibility: u ? "hidden" : "visible",
                              },
                              children: [
                                (0, w.jsx)("div", {
                                  className: h().titleWrap,
                                  style: D,
                                  children: Z
                                    ? "function" == typeof Z
                                      ? Z()
                                      : (0, w.jsxs)("div", {
                                          className: h().title,
                                          style: D,
                                          children: [
                                            (0, w.jsxs)("div", {
                                              className: h().topText,
                                              children: [
                                                (0, w.jsx)("div", {
                                                  className: h().titleText,
                                                  style: k(
                                                    {
                                                      color: R
                                                        ? "#000"
                                                        : "#fff",
                                                    },
                                                    c,
                                                  ),
                                                  children:
                                                    D.opacity < 0.5 ? "" : Z,
                                                }),
                                                s
                                                  ? (0, w.jsx)(w.Fragment, {
                                                      children: s,
                                                    })
                                                  : null,
                                              ],
                                            }),
                                            (0, w.jsx)("div", {
                                              className: h().subTitleWrap,
                                              children: r
                                                ? (0, w.jsx)(w.Fragment, {
                                                    children: r,
                                                  })
                                                : null,
                                            }),
                                          ],
                                        })
                                    : null,
                                }),
                                (0, w.jsx)("div", {
                                  className: h().backWrap,
                                  onClick: function (e) {
                                    return t.onBack(e);
                                  },
                                  children: (0, w.jsx)(b.Z, {
                                    name: "back",
                                    color: R ? "#000" : "#fff",
                                  }),
                                }),
                                (0, w.jsxs)("div", {
                                  className: h().btnWrap,
                                  children: [
                                    v &&
                                      (0, w.jsx)(b.Z, {
                                        name: "share",
                                        color: R ? "#000" : "#fff",
                                        onClick: this.shareButtonClick,
                                      }),
                                    m &&
                                      (0, w.jsx)(b.Z, {
                                        name: "more",
                                        fillColor: R ? "#000" : "#fff",
                                        onClick: this.moreButtonClick,
                                      }),
                                    y &&
                                      (0, w.jsx)("div", {
                                        className: h().ruleWrap,
                                        style: { color: R ? "#000" : "#fff" },
                                        onClick: this.ruleButtonClick,
                                        children: "规则",
                                      }),
                                    P &&
                                      (0, w.jsx)(b.Z, {
                                        name: "gift",
                                        color: R ? "#000" : "#fff",
                                        onClick: this.giftButtonClick,
                                      }),
                                  ],
                                }),
                                C && "function" == typeof C && C(),
                              ],
                            }),
                          ],
                        }),
                        d &&
                          (void 0 === x || x) &&
                          (0, w.jsx)("div", {
                            className: h().placeholder,
                            style: { height: Number(j) + Number(I) + "px" },
                          }),
                      ],
                    })
                  );
                },
              },
            ]),
            f
          );
        })(d.Component);
      e.Z = x;
    },
    42421: function (t, e, n) {
      "use strict";
      n.d(e, {
        Yu: function () {
          return d;
        },
        q3: function () {
          return p;
        },
        y8: function () {
          return f;
        },
        zS: function () {
          return s;
        },
      });
      var r = n(81208),
        i = n(76792),
        o = n(37667),
        u = n(76801);
      function a(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          (e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? a(Object(n), !0).forEach(function (e) {
                (0, i.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      var s = {
          bgColor: "rgba(142, 203, 186, 1)",
          textColor: "rgba(51, 102, 79, 1)",
          underTextColor: "rgba(51, 102, 79, 0.5)",
          proccessColors: ["rgba(142, 203, 186, 1)", "rgba(77, 153, 119, 1)"],
          btnColor: "rgba(176, 255, 233, 1)",
        },
        l = function (t) {
          var e = t.mainColor,
            n = t.initColor,
            i = c(c({}, s), n);
          if (!e) return i;
          var o = (0, u.lu)(e),
            a = (0, u.At)({
              r: null == o ? void 0 : o.r,
              g: null == o ? void 0 : o.g,
              b: null == o ? void 0 : o.b,
            }),
            l = (0, r.Z)(a, 3),
            f = l[0],
            p = l[1],
            d = l[2],
            v = (0, u.ek)((0, u.Nv)(f - 10, p + 20, d - 40));
          console.log("textColor", v);
          var h = (0, u.Wp)(v, 0.5),
            g = [e, (0, u.ek)((0, u.Nv)(f - 10, p + 20, d - 20))];
          return {
            bgColor: e,
            textColor: v,
            underTextColor: h,
            proccessColors: g,
            btnColor: (0, u.ek)((0, u.Nv)(f, Math.min(p, 50), 100)),
          };
        },
        f = function (t, e) {
          return "SET_COLOR" === e.type ? l(e.payload) : t;
        },
        p = (0, o.createContext)(s),
        d = function () {
          return (0, o.useContext)(p);
        };
    },
    45350: function (t, e, n) {
      "use strict";
      n.d(e, {
        BL: function () {
          return p;
        },
        CN: function () {
          return d;
        },
        FN: function () {
          return g;
        },
        SV: function () {
          return h;
        },
        Tu: function () {
          return s;
        },
        cF: function () {
          return c;
        },
        e0: function () {
          return l;
        },
        my: function () {
          return f;
        },
      });
      var r,
        i,
        o = n(17468),
        u = n(82628),
        a = n.n(u),
        c = n(66146),
        s = function () {},
        l = function () {},
        f = {
          isInClient: function () {
            return !1;
          },
          mobileCall: function () {},
          KgWebMobileCall: function () {},
          isAndroid: !1,
          isIOS: !1,
        },
        p = { getFCPTime: function () {} },
        d = function () {},
        v = {},
        h = function (t) {
          return (t && t.children) || null;
        },
        g = { info: function () {} };
      ((r = (0, o.Z)(
        a().mark(function t() {
          var e = arguments;
          return a().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!i) {
                      t.next = 3;
                      break;
                    }
                    return (i.apply(void 0, e), t.abrupt("return"));
                  case 3:
                    return (
                      (t.prev = 3),
                      (t.next = 6),
                      n.e(203).then(n.t.bind(n, 8652, 23))
                    );
                  case 6:
                    ((i = t.sent.default).apply(void 0, e), (t.next = 14));
                    break;
                  case 11:
                    ((t.prev = 11),
                      (t.t0 = t.catch(3)),
                      console.error("openKugouApp error: ", t.t0));
                  case 14:
                  case "end":
                    return t.stop();
                }
            },
            t,
            null,
            [[3, 11]],
          );
        }),
      )),
        (l = function () {
          return r.apply(this, arguments);
        }),
        n(92170),
        (s = c.getBaseInfo),
        (f = c.LightMobileCall));
      try {
        n(90381);
      } catch (t) {
        console.error("AES error: ", t);
      }
      try {
        n(26041);
      } catch (t) {
        console.error("RSA error: ", t);
      }
      try {
        p = n(17046);
      } catch (t) {
        console.error("KGTime error: ", t);
      }
      ((d = n(97170)), n(3330).Z);
      try {
        ((v = n(31829)), console.log("KGPicker loaded", v.CascadePicker));
      } catch (t) {
        console.error("KGPicker error: ", t);
      }
      try {
        var m = n(24992);
        ((h = m.default || m),
          m.withErrorBoundary && m.withErrorBoundary,
          m.setErrorBoundaryConfig && m.setErrorBoundaryConfig);
      } catch (t) {
        console.error("ErrorBoundary load error:", t);
      }
      try {
        var b = n(37285);
        g = b.Toast || b.default || b;
      } catch (t) {
        console.error("Toast error: ", t);
      }
    },
    76801: function (t, e, n) {
      "use strict";
      function r(t) {
        var e,
          n = t.r,
          r = t.g,
          i = t.b,
          o = Math.max((n /= 255), (r /= 255), (i /= 255)),
          u = Math.min(n, r, i),
          a = o - u;
        if (o === u) e = 0;
        else {
          switch (o) {
            case n:
              e = (r - i) / a + (r < i ? 6 : 0);
              break;
            case r:
              e = (i - n) / a + 2;
              break;
            case i:
              e = (n - r) / a + 4;
          }
          e /= 6;
        }
        return [360 * e, 100 * (0 === o ? 0 : a / o), 100 * o];
      }
      function i(t, e, n) {
        var r,
          i,
          o,
          u = Math.floor((t %= 360) / 60),
          a = t / 60 - u,
          c = (n /= 100) * (1 - (e /= 100)),
          s = n * (1 - a * e),
          l = n * (1 - (1 - a) * e);
        switch (u) {
          case 0:
            ((r = n), (i = l), (o = c));
            break;
          case 1:
            ((r = s), (i = n), (o = c));
            break;
          case 2:
            ((r = c), (i = n), (o = l));
            break;
          case 3:
            ((r = c), (i = s), (o = n));
            break;
          case 4:
            ((r = l), (i = c), (o = n));
            break;
          default:
            ((r = n), (i = c), (o = s));
        }
        return {
          r: Math.round(255 * r),
          g: Math.round(255 * i),
          b: Math.round(255 * o),
        };
      }
      function o(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!t) return "";
        var n = t.r,
          r = t.g,
          i = t.b,
          o = t.a;
        return e
          ? "#"
              .concat(n.toString(16).padStart(2, "0"))
              .concat(r.toString(16).padStart(2, "0"))
              .concat(i.toString(16).padStart(2, "0"))
          : "rgba("
              .concat(n, ",")
              .concat(r, ",")
              .concat(i, ",")
              .concat(o || 1, ")");
      }
      function u(t) {
        if (!t) return null;
        if ("string" == typeof t) {
          if (t.startsWith("#")) {
            var e = t.replace("#", "");
            3 === e.length &&
              (e = e
                .split("")
                .map(function (t) {
                  return t + t;
                })
                .join(""));
            var n = parseInt(e, 16);
            return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: 255 & n, a: 1 };
          }
          if (t.startsWith("rgba")) {
            var r = t.match(/[\d.]+/g).map(Number);
            return { r: r[0], g: r[1], b: r[2], a: void 0 !== r[3] ? r[3] : 1 };
          }
          if (t.startsWith("rgb")) {
            var i = t.match(/[\d.]+/g).map(Number);
            return { r: i[0], g: i[1], b: i[2], a: 1 };
          }
        }
        return { r: 0, g: 0, b: 0, a: 1 };
      }
      function a(t, e) {
        if (!t || "function" != typeof t.toLowerCase) return "";
        var n = String(t)
          .trim()
          .match(
            /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*([01]?\.?\d*))?\s*\)$/i,
          );
        if (n) {
          var r = Math.max(0, Math.min(255, Number(n[1] || 0))),
            i = Math.max(0, Math.min(255, Number(n[2] || 0))),
            o = Math.max(0, Math.min(255, Number(n[3] || 0))),
            u = void 0 !== n[4] && "" !== n[4] ? Number(n[4]) : 1;
          return (
            void 0 !== e &&
              (u = isNaN(e) ? 1 : Math.max(0, Math.min(1, Number(e)))),
            "rgba("
              .concat(r, ",")
              .concat(i, ",")
              .concat(o, ",")
              .concat(Number(u.toFixed(2)), ")")
          );
        }
        void 0 !== e && (isNaN(e) || e > 1) && (e = 1);
        var a = t.toLowerCase();
        if (!(
          a &&
          /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(
            a,
          )
        ))
          return a;
        var c = "",
          s = "ff",
          l = 1;
        if (3 === (a = a.slice(1)).length)
          for (var f = 0; f < a.length; f++)
            c += a.slice(f, f + 1).concat(a.slice(f, f + 1));
        else if (4 === a.length) {
          ((s = a.slice(-1) + a.slice(-1)), (a = a.slice(0, -1)));
          for (var p = 0; p < a.length; p++)
            c += a.slice(p, p + 1).concat(a.slice(p, p + 1));
        } else
          6 === a.length
            ? (c = a)
            : 8 === a.length && ((s = a.slice(0, 2)), (c = a.slice(2)));
        l = void 0 === e ? (parseInt("0x" + s) / 255).toFixed(2) : e;
        for (var d = [], v = 0; v < 6; v += 2)
          d.push(parseInt("0x" + c.slice(v, v + 2)));
        return "rgba(" + d.join(",") + "," + l + ")";
      }
      n.d(e, {
        At: function () {
          return r;
        },
        Nv: function () {
          return i;
        },
        Wp: function () {
          return a;
        },
        ek: function () {
          return o;
        },
        lu: function () {
          return u;
        },
      });
    },
    55452: function (t, e, n) {
      "use strict";
      n.d(e, {
        C0: function () {
          return v;
        },
        IB: function () {
          return i;
        },
        M8: function () {
          return s;
        },
        Mm: function () {
          return g;
        },
        Ok: function () {
          return u;
        },
        Qb: function () {
          return c;
        },
        kJ: function () {
          return o;
        },
        mB: function () {
          return h;
        },
        n4: function () {
          return f;
        },
        nL: function () {
          return l;
        },
        t2: function () {
          return d;
        },
        yo: function () {
          return p;
        },
      });
      var r = n(48156),
        i = {
          openURL: 123,
          callSoftUserLogin: 102,
          getMobileInfo: 124,
          getVersion: 122,
          isSetWifiOnly: 1010,
          closeFrameNum: 247,
          showHideBar: 128,
          jumpPersonalCenter: 182,
          disabledSlideToExit: 733,
          getStatusHeight: 231,
          changeStatusColor: 232,
          jumpOpernDetailPage: 1122,
          getOpernCollectionList: 1124,
          registerAndroidEvent: 1128,
          isShowDialog: 230,
          getSongStatus: 729,
          categoryPlayMV: 707,
          getSongLikeStatus: 868,
          openPlayAndShare: 1371,
          openComment: 399,
          openMiniprogram: 781,
          disableCloseAfterPay: 1357,
          openHippy: 1429,
          listen: 108,
          getSongCollectStatus: 868,
          forbidSwiperButCanLeftestQuit: 193,
        },
        o = { h5: 1058, web: 1014, client: null },
        u = [
          { name: "全球年榜", value: 2 },
          { name: "省月榜", value: 3 },
          { name: "市周榜", value: 4 },
        ],
        a = [
          { name: "全球年排名", value: 2 },
          { name: "省月排名", value: 3 },
          { name: "市周排名", value: 4 },
        ],
        c = 50,
        s = 3,
        l = function () {
          var t,
            e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
            n = arguments.length > 1 ? arguments[1] : void 0;
          return 3 === e
            ? "".concat((null == n ? void 0 : n.province_name) || "省", "月榜")
            : 4 === e
              ? "".concat((null == n ? void 0 : n.city_name) || "市", "周榜")
              : null ===
                    (t = u.find(function (t) {
                      return t.value === e;
                    })) || void 0 === t
                ? void 0
                : t.name;
        },
        f = function () {
          var t,
            e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
            n = arguments.length > 1 ? arguments[1] : void 0;
          return 3 === e
            ? "".concat(
                (null == n ? void 0 : n.province_name) || "省",
                "月排名",
              )
            : 4 === e
              ? "".concat((null == n ? void 0 : n.city_name) || "市", "周排名")
              : null ===
                    (t = a.find(function (t) {
                      return t.value === e;
                    })) || void 0 === t
                ? void 0
                : t.name;
        },
        p =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAclBMVEVjc5xre6X///////////////////////////////////////////////////95hKrh6OyUn7no6/CnsMjP1OHV2eWos8q3wNHi5u2eqMTe3+mbpcHq7fLM0t/f4Ou0us/o7PCOmrl2hai+xdZ+jazEydswhzRyAAAAJnRSTlMfHyglIiwqHiQdISAbLhohHBwqJichHyYjIzEnMh8pLiUlHRwkMBs6cRMAAAnYSURBVHja7JexCoUwDEWboaO4p4Xyhv7/Lz7poIKLViE34WaR41SvCc1JkkZtj1GuGeksc3wpcc5AR/mCxT8fr/2yeR9wRK48QGIwVLCzLGcUzwwU6gtOQA0+z1CRPubIv0PAwr3P8Xb4SN9i3hNctugj0GzeBxwR+gg84/gEfSTkAmwfKX0EKEz6CH0EnYGOQh+B8Qn6SMAREbD7mT4C4xP0kZALsH2k9BGgMOF9ZC2tq9atVHsrq08fKV1rzsuS96raft585E+t2e0oCANReCkuMdmQhj9FRGGNvv8r7ik2jtra1r06no69/zIM5UvV0zgCAfWUYdIf9LEFDDCUHhJknPSn+Mg0logwuCgf4SP7wfYC+yuY4ZffR9AOyxDMRD4i+rI8VGZFUC4Zs4/owVBEIQqzDZrXR86D9CMMUqDqM6uPmH5YkjgKqtacPpINFsL84i1Bjpw+clw4zBblMA0xaRl9ZGswLEUZ7gY2m4bPR84jINLeV8KBgafzkRocaS8sREiObD7SpI1HcV13ach8ZPhOfbKKx9RcPrItkShGgbIdkTRUH1uGQUhCME5qJh/ZJ54etu6jih2RjxyXjoQgbAmGkLQ8PpKFMYTGg4HKaEakKROOc5SPArWj8ZE26TwHiSdKqZbGR1SSf7hRwMC+ZvERDY7/oIACC9EkPrIrY8+Vdz5sS5AdiY80qf7hjrpaUDYkPtLGjnJvQ7BQSzoSH2mj7yt/BITER+aof/gbcktH4iNz1D/884HfNT2Jj8zp/oHchkPSk/hIH/QP72v36dEi+djqAx+8ofkQEBIf6WIO5T89JAcSH9mE/MPFMOsxGxIfqRLtw50OG80xIl/ZO/4hGBIaH1k7GMLhwLgoPzQ+0r3nH885sPiIM+2vOADiy4bnfkQ9NMNPYTaXJFf5KuO5H+niDQEDNl8ORPcjlQWI+IfbDvzyiul+ZJZeBL5LHBZgqJ7qfqRy7VyiQg1RFdf9yAyEmH+4GNh6svuRynYjxT8EJUdDuO5HcCgm+4eAgORA92eUU+7xjwAEFmp14vu/1l/7ZrusJgyE4Z7CFAHHBL/Q6egcP+7/GrthK28xmwQJWmzPktL25zNvluQRUsmrIPzDYqGqpvi91iXsH4DgRC7T/F5r03d/ZRhMIIepfq+1sSi8D6zNdL/XEjIR42jy0NP9XuvbN33fHtK2hPPQ0z4/cgmvg8xxmfr5kWqGhxUNCcI4SDX98yNn7dq3g0af3+L8SFV6/SPJqrc5P1LtGENqjrx6q/MjlU4kjpmu3u/8SHUouxjloXrH8yPmr3O1PRz0fK71ZVudv86z/3eHdadzHn0aPvJ1nv2rRb7Os0/7/9M5jz4tH/k6zz5BH/nXzrOr60+q1WpV13Sjf55O6p3Os6vTql4fl8vl94SvP2t5PK7X9eqkpu0j11V9XHbff4g1S2bLY72/TtJHTmCA1tKwKUzx/biuT5PyEfVzDQgEImIQA92bSlMan/VeTWSz9fNoQyANGwWV0jC13v99HzmtXT9fiRAcCQLhMrmc/qqP/FzKvyby+w+pyc2tyYJHitrt/5qPrAhDDsMMIY/OxErBAZSXtggwHAz9KGjcVwGUl/nIaYmvS8KPK0wsNDkC6aRyfamPqDUoLIwABfKwE0mLIq0/Xucj+yXef/Qk4Sb3oxQEQrXbv8pH1o402vawQO4I5DQ4ElOHl/jIlbrD8dbZ+dg10wo0DpaCBodS7tTzfWQvdgf2ib7uSGcMID2wOA1DQVeR7Z/tI7XndRTCkGBuWSANC4VGC7N9ro/UzibnLCwWDiNBIC4KQFCZ2/aZPkJPXVPOeSV0eWIv557+KFuWMjs8z0fWLcUPi4Gj8PsHulyeU6Bo7odn+UhtMHwrIcrtH/Jjt51axEAXV7Z9zmZrhW8yHvcPbnLHCoJAWoqMLiJ5ho/sv/u/knHKB6PIDJ3Vg/NAIFTV+D5yTdy7EpdEASP9nYhIQhdzACPjRMpMje4jn4ZjoH+4H7voc0ZhDJ5aTemxW2QDip7+MevhHwVAypIpwMEoh3F9ZI/t7iP+MYN/uKoACk+sjEdb1Zg+ohIXhfOpywNO62gP7vVOl2fIw1T+MaKPbMRACAJpeAMBh9wfCATzqq3LeD6iQCD6R+L3DzkNvgECzcEUqPNoPvLp+ng38fjHDDTebSIaHTTd0mP5yNaznI/kH78BGMKKpBrJRz6f4B+Ig2G6C+Fd6XF8ZOv4UlRGCPgHmjxFd9wouEesyvNqFB/5dC0eotdSAcO5fIAD/tHc5NJj+MhWxBATsSyqr3/giSWw5BxJtI/spKcVD2kV5Pbo5R9mSnX8Q5xXzU3Hb7bOj/kH0khdJF3/QBouEpNIfo72kYMcSNg/0gf9IxMq50Esl2gfSSyKkH/gN+p+/nHLwtxEEhPJPNZH0Ory74ny6tHXP/DcdbUHTyyqKrJFdtJzV6RgCN9+lxHgH+WtHHEYhBbkEucjH6GNO1YPxOF+aUB3rB6IgyEsDI7kVnE+srWfVlIaVh4SBRIprTxkCiRCVUX5yCbsH+h0r9diHUSng0RGoYG6RPlIOqZ/mOH1D0DYHPkixkfO4T6Hf2CD1cs/Ahus3FydOkf4yBYUEf5R3PtH6fePXOTIqwgf2YT8Y3aLxCvnwCgZxtscwOjWJcJHdg/6R/qYf9Dl3l1lFkiEj8zC/kFX0D86XU5XyD8Iwq75YriPfCTB3+AwrXr9nPjntHIu52bYHPkiwkcC212TBcqJkQq7EionBt2lWkRsthL0h1zuRRAonXIugkARa05Ta7iPfLRaK5BAPnz+gWkF+fD7R+5CWQz3EeUMZCb5h0zCEiX7h2xSFgINSkQP9xEF9XDah+wfWAgt+wj5B5VEQiDDW0S59iWcBRhm4nIO/+AswNBQlDJFZjPQRaWH+QiDMEaEfxQP+occR0Oih/uICvtH6vcPaXvVmwKJNKWH+wiBhF9+hPwDKE4S+IePRA/3ERV8xenxD8hgZ/Vw+odU3B7Nn8VcD/cRFfYPeV4VTv+QvTY3LGIejMKJDPcRJQViCg0idwfecTIAGsRj55k0rZjCBLLQw31E+b/2QRh+/+h6bW//QJszih7uI8pj55wFWOQmL+72JGAJNTlncWNZ0KWH+4h62D+KB/0j9/jHDYZBKJHhPqJ8/sEQgZ8Tu1qb+X5OlKdV3qRhxkIP9xHl8Y8UcfTyj8yx3/WthJyFuTVTa7iPKOugQSvnbv/AnDID8tHLP5AGD0ahi0oP9xElOlTL4pAP+AdKXD2gtSILugNTa6iPAOJ3IoCQUbB6cCKAkFCAIbcHY5jLVIyPRPlHGekfHAhzmIrxEdk/AhSyf4QpwAAKHlx+H/kFl2k8F0CjjvEAAAAASUVORK5CYII=",
        d = "266431",
        v = "https://singerimg.kugou.com/uploadpic/softhead.jpg",
        h = function () {
          return r.UB
            ? [
                {
                  img: "https://webvoobssdl.kugou.com/cf3f6051780e46c7d4a33518fe9f5c82.png",
                  title: "微信",
                  type: 2,
                },
                {
                  img: "https://webvoobssdl.kugou.com/563b74b8cf6e708bddc2f808c684e082.png",
                  title: "朋友圈",
                  type: 1,
                },
              ]
            : [
                {
                  img: "https://webvoobssdl.kugou.com/418254a5b4bac2d8a4baa1e7be5f4318.png",
                  title: "保存",
                  type: "save",
                },
                {
                  img: "https://webvoobssdl.kugou.com/a6fbaed9519038271b70b0b118359618.png",
                  title: "小红书",
                  type: 7,
                },
                {
                  img: "https://webvoobssdl.kugou.com/cf3f6051780e46c7d4a33518fe9f5c82.png",
                  title: "微信",
                  type: 2,
                },
                {
                  img: "https://webvoobssdl.kugou.com/563b74b8cf6e708bddc2f808c684e082.png",
                  title: "朋友圈",
                  type: 1,
                },
                {
                  img: "https://webvoobssdl.kugou.com/f175cfb0ac06fb030b2b6b6374a6a2b9.png",
                  title: "QQ",
                  type: 3,
                },
                {
                  img: "https://webvoobssdl.kugou.com/c5debf7e9c711ffcb95431074c0a7619.png",
                  title: "QQ空间",
                  type: 5,
                },
                {
                  img: "https://webvoobssdl.kugou.com/3ee8bda169e4e1f917fbfe24fd114efc.png",
                  title: "微博",
                  type: 4,
                },
              ];
        },
        g =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAclBMVEVjc5xre6X///////////////////////////////////////////////////95hKrh6OyUn7no6/CnsMjP1OHV2eWos8q3wNHi5u2eqMTe3+mbpcHq7fLM0t/f4Ou0us/o7PCOmrl2hai+xdZ+jazEydswhzRyAAAAJnRSTlMfHyglIiwqHiQdISAbLhohHBwqJichHyYjIzEnMh8pLiUlHRwkMBs6cRMAAAnYSURBVHja7JexCoUwDEWboaO4p4Xyhv7/Lz7poIKLViE34WaR41SvCc1JkkZtj1GuGeksc3wpcc5AR/mCxT8fr/2yeR9wRK48QGIwVLCzLGcUzwwU6gtOQA0+z1CRPubIv0PAwr3P8Xb4SN9i3hNctugj0GzeBxwR+gg84/gEfSTkAmwfKX0EKEz6CH0EnYGOQh+B8Qn6SMAREbD7mT4C4xP0kZALsH2k9BGgMOF9ZC2tq9atVHsrq08fKV1rzsuS96raft585E+t2e0oCANReCkuMdmQhj9FRGGNvv8r7ik2jtra1r06no69/zIM5UvV0zgCAfWUYdIf9LEFDDCUHhJknPSn+Mg0logwuCgf4SP7wfYC+yuY4ZffR9AOyxDMRD4i+rI8VGZFUC4Zs4/owVBEIQqzDZrXR86D9CMMUqDqM6uPmH5YkjgKqtacPpINFsL84i1Bjpw+clw4zBblMA0xaRl9ZGswLEUZ7gY2m4bPR84jINLeV8KBgafzkRocaS8sREiObD7SpI1HcV13ach8ZPhOfbKKx9RcPrItkShGgbIdkTRUH1uGQUhCME5qJh/ZJ54etu6jih2RjxyXjoQgbAmGkLQ8PpKFMYTGg4HKaEakKROOc5SPArWj8ZE26TwHiSdKqZbGR1SSf7hRwMC+ZvERDY7/oIACC9EkPrIrY8+Vdz5sS5AdiY80qf7hjrpaUDYkPtLGjnJvQ7BQSzoSH2mj7yt/BITER+aof/gbcktH4iNz1D/884HfNT2Jj8zp/oHchkPSk/hIH/QP72v36dEi+djqAx+8ofkQEBIf6WIO5T89JAcSH9mE/MPFMOsxGxIfqRLtw50OG80xIl/ZO/4hGBIaH1k7GMLhwLgoPzQ+0r3nH885sPiIM+2vOADiy4bnfkQ9NMNPYTaXJFf5KuO5H+niDQEDNl8ORPcjlQWI+IfbDvzyiul+ZJZeBL5LHBZgqJ7qfqRy7VyiQg1RFdf9yAyEmH+4GNh6svuRynYjxT8EJUdDuO5HcCgm+4eAgORA92eUU+7xjwAEFmp14vu/1l/7ZrusJgyE4Z7CFAHHBL/Q6egcP+7/GrthK28xmwQJWmzPktL25zNvluQRUsmrIPzDYqGqpvi91iXsH4DgRC7T/F5r03d/ZRhMIIepfq+1sSi8D6zNdL/XEjIR42jy0NP9XuvbN33fHtK2hPPQ0z4/cgmvg8xxmfr5kWqGhxUNCcI4SDX98yNn7dq3g0af3+L8SFV6/SPJqrc5P1LtGENqjrx6q/MjlU4kjpmu3u/8SHUouxjloXrH8yPmr3O1PRz0fK71ZVudv86z/3eHdadzHn0aPvJ1nv2rRb7Os0/7/9M5jz4tH/k6zz5BH/nXzrOr60+q1WpV13Sjf55O6p3Os6vTql4fl8vl94SvP2t5PK7X9eqkpu0j11V9XHbff4g1S2bLY72/TtJHTmCA1tKwKUzx/biuT5PyEfVzDQgEImIQA92bSlMan/VeTWSz9fNoQyANGwWV0jC13v99HzmtXT9fiRAcCQLhMrmc/qqP/FzKvyby+w+pyc2tyYJHitrt/5qPrAhDDsMMIY/OxErBAZSXtggwHAz9KGjcVwGUl/nIaYmvS8KPK0wsNDkC6aRyfamPqDUoLIwABfKwE0mLIq0/Xucj+yXef/Qk4Sb3oxQEQrXbv8pH1o402vawQO4I5DQ4ElOHl/jIlbrD8dbZ+dg10wo0DpaCBodS7tTzfWQvdgf2ib7uSGcMID2wOA1DQVeR7Z/tI7XndRTCkGBuWSANC4VGC7N9ro/UzibnLCwWDiNBIC4KQFCZ2/aZPkJPXVPOeSV0eWIv557+KFuWMjs8z0fWLcUPi4Gj8PsHulyeU6Bo7odn+UhtMHwrIcrtH/Jjt51axEAXV7Z9zmZrhW8yHvcPbnLHCoJAWoqMLiJ5ho/sv/u/knHKB6PIDJ3Vg/NAIFTV+D5yTdy7EpdEASP9nYhIQhdzACPjRMpMje4jn4ZjoH+4H7voc0ZhDJ5aTemxW2QDip7+MevhHwVAypIpwMEoh3F9ZI/t7iP+MYN/uKoACk+sjEdb1Zg+ohIXhfOpywNO62gP7vVOl2fIw1T+MaKPbMRACAJpeAMBh9wfCATzqq3LeD6iQCD6R+L3DzkNvgECzcEUqPNoPvLp+ng38fjHDDTebSIaHTTd0mP5yNaznI/kH78BGMKKpBrJRz6f4B+Ig2G6C+Fd6XF8ZOv4UlRGCPgHmjxFd9wouEesyvNqFB/5dC0eotdSAcO5fIAD/tHc5NJj+MhWxBATsSyqr3/giSWw5BxJtI/spKcVD2kV5Pbo5R9mSnX8Q5xXzU3Hb7bOj/kH0khdJF3/QBouEpNIfo72kYMcSNg/0gf9IxMq50Esl2gfSSyKkH/gN+p+/nHLwtxEEhPJPNZH0Ory74ny6tHXP/DcdbUHTyyqKrJFdtJzV6RgCN9+lxHgH+WtHHEYhBbkEucjH6GNO1YPxOF+aUB3rB6IgyEsDI7kVnE+srWfVlIaVh4SBRIprTxkCiRCVUX5yCbsH+h0r9diHUSng0RGoYG6RPlIOqZ/mOH1D0DYHPkixkfO4T6Hf2CD1cs/Ahus3FydOkf4yBYUEf5R3PtH6fePXOTIqwgf2YT8Y3aLxCvnwCgZxtscwOjWJcJHdg/6R/qYf9Dl3l1lFkiEj8zC/kFX0D86XU5XyD8Iwq75YriPfCTB3+AwrXr9nPjntHIu52bYHPkiwkcC212TBcqJkQq7EionBt2lWkRsthL0h1zuRRAonXIugkARa05Ta7iPfLRaK5BAPnz+gWkF+fD7R+5CWQz3EeUMZCb5h0zCEiX7h2xSFgINSkQP9xEF9XDah+wfWAgt+wj5B5VEQiDDW0S59iWcBRhm4nIO/+AswNBQlDJFZjPQRaWH+QiDMEaEfxQP+occR0Oih/uICvtH6vcPaXvVmwKJNKWH+wiBhF9+hPwDKE4S+IePRA/3ERV8xenxD8hgZ/Vw+odU3B7Nn8VcD/cRFfYPeV4VTv+QvTY3LGIejMKJDPcRJQViCg0idwfecTIAGsRj55k0rZjCBLLQw31E+b/2QRh+/+h6bW//QJszih7uI8pj55wFWOQmL+72JGAJNTlncWNZ0KWH+4h62D+KB/0j9/jHDYZBKJHhPqJ8/sEQgZ8Tu1qb+X5OlKdV3qRhxkIP9xHl8Y8UcfTyj8yx3/WthJyFuTVTa7iPKOugQSvnbv/AnDID8tHLP5AGD0ahi0oP9xElOlTL4pAP+AdKXD2gtSILugNTa6iPAOJ3IoCQUbB6cCKAkFCAIbcHY5jLVIyPRPlHGekfHAhzmIrxEdk/AhSyf4QpwAAKHlx+H/kFl2k8F0CjjvEAAAAASUVORK5CYII=";
    },
    6757: function (t, e, n) {
      "use strict";
      n.d(e, {
        ZP: function () {
          return a;
        },
      });
      var r,
        i = n(45350),
        o = {
          apiPath: "https://genesisapi.kugou.com",
          apiPathRetry: "https://genesisapi.kugou.com",
        },
        u = n(48156);
      ((i.cF.requestConfig = Object.assign(i.cF.requestConfig, {
        baseURL: o.apiPath,
        async: !0,
        useMobileCall:
          null === i.my || void 0 === i.my
            ? void 0
            : null === (r = i.my.isInClient) || void 0 === r
              ? void 0
              : r.call(i.my),
        timeout: 8e3,
      })),
        (0, u.z)().then(function (t) {
          "wifi" === t.net && (i.cF.requestConfig.timeout = 8e3);
        }));
      var a = function (t) {
        if (t) {
          var e = [];
          return (
            "GET" === t.method.toUpperCase()
              ? e.push({ "Content-Type": "application/x-www-form-urlencoded" })
              : "POST" === t.method.toUpperCase() &&
                e.push({ "Content-Type": "application/json" }),
            (t.headers = e.concat(t.headers || [])),
            (i.cF.requestConfig.baseURL === o.apiPath ||
              t.baseURL === o.apiPath) &&
              (t.retryURL = o.apiPathRetry),
            (function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 12e3;
              return function (n) {
                var r = !1;
                return new Promise(function (i, o) {
                  var u = setTimeout(function () {
                    r || ((r = !0), o(Error("request timeout")));
                  }, e);
                  t(n)
                    .then(function (t) {
                      r || ((r = !0), clearTimeout(u), i(t));
                    })
                    .catch(function (t) {
                      r || ((r = !0), clearTimeout(u), o(t));
                    });
                });
              };
            })(i.cF)(t).catch(function (t) {
              throw (console.log("请求catch", t), t);
            })
          );
        }
      };
    },
    22301: function (t, e, n) {
      "use strict";
      var r,
        i,
        o,
        u,
        a = n(76792),
        c = n(17468),
        s = n(82628),
        l = n.n(s),
        f = n(25819),
        p = n(48156),
        d = n(78941),
        v = n(66314),
        h = n(45350),
        g = n(96486);
      function m(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          (e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function b(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? m(Object(n), !0).forEach(function (e) {
                (0, a.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : m(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      var w = (0, p.Dv)("hreffrom"),
        y = !1;
      try {
        window.location.href.match(/https?:\/\/test\.kugou\.com/) && (y = !0);
      } catch (t) {}
      var k = { apm: 1, bi: 2 },
        P = {
          1135198: { a: 1135198, b: "曝光", ft: "听歌等级页", r: "听歌等级页" },
          1135199: { a: 1135199, b: "点击", ft: "规则入口", r: "听歌等级页" },
          1135200: { a: 1135200, b: "点击", ft: "会员铭牌", r: "听歌等级页" },
          1135201: {
            a: 1135201,
            b: "曝光",
            ft: "头部卡片加速按钮",
            r: "听歌等级页",
          },
          1135202: {
            a: 1135202,
            b: "点击",
            ft: "头部卡片加速按钮",
            r: "听歌等级页",
          },
          1135204: { a: 1135204, b: "点击", ft: "排行榜tab", r: "听歌等级页" },
          1135205: {
            a: 1135205,
            b: "曝光",
            ft: "排行榜活动banner",
            r: "听歌等级页",
          },
          1135206: { a: 1135206, b: "点击", ft: "点赞按钮", r: "听歌等级页" },
          1135207: {
            a: 1135207,
            b: "点击",
            ft: "榜单加速标签",
            r: "听歌等级页",
          },
          1135208: { a: 1135208, b: "曝光", ft: "动画", r: "听歌等级页" },
          1135209: { a: 1135209, b: "点击", ft: "动画按钮", r: "听歌等级页" },
          1135213: { a: 1135213, b: "点击", ft: "分享按钮", r: "听歌等级页" },
          1135218: {
            a: 1135218,
            b: "曝光",
            ft: "听歌等级权益页",
            r: "听歌等级页",
          },
          1135219: {
            a: 1135219,
            b: "点击",
            ft: "听歌等级权益页",
            r: "听歌等级页",
          },
        };
      function x() {
        return (x = (0, c.Z)(
          l().mark(function t(e) {
            var n, r;
            return l().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return ((t.next = 2), (0, p.KD)());
                  case 2:
                    return (
                      (n = t.sent),
                      (r = b(
                        b({}, P[e]),
                        {},
                        {
                          timestamp: +new Date(),
                          appid: n.appid,
                          mid: n.mid || 0,
                          userid: n.userid || 0,
                          uuid: n.uuid || 0,
                          hreffrom: w,
                        },
                      )),
                      d.Z.iphone
                        ? (r.appid = 1e3)
                        : d.Z.android && (r.appid = 1005),
                      p.DT && (r.tv = n.clientver || 0),
                      t.abrupt("return", r)
                    );
                  case 7:
                  case "end":
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      function O() {
        return _.apply(this, arguments);
      }
      function _() {
        return (_ = (0, c.Z)(
          l().mark(function t() {
            var e, n, r;
            return l().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!u) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt(
                      "return",
                      b(b({}, u), {}, { timestamp: +new Date() }),
                    );
                  case 2:
                    return ((t.next = 4), (0, p.KD)());
                  case 4:
                    if (
                      ((e = t.sent),
                      (n = {
                        os: 0,
                        ver: 0,
                        userAgent: navigator.userAgent,
                        mid: e.mid || 0,
                        uid: e.userid || 0,
                        uuid: e.uuid || 0,
                        fanxid: e.userid || 0,
                        realtime1: window.location.href,
                        timestamp: +new Date(),
                      }),
                      (r = navigator.userAgent.toLowerCase()),
                      /iPad/gi.test(r)
                        ? (n.os = 1012)
                        : /iPhone|iPod/gi.test(r)
                          ? (n.os = 1e3)
                          : (n.os = 1005),
                      !p.DT)
                    ) {
                      t.next = 11;
                      break;
                    }
                    return (
                      (t.next = 11),
                      new Promise(function (t) {
                        v.Z.mobileCall(122, null, function (e) {
                          (e && e.version && (n.ver = e.version), t());
                        });
                      })
                    );
                  case 11:
                    return ((u = n), t.abrupt("return", u));
                  case 13:
                  case "end":
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      function C(t) {
        (console.log("埋点信息: ", t), y || (0, f.kgStatPush)(t, k.bi));
      }
      function A(t) {
        (p.DT, y ? console.log("埋点信息: ", t) : (0, f.kgStatPush)(t, k.apm));
      }
      var j = {
        fire:
          ((r = (0, c.Z)(
            l().mark(function t(e, n) {
              return l().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.t0 = C),
                        (t.t1 = Object),
                        (t.next = 4),
                        (function (t) {
                          return x.apply(this, arguments);
                        })(e)
                      );
                    case 4:
                      ((t.t2 = t.sent),
                        (t.t3 = n),
                        (t.t4 = t.t1.assign.call(t.t1, t.t2, t.t3)),
                        (t.t5 = k.bi),
                        (0, t.t0)(t.t4, t.t5));
                    case 9:
                    case "end":
                      return t.stop();
                  }
              }, t);
            }),
          )),
          function (t, e) {
            return r.apply(this, arguments);
          }),
        statAPM: (0, g.once)(
          ((i = (0, c.Z)(
            l().mark(function t(e, n) {
              var r,
                i,
                o = arguments;
              return l().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (r = !(o.length > 2) || void 0 === o[2] || o[2]),
                        (i = { typeid: e, timelength: h.BL.getFCPTime() }),
                        r || delete i.timelength,
                        (t.t0 = A),
                        (t.t1 = Object),
                        (t.t2 = i),
                        (t.next = 8),
                        O()
                      );
                    case 8:
                      ((t.t3 = t.sent),
                        (t.t4 = n),
                        (t.t5 = t.t1.assign.call(t.t1, t.t2, t.t3, t.t4)),
                        (0, t.t0)(t.t5));
                    case 12:
                    case "end":
                      return t.stop();
                  }
              }, t);
            }),
          )),
          function (t, e) {
            return i.apply(this, arguments);
          }),
        ),
        statAPMN:
          ((o = (0, c.Z)(
            l().mark(function t(e, n) {
              var r,
                i,
                o = arguments;
              return l().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (r = !(o.length > 2) || void 0 === o[2] || o[2]),
                        (i = { typeid: e, timelength: h.BL.getFCPTime() }),
                        r || delete i.timelength,
                        (t.t0 = A),
                        (t.t1 = Object),
                        (t.t2 = i),
                        (t.next = 8),
                        O()
                      );
                    case 8:
                      ((t.t3 = t.sent),
                        (t.t4 = n),
                        (t.t5 = t.t1.assign.call(t.t1, t.t2, t.t3, t.t4)),
                        (0, t.t0)(t.t5));
                    case 12:
                    case "end":
                      return t.stop();
                  }
              }, t);
            }),
          )),
          function (t, e) {
            return o.apply(this, arguments);
          }),
      };
      e.Z = j;
    },
    78941: function (t, e) {
      "use strict";
      var n,
        r = {},
        i =
          null !== (n = navigator) && void 0 !== n && n.userAgent
            ? navigator.userAgent.toLowerCase()
            : "";
      ((r = {
        Ie: !!document.all,
        Ie6: !!document.all && !window.XMLHttpRequest,
        Ie7: !!document.all && /msie 7.0/gi.test(window.navigator.appVersion),
        Ie8: !!document.all && /msie 8.0/gi.test(window.navigator.appVersion),
        FF: /firefox/gi.test(window.navigator.userAgent),
        Opera: /opera/gi.test(window.navigator.userAgent),
        Chrom: /Chrom/gi.test(window.navigator.userAgent),
        Maxthon: /Maxthon/gi.test(window.navigator.userAgent),
        android: /android|Adr/gi.test(i),
        iphone: /iPhone|iPod|iPad/gi.test(i),
        isWeiXin: i.indexOf("micromessenger") > -1,
        isMobileQQ:
          (i.indexOf("sq") > -1 && i.indexOf("yyb_d") > -1) ||
          (i.indexOf("iphone os") > -1 && i.indexOf("qq/") > -1),
        isQzone: i.indexOf("qzone") > -1,
        isWeibo: i.indexOf("weibo") > -1,
        isMQQBrowser: i.indexOf("mqqbrowser") > -1,
        is1822: i.indexOf("1822browser") > -1,
        is5Sing: i.indexOf("5sing") > -1,
        isFanxing: /fanxing2/.test(i),
      }),
        (e.Z = r));
    },
    48156: function (t, e, n) {
      "use strict";
      n.d(e, {
        l1: function () {
          return A;
        },
        Pd: function () {
          return V;
        },
        Dy: function () {
          return E;
        },
        Yk: function () {
          return P;
        },
        Y: function () {
          return Q;
        },
        KD: function () {
          return _;
        },
        VJ: function () {
          return z;
        },
        z: function () {
          return I;
        },
        Dv: function () {
          return j;
        },
        Wh: function () {
          return W;
        },
        ne: function () {
          return x;
        },
        xA: function () {
          return G;
        },
        Hm: function () {
          return T;
        },
        UB: function () {
          return M;
        },
        gn: function () {
          return y;
        },
        DT: function () {
          return b;
        },
        hc: function () {
          return U;
        },
        Xf: function () {
          return L;
        },
        CY: function () {
          return N;
        },
        NH: function () {
          return Y;
        },
        Yo: function () {
          return H;
        },
        ab: function () {
          return J;
        },
        ht: function () {
          return k;
        },
        R7: function () {
          return C;
        },
        _v: function () {
          return D;
        },
      });
      var r,
        i = n(17468),
        o = n(76792),
        u = n(82628),
        a = n.n(u),
        c = n(19481),
        s = n.n(c),
        l = n(45350),
        f = n(55452),
        p = n(13298),
        d = n(77813),
        v = (function () {
          function t() {
            (0, p.Z)(this, t);
          }
          return (
            (0, d.Z)(t, null, [
              {
                key: "get",
                value: function (t, e) {
                  var n = RegExp("(^| )" + t + "=([^;]*)(;|$)"),
                    r = document.cookie.match(n);
                  if (!r) return null;
                  if (!e) return unescape(r[2]);
                  var i = r[2].split("&"),
                    o = null;
                  return (
                    i.forEach(function (t) {
                      t.split("=")[0] === e && (o = t.split("=")[1]);
                    }),
                    unescape(o)
                  );
                },
              },
            ]),
            t
          );
        })(),
        h = n(78941);
      function g(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          (e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function m(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? g(Object(n), !0).forEach(function (e) {
                (0, o.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : g(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      var b =
          (null === l.my || void 0 === l.my
            ? void 0
            : null === (r = l.my.isInClient) || void 0 === r
              ? void 0
              : r.call(l.my)) || !1,
        w = l.my.isIOS,
        y = w || h.Z.iphone;
      function k(t, e) {
        return t ? (t / 72).toFixed(6) + (e ? "" : "rem") : 0;
      }
      var P = function (t) {
        return (
          (t / 720) *
          10 *
          Number(document.documentElement.style.fontSize.replace(/px/, ""))
        );
      };
      function x() {
        return new Promise(function (t) {
          b
            ? l.my.mobileCall(f.IB.getStatusHeight, null, function (e) {
                var n, r;
                (l.my.isIOS
                  ? ((r = e.dpTitleBarHeight - e.dpStatusBarHeight),
                    (n = e.dpStatusBarHeight))
                  : ((r = e.dpTitleBarHeight), (n = e.dpStatusBarHeight)),
                  t({ dpStatusBarHeight: n, dpTitleBarHeight: r }));
              })
            : t(null);
        });
      }
      var O = null;
      function _() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return new Promise(function (e) {
          if (O && !t) {
            e(O);
            return;
          }
          (0, l.Tu)(
            b
              ? f.kJ.client
              : isNaN(Number(v.get("KuGoo", "a_id")))
                ? f.kJ.h5
                : v.get("KuGoo", "a_id") || f.kJ.h5,
            function (t) {
              ((O = t), e(t));
            },
          );
        });
      }
      var C = function (t, e) {
          var n = document.createElement("div");
          (document.body.appendChild(n),
            s().render(t, n),
            e &&
              e(function () {
                (n && s().unmountComponentAtNode(n), n.remove(), (n = null));
              }));
        },
        A = {
          show: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e = document.querySelector(".kg-loading-wrap");
            (e && e.remove(),
              (0, l.CN)({
                msg: t.msg || "加载中",
                type: t.type || "inline",
                popMode: !0,
                popConfig: { showBg: !0, containerBgColor: "default" },
                autoWarn: void 0 === t.showLongLoad || t.showLongLoad,
                warnConfig: { time: 1e4, msg: "缓慢加载中" },
              }));
          },
          hide: function () {
            var t = document.querySelector(".kg-loading-wrap");
            t && t.remove();
          },
        };
      function j(t, e) {
        for (
          var n = (
              e ? e.substring(1) : window.location.search.substring(1)
            ).split("&"),
            r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r].split("=");
          if (i[0] === t) return i[1];
        }
        return "";
      }
      function I() {
        return new Promise(function (t) {
          b
            ? l.my.mobileCall(f.IB.getMobileInfo, null, function (e) {
                return t(e);
              })
            : t({});
        });
      }
      function H(t, e, n) {
        if (
          (n || (n = { isFullScreen: 1, browser: 0 }),
          t && 0 !== t.indexOf("http"))
        ) {
          var r = j("hreffrom");
          r && ((e = e || {}).hreffrom = r);
        } else t = B(t);
        b
          ? l.my.mobileCall(f.IB.openURL, m(m({}, n), {}, { url: S(t, e) }))
          : (window.location.href = S(t, e));
      }
      function S(t, e) {
        if (!t) return "";
        if (0 === t.indexOf("http")) return t;
        var n = window.location.pathname.slice(
          0,
          window.location.pathname.lastIndexOf("/"),
        );
        return (function (t, e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!t || !e) return t;
          var r = t.indexOf("?"),
            i = t.indexOf("#"),
            o = "",
            u = "",
            a = "";
          -1 !== i && r > i
            ? ((o = t.slice(0, i)), (a = t.slice(i)))
            : (-1 === r
                ? (o = t)
                : ((o = t.slice(0, r)),
                  (u = -1 === i ? t.slice(r) : t.slice(r, i))),
              -1 !== i && (a = t.slice(i)));
          var c = {},
            s = "";
          return (
            u &&
              u
                .slice(1)
                .split("&")
                .forEach(function (t) {
                  c[t.split("=")[0]] = decodeURIComponent(t.split("=")[1]);
                }),
            Object.assign(c, e),
            Object.keys(c).forEach(function (t) {
              var e = encodeURIComponent(c[t]);
              (y && n && (e = encodeURIComponent(e)),
                (s += "&".concat(t, "=").concat(e)));
            }),
            o + (s = "?" + s.slice(1)) + a
          );
        })((t = window.location.origin + n + t), e);
      }
      var B = function (t) {
        if (!t) return t;
        var e = j("hreffrom");
        if (e) {
          if (0 !== t.indexOf("http"));
          else {
            var n,
              r =
                (null == t
                  ? void 0
                  : null === (n = t.split("?")) || void 0 === n
                    ? void 0
                    : n[0]) || "";
            if (r && -1 !== r.indexOf("ssr/listen-level"))
              return (function (t, e, n) {
                try {
                  t = t || window.location.href;
                  var r = "",
                    i = t.indexOf("#");
                  -1 !== i && ((r = t.slice(i)), (t = t.slice(0, i)));
                  var o = RegExp("([?&])".concat(e, "=[^&]*"));
                  if (o.test(t))
                    t = t.replace(o, "$1".concat(e, "=").concat(n));
                  else {
                    var u = -1 !== t.indexOf("?") ? "&" : "?";
                    t = t + u + e + "=" + n;
                  }
                  return t + r;
                } catch (e) {
                  return (console.error("changeParameter error", e), t);
                }
              })(t, "hreffrom", e);
          }
        }
        return t;
      };
      function D(t, e) {
        return R.apply(this, arguments);
      }
      function R() {
        return (R = (0, i.Z)(
          a().mark(function t(e, n) {
            return a().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      new Promise(function (t) {
                        var r = setTimeout(function () {
                          (clearTimeout(r), n && n(), t());
                        }, e || 0);
                      })
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      var Z = { default: 0 },
        E = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1e3,
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "default";
          return (
            !(
              null != Z &&
              Z[e] &&
              Date.now() - (null == Z ? void 0 : Z[e]) < t
            ) && ((Z[e] = Date.now()), !0)
          );
        };
      function T() {
        b
          ? l.my.isIOS
            ? l.my.mobileCall(158, { type: 6 })
            : l.my.mobileCall(247, { count: 1 })
          : window.history.back();
      }
      var N = function (t) {
          var e = navigator.userAgent
            .toLowerCase()
            .match(/cpu iphone os (.*?) like mac os/);
          return !!e && e[1].split("_")[0] - 0 <= (t || 10);
        },
        L = function (t) {
          var e = navigator.userAgent.toLowerCase().match(/android [\d._]+/);
          if (!e) return !1;
          var n = (e + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".");
          return (n = parseInt(n.split(".")[0])) <= (t || 6);
        },
        M = /harmonyos|openharmony/i.test(navigator.userAgent),
        Q = function (t, e) {
          var n = document.createElement("canvas").getContext("2d"),
            r = n.measureText(t).width,
            i = n.measureText("…").width;
          if (r <= e || e <= i) return t;
          for (var o = t.length; r >= e - i && o-- > 0;)
            ((t = t.slice(0, o)), (r = n.measureText(t).width));
          return t + "…";
        },
        K = null,
        z = function () {
          return new Promise(function (t) {
            if (K) {
              t(K);
              return;
            }
            b
              ? l.my.mobileCall(f.IB.getVersion, null, function (e) {
                  ((K = e.version), t(e.version));
                })
              : t(null);
          });
        },
        U = y ? N(12) : L(7);
      function V(t) {
        return new Promise(function (t) {
          if (b)
            l.my.mobileCall(f.IB.getMobileInfo, null, function (e) {
              e
                ? w
                  ? t("no" !== e.net)
                  : t("no" !== e.net && "4" !== String(e.net))
                : t(!0);
            });
          else {
            var e = window.navigator.onLine;
            "boolean" == typeof e ? t(e) : t(!0);
          }
        }).then(function (e) {
          return (t && !e && l.FN.info(w ? "网络未连接" : "未找到可用网络"), e);
        });
      }
      function W() {
        return q.apply(this, arguments);
      }
      function q() {
        return (q = (0, i.Z)(
          a().mark(function t() {
            return a().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return t.abrupt(
                      "return",
                      new Promise(function (t) {
                        if (b) {
                          var e = function (e) {
                            (e = "string" == typeof e ? JSON.parse(e) : e)
                              .status && Number(e.status)
                              ? t(!0)
                              : t(!1);
                          };
                          w
                            ? (window.KgMobileCall
                                ? (window.KgMobileCall.isSetWifiOnly = e)
                                : (window.KgMobileCall = { isSetWifiOnly: e }),
                              l.my.mobileCall(f.IB.isSetWifiOnly))
                            : l.my.mobileCall(f.IB.isSetWifiOnly, null, e);
                        } else t(!1);
                      }),
                    );
                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      var F = {},
        J = function (t) {
          return Promise.all(
            t.map(function (t) {
              return new Promise(function (e, n) {
                if (F[t]) {
                  e(F[t]);
                  return;
                }
                var r = new Image();
                ((r.crossOrigin = "Anonymous"),
                  (r.onload = function () {
                    ((F[t] = r), e(r));
                  }),
                  (r.onerror = function () {
                    e(null);
                  }),
                  (r.src = t));
              });
            }),
          );
        };
      function G(t, e) {
        var n = new Date(t).getTime() - e;
        return n <= 0 ? -1 : Math.floor(n / 864e5);
      }
      var Y = function (t) {
        var e = {},
          n = null;
        return (
          t < 1e4
            ? ((e.value = Number(t).toFixed(1)), (e.unit = ""))
            : ((n = Math.floor(Math.log(t) / Math.log(1e4))),
              (e.value = (t / Math.pow(1e4, n)).toFixed(1)),
              (e.unit = ["", "万", "亿", "万亿"][n])),
          "string" == typeof e.value &&
            e.value.endsWith(".0") &&
            (e.value = e.value.slice(0, -2)),
          (e.val = Number(e.value)),
          (e.uni = e.unit),
          (e.str = e.value + e.unit),
          e
        );
      };
    },
    79267: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return o;
        },
        j: function () {
          return i;
        },
      });
      var r = n(48156);
      function i(t) {
        return (null == t ? void 0 : t.user_y_type) & 16
          ? "超级VIP年费"
          : ((null == t ? void 0 : t.user_type) & 16) > 0
            ? "超级VIP"
            : (null == t ? void 0 : t.y_type) >= 2
              ? "豪华VIP年费"
              : (null == t ? void 0 : t.y_type) > 0
                ? "音乐包年卡"
                : (null == t ? void 0 : t.m_type) > 0
                  ? (null == t ? void 0 : t.user_type) & 8
                    ? "豪华VIP"
                    : "音乐包"
                  : "普通用户";
      }
      var o = function (t) {
        var e,
          n,
          o,
          u,
          a = t.grade,
          c = t.vip,
          s = t.medal,
          l = t.source_id,
          f = void 0 === l ? "2021" : l,
          p = t.abValues,
          d = t.timestamp,
          v = (0, r.Dv)("hreffrom") || "",
          h = (function () {
            var t = (null == a ? void 0 : a.p_speed) || 1,
              e = (null == c ? void 0 : c.svip_level) || 0,
              n = (null == a ? void 0 : a.p_speed_info) || {},
              r = (null == n ? void 0 : n.svip_level_info) || {},
              i = t,
              o = e;
            try {
              if (e >= 6) {
                for (var u in r)
                  if (u === "v".concat(e)) {
                    for (var s in r[u])
                      if (r[u][s] === t) {
                        var l,
                          f,
                          p =
                            null == s
                              ? void 0
                              : null === (l = s.split) || void 0 === l
                                ? void 0
                                : null === (f = l.call(s, "p")) || void 0 === f
                                  ? void 0
                                  : f[1];
                        if (p) {
                          var d = Number(p) + 1;
                          if (d > 3) {
                            ((o = Math.min(e + 1, 9)),
                              (i = r["v".concat(o)].p3));
                            break;
                          }
                          var v = "p".concat(d);
                          if (r[u][v]) {
                            i = r[u][v];
                            break;
                          }
                        }
                      }
                  }
              } else
                for (var h in n)
                  if (n[h] === t) {
                    var g,
                      m,
                      b =
                        null == h
                          ? void 0
                          : null === (g = h.split) || void 0 === g
                            ? void 0
                            : null === (m = g.call(h, "p")) || void 0 === m
                              ? void 0
                              : m[1];
                    if (b) {
                      var w = Number(b) + 1;
                      if (w > 3) {
                        ((o = 6), (i = r.v6.p3));
                        break;
                      }
                      var y = "p".concat(w);
                      if (n[y]) {
                        i = n[y];
                        break;
                      }
                    }
                  }
              return { speed: i, vipLevel: o, currentVipLevel: e };
            } catch (t) {
              return (
                console.log("getSpeed-error", t),
                { speed: i, vipLevel: o, currentVipLevel: e }
              );
            }
          })(),
          g = h.speed,
          m = h.vipLevel,
          b = h.currentVipLevel,
          w =
            ((o = (null == a ? void 0 : a.p_speed_info) || {}),
            (u = Math.min(m, 9)) >= 6
              ? null == o
                ? void 0
                : null === (e = o.svip_level_info) || void 0 === e
                  ? void 0
                  : null === (n = e["v".concat(u)]) || void 0 === n
                    ? void 0
                    : n.p2
              : null == o
                ? void 0
                : o.p2),
          y = i(c),
          k = "25_"
            .concat((null == s ? void 0 : s.classify_id) || "", ",38_")
            .concat((null == s ? void 0 : s.id) || "", ",29_")
            .concat(v || "0"),
          P = "";
        if ("普通用户" === y)
          P =
            (r.gn
              ? "https://m3ws.kugou.com/vip/ios/vip.html"
              : "https://m3ws.kugou.com/vip/v2/vip.html") +
            "?source_id=".concat(f, "&custom_field=").concat(k);
        else if ("超级VIP年费" === y)
          ((P = r.gn
            ? "https://m3ws.kugou.com/vip/ios/supervip.html"
            : "https://m3ws.kugou.com/vip/v2/supervip.html"),
            ["0", "1", "undefined"].includes(
              String(null == p ? void 0 : p.pay),
            ) || 9 === b
              ? (P += "?source_id=".concat(
                  f,
                  "&now_itemId=super_vip_372_1&parent_item_id=super_vip_372_1",
                ))
              : ["2"].includes(String(null == p ? void 0 : p.pay))
                ? (P += "?source_id=".concat(
                    f,
                    "&now_itemId=super_vip_372_1&parent_item_id=super_vip_372_1",
                  ))
                : ["3"].includes(String(null == p ? void 0 : p.pay)) &&
                  (1e3 * d || new Date().getTime(),
                  (P += "?source_id=".concat(
                    f,
                    "&now_itemId=super_vip_372_1&parent_item_id=super_vip_372_1",
                  ))),
            (P += "&custom_field=".concat(k)));
        else {
          if (
            ((P = r.gn
              ? "https://m3ws.kugou.com/vip/ios/supervip.html"
              : "https://m3ws.kugou.com/vip/v2/supervip.html"),
            ["1"].includes(String(null == p ? void 0 : p.pay)))
          )
            ["豪华VIP", "音乐包"].includes(y)
              ? (P += "?source_id=".concat(f, "&custom_field=").concat(k))
              : (P += "?source_id=".concat(
                  f,
                  "&now_itemId=super_vip_372_1&parent_item_id=super_vip_372_1",
                ));
          else if (["2"].includes(String(null == p ? void 0 : p.pay)))
            ["豪华VIP", "音乐包"].includes(y)
              ? (P += "?source_id=".concat(f, "&custom_field=").concat(k))
              : (P += "?source_id=".concat(
                  f,
                  "&now_itemId=super_vip_372_1&parent_item_id=super_vip_372_1",
                ));
          else if (["3"].includes(String(null == p ? void 0 : p.pay))) {
            var x = 1e3 * d || new Date().getTime(),
              O = (0, r.xA)(null == c ? void 0 : c.su_vip_end_time, x),
              _ = (0, r.xA)(null == c ? void 0 : c.vip_end_time, x);
            ["豪华VIP", "音乐包"].includes(y)
              ? _ >= 0 && _ <= 7
                ? (P =
                    (r.gn
                      ? "https://m3ws.kugou.com/vip/ios/vip.html"
                      : "https://m3ws.kugou.com/vip/v2/vip.html") +
                    "?source_id=".concat(f))
                : (P += "?source_id=".concat(f, "&custom_field=").concat(k))
              : ["豪华VIP年费", "音乐包年卡"].includes(y)
                ? _ >= 0 && _ <= 7
                  ? (P =
                      (r.gn
                        ? "https://m3ws.kugou.com/vip/ios/vip.html"
                        : "https://m3ws.kugou.com/vip/v2/vip.html") +
                      "?source_id=".concat(f, "&parent_item_id=svip_372_1"))
                  : (P += "?source_id=".concat(
                      f,
                      "&now_itemId=super_vip_372_1&parent_item_id=super_vip_372_1",
                    ))
                : O >= 0 && O <= 7
                  ? (P += "?source_id=".concat(f))
                  : (P += "?source_id=".concat(
                      f,
                      "&now_itemId=super_vip_372_1&parent_item_id=super_vip_372_1",
                    ));
          } else P += "?source_id=".concat(f);
          P += "&custom_field=".concat(k);
        }
        return {
          speed: g,
          vipLevel: m,
          url: P,
          currentVipLevel: b,
          p2Level: w,
          svipUrlToComment:
            "普通用户" === y
              ? r.gn
                ? "https://m3ws.kugou.com/vip/ios/supervip.html?source_id="
                    .concat(f, "&custom_field=")
                    .concat(k)
                : "https://m3ws.kugou.com/vip/v2/supervip.html?source_id="
                    .concat(f, "&custom_field=")
                    .concat(k)
              : "",
        };
      };
    },
    45026: function (t, e) {
      "use strict";
      e.Z = {
        src: "https://h5.kugou.com/apps/listen_level_next/_next/static/media/home-bg.c96a62b6.png",
        height: 860,
        width: 720,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAQAAACfDS2NAAAATElEQVR42lXJMQ6CUBBF0TPfb2epjYn7X50mxkQgwMB0hPeqkxvZ3dw9vTz0brMY/bylYhb/PlZfrarZIE2uIhIu9a5RBITgIGhO2wGmHhUe5J4HgAAAAABJRU5ErkJggg==",
        blurWidth: 7,
        blurHeight: 8,
      };
    },
    53069: function (t) {
      t.exports = {
        wrap: "TitleBarNew_wrap__SinUm",
        wrap_fixed: "TitleBarNew_wrap_fixed__KGN0v",
        bgImg_wrap: "TitleBarNew_bgImg_wrap__1_W2z",
        bg_img: "TitleBarNew_bg_img__GcZUy",
        statusBar: "TitleBarNew_statusBar__reouk",
        barWrap: "TitleBarNew_barWrap__qnMpZ",
        titleWrap: "TitleBarNew_titleWrap__P5870",
        title: "TitleBarNew_title___l2_D",
        topText: "TitleBarNew_topText__2YbAb",
        titleText: "TitleBarNew_titleText__qj_Bz",
        subTitleWrap: "TitleBarNew_subTitleWrap__wRiZZ",
        backWrap: "TitleBarNew_backWrap__cllOD",
        menu: "TitleBarNew_menu__HwtWF",
        is_full_screen: "TitleBarNew_is_full_screen__jJKOD",
        is_black_full_screen: "TitleBarNew_is_black_full_screen__SnBYc",
        btnWrap: "TitleBarNew_btnWrap___sPbK",
        ruleWrap: "TitleBarNew_ruleWrap__Qd4gH",
      };
    },
  },
]);
