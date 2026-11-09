(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [922],
  {
    62172: function (e, t, r) {
      var i,
        n,
        s = r(67521);
      ((i = function () {
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
                r,
                i,
                n = Object(this),
                s = n.length >>> 0;
              if ("function" != typeof e)
                throw TypeError(e + " is not a function");
              for (1 < arguments.length && (t = arguments[1]), r = 0; r < s;)
                (r in n && ((i = n[r]), e.call(t, i, r, n)), r++);
            }),
          function (t) {
            if (/^https/i.test(t) || !t || !/^http/i.test(t)) return t;
            var r = "";
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
              ].forEach(function (i) {
                var n = i[1],
                  s = i[0];
                return (
                  n.forEach(function (i) {
                    if (!r)
                      return (
                        "object" === e(i) && i.test(t)
                          ? (r = t.replace(i, s))
                          : ~t.indexOf(i) && (r = t.replace(i, s)),
                        !r
                      );
                  }),
                  !r
                );
              }),
              r || console.warn("转化https链接失败:" + t),
              r || t
            );
          }
        );
      }),
        "object" === s(t)
          ? (e.exports = i())
          : void 0 !== (n = i.call(t, r, t, e)) && (e.exports = n));
    },
    56685: function () {},
    82561: function (e, t, r) {
      "use strict";
      function i(e) {
        return (i =
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
      r.d(t, {
        Z: function () {
          return i;
        },
      });
    },
    53566: function (e, t, r) {
      "use strict";
      r.d(t, {
        ZP: function () {
          return N;
        },
      });
      var i,
        n,
        s,
        a,
        o,
        l,
        d,
        c,
        u,
        p = r(81208),
        h = r(13298),
        f = r(77813),
        v = r(37667);
      function m(e, t) {
        var r =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return g(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? g(e, t)
                      : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            r && (e = r);
            var i = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: n,
            };
          }
          throw TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var s,
          a = !0,
          o = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return ((a = e.done), e);
          },
          e: function (e) {
            ((o = !0), (s = e));
          },
          f: function () {
            try {
              a || null == r.return || r.return();
            } finally {
              if (o) throw s;
            }
          },
        };
      }
      function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
        return i;
      }
      var w = Object.defineProperty,
        y = Object.getOwnPropertySymbols,
        b = Object.prototype.hasOwnProperty,
        S = Object.prototype.propertyIsEnumerable,
        T = function (e, t, r) {
          return t in e
            ? w(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
        },
        E = function (e, t) {
          for (var r in t || (t = {})) b.call(t, r) && T(e, r, t[r]);
          if (y) {
            var i,
              n = m(y(t));
            try {
              for (n.s(); !(i = n.n()).done;) {
                var r = i.value;
                S.call(t, r) && T(e, r, t[r]);
              }
            } catch (e) {
              n.e(e);
            } finally {
              n.f();
            }
          }
          return e;
        },
        x = function (e, t) {
          var r = {};
          for (var i in e) b.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
          if (null != e && y) {
            var n,
              s = m(y(e));
            try {
              for (s.s(); !(n = s.n()).done;) {
                var i = n.value;
                0 > t.indexOf(i) && S.call(e, i) && (r[i] = e[i]);
              }
            } catch (e) {
              s.e(e);
            } finally {
              s.f();
            }
          }
          return r;
        };
      (!(function (e) {
        var t = (0, f.Z)(
            function e(r, i, n, a) {
              if (
                ((0, h.Z)(this, e),
                (this.version = r),
                (this.errorCorrectionLevel = i),
                (this.modules = []),
                (this.isFunction = []),
                r < t.MIN_VERSION || r > t.MAX_VERSION)
              )
                throw RangeError("Version value out of range");
              if (a < -1 || a > 7) throw RangeError("Mask value out of range");
              this.size = 4 * r + 17;
              for (var o = [], l = 0; l < this.size; l++) o.push(!1);
              for (var d = 0; d < this.size; d++)
                (this.modules.push(o.slice()), this.isFunction.push(o.slice()));
              this.drawFunctionPatterns();
              var c = this.addEccAndInterleave(n);
              if ((this.drawCodewords(c), -1 == a))
                for (var u = 1e9, p = 0; p < 8; p++) {
                  (this.applyMask(p), this.drawFormatBits(p));
                  var f = this.getPenaltyScore();
                  (f < u && ((a = p), (u = f)), this.applyMask(p));
                }
              (s(0 <= a && a <= 7),
                (this.mask = a),
                this.applyMask(a),
                this.drawFormatBits(a),
                (this.isFunction = []));
            },
            [
              {
                key: "getModule",
                value: function (e, t) {
                  return (
                    0 <= e &&
                    e < this.size &&
                    0 <= t &&
                    t < this.size &&
                    this.modules[t][e]
                  );
                },
              },
              {
                key: "getModules",
                value: function () {
                  return this.modules;
                },
              },
              {
                key: "drawFunctionPatterns",
                value: function () {
                  for (var e = 0; e < this.size; e++)
                    (this.setFunctionModule(6, e, e % 2 == 0),
                      this.setFunctionModule(e, 6, e % 2 == 0));
                  (this.drawFinderPattern(3, 3),
                    this.drawFinderPattern(this.size - 4, 3),
                    this.drawFinderPattern(3, this.size - 4));
                  for (
                    var t = this.getAlignmentPatternPositions(),
                      r = t.length,
                      i = 0;
                    i < r;
                    i++
                  )
                    for (var n = 0; n < r; n++)
                      (0 == i && 0 == n) ||
                        (0 == i && n == r - 1) ||
                        (i == r - 1 && 0 == n) ||
                        this.drawAlignmentPattern(t[i], t[n]);
                  (this.drawFormatBits(0), this.drawVersion());
                },
              },
              {
                key: "drawFormatBits",
                value: function (e) {
                  for (
                    var t = (this.errorCorrectionLevel.formatBits << 3) | e,
                      r = t,
                      i = 0;
                    i < 10;
                    i++
                  )
                    r = (r << 1) ^ ((r >>> 9) * 1335);
                  var a = ((t << 10) | r) ^ 21522;
                  s(a >>> 15 == 0);
                  for (var o = 0; o <= 5; o++)
                    this.setFunctionModule(8, o, n(a, o));
                  (this.setFunctionModule(8, 7, n(a, 6)),
                    this.setFunctionModule(8, 8, n(a, 7)),
                    this.setFunctionModule(7, 8, n(a, 8)));
                  for (var l = 9; l < 15; l++)
                    this.setFunctionModule(14 - l, 8, n(a, l));
                  for (var d = 0; d < 8; d++)
                    this.setFunctionModule(this.size - 1 - d, 8, n(a, d));
                  for (var c = 8; c < 15; c++)
                    this.setFunctionModule(8, this.size - 15 + c, n(a, c));
                  this.setFunctionModule(8, this.size - 8, !0);
                },
              },
              {
                key: "drawVersion",
                value: function () {
                  if (!(this.version < 7)) {
                    for (var e = this.version, t = 0; t < 12; t++)
                      e = (e << 1) ^ ((e >>> 11) * 7973);
                    var r = (this.version << 12) | e;
                    s(r >>> 18 == 0);
                    for (var i = 0; i < 18; i++) {
                      var a = n(r, i),
                        o = this.size - 11 + (i % 3),
                        l = Math.floor(i / 3);
                      (this.setFunctionModule(o, l, a),
                        this.setFunctionModule(l, o, a));
                    }
                  }
                },
              },
              {
                key: "drawFinderPattern",
                value: function (e, t) {
                  for (var r = -4; r <= 4; r++)
                    for (var i = -4; i <= 4; i++) {
                      var n = Math.max(Math.abs(i), Math.abs(r)),
                        s = e + i,
                        a = t + r;
                      0 <= s &&
                        s < this.size &&
                        0 <= a &&
                        a < this.size &&
                        this.setFunctionModule(s, a, 2 != n && 4 != n);
                    }
                },
              },
              {
                key: "drawAlignmentPattern",
                value: function (e, t) {
                  for (var r = -2; r <= 2; r++)
                    for (var i = -2; i <= 2; i++)
                      this.setFunctionModule(
                        e + i,
                        t + r,
                        1 != Math.max(Math.abs(i), Math.abs(r)),
                      );
                },
              },
              {
                key: "setFunctionModule",
                value: function (e, t, r) {
                  ((this.modules[t][e] = r), (this.isFunction[t][e] = !0));
                },
              },
              {
                key: "addEccAndInterleave",
                value: function (e) {
                  var r = this.version,
                    i = this.errorCorrectionLevel;
                  if (e.length != t.getNumDataCodewords(r, i))
                    throw RangeError("Invalid argument");
                  for (
                    var n = t.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][r],
                      a = t.ECC_CODEWORDS_PER_BLOCK[i.ordinal][r],
                      o = Math.floor(t.getNumRawDataModules(r) / 8),
                      l = n - (o % n),
                      d = Math.floor(o / n),
                      c = [],
                      u = t.reedSolomonComputeDivisor(a),
                      p = 0,
                      h = 0;
                    p < n;
                    p++
                  ) {
                    var f = e.slice(h, h + d - a + (p < l ? 0 : 1));
                    h += f.length;
                    var v = t.reedSolomonComputeRemainder(f, u);
                    (p < l && f.push(0), c.push(f.concat(v)));
                  }
                  for (
                    var m = [],
                      g = function (e) {
                        c.forEach(function (t, r) {
                          (e != d - a || r >= l) && m.push(t[e]);
                        });
                      },
                      w = 0;
                    w < c[0].length;
                    w++
                  )
                    g(w);
                  return (s(m.length == o), m);
                },
              },
              {
                key: "drawCodewords",
                value: function (e) {
                  if (
                    e.length !=
                    Math.floor(t.getNumRawDataModules(this.version) / 8)
                  )
                    throw RangeError("Invalid argument");
                  for (var r = 0, i = this.size - 1; i >= 1; i -= 2) {
                    6 == i && (i = 5);
                    for (var a = 0; a < this.size; a++)
                      for (var o = 0; o < 2; o++) {
                        var l = i - o,
                          d = ((i + 1) & 2) == 0 ? this.size - 1 - a : a;
                        !this.isFunction[d][l] &&
                          r < 8 * e.length &&
                          ((this.modules[d][l] = n(e[r >>> 3], 7 - (7 & r))),
                          r++);
                      }
                  }
                  s(r == 8 * e.length);
                },
              },
              {
                key: "applyMask",
                value: function (e) {
                  if (e < 0 || e > 7)
                    throw RangeError("Mask value out of range");
                  for (var t = 0; t < this.size; t++)
                    for (var r = 0; r < this.size; r++) {
                      var i = void 0;
                      switch (e) {
                        case 0:
                          i = (r + t) % 2 == 0;
                          break;
                        case 1:
                          i = t % 2 == 0;
                          break;
                        case 2:
                          i = r % 3 == 0;
                          break;
                        case 3:
                          i = (r + t) % 3 == 0;
                          break;
                        case 4:
                          i = (Math.floor(r / 3) + Math.floor(t / 2)) % 2 == 0;
                          break;
                        case 5:
                          i = ((r * t) % 2) + ((r * t) % 3) == 0;
                          break;
                        case 6:
                          i = (((r * t) % 2) + ((r * t) % 3)) % 2 == 0;
                          break;
                        case 7:
                          i = (((r + t) % 2) + ((r * t) % 3)) % 2 == 0;
                          break;
                        default:
                          throw Error("Unreachable");
                      }
                      !this.isFunction[t][r] &&
                        i &&
                        (this.modules[t][r] = !this.modules[t][r]);
                    }
                },
              },
              {
                key: "getPenaltyScore",
                value: function () {
                  for (var e = 0, r = 0; r < this.size; r++) {
                    for (
                      var i = !1, n = 0, a = [0, 0, 0, 0, 0, 0, 0], o = 0;
                      o < this.size;
                      o++
                    )
                      this.modules[r][o] == i
                        ? 5 == ++n
                          ? (e += t.PENALTY_N1)
                          : n > 5 && e++
                        : (this.finderPenaltyAddHistory(n, a),
                          i ||
                            (e +=
                              this.finderPenaltyCountPatterns(a) *
                              t.PENALTY_N3),
                          (i = this.modules[r][o]),
                          (n = 1));
                    e +=
                      this.finderPenaltyTerminateAndCount(i, n, a) *
                      t.PENALTY_N3;
                  }
                  for (var l = 0; l < this.size; l++) {
                    for (
                      var d = !1, c = 0, u = [0, 0, 0, 0, 0, 0, 0], p = 0;
                      p < this.size;
                      p++
                    )
                      this.modules[p][l] == d
                        ? 5 == ++c
                          ? (e += t.PENALTY_N1)
                          : c > 5 && e++
                        : (this.finderPenaltyAddHistory(c, u),
                          d ||
                            (e +=
                              this.finderPenaltyCountPatterns(u) *
                              t.PENALTY_N3),
                          (d = this.modules[p][l]),
                          (c = 1));
                    e +=
                      this.finderPenaltyTerminateAndCount(d, c, u) *
                      t.PENALTY_N3;
                  }
                  for (var h = 0; h < this.size - 1; h++)
                    for (var f = 0; f < this.size - 1; f++) {
                      var v = this.modules[h][f];
                      v == this.modules[h][f + 1] &&
                        v == this.modules[h + 1][f] &&
                        v == this.modules[h + 1][f + 1] &&
                        (e += t.PENALTY_N2);
                    }
                  var g,
                    w = 0,
                    y = m(this.modules);
                  try {
                    for (y.s(); !(g = y.n()).done;)
                      w = g.value.reduce(function (e, t) {
                        return e + (t ? 1 : 0);
                      }, w);
                  } catch (e) {
                    y.e(e);
                  } finally {
                    y.f();
                  }
                  var b = this.size * this.size,
                    S = Math.ceil(Math.abs(20 * w - 10 * b) / b) - 1;
                  return (
                    s(0 <= S && S <= 9),
                    s(0 <= (e += S * t.PENALTY_N4) && e <= 2568888),
                    e
                  );
                },
              },
              {
                key: "getAlignmentPatternPositions",
                value: function () {
                  if (1 == this.version) return [];
                  for (
                    var e = Math.floor(this.version / 7) + 2,
                      t =
                        32 == this.version
                          ? 26
                          : 2 * Math.ceil((4 * this.version + 4) / (2 * e - 2)),
                      r = [6],
                      i = this.size - 7;
                    r.length < e;
                    i -= t
                  )
                    r.splice(1, 0, i);
                  return r;
                },
              },
              {
                key: "finderPenaltyCountPatterns",
                value: function (e) {
                  var t = e[1];
                  s(t <= 3 * this.size);
                  var r =
                    t > 0 &&
                    e[2] == t &&
                    e[3] == 3 * t &&
                    e[4] == t &&
                    e[5] == t;
                  return (
                    (r && e[0] >= 4 * t && e[6] >= t ? 1 : 0) +
                    (r && e[6] >= 4 * t && e[0] >= t ? 1 : 0)
                  );
                },
              },
              {
                key: "finderPenaltyTerminateAndCount",
                value: function (e, t, r) {
                  return (
                    e && (this.finderPenaltyAddHistory(t, r), (t = 0)),
                    (t += this.size),
                    this.finderPenaltyAddHistory(t, r),
                    this.finderPenaltyCountPatterns(r)
                  );
                },
              },
              {
                key: "finderPenaltyAddHistory",
                value: function (e, t) {
                  (0 == t[0] && (e += this.size), t.pop(), t.unshift(e));
                },
              },
            ],
            [
              {
                key: "encodeText",
                value: function (r, i) {
                  var n = e.QrSegment.makeSegments(r);
                  return t.encodeSegments(n, i);
                },
              },
              {
                key: "encodeBinary",
                value: function (r, i) {
                  var n = e.QrSegment.makeBytes(r);
                  return t.encodeSegments([n], i);
                },
              },
              {
                key: "encodeSegments",
                value: function (e, r) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 1,
                    a =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : 40,
                    l =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : -1,
                    d =
                      !(arguments.length > 5) ||
                      void 0 === arguments[5] ||
                      arguments[5];
                  if (
                    !(t.MIN_VERSION <= n && n <= a && a <= t.MAX_VERSION) ||
                    l < -1 ||
                    l > 7
                  )
                    throw RangeError("Invalid value");
                  for (v = n; ; v++) {
                    var c = 8 * t.getNumDataCodewords(v, r),
                      u = o.getTotalBits(e, v);
                    if (u <= c) {
                      g = u;
                      break;
                    }
                    if (v >= a) throw RangeError("Data too long");
                  }
                  for (
                    var p = 0, h = [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH];
                    p < h.length;
                    p++
                  ) {
                    var f = h[p];
                    d && g <= 8 * t.getNumDataCodewords(v, f) && (r = f);
                  }
                  var v,
                    g,
                    w,
                    y = [],
                    b = m(e);
                  try {
                    for (b.s(); !(w = b.n()).done;) {
                      var S = w.value;
                      (i(S.mode.modeBits, 4, y),
                        i(S.numChars, S.mode.numCharCountBits(v), y));
                      var T,
                        E = m(S.getData());
                      try {
                        for (E.s(); !(T = E.n()).done;) {
                          var x = T.value;
                          y.push(x);
                        }
                      } catch (e) {
                        E.e(e);
                      } finally {
                        E.f();
                      }
                    }
                  } catch (e) {
                    b.e(e);
                  } finally {
                    b.f();
                  }
                  s(y.length == g);
                  var M = 8 * t.getNumDataCodewords(v, r);
                  (s(y.length <= M),
                    i(0, Math.min(4, M - y.length), y),
                    i(0, (8 - (y.length % 8)) % 8, y),
                    s(y.length % 8 == 0));
                  for (var k = 236; y.length < M; k ^= 253) i(k, 8, y);
                  for (var C = []; 8 * C.length < y.length;) C.push(0);
                  return (
                    y.forEach(function (e, t) {
                      return (C[t >>> 3] |= e << (7 - (7 & t)));
                    }),
                    new t(v, r, C, l)
                  );
                },
              },
              {
                key: "getNumRawDataModules",
                value: function (e) {
                  if (e < t.MIN_VERSION || e > t.MAX_VERSION)
                    throw RangeError("Version number out of range");
                  var r = (16 * e + 128) * e + 64;
                  if (e >= 2) {
                    var i = Math.floor(e / 7) + 2;
                    ((r -= (25 * i - 10) * i - 55), e >= 7 && (r -= 36));
                  }
                  return (s(208 <= r && r <= 29648), r);
                },
              },
              {
                key: "getNumDataCodewords",
                value: function (e, r) {
                  return (
                    Math.floor(t.getNumRawDataModules(e) / 8) -
                    t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e] *
                      t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]
                  );
                },
              },
              {
                key: "reedSolomonComputeDivisor",
                value: function (e) {
                  if (e < 1 || e > 255) throw RangeError("Degree out of range");
                  for (var r = [], i = 0; i < e - 1; i++) r.push(0);
                  r.push(1);
                  for (var n = 1, s = 0; s < e; s++) {
                    for (var a = 0; a < r.length; a++)
                      ((r[a] = t.reedSolomonMultiply(r[a], n)),
                        a + 1 < r.length && (r[a] ^= r[a + 1]));
                    n = t.reedSolomonMultiply(n, 2);
                  }
                  return r;
                },
              },
              {
                key: "reedSolomonComputeRemainder",
                value: function (e, r) {
                  var i,
                    n = r.map(function (e) {
                      return 0;
                    }),
                    s = m(e);
                  try {
                    for (s.s(); !(i = s.n()).done;)
                      !(function () {
                        var e = i.value ^ n.shift();
                        (n.push(0),
                          r.forEach(function (r, i) {
                            return (n[i] ^= t.reedSolomonMultiply(r, e));
                          }));
                      })();
                  } catch (e) {
                    s.e(e);
                  } finally {
                    s.f();
                  }
                  return n;
                },
              },
              {
                key: "reedSolomonMultiply",
                value: function (e, t) {
                  if (e >>> 8 != 0 || t >>> 8 != 0)
                    throw RangeError("Byte out of range");
                  for (var r = 0, i = 7; i >= 0; i--)
                    r = (r << 1) ^ ((r >>> 7) * 285) ^ (((t >>> i) & 1) * e);
                  return (s(r >>> 8 == 0), r);
                },
              },
            ],
          ),
          r = t;
        function i(e, t, r) {
          if (t < 0 || t > 31 || e >>> t != 0)
            throw RangeError("Value out of range");
          for (var i = t - 1; i >= 0; i--) r.push((e >>> i) & 1);
        }
        function n(e, t) {
          return ((e >>> t) & 1) != 0;
        }
        function s(e) {
          if (!e) throw Error("Assertion error");
        }
        ((r.MIN_VERSION = 1),
          (r.MAX_VERSION = 40),
          (r.PENALTY_N1 = 3),
          (r.PENALTY_N2 = 3),
          (r.PENALTY_N3 = 40),
          (r.PENALTY_N4 = 10),
          (r.ECC_CODEWORDS_PER_BLOCK = [
            [
              -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24,
              28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30,
              30, 30, 30, 30, 30, 30, 30, 30,
            ],
            [
              -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24,
              28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
              28, 28, 28, 28, 28, 28, 28, 28, 28,
            ],
            [
              -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30,
              24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30,
              30, 30, 30, 30, 30, 30, 30, 30, 30,
            ],
            [
              -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24,
              30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30,
              30, 30, 30, 30, 30, 30, 30, 30, 30,
            ],
          ]),
          (r.NUM_ERROR_CORRECTION_BLOCKS = [
            [
              -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8,
              9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22,
              24, 25,
            ],
            [
              -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14,
              16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38,
              40, 43, 45, 47, 49,
            ],
            [
              -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18,
              21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51,
              53, 56, 59, 62, 65, 68,
            ],
            [
              -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21,
              25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60,
              63, 66, 70, 74, 77, 81,
            ],
          ]),
          (e.QrCode = r));
        var a = (0, f.Z)(
            function e(t, r, i) {
              if (
                ((0, h.Z)(this, e),
                (this.mode = t),
                (this.numChars = r),
                (this.bitData = i),
                r < 0)
              )
                throw RangeError("Invalid argument");
              this.bitData = i.slice();
            },
            [
              {
                key: "getData",
                value: function () {
                  return this.bitData.slice();
                },
              },
            ],
            [
              {
                key: "makeBytes",
                value: function (e) {
                  var t,
                    r = [],
                    n = m(e);
                  try {
                    for (n.s(); !(t = n.n()).done;) {
                      var s = t.value;
                      i(s, 8, r);
                    }
                  } catch (e) {
                    n.e(e);
                  } finally {
                    n.f();
                  }
                  return new a(a.Mode.BYTE, e.length, r);
                },
              },
              {
                key: "makeNumeric",
                value: function (e) {
                  if (!a.isNumeric(e))
                    throw RangeError("String contains non-numeric characters");
                  for (var t = [], r = 0; r < e.length;) {
                    var n = Math.min(e.length - r, 3);
                    (i(parseInt(e.substr(r, n), 10), 3 * n + 1, t), (r += n));
                  }
                  return new a(a.Mode.NUMERIC, e.length, t);
                },
              },
              {
                key: "makeAlphanumeric",
                value: function (e) {
                  if (!a.isAlphanumeric(e))
                    throw RangeError(
                      "String contains unencodable characters in alphanumeric mode",
                    );
                  var t,
                    r = [];
                  for (t = 0; t + 2 <= e.length; t += 2) {
                    var n = 45 * a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t));
                    i(
                      (n += a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t + 1))),
                      11,
                      r,
                    );
                  }
                  return (
                    t < e.length &&
                      i(a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)), 6, r),
                    new a(a.Mode.ALPHANUMERIC, e.length, r)
                  );
                },
              },
              {
                key: "makeSegments",
                value: function (e) {
                  return "" == e
                    ? []
                    : a.isNumeric(e)
                      ? [a.makeNumeric(e)]
                      : a.isAlphanumeric(e)
                        ? [a.makeAlphanumeric(e)]
                        : [a.makeBytes(a.toUtf8ByteArray(e))];
                },
              },
              {
                key: "makeEci",
                value: function (e) {
                  var t = [];
                  if (e < 0)
                    throw RangeError("ECI assignment value out of range");
                  if (e < 128) i(e, 8, t);
                  else if (e < 16384) (i(2, 2, t), i(e, 14, t));
                  else if (e < 1e6) (i(6, 3, t), i(e, 21, t));
                  else throw RangeError("ECI assignment value out of range");
                  return new a(a.Mode.ECI, 0, t);
                },
              },
              {
                key: "isNumeric",
                value: function (e) {
                  return a.NUMERIC_REGEX.test(e);
                },
              },
              {
                key: "isAlphanumeric",
                value: function (e) {
                  return a.ALPHANUMERIC_REGEX.test(e);
                },
              },
              {
                key: "getTotalBits",
                value: function (e, t) {
                  var r,
                    i = 0,
                    n = m(e);
                  try {
                    for (n.s(); !(r = n.n()).done;) {
                      var s = r.value,
                        a = s.mode.numCharCountBits(t);
                      if (s.numChars >= 1 << a) return 1 / 0;
                      i += 4 + a + s.bitData.length;
                    }
                  } catch (e) {
                    n.e(e);
                  } finally {
                    n.f();
                  }
                  return i;
                },
              },
              {
                key: "toUtf8ByteArray",
                value: function (e) {
                  e = encodeURI(e);
                  for (var t = [], r = 0; r < e.length; r++)
                    "%" != e.charAt(r)
                      ? t.push(e.charCodeAt(r))
                      : (t.push(parseInt(e.substr(r + 1, 2), 16)), (r += 2));
                  return t;
                },
              },
            ],
          ),
          o = a;
        ((o.NUMERIC_REGEX = /^[0-9]*$/),
          (o.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/),
          (o.ALPHANUMERIC_CHARSET =
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:"),
          (e.QrSegment = o));
      })(u || (u = {})),
        (n = (i = u || (u = {})).QrCode || (i.QrCode = {})),
        ((a = s =
          (0, f.Z)(function e(t, r) {
            ((0, h.Z)(this, e), (this.ordinal = t), (this.formatBits = r));
          })).LOW = new s(0, 1)),
        (a.MEDIUM = new s(1, 0)),
        (a.QUARTILE = new s(2, 3)),
        (a.HIGH = new s(3, 2)),
        (n.Ecc = a),
        (l = (o = u || (u = {})).QrSegment || (o.QrSegment = {})),
        ((c = d =
          (0, f.Z)(
            function e(t, r) {
              ((0, h.Z)(this, e),
                (this.modeBits = t),
                (this.numBitsCharCount = r));
            },
            [
              {
                key: "numCharCountBits",
                value: function (e) {
                  return this.numBitsCharCount[Math.floor((e + 7) / 17)];
                },
              },
            ],
          )).NUMERIC = new d(1, [10, 12, 14])),
        (c.ALPHANUMERIC = new d(2, [9, 11, 13])),
        (c.BYTE = new d(4, [8, 16, 16])),
        (c.KANJI = new d(8, [8, 10, 12])),
        (c.ECI = new d(7, [0, 0, 0])),
        (l.Mode = c));
      var M = u,
        k = {
          L: M.QrCode.Ecc.LOW,
          M: M.QrCode.Ecc.MEDIUM,
          Q: M.QrCode.Ecc.QUARTILE,
          H: M.QrCode.Ecc.HIGH,
        },
        C = "#FFFFFF",
        P = "#000000";
      function I(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = [];
        return (
          e.forEach(function (e, i) {
            var n = null;
            e.forEach(function (s, a) {
              if (!s && null !== n) {
                (r.push(
                  "M"
                    .concat(n + t, " ")
                    .concat(i + t, "h")
                    .concat(a - n, "v1H")
                    .concat(n + t, "z"),
                ),
                  (n = null));
                return;
              }
              if (a === e.length - 1) {
                if (!s) return;
                null === n
                  ? r.push(
                      "M"
                        .concat(a + t, ",")
                        .concat(i + t, " h1v1H")
                        .concat(a + t, "z"),
                    )
                  : r.push(
                      "M"
                        .concat(n + t, ",")
                        .concat(i + t, " h")
                        .concat(a + 1 - n, "v1H")
                        .concat(n + t, "z"),
                    );
                return;
              }
              s && null === n && (n = a);
            });
          }),
          r.join("")
        );
      }
      function A(e, t) {
        return e.slice().map(function (e, r) {
          return r < t.y || r >= t.y + t.h
            ? e
            : e.map(function (e, r) {
                return (r < t.x || r >= t.x + t.w) && e;
              });
        });
      }
      function O(e, t, r, i) {
        if (null == i) return null;
        var n = e.length + 2 * (r ? 4 : 0),
          s = Math.floor(0.1 * t),
          a = n / t,
          o = (i.width || s) * a,
          l = (i.height || s) * a,
          d = null == i.x ? e.length / 2 - o / 2 : i.x * a,
          c = null == i.y ? e.length / 2 - l / 2 : i.y * a,
          u = null;
        if (i.excavate) {
          var p = Math.floor(d),
            h = Math.floor(c);
          u = { x: p, y: h, w: Math.ceil(o + d - p), h: Math.ceil(l + c - h) };
        }
        return { x: d, y: c, h: l, w: o, excavation: u };
      }
      var L = (function () {
        try {
          new Path2D().addPath(new Path2D());
        } catch (e) {
          return !1;
        }
        return !0;
      })();
      function z(e) {
        var t = e.value,
          r = e.size,
          i = void 0 === r ? 128 : r,
          n = e.level,
          s = void 0 === n ? "L" : n,
          a = e.bgColor,
          o = void 0 === a ? C : a,
          l = e.fgColor,
          d = void 0 === l ? P : l,
          c = e.includeMargin,
          u = void 0 !== c && c,
          h = e.style,
          f = e.imageSettings,
          m = x(e, [
            "value",
            "size",
            "level",
            "bgColor",
            "fgColor",
            "includeMargin",
            "style",
            "imageSettings",
          ]),
          g = null == f ? void 0 : f.src,
          w = v.useRef(null),
          y = v.useRef(null),
          b = v.useState(!1),
          S = (0, p.Z)(b, 2),
          T = (S[0], S[1]);
        (v.useEffect(function () {
          if (null != w.current) {
            var e = w.current,
              r = e.getContext("2d");
            if (r) {
              var n = M.QrCode.encodeText(t, k[s]).getModules(),
                a = u ? 4 : 0,
                l = n.length + 2 * a,
                c = O(n, i, u, f),
                p = y.current,
                h =
                  null != c &&
                  null !== p &&
                  p.complete &&
                  0 !== p.naturalHeight &&
                  0 !== p.naturalWidth;
              h && null != c.excavation && (n = A(n, c.excavation));
              var v = window.devicePixelRatio || 1;
              e.height = e.width = i * v;
              var m = (i / l) * v;
              (r.scale(m, m),
                (r.fillStyle = o),
                r.fillRect(0, 0, l, l),
                (r.fillStyle = d),
                L
                  ? r.fill(new Path2D(I(n, a)))
                  : n.forEach(function (e, t) {
                      e.forEach(function (e, i) {
                        e && r.fillRect(i + a, t + a, 1, 1);
                      });
                    }),
                h && r.drawImage(p, c.x + a, c.y + a, c.w, c.h));
            }
          }
        }),
          v.useEffect(
            function () {
              T(!1);
            },
            [g],
          ));
        var z = E({ height: i, width: i }, h),
          _ = null;
        return (
          null != g &&
            (_ = v.createElement("img", {
              src: g,
              key: g,
              style: { display: "none" },
              onLoad: function () {
                T(!0);
              },
              ref: y,
            })),
          v.createElement(
            v.Fragment,
            null,
            v.createElement(
              "canvas",
              E({ style: z, height: i, width: i, ref: w }, m),
            ),
            _,
          )
        );
      }
      function _(e) {
        var t = e.value,
          r = e.size,
          i = void 0 === r ? 128 : r,
          n = e.level,
          s = e.bgColor,
          a = e.fgColor,
          o = e.includeMargin,
          l = void 0 !== o && o,
          d = e.imageSettings,
          c = x(e, [
            "value",
            "size",
            "level",
            "bgColor",
            "fgColor",
            "includeMargin",
            "imageSettings",
          ]),
          u = M.QrCode.encodeText(t, k[void 0 === n ? "L" : n]).getModules(),
          p = l ? 4 : 0,
          h = u.length + 2 * p,
          f = O(u, i, l, d),
          m = null;
        null != d &&
          null != f &&
          (null != f.excavation && (u = A(u, f.excavation)),
          (m = v.createElement("image", {
            xlinkHref: d.src,
            height: f.h,
            width: f.w,
            x: f.x + p,
            y: f.y + p,
            preserveAspectRatio: "none",
          })));
        var g = I(u, p);
        return v.createElement(
          "svg",
          E(
            { height: i, width: i, viewBox: "0 0 ".concat(h, " ").concat(h) },
            c,
          ),
          v.createElement("path", {
            fill: void 0 === s ? C : s,
            d: "M0,0 h".concat(h, "v").concat(h, "H0z"),
            shapeRendering: "crispEdges",
          }),
          v.createElement("path", {
            fill: void 0 === a ? P : a,
            d: g,
            shapeRendering: "crispEdges",
          }),
          m,
        );
      }
      var N = function (e) {
        var t = e.renderAs,
          r = x(e, ["renderAs"]);
        return "svg" === t
          ? v.createElement(_, E({}, r))
          : v.createElement(z, E({}, r));
      };
    },
    43425: function (e, t, r) {
      "use strict";
      (r.d(t, {
        lI: function () {
          return s;
        },
      }),
        r(27511));
      var i = r(635);
      function n(e, t, r) {
        var n = "swiper-slide-shadow"
            .concat(r ? "-".concat(r) : "")
            .concat(e ? " swiper-slide-shadow-".concat(e) : ""),
          s = (0, i.g)(t),
          a = s.querySelector(".".concat(n.split(" ").join(".")));
        return (a || ((a = (0, i.c)("div", n.split(" "))), s.append(a)), a);
      }
      function s(e) {
        var t,
          r,
          s,
          a,
          o,
          l,
          d,
          c,
          u,
          p,
          h,
          f = e.swiper,
          v = e.extendParams,
          m = e.on;
        (v({
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
          },
        }),
          (s = (t = {
            effect: "coverflow",
            swiper: f,
            on: m,
            setTranslate: function () {
              for (
                var e = f.width,
                  t = f.height,
                  r = f.slides,
                  s = f.slidesSizesGrid,
                  a = f.params.coverflowEffect,
                  o = f.isHorizontal(),
                  l = f.translate,
                  d = o ? -l + e / 2 : -l + t / 2,
                  c = o ? a.rotate : -a.rotate,
                  u = a.depth,
                  p = (0, i.p)(f),
                  h = 0,
                  v = r.length;
                h < v;
                h += 1
              ) {
                var m = r[h],
                  g = s[h],
                  w = (d - m.swiperSlideOffset - g / 2) / g,
                  y =
                    "function" == typeof a.modifier
                      ? a.modifier(w)
                      : w * a.modifier,
                  b = o ? c * y : 0,
                  S = o ? 0 : c * y,
                  T = -u * Math.abs(y),
                  E = a.stretch;
                "string" == typeof E &&
                  -1 !== E.indexOf("%") &&
                  (E = (parseFloat(a.stretch) / 100) * g);
                var x = o ? 0 : E * y,
                  M = o ? E * y : 0,
                  k = 1 - (1 - a.scale) * Math.abs(y);
                (0.001 > Math.abs(M) && (M = 0),
                  0.001 > Math.abs(x) && (x = 0),
                  0.001 > Math.abs(T) && (T = 0),
                  0.001 > Math.abs(b) && (b = 0),
                  0.001 > Math.abs(S) && (S = 0),
                  0.001 > Math.abs(k) && (k = 0));
                var C = "translate3d("
                  .concat(M, "px,")
                  .concat(x, "px,")
                  .concat(T, "px)  rotateX(")
                  .concat(p(S), "deg) rotateY(")
                  .concat(p(b), "deg) scale(")
                  .concat(k, ")");
                if (
                  (((function (e, t) {
                    var r = (0, i.g)(t);
                    return (
                      r !== t &&
                        ((r.style.backfaceVisibility = "hidden"),
                        (r.style["-webkit-backface-visibility"] = "hidden")),
                      r
                    );
                  })(0, m).style.transform = C),
                  (m.style.zIndex = -Math.abs(Math.round(y)) + 1),
                  a.slideShadows)
                ) {
                  var P = o
                      ? m.querySelector(".swiper-slide-shadow-left")
                      : m.querySelector(".swiper-slide-shadow-top"),
                    I = o
                      ? m.querySelector(".swiper-slide-shadow-right")
                      : m.querySelector(".swiper-slide-shadow-bottom");
                  (P || (P = n("coverflow", m, o ? "left" : "top")),
                    I || (I = n("coverflow", m, o ? "right" : "bottom")),
                    P && (P.style.opacity = y > 0 ? y : 0),
                    I && (I.style.opacity = -y > 0 ? -y : 0));
                }
              }
            },
            setTransition: function (e) {
              f.slides
                .map(function (e) {
                  return (0, i.g)(e);
                })
                .forEach(function (t) {
                  ((t.style.transitionDuration = "".concat(e, "ms")),
                    t
                      .querySelectorAll(
                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
                      )
                      .forEach(function (t) {
                        t.style.transitionDuration = "".concat(e, "ms");
                      }));
                });
            },
            perspective: function () {
              return !0;
            },
            overwriteParams: function () {
              return { watchSlidesProgress: !0 };
            },
          }).effect),
          (a = t.swiper),
          (o = t.on),
          (l = t.setTranslate),
          (d = t.setTransition),
          (c = t.overwriteParams),
          (u = t.perspective),
          (p = t.recreateShadows),
          (h = t.getEffectParams),
          o("beforeInit", function () {
            if (a.params.effect === s) {
              (a.classNames.push(
                "".concat(a.params.containerModifierClass).concat(s),
              ),
                u &&
                  u() &&
                  a.classNames.push(
                    "".concat(a.params.containerModifierClass, "3d"),
                  ));
              var e = c ? c() : {};
              (Object.assign(a.params, e), Object.assign(a.originalParams, e));
            }
          }),
          o("setTranslate _virtualUpdated", function () {
            a.params.effect === s && l();
          }),
          o("setTransition", function (e, t) {
            a.params.effect === s && d(t);
          }),
          o("transitionEnd", function () {
            a.params.effect === s &&
              p &&
              h &&
              h().slideShadows &&
              (a.slides.forEach(function (e) {
                e.querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
                ).forEach(function (e) {
                  return e.remove();
                });
              }),
              p());
          }),
          o("virtualUpdate", function () {
            a.params.effect === s &&
              (a.slides.length || (r = !0),
              requestAnimationFrame(function () {
                r && a.slides && a.slides.length && (l(), (r = !1));
              }));
          }));
      }
    },
    27511: function (e, t, r) {
      "use strict";
      r.d(t, {
        a: function () {
          return d;
        },
        g: function () {
          return o;
        },
      });
      var i = r(82561);
      function n(e) {
        return (
          null !== e &&
          "object" === (0, i.Z)(e) &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function s(e, t) {
        (void 0 === e && (e = {}), void 0 === t && (t = {}));
        var r = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter(function (e) {
            return 0 > r.indexOf(e);
          })
          .forEach(function (r) {
            void 0 === e[r]
              ? (e[r] = t[r])
              : n(t[r]) &&
                n(e[r]) &&
                Object.keys(t[r]).length > 0 &&
                s(e[r], t[r]);
          });
      }
      var a = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: "" },
        querySelector: function () {
          return null;
        },
        querySelectorAll: function () {
          return [];
        },
        getElementById: function () {
          return null;
        },
        createEvent: function () {
          return { initEvent: function () {} };
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return [];
            },
          };
        },
        createElementNS: function () {
          return {};
        },
        importNode: function () {
          return null;
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function o() {
        var e = "undefined" != typeof document ? document : {};
        return (s(e, a), e);
      }
      var l = {
        document: a,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: {
          replaceState: function () {},
          pushState: function () {},
          go: function () {},
          back: function () {},
        },
        CustomEvent: function () {
          return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return "";
            },
          };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
          return {};
        },
        requestAnimationFrame: function (e) {
          return "undefined" == typeof setTimeout
            ? (e(), null)
            : setTimeout(e, 0);
        },
        cancelAnimationFrame: function (e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function d() {
        var e = "undefined" != typeof window ? window : {};
        return (s(e, l), e);
      }
    },
    635: function (e, t, r) {
      "use strict";
      r.d(t, {
        a: function () {
          return p;
        },
        b: function () {
          return E;
        },
        c: function () {
          return w;
        },
        e: function () {
          return v;
        },
        f: function () {
          return d;
        },
        g: function () {
          return f;
        },
        h: function () {
          return x;
        },
        i: function () {
          return T;
        },
        k: function () {
          return c;
        },
        n: function () {
          return l;
        },
        p: function () {
          return M;
        },
        q: function () {
          return S;
        },
        r: function () {
          return b;
        },
        t: function () {
          return y;
        },
        u: function () {
          return h;
        },
        v: function () {
          return g;
        },
        w: function () {
          return m;
        },
        x: function () {
          return function e() {
            for (
              var t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                r = ["__proto__", "constructor", "prototype"],
                i = 1;
              i < arguments.length;
              i += 1
            ) {
              var n = i < 0 || arguments.length <= i ? void 0 : arguments[i];
              if (
                null != n &&
                ("undefined" != typeof window && void 0 !== window.HTMLElement
                  ? !(n instanceof HTMLElement)
                  : !n || (1 !== n.nodeType && 11 !== n.nodeType))
              )
                for (
                  var s = Object.keys(Object(n)).filter(function (e) {
                      return 0 > r.indexOf(e);
                    }),
                    a = 0,
                    o = s.length;
                  a < o;
                  a += 1
                ) {
                  var l = s[a],
                    d = Object.getOwnPropertyDescriptor(n, l);
                  void 0 !== d &&
                    d.enumerable &&
                    (u(t[l]) && u(n[l])
                      ? n[l].__swiper__
                        ? (t[l] = n[l])
                        : e(t[l], n[l])
                      : !u(t[l]) && u(n[l])
                        ? ((t[l] = {}),
                          n[l].__swiper__ ? (t[l] = n[l]) : e(t[l], n[l]))
                        : (t[l] = n[l]));
                }
            }
            return t;
          };
        },
        y: function () {
          return o;
        },
      });
      var i = r(75723),
        n = r(76792),
        s = r(82561),
        a = r(27511);
      function o(e) {
        var t = e;
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null;
          } catch (e) {}
          try {
            delete t[e];
          } catch (e) {}
        });
      }
      function l(e, t) {
        return (void 0 === t && (t = 0), setTimeout(e, t));
      }
      function d() {
        return Date.now();
      }
      function c(e, t) {
        void 0 === t && (t = "x");
        var r,
          i,
          n,
          s,
          o,
          l = (0, a.a)(),
          d =
            ((i = (0, a.a)()).getComputedStyle &&
              (r = i.getComputedStyle(e, null)),
            !r && e.currentStyle && (r = e.currentStyle),
            r || (r = e.style),
            r);
        return (
          l.WebKitCSSMatrix
            ? ((s = d.transform || d.webkitTransform).split(",").length > 6 &&
                (s = s
                  .split(", ")
                  .map(function (e) {
                    return e.replace(",", ".");
                  })
                  .join(", ")),
              (o = new l.WebKitCSSMatrix("none" === s ? "" : s)))
            : (n = (o =
                d.MozTransform ||
                d.OTransform ||
                d.MsTransform ||
                d.msTransform ||
                d.transform ||
                d
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === t &&
            (s = l.WebKitCSSMatrix
              ? o.m41
              : 16 === n.length
                ? parseFloat(n[12])
                : parseFloat(n[4])),
          "y" === t &&
            (s = l.WebKitCSSMatrix
              ? o.m42
              : 16 === n.length
                ? parseFloat(n[13])
                : parseFloat(n[5])),
          s || 0
        );
      }
      function u(e) {
        return (
          "object" === (0, s.Z)(e) &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function p(e, t, r) {
        e.style.setProperty(t, r);
      }
      function h(e) {
        var t,
          r = e.swiper,
          i = e.targetPosition,
          s = e.side,
          o = (0, a.a)(),
          l = -r.translate,
          d = null,
          c = r.params.speed;
        ((r.wrapperEl.style.scrollSnapType = "none"),
          o.cancelAnimationFrame(r.cssModeFrameID));
        var u = i > l ? "next" : "prev",
          p = function (e, t) {
            return ("next" === u && e >= t) || ("prev" === u && e <= t);
          },
          h = function () {
            ((t = new Date().getTime()), null === d && (d = t));
            var e =
              l +
              (0.5 -
                Math.cos(Math.max(Math.min((t - d) / c, 1), 0) * Math.PI) / 2) *
                (i - l);
            if (
              (p(e, i) && (e = i),
              r.wrapperEl.scrollTo((0, n.Z)({}, s, e)),
              p(e, i))
            ) {
              ((r.wrapperEl.style.overflow = "hidden"),
                (r.wrapperEl.style.scrollSnapType = ""),
                setTimeout(function () {
                  ((r.wrapperEl.style.overflow = ""),
                    r.wrapperEl.scrollTo((0, n.Z)({}, s, e)));
                }),
                o.cancelAnimationFrame(r.cssModeFrameID));
              return;
            }
            r.cssModeFrameID = o.requestAnimationFrame(h);
          };
        h();
      }
      function f(e) {
        return (
          e.querySelector(".swiper-slide-transform") ||
          (e.shadowRoot &&
            e.shadowRoot.querySelector(".swiper-slide-transform")) ||
          e
        );
      }
      function v(e, t) {
        void 0 === t && (t = "");
        var r = (0, a.a)(),
          n = (0, i.Z)(e.children);
        return (r.HTMLSlotElement &&
          e instanceof HTMLSlotElement &&
          n.push.apply(n, (0, i.Z)(e.assignedElements())),
        t)
          ? n.filter(function (e) {
              return e.matches(t);
            })
          : n;
      }
      function m(e, t) {
        var r = (0, a.a)(),
          n = t.contains(e);
        return (
          !n &&
            r.HTMLSlotElement &&
            t instanceof HTMLSlotElement &&
            !(n = (0, i.Z)(t.assignedElements()).includes(e)) &&
            (n = (function (e, t) {
              for (var r = [t]; r.length > 0;) {
                var n = r.shift();
                if (e === n) return !0;
                r.push.apply(
                  r,
                  (0, i.Z)(n.children).concat(
                    (0, i.Z)(n.shadowRoot ? n.shadowRoot.children : []),
                    (0, i.Z)(n.assignedElements ? n.assignedElements() : []),
                  ),
                );
              }
            })(e, t)),
          n
        );
      }
      function g(e) {
        try {
          console.warn(e);
          return;
        } catch (e) {}
      }
      function w(e, t) {
        void 0 === t && (t = []);
        var r,
          n,
          s = document.createElement(e);
        return (
          (n = s.classList).add.apply(
            n,
            (0, i.Z)(
              Array.isArray(t)
                ? t
                : (void 0 === (r = t) && (r = ""),
                  r
                    .trim()
                    .split(" ")
                    .filter(function (e) {
                      return !!e.trim();
                    })),
            ),
          ),
          s
        );
      }
      function y(e, t) {
        for (var r = []; e.previousElementSibling;) {
          var i = e.previousElementSibling;
          (t ? i.matches(t) && r.push(i) : r.push(i), (e = i));
        }
        return r;
      }
      function b(e, t) {
        for (var r = []; e.nextElementSibling;) {
          var i = e.nextElementSibling;
          (t ? i.matches(t) && r.push(i) : r.push(i), (e = i));
        }
        return r;
      }
      function S(e, t) {
        return (0, a.a)().getComputedStyle(e, null).getPropertyValue(t);
      }
      function T(e) {
        var t,
          r = e;
        if (r) {
          for (t = 0; null !== (r = r.previousSibling);)
            1 === r.nodeType && (t += 1);
          return t;
        }
      }
      function E(e, t) {
        for (var r = [], i = e.parentElement; i;)
          (t ? i.matches(t) && r.push(i) : r.push(i), (i = i.parentElement));
        return r;
      }
      function x(e, t, r) {
        var i = (0, a.a)();
        return r
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                i
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-right" : "margin-top",
                  ),
              ) +
              parseFloat(
                i
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-left" : "margin-bottom",
                  ),
              )
          : e.offsetWidth;
      }
      function M(e) {
        return function (t) {
          return Math.abs(t) > 0 &&
            e.browser &&
            e.browser.need3dFix &&
            Math.abs(t) % 90 == 0
            ? t + 0.001
            : t;
        };
      }
    },
    1093: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return F;
        },
      });
      var i,
        n,
        s,
        a = r(13298),
        o = r(77813),
        l = r(82561),
        d = r(76792),
        c = r(75723),
        u = r(81208),
        p = r(27511),
        h = r(635);
      function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i));
        }
        return r;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                (0, d.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : f(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function m() {
        if (!i) {
          var e, t;
          ((e = (0, p.a)()),
            (i = {
              smoothScroll:
                (t = (0, p.g)()).documentElement &&
                t.documentElement.style &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            }));
        }
        return i;
      }
      function g(e) {
        if ((void 0 === e && (e = {}), !n)) {
          var t, r, i, s, a, o, l, d, c, u, h, f, v, g;
          ((r = (void 0 === (t = e) ? {} : t).userAgent),
            (i = m()),
            (a = (s = (0, p.a)()).navigator.platform),
            (o = r || s.navigator.userAgent),
            (l = { ios: !1, android: !1 }),
            (d = s.screen.width),
            (c = s.screen.height),
            (u = o.match(/(Android);?[\s\/]+([\d.]+)?/)),
            (h = o.match(/(iPad).*OS\s([\d_]+)/)),
            (f = o.match(/(iPod)(.*OS\s([\d_]+))?/)),
            (v = !h && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
            (g = "MacIntel" === a),
            !h &&
              g &&
              i.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf("".concat(d, "x").concat(c)) >= 0 &&
              ((h = o.match(/(Version)\/([\d.]+)/)) || (h = [0, 1, "13_0_0"]),
              (g = !1)),
            u && "Win32" !== a && ((l.os = "android"), (l.android = !0)),
            (h || v || f) && ((l.os = "ios"), (l.ios = !0)),
            (n = l));
        }
        return n;
      }
      function w() {
        return (
          s ||
            (s = (function () {
              var e = (0, p.a)(),
                t = g(),
                r = !1;
              function i() {
                var t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  0 > t.indexOf("chrome") &&
                  0 > t.indexOf("android")
                );
              }
              if (i()) {
                var n = String(e.navigator.userAgent);
                if (n.includes("Version/")) {
                  var s = n
                      .split("Version/")[1]
                      .split(" ")[0]
                      .split(".")
                      .map(function (e) {
                        return Number(e);
                      }),
                    a = (0, u.Z)(s, 2),
                    o = a[0],
                    l = a[1];
                  r = o < 16 || (16 === o && l < 2);
                }
              }
              var d = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent,
                ),
                c = i(),
                h = c || (d && t.ios);
              return {
                isSafari: r || c,
                needPerspectiveFix: r,
                need3dFix: h,
                isWebView: d,
              };
            })()),
          s
        );
      }
      var y = function (e, t, r) {
          t && !e.classList.contains(r)
            ? e.classList.add(r)
            : !t && e.classList.contains(r) && e.classList.remove(r);
        },
        b = function (e, t, r) {
          t && !e.classList.contains(r)
            ? e.classList.add(r)
            : !t && e.classList.contains(r) && e.classList.remove(r);
        },
        S = function (e, t) {
          if (e && !e.destroyed && e.params) {
            var r = t.closest(
              e.isElement ? "swiper-slide" : ".".concat(e.params.slideClass),
            );
            if (r) {
              var i = r.querySelector(".".concat(e.params.lazyPreloaderClass));
              (!i &&
                e.isElement &&
                (r.shadowRoot
                  ? (i = r.shadowRoot.querySelector(
                      ".".concat(e.params.lazyPreloaderClass),
                    ))
                  : requestAnimationFrame(function () {
                      r.shadowRoot &&
                        (i = r.shadowRoot.querySelector(
                          ".".concat(e.params.lazyPreloaderClass),
                        )) &&
                        i.remove();
                    })),
                i && i.remove());
            }
          }
        },
        T = function (e, t) {
          if (e.slides[t]) {
            var r = e.slides[t].querySelector('[loading="lazy"]');
            r && r.removeAttribute("loading");
          }
        },
        E = function (e) {
          if (e && !e.destroyed && e.params) {
            var t = e.params.lazyPreloadPrevNext,
              r = e.slides.length;
            if (r && t && !(t < 0)) {
              t = Math.min(t, r);
              var i =
                  "auto" === e.params.slidesPerView
                    ? e.slidesPerViewDynamic()
                    : Math.ceil(e.params.slidesPerView),
                n = e.activeIndex;
              if (e.params.grid && e.params.grid.rows > 1) {
                var s = [n - t];
                (s.push.apply(
                  s,
                  (0, c.Z)(
                    Array.from({ length: t }).map(function (e, t) {
                      return n + i + t;
                    }),
                  ),
                ),
                  e.slides.forEach(function (t, r) {
                    s.includes(t.column) && T(e, r);
                  }));
                return;
              }
              var a = n + i - 1;
              if (e.params.rewind || e.params.loop)
                for (var o = n - t; o <= a + t; o += 1) {
                  var l = ((o % r) + r) % r;
                  (l < n || l > a) && T(e, l);
                }
              else
                for (
                  var d = Math.max(n - t, 0);
                  d <= Math.min(a + t, r - 1);
                  d += 1
                )
                  d !== n && (d > a || d < n) && T(e, d);
            }
          }
        };
      function x(e) {
        var t = e.swiper,
          r = e.runCallbacks,
          i = e.direction,
          n = e.step,
          s = t.activeIndex,
          a = t.previousIndex,
          o = i;
        (o || (o = s > a ? "next" : s < a ? "prev" : "reset"),
          t.emit("transition".concat(n)),
          r && "reset" === o
            ? t.emit("slideResetTransition".concat(n))
            : r &&
              s !== a &&
              (t.emit("slideChangeTransition".concat(n)),
              "next" === o
                ? t.emit("slideNextTransition".concat(n))
                : t.emit("slidePrevTransition".concat(n))));
      }
      function M(e, t, r) {
        var i = (0, p.a)(),
          n = e.params,
          s = n.edgeSwipeDetection,
          a = n.edgeSwipeThreshold;
        return (
          !s ||
          (!(r <= a) && !(r >= i.innerWidth - a)) ||
          ("prevent" === s && (t.preventDefault(), !0))
        );
      }
      function k(e) {
        var t = this,
          r = (0, p.g)(),
          i = e;
        i.originalEvent && (i = i.originalEvent);
        var n = t.touchEventsData;
        if ("pointerdown" === i.type) {
          if (null !== n.pointerId && n.pointerId !== i.pointerId) return;
          n.pointerId = i.pointerId;
        } else
          "touchstart" === i.type &&
            1 === i.targetTouches.length &&
            (n.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) {
          M(t, i, i.targetTouches[0].pageX);
          return;
        }
        var s = t.params,
          a = t.touches;
        if (
          t.enabled &&
          (s.simulateTouch || "mouse" !== i.pointerType) &&
          (!t.animating || !s.preventInteractionOnTransition)
        ) {
          !t.animating && s.cssMode && s.loop && t.loopFix();
          var o = i.target;
          if (
            ("wrapper" !== s.touchEventsTarget || (0, h.w)(o, t.wrapperEl)) &&
            (!("which" in i) || 3 !== i.which) &&
            (!("button" in i) || !(i.button > 0)) &&
            (!n.isTouched || !n.isMoved)
          ) {
            var l = !!s.noSwipingClass && "" !== s.noSwipingClass,
              d = i.composedPath ? i.composedPath() : i.path;
            l && i.target && i.target.shadowRoot && d && (o = d[0]);
            var c = s.noSwipingSelector
                ? s.noSwipingSelector
                : ".".concat(s.noSwipingClass),
              u = !!(i.target && i.target.shadowRoot);
            if (
              s.noSwiping &&
              (u
                ? (function (e, t) {
                    return (
                      void 0 === t && (t = this),
                      (function t(r) {
                        if (!r || r === (0, p.g)() || r === (0, p.a)())
                          return null;
                        r.assignedSlot && (r = r.assignedSlot);
                        var i = r.closest(e);
                        return i || r.getRootNode
                          ? i || t(r.getRootNode().host)
                          : null;
                      })(t)
                    );
                  })(c, o)
                : o.closest(c))
            ) {
              t.allowClick = !0;
              return;
            }
            if (s.swipeHandler && !o.closest(s.swipeHandler)) return;
            ((a.currentX = i.pageX), (a.currentY = i.pageY));
            var f = a.currentX,
              v = a.currentY;
            if (!M(t, i, f)) return;
            (Object.assign(n, {
              isTouched: !0,
              isMoved: !1,
              allowTouchCallbacks: !0,
              isScrolling: void 0,
              startMoving: void 0,
            }),
              (a.startX = f),
              (a.startY = v),
              (n.touchStartTime = (0, h.f)()),
              (t.allowClick = !0),
              t.updateSize(),
              (t.swipeDirection = void 0),
              s.threshold > 0 && (n.allowThresholdMove = !1));
            var m = !0;
            (o.matches(n.focusableElements) &&
              ((m = !1), "SELECT" === o.nodeName && (n.isTouched = !1)),
              r.activeElement &&
                r.activeElement.matches(n.focusableElements) &&
                r.activeElement !== o &&
                ("mouse" === i.pointerType ||
                  ("mouse" !== i.pointerType &&
                    !o.matches(n.focusableElements))) &&
                r.activeElement.blur());
            var g = m && t.allowTouchMove && s.touchStartPreventDefault;
            ((s.touchStartForcePreventDefault || g) &&
              !o.isContentEditable &&
              i.preventDefault(),
              s.freeMode &&
                s.freeMode.enabled &&
                t.freeMode &&
                t.animating &&
                !s.cssMode &&
                t.freeMode.onTouchStart(),
              t.emit("touchStart", i));
          }
        }
      }
      function C(e) {
        var t,
          r,
          i,
          n = (0, p.g)(),
          s = this,
          a = s.touchEventsData,
          o = s.params,
          l = s.touches,
          d = s.rtlTranslate;
        if (s.enabled && (o.simulateTouch || "mouse" !== e.pointerType)) {
          var u = e;
          if (
            (u.originalEvent && (u = u.originalEvent),
            "pointermove" !== u.type ||
              (null === a.touchId && u.pointerId === a.pointerId))
          ) {
            if ("touchmove" === u.type) {
              if (
                !(t = (0, c.Z)(u.changedTouches).find(function (e) {
                  return e.identifier === a.touchId;
                })) ||
                t.identifier !== a.touchId
              )
                return;
            } else t = u;
            if (!a.isTouched) {
              a.startMoving && a.isScrolling && s.emit("touchMoveOpposite", u);
              return;
            }
            var f = t.pageX,
              v = t.pageY;
            if (u.preventedByNestedSwiper) {
              ((l.startX = f), (l.startY = v));
              return;
            }
            if (!s.allowTouchMove) {
              (u.target.matches(a.focusableElements) || (s.allowClick = !1),
                a.isTouched &&
                  (Object.assign(l, {
                    startX: f,
                    startY: v,
                    currentX: f,
                    currentY: v,
                  }),
                  (a.touchStartTime = (0, h.f)())));
              return;
            }
            if (o.touchReleaseOnEdges && !o.loop) {
              if (s.isVertical()) {
                if (
                  (v < l.startY && s.translate <= s.maxTranslate()) ||
                  (v > l.startY && s.translate >= s.minTranslate())
                ) {
                  ((a.isTouched = !1), (a.isMoved = !1));
                  return;
                }
              } else if (
                d &&
                ((f > l.startX && -s.translate <= s.maxTranslate()) ||
                  (f < l.startX && -s.translate >= s.minTranslate()))
              )
                return;
              else if (
                !d &&
                ((f < l.startX && s.translate <= s.maxTranslate()) ||
                  (f > l.startX && s.translate >= s.minTranslate()))
              )
                return;
            }
            if (
              (n.activeElement &&
                n.activeElement.matches(a.focusableElements) &&
                n.activeElement !== u.target &&
                "mouse" !== u.pointerType &&
                n.activeElement.blur(),
              n.activeElement &&
                u.target === n.activeElement &&
                u.target.matches(a.focusableElements))
            ) {
              ((a.isMoved = !0), (s.allowClick = !1));
              return;
            }
            (a.allowTouchCallbacks && s.emit("touchMove", u),
              (l.previousX = l.currentX),
              (l.previousY = l.currentY),
              (l.currentX = f),
              (l.currentY = v));
            var m = l.currentX - l.startX,
              g = l.currentY - l.startY;
            if (!(
              s.params.threshold &&
              Math.sqrt(Math.pow(m, 2) + Math.pow(g, 2)) < s.params.threshold
            )) {
              if (
                (void 0 === a.isScrolling &&
                  ((s.isHorizontal() && l.currentY === l.startY) ||
                  (s.isVertical() && l.currentX === l.startX)
                    ? (a.isScrolling = !1)
                    : m * m + g * g >= 25 &&
                      ((r =
                        (180 * Math.atan2(Math.abs(g), Math.abs(m))) / Math.PI),
                      (a.isScrolling = s.isHorizontal()
                        ? r > o.touchAngle
                        : 90 - r > o.touchAngle))),
                a.isScrolling && s.emit("touchMoveOpposite", u),
                void 0 === a.startMoving &&
                  (l.currentX !== l.startX || l.currentY !== l.startY) &&
                  (a.startMoving = !0),
                a.isScrolling ||
                  ("touchmove" === u.type && a.preventTouchMoveFromPointerMove))
              ) {
                a.isTouched = !1;
                return;
              }
              if (a.startMoving) {
                ((s.allowClick = !1),
                  !o.cssMode && u.cancelable && u.preventDefault(),
                  o.touchMoveStopPropagation &&
                    !o.nested &&
                    u.stopPropagation());
                var w = s.isHorizontal() ? m : g,
                  y = s.isHorizontal()
                    ? l.currentX - l.previousX
                    : l.currentY - l.previousY;
                (o.oneWayMovement &&
                  ((w = Math.abs(w) * (d ? 1 : -1)),
                  (y = Math.abs(y) * (d ? 1 : -1))),
                  (l.diff = w),
                  (w *= o.touchRatio),
                  d && ((w = -w), (y = -y)));
                var b = s.touchesDirection;
                ((s.swipeDirection = w > 0 ? "prev" : "next"),
                  (s.touchesDirection = y > 0 ? "prev" : "next"));
                var S = s.params.loop && !o.cssMode,
                  T =
                    ("next" === s.touchesDirection && s.allowSlideNext) ||
                    ("prev" === s.touchesDirection && s.allowSlidePrev);
                if (!a.isMoved) {
                  if (
                    (S && T && s.loopFix({ direction: s.swipeDirection }),
                    (a.startTranslate = s.getTranslate()),
                    s.setTransition(0),
                    s.animating)
                  ) {
                    var E = new window.CustomEvent("transitionend", {
                      bubbles: !0,
                      cancelable: !0,
                      detail: { bySwiperTouchMove: !0 },
                    });
                    s.wrapperEl.dispatchEvent(E);
                  }
                  ((a.allowMomentumBounce = !1),
                    o.grabCursor &&
                      (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) &&
                      s.setGrabCursor(!0),
                    s.emit("sliderFirstMove", u));
                }
                if (
                  (new Date().getTime(),
                  !1 !== o._loopSwapReset &&
                    a.isMoved &&
                    a.allowThresholdMove &&
                    b !== s.touchesDirection &&
                    S &&
                    T &&
                    Math.abs(w) >= 1)
                ) {
                  (Object.assign(l, {
                    startX: f,
                    startY: v,
                    currentX: f,
                    currentY: v,
                    startTranslate: a.currentTranslate,
                  }),
                    (a.loopSwapReset = !0),
                    (a.startTranslate = a.currentTranslate));
                  return;
                }
                (s.emit("sliderMove", u),
                  (a.isMoved = !0),
                  (a.currentTranslate = w + a.startTranslate));
                var x = !0,
                  M = o.resistanceRatio;
                if (
                  (o.touchReleaseOnEdges && (M = 0),
                  w > 0
                    ? (S &&
                        T &&
                        !i &&
                        a.allowThresholdMove &&
                        a.currentTranslate >
                          (o.centeredSlides
                            ? s.minTranslate() -
                              s.slidesSizesGrid[s.activeIndex + 1] -
                              ("auto" !== o.slidesPerView &&
                              s.slides.length - o.slidesPerView >= 2
                                ? s.slidesSizesGrid[s.activeIndex + 1] +
                                  s.params.spaceBetween
                                : 0) -
                              s.params.spaceBetween
                            : s.minTranslate()) &&
                        s.loopFix({
                          direction: "prev",
                          setTranslate: !0,
                          activeSlideIndex: 0,
                        }),
                      a.currentTranslate > s.minTranslate() &&
                        ((x = !1),
                        o.resistance &&
                          (a.currentTranslate =
                            s.minTranslate() -
                            1 +
                            Math.pow(
                              -s.minTranslate() + a.startTranslate + w,
                              M,
                            ))))
                    : w < 0 &&
                      (S &&
                        T &&
                        !i &&
                        a.allowThresholdMove &&
                        a.currentTranslate <
                          (o.centeredSlides
                            ? s.maxTranslate() +
                              s.slidesSizesGrid[s.slidesSizesGrid.length - 1] +
                              s.params.spaceBetween +
                              ("auto" !== o.slidesPerView &&
                              s.slides.length - o.slidesPerView >= 2
                                ? s.slidesSizesGrid[
                                    s.slidesSizesGrid.length - 1
                                  ] + s.params.spaceBetween
                                : 0)
                            : s.maxTranslate()) &&
                        s.loopFix({
                          direction: "next",
                          setTranslate: !0,
                          activeSlideIndex:
                            s.slides.length -
                            ("auto" === o.slidesPerView
                              ? s.slidesPerViewDynamic()
                              : Math.ceil(parseFloat(o.slidesPerView, 10))),
                        }),
                      a.currentTranslate < s.maxTranslate() &&
                        ((x = !1),
                        o.resistance &&
                          (a.currentTranslate =
                            s.maxTranslate() +
                            1 -
                            Math.pow(
                              s.maxTranslate() - a.startTranslate - w,
                              M,
                            )))),
                  x && (u.preventedByNestedSwiper = !0),
                  !s.allowSlideNext &&
                    "next" === s.swipeDirection &&
                    a.currentTranslate < a.startTranslate &&
                    (a.currentTranslate = a.startTranslate),
                  !s.allowSlidePrev &&
                    "prev" === s.swipeDirection &&
                    a.currentTranslate > a.startTranslate &&
                    (a.currentTranslate = a.startTranslate),
                  s.allowSlidePrev ||
                    s.allowSlideNext ||
                    (a.currentTranslate = a.startTranslate),
                  o.threshold > 0)
                ) {
                  if (Math.abs(w) > o.threshold || a.allowThresholdMove) {
                    if (!a.allowThresholdMove) {
                      ((a.allowThresholdMove = !0),
                        (l.startX = l.currentX),
                        (l.startY = l.currentY),
                        (a.currentTranslate = a.startTranslate),
                        (l.diff = s.isHorizontal()
                          ? l.currentX - l.startX
                          : l.currentY - l.startY));
                      return;
                    }
                  } else {
                    a.currentTranslate = a.startTranslate;
                    return;
                  }
                }
                o.followFinger &&
                  !o.cssMode &&
                  (((o.freeMode && o.freeMode.enabled && s.freeMode) ||
                    o.watchSlidesProgress) &&
                    (s.updateActiveIndex(), s.updateSlidesClasses()),
                  o.freeMode &&
                    o.freeMode.enabled &&
                    s.freeMode &&
                    s.freeMode.onTouchMove(),
                  s.updateProgress(a.currentTranslate),
                  s.setTranslate(a.currentTranslate));
              }
            }
          }
        }
      }
      function P(e) {
        var t,
          r,
          i = this,
          n = i.touchEventsData,
          s = e;
        if (
          (s.originalEvent && (s = s.originalEvent),
          "touchend" === s.type || "touchcancel" === s.type)
        ) {
          if (
            !(t = (0, c.Z)(s.changedTouches).find(function (e) {
              return e.identifier === n.touchId;
            })) ||
            t.identifier !== n.touchId
          )
            return;
        } else {
          if (null !== n.touchId || s.pointerId !== n.pointerId) return;
          t = s;
        }
        if (
          ![
            "pointercancel",
            "pointerout",
            "pointerleave",
            "contextmenu",
          ].includes(s.type) ||
          (["pointercancel", "contextmenu"].includes(s.type) &&
            (i.browser.isSafari || i.browser.isWebView))
        ) {
          ((n.pointerId = null), (n.touchId = null));
          var a = i.params,
            o = i.touches,
            l = i.rtlTranslate,
            d = i.slidesGrid;
          if (i.enabled && (a.simulateTouch || "mouse" !== s.pointerType)) {
            if (
              (n.allowTouchCallbacks && i.emit("touchEnd", s),
              (n.allowTouchCallbacks = !1),
              !n.isTouched)
            ) {
              (n.isMoved && a.grabCursor && i.setGrabCursor(!1),
                (n.isMoved = !1),
                (n.startMoving = !1));
              return;
            }
            a.grabCursor &&
              n.isMoved &&
              n.isTouched &&
              (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) &&
              i.setGrabCursor(!1);
            var u = (0, h.f)(),
              p = u - n.touchStartTime;
            if (i.allowClick) {
              var f = s.path || (s.composedPath && s.composedPath());
              (i.updateClickedSlide((f && f[0]) || s.target, f),
                i.emit("tap click", s),
                p < 300 &&
                  u - n.lastClickTime < 300 &&
                  i.emit("doubleTap doubleClick", s));
            }
            if (
              ((n.lastClickTime = (0, h.f)()),
              (0, h.n)(function () {
                i.destroyed || (i.allowClick = !0);
              }),
              !n.isTouched ||
                !n.isMoved ||
                !i.swipeDirection ||
                (0 === o.diff && !n.loopSwapReset) ||
                (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
            ) {
              ((n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1));
              return;
            }
            if (
              ((n.isTouched = !1),
              (n.isMoved = !1),
              (n.startMoving = !1),
              (r = a.followFinger
                ? l
                  ? i.translate
                  : -i.translate
                : -n.currentTranslate),
              a.cssMode)
            )
              return;
            if (a.freeMode && a.freeMode.enabled) {
              i.freeMode.onTouchEnd({ currentPos: r });
              return;
            }
            for (
              var v = r >= -i.maxTranslate() && !i.params.loop,
                m = 0,
                g = i.slidesSizesGrid[0],
                w = 0;
              w < d.length;
              w += w < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
            ) {
              var y = w < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
              void 0 !== d[w + y]
                ? (v || (r >= d[w] && r < d[w + y])) &&
                  ((m = w), (g = d[w + y] - d[w]))
                : (v || r >= d[w]) &&
                  ((m = w), (g = d[d.length - 1] - d[d.length - 2]));
            }
            var b = null,
              S = null;
            a.rewind &&
              (i.isBeginning
                ? (S =
                    a.virtual && a.virtual.enabled && i.virtual
                      ? i.virtual.slides.length - 1
                      : i.slides.length - 1)
                : i.isEnd && (b = 0));
            var T = (r - d[m]) / g,
              E = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            if (p > a.longSwipesMs) {
              if (!a.longSwipes) {
                i.slideTo(i.activeIndex);
                return;
              }
              ("next" === i.swipeDirection &&
                (T >= a.longSwipesRatio
                  ? i.slideTo(a.rewind && i.isEnd ? b : m + E)
                  : i.slideTo(m)),
                "prev" === i.swipeDirection &&
                  (T > 1 - a.longSwipesRatio
                    ? i.slideTo(m + E)
                    : null !== S && T < 0 && Math.abs(T) > a.longSwipesRatio
                      ? i.slideTo(S)
                      : i.slideTo(m)));
            } else {
              if (!a.shortSwipes) {
                i.slideTo(i.activeIndex);
                return;
              }
              i.navigation &&
              (s.target === i.navigation.nextEl ||
                s.target === i.navigation.prevEl)
                ? s.target === i.navigation.nextEl
                  ? i.slideTo(m + E)
                  : i.slideTo(m)
                : ("next" === i.swipeDirection &&
                    i.slideTo(null !== b ? b : m + E),
                  "prev" === i.swipeDirection && i.slideTo(null !== S ? S : m));
            }
          }
        }
      }
      function I() {
        var e = this,
          t = e.params,
          r = e.el;
        if (!r || 0 !== r.offsetWidth) {
          t.breakpoints && e.setBreakpoint();
          var i = e.allowSlideNext,
            n = e.allowSlidePrev,
            s = e.snapGrid,
            a = e.virtual && e.params.virtual.enabled;
          ((e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses());
          var o = a && t.loop;
          (("auto" !== t.slidesPerView && !(t.slidesPerView > 1)) ||
          !e.isEnd ||
          e.isBeginning ||
          e.params.centeredSlides ||
          o
            ? e.params.loop && !a
              ? e.slideToLoop(e.realIndex, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0)
            : e.slideTo(e.slides.length - 1, 0, !1, !0),
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              (clearTimeout(e.autoplay.resizeTimeout),
              (e.autoplay.resizeTimeout = setTimeout(function () {
                e.autoplay &&
                  e.autoplay.running &&
                  e.autoplay.paused &&
                  e.autoplay.resume();
              }, 500))),
            (e.allowSlidePrev = n),
            (e.allowSlideNext = i),
            e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow());
        }
      }
      function A(e) {
        this.enabled &&
          !this.allowClick &&
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation &&
            this.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function O() {
        var e = this,
          t = e.wrapperEl,
          r = e.rtlTranslate;
        if (e.enabled) {
          ((e.previousTranslate = e.translate),
            e.isHorizontal()
              ? (e.translate = -t.scrollLeft)
              : (e.translate = -t.scrollTop),
            0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses());
          var i = e.maxTranslate() - e.minTranslate();
          ((0 === i ? 0 : (e.translate - e.minTranslate()) / i) !==
            e.progress && e.updateProgress(r ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1));
        }
      }
      function L(e) {
        (S(this, e.target),
          !this.params.cssMode &&
            ("auto" === this.params.slidesPerView || this.params.autoHeight) &&
            this.update());
      }
      function z() {
        var e = this;
        !e.documentTouchHandlerProceeded &&
          ((e.documentTouchHandlerProceeded = !0),
          e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
      }
      var _ = function (e, t) {
          var r = (0, p.g)(),
            i = e.params,
            n = e.el,
            s = e.wrapperEl,
            a = e.device,
            o = !!i.nested,
            l = "on" === t ? "addEventListener" : "removeEventListener";
          n &&
            "string" != typeof n &&
            (r[l]("touchstart", e.onDocumentTouchStart, {
              passive: !1,
              capture: o,
            }),
            n[l]("touchstart", e.onTouchStart, { passive: !1 }),
            n[l]("pointerdown", e.onTouchStart, { passive: !1 }),
            r[l]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
            r[l]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
            r[l]("touchend", e.onTouchEnd, { passive: !0 }),
            r[l]("pointerup", e.onTouchEnd, { passive: !0 }),
            r[l]("pointercancel", e.onTouchEnd, { passive: !0 }),
            r[l]("touchcancel", e.onTouchEnd, { passive: !0 }),
            r[l]("pointerout", e.onTouchEnd, { passive: !0 }),
            r[l]("pointerleave", e.onTouchEnd, { passive: !0 }),
            r[l]("contextmenu", e.onTouchEnd, { passive: !0 }),
            (i.preventClicks || i.preventClicksPropagation) &&
              n[l]("click", e.onClick, !0),
            i.cssMode && s[l]("scroll", e.onScroll),
            i.updateOnWindowResize
              ? e[t](
                  a.ios || a.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  I,
                  !0,
                )
              : e[t]("observerUpdate", I, !0),
            n[l]("load", e.onLoad, { capture: !0 }));
        },
        N = function (e, t) {
          return e.grid && t.grid && t.grid.rows > 1;
        },
        R = {
          init: !0,
          direction: "horizontal",
          oneWayMovement: !1,
          swiperElementNodeName: "SWIPER-CONTAINER",
          touchEventsTarget: "wrapper",
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !0,
          nested: !1,
          createElements: !1,
          eventsPrefix: "swiper",
          enabled: !0,
          focusableElements:
            "input, select, option, textarea, button, video, label",
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          breakpointsBase: "window",
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: !1,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 5,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          loop: !1,
          loopAddBlankSlides: !0,
          loopAdditionalSlides: 0,
          loopPreventsSliding: !0,
          rewind: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          maxBackfaceHiddenSlides: 10,
          containerModifierClass: "swiper-",
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-blank",
          slideActiveClass: "swiper-slide-active",
          slideVisibleClass: "swiper-slide-visible",
          slideFullyVisibleClass: "swiper-slide-fully-visible",
          slideNextClass: "swiper-slide-next",
          slidePrevClass: "swiper-slide-prev",
          wrapperClass: "swiper-wrapper",
          lazyPreloaderClass: "swiper-lazy-preloader",
          lazyPreloadPrevNext: 0,
          runCallbacksOnInit: !0,
          _emitClasses: !1,
        },
        D = {
          eventsEmitter: {
            on: function (e, t, r) {
              var i = this;
              if (!i.eventsListeners || i.destroyed || "function" != typeof t)
                return i;
              var n = r ? "unshift" : "push";
              return (
                e.split(" ").forEach(function (e) {
                  (i.eventsListeners[e] || (i.eventsListeners[e] = []),
                    i.eventsListeners[e][n](t));
                }),
                i
              );
            },
            once: function (e, t, r) {
              var i = this;
              if (!i.eventsListeners || i.destroyed || "function" != typeof t)
                return i;
              function n() {
                (i.off(e, n), n.__emitterProxy && delete n.__emitterProxy);
                for (var r = arguments.length, s = Array(r), a = 0; a < r; a++)
                  s[a] = arguments[a];
                t.apply(i, s);
              }
              return ((n.__emitterProxy = t), i.on(e, n, r));
            },
            onAny: function (e, t) {
              return (
                !this.eventsListeners ||
                  this.destroyed ||
                  "function" != typeof e ||
                  (0 > this.eventsAnyListeners.indexOf(e) &&
                    this.eventsAnyListeners[t ? "unshift" : "push"](e)),
                this
              );
            },
            offAny: function (e) {
              if (
                !this.eventsListeners ||
                this.destroyed ||
                !this.eventsAnyListeners
              )
                return this;
              var t = this.eventsAnyListeners.indexOf(e);
              return (t >= 0 && this.eventsAnyListeners.splice(t, 1), this);
            },
            off: function (e, t) {
              var r = this;
              return (
                r.eventsListeners &&
                  !r.destroyed &&
                  r.eventsListeners &&
                  e.split(" ").forEach(function (e) {
                    void 0 === t
                      ? (r.eventsListeners[e] = [])
                      : r.eventsListeners[e] &&
                        r.eventsListeners[e].forEach(function (i, n) {
                          (i === t ||
                            (i.__emitterProxy && i.__emitterProxy === t)) &&
                            r.eventsListeners[e].splice(n, 1);
                        });
                  }),
                r
              );
            },
            emit: function () {
              var e,
                t,
                r,
                i = this;
              if (!i.eventsListeners || i.destroyed || !i.eventsListeners)
                return i;
              for (var n = arguments.length, s = Array(n), a = 0; a < n; a++)
                s[a] = arguments[a];
              return (
                "string" == typeof s[0] || Array.isArray(s[0])
                  ? ((e = s[0]), (t = s.slice(1, s.length)), (r = i))
                  : ((e = s[0].events),
                    (t = s[0].data),
                    (r = s[0].context || i)),
                t.unshift(r),
                (Array.isArray(e) ? e : e.split(" ")).forEach(function (e) {
                  (i.eventsAnyListeners &&
                    i.eventsAnyListeners.length &&
                    i.eventsAnyListeners.forEach(function (i) {
                      i.apply(r, [e].concat((0, c.Z)(t)));
                    }),
                    i.eventsListeners &&
                      i.eventsListeners[e] &&
                      i.eventsListeners[e].forEach(function (e) {
                        e.apply(r, t);
                      }));
                }),
                i
              );
            },
          },
          update: {
            updateSize: function () {
              var e,
                t,
                r = this.el;
              ((e =
                void 0 !== this.params.width && null !== this.params.width
                  ? this.params.width
                  : r.clientWidth),
                (t =
                  void 0 !== this.params.height && null !== this.params.height
                    ? this.params.height
                    : r.clientHeight),
                (0 === e && this.isHorizontal()) ||
                  (0 === t && this.isVertical()) ||
                  ((e =
                    e -
                    parseInt((0, h.q)(r, "padding-left") || 0, 10) -
                    parseInt((0, h.q)(r, "padding-right") || 0, 10)),
                  (t =
                    t -
                    parseInt((0, h.q)(r, "padding-top") || 0, 10) -
                    parseInt((0, h.q)(r, "padding-bottom") || 0, 10)),
                  Number.isNaN(e) && (e = 0),
                  Number.isNaN(t) && (t = 0),
                  Object.assign(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t,
                  })));
            },
            updateSlides: function () {
              var e,
                t = this;
              function r(e, r) {
                return parseFloat(
                  e.getPropertyValue(t.getDirectionLabel(r)) || 0,
                );
              }
              var i = t.params,
                n = t.wrapperEl,
                s = t.slidesEl,
                a = t.size,
                o = t.rtlTranslate,
                l = t.wrongRTL,
                d = t.virtual && i.virtual.enabled,
                c = d ? t.virtual.slides.length : t.slides.length,
                u = (0, h.e)(
                  s,
                  ".".concat(t.params.slideClass, ", swiper-slide"),
                ),
                p = d ? t.virtual.slides.length : u.length,
                f = [],
                v = [],
                m = [],
                g = i.slidesOffsetBefore;
              "function" == typeof g && (g = i.slidesOffsetBefore.call(t));
              var w = i.slidesOffsetAfter;
              "function" == typeof w && (w = i.slidesOffsetAfter.call(t));
              var y = t.snapGrid.length,
                b = t.slidesGrid.length,
                S = i.spaceBetween,
                T = -g,
                E = 0,
                x = 0;
              if (void 0 !== a) {
                ("string" == typeof S && S.indexOf("%") >= 0
                  ? (S = (parseFloat(S.replace("%", "")) / 100) * a)
                  : "string" == typeof S && (S = parseFloat(S)),
                  (t.virtualSize = -S),
                  u.forEach(function (e) {
                    (o ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                      (e.style.marginBottom = ""),
                      (e.style.marginTop = ""));
                  }),
                  i.centeredSlides &&
                    i.cssMode &&
                    ((0, h.a)(n, "--swiper-centered-offset-before", ""),
                    (0, h.a)(n, "--swiper-centered-offset-after", "")));
                var M = i.grid && i.grid.rows > 1 && t.grid;
                M ? t.grid.initSlides(u) : t.grid && t.grid.unsetSlides();
                for (
                  var k =
                      "auto" === i.slidesPerView &&
                      i.breakpoints &&
                      Object.keys(i.breakpoints).filter(function (e) {
                        return void 0 !== i.breakpoints[e].slidesPerView;
                      }).length > 0,
                    C = 0;
                  C < p;
                  C += 1
                ) {
                  e = 0;
                  var P = void 0;
                  if (
                    (u[C] && (P = u[C]),
                    M && t.grid.updateSlide(C, P, u),
                    !u[C] || "none" !== (0, h.q)(P, "display"))
                  ) {
                    if ("auto" === i.slidesPerView) {
                      k && (u[C].style[t.getDirectionLabel("width")] = "");
                      var I = getComputedStyle(P),
                        A = P.style.transform,
                        O = P.style.webkitTransform;
                      if (
                        (A && (P.style.transform = "none"),
                        O && (P.style.webkitTransform = "none"),
                        i.roundLengths)
                      )
                        e = t.isHorizontal()
                          ? (0, h.h)(P, "width", !0)
                          : (0, h.h)(P, "height", !0);
                      else {
                        var L = r(I, "width"),
                          z = r(I, "padding-left"),
                          _ = r(I, "padding-right"),
                          N = r(I, "margin-left"),
                          R = r(I, "margin-right"),
                          D = I.getPropertyValue("box-sizing");
                        if (D && "border-box" === D) e = L + N + R;
                        else {
                          var G = P,
                            F = G.clientWidth;
                          e = L + z + _ + N + R + (G.offsetWidth - F);
                        }
                      }
                      (A && (P.style.transform = A),
                        O && (P.style.webkitTransform = O),
                        i.roundLengths && (e = Math.floor(e)));
                    } else
                      ((e = (a - (i.slidesPerView - 1) * S) / i.slidesPerView),
                        i.roundLengths && (e = Math.floor(e)),
                        u[C] &&
                          (u[C].style[t.getDirectionLabel("width")] = "".concat(
                            e,
                            "px",
                          )));
                    (u[C] && (u[C].swiperSlideSize = e),
                      m.push(e),
                      i.centeredSlides
                        ? ((T = T + e / 2 + E / 2 + S),
                          0 === E && 0 !== C && (T = T - a / 2 - S),
                          0 === C && (T = T - a / 2 - S),
                          0.001 > Math.abs(T) && (T = 0),
                          i.roundLengths && (T = Math.floor(T)),
                          x % i.slidesPerGroup == 0 && f.push(T),
                          v.push(T))
                        : (i.roundLengths && (T = Math.floor(T)),
                          (x - Math.min(t.params.slidesPerGroupSkip, x)) %
                            t.params.slidesPerGroup ==
                            0 && f.push(T),
                          v.push(T),
                          (T = T + e + S)),
                      (t.virtualSize += e + S),
                      (E = e),
                      (x += 1));
                  }
                }
                if (
                  ((t.virtualSize = Math.max(t.virtualSize, a) + w),
                  o &&
                    l &&
                    ("slide" === i.effect || "coverflow" === i.effect) &&
                    (n.style.width = "".concat(t.virtualSize + S, "px")),
                  i.setWrapperSize &&
                    (n.style[t.getDirectionLabel("width")] = "".concat(
                      t.virtualSize + S,
                      "px",
                    )),
                  M && t.grid.updateWrapperSize(e, f),
                  !i.centeredSlides)
                ) {
                  for (var B = [], V = 0; V < f.length; V += 1) {
                    var H = f[V];
                    (i.roundLengths && (H = Math.floor(H)),
                      f[V] <= t.virtualSize - a && B.push(H));
                  }
                  ((f = B),
                    Math.floor(t.virtualSize - a) -
                      Math.floor(f[f.length - 1]) >
                      1 && f.push(t.virtualSize - a));
                }
                if (d && i.loop) {
                  var j = m[0] + S;
                  if (i.slidesPerGroup > 1)
                    for (
                      var q = Math.ceil(
                          (t.virtual.slidesBefore + t.virtual.slidesAfter) /
                            i.slidesPerGroup,
                        ),
                        W = j * i.slidesPerGroup,
                        Z = 0;
                      Z < q;
                      Z += 1
                    )
                      f.push(f[f.length - 1] + W);
                  for (
                    var Y = 0;
                    Y < t.virtual.slidesBefore + t.virtual.slidesAfter;
                    Y += 1
                  )
                    (1 === i.slidesPerGroup && f.push(f[f.length - 1] + j),
                      v.push(v[v.length - 1] + j),
                      (t.virtualSize += j));
                }
                if ((0 === f.length && (f = [0]), 0 !== S)) {
                  var X =
                    t.isHorizontal() && o
                      ? "marginLeft"
                      : t.getDirectionLabel("marginRight");
                  u.filter(function (e, t) {
                    return !i.cssMode || !!i.loop || t !== u.length - 1;
                  }).forEach(function (e) {
                    e.style[X] = "".concat(S, "px");
                  });
                }
                if (i.centeredSlides && i.centeredSlidesBounds) {
                  var U = 0;
                  m.forEach(function (e) {
                    U += e + (S || 0);
                  });
                  var Q = (U -= S) > a ? U - a : 0;
                  f = f.map(function (e) {
                    return e <= 0 ? -g : e > Q ? Q + w : e;
                  });
                }
                if (i.centerInsufficientSlides) {
                  var K = 0;
                  (m.forEach(function (e) {
                    K += e + (S || 0);
                  }),
                    (K -= S));
                  var $ =
                    (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0);
                  if (K + $ < a) {
                    var J = (a - K - $) / 2;
                    (f.forEach(function (e, t) {
                      f[t] = e - J;
                    }),
                      v.forEach(function (e, t) {
                        v[t] = e + J;
                      }));
                  }
                }
                if (
                  (Object.assign(t, {
                    slides: u,
                    snapGrid: f,
                    slidesGrid: v,
                    slidesSizesGrid: m,
                  }),
                  i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
                ) {
                  ((0, h.a)(
                    n,
                    "--swiper-centered-offset-before",
                    "".concat(-f[0], "px"),
                  ),
                    (0, h.a)(
                      n,
                      "--swiper-centered-offset-after",
                      "".concat(t.size / 2 - m[m.length - 1] / 2, "px"),
                    ));
                  var ee = -t.snapGrid[0],
                    et = -t.slidesGrid[0];
                  ((t.snapGrid = t.snapGrid.map(function (e) {
                    return e + ee;
                  })),
                    (t.slidesGrid = t.slidesGrid.map(function (e) {
                      return e + et;
                    })));
                }
                if (
                  (p !== c && t.emit("slidesLengthChange"),
                  f.length !== y &&
                    (t.params.watchOverflow && t.checkOverflow(),
                    t.emit("snapGridLengthChange")),
                  v.length !== b && t.emit("slidesGridLengthChange"),
                  i.watchSlidesProgress && t.updateSlidesOffset(),
                  t.emit("slidesUpdated"),
                  !d &&
                    !i.cssMode &&
                    ("slide" === i.effect || "fade" === i.effect))
                ) {
                  var er = "".concat(
                      i.containerModifierClass,
                      "backface-hidden",
                    ),
                    ei = t.el.classList.contains(er);
                  p <= i.maxBackfaceHiddenSlides
                    ? ei || t.el.classList.add(er)
                    : ei && t.el.classList.remove(er);
                }
              }
            },
            updateAutoHeight: function (e) {
              var t,
                r = this,
                i = [],
                n = r.virtual && r.params.virtual.enabled,
                s = 0;
              "number" == typeof e
                ? r.setTransition(e)
                : !0 === e && r.setTransition(r.params.speed);
              var a = function (e) {
                return n ? r.slides[r.getSlideIndexByData(e)] : r.slides[e];
              };
              if (
                "auto" !== r.params.slidesPerView &&
                r.params.slidesPerView > 1
              ) {
                if (r.params.centeredSlides)
                  (r.visibleSlides || []).forEach(function (e) {
                    i.push(e);
                  });
                else
                  for (t = 0; t < Math.ceil(r.params.slidesPerView); t += 1) {
                    var o = r.activeIndex + t;
                    if (o > r.slides.length && !n) break;
                    i.push(a(o));
                  }
              } else i.push(a(r.activeIndex));
              for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                  var l = i[t].offsetHeight;
                  s = l > s ? l : s;
                }
              (s || 0 === s) && (r.wrapperEl.style.height = "".concat(s, "px"));
            },
            updateSlidesOffset: function () {
              for (
                var e = this.slides,
                  t = this.isElement
                    ? this.isHorizontal()
                      ? this.wrapperEl.offsetLeft
                      : this.wrapperEl.offsetTop
                    : 0,
                  r = 0;
                r < e.length;
                r += 1
              )
                e[r].swiperSlideOffset =
                  (this.isHorizontal() ? e[r].offsetLeft : e[r].offsetTop) -
                  t -
                  this.cssOverflowAdjustment();
            },
            updateSlidesProgress: function (e) {
              void 0 === e && (e = (this && this.translate) || 0);
              var t = this,
                r = t.params,
                i = t.slides,
                n = t.rtlTranslate,
                s = t.snapGrid;
              if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                var a = -e;
                (n && (a = e),
                  (t.visibleSlidesIndexes = []),
                  (t.visibleSlides = []));
                var o = r.spaceBetween;
                "string" == typeof o && o.indexOf("%") >= 0
                  ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
                  : "string" == typeof o && (o = parseFloat(o));
                for (var l = 0; l < i.length; l += 1) {
                  var d = i[l],
                    c = d.swiperSlideOffset;
                  r.cssMode &&
                    r.centeredSlides &&
                    (c -= i[0].swiperSlideOffset);
                  var u =
                      (a + (r.centeredSlides ? t.minTranslate() : 0) - c) /
                      (d.swiperSlideSize + o),
                    p =
                      (a -
                        s[0] +
                        (r.centeredSlides ? t.minTranslate() : 0) -
                        c) /
                      (d.swiperSlideSize + o),
                    h = -(a - c),
                    f = h + t.slidesSizesGrid[l],
                    v = h >= 0 && h <= t.size - t.slidesSizesGrid[l],
                    m =
                      (h >= 0 && h < t.size - 1) ||
                      (f > 1 && f <= t.size) ||
                      (h <= 0 && f >= t.size);
                  (m &&
                    (t.visibleSlides.push(d), t.visibleSlidesIndexes.push(l)),
                    y(d, m, r.slideVisibleClass),
                    y(d, v, r.slideFullyVisibleClass),
                    (d.progress = n ? -u : u),
                    (d.originalProgress = n ? -p : p));
                }
              }
            },
            updateProgress: function (e) {
              if (void 0 === e) {
                var t = this.rtlTranslate ? -1 : 1;
                e = (this && this.translate && this.translate * t) || 0;
              }
              var r = this.params,
                i = this.maxTranslate() - this.minTranslate(),
                n = this.progress,
                s = this.isBeginning,
                a = this.isEnd,
                o = this.progressLoop,
                l = s,
                d = a;
              if (0 === i) ((n = 0), (s = !0), (a = !0));
              else {
                n = (e - this.minTranslate()) / i;
                var c = 1 > Math.abs(e - this.minTranslate()),
                  u = 1 > Math.abs(e - this.maxTranslate());
                ((s = c || n <= 0),
                  (a = u || n >= 1),
                  c && (n = 0),
                  u && (n = 1));
              }
              if (r.loop) {
                var p = this.getSlideIndexByData(0),
                  h = this.getSlideIndexByData(this.slides.length - 1),
                  f = this.slidesGrid[p],
                  v = this.slidesGrid[h],
                  m = this.slidesGrid[this.slidesGrid.length - 1],
                  g = Math.abs(e);
                (o = g >= f ? (g - f) / m : (g + m - v) / m) > 1 && (o -= 1);
              }
              (Object.assign(this, {
                progress: n,
                progressLoop: o,
                isBeginning: s,
                isEnd: a,
              }),
                (r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) &&
                  this.updateSlidesProgress(e),
                s && !l && this.emit("reachBeginning toEdge"),
                a && !d && this.emit("reachEnd toEdge"),
                ((l && !s) || (d && !a)) && this.emit("fromEdge"),
                this.emit("progress", n));
            },
            updateSlidesClasses: function () {
              var e,
                t,
                r,
                i = this.slides,
                n = this.params,
                s = this.slidesEl,
                a = this.activeIndex,
                o = this.virtual && n.virtual.enabled,
                l = this.grid && n.grid && n.grid.rows > 1,
                d = function (e) {
                  return (0, h.e)(
                    s,
                    "."
                      .concat(n.slideClass)
                      .concat(e, ", swiper-slide")
                      .concat(e),
                  )[0];
                };
              if (o) {
                if (n.loop) {
                  var c = a - this.virtual.slidesBefore;
                  (c < 0 && (c = this.virtual.slides.length + c),
                    c >= this.virtual.slides.length &&
                      (c -= this.virtual.slides.length),
                    (e = d('[data-swiper-slide-index="'.concat(c, '"]'))));
                } else e = d('[data-swiper-slide-index="'.concat(a, '"]'));
              } else
                l
                  ? ((e = i.find(function (e) {
                      return e.column === a;
                    })),
                    (r = i.find(function (e) {
                      return e.column === a + 1;
                    })),
                    (t = i.find(function (e) {
                      return e.column === a - 1;
                    })))
                  : (e = i[a]);
              (e &&
                !l &&
                ((r = (0, h.r)(
                  e,
                  ".".concat(n.slideClass, ", swiper-slide"),
                )[0]),
                n.loop && !r && (r = i[0]),
                (t = (0, h.t)(
                  e,
                  ".".concat(n.slideClass, ", swiper-slide"),
                )[0]),
                n.loop),
                i.forEach(function (i) {
                  (b(i, i === e, n.slideActiveClass),
                    b(i, i === r, n.slideNextClass),
                    b(i, i === t, n.slidePrevClass));
                }),
                this.emitSlidesClasses());
            },
            updateActiveIndex: function (e) {
              var t,
                r,
                i = this,
                n = i.rtlTranslate ? i.translate : -i.translate,
                s = i.snapGrid,
                a = i.params,
                o = i.activeIndex,
                l = i.realIndex,
                d = i.snapIndex,
                c = e,
                u = function (e) {
                  var t = e - i.virtual.slidesBefore;
                  return (
                    t < 0 && (t = i.virtual.slides.length + t),
                    t >= i.virtual.slides.length &&
                      (t -= i.virtual.slides.length),
                    t
                  );
                };
              if (
                (void 0 === c &&
                  (c = (function (e) {
                    for (
                      var t,
                        r = e.slidesGrid,
                        i = e.params,
                        n = e.rtlTranslate ? e.translate : -e.translate,
                        s = 0;
                      s < r.length;
                      s += 1
                    )
                      void 0 !== r[s + 1]
                        ? n >= r[s] && n < r[s + 1] - (r[s + 1] - r[s]) / 2
                          ? (t = s)
                          : n >= r[s] && n < r[s + 1] && (t = s + 1)
                        : n >= r[s] && (t = s);
                    return (
                      i.normalizeSlideIndex &&
                        (t < 0 || void 0 === t) &&
                        (t = 0),
                      t
                    );
                  })(i)),
                s.indexOf(n) >= 0)
              )
                t = s.indexOf(n);
              else {
                var p = Math.min(a.slidesPerGroupSkip, c);
                t = p + Math.floor((c - p) / a.slidesPerGroup);
              }
              if (
                (t >= s.length && (t = s.length - 1), c === o && !i.params.loop)
              ) {
                t !== d && ((i.snapIndex = t), i.emit("snapIndexChange"));
                return;
              }
              if (
                c === o &&
                i.params.loop &&
                i.virtual &&
                i.params.virtual.enabled
              ) {
                i.realIndex = u(c);
                return;
              }
              var h = i.grid && a.grid && a.grid.rows > 1;
              if (i.virtual && a.virtual.enabled && a.loop) r = u(c);
              else if (h) {
                var f = i.slides.find(function (e) {
                    return e.column === c;
                  }),
                  v = parseInt(f.getAttribute("data-swiper-slide-index"), 10);
                (Number.isNaN(v) && (v = Math.max(i.slides.indexOf(f), 0)),
                  (r = Math.floor(v / a.grid.rows)));
              } else if (i.slides[c]) {
                var m = i.slides[c].getAttribute("data-swiper-slide-index");
                r = m ? parseInt(m, 10) : c;
              } else r = c;
              (Object.assign(i, {
                previousSnapIndex: d,
                snapIndex: t,
                previousRealIndex: l,
                realIndex: r,
                previousIndex: o,
                activeIndex: c,
              }),
                i.initialized && E(i),
                i.emit("activeIndexChange"),
                i.emit("snapIndexChange"),
                (i.initialized || i.params.runCallbacksOnInit) &&
                  (l !== r && i.emit("realIndexChange"),
                  i.emit("slideChange")));
            },
            updateClickedSlide: function (e, t) {
              var r,
                i = this,
                n = i.params,
                s = e.closest(".".concat(n.slideClass, ", swiper-slide"));
              !s &&
                i.isElement &&
                t &&
                t.length > 1 &&
                t.includes(e) &&
                (0, c.Z)(t.slice(t.indexOf(e) + 1, t.length)).forEach(
                  function (e) {
                    !s &&
                      e.matches &&
                      e.matches(".".concat(n.slideClass, ", swiper-slide")) &&
                      (s = e);
                  },
                );
              var a = !1;
              if (s) {
                for (var o = 0; o < i.slides.length; o += 1)
                  if (i.slides[o] === s) {
                    ((a = !0), (r = o));
                    break;
                  }
              }
              if (s && a)
                ((i.clickedSlide = s),
                  i.virtual && i.params.virtual.enabled
                    ? (i.clickedIndex = parseInt(
                        s.getAttribute("data-swiper-slide-index"),
                        10,
                      ))
                    : (i.clickedIndex = r));
              else {
                ((i.clickedSlide = void 0), (i.clickedIndex = void 0));
                return;
              }
              n.slideToClickedSlide &&
                void 0 !== i.clickedIndex &&
                i.clickedIndex !== i.activeIndex &&
                i.slideToClickedSlide();
            },
          },
          translate: {
            getTranslate: function (e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              var t = this.params,
                r = this.rtlTranslate,
                i = this.translate,
                n = this.wrapperEl;
              if (t.virtualTranslate) return r ? -i : i;
              if (t.cssMode) return i;
              var s = (0, h.k)(n, e);
              return (
                (s += this.cssOverflowAdjustment()),
                r && (s = -s),
                s || 0
              );
            },
            setTranslate: function (e, t) {
              var r = this,
                i = r.rtlTranslate,
                n = r.params,
                s = r.wrapperEl,
                a = r.progress,
                o = 0,
                l = 0;
              (r.isHorizontal() ? (o = i ? -e : e) : (l = e),
                n.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
                (r.previousTranslate = r.translate),
                (r.translate = r.isHorizontal() ? o : l),
                n.cssMode
                  ? (s[r.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      r.isHorizontal() ? -o : -l)
                  : n.virtualTranslate ||
                    (r.isHorizontal()
                      ? (o -= r.cssOverflowAdjustment())
                      : (l -= r.cssOverflowAdjustment()),
                    (s.style.transform = "translate3d("
                      .concat(o, "px, ")
                      .concat(l, "px, ")
                      .concat(0, "px)"))));
              var d = r.maxTranslate() - r.minTranslate();
              ((0 === d ? 0 : (e - r.minTranslate()) / d) !== a &&
                r.updateProgress(e),
                r.emit("setTranslate", r.translate, t));
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e, t, r, i, n) {
              (void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === r && (r = !0),
                void 0 === i && (i = !0));
              var s,
                a = this,
                o = a.params,
                l = a.wrapperEl;
              if (a.animating && o.preventInteractionOnTransition) return !1;
              var c = a.minTranslate(),
                u = a.maxTranslate();
              if (
                ((s = i && e > c ? c : i && e < u ? u : e),
                a.updateProgress(s),
                o.cssMode)
              ) {
                var p = a.isHorizontal();
                if (0 === t) l[p ? "scrollLeft" : "scrollTop"] = -s;
                else {
                  if (!a.support.smoothScroll)
                    return (
                      (0, h.u)({
                        swiper: a,
                        targetPosition: -s,
                        side: p ? "left" : "top",
                      }),
                      !0
                    );
                  l.scrollTo(
                    (0, d.Z)(
                      (0, d.Z)({}, p ? "left" : "top", -s),
                      "behavior",
                      "smooth",
                    ),
                  );
                }
                return !0;
              }
              return (
                0 === t
                  ? (a.setTransition(0),
                    a.setTranslate(s),
                    r &&
                      (a.emit("beforeTransitionStart", t, n),
                      a.emit("transitionEnd")))
                  : (a.setTransition(t),
                    a.setTranslate(s),
                    r &&
                      (a.emit("beforeTransitionStart", t, n),
                      a.emit("transitionStart")),
                    a.animating ||
                      ((a.animating = !0),
                      a.onTranslateToWrapperTransitionEnd ||
                        (a.onTranslateToWrapperTransitionEnd = function (e) {
                          a &&
                            !a.destroyed &&
                            e.target === this &&
                            (a.wrapperEl.removeEventListener(
                              "transitionend",
                              a.onTranslateToWrapperTransitionEnd,
                            ),
                            (a.onTranslateToWrapperTransitionEnd = null),
                            delete a.onTranslateToWrapperTransitionEnd,
                            (a.animating = !1),
                            r && a.emit("transitionEnd"));
                        }),
                      a.wrapperEl.addEventListener(
                        "transitionend",
                        a.onTranslateToWrapperTransitionEnd,
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              var r = this;
              (r.params.cssMode ||
                ((r.wrapperEl.style.transitionDuration = "".concat(e, "ms")),
                (r.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
                r.emit("setTransition", e, t));
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              var r = this.params;
              r.cssMode ||
                (r.autoHeight && this.updateAutoHeight(),
                x({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              var r = this,
                i = r.params;
              ((r.animating = !1),
                i.cssMode ||
                  (r.setTransition(0),
                  x({
                    swiper: r,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  })));
            },
          },
          slide: {
            slideTo: function (e, t, r, i, n) {
              (void 0 === e && (e = 0),
                void 0 === r && (r = !0),
                "string" == typeof e && (e = parseInt(e, 10)));
              var s,
                a = this,
                o = e;
              o < 0 && (o = 0);
              var l = a.params,
                c = a.snapGrid,
                u = a.slidesGrid,
                p = a.previousIndex,
                f = a.activeIndex,
                v = a.rtlTranslate,
                m = a.wrapperEl;
              if (
                (!a.enabled && !i && !n) ||
                a.destroyed ||
                (a.animating && l.preventInteractionOnTransition)
              )
                return !1;
              void 0 === t && (t = a.params.speed);
              var g = Math.min(a.params.slidesPerGroupSkip, o),
                y = g + Math.floor((o - g) / a.params.slidesPerGroup);
              y >= c.length && (y = c.length - 1);
              var b = -c[y];
              if (l.normalizeSlideIndex)
                for (var S = 0; S < u.length; S += 1) {
                  var T = -Math.floor(100 * b),
                    E = Math.floor(100 * u[S]),
                    x = Math.floor(100 * u[S + 1]);
                  void 0 !== u[S + 1]
                    ? T >= E && T < x - (x - E) / 2
                      ? (o = S)
                      : T >= E && T < x && (o = S + 1)
                    : T >= E && (o = S);
                }
              if (
                a.initialized &&
                o !== f &&
                ((!a.allowSlideNext &&
                  (v
                    ? b > a.translate && b > a.minTranslate()
                    : b < a.translate && b < a.minTranslate())) ||
                  (!a.allowSlidePrev &&
                    b > a.translate &&
                    b > a.maxTranslate() &&
                    (f || 0) !== o))
              )
                return !1;
              (o !== (p || 0) && r && a.emit("beforeSlideChangeStart"),
                a.updateProgress(b),
                (s = o > f ? "next" : o < f ? "prev" : "reset"));
              var M = a.virtual && a.params.virtual.enabled;
              if (
                !(M && n) &&
                ((v && -b === a.translate) || (!v && b === a.translate))
              )
                return (
                  a.updateActiveIndex(o),
                  l.autoHeight && a.updateAutoHeight(),
                  a.updateSlidesClasses(),
                  "slide" !== l.effect && a.setTranslate(b),
                  "reset" !== s &&
                    (a.transitionStart(r, s), a.transitionEnd(r, s)),
                  !1
                );
              if (l.cssMode) {
                var k = a.isHorizontal(),
                  C = v ? b : -b;
                if (0 === t)
                  (M &&
                    ((a.wrapperEl.style.scrollSnapType = "none"),
                    (a._immediateVirtual = !0)),
                    M &&
                    !a._cssModeVirtualInitialSet &&
                    a.params.initialSlide > 0
                      ? ((a._cssModeVirtualInitialSet = !0),
                        requestAnimationFrame(function () {
                          m[k ? "scrollLeft" : "scrollTop"] = C;
                        }))
                      : (m[k ? "scrollLeft" : "scrollTop"] = C),
                    M &&
                      requestAnimationFrame(function () {
                        ((a.wrapperEl.style.scrollSnapType = ""),
                          (a._immediateVirtual = !1));
                      }));
                else {
                  if (!a.support.smoothScroll)
                    return (
                      (0, h.u)({
                        swiper: a,
                        targetPosition: C,
                        side: k ? "left" : "top",
                      }),
                      !0
                    );
                  m.scrollTo(
                    (0, d.Z)(
                      (0, d.Z)({}, k ? "left" : "top", C),
                      "behavior",
                      "smooth",
                    ),
                  );
                }
                return !0;
              }
              var P = w().isSafari;
              return (
                M && !n && P && a.isElement && a.virtual.update(!1, !1, o),
                a.setTransition(t),
                a.setTranslate(b),
                a.updateActiveIndex(o),
                a.updateSlidesClasses(),
                a.emit("beforeTransitionStart", t, i),
                a.transitionStart(r, s),
                0 === t
                  ? a.transitionEnd(r, s)
                  : a.animating ||
                    ((a.animating = !0),
                    a.onSlideToWrapperTransitionEnd ||
                      (a.onSlideToWrapperTransitionEnd = function (e) {
                        a &&
                          !a.destroyed &&
                          e.target === this &&
                          (a.wrapperEl.removeEventListener(
                            "transitionend",
                            a.onSlideToWrapperTransitionEnd,
                          ),
                          (a.onSlideToWrapperTransitionEnd = null),
                          delete a.onSlideToWrapperTransitionEnd,
                          a.transitionEnd(r, s));
                      }),
                    a.wrapperEl.addEventListener(
                      "transitionend",
                      a.onSlideToWrapperTransitionEnd,
                    )),
                !0
              );
            },
            slideToLoop: function (e, t, r, i) {
              (void 0 === e && (e = 0),
                void 0 === r && (r = !0),
                "string" == typeof e && (e = parseInt(e, 10)));
              var n = this;
              if (!n.destroyed) {
                void 0 === t && (t = n.params.speed);
                var s = n.grid && n.params.grid && n.params.grid.rows > 1,
                  a = e;
                if (n.params.loop) {
                  if (n.virtual && n.params.virtual.enabled)
                    a += n.virtual.slidesBefore;
                  else {
                    if (s) {
                      var o,
                        l = a * n.params.grid.rows;
                      o = n.slides.find(function (e) {
                        return (
                          1 * e.getAttribute("data-swiper-slide-index") === l
                        );
                      }).column;
                    } else o = n.getSlideIndexByData(a);
                    var d = s
                        ? Math.ceil(n.slides.length / n.params.grid.rows)
                        : n.slides.length,
                      c = n.params.centeredSlides,
                      u = n.params.slidesPerView;
                    "auto" === u
                      ? (u = n.slidesPerViewDynamic())
                      : ((u = Math.ceil(
                          parseFloat(n.params.slidesPerView, 10),
                        )),
                        c && u % 2 == 0 && (u += 1));
                    var p = d - o < u;
                    if (
                      (c && (p = p || o < Math.ceil(u / 2)),
                      i &&
                        c &&
                        "auto" !== n.params.slidesPerView &&
                        !s &&
                        (p = !1),
                      p)
                    ) {
                      var h = c
                        ? o < n.activeIndex
                          ? "prev"
                          : "next"
                        : o - n.activeIndex - 1 < n.params.slidesPerView
                          ? "next"
                          : "prev";
                      n.loopFix({
                        direction: h,
                        slideTo: !0,
                        activeSlideIndex: "next" === h ? o + 1 : o - d + 1,
                        slideRealIndex: "next" === h ? n.realIndex : void 0,
                      });
                    }
                    if (s) {
                      var f = a * n.params.grid.rows;
                      a = n.slides.find(function (e) {
                        return (
                          1 * e.getAttribute("data-swiper-slide-index") === f
                        );
                      }).column;
                    } else a = n.getSlideIndexByData(a);
                  }
                }
                return (
                  requestAnimationFrame(function () {
                    n.slideTo(a, t, r, i);
                  }),
                  n
                );
              }
            },
            slideNext: function (e, t, r) {
              void 0 === t && (t = !0);
              var i = this,
                n = i.enabled,
                s = i.params,
                a = i.animating;
              if (!n || i.destroyed) return i;
              void 0 === e && (e = i.params.speed);
              var o = s.slidesPerGroup;
              "auto" === s.slidesPerView &&
                1 === s.slidesPerGroup &&
                s.slidesPerGroupAuto &&
                (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
              var l = i.activeIndex < s.slidesPerGroupSkip ? 1 : o,
                d = i.virtual && s.virtual.enabled;
              if (s.loop) {
                if (a && !d && s.loopPreventsSliding) return !1;
                if (
                  (i.loopFix({ direction: "next" }),
                  (i._clientLeft = i.wrapperEl.clientLeft),
                  i.activeIndex === i.slides.length - 1 && s.cssMode)
                )
                  return (
                    requestAnimationFrame(function () {
                      i.slideTo(i.activeIndex + l, e, t, r);
                    }),
                    !0
                  );
              }
              return s.rewind && i.isEnd
                ? i.slideTo(0, e, t, r)
                : i.slideTo(i.activeIndex + l, e, t, r);
            },
            slidePrev: function (e, t, r) {
              void 0 === t && (t = !0);
              var i,
                n = this,
                s = n.params,
                a = n.snapGrid,
                o = n.slidesGrid,
                l = n.rtlTranslate,
                d = n.enabled,
                c = n.animating;
              if (!d || n.destroyed) return n;
              void 0 === e && (e = n.params.speed);
              var u = n.virtual && s.virtual.enabled;
              if (s.loop) {
                if (c && !u && s.loopPreventsSliding) return !1;
                (n.loopFix({ direction: "prev" }),
                  (n._clientLeft = n.wrapperEl.clientLeft));
              }
              function p(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              var h = p(l ? n.translate : -n.translate),
                f = a.map(function (e) {
                  return p(e);
                }),
                v = s.freeMode && s.freeMode.enabled,
                m = a[f.indexOf(h) - 1];
              void 0 === m &&
                (s.cssMode || v) &&
                (a.forEach(function (e, t) {
                  h >= e && (i = t);
                }),
                void 0 !== i && (m = v ? a[i] : a[i > 0 ? i - 1 : i]));
              var g = 0;
              if (
                (void 0 !== m &&
                  ((g = o.indexOf(m)) < 0 && (g = n.activeIndex - 1),
                  "auto" === s.slidesPerView &&
                    1 === s.slidesPerGroup &&
                    s.slidesPerGroupAuto &&
                    (g = Math.max(
                      (g = g - n.slidesPerViewDynamic("previous", !0) + 1),
                      0,
                    ))),
                s.rewind && n.isBeginning)
              ) {
                var w =
                  n.params.virtual && n.params.virtual.enabled && n.virtual
                    ? n.virtual.slides.length - 1
                    : n.slides.length - 1;
                return n.slideTo(w, e, t, r);
              }
              return s.loop && 0 === n.activeIndex && s.cssMode
                ? (requestAnimationFrame(function () {
                    n.slideTo(g, e, t, r);
                  }),
                  !0)
                : n.slideTo(g, e, t, r);
            },
            slideReset: function (e, t, r) {
              if ((void 0 === t && (t = !0), !this.destroyed))
                return (
                  void 0 === e && (e = this.params.speed),
                  this.slideTo(this.activeIndex, e, t, r)
                );
            },
            slideToClosest: function (e, t, r, i) {
              if (
                (void 0 === t && (t = !0),
                void 0 === i && (i = 0.5),
                !this.destroyed)
              ) {
                void 0 === e && (e = this.params.speed);
                var n = this.activeIndex,
                  s = Math.min(this.params.slidesPerGroupSkip, n),
                  a = s + Math.floor((n - s) / this.params.slidesPerGroup),
                  o = this.rtlTranslate ? this.translate : -this.translate;
                if (o >= this.snapGrid[a]) {
                  var l = this.snapGrid[a];
                  o - l > (this.snapGrid[a + 1] - l) * i &&
                    (n += this.params.slidesPerGroup);
                } else {
                  var d = this.snapGrid[a - 1];
                  o - d <= (this.snapGrid[a] - d) * i &&
                    (n -= this.params.slidesPerGroup);
                }
                return (
                  (n = Math.min(
                    (n = Math.max(n, 0)),
                    this.slidesGrid.length - 1,
                  )),
                  this.slideTo(n, e, t, r)
                );
              }
            },
            slideToClickedSlide: function () {
              var e,
                t = this;
              if (!t.destroyed) {
                var r = t.params,
                  i = t.slidesEl,
                  n =
                    "auto" === r.slidesPerView
                      ? t.slidesPerViewDynamic()
                      : r.slidesPerView,
                  s = t.getSlideIndexWhenGrid(t.clickedIndex),
                  a = t.isElement ? "swiper-slide" : ".".concat(r.slideClass),
                  o = t.grid && t.params.grid && t.params.grid.rows > 1;
                if (r.loop) {
                  if (t.animating) return;
                  ((e = parseInt(
                    t.clickedSlide.getAttribute("data-swiper-slide-index"),
                    10,
                  )),
                    r.centeredSlides
                      ? t.slideToLoop(e)
                      : s >
                          (o
                            ? (t.slides.length - n) / 2 -
                              (t.params.grid.rows - 1)
                            : t.slides.length - n)
                        ? (t.loopFix(),
                          (s = t.getSlideIndex(
                            (0, h.e)(
                              i,
                              ""
                                .concat(a, '[data-swiper-slide-index="')
                                .concat(e, '"]'),
                            )[0],
                          )),
                          (0, h.n)(function () {
                            t.slideTo(s);
                          }))
                        : t.slideTo(s));
                } else t.slideTo(s);
              }
            },
          },
          loop: {
            loopCreate: function (e, t) {
              var r = this,
                i = r.params,
                n = r.slidesEl;
              if (i.loop && (!r.virtual || !r.params.virtual.enabled)) {
                var s,
                  a = function () {
                    (0, h.e)(
                      n,
                      ".".concat(i.slideClass, ", swiper-slide"),
                    ).forEach(function (e, t) {
                      e.setAttribute("data-swiper-slide-index", t);
                    });
                  },
                  o = r.grid && i.grid && i.grid.rows > 1;
                i.loopAddBlankSlides &&
                  (i.slidesPerGroup > 1 || o) &&
                  ((s = (0, h.e)(n, ".".concat(i.slideBlankClass))).forEach(
                    function (e) {
                      e.remove();
                    },
                  ),
                  s.length > 0 && (r.recalcSlides(), r.updateSlides()));
                var l = i.slidesPerGroup * (o ? i.grid.rows : 1),
                  d = r.slides.length % l != 0,
                  c = o && r.slides.length % i.grid.rows != 0,
                  u = function (e) {
                    for (var t = 0; t < e; t += 1) {
                      var n = r.isElement
                        ? (0, h.c)("swiper-slide", [i.slideBlankClass])
                        : (0, h.c)("div", [i.slideClass, i.slideBlankClass]);
                      r.slidesEl.append(n);
                    }
                  };
                (d
                  ? (i.loopAddBlankSlides
                      ? (u(l - (r.slides.length % l)),
                        r.recalcSlides(),
                        r.updateSlides())
                      : (0, h.v)(
                          "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
                        ),
                    a())
                  : (c &&
                      (i.loopAddBlankSlides
                        ? (u(i.grid.rows - (r.slides.length % i.grid.rows)),
                          r.recalcSlides(),
                          r.updateSlides())
                        : (0, h.v)(
                            "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
                          )),
                    a()),
                  r.loopFix({
                    slideRealIndex: e,
                    direction: i.centeredSlides ? void 0 : "next",
                    initial: t,
                  }));
              }
            },
            loopFix: function (e) {
              var t = void 0 === e ? {} : e,
                r = t.slideRealIndex,
                i = t.slideTo,
                n = void 0 === i || i,
                s = t.direction,
                a = t.setTranslate,
                o = t.activeSlideIndex,
                l = t.initial,
                d = t.byController,
                c = t.byMousewheel,
                u = this;
              if (u.params.loop) {
                u.emit("beforeLoopFix");
                var p = u.slides,
                  f = u.allowSlidePrev,
                  m = u.allowSlideNext,
                  g = u.slidesEl,
                  w = u.params,
                  y = w.centeredSlides,
                  b = w.initialSlide;
                if (
                  ((u.allowSlidePrev = !0),
                  (u.allowSlideNext = !0),
                  u.virtual && w.virtual.enabled)
                ) {
                  (n &&
                    (w.centeredSlides || 0 !== u.snapIndex
                      ? w.centeredSlides && u.snapIndex < w.slidesPerView
                        ? u.slideTo(
                            u.virtual.slides.length + u.snapIndex,
                            0,
                            !1,
                            !0,
                          )
                        : u.snapIndex === u.snapGrid.length - 1 &&
                          u.slideTo(u.virtual.slidesBefore, 0, !1, !0)
                      : u.slideTo(u.virtual.slides.length, 0, !1, !0)),
                    (u.allowSlidePrev = f),
                    (u.allowSlideNext = m),
                    u.emit("loopFix"));
                  return;
                }
                var S = w.slidesPerView;
                "auto" === S
                  ? (S = u.slidesPerViewDynamic())
                  : ((S = Math.ceil(parseFloat(w.slidesPerView, 10))),
                    y && S % 2 == 0 && (S += 1));
                var T = w.slidesPerGroupAuto ? S : w.slidesPerGroup,
                  E = y ? Math.max(T, Math.ceil(S / 2)) : T;
                (E % T != 0 && (E += T - (E % T)),
                  (E += w.loopAdditionalSlides),
                  (u.loopedSlides = E));
                var x = u.grid && w.grid && w.grid.rows > 1;
                p.length < S + E ||
                ("cards" === u.params.effect && p.length < S + 2 * E)
                  ? (0, h.v)(
                      "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
                    )
                  : x &&
                    "row" === w.grid.fill &&
                    (0, h.v)(
                      "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
                    );
                var M = [],
                  k = [],
                  C = x ? Math.ceil(p.length / w.grid.rows) : p.length,
                  P = l && C - b < S && !y,
                  I = P ? b : u.activeIndex;
                void 0 === o
                  ? (o = u.getSlideIndex(
                      p.find(function (e) {
                        return e.classList.contains(w.slideActiveClass);
                      }),
                    ))
                  : (I = o);
                var A = "next" === s || !s,
                  O = "prev" === s || !s,
                  L = 0,
                  z = 0,
                  _ =
                    (x ? p[o].column : o) +
                    (y && void 0 === a ? -S / 2 + 0.5 : 0);
                if (_ < E) {
                  L = Math.max(E - _, T);
                  for (var N = 0; N < E - _; N += 1) {
                    var R = N - Math.floor(N / C) * C;
                    if (x)
                      for (var D = C - R - 1, G = p.length - 1; G >= 0; G -= 1)
                        p[G].column === D && M.push(G);
                    else M.push(C - R - 1);
                  }
                } else if (_ + S > C - E) {
                  ((z = Math.max(_ - (C - 2 * E), T)),
                    P && (z = Math.max(z, S - C + b + 1)));
                  for (var F = 0; F < z; F += 1)
                    !(function () {
                      var e = F - Math.floor(F / C) * C;
                      x
                        ? p.forEach(function (t, r) {
                            t.column === e && k.push(r);
                          })
                        : k.push(e);
                    })();
                }
                if (
                  ((u.__preventObserver__ = !0),
                  requestAnimationFrame(function () {
                    u.__preventObserver__ = !1;
                  }),
                  "cards" === u.params.effect &&
                    p.length < S + 2 * E &&
                    (k.includes(o) && k.splice(k.indexOf(o), 1),
                    M.includes(o) && M.splice(M.indexOf(o), 1)),
                  O &&
                    M.forEach(function (e) {
                      ((p[e].swiperLoopMoveDOM = !0),
                        g.prepend(p[e]),
                        (p[e].swiperLoopMoveDOM = !1));
                    }),
                  A &&
                    k.forEach(function (e) {
                      ((p[e].swiperLoopMoveDOM = !0),
                        g.append(p[e]),
                        (p[e].swiperLoopMoveDOM = !1));
                    }),
                  u.recalcSlides(),
                  "auto" === w.slidesPerView
                    ? u.updateSlides()
                    : x &&
                      ((M.length > 0 && O) || (k.length > 0 && A)) &&
                      u.slides.forEach(function (e, t) {
                        u.grid.updateSlide(t, e, u.slides);
                      }),
                  w.watchSlidesProgress && u.updateSlidesOffset(),
                  n)
                ) {
                  if (M.length > 0 && O) {
                    if (void 0 === r) {
                      var B = u.slidesGrid[I],
                        V = u.slidesGrid[I + L] - B;
                      c
                        ? u.setTranslate(u.translate - V)
                        : (u.slideTo(I + Math.ceil(L), 0, !1, !0),
                          a &&
                            ((u.touchEventsData.startTranslate =
                              u.touchEventsData.startTranslate - V),
                            (u.touchEventsData.currentTranslate =
                              u.touchEventsData.currentTranslate - V)));
                    } else if (a) {
                      var H = x ? M.length / w.grid.rows : M.length;
                      (u.slideTo(u.activeIndex + H, 0, !1, !0),
                        (u.touchEventsData.currentTranslate = u.translate));
                    }
                  } else if (k.length > 0 && A) {
                    if (void 0 === r) {
                      var j = u.slidesGrid[I],
                        q = u.slidesGrid[I - z] - j;
                      c
                        ? u.setTranslate(u.translate - q)
                        : (u.slideTo(I - z, 0, !1, !0),
                          a &&
                            ((u.touchEventsData.startTranslate =
                              u.touchEventsData.startTranslate - q),
                            (u.touchEventsData.currentTranslate =
                              u.touchEventsData.currentTranslate - q)));
                    } else {
                      var W = x ? k.length / w.grid.rows : k.length;
                      u.slideTo(u.activeIndex - W, 0, !1, !0);
                    }
                  }
                }
                if (
                  ((u.allowSlidePrev = f),
                  (u.allowSlideNext = m),
                  u.controller && u.controller.control && !d)
                ) {
                  var Z = {
                    slideRealIndex: r,
                    direction: s,
                    setTranslate: a,
                    activeSlideIndex: o,
                    byController: !0,
                  };
                  Array.isArray(u.controller.control)
                    ? u.controller.control.forEach(function (e) {
                        !e.destroyed &&
                          e.params.loop &&
                          e.loopFix(
                            v(
                              v({}, Z),
                              {},
                              {
                                slideTo:
                                  e.params.slidesPerView === w.slidesPerView &&
                                  n,
                              },
                            ),
                          );
                      })
                    : u.controller.control instanceof u.constructor &&
                      u.controller.control.params.loop &&
                      u.controller.control.loopFix(
                        v(
                          v({}, Z),
                          {},
                          {
                            slideTo:
                              u.controller.control.params.slidesPerView ===
                                w.slidesPerView && n,
                          },
                        ),
                      );
                }
                u.emit("loopFix");
              }
            },
            loopDestroy: function () {
              var e = this.params,
                t = this.slidesEl;
              if (
                e.loop &&
                t &&
                (!this.virtual || !this.params.virtual.enabled)
              ) {
                this.recalcSlides();
                var r = [];
                (this.slides.forEach(function (e) {
                  r[
                    void 0 === e.swiperSlideIndex
                      ? 1 * e.getAttribute("data-swiper-slide-index")
                      : e.swiperSlideIndex
                  ] = e;
                }),
                  this.slides.forEach(function (e) {
                    e.removeAttribute("data-swiper-slide-index");
                  }),
                  r.forEach(function (e) {
                    t.append(e);
                  }),
                  this.recalcSlides(),
                  this.slideTo(this.realIndex, 0));
              }
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              var t = this;
              if (
                t.params.simulateTouch &&
                (!t.params.watchOverflow || !t.isLocked) &&
                !t.params.cssMode
              ) {
                var r =
                  "container" === t.params.touchEventsTarget
                    ? t.el
                    : t.wrapperEl;
                (t.isElement && (t.__preventObserver__ = !0),
                  (r.style.cursor = "move"),
                  (r.style.cursor = e ? "grabbing" : "grab"),
                  t.isElement &&
                    requestAnimationFrame(function () {
                      t.__preventObserver__ = !1;
                    }));
              }
            },
            unsetGrabCursor: function () {
              var e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = ""),
                e.isElement &&
                  requestAnimationFrame(function () {
                    e.__preventObserver__ = !1;
                  }));
            },
          },
          events: {
            attachEvents: function () {
              var e = this,
                t = e.params;
              ((e.onTouchStart = k.bind(e)),
                (e.onTouchMove = C.bind(e)),
                (e.onTouchEnd = P.bind(e)),
                (e.onDocumentTouchStart = z.bind(e)),
                t.cssMode && (e.onScroll = O.bind(e)),
                (e.onClick = A.bind(e)),
                (e.onLoad = L.bind(e)),
                _(e, "on"));
            },
            detachEvents: function () {
              _(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              var e = this,
                t = e.realIndex,
                r = e.initialized,
                i = e.params,
                n = e.el,
                s = i.breakpoints;
              if (s && (!s || 0 !== Object.keys(s).length)) {
                var a = (0, p.g)(),
                  o =
                    "window" !== i.breakpointsBase && i.breakpointsBase
                      ? "container"
                      : i.breakpointsBase,
                  l =
                    ["window", "container"].includes(i.breakpointsBase) ||
                    !i.breakpointsBase
                      ? e.el
                      : a.querySelector(i.breakpointsBase),
                  d = e.getBreakpoint(s, o, l);
                if (d && e.currentBreakpoint !== d) {
                  var c = (d in s ? s[d] : void 0) || e.originalParams,
                    u = N(e, i),
                    f = N(e, c),
                    v = e.params.grabCursor,
                    m = c.grabCursor,
                    g = i.enabled;
                  (u && !f
                    ? (n.classList.remove(
                        "".concat(i.containerModifierClass, "grid"),
                        "".concat(i.containerModifierClass, "grid-column"),
                      ),
                      e.emitContainerClasses())
                    : !u &&
                      f &&
                      (n.classList.add(
                        "".concat(i.containerModifierClass, "grid"),
                      ),
                      ((c.grid.fill && "column" === c.grid.fill) ||
                        (!c.grid.fill && "column" === i.grid.fill)) &&
                        n.classList.add(
                          "".concat(i.containerModifierClass, "grid-column"),
                        ),
                      e.emitContainerClasses()),
                    v && !m
                      ? e.unsetGrabCursor()
                      : !v && m && e.setGrabCursor(),
                    ["navigation", "pagination", "scrollbar"].forEach(
                      function (t) {
                        if (void 0 !== c[t]) {
                          var r = i[t] && i[t].enabled,
                            n = c[t] && c[t].enabled;
                          (r && !n && e[t].disable(), !r && n && e[t].enable());
                        }
                      },
                    ));
                  var w = c.direction && c.direction !== i.direction,
                    y = i.loop && (c.slidesPerView !== i.slidesPerView || w),
                    b = i.loop;
                  (w && r && e.changeDirection(), (0, h.x)(e.params, c));
                  var S = e.params.enabled,
                    T = e.params.loop;
                  (Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev,
                  }),
                    g && !S ? e.disable() : !g && S && e.enable(),
                    (e.currentBreakpoint = d),
                    e.emit("_beforeBreakpoint", c),
                    r &&
                      (y
                        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                        : !b && T
                          ? (e.loopCreate(t), e.updateSlides())
                          : b && !T && e.loopDestroy()),
                    e.emit("breakpoint", c));
                }
              }
            },
            getBreakpoint: function (e, t, r) {
              if (
                (void 0 === t && (t = "window"), e && ("container" !== t || r))
              ) {
                var i = !1,
                  n = (0, p.a)(),
                  s = "window" === t ? n.innerHeight : r.clientHeight,
                  a = Object.keys(e).map(function (e) {
                    return "string" == typeof e && 0 === e.indexOf("@")
                      ? { value: s * parseFloat(e.substr(1)), point: e }
                      : { value: e, point: e };
                  });
                a.sort(function (e, t) {
                  return parseInt(e.value, 10) - parseInt(t.value, 10);
                });
                for (var o = 0; o < a.length; o += 1) {
                  var l = a[o],
                    d = l.point,
                    c = l.value;
                  "window" === t
                    ? n.matchMedia("(min-width: ".concat(c, "px)")).matches &&
                      (i = d)
                    : c <= r.clientWidth && (i = d);
                }
                return i || "max";
              }
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              var e = this,
                t = e.isLocked,
                r = e.params,
                i = r.slidesOffsetBefore;
              if (i) {
                var n = e.slides.length - 1,
                  s = e.slidesGrid[n] + e.slidesSizesGrid[n] + 2 * i;
                e.isLocked = e.size > s;
              } else e.isLocked = 1 === e.snapGrid.length;
              (!0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"));
            },
          },
          classes: {
            addClasses: function () {
              var e,
                t,
                r,
                i,
                n = this.classNames,
                s = this.params,
                a = this.rtl,
                o = this.el,
                d = this.device,
                u =
                  ((t = [
                    "initialized",
                    s.direction,
                    { "free-mode": this.params.freeMode && s.freeMode.enabled },
                    { autoheight: s.autoHeight },
                    { rtl: a },
                    { grid: s.grid && s.grid.rows > 1 },
                    {
                      "grid-column":
                        s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                    },
                    { android: d.android },
                    { ios: d.ios },
                    { "css-mode": s.cssMode },
                    { centered: s.cssMode && s.centeredSlides },
                    { "watch-progress": s.watchSlidesProgress },
                  ]),
                  (r = s.containerModifierClass),
                  (i = []),
                  t.forEach(function (e) {
                    "object" === (0, l.Z)(e)
                      ? Object.keys(e).forEach(function (t) {
                          e[t] && i.push(r + t);
                        })
                      : "string" == typeof e && i.push(r + e);
                  }),
                  i);
              (n.push.apply(n, (0, c.Z)(u)),
                (e = o.classList).add.apply(e, (0, c.Z)(n)),
                this.emitContainerClasses());
            },
            removeClasses: function () {
              var e,
                t = this.el,
                r = this.classNames;
              t &&
                "string" != typeof t &&
                ((e = t.classList).remove.apply(e, (0, c.Z)(r)),
                this.emitContainerClasses());
            },
          },
        },
        G = {},
        F = (function () {
          function e() {
            (0, a.Z)(this, e);
            for (
              var t, r, i, n = arguments.length, s = Array(n), o = 0;
              o < n;
              o++
            )
              s[o] = arguments[o];
            (1 === s.length &&
            s[0].constructor &&
            "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
              ? (r = s[0])
              : ((t = s[0]), (r = s[1])),
              r || (r = {}),
              (r = (0, h.x)({}, r)),
              t && !r.el && (r.el = t));
            var d = (0, p.g)();
            if (
              r.el &&
              "string" == typeof r.el &&
              d.querySelectorAll(r.el).length > 1
            ) {
              var u = [];
              return (
                d.querySelectorAll(r.el).forEach(function (t) {
                  var i = (0, h.x)({}, r, { el: t });
                  u.push(new e(i));
                }),
                u
              );
            }
            var f = this;
            ((f.__swiper__ = !0),
              (f.support = m()),
              (f.device = g({ userAgent: r.userAgent })),
              (f.browser = w()),
              (f.eventsListeners = {}),
              (f.eventsAnyListeners = []),
              (f.modules = (0, c.Z)(f.__modules__)),
              r.modules &&
                Array.isArray(r.modules) &&
                (i = f.modules).push.apply(i, (0, c.Z)(r.modules)));
            var v = {};
            f.modules.forEach(function (e) {
              var t;
              e({
                params: r,
                swiper: f,
                extendParams:
                  ((t = r),
                  function (e) {
                    void 0 === e && (e = {});
                    var r = Object.keys(e)[0],
                      i = e[r];
                    if (
                      "object" !== (0, l.Z)(i) ||
                      null === i ||
                      (!0 === t[r] && (t[r] = { enabled: !0 }),
                      "navigation" === r &&
                        t[r] &&
                        t[r].enabled &&
                        !t[r].prevEl &&
                        !t[r].nextEl &&
                        (t[r].auto = !0),
                      ["pagination", "scrollbar"].indexOf(r) >= 0 &&
                        t[r] &&
                        t[r].enabled &&
                        !t[r].el &&
                        (t[r].auto = !0),
                      !(r in t && "enabled" in i))
                    ) {
                      (0, h.x)(v, e);
                      return;
                    }
                    ("object" !== (0, l.Z)(t[r]) ||
                      "enabled" in t[r] ||
                      (t[r].enabled = !0),
                      t[r] || (t[r] = { enabled: !1 }),
                      (0, h.x)(v, e));
                  }),
                on: f.on.bind(f),
                once: f.once.bind(f),
                off: f.off.bind(f),
                emit: f.emit.bind(f),
              });
            });
            var y = (0, h.x)({}, R, v);
            return (
              (f.params = (0, h.x)({}, y, G, r)),
              (f.originalParams = (0, h.x)({}, f.params)),
              (f.passedParams = (0, h.x)({}, r)),
              f.params &&
                f.params.on &&
                Object.keys(f.params.on).forEach(function (e) {
                  f.on(e, f.params.on[e]);
                }),
              f.params && f.params.onAny && f.onAny(f.params.onAny),
              Object.assign(f, {
                enabled: f.params.enabled,
                el: t,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return "horizontal" === f.params.direction;
                },
                isVertical: function () {
                  return "vertical" === f.params.direction;
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment: function () {
                  return 8388608 * Math.trunc(this.translate / 8388608);
                },
                allowSlideNext: f.params.allowSlideNext,
                allowSlidePrev: f.params.allowSlidePrev,
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  focusableElements: f.params.focusableElements,
                  lastClickTime: 0,
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  startMoving: void 0,
                  pointerId: null,
                  touchId: null,
                },
                allowClick: !0,
                allowTouchMove: f.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              f.emit("_swiper"),
              f.params.init && f.init(),
              f
            );
          }
          return (0, o.Z)(
            e,
            [
              {
                key: "getDirectionLabel",
                value: function (e) {
                  return this.isHorizontal()
                    ? e
                    : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom",
                      }[e];
                },
              },
              {
                key: "getSlideIndex",
                value: function (e) {
                  var t = this.slidesEl,
                    r = this.params,
                    i = (0, h.e)(t, ".".concat(r.slideClass, ", swiper-slide")),
                    n = (0, h.i)(i[0]);
                  return (0, h.i)(e) - n;
                },
              },
              {
                key: "getSlideIndexByData",
                value: function (e) {
                  return this.getSlideIndex(
                    this.slides.find(function (t) {
                      return (
                        1 * t.getAttribute("data-swiper-slide-index") === e
                      );
                    }),
                  );
                },
              },
              {
                key: "getSlideIndexWhenGrid",
                value: function (e) {
                  return (
                    this.grid &&
                      this.params.grid &&
                      this.params.grid.rows > 1 &&
                      ("column" === this.params.grid.fill
                        ? (e = Math.floor(e / this.params.grid.rows))
                        : "row" === this.params.grid.fill &&
                          (e %= Math.ceil(
                            this.slides.length / this.params.grid.rows,
                          ))),
                    e
                  );
                },
              },
              {
                key: "recalcSlides",
                value: function () {
                  var e = this,
                    t = e.slidesEl,
                    r = e.params;
                  e.slides = (0, h.e)(
                    t,
                    ".".concat(r.slideClass, ", swiper-slide"),
                  );
                },
              },
              {
                key: "enable",
                value: function () {
                  var e = this;
                  e.enabled ||
                    ((e.enabled = !0),
                    e.params.grabCursor && e.setGrabCursor(),
                    e.emit("enable"));
                },
              },
              {
                key: "disable",
                value: function () {
                  var e = this;
                  e.enabled &&
                    ((e.enabled = !1),
                    e.params.grabCursor && e.unsetGrabCursor(),
                    e.emit("disable"));
                },
              },
              {
                key: "setProgress",
                value: function (e, t) {
                  e = Math.min(Math.max(e, 0), 1);
                  var r = this.minTranslate(),
                    i = (this.maxTranslate() - r) * e + r;
                  (this.translateTo(i, void 0 === t ? 0 : t),
                    this.updateActiveIndex(),
                    this.updateSlidesClasses());
                },
              },
              {
                key: "emitContainerClasses",
                value: function () {
                  var e = this;
                  if (e.params._emitClasses && e.el) {
                    var t = e.el.className.split(" ").filter(function (t) {
                      return (
                        0 === t.indexOf("swiper") ||
                        0 === t.indexOf(e.params.containerModifierClass)
                      );
                    });
                    e.emit("_containerClasses", t.join(" "));
                  }
                },
              },
              {
                key: "getSlideClasses",
                value: function (e) {
                  var t = this;
                  return t.destroyed
                    ? ""
                    : e.className
                        .split(" ")
                        .filter(function (e) {
                          return (
                            0 === e.indexOf("swiper-slide") ||
                            0 === e.indexOf(t.params.slideClass)
                          );
                        })
                        .join(" ");
                },
              },
              {
                key: "emitSlidesClasses",
                value: function () {
                  var e = this;
                  if (e.params._emitClasses && e.el) {
                    var t = [];
                    (e.slides.forEach(function (r) {
                      var i = e.getSlideClasses(r);
                      (t.push({ slideEl: r, classNames: i }),
                        e.emit("_slideClass", r, i));
                    }),
                      e.emit("_slideClasses", t));
                  }
                },
              },
              {
                key: "slidesPerViewDynamic",
                value: function (e, t) {
                  (void 0 === e && (e = "current"), void 0 === t && (t = !1));
                  var r = this.params,
                    i = this.slides,
                    n = this.slidesGrid,
                    s = this.slidesSizesGrid,
                    a = this.size,
                    o = this.activeIndex,
                    l = 1;
                  if ("number" == typeof r.slidesPerView)
                    return r.slidesPerView;
                  if (r.centeredSlides) {
                    for (
                      var d,
                        c = i[o] ? Math.ceil(i[o].swiperSlideSize) : 0,
                        u = o + 1;
                      u < i.length;
                      u += 1
                    )
                      i[u] &&
                        !d &&
                        ((c += Math.ceil(i[u].swiperSlideSize)),
                        (l += 1),
                        c > a && (d = !0));
                    for (var p = o - 1; p >= 0; p -= 1)
                      i[p] &&
                        !d &&
                        ((c += i[p].swiperSlideSize),
                        (l += 1),
                        c > a && (d = !0));
                  } else if ("current" === e)
                    for (var h = o + 1; h < i.length; h += 1)
                      (t ? n[h] + s[h] - n[o] < a : n[h] - n[o] < a) &&
                        (l += 1);
                  else
                    for (var f = o - 1; f >= 0; f -= 1)
                      n[o] - n[f] < a && (l += 1);
                  return l;
                },
              },
              {
                key: "update",
                value: function () {
                  var e,
                    t = this;
                  if (t && !t.destroyed) {
                    var r = t.snapGrid,
                      i = t.params;
                    if (
                      (i.breakpoints && t.setBreakpoint(),
                      (0, c.Z)(
                        t.el.querySelectorAll('[loading="lazy"]'),
                      ).forEach(function (e) {
                        e.complete && S(t, e);
                      }),
                      t.updateSize(),
                      t.updateSlides(),
                      t.updateProgress(),
                      t.updateSlidesClasses(),
                      i.freeMode && i.freeMode.enabled && !i.cssMode)
                    )
                      (s(), i.autoHeight && t.updateAutoHeight());
                    else {
                      if (
                        ("auto" === i.slidesPerView || i.slidesPerView > 1) &&
                        t.isEnd &&
                        !i.centeredSlides
                      ) {
                        var n =
                          t.virtual && i.virtual.enabled
                            ? t.virtual.slides
                            : t.slides;
                        e = t.slideTo(n.length - 1, 0, !1, !0);
                      } else e = t.slideTo(t.activeIndex, 0, !1, !0);
                      e || s();
                    }
                    (i.watchOverflow && r !== t.snapGrid && t.checkOverflow(),
                      t.emit("update"));
                  }
                  function s() {
                    var e = Math.min(
                      Math.max(
                        t.rtlTranslate ? -1 * t.translate : t.translate,
                        t.maxTranslate(),
                      ),
                      t.minTranslate(),
                    );
                    (t.setTranslate(e),
                      t.updateActiveIndex(),
                      t.updateSlidesClasses());
                  }
                },
              },
              {
                key: "changeDirection",
                value: function (e, t) {
                  void 0 === t && (t = !0);
                  var r = this,
                    i = r.params.direction;
                  return (
                    e || (e = "horizontal" === i ? "vertical" : "horizontal"),
                    e === i ||
                      ("horizontal" !== e && "vertical" !== e) ||
                      (r.el.classList.remove(
                        "".concat(r.params.containerModifierClass).concat(i),
                      ),
                      r.el.classList.add(
                        "".concat(r.params.containerModifierClass).concat(e),
                      ),
                      r.emitContainerClasses(),
                      (r.params.direction = e),
                      r.slides.forEach(function (t) {
                        "vertical" === e
                          ? (t.style.width = "")
                          : (t.style.height = "");
                      }),
                      r.emit("changeDirection"),
                      t && r.update()),
                    r
                  );
                },
              },
              {
                key: "changeLanguageDirection",
                value: function (e) {
                  var t = this;
                  (!t.rtl || "rtl" !== e) &&
                    (t.rtl || "ltr" !== e) &&
                    ((t.rtl = "rtl" === e),
                    (t.rtlTranslate =
                      "horizontal" === t.params.direction && t.rtl),
                    t.rtl
                      ? (t.el.classList.add(
                          "".concat(t.params.containerModifierClass, "rtl"),
                        ),
                        (t.el.dir = "rtl"))
                      : (t.el.classList.remove(
                          "".concat(t.params.containerModifierClass, "rtl"),
                        ),
                        (t.el.dir = "ltr")),
                    t.update());
                },
              },
              {
                key: "mount",
                value: function (e) {
                  var t = this;
                  if (t.mounted) return !0;
                  var r = e || t.params.el;
                  if (
                    ("string" == typeof r && (r = document.querySelector(r)),
                    !r)
                  )
                    return !1;
                  ((r.swiper = t),
                    r.parentNode &&
                      r.parentNode.host &&
                      r.parentNode.host.nodeName ===
                        t.params.swiperElementNodeName.toUpperCase() &&
                      (t.isElement = !0));
                  var i = function () {
                      return ".".concat(
                        (t.params.wrapperClass || "")
                          .trim()
                          .split(" ")
                          .join("."),
                      );
                    },
                    n =
                      r && r.shadowRoot && r.shadowRoot.querySelector
                        ? r.shadowRoot.querySelector(i())
                        : (0, h.e)(r, i())[0];
                  return (
                    !n &&
                      t.params.createElements &&
                      ((n = (0, h.c)("div", t.params.wrapperClass)),
                      r.append(n),
                      (0, h.e)(r, ".".concat(t.params.slideClass)).forEach(
                        function (e) {
                          n.append(e);
                        },
                      )),
                    Object.assign(t, {
                      el: r,
                      wrapperEl: n,
                      slidesEl:
                        t.isElement && !r.parentNode.host.slideSlots
                          ? r.parentNode.host
                          : n,
                      hostEl: t.isElement ? r.parentNode.host : r,
                      mounted: !0,
                      rtl:
                        "rtl" === r.dir.toLowerCase() ||
                        "rtl" === (0, h.q)(r, "direction"),
                      rtlTranslate:
                        "horizontal" === t.params.direction &&
                        ("rtl" === r.dir.toLowerCase() ||
                          "rtl" === (0, h.q)(r, "direction")),
                      wrongRTL: "-webkit-box" === (0, h.q)(n, "display"),
                    }),
                    !0
                  );
                },
              },
              {
                key: "init",
                value: function (e) {
                  var t = this;
                  if (t.initialized || !1 === t.mount(e)) return t;
                  (t.emit("beforeInit"),
                    t.params.breakpoints && t.setBreakpoint(),
                    t.addClasses(),
                    t.updateSize(),
                    t.updateSlides(),
                    t.params.watchOverflow && t.checkOverflow(),
                    t.params.grabCursor && t.enabled && t.setGrabCursor(),
                    t.params.loop && t.virtual && t.params.virtual.enabled
                      ? t.slideTo(
                          t.params.initialSlide + t.virtual.slidesBefore,
                          0,
                          t.params.runCallbacksOnInit,
                          !1,
                          !0,
                        )
                      : t.slideTo(
                          t.params.initialSlide,
                          0,
                          t.params.runCallbacksOnInit,
                          !1,
                          !0,
                        ),
                    t.params.loop && t.loopCreate(void 0, !0),
                    t.attachEvents());
                  var r = (0, c.Z)(t.el.querySelectorAll('[loading="lazy"]'));
                  return (
                    t.isElement &&
                      r.push.apply(
                        r,
                        (0, c.Z)(t.hostEl.querySelectorAll('[loading="lazy"]')),
                      ),
                    r.forEach(function (e) {
                      e.complete
                        ? S(t, e)
                        : e.addEventListener("load", function (e) {
                            S(t, e.target);
                          });
                    }),
                    E(t),
                    (t.initialized = !0),
                    E(t),
                    t.emit("init"),
                    t.emit("afterInit"),
                    t
                  );
                },
              },
              {
                key: "destroy",
                value: function (e, t) {
                  (void 0 === e && (e = !0), void 0 === t && (t = !0));
                  var r = this,
                    i = r.params,
                    n = r.el,
                    s = r.wrapperEl,
                    a = r.slides;
                  return (
                    void 0 === r.params ||
                      r.destroyed ||
                      (r.emit("beforeDestroy"),
                      (r.initialized = !1),
                      r.detachEvents(),
                      i.loop && r.loopDestroy(),
                      t &&
                        (r.removeClasses(),
                        n && "string" != typeof n && n.removeAttribute("style"),
                        s && s.removeAttribute("style"),
                        a &&
                          a.length &&
                          a.forEach(function (e) {
                            (e.classList.remove(
                              i.slideVisibleClass,
                              i.slideFullyVisibleClass,
                              i.slideActiveClass,
                              i.slideNextClass,
                              i.slidePrevClass,
                            ),
                              e.removeAttribute("style"),
                              e.removeAttribute("data-swiper-slide-index"));
                          })),
                      r.emit("destroy"),
                      Object.keys(r.eventsListeners).forEach(function (e) {
                        r.off(e);
                      }),
                      !1 !== e &&
                        (r.el &&
                          "string" != typeof r.el &&
                          (r.el.swiper = null),
                        (0, h.y)(r)),
                      (r.destroyed = !0)),
                    null
                  );
                },
              },
            ],
            [
              {
                key: "extendDefaults",
                value: function (e) {
                  (0, h.x)(G, e);
                },
              },
              {
                key: "extendedDefaults",
                get: function () {
                  return G;
                },
              },
              {
                key: "defaults",
                get: function () {
                  return R;
                },
              },
              {
                key: "installModule",
                value: function (t) {
                  e.prototype.__modules__ || (e.prototype.__modules__ = []);
                  var r = e.prototype.__modules__;
                  "function" == typeof t && 0 > r.indexOf(t) && r.push(t);
                },
              },
              {
                key: "use",
                value: function (t) {
                  return Array.isArray(t)
                    ? (t.forEach(function (t) {
                        return e.installModule(t);
                      }),
                      e)
                    : (e.installModule(t), e);
                },
              },
            ],
          );
        })();
      (Object.keys(D).forEach(function (e) {
        Object.keys(D[e]).forEach(function (t) {
          F.prototype[t] = D[e][t];
        });
      }),
        F.use([
          function (e) {
            var t = e.swiper,
              r = e.on,
              i = e.emit,
              n = (0, p.a)(),
              s = null,
              a = null,
              o = function () {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (i("beforeResize"), i("resize"));
              },
              l = function () {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (s = new ResizeObserver(function (e) {
                    a = n.requestAnimationFrame(function () {
                      var r = t.width,
                        i = t.height,
                        n = r,
                        s = i;
                      (e.forEach(function (e) {
                        var r = e.contentBoxSize,
                          i = e.contentRect,
                          a = e.target;
                        (a && a !== t.el) ||
                          ((n = i ? i.width : (r[0] || r).inlineSize),
                          (s = i ? i.height : (r[0] || r).blockSize));
                      }),
                        (n !== r || s !== i) && o());
                    });
                  })).observe(t.el);
              },
              d = function () {
                (a && n.cancelAnimationFrame(a),
                  s && s.unobserve && t.el && (s.unobserve(t.el), (s = null)));
              },
              c = function () {
                t && !t.destroyed && t.initialized && i("orientationchange");
              };
            (r("init", function () {
              if (t.params.resizeObserver && void 0 !== n.ResizeObserver) {
                l();
                return;
              }
              (n.addEventListener("resize", o),
                n.addEventListener("orientationchange", c));
            }),
              r("destroy", function () {
                (d(),
                  n.removeEventListener("resize", o),
                  n.removeEventListener("orientationchange", c));
              }));
          },
          function (e) {
            var t = e.swiper,
              r = e.extendParams,
              i = e.on,
              n = e.emit,
              s = [],
              a = (0, p.a)(),
              o = function (e, r) {
                void 0 === r && (r = {});
                var i = new (a.MutationObserver || a.WebkitMutationObserver)(
                  function (e) {
                    if (!t.__preventObserver__) {
                      if (1 === e.length) {
                        n("observerUpdate", e[0]);
                        return;
                      }
                      var r = function () {
                        n("observerUpdate", e[0]);
                      };
                      a.requestAnimationFrame
                        ? a.requestAnimationFrame(r)
                        : a.setTimeout(r, 0);
                    }
                  },
                );
                (i.observe(e, {
                  attributes: void 0 === r.attributes || r.attributes,
                  childList:
                    t.isElement || (void 0 === r.childList || r).childList,
                  characterData: void 0 === r.characterData || r.characterData,
                }),
                  s.push(i));
              };
            (r({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i("init", function () {
                if (t.params.observer) {
                  if (t.params.observeParents)
                    for (
                      var e = (0, h.b)(t.hostEl), r = 0;
                      r < e.length;
                      r += 1
                    )
                      o(e[r]);
                  (o(t.hostEl, { childList: t.params.observeSlideChildren }),
                    o(t.wrapperEl, { attributes: !1 }));
                }
              }),
              i("destroy", function () {
                (s.forEach(function (e) {
                  e.disconnect();
                }),
                  s.splice(0, s.length));
              }));
          },
        ]));
    },
  },
]);
