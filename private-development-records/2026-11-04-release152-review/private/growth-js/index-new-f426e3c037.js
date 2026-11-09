(((e, t) => {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (e.document) return t(e);
            throw new Error("jQuery requires a window with a document");
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (k, O) {
  var e = [],
    _ = k.document,
    U = Object.getPrototypeOf,
    a = e.slice,
    H = e.concat,
    F = e.push,
    o = e.indexOf,
    n = {},
    $ = n.toString,
    B = n.hasOwnProperty,
    R = B.toString,
    V = R.call(Object),
    m = {};
  function q(e, t) {
    var n = (t = t || _).createElement("script");
    ((n.text = e), t.head.appendChild(n).parentNode.removeChild(n));
  }
  function W(e, t) {
    return t.toUpperCase();
  }
  var t = "3.1.1",
    w = function (e, t) {
      return new w.fn.init(e, t);
    },
    K = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    J = /^-ms-/,
    G = /-([a-z])/g;
  function X(e) {
    var t = !!e && "length" in e && e.length,
      n = w.type(e);
    return (
      "function" !== n &&
      !w.isWindow(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  ((w.fn = w.prototype =
    {
      jquery: t,
      constructor: w,
      length: 0,
      toArray: function () {
        return a.call(this);
      },
      get: function (e) {
        return null == e
          ? a.call(this)
          : e < 0
            ? this[e + this.length]
            : this[e];
      },
      pushStack: function (e) {
        e = w.merge(this.constructor(), e);
        return ((e.prevObject = this), e);
      },
      each: function (e) {
        return w.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          w.map(this, function (e, t) {
            return n.call(e, t, e);
          }),
        );
      },
      slice: function () {
        return this.pushStack(a.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          e = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= e && e < t ? [this[e]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: F,
      sort: e.sort,
      splice: e.splice,
    }),
    (w.extend = w.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          o,
          s = arguments[0] || {},
          r = 1,
          a = arguments.length,
          c = !1;
        for (
          "boolean" == typeof s && ((c = s), (s = arguments[r] || {}), r++),
            "object" == typeof s || w.isFunction(s) || (s = {}),
            r === a && ((s = this), r--);
          r < a;
          r++
        )
          if (null != (e = arguments[r]))
            for (t in e)
              ((o = s[t]),
                (n = e[t]),
                s !== n &&
                  (c && n && (w.isPlainObject(n) || (i = w.isArray(n)))
                    ? ((o = i
                        ? ((i = !1), o && w.isArray(o) ? o : [])
                        : o && w.isPlainObject(o)
                          ? o
                          : {}),
                      (s[t] = w.extend(c, o, n)))
                    : void 0 !== n && (s[t] = n)));
        return s;
      }),
    w.extend({
      expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === w.type(e);
      },
      isArray: Array.isArray,
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      },
      isPlainObject: function (e) {
        return !(
          !e ||
          "[object Object]" !== $.call(e) ||
          ((e = U(e)) &&
            ("function" !=
              typeof (e = B.call(e, "constructor") && e.constructor) ||
              R.call(e) !== V))
        );
      },
      isEmptyObject: function (e) {
        for (var t in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
            ? n[$.call(e)] || "object"
            : typeof e;
      },
      globalEval: function (e) {
        q(e);
      },
      camelCase: function (e) {
        return e.replace(J, "ms-").replace(G, W);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (X(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(K, "");
      },
      makeArray: function (e, t) {
        t = t || [];
        return (
          null != e &&
            (X(Object(e))
              ? w.merge(t, "string" == typeof e ? [e] : e)
              : F.call(t, e)),
          t
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : o.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
        return ((e.length = o), e);
      },
      grep: function (e, t, n) {
        for (var i = [], o = 0, s = e.length, r = !n; o < s; o++)
          !t(e[o], o) != r && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          o,
          s = 0,
          r = [];
        if (X(e))
          for (i = e.length; s < i; s++)
            null != (o = t(e[s], s, n)) && r.push(o);
        else for (s in e) ((o = t(e[s], s, n)), null != o && r.push(o));
        return H.apply([], r);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, i;
        if (
          ("string" == typeof t && ((i = e[t]), (t = e), (e = i)),
          w.isFunction(e))
        )
          return (
            (n = a.call(arguments, 2)),
            ((i = function () {
              return e.apply(t || this, n.concat(a.call(arguments)));
            }).guid = e.guid =
              e.guid || w.guid++),
            i
          );
      },
      now: Date.now,
      support: m,
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = e[Symbol.iterator]),
    w.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " ",
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      },
    ));
  function i(e, t, n) {
    for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
      if (1 === e.nodeType) {
        if (o && w(e).is(n)) break;
        i.push(e);
      }
    return i;
  }
  function z(e, t) {
    for (var n = []; e; e = e.nextSibling)
      1 === e.nodeType && e !== t && n.push(e);
    return n;
  }
  var t = ((O) => {
      function p(e, t, n) {
        var i = "0x" + t - 65536;
        return i != i || n
          ? t
          : i < 0
            ? String.fromCharCode(65536 + i)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      }
      function U(e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      }
      function H() {
        _();
      }
      var e,
        f,
        S,
        s,
        F,
        h,
        $,
        B,
        k,
        c,
        l,
        _,
        w,
        n,
        C,
        m,
        i,
        o,
        g,
        x = "sizzle" + +new Date(),
        v = O.document,
        j = 0,
        R = 0,
        V = pe(),
        q = pe(),
        b = pe(),
        W = function (e, t) {
          return (e === t && (l = !0), 0);
        },
        K = {}.hasOwnProperty,
        t = [],
        J = t.pop,
        G = t.push,
        I = t.push,
        X = t.slice,
        y = function (e, t) {
          for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
          return -1;
        },
        z =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        r = "[\\x20\\t\\r\\n\\f]",
        a = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        Q =
          "\\[" +
          r +
          "*(" +
          a +
          ")(?:" +
          r +
          "*([*^$|!~]?=)" +
          r +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          a +
          "))|)" +
          r +
          "*\\]",
        Y =
          ":(" +
          a +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          Q +
          ")*)|.*)\\)|)",
        Z = new RegExp(r + "+", "g"),
        T = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
        ee = new RegExp("^" + r + "*," + r + "*"),
        te = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
        ne = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
        ie = new RegExp(Y),
        oe = new RegExp("^" + a + "$"),
        d = {
          ID: new RegExp("^#(" + a + ")"),
          CLASS: new RegExp("^\\.(" + a + ")"),
          TAG: new RegExp("^(" + a + "|[*])"),
          ATTR: new RegExp("^" + Q),
          PSEUDO: new RegExp("^" + Y),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              r +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              r +
              "*(?:([+-]|)" +
              r +
              "*(\\d+)|))" +
              r +
              "*\\)|)",
            "i",
          ),
          bool: new RegExp("^(?:" + z + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              r +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              r +
              "*((?:-\\d)?\\d*)" +
              r +
              "*\\)|)(?=[^-]|$)",
            "i",
          ),
        },
        se = /^(?:input|select|textarea|button)$/i,
        re = /^h\d$/i,
        u = /^[^{]+\{\s*\[native \w/,
        ae = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ce = /[+~]/,
        A = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
        le = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ue = P(
          function (e) {
            return !0 === e.disabled && ("form" in e || "label" in e);
          },
          { dir: "parentNode", next: "legend" },
        );
      try {
        (I.apply((t = X.call(v.childNodes)), v.childNodes),
          t[v.childNodes.length].nodeType);
      } catch (e) {
        I = {
          apply: t.length
            ? function (e, t) {
                G.apply(e, X.call(t));
              }
            : function (e, t) {
                for (var n = e.length, i = 0; (e[n++] = t[i++]););
                e.length = n - 1;
              },
        };
      }
      function M(e, t, n, i) {
        var o,
          s,
          r,
          a,
          c,
          l,
          u,
          p = t && t.ownerDocument,
          d = t ? t.nodeType : 9;
        if (
          ((n = n || []),
          "string" != typeof e || !e || (1 !== d && 9 !== d && 11 !== d))
        )
          return n;
        if (
          !i &&
          ((t ? t.ownerDocument || t : v) !== w && _(t), (t = t || w), C)
        ) {
          if (11 !== d && (c = ae.exec(e)))
            if ((o = c[1])) {
              if (9 === d) {
                if (!(r = t.getElementById(o))) return n;
                if (r.id === o) return (n.push(r), n);
              } else if (
                p &&
                (r = p.getElementById(o)) &&
                g(t, r) &&
                r.id === o
              )
                return (n.push(r), n);
            } else {
              if (c[2]) return (I.apply(n, t.getElementsByTagName(e)), n);
              if (
                (o = c[3]) &&
                f.getElementsByClassName &&
                t.getElementsByClassName
              )
                return (I.apply(n, t.getElementsByClassName(o)), n);
            }
          if (f.qsa && !b[e + " "] && (!m || !m.test(e))) {
            if (1 !== d) ((p = t), (u = e));
            else if ("object" !== t.nodeName.toLowerCase()) {
              for (
                (a = t.getAttribute("id"))
                  ? (a = a.replace(le, U))
                  : t.setAttribute("id", (a = x)),
                  s = (l = h(e)).length;
                s--;
              )
                l[s] = "#" + a + " " + E(l[s]);
              ((u = l.join(",")), (p = (ce.test(e) && me(t.parentNode)) || t));
            }
            if (u)
              try {
                return (I.apply(n, p.querySelectorAll(u)), n);
              } catch (e) {
              } finally {
                a === x && t.removeAttribute("id");
              }
          }
        }
        return B(e.replace(T, "$1"), t, n, i);
      }
      function pe() {
        var n = [];
        function i(e, t) {
          return (
            n.push(e + " ") > S.cacheLength && delete i[n.shift()],
            (i[e + " "] = t)
          );
        }
        return i;
      }
      function L(e) {
        return ((e[x] = !0), e);
      }
      function N(e) {
        var t = w.createElement("fieldset");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t);
        }
      }
      function de(e, t) {
        for (var n = e.split("|"), i = n.length; i--;) S.attrHandle[n[i]] = t;
      }
      function fe(e, t) {
        var n = t && e,
          i =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            e.sourceIndex - t.sourceIndex;
        if (i) return i;
        if (n) for (; (n = n.nextSibling);) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function he(t) {
        return function (e) {
          return "form" in e
            ? e.parentNode && !1 === e.disabled
              ? "label" in e
                ? "label" in e.parentNode
                  ? e.parentNode.disabled === t
                  : e.disabled === t
                : e.isDisabled === t || (e.isDisabled !== !t && ue(e) === t)
              : e.disabled === t
            : "label" in e && e.disabled === t;
        };
      }
      function D(r) {
        return L(function (s) {
          return (
            (s = +s),
            L(function (e, t) {
              for (var n, i = r([], e.length, s), o = i.length; o--;)
                e[(n = i[o])] && (e[n] = !(t[n] = e[n]));
            })
          );
        });
      }
      function me(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }
      for (e in ((f = M.support = {}),
      (F = M.isXML =
        function (e) {
          e = e && (e.ownerDocument || e).documentElement;
          return !!e && "HTML" !== e.nodeName;
        }),
      (_ = M.setDocument =
        function (e) {
          var e = e ? e.ownerDocument || e : v;
          return (
            e !== w &&
              9 === e.nodeType &&
              e.documentElement &&
              ((n = (w = e).documentElement),
              (C = !F(w)),
              v !== w &&
                (e = w.defaultView) &&
                e.top !== e &&
                (e.addEventListener
                  ? e.addEventListener("unload", H, !1)
                  : e.attachEvent && e.attachEvent("onunload", H)),
              (f.attributes = N(function (e) {
                return ((e.className = "i"), !e.getAttribute("className"));
              })),
              (f.getElementsByTagName = N(function (e) {
                return (
                  e.appendChild(w.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (f.getElementsByClassName = u.test(w.getElementsByClassName)),
              (f.getById = N(function (e) {
                return (
                  (n.appendChild(e).id = x),
                  !w.getElementsByName || !w.getElementsByName(x).length
                );
              })),
              f.getById
                ? ((S.filter.ID = function (e) {
                    var t = e.replace(A, p);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (S.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && C)
                      return (t = t.getElementById(e)) ? [t] : [];
                  }))
                : ((S.filter.ID = function (e) {
                    var t = e.replace(A, p);
                    return function (e) {
                      e =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return e && e.value === t;
                    };
                  }),
                  (S.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && C) {
                      var n,
                        i,
                        o,
                        s = t.getElementById(e);
                      if (s) {
                        if ((n = s.getAttributeNode("id")) && n.value === e)
                          return [s];
                        for (o = t.getElementsByName(e), i = 0; (s = o[i++]);)
                          if ((n = s.getAttributeNode("id")) && n.value === e)
                            return [s];
                      }
                      return [];
                    }
                  })),
              (S.find.TAG = f.getElementsByTagName
                ? function (e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : f.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                  }
                : function (e, t) {
                    var n,
                      i = [],
                      o = 0,
                      s = t.getElementsByTagName(e);
                    if ("*" !== e) return s;
                    for (; (n = s[o++]);) 1 === n.nodeType && i.push(n);
                    return i;
                  }),
              (S.find.CLASS =
                f.getElementsByClassName &&
                function (e, t) {
                  if (void 0 !== t.getElementsByClassName && C)
                    return t.getElementsByClassName(e);
                }),
              (i = []),
              (m = []),
              (f.qsa = u.test(w.querySelectorAll)) &&
                (N(function (e) {
                  ((n.appendChild(e).innerHTML =
                    "<a id='" +
                    x +
                    "'></a><select id='" +
                    x +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      m.push("[*^$]=" + r + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      m.push("\\[" + r + "*(?:value|" + z + ")"),
                    e.querySelectorAll("[id~=" + x + "-]").length ||
                      m.push("~="),
                    e.querySelectorAll(":checked").length || m.push(":checked"),
                    e.querySelectorAll("a#" + x + "+*").length ||
                      m.push(".#.+[+~]"));
                }),
                N(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = w.createElement("input");
                  (t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      m.push("name" + r + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      m.push(":enabled", ":disabled"),
                    (n.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      m.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    m.push(",.*:"));
                })),
              (f.matchesSelector = u.test(
                (o =
                  n.matches ||
                  n.webkitMatchesSelector ||
                  n.mozMatchesSelector ||
                  n.oMatchesSelector ||
                  n.msMatchesSelector),
              )) &&
                N(function (e) {
                  ((f.disconnectedMatch = o.call(e, "*")),
                    o.call(e, "[s!='']:x"),
                    i.push("!=", Y));
                }),
              (m = m.length && new RegExp(m.join("|"))),
              (i = i.length && new RegExp(i.join("|"))),
              (e = u.test(n.compareDocumentPosition)),
              (g =
                e || u.test(n.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        t = t && t.parentNode;
                      return (
                        e === t ||
                        !(
                          !t ||
                          1 !== t.nodeType ||
                          !(n.contains
                            ? n.contains(t)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(t))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t) for (; (t = t.parentNode);) if (t === e) return !0;
                      return !1;
                    }),
              (W = e
                ? function (e, t) {
                    var n;
                    return e === t
                      ? ((l = !0), 0)
                      : (n =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition) ||
                          (1 &
                            (n =
                              (e.ownerDocument || e) === (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!f.sortDetached &&
                            t.compareDocumentPosition(e) === n)
                            ? e === w || (e.ownerDocument === v && g(v, e))
                              ? -1
                              : t === w || (t.ownerDocument === v && g(v, t))
                                ? 1
                                : c
                                  ? y(c, e) - y(c, t)
                                  : 0
                            : 4 & n
                              ? -1
                              : 1);
                  }
                : function (e, t) {
                    if (e === t) return ((l = !0), 0);
                    var n,
                      i = 0,
                      o = e.parentNode,
                      s = t.parentNode,
                      r = [e],
                      a = [t];
                    if (!o || !s)
                      return e === w
                        ? -1
                        : t === w
                          ? 1
                          : o
                            ? -1
                            : s
                              ? 1
                              : c
                                ? y(c, e) - y(c, t)
                                : 0;
                    if (o === s) return fe(e, t);
                    for (n = e; (n = n.parentNode);) r.unshift(n);
                    for (n = t; (n = n.parentNode);) a.unshift(n);
                    for (; r[i] === a[i];) i++;
                    return i
                      ? fe(r[i], a[i])
                      : r[i] === v
                        ? -1
                        : a[i] === v
                          ? 1
                          : 0;
                  })),
            w
          );
        }),
      (M.matches = function (e, t) {
        return M(e, null, null, t);
      }),
      (M.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== w && _(e),
          (t = t.replace(ne, "='$1']")),
          f.matchesSelector &&
            C &&
            !b[t + " "] &&
            (!i || !i.test(t)) &&
            (!m || !m.test(t)))
        )
          try {
            var n = o.call(e, t);
            if (
              n ||
              f.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return n;
          } catch (e) {}
        return 0 < M(t, w, null, [e]).length;
      }),
      (M.contains = function (e, t) {
        return ((e.ownerDocument || e) !== w && _(e), g(e, t));
      }),
      (M.attr = function (e, t) {
        (e.ownerDocument || e) !== w && _(e);
        var n = S.attrHandle[t.toLowerCase()],
          n = n && K.call(S.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
        return void 0 !== n
          ? n
          : f.attributes || !C
            ? e.getAttribute(t)
            : (n = e.getAttributeNode(t)) && n.specified
              ? n.value
              : null;
      }),
      (M.escape = function (e) {
        return (e + "").replace(le, U);
      }),
      (M.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (M.uniqueSort = function (e) {
        var t,
          n = [],
          i = 0,
          o = 0;
        if (
          ((l = !f.detectDuplicates),
          (c = !f.sortStable && e.slice(0)),
          e.sort(W),
          l)
        ) {
          for (; (t = e[o++]);) t === e[o] && (i = n.push(o));
          for (; i--;) e.splice(n[i], 1);
        }
        return ((c = null), e);
      }),
      (s = M.getText =
        function (e) {
          var t,
            n = "",
            i = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += s(e);
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else for (; (t = e[i++]);) n += s(t);
          return n;
        }),
      ((S = M.selectors =
        {
          cacheLength: 50,
          createPseudo: L,
          match: d,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(A, p)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(A, p)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || M.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && M.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return d.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      ie.test(n) &&
                      (t =
                        (t = h(n, !0)) &&
                        n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(A, p).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = V[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + r + ")" + e + "(" + r + "|$)")) &&
                  V(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (void 0 !== e.getAttribute &&
                          e.getAttribute("class")) ||
                        "",
                    );
                  }))
              );
            },
            ATTR: function (t, n, i) {
              return function (e) {
                e = M.attr(e, t);
                return null == e
                  ? "!=" === n
                  : !n ||
                      ((e += ""),
                      "=" === n
                        ? e === i
                        : "!=" === n
                          ? e !== i
                          : "^=" === n
                            ? i && 0 === e.indexOf(i)
                            : "*=" === n
                              ? i && -1 < e.indexOf(i)
                              : "$=" === n
                                ? i && e.slice(-i.length) === i
                                : "~=" === n
                                  ? -1 <
                                    (" " + e.replace(Z, " ") + " ").indexOf(i)
                                  : "|=" === n &&
                                    (e === i ||
                                      e.slice(0, i.length + 1) === i + "-"));
              };
            },
            CHILD: function (h, e, t, m, g) {
              var v = "nth" !== h.slice(0, 3),
                b = "last" !== h.slice(-4),
                y = "of-type" === e;
              return 1 === m && 0 === g
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (e, t, n) {
                    var i,
                      o,
                      s,
                      r,
                      a,
                      c,
                      l = v != b ? "nextSibling" : "previousSibling",
                      u = e.parentNode,
                      p = y && e.nodeName.toLowerCase(),
                      d = !n && !y,
                      f = !1;
                    if (u) {
                      if (v) {
                        for (; l;) {
                          for (r = e; (r = r[l]);)
                            if (
                              y
                                ? r.nodeName.toLowerCase() === p
                                : 1 === r.nodeType
                            )
                              return !1;
                          c = l = "only" === h && !c && "nextSibling";
                        }
                        return !0;
                      }
                      if (((c = [b ? u.firstChild : u.lastChild]), b && d)) {
                        for (
                          f =
                            (a =
                              (i =
                                (o =
                                  (s = (r = u)[x] || (r[x] = {}))[r.uniqueID] ||
                                  (s[r.uniqueID] = {}))[h] || [])[0] === j &&
                              i[1]) && i[2],
                            r = a && u.childNodes[a];
                          (r = (++a && r && r[l]) || ((f = a = 0), c.pop()));
                        )
                          if (1 === r.nodeType && ++f && r === e) {
                            o[h] = [j, a, f];
                            break;
                          }
                      } else if (
                        !1 ===
                        (f = d
                          ? (a =
                              (i =
                                (o =
                                  (s = (r = e)[x] || (r[x] = {}))[r.uniqueID] ||
                                  (s[r.uniqueID] = {}))[h] || [])[0] === j &&
                              i[1])
                          : f)
                      )
                        for (
                          ;
                          (r = (++a && r && r[l]) || ((f = a = 0), c.pop())) &&
                          ((y
                            ? r.nodeName.toLowerCase() !== p
                            : 1 !== r.nodeType) ||
                            !++f ||
                            (d &&
                              ((o =
                                (s = r[x] || (r[x] = {}))[r.uniqueID] ||
                                (s[r.uniqueID] = {}))[h] = [j, f]),
                            r !== e));
                        );
                      return (f -= g) === m || (f % m == 0 && 0 <= f / m);
                    }
                  };
            },
            PSEUDO: function (e, s) {
              var t,
                r =
                  S.pseudos[e] ||
                  S.setFilters[e.toLowerCase()] ||
                  M.error("unsupported pseudo: " + e);
              return r[x]
                ? r(s)
                : 1 < r.length
                  ? ((t = [e, e, "", s]),
                    S.setFilters.hasOwnProperty(e.toLowerCase())
                      ? L(function (e, t) {
                          for (var n, i = r(e, s), o = i.length; o--;)
                            e[(n = y(e, i[o]))] = !(t[n] = i[o]);
                        })
                      : function (e) {
                          return r(e, 0, t);
                        })
                  : r;
            },
          },
          pseudos: {
            not: L(function (e) {
              var i = [],
                o = [],
                a = $(e.replace(T, "$1"));
              return a[x]
                ? L(function (e, t, n, i) {
                    for (var o, s = a(e, null, i, []), r = e.length; r--;)
                      (o = s[r]) && (e[r] = !(t[r] = o));
                  })
                : function (e, t, n) {
                    return (
                      (i[0] = e),
                      a(i, null, n, o),
                      (i[0] = null),
                      !o.pop()
                    );
                  };
            }),
            has: L(function (t) {
              return function (e) {
                return 0 < M(t, e).length;
              };
            }),
            contains: L(function (t) {
              return (
                (t = t.replace(A, p)),
                function (e) {
                  return -1 < (e.textContent || e.innerText || s(e)).indexOf(t);
                }
              );
            }),
            lang: L(function (n) {
              return (
                oe.test(n || "") || M.error("unsupported lang: " + n),
                (n = n.replace(A, p).toLowerCase()),
                function (e) {
                  var t;
                  do {
                    if (
                      (t = C
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                      );
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var t = O.location && O.location.hash;
              return t && t.slice(1) === e.id;
            },
            root: function (e) {
              return e === n;
            },
            focus: function (e) {
              return (
                e === w.activeElement &&
                (!w.hasFocus || w.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: he(!1),
            disabled: he(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex,
                !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !S.pseudos.empty(e);
            },
            header: function (e) {
              return re.test(e.nodeName);
            },
            input: function (e) {
              return se.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (e = e.getAttribute("type")) ||
                  "text" === e.toLowerCase())
              );
            },
            first: D(function () {
              return [0];
            }),
            last: D(function (e, t) {
              return [t - 1];
            }),
            eq: D(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: D(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: D(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: D(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
              return e;
            }),
            gt: D(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
              return e;
            }),
          },
        }).pseudos.nth = S.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        S.pseudos[e] = ((t) =>
          function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t;
          })(e);
      for (e in { submit: !0, reset: !0 })
        S.pseudos[e] = ((n) =>
          function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === n;
          })(e);
      function ge() {}
      function E(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i;
      }
      function P(r, e, t) {
        var a = e.dir,
          c = e.next,
          l = c || a,
          u = t && "parentNode" === l,
          p = R++;
        return e.first
          ? function (e, t, n) {
              for (; (e = e[a]);) if (1 === e.nodeType || u) return r(e, t, n);
              return !1;
            }
          : function (e, t, n) {
              var i,
                o,
                s = [j, p];
              if (n) {
                for (; (e = e[a]);)
                  if ((1 === e.nodeType || u) && r(e, t, n)) return !0;
              } else
                for (; (e = e[a]);)
                  if (1 === e.nodeType || u)
                    if (
                      ((o =
                        (o = e[x] || (e[x] = {}))[e.uniqueID] ||
                        (o[e.uniqueID] = {})),
                      c && c === e.nodeName.toLowerCase())
                    )
                      e = e[a] || e;
                    else {
                      if ((i = o[l]) && i[0] === j && i[1] === p)
                        return (s[2] = i[2]);
                      if (((o[l] = s)[2] = r(e, t, n))) return !0;
                    }
              return !1;
            };
      }
      function ve(o) {
        return 1 < o.length
          ? function (e, t, n) {
              for (var i = o.length; i--;) if (!o[i](e, t, n)) return !1;
              return !0;
            }
          : o[0];
      }
      function be(e, t, n, i, o) {
        for (var s, r = [], a = 0, c = e.length, l = null != t; a < c; a++)
          !(s = e[a]) || (n && !n(s, i, o)) || (r.push(s), l && t.push(a));
        return r;
      }
      function ye(f, h, m, g, v, e) {
        return (
          g && !g[x] && (g = ye(g)),
          v && !v[x] && (v = ye(v, e)),
          L(function (e, t, n, i) {
            var o,
              s,
              r,
              a = [],
              c = [],
              l = t.length,
              u =
                e ||
                ((e, t, n) => {
                  for (var i = 0, o = t.length; i < o; i++) M(e, t[i], n);
                  return n;
                })(h || "*", n.nodeType ? [n] : n, []),
              p = !f || (!e && h) ? u : be(u, a, f, n, i),
              d = m ? (v || (e ? f : l || g) ? [] : t) : p;
            if ((m && m(p, d, n, i), g))
              for (o = be(d, c), g(o, [], n, i), s = o.length; s--;)
                (r = o[s]) && (d[c[s]] = !(p[c[s]] = r));
            if (e) {
              if (v || f) {
                if (v) {
                  for (o = [], s = d.length; s--;)
                    (r = d[s]) && o.push((p[s] = r));
                  v(null, (d = []), o, i);
                }
                for (s = d.length; s--;)
                  (r = d[s]) &&
                    -1 < (o = v ? y(e, r) : a[s]) &&
                    (e[o] = !(t[o] = r));
              }
            } else
              ((d = be(d === t ? d.splice(l, d.length) : d)),
                v ? v(null, t, d, i) : I.apply(t, d));
          })
        );
      }
      function Se(g, v) {
        function e(e, t, n, i, o) {
          var s,
            r,
            a,
            c = 0,
            l = "0",
            u = e && [],
            p = [],
            d = k,
            f = e || (y && S.find.TAG("*", o)),
            h = (j += null == d ? 1 : Math.random() || 0.1),
            m = f.length;
          for (
            o && (k = t === w || t || o);
            l !== m && null != (s = f[l]);
            l++
          ) {
            if (y && s) {
              for (
                r = 0, t || s.ownerDocument === w || (_(s), (n = !C));
                (a = g[r++]);
              )
                if (a(s, t || w, n)) {
                  i.push(s);
                  break;
                }
              o && (j = h);
            }
            b && ((s = !a && s) && c--, e) && u.push(s);
          }
          if (((c += l), b && l !== c)) {
            for (r = 0; (a = v[r++]);) a(u, p, t, n);
            if (e) {
              if (0 < c) for (; l--;) u[l] || p[l] || (p[l] = J.call(i));
              p = be(p);
            }
            (I.apply(i, p),
              o && !e && 0 < p.length && 1 < c + v.length && M.uniqueSort(i));
          }
          return (o && ((j = h), (k = d)), u);
        }
        var b = 0 < v.length,
          y = 0 < g.length;
        return b ? L(e) : e;
      }
      return (
        (ge.prototype = S.filters = S.pseudos),
        (S.setFilters = new ge()),
        (h = M.tokenize =
          function (e, t) {
            var n,
              i,
              o,
              s,
              r,
              a,
              c,
              l = q[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (r = e, a = [], c = S.preFilter; r;) {
              for (s in ((n && !(i = ee.exec(r))) ||
                (i && (r = r.slice(i[0].length) || r), a.push((o = []))),
              (n = !1),
              (i = te.exec(r)) &&
                ((n = i.shift()),
                o.push({ value: n, type: i[0].replace(T, " ") }),
                (r = r.slice(n.length))),
              S.filter))
                !(i = d[s].exec(r)) ||
                  (c[s] && !(i = c[s](i))) ||
                  ((n = i.shift()),
                  o.push({ value: n, type: s, matches: i }),
                  (r = r.slice(n.length)));
              if (!n) break;
            }
            return t ? r.length : r ? M.error(e) : q(e, a).slice(0);
          }),
        ($ = M.compile =
          function (e, t) {
            var n,
              i = [],
              o = [],
              s = b[e + " "];
            if (!s) {
              for (n = (t = t || h(e)).length; n--;)
                ((s = (function e(t) {
                  for (
                    var i,
                      n,
                      o,
                      s = t.length,
                      r = S.relative[t[0].type],
                      a = r || S.relative[" "],
                      c = r ? 1 : 0,
                      l = P(
                        function (e) {
                          return e === i;
                        },
                        a,
                        !0,
                      ),
                      u = P(
                        function (e) {
                          return -1 < y(i, e);
                        },
                        a,
                        !0,
                      ),
                      p = [
                        function (e, t, n) {
                          return (
                            (e =
                              (!r && (n || t !== k)) ||
                              ((i = t).nodeType ? l : u)(e, t, n)),
                            (i = null),
                            e
                          );
                        },
                      ];
                    c < s;
                    c++
                  )
                    if ((n = S.relative[t[c].type])) p = [P(ve(p), n)];
                    else {
                      if (
                        (n = S.filter[t[c].type].apply(null, t[c].matches))[x]
                      ) {
                        for (o = ++c; o < s && !S.relative[t[o].type]; o++);
                        return ye(
                          1 < c && ve(p),
                          1 < c &&
                            E(
                              t
                                .slice(0, c - 1)
                                .concat({
                                  value: " " === t[c - 2].type ? "*" : "",
                                }),
                            ).replace(T, "$1"),
                          n,
                          c < o && e(t.slice(c, o)),
                          o < s && e((t = t.slice(o))),
                          o < s && E(t),
                        );
                      }
                      p.push(n);
                    }
                  return ve(p);
                })(t[n]))[x]
                  ? i
                  : o
                ).push(s);
              (s = b(e, Se(o, i))).selector = e;
            }
            return s;
          }),
        (B = M.select =
          function (e, t, n, i) {
            var o,
              s,
              r,
              a,
              c,
              l = "function" == typeof e && e,
              u = !i && h((e = l.selector || e));
            if (((n = n || []), 1 === u.length)) {
              if (
                2 < (s = u[0] = u[0].slice(0)).length &&
                "ID" === (r = s[0]).type &&
                9 === t.nodeType &&
                C &&
                S.relative[s[1].type]
              ) {
                if (!(t = (S.find.ID(r.matches[0].replace(A, p), t) || [])[0]))
                  return n;
                (l && (t = t.parentNode),
                  (e = e.slice(s.shift().value.length)));
              }
              for (
                o = d.needsContext.test(e) ? 0 : s.length;
                o-- && ((r = s[o]), !S.relative[(a = r.type)]);
              )
                if (
                  (c = S.find[a]) &&
                  (i = c(
                    r.matches[0].replace(A, p),
                    (ce.test(s[0].type) && me(t.parentNode)) || t,
                  ))
                ) {
                  if ((s.splice(o, 1), (e = i.length && E(s)))) break;
                  return (I.apply(n, i), n);
                }
            }
            return (
              (l || $(e, u))(
                i,
                t,
                !C,
                n,
                !t || (ce.test(e) && me(t.parentNode)) || t,
              ),
              n
            );
          }),
        (f.sortStable = x.split("").sort(W).join("") === x),
        (f.detectDuplicates = !!l),
        _(),
        (f.sortDetached = N(function (e) {
          return 1 & e.compareDocumentPosition(w.createElement("fieldset"));
        })),
        N(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          de("type|href|height|width", function (e, t, n) {
            if (!n)
              return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (f.attributes &&
          N(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          de("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
              return e.defaultValue;
          }),
        N(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          de(z, function (e, t, n) {
            if (!n)
              return !0 === e[t]
                ? t.toLowerCase()
                : (n = e.getAttributeNode(t)) && n.specified
                  ? n.value
                  : null;
          }),
        M
      );
    })(k),
    Q =
      ((w.find = t),
      (w.expr = t.selectors),
      (w.expr[":"] = w.expr.pseudos),
      (w.uniqueSort = w.unique = t.uniqueSort),
      (w.text = t.getText),
      (w.isXMLDoc = t.isXML),
      (w.contains = t.contains),
      (w.escapeSelector = t.escape),
      w.expr.match.needsContext),
    Y = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    Z = /^.[^:#\[\.,]*$/;
  function ee(e, n, i) {
    return w.isFunction(n)
      ? w.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== i;
        })
      : n.nodeType
        ? w.grep(e, function (e) {
            return (e === n) !== i;
          })
        : "string" != typeof n
          ? w.grep(e, function (e) {
              return -1 < o.call(n, e) !== i;
            })
          : Z.test(n)
            ? w.filter(n, e, i)
            : ((n = w.filter(n, e)),
              w.grep(e, function (e) {
                return -1 < o.call(n, e) !== i && 1 === e.nodeType;
              }));
  }
  ((w.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? w.find.matchesSelector(i, e)
          ? [i]
          : []
        : w.find.matches(
            e,
            w.grep(t, function (e) {
              return 1 === e.nodeType;
            }),
          )
    );
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          o = this;
        if ("string" != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < i; t++) if (w.contains(o[t], this)) return !0;
            }),
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, o[t], n);
        return 1 < i ? w.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(ee(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(ee(this, e || [], !0));
      },
      is: function (e) {
        return !!ee(
          this,
          "string" == typeof e && Q.test(e) ? w(e) : e || [],
          !1,
        ).length;
      },
    }));
  var te,
    ne = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    ie =
      (((w.fn.init = function (e, t, n) {
        if (e) {
          if (((n = n || te), "string" != typeof e))
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : w.isFunction(e)
                ? void 0 !== n.ready
                  ? n.ready(e)
                  : e(w)
                : w.makeArray(e, this);
          if (
            !(i =
              "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                ? [null, e, null]
                : ne.exec(e)) ||
            (!i[1] && t)
          )
            return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
          if (i[1]) {
            if (
              ((t = t instanceof w ? t[0] : t),
              w.merge(
                this,
                w.parseHTML(
                  i[1],
                  t && t.nodeType ? t.ownerDocument || t : _,
                  !0,
                ),
              ),
              Y.test(i[1]) && w.isPlainObject(t))
            )
              for (var i in t)
                w.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          } else
            (n = _.getElementById(i[2])) && ((this[0] = n), (this.length = 1));
        }
        return this;
      }).prototype = w.fn),
      (te = w(_)),
      /^(?:parents|prev(?:Until|All))/),
    oe = { children: !0, contents: !0, next: !0, prev: !0 };
  function se(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;);
    return e;
  }
  (w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        o = this.length,
        s = [],
        r = "string" != typeof e && w(e);
      if (!Q.test(e))
        for (; i < o; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (r
                ? -1 < r.index(n)
                : 1 === n.nodeType && w.find.matchesSelector(n, e))
            ) {
              s.push(n);
              break;
            }
      return this.pushStack(1 < s.length ? w.uniqueSort(s) : s);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? o.call(w(e), this[0])
          : o.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    w.each(
      {
        parent: function (e) {
          e = e.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (e) {
          return i(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return i(e, "parentNode", n);
        },
        next: function (e) {
          return se(e, "nextSibling");
        },
        prev: function (e) {
          return se(e, "previousSibling");
        },
        nextAll: function (e) {
          return i(e, "nextSibling");
        },
        prevAll: function (e) {
          return i(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return i(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return i(e, "previousSibling", n);
        },
        siblings: function (e) {
          return z((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return z(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument || w.merge([], e.childNodes);
        },
      },
      function (i, o) {
        w.fn[i] = function (e, t) {
          var n = w.map(this, o, e);
          return (
            (t = "Until" !== i.slice(-5) ? e : t) &&
              "string" == typeof t &&
              (n = w.filter(t, n)),
            1 < this.length &&
              (oe[i] || w.uniqueSort(n), ie.test(i)) &&
              n.reverse(),
            this.pushStack(n)
          );
        };
      },
    ));
  var C = /[^\x20\t\r\n\f]+/g;
  function u(e) {
    return e;
  }
  function re(e) {
    throw e;
  }
  function ae(e, t, n) {
    var i;
    try {
      e && w.isFunction((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && w.isFunction((i = e.then))
          ? i.call(e, t, n)
          : t.call(void 0, e);
    } catch (e) {
      n.call(void 0, e);
    }
  }
  ((w.Callbacks = function (i) {
    var e, n;
    i =
      "string" == typeof i
        ? ((e = i),
          (n = {}),
          w.each(e.match(C) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : w.extend({}, i);
    function o() {
      for (a = i.once, r = s = !0; l.length; u = -1)
        for (t = l.shift(); ++u < c.length;)
          !1 === c[u].apply(t[0], t[1]) &&
            i.stopOnFalse &&
            ((u = c.length), (t = !1));
      (i.memory || (t = !1), (s = !1), a && (c = t ? [] : ""));
    }
    var s,
      t,
      r,
      a,
      c = [],
      l = [],
      u = -1,
      p = {
        add: function () {
          return (
            c &&
              (t && !s && ((u = c.length - 1), l.push(t)),
              (function n(e) {
                w.each(e, function (e, t) {
                  w.isFunction(t)
                    ? (i.unique && p.has(t)) || c.push(t)
                    : t && t.length && "string" !== w.type(t) && n(t);
                });
              })(arguments),
              t) &&
              !s &&
              o(),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              for (var n; -1 < (n = w.inArray(t, c, n));)
                (c.splice(n, 1), n <= u && u--);
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < w.inArray(e, c) : 0 < c.length;
        },
        empty: function () {
          return ((c = c && []), this);
        },
        disable: function () {
          return ((a = l = []), (c = t = ""), this);
        },
        disabled: function () {
          return !c;
        },
        lock: function () {
          return ((a = l = []), t || s || (c = t = ""), this);
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]), l.push(t), s) ||
              o(),
            this
          );
        },
        fire: function () {
          return (p.fireWith(this, arguments), this);
        },
        fired: function () {
          return !!r;
        },
      };
    return p;
  }),
    w.extend({
      Deferred: function (e) {
        var s = [
            [
              "notify",
              "progress",
              w.Callbacks("memory"),
              w.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              w.Callbacks("once memory"),
              w.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              w.Callbacks("once memory"),
              w.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          o = "pending",
          r = {
            state: function () {
              return o;
            },
            always: function () {
              return (a.done(arguments).fail(arguments), this);
            },
            catch: function (e) {
              return r.then(null, e);
            },
            pipe: function () {
              var o = arguments;
              return w
                .Deferred(function (i) {
                  (w.each(s, function (e, t) {
                    var n = w.isFunction(o[t[4]]) && o[t[4]];
                    a[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && w.isFunction(e.promise)
                        ? e
                            .promise()
                            .progress(i.notify)
                            .done(i.resolve)
                            .fail(i.reject)
                        : i[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (o = null));
                })
                .promise();
            },
            then: function (t, n, i) {
              var c = 0;
              function l(o, s, r, a) {
                return function () {
                  function e() {
                    var e, t;
                    if (!(o < c)) {
                      if ((e = r.apply(n, i)) === s.promise())
                        throw new TypeError("Thenable self-resolution");
                      ((t =
                        e &&
                        ("object" == typeof e || "function" == typeof e) &&
                        e.then),
                        w.isFunction(t)
                          ? a
                            ? t.call(e, l(c, s, u, a), l(c, s, re, a))
                            : (c++,
                              t.call(
                                e,
                                l(c, s, u, a),
                                l(c, s, re, a),
                                l(c, s, u, s.notifyWith),
                              ))
                          : (r !== u && ((n = void 0), (i = [e])),
                            (a || s.resolveWith)(n, i)));
                    }
                  }
                  var n = this,
                    i = arguments,
                    t = a
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            (w.Deferred.exceptionHook &&
                              w.Deferred.exceptionHook(e, t.stackTrace),
                              c <= o + 1 &&
                                (r !== re && ((n = void 0), (i = [e])),
                                s.rejectWith(n, i)));
                          }
                        };
                  o
                    ? t()
                    : (w.Deferred.getStackHook &&
                        (t.stackTrace = w.Deferred.getStackHook()),
                      k.setTimeout(t));
                };
              }
              return w
                .Deferred(function (e) {
                  (s[0][3].add(l(0, e, w.isFunction(i) ? i : u, e.notifyWith)),
                    s[1][3].add(l(0, e, w.isFunction(t) ? t : u)),
                    s[2][3].add(l(0, e, w.isFunction(n) ? n : re)));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? w.extend(e, r) : r;
            },
          },
          a = {};
        return (
          w.each(s, function (e, t) {
            var n = t[2],
              i = t[5];
            ((r[t[1]] = n.add),
              i &&
                n.add(
                  function () {
                    o = i;
                  },
                  s[3 - e][2].disable,
                  s[0][2].lock,
                ),
              n.add(t[3].fire),
              (a[t[0]] = function () {
                return (
                  a[t[0] + "With"](this === a ? void 0 : this, arguments),
                  this
                );
              }),
              (a[t[0] + "With"] = n.fireWith));
          }),
          r.promise(a),
          e && e.call(a, a),
          a
        );
      },
      when: function (e) {
        function t(t) {
          return function (e) {
            ((o[t] = this),
              (s[t] = 1 < arguments.length ? a.call(arguments) : e),
              --n || r.resolveWith(o, s));
          };
        }
        var n = arguments.length,
          i = n,
          o = Array(i),
          s = a.call(arguments),
          r = w.Deferred();
        if (
          n <= 1 &&
          (ae(e, r.done(t(i)).resolve, r.reject),
          "pending" === r.state() || w.isFunction(s[i] && s[i].then))
        )
          return r.then();
        for (; i--;) ae(s[i], t(i), r.reject);
        return r.promise();
      },
    }));
  var ce = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
    le =
      ((w.Deferred.exceptionHook = function (e, t) {
        k.console &&
          k.console.warn &&
          e &&
          ce.test(e.name) &&
          k.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
      (w.readyException = function (e) {
        k.setTimeout(function () {
          throw e;
        });
      }),
      w.Deferred());
  function ue() {
    (_.removeEventListener("DOMContentLoaded", ue),
      k.removeEventListener("load", ue),
      w.ready());
  }
  ((w.fn.ready = function (e) {
    return (
      le.then(e).catch(function (e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? w.readyWait++ : w.ready(!0);
      },
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0) !== e && 0 < --w.readyWait) ||
          le.resolveWith(_, [w]);
      },
    }),
    (w.ready.then = le.then),
    "complete" === _.readyState ||
    ("loading" !== _.readyState && !_.documentElement.doScroll)
      ? k.setTimeout(w.ready)
      : (_.addEventListener("DOMContentLoaded", ue),
        k.addEventListener("load", ue)));
  function p(e, t, n, i, o, s, r) {
    var a = 0,
      c = e.length,
      l = null == n;
    if ("object" === w.type(n))
      for (a in ((o = !0), n)) p(e, t, a, n[a], !0, s, r);
    else if (
      void 0 !== i &&
      ((o = !0),
      w.isFunction(i) || (r = !0),
      (t = l
        ? r
          ? (t.call(e, i), null)
          : ((l = t),
            function (e, t, n) {
              return l.call(w(e), n);
            })
        : t))
    )
      for (; a < c; a++) t(e[a], n, r ? i : i.call(e[a], a, t(e[a], n)));
    return o ? e : l ? t.call(e) : c ? t(e[0], n) : s;
  }
  function pe(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }
  function s() {
    this.expando = w.expando + s.uid++;
  }
  ((s.uid = 1),
    (s.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            pe(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          o = this.cache(e);
        if ("string" == typeof t) o[w.camelCase(t)] = n;
        else for (i in t) o[w.camelCase(i)] = t[i];
        return o;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][w.camelCase(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = w.isArray(t)
              ? t.map(w.camelCase)
              : (t = w.camelCase(t)) in i
                ? [t]
                : t.match(C) || []).length;
            for (; n--;) delete i[t[n]];
          }
          (void 0 !== t && !w.isEmptyObject(i)) ||
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        e = e[this.expando];
        return void 0 !== e && !w.isEmptyObject(e);
      },
    }));
  var v = new s(),
    c = new s(),
    de = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    fe = /[A-Z]/g;
  function he(e, t, n) {
    var i, o;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(fe, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n =
            "true" === (o = n) ||
            ("false" !== o &&
              ("null" === o
                ? null
                : o === +o + ""
                  ? +o
                  : de.test(o)
                    ? JSON.parse(o)
                    : o));
        } catch (e) {}
        c.set(e, t, n);
      } else n = void 0;
    return n;
  }
  (w.extend({
    hasData: function (e) {
      return c.hasData(e) || v.hasData(e);
    },
    data: function (e, t, n) {
      return c.access(e, t, n);
    },
    removeData: function (e, t) {
      c.remove(e, t);
    },
    _data: function (e, t, n) {
      return v.access(e, t, n);
    },
    _removeData: function (e, t) {
      v.remove(e, t);
    },
  }),
    w.fn.extend({
      data: function (n, e) {
        var t,
          i,
          o,
          s = this[0],
          r = s && s.attributes;
        if (void 0 !== n)
          return "object" == typeof n
            ? this.each(function () {
                c.set(this, n);
              })
            : p(
                this,
                function (e) {
                  var t;
                  if (s && void 0 === e)
                    return void 0 !== (t = c.get(s, n)) ||
                      void 0 !== (t = he(s, n))
                      ? t
                      : void 0;
                  this.each(function () {
                    c.set(this, n, e);
                  });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0,
              );
        if (
          this.length &&
          ((o = c.get(s)), 1 === s.nodeType) &&
          !v.get(s, "hasDataAttrs")
        ) {
          for (t = r.length; t--;)
            r[t] &&
              0 === (i = r[t].name).indexOf("data-") &&
              ((i = w.camelCase(i.slice(5))), he(s, i, o[i]));
          v.set(s, "hasDataAttrs", !0);
        }
        return o;
      },
      removeData: function (e) {
        return this.each(function () {
          c.remove(this, e);
        });
      },
    }),
    w.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (i = v.get(e, (t = (t || "fx") + "queue"))),
            n &&
              (!i || w.isArray(n)
                ? (i = v.access(e, t, w.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = w.queue(e, t),
          i = n.length,
          o = n.shift(),
          s = w._queueHooks(e, t);
        ("inprogress" === o && ((o = n.shift()), i--),
          o &&
            ("fx" === t && n.unshift("inprogress"),
            delete s.stop,
            o.call(
              e,
              function () {
                w.dequeue(e, t);
              },
              s,
            )),
          !i && s && s.empty.fire());
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          v.get(e, n) ||
          v.access(e, n, {
            empty: w.Callbacks("once memory").add(function () {
              v.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    w.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? w.queue(this[0], t)
            : void 0 === n
              ? this
              : this.each(function () {
                  var e = w.queue(this, t, n);
                  (w._queueHooks(this, t),
                    "fx" === t && "inprogress" !== e[0] && w.dequeue(this, t));
                })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        function n() {
          --o || s.resolveWith(r, [r]);
        }
        var i,
          o = 1,
          s = w.Deferred(),
          r = this,
          a = this.length;
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          a--;
        )
          (i = v.get(r[a], e + "queueHooks")) &&
            i.empty &&
            (o++, i.empty.add(n));
        return (n(), s.promise(t));
      },
    }));
  function me(e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display &&
        w.contains(e.ownerDocument, e) &&
        "none" === w.css(e, "display"))
    );
  }
  function ge(e, t, n, i) {
    var o,
      s = {};
    for (o in t) ((s[o] = e.style[o]), (e.style[o] = t[o]));
    for (o in ((n = n.apply(e, i || [])), t)) e.style[o] = s[o];
    return n;
  }
  var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    d = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
    l = ["Top", "Right", "Bottom", "Left"];
  function ve(e, t, n, i) {
    var o,
      s = 1,
      r = 20,
      a = i
        ? function () {
            return i.cur();
          }
        : function () {
            return w.css(e, t, "");
          },
      c = a(),
      l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
      u = (w.cssNumber[t] || ("px" !== l && +c)) && d.exec(w.css(e, t));
    if (u && u[3] !== l)
      for (
        l = l || u[3], n = n || [], u = +c || 1;
        w.style(e, t, (u /= s = s || ".5") + l),
          s !== (s = a() / c) && 1 !== s && --r;
      );
    return (
      n &&
        ((u = +u || +c || 0), (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), i) &&
        ((i.unit = l), (i.start = u), (i.end = o)),
      o
    );
  }
  var be = {};
  function g(e, t) {
    for (var n, i, o, s, r, a = [], c = 0, l = e.length; c < l; c++)
      (i = e[c]).style &&
        ((n = i.style.display),
        t
          ? ("none" === n &&
              ((a[c] = v.get(i, "display") || null),
              a[c] || (i.style.display = "")),
            "" === i.style.display &&
              me(i) &&
              (a[c] =
                ((r = s = void 0),
                (s = (o = i).ownerDocument),
                (r = be[(o = o.nodeName)]) ||
                  ((s = s.body.appendChild(s.createElement(o))),
                  (r = w.css(s, "display")),
                  s.parentNode.removeChild(s),
                  (be[o] = r = "none" === r ? "block" : r)))))
          : "none" !== n && ((a[c] = "none"), v.set(i, "display", n)));
    for (c = 0; c < l; c++) null != a[c] && (e[c].style.display = a[c]);
    return e;
  }
  w.fn.extend({
    show: function () {
      return g(this, !0);
    },
    hide: function () {
      return g(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            me(this) ? w(this).show() : w(this).hide();
          });
    },
  });
  var ye = /^(?:checkbox|radio)$/i,
    Se = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    ke = /^$|\/(?:java|ecma)script/i,
    h = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function b(e, t) {
    var n =
      void 0 !== e.getElementsByTagName
        ? e.getElementsByTagName(t || "*")
        : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : [];
    return void 0 === t || (t && w.nodeName(e, t)) ? w.merge([e], n) : n;
  }
  function _e(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      v.set(e[n], "globalEval", !t || v.get(t[n], "globalEval"));
  }
  ((h.optgroup = h.option),
    (h.tbody = h.tfoot = h.colgroup = h.caption = h.thead),
    (h.th = h.td));
  var we = /<|&#?\w+;/;
  function Ce(e, t, n, i, o) {
    for (
      var s,
        r,
        a,
        c,
        l,
        u = t.createDocumentFragment(),
        p = [],
        d = 0,
        f = e.length;
      d < f;
      d++
    )
      if ((s = e[d]) || 0 === s)
        if ("object" === w.type(s)) w.merge(p, s.nodeType ? [s] : s);
        else if (we.test(s)) {
          for (
            r = r || u.appendChild(t.createElement("div")),
              a = (Se.exec(s) || ["", ""])[1].toLowerCase(),
              a = h[a] || h._default,
              r.innerHTML = a[1] + w.htmlPrefilter(s) + a[2],
              l = a[0];
            l--;
          )
            r = r.lastChild;
          (w.merge(p, r.childNodes), ((r = u.firstChild).textContent = ""));
        } else p.push(t.createTextNode(s));
    for (u.textContent = "", d = 0; (s = p[d++]);)
      if (i && -1 < w.inArray(s, i)) o && o.push(s);
      else if (
        ((c = w.contains(s.ownerDocument, s)),
        (r = b(u.appendChild(s), "script")),
        c && _e(r),
        n)
      )
        for (l = 0; (s = r[l++]);) ke.test(s.type || "") && n.push(s);
    return u;
  }
  ((t = _.createDocumentFragment().appendChild(_.createElement("div"))),
    (A = _.createElement("input")).setAttribute("type", "radio"),
    A.setAttribute("checked", "checked"),
    A.setAttribute("name", "t"),
    t.appendChild(A),
    (m.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (t.innerHTML = "<textarea>x</textarea>"),
    (m.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue));
  var xe = _.documentElement,
    je = /^key/,
    Ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Te = /^([^.]*)(?:\.(.+)|)/;
  function Ae() {
    return !0;
  }
  function f() {
    return !1;
  }
  function Me() {
    try {
      return _.activeElement;
    } catch (e) {}
  }
  function Le(e, t, n, i, o, s) {
    var r, a;
    if ("object" == typeof t) {
      for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
        Le(e, a, n, i, t[a], s);
      return e;
    }
    if (
      (null == i && null == o
        ? ((o = n), (i = n = void 0))
        : null == o &&
          ("string" == typeof n
            ? ((o = i), (i = void 0))
            : ((o = i), (i = n), (n = void 0))),
      !1 === o)
    )
      o = f;
    else if (!o) return e;
    return (
      1 === s &&
        ((r = o),
        ((o = function (e) {
          return (w().off(e), r.apply(this, arguments));
        }).guid = r.guid || (r.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, o, i, n);
      })
    );
  }
  ((w.event = {
    global: {},
    add: function (t, e, n, i, o) {
      var s,
        r,
        a,
        c,
        l,
        u,
        p,
        d,
        f,
        h = v.get(t);
      if (h)
        for (
          n.handler && ((n = (s = n).handler), (o = s.selector)),
            o && w.find.matchesSelector(xe, o),
            n.guid || (n.guid = w.guid++),
            a = (a = h.events) || (h.events = {}),
            r =
              (r = h.handle) ||
              (h.handle = function (e) {
                return void 0 !== w && w.event.triggered !== e.type
                  ? w.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
            c = (e = (e || "").match(C) || [""]).length;
          c--;
        )
          ((p = f = (d = Te.exec(e[c]) || [])[1]),
            (d = (d[2] || "").split(".").sort()),
            p &&
              ((l = w.event.special[p] || {}),
              (p = (o ? l.delegateType : l.bindType) || p),
              (l = w.event.special[p] || {}),
              (f = w.extend(
                {
                  type: p,
                  origType: f,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && w.expr.match.needsContext.test(o),
                  namespace: d.join("."),
                },
                s,
              )),
              (u = a[p]) ||
                (((u = a[p] = []).delegateCount = 0),
                l.setup && !1 !== l.setup.call(t, i, d, r)) ||
                (t.addEventListener && t.addEventListener(p, r)),
              l.add &&
                (l.add.call(t, f), f.handler.guid || (f.handler.guid = n.guid)),
              o ? u.splice(u.delegateCount++, 0, f) : u.push(f),
              (w.event.global[p] = !0)));
    },
    remove: function (e, t, n, i, o) {
      var s,
        r,
        a,
        c,
        l,
        u,
        p,
        d,
        f,
        h,
        m,
        g = v.hasData(e) && v.get(e);
      if (g && (c = g.events)) {
        for (l = (t = (t || "").match(C) || [""]).length; l--;)
          if (
            ((f = m = (a = Te.exec(t[l]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            f)
          ) {
            for (
              p = w.event.special[f] || {},
                d = c[(f = (i ? p.delegateType : p.bindType) || f)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                r = s = d.length;
              s--;
            )
              ((u = d[s]),
                (!o && m !== u.origType) ||
                  (n && n.guid !== u.guid) ||
                  (a && !a.test(u.namespace)) ||
                  (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                  (d.splice(s, 1),
                  u.selector && d.delegateCount--,
                  p.remove && p.remove.call(e, u)));
            r &&
              !d.length &&
              ((p.teardown && !1 !== p.teardown.call(e, h, g.handle)) ||
                w.removeEvent(e, f, g.handle),
              delete c[f]);
          } else for (f in c) w.event.remove(e, f + t[l], n, i, !0);
        w.isEmptyObject(c) && v.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        o,
        s,
        r = w.event.fix(e),
        a = new Array(arguments.length),
        e = (v.get(this, "events") || {})[r.type] || [],
        c = w.event.special[r.type] || {};
      for (a[0] = r, t = 1; t < arguments.length; t++) a[t] = arguments[t];
      if (
        ((r.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, r))
      ) {
        for (
          s = w.event.handlers.call(this, r, e), t = 0;
          (i = s[t++]) && !r.isPropagationStopped();
        )
          for (
            r.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !r.isImmediatePropagationStopped();
          )
            (r.rnamespace && !r.rnamespace.test(o.namespace)) ||
              ((r.handleObj = o),
              (r.data = o.data),
              void 0 !==
                (o = (
                  (w.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, a)) &&
                !1 === (r.result = o) &&
                (r.preventDefault(), r.stopPropagation()));
        return (c.postDispatch && c.postDispatch.call(this, r), r.result);
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        o,
        s,
        r,
        a = [],
        c = t.delegateCount,
        l = e.target;
      if (c && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (s = [], r = {}, n = 0; n < c; n++)
              (void 0 === r[(o = (i = t[n]).selector + " ")] &&
                (r[o] = i.needsContext
                  ? -1 < w(o, this).index(l)
                  : w.find(o, this, null, [l]).length),
                r[o] && s.push(i));
            s.length && a.push({ elem: l, handlers: s });
          }
      return (
        (l = this),
        c < t.length && a.push({ elem: l, handlers: t.slice(c) }),
        a
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(w.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: w.isFunction(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== Me() && this.focus) return (this.focus(), !1);
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === Me() && this.blur) return (this.blur(), !1);
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if (
            "checkbox" === this.type &&
            this.click &&
            w.nodeName(this, "input")
          )
            return (this.click(), !1);
        },
        _default: function (e) {
          return w.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function (e, t) {
      return this instanceof w.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Ae
                  : f),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
          t && w.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || w.now()),
          void (this[w.expando] = !0))
        : new w.Event(e, t);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: f,
      isPropagationStopped: f,
      isImmediatePropagationStopped: f,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        ((this.isDefaultPrevented = Ae),
          e && !this.isSimulated && e.preventDefault());
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        ((this.isPropagationStopped = Ae),
          e && !this.isSimulated && e.stopPropagation());
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        ((this.isImmediatePropagationStopped = Ae),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation());
      },
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && je.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Ie.test(e.type)
              ? 1 & t
                ? 1
                : 2 & t
                  ? 3
                  : 4 & t
                    ? 2
                    : 0
              : e.which;
        },
      },
      w.event.addProp,
    ),
    w.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, o) {
        w.event.special[e] = {
          delegateType: o,
          bindType: o,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              i = e.handleObj;
            return (
              (n && (n === this || w.contains(this, n))) ||
                ((e.type = i.origType),
                (t = i.handler.apply(this, arguments)),
                (e.type = o)),
              t
            );
          },
        };
      },
    ),
    w.fn.extend({
      on: function (e, t, n, i) {
        return Le(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return Le(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)
          ((i = e.handleObj),
            w(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler,
            ));
        else {
          if ("object" != typeof e)
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = f),
              this.each(function () {
                w.event.remove(this, e, n, t);
              })
            );
          for (o in e) this.off(o, t, e[o]);
        }
        return this;
      },
    }));
  var Ne =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    De = /<script|<style|<link/i,
    Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Pe = /^true\/(.*)/,
    Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Ue(e, t) {
    return (
      (w.nodeName(e, "table") &&
        w.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        e.getElementsByTagName("tbody")[0]) ||
      e
    );
  }
  function He(e) {
    return ((e.type = (null !== e.getAttribute("type")) + "/" + e.type), e);
  }
  function Fe(e) {
    var t = Pe.exec(e.type);
    return (t ? (e.type = t[1]) : e.removeAttribute("type"), e);
  }
  function $e(e, t) {
    var n, i, o, s, r, a;
    if (1 === t.nodeType) {
      if (
        v.hasData(e) &&
        ((s = v.access(e)), (r = v.set(t, s)), (a = s.events))
      )
        for (o in (delete r.handle, (r.events = {}), a))
          for (n = 0, i = a[o].length; n < i; n++) w.event.add(t, o, a[o][n]);
      c.hasData(e) && ((s = c.access(e)), (r = w.extend({}, s)), c.set(t, r));
    }
  }
  function y(n, i, o, s) {
    i = H.apply([], i);
    var e,
      t,
      r,
      a,
      c,
      l,
      u = 0,
      p = n.length,
      d = p - 1,
      f = i[0],
      h = w.isFunction(f);
    if (h || (1 < p && "string" == typeof f && !m.checkClone && Ee.test(f)))
      return n.each(function (e) {
        var t = n.eq(e);
        (h && (i[0] = f.call(this, e, t.html())), y(t, i, o, s));
      });
    if (
      p &&
      ((t = (e = Ce(i, n[0].ownerDocument, !1, n, s)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || s)
    ) {
      for (a = (r = w.map(b(e, "script"), He)).length; u < p; u++)
        ((c = e),
          u !== d &&
            ((c = w.clone(c, !0, !0)), a) &&
            w.merge(r, b(c, "script")),
          o.call(n[u], c, u));
      if (a)
        for (l = r[r.length - 1].ownerDocument, w.map(r, Fe), u = 0; u < a; u++)
          ((c = r[u]),
            ke.test(c.type || "") &&
              !v.access(c, "globalEval") &&
              w.contains(l, c) &&
              (c.src
                ? w._evalUrl && w._evalUrl(c.src)
                : q(c.textContent.replace(Oe, ""), l)));
    }
    return n;
  }
  function Be(e, t, n) {
    for (var i, o = t ? w.filter(t, e) : e, s = 0; null != (i = o[s]); s++)
      (n || 1 !== i.nodeType || w.cleanData(b(i)),
        i.parentNode &&
          (n && w.contains(i.ownerDocument, i) && _e(b(i, "script")),
          i.parentNode.removeChild(i)));
    return e;
  }
  (w.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ne, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var i,
        o,
        s,
        r,
        a,
        c,
        l,
        u = e.cloneNode(!0),
        p = w.contains(e.ownerDocument, e);
      if (!(
        m.noCloneChecked ||
        (1 !== e.nodeType && 11 !== e.nodeType) ||
        w.isXMLDoc(e)
      ))
        for (r = b(u), i = 0, o = (s = b(e)).length; i < o; i++)
          ((a = s[i]),
            (c = r[i]),
            (l = void 0),
            "input" === (l = c.nodeName.toLowerCase()) && ye.test(a.type)
              ? (c.checked = a.checked)
              : ("input" !== l && "textarea" !== l) ||
                (c.defaultValue = a.defaultValue));
      if (t)
        if (n)
          for (s = s || b(e), r = r || b(u), i = 0, o = s.length; i < o; i++)
            $e(s[i], r[i]);
        else $e(e, u);
      return (
        0 < (r = b(u, "script")).length && _e(r, !p && b(e, "script")),
        u
      );
    },
    cleanData: function (e) {
      for (var t, n, i, o = w.event.special, s = 0; void 0 !== (n = e[s]); s++)
        if (pe(n)) {
          if ((t = n[v.expando])) {
            if (t.events)
              for (i in t.events)
                o[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
            n[v.expando] = void 0;
          }
          n[c.expando] && (n[c.expando] = void 0);
        }
    },
  }),
    w.fn.extend({
      detach: function (e) {
        return Be(this, e, !0);
      },
      remove: function (e) {
        return Be(this, e);
      },
      text: function (e) {
        return p(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length,
        );
      },
      append: function () {
        return y(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Ue(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return y(this, arguments, function (e) {
          var t;
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            (t = Ue(this, e)).insertBefore(e, t.firstChild);
        });
      },
      before: function () {
        return y(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return y(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(b(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return p(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !De.test(e) &&
              !h[(Se.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (w.cleanData(b(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length,
        );
      },
      replaceWith: function () {
        var n = [];
        return y(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            w.inArray(this, n) < 0 &&
              (w.cleanData(b(this)), t) &&
              t.replaceChild(e, this);
          },
          n,
        );
      },
    }),
    w.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, r) {
        w.fn[e] = function (e) {
          for (var t, n = [], i = w(e), o = i.length - 1, s = 0; s <= o; s++)
            ((t = s === o ? this : this.clone(!0)),
              w(i[s])[r](t),
              F.apply(n, t.get()));
          return this.pushStack(n);
        };
      },
    ));
  function Re(e) {
    var t = e.ownerDocument.defaultView;
    return (t = t && t.opener ? t : k).getComputedStyle(e);
  }
  var Ve,
    qe,
    We,
    Ke,
    r,
    S,
    Je = /^margin/,
    Ge = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i");
  function Xe() {
    var e;
    S &&
      ((S.style.cssText =
        "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
      (S.innerHTML = ""),
      xe.appendChild(r),
      (e = k.getComputedStyle(S)),
      (Ve = "1%" !== e.top),
      (Ke = "2px" === e.marginLeft),
      (qe = "4px" === e.width),
      (S.style.marginRight = "50%"),
      (We = "4px" === e.marginRight),
      xe.removeChild(r),
      (S = null));
  }
  function x(e, t, n) {
    var i,
      o,
      s = e.style;
    return (
      (n = n || Re(e)) &&
        ("" !== (o = n.getPropertyValue(t) || n[t]) ||
          w.contains(e.ownerDocument, e) ||
          (o = w.style(e, t)),
        !m.pixelMarginRight()) &&
        Ge.test(o) &&
        Je.test(t) &&
        ((e = s.width),
        (t = s.minWidth),
        (i = s.maxWidth),
        (s.minWidth = s.maxWidth = s.width = o),
        (o = n.width),
        (s.width = e),
        (s.minWidth = t),
        (s.maxWidth = i)),
      void 0 !== o ? o + "" : o
    );
  }
  function ze(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      },
    };
  }
  ((r = _.createElement("div")),
    (S = _.createElement("div")).style &&
      ((S.style.backgroundClip = "content-box"),
      (S.cloneNode(!0).style.backgroundClip = ""),
      (m.clearCloneStyle = "content-box" === S.style.backgroundClip),
      (r.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      r.appendChild(S),
      w.extend(m, {
        pixelPosition: function () {
          return (Xe(), Ve);
        },
        boxSizingReliable: function () {
          return (Xe(), qe);
        },
        pixelMarginRight: function () {
          return (Xe(), We);
        },
        reliableMarginLeft: function () {
          return (Xe(), Ke);
        },
      })));
  var Qe = /^(none|table(?!-c[ea]).+)/,
    Ye = { position: "absolute", visibility: "hidden", display: "block" },
    Ze = { letterSpacing: "0", fontWeight: "400" },
    et = ["Webkit", "Moz", "ms"],
    tt = _.createElement("div").style;
  function nt(e) {
    if (e in tt) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--;)
      if ((e = et[n] + t) in tt) return e;
  }
  function it(e, t, n) {
    var i = d.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function ot(e, t, n, i, o) {
    for (
      var s = 0,
        r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0;
      r < 4;
      r += 2
    )
      ("margin" === n && (s += w.css(e, n + l[r], !0, o)),
        i
          ? ("content" === n && (s -= w.css(e, "padding" + l[r], !0, o)),
            "margin" !== n && (s -= w.css(e, "border" + l[r] + "Width", !0, o)))
          : ((s += w.css(e, "padding" + l[r], !0, o)),
            "padding" !== n &&
              (s += w.css(e, "border" + l[r] + "Width", !0, o))));
    return s;
  }
  function st(e, t, n) {
    var i,
      o = !0,
      s = Re(e),
      r = "border-box" === w.css(e, "boxSizing", !1, s);
    if (
      (i = e.getClientRects().length ? e.getBoundingClientRect()[t] : i) <= 0 ||
      null == i
    ) {
      if ((((i = x(e, t, s)) < 0 || null == i) && (i = e.style[t]), Ge.test(i)))
        return i;
      ((o = r && (m.boxSizingReliable() || i === e.style[t])),
        (i = parseFloat(i) || 0));
    }
    return i + ot(e, t, n || (r ? "border" : "content"), o, s) + "px";
  }
  function j(e, t, n, i, o) {
    return new j.prototype.init(e, t, n, i, o);
  }
  (w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) return "" === (t = x(e, "opacity")) ? "1" : t;
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (e, t, n, i) {
      var o, s, r, a, c;
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style)
        return (
          (a = w.camelCase(t)),
          (c = e.style),
          (t = w.cssProps[a] || (w.cssProps[a] = nt(a) || a)),
          (r = w.cssHooks[t] || w.cssHooks[a]),
          void 0 === n
            ? r && "get" in r && void 0 !== (o = r.get(e, !1, i))
              ? o
              : c[t]
            : ("string" === (s = typeof n) &&
                (o = d.exec(n)) &&
                o[1] &&
                ((n = ve(e, t, o)), (s = "number")),
              void (
                null != n &&
                n == n &&
                ("number" === s &&
                  (n += (o && o[3]) || (w.cssNumber[a] ? "" : "px")),
                m.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (c[t] = "inherit"),
                (r && "set" in r && void 0 === (n = r.set(e, n, i))) ||
                  (c[t] = n))
              ))
        );
    },
    css: function (e, t, n, i) {
      var o,
        s = w.camelCase(t);
      return (
        (t = w.cssProps[s] || (w.cssProps[s] = nt(s) || s)),
        "normal" ===
          (o =
            void 0 ===
            (o =
              (s = w.cssHooks[t] || w.cssHooks[s]) && "get" in s
                ? s.get(e, !0, n)
                : o)
              ? x(e, t, i)
              : o) &&
          t in Ze &&
          (o = Ze[t]),
        ("" === n || n) && ((s = parseFloat(o)), !0 === n || isFinite(s))
          ? s || 0
          : o
      );
    },
  }),
    w.each(["height", "width"], function (e, o) {
      w.cssHooks[o] = {
        get: function (e, t, n) {
          if (t)
            return !Qe.test(w.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? st(e, o, n)
              : ge(e, Ye, function () {
                  return st(e, o, n);
                });
        },
        set: function (e, t, n) {
          var i = n && Re(e),
            n =
              n &&
              ot(e, o, n, "border-box" === w.css(e, "boxSizing", !1, i), i);
          return (
            n &&
              (i = d.exec(t)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[o] = t), (t = w.css(e, o))),
            it(0, t, n)
          );
        },
      };
    }),
    (w.cssHooks.marginLeft = ze(m.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(x(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              ge(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    w.each({ margin: "", padding: "", border: "Width" }, function (o, s) {
      ((w.cssHooks[o + s] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[o + l[t] + s] = i[t] || i[t - 2] || i[0];
          return n;
        },
      }),
        Je.test(o) || (w.cssHooks[o + s].set = it));
    }),
    w.fn.extend({
      css: function (e, t) {
        return p(
          this,
          function (e, t, n) {
            var i,
              o,
              s = {},
              r = 0;
            if (w.isArray(t)) {
              for (i = Re(e), o = t.length; r < o; r++)
                s[t[r]] = w.css(e, t[r], !1, i);
              return s;
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          },
          e,
          t,
          1 < arguments.length,
        );
      },
    }),
    (((w.Tween = j).prototype = {
      constructor: j,
      init: function (e, t, n, i, o, s) {
        ((this.elem = e),
          (this.prop = n),
          (this.easing = o || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = s || (w.cssNumber[n] ? "" : "px")));
      },
      cur: function () {
        var e = j.propHooks[this.prop];
        return (e && e.get ? e : j.propHooks._default).get(this);
      },
      run: function (e) {
        var t,
          n = j.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                w.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration,
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          (n && n.set ? n : j.propHooks._default).set(this),
          this
        );
      },
    }).init.prototype = j.prototype),
    ((j.propHooks = {
      _default: {
        get: function (e) {
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (e = w.css(e.elem, e.prop, "")) && "auto" !== e
              ? e
              : 0;
        },
        set: function (e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
                (null == e.elem.style[w.cssProps[e.prop]] &&
                  !w.cssHooks[e.prop])
              ? (e.elem[e.prop] = e.now)
              : w.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = j.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (w.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (w.fx = j.prototype.init),
    (w.fx.step = {}));
  var I,
    T,
    A,
    rt = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function ct() {
    T && (k.requestAnimationFrame(ct), w.fx.tick());
  }
  function lt() {
    return (
      k.setTimeout(function () {
        I = void 0;
      }),
      (I = w.now())
    );
  }
  function ut(e, t) {
    var n,
      i = 0,
      o = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      o["margin" + (n = l[i])] = o["padding" + n] = e;
    return (t && (o.opacity = o.width = e), o);
  }
  function pt(e, t, n) {
    for (
      var i,
        o = (M.tweeners[t] || []).concat(M.tweeners["*"]),
        s = 0,
        r = o.length;
      s < r;
      s++
    )
      if ((i = o[s].call(n, t, e))) return i;
  }
  function M(o, e, t) {
    var n,
      s,
      i,
      r,
      a,
      c,
      l,
      u = 0,
      p = M.prefilters.length,
      d = w.Deferred().always(function () {
        delete f.elem;
      }),
      f = function () {
        if (s) return !1;
        for (
          var e = I || lt(),
            e = Math.max(0, h.startTime + h.duration - e),
            t = 1 - (e / h.duration || 0),
            n = 0,
            i = h.tweens.length;
          n < i;
          n++
        )
          h.tweens[n].run(t);
        return (
          d.notifyWith(o, [h, t, e]),
          t < 1 && i ? e : (d.resolveWith(o, [h]), !1)
        );
      },
      h = d.promise({
        elem: o,
        props: w.extend({}, e),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: I || lt(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          t = w.Tween(
            o,
            h.opts,
            e,
            t,
            h.opts.specialEasing[e] || h.opts.easing,
          );
          return (h.tweens.push(t), t);
        },
        stop: function (e) {
          var t = 0,
            n = e ? h.tweens.length : 0;
          if (!s) {
            for (s = !0; t < n; t++) h.tweens[t].run(1);
            e
              ? (d.notifyWith(o, [h, 1, 0]), d.resolveWith(o, [h, e]))
              : d.rejectWith(o, [h, e]);
          }
          return this;
        },
      }),
      m = h.props,
      g = m,
      v = h.opts.specialEasing;
    for (i in g)
      if (
        ((r = w.camelCase(i)),
        (a = v[r]),
        (c = g[i]),
        w.isArray(c) && ((a = c[1]), (c = g[i] = c[0])),
        i !== r && ((g[r] = c), delete g[i]),
        (l = w.cssHooks[r]),
        l && "expand" in l)
      )
        for (i in ((c = l.expand(c)), delete g[r], c))
          i in g || ((g[i] = c[i]), (v[i] = a));
      else v[r] = a;
    for (; u < p; u++)
      if ((n = M.prefilters[u].call(h, o, m, h.opts)))
        return (
          w.isFunction(n.stop) &&
            (w._queueHooks(h.elem, h.opts.queue).stop = w.proxy(n.stop, n)),
          n
        );
    return (
      w.map(m, pt, h),
      w.isFunction(h.opts.start) && h.opts.start.call(o, h),
      w.fx.timer(w.extend(f, { elem: o, anim: h, queue: h.opts.queue })),
      h
        .progress(h.opts.progress)
        .done(h.opts.done, h.opts.complete)
        .fail(h.opts.fail)
        .always(h.opts.always)
    );
  }
  ((w.Animation = w.extend(M, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return (ve(n.elem, e, d.exec(t), n), n);
        },
      ],
    },
    tweener: function (e, t) {
      for (
        var n,
          i = 0,
          o = (e = w.isFunction(e) ? ((t = e), ["*"]) : e.match(C)).length;
        i < o;
        i++
      )
        ((n = e[i]),
          (M.tweeners[n] = M.tweeners[n] || []),
          M.tweeners[n].unshift(t));
    },
    prefilters: [
      function (e, t, n) {
        var i,
          o,
          s,
          r,
          a,
          c,
          l,
          u = "width" in t || "height" in t,
          p = this,
          d = {},
          f = e.style,
          h = e.nodeType && me(e),
          m = v.get(e, "fxshow");
        for (i in (n.queue ||
          (null == (r = w._queueHooks(e, "fx")).unqueued &&
            ((r.unqueued = 0),
            (a = r.empty.fire),
            (r.empty.fire = function () {
              r.unqueued || a();
            })),
          r.unqueued++,
          p.always(function () {
            p.always(function () {
              (r.unqueued--, w.queue(e, "fx").length || r.empty.fire());
            });
          })),
        t))
          if (((o = t[i]), rt.test(o))) {
            if (
              (delete t[i],
              (s = s || "toggle" === o),
              o === (h ? "hide" : "show"))
            ) {
              if ("show" !== o || !m || void 0 === m[i]) continue;
              h = !0;
            }
            d[i] = (m && m[i]) || w.style(e, i);
          }
        if ((c = !w.isEmptyObject(t)) || !w.isEmptyObject(d))
          for (i in (u &&
            1 === e.nodeType &&
            ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
            null == (l = m && m.display) && (l = v.get(e, "display")),
            "none" === (u = w.css(e, "display")) &&
              (l
                ? (u = l)
                : (g([e], !0),
                  (l = e.style.display || l),
                  (u = w.css(e, "display")),
                  g([e]))),
            "inline" === u || ("inline-block" === u && null != l)) &&
            "none" === w.css(e, "float") &&
            (c ||
              (p.done(function () {
                f.display = l;
              }),
              null == l && ((u = f.display), (l = "none" === u ? "" : u))),
            (f.display = "inline-block")),
          n.overflow &&
            ((f.overflow = "hidden"),
            p.always(function () {
              ((f.overflow = n.overflow[0]),
                (f.overflowX = n.overflow[1]),
                (f.overflowY = n.overflow[2]));
            })),
          (c = !1),
          d))
            (c ||
              (m
                ? "hidden" in m && (h = m.hidden)
                : (m = v.access(e, "fxshow", { display: l })),
              s && (m.hidden = !h),
              h && g([e], !0),
              p.done(function () {
                for (i in (h || g([e]), v.remove(e, "fxshow"), d))
                  w.style(e, i, d[i]);
              })),
              (c = pt(h ? m[i] : 0, i, p)),
              i in m ||
                ((m[i] = c.start), h && ((c.end = c.start), (c.start = 0))));
      },
    ],
    prefilter: function (e, t) {
      t ? M.prefilters.unshift(e) : M.prefilters.push(e);
    },
  })),
    (w.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? w.extend({}, e)
          : {
              complete: n || (!n && t) || (w.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !w.isFunction(t) && t),
            };
      return (
        w.fx.off || _.hidden
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in w.fx.speeds
              ? (i.duration = w.fx.speeds[i.duration])
              : (i.duration = w.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          (w.isFunction(i.old) && i.old.call(this),
            i.queue && w.dequeue(this, i.queue));
        }),
        i
      );
    }),
    w.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(me)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (t, e, n, i) {
        function o() {
          var e = M(this, w.extend({}, t), r);
          (s || v.get(this, "finish")) && e.stop(!0);
        }
        var s = w.isEmptyObject(t),
          r = w.speed(e, n, i);
        return (
          (o.finish = o),
          s || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
        );
      },
      stop: function (o, e, s) {
        function r(e) {
          var t = e.stop;
          (delete e.stop, t(s));
        }
        return (
          "string" != typeof o && ((s = e), (e = o), (o = void 0)),
          e && !1 !== o && this.queue(o || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != o && o + "queueHooks",
              n = w.timers,
              i = v.get(this);
            if (t) i[t] && i[t].stop && r(i[t]);
            else for (t in i) i[t] && i[t].stop && at.test(t) && r(i[t]);
            for (t = n.length; t--;)
              n[t].elem !== this ||
                (null != o && n[t].queue !== o) ||
                (n[t].anim.stop(s), (e = !1), n.splice(t, 1));
            (!e && s) || w.dequeue(this, o);
          })
        );
      },
      finish: function (r) {
        return (
          !1 !== r && (r = r || "fx"),
          this.each(function () {
            var e,
              t = v.get(this),
              n = t[r + "queue"],
              i = t[r + "queueHooks"],
              o = w.timers,
              s = n ? n.length : 0;
            for (
              t.finish = !0,
                w.queue(this, r, []),
                i && i.stop && i.stop.call(this, !0),
                e = o.length;
              e--;
            )
              o[e].elem === this &&
                o[e].queue === r &&
                (o[e].anim.stop(!0), o.splice(e, 1));
            for (e = 0; e < s; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    w.each(["toggle", "show", "hide"], function (e, i) {
      var o = w.fn[i];
      w.fn[i] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? o.apply(this, arguments)
          : this.animate(ut(i, !0), e, t, n);
      };
    }),
    w.each(
      {
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, i) {
        w.fn[e] = function (e, t, n) {
          return this.animate(i, e, t, n);
        };
      },
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var e,
        t = 0,
        n = w.timers;
      for (I = w.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      (n.length || w.fx.stop(), (I = void 0));
    }),
    (w.fx.timer = function (e) {
      (w.timers.push(e), e() ? w.fx.start() : w.timers.pop());
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      T =
        T ||
        (k.requestAnimationFrame
          ? k.requestAnimationFrame(ct)
          : k.setInterval(w.fx.tick, w.fx.interval));
    }),
    (w.fx.stop = function () {
      (k.cancelAnimationFrame ? k.cancelAnimationFrame(T) : k.clearInterval(T),
        (T = null));
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (i, e) {
      return (
        (i = (w.fx && w.fx.speeds[i]) || i),
        this.queue((e = e || "fx"), function (e, t) {
          var n = k.setTimeout(e, i);
          t.stop = function () {
            k.clearTimeout(n);
          };
        })
      );
    }),
    (A = _.createElement("input")),
    (t = _.createElement("select").appendChild(_.createElement("option"))),
    (A.type = "checkbox"),
    (m.checkOn = "" !== A.value),
    (m.optSelected = t.selected),
    ((A = _.createElement("input")).value = "t"),
    (A.type = "radio"),
    (m.radioValue = "t" === A.value));
  var dt,
    L = w.expr.attrHandle,
    ft =
      (w.fn.extend({
        attr: function (e, t) {
          return p(this, w.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
          return this.each(function () {
            w.removeAttr(this, e);
          });
        },
      }),
      w.extend({
        attr: function (e, t, n) {
          var i,
            o,
            s = e.nodeType;
          if (3 !== s && 8 !== s && 2 !== s)
            return void 0 === e.getAttribute
              ? w.prop(e, t, n)
              : ((1 === s && w.isXMLDoc(e)) ||
                  (o =
                    w.attrHooks[t.toLowerCase()] ||
                    (w.expr.match.bool.test(t) ? dt : void 0)),
                void 0 !== n
                  ? null === n
                    ? void w.removeAttr(e, t)
                    : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                      ? i
                      : (e.setAttribute(t, n + ""), n)
                  : !(o && "get" in o && null !== (i = o.get(e, t))) &&
                      null == (i = w.find.attr(e, t))
                    ? void 0
                    : i);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              var n;
              if (!m.radioValue && "radio" === t && w.nodeName(e, "input"))
                return (
                  (n = e.value),
                  e.setAttribute("type", t),
                  n && (e.value = n),
                  t
                );
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            i = 0,
            o = t && t.match(C);
          if (o && 1 === e.nodeType) for (; (n = o[i++]);) e.removeAttribute(n);
        },
      }),
      (dt = {
        set: function (e, t, n) {
          return (!1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n);
        },
      }),
      w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var r = L[t] || w.find.attr;
        L[t] = function (e, t, n) {
          var i,
            o,
            s = t.toLowerCase();
          return (
            n ||
              ((o = L[s]),
              (L[s] = i),
              (i = null != r(e, t, n) ? s : null),
              (L[s] = o)),
            i
          );
        };
      }),
      /^(?:input|select|textarea|button)$/i),
    ht = /^(?:a|area)$/i;
  function N(e) {
    return (e.match(C) || []).join(" ");
  }
  function D(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  (w.fn.extend({
    prop: function (e, t) {
      return p(this, w.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    },
  }),
    w.extend({
      prop: function (e, t, n) {
        var i,
          o,
          s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s)
          return (
            (1 === s && w.isXMLDoc(e)) ||
              ((t = w.propFix[t] || t), (o = w.propHooks[t])),
            void 0 !== n
              ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                ? i
                : (e[t] = n)
              : o && "get" in o && null !== (i = o.get(e, t))
                ? i
                : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ft.test(e.nodeName) || (ht.test(e.nodeName) && e.href)
                ? 0
                : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    m.optSelected ||
      (w.propHooks.selected = {
        get: function (e) {
          e = e.parentNode;
          return (e && e.parentNode && e.parentNode.selectedIndex, null);
        },
        set: function (e) {
          e = e.parentNode;
          e && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex;
        },
      }),
    w.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        w.propFix[this.toLowerCase()] = this;
      },
    ),
    w.fn.extend({
      addClass: function (t) {
        var e,
          n,
          i,
          o,
          s,
          r,
          a = 0;
        if (w.isFunction(t))
          return this.each(function (e) {
            w(this).addClass(t.call(this, e, D(this)));
          });
        if ("string" == typeof t && t)
          for (e = t.match(C) || []; (n = this[a++]);)
            if (((r = D(n)), (i = 1 === n.nodeType && " " + N(r) + " "))) {
              for (s = 0; (o = e[s++]);)
                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              r !== (r = N(i)) && n.setAttribute("class", r);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          i,
          o,
          s,
          r,
          a = 0;
        if (w.isFunction(t))
          return this.each(function (e) {
            w(this).removeClass(t.call(this, e, D(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof t && t)
          for (e = t.match(C) || []; (n = this[a++]);)
            if (((r = D(n)), (i = 1 === n.nodeType && " " + N(r) + " "))) {
              for (s = 0; (o = e[s++]);)
                for (; -1 < i.indexOf(" " + o + " ");)
                  i = i.replace(" " + o + " ", " ");
              r !== (r = N(i)) && n.setAttribute("class", r);
            }
        return this;
      },
      toggleClass: function (o, t) {
        var s = typeof o;
        return "boolean" == typeof t && "string" == s
          ? t
            ? this.addClass(o)
            : this.removeClass(o)
          : w.isFunction(o)
            ? this.each(function (e) {
                w(this).toggleClass(o.call(this, e, D(this), t), t);
              })
            : this.each(function () {
                var e, t, n, i;
                if ("string" == s)
                  for (t = 0, n = w(this), i = o.match(C) || []; (e = i[t++]);)
                    n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                  (void 0 !== o && "boolean" != s) ||
                    ((e = D(this)) && v.set(this, "__className__", e),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        (!e && !1 !== o && v.get(this, "__className__")) || "",
                      ));
              });
      },
      hasClass: function (e) {
        for (var t, n = 0, i = " " + e + " "; (t = this[n++]);)
          if (1 === t.nodeType && -1 < (" " + N(D(t)) + " ").indexOf(i))
            return !0;
        return !1;
      },
    }));
  var mt = /\r/g,
    gt =
      (w.fn.extend({
        val: function (t) {
          var n,
            e,
            i,
            o = this[0];
          return arguments.length
            ? ((i = w.isFunction(t)),
              this.each(function (e) {
                1 === this.nodeType &&
                  (null == (e = i ? t.call(this, e, w(this).val()) : t)
                    ? (e = "")
                    : "number" == typeof e
                      ? (e += "")
                      : w.isArray(e) &&
                        (e = w.map(e, function (e) {
                          return null == e ? "" : e + "";
                        })),
                  ((n =
                    w.valHooks[this.type] ||
                    w.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in n &&
                    void 0 !== n.set(this, e, "value")) ||
                    (this.value = e));
              }))
            : o
              ? (n =
                  w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) &&
                "get" in n &&
                void 0 !== (e = n.get(o, "value"))
                ? e
                : "string" == typeof (e = o.value)
                  ? e.replace(mt, "")
                  : null == e
                    ? ""
                    : e
              : void 0;
        },
      }),
      w.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = w.find.attr(e, "value");
              return null != t ? t : N(w.text(e));
            },
          },
          select: {
            get: function (e) {
              for (
                var t,
                  n = e.options,
                  i = e.selectedIndex,
                  o = "select-one" === e.type,
                  s = o ? null : [],
                  r = o ? i + 1 : n.length,
                  a = i < 0 ? r : o ? i : 0;
                a < r;
                a++
              )
                if (
                  ((t = n[a]).selected || a === i) &&
                  !t.disabled &&
                  (!t.parentNode.disabled ||
                    !w.nodeName(t.parentNode, "optgroup"))
                ) {
                  if (((t = w(t).val()), o)) return t;
                  s.push(t);
                }
              return s;
            },
            set: function (e, t) {
              for (
                var n, i, o = e.options, s = w.makeArray(t), r = o.length;
                r--;
              )
                ((i = o[r]).selected =
                  -1 < w.inArray(w.valHooks.option.get(i), s)) && (n = !0);
              return (n || (e.selectedIndex = -1), s);
            },
          },
        },
      }),
      w.each(["radio", "checkbox"], function () {
        ((w.valHooks[this] = {
          set: function (e, t) {
            if (w.isArray(t))
              return (e.checked = -1 < w.inArray(w(e).val(), t));
          },
        }),
          m.checkOn ||
            (w.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            }));
      }),
      /^(?:focusinfocus|focusoutblur)$/),
    E =
      (w.extend(w.event, {
        trigger: function (e, t, n, i) {
          var o,
            s,
            r,
            a,
            c,
            l,
            u = [n || _],
            p = B.call(e, "type") ? e.type : e,
            d = B.call(e, "namespace") ? e.namespace.split(".") : [],
            f = (s = n = n || _);
          if (
            3 !== n.nodeType &&
            8 !== n.nodeType &&
            !gt.test(p + w.event.triggered) &&
            (-1 < p.indexOf(".") &&
              ((p = (d = p.split(".")).shift()), d.sort()),
            (a = p.indexOf(":") < 0 && "on" + p),
            ((e = e[w.expando]
              ? e
              : new w.Event(p, "object" == typeof e && e)).isTrigger = i
              ? 2
              : 3),
            (e.namespace = d.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (t = null == t ? [e] : w.makeArray(t, [e])),
            (l = w.event.special[p] || {}),
            i || !l.trigger || !1 !== l.trigger.apply(n, t))
          ) {
            if (!i && !l.noBubble && !w.isWindow(n)) {
              for (
                r = l.delegateType || p, gt.test(r + p) || (f = f.parentNode);
                f;
                f = f.parentNode
              )
                (u.push(f), (s = f));
              s === (n.ownerDocument || _) &&
                u.push(s.defaultView || s.parentWindow || k);
            }
            for (o = 0; (f = u[o++]) && !e.isPropagationStopped();)
              ((e.type = 1 < o ? r : l.bindType || p),
                (c =
                  (v.get(f, "events") || {})[e.type] && v.get(f, "handle")) &&
                  c.apply(f, t),
                (c = a && f[a]) &&
                  c.apply &&
                  pe(f) &&
                  ((e.result = c.apply(f, t)), !1 === e.result) &&
                  e.preventDefault());
            return (
              (e.type = p),
              i ||
                e.isDefaultPrevented() ||
                (l._default && !1 !== l._default.apply(u.pop(), t)) ||
                !pe(n) ||
                (a &&
                  w.isFunction(n[p]) &&
                  !w.isWindow(n) &&
                  ((s = n[a]) && (n[a] = null),
                  n[(w.event.triggered = p)](),
                  (w.event.triggered = void 0),
                  s) &&
                  (n[a] = s)),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          n = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
          w.event.trigger(n, null, t);
        },
      }),
      w.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            w.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return w.event.trigger(e, t, n, !0);
        },
      }),
      w.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " ",
        ),
        function (e, n) {
          w.fn[n] = function (e, t) {
            return 0 < arguments.length
              ? this.on(n, null, e, t)
              : this.trigger(n);
          };
        },
      ),
      w.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      (m.focusin = "onfocusin" in k),
      m.focusin ||
        w.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
          function o(e) {
            w.event.simulate(i, e.target, w.event.fix(e));
          }
          w.event.special[i] = {
            setup: function () {
              var e = this.ownerDocument || this,
                t = v.access(e, i);
              (t || e.addEventListener(n, o, !0), v.access(e, i, (t || 0) + 1));
            },
            teardown: function () {
              var e = this.ownerDocument || this,
                t = v.access(e, i) - 1;
              t
                ? v.access(e, i, t)
                : (e.removeEventListener(n, o, !0), v.remove(e, i));
            },
          };
        }),
      k.location),
    vt = w.now(),
    bt = /\?/,
    yt =
      ((w.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new k.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            w.error("Invalid XML: " + e),
          t
        );
      }),
      /\[\]$/),
    St = /\r?\n/g,
    kt = /^(?:submit|button|image|reset|file)$/i,
    _t = /^(?:input|select|textarea|keygen)/i;
  ((w.param = function (e, t) {
    function n(e, t) {
      ((t = w.isFunction(t) ? t() : t),
        (o[o.length] =
          encodeURIComponent(e) +
          "=" +
          encodeURIComponent(null == t ? "" : t)));
    }
    var i,
      o = [];
    if (w.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        n(this.name, this.value);
      });
    else
      for (i in e)
        !(function n(i, e, o, s) {
          if (w.isArray(e))
            w.each(e, function (e, t) {
              o || yt.test(i)
                ? s(i, t)
                : n(
                    i +
                      "[" +
                      ("object" == typeof t && null != t ? e : "") +
                      "]",
                    t,
                    o,
                    s,
                  );
            });
          else if (o || "object" !== w.type(e)) s(i, e);
          else for (var t in e) n(i + "[" + t + "]", e[t], o, s);
        })(i, e[i], t, n);
    return o.join("&");
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, "elements");
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(":disabled") &&
              _t.test(this.nodeName) &&
              !kt.test(e) &&
              (this.checked || !ye.test(e))
            );
          })
          .map(function (e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : w.isArray(n)
                ? w.map(n, function (e) {
                    return { name: t.name, value: e.replace(St, "\r\n") };
                  })
                : { name: t.name, value: n.replace(St, "\r\n") };
          })
          .get();
      },
    }));
  var wt = /%20/g,
    Ct = /#.*$/,
    xt = /([?&])_=[^&]*/,
    jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    It = /^(?:GET|HEAD)$/,
    Tt = /^\/\//,
    At = {},
    Mt = {},
    Lt = "*/".concat("*"),
    Nt = _.createElement("a");
  function Dt(s) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        i = 0,
        o = e.toLowerCase().match(C) || [];
      if (w.isFunction(t))
        for (; (n = o[i++]);)
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (s[n] = s[n] || []).unshift(t))
            : (s[n] = s[n] || []).push(t);
    };
  }
  function Et(t, i, o, s) {
    var r = {},
      a = t === Mt;
    function c(e) {
      var n;
      return (
        (r[e] = !0),
        w.each(t[e] || [], function (e, t) {
          t = t(i, o, s);
          return "string" != typeof t || a || r[t]
            ? a
              ? !(n = t)
              : void 0
            : (i.dataTypes.unshift(t), c(t), !1);
        }),
        n
      );
    }
    return c(i.dataTypes[0]) || (!r["*"] && c("*"));
  }
  function Pt(e, t) {
    var n,
      i,
      o = w.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : (i = i || {}))[n] = t[n]);
    return (i && w.extend(!0, e, i), e);
  }
  ((Nt.href = E.href),
    w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: E.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            E.protocol,
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Lt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": w.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Pt(Pt(e, w.ajaxSettings), t) : Pt(w.ajaxSettings, e);
      },
      ajaxPrefilter: Dt(At),
      ajaxTransport: Dt(Mt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0));
        var c,
          l,
          u,
          n,
          p,
          d,
          f,
          i,
          h = w.ajaxSetup({}, (t = t || {})),
          m = h.context || h,
          g = h.context && (m.nodeType || m.jquery) ? w(m) : w.event,
          v = w.Deferred(),
          b = w.Callbacks("once memory"),
          y = h.statusCode || {},
          o = {},
          s = {},
          r = "canceled",
          S = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (d) {
                if (!n)
                  for (n = {}; (t = jt.exec(u));) n[t[1].toLowerCase()] = t[2];
                t = n[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return d ? u : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == d &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (o[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return (null == d && (h.mimeType = e), this);
            },
            statusCode: function (e) {
              if (e)
                if (d) S.always(e[S.status]);
                else for (var t in e) y[t] = [y[t], e[t]];
              return this;
            },
            abort: function (e) {
              e = e || r;
              return (c && c.abort(e), a(0, e), this);
            },
          };
        if (
          (v.promise(S),
          (h.url = ((e || h.url || E.href) + "").replace(
            Tt,
            E.protocol + "//",
          )),
          (h.type = t.method || t.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(C) || [""]),
          null == h.crossDomain)
        ) {
          e = _.createElement("a");
          try {
            ((e.href = h.url),
              (e.href = e.href),
              (h.crossDomain =
                Nt.protocol + "//" + Nt.host != e.protocol + "//" + e.host));
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = w.param(h.data, h.traditional)),
          Et(At, h, t, S),
          !d)
        ) {
          for (i in ((f = w.event && h.global) &&
            0 == w.active++ &&
            w.event.trigger("ajaxStart"),
          (h.type = h.type.toUpperCase()),
          (h.hasContent = !It.test(h.type)),
          (l = h.url.replace(Ct, "")),
          h.hasContent
            ? h.data &&
              h.processData &&
              0 ===
                (h.contentType || "").indexOf(
                  "application/x-www-form-urlencoded",
                ) &&
              (h.data = h.data.replace(wt, "+"))
            : ((e = h.url.slice(l.length)),
              h.data &&
                ((l += (bt.test(l) ? "&" : "?") + h.data), delete h.data),
              !1 === h.cache &&
                ((l = l.replace(xt, "$1")),
                (e = (bt.test(l) ? "&" : "?") + "_=" + vt++ + e)),
              (h.url = l + e)),
          h.ifModified &&
            (w.lastModified[l] &&
              S.setRequestHeader("If-Modified-Since", w.lastModified[l]),
            w.etag[l]) &&
            S.setRequestHeader("If-None-Match", w.etag[l]),
          ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) &&
            S.setRequestHeader("Content-Type", h.contentType),
          S.setRequestHeader(
            "Accept",
            h.dataTypes[0] && h.accepts[h.dataTypes[0]]
              ? h.accepts[h.dataTypes[0]] +
                  ("*" !== h.dataTypes[0] ? ", " + Lt + "; q=0.01" : "")
              : h.accepts["*"],
          ),
          h.headers))
            S.setRequestHeader(i, h.headers[i]);
          if (h.beforeSend && (!1 === h.beforeSend.call(m, S, h) || d))
            return S.abort();
          if (
            ((r = "abort"),
            b.add(h.complete),
            S.done(h.success),
            S.fail(h.error),
            (c = Et(Mt, h, t, S)))
          ) {
            if (((S.readyState = 1), f && g.trigger("ajaxSend", [S, h]), d))
              return S;
            h.async &&
              0 < h.timeout &&
              (p = k.setTimeout(function () {
                S.abort("timeout");
              }, h.timeout));
            try {
              ((d = !1), c.send(o, a));
            } catch (e) {
              if (d) throw e;
              a(-1, e);
            }
          } else a(-1, "No Transport");
        }
        return S;
        function a(e, t, n, i) {
          var o,
            s,
            r,
            a = t;
          d ||
            ((d = !0),
            p && k.clearTimeout(p),
            (c = void 0),
            (u = i || ""),
            (S.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (r = ((e, t, n) => {
                for (
                  var i, o, s, r, a = e.contents, c = e.dataTypes;
                  "*" === c[0];
                )
                  (c.shift(),
                    void 0 === i &&
                      (i = e.mimeType || t.getResponseHeader("Content-Type")));
                if (i)
                  for (o in a)
                    if (a[o] && a[o].test(i)) {
                      c.unshift(o);
                      break;
                    }
                if (c[0] in n) s = c[0];
                else {
                  for (o in n) {
                    if (!c[0] || e.converters[o + " " + c[0]]) {
                      s = o;
                      break;
                    }
                    r = r || o;
                  }
                  s = s || r;
                }
                if (s) return (s !== c[0] && c.unshift(s), n[s]);
              })(h, S, n)),
            (r = ((e, t, n, i) => {
              var o,
                s,
                r,
                a,
                c,
                l = {},
                u = e.dataTypes.slice();
              if (u[1])
                for (r in e.converters) l[r.toLowerCase()] = e.converters[r];
              for (s = u.shift(); s;)
                if (
                  (e.responseFields[s] && (n[e.responseFields[s]] = t),
                  !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (c = s),
                  (s = u.shift()))
                )
                  if ("*" === s) s = c;
                  else if ("*" !== c && c !== s) {
                    if (!(r = l[c + " " + s] || l["* " + s]))
                      for (o in l)
                        if (
                          ((a = o.split(" ")),
                          a[1] === s &&
                            (r = l[c + " " + a[0]] || l["* " + a[0]]))
                        ) {
                          !0 === r
                            ? (r = l[o])
                            : !0 !== l[o] && ((s = a[0]), u.unshift(a[1]));
                          break;
                        }
                    if (!0 !== r)
                      if (r && e.throws) t = r(t);
                      else
                        try {
                          t = r(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: r
                              ? e
                              : "No conversion from " + c + " to " + s,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(h, r, S, i)),
            i
              ? (h.ifModified &&
                  ((n = S.getResponseHeader("Last-Modified")) &&
                    (w.lastModified[l] = n),
                  (n = S.getResponseHeader("etag"))) &&
                  (w.etag[l] = n),
                204 === e || "HEAD" === h.type
                  ? (a = "nocontent")
                  : 304 === e
                    ? (a = "notmodified")
                    : ((a = r.state), (o = r.data), (i = !(s = r.error))))
              : ((s = a), (!e && a) || ((a = "error"), e < 0 && (e = 0))),
            (S.status = e),
            (S.statusText = (t || a) + ""),
            i ? v.resolveWith(m, [o, a, S]) : v.rejectWith(m, [S, a, s]),
            S.statusCode(y),
            (y = void 0),
            f && g.trigger(i ? "ajaxSuccess" : "ajaxError", [S, h, i ? o : s]),
            b.fireWith(m, [S, a]),
            f &&
              (g.trigger("ajaxComplete", [S, h]),
              --w.active || w.event.trigger("ajaxStop")));
        }
      },
      getJSON: function (e, t, n) {
        return w.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return w.get(e, void 0, t, "script");
      },
    }),
    w.each(["get", "post"], function (e, o) {
      w[o] = function (e, t, n, i) {
        return (
          w.isFunction(t) && ((i = i || n), (n = t), (t = void 0)),
          w.ajax(
            w.extend(
              { url: e, type: o, dataType: i, data: t, success: n },
              w.isPlainObject(e) && e,
            ),
          )
        );
      };
    }),
    (w._evalUrl = function (e) {
      return w.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    w.fn.extend({
      wrapAll: function (e) {
        return (
          this[0] &&
            (w.isFunction(e) && (e = e.call(this[0])),
            (e = w(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (var e = this; e.firstElementChild;)
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return w.isFunction(n)
          ? this.each(function (e) {
              w(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = w(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = w.isFunction(t);
        return this.each(function (e) {
          w(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new k.XMLHttpRequest();
      } catch (e) {}
    }));
  var Ot = { 0: 200, 1223: 204 },
    P = w.ajaxSettings.xhr(),
    Ut =
      ((m.cors = !!P && "withCredentials" in P),
      (m.ajax = P = !!P),
      w.ajaxTransport(function (o) {
        var s, r;
        if (m.cors || (P && !o.crossDomain))
          return {
            send: function (e, t) {
              var n,
                i = o.xhr();
              if (
                (i.open(o.type, o.url, o.async, o.username, o.password),
                o.xhrFields)
              )
                for (n in o.xhrFields) i[n] = o.xhrFields[n];
              for (n in (o.mimeType &&
                i.overrideMimeType &&
                i.overrideMimeType(o.mimeType),
              o.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest"),
              e))
                i.setRequestHeader(n, e[n]);
              ((s = function (e) {
                return function () {
                  s &&
                    ((s =
                      r =
                      i.onload =
                      i.onerror =
                      i.onabort =
                      i.onreadystatechange =
                        null),
                    "abort" === e
                      ? i.abort()
                      : "error" === e
                        ? "number" != typeof i.status
                          ? t(0, "error")
                          : t(i.status, i.statusText)
                        : t(
                            Ot[i.status] || i.status,
                            i.statusText,
                            "text" !== (i.responseType || "text") ||
                              "string" != typeof i.responseText
                              ? { binary: i.response }
                              : { text: i.responseText },
                            i.getAllResponseHeaders(),
                          ));
                };
              }),
                (i.onload = s()),
                (r = i.onerror = s("error")),
                void 0 !== i.onabort
                  ? (i.onabort = r)
                  : (i.onreadystatechange = function () {
                      4 === i.readyState &&
                        k.setTimeout(function () {
                          s && r();
                        });
                    }),
                (s = s("abort")));
              try {
                i.send((o.hasContent && o.data) || null);
              } catch (e) {
                if (s) throw e;
              }
            },
            abort: function () {
              s && s();
            },
          };
      }),
      w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      w.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return (w.globalEval(e), e);
          },
        },
      }),
      w.ajaxPrefilter("script", function (e) {
        (void 0 === e.cache && (e.cache = !1),
          e.crossDomain && (e.type = "GET"));
      }),
      w.ajaxTransport("script", function (n) {
        var i, o;
        if (n.crossDomain)
          return {
            send: function (e, t) {
              ((i = w("<script>")
                .prop({ charset: n.scriptCharset, src: n.url })
                .on(
                  "load error",
                  (o = function (e) {
                    (i.remove(),
                      (o = null),
                      e && t("error" === e.type ? 404 : 200, e.type));
                  }),
                )),
                _.head.appendChild(i[0]));
            },
            abort: function () {
              o && o();
            },
          };
      }),
      []),
    Ht = /(=)\?(?=&|$)|\?\?/;
  function Ft(e) {
    return w.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  (w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Ut.pop() || w.expando + "_" + vt++;
      return ((this[e] = !0), e);
    },
  }),
    w.ajaxPrefilter("json jsonp", function (e, t, n) {
      var i,
        o,
        s,
        r =
          !1 !== e.jsonp &&
          (Ht.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded",
                ) &&
              Ht.test(e.data) &&
              "data");
      if (r || "jsonp" === e.dataTypes[0])
        return (
          (i = e.jsonpCallback =
            w.isFunction(e.jsonpCallback)
              ? e.jsonpCallback()
              : e.jsonpCallback),
          r
            ? (e[r] = e[r].replace(Ht, "$1" + i))
            : !1 !== e.jsonp &&
              (e.url += (bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
          (e.converters["script json"] = function () {
            return (s || w.error(i + " was not called"), s[0]);
          }),
          (e.dataTypes[0] = "json"),
          (o = k[i]),
          (k[i] = function () {
            s = arguments;
          }),
          n.always(function () {
            (void 0 === o ? w(k).removeProp(i) : (k[i] = o),
              e[i] && ((e.jsonpCallback = t.jsonpCallback), Ut.push(i)),
              s && w.isFunction(o) && o(s[0]),
              (s = o = void 0));
          }),
          "script"
        );
    }),
    (m.createHTMLDocument =
      (((e = _.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === e.childNodes.length)),
    (w.parseHTML = function (e, t, n) {
      var i;
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (m.createHTMLDocument
              ? (((i = (t =
                  _.implementation.createHTMLDocument("")).createElement(
                  "base",
                )).href = _.location.href),
                t.head.appendChild(i))
              : (t = _)),
          (i = !n && []),
          (n = Y.exec(e))
            ? [t.createElement(n[1])]
            : ((n = Ce([e], t, i)),
              i && i.length && w(i).remove(),
              w.merge([], n.childNodes)));
    }),
    (w.fn.load = function (e, t, n) {
      var i,
        o,
        s,
        r = this,
        a = e.indexOf(" ");
      return (
        -1 < a && ((i = N(e.slice(a))), (e = e.slice(0, a))),
        w.isFunction(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (o = "POST"),
        0 < r.length &&
          w
            .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
            .done(function (e) {
              ((s = arguments),
                r.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e));
            })
            .always(
              n &&
                function (e, t) {
                  r.each(function () {
                    n.apply(this, s || [e.responseText, t, e]);
                  });
                },
            ),
        this
      );
    }),
    w.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        w.fn[t] = function (e) {
          return this.on(t, e);
        };
      },
    ),
    (w.expr.pseudos.animated = function (t) {
      return w.grep(w.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (e, t, n) {
        var i,
          o,
          s,
          r,
          a = w.css(e, "position"),
          c = w(e),
          l = {};
        ("static" === a && (e.style.position = "relative"),
          (s = c.offset()),
          (i = w.css(e, "top")),
          (r = w.css(e, "left")),
          (a =
            ("absolute" === a || "fixed" === a) && -1 < (i + r).indexOf("auto")
              ? ((o = (a = c.position()).top), a.left)
              : ((o = parseFloat(i) || 0), parseFloat(r) || 0)),
          null !=
            (t = w.isFunction(t) ? t.call(e, n, w.extend({}, s)) : t).top &&
            (l.top = t.top - s.top + o),
          null != t.left && (l.left = t.left - s.left + a),
          "using" in t ? t.using.call(e, l) : c.css(l));
      },
    }),
    w.fn.extend({
      offset: function (t) {
        var e, n, i;
        return arguments.length
          ? void 0 === t
            ? this
            : this.each(function (e) {
                w.offset.setOffset(this, t, e);
              })
          : (i = this[0])
            ? i.getClientRects().length
              ? (n = i.getBoundingClientRect()).width || n.height
                ? ((e = Ft((i = i.ownerDocument))),
                  (i = i.documentElement),
                  {
                    top: n.top + e.pageYOffset - i.clientTop,
                    left: n.left + e.pageXOffset - i.clientLeft,
                  })
                : n
              : { top: 0, left: 0 }
            : void 0;
      },
      position: function () {
        var e, t, n, i;
        if (this[0])
          return (
            (n = this[0]),
            (i = { top: 0, left: 0 }),
            "fixed" === w.css(n, "position")
              ? (t = n.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                (i = {
                  top:
                    (i = w.nodeName(e[0], "html") ? i : e.offset()).top +
                    w.css(e[0], "borderTopWidth", !0),
                  left: i.left + w.css(e[0], "borderLeftWidth", !0),
                })),
            {
              top: t.top - i.top - w.css(n, "marginTop", !0),
              left: t.left - i.left - w.css(n, "marginLeft", !0),
            }
          );
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === w.css(e, "position");
          )
            e = e.offsetParent;
          return e || xe;
        });
      },
    }),
    w.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, o) {
        var s = "pageYOffset" === o;
        w.fn[t] = function (e) {
          return p(
            this,
            function (e, t, n) {
              var i = Ft(e);
              return void 0 === n
                ? i
                  ? i[o]
                  : e[t]
                : void (i
                    ? i.scrollTo(s ? i.pageXOffset : n, s ? n : i.pageYOffset)
                    : (e[t] = n));
            },
            t,
            e,
            arguments.length,
          );
        };
      },
    ),
    w.each(["top", "left"], function (e, n) {
      w.cssHooks[n] = ze(m.pixelPosition, function (e, t) {
        if (t)
          return ((t = x(e, n)), Ge.test(t) ? w(e).position()[n] + "px" : t);
      });
    }),
    w.each({ Height: "height", Width: "width" }, function (r, a) {
      w.each(
        { padding: "inner" + r, content: a, "": "outer" + r },
        function (i, s) {
          w.fn[s] = function (e, t) {
            var n = arguments.length && (i || "boolean" != typeof e),
              o = i || (!0 === e || !0 === t ? "margin" : "border");
            return p(
              this,
              function (e, t, n) {
                var i;
                return w.isWindow(e)
                  ? 0 === s.indexOf("outer")
                    ? e["inner" + r]
                    : e.document.documentElement["client" + r]
                  : 9 === e.nodeType
                    ? ((i = e.documentElement),
                      Math.max(
                        e.body["scroll" + r],
                        i["scroll" + r],
                        e.body["offset" + r],
                        i["offset" + r],
                        i["client" + r],
                      ))
                    : void 0 === n
                      ? w.css(e, t, o)
                      : w.style(e, t, n, o);
              },
              a,
              n ? e : void 0,
              n,
            );
          };
        },
      );
    }),
    w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (w.parseJSON = JSON.parse),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return w;
      }));
  var $t = k.jQuery,
    Bt = k.$;
  return (
    (w.noConflict = function (e) {
      return (
        k.$ === w && (k.$ = Bt),
        e && k.jQuery === w && (k.jQuery = $t),
        w
      );
    }),
    O || (k.jQuery = k.$ = w),
    w
  );
}),
  (window.require = (() => {
    function f(e, t) {
      var n = document.head || document.getElementsByTagName("head")[0],
        i = o[o.length - 1];
      if (
        (((t = t || {}).insertAt = t.insertAt || "bottom"),
        "top" === t.insertAt)
      )
        (i
          ? i.nextSibling
            ? n.insertBefore(e, i.nextSibling)
            : n.appendChild(e)
          : n.insertBefore(e, n.firstChild),
          o.push(e));
      else {
        if ("bottom" !== t.insertAt)
          throw new Error(
            "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.",
          );
        n.appendChild(e);
      }
    }
    var o = [];
    return function (e, t) {
      if (!e || "string" != typeof e) return !1;
      if (/(.*)\.css/.test(e)) {
        var n = "";
        if (
          (n = /(\/static)|(^http)/.test(e)
            ? e
            : "/static/" + e.substring(e.lastIndexOf("css/")))
        ) {
          var i,
            o,
            s = null,
            r = t,
            a = document.head || document.getElementsByTagName("head")[0],
            c = document.createElement("link");
          for (i in ((c.href = n), (c.rel = "stylesheet"), s))
            s.hasOwnProperty(i) && ((o = s[i]), c.setAttribute("data-" + i, o));
          return (
            (c.onload = function () {
              r("loaded");
            }),
            (c.onerror = function () {
              r("failed");
            }),
            a.appendChild(c),
            !0
          );
        }
        return !1;
      }
      var n = e,
        l = void 0,
        a = void 0;
      a = a || {};
      var u,
        p,
        d = document.createElement("style");
      for (u in ((d.type = "text/css"), l))
        l.hasOwnProperty(u) && ((p = l[u]), d.setAttribute("data-" + u, p));
      return (
        d.sheet
          ? ((d.innerHTML = n),
            (d.sheet.cssText = n),
            f(d, { insertAt: a.insertAt }))
          : d.styleSheet
            ? (f(d, { insertAt: a.insertAt }), (d.styleSheet.cssText = n))
            : (d.appendChild(document.createTextNode(n)),
              f(d, { insertAt: a.insertAt })),
        t && t(),
        !0
      );
    };
  })()));
var KgMobileCall = {
    ver: "2.2",
    debug: 0,
    isAndroid: "undefined" != typeof external && void 0 !== external.superCall,
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
      var t = document.createElement("iframe");
      (t.setAttribute("src", e),
        t.setAttribute("style", "display:none;"),
        t.setAttribute("height", "0px"),
        t.setAttribute("width", "0px"),
        t.setAttribute("frameborder", "0"),
        document.body.appendChild(t),
        t.parentNode.removeChild(t));
    },
    callCmd: function (t) {
      var n = this,
        e = "",
        i = document;
      if (
        (i.getElementById("mod_debugwin_set") &&
          (i.getElementById("mod_debugwin_set").innerHTML = JSON.stringify(
            t,
          ).replace(/\\/g, "")),
        0 < n.debug)
      )
        switch (n.debug) {
          case 1:
            window.console && console.log(t);
            break;
          case 2:
            alert(JSON.stringify(t).replace(/\\/g, ""));
        }
      if (n.chkAndroidApp())
        try {
          var o,
            s = t.jsonStr
              ? (t.callback &&
                  "" !== t.callback &&
                  !0 === t.AndroidCallback &&
                  (n.cbNum++,
                  (cbName =
                    "kgmobilecall" +
                    n.cbNum +
                    Math.random().toString().substr(2, 9)),
                  (window[cbName] = function (e) {
                    void 0 !== s &&
                      t.callback &&
                      ("[object String]" === Object.prototype.toString.call(e)
                        ? t.callback(n.str2Json(e))
                        : t.callback(e));
                  }),
                  ((o = n.str2Json(t.jsonStr)).AndroidCallback = cbName),
                  (t.jsonStr = n.json2Str(o))),
                external.superCall(t.cmd, t.jsonStr))
              : external.superCall(t.cmd);
          t.callback &&
            "" !== t.callback &&
            "AndroidCallback" != s &&
            ((s = n.str2Json(s)), t.callback(s));
        } catch (e) {}
      else
        n.isIOS
          ? ((e = t.callback
              ? (n.cbNum++,
                (cbName =
                  "kgmobilecall" +
                  n.cbNum +
                  Math.random().toString().substr(2, 9)),
                (window[cbName] = function (e) {
                  void 0 !== e &&
                    t.callback &&
                    ("[object String]" === Object.prototype.toString.call(e)
                      ? t.callback(n.str2Json(e))
                      : t.callback(e));
                }),
                t.jsonStr
                  ? 'kugouurl://start.music/?{"cmd":' +
                    t.cmd +
                    ', "jsonStr":' +
                    t.jsonStr +
                    ', "callback":"' +
                    cbName +
                    '"}'
                  : 'kugouurl://start.music/?{"cmd":' +
                    t.cmd +
                    ', "callback":"' +
                    cbName +
                    '"}')
              : t.jsonStr
                ? 'kugouurl://start.music/?{"cmd":' +
                  t.cmd +
                  ', "jsonStr":' +
                  t.jsonStr +
                  "}"
                : 'kugouurl://start.music/?{"cmd":' + t.cmd + "}"),
            n.loadUrl(e))
          : t.callback && t.callback({ status: 0, error: "不在客户端内" });
    },
    getUserInfo: function (e) {
      e ? this.callCmd({ cmd: 101, callback: e }) : this.callCmd({ cmd: 101 });
    },
    callSoftUserLogin: function (e, t) {
      var n = this;
      e
        ? (e.loginType || (e.loginType = ""),
          (e = n.json2Str(e)),
          t
            ? n.callCmd({ cmd: 102, jsonStr: e, callback: t })
            : n.callCmd({ cmd: 102, jsonStr: e }))
        : t
          ? n.callCmd({ cmd: 102, callback: t })
          : n.callCmd({ cmd: 102 });
    },
    showRegisterBox: function (e, t) {
      var n = this;
      e
        ? ((e = n.json2Str(e)),
          t
            ? n.callCmd({ cmd: 103, jsonStr: e, callback: t })
            : n.callCmd({ cmd: 103, jsonStr: e }))
        : t
          ? n.callCmd({ cmd: 103, callback: t })
          : n.callCmd({ cmd: 103 });
    },
    logout: function (e) {
      e ? this.callCmd({ cmd: 104, callback: e }) : this.callCmd({ cmd: 104 });
    },
    downNoPlay: function (e, t) {
      var n,
        i = this,
        o = [];
      if (e) {
        if (
          ((n = e.info), "[object Array]" === Object.prototype.toString.call(n))
        )
          for (var s = 0, r = n.length; s < r; s++)
            o.push(i._extend(i.formatSong, n[s]));
        ((e.info = o),
          e.total || (e.total = e.info.length),
          e.className || (e.className = ""),
          (e = i.json2Str(e)),
          t
            ? i.callCmd({ cmd: 107, jsonStr: e, callback: t })
            : i.callCmd({ cmd: 107, jsonStr: e }));
      }
    },
    listen: function (e, t) {
      var n,
        i = this,
        o = [];
      if (e) {
        if (
          ((n = e.info), "[object Array]" === Object.prototype.toString.call(n))
        )
          for (var s = 0, r = n.length; s < r; s++)
            o.push(i._extend(i.formatSong, n[s]));
        ((e.info = o),
          e.total || (e.total = e.info.length),
          e.className || (e.className = ""),
          e.playIndex || (e.playIndex = 0),
          e.isJump || (e.isJump = 0),
          e.effect || (e.effect = 0),
          (e = i.json2Str(e)),
          t
            ? i.callCmd({
                cmd: 108,
                jsonStr: e,
                callback: t,
                AndroidCallback: !0,
              })
            : i.callCmd({ cmd: 108, jsonStr: e }));
      }
    },
    createList: function (e, t) {
      var n,
        i = this,
        o = [];
      if (e) {
        if (
          ((n = e.info), "[object Array]" === Object.prototype.toString.call(n))
        )
          for (var s = 0, r = n.length; s < r; s++)
            o.push(i._extend(i.formatSong, n[s]));
        ((e.info = o),
          e.total || (e.total = e.info.length),
          e.className || (e.className = ""),
          (e = i.json2Str(e)),
          t
            ? i.callCmd({ cmd: 109, jsonStr: e, callback: t })
            : i.callCmd({ cmd: 109, jsonStr: e }));
      }
    },
    addNoDown: function (e, t) {
      var n,
        i = this,
        o = [];
      if (e) {
        if (
          ((n = e.info), "[object Array]" === Object.prototype.toString.call(n))
        )
          for (var s = 0, r = n.length; s < r; s++)
            o.push(i._extend(i.formatSong, n[s]));
        ((e.info = o),
          e.total || (e.total = e.info.length),
          e.className || (e.className = ""),
          (e = i.json2Str(e)),
          t
            ? i.callCmd({ cmd: 110, jsonStr: e, callback: t })
            : i.callCmd({ cmd: 110, jsonStr: e }));
      }
    },
    spots: function (e, t) {
      var n,
        i = this,
        o = [];
      if (e) {
        if (
          ((n = e.info), "[object Array]" === Object.prototype.toString.call(n))
        )
          for (var s = 0, r = n.length; s < r; s++)
            o.push(i._extend(i.formatSong, n[s]));
        ((e.info = o),
          e.total || (e.total = e.info.length),
          e.className || (e.className = ""),
          (e = i.json2Str(e)),
          t
            ? i.callCmd({ cmd: 111, jsonStr: e, callback: t })
            : i.callCmd({ cmd: 111, jsonStr: e }));
      }
    },
    createListDownAndPlaySong: function (e, t) {
      var n,
        i = this,
        o = [];
      if (e) {
        if (
          ((n = e.info), "[object Array]" === Object.prototype.toString.call(n))
        )
          for (var s = 0, r = n.length; s < r; s++)
            o.push(i._extend(i.formatSong, n[s]));
        ((e.info = o),
          e.total || (e.total = e.info.length),
          e.className || (e.className = ""),
          (e = i.json2Str(e)),
          t
            ? i.callCmd({ cmd: 112, jsonStr: e, callback: t })
            : i.callCmd({ cmd: 112, jsonStr: e }));
      }
    },
    createListDownNoPlaySong: function (e, t) {
      var n,
        i = this,
        o = [];
      if (e) {
        if (
          ((n = e.info), "[object Array]" === Object.prototype.toString.call(n))
        )
          for (var s = 0, r = n.length; s < r; s++)
            o.push(i._extend(i.formatSong, n[s]));
        ((e.info = o),
          (e = i.json2Str(e)),
          t
            ? i.callCmd({ cmd: 113, jsonStr: e })
            : i.callCmd({ cmd: 113, jsonStr: e, callback: t }));
      }
    },
    createCollectListAddSong: function (e, t) {
      var n,
        i = this,
        o = [];
      if (e) {
        if (
          ((n = e.info), "[object Array]" === Object.prototype.toString.call(n))
        )
          for (var s = 0, r = n.length; s < r; s++)
            o.push(i._extend(i.formatSong, n[s]));
        ((e.info = o),
          e.total || (e.total = e.info.length),
          e.className || (e.className = ""),
          (e = i.json2Str(e)),
          t
            ? i.callCmd({ cmd: 114, jsonStr: e, callback: t })
            : i.callCmd({ cmd: 114, jsonStr: e }));
      }
    },
    share: function (t, e, n, i) {
      function o() {
        encodeURIComponent(t.shareData.title);
        var e = [
          "url=" + (t.shareData.linkUrl || ""),
          "appkey=" + "340086183",
          "title=" + (encodeURIComponent(t.shareData.content) || ""),
          "pic=" + (encodeURI(t.shareData.picUrl) || ""),
          "ralateUid="[REDACTED]"",
        ].join("&");
        location.href = "http://service.t.sina.com.cn/share/share.php?" + e;
      }
      var s,
        r = this,
        a = navigator.userAgent;
      (t && ((s = r._extend(r.formatShare, t)), (t = s)),
        r.isIOS
          ? e
            ? r.callCmd({ cmd: 115, jsonStr: r.json2Str(t), callback: e })
            : r.callCmd({ cmd: 115, jsonStr: r.json2Str(t) })
          : r.chkAndroidApp()
            ? r.getVersion(function (e) {
                e &&
                t &&
                3 == t.type &&
                "android" == e.platform &&
                Number(e.version) < 6340
                  ? o()
                  : r.callCmd({ cmd: 115, jsonStr: r.json2Str(t) });
              })
            : (a.match("MicroMessenger") ? n || o : i || o)());
    },
    openSearch: function (e, t) {
      e
        ? ((e = this.json2Str(e)),
          t
            ? this.callCmd({ cmd: 116, jsonStr: e, callback: t })
            : this.callCmd({ cmd: 116, jsonStr: e }))
        : this.callCmd({ cmd: 116 });
    },
    playMV: function (e, t) {
      var n,
        i = this,
        o = [];
      if (e) {
        if (
          ((n = e.info), "[object Array]" === Object.prototype.toString.call(n))
        )
          for (var s = 0, r = n.length; s < r; s++)
            o.push(i._extend(i.formatMV, n[s]));
        ((e = i.json2Str(e)),
          t
            ? i.callCmd({ cmd: 117, jsonStr: e, callback: t })
            : i.callCmd({ cmd: 117, jsonStr: e }));
      }
    },
    playRadio: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 119, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 119, jsonStr: e }));
    },
    getRadioStatus: function (e) {
      e ? callCmd({ cmd: 121, callback: e }) : callCmd({ cmd: 121 });
    },
    getVersion: function (e) {
      this.callCmd({ cmd: 122, callback: e });
    },
    openURL: function (e, t) {
      var n = this;
      e
        ? ((e = n._extend(n.formatURL, e)),
          (e = n.json2Str(e)),
          t
            ? n.callCmd({ cmd: 123, jsonStr: e, callback: t })
            : n.callCmd({ cmd: 123, jsonStr: e }))
        : n.callCmd({ cmd: 123 });
    },
    getMobileInfo: function (e) {
      this.callCmd({ cmd: 124, callback: e });
    },
    playOrPause: function (e, t) {
      (e = e || { type: 1 }) &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 125, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 125, jsonStr: e }));
    },
    openTab: function (e, t) {
      var n = this;
      e
        ? ((e = n.json2Str(e)),
          t
            ? n.callCmd({ cmd: 126, jsonStr: e, callback: t })
            : n.callCmd({ cmd: 126, jsonStr: e }))
        : t
          ? n.callCmd({ cmd: 126, callback: t })
          : n.callCmd({ cmd: 126 });
    },
    clearListAndAddSongs: function (e, t) {
      var n,
        i = this,
        o = [];
      if (e) {
        if (
          ((n = e.info), "[object Array]" === Object.prototype.toString.call(n))
        )
          for (var s = 0, r = n.length; s < r; s++)
            o.push(i._extend(i.formatSong, n[s]));
        ((e.info = o),
          (e = i.json2Str(e)),
          t
            ? i.callCmd({ cmd: 127, jsonStr: e, callback: t })
            : i.callCmd({ cmd: 127, jsonStr: e }));
      } else t ? i.callCmd({ cmd: 127, callback: t }) : i.callCmd({ cmd: 127 });
    },
    showHideBar: function (e, t) {
      e = this.json2Str((e = e || { state: 1 }));
      t
        ? this.callCmd({ cmd: 128, jsonStr: e, callback: t })
        : this.callCmd({ cmd: 128, jsonStr: e });
    },
    getAcceleration: function (e) {
      e && this.callCmd({ cmd: 129, callback: e });
    },
    getOrientation: function (e) {
      e && this.callCmd({ cmd: 130, callback: e });
    },
    isInClient: function () {
      return this.chkAndroidApp() ? this.chkAndroidApp() : this.isIOS || !1;
    },
    openCamera: function (e, t) {
      ((e = e || { type: 1 }).size &&
        (e.size = { maxWidth: "", minWidth: "", maxHeight: "", minHeight: "" }),
        (e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 131, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 131, jsonStr: e }));
    },
    recharge: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 132, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 132, jsonStr: e }));
    },
    switchShark: function (e, t) {
      e &&
        (isNaN(parseInt(e.type, 10)) && (e.type = 0),
        (e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 133, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 133, jsonStr: e }));
    },
    downloadPrivileges: function (e) {
      e && this.callCmd({ cmd: 135, callback: e });
    },
    downloadPrivileges: function (e) {
      e && this.callCmd({ cmd: 135, callback: e });
    },
    getSongInfo: function (e) {
      e ? this.callCmd({ cmd: 161, callback: e }) : this.callCmd({ cmd: 161 });
    },
    getFxUserInfo: function (e) {
      e ? this.callCmd({ cmd: 400, callback: e }) : this.callCmd({ cmd: 400 });
    },
    getKTVUserInfo: function (e) {
      e ? this.callCmd({ cmd: 500, callback: e }) : this.callCmd({ cmd: 500 });
    },
    jumpToKFInnerPage: function (e, t) {
      e &&
        (e.subPageId || (e.subPageId = 0),
        "" === e.params && delete e.params,
        (e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 600, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 600, jsonStr: e }));
    },
    showMsg: function (e, t) {
      e &&
        (e.msg || (e.msg = ""),
        e.type || (e.type = 1),
        (e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 601, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 601, jsonStr: e }));
    },
    updateTitle: function (e, t) {
      e &&
        (e.title || (e.title = ""),
        (e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 602, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 602, jsonStr: e }));
    },
    rechargeMusic: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 134, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 134, jsonStr: e }));
    },
    vipPage: function (e) {
      e && this.callCmd({ cmd: 136, callback: e });
    },
    woFreeInfo: function (e) {
      e && this.callCmd({ cmd: 137, callback: e });
    },
    openWoFree: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 138, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 138, jsonStr: e }));
    },
    getKgCoin: function (e) {
      e && this.callCmd({ cmd: 139, callback: e });
    },
    toClient: function (e) {
      e ? this.callCmd({ cmd: 141, callback: e }) : this.callCmd({ cmd: 141 });
    },
    toPay: function (e, t) {
      ((jsonStr = ""),
        e &&
          ((jsonStr = this.json2Str(e)),
          t
            ? this.callCmd({ cmd: 142, jsonStr: jsonStr, callback: t })
            : this.callCmd({ cmd: 142, jsonStr: jsonStr })));
    },
    location: function (e, t) {
      ((jsonStr = ""),
        e &&
          ((jsonStr = this.json2Str(e)),
          t
            ? this.callCmd({ cmd: 143, jsonStr: jsonStr, callback: t })
            : this.callCmd({ cmd: 143, jsonStr: jsonStr })));
    },
    getVipInfo: function (e) {
      e ? this.callCmd({ cmd: 144, callback: e }) : this.callCmd({ cmd: 144 });
    },
    openHistory: function (e) {
      e ? this.callCmd({ cmd: 145, callback: e }) : this.callCmd({ cmd: 145 });
    },
    addSongToHistory: function (e, t) {
      if (!e) return !1;
      ((jsonStr = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 146, jsonStr: jsonStr, callback: t })
          : this.callCmd({ cmd: 146, jsonStr: jsonStr }));
    },
    statistics: function (e, t, n, i, o, s) {
      var r = this;
      if (!e || !t) return !1;
      if (((n = { name: n, category: i, source: o || "" }), r.chkAndroidApp()))
        n.id = e;
      else {
        if (!r.isIOS) return !1;
        n.id = t;
      }
      ((jsonStr = r.json2Str(n)),
        s
          ? r.callCmd({ cmd: 147, jsonStr: jsonStr, callback: s })
          : r.callCmd({ cmd: 147, jsonStr: jsonStr }));
    },
    isFirstEnter: function (e, t) {
      if (!e) return !1;
      ((jsonStr = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 148, jsonStr: jsonStr, callback: t })
          : this.callCmd({ cmd: 148, jsonStr: jsonStr }));
    },
    showHideFun: function (e, t) {
      if (!e) return !1;
      ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 149, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 149, jsonStr: e }));
    },
    getSign: function (e, t) {
      if (!e) return !1;
      ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 150, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 150, jsonStr: e }));
    },
    telecomInfo: function (e) {
      e && this.callCmd({ cmd: 151, callback: e });
    },
    openTelecom: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 152, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 152, jsonStr: e }));
    },
    cancelAutoPay: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 153, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 153, jsonStr: e }));
    },
    tdpy: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 154, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 154, jsonStr: e }));
    },
    phoneAutoPay: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 155, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 155, jsonStr: e }));
    },
    openAlbum: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 156, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 156, jsonStr: e }));
    },
    searchKey: function (e) {
      e ? this.callCmd({ cmd: 157, callback: e }) : this.callCmd({ cmd: 157 });
    },
    closeFrame: function () {
      this.callCmd({ cmd: 158 });
    },
    barrageResult: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 159, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 159, jsonStr: e }));
    },
    getSingleInfo: function (e) {
      e ? this.callCmd({ cmd: 251, callback: e }) : this.callCmd({ cmd: 251 });
    },
    buySong: function () {
      this.callCmd({ cmd: 162 });
    },
    appstorePay: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 163, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 163, jsonStr: e }));
    },
    getSuccessInfo: function (e) {
      e ? this.callCmd({ cmd: 164, callback: e }) : this.callCmd({ cmd: 164 });
    },
    goBack: function () {
      this.callCmd({ cmd: 165 });
    },
    changeTitle: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 166, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 166, jsonStr: e }));
    },
    openPersonalPage: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 182, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 182, jsonStr: e }));
    },
    showRightMenus: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 192, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 192, jsonStr: e }));
    },
    showRightMenus: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 192, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 192, jsonStr: e }));
    },
    getNoPayOrder: function (e) {
      e ? this.callCmd({ cmd: 215, callback: e }) : this.callCmd({ cmd: 215 });
    },
    cancelNoPayOrder: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 216, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 216, jsonStr: e }));
    },
    replaceUrl: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 217, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 217, jsonStr: e }));
    },
    isShowDialog: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 230, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 230, jsonStr: e }));
    },
    loadFinish: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 1203, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 1203, jsonStr: e }));
    },
    getStatusHeight: function (e) {
      e ? this.callCmd({ cmd: 231, callback: e }) : this.callCmd({ cmd: 231 });
    },
    changeStatusColor: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 232, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 232, jsonStr: e }));
    },
    closeFrameNum: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 247, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 247, jsonStr: e }));
    },
    goToLook: function (e) {
      e ? this.callCmd({ cmd: 272, callback: e }) : this.callCmd({ cmd: 272 });
    },
    openBgPage: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 284, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 284, jsonStr: e }));
    },
    openDynamicPage: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 285, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 285, jsonStr: e }));
    },
    noticeClient: function (e, t) {
      e = this.json2Str(e);
      t
        ? this.callCmd({ cmd: 233, jsonStr: e, callback: t })
        : this.callCmd({ cmd: 233, jsonStr: e });
    },
    noticeClientUpdateInfo: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 288, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 288, jsonStr: e }));
    },
    loadingStatus: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 177, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 177, jsonStr: e }));
    },
    getNewSign: function (e, t) {
      var n = "";
      (e && (n = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 764, jsonStr: n, callback: t })
          : this.callCmd({ cmd: 764, jsonStr: n }));
    },
    getPageText: function (e) {
      var t = KgMobileCall;
      e ? t.callCmd({ cmd: 717, callback: e }) : t.callCmd({ cmd: 717 });
    },
    categoryJumpSinglePlaylistPage: function (e, t) {
      if (!e) return !1;
      ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 701, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 701, jsonStr: e }));
    },
    categoryJumpSingleAlbumlistPage: function (e, t) {
      if (!e) return !1;
      ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 702, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 702, jsonStr: e }));
    },
    categoryJumpSingerPage: function (e, t) {
      if (!e) return !1;
      ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 703, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 703, jsonStr: e }));
    },
    categoryJumpCategoryPage: function (e, t) {
      if (!e) return !1;
      ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 704, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 704, jsonStr: e }));
    },
    categoryJumpMVlistPage: function (e, t) {
      if (!e) return !1;
      ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 705, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 705, jsonStr: e }));
    },
    categoryJumpRanklistPage: function (e, t) {
      if (!e) return !1;
      ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 706, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 706, jsonStr: e }));
    },
    categoryPlayMV: function (e, t) {
      if (!e) return !1;
      ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 707, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 707, jsonStr: e }));
    },
    categoryPlayFM: function (e, t) {
      if (!e) return !1;
      ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 708, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 708, jsonStr: e }));
    },
    showHideRightTopShareBar: function (e, t) {
      if (!e) return !1;
      ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 709, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 709, jsonStr: e }));
    },
    savePreReturnPage: function (e, t) {
      if (!e) return !1;
      ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 710, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 710, jsonStr: e }));
    },
    currentHasBannerForSwipe: function (e, t) {
      if (!e) return !1;
      ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 711, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 711, jsonStr: e }));
    },
    openAlbumPage: function (e, t) {
      if (!e) return !1;
      ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 719, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 719, jsonStr: e }));
    },
    openPlayPage: function (e, t) {
      e = this.json2Str(e);
      t
        ? this.callCmd({ cmd: 725, jsonStr: e, callback: t })
        : this.callCmd({ cmd: 725, jsonStr: e });
    },
    getSongStatus: function (e) {
      e ? this.callCmd({ cmd: 729, callback: e }) : this.callCmd({ cmd: 729 });
    },
    getADPushAndYouLikeRadioStatus: function (e) {
      e ? this.callCmd({ cmd: 820, callback: e }) : this.callCmd({ cmd: 820 });
    },
    musicCoupon: function (e, t) {
      e &&
        ((e = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 1043, jsonStr: e, callback: t })
          : this.callCmd({ cmd: 1043, jsonStr: e }));
    },
    redFork: function (e) {
      var t = "";
      (e && (t = this.json2Str(e)), this.callCmd({ cmd: 838, jsonStr: t }));
    },
    updateVipLevel: function (e, t) {
      e = this.json2Str(e);
      t
        ? this.callCmd({ cmd: 1197, jsonStr: e, callback: t })
        : this.callCmd({ cmd: 1197, jsonStr: e });
    },
  },
  KgWebMobileCall = {
    userStatus: function (e, t) {},
    pageStatus: function (e, t) {},
    shareStatus: function (e, t) {},
    playStatus: function (e) {},
    uploadStatus: function (e) {},
    rechargeStatus: function (e) {},
    payStatus: function (e) {},
  },
  KgWebToApp = {
    isInstalled: 0,
    ua: navigator.userAgent || "",
    getHidden: function () {
      var e;
      document;
      return (
        void 0 !== document.hidden
          ? (e = "hidden")
          : void 0 !== document.mozHidden
            ? (e = "mozHidden")
            : void 0 !== document.msHidden
              ? (e = "msHidden")
              : void 0 !== document.webkitHidden && (e = "webkitHidden"),
        (KgWebToApp.getHidden = function () {
          return e;
        }),
        KgWebToApp.getHidden()
      );
    },
    str2Json: function (e) {
      var t = {};
      if ("string" == typeof e)
        try {
          t = JSON.parse(e);
        } catch (e) {
          t = null;
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
    callCmd: function (e) {
      var t = document,
        n = navigator.userAgent,
        i = /android|Adr/gi.test(n),
        n = /iphone|ipad|ipod/gi.test(n),
        o = null,
        s = this.getHidden(),
        r = i ? 1550 : 2e3;
      (i
        ? ((o = "kugou://start.weixin"),
          e && e.protocal && e.protocal.android && (o = e.protocal.android))
        : n &&
          ((o = "kugouurl://start.weixin"), e) &&
          e.protocal &&
          e.protocal.ios &&
          (o = e.protocal.ios),
        e &&
          e.cmd &&
          (e.jsonStr
            ? (o += '?{"cmd": ' + e.cmd + ', "jsonStr": ' + e.jsonStr + "}")
            : (o += '?{"cmd": ' + e.cmd + "}")),
        t.getElementById("mod_debugwin_set") &&
          (t.getElementById("mod_debugwin_set").innerHTML = o),
        (start = new Date().valueOf()),
        o
          ? ((location.href = o),
            setTimeout(function () {
              document[s] ||
                ((end = new Date().valueOf()) - start < r &&
                  e &&
                  e.callback &&
                  e.callback());
            }, 1500))
          : e && e.callback && e.callback());
    },
    downSongs: function (e, t) {
      var n = "";
      e &&
        ((e["320size"] = e["320filesize"] || 0),
        (e.m4asize = e.m4afilesize || 0),
        (e.timelength = e.duration),
        (e["320hash"] = e["320hash"] || 0),
        (n = this.json2Str(e)),
        t
          ? this.callCmd({ cmd: 301, jsonStr: n, callback: t })
          : this.callCmd({ cmd: 301, jsonStr: n }));
    },
    jumpPlaylist: function (e, t) {
      e = this.json2Str(e);
      t
        ? this.callCmd({ cmd: 302, jsonStr: e, callback: t })
        : this.callCmd({ cmd: 302, jsonStr: e });
    },
    jumpCustomPage: function (e, t) {
      e = this.json2Str(e);
      t
        ? this.callCmd({ cmd: 303, jsonStr: e, callback: t })
        : this.callCmd({ cmd: 303, jsonStr: e });
    },
    jumpClientPage: function (e, t) {
      e = this.json2Str(e);
      t
        ? this.callCmd({ cmd: 304, jsonStr: e, callback: t })
        : this.callCmd({ cmd: 304, jsonStr: e });
    },
    jumpSingerPage: function (e, t) {
      e = this.json2Str(e);
      t
        ? this.callCmd({ cmd: 305, jsonStr: e, callback: t })
        : this.callCmd({ cmd: 305, jsonStr: e });
    },
    jumpRadio: function (e, t) {
      e = this.json2Str(e);
      t
        ? this.callCmd({ cmd: 306, jsonStr: e, callback: t })
        : this.callCmd({ cmd: 306, jsonStr: e });
    },
    jumpFM: function (e, t) {
      e = this.json2Str(e);
      t
        ? this.callCmd({ cmd: 307, jsonStr: e, callback: t })
        : this.callCmd({ cmd: 307, jsonStr: e });
    },
    jumpMV: function (e, t) {
      e = this.json2Str(e);
      t
        ? this.callCmd({ cmd: 308, jsonStr: e, callback: t })
        : this.callCmd({ cmd: 308, jsonStr: e });
    },
    openApp: function (e) {
      e ? this.callCmd({ callback: e }) : this.callCmd();
    },
  },
  oldImgUrl =
    ((() => {
      function a() {
        var t = {
            "&": "&#38;",
            "<": "&#60;",
            ">": "&#62;",
            '"': "&#34;",
            "'": "&#39;",
            "/": "&#47;",
          },
          e = /&(?!#?\w+;)|<|>|"|'|\//g;
        return function () {
          return (
            this &&
            this.replace(e, function (e) {
              return t[e] || e;
            })
          );
        };
      }
      function c(e) {
        return e.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
      }
      var l = {
          version: "1.0.1",
          templateSettings: {
            evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
            interpolate: /\{\{=([\s\S]+?)\}\}/g,
            encode: /\{\{!([\s\S]+?)\}\}/g,
            use: /\{\{#([\s\S]+?)\}\}/g,
            useParams:
              /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
            define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
            defineParams: /^\s*([\w$]+):([\s\S]+)/,
            conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
            iterate:
              /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
            varname: "it",
            strip: !0,
            append: !0,
            selfcontained: !1,
          },
          template: void 0,
          compile: void 0,
        },
        u =
          ("undefined" != typeof module && module.exports
            ? (module.exports = l)
            : "function" == typeof define && define.amd
              ? define(function () {
                  return l;
                })
              : ((function () {
                  return this || (0, eval)("this");
                })().doT = l),
          (String.prototype.encodeHTML = a()),
          {
            append: {
              start: "'+(",
              end: ")+'",
              endencode: "||'').toString().encodeHTML()+'",
            },
            split: {
              start: "';out+=(",
              end: ");out+='",
              endencode: "||'').toString().encodeHTML();out+='",
            },
          }),
        p = /$^/;
      ((l.template = function (t, e, n) {
        var i,
          o,
          s = (e = e || l.templateSettings).append ? u.append : u.split,
          r = 0;
        ((t =
          e.use || e.define
            ? (function n(o, e, s) {
                return ("string" == typeof e ? e : e.toString())
                  .replace(o.define || p, function (e, i, t, n) {
                    return (
                      (i = 0 === i.indexOf("def.") ? i.substring(4) : i) in s ||
                        (":" === t
                          ? (o.defineParams &&
                              n.replace(o.defineParams, function (e, t, n) {
                                s[i] = { arg: t, text: n };
                              }),
                            i in s || (s[i] = n))
                          : new Function("def", "def['" + i + "']=" + n)(s)),
                      ""
                    );
                  })
                  .replace(o.use || p, function (e, t) {
                    return (
                      o.useParams &&
                        (t = t.replace(o.useParams, function (e, t, n, i) {
                          if (s[n] && s[n].arg && i)
                            return (
                              (e = (n + ":" + i).replace(/'|\\/g, "_")),
                              (s.__exp = s.__exp || {}),
                              (s.__exp[e] = s[n].text.replace(
                                RegExp(
                                  "(^|[^\\w$])" + s[n].arg + "([^\\w$])",
                                  "g",
                                ),
                                "$1" + i + "$2",
                              )),
                              t + "def.__exp['" + e + "']"
                            );
                        })),
                      (t = new Function("def", "return " + t)(s)) && n(o, t, s)
                    );
                  });
              })(e, t, n || {})
            : t),
          (t = (
            "var out='" +
            (e.strip
              ? t
                  .replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ")
                  .replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "")
              : t
            )
              .replace(/'|\\/g, "\\$&")
              .replace(e.interpolate || p, function (e, t) {
                return s.start + c(t) + s.end;
              })
              .replace(e.encode || p, function (e, t) {
                return ((i = !0), s.start + c(t) + s.endencode);
              })
              .replace(e.conditional || p, function (e, t, n) {
                return t
                  ? n
                    ? "';}else if(" + c(n) + "){out+='"
                    : "';}else{out+='"
                  : n
                    ? "';if(" + c(n) + "){out+='"
                    : "';}out+='";
              })
              .replace(e.iterate || p, function (e, t, n, i) {
                return t
                  ? ((r += 1),
                    (o = i || "i" + r),
                    (t = c(t)),
                    "';var arr" +
                      r +
                      "=" +
                      t +
                      ";if(arr" +
                      r +
                      "){var " +
                      n +
                      "," +
                      o +
                      "=-1,l" +
                      r +
                      "=arr" +
                      r +
                      ".length-1;while(" +
                      o +
                      "<l" +
                      r +
                      "){" +
                      n +
                      "=arr" +
                      r +
                      "[" +
                      o +
                      "+=1];out+='")
                  : "';} } out+='";
              })
              .replace(e.evaluate || p, function (e, t) {
                return "';" + c(t) + "out+='";
              }) +
            "';return out;"
          )
            .replace(/\n/g, "\\n")
            .replace(/\t/g, "\\t")
            .replace(/\r/g, "\\r")
            .replace(/(\s|;|\}|^|\{)out\+='';/g, "$1")
            .replace(/\+''/g, "")
            .replace(/(\s|;|\}|^|\{)out\+=''\+/g, "$1out+=")),
          i &&
            e.selfcontained &&
            (t = "String.prototype.encodeHTML=(" + a.toString() + "());" + t));
        try {
          return new Function(e.varname, t);
        } catch (e) {
          throw (
            "undefined" != typeof console &&
              console.log("Could not create a template function: " + t),
            e
          );
        }
      }),
        (l.compile = function (e, t) {
          return l.template(e, null, t);
        }));
    })(),
    (doT.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      encode: /<%!([\s\S]+?)%>/g,
      use: /<%#([\s\S]+?)%>/g,
      define: /<%##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#%>/g,
      conditional: /<%\?(\?)?\s*([\s\S]*?)\s*%>/g,
      iterate:
        /<%~\s*(?:%>|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*%>)/g,
      varname: "it",
      strip: !0,
      append: !0,
      selfcontained: !1,
    }),
    {
      vip: "https://imgessl.kugou.com/h5_pic/20220530094648791514.png",
      svip: "https://imgessl.kugou.com/h5_pic/20220530094743778258.png",
      music: "https://imgessl.kugou.com/h5_pic/20170721152834720377.png",
      smusic: "https://imgessl.kugou.com/h5_pic/20220530094806795352.png",
      defaultVip: "https://imgessl.kugou.com/h5_pic/20220530094857442265.png",
      defaultMusic: "https://imgessl.kugou.com/h5_pic/20220530094935292827.png",
    }),
  imgUrl1 = {
    defaultVip: "https://imgessl.kugou.com/h5_pic/20220530093234833199.png",
    defaultMusic: "https://imgessl.kugou.com/h5_pic/20220530093405248968.png",
    vip: "https://imgessl.kugou.com/h5_pic/20220530093510871247.png",
    yvip: "https://imgessl.kugou.com/h5_pic/20220530093550857539.png",
    music: "https://imgessl.kugou.com/h5_pic/20220530093634352473.png",
    ymusic: "https://imgessl.kugou.com/h5_pic/20220530093711876903.png",
  },
  newimgUrl = {
    defaultVip: "https://imgessl.kugou.com/h5_pic/20220530093815237652.png",
    defaultMusic: "https://imgessl.kugou.com/h5_pic/20220530094313362634.png",
    vip: "https://imgessl.kugou.com/h5_pic/20220530093928322672.png",
    yvip: "https://imgessl.kugou.com/h5_pic/20220530094035749810.png",
    music: "https://imgessl.kugou.com/h5_pic/20220530094411871876.png",
    ymusic: "https://imgessl.kugou.com/h5_pic/20220530094446632119.png",
  },
  newimgUrl2 = {
    defaultVip: "https://imgessl.kugou.com/h5_pic/20220530093815237652.png",
    defaultMusic: "https://imgessl.kugou.com/h5_pic/20220530093847618573.png",
    vip: "https://imgessl.kugou.com/h5_pic/20220530093928322672.png",
    yvip: "https://imgessl.kugou.com/h5_pic/20220530094035749810.png",
    music: "https://imgessl.kugou.com/h5_pic/20220530094123355742.png",
    ymusic: "https://imgessl.kugou.com/h5_pic/20220530094159543359.png",
  },
  superVipUrlNew = {
    defaultVip: "https://imgessl.kugou.com/h5_pic/20220530101049702247.png",
    defaultMusic: "https://imgessl.kugou.com/h5_pic/20220530101102339213.png",
    vip: "https://imgessl.kugou.com/h5_pic/20220530101141918902.png",
    yvip: "https://imgessl.kugou.com/h5_pic/20220530101155197542.png",
    music: "https://imgessl.kugou.com/h5_pic/20220530101208532312.png",
    ymusic: "https://imgessl.kugou.com/h5_pic/20220530101220746256.png",
    defaultSuperVip:
      "https://imgessl.kugou.com/h5_pic/20220530101236686062.png",
    superVip: "https://imgessl.kugou.com/h5_pic/20220530101248553052.png",
    ySuperVIP: "https://imgessl.kugou.com/h5_pic/20220530101305642063.png",
  },
  svipLevelIconUrl = {
    vip_default1: "https://imgessl.kugou.com/h5_pic/20220803095757121979.png",
    vip_default2: "https://imgessl.kugou.com/h5_pic/20220803095757520994.png",
    vip_default3: "https://imgessl.kugou.com/h5_pic/20220803095757841861.png",
    vip_default4: "https://imgessl.kugou.com/h5_pic/20220803095758992980.png",
    vip_default5: "https://imgessl.kugou.com/h5_pic/20220803095758653242.png",
    vip_default6: "https://imgessl.kugou.com/h5_pic/20220803095851926374.png",
    vip_default7: "https://imgessl.kugou.com/h5_pic/20220803095851752294.png",
    vip_default8: "https://imgessl.kugou.com/h5_pic/20220803095851425197.png",
    vip_default9:
      "https://webvoobssdl.kugou.com/ccef741872cc207f0309d0a98fbcafc4.png",
    vip1: "https://imgessl.kugou.com/h5_pic/20220803100047865498.png",
    vip2: "https://imgessl.kugou.com/h5_pic/20220803100047203901.png",
    vip3: "https://imgessl.kugou.com/h5_pic/20220803100047577619.png",
    vip4: "https://imgessl.kugou.com/h5_pic/20220803100047871815.png",
    vip5: "https://imgessl.kugou.com/h5_pic/20220803100048385989.png",
    vip6: "https://imgessl.kugou.com/h5_pic/20220803100201596708.png",
    vip7: "https://imgessl.kugou.com/h5_pic/20220803100201698888.png",
    vip8: "https://imgessl.kugou.com/h5_pic/20220803100201226633.png",
    vip9: "https://webvoobssdl.kugou.com/81acddb7c4859049cf6df64c5b6fa065.png",
    vip_year1: "https://imgessl.kugou.com/h5_pic/20220803100245767415.png",
    vip_year2: "https://imgessl.kugou.com/h5_pic/20220803100245936045.png",
    vip_year3: "https://imgessl.kugou.com/h5_pic/20220803100245869708.png",
    vip_year4: "https://imgessl.kugou.com/h5_pic/20220803100245671510.png",
    vip_year5: "https://imgessl.kugou.com/h5_pic/20220803100245938898.png",
    vip_year6: "https://imgessl.kugou.com/h5_pic/20220803100338542620.png",
    vip_year7: "https://imgessl.kugou.com/h5_pic/20220803100339318733.png",
    vip_year8: "https://imgessl.kugou.com/h5_pic/20220803100339655100.png",
    vip_year9:
      "https://webvoobssdl.kugou.com/c2a913a2c982b6aa8d4edd1e60025eb1.png",
    svip_default1: "https://imgessl.kugou.com/h5_pic/20220803100536796868.png",
    svip_default2: "https://imgessl.kugou.com/h5_pic/20220803100536732590.png",
    svip_default3: "https://imgessl.kugou.com/h5_pic/20220803100536501186.png",
    svip_default4: "https://imgessl.kugou.com/h5_pic/20220803100536317403.png",
    svip_default5: "https://imgessl.kugou.com/h5_pic/20220803100537934438.png",
    svip_default6: "https://imgessl.kugou.com/h5_pic/20220803100627974807.png",
    svip_default7: "https://imgessl.kugou.com/h5_pic/20220803100628305193.png",
    svip_default8: "https://imgessl.kugou.com/h5_pic/20220803100628294306.png",
    svip_default9:
      "https://webvoobssdl.kugou.com/ccef741872cc207f0309d0a98fbcafc4.png",
    svip1: "https://imgessl.kugou.com/h5_pic/20220803100833587099.png",
    svip2: "https://imgessl.kugou.com/h5_pic/20220803100833416158.png",
    svip3: "https://imgessl.kugou.com/h5_pic/20220803100833888750.png",
    svip4: "https://imgessl.kugou.com/h5_pic/20220803100833347036.png",
    svip5: "https://imgessl.kugou.com/h5_pic/20220803100834223593.png",
    svip6: "https://imgessl.kugou.com/h5_pic/20220803100927771567.png",
    svip7: "https://imgessl.kugou.com/h5_pic/20220803100927656576.png",
    svip8: "https://imgessl.kugou.com/h5_pic/20220803100928607114.png",
    svip9: "https://webvoobssdl.kugou.com/81acddb7c4859049cf6df64c5b6fa065.png",
    svip_year1: "https://imgessl.kugou.com/h5_pic/20220804164542939050.png",
    svip_year2: "https://imgessl.kugou.com/h5_pic/20220804164543251344.png",
    svip_year3: "https://imgessl.kugou.com/h5_pic/20220804164543461127.png",
    svip_year4: "https://imgessl.kugou.com/h5_pic/20220804164543801155.png",
    svip_year5: "https://imgessl.kugou.com/h5_pic/20220804164543775059.png",
    svip_year6: "https://imgessl.kugou.com/h5_pic/20220804164708654830.png",
    svip_year7: "https://imgessl.kugou.com/h5_pic/20220804164708628046.png",
    svip_year8: "https://imgessl.kugou.com/h5_pic/20220804164709585157.png",
    svip_year9:
      "https://webvoobssdl.kugou.com/c2a913a2c982b6aa8d4edd1e60025eb1.png",
    music_year: "https://imgessl.kugou.com/h5_pic/20220530101220746256.png",
    music: "https://imgessl.kugou.com/h5_pic/20220530101208532312.png",
    music_default: "https://imgessl.kugou.com/h5_pic/20220530101102339213.png",
    svip_default: "https://imgessl.kugou.com/h5_pic/20220530101236686062.png",
    vip_default: "https://imgessl.kugou.com/h5_pic/20220530101049702247.png",
    svip_year: "https://imgessl.kugou.com/h5_pic/20220530101305642063.png",
    svip: "https://imgessl.kugou.com/h5_pic/20220530101248553052.png",
    vip_year: "https://imgessl.kugou.com/h5_pic/20220530101155197542.png",
    vip: "https://imgessl.kugou.com/h5_pic/20220530101141918902.png",
  },
  svipLevelIconUrlNew = {
    music: "https://webvoobssdl.kugou.com/f0df3eaa81179fac6a843e2441ef4ad9.png",
    music_default:
      "https://webvoobssdl.kugou.com/6da0640696f663bbbdea5b1bd3cdeea9.png",
    music_year:
      "https://webvoobssdl.kugou.com/6b2524edf4b20c34a1d936aaecabe690.png",
    svip: "https://webvoobssdl.kugou.com/a4e4d6120df0611c55dc6a9688303d0d.png",
    svip1: "https://webvoobssdl.kugou.com/08b99d6a17187a4370f229aded421a94.png",
    svip2: "https://webvoobssdl.kugou.com/7b561a78cd9122ba0c4eae07b7b46979.png",
    svip3: "https://webvoobssdl.kugou.com/b890077697c2c6d63497a3d375148c66.png",
    svip4: "https://webvoobssdl.kugou.com/f95af80dc05d9f143a1319c634e99d4f.png",
    svip5: "https://webvoobssdl.kugou.com/47c3f7417733c839b96995ff45aebf50.png",
    svip6: "https://webvoobssdl.kugou.com/e091b3c7b4377a467b22a7e7ccab0b97.png",
    svip7: "https://webvoobssdl.kugou.com/bd420b9d47ea4955cab340638d08bbdc.png",
    svip8: "https://webvoobssdl.kugou.com/05d44adbffe7450520f4bd37c36ed6ac.png",
    svip9: "https://webvoobssdl.kugou.com/402beed0c1994fbe440810803ea41d31.png",
    svip_default:
      "https://webvoobssdl.kugou.com/c3bf0264aef7763cbd5f60b106975002.png",
    svip_default1:
      "https://webvoobssdl.kugou.com/69ceb2ba6f70ba2a196d90a1cf856bd4.png",
    svip_default2:
      "https://webvoobssdl.kugou.com/b3244b1b5ac8398160f359f1577eafc4.png",
    svip_default3:
      "https://webvoobssdl.kugou.com/433374d6cc44bda20f30dd1b360679fd.png",
    svip_default4:
      "https://webvoobssdl.kugou.com/6ab1aa7082b408ebd8b9319488af13a0.png",
    svip_default5:
      "https://webvoobssdl.kugou.com/d40d143597a40f4f6657a396f7878343.png",
    svip_default6:
      "https://webvoobssdl.kugou.com/92728826faac736b50d639931151c434.png",
    svip_default7:
      "https://webvoobssdl.kugou.com/e836c1043333e17d754de7c395d26682.png",
    svip_default8:
      "https://webvoobssdl.kugou.com/a587960a196dd11433ceb6ff60c574ab.png",
    svip_default9:
      "https://webvoobssdl.kugou.com/b5327e3d124173a0187d6ad6ea99d2e2.png",
    svip_year:
      "https://webvoobssdl.kugou.com/9041e2062c13a3b4d5bc9b8dd86924d5.png",
    svip_year1:
      "https://webvoobssdl.kugou.com/bef95c12a142b42811d3ab69c24421e5.png",
    svip_year2:
      "https://webvoobssdl.kugou.com/dbbe3b336bdd2ee912e2fb48989e3a48.png",
    svip_year3:
      "https://webvoobssdl.kugou.com/3f6fcd47433f2757cb064e36363be2ab.png",
    svip_year4:
      "https://webvoobssdl.kugou.com/0c0659f532be5e7c7da46188709092d7.png",
    svip_year5:
      "https://webvoobssdl.kugou.com/24f628ea8484af50a07e6614a74a5a2d.png",
    svip_year6:
      "https://webvoobssdl.kugou.com/0d00c2d2bb4228a128288babf76eb998.png",
    svip_year7:
      "https://webvoobssdl.kugou.com/305c503f0d2963899d3de956ec821490.png",
    svip_year8:
      "https://webvoobssdl.kugou.com/5a09080ad9b6ee0193ca9282162c51b4.png",
    svip_year9:
      "https://webvoobssdl.kugou.com/8f42741b5e97da70f9c80bbcd8bd6c7b.png",
    vip: "https://webvoobssdl.kugou.com/2b53b57162c52fa909674fec75fdff57.png",
    vip1: "https://webvoobssdl.kugou.com/6b9a89f47fb905c25c6ce92b434eb737.png",
    vip2: "https://webvoobssdl.kugou.com/f3be3a1d8d27532635e1ecd377040113.png",
    vip3: "https://webvoobssdl.kugou.com/9d35546b2db005d3e316fdd5424b2c1d.png",
    vip4: "https://webvoobssdl.kugou.com/57b98cbc564ba4afc3df3329c6b0a4eb.png",
    vip5: "https://webvoobssdl.kugou.com/cec823168cc25cf27baec4390a6a8c5f.png",
    vip6: "https://webvoobssdl.kugou.com/b3116aa0a0548b7a7de8092134ea8448.png",
    vip7: "https://webvoobssdl.kugou.com/3b09fb0141993f14e1f083e0cf1579a2.png",
    vip8: "https://webvoobssdl.kugou.com/579ccf1167fa62851cee1eb8d4934c89.png",
    vip9: "https://webvoobssdl.kugou.com/402beed0c1994fbe440810803ea41d31.png",
    vip_default:
      "https://webvoobssdl.kugou.com/f8f0a622724e435f3e2b4b2493812989.png",
    vip_default1:
      "https://webvoobssdl.kugou.com/7ee76cc3392a1700b11fed0e4871ba3f.png",
    vip_default2:
      "https://webvoobssdl.kugou.com/7da3ba6124f09faa9504a6e8882a4084.png",
    vip_default3:
      "https://webvoobssdl.kugou.com/18a2b3857efcc3c0fe8a57b4aefb70ef.png",
    vip_default4:
      "https://webvoobssdl.kugou.com/eec830a789ab8697f3f55f60d63cdcb3.png",
    vip_default5:
      "https://webvoobssdl.kugou.com/558c4f83f0b89e5f3d3ab719e63166f8.png",
    vip_default6:
      "https://webvoobssdl.kugou.com/4804763098a7bb6d15f9be7f436635a4.png",
    vip_default7:
      "https://webvoobssdl.kugou.com/cc4f484508dc0f171c3792420a47335f.png",
    vip_default8:
      "https://webvoobssdl.kugou.com/34b42d0d8aa265a37a0d35311c86483d.png",
    vip_default9:
      "https://webvoobssdl.kugou.com/b5327e3d124173a0187d6ad6ea99d2e2.png",
    vip_year:
      "https://webvoobssdl.kugou.com/825541137d60ec26bdf4a3d7bcdd51b2.png",
    vip_year1:
      "https://webvoobssdl.kugou.com/e062aa5f875954920b4c0deb0eebe437.png",
    vip_year2:
      "https://webvoobssdl.kugou.com/c8cbb4b14c77a2ad7628b65e8b98ed57.png",
    vip_year3:
      "https://webvoobssdl.kugou.com/9804a1f395e3759b18c692c6be661d05.png",
    vip_year4:
      "https://webvoobssdl.kugou.com/3b016c3cebf730d58bf426a9ad17b317.png",
    vip_year5:
      "https://webvoobssdl.kugou.com/a0c291363fc0680b389ccb980ebf1bd2.png",
    vip_year6:
      "https://webvoobssdl.kugou.com/e8aa5bf133341ec064dc9dfa20393a28.png",
    vip_year7:
      "https://webvoobssdl.kugou.com/bda67cc4e9c17a95b860e17a5cb4a123.png",
    vip_year8:
      "https://webvoobssdl.kugou.com/9ed2fc7d48bf88c8a4f70c6c016447e1.png",
    vip_year9:
      "https://webvoobssdl.kugou.com/8f42741b5e97da70f9c80bbcd8bd6c7b.png",
  },
  isSupportWebp = !1;
function checkSupportWebp() {
  var t = new Image();
  ((t.onload = function () {
    var e = 0 < t.width && 0 < t.height;
    isSupportWebp = e;
  }),
    (t.onerror = function () {
      isSupportWebp = !1;
    }),
    (t.src =
      "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="));
}
checkSupportWebp();
var getVipIconModule = {
    superVipIcon: function (e) {
      svipLevelIconUrl.svip_default1;
      var t = 9 < (t = e && e.svip_level ? e.svip_level : 0) ? 9 : t;
      return e && 16 == (16 & e.user_type)
        ? 16 == (16 & e.user_y_type)
          ? svipLevelIconUrl["svip_year" + t] || svipLevelIconUrl.svip_year
          : svipLevelIconUrl["svip" + t] || svipLevelIconUrl.svip
        : svipLevelIconUrl["svip_default" + t] ||
            svipLevelIconUrl.svip_default1;
    },
    vipIcon: function (e) {
      svipLevelIconUrl.vip_default1;
      var t = 9 < (t = e && e.svip_level ? e.svip_level : 0) ? 9 : t;
      return e &&
        ((0 < e.vip_type && e.vip_type < 5 && 0 < e.m_type) || 6 === e.vip_type)
        ? 2 == (2 & e.y_type)
          ? svipLevelIconUrl["vip_year" + t] || svipLevelIconUrl.vip_year
          : svipLevelIconUrl["vip" + t] || svipLevelIconUrl.vip
        : svipLevelIconUrl["vip_default" + t] || svipLevelIconUrl.vip_default1;
    },
    musicIcon: function (e) {
      var t = svipLevelIconUrl.music_default;
      return (t =
        e && 0 < e.m_type
          ? 1 == (1 & e.y_type)
            ? svipLevelIconUrl.music_year
            : svipLevelIconUrl.music
          : t);
    },
    getSvipLevelIconUrl: function (e, t) {
      var n = svipLevelIconUrl.vip_default1,
        i = e && e.svip_level ? e.svip_level : 0,
        o = 11,
        s = isSupportWebp;
      return (
        1 !== clientFunctionModule.supportNameplate ||
          2 != (2 & clientFunctionModule.supportVipFeature) ||
          (3 != e.nameplate_type && 4 != e.nameplate_type) ||
          !e.nameplate_url_v1 ||
          (s && e.nameplate_dynamic_v1
            ? e.nameplate_dynamic_v1
            : e.nameplate_url_v1,
          getVipIconModule.superVipNameplate(e, s, clientFunctionModule),
          getVipIconModule.musicIcon(e)),
        1 === clientFunctionModule.supportNameplate &&
          e.nameplate_url &&
          (s && e.nameplate_dynamic ? e.nameplate_dynamic : e.nameplate_url,
          getVipIconModule.superVipNameplate(e, s, clientFunctionModule),
          getVipIconModule.musicIcon(e)),
        (i = 9 < i ? 9 : i),
        e &&
          (o =
            16 == (16 & e.user_type)
              ? ((n =
                  16 == (16 & e.user_y_type)
                    ? svipLevelIconUrl["svip_year" + i] ||
                      svipLevelIconUrl.svip_year
                    : svipLevelIconUrl["svip" + i] || svipLevelIconUrl.svip),
                20)
              : (0 < e.vip_type && e.vip_type < 5 && 0 < e.m_type) ||
                  6 === e.vip_type
                ? ((n =
                    2 == (2 & e.y_type)
                      ? svipLevelIconUrl["vip_year" + i] ||
                        svipLevelIconUrl.vip_year
                      : svipLevelIconUrl["vip" + i] || svipLevelIconUrl.vip),
                  11)
                : 0 < e.m_type
                  ? ((n =
                      1 == (1 & e.y_type)
                        ? svipLevelIconUrl.music_year
                        : svipLevelIconUrl.music),
                    31)
                  : e.su_vip_end_time &&
                      e.su_vip_end_time >= e.vip_end_time &&
                      e.su_vip_end_time >= e.m_end_time
                    ? ((n =
                        0 < i
                          ? svipLevelIconUrl["svip_default" + i]
                          : svipLevelIconUrl.svip_default1),
                      20)
                    : e.vip_end_time &&
                        e.m_end_time &&
                        e.vip_end_time >= e.m_end_time &&
                        e.vip_end_time > e.su_vip_end_time
                      ? ((n =
                          0 < i
                            ? svipLevelIconUrl["vip_default" + i]
                            : svipLevelIconUrl.vip_default1),
                        11)
                      : e.m_end_time &&
                          e.m_end_time > e.vip_end_time &&
                          e.m_end_time > e.su_vip_end_time
                        ? ((n = svipLevelIconUrl.music_default), 31)
                        : "supervip" === t
                          ? ((n = svipLevelIconUrl.svip_default1), 20)
                          : ((n = svipLevelIconUrl.vip_default1), 11)),
        { url: n, vipType: o }
      );
    },
    showOldIcon: function (e) {
      var t = {
        vip: oldImgUrl.defaultVip,
        music: oldImgUrl.defaultMusic,
        suvip: superVipUrlNew.defaultSuperVip,
      };
      return (
        e &&
          (e.m_type <= 0 || 4 < e.m_type
            ? 0 < e.vip_type && e.vip_type < 5
              ? (t.vip = oldImgUrl.vip)
              : 6 == e.vip_type && (t.vip = oldImgUrl.svip)
            : 1 <= e.m_type &&
              e.m_type <= 4 &&
              (1 == e.m_type || 2 == e.m_type
                ? (t.music = oldImgUrl.music)
                : (3 != e.m_type && 4 != e.m_type) ||
                  (t.music = oldImgUrl.smusic),
              (0 < e.vip_type && e.vip_type < 5) || 6 == e.vip_type) &&
              (t.vip = oldImgUrl.svip)),
        t
      );
    },
    superVipNameplate: function (e, t, n) {
      return e && 16 == (16 & e.user_type)
        ? 2 != (2 & n.supportVipFeature) ||
          (3 != e.nameplate_type && 4 != e.nameplate_type) ||
          !e.nameplate_url_v1
          ? t && e.nameplate_dynamic
            ? e.nameplate_dynamic
            : e.nameplate_url
          : t && e.nameplate_dynamic_v1
            ? e.nameplate_dynamic_v1
            : e.nameplate_url_v1
        : getVipIconModule.superVipIcon(e);
    },
    showNewIcon: function (e, t, n) {
      var i, o, s;
      return (
        t.supportVipFeature &&
          65536 == (65536 & t.supportVipFeature) &&
          (svipLevelIconUrl = JSON.parse(JSON.stringify(svipLevelIconUrlNew))),
        1 !== t.supportNameplate ||
        2 != (2 & t.supportVipFeature) ||
        (3 != e.nameplate_type && 4 != e.nameplate_type) ||
        !e.nameplate_url_v1
          ? 1 === t.supportNameplate && e.nameplate_url
            ? {
                vip:
                  (i = isSupportWebp) && e.nameplate_dynamic
                    ? e.nameplate_dynamic
                    : e.nameplate_url,
                suvip: getVipIconModule.superVipNameplate(e, i, t),
                music: getVipIconModule.musicIcon(e),
                member: !0,
              }
            : 1 == t.open_growth_icon_v2
              ? {
                  vip: getVipIconModule.vipIcon(e),
                  music: getVipIconModule.musicIcon(e),
                  suvip: getVipIconModule.superVipIcon(e),
                }
              : ((o = imgUrl1),
                1 === t.isSupportSuperVip
                  ? (o = superVipUrlNew)
                  : 9022 <= n.version
                    ? (o = newimgUrl2)
                    : 8996 <= n.version && n.version < 9022 && (o = newimgUrl),
                (s = {
                  vip: o.defaultVip,
                  music: o.defaultMusic,
                  suvip: o.defaultSuperVip,
                }),
                e &&
                  ((0 < e.vip_type && e.vip_type < 5) || 6 == e.vip_type
                    ? ((s.vip = o.vip),
                      6 == e.vip_type &&
                        2 == (2 & parseInt(e.y_type, 10)) &&
                        (s.vip = o.yvip))
                    : (s.vip = o.defaultVip),
                  1 <= e.m_type &&
                    e.m_type <= 4 &&
                    ((s.music = o.music), 1 == (1 & parseInt(e.y_type, 10))) &&
                    (s.music = o.ymusic),
                  e.user_type) &&
                  16 == (16 & e.user_type) &&
                  (e.user_y_type && 16 == (16 & e.user_y_type)
                    ? (s.suvip = o.ySuperVIP)
                    : (s.suvip = o.superVip)),
                s)
          : {
              vip:
                (i = isSupportWebp) && e.nameplate_dynamic_v1
                  ? e.nameplate_dynamic_v1
                  : e.nameplate_url_v1,
              suvip: getVipIconModule.superVipNameplate(e, i, t),
              music: getVipIconModule.musicIcon(e),
              member: !0,
            }
      );
    },
  },
  dom =
    (KgMobileCall.changeStatusColor({
      isFullScreen: 1,
      isHideTitleBar: 1,
      isShowArrow: 1,
      backBtnColor: "000000",
      backBtnOpacity: 100,
      fontColor: "000000",
      fontOpacity: 100,
      statusBarMode: 1,
    }),
    KgMobileCall.getStatusHeight(function (e) {
      var t;
      1 == e.status &&
        ($("#topFixed").css({ height: e.dpStatusBarHeight + "px" }),
        (t = $("#indexBar")).css({ paddingTop: e.dpStatusBarHeight + "px" }),
        $(window).on("scroll", function () {
          $(window).scrollTop() >= e.dpStatusBarHeight
            ? t.css("background", "rgba(255,255,255,0.5)")
            : t.css("background", "rgba(0,0,0,0)");
        }));
    }),
    {
      $pageIndex: $("#pageIndex"),
      pageIndexTop: $("#pageIndexTop")[0],
      pageIndexTopTmpl: $("#pageIndexTopTmpl")[0],
      pageIndexTopTmplOld: $("#pageIndexTopTmplOld")[0],
      pageIndexBottomWrap: $("#pageIndexBottomWrap")[0],
      pageIndexBottomWrapTmpl: $("#pageIndexBottomWrapTmpl")[0],
      pageIndexList: $("#pageIndexList")[0],
      pageIndexListTmpl: $("#pageIndexListTmpl")[0],
    }),
  imgUrlObj = {
    grade0: "https://imgessl.kugou.com/h5_pic/20170426145926453004.png",
    grade1: "https://imgessl.kugou.com/h5_pic/20170426145926533673.png",
    grade2: "https://imgessl.kugou.com/h5_pic/20170426145926175298.png",
    grade3: "https://imgessl.kugou.com/h5_pic/20170426145926997719.png",
    grade4: "https://imgessl.kugou.com/h5_pic/20170426145926391364.png",
    grade5: "https://imgessl.kugou.com/h5_pic/20170426150054312251.png",
    grade6: "https://imgessl.kugou.com/h5_pic/20170426150054812533.png",
    grade7: "https://imgessl.kugou.com/h5_pic/20170426150054843271.png",
    grade8: "https://imgessl.kugou.com/h5_pic/20170426150054826973.png",
    grade9: "https://imgessl.kugou.com/h5_pic/20170426150054651235.png",
    grade10: "https://imgessl.kugou.com/h5_pic/20170426150406910749.png",
    grade11: "https://imgessl.kugou.com/h5_pic/20170426150406632297.png",
    grade12: "https://imgessl.kugou.com/h5_pic/20170426150406558634.png",
    grade13: "https://imgessl.kugou.com/h5_pic/20170426150406987324.png",
    grade14: "https://imgessl.kugou.com/h5_pic/20170426150406956034.png",
    grade15: "https://imgessl.kugou.com/h5_pic/20170426150530501850.png",
    grade16: "https://imgessl.kugou.com/h5_pic/20170426150530663728.png",
    grade17: "https://imgessl.kugou.com/h5_pic/20170426150530612217.png",
    grade18: "https://imgessl.kugou.com/h5_pic/20170426150530477480.png",
    grade19: "https://imgessl.kugou.com/h5_pic/20170426150530774345.png",
    grade20: "https://imgessl.kugou.com/h5_pic/20170426150640921312.png",
    grade10000: "https://imgessl.kugou.com/h5_pic/20170216193425692646.png",
  },
  globalDomain = location.protocol + "//" + document.domain,
  URL = {
    svipUrl: globalDomain + "/vip/v2/vip.html",
    ysvipUrl: globalDomain + "/vip/v2/y_svip.html",
    updateVip: globalDomain + "/vip/v2/update_vip.html",
  },
  vipMusicInfo = {},
  clientFunctionModule = {},
  pageAbTest = {},
  pageAbTestEls = {},
  isHarmonyOS =
    window.navigator &&
    window.navigator.userAgent &&
    (-1 < window.navigator.userAgent.toLowerCase().indexOf("harmonyos") ||
      -1 < window.navigator.userAgent.toLowerCase().indexOf("openharmony")),
  Util = {
    stringToObj: function (e) {
      for (
        var t = {}, n = e ? e.split("&") : [], i = 0, o = n.length;
        i < o;
        i++
      ) {
        var s = n[i].split("=");
        1 < s.length && (t[s[0]] = s[1]);
      }
      return t;
    },
  },
  statisticsModule = {
    statistic: function (e) {
      var t = "https://tj.kugou.com/front/link.php?id=" + e + "&callback=?";
      try {
        setTimeout(function () {
          new Image().src = t;
        }, 0);
      } catch (e) {}
    },
  },
  parameterObject = Util.stringToObj(location.search.replace("?", ""));
function setLogStat(e) {
  e = $.extend({}, statisticInfo.funnelStatistic, e);
  mobileLog(30030, e);
}
window.mobileLog = function (e, t, n, i) {
  e = [e, t, n, i];
  ((window.apmCollectData = []), window.apmCollectData.push(e));
  try {
    newLogCount();
  } catch (e) {}
};
var userInfo = { isLogin: !1 },
  openSmusic = 1,
  statisticInfo = {};
function isOverseas() {
  var e = !1;
  return (e =
    userInfo.overseas &&
    1 == userInfo.overseas.status &&
    2 <= userInfo.overseas.info.area_original &&
    userInfo.overseas.info.area_original <= 5
      ? !0
      : e);
}
function harmonyOSToJumpVip(e) {
  console.log("statisticInfo", statisticInfo);
  var t = "",
    t =
      5 == e || 6 == e
        ? "https://h5.kugou.com/payment/v-c950050e/harmony.html?pagetype=superVip&source_id=" +
          statisticInfo.funnelStatistic.source_id
        : "https://h5.kugou.com/payment/v-c950050e/harmony.html?source_id=" +
          statisticInfo.funnelStatistic.source_id;
  (console.log("harmonyOSToJumpVip href", t),
    KgMobileCall.openURL({ browser: 4, url: t, title: "会员中心" }));
}
((statisticInfo.funnelStatistic = {
  b: "曝光",
  button_id: "",
  page_id: 3025,
  source_id: parameterObject.source_id || 2021,
  hash: parameterObject.hash || "",
  plat_id: 1005,
  business_id: "001",
  user_id: "",
  mid: "",
  nettype: "",
  tv: 0,
  rechar: 0,
  ad_id: "",
  pay_type: "",
  ordernumber: "",
  ext_content: "",
  sell_status: "",
  times: new Date().getTime(),
}),
  (statisticInfo.phpClickStatistic = {
    pageid: "8279",
    openid1: "8281",
    openid2: "8282",
  }));
var alertUI = (() => {
    var i,
      o = $("#alertTips"),
      s = $("#alertTipsInner"),
      r = !1;
    return {
      init: function (e, t, n) {
        ((t = t || 1e3),
          clearTimeout(i),
          (s[0].innerHTML = e),
          setTimeout(function () {
            (o.show(),
              (r = !0),
              (i = setTimeout(function () {
                (n && n(), o.hide());
              }, t)));
          }, 1));
      },
      show: function (e, t, n) {
        ((t = t || 1e3),
          clearTimeout(i),
          (s[0].innerHTML = e),
          setTimeout(function () {
            (o.show(),
              (r = !0),
              n ||
                (i = setTimeout(function () {
                  o.hide();
                }, t)));
          }, 1));
      },
      hide: function () {
        (clearTimeout(i), o.hide(), (r = !1));
      },
      checkShow: function () {
        return r;
      },
    };
  })(),
  loadingModule =
    ($("body").on("click", function () {
      alertUI.checkShow() && alertUI.hide();
    }),
    (() => {
      var o,
        s = document.getElementById("loadingWrap"),
        r = document.getElementById("loadingBox"),
        a = document.getElementById("loadingDesc");
      return {
        showLoading: function (e, t, n) {
          var e = e || 1e4,
            t = t || "加载中，请稍候",
            i = n || "加载缓慢";
          (r.setAttribute("class", "loading-box loading-b"),
            (a.innerHTML = t),
            (s.style.display = "block"),
            clearTimeout(o),
            (o = setTimeout(function () {
              (r.setAttribute("class", "loading-box loading-o"),
                (a.innerHTML = i));
            }, e)));
        },
        hideLoading: function () {
          (clearTimeout(o),
            (s.style.display = "none"),
            r.setAttribute("class", "loading-box"));
        },
      };
    })()),
  goToPrepayModule = {
    isCanGoH5Page: function () {
      var e = !1;
      return (e =
        1 == clientFunctionModule.supportOpenOpatityWebview &&
        pageAbTest &&
        pageAbTest.TMEAB0levelpage0paymentpage &&
        pageAbTest.TMEAB0levelpage0paymentpage.mapParams &&
        "1" === pageAbTest.TMEAB0levelpage0paymentpage.mapParams.paymentpage
          ? !0
          : e);
    },
    isCanGoSSRPage: function () {
      var e = !1;
      return (e =
        1 == clientFunctionModule.supportOpenOpatityWebview &&
        12260 < userInfo.version &&
        pageAbTestEls &&
        pageAbTestEls.TMEAB0levelpage0UI &&
        pageAbTestEls.TMEAB0levelpage0UI.mapParams &&
        "1" === pageAbTestEls.TMEAB0levelpage0UI.mapParams.payfront &&
        "1" === pageAbTestEls.TMEAB0levelpage0UI.mapParams.type
          ? !0
          : e);
    },
    jumpNewPrepay: function (e) {
      KgMobileCall.openURL({
        browser: 17,
        url:
          "https://h5.kugou.com/pay/v-3a5c8ea4/index.html?enter_source=" +
          e +
          "&source_id=218501",
        enter_source: e,
      });
    },
    jumpVipPopup: function (e, t) {
      KgMobileCall.openURL({
        browser: 17,
        url:
          "https://gateway.kugou.com/ssr_vippopup/index?ssr_header_param=191&show_vip_type=" +
          t +
          "&entrance_source=" +
          e +
          "&source_id=218501",
        enter_source: e,
      });
    },
  },
  showUpdate = !1,
  welfareModule = (() => {
    var n = $("#dialog"),
      i = $("#dialog .dialog-title"),
      o = $("#dialog .dialog-img"),
      s = $("#dialog .dialog-name"),
      r = $("#dialog .dialog-dec"),
      a = $("#dialog button"),
      c = $("#dialogTips"),
      l = $("#dialogTips .dialog-title"),
      u = $("#dialogTips .dialog-img"),
      p = $("#dialogTips .dialog-name"),
      d = $("#dialogTips .dialog-dec"),
      f = $("#dialogTips button"),
      e = $("#songTips"),
      h =
        ($(".dialog-close").on("click", function () {
          $(".dialog").hide();
        }),
        {
          1: {
            name: "听歌券",
            link: "https://m3ws.kugou.com/vip/asset/member_library.html?sort=1&speak=1",
            browser: 4,
            dec: "听歌券请至“会员中心-我的卡券”处使用",
            btn: "去使用",
            type: 1,
          },
          2: {
            name: "会员优惠券",
            link:
              URL.svipUrl +
              "?now_v=1&source_id=" +
              statisticInfo.funnelStatistic.source_id +
              (statisticInfo.funnelStatistic.hash
                ? "&hash=" + statisticInfo.funnelStatistic.hash
                : ""),
            browser: 4,
            dec: "会员8折券请至“会员中心-我的卡券”处使用",
            btn: "前往使用",
            type: 2,
          },
          3: {
            name: "会员5天体验",
            link: !1,
            dec: "已直充到您的账户，5分钟内到账",
            btn: "确定",
            type: 3,
          },
          4: {
            name: "硬件优惠券",
            link: "https://activity.kugou.com/new-hardware-market/index.html#/mine/coupons?source=dengji&sucai=yongquan",
            browser: 7,
            dec: "请至”酷狗商城-我的-我的优惠券“处使用",
            btn: "前往使用",
            type: 4,
          },
          5: {
            name: "优惠券",
            link: "https://activity.kugou.com/new-hardware-market/index.html#/mine/coupons?source=dengji&sucai=yongquan",
            browser: 7,
            dec: "",
            btn: "前往使用",
            type: 5,
          },
        }),
      m = {
        1: 300,
        2: 1e3,
        3: 3e3,
        4: 6e3,
        5: 12e3,
        6: 2e4,
        7: 3e4,
        8: 5e4,
        9: 8e4,
        10: 12e4,
        11: 2e5,
        12: 3e5,
        13: 5e5,
        14: 8e5,
        15: 12e5,
        16: 18e5,
        17: 3e6,
        18: 45e5,
        19: 6e6,
        20: 1e7,
      };
    function g() {
      var t;
      isHarmonyOS ||
        ((t = { kugouid: userInfo.kugouID, token: userInfo.clienttoken }),
        KgMobileCall.getNewSign({ get: t, post: "" }, function (e) {
          1 == e.status &&
            (delete e.status,
            $.extend(t, e),
            $.ajax({
              type: "GET",
              url: "https://vip.kugou.com/v2/external/level_welfare/list",
              data: t,
              dataType: "json",
              headers: {
                "TmeAb-Olexp": "2,13,319,TMEAB0levelpage0paymentpage",
              },
              success: function (e, t, n) {
                n = n.getResponseHeader("ClientTmeabTest");
                if (
                  (n && (pageAbTest = JSON.parse(n)),
                  1 === e.status &&
                    e.data &&
                    e.data.receive_list &&
                    e.data.welfare_list)
                ) {
                  try {
                    if (isHarmonyOS) {
                      for (
                        var i = [], o = 0;
                        o < e.data.receive_list.length;
                        o++
                      )
                        4 != e.data.receive_list[o].type &&
                          i.push(e.data.receive_list[o]);
                      e.data.receive_list = i;
                      for (
                        var s = [], r = 0;
                        r < e.data.welfare_list.length;
                        r++
                      )
                        4 != e.data.welfare_list[r].type &&
                          s.push(e.data.welfare_list[r]);
                      e.data.welfare_list = s;
                    }
                  } catch (e) {
                    console.error("harmonyos适配出错", e);
                  }
                  ((dom.pageIndexList.innerHTML = doT.compile(
                    dom.pageIndexListTmpl.innerHTML,
                  )(e.data)),
                    $("#footer").show(),
                    $("#retry").hide(),
                    $(".js-tipsUpdate").on("click", function () {
                      $("#dialogUpdate").show();
                    }),
                    $("img").on("error", function () {
                      this.src =
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACDCAMAAAAah2FvAAAAflBMVEVjc5z///////////////////9peJb///////9heZ7///9qapUAAAD///////////+RmbuEjbBqeJ7s7vORnLuPlrhxgKX////19ve4v9KpsMfLz93j5Oudp73O0uDb3efv9PawuM76+vp4h6meqb9hbpi5wNHk5+/AyNWZpr/2toYNAAAAKnRSTlMfJyUeICoRIyIVLAwALhwbJSQbMSgjIhcTMjEzLgw2DSsdDw4tEjc4KBQMC16IAAAD20lEQVR42u3a23KbMBAGYItDDKQ2NjiAccBnJ3n/F6wkECstuO1FI5SZ/dve1L34+s9qpWSyeF38pMS/CGyEwARGITCBUQhMYBQCExiFwARGITCBUQhMYBQCExiFwARGITCBUQhMYBQC/x/w2/mcPfnIQXCxX4kEX5Ofugfe5asuSTXVsnPg4qPnrpLkuBjHOfCh75d7E3Ydf+4aeAcF81Tjf+AauAYvTxAvcFwDP3pvB2b3yTE/n8+xW2DOlfGmXJ8eY8yrYjfAdS64Kv7EYtuzLmXsBHj7AeDJQ1dLrew4cwG8eOSr5A8TsX3vuTxXJ8BFOxQcfk0PhCKXmQvgxbbNOy87T6xpKJincQLMx1SQT59T/R2gX54ydgPM52JbTP797dRz+4qProBRcMGein93G1wrryIvL06Di+7EAdfzgqvLYFhpvXe5XFaZu+DNe2eFcHHUuAtWBXtQMAeXmatg486QYgmOGlfBB7QghJZ7ozR2E6zuDOUVZOENoqOT4KI7cdpAKG+0fnERrJ7BA1cWvOTgILhks4KLz1MYVBl+BkO/sCEi6Q3865zg4pAkYZgg8b4bCKaDIwWG/94c4H0SJoLcGCvtBPMgI6ahGwiZZj7wLhdcnkg/Sge8gWEiZMp4NnDLCw5lKrTS0AoWCVT841zgOhGRYNaMC0biwRuU93nAm5xrVXyFqD3g6htCDYQPFdsGt7JelUs23BkeQwMhMvTr+/76Oge45lwlZiFjjbbS0JUMXh4hvswA3uZ6wVy5joc7AwoWXDkRMA8yV/vgg/BCwTzHrmBPbxgWGoyESJXZBt9wwZx57Z7B3ngFg1elsQwucl6v0vZgVsYHY4Dhjaa0AC5ju+AH7lcm9fQjJ7iwgTsy5GgVvMvDBLhA7rXgXQou/6PGF1K+WAQXrXykDWLdq43EZMFQsUXwXhsIZoDHAwE3nG9knb5aA+/0O9nUgncAQwzven3JbIHbUPOGhhcWhAcFA1fz8oobG2D1SJsGQ2AiwIsaTqvYCniTP5kH88kD5w1WMGiFN00bK2B5JyuvQR5/WQ9m1K8vwZfMArgG7yQX3jx4fiGyX/67jL8fvM2fHjhjINBGQwMhxRx8/37w/tl5g4KxFxc8eNPKQsNtiAqGGN/mkYETZyw05U0vFg7dI3l6Y+CFBhkNMP8lJ8IC+Jb3XCyGqIJ1LhaLlF9WLo5bexrPg6nFOxhrO/A5s/WW2Ils/ilverZGnPp261Sc+HmJv4XABEYhMIFRCExgFAITGIXABEYhMIFRCExgFAITGIXABEYhMIFRCExgFAIL8MtPyuuv3+FiWErHF1VWAAAAAElFTkSuQmCC";
                    }));
                } else
                  ($("#footer").hide(),
                    $("#retry")
                      .show()
                      .off()
                      .on("click", function () {
                        g();
                      }));
              },
              error: function () {
                ($("#footer").hide(),
                  $("#retry")
                    .show()
                    .off()
                    .on("click", function () {
                      g();
                    }));
              },
            }));
        }));
    }
    function v(e, t) {
      (5 == e.type
        ? (i.text("50元优惠券已到账"),
          n.addClass("dialog-mang"),
          (o[0].src =
            "https://webimg.kgimg.com/2ca0014f0c4f82a17e9e596769c9e3f3.png"),
          s.text(""))
        : (i.text("成功领取"),
          n.removeClass("dialog-mang"),
          (o[0].src = e.icon),
          s.text(e.name)),
        r.text(e.dec),
        a
          .text(e.btn)
          .off()
          .on("click", function () {
            t
              ? KgMobileCall.openURL({ browser: e.browser, url: t })
              : e.link
                ? KgMobileCall.openURL({ browser: e.browser, url: e.link })
                : n.hide();
          }),
        n.show());
    }
    return {
      init: function () {
        (g(),
          $("#dialogBlindboxBtn").on("click", function () {
            $("#dialogBlindbox").hide();
          }),
          $("#dialogUpdateBtn").on("click", function () {
            $("#dialogUpdate").hide();
          }));
      },
      check: g,
      receive: function (e) {
        var t,
          o = $(e),
          e = o.attr("data-id"),
          s = o.attr("data-type");
        (setLogStat({
          source_id: 202107,
          ext_content: statisticInfo.funnelStatistic.ext_content + "," + e,
          b: "点击",
          button_id: 4001,
          svar1: s,
        }),
          1 == o.attr("data-receive")
            ? 4 == s
              ? ((t = o.attr("data-url")),
                KgMobileCall.openURL({ browser: 7, url: t }))
              : 1 == s
                ? KgMobileCall.openURL({
                    browser: 4,
                    url: "https://m3ws.kugou.com/vip/asset/member_library.html?sort=1&speak=1",
                  })
                : 2 == s
                  ? isHarmonyOS
                    ? harmonyOSToJumpVip()
                    : KgMobileCall.openURL({
                        browser: 4,
                        url:
                          URL.svipUrl +
                          "?now_v=1&source_id=" +
                          statisticInfo.funnelStatistic.source_id +
                          (statisticInfo.funnelStatistic.hash
                            ? "&hash=" + statisticInfo.funnelStatistic.hash
                            : ""),
                      })
                  : 5 == s &&
                    KgMobileCall.openURL({
                      browser: 0,
                      url: "https://h5.kugou.com/ArtToy/v-4aa07e80/index.html?isHideTitleBar=1&has_playing_bar=0&tab=0&hreffrom=2006",
                    })
            : ((t = o.attr("data-level")),
              (e = {
                appid: userInfo.clientappid,
                kugouid: userInfo.kugouID,
                token: userInfo.clienttoken,
                welfare_id: e,
                level: t,
              }),
              userInfo.version < 10409 && 1 == s
                ? ($("#tipsDialogContent").html(
                    "领听歌券需将客户端升级到最新版本哦",
                  ),
                  $("#tipsDialog").show())
                : userInfo.version < 10559 && 5 == s
                  ? ($("#tipsDialogContent").html("请将客户端升级到最新版本哦"),
                    $("#tipsDialog").show())
                  : ((statisticInfo.funnelStatistic.b = "点击"),
                    (statisticInfo.funnelStatistic.button_id =
                      1 == s
                        ? 405206
                        : 2 == s
                          ? 405207
                          : 3 == s
                            ? 405208
                            : 405209),
                    mobileLog(30030, statisticInfo.funnelStatistic),
                    window.getInterFacePublic(e, "{}", {
                      useH5: !1,
                      postType: "json",
                      callback: function (e) {
                        e &&
                          (loadingModule.showLoading(1e4, "加载中", "加载缓慢"),
                          $.ajax({
                            type: "POST",
                            url:
                              "https://vip.kugou.com/external/level_welfare/receive?" +
                              ((e) => {
                                try {
                                  var t,
                                    n = [];
                                  for (t in e) {
                                    var i = encodeURIComponent(t),
                                      o = encodeURIComponent(e[t]);
                                    n.push(i + "=" + o);
                                  }
                                  return n.join("&");
                                } catch (e) {
                                  return "";
                                }
                              })(e),
                            data: "{}",
                            dataType: "json",
                            success: function (e, t, n) {
                              var i;
                              (1 === e.status
                                ? (o.attr("data-receive", 1),
                                  o.text(
                                    3 != s ? "去使用" : o.attr("data-button"),
                                  ),
                                  3 != s
                                    ? 4 == s
                                      ? o
                                          .addClass("use")
                                          .after("<em>已领取</em>")
                                      : o
                                          .addClass("use")
                                          .after(
                                            "<em>" +
                                              o.attr("data-button") +
                                              "</em>",
                                          )
                                    : o.addClass("done"),
                                  ((i = h[s]).icon = o.attr("data-icon")),
                                  4 == s ? v(i, o.attr("data-url")) : v(i),
                                  1 == s &&
                                    KgMobileCall.musicCoupon({ type: 1 }),
                                  ((i = $.extend(
                                    {},
                                    statisticInfo.funnelStatistic || {},
                                  )).b = "曝光"),
                                  (i.page_id =
                                    1 == s
                                      ? 302521
                                      : 2 == s
                                        ? 302522
                                        : 3 == s
                                          ? 302523
                                          : 302524),
                                  (i.button_id = ""),
                                  mobileLog(30030, i))
                                : 50023 == e.error_code
                                  ? ((i = n.getResponseHeader("SSA-CODE")),
                                    (n = n.getResponseHeader("SSA-HMID")),
                                    KgUser.antiBrushH5({
                                      eventid: i,
                                      userid: userInfo.kugouID,
                                      appid: userInfo.clientappid,
                                      mid: n,
                                      url: null,
                                      openWith: "iframe",
                                      callback: function () {},
                                    }))
                                  : 60724 == e.error_code
                                    ? alertUI.init(
                                        "今天已被领完啦，明天早点来吧~",
                                        2e3,
                                      )
                                    : alertUI.init("网络异常，过会儿试试", 2e3),
                                loadingModule.hideLoading());
                            },
                            error: function () {
                              (loadingModule.hideLoading(),
                                alertUI.init("网络异常，过会儿试试", 2e3));
                            },
                          }));
                      },
                    }))));
      },
      setDialogTips: function (e) {
        var t = {
          lv: (e = $(e)).attr("data-level"),
          pic: e.attr("data-icon"),
          name: e.attr("data-name"),
          type: e.attr("data-type"),
        };
        (l.html("升级到 <i>Lv." + t.lv + "</i> 可领"),
          (u[0].src = t.pic),
          p.text(t.name),
          d.html(
            "还差 <i>" +
              (m[t.lv] - Number(userInfo.gradeData.p_current_point)) +
              "点</i> 到 Lv." +
              t.lv +
              "，继续加油！",
          ),
          f
            .text(userInfo.isVIP ? "知道了" : "开通会员加速升级")
            .off()
            .on("click", function () {
              var e;
              userInfo.isVIP
                ? c.hide()
                : (isHarmonyOS
                    ? harmonyOSToJumpVip()
                    : goToPrepayModule.isCanGoSSRPage()
                      ? (c.hide(), goToPrepayModule.jumpVipPopup(237, 11))
                      : goToPrepayModule.isCanGoH5Page()
                        ? (c.hide(), goToPrepayModule.jumpNewPrepay(237))
                        : ((e =
                            URL.svipUrl +
                            "?source_id=" +
                            statisticInfo.funnelStatistic.source_id +
                            (statisticInfo.funnelStatistic.hash
                              ? "&hash=" + statisticInfo.funnelStatistic.hash
                              : "")),
                          KgMobileCall.openURL({ browser: 4, url: e })),
                  ((e = $.extend({}, statisticInfo.funnelStatistic || {})).b =
                    "点击"),
                  (e.source_id = 202108),
                  (e.page_id = 301606),
                  (e.button_id = 4001),
                  (e.svar1 = t.type),
                  mobileLog(30030, e));
            }),
          c.show(),
          (statisticInfo.funnelStatistic.b = "点击"),
          (statisticInfo.funnelStatistic.source_id = 202107),
          (statisticInfo.funnelStatistic.page_id = 3025),
          (statisticInfo.funnelStatistic.button_id = 4001),
          (statisticInfo.funnelStatistic.svar1 = t.type),
          mobileLog(30030, statisticInfo.funnelStatistic),
          ((e = $.extend({}, statisticInfo.funnelStatistic || {})).b = "曝光"),
          (e.source_id = 202108),
          (e.page_id = 301606),
          (e.button_id = 4001),
          (e.svar1 = t.type),
          mobileLog(30030, e));
      },
      showSongTips: function () {
        e.show();
      },
    };
  })(),
  vipBaseInfoModule = (() => {
    var n = {};
    return {
      initRenderImg: function (e) {
        n = getVipIconModule.showNewIcon(e, clientFunctionModule, userInfo);
      },
      getRenderImg: function (e) {
        var t = n.vip;
        return (
          20 == e ? (t = n.suvip) : (31 != e && 33 != e) || (t = n.music),
          t
        );
      },
      isMember: function () {
        return n.member;
      },
    };
  })(),
  pageInit = (() => {
    var a = {
      1: "8.1%",
      2: "19.4%",
      3: "29.2%",
      4: "38.4%",
      5: "46.2%",
      6: "52.3%",
      7: "59.6%",
      8: "64.8%",
      9: "70.1%",
      10: "75.4%",
      11: "79.6%",
      12: "82.2%",
      13: "86.5%",
      14: "88.8%",
      15: "92.2%",
      16: "94.6%",
      17: "96.3%",
      18: "98.6%",
      19: "99.9%",
      20: "100%",
    };
    function i(e) {
      var e = e.split(" "),
        t = e[0].split("-");
      e[1].split(":");
      return new Date(t[0], t[1] - 1, t[2], 0, 0, 0).getTime();
    }
    function n(e, t) {
      var n = 0;
      try {
        n = (i(t) - i(e)) / 864e5;
      } catch (e) {
        n = 0;
      }
      return n;
    }
    function o() {
      KgMobileCall.getUserInfo(function (r) {
        if (((userInfo.overseas = r.overseas), 1 == r.status)) {
          if (
            ((userInfo.isLogin = !0),
            (r.is_only_vip = 0),
            r.dataVip && r.dataVip.data)
          ) {
            if (
              ((vipMusicInfo = r.dataVip.data),
              vipBaseInfoModule.initRenderImg(vipMusicInfo),
              (userInfo.autopayStatus = vipMusicInfo.autostatus || 0),
              (userInfo.p_speed = 1) <= vipMusicInfo.m_type &&
                vipMusicInfo.m_type <= 4 &&
                ((r.isMusic = 1),
                (userInfo.p_speed = 1.5),
                1 == (1 & parseInt(vipMusicInfo.y_type, 10)) &&
                  (userInfo.p_speed = 2),
                vipMusicInfo.servertime.split(" ")[0] ==
                vipMusicInfo.m_end_time.split(" ")[0]
                  ? (r.MhaveDays = 0)
                  : ((r.MhaveDays = n(
                      vipMusicInfo.servertime,
                      vipMusicInfo.m_end_time,
                    )),
                    (r.MhaveDays = r.MhaveDays < 1 ? 1 : r.MhaveDays)),
                (r.iconUrl = vipBaseInfoModule.getRenderImg(31)),
                (r.vipIconType = 31),
                (r.member = vipBaseInfoModule.isMember())),
              (0 < vipMusicInfo.m_type &&
                vipMusicInfo.m_type <= 4 &&
                0 < vipMusicInfo.vip_type &&
                vipMusicInfo.vip_type < 5) ||
                6 == vipMusicInfo.vip_type)
            )
              ((userInfo.isVIP = r.isVIP = 1),
                (userInfo.p_speed =
                  userInfo.p_speed < 2 ? 1.5 : userInfo.p_speed),
                6 == vipMusicInfo.vip_type &&
                  2 == (2 & parseInt(vipMusicInfo.y_type, 10)) &&
                  ((userInfo.isYear = r.isYear = 1), (userInfo.p_speed = 2)),
                vipMusicInfo.servertime.split(" ")[0] ==
                vipMusicInfo.vip_end_time.split(" ")[0]
                  ? (r.haveDays = 0)
                  : ((r.haveDays = n(
                      vipMusicInfo.servertime,
                      vipMusicInfo.vip_end_time,
                    )),
                    (r.haveDays = r.haveDays < 1 ? 1 : r.haveDays)),
                (r.iconUrl = vipBaseInfoModule.getRenderImg(11)),
                (r.vipIconType = 11),
                (r.member = vipBaseInfoModule.isMember()));
            else {
              ((userInfo.isVIP = r.isVIP = 0),
                (userInfo.isYear = r.isYear = 0));
              try {
                var e = getVipIconModule.getSvipLevelIconUrl(vipMusicInfo);
                ((r.iconUrl = e.url),
                  (r.vipIconType = e.vipType),
                  (r.member = e.member),
                  (r.outdate = !0));
              } catch (e) {
                console.log(e);
              }
            }
            (16 == (16 & vipMusicInfo.user_type) &&
              1 === clientFunctionModule.isSupportSuperVip &&
              ((userInfo.p_speed = 2),
              16 == (16 & vipMusicInfo.user_y_type) && (userInfo.p_speed = 2.5),
              (r.iconUrl = vipBaseInfoModule.getRenderImg(20)),
              (r.vipIconType = 20),
              (r.member = vipBaseInfoModule.isMember())),
              0 == r.package &&
                1 == r.isVIP &&
                0 < r.dataVip.data.vip_type &&
                r.dataVip.data.vip_type < 5 &&
                (r.is_only_vip = 1),
              0 == r.package && 1 == userInfo.isVIP
                ? (statisticInfo.funnelStatistic.rechar = 1)
                : 1 == r.package && 1 == userInfo.isVIP
                  ? (statisticInfo.funnelStatistic.rechar = 11)
                  : 1 == r.package &&
                    0 == userInfo.isVIP &&
                    (1 == r.dataVip.m_type || 2 == r.dataVip.m_type
                      ? (statisticInfo.funnelStatistic.rechar = 31)
                      : (3 != r.dataVip.m_type && 4 != r.dataVip.m_type) ||
                        (statisticInfo.funnelStatistic.rechar = 33)));
          }
          ((statisticInfo.funnelStatistic.user_id = userInfo.kugouID =
            r.kugouID),
            (userInfo.clienttoken = r.token),
            (userInfo.level = r.gradeData.p_grade),
            r.appid
              ? (statisticInfo.funnelStatistic.plat_id = userInfo.clientappid =
                  r.appid)
              : KgMobileCall.isIOS
                ? (statisticInfo.funnelStatistic.plat_id =
                    userInfo.clientappid =
                      1e3)
                : (statisticInfo.funnelStatistic.plat_id =
                    userInfo.clientappid =
                      1005),
            welfareModule.init());
        }
        var i, t;
        ((r.open_smusic = openSmusic),
          r.gradeData && 0 <= r.gradeData.p_grade
            ? ((userInfo.gradeData = r.gradeData),
              (userInfo.p_speed = Number(r.gradeData.p_speed)),
              (r.gradeData.imgUrl = imgUrlObj["grade" + r.gradeData.p_grade]),
              (e =
                (r.gradeData.p_current_point - r.gradeData.p_grade_point) /
                (r.gradeData.p_next_grade_point - r.gradeData.p_grade_point)),
              (r.progress = e <= 0.02 ? 0.02 : 0.93 < e ? 0.93 : e),
              (statisticInfo.funnelStatistic.ext_content =
                "lv" + r.gradeData.p_grade))
            : ((r.gradeData = {}),
              (r.gradeData.imgUrl = imgUrlObj.grade10000),
              (statisticInfo.funnelStatistic.ext_content = "lv0"),
              (r.gradeData.p_speed = userInfo.p_speed)),
          clientFunctionModule.supportNameplate &&
            1 === clientFunctionModule.supportNameplate &&
            clientFunctionModule.supportVipFeature &&
            2 == (2 & clientFunctionModule.supportVipFeature) &&
            vipMusicInfo.nameplate_type &&
            (3 == vipMusicInfo.nameplate_type ||
              4 == vipMusicInfo.nameplate_type) &&
            ((r.nameplate_type = vipMusicInfo.nameplate_type),
            (r.lovers_pic =
              vipMusicInfo.lovers_pic ||
              "https://webvoobssdl.kugou.com/c585c91654d2c0d1e1c0bf9c693a4760.png")),
          (i = function () {
            function e() {
              return (
                pageAbTestEls &&
                pageAbTestEls.TMEAB0levelpage0UI &&
                pageAbTestEls.TMEAB0levelpage0UI.mapParams &&
                "1" === pageAbTestEls.TMEAB0levelpage0UI.mapParams.type
              );
            }
            function t() {
              var e;
              pageAbTestEls &&
                pageAbTestEls.TMEAB0Listeninglevel0banner &&
                pageAbTestEls.TMEAB0Listeninglevel0banner.mapParams &&
                "1" ===
                  pageAbTestEls.TMEAB0Listeninglevel0banner.mapParams.type &&
                ($(".page-index-activity-wrap")
                  .show()
                  .on("click", function () {
                    KgMobileCall.openURL({
                      browser: 4,
                      title: "抽听歌点数 升级听歌等级",
                      url: "https://activity.kugou.com/voo/v-d6e89efa/index.html?source_id=567302",
                    });
                    var e = $.extend({}, statisticInfo.funnelStatistic || {});
                    ((e.b = "点击"),
                      (e.source_id = 202131),
                      (e.button_id = 4064),
                      mobileLog(30030, e));
                  }),
                ((e = $.extend({}, statisticInfo.funnelStatistic || {})).b =
                  "曝光"),
                (e.source_id = 202131),
                mobileLog(30030, e));
            }
            var n, i, o, s;
            ((n = r),
              window.localStorage &&
                (window.localStorage.myLV &&
                  Number(window.localStorage.myLV) < n.gradeData.p_grade &&
                  (e()
                    ? ($(".js-lv1").text("LV." + n.gradeData.p_grade),
                      $(".js-lv").text(n.gradeData.p_grade || 0))
                    : ($(".js-lv1").text("LV." + n.gradeData.p_grade),
                      $(".js-lv").text("Lv." + n.gradeData.p_grade)),
                  $(".LVUP-dec i").text(a[n.gradeData.p_grade]),
                  $("#LVUP button").on("click", function () {
                    (1 == showUpdate && $("#dialogUpdate").show(),
                      $("#LVUP").hide());
                  }),
                  $("#dialogUpdate").hide(),
                  $("#LVUP").css("display", "block")),
                (window.localStorage.myLV = n.gradeData.p_grade)),
              (i = location.pathname.replace(/\/[^\/]+\.html$/, "")),
              e()
                ? (require(location.origin +
                    i +
                    "/css/index-new-5751005120.css", function (e) {
                    "loaded" === e &&
                      (t(),
                      $("body").removeClass("hide"),
                      KgMobileCall.isShowDialog({ type: 1, isShow: 0 }),
                      KgMobileCall.loadFinish({}));
                  }),
                  (dom.pageIndexTop.innerHTML = doT.compile(
                    dom.pageIndexTopTmpl.innerHTML,
                  )(n)),
                  1 == clientFunctionModule.isSupportSuperVip &&
                    16 == (16 & vipMusicInfo.user_type) &&
                    $("#pageIndexTop").addClass("isSuperVip"),
                  1 < userInfo.p_speed && $("#pageIndexTop").addClass("isVip"))
                : (require(location.origin +
                    i +
                    "/css/index-948c20b763.css", function (e) {
                    "loaded" === e &&
                      (t(),
                      $("body").removeClass("hide"),
                      KgMobileCall.isShowDialog({ type: 1, isShow: 0 }),
                      KgMobileCall.loadFinish({}));
                  }),
                  (dom.pageIndexTop.innerHTML = doT.compile(
                    dom.pageIndexTopTmplOld.innerHTML,
                  )(n))),
              (o = "2%"),
              n.gradeData &&
              0 < n.gradeData.p_grade_point &&
              n.gradeData.p_grade == n.gradeData.p_next_grade
                ? (o = "93%")
                : n.gradeData &&
                    n.gradeData.p_current_point == n.gradeData.p_grade_point
                  ? (o = "2%")
                  : n.gradeData && n.progress && (o = 100 * n.progress + "%"),
              $("#rule").on("click", function () {
                KgMobileCall.openURL({
                  browser: 2,
                  url: "https://activity.kugou.com/voo/v-e5d26ccd/index.html",
                });
              }),
              $("#know").on("click", function () {
                $("#tipsDialog").hide();
              }),
              $("#iconJump").on("click", function () {
                var e, t, n, i;
                userInfo.isLogin
                  ? ((i = ""),
                    (e = $("#iconJump").attr("data-type")),
                    (t = "1" === $("#iconJump").attr("data-member")),
                    (n = "1" === $("#iconJump").attr("data-outdate")),
                    isHarmonyOS
                      ? ("20" === e
                          ? harmonyOSToJumpVip(5)
                          : harmonyOSToJumpVip(),
                        setLogStat({
                          source_id: t ? 217715 : 202925,
                          page_id: t ? 3151 : 3183,
                          b: "点击",
                          button_id: t ? 410417 : 410418,
                        }))
                      : (n ||
                          (i =
                            "https://h5.kugou.com/center/v-a19486fe/index.html?source_id=" +
                            statisticInfo.funnelStatistic.source_id +
                            (statisticInfo.funnelStatistic.hash
                              ? "&hash=" + statisticInfo.funnelStatistic.hash
                              : "") +
                            ("20" === e ? "&tab=superVip" : "")),
                        n &&
                          ("11" === e || "31" === e
                            ? (i =
                                URL.svipUrl +
                                "?source_id=" +
                                statisticInfo.funnelStatistic.source_id +
                                (statisticInfo.funnelStatistic.hash
                                  ? "&hash=" +
                                    statisticInfo.funnelStatistic.hash
                                  : ""))
                            : "20" === e &&
                              (i =
                                "https://m3ws.kugou.com/vip/v2/supervip.html?source_id=" +
                                statisticInfo.funnelStatistic.source_id +
                                (statisticInfo.funnelStatistic.hash
                                  ? "&hash=" +
                                    statisticInfo.funnelStatistic.hash
                                  : ""))),
                        setLogStat({
                          source_id: t ? 217715 : 202925,
                          page_id: t ? 3151 : 3183,
                          b: "点击",
                          button_id: t ? 410417 : 410418,
                        }),
                        KgMobileCall.openURL({ browser: 4, url: i })))
                  : c();
              }),
              (s = $("#dialogHelp")),
              (i = $("#dialogHelp button")),
              $("#jsLevelPointHelp")
                .off()
                .on("click", function () {
                  s.show();
                }),
              $("#jsSpeedHelp").on("click", function () {
                s.show();
              }),
              i.off().on("click", function () {
                (s.hide(),
                  KgMobileCall.openURL({
                    browser: 2,
                    url: "https://activity.kugou.com/voo/v-e5d26ccd/index.html",
                  }));
              }),
              setTimeout(function () {
                $("#pageIndexProgress").css("width", o);
              }, 50),
              isOverseas(),
              (n = "upgradeBtnLottieAnimation"),
              0 < $("#" + n).length && upgradeBtnLottieAnimation(n, 0),
              (i = "upgradeBtnLottieAnimation2"),
              0 < $("#" + i).length && upgradeBtnLottieAnimation(i, 1));
          }),
          (t = {
            appid: Number(userInfo.appid),
            clientver: userInfo.version,
            clienttime: parseInt(new Date().getTime() / 1e3, 10),
            mid: userInfo.mid || new Date().getTime(),
            uuid: userInfo.uuid || "-",
            dfid: userInfo.dfid || "-",
            kugouid: userInfo.kugouID,
            userid: Number(userInfo.kugouID),
            clienttoken: userInfo.clienttoken || userInfo.token,
            token: userInfo.clienttoken || userInfo.token,
            platform: KgMobileCall.isIOS ? "ios" : "android",
          }),
          KgMobileCall.getNewSign({ get: t, post: "" }, function (e) {
            1 === e.status &&
              (delete e.status,
              $.extend(t, e),
              $.ajax({
                type: "GET",
                url: "https://gateway.kugou.com/els.abt/v1/tmeab",
                timeout: 5e3,
                data: t,
                dataType: "json",
                headers: {
                  "TmeAb-Olexp":
                    "2,13,319,TMEAB0levelpage0UI;TMEAB0Listeninglevel0banner",
                  "content-type": "application/json",
                },
                success: function (e, t, n) {
                  e && 1 === e.status
                    ? (e = e.data.TmeabConfigs) &&
                      ((pageAbTestEls = JSON.parse(e)), i && i(), (i = null))
                    : (i && i(), (i = null));
                },
                error: function (e) {
                  i && i();
                },
              }));
          }),
          mobileLog(30030, statisticInfo.funnelStatistic));
      });
    }
    function c() {
      KgMobileCall.callSoftUserLogin({ topicName: "我的等级", loginType: "" });
    }
    return (
      KgMobileCall.getMobileInfo(function (e) {
        ((userInfo.uuid = statisticInfo.funnelStatistic.uuid = e.uuid || e.mid),
          (userInfo.mid = statisticInfo.funnelStatistic.mid =
            e.mid_v2 || e.mid),
          (userInfo.dfid = e.dfid || ""),
          (statisticInfo.funnelStatistic.nettype =
            "1" == e.net
              ? "wifi"
              : "2" == e.net
                ? "2G"
                : "3" == e.net
                  ? "3G"
                  : "4" == e.net
                    ? ""
                    : "wifi" == e.net
                      ? "wifi"
                      : "gprs" == e.net
                        ? "2G"
                        : "3g" == e.net
                          ? "3G"
                          : ""));
        var t = !1;
        ((window.updateVipLevelCB = function () {
          t || ((t = !0), o());
        }),
          KgMobileCall.getVersion(function (e) {
            ((clientFunctionModule = e.function_module || {}),
              (userInfo.version = statisticInfo.funnelStatistic.tv =
                e.version ? Number(e.version) : 0),
              11150 <= e.version
                ? (KgMobileCall.updateVipLevel({ cb: "updateVipLevelCB" }),
                  setTimeout(function () {
                    t || ((t = !0), o());
                  }, 3e3))
                : o());
          }));
      }),
      {
        jumpLink: function (e) {
          var t = (e = $(e)).attr("data-type") || 1,
            e = e.attr("log-type") || 1,
            n = 2021;
          if (
            (1 == e
              ? (n = 202101)
              : 2 == e
                ? (n = 202102)
                : 3 == e
                  ? (n = 202103)
                  : 4 == e
                    ? (n = 202104)
                    : 5 == e
                      ? (n = 202105)
                      : 6 == e && (n = 202106),
            setLogStat({ source_id: n, b: "点击", button_id: 4001 }),
            userInfo.isLogin)
          ) {
            if (isHarmonyOS) return (harmonyOSToJumpVip(t), !1);
            e = "";
            if (4 == t)
              if (goToPrepayModule.isCanGoSSRPage())
                goToPrepayModule.jumpVipPopup(234, 11);
              else {
                if (goToPrepayModule.isCanGoH5Page())
                  return (goToPrepayModule.jumpNewPrepay(234), !1);
                e =
                  "https://m3ws.kugou.com/vip/v2/vip.html?source_id=" +
                  statisticInfo.funnelStatistic.source_id +
                  (statisticInfo.funnelStatistic.hash
                    ? "&hash=" + statisticInfo.funnelStatistic.hash
                    : "");
              }
            else if (5 == t)
              if (goToPrepayModule.isCanGoSSRPage())
                goToPrepayModule.jumpVipPopup(235, 20);
              else {
                if (goToPrepayModule.isCanGoH5Page())
                  return (goToPrepayModule.jumpNewPrepay(235), !1);
                e =
                  "https://m3ws.kugou.com/vip/v2/supervip.html?source_id=" +
                  statisticInfo.funnelStatistic.source_id +
                  (statisticInfo.funnelStatistic.hash
                    ? "&hash=" + statisticInfo.funnelStatistic.hash
                    : "");
              }
            else if (6 == t)
              if (goToPrepayModule.isCanGoSSRPage())
                goToPrepayModule.jumpVipPopup(236, 20);
              else {
                if (goToPrepayModule.isCanGoH5Page())
                  return (goToPrepayModule.jumpNewPrepay(236), !1);
                e =
                  "https://m3ws.kugou.com/vip/v2/supervip.html?now_s=-12&source_id=" +
                  statisticInfo.funnelStatistic.source_id +
                  (statisticInfo.funnelStatistic.hash
                    ? "&hash=" + statisticInfo.funnelStatistic.hash
                    : "");
              }
            else
              e =
                3 == t
                  ? URL.updateVip +
                    "?source_id=" +
                    statisticInfo.funnelStatistic.source_id +
                    (statisticInfo.funnelStatistic.hash
                      ? "&hash=" + statisticInfo.funnelStatistic.hash
                      : "")
                  : 1 == t
                    ? URL.svipUrl +
                      "?source_id=" +
                      statisticInfo.funnelStatistic.source_id +
                      (statisticInfo.funnelStatistic.hash
                        ? "&hash=" + statisticInfo.funnelStatistic.hash
                        : "")
                    : URL.svipUrl +
                      "?now_v=-12&source_id=" +
                      statisticInfo.funnelStatistic.source_id +
                      (statisticInfo.funnelStatistic.hash
                        ? "&hash=" + statisticInfo.funnelStatistic.hash
                        : "");
            KgMobileCall.openURL({ browser: 4, url: e });
          } else c();
        },
        login: c,
        countTime: n,
      }
    );
  })(),
  KgWebMobileCall = {
    userStatus: function () {
      location.reload();
    },
  };
function loadScript(e, t) {
  var n = document.createElement("script");
  (t && (n.onload = t),
    document.getElementsByTagName("head")[0].appendChild(n),
    (n.src = e));
}
function vipPaySuccessCallback(e) {
  1 === e.status && window.location.reload();
}
function upgradeBtnLottieAnimation(n, i) {
  function e() {
    var e = document.getElementById(n),
      t = window.lottie.loadAnimation({
        container: e,
        renderer: "svg",
        loop: !1,
        autoplay: !1,
        path: [
          "https://webvoobssdl.kugou.com/35d85eb7a12c4ca6dc2bdb00ff37a283.json",
          "https://webvoobssdl.kugou.com/fa18db7abdb314481088f0ae3db485dd.json",
        ][i],
        name: n,
        rendererSettings: {
          className: "animation-lottie-" + n,
          scaleMode: "noScale",
          clearCanvas: !1,
          progressiveLoad: !0,
          hideOnTransparent: !0,
        },
      });
    (t.addEventListener("DOMLoaded", function () {
      t.play();
    }),
      t.addEventListener("complete", function () {}),
      t.addEventListener("error", function (e) {
        console.log(e);
      }));
  }
  window.lottie
    ? e()
    : loadScript(
        "https://staticssl.kugou.com/common/js/min/lottie_light.min.js",
        function () {
          e();
        },
      );
}
window.onload = function () {
  (loadScript(
    "https://staticssl.kugou.com/collect/common/dist/js/collect-2400.js",
  ),
    statisticsModule.statistic(statisticInfo.phpClickStatistic.pageid));
};
