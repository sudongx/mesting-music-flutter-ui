(window.webpackJsonp = window.webpackJsonp || []).push([
  ["chunk-fe54"],
  {
    "0861e811": function (a, e, r) {
      var i = r("93114174");
      ((e = a.exports = r("159f9ff0")(!1)).i(r("c2614245"), ""),
        e.push([
          a.i,
          "body,\nhtml {\n  height: 100vh;\n  font-family: \"\\5FAE\\8F6F\\96C5\\9ED1\",\"\\534E\\6587\\7EC6\\9ED1\",Arial, Helvetica, sans-serif;\n  -webkit-tap-highlight-color: transparent;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  /* font: inherit; */\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.wrap {\n  /* margin: 0.5rem 0 0 0.3rem; */\n}\n\n.button {\n  display: inline-block;\n  width: 1.8rem;\n  height: 0.6rem;\n  line-height: 0.6rem;\n  border: 0.013889rem solid #0090ff;\n  border-radius: 0.5rem;\n  color: #0090ff;\n  font-size: 0.35rem;\n  font-weight: 100;\n  text-decoration: none;\n  text-align: center;\n  vertical-align: text-top;\n}\n\n.line {\n  height: 0.013889rem;\n  background-color: #f0f0f0;\n}\n\n#root,\n#body {\n  height: 100vh;\n}\n\n* {\n  -webkit-user-select: none;\n  user-select: none;\n}\n\ninput {\n  -webkit-user-select: auto;\n  user-select: auto;\n}\n\n#root {\n  display: block!important;\n}\n\n@font-face {\n  font-family: 'Manrope';\n  src: url(" +
            i(r("1da606af")) +
            ") format('truetype');\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Manrope-medium';\n  src: url(" +
            i(r("7bce9d16")) +
            ") format('truetype');\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'alibaba-PuHuiTi-Heavy';\n  src: url(" +
            i(r("c116d5b6")) +
            ") format('truetype');\n  font-display: swap;\n}",
          "",
        ]));
    },
    "0a1be08c": function (a, e, r) {
      "use strict";
      var i = r("1a22b7af"),
        u = r.n(i);
      e.a = u.a.createContext("data");
    },
    1: function (a, e) {},
    10: function (a, e) {},
    "1093ea62": function (a, e, r) {
      "use strict";
      r.d(e, "b", function () {
        return E;
      });
      var i,
        u = r("e7ea4b7d"),
        t = r("b5a01023"),
        s = r("98c41dff"),
        d = r("ff295d01"),
        n = r.n(d),
        b = r("a005797a"),
        m = r("c2427b21"),
        A = r("ffb3b631"),
        N = r.n(A),
        o = r("240ee9b2"),
        c = r.n(o),
        l = r("3afe59cc"),
        f = r.n(l);
      function p() {
        p = function () {
          return e;
        };
        var a,
          e = {},
          r = Object.prototype,
          i = r.hasOwnProperty,
          u =
            Object.defineProperty ||
            function (a, e, r) {
              a[e] = r.value;
            },
          t = "function" == typeof Symbol ? Symbol : {},
          s = t.iterator || "@@iterator",
          d = t.asyncIterator || "@@asyncIterator",
          n = t.toStringTag || "@@toStringTag";
        function b(a, e, r) {
          return (
            Object.defineProperty(a, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            a[e]
          );
        }
        try {
          b({}, "");
        } catch (a) {
          b = function (a, e, r) {
            return (a[e] = r);
          };
        }
        function m(a, e, r, i) {
          var t = e && e.prototype instanceof h ? e : h,
            s = Object.create(t.prototype),
            d = new I(i || []);
          return (u(s, "_invoke", { value: C(a, r, d) }), s);
        }
        function A(a, e, r) {
          try {
            return { type: "normal", arg: a.call(e, r) };
          } catch (a) {
            return { type: "throw", arg: a };
          }
        }
        e.wrap = m;
        var N = "suspendedStart",
          o = "suspendedYield",
          c = "executing",
          l = "completed",
          f = {};
        function h() {}
        function g() {}
        function v() {}
        var w = {};
        b(w, s, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          O = y && y(y(S([])));
        O && O !== r && i.call(O, s) && (w = O);
        var k = (v.prototype = h.prototype = Object.create(w));
        function j(a) {
          ["next", "throw", "return"].forEach(function (e) {
            b(a, e, function (a) {
              return this._invoke(e, a);
            });
          });
        }
        function x(a, e) {
          function r(u, t, s, d) {
            var n = A(a[u], a, t);
            if ("throw" !== n.type) {
              var b = n.arg,
                m = b.value;
              return m && "object" == typeof m && i.call(m, "__await")
                ? e.resolve(m.__await).then(
                    function (a) {
                      r("next", a, s, d);
                    },
                    function (a) {
                      r("throw", a, s, d);
                    },
                  )
                : e.resolve(m).then(
                    function (a) {
                      ((b.value = a), s(b));
                    },
                    function (a) {
                      return r("throw", a, s, d);
                    },
                  );
            }
            d(n.arg);
          }
          var t;
          u(this, "_invoke", {
            value: function (a, i) {
              function u() {
                return new e(function (e, u) {
                  r(a, i, e, u);
                });
              }
              return (t = t ? t.then(u, u) : u());
            },
          });
        }
        function C(e, r, i) {
          var u = N;
          return function (t, s) {
            if (u === c) throw Error("Generator is already running");
            if (u === l) {
              if ("throw" === t) throw s;
              return { value: a, done: !0 };
            }
            for (i.method = t, i.arg = s; ;) {
              var d = i.delegate;
              if (d) {
                var n = _(d, i);
                if (n) {
                  if (n === f) continue;
                  return n;
                }
              }
              if ("next" === i.method) i.sent = i._sent = i.arg;
              else if ("throw" === i.method) {
                if (u === N) throw ((u = l), i.arg);
                i.dispatchException(i.arg);
              } else "return" === i.method && i.abrupt("return", i.arg);
              u = c;
              var b = A(e, r, i);
              if ("normal" === b.type) {
                if (((u = i.done ? l : o), b.arg === f)) continue;
                return { value: b.arg, done: i.done };
              }
              "throw" === b.type &&
                ((u = l), (i.method = "throw"), (i.arg = b.arg));
            }
          };
        }
        function _(e, r) {
          var i = r.method,
            u = e.iterator[i];
          if (u === a)
            return (
              (r.delegate = null),
              ("throw" === i &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = a),
                _(e, r),
                "throw" === r.method)) ||
                ("return" !== i &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + i + "' method",
                  )))),
              f
            );
          var t = A(u, e.iterator, r.arg);
          if ("throw" === t.type)
            return (
              (r.method = "throw"),
              (r.arg = t.arg),
              (r.delegate = null),
              f
            );
          var s = t.arg;
          return s
            ? s.done
              ? ((r[e.resultName] = s.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = a)),
                (r.delegate = null),
                f)
              : s
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              f);
        }
        function L(a) {
          var e = { tryLoc: a[0] };
          (1 in a && (e.catchLoc = a[1]),
            2 in a && ((e.finallyLoc = a[2]), (e.afterLoc = a[3])),
            this.tryEntries.push(e));
        }
        function E(a) {
          var e = a.completion || {};
          ((e.type = "normal"), delete e.arg, (a.completion = e));
        }
        function I(a) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            a.forEach(L, this),
            this.reset(!0));
        }
        function S(e) {
          if (e || "" === e) {
            var r = e[s];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var u = -1,
                t = function r() {
                  for (; ++u < e.length;)
                    if (i.call(e, u))
                      return ((r.value = e[u]), (r.done = !1), r);
                  return ((r.value = a), (r.done = !0), r);
                };
              return (t.next = t);
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return (
          (g.prototype = v),
          u(k, "constructor", { value: v, configurable: !0 }),
          u(v, "constructor", { value: g, configurable: !0 }),
          (g.displayName = b(v, n, "GeneratorFunction")),
          (e.isGeneratorFunction = function (a) {
            var e = "function" == typeof a && a.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (a) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(a, v)
                : ((a.__proto__ = v), b(a, n, "GeneratorFunction")),
              (a.prototype = Object.create(k)),
              a
            );
          }),
          (e.awrap = function (a) {
            return { __await: a };
          }),
          j(x.prototype),
          b(x.prototype, d, function () {
            return this;
          }),
          (e.AsyncIterator = x),
          (e.async = function (a, r, i, u, t) {
            void 0 === t && (t = Promise);
            var s = new x(m(a, r, i, u), t);
            return e.isGeneratorFunction(r)
              ? s
              : s.next().then(function (a) {
                  return a.done ? a.value : s.next();
                });
          }),
          j(k),
          b(k, n, "Generator"),
          b(k, s, function () {
            return this;
          }),
          b(k, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (a) {
            var e = Object(a),
              r = [];
            for (var i in e) r.push(i);
            return (
              r.reverse(),
              function a() {
                for (; r.length;) {
                  var i = r.pop();
                  if (i in e) return ((a.value = i), (a.done = !1), a);
                }
                return ((a.done = !0), a);
              }
            );
          }),
          (e.values = S),
          (I.prototype = {
            constructor: I,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = a),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = a),
                this.tryEntries.forEach(E),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    i.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = a);
            },
            stop: function () {
              this.done = !0;
              var a = this.tryEntries[0].completion;
              if ("throw" === a.type) throw a.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function u(i, u) {
                return (
                  (d.type = "throw"),
                  (d.arg = e),
                  (r.next = i),
                  u && ((r.method = "next"), (r.arg = a)),
                  !!u
                );
              }
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var s = this.tryEntries[t],
                  d = s.completion;
                if ("root" === s.tryLoc) return u("end");
                if (s.tryLoc <= this.prev) {
                  var n = i.call(s, "catchLoc"),
                    b = i.call(s, "finallyLoc");
                  if (n && b) {
                    if (this.prev < s.catchLoc) return u(s.catchLoc, !0);
                    if (this.prev < s.finallyLoc) return u(s.finallyLoc);
                  } else if (n) {
                    if (this.prev < s.catchLoc) return u(s.catchLoc, !0);
                  } else {
                    if (!b)
                      throw Error("try statement without catch or finally");
                    if (this.prev < s.finallyLoc) return u(s.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (a, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var u = this.tryEntries[r];
                if (
                  u.tryLoc <= this.prev &&
                  i.call(u, "finallyLoc") &&
                  this.prev < u.finallyLoc
                ) {
                  var t = u;
                  break;
                }
              }
              t &&
                ("break" === a || "continue" === a) &&
                t.tryLoc <= e &&
                e <= t.finallyLoc &&
                (t = null);
              var s = t ? t.completion : {};
              return (
                (s.type = a),
                (s.arg = e),
                t
                  ? ((this.method = "next"), (this.next = t.finallyLoc), f)
                  : this.complete(s)
              );
            },
            complete: function (a, e) {
              if ("throw" === a.type) throw a.arg;
              return (
                "break" === a.type || "continue" === a.type
                  ? (this.next = a.arg)
                  : "return" === a.type
                    ? ((this.rval = this.arg = a.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === a.type && e && (this.next = e),
                f
              );
            },
            finish: function (a) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === a)
                  return (this.complete(r.completion, r.afterLoc), E(r), f);
              }
            },
            catch: function (a) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === a) {
                  var i = r.completion;
                  if ("throw" === i.type) {
                    var u = i.arg;
                    E(r);
                  }
                  return u;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, r, i) {
              return (
                (this.delegate = { iterator: S(e), resultName: r, nextLoc: i }),
                "next" === this.method && (this.arg = a),
                f
              );
            },
          }),
          e
        );
      }
      var h = f.a && f.a.kgStatPush,
        g = !1;
      try {
        window.location.href.match(/https?:\/\/test\.kugou\.com/) && (g = !0);
      } catch (S) {}
      var v,
        w = { apm: 1, bi: 2 },
        y =
          ((i = {
            1131917: {
              a: 1131917,
              b: "\u66dd\u5149",
              ft: "\u4e3b\u9875\u9762",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1131918: {
              a: 1131918,
              b: "\u70b9\u51fb",
              ft: "\u4f69\u6234\u7ba1\u7406\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1131919: {
              a: 1131919,
              b: "\u70b9\u51fb",
              ft: "\u4f69\u6234\u7ba1\u7406\u9875-\u9009\u62e9\u52cb\u7ae0\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1131920: {
              a: 1131920,
              b: "\u70b9\u51fb",
              ft: "\u4f69\u6234\u7ba1\u7406\u9875-\u5b8c\u6210\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1131921: {
              a: 1131921,
              b: "\u70b9\u51fb",
              ft: "\u52cb\u7ae0\u5206\u7c7b\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1131922: {
              a: 1131922,
              b: "\u70b9\u51fb",
              ft: "\u5355\u4e2a\u52cb\u7ae0",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1131923: {
              a: 1131923,
              b: "\u66dd\u5149",
              ft: "\u52cb\u7ae0\u8be6\u60c5\u9875",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1131924: {
              a: 1131924,
              b: "\u70b9\u51fb",
              ft: "\u52cb\u7ae0\u8be6\u60c5\u9875-\u53bb\u5b8c\u6210\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1131925: {
              a: 1131925,
              b: "\u70b9\u51fb",
              ft: "\u52cb\u7ae0\u8be6\u60c5\u9875-\u53bb\u4f69\u6234\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1131926: {
              a: 1131926,
              b: "\u70b9\u51fb",
              ft: "\u52cb\u7ae0\u8be6\u60c5\u9875-\u5de6\u53f3\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1131927: {
              a: 1131927,
              b: "\u70b9\u51fb",
              ft: "\u5206\u4eab\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1131928: {
              a: 1131928,
              b: "\u70b9\u51fb",
              ft: "\u5206\u4eab\u9762\u677f-\u4fdd\u5b58\u56fe\u7247\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1131929: {
              a: 1131929,
              b: "\u70b9\u51fb",
              ft: "\u5206\u4eab\u9762\u677f-\u5206\u4eab\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1131930: {
              a: 1131930,
              b: "\u70b9\u51fb",
              ft: "\u5206\u4eab\u6e20\u9053",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1131931: {
              a: 1131931,
              b: "\u70b9\u51fb",
              ft: "\u5ba2\u6001\u9875\u9762-\u6211\u4e5f\u8981\u83b7\u5f97\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1131932: {
              a: 1131932,
              b: "\u70b9\u51fb",
              ft: "\u5ba2\u6001\u9875\u9762-\u67e5\u770b\u4ed6\u7684\u6210\u5c31\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1131933: {
              a: 1131933,
              b: "\u70b9\u51fb",
              ft: "\u5ba2\u6001\u9875\u9762-\u67e5\u770b\u4ed6\u7684\u4e2a\u4eba\u4e3b\u9875\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1131934: {
              a: 1131934,
              b: "\u70b9\u51fb",
              ft: "\u5ba2\u6001\u9875\u9762-\u67e5\u770b\u6211\u7684\u52cb\u7ae0\u9986\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1131935: {
              a: 1131935,
              b: "\u70b9\u51fb",
              ft: "\u5ba2\u6001\u9875\u9762-\u5355\u4e2a\u52cb\u7ae0\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1132226: {
              a: 1132226,
              b: "\u66dd\u5149",
              ft: "\u5f39\u7a97\u66dd\u5149",
              r: "\u52cb\u7ae0\u5f39\u7a97",
            },
            1132227: {
              a: 1132227,
              b: "\u70b9\u51fb",
              ft: "\u5f39\u7a97\u70b9\u51fb",
              r: "\u52cb\u7ae0\u5f39\u7a97",
            },
            1132230: {
              a: 1132230,
              b: "\u66dd\u5149",
              ft: "\u4f69\u6234\u7ba1\u7406\u9875",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1132231: {
              a: 1132231,
              b: "\u63a5\u53e3\u8fd4\u56de",
              ft: "\u52cb\u7ae0\u8be6\u60c5\u9875\u8fd4\u56de\u52cb\u7ae0\u72b6\u6001",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1132282: {
              a: 1132282,
              b: "\u66dd\u5149",
              ft: "\u52cb\u7ae0\u8be6\u60c5\u9875",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1133046: {
              a: 1133046,
              b: "\u66dd\u5149",
              ft: "\u4e50\u8ff7\u52cb\u7ae0\u70ed\u5ea6\u6392\u884c\u9875",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1133047: {
              a: 1133047,
              b: "\u70b9\u51fb",
              ft: "\u4e50\u8ff7\u52cb\u7ae0\u70ed\u5ea6\u6392\u884c\u9875-\u53bb\u5b88\u62a4\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1133048: {
              a: 1133048,
              b: "\u70b9\u51fb",
              ft: "\u52cb\u7ae0\u8be6\u60c5\u9875-\u5173\u6ce8\u5e76\u9886\u53d6\u52cb\u7ae0\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1133049: {
              a: 1133049,
              b: "\u70b9\u51fb",
              ft: "\u52cb\u7ae0\u8be6\u60c5\u9875-\u4efb\u52a1\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1133050: {
              a: 1133050,
              b: "\u70b9\u51fb",
              ft: "\u52cb\u7ae0\u6536\u85cf\u9986-\u52cb\u7ae0\u70ed\u5ea6\u6392\u884c\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1133051: {
              a: 1133051,
              b: "\u70b9\u51fb",
              ft: "\u52cb\u7ae0\u6536\u85cf\u9986-\u5173\u6ce8\u6b4c\u624b\u83b7\u53d6\u52cb\u7ae0\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1133189: {
              a: 1133189,
              b: "\u70b9\u51fb",
              ft: "\u661f\u5149\u5b88\u62a4\u699c",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1133340: {
              a: 1133340,
              b: "\u66dd\u5149",
              ft: "\u6bcf\u65e5\u5b88\u62a4",
              r: "\u52cb\u7ae0-\u6bcf\u65e5\u5b88\u62a4",
            },
            1133341: {
              a: 1133341,
              b: "\u70b9\u51fb",
              ft: "button/\u5173\u95ed",
              r: "\u52cb\u7ae0-\u6bcf\u65e5\u5b88\u62a4",
            },
            1133342: {
              a: 1133342,
              b: "\u70b9\u51fb",
              ft: "\u53bb\u8865\u7b7e/\u8865",
              r: "\u52cb\u7ae0-\u6bcf\u65e5\u5b88\u62a4",
            },
            1133343: {
              a: 1133343,
              b: "\u70b9\u51fb",
              ft: "\u52a0\u901f\u5347\u7ea7/\u5f00\u901a\u8d85\u4f1a",
              r: "\u52cb\u7ae0\u8be6\u60c5\u9875",
            },
            1133344: {
              a: 1133344,
              b: "\u70b9\u51fb",
              ft: "\u5f00\u901a\u8d85\u4f1a",
              r: "\u52cb\u7ae0-\u5b88\u62a4\u503c\u9875",
            },
            1133190: {
              a: 1133190,
              b: "\u70b9\u51fb",
              ft: "\u66f4\u591a\u63a8\u8350\u5b98\u52cb\u7ae0\u5f85\u9886\u53d6",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
            1133191: {
              a: 1133191,
              b: "\u66dd\u5149",
              ft: "\u52cb\u7ae0\u63a8\u8350\u9875",
              r: "\u63a8\u8350\u5b98-\u52cb\u7ae0\u63a8\u8350\u9875",
            },
            1133192: {
              a: 1133192,
              b: "\u70b9\u51fb",
              ft: "\u53bb\u52a9\u529b",
              r: "\u63a8\u8350\u5b98-\u52cb\u7ae0\u63a8\u8350\u9875",
            },
            1133193: {
              a: 1133193,
              b: "\u70b9\u51fb",
              ft: "banner",
              r: "\u63a8\u8350\u5b98-\u52cb\u7ae0\u63a8\u8350\u9875",
            },
            1133194: {
              a: 1133194,
              b: "\u70b9\u51fb",
              ft: "\u63a8\u8350\u5b98-\u52cb\u7ae0\u63a8\u8350\u9875",
              r: "\u641c\u7d22",
            },
            1133195: {
              a: 1133195,
              b: "\u66dd\u5149",
              ft: "\u6b4c\u66f2\u52a9\u529b\u8be6\u60c5\u9875",
              r: "\u63a8\u8350\u5b98",
            },
            1133196: {
              a: 1133196,
              b: "\u70b9\u51fb",
              ft: "\u64ad\u653e",
              r: "\u63a8\u8350\u5b98-\u6b4c\u66f2\u52a9\u529b\u8be6\u60c5\u9875",
            },
            1133197: {
              a: 1133197,
              b: "\u66dd\u5149",
              ft: "\u6b4c\u66f2\u641c\u7d22\u9875",
              r: "\u63a8\u8350\u5b98",
            },
            1133198: {
              a: 1133198,
              b: "\u70b9\u51fb",
              ft: "\u53bb\u52a9\u529b",
              r: "\u63a8\u8350\u5b98-\u6b4c\u66f2\u641c\u7d22\u9875",
            },
            1133199: {
              a: 1133199,
              b: "\u70b9\u51fb",
              ft: "\u63a8\u8350\u5b98-\u6b4c\u66f2\u641c\u7d22\u9875",
              r: "\u641c\u7d22",
            },
            1133200: {
              a: 1133200,
              b: "\u70b9\u51fb",
              ft: "\u53bb\u52a9\u529b",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986-\u52cb\u7ae0\u8be6\u60c5\u9875",
            },
            1132926: {
              a: 1132926,
              b: "\u70b9\u51fb",
              ft: "\u52a0\u901f\u5347\u7ea7/\u5f00\u901a\u8d85\u4f1a/\u70b9\u51fb\u514d\u8d39\u63a8\u8350/\u4ed8\u8d39\u63a8\u8350",
              r: "\u52cb\u7ae0\u8be6\u60c5\u9875",
            },
          }),
          Object(s.a)(
            Object(s.a)(
              Object(s.a)(
                Object(s.a)(
                  Object(s.a)(
                    Object(s.a)(
                      Object(s.a)(
                        Object(s.a)(
                          Object(s.a)(
                            Object(s.a)(i, "1133192", {
                              a: 1133192,
                              b: "\u70b9\u51fb",
                              ft: "\u70b9\u51fb\u53bb\u63a8\u8350",
                              r: "\u63a8\u8350\u5b98-\u52cb\u7ae0\u63a8\u8350\u9875",
                            }),
                            1133641,
                            {
                              a: 1133641,
                              b: "\u66dd\u5149",
                              ft: "tab\u9875\u66dd\u5149",
                              r: " \u52cb\u7ae0\u6536\u85cf\u9986",
                            },
                          ),
                          1133731,
                          {
                            a: 1133731,
                            b: "\u70b9\u51fb",
                            ft: "\u5ba2\u6001\u9875\u9762-\u67e5\u770b\u6211\u7684\u52cb\u7ae0\u6309\u94ae",
                            r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                          },
                        ),
                        1133732,
                        {
                          a: 1133732,
                          b: "\u70b9\u51fb",
                          ft: "\u52cb\u7ae0\u8be6\u60c5\u9875-\u5173\u6ce8\u6b4c\u624b \u83b7\u53d6\u52cb\u7ae0\u6309\u94ae",
                          r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                        },
                      ),
                      1133771,
                      {
                        a: 1133771,
                        b: "\u66dd\u5149",
                        ft: "\u83b7\u5f97\u65f6\u95f4\u7ebf\u9875\u9762",
                        r: " \u52cb\u7ae0\u6536\u85cf\u9986",
                      },
                    ),
                    1133772,
                    {
                      a: 1133772,
                      b: "\u70b9\u51fb",
                      ft: "\u52cb\u7ae0",
                      r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                    },
                  ),
                  1133773,
                  {
                    a: 1133773,
                    b: "\u70b9\u51fb",
                    ft: "\u5df2\u83b7\u5f97",
                    r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                  },
                ),
                1133774,
                {
                  a: 1133774,
                  b: "\u70b9\u51fb",
                  ft: "\u5373\u5c06\u5347\u7ea7",
                  r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                },
              ),
              1133775,
              {
                a: 1133775,
                b: "\u70b9\u51fb",
                ft: "\u52cb\u7ae0\u603b\u6570",
                r: "\u52cb\u7ae0\u6536\u85cf\u9986",
              },
            ),
            1134368,
            {
              a: 1134368,
              b: "\u70b9\u51fb",
              ft: "\u522e\u522e\u4e50\u5165\u53e3",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
          ),
          Object(s.a)(
            Object(s.a)(
              Object(s.a)(
                Object(s.a)(
                  Object(s.a)(
                    Object(s.a)(
                      Object(s.a)(
                        Object(s.a)(
                          Object(s.a)(
                            Object(s.a)(i, 1134653, {
                              a: 1134653,
                              b: "\u66dd\u5149",
                              ft: "\u63a8\u8350\u4f4d\u66dd\u5149",
                              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                            }),
                            1134654,
                            {
                              a: 1134654,
                              b: "\u70b9\u51fb",
                              ft: "\u63a8\u8350\u4f4d",
                              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                            },
                          ),
                          1134798,
                          {
                            a: 1134798,
                            b: "\u70b9\u51fb",
                            ft: "\u8bed\u97f3icon",
                            r: "\u8bed\u97f3\u52cb\u7ae0\u8be6\u60c5\u9875",
                          },
                        ),
                        1134868,
                        {
                          a: 1134868,
                          b: "\u66dd\u5149",
                          ft: "\u4e50\u8ff7\u8be6\u60c5-\u5e38\u9a7b\u529f\u80fd\u5165\u53e3\u56fe\u6807",
                          r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                        },
                      ),
                      1134869,
                      {
                        a: 1134869,
                        b: "\u70b9\u51fb",
                        ft: "\u4e50\u8ff7\u8be6\u60c5-\u5e38\u9a7b\u529f\u80fd\u5165\u53e3\u56fe\u6807",
                        r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                      },
                    ),
                    1134870,
                    {
                      a: 1134870,
                      b: "\u70b9\u51fb",
                      ft: "\u4e50\u8ff7\u8be6\u60c5-\u52a0\u901f\u5165\u53e3",
                      r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                    },
                  ),
                  1134871,
                  {
                    a: 1134871,
                    b: "\u66dd\u5149",
                    ft: "\u4e50\u8ff7\u8be6\u60c5-\u52a0\u901f\u9762\u677f",
                    r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                  },
                ),
                1134872,
                {
                  a: 1134872,
                  b: "\u70b9\u51fb",
                  ft: "\u4e50\u8ff7\u8be6\u60c5\u9875-\u52a0\u901f\u8be6\u60c5\u9762\u677fbutton",
                  r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                },
              ),
              1134873,
              {
                a: 1134873,
                b: "\u66dd\u5149",
                ft: "\u7c89\u4e1d\u5b88\u62a4\u699c tab",
                r: "\u52cb\u7ae0\u6536\u85cf\u9986",
              },
            ),
            1134874,
            {
              a: 1134874,
              b: "\u66dd\u5149",
              ft: "\u4e50\u8ff7\u6392\u884c\u8bbe\u7f6e",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
          ),
          Object(s.a)(
            Object(s.a)(
              Object(s.a)(
                Object(s.a)(
                  Object(s.a)(
                    Object(s.a)(
                      Object(s.a)(
                        Object(s.a)(
                          Object(s.a)(
                            Object(s.a)(i, 1134875, {
                              a: 1134875,
                              b: "\u70b9\u51fb",
                              ft: "\u4e50\u8ff7-\u5206\u4eab\u6a21\u677f",
                              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                            }),
                            1134876,
                            {
                              a: 1134876,
                              b: "\u70b9\u51fb",
                              ft: "\u4e50\u8ff7\u52cb\u7ae0\u70ed\u5ea6-item",
                              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                            },
                          ),
                          1134877,
                          {
                            a: 1134877,
                            b: "\u66dd\u5149",
                            ft: "\u5e94\u63f4\u5305banner\u5165\u53e3\u66dd\u5149",
                            r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                          },
                        ),
                        1134878,
                        {
                          a: 1134878,
                          b: "\u70b9\u51fb",
                          ft: "\u5e94\u63f4\u5305banner\u5165\u53e3\u70b9\u51fb",
                          r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                        },
                      ),
                      1134946,
                      {
                        a: 1134946,
                        b: "\u70b9\u51fb",
                        ft: "\u70b9\u51fb\u770b\u5e7f\u544a\u4efb\u52a1\u4eba\u6570",
                        r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                      },
                    ),
                    1135072,
                    {
                      a: 1135072,
                      b: "\u66dd\u5149",
                      ft: "\u8be6\u60c5\u9875\u4efb\u52a1",
                      r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                    },
                  ),
                  1135073,
                  {
                    a: 1135073,
                    b: "\u70b9\u51fb",
                    ft: "\u8be6\u60c5\u9875\u4efb\u52a1",
                    r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                  },
                ),
                1134979,
                {
                  a: 1134979,
                  b: "\u66dd\u5149",
                  ft: "\u4f69\u6234\u7ba1\u7406\u9875",
                  r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                },
              ),
              1134980,
              {
                a: 1134980,
                b: "\u70b9\u51fb",
                ft: "\u4f69\u6234\u7ba1\u7406\u9875",
                r: "\u52cb\u7ae0\u6536\u85cf\u9986",
              },
            ),
            1135115,
            {
              a: 1135115,
              b: "\u70b9\u51fb",
              ft: "\u4e50\u8ff7\u6362\u80a4\u5165\u53e3",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
          ),
          Object(s.a)(
            Object(s.a)(
              Object(s.a)(
                Object(s.a)(
                  Object(s.a)(
                    Object(s.a)(
                      Object(s.a)(
                        Object(s.a)(
                          Object(s.a)(
                            Object(s.a)(i, 1135686, {
                              a: 1135686,
                              b: "\u70b9\u51fb",
                              ft: "\u4e50\u8ff7\u6362\u80a4\u5165\u53e3",
                              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                            }),
                            1135734,
                            {
                              a: 1135734,
                              b: "\u66dd\u5149",
                              ft: "\u4e50\u8ff7\u52cb\u7ae0\u4f1a\u5458\u652f\u4ed8\u5f39\u7a97",
                              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                            },
                          ),
                          1135735,
                          {
                            a: 1135735,
                            b: "\u70b9\u51fb",
                            ft: "\u4e50\u8ff7\u52cb\u7ae0\u4f1a\u5458\u652f\u4ed8\u5f39\u7a97",
                            r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                          },
                        ),
                        1135736,
                        {
                          a: 1135736,
                          b: "\u7edf\u8ba1",
                          ft: "\u4e50\u8ff7\u52cb\u7ae0\u4f1a\u5458\u652f\u4ed8\u5f39\u7a97",
                          r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                        },
                      ),
                      1135888,
                      {
                        a: 1135888,
                        b: "\u66dd\u5149",
                        ft: "\u770bn\u5f971\u6a21\u5757",
                        r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                      },
                    ),
                    1135220,
                    {
                      a: 1135220,
                      b: "\u70b9\u51fb",
                      ft: "\u52cb\u7ae0\u8be6\u60c5\u9875",
                      r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                    },
                  ),
                  1135715,
                  {
                    a: 1135715,
                    b: "\u7edf\u8ba1",
                    ft: "\u5e7f\u544a\u4efb\u52a1\u6fc0\u52b1\u8865\u507f",
                    r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                  },
                ),
                1135615,
                {
                  a: 1135615,
                  b: "\u70b9\u51fb",
                  ft: "\u81ea\u5b9a\u4e49\u5165\u53e3",
                  r: "\u52cb\u7ae0\u6536\u85cf\u9986",
                },
              ),
              1135616,
              {
                a: 1135616,
                b: "\u70b9\u51fb",
                ft: "\u56fe\u7247\u786e\u8ba4\u4e0a\u4f20",
                r: "\u52cb\u7ae0\u6536\u85cf\u9986",
              },
            ),
            1135617,
            {
              a: 1135617,
              b: "\u70b9\u51fb",
              ft: "\u89c4\u5219\u6309\u94ae",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
          ),
          Object(s.a)(
            Object(s.a)(
              Object(s.a)(i, 1135608, {
                a: 1135608,
                b: "\u70b9\u51fb",
                ft: "\u4e50\u8ff7\u699c\u5355\u79f0\u53f7",
                r: "\u52cb\u7ae0\u6536\u85cf\u9986",
              }),
              1135692,
              {
                a: 1135692,
                b: "\u66dd\u5149",
                ft: "\u300c\u5b9a\u5236\u5b9e\u4f53\u300dbutton",
                r: "\u52cb\u7ae0\u6536\u85cf\u9986",
              },
            ),
            1135693,
            {
              a: 1135693,
              b: "\u70b9\u51fb",
              ft: "\u300c\u5b9a\u5236\u5b9e\u4f53\u300dbutton",
              r: "\u52cb\u7ae0\u6536\u85cf\u9986",
            },
          ));
      function O(a) {
        return k.apply(this, arguments);
      }
      function k() {
        return (k = Object(t.a)(
          p().mark(function a(e) {
            var r, i;
            return p().wrap(function (a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return ((a.next = 2), Object(b.t)());
                  case 2:
                    return (
                      (r = a.sent),
                      (i = Object(u.a)({}, y[e], {
                        timestamp: +new Date(),
                        appid: r.appid,
                        mid: r.mid || 0,
                        userid: r.userid || 0,
                        uuid: r.uuid || 0,
                        hreffrom: Object(b.x)("hreffrom"),
                      })),
                      m.a.iphone
                        ? (i.appid = 1e3)
                        : m.a.android && (i.appid = 1005),
                      b.db.isInClient && (i.tv = r.clientver || 0),
                      a.abrupt("return", i)
                    );
                  case 7:
                  case "end":
                    return a.stop();
                }
            }, a);
          }),
        )).apply(this, arguments);
      }
      function j() {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = Object(t.a)(
          p().mark(function a() {
            var e, r, i;
            return p().wrap(function (a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    if (!v) {
                      a.next = 2;
                      break;
                    }
                    return a.abrupt("return", v);
                  case 2:
                    return ((a.next = 4), Object(b.t)());
                  case 4:
                    if (
                      ((e = a.sent),
                      (r = {
                        os: 0,
                        ver: 0,
                        userAgent: navigator.userAgent,
                        mid: e.mid || 0,
                        uid: e.userid || 0,
                        uuid: e.uuid || 0,
                        fanxid: e.userid || 0,
                        realtime1: window.location.href || "",
                      }),
                      (i = navigator.userAgent.toLowerCase()),
                      /iPad/gi.test(i)
                        ? (r.os = 1012)
                        : /iPhone|iPod/gi.test(i)
                          ? (r.os = 1e3)
                          : (r.os = 1005),
                      !b.db.isInClient)
                    ) {
                      a.next = 11;
                      break;
                    }
                    return (
                      (a.next = 11),
                      new Promise(function (a) {
                        N.a.mobileCall(122, null, function (e) {
                          (e && e.version && (r.ver = e.version), a());
                        });
                      })
                    );
                  case 11:
                    return ((v = r), a.abrupt("return", v));
                  case 13:
                  case "end":
                    return a.stop();
                }
            }, a);
          }),
        )).apply(this, arguments);
      }
      function C(a) {
        (console.log("\u57cb\u70b9\u4fe1\u606f: ", a), g || h(a, w.bi));
      }
      function _(a) {
        (console.log("APM\u4fe1\u606f: ", a),
          N.a.isInClient(),
          g ? console.log("\u57cb\u70b9\u4fe1\u606f: ", a) : h(a, w.apm));
      }
      var L = {
        fire: (function () {
          var a = Object(t.a)(
            p().mark(function a(e, r) {
              return p().wrap(function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return ((a.t0 = C), (a.t1 = Object), (a.next = 4), O(e));
                    case 4:
                      ((a.t2 = a.sent),
                        (a.t3 = r),
                        (a.t4 = a.t1.assign.call(a.t1, a.t2, a.t3)),
                        (a.t5 = w.bi),
                        (0, a.t0)(a.t4, a.t5));
                    case 9:
                    case "end":
                      return a.stop();
                  }
              }, a);
            }),
          );
          return function (e, r) {
            return a.apply(this, arguments);
          };
        })(),
        statAPM: c()(
          (function () {
            var a = Object(t.a)(
              p().mark(function a(e, r) {
                var i,
                  u,
                  t = arguments;
                return p().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (i = !(t.length > 2 && void 0 !== t[2]) || t[2]),
                          (u = { typeid: e, timelength: n.a.getFCPTime() }),
                          i || delete u.timelength,
                          (a.t0 = _),
                          (a.t1 = Object),
                          (a.t2 = u),
                          (a.next = 8),
                          j()
                        );
                      case 8:
                        ((a.t3 = a.sent),
                          (a.t4 = r),
                          (a.t5 = a.t1.assign.call(a.t1, a.t2, a.t3, a.t4)),
                          (0, a.t0)(a.t5));
                      case 12:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e, r) {
              return a.apply(this, arguments);
            };
          })(),
        ),
        statAPMN: (function () {
          var a = Object(t.a)(
            p().mark(function a(e, r) {
              var i,
                u,
                t = arguments;
              return p().wrap(function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (i = !(t.length > 2 && void 0 !== t[2]) || t[2]),
                        (u = { typeid: e, timelength: n.a.getFCPTime() }),
                        i || delete u.timelength,
                        (a.t0 = _),
                        (a.t1 = Object),
                        (a.t2 = u),
                        (a.next = 8),
                        j()
                      );
                    case 8:
                      ((a.t3 = a.sent),
                        (a.t4 = r),
                        (a.t5 = a.t1.assign.call(a.t1, a.t2, a.t3, a.t4)),
                        (0, a.t0)(a.t5));
                    case 12:
                    case "end":
                      return a.stop();
                  }
              }, a);
            }),
          );
          return function (e, r) {
            return a.apply(this, arguments);
          };
        })(),
      };
      function E(a) {
        return I.apply(this, arguments);
      }
      function I() {
        return (I = Object(t.a)(
          p().mark(function a(e) {
            var r, i;
            return p().wrap(function (a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (
                      (r = Object(u.a)({}, e)),
                      (a.next = 3),
                      Object(b.t)()
                    );
                  case 3:
                    ((i = a.sent),
                      (function () {
                        ((r.uuid = (i && i.uuid) || 0),
                          (r.mid = (i && i.mid) || 0),
                          (r.userid = (i && i.kugouID) || 0),
                          (r.user_id = (i && i.kugouID) || 0),
                          (r.appid = (i && i.appid) || 0),
                          (r.plat_id = (i && i.appid) || 0),
                          (r.tv = (i && i.version) || 0),
                          (r.timestamp = Math.round(
                            new Date().getTime() / 1e3,
                          )),
                          (r.times = new Date().getTime()),
                          (r.url = window.location.href),
                          (r.hreffrom = Object(b.x)("hreffrom") || ""),
                          (r.source_id = String(r.source_id || "")),
                          (r.button_id = String(r.button_id || "")),
                          (r.page_id = String(r.page_id || "")));
                        try {
                          ("voo.kugou.com" !== window.location.hostname &&
                            "test.kugou.com" !== window.location.hostname) ||
                            console.log("\u6f0f\u6597\u91c7\u96c6data", r);
                        } catch (a) {}
                        h(r, 3);
                      })());
                  case 6:
                  case "end":
                    return a.stop();
                }
            }, a);
          }),
        )).apply(this, arguments);
      }
      e.a = L;
    },
    11: function (a, e) {},
    12: function (a, e) {},
    "14df1cbe": function (a, e, r) {
      "use strict";
      (r.d(e, "i", function () {
        return d;
      }),
        r.d(e, "n", function () {
          return n;
        }),
        r.d(e, "f", function () {
          return b;
        }),
        r.d(e, "a", function () {
          return m;
        }),
        r.d(e, "m", function () {
          return c;
        }),
        r.d(e, "j", function () {
          return l;
        }),
        r.d(e, "c", function () {
          return f;
        }),
        r.d(e, "h", function () {
          return h;
        }),
        r.d(e, "b", function () {
          return g;
        }),
        r.d(e, "d", function () {
          return v;
        }),
        r.d(e, "e", function () {
          return w;
        }),
        r.d(e, "g", function () {
          return y;
        }),
        r.d(e, "l", function () {
          return k;
        }),
        r.d(e, "k", function () {
          return C;
        }));
      var i = r("66b76edf"),
        u = r("e7ea4b7d"),
        t = r("b0a17433"),
        s = r("a005797a"),
        d =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAclBMVEVjc5xre6X///////////////////////////////////////////////////95hKrh6OyUn7no6/CnsMjP1OHV2eWos8q3wNHi5u2eqMTe3+mbpcHq7fLM0t/f4Ou0us/o7PCOmrl2hai+xdZ+jazEydswhzRyAAAAJnRSTlMfHyglIiwqHiQdISAbLhohHBwqJichHyYjIzEnMh8pLiUlHRwkMBs6cRMAAAnYSURBVHja7JexCoUwDEWboaO4p4Xyhv7/Lz7poIKLViE34WaR41SvCc1JkkZtj1GuGeksc3wpcc5AR/mCxT8fr/2yeR9wRK48QGIwVLCzLGcUzwwU6gtOQA0+z1CRPubIv0PAwr3P8Xb4SN9i3hNctugj0GzeBxwR+gg84/gEfSTkAmwfKX0EKEz6CH0EnYGOQh+B8Qn6SMAREbD7mT4C4xP0kZALsH2k9BGgMOF9ZC2tq9atVHsrq08fKV1rzsuS96raft585E+t2e0oCANReCkuMdmQhj9FRGGNvv8r7ik2jtra1r06no69/zIM5UvV0zgCAfWUYdIf9LEFDDCUHhJknPSn+Mg0logwuCgf4SP7wfYC+yuY4ZffR9AOyxDMRD4i+rI8VGZFUC4Zs4/owVBEIQqzDZrXR86D9CMMUqDqM6uPmH5YkjgKqtacPpINFsL84i1Bjpw+clw4zBblMA0xaRl9ZGswLEUZ7gY2m4bPR84jINLeV8KBgafzkRocaS8sREiObD7SpI1HcV13ach8ZPhOfbKKx9RcPrItkShGgbIdkTRUH1uGQUhCME5qJh/ZJ54etu6jih2RjxyXjoQgbAmGkLQ8PpKFMYTGg4HKaEakKROOc5SPArWj8ZE26TwHiSdKqZbGR1SSf7hRwMC+ZvERDY7/oIACC9EkPrIrY8+Vdz5sS5AdiY80qf7hjrpaUDYkPtLGjnJvQ7BQSzoSH2mj7yt/BITER+aof/gbcktH4iNz1D/884HfNT2Jj8zp/oHchkPSk/hIH/QP72v36dEi+djqAx+8ofkQEBIf6WIO5T89JAcSH9mE/MPFMOsxGxIfqRLtw50OG80xIl/ZO/4hGBIaH1k7GMLhwLgoPzQ+0r3nH885sPiIM+2vOADiy4bnfkQ9NMNPYTaXJFf5KuO5H+niDQEDNl8ORPcjlQWI+IfbDvzyiul+ZJZeBL5LHBZgqJ7qfqRy7VyiQg1RFdf9yAyEmH+4GNh6svuRynYjxT8EJUdDuO5HcCgm+4eAgORA92eUU+7xjwAEFmp14vu/1l/7ZrusJgyE4Z7CFAHHBL/Q6egcP+7/GrthK28xmwQJWmzPktL25zNvluQRUsmrIPzDYqGqpvi91iXsH4DgRC7T/F5r03d/ZRhMIIepfq+1sSi8D6zNdL/XEjIR42jy0NP9XuvbN33fHtK2hPPQ0z4/cgmvg8xxmfr5kWqGhxUNCcI4SDX98yNn7dq3g0af3+L8SFV6/SPJqrc5P1LtGENqjrx6q/MjlU4kjpmu3u/8SHUouxjloXrH8yPmr3O1PRz0fK71ZVudv86z/3eHdadzHn0aPvJ1nv2rRb7Os0/7/9M5jz4tH/k6zz5BH/nXzrOr60+q1WpV13Sjf55O6p3Os6vTql4fl8vl94SvP2t5PK7X9eqkpu0j11V9XHbff4g1S2bLY72/TtJHTmCA1tKwKUzx/biuT5PyEfVzDQgEImIQA92bSlMan/VeTWSz9fNoQyANGwWV0jC13v99HzmtXT9fiRAcCQLhMrmc/qqP/FzKvyby+w+pyc2tyYJHitrt/5qPrAhDDsMMIY/OxErBAZSXtggwHAz9KGjcVwGUl/nIaYmvS8KPK0wsNDkC6aRyfamPqDUoLIwABfKwE0mLIq0/Xucj+yXef/Qk4Sb3oxQEQrXbv8pH1o402vawQO4I5DQ4ElOHl/jIlbrD8dbZ+dg10wo0DpaCBodS7tTzfWQvdgf2ib7uSGcMID2wOA1DQVeR7Z/tI7XndRTCkGBuWSANC4VGC7N9ro/UzibnLCwWDiNBIC4KQFCZ2/aZPkJPXVPOeSV0eWIv557+KFuWMjs8z0fWLcUPi4Gj8PsHulyeU6Bo7odn+UhtMHwrIcrtH/Jjt51axEAXV7Z9zmZrhW8yHvcPbnLHCoJAWoqMLiJ5ho/sv/u/knHKB6PIDJ3Vg/NAIFTV+D5yTdy7EpdEASP9nYhIQhdzACPjRMpMje4jn4ZjoH+4H7voc0ZhDJ5aTemxW2QDip7+MevhHwVAypIpwMEoh3F9ZI/t7iP+MYN/uKoACk+sjEdb1Zg+ohIXhfOpywNO62gP7vVOl2fIw1T+MaKPbMRACAJpeAMBh9wfCATzqq3LeD6iQCD6R+L3DzkNvgECzcEUqPNoPvLp+ng38fjHDDTebSIaHTTd0mP5yNaznI/kH78BGMKKpBrJRz6f4B+Ig2G6C+Fd6XF8ZOv4UlRGCPgHmjxFd9wouEesyvNqFB/5dC0eotdSAcO5fIAD/tHc5NJj+MhWxBATsSyqr3/giSWw5BxJtI/spKcVD2kV5Pbo5R9mSnX8Q5xXzU3Hb7bOj/kH0khdJF3/QBouEpNIfo72kYMcSNg/0gf9IxMq50Esl2gfSSyKkH/gN+p+/nHLwtxEEhPJPNZH0Ory74ny6tHXP/DcdbUHTyyqKrJFdtJzV6RgCN9+lxHgH+WtHHEYhBbkEucjH6GNO1YPxOF+aUB3rB6IgyEsDI7kVnE+srWfVlIaVh4SBRIprTxkCiRCVUX5yCbsH+h0r9diHUSng0RGoYG6RPlIOqZ/mOH1D0DYHPkixkfO4T6Hf2CD1cs/Ahus3FydOkf4yBYUEf5R3PtH6fePXOTIqwgf2YT8Y3aLxCvnwCgZxtscwOjWJcJHdg/6R/qYf9Dl3l1lFkiEj8zC/kFX0D86XU5XyD8Iwq75YriPfCTB3+AwrXr9nPjntHIu52bYHPkiwkcC212TBcqJkQq7EionBt2lWkRsthL0h1zuRRAonXIugkARa05Ta7iPfLRaK5BAPnz+gWkF+fD7R+5CWQz3EeUMZCb5h0zCEiX7h2xSFgINSkQP9xEF9XDah+wfWAgt+wj5B5VEQiDDW0S59iWcBRhm4nIO/+AswNBQlDJFZjPQRaWH+QiDMEaEfxQP+occR0Oih/uICvtH6vcPaXvVmwKJNKWH+wiBhF9+hPwDKE4S+IePRA/3ERV8xenxD8hgZ/Vw+odU3B7Nn8VcD/cRFfYPeV4VTv+QvTY3LGIejMKJDPcRJQViCg0idwfecTIAGsRj55k0rZjCBLLQw31E+b/2QRh+/+h6bW//QJszih7uI8pj55wFWOQmL+72JGAJNTlncWNZ0KWH+4h62D+KB/0j9/jHDYZBKJHhPqJ8/sEQgZ8Tu1qb+X5OlKdV3qRhxkIP9xHl8Y8UcfTyj8yx3/WthJyFuTVTa7iPKOugQSvnbv/AnDID8tHLP5AGD0ahi0oP9xElOlTL4pAP+AdKXD2gtSILugNTa6iPAOJ3IoCQUbB6cCKAkFCAIbcHY5jLVIyPRPlHGekfHAhzmIrxEdk/AhSyf4QpwAAKHlx+H/kFl2k8F0CjjvEAAAAASUVORK5CYII=",
        n = {
          detail:
            "\u52cb\u7ae0\u8be6\u60c5\u9875-\u70ab\u8000\u4e00\u4e0b\u6309\u94ae",
          detail_modal:
            "\u4e3b\u9875\u83b7\u5f97\u5f39\u7a97-\u70ab\u8000\u4e00\u4e0b\u6309\u94ae",
          list: "\u4e3b\u9875\u9762\u53f3\u4e0a\u89d2\u5206\u4eab\u6309\u94ae",
        },
        b =
          (["activity.kugou.com"].indexOf(window.location.hostname),
          {
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
            bindPhone: 296,
            getSongCollectStatus: 868,
            listen: 108,
            forbidSwiperButCanLeftestQuit: 193,
          }),
        m = { h5: 1058, web: 1014, client: null },
        A = {
          "0:1:0": {
            tag_id: 0,
            opern_type: 1,
            original: 0,
            title: "\u94a2\u7434\u8c31",
            __sort__: 1,
          },
          "0:2:0": {
            tag_id: 0,
            opern_type: 2,
            original: 0,
            title: "\u5409\u4ed6\u8c31",
            __sort__: 2,
          },
          "0:99:0": {
            tag_id: 0,
            opern_type: 99,
            original: 0,
            title: "\u5176\u4ed6\u8c31",
            __sort__: 3,
          },
          "0:0:1": {
            tag_id: 0,
            opern_type: 0,
            original: 1,
            title: "\u539f\u521b\u66f2\u8c31",
            __sort__: 4,
          },
        },
        N =
          (Object.keys(A).map(function (a) {
            return A[a];
          }),
          {
            piano: { tagIdx: "42487", title: "\u94a2\u7434" },
            guitar: { tagIdx: "42491", title: "\u5409\u4ed6" },
            guzheng: { tagIdx: "42490", title: "\u53e4\u7b5d" },
            bass: { tagIdx: "42489", title: "\u8d1d\u65af" },
          }),
        o =
          (Object.keys(N).map(function (a) {
            return N[a];
          }),
          {
            piano: { key: 1, code: "piano", title: "\u94a2\u7434" },
            guitar: { key: 2, code: "guitar", title: "\u5409\u4ed6" },
            numberOpern: {
              key: 98,
              code: "numberOpern",
              title: "\u7b80\u8c31",
            },
            drum: { key: 3, code: "drum", title: "\u9f13\u8c31" },
            other: { key: 99, code: "other", title: "\u5176\u4ed6" },
          }),
        c =
          (Object.keys(o).map(function (a) {
            return o[a];
          }),
          function () {
            return s.I
              ? [
                  {
                    img: "https://webvoobssdl.kugou.com/cf3f6051780e46c7d4a33518fe9f5c82.png",
                    title: "\u5fae\u4fe1",
                    type: 2,
                  },
                  {
                    img: "https://webvoobssdl.kugou.com/563b74b8cf6e708bddc2f808c684e082.png",
                    title: "\u670b\u53cb\u5708",
                    type: 1,
                  },
                ]
              : [
                  {
                    img: "https://webvoobssdl.kugou.com/418254a5b4bac2d8a4baa1e7be5f4318.png",
                    title: "\u4fdd\u5b58",
                    type: "save",
                  },
                  {
                    img: "https://webvoobssdl.kugou.com/a6fbaed9519038271b70b0b118359618.png",
                    title: "\u5c0f\u7ea2\u4e66",
                    type: 7,
                  },
                  {
                    img: "https://webvoobssdl.kugou.com/cf3f6051780e46c7d4a33518fe9f5c82.png",
                    title: "\u5fae\u4fe1",
                    type: 2,
                  },
                  {
                    img: "https://webvoobssdl.kugou.com/563b74b8cf6e708bddc2f808c684e082.png",
                    title: "\u670b\u53cb\u5708",
                    type: 1,
                  },
                  {
                    img: "https://webvoobssdl.kugou.com/f175cfb0ac06fb030b2b6b6374a6a2b9.png",
                    title: "QQ",
                    type: 3,
                  },
                  {
                    img: "https://webvoobssdl.kugou.com/c5debf7e9c711ffcb95431074c0a7619.png",
                    title: "QQ\u7a7a\u95f4",
                    type: 5,
                  },
                  {
                    img: "https://webvoobssdl.kugou.com/3ee8bda169e4e1f917fbfe24fd114efc.png",
                    title: "\u5fae\u535a",
                    type: 4,
                  },
                ];
          }),
        l = "rgb(128, 187, 255)",
        f = "https://singerimg.kugou.com/uploadpic/softhead.jpg",
        p = {
          bgColor: "rgba(253, 154, 220, 1)",
          textColor: "rgba(138, 11, 96, 1)",
        },
        h = function (a) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p;
          if (!a) return Object(u.a)({}, e);
          var r = Object(t.h)(a);
          if (!r) return Object(u.a)({}, e);
          var s = Object(t.i)({
              r: null === r || void 0 === r ? void 0 : r.r,
              g: null === r || void 0 === r ? void 0 : r.g,
              b: null === r || void 0 === r ? void 0 : r.b,
            }),
            d = Object(i.a)(s, 3),
            n = d[0],
            b = d[1],
            m = d[2];
          return {
            bgColor: a,
            textColor: Object(t.f)(
              Object(t.g)(
                (n - 10 + 360) % 360,
                Math.min(100, b + 20),
                Math.max(0, m - 40),
              ),
            ),
          };
        },
        g = {
          thresholdHue: 170,
          bgColor: "rgba(216, 228, 239, 1)",
          textColor: "rgba(0, 69, 78, 1)",
          underTextColor: "rgba(0, 69, 78, 0.5)",
          posterBgColor: "rgba(0, 69, 78, 1)",
          signColor: "rgba(167, 210, 248, 1)",
          iconBgColor: "rgba(216, 228, 239, 0.6)",
          btnColor: "rgba(20, 107, 183, 1)",
          headLinerColors: ["rgba(54, 131, 167, 1)", "rgba(54, 131, 167, 0)"],
        },
        v = [
          {
            thresholdHue: 0,
            bgColor: "rgba(250, 229, 224, 1)",
            textColor: "rgba(84, 0, 0, 1)",
            underTextColor: "rgba(84, 0, 0, 0.5)",
            posterBgColor: "rgba(84, 0, 0, 1)",
            signColor: "rgba(255, 174, 174, 1)",
            iconBgColor: "rgba(250, 229, 224, 0.6)",
            btnColor: "rgba(181, 63, 63, 1)",
            headLinerColors: ["rgba(145, 71, 71, 1)", "rgba(145, 71, 71, 0)"],
          },
          {
            thresholdHue: 20,
            bgColor: "rgba(246, 226, 215, 1)",
            textColor: "rgba(84, 36, 0, 1)",
            underTextColor: "rgba(84, 36, 0, 0.5)",
            posterBgColor: "rgba(84, 36, 0, 1)",
            signColor: "rgba(255, 203, 180, 1)",
            iconBgColor: "rgba(246, 226, 215, 0.6)",
            btnColor: "rgba(213, 116, 81, 1)",
            headLinerColors: ["rgba(134, 105, 49, 1)", "rgba(134, 105, 49, 0)"],
          },
          {
            thresholdHue: 60,
            bgColor: "rgba(233, 240, 222, 1)",
            textColor: "rgba(39, 62, 0, 1)",
            underTextColor: "rgba(39, 62, 0, 0.5)",
            posterBgColor: "rgba(39, 62, 0, 1)",
            signColor: "rgba(185, 226, 168, 1)",
            iconBgColor: "rgba(233, 240, 222, 0.6)",
            btnColor: "rgba(99, 139, 36, 1)",
            headLinerColors: ["rgba(98, 102, 53, 1)", "rgba(98, 102, 53, 0)"],
          },
          {
            thresholdHue: 130,
            bgColor: "rgba(218, 237, 230, 1)",
            textColor: "rgba(0, 59, 40, 1)",
            underTextColor: "rgba(0, 59, 40, 0.5)",
            posterBgColor: "rgba(0, 59, 40, 1)",
            signColor: "rgba(147, 218, 222, 1)",
            iconBgColor: "rgba(218, 237, 230, 0.6)",
            btnColor: "rgba(20, 136, 142, 1)",
            headLinerColors: ["rgba(94, 155, 134, 1)", "rgba(94, 155, 134, 0)"],
          },
          Object(u.a)({}, g),
          {
            thresholdHue: 200,
            bgColor: "rgba(225, 224, 249, 1)",
            textColor: "rgba(22, 37, 101, 1)",
            underTextColor: "rgba(22, 37, 101, 0.5)",
            posterBgColor: "rgba(22, 37, 101, 1)",
            signColor: "rgba(176, 199, 253, 1)",
            iconBgColor: "rgba(225, 224, 249, 0.6)",
            btnColor: "rgba(66, 90, 209, 1)",
            headLinerColors: ["rgba(81, 78, 150, 1)", "rgba(81, 78, 150, 0)"],
          },
          {
            thresholdHue: 255,
            bgColor: "rgba(236, 225, 255, 1)",
            textColor: "rgba(50, 19, 109, 1)",
            underTextColor: "rgba(50, 19, 109, 0.5)",
            posterBgColor: "rgba(50, 19, 109, 1)",
            signColor: "rgba(216, 198, 252, 1)",
            iconBgColor: "rgba(236, 225, 255, 0.6)",
            btnColor: "rgba(130, 84, 205, 1)",
            headLinerColors: ["rgba(122, 77, 151, 1)", "rgba(122, 77, 151, 0)"],
          },
          {
            thresholdHue: 270,
            bgColor: "rgba(246, 232, 246, 1)",
            textColor: "rgba(80, 6, 70, 1)",
            underTextColor: "rgba(80, 6, 70, 0.5)",
            posterBgColor: "rgba(80, 6, 70, 1)",
            signColor: "rgba(246, 198, 239, 1)",
            iconBgColor: "rgba(246, 232, 246, 0.6)",
            btnColor: "rgba(217, 93, 169, 1)",
            headLinerColors: ["rgba(153, 84, 127, 1)", "rgba(153, 84, 127, 0)"],
          },
          {
            thresholdHue: 340,
            bgColor: "rgba(250, 229, 224, 1)",
            textColor: "rgba(84, 0, 0, 1)",
            underTextColor: "rgba(84, 0, 0, 0.5)",
            posterBgColor: "rgba(84, 0, 0, 1)",
            signColor: "rgba(255, 174, 174, 1)",
            iconBgColor: "rgba(250, 229, 224, 0.6)",
            btnColor: "rgba(181, 63, 63, 1)",
            headLinerColors: ["rgba(145, 71, 71, 1)", "rgba(145, 71, 71, 0)"],
          },
        ],
        w = {
          thresholdHue: "",
          bgColor: "rgba(232, 232, 232, 1)",
          textColor: "rgba(0, 0, 0, 1)",
          underTextColor: "rgba(0, 0, 0, 0.5)",
          posterBgColor: "rgba(0, 0, 0, 1)",
          signColor: "rgba(190, 190, 190, 1)",
          iconBgColor: "rgba(232, 232, 232, 0.6)",
          btnColor: "rgba(0, 0, 0, 1)",
          headLinerColors: ["rgba(72, 72, 72, 1)", "rgba(72, 72, 72, 0)"],
        },
        y = "266431",
        O = [
          { name: "\u5168\u7403\u603b\u6392\u540d", value: 1 },
          { name: "\u5168\u7403\u5e74\u6392\u540d", value: 2 },
          { name: "\u7701\u6708\u6392\u540d", value: 3 },
          { name: "\u5e02\u5468\u6392\u540d", value: 4 },
        ],
        k = function () {
          var a,
            e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
            r = arguments.length > 1 ? arguments[1] : void 0;
          return 3 === e
            ? "".concat(
                (null === r || void 0 === r ? void 0 : r.province_name) ||
                  "\u7701",
                "\u6708\u6392\u540d",
              )
            : 4 === e
              ? "".concat(
                  (null === r || void 0 === r ? void 0 : r.city_name) ||
                    "\u5e02",
                  "\u5468\u6392\u540d",
                )
              : null ===
                    (a = O.find(function (a) {
                      return a.value === e;
                    })) || void 0 === a
                ? void 0
                : a.name;
        },
        j = {
          thresholdHue: 170,
          bgColor: "rgba(145, 193, 238, .6)",
          textColor: "rgba(1, 99, 173, 1)",
          signColor: "rgba(168, 217, 255, .4)",
          btnColor: "rgba(1, 99, 173, 1)",
        },
        x = [
          {
            thresholdHue: 340,
            bgColor: "rgba(255, 189, 153, .6)",
            textColor: "rgba(181, 57, 57, 1)",
            signColor: "rgba(255, 201, 201, .4)",
            btnColor: "rgba(181, 57, 57, 1)",
          },
          {
            thresholdHue: 270,
            bgColor: "rgba(230, 168, 237, .6)",
            textColor: "rgba(173, 51, 134, 1)",
            signColor: "rgba(255, 202, 239, .4)",
            btnColor: "rgba(173, 51, 134, 1)",
          },
          {
            thresholdHue: 255,
            bgColor: "rgba(195, 162, 255, .6)",
            textColor: "rgba(101, 52, 199, 1)",
            signColor: "rgba(213, 194, 250, .4)",
            btnColor: "rgba(101, 52, 199, 1)",
          },
          {
            thresholdHue: 200,
            bgColor: "rgba(162, 166, 255, .6)",
            textColor: "rgba(41, 74, 181, 1)",
            signColor: "rgba(183, 200, 255, .4)",
            btnColor: "rgba(41, 74, 181, 1)",
          },
          Object(u.a)({}, j),
          {
            thresholdHue: 130,
            bgColor: "rgba(161, 226, 204, .6)",
            textColor: "rgba(3, 144, 121, 1)",
            signColor: "rgba(159, 235, 224, .4)",
            btnColor: "rgba(3, 144, 121, 1)",
          },
          {
            thresholdHue: 60,
            bgColor: "rgba(192, 216, 151, .6)",
            textColor: "rgba(42, 129, 60, 1)",
            signColor: "rgba(167, 233, 211, .4)",
            btnColor: "rgba(42, 129, 60, 1)",
          },
          {
            thresholdHue: 20,
            bgColor: "rgba(255, 211, 141, .6)",
            textColor: "rgba(171, 82, 7, 1)",
            signColor: "rgba(255, 207, 168, .4)",
            btnColor: "rgba(171, 82, 7, 1)",
          },
        ],
        C = function (a) {
          var e = a.mainColor;
          if (e) {
            var r = j,
              u = Object(t.h)(e),
              s = Object(t.i)({
                r: null === u || void 0 === u ? void 0 : u.r,
                g: null === u || void 0 === u ? void 0 : u.g,
                b: null === u || void 0 === u ? void 0 : u.b,
              }),
              d = Object(i.a)(s, 2),
              n = d[0],
              b = d[1];
            if (b >= 0 && b < 1) return j;
            if (b >= 1 && b <= 100) {
              for (var m = 0, A = x; m < A.length; m++) {
                var N = A[m];
                if (N.thresholdHue < n) {
                  r = N;
                  break;
                }
              }
              if (r) return r;
            }
            return r;
          }
        };
    },
    "1da606af": function (a, e, r) {
      a.exports = r.p + "static/media/manrope-extrabold-3.43fd4aa4.otf";
    },
    2: function (a, e) {},
    3: function (a, e) {},
    4: function (a, e) {},
    "4aa60406": function (a, e) {
      a.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVCSURBVHgB7Z2BlZs4EIbHW4E7ODrIdnB0cNeB6WC3g3AVJB0sqeCuA3IVeFMBvgq8HfwnheEtkUdCIAEC7/eeHtkgYPx7JCFpJB8oMQAc1aGf+lxUejscDm+UCAdaESVWrg6fVHrklNGtaBJawFc+flfphxL1O63AogKyd51U+pNawXzE8qUTtVLpXyXohfaC9jSVaixLrdKJtor2NpU+q3TFujSYUchZirAy+EkdSvIvol3xu6j0Hx/fOPXJ6L2e7OpO32dctE2qaH+jVEFbVBsPr9BeWWuhVcooAHX9o0qFSn/DjwZt45UOaIvrFw/ja/6wMRsP044CfvXty1x2jDX6EW6v0972FYGeNsGuTKVqQMRmabtMI5+Q+LfsKeQzLQ3aFtZGjcTqGRaycdj8mZaCPSudb3MEyr7SYfsLzY1DvEalR9oAA944n4gO8c5IoUUbAYt4XkxE2Ou8ijYM7A1MvDoR9ta2oh3gEDG8PmdX3614HQ4Rp9fraN/sG+GmZ9ohkOtE/fmn1e+Wb0XfMKMd4nCYLzQWtAMDEhntGLRdU4l8zH3I8k2UdAeoz/ksfPZmzA2KoBvsAMgjOn6tssX7MrojIFdhemTpOHSh5H3z9xETBHIjWg5d1Ny793WgbZXNOZ2r64IP7zNAOxhsktsy1x/e9yuQe2L19Ix3iMWxfjYmD718uXBtRR9opKnQ4pe/JJVpJyBwrBJyY1KbmcwM/9AOwPvoc9D4nuBg1/5J6aVxu3ElDG6H7ieLCLl7l7tObmJ+wwbs8x6TRITcyD53jcjvRn4dxPhKGwXtq5euozLh9KR4IA6XM2N1PnUPrA1lN/v6AveMW0kBCDqduxNmA/KVNsic4vH9zb7x9QHvMcl9kolB9mWg2P6limBJ4VyMv4+6Djx6ZEyahcTTXMz/eLA89EIbYUHxNDcl84E2zMLiaZYTkCv0J5qJFcSzGiL1QnIKwGgNo4eNzd3aOp57o5VtGu8Pmojlw0UTcS3x+NmigFIXpaCJwB6fHCzimuLx8wtJwGNMYwY+ZEhnflXx2IbyRkA+YfZEguZBYouYgnhshzk/cu1OmEE1wX3hWCKmIh7bUos6QejjUQRCRUxJPLZHHnSGPB6YUQSmipigeNLbynN3MreejPPwUSKmJh7bVAi25P0M7kmTcAO8RExRPLbLXIt3NTPUZgZEjrwfEjFh8aRXvZtZOakeLCgyAyJdUxOPbZaK78nMNKxyPINcIiYlHttbC3Zl0zPGMcpHxJJWBmNCXiC3xrPNjyDROq8P5BjBk+uCm3g4zLiMyyJiSQkA2fuaoYtK4aJZYwQNEUtKhNHexxdJgTSanGaERUxmqSymeF/vYumV5q5iBSHXzf7xQpYbJL2YOhaQV6aOW+YB+0qlTQcdDQH74sqcxgI5wLrBxhZX+wL7a9W0RhQfqzXDHQb2xXe7Wv4A+3YGGYUCuVXejYgO8eI1mrBvF7JpER3ilRQb2JfFn4FtLciBe9eOiubCIWKzFRHh3u+rormBey+q6LEwMYF7v6+KlgLuLZSa1LwRw9uQlrQ0sLfOHS9rC4n2XbYasHO9Lir8RpZflhaS7dI9Kdcerg1S6Jp6fsuaGjOugMK4HSy1uGl1SeG/h6pGz7OeQj0AHAnLovnsGNwg4tjmXLv4FuqgW+PM85JuF98f/O8LCUsKOGUq/cbHMbv46vvq0N/trIHh4tRgXbRX6jeG7Y4gwb9eikmNBbYhXXov/YzalfG6IRlT/HzoqgEdcvZtqV98SOXXHPRRi+kraldPvnJa7dcc/gf5F3GdK9hwFgAAAABJRU5ErkJggg==";
    },
    5: function (a, e) {},
    6: function (a, e) {},
    "66c08f38": function (a, e, r) {
      var i = r("0861e811");
      "string" === typeof i && (i = [[a.i, i, ""]]);
      var u = { hmr: !0, transform: void 0, insertInto: void 0 };
      r("31322fd2")(i, u);
      i.locals && (a.exports = i.locals);
    },
    7: function (a, e) {},
    "70b5e01e": function (a) {
      a.exports = [
        {
          areaName: "\u5317\u4eac\u5e02",
          id: "\u5317\u4eac\u5e02",
          subArea: [
            {
              areaName: "\u5317\u4eac\u5e02",
              id: "\u5317\u4eac\u5e02",
              subArea: [
                {
                  areaName: "\u4e1c\u57ce\u533a",
                  id: "\u4e1c\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u57ce\u533a",
                  id: "\u897f\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u671d\u9633\u533a",
                  id: "\u671d\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e30\u53f0\u533a",
                  id: "\u4e30\u53f0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u666f\u5c71\u533a",
                  id: "\u77f3\u666f\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d77\u6dc0\u533a",
                  id: "\u6d77\u6dc0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u95e8\u5934\u6c9f\u533a",
                  id: "\u95e8\u5934\u6c9f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u623f\u5c71\u533a",
                  id: "\u623f\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u901a\u5dde\u533a",
                  id: "\u901a\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u987a\u4e49\u533a",
                  id: "\u987a\u4e49\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u660c\u5e73\u533a",
                  id: "\u660c\u5e73\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u5174\u533a",
                  id: "\u5927\u5174\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6000\u67d4\u533a",
                  id: "\u6000\u67d4\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u8c37\u533a",
                  id: "\u5e73\u8c37\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5bc6\u4e91\u533a",
                  id: "\u5bc6\u4e91\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5ef6\u5e86\u533a",
                  id: "\u5ef6\u5e86\u533a",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u5929\u6d25\u5e02",
          id: "\u5929\u6d25\u5e02",
          subArea: [
            {
              areaName: "\u5929\u6d25\u5e02",
              id: "\u5929\u6d25\u5e02",
              subArea: [
                {
                  areaName: "\u548c\u5e73\u533a",
                  id: "\u548c\u5e73\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6cb3\u4e1c\u533a",
                  id: "\u6cb3\u4e1c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6cb3\u897f\u533a",
                  id: "\u6cb3\u897f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u5f00\u533a",
                  id: "\u5357\u5f00\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6cb3\u5317\u533a",
                  id: "\u6cb3\u5317\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7ea2\u6865\u533a",
                  id: "\u7ea2\u6865\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u4e3d\u533a",
                  id: "\u4e1c\u4e3d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u9752\u533a",
                  id: "\u897f\u9752\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d25\u5357\u533a",
                  id: "\u6d25\u5357\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5317\u8fb0\u533a",
                  id: "\u5317\u8fb0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u6e05\u533a",
                  id: "\u6b66\u6e05\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b9d\u577b\u533a",
                  id: "\u5b9d\u577b\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6ee8\u6d77\u65b0\u533a",
                  id: "\u6ee8\u6d77\u65b0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b81\u6cb3\u533a",
                  id: "\u5b81\u6cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9759\u6d77\u533a",
                  id: "\u9759\u6d77\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u84df\u5dde\u533a",
                  id: "\u84df\u5dde\u533a",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u6cb3\u5317\u7701",
          id: "\u6cb3\u5317\u7701",
          subArea: [
            {
              areaName: "\u77f3\u5bb6\u5e84\u5e02",
              id: "\u77f3\u5bb6\u5e84\u5e02",
              subArea: [
                {
                  areaName: "\u957f\u5b89\u533a",
                  id: "\u957f\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6865\u897f\u533a",
                  id: "\u6865\u897f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u534e\u533a",
                  id: "\u65b0\u534e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e95\u9649\u77ff\u533a",
                  id: "\u4e95\u9649\u77ff\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u88d5\u534e\u533a",
                  id: "\u88d5\u534e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u85c1\u57ce\u533a",
                  id: "\u85c1\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9e7f\u6cc9\u533a",
                  id: "\u9e7f\u6cc9\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u683e\u57ce\u533a",
                  id: "\u683e\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e95\u9649\u53bf",
                  id: "\u4e95\u9649\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6b63\u5b9a\u53bf",
                  id: "\u6b63\u5b9a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u884c\u5510\u53bf",
                  id: "\u884c\u5510\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7075\u5bff\u53bf",
                  id: "\u7075\u5bff\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9ad8\u9091\u53bf",
                  id: "\u9ad8\u9091\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6df1\u6cfd\u53bf",
                  id: "\u6df1\u6cfd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8d5e\u7687\u53bf",
                  id: "\u8d5e\u7687\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65e0\u6781\u53bf",
                  id: "\u65e0\u6781\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u5c71\u53bf",
                  id: "\u5e73\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5143\u6c0f\u53bf",
                  id: "\u5143\u6c0f\u53bf",
                  subArea: [],
                },
                { areaName: "\u8d75\u53bf", id: "\u8d75\u53bf", subArea: [] },
                {
                  areaName:
                    "\u77f3\u5bb6\u5e84\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u77f3\u5bb6\u5e84\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u77f3\u5bb6\u5e84\u5faa\u73af\u5316\u5de5\u56ed\u533a",
                  id: "\u77f3\u5bb6\u5e84\u5faa\u73af\u5316\u5de5\u56ed\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8f9b\u96c6\u5e02",
                  id: "\u8f9b\u96c6\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u664b\u5dde\u5e02",
                  id: "\u664b\u5dde\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u4e50\u5e02",
                  id: "\u65b0\u4e50\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5510\u5c71\u5e02",
              id: "\u5510\u5c71\u5e02",
              subArea: [
                {
                  areaName: "\u8def\u5357\u533a",
                  id: "\u8def\u5357\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8def\u5317\u533a",
                  id: "\u8def\u5317\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u53e4\u51b6\u533a",
                  id: "\u53e4\u51b6\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5f00\u5e73\u533a",
                  id: "\u5f00\u5e73\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e30\u5357\u533a",
                  id: "\u4e30\u5357\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e30\u6da6\u533a",
                  id: "\u4e30\u6da6\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u66f9\u5983\u7538\u533a",
                  id: "\u66f9\u5983\u7538\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6ee6\u5357\u53bf",
                  id: "\u6ee6\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e50\u4ead\u53bf",
                  id: "\u4e50\u4ead\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8fc1\u897f\u53bf",
                  id: "\u8fc1\u897f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7389\u7530\u53bf",
                  id: "\u7389\u7530\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6cb3\u5317\u5510\u5c71\u82a6\u53f0\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  id: "\u6cb3\u5317\u5510\u5c71\u82a6\u53f0\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5510\u5c71\u5e02\u6c49\u6cbd\u7ba1\u7406\u533a",
                  id: "\u5510\u5c71\u5e02\u6c49\u6cbd\u7ba1\u7406\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5510\u5c71\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u5510\u5c71\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6cb3\u5317\u5510\u5c71\u6d77\u6e2f\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  id: "\u6cb3\u5317\u5510\u5c71\u6d77\u6e2f\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9075\u5316\u5e02",
                  id: "\u9075\u5316\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u8fc1\u5b89\u5e02",
                  id: "\u8fc1\u5b89\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6ee6\u5dde\u5e02",
                  id: "\u6ee6\u5dde\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u79e6\u7687\u5c9b\u5e02",
              id: "\u79e6\u7687\u5c9b\u5e02",
              subArea: [
                {
                  areaName: "\u6d77\u6e2f\u533a",
                  id: "\u6d77\u6e2f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5c71\u6d77\u5173\u533a",
                  id: "\u5c71\u6d77\u5173\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5317\u6234\u6cb3\u533a",
                  id: "\u5317\u6234\u6cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u629a\u5b81\u533a",
                  id: "\u629a\u5b81\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9752\u9f99\u6ee1\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u9752\u9f99\u6ee1\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u660c\u9ece\u53bf",
                  id: "\u660c\u9ece\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5362\u9f99\u53bf",
                  id: "\u5362\u9f99\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u79e6\u7687\u5c9b\u5e02\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u79e6\u7687\u5c9b\u5e02\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5317\u6234\u6cb3\u65b0\u533a",
                  id: "\u5317\u6234\u6cb3\u65b0\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u90af\u90f8\u5e02",
              id: "\u90af\u90f8\u5e02",
              subArea: [
                {
                  areaName: "\u90af\u5c71\u533a",
                  id: "\u90af\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e1b\u53f0\u533a",
                  id: "\u4e1b\u53f0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u590d\u5174\u533a",
                  id: "\u590d\u5174\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5cf0\u5cf0\u77ff\u533a",
                  id: "\u5cf0\u5cf0\u77ff\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u80a5\u4e61\u533a",
                  id: "\u80a5\u4e61\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u5e74\u533a",
                  id: "\u6c38\u5e74\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u6f33\u53bf",
                  id: "\u4e34\u6f33\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6210\u5b89\u53bf",
                  id: "\u6210\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u540d\u53bf",
                  id: "\u5927\u540d\u53bf",
                  subArea: [],
                },
                { areaName: "\u6d89\u53bf", id: "\u6d89\u53bf", subArea: [] },
                { areaName: "\u78c1\u53bf", id: "\u78c1\u53bf", subArea: [] },
                { areaName: "\u90b1\u53bf", id: "\u90b1\u53bf", subArea: [] },
                {
                  areaName: "\u9e21\u6cfd\u53bf",
                  id: "\u9e21\u6cfd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e7f\u5e73\u53bf",
                  id: "\u5e7f\u5e73\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9986\u9676\u53bf",
                  id: "\u9986\u9676\u53bf",
                  subArea: [],
                },
                { areaName: "\u9b4f\u53bf", id: "\u9b4f\u53bf", subArea: [] },
                {
                  areaName: "\u66f2\u5468\u53bf",
                  id: "\u66f2\u5468\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u90af\u90f8\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u90af\u90f8\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u90af\u90f8\u5180\u5357\u65b0\u533a",
                  id: "\u90af\u90f8\u5180\u5357\u65b0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u5b89\u5e02",
                  id: "\u6b66\u5b89\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u90a2\u53f0\u5e02",
              id: "\u90a2\u53f0\u5e02",
              subArea: [
                {
                  areaName: "\u8944\u90fd\u533a",
                  id: "\u8944\u90fd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4fe1\u90fd\u533a",
                  id: "\u4fe1\u90fd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4efb\u6cfd\u533a",
                  id: "\u4efb\u6cfd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u548c\u533a",
                  id: "\u5357\u548c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u57ce\u53bf",
                  id: "\u4e34\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5185\u4e18\u53bf",
                  id: "\u5185\u4e18\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u67cf\u4e61\u53bf",
                  id: "\u67cf\u4e61\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9686\u5c27\u53bf",
                  id: "\u9686\u5c27\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b81\u664b\u53bf",
                  id: "\u5b81\u664b\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5de8\u9e7f\u53bf",
                  id: "\u5de8\u9e7f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u6cb3\u53bf",
                  id: "\u65b0\u6cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e7f\u5b97\u53bf",
                  id: "\u5e7f\u5b97\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u4e61\u53bf",
                  id: "\u5e73\u4e61\u53bf",
                  subArea: [],
                },
                { areaName: "\u5a01\u53bf", id: "\u5a01\u53bf", subArea: [] },
                {
                  areaName: "\u6e05\u6cb3\u53bf",
                  id: "\u6e05\u6cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u897f\u53bf",
                  id: "\u4e34\u897f\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6cb3\u5317\u90a2\u53f0\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  id: "\u6cb3\u5317\u90a2\u53f0\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u5bab\u5e02",
                  id: "\u5357\u5bab\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6c99\u6cb3\u5e02",
                  id: "\u6c99\u6cb3\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4fdd\u5b9a\u5e02",
              id: "\u4fdd\u5b9a\u5e02",
              subArea: [
                {
                  areaName: "\u7ade\u79c0\u533a",
                  id: "\u7ade\u79c0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u83b2\u6c60\u533a",
                  id: "\u83b2\u6c60\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6ee1\u57ce\u533a",
                  id: "\u6ee1\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e05\u82d1\u533a",
                  id: "\u6e05\u82d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5f90\u6c34\u533a",
                  id: "\u5f90\u6c34\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d9e\u6c34\u53bf",
                  id: "\u6d9e\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u961c\u5e73\u53bf",
                  id: "\u961c\u5e73\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b9a\u5174\u53bf",
                  id: "\u5b9a\u5174\u53bf",
                  subArea: [],
                },
                { areaName: "\u5510\u53bf", id: "\u5510\u53bf", subArea: [] },
                {
                  areaName: "\u9ad8\u9633\u53bf",
                  id: "\u9ad8\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5bb9\u57ce\u53bf",
                  id: "\u5bb9\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d9e\u6e90\u53bf",
                  id: "\u6d9e\u6e90\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u671b\u90fd\u53bf",
                  id: "\u671b\u90fd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u65b0\u53bf",
                  id: "\u5b89\u65b0\u53bf",
                  subArea: [],
                },
                { areaName: "\u6613\u53bf", id: "\u6613\u53bf", subArea: [] },
                {
                  areaName: "\u66f2\u9633\u53bf",
                  id: "\u66f2\u9633\u53bf",
                  subArea: [],
                },
                { areaName: "\u8821\u53bf", id: "\u8821\u53bf", subArea: [] },
                {
                  areaName: "\u987a\u5e73\u53bf",
                  id: "\u987a\u5e73\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u535a\u91ce\u53bf",
                  id: "\u535a\u91ce\u53bf",
                  subArea: [],
                },
                { areaName: "\u96c4\u53bf", id: "\u96c4\u53bf", subArea: [] },
                {
                  areaName:
                    "\u4fdd\u5b9a\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u4fdd\u5b9a\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4fdd\u5b9a\u767d\u6c9f\u65b0\u57ce",
                  id: "\u4fdd\u5b9a\u767d\u6c9f\u65b0\u57ce",
                  subArea: [],
                },
                {
                  areaName: "\u6dbf\u5dde\u5e02",
                  id: "\u6dbf\u5dde\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5b9a\u5dde\u5e02",
                  id: "\u5b9a\u5dde\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u56fd\u5e02",
                  id: "\u5b89\u56fd\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u9ad8\u7891\u5e97\u5e02",
                  id: "\u9ad8\u7891\u5e97\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5f20\u5bb6\u53e3\u5e02",
              id: "\u5f20\u5bb6\u53e3\u5e02",
              subArea: [
                {
                  areaName: "\u6865\u4e1c\u533a",
                  id: "\u6865\u4e1c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6865\u897f\u533a",
                  id: "\u6865\u897f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5ba3\u5316\u533a",
                  id: "\u5ba3\u5316\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e0b\u82b1\u56ed\u533a",
                  id: "\u4e0b\u82b1\u56ed\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e07\u5168\u533a",
                  id: "\u4e07\u5168\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5d07\u793c\u533a",
                  id: "\u5d07\u793c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5f20\u5317\u53bf",
                  id: "\u5f20\u5317\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5eb7\u4fdd\u53bf",
                  id: "\u5eb7\u4fdd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cbd\u6e90\u53bf",
                  id: "\u6cbd\u6e90\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c1a\u4e49\u53bf",
                  id: "\u5c1a\u4e49\u53bf",
                  subArea: [],
                },
                { areaName: "\u851a\u53bf", id: "\u851a\u53bf", subArea: [] },
                {
                  areaName: "\u9633\u539f\u53bf",
                  id: "\u9633\u539f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6000\u5b89\u53bf",
                  id: "\u6000\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6000\u6765\u53bf",
                  id: "\u6000\u6765\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6dbf\u9e7f\u53bf",
                  id: "\u6dbf\u9e7f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8d64\u57ce\u53bf",
                  id: "\u8d64\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5f20\u5bb6\u53e3\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  id: "\u5f20\u5bb6\u53e3\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5f20\u5bb6\u53e3\u5e02\u5bdf\u5317\u7ba1\u7406\u533a",
                  id: "\u5f20\u5bb6\u53e3\u5e02\u5bdf\u5317\u7ba1\u7406\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5f20\u5bb6\u53e3\u5e02\u585e\u5317\u7ba1\u7406\u533a",
                  id: "\u5f20\u5bb6\u53e3\u5e02\u585e\u5317\u7ba1\u7406\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u627f\u5fb7\u5e02",
              id: "\u627f\u5fb7\u5e02",
              subArea: [
                {
                  areaName: "\u53cc\u6865\u533a",
                  id: "\u53cc\u6865\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u53cc\u6ee6\u533a",
                  id: "\u53cc\u6ee6\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9e70\u624b\u8425\u5b50\u77ff\u533a",
                  id: "\u9e70\u624b\u8425\u5b50\u77ff\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u627f\u5fb7\u53bf",
                  id: "\u627f\u5fb7\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5174\u9686\u53bf",
                  id: "\u5174\u9686\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6ee6\u5e73\u53bf",
                  id: "\u6ee6\u5e73\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9686\u5316\u53bf",
                  id: "\u9686\u5316\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e30\u5b81\u6ee1\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u4e30\u5b81\u6ee1\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5bbd\u57ce\u6ee1\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5bbd\u57ce\u6ee1\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u56f4\u573a\u6ee1\u65cf\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u56f4\u573a\u6ee1\u65cf\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u627f\u5fb7\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u627f\u5fb7\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u6cc9\u5e02",
                  id: "\u5e73\u6cc9\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6ca7\u5dde\u5e02",
              id: "\u6ca7\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u65b0\u534e\u533a",
                  id: "\u65b0\u534e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8fd0\u6cb3\u533a",
                  id: "\u8fd0\u6cb3\u533a",
                  subArea: [],
                },
                { areaName: "\u6ca7\u53bf", id: "\u6ca7\u53bf", subArea: [] },
                { areaName: "\u9752\u53bf", id: "\u9752\u53bf", subArea: [] },
                {
                  areaName: "\u4e1c\u5149\u53bf",
                  id: "\u4e1c\u5149\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d77\u5174\u53bf",
                  id: "\u6d77\u5174\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u76d0\u5c71\u53bf",
                  id: "\u76d0\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8083\u5b81\u53bf",
                  id: "\u8083\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u76ae\u53bf",
                  id: "\u5357\u76ae\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5434\u6865\u53bf",
                  id: "\u5434\u6865\u53bf",
                  subArea: [],
                },
                { areaName: "\u732e\u53bf", id: "\u732e\u53bf", subArea: [] },
                {
                  areaName: "\u5b5f\u6751\u56de\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5b5f\u6751\u56de\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6cb3\u5317\u6ca7\u5dde\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  id: "\u6cb3\u5317\u6ca7\u5dde\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6ca7\u5dde\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u6ca7\u5dde\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6ca7\u5dde\u6e24\u6d77\u65b0\u533a",
                  id: "\u6ca7\u5dde\u6e24\u6d77\u65b0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6cca\u5934\u5e02",
                  id: "\u6cca\u5934\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4efb\u4e18\u5e02",
                  id: "\u4efb\u4e18\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u9ec4\u9a85\u5e02",
                  id: "\u9ec4\u9a85\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6cb3\u95f4\u5e02",
                  id: "\u6cb3\u95f4\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5eca\u574a\u5e02",
              id: "\u5eca\u574a\u5e02",
              subArea: [
                {
                  areaName: "\u5b89\u6b21\u533a",
                  id: "\u5b89\u6b21\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e7f\u9633\u533a",
                  id: "\u5e7f\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u56fa\u5b89\u53bf",
                  id: "\u56fa\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u6e05\u53bf",
                  id: "\u6c38\u6e05\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9999\u6cb3\u53bf",
                  id: "\u9999\u6cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u57ce\u53bf",
                  id: "\u5927\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6587\u5b89\u53bf",
                  id: "\u6587\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u5382\u56de\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5927\u5382\u56de\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5eca\u574a\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u5eca\u574a\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9738\u5dde\u5e02",
                  id: "\u9738\u5dde\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e09\u6cb3\u5e02",
                  id: "\u4e09\u6cb3\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8861\u6c34\u5e02",
              id: "\u8861\u6c34\u5e02",
              subArea: [
                {
                  areaName: "\u6843\u57ce\u533a",
                  id: "\u6843\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5180\u5dde\u533a",
                  id: "\u5180\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u67a3\u5f3a\u53bf",
                  id: "\u67a3\u5f3a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u9091\u53bf",
                  id: "\u6b66\u9091\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u5f3a\u53bf",
                  id: "\u6b66\u5f3a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9976\u9633\u53bf",
                  id: "\u9976\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u5e73\u53bf",
                  id: "\u5b89\u5e73\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6545\u57ce\u53bf",
                  id: "\u6545\u57ce\u53bf",
                  subArea: [],
                },
                { areaName: "\u666f\u53bf", id: "\u666f\u53bf", subArea: [] },
                {
                  areaName: "\u961c\u57ce\u53bf",
                  id: "\u961c\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6cb3\u5317\u8861\u6c34\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u6cb3\u5317\u8861\u6c34\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8861\u6c34\u6ee8\u6e56\u65b0\u533a",
                  id: "\u8861\u6c34\u6ee8\u6e56\u65b0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6df1\u5dde\u5e02",
                  id: "\u6df1\u5dde\u5e02",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u5c71\u897f\u7701",
          id: "\u5c71\u897f\u7701",
          subArea: [
            {
              areaName: "\u592a\u539f\u5e02",
              id: "\u592a\u539f\u5e02",
              subArea: [
                {
                  areaName: "\u5c0f\u5e97\u533a",
                  id: "\u5c0f\u5e97\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8fce\u6cfd\u533a",
                  id: "\u8fce\u6cfd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u674f\u82b1\u5cad\u533a",
                  id: "\u674f\u82b1\u5cad\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5c16\u8349\u576a\u533a",
                  id: "\u5c16\u8349\u576a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e07\u67cf\u6797\u533a",
                  id: "\u4e07\u67cf\u6797\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u664b\u6e90\u533a",
                  id: "\u664b\u6e90\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e05\u5f90\u53bf",
                  id: "\u6e05\u5f90\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9633\u66f2\u53bf",
                  id: "\u9633\u66f2\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5a04\u70e6\u53bf",
                  id: "\u5a04\u70e6\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5c71\u897f\u8f6c\u578b\u7efc\u5408\u6539\u9769\u793a\u8303\u533a",
                  id: "\u5c71\u897f\u8f6c\u578b\u7efc\u5408\u6539\u9769\u793a\u8303\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u53e4\u4ea4\u5e02",
                  id: "\u53e4\u4ea4\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5927\u540c\u5e02",
              id: "\u5927\u540c\u5e02",
              subArea: [
                {
                  areaName: "\u65b0\u8363\u533a",
                  id: "\u65b0\u8363\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u57ce\u533a",
                  id: "\u5e73\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e91\u5188\u533a",
                  id: "\u4e91\u5188\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e91\u5dde\u533a",
                  id: "\u4e91\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9633\u9ad8\u53bf",
                  id: "\u9633\u9ad8\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5929\u9547\u53bf",
                  id: "\u5929\u9547\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e7f\u7075\u53bf",
                  id: "\u5e7f\u7075\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7075\u4e18\u53bf",
                  id: "\u7075\u4e18\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d51\u6e90\u53bf",
                  id: "\u6d51\u6e90\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5de6\u4e91\u53bf",
                  id: "\u5de6\u4e91\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5c71\u897f\u5927\u540c\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  id: "\u5c71\u897f\u5927\u540c\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9633\u6cc9\u5e02",
              id: "\u9633\u6cc9\u5e02",
              subArea: [
                { areaName: "\u57ce\u533a", id: "\u57ce\u533a", subArea: [] },
                { areaName: "\u77ff\u533a", id: "\u77ff\u533a", subArea: [] },
                { areaName: "\u90ca\u533a", id: "\u90ca\u533a", subArea: [] },
                {
                  areaName: "\u5e73\u5b9a\u53bf",
                  id: "\u5e73\u5b9a\u53bf",
                  subArea: [],
                },
                { areaName: "\u76c2\u53bf", id: "\u76c2\u53bf", subArea: [] },
              ],
            },
            {
              areaName: "\u957f\u6cbb\u5e02",
              id: "\u957f\u6cbb\u5e02",
              subArea: [
                {
                  areaName: "\u6f5e\u5dde\u533a",
                  id: "\u6f5e\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e0a\u515a\u533a",
                  id: "\u4e0a\u515a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5c6f\u7559\u533a",
                  id: "\u5c6f\u7559\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6f5e\u57ce\u533a",
                  id: "\u6f5e\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8944\u57a3\u53bf",
                  id: "\u8944\u57a3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u987a\u53bf",
                  id: "\u5e73\u987a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9ece\u57ce\u53bf",
                  id: "\u9ece\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u58f6\u5173\u53bf",
                  id: "\u58f6\u5173\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u5b50\u53bf",
                  id: "\u957f\u5b50\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u4e61\u53bf",
                  id: "\u6b66\u4e61\u53bf",
                  subArea: [],
                },
                { areaName: "\u6c81\u53bf", id: "\u6c81\u53bf", subArea: [] },
                {
                  areaName: "\u6c81\u6e90\u53bf",
                  id: "\u6c81\u6e90\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u664b\u57ce\u5e02",
              id: "\u664b\u57ce\u5e02",
              subArea: [
                { areaName: "\u57ce\u533a", id: "\u57ce\u533a", subArea: [] },
                {
                  areaName: "\u6c81\u6c34\u53bf",
                  id: "\u6c81\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9633\u57ce\u53bf",
                  id: "\u9633\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9675\u5ddd\u53bf",
                  id: "\u9675\u5ddd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cfd\u5dde\u53bf",
                  id: "\u6cfd\u5dde\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9ad8\u5e73\u5e02",
                  id: "\u9ad8\u5e73\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6714\u5dde\u5e02",
              id: "\u6714\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u6714\u57ce\u533a",
                  id: "\u6714\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u9c81\u533a",
                  id: "\u5e73\u9c81\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5c71\u9634\u53bf",
                  id: "\u5c71\u9634\u53bf",
                  subArea: [],
                },
                { areaName: "\u5e94\u53bf", id: "\u5e94\u53bf", subArea: [] },
                {
                  areaName: "\u53f3\u7389\u53bf",
                  id: "\u53f3\u7389\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5c71\u897f\u6714\u5dde\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  id: "\u5c71\u897f\u6714\u5dde\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6000\u4ec1\u5e02",
                  id: "\u6000\u4ec1\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u664b\u4e2d\u5e02",
              id: "\u664b\u4e2d\u5e02",
              subArea: [
                {
                  areaName: "\u6986\u6b21\u533a",
                  id: "\u6986\u6b21\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u592a\u8c37\u533a",
                  id: "\u592a\u8c37\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6986\u793e\u53bf",
                  id: "\u6986\u793e\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5de6\u6743\u53bf",
                  id: "\u5de6\u6743\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u548c\u987a\u53bf",
                  id: "\u548c\u987a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6614\u9633\u53bf",
                  id: "\u6614\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5bff\u9633\u53bf",
                  id: "\u5bff\u9633\u53bf",
                  subArea: [],
                },
                { areaName: "\u7941\u53bf", id: "\u7941\u53bf", subArea: [] },
                {
                  areaName: "\u5e73\u9065\u53bf",
                  id: "\u5e73\u9065\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7075\u77f3\u53bf",
                  id: "\u7075\u77f3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4ecb\u4f11\u5e02",
                  id: "\u4ecb\u4f11\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8fd0\u57ce\u5e02",
              id: "\u8fd0\u57ce\u5e02",
              subArea: [
                {
                  areaName: "\u76d0\u6e56\u533a",
                  id: "\u76d0\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u7317\u53bf",
                  id: "\u4e34\u7317\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e07\u8363\u53bf",
                  id: "\u4e07\u8363\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u95fb\u559c\u53bf",
                  id: "\u95fb\u559c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7a37\u5c71\u53bf",
                  id: "\u7a37\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u7edb\u53bf",
                  id: "\u65b0\u7edb\u53bf",
                  subArea: [],
                },
                { areaName: "\u7edb\u53bf", id: "\u7edb\u53bf", subArea: [] },
                {
                  areaName: "\u57a3\u66f2\u53bf",
                  id: "\u57a3\u66f2\u53bf",
                  subArea: [],
                },
                { areaName: "\u590f\u53bf", id: "\u590f\u53bf", subArea: [] },
                {
                  areaName: "\u5e73\u9646\u53bf",
                  id: "\u5e73\u9646\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u82ae\u57ce\u53bf",
                  id: "\u82ae\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u6d4e\u5e02",
                  id: "\u6c38\u6d4e\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6cb3\u6d25\u5e02",
                  id: "\u6cb3\u6d25\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5ffb\u5dde\u5e02",
              id: "\u5ffb\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u5ffb\u5e9c\u533a",
                  id: "\u5ffb\u5e9c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b9a\u8944\u53bf",
                  id: "\u5b9a\u8944\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e94\u53f0\u53bf",
                  id: "\u4e94\u53f0\u53bf",
                  subArea: [],
                },
                { areaName: "\u4ee3\u53bf", id: "\u4ee3\u53bf", subArea: [] },
                {
                  areaName: "\u7e41\u5cd9\u53bf",
                  id: "\u7e41\u5cd9\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b81\u6b66\u53bf",
                  id: "\u5b81\u6b66\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9759\u4e50\u53bf",
                  id: "\u9759\u4e50\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u795e\u6c60\u53bf",
                  id: "\u795e\u6c60\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e94\u5be8\u53bf",
                  id: "\u4e94\u5be8\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5ca2\u5c9a\u53bf",
                  id: "\u5ca2\u5c9a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cb3\u66f2\u53bf",
                  id: "\u6cb3\u66f2\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4fdd\u5fb7\u53bf",
                  id: "\u4fdd\u5fb7\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u504f\u5173\u53bf",
                  id: "\u504f\u5173\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e94\u53f0\u5c71\u98ce\u666f\u540d\u80dc\u533a",
                  id: "\u4e94\u53f0\u5c71\u98ce\u666f\u540d\u80dc\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u539f\u5e73\u5e02",
                  id: "\u539f\u5e73\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e34\u6c7e\u5e02",
              id: "\u4e34\u6c7e\u5e02",
              subArea: [
                {
                  areaName: "\u5c27\u90fd\u533a",
                  id: "\u5c27\u90fd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u66f2\u6c83\u53bf",
                  id: "\u66f2\u6c83\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7ffc\u57ce\u53bf",
                  id: "\u7ffc\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8944\u6c7e\u53bf",
                  id: "\u8944\u6c7e\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d2a\u6d1e\u53bf",
                  id: "\u6d2a\u6d1e\u53bf",
                  subArea: [],
                },
                { areaName: "\u53e4\u53bf", id: "\u53e4\u53bf", subArea: [] },
                {
                  areaName: "\u5b89\u6cfd\u53bf",
                  id: "\u5b89\u6cfd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d6e\u5c71\u53bf",
                  id: "\u6d6e\u5c71\u53bf",
                  subArea: [],
                },
                { areaName: "\u5409\u53bf", id: "\u5409\u53bf", subArea: [] },
                {
                  areaName: "\u4e61\u5b81\u53bf",
                  id: "\u4e61\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u5b81\u53bf",
                  id: "\u5927\u5b81\u53bf",
                  subArea: [],
                },
                { areaName: "\u96b0\u53bf", id: "\u96b0\u53bf", subArea: [] },
                {
                  areaName: "\u6c38\u548c\u53bf",
                  id: "\u6c38\u548c\u53bf",
                  subArea: [],
                },
                { areaName: "\u84b2\u53bf", id: "\u84b2\u53bf", subArea: [] },
                {
                  areaName: "\u6c7e\u897f\u53bf",
                  id: "\u6c7e\u897f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4faf\u9a6c\u5e02",
                  id: "\u4faf\u9a6c\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u970d\u5dde\u5e02",
                  id: "\u970d\u5dde\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5415\u6881\u5e02",
              id: "\u5415\u6881\u5e02",
              subArea: [
                {
                  areaName: "\u79bb\u77f3\u533a",
                  id: "\u79bb\u77f3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6587\u6c34\u53bf",
                  id: "\u6587\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4ea4\u57ce\u53bf",
                  id: "\u4ea4\u57ce\u53bf",
                  subArea: [],
                },
                { areaName: "\u5174\u53bf", id: "\u5174\u53bf", subArea: [] },
                { areaName: "\u4e34\u53bf", id: "\u4e34\u53bf", subArea: [] },
                {
                  areaName: "\u67f3\u6797\u53bf",
                  id: "\u67f3\u6797\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u697c\u53bf",
                  id: "\u77f3\u697c\u53bf",
                  subArea: [],
                },
                { areaName: "\u5c9a\u53bf", id: "\u5c9a\u53bf", subArea: [] },
                {
                  areaName: "\u65b9\u5c71\u53bf",
                  id: "\u65b9\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e2d\u9633\u53bf",
                  id: "\u4e2d\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4ea4\u53e3\u53bf",
                  id: "\u4ea4\u53e3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b5d\u4e49\u5e02",
                  id: "\u5b5d\u4e49\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6c7e\u9633\u5e02",
                  id: "\u6c7e\u9633\u5e02",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u5185\u8499\u53e4\u81ea\u6cbb\u533a",
          id: "\u5185\u8499\u53e4\u81ea\u6cbb\u533a",
          subArea: [
            {
              areaName: "\u547c\u548c\u6d69\u7279\u5e02",
              id: "\u547c\u548c\u6d69\u7279\u5e02",
              subArea: [
                {
                  areaName: "\u65b0\u57ce\u533a",
                  id: "\u65b0\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u56de\u6c11\u533a",
                  id: "\u56de\u6c11\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7389\u6cc9\u533a",
                  id: "\u7389\u6cc9\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8d5b\u7f55\u533a",
                  id: "\u8d5b\u7f55\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u571f\u9ed8\u7279\u5de6\u65d7",
                  id: "\u571f\u9ed8\u7279\u5de6\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u6258\u514b\u6258\u53bf",
                  id: "\u6258\u514b\u6258\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u548c\u6797\u683c\u5c14\u53bf",
                  id: "\u548c\u6797\u683c\u5c14\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6e05\u6c34\u6cb3\u53bf",
                  id: "\u6e05\u6c34\u6cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u5ddd\u53bf",
                  id: "\u6b66\u5ddd\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u547c\u548c\u6d69\u7279\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u547c\u548c\u6d69\u7279\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5305\u5934\u5e02",
              id: "\u5305\u5934\u5e02",
              subArea: [
                {
                  areaName: "\u4e1c\u6cb3\u533a",
                  id: "\u4e1c\u6cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6606\u90fd\u4ed1\u533a",
                  id: "\u6606\u90fd\u4ed1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9752\u5c71\u533a",
                  id: "\u9752\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u62d0\u533a",
                  id: "\u77f3\u62d0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u767d\u4e91\u9102\u535a\u77ff\u533a",
                  id: "\u767d\u4e91\u9102\u535a\u77ff\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e5d\u539f\u533a",
                  id: "\u4e5d\u539f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u571f\u9ed8\u7279\u53f3\u65d7",
                  id: "\u571f\u9ed8\u7279\u53f3\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u56fa\u9633\u53bf",
                  id: "\u56fa\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u8fbe\u5c14\u7f55\u8302\u660e\u5b89\u8054\u5408\u65d7",
                  id: "\u8fbe\u5c14\u7f55\u8302\u660e\u5b89\u8054\u5408\u65d7",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5305\u5934\u7a00\u571f\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u5305\u5934\u7a00\u571f\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e4c\u6d77\u5e02",
              id: "\u4e4c\u6d77\u5e02",
              subArea: [
                {
                  areaName: "\u6d77\u52c3\u6e7e\u533a",
                  id: "\u6d77\u52c3\u6e7e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d77\u5357\u533a",
                  id: "\u6d77\u5357\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e4c\u8fbe\u533a",
                  id: "\u4e4c\u8fbe\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8d64\u5cf0\u5e02",
              id: "\u8d64\u5cf0\u5e02",
              subArea: [
                {
                  areaName: "\u7ea2\u5c71\u533a",
                  id: "\u7ea2\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5143\u5b9d\u5c71\u533a",
                  id: "\u5143\u5b9d\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u677e\u5c71\u533a",
                  id: "\u677e\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u963f\u9c81\u79d1\u5c14\u6c81\u65d7",
                  id: "\u963f\u9c81\u79d1\u5c14\u6c81\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u5df4\u6797\u5de6\u65d7",
                  id: "\u5df4\u6797\u5de6\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u5df4\u6797\u53f3\u65d7",
                  id: "\u5df4\u6797\u53f3\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u6797\u897f\u53bf",
                  id: "\u6797\u897f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u514b\u4ec0\u514b\u817e\u65d7",
                  id: "\u514b\u4ec0\u514b\u817e\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u7fc1\u725b\u7279\u65d7",
                  id: "\u7fc1\u725b\u7279\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u5580\u5587\u6c81\u65d7",
                  id: "\u5580\u5587\u6c81\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u5b81\u57ce\u53bf",
                  id: "\u5b81\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6556\u6c49\u65d7",
                  id: "\u6556\u6c49\u65d7",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u901a\u8fbd\u5e02",
              id: "\u901a\u8fbd\u5e02",
              subArea: [
                {
                  areaName: "\u79d1\u5c14\u6c81\u533a",
                  id: "\u79d1\u5c14\u6c81\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u79d1\u5c14\u6c81\u5de6\u7ffc\u4e2d\u65d7",
                  id: "\u79d1\u5c14\u6c81\u5de6\u7ffc\u4e2d\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u79d1\u5c14\u6c81\u5de6\u7ffc\u540e\u65d7",
                  id: "\u79d1\u5c14\u6c81\u5de6\u7ffc\u540e\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u5f00\u9c81\u53bf",
                  id: "\u5f00\u9c81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e93\u4f26\u65d7",
                  id: "\u5e93\u4f26\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u5948\u66fc\u65d7",
                  id: "\u5948\u66fc\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u624e\u9c81\u7279\u65d7",
                  id: "\u624e\u9c81\u7279\u65d7",
                  subArea: [],
                },
                {
                  areaName:
                    "\u901a\u8fbd\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u901a\u8fbd\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u970d\u6797\u90ed\u52d2\u5e02",
                  id: "\u970d\u6797\u90ed\u52d2\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9102\u5c14\u591a\u65af\u5e02",
              id: "\u9102\u5c14\u591a\u65af\u5e02",
              subArea: [
                {
                  areaName: "\u4e1c\u80dc\u533a",
                  id: "\u4e1c\u80dc\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5eb7\u5df4\u4ec0\u533a",
                  id: "\u5eb7\u5df4\u4ec0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8fbe\u62c9\u7279\u65d7",
                  id: "\u8fbe\u62c9\u7279\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u51c6\u683c\u5c14\u65d7",
                  id: "\u51c6\u683c\u5c14\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u9102\u6258\u514b\u524d\u65d7",
                  id: "\u9102\u6258\u514b\u524d\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u9102\u6258\u514b\u65d7",
                  id: "\u9102\u6258\u514b\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u676d\u9526\u65d7",
                  id: "\u676d\u9526\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u4e4c\u5ba1\u65d7",
                  id: "\u4e4c\u5ba1\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u4f0a\u91d1\u970d\u6d1b\u65d7",
                  id: "\u4f0a\u91d1\u970d\u6d1b\u65d7",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u547c\u4f26\u8d1d\u5c14\u5e02",
              id: "\u547c\u4f26\u8d1d\u5c14\u5e02",
              subArea: [
                {
                  areaName: "\u6d77\u62c9\u5c14\u533a",
                  id: "\u6d77\u62c9\u5c14\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u624e\u8d49\u8bfa\u5c14\u533a",
                  id: "\u624e\u8d49\u8bfa\u5c14\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u963f\u8363\u65d7",
                  id: "\u963f\u8363\u65d7",
                  subArea: [],
                },
                {
                  areaName:
                    "\u83ab\u529b\u8fbe\u74e6\u8fbe\u65a1\u5c14\u65cf\u81ea\u6cbb\u65d7",
                  id: "\u83ab\u529b\u8fbe\u74e6\u8fbe\u65a1\u5c14\u65cf\u81ea\u6cbb\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u9102\u4f26\u6625\u81ea\u6cbb\u65d7",
                  id: "\u9102\u4f26\u6625\u81ea\u6cbb\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u9102\u6e29\u514b\u65cf\u81ea\u6cbb\u65d7",
                  id: "\u9102\u6e29\u514b\u65cf\u81ea\u6cbb\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u9648\u5df4\u5c14\u864e\u65d7",
                  id: "\u9648\u5df4\u5c14\u864e\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u5df4\u5c14\u864e\u5de6\u65d7",
                  id: "\u65b0\u5df4\u5c14\u864e\u5de6\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u5df4\u5c14\u864e\u53f3\u65d7",
                  id: "\u65b0\u5df4\u5c14\u864e\u53f3\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u6ee1\u6d32\u91cc\u5e02",
                  id: "\u6ee1\u6d32\u91cc\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u7259\u514b\u77f3\u5e02",
                  id: "\u7259\u514b\u77f3\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u624e\u5170\u5c6f\u5e02",
                  id: "\u624e\u5170\u5c6f\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u989d\u5c14\u53e4\u7eb3\u5e02",
                  id: "\u989d\u5c14\u53e4\u7eb3\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6839\u6cb3\u5e02",
                  id: "\u6839\u6cb3\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5df4\u5f66\u6dd6\u5c14\u5e02",
              id: "\u5df4\u5f66\u6dd6\u5c14\u5e02",
              subArea: [
                {
                  areaName: "\u4e34\u6cb3\u533a",
                  id: "\u4e34\u6cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e94\u539f\u53bf",
                  id: "\u4e94\u539f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u78f4\u53e3\u53bf",
                  id: "\u78f4\u53e3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e4c\u62c9\u7279\u524d\u65d7",
                  id: "\u4e4c\u62c9\u7279\u524d\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u4e4c\u62c9\u7279\u4e2d\u65d7",
                  id: "\u4e4c\u62c9\u7279\u4e2d\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u4e4c\u62c9\u7279\u540e\u65d7",
                  id: "\u4e4c\u62c9\u7279\u540e\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u676d\u9526\u540e\u65d7",
                  id: "\u676d\u9526\u540e\u65d7",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e4c\u5170\u5bdf\u5e03\u5e02",
              id: "\u4e4c\u5170\u5bdf\u5e03\u5e02",
              subArea: [
                {
                  areaName: "\u96c6\u5b81\u533a",
                  id: "\u96c6\u5b81\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5353\u8d44\u53bf",
                  id: "\u5353\u8d44\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5316\u5fb7\u53bf",
                  id: "\u5316\u5fb7\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5546\u90fd\u53bf",
                  id: "\u5546\u90fd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5174\u548c\u53bf",
                  id: "\u5174\u548c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u51c9\u57ce\u53bf",
                  id: "\u51c9\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5bdf\u54c8\u5c14\u53f3\u7ffc\u524d\u65d7",
                  id: "\u5bdf\u54c8\u5c14\u53f3\u7ffc\u524d\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u5bdf\u54c8\u5c14\u53f3\u7ffc\u4e2d\u65d7",
                  id: "\u5bdf\u54c8\u5c14\u53f3\u7ffc\u4e2d\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u5bdf\u54c8\u5c14\u53f3\u7ffc\u540e\u65d7",
                  id: "\u5bdf\u54c8\u5c14\u53f3\u7ffc\u540e\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u56db\u5b50\u738b\u65d7",
                  id: "\u56db\u5b50\u738b\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u4e30\u9547\u5e02",
                  id: "\u4e30\u9547\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5174\u5b89\u76df",
              id: "\u5174\u5b89\u76df",
              subArea: [
                {
                  areaName: "\u4e4c\u5170\u6d69\u7279\u5e02",
                  id: "\u4e4c\u5170\u6d69\u7279\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u963f\u5c14\u5c71\u5e02",
                  id: "\u963f\u5c14\u5c71\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u79d1\u5c14\u6c81\u53f3\u7ffc\u524d\u65d7",
                  id: "\u79d1\u5c14\u6c81\u53f3\u7ffc\u524d\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u79d1\u5c14\u6c81\u53f3\u7ffc\u4e2d\u65d7",
                  id: "\u79d1\u5c14\u6c81\u53f3\u7ffc\u4e2d\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u624e\u8d49\u7279\u65d7",
                  id: "\u624e\u8d49\u7279\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u7a81\u6cc9\u53bf",
                  id: "\u7a81\u6cc9\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9521\u6797\u90ed\u52d2\u76df",
              id: "\u9521\u6797\u90ed\u52d2\u76df",
              subArea: [
                {
                  areaName: "\u4e8c\u8fde\u6d69\u7279\u5e02",
                  id: "\u4e8c\u8fde\u6d69\u7279\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u9521\u6797\u6d69\u7279\u5e02",
                  id: "\u9521\u6797\u6d69\u7279\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u963f\u5df4\u560e\u65d7",
                  id: "\u963f\u5df4\u560e\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u82cf\u5c3c\u7279\u5de6\u65d7",
                  id: "\u82cf\u5c3c\u7279\u5de6\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u82cf\u5c3c\u7279\u53f3\u65d7",
                  id: "\u82cf\u5c3c\u7279\u53f3\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u4e4c\u73e0\u7a46\u6c81\u65d7",
                  id: "\u4e1c\u4e4c\u73e0\u7a46\u6c81\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u4e4c\u73e0\u7a46\u6c81\u65d7",
                  id: "\u897f\u4e4c\u73e0\u7a46\u6c81\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u592a\u4ec6\u5bfa\u65d7",
                  id: "\u592a\u4ec6\u5bfa\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u9576\u9ec4\u65d7",
                  id: "\u9576\u9ec4\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u6b63\u9576\u767d\u65d7",
                  id: "\u6b63\u9576\u767d\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u6b63\u84dd\u65d7",
                  id: "\u6b63\u84dd\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u591a\u4f26\u53bf",
                  id: "\u591a\u4f26\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u4e4c\u62c9\u76d6\u7ba1\u7406\u533a\u7ba1\u59d4\u4f1a",
                  id: "\u4e4c\u62c9\u76d6\u7ba1\u7406\u533a\u7ba1\u59d4\u4f1a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u963f\u62c9\u5584\u76df",
              id: "\u963f\u62c9\u5584\u76df",
              subArea: [
                {
                  areaName: "\u963f\u62c9\u5584\u5de6\u65d7",
                  id: "\u963f\u62c9\u5584\u5de6\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u963f\u62c9\u5584\u53f3\u65d7",
                  id: "\u963f\u62c9\u5584\u53f3\u65d7",
                  subArea: [],
                },
                {
                  areaName: "\u989d\u6d4e\u7eb3\u65d7",
                  id: "\u989d\u6d4e\u7eb3\u65d7",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5185\u8499\u53e4\u963f\u62c9\u5584\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u5185\u8499\u53e4\u963f\u62c9\u5584\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u8fbd\u5b81\u7701",
          id: "\u8fbd\u5b81\u7701",
          subArea: [
            {
              areaName: "\u6c88\u9633\u5e02",
              id: "\u6c88\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u548c\u5e73\u533a",
                  id: "\u548c\u5e73\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c88\u6cb3\u533a",
                  id: "\u6c88\u6cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u4e1c\u533a",
                  id: "\u5927\u4e1c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7687\u59d1\u533a",
                  id: "\u7687\u59d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u94c1\u897f\u533a",
                  id: "\u94c1\u897f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u82cf\u5bb6\u5c6f\u533a",
                  id: "\u82cf\u5bb6\u5c6f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d51\u5357\u533a",
                  id: "\u6d51\u5357\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c88\u5317\u65b0\u533a",
                  id: "\u6c88\u5317\u65b0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e8e\u6d2a\u533a",
                  id: "\u4e8e\u6d2a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8fbd\u4e2d\u533a",
                  id: "\u8fbd\u4e2d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5eb7\u5e73\u53bf",
                  id: "\u5eb7\u5e73\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cd5\u5e93\u53bf",
                  id: "\u6cd5\u5e93\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u6c11\u5e02",
                  id: "\u65b0\u6c11\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5927\u8fde\u5e02",
              id: "\u5927\u8fde\u5e02",
              subArea: [
                {
                  areaName: "\u4e2d\u5c71\u533a",
                  id: "\u4e2d\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u5c97\u533a",
                  id: "\u897f\u5c97\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c99\u6cb3\u53e3\u533a",
                  id: "\u6c99\u6cb3\u53e3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7518\u4e95\u5b50\u533a",
                  id: "\u7518\u4e95\u5b50\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65c5\u987a\u53e3\u533a",
                  id: "\u65c5\u987a\u53e3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u5dde\u533a",
                  id: "\u91d1\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u666e\u5170\u5e97\u533a",
                  id: "\u666e\u5170\u5e97\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u6d77\u53bf",
                  id: "\u957f\u6d77\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u74e6\u623f\u5e97\u5e02",
                  id: "\u74e6\u623f\u5e97\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5e84\u6cb3\u5e02",
                  id: "\u5e84\u6cb3\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u978d\u5c71\u5e02",
              id: "\u978d\u5c71\u5e02",
              subArea: [
                {
                  areaName: "\u94c1\u4e1c\u533a",
                  id: "\u94c1\u4e1c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u94c1\u897f\u533a",
                  id: "\u94c1\u897f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7acb\u5c71\u533a",
                  id: "\u7acb\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5343\u5c71\u533a",
                  id: "\u5343\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u53f0\u5b89\u53bf",
                  id: "\u53f0\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5cab\u5ca9\u6ee1\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5cab\u5ca9\u6ee1\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d77\u57ce\u5e02",
                  id: "\u6d77\u57ce\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u629a\u987a\u5e02",
              id: "\u629a\u987a\u5e02",
              subArea: [
                {
                  areaName: "\u65b0\u629a\u533a",
                  id: "\u65b0\u629a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u6d32\u533a",
                  id: "\u4e1c\u6d32\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u671b\u82b1\u533a",
                  id: "\u671b\u82b1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u987a\u57ce\u533a",
                  id: "\u987a\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u629a\u987a\u53bf",
                  id: "\u629a\u987a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u5bbe\u6ee1\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u65b0\u5bbe\u6ee1\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6e05\u539f\u6ee1\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u6e05\u539f\u6ee1\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u672c\u6eaa\u5e02",
              id: "\u672c\u6eaa\u5e02",
              subArea: [
                {
                  areaName: "\u5e73\u5c71\u533a",
                  id: "\u5e73\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6eaa\u6e56\u533a",
                  id: "\u6eaa\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u660e\u5c71\u533a",
                  id: "\u660e\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u82ac\u533a",
                  id: "\u5357\u82ac\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u672c\u6eaa\u6ee1\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u672c\u6eaa\u6ee1\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6853\u4ec1\u6ee1\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u6853\u4ec1\u6ee1\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e39\u4e1c\u5e02",
              id: "\u4e39\u4e1c\u5e02",
              subArea: [
                {
                  areaName: "\u5143\u5b9d\u533a",
                  id: "\u5143\u5b9d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u632f\u5174\u533a",
                  id: "\u632f\u5174\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u632f\u5b89\u533a",
                  id: "\u632f\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5bbd\u7538\u6ee1\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5bbd\u7538\u6ee1\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u6e2f\u5e02",
                  id: "\u4e1c\u6e2f\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u51e4\u57ce\u5e02",
                  id: "\u51e4\u57ce\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9526\u5dde\u5e02",
              id: "\u9526\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u53e4\u5854\u533a",
                  id: "\u53e4\u5854\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u51cc\u6cb3\u533a",
                  id: "\u51cc\u6cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u592a\u548c\u533a",
                  id: "\u592a\u548c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9ed1\u5c71\u53bf",
                  id: "\u9ed1\u5c71\u53bf",
                  subArea: [],
                },
                { areaName: "\u4e49\u53bf", id: "\u4e49\u53bf", subArea: [] },
                {
                  areaName: "\u51cc\u6d77\u5e02",
                  id: "\u51cc\u6d77\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5317\u9547\u5e02",
                  id: "\u5317\u9547\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8425\u53e3\u5e02",
              id: "\u8425\u53e3\u5e02",
              subArea: [
                {
                  areaName: "\u7ad9\u524d\u533a",
                  id: "\u7ad9\u524d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u5e02\u533a",
                  id: "\u897f\u5e02\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9c85\u9c7c\u5708\u533a",
                  id: "\u9c85\u9c7c\u5708\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8001\u8fb9\u533a",
                  id: "\u8001\u8fb9\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u76d6\u5dde\u5e02",
                  id: "\u76d6\u5dde\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u77f3\u6865\u5e02",
                  id: "\u5927\u77f3\u6865\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u961c\u65b0\u5e02",
              id: "\u961c\u65b0\u5e02",
              subArea: [
                {
                  areaName: "\u6d77\u5dde\u533a",
                  id: "\u6d77\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u90b1\u533a",
                  id: "\u65b0\u90b1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u592a\u5e73\u533a",
                  id: "\u592a\u5e73\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e05\u6cb3\u95e8\u533a",
                  id: "\u6e05\u6cb3\u95e8\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7ec6\u6cb3\u533a",
                  id: "\u7ec6\u6cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u961c\u65b0\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u961c\u65b0\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5f70\u6b66\u53bf",
                  id: "\u5f70\u6b66\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8fbd\u9633\u5e02",
              id: "\u8fbd\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u767d\u5854\u533a",
                  id: "\u767d\u5854\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6587\u5723\u533a",
                  id: "\u6587\u5723\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b8f\u4f1f\u533a",
                  id: "\u5b8f\u4f1f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5f13\u957f\u5cad\u533a",
                  id: "\u5f13\u957f\u5cad\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u592a\u5b50\u6cb3\u533a",
                  id: "\u592a\u5b50\u6cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8fbd\u9633\u53bf",
                  id: "\u8fbd\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u706f\u5854\u5e02",
                  id: "\u706f\u5854\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u76d8\u9526\u5e02",
              id: "\u76d8\u9526\u5e02",
              subArea: [
                {
                  areaName: "\u53cc\u53f0\u5b50\u533a",
                  id: "\u53cc\u53f0\u5b50\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5174\u9686\u53f0\u533a",
                  id: "\u5174\u9686\u53f0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u6d3c\u533a",
                  id: "\u5927\u6d3c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u76d8\u5c71\u53bf",
                  id: "\u76d8\u5c71\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u94c1\u5cad\u5e02",
              id: "\u94c1\u5cad\u5e02",
              subArea: [
                {
                  areaName: "\u94f6\u5dde\u533a",
                  id: "\u94f6\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e05\u6cb3\u533a",
                  id: "\u6e05\u6cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u94c1\u5cad\u53bf",
                  id: "\u94c1\u5cad\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u4e30\u53bf",
                  id: "\u897f\u4e30\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u660c\u56fe\u53bf",
                  id: "\u660c\u56fe\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8c03\u5175\u5c71\u5e02",
                  id: "\u8c03\u5175\u5c71\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5f00\u539f\u5e02",
                  id: "\u5f00\u539f\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u671d\u9633\u5e02",
              id: "\u671d\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u53cc\u5854\u533a",
                  id: "\u53cc\u5854\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u57ce\u533a",
                  id: "\u9f99\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u671d\u9633\u53bf",
                  id: "\u671d\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5efa\u5e73\u53bf",
                  id: "\u5efa\u5e73\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5580\u5587\u6c81\u5de6\u7ffc\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5580\u5587\u6c81\u5de6\u7ffc\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5317\u7968\u5e02",
                  id: "\u5317\u7968\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u51cc\u6e90\u5e02",
                  id: "\u51cc\u6e90\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u846b\u82a6\u5c9b\u5e02",
              id: "\u846b\u82a6\u5c9b\u5e02",
              subArea: [
                {
                  areaName: "\u8fde\u5c71\u533a",
                  id: "\u8fde\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u6e2f\u533a",
                  id: "\u9f99\u6e2f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u7968\u533a",
                  id: "\u5357\u7968\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7ee5\u4e2d\u53bf",
                  id: "\u7ee5\u4e2d\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5efa\u660c\u53bf",
                  id: "\u5efa\u660c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5174\u57ce\u5e02",
                  id: "\u5174\u57ce\u5e02",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u5409\u6797\u7701",
          id: "\u5409\u6797\u7701",
          subArea: [
            {
              areaName: "\u957f\u6625\u5e02",
              id: "\u957f\u6625\u5e02",
              subArea: [
                {
                  areaName: "\u5357\u5173\u533a",
                  id: "\u5357\u5173\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5bbd\u57ce\u533a",
                  id: "\u5bbd\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u671d\u9633\u533a",
                  id: "\u671d\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e8c\u9053\u533a",
                  id: "\u4e8c\u9053\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7eff\u56ed\u533a",
                  id: "\u7eff\u56ed\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u53cc\u9633\u533a",
                  id: "\u53cc\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e5d\u53f0\u533a",
                  id: "\u4e5d\u53f0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u519c\u5b89\u53bf",
                  id: "\u519c\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u957f\u6625\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u957f\u6625\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u957f\u6625\u51c0\u6708\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u957f\u6625\u51c0\u6708\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u957f\u6625\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u957f\u6625\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u957f\u6625\u6c7d\u8f66\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u957f\u6625\u6c7d\u8f66\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6986\u6811\u5e02",
                  id: "\u6986\u6811\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5fb7\u60e0\u5e02",
                  id: "\u5fb7\u60e0\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u516c\u4e3b\u5cad\u5e02",
                  id: "\u516c\u4e3b\u5cad\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5409\u6797\u5e02",
              id: "\u5409\u6797\u5e02",
              subArea: [
                {
                  areaName: "\u660c\u9091\u533a",
                  id: "\u660c\u9091\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u6f6d\u533a",
                  id: "\u9f99\u6f6d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8239\u8425\u533a",
                  id: "\u8239\u8425\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e30\u6ee1\u533a",
                  id: "\u4e30\u6ee1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u5409\u53bf",
                  id: "\u6c38\u5409\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5409\u6797\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  id: "\u5409\u6797\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5409\u6797\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u5409\u6797\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5409\u6797\u4e2d\u56fd\u65b0\u52a0\u5761\u98df\u54c1\u533a",
                  id: "\u5409\u6797\u4e2d\u56fd\u65b0\u52a0\u5761\u98df\u54c1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u86df\u6cb3\u5e02",
                  id: "\u86df\u6cb3\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6866\u7538\u5e02",
                  id: "\u6866\u7538\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u8212\u5170\u5e02",
                  id: "\u8212\u5170\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u78d0\u77f3\u5e02",
                  id: "\u78d0\u77f3\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u56db\u5e73\u5e02",
              id: "\u56db\u5e73\u5e02",
              subArea: [
                {
                  areaName: "\u94c1\u897f\u533a",
                  id: "\u94c1\u897f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u94c1\u4e1c\u533a",
                  id: "\u94c1\u4e1c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u68a8\u6811\u53bf",
                  id: "\u68a8\u6811\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4f0a\u901a\u6ee1\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u4f0a\u901a\u6ee1\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u53cc\u8fbd\u5e02",
                  id: "\u53cc\u8fbd\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8fbd\u6e90\u5e02",
              id: "\u8fbd\u6e90\u5e02",
              subArea: [
                {
                  areaName: "\u9f99\u5c71\u533a",
                  id: "\u9f99\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u5b89\u533a",
                  id: "\u897f\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u4e30\u53bf",
                  id: "\u4e1c\u4e30\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u8fbd\u53bf",
                  id: "\u4e1c\u8fbd\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u901a\u5316\u5e02",
              id: "\u901a\u5316\u5e02",
              subArea: [
                {
                  areaName: "\u4e1c\u660c\u533a",
                  id: "\u4e1c\u660c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e8c\u9053\u6c5f\u533a",
                  id: "\u4e8c\u9053\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u901a\u5316\u53bf",
                  id: "\u901a\u5316\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8f89\u5357\u53bf",
                  id: "\u8f89\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u67f3\u6cb3\u53bf",
                  id: "\u67f3\u6cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6885\u6cb3\u53e3\u5e02",
                  id: "\u6885\u6cb3\u53e3\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u96c6\u5b89\u5e02",
                  id: "\u96c6\u5b89\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u767d\u5c71\u5e02",
              id: "\u767d\u5c71\u5e02",
              subArea: [
                {
                  areaName: "\u6d51\u6c5f\u533a",
                  id: "\u6d51\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c5f\u6e90\u533a",
                  id: "\u6c5f\u6e90\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u629a\u677e\u53bf",
                  id: "\u629a\u677e\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9756\u5b87\u53bf",
                  id: "\u9756\u5b87\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u767d\u671d\u9c9c\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u957f\u767d\u671d\u9c9c\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u6c5f\u5e02",
                  id: "\u4e34\u6c5f\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u677e\u539f\u5e02",
              id: "\u677e\u539f\u5e02",
              subArea: [
                {
                  areaName: "\u5b81\u6c5f\u533a",
                  id: "\u5b81\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u524d\u90ed\u5c14\u7f57\u65af\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u524d\u90ed\u5c14\u7f57\u65af\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u5cad\u53bf",
                  id: "\u957f\u5cad\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e7e\u5b89\u53bf",
                  id: "\u4e7e\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5409\u6797\u677e\u539f\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  id: "\u5409\u6797\u677e\u539f\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6276\u4f59\u5e02",
                  id: "\u6276\u4f59\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u767d\u57ce\u5e02",
              id: "\u767d\u57ce\u5e02",
              subArea: [
                {
                  areaName: "\u6d2e\u5317\u533a",
                  id: "\u6d2e\u5317\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9547\u8d49\u53bf",
                  id: "\u9547\u8d49\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u901a\u6986\u53bf",
                  id: "\u901a\u6986\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5409\u6797\u767d\u57ce\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  id: "\u5409\u6797\u767d\u57ce\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d2e\u5357\u5e02",
                  id: "\u6d2e\u5357\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u5b89\u5e02",
                  id: "\u5927\u5b89\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5ef6\u8fb9\u671d\u9c9c\u65cf\u81ea\u6cbb\u5dde",
              id: "\u5ef6\u8fb9\u671d\u9c9c\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u5ef6\u5409\u5e02",
                  id: "\u5ef6\u5409\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u56fe\u4eec\u5e02",
                  id: "\u56fe\u4eec\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6566\u5316\u5e02",
                  id: "\u6566\u5316\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u73f2\u6625\u5e02",
                  id: "\u73f2\u6625\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u4e95\u5e02",
                  id: "\u9f99\u4e95\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u548c\u9f99\u5e02",
                  id: "\u548c\u9f99\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6c6a\u6e05\u53bf",
                  id: "\u6c6a\u6e05\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u56fe\u53bf",
                  id: "\u5b89\u56fe\u53bf",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u9ed1\u9f99\u6c5f\u7701",
          id: "\u9ed1\u9f99\u6c5f\u7701",
          subArea: [
            {
              areaName: "\u54c8\u5c14\u6ee8\u5e02",
              id: "\u54c8\u5c14\u6ee8\u5e02",
              subArea: [
                {
                  areaName: "\u9053\u91cc\u533a",
                  id: "\u9053\u91cc\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u5c97\u533a",
                  id: "\u5357\u5c97\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9053\u5916\u533a",
                  id: "\u9053\u5916\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u623f\u533a",
                  id: "\u5e73\u623f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u677e\u5317\u533a",
                  id: "\u677e\u5317\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9999\u574a\u533a",
                  id: "\u9999\u574a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u547c\u5170\u533a",
                  id: "\u547c\u5170\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u963f\u57ce\u533a",
                  id: "\u963f\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u53cc\u57ce\u533a",
                  id: "\u53cc\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4f9d\u5170\u53bf",
                  id: "\u4f9d\u5170\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65b9\u6b63\u53bf",
                  id: "\u65b9\u6b63\u53bf",
                  subArea: [],
                },
                { areaName: "\u5bbe\u53bf", id: "\u5bbe\u53bf", subArea: [] },
                {
                  areaName: "\u5df4\u5f66\u53bf",
                  id: "\u5df4\u5f66\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6728\u5170\u53bf",
                  id: "\u6728\u5170\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u901a\u6cb3\u53bf",
                  id: "\u901a\u6cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5ef6\u5bff\u53bf",
                  id: "\u5ef6\u5bff\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c1a\u5fd7\u5e02",
                  id: "\u5c1a\u5fd7\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e94\u5e38\u5e02",
                  id: "\u4e94\u5e38\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9f50\u9f50\u54c8\u5c14\u5e02",
              id: "\u9f50\u9f50\u54c8\u5c14\u5e02",
              subArea: [
                {
                  areaName: "\u9f99\u6c99\u533a",
                  id: "\u9f99\u6c99\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5efa\u534e\u533a",
                  id: "\u5efa\u534e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u94c1\u950b\u533a",
                  id: "\u94c1\u950b\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6602\u6602\u6eaa\u533a",
                  id: "\u6602\u6602\u6eaa\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5bcc\u62c9\u5c14\u57fa\u533a",
                  id: "\u5bcc\u62c9\u5c14\u57fa\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u78be\u5b50\u5c71\u533a",
                  id: "\u78be\u5b50\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6885\u91cc\u65af\u8fbe\u65a1\u5c14\u65cf\u533a",
                  id: "\u6885\u91cc\u65af\u8fbe\u65a1\u5c14\u65cf\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u6c5f\u53bf",
                  id: "\u9f99\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4f9d\u5b89\u53bf",
                  id: "\u4f9d\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cf0\u6765\u53bf",
                  id: "\u6cf0\u6765\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7518\u5357\u53bf",
                  id: "\u7518\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5bcc\u88d5\u53bf",
                  id: "\u5bcc\u88d5\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u514b\u5c71\u53bf",
                  id: "\u514b\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u514b\u4e1c\u53bf",
                  id: "\u514b\u4e1c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u62dc\u6cc9\u53bf",
                  id: "\u62dc\u6cc9\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8bb7\u6cb3\u5e02",
                  id: "\u8bb7\u6cb3\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9e21\u897f\u5e02",
              id: "\u9e21\u897f\u5e02",
              subArea: [
                {
                  areaName: "\u9e21\u51a0\u533a",
                  id: "\u9e21\u51a0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6052\u5c71\u533a",
                  id: "\u6052\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6ef4\u9053\u533a",
                  id: "\u6ef4\u9053\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u68a8\u6811\u533a",
                  id: "\u68a8\u6811\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u57ce\u5b50\u6cb3\u533a",
                  id: "\u57ce\u5b50\u6cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9ebb\u5c71\u533a",
                  id: "\u9ebb\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9e21\u4e1c\u53bf",
                  id: "\u9e21\u4e1c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u864e\u6797\u5e02",
                  id: "\u864e\u6797\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5bc6\u5c71\u5e02",
                  id: "\u5bc6\u5c71\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9e64\u5c97\u5e02",
              id: "\u9e64\u5c97\u5e02",
              subArea: [
                {
                  areaName: "\u5411\u9633\u533a",
                  id: "\u5411\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5de5\u519c\u533a",
                  id: "\u5de5\u519c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u5c71\u533a",
                  id: "\u5357\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5174\u5b89\u533a",
                  id: "\u5174\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u5c71\u533a",
                  id: "\u4e1c\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5174\u5c71\u533a",
                  id: "\u5174\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u841d\u5317\u53bf",
                  id: "\u841d\u5317\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7ee5\u6ee8\u53bf",
                  id: "\u7ee5\u6ee8\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u53cc\u9e2d\u5c71\u5e02",
              id: "\u53cc\u9e2d\u5c71\u5e02",
              subArea: [
                {
                  areaName: "\u5c16\u5c71\u533a",
                  id: "\u5c16\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5cad\u4e1c\u533a",
                  id: "\u5cad\u4e1c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u56db\u65b9\u53f0\u533a",
                  id: "\u56db\u65b9\u53f0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b9d\u5c71\u533a",
                  id: "\u5b9d\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u96c6\u8d24\u53bf",
                  id: "\u96c6\u8d24\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u53cb\u8c0a\u53bf",
                  id: "\u53cb\u8c0a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b9d\u6e05\u53bf",
                  id: "\u5b9d\u6e05\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9976\u6cb3\u53bf",
                  id: "\u9976\u6cb3\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5927\u5e86\u5e02",
              id: "\u5927\u5e86\u5e02",
              subArea: [
                {
                  areaName: "\u8428\u5c14\u56fe\u533a",
                  id: "\u8428\u5c14\u56fe\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u51e4\u533a",
                  id: "\u9f99\u51e4\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8ba9\u80e1\u8def\u533a",
                  id: "\u8ba9\u80e1\u8def\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7ea2\u5c97\u533a",
                  id: "\u7ea2\u5c97\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u540c\u533a",
                  id: "\u5927\u540c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8087\u5dde\u53bf",
                  id: "\u8087\u5dde\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8087\u6e90\u53bf",
                  id: "\u8087\u6e90\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6797\u7538\u53bf",
                  id: "\u6797\u7538\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u675c\u5c14\u4f2f\u7279\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u675c\u5c14\u4f2f\u7279\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5927\u5e86\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u5927\u5e86\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4f0a\u6625\u5e02",
              id: "\u4f0a\u6625\u5e02",
              subArea: [
                {
                  areaName: "\u4f0a\u7f8e\u533a",
                  id: "\u4f0a\u7f8e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e4c\u7fe0\u533a",
                  id: "\u4e4c\u7fe0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u53cb\u597d\u533a",
                  id: "\u53cb\u597d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5609\u836b\u53bf",
                  id: "\u5609\u836b\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c64\u65fa\u53bf",
                  id: "\u6c64\u65fa\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e30\u6797\u53bf",
                  id: "\u4e30\u6797\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u7b90\u5c71\u53bf",
                  id: "\u5927\u7b90\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u5c94\u53bf",
                  id: "\u5357\u5c94\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u6797\u533a",
                  id: "\u91d1\u6797\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u94c1\u529b\u5e02",
                  id: "\u94c1\u529b\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4f73\u6728\u65af\u5e02",
              id: "\u4f73\u6728\u65af\u5e02",
              subArea: [
                {
                  areaName: "\u5411\u9633\u533a",
                  id: "\u5411\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u524d\u8fdb\u533a",
                  id: "\u524d\u8fdb\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u98ce\u533a",
                  id: "\u4e1c\u98ce\u533a",
                  subArea: [],
                },
                { areaName: "\u90ca\u533a", id: "\u90ca\u533a", subArea: [] },
                {
                  areaName: "\u6866\u5357\u53bf",
                  id: "\u6866\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6866\u5ddd\u53bf",
                  id: "\u6866\u5ddd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c64\u539f\u53bf",
                  id: "\u6c64\u539f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u540c\u6c5f\u5e02",
                  id: "\u540c\u6c5f\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5bcc\u9526\u5e02",
                  id: "\u5bcc\u9526\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u629a\u8fdc\u5e02",
                  id: "\u629a\u8fdc\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e03\u53f0\u6cb3\u5e02",
              id: "\u4e03\u53f0\u6cb3\u5e02",
              subArea: [
                {
                  areaName: "\u65b0\u5174\u533a",
                  id: "\u65b0\u5174\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6843\u5c71\u533a",
                  id: "\u6843\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8304\u5b50\u6cb3\u533a",
                  id: "\u8304\u5b50\u6cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u52c3\u5229\u53bf",
                  id: "\u52c3\u5229\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u7261\u4e39\u6c5f\u5e02",
              id: "\u7261\u4e39\u6c5f\u5e02",
              subArea: [
                {
                  areaName: "\u4e1c\u5b89\u533a",
                  id: "\u4e1c\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9633\u660e\u533a",
                  id: "\u9633\u660e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7231\u6c11\u533a",
                  id: "\u7231\u6c11\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u5b89\u533a",
                  id: "\u897f\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6797\u53e3\u53bf",
                  id: "\u6797\u53e3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7ee5\u82ac\u6cb3\u5e02",
                  id: "\u7ee5\u82ac\u6cb3\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6d77\u6797\u5e02",
                  id: "\u6d77\u6797\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5b81\u5b89\u5e02",
                  id: "\u5b81\u5b89\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u7a46\u68f1\u5e02",
                  id: "\u7a46\u68f1\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u5b81\u5e02",
                  id: "\u4e1c\u5b81\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9ed1\u6cb3\u5e02",
              id: "\u9ed1\u6cb3\u5e02",
              subArea: [
                {
                  areaName: "\u7231\u8f89\u533a",
                  id: "\u7231\u8f89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u900a\u514b\u53bf",
                  id: "\u900a\u514b\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b59\u5434\u53bf",
                  id: "\u5b59\u5434\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5317\u5b89\u5e02",
                  id: "\u5317\u5b89\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e94\u5927\u8fde\u6c60\u5e02",
                  id: "\u4e94\u5927\u8fde\u6c60\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5ae9\u6c5f\u5e02",
                  id: "\u5ae9\u6c5f\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u7ee5\u5316\u5e02",
              id: "\u7ee5\u5316\u5e02",
              subArea: [
                {
                  areaName: "\u5317\u6797\u533a",
                  id: "\u5317\u6797\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u671b\u594e\u53bf",
                  id: "\u671b\u594e\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5170\u897f\u53bf",
                  id: "\u5170\u897f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9752\u5188\u53bf",
                  id: "\u9752\u5188\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e86\u5b89\u53bf",
                  id: "\u5e86\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u660e\u6c34\u53bf",
                  id: "\u660e\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7ee5\u68f1\u53bf",
                  id: "\u7ee5\u68f1\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u8fbe\u5e02",
                  id: "\u5b89\u8fbe\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u8087\u4e1c\u5e02",
                  id: "\u8087\u4e1c\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6d77\u4f26\u5e02",
                  id: "\u6d77\u4f26\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5927\u5174\u5b89\u5cad\u5730\u533a",
              id: "\u5927\u5174\u5b89\u5cad\u5730\u533a",
              subArea: [
                {
                  areaName: "\u6f20\u6cb3\u5e02",
                  id: "\u6f20\u6cb3\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u547c\u739b\u53bf",
                  id: "\u547c\u739b\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5854\u6cb3\u53bf",
                  id: "\u5854\u6cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u52a0\u683c\u8fbe\u5947\u533a",
                  id: "\u52a0\u683c\u8fbe\u5947\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u677e\u5cad\u533a",
                  id: "\u677e\u5cad\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u6797\u533a",
                  id: "\u65b0\u6797\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u547c\u4e2d\u533a",
                  id: "\u547c\u4e2d\u533a",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u4e0a\u6d77\u5e02",
          id: "\u4e0a\u6d77\u5e02",
          subArea: [
            {
              areaName: "\u4e0a\u6d77\u5e02",
              id: "\u4e0a\u6d77\u5e02",
              subArea: [
                {
                  areaName: "\u9ec4\u6d66\u533a",
                  id: "\u9ec4\u6d66\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5f90\u6c47\u533a",
                  id: "\u5f90\u6c47\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u5b81\u533a",
                  id: "\u957f\u5b81\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9759\u5b89\u533a",
                  id: "\u9759\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u666e\u9640\u533a",
                  id: "\u666e\u9640\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8679\u53e3\u533a",
                  id: "\u8679\u53e3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6768\u6d66\u533a",
                  id: "\u6768\u6d66\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u95f5\u884c\u533a",
                  id: "\u95f5\u884c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b9d\u5c71\u533a",
                  id: "\u5b9d\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5609\u5b9a\u533a",
                  id: "\u5609\u5b9a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d66\u4e1c\u65b0\u533a",
                  id: "\u6d66\u4e1c\u65b0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u5c71\u533a",
                  id: "\u91d1\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u677e\u6c5f\u533a",
                  id: "\u677e\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9752\u6d66\u533a",
                  id: "\u9752\u6d66\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5949\u8d24\u533a",
                  id: "\u5949\u8d24\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5d07\u660e\u533a",
                  id: "\u5d07\u660e\u533a",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u6c5f\u82cf\u7701",
          id: "\u6c5f\u82cf\u7701",
          subArea: [
            {
              areaName: "\u5357\u4eac\u5e02",
              id: "\u5357\u4eac\u5e02",
              subArea: [
                {
                  areaName: "\u7384\u6b66\u533a",
                  id: "\u7384\u6b66\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u79e6\u6dee\u533a",
                  id: "\u79e6\u6dee\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5efa\u90ba\u533a",
                  id: "\u5efa\u90ba\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f13\u697c\u533a",
                  id: "\u9f13\u697c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d66\u53e3\u533a",
                  id: "\u6d66\u53e3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6816\u971e\u533a",
                  id: "\u6816\u971e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u96e8\u82b1\u53f0\u533a",
                  id: "\u96e8\u82b1\u53f0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c5f\u5b81\u533a",
                  id: "\u6c5f\u5b81\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u516d\u5408\u533a",
                  id: "\u516d\u5408\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6ea7\u6c34\u533a",
                  id: "\u6ea7\u6c34\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9ad8\u6df3\u533a",
                  id: "\u9ad8\u6df3\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u65e0\u9521\u5e02",
              id: "\u65e0\u9521\u5e02",
              subArea: [
                {
                  areaName: "\u9521\u5c71\u533a",
                  id: "\u9521\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u60e0\u5c71\u533a",
                  id: "\u60e0\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6ee8\u6e56\u533a",
                  id: "\u6ee8\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6881\u6eaa\u533a",
                  id: "\u6881\u6eaa\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u5434\u533a",
                  id: "\u65b0\u5434\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c5f\u9634\u5e02",
                  id: "\u6c5f\u9634\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5b9c\u5174\u5e02",
                  id: "\u5b9c\u5174\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5f90\u5dde\u5e02",
              id: "\u5f90\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u9f13\u697c\u533a",
                  id: "\u9f13\u697c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e91\u9f99\u533a",
                  id: "\u4e91\u9f99\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8d3e\u6c6a\u533a",
                  id: "\u8d3e\u6c6a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6cc9\u5c71\u533a",
                  id: "\u6cc9\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u94dc\u5c71\u533a",
                  id: "\u94dc\u5c71\u533a",
                  subArea: [],
                },
                { areaName: "\u4e30\u53bf", id: "\u4e30\u53bf", subArea: [] },
                { areaName: "\u6c9b\u53bf", id: "\u6c9b\u53bf", subArea: [] },
                {
                  areaName: "\u7762\u5b81\u53bf",
                  id: "\u7762\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5f90\u5dde\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u5f90\u5dde\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u6c82\u5e02",
                  id: "\u65b0\u6c82\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u90b3\u5dde\u5e02",
                  id: "\u90b3\u5dde\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5e38\u5dde\u5e02",
              id: "\u5e38\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u5929\u5b81\u533a",
                  id: "\u5929\u5b81\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u949f\u697c\u533a",
                  id: "\u949f\u697c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u5317\u533a",
                  id: "\u65b0\u5317\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u8fdb\u533a",
                  id: "\u6b66\u8fdb\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u575b\u533a",
                  id: "\u91d1\u575b\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6ea7\u9633\u5e02",
                  id: "\u6ea7\u9633\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u82cf\u5dde\u5e02",
              id: "\u82cf\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u864e\u4e18\u533a",
                  id: "\u864e\u4e18\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5434\u4e2d\u533a",
                  id: "\u5434\u4e2d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u76f8\u57ce\u533a",
                  id: "\u76f8\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u59d1\u82cf\u533a",
                  id: "\u59d1\u82cf\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5434\u6c5f\u533a",
                  id: "\u5434\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u82cf\u5dde\u5de5\u4e1a\u56ed\u533a",
                  id: "\u82cf\u5dde\u5de5\u4e1a\u56ed\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e38\u719f\u5e02",
                  id: "\u5e38\u719f\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5f20\u5bb6\u6e2f\u5e02",
                  id: "\u5f20\u5bb6\u6e2f\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6606\u5c71\u5e02",
                  id: "\u6606\u5c71\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u592a\u4ed3\u5e02",
                  id: "\u592a\u4ed3\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5357\u901a\u5e02",
              id: "\u5357\u901a\u5e02",
              subArea: [
                {
                  areaName: "\u901a\u5dde\u533a",
                  id: "\u901a\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5d07\u5ddd\u533a",
                  id: "\u5d07\u5ddd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d77\u95e8\u533a",
                  id: "\u6d77\u95e8\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5982\u4e1c\u53bf",
                  id: "\u5982\u4e1c\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5357\u901a\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u5357\u901a\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u542f\u4e1c\u5e02",
                  id: "\u542f\u4e1c\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5982\u768b\u5e02",
                  id: "\u5982\u768b\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6d77\u5b89\u5e02",
                  id: "\u6d77\u5b89\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8fde\u4e91\u6e2f\u5e02",
              id: "\u8fde\u4e91\u6e2f\u5e02",
              subArea: [
                {
                  areaName: "\u8fde\u4e91\u533a",
                  id: "\u8fde\u4e91\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d77\u5dde\u533a",
                  id: "\u6d77\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8d63\u6986\u533a",
                  id: "\u8d63\u6986\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u6d77\u53bf",
                  id: "\u4e1c\u6d77\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u704c\u4e91\u53bf",
                  id: "\u704c\u4e91\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u704c\u5357\u53bf",
                  id: "\u704c\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u8fde\u4e91\u6e2f\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u8fde\u4e91\u6e2f\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6dee\u5b89\u5e02",
              id: "\u6dee\u5b89\u5e02",
              subArea: [
                {
                  areaName: "\u6dee\u5b89\u533a",
                  id: "\u6dee\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6dee\u9634\u533a",
                  id: "\u6dee\u9634\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e05\u6c5f\u6d66\u533a",
                  id: "\u6e05\u6c5f\u6d66\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d2a\u6cfd\u533a",
                  id: "\u6d2a\u6cfd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d9f\u6c34\u53bf",
                  id: "\u6d9f\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u76f1\u7719\u53bf",
                  id: "\u76f1\u7719\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u6e56\u53bf",
                  id: "\u91d1\u6e56\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6dee\u5b89\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u6dee\u5b89\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u76d0\u57ce\u5e02",
              id: "\u76d0\u57ce\u5e02",
              subArea: [
                {
                  areaName: "\u4ead\u6e56\u533a",
                  id: "\u4ead\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u76d0\u90fd\u533a",
                  id: "\u76d0\u90fd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u4e30\u533a",
                  id: "\u5927\u4e30\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u54cd\u6c34\u53bf",
                  id: "\u54cd\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6ee8\u6d77\u53bf",
                  id: "\u6ee8\u6d77\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u961c\u5b81\u53bf",
                  id: "\u961c\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c04\u9633\u53bf",
                  id: "\u5c04\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5efa\u6e56\u53bf",
                  id: "\u5efa\u6e56\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u76d0\u57ce\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u76d0\u57ce\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u53f0\u5e02",
                  id: "\u4e1c\u53f0\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u626c\u5dde\u5e02",
              id: "\u626c\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u5e7f\u9675\u533a",
                  id: "\u5e7f\u9675\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9097\u6c5f\u533a",
                  id: "\u9097\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c5f\u90fd\u533a",
                  id: "\u6c5f\u90fd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b9d\u5e94\u53bf",
                  id: "\u5b9d\u5e94\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u626c\u5dde\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u626c\u5dde\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4eea\u5f81\u5e02",
                  id: "\u4eea\u5f81\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u9ad8\u90ae\u5e02",
                  id: "\u9ad8\u90ae\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9547\u6c5f\u5e02",
              id: "\u9547\u6c5f\u5e02",
              subArea: [
                {
                  areaName: "\u4eac\u53e3\u533a",
                  id: "\u4eac\u53e3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6da6\u5dde\u533a",
                  id: "\u6da6\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e39\u5f92\u533a",
                  id: "\u4e39\u5f92\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9547\u6c5f\u65b0\u533a",
                  id: "\u9547\u6c5f\u65b0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e39\u9633\u5e02",
                  id: "\u4e39\u9633\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u626c\u4e2d\u5e02",
                  id: "\u626c\u4e2d\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u53e5\u5bb9\u5e02",
                  id: "\u53e5\u5bb9\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6cf0\u5dde\u5e02",
              id: "\u6cf0\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u6d77\u9675\u533a",
                  id: "\u6d77\u9675\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9ad8\u6e2f\u533a",
                  id: "\u9ad8\u6e2f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u59dc\u5830\u533a",
                  id: "\u59dc\u5830\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5174\u5316\u5e02",
                  id: "\u5174\u5316\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u9756\u6c5f\u5e02",
                  id: "\u9756\u6c5f\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6cf0\u5174\u5e02",
                  id: "\u6cf0\u5174\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5bbf\u8fc1\u5e02",
              id: "\u5bbf\u8fc1\u5e02",
              subArea: [
                {
                  areaName: "\u5bbf\u57ce\u533a",
                  id: "\u5bbf\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5bbf\u8c6b\u533a",
                  id: "\u5bbf\u8c6b\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6cad\u9633\u53bf",
                  id: "\u6cad\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cd7\u9633\u53bf",
                  id: "\u6cd7\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cd7\u6d2a\u53bf",
                  id: "\u6cd7\u6d2a\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5bbf\u8fc1\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u5bbf\u8fc1\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u6d59\u6c5f\u7701",
          id: "\u6d59\u6c5f\u7701",
          subArea: [
            {
              areaName: "\u676d\u5dde\u5e02",
              id: "\u676d\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u4e0a\u57ce\u533a",
                  id: "\u4e0a\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u62f1\u5885\u533a",
                  id: "\u62f1\u5885\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u6e56\u533a",
                  id: "\u897f\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6ee8\u6c5f\u533a",
                  id: "\u6ee8\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8427\u5c71\u533a",
                  id: "\u8427\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4f59\u676d\u533a",
                  id: "\u4f59\u676d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5bcc\u9633\u533a",
                  id: "\u5bcc\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u5b89\u533a",
                  id: "\u4e34\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u5e73\u533a",
                  id: "\u4e34\u5e73\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u94b1\u5858\u533a",
                  id: "\u94b1\u5858\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6850\u5e90\u53bf",
                  id: "\u6850\u5e90\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6df3\u5b89\u53bf",
                  id: "\u6df3\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5efa\u5fb7\u5e02",
                  id: "\u5efa\u5fb7\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5b81\u6ce2\u5e02",
              id: "\u5b81\u6ce2\u5e02",
              subArea: [
                {
                  areaName: "\u6d77\u66d9\u533a",
                  id: "\u6d77\u66d9\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c5f\u5317\u533a",
                  id: "\u6c5f\u5317\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5317\u4ed1\u533a",
                  id: "\u5317\u4ed1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9547\u6d77\u533a",
                  id: "\u9547\u6d77\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u911e\u5dde\u533a",
                  id: "\u911e\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5949\u5316\u533a",
                  id: "\u5949\u5316\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8c61\u5c71\u53bf",
                  id: "\u8c61\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b81\u6d77\u53bf",
                  id: "\u5b81\u6d77\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4f59\u59da\u5e02",
                  id: "\u4f59\u59da\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6148\u6eaa\u5e02",
                  id: "\u6148\u6eaa\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6e29\u5dde\u5e02",
              id: "\u6e29\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u9e7f\u57ce\u533a",
                  id: "\u9e7f\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u6e7e\u533a",
                  id: "\u9f99\u6e7e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u74ef\u6d77\u533a",
                  id: "\u74ef\u6d77\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d1e\u5934\u533a",
                  id: "\u6d1e\u5934\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u5609\u53bf",
                  id: "\u6c38\u5609\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u9633\u53bf",
                  id: "\u5e73\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u82cd\u5357\u53bf",
                  id: "\u82cd\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6587\u6210\u53bf",
                  id: "\u6587\u6210\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cf0\u987a\u53bf",
                  id: "\u6cf0\u987a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u745e\u5b89\u5e02",
                  id: "\u745e\u5b89\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e50\u6e05\u5e02",
                  id: "\u4e50\u6e05\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u6e2f\u5e02",
                  id: "\u9f99\u6e2f\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5609\u5174\u5e02",
              id: "\u5609\u5174\u5e02",
              subArea: [
                {
                  areaName: "\u5357\u6e56\u533a",
                  id: "\u5357\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u79c0\u6d32\u533a",
                  id: "\u79c0\u6d32\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5609\u5584\u53bf",
                  id: "\u5609\u5584\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d77\u76d0\u53bf",
                  id: "\u6d77\u76d0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d77\u5b81\u5e02",
                  id: "\u6d77\u5b81\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u6e56\u5e02",
                  id: "\u5e73\u6e56\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6850\u4e61\u5e02",
                  id: "\u6850\u4e61\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6e56\u5dde\u5e02",
              id: "\u6e56\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u5434\u5174\u533a",
                  id: "\u5434\u5174\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u6d54\u533a",
                  id: "\u5357\u6d54\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5fb7\u6e05\u53bf",
                  id: "\u5fb7\u6e05\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u5174\u53bf",
                  id: "\u957f\u5174\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u5409\u53bf",
                  id: "\u5b89\u5409\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u7ecd\u5174\u5e02",
              id: "\u7ecd\u5174\u5e02",
              subArea: [
                {
                  areaName: "\u8d8a\u57ce\u533a",
                  id: "\u8d8a\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u67ef\u6865\u533a",
                  id: "\u67ef\u6865\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e0a\u865e\u533a",
                  id: "\u4e0a\u865e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u660c\u53bf",
                  id: "\u65b0\u660c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8bf8\u66a8\u5e02",
                  id: "\u8bf8\u66a8\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5d4a\u5dde\u5e02",
                  id: "\u5d4a\u5dde\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u91d1\u534e\u5e02",
              id: "\u91d1\u534e\u5e02",
              subArea: [
                {
                  areaName: "\u5a7a\u57ce\u533a",
                  id: "\u5a7a\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u4e1c\u533a",
                  id: "\u91d1\u4e1c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u4e49\u53bf",
                  id: "\u6b66\u4e49\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d66\u6c5f\u53bf",
                  id: "\u6d66\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u78d0\u5b89\u53bf",
                  id: "\u78d0\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5170\u6eaa\u5e02",
                  id: "\u5170\u6eaa\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e49\u4e4c\u5e02",
                  id: "\u4e49\u4e4c\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u9633\u5e02",
                  id: "\u4e1c\u9633\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u5eb7\u5e02",
                  id: "\u6c38\u5eb7\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8862\u5dde\u5e02",
              id: "\u8862\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u67ef\u57ce\u533a",
                  id: "\u67ef\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8862\u6c5f\u533a",
                  id: "\u8862\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e38\u5c71\u53bf",
                  id: "\u5e38\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5f00\u5316\u53bf",
                  id: "\u5f00\u5316\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u6e38\u53bf",
                  id: "\u9f99\u6e38\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c5f\u5c71\u5e02",
                  id: "\u6c5f\u5c71\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u821f\u5c71\u5e02",
              id: "\u821f\u5c71\u5e02",
              subArea: [
                {
                  areaName: "\u5b9a\u6d77\u533a",
                  id: "\u5b9a\u6d77\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u666e\u9640\u533a",
                  id: "\u666e\u9640\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5cb1\u5c71\u53bf",
                  id: "\u5cb1\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5d4a\u6cd7\u53bf",
                  id: "\u5d4a\u6cd7\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u53f0\u5dde\u5e02",
              id: "\u53f0\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u6912\u6c5f\u533a",
                  id: "\u6912\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9ec4\u5ca9\u533a",
                  id: "\u9ec4\u5ca9\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8def\u6865\u533a",
                  id: "\u8def\u6865\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e09\u95e8\u53bf",
                  id: "\u4e09\u95e8\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5929\u53f0\u53bf",
                  id: "\u5929\u53f0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4ed9\u5c45\u53bf",
                  id: "\u4ed9\u5c45\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6e29\u5cad\u5e02",
                  id: "\u6e29\u5cad\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u6d77\u5e02",
                  id: "\u4e34\u6d77\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u7389\u73af\u5e02",
                  id: "\u7389\u73af\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e3d\u6c34\u5e02",
              id: "\u4e3d\u6c34\u5e02",
              subArea: [
                {
                  areaName: "\u83b2\u90fd\u533a",
                  id: "\u83b2\u90fd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9752\u7530\u53bf",
                  id: "\u9752\u7530\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7f19\u4e91\u53bf",
                  id: "\u7f19\u4e91\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9042\u660c\u53bf",
                  id: "\u9042\u660c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u677e\u9633\u53bf",
                  id: "\u677e\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e91\u548c\u53bf",
                  id: "\u4e91\u548c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e86\u5143\u53bf",
                  id: "\u5e86\u5143\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u666f\u5b81\u7572\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u666f\u5b81\u7572\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u6cc9\u5e02",
                  id: "\u9f99\u6cc9\u5e02",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u5b89\u5fbd\u7701",
          id: "\u5b89\u5fbd\u7701",
          subArea: [
            {
              areaName: "\u5408\u80a5\u5e02",
              id: "\u5408\u80a5\u5e02",
              subArea: [
                {
                  areaName: "\u7476\u6d77\u533a",
                  id: "\u7476\u6d77\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e90\u9633\u533a",
                  id: "\u5e90\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8700\u5c71\u533a",
                  id: "\u8700\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5305\u6cb3\u533a",
                  id: "\u5305\u6cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u4e30\u53bf",
                  id: "\u957f\u4e30\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u80a5\u4e1c\u53bf",
                  id: "\u80a5\u4e1c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u80a5\u897f\u53bf",
                  id: "\u80a5\u897f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e90\u6c5f\u53bf",
                  id: "\u5e90\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5408\u80a5\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u5408\u80a5\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5408\u80a5\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u5408\u80a5\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5408\u80a5\u65b0\u7ad9\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u5408\u80a5\u65b0\u7ad9\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5de2\u6e56\u5e02",
                  id: "\u5de2\u6e56\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u829c\u6e56\u5e02",
              id: "\u829c\u6e56\u5e02",
              subArea: [
                {
                  areaName: "\u955c\u6e56\u533a",
                  id: "\u955c\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9e20\u6c5f\u533a",
                  id: "\u9e20\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5f0b\u6c5f\u533a",
                  id: "\u5f0b\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e7e\u6c9a\u533a",
                  id: "\u6e7e\u6c9a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7e41\u660c\u533a",
                  id: "\u7e41\u660c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u9675\u53bf",
                  id: "\u5357\u9675\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u829c\u6e56\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u829c\u6e56\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5b89\u5fbd\u829c\u6e56\u4e09\u5c71\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  id: "\u5b89\u5fbd\u829c\u6e56\u4e09\u5c71\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65e0\u4e3a\u5e02",
                  id: "\u65e0\u4e3a\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u868c\u57e0\u5e02",
              id: "\u868c\u57e0\u5e02",
              subArea: [
                {
                  areaName: "\u9f99\u5b50\u6e56\u533a",
                  id: "\u9f99\u5b50\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u868c\u5c71\u533a",
                  id: "\u868c\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u79b9\u4f1a\u533a",
                  id: "\u79b9\u4f1a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6dee\u4e0a\u533a",
                  id: "\u6dee\u4e0a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6000\u8fdc\u53bf",
                  id: "\u6000\u8fdc\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e94\u6cb3\u53bf",
                  id: "\u4e94\u6cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u56fa\u9547\u53bf",
                  id: "\u56fa\u9547\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u868c\u57e0\u5e02\u9ad8\u65b0\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u868c\u57e0\u5e02\u9ad8\u65b0\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u868c\u57e0\u5e02\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  id: "\u868c\u57e0\u5e02\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6dee\u5357\u5e02",
              id: "\u6dee\u5357\u5e02",
              subArea: [
                {
                  areaName: "\u5927\u901a\u533a",
                  id: "\u5927\u901a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7530\u5bb6\u5eb5\u533a",
                  id: "\u7530\u5bb6\u5eb5\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8c22\u5bb6\u96c6\u533a",
                  id: "\u8c22\u5bb6\u96c6\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u516b\u516c\u5c71\u533a",
                  id: "\u516b\u516c\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6f58\u96c6\u533a",
                  id: "\u6f58\u96c6\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u51e4\u53f0\u53bf",
                  id: "\u51e4\u53f0\u53bf",
                  subArea: [],
                },
                { areaName: "\u5bff\u53bf", id: "\u5bff\u53bf", subArea: [] },
              ],
            },
            {
              areaName: "\u9a6c\u978d\u5c71\u5e02",
              id: "\u9a6c\u978d\u5c71\u5e02",
              subArea: [
                {
                  areaName: "\u82b1\u5c71\u533a",
                  id: "\u82b1\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u96e8\u5c71\u533a",
                  id: "\u96e8\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u535a\u671b\u533a",
                  id: "\u535a\u671b\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5f53\u6d82\u53bf",
                  id: "\u5f53\u6d82\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u542b\u5c71\u53bf",
                  id: "\u542b\u5c71\u53bf",
                  subArea: [],
                },
                { areaName: "\u548c\u53bf", id: "\u548c\u53bf", subArea: [] },
              ],
            },
            {
              areaName: "\u6dee\u5317\u5e02",
              id: "\u6dee\u5317\u5e02",
              subArea: [
                {
                  areaName: "\u675c\u96c6\u533a",
                  id: "\u675c\u96c6\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u76f8\u5c71\u533a",
                  id: "\u76f8\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u70c8\u5c71\u533a",
                  id: "\u70c8\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6fc9\u6eaa\u53bf",
                  id: "\u6fc9\u6eaa\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u94dc\u9675\u5e02",
              id: "\u94dc\u9675\u5e02",
              subArea: [
                {
                  areaName: "\u94dc\u5b98\u533a",
                  id: "\u94dc\u5b98\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e49\u5b89\u533a",
                  id: "\u4e49\u5b89\u533a",
                  subArea: [],
                },
                { areaName: "\u90ca\u533a", id: "\u90ca\u533a", subArea: [] },
                {
                  areaName: "\u679e\u9633\u53bf",
                  id: "\u679e\u9633\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5b89\u5e86\u5e02",
              id: "\u5b89\u5e86\u5e02",
              subArea: [
                {
                  areaName: "\u8fce\u6c5f\u533a",
                  id: "\u8fce\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u89c2\u533a",
                  id: "\u5927\u89c2\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b9c\u79c0\u533a",
                  id: "\u5b9c\u79c0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6000\u5b81\u53bf",
                  id: "\u6000\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u592a\u6e56\u53bf",
                  id: "\u592a\u6e56\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5bbf\u677e\u53bf",
                  id: "\u5bbf\u677e\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u671b\u6c5f\u53bf",
                  id: "\u671b\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5cb3\u897f\u53bf",
                  id: "\u5cb3\u897f\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5b89\u5fbd\u5b89\u5e86\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  id: "\u5b89\u5fbd\u5b89\u5e86\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6850\u57ce\u5e02",
                  id: "\u6850\u57ce\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6f5c\u5c71\u5e02",
                  id: "\u6f5c\u5c71\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9ec4\u5c71\u5e02",
              id: "\u9ec4\u5c71\u5e02",
              subArea: [
                {
                  areaName: "\u5c6f\u6eaa\u533a",
                  id: "\u5c6f\u6eaa\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9ec4\u5c71\u533a",
                  id: "\u9ec4\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5fbd\u5dde\u533a",
                  id: "\u5fbd\u5dde\u533a",
                  subArea: [],
                },
                { areaName: "\u6b59\u53bf", id: "\u6b59\u53bf", subArea: [] },
                {
                  areaName: "\u4f11\u5b81\u53bf",
                  id: "\u4f11\u5b81\u53bf",
                  subArea: [],
                },
                { areaName: "\u9edf\u53bf", id: "\u9edf\u53bf", subArea: [] },
                {
                  areaName: "\u7941\u95e8\u53bf",
                  id: "\u7941\u95e8\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6ec1\u5dde\u5e02",
              id: "\u6ec1\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u7405\u740a\u533a",
                  id: "\u7405\u740a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u8c2f\u533a",
                  id: "\u5357\u8c2f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6765\u5b89\u53bf",
                  id: "\u6765\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5168\u6912\u53bf",
                  id: "\u5168\u6912\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b9a\u8fdc\u53bf",
                  id: "\u5b9a\u8fdc\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u51e4\u9633\u53bf",
                  id: "\u51e4\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u4e2d\u65b0\u82cf\u6ec1\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u4e2d\u65b0\u82cf\u6ec1\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6ec1\u5dde\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u6ec1\u5dde\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5929\u957f\u5e02",
                  id: "\u5929\u957f\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u660e\u5149\u5e02",
                  id: "\u660e\u5149\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u961c\u9633\u5e02",
              id: "\u961c\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u988d\u5dde\u533a",
                  id: "\u988d\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u988d\u4e1c\u533a",
                  id: "\u988d\u4e1c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u988d\u6cc9\u533a",
                  id: "\u988d\u6cc9\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u6cc9\u53bf",
                  id: "\u4e34\u6cc9\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u592a\u548c\u53bf",
                  id: "\u592a\u548c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u961c\u5357\u53bf",
                  id: "\u961c\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u988d\u4e0a\u53bf",
                  id: "\u988d\u4e0a\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u961c\u9633\u5408\u80a5\u73b0\u4ee3\u4ea7\u4e1a\u56ed\u533a",
                  id: "\u961c\u9633\u5408\u80a5\u73b0\u4ee3\u4ea7\u4e1a\u56ed\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u961c\u9633\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u961c\u9633\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u754c\u9996\u5e02",
                  id: "\u754c\u9996\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5bbf\u5dde\u5e02",
              id: "\u5bbf\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u57c7\u6865\u533a",
                  id: "\u57c7\u6865\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7800\u5c71\u53bf",
                  id: "\u7800\u5c71\u53bf",
                  subArea: [],
                },
                { areaName: "\u8427\u53bf", id: "\u8427\u53bf", subArea: [] },
                {
                  areaName: "\u7075\u74a7\u53bf",
                  id: "\u7075\u74a7\u53bf",
                  subArea: [],
                },
                { areaName: "\u6cd7\u53bf", id: "\u6cd7\u53bf", subArea: [] },
                {
                  areaName:
                    "\u5bbf\u5dde\u9a6c\u978d\u5c71\u73b0\u4ee3\u4ea7\u4e1a\u56ed\u533a",
                  id: "\u5bbf\u5dde\u9a6c\u978d\u5c71\u73b0\u4ee3\u4ea7\u4e1a\u56ed\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5bbf\u5dde\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u5bbf\u5dde\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u516d\u5b89\u5e02",
              id: "\u516d\u5b89\u5e02",
              subArea: [
                {
                  areaName: "\u91d1\u5b89\u533a",
                  id: "\u91d1\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u88d5\u5b89\u533a",
                  id: "\u88d5\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u53f6\u96c6\u533a",
                  id: "\u53f6\u96c6\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u970d\u90b1\u53bf",
                  id: "\u970d\u90b1\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8212\u57ce\u53bf",
                  id: "\u8212\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u5be8\u53bf",
                  id: "\u91d1\u5be8\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u970d\u5c71\u53bf",
                  id: "\u970d\u5c71\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4eb3\u5dde\u5e02",
              id: "\u4eb3\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u8c2f\u57ce\u533a",
                  id: "\u8c2f\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6da1\u9633\u53bf",
                  id: "\u6da1\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8499\u57ce\u53bf",
                  id: "\u8499\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5229\u8f9b\u53bf",
                  id: "\u5229\u8f9b\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6c60\u5dde\u5e02",
              id: "\u6c60\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u8d35\u6c60\u533a",
                  id: "\u8d35\u6c60\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u81f3\u53bf",
                  id: "\u4e1c\u81f3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u53f0\u53bf",
                  id: "\u77f3\u53f0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9752\u9633\u53bf",
                  id: "\u9752\u9633\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5ba3\u57ce\u5e02",
              id: "\u5ba3\u57ce\u5e02",
              subArea: [
                {
                  areaName: "\u5ba3\u5dde\u533a",
                  id: "\u5ba3\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u90ce\u6eaa\u53bf",
                  id: "\u90ce\u6eaa\u53bf",
                  subArea: [],
                },
                { areaName: "\u6cfe\u53bf", id: "\u6cfe\u53bf", subArea: [] },
                {
                  areaName: "\u7ee9\u6eaa\u53bf",
                  id: "\u7ee9\u6eaa\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65cc\u5fb7\u53bf",
                  id: "\u65cc\u5fb7\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5ba3\u57ce\u5e02\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  id: "\u5ba3\u57ce\u5e02\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b81\u56fd\u5e02",
                  id: "\u5b81\u56fd\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5e7f\u5fb7\u5e02",
                  id: "\u5e7f\u5fb7\u5e02",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u798f\u5efa\u7701",
          id: "\u798f\u5efa\u7701",
          subArea: [
            {
              areaName: "\u798f\u5dde\u5e02",
              id: "\u798f\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u9f13\u697c\u533a",
                  id: "\u9f13\u697c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u53f0\u6c5f\u533a",
                  id: "\u53f0\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4ed3\u5c71\u533a",
                  id: "\u4ed3\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9a6c\u5c3e\u533a",
                  id: "\u9a6c\u5c3e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u664b\u5b89\u533a",
                  id: "\u664b\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u4e50\u533a",
                  id: "\u957f\u4e50\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u95fd\u4faf\u53bf",
                  id: "\u95fd\u4faf\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8fde\u6c5f\u53bf",
                  id: "\u8fde\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7f57\u6e90\u53bf",
                  id: "\u7f57\u6e90\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u95fd\u6e05\u53bf",
                  id: "\u95fd\u6e05\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u6cf0\u53bf",
                  id: "\u6c38\u6cf0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u6f6d\u53bf",
                  id: "\u5e73\u6f6d\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u798f\u6e05\u5e02",
                  id: "\u798f\u6e05\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u53a6\u95e8\u5e02",
              id: "\u53a6\u95e8\u5e02",
              subArea: [
                {
                  areaName: "\u601d\u660e\u533a",
                  id: "\u601d\u660e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d77\u6ca7\u533a",
                  id: "\u6d77\u6ca7\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e56\u91cc\u533a",
                  id: "\u6e56\u91cc\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u96c6\u7f8e\u533a",
                  id: "\u96c6\u7f8e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u540c\u5b89\u533a",
                  id: "\u540c\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7fd4\u5b89\u533a",
                  id: "\u7fd4\u5b89\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8386\u7530\u5e02",
              id: "\u8386\u7530\u5e02",
              subArea: [
                {
                  areaName: "\u57ce\u53a2\u533a",
                  id: "\u57ce\u53a2\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6db5\u6c5f\u533a",
                  id: "\u6db5\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8354\u57ce\u533a",
                  id: "\u8354\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u79c0\u5c7f\u533a",
                  id: "\u79c0\u5c7f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4ed9\u6e38\u53bf",
                  id: "\u4ed9\u6e38\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e09\u660e\u5e02",
              id: "\u4e09\u660e\u5e02",
              subArea: [
                {
                  areaName: "\u4e09\u5143\u533a",
                  id: "\u4e09\u5143\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c99\u53bf\u533a",
                  id: "\u6c99\u53bf\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u660e\u6eaa\u53bf",
                  id: "\u660e\u6eaa\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6e05\u6d41\u53bf",
                  id: "\u6e05\u6d41\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b81\u5316\u53bf",
                  id: "\u5b81\u5316\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u7530\u53bf",
                  id: "\u5927\u7530\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c24\u6eaa\u53bf",
                  id: "\u5c24\u6eaa\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c06\u4e50\u53bf",
                  id: "\u5c06\u4e50\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cf0\u5b81\u53bf",
                  id: "\u6cf0\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5efa\u5b81\u53bf",
                  id: "\u5efa\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u5b89\u5e02",
                  id: "\u6c38\u5b89\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6cc9\u5dde\u5e02",
              id: "\u6cc9\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u9ca4\u57ce\u533a",
                  id: "\u9ca4\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e30\u6cfd\u533a",
                  id: "\u4e30\u6cfd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d1b\u6c5f\u533a",
                  id: "\u6d1b\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6cc9\u6e2f\u533a",
                  id: "\u6cc9\u6e2f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u60e0\u5b89\u53bf",
                  id: "\u60e0\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u6eaa\u53bf",
                  id: "\u5b89\u6eaa\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u6625\u53bf",
                  id: "\u6c38\u6625\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5fb7\u5316\u53bf",
                  id: "\u5fb7\u5316\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u95e8\u53bf",
                  id: "\u91d1\u95e8\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u72ee\u5e02",
                  id: "\u77f3\u72ee\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u664b\u6c5f\u5e02",
                  id: "\u664b\u6c5f\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u5b89\u5e02",
                  id: "\u5357\u5b89\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6f33\u5dde\u5e02",
              id: "\u6f33\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u8297\u57ce\u533a",
                  id: "\u8297\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u6587\u533a",
                  id: "\u9f99\u6587\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u6d77\u533a",
                  id: "\u9f99\u6d77\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u6cf0\u533a",
                  id: "\u957f\u6cf0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e91\u9704\u53bf",
                  id: "\u4e91\u9704\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6f33\u6d66\u53bf",
                  id: "\u6f33\u6d66\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8bcf\u5b89\u53bf",
                  id: "\u8bcf\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u5c71\u53bf",
                  id: "\u4e1c\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u9756\u53bf",
                  id: "\u5357\u9756\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u548c\u53bf",
                  id: "\u5e73\u548c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u534e\u5b89\u53bf",
                  id: "\u534e\u5b89\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5357\u5e73\u5e02",
              id: "\u5357\u5e73\u5e02",
              subArea: [
                {
                  areaName: "\u5ef6\u5e73\u533a",
                  id: "\u5ef6\u5e73\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5efa\u9633\u533a",
                  id: "\u5efa\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u987a\u660c\u53bf",
                  id: "\u987a\u660c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d66\u57ce\u53bf",
                  id: "\u6d66\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5149\u6cfd\u53bf",
                  id: "\u5149\u6cfd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u677e\u6eaa\u53bf",
                  id: "\u677e\u6eaa\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u653f\u548c\u53bf",
                  id: "\u653f\u548c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u90b5\u6b66\u5e02",
                  id: "\u90b5\u6b66\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u5937\u5c71\u5e02",
                  id: "\u6b66\u5937\u5c71\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5efa\u74ef\u5e02",
                  id: "\u5efa\u74ef\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9f99\u5ca9\u5e02",
              id: "\u9f99\u5ca9\u5e02",
              subArea: [
                {
                  areaName: "\u65b0\u7f57\u533a",
                  id: "\u65b0\u7f57\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u5b9a\u533a",
                  id: "\u6c38\u5b9a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u6c40\u53bf",
                  id: "\u957f\u6c40\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e0a\u676d\u53bf",
                  id: "\u4e0a\u676d\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u5e73\u53bf",
                  id: "\u6b66\u5e73\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8fde\u57ce\u53bf",
                  id: "\u8fde\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6f33\u5e73\u5e02",
                  id: "\u6f33\u5e73\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5b81\u5fb7\u5e02",
              id: "\u5b81\u5fb7\u5e02",
              subArea: [
                {
                  areaName: "\u8549\u57ce\u533a",
                  id: "\u8549\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u971e\u6d66\u53bf",
                  id: "\u971e\u6d66\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u53e4\u7530\u53bf",
                  id: "\u53e4\u7530\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c4f\u5357\u53bf",
                  id: "\u5c4f\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5bff\u5b81\u53bf",
                  id: "\u5bff\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5468\u5b81\u53bf",
                  id: "\u5468\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u67d8\u8363\u53bf",
                  id: "\u67d8\u8363\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u798f\u5b89\u5e02",
                  id: "\u798f\u5b89\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u798f\u9f0e\u5e02",
                  id: "\u798f\u9f0e\u5e02",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u6c5f\u897f\u7701",
          id: "\u6c5f\u897f\u7701",
          subArea: [
            {
              areaName: "\u5357\u660c\u5e02",
              id: "\u5357\u660c\u5e02",
              subArea: [
                {
                  areaName: "\u4e1c\u6e56\u533a",
                  id: "\u4e1c\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u6e56\u533a",
                  id: "\u897f\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9752\u4e91\u8c31\u533a",
                  id: "\u9752\u4e91\u8c31\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9752\u5c71\u6e56\u533a",
                  id: "\u9752\u5c71\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u5efa\u533a",
                  id: "\u65b0\u5efa\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7ea2\u8c37\u6ee9\u533a",
                  id: "\u7ea2\u8c37\u6ee9\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u660c\u53bf",
                  id: "\u5357\u660c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u4e49\u53bf",
                  id: "\u5b89\u4e49\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8fdb\u8d24\u53bf",
                  id: "\u8fdb\u8d24\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u666f\u5fb7\u9547\u5e02",
              id: "\u666f\u5fb7\u9547\u5e02",
              subArea: [
                {
                  areaName: "\u660c\u6c5f\u533a",
                  id: "\u660c\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u73e0\u5c71\u533a",
                  id: "\u73e0\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d6e\u6881\u53bf",
                  id: "\u6d6e\u6881\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e50\u5e73\u5e02",
                  id: "\u4e50\u5e73\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u840d\u4e61\u5e02",
              id: "\u840d\u4e61\u5e02",
              subArea: [
                {
                  areaName: "\u5b89\u6e90\u533a",
                  id: "\u5b89\u6e90\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e58\u4e1c\u533a",
                  id: "\u6e58\u4e1c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u83b2\u82b1\u53bf",
                  id: "\u83b2\u82b1\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e0a\u6817\u53bf",
                  id: "\u4e0a\u6817\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u82a6\u6eaa\u53bf",
                  id: "\u82a6\u6eaa\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e5d\u6c5f\u5e02",
              id: "\u4e5d\u6c5f\u5e02",
              subArea: [
                {
                  areaName: "\u6fc2\u6eaa\u533a",
                  id: "\u6fc2\u6eaa\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d54\u9633\u533a",
                  id: "\u6d54\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u67f4\u6851\u533a",
                  id: "\u67f4\u6851\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u5b81\u53bf",
                  id: "\u6b66\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4fee\u6c34\u53bf",
                  id: "\u4fee\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u4fee\u53bf",
                  id: "\u6c38\u4fee\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5fb7\u5b89\u53bf",
                  id: "\u5fb7\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u90fd\u660c\u53bf",
                  id: "\u90fd\u660c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6e56\u53e3\u53bf",
                  id: "\u6e56\u53e3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5f6d\u6cfd\u53bf",
                  id: "\u5f6d\u6cfd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u745e\u660c\u5e02",
                  id: "\u745e\u660c\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5171\u9752\u57ce\u5e02",
                  id: "\u5171\u9752\u57ce\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5e90\u5c71\u5e02",
                  id: "\u5e90\u5c71\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u65b0\u4f59\u5e02",
              id: "\u65b0\u4f59\u5e02",
              subArea: [
                {
                  areaName: "\u6e1d\u6c34\u533a",
                  id: "\u6e1d\u6c34\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5206\u5b9c\u53bf",
                  id: "\u5206\u5b9c\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9e70\u6f6d\u5e02",
              id: "\u9e70\u6f6d\u5e02",
              subArea: [
                {
                  areaName: "\u6708\u6e56\u533a",
                  id: "\u6708\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4f59\u6c5f\u533a",
                  id: "\u4f59\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8d35\u6eaa\u5e02",
                  id: "\u8d35\u6eaa\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8d63\u5dde\u5e02",
              id: "\u8d63\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u7ae0\u8d21\u533a",
                  id: "\u7ae0\u8d21\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u5eb7\u533a",
                  id: "\u5357\u5eb7\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8d63\u53bf\u533a",
                  id: "\u8d63\u53bf\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4fe1\u4e30\u53bf",
                  id: "\u4fe1\u4e30\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u4f59\u53bf",
                  id: "\u5927\u4f59\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e0a\u72b9\u53bf",
                  id: "\u4e0a\u72b9\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5d07\u4e49\u53bf",
                  id: "\u5d07\u4e49\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u8fdc\u53bf",
                  id: "\u5b89\u8fdc\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b9a\u5357\u53bf",
                  id: "\u5b9a\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5168\u5357\u53bf",
                  id: "\u5168\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b81\u90fd\u53bf",
                  id: "\u5b81\u90fd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e8e\u90fd\u53bf",
                  id: "\u4e8e\u90fd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5174\u56fd\u53bf",
                  id: "\u5174\u56fd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4f1a\u660c\u53bf",
                  id: "\u4f1a\u660c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5bfb\u4e4c\u53bf",
                  id: "\u5bfb\u4e4c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u57ce\u53bf",
                  id: "\u77f3\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u745e\u91d1\u5e02",
                  id: "\u745e\u91d1\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u5357\u5e02",
                  id: "\u9f99\u5357\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5409\u5b89\u5e02",
              id: "\u5409\u5b89\u5e02",
              subArea: [
                {
                  areaName: "\u5409\u5dde\u533a",
                  id: "\u5409\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9752\u539f\u533a",
                  id: "\u9752\u539f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5409\u5b89\u53bf",
                  id: "\u5409\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5409\u6c34\u53bf",
                  id: "\u5409\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5ce1\u6c5f\u53bf",
                  id: "\u5ce1\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u5e72\u53bf",
                  id: "\u65b0\u5e72\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u4e30\u53bf",
                  id: "\u6c38\u4e30\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cf0\u548c\u53bf",
                  id: "\u6cf0\u548c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9042\u5ddd\u53bf",
                  id: "\u9042\u5ddd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e07\u5b89\u53bf",
                  id: "\u4e07\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u798f\u53bf",
                  id: "\u5b89\u798f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u65b0\u53bf",
                  id: "\u6c38\u65b0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e95\u5188\u5c71\u5e02",
                  id: "\u4e95\u5188\u5c71\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5b9c\u6625\u5e02",
              id: "\u5b9c\u6625\u5e02",
              subArea: [
                {
                  areaName: "\u8881\u5dde\u533a",
                  id: "\u8881\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5949\u65b0\u53bf",
                  id: "\u5949\u65b0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e07\u8f7d\u53bf",
                  id: "\u4e07\u8f7d\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e0a\u9ad8\u53bf",
                  id: "\u4e0a\u9ad8\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b9c\u4e30\u53bf",
                  id: "\u5b9c\u4e30\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9756\u5b89\u53bf",
                  id: "\u9756\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u94dc\u9f13\u53bf",
                  id: "\u94dc\u9f13\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e30\u57ce\u5e02",
                  id: "\u4e30\u57ce\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6a1f\u6811\u5e02",
                  id: "\u6a1f\u6811\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u9ad8\u5b89\u5e02",
                  id: "\u9ad8\u5b89\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u629a\u5dde\u5e02",
              id: "\u629a\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u4e34\u5ddd\u533a",
                  id: "\u4e34\u5ddd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u4e61\u533a",
                  id: "\u4e1c\u4e61\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u57ce\u53bf",
                  id: "\u5357\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9ece\u5ddd\u53bf",
                  id: "\u9ece\u5ddd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u4e30\u53bf",
                  id: "\u5357\u4e30\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5d07\u4ec1\u53bf",
                  id: "\u5d07\u4ec1\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e50\u5b89\u53bf",
                  id: "\u4e50\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b9c\u9ec4\u53bf",
                  id: "\u5b9c\u9ec4\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u6eaa\u53bf",
                  id: "\u91d1\u6eaa\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8d44\u6eaa\u53bf",
                  id: "\u8d44\u6eaa\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e7f\u660c\u53bf",
                  id: "\u5e7f\u660c\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e0a\u9976\u5e02",
              id: "\u4e0a\u9976\u5e02",
              subArea: [
                {
                  areaName: "\u4fe1\u5dde\u533a",
                  id: "\u4fe1\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e7f\u4e30\u533a",
                  id: "\u5e7f\u4e30\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e7f\u4fe1\u533a",
                  id: "\u5e7f\u4fe1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7389\u5c71\u53bf",
                  id: "\u7389\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u94c5\u5c71\u53bf",
                  id: "\u94c5\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6a2a\u5cf0\u53bf",
                  id: "\u6a2a\u5cf0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5f0b\u9633\u53bf",
                  id: "\u5f0b\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4f59\u5e72\u53bf",
                  id: "\u4f59\u5e72\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9131\u9633\u53bf",
                  id: "\u9131\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e07\u5e74\u53bf",
                  id: "\u4e07\u5e74\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5a7a\u6e90\u53bf",
                  id: "\u5a7a\u6e90\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5fb7\u5174\u5e02",
                  id: "\u5fb7\u5174\u5e02",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u5c71\u4e1c\u7701",
          id: "\u5c71\u4e1c\u7701",
          subArea: [
            {
              areaName: "\u6d4e\u5357\u5e02",
              id: "\u6d4e\u5357\u5e02",
              subArea: [
                {
                  areaName: "\u5386\u4e0b\u533a",
                  id: "\u5386\u4e0b\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e02\u4e2d\u533a",
                  id: "\u5e02\u4e2d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u69d0\u836b\u533a",
                  id: "\u69d0\u836b\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5929\u6865\u533a",
                  id: "\u5929\u6865\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5386\u57ce\u533a",
                  id: "\u5386\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u6e05\u533a",
                  id: "\u957f\u6e05\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7ae0\u4e18\u533a",
                  id: "\u7ae0\u4e18\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d4e\u9633\u533a",
                  id: "\u6d4e\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u83b1\u829c\u533a",
                  id: "\u83b1\u829c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u94a2\u57ce\u533a",
                  id: "\u94a2\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u9634\u53bf",
                  id: "\u5e73\u9634\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5546\u6cb3\u53bf",
                  id: "\u5546\u6cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6d4e\u5357\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u6d4e\u5357\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9752\u5c9b\u5e02",
              id: "\u9752\u5c9b\u5e02",
              subArea: [
                {
                  areaName: "\u5e02\u5357\u533a",
                  id: "\u5e02\u5357\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e02\u5317\u533a",
                  id: "\u5e02\u5317\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9ec4\u5c9b\u533a",
                  id: "\u9ec4\u5c9b\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5d02\u5c71\u533a",
                  id: "\u5d02\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u674e\u6ca7\u533a",
                  id: "\u674e\u6ca7\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u57ce\u9633\u533a",
                  id: "\u57ce\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5373\u58a8\u533a",
                  id: "\u5373\u58a8\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u80f6\u5dde\u5e02",
                  id: "\u80f6\u5dde\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u5ea6\u5e02",
                  id: "\u5e73\u5ea6\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u83b1\u897f\u5e02",
                  id: "\u83b1\u897f\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6dc4\u535a\u5e02",
              id: "\u6dc4\u535a\u5e02",
              subArea: [
                {
                  areaName: "\u6dc4\u5ddd\u533a",
                  id: "\u6dc4\u5ddd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5f20\u5e97\u533a",
                  id: "\u5f20\u5e97\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u535a\u5c71\u533a",
                  id: "\u535a\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u6dc4\u533a",
                  id: "\u4e34\u6dc4\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5468\u6751\u533a",
                  id: "\u5468\u6751\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6853\u53f0\u53bf",
                  id: "\u6853\u53f0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9ad8\u9752\u53bf",
                  id: "\u9ad8\u9752\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c82\u6e90\u53bf",
                  id: "\u6c82\u6e90\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u67a3\u5e84\u5e02",
              id: "\u67a3\u5e84\u5e02",
              subArea: [
                {
                  areaName: "\u5e02\u4e2d\u533a",
                  id: "\u5e02\u4e2d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u859b\u57ce\u533a",
                  id: "\u859b\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5cc4\u57ce\u533a",
                  id: "\u5cc4\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u53f0\u513f\u5e84\u533a",
                  id: "\u53f0\u513f\u5e84\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5c71\u4ead\u533a",
                  id: "\u5c71\u4ead\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6ed5\u5dde\u5e02",
                  id: "\u6ed5\u5dde\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e1c\u8425\u5e02",
              id: "\u4e1c\u8425\u5e02",
              subArea: [
                {
                  areaName: "\u4e1c\u8425\u533a",
                  id: "\u4e1c\u8425\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6cb3\u53e3\u533a",
                  id: "\u6cb3\u53e3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u57a6\u5229\u533a",
                  id: "\u57a6\u5229\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5229\u6d25\u53bf",
                  id: "\u5229\u6d25\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e7f\u9976\u53bf",
                  id: "\u5e7f\u9976\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u4e1c\u8425\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u4e1c\u8425\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u8425\u6e2f\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  id: "\u4e1c\u8425\u6e2f\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u70df\u53f0\u5e02",
              id: "\u70df\u53f0\u5e02",
              subArea: [
                {
                  areaName: "\u829d\u7f58\u533a",
                  id: "\u829d\u7f58\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u798f\u5c71\u533a",
                  id: "\u798f\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u725f\u5e73\u533a",
                  id: "\u725f\u5e73\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u83b1\u5c71\u533a",
                  id: "\u83b1\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u84ec\u83b1\u533a",
                  id: "\u84ec\u83b1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u70df\u53f0\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u70df\u53f0\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u70df\u53f0\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u70df\u53f0\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u53e3\u5e02",
                  id: "\u9f99\u53e3\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u83b1\u9633\u5e02",
                  id: "\u83b1\u9633\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u83b1\u5dde\u5e02",
                  id: "\u83b1\u5dde\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u62db\u8fdc\u5e02",
                  id: "\u62db\u8fdc\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6816\u971e\u5e02",
                  id: "\u6816\u971e\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6d77\u9633\u5e02",
                  id: "\u6d77\u9633\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6f4d\u574a\u5e02",
              id: "\u6f4d\u574a\u5e02",
              subArea: [
                {
                  areaName: "\u6f4d\u57ce\u533a",
                  id: "\u6f4d\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5bd2\u4ead\u533a",
                  id: "\u5bd2\u4ead\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u574a\u5b50\u533a",
                  id: "\u574a\u5b50\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u594e\u6587\u533a",
                  id: "\u594e\u6587\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u6710\u53bf",
                  id: "\u4e34\u6710\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u660c\u4e50\u53bf",
                  id: "\u660c\u4e50\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6f4d\u574a\u6ee8\u6d77\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u6f4d\u574a\u6ee8\u6d77\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9752\u5dde\u5e02",
                  id: "\u9752\u5dde\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u8bf8\u57ce\u5e02",
                  id: "\u8bf8\u57ce\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5bff\u5149\u5e02",
                  id: "\u5bff\u5149\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u4e18\u5e02",
                  id: "\u5b89\u4e18\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u9ad8\u5bc6\u5e02",
                  id: "\u9ad8\u5bc6\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u660c\u9091\u5e02",
                  id: "\u660c\u9091\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6d4e\u5b81\u5e02",
              id: "\u6d4e\u5b81\u5e02",
              subArea: [
                {
                  areaName: "\u4efb\u57ce\u533a",
                  id: "\u4efb\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5156\u5dde\u533a",
                  id: "\u5156\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5fae\u5c71\u53bf",
                  id: "\u5fae\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9c7c\u53f0\u53bf",
                  id: "\u9c7c\u53f0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u4e61\u53bf",
                  id: "\u91d1\u4e61\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5609\u7965\u53bf",
                  id: "\u5609\u7965\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c76\u4e0a\u53bf",
                  id: "\u6c76\u4e0a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cd7\u6c34\u53bf",
                  id: "\u6cd7\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6881\u5c71\u53bf",
                  id: "\u6881\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6d4e\u5b81\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u6d4e\u5b81\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u66f2\u961c\u5e02",
                  id: "\u66f2\u961c\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u90b9\u57ce\u5e02",
                  id: "\u90b9\u57ce\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6cf0\u5b89\u5e02",
              id: "\u6cf0\u5b89\u5e02",
              subArea: [
                {
                  areaName: "\u6cf0\u5c71\u533a",
                  id: "\u6cf0\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5cb1\u5cb3\u533a",
                  id: "\u5cb1\u5cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b81\u9633\u53bf",
                  id: "\u5b81\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u5e73\u53bf",
                  id: "\u4e1c\u5e73\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u6cf0\u5e02",
                  id: "\u65b0\u6cf0\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u80a5\u57ce\u5e02",
                  id: "\u80a5\u57ce\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5a01\u6d77\u5e02",
              id: "\u5a01\u6d77\u5e02",
              subArea: [
                {
                  areaName: "\u73af\u7fe0\u533a",
                  id: "\u73af\u7fe0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6587\u767b\u533a",
                  id: "\u6587\u767b\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5a01\u6d77\u706b\u70ac\u9ad8\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u5a01\u6d77\u706b\u70ac\u9ad8\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5a01\u6d77\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u5a01\u6d77\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5a01\u6d77\u4e34\u6e2f\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u5a01\u6d77\u4e34\u6e2f\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8363\u6210\u5e02",
                  id: "\u8363\u6210\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e73\u5c71\u5e02",
                  id: "\u4e73\u5c71\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u65e5\u7167\u5e02",
              id: "\u65e5\u7167\u5e02",
              subArea: [
                {
                  areaName: "\u4e1c\u6e2f\u533a",
                  id: "\u4e1c\u6e2f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5c9a\u5c71\u533a",
                  id: "\u5c9a\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e94\u83b2\u53bf",
                  id: "\u4e94\u83b2\u53bf",
                  subArea: [],
                },
                { areaName: "\u8392\u53bf", id: "\u8392\u53bf", subArea: [] },
                {
                  areaName:
                    "\u65e5\u7167\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u65e5\u7167\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e34\u6c82\u5e02",
              id: "\u4e34\u6c82\u5e02",
              subArea: [
                {
                  areaName: "\u5170\u5c71\u533a",
                  id: "\u5170\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7f57\u5e84\u533a",
                  id: "\u7f57\u5e84\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6cb3\u4e1c\u533a",
                  id: "\u6cb3\u4e1c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c82\u5357\u53bf",
                  id: "\u6c82\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u90ef\u57ce\u53bf",
                  id: "\u90ef\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c82\u6c34\u53bf",
                  id: "\u6c82\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5170\u9675\u53bf",
                  id: "\u5170\u9675\u53bf",
                  subArea: [],
                },
                { areaName: "\u8d39\u53bf", id: "\u8d39\u53bf", subArea: [] },
                {
                  areaName: "\u5e73\u9091\u53bf",
                  id: "\u5e73\u9091\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8392\u5357\u53bf",
                  id: "\u8392\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8499\u9634\u53bf",
                  id: "\u8499\u9634\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u6cad\u53bf",
                  id: "\u4e34\u6cad\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u4e34\u6c82\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u4e34\u6c82\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5fb7\u5dde\u5e02",
              id: "\u5fb7\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u5fb7\u57ce\u533a",
                  id: "\u5fb7\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9675\u57ce\u533a",
                  id: "\u9675\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b81\u6d25\u53bf",
                  id: "\u5b81\u6d25\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e86\u4e91\u53bf",
                  id: "\u5e86\u4e91\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u9091\u53bf",
                  id: "\u4e34\u9091\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9f50\u6cb3\u53bf",
                  id: "\u9f50\u6cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u539f\u53bf",
                  id: "\u5e73\u539f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u590f\u6d25\u53bf",
                  id: "\u590f\u6d25\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u57ce\u53bf",
                  id: "\u6b66\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5fb7\u5dde\u5929\u8862\u65b0\u533a",
                  id: "\u5fb7\u5dde\u5929\u8862\u65b0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e50\u9675\u5e02",
                  id: "\u4e50\u9675\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u79b9\u57ce\u5e02",
                  id: "\u79b9\u57ce\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u804a\u57ce\u5e02",
              id: "\u804a\u57ce\u5e02",
              subArea: [
                {
                  areaName: "\u4e1c\u660c\u5e9c\u533a",
                  id: "\u4e1c\u660c\u5e9c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u830c\u5e73\u533a",
                  id: "\u830c\u5e73\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9633\u8c37\u53bf",
                  id: "\u9633\u8c37\u53bf",
                  subArea: [],
                },
                { areaName: "\u8398\u53bf", id: "\u8398\u53bf", subArea: [] },
                {
                  areaName: "\u4e1c\u963f\u53bf",
                  id: "\u4e1c\u963f\u53bf",
                  subArea: [],
                },
                { areaName: "\u51a0\u53bf", id: "\u51a0\u53bf", subArea: [] },
                {
                  areaName: "\u9ad8\u5510\u53bf",
                  id: "\u9ad8\u5510\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u6e05\u5e02",
                  id: "\u4e34\u6e05\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6ee8\u5dde\u5e02",
              id: "\u6ee8\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u6ee8\u57ce\u533a",
                  id: "\u6ee8\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6cbe\u5316\u533a",
                  id: "\u6cbe\u5316\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u60e0\u6c11\u53bf",
                  id: "\u60e0\u6c11\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9633\u4fe1\u53bf",
                  id: "\u9633\u4fe1\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65e0\u68e3\u53bf",
                  id: "\u65e0\u68e3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u535a\u5174\u53bf",
                  id: "\u535a\u5174\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u90b9\u5e73\u5e02",
                  id: "\u90b9\u5e73\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u83cf\u6cfd\u5e02",
              id: "\u83cf\u6cfd\u5e02",
              subArea: [
                {
                  areaName: "\u7261\u4e39\u533a",
                  id: "\u7261\u4e39\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b9a\u9676\u533a",
                  id: "\u5b9a\u9676\u533a",
                  subArea: [],
                },
                { areaName: "\u66f9\u53bf", id: "\u66f9\u53bf", subArea: [] },
                { areaName: "\u5355\u53bf", id: "\u5355\u53bf", subArea: [] },
                {
                  areaName: "\u6210\u6b66\u53bf",
                  id: "\u6210\u6b66\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5de8\u91ce\u53bf",
                  id: "\u5de8\u91ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u90d3\u57ce\u53bf",
                  id: "\u90d3\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9104\u57ce\u53bf",
                  id: "\u9104\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u660e\u53bf",
                  id: "\u4e1c\u660e\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u83cf\u6cfd\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u83cf\u6cfd\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u83cf\u6cfd\u9ad8\u65b0\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u83cf\u6cfd\u9ad8\u65b0\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u6cb3\u5357\u7701",
          id: "\u6cb3\u5357\u7701",
          subArea: [
            {
              areaName: "\u90d1\u5dde\u5e02",
              id: "\u90d1\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u4e2d\u539f\u533a",
                  id: "\u4e2d\u539f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e8c\u4e03\u533a",
                  id: "\u4e8c\u4e03\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7ba1\u57ce\u56de\u65cf\u533a",
                  id: "\u7ba1\u57ce\u56de\u65cf\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u6c34\u533a",
                  id: "\u91d1\u6c34\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e0a\u8857\u533a",
                  id: "\u4e0a\u8857\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u60e0\u6d4e\u533a",
                  id: "\u60e0\u6d4e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e2d\u725f\u53bf",
                  id: "\u4e2d\u725f\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u90d1\u5dde\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u90d1\u5dde\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u90d1\u5dde\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u90d1\u5dde\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u90d1\u5dde\u822a\u7a7a\u6e2f\u7ecf\u6d4e\u7efc\u5408\u5b9e\u9a8c\u533a",
                  id: "\u90d1\u5dde\u822a\u7a7a\u6e2f\u7ecf\u6d4e\u7efc\u5408\u5b9e\u9a8c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5de9\u4e49\u5e02",
                  id: "\u5de9\u4e49\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u8365\u9633\u5e02",
                  id: "\u8365\u9633\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u5bc6\u5e02",
                  id: "\u65b0\u5bc6\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u90d1\u5e02",
                  id: "\u65b0\u90d1\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u767b\u5c01\u5e02",
                  id: "\u767b\u5c01\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5f00\u5c01\u5e02",
              id: "\u5f00\u5c01\u5e02",
              subArea: [
                {
                  areaName: "\u9f99\u4ead\u533a",
                  id: "\u9f99\u4ead\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u987a\u6cb3\u56de\u65cf\u533a",
                  id: "\u987a\u6cb3\u56de\u65cf\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f13\u697c\u533a",
                  id: "\u9f13\u697c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u79b9\u738b\u53f0\u533a",
                  id: "\u79b9\u738b\u53f0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7965\u7b26\u533a",
                  id: "\u7965\u7b26\u533a",
                  subArea: [],
                },
                { areaName: "\u675e\u53bf", id: "\u675e\u53bf", subArea: [] },
                {
                  areaName: "\u901a\u8bb8\u53bf",
                  id: "\u901a\u8bb8\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c09\u6c0f\u53bf",
                  id: "\u5c09\u6c0f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5170\u8003\u53bf",
                  id: "\u5170\u8003\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6d1b\u9633\u5e02",
              id: "\u6d1b\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u8001\u57ce\u533a",
                  id: "\u8001\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u5de5\u533a",
                  id: "\u897f\u5de5\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u700d\u6cb3\u56de\u65cf\u533a",
                  id: "\u700d\u6cb3\u56de\u65cf\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6da7\u897f\u533a",
                  id: "\u6da7\u897f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5043\u5e08\u533a",
                  id: "\u5043\u5e08\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b5f\u6d25\u533a",
                  id: "\u5b5f\u6d25\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d1b\u9f99\u533a",
                  id: "\u6d1b\u9f99\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u5b89\u53bf",
                  id: "\u65b0\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u683e\u5ddd\u53bf",
                  id: "\u683e\u5ddd\u53bf",
                  subArea: [],
                },
                { areaName: "\u5d69\u53bf", id: "\u5d69\u53bf", subArea: [] },
                {
                  areaName: "\u6c5d\u9633\u53bf",
                  id: "\u6c5d\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b9c\u9633\u53bf",
                  id: "\u5b9c\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d1b\u5b81\u53bf",
                  id: "\u6d1b\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4f0a\u5ddd\u53bf",
                  id: "\u4f0a\u5ddd\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6d1b\u9633\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u6d1b\u9633\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5e73\u9876\u5c71\u5e02",
              id: "\u5e73\u9876\u5c71\u5e02",
              subArea: [
                {
                  areaName: "\u65b0\u534e\u533a",
                  id: "\u65b0\u534e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u536b\u4e1c\u533a",
                  id: "\u536b\u4e1c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u9f99\u533a",
                  id: "\u77f3\u9f99\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e5b\u6cb3\u533a",
                  id: "\u6e5b\u6cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b9d\u4e30\u53bf",
                  id: "\u5b9d\u4e30\u53bf",
                  subArea: [],
                },
                { areaName: "\u53f6\u53bf", id: "\u53f6\u53bf", subArea: [] },
                {
                  areaName: "\u9c81\u5c71\u53bf",
                  id: "\u9c81\u5c71\u53bf",
                  subArea: [],
                },
                { areaName: "\u90cf\u53bf", id: "\u90cf\u53bf", subArea: [] },
                {
                  areaName:
                    "\u5e73\u9876\u5c71\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u5e73\u9876\u5c71\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5e73\u9876\u5c71\u5e02\u57ce\u4e61\u4e00\u4f53\u5316\u793a\u8303\u533a",
                  id: "\u5e73\u9876\u5c71\u5e02\u57ce\u4e61\u4e00\u4f53\u5316\u793a\u8303\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u821e\u94a2\u5e02",
                  id: "\u821e\u94a2\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6c5d\u5dde\u5e02",
                  id: "\u6c5d\u5dde\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5b89\u9633\u5e02",
              id: "\u5b89\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u6587\u5cf0\u533a",
                  id: "\u6587\u5cf0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5317\u5173\u533a",
                  id: "\u5317\u5173\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6bb7\u90fd\u533a",
                  id: "\u6bb7\u90fd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u5b89\u533a",
                  id: "\u9f99\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u9633\u53bf",
                  id: "\u5b89\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c64\u9634\u53bf",
                  id: "\u6c64\u9634\u53bf",
                  subArea: [],
                },
                { areaName: "\u6ed1\u53bf", id: "\u6ed1\u53bf", subArea: [] },
                {
                  areaName: "\u5185\u9ec4\u53bf",
                  id: "\u5185\u9ec4\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5b89\u9633\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u5b89\u9633\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6797\u5dde\u5e02",
                  id: "\u6797\u5dde\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9e64\u58c1\u5e02",
              id: "\u9e64\u58c1\u5e02",
              subArea: [
                {
                  areaName: "\u9e64\u5c71\u533a",
                  id: "\u9e64\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5c71\u57ce\u533a",
                  id: "\u5c71\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6dc7\u6ee8\u533a",
                  id: "\u6dc7\u6ee8\u533a",
                  subArea: [],
                },
                { areaName: "\u6d5a\u53bf", id: "\u6d5a\u53bf", subArea: [] },
                { areaName: "\u6dc7\u53bf", id: "\u6dc7\u53bf", subArea: [] },
                {
                  areaName:
                    "\u9e64\u58c1\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u9e64\u58c1\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u65b0\u4e61\u5e02",
              id: "\u65b0\u4e61\u5e02",
              subArea: [
                {
                  areaName: "\u7ea2\u65d7\u533a",
                  id: "\u7ea2\u65d7\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u536b\u6ee8\u533a",
                  id: "\u536b\u6ee8\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u51e4\u6cc9\u533a",
                  id: "\u51e4\u6cc9\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7267\u91ce\u533a",
                  id: "\u7267\u91ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u4e61\u53bf",
                  id: "\u65b0\u4e61\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u83b7\u5609\u53bf",
                  id: "\u83b7\u5609\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u539f\u9633\u53bf",
                  id: "\u539f\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5ef6\u6d25\u53bf",
                  id: "\u5ef6\u6d25\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c01\u4e18\u53bf",
                  id: "\u5c01\u4e18\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u65b0\u4e61\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u65b0\u4e61\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u65b0\u4e61\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u65b0\u4e61\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u65b0\u4e61\u5e02\u5e73\u539f\u57ce\u4e61\u4e00\u4f53\u5316\u793a\u8303\u533a",
                  id: "\u65b0\u4e61\u5e02\u5e73\u539f\u57ce\u4e61\u4e00\u4f53\u5316\u793a\u8303\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u536b\u8f89\u5e02",
                  id: "\u536b\u8f89\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u8f89\u53bf\u5e02",
                  id: "\u8f89\u53bf\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u57a3\u5e02",
                  id: "\u957f\u57a3\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u7126\u4f5c\u5e02",
              id: "\u7126\u4f5c\u5e02",
              subArea: [
                {
                  areaName: "\u89e3\u653e\u533a",
                  id: "\u89e3\u653e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e2d\u7ad9\u533a",
                  id: "\u4e2d\u7ad9\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9a6c\u6751\u533a",
                  id: "\u9a6c\u6751\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5c71\u9633\u533a",
                  id: "\u5c71\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4fee\u6b66\u53bf",
                  id: "\u4fee\u6b66\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u535a\u7231\u53bf",
                  id: "\u535a\u7231\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u965f\u53bf",
                  id: "\u6b66\u965f\u53bf",
                  subArea: [],
                },
                { areaName: "\u6e29\u53bf", id: "\u6e29\u53bf", subArea: [] },
                {
                  areaName:
                    "\u7126\u4f5c\u57ce\u4e61\u4e00\u4f53\u5316\u793a\u8303\u533a",
                  id: "\u7126\u4f5c\u57ce\u4e61\u4e00\u4f53\u5316\u793a\u8303\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c81\u9633\u5e02",
                  id: "\u6c81\u9633\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5b5f\u5dde\u5e02",
                  id: "\u5b5f\u5dde\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6fee\u9633\u5e02",
              id: "\u6fee\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u534e\u9f99\u533a",
                  id: "\u534e\u9f99\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e05\u4e30\u53bf",
                  id: "\u6e05\u4e30\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u4e50\u53bf",
                  id: "\u5357\u4e50\u53bf",
                  subArea: [],
                },
                { areaName: "\u8303\u53bf", id: "\u8303\u53bf", subArea: [] },
                {
                  areaName: "\u53f0\u524d\u53bf",
                  id: "\u53f0\u524d\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6fee\u9633\u53bf",
                  id: "\u6fee\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cb3\u5357\u6fee\u9633\u5de5\u4e1a\u56ed\u533a",
                  id: "\u6cb3\u5357\u6fee\u9633\u5de5\u4e1a\u56ed\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6fee\u9633\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u6fee\u9633\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8bb8\u660c\u5e02",
              id: "\u8bb8\u660c\u5e02",
              subArea: [
                {
                  areaName: "\u9b4f\u90fd\u533a",
                  id: "\u9b4f\u90fd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5efa\u5b89\u533a",
                  id: "\u5efa\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9122\u9675\u53bf",
                  id: "\u9122\u9675\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8944\u57ce\u53bf",
                  id: "\u8944\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u8bb8\u660c\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u8bb8\u660c\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u79b9\u5dde\u5e02",
                  id: "\u79b9\u5dde\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u845b\u5e02",
                  id: "\u957f\u845b\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6f2f\u6cb3\u5e02",
              id: "\u6f2f\u6cb3\u5e02",
              subArea: [
                {
                  areaName: "\u6e90\u6c47\u533a",
                  id: "\u6e90\u6c47\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u90fe\u57ce\u533a",
                  id: "\u90fe\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u53ec\u9675\u533a",
                  id: "\u53ec\u9675\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u821e\u9633\u53bf",
                  id: "\u821e\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u988d\u53bf",
                  id: "\u4e34\u988d\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6f2f\u6cb3\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u6f2f\u6cb3\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e09\u95e8\u5ce1\u5e02",
              id: "\u4e09\u95e8\u5ce1\u5e02",
              subArea: [
                {
                  areaName: "\u6e56\u6ee8\u533a",
                  id: "\u6e56\u6ee8\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9655\u5dde\u533a",
                  id: "\u9655\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e11\u6c60\u53bf",
                  id: "\u6e11\u6c60\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5362\u6c0f\u53bf",
                  id: "\u5362\u6c0f\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6cb3\u5357\u4e09\u95e8\u5ce1\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  id: "\u6cb3\u5357\u4e09\u95e8\u5ce1\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e49\u9a6c\u5e02",
                  id: "\u4e49\u9a6c\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u7075\u5b9d\u5e02",
                  id: "\u7075\u5b9d\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5357\u9633\u5e02",
              id: "\u5357\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u5b9b\u57ce\u533a",
                  id: "\u5b9b\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5367\u9f99\u533a",
                  id: "\u5367\u9f99\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u53ec\u53bf",
                  id: "\u5357\u53ec\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65b9\u57ce\u53bf",
                  id: "\u65b9\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u5ce1\u53bf",
                  id: "\u897f\u5ce1\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9547\u5e73\u53bf",
                  id: "\u9547\u5e73\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5185\u4e61\u53bf",
                  id: "\u5185\u4e61\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6dc5\u5ddd\u53bf",
                  id: "\u6dc5\u5ddd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u793e\u65d7\u53bf",
                  id: "\u793e\u65d7\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5510\u6cb3\u53bf",
                  id: "\u5510\u6cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u91ce\u53bf",
                  id: "\u65b0\u91ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6850\u67cf\u53bf",
                  id: "\u6850\u67cf\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5357\u9633\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u5357\u9633\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5357\u9633\u5e02\u57ce\u4e61\u4e00\u4f53\u5316\u793a\u8303\u533a",
                  id: "\u5357\u9633\u5e02\u57ce\u4e61\u4e00\u4f53\u5316\u793a\u8303\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9093\u5dde\u5e02",
                  id: "\u9093\u5dde\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5546\u4e18\u5e02",
              id: "\u5546\u4e18\u5e02",
              subArea: [
                {
                  areaName: "\u6881\u56ed\u533a",
                  id: "\u6881\u56ed\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7762\u9633\u533a",
                  id: "\u7762\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c11\u6743\u53bf",
                  id: "\u6c11\u6743\u53bf",
                  subArea: [],
                },
                { areaName: "\u7762\u53bf", id: "\u7762\u53bf", subArea: [] },
                {
                  areaName: "\u5b81\u9675\u53bf",
                  id: "\u5b81\u9675\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u67d8\u57ce\u53bf",
                  id: "\u67d8\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u865e\u57ce\u53bf",
                  id: "\u865e\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u590f\u9091\u53bf",
                  id: "\u590f\u9091\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u8c6b\u4e1c\u7efc\u5408\u7269\u6d41\u4ea7\u4e1a\u805a\u96c6\u533a",
                  id: "\u8c6b\u4e1c\u7efc\u5408\u7269\u6d41\u4ea7\u4e1a\u805a\u96c6\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6cb3\u5357\u5546\u4e18\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  id: "\u6cb3\u5357\u5546\u4e18\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u57ce\u5e02",
                  id: "\u6c38\u57ce\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4fe1\u9633\u5e02",
              id: "\u4fe1\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u6d49\u6cb3\u533a",
                  id: "\u6d49\u6cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u6865\u533a",
                  id: "\u5e73\u6865\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7f57\u5c71\u53bf",
                  id: "\u7f57\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5149\u5c71\u53bf",
                  id: "\u5149\u5c71\u53bf",
                  subArea: [],
                },
                { areaName: "\u65b0\u53bf", id: "\u65b0\u53bf", subArea: [] },
                {
                  areaName: "\u5546\u57ce\u53bf",
                  id: "\u5546\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u56fa\u59cb\u53bf",
                  id: "\u56fa\u59cb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6f62\u5ddd\u53bf",
                  id: "\u6f62\u5ddd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6dee\u6ee8\u53bf",
                  id: "\u6dee\u6ee8\u53bf",
                  subArea: [],
                },
                { areaName: "\u606f\u53bf", id: "\u606f\u53bf", subArea: [] },
                {
                  areaName:
                    "\u4fe1\u9633\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  id: "\u4fe1\u9633\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5468\u53e3\u5e02",
              id: "\u5468\u53e3\u5e02",
              subArea: [
                {
                  areaName: "\u5ddd\u6c47\u533a",
                  id: "\u5ddd\u6c47\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6dee\u9633\u533a",
                  id: "\u6dee\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6276\u6c9f\u53bf",
                  id: "\u6276\u6c9f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u534e\u53bf",
                  id: "\u897f\u534e\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5546\u6c34\u53bf",
                  id: "\u5546\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c88\u4e18\u53bf",
                  id: "\u6c88\u4e18\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u90f8\u57ce\u53bf",
                  id: "\u90f8\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u592a\u5eb7\u53bf",
                  id: "\u592a\u5eb7\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9e7f\u9091\u53bf",
                  id: "\u9e7f\u9091\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5468\u53e3\u4e34\u6e2f\u5f00\u53d1\u533a",
                  id: "\u5468\u53e3\u4e34\u6e2f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9879\u57ce\u5e02",
                  id: "\u9879\u57ce\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9a7b\u9a6c\u5e97\u5e02",
              id: "\u9a7b\u9a6c\u5e97\u5e02",
              subArea: [
                {
                  areaName: "\u9a7f\u57ce\u533a",
                  id: "\u9a7f\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u5e73\u53bf",
                  id: "\u897f\u5e73\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e0a\u8521\u53bf",
                  id: "\u4e0a\u8521\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u8206\u53bf",
                  id: "\u5e73\u8206\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6b63\u9633\u53bf",
                  id: "\u6b63\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u786e\u5c71\u53bf",
                  id: "\u786e\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6ccc\u9633\u53bf",
                  id: "\u6ccc\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c5d\u5357\u53bf",
                  id: "\u6c5d\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9042\u5e73\u53bf",
                  id: "\u9042\u5e73\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u8521\u53bf",
                  id: "\u65b0\u8521\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6cb3\u5357\u9a7b\u9a6c\u5e97\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  id: "\u6cb3\u5357\u9a7b\u9a6c\u5e97\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName:
                "\u7701\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u533a\u5212",
              id: "\u7701\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u533a\u5212",
              subArea: [
                {
                  areaName: "\u6d4e\u6e90\u5e02",
                  id: "\u6d4e\u6e90\u5e02",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u6e56\u5317\u7701",
          id: "\u6e56\u5317\u7701",
          subArea: [
            {
              areaName: "\u6b66\u6c49\u5e02",
              id: "\u6b66\u6c49\u5e02",
              subArea: [
                {
                  areaName: "\u6c5f\u5cb8\u533a",
                  id: "\u6c5f\u5cb8\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c5f\u6c49\u533a",
                  id: "\u6c5f\u6c49\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u785a\u53e3\u533a",
                  id: "\u785a\u53e3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c49\u9633\u533a",
                  id: "\u6c49\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u660c\u533a",
                  id: "\u6b66\u660c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9752\u5c71\u533a",
                  id: "\u9752\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d2a\u5c71\u533a",
                  id: "\u6d2a\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u897f\u6e56\u533a",
                  id: "\u4e1c\u897f\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c49\u5357\u533a",
                  id: "\u6c49\u5357\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8521\u7538\u533a",
                  id: "\u8521\u7538\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c5f\u590f\u533a",
                  id: "\u6c5f\u590f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9ec4\u9642\u533a",
                  id: "\u9ec4\u9642\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u6d32\u533a",
                  id: "\u65b0\u6d32\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9ec4\u77f3\u5e02",
              id: "\u9ec4\u77f3\u5e02",
              subArea: [
                {
                  areaName: "\u9ec4\u77f3\u6e2f\u533a",
                  id: "\u9ec4\u77f3\u6e2f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u585e\u5c71\u533a",
                  id: "\u897f\u585e\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e0b\u9646\u533a",
                  id: "\u4e0b\u9646\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u94c1\u5c71\u533a",
                  id: "\u94c1\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9633\u65b0\u53bf",
                  id: "\u9633\u65b0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u51b6\u5e02",
                  id: "\u5927\u51b6\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5341\u5830\u5e02",
              id: "\u5341\u5830\u5e02",
              subArea: [
                {
                  areaName: "\u8305\u7bad\u533a",
                  id: "\u8305\u7bad\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5f20\u6e7e\u533a",
                  id: "\u5f20\u6e7e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u90e7\u9633\u533a",
                  id: "\u90e7\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u90e7\u897f\u53bf",
                  id: "\u90e7\u897f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7af9\u5c71\u53bf",
                  id: "\u7af9\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7af9\u6eaa\u53bf",
                  id: "\u7af9\u6eaa\u53bf",
                  subArea: [],
                },
                { areaName: "\u623f\u53bf", id: "\u623f\u53bf", subArea: [] },
                {
                  areaName: "\u4e39\u6c5f\u53e3\u5e02",
                  id: "\u4e39\u6c5f\u53e3\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5b9c\u660c\u5e02",
              id: "\u5b9c\u660c\u5e02",
              subArea: [
                {
                  areaName: "\u897f\u9675\u533a",
                  id: "\u897f\u9675\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4f0d\u5bb6\u5c97\u533a",
                  id: "\u4f0d\u5bb6\u5c97\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u70b9\u519b\u533a",
                  id: "\u70b9\u519b\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7307\u4ead\u533a",
                  id: "\u7307\u4ead\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5937\u9675\u533a",
                  id: "\u5937\u9675\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8fdc\u5b89\u53bf",
                  id: "\u8fdc\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5174\u5c71\u53bf",
                  id: "\u5174\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u79ed\u5f52\u53bf",
                  id: "\u79ed\u5f52\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u9633\u571f\u5bb6\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u957f\u9633\u571f\u5bb6\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e94\u5cf0\u571f\u5bb6\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u4e94\u5cf0\u571f\u5bb6\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b9c\u90fd\u5e02",
                  id: "\u5b9c\u90fd\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5f53\u9633\u5e02",
                  id: "\u5f53\u9633\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u679d\u6c5f\u5e02",
                  id: "\u679d\u6c5f\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8944\u9633\u5e02",
              id: "\u8944\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u8944\u57ce\u533a",
                  id: "\u8944\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6a0a\u57ce\u533a",
                  id: "\u6a0a\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8944\u5dde\u533a",
                  id: "\u8944\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u6f33\u53bf",
                  id: "\u5357\u6f33\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8c37\u57ce\u53bf",
                  id: "\u8c37\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4fdd\u5eb7\u53bf",
                  id: "\u4fdd\u5eb7\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8001\u6cb3\u53e3\u5e02",
                  id: "\u8001\u6cb3\u53e3\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u67a3\u9633\u5e02",
                  id: "\u67a3\u9633\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5b9c\u57ce\u5e02",
                  id: "\u5b9c\u57ce\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9102\u5dde\u5e02",
              id: "\u9102\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u6881\u5b50\u6e56\u533a",
                  id: "\u6881\u5b50\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u534e\u5bb9\u533a",
                  id: "\u534e\u5bb9\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9102\u57ce\u533a",
                  id: "\u9102\u57ce\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8346\u95e8\u5e02",
              id: "\u8346\u95e8\u5e02",
              subArea: [
                {
                  areaName: "\u4e1c\u5b9d\u533a",
                  id: "\u4e1c\u5b9d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6387\u5200\u533a",
                  id: "\u6387\u5200\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c99\u6d0b\u53bf",
                  id: "\u6c99\u6d0b\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u949f\u7965\u5e02",
                  id: "\u949f\u7965\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4eac\u5c71\u5e02",
                  id: "\u4eac\u5c71\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5b5d\u611f\u5e02",
              id: "\u5b5d\u611f\u5e02",
              subArea: [
                {
                  areaName: "\u5b5d\u5357\u533a",
                  id: "\u5b5d\u5357\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b5d\u660c\u53bf",
                  id: "\u5b5d\u660c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u609f\u53bf",
                  id: "\u5927\u609f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e91\u68a6\u53bf",
                  id: "\u4e91\u68a6\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e94\u57ce\u5e02",
                  id: "\u5e94\u57ce\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u9646\u5e02",
                  id: "\u5b89\u9646\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6c49\u5ddd\u5e02",
                  id: "\u6c49\u5ddd\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8346\u5dde\u5e02",
              id: "\u8346\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u6c99\u5e02\u533a",
                  id: "\u6c99\u5e02\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8346\u5dde\u533a",
                  id: "\u8346\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u516c\u5b89\u53bf",
                  id: "\u516c\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c5f\u9675\u53bf",
                  id: "\u6c5f\u9675\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u8346\u5dde\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u8346\u5dde\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u9996\u5e02",
                  id: "\u77f3\u9996\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6d2a\u6e56\u5e02",
                  id: "\u6d2a\u6e56\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u677e\u6ecb\u5e02",
                  id: "\u677e\u6ecb\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u76d1\u5229\u5e02",
                  id: "\u76d1\u5229\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9ec4\u5188\u5e02",
              id: "\u9ec4\u5188\u5e02",
              subArea: [
                {
                  areaName: "\u9ec4\u5dde\u533a",
                  id: "\u9ec4\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u56e2\u98ce\u53bf",
                  id: "\u56e2\u98ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7ea2\u5b89\u53bf",
                  id: "\u7ea2\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7f57\u7530\u53bf",
                  id: "\u7f57\u7530\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u82f1\u5c71\u53bf",
                  id: "\u82f1\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d60\u6c34\u53bf",
                  id: "\u6d60\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8572\u6625\u53bf",
                  id: "\u8572\u6625\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9ec4\u6885\u53bf",
                  id: "\u9ec4\u6885\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u611f\u6e56\u7ba1\u7406\u533a",
                  id: "\u9f99\u611f\u6e56\u7ba1\u7406\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9ebb\u57ce\u5e02",
                  id: "\u9ebb\u57ce\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u7a74\u5e02",
                  id: "\u6b66\u7a74\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u54b8\u5b81\u5e02",
              id: "\u54b8\u5b81\u5e02",
              subArea: [
                {
                  areaName: "\u54b8\u5b89\u533a",
                  id: "\u54b8\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5609\u9c7c\u53bf",
                  id: "\u5609\u9c7c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u901a\u57ce\u53bf",
                  id: "\u901a\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5d07\u9633\u53bf",
                  id: "\u5d07\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u901a\u5c71\u53bf",
                  id: "\u901a\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8d64\u58c1\u5e02",
                  id: "\u8d64\u58c1\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u968f\u5dde\u5e02",
              id: "\u968f\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u66fe\u90fd\u533a",
                  id: "\u66fe\u90fd\u533a",
                  subArea: [],
                },
                { areaName: "\u968f\u53bf", id: "\u968f\u53bf", subArea: [] },
                {
                  areaName: "\u5e7f\u6c34\u5e02",
                  id: "\u5e7f\u6c34\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName:
                "\u6069\u65bd\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde",
              id: "\u6069\u65bd\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u6069\u65bd\u5e02",
                  id: "\u6069\u65bd\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5229\u5ddd\u5e02",
                  id: "\u5229\u5ddd\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5efa\u59cb\u53bf",
                  id: "\u5efa\u59cb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5df4\u4e1c\u53bf",
                  id: "\u5df4\u4e1c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5ba3\u6069\u53bf",
                  id: "\u5ba3\u6069\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u54b8\u4e30\u53bf",
                  id: "\u54b8\u4e30\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6765\u51e4\u53bf",
                  id: "\u6765\u51e4\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9e64\u5cf0\u53bf",
                  id: "\u9e64\u5cf0\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName:
                "\u7701\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u533a\u5212",
              id: "\u7701\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u533a\u5212",
              subArea: [
                {
                  areaName: "\u4ed9\u6843\u5e02",
                  id: "\u4ed9\u6843\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6f5c\u6c5f\u5e02",
                  id: "\u6f5c\u6c5f\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5929\u95e8\u5e02",
                  id: "\u5929\u95e8\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u795e\u519c\u67b6\u6797\u533a",
                  id: "\u795e\u519c\u67b6\u6797\u533a",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u6e56\u5357\u7701",
          id: "\u6e56\u5357\u7701",
          subArea: [
            {
              areaName: "\u957f\u6c99\u5e02",
              id: "\u957f\u6c99\u5e02",
              subArea: [
                {
                  areaName: "\u8299\u84c9\u533a",
                  id: "\u8299\u84c9\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5929\u5fc3\u533a",
                  id: "\u5929\u5fc3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5cb3\u9e93\u533a",
                  id: "\u5cb3\u9e93\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5f00\u798f\u533a",
                  id: "\u5f00\u798f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u96e8\u82b1\u533a",
                  id: "\u96e8\u82b1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u671b\u57ce\u533a",
                  id: "\u671b\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u6c99\u53bf",
                  id: "\u957f\u6c99\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d4f\u9633\u5e02",
                  id: "\u6d4f\u9633\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5b81\u4e61\u5e02",
                  id: "\u5b81\u4e61\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u682a\u6d32\u5e02",
              id: "\u682a\u6d32\u5e02",
              subArea: [
                {
                  areaName: "\u8377\u5858\u533a",
                  id: "\u8377\u5858\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u82a6\u6dde\u533a",
                  id: "\u82a6\u6dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u5cf0\u533a",
                  id: "\u77f3\u5cf0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5929\u5143\u533a",
                  id: "\u5929\u5143\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e0c\u53e3\u533a",
                  id: "\u6e0c\u53e3\u533a",
                  subArea: [],
                },
                { areaName: "\u6538\u53bf", id: "\u6538\u53bf", subArea: [] },
                {
                  areaName: "\u8336\u9675\u53bf",
                  id: "\u8336\u9675\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u708e\u9675\u53bf",
                  id: "\u708e\u9675\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u91b4\u9675\u5e02",
                  id: "\u91b4\u9675\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6e58\u6f6d\u5e02",
              id: "\u6e58\u6f6d\u5e02",
              subArea: [
                {
                  areaName: "\u96e8\u6e56\u533a",
                  id: "\u96e8\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5cb3\u5858\u533a",
                  id: "\u5cb3\u5858\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e58\u6f6d\u53bf",
                  id: "\u6e58\u6f6d\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6e56\u5357\u6e58\u6f6d\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u56ed\u533a",
                  id: "\u6e56\u5357\u6e58\u6f6d\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u56ed\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e58\u6f6d\u662d\u5c71\u793a\u8303\u533a",
                  id: "\u6e58\u6f6d\u662d\u5c71\u793a\u8303\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e58\u6f6d\u4e5d\u534e\u793a\u8303\u533a",
                  id: "\u6e58\u6f6d\u4e5d\u534e\u793a\u8303\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e58\u4e61\u5e02",
                  id: "\u6e58\u4e61\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u97f6\u5c71\u5e02",
                  id: "\u97f6\u5c71\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8861\u9633\u5e02",
              id: "\u8861\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u73e0\u6656\u533a",
                  id: "\u73e0\u6656\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u96c1\u5cf0\u533a",
                  id: "\u96c1\u5cf0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u9f13\u533a",
                  id: "\u77f3\u9f13\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u84b8\u6e58\u533a",
                  id: "\u84b8\u6e58\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u5cb3\u533a",
                  id: "\u5357\u5cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8861\u9633\u53bf",
                  id: "\u8861\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8861\u5357\u53bf",
                  id: "\u8861\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8861\u5c71\u53bf",
                  id: "\u8861\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8861\u4e1c\u53bf",
                  id: "\u8861\u4e1c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7941\u4e1c\u53bf",
                  id: "\u7941\u4e1c\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6e56\u5357\u8861\u9633\u677e\u6728\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  id: "\u6e56\u5357\u8861\u9633\u677e\u6728\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6e56\u5357\u8861\u9633\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u56ed\u533a",
                  id: "\u6e56\u5357\u8861\u9633\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u56ed\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8012\u9633\u5e02",
                  id: "\u8012\u9633\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5e38\u5b81\u5e02",
                  id: "\u5e38\u5b81\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u90b5\u9633\u5e02",
              id: "\u90b5\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u53cc\u6e05\u533a",
                  id: "\u53cc\u6e05\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u7965\u533a",
                  id: "\u5927\u7965\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5317\u5854\u533a",
                  id: "\u5317\u5854\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u90b5\u53bf",
                  id: "\u65b0\u90b5\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u90b5\u9633\u53bf",
                  id: "\u90b5\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9686\u56de\u53bf",
                  id: "\u9686\u56de\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d1e\u53e3\u53bf",
                  id: "\u6d1e\u53e3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7ee5\u5b81\u53bf",
                  id: "\u7ee5\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u5b81\u53bf",
                  id: "\u65b0\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u57ce\u6b65\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u57ce\u6b65\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u5188\u5e02",
                  id: "\u6b66\u5188\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u90b5\u4e1c\u5e02",
                  id: "\u90b5\u4e1c\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5cb3\u9633\u5e02",
              id: "\u5cb3\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u5cb3\u9633\u697c\u533a",
                  id: "\u5cb3\u9633\u697c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e91\u6eaa\u533a",
                  id: "\u4e91\u6eaa\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u541b\u5c71\u533a",
                  id: "\u541b\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5cb3\u9633\u53bf",
                  id: "\u5cb3\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u534e\u5bb9\u53bf",
                  id: "\u534e\u5bb9\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6e58\u9634\u53bf",
                  id: "\u6e58\u9634\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u6c5f\u53bf",
                  id: "\u5e73\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5cb3\u9633\u5e02\u5c48\u539f\u7ba1\u7406\u533a",
                  id: "\u5cb3\u9633\u5e02\u5c48\u539f\u7ba1\u7406\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c68\u7f57\u5e02",
                  id: "\u6c68\u7f57\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u6e58\u5e02",
                  id: "\u4e34\u6e58\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5e38\u5fb7\u5e02",
              id: "\u5e38\u5fb7\u5e02",
              subArea: [
                {
                  areaName: "\u6b66\u9675\u533a",
                  id: "\u6b66\u9675\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f0e\u57ce\u533a",
                  id: "\u9f0e\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u4e61\u53bf",
                  id: "\u5b89\u4e61\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c49\u5bff\u53bf",
                  id: "\u6c49\u5bff\u53bf",
                  subArea: [],
                },
                { areaName: "\u6fa7\u53bf", id: "\u6fa7\u53bf", subArea: [] },
                {
                  areaName: "\u4e34\u6fa7\u53bf",
                  id: "\u4e34\u6fa7\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6843\u6e90\u53bf",
                  id: "\u6843\u6e90\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u95e8\u53bf",
                  id: "\u77f3\u95e8\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5e38\u5fb7\u5e02\u897f\u6d1e\u5ead\u7ba1\u7406\u533a",
                  id: "\u5e38\u5fb7\u5e02\u897f\u6d1e\u5ead\u7ba1\u7406\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d25\u5e02\u5e02",
                  id: "\u6d25\u5e02\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5f20\u5bb6\u754c\u5e02",
              id: "\u5f20\u5bb6\u754c\u5e02",
              subArea: [
                {
                  areaName: "\u6c38\u5b9a\u533a",
                  id: "\u6c38\u5b9a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u9675\u6e90\u533a",
                  id: "\u6b66\u9675\u6e90\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6148\u5229\u53bf",
                  id: "\u6148\u5229\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6851\u690d\u53bf",
                  id: "\u6851\u690d\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u76ca\u9633\u5e02",
              id: "\u76ca\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u8d44\u9633\u533a",
                  id: "\u8d44\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8d6b\u5c71\u533a",
                  id: "\u8d6b\u5c71\u533a",
                  subArea: [],
                },
                { areaName: "\u5357\u53bf", id: "\u5357\u53bf", subArea: [] },
                {
                  areaName: "\u6843\u6c5f\u53bf",
                  id: "\u6843\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u5316\u53bf",
                  id: "\u5b89\u5316\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u76ca\u9633\u5e02\u5927\u901a\u6e56\u7ba1\u7406\u533a",
                  id: "\u76ca\u9633\u5e02\u5927\u901a\u6e56\u7ba1\u7406\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6e56\u5357\u76ca\u9633\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u56ed\u533a",
                  id: "\u6e56\u5357\u76ca\u9633\u9ad8\u65b0\u6280\u672f\u4ea7\u4e1a\u56ed\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c85\u6c5f\u5e02",
                  id: "\u6c85\u6c5f\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u90f4\u5dde\u5e02",
              id: "\u90f4\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u5317\u6e56\u533a",
                  id: "\u5317\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u82cf\u4ed9\u533a",
                  id: "\u82cf\u4ed9\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6842\u9633\u53bf",
                  id: "\u6842\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b9c\u7ae0\u53bf",
                  id: "\u5b9c\u7ae0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u5174\u53bf",
                  id: "\u6c38\u5174\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5609\u79be\u53bf",
                  id: "\u5609\u79be\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u6b66\u53bf",
                  id: "\u4e34\u6b66\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c5d\u57ce\u53bf",
                  id: "\u6c5d\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6842\u4e1c\u53bf",
                  id: "\u6842\u4e1c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u4ec1\u53bf",
                  id: "\u5b89\u4ec1\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8d44\u5174\u5e02",
                  id: "\u8d44\u5174\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6c38\u5dde\u5e02",
              id: "\u6c38\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u96f6\u9675\u533a",
                  id: "\u96f6\u9675\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u51b7\u6c34\u6ee9\u533a",
                  id: "\u51b7\u6c34\u6ee9\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u5b89\u53bf",
                  id: "\u4e1c\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u53cc\u724c\u53bf",
                  id: "\u53cc\u724c\u53bf",
                  subArea: [],
                },
                { areaName: "\u9053\u53bf", id: "\u9053\u53bf", subArea: [] },
                {
                  areaName: "\u6c5f\u6c38\u53bf",
                  id: "\u6c5f\u6c38\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b81\u8fdc\u53bf",
                  id: "\u5b81\u8fdc\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u84dd\u5c71\u53bf",
                  id: "\u84dd\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u7530\u53bf",
                  id: "\u65b0\u7530\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c5f\u534e\u7476\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u6c5f\u534e\u7476\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6c38\u5dde\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u6c38\u5dde\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6c38\u5dde\u5e02\u56de\u9f99\u5729\u7ba1\u7406\u533a",
                  id: "\u6c38\u5dde\u5e02\u56de\u9f99\u5729\u7ba1\u7406\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7941\u9633\u5e02",
                  id: "\u7941\u9633\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6000\u5316\u5e02",
              id: "\u6000\u5316\u5e02",
              subArea: [
                {
                  areaName: "\u9e64\u57ce\u533a",
                  id: "\u9e64\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e2d\u65b9\u53bf",
                  id: "\u4e2d\u65b9\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c85\u9675\u53bf",
                  id: "\u6c85\u9675\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8fb0\u6eaa\u53bf",
                  id: "\u8fb0\u6eaa\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6e86\u6d66\u53bf",
                  id: "\u6e86\u6d66\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4f1a\u540c\u53bf",
                  id: "\u4f1a\u540c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9ebb\u9633\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u9ebb\u9633\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u6643\u4f97\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u65b0\u6643\u4f97\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u82b7\u6c5f\u4f97\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u82b7\u6c5f\u4f97\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u9756\u5dde\u82d7\u65cf\u4f97\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u9756\u5dde\u82d7\u65cf\u4f97\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u901a\u9053\u4f97\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u901a\u9053\u4f97\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6000\u5316\u5e02\u6d2a\u6c5f\u7ba1\u7406\u533a",
                  id: "\u6000\u5316\u5e02\u6d2a\u6c5f\u7ba1\u7406\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d2a\u6c5f\u5e02",
                  id: "\u6d2a\u6c5f\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5a04\u5e95\u5e02",
              id: "\u5a04\u5e95\u5e02",
              subArea: [
                {
                  areaName: "\u5a04\u661f\u533a",
                  id: "\u5a04\u661f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u53cc\u5cf0\u53bf",
                  id: "\u53cc\u5cf0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u5316\u53bf",
                  id: "\u65b0\u5316\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u51b7\u6c34\u6c5f\u5e02",
                  id: "\u51b7\u6c34\u6c5f\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6d9f\u6e90\u5e02",
                  id: "\u6d9f\u6e90\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName:
                "\u6e58\u897f\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde",
              id: "\u6e58\u897f\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u5409\u9996\u5e02",
                  id: "\u5409\u9996\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6cf8\u6eaa\u53bf",
                  id: "\u6cf8\u6eaa\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u51e4\u51f0\u53bf",
                  id: "\u51e4\u51f0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u82b1\u57a3\u53bf",
                  id: "\u82b1\u57a3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4fdd\u9756\u53bf",
                  id: "\u4fdd\u9756\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u53e4\u4e08\u53bf",
                  id: "\u53e4\u4e08\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u987a\u53bf",
                  id: "\u6c38\u987a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u5c71\u53bf",
                  id: "\u9f99\u5c71\u53bf",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u5e7f\u4e1c\u7701",
          id: "\u5e7f\u4e1c\u7701",
          subArea: [
            {
              areaName: "\u5e7f\u5dde\u5e02",
              id: "\u5e7f\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u8354\u6e7e\u533a",
                  id: "\u8354\u6e7e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8d8a\u79c0\u533a",
                  id: "\u8d8a\u79c0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d77\u73e0\u533a",
                  id: "\u6d77\u73e0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5929\u6cb3\u533a",
                  id: "\u5929\u6cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u767d\u4e91\u533a",
                  id: "\u767d\u4e91\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9ec4\u57d4\u533a",
                  id: "\u9ec4\u57d4\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u756a\u79ba\u533a",
                  id: "\u756a\u79ba\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u82b1\u90fd\u533a",
                  id: "\u82b1\u90fd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u6c99\u533a",
                  id: "\u5357\u6c99\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4ece\u5316\u533a",
                  id: "\u4ece\u5316\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u589e\u57ce\u533a",
                  id: "\u589e\u57ce\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u97f6\u5173\u5e02",
              id: "\u97f6\u5173\u5e02",
              subArea: [
                {
                  areaName: "\u6b66\u6c5f\u533a",
                  id: "\u6b66\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d48\u6c5f\u533a",
                  id: "\u6d48\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u66f2\u6c5f\u533a",
                  id: "\u66f2\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u59cb\u5174\u53bf",
                  id: "\u59cb\u5174\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4ec1\u5316\u53bf",
                  id: "\u4ec1\u5316\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7fc1\u6e90\u53bf",
                  id: "\u7fc1\u6e90\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e73\u6e90\u7476\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u4e73\u6e90\u7476\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u4e30\u53bf",
                  id: "\u65b0\u4e30\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e50\u660c\u5e02",
                  id: "\u4e50\u660c\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u96c4\u5e02",
                  id: "\u5357\u96c4\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6df1\u5733\u5e02",
              id: "\u6df1\u5733\u5e02",
              subArea: [
                {
                  areaName: "\u7f57\u6e56\u533a",
                  id: "\u7f57\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u798f\u7530\u533a",
                  id: "\u798f\u7530\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u5c71\u533a",
                  id: "\u5357\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b9d\u5b89\u533a",
                  id: "\u5b9d\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u5c97\u533a",
                  id: "\u9f99\u5c97\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u76d0\u7530\u533a",
                  id: "\u76d0\u7530\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u534e\u533a",
                  id: "\u9f99\u534e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u576a\u5c71\u533a",
                  id: "\u576a\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5149\u660e\u533a",
                  id: "\u5149\u660e\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u73e0\u6d77\u5e02",
              id: "\u73e0\u6d77\u5e02",
              subArea: [
                {
                  areaName: "\u9999\u6d32\u533a",
                  id: "\u9999\u6d32\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6597\u95e8\u533a",
                  id: "\u6597\u95e8\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u6e7e\u533a",
                  id: "\u91d1\u6e7e\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6c55\u5934\u5e02",
              id: "\u6c55\u5934\u5e02",
              subArea: [
                {
                  areaName: "\u9f99\u6e56\u533a",
                  id: "\u9f99\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u5e73\u533a",
                  id: "\u91d1\u5e73\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6fe0\u6c5f\u533a",
                  id: "\u6fe0\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6f6e\u9633\u533a",
                  id: "\u6f6e\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6f6e\u5357\u533a",
                  id: "\u6f6e\u5357\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6f84\u6d77\u533a",
                  id: "\u6f84\u6d77\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u6fb3\u53bf",
                  id: "\u5357\u6fb3\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4f5b\u5c71\u5e02",
              id: "\u4f5b\u5c71\u5e02",
              subArea: [
                {
                  areaName: "\u7985\u57ce\u533a",
                  id: "\u7985\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u6d77\u533a",
                  id: "\u5357\u6d77\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u987a\u5fb7\u533a",
                  id: "\u987a\u5fb7\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e09\u6c34\u533a",
                  id: "\u4e09\u6c34\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9ad8\u660e\u533a",
                  id: "\u9ad8\u660e\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6c5f\u95e8\u5e02",
              id: "\u6c5f\u95e8\u5e02",
              subArea: [
                {
                  areaName: "\u84ec\u6c5f\u533a",
                  id: "\u84ec\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c5f\u6d77\u533a",
                  id: "\u6c5f\u6d77\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u4f1a\u533a",
                  id: "\u65b0\u4f1a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u53f0\u5c71\u5e02",
                  id: "\u53f0\u5c71\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5f00\u5e73\u5e02",
                  id: "\u5f00\u5e73\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u9e64\u5c71\u5e02",
                  id: "\u9e64\u5c71\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6069\u5e73\u5e02",
                  id: "\u6069\u5e73\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6e5b\u6c5f\u5e02",
              id: "\u6e5b\u6c5f\u5e02",
              subArea: [
                {
                  areaName: "\u8d64\u574e\u533a",
                  id: "\u8d64\u574e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u971e\u5c71\u533a",
                  id: "\u971e\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5761\u5934\u533a",
                  id: "\u5761\u5934\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9ebb\u7ae0\u533a",
                  id: "\u9ebb\u7ae0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9042\u6eaa\u53bf",
                  id: "\u9042\u6eaa\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5f90\u95fb\u53bf",
                  id: "\u5f90\u95fb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5ec9\u6c5f\u5e02",
                  id: "\u5ec9\u6c5f\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u96f7\u5dde\u5e02",
                  id: "\u96f7\u5dde\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5434\u5ddd\u5e02",
                  id: "\u5434\u5ddd\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8302\u540d\u5e02",
              id: "\u8302\u540d\u5e02",
              subArea: [
                {
                  areaName: "\u8302\u5357\u533a",
                  id: "\u8302\u5357\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7535\u767d\u533a",
                  id: "\u7535\u767d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9ad8\u5dde\u5e02",
                  id: "\u9ad8\u5dde\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5316\u5dde\u5e02",
                  id: "\u5316\u5dde\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4fe1\u5b9c\u5e02",
                  id: "\u4fe1\u5b9c\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8087\u5e86\u5e02",
              id: "\u8087\u5e86\u5e02",
              subArea: [
                {
                  areaName: "\u7aef\u5dde\u533a",
                  id: "\u7aef\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f0e\u6e56\u533a",
                  id: "\u9f0e\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9ad8\u8981\u533a",
                  id: "\u9ad8\u8981\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e7f\u5b81\u53bf",
                  id: "\u5e7f\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6000\u96c6\u53bf",
                  id: "\u6000\u96c6\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c01\u5f00\u53bf",
                  id: "\u5c01\u5f00\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5fb7\u5e86\u53bf",
                  id: "\u5fb7\u5e86\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u56db\u4f1a\u5e02",
                  id: "\u56db\u4f1a\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u60e0\u5dde\u5e02",
              id: "\u60e0\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u60e0\u57ce\u533a",
                  id: "\u60e0\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u60e0\u9633\u533a",
                  id: "\u60e0\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u535a\u7f57\u53bf",
                  id: "\u535a\u7f57\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u60e0\u4e1c\u53bf",
                  id: "\u60e0\u4e1c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u95e8\u53bf",
                  id: "\u9f99\u95e8\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6885\u5dde\u5e02",
              id: "\u6885\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u6885\u6c5f\u533a",
                  id: "\u6885\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6885\u53bf\u533a",
                  id: "\u6885\u53bf\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u57d4\u53bf",
                  id: "\u5927\u57d4\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e30\u987a\u53bf",
                  id: "\u4e30\u987a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e94\u534e\u53bf",
                  id: "\u4e94\u534e\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u8fdc\u53bf",
                  id: "\u5e73\u8fdc\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8549\u5cad\u53bf",
                  id: "\u8549\u5cad\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5174\u5b81\u5e02",
                  id: "\u5174\u5b81\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6c55\u5c3e\u5e02",
              id: "\u6c55\u5c3e\u5e02",
              subArea: [
                { areaName: "\u57ce\u533a", id: "\u57ce\u533a", subArea: [] },
                {
                  areaName: "\u6d77\u4e30\u53bf",
                  id: "\u6d77\u4e30\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9646\u6cb3\u53bf",
                  id: "\u9646\u6cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9646\u4e30\u5e02",
                  id: "\u9646\u4e30\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6cb3\u6e90\u5e02",
              id: "\u6cb3\u6e90\u5e02",
              subArea: [
                {
                  areaName: "\u6e90\u57ce\u533a",
                  id: "\u6e90\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7d2b\u91d1\u53bf",
                  id: "\u7d2b\u91d1\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u5ddd\u53bf",
                  id: "\u9f99\u5ddd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8fde\u5e73\u53bf",
                  id: "\u8fde\u5e73\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u548c\u5e73\u53bf",
                  id: "\u548c\u5e73\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u6e90\u53bf",
                  id: "\u4e1c\u6e90\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9633\u6c5f\u5e02",
              id: "\u9633\u6c5f\u5e02",
              subArea: [
                {
                  areaName: "\u6c5f\u57ce\u533a",
                  id: "\u6c5f\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9633\u4e1c\u533a",
                  id: "\u9633\u4e1c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9633\u897f\u53bf",
                  id: "\u9633\u897f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9633\u6625\u5e02",
                  id: "\u9633\u6625\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6e05\u8fdc\u5e02",
              id: "\u6e05\u8fdc\u5e02",
              subArea: [
                {
                  areaName: "\u6e05\u57ce\u533a",
                  id: "\u6e05\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e05\u65b0\u533a",
                  id: "\u6e05\u65b0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4f5b\u5188\u53bf",
                  id: "\u4f5b\u5188\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9633\u5c71\u53bf",
                  id: "\u9633\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u8fde\u5c71\u58ee\u65cf\u7476\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u8fde\u5c71\u58ee\u65cf\u7476\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8fde\u5357\u7476\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u8fde\u5357\u7476\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u82f1\u5fb7\u5e02",
                  id: "\u82f1\u5fb7\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u8fde\u5dde\u5e02",
                  id: "\u8fde\u5dde\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e1c\u839e\u5e02",
              id: "\u4e1c\u839e\u5e02",
              subArea: [
                {
                  areaName: "\u4e1c\u57ce\u8857\u9053",
                  id: "\u4e1c\u57ce\u8857\u9053",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u57ce\u8857\u9053",
                  id: "\u5357\u57ce\u8857\u9053",
                  subArea: [],
                },
                {
                  areaName: "\u4e07\u6c5f\u8857\u9053",
                  id: "\u4e07\u6c5f\u8857\u9053",
                  subArea: [],
                },
                {
                  areaName: "\u839e\u57ce\u8857\u9053",
                  id: "\u839e\u57ce\u8857\u9053",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u78a3\u9547",
                  id: "\u77f3\u78a3\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u9f99\u9547",
                  id: "\u77f3\u9f99\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u8336\u5c71\u9547",
                  id: "\u8336\u5c71\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u6392\u9547",
                  id: "\u77f3\u6392\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u4f01\u77f3\u9547",
                  id: "\u4f01\u77f3\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u6a2a\u6ca5\u9547",
                  id: "\u6a2a\u6ca5\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u6865\u5934\u9547",
                  id: "\u6865\u5934\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u8c22\u5c97\u9547",
                  id: "\u8c22\u5c97\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u5751\u9547",
                  id: "\u4e1c\u5751\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5e38\u5e73\u9547",
                  id: "\u5e38\u5e73\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5bee\u6b65\u9547",
                  id: "\u5bee\u6b65\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u6a1f\u6728\u5934\u9547",
                  id: "\u6a1f\u6728\u5934\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u6717\u9547",
                  id: "\u5927\u6717\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u9ec4\u6c5f\u9547",
                  id: "\u9ec4\u6c5f\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u6e05\u6eaa\u9547",
                  id: "\u6e05\u6eaa\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5858\u53a6\u9547",
                  id: "\u5858\u53a6\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u51e4\u5c97\u9547",
                  id: "\u51e4\u5c97\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u5cad\u5c71\u9547",
                  id: "\u5927\u5cad\u5c71\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u5b89\u9547",
                  id: "\u957f\u5b89\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u864e\u95e8\u9547",
                  id: "\u864e\u95e8\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u539a\u8857\u9547",
                  id: "\u539a\u8857\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u6c99\u7530\u9547",
                  id: "\u6c99\u7530\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u9053\u6ed8\u9547",
                  id: "\u9053\u6ed8\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u6d2a\u6885\u9547",
                  id: "\u6d2a\u6885\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u9ebb\u6d8c\u9547",
                  id: "\u9ebb\u6d8c\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u671b\u725b\u58a9\u9547",
                  id: "\u671b\u725b\u58a9\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u4e2d\u5802\u9547",
                  id: "\u4e2d\u5802\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u9ad8\u57d7\u9547",
                  id: "\u9ad8\u57d7\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u677e\u5c71\u6e56",
                  id: "\u677e\u5c71\u6e56",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u839e\u6e2f",
                  id: "\u4e1c\u839e\u6e2f",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u839e\u751f\u6001\u56ed",
                  id: "\u4e1c\u839e\u751f\u6001\u56ed",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u839e\u6ee8\u6d77\u6e7e\u65b0\u533a",
                  id: "\u4e1c\u839e\u6ee8\u6d77\u6e7e\u65b0\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e2d\u5c71\u5e02",
              id: "\u4e2d\u5c71\u5e02",
              subArea: [
                {
                  areaName: "\u77f3\u5c90\u8857\u9053",
                  id: "\u77f3\u5c90\u8857\u9053",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u533a\u8857\u9053",
                  id: "\u4e1c\u533a\u8857\u9053",
                  subArea: [],
                },
                {
                  areaName: "\u4e2d\u5c71\u6e2f\u8857\u9053",
                  id: "\u4e2d\u5c71\u6e2f\u8857\u9053",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u533a\u8857\u9053",
                  id: "\u897f\u533a\u8857\u9053",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u533a\u8857\u9053",
                  id: "\u5357\u533a\u8857\u9053",
                  subArea: [],
                },
                {
                  areaName: "\u4e94\u6842\u5c71\u8857\u9053",
                  id: "\u4e94\u6842\u5c71\u8857\u9053",
                  subArea: [],
                },
                {
                  areaName: "\u6c11\u4f17\u8857\u9053",
                  id: "\u6c11\u4f17\u8857\u9053",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u6717\u8857\u9053",
                  id: "\u5357\u6717\u8857\u9053",
                  subArea: [],
                },
                {
                  areaName: "\u9ec4\u5703\u9547",
                  id: "\u9ec4\u5703\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u51e4\u9547",
                  id: "\u4e1c\u51e4\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u53e4\u9547\u9547",
                  id: "\u53e4\u9547\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u6c99\u6eaa\u9547",
                  id: "\u6c99\u6eaa\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5766\u6d32\u9547",
                  id: "\u5766\u6d32\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u6e2f\u53e3\u9547",
                  id: "\u6e2f\u53e3\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u4e09\u89d2\u9547",
                  id: "\u4e09\u89d2\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u6a2a\u680f\u9547",
                  id: "\u6a2a\u680f\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u5934\u9547",
                  id: "\u5357\u5934\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u961c\u6c99\u9547",
                  id: "\u961c\u6c99\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u4e09\u4e61\u9547",
                  id: "\u4e09\u4e61\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u677f\u8299\u9547",
                  id: "\u677f\u8299\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u6d8c\u9547",
                  id: "\u5927\u6d8c\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u795e\u6e7e\u9547",
                  id: "\u795e\u6e7e\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5c0f\u6984\u9547",
                  id: "\u5c0f\u6984\u9547",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6f6e\u5dde\u5e02",
              id: "\u6f6e\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u6e58\u6865\u533a",
                  id: "\u6e58\u6865\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6f6e\u5b89\u533a",
                  id: "\u6f6e\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9976\u5e73\u53bf",
                  id: "\u9976\u5e73\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u63ed\u9633\u5e02",
              id: "\u63ed\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u6995\u57ce\u533a",
                  id: "\u6995\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u63ed\u4e1c\u533a",
                  id: "\u63ed\u4e1c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u63ed\u897f\u53bf",
                  id: "\u63ed\u897f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u60e0\u6765\u53bf",
                  id: "\u60e0\u6765\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u666e\u5b81\u5e02",
                  id: "\u666e\u5b81\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e91\u6d6e\u5e02",
              id: "\u4e91\u6d6e\u5e02",
              subArea: [
                {
                  areaName: "\u4e91\u57ce\u533a",
                  id: "\u4e91\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e91\u5b89\u533a",
                  id: "\u4e91\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u5174\u53bf",
                  id: "\u65b0\u5174\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u90c1\u5357\u53bf",
                  id: "\u90c1\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7f57\u5b9a\u5e02",
                  id: "\u7f57\u5b9a\u5e02",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u5e7f\u897f\u58ee\u65cf\u81ea\u6cbb\u533a",
          id: "\u5e7f\u897f\u58ee\u65cf\u81ea\u6cbb\u533a",
          subArea: [
            {
              areaName: "\u5357\u5b81\u5e02",
              id: "\u5357\u5b81\u5e02",
              subArea: [
                {
                  areaName: "\u5174\u5b81\u533a",
                  id: "\u5174\u5b81\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9752\u79c0\u533a",
                  id: "\u9752\u79c0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c5f\u5357\u533a",
                  id: "\u6c5f\u5357\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u4e61\u5858\u533a",
                  id: "\u897f\u4e61\u5858\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u826f\u5e86\u533a",
                  id: "\u826f\u5e86\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9095\u5b81\u533a",
                  id: "\u9095\u5b81\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u9e23\u533a",
                  id: "\u6b66\u9e23\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9686\u5b89\u53bf",
                  id: "\u9686\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9a6c\u5c71\u53bf",
                  id: "\u9a6c\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e0a\u6797\u53bf",
                  id: "\u4e0a\u6797\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5bbe\u9633\u53bf",
                  id: "\u5bbe\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6a2a\u5dde\u5e02",
                  id: "\u6a2a\u5dde\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u67f3\u5dde\u5e02",
              id: "\u67f3\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u57ce\u4e2d\u533a",
                  id: "\u57ce\u4e2d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9c7c\u5cf0\u533a",
                  id: "\u9c7c\u5cf0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u67f3\u5357\u533a",
                  id: "\u67f3\u5357\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u67f3\u5317\u533a",
                  id: "\u67f3\u5317\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u67f3\u6c5f\u533a",
                  id: "\u67f3\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u67f3\u57ce\u53bf",
                  id: "\u67f3\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9e7f\u5be8\u53bf",
                  id: "\u9e7f\u5be8\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u878d\u5b89\u53bf",
                  id: "\u878d\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u878d\u6c34\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u878d\u6c34\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e09\u6c5f\u4f97\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u4e09\u6c5f\u4f97\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6842\u6797\u5e02",
              id: "\u6842\u6797\u5e02",
              subArea: [
                {
                  areaName: "\u79c0\u5cf0\u533a",
                  id: "\u79c0\u5cf0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u53e0\u5f69\u533a",
                  id: "\u53e0\u5f69\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8c61\u5c71\u533a",
                  id: "\u8c61\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e03\u661f\u533a",
                  id: "\u4e03\u661f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u96c1\u5c71\u533a",
                  id: "\u96c1\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u6842\u533a",
                  id: "\u4e34\u6842\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9633\u6714\u53bf",
                  id: "\u9633\u6714\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7075\u5ddd\u53bf",
                  id: "\u7075\u5ddd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5168\u5dde\u53bf",
                  id: "\u5168\u5dde\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5174\u5b89\u53bf",
                  id: "\u5174\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u798f\u53bf",
                  id: "\u6c38\u798f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u704c\u9633\u53bf",
                  id: "\u704c\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u80dc\u5404\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u9f99\u80dc\u5404\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8d44\u6e90\u53bf",
                  id: "\u8d44\u6e90\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u4e50\u53bf",
                  id: "\u5e73\u4e50\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u606d\u57ce\u7476\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u606d\u57ce\u7476\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8354\u6d66\u5e02",
                  id: "\u8354\u6d66\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u68a7\u5dde\u5e02",
              id: "\u68a7\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u4e07\u79c0\u533a",
                  id: "\u4e07\u79c0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u6d32\u533a",
                  id: "\u957f\u6d32\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u5729\u533a",
                  id: "\u9f99\u5729\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u82cd\u68a7\u53bf",
                  id: "\u82cd\u68a7\u53bf",
                  subArea: [],
                },
                { areaName: "\u85e4\u53bf", id: "\u85e4\u53bf", subArea: [] },
                {
                  areaName: "\u8499\u5c71\u53bf",
                  id: "\u8499\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c91\u6eaa\u5e02",
                  id: "\u5c91\u6eaa\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5317\u6d77\u5e02",
              id: "\u5317\u6d77\u5e02",
              subArea: [
                {
                  areaName: "\u6d77\u57ce\u533a",
                  id: "\u6d77\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u94f6\u6d77\u533a",
                  id: "\u94f6\u6d77\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u94c1\u5c71\u6e2f\u533a",
                  id: "\u94c1\u5c71\u6e2f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5408\u6d66\u53bf",
                  id: "\u5408\u6d66\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9632\u57ce\u6e2f\u5e02",
              id: "\u9632\u57ce\u6e2f\u5e02",
              subArea: [
                {
                  areaName: "\u6e2f\u53e3\u533a",
                  id: "\u6e2f\u53e3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9632\u57ce\u533a",
                  id: "\u9632\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e0a\u601d\u53bf",
                  id: "\u4e0a\u601d\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u5174\u5e02",
                  id: "\u4e1c\u5174\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u94a6\u5dde\u5e02",
              id: "\u94a6\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u94a6\u5357\u533a",
                  id: "\u94a6\u5357\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u94a6\u5317\u533a",
                  id: "\u94a6\u5317\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7075\u5c71\u53bf",
                  id: "\u7075\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d66\u5317\u53bf",
                  id: "\u6d66\u5317\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8d35\u6e2f\u5e02",
              id: "\u8d35\u6e2f\u5e02",
              subArea: [
                {
                  areaName: "\u6e2f\u5317\u533a",
                  id: "\u6e2f\u5317\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e2f\u5357\u533a",
                  id: "\u6e2f\u5357\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8983\u5858\u533a",
                  id: "\u8983\u5858\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u5357\u53bf",
                  id: "\u5e73\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6842\u5e73\u5e02",
                  id: "\u6842\u5e73\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u7389\u6797\u5e02",
              id: "\u7389\u6797\u5e02",
              subArea: [
                {
                  areaName: "\u7389\u5dde\u533a",
                  id: "\u7389\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u798f\u7ef5\u533a",
                  id: "\u798f\u7ef5\u533a",
                  subArea: [],
                },
                { areaName: "\u5bb9\u53bf", id: "\u5bb9\u53bf", subArea: [] },
                {
                  areaName: "\u9646\u5ddd\u53bf",
                  id: "\u9646\u5ddd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u535a\u767d\u53bf",
                  id: "\u535a\u767d\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5174\u4e1a\u53bf",
                  id: "\u5174\u4e1a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5317\u6d41\u5e02",
                  id: "\u5317\u6d41\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u767e\u8272\u5e02",
              id: "\u767e\u8272\u5e02",
              subArea: [
                {
                  areaName: "\u53f3\u6c5f\u533a",
                  id: "\u53f3\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7530\u9633\u533a",
                  id: "\u7530\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7530\u4e1c\u53bf",
                  id: "\u7530\u4e1c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5fb7\u4fdd\u53bf",
                  id: "\u5fb7\u4fdd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u90a3\u5761\u53bf",
                  id: "\u90a3\u5761\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u51cc\u4e91\u53bf",
                  id: "\u51cc\u4e91\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e50\u4e1a\u53bf",
                  id: "\u4e50\u4e1a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7530\u6797\u53bf",
                  id: "\u7530\u6797\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u6797\u53bf",
                  id: "\u897f\u6797\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9686\u6797\u5404\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u9686\u6797\u5404\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9756\u897f\u5e02",
                  id: "\u9756\u897f\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u679c\u5e02",
                  id: "\u5e73\u679c\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8d3a\u5dde\u5e02",
              id: "\u8d3a\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u516b\u6b65\u533a",
                  id: "\u516b\u6b65\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u6842\u533a",
                  id: "\u5e73\u6842\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u662d\u5e73\u53bf",
                  id: "\u662d\u5e73\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u949f\u5c71\u53bf",
                  id: "\u949f\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5bcc\u5ddd\u7476\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5bcc\u5ddd\u7476\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6cb3\u6c60\u5e02",
              id: "\u6cb3\u6c60\u5e02",
              subArea: [
                {
                  areaName: "\u91d1\u57ce\u6c5f\u533a",
                  id: "\u91d1\u57ce\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b9c\u5dde\u533a",
                  id: "\u5b9c\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u4e39\u53bf",
                  id: "\u5357\u4e39\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5929\u5ce8\u53bf",
                  id: "\u5929\u5ce8\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u51e4\u5c71\u53bf",
                  id: "\u51e4\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u5170\u53bf",
                  id: "\u4e1c\u5170\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7f57\u57ce\u4eeb\u4f6c\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u7f57\u57ce\u4eeb\u4f6c\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u73af\u6c5f\u6bdb\u5357\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u73af\u6c5f\u6bdb\u5357\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5df4\u9a6c\u7476\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5df4\u9a6c\u7476\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u90fd\u5b89\u7476\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u90fd\u5b89\u7476\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u5316\u7476\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5927\u5316\u7476\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6765\u5bbe\u5e02",
              id: "\u6765\u5bbe\u5e02",
              subArea: [
                {
                  areaName: "\u5174\u5bbe\u533a",
                  id: "\u5174\u5bbe\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5ffb\u57ce\u53bf",
                  id: "\u5ffb\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8c61\u5dde\u53bf",
                  id: "\u8c61\u5dde\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u5ba3\u53bf",
                  id: "\u6b66\u5ba3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u79c0\u7476\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u91d1\u79c0\u7476\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5408\u5c71\u5e02",
                  id: "\u5408\u5c71\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5d07\u5de6\u5e02",
              id: "\u5d07\u5de6\u5e02",
              subArea: [
                {
                  areaName: "\u6c5f\u5dde\u533a",
                  id: "\u6c5f\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6276\u7ee5\u53bf",
                  id: "\u6276\u7ee5\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b81\u660e\u53bf",
                  id: "\u5b81\u660e\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u5dde\u53bf",
                  id: "\u9f99\u5dde\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u65b0\u53bf",
                  id: "\u5927\u65b0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5929\u7b49\u53bf",
                  id: "\u5929\u7b49\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u51ed\u7965\u5e02",
                  id: "\u51ed\u7965\u5e02",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u6d77\u5357\u7701",
          id: "\u6d77\u5357\u7701",
          subArea: [
            {
              areaName: "\u6d77\u53e3\u5e02",
              id: "\u6d77\u53e3\u5e02",
              subArea: [
                {
                  areaName: "\u79c0\u82f1\u533a",
                  id: "\u79c0\u82f1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u534e\u533a",
                  id: "\u9f99\u534e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u743c\u5c71\u533a",
                  id: "\u743c\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7f8e\u5170\u533a",
                  id: "\u7f8e\u5170\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e09\u4e9a\u5e02",
              id: "\u4e09\u4e9a\u5e02",
              subArea: [
                {
                  areaName: "\u6d77\u68e0\u533a",
                  id: "\u6d77\u68e0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5409\u9633\u533a",
                  id: "\u5409\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5929\u6daf\u533a",
                  id: "\u5929\u6daf\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5d16\u5dde\u533a",
                  id: "\u5d16\u5dde\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e09\u6c99\u5e02",
              id: "\u4e09\u6c99\u5e02",
              subArea: [
                {
                  areaName: "\u897f\u6c99\u7fa4\u5c9b",
                  id: "\u897f\u6c99\u7fa4\u5c9b",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u6c99\u7fa4\u5c9b",
                  id: "\u5357\u6c99\u7fa4\u5c9b",
                  subArea: [],
                },
                {
                  areaName:
                    "\u4e2d\u6c99\u7fa4\u5c9b\u7684\u5c9b\u7901\u53ca\u5176\u6d77\u57df",
                  id: "\u4e2d\u6c99\u7fa4\u5c9b\u7684\u5c9b\u7901\u53ca\u5176\u6d77\u57df",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u510b\u5dde\u5e02",
              id: "\u510b\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u90a3\u5927\u9547",
                  id: "\u90a3\u5927\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u548c\u5e86\u9547",
                  id: "\u548c\u5e86\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u4e30\u9547",
                  id: "\u5357\u4e30\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u6210\u9547",
                  id: "\u5927\u6210\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u96c5\u661f\u9547",
                  id: "\u96c5\u661f\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5170\u6d0b\u9547",
                  id: "\u5170\u6d0b\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5149\u6751\u9547",
                  id: "\u5149\u6751\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u6728\u68e0\u9547",
                  id: "\u6728\u68e0\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u6d77\u5934\u9547",
                  id: "\u6d77\u5934\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5ce8\u8513\u9547",
                  id: "\u5ce8\u8513\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u738b\u4e94\u9547",
                  id: "\u738b\u4e94\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u767d\u9a6c\u4e95\u9547",
                  id: "\u767d\u9a6c\u4e95\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u4e2d\u548c\u9547",
                  id: "\u4e2d\u548c\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u6392\u6d66\u9547",
                  id: "\u6392\u6d66\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u6210\u9547",
                  id: "\u4e1c\u6210\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u5dde\u9547",
                  id: "\u65b0\u5dde\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u6d0b\u6d66\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  id: "\u6d0b\u6d66\u7ecf\u6d4e\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u534e\u5357\u70ed\u4f5c\u5b66\u9662",
                  id: "\u534e\u5357\u70ed\u4f5c\u5b66\u9662",
                  subArea: [],
                },
              ],
            },
            {
              areaName:
                "\u7701\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u533a\u5212",
              id: "\u7701\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u533a\u5212",
              subArea: [
                {
                  areaName: "\u4e94\u6307\u5c71\u5e02",
                  id: "\u4e94\u6307\u5c71\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u743c\u6d77\u5e02",
                  id: "\u743c\u6d77\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6587\u660c\u5e02",
                  id: "\u6587\u660c\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e07\u5b81\u5e02",
                  id: "\u4e07\u5b81\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u65b9\u5e02",
                  id: "\u4e1c\u65b9\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5b9a\u5b89\u53bf",
                  id: "\u5b9a\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c6f\u660c\u53bf",
                  id: "\u5c6f\u660c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6f84\u8fc8\u53bf",
                  id: "\u6f84\u8fc8\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u9ad8\u53bf",
                  id: "\u4e34\u9ad8\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u767d\u6c99\u9ece\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u767d\u6c99\u9ece\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u660c\u6c5f\u9ece\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u660c\u6c5f\u9ece\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e50\u4e1c\u9ece\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u4e50\u4e1c\u9ece\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9675\u6c34\u9ece\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u9675\u6c34\u9ece\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u4fdd\u4ead\u9ece\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u4fdd\u4ead\u9ece\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u743c\u4e2d\u9ece\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u743c\u4e2d\u9ece\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u91cd\u5e86\u5e02",
          id: "\u91cd\u5e86\u5e02",
          subArea: [
            {
              areaName: "\u91cd\u5e86\u5e02",
              id: "\u91cd\u5e86\u5e02",
              subArea: [
                {
                  areaName: "\u4e07\u5dde\u533a",
                  id: "\u4e07\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6daa\u9675\u533a",
                  id: "\u6daa\u9675\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e1d\u4e2d\u533a",
                  id: "\u6e1d\u4e2d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u6e21\u53e3\u533a",
                  id: "\u5927\u6e21\u53e3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c5f\u5317\u533a",
                  id: "\u6c5f\u5317\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c99\u576a\u575d\u533a",
                  id: "\u6c99\u576a\u575d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e5d\u9f99\u5761\u533a",
                  id: "\u4e5d\u9f99\u5761\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u5cb8\u533a",
                  id: "\u5357\u5cb8\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5317\u789a\u533a",
                  id: "\u5317\u789a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7da6\u6c5f\u533a",
                  id: "\u7da6\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u8db3\u533a",
                  id: "\u5927\u8db3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e1d\u5317\u533a",
                  id: "\u6e1d\u5317\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5df4\u5357\u533a",
                  id: "\u5df4\u5357\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9ed4\u6c5f\u533a",
                  id: "\u9ed4\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u5bff\u533a",
                  id: "\u957f\u5bff\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c5f\u6d25\u533a",
                  id: "\u6c5f\u6d25\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5408\u5ddd\u533a",
                  id: "\u5408\u5ddd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u5ddd\u533a",
                  id: "\u6c38\u5ddd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u5ddd\u533a",
                  id: "\u5357\u5ddd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u74a7\u5c71\u533a",
                  id: "\u74a7\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u94dc\u6881\u533a",
                  id: "\u94dc\u6881\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6f7c\u5357\u533a",
                  id: "\u6f7c\u5357\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8363\u660c\u533a",
                  id: "\u8363\u660c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5f00\u5dde\u533a",
                  id: "\u5f00\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6881\u5e73\u533a",
                  id: "\u6881\u5e73\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u9686\u533a",
                  id: "\u6b66\u9686\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u53bf",
              id: "\u53bf",
              subArea: [
                {
                  areaName: "\u57ce\u53e3\u53bf",
                  id: "\u57ce\u53e3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e30\u90fd\u53bf",
                  id: "\u4e30\u90fd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u57ab\u6c5f\u53bf",
                  id: "\u57ab\u6c5f\u53bf",
                  subArea: [],
                },
                { areaName: "\u5fe0\u53bf", id: "\u5fe0\u53bf", subArea: [] },
                {
                  areaName: "\u4e91\u9633\u53bf",
                  id: "\u4e91\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5949\u8282\u53bf",
                  id: "\u5949\u8282\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5deb\u5c71\u53bf",
                  id: "\u5deb\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5deb\u6eaa\u53bf",
                  id: "\u5deb\u6eaa\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u67f1\u571f\u5bb6\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u77f3\u67f1\u571f\u5bb6\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u79c0\u5c71\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u79c0\u5c71\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u9149\u9633\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u9149\u9633\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5f6d\u6c34\u82d7\u65cf\u571f\u5bb6\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5f6d\u6c34\u82d7\u65cf\u571f\u5bb6\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u56db\u5ddd\u7701",
          id: "\u56db\u5ddd\u7701",
          subArea: [
            {
              areaName: "\u6210\u90fd\u5e02",
              id: "\u6210\u90fd\u5e02",
              subArea: [
                {
                  areaName: "\u9526\u6c5f\u533a",
                  id: "\u9526\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9752\u7f8a\u533a",
                  id: "\u9752\u7f8a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u725b\u533a",
                  id: "\u91d1\u725b\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u4faf\u533a",
                  id: "\u6b66\u4faf\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6210\u534e\u533a",
                  id: "\u6210\u534e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u6cc9\u9a7f\u533a",
                  id: "\u9f99\u6cc9\u9a7f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9752\u767d\u6c5f\u533a",
                  id: "\u9752\u767d\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u90fd\u533a",
                  id: "\u65b0\u90fd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e29\u6c5f\u533a",
                  id: "\u6e29\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u53cc\u6d41\u533a",
                  id: "\u53cc\u6d41\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u90eb\u90fd\u533a",
                  id: "\u90eb\u90fd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u6d25\u533a",
                  id: "\u65b0\u6d25\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u5802\u53bf",
                  id: "\u91d1\u5802\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u9091\u53bf",
                  id: "\u5927\u9091\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u84b2\u6c5f\u53bf",
                  id: "\u84b2\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u90fd\u6c5f\u5830\u5e02",
                  id: "\u90fd\u6c5f\u5830\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5f6d\u5dde\u5e02",
                  id: "\u5f6d\u5dde\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u909b\u5d03\u5e02",
                  id: "\u909b\u5d03\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5d07\u5dde\u5e02",
                  id: "\u5d07\u5dde\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u7b80\u9633\u5e02",
                  id: "\u7b80\u9633\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u81ea\u8d21\u5e02",
              id: "\u81ea\u8d21\u5e02",
              subArea: [
                {
                  areaName: "\u81ea\u6d41\u4e95\u533a",
                  id: "\u81ea\u6d41\u4e95\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8d21\u4e95\u533a",
                  id: "\u8d21\u4e95\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u5b89\u533a",
                  id: "\u5927\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6cbf\u6ee9\u533a",
                  id: "\u6cbf\u6ee9\u533a",
                  subArea: [],
                },
                { areaName: "\u8363\u53bf", id: "\u8363\u53bf", subArea: [] },
                {
                  areaName: "\u5bcc\u987a\u53bf",
                  id: "\u5bcc\u987a\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6500\u679d\u82b1\u5e02",
              id: "\u6500\u679d\u82b1\u5e02",
              subArea: [
                { areaName: "\u4e1c\u533a", id: "\u4e1c\u533a", subArea: [] },
                { areaName: "\u897f\u533a", id: "\u897f\u533a", subArea: [] },
                {
                  areaName: "\u4ec1\u548c\u533a",
                  id: "\u4ec1\u548c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7c73\u6613\u53bf",
                  id: "\u7c73\u6613\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u76d0\u8fb9\u53bf",
                  id: "\u76d0\u8fb9\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6cf8\u5dde\u5e02",
              id: "\u6cf8\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u6c5f\u9633\u533a",
                  id: "\u6c5f\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7eb3\u6eaa\u533a",
                  id: "\u7eb3\u6eaa\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u9a6c\u6f6d\u533a",
                  id: "\u9f99\u9a6c\u6f6d\u533a",
                  subArea: [],
                },
                { areaName: "\u6cf8\u53bf", id: "\u6cf8\u53bf", subArea: [] },
                {
                  areaName: "\u5408\u6c5f\u53bf",
                  id: "\u5408\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u53d9\u6c38\u53bf",
                  id: "\u53d9\u6c38\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u53e4\u853a\u53bf",
                  id: "\u53e4\u853a\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5fb7\u9633\u5e02",
              id: "\u5fb7\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u65cc\u9633\u533a",
                  id: "\u65cc\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7f57\u6c5f\u533a",
                  id: "\u7f57\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e2d\u6c5f\u53bf",
                  id: "\u4e2d\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e7f\u6c49\u5e02",
                  id: "\u5e7f\u6c49\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4ec0\u90a1\u5e02",
                  id: "\u4ec0\u90a1\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u7ef5\u7af9\u5e02",
                  id: "\u7ef5\u7af9\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u7ef5\u9633\u5e02",
              id: "\u7ef5\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u6daa\u57ce\u533a",
                  id: "\u6daa\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e38\u4ed9\u533a",
                  id: "\u6e38\u4ed9\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u5dde\u533a",
                  id: "\u5b89\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e09\u53f0\u53bf",
                  id: "\u4e09\u53f0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u76d0\u4ead\u53bf",
                  id: "\u76d0\u4ead\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6893\u6f7c\u53bf",
                  id: "\u6893\u6f7c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5317\u5ddd\u7f8c\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5317\u5ddd\u7f8c\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u6b66\u53bf",
                  id: "\u5e73\u6b66\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c5f\u6cb9\u5e02",
                  id: "\u6c5f\u6cb9\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5e7f\u5143\u5e02",
              id: "\u5e7f\u5143\u5e02",
              subArea: [
                {
                  areaName: "\u5229\u5dde\u533a",
                  id: "\u5229\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u662d\u5316\u533a",
                  id: "\u662d\u5316\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u671d\u5929\u533a",
                  id: "\u671d\u5929\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65fa\u82cd\u53bf",
                  id: "\u65fa\u82cd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9752\u5ddd\u53bf",
                  id: "\u9752\u5ddd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5251\u9601\u53bf",
                  id: "\u5251\u9601\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u82cd\u6eaa\u53bf",
                  id: "\u82cd\u6eaa\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9042\u5b81\u5e02",
              id: "\u9042\u5b81\u5e02",
              subArea: [
                {
                  areaName: "\u8239\u5c71\u533a",
                  id: "\u8239\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u5c45\u533a",
                  id: "\u5b89\u5c45\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u84ec\u6eaa\u53bf",
                  id: "\u84ec\u6eaa\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u82f1\u53bf",
                  id: "\u5927\u82f1\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c04\u6d2a\u5e02",
                  id: "\u5c04\u6d2a\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5185\u6c5f\u5e02",
              id: "\u5185\u6c5f\u5e02",
              subArea: [
                {
                  areaName: "\u5e02\u4e2d\u533a",
                  id: "\u5e02\u4e2d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u5174\u533a",
                  id: "\u4e1c\u5174\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5a01\u8fdc\u53bf",
                  id: "\u5a01\u8fdc\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8d44\u4e2d\u53bf",
                  id: "\u8d44\u4e2d\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9686\u660c\u5e02",
                  id: "\u9686\u660c\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e50\u5c71\u5e02",
              id: "\u4e50\u5c71\u5e02",
              subArea: [
                {
                  areaName: "\u5e02\u4e2d\u533a",
                  id: "\u5e02\u4e2d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c99\u6e7e\u533a",
                  id: "\u6c99\u6e7e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e94\u901a\u6865\u533a",
                  id: "\u4e94\u901a\u6865\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u53e3\u6cb3\u533a",
                  id: "\u91d1\u53e3\u6cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u728d\u4e3a\u53bf",
                  id: "\u728d\u4e3a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e95\u7814\u53bf",
                  id: "\u4e95\u7814\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5939\u6c5f\u53bf",
                  id: "\u5939\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c90\u5ddd\u53bf",
                  id: "\u6c90\u5ddd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5ce8\u8fb9\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5ce8\u8fb9\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9a6c\u8fb9\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u9a6c\u8fb9\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5ce8\u7709\u5c71\u5e02",
                  id: "\u5ce8\u7709\u5c71\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5357\u5145\u5e02",
              id: "\u5357\u5145\u5e02",
              subArea: [
                {
                  areaName: "\u987a\u5e86\u533a",
                  id: "\u987a\u5e86\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9ad8\u576a\u533a",
                  id: "\u9ad8\u576a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5609\u9675\u533a",
                  id: "\u5609\u9675\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u90e8\u53bf",
                  id: "\u5357\u90e8\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8425\u5c71\u53bf",
                  id: "\u8425\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u84ec\u5b89\u53bf",
                  id: "\u84ec\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4eea\u9647\u53bf",
                  id: "\u4eea\u9647\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u5145\u53bf",
                  id: "\u897f\u5145\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9606\u4e2d\u5e02",
                  id: "\u9606\u4e2d\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u7709\u5c71\u5e02",
              id: "\u7709\u5c71\u5e02",
              subArea: [
                {
                  areaName: "\u4e1c\u5761\u533a",
                  id: "\u4e1c\u5761\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5f6d\u5c71\u533a",
                  id: "\u5f6d\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4ec1\u5bff\u53bf",
                  id: "\u4ec1\u5bff\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d2a\u96c5\u53bf",
                  id: "\u6d2a\u96c5\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e39\u68f1\u53bf",
                  id: "\u4e39\u68f1\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9752\u795e\u53bf",
                  id: "\u9752\u795e\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5b9c\u5bbe\u5e02",
              id: "\u5b9c\u5bbe\u5e02",
              subArea: [
                {
                  areaName: "\u7fe0\u5c4f\u533a",
                  id: "\u7fe0\u5c4f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u6eaa\u533a",
                  id: "\u5357\u6eaa\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u53d9\u5dde\u533a",
                  id: "\u53d9\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c5f\u5b89\u53bf",
                  id: "\u6c5f\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u5b81\u53bf",
                  id: "\u957f\u5b81\u53bf",
                  subArea: [],
                },
                { areaName: "\u9ad8\u53bf", id: "\u9ad8\u53bf", subArea: [] },
                { areaName: "\u73d9\u53bf", id: "\u73d9\u53bf", subArea: [] },
                {
                  areaName: "\u7b60\u8fde\u53bf",
                  id: "\u7b60\u8fde\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5174\u6587\u53bf",
                  id: "\u5174\u6587\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c4f\u5c71\u53bf",
                  id: "\u5c4f\u5c71\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5e7f\u5b89\u5e02",
              id: "\u5e7f\u5b89\u5e02",
              subArea: [
                {
                  areaName: "\u5e7f\u5b89\u533a",
                  id: "\u5e7f\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u524d\u950b\u533a",
                  id: "\u524d\u950b\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5cb3\u6c60\u53bf",
                  id: "\u5cb3\u6c60\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u80dc\u53bf",
                  id: "\u6b66\u80dc\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u90bb\u6c34\u53bf",
                  id: "\u90bb\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u534e\u84e5\u5e02",
                  id: "\u534e\u84e5\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8fbe\u5dde\u5e02",
              id: "\u8fbe\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u901a\u5ddd\u533a",
                  id: "\u901a\u5ddd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8fbe\u5ddd\u533a",
                  id: "\u8fbe\u5ddd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5ba3\u6c49\u53bf",
                  id: "\u5ba3\u6c49\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5f00\u6c5f\u53bf",
                  id: "\u5f00\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u7af9\u53bf",
                  id: "\u5927\u7af9\u53bf",
                  subArea: [],
                },
                { areaName: "\u6e20\u53bf", id: "\u6e20\u53bf", subArea: [] },
                {
                  areaName: "\u4e07\u6e90\u5e02",
                  id: "\u4e07\u6e90\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u96c5\u5b89\u5e02",
              id: "\u96c5\u5b89\u5e02",
              subArea: [
                {
                  areaName: "\u96e8\u57ce\u533a",
                  id: "\u96e8\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u540d\u5c71\u533a",
                  id: "\u540d\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8365\u7ecf\u53bf",
                  id: "\u8365\u7ecf\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c49\u6e90\u53bf",
                  id: "\u6c49\u6e90\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u68c9\u53bf",
                  id: "\u77f3\u68c9\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5929\u5168\u53bf",
                  id: "\u5929\u5168\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u82a6\u5c71\u53bf",
                  id: "\u82a6\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b9d\u5174\u53bf",
                  id: "\u5b9d\u5174\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5df4\u4e2d\u5e02",
              id: "\u5df4\u4e2d\u5e02",
              subArea: [
                {
                  areaName: "\u5df4\u5dde\u533a",
                  id: "\u5df4\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6069\u9633\u533a",
                  id: "\u6069\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u901a\u6c5f\u53bf",
                  id: "\u901a\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u6c5f\u53bf",
                  id: "\u5357\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u660c\u53bf",
                  id: "\u5e73\u660c\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8d44\u9633\u5e02",
              id: "\u8d44\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u96c1\u6c5f\u533a",
                  id: "\u96c1\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u5cb3\u53bf",
                  id: "\u5b89\u5cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e50\u81f3\u53bf",
                  id: "\u4e50\u81f3\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName:
                "\u963f\u575d\u85cf\u65cf\u7f8c\u65cf\u81ea\u6cbb\u5dde",
              id: "\u963f\u575d\u85cf\u65cf\u7f8c\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u9a6c\u5c14\u5eb7\u5e02",
                  id: "\u9a6c\u5c14\u5eb7\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6c76\u5ddd\u53bf",
                  id: "\u6c76\u5ddd\u53bf",
                  subArea: [],
                },
                { areaName: "\u7406\u53bf", id: "\u7406\u53bf", subArea: [] },
                { areaName: "\u8302\u53bf", id: "\u8302\u53bf", subArea: [] },
                {
                  areaName: "\u677e\u6f58\u53bf",
                  id: "\u677e\u6f58\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e5d\u5be8\u6c9f\u53bf",
                  id: "\u4e5d\u5be8\u6c9f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u5ddd\u53bf",
                  id: "\u91d1\u5ddd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c0f\u91d1\u53bf",
                  id: "\u5c0f\u91d1\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9ed1\u6c34\u53bf",
                  id: "\u9ed1\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u58e4\u5858\u53bf",
                  id: "\u58e4\u5858\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u963f\u575d\u53bf",
                  id: "\u963f\u575d\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u82e5\u5c14\u76d6\u53bf",
                  id: "\u82e5\u5c14\u76d6\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7ea2\u539f\u53bf",
                  id: "\u7ea2\u539f\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u7518\u5b5c\u85cf\u65cf\u81ea\u6cbb\u5dde",
              id: "\u7518\u5b5c\u85cf\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u5eb7\u5b9a\u5e02",
                  id: "\u5eb7\u5b9a\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6cf8\u5b9a\u53bf",
                  id: "\u6cf8\u5b9a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e39\u5df4\u53bf",
                  id: "\u4e39\u5df4\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e5d\u9f99\u53bf",
                  id: "\u4e5d\u9f99\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u96c5\u6c5f\u53bf",
                  id: "\u96c5\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9053\u5b5a\u53bf",
                  id: "\u9053\u5b5a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7089\u970d\u53bf",
                  id: "\u7089\u970d\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7518\u5b5c\u53bf",
                  id: "\u7518\u5b5c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u9f99\u53bf",
                  id: "\u65b0\u9f99\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5fb7\u683c\u53bf",
                  id: "\u5fb7\u683c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u767d\u7389\u53bf",
                  id: "\u767d\u7389\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u6e20\u53bf",
                  id: "\u77f3\u6e20\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8272\u8fbe\u53bf",
                  id: "\u8272\u8fbe\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7406\u5858\u53bf",
                  id: "\u7406\u5858\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5df4\u5858\u53bf",
                  id: "\u5df4\u5858\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e61\u57ce\u53bf",
                  id: "\u4e61\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7a3b\u57ce\u53bf",
                  id: "\u7a3b\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5f97\u8363\u53bf",
                  id: "\u5f97\u8363\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u51c9\u5c71\u5f5d\u65cf\u81ea\u6cbb\u5dde",
              id: "\u51c9\u5c71\u5f5d\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u897f\u660c\u5e02",
                  id: "\u897f\u660c\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4f1a\u7406\u5e02",
                  id: "\u4f1a\u7406\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6728\u91cc\u85cf\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u6728\u91cc\u85cf\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u76d0\u6e90\u53bf",
                  id: "\u76d0\u6e90\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5fb7\u660c\u53bf",
                  id: "\u5fb7\u660c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4f1a\u4e1c\u53bf",
                  id: "\u4f1a\u4e1c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b81\u5357\u53bf",
                  id: "\u5b81\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u666e\u683c\u53bf",
                  id: "\u666e\u683c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e03\u62d6\u53bf",
                  id: "\u5e03\u62d6\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u9633\u53bf",
                  id: "\u91d1\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u662d\u89c9\u53bf",
                  id: "\u662d\u89c9\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u559c\u5fb7\u53bf",
                  id: "\u559c\u5fb7\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5195\u5b81\u53bf",
                  id: "\u5195\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8d8a\u897f\u53bf",
                  id: "\u8d8a\u897f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7518\u6d1b\u53bf",
                  id: "\u7518\u6d1b\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7f8e\u59d1\u53bf",
                  id: "\u7f8e\u59d1\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u96f7\u6ce2\u53bf",
                  id: "\u96f7\u6ce2\u53bf",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u8d35\u5dde\u7701",
          id: "\u8d35\u5dde\u7701",
          subArea: [
            {
              areaName: "\u8d35\u9633\u5e02",
              id: "\u8d35\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u5357\u660e\u533a",
                  id: "\u5357\u660e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e91\u5ca9\u533a",
                  id: "\u4e91\u5ca9\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u82b1\u6eaa\u533a",
                  id: "\u82b1\u6eaa\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e4c\u5f53\u533a",
                  id: "\u4e4c\u5f53\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u767d\u4e91\u533a",
                  id: "\u767d\u4e91\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u89c2\u5c71\u6e56\u533a",
                  id: "\u89c2\u5c71\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5f00\u9633\u53bf",
                  id: "\u5f00\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u606f\u70fd\u53bf",
                  id: "\u606f\u70fd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4fee\u6587\u53bf",
                  id: "\u4fee\u6587\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6e05\u9547\u5e02",
                  id: "\u6e05\u9547\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u516d\u76d8\u6c34\u5e02",
              id: "\u516d\u76d8\u6c34\u5e02",
              subArea: [
                {
                  areaName: "\u949f\u5c71\u533a",
                  id: "\u949f\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u516d\u679d\u7279\u533a",
                  id: "\u516d\u679d\u7279\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c34\u57ce\u533a",
                  id: "\u6c34\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u76d8\u5dde\u5e02",
                  id: "\u76d8\u5dde\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9075\u4e49\u5e02",
              id: "\u9075\u4e49\u5e02",
              subArea: [
                {
                  areaName: "\u7ea2\u82b1\u5c97\u533a",
                  id: "\u7ea2\u82b1\u5c97\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c47\u5ddd\u533a",
                  id: "\u6c47\u5ddd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u64ad\u5dde\u533a",
                  id: "\u64ad\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6850\u6893\u53bf",
                  id: "\u6850\u6893\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7ee5\u9633\u53bf",
                  id: "\u7ee5\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6b63\u5b89\u53bf",
                  id: "\u6b63\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u9053\u771f\u4ee1\u4f6c\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u9053\u771f\u4ee1\u4f6c\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u52a1\u5ddd\u4ee1\u4f6c\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u52a1\u5ddd\u4ee1\u4f6c\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u51e4\u5188\u53bf",
                  id: "\u51e4\u5188\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6e44\u6f6d\u53bf",
                  id: "\u6e44\u6f6d\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4f59\u5e86\u53bf",
                  id: "\u4f59\u5e86\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e60\u6c34\u53bf",
                  id: "\u4e60\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8d64\u6c34\u5e02",
                  id: "\u8d64\u6c34\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4ec1\u6000\u5e02",
                  id: "\u4ec1\u6000\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5b89\u987a\u5e02",
              id: "\u5b89\u987a\u5e02",
              subArea: [
                {
                  areaName: "\u897f\u79c0\u533a",
                  id: "\u897f\u79c0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u575d\u533a",
                  id: "\u5e73\u575d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u666e\u5b9a\u53bf",
                  id: "\u666e\u5b9a\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u9547\u5b81\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u9547\u5b81\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5173\u5cad\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5173\u5cad\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u7d2b\u4e91\u82d7\u65cf\u5e03\u4f9d\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u7d2b\u4e91\u82d7\u65cf\u5e03\u4f9d\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6bd5\u8282\u5e02",
              id: "\u6bd5\u8282\u5e02",
              subArea: [
                {
                  areaName: "\u4e03\u661f\u5173\u533a",
                  id: "\u4e03\u661f\u5173\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u65b9\u53bf",
                  id: "\u5927\u65b9\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u6c99\u53bf",
                  id: "\u91d1\u6c99\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7ec7\u91d1\u53bf",
                  id: "\u7ec7\u91d1\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7eb3\u96cd\u53bf",
                  id: "\u7eb3\u96cd\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5a01\u5b81\u5f5d\u65cf\u56de\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5a01\u5b81\u5f5d\u65cf\u56de\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8d6b\u7ae0\u53bf",
                  id: "\u8d6b\u7ae0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9ed4\u897f\u5e02",
                  id: "\u9ed4\u897f\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u94dc\u4ec1\u5e02",
              id: "\u94dc\u4ec1\u5e02",
              subArea: [
                {
                  areaName: "\u78a7\u6c5f\u533a",
                  id: "\u78a7\u6c5f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e07\u5c71\u533a",
                  id: "\u4e07\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c5f\u53e3\u53bf",
                  id: "\u6c5f\u53e3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7389\u5c4f\u4f97\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u7389\u5c4f\u4f97\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u9621\u53bf",
                  id: "\u77f3\u9621\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u601d\u5357\u53bf",
                  id: "\u601d\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5370\u6c5f\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5370\u6c5f\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5fb7\u6c5f\u53bf",
                  id: "\u5fb7\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cbf\u6cb3\u571f\u5bb6\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u6cbf\u6cb3\u571f\u5bb6\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u677e\u6843\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u677e\u6843\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName:
                "\u9ed4\u897f\u5357\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde",
              id: "\u9ed4\u897f\u5357\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u5174\u4e49\u5e02",
                  id: "\u5174\u4e49\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5174\u4ec1\u5e02",
                  id: "\u5174\u4ec1\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u666e\u5b89\u53bf",
                  id: "\u666e\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6674\u9686\u53bf",
                  id: "\u6674\u9686\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8d1e\u4e30\u53bf",
                  id: "\u8d1e\u4e30\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u671b\u8c1f\u53bf",
                  id: "\u671b\u8c1f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u518c\u4ea8\u53bf",
                  id: "\u518c\u4ea8\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u9f99\u53bf",
                  id: "\u5b89\u9f99\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName:
                "\u9ed4\u4e1c\u5357\u82d7\u65cf\u4f97\u65cf\u81ea\u6cbb\u5dde",
              id: "\u9ed4\u4e1c\u5357\u82d7\u65cf\u4f97\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u51ef\u91cc\u5e02",
                  id: "\u51ef\u91cc\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u9ec4\u5e73\u53bf",
                  id: "\u9ec4\u5e73\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65bd\u79c9\u53bf",
                  id: "\u65bd\u79c9\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e09\u7a57\u53bf",
                  id: "\u4e09\u7a57\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9547\u8fdc\u53bf",
                  id: "\u9547\u8fdc\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c91\u5de9\u53bf",
                  id: "\u5c91\u5de9\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5929\u67f1\u53bf",
                  id: "\u5929\u67f1\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9526\u5c4f\u53bf",
                  id: "\u9526\u5c4f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5251\u6cb3\u53bf",
                  id: "\u5251\u6cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u53f0\u6c5f\u53bf",
                  id: "\u53f0\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9ece\u5e73\u53bf",
                  id: "\u9ece\u5e73\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6995\u6c5f\u53bf",
                  id: "\u6995\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4ece\u6c5f\u53bf",
                  id: "\u4ece\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u96f7\u5c71\u53bf",
                  id: "\u96f7\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9ebb\u6c5f\u53bf",
                  id: "\u9ebb\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e39\u5be8\u53bf",
                  id: "\u4e39\u5be8\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName:
                "\u9ed4\u5357\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde",
              id: "\u9ed4\u5357\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u90fd\u5300\u5e02",
                  id: "\u90fd\u5300\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u798f\u6cc9\u5e02",
                  id: "\u798f\u6cc9\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u8354\u6ce2\u53bf",
                  id: "\u8354\u6ce2\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8d35\u5b9a\u53bf",
                  id: "\u8d35\u5b9a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u74ee\u5b89\u53bf",
                  id: "\u74ee\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u72ec\u5c71\u53bf",
                  id: "\u72ec\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u5858\u53bf",
                  id: "\u5e73\u5858\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7f57\u7538\u53bf",
                  id: "\u7f57\u7538\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u987a\u53bf",
                  id: "\u957f\u987a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u91cc\u53bf",
                  id: "\u9f99\u91cc\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u60e0\u6c34\u53bf",
                  id: "\u60e0\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e09\u90fd\u6c34\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u4e09\u90fd\u6c34\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u4e91\u5357\u7701",
          id: "\u4e91\u5357\u7701",
          subArea: [
            {
              areaName: "\u6606\u660e\u5e02",
              id: "\u6606\u660e\u5e02",
              subArea: [
                {
                  areaName: "\u4e94\u534e\u533a",
                  id: "\u4e94\u534e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u76d8\u9f99\u533a",
                  id: "\u76d8\u9f99\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b98\u6e21\u533a",
                  id: "\u5b98\u6e21\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u5c71\u533a",
                  id: "\u897f\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u5ddd\u533a",
                  id: "\u4e1c\u5ddd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5448\u8d21\u533a",
                  id: "\u5448\u8d21\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u664b\u5b81\u533a",
                  id: "\u664b\u5b81\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5bcc\u6c11\u53bf",
                  id: "\u5bcc\u6c11\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b9c\u826f\u53bf",
                  id: "\u5b9c\u826f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u6797\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u77f3\u6797\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5d69\u660e\u53bf",
                  id: "\u5d69\u660e\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u7984\u529d\u5f5d\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u7984\u529d\u5f5d\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5bfb\u7538\u56de\u65cf\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5bfb\u7538\u56de\u65cf\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u5b81\u5e02",
                  id: "\u5b89\u5b81\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u66f2\u9756\u5e02",
              id: "\u66f2\u9756\u5e02",
              subArea: [
                {
                  areaName: "\u9e92\u9e9f\u533a",
                  id: "\u9e92\u9e9f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6cbe\u76ca\u533a",
                  id: "\u6cbe\u76ca\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9a6c\u9f99\u533a",
                  id: "\u9a6c\u9f99\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9646\u826f\u53bf",
                  id: "\u9646\u826f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e08\u5b97\u53bf",
                  id: "\u5e08\u5b97\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7f57\u5e73\u53bf",
                  id: "\u7f57\u5e73\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5bcc\u6e90\u53bf",
                  id: "\u5bcc\u6e90\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4f1a\u6cfd\u53bf",
                  id: "\u4f1a\u6cfd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5ba3\u5a01\u5e02",
                  id: "\u5ba3\u5a01\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u7389\u6eaa\u5e02",
              id: "\u7389\u6eaa\u5e02",
              subArea: [
                {
                  areaName: "\u7ea2\u5854\u533a",
                  id: "\u7ea2\u5854\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c5f\u5ddd\u533a",
                  id: "\u6c5f\u5ddd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u901a\u6d77\u53bf",
                  id: "\u901a\u6d77\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u534e\u5b81\u53bf",
                  id: "\u534e\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6613\u95e8\u53bf",
                  id: "\u6613\u95e8\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5ce8\u5c71\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5ce8\u5c71\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u65b0\u5e73\u5f5d\u65cf\u50a3\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u65b0\u5e73\u5f5d\u65cf\u50a3\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5143\u6c5f\u54c8\u5c3c\u65cf\u5f5d\u65cf\u50a3\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5143\u6c5f\u54c8\u5c3c\u65cf\u5f5d\u65cf\u50a3\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6f84\u6c5f\u5e02",
                  id: "\u6f84\u6c5f\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4fdd\u5c71\u5e02",
              id: "\u4fdd\u5c71\u5e02",
              subArea: [
                {
                  areaName: "\u9686\u9633\u533a",
                  id: "\u9686\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65bd\u7538\u53bf",
                  id: "\u65bd\u7538\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u9675\u53bf",
                  id: "\u9f99\u9675\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u660c\u5b81\u53bf",
                  id: "\u660c\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u817e\u51b2\u5e02",
                  id: "\u817e\u51b2\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u662d\u901a\u5e02",
              id: "\u662d\u901a\u5e02",
              subArea: [
                {
                  areaName: "\u662d\u9633\u533a",
                  id: "\u662d\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9c81\u7538\u53bf",
                  id: "\u9c81\u7538\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5de7\u5bb6\u53bf",
                  id: "\u5de7\u5bb6\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u76d0\u6d25\u53bf",
                  id: "\u76d0\u6d25\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u5173\u53bf",
                  id: "\u5927\u5173\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u5584\u53bf",
                  id: "\u6c38\u5584\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7ee5\u6c5f\u53bf",
                  id: "\u7ee5\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9547\u96c4\u53bf",
                  id: "\u9547\u96c4\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5f5d\u826f\u53bf",
                  id: "\u5f5d\u826f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5a01\u4fe1\u53bf",
                  id: "\u5a01\u4fe1\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c34\u5bcc\u5e02",
                  id: "\u6c34\u5bcc\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e3d\u6c5f\u5e02",
              id: "\u4e3d\u6c5f\u5e02",
              subArea: [
                {
                  areaName: "\u53e4\u57ce\u533a",
                  id: "\u53e4\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7389\u9f99\u7eb3\u897f\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u7389\u9f99\u7eb3\u897f\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u80dc\u53bf",
                  id: "\u6c38\u80dc\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u534e\u576a\u53bf",
                  id: "\u534e\u576a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b81\u8497\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5b81\u8497\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u666e\u6d31\u5e02",
              id: "\u666e\u6d31\u5e02",
              subArea: [
                {
                  areaName: "\u601d\u8305\u533a",
                  id: "\u601d\u8305\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5b81\u6d31\u54c8\u5c3c\u65cf\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5b81\u6d31\u54c8\u5c3c\u65cf\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u58a8\u6c5f\u54c8\u5c3c\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u58a8\u6c5f\u54c8\u5c3c\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u666f\u4e1c\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u666f\u4e1c\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u666f\u8c37\u50a3\u65cf\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u666f\u8c37\u50a3\u65cf\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u9547\u6c85\u5f5d\u65cf\u54c8\u5c3c\u65cf\u62c9\u795c\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u9547\u6c85\u5f5d\u65cf\u54c8\u5c3c\u65cf\u62c9\u795c\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6c5f\u57ce\u54c8\u5c3c\u65cf\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u6c5f\u57ce\u54c8\u5c3c\u65cf\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5b5f\u8fde\u50a3\u65cf\u62c9\u795c\u65cf\u4f64\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5b5f\u8fde\u50a3\u65cf\u62c9\u795c\u65cf\u4f64\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6f9c\u6ca7\u62c9\u795c\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u6f9c\u6ca7\u62c9\u795c\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u76df\u4f64\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u897f\u76df\u4f64\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e34\u6ca7\u5e02",
              id: "\u4e34\u6ca7\u5e02",
              subArea: [
                {
                  areaName: "\u4e34\u7fd4\u533a",
                  id: "\u4e34\u7fd4\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u51e4\u5e86\u53bf",
                  id: "\u51e4\u5e86\u53bf",
                  subArea: [],
                },
                { areaName: "\u4e91\u53bf", id: "\u4e91\u53bf", subArea: [] },
                {
                  areaName: "\u6c38\u5fb7\u53bf",
                  id: "\u6c38\u5fb7\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9547\u5eb7\u53bf",
                  id: "\u9547\u5eb7\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u53cc\u6c5f\u62c9\u795c\u65cf\u4f64\u65cf\u5e03\u6717\u65cf\u50a3\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u53cc\u6c5f\u62c9\u795c\u65cf\u4f64\u65cf\u5e03\u6717\u65cf\u50a3\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u803f\u9a6c\u50a3\u65cf\u4f64\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u803f\u9a6c\u50a3\u65cf\u4f64\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6ca7\u6e90\u4f64\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u6ca7\u6e90\u4f64\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u695a\u96c4\u5f5d\u65cf\u81ea\u6cbb\u5dde",
              id: "\u695a\u96c4\u5f5d\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u695a\u96c4\u5e02",
                  id: "\u695a\u96c4\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u7984\u4e30\u5e02",
                  id: "\u7984\u4e30\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u53cc\u67cf\u53bf",
                  id: "\u53cc\u67cf\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u725f\u5b9a\u53bf",
                  id: "\u725f\u5b9a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u534e\u53bf",
                  id: "\u5357\u534e\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u59da\u5b89\u53bf",
                  id: "\u59da\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u59da\u53bf",
                  id: "\u5927\u59da\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u4ec1\u53bf",
                  id: "\u6c38\u4ec1\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5143\u8c0b\u53bf",
                  id: "\u5143\u8c0b\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u5b9a\u53bf",
                  id: "\u6b66\u5b9a\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName:
                "\u7ea2\u6cb3\u54c8\u5c3c\u65cf\u5f5d\u65cf\u81ea\u6cbb\u5dde",
              id: "\u7ea2\u6cb3\u54c8\u5c3c\u65cf\u5f5d\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u4e2a\u65e7\u5e02",
                  id: "\u4e2a\u65e7\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5f00\u8fdc\u5e02",
                  id: "\u5f00\u8fdc\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u8499\u81ea\u5e02",
                  id: "\u8499\u81ea\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5f25\u52d2\u5e02",
                  id: "\u5f25\u52d2\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5c4f\u8fb9\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5c4f\u8fb9\u82d7\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5efa\u6c34\u53bf",
                  id: "\u5efa\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u5c4f\u53bf",
                  id: "\u77f3\u5c4f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cf8\u897f\u53bf",
                  id: "\u6cf8\u897f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5143\u9633\u53bf",
                  id: "\u5143\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7ea2\u6cb3\u53bf",
                  id: "\u7ea2\u6cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u91d1\u5e73\u82d7\u65cf\u7476\u65cf\u50a3\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u91d1\u5e73\u82d7\u65cf\u7476\u65cf\u50a3\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7eff\u6625\u53bf",
                  id: "\u7eff\u6625\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cb3\u53e3\u7476\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u6cb3\u53e3\u7476\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName:
                "\u6587\u5c71\u58ee\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde",
              id: "\u6587\u5c71\u58ee\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u6587\u5c71\u5e02",
                  id: "\u6587\u5c71\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u781a\u5c71\u53bf",
                  id: "\u781a\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u7574\u53bf",
                  id: "\u897f\u7574\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9ebb\u6817\u5761\u53bf",
                  id: "\u9ebb\u6817\u5761\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9a6c\u5173\u53bf",
                  id: "\u9a6c\u5173\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e18\u5317\u53bf",
                  id: "\u4e18\u5317\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e7f\u5357\u53bf",
                  id: "\u5e7f\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5bcc\u5b81\u53bf",
                  id: "\u5bcc\u5b81\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName:
                "\u897f\u53cc\u7248\u7eb3\u50a3\u65cf\u81ea\u6cbb\u5dde",
              id: "\u897f\u53cc\u7248\u7eb3\u50a3\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u666f\u6d2a\u5e02",
                  id: "\u666f\u6d2a\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u52d0\u6d77\u53bf",
                  id: "\u52d0\u6d77\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u52d0\u814a\u53bf",
                  id: "\u52d0\u814a\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5927\u7406\u767d\u65cf\u81ea\u6cbb\u5dde",
              id: "\u5927\u7406\u767d\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u5927\u7406\u5e02",
                  id: "\u5927\u7406\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6f3e\u6fde\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u6f3e\u6fde\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7965\u4e91\u53bf",
                  id: "\u7965\u4e91\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5bbe\u5ddd\u53bf",
                  id: "\u5bbe\u5ddd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5f25\u6e21\u53bf",
                  id: "\u5f25\u6e21\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u6da7\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5357\u6da7\u5f5d\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5dcd\u5c71\u5f5d\u65cf\u56de\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5dcd\u5c71\u5f5d\u65cf\u56de\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u5e73\u53bf",
                  id: "\u6c38\u5e73\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e91\u9f99\u53bf",
                  id: "\u4e91\u9f99\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d31\u6e90\u53bf",
                  id: "\u6d31\u6e90\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5251\u5ddd\u53bf",
                  id: "\u5251\u5ddd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9e64\u5e86\u53bf",
                  id: "\u9e64\u5e86\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName:
                "\u5fb7\u5b8f\u50a3\u65cf\u666f\u9887\u65cf\u81ea\u6cbb\u5dde",
              id: "\u5fb7\u5b8f\u50a3\u65cf\u666f\u9887\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u745e\u4e3d\u5e02",
                  id: "\u745e\u4e3d\u5e02",
                  subArea: [],
                },
                { areaName: "\u8292\u5e02", id: "\u8292\u5e02", subArea: [] },
                {
                  areaName: "\u6881\u6cb3\u53bf",
                  id: "\u6881\u6cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u76c8\u6c5f\u53bf",
                  id: "\u76c8\u6c5f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9647\u5ddd\u53bf",
                  id: "\u9647\u5ddd\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6012\u6c5f\u5088\u50f3\u65cf\u81ea\u6cbb\u5dde",
              id: "\u6012\u6c5f\u5088\u50f3\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u6cf8\u6c34\u5e02",
                  id: "\u6cf8\u6c34\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u798f\u8d21\u53bf",
                  id: "\u798f\u8d21\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u8d21\u5c71\u72ec\u9f99\u65cf\u6012\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u8d21\u5c71\u72ec\u9f99\u65cf\u6012\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5170\u576a\u767d\u65cf\u666e\u7c73\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5170\u576a\u767d\u65cf\u666e\u7c73\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u8fea\u5e86\u85cf\u65cf\u81ea\u6cbb\u5dde",
              id: "\u8fea\u5e86\u85cf\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u9999\u683c\u91cc\u62c9\u5e02",
                  id: "\u9999\u683c\u91cc\u62c9\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5fb7\u94a6\u53bf",
                  id: "\u5fb7\u94a6\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7ef4\u897f\u5088\u50f3\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u7ef4\u897f\u5088\u50f3\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u897f\u85cf\u81ea\u6cbb\u533a",
          id: "\u897f\u85cf\u81ea\u6cbb\u533a",
          subArea: [
            {
              areaName: "\u62c9\u8428\u5e02",
              id: "\u62c9\u8428\u5e02",
              subArea: [
                {
                  areaName: "\u57ce\u5173\u533a",
                  id: "\u57ce\u5173\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5806\u9f99\u5fb7\u5e86\u533a",
                  id: "\u5806\u9f99\u5fb7\u5e86\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8fbe\u5b5c\u533a",
                  id: "\u8fbe\u5b5c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6797\u5468\u53bf",
                  id: "\u6797\u5468\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5f53\u96c4\u53bf",
                  id: "\u5f53\u96c4\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c3c\u6728\u53bf",
                  id: "\u5c3c\u6728\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u66f2\u6c34\u53bf",
                  id: "\u66f2\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u58a8\u7af9\u5de5\u5361\u53bf",
                  id: "\u58a8\u7af9\u5de5\u5361\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u683c\u5c14\u6728\u85cf\u9752\u5de5\u4e1a\u56ed\u533a",
                  id: "\u683c\u5c14\u6728\u85cf\u9752\u5de5\u4e1a\u56ed\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u62c9\u8428\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  id: "\u62c9\u8428\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u897f\u85cf\u6587\u5316\u65c5\u6e38\u521b\u610f\u56ed\u533a",
                  id: "\u897f\u85cf\u6587\u5316\u65c5\u6e38\u521b\u610f\u56ed\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8fbe\u5b5c\u5de5\u4e1a\u56ed\u533a",
                  id: "\u8fbe\u5b5c\u5de5\u4e1a\u56ed\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u65e5\u5580\u5219\u5e02",
              id: "\u65e5\u5580\u5219\u5e02",
              subArea: [
                {
                  areaName: "\u6851\u73e0\u5b5c\u533a",
                  id: "\u6851\u73e0\u5b5c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u6728\u6797\u53bf",
                  id: "\u5357\u6728\u6797\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c5f\u5b5c\u53bf",
                  id: "\u6c5f\u5b5c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b9a\u65e5\u53bf",
                  id: "\u5b9a\u65e5\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8428\u8fe6\u53bf",
                  id: "\u8428\u8fe6\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u62c9\u5b5c\u53bf",
                  id: "\u62c9\u5b5c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6602\u4ec1\u53bf",
                  id: "\u6602\u4ec1\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8c22\u901a\u95e8\u53bf",
                  id: "\u8c22\u901a\u95e8\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u767d\u6717\u53bf",
                  id: "\u767d\u6717\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4ec1\u5e03\u53bf",
                  id: "\u4ec1\u5e03\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5eb7\u9a6c\u53bf",
                  id: "\u5eb7\u9a6c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b9a\u7ed3\u53bf",
                  id: "\u5b9a\u7ed3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4ef2\u5df4\u53bf",
                  id: "\u4ef2\u5df4\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e9a\u4e1c\u53bf",
                  id: "\u4e9a\u4e1c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5409\u9686\u53bf",
                  id: "\u5409\u9686\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8042\u62c9\u6728\u53bf",
                  id: "\u8042\u62c9\u6728\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8428\u560e\u53bf",
                  id: "\u8428\u560e\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c97\u5df4\u53bf",
                  id: "\u5c97\u5df4\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u660c\u90fd\u5e02",
              id: "\u660c\u90fd\u5e02",
              subArea: [
                {
                  areaName: "\u5361\u82e5\u533a",
                  id: "\u5361\u82e5\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c5f\u8fbe\u53bf",
                  id: "\u6c5f\u8fbe\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8d21\u89c9\u53bf",
                  id: "\u8d21\u89c9\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7c7b\u4e4c\u9f50\u53bf",
                  id: "\u7c7b\u4e4c\u9f50\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e01\u9752\u53bf",
                  id: "\u4e01\u9752\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5bdf\u96c5\u53bf",
                  id: "\u5bdf\u96c5\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u516b\u5bbf\u53bf",
                  id: "\u516b\u5bbf\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5de6\u8d21\u53bf",
                  id: "\u5de6\u8d21\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8292\u5eb7\u53bf",
                  id: "\u8292\u5eb7\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d1b\u9686\u53bf",
                  id: "\u6d1b\u9686\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8fb9\u575d\u53bf",
                  id: "\u8fb9\u575d\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6797\u829d\u5e02",
              id: "\u6797\u829d\u5e02",
              subArea: [
                {
                  areaName: "\u5df4\u5b9c\u533a",
                  id: "\u5df4\u5b9c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5de5\u5e03\u6c5f\u8fbe\u53bf",
                  id: "\u5de5\u5e03\u6c5f\u8fbe\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u58a8\u8131\u53bf",
                  id: "\u58a8\u8131\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6ce2\u5bc6\u53bf",
                  id: "\u6ce2\u5bc6\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5bdf\u9685\u53bf",
                  id: "\u5bdf\u9685\u53bf",
                  subArea: [],
                },
                { areaName: "\u6717\u53bf", id: "\u6717\u53bf", subArea: [] },
                {
                  areaName: "\u7c73\u6797\u5e02",
                  id: "\u7c73\u6797\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5c71\u5357\u5e02",
              id: "\u5c71\u5357\u5e02",
              subArea: [
                {
                  areaName: "\u4e43\u4e1c\u533a",
                  id: "\u4e43\u4e1c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u624e\u56ca\u53bf",
                  id: "\u624e\u56ca\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8d21\u560e\u53bf",
                  id: "\u8d21\u560e\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6851\u65e5\u53bf",
                  id: "\u6851\u65e5\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u743c\u7ed3\u53bf",
                  id: "\u743c\u7ed3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u66f2\u677e\u53bf",
                  id: "\u66f2\u677e\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u63aa\u7f8e\u53bf",
                  id: "\u63aa\u7f8e\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d1b\u624e\u53bf",
                  id: "\u6d1b\u624e\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u52a0\u67e5\u53bf",
                  id: "\u52a0\u67e5\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9686\u5b50\u53bf",
                  id: "\u9686\u5b50\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d6a\u5361\u5b50\u53bf",
                  id: "\u6d6a\u5361\u5b50\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9519\u90a3\u5e02",
                  id: "\u9519\u90a3\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u90a3\u66f2\u5e02",
              id: "\u90a3\u66f2\u5e02",
              subArea: [
                {
                  areaName: "\u8272\u5c3c\u533a",
                  id: "\u8272\u5c3c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5609\u9ece\u53bf",
                  id: "\u5609\u9ece\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6bd4\u5982\u53bf",
                  id: "\u6bd4\u5982\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8042\u8363\u53bf",
                  id: "\u8042\u8363\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u591a\u53bf",
                  id: "\u5b89\u591a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7533\u624e\u53bf",
                  id: "\u7533\u624e\u53bf",
                  subArea: [],
                },
                { areaName: "\u7d22\u53bf", id: "\u7d22\u53bf", subArea: [] },
                {
                  areaName: "\u73ed\u6208\u53bf",
                  id: "\u73ed\u6208\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5df4\u9752\u53bf",
                  id: "\u5df4\u9752\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c3c\u739b\u53bf",
                  id: "\u5c3c\u739b\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u53cc\u6e56\u53bf",
                  id: "\u53cc\u6e56\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u963f\u91cc\u5730\u533a",
              id: "\u963f\u91cc\u5730\u533a",
              subArea: [
                {
                  areaName: "\u666e\u5170\u53bf",
                  id: "\u666e\u5170\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u672d\u8fbe\u53bf",
                  id: "\u672d\u8fbe\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5676\u5c14\u53bf",
                  id: "\u5676\u5c14\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65e5\u571f\u53bf",
                  id: "\u65e5\u571f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9769\u5409\u53bf",
                  id: "\u9769\u5409\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6539\u5219\u53bf",
                  id: "\u6539\u5219\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u63aa\u52e4\u53bf",
                  id: "\u63aa\u52e4\u53bf",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u9655\u897f\u7701",
          id: "\u9655\u897f\u7701",
          subArea: [
            {
              areaName: "\u897f\u5b89\u5e02",
              id: "\u897f\u5b89\u5e02",
              subArea: [
                {
                  areaName: "\u65b0\u57ce\u533a",
                  id: "\u65b0\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7891\u6797\u533a",
                  id: "\u7891\u6797\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u83b2\u6e56\u533a",
                  id: "\u83b2\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u705e\u6865\u533a",
                  id: "\u705e\u6865\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u672a\u592e\u533a",
                  id: "\u672a\u592e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u96c1\u5854\u533a",
                  id: "\u96c1\u5854\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u960e\u826f\u533a",
                  id: "\u960e\u826f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u6f7c\u533a",
                  id: "\u4e34\u6f7c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u5b89\u533a",
                  id: "\u957f\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9ad8\u9675\u533a",
                  id: "\u9ad8\u9675\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9120\u9091\u533a",
                  id: "\u9120\u9091\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u84dd\u7530\u53bf",
                  id: "\u84dd\u7530\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5468\u81f3\u53bf",
                  id: "\u5468\u81f3\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u94dc\u5ddd\u5e02",
              id: "\u94dc\u5ddd\u5e02",
              subArea: [
                {
                  areaName: "\u738b\u76ca\u533a",
                  id: "\u738b\u76ca\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5370\u53f0\u533a",
                  id: "\u5370\u53f0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8000\u5dde\u533a",
                  id: "\u8000\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b9c\u541b\u53bf",
                  id: "\u5b9c\u541b\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5b9d\u9e21\u5e02",
              id: "\u5b9d\u9e21\u5e02",
              subArea: [
                {
                  areaName: "\u6e2d\u6ee8\u533a",
                  id: "\u6e2d\u6ee8\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u53f0\u533a",
                  id: "\u91d1\u53f0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9648\u4ed3\u533a",
                  id: "\u9648\u4ed3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u51e4\u7fd4\u533a",
                  id: "\u51e4\u7fd4\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5c90\u5c71\u53bf",
                  id: "\u5c90\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6276\u98ce\u53bf",
                  id: "\u6276\u98ce\u53bf",
                  subArea: [],
                },
                { areaName: "\u7709\u53bf", id: "\u7709\u53bf", subArea: [] },
                { areaName: "\u9647\u53bf", id: "\u9647\u53bf", subArea: [] },
                {
                  areaName: "\u5343\u9633\u53bf",
                  id: "\u5343\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9e9f\u6e38\u53bf",
                  id: "\u9e9f\u6e38\u53bf",
                  subArea: [],
                },
                { areaName: "\u51e4\u53bf", id: "\u51e4\u53bf", subArea: [] },
                {
                  areaName: "\u592a\u767d\u53bf",
                  id: "\u592a\u767d\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u54b8\u9633\u5e02",
              id: "\u54b8\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u79e6\u90fd\u533a",
                  id: "\u79e6\u90fd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6768\u9675\u533a",
                  id: "\u6768\u9675\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e2d\u57ce\u533a",
                  id: "\u6e2d\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e09\u539f\u53bf",
                  id: "\u4e09\u539f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cfe\u9633\u53bf",
                  id: "\u6cfe\u9633\u53bf",
                  subArea: [],
                },
                { areaName: "\u4e7e\u53bf", id: "\u4e7e\u53bf", subArea: [] },
                {
                  areaName: "\u793c\u6cc9\u53bf",
                  id: "\u793c\u6cc9\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u5bff\u53bf",
                  id: "\u6c38\u5bff\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u6b66\u53bf",
                  id: "\u957f\u6b66\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65ec\u9091\u53bf",
                  id: "\u65ec\u9091\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6df3\u5316\u53bf",
                  id: "\u6df3\u5316\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u529f\u53bf",
                  id: "\u6b66\u529f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5174\u5e73\u5e02",
                  id: "\u5174\u5e73\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5f6c\u5dde\u5e02",
                  id: "\u5f6c\u5dde\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6e2d\u5357\u5e02",
              id: "\u6e2d\u5357\u5e02",
              subArea: [
                {
                  areaName: "\u4e34\u6e2d\u533a",
                  id: "\u4e34\u6e2d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u534e\u5dde\u533a",
                  id: "\u534e\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6f7c\u5173\u53bf",
                  id: "\u6f7c\u5173\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u8354\u53bf",
                  id: "\u5927\u8354\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5408\u9633\u53bf",
                  id: "\u5408\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6f84\u57ce\u53bf",
                  id: "\u6f84\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u84b2\u57ce\u53bf",
                  id: "\u84b2\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u767d\u6c34\u53bf",
                  id: "\u767d\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5bcc\u5e73\u53bf",
                  id: "\u5bcc\u5e73\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u97e9\u57ce\u5e02",
                  id: "\u97e9\u57ce\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u534e\u9634\u5e02",
                  id: "\u534e\u9634\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5ef6\u5b89\u5e02",
              id: "\u5ef6\u5b89\u5e02",
              subArea: [
                {
                  areaName: "\u5b9d\u5854\u533a",
                  id: "\u5b9d\u5854\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u585e\u533a",
                  id: "\u5b89\u585e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5ef6\u957f\u53bf",
                  id: "\u5ef6\u957f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5ef6\u5ddd\u53bf",
                  id: "\u5ef6\u5ddd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5fd7\u4e39\u53bf",
                  id: "\u5fd7\u4e39\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5434\u8d77\u53bf",
                  id: "\u5434\u8d77\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7518\u6cc9\u53bf",
                  id: "\u7518\u6cc9\u53bf",
                  subArea: [],
                },
                { areaName: "\u5bcc\u53bf", id: "\u5bcc\u53bf", subArea: [] },
                {
                  areaName: "\u6d1b\u5ddd\u53bf",
                  id: "\u6d1b\u5ddd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b9c\u5ddd\u53bf",
                  id: "\u5b9c\u5ddd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9ec4\u9f99\u53bf",
                  id: "\u9ec4\u9f99\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9ec4\u9675\u53bf",
                  id: "\u9ec4\u9675\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b50\u957f\u5e02",
                  id: "\u5b50\u957f\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6c49\u4e2d\u5e02",
              id: "\u6c49\u4e2d\u5e02",
              subArea: [
                {
                  areaName: "\u6c49\u53f0\u533a",
                  id: "\u6c49\u53f0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u90d1\u533a",
                  id: "\u5357\u90d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u57ce\u56fa\u53bf",
                  id: "\u57ce\u56fa\u53bf",
                  subArea: [],
                },
                { areaName: "\u6d0b\u53bf", id: "\u6d0b\u53bf", subArea: [] },
                {
                  areaName: "\u897f\u4e61\u53bf",
                  id: "\u897f\u4e61\u53bf",
                  subArea: [],
                },
                { areaName: "\u52c9\u53bf", id: "\u52c9\u53bf", subArea: [] },
                {
                  areaName: "\u5b81\u5f3a\u53bf",
                  id: "\u5b81\u5f3a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7565\u9633\u53bf",
                  id: "\u7565\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9547\u5df4\u53bf",
                  id: "\u9547\u5df4\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7559\u575d\u53bf",
                  id: "\u7559\u575d\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4f5b\u576a\u53bf",
                  id: "\u4f5b\u576a\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6986\u6797\u5e02",
              id: "\u6986\u6797\u5e02",
              subArea: [
                {
                  areaName: "\u6986\u9633\u533a",
                  id: "\u6986\u9633\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6a2a\u5c71\u533a",
                  id: "\u6a2a\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e9c\u8c37\u53bf",
                  id: "\u5e9c\u8c37\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9756\u8fb9\u53bf",
                  id: "\u9756\u8fb9\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b9a\u8fb9\u53bf",
                  id: "\u5b9a\u8fb9\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7ee5\u5fb7\u53bf",
                  id: "\u7ee5\u5fb7\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7c73\u8102\u53bf",
                  id: "\u7c73\u8102\u53bf",
                  subArea: [],
                },
                { areaName: "\u4f73\u53bf", id: "\u4f73\u53bf", subArea: [] },
                {
                  areaName: "\u5434\u5821\u53bf",
                  id: "\u5434\u5821\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6e05\u6da7\u53bf",
                  id: "\u6e05\u6da7\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b50\u6d32\u53bf",
                  id: "\u5b50\u6d32\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u795e\u6728\u5e02",
                  id: "\u795e\u6728\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5b89\u5eb7\u5e02",
              id: "\u5b89\u5eb7\u5e02",
              subArea: [
                {
                  areaName: "\u6c49\u6ee8\u533a",
                  id: "\u6c49\u6ee8\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c49\u9634\u53bf",
                  id: "\u6c49\u9634\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u6cc9\u53bf",
                  id: "\u77f3\u6cc9\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5b81\u9655\u53bf",
                  id: "\u5b81\u9655\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7d2b\u9633\u53bf",
                  id: "\u7d2b\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c9a\u768b\u53bf",
                  id: "\u5c9a\u768b\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u5229\u53bf",
                  id: "\u5e73\u5229\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9547\u576a\u53bf",
                  id: "\u9547\u576a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u767d\u6cb3\u53bf",
                  id: "\u767d\u6cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65ec\u9633\u5e02",
                  id: "\u65ec\u9633\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5546\u6d1b\u5e02",
              id: "\u5546\u6d1b\u5e02",
              subArea: [
                {
                  areaName: "\u5546\u5dde\u533a",
                  id: "\u5546\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6d1b\u5357\u53bf",
                  id: "\u6d1b\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e39\u51e4\u53bf",
                  id: "\u4e39\u51e4\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5546\u5357\u53bf",
                  id: "\u5546\u5357\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c71\u9633\u53bf",
                  id: "\u5c71\u9633\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9547\u5b89\u53bf",
                  id: "\u9547\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u67de\u6c34\u53bf",
                  id: "\u67de\u6c34\u53bf",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u7518\u8083\u7701",
          id: "\u7518\u8083\u7701",
          subArea: [
            {
              areaName: "\u5170\u5dde\u5e02",
              id: "\u5170\u5dde\u5e02",
              subArea: [
                {
                  areaName: "\u57ce\u5173\u533a",
                  id: "\u57ce\u5173\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e03\u91cc\u6cb3\u533a",
                  id: "\u4e03\u91cc\u6cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u56fa\u533a",
                  id: "\u897f\u56fa\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u5b81\u533a",
                  id: "\u5b89\u5b81\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7ea2\u53e4\u533a",
                  id: "\u7ea2\u53e4\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u767b\u53bf",
                  id: "\u6c38\u767b\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u768b\u5170\u53bf",
                  id: "\u768b\u5170\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6986\u4e2d\u53bf",
                  id: "\u6986\u4e2d\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5170\u5dde\u65b0\u533a",
                  id: "\u5170\u5dde\u65b0\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5609\u5cea\u5173\u5e02",
              id: "\u5609\u5cea\u5173\u5e02",
              subArea: [
                {
                  areaName: "\u96c4\u5173\u8857\u9053",
                  id: "\u96c4\u5173\u8857\u9053",
                  subArea: [],
                },
                {
                  areaName: "\u94a2\u57ce\u8857\u9053",
                  id: "\u94a2\u57ce\u8857\u9053",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u57ce\u9547",
                  id: "\u65b0\u57ce\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5cea\u6cc9\u9547",
                  id: "\u5cea\u6cc9\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u6587\u6b8a\u9547",
                  id: "\u6587\u6b8a\u9547",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u91d1\u660c\u5e02",
              id: "\u91d1\u660c\u5e02",
              subArea: [
                {
                  areaName: "\u91d1\u5ddd\u533a",
                  id: "\u91d1\u5ddd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u660c\u53bf",
                  id: "\u6c38\u660c\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u767d\u94f6\u5e02",
              id: "\u767d\u94f6\u5e02",
              subArea: [
                {
                  areaName: "\u767d\u94f6\u533a",
                  id: "\u767d\u94f6\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u5ddd\u533a",
                  id: "\u5e73\u5ddd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9756\u8fdc\u53bf",
                  id: "\u9756\u8fdc\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4f1a\u5b81\u53bf",
                  id: "\u4f1a\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u666f\u6cf0\u53bf",
                  id: "\u666f\u6cf0\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5929\u6c34\u5e02",
              id: "\u5929\u6c34\u5e02",
              subArea: [
                {
                  areaName: "\u79e6\u5dde\u533a",
                  id: "\u79e6\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9ea6\u79ef\u533a",
                  id: "\u9ea6\u79ef\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e05\u6c34\u53bf",
                  id: "\u6e05\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u79e6\u5b89\u53bf",
                  id: "\u79e6\u5b89\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7518\u8c37\u53bf",
                  id: "\u7518\u8c37\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6b66\u5c71\u53bf",
                  id: "\u6b66\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5f20\u5bb6\u5ddd\u56de\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5f20\u5bb6\u5ddd\u56de\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6b66\u5a01\u5e02",
              id: "\u6b66\u5a01\u5e02",
              subArea: [
                {
                  areaName: "\u51c9\u5dde\u533a",
                  id: "\u51c9\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c11\u52e4\u53bf",
                  id: "\u6c11\u52e4\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u53e4\u6d6a\u53bf",
                  id: "\u53e4\u6d6a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5929\u795d\u85cf\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5929\u795d\u85cf\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5f20\u6396\u5e02",
              id: "\u5f20\u6396\u5e02",
              subArea: [
                {
                  areaName: "\u7518\u5dde\u533a",
                  id: "\u7518\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8083\u5357\u88d5\u56fa\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u8083\u5357\u88d5\u56fa\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c11\u4e50\u53bf",
                  id: "\u6c11\u4e50\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u6cfd\u53bf",
                  id: "\u4e34\u6cfd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9ad8\u53f0\u53bf",
                  id: "\u9ad8\u53f0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c71\u4e39\u53bf",
                  id: "\u5c71\u4e39\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5e73\u51c9\u5e02",
              id: "\u5e73\u51c9\u5e02",
              subArea: [
                {
                  areaName: "\u5d06\u5cd2\u533a",
                  id: "\u5d06\u5cd2\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6cfe\u5ddd\u53bf",
                  id: "\u6cfe\u5ddd\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7075\u53f0\u53bf",
                  id: "\u7075\u53f0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5d07\u4fe1\u53bf",
                  id: "\u5d07\u4fe1\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e84\u6d6a\u53bf",
                  id: "\u5e84\u6d6a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9759\u5b81\u53bf",
                  id: "\u9759\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u534e\u4ead\u5e02",
                  id: "\u534e\u4ead\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9152\u6cc9\u5e02",
              id: "\u9152\u6cc9\u5e02",
              subArea: [
                {
                  areaName: "\u8083\u5dde\u533a",
                  id: "\u8083\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u5854\u53bf",
                  id: "\u91d1\u5854\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u74dc\u5dde\u53bf",
                  id: "\u74dc\u5dde\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8083\u5317\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u8083\u5317\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u963f\u514b\u585e\u54c8\u8428\u514b\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u963f\u514b\u585e\u54c8\u8428\u514b\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7389\u95e8\u5e02",
                  id: "\u7389\u95e8\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6566\u714c\u5e02",
                  id: "\u6566\u714c\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5e86\u9633\u5e02",
              id: "\u5e86\u9633\u5e02",
              subArea: [
                {
                  areaName: "\u897f\u5cf0\u533a",
                  id: "\u897f\u5cf0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e86\u57ce\u53bf",
                  id: "\u5e86\u57ce\u53bf",
                  subArea: [],
                },
                { areaName: "\u73af\u53bf", id: "\u73af\u53bf", subArea: [] },
                {
                  areaName: "\u534e\u6c60\u53bf",
                  id: "\u534e\u6c60\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5408\u6c34\u53bf",
                  id: "\u5408\u6c34\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6b63\u5b81\u53bf",
                  id: "\u6b63\u5b81\u53bf",
                  subArea: [],
                },
                { areaName: "\u5b81\u53bf", id: "\u5b81\u53bf", subArea: [] },
                {
                  areaName: "\u9547\u539f\u53bf",
                  id: "\u9547\u539f\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5b9a\u897f\u5e02",
              id: "\u5b9a\u897f\u5e02",
              subArea: [
                {
                  areaName: "\u5b89\u5b9a\u533a",
                  id: "\u5b89\u5b9a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u901a\u6e2d\u53bf",
                  id: "\u901a\u6e2d\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9647\u897f\u53bf",
                  id: "\u9647\u897f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6e2d\u6e90\u53bf",
                  id: "\u6e2d\u6e90\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u6d2e\u53bf",
                  id: "\u4e34\u6d2e\u53bf",
                  subArea: [],
                },
                { areaName: "\u6f33\u53bf", id: "\u6f33\u53bf", subArea: [] },
                { areaName: "\u5cb7\u53bf", id: "\u5cb7\u53bf", subArea: [] },
              ],
            },
            {
              areaName: "\u9647\u5357\u5e02",
              id: "\u9647\u5357\u5e02",
              subArea: [
                {
                  areaName: "\u6b66\u90fd\u533a",
                  id: "\u6b66\u90fd\u533a",
                  subArea: [],
                },
                { areaName: "\u6210\u53bf", id: "\u6210\u53bf", subArea: [] },
                { areaName: "\u6587\u53bf", id: "\u6587\u53bf", subArea: [] },
                {
                  areaName: "\u5b95\u660c\u53bf",
                  id: "\u5b95\u660c\u53bf",
                  subArea: [],
                },
                { areaName: "\u5eb7\u53bf", id: "\u5eb7\u53bf", subArea: [] },
                {
                  areaName: "\u897f\u548c\u53bf",
                  id: "\u897f\u548c\u53bf",
                  subArea: [],
                },
                { areaName: "\u793c\u53bf", id: "\u793c\u53bf", subArea: [] },
                { areaName: "\u5fbd\u53bf", id: "\u5fbd\u53bf", subArea: [] },
                {
                  areaName: "\u4e24\u5f53\u53bf",
                  id: "\u4e24\u5f53\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e34\u590f\u56de\u65cf\u81ea\u6cbb\u5dde",
              id: "\u4e34\u590f\u56de\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u4e34\u590f\u5e02",
                  id: "\u4e34\u590f\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u590f\u53bf",
                  id: "\u4e34\u590f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5eb7\u4e50\u53bf",
                  id: "\u5eb7\u4e50\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u9756\u53bf",
                  id: "\u6c38\u9756\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5e7f\u6cb3\u53bf",
                  id: "\u5e7f\u6cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u548c\u653f\u53bf",
                  id: "\u548c\u653f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u4e61\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u4e1c\u4e61\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u79ef\u77f3\u5c71\u4fdd\u5b89\u65cf\u4e1c\u4e61\u65cf\u6492\u62c9\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u79ef\u77f3\u5c71\u4fdd\u5b89\u65cf\u4e1c\u4e61\u65cf\u6492\u62c9\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u7518\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde",
              id: "\u7518\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u5408\u4f5c\u5e02",
                  id: "\u5408\u4f5c\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e34\u6f6d\u53bf",
                  id: "\u4e34\u6f6d\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5353\u5c3c\u53bf",
                  id: "\u5353\u5c3c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u821f\u66f2\u53bf",
                  id: "\u821f\u66f2\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8fed\u90e8\u53bf",
                  id: "\u8fed\u90e8\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u739b\u66f2\u53bf",
                  id: "\u739b\u66f2\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u788c\u66f2\u53bf",
                  id: "\u788c\u66f2\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u590f\u6cb3\u53bf",
                  id: "\u590f\u6cb3\u53bf",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u9752\u6d77\u7701",
          id: "\u9752\u6d77\u7701",
          subArea: [
            {
              areaName: "\u897f\u5b81\u5e02",
              id: "\u897f\u5b81\u5e02",
              subArea: [
                {
                  areaName: "\u57ce\u4e1c\u533a",
                  id: "\u57ce\u4e1c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u57ce\u4e2d\u533a",
                  id: "\u57ce\u4e2d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u57ce\u897f\u533a",
                  id: "\u57ce\u897f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u57ce\u5317\u533a",
                  id: "\u57ce\u5317\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e5f\u4e2d\u533a",
                  id: "\u6e5f\u4e2d\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5927\u901a\u56de\u65cf\u571f\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5927\u901a\u56de\u65cf\u571f\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6e5f\u6e90\u53bf",
                  id: "\u6e5f\u6e90\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6d77\u4e1c\u5e02",
              id: "\u6d77\u4e1c\u5e02",
              subArea: [
                {
                  areaName: "\u4e50\u90fd\u533a",
                  id: "\u4e50\u90fd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u5b89\u533a",
                  id: "\u5e73\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u6c11\u548c\u56de\u65cf\u571f\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u6c11\u548c\u56de\u65cf\u571f\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e92\u52a9\u571f\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u4e92\u52a9\u571f\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5316\u9686\u56de\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5316\u9686\u56de\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5faa\u5316\u6492\u62c9\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u5faa\u5316\u6492\u62c9\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6d77\u5317\u85cf\u65cf\u81ea\u6cbb\u5dde",
              id: "\u6d77\u5317\u85cf\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u95e8\u6e90\u56de\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u95e8\u6e90\u56de\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7941\u8fde\u53bf",
                  id: "\u7941\u8fde\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d77\u664f\u53bf",
                  id: "\u6d77\u664f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u521a\u5bdf\u53bf",
                  id: "\u521a\u5bdf\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9ec4\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde",
              id: "\u9ec4\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u540c\u4ec1\u5e02",
                  id: "\u540c\u4ec1\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5c16\u624e\u53bf",
                  id: "\u5c16\u624e\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cfd\u5e93\u53bf",
                  id: "\u6cfd\u5e93\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cb3\u5357\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u6cb3\u5357\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6d77\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde",
              id: "\u6d77\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u5171\u548c\u53bf",
                  id: "\u5171\u548c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u540c\u5fb7\u53bf",
                  id: "\u540c\u5fb7\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8d35\u5fb7\u53bf",
                  id: "\u8d35\u5fb7\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5174\u6d77\u53bf",
                  id: "\u5174\u6d77\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8d35\u5357\u53bf",
                  id: "\u8d35\u5357\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u679c\u6d1b\u85cf\u65cf\u81ea\u6cbb\u5dde",
              id: "\u679c\u6d1b\u85cf\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u739b\u6c81\u53bf",
                  id: "\u739b\u6c81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u73ed\u739b\u53bf",
                  id: "\u73ed\u739b\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7518\u5fb7\u53bf",
                  id: "\u7518\u5fb7\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8fbe\u65e5\u53bf",
                  id: "\u8fbe\u65e5\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e45\u6cbb\u53bf",
                  id: "\u4e45\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u739b\u591a\u53bf",
                  id: "\u739b\u591a\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u7389\u6811\u85cf\u65cf\u81ea\u6cbb\u5dde",
              id: "\u7389\u6811\u85cf\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u7389\u6811\u5e02",
                  id: "\u7389\u6811\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6742\u591a\u53bf",
                  id: "\u6742\u591a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u79f0\u591a\u53bf",
                  id: "\u79f0\u591a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cbb\u591a\u53bf",
                  id: "\u6cbb\u591a\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u56ca\u8c26\u53bf",
                  id: "\u56ca\u8c26\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u66f2\u9ebb\u83b1\u53bf",
                  id: "\u66f2\u9ebb\u83b1\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName:
                "\u6d77\u897f\u8499\u53e4\u65cf\u85cf\u65cf\u81ea\u6cbb\u5dde",
              id: "\u6d77\u897f\u8499\u53e4\u65cf\u85cf\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u683c\u5c14\u6728\u5e02",
                  id: "\u683c\u5c14\u6728\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5fb7\u4ee4\u54c8\u5e02",
                  id: "\u5fb7\u4ee4\u54c8\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u832b\u5d16\u5e02",
                  id: "\u832b\u5d16\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e4c\u5170\u53bf",
                  id: "\u4e4c\u5170\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u90fd\u5170\u53bf",
                  id: "\u90fd\u5170\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5929\u5cfb\u53bf",
                  id: "\u5929\u5cfb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u67f4\u65e6\u884c\u653f\u59d4\u5458\u4f1a",
                  id: "\u5927\u67f4\u65e6\u884c\u653f\u59d4\u5458\u4f1a",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u5b81\u590f\u56de\u65cf\u81ea\u6cbb\u533a",
          id: "\u5b81\u590f\u56de\u65cf\u81ea\u6cbb\u533a",
          subArea: [
            {
              areaName: "\u94f6\u5ddd\u5e02",
              id: "\u94f6\u5ddd\u5e02",
              subArea: [
                {
                  areaName: "\u5174\u5e86\u533a",
                  id: "\u5174\u5e86\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u590f\u533a",
                  id: "\u897f\u590f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u51e4\u533a",
                  id: "\u91d1\u51e4\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u5b81\u53bf",
                  id: "\u6c38\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u8d3a\u5170\u53bf",
                  id: "\u8d3a\u5170\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7075\u6b66\u5e02",
                  id: "\u7075\u6b66\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u77f3\u5634\u5c71\u5e02",
              id: "\u77f3\u5634\u5c71\u5e02",
              subArea: [
                {
                  areaName: "\u5927\u6b66\u53e3\u533a",
                  id: "\u5927\u6b66\u53e3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u60e0\u519c\u533a",
                  id: "\u60e0\u519c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u7f57\u53bf",
                  id: "\u5e73\u7f57\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5434\u5fe0\u5e02",
              id: "\u5434\u5fe0\u5e02",
              subArea: [
                {
                  areaName: "\u5229\u901a\u533a",
                  id: "\u5229\u901a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7ea2\u5bfa\u5821\u533a",
                  id: "\u7ea2\u5bfa\u5821\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u76d0\u6c60\u53bf",
                  id: "\u76d0\u6c60\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u540c\u5fc3\u53bf",
                  id: "\u540c\u5fc3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9752\u94dc\u5ce1\u5e02",
                  id: "\u9752\u94dc\u5ce1\u5e02",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u56fa\u539f\u5e02",
              id: "\u56fa\u539f\u5e02",
              subArea: [
                {
                  areaName: "\u539f\u5dde\u533a",
                  id: "\u539f\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u5409\u53bf",
                  id: "\u897f\u5409\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9686\u5fb7\u53bf",
                  id: "\u9686\u5fb7\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cfe\u6e90\u53bf",
                  id: "\u6cfe\u6e90\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5f6d\u9633\u53bf",
                  id: "\u5f6d\u9633\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e2d\u536b\u5e02",
              id: "\u4e2d\u536b\u5e02",
              subArea: [
                {
                  areaName: "\u6c99\u5761\u5934\u533a",
                  id: "\u6c99\u5761\u5934\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e2d\u5b81\u53bf",
                  id: "\u4e2d\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d77\u539f\u53bf",
                  id: "\u6d77\u539f\u53bf",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u65b0\u7586\u7ef4\u543e\u5c14\u81ea\u6cbb\u533a",
          id: "\u65b0\u7586\u7ef4\u543e\u5c14\u81ea\u6cbb\u533a",
          subArea: [
            {
              areaName: "\u4e4c\u9c81\u6728\u9f50\u5e02",
              id: "\u4e4c\u9c81\u6728\u9f50\u5e02",
              subArea: [
                {
                  areaName: "\u5929\u5c71\u533a",
                  id: "\u5929\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c99\u4f9d\u5df4\u514b\u533a",
                  id: "\u6c99\u4f9d\u5df4\u514b\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u5e02\u533a",
                  id: "\u65b0\u5e02\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c34\u78e8\u6c9f\u533a",
                  id: "\u6c34\u78e8\u6c9f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5934\u5c6f\u6cb3\u533a",
                  id: "\u5934\u5c6f\u6cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8fbe\u5742\u57ce\u533a",
                  id: "\u8fbe\u5742\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7c73\u4e1c\u533a",
                  id: "\u7c73\u4e1c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e4c\u9c81\u6728\u9f50\u53bf",
                  id: "\u4e4c\u9c81\u6728\u9f50\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u514b\u62c9\u739b\u4f9d\u5e02",
              id: "\u514b\u62c9\u739b\u4f9d\u5e02",
              subArea: [
                {
                  areaName: "\u72ec\u5c71\u5b50\u533a",
                  id: "\u72ec\u5c71\u5b50\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u514b\u62c9\u739b\u4f9d\u533a",
                  id: "\u514b\u62c9\u739b\u4f9d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u767d\u78b1\u6ee9\u533a",
                  id: "\u767d\u78b1\u6ee9\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e4c\u5c14\u79be\u533a",
                  id: "\u4e4c\u5c14\u79be\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5410\u9c81\u756a\u5e02",
              id: "\u5410\u9c81\u756a\u5e02",
              subArea: [
                {
                  areaName: "\u9ad8\u660c\u533a",
                  id: "\u9ad8\u660c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u912f\u5584\u53bf",
                  id: "\u912f\u5584\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6258\u514b\u900a\u53bf",
                  id: "\u6258\u514b\u900a\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u54c8\u5bc6\u5e02",
              id: "\u54c8\u5bc6\u5e02",
              subArea: [
                {
                  areaName: "\u4f0a\u5dde\u533a",
                  id: "\u4f0a\u5dde\u533a",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5df4\u91cc\u5764\u54c8\u8428\u514b\u81ea\u6cbb\u53bf",
                  id: "\u5df4\u91cc\u5764\u54c8\u8428\u514b\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4f0a\u543e\u53bf",
                  id: "\u4f0a\u543e\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u660c\u5409\u56de\u65cf\u81ea\u6cbb\u5dde",
              id: "\u660c\u5409\u56de\u65cf\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u660c\u5409\u5e02",
                  id: "\u660c\u5409\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u961c\u5eb7\u5e02",
                  id: "\u961c\u5eb7\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u547c\u56fe\u58c1\u53bf",
                  id: "\u547c\u56fe\u58c1\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u739b\u7eb3\u65af\u53bf",
                  id: "\u739b\u7eb3\u65af\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5947\u53f0\u53bf",
                  id: "\u5947\u53f0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5409\u6728\u8428\u5c14\u53bf",
                  id: "\u5409\u6728\u8428\u5c14\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6728\u5792\u54c8\u8428\u514b\u81ea\u6cbb\u53bf",
                  id: "\u6728\u5792\u54c8\u8428\u514b\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName:
                "\u535a\u5c14\u5854\u62c9\u8499\u53e4\u81ea\u6cbb\u5dde",
              id: "\u535a\u5c14\u5854\u62c9\u8499\u53e4\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u535a\u4e50\u5e02",
                  id: "\u535a\u4e50\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u963f\u62c9\u5c71\u53e3\u5e02",
                  id: "\u963f\u62c9\u5c71\u53e3\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u7cbe\u6cb3\u53bf",
                  id: "\u7cbe\u6cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6e29\u6cc9\u53bf",
                  id: "\u6e29\u6cc9\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName:
                "\u5df4\u97f3\u90ed\u695e\u8499\u53e4\u81ea\u6cbb\u5dde",
              id: "\u5df4\u97f3\u90ed\u695e\u8499\u53e4\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u5e93\u5c14\u52d2\u5e02",
                  id: "\u5e93\u5c14\u52d2\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u8f6e\u53f0\u53bf",
                  id: "\u8f6e\u53f0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c09\u7281\u53bf",
                  id: "\u5c09\u7281\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u82e5\u7f8c\u53bf",
                  id: "\u82e5\u7f8c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e14\u672b\u53bf",
                  id: "\u4e14\u672b\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7109\u8006\u56de\u65cf\u81ea\u6cbb\u53bf",
                  id: "\u7109\u8006\u56de\u65cf\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u548c\u9759\u53bf",
                  id: "\u548c\u9759\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u548c\u7855\u53bf",
                  id: "\u548c\u7855\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u535a\u6e56\u53bf",
                  id: "\u535a\u6e56\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u963f\u514b\u82cf\u5730\u533a",
              id: "\u963f\u514b\u82cf\u5730\u533a",
              subArea: [
                {
                  areaName: "\u963f\u514b\u82cf\u5e02",
                  id: "\u963f\u514b\u82cf\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5e93\u8f66\u5e02",
                  id: "\u5e93\u8f66\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6e29\u5bbf\u53bf",
                  id: "\u6e29\u5bbf\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c99\u96c5\u53bf",
                  id: "\u6c99\u96c5\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u548c\u53bf",
                  id: "\u65b0\u548c\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u62dc\u57ce\u53bf",
                  id: "\u62dc\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e4c\u4ec0\u53bf",
                  id: "\u4e4c\u4ec0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u963f\u74e6\u63d0\u53bf",
                  id: "\u963f\u74e6\u63d0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u67ef\u576a\u53bf",
                  id: "\u67ef\u576a\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName:
                "\u514b\u5b5c\u52d2\u82cf\u67ef\u5c14\u514b\u5b5c\u81ea\u6cbb\u5dde",
              id: "\u514b\u5b5c\u52d2\u82cf\u67ef\u5c14\u514b\u5b5c\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u963f\u56fe\u4ec0\u5e02",
                  id: "\u963f\u56fe\u4ec0\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u963f\u514b\u9676\u53bf",
                  id: "\u963f\u514b\u9676\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u963f\u5408\u5947\u53bf",
                  id: "\u963f\u5408\u5947\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e4c\u6070\u53bf",
                  id: "\u4e4c\u6070\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5580\u4ec0\u5730\u533a",
              id: "\u5580\u4ec0\u5730\u533a",
              subArea: [
                {
                  areaName: "\u5580\u4ec0\u5e02",
                  id: "\u5580\u4ec0\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u758f\u9644\u53bf",
                  id: "\u758f\u9644\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u758f\u52d2\u53bf",
                  id: "\u758f\u52d2\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u82f1\u5409\u6c99\u53bf",
                  id: "\u82f1\u5409\u6c99\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6cfd\u666e\u53bf",
                  id: "\u6cfd\u666e\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u838e\u8f66\u53bf",
                  id: "\u838e\u8f66\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u53f6\u57ce\u53bf",
                  id: "\u53f6\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9ea6\u76d6\u63d0\u53bf",
                  id: "\u9ea6\u76d6\u63d0\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5cb3\u666e\u6e56\u53bf",
                  id: "\u5cb3\u666e\u6e56\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4f3d\u5e08\u53bf",
                  id: "\u4f3d\u5e08\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5df4\u695a\u53bf",
                  id: "\u5df4\u695a\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5854\u4ec0\u5e93\u5c14\u5e72\u5854\u5409\u514b\u81ea\u6cbb\u53bf",
                  id: "\u5854\u4ec0\u5e93\u5c14\u5e72\u5854\u5409\u514b\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u548c\u7530\u5730\u533a",
              id: "\u548c\u7530\u5730\u533a",
              subArea: [
                {
                  areaName: "\u548c\u7530\u5e02",
                  id: "\u548c\u7530\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u548c\u7530\u53bf",
                  id: "\u548c\u7530\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u58a8\u7389\u53bf",
                  id: "\u58a8\u7389\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u76ae\u5c71\u53bf",
                  id: "\u76ae\u5c71\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6d1b\u6d66\u53bf",
                  id: "\u6d1b\u6d66\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7b56\u52d2\u53bf",
                  id: "\u7b56\u52d2\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u4e8e\u7530\u53bf",
                  id: "\u4e8e\u7530\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6c11\u4e30\u53bf",
                  id: "\u6c11\u4e30\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4f0a\u7281\u54c8\u8428\u514b\u81ea\u6cbb\u5dde",
              id: "\u4f0a\u7281\u54c8\u8428\u514b\u81ea\u6cbb\u5dde",
              subArea: [
                {
                  areaName: "\u4f0a\u5b81\u5e02",
                  id: "\u4f0a\u5b81\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u594e\u5c6f\u5e02",
                  id: "\u594e\u5c6f\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u970d\u5c14\u679c\u65af\u5e02",
                  id: "\u970d\u5c14\u679c\u65af\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4f0a\u5b81\u53bf",
                  id: "\u4f0a\u5b81\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u5bdf\u5e03\u67e5\u5c14\u9521\u4f2f\u81ea\u6cbb\u53bf",
                  id: "\u5bdf\u5e03\u67e5\u5c14\u9521\u4f2f\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u970d\u57ce\u53bf",
                  id: "\u970d\u57ce\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5de9\u7559\u53bf",
                  id: "\u5de9\u7559\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u6e90\u53bf",
                  id: "\u65b0\u6e90\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u662d\u82cf\u53bf",
                  id: "\u662d\u82cf\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u7279\u514b\u65af\u53bf",
                  id: "\u7279\u514b\u65af\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5c3c\u52d2\u514b\u53bf",
                  id: "\u5c3c\u52d2\u514b\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5854\u57ce\u5730\u533a",
              id: "\u5854\u57ce\u5730\u533a",
              subArea: [
                {
                  areaName: "\u5854\u57ce\u5e02",
                  id: "\u5854\u57ce\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e4c\u82cf\u5e02",
                  id: "\u4e4c\u82cf\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6c99\u6e7e\u5e02",
                  id: "\u6c99\u6e7e\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u989d\u654f\u53bf",
                  id: "\u989d\u654f\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u6258\u91cc\u53bf",
                  id: "\u6258\u91cc\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u88d5\u6c11\u53bf",
                  id: "\u88d5\u6c11\u53bf",
                  subArea: [],
                },
                {
                  areaName:
                    "\u548c\u5e03\u514b\u8d5b\u5c14\u8499\u53e4\u81ea\u6cbb\u53bf",
                  id: "\u548c\u5e03\u514b\u8d5b\u5c14\u8499\u53e4\u81ea\u6cbb\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u963f\u52d2\u6cf0\u5730\u533a",
              id: "\u963f\u52d2\u6cf0\u5730\u533a",
              subArea: [
                {
                  areaName: "\u963f\u52d2\u6cf0\u5e02",
                  id: "\u963f\u52d2\u6cf0\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5e03\u5c14\u6d25\u53bf",
                  id: "\u5e03\u5c14\u6d25\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5bcc\u8574\u53bf",
                  id: "\u5bcc\u8574\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u798f\u6d77\u53bf",
                  id: "\u798f\u6d77\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u54c8\u5df4\u6cb3\u53bf",
                  id: "\u54c8\u5df4\u6cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u9752\u6cb3\u53bf",
                  id: "\u9752\u6cb3\u53bf",
                  subArea: [],
                },
                {
                  areaName: "\u5409\u6728\u4e43\u53bf",
                  id: "\u5409\u6728\u4e43\u53bf",
                  subArea: [],
                },
              ],
            },
            {
              areaName:
                "\u81ea\u6cbb\u533a\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u533a\u5212",
              id: "\u81ea\u6cbb\u533a\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u533a\u5212",
              subArea: [
                {
                  areaName: "\u77f3\u6cb3\u5b50\u5e02",
                  id: "\u77f3\u6cb3\u5b50\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u963f\u62c9\u5c14\u5e02",
                  id: "\u963f\u62c9\u5c14\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u56fe\u6728\u8212\u514b\u5e02",
                  id: "\u56fe\u6728\u8212\u514b\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e94\u5bb6\u6e20\u5e02",
                  id: "\u4e94\u5bb6\u6e20\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5317\u5c6f\u5e02",
                  id: "\u5317\u5c6f\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u94c1\u95e8\u5173\u5e02",
                  id: "\u94c1\u95e8\u5173\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u53cc\u6cb3\u5e02",
                  id: "\u53cc\u6cb3\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u53ef\u514b\u8fbe\u62c9\u5e02",
                  id: "\u53ef\u514b\u8fbe\u62c9\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6606\u7389\u5e02",
                  id: "\u6606\u7389\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u80e1\u6768\u6cb3\u5e02",
                  id: "\u80e1\u6768\u6cb3\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u661f\u5e02",
                  id: "\u65b0\u661f\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u767d\u6768\u5e02",
                  id: "\u767d\u6768\u5e02",
                  subArea: [],
                },
              ],
            },
          ],
        },
        {
          areaName: "\u9999\u6e2f\u7279\u522b\u884c\u653f\u533a",
          id: "\u9999\u6e2f\u7279\u522b\u884c\u653f\u533a",
          subArea: [
            {
              areaName: "\u9999\u6e2f\u5c9b",
              id: "\u9999\u6e2f\u5c9b",
              subArea: [],
            },
            { areaName: "\u4e5d\u9f99", id: "\u4e5d\u9f99", subArea: [] },
            { areaName: "\u65b0\u754c", id: "\u65b0\u754c", subArea: [] },
          ],
        },
        {
          areaName: "\u6fb3\u95e8\u7279\u522b\u884c\u653f\u533a",
          id: "\u6fb3\u95e8\u7279\u522b\u884c\u653f\u533a",
          subArea: [
            {
              areaName: "\u6fb3\u95e8\u534a\u5c9b",
              id: "\u6fb3\u95e8\u534a\u5c9b",
              subArea: [],
            },
            {
              areaName: "\u6fb3\u95e8\u79bb\u5c9b",
              id: "\u6fb3\u95e8\u79bb\u5c9b",
              subArea: [],
            },
          ],
        },
        {
          areaName: "\u53f0\u6e7e\u7701",
          id: "\u53f0\u6e7e\u7701",
          subArea: [
            {
              areaName: "\u53f0\u5317\u5e02",
              id: "\u53f0\u5317\u5e02",
              subArea: [
                {
                  areaName: "\u4e2d\u6b63\u533a",
                  id: "\u4e2d\u6b63\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u540c\u533a",
                  id: "\u5927\u540c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e2d\u5c71\u533a",
                  id: "\u4e2d\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u677e\u5c71\u533a",
                  id: "\u677e\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u5b89\u533a",
                  id: "\u5927\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e07\u534e\u533a",
                  id: "\u4e07\u534e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4fe1\u4e49\u533a",
                  id: "\u4fe1\u4e49\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u58eb\u6797\u533a",
                  id: "\u58eb\u6797\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5317\u6295\u533a",
                  id: "\u5317\u6295\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5185\u6e56\u533a",
                  id: "\u5185\u6e56\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u6e2f\u533a",
                  id: "\u5357\u6e2f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6587\u5c71\u533a",
                  id: "\u6587\u5c71\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u9ad8\u96c4\u5e02",
              id: "\u9ad8\u96c4\u5e02",
              subArea: [
                {
                  areaName: "\u65b0\u5174\u533a",
                  id: "\u65b0\u5174\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u524d\u91d1\u533a",
                  id: "\u524d\u91d1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u82d3\u96c5\u533a",
                  id: "\u82d3\u96c5\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u76d0\u57d5\u533a",
                  id: "\u76d0\u57d5\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f13\u5c71\u533a",
                  id: "\u9f13\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65d7\u6d25\u533a",
                  id: "\u65d7\u6d25\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u524d\u9547\u533a",
                  id: "\u524d\u9547\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e09\u6c11\u533a",
                  id: "\u4e09\u6c11\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5de6\u8425\u533a",
                  id: "\u5de6\u8425\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6960\u6893\u533a",
                  id: "\u6960\u6893\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5c0f\u6e2f\u533a",
                  id: "\u5c0f\u6e2f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4ec1\u6b66\u533a",
                  id: "\u4ec1\u6b66\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u793e\u533a",
                  id: "\u5927\u793e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5188\u5c71\u533a",
                  id: "\u5188\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8def\u7af9\u533a",
                  id: "\u8def\u7af9\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u963f\u83b2\u533a",
                  id: "\u963f\u83b2\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7530\u5bee\u533a",
                  id: "\u7530\u5bee\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u71d5\u5de2\u533a",
                  id: "\u71d5\u5de2\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6865\u5934\u533a",
                  id: "\u6865\u5934\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6893\u5b98\u533a",
                  id: "\u6893\u5b98\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5f25\u9640\u533a",
                  id: "\u5f25\u9640\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u5b89\u533a",
                  id: "\u6c38\u5b89\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e56\u5185\u533a",
                  id: "\u6e56\u5185\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u51e4\u5c71\u533a",
                  id: "\u51e4\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u5bee\u533a",
                  id: "\u5927\u5bee\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6797\u56ed\u533a",
                  id: "\u6797\u56ed\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9e1f\u677e\u533a",
                  id: "\u9e1f\u677e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u6811\u533a",
                  id: "\u5927\u6811\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65d7\u5c71\u533a",
                  id: "\u65d7\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7f8e\u6d53\u533a",
                  id: "\u7f8e\u6d53\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u516d\u9f9f\u533a",
                  id: "\u516d\u9f9f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5185\u95e8\u533a",
                  id: "\u5185\u95e8\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6749\u6797\u533a",
                  id: "\u6749\u6797\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7532\u4ed9\u533a",
                  id: "\u7532\u4ed9\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6843\u6e90\u533a",
                  id: "\u6843\u6e90\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u90a3\u739b\u590f\u533a",
                  id: "\u90a3\u739b\u590f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8302\u6797\u533a",
                  id: "\u8302\u6797\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8304\u8423\u533a",
                  id: "\u8304\u8423\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u53f0\u5357\u5e02",
              id: "\u53f0\u5357\u5e02",
              subArea: [
                {
                  areaName: "\u4e2d\u897f\u533a",
                  id: "\u4e2d\u897f\u533a",
                  subArea: [],
                },
                { areaName: "\u4e1c\u533a", id: "\u4e1c\u533a", subArea: [] },
                { areaName: "\u5357\u533a", id: "\u5357\u533a", subArea: [] },
                { areaName: "\u5317\u533a", id: "\u5317\u533a", subArea: [] },
                {
                  areaName: "\u5b89\u5e73\u533a",
                  id: "\u5b89\u5e73\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u5357\u533a",
                  id: "\u5b89\u5357\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u5eb7\u533a",
                  id: "\u6c38\u5eb7\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5f52\u4ec1\u533a",
                  id: "\u5f52\u4ec1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u5316\u533a",
                  id: "\u65b0\u5316\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5de6\u9547\u533a",
                  id: "\u5de6\u9547\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u7389\u4e95\u533a",
                  id: "\u7389\u4e95\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6960\u897f\u533a",
                  id: "\u6960\u897f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u5316\u533a",
                  id: "\u5357\u5316\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4ec1\u5fb7\u533a",
                  id: "\u4ec1\u5fb7\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5173\u5e99\u533a",
                  id: "\u5173\u5e99\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u5d0e\u533a",
                  id: "\u9f99\u5d0e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b98\u7530\u533a",
                  id: "\u5b98\u7530\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9ebb\u8c46\u533a",
                  id: "\u9ebb\u8c46\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4f73\u91cc\u533a",
                  id: "\u4f73\u91cc\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u6e2f\u533a",
                  id: "\u897f\u6e2f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e03\u80a1\u533a",
                  id: "\u4e03\u80a1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5c06\u519b\u533a",
                  id: "\u5c06\u519b\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b66\u7532\u533a",
                  id: "\u5b66\u7532\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5317\u95e8\u533a",
                  id: "\u5317\u95e8\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u8425\u533a",
                  id: "\u65b0\u8425\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u540e\u58c1\u533a",
                  id: "\u540e\u58c1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u767d\u6cb3\u533a",
                  id: "\u767d\u6cb3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u5c71\u533a",
                  id: "\u4e1c\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u516d\u7532\u533a",
                  id: "\u516d\u7532\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e0b\u8425\u533a",
                  id: "\u4e0b\u8425\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u67f3\u8425\u533a",
                  id: "\u67f3\u8425\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u76d0\u6c34\u533a",
                  id: "\u76d0\u6c34\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5584\u5316\u533a",
                  id: "\u5584\u5316\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u5185\u533a",
                  id: "\u5927\u5185\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5c71\u4e0a\u533a",
                  id: "\u5c71\u4e0a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u5e02\u533a",
                  id: "\u65b0\u5e02\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u5b9a\u533a",
                  id: "\u5b89\u5b9a\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u53f0\u4e2d\u5e02",
              id: "\u53f0\u4e2d\u5e02",
              subArea: [
                { areaName: "\u4e2d\u533a", id: "\u4e2d\u533a", subArea: [] },
                { areaName: "\u4e1c\u533a", id: "\u4e1c\u533a", subArea: [] },
                { areaName: "\u5357\u533a", id: "\u5357\u533a", subArea: [] },
                { areaName: "\u897f\u533a", id: "\u897f\u533a", subArea: [] },
                { areaName: "\u5317\u533a", id: "\u5317\u533a", subArea: [] },
                {
                  areaName: "\u5317\u5c6f\u533a",
                  id: "\u5317\u5c6f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u5c6f\u533a",
                  id: "\u897f\u5c6f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u5c6f\u533a",
                  id: "\u5357\u5c6f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u592a\u5e73\u533a",
                  id: "\u592a\u5e73\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u91cc\u533a",
                  id: "\u5927\u91cc\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u96fe\u5cf0\u533a",
                  id: "\u96fe\u5cf0\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e4c\u65e5\u533a",
                  id: "\u4e4c\u65e5\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e30\u539f\u533a",
                  id: "\u4e30\u539f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u540e\u91cc\u533a",
                  id: "\u540e\u91cc\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u5188\u533a",
                  id: "\u77f3\u5188\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u52bf\u533a",
                  id: "\u4e1c\u52bf\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u548c\u5e73\u533a",
                  id: "\u548c\u5e73\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u793e\u533a",
                  id: "\u65b0\u793e\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6f6d\u5b50\u533a",
                  id: "\u6f6d\u5b50\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u96c5\u533a",
                  id: "\u5927\u96c5\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u795e\u5188\u533a",
                  id: "\u795e\u5188\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u809a\u533a",
                  id: "\u5927\u809a\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c99\u9e7f\u533a",
                  id: "\u6c99\u9e7f\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u4e95\u533a",
                  id: "\u9f99\u4e95\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u68a7\u6816\u533a",
                  id: "\u68a7\u6816\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6e05\u6c34\u533a",
                  id: "\u6e05\u6c34\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u7532\u533a",
                  id: "\u5927\u7532\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5916\u57d4\u533a",
                  id: "\u5916\u57d4\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u5b89\u533a",
                  id: "\u5927\u5b89\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5357\u6295\u53bf",
              id: "\u5357\u6295\u53bf",
              subArea: [
                {
                  areaName: "\u5357\u6295\u5e02",
                  id: "\u5357\u6295\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e2d\u5bee\u4e61",
                  id: "\u4e2d\u5bee\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u8349\u5c6f\u9547",
                  id: "\u8349\u5c6f\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u56fd\u59d3\u4e61",
                  id: "\u56fd\u59d3\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u57d4\u91cc\u9547",
                  id: "\u57d4\u91cc\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u4ec1\u7231\u4e61",
                  id: "\u4ec1\u7231\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u540d\u95f4\u4e61",
                  id: "\u540d\u95f4\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u96c6\u96c6\u9547",
                  id: "\u96c6\u96c6\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u6c34\u91cc\u4e61",
                  id: "\u6c34\u91cc\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u9c7c\u6c60\u4e61",
                  id: "\u9c7c\u6c60\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u4fe1\u4e49\u4e61",
                  id: "\u4fe1\u4e49\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u7af9\u5c71\u9547",
                  id: "\u7af9\u5c71\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u9e7f\u8c37\u4e61",
                  id: "\u9e7f\u8c37\u4e61",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u57fa\u9686\u5e02",
              id: "\u57fa\u9686\u5e02",
              subArea: [
                {
                  areaName: "\u4ec1\u7231\u533a",
                  id: "\u4ec1\u7231\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4fe1\u4e49\u533a",
                  id: "\u4fe1\u4e49\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e2d\u6b63\u533a",
                  id: "\u4e2d\u6b63\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e2d\u5c71\u533a",
                  id: "\u4e2d\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5b89\u4e50\u533a",
                  id: "\u5b89\u4e50\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6696\u6696\u533a",
                  id: "\u6696\u6696\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e03\u5835\u533a",
                  id: "\u4e03\u5835\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u65b0\u7af9\u5e02",
              id: "\u65b0\u7af9\u5e02",
              subArea: [
                { areaName: "\u4e1c\u533a", id: "\u4e1c\u533a", subArea: [] },
                { areaName: "\u5317\u533a", id: "\u5317\u533a", subArea: [] },
                {
                  areaName: "\u9999\u5c71\u533a",
                  id: "\u9999\u5c71\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5609\u4e49\u5e02",
              id: "\u5609\u4e49\u5e02",
              subArea: [
                { areaName: "\u4e1c\u533a", id: "\u4e1c\u533a", subArea: [] },
                { areaName: "\u897f\u533a", id: "\u897f\u533a", subArea: [] },
              ],
            },
            {
              areaName: "\u65b0\u5317\u5e02",
              id: "\u65b0\u5317\u5e02",
              subArea: [
                {
                  areaName: "\u4e07\u91cc\u533a",
                  id: "\u4e07\u91cc\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u5c71\u533a",
                  id: "\u91d1\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u677f\u6865\u533a",
                  id: "\u677f\u6865\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c50\u6b62\u533a",
                  id: "\u6c50\u6b62\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6df1\u5751\u533a",
                  id: "\u6df1\u5751\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u7887\u533a",
                  id: "\u77f3\u7887\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u745e\u82b3\u533a",
                  id: "\u745e\u82b3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u6eaa\u533a",
                  id: "\u5e73\u6eaa\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u53cc\u6eaa\u533a",
                  id: "\u53cc\u6eaa\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u8d21\u5bee\u533a",
                  id: "\u8d21\u5bee\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u5e97\u533a",
                  id: "\u65b0\u5e97\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u576a\u6797\u533a",
                  id: "\u576a\u6797\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e4c\u6765\u533a",
                  id: "\u4e4c\u6765\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u548c\u533a",
                  id: "\u6c38\u548c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e2d\u548c\u533a",
                  id: "\u4e2d\u548c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u571f\u57ce\u533a",
                  id: "\u571f\u57ce\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e09\u5ce1\u533a",
                  id: "\u4e09\u5ce1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6811\u6797\u533a",
                  id: "\u6811\u6797\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u83ba\u6b4c\u533a",
                  id: "\u83ba\u6b4c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e09\u91cd\u533a",
                  id: "\u4e09\u91cd\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u5e84\u533a",
                  id: "\u65b0\u5e84\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6cf0\u5c71\u533a",
                  id: "\u6cf0\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6797\u53e3\u533a",
                  id: "\u6797\u53e3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u82a6\u6d32\u533a",
                  id: "\u82a6\u6d32\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e94\u80a1\u533a",
                  id: "\u4e94\u80a1\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u516b\u91cc\u533a",
                  id: "\u516b\u91cc\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6de1\u6c34\u533a",
                  id: "\u6de1\u6c34\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u4e09\u829d\u533a",
                  id: "\u4e09\u829d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u77f3\u95e8\u533a",
                  id: "\u77f3\u95e8\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5b9c\u5170\u53bf",
              id: "\u5b9c\u5170\u53bf",
              subArea: [
                {
                  areaName: "\u5b9c\u5170\u5e02",
                  id: "\u5b9c\u5170\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u5934\u57ce\u9547",
                  id: "\u5934\u57ce\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u7901\u6eaa\u4e61",
                  id: "\u7901\u6eaa\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u58ee\u56f4\u4e61",
                  id: "\u58ee\u56f4\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5458\u5c71\u4e61",
                  id: "\u5458\u5c71\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u7f57\u4e1c\u9547",
                  id: "\u7f57\u4e1c\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u4e09\u661f\u4e61",
                  id: "\u4e09\u661f\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u540c\u4e61",
                  id: "\u5927\u540c\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u4e94\u7ed3\u4e61",
                  id: "\u4e94\u7ed3\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u51ac\u5c71\u4e61",
                  id: "\u51ac\u5c71\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u82cf\u6fb3\u9547",
                  id: "\u82cf\u6fb3\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u6fb3\u4e61",
                  id: "\u5357\u6fb3\u4e61",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u65b0\u7af9\u53bf",
              id: "\u65b0\u7af9\u53bf",
              subArea: [
                {
                  areaName: "\u7af9\u5317\u5e02",
                  id: "\u7af9\u5317\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6e56\u53e3\u4e61",
                  id: "\u6e56\u53e3\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u4e30\u4e61",
                  id: "\u65b0\u4e30\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u57d4\u9547",
                  id: "\u65b0\u57d4\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5173\u897f\u9547",
                  id: "\u5173\u897f\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u828e\u6797\u4e61",
                  id: "\u828e\u6797\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5b9d\u5c71\u4e61",
                  id: "\u5b9d\u5c71\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u7af9\u4e1c\u9547",
                  id: "\u7af9\u4e1c\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u4e94\u5cf0\u4e61",
                  id: "\u4e94\u5cf0\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u6a2a\u5c71\u4e61",
                  id: "\u6a2a\u5c71\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5c16\u77f3\u4e61",
                  id: "\u5c16\u77f3\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5317\u57d4\u4e61",
                  id: "\u5317\u57d4\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5ce8\u7709\u4e61",
                  id: "\u5ce8\u7709\u4e61",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6843\u56ed\u5e02",
              id: "\u6843\u56ed\u5e02",
              subArea: [
                {
                  areaName: "\u4e2d\u575c\u533a",
                  id: "\u4e2d\u575c\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5e73\u9547\u533a",
                  id: "\u5e73\u9547\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f99\u6f6d\u533a",
                  id: "\u9f99\u6f6d\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6768\u6885\u533a",
                  id: "\u6768\u6885\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u5c4b\u533a",
                  id: "\u65b0\u5c4b\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u89c2\u97f3\u533a",
                  id: "\u89c2\u97f3\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u6843\u56ed\u533a",
                  id: "\u6843\u56ed\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u9f9f\u5c71\u533a",
                  id: "\u9f9f\u5c71\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u516b\u5fb7\u533a",
                  id: "\u516b\u5fb7\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u6eaa\u533a",
                  id: "\u5927\u6eaa\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u590d\u5174\u533a",
                  id: "\u590d\u5174\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u56ed\u533a",
                  id: "\u5927\u56ed\u533a",
                  subArea: [],
                },
                {
                  areaName: "\u82a6\u7af9\u533a",
                  id: "\u82a6\u7af9\u533a",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u82d7\u6817\u53bf",
              id: "\u82d7\u6817\u53bf",
              subArea: [
                {
                  areaName: "\u7af9\u5357\u9547",
                  id: "\u7af9\u5357\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5934\u4efd\u5e02",
                  id: "\u5934\u4efd\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e09\u6e7e\u4e61",
                  id: "\u4e09\u6e7e\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u5e84\u4e61",
                  id: "\u5357\u5e84\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u72ee\u6f6d\u4e61",
                  id: "\u72ee\u6f6d\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u540e\u9f99\u9547",
                  id: "\u540e\u9f99\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u901a\u9704\u9547",
                  id: "\u901a\u9704\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u82d1\u91cc\u9547",
                  id: "\u82d1\u91cc\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u82d7\u6817\u5e02",
                  id: "\u82d7\u6817\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u9020\u6865\u4e61",
                  id: "\u9020\u6865\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5934\u5c4b\u4e61",
                  id: "\u5934\u5c4b\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u516c\u9986\u4e61",
                  id: "\u516c\u9986\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u6e56\u4e61",
                  id: "\u5927\u6e56\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u6cf0\u5b89\u4e61",
                  id: "\u6cf0\u5b89\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u94dc\u9523\u4e61",
                  id: "\u94dc\u9523\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u4e09\u4e49\u4e61",
                  id: "\u4e09\u4e49\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u6e56\u4e61",
                  id: "\u897f\u6e56\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5353\u5170\u9547",
                  id: "\u5353\u5170\u9547",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5f70\u5316\u53bf",
              id: "\u5f70\u5316\u53bf",
              subArea: [
                {
                  areaName: "\u5f70\u5316\u5e02",
                  id: "\u5f70\u5316\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u82ac\u56ed\u4e61",
                  id: "\u82ac\u56ed\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u82b1\u575b\u4e61",
                  id: "\u82b1\u575b\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u79c0\u6c34\u4e61",
                  id: "\u79c0\u6c34\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u9e7f\u6e2f\u9547",
                  id: "\u9e7f\u6e2f\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u798f\u5174\u4e61",
                  id: "\u798f\u5174\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u7ebf\u897f\u4e61",
                  id: "\u7ebf\u897f\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u548c\u7f8e\u9547",
                  id: "\u548c\u7f8e\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u4f38\u6e2f\u4e61",
                  id: "\u4f38\u6e2f\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5458\u6797\u5e02",
                  id: "\u5458\u6797\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u793e\u5934\u4e61",
                  id: "\u793e\u5934\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u6c38\u9756\u4e61",
                  id: "\u6c38\u9756\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u57d4\u5fc3\u4e61",
                  id: "\u57d4\u5fc3\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u6eaa\u6e56\u9547",
                  id: "\u6eaa\u6e56\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u6751\u4e61",
                  id: "\u5927\u6751\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u57d4\u76d0\u4e61",
                  id: "\u57d4\u76d0\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u7530\u4e2d\u9547",
                  id: "\u7530\u4e2d\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5317\u6597\u9547",
                  id: "\u5317\u6597\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u7530\u5c3e\u4e61",
                  id: "\u7530\u5c3e\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u57e4\u5934\u4e61",
                  id: "\u57e4\u5934\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u6eaa\u5dde\u4e61",
                  id: "\u6eaa\u5dde\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u7af9\u5858\u4e61",
                  id: "\u7af9\u5858\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u4e8c\u6797\u9547",
                  id: "\u4e8c\u6797\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u57ce\u4e61",
                  id: "\u5927\u57ce\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u82b3\u82d1\u4e61",
                  id: "\u82b3\u82d1\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u4e8c\u6c34\u4e61",
                  id: "\u4e8c\u6c34\u4e61",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5609\u4e49\u53bf",
              id: "\u5609\u4e49\u53bf",
              subArea: [
                {
                  areaName: "\u756a\u8def\u4e61",
                  id: "\u756a\u8def\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u6885\u5c71\u4e61",
                  id: "\u6885\u5c71\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u7af9\u5d0e\u4e61",
                  id: "\u7af9\u5d0e\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u963f\u91cc\u5c71\u4e61",
                  id: "\u963f\u91cc\u5c71\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u4e2d\u57d4\u4e61",
                  id: "\u4e2d\u57d4\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u57d4\u4e61",
                  id: "\u5927\u57d4\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u6c34\u4e0a\u4e61",
                  id: "\u6c34\u4e0a\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u9e7f\u8349\u4e61",
                  id: "\u9e7f\u8349\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u592a\u4fdd\u5e02",
                  id: "\u592a\u4fdd\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6734\u5b50\u5e02",
                  id: "\u6734\u5b50\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u77f3\u4e61",
                  id: "\u4e1c\u77f3\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u516d\u811a\u4e61",
                  id: "\u516d\u811a\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u6e2f\u4e61",
                  id: "\u65b0\u6e2f\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u6c11\u96c4\u4e61",
                  id: "\u6c11\u96c4\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u6797\u9547",
                  id: "\u5927\u6797\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u6eaa\u53e3\u4e61",
                  id: "\u6eaa\u53e3\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u4e49\u7af9\u4e61",
                  id: "\u4e49\u7af9\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5e03\u888b\u9547",
                  id: "\u5e03\u888b\u9547",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u4e91\u6797\u53bf",
              id: "\u4e91\u6797\u53bf",
              subArea: [
                {
                  areaName: "\u6597\u5357\u9547",
                  id: "\u6597\u5357\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u57e4\u4e61",
                  id: "\u5927\u57e4\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u864e\u5c3e\u9547",
                  id: "\u864e\u5c3e\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u571f\u5e93\u9547",
                  id: "\u571f\u5e93\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u8912\u5fe0\u4e61",
                  id: "\u8912\u5fe0\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u52bf\u4e61",
                  id: "\u4e1c\u52bf\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u53f0\u897f\u4e61",
                  id: "\u53f0\u897f\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u4ed1\u80cc\u4e61",
                  id: "\u4ed1\u80cc\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u9ea6\u5bee\u4e61",
                  id: "\u9ea6\u5bee\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u6597\u516d\u5e02",
                  id: "\u6597\u516d\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u6797\u5185\u4e61",
                  id: "\u6797\u5185\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u53e4\u5751\u4e61",
                  id: "\u53e4\u5751\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u83bf\u6850\u4e61",
                  id: "\u83bf\u6850\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u87ba\u9547",
                  id: "\u897f\u87ba\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u4e8c\u4ed1\u4e61",
                  id: "\u4e8c\u4ed1\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5317\u6e2f\u9547",
                  id: "\u5317\u6e2f\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u6c34\u6797\u4e61",
                  id: "\u6c34\u6797\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u53e3\u6e56\u4e61",
                  id: "\u53e3\u6e56\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u56db\u6e56\u4e61",
                  id: "\u56db\u6e56\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5143\u957f\u4e61",
                  id: "\u5143\u957f\u4e61",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u5c4f\u4e1c\u53bf",
              id: "\u5c4f\u4e1c\u53bf",
              subArea: [
                {
                  areaName: "\u5c4f\u4e1c\u5e02",
                  id: "\u5c4f\u4e1c\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u4e09\u5730\u95e8\u4e61",
                  id: "\u4e09\u5730\u95e8\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u96fe\u53f0\u4e61",
                  id: "\u96fe\u53f0\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u739b\u5bb6\u4e61",
                  id: "\u739b\u5bb6\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u4e5d\u5982\u4e61",
                  id: "\u4e5d\u5982\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u91cc\u6e2f\u4e61",
                  id: "\u91cc\u6e2f\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u9ad8\u6811\u4e61",
                  id: "\u9ad8\u6811\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u76d0\u57d4\u4e61",
                  id: "\u76d0\u57d4\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u6cbb\u4e61",
                  id: "\u957f\u6cbb\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u9e9f\u6d1b\u4e61",
                  id: "\u9e9f\u6d1b\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u7af9\u7530\u4e61",
                  id: "\u7af9\u7530\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5185\u57d4\u4e61",
                  id: "\u5185\u57d4\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u4e07\u4e39\u4e61",
                  id: "\u4e07\u4e39\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u6f6e\u5dde\u9547",
                  id: "\u6f6e\u5dde\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u6cf0\u6b66\u4e61",
                  id: "\u6cf0\u6b66\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u6765\u4e49\u4e61",
                  id: "\u6765\u4e49\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u4e07\u5ce6\u4e61",
                  id: "\u4e07\u5ce6\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5d01\u9876\u4e61",
                  id: "\u5d01\u9876\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u57e4\u4e61",
                  id: "\u65b0\u57e4\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5357\u5dde\u4e61",
                  id: "\u5357\u5dde\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u6797\u8fb9\u4e61",
                  id: "\u6797\u8fb9\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u6e2f\u9547",
                  id: "\u4e1c\u6e2f\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u7409\u7403\u4e61",
                  id: "\u7409\u7403\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u4f73\u51ac\u4e61",
                  id: "\u4f73\u51ac\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u56ed\u4e61",
                  id: "\u65b0\u56ed\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u678b\u5bee\u4e61",
                  id: "\u678b\u5bee\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u678b\u5c71\u4e61",
                  id: "\u678b\u5c71\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u6625\u65e5\u4e61",
                  id: "\u6625\u65e5\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u72ee\u5b50\u4e61",
                  id: "\u72ee\u5b50\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u8f66\u57ce\u4e61",
                  id: "\u8f66\u57ce\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u7261\u4e39\u4e61",
                  id: "\u7261\u4e39\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u6052\u6625\u9547",
                  id: "\u6052\u6625\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u6ee1\u5dde\u4e61",
                  id: "\u6ee1\u5dde\u4e61",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u53f0\u4e1c\u53bf",
              id: "\u53f0\u4e1c\u53bf",
              subArea: [
                {
                  areaName: "\u53f0\u4e1c\u5e02",
                  id: "\u53f0\u4e1c\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u7eff\u5c9b\u4e61",
                  id: "\u7eff\u5c9b\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5170\u5c7f\u4e61",
                  id: "\u5170\u5c7f\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5ef6\u5e73\u4e61",
                  id: "\u5ef6\u5e73\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5351\u5357\u4e61",
                  id: "\u5351\u5357\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u9e7f\u91ce\u4e61",
                  id: "\u9e7f\u91ce\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5173\u5c71\u9547",
                  id: "\u5173\u5c71\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u6d77\u7aef\u4e61",
                  id: "\u6d77\u7aef\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u6c60\u4e0a\u4e61",
                  id: "\u6c60\u4e0a\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u4e1c\u6cb3\u4e61",
                  id: "\u4e1c\u6cb3\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u6210\u529f\u9547",
                  id: "\u6210\u529f\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u957f\u6ee8\u4e61",
                  id: "\u957f\u6ee8\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u91d1\u5cf0\u4e61",
                  id: "\u91d1\u5cf0\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5927\u6b66\u4e61",
                  id: "\u5927\u6b66\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u8fbe\u4ec1\u4e61",
                  id: "\u8fbe\u4ec1\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u592a\u9ebb\u91cc\u4e61",
                  id: "\u592a\u9ebb\u91cc\u4e61",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u82b1\u83b2\u53bf",
              id: "\u82b1\u83b2\u53bf",
              subArea: [
                {
                  areaName: "\u82b1\u83b2\u5e02",
                  id: "\u82b1\u83b2\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u65b0\u57ce\u4e61",
                  id: "\u65b0\u57ce\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u79c0\u6797\u4e61",
                  id: "\u79c0\u6797\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5409\u5b89\u4e61",
                  id: "\u5409\u5b89\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5bff\u4e30\u4e61",
                  id: "\u5bff\u4e30\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u51e4\u6797\u9547",
                  id: "\u51e4\u6797\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5149\u590d\u4e61",
                  id: "\u5149\u590d\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u4e30\u6ee8\u4e61",
                  id: "\u4e30\u6ee8\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u745e\u7a57\u4e61",
                  id: "\u745e\u7a57\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u4e07\u8363\u4e61",
                  id: "\u4e07\u8363\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u7389\u91cc\u9547",
                  id: "\u7389\u91cc\u9547",
                  subArea: [],
                },
                {
                  areaName: "\u5353\u6eaa\u4e61",
                  id: "\u5353\u6eaa\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u5bcc\u91cc\u4e61",
                  id: "\u5bcc\u91cc\u4e61",
                  subArea: [],
                },
              ],
            },
            {
              areaName: "\u6f8e\u6e56\u53bf",
              id: "\u6f8e\u6e56\u53bf",
              subArea: [
                {
                  areaName: "\u9a6c\u516c\u5e02",
                  id: "\u9a6c\u516c\u5e02",
                  subArea: [],
                },
                {
                  areaName: "\u897f\u5c7f\u4e61",
                  id: "\u897f\u5c7f\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u671b\u5b89\u4e61",
                  id: "\u671b\u5b89\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u4e03\u7f8e\u4e61",
                  id: "\u4e03\u7f8e\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u767d\u6c99\u4e61",
                  id: "\u767d\u6c99\u4e61",
                  subArea: [],
                },
                {
                  areaName: "\u6e56\u897f\u4e61",
                  id: "\u6e56\u897f\u4e61",
                  subArea: [],
                },
              ],
            },
          ],
        },
      ];
    },
    "73430c04": function (a, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return s;
      });
      var i = r("1a22b7af"),
        u = r.n(i),
        t = r("0a1be08c");
      function s(a) {
        return function (e) {
          return u.a.createElement(t.a.Consumer, null, function (r) {
            return u.a.createElement(a, Object.assign({}, r, e));
          });
        };
      }
    },
    "7bce9d16": function (a, e, r) {
      a.exports = r.p + "static/media/manrope-medium-5.2b3a2bf4.otf";
    },
    8: function (a, e) {},
    "832309a2": function (a, e, r) {
      "use strict";
      r.d(e, "b", function () {
        return f;
      });
      var i = r("66b76edf"),
        u = r("e7ea4b7d"),
        t = r("b5a01023"),
        s = r("a005797a"),
        d = r("bcb80381"),
        n = r("709303d5"),
        b = r("4306a93e"),
        m = r("00972c18"),
        A = r.n(m);
      function N() {
        N = function () {
          return e;
        };
        var a,
          e = {},
          r = Object.prototype,
          i = r.hasOwnProperty,
          u =
            Object.defineProperty ||
            function (a, e, r) {
              a[e] = r.value;
            },
          t = "function" == typeof Symbol ? Symbol : {},
          s = t.iterator || "@@iterator",
          d = t.asyncIterator || "@@asyncIterator",
          n = t.toStringTag || "@@toStringTag";
        function b(a, e, r) {
          return (
            Object.defineProperty(a, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            a[e]
          );
        }
        try {
          b({}, "");
        } catch (a) {
          b = function (a, e, r) {
            return (a[e] = r);
          };
        }
        function m(a, e, r, i) {
          var t = e && e.prototype instanceof h ? e : h,
            s = Object.create(t.prototype),
            d = new I(i || []);
          return (u(s, "_invoke", { value: C(a, r, d) }), s);
        }
        function A(a, e, r) {
          try {
            return { type: "normal", arg: a.call(e, r) };
          } catch (a) {
            return { type: "throw", arg: a };
          }
        }
        e.wrap = m;
        var o = "suspendedStart",
          c = "suspendedYield",
          l = "executing",
          f = "completed",
          p = {};
        function h() {}
        function g() {}
        function v() {}
        var w = {};
        b(w, s, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          O = y && y(y(S([])));
        O && O !== r && i.call(O, s) && (w = O);
        var k = (v.prototype = h.prototype = Object.create(w));
        function j(a) {
          ["next", "throw", "return"].forEach(function (e) {
            b(a, e, function (a) {
              return this._invoke(e, a);
            });
          });
        }
        function x(a, e) {
          function r(u, t, s, d) {
            var n = A(a[u], a, t);
            if ("throw" !== n.type) {
              var b = n.arg,
                m = b.value;
              return m && "object" == typeof m && i.call(m, "__await")
                ? e.resolve(m.__await).then(
                    function (a) {
                      r("next", a, s, d);
                    },
                    function (a) {
                      r("throw", a, s, d);
                    },
                  )
                : e.resolve(m).then(
                    function (a) {
                      ((b.value = a), s(b));
                    },
                    function (a) {
                      return r("throw", a, s, d);
                    },
                  );
            }
            d(n.arg);
          }
          var t;
          u(this, "_invoke", {
            value: function (a, i) {
              function u() {
                return new e(function (e, u) {
                  r(a, i, e, u);
                });
              }
              return (t = t ? t.then(u, u) : u());
            },
          });
        }
        function C(e, r, i) {
          var u = o;
          return function (t, s) {
            if (u === l) throw Error("Generator is already running");
            if (u === f) {
              if ("throw" === t) throw s;
              return { value: a, done: !0 };
            }
            for (i.method = t, i.arg = s; ;) {
              var d = i.delegate;
              if (d) {
                var n = _(d, i);
                if (n) {
                  if (n === p) continue;
                  return n;
                }
              }
              if ("next" === i.method) i.sent = i._sent = i.arg;
              else if ("throw" === i.method) {
                if (u === o) throw ((u = f), i.arg);
                i.dispatchException(i.arg);
              } else "return" === i.method && i.abrupt("return", i.arg);
              u = l;
              var b = A(e, r, i);
              if ("normal" === b.type) {
                if (((u = i.done ? f : c), b.arg === p)) continue;
                return { value: b.arg, done: i.done };
              }
              "throw" === b.type &&
                ((u = f), (i.method = "throw"), (i.arg = b.arg));
            }
          };
        }
        function _(e, r) {
          var i = r.method,
            u = e.iterator[i];
          if (u === a)
            return (
              (r.delegate = null),
              ("throw" === i &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = a),
                _(e, r),
                "throw" === r.method)) ||
                ("return" !== i &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + i + "' method",
                  )))),
              p
            );
          var t = A(u, e.iterator, r.arg);
          if ("throw" === t.type)
            return (
              (r.method = "throw"),
              (r.arg = t.arg),
              (r.delegate = null),
              p
            );
          var s = t.arg;
          return s
            ? s.done
              ? ((r[e.resultName] = s.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = a)),
                (r.delegate = null),
                p)
              : s
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              p);
        }
        function L(a) {
          var e = { tryLoc: a[0] };
          (1 in a && (e.catchLoc = a[1]),
            2 in a && ((e.finallyLoc = a[2]), (e.afterLoc = a[3])),
            this.tryEntries.push(e));
        }
        function E(a) {
          var e = a.completion || {};
          ((e.type = "normal"), delete e.arg, (a.completion = e));
        }
        function I(a) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            a.forEach(L, this),
            this.reset(!0));
        }
        function S(e) {
          if (e || "" === e) {
            var r = e[s];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var u = -1,
                t = function r() {
                  for (; ++u < e.length;)
                    if (i.call(e, u))
                      return ((r.value = e[u]), (r.done = !1), r);
                  return ((r.value = a), (r.done = !0), r);
                };
              return (t.next = t);
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return (
          (g.prototype = v),
          u(k, "constructor", { value: v, configurable: !0 }),
          u(v, "constructor", { value: g, configurable: !0 }),
          (g.displayName = b(v, n, "GeneratorFunction")),
          (e.isGeneratorFunction = function (a) {
            var e = "function" == typeof a && a.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (a) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(a, v)
                : ((a.__proto__ = v), b(a, n, "GeneratorFunction")),
              (a.prototype = Object.create(k)),
              a
            );
          }),
          (e.awrap = function (a) {
            return { __await: a };
          }),
          j(x.prototype),
          b(x.prototype, d, function () {
            return this;
          }),
          (e.AsyncIterator = x),
          (e.async = function (a, r, i, u, t) {
            void 0 === t && (t = Promise);
            var s = new x(m(a, r, i, u), t);
            return e.isGeneratorFunction(r)
              ? s
              : s.next().then(function (a) {
                  return a.done ? a.value : s.next();
                });
          }),
          j(k),
          b(k, n, "Generator"),
          b(k, s, function () {
            return this;
          }),
          b(k, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (a) {
            var e = Object(a),
              r = [];
            for (var i in e) r.push(i);
            return (
              r.reverse(),
              function a() {
                for (; r.length;) {
                  var i = r.pop();
                  if (i in e) return ((a.value = i), (a.done = !1), a);
                }
                return ((a.done = !0), a);
              }
            );
          }),
          (e.values = S),
          (I.prototype = {
            constructor: I,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = a),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = a),
                this.tryEntries.forEach(E),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    i.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = a);
            },
            stop: function () {
              this.done = !0;
              var a = this.tryEntries[0].completion;
              if ("throw" === a.type) throw a.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function u(i, u) {
                return (
                  (d.type = "throw"),
                  (d.arg = e),
                  (r.next = i),
                  u && ((r.method = "next"), (r.arg = a)),
                  !!u
                );
              }
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var s = this.tryEntries[t],
                  d = s.completion;
                if ("root" === s.tryLoc) return u("end");
                if (s.tryLoc <= this.prev) {
                  var n = i.call(s, "catchLoc"),
                    b = i.call(s, "finallyLoc");
                  if (n && b) {
                    if (this.prev < s.catchLoc) return u(s.catchLoc, !0);
                    if (this.prev < s.finallyLoc) return u(s.finallyLoc);
                  } else if (n) {
                    if (this.prev < s.catchLoc) return u(s.catchLoc, !0);
                  } else {
                    if (!b)
                      throw Error("try statement without catch or finally");
                    if (this.prev < s.finallyLoc) return u(s.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (a, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var u = this.tryEntries[r];
                if (
                  u.tryLoc <= this.prev &&
                  i.call(u, "finallyLoc") &&
                  this.prev < u.finallyLoc
                ) {
                  var t = u;
                  break;
                }
              }
              t &&
                ("break" === a || "continue" === a) &&
                t.tryLoc <= e &&
                e <= t.finallyLoc &&
                (t = null);
              var s = t ? t.completion : {};
              return (
                (s.type = a),
                (s.arg = e),
                t
                  ? ((this.method = "next"), (this.next = t.finallyLoc), p)
                  : this.complete(s)
              );
            },
            complete: function (a, e) {
              if ("throw" === a.type) throw a.arg;
              return (
                "break" === a.type || "continue" === a.type
                  ? (this.next = a.arg)
                  : "return" === a.type
                    ? ((this.rval = this.arg = a.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === a.type && e && (this.next = e),
                p
              );
            },
            finish: function (a) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === a)
                  return (this.complete(r.completion, r.afterLoc), E(r), p);
              }
            },
            catch: function (a) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === a) {
                  var i = r.completion;
                  if ("throw" === i.type) {
                    var u = i.arg;
                    E(r);
                  }
                  return u;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, r, i) {
              return (
                (this.delegate = { iterator: S(e), resultName: r, nextLoc: i }),
                "next" === this.method && (this.arg = a),
                p
              );
            },
          }),
          e
        );
      }
      var o = {
          baseURL: "https://medal.kugou.com",
          retryURL: "https://medalretry.kugou.com",
          sign: "h5",
        },
        c = {
          fetchMedalCategoryList: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "/v3/medal/user_summary_medal",
                                params: {
                                  appid: r.appid,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  userid: r.userid,
                                  token: r.token,
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          fetchNewMedalList: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "/v1/medal/pop_up_list",
                                params: {
                                  appid: r.appid,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  userid: r.userid,
                                  token: r.token,
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          fetchMedalList: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "/v1/medal/get_user_have",
                                params: {
                                  appid: r.appid,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  userid: r.userid,
                                  token: r.token,
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          fetchMedalListByType: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "/v1/medal/user_medal_list",
                                params: {
                                  appid: r.appid,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  userid: r.userid,
                                  token: r.token,
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          fetchMedalDetail: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "/v1/medal/user_medal_levels",
                                params: {
                                  appid: r.appid,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  userid: r.userid,
                                  token: r.token,
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          fetchMedalDetailSingle: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "/v1/medal/user_medal_detail",
                                params: {
                                  appid: r.appid,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  userid: r.userid,
                                  token: r.token,
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          fetchHomePageMedal: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "/v1/user_center/my_medals",
                                params: {
                                  appid: r.appid,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  userid: r.userid,
                                  token: r.token,
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          fetchCommentMedal: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "/v1/user_center/batch_get_user_worn_medal",
                                params: {
                                  appid: r.appid,
                                  clientver: r.clientver,
                                  clienttime: i,
                                  userid: r.userid,
                                  token: r.token,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  sign: "h5",
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          fetchMyMedal: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "/v1/medal/get_user_have",
                                params: {
                                  appid: r.appid,
                                  clientver: r.clientver,
                                  clienttime: i,
                                  userid: r.userid,
                                  token: r.token,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  sign: "h5",
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          selectMedal: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "/v1/medal/batch_select_medal",
                                params: {
                                  appid: r.appid,
                                  clientver: r.clientver,
                                  clienttime: i,
                                  userid: r.userid,
                                  token: r.token,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  sign: "h5",
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          cancelNewTag: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "/v1/medal/cancel_new_tag",
                                params: {
                                  appid: r.appid,
                                  clientver: r.clientver,
                                  clienttime: i,
                                  userid: r.userid,
                                  token: r.token,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  sign: "h5",
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          drawMedal: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "/v1/user_center/receive_medal",
                                params: {
                                  appid: r.appid,
                                  clientver: r.clientver,
                                  clienttime: i,
                                  userid: r.userid,
                                  token: r.token,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  sign: "h5",
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          guardRank: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)({
                              sign: "h5",
                              baseURL: "https://singerdiscussgo.kugou.com",
                              method: "get",
                              url: "/v1/task/singer_integral_day_rank",
                              params: Object(u.a)(
                                {
                                  appid: r.appid,
                                  clientver: r.clientver,
                                  clienttime: i,
                                  userid: r.userid || "",
                                  token: r.token || "",
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  sign: "h5",
                                },
                                e,
                              ),
                            }),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          guardDetails: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)({
                              sign: "h5",
                              baseURL: "https://singerdiscussgo.kugou.com",
                              method: "get",
                              url: "/v1/task/integral_detail_list",
                              params: Object(u.a)(
                                {
                                  appid: r.appid,
                                  clientver: r.clientver,
                                  clienttime: i,
                                  userid: r.userid,
                                  token: r.token,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  sign: "h5",
                                },
                                e,
                              ),
                            }),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          fansRank: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)({
                              sign: "h5",
                              baseURL: "https://singerdiscussgo.kugou.com",
                              method: "get",
                              url: "/v1/task/fans_integral_rank",
                              params: Object(u.a)(
                                {
                                  appid: r.appid,
                                  clientver: r.clientver,
                                  clienttime: i,
                                  userid: r.userid,
                                  token: r.token,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  sign: "h5",
                                },
                                e,
                              ),
                            }),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          fansSingerSign: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)({
                              sign: "h5",
                              baseURL: "https://singerdiscussgo.kugou.com",
                              method: "post",
                              url: "/v1/task/finish/sign_in",
                              params: {
                                appid: r.appid,
                                clientver: r.clientver,
                                clienttime: i,
                                mid: r.mid,
                                dfid: r.dfid,
                                userid: r.userid,
                                token: r.token,
                              },
                              data: { singer_id: +e },
                            }),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          createCoinsIntegralOrder: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)({
                              sign: "h5",
                              baseURL: "https://singerdiscussgo.kugou.com",
                              method: "post",
                              url: "/v1/task/create_coins_integral_order",
                              params: {
                                appid: r.appid,
                                clientver: r.clientver,
                                clienttime: i,
                                mid: r.mid,
                                dfid: r.dfid,
                                userid: r.userid,
                                token: r.token,
                              },
                              data: e,
                            }),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          refreshProgress: (function () {
            var a = Object(t.a)(
              N().mark(function a(e, r) {
                var i, u;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (i = a.sent),
                          (u = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)({
                              sign: "h5",
                              baseURL: "https://singerdiscussgo.kugou.com",
                              method: "get",
                              url: "/v1/task/progress_list",
                              params: {
                                appid: i.appid,
                                clientver: i.clientver,
                                clienttime: u,
                                mid: i.mid,
                                dfid: i.dfid,
                                userid: i.userid,
                                token: i.token,
                                type: e,
                                classify_id: r,
                              },
                            }),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e, r) {
              return a.apply(this, arguments);
            };
          })(),
          recommendList: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)({
                              sign: "h5",
                              baseURL: "https://songrelease.kugou.com",
                              method: "get",
                              url: "/v1/rec/singer/recommend",
                              params: Object(u.a)(
                                {
                                  appid: r.appid,
                                  clientver: r.clientver,
                                  clienttime: i,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  userid: r.userid,
                                  token: r.token,
                                },
                                e,
                              ),
                            }),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          getRecommendMixSongid: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)({
                              sign: "h5",
                              baseURL: "https://songrelease.kugou.com",
                              method: "get",
                              url: "/v1/rec/singer/song",
                              params: Object(u.a)(
                                {
                                  appid: r.appid,
                                  clientver: r.clientver,
                                  clienttime: i,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  userid: r.userid,
                                  token: r.token,
                                },
                                e,
                              ),
                            }),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          search: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i, u, t, n;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (r = e.keyword),
                          (i = e.page),
                          (u = e.pagesize),
                          (t = void 0 === u ? 20 : u),
                          (a.next = 3),
                          Object(s.t)()
                        );
                      case 3:
                        return (
                          (n = a.sent),
                          a.abrupt(
                            "return",
                            Object(d.a)({
                              sign: "h5",
                              method: "get",
                              baseURL: "https://songrelease.kugou.com",
                              url: "/v1/rec/search",
                              params: Object.assign({}, n, {
                                keyword: r,
                                page: i,
                                pagesize: t,
                              }),
                              needEncodeData: { getDataKeyList: ["keyword"] },
                            }),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          taskFinish: (function () {
            var a = Object(t.a)(
              N().mark(function a(e, r) {
                var i, u, t;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (i = a.sent),
                          (u = new Date().getTime()),
                          (t = ""),
                          "fans_medal_share" === r &&
                            (t = "/v1/task/finish/fans_medal_share"),
                          "calendar_reminder" === r &&
                            (t = "/v1/task/finish/calendar_reminder"),
                          "fans_like" === r &&
                            (t = "/v1/task/finish/fans_like"),
                          a.abrupt(
                            "return",
                            Object(d.a)({
                              sign: "h5",
                              baseURL: "https://singerdiscussgo.kugou.com",
                              method: "post",
                              url: t,
                              params: {
                                appid: i.appid,
                                clientver: i.clientver,
                                clienttime: u,
                                mid: i.mid,
                                dfid: i.dfid,
                                userid: i.userid,
                                token: i.token,
                              },
                              data: e,
                            }),
                          )
                        );
                      case 9:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e, r) {
              return a.apply(this, arguments);
            };
          })(),
          receiveFansMedal: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)({
                              sign: "h5",
                              baseURL: "https://singerdiscussgo.kugou.com",
                              method: "post",
                              url: "/v1/task/receive_fans_medal",
                              params: {
                                appid: r.appid,
                                clientver: r.clientver,
                                clienttime: i,
                                mid: r.mid,
                                dfid: r.dfid,
                                userid: r.userid,
                                token: r.token,
                              },
                              data: { singer_id: e },
                            }),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          followSinger: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i, u, t, m, A, o;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          (u = {
                            appid: r.appid || "1058",
                            clientver: r.clientver || "-",
                            clienttime: i,
                            mid: r.mid || "-",
                            uuid: r.uuid || "-",
                            dfid: r.dfid,
                          }),
                          (t = { singerid: e, token: r.token }),
                          (m = n.a.encrypt(JSON.stringify(t))),
                          (A = JSON.stringify({ clienttime: i, key: m.key })),
                          (o = {
                            plat: r.plat,
                            userid: r.userid,
                            singerid: e,
                            source: 7,
                            p: b.a.encrypt(A, "", "PKCS1Padding"),
                            params: m.encryptedStr,
                          }),
                          a.abrupt(
                            "return",
                            Object(d.a)({
                              isAllowKGAntiBush: !1,
                              isAllowSign: !0,
                              isGateway: !0,
                              sign: "h5",
                              baseURL: "https://followservice.kugou.com",
                              method: "post",
                              url: "/v3/follow_singer",
                              params: u,
                              data: JSON.stringify(o),
                            }),
                          )
                        );
                      case 10:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          getFollowSingerInfo: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i, u, t, m, A, o;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          (u = {
                            appid: r.appid || "1058",
                            clientver: r.clientver || "-",
                            clienttime: i,
                            mid: r.mid || "-",
                            uuid: r.uuid || "-",
                            dfid: r.dfid,
                          }),
                          (t = { singerid: e, token: r.token }),
                          (m = n.a.encrypt(JSON.stringify(t))),
                          (A = JSON.stringify({ clienttime: i, key: m.key })),
                          (o = {
                            plat: r.plat,
                            userid: r.userid,
                            singerid: e,
                            p: b.a.encrypt(A, "", "PKCS1Padding"),
                            params: m.encryptedStr,
                          }),
                          a.abrupt(
                            "return",
                            Object(d.a)({
                              isAllowKGAntiBush: !1,
                              isAllowSign: !0,
                              isGateway: !0,
                              sign: "h5",
                              baseURL: "https://followservice.kugou.com",
                              method: "post",
                              url: "/v1/get_follow_info",
                              params: u,
                              data: JSON.stringify(o),
                            }),
                          )
                        );
                      case 10:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          fansSingerSignAdditional: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)({
                              sign: "h5",
                              baseURL: "https://singerdiscussgo.kugou.com",
                              method: "post",
                              url: "/v1/task/finish/sign_in_additional",
                              params: {
                                appid: r.appid,
                                clientver: r.clientver,
                                clienttime: i,
                                mid: r.mid,
                                dfid: r.dfid,
                                userid: r.userid,
                                token: r.token,
                              },
                              data: {
                                singer_id: e,
                                auth_sign: A()(
                                  ""
                                    .concat(r.userid, "_")
                                    .concat(e, "_")
                                    .concat(i),
                                ),
                              },
                            }),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          fansSingerSignFill: (function () {
            var a = Object(t.a)(
              N().mark(function a(e, r) {
                var i, u;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (i = a.sent),
                          (u = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)({
                              sign: "h5",
                              baseURL: "https://singerdiscussgo.kugou.com",
                              method: "post",
                              url: "/v1/task/finish/sign_in_fill",
                              params: {
                                appid: i.appid,
                                clientver: i.clientver,
                                clienttime: u,
                                mid: i.mid,
                                dfid: i.dfid,
                                userid: i.userid,
                                token: i.token,
                              },
                              data: {
                                singer_id: e,
                                sign_in_date: r,
                                auth_sign: A()(
                                  ""
                                    .concat(i.userid, "_")
                                    .concat(e, "_")
                                    .concat(r, "_")
                                    .concat(u),
                                ),
                              },
                            }),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e, r) {
              return a.apply(this, arguments);
            };
          })(),
          fansSingerSignList: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)({
                              sign: "h5",
                              baseURL: "https://singerdiscussgo.kugou.com",
                              method: "get",
                              url: "/v1/task/sign_in_list",
                              params: Object(u.a)(
                                {
                                  appid: r.appid,
                                  clientver: r.clientver,
                                  clienttime: i,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  userid: r.userid,
                                  token: r.token,
                                },
                                e,
                              ),
                            }),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          hideMedal: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "/v1/medal/hide",
                                params: {
                                  appid: r.appid,
                                  clientver: r.clientver,
                                  clienttime: i,
                                  userid: r.userid,
                                  token: r.token,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  sign: "h5",
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          deleteMedal: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                baseURL: "https://singerdiscussgo.kugou.com",
                                method: "post",
                                url: "/v1/medal/del_medal",
                                params: {
                                  appid: r.appid,
                                  clientver: r.clientver,
                                  clienttime: i,
                                  userid: r.userid,
                                  token: r.token,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  sign: "h5",
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          fetchHideList: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "/v1/medal/hide_list",
                                params: {
                                  appid: r.appid,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  userid: r.userid,
                                  token: r.token,
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          getTimeline: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "/v1/medal/timeline",
                                params: {
                                  appid: r.appid,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          getMonthMedals: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "/v1/medal/mon_have_list",
                                params: {
                                  appid: r.appid,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          getUpgradeList: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "/v1/medal/upgrade_have_list",
                                params: {
                                  appid: r.appid,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          wearMedal: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "/v1/medal/append_wear",
                                params: {
                                  appid: r.appid,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  userid: r.userid,
                                  token: r.token,
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          getPublicTestTaskList: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i, t, n, b;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (e = Object(u.a)({}, e, {
                            token: r.token,
                            appid: r.appid,
                            kugouid: r.userid,
                          })),
                          (i = "1e9ae7b72a4b3384c815b1f18fde9888"),
                          (t = new Date().getTime()),
                          (n = ""
                            .concat(i)
                            .concat(t)
                            .concat(JSON.stringify(e))
                            .concat(i)),
                          (b = A()(n)),
                          a.abrupt(
                            "return",
                            Object(d.a)({
                              baseURL: "https://wenjuan.kugou.com",
                              isAllowSign: !1,
                              isAllowKGAntiBush: !1,
                              isGateway: !0,
                              method: "post",
                              url: "/appweb/tinweb/getMedalDetailsForMedal",
                              params: { sign: b, clienttime: t },
                              data: e,
                            }),
                          )
                        );
                      case 9:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          getSongInfo: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)({
                              sign: "h5",
                              baseURL: "https://m3ws.kugou.com",
                              method: "get",
                              url: "/v1/song/info",
                              params: Object(u.a)(
                                {
                                  appid: r.appid,
                                  clientver: r.clientver,
                                  clienttime: i,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  userid: r.userid,
                                  token: r.token,
                                },
                                e,
                              ),
                            }),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          uploadTaskFollowSinger: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "v1/task/follow_singer",
                                params: {
                                  appid: r.appid,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  userid: r.userid,
                                  token: r.token,
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          uploadTaskSongCollect: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "v1/task/song_collect",
                                params: {
                                  appid: r.appid,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  userid: r.userid,
                                  token: r.token,
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          uploadTaskViewPage: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          a.abrupt(
                            "return",
                            Object(d.a)(
                              Object(u.a)({}, o, {
                                method: "post",
                                url: "v1/task/view_page",
                                params: {
                                  appid: r.appid,
                                  mid: r.mid,
                                  dfid: r.dfid,
                                  userid: r.userid,
                                  token: r.token,
                                },
                                data: Object(u.a)({}, e),
                              }),
                            ),
                          )
                        );
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          get_singer_songs: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var a = Object(t.a)(
                                N().mark(function a(r) {
                                  var i;
                                  return N().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return ((a.next = 2), Object(s.t)());
                                        case 2:
                                          if ((i = a.sent).userid || i.token) {
                                            a.next = 6;
                                            break;
                                          }
                                          return (
                                            r([null, { isLogin: !1 }]),
                                            a.abrupt("return")
                                          );
                                        case 6:
                                          Object(d.a)(
                                            Object(u.a)({}, o, {
                                              baseURL:
                                                "https://singerdiscussgo.kugou.com",
                                              method: "get",
                                              url: "/v1/singer_task/singer_songs",
                                              params: Object(u.a)(
                                                {
                                                  appid: i.appid,
                                                  mid: i.mid,
                                                  dfid: i.dfid,
                                                  userid: i.userid,
                                                  token: i.token,
                                                },
                                                e,
                                              ),
                                            }),
                                          )
                                            .then(function (a) {
                                              var e =
                                                null === a || void 0 === a
                                                  ? void 0
                                                  : a.data;
                                              1 ===
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.status)
                                                ? r([e, null])
                                                : r([null, a]);
                                            })
                                            .catch(function (a) {
                                              r([null, a]);
                                            });
                                        case 7:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                }),
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          get_ad_sec_reward_info: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var a = Object(t.a)(
                                N().mark(function a(r) {
                                  var i;
                                  return N().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return ((a.next = 2), Object(s.t)());
                                        case 2:
                                          if ((i = a.sent).userid || i.token) {
                                            a.next = 6;
                                            break;
                                          }
                                          return (
                                            r([null, { isLogin: !1 }]),
                                            a.abrupt("return")
                                          );
                                        case 6:
                                          Object(d.a)(
                                            Object(u.a)({}, o, {
                                              baseURL:
                                                "https://singerdiscussgo.kugou.com",
                                              method: "post",
                                              url: "/v1/task/ad_sec_reward_info",
                                              params: {
                                                appid: i.appid,
                                                mid: i.mid,
                                                dfid: i.dfid,
                                                userid: i.userid,
                                                token: i.token,
                                              },
                                              data: e,
                                            }),
                                          )
                                            .then(function (a) {
                                              var e =
                                                null === a || void 0 === a
                                                  ? void 0
                                                  : a.data;
                                              1 ===
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.status)
                                                ? r([e, null])
                                                : r([null, a]);
                                            })
                                            .catch(function (a) {
                                              r([null, a]);
                                            });
                                        case 7:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                }),
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          outside_finish: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var a = Object(t.a)(
                                N().mark(function a(r) {
                                  var i;
                                  return N().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return ((a.next = 2), Object(s.t)());
                                        case 2:
                                          if ((i = a.sent).userid || i.token) {
                                            a.next = 6;
                                            break;
                                          }
                                          return (
                                            r([null, { isLogin: !1 }]),
                                            a.abrupt("return")
                                          );
                                        case 6:
                                          Object(d.a)(
                                            Object(u.a)({}, o, {
                                              baseURL:
                                                "https://singerdiscussgo.kugou.com",
                                              method: "post",
                                              url: "/v2/task/outside_finish",
                                              params: {
                                                appid: i.appid,
                                                mid: i.mid,
                                                dfid: i.dfid,
                                                userid: i.userid,
                                                token: i.token,
                                              },
                                              data: Object(u.a)({}, e, {
                                                event_id: ""
                                                  .concat(Date.now(), "_")
                                                  .concat(e.task_id, "_")
                                                  .concat(i.userid),
                                              }),
                                            }),
                                          )
                                            .then(function (a) {
                                              var e =
                                                null === a || void 0 === a
                                                  ? void 0
                                                  : a.data;
                                              1 ===
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.status)
                                                ? r([e, null])
                                                : r([null, a]);
                                            })
                                            .catch(function (a) {
                                              r([null, a]);
                                            });
                                        case 7:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                }),
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          get_battlepass_info: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var a = Object(t.a)(
                                N().mark(function a(r) {
                                  var i;
                                  return N().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return ((a.next = 2), Object(s.t)());
                                        case 2:
                                          ((i = a.sent),
                                            Object(d.a)(
                                              Object(u.a)({}, o, {
                                                baseURL:
                                                  "https://singerdiscussgo.kugou.com",
                                                method: "get",
                                                url: "/v1/battlepass/info",
                                                params: Object(u.a)(
                                                  {
                                                    appid: i.appid,
                                                    mid: i.mid,
                                                    dfid: i.dfid,
                                                    userid: i.userid,
                                                    token: i.token,
                                                  },
                                                  e,
                                                ),
                                              }),
                                            )
                                              .then(function (a) {
                                                var e =
                                                  null === a || void 0 === a
                                                    ? void 0
                                                    : a.data;
                                                1 ===
                                                (null === e || void 0 === e
                                                  ? void 0
                                                  : e.status)
                                                  ? r([e, null])
                                                  : r([null, a]);
                                              })
                                              .catch(function (a) {
                                                r([null, a]);
                                              }));
                                        case 4:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                }),
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          get_rank_user_config: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var a = Object(t.a)(
                                N().mark(function a(r) {
                                  var i;
                                  return N().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return ((a.next = 2), Object(s.t)());
                                        case 2:
                                          if ((i = a.sent).userid || i.token) {
                                            a.next = 6;
                                            break;
                                          }
                                          return (
                                            r([null, { isLogin: !1 }]),
                                            a.abrupt("return")
                                          );
                                        case 6:
                                          Object(d.a)(
                                            Object(u.a)({}, o, {
                                              baseURL:
                                                "https://singerdiscussgo.kugou.com",
                                              method: "get",
                                              url: "/v1/user/config",
                                              params: Object(u.a)(
                                                {
                                                  appid: i.appid,
                                                  mid: i.mid,
                                                  dfid: i.dfid,
                                                  userid: i.userid,
                                                  token: i.token,
                                                },
                                                e,
                                              ),
                                            }),
                                          )
                                            .then(function (a) {
                                              var e =
                                                null === a || void 0 === a
                                                  ? void 0
                                                  : a.data;
                                              1 ===
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.status)
                                                ? r([e, null])
                                                : r([null, a]);
                                            })
                                            .catch(function (a) {
                                              r([null, a]);
                                            });
                                        case 7:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                }),
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          set_rank_user_config: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var a = Object(t.a)(
                                N().mark(function a(r) {
                                  var i;
                                  return N().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return ((a.next = 2), Object(s.t)());
                                        case 2:
                                          if ((i = a.sent).userid || i.token) {
                                            a.next = 6;
                                            break;
                                          }
                                          return (
                                            r([null, { isLogin: !1 }]),
                                            a.abrupt("return")
                                          );
                                        case 6:
                                          Object(d.a)(
                                            Object(u.a)({}, o, {
                                              baseURL:
                                                "https://singerdiscussgo.kugou.com",
                                              method: "post",
                                              url: "/v1/user/set_config",
                                              params: {
                                                appid: i.appid,
                                                mid: i.mid,
                                                dfid: i.dfid,
                                                userid: i.userid,
                                                token: i.token,
                                              },
                                              data: Object(u.a)({}, e),
                                            }),
                                          )
                                            .then(function (a) {
                                              var e =
                                                null === a || void 0 === a
                                                  ? void 0
                                                  : a.data;
                                              1 ===
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.status)
                                                ? r([e, null])
                                                : r([null, a]);
                                            })
                                            .catch(function (a) {
                                              r([null, a]);
                                            });
                                        case 7:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                }),
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          get_rank_fans: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var a = Object(t.a)(
                                N().mark(function a(r) {
                                  var i;
                                  return N().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return ((a.next = 2), Object(s.t)());
                                        case 2:
                                          ((i = a.sent),
                                            Object(d.a)(
                                              Object(u.a)({}, o, {
                                                baseURL:
                                                  "https://singerdiscussgo.kugou.com",
                                                method: "get",
                                                url: "/v1/rank/fans",
                                                params: Object(u.a)(
                                                  {
                                                    appid: i.appid,
                                                    mid: i.mid,
                                                    dfid: i.dfid,
                                                    userid: i.userid || 0,
                                                    token: i.token || "",
                                                  },
                                                  e,
                                                ),
                                              }),
                                            )
                                              .then(function (a) {
                                                var e =
                                                  null === a || void 0 === a
                                                    ? void 0
                                                    : a.data;
                                                1 ===
                                                (null === e || void 0 === e
                                                  ? void 0
                                                  : e.status)
                                                  ? r([e, null])
                                                  : r([null, a]);
                                              })
                                              .catch(function (a) {
                                                r([null, a]);
                                              }));
                                        case 4:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                }),
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          get_fans_medal_detail: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var a = Object(t.a)(
                                N().mark(function a(r) {
                                  var i;
                                  return N().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return ((a.next = 2), Object(s.t)());
                                        case 2:
                                          if ((i = a.sent).userid || i.token) {
                                            a.next = 6;
                                            break;
                                          }
                                          return (
                                            r([null, { isLogin: !1 }]),
                                            a.abrupt("return")
                                          );
                                        case 6:
                                          Object(d.a)(
                                            Object(u.a)({}, o, {
                                              baseURL:
                                                "https://medal.kugou.com",
                                              method: "post",
                                              url: "/v1/medal/fans_medal_detail",
                                              params: {
                                                appid: i.appid,
                                                mid: i.mid,
                                                dfid: i.dfid,
                                                userid: i.userid,
                                                token: i.token,
                                              },
                                              data: Object(u.a)({}, e),
                                            }),
                                          )
                                            .then(function (a) {
                                              var e =
                                                null === a || void 0 === a
                                                  ? void 0
                                                  : a.data;
                                              1 ===
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.status)
                                                ? r([e, null])
                                                : r([null, a]);
                                            })
                                            .catch(function (a) {
                                              r([null, a]);
                                            });
                                        case 7:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                }),
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          get_fans_integral_list: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var a = Object(t.a)(
                                N().mark(function a(r) {
                                  var i;
                                  return N().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return ((a.next = 2), Object(s.t)());
                                        case 2:
                                          if ((i = a.sent).userid || i.token) {
                                            a.next = 6;
                                            break;
                                          }
                                          return (
                                            r([null, { isLogin: !1 }]),
                                            a.abrupt("return")
                                          );
                                        case 6:
                                          Object(d.a)(
                                            Object(u.a)({}, o, {
                                              baseURL:
                                                "https://singerdiscussgo.kugou.com",
                                              method: "get",
                                              url: "/v1/rank/fans_integral_list",
                                              params: Object(u.a)(
                                                {
                                                  appid: i.appid,
                                                  mid: i.mid,
                                                  dfid: i.dfid,
                                                  userid: i.userid,
                                                  token: i.token,
                                                },
                                                e,
                                              ),
                                            }),
                                          )
                                            .then(function (a) {
                                              var e =
                                                null === a || void 0 === a
                                                  ? void 0
                                                  : a.data;
                                              1 ===
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.status)
                                                ? r([e, null])
                                                : r([null, a]);
                                            })
                                            .catch(function (a) {
                                              r([null, a]);
                                            });
                                        case 7:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                }),
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          get_medal_config: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var a = Object(t.a)(
                                N().mark(function a(r) {
                                  var i;
                                  return N().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return ((a.next = 2), Object(s.t)());
                                        case 2:
                                          ((i = a.sent),
                                            Object(d.a)(
                                              Object(u.a)({}, o, {
                                                baseURL:
                                                  "https://medal.kugou.com",
                                                method: "post",
                                                url: "/v1/medal/config",
                                                params: {
                                                  appid: i.appid,
                                                  mid: i.mid,
                                                  dfid: i.dfid,
                                                },
                                                data: Object(u.a)({}, e),
                                              }),
                                            )
                                              .then(function (a) {
                                                var e =
                                                  null === a || void 0 === a
                                                    ? void 0
                                                    : a.data;
                                                1 ===
                                                (null === e || void 0 === e
                                                  ? void 0
                                                  : e.status)
                                                  ? r([e, null])
                                                  : r([null, a]);
                                              })
                                              .catch(function (a) {
                                                r([null, a]);
                                              }));
                                        case 4:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                }),
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          user_status: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var a = Object(t.a)(
                                N().mark(function a(r) {
                                  var i;
                                  return N().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return ((a.next = 2), Object(s.t)());
                                        case 2:
                                          if ((i = a.sent).userid || i.token) {
                                            a.next = 6;
                                            break;
                                          }
                                          return (
                                            r([null, { isLogin: !1 }]),
                                            a.abrupt("return")
                                          );
                                        case 6:
                                          Object(d.a)(
                                            Object(u.a)({}, o, {
                                              baseURL:
                                                "https://singerdiscussgo.kugou.com",
                                              method: "get",
                                              url: "/v1/task/user_status",
                                              params: Object(u.a)(
                                                {
                                                  appid: i.appid,
                                                  mid: i.mid,
                                                  dfid: i.dfid,
                                                  userid: i.userid,
                                                  token: i.token,
                                                },
                                                e,
                                              ),
                                            }),
                                          )
                                            .then(function (a) {
                                              var e =
                                                null === a || void 0 === a
                                                  ? void 0
                                                  : a.data;
                                              1 ===
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.status)
                                                ? r([e, null])
                                                : r([null, a]);
                                            })
                                            .catch(function (a) {
                                              r([null, a]);
                                            });
                                        case 7:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                }),
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          get_area_list: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var a = Object(t.a)(
                                N().mark(function a(r) {
                                  var i;
                                  return N().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return ((a.next = 2), Object(s.t)());
                                        case 2:
                                          if ((i = a.sent).userid || i.token) {
                                            a.next = 6;
                                            break;
                                          }
                                          return (
                                            r([null, { isLogin: !1 }]),
                                            a.abrupt("return")
                                          );
                                        case 6:
                                          Object(d.a)(
                                            Object(u.a)({}, o, {
                                              baseURL:
                                                "https://singerdiscussgo.kugou.com",
                                              method: "get",
                                              url: "/v1/user/area_list",
                                              params: Object(u.a)(
                                                {
                                                  appid: i.appid,
                                                  mid: i.mid,
                                                  dfid: i.dfid,
                                                  userid: i.userid,
                                                  token: i.token,
                                                },
                                                e,
                                              ),
                                            }),
                                          )
                                            .then(function (a) {
                                              var e =
                                                null === a || void 0 === a
                                                  ? void 0
                                                  : a.data;
                                              1 ===
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.status)
                                                ? r([e, null])
                                                : r([null, a]);
                                            })
                                            .catch(function (a) {
                                              r([null, a]);
                                            });
                                        case 7:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                }),
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          v1_outside_finish: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var a = Object(t.a)(
                                N().mark(function a(r) {
                                  var i;
                                  return N().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return ((a.next = 2), Object(s.t)());
                                        case 2:
                                          if ((i = a.sent).userid || i.token) {
                                            a.next = 6;
                                            break;
                                          }
                                          return (
                                            r([null, { isLogin: !1 }]),
                                            a.abrupt("return")
                                          );
                                        case 6:
                                          Object(d.a)(
                                            Object(u.a)({}, o, {
                                              baseURL:
                                                "https://medal.kugou.com",
                                              method: "post",
                                              url: "/v1/task/outside_finish",
                                              params: {
                                                appid: i.appid,
                                                mid: i.mid,
                                                dfid: i.dfid,
                                                userid: i.userid,
                                                token: i.token,
                                              },
                                              data: Object(u.a)({}, e),
                                            }),
                                          )
                                            .then(function (a) {
                                              var e =
                                                null === a || void 0 === a
                                                  ? void 0
                                                  : a.data;
                                              1 ===
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.status)
                                                ? r([e, null])
                                                : r([null, a]);
                                            })
                                            .catch(function (a) {
                                              r([null, a]);
                                            });
                                        case 7:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                }),
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          get_skin_pop_up_list: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var a = Object(t.a)(
                                N().mark(function a(r) {
                                  var i;
                                  return N().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return ((a.next = 2), Object(s.t)());
                                        case 2:
                                          if ((i = a.sent).userid || i.token) {
                                            a.next = 6;
                                            break;
                                          }
                                          return (
                                            r([null, { isLogin: !1 }]),
                                            a.abrupt("return")
                                          );
                                        case 6:
                                          Object(d.a)(
                                            Object(u.a)({}, o, {
                                              baseURL:
                                                "https://medal.kugou.com",
                                              method: "post",
                                              url: "/v1/skin/pop_up_list",
                                              params: {
                                                appid: i.appid,
                                                mid: i.mid,
                                                dfid: i.dfid,
                                                userid: i.userid,
                                                token: i.token,
                                              },
                                              data: Object(u.a)({}, e),
                                            }),
                                          )
                                            .then(function (a) {
                                              var e =
                                                null === a || void 0 === a
                                                  ? void 0
                                                  : a.data;
                                              1 ===
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.status)
                                                ? r([e, null])
                                                : r([null, a]);
                                            })
                                            .catch(function (a) {
                                              r([null, a]);
                                            });
                                        case 7:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                }),
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          get_listen_level_my_info: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var a = Object(t.a)(
                                N().mark(function a(r) {
                                  var i;
                                  return N().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return ((a.next = 2), Object(s.t)());
                                        case 2:
                                          if ((i = a.sent).userid || i.token) {
                                            a.next = 6;
                                            break;
                                          }
                                          return (
                                            r([null, { isLogin: !1 }]),
                                            a.abrupt("return")
                                          );
                                        case 6:
                                          Object(d.a)(
                                            Object(u.a)({}, o, {
                                              baseURL:
                                                "https://songplay.kugou.com",
                                              method: "get",
                                              url: "/v1/listen_level/my_info",
                                              params: Object(u.a)(
                                                {
                                                  appid: i.appid || 1058,
                                                  mid: i.mid,
                                                  dfid: i.dfid,
                                                  userid: i.userid || 0,
                                                  token: i.token || "",
                                                },
                                                e,
                                              ),
                                            }),
                                          )
                                            .then(function (a) {
                                              var e =
                                                null === a || void 0 === a
                                                  ? void 0
                                                  : a.data;
                                              1 ===
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.status)
                                                ? r([e, null])
                                                : r([null, a]);
                                            })
                                            .catch(function (a) {
                                              r([null, a]);
                                            });
                                        case 7:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                }),
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          createPackageSnapshot: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i, u, t, n, b;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (r = e.singer_id),
                          (i = e.package_id),
                          (u = e.final_price),
                          (t = e.add_integral),
                          (a.next = 3),
                          Object(s.t)()
                        );
                      case 3:
                        return (
                          (n = a.sent),
                          (b = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)({
                              sign: "h5",
                              baseURL: "https://singerdiscussgo.kugou.com",
                              method: "post",
                              url: "/v1/vip/create_package_snapshot",
                              params: {
                                appid: n.appid,
                                clientver: n.clientver,
                                clienttime: b,
                                mid: n.mid,
                                dfid: n.dfid,
                                userid: n.userid,
                                token: n.token,
                              },
                              data: {
                                biz: "purchase_svip",
                                singer_id: +r,
                                package: {
                                  package_id: i,
                                  final_price: u,
                                  add_integral: t,
                                },
                              },
                            }),
                          )
                        );
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          cancel_skin_red_dot: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var a = Object(t.a)(
                                N().mark(function a(r) {
                                  var i;
                                  return N().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return ((a.next = 2), Object(s.t)());
                                        case 2:
                                          if ((i = a.sent).userid || i.token) {
                                            a.next = 6;
                                            break;
                                          }
                                          return (
                                            r([null, { isLogin: !1 }]),
                                            a.abrupt("return")
                                          );
                                        case 6:
                                          Object(d.a)(
                                            Object(u.a)({}, o, {
                                              baseURL:
                                                "https://medal.kugou.com",
                                              method: "post",
                                              url: "/v1/skin/cancel_red_hot",
                                              params: {
                                                appid: i.appid,
                                                mid: i.mid,
                                                dfid: i.dfid,
                                                userid: i.userid,
                                                token: i.token,
                                              },
                                              data: Object(u.a)({}, e),
                                            }),
                                          )
                                            .then(function (a) {
                                              var e =
                                                null === a || void 0 === a
                                                  ? void 0
                                                  : a.data;
                                              1 ===
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.status)
                                                ? r([e, null])
                                                : r([null, a]);
                                            })
                                            .catch(function (a) {
                                              r([null, a]);
                                            });
                                        case 7:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                }),
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          honor_title_config: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var a = Object(t.a)(
                                N().mark(function a(r) {
                                  var i;
                                  return N().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return ((a.next = 2), Object(s.t)());
                                        case 2:
                                          if ((i = a.sent).userid || i.token) {
                                            a.next = 6;
                                            break;
                                          }
                                          return (
                                            r([null, { isLogin: !1 }]),
                                            a.abrupt("return")
                                          );
                                        case 6:
                                          Object(d.a)(
                                            Object(u.a)({}, o, {
                                              baseURL:
                                                "https://medal.kugou.com",
                                              method: "post",
                                              url: "/v1/medal/honor_title_config/set",
                                              params: {
                                                appid: i.appid,
                                                mid: i.mid,
                                                dfid: i.dfid,
                                                userid: i.userid,
                                                token: i.token,
                                              },
                                              data: Object(u.a)({}, e),
                                            }),
                                          )
                                            .then(function (a) {
                                              var e =
                                                null === a || void 0 === a
                                                  ? void 0
                                                  : a.data;
                                              1 ===
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.status)
                                                ? r([e, null])
                                                : r([null, a]);
                                            })
                                            .catch(function (a) {
                                              r([null, a]);
                                            });
                                        case 7:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                }),
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          receive_battlepass: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var a = Object(t.a)(
                                N().mark(function a(r) {
                                  var i;
                                  return N().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return ((a.next = 2), Object(s.t)());
                                        case 2:
                                          if ((i = a.sent).userid || i.token) {
                                            a.next = 6;
                                            break;
                                          }
                                          return (
                                            r([null, { isLogin: !1 }]),
                                            a.abrupt("return")
                                          );
                                        case 6:
                                          Object(d.a)(
                                            Object(u.a)({}, o, {
                                              baseURL:
                                                "https://singerdiscussgo.kugou.com",
                                              method: "post",
                                              url: "/v1/battlepass/receive",
                                              params: {
                                                appid: i.appid,
                                                mid: i.mid,
                                                dfid: i.dfid,
                                                userid: i.userid,
                                                token: i.token,
                                              },
                                              data: Object(u.a)({}, e),
                                            }),
                                          )
                                            .then(function (a) {
                                              var e =
                                                null === a || void 0 === a
                                                  ? void 0
                                                  : a.data;
                                              1 ===
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.status)
                                                ? r([e, null])
                                                : r([null, a]);
                                            })
                                            .catch(function (a) {
                                              r([null, a]);
                                            });
                                        case 7:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                }),
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          update_to_default: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var a = Object(t.a)(
                                N().mark(function a(r) {
                                  var i;
                                  return N().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return ((a.next = 2), Object(s.t)());
                                        case 2:
                                          if ((i = a.sent).userid || i.token) {
                                            a.next = 6;
                                            break;
                                          }
                                          return (
                                            r([null, { isLogin: !1 }]),
                                            a.abrupt("return")
                                          );
                                        case 6:
                                          Object(d.a)(
                                            Object(u.a)({}, o, {
                                              baseURL:
                                                "https://medal.kugou.com",
                                              method: "post",
                                              url: "/v1/diy/update_to_default",
                                              params: {
                                                appid: i.appid,
                                                mid: i.mid,
                                                dfid: i.dfid,
                                                userid: i.userid,
                                                token: i.token,
                                              },
                                              data: Object(u.a)({}, e),
                                            }),
                                          )
                                            .then(function (a) {
                                              var e =
                                                null === a || void 0 === a
                                                  ? void 0
                                                  : a.data;
                                              1 ===
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.status)
                                                ? r([e, null])
                                                : r([null, a]);
                                            })
                                            .catch(function (a) {
                                              r([null, a]);
                                            });
                                        case 7:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                }),
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          upload_diy_medal: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var a = Object(t.a)(
                                N().mark(function a(r) {
                                  var i;
                                  return N().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return ((a.next = 2), Object(s.t)());
                                        case 2:
                                          if ((i = a.sent).userid || i.token) {
                                            a.next = 6;
                                            break;
                                          }
                                          return (
                                            r([null, { isLogin: !1 }]),
                                            a.abrupt("return")
                                          );
                                        case 6:
                                          Object(d.a)(
                                            Object(u.a)({}, o, {
                                              baseURL:
                                                "https://medal.kugou.com",
                                              method: "post",
                                              url: "/v1/diy/add_diy",
                                              params: {
                                                appid: i.appid,
                                                mid: i.mid,
                                                dfid: i.dfid,
                                                userid: i.userid,
                                                token: i.token,
                                              },
                                              data: Object(u.a)({}, e),
                                              useMobileCall: !0,
                                            }),
                                          )
                                            .then(function (a) {
                                              var e =
                                                null === a || void 0 === a
                                                  ? void 0
                                                  : a.data;
                                              1 ===
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.status)
                                                ? r([e, null])
                                                : r([null, a]);
                                            })
                                            .catch(function (a) {
                                              r([null, a]);
                                            });
                                        case 7:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                }),
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 1:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          get_sign_in_skin_detail: (function () {
            var a = Object(t.a)(
              N().mark(function a(e) {
                var r, i;
                return N().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Object(s.t)());
                      case 2:
                        return (
                          (r = a.sent),
                          (i = new Date().getTime()),
                          a.abrupt(
                            "return",
                            Object(d.a)({
                              sign: "h5",
                              baseURL: "https://medal.kugou.com",
                              method: "post",
                              url: "/v1/skin/sign_in_skin_detail",
                              params: {
                                appid: r.appid,
                                clientver: r.clientver,
                                clienttime: i,
                                mid: r.mid,
                                dfid: r.dfid,
                                userid: r.userid,
                                token: r.token,
                              },
                              data: Object(u.a)(
                                { target_userid: +r.userid },
                                e,
                              ),
                            }),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
        };
      e.a = c;
      var l = {},
        f = (function () {
          var a = Object(t.a)(
            N().mark(function a(e) {
              var r, u, t, d, n, b, m, A, o, f, p, h, g, v;
              return N().wrap(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (
                          ((r = e.type),
                          (u = e.classifyId),
                          (a.prev = 1),
                          r && u)
                        ) {
                          a.next = 4;
                          break;
                        }
                        return a.abrupt("return", l || {});
                      case 4:
                        if (
                          ((u = u ? +u : u),
                          !(
                            l &&
                            (null === (t = Object.keys(l)) || void 0 === t
                              ? void 0
                              : t.length) > 0 &&
                            (null === (d = l) || void 0 === d
                              ? void 0
                              : d.type) === r &&
                            (null === (n = l) || void 0 === n
                              ? void 0
                              : n.classifyId) === u
                          ))
                        ) {
                          a.next = 7;
                          break;
                        }
                        return a.abrupt("return", l);
                      case 7:
                        if (
                          (null !== (b = l = l || {}) &&
                            void 0 !== b &&
                            b.uniqueId) ||
                          !r ||
                          !u
                        ) {
                          a.next = 16;
                          break;
                        }
                        return (
                          (a.next = 11),
                          c.get_medal_config({ type: r, classify_id: +u })
                        );
                      case 11:
                        ((p = a.sent),
                          (h = Object(i.a)(p, 2)),
                          (g = h[0]),
                          h[1],
                          g &&
                            (l.uniqueId =
                              null === g || void 0 === g
                                ? void 0
                                : null === (v = g.data) || void 0 === v
                                  ? void 0
                                  : v.id));
                      case 16:
                        return (
                          (l.hreffrom = Object(s.x)("hreffrom") || "0"),
                          (l.vip_custom_field = "25_"
                            .concat(u, ",29_")
                            .concat(
                              null === (m = l) || void 0 === m
                                ? void 0
                                : m.hreffrom,
                              ",38_",
                            )
                            .concat(
                              (null === (A = l) || void 0 === A
                                ? void 0
                                : A.uniqueId) || "",
                            )),
                          (l.musicRecommend_custom_field = ""
                            .concat(
                              (null === (o = l) || void 0 === o
                                ? void 0
                                : o.uniqueId) || "",
                              "__",
                            )
                            .concat(
                              null === (f = l) || void 0 === f
                                ? void 0
                                : f.hreffrom,
                              "__",
                            )
                            .concat(r, "__")
                            .concat(u)),
                          a.abrupt("return", l)
                        );
                      case 22:
                        return (
                          (a.prev = 22),
                          (a.t0 = a.catch(1)),
                          console.error("getUnitTakingInfo error", a.t0),
                          a.abrupt("return", l)
                        );
                      case 26:
                      case "end":
                        return a.stop();
                    }
                },
                a,
                null,
                [[1, 22]],
              );
            }),
          );
          return function (e) {
            return a.apply(this, arguments);
          };
        })();
    },
    9: function (a, e) {},
    a005797a: function (a, e, r) {
      "use strict";
      var i = r("66b76edf"),
        u = r("e7ea4b7d"),
        t = r("b5a01023"),
        s = r("ffb3b631"),
        d = r.n(s),
        n = r("7f413f5c"),
        b = r.n(n),
        m = r("adcb4b68"),
        A = r("14df1cbe"),
        N = r("19afab88"),
        o = r("c14c7885"),
        c = (function () {
          function a() {
            Object(N.a)(this, a);
          }
          return (
            Object(o.a)(a, null, [
              {
                key: "get",
                value: function (a, e) {
                  var r = new RegExp("(^| )" + a + "=([^;]*)(;|$)"),
                    i = document.cookie.match(r);
                  if (i) {
                    if (e) {
                      var u = i[2].split("&"),
                        t = null;
                      return (
                        u.forEach(function (a) {
                          a.split("=")[0] === e && (t = a.split("=")[1]);
                        }),
                        unescape(t)
                      );
                    }
                    return unescape(i[2]);
                  }
                  return null;
                },
              },
            ]),
            a
          );
        })(),
        l = r("c2427b21"),
        f = r("2e30edd8"),
        p = r("3b6ec9d9"),
        h = r.n(p),
        g = r("1093ea62"),
        v = (r("70b5e01e"), r("970eadb0"));
      function w() {
        w = function () {
          return e;
        };
        var a,
          e = {},
          r = Object.prototype,
          i = r.hasOwnProperty,
          u =
            Object.defineProperty ||
            function (a, e, r) {
              a[e] = r.value;
            },
          t = "function" == typeof Symbol ? Symbol : {},
          s = t.iterator || "@@iterator",
          d = t.asyncIterator || "@@asyncIterator",
          n = t.toStringTag || "@@toStringTag";
        function b(a, e, r) {
          return (
            Object.defineProperty(a, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            a[e]
          );
        }
        try {
          b({}, "");
        } catch (a) {
          b = function (a, e, r) {
            return (a[e] = r);
          };
        }
        function m(a, e, r, i) {
          var t = e && e.prototype instanceof p ? e : p,
            s = Object.create(t.prototype),
            d = new I(i || []);
          return (u(s, "_invoke", { value: C(a, r, d) }), s);
        }
        function A(a, e, r) {
          try {
            return { type: "normal", arg: a.call(e, r) };
          } catch (a) {
            return { type: "throw", arg: a };
          }
        }
        e.wrap = m;
        var N = "suspendedStart",
          o = "suspendedYield",
          c = "executing",
          l = "completed",
          f = {};
        function p() {}
        function h() {}
        function g() {}
        var v = {};
        b(v, s, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          O = y && y(y(S([])));
        O && O !== r && i.call(O, s) && (v = O);
        var k = (g.prototype = p.prototype = Object.create(v));
        function j(a) {
          ["next", "throw", "return"].forEach(function (e) {
            b(a, e, function (a) {
              return this._invoke(e, a);
            });
          });
        }
        function x(a, e) {
          function r(u, t, s, d) {
            var n = A(a[u], a, t);
            if ("throw" !== n.type) {
              var b = n.arg,
                m = b.value;
              return m && "object" == typeof m && i.call(m, "__await")
                ? e.resolve(m.__await).then(
                    function (a) {
                      r("next", a, s, d);
                    },
                    function (a) {
                      r("throw", a, s, d);
                    },
                  )
                : e.resolve(m).then(
                    function (a) {
                      ((b.value = a), s(b));
                    },
                    function (a) {
                      return r("throw", a, s, d);
                    },
                  );
            }
            d(n.arg);
          }
          var t;
          u(this, "_invoke", {
            value: function (a, i) {
              function u() {
                return new e(function (e, u) {
                  r(a, i, e, u);
                });
              }
              return (t = t ? t.then(u, u) : u());
            },
          });
        }
        function C(e, r, i) {
          var u = N;
          return function (t, s) {
            if (u === c) throw Error("Generator is already running");
            if (u === l) {
              if ("throw" === t) throw s;
              return { value: a, done: !0 };
            }
            for (i.method = t, i.arg = s; ;) {
              var d = i.delegate;
              if (d) {
                var n = _(d, i);
                if (n) {
                  if (n === f) continue;
                  return n;
                }
              }
              if ("next" === i.method) i.sent = i._sent = i.arg;
              else if ("throw" === i.method) {
                if (u === N) throw ((u = l), i.arg);
                i.dispatchException(i.arg);
              } else "return" === i.method && i.abrupt("return", i.arg);
              u = c;
              var b = A(e, r, i);
              if ("normal" === b.type) {
                if (((u = i.done ? l : o), b.arg === f)) continue;
                return { value: b.arg, done: i.done };
              }
              "throw" === b.type &&
                ((u = l), (i.method = "throw"), (i.arg = b.arg));
            }
          };
        }
        function _(e, r) {
          var i = r.method,
            u = e.iterator[i];
          if (u === a)
            return (
              (r.delegate = null),
              ("throw" === i &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = a),
                _(e, r),
                "throw" === r.method)) ||
                ("return" !== i &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + i + "' method",
                  )))),
              f
            );
          var t = A(u, e.iterator, r.arg);
          if ("throw" === t.type)
            return (
              (r.method = "throw"),
              (r.arg = t.arg),
              (r.delegate = null),
              f
            );
          var s = t.arg;
          return s
            ? s.done
              ? ((r[e.resultName] = s.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = a)),
                (r.delegate = null),
                f)
              : s
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              f);
        }
        function L(a) {
          var e = { tryLoc: a[0] };
          (1 in a && (e.catchLoc = a[1]),
            2 in a && ((e.finallyLoc = a[2]), (e.afterLoc = a[3])),
            this.tryEntries.push(e));
        }
        function E(a) {
          var e = a.completion || {};
          ((e.type = "normal"), delete e.arg, (a.completion = e));
        }
        function I(a) {
          ((this.tryEntries = [{ tryLoc: "root" }]),
            a.forEach(L, this),
            this.reset(!0));
        }
        function S(e) {
          if (e || "" === e) {
            var r = e[s];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var u = -1,
                t = function r() {
                  for (; ++u < e.length;)
                    if (i.call(e, u))
                      return ((r.value = e[u]), (r.done = !1), r);
                  return ((r.value = a), (r.done = !0), r);
                };
              return (t.next = t);
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return (
          (h.prototype = g),
          u(k, "constructor", { value: g, configurable: !0 }),
          u(g, "constructor", { value: h, configurable: !0 }),
          (h.displayName = b(g, n, "GeneratorFunction")),
          (e.isGeneratorFunction = function (a) {
            var e = "function" == typeof a && a.constructor;
            return (
              !!e &&
              (e === h || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (a) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(a, g)
                : ((a.__proto__ = g), b(a, n, "GeneratorFunction")),
              (a.prototype = Object.create(k)),
              a
            );
          }),
          (e.awrap = function (a) {
            return { __await: a };
          }),
          j(x.prototype),
          b(x.prototype, d, function () {
            return this;
          }),
          (e.AsyncIterator = x),
          (e.async = function (a, r, i, u, t) {
            void 0 === t && (t = Promise);
            var s = new x(m(a, r, i, u), t);
            return e.isGeneratorFunction(r)
              ? s
              : s.next().then(function (a) {
                  return a.done ? a.value : s.next();
                });
          }),
          j(k),
          b(k, n, "Generator"),
          b(k, s, function () {
            return this;
          }),
          b(k, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (a) {
            var e = Object(a),
              r = [];
            for (var i in e) r.push(i);
            return (
              r.reverse(),
              function a() {
                for (; r.length;) {
                  var i = r.pop();
                  if (i in e) return ((a.value = i), (a.done = !1), a);
                }
                return ((a.done = !0), a);
              }
            );
          }),
          (e.values = S),
          (I.prototype = {
            constructor: I,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = a),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = a),
                this.tryEntries.forEach(E),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    i.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = a);
            },
            stop: function () {
              this.done = !0;
              var a = this.tryEntries[0].completion;
              if ("throw" === a.type) throw a.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function u(i, u) {
                return (
                  (d.type = "throw"),
                  (d.arg = e),
                  (r.next = i),
                  u && ((r.method = "next"), (r.arg = a)),
                  !!u
                );
              }
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var s = this.tryEntries[t],
                  d = s.completion;
                if ("root" === s.tryLoc) return u("end");
                if (s.tryLoc <= this.prev) {
                  var n = i.call(s, "catchLoc"),
                    b = i.call(s, "finallyLoc");
                  if (n && b) {
                    if (this.prev < s.catchLoc) return u(s.catchLoc, !0);
                    if (this.prev < s.finallyLoc) return u(s.finallyLoc);
                  } else if (n) {
                    if (this.prev < s.catchLoc) return u(s.catchLoc, !0);
                  } else {
                    if (!b)
                      throw Error("try statement without catch or finally");
                    if (this.prev < s.finallyLoc) return u(s.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (a, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var u = this.tryEntries[r];
                if (
                  u.tryLoc <= this.prev &&
                  i.call(u, "finallyLoc") &&
                  this.prev < u.finallyLoc
                ) {
                  var t = u;
                  break;
                }
              }
              t &&
                ("break" === a || "continue" === a) &&
                t.tryLoc <= e &&
                e <= t.finallyLoc &&
                (t = null);
              var s = t ? t.completion : {};
              return (
                (s.type = a),
                (s.arg = e),
                t
                  ? ((this.method = "next"), (this.next = t.finallyLoc), f)
                  : this.complete(s)
              );
            },
            complete: function (a, e) {
              if ("throw" === a.type) throw a.arg;
              return (
                "break" === a.type || "continue" === a.type
                  ? (this.next = a.arg)
                  : "return" === a.type
                    ? ((this.rval = this.arg = a.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === a.type && e && (this.next = e),
                f
              );
            },
            finish: function (a) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === a)
                  return (this.complete(r.completion, r.afterLoc), E(r), f);
              }
            },
            catch: function (a) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === a) {
                  var i = r.completion;
                  if ("throw" === i.type) {
                    var u = i.arg;
                    E(r);
                  }
                  return u;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, r, i) {
              return (
                (this.delegate = { iterator: S(e), resultName: r, nextLoc: i }),
                "next" === this.method && (this.arg = a),
                f
              );
            },
          }),
          e
        );
      }
      (r.d(e, "a", function () {
        return y;
      }),
        r.d(e, "K", function () {
          return O;
        }),
        r.d(e, "J", function () {
          return x;
        }),
        r.d(e, "I", function () {
          return C;
        }),
        r.d(e, "ab", function () {
          return _;
        }),
        r.d(e, "db", function () {
          return I;
        }),
        r.d(e, "x", function () {
          return P;
        }),
        r.d(e, "t", function () {
          return M;
        }),
        r.d(e, "v", function () {
          return R;
        }),
        r.d(e, "o", function () {
          return D;
        }),
        r.d(e, "r", function () {
          return B;
        }),
        r.d(e, "b", function () {
          return U;
        }),
        r.d(e, "d", function () {
          return G;
        }),
        r.d(e, "W", function () {
          return Y;
        }),
        r.d(e, "l", function () {
          return Q;
        }),
        r.d(e, "w", function () {
          return F;
        }),
        r.d(e, "p", function () {
          return J;
        }),
        r.d(e, "Q", function () {
          return K;
        }),
        r.d(e, "S", function () {
          return X;
        }),
        r.d(e, "e", function () {
          return Z;
        }),
        r.d(e, "T", function () {
          return $;
        }),
        r.d(e, "q", function () {
          return aa;
        }),
        r.d(e, "Z", function () {
          return ea;
        }),
        r.d(e, "i", function () {
          return ra;
        }),
        r.d(e, "z", function () {
          return ia;
        }),
        r.d(e, "cb", function () {
          return ta;
        }),
        r.d(e, "E", function () {
          return da;
        }),
        r.d(e, "B", function () {
          return na;
        }),
        r.d(e, "A", function () {
          return ba;
        }),
        r.d(e, "U", function () {
          return ma;
        }),
        r.d(e, "F", function () {
          return Aa;
        }),
        r.d(e, "G", function () {
          return Na;
        }),
        r.d(e, "n", function () {
          return oa;
        }),
        r.d(e, "m", function () {
          return ca;
        }),
        r.d(e, "N", function () {
          return la;
        }),
        r.d(e, "M", function () {
          return fa;
        }),
        r.d(e, "X", function () {
          return pa;
        }),
        r.d(e, "h", function () {
          return ha;
        }),
        r.d(e, "H", function () {
          return va;
        }),
        r.d(e, "bb", function () {
          return wa;
        }),
        r.d(e, "O", function () {
          return ya;
        }),
        r.d(e, "j", function () {
          return ka;
        }),
        r.d(e, "k", function () {
          return ja;
        }),
        r.d(e, "s", function () {
          return xa;
        }),
        r.d(e, "Y", function () {
          return Ca;
        }),
        r.d(e, "y", function () {
          return _a;
        }),
        r.d(e, "R", function () {
          return La;
        }),
        r.d(e, "V", function () {
          return Ia;
        }),
        r.d(e, "u", function () {
          return Sa;
        }),
        r.d(e, "D", function () {
          return Pa;
        }),
        r.d(e, "L", function () {
          return Ta;
        }),
        r.d(e, "C", function () {
          return Ma;
        }),
        r.d(e, "P", function () {
          return Ra;
        }),
        r.d(e, "g", function () {
          return za;
        }),
        r.d(e, "c", function () {
          return Ya;
        }),
        r.d(e, "f", function () {
          return Va;
        }));
      var y = !1,
        O = d.a.isInClient() || y,
        k = d.a.isAndroid,
        j = d.a.isIOS,
        x = j || l.a.iphone,
        C =
          window.navigator &&
          window.navigator.userAgent &&
          window.navigator.userAgent.toLowerCase().indexOf("openharmony") > -1,
        _ = function (a, e) {
          var r = a || [];
          if (!C) return r;
          var i,
            u =
              (i =
                null === e || void 0 === e
                  ? void 0
                  : e.activityCenterExcludedSlotIds) && "string" === typeof i
                ? new Set(
                    i
                      .split("|")
                      .map(function (a) {
                        return a.trim();
                      })
                      .filter(Boolean),
                  )
                : new Set();
          return u.size
            ? r.filter(function (a) {
                return (
                  null == (null === a || void 0 === a ? void 0 : a.slot_id) ||
                  !u.has(String(a.slot_id).trim())
                );
              })
            : r;
        },
        L = !1;
      if (x) {
        var E = window.navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
        L = E && E[1] > 9;
      }
      var I = {
          isInClient: O,
          isAndroid: k,
          isKgIOS: j,
          isIOS: x,
          isltIOS9: L,
          songInfo: {},
          collectionVer: { version: void 0, userid: 0 },
          initTab: void 0,
          player: null,
          getStyleVersion: (function () {
            var a = Object(t.a)(
              w().mark(function a() {
                return w().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (!~window.location.href.indexOf("useKg12Style=1")) {
                          a.next = 4;
                          break;
                        }
                        return a.abrupt("return", 12);
                      case 4:
                        if (!~window.location.href.indexOf("useKg11Style=1")) {
                          a.next = 8;
                          break;
                        }
                        return a.abrupt("return", 11);
                      case 8:
                        if (!O) {
                          a.next = 12;
                          break;
                        }
                        return a.abrupt(
                          "return",
                          da().then(function (a) {
                            return a
                              ? a >= 11732 && a <= 11789
                                ? 12
                                : Number(String(a).slice(0, 2))
                              : 11;
                          }),
                        );
                      case 12:
                        return a.abrupt("return", 11);
                      case 13:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function () {
              return a.apply(this, arguments);
            };
          })(),
        },
        S = {
          padStart: function (a) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "0";
            if (this.padStart) return this.padStart(a, e);
            var r = String(this);
            if (r.length < a) for (var i = 0; i < a - 1; i++) r = e + r;
            return r;
          },
        };
      function P(a, e) {
        for (
          var r = (
              e ? e.substring(1) : window.location.search.substring(1)
            ).split("&"),
            i = 0;
          i < r.length;
          i++
        ) {
          var u = r[i].split("=");
          if (u[0] === a) return u[1];
        }
        return "";
      }
      var T = function () {
          return O ? A.a.client : c.get("KuGoo", "a_id") || A.a.h5;
        },
        H = null;
      function M() {
        var a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return new Promise(function (e) {
          !H || a
            ? b()(T(), function (a) {
                ((H = a), e(a));
              })
            : e(H);
        });
      }
      function R() {
        return new Promise(function (a) {
          O
            ? d.a.mobileCall(A.f.getMobileInfo, null, function (e) {
                return a(e);
              })
            : a({});
        });
      }
      function D(a) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return "number" !== typeof a && "string" !== typeof a
          ? ""
          : S.padStart.call(String(a), e, 0);
      }
      function B(a) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "YYYY-MM-DD";
        if (
          !a ||
          ("string" === typeof a &&
            isNaN(new Date(a.replace(/-/g, "/")).getTime()))
        )
          return null;
        var r = new Date("string" === typeof a ? a.replace(/-/g, "/") : a),
          i = r.getFullYear(),
          u = r.getMonth() + 1,
          t = r.getDate(),
          s = r.getHours(),
          d = r.getMinutes(),
          n = r.getSeconds();
        return e
          .replace("YYYY", i)
          .replace("MM", D(u, 2))
          .replace("DD", D(t, 2))
          .replace("hh", D(s, 2))
          .replace("mm", D(d, 2))
          .replace("ss", D(n, 2));
      }
      var U = {
          show: function () {
            var a =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e = document.querySelector(".kg-loading-wrap");
            (e && e.remove(),
              Object(m.a)({
                msg: a.msg || "\u52a0\u8f7d\u4e2d",
                type: a.type || "inline",
                popMode: !0,
                popConfig: { showBg: !0, containerBgColor: "default" },
                autoWarn:
                  "undefined" === typeof a.showLongLoad || a.showLongLoad,
                warnConfig: {
                  time: 1e4,
                  msg: "\u7f13\u6162\u52a0\u8f7d\u4e2d",
                },
              }));
          },
          hide: function () {
            var a = document.querySelector(".kg-loading-wrap");
            a && a.remove();
          },
        },
        q = [],
        G = function (a, e) {
          var i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            u = i.noAutoHide,
            t = void 0 !== u && u,
            s = i.iconType,
            d = void 0 === s ? "" : s,
            n = i.canThroughClick,
            b = void 0 === n || n;
          if (document.getElementById("toastCover"))
            q.push({
              word: a,
              delay: e,
              noAutoHide: t,
              iconType: d,
              canThroughClick: b,
            });
          else {
            var m = document.createElement("div");
            ((m.id = "toastCover"),
              (m.style.cssText =
                "position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;z-index:100000;text-align:center;".concat(
                  b ? "pointer-events:none;" : "",
                )));
            var A = document.createElement("div");
            switch (((A.id = "toastText"), d)) {
              case "success":
                A.style.cssText =
                  "background:rgba(0,0,0,0.6);border-radius:0.111111rem;color:#fff;min-width:3.208333rem;max-width:60%;line-height:1.5;letter-spacing:1px;box-sizing:border-box;padding: 0.430556rem;margin:auto;font-size:0.361111rem;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;";
                var N = document.createElement("img");
                ((N.style.cssText =
                  "width:0.777778rem;height:0.777778rem;display:block;point-events:none;margin-bottom:0.25rem;"),
                  (N.src = r("4aa60406")),
                  (N.alt = ""),
                  A.appendChild(N));
                var o = document.createElement("span");
                ((o.innerText = a), A.appendChild(o));
                break;
              default:
                ((A.style.cssText =
                  "background:rgba(0,0,0,0.6);border-radius:0.111111rem;color:#fff;max-width:60%;line-height: 1.5;letter-spacing:1px;padding:0.24rem 0.54rem;margin:auto;font-size: 0.4rem;margin: auto;display:inline-flex;justify-content:center;align-items:center;"),
                  (A.innerText = a));
            }
            if (
              (m.appendChild(A),
              document.body.appendChild(m),
              (e = e || 2e3),
              !t)
            )
              var c = setTimeout(function () {
                (clearTimeout(c),
                  document.querySelector("#toastCover") &&
                    m.parentNode.removeChild(m),
                  z());
              }, e);
          }
        };
      function z() {
        if (q.length) {
          var a = q.shift();
          G(a.word, a.delay, {
            noAutoHide: a.noAutoHide,
            iconType: a.iconType,
            canThroughClick: a.canThroughClick,
          });
        }
      }
      function Y(a, e) {
        return a ? (a / 72).toFixed(6) + (e ? "" : "rem") : 0;
      }
      var Q = function (a) {
        var e = document.documentElement.style.fontSize.replace(/px/, "");
        return (a / 720) * 10 * Number(e);
      };
      function F(a) {
        var e;
        a || (a = window.location.href);
        var r = a.indexOf("#"),
          i = a.indexOf("?");
        if ((~i && (e = -1 === r ? a.slice(i) : a.slice(i, r)), !e)) return {};
        var u = {};
        return (
          e
            .slice(1)
            .split("&")
            .forEach(function (a) {
              (u || (u = {}),
                (u[a.split("=")[0]] = decodeURIComponent(a.split("=")[1])));
            }),
          u
        );
      }
      function J(a, e) {
        if (!a || !e) return a;
        var r = a.indexOf("?"),
          i = a.indexOf("#"),
          u = "",
          t = "",
          s = "";
        -1 !== i && r > i
          ? ((u = a.slice(0, i)), (s = a.slice(i)))
          : (-1 === r
              ? (u = a)
              : ((u = a.slice(0, r)),
                (t = -1 === i ? a.slice(r) : a.slice(r, i))),
            -1 !== i && (s = a.slice(i)));
        var d = {},
          n = "";
        return (
          t &&
            t
              .slice(1)
              .split("&")
              .forEach(function (a) {
                d[a.split("=")[0]] = decodeURIComponent(a.split("=")[1]);
              }),
          Object.assign(d, e),
          Object.keys(d).forEach(function (a) {
            n += "&".concat(a, "=").concat(encodeURIComponent(d[a]));
          }),
          u + (n = "?" + n.slice(1)) + s
        );
      }
      function V(a, e) {
        if (0 === a.indexOf("http")) return a;
        var r = window.location.pathname.slice(
          0,
          window.location.pathname.lastIndexOf("/"),
        );
        return J(window.location.origin + r + a, e);
      }
      function K(a) {
        var e = ""
          .concat(
            x
              ? "https://miniapp.kugou.com/node/v2?type=3&id=327"
              : "https://miniapp.kugou.com/node/v2?type=3&id=326",
            "&pageid=index&songid=",
          )
          .concat(
            null === a || void 0 === a ? void 0 : a.mixsongid,
            "&isHideTitleBar=",
          )
          .concat(
            void 0 === (null === a || void 0 === a ? void 0 : a.isHideTitleBar)
              ? 0
              : a.isHideTitleBar,
            "&source=7&traceid=medal&tab=",
          )
          .concat(a.tab || 0, "&auto_play_ad=")
          .concat(1 === a.tab ? 1 : 0, "&auto_show_paymodal=")
          .concat(1 === a.auto_show_paymodal ? 1 : 0, "&uni_posid=")
          .concat(
            (null === a || void 0 === a ? void 0 : a.uni_posid) || "",
            "&medal_custom_field=",
          )
          .concat(
            (null === a || void 0 === a
              ? void 0
              : a.musicRecommend_custom_field) || "",
          );
        O && d.a.mobileCall(A.f.openHippy, { url: e });
      }
      function X(a, e) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        if (a && 0 !== a.indexOf("http")) {
          var i = P("hreffrom");
          i && ((e = e || {}).hreffrom = i);
        } else a = Z(a);
        O
          ? d.a.mobileCall(A.f.openURL, { isFullScreen: r, url: V(a, e) })
          : (window.location.href = V(a, e));
      }
      var W,
        Z = function (a) {
          if (!a) return a;
          var e = P("hreffrom");
          if (e) {
            if (0 !== a.indexOf("http")) return a;
            var r,
              i =
                (null === a || void 0 === a
                  ? void 0
                  : null === (r = a.split("?")) || void 0 === r
                    ? void 0
                    : r[0]) || "";
            if (
              i &&
              (-1 !== i.indexOf("page/v-21847b5d") ||
                -1 !== i.indexOf("ssr/medal-page") ||
                -1 !== i.indexOf("puzzle/v-af504f36"))
            )
              return (function (a, e, r) {
                try {
                  a = a || window.location.href;
                  var i = "",
                    u = a.indexOf("#");
                  -1 !== u && ((i = a.slice(u)), (a = a.slice(0, u)));
                  var t = new RegExp("([?&])".concat(e, "=[^&]*"));
                  if (t.test(a))
                    a = a.replace(t, "$1".concat(e, "=").concat(r));
                  else {
                    var s = -1 !== a.indexOf("?") ? "&" : "?";
                    a = a + s + e + "=" + r;
                  }
                  return a + i;
                } catch (d) {
                  return (console.error("changeParameter error", d), a);
                }
              })(a, "hreffrom", e);
          }
          return a;
        };
      function $() {
        var a =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = a.source_id,
          r = void 0 === e ? "224901" : e,
          i = a.custom_field,
          t = void 0 === i ? "" : i;
        Object(g.b)({
          b: "\u70b9\u51fb",
          button_id: 4001,
          page_id: 321301,
          source_id: r,
        });
        var s = "https://gateway.kugou.com/ssr_vippopup/"
          .concat(
            x ? "ios" : "index",
            "?ssr_header_param=191&entrance_source=566&source_id=",
          )
          .concat(r, "&show_vip_type=20&show_style=1&custom_field=")
          .concat(t);
        (C &&
          (s =
            "https://h5.kugou.com/payment/v-c950050e/harmony.html?pagetype=superVip&source_id="
              .concat(r, "&custom_field=")
              .concat(t)),
          O
            ? d.a.mobileCall(
                A.f.openURL,
                Object(u.a)(
                  { isFullScreen: 1, browser: C ? 4 : 17, url: s },
                  C ? {} : { enter_source: 566 },
                ),
              )
            : (window.location.href = s));
      }
      function aa(a, e) {
        var r = Number(a);
        if ("number" !== typeof r || isNaN(r)) return null;
        if (r < 1e4) return r;
        if (r >= 1e4 && r < 1e8) {
          var i = (r / 1e4).toFixed(1);
          return (
            ~i.indexOf(".0") && (i = i.slice(0, -2)),
            i + (e ? "\u4e07" : "w")
          );
        }
        var u = (r / 1e8).toFixed(1);
        return (~u.indexOf(".0") && (u = u.slice(0, -2)), u + "\u4ebf");
      }
      function ea(a) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 240;
        if (!a) return a;
        if (/\/\d{2,3}\//.test(a))
          return a.replace(/\/\d{2,3}\//, "/".concat(e, "/"));
        if (/{size}/.test(a)) return a.replace(/{size}/, e);
        var r = a.slice(a.lastIndexOf("."));
        return r ? a + "_".concat(e, "x").concat(e, "_2").concat(r) : a;
      }
      function ra(a) {
        return new Promise(function (a) {
          if (O)
            d.a.mobileCall(A.f.getMobileInfo, null, function (e) {
              a(
                !e ||
                  (j
                    ? "no" !== e.net
                    : "no" !== e.net && "4" !== String(e.net)),
              );
            });
          else {
            var e = window.navigator.onLine;
            a("boolean" !== typeof e || e);
          }
        }).then(function (e) {
          return (
            a &&
              !e &&
              G(
                j
                  ? "\u7f51\u7edc\u672a\u8fde\u63a5"
                  : "\u672a\u627e\u5230\u53ef\u7528\u7f51\u7edc",
              ),
            e
          );
        });
      }
      function ia() {
        return ua.apply(this, arguments);
      }
      function ua() {
        return (ua = Object(t.a)(
          w().mark(function a() {
            return w().wrap(function (a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return a.abrupt(
                      "return",
                      new Promise(function (a) {
                        if (O) {
                          var e = function (e) {
                            (e = "string" === typeof e ? JSON.parse(e) : e)
                              .status && Number(e.status)
                              ? a(!0)
                              : a(!1);
                          };
                          j
                            ? (window.KgMobileCall
                                ? (window.KgMobileCall.isSetWifiOnly = e)
                                : (window.KgMobileCall = { isSetWifiOnly: e }),
                              d.a.mobileCall(A.f.isSetWifiOnly))
                            : d.a.mobileCall(A.f.isSetWifiOnly, null, e);
                        } else a(!1);
                      }),
                    );
                  case 1:
                  case "end":
                    return a.stop();
                }
            }, a);
          }),
        )).apply(this, arguments);
      }
      function ta(a, e) {
        return sa.apply(this, arguments);
      }
      function sa() {
        return (sa = Object(t.a)(
          w().mark(function a(e, r) {
            return w().wrap(function (a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (
                      (a.next = 2),
                      new Promise(function (a) {
                        var i = setTimeout(function () {
                          (clearTimeout(i), r && r(), a());
                        }, e || 0);
                      })
                    );
                  case 2:
                  case "end":
                    return a.stop();
                }
            }, a);
          }),
        )).apply(this, arguments);
      }
      function da() {
        return new Promise(function (a) {
          W
            ? a(W)
            : O
              ? d.a.mobileCall(A.f.getVersion, null, function (e) {
                  1 === e.status ? ((W = e.version || 0), a(W)) : a(0);
                })
              : a(0);
        });
      }
      function na(a) {
        return "swiper-slide-id-" + a;
      }
      function ba() {
        return new Promise(function (a) {
          O
            ? d.a.mobileCall(A.f.getStatusHeight, null, function (e) {
                var r, i;
                (d.a.isIOS
                  ? ((i = e.dpTitleBarHeight - e.dpStatusBarHeight),
                    (r = e.dpStatusBarHeight))
                  : ((i = e.dpTitleBarHeight), (r = e.dpStatusBarHeight)),
                  a({ dpStatusBarHeight: r, dpTitleBarHeight: i }));
              })
            : a(null);
        });
      }
      function ma(a, e) {
        if (!a || "function" !== typeof a.toLowerCase) return "";
        "undefined" !== typeof e && (isNaN(e) || e > 1) && (e = 1);
        var r = String(a)
          .trim()
          .match(
            /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*([01]?\.?\d*))?\s*\)$/i,
          );
        if (r) {
          var i = Math.max(0, Math.min(255, Number(r[1] || 0))),
            u = Math.max(0, Math.min(255, Number(r[2] || 0))),
            t = Math.max(0, Math.min(255, Number(r[3] || 0))),
            s = "undefined" !== typeof r[4] && "" !== r[4] ? Number(r[4]) : 1;
          return (
            "undefined" !== typeof e &&
              (s = isNaN(e) ? 1 : Math.max(0, Math.min(1, Number(e)))),
            "rgba("
              .concat(i, ",")
              .concat(u, ",")
              .concat(t, ",")
              .concat(Number(s.toFixed(2)), ")")
          );
        }
        var d = a.toLowerCase();
        if (
          d &&
          /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(
            d,
          )
        ) {
          var n,
            b = "",
            m = "ff";
          if (3 === (d = d.slice(1)).length)
            for (var A = 0; A < d.length; A++)
              b += d.slice(A, A + 1).concat(d.slice(A, A + 1));
          else if (4 === d.length) {
            ((m = d.slice(-1) + d.slice(-1)), (d = d.slice(0, -1)));
            for (var N = 0; N < d.length; N++)
              b += d.slice(N, N + 1).concat(d.slice(N, N + 1));
          } else
            6 === d.length
              ? (b = d)
              : 8 === d.length && ((m = d.slice(0, 2)), (b = d.slice(2)));
          n =
            "undefined" === typeof e
              ? (parseInt("0x" + m) / 255).toFixed(2)
              : e;
          for (var o = [], c = 0; c < 6; c += 2)
            o.push(parseInt("0x" + b.slice(c, c + 2)));
          return "rgba(" + o.join(",") + "," + n + ")";
        }
        return d;
      }
      function Aa() {
        O ? Na() : window.history.back();
      }
      function Na() {
        d.a.isIOS
          ? d.a.mobileCall(158, { type: 6 })
          : d.a.mobileCall(247, { count: 1 });
      }
      var oa = function (a, e) {
          var r = document.createElement("canvas").getContext("2d"),
            i = r.measureText(a).width,
            u = r.measureText("\u2026").width;
          if (i <= e || e <= u) return a;
          for (var t = a.length; i >= e - u && t-- > 0;)
            ((a = a.slice(0, t)), (i = r.measureText(a).width));
          return a + "\u2026";
        },
        ca = function (a, e) {
          for (
            var r = 0, i = 0;
            i < (null === a || void 0 === a ? void 0 : a.length);
            i++
          ) {
            var u = a[i];
            if (
              Number(
                null === u || void 0 === u ? void 0 : u.ds2nd_classify_name,
              ) === Number(e)
            ) {
              r = i;
              break;
            }
          }
          return r;
        };
      var la = function (a) {
          var e = navigator.userAgent
            .toLowerCase()
            .match(/cpu iphone os (.*?) like mac os/);
          return !!e && e[1].split("_")[0] - 0 <= (a || 10);
        },
        fa = function (a) {
          var e = navigator.userAgent.toLowerCase().match(/android [\d._]+/);
          if (!e) return !1;
          var r = (e + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".");
          return (r = parseInt(r.split(".")[0])) <= (a || 6);
        },
        pa = function (a) {
          return "song_publish" === a.type
            ? "\u53d1\u884c\u52cb\u7ae0"
            : "song_publisher" === a.type
              ? "\u53d1\u884c\u5b98"
              : a.name;
        },
        ha = function (a) {
          var e = a.title,
            r = a.startDate,
            i = a.endDate,
            u = a.UNTIL,
            t = a.repeatDuration,
            s = void 0 === t ? 300 : t;
          return new Promise(function (a) {
            d.a.isIOS
              ? d.a.mobileCall(
                  423,
                  {
                    title: e,
                    startDate: r,
                    endDate: i,
                    isRepeat: 2,
                    preNotifyTime: 0,
                    repeatDuration: s,
                  },
                  function (e) {
                    a(2 === e.errcode);
                  },
                )
              : ((window.actBtnCalendarCallback = function (e) {
                  var r, i;
                  console.log("actBtnCalendarCallback", e);
                  try {
                    e = JSON.parse(e);
                  } catch (u) {}
                  (a(
                    1 ===
                      (null === (r = e) || void 0 === r ? void 0 : r.status),
                  ),
                    1 === (null === (i = e) || void 0 === i ? void 0 : i.status)
                      ? G("\u5df2\u6dfb\u52a0\u81f3\u65e5\u5386")
                      : G(
                          "\u6dfb\u52a0\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5",
                        ));
                }),
                d.a.mobileCall(
                  1085,
                  {
                    title: e,
                    beginTime: 1e3 * r,
                    endTime: 1e3 * i,
                    allDay: !1,
                    type: 2,
                    rrule: "FREQ=DAILY;UNTIL=".concat(u),
                    callback: "actBtnCalendarCallback",
                  },
                  function (a) {},
                ));
          });
        },
        ga = null;
      var va = function (a) {
          return new Promise(function (e) {
            a && a.length
              ? new Promise(function (a) {
                  ga
                    ? a(ga)
                    : O
                      ? d.a.mobileCall(A.f.getVersion, null, function (e) {
                          var r,
                            i = null;
                          if ("string" === typeof e)
                            try {
                              i = JSON.parse(e);
                            } catch (u) {
                              ((i = null), console.error(u));
                            }
                          else i = e;
                          if (
                            1 ===
                            (null === (r = i) || void 0 === r
                              ? void 0
                              : r.status)
                          )
                            return ((ga = i), void a(i));
                          a(null);
                        })
                      : a(null);
                }).then(function (r) {
                  if ((console.log("versionInfo", r), r)) {
                    var i = a.find(function (a) {
                      return a.platform === r.platform;
                    });
                    e(!!i && r.version >= i.version);
                  } else e(!1);
                })
              : e(!1);
          });
        },
        wa = function (a) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 30,
            r = arguments.length > 2 ? arguments[2] : void 0,
            i = function () {
              var i = null === a || void 0 === a ? void 0 : a.scrollHeight,
                u = null === a || void 0 === a ? void 0 : a.clientHeight;
              (null === a || void 0 === a ? void 0 : a.scrollTop) + u >=
                i - e &&
                r &&
                r();
            };
          return (
            a && a.addEventListener("scroll", i),
            function () {
              a && a.removeEventListener("scroll", i);
            }
          );
        },
        ya = function (a) {
          return a < 1e4
            ? a
            : a < 1e8
              ? (Math.floor((a / 1e4) * 10) / 10).toFixed(1) + "\u4e07"
              : (Math.floor((a / 1e8) * 10) / 10).toFixed(1) + "\u4ebf";
        },
        Oa = { default: 0 },
        ka = function () {
          var a =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "default",
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1e3;
          return (
            !(
              null !== Oa &&
              void 0 !== Oa &&
              Oa[a] &&
              Date.now() -
                ((null === Oa || void 0 === Oa ? void 0 : Oa[a]) || 0) <
                e
            ) && ((Oa[a] = Date.now()), !0)
          );
        },
        ja = function (a, e) {
          if (!a) return a;
          var r = a.match(
            /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d*(?:\.\d+)?)?\)$/,
          );
          if (r) {
            var u = r,
              t = Object(i.a)(u, 5),
              s = t[1],
              d = t[2],
              n = t[3],
              b = t[4];
            return "rgba("
              .concat(s, ", ")
              .concat(d, ", ")
              .concat(n, ", ")
              .concat(void 0 !== e ? e : b || 1, ")");
          }
          if ((r = a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))) {
            var m = r,
              A = Object(i.a)(m, 4),
              N = A[1],
              o = A[2],
              c = A[3];
            return "rgba("
              .concat(N, ", ")
              .concat(o, ", ")
              .concat(c, ", ")
              .concat(void 0 !== e ? e : 1, ")");
          }
          return a;
        },
        xa = function (a) {
          if (!a) return null;
          var e =
              a.mixId ||
              a.mixSongId ||
              a.mixsongId ||
              a.mixsongid ||
              a.album_audio_id ||
              0,
            r = a.extra || {},
            i = {
              filename: a.filename || a.fileName || "",
              hash: a.hash || "",
              filesize: a.filesize || a.fileSize || 0,
              bitrate: a.bitrate || a.bitRate || 0,
              extname: a.extname || a.extName || "",
              duration: a.duration || a.timeLength || a.timelength || 0,
              timelength: a.duration || a.timeLength || a.timelength || 0,
              mixId: e,
              privilege: a.privilege,
              mvhash: a.mvhash || "",
              sqhash: a.sqhash || r.sqhash || "",
              trans_param: a.trans_param || {},
              "128hash": a["128hash"] || r["128hash"] || "",
              "128filesize": a["128filesize"] || r["128filesize"] || 0,
              "128bitrate": a["128bitrate"] || r["128bitrate"] || 0,
              "128timelength": a["128timelength"] || r["128timelength"] || 0,
              "128privilege": a["128privilege"] || r["128privilege"] || void 0,
              sqfilesize: a.sqfilesize || r.sqfilesize || 0,
              sqbitrate: a.sqbitrate || r.sqbitrate || 0,
              sqtimelength: a.sqtimelength || r.sqtimelength || 0,
              sqprivilege: a.sqprivilege || r.sqprivilege || void 0,
              "320hash": a["320hash"] || r["320hash"] || "",
              "320filesize": a["320filesize"] || r["320filesize"] || 0,
              "320bitrate": a["320bitrate"] || r["320bitrate"] || 0,
              "320timelength": a["320timelength"] || r["320timelength"] || 0,
              "320privilege": a["320privilege"] || r["320privilege"] || void 0,
              hash_high: a.highhash || r.highhash || "",
              filesize_high: a.highfilesize || r.highfilesize || 0,
              timelength_high: a.hightimelength || r.hightimelength || 0,
              bitrate_high: a.highbitrate || r.highbitrate || 0,
              privilege_high: a.highprivilege || r.highprivilege || void 0,
              store_type: Object(f.a)(a.store_type) ? void 0 : a.store_type,
              pay_type: Object(f.a)(a.pay_type) ? void 0 : a.pay_type,
              fail_process: Object(f.a)(a.fail_process)
                ? void 0
                : a.fail_process,
              old_cpy: Object(f.a)(a.old_cpy) ? void 0 : a.old_cpy,
              album_id: a.album_id || a.albumId || a.albumid || 0,
              audition: 3,
              m4afilesize: Object(f.a)(a.m4afilesize) ? void 0 : a.m4afilesize,
              feetype: 0,
              isfirst: 0,
              album_audio_id: e,
            };
          return (
            Object.keys(i).forEach(function (a) {
              "undefined" === typeof i[a] && delete i[a];
            }),
            i
          );
        },
        Ca = function (a, e) {
          var r = document.createElement("div");
          (document.body.appendChild(r),
            h.a.render(a, r),
            e &&
              e(function () {
                (r && h.a.unmountComponentAtNode(r), r.remove(), (r = null));
              }));
        },
        _a = function () {
          var a =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            null !== a && void 0 !== a && a._sonic && delete a._sonic,
            J(
              "https://m.kugou.com/ssr/medal-page/home?ssr_header_param=266431&isHideTitleBar=1",
              a,
            )
          );
        },
        La = function () {
          var a =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          X(_a(a));
        },
        Ea = {},
        Ia = function (a) {
          return Promise.all(
            a.map(function (a) {
              return (function (a, e) {
                return new Promise(function (r, i) {
                  if (!Ea[a] || e) {
                    var u = new Image();
                    ((u.crossOrigin = "Anonymous"),
                      (u.onload = function () {
                        ((Ea[a] = u), r(u));
                      }),
                      (u.onerror = function () {
                        r(null);
                      }),
                      (u.src = a));
                  } else r(Ea[a]);
                });
              })(a);
            }),
          );
        },
        Sa = function (a) {
          try {
            var e = "";
            if (a && (a.message || a.stack))
              e = "Msg:".concat(a.message, " Stack:").concat(a.stack);
            else if ("string" === typeof a) e = a;
            else
              try {
                e = JSON.stringify(a);
              } catch (r) {
                e = a;
              }
            return e;
          } catch (i) {
            return (console.error("getErrorMsg error", i), a);
          }
        },
        Pa = function (a, e) {
          try {
            return new URL(a).searchParams.get(e);
          } catch (r) {
            return (console.error("getUrlParam error", r), null);
          }
        },
        Ta = x ? la(12) : fa(7),
        Ha = "";
      function Ma(a) {
        if (Ha) return Ha;
        try {
          var e = window.navigator.userAgent,
            r = (parseInt(1e6 * Math.random()) + 1e6).toString().slice(0, 6),
            i = a ? a.kugouID || a.userid : 0;
          Ha = "h5-" + i + "-" + new Date().getTime() + "-" + r;
          for (var u = -1, t = e.split(" "), s = 0; s < t.length; s++)
            /trace_id\//.test(t[s]) && (u = s);
          if (u > -1) {
            var d = t[u].split("/");
            d.length > 1 && (Ha = d[1]);
          }
        } catch (n) {}
        return Ha;
      }
      var Ra = function (a) {
          var e = { cmd: 303, type: 9, action: 0, params: a };
          (l.a.isWeiXin && (e.launchWay = "universallink"), Object(v.a)(e));
        },
        Da = function (a) {
          return "".concat(a || "", "maxSwapTimes");
        },
        Ba = function () {
          return B(new Date(), "YYYY-MM-DD");
        },
        Ua = (function () {
          var a = Object(t.a)(
            w().mark(function a(e) {
              var r;
              return w().wrap(function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      if (null == e || "" === e) {
                        a.next = 2;
                        break;
                      }
                      return a.abrupt("return", e);
                    case 2:
                      return ((a.next = 4), M());
                    case 4:
                      return (
                        (r = a.sent),
                        a.abrupt(
                          "return",
                          (null === r || void 0 === r ? void 0 : r.userid) ||
                            "",
                        )
                      );
                    case 6:
                    case "end":
                      return a.stop();
                  }
              }, a);
            }),
          );
          return function (e) {
            return a.apply(this, arguments);
          };
        })(),
        qa = function (a) {
          var e = Da(a),
            r = localStorage.getItem(e);
          if (!r) return null;
          try {
            var i = JSON.parse(r);
            return "number" === typeof i
              ? { maxSwapTimes: i, swapTimes: 0, date: Ba() }
              : i && i.date === Ba()
                ? {
                    maxSwapTimes: Number(i.maxSwapTimes) || 0,
                    swapTimes: Number(i.swapTimes) || 0,
                    date: i.date,
                  }
                : (localStorage.removeItem(e), null);
          } catch (u) {
            return (localStorage.removeItem(e), null);
          }
        },
        Ga = function (a, e) {
          var r = e.maxSwapTimes,
            i = e.swapTimes,
            u = void 0 === i ? 0 : i,
            t = Da(a),
            s = {
              maxSwapTimes: Number(r) || 0,
              swapTimes: Number(u) || 0,
              date: Ba(),
            };
          return (localStorage.setItem(t, JSON.stringify(s)), s);
        },
        za = {
          get: (function () {
            var a = Object(t.a)(
              w().mark(function a(e) {
                var r;
                return w().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Ua(e));
                      case 2:
                        return ((r = a.sent), a.abrupt("return", qa(r)));
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          set: (function () {
            var a = Object(t.a)(
              w().mark(function a() {
                var e,
                  r,
                  i,
                  u,
                  t,
                  s,
                  d = arguments;
                return w().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (e = d.length > 0 && void 0 !== d[0] ? d[0] : {}),
                          (r = e.userId),
                          (i = e.maxSwapTimes),
                          (u = e.swapTimes),
                          (t = void 0 === u ? 0 : u),
                          (a.next = 3),
                          Ua(r)
                        );
                      case 3:
                        return (
                          (s = a.sent),
                          a.abrupt(
                            "return",
                            Ga(s, { maxSwapTimes: i, swapTimes: t }),
                          )
                        );
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function () {
              return a.apply(this, arguments);
            };
          })(),
          update: (function () {
            var a = Object(t.a)(
              w().mark(function a() {
                var e,
                  r,
                  i,
                  u = arguments;
                return w().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (e = u.length > 0 && void 0 !== u[0] ? u[0] : {}),
                          (a.next = 3),
                          Ua(e.userId)
                        );
                      case 3:
                        return (
                          (r = a.sent),
                          (i = qa(r) || { maxSwapTimes: 0, swapTimes: 0 }),
                          a.abrupt(
                            "return",
                            Ga(r, {
                              maxSwapTimes:
                                null != e.maxSwapTimes
                                  ? e.maxSwapTimes
                                  : i.maxSwapTimes,
                              swapTimes:
                                null != e.swapTimes ? e.swapTimes : i.swapTimes,
                            }),
                          )
                        );
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function () {
              return a.apply(this, arguments);
            };
          })(),
          clear: (function () {
            var a = Object(t.a)(
              w().mark(function a(e) {
                var r;
                return w().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return ((a.next = 2), Ua(e));
                      case 2:
                        ((r = a.sent), localStorage.removeItem(Da(r)));
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
        },
        Ya = { INSTALLED: 1, COMPLETED: 2 },
        Qa = function () {
          var a = localStorage.getItem("pkgName");
          if (!a) return {};
          try {
            var e = JSON.parse(a);
            return e && "object" === typeof e && !Array.isArray(e) ? e : {};
          } catch (r) {
            return (localStorage.removeItem("pkgName"), {});
          }
        },
        Fa = function (a) {
          return (localStorage.setItem("pkgName", JSON.stringify(a || {})), a);
        },
        Ja = function (a) {
          return new Promise(function (e) {
            var r;
            a &&
            null !== d.a &&
            void 0 !== d.a &&
            null !== (r = d.a.isInClient) &&
            void 0 !== r &&
            r.call(d.a)
              ? d.a.mobileCall(767, { pkgName: a }, function (a) {
                  e(!(null === a || void 0 === a || !a.status));
                })
              : e(!1);
          });
        },
        Va = {
          get: function (a) {
            return (a && Qa()[a]) || null;
          },
          getAll: function () {
            return Qa();
          },
          set: function () {
            var a,
              e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = e.pkgName,
              i = e.status;
            if (!r) return null;
            var u = Number(i);
            if (u !== Ya.INSTALLED && u !== Ya.COMPLETED) return null;
            var t = Qa(),
              s =
                Number(
                  null === (a = t[r]) || void 0 === a ? void 0 : a.status,
                ) || 0;
            return ((t[r] = { status: Math.max(s, u) }), Fa(t), t[r]);
          },
          markInstalled: function (a) {
            return this.set({ pkgName: a, status: Ya.INSTALLED });
          },
          markCompleted: function (a) {
            return this.set({ pkgName: a, status: Ya.COMPLETED });
          },
          checkInstall: (function () {
            var a = Object(t.a)(
              w().mark(function a(e) {
                var r, i;
                return w().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          if (e) {
                            a.next = 2;
                            break;
                          }
                          return a.abrupt("return", {
                            status: 0,
                            isInstall: !1,
                            fromCache: !1,
                          });
                        case 2:
                          if (
                            ((i = this.get(e)),
                            null !== d.a &&
                              void 0 !== d.a &&
                              null !== (r = d.a.isInClient) &&
                              void 0 !== r &&
                              r.call(d.a))
                          ) {
                            a.next = 7;
                            break;
                          }
                          if (null === i || void 0 === i || !i.status) {
                            a.next = 6;
                            break;
                          }
                          return a.abrupt("return", {
                            status: Number(i.status),
                            isInstall: Number(i.status) >= Ya.INSTALLED,
                            fromCache: !0,
                          });
                        case 6:
                          return a.abrupt("return", {
                            status: 0,
                            isInstall: !1,
                            fromCache: !1,
                          });
                        case 7:
                          return ((a.next = 9), Ja(e));
                        case 9:
                          if (a.sent) {
                            a.next = 13;
                            break;
                          }
                          return (
                            null !== i &&
                              void 0 !== i &&
                              i.status &&
                              this.clear(e),
                            a.abrupt("return", {
                              status: 0,
                              isInstall: !1,
                              fromCache: !1,
                            })
                          );
                        case 13:
                          if (null === i || void 0 === i || !i.status) {
                            a.next = 15;
                            break;
                          }
                          return a.abrupt("return", {
                            status: Number(i.status),
                            isInstall: !0,
                            fromCache: !0,
                          });
                        case 15:
                          return (
                            this.markInstalled(e),
                            a.abrupt("return", {
                              status: Ya.INSTALLED,
                              isInstall: !0,
                              fromCache: !1,
                            })
                          );
                        case 17:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  this,
                );
              }),
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
          isCompleted: function (a) {
            var e = this.get(a);
            return (
              Number(null === e || void 0 === e ? void 0 : e.status) ===
              Ya.COMPLETED
            );
          },
          clear: function (a) {
            if (a) {
              var e = Qa();
              (delete e[a], Fa(e));
            } else localStorage.removeItem("pkgName");
          },
        };
    },
    b0a17433: function (a, e, r) {
      "use strict";
      (r.d(e, "i", function () {
        return t;
      }),
        r.d(e, "g", function () {
          return s;
        }),
        r.d(e, "f", function () {
          return d;
        }),
        r.d(e, "h", function () {
          return n;
        }),
        r.d(e, "d", function () {
          return b;
        }),
        r.d(e, "e", function () {
          return m;
        }),
        r.d(e, "c", function () {
          return A;
        }),
        r.d(e, "a", function () {
          return N;
        }),
        r.d(e, "b", function () {
          return k;
        }));
      var i = r("66b76edf"),
        u = (r("b5a01023"), r("a005797a"));
      function t(a) {
        var e = a.r,
          r = a.g,
          i = a.b;
        ((e /= 255), (r /= 255), (i /= 255));
        var u,
          t = Math.max(e, r, i),
          s = Math.min(e, r, i),
          d = t,
          n = t - s,
          b = 0 === t ? 0 : n / t;
        if (t === s) u = 0;
        else {
          switch (t) {
            case e:
              u = (r - i) / n + (r < i ? 6 : 0);
              break;
            case r:
              u = (i - e) / n + 2;
              break;
            case i:
              u = (e - r) / n + 4;
          }
          u /= 6;
        }
        return [360 * u, 100 * b, 100 * d];
      }
      function s(a, e, r) {
        var i, u, t;
        ((a %= 360), (e /= 100), (r /= 100));
        var s = Math.floor(a / 60),
          d = a / 60 - s,
          n = r * (1 - e),
          b = r * (1 - d * e),
          m = r * (1 - (1 - d) * e);
        switch (s) {
          case 0:
            ((i = r), (u = m), (t = n));
            break;
          case 1:
            ((i = b), (u = r), (t = n));
            break;
          case 2:
            ((i = n), (u = r), (t = m));
            break;
          case 3:
            ((i = n), (u = b), (t = r));
            break;
          case 4:
            ((i = m), (u = n), (t = r));
            break;
          default:
            ((i = r), (u = n), (t = b));
        }
        return {
          r: Math.round(255 * i),
          g: Math.round(255 * u),
          b: Math.round(255 * t),
        };
      }
      function d(a) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!a) return "";
        var r = a.r,
          i = a.g,
          t = a.b,
          s = a.a;
        return e
          ? "#"
              .concat(Object(u.o)(r.toString(16), 2))
              .concat(Object(u.o)(i.toString(16), 2))
              .concat(Object(u.o)(t.toString(16), 2))
          : "rgba("
              .concat(r, ",")
              .concat(i, ",")
              .concat(t, ",")
              .concat(s || 1, ")");
      }
      function n(a) {
        if (!a) return null;
        if ("string" === typeof a) {
          if (a.startsWith("#")) {
            var e = a.replace("#", "");
            3 === e.length &&
              (e = e
                .split("")
                .map(function (a) {
                  return a + a;
                })
                .join(""));
            var r = parseInt(e, 16);
            return { r: (r >> 16) & 255, g: (r >> 8) & 255, b: 255 & r, a: 1 };
          }
          if (a.startsWith("rgba")) {
            var i = a.match(/[\d.]+/g).map(Number);
            return {
              r: i[0],
              g: i[1],
              b: i[2],
              a: "undefined" !== typeof i[3] ? i[3] : 1,
            };
          }
          if (a.startsWith("rgb")) {
            var u = a.match(/[\d.]+/g).map(Number);
            return { r: u[0], g: u[1], b: u[2], a: 1 };
          }
        }
        return { r: 0, g: 0, b: 0, a: 1 };
      }
      function b(a) {
        return new Promise(function (e) {
          var r = new Image();
          (r.setAttribute("crossOrigin", ""),
            (r.src = a),
            (r.onload = function () {
              var a = r.width,
                i = r.height,
                u = document.createElement("canvas"),
                t = u.getContext("2d");
              ((u.width = a), (u.height = i), t.drawImage(r, 0, 0, a, i));
              for (
                var s = t.getImageData(0, 0, u.width, u.height).data,
                  d = u.width * u.height,
                  n = 0,
                  b = 0,
                  m = 0,
                  A = 0;
                A < d;
                A++
              ) {
                ((n += s[4 * A]), (b += s[4 * A + 1]), (m += s[4 * A + 2]));
              }
              var N = Math.floor(n / d),
                o = Math.floor(b / d),
                c = Math.floor(m / d);
              e({
                r: N,
                g: o,
                b: c,
                value: "rgba(".concat(N, ",").concat(o, ",").concat(c, ",1)"),
              });
            }),
            (r.onerror = function () {
              e(null);
            }));
        });
      }
      function m(a) {
        if (!a || "number" !== typeof a.r) return null;
        var e,
          r,
          u,
          s = t(a),
          d = Object(i.a)(s, 2),
          n = d[0];
        return (
          d[1] >= 1
            ? n > 20 && n <= 40
              ? ((e = "rgba(255, 206, 157, 1)"),
                (r = "rgba(250, 250, 250, 1)"),
                (u = "rgba(156, 78, 0, 1)"))
              : n > 40 && n <= 60
                ? ((e = "rgba(255, 238, 156, 1)"),
                  (r = "rgba(250, 250, 250, 1)"),
                  (u = "rgba(158, 132, 0, 1)"))
                : n > 60 && n <= 150
                  ? ((e = "rgba(228, 254, 174, 1)"),
                    (r = "rgba(250, 250, 250, 1)"),
                    (u = "rgba(95, 142, 0, 1)"))
                  : n > 150 && n <= 180
                    ? ((e = "rgba(188, 255, 233, 1)"),
                      (r = "rgba(250, 250, 250, 1)"),
                      (u = "rgba(0, 128, 85, 1)"))
                    : n > 180 && n <= 210
                      ? ((e = "rgba(197, 234, 253, 1)"),
                        (r = "rgba(250, 250, 250, 1)"),
                        (u = "rgba(1, 103, 154, 1)"))
                      : n > 210 && n <= 255
                        ? ((e = "rgba(181, 205, 253, 1)"),
                          (r = "rgba(250, 250, 250, 1)"),
                          (u = "rgba(0, 53, 159, 1)"))
                        : n > 255 && n <= 270
                          ? ((e = "rgba(216, 197, 253, 1)"),
                            (r = "rgba(250, 250, 250, 1)"),
                            (u = "rgba(84, 36, 166, 1)"))
                          : n > 270 && n <= 290
                            ? ((e = "rgba(234, 196, 253, 1)"),
                              (r = "rgba(250, 250, 250, 1)"),
                              (u = "rgba(108, 28, 147, 1)"))
                            : n > 290 && n <= 340
                              ? ((e = "rgba(252, 194, 233, 1)"),
                                (r = "rgba(250, 250, 250, 1)"),
                                (u = "rgba(138, 11, 96, 1)"))
                              : ((e = "rgba(253, 195, 195, 1)"),
                                (r = "rgba(250, 250, 250, 1)"),
                                (u = "rgba(141, 14, 14, 1)"))
            : ((e = "rgba(194, 194, 194, 1)"),
              (r = "rgba(250, 250, 250, 1)"),
              (u = "rgba(0, 0, 0, 1)")),
          { from: e, to: r, btn: u }
        );
      }
      function A(a) {
        return new Promise(function (e) {
          var r = new Image();
          (r.setAttribute("crossOrigin", ""),
            (r.src = a),
            (r.onload = function () {
              var a = r.width,
                u = r.height;
              if (a > 100 || u > 100) {
                var s = Math.min(100 / a, 100 / u);
                ((a = Math.floor(a * s)), (u = Math.floor(u * s)));
              }
              var d = document.createElement("canvas"),
                n = d.getContext("2d");
              ((d.width = a), (d.height = u), n.drawImage(r, 0, 0, a, u));
              for (
                var b = n.getImageData(0, 0, a, u).data,
                  m = a * u,
                  A = new Array(10).fill(0),
                  N = new Array(10).fill(0),
                  o = new Array(10).fill(0),
                  c = new Array(10).fill(0),
                  l = new Array(10).fill(0),
                  f = 0;
                f < m;
                f++
              ) {
                if (0 !== b[4 * f + 3]) {
                  var p = b[4 * f],
                    h = b[4 * f + 1],
                    g = b[4 * f + 2],
                    v = t({ r: p, g: h, b: g }),
                    w = Object(i.a)(v, 3),
                    y = w[0],
                    O = w[1],
                    k = w[2];
                  if (!(O < 5 || k < 5)) {
                    var j = void 0,
                      x = O / 100;
                    ((A[
                      (j =
                        y > 340 || y <= 20
                          ? 0
                          : y <= 40
                            ? 1
                            : y <= 60
                              ? 2
                              : y <= 150
                                ? 3
                                : y <= 180
                                  ? 4
                                  : y <= 210
                                    ? 5
                                    : y <= 255
                                      ? 6
                                      : y <= 270
                                        ? 7
                                        : y <= 290
                                          ? 8
                                          : 9)
                    ] += x),
                      N[j]++,
                      (o[j] += p),
                      (c[j] += h),
                      (l[j] += g));
                  }
                }
              }
              for (var C = A[0], _ = 0, L = 1; L < 10; L++)
                A[L] > C && ((C = A[L]), (_ = L));
              if (C <= 0) {
                for (var E = 0, I = 0, S = 0, P = 0, T = 0; T < m; T++) {
                  0 !== b[4 * T + 3] &&
                    ((E += b[4 * T]),
                    (I += b[4 * T + 1]),
                    (S += b[4 * T + 2]),
                    P++);
                }
                return 0 === P
                  ? void e({
                      r: 200,
                      g: 200,
                      b: 200,
                      value: "rgba(200,200,200,1)",
                    })
                  : void e({
                      r: Math.floor(E / P),
                      g: Math.floor(I / P),
                      b: Math.floor(S / P),
                      value: "rgba("
                        .concat(Math.floor(E / P), ",")
                        .concat(Math.floor(I / P), ",")
                        .concat(Math.floor(S / P), ",1)"),
                    });
              }
              var H = Math.floor(o[_] / N[_]),
                M = Math.floor(c[_] / N[_]),
                R = Math.floor(l[_] / N[_]);
              e({
                r: H,
                g: M,
                b: R,
                value: "rgba(".concat(H, ",").concat(M, ",").concat(R, ",1)"),
              });
            }),
            (r.onerror = function () {
              return e(null);
            }));
        });
      }
      var N = "#091B3F",
        o = 100,
        c = 20,
        l = 7,
        f = 40,
        p = 60,
        h = 30,
        g = 80,
        v = {},
        w = {};
      function y(a, e, r) {
        return Math.min(r, Math.max(e, a));
      }
      function O(a, e) {
        a &&
          "object" === typeof a &&
          (a.badgeV3Config || (a.badgeV3Config = {}),
          (a.badgeV3Config.bgColorStr = e));
      }
      function k(a, e) {
        var r = e && e.badgeV3Config && e.badgeV3Config.bgColorStr;
        if (r) return Promise.resolve(r);
        if (!a) return (O(e, N), Promise.resolve(N));
        if (v[a]) return (O(e, v[a]), Promise.resolve(v[a]));
        if (w[a])
          return w[a].then(function (a) {
            return (O(e, a), a);
          });
        var i = new Promise(function (e) {
          var r = function (r) {
              var i = r || N;
              ((v[a] = i), delete w[a], e(i));
            },
            i = new Image();
          ((i.crossOrigin = "anonymous"),
            (i.onload = function () {
              try {
                var a = document.createElement("canvas"),
                  e = a.getContext("2d");
                if (!e) return void r(N);
                ((a.width = o), (a.height = o), e.drawImage(i, 0, 0, o, o));
                for (
                  var u = e.getImageData(0, 0, o, o).data,
                    n = 0,
                    b = 0,
                    m = 0,
                    A = 0,
                    v = 0;
                  v < u.length;
                  v += 4
                )
                  if (0 !== u[v + 3]) {
                    var w = u[v],
                      O = u[v + 1],
                      k = u[v + 2];
                    t({ r: w, g: O, b: k })[2] <= c ||
                      ((n += w), (b += O), (m += k), (A += 1));
                  }
                if (A < l) return void r(N);
                var j = t({ r: n / A, g: b / A, b: m / A }),
                  x = s(j[0], y(j[1], f, p), y(j[2], h, g));
                r(d(x, !0).toUpperCase());
              } catch (C) {
                r(N);
              }
            }),
            (i.onerror = function () {
              return r(N);
            }),
            (i.src = a));
        });
        return (
          (w[a] = i),
          i.then(function (a) {
            return (O(e, a), a);
          })
        );
      }
    },
    b7b5283f: function (a, e, r) {
      var i = r("93114174");
      (a.exports = r("159f9ff0")(!1)).push([
        a.i,
        "@font-face {\n  font-family: \"rIcon\";\n  src: url('data:font/woff;base64,d09GRgABAAAAAAV8AAsAAAAACBAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQQAAAGBAI0zdY21hcAAAAYgAAABgAAABqOs5EjVnbHlmAAAB6AAAAZkAAAIM68INAWhlYWQAAAOEAAAAMwAAADYudoteaGhlYQAAA7gAAAAcAAAAJAezA+9obXR4AAAD1AAAABMAAAAYE4j//2xvY2EAAAPoAAAADgAAAA4BhAD+bWF4cAAAA/gAAAAfAAAAIAEUAEduYW1lAAAEGAAAAR8AAAHyyIPMinBvc3QAAAU4AAAAQgAAAFN++9ogeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGF2ZJzAwMrAwFTFtIeBgaEHQjM+YDBkZAKKMrAyM2AFAWmuKQwHXjG+YmV+AeRGsTiBhRlRFDEBADiVCoUAAAB4nO2RsQ3EQAgEBx84eH0lL5fi2JH7D66JMwtfhpFmEStEsAABjORIHOzGUF3pWvmDT/nOr3Zc/oy1Uk2as5duueu6aDtvfUvP/xRKq6n8tgb10egP0xslOqMhHlC1EV14nF1QTUvkQBCtl14Th4WRYMyEWQyTTLrDgg4m6SQ4cTwI8wcWlgE9LH7h0fXoXZzjHvZ/7HHvHoY5+CcGwYPixaOwttuZ1YPb0PWqq957XRSB9MF3tkGmxiXAagCn7hOW1tQEFWPuk3pcQ4VKt2suG7IhfSRqGJoZN1A2wIZqhk6iZmqWoDMP6DDn/TupOVo+99gxMlokm9pEy2khRWg6Lk+LHprwEdSVJhz3ts25jCJ8bnNEUl+dRTrh+F1H+VqV0SvU1h9eXrT/Nbsjj9Ypob4e27GasMww7iEWstxGWaQtHy13wWm5LTcti7KQsYhFaJmWia6dxW8zsWvBx6Pdyd7okgvBL0d7k93RmIs/3wb945PHk6NqMKiOdHLcH+Bhfz/5xHnOucEO57T/xQfn7xS1h7qAPKw1OSdjvpszdkY+xXruIDRXbMfN9EJyO7OdJrpB2ENuy21kwUI3R4xunhm+mnpB4Bm+F8jV1H++8dNVjdjEF6muBHZ+3rOtwHu+qVnYVNN/fcPXeP9D/YrwVeqf/wK0bXBpAAAAeJxjYGRgYADi4zH9T+L5bb4ycDO/AIowPD2u7AGj//9nYGA+zfwSyOVgYAKJAgB2hQ0eAHicY2BkYGB+wcAAIv//B5KnGRgZUAEbAHHqBKt4nGNgYGBgfoGM//8H0QA9mQaWAAAAAAAAFgA4AGgAxgEGAAB4nGNgZGBgYGOwZmBhAAEmIOYCQgaG/2A+AwAPCwFcAHicXY69bsIwFIVPIFAVqqpVpc7uwlIp/Iw8AIixDOwhcQIoiSPHICF17tyn6Nyn6HP1xFyJqrZ0/Z1zj68N4AE/CNCuAD1f29XBDdWFu6Q74ZD8KNzDEM/CfaoX4QFeMRIe4glvnBCEt3QGSIU7uEcl3KX/LhySP4R7nP4p3Kf/JTzABt/CQ4yCvl0lplrr/FjE1rMvG22bvanUNJp4vdSVtrHTqdqeVXPKZ85lKrOmVAtTOV0URtXWHHTiop1z9Xw8zsSPElPCYoUEhr9eQyPHEQViulf/ShsmLBrsvVKYIsLkT3/JfuUzMRzPlJktzqwNTpw9o+uQUWfMGJSkhb/ZpgtuQ6f2vQOdhH6Enb9VY44xd/YvH/m3y19KuFJaAHicY2BigAAuBuyAjZGJkZmRhZGVkY2RnYElKTE5myc5J784Nb64pCg/O5UlN78olaWoNCeVtTgjsSiVgQEA9BgMbQAA') format('woff'),\r\n  url(" +
          i(r("ec429a17")) +
          ') format(\'truetype\');\n}\n\n[class^="rIcon-"],\n[class*=" rIcon-"] {\n  font-family: \'rIcon\';\n  font-style: normal;\n  line-height: 1;\n  /* 1.1\u4f3c\u4e4e\u89e3\u51b3icon\u4f4d\u7f6e\u7a0d\u504f\u4e0a\u7684\u95ee\u9898 */\n  /* font-display: fallback; */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.rIcon-back::before {\n  content: "\\EA01";\n}\n\n.rIcon-close_stroke::before {\n  content: "\\EA02";\n}\n\n.rIcon-more::before {\n  content: "\\EA03";\n}\n\n.rIcon-rule::before {\n  content: "\\EA04";\n}\n\n.rIcon-share::before {\n  content: "\\EA05";\n}',
        "",
      ]);
    },
    bcb80381: function (a, e, r) {
      "use strict";
      r("e7ea4b7d");
      var i = r("ffb3b631"),
        u = r.n(i),
        t = r("62bbda40"),
        s = r.n(t),
        d = {
          apiPath: "https://genesisapi.kugou.com",
          apiPathRetry: "https://genesisapi.kugou.com",
        },
        n = r("a005797a");
      (r.d(e, "b", function () {
        return m;
      }),
        r.d(e, "c", function () {
          return A;
        }));
      var b = u.a.isInClient();
      function m(a) {
        return a && a.data && 1 === a.data.status ? a.data.data : null;
      }
      function A(a) {
        return a && a.data && 1 === a.data.status;
      }
      ((s.a.requestConfig = Object.assign(s.a.requestConfig, {
        baseURL: d.apiPath,
        async: !0,
        useMobileCall: b,
        timeout: 8e3,
      })),
        Object(n.v)().then(function (a) {
          "wifi" === a.net && (s.a.requestConfig.timeout = 8e3);
        }));
      e.a = function (a) {
        if (a) {
          var e = [];
          return (
            "GET" === a.method.toUpperCase()
              ? e.push({ "Content-Type": "application/x-www-form-urlencoded" })
              : "POST" === a.method.toUpperCase() &&
                e.push({ "Content-Type": "application/json" }),
            (a.headers = e.concat(a.headers || [])),
            (s.a.requestConfig.baseURL !== d.apiPath &&
              a.baseURL !== d.apiPath) ||
              (a.retryURL = d.apiPathRetry),
            (function (a) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 12e3;
              return function (r) {
                var i = !1;
                return new Promise(function (u, t) {
                  var s = setTimeout(function () {
                    i || ((i = !0), t(new Error("request timeout")));
                  }, e);
                  a(r)
                    .then(function (a) {
                      i || ((i = !0), clearTimeout(s), u(a));
                    })
                    .catch(function (a) {
                      i || ((i = !0), clearTimeout(s), t(a));
                    });
                });
              };
            })(s.a)(a).catch(function (a) {
              throw (console.log("\u8bf7\u6c42catch", a), a);
            })
          );
        }
      };
    },
    c116d5b6: function (a, e, r) {
      a.exports = r.p + "static/media/AlibabaPuHuiTi-3-105-Heavy.a40bd40e.ttf";
    },
    c2427b21: function (a, e, r) {
      "use strict";
      var i = navigator.userAgent.toLowerCase(),
        u = {
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
        };
      e.a = u;
    },
    c2614245: function (a, e, r) {
      ((e = a.exports = r("159f9ff0")(!1)).i(r("b7b5283f"), ""),
        e.push([
          a.i,
          'body,\nhtml {\n  height: 100%;\n  font-family: "\\5FAE\\8F6F\\96C5\\9ED1","\\534E\\6587\\7EC6\\9ED1",Arial, Helvetica, sans-serif;\n  background: transparent;\n  height: 100%;\n  overflow: hidden;\n  opacity: 1!important;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  /* font: inherit; */\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \'\';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nem,\ni {\n  font-style: normal;\n}',
          "",
        ]));
    },
    ec429a17: function (a, e, r) {
      a.exports = r.p + "static/media/rIcon.e1dfbfa4.ttf";
    },
  },
]);
