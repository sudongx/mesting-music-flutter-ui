(window.webpackJsonp = window.webpackJsonp || []).push([
  ["chunk-1adc"],
  {
    a547a80a: function (t, e, n) {
      (window,
        (t.exports = (function (t) {
          var e = {};
          function n(r) {
            if (e[r]) return e[r].exports;
            var o = (e[r] = { i: r, l: !1, exports: {} });
            return (
              t[r].call(o.exports, o, o.exports, n),
              (o.l = !0),
              o.exports
            );
          }
          return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, r) {
              n.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: r });
            }),
            (n.r = function (t) {
              ("undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 }));
            }),
            (n.t = function (t, e) {
              if ((1 & e && (t = n(t)), 8 & e)) return t;
              if (4 & e && "object" == typeof t && t && t.__esModule) return t;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: t,
                }),
                2 & e && "string" != typeof t)
              )
                for (var o in t)
                  n.d(
                    r,
                    o,
                    function (e) {
                      return t[e];
                    }.bind(null, o),
                  );
              return r;
            }),
            (n.n = function (t) {
              var e =
                t && t.__esModule
                  ? function () {
                      return t.default;
                    }
                  : function () {
                      return t;
                    };
              return (n.d(e, "a", e), e);
            }),
            (n.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ""),
            n((n.s = 19))
          );
        })([
          function (t, e, n) {
            "use strict";
            t.exports = n(24);
          },
          function (t, e) {
            function n(e) {
              return (
                (t.exports = n =
                  Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t);
                      }),
                (t.exports.__esModule = !0),
                (t.exports.default = t.exports),
                n(e)
              );
            }
            ((t.exports = n),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e, n) {
            var r = n(26)();
            t.exports = r;
            try {
              regeneratorRuntime = r;
            } catch (t) {
              "object" == typeof globalThis
                ? (globalThis.regeneratorRuntime = r)
                : Function("r", "regeneratorRuntime = r")(r);
            }
          },
          function (t, e) {
            function n(e) {
              return (
                (t.exports = n =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          "function" == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : typeof t;
                      }),
                (t.exports.__esModule = !0),
                (t.exports.default = t.exports),
                n(e)
              );
            }
            ((t.exports = n),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e) {
            ((t.exports = function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e, n) {
            var r = n(11);
            function o(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                ((o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(t, r(o.key), o));
              }
            }
            ((t.exports = function (t, e, n) {
              return (
                e && o(t.prototype, e),
                n && o(t, n),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
              );
            }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e, n) {
            var r = n(3).default,
              o = n(22);
            ((t.exports = function (t, e) {
              if (e && ("object" == r(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined",
                );
              return o(t);
            }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e, n) {
            var r = n(23);
            ((t.exports = function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && r(t, e));
            }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e, n) {
            var r = n(11);
            ((t.exports = function (t, e, n) {
              return (
                (e = r(e)) in t
                  ? Object.defineProperty(t, e, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[e] = n),
                t
              );
            }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e) {
            function n(t, e, n, r, o, i, a) {
              try {
                var c = t[i](a),
                  u = c.value;
              } catch (t) {
                return void n(t);
              }
              c.done ? e(u) : Promise.resolve(u).then(r, o);
            }
            ((t.exports = function (t) {
              return function () {
                var e = this,
                  r = arguments;
                return new Promise(function (o, i) {
                  var a = t.apply(e, r);
                  function c(t) {
                    n(a, o, i, c, u, "next", t);
                  }
                  function u(t) {
                    n(a, o, i, c, u, "throw", t);
                  }
                  c(void 0);
                });
              };
            }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e, n) {
            (function (e) {
              t.exports = (function () {
                "use strict";
                function t(t, e) {
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
                function n(e) {
                  for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {};
                    n % 2
                      ? t(Object(r), !0).forEach(function (t) {
                          i(e, t, r[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(r),
                          )
                        : t(Object(r)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                            );
                          });
                  }
                  return e;
                }
                function r() {
                  r = function () {
                    return t;
                  };
                  var t = {},
                    e = Object.prototype,
                    n = e.hasOwnProperty,
                    o =
                      Object.defineProperty ||
                      function (t, e, n) {
                        t[e] = n.value;
                      },
                    i = "function" == typeof Symbol ? Symbol : {},
                    a = i.iterator || "@@iterator",
                    c = i.asyncIterator || "@@asyncIterator",
                    u = i.toStringTag || "@@toStringTag";
                  function l(t, e, n) {
                    return (
                      Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      }),
                      t[e]
                    );
                  }
                  try {
                    l({}, "");
                  } catch (t) {
                    l = function (t, e, n) {
                      return (t[e] = n);
                    };
                  }
                  function s(t, e, n, r) {
                    var i = e && e.prototype instanceof p ? e : p,
                      a = Object.create(i.prototype),
                      c = new C(r || []);
                    return (o(a, "_invoke", { value: S(t, n, c) }), a);
                  }
                  function f(t, e, n) {
                    try {
                      return { type: "normal", arg: t.call(e, n) };
                    } catch (t) {
                      return { type: "throw", arg: t };
                    }
                  }
                  t.wrap = s;
                  var d = {};
                  function p() {}
                  function g() {}
                  function m() {}
                  var h = {};
                  l(h, a, function () {
                    return this;
                  });
                  var v = Object.getPrototypeOf,
                    b = v && v(v(P([])));
                  b && b !== e && n.call(b, a) && (h = b);
                  var y = (m.prototype = p.prototype = Object.create(h));
                  function w(t) {
                    ["next", "throw", "return"].forEach(function (e) {
                      l(t, e, function (t) {
                        return this._invoke(e, t);
                      });
                    });
                  }
                  function x(t, e) {
                    function r(o, i, a, c) {
                      var u = f(t[o], t, i);
                      if ("throw" !== u.type) {
                        var l = u.arg,
                          s = l.value;
                        return s && "object" == typeof s && n.call(s, "__await")
                          ? e.resolve(s.__await).then(
                              function (t) {
                                r("next", t, a, c);
                              },
                              function (t) {
                                r("throw", t, a, c);
                              },
                            )
                          : e.resolve(s).then(
                              function (t) {
                                ((l.value = t), a(l));
                              },
                              function (t) {
                                return r("throw", t, a, c);
                              },
                            );
                      }
                      c(u.arg);
                    }
                    var i;
                    o(this, "_invoke", {
                      value: function (t, n) {
                        function o() {
                          return new e(function (e, o) {
                            r(t, n, e, o);
                          });
                        }
                        return (i = i ? i.then(o, o) : o());
                      },
                    });
                  }
                  function S(t, e, n) {
                    var r = "suspendedStart";
                    return function (o, i) {
                      if ("executing" === r)
                        throw new Error("Generator is already running");
                      if ("completed" === r) {
                        if ("throw" === o) throw i;
                        return { value: void 0, done: !0 };
                      }
                      for (n.method = o, n.arg = i; ;) {
                        var a = n.delegate;
                        if (a) {
                          var c = j(a, n);
                          if (c) {
                            if (c === d) continue;
                            return c;
                          }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                          if ("suspendedStart" === r)
                            throw ((r = "completed"), n.arg);
                          n.dispatchException(n.arg);
                        } else
                          "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var u = f(t, e, n);
                        if ("normal" === u.type) {
                          if (
                            ((r = n.done ? "completed" : "suspendedYield"),
                            u.arg === d)
                          )
                            continue;
                          return { value: u.arg, done: n.done };
                        }
                        "throw" === u.type &&
                          ((r = "completed"),
                          (n.method = "throw"),
                          (n.arg = u.arg));
                      }
                    };
                  }
                  function j(t, e) {
                    var n = e.method,
                      r = t.iterator[n];
                    if (void 0 === r)
                      return (
                        (e.delegate = null),
                        ("throw" === n &&
                          t.iterator.return &&
                          ((e.method = "return"),
                          (e.arg = void 0),
                          j(t, e),
                          "throw" === e.method)) ||
                          ("return" !== n &&
                            ((e.method = "throw"),
                            (e.arg = new TypeError(
                              "The iterator does not provide a '" +
                                n +
                                "' method",
                            )))),
                        d
                      );
                    var o = f(r, t.iterator, e.arg);
                    if ("throw" === o.type)
                      return (
                        (e.method = "throw"),
                        (e.arg = o.arg),
                        (e.delegate = null),
                        d
                      );
                    var i = o.arg;
                    return i
                      ? i.done
                        ? ((e[t.resultName] = i.value),
                          (e.next = t.nextLoc),
                          "return" !== e.method &&
                            ((e.method = "next"), (e.arg = void 0)),
                          (e.delegate = null),
                          d)
                        : i
                      : ((e.method = "throw"),
                        (e.arg = new TypeError(
                          "iterator result is not an object",
                        )),
                        (e.delegate = null),
                        d);
                  }
                  function O(t) {
                    var e = { tryLoc: t[0] };
                    (1 in t && (e.catchLoc = t[1]),
                      2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                      this.tryEntries.push(e));
                  }
                  function k(t) {
                    var e = t.completion || {};
                    ((e.type = "normal"), delete e.arg, (t.completion = e));
                  }
                  function C(t) {
                    ((this.tryEntries = [{ tryLoc: "root" }]),
                      t.forEach(O, this),
                      this.reset(!0));
                  }
                  function P(t) {
                    if (t) {
                      var e = t[a];
                      if (e) return e.call(t);
                      if ("function" == typeof t.next) return t;
                      if (!isNaN(t.length)) {
                        var r = -1,
                          o = function e() {
                            for (; ++r < t.length;)
                              if (n.call(t, r))
                                return ((e.value = t[r]), (e.done = !1), e);
                            return ((e.value = void 0), (e.done = !0), e);
                          };
                        return (o.next = o);
                      }
                    }
                    return { next: A };
                  }
                  function A() {
                    return { value: void 0, done: !0 };
                  }
                  return (
                    (g.prototype = m),
                    o(y, "constructor", { value: m, configurable: !0 }),
                    o(m, "constructor", { value: g, configurable: !0 }),
                    (g.displayName = l(m, u, "GeneratorFunction")),
                    (t.isGeneratorFunction = function (t) {
                      var e = "function" == typeof t && t.constructor;
                      return (
                        !!e &&
                        (e === g ||
                          "GeneratorFunction" === (e.displayName || e.name))
                      );
                    }),
                    (t.mark = function (t) {
                      return (
                        Object.setPrototypeOf
                          ? Object.setPrototypeOf(t, m)
                          : ((t.__proto__ = m), l(t, u, "GeneratorFunction")),
                        (t.prototype = Object.create(y)),
                        t
                      );
                    }),
                    (t.awrap = function (t) {
                      return { __await: t };
                    }),
                    w(x.prototype),
                    l(x.prototype, c, function () {
                      return this;
                    }),
                    (t.AsyncIterator = x),
                    (t.async = function (e, n, r, o, i) {
                      void 0 === i && (i = Promise);
                      var a = new x(s(e, n, r, o), i);
                      return t.isGeneratorFunction(n)
                        ? a
                        : a.next().then(function (t) {
                            return t.done ? t.value : a.next();
                          });
                    }),
                    w(y),
                    l(y, u, "Generator"),
                    l(y, a, function () {
                      return this;
                    }),
                    l(y, "toString", function () {
                      return "[object Generator]";
                    }),
                    (t.keys = function (t) {
                      var e = Object(t),
                        n = [];
                      for (var r in e) n.push(r);
                      return (
                        n.reverse(),
                        function t() {
                          for (; n.length;) {
                            var r = n.pop();
                            if (r in e)
                              return ((t.value = r), (t.done = !1), t);
                          }
                          return ((t.done = !0), t);
                        }
                      );
                    }),
                    (t.values = P),
                    (C.prototype = {
                      constructor: C,
                      reset: function (t) {
                        if (
                          ((this.prev = 0),
                          (this.next = 0),
                          (this.sent = this._sent = void 0),
                          (this.done = !1),
                          (this.delegate = null),
                          (this.method = "next"),
                          (this.arg = void 0),
                          this.tryEntries.forEach(k),
                          !t)
                        )
                          for (var e in this)
                            "t" === e.charAt(0) &&
                              n.call(this, e) &&
                              !isNaN(+e.slice(1)) &&
                              (this[e] = void 0);
                      },
                      stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval;
                      },
                      dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;
                        function r(n, r) {
                          return (
                            (a.type = "throw"),
                            (a.arg = t),
                            (e.next = n),
                            r && ((e.method = "next"), (e.arg = void 0)),
                            !!r
                          );
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                          var i = this.tryEntries[o],
                            a = i.completion;
                          if ("root" === i.tryLoc) return r("end");
                          if (i.tryLoc <= this.prev) {
                            var c = n.call(i, "catchLoc"),
                              u = n.call(i, "finallyLoc");
                            if (c && u) {
                              if (this.prev < i.catchLoc)
                                return r(i.catchLoc, !0);
                              if (this.prev < i.finallyLoc)
                                return r(i.finallyLoc);
                            } else if (c) {
                              if (this.prev < i.catchLoc)
                                return r(i.catchLoc, !0);
                            } else {
                              if (!u)
                                throw new Error(
                                  "try statement without catch or finally",
                                );
                              if (this.prev < i.finallyLoc)
                                return r(i.finallyLoc);
                            }
                          }
                        }
                      },
                      abrupt: function (t, e) {
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
                          ("break" === t || "continue" === t) &&
                          i.tryLoc <= e &&
                          e <= i.finallyLoc &&
                          (i = null);
                        var a = i ? i.completion : {};
                        return (
                          (a.type = t),
                          (a.arg = e),
                          i
                            ? ((this.method = "next"),
                              (this.next = i.finallyLoc),
                              d)
                            : this.complete(a)
                        );
                      },
                      complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return (
                          "break" === t.type || "continue" === t.type
                            ? (this.next = t.arg)
                            : "return" === t.type
                              ? ((this.rval = this.arg = t.arg),
                                (this.method = "return"),
                                (this.next = "end"))
                              : "normal" === t.type && e && (this.next = e),
                          d
                        );
                      },
                      finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                          var n = this.tryEntries[e];
                          if (n.finallyLoc === t)
                            return (
                              this.complete(n.completion, n.afterLoc),
                              k(n),
                              d
                            );
                        }
                      },
                      catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                          var n = this.tryEntries[e];
                          if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                              var o = r.arg;
                              k(n);
                            }
                            return o;
                          }
                        }
                        throw new Error("illegal catch attempt");
                      },
                      delegateYield: function (t, e, n) {
                        return (
                          (this.delegate = {
                            iterator: P(t),
                            resultName: e,
                            nextLoc: n,
                          }),
                          "next" === this.method && (this.arg = void 0),
                          d
                        );
                      },
                    }),
                    t
                  );
                }
                function o(t, e, n, r, o, i, a) {
                  try {
                    var c = t[i](a),
                      u = c.value;
                  } catch (t) {
                    return void n(t);
                  }
                  c.done ? e(u) : Promise.resolve(u).then(r, o);
                }
                function i(t, e, n) {
                  return (
                    (e = (function (t) {
                      var e = (function (t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var r = n.call(t, "string");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value.",
                          );
                        }
                        return String(t);
                      })(t);
                      return "symbol" == typeof e ? e : String(e);
                    })(e)) in t
                      ? Object.defineProperty(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (t[e] = n),
                    t
                  );
                }
                var a = null;
                a =
                  "undefined" != typeof window
                    ? {
                        isInClient: function () {
                          return !!(
                            navigator.userAgent.match(/KGBrowser/gi) ||
                            navigator.userAgent.match(/KugouBrowser/gi) ||
                            navigator.userAgent.match(/kugouandroid/gi) ||
                            (window &&
                              window.external &&
                              window.external.superCall)
                          );
                        },
                        isIOS: !!navigator.userAgent.match(/KGBrowser/gi),
                        loadUrl: function (t) {
                          var e;
                          ((e = document.createElement("iframe")).setAttribute(
                            "src",
                            t,
                          ),
                            e.setAttribute("style", "display:none;"),
                            e.setAttribute("height", "0px"),
                            e.setAttribute("width", "0px"),
                            e.setAttribute("frameborder", "0"),
                            document.body.appendChild(e),
                            e.parentNode.removeChild(e),
                            (e = null));
                        },
                        cbNum: 0,
                        getData: function (t, e) {
                          var n = this;
                          n.cbNum++;
                          var r = "kg_stat_mobilecall_"
                            .concat(186, "_")
                            .concat(n.cbNum, "_")
                            .concat(Math.random().toString().substr(2, 9));
                          ((window[r] = function (t, n) {
                            if (void 0 !== t) {
                              if (
                                "[object String]" ===
                                Object.prototype.toString.call(t)
                              )
                                try {
                                  t =
                                    "#" === n
                                      ? decodeURIComponent(t)
                                      : decodeURIComponent(
                                          decodeURIComponent(t),
                                        );
                                } catch (t) {
                                  console.error("stat mobilecall err");
                                }
                              try {
                                t = JSON.parse(t);
                              } catch (t) {}
                              e && e(t);
                            }
                          }),
                            n.isIOS || (t.AndroidCallback = r));
                          try {
                            t = JSON.stringify(t);
                          } catch (t) {}
                          if (n.isIOS) {
                            var o =
                              "kugouurl://start.music/?" +
                              encodeURIComponent(
                                '{"cmd":186, "jsonStr":' +
                                  t +
                                  ', "callback":"' +
                                  r +
                                  '"}',
                              );
                            n.loadUrl(o);
                          } else window.external.superCall(186, t);
                        },
                        isPigeon: function () {
                          return (
                            window.location.protocol.indexOf("http") < 0 ||
                            window.location.host.indexOf("kugou.com") < 0
                          );
                        },
                      }
                    : null;
                var c = 30050,
                  u = 30030,
                  l =
                    "undefined" != typeof globalThis
                      ? globalThis
                      : "undefined" != typeof window
                        ? window
                        : void 0 !== e
                          ? e
                          : "undefined" != typeof self
                            ? self
                            : {},
                  s = (function (t, e) {
                    return (
                      (function (t) {
                        !(function (e) {
                          function n(t, e) {
                            var n = (65535 & t) + (65535 & e);
                            return (
                              (((t >> 16) + (e >> 16) + (n >> 16)) << 16) |
                              (65535 & n)
                            );
                          }
                          function r(t, e, r, o, i, a) {
                            return n(
                              ((c = n(n(e, t), n(o, a))) << (u = i)) |
                                (c >>> (32 - u)),
                              r,
                            );
                            var c, u;
                          }
                          function o(t, e, n, o, i, a, c) {
                            return r((e & n) | (~e & o), t, e, i, a, c);
                          }
                          function i(t, e, n, o, i, a, c) {
                            return r((e & o) | (n & ~o), t, e, i, a, c);
                          }
                          function a(t, e, n, o, i, a, c) {
                            return r(e ^ n ^ o, t, e, i, a, c);
                          }
                          function c(t, e, n, o, i, a, c) {
                            return r(n ^ (e | ~o), t, e, i, a, c);
                          }
                          function u(t, e) {
                            var r, u, l, s, f;
                            ((t[e >> 5] |= 128 << (e % 32)),
                              (t[14 + (((e + 64) >>> 9) << 4)] = e));
                            var d = 1732584193,
                              p = -271733879,
                              g = -1732584194,
                              m = 271733878;
                            for (r = 0; r < t.length; r += 16)
                              ((u = d),
                                (l = p),
                                (s = g),
                                (f = m),
                                (d = o(d, p, g, m, t[r], 7, -680876936)),
                                (m = o(m, d, p, g, t[r + 1], 12, -389564586)),
                                (g = o(g, m, d, p, t[r + 2], 17, 606105819)),
                                (p = o(p, g, m, d, t[r + 3], 22, -1044525330)),
                                (d = o(d, p, g, m, t[r + 4], 7, -176418897)),
                                (m = o(m, d, p, g, t[r + 5], 12, 1200080426)),
                                (g = o(g, m, d, p, t[r + 6], 17, -1473231341)),
                                (p = o(p, g, m, d, t[r + 7], 22, -45705983)),
                                (d = o(d, p, g, m, t[r + 8], 7, 1770035416)),
                                (m = o(m, d, p, g, t[r + 9], 12, -1958414417)),
                                (g = o(g, m, d, p, t[r + 10], 17, -42063)),
                                (p = o(p, g, m, d, t[r + 11], 22, -1990404162)),
                                (d = o(d, p, g, m, t[r + 12], 7, 1804603682)),
                                (m = o(m, d, p, g, t[r + 13], 12, -40341101)),
                                (g = o(g, m, d, p, t[r + 14], 17, -1502002290)),
                                (d = i(
                                  d,
                                  (p = o(
                                    p,
                                    g,
                                    m,
                                    d,
                                    t[r + 15],
                                    22,
                                    1236535329,
                                  )),
                                  g,
                                  m,
                                  t[r + 1],
                                  5,
                                  -165796510,
                                )),
                                (m = i(m, d, p, g, t[r + 6], 9, -1069501632)),
                                (g = i(g, m, d, p, t[r + 11], 14, 643717713)),
                                (p = i(p, g, m, d, t[r], 20, -373897302)),
                                (d = i(d, p, g, m, t[r + 5], 5, -701558691)),
                                (m = i(m, d, p, g, t[r + 10], 9, 38016083)),
                                (g = i(g, m, d, p, t[r + 15], 14, -660478335)),
                                (p = i(p, g, m, d, t[r + 4], 20, -405537848)),
                                (d = i(d, p, g, m, t[r + 9], 5, 568446438)),
                                (m = i(m, d, p, g, t[r + 14], 9, -1019803690)),
                                (g = i(g, m, d, p, t[r + 3], 14, -187363961)),
                                (p = i(p, g, m, d, t[r + 8], 20, 1163531501)),
                                (d = i(d, p, g, m, t[r + 13], 5, -1444681467)),
                                (m = i(m, d, p, g, t[r + 2], 9, -51403784)),
                                (g = i(g, m, d, p, t[r + 7], 14, 1735328473)),
                                (d = a(
                                  d,
                                  (p = i(
                                    p,
                                    g,
                                    m,
                                    d,
                                    t[r + 12],
                                    20,
                                    -1926607734,
                                  )),
                                  g,
                                  m,
                                  t[r + 5],
                                  4,
                                  -378558,
                                )),
                                (m = a(m, d, p, g, t[r + 8], 11, -2022574463)),
                                (g = a(g, m, d, p, t[r + 11], 16, 1839030562)),
                                (p = a(p, g, m, d, t[r + 14], 23, -35309556)),
                                (d = a(d, p, g, m, t[r + 1], 4, -1530992060)),
                                (m = a(m, d, p, g, t[r + 4], 11, 1272893353)),
                                (g = a(g, m, d, p, t[r + 7], 16, -155497632)),
                                (p = a(p, g, m, d, t[r + 10], 23, -1094730640)),
                                (d = a(d, p, g, m, t[r + 13], 4, 681279174)),
                                (m = a(m, d, p, g, t[r], 11, -358537222)),
                                (g = a(g, m, d, p, t[r + 3], 16, -722521979)),
                                (p = a(p, g, m, d, t[r + 6], 23, 76029189)),
                                (d = a(d, p, g, m, t[r + 9], 4, -640364487)),
                                (m = a(m, d, p, g, t[r + 12], 11, -421815835)),
                                (g = a(g, m, d, p, t[r + 15], 16, 530742520)),
                                (d = c(
                                  d,
                                  (p = a(p, g, m, d, t[r + 2], 23, -995338651)),
                                  g,
                                  m,
                                  t[r],
                                  6,
                                  -198630844,
                                )),
                                (m = c(m, d, p, g, t[r + 7], 10, 1126891415)),
                                (g = c(g, m, d, p, t[r + 14], 15, -1416354905)),
                                (p = c(p, g, m, d, t[r + 5], 21, -57434055)),
                                (d = c(d, p, g, m, t[r + 12], 6, 1700485571)),
                                (m = c(m, d, p, g, t[r + 3], 10, -1894986606)),
                                (g = c(g, m, d, p, t[r + 10], 15, -1051523)),
                                (p = c(p, g, m, d, t[r + 1], 21, -2054922799)),
                                (d = c(d, p, g, m, t[r + 8], 6, 1873313359)),
                                (m = c(m, d, p, g, t[r + 15], 10, -30611744)),
                                (g = c(g, m, d, p, t[r + 6], 15, -1560198380)),
                                (p = c(p, g, m, d, t[r + 13], 21, 1309151649)),
                                (d = c(d, p, g, m, t[r + 4], 6, -145523070)),
                                (m = c(m, d, p, g, t[r + 11], 10, -1120210379)),
                                (g = c(g, m, d, p, t[r + 2], 15, 718787259)),
                                (p = c(p, g, m, d, t[r + 9], 21, -343485551)),
                                (d = n(d, u)),
                                (p = n(p, l)),
                                (g = n(g, s)),
                                (m = n(m, f)));
                            return [d, p, g, m];
                          }
                          function l(t) {
                            var e,
                              n = "",
                              r = 32 * t.length;
                            for (e = 0; e < r; e += 8)
                              n += String.fromCharCode(
                                (t[e >> 5] >>> (e % 32)) & 255,
                              );
                            return n;
                          }
                          function s(t) {
                            var e,
                              n = [];
                            for (
                              n[(t.length >> 2) - 1] = void 0, e = 0;
                              e < n.length;
                              e += 1
                            )
                              n[e] = 0;
                            var r = 8 * t.length;
                            for (e = 0; e < r; e += 8)
                              n[e >> 5] |=
                                (255 & t.charCodeAt(e / 8)) << (e % 32);
                            return n;
                          }
                          function f(t) {
                            var e,
                              n,
                              r = "0123456789abcdef",
                              o = "";
                            for (n = 0; n < t.length; n += 1)
                              ((e = t.charCodeAt(n)),
                                (o +=
                                  r.charAt((e >>> 4) & 15) + r.charAt(15 & e)));
                            return o;
                          }
                          function d(t) {
                            return unescape(encodeURIComponent(t));
                          }
                          function p(t) {
                            return (function (t) {
                              return l(u(s(t), 8 * t.length));
                            })(d(t));
                          }
                          function g(t, e) {
                            return (function (t, e) {
                              var n,
                                r,
                                o = s(t),
                                i = [],
                                a = [];
                              for (
                                i[15] = a[15] = void 0,
                                  o.length > 16 && (o = u(o, 8 * t.length)),
                                  n = 0;
                                n < 16;
                                n += 1
                              )
                                ((i[n] = 909522486 ^ o[n]),
                                  (a[n] = 1549556828 ^ o[n]));
                              return (
                                (r = u(i.concat(s(e)), 512 + 8 * e.length)),
                                l(u(a.concat(r), 640))
                              );
                            })(d(t), d(e));
                          }
                          function m(t, e, n) {
                            return e
                              ? n
                                ? g(e, t)
                                : f(g(e, t))
                              : n
                                ? p(t)
                                : f(p(t));
                          }
                          t.exports ? (t.exports = m) : (e.md5 = m);
                        })(l);
                      })((e = { exports: {} })),
                      e.exports
                    );
                  })();
                function f(t) {
                  for (var e = 0, n = 0; n < t.length; n++) {
                    var r = t.charCodeAt(n);
                    e += r <= 127 ? 1 : r <= 2047 ? 2 : r <= 65535 ? 3 : 4;
                  }
                  return e;
                }
                function d(t) {
                  for (
                    var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 25,
                      n = [],
                      r = 0;
                    r < t.length;
                    r += e
                  ) {
                    var o = t.slice(r, r + e).join("");
                    n.push(o);
                  }
                  return n;
                }
                function p(t) {
                  var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
                    n = window.location.search.substr(1).match(e);
                  return null != n ? n[2] : null;
                }
                var g = {
                    appid: 1e3,
                    appkey: "abcdefg",
                    canStartReporting: !1,
                    prevRequestTime: 0,
                    shouldAggregateReport: 1,
                  },
                  m = [],
                  h = !0,
                  v = null,
                  b = void 0,
                  y = !1,
                  w = (function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 5,
                      e = [],
                      n = 0,
                      i = !1;
                    function c() {
                      for (; n < t && e.length > 0;) {
                        var r = e.shift();
                        (n++,
                          void 0 !== b
                            ? s(r.url, r.data, function () {
                                (n--, c());
                              })
                            : a && a.isInClient() && (a.isPigeon() || y)
                              ? l(r.url, r.data, function () {
                                  (n--, c());
                                })
                              : window.wx && "function" == typeof wx.request
                                ? f(r.url, r.data, function () {
                                    (n--, c());
                                  })
                                : u(r.url, r.data, function () {
                                    (n--, c());
                                  }));
                      }
                      (n < t || e.length < t) && (i = !1);
                    }
                    function u(t, e, n) {
                      var r = new XMLHttpRequest();
                      (r.open("post", t, !0),
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
                        r.send(e));
                    }
                    function l(t, e, n) {
                      a.getData(
                        {
                          url: t,
                          method: "post",
                          timeout: 2e3,
                          param: e,
                          header: {
                            "Content-type": "application/x-www-form-urlencoded",
                          },
                        },
                        n,
                      );
                    }
                    function s(t, e, n) {
                      return function () {
                        var t;
                        return (
                          (t = r().mark(function t(e, n, o) {
                            var i;
                            return r().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if ("function" != typeof b) {
                                      t.next = 10;
                                      break;
                                    }
                                    return (
                                      ((i = {
                                        url: e,
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
                                      (t.next = 6),
                                      b("CmdModule", "callCmd", {
                                        cmd: 186,
                                        params: i,
                                      })
                                    );
                                  case 6:
                                    (t.sent, o(), (t.next = 12));
                                    break;
                                  case 10:
                                    return (o(), t.abrupt("return", null));
                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })),
                          function () {
                            var e = this,
                              n = arguments;
                            return new Promise(function (r, i) {
                              var a = t.apply(e, n);
                              function c(t) {
                                o(a, r, i, c, u, "next", t);
                              }
                              function u(t) {
                                o(a, r, i, c, u, "throw", t);
                              }
                              c(void 0);
                            });
                          }.apply(this, arguments)
                        );
                      }.apply(this, arguments);
                    }
                    function f(t, e, n) {
                      wx.request({
                        url: t,
                        data: e,
                        method: "post",
                        success: function () {
                          n && n();
                        },
                        fail: function () {
                          n && n();
                        },
                      });
                    }
                    return {
                      add: function (t, n) {
                        (e.push({ url: t, data: n }), i || ((i = !0), c()));
                      },
                    };
                  })(5);
                function x(t, e, n) {
                  var r = {
                      _t: parseInt(new Date().getTime() / 1e3),
                      business: t,
                      appid: g.appid,
                      split: ";",
                    },
                    o = (function (t, e, n) {
                      var r = "",
                        o = [];
                      for (var i in t) o.push(i);
                      o.sort();
                      for (var a = 0, c = o.length; a < c; a++)
                        r += o[a] + t[o[a]];
                      return ((r += n.appkey + e), s(r));
                    })(r, e, g),
                    i = "https://webcollects.kugou.com/";
                  n && (i = "https://rtwebcollects.kugou.com/");
                  var a = ""
                    .concat(i, "v3/web/mpost?appid=")
                    .concat(r.appid, "&business=")
                    .concat(r.business, "&_t=")
                    .concat(r._t, "&sign=")
                    .concat(o, "&split=")
                    .concat(r.split);
                  w.add(a, e);
                }
                function S() {
                  g.prevRequestTime = Date.now();
                  var t,
                    e,
                    n,
                    r = [],
                    o = [],
                    i = [];
                  try {
                    if (m && m.length > 0)
                      for (var a = 0, l = m.length; a < l; a++) {
                        var s = m.pop(),
                          p = s[1];
                        try {
                          p = JSON.stringify(p);
                        } catch (t) {}
                        var b = f(p);
                        ((p = "".concat(b).concat(";").concat(p)),
                          s[0] == c && p
                            ? o.push(p)
                            : 12 == s[0] && p
                              ? r.push(p)
                              : s[0] == u && p
                                ? i.push(p)
                                : x(s[0], p, !1));
                      }
                  } catch (t) {}
                  ((t = d(r)), (e = d(o)), (n = d(i)));
                  for (var y = 0, w = t.length; y < w; y++) x(12, t[y], !0);
                  for (var S = 0, j = e.length; S < j; S++) x(c, e[S], !1);
                  for (var O = 0, k = n.length; O < k; O++) x(u, n[O], !1);
                  ((v = null), (h = !1));
                }
                function j() {
                  return g.canStartReporting
                    ? m && m.length >= 25
                      ? (S(), null)
                      : h || 2 == g.shouldAggregateReport
                        ? void S()
                        : Date.now() - g.prevRequestTime > 200
                          ? (S(), null)
                          : (v ||
                              (v = setTimeout(function () {
                                S();
                              }, 200)),
                            null)
                    : null;
                }
                var O = function (t) {
                  ((g.canStartReporting = !0),
                    (g.shouldAggregateReport = t || 1),
                    g.prevRequestTime || (g.prevRequestTime = Date.now()),
                    (g.prevRequestTime = g.prevRequestTime - 200 - 100));
                  try {
                    j();
                  } catch (t) {}
                  return null;
                };
                return {
                  kgStatPush: function (t, e, r, o, i) {
                    switch (
                      (r && (b = void 0),
                      o &&
                        (function (t) {
                          y = t;
                        })(o),
                      (t = n(
                        n(
                          {},
                          {
                            url: window.location.href,
                            hreffrom:
                              p("hreffrom") || p("fo") || p("from") || "",
                          },
                        ),
                        t,
                      )),
                      e)
                    ) {
                      case 1:
                        if (
                          "undefined" != typeof window &&
                          window.external &&
                          window.external.superCall &&
                          "function" == typeof window.external.superCall
                        )
                          try {
                            var l = window.external.superCall(788);
                            try {
                              l = JSON.parse(l);
                            } catch (t) {}
                            l &&
                              l.sword_patchid &&
                              t &&
                              !t.sword_ver &&
                              (t = n({ sword_ver: l.sword_patchid }, t));
                          } catch (t) {}
                        m.push([12, t, !0]);
                        try {
                          j();
                        } catch (t) {}
                        try {
                          !(function (t) {
                            if (t && t.typeid) {
                              var e = window.location.origin,
                                n =
                                  ~e.indexOf("voo.kugou.com") ||
                                  ~e.indexOf("http://10.16.4.19:8099") ||
                                  ~e.indexOf("//test.kugou.com"),
                                r = window._VO_ACT_ID_;
                              if (n && r) {
                                var o = { typeid: t.typeid, actId: r };
                                a.getData(
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
                                  function (t) {},
                                );
                              }
                            }
                          })(t);
                        } catch (t) {}
                        break;
                      case 2:
                        m.push([c, t, !1]);
                        try {
                          j();
                        } catch (t) {}
                        break;
                      case 3:
                        m.push([u, t, !1]);
                        try {
                          j();
                        } catch (t) {}
                        break;
                      default:
                        var s = e;
                        (("number" != typeof s || s <= 0) && (s = c),
                          m.push([s, t, !1]));
                        try {
                          j();
                        } catch (t) {}
                    }
                    (i && O(),
                      setTimeout(function () {
                        g.canStartReporting || O();
                      }, 1050));
                  },
                  notifyToStartReporting: O,
                };
              })();
            }).call(this, n(35));
          },
          function (t, e, n) {
            var r = n(3).default,
              o = n(21);
            ((t.exports = function (t) {
              var e = o(t, "string");
              return "symbol" == r(e) ? e : e + "";
            }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e) {
            ((t.exports = function (t, e) {
              ((this.v = t), (this.k = e));
            }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e, n) {
            var r = n(14);
            function o() {
              var e,
                n,
                i = "function" == typeof Symbol ? Symbol : {},
                a = i.iterator || "@@iterator",
                c = i.toStringTag || "@@toStringTag";
              function u(t, o, i, a) {
                var c = o && o.prototype instanceof s ? o : s,
                  u = Object.create(c.prototype);
                return (
                  r(
                    u,
                    "_invoke",
                    (function (t, r, o) {
                      var i,
                        a,
                        c,
                        u = 0,
                        s = o || [],
                        f = !1,
                        d = {
                          p: 0,
                          n: 0,
                          v: e,
                          a: p,
                          f: p.bind(e, 4),
                          d: function (t, n) {
                            return ((i = t), (a = 0), (c = e), (d.n = n), l);
                          },
                        };
                      function p(t, r) {
                        for (
                          a = t, c = r, n = 0;
                          !f && u && !o && n < s.length;
                          n++
                        ) {
                          var o,
                            i = s[n],
                            p = d.p,
                            g = i[2];
                          t > 3
                            ? (o = g === r) &&
                              ((c = i[(a = i[4]) ? 5 : ((a = 3), 3)]),
                              (i[4] = i[5] = e))
                            : i[0] <= p &&
                              ((o = t < 2 && p < i[1])
                                ? ((a = 0), (d.v = r), (d.n = i[1]))
                                : p < g &&
                                  (o = t < 3 || i[0] > r || r > g) &&
                                  ((i[4] = t), (i[5] = r), (d.n = g), (a = 0)));
                        }
                        if (o || t > 1) return l;
                        throw ((f = !0), r);
                      }
                      return function (o, s, g) {
                        if (u > 1)
                          throw TypeError("Generator is already running");
                        for (
                          f && 1 === s && p(s, g), a = s, c = g;
                          (n = a < 2 ? e : c) || !f;
                        ) {
                          i ||
                            (a
                              ? a < 3
                                ? (a > 1 && (d.n = -1), p(a, c))
                                : (d.n = c)
                              : (d.v = c));
                          try {
                            if (((u = 2), i)) {
                              if ((a || (o = "next"), (n = i[o]))) {
                                if (!(n = n.call(i, c)))
                                  throw TypeError(
                                    "iterator result is not an object",
                                  );
                                if (!n.done) return n;
                                ((c = n.value), a < 2 && (a = 0));
                              } else
                                (1 === a && (n = i.return) && n.call(i),
                                  a < 2 &&
                                    ((c = TypeError(
                                      "The iterator does not provide a '" +
                                        o +
                                        "' method",
                                    )),
                                    (a = 1)));
                              i = e;
                            } else if (
                              (n = (f = d.n < 0) ? c : t.call(r, d)) !== l
                            )
                              break;
                          } catch (t) {
                            ((i = e), (a = 1), (c = t));
                          } finally {
                            u = 1;
                          }
                        }
                        return { value: n, done: f };
                      };
                    })(t, i, a),
                    !0,
                  ),
                  u
                );
              }
              var l = {};
              function s() {}
              function f() {}
              function d() {}
              n = Object.getPrototypeOf;
              var p = [][a]
                  ? n(n([][a]()))
                  : (r((n = {}), a, function () {
                      return this;
                    }),
                    n),
                g = (d.prototype = s.prototype = Object.create(p));
              function m(t) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, d)
                    : ((t.__proto__ = d), r(t, c, "GeneratorFunction")),
                  (t.prototype = Object.create(g)),
                  t
                );
              }
              return (
                (f.prototype = d),
                r(g, "constructor", d),
                r(d, "constructor", f),
                (f.displayName = "GeneratorFunction"),
                r(d, c, "GeneratorFunction"),
                r(g),
                r(g, c, "Generator"),
                r(g, a, function () {
                  return this;
                }),
                r(g, "toString", function () {
                  return "[object Generator]";
                }),
                ((t.exports = o =
                  function () {
                    return { w: u, m: m };
                  }),
                (t.exports.__esModule = !0),
                (t.exports.default = t.exports))()
              );
            }
            ((t.exports = o),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e) {
            function n(e, r, o, i) {
              var a = Object.defineProperty;
              try {
                a({}, "", {});
              } catch (e) {
                a = 0;
              }
              ((t.exports = n =
                function (t, e, r, o) {
                  function i(e, r) {
                    n(t, e, function (t) {
                      return this._invoke(e, r, t);
                    });
                  }
                  e
                    ? a
                      ? a(t, e, {
                          value: r,
                          enumerable: !o,
                          configurable: !o,
                          writable: !o,
                        })
                      : (t[e] = r)
                    : (i("next", 0), i("throw", 1), i("return", 2));
                }),
                (t.exports.__esModule = !0),
                (t.exports.default = t.exports),
                n(e, r, o, i));
            }
            ((t.exports = n),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e, n) {
            var r = n(13),
              o = n(16);
            ((t.exports = function (t, e, n, i, a) {
              return new o(r().w(t, e, n, i), a || Promise);
            }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e, n) {
            var r = n(12),
              o = n(14);
            ((t.exports = function t(e, n) {
              function i(t, o, a, c) {
                try {
                  var u = e[t](o),
                    l = u.value;
                  return l instanceof r
                    ? n.resolve(l.v).then(
                        function (t) {
                          i("next", t, a, c);
                        },
                        function (t) {
                          i("throw", t, a, c);
                        },
                      )
                    : n.resolve(l).then(
                        function (t) {
                          ((u.value = t), a(u));
                        },
                        function (t) {
                          return i("throw", t, a, c);
                        },
                      );
                } catch (t) {
                  c(t);
                }
              }
              var a;
              (this.next ||
                (o(t.prototype),
                o(
                  t.prototype,
                  ("function" == typeof Symbol && Symbol.asyncIterator) ||
                    "@asyncIterator",
                  function () {
                    return this;
                  },
                )),
                o(
                  this,
                  "_invoke",
                  function (t, e, r) {
                    function o() {
                      return new n(function (e, n) {
                        i(t, r, e, n);
                      });
                    }
                    return (a = a ? a.then(o, o) : o());
                  },
                  !0,
                ));
            }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e, n) {
            t.exports = (function () {
              "use strict";
              function t(t, e) {
                var n,
                  r = Object.keys(t);
                return (
                  Object.getOwnPropertySymbols &&
                    ((n = Object.getOwnPropertySymbols(t)),
                    e &&
                      (n = n.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                      })),
                    r.push.apply(r, n)),
                  r
                );
              }
              function e(e) {
                for (var n = 1; n < arguments.length; n++) {
                  var r = null != arguments[n] ? arguments[n] : {};
                  n % 2
                    ? t(r, !0).forEach(function (t) {
                        var n, o;
                        ((n = e),
                          (t = r[(o = t)]),
                          o in n
                            ? Object.defineProperty(n, o, {
                                value: t,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                              })
                            : (n[o] = t));
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                        )
                      : t(r).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(r, t),
                          );
                        });
                }
                return e;
              }
              var n,
                r = {
                  isSSR: "undefined" == typeof window,
                  Cookie: [REDACTED]
                    write: function (t, e, n, r, o, i) {
                      (/^\w*$/.test(t) ||
                        alert("cookie\u683c\u5f0f\u4e0d\u6b63\u786e"),
                        /; /.test(e) &&
                          alert("cookie\u683c\u5f0f\u4e0d\u6b63\u786e"),
                        (t = t + "=" + e),
                        n &&
                          ((e = new Date()).setTime(e.getTime() + 1e3 * n),
                          (t += "; expires=" + e.toGMTString())),
                        r && (t += "; path=" + r),
                        o && (t += "; domain=" + o),
                        i && (t += "; secure"),
                        (document.cookie = t));
                    },
                    read: function (t, e, n) {
                      for (
                        var o = "", i = document.cookie.split("; "), a = 0;
                        a < i.length;
                        a++
                      ) {
                        var c = i[a].match(/^(\w+)=(.+)$/);
                        if (c && 1 < c.length && c[1] == t) {
                          o = c[2];
                          break;
                        }
                      }
                      return "" == o
                        ? null
                        : e
                          ? (n ? JSON : new r.Param()).parse(o)[e]
                          : o;
                    },
                  },
                  Md5: function (t) {
                    var e;
                    function n(t, e, n, r, o, i) {
                      return c(
                        ((i = c(c(e, t), c(r, i))) << o) | (i >>> (32 - o)),
                        n,
                      );
                    }
                    function r(t, e, r, o, i, a, c) {
                      return n((e & r) | (~e & o), t, e, i, a, c);
                    }
                    function o(t, e, r, o, i, a, c) {
                      return n((e & o) | (r & ~o), t, e, i, a, c);
                    }
                    function i(t, e, r, o, i, a, c) {
                      return n(e ^ r ^ o, t, e, i, a, c);
                    }
                    function a(t, e, r, o, i, a, c) {
                      return n(r ^ (e | ~o), t, e, i, a, c);
                    }
                    function c(t, e) {
                      var n = (65535 & t) + (65535 & e);
                      return (
                        (((t >> 16) + (e >> 16) + (n >> 16)) << 16) |
                        (65535 & n)
                      );
                    }
                    return t
                      ? (function (t) {
                          for (
                            var e = "0123456789abcdef", n = "", r = 0;
                            r < 4 * t.length;
                            r++
                          )
                            n +=
                              e.charAt((t[r >> 2] >> ((r % 4) * 8 + 4)) & 15) +
                              e.charAt((t[r >> 2] >> ((r % 4) * 8)) & 15);
                          return n;
                        })(
                          (function (t, e) {
                            ((t[e >> 5] |= 128 << (e % 32)),
                              (t[14 + (((e + 64) >>> 9) << 4)] = e));
                            for (
                              var n = 1732584193,
                                u = -271733879,
                                l = -1732584194,
                                s = 271733878,
                                f = 0;
                              f < t.length;
                              f += 16
                            ) {
                              var d = n,
                                p = u,
                                g = l,
                                m = s;
                              ((n = r(n, u, l, s, t[f + 0], 7, -680876936)),
                                (s = r(s, n, u, l, t[f + 1], 12, -389564586)),
                                (l = r(l, s, n, u, t[f + 2], 17, 606105819)),
                                (u = r(u, l, s, n, t[f + 3], 22, -1044525330)),
                                (n = r(n, u, l, s, t[f + 4], 7, -176418897)),
                                (s = r(s, n, u, l, t[f + 5], 12, 1200080426)),
                                (l = r(l, s, n, u, t[f + 6], 17, -1473231341)),
                                (u = r(u, l, s, n, t[f + 7], 22, -45705983)),
                                (n = r(n, u, l, s, t[f + 8], 7, 1770035416)),
                                (s = r(s, n, u, l, t[f + 9], 12, -1958414417)),
                                (l = r(l, s, n, u, t[f + 10], 17, -42063)),
                                (u = r(u, l, s, n, t[f + 11], 22, -1990404162)),
                                (n = r(n, u, l, s, t[f + 12], 7, 1804603682)),
                                (s = r(s, n, u, l, t[f + 13], 12, -40341101)),
                                (l = r(l, s, n, u, t[f + 14], 17, -1502002290)),
                                (n = o(
                                  n,
                                  (u = r(
                                    u,
                                    l,
                                    s,
                                    n,
                                    t[f + 15],
                                    22,
                                    1236535329,
                                  )),
                                  l,
                                  s,
                                  t[f + 1],
                                  5,
                                  -165796510,
                                )),
                                (s = o(s, n, u, l, t[f + 6], 9, -1069501632)),
                                (l = o(l, s, n, u, t[f + 11], 14, 643717713)),
                                (u = o(u, l, s, n, t[f + 0], 20, -373897302)),
                                (n = o(n, u, l, s, t[f + 5], 5, -701558691)),
                                (s = o(s, n, u, l, t[f + 10], 9, 38016083)),
                                (l = o(l, s, n, u, t[f + 15], 14, -660478335)),
                                (u = o(u, l, s, n, t[f + 4], 20, -405537848)),
                                (n = o(n, u, l, s, t[f + 9], 5, 568446438)),
                                (s = o(s, n, u, l, t[f + 14], 9, -1019803690)),
                                (l = o(l, s, n, u, t[f + 3], 14, -187363961)),
                                (u = o(u, l, s, n, t[f + 8], 20, 1163531501)),
                                (n = o(n, u, l, s, t[f + 13], 5, -1444681467)),
                                (s = o(s, n, u, l, t[f + 2], 9, -51403784)),
                                (l = o(l, s, n, u, t[f + 7], 14, 1735328473)),
                                (n = i(
                                  n,
                                  (u = o(
                                    u,
                                    l,
                                    s,
                                    n,
                                    t[f + 12],
                                    20,
                                    -1926607734,
                                  )),
                                  l,
                                  s,
                                  t[f + 5],
                                  4,
                                  -378558,
                                )),
                                (s = i(s, n, u, l, t[f + 8], 11, -2022574463)),
                                (l = i(l, s, n, u, t[f + 11], 16, 1839030562)),
                                (u = i(u, l, s, n, t[f + 14], 23, -35309556)),
                                (n = i(n, u, l, s, t[f + 1], 4, -1530992060)),
                                (s = i(s, n, u, l, t[f + 4], 11, 1272893353)),
                                (l = i(l, s, n, u, t[f + 7], 16, -155497632)),
                                (u = i(u, l, s, n, t[f + 10], 23, -1094730640)),
                                (n = i(n, u, l, s, t[f + 13], 4, 681279174)),
                                (s = i(s, n, u, l, t[f + 0], 11, -358537222)),
                                (l = i(l, s, n, u, t[f + 3], 16, -722521979)),
                                (u = i(u, l, s, n, t[f + 6], 23, 76029189)),
                                (n = i(n, u, l, s, t[f + 9], 4, -640364487)),
                                (s = i(s, n, u, l, t[f + 12], 11, -421815835)),
                                (l = i(l, s, n, u, t[f + 15], 16, 530742520)),
                                (n = a(
                                  n,
                                  (u = i(u, l, s, n, t[f + 2], 23, -995338651)),
                                  l,
                                  s,
                                  t[f + 0],
                                  6,
                                  -198630844,
                                )),
                                (s = a(s, n, u, l, t[f + 7], 10, 1126891415)),
                                (l = a(l, s, n, u, t[f + 14], 15, -1416354905)),
                                (u = a(u, l, s, n, t[f + 5], 21, -57434055)),
                                (n = a(n, u, l, s, t[f + 12], 6, 1700485571)),
                                (s = a(s, n, u, l, t[f + 3], 10, -1894986606)),
                                (l = a(l, s, n, u, t[f + 10], 15, -1051523)),
                                (u = a(u, l, s, n, t[f + 1], 21, -2054922799)),
                                (n = a(n, u, l, s, t[f + 8], 6, 1873313359)),
                                (s = a(s, n, u, l, t[f + 15], 10, -30611744)),
                                (l = a(l, s, n, u, t[f + 6], 15, -1560198380)),
                                (u = a(u, l, s, n, t[f + 13], 21, 1309151649)),
                                (n = a(n, u, l, s, t[f + 4], 6, -145523070)),
                                (s = a(s, n, u, l, t[f + 11], 10, -1120210379)),
                                (l = a(l, s, n, u, t[f + 2], 15, 718787259)),
                                (u = a(u, l, s, n, t[f + 9], 21, -343485551)),
                                (n = c(n, d)),
                                (u = c(u, p)),
                                (l = c(l, g)),
                                (s = c(s, m)));
                            }
                            return Array(n, u, l, s);
                          })(
                            (function (t) {
                              for (
                                var e = Array(), n = 0;
                                n < 8 * t.length;
                                n += 8
                              )
                                e[n >> 5] |=
                                  (255 & t.charCodeAt(n / 8)) << (n % 32);
                              return e;
                            })((e = t)),
                            8 * e.length,
                          ),
                        )
                      : "";
                  },
                  Param: function () {
                    var t = [],
                      e = {};
                    ((this.parse = function (t) {
                      for (
                        var n = t.split("&"), r = 0, o = n.length;
                        r < o;
                        r++
                      ) {
                        var i = n[r].split("=");
                        e[i[0]] = i[1];
                      }
                      return e;
                    }),
                      (this.toString = function (e) {
                        return t.join((e = e || "&"));
                      }),
                      (this.add = function (e, n) {
                        return (t.push(e + "=" + n), this);
                      }));
                  },
                  IsEmpty: function (t) {
                    return void 0 === t || null == t || "" == t;
                  },
                  Guid: function () {
                    function t() {
                      return ((65536 * (1 + Math.random())) | 0)
                        .toString(16)
                        .substring(1);
                    }
                    return (
                      t() +
                      t() +
                      "-" +
                      t() +
                      "-" +
                      t() +
                      "-" +
                      t() +
                      "-" +
                      t() +
                      t() +
                      t()
                    );
                  },
                  getKgMid: function () {
                    if (r.isSSR) return "";
                    var t = r.Cookie.read("kg_mid");
                    if (navigator.cookieEnabled) {
                      if (r.IsEmpty(t)) {
                        var e = r.Guid();
                        t = r.Md5(e);
                        try {
                          r.Cookie.write(
                            "kg_mid",
                            r.Md5(e),
                            864e6,
                            "/",
                            "kugou.com",
                          );
                        } catch (t) {}
                      }
                    } else {
                      var n = navigator.userAgent,
                        o = (function () {
                          var t = navigator.plugins,
                            e = "";
                          if (0 < t.length) {
                            for (var n = [], r = 0, o = t.length; r < o; r++) {
                              var i = t[r].name;
                              n.push(i);
                            }
                            e = n.toString();
                          }
                          return e;
                        })(),
                        i = screen.width + "x" + screen.height,
                        a = screen.colorDepth || "",
                        c = screen.pixelDepth || "";
                      ((e = (function () {
                        var t = ["canvas"];
                        try {
                          var e,
                            n = document.createElement("canvas");
                          n.getContext &&
                            n.getContext("2d") &&
                            ((n.width = 200),
                            (n.height = 200),
                            (n.style.display = "inline"),
                            (e = n.getContext("2d")).rect(0, 0, 10, 10),
                            e.rect(2, 2, 6, 6),
                            t.push(
                              "canvas winding:" +
                                (!1 === e.isPointInPath(5, 5, "evenodd")
                                  ? "yes"
                                  : "no"),
                            ),
                            (e.textBaseline = "alphabetic"),
                            (e.fillStyle = "#f60"),
                            e.fillRect(125, 1, 62, 20),
                            (e.fillStyle = "#069"),
                            (e.font = "14px 'Arial'"),
                            e.fillText("hello kugou", 2, 15),
                            (e.fillStyle = "rgba(102, 204, 0, 0.2)"),
                            (e.font = "18pt Arial"),
                            e.fillText("hello kugou", 4, 45),
                            (e.globalCompositeOperation = "multiply"),
                            (e.fillStyle = "rgb(255,0,255)"),
                            e.beginPath(),
                            e.arc(50, 50, 50, 0, 2 * Math.PI, !0),
                            e.closePath(),
                            e.fill(),
                            (e.fillStyle = "rgb(0,255,255)"),
                            e.beginPath(),
                            e.arc(100, 50, 50, 0, 2 * Math.PI, !0),
                            e.closePath(),
                            e.fill(),
                            (e.fillStyle = "rgb(255,255,0)"),
                            e.beginPath(),
                            e.arc(75, 100, 50, 0, 2 * Math.PI, !0),
                            e.closePath(),
                            e.fill(),
                            (e.fillStyle = "rgb(255,0,255)"),
                            e.arc(75, 75, 75, 0, 2 * Math.PI, !0),
                            e.arc(75, 75, 25, 0, 2 * Math.PI, !0),
                            e.fill("evenodd"),
                            n.toDataURL &&
                              t.push("canvas fp:" + n.toDataURL()));
                        } catch (t) {}
                        return r.Md5(t.toString());
                      })()),
                        (t = r.Md5(n + o + i + a + c + e)));
                    }
                    return t;
                  },
                  isiOS: function () {
                    if (r.isSSR) return !1;
                    var t = (n = navigator.userAgent).match(
                        /(iPad).*OS\s([\d_]+)/,
                      ),
                      e = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                      n = !t && n.match(/(iPhone\sOS)\s([\d_]+)/);
                    return !!(t || e || n);
                  },
                  GetPCClientUserInfo: function (t) {
                    if (r.isSSR) return null;
                    var e =
                        "KGSupercall_GetUserInfo" +
                        Math.random().toString().substr(2, 9),
                      n = null;
                    window[e] = function (n) {
                      (t && t(n), (window[e] = null));
                    };
                    try {
                      n = external.SuperCall(504, '{"callback":"' + e + '"}');
                    } catch (n) {}
                    if (void 0 === n || !t)
                      return t ? void 0 : ((window[e] = null), n);
                    window[e](n);
                  },
                  getPCMID_APPID: function (t) {
                    if (r.isSSR) return null;
                    try {
                      var e;
                      "function" == typeof t
                        ? ((e =
                            "KGSupercall_getMID_APPID" +
                            Math.random().toString().substr(2, 9)),
                          (top.window[e] = function (n) {
                            n && ((top.window[e] = null), t && t(n));
                          }),
                          external.SuperCall(822, '{"callback":"' + e + '"}'))
                        : external.SuperCall(822, t);
                    } catch (t) {}
                  },
                  isPCClient: function () {
                    return !(
                      r.isSSR ||
                      !(
                        window.external &&
                        window.external.SuperCall &&
                        "function" == typeof window.external.SuperCall &&
                        window.external.GetVersion &&
                        0 < window.external.GetVersion()
                      )
                    );
                  },
                },
                o =
                  ((function (t) {
                    function e(t, e) {
                      var n,
                        r = Object.keys(t);
                      return (
                        Object.getOwnPropertySymbols &&
                          ((n = Object.getOwnPropertySymbols(t)),
                          e &&
                            (n = n.filter(function (e) {
                              return Object.getOwnPropertyDescriptor(t, e)
                                .enumerable;
                            })),
                          r.push.apply(r, n)),
                        r
                      );
                    }
                    function n(t) {
                      for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2
                          ? e(Object(r), !0).forEach(function (e) {
                              var n,
                                o = t;
                              ((e = r[(n = e)]),
                                n in o
                                  ? Object.defineProperty(o, n, {
                                      value: e,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                    })
                                  : (o[n] = e));
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
                    var r;
                    t.exports =
                      ((r =
                        "undefined" == typeof window
                          ? {}
                          : {
                              str2Json: function (t) {
                                var e = {};
                                if (
                                  "[object String]" ===
                                  Object.prototype.toString.call(t)
                                )
                                  try {
                                    e = JSON.parse(t);
                                  } catch (t) {
                                    e = {};
                                  }
                                return e;
                              },
                              json2Str: function (t) {
                                var e = t;
                                if ("string" != typeof t)
                                  try {
                                    e = JSON.stringify(t);
                                  } catch (t) {
                                    e = "";
                                  }
                                return e;
                              },
                              cbNum: 0,
                              isIOS: !!navigator.userAgent.match(/KGBrowser/gi),
                              isKugouAndroid:
                                !!navigator.userAgent.match(/kugouandroid/gi),
                              isAndroid:
                                "undefined" != typeof external &&
                                void 0 !== external.superCall,
                              isDKAPP:
                                !!navigator.userAgent.match(/kgshortvideo/gi),
                              isKGRing:
                                !!navigator.userAgent.match(/KGRingCode/gi),
                              isFXAPP: !!navigator.userAgent.match(/Fanxing/gi),
                              isFXQianBanAPP:
                                !!navigator.userAgent.match(/QianBan/gi),
                              isIframePage:
                                window.parent && window.parent != window,
                              isInClient: function () {
                                return !!(
                                  r.isAndroid ||
                                  r.isKugouAndroid ||
                                  r.isIOS ||
                                  r.isFXAPP ||
                                  r.isFXQianBanAPP ||
                                  r.isDKAPP ||
                                  r.isKGRing
                                );
                              },
                              loadUrl: function (t) {
                                var e = document.createElement("iframe");
                                (e.setAttribute("src", t),
                                  e.setAttribute("style", "display:none;"),
                                  e.setAttribute("height", "0px"),
                                  e.setAttribute("width", "0px"),
                                  e.setAttribute("frameborder", "0"),
                                  document.body.appendChild(e),
                                  e.parentNode.removeChild(e));
                              },
                              mobileCallInIframe: function (t, e, n) {
                                ((t = { type: "KgMobileCall", cmd: t }),
                                  e && (t.dataJson = e),
                                  n && (t.cbName = n),
                                  (t.source = "personal"),
                                  window.parent.postMessage(t, "*"));
                              },
                              receiveMessage: function (t) {
                                var e = t.data;
                                ("KgMobileCall" == e.type &&
                                  window[e.cbName] &&
                                  (e.dataJson
                                    ? window[e.cbName](e.dataJson)
                                    : window[e.cbName](),
                                  (window[e.cbName] = null)),
                                  "KgWebMobileCall" == e.type &&
                                    ((t = e.funcName.split(".")),
                                    KgWebMobileCall[t[1]] &&
                                      (e.dataJson
                                        ? KgWebMobileCall[t[1]](e.dataJson)
                                        : KgWebMobileCall[t[1]]())));
                              },
                              callCmd: function (t) {
                                var e,
                                  n,
                                  o = r,
                                  i = "kugouurl";
                                if (
                                  ((i = o.isKugouAndroid
                                    ? "kugoujsbridge"
                                    : o.isAndroid
                                      ? "superCall"
                                      : o.isFXAPP || o.isFXQianBanAPP
                                        ? "fanxing2"
                                        : "kugouurl"),
                                  "kugoujsbridge" ==
                                    (i =
                                      t && t.useMobileCallType
                                        ? t.useMobileCallType
                                        : i))
                                ) {
                                  var a = {},
                                    c = "";
                                  (t.cmd && (a.cmd = t.cmd),
                                    t.jsonStr && (a.jsonStr = t.jsonStr),
                                    t.callback &&
                                      (o.cbNum++,
                                      (c =
                                        "kgandroidmobilecall_" +
                                        (t.cmd || 0) +
                                        "_" +
                                        o.cbNum +
                                        Math.random().toString().substr(2, 9)),
                                      (a.callback = c),
                                      (window[c] = function (e, n) {
                                        if (void 0 !== e)
                                          if (
                                            "[object String]" ===
                                            Object.prototype.toString.call(e)
                                          ) {
                                            try {
                                              e =
                                                "#" === n
                                                  ? decodeURIComponent(e)
                                                  : decodeURIComponent(
                                                      decodeURIComponent(e),
                                                    );
                                            } catch (e) {
                                              console.error(
                                                "decodeURIComponent",
                                                e,
                                              );
                                            }
                                            t.callback(o.str2Json(e));
                                          } else t.callback(e);
                                      })),
                                    t.AndroidCallback &&
                                      (((u = o.str2Json(
                                        t.jsonStr,
                                      )).AndroidCallback = c),
                                      (t.jsonStr = o.json2Str(u)),
                                      t.jsonStr && (a.jsonStr = t.jsonStr)));
                                  var u = encodeURIComponent(JSON.stringify(a));
                                  ((u =
                                    "kugoujsbridge://start.kugou_jsbridge/?".concat(
                                      u,
                                    )),
                                    o.isIframePage
                                      ? o.mobileCallInIframe(
                                          a.cmd,
                                          a.jsonStr,
                                          c,
                                        )
                                      : o.loadUrl(u));
                                } else if ("superCall" == i) {
                                  if (((c = a = ""), t.jsonStr))
                                    if (
                                      (t.callback &&
                                        "" !== t.callback &&
                                        !0 === t.AndroidCallback &&
                                        (o.cbNum++,
                                        (c =
                                          "kgmobilecall_" +
                                          (t.cmd || 0) +
                                          "_" +
                                          o.cbNum +
                                          Math.random()
                                            .toString()
                                            .substr(2, 9)),
                                        (window[c] = function (e, n) {
                                          if (void 0 !== e)
                                            if (
                                              "[object String]" ===
                                              Object.prototype.toString.call(e)
                                            ) {
                                              try {
                                                e =
                                                  "#" === n
                                                    ? decodeURIComponent(e)
                                                    : decodeURIComponent(
                                                        decodeURIComponent(e),
                                                      );
                                              } catch (e) {
                                                console.error(
                                                  "decodeURIComponent",
                                                  decodeURIComponent,
                                                );
                                              }
                                              t.callback(o.str2Json(e));
                                            } else t.callback(e);
                                        }),
                                        ((u = o.str2Json(
                                          t.jsonStr,
                                        )).AndroidCallback = c),
                                        (t.jsonStr = o.json2Str(u))),
                                      o.isIframePage && t.AndroidCallback)
                                    )
                                      o.mobileCallInIframe(t.cmd, t.jsonStr, c);
                                    else
                                      try {
                                        a = external.superCall(
                                          t.cmd,
                                          t.jsonStr,
                                        );
                                      } catch (e) {}
                                  else
                                    try {
                                      a = external.superCall(t.cmd);
                                    } catch (e) {}
                                  t.AndroidCallback ||
                                    (t.callback &&
                                      "" !== t.callback &&
                                      "AndroidCallback" != a &&
                                      ((a = o.str2Json(a)), t.callback(a)));
                                } else
                                  "fanxing2" == i
                                    ? ((i = n = ""),
                                      (n = t.callback
                                        ? (o.cbNum++,
                                          (i =
                                            "kgmobilecall_" +
                                            (t.cmd || 0) +
                                            "_" +
                                            o.cbNum +
                                            Math.random()
                                              .toString()
                                              .substr(2, 9)),
                                          (window[i] = function (e) {
                                            void 0 !== e &&
                                              t.callback &&
                                              ("[object String]" ===
                                              Object.prototype.toString.call(e)
                                                ? t.callback(o.str2Json(e))
                                                : t.callback(e));
                                          }),
                                          t.jsonStr
                                            ? 'fanxing2://send.message/?{"cmd":' +
                                              t.cmd +
                                              ', "jsonStr":' +
                                              t.jsonStr +
                                              ', "callback":"' +
                                              i +
                                              '"}'
                                            : 'fanxing2://send.message/?{"cmd":' +
                                              t.cmd +
                                              ', "callback":"' +
                                              i +
                                              '"}')
                                        : t.jsonStr
                                          ? 'fanxing2://send.message/?{"cmd":' +
                                            t.cmd +
                                            ', "jsonStr":' +
                                            t.jsonStr +
                                            "}"
                                          : 'fanxing2://send.message/?{"cmd":' +
                                            t.cmd +
                                            "}"),
                                      o.isIframePage
                                        ? o.mobileCallInIframe(
                                            t.cmd,
                                            t.jsonStr,
                                            i,
                                          )
                                        : navigator.userAgent.match(
                                              /(Android);?[\s\/]+([\d.]+)?/,
                                            )
                                          ? external && external.callFanxing
                                            ? ((e = {
                                                cmd: t.cmd,
                                                jsonStr: t.jsonStr || "",
                                                callback: i,
                                              }),
                                              external.callFanxing(
                                                JSON.stringify(e),
                                              ))
                                            : window.prompt(n)
                                          : o.loadUrl(n))
                                    : ((n = e = ""),
                                      t.callback &&
                                        (o.cbNum++,
                                        (n =
                                          "kgmobilecall_" +
                                          (t.cmd || 0) +
                                          "_" +
                                          o.cbNum +
                                          Math.random()
                                            .toString()
                                            .substr(2, 9)),
                                        (window[n] = function (e) {
                                          void 0 !== e &&
                                            t.callback &&
                                            ("[object String]" ===
                                            Object.prototype.toString.call(e)
                                              ? t.callback(o.str2Json(e))
                                              : t.callback(e));
                                        })),
                                      n &&
                                        "" != n &&
                                        t.jsonStr &&
                                        (e =
                                          'kugouurl://start.music/?{"cmd":' +
                                          t.cmd +
                                          ', "jsonStr":' +
                                          t.jsonStr +
                                          ', "callback":"' +
                                          n +
                                          '"}'),
                                      n &&
                                        "" != n &&
                                        !t.jsonStr &&
                                        (e =
                                          'kugouurl://start.music/?{"cmd":' +
                                          t.cmd +
                                          ', "callback":"' +
                                          n +
                                          '"}'),
                                      "" == n &&
                                        t.jsonStr &&
                                        (e =
                                          'kugouurl://start.music/?{"cmd":' +
                                          t.cmd +
                                          ', "jsonStr":' +
                                          t.jsonStr +
                                          "}"),
                                      "" != n ||
                                        t.jsonStr ||
                                        (e =
                                          'kugouurl://start.music/?{"cmd":' +
                                          t.cmd +
                                          "}"),
                                      o.isIframePage
                                        ? o.mobileCallInIframe(
                                            t.cmd,
                                            t.jsonStr,
                                            n,
                                          )
                                        : o.loadUrl(e));
                              },
                              sendCommandOrder: function (t) {
                                var e = window.location.origin,
                                  n =
                                    ~e.indexOf("voo.kugou.com") ||
                                    ~e.indexOf("http://10.16.4.19:8099") ||
                                    ~e.indexOf("http://test.kugou.com:8099"),
                                  o = window._VO_ACT_ID_;
                                n &&
                                  o &&
                                  t &&
                                  ((t = { actId: o, cmd: t }),
                                  (t = r.json2Str({
                                    url: "".concat(
                                      e,
                                      "/public/addCommandOrder",
                                    ),
                                    method: "post",
                                    param: r.json2Str(t),
                                    header: {
                                      "Content-Type": "application/json",
                                    },
                                    AndroidCallback: !0,
                                  })),
                                  r.callCmd({
                                    cmd: 186,
                                    jsonStr: t,
                                    callback: function (t) {
                                      ~window.location.href.indexOf(
                                        "debugCmd",
                                      ) && console.log(t);
                                    },
                                  }));
                              },
                              formatUAMethod: function () {
                                var t = r,
                                  e = { os: "", app: "" };
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
                                          : navigator.userAgent.match(
                                                /android/gi,
                                              )
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
                                              !navigator.userAgent.match(
                                                /wxwork/gi,
                                              )
                                            ? (e.app = "weixin")
                                            : navigator.userAgent.match(
                                                  /micromessenger/gi,
                                                ) &&
                                                navigator.userAgent.match(
                                                  /wxwork/gi,
                                                )
                                              ? (e.app = "wxwork")
                                              : navigator.userAgent.match(
                                                    /weibo/gi,
                                                  )
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
                            }),
                      "undefined" == typeof window
                        ? {}
                        : {
                            isIOS: r.isIOS,
                            isKugouAndroid: r.isKugouAndroid,
                            isAndroid: r.isAndroid,
                            isFXAPP: r.isFXAPP,
                            isFXQianBanAPP: r.isFXQianBanAPP,
                            isDKAPP: r.isDKAPP,
                            isKGRing: r.isKGRing,
                            formatUA: r.formatUAMethod(),
                            isInClient: function () {
                              return r.isInClient();
                            },
                            mobileCall: function (t, e, o, i) {
                              var a = "";
                              if ((e && (a = r.json2Str(e)), !t))
                                return (
                                  console.error(
                                    "\u8bf7\u8f93\u5165\u547d\u4ee4\u53f7\uff01",
                                  ),
                                  !1
                                );
                              if (
                                ((e = {}),
                                t && (e.cmd = t),
                                "" != a && (e.jsonStr = a),
                                o && (e.callback = o),
                                (e = n(n({}, e), i)),
                                !t ||
                                  (186 != t && 225 != t) ||
                                  (o && (e.AndroidCallback = !0)),
                                e.AndroidCallback &&
                                  !e.jsonStr &&
                                  (e.jsonStr = {}),
                                r.isInClient())
                              ) {
                                r.callCmd(e);
                                try {
                                  r.sendCommandOrder(t);
                                } catch (t) {}
                              } else
                                o &&
                                  o({
                                    status: 0,
                                    error:
                                      "\u4e0d\u5728\u5ba2\u6237\u7aef\u5185",
                                  });
                            },
                            KgWebMobileCall: function (t, e) {
                              if (t)
                                try {
                                  r.isIframePage &&
                                    window.parent.postMessage(
                                      { type: "KgWebMobileCall", funcName: t },
                                      "*",
                                    );
                                  var n = t.split(".");
                                  n.reduce(function (r, o) {
                                    if (r[o]) {
                                      if (o !== n[n.length - 1]) return r[o];
                                      var i = r[o];
                                      return "function" == typeof i
                                        ? ((r[o] = function () {
                                            (i && i.apply(void 0, arguments),
                                              e && e.apply(void 0, arguments));
                                          }),
                                          r[o])
                                        : (console.error(
                                            "\u8bf7\u68c0\u67e5\uff0c\u5f53\u524d\u73af\u5883\u53d8\u91cf\u5df2\u6ce8\u518c\u4e86\u5bf9\u8c61\uff1a" +
                                              t +
                                              "\uff0c\u4e14\u8be5\u5bf9\u8c61\u4e0d\u662f\u65b9\u6cd5",
                                          ),
                                          null);
                                    }
                                    return (
                                      o === n[n.length - 1]
                                        ? (r[o] = function () {
                                            e && e.apply(void 0, arguments);
                                          })
                                        : (r[o] = new Object()),
                                      r[o]
                                    );
                                  }, window);
                                } catch (t) {}
                            },
                          });
                  })((n = { exports: {} })),
                  n.exports);
              return function (t, n, i, a) {
                var c, u, l, s;
                r.isSSR
                  ? n && n(null)
                  : ((c = { useMobileCallType: "" }),
                    i &&
                      o.isKugouAndroid &&
                      !o.isIOS &&
                      (c = { useMobileCallType: "superCall" }),
                    (s = 101),
                    (u = {
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
                    (l = function (t, e) {
                      return (
                        Array.isArray(a) &&
                          a.length &&
                          a.forEach(function (n) {
                            t.hasOwnProperty(n) || (t[n] = e[n] || "");
                          }),
                        t
                      );
                    }),
                    window.MiniApp && window.MiniApp.listenGetUserInfo
                      ? window.MiniApp &&
                        window.MiniApp.listenGetUserInfo({
                          success: function (t) {
                            var e = parseInt(new Date().getTime());
                            (1e3 ===
                            (e = {
                              appid: Number(t.appid) || 1058,
                              clientver: t.clientver || 12e3,
                              uuid: t.uuid || t.mid || e,
                              mid: t.mid || e,
                              dfid: t.dfid || "-",
                              userid: t.kugouID,
                              token: t.token,
                              clienttime: e,
                            }).appid
                              ? (e.plat = 2)
                              : 1005 === e.appid
                                ? (e.plat = 1)
                                : (e.plat = 4),
                              n && n(e));
                          },
                          fail: function (t) {
                            (console.error(
                              "miniapp \u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25",
                            ),
                              n && n(null));
                          },
                        })
                      : o.isInClient() && !o.isFXAPP
                        ? o.mobileCall(
                            s,
                            null,
                            function (t) {
                              (1 == t.status
                                ? ((u.userid = t.kugouID),
                                  (u.token = t.token),
                                  (u.userpic = t.photo),
                                  (u.userNickName = t.nickName),
                                  (u.isVIP = t.isVIP || t.isVip))
                                : ((u.userid = null),
                                  (u.token = null),
                                  (u.userpic = null),
                                  (u.userNickName = null)),
                                (u.appid = t.appid),
                                o.mobileCall(
                                  122,
                                  null,
                                  function (r) {
                                    ((u.clientver = r.version),
                                      (u.platform = r.platform || ""),
                                      o.mobileCall(
                                        124,
                                        null,
                                        function (i) {
                                          ((u.mid = i.mid_v2 || i.mid),
                                            (u.dfid = i.dfid || "-"),
                                            (u.uuid = i.uuid || u.mid),
                                            (u.osVersion = i.osVersion || ""),
                                            o.isIOS
                                              ? (u.plat = 2)
                                              : (u.plat = 1),
                                            (u = l(u, e({}, t, {}, r, {}, i))),
                                            n && n(u));
                                        },
                                        c,
                                      ));
                                  },
                                  c,
                                ));
                            },
                            c,
                          )
                        : o.isInClient() && o.isFXAPP
                          ? o.mobileCall(625, null, function (t) {
                              ((t = JSON.parse(t.jsonStr)),
                                (u.clientver = t.version),
                                (u.mid = t.mid),
                                (u.uuid = t.uuid || u.mid),
                                (u.dfid = t.dfid || "-"),
                                (u.appid = t.appId),
                                r.isiOS() ? (u.plat = 2) : (u.plat = 1),
                                o.mobileCall(410, null, function (t) {
                                  1 == JSON.parse(t.jsonStr).status
                                    ? o.mobileCall(411, {}, function (t) {
                                        ((t = JSON.parse(t.jsonStr).jsonStr
                                          ? JSON.parse(t.jsonStr).jsonStr
                                          : JSON.parse(t.jsonStr)),
                                          (u.userid = t.kugouId),
                                          (u.token = t.token),
                                          (u.pic = t.userLogo),
                                          (u.nickName = t.nickName),
                                          n && n(u));
                                      })
                                    : ((u.userid = null),
                                      (u.token = null),
                                      (u.userpic = null),
                                      (u.userNickName = null),
                                      n && n(u));
                                }));
                            })
                          : r.isPCClient()
                            ? r.GetPCClientUserInfo(function (t) {
                                try {
                                  t = JSON.parse(t);
                                } catch (t) {}
                                ((u.userid = t.kugouid || ""),
                                  (u.token = t.token || ""),
                                  (u.userNickName = t.nickname || ""),
                                  (u.userpic = t.usrPic || ""),
                                  (u.userNickName = u.userNickName
                                    ? unescape(u.userNickName)
                                    : ""),
                                  r.getPCMID_APPID(function (t) {
                                    try {
                                      t = JSON.parse(t);
                                    } catch (t) {}
                                    ((u.appid = t.appid || 1001),
                                      (u.dfid = t.dfid || "-"),
                                      (u.mid = t.mid || ""),
                                      (u.uuid = t.uuid || u.mid),
                                      (u.plat = 3),
                                      (u.clientver =
                                        window.external.GetVersion()),
                                      (u = l(u)),
                                      n && n(u));
                                  }));
                              })
                            : ((i = r.Cookie.read("a_id")),
                              (s = r.Cookie.read("KuGoo", "a_id")),
                              (u.appid = t || null),
                              (u.mid = r.getKgMid()),
                              (u.uuid = u.mid),
                              (u.plat = 4),
                              (u.dfid = r.Cookie.read("kg_dfid") || "-"),
                              (u.userid = r.Cookie.read("KuGoo", "KugooID")),
                              (u.userpic = r.Cookie.read("KuGoo", "Pic")),
                              (u.userNickName = r.Cookie.read(
                                "KuGoo",
                                "NickName",
                              )),
                              (u.token = r.Cookie.read("KuGoo", "t")),
                              (u.appid = u.appid || s || i || null),
                              s &&
                                s != u.appid &&
                                u.appid &&
                                ((1010 != s && 1014 != s) ||
                                  (1010 != u.appid && 1014 != u.appid)) &&
                                ((u.userid = null),
                                (u.token = null),
                                (u.userpic = null),
                                (u.userNickName = null)),
                              (u.clientver = 1e3),
                              (u.userNickName = u.userNickName
                                ? unescape(u.userNickName)
                                : ""),
                              n && n(u)));
              };
            })();
          },
          function (t, e, n) {
            t.exports = (function () {
              "use strict";
              function t(t, e) {
                var n,
                  r = Object.keys(t);
                return (
                  Object.getOwnPropertySymbols &&
                    ((n = Object.getOwnPropertySymbols(t)),
                    e &&
                      (n = n.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                      })),
                    r.push.apply(r, n)),
                  r
                );
              }
              function e(e) {
                for (var n = 1; n < arguments.length; n++) {
                  var r = null != arguments[n] ? arguments[n] : {};
                  n % 2
                    ? t(Object(r), !0).forEach(function (t) {
                        var n, o;
                        ((n = e),
                          (t = r[(o = t)]),
                          o in n
                            ? Object.defineProperty(n, o, {
                                value: t,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                              })
                            : (n[o] = t));
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                        )
                      : t(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(r, t),
                          );
                        });
                }
                return e;
              }
              var n =
                "undefined" == typeof window
                  ? {}
                  : {
                      str2Json: function (t) {
                        var e = {};
                        if (
                          "[object String]" ===
                          Object.prototype.toString.call(t)
                        )
                          try {
                            e = JSON.parse(t);
                          } catch (t) {
                            e = {};
                          }
                        return e;
                      },
                      json2Str: function (t) {
                        var e = t;
                        if ("string" != typeof t)
                          try {
                            e = JSON.stringify(t);
                          } catch (t) {
                            e = "";
                          }
                        return e;
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
                      isChangAPPFXWebview:
                        !!navigator.userAgent.match(/ChangChang/gi),
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
                      loadUrl: function (t) {
                        var e = document.createElement("iframe");
                        (e.setAttribute("src", t),
                          e.setAttribute("style", "display:none;"),
                          e.setAttribute("height", "0px"),
                          e.setAttribute("width", "0px"),
                          e.setAttribute("frameborder", "0"),
                          document.body.appendChild(e),
                          e.parentNode.removeChild(e),
                          (e = null));
                      },
                      mobileCallInIframe: function (t, e, n) {
                        ((t = { type: "KgMobileCall", cmd: t }),
                          e && (t.dataJson = e),
                          n && (t.cbName = n),
                          (t.source = "personal"),
                          window.parent.postMessage(t, "*"));
                      },
                      receiveMessage: function (t) {
                        var e = t.data;
                        ("KgMobileCall" == e.type &&
                          window[e.cbName] &&
                          (e.dataJson
                            ? window[e.cbName](e.dataJson)
                            : window[e.cbName](),
                          (window[e.cbName] = null)),
                          "KgWebMobileCall" == e.type &&
                            ((t = e.funcName.split(".")),
                            window.KgWebMobileCall &&
                              window.KgWebMobileCall[t[1]] &&
                              (e.dataJson
                                ? KgWebMobileCall[t[1]](e.dataJson)
                                : KgWebMobileCall[t[1]]())));
                      },
                      callCmd: function (t) {
                        var e,
                          r,
                          o = n,
                          i = "kugouurl";
                        if (
                          ((i = o.isKugouAndroid
                            ? "kugoujsbridge"
                            : o.isAndroid
                              ? "superCall"
                              : o.isFXAPP ||
                                  o.isFXQianBanAPP ||
                                  o.isChangAPPFXWebview
                                ? "fanxing2"
                                : "kugouurl"),
                          "kugoujsbridge" ==
                            (i =
                              t && t.useMobileCallType
                                ? t.useMobileCallType
                                : i))
                        ) {
                          var a = {},
                            c = "";
                          (t.cmd && (a.cmd = t.cmd),
                            t.jsonStr && (a.jsonStr = t.jsonStr),
                            t.callback &&
                              (o.cbNum++,
                              (c =
                                "kgandroidmobilecall_" +
                                (t.cmd || 0) +
                                "_" +
                                o.cbNum +
                                Math.random().toString().substr(2, 9)),
                              (window[c] = function (e, n) {
                                if (void 0 !== e)
                                  if (
                                    "[object String]" ===
                                    Object.prototype.toString.call(e)
                                  ) {
                                    try {
                                      e =
                                        "#" === n
                                          ? decodeURIComponent(e)
                                          : decodeURIComponent(
                                              decodeURIComponent(e),
                                            );
                                    } catch (e) {
                                      console.error("decodeURIComponent", e);
                                    }
                                    t.callback(o.str2Json(e));
                                  } else t.callback(e);
                              }),
                              t.AndroidCallback
                                ? (((u = o.str2Json(
                                    t.jsonStr,
                                  )).AndroidCallback = c),
                                  (t.jsonStr = o.json2Str(u)),
                                  t.jsonStr && (a.jsonStr = t.jsonStr))
                                : (a.callback = c)));
                          var u = encodeURIComponent(JSON.stringify(a));
                          ((u = "kugoujsbridge://start.kugou_jsbridge/?".concat(
                            u,
                          )),
                            o.isIframePage
                              ? o.mobileCallInIframe(a.cmd, a.jsonStr, c)
                              : o.loadUrl(u));
                        } else if ("superCall" == i) {
                          if (((a = ""), (c = ""), t.jsonStr))
                            if (
                              (t.callback &&
                                "" !== t.callback &&
                                !0 === t.AndroidCallback &&
                                (o.cbNum++,
                                (c =
                                  "kgmobilecall_" +
                                  (t.cmd || 0) +
                                  "_" +
                                  o.cbNum +
                                  Math.random().toString().substr(2, 9)),
                                (window[c] = function (e, n) {
                                  if (void 0 !== e)
                                    if (
                                      "[object String]" ===
                                      Object.prototype.toString.call(e)
                                    ) {
                                      try {
                                        e =
                                          "#" === n
                                            ? decodeURIComponent(e)
                                            : decodeURIComponent(
                                                decodeURIComponent(e),
                                              );
                                      } catch (e) {
                                        console.error(
                                          "decodeURIComponent",
                                          decodeURIComponent,
                                        );
                                      }
                                      t.callback(o.str2Json(e));
                                    } else t.callback(e);
                                }),
                                ((u = o.str2Json(t.jsonStr)).AndroidCallback =
                                  c),
                                (t.jsonStr = o.json2Str(u))),
                              o.isIframePage && t.AndroidCallback)
                            )
                              o.mobileCallInIframe(t.cmd, t.jsonStr, c);
                            else
                              try {
                                a = external.superCall(t.cmd, t.jsonStr);
                              } catch (e) {}
                          else
                            try {
                              a = external.superCall(t.cmd);
                            } catch (e) {}
                          t.AndroidCallback ||
                            (t.callback &&
                              "" !== t.callback &&
                              "AndroidCallback" != a &&
                              ((a = o.str2Json(a)), t.callback(a)));
                        } else
                          "fanxing2" == i
                            ? ((i = r = ""),
                              (r = t.callback
                                ? (o.cbNum++,
                                  (i =
                                    "kgmobilecall_" +
                                    (t.cmd || 0) +
                                    "_" +
                                    o.cbNum +
                                    Math.random().toString().substr(2, 9)),
                                  (window[i] = function (e) {
                                    void 0 !== e &&
                                      t.callback &&
                                      ("[object String]" ===
                                      Object.prototype.toString.call(e)
                                        ? t.callback(o.str2Json(e))
                                        : t.callback(e));
                                  }),
                                  t.jsonStr
                                    ? 'fanxing2://send.message/?{"cmd":' +
                                      t.cmd +
                                      ', "jsonStr":' +
                                      t.jsonStr +
                                      ', "callback":"' +
                                      i +
                                      '"}'
                                    : 'fanxing2://send.message/?{"cmd":' +
                                      t.cmd +
                                      ', "callback":"' +
                                      i +
                                      '"}')
                                : t.jsonStr
                                  ? 'fanxing2://send.message/?{"cmd":' +
                                    t.cmd +
                                    ', "jsonStr":' +
                                    t.jsonStr +
                                    "}"
                                  : 'fanxing2://send.message/?{"cmd":' +
                                    t.cmd +
                                    "}"),
                              o.isIframePage
                                ? o.mobileCallInIframe(t.cmd, t.jsonStr, i)
                                : navigator.userAgent.match(
                                      /(Android);?[\s\/]+([\d.]+)?/,
                                    )
                                  ? external && external.callFanxing
                                    ? ((e = {
                                        cmd: t.cmd,
                                        jsonStr: t.jsonStr || "",
                                        callback: i,
                                      }),
                                      external.callFanxing(JSON.stringify(e)))
                                    : window.prompt(r)
                                  : o.loadUrl(r))
                            : ((r = e = ""),
                              t.callback &&
                                (o.cbNum++,
                                (r =
                                  "kgmobilecall_" +
                                  (t.cmd || 0) +
                                  "_" +
                                  o.cbNum +
                                  Math.random().toString().substr(2, 9)),
                                (window[r] = function (e) {
                                  void 0 !== e &&
                                    t.callback &&
                                    ("[object String]" ===
                                    Object.prototype.toString.call(e)
                                      ? t.callback(o.str2Json(e))
                                      : t.callback(e));
                                })),
                              r &&
                                "" != r &&
                                t.jsonStr &&
                                (e =
                                  'kugouurl://start.music/?{"cmd":' +
                                  t.cmd +
                                  ', "jsonStr":' +
                                  t.jsonStr +
                                  ', "callback":"' +
                                  r +
                                  '"}'),
                              r &&
                                "" != r &&
                                !t.jsonStr &&
                                (e =
                                  'kugouurl://start.music/?{"cmd":' +
                                  t.cmd +
                                  ', "callback":"' +
                                  r +
                                  '"}'),
                              "" == r &&
                                t.jsonStr &&
                                (e =
                                  'kugouurl://start.music/?{"cmd":' +
                                  t.cmd +
                                  ', "jsonStr":' +
                                  t.jsonStr +
                                  "}"),
                              "" != r ||
                                t.jsonStr ||
                                (e =
                                  'kugouurl://start.music/?{"cmd":' +
                                  t.cmd +
                                  "}"),
                              o.isIframePage
                                ? o.mobileCallInIframe(t.cmd, t.jsonStr, r)
                                : o.loadUrl(e));
                      },
                      sendCommandOrder: function (t) {
                        var e = window.location.origin,
                          r =
                            ~e.indexOf("voo.kugou.com") ||
                            ~e.indexOf("http://10.16.4.19:8099") ||
                            ~e.indexOf("http://test.kugou.com:8099"),
                          o = window._VO_ACT_ID_;
                        r &&
                          o &&
                          t &&
                          ((t = { actId: o, cmd: t }),
                          (t = n.json2Str({
                            url: "".concat(e, "/public/addCommandOrder"),
                            method: "post",
                            param: n.json2Str(t),
                            header: { "Content-Type": "application/json" },
                            AndroidCallback: !0,
                          })),
                          n.callCmd({
                            cmd: 186,
                            jsonStr: t,
                            callback: function (t) {
                              ~window.location.href.indexOf("debugCmd") &&
                                console.log(t);
                            },
                          }));
                      },
                      formatUAMethod: function () {
                        var t = n,
                          e = { os: "", app: "" };
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
                                    : navigator.userAgent.match(/openharmony/gi)
                                      ? (e.os = "harmony")
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
                    };
              return "undefined" == typeof window
                ? {}
                : {
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
                    mobileCall: function (t, r, o, i) {
                      var a = "";
                      if ((r && (a = n.json2Str(r)), !t))
                        return (
                          console.error(
                            "\u8bf7\u8f93\u5165\u547d\u4ee4\u53f7\uff01",
                          ),
                          !1
                        );
                      if (
                        ((r = {}),
                        t && (r.cmd = t),
                        "" != a && (r.jsonStr = a),
                        o && (r.callback = o),
                        (r = e(e({}, r), i)),
                        !t ||
                          (186 != t && 225 != t) ||
                          (o && (r.AndroidCallback = !0)),
                        r.AndroidCallback && !r.jsonStr && (r.jsonStr = {}),
                        n.isInClient())
                      ) {
                        n.callCmd(r);
                        try {
                          n.sendCommandOrder(t);
                        } catch (t) {}
                      } else
                        o &&
                          o({
                            status: 0,
                            error: "\u4e0d\u5728\u5ba2\u6237\u7aef\u5185",
                          });
                    },
                    KgWebMobileCall: function (t, e) {
                      if (t)
                        try {
                          n.isIframePage &&
                            window.parent.postMessage(
                              { type: "KgWebMobileCall", funcName: t },
                              "*",
                            );
                          var r = t.split(".");
                          r.reduce(function (n, o) {
                            if (n[o]) {
                              if (o !== r[r.length - 1]) return n[o];
                              var i = n[o];
                              return "function" == typeof i
                                ? ((n[o] = function () {
                                    (i && i.apply(void 0, arguments),
                                      e && e.apply(void 0, arguments));
                                  }),
                                  n[o])
                                : (console.error(
                                    "\u8bf7\u68c0\u67e5\uff0c\u5f53\u524d\u73af\u5883\u53d8\u91cf\u5df2\u6ce8\u518c\u4e86\u5bf9\u8c61\uff1a" +
                                      t +
                                      "\uff0c\u4e14\u8be5\u5bf9\u8c61\u4e0d\u662f\u65b9\u6cd5",
                                  ),
                                  null);
                            }
                            return (
                              o === r[r.length - 1]
                                ? (n[o] = function () {
                                    e && e.apply(void 0, arguments);
                                  })
                                : (n[o] = new Object()),
                              n[o]
                            );
                          }, window);
                        } catch (t) {}
                    },
                  };
            })();
          },
          function (t, e, n) {
            var r = n(20);
            (r.keys().forEach(function (t) {
              r(t);
            }),
              (t.exports = n(36)));
          },
          function (t, e) {
            function n(t) {
              var e = new Error("Cannot find module '" + t + "'");
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            }
            ((n.keys = function () {
              return [];
            }),
              (n.resolve = n),
              (t.exports = n),
              (n.id = 20));
          },
          function (t, e, n) {
            var r = n(3).default;
            ((t.exports = function (t, e) {
              if ("object" != r(t) || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(t, e || "default");
                if ("object" != r(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e) {
            ((t.exports = function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e) {
            function n(e, r) {
              return (
                (t.exports = n =
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (t, e) {
                        return ((t.__proto__ = e), t);
                      }),
                (t.exports.__esModule = !0),
                (t.exports.default = t.exports),
                n(e, r)
              );
            }
            ((t.exports = n),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e, n) {
            "use strict";
            var r = n(25),
              o = "function" == typeof Symbol && Symbol.for,
              i = o ? Symbol.for("react.element") : 60103,
              a = o ? Symbol.for("react.portal") : 60106,
              c = o ? Symbol.for("react.fragment") : 60107,
              u = o ? Symbol.for("react.strict_mode") : 60108,
              l = o ? Symbol.for("react.profiler") : 60114,
              s = o ? Symbol.for("react.provider") : 60109,
              f = o ? Symbol.for("react.context") : 60110,
              d = o ? Symbol.for("react.forward_ref") : 60112,
              p = o ? Symbol.for("react.suspense") : 60113,
              g = o ? Symbol.for("react.memo") : 60115,
              m = o ? Symbol.for("react.lazy") : 60116,
              h = "function" == typeof Symbol && Symbol.iterator;
            function v(t) {
              for (
                var e =
                    "https://reactjs.org/docs/error-decoder.html?invariant=" +
                    t,
                  n = 1;
                n < arguments.length;
                n++
              )
                e += "&args[]=" + encodeURIComponent(arguments[n]);
              return (
                "Minified React error #" +
                t +
                "; visit " +
                e +
                " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
              );
            }
            var b = {
                isMounted: function () {
                  return !1;
                },
                enqueueForceUpdate: function () {},
                enqueueReplaceState: function () {},
                enqueueSetState: function () {},
              },
              y = {};
            function w(t, e, n) {
              ((this.props = t),
                (this.context = e),
                (this.refs = y),
                (this.updater = n || b));
            }
            function x() {}
            function S(t, e, n) {
              ((this.props = t),
                (this.context = e),
                (this.refs = y),
                (this.updater = n || b));
            }
            ((w.prototype.isReactComponent = {}),
              (w.prototype.setState = function (t, e) {
                if ("object" != typeof t && "function" != typeof t && null != t)
                  throw Error(v(85));
                this.updater.enqueueSetState(this, t, e, "setState");
              }),
              (w.prototype.forceUpdate = function (t) {
                this.updater.enqueueForceUpdate(this, t, "forceUpdate");
              }),
              (x.prototype = w.prototype));
            var j = (S.prototype = new x());
            ((j.constructor = S),
              r(j, w.prototype),
              (j.isPureReactComponent = !0));
            var O = { current: null },
              k = Object.prototype.hasOwnProperty,
              C = { key: !0, ref: !0, __self: !0, __source: !0 };
            function P(t, e, n) {
              var r,
                o = {},
                a = null,
                c = null;
              if (null != e)
                for (r in (void 0 !== e.ref && (c = e.ref),
                void 0 !== e.key && (a = "" + e.key),
                e))
                  k.call(e, r) && !C.hasOwnProperty(r) && (o[r] = e[r]);
              var u = arguments.length - 2;
              if (1 === u) o.children = n;
              else if (1 < u) {
                for (var l = Array(u), s = 0; s < u; s++)
                  l[s] = arguments[s + 2];
                o.children = l;
              }
              if (t && t.defaultProps)
                for (r in (u = t.defaultProps))
                  void 0 === o[r] && (o[r] = u[r]);
              return {
                $$typeof: i,
                type: t,
                key: a,
                ref: c,
                props: o,
                _owner: O.current,
              };
            }
            function A(t) {
              return "object" == typeof t && null !== t && t.$$typeof === i;
            }
            var _ = /\/+/g,
              I = [];
            function N(t, e, n, r) {
              if (I.length) {
                var o = I.pop();
                return (
                  (o.result = t),
                  (o.keyPrefix = e),
                  (o.func = n),
                  (o.context = r),
                  (o.count = 0),
                  o
                );
              }
              return { result: t, keyPrefix: e, func: n, context: r, count: 0 };
            }
            function E(t) {
              ((t.result = null),
                (t.keyPrefix = null),
                (t.func = null),
                (t.context = null),
                (t.count = 0),
                10 > I.length && I.push(t));
            }
            function M(t, e, n) {
              return null == t
                ? 0
                : (function t(e, n, r, o) {
                    var c = typeof e;
                    ("undefined" !== c && "boolean" !== c) || (e = null);
                    var u = !1;
                    if (null === e) u = !0;
                    else
                      switch (c) {
                        case "string":
                        case "number":
                          u = !0;
                          break;
                        case "object":
                          switch (e.$$typeof) {
                            case i:
                            case a:
                              u = !0;
                          }
                      }
                    if (u) return (r(o, e, "" === n ? "." + R(e, 0) : n), 1);
                    if (
                      ((u = 0),
                      (n = "" === n ? "." : n + ":"),
                      Array.isArray(e))
                    )
                      for (var l = 0; l < e.length; l++) {
                        var s = n + R((c = e[l]), l);
                        u += t(c, s, r, o);
                      }
                    else if (
                      "function" ==
                      typeof (s =
                        null === e || "object" != typeof e
                          ? null
                          : "function" ==
                              typeof (s = (h && e[h]) || e["@@iterator"])
                            ? s
                            : null)
                    )
                      for (e = s.call(e), l = 0; !(c = e.next()).done;)
                        u += t((c = c.value), (s = n + R(c, l++)), r, o);
                    else if ("object" === c)
                      throw (
                        (r = "" + e),
                        Error(
                          v(
                            31,
                            "[object Object]" === r
                              ? "object with keys {" +
                                  Object.keys(e).join(", ") +
                                  "}"
                              : r,
                            "",
                          ),
                        )
                      );
                    return u;
                  })(t, "", e, n);
            }
            function R(t, e) {
              return "object" == typeof t && null !== t && null != t.key
                ? (function (t) {
                    var e = { "=": "=0", ":": "=2" };
                    return (
                      "$" +
                      ("" + t).replace(/[=:]/g, function (t) {
                        return e[t];
                      })
                    );
                  })(t.key)
                : e.toString(36);
            }
            function U(t, e) {
              t.func.call(t.context, e, t.count++);
            }
            function D(t, e, n) {
              var r = t.result,
                o = t.keyPrefix;
              ((t = t.func.call(t.context, e, t.count++)),
                Array.isArray(t)
                  ? K(t, r, n, function (t) {
                      return t;
                    })
                  : null != t &&
                    (A(t) &&
                      (t = (function (t, e) {
                        return {
                          $$typeof: i,
                          type: t.type,
                          key: e,
                          ref: t.ref,
                          props: t.props,
                          _owner: t._owner,
                        };
                      })(
                        t,
                        o +
                          (!t.key || (e && e.key === t.key)
                            ? ""
                            : ("" + t.key).replace(_, "$&/") + "/") +
                          n,
                      )),
                    r.push(t)));
            }
            function K(t, e, n, r, o) {
              var i = "";
              (null != n && (i = ("" + n).replace(_, "$&/") + "/"),
                M(t, D, (e = N(e, i, r, o))),
                E(e));
            }
            var T = { current: null };
            function F() {
              var t = T.current;
              if (null === t) throw Error(v(321));
              return t;
            }
            var G = {
              ReactCurrentDispatcher: T,
              ReactCurrentBatchConfig: { suspense: null },
              ReactCurrentOwner: O,
              IsSomeRendererActing: { current: !1 },
              assign: r,
            };
            ((e.Children = {
              map: function (t, e, n) {
                if (null == t) return t;
                var r = [];
                return (K(t, r, null, e, n), r);
              },
              forEach: function (t, e, n) {
                if (null == t) return t;
                (M(t, U, (e = N(null, null, e, n))), E(e));
              },
              count: function (t) {
                return M(
                  t,
                  function () {
                    return null;
                  },
                  null,
                );
              },
              toArray: function (t) {
                var e = [];
                return (
                  K(t, e, null, function (t) {
                    return t;
                  }),
                  e
                );
              },
              only: function (t) {
                if (!A(t)) throw Error(v(143));
                return t;
              },
            }),
              (e.Component = w),
              (e.Fragment = c),
              (e.Profiler = l),
              (e.PureComponent = S),
              (e.StrictMode = u),
              (e.Suspense = p),
              (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G),
              (e.cloneElement = function (t, e, n) {
                if (null == t) throw Error(v(267, t));
                var o = r({}, t.props),
                  a = t.key,
                  c = t.ref,
                  u = t._owner;
                if (null != e) {
                  if (
                    (void 0 !== e.ref && ((c = e.ref), (u = O.current)),
                    void 0 !== e.key && (a = "" + e.key),
                    t.type && t.type.defaultProps)
                  )
                    var l = t.type.defaultProps;
                  for (s in e)
                    k.call(e, s) &&
                      !C.hasOwnProperty(s) &&
                      (o[s] = void 0 === e[s] && void 0 !== l ? l[s] : e[s]);
                }
                var s = arguments.length - 2;
                if (1 === s) o.children = n;
                else if (1 < s) {
                  l = Array(s);
                  for (var f = 0; f < s; f++) l[f] = arguments[f + 2];
                  o.children = l;
                }
                return {
                  $$typeof: i,
                  type: t.type,
                  key: a,
                  ref: c,
                  props: o,
                  _owner: u,
                };
              }),
              (e.createContext = function (t, e) {
                return (
                  void 0 === e && (e = null),
                  ((t = {
                    $$typeof: f,
                    _calculateChangedBits: e,
                    _currentValue: t,
                    _currentValue2: t,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                  }).Provider = { $$typeof: s, _context: t }),
                  (t.Consumer = t)
                );
              }),
              (e.createElement = P),
              (e.createFactory = function (t) {
                var e = P.bind(null, t);
                return ((e.type = t), e);
              }),
              (e.createRef = function () {
                return { current: null };
              }),
              (e.forwardRef = function (t) {
                return { $$typeof: d, render: t };
              }),
              (e.isValidElement = A),
              (e.lazy = function (t) {
                return { $$typeof: m, _ctor: t, _status: -1, _result: null };
              }),
              (e.memo = function (t, e) {
                return {
                  $$typeof: g,
                  type: t,
                  compare: void 0 === e ? null : e,
                };
              }),
              (e.useCallback = function (t, e) {
                return F().useCallback(t, e);
              }),
              (e.useContext = function (t, e) {
                return F().useContext(t, e);
              }),
              (e.useDebugValue = function () {}),
              (e.useEffect = function (t, e) {
                return F().useEffect(t, e);
              }),
              (e.useImperativeHandle = function (t, e, n) {
                return F().useImperativeHandle(t, e, n);
              }),
              (e.useLayoutEffect = function (t, e) {
                return F().useLayoutEffect(t, e);
              }),
              (e.useMemo = function (t, e) {
                return F().useMemo(t, e);
              }),
              (e.useReducer = function (t, e, n) {
                return F().useReducer(t, e, n);
              }),
              (e.useRef = function (t) {
                return F().useRef(t);
              }),
              (e.useState = function (t) {
                return F().useState(t);
              }),
              (e.version = "16.14.0"));
          },
          function (t, e, n) {
            "use strict";
            var r = Object.getOwnPropertySymbols,
              o = Object.prototype.hasOwnProperty,
              i = Object.prototype.propertyIsEnumerable;
            t.exports = (function () {
              try {
                if (!Object.assign) return !1;
                var t = new String("abc");
                if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
                  return !1;
                for (var e = {}, n = 0; n < 10; n++)
                  e["_" + String.fromCharCode(n)] = n;
                if (
                  "0123456789" !==
                  Object.getOwnPropertyNames(e)
                    .map(function (t) {
                      return e[t];
                    })
                    .join("")
                )
                  return !1;
                var r = {};
                return (
                  "abcdefghijklmnopqrst".split("").forEach(function (t) {
                    r[t] = t;
                  }),
                  "abcdefghijklmnopqrst" ===
                    Object.keys(Object.assign({}, r)).join("")
                );
              } catch (t) {
                return !1;
              }
            })()
              ? Object.assign
              : function (t, e) {
                  for (
                    var n,
                      a,
                      c = (function (t) {
                        if (null == t)
                          throw new TypeError(
                            "Object.assign cannot be called with null or undefined",
                          );
                        return Object(t);
                      })(t),
                      u = 1;
                    u < arguments.length;
                    u++
                  ) {
                    for (var l in (n = Object(arguments[u])))
                      o.call(n, l) && (c[l] = n[l]);
                    if (r) {
                      a = r(n);
                      for (var s = 0; s < a.length; s++)
                        i.call(n, a[s]) && (c[a[s]] = n[a[s]]);
                    }
                  }
                  return c;
                };
          },
          function (t, e, n) {
            var r = n(12),
              o = n(13),
              i = n(27),
              a = n(15),
              c = n(16),
              u = n(28),
              l = n(29);
            function s() {
              "use strict";
              var e = o(),
                n = e.m(s),
                f = (
                  Object.getPrototypeOf ? Object.getPrototypeOf(n) : n.__proto__
                ).constructor;
              function d(t) {
                var e = "function" == typeof t && t.constructor;
                return (
                  !!e &&
                  (e === f || "GeneratorFunction" === (e.displayName || e.name))
                );
              }
              var p = { throw: 1, return: 2, break: 3, continue: 3 };
              function g(t) {
                var e, n;
                return function (r) {
                  (e ||
                    ((e = {
                      stop: function () {
                        return n(r.a, 2);
                      },
                      catch: function () {
                        return r.v;
                      },
                      abrupt: function (t, e) {
                        return n(r.a, p[t], e);
                      },
                      delegateYield: function (t, o, i) {
                        return ((e.resultName = o), n(r.d, l(t), i));
                      },
                      finish: function (t) {
                        return n(r.f, t);
                      },
                    }),
                    (n = function (t, n, o) {
                      ((r.p = e.prev), (r.n = e.next));
                      try {
                        return t(n, o);
                      } finally {
                        e.next = r.n;
                      }
                    })),
                    e.resultName &&
                      ((e[e.resultName] = r.v), (e.resultName = void 0)),
                    (e.sent = r.v),
                    (e.next = r.n));
                  try {
                    return t.call(this, e);
                  } finally {
                    ((r.p = e.prev), (r.n = e.next));
                  }
                };
              }
              return ((t.exports = s =
                function () {
                  return {
                    wrap: function (t, n, r, o) {
                      return e.w(g(t), n, r, o && o.reverse());
                    },
                    isGeneratorFunction: d,
                    mark: e.m,
                    awrap: function (t, e) {
                      return new r(t, e);
                    },
                    AsyncIterator: c,
                    async: function (t, e, n, r, o) {
                      return (d(e) ? a : i)(g(t), e, n, r, o);
                    },
                    keys: u,
                    values: l,
                  };
                }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports))();
            }
            ((t.exports = s),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e, n) {
            var r = n(15);
            ((t.exports = function (t, e, n, o, i) {
              var a = r(t, e, n, o, i);
              return a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
            }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e) {
            ((t.exports = function (t) {
              var e = Object(t),
                n = [];
              for (var r in e) n.unshift(r);
              return function t() {
                for (; n.length;)
                  if ((r = n.pop()) in e)
                    return ((t.value = r), (t.done = !1), t);
                return ((t.done = !0), t);
              };
            }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e, n) {
            var r = n(3).default;
            ((t.exports = function (t) {
              if (null != t) {
                var e =
                    t[
                      ("function" == typeof Symbol && Symbol.iterator) ||
                        "@@iterator"
                    ],
                  n = 0;
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length))
                  return {
                    next: function () {
                      return (
                        t && n >= t.length && (t = void 0),
                        { value: t && t[n++], done: !t }
                      );
                    },
                  };
              }
              throw new TypeError(r(t) + " is not iterable");
            }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports));
          },
          function (t, e, n) {
            var r = n(31);
            ("string" == typeof r && (r = [[t.i, r, ""]]),
              n(33)(r, { hmr: !0, transform: void 0, insertInto: void 0 }),
              r.locals && (t.exports = r.locals));
          },
          function (t, e, n) {
            ((e = n(32)(!1)).push([
              t.i,
              '.cola-react-error-boundary-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n}\n\n.cola-react-error-boundary-load-style-no-result {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.cola-react-error-boundary-img {\n  width: 4.666667rem;\n  height: 4.666667rem;\n}\n\n.cola-react-error-boundary-img[src=""],\n.cola-react-error-boundary-img:not([src]) {\n  opacity: 0;\n}\n\n.cola-react-error-boundary-load-text {\n  margin-top: 0.533333rem;\n  color: #000;\n  font-size: 0.373333rem;\n  font-weight: 400;\n}',
              "",
            ]),
              (t.exports = e));
          },
          function (t, e, n) {
            "use strict";
            t.exports = function (t) {
              var e = [];
              return (
                (e.toString = function () {
                  return this.map(function (e) {
                    var n = (function (t, e) {
                      var n,
                        r,
                        o,
                        i = t[1] || "",
                        a = t[3];
                      if (!a) return i;
                      if (e && "function" == typeof btoa) {
                        var c =
                            ((n = a),
                            (r = btoa(
                              unescape(encodeURIComponent(JSON.stringify(n))),
                            )),
                            (o =
                              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                                r,
                              )),
                            "/*# ".concat(o, " */")),
                          u = a.sources.map(function (t) {
                            return "/*# sourceURL="
                              .concat(a.sourceRoot || "")
                              .concat(t, " */");
                          });
                        return [i].concat(u).concat([c]).join("\n");
                      }
                      return [i].join("\n");
                    })(e, t);
                    return e[2]
                      ? "@media ".concat(e[2], " {").concat(n, "}")
                      : n;
                  }).join("");
                }),
                (e.i = function (t, n, r) {
                  "string" == typeof t && (t = [[null, t, ""]]);
                  var o = {};
                  if (r)
                    for (var i = 0; i < this.length; i++) {
                      var a = this[i][0];
                      null != a && (o[a] = !0);
                    }
                  for (var c = 0; c < t.length; c++) {
                    var u = [].concat(t[c]);
                    (r && o[u[0]]) ||
                      (n &&
                        (u[2]
                          ? (u[2] = "".concat(n, " and ").concat(u[2]))
                          : (u[2] = n)),
                      e.push(u));
                  }
                }),
                e
              );
            };
          },
          function (t, e, n) {
            var r,
              o,
              i = {},
              a =
                ((r = function () {
                  return window && document && document.all && !window.atob;
                }),
                function () {
                  return (void 0 === o && (o = r.apply(this, arguments)), o);
                }),
              c = (function (t) {
                var e = {};
                return function (t, n) {
                  if ("function" == typeof t) return t();
                  if (void 0 === e[t]) {
                    var r = function (t, e) {
                      return e ? e.querySelector(t) : document.querySelector(t);
                    }.call(this, t, n);
                    if (
                      window.HTMLIFrameElement &&
                      r instanceof window.HTMLIFrameElement
                    )
                      try {
                        r = r.contentDocument.head;
                      } catch (t) {
                        r = null;
                      }
                    e[t] = r;
                  }
                  return e[t];
                };
              })(),
              u = null,
              l = 0,
              s = [],
              f = n(34);
            function d(t, e) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n],
                  o = i[r.id];
                if (o) {
                  o.refs++;
                  for (var a = 0; a < o.parts.length; a++)
                    o.parts[a](r.parts[a]);
                  for (; a < r.parts.length; a++)
                    o.parts.push(b(r.parts[a], e));
                } else {
                  var c = [];
                  for (a = 0; a < r.parts.length; a++) c.push(b(r.parts[a], e));
                  i[r.id] = { id: r.id, refs: 1, parts: c };
                }
              }
            }
            function p(t, e) {
              for (var n = [], r = {}, o = 0; o < t.length; o++) {
                var i = t[o],
                  a = e.base ? i[0] + e.base : i[0],
                  c = { css: i[1], media: i[2], sourceMap: i[3] };
                r[a]
                  ? r[a].parts.push(c)
                  : n.push((r[a] = { id: a, parts: [c] }));
              }
              return n;
            }
            function g(t, e) {
              var n = c(t.insertInto);
              if (!n)
                throw new Error(
                  "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.",
                );
              var r = s[s.length - 1];
              if ("top" === t.insertAt)
                (r
                  ? r.nextSibling
                    ? n.insertBefore(e, r.nextSibling)
                    : n.appendChild(e)
                  : n.insertBefore(e, n.firstChild),
                  s.push(e));
              else if ("bottom" === t.insertAt) n.appendChild(e);
              else {
                if ("object" != typeof t.insertAt || !t.insertAt.before)
                  throw new Error(
                    "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n",
                  );
                var o = c(t.insertAt.before, n);
                n.insertBefore(e, o);
              }
            }
            function m(t) {
              if (null === t.parentNode) return !1;
              t.parentNode.removeChild(t);
              var e = s.indexOf(t);
              e >= 0 && s.splice(e, 1);
            }
            function h(t) {
              var e = document.createElement("style");
              if (
                (void 0 === t.attrs.type && (t.attrs.type = "text/css"),
                void 0 === t.attrs.nonce)
              ) {
                var r = n.nc;
                r && (t.attrs.nonce = r);
              }
              return (v(e, t.attrs), g(t, e), e);
            }
            function v(t, e) {
              Object.keys(e).forEach(function (n) {
                t.setAttribute(n, e[n]);
              });
            }
            function b(t, e) {
              var n, r, o, i;
              if (e.transform && t.css) {
                if (
                  !(i =
                    "function" == typeof e.transform
                      ? e.transform(t.css)
                      : e.transform.default(t.css))
                )
                  return function () {};
                t.css = i;
              }
              if (e.singleton) {
                var a = l++;
                ((n = u || (u = h(e))),
                  (r = x.bind(null, n, a, !1)),
                  (o = x.bind(null, n, a, !0)));
              } else
                t.sourceMap &&
                "function" == typeof URL &&
                "function" == typeof URL.createObjectURL &&
                "function" == typeof URL.revokeObjectURL &&
                "function" == typeof Blob &&
                "function" == typeof btoa
                  ? ((n = (function (t) {
                      var e = document.createElement("link");
                      return (
                        void 0 === t.attrs.type && (t.attrs.type = "text/css"),
                        (t.attrs.rel = "stylesheet"),
                        v(e, t.attrs),
                        g(t, e),
                        e
                      );
                    })(e)),
                    (r = function (t, e, n) {
                      var r = n.css,
                        o = n.sourceMap,
                        i = void 0 === e.convertToAbsoluteUrls && o;
                      ((e.convertToAbsoluteUrls || i) && (r = f(r)),
                        o &&
                          (r +=
                            "\n/*# sourceMappingURL=data:application/json;base64," +
                            btoa(
                              unescape(encodeURIComponent(JSON.stringify(o))),
                            ) +
                            " */"));
                      var a = new Blob([r], { type: "text/css" }),
                        c = t.href;
                      ((t.href = URL.createObjectURL(a)),
                        c && URL.revokeObjectURL(c));
                    }.bind(null, n, e)),
                    (o = function () {
                      (m(n), n.href && URL.revokeObjectURL(n.href));
                    }))
                  : ((n = h(e)),
                    (r = function (t, e) {
                      var n = e.css,
                        r = e.media;
                      if ((r && t.setAttribute("media", r), t.styleSheet))
                        t.styleSheet.cssText = n;
                      else {
                        for (; t.firstChild;) t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(n));
                      }
                    }.bind(null, n)),
                    (o = function () {
                      m(n);
                    }));
              return (
                r(t),
                function (e) {
                  if (e) {
                    if (
                      e.css === t.css &&
                      e.media === t.media &&
                      e.sourceMap === t.sourceMap
                    )
                      return;
                    r((t = e));
                  } else o();
                }
              );
            }
            t.exports = function (t, e) {
              if (
                "undefined" != typeof DEBUG &&
                DEBUG &&
                "object" != typeof document
              )
                throw new Error(
                  "The style-loader cannot be used in a non-browser environment",
                );
              (((e = e || {}).attrs =
                "object" == typeof e.attrs ? e.attrs : {}),
                e.singleton ||
                  "boolean" == typeof e.singleton ||
                  (e.singleton = a()),
                e.insertInto || (e.insertInto = "head"),
                e.insertAt || (e.insertAt = "bottom"));
              var n = p(t, e);
              return (
                d(n, e),
                function (t) {
                  for (var r = [], o = 0; o < n.length; o++) {
                    var a = n[o];
                    ((c = i[a.id]).refs--, r.push(c));
                  }
                  for (t && d(p(t, e), e), o = 0; o < r.length; o++) {
                    var c;
                    if (0 === (c = r[o]).refs) {
                      for (var u = 0; u < c.parts.length; u++) c.parts[u]();
                      delete i[c.id];
                    }
                  }
                }
              );
            };
            var y,
              w =
                ((y = []),
                function (t, e) {
                  return ((y[t] = e), y.filter(Boolean).join("\n"));
                });
            function x(t, e, n, r) {
              var o = n ? "" : r.css;
              if (t.styleSheet) t.styleSheet.cssText = w(e, o);
              else {
                var i = document.createTextNode(o),
                  a = t.childNodes;
                (a[e] && t.removeChild(a[e]),
                  a.length ? t.insertBefore(i, a[e]) : t.appendChild(i));
              }
            }
          },
          function (t, e) {
            t.exports = function (t) {
              var e = "undefined" != typeof window && window.location;
              if (!e) throw new Error("fixUrls requires window.location");
              if (!t || "string" != typeof t) return t;
              var n = e.protocol + "//" + e.host,
                r = n + e.pathname.replace(/\/[^\/]*$/, "/");
              return t.replace(
                /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
                function (t, e) {
                  var o,
                    i = e
                      .trim()
                      .replace(/^"(.*)"$/, function (t, e) {
                        return e;
                      })
                      .replace(/^'(.*)'$/, function (t, e) {
                        return e;
                      });
                  return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(
                    i,
                  )
                    ? t
                    : ((o =
                        0 === i.indexOf("//")
                          ? i
                          : 0 === i.indexOf("/")
                            ? n + i
                            : r + i.replace(/^\.\//, "")),
                      "url(" + JSON.stringify(o) + ")");
                },
              );
            };
          },
          function (t, e) {
            var n;
            n = (function () {
              return this;
            })();
            try {
              n = n || new Function("return this")();
            } catch (t) {
              "object" == typeof window && (n = window);
            }
            t.exports = n;
          },
          function (t, e, n) {
            "use strict";
            (n.r(e),
              n.d(e, "setErrorBoundaryConfig", function () {
                return K;
              }),
              n.d(e, "withErrorBoundary", function () {
                return G;
              }));
            var r = n(4),
              o = n.n(r),
              i = n(5),
              a = n.n(i),
              c = n(6),
              u = n.n(c),
              l = n(1),
              s = n.n(l),
              f = n(7),
              d = n.n(f),
              p = n(8),
              g = n.n(p),
              m = n(0),
              h = n.n(m),
              v = n(9),
              b = n.n(v),
              y = n(2),
              w = n.n(y);
            n(30);
            var x = (function (t) {
                function e(t) {
                  var n;
                  return (
                    o()(this, e),
                    ((n = (function (t, e, n) {
                      return (
                        (e = s()(e)),
                        u()(
                          t,
                          (function () {
                            try {
                              var t = !Boolean.prototype.valueOf.call(
                                Reflect.construct(Boolean, [], function () {}),
                              );
                            } catch (t) {}
                            return !!t;
                          })()
                            ? Reflect.construct(e, n || [], s()(t).constructor)
                            : e.apply(t, n),
                        )
                      );
                    })(this, e, [t])).reload = b()(
                      w.a.mark(function t() {
                        var e;
                        return w.a.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (e = n.props.reloadFn)
                                  ? e()
                                  : window.location.reload();
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      }),
                    )),
                    (n.state = {}),
                    n
                  );
                }
                return (
                  d()(e, t),
                  a()(e, [
                    { key: "componentDidMount", value: function () {} },
                    {
                      key: "render",
                      value: function () {
                        var t = this.props.errorMsg;
                        return h.a.createElement(
                          "div",
                          {
                            className: "cola-react-error-boundary-wrapper",
                            onClick: this.reload,
                          },
                          h.a.createElement(
                            "div",
                            {
                              className:
                                "cola-react-error-boundary-load-style-no-result",
                            },
                            h.a.createElement("img", {
                              className: "cola-react-error-boundary-img",
                              src: "https://voowebpbssdl.kugou.com/b0979ada80979738f2cff75d5332c620.png",
                              alt: "",
                            }),
                            h.a.createElement(
                              "div",
                              {
                                className:
                                  "cola-react-error-boundary-load-text",
                              },
                              t ||
                                "\u52a0\u8f7d\u5931\u8d25\uff0c\u70b9\u51fb\u5c4f\u5e55\u91cd\u8bd5",
                            ),
                          ),
                        );
                      },
                    },
                  ])
                );
              })(m.Component),
              S = n(17),
              j = n.n(S).a,
              O = n(10),
              k = n.n(O),
              C = n(18),
              P = n.n(C).a;
            function A(t, e) {
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
            function _(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? A(Object(n), !0).forEach(function (e) {
                      g()(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : A(Object(n)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(n, e),
                        );
                      });
              }
              return t;
            }
            var I = null;
            function N() {
              return (N = b()(
                w.a.mark(function t(e, n, r) {
                  var o;
                  return w.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (I) {
                            t.next = 1;
                            break;
                          }
                          return (
                            (t.next = 1),
                            new Promise(function (t, e) {
                              if (I || "undefined" == typeof window) t(I);
                              else {
                                var n = window.__BI_CONFIG_APPID
                                  ? Number(window.__BI_CONFIG_APPID)
                                  : P.isInClient()
                                    ? null
                                    : 1058;
                                j(n, function (e) {
                                  console.log("getBaseInfo", e);
                                  var n = {
                                    os: e.appid || (P && P.isIOS ? 1e3 : 1005),
                                    ver: e.clientver || 1e3,
                                    userAgent: navigator.userAgent,
                                    mid: e.mid || 0,
                                    uid: e.userid || 0,
                                    uuid: e.uuid || 0,
                                    fanxid: e.userid || 0,
                                    realtime1: window.location.href || "",
                                    timestamp: Math.round(
                                      new Date().getTime() / 1e3,
                                    ),
                                  };
                                  ((I = n), t(n));
                                });
                              }
                            })
                          );
                        case 1:
                          (((o = _(_({}, I), n)).typeid = e),
                            console.log("apm\u57cb\u70b9\u91c7\u96c6data", o),
                            k.a && k.a.kgStatPush(o, 1),
                            r && r(o));
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              )).apply(this, arguments);
            }
            var E = function (t, e, n) {
              return N.apply(this, arguments);
            };
            function M(t, e) {
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
            function R(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? M(Object(n), !0).forEach(function (e) {
                      g()(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : M(Object(n)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(n, e),
                        );
                      });
              }
              return t;
            }
            var U = R({}, { typeid: 113771 }),
              D = 0;
            function K(t) {
              U = R(R({}, U), t);
            }
            var T = function (t) {
                try {
                  var e = "";
                  if (t && (t.message || t.stack))
                    e = "Msg:".concat(t.message, " Stack:").concat(t.stack);
                  else if ("string" == typeof t) e = t;
                  else
                    try {
                      e = JSON.stringify(t);
                    } catch (n) {
                      e = String(t);
                    }
                  return e;
                } catch (t) {
                  return (
                    console.error("getErrorMsg error", t),
                    "Unknown Error"
                  );
                }
              },
              F = (function (t) {
                function e(t) {
                  var n;
                  return (
                    o()(this, e),
                    ((n = (function (t, e, n) {
                      return (
                        (e = s()(e)),
                        u()(
                          t,
                          (function () {
                            try {
                              var t = !Boolean.prototype.valueOf.call(
                                Reflect.construct(Boolean, [], function () {}),
                              );
                            } catch (t) {}
                            return !!t;
                          })()
                            ? Reflect.construct(e, n || [], s()(t).constructor)
                            : e.apply(t, n),
                        )
                      );
                    })(this, e, [t])).handleGlobalError = function (t) {
                      try {
                        var e,
                          n,
                          r = T(t.error || t.message),
                          o = (null == t ? void 0 : t.filename) || "",
                          i = (null == t ? void 0 : t.lineno) || 0,
                          a = (null == t ? void 0 : t.colno) || 0,
                          c =
                            (null == t ||
                            null === (e = t.target) ||
                            void 0 === e
                              ? void 0
                              : e.src) ||
                            (null == t ||
                            null === (n = t.target) ||
                            void 0 === n
                              ? void 0
                              : n.href) ||
                            "",
                          u = Boolean(o || c || i || a);
                        if ("Script error." === r && !u) return;
                        var l = { errmsg: r };
                        (u &&
                          ((l.filename = o),
                          (l.lineno = i),
                          (l.colno = a),
                          (l.targetUrl = c)),
                          E &&
                            E(U.typeid, {
                              state: 0,
                              te: "E5",
                              position: "02",
                              fs: 0,
                              hash: JSON.stringify(l),
                            }));
                      } catch (t) {
                        console.warn(
                          "ErrorBoundary: Failed to report global error",
                          t,
                        );
                      }
                    }),
                    (n.handleGlobalRejection = function (t) {
                      try {
                        var e = { errmsg: T(t.reason) };
                        E &&
                          E(U.typeid, {
                            state: 0,
                            te: "E5",
                            position: "03",
                            fs: 0,
                            hash: JSON.stringify(e),
                          });
                      } catch (t) {
                        console.warn(
                          "ErrorBoundary: Failed to report unhandled rejection",
                          t,
                        );
                      }
                    }),
                    (n.state = { hasError: !1 }),
                    n
                  );
                }
                return (
                  d()(e, t),
                  a()(
                    e,
                    [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var t;
                          null !== (t = this.props) &&
                            void 0 !== t &&
                            t.needCatchGlobalErrors &&
                            (0 === D &&
                              ("undefined" != typeof window &&
                                window.addEventListener(
                                  "error",
                                  this.handleGlobalError,
                                ),
                              "undefined" != typeof window &&
                                window.addEventListener(
                                  "unhandledrejection",
                                  this.handleGlobalRejection,
                                )),
                            D++);
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          var t;
                          null !== (t = this.props) &&
                            void 0 !== t &&
                            t.needCatchGlobalErrors &&
                            0 === --D &&
                            ("undefined" != typeof window &&
                              window.removeEventListener(
                                "error",
                                this.handleGlobalError,
                              ),
                            "undefined" != typeof window &&
                              window.removeEventListener(
                                "unhandledrejection",
                                this.handleGlobalRejection,
                              ));
                        },
                      },
                      {
                        key: "componentDidCatch",
                        value: function (t, e) {
                          try {
                            var n = {
                              errmsg: T(t),
                              componentStack:
                                (null == e ? void 0 : e.componentStack) || T(e),
                            };
                            E &&
                              E(U.typeid, {
                                state: 0,
                                te: "E5",
                                position: "01",
                                fs: 0,
                                hash: JSON.stringify(n),
                              });
                          } catch (t) {
                            console.warn(
                              "ErrorBoundary: Failed to report error",
                              t,
                            );
                          }
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          if (this.state.hasError)
                            try {
                              return this.props.fallback
                                ? this.props.fallback
                                : this.props.needCommonErrorPage
                                  ? h.a.createElement(
                                      h.a.Fragment,
                                      null,
                                      h.a.createElement(x, {
                                        reloadFn:
                                          (null === (t = this.props) ||
                                          void 0 === t
                                            ? void 0
                                            : t.reloadFn) || void 0,
                                      }),
                                    )
                                  : null;
                              var t;
                            } catch (t) {
                              return (
                                console.error(
                                  "ErrorBoundary Fallback Render Error",
                                  t,
                                ),
                                null
                              );
                            }
                          return this.props.children;
                        },
                      },
                    ],
                    [
                      {
                        key: "getDerivedStateFromError",
                        value: function (t) {
                          return { hasError: !0 };
                        },
                      },
                    ],
                  )
                );
              })(h.a.Component),
              G = function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { fallback: null },
                  n = function (n) {
                    return h.a.createElement(F, e, h.a.createElement(t, n));
                  },
                  r = t.displayName || t.name || "Component";
                return (
                  (n.displayName = "WithErrorBoundary(".concat(r, ")")),
                  n
                );
              };
            e.default = F;
          },
        ])));
    },
    dee8d23c: function (t, e, n) {
      "use strict";
      t.exports = n("a547a80a");
    },
  },
]);
