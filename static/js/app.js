!function() {
   "use strict";
   function t(t) {
       if (void 0 === t)
           throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
       return t
   }
   function e(t, e) {
       t.prototype = Object.create(e.prototype),
       t.prototype.constructor = t,
       t.__proto__ = e
   }
 
   var n, i, r, a, o, s, l, c, u, h, d, p, f, m = {
       autoSleep: 120,
       force3D: "auto",
       nullTargetWarn: 1,
       units: {
           lineHeight: ""
       }
   }, g = {
       duration: .5,
       overwrite: !1,
       delay: 0
   }, v = 1e8, _ = 1e-8, x = 2 * Math.PI, y = x / 4, w = 0, b = Math.sqrt, M = Math.cos, S = Math.sin, T = function(t) {
       return "string" == typeof t
   }, E = function(t) {
       return "function" == typeof t
   }, L = function(t) {
       return "number" == typeof t
   }, A = function(t) {
       return void 0 === t
   }, R = function(t) {
       return "object" == typeof t
   }, C = function(t) {
       return !1 !== t
   }, P = function() {
       return "undefined" != typeof window
   }, D = function(t) {
       return E(t) || T(t)
   }, I = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
   , O = Array.isArray, N = /(?:-?\.?\d|\.)+/gi, z = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, F = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, H = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, B = /[+-]=-?[.\d]+/, k = /[#\-+.]*\b[a-z\d-=+%.]+/gi, U = /[\d.+\-=]+(?:e[-+]\d*)*/i, G = {}, W = {}, V = function(t) {
       return (W = gt(t, G)) && en
   }, q = function(t, e) {
       return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
   }, j = function(t, e) {
       return !e && console.warn(t)
   }, Y = function(t, e) {
       return t && (G[t] = e) && W && (W[t] = e) || G
   }, X = function() {
       return 0
   }, Z = {}, J = [], Q = {}, K = {}, $ = {}, tt = 30, et = [], nt = "", it = function(t) {
       var e, n, i = t[0];
       if (R(i) || E(i) || (t = [t]),
       !(e = (i._gsap || {}).harness)) {
           for (n = et.length; n-- && !et[n].targetTest(i); )
               ;
           e = et[n]
       }
       for (n = t.length; n--; )
           t[n] && (t[n]._gsap || (t[n]._gsap = new Ee(t[n],e))) || t.splice(n, 1);
       return t
   }, rt = function(t) {
       return t._gsap || it(qt(t))[0]._gsap
   }, at = function(t, e, n) {
       return (n = t[e]) && E(n) ? t[e]() : A(n) && t.getAttribute && t.getAttribute(e) || n
   }, ot = function(t, e) {
       return (t = t.split(",")).forEach(e) || t
   }, st = function(t) {
       return Math.round(1e5 * t) / 1e5 || 0
   }, lt = function(t, e) {
       for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n; )
           ;
       return i < n
   }, ct = function(t, e, n) {
       var i, r = L(t[1]), a = (r ? 2 : 1) + (e < 2 ? 0 : 1), o = t[a];
       if (r && (o.duration = t[1]),
       o.parent = n,
       e) {
           for (i = o; n && !("immediateRender"in i); )
               i = n.vars.defaults || {},
               n = C(n.vars.inherit) && n.parent;
           o.immediateRender = C(i.immediateRender),
           e < 2 ? o.runBackwards = 1 : o.startAt = t[a - 1]
       }
       return o
   }, ut = function() {
       var t, e, n = J.length, i = J.slice(0);
       for (Q = {},
       J.length = 0,
       t = 0; t < n; t++)
           (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
   }, ht = function(t, e, n, i) {
       J.length && ut(),
       t.render(e, n, i),
       J.length && ut()
   }, dt = function(t) {
       var e = parseFloat(t);
       return (e || 0 === e) && (t + "").match(k).length < 2 ? e : T(t) ? t.trim() : t
   }, pt = function(t) {
       return t
   }, ft = function(t, e) {
       for (var n in e)
           n in t || (t[n] = e[n]);
       return t
   }, mt = function(t, e) {
       for (var n in e)
           n in t || "duration" === n || "ease" === n || (t[n] = e[n])
   }, gt = function(t, e) {
       for (var n in e)
           t[n] = e[n];
       return t
   }, vt = function t(e, n) {
       for (var i in n)
           "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = R(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i]);
       return e
   }, _t = function(t, e) {
       var n, i = {};
       for (n in t)
           n in e || (i[n] = t[n]);
       return i
   }, xt = function(t) {
       var e = t.parent || i
         , n = t.keyframes ? mt : ft;
       if (C(t.inherit))
           for (; e; )
               n(t, e.vars.defaults),
               e = e.parent || e._dp;
       return t
   }, yt = function(t, e, n, i) {
       void 0 === n && (n = "_first"),
       void 0 === i && (i = "_last");
       var r = e._prev
         , a = e._next;
       r ? r._next = a : t[n] === e && (t[n] = a),
       a ? a._prev = r : t[i] === e && (t[i] = r),
       e._next = e._prev = e.parent = null
   }, wt = function(t, e) {
       t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
       t._act = 0
   }, bt = function(t, e) {
       if (t && (!e || e._end > t._dur || e._start < 0))
           for (var n = t; n; )
               n._dirty = 1,
               n = n.parent;
       return t
   }, Mt = function(t) {
       for (var e = t.parent; e && e.parent; )
           e._dirty = 1,
           e.totalDuration(),
           e = e.parent;
       return t
   }, St = function t(e) {
       return !e || e._ts && t(e.parent)
   }, Tt = function(t) {
       return t._repeat ? Et(t._tTime, t = t.duration() + t._rDelay) * t : 0
   }, Et = function(t, e) {
       var n = Math.floor(t /= e);
       return t && n === t ? n - 1 : n
   }, Lt = function(t, e) {
       return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
   }, At = function(t) {
       return t._end = st(t._start + (t._tDur / Math.abs(t._ts || t._rts || _) || 0))
   }, Rt = function(t, e) {
       var n = t._dp;
       return n && n.smoothChildTiming && t._ts && (t._start = st(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
       At(t),
       n._dirty || bt(n, t)),
       t
   }, Ct = function(t, e) {
       var n;
       if ((e._time || e._initted && !e._dur) && (n = Lt(t.rawTime(), e),
       (!e._dur || kt(0, e.totalDuration(), n) - e._tTime > _) && e.render(n, !0)),
       bt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
           if (t._dur < t.duration())
               for (n = t; n._dp; )
                   n.rawTime() >= 0 && n.totalTime(n._tTime),
                   n = n._dp;
           t._zTime = -1e-8
       }
   }, Pt = function(t, e, n, i) {
       return e.parent && wt(e),
       e._start = st(n + e._delay),
       e._end = st(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
       function(t, e, n, i, r) {
           void 0 === n && (n = "_first"),
           void 0 === i && (i = "_last");
           var a, o = t[i];
           if (r)
               for (a = e[r]; o && o[r] > a; )
                   o = o._prev;
           o ? (e._next = o._next,
           o._next = e) : (e._next = t[n],
           t[n] = e),
           e._next ? e._next._prev = e : t[i] = e,
           e._prev = o,
           e.parent = e._dp = t
       }(t, e, "_first", "_last", t._sort ? "_start" : 0),
       t._recent = e,
       i || Ct(t, e),
       t
   }, Dt = function(t, e) {
       return (G.ScrollTrigger || q("scrollTrigger", e)) && G.ScrollTrigger.create(e, t)
   }, It = function(t, e, n, i) {
       return Ie(t, e),
       t._initted ? !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && l !== pe.frame ? (J.push(t),
       t._lazy = [e, i],
       1) : void 0 : 1
   }, Ot = function t(e) {
       var n = e.parent;
       return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
   }, Nt = function(t, e, n, i) {
       var r = t._repeat
         , a = st(e) || 0
         , o = t._tTime / t._tDur;
       return o && !i && (t._time *= a / t._dur),
       t._dur = a,
       t._tDur = r ? r < 0 ? 1e10 : st(a * (r + 1) + t._rDelay * r) : a,
       o && !i ? Rt(t, t._tTime = t._tDur * o) : t.parent && At(t),
       n || bt(t.parent, t),
       t
   }, zt = function(t) {
       return t instanceof Ae ? bt(t) : Nt(t, t._dur)
   }, Ft = {
       _start: 0,
       endTime: X
   }, Ht = function t(e, n) {
       var i, r, a = e.labels, o = e._recent || Ft, s = e.duration() >= v ? o.endTime(!1) : e._dur;
       return T(n) && (isNaN(n) || n in a) ? "<" === (i = n.charAt(0)) || ">" === i ? ("<" === i ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) : (i = n.indexOf("=")) < 0 ? (n in a || (a[n] = s),
       a[n]) : (r = +(n.charAt(i - 1) + n.substr(i + 1)),
       i > 1 ? t(e, n.substr(0, i - 1)) + r : s + r) : null == n ? s : +n
   }, Bt = function(t, e) {
       return t || 0 === t ? e(t) : e
   }, kt = function(t, e, n) {
       return n < t ? t : n > e ? e : n
   }, Ut = function(t) {
       if ("string" != typeof t)
           return "";
       var e = U.exec(t);
       return e ? t.substr(e.index + e[0].length) : ""
   }, Gt = [].slice, Wt = function(t, e) {
       return t && R(t) && "length"in t && (!e && !t.length || t.length - 1 in t && R(t[0])) && !t.nodeType && t !== r
   }, Vt = function(t, e, n) {
       return void 0 === n && (n = []),
       t.forEach((function(t) {
           var i;
           return T(t) && !e || Wt(t, 1) ? (i = n).push.apply(i, qt(t)) : n.push(t)
       }
       )) || n
   }, qt = function(t, e) {
       return !T(t) || e || !a && fe() ? O(t) ? Vt(t, e) : Wt(t) ? Gt.call(t, 0) : t ? [t] : [] : Gt.call(o.querySelectorAll(t), 0)
   }, jt = function(t) {
       return t.sort((function() {
           return .5 - Math.random()
       }
       ))
   }, Yt = function(t) {
       if (E(t))
           return t;
       var e = R(t) ? t : {
           each: t
       }
         , n = we(e.ease)
         , i = e.from || 0
         , r = parseFloat(e.base) || 0
         , a = {}
         , o = i > 0 && i < 1
         , s = isNaN(i) || o
         , l = e.axis
         , c = i
         , u = i;
       return T(i) ? c = u = {
           center: .5,
           edges: .5,
           end: 1
       }[i] || 0 : !o && s && (c = i[0],
       u = i[1]),
       function(t, o, h) {
           var d, p, f, m, g, _, x, y, w, M = (h || e).length, S = a[M];
           if (!S) {
               if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, v])[1])) {
                   for (x = -1e8; x < (x = h[w++].getBoundingClientRect().left) && w < M; )
                       ;
                   w--
               }
               for (S = a[M] = [],
               d = s ? Math.min(w, M) * c - .5 : i % w,
               p = s ? M * u / w - .5 : i / w | 0,
               x = 0,
               y = v,
               _ = 0; _ < M; _++)
                   f = _ % w - d,
                   m = p - (_ / w | 0),
                   S[_] = g = l ? Math.abs("y" === l ? m : f) : b(f * f + m * m),
                   g > x && (x = g),
                   g < y && (y = g);
               "random" === i && jt(S),
               S.max = x - y,
               S.min = y,
               S.v = M = (parseFloat(e.amount) || parseFloat(e.each) * (w > M ? M - 1 : l ? "y" === l ? M / w : w : Math.max(w, M / w)) || 0) * ("edges" === i ? -1 : 1),
               S.b = M < 0 ? r - M : r,
               S.u = Ut(e.amount || e.each) || 0,
               n = n && M < 0 ? xe(n) : n
           }
           return M = (S[t] - S.min) / S.max || 0,
           st(S.b + (n ? n(M) : M) * S.v) + S.u
       }
   }, Xt = function(t) {
       var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
       return function(n) {
           var i = Math.round(parseFloat(n) / t) * t * e;
           return (i - i % 1) / e + (L(n) ? 0 : Ut(n))
       }
   }, Zt = function(t, e) {
       var n, i, r = O(t);
       return !r && R(t) && (n = r = t.radius || v,
       t.values ? (t = qt(t.values),
       (i = !L(t[0])) && (n *= n)) : t = Xt(t.increment)),
       Bt(e, r ? E(t) ? function(e) {
           return i = t(e),
           Math.abs(i - e) <= n ? i : e
       }
       : function(e) {
           for (var r, a, o = parseFloat(i ? e.x : e), s = parseFloat(i ? e.y : 0), l = v, c = 0, u = t.length; u--; )
               (r = i ? (r = t[u].x - o) * r + (a = t[u].y - s) * a : Math.abs(t[u] - o)) < l && (l = r,
               c = u);
           return c = !n || l <= n ? t[c] : e,
           i || c === e || L(e) ? c : c + Ut(e)
       }
       : Xt(t))
   }, Jt = function(t, e, n, i) {
       return Bt(O(t) ? !e : !0 === n ? !!(n = 0) : !i, (function() {
           return O(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + .99 * n)) / n) * n * i) / i
       }
       ))
   }, Qt = function(t, e, n) {
       return Bt(n, (function(n) {
           return t[~~e(n)]
       }
       ))
   }, Kt = function(t) {
       for (var e, n, i, r, a = 0, o = ""; ~(e = t.indexOf("random(", a)); )
           i = t.indexOf(")", e),
           r = "[" === t.charAt(e + 7),
           n = t.substr(e + 7, i - e - 7).match(r ? k : N),
           o += t.substr(a, e - a) + Jt(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5),
           a = i + 1;
       return o + t.substr(a, t.length - a)
   }, $t = function(t, e, n, i, r) {
       var a = e - t
         , o = i - n;
       return Bt(r, (function(e) {
           return n + ((e - t) / a * o || 0)
       }
       ))
   }, te = function(t, e, n) {
       var i, r, a, o = t.labels, s = v;
       for (i in o)
           (r = o[i] - e) < 0 == !!n && r && s > (r = Math.abs(r)) && (a = i,
           s = r);
       return a
   }, ee = function(t, e, n) {
       var i, r, a = t.vars, o = a[e];
       if (o)
           return i = a[e + "Params"],
           r = a.callbackScope || t,
           n && J.length && ut(),
           i ? o.apply(r, i) : o.call(r)
   }, ne = function(t) {
       return wt(t),
       t.progress() < 1 && ee(t, "onInterrupt"),
       t
   }, ie = function(t) {
       var e = (t = !t.name && t.default || t).name
         , n = E(t)
         , i = e && !n && t.init ? function() {
           this._props = []
       }
       : t
         , r = {
           init: X,
           render: je,
           add: Pe,
           kill: Xe,
           modifier: Ye,
           rawVars: 0
       }
         , a = {
           targetTest: 0,
           get: 0,
           getSetter: Ge,
           aliases: {},
           register: 0
       };
       if (fe(),
       t !== i) {
           if (K[e])
               return;
           ft(i, ft(_t(t, r), a)),
           gt(i.prototype, gt(r, _t(t, a))),
           K[i.prop = e] = i,
           t.targetTest && (et.push(i),
           Z[e] = 1),
           e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
       }
       Y(e, i),
       t.register && t.register(en, i, Qe)
   }, re = 255, ae = {
       aqua: [0, re, re],
       lime: [0, re, 0],
       silver: [192, 192, 192],
       black: [0, 0, 0],
       maroon: [128, 0, 0],
       teal: [0, 128, 128],
       blue: [0, 0, re],
       navy: [0, 0, 128],
       white: [re, re, re],
       olive: [128, 128, 0],
       yellow: [re, re, 0],
       orange: [re, 165, 0],
       gray: [128, 128, 128],
       purple: [128, 0, 128],
       green: [0, 128, 0],
       red: [re, 0, 0],
       pink: [re, 192, 203],
       cyan: [0, re, re],
       transparent: [re, re, re, 0]
   }, oe = function(t, e, n) {
       return (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * re + .5 | 0
   }, se = function(t, e, n) {
       var i, r, a, o, s, l, c, u, h, d, p = t ? L(t) ? [t >> 16, t >> 8 & re, t & re] : 0 : ae.black;
       if (!p) {
           if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
           ae[t])
               p = ae[t];
           else if ("#" === t.charAt(0)) {
               if (t.length < 6 && (i = t.charAt(1),
               r = t.charAt(2),
               a = t.charAt(3),
               t = "#" + i + i + r + r + a + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
               9 === t.length)
                   return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & re, p & re, parseInt(t.substr(7), 16) / 255];
               p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & re, t & re]
           } else if ("hsl" === t.substr(0, 3))
               if (p = d = t.match(N),
               e) {
                   if (~t.indexOf("="))
                       return p = t.match(z),
                       n && p.length < 4 && (p[3] = 1),
                       p
               } else
                   o = +p[0] % 360 / 360,
                   s = +p[1] / 100,
                   i = 2 * (l = +p[2] / 100) - (r = l <= .5 ? l * (s + 1) : l + s - l * s),
                   p.length > 3 && (p[3] *= 1),
                   p[0] = oe(o + 1 / 3, i, r),
                   p[1] = oe(o, i, r),
                   p[2] = oe(o - 1 / 3, i, r);
           else
               p = t.match(N) || ae.transparent;
           p = p.map(Number)
       }
       return e && !d && (i = p[0] / re,
       r = p[1] / re,
       a = p[2] / re,
       l = ((c = Math.max(i, r, a)) + (u = Math.min(i, r, a))) / 2,
       c === u ? o = s = 0 : (h = c - u,
       s = l > .5 ? h / (2 - c - u) : h / (c + u),
       o = c === i ? (r - a) / h + (r < a ? 6 : 0) : c === r ? (a - i) / h + 2 : (i - r) / h + 4,
       o *= 60),
       p[0] = ~~(o + .5),
       p[1] = ~~(100 * s + .5),
       p[2] = ~~(100 * l + .5)),
       n && p.length < 4 && (p[3] = 1),
       p
   }, le = function(t) {
       var e = []
         , n = []
         , i = -1;
       return t.split(ue).forEach((function(t) {
           var r = t.match(F) || [];
           e.push.apply(e, r),
           n.push(i += r.length + 1)
       }
       )),
       e.c = n,
       e
   }, ce = function(t, e, n) {
       var i, r, a, o, s = "", l = (t + s).match(ue), c = e ? "hsla(" : "rgba(", u = 0;
       if (!l)
           return t;
       if (l = l.map((function(t) {
           return (t = se(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
       }
       )),
       n && (a = le(t),
       (i = n.c).join(s) !== a.c.join(s)))
           for (o = (r = t.replace(ue, "1").split(F)).length - 1; u < o; u++)
               s += r[u] + (~i.indexOf(u) ? l.shift() || c + "0,0,0,0)" : (a.length ? a : l.length ? l : n).shift());
       if (!r)
           for (o = (r = t.split(ue)).length - 1; u < o; u++)
               s += r[u] + l[u];
       return s + r[o]
   }, ue = function() {
       var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
       for (t in ae)
           e += "|" + t + "\\b";
       return new RegExp(e + ")","gi")
   }(), he = /hsl[a]?\(/, de = function(t) {
       var e, n = t.join(" ");
       if (ue.lastIndex = 0,
       ue.test(n))
           return e = he.test(n),
           t[1] = ce(t[1], e),
           t[0] = ce(t[0], e, le(t[1])),
           !0
   }, pe = function() {
       var t, e, n, i, l, c, h = Date.now, d = 500, p = 33, f = h(), m = f, g = 1e3 / 240, v = g, _ = [], x = function n(r) {
           var a, o, s, u, x = h() - m, y = !0 === r;
           if (x > d && (f += x - p),
           ((a = (s = (m += x) - f) - v) > 0 || y) && (u = ++i.frame,
           l = s - 1e3 * i.time,
           i.time = s /= 1e3,
           v += a + (a >= g ? 4 : g - a),
           o = 1),
           y || (t = e(n)),
           o)
               for (c = 0; c < _.length; c++)
                   _[c](s, l, u, r)
       };
       return i = {
           time: 0,
           frame: 0,
           tick: function() {
               x(!0)
           },
           deltaRatio: function(t) {
               return l / (1e3 / (t || 60))
           },
           wake: function() {
               s && (!a && P() && (r = a = window,
               o = r.document || {},
               G.gsap = en,
               (r.gsapVersions || (r.gsapVersions = [])).push(en.version),
               V(W || r.GreenSockGlobals || !r.gsap && r || {}),
               n = r.requestAnimationFrame),
               t && i.sleep(),
               e = n || function(t) {
                   return setTimeout(t, v - 1e3 * i.time + 1 | 0)
               }
               ,
               u = 1,
               x(2))
           },
           sleep: function() {
               (n ? r.cancelAnimationFrame : clearTimeout)(t),
               u = 0,
               e = X
           },
           lagSmoothing: function(t, e) {
               d = t || 1e8,
               p = Math.min(e, d, 0)
           },
           fps: function(t) {
               g = 1e3 / (t || 240),
               v = 1e3 * i.time + g
           },
           add: function(t) {
               _.indexOf(t) < 0 && _.push(t),
               fe()
           },
           remove: function(t) {
               var e;
               ~(e = _.indexOf(t)) && _.splice(e, 1) && c >= e && c--
           },
           _listeners: _
       }
   }(), fe = function() {
       return !u && pe.wake()
   }, me = {}, ge = /^[\d.\-M][\d.\-,\s]/, ve = /["']/g, _e = function(t) {
       for (var e, n, i, r = {}, a = t.substr(1, t.length - 3).split(":"), o = a[0], s = 1, l = a.length; s < l; s++)
           n = a[s],
           e = s !== l - 1 ? n.lastIndexOf(",") : n.length,
           i = n.substr(0, e),
           r[o] = isNaN(i) ? i.replace(ve, "").trim() : +i,
           o = n.substr(e + 1).trim();
       return r
   }, xe = function(t) {
       return function(e) {
           return 1 - t(1 - e)
       }
   }, ye = function t(e, n) {
       for (var i, r = e._first; r; )
           r instanceof Ae ? t(r, n) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === n || (r.timeline ? t(r.timeline, n) : (i = r._ease,
           r._ease = r._yEase,
           r._yEase = i,
           r._yoyo = n)),
           r = r._next
   }, we = function(t, e) {
       return t && (E(t) ? t : me[t] || function(t) {
           var e, n, i, r, a = (t + "").split("("), o = me[a[0]];
           return o && a.length > 1 && o.config ? o.config.apply(null, ~t.indexOf("{") ? [_e(a[1])] : (e = t,
           n = e.indexOf("(") + 1,
           i = e.indexOf(")"),
           r = e.indexOf("(", n),
           e.substring(n, ~r && r < i ? e.indexOf(")", i + 1) : i)).split(",").map(dt)) : me._CE && ge.test(t) ? me._CE("", t) : o
       }(t)) || e
   }, be = function(t, e, n, i) {
       void 0 === n && (n = function(t) {
           return 1 - e(1 - t)
       }
       ),
       void 0 === i && (i = function(t) {
           return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
       }
       );
       var r, a = {
           easeIn: e,
           easeOut: n,
           easeInOut: i
       };
       return ot(t, (function(t) {
           for (var e in me[t] = G[t] = a,
           me[r = t.toLowerCase()] = n,
           a)
               me[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = me[t + "." + e] = a[e]
       }
       )),
       a
   }, Me = function(t) {
       return function(e) {
           return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
       }
   }, Se = function t(e, n, i) {
       var r = n >= 1 ? n : 1
         , a = (i || (e ? .3 : .45)) / (n < 1 ? n : 1)
         , o = a / x * (Math.asin(1 / r) || 0)
         , s = function(t) {
           return 1 === t ? 1 : r * Math.pow(2, -10 * t) * S((t - o) * a) + 1
       }
         , l = "out" === e ? s : "in" === e ? function(t) {
           return 1 - s(1 - t)
       }
       : Me(s);
       return a = x / a,
       l.config = function(n, i) {
           return t(e, n, i)
       }
       ,
       l
   }, Te = function t(e, n) {
       void 0 === n && (n = 1.70158);
       var i = function(t) {
           return t ? --t * t * ((n + 1) * t + n) + 1 : 0
       }
         , r = "out" === e ? i : "in" === e ? function(t) {
           return 1 - i(1 - t)
       }
       : Me(i);
       return r.config = function(n) {
           return t(e, n)
       }
       ,
       r
   };
   ot("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
       var n = e < 5 ? e + 1 : e;
       be(t + ",Power" + (n - 1), e ? function(t) {
           return Math.pow(t, n)
       }
       : function(t) {
           return t
       }
       , (function(t) {
           return 1 - Math.pow(1 - t, n)
       }
       ), (function(t) {
           return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
       }
       ))
   }
   )),
   me.Linear.easeNone = me.none = me.Linear.easeIn,
   be("Elastic", Se("in"), Se("out"), Se()),
   h = 7.5625,
   p = 1 / (d = 2.75),
   be("Bounce", (function(t) {
       return 1 - f(1 - t)
   }
   ), f = function(t) {
       return t < p ? h * t * t : t < .7272727272727273 ? h * Math.pow(t - 1.5 / d, 2) + .75 : t < .9090909090909092 ? h * (t -= 2.25 / d) * t + .9375 : h * Math.pow(t - 2.625 / d, 2) + .984375
   }
   ),
   be("Expo", (function(t) {
       return t ? Math.pow(2, 10 * (t - 1)) : 0
   }
   )),
   be("Circ", (function(t) {
       return -(b(1 - t * t) - 1)
   }
   )),
   be("Sine", (function(t) {
       return 1 === t ? 1 : 1 - M(t * y)
   }
   )),
   be("Back", Te("in"), Te("out"), Te()),
   me.SteppedEase = me.steps = G.SteppedEase = {
       config: function(t, e) {
           void 0 === t && (t = 1);
           var n = 1 / t
             , i = t + (e ? 0 : 1)
             , r = e ? 1 : 0;
           return function(t) {
               return ((i * kt(0, .99999999, t) | 0) + r) * n
           }
       }
   },
   g.ease = me["quad.out"],
   ot("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
       return nt += t + "," + t + "Params,"
   }
   ));
   var Ee = function(t, e) {
       this.id = w++,
       t._gsap = this,
       this.target = t,
       this.harness = e,
       this.get = e ? e.get : at,
       this.set = e ? e.getSetter : Ge
   }
     , Le = function() {
       function t(t, e) {
           var n = t.parent || i;
           this.vars = t,
           this._delay = +t.delay || 0,
           (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
           this._yoyo = !!t.yoyo || !!t.yoyoEase),
           this._ts = 1,
           Nt(this, +t.duration, 1, 1),
           this.data = t.data,
           u || pe.wake(),
           n && Pt(n, this, e || 0 === e ? e : n._time, 1),
           t.reversed && this.reverse(),
           t.paused && this.paused(!0)
       }
       var e = t.prototype;
       return e.delay = function(t) {
           return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
           this._delay = t,
           this) : this._delay
       }
       ,
       e.duration = function(t) {
           return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
       }
       ,
       e.totalDuration = function(t) {
           return arguments.length ? (this._dirty = 0,
           Nt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
       }
       ,
       e.totalTime = function(t, e) {
           if (fe(),
           !arguments.length)
               return this._tTime;
           var n = this._dp;
           if (n && n.smoothChildTiming && this._ts) {
               for (Rt(this, t),
               !n._dp || n.parent || Ct(n, this); n.parent; )
                   n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                   n = n.parent;
               !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Pt(this._dp, this, this._start - this._delay)
           }
           return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === _ || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
           ht(this, t, e)),
           this
       }
       ,
       e.time = function(t, e) {
           return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Tt(this)) % this._dur || (t ? this._dur : 0), e) : this._time
       }
       ,
       e.totalProgress = function(t, e) {
           return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
       }
       ,
       e.progress = function(t, e) {
           return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Tt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
       }
       ,
       e.iteration = function(t, e) {
           var n = this.duration() + this._rDelay;
           return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Et(this._tTime, n) + 1 : 1
       }
       ,
       e.timeScale = function(t) {
           if (!arguments.length)
               return -1e-8 === this._rts ? 0 : this._rts;
           if (this._rts === t)
               return this;
           var e = this.parent && this._ts ? Lt(this.parent._time, this) : this._tTime;
           return this._rts = +t || 0,
           this._ts = this._ps || -1e-8 === t ? 0 : this._rts,
           Mt(this.totalTime(kt(-this._delay, this._tDur, e), !0))
       }
       ,
       e.paused = function(t) {
           return arguments.length ? (this._ps !== t && (this._ps = t,
           t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
           this._ts = this._act = 0) : (fe(),
           this._ts = this._rts,
           this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= _) && Math.abs(this._zTime) !== _))),
           this) : this._ps
       }
       ,
       e.startTime = function(t) {
           if (arguments.length) {
               this._start = t;
               var e = this.parent || this._dp;
               return e && (e._sort || !this.parent) && Pt(e, this, t - this._delay),
               this
           }
           return this._start
       }
       ,
       e.endTime = function(t) {
           return this._start + (C(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
       }
       ,
       e.rawTime = function(t) {
           var e = this.parent || this._dp;
           return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Lt(e.rawTime(t), this) : this._tTime : this._tTime
       }
       ,
       e.globalTime = function(t) {
           for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
               n = e._start + n / (e._ts || 1),
               e = e._dp;
           return n
       }
       ,
       e.repeat = function(t) {
           return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
           zt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
       }
       ,
       e.repeatDelay = function(t) {
           return arguments.length ? (this._rDelay = t,
           zt(this)) : this._rDelay
       }
       ,
       e.yoyo = function(t) {
           return arguments.length ? (this._yoyo = t,
           this) : this._yoyo
       }
       ,
       e.seek = function(t, e) {
           return this.totalTime(Ht(this, t), C(e))
       }
       ,
       e.restart = function(t, e) {
           return this.play().totalTime(t ? -this._delay : 0, C(e))
       }
       ,
       e.play = function(t, e) {
           return null != t && this.seek(t, e),
           this.reversed(!1).paused(!1)
       }
       ,
       e.reverse = function(t, e) {
           return null != t && this.seek(t || this.totalDuration(), e),
           this.reversed(!0).paused(!1)
       }
       ,
       e.pause = function(t, e) {
           return null != t && this.seek(t, e),
           this.paused(!0)
       }
       ,
       e.resume = function() {
           return this.paused(!1)
       }
       ,
       e.reversed = function(t) {
           return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)),
           this) : this._rts < 0
       }
       ,
       e.invalidate = function() {
           return this._initted = this._act = 0,
           this._zTime = -1e-8,
           this
       }
       ,
       e.isActive = function() {
           var t, e = this.parent || this._dp, n = this._start;
           return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - _))
       }
       ,
       e.eventCallback = function(t, e, n) {
           var i = this.vars;
           return arguments.length > 1 ? (e ? (i[t] = e,
           n && (i[t + "Params"] = n),
           "onUpdate" === t && (this._onUpdate = e)) : delete i[t],
           this) : i[t]
       }
       ,
       e.then = function(t) {
           var e = this;
           return new Promise((function(n) {
               var i = E(t) ? t : pt
                 , r = function() {
                   var t = e.then;
                   e.then = null,
                   E(i) && (i = i(e)) && (i.then || i === e) && (e.then = t),
                   n(i),
                   e.then = t
               };
               e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r
           }
           ))
       }
       ,
       e.kill = function() {
           ne(this)
       }
       ,
       t
   }();
   ft(Le.prototype, {
       _time: 0,
       _start: 0,
       _end: 0,
       _tTime: 0,
       _tDur: 0,
       _dirty: 0,
       _repeat: 0,
       _yoyo: !1,
       parent: null,
       _initted: !1,
       _rDelay: 0,
       _ts: 1,
       _dp: 0,
       ratio: 0,
       _zTime: -1e-8,
       _prom: 0,
       _ps: !1,
       _rts: 1
   });
   var Ae = function(n) {
       function r(e, i) {
           var r;
           return void 0 === e && (e = {}),
           (r = n.call(this, e, i) || this).labels = {},
           r.smoothChildTiming = !!e.smoothChildTiming,
           r.autoRemoveChildren = !!e.autoRemoveChildren,
           r._sort = C(e.sortChildren),
           r.parent && Ct(r.parent, t(r)),
           e.scrollTrigger && Dt(t(r), e.scrollTrigger),
           r
       }
       e(r, n);
       var a = r.prototype;
       return a.to = function(t, e, n) {
           return new Fe(t,ct(arguments, 0, this),Ht(this, L(e) ? arguments[3] : n)),
           this
       }
       ,
       a.from = function(t, e, n) {
           return new Fe(t,ct(arguments, 1, this),Ht(this, L(e) ? arguments[3] : n)),
           this
       }
       ,
       a.fromTo = function(t, e, n, i) {
           return new Fe(t,ct(arguments, 2, this),Ht(this, L(e) ? arguments[4] : i)),
           this
       }
       ,
       a.set = function(t, e, n) {
           return e.duration = 0,
           e.parent = this,
           xt(e).repeatDelay || (e.repeat = 0),
           e.immediateRender = !!e.immediateRender,
           new Fe(t,e,Ht(this, n),1),
           this
       }
       ,
       a.call = function(t, e, n) {
           return Pt(this, Fe.delayedCall(0, t, e), Ht(this, n))
       }
       ,
       a.staggerTo = function(t, e, n, i, r, a, o) {
           return n.duration = e,
           n.stagger = n.stagger || i,
           n.onComplete = a,
           n.onCompleteParams = o,
           n.parent = this,
           new Fe(t,n,Ht(this, r)),
           this
       }
       ,
       a.staggerFrom = function(t, e, n, i, r, a, o) {
           return n.runBackwards = 1,
           xt(n).immediateRender = C(n.immediateRender),
           this.staggerTo(t, e, n, i, r, a, o)
       }
       ,
       a.staggerFromTo = function(t, e, n, i, r, a, o, s) {
           return i.startAt = n,
           xt(i).immediateRender = C(i.immediateRender),
           this.staggerTo(t, e, i, r, a, o, s)
       }
       ,
       a.render = function(t, e, n) {
           var r, a, o, s, l, c, u, h, d, p, f, m, g = this._time, v = this._dirty ? this.totalDuration() : this._tDur, x = this._dur, y = this !== i && t > v - _ && t >= 0 ? v : t < _ ? 0 : t, w = this._zTime < 0 != t < 0 && (this._initted || !x);
           if (y !== this._tTime || n || w) {
               if (g !== this._time && x && (y += this._time - g,
               t += this._time - g),
               r = y,
               d = this._start,
               c = !(h = this._ts),
               w && (x || (g = this._zTime),
               (t || !e) && (this._zTime = t)),
               this._repeat) {
                   if (f = this._yoyo,
                   l = x + this._rDelay,
                   this._repeat < -1 && t < 0)
                       return this.totalTime(100 * l + t, e, n);
                   if (r = st(y % l),
                   y === v ? (s = this._repeat,
                   r = x) : ((s = ~~(y / l)) && s === y / l && (r = x,
                   s--),
                   r > x && (r = x)),
                   p = Et(this._tTime, l),
                   !g && this._tTime && p !== s && (p = s),
                   f && 1 & s && (r = x - r,
                   m = 1),
                   s !== p && !this._lock) {
                       var b = f && 1 & p
                         , M = b === (f && 1 & s);
                       if (s < p && (b = !b),
                       g = b ? 0 : x,
                       this._lock = 1,
                       this.render(g || (m ? 0 : st(s * l)), e, !x)._lock = 0,
                       !e && this.parent && ee(this, "onRepeat"),
                       this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1),
                       g !== this._time || c !== !this._ts)
                           return this;
                       if (x = this._dur,
                       v = this._tDur,
                       M && (this._lock = 2,
                       g = b ? x : -1e-4,
                       this.render(g, !0),
                       this.vars.repeatRefresh && !m && this.invalidate()),
                       this._lock = 0,
                       !this._ts && !c)
                           return this;
                       ye(this, m)
                   }
               }
               if (this._hasPause && !this._forcing && this._lock < 2 && (u = function(t, e, n) {
                   var i;
                   if (n > e)
                       for (i = t._first; i && i._start <= n; ) {
                           if (!i._dur && "isPause" === i.data && i._start > e)
                               return i;
                           i = i._next
                       }
                   else
                       for (i = t._last; i && i._start >= n; ) {
                           if (!i._dur && "isPause" === i.data && i._start < e)
                               return i;
                           i = i._prev
                       }
               }(this, st(g), st(r))) && (y -= r - (r = u._start)),
               this._tTime = y,
               this._time = r,
               this._act = !h,
               this._initted || (this._onUpdate = this.vars.onUpdate,
               this._initted = 1,
               this._zTime = t,
               g = 0),
               !g && (r || !x && t >= 0) && !e && ee(this, "onStart"),
               r >= g && t >= 0)
                   for (a = this._first; a; ) {
                       if (o = a._next,
                       (a._act || r >= a._start) && a._ts && u !== a) {
                           if (a.parent !== this)
                               return this.render(t, e, n);
                           if (a.render(a._ts > 0 ? (r - a._start) * a._ts : (a._dirty ? a.totalDuration() : a._tDur) + (r - a._start) * a._ts, e, n),
                           r !== this._time || !this._ts && !c) {
                               u = 0,
                               o && (y += this._zTime = -1e-8);
                               break
                           }
                       }
                       a = o
                   }
               else {
                   a = this._last;
                   for (var S = t < 0 ? t : r; a; ) {
                       if (o = a._prev,
                       (a._act || S <= a._end) && a._ts && u !== a) {
                           if (a.parent !== this)
                               return this.render(t, e, n);
                           if (a.render(a._ts > 0 ? (S - a._start) * a._ts : (a._dirty ? a.totalDuration() : a._tDur) + (S - a._start) * a._ts, e, n),
                           r !== this._time || !this._ts && !c) {
                               u = 0,
                               o && (y += this._zTime = S ? -1e-8 : _);
                               break
                           }
                       }
                       a = o
                   }
               }
               if (u && !e && (this.pause(),
               u.render(r >= g ? 0 : -1e-8)._zTime = r >= g ? 1 : -1,
               this._ts))
                   return this._start = d,
                   At(this),
                   this.render(t, e, n);
               this._onUpdate && !e && ee(this, "onUpdate", !0),
               (y === v && v >= this.totalDuration() || !y && g) && (d !== this._start && Math.abs(h) === Math.abs(this._ts) || this._lock || ((t || !x) && (y === v && this._ts > 0 || !y && this._ts < 0) && wt(this, 1),
               e || t < 0 && !g || !y && !g || (ee(this, y === v ? "onComplete" : "onReverseComplete", !0),
               this._prom && !(y < v && this.timeScale() > 0) && this._prom())))
           }
           return this
       }
       ,
       a.add = function(t, e) {
           var n = this;
           if (L(e) || (e = Ht(this, e)),
           !(t instanceof Le)) {
               if (O(t))
                   return t.forEach((function(t) {
                       return n.add(t, e)
                   }
                   )),
                   this;
               if (T(t))
                   return this.addLabel(t, e);
               if (!E(t))
                   return this;
               t = Fe.delayedCall(0, t)
           }
           return this !== t ? Pt(this, t, e) : this
       }
       ,
       a.getChildren = function(t, e, n, i) {
           void 0 === t && (t = !0),
           void 0 === e && (e = !0),
           void 0 === n && (n = !0),
           void 0 === i && (i = -1e8);
           for (var r = [], a = this._first; a; )
               a._start >= i && (a instanceof Fe ? e && r.push(a) : (n && r.push(a),
               t && r.push.apply(r, a.getChildren(!0, e, n)))),
               a = a._next;
           return r
       }
       ,
       a.getById = function(t) {
           for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
               if (e[n].vars.id === t)
                   return e[n]
       }
       ,
       a.remove = function(t) {
           return T(t) ? this.removeLabel(t) : E(t) ? this.killTweensOf(t) : (yt(this, t),
           t === this._recent && (this._recent = this._last),
           bt(this))
       }
       ,
       a.totalTime = function(t, e) {
           return arguments.length ? (this._forcing = 1,
           !this._dp && this._ts && (this._start = st(pe.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
           n.prototype.totalTime.call(this, t, e),
           this._forcing = 0,
           this) : this._tTime
       }
       ,
       a.addLabel = function(t, e) {
           return this.labels[t] = Ht(this, e),
           this
       }
       ,
       a.removeLabel = function(t) {
           return delete this.labels[t],
           this
       }
       ,
       a.addPause = function(t, e, n) {
           var i = Fe.delayedCall(0, e || X, n);
           return i.data = "isPause",
           this._hasPause = 1,
           Pt(this, i, Ht(this, t))
       }
       ,
       a.removePause = function(t) {
           var e = this._first;
           for (t = Ht(this, t); e; )
               e._start === t && "isPause" === e.data && wt(e),
               e = e._next
       }
       ,
       a.killTweensOf = function(t, e, n) {
           for (var i = this.getTweensOf(t, n), r = i.length; r--; )
               Re !== i[r] && i[r].kill(t, e);
           return this
       }
       ,
       a.getTweensOf = function(t, e) {
           for (var n, i = [], r = qt(t), a = this._first, o = L(e); a; )
               a instanceof Fe ? lt(a._targets, r) && (o ? (!Re || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (n = a.getTweensOf(r, e)).length && i.push.apply(i, n),
               a = a._next;
           return i
       }
       ,
       a.tweenTo = function(t, e) {
           e = e || {};
           var n = this
             , i = Ht(n, t)
             , r = e
             , a = r.startAt
             , o = r.onStart
             , s = r.onStartParams
             , l = r.immediateRender
             , c = Fe.to(n, ft({
               ease: "none",
               lazy: !1,
               immediateRender: !1,
               time: i,
               overwrite: "auto",
               duration: e.duration || Math.abs((i - (a && "time"in a ? a.time : n._time)) / n.timeScale()) || _,
               onStart: function() {
                   n.pause();
                   var t = e.duration || Math.abs((i - n._time) / n.timeScale());
                   c._dur !== t && Nt(c, t, 0, 1).render(c._time, !0, !0),
                   o && o.apply(c, s || [])
               }
           }, e));
           return l ? c.render(0) : c
       }
       ,
       a.tweenFromTo = function(t, e, n) {
           return this.tweenTo(e, ft({
               startAt: {
                   time: Ht(this, t)
               }
           }, n))
       }
       ,
       a.recent = function() {
           return this._recent
       }
       ,
       a.nextLabel = function(t) {
           return void 0 === t && (t = this._time),
           te(this, Ht(this, t))
       }
       ,
       a.previousLabel = function(t) {
           return void 0 === t && (t = this._time),
           te(this, Ht(this, t), 1)
       }
       ,
       a.currentLabel = function(t) {
           return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + _)
       }
       ,
       a.shiftChildren = function(t, e, n) {
           void 0 === n && (n = 0);
           for (var i, r = this._first, a = this.labels; r; )
               r._start >= n && (r._start += t,
               r._end += t),
               r = r._next;
           if (e)
               for (i in a)
                   a[i] >= n && (a[i] += t);
           return bt(this)
       }
       ,
       a.invalidate = function() {
           var t = this._first;
           for (this._lock = 0; t; )
               t.invalidate(),
               t = t._next;
           return n.prototype.invalidate.call(this)
       }
       ,
       a.clear = function(t) {
           void 0 === t && (t = !0);
           for (var e, n = this._first; n; )
               e = n._next,
               this.remove(n),
               n = e;
           return this._dp && (this._time = this._tTime = this._pTime = 0),
           t && (this.labels = {}),
           bt(this)
       }
       ,
       a.totalDuration = function(t) {
           var e, n, r, a = 0, o = this, s = o._last, l = v;
           if (arguments.length)
               return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
           if (o._dirty) {
               for (r = o.parent; s; )
                   e = s._prev,
                   s._dirty && s.totalDuration(),
                   (n = s._start) > l && o._sort && s._ts && !o._lock ? (o._lock = 1,
                   Pt(o, s, n - s._delay, 1)._lock = 0) : l = n,
                   n < 0 && s._ts && (a -= n,
                   (!r && !o._dp || r && r.smoothChildTiming) && (o._start += n / o._ts,
                   o._time -= n,
                   o._tTime -= n),
                   o.shiftChildren(-n, !1, -Infinity),
                   l = 0),
                   s._end > a && s._ts && (a = s._end),
                   s = e;
               Nt(o, o === i && o._time > a ? o._time : a, 1, 1),
               o._dirty = 0
           }
           return o._tDur
       }
       ,
       r.updateRoot = function(t) {
           if (i._ts && (ht(i, Lt(t, i)),
           l = pe.frame),
           pe.frame >= tt) {
               tt += m.autoSleep || 120;
               var e = i._first;
               if ((!e || !e._ts) && m.autoSleep && pe._listeners.length < 2) {
                   for (; e && !e._ts; )
                       e = e._next;
                   e || pe.sleep()
               }
           }
       }
       ,
       r
   }(Le);
   ft(Ae.prototype, {
       _lock: 0,
       _hasPause: 0,
       _forcing: 0
   });
   var Re, Ce = function(t, e, n, i, r, a, o) {
       var s, l, c, u, h, d, p, f, m = new Qe(this._pt,t,e,0,1,qe,null,r), g = 0, v = 0;
       for (m.b = n,
       m.e = i,
       n += "",
       (p = ~(i += "").indexOf("random(")) && (i = Kt(i)),
       a && (a(f = [n, i], t, e),
       n = f[0],
       i = f[1]),
       l = n.match(H) || []; s = H.exec(i); )
           u = s[0],
           h = i.substring(g, s.index),
           c ? c = (c + 1) % 5 : "rgba(" === h.substr(-5) && (c = 1),
           u !== l[v++] && (d = parseFloat(l[v - 1]) || 0,
           m._pt = {
               _next: m._pt,
               p: h || 1 === v ? h : ",",
               s: d,
               c: "=" === u.charAt(1) ? parseFloat(u.substr(2)) * ("-" === u.charAt(0) ? -1 : 1) : parseFloat(u) - d,
               m: c && c < 4 ? Math.round : 0
           },
           g = H.lastIndex);
       return m.c = g < i.length ? i.substring(g, i.length) : "",
       m.fp = o,
       (B.test(i) || p) && (m.e = 0),
       this._pt = m,
       m
   }, Pe = function(t, e, n, i, r, a, o, s, l) {
       E(i) && (i = i(r || 0, t, a));
       var c, u = t[e], h = "get" !== n ? n : E(u) ? l ? t[e.indexOf("set") || !E(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : u, d = E(u) ? l ? ke : Be : He;
       if (T(i) && (~i.indexOf("random(") && (i = Kt(i)),
       "=" === i.charAt(1) && (i = parseFloat(h) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Ut(h) || 0))),
       h !== i)
           return isNaN(h * i) ? (!u && !(e in t) && q(e, i),
           Ce.call(this, t, e, h, i, d, s || m.stringFilter, l)) : (c = new Qe(this._pt,t,e,+h || 0,i - (h || 0),"boolean" == typeof u ? Ve : We,0,d),
           l && (c.fp = l),
           o && c.modifier(o, this, t),
           this._pt = c)
   }, De = function(t, e, n, i, r, a) {
       var o, s, l, u;
       if (K[t] && !1 !== (o = new K[t]).init(r, o.rawVars ? e[t] : function(t, e, n, i, r) {
           if (E(t) && (t = Oe(t, r, e, n, i)),
           !R(t) || t.style && t.nodeType || O(t) || I(t))
               return T(t) ? Oe(t, r, e, n, i) : t;
           var a, o = {};
           for (a in t)
               o[a] = Oe(t[a], r, e, n, i);
           return o
       }(e[t], i, r, a, n), n, i, a) && (n._pt = s = new Qe(n._pt,r,t,0,1,o.render,o,0,o.priority),
       n !== c))
           for (l = n._ptLookup[n._targets.indexOf(r)],
           u = o._props.length; u--; )
               l[o._props[u]] = s;
       return o
   }, Ie = function t(e, r) {
       var a, o, s, l, c, u, h, d, p, f, m, v, x, y = e.vars, w = y.ease, b = y.startAt, M = y.immediateRender, S = y.lazy, T = y.onUpdate, E = y.onUpdateParams, L = y.callbackScope, A = y.runBackwards, R = y.yoyoEase, P = y.keyframes, D = y.autoRevert, I = e._dur, O = e._startAt, N = e._targets, z = e.parent, F = z && "nested" === z.data ? z.parent._targets : N, H = "auto" === e._overwrite && !n, B = e.timeline;
       if (B && (!P || !w) && (w = "none"),
       e._ease = we(w, g.ease),
       e._yEase = R ? xe(we(!0 === R ? w : R, g.ease)) : 0,
       R && e._yoyo && !e._repeat && (R = e._yEase,
       e._yEase = e._ease,
       e._ease = R),
       !B) {
           if (v = (d = N[0] ? rt(N[0]).harness : 0) && y[d.prop],
           a = _t(y, Z),
           O && O.render(-1, !0).kill(),
           b) {
               if (wt(e._startAt = Fe.set(N, ft({
                   data: "isStart",
                   overwrite: !1,
                   parent: z,
                   immediateRender: !0,
                   lazy: C(S),
                   startAt: null,
                   delay: 0,
                   onUpdate: T,
                   onUpdateParams: E,
                   callbackScope: L,
                   stagger: 0
               }, b))),
               M)
                   if (r > 0)
                       D || (e._startAt = 0);
                   else if (I && !(r < 0 && O))
                       return void (r && (e._zTime = r))
           } else if (A && I)
               if (O)
                   !D && (e._startAt = 0);
               else if (r && (M = !1),
               s = ft({
                   overwrite: !1,
                   data: "isFromStart",
                   lazy: M && C(S),
                   immediateRender: M,
                   stagger: 0,
                   parent: z
               }, a),
               v && (s[d.prop] = v),
               wt(e._startAt = Fe.set(N, s)),
               M) {
                   if (!r)
                       return
               } else
                   t(e._startAt, _);
           for (e._pt = 0,
           S = I && C(S) || S && !I,
           o = 0; o < N.length; o++) {
               if (h = (c = N[o])._gsap || it(N)[o]._gsap,
               e._ptLookup[o] = f = {},
               Q[h.id] && J.length && ut(),
               m = F === N ? o : F.indexOf(c),
               d && !1 !== (p = new d).init(c, v || a, e, m, F) && (e._pt = l = new Qe(e._pt,c,p.name,0,1,p.render,p,0,p.priority),
               p._props.forEach((function(t) {
                   f[t] = l
               }
               )),
               p.priority && (u = 1)),
               !d || v)
                   for (s in a)
                       K[s] && (p = De(s, a, e, m, c, F)) ? p.priority && (u = 1) : f[s] = l = Pe.call(e, c, s, "get", a[s], m, F, 0, y.stringFilter);
               e._op && e._op[o] && e.kill(c, e._op[o]),
               H && e._pt && (Re = e,
               i.killTweensOf(c, f, e.globalTime(0)),
               x = !e.parent,
               Re = 0),
               e._pt && S && (Q[h.id] = 1)
           }
           u && Je(e),
           e._onInit && e._onInit(e)
       }
       e._from = !B && !!y.runBackwards,
       e._onUpdate = T,
       e._initted = (!e._op || e._pt) && !x
   }, Oe = function(t, e, n, i, r) {
       return E(t) ? t.call(e, n, i, r) : T(t) && ~t.indexOf("random(") ? Kt(t) : t
   }, Ne = nt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", ze = (Ne + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), Fe = function(r) {
       function a(e, a, o, s) {
           var l;
           "number" == typeof a && (o.duration = a,
           a = o,
           o = null);
           var c, u, h, d, p, f, g, v, _ = (l = r.call(this, s ? a : xt(a), o) || this).vars, x = _.duration, y = _.delay, w = _.immediateRender, b = _.stagger, M = _.overwrite, S = _.keyframes, T = _.defaults, E = _.scrollTrigger, A = _.yoyoEase, P = l.parent, N = (O(e) || I(e) ? L(e[0]) : "length"in a) ? [e] : qt(e);
           if (l._targets = N.length ? it(N) : j("GSAP target " + e + " not found. https://greensock.com", !m.nullTargetWarn) || [],
           l._ptLookup = [],
           l._overwrite = M,
           S || b || D(x) || D(y)) {
               if (a = l.vars,
               (c = l.timeline = new Ae({
                   data: "nested",
                   defaults: T || {}
               })).kill(),
               c.parent = c._dp = t(l),
               c._start = 0,
               S)
                   ft(c.vars.defaults, {
                       ease: "none"
                   }),
                   S.forEach((function(t) {
                       return c.to(N, t, ">")
                   }
                   ));
               else {
                   if (d = N.length,
                   g = b ? Yt(b) : X,
                   R(b))
                       for (p in b)
                           ~Ne.indexOf(p) && (v || (v = {}),
                           v[p] = b[p]);
                   for (u = 0; u < d; u++) {
                       for (p in h = {},
                       a)
                           ze.indexOf(p) < 0 && (h[p] = a[p]);
                       h.stagger = 0,
                       A && (h.yoyoEase = A),
                       v && gt(h, v),
                       f = N[u],
                       h.duration = +Oe(x, t(l), u, f, N),
                       h.delay = (+Oe(y, t(l), u, f, N) || 0) - l._delay,
                       !b && 1 === d && h.delay && (l._delay = y = h.delay,
                       l._start += y,
                       h.delay = 0),
                       c.to(f, h, g(u, f, N))
                   }
                   c.duration() ? x = y = 0 : l.timeline = 0
               }
               x || l.duration(x = c.duration())
           } else
               l.timeline = 0;
           return !0 !== M || n || (Re = t(l),
           i.killTweensOf(N),
           Re = 0),
           P && Ct(P, t(l)),
           (w || !x && !S && l._start === st(P._time) && C(w) && St(t(l)) && "nested" !== P.data) && (l._tTime = -1e-8,
           l.render(Math.max(0, -y))),
           E && Dt(t(l), E),
           l
       }
       e(a, r);
       var o = a.prototype;
       return o.render = function(t, e, n) {
           var i, r, a, o, s, l, c, u, h, d = this._time, p = this._tDur, f = this._dur, m = t > p - _ && t >= 0 ? p : t < _ ? 0 : t;
           if (f) {
               if (m !== this._tTime || !t || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                   if (i = m,
                   u = this.timeline,
                   this._repeat) {
                       if (o = f + this._rDelay,
                       this._repeat < -1 && t < 0)
                           return this.totalTime(100 * o + t, e, n);
                       if (i = st(m % o),
                       m === p ? (a = this._repeat,
                       i = f) : ((a = ~~(m / o)) && a === m / o && (i = f,
                       a--),
                       i > f && (i = f)),
                       (l = this._yoyo && 1 & a) && (h = this._yEase,
                       i = f - i),
                       s = Et(this._tTime, o),
                       i === d && !n && this._initted)
                           return this;
                       a !== s && (u && this._yEase && ye(u, l),
                       !this.vars.repeatRefresh || l || this._lock || (this._lock = n = 1,
                       this.render(st(o * a), !0).invalidate()._lock = 0))
                   }
                   if (!this._initted) {
                       if (It(this, t < 0 ? t : i, n, e))
                           return this._tTime = 0,
                           this;
                       if (f !== this._dur)
                           return this.render(t, e, n)
                   }
                   for (this._tTime = m,
                   this._time = i,
                   !this._act && this._ts && (this._act = 1,
                   this._lazy = 0),
                   this.ratio = c = (h || this._ease)(i / f),
                   this._from && (this.ratio = c = 1 - c),
                   i && !d && !e && ee(this, "onStart"),
                   r = this._pt; r; )
                       r.r(c, r.d),
                       r = r._next;
                   u && u.render(t < 0 ? t : !i && l ? -1e-8 : u._dur * c, e, n) || this._startAt && (this._zTime = t),
                   this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n),
                   ee(this, "onUpdate")),
                   this._repeat && a !== s && this.vars.onRepeat && !e && this.parent && ee(this, "onRepeat"),
                   m !== this._tDur && m || this._tTime !== m || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                   (t || !f) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && wt(this, 1),
                   e || t < 0 && !d || !m && !d || (ee(this, m === p ? "onComplete" : "onReverseComplete", !0),
                   this._prom && !(m < p && this.timeScale() > 0) && this._prom()))
               }
           } else
               !function(t, e, n, i) {
                   var r, a, o, s = t.ratio, l = e < 0 || !e && (!t._start && Ot(t) || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data) ? 0 : 1, c = t._rDelay, u = 0;
                   if (c && t._repeat && (u = kt(0, t._tDur, e),
                   a = Et(u, c),
                   o = Et(t._tTime, c),
                   t._yoyo && 1 & a && (l = 1 - l),
                   a !== o && (s = 1 - l,
                   t.vars.repeatRefresh && t._initted && t.invalidate())),
                   l !== s || i || t._zTime === _ || !e && t._zTime) {
                       if (!t._initted && It(t, e, i, n))
                           return;
                       for (o = t._zTime,
                       t._zTime = e || (n ? _ : 0),
                       n || (n = e && !o),
                       t.ratio = l,
                       t._from && (l = 1 - l),
                       t._time = 0,
                       t._tTime = u,
                       n || ee(t, "onStart"),
                       r = t._pt; r; )
                           r.r(l, r.d),
                           r = r._next;
                       t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                       t._onUpdate && !n && ee(t, "onUpdate"),
                       u && t._repeat && !n && t.parent && ee(t, "onRepeat"),
                       (e >= t._tDur || e < 0) && t.ratio === l && (l && wt(t, 1),
                       n || (ee(t, l ? "onComplete" : "onReverseComplete", !0),
                       t._prom && t._prom()))
                   } else
                       t._zTime || (t._zTime = e)
               }(this, t, e, n);
           return this
       }
       ,
       o.targets = function() {
           return this._targets
       }
       ,
       o.invalidate = function() {
           return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0,
           this._ptLookup = [],
           this.timeline && this.timeline.invalidate(),
           r.prototype.invalidate.call(this)
       }
       ,
       o.kill = function(t, e) {
           if (void 0 === e && (e = "all"),
           !(t || e && "all" !== e))
               return this._lazy = this._pt = 0,
               this.parent ? ne(this) : this;
           if (this.timeline) {
               var n = this.timeline.totalDuration();
               return this.timeline.killTweensOf(t, e, Re && !0 !== Re.vars.overwrite)._first || ne(this),
               this.parent && n !== this.timeline.totalDuration() && Nt(this, this._dur * this.timeline._tDur / n, 0, 1),
               this
           }
           var i, r, a, o, s, l, c, u = this._targets, h = t ? qt(t) : u, d = this._ptLookup, p = this._pt;
           if ((!e || "all" === e) && function(t, e) {
               for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n]; )
                   ;
               return n < 0
           }(u, h))
               return "all" === e && (this._pt = 0),
               ne(this);
           for (i = this._op = this._op || [],
           "all" !== e && (T(e) && (s = {},
           ot(e, (function(t) {
               return s[t] = 1
           }
           )),
           e = s),
           e = function(t, e) {
               var n, i, r, a, o = t[0] ? rt(t[0]).harness : 0, s = o && o.aliases;
               if (!s)
                   return e;
               for (i in n = gt({}, e),
               s)
                   if (i in n)
                       for (r = (a = s[i].split(",")).length; r--; )
                           n[a[r]] = n[i];
               return n
           }(u, e)),
           c = u.length; c--; )
               if (~h.indexOf(u[c]))
                   for (s in r = d[c],
                   "all" === e ? (i[c] = e,
                   o = r,
                   a = {}) : (a = i[c] = i[c] || {},
                   o = e),
                   o)
                       (l = r && r[s]) && ("kill"in l.d && !0 !== l.d.kill(s) || yt(this, l, "_pt"),
                       delete r[s]),
                       "all" !== a && (a[s] = 1);
           return this._initted && !this._pt && p && ne(this),
           this
       }
       ,
       a.to = function(t, e) {
           return new a(t,e,arguments[2])
       }
       ,
       a.from = function(t, e) {
           return new a(t,ct(arguments, 1))
       }
       ,
       a.delayedCall = function(t, e, n, i) {
           return new a(e,0,{
               immediateRender: !1,
               lazy: !1,
               overwrite: !1,
               delay: t,
               onComplete: e,
               onReverseComplete: e,
               onCompleteParams: n,
               onReverseCompleteParams: n,
               callbackScope: i
           })
       }
       ,
       a.fromTo = function(t, e, n) {
           return new a(t,ct(arguments, 2))
       }
       ,
       a.set = function(t, e) {
           return e.duration = 0,
           e.repeatDelay || (e.repeat = 0),
           new a(t,e)
       }
       ,
       a.killTweensOf = function(t, e, n) {
           return i.killTweensOf(t, e, n)
       }
       ,
       a
   }(Le);
   ft(Fe.prototype, {
       _targets: [],
       _lazy: 0,
       _startAt: 0,
       _op: 0,
       _onInit: 0
   }),
   ot("staggerTo,staggerFrom,staggerFromTo", (function(t) {
       Fe[t] = function() {
           var e = new Ae
             , n = Gt.call(arguments, 0);
           return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
           e[t].apply(e, n)
       }
   }
   ));
   var He = function(t, e, n) {
       return t[e] = n
   }
     , Be = function(t, e, n) {
       return t[e](n)
   }
     , ke = function(t, e, n, i) {
       return t[e](i.fp, n)
   }
     , Ue = function(t, e, n) {
       return t.setAttribute(e, n)
   }
     , Ge = function(t, e) {
       return E(t[e]) ? Be : A(t[e]) && t.setAttribute ? Ue : He
   }
     , We = function(t, e) {
       return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
   }
     , Ve = function(t, e) {
       return e.set(e.t, e.p, !!(e.s + e.c * t), e)
   }
     , qe = function(t, e) {
       var n = e._pt
         , i = "";
       if (!t && e.b)
           i = e.b;
       else if (1 === t && e.e)
           i = e.e;
       else {
           for (; n; )
               i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + i,
               n = n._next;
           i += e.c
       }
       e.set(e.t, e.p, i, e)
   }
     , je = function(t, e) {
       for (var n = e._pt; n; )
           n.r(t, n.d),
           n = n._next
   }
     , Ye = function(t, e, n, i) {
       for (var r, a = this._pt; a; )
           r = a._next,
           a.p === i && a.modifier(t, e, n),
           a = r
   }
     , Xe = function(t) {
       for (var e, n, i = this._pt; i; )
           n = i._next,
           i.p === t && !i.op || i.op === t ? yt(this, i, "_pt") : i.dep || (e = 1),
           i = n;
       return !e
   }
     , Ze = function(t, e, n, i) {
       i.mSet(t, e, i.m.call(i.tween, n, i.mt), i)
   }
     , Je = function(t) {
       for (var e, n, i, r, a = t._pt; a; ) {
           for (e = a._next,
           n = i; n && n.pr > a.pr; )
               n = n._next;
           (a._prev = n ? n._prev : r) ? a._prev._next = a : i = a,
           (a._next = n) ? n._prev = a : r = a,
           a = e
       }
       t._pt = i
   }
     , Qe = function() {
       function t(t, e, n, i, r, a, o, s, l) {
           this.t = e,
           this.s = i,
           this.c = r,
           this.p = n,
           this.r = a || We,
           this.d = o || this,
           this.set = s || He,
           this.pr = l || 0,
           this._next = t,
           t && (t._prev = this)
       }
       return t.prototype.modifier = function(t, e, n) {
           this.mSet = this.mSet || this.set,
           this.set = Ze,
           this.m = t,
           this.mt = n,
           this.tween = e
       }
       ,
       t
   }();
   ot(nt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
       return Z[t] = 1
   }
   )),
   G.TweenMax = G.TweenLite = Fe,
   G.TimelineLite = G.TimelineMax = Ae,
   i = new Ae({
       sortChildren: !1,
       defaults: g,
       autoRemoveChildren: !0,
       id: "root",
       smoothChildTiming: !0
   }),
   m.stringFilter = de;
   var Ke = {
       registerPlugin: function() {
           for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
               e[n] = arguments[n];
           e.forEach((function(t) {
               return ie(t)
           }
           ))
       },
       timeline: function(t) {
           return new Ae(t)
       },
       getTweensOf: function(t, e) {
           return i.getTweensOf(t, e)
       },
       getProperty: function(t, e, n, i) {
           T(t) && (t = qt(t)[0]);
           var r = rt(t || {}).get
             , a = n ? pt : dt;
           return "native" === n && (n = ""),
           t ? e ? a((K[e] && K[e].get || r)(t, e, n, i)) : function(e, n, i) {
               return a((K[e] && K[e].get || r)(t, e, n, i))
           }
           : t
       },
       quickSetter: function(t, e, n) {
           if ((t = qt(t)).length > 1) {
               var i = t.map((function(t) {
                   return en.quickSetter(t, e, n)
               }
               ))
                 , r = i.length;
               return function(t) {
                   for (var e = r; e--; )
                       i[e](t)
               }
           }
           t = t[0] || {};
           var a = K[e]
             , o = rt(t)
             , s = o.harness && (o.harness.aliases || {})[e] || e
             , l = a ? function(e) {
               var i = new a;
               c._pt = 0,
               i.init(t, n ? e + n : e, c, 0, [t]),
               i.render(1, i),
               c._pt && je(1, c)
           }
           : o.set(t, s);
           return a ? l : function(e) {
               return l(t, s, n ? e + n : e, o, 1)
           }
       },
       isTweening: function(t) {
           return i.getTweensOf(t, !0).length > 0
       },
       defaults: function(t) {
           return t && t.ease && (t.ease = we(t.ease, g.ease)),
           vt(g, t || {})
       },
       config: function(t) {
           return vt(m, t || {})
       },
       registerEffect: function(t) {
           var e = t.name
             , n = t.effect
             , i = t.plugins
             , r = t.defaults
             , a = t.extendTimeline;
           (i || "").split(",").forEach((function(t) {
               return t && !K[t] && !G[t] && j(e + " effect requires " + t + " plugin.")
           }
           )),
           $[e] = function(t, e, i) {
               return n(qt(t), ft(e || {}, r), i)
           }
           ,
           a && (Ae.prototype[e] = function(t, n, i) {
               return this.add($[e](t, R(n) ? n : (i = n) && {}, this), i)
           }
           )
       },
       registerEase: function(t, e) {
           me[t] = we(e)
       },
       parseEase: function(t, e) {
           return arguments.length ? we(t, e) : me
       },
       getById: function(t) {
           return i.getById(t)
       },
       exportRoot: function(t, e) {
           void 0 === t && (t = {});
           var n, r, a = new Ae(t);
           for (a.smoothChildTiming = C(t.smoothChildTiming),
           i.remove(a),
           a._dp = 0,
           a._time = a._tTime = i._time,
           n = i._first; n; )
               r = n._next,
               !e && !n._dur && n instanceof Fe && n.vars.onComplete === n._targets[0] || Pt(a, n, n._start - n._delay),
               n = r;
           return Pt(i, a, 0),
           a
       },
       utils: {
           wrap: function t(e, n, i) {
               var r = n - e;
               return O(e) ? Qt(e, t(0, e.length), n) : Bt(i, (function(t) {
                   return (r + (t - e) % r) % r + e
               }
               ))
           },
           wrapYoyo: function t(e, n, i) {
               var r = n - e
                 , a = 2 * r;
               return O(e) ? Qt(e, t(0, e.length - 1), n) : Bt(i, (function(t) {
                   return e + ((t = (a + (t - e) % a) % a || 0) > r ? a - t : t)
               }
               ))
           },
           distribute: Yt,
           random: Jt,
           snap: Zt,
           normalize: function(t, e, n) {
               return $t(t, e, 0, 1, n)
           },
           getUnit: Ut,
           clamp: function(t, e, n) {
               return Bt(n, (function(n) {
                   return kt(t, e, n)
               }
               ))
           },
           splitColor: se,
           toArray: qt,
           mapRange: $t,
           pipe: function() {
               for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                   e[n] = arguments[n];
               return function(t) {
                   return e.reduce((function(t, e) {
                       return e(t)
                   }
                   ), t)
               }
           },
           unitize: function(t, e) {
               return function(n) {
                   return t(parseFloat(n)) + (e || Ut(n))
               }
           },
           interpolate: function t(e, n, i, r) {
               var a = isNaN(e + n) ? 0 : function(t) {
                   return (1 - t) * e + t * n
               }
               ;
               if (!a) {
                   var o, s, l, c, u, h = T(e), d = {};
                   if (!0 === i && (r = 1) && (i = null),
                   h)
                       e = {
                           p: e
                       },
                       n = {
                           p: n
                       };
                   else if (O(e) && !O(n)) {
                       for (l = [],
                       c = e.length,
                       u = c - 2,
                       s = 1; s < c; s++)
                           l.push(t(e[s - 1], e[s]));
                       c--,
                       a = function(t) {
                           t *= c;
                           var e = Math.min(u, ~~t);
                           return l[e](t - e)
                       }
                       ,
                       i = n
                   } else
                       r || (e = gt(O(e) ? [] : {}, e));
                   if (!l) {
                       for (o in n)
                           Pe.call(d, e, o, "get", n[o]);
                       a = function(t) {
                           return je(t, d) || (h ? e.p : e)
                       }
                   }
               }
               return Bt(i, a)
           },
           shuffle: jt
       },
       install: V,
       effects: $,
       ticker: pe,
       updateRoot: Ae.updateRoot,
       plugins: K,
       globalTimeline: i,
       core: {
           PropTween: Qe,
           globals: Y,
           Tween: Fe,
           Timeline: Ae,
           Animation: Le,
           getCache: rt,
           _removeLinkedListItem: yt,
           suppressOverwrites: function(t) {
               return n = t
           }
       }
   };
   ot("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
       return Ke[t] = Fe[t]
   }
   )),
   pe.add(Ae.updateRoot),
   c = Ke.to({}, {
       duration: 0
   });
   var $e = function(t, e) {
       for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
           n = n._next;
       return n
   }
     , tn = function(t, e) {
       return {
           name: t,
           rawVars: 1,
           init: function(t, n, i) {
               i._onInit = function(t) {
                   var i, r;
                   if (T(n) && (i = {},
                   ot(n, (function(t) {
                       return i[t] = 1
                   }
                   )),
                   n = i),
                   e) {
                       for (r in i = {},
                       n)
                           i[r] = e(n[r]);
                       n = i
                   }
                   !function(t, e) {
                       var n, i, r, a = t._targets;
                       for (n in e)
                           for (i = a.length; i--; )
                               (r = t._ptLookup[i][n]) && (r = r.d) && (r._pt && (r = $e(r, n)),
                               r && r.modifier && r.modifier(e[n], t, a[i], n))
                   }(t, n)
               }
           }
       }
   }
     , en = Ke.registerPlugin({
       name: "attr",
       init: function(t, e, n, i, r) {
           var a, o;
           for (a in e)
               (o = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, r, 0, 0, a)) && (o.op = a),
               this._props.push(a)
       }
   }, {
       name: "endArray",
       init: function(t, e) {
           for (var n = e.length; n--; )
               this.add(t, n, t[n] || 0, e[n])
       }
   }, tn("roundProps", Xt), tn("modifiers"), tn("snap", Zt)) || Ke;
   Fe.version = Ae.version = en.version = "3.6.0",
   s = 1,
   P() && fe()/*!
  * CSSPlugin 3.6.0
  * https://greensock.com
  *
  * Copyright 2008-2021, GreenSock. All rights reserved.
  * Subject to the terms at https://greensock.com/standard-license or for
  * Club GreenSock members, the agreement issued with that membership.
  * @author: Jack Doyle, jack@greensock.com
 */
   ;
   var nn, rn, an, on, sn, ln, cn, un, hn = {}, dn = 180 / Math.PI, pn = Math.PI / 180, fn = Math.atan2, mn = /([A-Z])/g, gn = /(?:left|right|width|margin|padding|x)/i, vn = /[\s,\(]\S/, _n = {
       autoAlpha: "opacity,visibility",
       scale: "scaleX,scaleY",
       alpha: "opacity"
   }, xn = function(t, e) {
       return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
   }, yn = function(t, e) {
       return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
   }, wn = function(t, e) {
       return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
   }, bn = function(t, e) {
       var n = e.s + e.c * t;
       e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
   }, Mn = function(t, e) {
       return e.set(e.t, e.p, t ? e.e : e.b, e)
   }, Sn = function(t, e) {
       return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
   }, Tn = function(t, e, n) {
       return t.style[e] = n
   }, En = function(t, e, n) {
       return t.style.setProperty(e, n)
   }, Ln = function(t, e, n) {
       return t._gsap[e] = n
   }, An = function(t, e, n) {
       return t._gsap.scaleX = t._gsap.scaleY = n
   }, Rn = function(t, e, n, i, r) {
       var a = t._gsap;
       a.scaleX = a.scaleY = n,
       a.renderTransform(r, a)
   }, Cn = function(t, e, n, i, r) {
       var a = t._gsap;
       a[e] = n,
       a.renderTransform(r, a)
   }, Pn = "transform", Dn = Pn + "Origin", In = function(t, e) {
       var n = rn.createElementNS ? rn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : rn.createElement(t);
       return n.style ? n : rn.createElement(t)
   }, On = function t(e, n, i) {
       var r = getComputedStyle(e);
       return r[n] || r.getPropertyValue(n.replace(mn, "-$1").toLowerCase()) || r.getPropertyValue(n) || !i && t(e, zn(n) || n, 1) || ""
   }, Nn = "O,Moz,ms,Ms,Webkit".split(","), zn = function(t, e, n) {
       var i = (e || sn).style
         , r = 5;
       if (t in i && !n)
           return t;
       for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(Nn[r] + t in i); )
           ;
       return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? Nn[r] : "") + t
   }, Fn = function() {
       "undefined" != typeof window && window.document && (nn = window,
       rn = nn.document,
       an = rn.documentElement,
       sn = In("div") || {
           style: {}
       },
       ln = In("div"),
       Pn = zn(Pn),
       Dn = Pn + "Origin",
       sn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
       un = !!zn("perspective"),
       on = 1)
   }, Hn = function t(e) {
       var n, i = In("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, a = this.nextSibling, o = this.style.cssText;
       if (an.appendChild(i),
       i.appendChild(this),
       this.style.display = "block",
       e)
           try {
               n = this.getBBox(),
               this._gsapBBox = this.getBBox,
               this.getBBox = t
           } catch (t) {}
       else
           this._gsapBBox && (n = this._gsapBBox());
       return r && (a ? r.insertBefore(this, a) : r.appendChild(this)),
       an.removeChild(i),
       this.style.cssText = o,
       n
   }, Bn = function(t, e) {
       for (var n = e.length; n--; )
           if (t.hasAttribute(e[n]))
               return t.getAttribute(e[n])
   }, kn = function(t) {
       var e;
       try {
           e = t.getBBox()
       } catch (n) {
           e = Hn.call(t, !0)
       }
       return e && (e.width || e.height) || t.getBBox === Hn || (e = Hn.call(t, !0)),
       !e || e.width || e.x || e.y ? e : {
           x: +Bn(t, ["x", "cx", "x1"]) || 0,
           y: +Bn(t, ["y", "cy", "y1"]) || 0,
           width: 0,
           height: 0
       }
   }, Un = function(t) {
       return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !kn(t))
   }, Gn = function(t, e) {
       if (e) {
           var n = t.style;
           e in hn && e !== Dn && (e = Pn),
           n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
           n.removeProperty(e.replace(mn, "-$1").toLowerCase())) : n.removeAttribute(e)
       }
   }, Wn = function(t, e, n, i, r, a) {
       var o = new Qe(t._pt,e,n,0,1,a ? Sn : Mn);
       return t._pt = o,
       o.b = i,
       o.e = r,
       t._props.push(n),
       o
   }, Vn = {
       deg: 1,
       rad: 1,
       turn: 1
   }, qn = function t(e, n, i, r) {
       var a, o, s, l, c = parseFloat(i) || 0, u = (i + "").trim().substr((c + "").length) || "px", h = sn.style, d = gn.test(n), p = "svg" === e.tagName.toLowerCase(), f = (p ? "client" : "offset") + (d ? "Width" : "Height"), m = 100, g = "px" === r, v = "%" === r;
       return r === u || !c || Vn[r] || Vn[u] ? c : ("px" !== u && !g && (c = t(e, n, i, "px")),
       l = e.getCTM && Un(e),
       !v && "%" !== u || !hn[n] && !~n.indexOf("adius") ? (h[d ? "width" : "height"] = m + (g ? u : r),
       o = ~n.indexOf("adius") || "em" === r && e.appendChild && !p ? e : e.parentNode,
       l && (o = (e.ownerSVGElement || {}).parentNode),
       o && o !== rn && o.appendChild || (o = rn.body),
       (s = o._gsap) && v && s.width && d && s.time === pe.time ? st(c / s.width * m) : ((v || "%" === u) && (h.position = On(e, "position")),
       o === e && (h.position = "static"),
       o.appendChild(sn),
       a = sn[f],
       o.removeChild(sn),
       h.position = "absolute",
       d && v && ((s = rt(o)).time = pe.time,
       s.width = o[f]),
       st(g ? a * c / m : a && c ? m / a * c : 0))) : (a = l ? e.getBBox()[d ? "width" : "height"] : e[f],
       st(v ? c / a * m : c / 100 * a)))
   }, jn = function(t, e, n, i) {
       var r;
       return on || Fn(),
       e in _n && "transform" !== e && ~(e = _n[e]).indexOf(",") && (e = e.split(",")[0]),
       hn[e] && "transform" !== e ? (r = ii(t, i),
       r = "transformOrigin" !== e ? r[e] : ri(On(t, Dn)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || i || ~(r + "").indexOf("calc(")) && (r = Jn[e] && Jn[e](t, e, n) || On(t, e) || at(t, e) || ("opacity" === e ? 1 : 0)),
       n && !~(r + "").trim().indexOf(" ") ? qn(t, e, r, n) + n : r
   }, Yn = function(t, e, n, i) {
       if (!n || "none" === n) {
           var r = zn(e, t, 1)
             , a = r && On(t, r, 1);
           a && a !== n ? (e = r,
           n = a) : "borderColor" === e && (n = On(t, "borderTopColor"))
       }
       var o, s, l, c, u, h, d, p, f, g, v, _, x = new Qe(this._pt,t.style,e,0,1,qe), y = 0, w = 0;
       if (x.b = n,
       x.e = i,
       n += "",
       "auto" === (i += "") && (t.style[e] = i,
       i = On(t, e) || i,
       t.style[e] = n),
       de(o = [n, i]),
       n = o[0],
       i = o[1],
       l = n.match(F) || [],
       (i.match(F) || []).length) {
           for (; s = F.exec(i); )
               d = s[0],
               f = i.substring(y, s.index),
               u ? u = (u + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (u = 1),
               d !== (h = l[w++] || "") && (c = parseFloat(h) || 0,
               v = h.substr((c + "").length),
               (_ = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)),
               p = parseFloat(d),
               g = d.substr((p + "").length),
               y = F.lastIndex - g.length,
               g || (g = g || m.units[e] || v,
               y === i.length && (i += g,
               x.e += g)),
               v !== g && (c = qn(t, e, h, g) || 0),
               x._pt = {
                   _next: x._pt,
                   p: f || 1 === w ? f : ",",
                   s: c,
                   c: _ ? _ * p : p - c,
                   m: u && u < 4 || "zIndex" === e ? Math.round : 0
               });
           x.c = y < i.length ? i.substring(y, i.length) : ""
       } else
           x.r = "display" === e && "none" === i ? Sn : Mn;
       return B.test(i) && (x.e = 0),
       this._pt = x,
       x
   }, Xn = {
       top: "0%",
       bottom: "100%",
       left: "0%",
       right: "100%",
       center: "50%"
   }, Zn = function(t, e) {
       if (e.tween && e.tween._time === e.tween._dur) {
           var n, i, r, a = e.t, o = a.style, s = e.u, l = a._gsap;
           if ("all" === s || !0 === s)
               o.cssText = "",
               i = 1;
           else
               for (r = (s = s.split(",")).length; --r > -1; )
                   n = s[r],
                   hn[n] && (i = 1,
                   n = "transformOrigin" === n ? Dn : Pn),
                   Gn(a, n);
           i && (Gn(a, Pn),
           l && (l.svg && a.removeAttribute("transform"),
           ii(a, 1),
           l.uncache = 1))
       }
   }, Jn = {
       clearProps: function(t, e, n, i, r) {
           if ("isFromStart" !== r.data) {
               var a = t._pt = new Qe(t._pt,e,n,0,0,Zn);
               return a.u = i,
               a.pr = -10,
               a.tween = r,
               t._props.push(n),
               1
           }
       }
   }, Qn = [1, 0, 0, 1, 0, 0], Kn = {}, $n = function(t) {
       return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
   }, ti = function(t) {
       var e = On(t, Pn);
       return $n(e) ? Qn : e.substr(7).match(z).map(st)
   }, ei = function(t, e) {
       var n, i, r, a, o = t._gsap || rt(t), s = t.style, l = ti(t);
       return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? Qn : l : (l !== Qn || t.offsetParent || t === an || o.svg || (r = s.display,
       s.display = "block",
       (n = t.parentNode) && t.offsetParent || (a = 1,
       i = t.nextSibling,
       an.appendChild(t)),
       l = ti(t),
       r ? s.display = r : Gn(t, "display"),
       a && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : an.removeChild(t))),
       e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
   }, ni = function(t, e, n, i, r, a) {
       var o, s, l, c = t._gsap, u = r || ei(t, !0), h = c.xOrigin || 0, d = c.yOrigin || 0, p = c.xOffset || 0, f = c.yOffset || 0, m = u[0], g = u[1], v = u[2], _ = u[3], x = u[4], y = u[5], w = e.split(" "), b = parseFloat(w[0]) || 0, M = parseFloat(w[1]) || 0;
       n ? u !== Qn && (s = m * _ - g * v) && (l = b * (-g / s) + M * (m / s) - (m * y - g * x) / s,
       b = b * (_ / s) + M * (-v / s) + (v * y - _ * x) / s,
       M = l) : (b = (o = kn(t)).x + (~w[0].indexOf("%") ? b / 100 * o.width : b),
       M = o.y + (~(w[1] || w[0]).indexOf("%") ? M / 100 * o.height : M)),
       i || !1 !== i && c.smooth ? (x = b - h,
       y = M - d,
       c.xOffset = p + (x * m + y * v) - x,
       c.yOffset = f + (x * g + y * _) - y) : c.xOffset = c.yOffset = 0,
       c.xOrigin = b,
       c.yOrigin = M,
       c.smooth = !!i,
       c.origin = e,
       c.originIsAbsolute = !!n,
       t.style[Dn] = "0px 0px",
       a && (Wn(a, c, "xOrigin", h, b),
       Wn(a, c, "yOrigin", d, M),
       Wn(a, c, "xOffset", p, c.xOffset),
       Wn(a, c, "yOffset", f, c.yOffset)),
       t.setAttribute("data-svg-origin", b + " " + M)
   }, ii = function(t, e) {
       var n = t._gsap || new Ee(t);
       if ("x"in n && !e && !n.uncache)
           return n;
       var i, r, a, o, s, l, c, u, h, d, p, f, g, v, _, x, y, w, b, M, S, T, E, L, A, R, C, P, D, I, O, N, z = t.style, F = n.scaleX < 0, H = "px", B = "deg", k = On(t, Dn) || "0";
       return i = r = a = l = c = u = h = d = p = 0,
       o = s = 1,
       n.svg = !(!t.getCTM || !Un(t)),
       v = ei(t, n.svg),
       n.svg && (L = !n.uncache && t.getAttribute("data-svg-origin"),
       ni(t, L || k, !!L || n.originIsAbsolute, !1 !== n.smooth, v)),
       f = n.xOrigin || 0,
       g = n.yOrigin || 0,
       v !== Qn && (w = v[0],
       b = v[1],
       M = v[2],
       S = v[3],
       i = T = v[4],
       r = E = v[5],
       6 === v.length ? (o = Math.sqrt(w * w + b * b),
       s = Math.sqrt(S * S + M * M),
       l = w || b ? fn(b, w) * dn : 0,
       (h = M || S ? fn(M, S) * dn + l : 0) && (s *= Math.cos(h * pn)),
       n.svg && (i -= f - (f * w + g * M),
       r -= g - (f * b + g * S))) : (N = v[6],
       I = v[7],
       C = v[8],
       P = v[9],
       D = v[10],
       O = v[11],
       i = v[12],
       r = v[13],
       a = v[14],
       c = (_ = fn(N, D)) * dn,
       _ && (L = T * (x = Math.cos(-_)) + C * (y = Math.sin(-_)),
       A = E * x + P * y,
       R = N * x + D * y,
       C = T * -y + C * x,
       P = E * -y + P * x,
       D = N * -y + D * x,
       O = I * -y + O * x,
       T = L,
       E = A,
       N = R),
       u = (_ = fn(-M, D)) * dn,
       _ && (x = Math.cos(-_),
       O = S * (y = Math.sin(-_)) + O * x,
       w = L = w * x - C * y,
       b = A = b * x - P * y,
       M = R = M * x - D * y),
       l = (_ = fn(b, w)) * dn,
       _ && (L = w * (x = Math.cos(_)) + b * (y = Math.sin(_)),
       A = T * x + E * y,
       b = b * x - w * y,
       E = E * x - T * y,
       w = L,
       T = A),
       c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0,
       u = 180 - u),
       o = st(Math.sqrt(w * w + b * b + M * M)),
       s = st(Math.sqrt(E * E + N * N)),
       _ = fn(T, E),
       h = Math.abs(_) > 2e-4 ? _ * dn : 0,
       p = O ? 1 / (O < 0 ? -O : O) : 0),
       n.svg && (L = t.getAttribute("transform"),
       n.forceCSS = t.setAttribute("transform", "") || !$n(On(t, Pn)),
       L && t.setAttribute("transform", L))),
       Math.abs(h) > 90 && Math.abs(h) < 270 && (F ? (o *= -1,
       h += l <= 0 ? 180 : -180,
       l += l <= 0 ? 180 : -180) : (s *= -1,
       h += h <= 0 ? 180 : -180)),
       n.x = i - ((n.xPercent = i && (n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + H,
       n.y = r - ((n.yPercent = r && (n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + H,
       n.z = a + H,
       n.scaleX = st(o),
       n.scaleY = st(s),
       n.rotation = st(l) + B,
       n.rotationX = st(c) + B,
       n.rotationY = st(u) + B,
       n.skewX = h + B,
       n.skewY = d + B,
       n.transformPerspective = p + H,
       (n.zOrigin = parseFloat(k.split(" ")[2]) || 0) && (z[Dn] = ri(k)),
       n.xOffset = n.yOffset = 0,
       n.force3D = m.force3D,
       n.renderTransform = n.svg ? hi : un ? ui : oi,
       n.uncache = 0,
       n
   }, ri = function(t) {
       return (t = t.split(" "))[0] + " " + t[1]
   }, ai = function(t, e, n) {
       var i = Ut(e);
       return st(parseFloat(e) + parseFloat(qn(t, "x", n + "px", i))) + i
   }, oi = function(t, e) {
       e.z = "0px",
       e.rotationY = e.rotationX = "0deg",
       e.force3D = 0,
       ui(t, e)
   }, si = "0deg", li = "0px", ci = ") ", ui = function(t, e) {
       var n = e || this
         , i = n.xPercent
         , r = n.yPercent
         , a = n.x
         , o = n.y
         , s = n.z
         , l = n.rotation
         , c = n.rotationY
         , u = n.rotationX
         , h = n.skewX
         , d = n.skewY
         , p = n.scaleX
         , f = n.scaleY
         , m = n.transformPerspective
         , g = n.force3D
         , v = n.target
         , _ = n.zOrigin
         , x = ""
         , y = "auto" === g && t && 1 !== t || !0 === g;
       if (_ && (u !== si || c !== si)) {
           var w, b = parseFloat(c) * pn, M = Math.sin(b), S = Math.cos(b);
           b = parseFloat(u) * pn,
           w = Math.cos(b),
           a = ai(v, a, M * w * -_),
           o = ai(v, o, -Math.sin(b) * -_),
           s = ai(v, s, S * w * -_ + _)
       }
       m !== li && (x += "perspective(" + m + ci),
       (i || r) && (x += "translate(" + i + "%, " + r + "%) "),
       (y || a !== li || o !== li || s !== li) && (x += s !== li || y ? "translate3d(" + a + ", " + o + ", " + s + ") " : "translate(" + a + ", " + o + ci),
       l !== si && (x += "rotate(" + l + ci),
       c !== si && (x += "rotateY(" + c + ci),
       u !== si && (x += "rotateX(" + u + ci),
       h === si && d === si || (x += "skew(" + h + ", " + d + ci),
       1 === p && 1 === f || (x += "scale(" + p + ", " + f + ci),
       v.style[Pn] = x || "translate(0, 0)"
   }, hi = function(t, e) {
       var n, i, r, a, o, s = e || this, l = s.xPercent, c = s.yPercent, u = s.x, h = s.y, d = s.rotation, p = s.skewX, f = s.skewY, m = s.scaleX, g = s.scaleY, v = s.target, _ = s.xOrigin, x = s.yOrigin, y = s.xOffset, w = s.yOffset, b = s.forceCSS, M = parseFloat(u), S = parseFloat(h);
       d = parseFloat(d),
       p = parseFloat(p),
       (f = parseFloat(f)) && (p += f = parseFloat(f),
       d += f),
       d || p ? (d *= pn,
       p *= pn,
       n = Math.cos(d) * m,
       i = Math.sin(d) * m,
       r = Math.sin(d - p) * -g,
       a = Math.cos(d - p) * g,
       p && (f *= pn,
       o = Math.tan(p - f),
       r *= o = Math.sqrt(1 + o * o),
       a *= o,
       f && (o = Math.tan(f),
       n *= o = Math.sqrt(1 + o * o),
       i *= o)),
       n = st(n),
       i = st(i),
       r = st(r),
       a = st(a)) : (n = m,
       a = g,
       i = r = 0),
       (M && !~(u + "").indexOf("px") || S && !~(h + "").indexOf("px")) && (M = qn(v, "x", u, "px"),
       S = qn(v, "y", h, "px")),
       (_ || x || y || w) && (M = st(M + _ - (_ * n + x * r) + y),
       S = st(S + x - (_ * i + x * a) + w)),
       (l || c) && (o = v.getBBox(),
       M = st(M + l / 100 * o.width),
       S = st(S + c / 100 * o.height)),
       o = "matrix(" + n + "," + i + "," + r + "," + a + "," + M + "," + S + ")",
       v.setAttribute("transform", o),
       b && (v.style[Pn] = o)
   }, di = function(t, e, n, i, r, a) {
       var o, s, l = 360, c = T(r), u = parseFloat(r) * (c && ~r.indexOf("rad") ? dn : 1), h = a ? u * a : u - i, d = i + h + "deg";
       return c && ("short" === (o = r.split("_")[1]) && (h %= l) !== h % 180 && (h += h < 0 ? l : -360),
       "cw" === o && h < 0 ? h = (h + 36e9) % l - ~~(h / l) * l : "ccw" === o && h > 0 && (h = (h - 36e9) % l - ~~(h / l) * l)),
       t._pt = s = new Qe(t._pt,e,n,i,h,yn),
       s.e = d,
       s.u = "deg",
       t._props.push(n),
       s
   }, pi = function(t, e, n) {
       var i, r, a, o, s, l, c, u = ln.style, h = n._gsap;
       for (r in u.cssText = getComputedStyle(n).cssText + ";position:absolute;display:block;",
       u[Pn] = e,
       rn.body.appendChild(ln),
       i = ii(ln, 1),
       hn)
           (a = h[r]) !== (o = i[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (s = Ut(a) !== (c = Ut(o)) ? qn(n, r, a, c) : parseFloat(a),
           l = parseFloat(o),
           t._pt = new Qe(t._pt,h,r,s,l - s,xn),
           t._pt.u = c || 0,
           t._props.push(r));
       rn.body.removeChild(ln)
   };
   ot("padding,margin,Width,Radius", (function(t, e) {
       var n = "Top"
         , i = "Right"
         , r = "Bottom"
         , a = "Left"
         , o = (e < 3 ? [n, i, r, a] : [n + a, n + i, r + i, r + a]).map((function(n) {
           return e < 2 ? t + n : "border" + n + t
       }
       ));
       Jn[e > 1 ? "border" + t : t] = function(t, e, n, i, r) {
           var a, s;
           if (arguments.length < 4)
               return a = o.map((function(e) {
                   return jn(t, e, n)
               }
               )),
               5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
           a = (i + "").split(" "),
           s = {},
           o.forEach((function(t, e) {
               return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
           }
           )),
           t.init(e, s, r)
       }
   }
   ));
   var fi, mi, gi, vi = {
       name: "css",
       register: Fn,
       targetTest: function(t) {
           return t.style && t.nodeType
       },
       init: function(t, e, n, i, r) {
           var a, o, s, l, c, u, h, d, p, f, g, v, _, x, y, w, b, M, S, T = this._props, E = t.style, L = n.vars.startAt;
           for (h in on || Fn(),
           e)
               if ("autoRound" !== h && (o = e[h],
               !K[h] || !De(h, e, n, i, t, r)))
                   if (c = typeof o,
                   u = Jn[h],
                   "function" === c && (c = typeof (o = o.call(n, i, t, r))),
                   "string" === c && ~o.indexOf("random(") && (o = Kt(o)),
                   u)
                       u(this, t, h, o, n) && (y = 1);
                   else if ("--" === h.substr(0, 2))
                       a = (getComputedStyle(t).getPropertyValue(h) + "").trim(),
                       o += "",
                       d = Ut(a),
                       (p = Ut(o)) ? d !== p && (a = qn(t, h, a, p) + p) : d && (o += d),
                       this.add(E, "setProperty", a, o, i, r, 0, 0, h);
                   else if ("undefined" !== c) {
                       if (L && h in L ? (a = "function" == typeof L[h] ? L[h].call(n, i, t, r) : L[h],
                       h in m.units && !Ut(a) && (a += m.units[h]),
                       "=" === (a + "").charAt(1) && (a = jn(t, h))) : a = jn(t, h),
                       l = parseFloat(a),
                       (f = "string" === c && "=" === o.charAt(1) ? +(o.charAt(0) + "1") : 0) && (o = o.substr(2)),
                       s = parseFloat(o),
                       h in _n && ("autoAlpha" === h && (1 === l && "hidden" === jn(t, "visibility") && s && (l = 0),
                       Wn(this, E, "visibility", l ? "inherit" : "hidden", s ? "inherit" : "hidden", !s)),
                       "scale" !== h && "transform" !== h && ~(h = _n[h]).indexOf(",") && (h = h.split(",")[0])),
                       g = h in hn)
                           if (v || ((_ = t._gsap).renderTransform && !e.parseTransform || ii(t, e.parseTransform),
                           x = !1 !== e.smoothOrigin && _.smooth,
                           (v = this._pt = new Qe(this._pt,E,Pn,0,1,_.renderTransform,_,0,-1)).dep = 1),
                           "scale" === h)
                               this._pt = new Qe(this._pt,_,"scaleY",_.scaleY,f ? f * s : s - _.scaleY),
                               T.push("scaleY", h),
                               h += "X";
                           else {
                               if ("transformOrigin" === h) {
                                   b = void 0,
                                   M = void 0,
                                   S = void 0,
                                   b = (w = o).split(" "),
                                   M = b[0],
                                   S = b[1] || "50%",
                                   "top" !== M && "bottom" !== M && "left" !== S && "right" !== S || (w = M,
                                   M = S,
                                   S = w),
                                   b[0] = Xn[M] || M,
                                   b[1] = Xn[S] || S,
                                   o = b.join(" "),
                                   _.svg ? ni(t, o, 0, x, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== _.zOrigin && Wn(this, _, "zOrigin", _.zOrigin, p),
                                   Wn(this, E, h, ri(a), ri(o)));
                                   continue
                               }
                               if ("svgOrigin" === h) {
                                   ni(t, o, 1, x, 0, this);
                                   continue
                               }
                               if (h in Kn) {
                                   di(this, _, h, l, o, f);
                                   continue
                               }
                               if ("smoothOrigin" === h) {
                                   Wn(this, _, "smooth", _.smooth, o);
                                   continue
                               }
                               if ("force3D" === h) {
                                   _[h] = o;
                                   continue
                               }
                               if ("transform" === h) {
                                   pi(this, o, t);
                                   continue
                               }
                           }
                       else
                           h in E || (h = zn(h) || h);
                       if (g || (s || 0 === s) && (l || 0 === l) && !vn.test(o) && h in E)
                           s || (s = 0),
                           (d = (a + "").substr((l + "").length)) !== (p = Ut(o) || (h in m.units ? m.units[h] : d)) && (l = qn(t, h, a, p)),
                           this._pt = new Qe(this._pt,g ? _ : E,h,l,f ? f * s : s - l,g || "px" !== p && "zIndex" !== h || !1 === e.autoRound ? xn : bn),
                           this._pt.u = p || 0,
                           d !== p && (this._pt.b = a,
                           this._pt.r = wn);
                       else if (h in E)
                           Yn.call(this, t, h, a, o);
                       else {
                           if (!(h in t)) {
                               q(h, o);
                               continue
                           }
                           this.add(t, h, t[h], o, i, r)
                       }
                       T.push(h)
                   }
           y && Je(this)
       },
       get: jn,
       aliases: _n,
       getSetter: function(t, e, n) {
           var i = _n[e];
           return i && i.indexOf(",") < 0 && (e = i),
           e in hn && e !== Dn && (t._gsap.x || jn(t, "x")) ? n && cn === n ? "scale" === e ? An : Ln : (cn = n || {}) && ("scale" === e ? Rn : Cn) : t.style && !A(t.style[e]) ? Tn : ~e.indexOf("-") ? En : Ge(t, e)
       },
       core: {
           _removeProperty: Gn,
           _getMatrix: ei
       }
   };
   en.utils.checkPrefix = zn,
   gi = ot((fi = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (mi = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
       hn[t] = 1
   }
   )),
   ot(mi, (function(t) {
       m.units[t] = "deg",
       Kn[t] = 1
   }
   )),
   _n[gi[13]] = fi + "," + mi,
   ot("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
       var e = t.split(":");
       _n[e[1]] = gi[e[0]]
   }
   )),
   ot("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
       m.units[t] = "px"
   }
   )),
   en.registerPlugin(vi);
   var _i = en.registerPlugin(vi) || en;
   _i.core.Tween;
   /*!
  * ScrollTrigger 3.6.0
  * https://greensock.com
  *
  * @license Copyright 2008-2021, GreenSock. All rights reserved.
  * Subject to the terms at https://greensock.com/standard-license or for
  * Club GreenSock members, the agreement issued with that membership.
  * @author: Jack Doyle, jack@greensock.com
 */
   var xi, yi, wi, bi, Mi, Si, Ti, Ei, Li, Ai, Ri, Ci, Pi, Di, Ii, Oi, Ni, zi, Fi, Hi, Bi, ki, Ui, Gi, Wi, Vi, qi, ji = 1, Yi = [], Xi = [], Zi = Date.now, Ji = Zi(), Qi = 0, Ki = 1, $i = function(t) {
       return t
   }, tr = function() {
       return "undefined" != typeof window
   }, er = function() {
       return xi || tr() && (xi = window.gsap) && xi.registerPlugin && xi
   }, nr = function(t) {
       return !!~Ti.indexOf(t)
   }, ir = function(t, e) {
       return ~Yi.indexOf(t) && Yi[Yi.indexOf(t) + 1][e]
   }, rr = function(t, e) {
       var n = e.s
         , i = e.sc
         , r = Xi.indexOf(t)
         , a = i === Ir.sc ? 1 : 2;
       return !~r && (r = Xi.push(t) - 1),
       Xi[r + a] || (Xi[r + a] = ir(t, n) || (nr(t) ? i : function(e) {
           return arguments.length ? t[n] = e : t[n]
       }
       ))
   }, ar = function(t) {
       return ir(t, "getBoundingClientRect") || (nr(t) ? function() {
           return _a.width = wi.innerWidth,
           _a.height = wi.innerHeight,
           _a
       }
       : function() {
           return zr(t)
       }
       )
   }, or = function(t, e) {
       var n = e.s
         , i = e.d2
         , r = e.d
         , a = e.a;
       return (n = "scroll" + i) && (a = ir(t, n)) ? a() - ar(t)()[r] : nr(t) ? Math.max(Mi[n], Si[n]) - (wi["inner" + i] || Mi["client" + i] || Si["client" + i]) : t[n] - t["offset" + i]
   }, sr = function(t, e) {
       for (var n = 0; n < Bi.length; n += 3)
           (!e || ~e.indexOf(Bi[n + 1])) && t(Bi[n], Bi[n + 1], Bi[n + 2])
   }, lr = function(t) {
       return "string" == typeof t
   }, cr = function(t) {
       return "function" == typeof t
   }, ur = function(t) {
       return "number" == typeof t
   }, hr = function(t) {
       return "object" == typeof t
   }, dr = function(t) {
       return cr(t) && t()
   }, pr = function(t, e) {
       return function() {
           var n = dr(t)
             , i = dr(e);
           return function() {
               dr(n),
               dr(i)
           }
       }
   }, fr = Math.abs, mr = "scrollLeft", gr = "scrollTop", vr = "left", _r = "top", xr = "right", yr = "bottom", wr = "width", br = "height", Mr = "Right", Sr = "Left", Tr = "Top", Er = "Bottom", Lr = "padding", Ar = "margin", Rr = "Width", Cr = "Height", Pr = "px", Dr = {
       s: mr,
       p: vr,
       p2: Sr,
       os: xr,
       os2: Mr,
       d: wr,
       d2: Rr,
       a: "x",
       sc: function(t) {
           return arguments.length ? wi.scrollTo(t, Ir.sc()) : wi.pageXOffset || bi.scrollLeft || Mi.scrollLeft || Si.scrollLeft || 0
       }
   }, Ir = {
       s: gr,
       p: _r,
       p2: Tr,
       os: yr,
       os2: Er,
       d: br,
       d2: Cr,
       a: "y",
       op: Dr,
       sc: function(t) {
           return arguments.length ? wi.scrollTo(Dr.sc(), t) : wi.pageYOffset || bi.scrollTop || Mi.scrollTop || Si.scrollTop || 0
       }
   }, Or = function(t) {
       return wi.getComputedStyle(t)
   }, Nr = function(t, e) {
       for (var n in e)
           n in t || (t[n] = e[n]);
       return t
   }, zr = function(t, e) {
       var n = e && "matrix(1, 0, 0, 1, 0, 0)" !== Or(t)[Ni] && xi.to(t, {
           x: 0,
           y: 0,
           xPercent: 0,
           yPercent: 0,
           rotation: 0,
           rotationX: 0,
           rotationY: 0,
           scale: 1,
           skewX: 0,
           skewY: 0
       }).progress(1)
         , i = t.getBoundingClientRect();
       return n && n.progress(0).kill(),
       i
   }, Fr = function(t, e) {
       var n = e.d2;
       return t["offset" + n] || t["client" + n] || 0
   }, Hr = function(t) {
       var e, n = [], i = t.labels, r = t.duration();
       for (e in i)
           n.push(i[e] / r);
       return n
   }, Br = function(t, e, n, i) {
       return n.split(",").forEach((function(n) {
           return t(e, n, i)
       }
       ))
   }, kr = function(t, e, n) {
       return t.addEventListener(e, n, {
           passive: !0
       })
   }, Ur = function(t, e, n) {
       return t.removeEventListener(e, n)
   }, Gr = {
       startColor: "green",
       endColor: "red",
       indent: 0,
       fontSize: "16px",
       fontWeight: "normal"
   }, Wr = {
       toggleActions: "play",
       anticipatePin: 0
   }, Vr = {
       top: 0,
       left: 0,
       center: .5,
       bottom: 1,
       right: 1
   }, qr = function(t, e) {
       if (lr(t)) {
           var n = t.indexOf("=")
             , i = ~n ? +(t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1)) : 0;
           ~n && (t.indexOf("%") > n && (i *= e / 100),
           t = t.substr(0, n - 1)),
           t = i + (t in Vr ? Vr[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
       }
       return t
   }, jr = function(t, e, n, i, r, a, o) {
       var s = r.startColor
         , l = r.endColor
         , c = r.fontSize
         , u = r.indent
         , h = r.fontWeight
         , d = bi.createElement("div")
         , p = nr(n) || "fixed" === ir(n, "pinType")
         , f = -1 !== t.indexOf("scroller")
         , m = p ? Si : n
         , g = -1 !== t.indexOf("start")
         , v = g ? s : l
         , _ = "border-color:" + v + ";font-size:" + c + ";color:" + v + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
       return _ += "position:" + (f && p ? "fixed;" : "absolute;"),
       (f || !p) && (_ += (i === Ir ? xr : yr) + ":" + (a + parseFloat(u)) + "px;"),
       o && (_ += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"),
       d._isStart = g,
       d.setAttribute("class", "gsap-marker-" + t),
       d.style.cssText = _,
       d.innerText = e || 0 === e ? t + "-" + e : t,
       m.children[0] ? m.insertBefore(d, m.children[0]) : m.appendChild(d),
       d._offset = d["offset" + i.op.d2],
       Yr(d, 0, i, g),
       d
   }, Yr = function(t, e, n, i) {
       var r = {
           display: "block"
       }
         , a = n[i ? "os2" : "p2"]
         , o = n[i ? "p2" : "os2"];
       t._isFlipped = i,
       r[n.a + "Percent"] = i ? -100 : 0,
       r[n.a] = i ? "1px" : 0,
       r["border" + a + Rr] = 1,
       r["border" + o + Rr] = 0,
       r[n.p] = e + "px",
       xi.set(t, r)
   }, Xr = [], Zr = {}, Jr = function() {
       return Ai || (Ai = Li(ha))
   }, Qr = function() {
       Ai || (Ai = Li(ha),
       Qi || ra("scrollStart"),
       Qi = Zi())
   }, Kr = function() {
       return !Ii && !Gi && !bi.fullscreenElement && Ei.restart(!0)
   }, $r = {}, ta = [], ea = [], na = function(t) {
       var e, n = xi.ticker.frame, i = [], r = 0;
       if (qi !== n || ji) {
           for (sa(); r < ea.length; r += 4)
               (e = wi.matchMedia(ea[r]).matches) !== ea[r + 3] && (ea[r + 3] = e,
               e ? i.push(r) : sa(1, ea[r]) || cr(ea[r + 2]) && ea[r + 2]());
           for (oa(),
           r = 0; r < i.length; r++)
               e = i[r],
               Vi = ea[e],
               ea[e + 2] = ea[e + 1](t);
           Vi = 0,
           yi && la(0, 1),
           qi = n,
           ra("matchMedia")
       }
   }, ia = function t() {
       return Ur(Ma, "scrollEnd", t) || la(!0)
   }, ra = function(t) {
       return $r[t] && $r[t].map((function(t) {
           return t()
       }
       )) || ta
   }, aa = [], oa = function(t) {
       for (var e = 0; e < aa.length; e += 4)
           t && aa[e + 3] !== t || (aa[e].style.cssText = aa[e + 1],
           aa[e + 2].uncache = 1)
   }, sa = function(t, e) {
       var n;
       for (zi = 0; zi < Xr.length; zi++)
           n = Xr[zi],
           e && n.media !== e || (t ? n.kill(1) : (n.scroll.rec || (n.scroll.rec = n.scroll()),
           n.revert()));
       oa(e),
       e || ra("revert")
   }, la = function(t, e) {
       if (!Qi || t) {
           var n = ra("refreshInit");
           for (ki && Ma.sort(),
           e || sa(),
           zi = 0; zi < Xr.length; zi++)
               Xr[zi].refresh();
           for (n.forEach((function(t) {
               return t && t.render && t.render(-1)
           }
           )),
           zi = Xr.length; zi--; )
               Xr[zi].scroll.rec = 0;
           Ei.pause(),
           ra("refresh")
       } else
           kr(Ma, "scrollEnd", ia)
   }, ca = 0, ua = 1, ha = function() {
       var t = Xr.length
         , e = Zi()
         , n = e - Ji >= 50
         , i = t && Xr[0].scroll();
       if (ua = ca > i ? -1 : 1,
       ca = i,
       n && (Qi && !Oi && e - Qi > 200 && (Qi = 0,
       ra("scrollEnd")),
       Pi = Ji,
       Ji = e),
       ua < 0) {
           for (zi = t; zi--; )
               Xr[zi] && Xr[zi].update(0, n);
           ua = 1
       } else
           for (zi = 0; zi < t; zi++)
               Xr[zi] && Xr[zi].update(0, n);
       Ai = 0
   }, da = [vr, _r, yr, xr, "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex"], pa = da.concat([wr, br, "boxSizing", "maxWidth", "maxHeight", "position", Ar, Lr, "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]), fa = function(t, e, n, i) {
       if (t.parentNode !== e) {
           for (var r, a = da.length, o = e.style, s = t.style; a--; )
               o[r = da[a]] = n[r];
           o.position = "absolute" === n.position ? "absolute" : "relative",
           "inline" === n.display && (o.display = "inline-block"),
           s.bottom = s.right = "auto",
           o.overflow = "visible",
           o.boxSizing = "border-box",
           o.width = Fr(t, Dr) + Pr,
           o.height = Fr(t, Ir) + Pr,
           o.padding = s.margin = s.top = s.left = "0",
           ga(i),
           s.width = s.maxWidth = n.width,
           s.height = s.maxHeight = n.height,
           s.padding = n.padding,
           t.parentNode.insertBefore(e, t),
           e.appendChild(t)
       }
   }, ma = /([A-Z])/g, ga = function(t) {
       if (t) {
           var e, n, i = t.t.style, r = t.length, a = 0;
           for ((t.t._gsap || xi.core.getCache(t.t)).uncache = 1; a < r; a += 2)
               n = t[a + 1],
               e = t[a],
               n ? i[e] = n : i[e] && i.removeProperty(e.replace(ma, "-$1").toLowerCase())
       }
   }, va = function(t) {
       for (var e = pa.length, n = t.style, i = [], r = 0; r < e; r++)
           i.push(pa[r], n[pa[r]]);
       return i.t = t,
       i
   }, _a = {
       left: 0,
       top: 0
   }, xa = function(t, e, n, i, r, a, o, s, l, c, u, h) {
       if (cr(t) && (t = t(s)),
       lr(t) && "max" === t.substr(0, 3) && (t = h + ("=" === t.charAt(4) ? qr("0" + t.substr(3), n) : 0)),
       ur(t))
           o && Yr(o, n, i, !0);
       else {
           cr(e) && (e = e(s));
           var d, p, f, m = Ri(e)[0] || Si, g = zr(m) || {}, v = t.split(" ");
           g && (g.left || g.top) || "none" !== Or(m).display || (f = m.style.display,
           m.style.display = "block",
           g = zr(m),
           f ? m.style.display = f : m.style.removeProperty("display")),
           d = qr(v[0], g[i.d]),
           p = qr(v[1] || "0", n),
           t = g[i.p] - l[i.p] - c + d + r - p,
           o && Yr(o, p, i, n - p < 20 || o._isStart && p > 20),
           n -= n - p
       }
       if (a) {
           var _ = t + n
             , x = a._isStart;
           h = "scroll" + i.d2,
           Yr(a, _, i, x && _ > 20 || !x && (u ? Math.max(Si[h], Mi[h]) : a.parentNode[h]) <= _ + 1),
           u && (l = zr(o),
           u && (a.style[i.op.p] = l[i.op.p] - i.op.m - a._offset + Pr))
       }
       return Math.round(t)
   }, ya = /(?:webkit|moz|length|cssText|inset)/i, wa = function(t, e, n, i) {
       if (t.parentNode !== e) {
           var r, a, o = t.style;
           if (e === Si) {
               for (r in t._stOrig = o.cssText,
               a = Or(t))
                   +r || ya.test(r) || !a[r] || "string" != typeof o[r] || "0" === r || (o[r] = a[r]);
               o.top = n,
               o.left = i
           } else
               o.cssText = t._stOrig;
           xi.core.getCache(t).uncache = 1,
           e.appendChild(t)
       }
   }, ba = function(t, e) {
       var n, i, r = rr(t, e), a = "_scroll" + e.p2, o = function e(o, s, l, c, u) {
           var h = e.tween
             , d = s.onComplete
             , p = {};
           return h && h.kill(),
           n = Math.round(l),
           s[a] = o,
           s.modifiers = p,
           p[a] = function(t) {
               return (t = Math.round(r())) !== n && t !== i && Math.abs(t - n) > 2 ? (h.kill(),
               e.tween = 0) : t = l + c * h.ratio + u * h.ratio * h.ratio,
               i = n,
               n = Math.round(t)
           }
           ,
           s.onComplete = function() {
               e.tween = 0,
               d && d.call(h)
           }
           ,
           h = e.tween = xi.to(t, s)
       };
       return t[a] = r,
       t.addEventListener("mousewheel", (function() {
           return o.tween && o.tween.kill() && (o.tween = 0)
       }
       )),
       o
   };
   Dr.op = Ir;
   var Ma = function() {
       function t(e, n) {
           yi || t.register(xi) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
           this.init(e, n)
       }
       return t.prototype.init = function(e, n) {
           if (this.progress = this.start = 0,
           this.vars && this.kill(1),
           Ki) {
               var i, r, a, o, s, l, c, u, h, d, p, f, m, g, v, _, x, y, w, b, M, S, T, E, L, A, R, C, P, D, I, O, N, z, F, H, B, k, U, G = (e = Nr(lr(e) || ur(e) || e.nodeType ? {
                   trigger: e
               } : e, Wr)).horizontal ? Dr : Ir, W = e, V = W.onUpdate, q = W.toggleClass, j = W.id, Y = W.onToggle, X = W.onRefresh, Z = W.scrub, J = W.trigger, Q = W.pin, K = W.pinSpacing, $ = W.invalidateOnRefresh, tt = W.anticipatePin, et = W.onScrubComplete, nt = W.onSnapComplete, it = W.once, rt = W.snap, at = W.pinReparent, ot = !Z && 0 !== Z, st = Ri(e.scroller || wi)[0], lt = xi.core.getCache(st), ct = nr(st), ut = "pinType"in e ? "fixed" === e.pinType : ct || "fixed" === ir(st, "pinType"), ht = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], dt = ot && e.toggleActions.split(" "), pt = "markers"in e ? e.markers : Wr.markers, ft = ct ? 0 : parseFloat(Or(st)["border" + G.p2 + Rr]) || 0, mt = this, gt = e.onRefreshInit && function() {
                   return e.onRefreshInit(mt)
               }
               , vt = function(t, e, n) {
                   var i = n.d
                     , r = n.d2
                     , a = n.a;
                   return (a = ir(t, "getBoundingClientRect")) ? function() {
                       return a()[i]
                   }
                   : function() {
                       return (e ? wi["inner" + r] : t["client" + r]) || 0
                   }
               }(st, ct, G), _t = function(t, e) {
                   return !e || ~Yi.indexOf(t) ? ar(t) : function() {
                       return _a
                   }
               }(st, ct);
               mt.media = Vi,
               tt *= 45,
               Xr.push(mt),
               mt.scroller = st,
               mt.scroll = rr(st, G),
               s = mt.scroll(),
               mt.vars = e,
               n = n || e.animation,
               "refreshPriority"in e && (ki = 1),
               lt.tweenScroll = lt.tweenScroll || {
                   top: ba(st, Ir),
                   left: ba(st, Dr)
               },
               mt.tweenTo = i = lt.tweenScroll[G.p],
               n && (n.vars.lazy = !1,
               n._initted || !1 !== n.vars.immediateRender && !1 !== e.immediateRender && n.render(0, !0, !0),
               mt.animation = n.pause(),
               n.scrollTrigger = mt,
               (O = ur(Z) && Z) && (I = xi.to(n, {
                   ease: "power3",
                   duration: O,
                   onComplete: function() {
                       return et && et(mt)
                   }
               })),
               P = 0,
               j || (j = n.vars.id)),
               rt && (hr(rt) || (rt = {
                   snapTo: rt
               }),
               "scrollBehavior"in Si.style && xi.set(ct ? [Si, Mi] : st, {
                   scrollBehavior: "auto"
               }),
               a = cr(rt.snapTo) ? rt.snapTo : "labels" === rt.snapTo ? function(t) {
                   return function(e) {
                       return xi.utils.snap(Hr(t), e)
                   }
               }(n) : "labelsDirectional" === rt.snapTo ? (k = n,
               function(t, e) {
                   var n, i = Hr(k);
                   if (i.sort((function(t, e) {
                       return t - e
                   }
                   )),
                   e.direction > 0) {
                       for (n = 0; n < i.length; n++)
                           if (i[n] >= t)
                               return i[n];
                       return i.pop()
                   }
                   for (n = i.length; n--; )
                       if (i[n] <= t)
                           return i[n];
                   return i[0]
               }
               ) : xi.utils.snap(rt.snapTo),
               N = rt.duration || {
                   min: .1,
                   max: 2
               },
               N = hr(N) ? Ci(N.min, N.max) : Ci(N, N),
               z = xi.delayedCall(rt.delay || O / 2 || .1, (function() {
                   if (Math.abs(mt.getVelocity()) < 10 && !Oi) {
                       var t = n && !ot ? n.totalProgress() : mt.progress
                         , e = (t - D) / (Zi() - Pi) * 1e3 || 0
                         , r = fr(e / 2) * e / .185
                         , o = t + r
                         , s = Ci(0, 1, a(o, mt))
                         , l = mt.scroll()
                         , h = Math.round(c + s * g)
                         , d = i.tween;
                       if (l <= u && l >= c && h !== l) {
                           if (d && !d._initted && d.data <= Math.abs(h - l))
                               return;
                           i(h, {
                               duration: N(fr(.185 * Math.max(fr(o - t), fr(s - t)) / e / .05 || 0)),
                               ease: rt.ease || "power3",
                               data: Math.abs(h - l),
                               onComplete: function() {
                                   P = D = n && !ot ? n.totalProgress() : mt.progress,
                                   nt && nt(mt)
                               }
                           }, l, r * g, h - l - r * g)
                       }
                   } else
                       mt.isActive && z.restart(!0)
               }
               )).pause()),
               j && (Zr[j] = mt),
               J = mt.trigger = Ri(J || Q)[0],
               Q = !0 === Q ? J : Ri(Q)[0],
               lr(q) && (q = {
                   targets: J,
                   className: q
               }),
               Q && (!1 === K || K === Ar || (K = !(!K && "flex" === Or(Q.parentNode).display) && Lr),
               mt.pin = Q,
               !1 !== e.force3D && xi.set(Q, {
                   force3D: !0
               }),
               (r = xi.core.getCache(Q)).spacer ? v = r.pinState : (r.spacer = y = bi.createElement("div"),
               y.setAttribute("class", "pin-spacer" + (j ? " pin-spacer-" + j : "")),
               r.pinState = v = va(Q)),
               mt.spacer = y = r.spacer,
               C = Or(Q),
               E = C[K + G.os2],
               b = xi.getProperty(Q),
               M = xi.quickSetter(Q, G.a, Pr),
               fa(Q, y, C),
               x = va(Q)),
               pt && (m = hr(pt) ? Nr(pt, Gr) : Gr,
               p = jr("scroller-start", j, st, G, m, 0),
               f = jr("scroller-end", j, st, G, m, 0, p),
               w = p["offset" + G.op.d2],
               h = jr("start", j, st, G, m, w),
               d = jr("end", j, st, G, m, w),
               ut || ((U = ct ? Si : st).style.position = "absolute" === Or(U).position ? "absolute" : "relative",
               xi.set([p, f], {
                   force3D: !0
               }),
               A = xi.quickSetter(p, G.a, Pr),
               R = xi.quickSetter(f, G.a, Pr))),
               mt.revert = function(t) {
                   var e = !1 !== t || !mt.enabled
                     , i = Ii;
                   e !== o && (e && (H = Math.max(mt.scroll(), mt.scroll.rec || 0),
                   F = mt.progress,
                   B = n && n.progress()),
                   h && [h, d, p, f].forEach((function(t) {
                       return t.style.display = e ? "none" : "block"
                   }
                   )),
                   e && (Ii = 1),
                   mt.update(e),
                   Ii = i,
                   Q && (e ? function(t, e, n) {
                       if (ga(n),
                       t.parentNode === e) {
                           var i = e.parentNode;
                           i && (i.insertBefore(t, e),
                           i.removeChild(e))
                       }
                   }(Q, y, v) : (!at || !mt.isActive) && fa(Q, y, Or(Q), L)),
                   o = e)
               }
               ,
               mt.refresh = function(i) {
                   if (!Ii && mt.enabled)
                       if (Q && i && Qi)
                           kr(t, "scrollEnd", ia);
                       else {
                           Ii = 1,
                           I && I.pause(),
                           $ && n && n.progress(0).invalidate(),
                           o || mt.revert();
                           for (var r, a, m, w, M, E, A, R, C, P = vt(), D = _t(), O = or(st, G), N = 0, z = 0, k = e.end, U = e.endTrigger || J, W = e.start || (0 !== e.start && J ? Q ? "0 0" : "0 100%" : 0), V = J && Math.max(0, Xr.indexOf(mt)) || 0, q = V; q--; )
                               (A = Xr[q].pin) && (A === J || A === Q) && Xr[q].revert();
                           for (c = xa(W, J, P, G, mt.scroll(), h, p, mt, D, ft, ut, O) || (Q ? -.001 : 0),
                           cr(k) && (k = k(mt)),
                           lr(k) && !k.indexOf("+=") && (~k.indexOf(" ") ? k = (lr(W) ? W.split(" ")[0] : "") + k : (N = qr(k.substr(2), P),
                           k = lr(W) ? W : c + N,
                           U = J)),
                           u = Math.max(c, xa(k || (U ? "100% 0" : O), U, P, G, mt.scroll() + N, d, f, mt, D, ft, ut, O)) || -.001,
                           g = u - c || (c -= .01) && .001,
                           N = 0,
                           q = V; q--; )
                               (A = (E = Xr[q]).pin) && E.start - E._pinPush < c && (r = E.end - E.start,
                               A === J && (N += r),
                               A === Q && (z += r));
                           if (c += N,
                           u += N,
                           mt._pinPush = z,
                           h && N && ((r = {})[G.a] = "+=" + N,
                           xi.set([h, d], r)),
                           Q)
                               r = Or(Q),
                               w = G === Ir,
                               m = mt.scroll(),
                               S = parseFloat(b(G.a)) + z,
                               !O && u > 1 && ((ct ? Si : st).style["overflow-" + G.a] = "scroll"),
                               fa(Q, y, r),
                               x = va(Q),
                               a = zr(Q, !0),
                               R = ut && rr(st, w ? Dr : Ir)(),
                               K && ((L = [K + G.os2, g + z + Pr]).t = y,
                               (q = K === Lr ? Fr(Q, G) + g + z : 0) && L.push(G.d, q + Pr),
                               ga(L),
                               ut && mt.scroll(H)),
                               ut && ((M = {
                                   top: a.top + (w ? m - c : R) + Pr,
                                   left: a.left + (w ? R : m - c) + Pr,
                                   boxSizing: "border-box",
                                   position: "fixed"
                               }).width = M.maxWidth = Math.ceil(a.width) + Pr,
                               M.height = M.maxHeight = Math.ceil(a.height) + Pr,
                               M.margin = M.marginTop = M.marginRight = M.marginBottom = M.marginLeft = "0",
                               M.padding = r.padding,
                               M.paddingTop = r.paddingTop,
                               M.paddingRight = r.paddingRight,
                               M.paddingBottom = r.paddingBottom,
                               M.paddingLeft = r.paddingLeft,
                               _ = function(t, e, n) {
                                   for (var i, r = [], a = t.length, o = n ? 8 : 0; o < a; o += 2)
                                       i = t[o],
                                       r.push(i, i in e ? e[i] : t[o + 1]);
                                   return r.t = t.t,
                                   r
                               }(v, M, at)),
                               n ? (C = n._initted,
                               Ui(1),
                               n.progress(1, !0),
                               T = b(G.a) - S + g + z,
                               g !== T && _.splice(_.length - 2, 2),
                               n.progress(0, !0),
                               C || n.invalidate(),
                               Ui(0)) : T = g;
                           else if (J && mt.scroll())
                               for (a = J.parentNode; a && a !== Si; )
                                   a._pinOffset && (c -= a._pinOffset,
                                   u -= a._pinOffset),
                                   a = a.parentNode;
                           for (q = 0; q < V; q++)
                               (E = Xr[q].pin) && (E === J || E === Q) && Xr[q].revert(!1);
                           mt.start = c,
                           mt.end = u,
                           (s = l = mt.scroll()) < H && mt.scroll(H),
                           mt.revert(!1),
                           Ii = 0,
                           n && ot && n._initted && n.progress(B, !0).render(n.time(), !0, !0),
                           F !== mt.progress && (I && n.totalProgress(F, !0),
                           mt.progress = F,
                           mt.update()),
                           Q && K && (y._pinOffset = Math.round(mt.progress * T)),
                           X && X(mt)
                       }
               }
               ,
               mt.getVelocity = function() {
                   return (mt.scroll() - l) / (Zi() - Pi) * 1e3 || 0
               }
               ,
               mt.update = function(t, e) {
                   var r, a, o, h, d, f = mt.scroll(), m = t ? 0 : (f - c) / g, v = m < 0 ? 0 : m > 1 ? 1 : m || 0, w = mt.progress;
                   if (e && (l = s,
                   s = f,
                   rt && (D = P,
                   P = n && !ot ? n.totalProgress() : v)),
                   tt && !v && Q && !Ii && !ji && Qi && c < f + (f - l) / (Zi() - Pi) * tt && (v = 1e-4),
                   v !== w && mt.enabled) {
                       if (h = (d = (r = mt.isActive = !!v && v < 1) !== (!!w && w < 1)) || !!v != !!w,
                       mt.direction = v > w ? 1 : -1,
                       mt.progress = v,
                       ot || (!I || Ii || ji ? n && n.totalProgress(v, !!Ii) : (I.vars.totalProgress = v,
                       I.invalidate().restart())),
                       Q)
                           if (t && K && (y.style[K + G.os2] = E),
                           ut) {
                               if (h) {
                                   if (o = !t && v > w && u + 1 > f && f + 1 >= or(st, G),
                                   at)
                                       if (t || !r && !o)
                                           wa(Q, y);
                                       else {
                                           var b = zr(Q, !0)
                                             , L = f - c;
                                           wa(Q, Si, b.top + (G === Ir ? L : 0) + Pr, b.left + (G === Ir ? 0 : L) + Pr)
                                       }
                                   ga(r || o ? _ : x),
                                   T !== g && v < 1 && r || M(S + (1 !== v || o ? 0 : T))
                               }
                           } else
                               M(S + T * v);
                       rt && !i.tween && !Ii && !ji && z.restart(!0),
                       q && (d || it && v && (v < 1 || !Wi)) && Ri(q.targets).forEach((function(t) {
                           return t.classList[r || it ? "add" : "remove"](q.className)
                       }
                       )),
                       V && !ot && !t && V(mt),
                       h && !Ii ? (a = v && !w ? 0 : 1 === v ? 1 : 1 === w ? 2 : 3,
                       ot && (o = !d && "none" !== dt[a + 1] && dt[a + 1] || dt[a],
                       n && ("complete" === o || "reset" === o || o in n) && ("complete" === o ? n.pause().totalProgress(1) : "reset" === o ? n.restart(!0).pause() : n[o]()),
                       V && V(mt)),
                       !d && Wi || (Y && d && Y(mt),
                       ht[a] && ht[a](mt),
                       it && (1 === v ? mt.kill(!1, 1) : ht[a] = 0),
                       d || ht[a = 1 === v ? 1 : 3] && ht[a](mt))) : ot && V && !Ii && V(mt)
                   }
                   R && (A(f + (p._isFlipped ? 1 : 0)),
                   R(f))
               }
               ,
               mt.enable = function() {
                   mt.enabled || (mt.enabled = !0,
                   kr(st, "resize", Kr),
                   kr(st, "scroll", Qr),
                   gt && kr(t, "refreshInit", gt),
                   n && n.add ? xi.delayedCall(.01, (function() {
                       return c || u || mt.refresh()
                   }
                   )) && (g = .01) && (c = u = 0) : mt.refresh())
               }
               ,
               mt.disable = function(e, n) {
                   if (mt.enabled && (!1 !== e && mt.revert(),
                   mt.enabled = mt.isActive = !1,
                   n || I && I.pause(),
                   H = 0,
                   r && (r.uncache = 1),
                   gt && Ur(t, "refreshInit", gt),
                   z && (z.pause(),
                   i.tween && i.tween.kill() && (i.tween = 0)),
                   !ct)) {
                       for (var a = Xr.length; a--; )
                           if (Xr[a].scroller === st && Xr[a] !== mt)
                               return;
                       Ur(st, "resize", Kr),
                       Ur(st, "scroll", Qr)
                   }
               }
               ,
               mt.kill = function(t, e) {
                   mt.disable(t, e),
                   j && delete Zr[j];
                   var i = Xr.indexOf(mt);
                   Xr.splice(i, 1),
                   i === zi && ua > 0 && zi--,
                   n && (n.scrollTrigger = null,
                   t && n.render(-1),
                   e || n.kill()),
                   h && [h, d, p, f].forEach((function(t) {
                       return t.parentNode.removeChild(t)
                   }
                   )),
                   Q && (r && (r.uncache = 1),
                   i = 0,
                   Xr.forEach((function(t) {
                       return t.pin === Q && i++
                   }
                   )),
                   i || (r.spacer = 0))
               }
               ,
               mt.enable()
           } else
               this.update = this.refresh = this.kill = $i
       }
       ,
       t.register = function(e) {
           if (!yi && (xi = e || er(),
           tr() && window.document && (wi = window,
           bi = document,
           Mi = bi.documentElement,
           Si = bi.body),
           xi && (Ri = xi.utils.toArray,
           Ci = xi.utils.clamp,
           Ui = xi.core.suppressOverwrites || $i,
           xi.core.globals("ScrollTrigger", t),
           Si))) {
               Li = wi.requestAnimationFrame || function(t) {
                   return setTimeout(t, 16)
               }
               ,
               kr(wi, "mousewheel", Qr),
               Ti = [wi, bi, Mi, Si],
               kr(bi, "scroll", Qr);
               var n, i = Si.style, r = i.borderTop;
               i.borderTop = "1px solid #000",
               n = zr(Si),
               Ir.m = Math.round(n.top + Ir.sc()) || 0,
               Dr.m = Math.round(n.left + Dr.sc()) || 0,
               r ? i.borderTop = r : i.removeProperty("border-top"),
               Di = setInterval(Jr, 200),
               xi.delayedCall(.5, (function() {
                   return ji = 0
               }
               )),
               kr(bi, "touchcancel", $i),
               kr(Si, "touchstart", $i),
               Br(kr, bi, "pointerdown,touchstart,mousedown", (function() {
                   return Oi = 1
               }
               )),
               Br(kr, bi, "pointerup,touchend,mouseup", (function() {
                   return Oi = 0
               }
               )),
               Ni = xi.utils.checkPrefix("transform"),
               pa.push(Ni),
               yi = Zi(),
               Ei = xi.delayedCall(.2, la).pause(),
               Bi = [bi, "visibilitychange", function() {
                   var t = wi.innerWidth
                     , e = wi.innerHeight;
                   bi.hidden ? (Fi = t,
                   Hi = e) : Fi === t && Hi === e || Kr()
               }
               , bi, "DOMContentLoaded", la, wi, "load", function() {
                   return Qi || la()
               }
               , wi, "resize", Kr],
               sr(kr)
           }
           return yi
       }
       ,
       t.defaults = function(t) {
           for (var e in t)
               Wr[e] = t[e]
       }
       ,
       t.kill = function() {
           Ki = 0,
           Xr.slice(0).forEach((function(t) {
               return t.kill(1)
           }
           ))
       }
       ,
       t.config = function(t) {
           "limitCallbacks"in t && (Wi = !!t.limitCallbacks);
           var e = t.syncInterval;
           e && clearInterval(Di) || (Di = e) && setInterval(Jr, e),
           "autoRefreshEvents"in t && (sr(Ur) || sr(kr, t.autoRefreshEvents || "none"),
           Gi = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
       }
       ,
       t.scrollerProxy = function(t, e) {
           var n = Ri(t)[0]
             , i = Xi.indexOf(n)
             , r = nr(n);
           ~i && Xi.splice(i, r ? 6 : 2),
           r ? Yi.unshift(wi, e, Si, e, Mi, e) : Yi.unshift(n, e)
       }
       ,
       t.matchMedia = function(t) {
           var e, n, i, r, a;
           for (n in t)
               i = ea.indexOf(n),
               r = t[n],
               Vi = n,
               "all" === n ? r() : (e = wi.matchMedia(n)) && (e.matches && (a = r()),
               ~i ? (ea[i + 1] = pr(ea[i + 1], r),
               ea[i + 2] = pr(ea[i + 2], a)) : (i = ea.length,
               ea.push(n, r, a),
               e.addListener ? e.addListener(na) : e.addEventListener("change", na)),
               ea[i + 3] = e.matches),
               Vi = 0;
           return ea
       }
       ,
       t.clearMatchMedia = function(t) {
           t || (ea.length = 0),
           (t = ea.indexOf(t)) >= 0 && ea.splice(t, 4)
       }
       ,
       t
   }();
   function Sa(t, e) {
       if (!(t instanceof e))
           throw new TypeError("Cannot call a class as a function")
   }
   function Ta(t, e) {
       for (var n = 0; n < e.length; n++) {
           var i = e[n];
           i.enumerable = i.enumerable || !1,
           i.configurable = !0,
           "value"in i && (i.writable = !0),
           Object.defineProperty(t, i.key, i)
       }
   }
   function Ea(t, e, n) {
       return e && Ta(t.prototype, e),
       n && Ta(t, n),
       t
   }
   Ma.version = "3.6.0",
   Ma.saveStyles = function(t) {
       return t ? Ri(t).forEach((function(t) {
           if (t && t.style) {
               var e = aa.indexOf(t);
               e >= 0 && aa.splice(e, 4),
               aa.push(t, t.style.cssText, xi.core.getCache(t), Vi)
           }
       }
       )) : aa
   }
   ,
   Ma.revert = function(t, e) {
       return sa(!t, e)
   }
   ,
   Ma.create = function(t, e) {
       return new Ma(t,e)
   }
   ,
   Ma.refresh = function(t) {
       return t ? Kr() : la(!0)
   }
   ,
   Ma.update = ha,
   Ma.maxScroll = function(t, e) {
       return or(t, e ? Dr : Ir)
   }
   ,
   Ma.getScrollFunc = function(t, e) {
       return rr(Ri(t)[0], e ? Dr : Ir)
   }
   ,
   Ma.getById = function(t) {
       return Zr[t]
   }
   ,
   Ma.getAll = function() {
       return Xr.slice(0)
   }
   ,
   Ma.isScrolling = function() {
       return !!Qi
   }
   ,
   Ma.addEventListener = function(t, e) {
       var n = $r[t] || ($r[t] = []);
       ~n.indexOf(e) || n.push(e)
   }
   ,
   Ma.removeEventListener = function(t, e) {
       var n = $r[t]
         , i = n && n.indexOf(e);
       i >= 0 && n.splice(i, 1)
   }
   ,
   Ma.batch = function(t, e) {
       var n, i = [], r = {}, a = e.interval || .016, o = e.batchMax || 1e9, s = function(t, e) {
           var n = []
             , i = []
             , r = xi.delayedCall(a, (function() {
               e(n, i),
               n = [],
               i = []
           }
           )).pause();
           return function(t) {
               n.length || r.restart(!0),
               n.push(t.trigger),
               i.push(t),
               o <= n.length && r.progress(1)
           }
       };
       for (n in e)
           r[n] = "on" === n.substr(0, 2) && cr(e[n]) && "onRefreshInit" !== n ? s(0, e[n]) : e[n];
       return cr(o) && (o = o(),
       kr(Ma, "refresh", (function() {
           return o = e.batchMax()
       }
       ))),
       Ri(t).forEach((function(t) {
           var e = {};
           for (n in r)
               e[n] = r[n];
           e.trigger = t,
           i.push(Ma.create(e))
       }
       )),
       i
   }
   ,
   Ma.sort = function(t) {
       return Xr.sort(t || function(t, e) {
           return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
       }
       )
   }
   ,
   er() && xi.registerPlugin(Ma);
   var La = function() {
       function t(e) {
           Sa(this, t),
           this.speed = .065,
           this.elmt = e,
           this.leRaf = null,
           this.isWheeling = null,
           this.deltaY = 0,
           this.scrollTop = 0,
           this.current = 0
       }
       return Ea(t, [{
           key: "init",
           value: function() {
               var t = this;
               this.height = document.querySelector(this.elmt).clientHeight - window.innerHeight,
               this.deplacement = _i.quickSetter(this.elmt, "y", "px"),
               this.addTicker = function() {
                   t.playTicker()
               }
               ,
               _i.ticker.add(this.addTicker)
           }
       }, {
           key: "wheel",
           value: function() {
               var t = this;
               window.addEventListener("wheel", this.ref = function(e) {
                   t.deltaY = e.deltaY,
                   window.clearTimeout(t.isWheeling),
                   t.isWheeling = setTimeout((function(e) {
                       t.deltaY = 0
                   }
                   ), 66)
               }
               , {
                   passive: !0
               })
           }
       }, {
           key: "resize",
           value: function() {
               this.height = document.querySelector(this.elmt).clientHeight - window.innerHeight
           }
       }, {
           key: "playTicker",
           value: function() {
               var t = 1 - Math.pow(1 - this.speed, _i.ticker.deltaRatio());
               this.scrollTop + this.deltaY > this.height ? this.scrollTop = this.height : this.scrollTop + this.deltaY < 0 ? this.scrollTop = 0 : 0 !== this.deltaY && (this.scrollTop += this.deltaY),
               this.current += (-this.scrollTop - this.current) * t,
               this.deplacement(this.current),
               Ma.update()
           }
       }, {
           key: "destroy",
           value: function() {
               _i.killTweensOf(this.elmt),
               window.removeEventListener("wheel", this.ref),
               _i.ticker.remove(this.addTicker)
           }
       }]),
       t
   }();
   function Aa(t) {
       for (var e = t.parentNode.childNodes, n = 0, i = 0; i < e.length; i++) {
           if (e[i] == t)
               return n;
           1 == e[i].nodeType && n++
       }
       return -1
   }
   function Ra() {
       return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
   }
   /**
  * @license
  * Copyright 2010-2021 Three.js Authors
  * SPDX-License-Identifier: MIT
  */
   const Ca = 100
     , Pa = 1e3
     , Da = 1001
     , Ia = 1002
     , Oa = 1003
     , Na = 1006
     , za = 1008
     , Fa = 1009
     , Ha = 1012
     , Ba = 1014
     , ka = 1015
     , Ua = 1016
     , Ga = 1020
     , Wa = 1022
     , Va = 1023
     , qa = 1026
     , ja = 1027
     , Ya = 3e3
     , Xa = 7680
     , Za = 35044
     , Ja = 35048
     , Qa = "300 es";
   class Ka {
       addEventListener(t, e) {
           void 0 === this._listeners && (this._listeners = {});
           const n = this._listeners;
           void 0 === n[t] && (n[t] = []),
           -1 === n[t].indexOf(e) && n[t].push(e)
       }
       hasEventListener(t, e) {
           if (void 0 === this._listeners)
               return !1;
           const n = this._listeners;
           return void 0 !== n[t] && -1 !== n[t].indexOf(e)
       }
       removeEventListener(t, e) {
           if (void 0 === this._listeners)
               return;
           const n = this._listeners[t];
           if (void 0 !== n) {
               const t = n.indexOf(e);
               -1 !== t && n.splice(t, 1)
           }
       }
       dispatchEvent(t) {
           if (void 0 === this._listeners)
               return;
           const e = this._listeners[t.type];
           if (void 0 !== e) {
               t.target = this;
               const n = e.slice(0);
               for (let e = 0, i = n.length; e < i; e++)
                   n[e].call(this, t);
               t.target = null
           }
       }
   }
   const $a = [];
   for (let t = 0; t < 256; t++)
       $a[t] = (t < 16 ? "0" : "") + t.toString(16);
   const to = Math.PI / 180
     , eo = 180 / Math.PI;
   function no() {
       const t = 4294967295 * Math.random() | 0
         , e = 4294967295 * Math.random() | 0
         , n = 4294967295 * Math.random() | 0
         , i = 4294967295 * Math.random() | 0;
       return ($a[255 & t] + $a[t >> 8 & 255] + $a[t >> 16 & 255] + $a[t >> 24 & 255] + "-" + $a[255 & e] + $a[e >> 8 & 255] + "-" + $a[e >> 16 & 15 | 64] + $a[e >> 24 & 255] + "-" + $a[63 & n | 128] + $a[n >> 8 & 255] + "-" + $a[n >> 16 & 255] + $a[n >> 24 & 255] + $a[255 & i] + $a[i >> 8 & 255] + $a[i >> 16 & 255] + $a[i >> 24 & 255]).toUpperCase()
   }
   function io(t, e, n) {
       return Math.max(e, Math.min(n, t))
   }
   function ro(t, e, n) {
       return (1 - n) * t + n * e
   }
   function ao(t) {
       return 0 == (t & t - 1) && 0 !== t
   }
   function oo(t) {
       return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
   }
   class so {
       constructor(t=0, e=0) {
           this.x = t,
           this.y = e
       }
       get width() {
           return this.x
       }
       set width(t) {
           this.x = t
       }
       get height() {
           return this.y
       }
       set height(t) {
           this.y = t
       }
       set(t, e) {
           return this.x = t,
           this.y = e,
           this
       }
       setScalar(t) {
           return this.x = t,
           this.y = t,
           this
       }
       setX(t) {
           return this.x = t,
           this
       }
       setY(t) {
           return this.y = t,
           this
       }
       setComponent(t, e) {
           switch (t) {
           case 0:
               this.x = e;
               break;
           case 1:
               this.y = e;
               break;
           default:
               throw new Error("index is out of range: " + t)
           }
           return this
       }
       getComponent(t) {
           switch (t) {
           case 0:
               return this.x;
           case 1:
               return this.y;
           default:
               throw new Error("index is out of range: " + t)
           }
       }
       clone() {
           return new this.constructor(this.x,this.y)
       }
       copy(t) {
           return this.x = t.x,
           this.y = t.y,
           this
       }
       add(t, e) {
           return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
           this.addVectors(t, e)) : (this.x += t.x,
           this.y += t.y,
           this)
       }
       addScalar(t) {
           return this.x += t,
           this.y += t,
           this
       }
       addVectors(t, e) {
           return this.x = t.x + e.x,
           this.y = t.y + e.y,
           this
       }
       addScaledVector(t, e) {
           return this.x += t.x * e,
           this.y += t.y * e,
           this
       }
       sub(t, e) {
           return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
           this.subVectors(t, e)) : (this.x -= t.x,
           this.y -= t.y,
           this)
       }
       subScalar(t) {
           return this.x -= t,
           this.y -= t,
           this
       }
       subVectors(t, e) {
           return this.x = t.x - e.x,
           this.y = t.y - e.y,
           this
       }
       multiply(t) {
           return this.x *= t.x,
           this.y *= t.y,
           this
       }
       multiplyScalar(t) {
           return this.x *= t,
           this.y *= t,
           this
       }
       divide(t) {
           return this.x /= t.x,
           this.y /= t.y,
           this
       }
       divideScalar(t) {
           return this.multiplyScalar(1 / t)
       }
       applyMatrix3(t) {
           const e = this.x
             , n = this.y
             , i = t.elements;
           return this.x = i[0] * e + i[3] * n + i[6],
           this.y = i[1] * e + i[4] * n + i[7],
           this
       }
       min(t) {
           return this.x = Math.min(this.x, t.x),
           this.y = Math.min(this.y, t.y),
           this
       }
       max(t) {
           return this.x = Math.max(this.x, t.x),
           this.y = Math.max(this.y, t.y),
           this
       }
       clamp(t, e) {
           return this.x = Math.max(t.x, Math.min(e.x, this.x)),
           this.y = Math.max(t.y, Math.min(e.y, this.y)),
           this
       }
       clampScalar(t, e) {
           return this.x = Math.max(t, Math.min(e, this.x)),
           this.y = Math.max(t, Math.min(e, this.y)),
           this
       }
       clampLength(t, e) {
           const n = this.length();
           return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
       }
       floor() {
           return this.x = Math.floor(this.x),
           this.y = Math.floor(this.y),
           this
       }
       ceil() {
           return this.x = Math.ceil(this.x),
           this.y = Math.ceil(this.y),
           this
       }
       round() {
           return this.x = Math.round(this.x),
           this.y = Math.round(this.y),
           this
       }
       roundToZero() {
           return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
           this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
           this
       }
       negate() {
           return this.x = -this.x,
           this.y = -this.y,
           this
       }
       dot(t) {
           return this.x * t.x + this.y * t.y
       }
       cross(t) {
           return this.x * t.y - this.y * t.x
       }
       lengthSq() {
           return this.x * this.x + this.y * this.y
       }
       length() {
           return Math.sqrt(this.x * this.x + this.y * this.y)
       }
       manhattanLength() {
           return Math.abs(this.x) + Math.abs(this.y)
       }
       normalize() {
           return this.divideScalar(this.length() || 1)
       }
       angle() {
           return Math.atan2(-this.y, -this.x) + Math.PI
       }
       distanceTo(t) {
           return Math.sqrt(this.distanceToSquared(t))
       }
       distanceToSquared(t) {
           const e = this.x - t.x
             , n = this.y - t.y;
           return e * e + n * n
       }
       manhattanDistanceTo(t) {
           return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
       }
       setLength(t) {
           return this.normalize().multiplyScalar(t)
       }
       lerp(t, e) {
           return this.x += (t.x - this.x) * e,
           this.y += (t.y - this.y) * e,
           this
       }
       lerpVectors(t, e, n) {
           return this.x = t.x + (e.x - t.x) * n,
           this.y = t.y + (e.y - t.y) * n,
           this
       }
       equals(t) {
           return t.x === this.x && t.y === this.y
       }
       fromArray(t, e=0) {
           return this.x = t[e],
           this.y = t[e + 1],
           this
       }
       toArray(t=[], e=0) {
           return t[e] = this.x,
           t[e + 1] = this.y,
           t
       }
       fromBufferAttribute(t, e, n) {
           return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),
           this.x = t.getX(e),
           this.y = t.getY(e),
           this
       }
       rotateAround(t, e) {
           const n = Math.cos(e)
             , i = Math.sin(e)
             , r = this.x - t.x
             , a = this.y - t.y;
           return this.x = r * n - a * i + t.x,
           this.y = r * i + a * n + t.y,
           this
       }
       random() {
           return this.x = Math.random(),
           this.y = Math.random(),
           this
       }
   }
   so.prototype.isVector2 = !0;
   class lo {
       constructor() {
           this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
           arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
       }
       set(t, e, n, i, r, a, o, s, l) {
           const c = this.elements;
           return c[0] = t,
           c[1] = i,
           c[2] = o,
           c[3] = e,
           c[4] = r,
           c[5] = s,
           c[6] = n,
           c[7] = a,
           c[8] = l,
           this
       }
       identity() {
           return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
           this
       }
       copy(t) {
           const e = this.elements
             , n = t.elements;
           return e[0] = n[0],
           e[1] = n[1],
           e[2] = n[2],
           e[3] = n[3],
           e[4] = n[4],
           e[5] = n[5],
           e[6] = n[6],
           e[7] = n[7],
           e[8] = n[8],
           this
       }
       extractBasis(t, e, n) {
           return t.setFromMatrix3Column(this, 0),
           e.setFromMatrix3Column(this, 1),
           n.setFromMatrix3Column(this, 2),
           this
       }
       setFromMatrix4(t) {
           const e = t.elements;
           return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
           this
       }
       multiply(t) {
           return this.multiplyMatrices(this, t)
       }
       premultiply(t) {
           return this.multiplyMatrices(t, this)
       }
       multiplyMatrices(t, e) {
           const n = t.elements
             , i = e.elements
             , r = this.elements
             , a = n[0]
             , o = n[3]
             , s = n[6]
             , l = n[1]
             , c = n[4]
             , u = n[7]
             , h = n[2]
             , d = n[5]
             , p = n[8]
             , f = i[0]
             , m = i[3]
             , g = i[6]
             , v = i[1]
             , _ = i[4]
             , x = i[7]
             , y = i[2]
             , w = i[5]
             , b = i[8];
           return r[0] = a * f + o * v + s * y,
           r[3] = a * m + o * _ + s * w,
           r[6] = a * g + o * x + s * b,
           r[1] = l * f + c * v + u * y,
           r[4] = l * m + c * _ + u * w,
           r[7] = l * g + c * x + u * b,
           r[2] = h * f + d * v + p * y,
           r[5] = h * m + d * _ + p * w,
           r[8] = h * g + d * x + p * b,
           this
       }
       multiplyScalar(t) {
           const e = this.elements;
           return e[0] *= t,
           e[3] *= t,
           e[6] *= t,
           e[1] *= t,
           e[4] *= t,
           e[7] *= t,
           e[2] *= t,
           e[5] *= t,
           e[8] *= t,
           this
       }
       determinant() {
           const t = this.elements
             , e = t[0]
             , n = t[1]
             , i = t[2]
             , r = t[3]
             , a = t[4]
             , o = t[5]
             , s = t[6]
             , l = t[7]
             , c = t[8];
           return e * a * c - e * o * l - n * r * c + n * o * s + i * r * l - i * a * s
       }
       invert() {
           const t = this.elements
             , e = t[0]
             , n = t[1]
             , i = t[2]
             , r = t[3]
             , a = t[4]
             , o = t[5]
             , s = t[6]
             , l = t[7]
             , c = t[8]
             , u = c * a - o * l
             , h = o * s - c * r
             , d = l * r - a * s
             , p = e * u + n * h + i * d;
           if (0 === p)
               return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
           const f = 1 / p;
           return t[0] = u * f,
           t[1] = (i * l - c * n) * f,
           t[2] = (o * n - i * a) * f,
           t[3] = h * f,
           t[4] = (c * e - i * s) * f,
           t[5] = (i * r - o * e) * f,
           t[6] = d * f,
           t[7] = (n * s - l * e) * f,
           t[8] = (a * e - n * r) * f,
           this
       }
       transpose() {
           let t;
           const e = this.elements;
           return t = e[1],
           e[1] = e[3],
           e[3] = t,
           t = e[2],
           e[2] = e[6],
           e[6] = t,
           t = e[5],
           e[5] = e[7],
           e[7] = t,
           this
       }
       getNormalMatrix(t) {
           return this.setFromMatrix4(t).invert().transpose()
       }
       transposeIntoArray(t) {
           const e = this.elements;
           return t[0] = e[0],
           t[1] = e[3],
           t[2] = e[6],
           t[3] = e[1],
           t[4] = e[4],
           t[5] = e[7],
           t[6] = e[2],
           t[7] = e[5],
           t[8] = e[8],
           this
       }
       setUvTransform(t, e, n, i, r, a, o) {
           const s = Math.cos(r)
             , l = Math.sin(r);
           return this.set(n * s, n * l, -n * (s * a + l * o) + a + t, -i * l, i * s, -i * (-l * a + s * o) + o + e, 0, 0, 1),
           this
       }
       scale(t, e) {
           const n = this.elements;
           return n[0] *= t,
           n[3] *= t,
           n[6] *= t,
           n[1] *= e,
           n[4] *= e,
           n[7] *= e,
           this
       }
       rotate(t) {
           const e = Math.cos(t)
             , n = Math.sin(t)
             , i = this.elements
             , r = i[0]
             , a = i[3]
             , o = i[6]
             , s = i[1]
             , l = i[4]
             , c = i[7];
           return i[0] = e * r + n * s,
           i[3] = e * a + n * l,
           i[6] = e * o + n * c,
           i[1] = -n * r + e * s,
           i[4] = -n * a + e * l,
           i[7] = -n * o + e * c,
           this
       }
       translate(t, e) {
           const n = this.elements;
           return n[0] += t * n[2],
           n[3] += t * n[5],
           n[6] += t * n[8],
           n[1] += e * n[2],
           n[4] += e * n[5],
           n[7] += e * n[8],
           this
       }
       equals(t) {
           const e = this.elements
             , n = t.elements;
           for (let t = 0; t < 9; t++)
               if (e[t] !== n[t])
                   return !1;
           return !0
       }
       fromArray(t, e=0) {
           for (let n = 0; n < 9; n++)
               this.elements[n] = t[n + e];
           return this
       }
       toArray(t=[], e=0) {
           const n = this.elements;
           return t[e] = n[0],
           t[e + 1] = n[1],
           t[e + 2] = n[2],
           t[e + 3] = n[3],
           t[e + 4] = n[4],
           t[e + 5] = n[5],
           t[e + 6] = n[6],
           t[e + 7] = n[7],
           t[e + 8] = n[8],
           t
       }
       clone() {
           return (new this.constructor).fromArray(this.elements)
       }
   }
   let co;
   lo.prototype.isMatrix3 = !0;
   class uo {
       static getDataURL(t) {
           if (/^data:/i.test(t.src))
               return t.src;
           if ("undefined" == typeof HTMLCanvasElement)
               return t.src;
           let e;
           if (t instanceof HTMLCanvasElement)
               e = t;
           else {
               void 0 === co && (co = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")),
               co.width = t.width,
               co.height = t.height;
               const n = co.getContext("2d");
               t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height),
               e = co
           }
           return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t),
           e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png")
       }
   }
   let ho = 0;
   class po extends Ka {
       constructor(t=po.DEFAULT_IMAGE, e=po.DEFAULT_MAPPING, n=1001, i=1001, r=1006, a=1008, o=1023, s=1009, l=1, c=3e3) {
           super(),
           Object.defineProperty(this, "id", {
               value: ho++
           }),
           this.uuid = no(),
           this.name = "",
           this.image = t,
           this.mipmaps = [],
           this.mapping = e,
           this.wrapS = n,
           this.wrapT = i,
           this.magFilter = r,
           this.minFilter = a,
           this.anisotropy = l,
           this.format = o,
           this.internalFormat = null,
           this.type = s,
           this.offset = new so(0,0),
           this.repeat = new so(1,1),
           this.center = new so(0,0),
           this.rotation = 0,
           this.matrixAutoUpdate = !0,
           this.matrix = new lo,
           this.generateMipmaps = !0,
           this.premultiplyAlpha = !1,
           this.flipY = !0,
           this.unpackAlignment = 4,
           this.encoding = c,
           this.version = 0,
           this.onUpdate = null
       }
       updateMatrix() {
           this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
       }
       clone() {
           return (new this.constructor).copy(this)
       }
       copy(t) {
           return this.name = t.name,
           this.image = t.image,
           this.mipmaps = t.mipmaps.slice(0),
           this.mapping = t.mapping,
           this.wrapS = t.wrapS,
           this.wrapT = t.wrapT,
           this.magFilter = t.magFilter,
           this.minFilter = t.minFilter,
           this.anisotropy = t.anisotropy,
           this.format = t.format,
           this.internalFormat = t.internalFormat,
           this.type = t.type,
           this.offset.copy(t.offset),
           this.repeat.copy(t.repeat),
           this.center.copy(t.center),
           this.rotation = t.rotation,
           this.matrixAutoUpdate = t.matrixAutoUpdate,
           this.matrix.copy(t.matrix),
           this.generateMipmaps = t.generateMipmaps,
           this.premultiplyAlpha = t.premultiplyAlpha,
           this.flipY = t.flipY,
           this.unpackAlignment = t.unpackAlignment,
           this.encoding = t.encoding,
           this
       }
       toJSON(t) {
           const e = void 0 === t || "string" == typeof t;
           if (!e && void 0 !== t.textures[this.uuid])
               return t.textures[this.uuid];
           const n = {
               metadata: {
                   version: 4.5,
                   type: "Texture",
                   generator: "Texture.toJSON"
               },
               uuid: this.uuid,
               name: this.name,
               mapping: this.mapping,
               repeat: [this.repeat.x, this.repeat.y],
               offset: [this.offset.x, this.offset.y],
               center: [this.center.x, this.center.y],
               rotation: this.rotation,
               wrap: [this.wrapS, this.wrapT],
               format: this.format,
               type: this.type,
               encoding: this.encoding,
               minFilter: this.minFilter,
               magFilter: this.magFilter,
               anisotropy: this.anisotropy,
               flipY: this.flipY,
               premultiplyAlpha: this.premultiplyAlpha,
               unpackAlignment: this.unpackAlignment
           };
           if (void 0 !== this.image) {
               const i = this.image;
               if (void 0 === i.uuid && (i.uuid = no()),
               !e && void 0 === t.images[i.uuid]) {
                   let e;
                   if (Array.isArray(i)) {
                       e = [];
                       for (let t = 0, n = i.length; t < n; t++)
                           i[t].isDataTexture ? e.push(fo(i[t].image)) : e.push(fo(i[t]))
                   } else
                       e = fo(i);
                   t.images[i.uuid] = {
                       uuid: i.uuid,
                       url: e
                   }
               }
               n.image = i.uuid
           }
           return e || (t.textures[this.uuid] = n),
           n
       }
       dispose() {
           this.dispatchEvent({
               type: "dispose"
           })
       }
       transformUv(t) {
           if (300 !== this.mapping)
               return t;
           if (t.applyMatrix3(this.matrix),
           t.x < 0 || t.x > 1)
               switch (this.wrapS) {
               case Pa:
                   t.x = t.x - Math.floor(t.x);
                   break;
               case Da:
                   t.x = t.x < 0 ? 0 : 1;
                   break;
               case Ia:
                   1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
               }
           if (t.y < 0 || t.y > 1)
               switch (this.wrapT) {
               case Pa:
                   t.y = t.y - Math.floor(t.y);
                   break;
               case Da:
                   t.y = t.y < 0 ? 0 : 1;
                   break;
               case Ia:
                   1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
               }
           return this.flipY && (t.y = 1 - t.y),
           t
       }
       set needsUpdate(t) {
           !0 === t && this.version++
       }
   }
   function fo(t) {
       return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? uo.getDataURL(t) : t.data ? {
           data: Array.prototype.slice.call(t.data),
           width: t.width,
           height: t.height,
           type: t.data.constructor.name
       } : (console.warn("THREE.Texture: Unable to serialize Texture."),
       {})
   }
   po.DEFAULT_IMAGE = void 0,
   po.DEFAULT_MAPPING = 300,
   po.prototype.isTexture = !0;
   class mo {
       constructor(t=0, e=0, n=0, i=1) {
           this.x = t,
           this.y = e,
           this.z = n,
           this.w = i
       }
       get width() {
           return this.z
       }
       set width(t) {
           this.z = t
       }
       get height() {
           return this.w
       }
       set height(t) {
           this.w = t
       }
       set(t, e, n, i) {
           return this.x = t,
           this.y = e,
           this.z = n,
           this.w = i,
           this
       }
       setScalar(t) {
           return this.x = t,
           this.y = t,
           this.z = t,
           this.w = t,
           this
       }
       setX(t) {
           return this.x = t,
           this
       }
       setY(t) {
           return this.y = t,
           this
       }
       setZ(t) {
           return this.z = t,
           this
       }
       setW(t) {
           return this.w = t,
           this
       }
       setComponent(t, e) {
           switch (t) {
           case 0:
               this.x = e;
               break;
           case 1:
               this.y = e;
               break;
           case 2:
               this.z = e;
               break;
           case 3:
               this.w = e;
               break;
           default:
               throw new Error("index is out of range: " + t)
           }
           return this
       }
       getComponent(t) {
           switch (t) {
           case 0:
               return this.x;
           case 1:
               return this.y;
           case 2:
               return this.z;
           case 3:
               return this.w;
           default:
               throw new Error("index is out of range: " + t)
           }
       }
       clone() {
           return new this.constructor(this.x,this.y,this.z,this.w)
       }
       copy(t) {
           return this.x = t.x,
           this.y = t.y,
           this.z = t.z,
           this.w = void 0 !== t.w ? t.w : 1,
           this
       }
       add(t, e) {
           return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
           this.addVectors(t, e)) : (this.x += t.x,
           this.y += t.y,
           this.z += t.z,
           this.w += t.w,
           this)
       }
       addScalar(t) {
           return this.x += t,
           this.y += t,
           this.z += t,
           this.w += t,
           this
       }
       addVectors(t, e) {
           return this.x = t.x + e.x,
           this.y = t.y + e.y,
           this.z = t.z + e.z,
           this.w = t.w + e.w,
           this
       }
       addScaledVector(t, e) {
           return this.x += t.x * e,
           this.y += t.y * e,
           this.z += t.z * e,
           this.w += t.w * e,
           this
       }
       sub(t, e) {
           return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
           this.subVectors(t, e)) : (this.x -= t.x,
           this.y -= t.y,
           this.z -= t.z,
           this.w -= t.w,
           this)
       }
       subScalar(t) {
           return this.x -= t,
           this.y -= t,
           this.z -= t,
           this.w -= t,
           this
       }
       subVectors(t, e) {
           return this.x = t.x - e.x,
           this.y = t.y - e.y,
           this.z = t.z - e.z,
           this.w = t.w - e.w,
           this
       }
       multiply(t) {
           return this.x *= t.x,
           this.y *= t.y,
           this.z *= t.z,
           this.w *= t.w,
           this
       }
       multiplyScalar(t) {
           return this.x *= t,
           this.y *= t,
           this.z *= t,
           this.w *= t,
           this
       }
       applyMatrix4(t) {
           const e = this.x
             , n = this.y
             , i = this.z
             , r = this.w
             , a = t.elements;
           return this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r,
           this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r,
           this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r,
           this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r,
           this
       }
       divideScalar(t) {
           return this.multiplyScalar(1 / t)
       }
       setAxisAngleFromQuaternion(t) {
           this.w = 2 * Math.acos(t.w);
           const e = Math.sqrt(1 - t.w * t.w);
           return e < 1e-4 ? (this.x = 1,
           this.y = 0,
           this.z = 0) : (this.x = t.x / e,
           this.y = t.y / e,
           this.z = t.z / e),
           this
       }
       setAxisAngleFromRotationMatrix(t) {
           let e, n, i, r;
           const a = .01
             , o = .1
             , s = t.elements
             , l = s[0]
             , c = s[4]
             , u = s[8]
             , h = s[1]
             , d = s[5]
             , p = s[9]
             , f = s[2]
             , m = s[6]
             , g = s[10];
           if (Math.abs(c - h) < a && Math.abs(u - f) < a && Math.abs(p - m) < a) {
               if (Math.abs(c + h) < o && Math.abs(u + f) < o && Math.abs(p + m) < o && Math.abs(l + d + g - 3) < o)
                   return this.set(1, 0, 0, 0),
                   this;
               e = Math.PI;
               const t = (l + 1) / 2
                 , s = (d + 1) / 2
                 , v = (g + 1) / 2
                 , _ = (c + h) / 4
                 , x = (u + f) / 4
                 , y = (p + m) / 4;
               return t > s && t > v ? t < a ? (n = 0,
               i = .707106781,
               r = .707106781) : (n = Math.sqrt(t),
               i = _ / n,
               r = x / n) : s > v ? s < a ? (n = .707106781,
               i = 0,
               r = .707106781) : (i = Math.sqrt(s),
               n = _ / i,
               r = y / i) : v < a ? (n = .707106781,
               i = .707106781,
               r = 0) : (r = Math.sqrt(v),
               n = x / r,
               i = y / r),
               this.set(n, i, r, e),
               this
           }
           let v = Math.sqrt((m - p) * (m - p) + (u - f) * (u - f) + (h - c) * (h - c));
           return Math.abs(v) < .001 && (v = 1),
           this.x = (m - p) / v,
           this.y = (u - f) / v,
           this.z = (h - c) / v,
           this.w = Math.acos((l + d + g - 1) / 2),
           this
       }
       min(t) {
           return this.x = Math.min(this.x, t.x),
           this.y = Math.min(this.y, t.y),
           this.z = Math.min(this.z, t.z),
           this.w = Math.min(this.w, t.w),
           this
       }
       max(t) {
           return this.x = Math.max(this.x, t.x),
           this.y = Math.max(this.y, t.y),
           this.z = Math.max(this.z, t.z),
           this.w = Math.max(this.w, t.w),
           this
       }
       clamp(t, e) {
           return this.x = Math.max(t.x, Math.min(e.x, this.x)),
           this.y = Math.max(t.y, Math.min(e.y, this.y)),
           this.z = Math.max(t.z, Math.min(e.z, this.z)),
           this.w = Math.max(t.w, Math.min(e.w, this.w)),
           this
       }
       clampScalar(t, e) {
           return this.x = Math.max(t, Math.min(e, this.x)),
           this.y = Math.max(t, Math.min(e, this.y)),
           this.z = Math.max(t, Math.min(e, this.z)),
           this.w = Math.max(t, Math.min(e, this.w)),
           this
       }
       clampLength(t, e) {
           const n = this.length();
           return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
       }
       floor() {
           return this.x = Math.floor(this.x),
           this.y = Math.floor(this.y),
           this.z = Math.floor(this.z),
           this.w = Math.floor(this.w),
           this
       }
       ceil() {
           return this.x = Math.ceil(this.x),
           this.y = Math.ceil(this.y),
           this.z = Math.ceil(this.z),
           this.w = Math.ceil(this.w),
           this
       }
       round() {
           return this.x = Math.round(this.x),
           this.y = Math.round(this.y),
           this.z = Math.round(this.z),
           this.w = Math.round(this.w),
           this
       }
       roundToZero() {
           return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
           this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
           this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
           this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
           this
       }
       negate() {
           return this.x = -this.x,
           this.y = -this.y,
           this.z = -this.z,
           this.w = -this.w,
           this
       }
       dot(t) {
           return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
       }
       lengthSq() {
           return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
       }
       length() {
           return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
       }
       manhattanLength() {
           return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
       }
       normalize() {
           return this.divideScalar(this.length() || 1)
       }
       setLength(t) {
           return this.normalize().multiplyScalar(t)
       }
       lerp(t, e) {
           return this.x += (t.x - this.x) * e,
           this.y += (t.y - this.y) * e,
           this.z += (t.z - this.z) * e,
           this.w += (t.w - this.w) * e,
           this
       }
       lerpVectors(t, e, n) {
           return this.x = t.x + (e.x - t.x) * n,
           this.y = t.y + (e.y - t.y) * n,
           this.z = t.z + (e.z - t.z) * n,
           this.w = t.w + (e.w - t.w) * n,
           this
       }
       equals(t) {
           return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
       }
       fromArray(t, e=0) {
           return this.x = t[e],
           this.y = t[e + 1],
           this.z = t[e + 2],
           this.w = t[e + 3],
           this
       }
       toArray(t=[], e=0) {
           return t[e] = this.x,
           t[e + 1] = this.y,
           t[e + 2] = this.z,
           t[e + 3] = this.w,
           t
       }
       fromBufferAttribute(t, e, n) {
           return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),
           this.x = t.getX(e),
           this.y = t.getY(e),
           this.z = t.getZ(e),
           this.w = t.getW(e),
           this
       }
       random() {
           return this.x = Math.random(),
           this.y = Math.random(),
           this.z = Math.random(),
           this.w = Math.random(),
           this
       }
   }
   mo.prototype.isVector4 = !0;
   class go extends Ka {
       constructor(t, e, n) {
           super(),
           this.width = t,
           this.height = e,
           this.depth = 1,
           this.scissor = new mo(0,0,t,e),
           this.scissorTest = !1,
           this.viewport = new mo(0,0,t,e),
           n = n || {},
           this.texture = new po(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),
           this.texture.image = {},
           this.texture.image.width = t,
           this.texture.image.height = e,
           this.texture.image.depth = 1,
           this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps,
           this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : Na,
           this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer,
           this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer,
           this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
       }
       setTexture(t) {
           t.image = {
               width: this.width,
               height: this.height,
               depth: this.depth
           },
           this.texture = t
       }
       setSize(t, e, n=1) {
           this.width === t && this.height === e && this.depth === n || (this.width = t,
           this.height = e,
           this.depth = n,
           this.texture.image.width = t,
           this.texture.image.height = e,
           this.texture.image.depth = n,
           this.dispose()),
           this.viewport.set(0, 0, t, e),
           this.scissor.set(0, 0, t, e)
       }
       clone() {
           return (new this.constructor).copy(this)
       }
       copy(t) {
           return this.width = t.width,
           this.height = t.height,
           this.depth = t.depth,
           this.viewport.copy(t.viewport),
           this.texture = t.texture.clone(),
           this.depthBuffer = t.depthBuffer,
           this.stencilBuffer = t.stencilBuffer,
           this.depthTexture = t.depthTexture,
           this
       }
       dispose() {
           this.dispatchEvent({
               type: "dispose"
           })
       }
   }
   go.prototype.isWebGLRenderTarget = !0;
   class vo {
       constructor(t=0, e=0, n=0, i=1) {
           this._x = t,
           this._y = e,
           this._z = n,
           this._w = i
       }
       static slerp(t, e, n, i) {
           return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),
           n.slerpQuaternions(t, e, i)
       }
       static slerpFlat(t, e, n, i, r, a, o) {
           let s = n[i + 0]
             , l = n[i + 1]
             , c = n[i + 2]
             , u = n[i + 3];
           const h = r[a + 0]
             , d = r[a + 1]
             , p = r[a + 2]
             , f = r[a + 3];
           if (0 === o)
               return t[e + 0] = s,
               t[e + 1] = l,
               t[e + 2] = c,
               void (t[e + 3] = u);
           if (1 === o)
               return t[e + 0] = h,
               t[e + 1] = d,
               t[e + 2] = p,
               void (t[e + 3] = f);
           if (u !== f || s !== h || l !== d || c !== p) {
               let t = 1 - o;
               const e = s * h + l * d + c * p + u * f
                 , n = e >= 0 ? 1 : -1
                 , i = 1 - e * e;
               if (i > Number.EPSILON) {
                   const r = Math.sqrt(i)
                     , a = Math.atan2(r, e * n);
                   t = Math.sin(t * a) / r,
                   o = Math.sin(o * a) / r
               }
               const r = o * n;
               if (s = s * t + h * r,
               l = l * t + d * r,
               c = c * t + p * r,
               u = u * t + f * r,
               t === 1 - o) {
                   const t = 1 / Math.sqrt(s * s + l * l + c * c + u * u);
                   s *= t,
                   l *= t,
                   c *= t,
                   u *= t
               }
           }
           t[e] = s,
           t[e + 1] = l,
           t[e + 2] = c,
           t[e + 3] = u
       }
       static multiplyQuaternionsFlat(t, e, n, i, r, a) {
           const o = n[i]
             , s = n[i + 1]
             , l = n[i + 2]
             , c = n[i + 3]
             , u = r[a]
             , h = r[a + 1]
             , d = r[a + 2]
             , p = r[a + 3];
           return t[e] = o * p + c * u + s * d - l * h,
           t[e + 1] = s * p + c * h + l * u - o * d,
           t[e + 2] = l * p + c * d + o * h - s * u,
           t[e + 3] = c * p - o * u - s * h - l * d,
           t
       }
       get x() {
           return this._x
       }
       set x(t) {
           this._x = t,
           this._onChangeCallback()
       }
       get y() {
           return this._y
       }
       set y(t) {
           this._y = t,
           this._onChangeCallback()
       }
       get z() {
           return this._z
       }
       set z(t) {
           this._z = t,
           this._onChangeCallback()
       }
       get w() {
           return this._w
       }
       set w(t) {
           this._w = t,
           this._onChangeCallback()
       }
       set(t, e, n, i) {
           return this._x = t,
           this._y = e,
           this._z = n,
           this._w = i,
           this._onChangeCallback(),
           this
       }
       clone() {
           return new this.constructor(this._x,this._y,this._z,this._w)
       }
       copy(t) {
           return this._x = t.x,
           this._y = t.y,
           this._z = t.z,
           this._w = t.w,
           this._onChangeCallback(),
           this
       }
       setFromEuler(t, e) {
           if (!t || !t.isEuler)
               throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
           const n = t._x
             , i = t._y
             , r = t._z
             , a = t._order
             , o = Math.cos
             , s = Math.sin
             , l = o(n / 2)
             , c = o(i / 2)
             , u = o(r / 2)
             , h = s(n / 2)
             , d = s(i / 2)
             , p = s(r / 2);
           switch (a) {
           case "XYZ":
               this._x = h * c * u + l * d * p,
               this._y = l * d * u - h * c * p,
               this._z = l * c * p + h * d * u,
               this._w = l * c * u - h * d * p;
               break;
           case "YXZ":
               this._x = h * c * u + l * d * p,
               this._y = l * d * u - h * c * p,
               this._z = l * c * p - h * d * u,
               this._w = l * c * u + h * d * p;
               break;
           case "ZXY":
               this._x = h * c * u - l * d * p,
               this._y = l * d * u + h * c * p,
               this._z = l * c * p + h * d * u,
               this._w = l * c * u - h * d * p;
               break;
           case "ZYX":
               this._x = h * c * u - l * d * p,
               this._y = l * d * u + h * c * p,
               this._z = l * c * p - h * d * u,
               this._w = l * c * u + h * d * p;
               break;
           case "YZX":
               this._x = h * c * u + l * d * p,
               this._y = l * d * u + h * c * p,
               this._z = l * c * p - h * d * u,
               this._w = l * c * u - h * d * p;
               break;
           case "XZY":
               this._x = h * c * u - l * d * p,
               this._y = l * d * u - h * c * p,
               this._z = l * c * p + h * d * u,
               this._w = l * c * u + h * d * p;
               break;
           default:
               console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
           }
           return !1 !== e && this._onChangeCallback(),
           this
       }
       setFromAxisAngle(t, e) {
           const n = e / 2
             , i = Math.sin(n);
           return this._x = t.x * i,
           this._y = t.y * i,
           this._z = t.z * i,
           this._w = Math.cos(n),
           this._onChangeCallback(),
           this
       }
       setFromRotationMatrix(t) {
           const e = t.elements
             , n = e[0]
             , i = e[4]
             , r = e[8]
             , a = e[1]
             , o = e[5]
             , s = e[9]
             , l = e[2]
             , c = e[6]
             , u = e[10]
             , h = n + o + u;
           if (h > 0) {
               const t = .5 / Math.sqrt(h + 1);
               this._w = .25 / t,
               this._x = (c - s) * t,
               this._y = (r - l) * t,
               this._z = (a - i) * t
           } else if (n > o && n > u) {
               const t = 2 * Math.sqrt(1 + n - o - u);
               this._w = (c - s) / t,
               this._x = .25 * t,
               this._y = (i + a) / t,
               this._z = (r + l) / t
           } else if (o > u) {
               const t = 2 * Math.sqrt(1 + o - n - u);
               this._w = (r - l) / t,
               this._x = (i + a) / t,
               this._y = .25 * t,
               this._z = (s + c) / t
           } else {
               const t = 2 * Math.sqrt(1 + u - n - o);
               this._w = (a - i) / t,
               this._x = (r + l) / t,
               this._y = (s + c) / t,
               this._z = .25 * t
           }
           return this._onChangeCallback(),
           this
       }
       setFromUnitVectors(t, e) {
           let n = t.dot(e) + 1;
           return n < Number.EPSILON ? (n = 0,
           Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y,
           this._y = t.x,
           this._z = 0,
           this._w = n) : (this._x = 0,
           this._y = -t.z,
           this._z = t.y,
           this._w = n)) : (this._x = t.y * e.z - t.z * e.y,
           this._y = t.z * e.x - t.x * e.z,
           this._z = t.x * e.y - t.y * e.x,
           this._w = n),
           this.normalize()
       }
       angleTo(t) {
           return 2 * Math.acos(Math.abs(io(this.dot(t), -1, 1)))
       }
       rotateTowards(t, e) {
           const n = this.angleTo(t);
           if (0 === n)
               return this;
           const i = Math.min(1, e / n);
           return this.slerp(t, i),
           this
       }
       identity() {
           return this.set(0, 0, 0, 1)
       }
       invert() {
           return this.conjugate()
       }
       conjugate() {
           return this._x *= -1,
           this._y *= -1,
           this._z *= -1,
           this._onChangeCallback(),
           this
       }
       dot(t) {
           return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
       }
       lengthSq() {
           return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
       }
       length() {
           return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
       }
       normalize() {
           let t = this.length();
           return 0 === t ? (this._x = 0,
           this._y = 0,
           this._z = 0,
           this._w = 1) : (t = 1 / t,
           this._x = this._x * t,
           this._y = this._y * t,
           this._z = this._z * t,
           this._w = this._w * t),
           this._onChangeCallback(),
           this
       }
       multiply(t, e) {
           return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
           this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
       }
       premultiply(t) {
           return this.multiplyQuaternions(t, this)
       }
       multiplyQuaternions(t, e) {
           const n = t._x
             , i = t._y
             , r = t._z
             , a = t._w
             , o = e._x
             , s = e._y
             , l = e._z
             , c = e._w;
           return this._x = n * c + a * o + i * l - r * s,
           this._y = i * c + a * s + r * o - n * l,
           this._z = r * c + a * l + n * s - i * o,
           this._w = a * c - n * o - i * s - r * l,
           this._onChangeCallback(),
           this
       }
       slerp(t, e) {
           if (0 === e)
               return this;
           if (1 === e)
               return this.copy(t);
           const n = this._x
             , i = this._y
             , r = this._z
             , a = this._w;
           let o = a * t._w + n * t._x + i * t._y + r * t._z;
           if (o < 0 ? (this._w = -t._w,
           this._x = -t._x,
           this._y = -t._y,
           this._z = -t._z,
           o = -o) : this.copy(t),
           o >= 1)
               return this._w = a,
               this._x = n,
               this._y = i,
               this._z = r,
               this;
           const s = 1 - o * o;
           if (s <= Number.EPSILON) {
               const t = 1 - e;
               return this._w = t * a + e * this._w,
               this._x = t * n + e * this._x,
               this._y = t * i + e * this._y,
               this._z = t * r + e * this._z,
               this.normalize(),
               this._onChangeCallback(),
               this
           }
           const l = Math.sqrt(s)
             , c = Math.atan2(l, o)
             , u = Math.sin((1 - e) * c) / l
             , h = Math.sin(e * c) / l;
           return this._w = a * u + this._w * h,
           this._x = n * u + this._x * h,
           this._y = i * u + this._y * h,
           this._z = r * u + this._z * h,
           this._onChangeCallback(),
           this
       }
       slerpQuaternions(t, e, n) {
           this.copy(t).slerp(e, n)
       }
       equals(t) {
           return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
       }
       fromArray(t, e=0) {
           return this._x = t[e],
           this._y = t[e + 1],
           this._z = t[e + 2],
           this._w = t[e + 3],
           this._onChangeCallback(),
           this
       }
       toArray(t=[], e=0) {
           return t[e] = this._x,
           t[e + 1] = this._y,
           t[e + 2] = this._z,
           t[e + 3] = this._w,
           t
       }
       fromBufferAttribute(t, e) {
           return this._x = t.getX(e),
           this._y = t.getY(e),
           this._z = t.getZ(e),
           this._w = t.getW(e),
           this
       }
       _onChange(t) {
           return this._onChangeCallback = t,
           this
       }
       _onChangeCallback() {}
   }
   vo.prototype.isQuaternion = !0;
   class _o {
       constructor(t=0, e=0, n=0) {
           this.x = t,
           this.y = e,
           this.z = n
       }
       set(t, e, n) {
           return void 0 === n && (n = this.z),
           this.x = t,
           this.y = e,
           this.z = n,
           this
       }
       setScalar(t) {
           return this.x = t,
           this.y = t,
           this.z = t,
           this
       }
       setX(t) {
           return this.x = t,
           this
       }
       setY(t) {
           return this.y = t,
           this
       }
       setZ(t) {
           return this.z = t,
           this
       }
       setComponent(t, e) {
           switch (t) {
           case 0:
               this.x = e;
               break;
           case 1:
               this.y = e;
               break;
           case 2:
               this.z = e;
               break;
           default:
               throw new Error("index is out of range: " + t)
           }
           return this
       }
       getComponent(t) {
           switch (t) {
           case 0:
               return this.x;
           case 1:
               return this.y;
           case 2:
               return this.z;
           default:
               throw new Error("index is out of range: " + t)
           }
       }
       clone() {
           return new this.constructor(this.x,this.y,this.z)
       }
       copy(t) {
           return this.x = t.x,
           this.y = t.y,
           this.z = t.z,
           this
       }
       add(t, e) {
           return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
           this.addVectors(t, e)) : (this.x += t.x,
           this.y += t.y,
           this.z += t.z,
           this)
       }
       addScalar(t) {
           return this.x += t,
           this.y += t,
           this.z += t,
           this
       }
       addVectors(t, e) {
           return this.x = t.x + e.x,
           this.y = t.y + e.y,
           this.z = t.z + e.z,
           this
       }
       addScaledVector(t, e) {
           return this.x += t.x * e,
           this.y += t.y * e,
           this.z += t.z * e,
           this
       }
       sub(t, e) {
           return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
           this.subVectors(t, e)) : (this.x -= t.x,
           this.y -= t.y,
           this.z -= t.z,
           this)
       }
       subScalar(t) {
           return this.x -= t,
           this.y -= t,
           this.z -= t,
           this
       }
       subVectors(t, e) {
           return this.x = t.x - e.x,
           this.y = t.y - e.y,
           this.z = t.z - e.z,
           this
       }
       multiply(t, e) {
           return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
           this.multiplyVectors(t, e)) : (this.x *= t.x,
           this.y *= t.y,
           this.z *= t.z,
           this)
       }
       multiplyScalar(t) {
           return this.x *= t,
           this.y *= t,
           this.z *= t,
           this
       }
       multiplyVectors(t, e) {
           return this.x = t.x * e.x,
           this.y = t.y * e.y,
           this.z = t.z * e.z,
           this
       }
       applyEuler(t) {
           return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
           this.applyQuaternion(yo.setFromEuler(t))
       }
       applyAxisAngle(t, e) {
           return this.applyQuaternion(yo.setFromAxisAngle(t, e))
       }
       applyMatrix3(t) {
           const e = this.x
             , n = this.y
             , i = this.z
             , r = t.elements;
           return this.x = r[0] * e + r[3] * n + r[6] * i,
           this.y = r[1] * e + r[4] * n + r[7] * i,
           this.z = r[2] * e + r[5] * n + r[8] * i,
           this
       }
       applyNormalMatrix(t) {
           return this.applyMatrix3(t).normalize()
       }
       applyMatrix4(t) {
           const e = this.x
             , n = this.y
             , i = this.z
             , r = t.elements
             , a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
           return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a,
           this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a,
           this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a,
           this
       }
       applyQuaternion(t) {
           const e = this.x
             , n = this.y
             , i = this.z
             , r = t.x
             , a = t.y
             , o = t.z
             , s = t.w
             , l = s * e + a * i - o * n
             , c = s * n + o * e - r * i
             , u = s * i + r * n - a * e
             , h = -r * e - a * n - o * i;
           return this.x = l * s + h * -r + c * -o - u * -a,
           this.y = c * s + h * -a + u * -r - l * -o,
           this.z = u * s + h * -o + l * -a - c * -r,
           this
       }
       project(t) {
           return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
       }
       unproject(t) {
           return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
       }
       transformDirection(t) {
           const e = this.x
             , n = this.y
             , i = this.z
             , r = t.elements;
           return this.x = r[0] * e + r[4] * n + r[8] * i,
           this.y = r[1] * e + r[5] * n + r[9] * i,
           this.z = r[2] * e + r[6] * n + r[10] * i,
           this.normalize()
       }
       divide(t) {
           return this.x /= t.x,
           this.y /= t.y,
           this.z /= t.z,
           this
       }
       divideScalar(t) {
           return this.multiplyScalar(1 / t)
       }
       min(t) {
           return this.x = Math.min(this.x, t.x),
           this.y = Math.min(this.y, t.y),
           this.z = Math.min(this.z, t.z),
           this
       }
       max(t) {
           return this.x = Math.max(this.x, t.x),
           this.y = Math.max(this.y, t.y),
           this.z = Math.max(this.z, t.z),
           this
       }
       clamp(t, e) {
           return this.x = Math.max(t.x, Math.min(e.x, this.x)),
           this.y = Math.max(t.y, Math.min(e.y, this.y)),
           this.z = Math.max(t.z, Math.min(e.z, this.z)),
           this
       }
       clampScalar(t, e) {
           return this.x = Math.max(t, Math.min(e, this.x)),
           this.y = Math.max(t, Math.min(e, this.y)),
           this.z = Math.max(t, Math.min(e, this.z)),
           this
       }
       clampLength(t, e) {
           const n = this.length();
           return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
       }
       floor() {
           return this.x = Math.floor(this.x),
           this.y = Math.floor(this.y),
           this.z = Math.floor(this.z),
           this
       }
       ceil() {
           return this.x = Math.ceil(this.x),
           this.y = Math.ceil(this.y),
           this.z = Math.ceil(this.z),
           this
       }
       round() {
           return this.x = Math.round(this.x),
           this.y = Math.round(this.y),
           this.z = Math.round(this.z),
           this
       }
       roundToZero() {
           return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
           this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
           this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
           this
       }
       negate() {
           return this.x = -this.x,
           this.y = -this.y,
           this.z = -this.z,
           this
       }
       dot(t) {
           return this.x * t.x + this.y * t.y + this.z * t.z
       }
       lengthSq() {
           return this.x * this.x + this.y * this.y + this.z * this.z
       }
       length() {
           return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
       }
       manhattanLength() {
           return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
       }
       normalize() {
           return this.divideScalar(this.length() || 1)
       }
       setLength(t) {
           return this.normalize().multiplyScalar(t)
       }
       lerp(t, e) {
           return this.x += (t.x - this.x) * e,
           this.y += (t.y - this.y) * e,
           this.z += (t.z - this.z) * e,
           this
       }
       lerpVectors(t, e, n) {
           return this.x = t.x + (e.x - t.x) * n,
           this.y = t.y + (e.y - t.y) * n,
           this.z = t.z + (e.z - t.z) * n,
           this
       }
       cross(t, e) {
           return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
           this.crossVectors(t, e)) : this.crossVectors(this, t)
       }
       crossVectors(t, e) {
           const n = t.x
             , i = t.y
             , r = t.z
             , a = e.x
             , o = e.y
             , s = e.z;
           return this.x = i * s - r * o,
           this.y = r * a - n * s,
           this.z = n * o - i * a,
           this
       }
       projectOnVector(t) {
           const e = t.lengthSq();
           if (0 === e)
               return this.set(0, 0, 0);
           const n = t.dot(this) / e;
           return this.copy(t).multiplyScalar(n)
       }
       projectOnPlane(t) {
           return xo.copy(this).projectOnVector(t),
           this.sub(xo)
       }
       reflect(t) {
           return this.sub(xo.copy(t).multiplyScalar(2 * this.dot(t)))
       }
       angleTo(t) {
           const e = Math.sqrt(this.lengthSq() * t.lengthSq());
           if (0 === e)
               return Math.PI / 2;
           const n = this.dot(t) / e;
           return Math.acos(io(n, -1, 1))
       }
       distanceTo(t) {
           return Math.sqrt(this.distanceToSquared(t))
       }
       distanceToSquared(t) {
           const e = this.x - t.x
             , n = this.y - t.y
             , i = this.z - t.z;
           return e * e + n * n + i * i
       }
       manhattanDistanceTo(t) {
           return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
       }
       setFromSpherical(t) {
           return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
       }
       setFromSphericalCoords(t, e, n) {
           const i = Math.sin(e) * t;
           return this.x = i * Math.sin(n),
           this.y = Math.cos(e) * t,
           this.z = i * Math.cos(n),
           this
       }
       setFromCylindrical(t) {
           return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
       }
       setFromCylindricalCoords(t, e, n) {
           return this.x = t * Math.sin(e),
           this.y = n,
           this.z = t * Math.cos(e),
           this
       }
       setFromMatrixPosition(t) {
           const e = t.elements;
           return this.x = e[12],
           this.y = e[13],
           this.z = e[14],
           this
       }
       setFromMatrixScale(t) {
           const e = this.setFromMatrixColumn(t, 0).length()
             , n = this.setFromMatrixColumn(t, 1).length()
             , i = this.setFromMatrixColumn(t, 2).length();
           return this.x = e,
           this.y = n,
           this.z = i,
           this
       }
       setFromMatrixColumn(t, e) {
           return this.fromArray(t.elements, 4 * e)
       }
       setFromMatrix3Column(t, e) {
           return this.fromArray(t.elements, 3 * e)
       }
       equals(t) {
           return t.x === this.x && t.y === this.y && t.z === this.z
       }
       fromArray(t, e=0) {
           return this.x = t[e],
           this.y = t[e + 1],
           this.z = t[e + 2],
           this
       }
       toArray(t=[], e=0) {
           return t[e] = this.x,
           t[e + 1] = this.y,
           t[e + 2] = this.z,
           t
       }
       fromBufferAttribute(t, e, n) {
           return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),
           this.x = t.getX(e),
           this.y = t.getY(e),
           this.z = t.getZ(e),
           this
       }
       random() {
           return this.x = Math.random(),
           this.y = Math.random(),
           this.z = Math.random(),
           this
       }
   }
   _o.prototype.isVector3 = !0;
   const xo = new _o
     , yo = new vo;
   class wo {
       constructor(t=new _o(1 / 0,1 / 0,1 / 0), e=new _o(-1 / 0,-1 / 0,-1 / 0)) {
           this.min = t,
           this.max = e
       }
       set(t, e) {
           return this.min.copy(t),
           this.max.copy(e),
           this
       }
       setFromArray(t) {
           let e = 1 / 0
             , n = 1 / 0
             , i = 1 / 0
             , r = -1 / 0
             , a = -1 / 0
             , o = -1 / 0;
           for (let s = 0, l = t.length; s < l; s += 3) {
               const l = t[s]
                 , c = t[s + 1]
                 , u = t[s + 2];
               l < e && (e = l),
               c < n && (n = c),
               u < i && (i = u),
               l > r && (r = l),
               c > a && (a = c),
               u > o && (o = u)
           }
           return this.min.set(e, n, i),
           this.max.set(r, a, o),
           this
       }
       setFromBufferAttribute(t) {
           let e = 1 / 0
             , n = 1 / 0
             , i = 1 / 0
             , r = -1 / 0
             , a = -1 / 0
             , o = -1 / 0;
           for (let s = 0, l = t.count; s < l; s++) {
               const l = t.getX(s)
                 , c = t.getY(s)
                 , u = t.getZ(s);
               l < e && (e = l),
               c < n && (n = c),
               u < i && (i = u),
               l > r && (r = l),
               c > a && (a = c),
               u > o && (o = u)
           }
           return this.min.set(e, n, i),
           this.max.set(r, a, o),
           this
       }
       setFromPoints(t) {
           this.makeEmpty();
           for (let e = 0, n = t.length; e < n; e++)
               this.expandByPoint(t[e]);
           return this
       }
       setFromCenterAndSize(t, e) {
           const n = Mo.copy(e).multiplyScalar(.5);
           return this.min.copy(t).sub(n),
           this.max.copy(t).add(n),
           this
       }
       setFromObject(t) {
           return this.makeEmpty(),
           this.expandByObject(t)
       }
       clone() {
           return (new this.constructor).copy(this)
       }
       copy(t) {
           return this.min.copy(t.min),
           this.max.copy(t.max),
           this
       }
       makeEmpty() {
           return this.min.x = this.min.y = this.min.z = 1 / 0,
           this.max.x = this.max.y = this.max.z = -1 / 0,
           this
       }
       isEmpty() {
           return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
       }
       getCenter(t) {
           return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"),
           t = new _o),
           this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
       }
       getSize(t) {
           return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"),
           t = new _o),
           this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
       }
       expandByPoint(t) {
           return this.min.min(t),
           this.max.max(t),
           this
       }
       expandByVector(t) {
           return this.min.sub(t),
           this.max.add(t),
           this
       }
       expandByScalar(t) {
           return this.min.addScalar(-t),
           this.max.addScalar(t),
           this
       }
       expandByObject(t) {
           t.updateWorldMatrix(!1, !1);
           const e = t.geometry;
           void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(),
           So.copy(e.boundingBox),
           So.applyMatrix4(t.matrixWorld),
           this.union(So));
           const n = t.children;
           for (let t = 0, e = n.length; t < e; t++)
               this.expandByObject(n[t]);
           return this
       }
       containsPoint(t) {
           return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
       }
       containsBox(t) {
           return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
       }
       getParameter(t, e) {
           return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"),
           e = new _o),
           e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
       }
       intersectsBox(t) {
           return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
       }
       intersectsSphere(t) {
           return this.clampPoint(t.center, Mo),
           Mo.distanceToSquared(t.center) <= t.radius * t.radius
       }
       intersectsPlane(t) {
           let e, n;
           return t.normal.x > 0 ? (e = t.normal.x * this.min.x,
           n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x,
           n = t.normal.x * this.min.x),
           t.normal.y > 0 ? (e += t.normal.y * this.min.y,
           n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y,
           n += t.normal.y * this.min.y),
           t.normal.z > 0 ? (e += t.normal.z * this.min.z,
           n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z,
           n += t.normal.z * this.min.z),
           e <= -t.constant && n >= -t.constant
       }
       intersectsTriangle(t) {
           if (this.isEmpty())
               return !1;
           this.getCenter(Po),
           Do.subVectors(this.max, Po),
           To.subVectors(t.a, Po),
           Eo.subVectors(t.b, Po),
           Lo.subVectors(t.c, Po),
           Ao.subVectors(Eo, To),
           Ro.subVectors(Lo, Eo),
           Co.subVectors(To, Lo);
           let e = [0, -Ao.z, Ao.y, 0, -Ro.z, Ro.y, 0, -Co.z, Co.y, Ao.z, 0, -Ao.x, Ro.z, 0, -Ro.x, Co.z, 0, -Co.x, -Ao.y, Ao.x, 0, -Ro.y, Ro.x, 0, -Co.y, Co.x, 0];
           return !!No(e, To, Eo, Lo, Do) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1],
           !!No(e, To, Eo, Lo, Do) && (Io.crossVectors(Ao, Ro),
           e = [Io.x, Io.y, Io.z],
           No(e, To, Eo, Lo, Do)))
       }
       clampPoint(t, e) {
           return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"),
           e = new _o),
           e.copy(t).clamp(this.min, this.max)
       }
       distanceToPoint(t) {
           return Mo.copy(t).clamp(this.min, this.max).sub(t).length()
       }
       getBoundingSphere(t) {
           return void 0 === t && console.error("THREE.Box3: .getBoundingSphere() target is now required"),
           this.getCenter(t.center),
           t.radius = .5 * this.getSize(Mo).length(),
           t
       }
       intersect(t) {
           return this.min.max(t.min),
           this.max.min(t.max),
           this.isEmpty() && this.makeEmpty(),
           this
       }
       union(t) {
           return this.min.min(t.min),
           this.max.max(t.max),
           this
       }
       applyMatrix4(t) {
           return this.isEmpty() || (bo[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
           bo[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
           bo[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
           bo[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
           bo[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
           bo[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
           bo[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
           bo[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
           this.setFromPoints(bo)),
           this
       }
       translate(t) {
           return this.min.add(t),
           this.max.add(t),
           this
       }
       equals(t) {
           return t.min.equals(this.min) && t.max.equals(this.max)
       }
   }
   wo.prototype.isBox3 = !0;
   const bo = [new _o, new _o, new _o, new _o, new _o, new _o, new _o, new _o]
     , Mo = new _o
     , So = new wo
     , To = new _o
     , Eo = new _o
     , Lo = new _o
     , Ao = new _o
     , Ro = new _o
     , Co = new _o
     , Po = new _o
     , Do = new _o
     , Io = new _o
     , Oo = new _o;
   function No(t, e, n, i, r) {
       for (let a = 0, o = t.length - 3; a <= o; a += 3) {
           Oo.fromArray(t, a);
           const o = r.x * Math.abs(Oo.x) + r.y * Math.abs(Oo.y) + r.z * Math.abs(Oo.z)
             , s = e.dot(Oo)
             , l = n.dot(Oo)
             , c = i.dot(Oo);
           if (Math.max(-Math.max(s, l, c), Math.min(s, l, c)) > o)
               return !1
       }
       return !0
   }
   const zo = new wo
     , Fo = new _o
     , Ho = new _o
     , Bo = new _o;
   class ko {
       constructor(t=new _o, e=-1) {
           this.center = t,
           this.radius = e
       }
       set(t, e) {
           return this.center.copy(t),
           this.radius = e,
           this
       }
       setFromPoints(t, e) {
           const n = this.center;
           void 0 !== e ? n.copy(e) : zo.setFromPoints(t).getCenter(n);
           let i = 0;
           for (let e = 0, r = t.length; e < r; e++)
               i = Math.max(i, n.distanceToSquared(t[e]));
           return this.radius = Math.sqrt(i),
           this
       }
       copy(t) {
           return this.center.copy(t.center),
           this.radius = t.radius,
           this
       }
       isEmpty() {
           return this.radius < 0
       }
       makeEmpty() {
           return this.center.set(0, 0, 0),
           this.radius = -1,
           this
       }
       containsPoint(t) {
           return t.distanceToSquared(this.center) <= this.radius * this.radius
       }
       distanceToPoint(t) {
           return t.distanceTo(this.center) - this.radius
       }
       intersectsSphere(t) {
           const e = this.radius + t.radius;
           return t.center.distanceToSquared(this.center) <= e * e
       }
       intersectsBox(t) {
           return t.intersectsSphere(this)
       }
       intersectsPlane(t) {
           return Math.abs(t.distanceToPoint(this.center)) <= this.radius
       }
       clampPoint(t, e) {
           const n = this.center.distanceToSquared(t);
           return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"),
           e = new _o),
           e.copy(t),
           n > this.radius * this.radius && (e.sub(this.center).normalize(),
           e.multiplyScalar(this.radius).add(this.center)),
           e
       }
       getBoundingBox(t) {
           return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"),
           t = new wo),
           this.isEmpty() ? (t.makeEmpty(),
           t) : (t.set(this.center, this.center),
           t.expandByScalar(this.radius),
           t)
       }
       applyMatrix4(t) {
           return this.center.applyMatrix4(t),
           this.radius = this.radius * t.getMaxScaleOnAxis(),
           this
       }
       translate(t) {
           return this.center.add(t),
           this
       }
       expandByPoint(t) {
           Bo.subVectors(t, this.center);
           const e = Bo.lengthSq();
           if (e > this.radius * this.radius) {
               const t = Math.sqrt(e)
                 , n = .5 * (t - this.radius);
               this.center.add(Bo.multiplyScalar(n / t)),
               this.radius += n
           }
           return this
       }
       union(t) {
           return Ho.subVectors(t.center, this.center).normalize().multiplyScalar(t.radius),
           this.expandByPoint(Fo.copy(t.center).add(Ho)),
           this.expandByPoint(Fo.copy(t.center).sub(Ho)),
           this
       }
       equals(t) {
           return t.center.equals(this.center) && t.radius === this.radius
       }
       clone() {
           return (new this.constructor).copy(this)
       }
   }
   const Uo = new _o
     , Go = new _o
     , Wo = new _o
     , Vo = new _o
     , qo = new _o
     , jo = new _o
     , Yo = new _o;
   class Xo {
       constructor(t=new _o, e=new _o(0,0,-1)) {
           this.origin = t,
           this.direction = e
       }
       set(t, e) {
           return this.origin.copy(t),
           this.direction.copy(e),
           this
       }
       copy(t) {
           return this.origin.copy(t.origin),
           this.direction.copy(t.direction),
           this
       }
       at(t, e) {
           return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"),
           e = new _o),
           e.copy(this.direction).multiplyScalar(t).add(this.origin)
       }
       lookAt(t) {
           return this.direction.copy(t).sub(this.origin).normalize(),
           this
       }
       recast(t) {
           return this.origin.copy(this.at(t, Uo)),
           this
       }
       closestPointToPoint(t, e) {
           void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"),
           e = new _o),
           e.subVectors(t, this.origin);
           const n = e.dot(this.direction);
           return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin)
       }
       distanceToPoint(t) {
           return Math.sqrt(this.distanceSqToPoint(t))
       }
       distanceSqToPoint(t) {
           const e = Uo.subVectors(t, this.origin).dot(this.direction);
           return e < 0 ? this.origin.distanceToSquared(t) : (Uo.copy(this.direction).multiplyScalar(e).add(this.origin),
           Uo.distanceToSquared(t))
       }
       distanceSqToSegment(t, e, n, i) {
           Go.copy(t).add(e).multiplyScalar(.5),
           Wo.copy(e).sub(t).normalize(),
           Vo.copy(this.origin).sub(Go);
           const r = .5 * t.distanceTo(e)
             , a = -this.direction.dot(Wo)
             , o = Vo.dot(this.direction)
             , s = -Vo.dot(Wo)
             , l = Vo.lengthSq()
             , c = Math.abs(1 - a * a);
           let u, h, d, p;
           if (c > 0)
               if (u = a * s - o,
               h = a * o - s,
               p = r * c,
               u >= 0)
                   if (h >= -p)
                       if (h <= p) {
                           const t = 1 / c;
                           u *= t,
                           h *= t,
                           d = u * (u + a * h + 2 * o) + h * (a * u + h + 2 * s) + l
                       } else
                           h = r,
                           u = Math.max(0, -(a * h + o)),
                           d = -u * u + h * (h + 2 * s) + l;
                   else
                       h = -r,
                       u = Math.max(0, -(a * h + o)),
                       d = -u * u + h * (h + 2 * s) + l;
               else
                   h <= -p ? (u = Math.max(0, -(-a * r + o)),
                   h = u > 0 ? -r : Math.min(Math.max(-r, -s), r),
                   d = -u * u + h * (h + 2 * s) + l) : h <= p ? (u = 0,
                   h = Math.min(Math.max(-r, -s), r),
                   d = h * (h + 2 * s) + l) : (u = Math.max(0, -(a * r + o)),
                   h = u > 0 ? r : Math.min(Math.max(-r, -s), r),
                   d = -u * u + h * (h + 2 * s) + l);
           else
               h = a > 0 ? -r : r,
               u = Math.max(0, -(a * h + o)),
               d = -u * u + h * (h + 2 * s) + l;
           return n && n.copy(this.direction).multiplyScalar(u).add(this.origin),
           i && i.copy(Wo).multiplyScalar(h).add(Go),
           d
       }
       intersectSphere(t, e) {
           Uo.subVectors(t.center, this.origin);
           const n = Uo.dot(this.direction)
             , i = Uo.dot(Uo) - n * n
             , r = t.radius * t.radius;
           if (i > r)
               return null;
           const a = Math.sqrt(r - i)
             , o = n - a
             , s = n + a;
           return o < 0 && s < 0 ? null : o < 0 ? this.at(s, e) : this.at(o, e)
       }
       intersectsSphere(t) {
           return this.distanceSqToPoint(t.center) <= t.radius * t.radius
       }
       distanceToPlane(t) {
           const e = t.normal.dot(this.direction);
           if (0 === e)
               return 0 === t.distanceToPoint(this.origin) ? 0 : null;
           const n = -(this.origin.dot(t.normal) + t.constant) / e;
           return n >= 0 ? n : null
       }
       intersectPlane(t, e) {
           const n = this.distanceToPlane(t);
           return null === n ? null : this.at(n, e)
       }
       intersectsPlane(t) {
           const e = t.distanceToPoint(this.origin);
           if (0 === e)
               return !0;
           return t.normal.dot(this.direction) * e < 0
       }
       intersectBox(t, e) {
           let n, i, r, a, o, s;
           const l = 1 / this.direction.x
             , c = 1 / this.direction.y
             , u = 1 / this.direction.z
             , h = this.origin;
           return l >= 0 ? (n = (t.min.x - h.x) * l,
           i = (t.max.x - h.x) * l) : (n = (t.max.x - h.x) * l,
           i = (t.min.x - h.x) * l),
           c >= 0 ? (r = (t.min.y - h.y) * c,
           a = (t.max.y - h.y) * c) : (r = (t.max.y - h.y) * c,
           a = (t.min.y - h.y) * c),
           n > a || r > i ? null : ((r > n || n != n) && (n = r),
           (a < i || i != i) && (i = a),
           u >= 0 ? (o = (t.min.z - h.z) * u,
           s = (t.max.z - h.z) * u) : (o = (t.max.z - h.z) * u,
           s = (t.min.z - h.z) * u),
           n > s || o > i ? null : ((o > n || n != n) && (n = o),
           (s < i || i != i) && (i = s),
           i < 0 ? null : this.at(n >= 0 ? n : i, e)))
       }
       intersectsBox(t) {
           return null !== this.intersectBox(t, Uo)
       }
       intersectTriangle(t, e, n, i, r) {
           qo.subVectors(e, t),
           jo.subVectors(n, t),
           Yo.crossVectors(qo, jo);
           let a, o = this.direction.dot(Yo);
           if (o > 0) {
               if (i)
                   return null;
               a = 1
           } else {
               if (!(o < 0))
                   return null;
               a = -1,
               o = -o
           }
           Vo.subVectors(this.origin, t);
           const s = a * this.direction.dot(jo.crossVectors(Vo, jo));
           if (s < 0)
               return null;
           const l = a * this.direction.dot(qo.cross(Vo));
           if (l < 0)
               return null;
           if (s + l > o)
               return null;
           const c = -a * Vo.dot(Yo);
           return c < 0 ? null : this.at(c / o, r)
       }
       applyMatrix4(t) {
           return this.origin.applyMatrix4(t),
           this.direction.transformDirection(t),
           this
       }
       equals(t) {
           return t.origin.equals(this.origin) && t.direction.equals(this.direction)
       }
       clone() {
           return (new this.constructor).copy(this)
       }
   }
   class Zo {
       constructor() {
           this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
           arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
       }
       set(t, e, n, i, r, a, o, s, l, c, u, h, d, p, f, m) {
           const g = this.elements;
           return g[0] = t,
           g[4] = e,
           g[8] = n,
           g[12] = i,
           g[1] = r,
           g[5] = a,
           g[9] = o,
           g[13] = s,
           g[2] = l,
           g[6] = c,
           g[10] = u,
           g[14] = h,
           g[3] = d,
           g[7] = p,
           g[11] = f,
           g[15] = m,
           this
       }
       identity() {
           return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
           this
       }
       clone() {
           return (new Zo).fromArray(this.elements)
       }
       copy(t) {
           const e = this.elements
             , n = t.elements;
           return e[0] = n[0],
           e[1] = n[1],
           e[2] = n[2],
           e[3] = n[3],
           e[4] = n[4],
           e[5] = n[5],
           e[6] = n[6],
           e[7] = n[7],
           e[8] = n[8],
           e[9] = n[9],
           e[10] = n[10],
           e[11] = n[11],
           e[12] = n[12],
           e[13] = n[13],
           e[14] = n[14],
           e[15] = n[15],
           this
       }
       copyPosition(t) {
           const e = this.elements
             , n = t.elements;
           return e[12] = n[12],
           e[13] = n[13],
           e[14] = n[14],
           this
       }
       setFromMatrix3(t) {
           const e = t.elements;
           return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1),
           this
       }
       extractBasis(t, e, n) {
           return t.setFromMatrixColumn(this, 0),
           e.setFromMatrixColumn(this, 1),
           n.setFromMatrixColumn(this, 2),
           this
       }
       makeBasis(t, e, n) {
           return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1),
           this
       }
       extractRotation(t) {
           const e = this.elements
             , n = t.elements
             , i = 1 / Jo.setFromMatrixColumn(t, 0).length()
             , r = 1 / Jo.setFromMatrixColumn(t, 1).length()
             , a = 1 / Jo.setFromMatrixColumn(t, 2).length();
           return e[0] = n[0] * i,
           e[1] = n[1] * i,
           e[2] = n[2] * i,
           e[3] = 0,
           e[4] = n[4] * r,
           e[5] = n[5] * r,
           e[6] = n[6] * r,
           e[7] = 0,
           e[8] = n[8] * a,
           e[9] = n[9] * a,
           e[10] = n[10] * a,
           e[11] = 0,
           e[12] = 0,
           e[13] = 0,
           e[14] = 0,
           e[15] = 1,
           this
       }
       makeRotationFromEuler(t) {
           t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
           const e = this.elements
             , n = t.x
             , i = t.y
             , r = t.z
             , a = Math.cos(n)
             , o = Math.sin(n)
             , s = Math.cos(i)
             , l = Math.sin(i)
             , c = Math.cos(r)
             , u = Math.sin(r);
           if ("XYZ" === t.order) {
               const t = a * c
                 , n = a * u
                 , i = o * c
                 , r = o * u;
               e[0] = s * c,
               e[4] = -s * u,
               e[8] = l,
               e[1] = n + i * l,
               e[5] = t - r * l,
               e[9] = -o * s,
               e[2] = r - t * l,
               e[6] = i + n * l,
               e[10] = a * s
           } else if ("YXZ" === t.order) {
               const t = s * c
                 , n = s * u
                 , i = l * c
                 , r = l * u;
               e[0] = t + r * o,
               e[4] = i * o - n,
               e[8] = a * l,
               e[1] = a * u,
               e[5] = a * c,
               e[9] = -o,
               e[2] = n * o - i,
               e[6] = r + t * o,
               e[10] = a * s
           } else if ("ZXY" === t.order) {
               const t = s * c
                 , n = s * u
                 , i = l * c
                 , r = l * u;
               e[0] = t - r * o,
               e[4] = -a * u,
               e[8] = i + n * o,
               e[1] = n + i * o,
               e[5] = a * c,
               e[9] = r - t * o,
               e[2] = -a * l,
               e[6] = o,
               e[10] = a * s
           } else if ("ZYX" === t.order) {
               const t = a * c
                 , n = a * u
                 , i = o * c
                 , r = o * u;
               e[0] = s * c,
               e[4] = i * l - n,
               e[8] = t * l + r,
               e[1] = s * u,
               e[5] = r * l + t,
               e[9] = n * l - i,
               e[2] = -l,
               e[6] = o * s,
               e[10] = a * s
           } else if ("YZX" === t.order) {
               const t = a * s
                 , n = a * l
                 , i = o * s
                 , r = o * l;
               e[0] = s * c,
               e[4] = r - t * u,
               e[8] = i * u + n,
               e[1] = u,
               e[5] = a * c,
               e[9] = -o * c,
               e[2] = -l * c,
               e[6] = n * u + i,
               e[10] = t - r * u
           } else if ("XZY" === t.order) {
               const t = a * s
                 , n = a * l
                 , i = o * s
                 , r = o * l;
               e[0] = s * c,
               e[4] = -u,
               e[8] = l * c,
               e[1] = t * u + r,
               e[5] = a * c,
               e[9] = n * u - i,
               e[2] = i * u - n,
               e[6] = o * c,
               e[10] = r * u + t
           }
           return e[3] = 0,
           e[7] = 0,
           e[11] = 0,
           e[12] = 0,
           e[13] = 0,
           e[14] = 0,
           e[15] = 1,
           this
       }
       makeRotationFromQuaternion(t) {
           return this.compose(Ko, t, $o)
       }
       lookAt(t, e, n) {
           const i = this.elements;
           return ns.subVectors(t, e),
           0 === ns.lengthSq() && (ns.z = 1),
           ns.normalize(),
           ts.crossVectors(n, ns),
           0 === ts.lengthSq() && (1 === Math.abs(n.z) ? ns.x += 1e-4 : ns.z += 1e-4,
           ns.normalize(),
           ts.crossVectors(n, ns)),
           ts.normalize(),
           es.crossVectors(ns, ts),
           i[0] = ts.x,
           i[4] = es.x,
           i[8] = ns.x,
           i[1] = ts.y,
           i[5] = es.y,
           i[9] = ns.y,
           i[2] = ts.z,
           i[6] = es.z,
           i[10] = ns.z,
           this
       }
       multiply(t, e) {
           return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
           this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
       }
       premultiply(t) {
           return this.multiplyMatrices(t, this)
       }
       multiplyMatrices(t, e) {
           const n = t.elements
             , i = e.elements
             , r = this.elements
             , a = n[0]
             , o = n[4]
             , s = n[8]
             , l = n[12]
             , c = n[1]
             , u = n[5]
             , h = n[9]
             , d = n[13]
             , p = n[2]
             , f = n[6]
             , m = n[10]
             , g = n[14]
             , v = n[3]
             , _ = n[7]
             , x = n[11]
             , y = n[15]
             , w = i[0]
             , b = i[4]
             , M = i[8]
             , S = i[12]
             , T = i[1]
             , E = i[5]
             , L = i[9]
             , A = i[13]
             , R = i[2]
             , C = i[6]
             , P = i[10]
             , D = i[14]
             , I = i[3]
             , O = i[7]
             , N = i[11]
             , z = i[15];
           return r[0] = a * w + o * T + s * R + l * I,
           r[4] = a * b + o * E + s * C + l * O,
           r[8] = a * M + o * L + s * P + l * N,
           r[12] = a * S + o * A + s * D + l * z,
           r[1] = c * w + u * T + h * R + d * I,
           r[5] = c * b + u * E + h * C + d * O,
           r[9] = c * M + u * L + h * P + d * N,
           r[13] = c * S + u * A + h * D + d * z,
           r[2] = p * w + f * T + m * R + g * I,
           r[6] = p * b + f * E + m * C + g * O,
           r[10] = p * M + f * L + m * P + g * N,
           r[14] = p * S + f * A + m * D + g * z,
           r[3] = v * w + _ * T + x * R + y * I,
           r[7] = v * b + _ * E + x * C + y * O,
           r[11] = v * M + _ * L + x * P + y * N,
           r[15] = v * S + _ * A + x * D + y * z,
           this
       }
       multiplyScalar(t) {
           const e = this.elements;
           return e[0] *= t,
           e[4] *= t,
           e[8] *= t,
           e[12] *= t,
           e[1] *= t,
           e[5] *= t,
           e[9] *= t,
           e[13] *= t,
           e[2] *= t,
           e[6] *= t,
           e[10] *= t,
           e[14] *= t,
           e[3] *= t,
           e[7] *= t,
           e[11] *= t,
           e[15] *= t,
           this
       }
       determinant() {
           const t = this.elements
             , e = t[0]
             , n = t[4]
             , i = t[8]
             , r = t[12]
             , a = t[1]
             , o = t[5]
             , s = t[9]
             , l = t[13]
             , c = t[2]
             , u = t[6]
             , h = t[10]
             , d = t[14];
           return t[3] * (+r * s * u - i * l * u - r * o * h + n * l * h + i * o * d - n * s * d) + t[7] * (+e * s * d - e * l * h + r * a * h - i * a * d + i * l * c - r * s * c) + t[11] * (+e * l * u - e * o * d - r * a * u + n * a * d + r * o * c - n * l * c) + t[15] * (-i * o * c - e * s * u + e * o * h + i * a * u - n * a * h + n * s * c)
       }
       transpose() {
           const t = this.elements;
           let e;
           return e = t[1],
           t[1] = t[4],
           t[4] = e,
           e = t[2],
           t[2] = t[8],
           t[8] = e,
           e = t[6],
           t[6] = t[9],
           t[9] = e,
           e = t[3],
           t[3] = t[12],
           t[12] = e,
           e = t[7],
           t[7] = t[13],
           t[13] = e,
           e = t[11],
           t[11] = t[14],
           t[14] = e,
           this
       }
       setPosition(t, e, n) {
           const i = this.elements;
           return t.isVector3 ? (i[12] = t.x,
           i[13] = t.y,
           i[14] = t.z) : (i[12] = t,
           i[13] = e,
           i[14] = n),
           this
       }
       invert() {
           const t = this.elements
             , e = t[0]
             , n = t[1]
             , i = t[2]
             , r = t[3]
             , a = t[4]
             , o = t[5]
             , s = t[6]
             , l = t[7]
             , c = t[8]
             , u = t[9]
             , h = t[10]
             , d = t[11]
             , p = t[12]
             , f = t[13]
             , m = t[14]
             , g = t[15]
             , v = u * m * l - f * h * l + f * s * d - o * m * d - u * s * g + o * h * g
             , _ = p * h * l - c * m * l - p * s * d + a * m * d + c * s * g - a * h * g
             , x = c * f * l - p * u * l + p * o * d - a * f * d - c * o * g + a * u * g
             , y = p * u * s - c * f * s - p * o * h + a * f * h + c * o * m - a * u * m
             , w = e * v + n * _ + i * x + r * y;
           if (0 === w)
               return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
           const b = 1 / w;
           return t[0] = v * b,
           t[1] = (f * h * r - u * m * r - f * i * d + n * m * d + u * i * g - n * h * g) * b,
           t[2] = (o * m * r - f * s * r + f * i * l - n * m * l - o * i * g + n * s * g) * b,
           t[3] = (u * s * r - o * h * r - u * i * l + n * h * l + o * i * d - n * s * d) * b,
           t[4] = _ * b,
           t[5] = (c * m * r - p * h * r + p * i * d - e * m * d - c * i * g + e * h * g) * b,
           t[6] = (p * s * r - a * m * r - p * i * l + e * m * l + a * i * g - e * s * g) * b,
           t[7] = (a * h * r - c * s * r + c * i * l - e * h * l - a * i * d + e * s * d) * b,
           t[8] = x * b,
           t[9] = (p * u * r - c * f * r - p * n * d + e * f * d + c * n * g - e * u * g) * b,
           t[10] = (a * f * r - p * o * r + p * n * l - e * f * l - a * n * g + e * o * g) * b,
           t[11] = (c * o * r - a * u * r - c * n * l + e * u * l + a * n * d - e * o * d) * b,
           t[12] = y * b,
           t[13] = (c * f * i - p * u * i + p * n * h - e * f * h - c * n * m + e * u * m) * b,
           t[14] = (p * o * i - a * f * i - p * n * s + e * f * s + a * n * m - e * o * m) * b,
           t[15] = (a * u * i - c * o * i + c * n * s - e * u * s - a * n * h + e * o * h) * b,
           this
       }
       scale(t) {
           const e = this.elements
             , n = t.x
             , i = t.y
             , r = t.z;
           return e[0] *= n,
           e[4] *= i,
           e[8] *= r,
           e[1] *= n,
           e[5] *= i,
           e[9] *= r,
           e[2] *= n,
           e[6] *= i,
           e[10] *= r,
           e[3] *= n,
           e[7] *= i,
           e[11] *= r,
           this
       }
       getMaxScaleOnAxis() {
           const t = this.elements
             , e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
             , n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6]
             , i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
           return Math.sqrt(Math.max(e, n, i))
       }
       makeTranslation(t, e, n) {
           return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1),
           this
       }
       makeRotationX(t) {
           const e = Math.cos(t)
             , n = Math.sin(t);
           return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1),
           this
       }
       makeRotationY(t) {
           const e = Math.cos(t)
             , n = Math.sin(t);
           return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1),
           this
       }
       makeRotationZ(t) {
           const e = Math.cos(t)
             , n = Math.sin(t);
           return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
           this
       }
       makeRotationAxis(t, e) {
           const n = Math.cos(e)
             , i = Math.sin(e)
             , r = 1 - n
             , a = t.x
             , o = t.y
             , s = t.z
             , l = r * a
             , c = r * o;
           return this.set(l * a + n, l * o - i * s, l * s + i * o, 0, l * o + i * s, c * o + n, c * s - i * a, 0, l * s - i * o, c * s + i * a, r * s * s + n, 0, 0, 0, 0, 1),
           this
       }
       makeScale(t, e, n) {
           return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
           this
       }
       makeShear(t, e, n) {
           return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1),
           this
       }
       compose(t, e, n) {
           const i = this.elements
             , r = e._x
             , a = e._y
             , o = e._z
             , s = e._w
             , l = r + r
             , c = a + a
             , u = o + o
             , h = r * l
             , d = r * c
             , p = r * u
             , f = a * c
             , m = a * u
             , g = o * u
             , v = s * l
             , _ = s * c
             , x = s * u
             , y = n.x
             , w = n.y
             , b = n.z;
           return i[0] = (1 - (f + g)) * y,
           i[1] = (d + x) * y,
           i[2] = (p - _) * y,
           i[3] = 0,
           i[4] = (d - x) * w,
           i[5] = (1 - (h + g)) * w,
           i[6] = (m + v) * w,
           i[7] = 0,
           i[8] = (p + _) * b,
           i[9] = (m - v) * b,
           i[10] = (1 - (h + f)) * b,
           i[11] = 0,
           i[12] = t.x,
           i[13] = t.y,
           i[14] = t.z,
           i[15] = 1,
           this
       }
       decompose(t, e, n) {
           const i = this.elements;
           let r = Jo.set(i[0], i[1], i[2]).length();
           const a = Jo.set(i[4], i[5], i[6]).length()
             , o = Jo.set(i[8], i[9], i[10]).length();
           this.determinant() < 0 && (r = -r),
           t.x = i[12],
           t.y = i[13],
           t.z = i[14],
           Qo.copy(this);
           const s = 1 / r
             , l = 1 / a
             , c = 1 / o;
           return Qo.elements[0] *= s,
           Qo.elements[1] *= s,
           Qo.elements[2] *= s,
           Qo.elements[4] *= l,
           Qo.elements[5] *= l,
           Qo.elements[6] *= l,
           Qo.elements[8] *= c,
           Qo.elements[9] *= c,
           Qo.elements[10] *= c,
           e.setFromRotationMatrix(Qo),
           n.x = r,
           n.y = a,
           n.z = o,
           this
       }
       makePerspective(t, e, n, i, r, a) {
           void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
           const o = this.elements
             , s = 2 * r / (e - t)
             , l = 2 * r / (n - i)
             , c = (e + t) / (e - t)
             , u = (n + i) / (n - i)
             , h = -(a + r) / (a - r)
             , d = -2 * a * r / (a - r);
           return o[0] = s,
           o[4] = 0,
           o[8] = c,
           o[12] = 0,
           o[1] = 0,
           o[5] = l,
           o[9] = u,
           o[13] = 0,
           o[2] = 0,
           o[6] = 0,
           o[10] = h,
           o[14] = d,
           o[3] = 0,
           o[7] = 0,
           o[11] = -1,
           o[15] = 0,
           this
       }
       makeOrthographic(t, e, n, i, r, a) {
           const o = this.elements
             , s = 1 / (e - t)
             , l = 1 / (n - i)
             , c = 1 / (a - r)
             , u = (e + t) * s
             , h = (n + i) * l
             , d = (a + r) * c;
           return o[0] = 2 * s,
           o[4] = 0,
           o[8] = 0,
           o[12] = -u,
           o[1] = 0,
           o[5] = 2 * l,
           o[9] = 0,
           o[13] = -h,
           o[2] = 0,
           o[6] = 0,
           o[10] = -2 * c,
           o[14] = -d,
           o[3] = 0,
           o[7] = 0,
           o[11] = 0,
           o[15] = 1,
           this
       }
       equals(t) {
           const e = this.elements
             , n = t.elements;
           for (let t = 0; t < 16; t++)
               if (e[t] !== n[t])
                   return !1;
           return !0
       }
       fromArray(t, e=0) {
           for (let n = 0; n < 16; n++)
               this.elements[n] = t[n + e];
           return this
       }
       toArray(t=[], e=0) {
           const n = this.elements;
           return t[e] = n[0],
           t[e + 1] = n[1],
           t[e + 2] = n[2],
           t[e + 3] = n[3],
           t[e + 4] = n[4],
           t[e + 5] = n[5],
           t[e + 6] = n[6],
           t[e + 7] = n[7],
           t[e + 8] = n[8],
           t[e + 9] = n[9],
           t[e + 10] = n[10],
           t[e + 11] = n[11],
           t[e + 12] = n[12],
           t[e + 13] = n[13],
           t[e + 14] = n[14],
           t[e + 15] = n[15],
           t
       }
   }
   Zo.prototype.isMatrix4 = !0;
   const Jo = new _o
     , Qo = new Zo
     , Ko = new _o(0,0,0)
     , $o = new _o(1,1,1)
     , ts = new _o
     , es = new _o
     , ns = new _o
     , is = new Zo
     , rs = new vo;
   class as {
       constructor(t=0, e=0, n=0, i=as.DefaultOrder) {
           this._x = t,
           this._y = e,
           this._z = n,
           this._order = i
       }
       get x() {
           return this._x
       }
       set x(t) {
           this._x = t,
           this._onChangeCallback()
       }
       get y() {
           return this._y
       }
       set y(t) {
           this._y = t,
           this._onChangeCallback()
       }
       get z() {
           return this._z
       }
       set z(t) {
           this._z = t,
           this._onChangeCallback()
       }
       get order() {
           return this._order
       }
       set order(t) {
           this._order = t,
           this._onChangeCallback()
       }
       set(t, e, n, i) {
           return this._x = t,
           this._y = e,
           this._z = n,
           this._order = i || this._order,
           this._onChangeCallback(),
           this
       }
       clone() {
           return new this.constructor(this._x,this._y,this._z,this._order)
       }
       copy(t) {
           return this._x = t._x,
           this._y = t._y,
           this._z = t._z,
           this._order = t._order,
           this._onChangeCallback(),
           this
       }
       setFromRotationMatrix(t, e, n) {
           const i = t.elements
             , r = i[0]
             , a = i[4]
             , o = i[8]
             , s = i[1]
             , l = i[5]
             , c = i[9]
             , u = i[2]
             , h = i[6]
             , d = i[10];
           switch (e = e || this._order) {
           case "XYZ":
               this._y = Math.asin(io(o, -1, 1)),
               Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, d),
               this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(h, l),
               this._z = 0);
               break;
           case "YXZ":
               this._x = Math.asin(-io(c, -1, 1)),
               Math.abs(c) < .9999999 ? (this._y = Math.atan2(o, d),
               this._z = Math.atan2(s, l)) : (this._y = Math.atan2(-u, r),
               this._z = 0);
               break;
           case "ZXY":
               this._x = Math.asin(io(h, -1, 1)),
               Math.abs(h) < .9999999 ? (this._y = Math.atan2(-u, d),
               this._z = Math.atan2(-a, l)) : (this._y = 0,
               this._z = Math.atan2(s, r));
               break;
           case "ZYX":
               this._y = Math.asin(-io(u, -1, 1)),
               Math.abs(u) < .9999999 ? (this._x = Math.atan2(h, d),
               this._z = Math.atan2(s, r)) : (this._x = 0,
               this._z = Math.atan2(-a, l));
               break;
           case "YZX":
               this._z = Math.asin(io(s, -1, 1)),
               Math.abs(s) < .9999999 ? (this._x = Math.atan2(-c, l),
               this._y = Math.atan2(-u, r)) : (this._x = 0,
               this._y = Math.atan2(o, d));
               break;
           case "XZY":
               this._z = Math.asin(-io(a, -1, 1)),
               Math.abs(a) < .9999999 ? (this._x = Math.atan2(h, l),
               this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-c, d),
               this._y = 0);
               break;
           default:
               console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
           }
           return this._order = e,
           !1 !== n && this._onChangeCallback(),
           this
       }
       setFromQuaternion(t, e, n) {
           return is.makeRotationFromQuaternion(t),
           this.setFromRotationMatrix(is, e, n)
       }
       setFromVector3(t, e) {
           return this.set(t.x, t.y, t.z, e || this._order)
       }
       reorder(t) {
           return rs.setFromEuler(this),
           this.setFromQuaternion(rs, t)
       }
       equals(t) {
           return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
       }
       fromArray(t) {
           return this._x = t[0],
           this._y = t[1],
           this._z = t[2],
           void 0 !== t[3] && (this._order = t[3]),
           this._onChangeCallback(),
           this
       }
       toArray(t=[], e=0) {
           return t[e] = this._x,
           t[e + 1] = this._y,
           t[e + 2] = this._z,
           t[e + 3] = this._order,
           t
       }
       toVector3(t) {
           return t ? t.set(this._x, this._y, this._z) : new _o(this._x,this._y,this._z)
       }
       _onChange(t) {
           return this._onChangeCallback = t,
           this
       }
       _onChangeCallback() {}
   }
   as.prototype.isEuler = !0,
   as.DefaultOrder = "XYZ",
   as.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
   class os {
       constructor() {
           this.mask = 1
       }
       set(t) {
           this.mask = 1 << t | 0
       }
       enable(t) {
           this.mask |= 1 << t | 0
       }
       enableAll() {
           this.mask = -1
       }
       toggle(t) {
           this.mask ^= 1 << t | 0
       }
       disable(t) {
           this.mask &= ~(1 << t | 0)
       }
       disableAll() {
           this.mask = 0
       }
       test(t) {
           return 0 != (this.mask & t.mask)
       }
   }
   let ss = 0;
   const ls = new _o
     , cs = new vo
     , us = new Zo
     , hs = new _o
     , ds = new _o
     , ps = new _o
     , fs = new vo
     , ms = new _o(1,0,0)
     , gs = new _o(0,1,0)
     , vs = new _o(0,0,1)
     , _s = {
       type: "added"
   }
     , xs = {
       type: "removed"
   };
   class ys extends Ka {
       constructor() {
           super(),
           Object.defineProperty(this, "id", {
               value: ss++
           }),
           this.uuid = no(),
           this.name = "",
           this.type = "Object3D",
           this.parent = null,
           this.children = [],
           this.up = ys.DefaultUp.clone();
           const t = new _o
             , e = new as
             , n = new vo
             , i = new _o(1,1,1);
           e._onChange((function() {
               n.setFromEuler(e, !1)
           }
           )),
           n._onChange((function() {
               e.setFromQuaternion(n, void 0, !1)
           }
           )),
           Object.defineProperties(this, {
               position: {
                   configurable: !0,
                   enumerable: !0,
                   value: t
               },
               rotation: {
                   configurable: !0,
                   enumerable: !0,
                   value: e
               },
               quaternion: {
                   configurable: !0,
                   enumerable: !0,
                   value: n
               },
               scale: {
                   configurable: !0,
                   enumerable: !0,
                   value: i
               },
               modelViewMatrix: {
                   value: new Zo
               },
               normalMatrix: {
                   value: new lo
               }
           }),
           this.matrix = new Zo,
           this.matrixWorld = new Zo,
           this.matrixAutoUpdate = ys.DefaultMatrixAutoUpdate,
           this.matrixWorldNeedsUpdate = !1,
           this.layers = new os,
           this.visible = !0,
           this.castShadow = !1,
           this.receiveShadow = !1,
           this.frustumCulled = !0,
           this.renderOrder = 0,
           this.animations = [],
           this.userData = {}
       }
       onBeforeRender() {}
       onAfterRender() {}
       applyMatrix4(t) {
           this.matrixAutoUpdate && this.updateMatrix(),
           this.matrix.premultiply(t),
           this.matrix.decompose(this.position, this.quaternion, this.scale)
       }
       applyQuaternion(t) {
           return this.quaternion.premultiply(t),
           this
       }
       setRotationFromAxisAngle(t, e) {
           this.quaternion.setFromAxisAngle(t, e)
       }
       setRotationFromEuler(t) {
           this.quaternion.setFromEuler(t, !0)
       }
       setRotationFromMatrix(t) {
           this.quaternion.setFromRotationMatrix(t)
       }
       setRotationFromQuaternion(t) {
           this.quaternion.copy(t)
       }
       rotateOnAxis(t, e) {
           return cs.setFromAxisAngle(t, e),
           this.quaternion.multiply(cs),
           this
       }
       rotateOnWorldAxis(t, e) {
           return cs.setFromAxisAngle(t, e),
           this.quaternion.premultiply(cs),
           this
       }
       rotateX(t) {
           return this.rotateOnAxis(ms, t)
       }
       rotateY(t) {
           return this.rotateOnAxis(gs, t)
       }
       rotateZ(t) {
           return this.rotateOnAxis(vs, t)
       }
       translateOnAxis(t, e) {
           return ls.copy(t).applyQuaternion(this.quaternion),
           this.position.add(ls.multiplyScalar(e)),
           this
       }
       translateX(t) {
           return this.translateOnAxis(ms, t)
       }
       translateY(t) {
           return this.translateOnAxis(gs, t)
       }
       translateZ(t) {
           return this.translateOnAxis(vs, t)
       }
       localToWorld(t) {
           return t.applyMatrix4(this.matrixWorld)
       }
       worldToLocal(t) {
           return t.applyMatrix4(us.copy(this.matrixWorld).invert())
       }
       lookAt(t, e, n) {
           t.isVector3 ? hs.copy(t) : hs.set(t, e, n);
           const i = this.parent;
           this.updateWorldMatrix(!0, !1),
           ds.setFromMatrixPosition(this.matrixWorld),
           this.isCamera || this.isLight ? us.lookAt(ds, hs, this.up) : us.lookAt(hs, ds, this.up),
           this.quaternion.setFromRotationMatrix(us),
           i && (us.extractRotation(i.matrixWorld),
           cs.setFromRotationMatrix(us),
           this.quaternion.premultiply(cs.invert()))
       }
       add(t) {
           if (arguments.length > 1) {
               for (let t = 0; t < arguments.length; t++)
                   this.add(arguments[t]);
               return this
           }
           return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t),
           this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t),
           t.parent = this,
           this.children.push(t),
           t.dispatchEvent(_s)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t),
           this)
       }
       remove(t) {
           if (arguments.length > 1) {
               for (let t = 0; t < arguments.length; t++)
                   this.remove(arguments[t]);
               return this
           }
           const e = this.children.indexOf(t);
           return -1 !== e && (t.parent = null,
           this.children.splice(e, 1),
           t.dispatchEvent(xs)),
           this
       }
       clear() {
           for (let t = 0; t < this.children.length; t++) {
               const e = this.children[t];
               e.parent = null,
               e.dispatchEvent(xs)
           }
           return this.children.length = 0,
           this
       }
       attach(t) {
           return this.updateWorldMatrix(!0, !1),
           us.copy(this.matrixWorld).invert(),
           null !== t.parent && (t.parent.updateWorldMatrix(!0, !1),
           us.multiply(t.parent.matrixWorld)),
           t.applyMatrix4(us),
           this.add(t),
           t.updateWorldMatrix(!1, !0),
           this
       }
       getObjectById(t) {
           return this.getObjectByProperty("id", t)
       }
       getObjectByName(t) {
           return this.getObjectByProperty("name", t)
       }
       getObjectByProperty(t, e) {
           if (this[t] === e)
               return this;
           for (let n = 0, i = this.children.length; n < i; n++) {
               const i = this.children[n].getObjectByProperty(t, e);
               if (void 0 !== i)
                   return i
           }
       }
       getWorldPosition(t) {
           return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"),
           t = new _o),
           this.updateWorldMatrix(!0, !1),
           t.setFromMatrixPosition(this.matrixWorld)
       }
       getWorldQuaternion(t) {
           return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),
           t = new vo),
           this.updateWorldMatrix(!0, !1),
           this.matrixWorld.decompose(ds, t, ps),
           t
       }
       getWorldScale(t) {
           return void 0 === t && (console.warn("THREE.Object3D: .getWorldScale() target is now required"),
           t = new _o),
           this.updateWorldMatrix(!0, !1),
           this.matrixWorld.decompose(ds, fs, t),
           t
       }
       getWorldDirection(t) {
           void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"),
           t = new _o),
           this.updateWorldMatrix(!0, !1);
           const e = this.matrixWorld.elements;
           return t.set(e[8], e[9], e[10]).normalize()
       }
       raycast() {}
       traverse(t) {
           t(this);
           const e = this.children;
           for (let n = 0, i = e.length; n < i; n++)
               e[n].traverse(t)
       }
       traverseVisible(t) {
           if (!1 === this.visible)
               return;
           t(this);
           const e = this.children;
           for (let n = 0, i = e.length; n < i; n++)
               e[n].traverseVisible(t)
       }
       traverseAncestors(t) {
           const e = this.parent;
           null !== e && (t(e),
           e.traverseAncestors(t))
       }
       updateMatrix() {
           this.matrix.compose(this.position, this.quaternion, this.scale),
           this.matrixWorldNeedsUpdate = !0
       }
       updateMatrixWorld(t) {
           this.matrixAutoUpdate && this.updateMatrix(),
           (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
           this.matrixWorldNeedsUpdate = !1,
           t = !0);
           const e = this.children;
           for (let n = 0, i = e.length; n < i; n++)
               e[n].updateMatrixWorld(t)
       }
       updateWorldMatrix(t, e) {
           const n = this.parent;
           if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
           this.matrixAutoUpdate && this.updateMatrix(),
           null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
           !0 === e) {
               const t = this.children;
               for (let e = 0, n = t.length; e < n; e++)
                   t[e].updateWorldMatrix(!1, !0)
           }
       }
       toJSON(t) {
           const e = void 0 === t || "string" == typeof t
             , n = {};
           e && (t = {
               geometries: {},
               materials: {},
               textures: {},
               images: {},
               shapes: {},
               skeletons: {},
               animations: {}
           },
           n.metadata = {
               version: 4.5,
               type: "Object",
               generator: "Object3D.toJSON"
           });
           const i = {};
           function r(e, n) {
               return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)),
               n.uuid
           }
           if (i.uuid = this.uuid,
           i.type = this.type,
           "" !== this.name && (i.name = this.name),
           !0 === this.castShadow && (i.castShadow = !0),
           !0 === this.receiveShadow && (i.receiveShadow = !0),
           !1 === this.visible && (i.visible = !1),
           !1 === this.frustumCulled && (i.frustumCulled = !1),
           0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
           "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData),
           i.layers = this.layers.mask,
           i.matrix = this.matrix.toArray(),
           !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
           this.isInstancedMesh && (i.type = "InstancedMesh",
           i.count = this.count,
           i.instanceMatrix = this.instanceMatrix.toJSON(),
           null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())),
           this.isMesh || this.isLine || this.isPoints) {
               i.geometry = r(t.geometries, this.geometry);
               const e = this.geometry.parameters;
               if (void 0 !== e && void 0 !== e.shapes) {
                   const n = e.shapes;
                   if (Array.isArray(n))
                       for (let e = 0, i = n.length; e < i; e++) {
                           const i = n[e];
                           r(t.shapes, i)
                       }
                   else
                       r(t.shapes, n)
               }
           }
           if (this.isSkinnedMesh && (i.bindMode = this.bindMode,
           i.bindMatrix = this.bindMatrix.toArray(),
           void 0 !== this.skeleton && (r(t.skeletons, this.skeleton),
           i.skeleton = this.skeleton.uuid)),
           void 0 !== this.material)
               if (Array.isArray(this.material)) {
                   const e = [];
                   for (let n = 0, i = this.material.length; n < i; n++)
                       e.push(r(t.materials, this.material[n]));
                   i.material = e
               } else
                   i.material = r(t.materials, this.material);
           if (this.children.length > 0) {
               i.children = [];
               for (let e = 0; e < this.children.length; e++)
                   i.children.push(this.children[e].toJSON(t).object)
           }
           if (this.animations.length > 0) {
               i.animations = [];
               for (let e = 0; e < this.animations.length; e++) {
                   const n = this.animations[e];
                   i.animations.push(r(t.animations, n))
               }
           }
           if (e) {
               const e = a(t.geometries)
                 , i = a(t.materials)
                 , r = a(t.textures)
                 , o = a(t.images)
                 , s = a(t.shapes)
                 , l = a(t.skeletons)
                 , c = a(t.animations);
               e.length > 0 && (n.geometries = e),
               i.length > 0 && (n.materials = i),
               r.length > 0 && (n.textures = r),
               o.length > 0 && (n.images = o),
               s.length > 0 && (n.shapes = s),
               l.length > 0 && (n.skeletons = l),
               c.length > 0 && (n.animations = c)
           }
           return n.object = i,
           n;
           function a(t) {
               const e = [];
               for (const n in t) {
                   const i = t[n];
                   delete i.metadata,
                   e.push(i)
               }
               return e
           }
       }
       clone(t) {
           return (new this.constructor).copy(this, t)
       }
       copy(t, e=!0) {
           if (this.name = t.name,
           this.up.copy(t.up),
           this.position.copy(t.position),
           this.rotation.order = t.rotation.order,
           this.quaternion.copy(t.quaternion),
           this.scale.copy(t.scale),
           this.matrix.copy(t.matrix),
           this.matrixWorld.copy(t.matrixWorld),
           this.matrixAutoUpdate = t.matrixAutoUpdate,
           this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate,
           this.layers.mask = t.layers.mask,
           this.visible = t.visible,
           this.castShadow = t.castShadow,
           this.receiveShadow = t.receiveShadow,
           this.frustumCulled = t.frustumCulled,
           this.renderOrder = t.renderOrder,
           this.userData = JSON.parse(JSON.stringify(t.userData)),
           !0 === e)
               for (let e = 0; e < t.children.length; e++) {
                   const n = t.children[e];
                   this.add(n.clone())
               }
           return this
       }
   }
   ys.DefaultUp = new _o(0,1,0),
   ys.DefaultMatrixAutoUpdate = !0,
   ys.prototype.isObject3D = !0;
   const ws = new _o
     , bs = new _o
     , Ms = new lo;
   class Ss {
       constructor(t=new _o(1,0,0), e=0) {
           this.normal = t,
           this.constant = e
       }
       set(t, e) {
           return this.normal.copy(t),
           this.constant = e,
           this
       }
       setComponents(t, e, n, i) {
           return this.normal.set(t, e, n),
           this.constant = i,
           this
       }
       setFromNormalAndCoplanarPoint(t, e) {
           return this.normal.copy(t),
           this.constant = -e.dot(this.normal),
           this
       }
       setFromCoplanarPoints(t, e, n) {
           const i = ws.subVectors(n, e).cross(bs.subVectors(t, e)).normalize();
           return this.setFromNormalAndCoplanarPoint(i, t),
           this
       }
       copy(t) {
           return this.normal.copy(t.normal),
           this.constant = t.constant,
           this
       }
       normalize() {
           const t = 1 / this.normal.length();
           return this.normal.multiplyScalar(t),
           this.constant *= t,
           this
       }
       negate() {
           return this.constant *= -1,
           this.normal.negate(),
           this
       }
       distanceToPoint(t) {
           return this.normal.dot(t) + this.constant
       }
       distanceToSphere(t) {
           return this.distanceToPoint(t.center) - t.radius
       }
       projectPoint(t, e) {
           return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"),
           e = new _o),
           e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
       }
       intersectLine(t, e) {
           void 0 === e && (console.warn("THREE.Plane: .intersectLine() target is now required"),
           e = new _o);
           const n = t.delta(ws)
             , i = this.normal.dot(n);
           if (0 === i)
               return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
           const r = -(t.start.dot(this.normal) + this.constant) / i;
           return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start)
       }
       intersectsLine(t) {
           const e = this.distanceToPoint(t.start)
             , n = this.distanceToPoint(t.end);
           return e < 0 && n > 0 || n < 0 && e > 0
       }
       intersectsBox(t) {
           return t.intersectsPlane(this)
       }
       intersectsSphere(t) {
           return t.intersectsPlane(this)
       }
       coplanarPoint(t) {
           return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"),
           t = new _o),
           t.copy(this.normal).multiplyScalar(-this.constant)
       }
       applyMatrix4(t, e) {
           const n = e || Ms.getNormalMatrix(t)
             , i = this.coplanarPoint(ws).applyMatrix4(t)
             , r = this.normal.applyMatrix3(n).normalize();
           return this.constant = -i.dot(r),
           this
       }
       translate(t) {
           return this.constant -= t.dot(this.normal),
           this
       }
       equals(t) {
           return t.normal.equals(this.normal) && t.constant === this.constant
       }
       clone() {
           return (new this.constructor).copy(this)
       }
   }
   Ss.prototype.isPlane = !0;
   const Ts = new _o
     , Es = new _o
     , Ls = new _o
     , As = new _o
     , Rs = new _o
     , Cs = new _o
     , Ps = new _o
     , Ds = new _o
     , Is = new _o
     , Os = new _o;
   class Ns {
       constructor(t=new _o, e=new _o, n=new _o) {
           this.a = t,
           this.b = e,
           this.c = n
       }
       static getNormal(t, e, n, i) {
           void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"),
           i = new _o),
           i.subVectors(n, e),
           Ts.subVectors(t, e),
           i.cross(Ts);
           const r = i.lengthSq();
           return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
       }
       static getBarycoord(t, e, n, i, r) {
           Ts.subVectors(i, e),
           Es.subVectors(n, e),
           Ls.subVectors(t, e);
           const a = Ts.dot(Ts)
             , o = Ts.dot(Es)
             , s = Ts.dot(Ls)
             , l = Es.dot(Es)
             , c = Es.dot(Ls)
             , u = a * l - o * o;
           if (void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"),
           r = new _o),
           0 === u)
               return r.set(-2, -1, -1);
           const h = 1 / u
             , d = (l * s - o * c) * h
             , p = (a * c - o * s) * h;
           return r.set(1 - d - p, p, d)
       }
       static containsPoint(t, e, n, i) {
           return this.getBarycoord(t, e, n, i, As),
           As.x >= 0 && As.y >= 0 && As.x + As.y <= 1
       }
       static getUV(t, e, n, i, r, a, o, s) {
           return this.getBarycoord(t, e, n, i, As),
           s.set(0, 0),
           s.addScaledVector(r, As.x),
           s.addScaledVector(a, As.y),
           s.addScaledVector(o, As.z),
           s
       }
       static isFrontFacing(t, e, n, i) {
           return Ts.subVectors(n, e),
           Es.subVectors(t, e),
           Ts.cross(Es).dot(i) < 0
       }
       set(t, e, n) {
           return this.a.copy(t),
           this.b.copy(e),
           this.c.copy(n),
           this
       }
       setFromPointsAndIndices(t, e, n, i) {
           return this.a.copy(t[e]),
           this.b.copy(t[n]),
           this.c.copy(t[i]),
           this
       }
       clone() {
           return (new this.constructor).copy(this)
       }
       copy(t) {
           return this.a.copy(t.a),
           this.b.copy(t.b),
           this.c.copy(t.c),
           this
       }
       getArea() {
           return Ts.subVectors(this.c, this.b),
           Es.subVectors(this.a, this.b),
           .5 * Ts.cross(Es).length()
       }
       getMidpoint(t) {
           return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"),
           t = new _o),
           t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
       }
       getNormal(t) {
           return Ns.getNormal(this.a, this.b, this.c, t)
       }
       getPlane(t) {
           return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"),
           t = new Ss),
           t.setFromCoplanarPoints(this.a, this.b, this.c)
       }
       getBarycoord(t, e) {
           return Ns.getBarycoord(t, this.a, this.b, this.c, e)
       }
       getUV(t, e, n, i, r) {
           return Ns.getUV(t, this.a, this.b, this.c, e, n, i, r)
       }
       containsPoint(t) {
           return Ns.containsPoint(t, this.a, this.b, this.c)
       }
       isFrontFacing(t) {
           return Ns.isFrontFacing(this.a, this.b, this.c, t)
       }
       intersectsBox(t) {
           return t.intersectsTriangle(this)
       }
       closestPointToPoint(t, e) {
           void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),
           e = new _o);
           const n = this.a
             , i = this.b
             , r = this.c;
           let a, o;
           Rs.subVectors(i, n),
           Cs.subVectors(r, n),
           Ds.subVectors(t, n);
           const s = Rs.dot(Ds)
             , l = Cs.dot(Ds);
           if (s <= 0 && l <= 0)
               return e.copy(n);
           Is.subVectors(t, i);
           const c = Rs.dot(Is)
             , u = Cs.dot(Is);
           if (c >= 0 && u <= c)
               return e.copy(i);
           const h = s * u - c * l;
           if (h <= 0 && s >= 0 && c <= 0)
               return a = s / (s - c),
               e.copy(n).addScaledVector(Rs, a);
           Os.subVectors(t, r);
           const d = Rs.dot(Os)
             , p = Cs.dot(Os);
           if (p >= 0 && d <= p)
               return e.copy(r);
           const f = d * l - s * p;
           if (f <= 0 && l >= 0 && p <= 0)
               return o = l / (l - p),
               e.copy(n).addScaledVector(Cs, o);
           const m = c * p - d * u;
           if (m <= 0 && u - c >= 0 && d - p >= 0)
               return Ps.subVectors(r, i),
               o = (u - c) / (u - c + (d - p)),
               e.copy(i).addScaledVector(Ps, o);
           const g = 1 / (m + f + h);
           return a = f * g,
           o = h * g,
           e.copy(n).addScaledVector(Rs, a).addScaledVector(Cs, o)
       }
       equals(t) {
           return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
       }
   }
   let zs = 0;
   function Fs() {
       Object.defineProperty(this, "id", {
           value: zs++
       }),
       this.uuid = no(),
       this.name = "",
       this.type = "Material",
       this.fog = !0,
       this.blending = 1,
       this.side = 0,
       this.vertexColors = !1,
       this.opacity = 1,
       this.transparent = !1,
       this.blendSrc = 204,
       this.blendDst = 205,
       this.blendEquation = Ca,
       this.blendSrcAlpha = null,
       this.blendDstAlpha = null,
       this.blendEquationAlpha = null,
       this.depthFunc = 3,
       this.depthTest = !0,
       this.depthWrite = !0,
       this.stencilWriteMask = 255,
       this.stencilFunc = 519,
       this.stencilRef = 0,
       this.stencilFuncMask = 255,
       this.stencilFail = Xa,
       this.stencilZFail = Xa,
       this.stencilZPass = Xa,
       this.stencilWrite = !1,
       this.clippingPlanes = null,
       this.clipIntersection = !1,
       this.clipShadows = !1,
       this.shadowSide = null,
       this.colorWrite = !0,
       this.precision = null,
       this.polygonOffset = !1,
       this.polygonOffsetFactor = 0,
       this.polygonOffsetUnits = 0,
       this.dithering = !1,
       this.alphaTest = 0,
       this.alphaToCoverage = !1,
       this.premultipliedAlpha = !1,
       this.visible = !0,
       this.toneMapped = !0,
       this.userData = {},
       this.version = 0
   }
   Fs.prototype = Object.assign(Object.create(Ka.prototype), {
       constructor: Fs,
       isMaterial: !0,
       onBuild: function() {},
       onBeforeCompile: function() {},
       customProgramCacheKey: function() {
           return this.onBeforeCompile.toString()
       },
       setValues: function(t) {
           if (void 0 !== t)
               for (const e in t) {
                   const n = t[e];
                   if (void 0 === n) {
                       console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                       continue
                   }
                   if ("shading" === e) {
                       console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
                       this.flatShading = 1 === n;
                       continue
                   }
                   const i = this[e];
                   void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
               }
       },
       toJSON: function(t) {
           const e = void 0 === t || "string" == typeof t;
           e && (t = {
               textures: {},
               images: {}
           });
           const n = {
               metadata: {
                   version: 4.5,
                   type: "Material",
                   generator: "Material.toJSON"
               }
           };
           function i(t) {
               const e = [];
               for (const n in t) {
                   const i = t[n];
                   delete i.metadata,
                   e.push(i)
               }
               return e
           }
           if (n.uuid = this.uuid,
           n.type = this.type,
           "" !== this.name && (n.name = this.name),
           this.color && this.color.isColor && (n.color = this.color.getHex()),
           void 0 !== this.roughness && (n.roughness = this.roughness),
           void 0 !== this.metalness && (n.metalness = this.metalness),
           this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()),
           this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
           this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity),
           this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
           void 0 !== this.shininess && (n.shininess = this.shininess),
           void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
           void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness),
           this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
           this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
           this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid,
           n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
           this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
           this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid),
           this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid),
           this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid,
           n.lightMapIntensity = this.lightMapIntensity),
           this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid,
           n.aoMapIntensity = this.aoMapIntensity),
           this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid,
           n.bumpScale = this.bumpScale),
           this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid,
           n.normalMapType = this.normalMapType,
           n.normalScale = this.normalScale.toArray()),
           this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid,
           n.displacementScale = this.displacementScale,
           n.displacementBias = this.displacementBias),
           this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
           this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
           this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
           this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid),
           this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid,
           void 0 !== this.combine && (n.combine = this.combine)),
           void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity),
           void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
           void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio),
           this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid),
           void 0 !== this.size && (n.size = this.size),
           null !== this.shadowSide && (n.shadowSide = this.shadowSide),
           void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation),
           1 !== this.blending && (n.blending = this.blending),
           0 !== this.side && (n.side = this.side),
           this.vertexColors && (n.vertexColors = !0),
           this.opacity < 1 && (n.opacity = this.opacity),
           !0 === this.transparent && (n.transparent = this.transparent),
           n.depthFunc = this.depthFunc,
           n.depthTest = this.depthTest,
           n.depthWrite = this.depthWrite,
           n.colorWrite = this.colorWrite,
           n.stencilWrite = this.stencilWrite,
           n.stencilWriteMask = this.stencilWriteMask,
           n.stencilFunc = this.stencilFunc,
           n.stencilRef = this.stencilRef,
           n.stencilFuncMask = this.stencilFuncMask,
           n.stencilFail = this.stencilFail,
           n.stencilZFail = this.stencilZFail,
           n.stencilZPass = this.stencilZPass,
           this.rotation && 0 !== this.rotation && (n.rotation = this.rotation),
           !0 === this.polygonOffset && (n.polygonOffset = !0),
           0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor),
           0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits),
           this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth),
           void 0 !== this.dashSize && (n.dashSize = this.dashSize),
           void 0 !== this.gapSize && (n.gapSize = this.gapSize),
           void 0 !== this.scale && (n.scale = this.scale),
           !0 === this.dithering && (n.dithering = !0),
           this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
           !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage),
           !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha),
           !0 === this.wireframe && (n.wireframe = this.wireframe),
           this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
           "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap),
           "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin),
           !0 === this.morphTargets && (n.morphTargets = !0),
           !0 === this.morphNormals && (n.morphNormals = !0),
           !0 === this.skinning && (n.skinning = !0),
           !0 === this.flatShading && (n.flatShading = this.flatShading),
           !1 === this.visible && (n.visible = !1),
           !1 === this.toneMapped && (n.toneMapped = !1),
           "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
           e) {
               const e = i(t.textures)
                 , r = i(t.images);
               e.length > 0 && (n.textures = e),
               r.length > 0 && (n.images = r)
           }
           return n
       },
       clone: function() {
           return (new this.constructor).copy(this)
       },
       copy: function(t) {
           this.name = t.name,
           this.fog = t.fog,
           this.blending = t.blending,
           this.side = t.side,
           this.vertexColors = t.vertexColors,
           this.opacity = t.opacity,
           this.transparent = t.transparent,
           this.blendSrc = t.blendSrc,
           this.blendDst = t.blendDst,
           this.blendEquation = t.blendEquation,
           this.blendSrcAlpha = t.blendSrcAlpha,
           this.blendDstAlpha = t.blendDstAlpha,
           this.blendEquationAlpha = t.blendEquationAlpha,
           this.depthFunc = t.depthFunc,
           this.depthTest = t.depthTest,
           this.depthWrite = t.depthWrite,
           this.stencilWriteMask = t.stencilWriteMask,
           this.stencilFunc = t.stencilFunc,
           this.stencilRef = t.stencilRef,
           this.stencilFuncMask = t.stencilFuncMask,
           this.stencilFail = t.stencilFail,
           this.stencilZFail = t.stencilZFail,
           this.stencilZPass = t.stencilZPass,
           this.stencilWrite = t.stencilWrite;
           const e = t.clippingPlanes;
           let n = null;
           if (null !== e) {
               const t = e.length;
               n = new Array(t);
               for (let i = 0; i !== t; ++i)
                   n[i] = e[i].clone()
           }
           return this.clippingPlanes = n,
           this.clipIntersection = t.clipIntersection,
           this.clipShadows = t.clipShadows,
           this.shadowSide = t.shadowSide,
           this.colorWrite = t.colorWrite,
           this.precision = t.precision,
           this.polygonOffset = t.polygonOffset,
           this.polygonOffsetFactor = t.polygonOffsetFactor,
           this.polygonOffsetUnits = t.polygonOffsetUnits,
           this.dithering = t.dithering,
           this.alphaTest = t.alphaTest,
           this.alphaToCoverage = t.alphaToCoverage,
           this.premultipliedAlpha = t.premultipliedAlpha,
           this.visible = t.visible,
           this.toneMapped = t.toneMapped,
           this.userData = JSON.parse(JSON.stringify(t.userData)),
           this
       },
       dispose: function() {
           this.dispatchEvent({
               type: "dispose"
           })
       }
   }),
   Object.defineProperty(Fs.prototype, "needsUpdate", {
       set: function(t) {
           !0 === t && this.version++
       }
   });
   const Hs = {
       aliceblue: 15792383,
       antiquewhite: 16444375,
       aqua: 65535,
       aquamarine: 8388564,
       azure: 15794175,
       beige: 16119260,
       bisque: 16770244,
       black: 0,
       blanchedalmond: 16772045,
       blue: 255,
       blueviolet: 9055202,
       brown: 10824234,
       burlywood: 14596231,
       cadetblue: 6266528,
       chartreuse: 8388352,
       chocolate: 13789470,
       coral: 16744272,
       cornflowerblue: 6591981,
       cornsilk: 16775388,
       crimson: 14423100,
       cyan: 65535,
       darkblue: 139,
       darkcyan: 35723,
       darkgoldenrod: 12092939,
       darkgray: 11119017,
       darkgreen: 25600,
       darkgrey: 11119017,
       darkkhaki: 12433259,
       darkmagenta: 9109643,
       darkolivegreen: 5597999,
       darkorange: 16747520,
       darkorchid: 10040012,
       darkred: 9109504,
       darksalmon: 15308410,
       darkseagreen: 9419919,
       darkslateblue: 4734347,
       darkslategray: 3100495,
       darkslategrey: 3100495,
       darkturquoise: 52945,
       darkviolet: 9699539,
       deeppink: 16716947,
       deepskyblue: 49151,
       dimgray: 6908265,
       dimgrey: 6908265,
       dodgerblue: 2003199,
       firebrick: 11674146,
       floralwhite: 16775920,
       forestgreen: 2263842,
       fuchsia: 16711935,
       gainsboro: 14474460,
       ghostwhite: 16316671,
       gold: 16766720,
       goldenrod: 14329120,
       gray: 8421504,
       green: 32768,
       greenyellow: 11403055,
       grey: 8421504,
       honeydew: 15794160,
       hotpink: 16738740,
       indianred: 13458524,
       indigo: 4915330,
       ivory: 16777200,
       khaki: 15787660,
       lavender: 15132410,
       lavenderblush: 16773365,
       lawngreen: 8190976,
       lemonchiffon: 16775885,
       lightblue: 11393254,
       lightcoral: 15761536,
       lightcyan: 14745599,
       lightgoldenrodyellow: 16448210,
       lightgray: 13882323,
       lightgreen: 9498256,
       lightgrey: 13882323,
       lightpink: 16758465,
       lightsalmon: 16752762,
       lightseagreen: 2142890,
       lightskyblue: 8900346,
       lightslategray: 7833753,
       lightslategrey: 7833753,
       lightsteelblue: 11584734,
       lightyellow: 16777184,
       lime: 65280,
       limegreen: 3329330,
       linen: 16445670,
       magenta: 16711935,
       maroon: 8388608,
       mediumaquamarine: 6737322,
       mediumblue: 205,
       mediumorchid: 12211667,
       mediumpurple: 9662683,
       mediumseagreen: 3978097,
       mediumslateblue: 8087790,
       mediumspringgreen: 64154,
       mediumturquoise: 4772300,
       mediumvioletred: 13047173,
       midnightblue: 1644912,
       mintcream: 16121850,
       mistyrose: 16770273,
       moccasin: 16770229,
       navajowhite: 16768685,
       navy: 128,
       oldlace: 16643558,
       olive: 8421376,
       olivedrab: 7048739,
       orange: 16753920,
       orangered: 16729344,
       orchid: 14315734,
       palegoldenrod: 15657130,
       palegreen: 10025880,
       paleturquoise: 11529966,
       palevioletred: 14381203,
       papayawhip: 16773077,
       peachpuff: 16767673,
       peru: 13468991,
       pink: 16761035,
       plum: 14524637,
       powderblue: 11591910,
       purple: 8388736,
       rebeccapurple: 6697881,
       red: 16711680,
       rosybrown: 12357519,
       royalblue: 4286945,
       saddlebrown: 9127187,
       salmon: 16416882,
       sandybrown: 16032864,
       seagreen: 3050327,
       seashell: 16774638,
       sienna: 10506797,
       silver: 12632256,
       skyblue: 8900331,
       slateblue: 6970061,
       slategray: 7372944,
       slategrey: 7372944,
       snow: 16775930,
       springgreen: 65407,
       steelblue: 4620980,
       tan: 13808780,
       teal: 32896,
       thistle: 14204888,
       tomato: 16737095,
       turquoise: 4251856,
       violet: 15631086,
       wheat: 16113331,
       white: 16777215,
       whitesmoke: 16119285,
       yellow: 16776960,
       yellowgreen: 10145074
   }
     , Bs = {
       h: 0,
       s: 0,
       l: 0
   }
     , ks = {
       h: 0,
       s: 0,
       l: 0
   };
   function Us(t, e, n) {
       return n < 0 && (n += 1),
       n > 1 && (n -= 1),
       n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
   }
   function Gs(t) {
       return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
   }
   function Ws(t) {
       return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
   }
   class Vs {
       constructor(t, e, n) {
           return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
       }
       set(t) {
           return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t),
           this
       }
       setScalar(t) {
           return this.r = t,
           this.g = t,
           this.b = t,
           this
       }
       setHex(t) {
           return t = Math.floor(t),
           this.r = (t >> 16 & 255) / 255,
           this.g = (t >> 8 & 255) / 255,
           this.b = (255 & t) / 255,
           this
       }
       setRGB(t, e, n) {
           return this.r = t,
           this.g = e,
           this.b = n,
           this
       }
       setHSL(t, e, n) {
           if (t = function(t, e) {
               return (t % e + e) % e
           }(t, 1),
           e = io(e, 0, 1),
           n = io(n, 0, 1),
           0 === e)
               this.r = this.g = this.b = n;
           else {
               const i = n <= .5 ? n * (1 + e) : n + e - n * e
                 , r = 2 * n - i;
               this.r = Us(r, i, t + 1 / 3),
               this.g = Us(r, i, t),
               this.b = Us(r, i, t - 1 / 3)
           }
           return this
       }
       setStyle(t) {
           function e(e) {
               void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
           }
           let n;
           if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
               let t;
               const i = n[1]
                 , r = n[2];
               switch (i) {
               case "rgb":
               case "rgba":
                   if (t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))
                       return this.r = Math.min(255, parseInt(t[1], 10)) / 255,
                       this.g = Math.min(255, parseInt(t[2], 10)) / 255,
                       this.b = Math.min(255, parseInt(t[3], 10)) / 255,
                       e(t[4]),
                       this;
                   if (t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))
                       return this.r = Math.min(100, parseInt(t[1], 10)) / 100,
                       this.g = Math.min(100, parseInt(t[2], 10)) / 100,
                       this.b = Math.min(100, parseInt(t[3], 10)) / 100,
                       e(t[4]),
                       this;
                   break;
               case "hsl":
               case "hsla":
                   if (t = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) {
                       const n = parseFloat(t[1]) / 360
                         , i = parseInt(t[2], 10) / 100
                         , r = parseInt(t[3], 10) / 100;
                       return e(t[4]),
                       this.setHSL(n, i, r)
                   }
               }
           } else if (n = /^\#([A-Fa-f\d]+)$/.exec(t)) {
               const t = n[1]
                 , e = t.length;
               if (3 === e)
                   return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255,
                   this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255,
                   this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255,
                   this;
               if (6 === e)
                   return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255,
                   this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255,
                   this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255,
                   this
           }
           return t && t.length > 0 ? this.setColorName(t) : this
       }
       setColorName(t) {
           const e = Hs[t.toLowerCase()];
           return void 0 !== e ? this.setHex(e) : console.warn("THREE.Color: Unknown color " + t),
           this
       }
       clone() {
           return new this.constructor(this.r,this.g,this.b)
       }
       copy(t) {
           return this.r = t.r,
           this.g = t.g,
           this.b = t.b,
           this
       }
       copyGammaToLinear(t, e=2) {
           return this.r = Math.pow(t.r, e),
           this.g = Math.pow(t.g, e),
           this.b = Math.pow(t.b, e),
           this
       }
       copyLinearToGamma(t, e=2) {
           const n = e > 0 ? 1 / e : 1;
           return this.r = Math.pow(t.r, n),
           this.g = Math.pow(t.g, n),
           this.b = Math.pow(t.b, n),
           this
       }
       convertGammaToLinear(t) {
           return this.copyGammaToLinear(this, t),
           this
       }
       convertLinearToGamma(t) {
           return this.copyLinearToGamma(this, t),
           this
       }
       copySRGBToLinear(t) {
           return this.r = Gs(t.r),
           this.g = Gs(t.g),
           this.b = Gs(t.b),
           this
       }
       copyLinearToSRGB(t) {
           return this.r = Ws(t.r),
           this.g = Ws(t.g),
           this.b = Ws(t.b),
           this
       }
       convertSRGBToLinear() {
           return this.copySRGBToLinear(this),
           this
       }
       convertLinearToSRGB() {
           return this.copyLinearToSRGB(this),
           this
       }
       getHex() {
           return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
       }
       getHexString() {
           return ("000000" + this.getHex().toString(16)).slice(-6)
       }
       getHSL(t) {
           void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"),
           t = {
               h: 0,
               s: 0,
               l: 0
           });
           const e = this.r
             , n = this.g
             , i = this.b
             , r = Math.max(e, n, i)
             , a = Math.min(e, n, i);
           let o, s;
           const l = (a + r) / 2;
           if (a === r)
               o = 0,
               s = 0;
           else {
               const t = r - a;
               switch (s = l <= .5 ? t / (r + a) : t / (2 - r - a),
               r) {
               case e:
                   o = (n - i) / t + (n < i ? 6 : 0);
                   break;
               case n:
                   o = (i - e) / t + 2;
                   break;
               case i:
                   o = (e - n) / t + 4
               }
               o /= 6
           }
           return t.h = o,
           t.s = s,
           t.l = l,
           t
       }
       getStyle() {
           return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
       }
       offsetHSL(t, e, n) {
           return this.getHSL(Bs),
           Bs.h += t,
           Bs.s += e,
           Bs.l += n,
           this.setHSL(Bs.h, Bs.s, Bs.l),
           this
       }
       add(t) {
           return this.r += t.r,
           this.g += t.g,
           this.b += t.b,
           this
       }
       addColors(t, e) {
           return this.r = t.r + e.r,
           this.g = t.g + e.g,
           this.b = t.b + e.b,
           this
       }
       addScalar(t) {
           return this.r += t,
           this.g += t,
           this.b += t,
           this
       }
       sub(t) {
           return this.r = Math.max(0, this.r - t.r),
           this.g = Math.max(0, this.g - t.g),
           this.b = Math.max(0, this.b - t.b),
           this
       }
       multiply(t) {
           return this.r *= t.r,
           this.g *= t.g,
           this.b *= t.b,
           this
       }
       multiplyScalar(t) {
           return this.r *= t,
           this.g *= t,
           this.b *= t,
           this
       }
       lerp(t, e) {
           return this.r += (t.r - this.r) * e,
           this.g += (t.g - this.g) * e,
           this.b += (t.b - this.b) * e,
           this
       }
       lerpColors(t, e, n) {
           return this.r = t.r + (e.r - t.r) * n,
           this.g = t.g + (e.g - t.g) * n,
           this.b = t.b + (e.b - t.b) * n,
           this
       }
       lerpHSL(t, e) {
           this.getHSL(Bs),
           t.getHSL(ks);
           const n = ro(Bs.h, ks.h, e)
             , i = ro(Bs.s, ks.s, e)
             , r = ro(Bs.l, ks.l, e);
           return this.setHSL(n, i, r),
           this
       }
       equals(t) {
           return t.r === this.r && t.g === this.g && t.b === this.b
       }
       fromArray(t, e=0) {
           return this.r = t[e],
           this.g = t[e + 1],
           this.b = t[e + 2],
           this
       }
       toArray(t=[], e=0) {
           return t[e] = this.r,
           t[e + 1] = this.g,
           t[e + 2] = this.b,
           t
       }
       fromBufferAttribute(t, e) {
           return this.r = t.getX(e),
           this.g = t.getY(e),
           this.b = t.getZ(e),
           !0 === t.normalized && (this.r /= 255,
           this.g /= 255,
           this.b /= 255),
           this
       }
       toJSON() {
           return this.getHex()
       }
   }
   Vs.NAMES = Hs,
   Vs.prototype.isColor = !0,
   Vs.prototype.r = 1,
   Vs.prototype.g = 1,
   Vs.prototype.b = 1;
   class qs extends Fs {
       constructor(t) {
           super(),
           this.type = "MeshBasicMaterial",
           this.color = new Vs(16777215),
           this.map = null,
           this.lightMap = null,
           this.lightMapIntensity = 1,
           this.aoMap = null,
           this.aoMapIntensity = 1,
           this.specularMap = null,
           this.alphaMap = null,
           this.envMap = null,
           this.combine = 0,
           this.reflectivity = 1,
           this.refractionRatio = .98,
           this.wireframe = !1,
           this.wireframeLinewidth = 1,
           this.wireframeLinecap = "round",
           this.wireframeLinejoin = "round",
           this.skinning = !1,
           this.morphTargets = !1,
           this.setValues(t)
       }
       copy(t) {
           return super.copy(t),
           this.color.copy(t.color),
           this.map = t.map,
           this.lightMap = t.lightMap,
           this.lightMapIntensity = t.lightMapIntensity,
           this.aoMap = t.aoMap,
           this.aoMapIntensity = t.aoMapIntensity,
           this.specularMap = t.specularMap,
           this.alphaMap = t.alphaMap,
           this.envMap = t.envMap,
           this.combine = t.combine,
           this.reflectivity = t.reflectivity,
           this.refractionRatio = t.refractionRatio,
           this.wireframe = t.wireframe,
           this.wireframeLinewidth = t.wireframeLinewidth,
           this.wireframeLinecap = t.wireframeLinecap,
           this.wireframeLinejoin = t.wireframeLinejoin,
           this.skinning = t.skinning,
           this.morphTargets = t.morphTargets,
           this
       }
   }
   qs.prototype.isMeshBasicMaterial = !0;
   const js = new _o
     , Ys = new so;
   class Xs {
       constructor(t, e, n) {
           if (Array.isArray(t))
               throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
           this.name = "",
           this.array = t,
           this.itemSize = e,
           this.count = void 0 !== t ? t.length / e : 0,
           this.normalized = !0 === n,
           this.usage = Za,
           this.updateRange = {
               offset: 0,
               count: -1
           },
           this.version = 0,
           this.onUploadCallback = function() {}
       }
       set needsUpdate(t) {
           !0 === t && this.version++
       }
       setUsage(t) {
           return this.usage = t,
           this
       }
       copy(t) {
           return this.name = t.name,
           this.array = new t.array.constructor(t.array),
           this.itemSize = t.itemSize,
           this.count = t.count,
           this.normalized = t.normalized,
           this.usage = t.usage,
           this
       }
       copyAt(t, e, n) {
           t *= this.itemSize,
           n *= e.itemSize;
           for (let i = 0, r = this.itemSize; i < r; i++)
               this.array[t + i] = e.array[n + i];
           return this
       }
       copyArray(t) {
           return this.array.set(t),
           this
       }
       copyColorsArray(t) {
           const e = this.array;
           let n = 0;
           for (let i = 0, r = t.length; i < r; i++) {
               let r = t[i];
               void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i),
               r = new Vs),
               e[n++] = r.r,
               e[n++] = r.g,
               e[n++] = r.b
           }
           return this
       }
       copyVector2sArray(t) {
           const e = this.array;
           let n = 0;
           for (let i = 0, r = t.length; i < r; i++) {
               let r = t[i];
               void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i),
               r = new so),
               e[n++] = r.x,
               e[n++] = r.y
           }
           return this
       }
       copyVector3sArray(t) {
           const e = this.array;
           let n = 0;
           for (let i = 0, r = t.length; i < r; i++) {
               let r = t[i];
               void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i),
               r = new _o),
               e[n++] = r.x,
               e[n++] = r.y,
               e[n++] = r.z
           }
           return this
       }
       copyVector4sArray(t) {
           const e = this.array;
           let n = 0;
           for (let i = 0, r = t.length; i < r; i++) {
               let r = t[i];
               void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i),
               r = new mo),
               e[n++] = r.x,
               e[n++] = r.y,
               e[n++] = r.z,
               e[n++] = r.w
           }
           return this
       }
       applyMatrix3(t) {
           if (2 === this.itemSize)
               for (let e = 0, n = this.count; e < n; e++)
                   Ys.fromBufferAttribute(this, e),
                   Ys.applyMatrix3(t),
                   this.setXY(e, Ys.x, Ys.y);
           else if (3 === this.itemSize)
               for (let e = 0, n = this.count; e < n; e++)
                   js.fromBufferAttribute(this, e),
                   js.applyMatrix3(t),
                   this.setXYZ(e, js.x, js.y, js.z);
           return this
       }
       applyMatrix4(t) {
           for (let e = 0, n = this.count; e < n; e++)
               js.x = this.getX(e),
               js.y = this.getY(e),
               js.z = this.getZ(e),
               js.applyMatrix4(t),
               this.setXYZ(e, js.x, js.y, js.z);
           return this
       }
       applyNormalMatrix(t) {
           for (let e = 0, n = this.count; e < n; e++)
               js.x = this.getX(e),
               js.y = this.getY(e),
               js.z = this.getZ(e),
               js.applyNormalMatrix(t),
               this.setXYZ(e, js.x, js.y, js.z);
           return this
       }
       transformDirection(t) {
           for (let e = 0, n = this.count; e < n; e++)
               js.x = this.getX(e),
               js.y = this.getY(e),
               js.z = this.getZ(e),
               js.transformDirection(t),
               this.setXYZ(e, js.x, js.y, js.z);
           return this
       }
       set(t, e=0) {
           return this.array.set(t, e),
           this
       }
       getX(t) {
           return this.array[t * this.itemSize]
       }
       setX(t, e) {
           return this.array[t * this.itemSize] = e,
           this
       }
       getY(t) {
           return this.array[t * this.itemSize + 1]
       }
       setY(t, e) {
           return this.array[t * this.itemSize + 1] = e,
           this
       }
       getZ(t) {
           return this.array[t * this.itemSize + 2]
       }
       setZ(t, e) {
           return this.array[t * this.itemSize + 2] = e,
           this
       }
       getW(t) {
           return this.array[t * this.itemSize + 3]
       }
       setW(t, e) {
           return this.array[t * this.itemSize + 3] = e,
           this
       }
       setXY(t, e, n) {
           return t *= this.itemSize,
           this.array[t + 0] = e,
           this.array[t + 1] = n,
           this
       }
       setXYZ(t, e, n, i) {
           return t *= this.itemSize,
           this.array[t + 0] = e,
           this.array[t + 1] = n,
           this.array[t + 2] = i,
           this
       }
       setXYZW(t, e, n, i, r) {
           return t *= this.itemSize,
           this.array[t + 0] = e,
           this.array[t + 1] = n,
           this.array[t + 2] = i,
           this.array[t + 3] = r,
           this
       }
       onUpload(t) {
           return this.onUploadCallback = t,
           this
       }
       clone() {
           return new this.constructor(this.array,this.itemSize).copy(this)
       }
       toJSON() {
           const t = {
               itemSize: this.itemSize,
               type: this.array.constructor.name,
               array: Array.prototype.slice.call(this.array),
               normalized: this.normalized
           };
           return "" !== this.name && (t.name = this.name),
           this.usage !== Za && (t.usage = this.usage),
           0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange),
           t
       }
   }
   Xs.prototype.isBufferAttribute = !0;
   class Zs extends Xs {
       constructor(t, e, n) {
           super(new Uint16Array(t), e, n)
       }
   }
   class Js extends Xs {
       constructor(t, e, n) {
           super(new Uint32Array(t), e, n)
       }
   }
   class Qs extends Xs {
       constructor(t, e, n) {
           super(new Float32Array(t), e, n)
       }
   }
   function Ks(t) {
       if (0 === t.length)
           return -1 / 0;
       let e = t[0];
       for (let n = 1, i = t.length; n < i; ++n)
           t[n] > e && (e = t[n]);
       return e
   }
   let $s = 0;
   const tl = new Zo
     , el = new ys
     , nl = new _o
     , il = new wo
     , rl = new wo
     , al = new _o;
   class ol extends Ka {
       constructor() {
           super(),
           Object.defineProperty(this, "id", {
               value: $s++
           }),
           this.uuid = no(),
           this.name = "",
           this.type = "BufferGeometry",
           this.index = null,
           this.attributes = {},
           this.morphAttributes = {},
           this.morphTargetsRelative = !1,
           this.groups = [],
           this.boundingBox = null,
           this.boundingSphere = null,
           this.drawRange = {
               start: 0,
               count: 1 / 0
           },
           this.userData = {}
       }
       getIndex() {
           return this.index
       }
       setIndex(t) {
           return Array.isArray(t) ? this.index = new (Ks(t) > 65535 ? Js : Zs)(t,1) : this.index = t,
           this
       }
       getAttribute(t) {
           return this.attributes[t]
       }
       setAttribute(t, e) {
           return this.attributes[t] = e,
           this
       }
       deleteAttribute(t) {
           return delete this.attributes[t],
           this
       }
       hasAttribute(t) {
           return void 0 !== this.attributes[t]
       }
       addGroup(t, e, n=0) {
           this.groups.push({
               start: t,
               count: e,
               materialIndex: n
           })
       }
       clearGroups() {
           this.groups = []
       }
       setDrawRange(t, e) {
           this.drawRange.start = t,
           this.drawRange.count = e
       }
       applyMatrix4(t) {
           const e = this.attributes.position;
           void 0 !== e && (e.applyMatrix4(t),
           e.needsUpdate = !0);
           const n = this.attributes.normal;
           if (void 0 !== n) {
               const e = (new lo).getNormalMatrix(t);
               n.applyNormalMatrix(e),
               n.needsUpdate = !0
           }
           const i = this.attributes.tangent;
           return void 0 !== i && (i.transformDirection(t),
           i.needsUpdate = !0),
           null !== this.boundingBox && this.computeBoundingBox(),
           null !== this.boundingSphere && this.computeBoundingSphere(),
           this
       }
       rotateX(t) {
           return tl.makeRotationX(t),
           this.applyMatrix4(tl),
           this
       }
       rotateY(t) {
           return tl.makeRotationY(t),
           this.applyMatrix4(tl),
           this
       }
       rotateZ(t) {
           return tl.makeRotationZ(t),
           this.applyMatrix4(tl),
           this
       }
       translate(t, e, n) {
           return tl.makeTranslation(t, e, n),
           this.applyMatrix4(tl),
           this
       }
       scale(t, e, n) {
           return tl.makeScale(t, e, n),
           this.applyMatrix4(tl),
           this
       }
       lookAt(t) {
           return el.lookAt(t),
           el.updateMatrix(),
           this.applyMatrix4(el.matrix),
           this
       }
       center() {
           return this.computeBoundingBox(),
           this.boundingBox.getCenter(nl).negate(),
           this.translate(nl.x, nl.y, nl.z),
           this
       }
       setFromPoints(t) {
           const e = [];
           for (let n = 0, i = t.length; n < i; n++) {
               const i = t[n];
               e.push(i.x, i.y, i.z || 0)
           }
           return this.setAttribute("position", new Qs(e,3)),
           this
       }
       computeBoundingBox() {
           null === this.boundingBox && (this.boundingBox = new wo);
           const t = this.attributes.position
             , e = this.morphAttributes.position;
           if (t && t.isGLBufferAttribute)
               return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this),
               void this.boundingBox.set(new _o(-1 / 0,-1 / 0,-1 / 0), new _o(1 / 0,1 / 0,1 / 0));
           if (void 0 !== t) {
               if (this.boundingBox.setFromBufferAttribute(t),
               e)
                   for (let t = 0, n = e.length; t < n; t++) {
                       const n = e[t];
                       il.setFromBufferAttribute(n),
                       this.morphTargetsRelative ? (al.addVectors(this.boundingBox.min, il.min),
                       this.boundingBox.expandByPoint(al),
                       al.addVectors(this.boundingBox.max, il.max),
                       this.boundingBox.expandByPoint(al)) : (this.boundingBox.expandByPoint(il.min),
                       this.boundingBox.expandByPoint(il.max))
                   }
           } else
               this.boundingBox.makeEmpty();
           (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
       }
       computeBoundingSphere() {
           null === this.boundingSphere && (this.boundingSphere = new ko);
           const t = this.attributes.position
             , e = this.morphAttributes.position;
           if (t && t.isGLBufferAttribute)
               return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this),
               void this.boundingSphere.set(new _o, 1 / 0);
           if (t) {
               const n = this.boundingSphere.center;
               if (il.setFromBufferAttribute(t),
               e)
                   for (let t = 0, n = e.length; t < n; t++) {
                       const n = e[t];
                       rl.setFromBufferAttribute(n),
                       this.morphTargetsRelative ? (al.addVectors(il.min, rl.min),
                       il.expandByPoint(al),
                       al.addVectors(il.max, rl.max),
                       il.expandByPoint(al)) : (il.expandByPoint(rl.min),
                       il.expandByPoint(rl.max))
                   }
               il.getCenter(n);
               let i = 0;
               for (let e = 0, r = t.count; e < r; e++)
                   al.fromBufferAttribute(t, e),
                   i = Math.max(i, n.distanceToSquared(al));
               if (e)
                   for (let r = 0, a = e.length; r < a; r++) {
                       const a = e[r]
                         , o = this.morphTargetsRelative;
                       for (let e = 0, r = a.count; e < r; e++)
                           al.fromBufferAttribute(a, e),
                           o && (nl.fromBufferAttribute(t, e),
                           al.add(nl)),
                           i = Math.max(i, n.distanceToSquared(al))
                   }
               this.boundingSphere.radius = Math.sqrt(i),
               isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
           }
       }
       computeFaceNormals() {}
       computeTangents() {
           const t = this.index
             , e = this.attributes;
           if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv)
               return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
           const n = t.array
             , i = e.position.array
             , r = e.normal.array
             , a = e.uv.array
             , o = i.length / 3;
           void 0 === e.tangent && this.setAttribute("tangent", new Xs(new Float32Array(4 * o),4));
           const s = e.tangent.array
             , l = []
             , c = [];
           for (let t = 0; t < o; t++)
               l[t] = new _o,
               c[t] = new _o;
           const u = new _o
             , h = new _o
             , d = new _o
             , p = new so
             , f = new so
             , m = new so
             , g = new _o
             , v = new _o;
           function _(t, e, n) {
               u.fromArray(i, 3 * t),
               h.fromArray(i, 3 * e),
               d.fromArray(i, 3 * n),
               p.fromArray(a, 2 * t),
               f.fromArray(a, 2 * e),
               m.fromArray(a, 2 * n),
               h.sub(u),
               d.sub(u),
               f.sub(p),
               m.sub(p);
               const r = 1 / (f.x * m.y - m.x * f.y);
               isFinite(r) && (g.copy(h).multiplyScalar(m.y).addScaledVector(d, -f.y).multiplyScalar(r),
               v.copy(d).multiplyScalar(f.x).addScaledVector(h, -m.x).multiplyScalar(r),
               l[t].add(g),
               l[e].add(g),
               l[n].add(g),
               c[t].add(v),
               c[e].add(v),
               c[n].add(v))
           }
           let x = this.groups;
           0 === x.length && (x = [{
               start: 0,
               count: n.length
           }]);
           for (let t = 0, e = x.length; t < e; ++t) {
               const e = x[t]
                 , i = e.start;
               for (let t = i, r = i + e.count; t < r; t += 3)
                   _(n[t + 0], n[t + 1], n[t + 2])
           }
           const y = new _o
             , w = new _o
             , b = new _o
             , M = new _o;
           function S(t) {
               b.fromArray(r, 3 * t),
               M.copy(b);
               const e = l[t];
               y.copy(e),
               y.sub(b.multiplyScalar(b.dot(e))).normalize(),
               w.crossVectors(M, e);
               const n = w.dot(c[t]) < 0 ? -1 : 1;
               s[4 * t] = y.x,
               s[4 * t + 1] = y.y,
               s[4 * t + 2] = y.z,
               s[4 * t + 3] = n
           }
           for (let t = 0, e = x.length; t < e; ++t) {
               const e = x[t]
                 , i = e.start;
               for (let t = i, r = i + e.count; t < r; t += 3)
                   S(n[t + 0]),
                   S(n[t + 1]),
                   S(n[t + 2])
           }
       }
       computeVertexNormals() {
           const t = this.index
             , e = this.getAttribute("position");
           if (void 0 !== e) {
               let n = this.getAttribute("normal");
               if (void 0 === n)
                   n = new Xs(new Float32Array(3 * e.count),3),
                   this.setAttribute("normal", n);
               else
                   for (let t = 0, e = n.count; t < e; t++)
                       n.setXYZ(t, 0, 0, 0);
               const i = new _o
                 , r = new _o
                 , a = new _o
                 , o = new _o
                 , s = new _o
                 , l = new _o
                 , c = new _o
                 , u = new _o;
               if (t)
                   for (let h = 0, d = t.count; h < d; h += 3) {
                       const d = t.getX(h + 0)
                         , p = t.getX(h + 1)
                         , f = t.getX(h + 2);
                       i.fromBufferAttribute(e, d),
                       r.fromBufferAttribute(e, p),
                       a.fromBufferAttribute(e, f),
                       c.subVectors(a, r),
                       u.subVectors(i, r),
                       c.cross(u),
                       o.fromBufferAttribute(n, d),
                       s.fromBufferAttribute(n, p),
                       l.fromBufferAttribute(n, f),
                       o.add(c),
                       s.add(c),
                       l.add(c),
                       n.setXYZ(d, o.x, o.y, o.z),
                       n.setXYZ(p, s.x, s.y, s.z),
                       n.setXYZ(f, l.x, l.y, l.z)
                   }
               else
                   for (let t = 0, o = e.count; t < o; t += 3)
                       i.fromBufferAttribute(e, t + 0),
                       r.fromBufferAttribute(e, t + 1),
                       a.fromBufferAttribute(e, t + 2),
                       c.subVectors(a, r),
                       u.subVectors(i, r),
                       c.cross(u),
                       n.setXYZ(t + 0, c.x, c.y, c.z),
                       n.setXYZ(t + 1, c.x, c.y, c.z),
                       n.setXYZ(t + 2, c.x, c.y, c.z);
               this.normalizeNormals(),
               n.needsUpdate = !0
           }
       }
       merge(t, e) {
           if (!t || !t.isBufferGeometry)
               return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
           void 0 === e && (e = 0,
           console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
           const n = this.attributes;
           for (const i in n) {
               if (void 0 === t.attributes[i])
                   continue;
               const r = n[i].array
                 , a = t.attributes[i]
                 , o = a.array
                 , s = a.itemSize * e
                 , l = Math.min(o.length, r.length - s);
               for (let t = 0, e = s; t < l; t++,
               e++)
                   r[e] = o[t]
           }
           return this
       }
       normalizeNormals() {
           const t = this.attributes.normal;
           for (let e = 0, n = t.count; e < n; e++)
               al.fromBufferAttribute(t, e),
               al.normalize(),
               t.setXYZ(e, al.x, al.y, al.z)
       }
       toNonIndexed() {
           function t(t, e) {
               const n = t.array
                 , i = t.itemSize
                 , r = t.normalized
                 , a = new n.constructor(e.length * i);
               let o = 0
                 , s = 0;
               for (let t = 0, r = e.length; t < r; t++) {
                   o = e[t] * i;
                   for (let t = 0; t < i; t++)
                       a[s++] = n[o++]
               }
               return new Xs(a,i,r)
           }
           if (null === this.index)
               return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
               this;
           const e = new ol
             , n = this.index.array
             , i = this.attributes;
           for (const r in i) {
               const a = t(i[r], n);
               e.setAttribute(r, a)
           }
           const r = this.morphAttributes;
           for (const i in r) {
               const a = []
                 , o = r[i];
               for (let e = 0, i = o.length; e < i; e++) {
                   const i = t(o[e], n);
                   a.push(i)
               }
               e.morphAttributes[i] = a
           }
           e.morphTargetsRelative = this.morphTargetsRelative;
           const a = this.groups;
           for (let t = 0, n = a.length; t < n; t++) {
               const n = a[t];
               e.addGroup(n.start, n.count, n.materialIndex)
           }
           return e
       }
       toJSON() {
           const t = {
               metadata: {
                   version: 4.5,
                   type: "BufferGeometry",
                   generator: "BufferGeometry.toJSON"
               }
           };
           if (t.uuid = this.uuid,
           t.type = this.type,
           "" !== this.name && (t.name = this.name),
           Object.keys(this.userData).length > 0 && (t.userData = this.userData),
           void 0 !== this.parameters) {
               const e = this.parameters;
               for (const n in e)
                   void 0 !== e[n] && (t[n] = e[n]);
               return t
           }
           t.data = {
               attributes: {}
           };
           const e = this.index;
           null !== e && (t.data.index = {
               type: e.array.constructor.name,
               array: Array.prototype.slice.call(e.array)
           });
           const n = this.attributes;
           for (const e in n) {
               const i = n[e];
               t.data.attributes[e] = i.toJSON(t.data)
           }
           const i = {};
           let r = !1;
           for (const e in this.morphAttributes) {
               const n = this.morphAttributes[e]
                 , a = [];
               for (let e = 0, i = n.length; e < i; e++) {
                   const i = n[e];
                   a.push(i.toJSON(t.data))
               }
               a.length > 0 && (i[e] = a,
               r = !0)
           }
           r && (t.data.morphAttributes = i,
           t.data.morphTargetsRelative = this.morphTargetsRelative);
           const a = this.groups;
           a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
           const o = this.boundingSphere;
           return null !== o && (t.data.boundingSphere = {
               center: o.center.toArray(),
               radius: o.radius
           }),
           t
       }
       clone() {
           return (new ol).copy(this)
       }
       copy(t) {
           this.index = null,
           this.attributes = {},
           this.morphAttributes = {},
           this.groups = [],
           this.boundingBox = null,
           this.boundingSphere = null;
           const e = {};
           this.name = t.name;
           const n = t.index;
           null !== n && this.setIndex(n.clone(e));
           const i = t.attributes;
           for (const t in i) {
               const n = i[t];
               this.setAttribute(t, n.clone(e))
           }
           const r = t.morphAttributes;
           for (const t in r) {
               const n = []
                 , i = r[t];
               for (let t = 0, r = i.length; t < r; t++)
                   n.push(i[t].clone(e));
               this.morphAttributes[t] = n
           }
           this.morphTargetsRelative = t.morphTargetsRelative;
           const a = t.groups;
           for (let t = 0, e = a.length; t < e; t++) {
               const e = a[t];
               this.addGroup(e.start, e.count, e.materialIndex)
           }
           const o = t.boundingBox;
           null !== o && (this.boundingBox = o.clone());
           const s = t.boundingSphere;
           return null !== s && (this.boundingSphere = s.clone()),
           this.drawRange.start = t.drawRange.start,
           this.drawRange.count = t.drawRange.count,
           this.userData = t.userData,
           this
       }
       dispose() {
           this.dispatchEvent({
               type: "dispose"
           })
       }
   }
   ol.prototype.isBufferGeometry = !0;
   const sl = new Zo
     , ll = new Xo
     , cl = new ko
     , ul = new _o
     , hl = new _o
     , dl = new _o
     , pl = new _o
     , fl = new _o
     , ml = new _o
     , gl = new _o
     , vl = new _o
     , _l = new _o
     , xl = new so
     , yl = new so
     , wl = new so
     , bl = new _o
     , Ml = new _o;
   class Sl extends ys {
       constructor(t=new ol, e=new qs) {
           super(),
           this.type = "Mesh",
           this.geometry = t,
           this.material = e,
           this.updateMorphTargets()
       }
       copy(t) {
           return super.copy(t),
           void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
           void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)),
           this.material = t.material,
           this.geometry = t.geometry,
           this
       }
       updateMorphTargets() {
           const t = this.geometry;
           if (t.isBufferGeometry) {
               const e = t.morphAttributes
                 , n = Object.keys(e);
               if (n.length > 0) {
                   const t = e[n[0]];
                   if (void 0 !== t) {
                       this.morphTargetInfluences = [],
                       this.morphTargetDictionary = {};
                       for (let e = 0, n = t.length; e < n; e++) {
                           const n = t[e].name || String(e);
                           this.morphTargetInfluences.push(0),
                           this.morphTargetDictionary[n] = e
                       }
                   }
               }
           } else {
               const e = t.morphTargets;
               void 0 !== e && e.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
           }
       }
       raycast(t, e) {
           const n = this.geometry
             , i = this.material
             , r = this.matrixWorld;
           if (void 0 === i)
               return;
           if (null === n.boundingSphere && n.computeBoundingSphere(),
           cl.copy(n.boundingSphere),
           cl.applyMatrix4(r),
           !1 === t.ray.intersectsSphere(cl))
               return;
           if (sl.copy(r).invert(),
           ll.copy(t.ray).applyMatrix4(sl),
           null !== n.boundingBox && !1 === ll.intersectsBox(n.boundingBox))
               return;
           let a;
           if (n.isBufferGeometry) {
               const r = n.index
                 , o = n.attributes.position
                 , s = n.morphAttributes.position
                 , l = n.morphTargetsRelative
                 , c = n.attributes.uv
                 , u = n.attributes.uv2
                 , h = n.groups
                 , d = n.drawRange;
               if (null !== r)
                   if (Array.isArray(i))
                       for (let n = 0, p = h.length; n < p; n++) {
                           const p = h[n]
                             , f = i[p.materialIndex];
                           for (let n = Math.max(p.start, d.start), i = Math.min(p.start + p.count, d.start + d.count); n < i; n += 3) {
                               const i = r.getX(n)
                                 , h = r.getX(n + 1)
                                 , d = r.getX(n + 2);
                               a = Tl(this, f, t, ll, o, s, l, c, u, i, h, d),
                               a && (a.faceIndex = Math.floor(n / 3),
                               a.face.materialIndex = p.materialIndex,
                               e.push(a))
                           }
                       }
                   else {
                       for (let n = Math.max(0, d.start), h = Math.min(r.count, d.start + d.count); n < h; n += 3) {
                           const h = r.getX(n)
                             , d = r.getX(n + 1)
                             , p = r.getX(n + 2);
                           a = Tl(this, i, t, ll, o, s, l, c, u, h, d, p),
                           a && (a.faceIndex = Math.floor(n / 3),
                           e.push(a))
                       }
                   }
               else if (void 0 !== o)
                   if (Array.isArray(i))
                       for (let n = 0, r = h.length; n < r; n++) {
                           const r = h[n]
                             , p = i[r.materialIndex];
                           for (let n = Math.max(r.start, d.start), i = Math.min(r.start + r.count, d.start + d.count); n < i; n += 3) {
                               a = Tl(this, p, t, ll, o, s, l, c, u, n, n + 1, n + 2),
                               a && (a.faceIndex = Math.floor(n / 3),
                               a.face.materialIndex = r.materialIndex,
                               e.push(a))
                           }
                       }
                   else {
                       for (let n = Math.max(0, d.start), r = Math.min(o.count, d.start + d.count); n < r; n += 3) {
                           a = Tl(this, i, t, ll, o, s, l, c, u, n, n + 1, n + 2),
                           a && (a.faceIndex = Math.floor(n / 3),
                           e.push(a))
                       }
                   }
           } else
               n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
       }
   }
   function Tl(t, e, n, i, r, a, o, s, l, c, u, h) {
       ul.fromBufferAttribute(r, c),
       hl.fromBufferAttribute(r, u),
       dl.fromBufferAttribute(r, h);
       const d = t.morphTargetInfluences;
       if (e.morphTargets && a && d) {
           gl.set(0, 0, 0),
           vl.set(0, 0, 0),
           _l.set(0, 0, 0);
           for (let t = 0, e = a.length; t < e; t++) {
               const e = d[t]
                 , n = a[t];
               0 !== e && (pl.fromBufferAttribute(n, c),
               fl.fromBufferAttribute(n, u),
               ml.fromBufferAttribute(n, h),
               o ? (gl.addScaledVector(pl, e),
               vl.addScaledVector(fl, e),
               _l.addScaledVector(ml, e)) : (gl.addScaledVector(pl.sub(ul), e),
               vl.addScaledVector(fl.sub(hl), e),
               _l.addScaledVector(ml.sub(dl), e)))
           }
           ul.add(gl),
           hl.add(vl),
           dl.add(_l)
       }
       t.isSkinnedMesh && e.skinning && (t.boneTransform(c, ul),
       t.boneTransform(u, hl),
       t.boneTransform(h, dl));
       const p = function(t, e, n, i, r, a, o, s) {
           let l;
           if (l = 1 === e.side ? i.intersectTriangle(o, a, r, !0, s) : i.intersectTriangle(r, a, o, 2 !== e.side, s),
           null === l)
               return null;
           Ml.copy(s),
           Ml.applyMatrix4(t.matrixWorld);
           const c = n.ray.origin.distanceTo(Ml);
           return c < n.near || c > n.far ? null : {
               distance: c,
               point: Ml.clone(),
               object: t
           }
       }(t, e, n, i, ul, hl, dl, bl);
       if (p) {
           s && (xl.fromBufferAttribute(s, c),
           yl.fromBufferAttribute(s, u),
           wl.fromBufferAttribute(s, h),
           p.uv = Ns.getUV(bl, ul, hl, dl, xl, yl, wl, new so)),
           l && (xl.fromBufferAttribute(l, c),
           yl.fromBufferAttribute(l, u),
           wl.fromBufferAttribute(l, h),
           p.uv2 = Ns.getUV(bl, ul, hl, dl, xl, yl, wl, new so));
           const t = {
               a: c,
               b: u,
               c: h,
               normal: new _o,
               materialIndex: 0
           };
           Ns.getNormal(ul, hl, dl, t.normal),
           p.face = t
       }
       return p
   }
   Sl.prototype.isMesh = !0;
   class El extends ol {
       constructor(t=1, e=1, n=1, i=1, r=1, a=1) {
           super(),
           this.type = "BoxGeometry",
           this.parameters = {
               width: t,
               height: e,
               depth: n,
               widthSegments: i,
               heightSegments: r,
               depthSegments: a
           };
           const o = this;
           i = Math.floor(i),
           r = Math.floor(r),
           a = Math.floor(a);
           const s = []
             , l = []
             , c = []
             , u = [];
           let h = 0
             , d = 0;
           function p(t, e, n, i, r, a, p, f, m, g, v) {
               const _ = a / m
                 , x = p / g
                 , y = a / 2
                 , w = p / 2
                 , b = f / 2
                 , M = m + 1
                 , S = g + 1;
               let T = 0
                 , E = 0;
               const L = new _o;
               for (let a = 0; a < S; a++) {
                   const o = a * x - w;
                   for (let s = 0; s < M; s++) {
                       const h = s * _ - y;
                       L[t] = h * i,
                       L[e] = o * r,
                       L[n] = b,
                       l.push(L.x, L.y, L.z),
                       L[t] = 0,
                       L[e] = 0,
                       L[n] = f > 0 ? 1 : -1,
                       c.push(L.x, L.y, L.z),
                       u.push(s / m),
                       u.push(1 - a / g),
                       T += 1
                   }
               }
               for (let t = 0; t < g; t++)
                   for (let e = 0; e < m; e++) {
                       const n = h + e + M * t
                         , i = h + e + M * (t + 1)
                         , r = h + (e + 1) + M * (t + 1)
                         , a = h + (e + 1) + M * t;
                       s.push(n, i, a),
                       s.push(i, r, a),
                       E += 6
                   }
               o.addGroup(d, E, v),
               d += E,
               h += T
           }
           p("z", "y", "x", -1, -1, n, e, t, a, r, 0),
           p("z", "y", "x", 1, -1, n, e, -t, a, r, 1),
           p("x", "z", "y", 1, 1, t, n, e, i, a, 2),
           p("x", "z", "y", 1, -1, t, n, -e, i, a, 3),
           p("x", "y", "z", 1, -1, t, e, n, i, r, 4),
           p("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
           this.setIndex(s),
           this.setAttribute("position", new Qs(l,3)),
           this.setAttribute("normal", new Qs(c,3)),
           this.setAttribute("uv", new Qs(u,2))
       }
   }
   function Ll(t) {
       const e = {};
       for (const n in t) {
           e[n] = {};
           for (const i in t[n]) {
               const r = t[n][i];
               r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r
           }
       }
       return e
   }
   function Al(t) {
       const e = {};
       for (let n = 0; n < t.length; n++) {
           const i = Ll(t[n]);
           for (const t in i)
               e[t] = i[t]
       }
       return e
   }
   const Rl = {
       clone: Ll,
       merge: Al
   };
   class Cl extends Fs {
       constructor(t) {
           super(),
           this.type = "ShaderMaterial",
           this.defines = {},
           this.uniforms = {},
           this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
           this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",
           this.linewidth = 1,
           this.wireframe = !1,
           this.wireframeLinewidth = 1,
           this.fog = !1,
           this.lights = !1,
           this.clipping = !1,
           this.skinning = !1,
           this.morphTargets = !1,
           this.morphNormals = !1,
           this.extensions = {
               derivatives: !1,
               fragDepth: !1,
               drawBuffers: !1,
               shaderTextureLOD: !1
           },
           this.defaultAttributeValues = {
               color: [1, 1, 1],
               uv: [0, 0],
               uv2: [0, 0]
           },
           this.index0AttributeName = void 0,
           this.uniformsNeedUpdate = !1,
           this.glslVersion = null,
           void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
           this.setValues(t))
       }
       copy(t) {
           return super.copy(t),
           this.fragmentShader = t.fragmentShader,
           this.vertexShader = t.vertexShader,
           this.uniforms = Ll(t.uniforms),
           this.defines = Object.assign({}, t.defines),
           this.wireframe = t.wireframe,
           this.wireframeLinewidth = t.wireframeLinewidth,
           this.lights = t.lights,
           this.clipping = t.clipping,
           this.skinning = t.skinning,
           this.morphTargets = t.morphTargets,
           this.morphNormals = t.morphNormals,
           this.extensions = Object.assign({}, t.extensions),
           this.glslVersion = t.glslVersion,
           this
       }
       toJSON(t) {
           const e = super.toJSON(t);
           e.glslVersion = this.glslVersion,
           e.uniforms = {};
           for (const n in this.uniforms) {
               const i = this.uniforms[n].value;
               i && i.isTexture ? e.uniforms[n] = {
                   type: "t",
                   value: i.toJSON(t).uuid
               } : i && i.isColor ? e.uniforms[n] = {
                   type: "c",
                   value: i.getHex()
               } : i && i.isVector2 ? e.uniforms[n] = {
                   type: "v2",
                   value: i.toArray()
               } : i && i.isVector3 ? e.uniforms[n] = {
                   type: "v3",
                   value: i.toArray()
               } : i && i.isVector4 ? e.uniforms[n] = {
                   type: "v4",
                   value: i.toArray()
               } : i && i.isMatrix3 ? e.uniforms[n] = {
                   type: "m3",
                   value: i.toArray()
               } : i && i.isMatrix4 ? e.uniforms[n] = {
                   type: "m4",
                   value: i.toArray()
               } : e.uniforms[n] = {
                   value: i
               }
           }
           Object.keys(this.defines).length > 0 && (e.defines = this.defines),
           e.vertexShader = this.vertexShader,
           e.fragmentShader = this.fragmentShader;
           const n = {};
           for (const t in this.extensions)
               !0 === this.extensions[t] && (n[t] = !0);
           return Object.keys(n).length > 0 && (e.extensions = n),
           e
       }
   }
   Cl.prototype.isShaderMaterial = !0;
   class Pl extends ys {
       constructor() {
           super(),
           this.type = "Camera",
           this.matrixWorldInverse = new Zo,
           this.projectionMatrix = new Zo,
           this.projectionMatrixInverse = new Zo
       }
       copy(t, e) {
           return super.copy(t, e),
           this.matrixWorldInverse.copy(t.matrixWorldInverse),
           this.projectionMatrix.copy(t.projectionMatrix),
           this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
           this
       }
       getWorldDirection(t) {
           void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"),
           t = new _o),
           this.updateWorldMatrix(!0, !1);
           const e = this.matrixWorld.elements;
           return t.set(-e[8], -e[9], -e[10]).normalize()
       }
       updateMatrixWorld(t) {
           super.updateMatrixWorld(t),
           this.matrixWorldInverse.copy(this.matrixWorld).invert()
       }
       updateWorldMatrix(t, e) {
           super.updateWorldMatrix(t, e),
           this.matrixWorldInverse.copy(this.matrixWorld).invert()
       }
       clone() {
           return (new this.constructor).copy(this)
       }
   }
   Pl.prototype.isCamera = !0;
   class Dl extends Pl {
       constructor(t=50, e=1, n=.1, i=2e3) {
           super(),
           this.type = "PerspectiveCamera",
           this.fov = t,
           this.zoom = 1,
           this.near = n,
           this.far = i,
           this.focus = 10,
           this.aspect = e,
           this.view = null,
           this.filmGauge = 35,
           this.filmOffset = 0,
           this.updateProjectionMatrix()
       }
       copy(t, e) {
           return super.copy(t, e),
           this.fov = t.fov,
           this.zoom = t.zoom,
           this.near = t.near,
           this.far = t.far,
           this.focus = t.focus,
           this.aspect = t.aspect,
           this.view = null === t.view ? null : Object.assign({}, t.view),
           this.filmGauge = t.filmGauge,
           this.filmOffset = t.filmOffset,
           this
       }
       setFocalLength(t) {
           const e = .5 * this.getFilmHeight() / t;
           this.fov = 2 * eo * Math.atan(e),
           this.updateProjectionMatrix()
       }
       getFocalLength() {
           const t = Math.tan(.5 * to * this.fov);
           return .5 * this.getFilmHeight() / t
       }
       getEffectiveFOV() {
           return 2 * eo * Math.atan(Math.tan(.5 * to * this.fov) / this.zoom)
       }
       getFilmWidth() {
           return this.filmGauge * Math.min(this.aspect, 1)
       }
       getFilmHeight() {
           return this.filmGauge / Math.max(this.aspect, 1)
       }
       setViewOffset(t, e, n, i, r, a) {
           this.aspect = t / e,
           null === this.view && (this.view = {
               enabled: !0,
               fullWidth: 1,
               fullHeight: 1,
               offsetX: 0,
               offsetY: 0,
               width: 1,
               height: 1
           }),
           this.view.enabled = !0,
           this.view.fullWidth = t,
           this.view.fullHeight = e,
           this.view.offsetX = n,
           this.view.offsetY = i,
           this.view.width = r,
           this.view.height = a,
           this.updateProjectionMatrix()
       }
       clearViewOffset() {
           null !== this.view && (this.view.enabled = !1),
           this.updateProjectionMatrix()
       }
       updateProjectionMatrix() {
           const t = this.near;
           let e = t * Math.tan(.5 * to * this.fov) / this.zoom
             , n = 2 * e
             , i = this.aspect * n
             , r = -.5 * i;
           const a = this.view;
           if (null !== this.view && this.view.enabled) {
               const t = a.fullWidth
                 , o = a.fullHeight;
               r += a.offsetX * i / t,
               e -= a.offsetY * n / o,
               i *= a.width / t,
               n *= a.height / o
           }
           const o = this.filmOffset;
           0 !== o && (r += t * o / this.getFilmWidth()),
           this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far),
           this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
       }
       toJSON(t) {
           const e = super.toJSON(t);
           return e.object.fov = this.fov,
           e.object.zoom = this.zoom,
           e.object.near = this.near,
           e.object.far = this.far,
           e.object.focus = this.focus,
           e.object.aspect = this.aspect,
           null !== this.view && (e.object.view = Object.assign({}, this.view)),
           e.object.filmGauge = this.filmGauge,
           e.object.filmOffset = this.filmOffset,
           e
       }
   }
   Dl.prototype.isPerspectiveCamera = !0;
   const Il = 90;
   class Ol extends ys {
       constructor(t, e, n) {
           if (super(),
           this.type = "CubeCamera",
           !0 !== n.isWebGLCubeRenderTarget)
               return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
           this.renderTarget = n;
           const i = new Dl(Il,1,t,e);
           i.layers = this.layers,
           i.up.set(0, -1, 0),
           i.lookAt(new _o(1,0,0)),
           this.add(i);
           const r = new Dl(Il,1,t,e);
           r.layers = this.layers,
           r.up.set(0, -1, 0),
           r.lookAt(new _o(-1,0,0)),
           this.add(r);
           const a = new Dl(Il,1,t,e);
           a.layers = this.layers,
           a.up.set(0, 0, 1),
           a.lookAt(new _o(0,1,0)),
           this.add(a);
           const o = new Dl(Il,1,t,e);
           o.layers = this.layers,
           o.up.set(0, 0, -1),
           o.lookAt(new _o(0,-1,0)),
           this.add(o);
           const s = new Dl(Il,1,t,e);
           s.layers = this.layers,
           s.up.set(0, -1, 0),
           s.lookAt(new _o(0,0,1)),
           this.add(s);
           const l = new Dl(Il,1,t,e);
           l.layers = this.layers,
           l.up.set(0, -1, 0),
           l.lookAt(new _o(0,0,-1)),
           this.add(l)
       }
       update(t, e) {
           null === this.parent && this.updateMatrixWorld();
           const n = this.renderTarget
             , [i,r,a,o,s,l] = this.children
             , c = t.xr.enabled
             , u = t.getRenderTarget();
           t.xr.enabled = !1;
           const h = n.texture.generateMipmaps;
           n.texture.generateMipmaps = !1,
           t.setRenderTarget(n, 0),
           t.render(e, i),
           t.setRenderTarget(n, 1),
           t.render(e, r),
           t.setRenderTarget(n, 2),
           t.render(e, a),
           t.setRenderTarget(n, 3),
           t.render(e, o),
           t.setRenderTarget(n, 4),
           t.render(e, s),
           n.texture.generateMipmaps = h,
           t.setRenderTarget(n, 5),
           t.render(e, l),
           t.setRenderTarget(u),
           t.xr.enabled = c
       }
   }
   class Nl extends po {
       constructor(t, e, n, i, r, a, o, s, l, c) {
           super(t = void 0 !== t ? t : [], e = void 0 !== e ? e : 301, n, i, r, a, o = void 0 !== o ? o : Wa, s, l, c),
           this._needsFlipEnvMap = !0,
           this.flipY = !1
       }
       get images() {
           return this.image
       }
       set images(t) {
           this.image = t
       }
   }
   Nl.prototype.isCubeTexture = !0;
   class zl extends go {
       constructor(t, e, n) {
           Number.isInteger(e) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),
           e = n),
           super(t, t, e),
           e = e || {},
           this.texture = new Nl(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),
           this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps,
           this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : Na,
           this.texture._needsFlipEnvMap = !1
       }
       fromEquirectangularTexture(t, e) {
           this.texture.type = e.type,
           this.texture.format = Va,
           this.texture.encoding = e.encoding,
           this.texture.generateMipmaps = e.generateMipmaps,
           this.texture.minFilter = e.minFilter,
           this.texture.magFilter = e.magFilter;
           const n = {
               uniforms: {
                   tEquirect: {
                       value: null
                   }
               },
               vertexShader: "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
               fragmentShader: "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"
           }
             , i = new El(5,5,5)
             , r = new Cl({
               name: "CubemapFromEquirect",
               uniforms: Ll(n.uniforms),
               vertexShader: n.vertexShader,
               fragmentShader: n.fragmentShader,
               side: 1,
               blending: 0
           });
           r.uniforms.tEquirect.value = e;
           const a = new Sl(i,r)
             , o = e.minFilter;
           e.minFilter === za && (e.minFilter = Na);
           return new Ol(1,10,this).update(t, a),
           e.minFilter = o,
           a.geometry.dispose(),
           a.material.dispose(),
           this
       }
       clear(t, e, n, i) {
           const r = t.getRenderTarget();
           for (let r = 0; r < 6; r++)
               t.setRenderTarget(this, r),
               t.clear(e, n, i);
           t.setRenderTarget(r)
       }
   }
   zl.prototype.isWebGLCubeRenderTarget = !0;
   class Fl extends po {
       constructor(t, e, n, i, r, a, o, s, l, c, u, h) {
           super(null, a, o, s, l, c, i, r, u, h),
           this.image = {
               data: t || null,
               width: e || 1,
               height: n || 1
           },
           this.magFilter = void 0 !== l ? l : Oa,
           this.minFilter = void 0 !== c ? c : Oa,
           this.generateMipmaps = !1,
           this.flipY = !1,
           this.unpackAlignment = 1,
           this.needsUpdate = !0
       }
   }
   Fl.prototype.isDataTexture = !0;
   const Hl = new ko
     , Bl = new _o;
   class kl {
       constructor(t=new Ss, e=new Ss, n=new Ss, i=new Ss, r=new Ss, a=new Ss) {
           this.planes = [t, e, n, i, r, a]
       }
       set(t, e, n, i, r, a) {
           const o = this.planes;
           return o[0].copy(t),
           o[1].copy(e),
           o[2].copy(n),
           o[3].copy(i),
           o[4].copy(r),
           o[5].copy(a),
           this
       }
       copy(t) {
           const e = this.planes;
           for (let n = 0; n < 6; n++)
               e[n].copy(t.planes[n]);
           return this
       }
       setFromProjectionMatrix(t) {
           const e = this.planes
             , n = t.elements
             , i = n[0]
             , r = n[1]
             , a = n[2]
             , o = n[3]
             , s = n[4]
             , l = n[5]
             , c = n[6]
             , u = n[7]
             , h = n[8]
             , d = n[9]
             , p = n[10]
             , f = n[11]
             , m = n[12]
             , g = n[13]
             , v = n[14]
             , _ = n[15];
           return e[0].setComponents(o - i, u - s, f - h, _ - m).normalize(),
           e[1].setComponents(o + i, u + s, f + h, _ + m).normalize(),
           e[2].setComponents(o + r, u + l, f + d, _ + g).normalize(),
           e[3].setComponents(o - r, u - l, f - d, _ - g).normalize(),
           e[4].setComponents(o - a, u - c, f - p, _ - v).normalize(),
           e[5].setComponents(o + a, u + c, f + p, _ + v).normalize(),
           this
       }
       intersectsObject(t) {
           const e = t.geometry;
           return null === e.boundingSphere && e.computeBoundingSphere(),
           Hl.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
           this.intersectsSphere(Hl)
       }
       intersectsSprite(t) {
           return Hl.center.set(0, 0, 0),
           Hl.radius = .7071067811865476,
           Hl.applyMatrix4(t.matrixWorld),
           this.intersectsSphere(Hl)
       }
       intersectsSphere(t) {
           const e = this.planes
             , n = t.center
             , i = -t.radius;
           for (let t = 0; t < 6; t++) {
               if (e[t].distanceToPoint(n) < i)
                   return !1
           }
           return !0
       }
       intersectsBox(t) {
           const e = this.planes;
           for (let n = 0; n < 6; n++) {
               const i = e[n];
               if (Bl.x = i.normal.x > 0 ? t.max.x : t.min.x,
               Bl.y = i.normal.y > 0 ? t.max.y : t.min.y,
               Bl.z = i.normal.z > 0 ? t.max.z : t.min.z,
               i.distanceToPoint(Bl) < 0)
                   return !1
           }
           return !0
       }
       containsPoint(t) {
           const e = this.planes;
           for (let n = 0; n < 6; n++)
               if (e[n].distanceToPoint(t) < 0)
                   return !1;
           return !0
       }
       clone() {
           return (new this.constructor).copy(this)
       }
   }
   function Ul() {
       let t = null
         , e = !1
         , n = null
         , i = null;
       function r(e, a) {
           n(e, a),
           i = t.requestAnimationFrame(r)
       }
       return {
           start: function() {
               !0 !== e && null !== n && (i = t.requestAnimationFrame(r),
               e = !0)
           },
           stop: function() {
               t.cancelAnimationFrame(i),
               e = !1
           },
           setAnimationLoop: function(t) {
               n = t
           },
           setContext: function(e) {
               t = e
           }
       }
   }
   function Gl(t, e) {
       const n = e.isWebGL2
         , i = new WeakMap;
       return {
           get: function(t) {
               return t.isInterleavedBufferAttribute && (t = t.data),
               i.get(t)
           },
           remove: function(e) {
               e.isInterleavedBufferAttribute && (e = e.data);
               const n = i.get(e);
               n && (t.deleteBuffer(n.buffer),
               i.delete(e))
           },
           update: function(e, r) {
               if (e.isGLBufferAttribute) {
                   const t = i.get(e);
                   return void ((!t || t.version < e.version) && i.set(e, {
                       buffer: e.buffer,
                       type: e.type,
                       bytesPerElement: e.elementSize,
                       version: e.version
                   }))
               }
               e.isInterleavedBufferAttribute && (e = e.data);
               const a = i.get(e);
               void 0 === a ? i.set(e, function(e, i) {
                   const r = e.array
                     , a = e.usage
                     , o = t.createBuffer();
                   t.bindBuffer(i, o),
                   t.bufferData(i, r, a),
                   e.onUploadCallback();
                   let s = 5126;
                   return r instanceof Float32Array ? s = 5126 : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? e.isFloat16BufferAttribute ? n ? s = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : s = 5123 : r instanceof Int16Array ? s = 5122 : r instanceof Uint32Array ? s = 5125 : r instanceof Int32Array ? s = 5124 : r instanceof Int8Array ? s = 5120 : r instanceof Uint8Array && (s = 5121),
                   {
                       buffer: o,
                       type: s,
                       bytesPerElement: r.BYTES_PER_ELEMENT,
                       version: e.version
                   }
               }(e, r)) : a.version < e.version && (!function(e, i, r) {
                   const a = i.array
                     , o = i.updateRange;
                   t.bindBuffer(r, e),
                   -1 === o.count ? t.bufferSubData(r, 0, a) : (n ? t.bufferSubData(r, o.offset * a.BYTES_PER_ELEMENT, a, o.offset, o.count) : t.bufferSubData(r, o.offset * a.BYTES_PER_ELEMENT, a.subarray(o.offset, o.offset + o.count)),
                   o.count = -1)
               }(a.buffer, e, r),
               a.version = e.version)
           }
       }
   }
   class Wl extends ol {
       constructor(t=1, e=1, n=1, i=1) {
           super(),
           this.type = "PlaneGeometry",
           this.parameters = {
               width: t,
               height: e,
               widthSegments: n,
               heightSegments: i
           };
           const r = t / 2
             , a = e / 2
             , o = Math.floor(n)
             , s = Math.floor(i)
             , l = o + 1
             , c = s + 1
             , u = t / o
             , h = e / s
             , d = []
             , p = []
             , f = []
             , m = [];
           for (let t = 0; t < c; t++) {
               const e = t * h - a;
               for (let n = 0; n < l; n++) {
                   const i = n * u - r;
                   p.push(i, -e, 0),
                   f.push(0, 0, 1),
                   m.push(n / o),
                   m.push(1 - t / s)
               }
           }
           for (let t = 0; t < s; t++)
               for (let e = 0; e < o; e++) {
                   const n = e + l * t
                     , i = e + l * (t + 1)
                     , r = e + 1 + l * (t + 1)
                     , a = e + 1 + l * t;
                   d.push(n, i, a),
                   d.push(i, r, a)
               }
           this.setIndex(d),
           this.setAttribute("position", new Qs(p,3)),
           this.setAttribute("normal", new Qs(f,3)),
           this.setAttribute("uv", new Qs(m,2))
       }
   }
   const Vl = {
       alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
       alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
       alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
       aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
       aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
       begin_vertex: "vec3 transformed = vec3( position );",
       beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
       bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
       bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
       clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
       clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
       clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
       clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
       color_fragment: "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
       color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
       color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
       color_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
       common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
       cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
       defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
       displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
       displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
       emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
       emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
       encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
       encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
       envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
       envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
       envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
       envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
       envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
       envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
       fog_vertex: "#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif",
       fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
       fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
       fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
       gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
       lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
       lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
       lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
       lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
       lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
       lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
       lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
       lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
       lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
       lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
       lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
       lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
       lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
       logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
       logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
       logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
       logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
       map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
       map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
       map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
       map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
       metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
       metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
       morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
       morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
       morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
       normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
       normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
       normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
       clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
       clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
       clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
       packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
       premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
       project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
       dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
       dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
       roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
       roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
       shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
       shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
       shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
       shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
       skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
       skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
       skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
       skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
       specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
       specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
       tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
       tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
       transmissionmap_fragment: "#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif",
       transmissionmap_pars_fragment: "#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif",
       uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
       uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
       uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
       uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
       uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
       uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
       worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
       background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
       background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
       cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
       cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
       depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
       depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
       distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
       distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
       equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
       equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
       linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
       linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
       meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
       meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
       meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
       meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
       meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
       meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
       meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
       meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
       meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
       meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
       meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
       meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
       normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
       normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
       points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
       points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
       shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
       shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
       sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
       sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
   }
     , ql = {
       common: {
           diffuse: {
               value: new Vs(15658734)
           },
           opacity: {
               value: 1
           },
           map: {
               value: null
           },
           uvTransform: {
               value: new lo
           },
           uv2Transform: {
               value: new lo
           },
           alphaMap: {
               value: null
           }
       },
       specularmap: {
           specularMap: {
               value: null
           }
       },
       envmap: {
           envMap: {
               value: null
           },
           flipEnvMap: {
               value: -1
           },
           reflectivity: {
               value: 1
           },
           refractionRatio: {
               value: .98
           },
           maxMipLevel: {
               value: 0
           }
       },
       aomap: {
           aoMap: {
               value: null
           },
           aoMapIntensity: {
               value: 1
           }
       },
       lightmap: {
           lightMap: {
               value: null
           },
           lightMapIntensity: {
               value: 1
           }
       },
       emissivemap: {
           emissiveMap: {
               value: null
           }
       },
       bumpmap: {
           bumpMap: {
               value: null
           },
           bumpScale: {
               value: 1
           }
       },
       normalmap: {
           normalMap: {
               value: null
           },
           normalScale: {
               value: new so(1,1)
           }
       },
       displacementmap: {
           displacementMap: {
               value: null
           },
           displacementScale: {
               value: 1
           },
           displacementBias: {
               value: 0
           }
       },
       roughnessmap: {
           roughnessMap: {
               value: null
           }
       },
       metalnessmap: {
           metalnessMap: {
               value: null
           }
       },
       gradientmap: {
           gradientMap: {
               value: null
           }
       },
       fog: {
           fogDensity: {
               value: 25e-5
           },
           fogNear: {
               value: 1
           },
           fogFar: {
               value: 2e3
           },
           fogColor: {
               value: new Vs(16777215)
           }
       },
       lights: {
           ambientLightColor: {
               value: []
           },
           lightProbe: {
               value: []
           },
           directionalLights: {
               value: [],
               properties: {
                   direction: {},
                   color: {}
               }
           },
           directionalLightShadows: {
               value: [],
               properties: {
                   shadowBias: {},
                   shadowNormalBias: {},
                   shadowRadius: {},
                   shadowMapSize: {}
               }
           },
           directionalShadowMap: {
               value: []
           },
           directionalShadowMatrix: {
               value: []
           },
           spotLights: {
               value: [],
               properties: {
                   color: {},
                   position: {},
                   direction: {},
                   distance: {},
                   coneCos: {},
                   penumbraCos: {},
                   decay: {}
               }
           },
           spotLightShadows: {
               value: [],
               properties: {
                   shadowBias: {},
                   shadowNormalBias: {},
                   shadowRadius: {},
                   shadowMapSize: {}
               }
           },
           spotShadowMap: {
               value: []
           },
           spotShadowMatrix: {
               value: []
           },
           pointLights: {
               value: [],
               properties: {
                   color: {},
                   position: {},
                   decay: {},
                   distance: {}
               }
           },
           pointLightShadows: {
               value: [],
               properties: {
                   shadowBias: {},
                   shadowNormalBias: {},
                   shadowRadius: {},
                   shadowMapSize: {},
                   shadowCameraNear: {},
                   shadowCameraFar: {}
               }
           },
           pointShadowMap: {
               value: []
           },
           pointShadowMatrix: {
               value: []
           },
           hemisphereLights: {
               value: [],
               properties: {
                   direction: {},
                   skyColor: {},
                   groundColor: {}
               }
           },
           rectAreaLights: {
               value: [],
               properties: {
                   color: {},
                   position: {},
                   width: {},
                   height: {}
               }
           },
           ltc_1: {
               value: null
           },
           ltc_2: {
               value: null
           }
       },
       points: {
           diffuse: {
               value: new Vs(15658734)
           },
           opacity: {
               value: 1
           },
           size: {
               value: 1
           },
           scale: {
               value: 1
           },
           map: {
               value: null
           },
           alphaMap: {
               value: null
           },
           uvTransform: {
               value: new lo
           }
       },
       sprite: {
           diffuse: {
               value: new Vs(15658734)
           },
           opacity: {
               value: 1
           },
           center: {
               value: new so(.5,.5)
           },
           rotation: {
               value: 0
           },
           map: {
               value: null
           },
           alphaMap: {
               value: null
           },
           uvTransform: {
               value: new lo
           }
       }
   }
     , jl = {
       basic: {
           uniforms: Al([ql.common, ql.specularmap, ql.envmap, ql.aomap, ql.lightmap, ql.fog]),
           vertexShader: Vl.meshbasic_vert,
           fragmentShader: Vl.meshbasic_frag
       },
       lambert: {
           uniforms: Al([ql.common, ql.specularmap, ql.envmap, ql.aomap, ql.lightmap, ql.emissivemap, ql.fog, ql.lights, {
               emissive: {
                   value: new Vs(0)
               }
           }]),
           vertexShader: Vl.meshlambert_vert,
           fragmentShader: Vl.meshlambert_frag
       },
       phong: {
           uniforms: Al([ql.common, ql.specularmap, ql.envmap, ql.aomap, ql.lightmap, ql.emissivemap, ql.bumpmap, ql.normalmap, ql.displacementmap, ql.fog, ql.lights, {
               emissive: {
                   value: new Vs(0)
               },
               specular: {
                   value: new Vs(1118481)
               },
               shininess: {
                   value: 30
               }
           }]),
           vertexShader: Vl.meshphong_vert,
           fragmentShader: Vl.meshphong_frag
       },
       standard: {
           uniforms: Al([ql.common, ql.envmap, ql.aomap, ql.lightmap, ql.emissivemap, ql.bumpmap, ql.normalmap, ql.displacementmap, ql.roughnessmap, ql.metalnessmap, ql.fog, ql.lights, {
               emissive: {
                   value: new Vs(0)
               },
               roughness: {
                   value: 1
               },
               metalness: {
                   value: 0
               },
               envMapIntensity: {
                   value: 1
               }
           }]),
           vertexShader: Vl.meshphysical_vert,
           fragmentShader: Vl.meshphysical_frag
       },
       toon: {
           uniforms: Al([ql.common, ql.aomap, ql.lightmap, ql.emissivemap, ql.bumpmap, ql.normalmap, ql.displacementmap, ql.gradientmap, ql.fog, ql.lights, {
               emissive: {
                   value: new Vs(0)
               }
           }]),
           vertexShader: Vl.meshtoon_vert,
           fragmentShader: Vl.meshtoon_frag
       },
       matcap: {
           uniforms: Al([ql.common, ql.bumpmap, ql.normalmap, ql.displacementmap, ql.fog, {
               matcap: {
                   value: null
               }
           }]),
           vertexShader: Vl.meshmatcap_vert,
           fragmentShader: Vl.meshmatcap_frag
       },
       points: {
           uniforms: Al([ql.points, ql.fog]),
           vertexShader: Vl.points_vert,
           fragmentShader: Vl.points_frag
       },
       dashed: {
           uniforms: Al([ql.common, ql.fog, {
               scale: {
                   value: 1
               },
               dashSize: {
                   value: 1
               },
               totalSize: {
                   value: 2
               }
           }]),
           vertexShader: Vl.linedashed_vert,
           fragmentShader: Vl.linedashed_frag
       },
       depth: {
           uniforms: Al([ql.common, ql.displacementmap]),
           vertexShader: Vl.depth_vert,
           fragmentShader: Vl.depth_frag
       },
       normal: {
           uniforms: Al([ql.common, ql.bumpmap, ql.normalmap, ql.displacementmap, {
               opacity: {
                   value: 1
               }
           }]),
           vertexShader: Vl.normal_vert,
           fragmentShader: Vl.normal_frag
       },
       sprite: {
           uniforms: Al([ql.sprite, ql.fog]),
           vertexShader: Vl.sprite_vert,
           fragmentShader: Vl.sprite_frag
       },
       background: {
           uniforms: {
               uvTransform: {
                   value: new lo
               },
               t2D: {
                   value: null
               }
           },
           vertexShader: Vl.background_vert,
           fragmentShader: Vl.background_frag
       },
       cube: {
           uniforms: Al([ql.envmap, {
               opacity: {
                   value: 1
               }
           }]),
           vertexShader: Vl.cube_vert,
           fragmentShader: Vl.cube_frag
       },
       equirect: {
           uniforms: {
               tEquirect: {
                   value: null
               }
           },
           vertexShader: Vl.equirect_vert,
           fragmentShader: Vl.equirect_frag
       },
       distanceRGBA: {
           uniforms: Al([ql.common, ql.displacementmap, {
               referencePosition: {
                   value: new _o
               },
               nearDistance: {
                   value: 1
               },
               farDistance: {
                   value: 1e3
               }
           }]),
           vertexShader: Vl.distanceRGBA_vert,
           fragmentShader: Vl.distanceRGBA_frag
       },
       shadow: {
           uniforms: Al([ql.lights, ql.fog, {
               color: {
                   value: new Vs(0)
               },
               opacity: {
                   value: 1
               }
           }]),
           vertexShader: Vl.shadow_vert,
           fragmentShader: Vl.shadow_frag
       }
   };
   function Yl(t, e, n, i, r) {
       const a = new Vs(0);
       let o, s, l = 0, c = null, u = 0, h = null;
       function d(t, e) {
           n.buffers.color.setClear(t.r, t.g, t.b, e, r)
       }
       return {
           getClearColor: function() {
               return a
           },
           setClearColor: function(t, e=1) {
               a.set(t),
               l = e,
               d(a, l)
           },
           getClearAlpha: function() {
               return l
           },
           setClearAlpha: function(t) {
               l = t,
               d(a, l)
           },
           render: function(n, r, p, f) {
               let m = !0 === r.isScene ? r.background : null;
               m && m.isTexture && (m = e.get(m));
               const g = t.xr
                 , v = g.getSession && g.getSession();
               v && "additive" === v.environmentBlendMode && (m = null),
               null === m ? d(a, l) : m && m.isColor && (d(m, 1),
               f = !0),
               (t.autoClear || f) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
               m && (m.isCubeTexture || 306 === m.mapping) ? (void 0 === s && (s = new Sl(new El(1,1,1),new Cl({
                   name: "BackgroundCubeMaterial",
                   uniforms: Ll(jl.cube.uniforms),
                   vertexShader: jl.cube.vertexShader,
                   fragmentShader: jl.cube.fragmentShader,
                   side: 1,
                   depthTest: !1,
                   depthWrite: !1,
                   fog: !1
               })),
               s.geometry.deleteAttribute("normal"),
               s.geometry.deleteAttribute("uv"),
               s.onBeforeRender = function(t, e, n) {
                   this.matrixWorld.copyPosition(n.matrixWorld)
               }
               ,
               Object.defineProperty(s.material, "envMap", {
                   get: function() {
                       return this.uniforms.envMap.value
                   }
               }),
               i.update(s)),
               s.material.uniforms.envMap.value = m,
               s.material.uniforms.flipEnvMap.value = m.isCubeTexture && m._needsFlipEnvMap ? -1 : 1,
               c === m && u === m.version && h === t.toneMapping || (s.material.needsUpdate = !0,
               c = m,
               u = m.version,
               h = t.toneMapping),
               n.unshift(s, s.geometry, s.material, 0, 0, null)) : m && m.isTexture && (void 0 === o && (o = new Sl(new Wl(2,2),new Cl({
                   name: "BackgroundMaterial",
                   uniforms: Ll(jl.background.uniforms),
                   vertexShader: jl.background.vertexShader,
                   fragmentShader: jl.background.fragmentShader,
                   side: 0,
                   depthTest: !1,
                   depthWrite: !1,
                   fog: !1
               })),
               o.geometry.deleteAttribute("normal"),
               Object.defineProperty(o.material, "map", {
                   get: function() {
                       return this.uniforms.t2D.value
                   }
               }),
               i.update(o)),
               o.material.uniforms.t2D.value = m,
               !0 === m.matrixAutoUpdate && m.updateMatrix(),
               o.material.uniforms.uvTransform.value.copy(m.matrix),
               c === m && u === m.version && h === t.toneMapping || (o.material.needsUpdate = !0,
               c = m,
               u = m.version,
               h = t.toneMapping),
               n.unshift(o, o.geometry, o.material, 0, 0, null))
           }
       }
   }
   function Xl(t, e, n, i) {
       const r = t.getParameter(34921)
         , a = i.isWebGL2 ? null : e.get("OES_vertex_array_object")
         , o = i.isWebGL2 || null !== a
         , s = {}
         , l = d(null);
       let c = l;
       function u(e) {
           return i.isWebGL2 ? t.bindVertexArray(e) : a.bindVertexArrayOES(e)
       }
       function h(e) {
           return i.isWebGL2 ? t.deleteVertexArray(e) : a.deleteVertexArrayOES(e)
       }
       function d(t) {
           const e = []
             , n = []
             , i = [];
           for (let t = 0; t < r; t++)
               e[t] = 0,
               n[t] = 0,
               i[t] = 0;
           return {
               geometry: null,
               program: null,
               wireframe: !1,
               newAttributes: e,
               enabledAttributes: n,
               attributeDivisors: i,
               object: t,
               attributes: {},
               index: null
           }
       }
       function p() {
           const t = c.newAttributes;
           for (let e = 0, n = t.length; e < n; e++)
               t[e] = 0
       }
       function f(t) {
           m(t, 0)
       }
       function m(n, r) {
           const a = c.newAttributes
             , o = c.enabledAttributes
             , s = c.attributeDivisors;
           if (a[n] = 1,
           0 === o[n] && (t.enableVertexAttribArray(n),
           o[n] = 1),
           s[n] !== r) {
               (i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r),
               s[n] = r
           }
       }
       function g() {
           const e = c.newAttributes
             , n = c.enabledAttributes;
           for (let i = 0, r = n.length; i < r; i++)
               n[i] !== e[i] && (t.disableVertexAttribArray(i),
               n[i] = 0)
       }
       function v(e, n, r, a, o, s) {
           !0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? t.vertexAttribPointer(e, n, r, a, o, s) : t.vertexAttribIPointer(e, n, r, o, s)
       }
       function _() {
           x(),
           c !== l && (c = l,
           u(c.object))
       }
       function x() {
           l.geometry = null,
           l.program = null,
           l.wireframe = !1
       }
       return {
           setup: function(r, l, h, _, x) {
               let y = !1;
               if (o) {
                   const e = function(e, n, r) {
                       const o = !0 === r.wireframe;
                       let l = s[e.id];
                       void 0 === l && (l = {},
                       s[e.id] = l);
                       let c = l[n.id];
                       void 0 === c && (c = {},
                       l[n.id] = c);
                       let u = c[o];
                       void 0 === u && (u = d(i.isWebGL2 ? t.createVertexArray() : a.createVertexArrayOES()),
                       c[o] = u);
                       return u
                   }(_, h, l);
                   c !== e && (c = e,
                   u(c.object)),
                   y = function(t, e) {
                       const n = c.attributes
                         , i = t.attributes;
                       let r = 0;
                       for (const t in i) {
                           const e = n[t]
                             , a = i[t];
                           if (void 0 === e)
                               return !0;
                           if (e.attribute !== a)
                               return !0;
                           if (e.data !== a.data)
                               return !0;
                           r++
                       }
                       return c.attributesNum !== r || c.index !== e
                   }(_, x),
                   y && function(t, e) {
                       const n = {}
                         , i = t.attributes;
                       let r = 0;
                       for (const t in i) {
                           const e = i[t]
                             , a = {};
                           a.attribute = e,
                           e.data && (a.data = e.data),
                           n[t] = a,
                           r++
                       }
                       c.attributes = n,
                       c.attributesNum = r,
                       c.index = e
                   }(_, x)
               } else {
                   const t = !0 === l.wireframe;
                   c.geometry === _.id && c.program === h.id && c.wireframe === t || (c.geometry = _.id,
                   c.program = h.id,
                   c.wireframe = t,
                   y = !0)
               }
               !0 === r.isInstancedMesh && (y = !0),
               null !== x && n.update(x, 34963),
               y && (!function(r, a, o, s) {
                   if (!1 === i.isWebGL2 && (r.isInstancedMesh || s.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays"))
                       return;
                   p();
                   const l = s.attributes
                     , c = o.getAttributes()
                     , u = a.defaultAttributeValues;
                   for (const e in c) {
                       const i = c[e];
                       if (i >= 0) {
                           const a = l[e];
                           if (void 0 !== a) {
                               const e = a.normalized
                                 , r = a.itemSize
                                 , o = n.get(a);
                               if (void 0 === o)
                                   continue;
                               const l = o.buffer
                                 , c = o.type
                                 , u = o.bytesPerElement;
                               if (a.isInterleavedBufferAttribute) {
                                   const n = a.data
                                     , o = n.stride
                                     , h = a.offset;
                                   n && n.isInstancedInterleavedBuffer ? (m(i, n.meshPerAttribute),
                                   void 0 === s._maxInstanceCount && (s._maxInstanceCount = n.meshPerAttribute * n.count)) : f(i),
                                   t.bindBuffer(34962, l),
                                   v(i, r, c, e, o * u, h * u)
                               } else
                                   a.isInstancedBufferAttribute ? (m(i, a.meshPerAttribute),
                                   void 0 === s._maxInstanceCount && (s._maxInstanceCount = a.meshPerAttribute * a.count)) : f(i),
                                   t.bindBuffer(34962, l),
                                   v(i, r, c, e, 0, 0)
                           } else if ("instanceMatrix" === e) {
                               const e = n.get(r.instanceMatrix);
                               if (void 0 === e)
                                   continue;
                               const a = e.buffer
                                 , o = e.type;
                               m(i + 0, 1),
                               m(i + 1, 1),
                               m(i + 2, 1),
                               m(i + 3, 1),
                               t.bindBuffer(34962, a),
                               t.vertexAttribPointer(i + 0, 4, o, !1, 64, 0),
                               t.vertexAttribPointer(i + 1, 4, o, !1, 64, 16),
                               t.vertexAttribPointer(i + 2, 4, o, !1, 64, 32),
                               t.vertexAttribPointer(i + 3, 4, o, !1, 64, 48)
                           } else if ("instanceColor" === e) {
                               const e = n.get(r.instanceColor);
                               if (void 0 === e)
                                   continue;
                               const a = e.buffer
                                 , o = e.type;
                               m(i, 1),
                               t.bindBuffer(34962, a),
                               t.vertexAttribPointer(i, 3, o, !1, 12, 0)
                           } else if (void 0 !== u) {
                               const n = u[e];
                               if (void 0 !== n)
                                   switch (n.length) {
                                   case 2:
                                       t.vertexAttrib2fv(i, n);
                                       break;
                                   case 3:
                                       t.vertexAttrib3fv(i, n);
                                       break;
                                   case 4:
                                       t.vertexAttrib4fv(i, n);
                                       break;
                                   default:
                                       t.vertexAttrib1fv(i, n)
                                   }
                           }
                       }
                   }
                   g()
               }(r, l, h, _),
               null !== x && t.bindBuffer(34963, n.get(x).buffer))
           },
           reset: _,
           resetDefaultState: x,
           dispose: function() {
               _();
               for (const t in s) {
                   const e = s[t];
                   for (const t in e) {
                       const n = e[t];
                       for (const t in n)
                           h(n[t].object),
                           delete n[t];
                       delete e[t]
                   }
                   delete s[t]
               }
           },
           releaseStatesOfGeometry: function(t) {
               if (void 0 === s[t.id])
                   return;
               const e = s[t.id];
               for (const t in e) {
                   const n = e[t];
                   for (const t in n)
                       h(n[t].object),
                       delete n[t];
                   delete e[t]
               }
               delete s[t.id]
           },
           releaseStatesOfProgram: function(t) {
               for (const e in s) {
                   const n = s[e];
                   if (void 0 === n[t.id])
                       continue;
                   const i = n[t.id];
                   for (const t in i)
                       h(i[t].object),
                       delete i[t];
                   delete n[t.id]
               }
           },
           initAttributes: p,
           enableAttribute: f,
           disableUnusedAttributes: g
       }
   }
   function Zl(t, e, n, i) {
       const r = i.isWebGL2;
       let a;
       this.setMode = function(t) {
           a = t
       }
       ,
       this.render = function(e, i) {
           t.drawArrays(a, e, i),
           n.update(i, a, 1)
       }
       ,
       this.renderInstances = function(i, o, s) {
           if (0 === s)
               return;
           let l, c;
           if (r)
               l = t,
               c = "drawArraysInstanced";
           else if (l = e.get("ANGLE_instanced_arrays"),
           c = "drawArraysInstancedANGLE",
           null === l)
               return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
           l[c](a, i, o, s),
           n.update(o, a, s)
       }
   }
   function Jl(t, e, n) {
       let i;
       function r(e) {
           if ("highp" === e) {
               if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0)
                   return "highp";
               e = "mediump"
           }
           return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
       }
       const a = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext;
       let o = void 0 !== n.precision ? n.precision : "highp";
       const s = r(o);
       s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."),
       o = s);
       const l = !0 === n.logarithmicDepthBuffer
         , c = t.getParameter(34930)
         , u = t.getParameter(35660)
         , h = t.getParameter(3379)
         , d = t.getParameter(34076)
         , p = t.getParameter(34921)
         , f = t.getParameter(36347)
         , m = t.getParameter(36348)
         , g = t.getParameter(36349)
         , v = u > 0
         , _ = a || e.has("OES_texture_float");
       return {
           isWebGL2: a,
           getMaxAnisotropy: function() {
               if (void 0 !== i)
                   return i;
               if (!0 === e.has("EXT_texture_filter_anisotropic")) {
                   const n = e.get("EXT_texture_filter_anisotropic");
                   i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
               } else
                   i = 0;
               return i
           },
           getMaxPrecision: r,
           precision: o,
           logarithmicDepthBuffer: l,
           maxTextures: c,
           maxVertexTextures: u,
           maxTextureSize: h,
           maxCubemapSize: d,
           maxAttributes: p,
           maxVertexUniforms: f,
           maxVaryings: m,
           maxFragmentUniforms: g,
           vertexTextures: v,
           floatFragmentTextures: _,
           floatVertexTextures: v && _,
           maxSamples: a ? t.getParameter(36183) : 0
       }
   }
   function Ql(t) {
       const e = this;
       let n = null
         , i = 0
         , r = !1
         , a = !1;
       const o = new Ss
         , s = new lo
         , l = {
           value: null,
           needsUpdate: !1
       };
       function c() {
           l.value !== n && (l.value = n,
           l.needsUpdate = i > 0),
           e.numPlanes = i,
           e.numIntersection = 0
       }
       function u(t, n, i, r) {
           const a = null !== t ? t.length : 0;
           let c = null;
           if (0 !== a) {
               if (c = l.value,
               !0 !== r || null === c) {
                   const e = i + 4 * a
                     , r = n.matrixWorldInverse;
                   s.getNormalMatrix(r),
                   (null === c || c.length < e) && (c = new Float32Array(e));
                   for (let e = 0, n = i; e !== a; ++e,
                   n += 4)
                       o.copy(t[e]).applyMatrix4(r, s),
                       o.normal.toArray(c, n),
                       c[n + 3] = o.constant
               }
               l.value = c,
               l.needsUpdate = !0
           }
           return e.numPlanes = a,
           e.numIntersection = 0,
           c
       }
       this.uniform = l,
       this.numPlanes = 0,
       this.numIntersection = 0,
       this.init = function(t, e, a) {
           const o = 0 !== t.length || e || 0 !== i || r;
           return r = e,
           n = u(t, a, 0),
           i = t.length,
           o
       }
       ,
       this.beginShadows = function() {
           a = !0,
           u(null)
       }
       ,
       this.endShadows = function() {
           a = !1,
           c()
       }
       ,
       this.setState = function(e, o, s) {
           const h = e.clippingPlanes
             , d = e.clipIntersection
             , p = e.clipShadows
             , f = t.get(e);
           if (!r || null === h || 0 === h.length || a && !p)
               a ? u(null) : c();
           else {
               const t = a ? 0 : i
                 , e = 4 * t;
               let r = f.clippingState || null;
               l.value = r,
               r = u(h, o, e, s);
               for (let t = 0; t !== e; ++t)
                   r[t] = n[t];
               f.clippingState = r,
               this.numIntersection = d ? this.numPlanes : 0,
               this.numPlanes += t
           }
       }
   }
   function Kl(t) {
       let e = new WeakMap;
       function n(t, e) {
           return 303 === e ? t.mapping = 301 : 304 === e && (t.mapping = 302),
           t
       }
       function i(t) {
           const n = t.target;
           n.removeEventListener("dispose", i);
           const r = e.get(n);
           void 0 !== r && (e.delete(n),
           r.dispose())
       }
       return {
           get: function(r) {
               if (r && r.isTexture) {
                   const a = r.mapping;
                   if (303 === a || 304 === a) {
                       if (e.has(r)) {
                           return n(e.get(r).texture, r.mapping)
                       }
                       {
                           const a = r.image;
                           if (a && a.height > 0) {
                               const o = t.getRenderTarget()
                                 , s = new zl(a.height / 2);
                               return s.fromEquirectangularTexture(t, r),
                               e.set(r, s),
                               t.setRenderTarget(o),
                               r.addEventListener("dispose", i),
                               n(s.texture, r.mapping)
                           }
                           return null
                       }
                   }
               }
               return r
           },
           dispose: function() {
               e = new WeakMap
           }
       }
   }
   function $l(t) {
       const e = {};
       function n(n) {
           if (void 0 !== e[n])
               return e[n];
           let i;
           switch (n) {
           case "WEBGL_depth_texture":
               i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
               break;
           case "EXT_texture_filter_anisotropic":
               i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
               break;
           case "WEBGL_compressed_texture_s3tc":
               i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
               break;
           case "WEBGL_compressed_texture_pvrtc":
               i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
               break;
           default:
               i = t.getExtension(n)
           }
           return e[n] = i,
           i
       }
       return {
           has: function(t) {
               return null !== n(t)
           },
           init: function(t) {
               t.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"),
               n("OES_texture_float"),
               n("OES_texture_half_float"),
               n("OES_texture_half_float_linear"),
               n("OES_standard_derivatives"),
               n("OES_element_index_uint"),
               n("OES_vertex_array_object"),
               n("ANGLE_instanced_arrays")),
               n("OES_texture_float_linear"),
               n("EXT_color_buffer_half_float")
           },
           get: function(t) {
               const e = n(t);
               return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."),
               e
           }
       }
   }
   function tc(t, e, n, i) {
       const r = {}
         , a = new WeakMap;
       function o(t) {
           const s = t.target;
           null !== s.index && e.remove(s.index);
           for (const t in s.attributes)
               e.remove(s.attributes[t]);
           s.removeEventListener("dispose", o),
           delete r[s.id];
           const l = a.get(s);
           l && (e.remove(l),
           a.delete(s)),
           i.releaseStatesOfGeometry(s),
           !0 === s.isInstancedBufferGeometry && delete s._maxInstanceCount,
           n.memory.geometries--
       }
       function s(t) {
           const n = []
             , i = t.index
             , r = t.attributes.position;
           let o = 0;
           if (null !== i) {
               const t = i.array;
               o = i.version;
               for (let e = 0, i = t.length; e < i; e += 3) {
                   const i = t[e + 0]
                     , r = t[e + 1]
                     , a = t[e + 2];
                   n.push(i, r, r, a, a, i)
               }
           } else {
               const t = r.array;
               o = r.version;
               for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
                   const t = e + 0
                     , i = e + 1
                     , r = e + 2;
                   n.push(t, i, i, r, r, t)
               }
           }
           const s = new (Ks(n) > 65535 ? Js : Zs)(n,1);
           s.version = o;
           const l = a.get(t);
           l && e.remove(l),
           a.set(t, s)
       }
       return {
           get: function(t, e) {
               return !0 === r[e.id] || (e.addEventListener("dispose", o),
               r[e.id] = !0,
               n.memory.geometries++),
               e
           },
           update: function(t) {
               const n = t.attributes;
               for (const t in n)
                   e.update(n[t], 34962);
               const i = t.morphAttributes;
               for (const t in i) {
                   const n = i[t];
                   for (let t = 0, i = n.length; t < i; t++)
                       e.update(n[t], 34962)
               }
           },
           getWireframeAttribute: function(t) {
               const e = a.get(t);
               if (e) {
                   const n = t.index;
                   null !== n && e.version < n.version && s(t)
               } else
                   s(t);
               return a.get(t)
           }
       }
   }
   function ec(t, e, n, i) {
       const r = i.isWebGL2;
       let a, o, s;
       this.setMode = function(t) {
           a = t
       }
       ,
       this.setIndex = function(t) {
           o = t.type,
           s = t.bytesPerElement
       }
       ,
       this.render = function(e, i) {
           t.drawElements(a, i, o, e * s),
           n.update(i, a, 1)
       }
       ,
       this.renderInstances = function(i, l, c) {
           if (0 === c)
               return;
           let u, h;
           if (r)
               u = t,
               h = "drawElementsInstanced";
           else if (u = e.get("ANGLE_instanced_arrays"),
           h = "drawElementsInstancedANGLE",
           null === u)
               return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
           u[h](a, l, o, i * s, c),
           n.update(l, a, c)
       }
   }
   function nc(t) {
       const e = {
           frame: 0,
           calls: 0,
           triangles: 0,
           points: 0,
           lines: 0
       };
       return {
           memory: {
               geometries: 0,
               textures: 0
           },
           render: e,
           programs: null,
           autoReset: !0,
           reset: function() {
               e.frame++,
               e.calls = 0,
               e.triangles = 0,
               e.points = 0,
               e.lines = 0
           },
           update: function(t, n, i) {
               switch (e.calls++,
               n) {
               case 4:
                   e.triangles += i * (t / 3);
                   break;
               case 1:
                   e.lines += i * (t / 2);
                   break;
               case 3:
                   e.lines += i * (t - 1);
                   break;
               case 2:
                   e.lines += i * t;
                   break;
               case 0:
                   e.points += i * t;
                   break;
               default:
                   console.error("THREE.WebGLInfo: Unknown draw mode:", n)
               }
           }
       }
   }
   function ic(t, e) {
       return t[0] - e[0]
   }
   function rc(t, e) {
       return Math.abs(e[1]) - Math.abs(t[1])
   }
   function ac(t) {
       const e = {}
         , n = new Float32Array(8)
         , i = [];
       for (let t = 0; t < 8; t++)
           i[t] = [t, 0];
       return {
           update: function(r, a, o, s) {
               const l = r.morphTargetInfluences
                 , c = void 0 === l ? 0 : l.length;
               let u = e[a.id];
               if (void 0 === u) {
                   u = [];
                   for (let t = 0; t < c; t++)
                       u[t] = [t, 0];
                   e[a.id] = u
               }
               for (let t = 0; t < c; t++) {
                   const e = u[t];
                   e[0] = t,
                   e[1] = l[t]
               }
               u.sort(rc);
               for (let t = 0; t < 8; t++)
                   t < c && u[t][1] ? (i[t][0] = u[t][0],
                   i[t][1] = u[t][1]) : (i[t][0] = Number.MAX_SAFE_INTEGER,
                   i[t][1] = 0);
               i.sort(ic);
               const h = o.morphTargets && a.morphAttributes.position
                 , d = o.morphNormals && a.morphAttributes.normal;
               let p = 0;
               for (let t = 0; t < 8; t++) {
                   const e = i[t]
                     , r = e[0]
                     , o = e[1];
                   r !== Number.MAX_SAFE_INTEGER && o ? (h && a.getAttribute("morphTarget" + t) !== h[r] && a.setAttribute("morphTarget" + t, h[r]),
                   d && a.getAttribute("morphNormal" + t) !== d[r] && a.setAttribute("morphNormal" + t, d[r]),
                   n[t] = o,
                   p += o) : (h && !0 === a.hasAttribute("morphTarget" + t) && a.deleteAttribute("morphTarget" + t),
                   d && !0 === a.hasAttribute("morphNormal" + t) && a.deleteAttribute("morphNormal" + t),
                   n[t] = 0)
               }
               const f = a.morphTargetsRelative ? 1 : 1 - p;
               s.getUniforms().setValue(t, "morphTargetBaseInfluence", f),
               s.getUniforms().setValue(t, "morphTargetInfluences", n)
           }
       }
   }
   function oc(t, e, n, i) {
       let r = new WeakMap;
       function a(t) {
           const e = t.target;
           e.removeEventListener("dispose", a),
           n.remove(e.instanceMatrix),
           null !== e.instanceColor && n.remove(e.instanceColor)
       }
       return {
           update: function(t) {
               const o = i.render.frame
                 , s = t.geometry
                 , l = e.get(t, s);
               return r.get(l) !== o && (e.update(l),
               r.set(l, o)),
               t.isInstancedMesh && (!1 === t.hasEventListener("dispose", a) && t.addEventListener("dispose", a),
               n.update(t.instanceMatrix, 34962),
               null !== t.instanceColor && n.update(t.instanceColor, 34962)),
               l
           },
           dispose: function() {
               r = new WeakMap
           }
       }
   }
   jl.physical = {
       uniforms: Al([jl.standard.uniforms, {
           clearcoat: {
               value: 0
           },
           clearcoatMap: {
               value: null
           },
           clearcoatRoughness: {
               value: 0
           },
           clearcoatRoughnessMap: {
               value: null
           },
           clearcoatNormalScale: {
               value: new so(1,1)
           },
           clearcoatNormalMap: {
               value: null
           },
           sheen: {
               value: new Vs(0)
           },
           transmission: {
               value: 0
           },
           transmissionMap: {
               value: null
           }
       }]),
       vertexShader: Vl.meshphysical_vert,
       fragmentShader: Vl.meshphysical_frag
   };
   class sc extends po {
       constructor(t=null, e=1, n=1, i=1) {
           super(null),
           this.image = {
               data: t,
               width: e,
               height: n,
               depth: i
           },
           this.magFilter = Oa,
           this.minFilter = Oa,
           this.wrapR = Da,
           this.generateMipmaps = !1,
           this.flipY = !1,
           this.unpackAlignment = 1,
           this.needsUpdate = !0
       }
   }
   sc.prototype.isDataTexture2DArray = !0;
   class lc extends po {
       constructor(t=null, e=1, n=1, i=1) {
           super(null),
           this.image = {
               data: t,
               width: e,
               height: n,
               depth: i
           },
           this.magFilter = Oa,
           this.minFilter = Oa,
           this.wrapR = Da,
           this.generateMipmaps = !1,
           this.flipY = !1,
           this.unpackAlignment = 1,
           this.needsUpdate = !0
       }
   }
   lc.prototype.isDataTexture3D = !0;
   const cc = new po
     , uc = new sc
     , hc = new lc
     , dc = new Nl
     , pc = []
     , fc = []
     , mc = new Float32Array(16)
     , gc = new Float32Array(9)
     , vc = new Float32Array(4);
   function _c(t, e, n) {
       const i = t[0];
       if (i <= 0 || i > 0)
           return t;
       const r = e * n;
       let a = pc[r];
       if (void 0 === a && (a = new Float32Array(r),
       pc[r] = a),
       0 !== e) {
           i.toArray(a, 0);
           for (let i = 1, r = 0; i !== e; ++i)
               r += n,
               t[i].toArray(a, r)
       }
       return a
   }
   function xc(t, e) {
       if (t.length !== e.length)
           return !1;
       for (let n = 0, i = t.length; n < i; n++)
           if (t[n] !== e[n])
               return !1;
       return !0
   }
   function yc(t, e) {
       for (let n = 0, i = e.length; n < i; n++)
           t[n] = e[n]
   }
   function wc(t, e) {
       let n = fc[e];
       void 0 === n && (n = new Int32Array(e),
       fc[e] = n);
       for (let i = 0; i !== e; ++i)
           n[i] = t.allocateTextureUnit();
       return n
   }
   function bc(t, e) {
       const n = this.cache;
       n[0] !== e && (t.uniform1f(this.addr, e),
       n[0] = e)
   }
   function Mc(t, e) {
       const n = this.cache;
       if (void 0 !== e.x)
           n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y),
           n[0] = e.x,
           n[1] = e.y);
       else {
           if (xc(n, e))
               return;
           t.uniform2fv(this.addr, e),
           yc(n, e)
       }
   }
   function Sc(t, e) {
       const n = this.cache;
       if (void 0 !== e.x)
           n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z),
           n[0] = e.x,
           n[1] = e.y,
           n[2] = e.z);
       else if (void 0 !== e.r)
           n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b),
           n[0] = e.r,
           n[1] = e.g,
           n[2] = e.b);
       else {
           if (xc(n, e))
               return;
           t.uniform3fv(this.addr, e),
           yc(n, e)
       }
   }
   function Tc(t, e) {
       const n = this.cache;
       if (void 0 !== e.x)
           n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
           n[0] = e.x,
           n[1] = e.y,
           n[2] = e.z,
           n[3] = e.w);
       else {
           if (xc(n, e))
               return;
           t.uniform4fv(this.addr, e),
           yc(n, e)
       }
   }
   function Ec(t, e) {
       const n = this.cache
         , i = e.elements;
       if (void 0 === i) {
           if (xc(n, e))
               return;
           t.uniformMatrix2fv(this.addr, !1, e),
           yc(n, e)
       } else {
           if (xc(n, i))
               return;
           vc.set(i),
           t.uniformMatrix2fv(this.addr, !1, vc),
           yc(n, i)
       }
   }
   function Lc(t, e) {
       const n = this.cache
         , i = e.elements;
       if (void 0 === i) {
           if (xc(n, e))
               return;
           t.uniformMatrix3fv(this.addr, !1, e),
           yc(n, e)
       } else {
           if (xc(n, i))
               return;
           gc.set(i),
           t.uniformMatrix3fv(this.addr, !1, gc),
           yc(n, i)
       }
   }
   function Ac(t, e) {
       const n = this.cache
         , i = e.elements;
       if (void 0 === i) {
           if (xc(n, e))
               return;
           t.uniformMatrix4fv(this.addr, !1, e),
           yc(n, e)
       } else {
           if (xc(n, i))
               return;
           mc.set(i),
           t.uniformMatrix4fv(this.addr, !1, mc),
           yc(n, i)
       }
   }
   function Rc(t, e) {
       const n = this.cache;
       n[0] !== e && (t.uniform1i(this.addr, e),
       n[0] = e)
   }
   function Cc(t, e) {
       const n = this.cache;
       xc(n, e) || (t.uniform2iv(this.addr, e),
       yc(n, e))
   }
   function Pc(t, e) {
       const n = this.cache;
       xc(n, e) || (t.uniform3iv(this.addr, e),
       yc(n, e))
   }
   function Dc(t, e) {
       const n = this.cache;
       xc(n, e) || (t.uniform4iv(this.addr, e),
       yc(n, e))
   }
   function Ic(t, e) {
       const n = this.cache;
       n[0] !== e && (t.uniform1ui(this.addr, e),
       n[0] = e)
   }
   function Oc(t, e) {
       const n = this.cache;
       xc(n, e) || (t.uniform2uiv(this.addr, e),
       yc(n, e))
   }
   function Nc(t, e) {
       const n = this.cache;
       xc(n, e) || (t.uniform3uiv(this.addr, e),
       yc(n, e))
   }
   function zc(t, e) {
       const n = this.cache;
       xc(n, e) || (t.uniform4uiv(this.addr, e),
       yc(n, e))
   }
   function Fc(t, e, n) {
       const i = this.cache
         , r = n.allocateTextureUnit();
       i[0] !== r && (t.uniform1i(this.addr, r),
       i[0] = r),
       n.safeSetTexture2D(e || cc, r)
   }
   function Hc(t, e, n) {
       const i = this.cache
         , r = n.allocateTextureUnit();
       i[0] !== r && (t.uniform1i(this.addr, r),
       i[0] = r),
       n.setTexture3D(e || hc, r)
   }
   function Bc(t, e, n) {
       const i = this.cache
         , r = n.allocateTextureUnit();
       i[0] !== r && (t.uniform1i(this.addr, r),
       i[0] = r),
       n.safeSetTextureCube(e || dc, r)
   }
   function kc(t, e, n) {
       const i = this.cache
         , r = n.allocateTextureUnit();
       i[0] !== r && (t.uniform1i(this.addr, r),
       i[0] = r),
       n.setTexture2DArray(e || uc, r)
   }
   function Uc(t, e) {
       t.uniform1fv(this.addr, e)
   }
   function Gc(t, e) {
       const n = _c(e, this.size, 2);
       t.uniform2fv(this.addr, n)
   }
   function Wc(t, e) {
       const n = _c(e, this.size, 3);
       t.uniform3fv(this.addr, n)
   }
   function Vc(t, e) {
       const n = _c(e, this.size, 4);
       t.uniform4fv(this.addr, n)
   }
   function qc(t, e) {
       const n = _c(e, this.size, 4);
       t.uniformMatrix2fv(this.addr, !1, n)
   }
   function jc(t, e) {
       const n = _c(e, this.size, 9);
       t.uniformMatrix3fv(this.addr, !1, n)
   }
   function Yc(t, e) {
       const n = _c(e, this.size, 16);
       t.uniformMatrix4fv(this.addr, !1, n)
   }
   function Xc(t, e) {
       t.uniform1iv(this.addr, e)
   }
   function Zc(t, e) {
       t.uniform2iv(this.addr, e)
   }
   function Jc(t, e) {
       t.uniform3iv(this.addr, e)
   }
   function Qc(t, e) {
       t.uniform4iv(this.addr, e)
   }
   function Kc(t, e) {
       t.uniform1uiv(this.addr, e)
   }
   function $c(t, e) {
       t.uniform2uiv(this.addr, e)
   }
   function tu(t, e) {
       t.uniform3uiv(this.addr, e)
   }
   function eu(t, e) {
       t.uniform4uiv(this.addr, e)
   }
   function nu(t, e, n) {
       const i = e.length
         , r = wc(n, i);
       t.uniform1iv(this.addr, r);
       for (let t = 0; t !== i; ++t)
           n.safeSetTexture2D(e[t] || cc, r[t])
   }
   function iu(t, e, n) {
       const i = e.length
         , r = wc(n, i);
       t.uniform1iv(this.addr, r);
       for (let t = 0; t !== i; ++t)
           n.safeSetTextureCube(e[t] || dc, r[t])
   }
   function ru(t, e, n) {
       this.id = t,
       this.addr = n,
       this.cache = [],
       this.setValue = function(t) {
           switch (t) {
           case 5126:
               return bc;
           case 35664:
               return Mc;
           case 35665:
               return Sc;
           case 35666:
               return Tc;
           case 35674:
               return Ec;
           case 35675:
               return Lc;
           case 35676:
               return Ac;
           case 5124:
           case 35670:
               return Rc;
           case 35667:
           case 35671:
               return Cc;
           case 35668:
           case 35672:
               return Pc;
           case 35669:
           case 35673:
               return Dc;
           case 5125:
               return Ic;
           case 36294:
               return Oc;
           case 36295:
               return Nc;
           case 36296:
               return zc;
           case 35678:
           case 36198:
           case 36298:
           case 36306:
           case 35682:
               return Fc;
           case 35679:
           case 36299:
           case 36307:
               return Hc;
           case 35680:
           case 36300:
           case 36308:
           case 36293:
               return Bc;
           case 36289:
           case 36303:
           case 36311:
           case 36292:
               return kc
           }
       }(e.type)
   }
   function au(t, e, n) {
       this.id = t,
       this.addr = n,
       this.cache = [],
       this.size = e.size,
       this.setValue = function(t) {
           switch (t) {
           case 5126:
               return Uc;
           case 35664:
               return Gc;
           case 35665:
               return Wc;
           case 35666:
               return Vc;
           case 35674:
               return qc;
           case 35675:
               return jc;
           case 35676:
               return Yc;
           case 5124:
           case 35670:
               return Xc;
           case 35667:
           case 35671:
               return Zc;
           case 35668:
           case 35672:
               return Jc;
           case 35669:
           case 35673:
               return Qc;
           case 5125:
               return Kc;
           case 36294:
               return $c;
           case 36295:
               return tu;
           case 36296:
               return eu;
           case 35678:
           case 36198:
           case 36298:
           case 36306:
           case 35682:
               return nu;
           case 35680:
           case 36300:
           case 36308:
           case 36293:
               return iu
           }
       }(e.type)
   }
   function ou(t) {
       this.id = t,
       this.seq = [],
       this.map = {}
   }
   au.prototype.updateCache = function(t) {
       const e = this.cache;
       t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)),
       yc(e, t)
   }
   ,
   ou.prototype.setValue = function(t, e, n) {
       const i = this.seq;
       for (let r = 0, a = i.length; r !== a; ++r) {
           const a = i[r];
           a.setValue(t, e[a.id], n)
       }
   }
   ;
   const su = /(\w+)(\])?(\[|\.)?/g;
   function lu(t, e) {
       t.seq.push(e),
       t.map[e.id] = e
   }
   function cu(t, e, n) {
       const i = t.name
         , r = i.length;
       for (su.lastIndex = 0; ; ) {
           const a = su.exec(i)
             , o = su.lastIndex;
           let s = a[1];
           const l = "]" === a[2]
             , c = a[3];
           if (l && (s |= 0),
           void 0 === c || "[" === c && o + 2 === r) {
               lu(n, void 0 === c ? new ru(s,t,e) : new au(s,t,e));
               break
           }
           {
               let t = n.map[s];
               void 0 === t && (t = new ou(s),
               lu(n, t)),
               n = t
           }
       }
   }
   function uu(t, e) {
       this.seq = [],
       this.map = {};
       const n = t.getProgramParameter(e, 35718);
       for (let i = 0; i < n; ++i) {
           const n = t.getActiveUniform(e, i);
           cu(n, t.getUniformLocation(e, n.name), this)
       }
   }
   function hu(t, e, n) {
       const i = t.createShader(e);
       return t.shaderSource(i, n),
       t.compileShader(i),
       i
   }
   uu.prototype.setValue = function(t, e, n, i) {
       const r = this.map[e];
       void 0 !== r && r.setValue(t, n, i)
   }
   ,
   uu.prototype.setOptional = function(t, e, n) {
       const i = e[n];
       void 0 !== i && this.setValue(t, n, i)
   }
   ,
   uu.upload = function(t, e, n, i) {
       for (let r = 0, a = e.length; r !== a; ++r) {
           const a = e[r]
             , o = n[a.id];
           !1 !== o.needsUpdate && a.setValue(t, o.value, i)
       }
   }
   ,
   uu.seqWithValue = function(t, e) {
       const n = [];
       for (let i = 0, r = t.length; i !== r; ++i) {
           const r = t[i];
           r.id in e && n.push(r)
       }
       return n
   }
   ;
   let du = 0;
   function pu(t) {
       switch (t) {
       case Ya:
           return ["Linear", "( value )"];
       case 3001:
           return ["sRGB", "( value )"];
       case 3002:
           return ["RGBE", "( value )"];
       case 3004:
           return ["RGBM", "( value, 7.0 )"];
       case 3005:
           return ["RGBM", "( value, 16.0 )"];
       case 3006:
           return ["RGBD", "( value, 256.0 )"];
       case 3007:
           return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
       case 3003:
           return ["LogLuv", "( value )"];
       default:
           return console.warn("THREE.WebGLProgram: Unsupported encoding:", t),
           ["Linear", "( value )"]
       }
   }
   function fu(t, e, n) {
       const i = t.getShaderParameter(e, 35713)
         , r = t.getShaderInfoLog(e).trim();
       if (i && "" === r)
           return "";
       return "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + r + function(t) {
           const e = t.split("\n");
           for (let t = 0; t < e.length; t++)
               e[t] = t + 1 + ": " + e[t];
           return e.join("\n")
       }(t.getShaderSource(e))
   }
   function mu(t, e) {
       const n = pu(e);
       return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
   }
   function gu(t, e) {
       const n = pu(e);
       return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
   }
   function vu(t, e) {
       let n;
       switch (e) {
       case 1:
           n = "Linear";
           break;
       case 2:
           n = "Reinhard";
           break;
       case 3:
           n = "OptimizedCineon";
           break;
       case 4:
           n = "ACESFilmic";
           break;
       case 5:
           n = "Custom";
           break;
       default:
           console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
           n = "Linear"
       }
       return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
   }
   function _u(t) {
       return "" !== t
   }
   function xu(t, e) {
       return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
   }
   function yu(t, e) {
       return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
   }
   const wu = /^[ \t]*#include +<([\w\d./]+)>/gm;
   function bu(t) {
       return t.replace(wu, Mu)
   }
   function Mu(t, e) {
       const n = Vl[e];
       if (void 0 === n)
           throw new Error("Can not resolve #include <" + e + ">");
       return bu(n)
   }
   const Su = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g
     , Tu = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
   function Eu(t) {
       return t.replace(Tu, Au).replace(Su, Lu)
   }
   function Lu(t, e, n, i) {
       return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),
       Au(t, e, n, i)
   }
   function Au(t, e, n, i) {
       let r = "";
       for (let t = parseInt(e); t < parseInt(n); t++)
           r += i.replace(/\[\s*i\s*\]/g, "[ " + t + " ]").replace(/UNROLLED_LOOP_INDEX/g, t);
       return r
   }
   function Ru(t) {
       let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
       return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"),
       e
   }
   function Cu(t, e, n, i) {
       const r = t.getContext()
         , a = n.defines;
       let o = n.vertexShader
         , s = n.fragmentShader;
       const l = function(t) {
           let e = "SHADOWMAP_TYPE_BASIC";
           return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"),
           e
       }(n)
         , c = function(t) {
           let e = "ENVMAP_TYPE_CUBE";
           if (t.envMap)
               switch (t.envMapMode) {
               case 301:
               case 302:
                   e = "ENVMAP_TYPE_CUBE";
                   break;
               case 306:
               case 307:
                   e = "ENVMAP_TYPE_CUBE_UV"
               }
           return e
       }(n)
         , u = function(t) {
           let e = "ENVMAP_MODE_REFLECTION";
           if (t.envMap)
               switch (t.envMapMode) {
               case 302:
               case 307:
                   e = "ENVMAP_MODE_REFRACTION"
               }
           return e
       }(n)
         , h = function(t) {
           let e = "ENVMAP_BLENDING_NONE";
           if (t.envMap)
               switch (t.combine) {
               case 0:
                   e = "ENVMAP_BLENDING_MULTIPLY";
                   break;
               case 1:
                   e = "ENVMAP_BLENDING_MIX";
                   break;
               case 2:
                   e = "ENVMAP_BLENDING_ADD"
               }
           return e
       }(n)
         , d = t.gammaFactor > 0 ? t.gammaFactor : 1
         , p = n.isWebGL2 ? "" : function(t) {
           return [t.extensionDerivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(_u).join("\n")
       }(n)
         , f = function(t) {
           const e = [];
           for (const n in t) {
               const i = t[n];
               !1 !== i && e.push("#define " + n + " " + i)
           }
           return e.join("\n")
       }(a)
         , m = r.createProgram();
       let g, v, _ = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
       n.isRawShaderMaterial ? (g = [f].filter(_u).join("\n"),
       g.length > 0 && (g += "\n"),
       v = [p, f].filter(_u).join("\n"),
       v.length > 0 && (v += "\n")) : (g = [Ru(n), "#define SHADER_NAME " + n.shaderName, f, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + d, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + u : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(_u).join("\n"),
       v = [p, Ru(n), "#define SHADER_NAME " + n.shaderName, f, n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + d, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + c : "", n.envMap ? "#define " + u : "", n.envMap ? "#define " + h : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.sheen ? "#define USE_SHEEN" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? Vl.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? vu("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", Vl.encodings_pars_fragment, n.map ? mu("mapTexelToLinear", n.mapEncoding) : "", n.matcap ? mu("matcapTexelToLinear", n.matcapEncoding) : "", n.envMap ? mu("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMap ? mu("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.lightMap ? mu("lightMapTexelToLinear", n.lightMapEncoding) : "", gu("linearToOutputTexel", n.outputEncoding), n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(_u).join("\n")),
       o = bu(o),
       o = xu(o, n),
       o = yu(o, n),
       s = bu(s),
       s = xu(s, n),
       s = yu(s, n),
       o = Eu(o),
       s = Eu(s),
       n.isWebGL2 && !0 !== n.isRawShaderMaterial && (_ = "#version 300 es\n",
       g = ["#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + g,
       v = ["#define varying in", n.glslVersion === Qa ? "" : "out highp vec4 pc_fragColor;", n.glslVersion === Qa ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + v);
       const x = _ + v + s
         , y = hu(r, 35633, _ + g + o)
         , w = hu(r, 35632, x);
       if (r.attachShader(m, y),
       r.attachShader(m, w),
       void 0 !== n.index0AttributeName ? r.bindAttribLocation(m, 0, n.index0AttributeName) : !0 === n.morphTargets && r.bindAttribLocation(m, 0, "position"),
       r.linkProgram(m),
       t.debug.checkShaderErrors) {
           const t = r.getProgramInfoLog(m).trim()
             , e = r.getShaderInfoLog(y).trim()
             , n = r.getShaderInfoLog(w).trim();
           let i = !0
             , a = !0;
           if (!1 === r.getProgramParameter(m, 35714)) {
               i = !1;
               const e = fu(r, y, "vertex")
                 , n = fu(r, w, "fragment");
               console.error("THREE.WebGLProgram: shader error: ", r.getError(), "35715", r.getProgramParameter(m, 35715), "gl.getProgramInfoLog", t, e, n)
           } else
               "" !== t ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", t) : "" !== e && "" !== n || (a = !1);
           a && (this.diagnostics = {
               runnable: i,
               programLog: t,
               vertexShader: {
                   log: e,
                   prefix: g
               },
               fragmentShader: {
                   log: n,
                   prefix: v
               }
           })
       }
       let b, M;
       return r.deleteShader(y),
       r.deleteShader(w),
       this.getUniforms = function() {
           return void 0 === b && (b = new uu(r,m)),
           b
       }
       ,
       this.getAttributes = function() {
           return void 0 === M && (M = function(t, e) {
               const n = {}
                 , i = t.getProgramParameter(e, 35721);
               for (let r = 0; r < i; r++) {
                   const i = t.getActiveAttrib(e, r).name;
                   n[i] = t.getAttribLocation(e, i)
               }
               return n
           }(r, m)),
           M
       }
       ,
       this.destroy = function() {
           i.releaseStatesOfProgram(this),
           r.deleteProgram(m),
           this.program = void 0
       }
       ,
       this.name = n.shaderName,
       this.id = du++,
       this.cacheKey = e,
       this.usedTimes = 1,
       this.program = m,
       this.vertexShader = y,
       this.fragmentShader = w,
       this
   }
   function Pu(t, e, n, i, r, a) {
       const o = []
         , s = i.isWebGL2
         , l = i.logarithmicDepthBuffer
         , c = i.floatVertexTextures
         , u = i.maxVertexUniforms
         , h = i.vertexTextures;
       let d = i.precision;
       const p = {
           MeshDepthMaterial: "depth",
           MeshDistanceMaterial: "distanceRGBA",
           MeshNormalMaterial: "normal",
           MeshBasicMaterial: "basic",
           MeshLambertMaterial: "lambert",
           MeshPhongMaterial: "phong",
           MeshToonMaterial: "toon",
           MeshStandardMaterial: "physical",
           MeshPhysicalMaterial: "physical",
           MeshMatcapMaterial: "matcap",
           LineBasicMaterial: "basic",
           LineDashedMaterial: "dashed",
           PointsMaterial: "points",
           ShadowMaterial: "shadow",
           SpriteMaterial: "sprite"
       }
         , f = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexAlphas", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen", "transmissionMap"];
       function m(t) {
           let e;
           return t && t.isTexture ? e = t.encoding : t && t.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),
           e = t.texture.encoding) : e = Ya,
           e
       }
       return {
           getParameters: function(r, o, f, g, v) {
               const _ = g.fog
                 , x = r.isMeshStandardMaterial ? g.environment : null
                 , y = e.get(r.envMap || x)
                 , w = p[r.type]
                 , b = v.isSkinnedMesh ? function(t) {
                   const e = t.skeleton.bones;
                   if (c)
                       return 1024;
                   {
                       const t = u
                         , n = Math.floor((t - 20) / 4)
                         , i = Math.min(n, e.length);
                       return i < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + i + "."),
                       0) : i
                   }
               }(v) : 0;
               let M, S;
               if (null !== r.precision && (d = i.getMaxPrecision(r.precision),
               d !== r.precision && console.warn("THREE.WebGLProgram.getParameters:", r.precision, "not supported, using", d, "instead.")),
               w) {
                   const t = jl[w];
                   M = t.vertexShader,
                   S = t.fragmentShader
               } else
                   M = r.vertexShader,
                   S = r.fragmentShader;
               const T = t.getRenderTarget();
               return {
                   isWebGL2: s,
                   shaderID: w,
                   shaderName: r.type,
                   vertexShader: M,
                   fragmentShader: S,
                   defines: r.defines,
                   isRawShaderMaterial: !0 === r.isRawShaderMaterial,
                   glslVersion: r.glslVersion,
                   precision: d,
                   instancing: !0 === v.isInstancedMesh,
                   instancingColor: !0 === v.isInstancedMesh && null !== v.instanceColor,
                   supportsVertexTextures: h,
                   outputEncoding: null !== T ? m(T.texture) : t.outputEncoding,
                   map: !!r.map,
                   mapEncoding: m(r.map),
                   matcap: !!r.matcap,
                   matcapEncoding: m(r.matcap),
                   envMap: !!y,
                   envMapMode: y && y.mapping,
                   envMapEncoding: m(y),
                   envMapCubeUV: !!y && (306 === y.mapping || 307 === y.mapping),
                   lightMap: !!r.lightMap,
                   lightMapEncoding: m(r.lightMap),
                   aoMap: !!r.aoMap,
                   emissiveMap: !!r.emissiveMap,
                   emissiveMapEncoding: m(r.emissiveMap),
                   bumpMap: !!r.bumpMap,
                   normalMap: !!r.normalMap,
                   objectSpaceNormalMap: 1 === r.normalMapType,
                   tangentSpaceNormalMap: 0 === r.normalMapType,
                   clearcoatMap: !!r.clearcoatMap,
                   clearcoatRoughnessMap: !!r.clearcoatRoughnessMap,
                   clearcoatNormalMap: !!r.clearcoatNormalMap,
                   displacementMap: !!r.displacementMap,
                   roughnessMap: !!r.roughnessMap,
                   metalnessMap: !!r.metalnessMap,
                   specularMap: !!r.specularMap,
                   alphaMap: !!r.alphaMap,
                   gradientMap: !!r.gradientMap,
                   sheen: !!r.sheen,
                   transmissionMap: !!r.transmissionMap,
                   combine: r.combine,
                   vertexTangents: r.normalMap && r.vertexTangents,
                   vertexColors: r.vertexColors,
                   vertexAlphas: !0 === r.vertexColors && v.geometry && v.geometry.attributes.color && 4 === v.geometry.attributes.color.itemSize,
                   vertexUvs: !!(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatMap || r.clearcoatRoughnessMap || r.clearcoatNormalMap || r.displacementMap || r.transmissionMap),
                   uvsVertexOnly: !(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatNormalMap || r.transmissionMap || !r.displacementMap),
                   fog: !!_,
                   useFog: r.fog,
                   fogExp2: _ && _.isFogExp2,
                   flatShading: !!r.flatShading,
                   sizeAttenuation: r.sizeAttenuation,
                   logarithmicDepthBuffer: l,
                   skinning: r.skinning && b > 0,
                   maxBones: b,
                   useVertexTexture: c,
                   morphTargets: r.morphTargets,
                   morphNormals: r.morphNormals,
                   numDirLights: o.directional.length,
                   numPointLights: o.point.length,
                   numSpotLights: o.spot.length,
                   numRectAreaLights: o.rectArea.length,
                   numHemiLights: o.hemi.length,
                   numDirLightShadows: o.directionalShadowMap.length,
                   numPointLightShadows: o.pointShadowMap.length,
                   numSpotLightShadows: o.spotShadowMap.length,
                   numClippingPlanes: a.numPlanes,
                   numClipIntersection: a.numIntersection,
                   dithering: r.dithering,
                   shadowMapEnabled: t.shadowMap.enabled && f.length > 0,
                   shadowMapType: t.shadowMap.type,
                   toneMapping: r.toneMapped ? t.toneMapping : 0,
                   physicallyCorrectLights: t.physicallyCorrectLights,
                   premultipliedAlpha: r.premultipliedAlpha,
                   alphaTest: r.alphaTest,
                   doubleSided: 2 === r.side,
                   flipSided: 1 === r.side,
                   depthPacking: void 0 !== r.depthPacking && r.depthPacking,
                   index0AttributeName: r.index0AttributeName,
                   extensionDerivatives: r.extensions && r.extensions.derivatives,
                   extensionFragDepth: r.extensions && r.extensions.fragDepth,
                   extensionDrawBuffers: r.extensions && r.extensions.drawBuffers,
                   extensionShaderTextureLOD: r.extensions && r.extensions.shaderTextureLOD,
                   rendererExtensionFragDepth: s || n.has("EXT_frag_depth"),
                   rendererExtensionDrawBuffers: s || n.has("WEBGL_draw_buffers"),
                   rendererExtensionShaderTextureLod: s || n.has("EXT_shader_texture_lod"),
                   customProgramCacheKey: r.customProgramCacheKey()
               }
           },
           getProgramCacheKey: function(e) {
               const n = [];
               if (e.shaderID ? n.push(e.shaderID) : (n.push(e.fragmentShader),
               n.push(e.vertexShader)),
               void 0 !== e.defines)
                   for (const t in e.defines)
                       n.push(t),
                       n.push(e.defines[t]);
               if (!1 === e.isRawShaderMaterial) {
                   for (let t = 0; t < f.length; t++)
                       n.push(e[f[t]]);
                   n.push(t.outputEncoding),
                   n.push(t.gammaFactor)
               }
               return n.push(e.customProgramCacheKey),
               n.join()
           },
           getUniforms: function(t) {
               const e = p[t.type];
               let n;
               if (e) {
                   const t = jl[e];
                   n = Rl.clone(t.uniforms)
               } else
                   n = t.uniforms;
               return n
           },
           acquireProgram: function(e, n) {
               let i;
               for (let t = 0, e = o.length; t < e; t++) {
                   const e = o[t];
                   if (e.cacheKey === n) {
                       i = e,
                       ++i.usedTimes;
                       break
                   }
               }
               return void 0 === i && (i = new Cu(t,n,e,r),
               o.push(i)),
               i
           },
           releaseProgram: function(t) {
               if (0 == --t.usedTimes) {
                   const e = o.indexOf(t);
                   o[e] = o[o.length - 1],
                   o.pop(),
                   t.destroy()
               }
           },
           programs: o
       }
   }
   function Du() {
       let t = new WeakMap;
       return {
           get: function(e) {
               let n = t.get(e);
               return void 0 === n && (n = {},
               t.set(e, n)),
               n
           },
           remove: function(e) {
               t.delete(e)
           },
           update: function(e, n, i) {
               t.get(e)[n] = i
           },
           dispose: function() {
               t = new WeakMap
           }
       }
   }
   function Iu(t, e) {
       return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
   }
   function Ou(t, e) {
       return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
   }
   function Nu(t) {
       const e = [];
       let n = 0;
       const i = []
         , r = []
         , a = {
           id: -1
       };
       function o(i, r, o, s, l, c) {
           let u = e[n];
           const h = t.get(o);
           return void 0 === u ? (u = {
               id: i.id,
               object: i,
               geometry: r,
               material: o,
               program: h.program || a,
               groupOrder: s,
               renderOrder: i.renderOrder,
               z: l,
               group: c
           },
           e[n] = u) : (u.id = i.id,
           u.object = i,
           u.geometry = r,
           u.material = o,
           u.program = h.program || a,
           u.groupOrder = s,
           u.renderOrder = i.renderOrder,
           u.z = l,
           u.group = c),
           n++,
           u
       }
       return {
           opaque: i,
           transparent: r,
           init: function() {
               n = 0,
               i.length = 0,
               r.length = 0
           },
           push: function(t, e, n, a, s, l) {
               const c = o(t, e, n, a, s, l);
               (!0 === n.transparent ? r : i).push(c)
           },
           unshift: function(t, e, n, a, s, l) {
               const c = o(t, e, n, a, s, l);
               (!0 === n.transparent ? r : i).unshift(c)
           },
           finish: function() {
               for (let t = n, i = e.length; t < i; t++) {
                   const n = e[t];
                   if (null === n.id)
                       break;
                   n.id = null,
                   n.object = null,
                   n.geometry = null,
                   n.material = null,
                   n.program = null,
                   n.group = null
               }
           },
           sort: function(t, e) {
               i.length > 1 && i.sort(t || Iu),
               r.length > 1 && r.sort(e || Ou)
           }
       }
   }
   function zu(t) {
       let e = new WeakMap;
       return {
           get: function(n, i) {
               let r;
               return !1 === e.has(n) ? (r = new Nu(t),
               e.set(n, [r])) : i >= e.get(n).length ? (r = new Nu(t),
               e.get(n).push(r)) : r = e.get(n)[i],
               r
           },
           dispose: function() {
               e = new WeakMap
           }
       }
   }
   function Fu() {
       const t = {};
       return {
           get: function(e) {
               if (void 0 !== t[e.id])
                   return t[e.id];
               let n;
               switch (e.type) {
               case "DirectionalLight":
                   n = {
                       direction: new _o,
                       color: new Vs
                   };
                   break;
               case "SpotLight":
                   n = {
                       position: new _o,
                       direction: new _o,
                       color: new Vs,
                       distance: 0,
                       coneCos: 0,
                       penumbraCos: 0,
                       decay: 0
                   };
                   break;
               case "PointLight":
                   n = {
                       position: new _o,
                       color: new Vs,
                       distance: 0,
                       decay: 0
                   };
                   break;
               case "HemisphereLight":
                   n = {
                       direction: new _o,
                       skyColor: new Vs,
                       groundColor: new Vs
                   };
                   break;
               case "RectAreaLight":
                   n = {
                       color: new Vs,
                       position: new _o,
                       halfWidth: new _o,
                       halfHeight: new _o
                   }
               }
               return t[e.id] = n,
               n
           }
       }
   }
   let Hu = 0;
   function Bu(t, e) {
       return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0)
   }
   function ku(t, e) {
       const n = new Fu
         , i = function() {
           const t = {};
           return {
               get: function(e) {
                   if (void 0 !== t[e.id])
                       return t[e.id];
                   let n;
                   switch (e.type) {
                   case "DirectionalLight":
                   case "SpotLight":
                       n = {
                           shadowBias: 0,
                           shadowNormalBias: 0,
                           shadowRadius: 1,
                           shadowMapSize: new so
                       };
                       break;
                   case "PointLight":
                       n = {
                           shadowBias: 0,
                           shadowNormalBias: 0,
                           shadowRadius: 1,
                           shadowMapSize: new so,
                           shadowCameraNear: 1,
                           shadowCameraFar: 1e3
                       }
                   }
                   return t[e.id] = n,
                   n
               }
           }
       }()
         , r = {
           version: 0,
           hash: {
               directionalLength: -1,
               pointLength: -1,
               spotLength: -1,
               rectAreaLength: -1,
               hemiLength: -1,
               numDirectionalShadows: -1,
               numPointShadows: -1,
               numSpotShadows: -1
           },
           ambient: [0, 0, 0],
           probe: [],
           directional: [],
           directionalShadow: [],
           directionalShadowMap: [],
           directionalShadowMatrix: [],
           spot: [],
           spotShadow: [],
           spotShadowMap: [],
           spotShadowMatrix: [],
           rectArea: [],
           rectAreaLTC1: null,
           rectAreaLTC2: null,
           point: [],
           pointShadow: [],
           pointShadowMap: [],
           pointShadowMatrix: [],
           hemi: []
       };
       for (let t = 0; t < 9; t++)
           r.probe.push(new _o);
       const a = new _o
         , o = new Zo
         , s = new Zo;
       return {
           setup: function(a) {
               let o = 0
                 , s = 0
                 , l = 0;
               for (let t = 0; t < 9; t++)
                   r.probe[t].set(0, 0, 0);
               let c = 0
                 , u = 0
                 , h = 0
                 , d = 0
                 , p = 0
                 , f = 0
                 , m = 0
                 , g = 0;
               a.sort(Bu);
               for (let t = 0, e = a.length; t < e; t++) {
                   const e = a[t]
                     , v = e.color
                     , _ = e.intensity
                     , x = e.distance
                     , y = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
                   if (e.isAmbientLight)
                       o += v.r * _,
                       s += v.g * _,
                       l += v.b * _;
                   else if (e.isLightProbe)
                       for (let t = 0; t < 9; t++)
                           r.probe[t].addScaledVector(e.sh.coefficients[t], _);
                   else if (e.isDirectionalLight) {
                       const t = n.get(e);
                       if (t.color.copy(e.color).multiplyScalar(e.intensity),
                       e.castShadow) {
                           const t = e.shadow
                             , n = i.get(e);
                           n.shadowBias = t.bias,
                           n.shadowNormalBias = t.normalBias,
                           n.shadowRadius = t.radius,
                           n.shadowMapSize = t.mapSize,
                           r.directionalShadow[c] = n,
                           r.directionalShadowMap[c] = y,
                           r.directionalShadowMatrix[c] = e.shadow.matrix,
                           f++
                       }
                       r.directional[c] = t,
                       c++
                   } else if (e.isSpotLight) {
                       const t = n.get(e);
                       if (t.position.setFromMatrixPosition(e.matrixWorld),
                       t.color.copy(v).multiplyScalar(_),
                       t.distance = x,
                       t.coneCos = Math.cos(e.angle),
                       t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)),
                       t.decay = e.decay,
                       e.castShadow) {
                           const t = e.shadow
                             , n = i.get(e);
                           n.shadowBias = t.bias,
                           n.shadowNormalBias = t.normalBias,
                           n.shadowRadius = t.radius,
                           n.shadowMapSize = t.mapSize,
                           r.spotShadow[h] = n,
                           r.spotShadowMap[h] = y,
                           r.spotShadowMatrix[h] = e.shadow.matrix,
                           g++
                       }
                       r.spot[h] = t,
                       h++
                   } else if (e.isRectAreaLight) {
                       const t = n.get(e);
                       t.color.copy(v).multiplyScalar(_),
                       t.halfWidth.set(.5 * e.width, 0, 0),
                       t.halfHeight.set(0, .5 * e.height, 0),
                       r.rectArea[d] = t,
                       d++
                   } else if (e.isPointLight) {
                       const t = n.get(e);
                       if (t.color.copy(e.color).multiplyScalar(e.intensity),
                       t.distance = e.distance,
                       t.decay = e.decay,
                       e.castShadow) {
                           const t = e.shadow
                             , n = i.get(e);
                           n.shadowBias = t.bias,
                           n.shadowNormalBias = t.normalBias,
                           n.shadowRadius = t.radius,
                           n.shadowMapSize = t.mapSize,
                           n.shadowCameraNear = t.camera.near,
                           n.shadowCameraFar = t.camera.far,
                           r.pointShadow[u] = n,
                           r.pointShadowMap[u] = y,
                           r.pointShadowMatrix[u] = e.shadow.matrix,
                           m++
                       }
                       r.point[u] = t,
                       u++
                   } else if (e.isHemisphereLight) {
                       const t = n.get(e);
                       t.skyColor.copy(e.color).multiplyScalar(_),
                       t.groundColor.copy(e.groundColor).multiplyScalar(_),
                       r.hemi[p] = t,
                       p++
                   }
               }
               d > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = ql.LTC_FLOAT_1,
               r.rectAreaLTC2 = ql.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = ql.LTC_HALF_1,
               r.rectAreaLTC2 = ql.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),
               r.ambient[0] = o,
               r.ambient[1] = s,
               r.ambient[2] = l;
               const v = r.hash;
               v.directionalLength === c && v.pointLength === u && v.spotLength === h && v.rectAreaLength === d && v.hemiLength === p && v.numDirectionalShadows === f && v.numPointShadows === m && v.numSpotShadows === g || (r.directional.length = c,
               r.spot.length = h,
               r.rectArea.length = d,
               r.point.length = u,
               r.hemi.length = p,
               r.directionalShadow.length = f,
               r.directionalShadowMap.length = f,
               r.pointShadow.length = m,
               r.pointShadowMap.length = m,
               r.spotShadow.length = g,
               r.spotShadowMap.length = g,
               r.directionalShadowMatrix.length = f,
               r.pointShadowMatrix.length = m,
               r.spotShadowMatrix.length = g,
               v.directionalLength = c,
               v.pointLength = u,
               v.spotLength = h,
               v.rectAreaLength = d,
               v.hemiLength = p,
               v.numDirectionalShadows = f,
               v.numPointShadows = m,
               v.numSpotShadows = g,
               r.version = Hu++)
           },
           setupView: function(t, e) {
               let n = 0
                 , i = 0
                 , l = 0
                 , c = 0
                 , u = 0;
               const h = e.matrixWorldInverse;
               for (let e = 0, d = t.length; e < d; e++) {
                   const d = t[e];
                   if (d.isDirectionalLight) {
                       const t = r.directional[n];
                       t.direction.setFromMatrixPosition(d.matrixWorld),
                       a.setFromMatrixPosition(d.target.matrixWorld),
                       t.direction.sub(a),
                       t.direction.transformDirection(h),
                       n++
                   } else if (d.isSpotLight) {
                       const t = r.spot[l];
                       t.position.setFromMatrixPosition(d.matrixWorld),
                       t.position.applyMatrix4(h),
                       t.direction.setFromMatrixPosition(d.matrixWorld),
                       a.setFromMatrixPosition(d.target.matrixWorld),
                       t.direction.sub(a),
                       t.direction.transformDirection(h),
                       l++
                   } else if (d.isRectAreaLight) {
                       const t = r.rectArea[c];
                       t.position.setFromMatrixPosition(d.matrixWorld),
                       t.position.applyMatrix4(h),
                       s.identity(),
                       o.copy(d.matrixWorld),
                       o.premultiply(h),
                       s.extractRotation(o),
                       t.halfWidth.set(.5 * d.width, 0, 0),
                       t.halfHeight.set(0, .5 * d.height, 0),
                       t.halfWidth.applyMatrix4(s),
                       t.halfHeight.applyMatrix4(s),
                       c++
                   } else if (d.isPointLight) {
                       const t = r.point[i];
                       t.position.setFromMatrixPosition(d.matrixWorld),
                       t.position.applyMatrix4(h),
                       i++
                   } else if (d.isHemisphereLight) {
                       const t = r.hemi[u];
                       t.direction.setFromMatrixPosition(d.matrixWorld),
                       t.direction.transformDirection(h),
                       t.direction.normalize(),
                       u++
                   }
               }
           },
           state: r
       }
   }
   function Uu(t, e) {
       const n = new ku(t,e)
         , i = []
         , r = [];
       return {
           init: function() {
               i.length = 0,
               r.length = 0
           },
           state: {
               lightsArray: i,
               shadowsArray: r,
               lights: n
           },
           setupLights: function() {
               n.setup(i)
           },
           setupLightsView: function(t) {
               n.setupView(i, t)
           },
           pushLight: function(t) {
               i.push(t)
           },
           pushShadow: function(t) {
               r.push(t)
           }
       }
   }
   function Gu(t, e) {
       let n = new WeakMap;
       return {
           get: function(i, r=0) {
               let a;
               return !1 === n.has(i) ? (a = new Uu(t,e),
               n.set(i, [a])) : r >= n.get(i).length ? (a = new Uu(t,e),
               n.get(i).push(a)) : a = n.get(i)[r],
               a
           },
           dispose: function() {
               n = new WeakMap
           }
       }
   }
   class Wu extends Fs {
       constructor(t) {
           super(),
           this.type = "MeshDepthMaterial",
           this.depthPacking = 3200,
           this.skinning = !1,
           this.morphTargets = !1,
           this.map = null,
           this.alphaMap = null,
           this.displacementMap = null,
           this.displacementScale = 1,
           this.displacementBias = 0,
           this.wireframe = !1,
           this.wireframeLinewidth = 1,
           this.fog = !1,
           this.setValues(t)
       }
       copy(t) {
           return super.copy(t),
           this.depthPacking = t.depthPacking,
           this.skinning = t.skinning,
           this.morphTargets = t.morphTargets,
           this.map = t.map,
           this.alphaMap = t.alphaMap,
           this.displacementMap = t.displacementMap,
           this.displacementScale = t.displacementScale,
           this.displacementBias = t.displacementBias,
           this.wireframe = t.wireframe,
           this.wireframeLinewidth = t.wireframeLinewidth,
           this
       }
   }
   Wu.prototype.isMeshDepthMaterial = !0;
   class Vu extends Fs {
       constructor(t) {
           super(),
           this.type = "MeshDistanceMaterial",
           this.referencePosition = new _o,
           this.nearDistance = 1,
           this.farDistance = 1e3,
           this.skinning = !1,
           this.morphTargets = !1,
           this.map = null,
           this.alphaMap = null,
           this.displacementMap = null,
           this.displacementScale = 1,
           this.displacementBias = 0,
           this.fog = !1,
           this.setValues(t)
       }
       copy(t) {
           return super.copy(t),
           this.referencePosition.copy(t.referencePosition),
           this.nearDistance = t.nearDistance,
           this.farDistance = t.farDistance,
           this.skinning = t.skinning,
           this.morphTargets = t.morphTargets,
           this.map = t.map,
           this.alphaMap = t.alphaMap,
           this.displacementMap = t.displacementMap,
           this.displacementScale = t.displacementScale,
           this.displacementBias = t.displacementBias,
           this
       }
   }
   Vu.prototype.isMeshDistanceMaterial = !0;
   function qu(t, e, n) {
       let i = new kl;
       const r = new so
         , a = new so
         , o = new mo
         , s = []
         , l = []
         , c = {}
         , u = n.maxTextureSize
         , h = {
           0: 1,
           1: 0,
           2: 2
       }
         , d = new Cl({
           defines: {
               SAMPLE_RATE: 2 / 8,
               HALF_SAMPLE_RATE: 1 / 8
           },
           uniforms: {
               shadow_pass: {
                   value: null
               },
               resolution: {
                   value: new so
               },
               radius: {
                   value: 4
               }
           },
           vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
           fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
       })
         , p = d.clone();
       p.defines.HORIZONTAL_PASS = 1;
       const f = new ol;
       f.setAttribute("position", new Xs(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));
       const m = new Sl(f,d)
         , g = this;
       function v(n, i) {
           const r = e.update(m);
           d.uniforms.shadow_pass.value = n.map.texture,
           d.uniforms.resolution.value = n.mapSize,
           d.uniforms.radius.value = n.radius,
           t.setRenderTarget(n.mapPass),
           t.clear(),
           t.renderBufferDirect(i, null, r, d, m, null),
           p.uniforms.shadow_pass.value = n.mapPass.texture,
           p.uniforms.resolution.value = n.mapSize,
           p.uniforms.radius.value = n.radius,
           t.setRenderTarget(n.map),
           t.clear(),
           t.renderBufferDirect(i, null, r, p, m, null)
       }
       function _(t, e, n) {
           const i = t << 0 | e << 1 | n << 2;
           let r = s[i];
           return void 0 === r && (r = new Wu({
               depthPacking: 3201,
               morphTargets: t,
               skinning: e
           }),
           s[i] = r),
           r
       }
       function x(t, e, n) {
           const i = t << 0 | e << 1 | n << 2;
           let r = l[i];
           return void 0 === r && (r = new Vu({
               morphTargets: t,
               skinning: e
           }),
           l[i] = r),
           r
       }
       function y(e, n, i, r, a, o, s) {
           let l = null
             , u = _
             , d = e.customDepthMaterial;
           if (!0 === r.isPointLight && (u = x,
           d = e.customDistanceMaterial),
           void 0 === d) {
               let t = !1;
               !0 === i.morphTargets && (t = n.morphAttributes && n.morphAttributes.position && n.morphAttributes.position.length > 0);
               let r = !1;
               !0 === e.isSkinnedMesh && (!0 === i.skinning ? r = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e));
               l = u(t, r, !0 === e.isInstancedMesh)
           } else
               l = d;
           if (t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
               const t = l.uuid
                 , e = i.uuid;
               let n = c[t];
               void 0 === n && (n = {},
               c[t] = n);
               let r = n[e];
               void 0 === r && (r = l.clone(),
               n[e] = r),
               l = r
           }
           return l.visible = i.visible,
           l.wireframe = i.wireframe,
           l.side = 3 === s ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : h[i.side],
           l.clipShadows = i.clipShadows,
           l.clippingPlanes = i.clippingPlanes,
           l.clipIntersection = i.clipIntersection,
           l.wireframeLinewidth = i.wireframeLinewidth,
           l.linewidth = i.linewidth,
           !0 === r.isPointLight && !0 === l.isMeshDistanceMaterial && (l.referencePosition.setFromMatrixPosition(r.matrixWorld),
           l.nearDistance = a,
           l.farDistance = o),
           l
       }
       function w(n, r, a, o, s) {
           if (!1 === n.visible)
               return;
           if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === s) && (!n.frustumCulled || i.intersectsObject(n))) {
               n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
               const i = e.update(n)
                 , r = n.material;
               if (Array.isArray(r)) {
                   const e = i.groups;
                   for (let l = 0, c = e.length; l < c; l++) {
                       const c = e[l]
                         , u = r[c.materialIndex];
                       if (u && u.visible) {
                           const e = y(n, i, u, o, a.near, a.far, s);
                           t.renderBufferDirect(a, null, i, e, n, c)
                       }
                   }
               } else if (r.visible) {
                   const e = y(n, i, r, o, a.near, a.far, s);
                   t.renderBufferDirect(a, null, i, e, n, null)
               }
           }
           const l = n.children;
           for (let t = 0, e = l.length; t < e; t++)
               w(l[t], r, a, o, s)
       }
       this.enabled = !1,
       this.autoUpdate = !0,
       this.needsUpdate = !1,
       this.type = 1,
       this.render = function(e, n, s) {
           if (!1 === g.enabled)
               return;
           if (!1 === g.autoUpdate && !1 === g.needsUpdate)
               return;
           if (0 === e.length)
               return;
           const l = t.getRenderTarget()
             , c = t.getActiveCubeFace()
             , h = t.getActiveMipmapLevel()
             , d = t.state;
           d.setBlending(0),
           d.buffers.color.setClear(1, 1, 1, 1),
           d.buffers.depth.setTest(!0),
           d.setScissorTest(!1);
           for (let l = 0, c = e.length; l < c; l++) {
               const c = e[l]
                 , h = c.shadow;
               if (void 0 === h) {
                   console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
                   continue
               }
               if (!1 === h.autoUpdate && !1 === h.needsUpdate)
                   continue;
               r.copy(h.mapSize);
               const p = h.getFrameExtents();
               if (r.multiply(p),
               a.copy(h.mapSize),
               (r.x > u || r.y > u) && (r.x > u && (a.x = Math.floor(u / p.x),
               r.x = a.x * p.x,
               h.mapSize.x = a.x),
               r.y > u && (a.y = Math.floor(u / p.y),
               r.y = a.y * p.y,
               h.mapSize.y = a.y)),
               null === h.map && !h.isPointLightShadow && 3 === this.type) {
                   const t = {
                       minFilter: Na,
                       magFilter: Na,
                       format: Va
                   };
                   h.map = new go(r.x,r.y,t),
                   h.map.texture.name = c.name + ".shadowMap",
                   h.mapPass = new go(r.x,r.y,t),
                   h.camera.updateProjectionMatrix()
               }
               if (null === h.map) {
                   const t = {
                       minFilter: Oa,
                       magFilter: Oa,
                       format: Va
                   };
                   h.map = new go(r.x,r.y,t),
                   h.map.texture.name = c.name + ".shadowMap",
                   h.camera.updateProjectionMatrix()
               }
               t.setRenderTarget(h.map),
               t.clear();
               const f = h.getViewportCount();
               for (let t = 0; t < f; t++) {
                   const e = h.getViewport(t);
                   o.set(a.x * e.x, a.y * e.y, a.x * e.z, a.y * e.w),
                   d.viewport(o),
                   h.updateMatrices(c, t),
                   i = h.getFrustum(),
                   w(n, s, h.camera, c, this.type)
               }
               h.isPointLightShadow || 3 !== this.type || v(h, s),
               h.needsUpdate = !1
           }
           g.needsUpdate = !1,
           t.setRenderTarget(l, c, h)
       }
   }
   function ju(t, e, n) {
       const i = n.isWebGL2;
       const r = new function() {
           let e = !1;
           const n = new mo;
           let i = null;
           const r = new mo(0,0,0,0);
           return {
               setMask: function(n) {
                   i === n || e || (t.colorMask(n, n, n, n),
                   i = n)
               },
               setLocked: function(t) {
                   e = t
               },
               setClear: function(e, i, a, o, s) {
                   !0 === s && (e *= o,
                   i *= o,
                   a *= o),
                   n.set(e, i, a, o),
                   !1 === r.equals(n) && (t.clearColor(e, i, a, o),
                   r.copy(n))
               },
               reset: function() {
                   e = !1,
                   i = null,
                   r.set(-1, 0, 0, 0)
               }
           }
       }
         , a = new function() {
           let e = !1
             , n = null
             , i = null
             , r = null;
           return {
               setTest: function(t) {
                   t ? N(2929) : z(2929)
               },
               setMask: function(i) {
                   n === i || e || (t.depthMask(i),
                   n = i)
               },
               setFunc: function(e) {
                   if (i !== e) {
                       if (e)
                           switch (e) {
                           case 0:
                               t.depthFunc(512);
                               break;
                           case 1:
                               t.depthFunc(519);
                               break;
                           case 2:
                               t.depthFunc(513);
                               break;
                           case 3:
                               t.depthFunc(515);
                               break;
                           case 4:
                               t.depthFunc(514);
                               break;
                           case 5:
                               t.depthFunc(518);
                               break;
                           case 6:
                               t.depthFunc(516);
                               break;
                           case 7:
                               t.depthFunc(517);
                               break;
                           default:
                               t.depthFunc(515)
                           }
                       else
                           t.depthFunc(515);
                       i = e
                   }
               },
               setLocked: function(t) {
                   e = t
               },
               setClear: function(e) {
                   r !== e && (t.clearDepth(e),
                   r = e)
               },
               reset: function() {
                   e = !1,
                   n = null,
                   i = null,
                   r = null
               }
           }
       }
         , o = new function() {
           let e = !1
             , n = null
             , i = null
             , r = null
             , a = null
             , o = null
             , s = null
             , l = null
             , c = null;
           return {
               setTest: function(t) {
                   e || (t ? N(2960) : z(2960))
               },
               setMask: function(i) {
                   n === i || e || (t.stencilMask(i),
                   n = i)
               },
               setFunc: function(e, n, o) {
                   i === e && r === n && a === o || (t.stencilFunc(e, n, o),
                   i = e,
                   r = n,
                   a = o)
               },
               setOp: function(e, n, i) {
                   o === e && s === n && l === i || (t.stencilOp(e, n, i),
                   o = e,
                   s = n,
                   l = i)
               },
               setLocked: function(t) {
                   e = t
               },
               setClear: function(e) {
                   c !== e && (t.clearStencil(e),
                   c = e)
               },
               reset: function() {
                   e = !1,
                   n = null,
                   i = null,
                   r = null,
                   a = null,
                   o = null,
                   s = null,
                   l = null,
                   c = null
               }
           }
       }
       ;
       let s = {}
         , l = null
         , c = {}
         , u = null
         , h = !1
         , d = null
         , p = null
         , f = null
         , m = null
         , g = null
         , v = null
         , _ = null
         , x = !1
         , y = null
         , w = null
         , b = null
         , M = null
         , S = null;
       const T = t.getParameter(35661);
       let E = !1
         , L = 0;
       const A = t.getParameter(7938);
       -1 !== A.indexOf("WebGL") ? (L = parseFloat(/^WebGL (\d)/.exec(A)[1]),
       E = L >= 1) : -1 !== A.indexOf("OpenGL ES") && (L = parseFloat(/^OpenGL ES (\d)/.exec(A)[1]),
       E = L >= 2);
       let R = null
         , C = {};
       const P = new mo(0,0,t.canvas.width,t.canvas.height)
         , D = new mo(0,0,t.canvas.width,t.canvas.height);
       function I(e, n, i) {
           const r = new Uint8Array(4)
             , a = t.createTexture();
           t.bindTexture(e, a),
           t.texParameteri(e, 10241, 9728),
           t.texParameteri(e, 10240, 9728);
           for (let e = 0; e < i; e++)
               t.texImage2D(n + e, 0, 6408, 1, 1, 0, 6408, 5121, r);
           return a
       }
       const O = {};
       function N(e) {
           !0 !== s[e] && (t.enable(e),
           s[e] = !0)
       }
       function z(e) {
           !1 !== s[e] && (t.disable(e),
           s[e] = !1)
       }
       O[3553] = I(3553, 3553, 1),
       O[34067] = I(34067, 34069, 6),
       r.setClear(0, 0, 0, 1),
       a.setClear(1),
       o.setClear(0),
       N(2929),
       a.setFunc(3),
       k(!1),
       U(1),
       N(2884),
       B(0);
       const F = {
           [Ca]: 32774,
           101: 32778,
           102: 32779
       };
       if (i)
           F[103] = 32775,
           F[104] = 32776;
       else {
           const t = e.get("EXT_blend_minmax");
           null !== t && (F[103] = t.MIN_EXT,
           F[104] = t.MAX_EXT)
       }
       const H = {
           200: 0,
           201: 1,
           202: 768,
           204: 770,
           210: 776,
           208: 774,
           206: 772,
           203: 769,
           205: 771,
           209: 775,
           207: 773
       };
       function B(e, n, i, r, a, o, s, l) {
           if (0 !== e) {
               if (!1 === h && (N(3042),
               h = !0),
               5 === e)
                   a = a || n,
                   o = o || i,
                   s = s || r,
                   n === p && a === g || (t.blendEquationSeparate(F[n], F[a]),
                   p = n,
                   g = a),
                   i === f && r === m && o === v && s === _ || (t.blendFuncSeparate(H[i], H[r], H[o], H[s]),
                   f = i,
                   m = r,
                   v = o,
                   _ = s),
                   d = e,
                   x = null;
               else if (e !== d || l !== x) {
                   if (p === Ca && g === Ca || (t.blendEquation(32774),
                   p = Ca,
                   g = Ca),
                   l)
                       switch (e) {
                       case 1:
                           t.blendFuncSeparate(1, 771, 1, 771);
                           break;
                       case 2:
                           t.blendFunc(1, 1);
                           break;
                       case 3:
                           t.blendFuncSeparate(0, 0, 769, 771);
                           break;
                       case 4:
                           t.blendFuncSeparate(0, 768, 0, 770);
                           break;
                       default:
                           console.error("THREE.WebGLState: Invalid blending: ", e)
                       }
                   else
                       switch (e) {
                       case 1:
                           t.blendFuncSeparate(770, 771, 1, 771);
                           break;
                       case 2:
                           t.blendFunc(770, 1);
                           break;
                       case 3:
                           t.blendFunc(0, 769);
                           break;
                       case 4:
                           t.blendFunc(0, 768);
                           break;
                       default:
                           console.error("THREE.WebGLState: Invalid blending: ", e)
                       }
                   f = null,
                   m = null,
                   v = null,
                   _ = null,
                   d = e,
                   x = l
               }
           } else
               !0 === h && (z(3042),
               h = !1)
       }
       function k(e) {
           y !== e && (e ? t.frontFace(2304) : t.frontFace(2305),
           y = e)
       }
       function U(e) {
           0 !== e ? (N(2884),
           e !== w && (1 === e ? t.cullFace(1029) : 2 === e ? t.cullFace(1028) : t.cullFace(1032))) : z(2884),
           w = e
       }
       function G(e, n, i) {
           e ? (N(32823),
           M === n && S === i || (t.polygonOffset(n, i),
           M = n,
           S = i)) : z(32823)
       }
       function W(e) {
           void 0 === e && (e = 33984 + T - 1),
           R !== e && (t.activeTexture(e),
           R = e)
       }
       return {
           buffers: {
               color: r,
               depth: a,
               stencil: o
           },
           enable: N,
           disable: z,
           bindFramebuffer: function(e, n) {
               null === n && null !== l && (n = l),
               c[e] !== n && (t.bindFramebuffer(e, n),
               c[e] = n,
               i && (36009 === e && (c[36160] = n),
               36160 === e && (c[36009] = n)))
           },
           bindXRFramebuffer: function(e) {
               e !== l && (t.bindFramebuffer(36160, e),
               l = e)
           },
           useProgram: function(e) {
               return u !== e && (t.useProgram(e),
               u = e,
               !0)
           },
           setBlending: B,
           setMaterial: function(t, e) {
               2 === t.side ? z(2884) : N(2884);
               let n = 1 === t.side;
               e && (n = !n),
               k(n),
               1 === t.blending && !1 === t.transparent ? B(0) : B(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha),
               a.setFunc(t.depthFunc),
               a.setTest(t.depthTest),
               a.setMask(t.depthWrite),
               r.setMask(t.colorWrite);
               const i = t.stencilWrite;
               o.setTest(i),
               i && (o.setMask(t.stencilWriteMask),
               o.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask),
               o.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)),
               G(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits),
               !0 === t.alphaToCoverage ? N(32926) : z(32926)
           },
           setFlipSided: k,
           setCullFace: U,
           setLineWidth: function(e) {
               e !== b && (E && t.lineWidth(e),
               b = e)
           },
           setPolygonOffset: G,
           setScissorTest: function(t) {
               t ? N(3089) : z(3089)
           },
           activeTexture: W,
           bindTexture: function(e, n) {
               null === R && W();
               let i = C[R];
               void 0 === i && (i = {
                   type: void 0,
                   texture: void 0
               },
               C[R] = i),
               i.type === e && i.texture === n || (t.bindTexture(e, n || O[e]),
               i.type = e,
               i.texture = n)
           },
           unbindTexture: function() {
               const e = C[R];
               void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null),
               e.type = void 0,
               e.texture = void 0)
           },
           compressedTexImage2D: function() {
               try {
                   t.compressedTexImage2D.apply(t, arguments)
               } catch (t) {
                   console.error("THREE.WebGLState:", t)
               }
           },
           texImage2D: function() {
               try {
                   t.texImage2D.apply(t, arguments)
               } catch (t) {
                   console.error("THREE.WebGLState:", t)
               }
           },
           texImage3D: function() {
               try {
                   t.texImage3D.apply(t, arguments)
               } catch (t) {
                   console.error("THREE.WebGLState:", t)
               }
           },
           scissor: function(e) {
               !1 === P.equals(e) && (t.scissor(e.x, e.y, e.z, e.w),
               P.copy(e))
           },
           viewport: function(e) {
               !1 === D.equals(e) && (t.viewport(e.x, e.y, e.z, e.w),
               D.copy(e))
           },
           reset: function() {
               t.disable(3042),
               t.disable(2884),
               t.disable(2929),
               t.disable(32823),
               t.disable(3089),
               t.disable(2960),
               t.disable(32926),
               t.blendEquation(32774),
               t.blendFunc(1, 0),
               t.blendFuncSeparate(1, 0, 1, 0),
               t.colorMask(!0, !0, !0, !0),
               t.clearColor(0, 0, 0, 0),
               t.depthMask(!0),
               t.depthFunc(513),
               t.clearDepth(1),
               t.stencilMask(4294967295),
               t.stencilFunc(519, 0, 4294967295),
               t.stencilOp(7680, 7680, 7680),
               t.clearStencil(0),
               t.cullFace(1029),
               t.frontFace(2305),
               t.polygonOffset(0, 0),
               t.activeTexture(33984),
               t.bindFramebuffer(36160, null),
               !0 === i && (t.bindFramebuffer(36009, null),
               t.bindFramebuffer(36008, null)),
               t.useProgram(null),
               t.lineWidth(1),
               t.scissor(0, 0, t.canvas.width, t.canvas.height),
               t.viewport(0, 0, t.canvas.width, t.canvas.height),
               s = {},
               R = null,
               C = {},
               l = null,
               c = {},
               u = null,
               h = !1,
               d = null,
               p = null,
               f = null,
               m = null,
               g = null,
               v = null,
               _ = null,
               x = !1,
               y = null,
               w = null,
               b = null,
               M = null,
               S = null,
               P.set(0, 0, t.canvas.width, t.canvas.height),
               D.set(0, 0, t.canvas.width, t.canvas.height),
               r.reset(),
               a.reset(),
               o.reset()
           }
       }
   }
   function Yu(t, e, n, i, r, a, o) {
       const s = r.isWebGL2
         , l = r.maxTextures
         , c = r.maxCubemapSize
         , u = r.maxTextureSize
         , h = r.maxSamples
         , d = new WeakMap;
       let p, f = !1;
       try {
           f = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1,1).getContext("2d")
       } catch (t) {}
       function m(t, e) {
           return f ? new OffscreenCanvas(t,e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
       }
       function g(t, e, n, i) {
           let r = 1;
           if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)),
           r < 1 || !0 === e) {
               if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                   const i = e ? oo : Math.floor
                     , a = i(r * t.width)
                     , o = i(r * t.height);
                   void 0 === p && (p = m(a, o));
                   const s = n ? m(a, o) : p;
                   s.width = a,
                   s.height = o;
                   return s.getContext("2d").drawImage(t, 0, 0, a, o),
                   console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + a + "x" + o + ")."),
                   s
               }
               return "data"in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."),
               t
           }
           return t
       }
       function v(t) {
           return ao(t.width) && ao(t.height)
       }
       function _(t, e) {
           return t.generateMipmaps && e && t.minFilter !== Oa && t.minFilter !== Na
       }
       function x(e, n, r, a) {
           t.generateMipmap(e);
           i.get(n).__maxMipLevel = Math.log2(Math.max(r, a))
       }
       function y(n, i, r) {
           if (!1 === s)
               return i;
           if (null !== n) {
               if (void 0 !== t[n])
                   return t[n];
               console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'")
           }
           let a = i;
           return 6403 === i && (5126 === r && (a = 33326),
           5131 === r && (a = 33325),
           5121 === r && (a = 33321)),
           6407 === i && (5126 === r && (a = 34837),
           5131 === r && (a = 34843),
           5121 === r && (a = 32849)),
           6408 === i && (5126 === r && (a = 34836),
           5131 === r && (a = 34842),
           5121 === r && (a = 32856)),
           33325 !== a && 33326 !== a && 34842 !== a && 34836 !== a || e.get("EXT_color_buffer_float"),
           a
       }
       function w(t) {
           return t === Oa || 1004 === t || 1005 === t ? 9728 : 9729
       }
       function b(e) {
           const n = e.target;
           n.removeEventListener("dispose", b),
           function(e) {
               const n = i.get(e);
               if (void 0 === n.__webglInit)
                   return;
               t.deleteTexture(n.__webglTexture),
               i.remove(e)
           }(n),
           n.isVideoTexture && d.delete(n),
           o.memory.textures--
       }
       function M(e) {
           const n = e.target;
           n.removeEventListener("dispose", M),
           function(e) {
               const n = e.texture
                 , r = i.get(e)
                 , a = i.get(n);
               if (!e)
                   return;
               void 0 !== a.__webglTexture && t.deleteTexture(a.__webglTexture);
               e.depthTexture && e.depthTexture.dispose();
               if (e.isWebGLCubeRenderTarget)
                   for (let e = 0; e < 6; e++)
                       t.deleteFramebuffer(r.__webglFramebuffer[e]),
                       r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[e]);
               else
                   t.deleteFramebuffer(r.__webglFramebuffer),
                   r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer),
                   r.__webglMultisampledFramebuffer && t.deleteFramebuffer(r.__webglMultisampledFramebuffer),
                   r.__webglColorRenderbuffer && t.deleteRenderbuffer(r.__webglColorRenderbuffer),
                   r.__webglDepthRenderbuffer && t.deleteRenderbuffer(r.__webglDepthRenderbuffer);
               i.remove(n),
               i.remove(e)
           }(n),
           o.memory.textures--
       }
       let S = 0;
       function T(t, e) {
           const r = i.get(t);
           if (t.isVideoTexture && function(t) {
               const e = o.render.frame;
               d.get(t) !== e && (d.set(t, e),
               t.update())
           }(t),
           t.version > 0 && r.__version !== t.version) {
               const n = t.image;
               if (void 0 === n)
                   console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
               else {
                   if (!1 !== n.complete)
                       return void P(r, t, e);
                   console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
               }
           }
           n.activeTexture(33984 + e),
           n.bindTexture(3553, r.__webglTexture)
       }
       function E(e, r) {
           const o = i.get(e);
           e.version > 0 && o.__version !== e.version ? function(e, i, r) {
               if (6 !== i.image.length)
                   return;
               C(e, i),
               n.activeTexture(33984 + r),
               n.bindTexture(34067, e.__webglTexture),
               t.pixelStorei(37440, i.flipY),
               t.pixelStorei(37441, i.premultiplyAlpha),
               t.pixelStorei(3317, i.unpackAlignment),
               t.pixelStorei(37443, 0);
               const o = i && (i.isCompressedTexture || i.image[0].isCompressedTexture)
                 , l = i.image[0] && i.image[0].isDataTexture
                 , u = [];
               for (let t = 0; t < 6; t++)
                   u[t] = o || l ? l ? i.image[t].image : i.image[t] : g(i.image[t], !1, !0, c);
               const h = u[0]
                 , d = v(h) || s
                 , p = a.convert(i.format)
                 , f = a.convert(i.type)
                 , m = y(i.internalFormat, p, f);
               let w;
               if (R(34067, i, d),
               o) {
                   for (let t = 0; t < 6; t++) {
                       w = u[t].mipmaps;
                       for (let e = 0; e < w.length; e++) {
                           const r = w[e];
                           i.format !== Va && i.format !== Wa ? null !== p ? n.compressedTexImage2D(34069 + t, e, m, r.width, r.height, 0, r.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + t, e, m, r.width, r.height, 0, p, f, r.data)
                       }
                   }
                   e.__maxMipLevel = w.length - 1
               } else {
                   w = i.mipmaps;
                   for (let t = 0; t < 6; t++)
                       if (l) {
                           n.texImage2D(34069 + t, 0, m, u[t].width, u[t].height, 0, p, f, u[t].data);
                           for (let e = 0; e < w.length; e++) {
                               const i = w[e].image[t].image;
                               n.texImage2D(34069 + t, e + 1, m, i.width, i.height, 0, p, f, i.data)
                           }
                       } else {
                           n.texImage2D(34069 + t, 0, m, p, f, u[t]);
                           for (let e = 0; e < w.length; e++) {
                               const i = w[e];
                               n.texImage2D(34069 + t, e + 1, m, p, f, i.image[t])
                           }
                       }
                   e.__maxMipLevel = w.length
               }
               _(i, d) && x(34067, i, h.width, h.height);
               e.__version = i.version,
               i.onUpdate && i.onUpdate(i)
           }(o, e, r) : (n.activeTexture(33984 + r),
           n.bindTexture(34067, o.__webglTexture))
       }
       const L = {
           [Pa]: 10497,
           [Da]: 33071,
           [Ia]: 33648
       }
         , A = {
           [Oa]: 9728,
           1004: 9984,
           1005: 9986,
           [Na]: 9729,
           1007: 9985,
           [za]: 9987
       };
       function R(n, a, o) {
           if (o ? (t.texParameteri(n, 10242, L[a.wrapS]),
           t.texParameteri(n, 10243, L[a.wrapT]),
           32879 !== n && 35866 !== n || t.texParameteri(n, 32882, L[a.wrapR]),
           t.texParameteri(n, 10240, A[a.magFilter]),
           t.texParameteri(n, 10241, A[a.minFilter])) : (t.texParameteri(n, 10242, 33071),
           t.texParameteri(n, 10243, 33071),
           32879 !== n && 35866 !== n || t.texParameteri(n, 32882, 33071),
           a.wrapS === Da && a.wrapT === Da || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),
           t.texParameteri(n, 10240, w(a.magFilter)),
           t.texParameteri(n, 10241, w(a.minFilter)),
           a.minFilter !== Oa && a.minFilter !== Na && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),
           !0 === e.has("EXT_texture_filter_anisotropic")) {
               const o = e.get("EXT_texture_filter_anisotropic");
               if (a.type === ka && !1 === e.has("OES_texture_float_linear"))
                   return;
               if (!1 === s && a.type === Ua && !1 === e.has("OES_texture_half_float_linear"))
                   return;
               (a.anisotropy > 1 || i.get(a).__currentAnisotropy) && (t.texParameterf(n, o.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())),
               i.get(a).__currentAnisotropy = a.anisotropy)
           }
       }
       function C(e, n) {
           void 0 === e.__webglInit && (e.__webglInit = !0,
           n.addEventListener("dispose", b),
           e.__webglTexture = t.createTexture(),
           o.memory.textures++)
       }
       function P(e, i, r) {
           let o = 3553;
           i.isDataTexture2DArray && (o = 35866),
           i.isDataTexture3D && (o = 32879),
           C(e, i),
           n.activeTexture(33984 + r),
           n.bindTexture(o, e.__webglTexture),
           t.pixelStorei(37440, i.flipY),
           t.pixelStorei(37441, i.premultiplyAlpha),
           t.pixelStorei(3317, i.unpackAlignment),
           t.pixelStorei(37443, 0);
           const l = function(t) {
               return !s && (t.wrapS !== Da || t.wrapT !== Da || t.minFilter !== Oa && t.minFilter !== Na)
           }(i) && !1 === v(i.image)
             , c = g(i.image, l, !1, u)
             , h = v(c) || s
             , d = a.convert(i.format);
           let p, f = a.convert(i.type), m = y(i.internalFormat, d, f);
           R(o, i, h);
           const w = i.mipmaps;
           if (i.isDepthTexture)
               m = 6402,
               s ? m = i.type === ka ? 36012 : i.type === Ba ? 33190 : i.type === Ga ? 35056 : 33189 : i.type === ka && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),
               i.format === qa && 6402 === m && i.type !== Ha && i.type !== Ba && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
               i.type = Ha,
               f = a.convert(i.type)),
               i.format === ja && 6402 === m && (m = 34041,
               i.type !== Ga && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
               i.type = Ga,
               f = a.convert(i.type))),
               n.texImage2D(3553, 0, m, c.width, c.height, 0, d, f, null);
           else if (i.isDataTexture)
               if (w.length > 0 && h) {
                   for (let t = 0, e = w.length; t < e; t++)
                       p = w[t],
                       n.texImage2D(3553, t, m, p.width, p.height, 0, d, f, p.data);
                   i.generateMipmaps = !1,
                   e.__maxMipLevel = w.length - 1
               } else
                   n.texImage2D(3553, 0, m, c.width, c.height, 0, d, f, c.data),
                   e.__maxMipLevel = 0;
           else if (i.isCompressedTexture) {
               for (let t = 0, e = w.length; t < e; t++)
                   p = w[t],
                   i.format !== Va && i.format !== Wa ? null !== d ? n.compressedTexImage2D(3553, t, m, p.width, p.height, 0, p.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, t, m, p.width, p.height, 0, d, f, p.data);
               e.__maxMipLevel = w.length - 1
           } else if (i.isDataTexture2DArray)
               n.texImage3D(35866, 0, m, c.width, c.height, c.depth, 0, d, f, c.data),
               e.__maxMipLevel = 0;
           else if (i.isDataTexture3D)
               n.texImage3D(32879, 0, m, c.width, c.height, c.depth, 0, d, f, c.data),
               e.__maxMipLevel = 0;
           else if (w.length > 0 && h) {
               for (let t = 0, e = w.length; t < e; t++)
                   p = w[t],
                   n.texImage2D(3553, t, m, d, f, p);
               i.generateMipmaps = !1,
               e.__maxMipLevel = w.length - 1
           } else
               n.texImage2D(3553, 0, m, d, f, c),
               e.__maxMipLevel = 0;
           _(i, h) && x(o, i, c.width, c.height),
           e.__version = i.version,
           i.onUpdate && i.onUpdate(i)
       }
       function D(e, r, o, s) {
           const l = r.texture
             , c = a.convert(l.format)
             , u = a.convert(l.type)
             , h = y(l.internalFormat, c, u);
           32879 === s || 35866 === s ? n.texImage3D(s, 0, h, r.width, r.height, r.depth, 0, c, u, null) : n.texImage2D(s, 0, h, r.width, r.height, 0, c, u, null),
           n.bindFramebuffer(36160, e),
           t.framebufferTexture2D(36160, o, s, i.get(l).__webglTexture, 0),
           n.bindFramebuffer(36160, null)
       }
       function I(e, n, i) {
           if (t.bindRenderbuffer(36161, e),
           n.depthBuffer && !n.stencilBuffer) {
               let r = 33189;
               if (i) {
                   const e = n.depthTexture;
                   e && e.isDepthTexture && (e.type === ka ? r = 36012 : e.type === Ba && (r = 33190));
                   const i = N(n);
                   t.renderbufferStorageMultisample(36161, i, r, n.width, n.height)
               } else
                   t.renderbufferStorage(36161, r, n.width, n.height);
               t.framebufferRenderbuffer(36160, 36096, 36161, e)
           } else if (n.depthBuffer && n.stencilBuffer) {
               if (i) {
                   const e = N(n);
                   t.renderbufferStorageMultisample(36161, e, 35056, n.width, n.height)
               } else
                   t.renderbufferStorage(36161, 34041, n.width, n.height);
               t.framebufferRenderbuffer(36160, 33306, 36161, e)
           } else {
               const e = n.texture
                 , r = a.convert(e.format)
                 , o = a.convert(e.type)
                 , s = y(e.internalFormat, r, o);
               if (i) {
                   const e = N(n);
                   t.renderbufferStorageMultisample(36161, e, s, n.width, n.height)
               } else
                   t.renderbufferStorage(36161, s, n.width, n.height)
           }
           t.bindRenderbuffer(36161, null)
       }
       function O(e) {
           const r = i.get(e)
             , a = !0 === e.isWebGLCubeRenderTarget;
           if (e.depthTexture) {
               if (a)
                   throw new Error("target.depthTexture not supported in Cube render targets");
               !function(e, r) {
                   if (r && r.isWebGLCubeRenderTarget)
                       throw new Error("Depth Texture with cube render targets is not supported");
                   if (n.bindFramebuffer(36160, e),
                   !r.depthTexture || !r.depthTexture.isDepthTexture)
                       throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                   i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width,
                   r.depthTexture.image.height = r.height,
                   r.depthTexture.needsUpdate = !0),
                   T(r.depthTexture, 0);
                   const a = i.get(r.depthTexture).__webglTexture;
                   if (r.depthTexture.format === qa)
                       t.framebufferTexture2D(36160, 36096, 3553, a, 0);
                   else {
                       if (r.depthTexture.format !== ja)
                           throw new Error("Unknown depthTexture format");
                       t.framebufferTexture2D(36160, 33306, 3553, a, 0)
                   }
               }(r.__webglFramebuffer, e)
           } else if (a) {
               r.__webglDepthbuffer = [];
               for (let i = 0; i < 6; i++)
                   n.bindFramebuffer(36160, r.__webglFramebuffer[i]),
                   r.__webglDepthbuffer[i] = t.createRenderbuffer(),
                   I(r.__webglDepthbuffer[i], e, !1)
           } else
               n.bindFramebuffer(36160, r.__webglFramebuffer),
               r.__webglDepthbuffer = t.createRenderbuffer(),
               I(r.__webglDepthbuffer, e, !1);
           n.bindFramebuffer(36160, null)
       }
       function N(t) {
           return s && t.isWebGLMultisampleRenderTarget ? Math.min(h, t.samples) : 0
       }
       let z = !1
         , F = !1;
       this.allocateTextureUnit = function() {
           const t = S;
           return t >= l && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + l),
           S += 1,
           t
       }
       ,
       this.resetTextureUnits = function() {
           S = 0
       }
       ,
       this.setTexture2D = T,
       this.setTexture2DArray = function(t, e) {
           const r = i.get(t);
           t.version > 0 && r.__version !== t.version ? P(r, t, e) : (n.activeTexture(33984 + e),
           n.bindTexture(35866, r.__webglTexture))
       }
       ,
       this.setTexture3D = function(t, e) {
           const r = i.get(t);
           t.version > 0 && r.__version !== t.version ? P(r, t, e) : (n.activeTexture(33984 + e),
           n.bindTexture(32879, r.__webglTexture))
       }
       ,
       this.setTextureCube = E,
       this.setupRenderTarget = function(e) {
           const r = e.texture
             , l = i.get(e)
             , c = i.get(r);
           e.addEventListener("dispose", M),
           c.__webglTexture = t.createTexture(),
           c.__version = r.version,
           o.memory.textures++;
           const u = !0 === e.isWebGLCubeRenderTarget
             , h = !0 === e.isWebGLMultisampleRenderTarget
             , d = r.isDataTexture3D || r.isDataTexture2DArray
             , p = v(e) || s;
           if (!s || r.format !== Wa || r.type !== ka && r.type !== Ua || (r.format = Va,
           console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),
           u) {
               l.__webglFramebuffer = [];
               for (let e = 0; e < 6; e++)
                   l.__webglFramebuffer[e] = t.createFramebuffer()
           } else if (l.__webglFramebuffer = t.createFramebuffer(),
           h)
               if (s) {
                   l.__webglMultisampledFramebuffer = t.createFramebuffer(),
                   l.__webglColorRenderbuffer = t.createRenderbuffer(),
                   t.bindRenderbuffer(36161, l.__webglColorRenderbuffer);
                   const i = a.convert(r.format)
                     , o = a.convert(r.type)
                     , s = y(r.internalFormat, i, o)
                     , c = N(e);
                   t.renderbufferStorageMultisample(36161, c, s, e.width, e.height),
                   n.bindFramebuffer(36160, l.__webglMultisampledFramebuffer),
                   t.framebufferRenderbuffer(36160, 36064, 36161, l.__webglColorRenderbuffer),
                   t.bindRenderbuffer(36161, null),
                   e.depthBuffer && (l.__webglDepthRenderbuffer = t.createRenderbuffer(),
                   I(l.__webglDepthRenderbuffer, e, !0)),
                   n.bindFramebuffer(36160, null)
               } else
                   console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
           if (u) {
               n.bindTexture(34067, c.__webglTexture),
               R(34067, r, p);
               for (let t = 0; t < 6; t++)
                   D(l.__webglFramebuffer[t], e, 36064, 34069 + t);
               _(r, p) && x(34067, r, e.width, e.height),
               n.bindTexture(34067, null)
           } else {
               let t = 3553;
               if (d)
                   if (s) {
                       t = r.isDataTexture3D ? 32879 : 35866
                   } else
                       console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.");
               n.bindTexture(t, c.__webglTexture),
               R(t, r, p),
               D(l.__webglFramebuffer, e, 36064, t),
               _(r, p) && x(3553, r, e.width, e.height),
               n.bindTexture(3553, null)
           }
           e.depthBuffer && O(e)
       }
       ,
       this.updateRenderTargetMipmap = function(t) {
           const e = t.texture;
           if (_(e, v(t) || s)) {
               const r = t.isWebGLCubeRenderTarget ? 34067 : 3553
                 , a = i.get(e).__webglTexture;
               n.bindTexture(r, a),
               x(r, e, t.width, t.height),
               n.bindTexture(r, null)
           }
       }
       ,
       this.updateMultisampleRenderTarget = function(e) {
           if (e.isWebGLMultisampleRenderTarget)
               if (s) {
                   const r = e.width
                     , a = e.height;
                   let o = 16384;
                   e.depthBuffer && (o |= 256),
                   e.stencilBuffer && (o |= 1024);
                   const s = i.get(e);
                   n.bindFramebuffer(36008, s.__webglMultisampledFramebuffer),
                   n.bindFramebuffer(36009, s.__webglFramebuffer),
                   t.blitFramebuffer(0, 0, r, a, 0, 0, r, a, o, 9728),
                   n.bindFramebuffer(36008, null),
                   n.bindFramebuffer(36009, s.__webglMultisampledFramebuffer)
               } else
                   console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
       }
       ,
       this.safeSetTexture2D = function(t, e) {
           t && t.isWebGLRenderTarget && (!1 === z && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),
           z = !0),
           t = t.texture),
           T(t, e)
       }
       ,
       this.safeSetTextureCube = function(t, e) {
           t && t.isWebGLCubeRenderTarget && (!1 === F && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),
           F = !0),
           t = t.texture),
           E(t, e)
       }
   }
   function Xu(t, e, n) {
       const i = n.isWebGL2;
       return {
           convert: function(t) {
               let n;
               if (t === Fa)
                   return 5121;
               if (1017 === t)
                   return 32819;
               if (1018 === t)
                   return 32820;
               if (1019 === t)
                   return 33635;
               if (1010 === t)
                   return 5120;
               if (1011 === t)
                   return 5122;
               if (t === Ha)
                   return 5123;
               if (1013 === t)
                   return 5124;
               if (t === Ba)
                   return 5125;
               if (t === ka)
                   return 5126;
               if (t === Ua)
                   return i ? 5131 : (n = e.get("OES_texture_half_float"),
                   null !== n ? n.HALF_FLOAT_OES : null);
               if (1021 === t)
                   return 6406;
               if (t === Wa)
                   return 6407;
               if (t === Va)
                   return 6408;
               if (1024 === t)
                   return 6409;
               if (1025 === t)
                   return 6410;
               if (t === qa)
                   return 6402;
               if (t === ja)
                   return 34041;
               if (1028 === t)
                   return 6403;
               if (1029 === t)
                   return 36244;
               if (1030 === t)
                   return 33319;
               if (1031 === t)
                   return 33320;
               if (1032 === t)
                   return 36248;
               if (1033 === t)
                   return 36249;
               if (33776 === t || 33777 === t || 33778 === t || 33779 === t) {
                   if (n = e.get("WEBGL_compressed_texture_s3tc"),
                   null === n)
                       return null;
                   if (33776 === t)
                       return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
                   if (33777 === t)
                       return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                   if (33778 === t)
                       return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                   if (33779 === t)
                       return n.COMPRESSED_RGBA_S3TC_DXT5_EXT
               }
               if (35840 === t || 35841 === t || 35842 === t || 35843 === t) {
                   if (n = e.get("WEBGL_compressed_texture_pvrtc"),
                   null === n)
                       return null;
                   if (35840 === t)
                       return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                   if (35841 === t)
                       return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                   if (35842 === t)
                       return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                   if (35843 === t)
                       return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
               }
               if (36196 === t)
                   return n = e.get("WEBGL_compressed_texture_etc1"),
                   null !== n ? n.COMPRESSED_RGB_ETC1_WEBGL : null;
               if ((37492 === t || 37496 === t) && (n = e.get("WEBGL_compressed_texture_etc"),
               null !== n)) {
                   if (37492 === t)
                       return n.COMPRESSED_RGB8_ETC2;
                   if (37496 === t)
                       return n.COMPRESSED_RGBA8_ETC2_EAC
               }
               return 37808 === t || 37809 === t || 37810 === t || 37811 === t || 37812 === t || 37813 === t || 37814 === t || 37815 === t || 37816 === t || 37817 === t || 37818 === t || 37819 === t || 37820 === t || 37821 === t || 37840 === t || 37841 === t || 37842 === t || 37843 === t || 37844 === t || 37845 === t || 37846 === t || 37847 === t || 37848 === t || 37849 === t || 37850 === t || 37851 === t || 37852 === t || 37853 === t ? (n = e.get("WEBGL_compressed_texture_astc"),
               null !== n ? t : null) : 36492 === t ? (n = e.get("EXT_texture_compression_bptc"),
               null !== n ? t : null) : t === Ga ? i ? 34042 : (n = e.get("WEBGL_depth_texture"),
               null !== n ? n.UNSIGNED_INT_24_8_WEBGL : null) : void 0
           }
       }
   }
   class Zu extends Dl {
       constructor(t=[]) {
           super(),
           this.cameras = t
       }
   }
   Zu.prototype.isArrayCamera = !0;
   class Ju extends ys {
       constructor() {
           super(),
           this.type = "Group"
       }
   }
   Ju.prototype.isGroup = !0;
   const Qu = {
       type: "move"
   };
   class Ku {
       constructor() {
           this._targetRay = null,
           this._grip = null,
           this._hand = null
       }
       getHandSpace() {
           return null === this._hand && (this._hand = new Ju,
           this._hand.matrixAutoUpdate = !1,
           this._hand.visible = !1,
           this._hand.joints = {},
           this._hand.inputState = {
               pinching: !1
           }),
           this._hand
       }
       getTargetRaySpace() {
           return null === this._targetRay && (this._targetRay = new Ju,
           this._targetRay.matrixAutoUpdate = !1,
           this._targetRay.visible = !1,
           this._targetRay.hasLinearVelocity = !1,
           this._targetRay.linearVelocity = new _o,
           this._targetRay.hasAngularVelocity = !1,
           this._targetRay.angularVelocity = new _o),
           this._targetRay
       }
       getGripSpace() {
           return null === this._grip && (this._grip = new Ju,
           this._grip.matrixAutoUpdate = !1,
           this._grip.visible = !1,
           this._grip.hasLinearVelocity = !1,
           this._grip.linearVelocity = new _o,
           this._grip.hasAngularVelocity = !1,
           this._grip.angularVelocity = new _o),
           this._grip
       }
       dispatchEvent(t) {
           return null !== this._targetRay && this._targetRay.dispatchEvent(t),
           null !== this._grip && this._grip.dispatchEvent(t),
           null !== this._hand && this._hand.dispatchEvent(t),
           this
       }
       disconnect(t) {
           return this.dispatchEvent({
               type: "disconnected",
               data: t
           }),
           null !== this._targetRay && (this._targetRay.visible = !1),
           null !== this._grip && (this._grip.visible = !1),
           null !== this._hand && (this._hand.visible = !1),
           this
       }
       update(t, e, n) {
           let i = null
             , r = null
             , a = null;
           const o = this._targetRay
             , s = this._grip
             , l = this._hand;
           if (t && "visible-blurred" !== e.session.visibilityState)
               if (null !== o && (i = e.getPose(t.targetRaySpace, n),
               null !== i && (o.matrix.fromArray(i.transform.matrix),
               o.matrix.decompose(o.position, o.rotation, o.scale),
               i.linearVelocity ? (o.hasLinearVelocity = !0,
               o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1,
               i.angularVelocity ? (o.hasAngularVelocity = !0,
               o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1,
               this.dispatchEvent(Qu))),
               l && t.hand) {
                   a = !0;
                   for (const i of t.hand.values()) {
                       const t = e.getJointPose(i, n);
                       if (void 0 === l.joints[i.jointName]) {
                           const t = new Ju;
                           t.matrixAutoUpdate = !1,
                           t.visible = !1,
                           l.joints[i.jointName] = t,
                           l.add(t)
                       }
                       const r = l.joints[i.jointName];
                       null !== t && (r.matrix.fromArray(t.transform.matrix),
                       r.matrix.decompose(r.position, r.rotation, r.scale),
                       r.jointRadius = t.radius),
                       r.visible = null !== t
                   }
                   const i = l.joints["index-finger-tip"]
                     , r = l.joints["thumb-tip"]
                     , o = i.position.distanceTo(r.position)
                     , s = .02
                     , c = .005;
                   l.inputState.pinching && o > s + c ? (l.inputState.pinching = !1,
                   this.dispatchEvent({
                       type: "pinchend",
                       handedness: t.handedness,
                       target: this
                   })) : !l.inputState.pinching && o <= s - c && (l.inputState.pinching = !0,
                   this.dispatchEvent({
                       type: "pinchstart",
                       handedness: t.handedness,
                       target: this
                   }))
               } else
                   null !== s && t.gripSpace && (r = e.getPose(t.gripSpace, n),
                   null !== r && (s.matrix.fromArray(r.transform.matrix),
                   s.matrix.decompose(s.position, s.rotation, s.scale),
                   r.linearVelocity ? (s.hasLinearVelocity = !0,
                   s.linearVelocity.copy(r.linearVelocity)) : s.hasLinearVelocity = !1,
                   r.angularVelocity ? (s.hasAngularVelocity = !0,
                   s.angularVelocity.copy(r.angularVelocity)) : s.hasAngularVelocity = !1));
           return null !== o && (o.visible = null !== i),
           null !== s && (s.visible = null !== r),
           null !== l && (l.visible = null !== a),
           this
       }
   }
   class $u extends Ka {
       constructor(t, e) {
           super();
           const n = this
             , i = t.state;
           let r = null
             , a = 1
             , o = null
             , s = "local-floor"
             , l = null;
           const c = []
             , u = new Map
             , h = new Dl;
           h.layers.enable(1),
           h.viewport = new mo;
           const d = new Dl;
           d.layers.enable(2),
           d.viewport = new mo;
           const p = [h, d]
             , f = new Zu;
           f.layers.enable(1),
           f.layers.enable(2);
           let m = null
             , g = null;
           function v(t) {
               const e = u.get(t.inputSource);
               e && e.dispatchEvent({
                   type: t.type,
                   data: t.inputSource
               })
           }
           function _() {
               u.forEach((function(t, e) {
                   t.disconnect(e)
               }
               )),
               u.clear(),
               m = null,
               g = null,
               i.bindXRFramebuffer(null),
               t.setRenderTarget(t.getRenderTarget()),
               S.stop(),
               n.isPresenting = !1,
               n.dispatchEvent({
                   type: "sessionend"
               })
           }
           function x(t) {
               const e = r.inputSources;
               for (let t = 0; t < c.length; t++)
                   u.set(e[t], c[t]);
               for (let e = 0; e < t.removed.length; e++) {
                   const n = t.removed[e]
                     , i = u.get(n);
                   i && (i.dispatchEvent({
                       type: "disconnected",
                       data: n
                   }),
                   u.delete(n))
               }
               for (let e = 0; e < t.added.length; e++) {
                   const n = t.added[e]
                     , i = u.get(n);
                   i && i.dispatchEvent({
                       type: "connected",
                       data: n
                   })
               }
           }
           this.enabled = !1,
           this.isPresenting = !1,
           this.getController = function(t) {
               let e = c[t];
               return void 0 === e && (e = new Ku,
               c[t] = e),
               e.getTargetRaySpace()
           }
           ,
           this.getControllerGrip = function(t) {
               let e = c[t];
               return void 0 === e && (e = new Ku,
               c[t] = e),
               e.getGripSpace()
           }
           ,
           this.getHand = function(t) {
               let e = c[t];
               return void 0 === e && (e = new Ku,
               c[t] = e),
               e.getHandSpace()
           }
           ,
           this.setFramebufferScaleFactor = function(t) {
               a = t,
               !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
           }
           ,
           this.setReferenceSpaceType = function(t) {
               s = t,
               !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
           }
           ,
           this.getReferenceSpace = function() {
               return o
           }
           ,
           this.getSession = function() {
               return r
           }
           ,
           this.setSession = async function(t) {
               if (r = t,
               null !== r) {
                   r.addEventListener("select", v),
                   r.addEventListener("selectstart", v),
                   r.addEventListener("selectend", v),
                   r.addEventListener("squeeze", v),
                   r.addEventListener("squeezestart", v),
                   r.addEventListener("squeezeend", v),
                   r.addEventListener("end", _),
                   r.addEventListener("inputsourceschange", x);
                   const t = e.getContextAttributes();
                   !0 !== t.xrCompatible && await e.makeXRCompatible();
                   const i = {
                       antialias: t.antialias,
                       alpha: t.alpha,
                       depth: t.depth,
                       stencil: t.stencil,
                       framebufferScaleFactor: a
                   }
                     , l = new XRWebGLLayer(r,e,i);
                   r.updateRenderState({
                       baseLayer: l
                   }),
                   o = await r.requestReferenceSpace(s),
                   S.setContext(r),
                   S.start(),
                   n.isPresenting = !0,
                   n.dispatchEvent({
                       type: "sessionstart"
                   })
               }
           }
           ;
           const y = new _o
             , w = new _o;
           function b(t, e) {
               null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
               t.matrixWorldInverse.copy(t.matrixWorld).invert()
           }
           this.getCamera = function(t) {
               f.near = d.near = h.near = t.near,
               f.far = d.far = h.far = t.far,
               m === f.near && g === f.far || (r.updateRenderState({
                   depthNear: f.near,
                   depthFar: f.far
               }),
               m = f.near,
               g = f.far);
               const e = t.parent
                 , n = f.cameras;
               b(f, e);
               for (let t = 0; t < n.length; t++)
                   b(n[t], e);
               t.matrixWorld.copy(f.matrixWorld),
               t.matrix.copy(f.matrix),
               t.matrix.decompose(t.position, t.quaternion, t.scale);
               const i = t.children;
               for (let t = 0, e = i.length; t < e; t++)
                   i[t].updateMatrixWorld(!0);
               return 2 === n.length ? function(t, e, n) {
                   y.setFromMatrixPosition(e.matrixWorld),
                   w.setFromMatrixPosition(n.matrixWorld);
                   const i = y.distanceTo(w)
                     , r = e.projectionMatrix.elements
                     , a = n.projectionMatrix.elements
                     , o = r[14] / (r[10] - 1)
                     , s = r[14] / (r[10] + 1)
                     , l = (r[9] + 1) / r[5]
                     , c = (r[9] - 1) / r[5]
                     , u = (r[8] - 1) / r[0]
                     , h = (a[8] + 1) / a[0]
                     , d = o * u
                     , p = o * h
                     , f = i / (-u + h)
                     , m = f * -u;
                   e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
                   t.translateX(m),
                   t.translateZ(f),
                   t.matrixWorld.compose(t.position, t.quaternion, t.scale),
                   t.matrixWorldInverse.copy(t.matrixWorld).invert();
                   const g = o + f
                     , v = s + f
                     , _ = d - m
                     , x = p + (i - m)
                     , b = l * s / v * g
                     , M = c * s / v * g;
                   t.projectionMatrix.makePerspective(_, x, b, M, g, v)
               }(f, h, d) : f.projectionMatrix.copy(h.projectionMatrix),
               f
           }
           ;
           let M = null;
           const S = new Ul;
           S.setAnimationLoop((function(t, e) {
               if (l = e.getViewerPose(o),
               null !== l) {
                   const t = l.views
                     , e = r.renderState.baseLayer;
                   i.bindXRFramebuffer(e.framebuffer);
                   let n = !1;
                   t.length !== f.cameras.length && (f.cameras.length = 0,
                   n = !0);
                   for (let i = 0; i < t.length; i++) {
                       const r = t[i]
                         , a = e.getViewport(r)
                         , o = p[i];
                       o.matrix.fromArray(r.transform.matrix),
                       o.projectionMatrix.fromArray(r.projectionMatrix),
                       o.viewport.set(a.x, a.y, a.width, a.height),
                       0 === i && f.matrix.copy(o.matrix),
                       !0 === n && f.cameras.push(o)
                   }
               }
               const n = r.inputSources;
               for (let t = 0; t < c.length; t++) {
                   const i = c[t]
                     , r = n[t];
                   i.update(r, e, o)
               }
               M && M(t, e)
           }
           )),
           this.setAnimationLoop = function(t) {
               M = t
           }
           ,
           this.dispose = function() {}
       }
   }
   function th(t) {
       function e(e, n) {
           e.opacity.value = n.opacity,
           n.color && e.diffuse.value.copy(n.color),
           n.emissive && e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),
           n.map && (e.map.value = n.map),
           n.alphaMap && (e.alphaMap.value = n.alphaMap),
           n.specularMap && (e.specularMap.value = n.specularMap);
           const i = t.get(n).envMap;
           if (i) {
               e.envMap.value = i,
               e.flipEnvMap.value = i.isCubeTexture && i._needsFlipEnvMap ? -1 : 1,
               e.reflectivity.value = n.reflectivity,
               e.refractionRatio.value = n.refractionRatio;
               const r = t.get(i).__maxMipLevel;
               void 0 !== r && (e.maxMipLevel.value = r)
           }
           let r, a;
           n.lightMap && (e.lightMap.value = n.lightMap,
           e.lightMapIntensity.value = n.lightMapIntensity),
           n.aoMap && (e.aoMap.value = n.aoMap,
           e.aoMapIntensity.value = n.aoMapIntensity),
           n.map ? r = n.map : n.specularMap ? r = n.specularMap : n.displacementMap ? r = n.displacementMap : n.normalMap ? r = n.normalMap : n.bumpMap ? r = n.bumpMap : n.roughnessMap ? r = n.roughnessMap : n.metalnessMap ? r = n.metalnessMap : n.alphaMap ? r = n.alphaMap : n.emissiveMap ? r = n.emissiveMap : n.clearcoatMap ? r = n.clearcoatMap : n.clearcoatNormalMap ? r = n.clearcoatNormalMap : n.clearcoatRoughnessMap && (r = n.clearcoatRoughnessMap),
           void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture),
           !0 === r.matrixAutoUpdate && r.updateMatrix(),
           e.uvTransform.value.copy(r.matrix)),
           n.aoMap ? a = n.aoMap : n.lightMap && (a = n.lightMap),
           void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture),
           !0 === a.matrixAutoUpdate && a.updateMatrix(),
           e.uv2Transform.value.copy(a.matrix))
       }
       function n(e, n) {
           e.roughness.value = n.roughness,
           e.metalness.value = n.metalness,
           n.roughnessMap && (e.roughnessMap.value = n.roughnessMap),
           n.metalnessMap && (e.metalnessMap.value = n.metalnessMap),
           n.emissiveMap && (e.emissiveMap.value = n.emissiveMap),
           n.bumpMap && (e.bumpMap.value = n.bumpMap,
           e.bumpScale.value = n.bumpScale,
           1 === n.side && (e.bumpScale.value *= -1)),
           n.normalMap && (e.normalMap.value = n.normalMap,
           e.normalScale.value.copy(n.normalScale),
           1 === n.side && e.normalScale.value.negate()),
           n.displacementMap && (e.displacementMap.value = n.displacementMap,
           e.displacementScale.value = n.displacementScale,
           e.displacementBias.value = n.displacementBias);
           t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity)
       }
       return {
           refreshFogUniforms: function(t, e) {
               t.fogColor.value.copy(e.color),
               e.isFog ? (t.fogNear.value = e.near,
               t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
           },
           refreshMaterialUniforms: function(t, i, r, a) {
               i.isMeshBasicMaterial ? e(t, i) : i.isMeshLambertMaterial ? (e(t, i),
               function(t, e) {
                   e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
               }(t, i)) : i.isMeshToonMaterial ? (e(t, i),
               function(t, e) {
                   e.gradientMap && (t.gradientMap.value = e.gradientMap);
                   e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                   e.bumpMap && (t.bumpMap.value = e.bumpMap,
                   t.bumpScale.value = e.bumpScale,
                   1 === e.side && (t.bumpScale.value *= -1));
                   e.normalMap && (t.normalMap.value = e.normalMap,
                   t.normalScale.value.copy(e.normalScale),
                   1 === e.side && t.normalScale.value.negate());
                   e.displacementMap && (t.displacementMap.value = e.displacementMap,
                   t.displacementScale.value = e.displacementScale,
                   t.displacementBias.value = e.displacementBias)
               }(t, i)) : i.isMeshPhongMaterial ? (e(t, i),
               function(t, e) {
                   t.specular.value.copy(e.specular),
                   t.shininess.value = Math.max(e.shininess, 1e-4),
                   e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                   e.bumpMap && (t.bumpMap.value = e.bumpMap,
                   t.bumpScale.value = e.bumpScale,
                   1 === e.side && (t.bumpScale.value *= -1));
                   e.normalMap && (t.normalMap.value = e.normalMap,
                   t.normalScale.value.copy(e.normalScale),
                   1 === e.side && t.normalScale.value.negate());
                   e.displacementMap && (t.displacementMap.value = e.displacementMap,
                   t.displacementScale.value = e.displacementScale,
                   t.displacementBias.value = e.displacementBias)
               }(t, i)) : i.isMeshStandardMaterial ? (e(t, i),
               i.isMeshPhysicalMaterial ? function(t, e) {
                   n(t, e),
                   t.reflectivity.value = e.reflectivity,
                   t.clearcoat.value = e.clearcoat,
                   t.clearcoatRoughness.value = e.clearcoatRoughness,
                   e.sheen && t.sheen.value.copy(e.sheen);
                   e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap);
                   e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap);
                   e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),
                   t.clearcoatNormalMap.value = e.clearcoatNormalMap,
                   1 === e.side && t.clearcoatNormalScale.value.negate());
                   t.transmission.value = e.transmission,
                   e.transmissionMap && (t.transmissionMap.value = e.transmissionMap)
               }(t, i) : n(t, i)) : i.isMeshMatcapMaterial ? (e(t, i),
               function(t, e) {
                   e.matcap && (t.matcap.value = e.matcap);
                   e.bumpMap && (t.bumpMap.value = e.bumpMap,
                   t.bumpScale.value = e.bumpScale,
                   1 === e.side && (t.bumpScale.value *= -1));
                   e.normalMap && (t.normalMap.value = e.normalMap,
                   t.normalScale.value.copy(e.normalScale),
                   1 === e.side && t.normalScale.value.negate());
                   e.displacementMap && (t.displacementMap.value = e.displacementMap,
                   t.displacementScale.value = e.displacementScale,
                   t.displacementBias.value = e.displacementBias)
               }(t, i)) : i.isMeshDepthMaterial ? (e(t, i),
               function(t, e) {
                   e.displacementMap && (t.displacementMap.value = e.displacementMap,
                   t.displacementScale.value = e.displacementScale,
                   t.displacementBias.value = e.displacementBias)
               }(t, i)) : i.isMeshDistanceMaterial ? (e(t, i),
               function(t, e) {
                   e.displacementMap && (t.displacementMap.value = e.displacementMap,
                   t.displacementScale.value = e.displacementScale,
                   t.displacementBias.value = e.displacementBias);
                   t.referencePosition.value.copy(e.referencePosition),
                   t.nearDistance.value = e.nearDistance,
                   t.farDistance.value = e.farDistance
               }(t, i)) : i.isMeshNormalMaterial ? (e(t, i),
               function(t, e) {
                   e.bumpMap && (t.bumpMap.value = e.bumpMap,
                   t.bumpScale.value = e.bumpScale,
                   1 === e.side && (t.bumpScale.value *= -1));
                   e.normalMap && (t.normalMap.value = e.normalMap,
                   t.normalScale.value.copy(e.normalScale),
                   1 === e.side && t.normalScale.value.negate());
                   e.displacementMap && (t.displacementMap.value = e.displacementMap,
                   t.displacementScale.value = e.displacementScale,
                   t.displacementBias.value = e.displacementBias)
               }(t, i)) : i.isLineBasicMaterial ? (function(t, e) {
                   t.diffuse.value.copy(e.color),
                   t.opacity.value = e.opacity
               }(t, i),
               i.isLineDashedMaterial && function(t, e) {
                   t.dashSize.value = e.dashSize,
                   t.totalSize.value = e.dashSize + e.gapSize,
                   t.scale.value = e.scale
               }(t, i)) : i.isPointsMaterial ? function(t, e, n, i) {
                   t.diffuse.value.copy(e.color),
                   t.opacity.value = e.opacity,
                   t.size.value = e.size * n,
                   t.scale.value = .5 * i,
                   e.map && (t.map.value = e.map);
                   e.alphaMap && (t.alphaMap.value = e.alphaMap);
                   let r;
                   e.map ? r = e.map : e.alphaMap && (r = e.alphaMap);
                   void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(),
                   t.uvTransform.value.copy(r.matrix))
               }(t, i, r, a) : i.isSpriteMaterial ? function(t, e) {
                   t.diffuse.value.copy(e.color),
                   t.opacity.value = e.opacity,
                   t.rotation.value = e.rotation,
                   e.map && (t.map.value = e.map);
                   e.alphaMap && (t.alphaMap.value = e.alphaMap);
                   let n;
                   e.map ? n = e.map : e.alphaMap && (n = e.alphaMap);
                   void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(),
                   t.uvTransform.value.copy(n.matrix))
               }(t, i) : i.isShadowMaterial ? (t.color.value.copy(i.color),
               t.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1)
           }
       }
   }
   function eh(t) {
       const e = void 0 !== (t = t || {}).canvas ? t.canvas : function() {
           const t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
           return t.style.display = "block",
           t
       }()
         , n = void 0 !== t.context ? t.context : null
         , i = void 0 !== t.alpha && t.alpha
         , r = void 0 === t.depth || t.depth
         , a = void 0 === t.stencil || t.stencil
         , o = void 0 !== t.antialias && t.antialias
         , s = void 0 === t.premultipliedAlpha || t.premultipliedAlpha
         , l = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer
         , c = void 0 !== t.powerPreference ? t.powerPreference : "default"
         , u = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
       let h = null
         , d = null;
       const p = []
         , f = [];
       this.domElement = e,
       this.debug = {
           checkShaderErrors: !0
       },
       this.autoClear = !0,
       this.autoClearColor = !0,
       this.autoClearDepth = !0,
       this.autoClearStencil = !0,
       this.sortObjects = !0,
       this.clippingPlanes = [],
       this.localClippingEnabled = !1,
       this.gammaFactor = 2,
       this.outputEncoding = Ya,
       this.physicallyCorrectLights = !1,
       this.toneMapping = 0,
       this.toneMappingExposure = 1;
       const m = this;
       let g = !1
         , v = 0
         , _ = 0
         , x = null
         , y = -1
         , w = null;
       const b = new mo
         , M = new mo;
       let S = null
         , T = e.width
         , E = e.height
         , L = 1
         , A = null
         , R = null;
       const C = new mo(0,0,T,E)
         , P = new mo(0,0,T,E);
       let D = !1;
       const I = new kl;
       let O = !1
         , N = !1;
       const z = new Zo
         , F = new _o
         , H = {
           background: null,
           fog: null,
           environment: null,
           overrideMaterial: null,
           isScene: !0
       };
       function B() {
           return null === x ? L : 1
       }
       let k, U, G, W, V, q, j, Y, X, Z, J, Q, K, $, tt, et, nt, it, rt, at, ot, st, lt = n;
       function ct(t, n) {
           for (let i = 0; i < t.length; i++) {
               const r = t[i]
                 , a = e.getContext(r, n);
               if (null !== a)
                   return a
           }
           return null
       }
       try {
           const t = {
               alpha: i,
               depth: r,
               stencil: a,
               antialias: o,
               premultipliedAlpha: s,
               preserveDrawingBuffer: l,
               powerPreference: c,
               failIfMajorPerformanceCaveat: u
           };
           if (e.addEventListener("webglcontextlost", dt, !1),
           e.addEventListener("webglcontextrestored", pt, !1),
           null === lt) {
               const e = ["webgl2", "webgl", "experimental-webgl"];
               if (!0 === m.isWebGL1Renderer && e.shift(),
               lt = ct(e, t),
               null === lt)
                   throw ct(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
           }
           void 0 === lt.getShaderPrecisionFormat && (lt.getShaderPrecisionFormat = function() {
               return {
                   rangeMin: 1,
                   rangeMax: 1,
                   precision: 1
               }
           }
           )
       } catch (t) {
           throw console.error("THREE.WebGLRenderer: " + t.message),
           t
       }
       function ut() {
           k = new $l(lt),
           U = new Jl(lt,k,t),
           k.init(U),
           ot = new Xu(lt,k,U),
           G = new ju(lt,k,U),
           W = new nc(lt),
           V = new Du,
           q = new Yu(lt,k,G,V,U,ot,W),
           j = new Kl(m),
           Y = new Gl(lt,U),
           st = new Xl(lt,k,Y,U),
           X = new tc(lt,Y,W,st),
           Z = new oc(lt,X,Y,W),
           it = new ac(lt),
           tt = new Ql(V),
           J = new Pu(m,j,k,U,st,tt),
           Q = new th(V),
           K = new zu(V),
           $ = new Gu(k,U),
           nt = new Yl(m,j,G,Z,s),
           et = new qu(m,Z,U),
           rt = new Zl(lt,k,W,U),
           at = new ec(lt,k,W,U),
           W.programs = J.programs,
           m.capabilities = U,
           m.extensions = k,
           m.properties = V,
           m.renderLists = K,
           m.shadowMap = et,
           m.state = G,
           m.info = W
       }
       ut();
       const ht = new $u(m,lt);
       function dt(t) {
           t.preventDefault(),
           console.log("THREE.WebGLRenderer: Context Lost."),
           g = !0
       }
       function pt() {
           console.log("THREE.WebGLRenderer: Context Restored."),
           g = !1;
           const t = W.autoReset
             , e = et.enabled
             , n = et.autoUpdate
             , i = et.needsUpdate
             , r = et.type;
           ut(),
           W.autoReset = t,
           et.enabled = e,
           et.autoUpdate = n,
           et.needsUpdate = i,
           et.type = r
       }
       function ft(t) {
           const e = t.target;
           e.removeEventListener("dispose", ft),
           function(t) {
               (function(t) {
                   const e = V.get(t).programs;
                   void 0 !== e && e.forEach((function(t) {
                       J.releaseProgram(t)
                   }
                   ))
               }
               )(t),
               V.remove(t)
           }(e)
       }
       this.xr = ht,
       this.getContext = function() {
           return lt
       }
       ,
       this.getContextAttributes = function() {
           return lt.getContextAttributes()
       }
       ,
       this.forceContextLoss = function() {
           const t = k.get("WEBGL_lose_context");
           t && t.loseContext()
       }
       ,
       this.forceContextRestore = function() {
           const t = k.get("WEBGL_lose_context");
           t && t.restoreContext()
       }
       ,
       this.getPixelRatio = function() {
           return L
       }
       ,
       this.setPixelRatio = function(t) {
           void 0 !== t && (L = t,
           this.setSize(T, E, !1))
       }
       ,
       this.getSize = function(t) {
           return void 0 === t && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),
           t = new so),
           t.set(T, E)
       }
       ,
       this.setSize = function(t, n, i) {
           ht.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (T = t,
           E = n,
           e.width = Math.floor(t * L),
           e.height = Math.floor(n * L),
           !1 !== i && (e.style.width = t + "px",
           e.style.height = n + "px"),
           this.setViewport(0, 0, t, n))
       }
       ,
       this.getDrawingBufferSize = function(t) {
           return void 0 === t && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),
           t = new so),
           t.set(T * L, E * L).floor()
       }
       ,
       this.setDrawingBufferSize = function(t, n, i) {
           T = t,
           E = n,
           L = i,
           e.width = Math.floor(t * i),
           e.height = Math.floor(n * i),
           this.setViewport(0, 0, t, n)
       }
       ,
       this.getCurrentViewport = function(t) {
           return void 0 === t && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),
           t = new mo),
           t.copy(b)
       }
       ,
       this.getViewport = function(t) {
           return t.copy(C)
       }
       ,
       this.setViewport = function(t, e, n, i) {
           t.isVector4 ? C.set(t.x, t.y, t.z, t.w) : C.set(t, e, n, i),
           G.viewport(b.copy(C).multiplyScalar(L).floor())
       }
       ,
       this.getScissor = function(t) {
           return t.copy(P)
       }
       ,
       this.setScissor = function(t, e, n, i) {
           t.isVector4 ? P.set(t.x, t.y, t.z, t.w) : P.set(t, e, n, i),
           G.scissor(M.copy(P).multiplyScalar(L).floor())
       }
       ,
       this.getScissorTest = function() {
           return D
       }
       ,
       this.setScissorTest = function(t) {
           G.setScissorTest(D = t)
       }
       ,
       this.setOpaqueSort = function(t) {
           A = t
       }
       ,
       this.setTransparentSort = function(t) {
           R = t
       }
       ,
       this.getClearColor = function(t) {
           return void 0 === t && (console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),
           t = new Vs),
           t.copy(nt.getClearColor())
       }
       ,
       this.setClearColor = function() {
           nt.setClearColor.apply(nt, arguments)
       }
       ,
       this.getClearAlpha = function() {
           return nt.getClearAlpha()
       }
       ,
       this.setClearAlpha = function() {
           nt.setClearAlpha.apply(nt, arguments)
       }
       ,
       this.clear = function(t, e, n) {
           let i = 0;
           (void 0 === t || t) && (i |= 16384),
           (void 0 === e || e) && (i |= 256),
           (void 0 === n || n) && (i |= 1024),
           lt.clear(i)
       }
       ,
       this.clearColor = function() {
           this.clear(!0, !1, !1)
       }
       ,
       this.clearDepth = function() {
           this.clear(!1, !0, !1)
       }
       ,
       this.clearStencil = function() {
           this.clear(!1, !1, !0)
       }
       ,
       this.dispose = function() {
           e.removeEventListener("webglcontextlost", dt, !1),
           e.removeEventListener("webglcontextrestored", pt, !1),
           K.dispose(),
           $.dispose(),
           V.dispose(),
           j.dispose(),
           Z.dispose(),
           st.dispose(),
           ht.dispose(),
           ht.removeEventListener("sessionstart", gt),
           ht.removeEventListener("sessionend", vt),
           _t.stop()
       }
       ,
       this.renderBufferImmediate = function(t, e) {
           st.initAttributes();
           const n = V.get(t);
           t.hasPositions && !n.position && (n.position = lt.createBuffer()),
           t.hasNormals && !n.normal && (n.normal = lt.createBuffer()),
           t.hasUvs && !n.uv && (n.uv = lt.createBuffer()),
           t.hasColors && !n.color && (n.color = lt.createBuffer());
           const i = e.getAttributes();
           t.hasPositions && (lt.bindBuffer(34962, n.position),
           lt.bufferData(34962, t.positionArray, 35048),
           st.enableAttribute(i.position),
           lt.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)),
           t.hasNormals && (lt.bindBuffer(34962, n.normal),
           lt.bufferData(34962, t.normalArray, 35048),
           st.enableAttribute(i.normal),
           lt.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)),
           t.hasUvs && (lt.bindBuffer(34962, n.uv),
           lt.bufferData(34962, t.uvArray, 35048),
           st.enableAttribute(i.uv),
           lt.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)),
           t.hasColors && (lt.bindBuffer(34962, n.color),
           lt.bufferData(34962, t.colorArray, 35048),
           st.enableAttribute(i.color),
           lt.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)),
           st.disableUnusedAttributes(),
           lt.drawArrays(4, 0, t.count),
           t.count = 0
       }
       ,
       this.renderBufferDirect = function(t, e, n, i, r, a) {
           null === e && (e = H);
           const o = r.isMesh && r.matrixWorld.determinant() < 0
             , s = St(t, e, i, r);
           G.setMaterial(i, o);
           let l = n.index;
           const c = n.attributes.position;
           if (null === l) {
               if (void 0 === c || 0 === c.count)
                   return
           } else if (0 === l.count)
               return;
           let u, h = 1;
           !0 === i.wireframe && (l = X.getWireframeAttribute(n),
           h = 2),
           (i.morphTargets || i.morphNormals) && it.update(r, n, i, s),
           st.setup(r, i, s, n, l);
           let d = rt;
           null !== l && (u = Y.get(l),
           d = at,
           d.setIndex(u));
           const p = null !== l ? l.count : c.count
             , f = n.drawRange.start * h
             , m = n.drawRange.count * h
             , g = null !== a ? a.start * h : 0
             , v = null !== a ? a.count * h : 1 / 0
             , _ = Math.max(f, g)
             , x = Math.min(p, f + m, g + v) - 1
             , y = Math.max(0, x - _ + 1);
           if (0 !== y) {
               if (r.isMesh)
                   !0 === i.wireframe ? (G.setLineWidth(i.wireframeLinewidth * B()),
                   d.setMode(1)) : d.setMode(4);
               else if (r.isLine) {
                   let t = i.linewidth;
                   void 0 === t && (t = 1),
                   G.setLineWidth(t * B()),
                   r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3)
               } else
                   r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
               if (r.isInstancedMesh)
                   d.renderInstances(_, y, r.count);
               else if (n.isInstancedBufferGeometry) {
                   const t = Math.min(n.instanceCount, n._maxInstanceCount);
                   d.renderInstances(_, y, t)
               } else
                   d.render(_, y)
           }
       }
       ,
       this.compile = function(t, e) {
           d = $.get(t),
           d.init(),
           t.traverseVisible((function(t) {
               t.isLight && t.layers.test(e.layers) && (d.pushLight(t),
               t.castShadow && d.pushShadow(t))
           }
           )),
           d.setupLights(),
           t.traverse((function(e) {
               const n = e.material;
               if (n)
                   if (Array.isArray(n))
                       for (let i = 0; i < n.length; i++) {
                           bt(n[i], t, e)
                       }
                   else
                       bt(n, t, e)
           }
           ))
       }
       ;
       let mt = null;
       function gt() {
           _t.stop()
       }
       function vt() {
           _t.start()
       }
       const _t = new Ul;
       function xt(t, e, n, i) {
           if (!1 === t.visible)
               return;
           if (t.layers.test(e.layers))
               if (t.isGroup)
                   n = t.renderOrder;
               else if (t.isLOD)
                   !0 === t.autoUpdate && t.update(e);
               else if (t.isLight)
                   d.pushLight(t),
                   t.castShadow && d.pushShadow(t);
               else if (t.isSprite) {
                   if (!t.frustumCulled || I.intersectsSprite(t)) {
                       i && F.setFromMatrixPosition(t.matrixWorld).applyMatrix4(z);
                       const e = Z.update(t)
                         , r = t.material;
                       r.visible && h.push(t, e, r, n, F.z, null)
                   }
               } else if (t.isImmediateRenderObject)
                   i && F.setFromMatrixPosition(t.matrixWorld).applyMatrix4(z),
                   h.push(t, null, t.material, n, F.z, null);
               else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== W.render.frame && (t.skeleton.update(),
               t.skeleton.frame = W.render.frame),
               !t.frustumCulled || I.intersectsObject(t))) {
                   i && F.setFromMatrixPosition(t.matrixWorld).applyMatrix4(z);
                   const e = Z.update(t)
                     , r = t.material;
                   if (Array.isArray(r)) {
                       const i = e.groups;
                       for (let a = 0, o = i.length; a < o; a++) {
                           const o = i[a]
                             , s = r[o.materialIndex];
                           s && s.visible && h.push(t, e, s, n, F.z, o)
                       }
                   } else
                       r.visible && h.push(t, e, r, n, F.z, null)
               }
           const r = t.children;
           for (let t = 0, a = r.length; t < a; t++)
               xt(r[t], e, n, i)
       }
       function yt(t, e, n) {
           const i = !0 === e.isScene ? e.overrideMaterial : null;
           for (let r = 0, a = t.length; r < a; r++) {
               const a = t[r]
                 , o = a.object
                 , s = a.geometry
                 , l = null === i ? a.material : i
                 , c = a.group;
               if (n.isArrayCamera) {
                   const t = n.cameras;
                   for (let n = 0, i = t.length; n < i; n++) {
                       const i = t[n];
                       o.layers.test(i.layers) && (G.viewport(b.copy(i.viewport)),
                       d.setupLightsView(i),
                       wt(o, e, i, s, l, c))
                   }
               } else
                   wt(o, e, n, s, l, c)
           }
       }
       function wt(t, e, n, i, r, a) {
           if (t.onBeforeRender(m, e, n, i, r, a),
           t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld),
           t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
           t.isImmediateRenderObject) {
               const i = St(n, e, r, t);
               G.setMaterial(r),
               st.reset(),
               function(t, e) {
                   t.render((function(t) {
                       m.renderBufferImmediate(t, e)
                   }
                   ))
               }(t, i)
           } else
               m.renderBufferDirect(n, e, i, r, t, a);
           t.onAfterRender(m, e, n, i, r, a)
       }
       function bt(t, e, n) {
           !0 !== e.isScene && (e = H);
           const i = V.get(t)
             , r = d.state.lights
             , a = d.state.shadowsArray
             , o = r.state.version
             , s = J.getParameters(t, r.state, a, e, n)
             , l = J.getProgramCacheKey(s);
           let c = i.programs;
           i.environment = t.isMeshStandardMaterial ? e.environment : null,
           i.fog = e.fog,
           i.envMap = j.get(t.envMap || i.environment),
           void 0 === c && (t.addEventListener("dispose", ft),
           c = new Map,
           i.programs = c);
           let u = c.get(l);
           if (void 0 !== u) {
               if (i.currentProgram === u && i.lightsStateVersion === o)
                   return Mt(t, s),
                   u
           } else
               s.uniforms = J.getUniforms(t),
               t.onBuild(s, m),
               t.onBeforeCompile(s, m),
               u = J.acquireProgram(s, l),
               c.set(l, u),
               i.uniforms = s.uniforms;
           const h = i.uniforms;
           (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (h.clippingPlanes = tt.uniform),
           Mt(t, s),
           i.needsLights = function(t) {
               return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights
           }(t),
           i.lightsStateVersion = o,
           i.needsLights && (h.ambientLightColor.value = r.state.ambient,
           h.lightProbe.value = r.state.probe,
           h.directionalLights.value = r.state.directional,
           h.directionalLightShadows.value = r.state.directionalShadow,
           h.spotLights.value = r.state.spot,
           h.spotLightShadows.value = r.state.spotShadow,
           h.rectAreaLights.value = r.state.rectArea,
           h.ltc_1.value = r.state.rectAreaLTC1,
           h.ltc_2.value = r.state.rectAreaLTC2,
           h.pointLights.value = r.state.point,
           h.pointLightShadows.value = r.state.pointShadow,
           h.hemisphereLights.value = r.state.hemi,
           h.directionalShadowMap.value = r.state.directionalShadowMap,
           h.directionalShadowMatrix.value = r.state.directionalShadowMatrix,
           h.spotShadowMap.value = r.state.spotShadowMap,
           h.spotShadowMatrix.value = r.state.spotShadowMatrix,
           h.pointShadowMap.value = r.state.pointShadowMap,
           h.pointShadowMatrix.value = r.state.pointShadowMatrix);
           const p = u.getUniforms()
             , f = uu.seqWithValue(p.seq, h);
           return i.currentProgram = u,
           i.uniformsList = f,
           u
       }
       function Mt(t, e) {
           const n = V.get(t);
           n.outputEncoding = e.outputEncoding,
           n.instancing = e.instancing,
           n.numClippingPlanes = e.numClippingPlanes,
           n.numIntersection = e.numClipIntersection,
           n.vertexAlphas = e.vertexAlphas
       }
       function St(t, e, n, i) {
           !0 !== e.isScene && (e = H),
           q.resetTextureUnits();
           const r = e.fog
             , a = n.isMeshStandardMaterial ? e.environment : null
             , o = null === x ? m.outputEncoding : x.texture.encoding
             , s = j.get(n.envMap || a)
             , l = !0 === n.vertexColors && i.geometry && i.geometry.attributes.color && 4 === i.geometry.attributes.color.itemSize
             , c = V.get(n)
             , u = d.state.lights;
           if (!0 === O && (!0 === N || t !== w)) {
               const e = t === w && n.id === y;
               tt.setState(n, t, e)
           }
           let h = !1;
           n.version === c.__version ? c.needsLights && c.lightsStateVersion !== u.state.version || c.outputEncoding !== o || i.isInstancedMesh && !1 === c.instancing ? h = !0 : i.isInstancedMesh || !0 !== c.instancing ? c.envMap !== s || n.fog && c.fog !== r ? h = !0 : void 0 === c.numClippingPlanes || c.numClippingPlanes === tt.numPlanes && c.numIntersection === tt.numIntersection ? c.vertexAlphas !== l && (h = !0) : h = !0 : h = !0 : (h = !0,
           c.__version = n.version);
           let p = c.currentProgram;
           !0 === h && (p = bt(n, e, i));
           let f = !1
             , g = !1
             , v = !1;
           const _ = p.getUniforms()
             , b = c.uniforms;
           if (G.useProgram(p.program) && (f = !0,
           g = !0,
           v = !0),
           n.id !== y && (y = n.id,
           g = !0),
           f || w !== t) {
               if (_.setValue(lt, "projectionMatrix", t.projectionMatrix),
               U.logarithmicDepthBuffer && _.setValue(lt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)),
               w !== t && (w = t,
               g = !0,
               v = !0),
               n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
                   const e = _.map.cameraPosition;
                   void 0 !== e && e.setValue(lt, F.setFromMatrixPosition(t.matrixWorld))
               }
               (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && _.setValue(lt, "isOrthographic", !0 === t.isOrthographicCamera),
               (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || n.skinning) && _.setValue(lt, "viewMatrix", t.matrixWorldInverse)
           }
           if (n.skinning) {
               _.setOptional(lt, i, "bindMatrix"),
               _.setOptional(lt, i, "bindMatrixInverse");
               const t = i.skeleton;
               if (t) {
                   const e = t.bones;
                   if (U.floatVertexTextures) {
                       if (null === t.boneTexture) {
                           let n = Math.sqrt(4 * e.length);
                           M = n,
                           n = Math.pow(2, Math.ceil(Math.log(M) / Math.LN2)),
                           n = Math.max(n, 4);
                           const i = new Float32Array(n * n * 4);
                           i.set(t.boneMatrices);
                           const r = new Fl(i,n,n,Va,ka);
                           t.boneMatrices = i,
                           t.boneTexture = r,
                           t.boneTextureSize = n
                       }
                       _.setValue(lt, "boneTexture", t.boneTexture, q),
                       _.setValue(lt, "boneTextureSize", t.boneTextureSize)
                   } else
                       _.setOptional(lt, t, "boneMatrices")
               }
           }
           var M;
           return (g || c.receiveShadow !== i.receiveShadow) && (c.receiveShadow = i.receiveShadow,
           _.setValue(lt, "receiveShadow", i.receiveShadow)),
           g && (_.setValue(lt, "toneMappingExposure", m.toneMappingExposure),
           c.needsLights && function(t, e) {
               t.ambientLightColor.needsUpdate = e,
               t.lightProbe.needsUpdate = e,
               t.directionalLights.needsUpdate = e,
               t.directionalLightShadows.needsUpdate = e,
               t.pointLights.needsUpdate = e,
               t.pointLightShadows.needsUpdate = e,
               t.spotLights.needsUpdate = e,
               t.spotLightShadows.needsUpdate = e,
               t.rectAreaLights.needsUpdate = e,
               t.hemisphereLights.needsUpdate = e
           }(b, v),
           r && n.fog && Q.refreshFogUniforms(b, r),
           Q.refreshMaterialUniforms(b, n, L, E),
           uu.upload(lt, c.uniformsList, b, q)),
           n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (uu.upload(lt, c.uniformsList, b, q),
           n.uniformsNeedUpdate = !1),
           n.isSpriteMaterial && _.setValue(lt, "center", i.center),
           _.setValue(lt, "modelViewMatrix", i.modelViewMatrix),
           _.setValue(lt, "normalMatrix", i.normalMatrix),
           _.setValue(lt, "modelMatrix", i.matrixWorld),
           p
       }
       _t.setAnimationLoop((function(t) {
           mt && mt(t)
       }
       )),
       "undefined" != typeof window && _t.setContext(window),
       this.setAnimationLoop = function(t) {
           mt = t,
           ht.setAnimationLoop(t),
           null === t ? _t.stop() : _t.start()
       }
       ,
       ht.addEventListener("sessionstart", gt),
       ht.addEventListener("sessionend", vt),
       this.render = function(t, e) {
           let n, i;
           if (void 0 !== arguments[2] && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),
           n = arguments[2]),
           void 0 !== arguments[3] && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),
           i = arguments[3]),
           void 0 !== e && !0 !== e.isCamera)
               return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
           if (!0 === g)
               return;
           !0 === t.autoUpdate && t.updateMatrixWorld(),
           null === e.parent && e.updateMatrixWorld(),
           !0 === ht.enabled && !0 === ht.isPresenting && (e = ht.getCamera(e)),
           !0 === t.isScene && t.onBeforeRender(m, t, e, n || x),
           d = $.get(t, f.length),
           d.init(),
           f.push(d),
           z.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
           I.setFromProjectionMatrix(z),
           N = this.localClippingEnabled,
           O = tt.init(this.clippingPlanes, N, e),
           h = K.get(t, p.length),
           h.init(),
           p.push(h),
           xt(t, e, 0, m.sortObjects),
           h.finish(),
           !0 === m.sortObjects && h.sort(A, R),
           !0 === O && tt.beginShadows();
           const r = d.state.shadowsArray;
           et.render(r, t, e),
           d.setupLights(),
           d.setupLightsView(e),
           !0 === O && tt.endShadows(),
           !0 === this.info.autoReset && this.info.reset(),
           void 0 !== n && this.setRenderTarget(n),
           nt.render(h, t, e, i);
           const a = h.opaque
             , o = h.transparent;
           a.length > 0 && yt(a, t, e),
           o.length > 0 && yt(o, t, e),
           null !== x && (q.updateRenderTargetMipmap(x),
           q.updateMultisampleRenderTarget(x)),
           !0 === t.isScene && t.onAfterRender(m, t, e),
           G.buffers.depth.setTest(!0),
           G.buffers.depth.setMask(!0),
           G.buffers.color.setMask(!0),
           G.setPolygonOffset(!1),
           st.resetDefaultState(),
           y = -1,
           w = null,
           f.pop(),
           d = f.length > 0 ? f[f.length - 1] : null,
           p.pop(),
           h = p.length > 0 ? p[p.length - 1] : null
       }
       ,
       this.getActiveCubeFace = function() {
           return v
       }
       ,
       this.getActiveMipmapLevel = function() {
           return _
       }
       ,
       this.getRenderTarget = function() {
           return x
       }
       ,
       this.setRenderTarget = function(t, e=0, n=0) {
           x = t,
           v = e,
           _ = n,
           t && void 0 === V.get(t).__webglFramebuffer && q.setupRenderTarget(t);
           let i = null
             , r = !1
             , a = !1;
           if (t) {
               const n = t.texture;
               (n.isDataTexture3D || n.isDataTexture2DArray) && (a = !0);
               const o = V.get(t).__webglFramebuffer;
               t.isWebGLCubeRenderTarget ? (i = o[e],
               r = !0) : i = t.isWebGLMultisampleRenderTarget ? V.get(t).__webglMultisampledFramebuffer : o,
               b.copy(t.viewport),
               M.copy(t.scissor),
               S = t.scissorTest
           } else
               b.copy(C).multiplyScalar(L).floor(),
               M.copy(P).multiplyScalar(L).floor(),
               S = D;
           if (G.bindFramebuffer(36160, i),
           G.viewport(b),
           G.scissor(M),
           G.setScissorTest(S),
           r) {
               const i = V.get(t.texture);
               lt.framebufferTexture2D(36160, 36064, 34069 + e, i.__webglTexture, n)
           } else if (a) {
               const i = V.get(t.texture)
                 , r = e || 0;
               lt.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r)
           }
       }
       ,
       this.readRenderTargetPixels = function(t, e, n, i, r, a, o) {
           if (!t || !t.isWebGLRenderTarget)
               return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
           let s = V.get(t).__webglFramebuffer;
           if (t.isWebGLCubeRenderTarget && void 0 !== o && (s = s[o]),
           s) {
               G.bindFramebuffer(36160, s);
               try {
                   const o = t.texture
                     , s = o.format
                     , l = o.type;
                   if (s !== Va && ot.convert(s) !== lt.getParameter(35739))
                       return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                   const c = l === Ua && (k.has("EXT_color_buffer_half_float") || U.isWebGL2 && k.has("EXT_color_buffer_float"));
                   if (!(l === Fa || ot.convert(l) === lt.getParameter(35738) || l === ka && (U.isWebGL2 || k.has("OES_texture_float") || k.has("WEBGL_color_buffer_float")) || c))
                       return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                   36053 === lt.checkFramebufferStatus(36160) ? e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && lt.readPixels(e, n, i, r, ot.convert(s), ot.convert(l), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
               } finally {
                   const t = null !== x ? V.get(x).__webglFramebuffer : null;
                   G.bindFramebuffer(36160, t)
               }
           }
       }
       ,
       this.copyFramebufferToTexture = function(t, e, n=0) {
           const i = Math.pow(2, -n)
             , r = Math.floor(e.image.width * i)
             , a = Math.floor(e.image.height * i)
             , o = ot.convert(e.format);
           q.setTexture2D(e, 0),
           lt.copyTexImage2D(3553, n, o, t.x, t.y, r, a, 0),
           G.unbindTexture()
       }
       ,
       this.copyTextureToTexture = function(t, e, n, i=0) {
           const r = e.image.width
             , a = e.image.height
             , o = ot.convert(n.format)
             , s = ot.convert(n.type);
           q.setTexture2D(n, 0),
           lt.pixelStorei(37440, n.flipY),
           lt.pixelStorei(37441, n.premultiplyAlpha),
           lt.pixelStorei(3317, n.unpackAlignment),
           e.isDataTexture ? lt.texSubImage2D(3553, i, t.x, t.y, r, a, o, s, e.image.data) : e.isCompressedTexture ? lt.compressedTexSubImage2D(3553, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, o, e.mipmaps[0].data) : lt.texSubImage2D(3553, i, t.x, t.y, o, s, e.image),
           0 === i && n.generateMipmaps && lt.generateMipmap(3553),
           G.unbindTexture()
       }
       ,
       this.copyTextureToTexture3D = function(t, e, n, i, r=0) {
           if (m.isWebGL1Renderer)
               return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
           const {width: a, height: o, data: s} = n.image
             , l = ot.convert(i.format)
             , c = ot.convert(i.type);
           let u;
           if (i.isDataTexture3D)
               q.setTexture3D(i, 0),
               u = 32879;
           else {
               if (!i.isDataTexture2DArray)
                   return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
               q.setTexture2DArray(i, 0),
               u = 35866
           }
           lt.pixelStorei(37440, i.flipY),
           lt.pixelStorei(37441, i.premultiplyAlpha),
           lt.pixelStorei(3317, i.unpackAlignment);
           const h = lt.getParameter(3314)
             , d = lt.getParameter(32878)
             , p = lt.getParameter(3316)
             , f = lt.getParameter(3315)
             , g = lt.getParameter(32877);
           lt.pixelStorei(3314, a),
           lt.pixelStorei(32878, o),
           lt.pixelStorei(3316, t.min.x),
           lt.pixelStorei(3315, t.min.y),
           lt.pixelStorei(32877, t.min.z),
           lt.texSubImage3D(u, r, e.x, e.y, e.z, t.max.x - t.min.x + 1, t.max.y - t.min.y + 1, t.max.z - t.min.z + 1, l, c, s),
           lt.pixelStorei(3314, h),
           lt.pixelStorei(32878, d),
           lt.pixelStorei(3316, p),
           lt.pixelStorei(3315, f),
           lt.pixelStorei(32877, g),
           0 === r && i.generateMipmaps && lt.generateMipmap(u),
           G.unbindTexture()
       }
       ,
       this.initTexture = function(t) {
           q.setTexture2D(t, 0),
           G.unbindTexture()
       }
       ,
       this.resetState = function() {
           v = 0,
           _ = 0,
           x = null,
           G.reset(),
           st.reset()
       }
       ,
       "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
           detail: this
       }))
   }
   class nh extends ys {
       constructor() {
           super(),
           this.type = "Scene",
           this.background = null,
           this.environment = null,
           this.fog = null,
           this.overrideMaterial = null,
           this.autoUpdate = !0,
           "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
               detail: this
           }))
       }
       copy(t, e) {
           return super.copy(t, e),
           null !== t.background && (this.background = t.background.clone()),
           null !== t.environment && (this.environment = t.environment.clone()),
           null !== t.fog && (this.fog = t.fog.clone()),
           null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()),
           this.autoUpdate = t.autoUpdate,
           this.matrixAutoUpdate = t.matrixAutoUpdate,
           this
       }
       toJSON(t) {
           const e = super.toJSON(t);
           return null !== this.background && (e.object.background = this.background.toJSON(t)),
           null !== this.environment && (e.object.environment = this.environment.toJSON(t)),
           null !== this.fog && (e.object.fog = this.fog.toJSON()),
           e
       }
   }
   nh.prototype.isScene = !0;
   class ih extends Cl {
       constructor(t) {
           super(t),
           this.type = "RawShaderMaterial"
       }
   }
   ih.prototype.isRawShaderMaterial = !0;
   const rh = {
       enabled: !1,
       files: {},
       add: function(t, e) {
           !1 !== this.enabled && (this.files[t] = e)
       },
       get: function(t) {
           if (!1 !== this.enabled)
               return this.files[t]
       },
       remove: function(t) {
           delete this.files[t]
       },
       clear: function() {
           this.files = {}
       }
   };
   const ah = new class {
       constructor(t, e, n) {
           const i = this;
           let r, a = !1, o = 0, s = 0;
           const l = [];
           this.onStart = void 0,
           this.onLoad = t,
           this.onProgress = e,
           this.onError = n,
           this.itemStart = function(t) {
               s++,
               !1 === a && void 0 !== i.onStart && i.onStart(t, o, s),
               a = !0
           }
           ,
           this.itemEnd = function(t) {
               o++,
               void 0 !== i.onProgress && i.onProgress(t, o, s),
               o === s && (a = !1,
               void 0 !== i.onLoad && i.onLoad())
           }
           ,
           this.itemError = function(t) {
               void 0 !== i.onError && i.onError(t)
           }
           ,
           this.resolveURL = function(t) {
               return r ? r(t) : t
           }
           ,
           this.setURLModifier = function(t) {
               return r = t,
               this
           }
           ,
           this.addHandler = function(t, e) {
               return l.push(t, e),
               this
           }
           ,
           this.removeHandler = function(t) {
               const e = l.indexOf(t);
               return -1 !== e && l.splice(e, 2),
               this
           }
           ,
           this.getHandler = function(t) {
               for (let e = 0, n = l.length; e < n; e += 2) {
                   const n = l[e]
                     , i = l[e + 1];
                   if (n.global && (n.lastIndex = 0),
                   n.test(t))
                       return i
               }
               return null
           }
       }
   }
   ;
   class oh {
       constructor(t) {
           this.manager = void 0 !== t ? t : ah,
           this.crossOrigin = "anonymous",
           this.withCredentials = !1,
           this.path = "",
           this.resourcePath = "",
           this.requestHeader = {}
       }
       load() {}
       loadAsync(t, e) {
           const n = this;
           return new Promise((function(i, r) {
               n.load(t, i, e, r)
           }
           ))
       }
       parse() {}
       setCrossOrigin(t) {
           return this.crossOrigin = t,
           this
       }
       setWithCredentials(t) {
           return this.withCredentials = t,
           this
       }
       setPath(t) {
           return this.path = t,
           this
       }
       setResourcePath(t) {
           return this.resourcePath = t,
           this
       }
       setRequestHeader(t) {
           return this.requestHeader = t,
           this
       }
   }
   class sh extends oh {
       constructor(t) {
           super(t)
       }
       load(t, e, n, i) {
           void 0 !== this.path && (t = this.path + t),
           t = this.manager.resolveURL(t);
           const r = this
             , a = rh.get(t);
           if (void 0 !== a)
               return r.manager.itemStart(t),
               setTimeout((function() {
                   e && e(a),
                   r.manager.itemEnd(t)
               }
               ), 0),
               a;
           const o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
           function s() {
               o.removeEventListener("load", s, !1),
               o.removeEventListener("error", l, !1),
               rh.add(t, this),
               e && e(this),
               r.manager.itemEnd(t)
           }
           function l(e) {
               o.removeEventListener("load", s, !1),
               o.removeEventListener("error", l, !1),
               i && i(e),
               r.manager.itemError(t),
               r.manager.itemEnd(t)
           }
           return o.addEventListener("load", s, !1),
           o.addEventListener("error", l, !1),
           "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin),
           r.manager.itemStart(t),
           o.src = t,
           o
       }
   }
   class lh extends oh {
       constructor(t) {
           super(t)
       }
       load(t, e, n, i) {
           const r = new Nl
             , a = new sh(this.manager);
           a.setCrossOrigin(this.crossOrigin),
           a.setPath(this.path);
           let o = 0;
           function s(n) {
               a.load(t[n], (function(t) {
                   r.images[n] = t,
                   o++,
                   6 === o && (r.needsUpdate = !0,
                   e && e(r))
               }
               ), void 0, i)
           }
           for (let e = 0; e < t.length; ++e)
               s(e);
           return r
       }
   }
   class ch extends oh {
       constructor(t) {
           super(t)
       }
       load(t, e, n, i) {
           const r = new po
             , a = new sh(this.manager);
           return a.setCrossOrigin(this.crossOrigin),
           a.setPath(this.path),
           a.load(t, (function(n) {
               r.image = n;
               const i = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
               r.format = i ? Wa : Va,
               r.needsUpdate = !0,
               void 0 !== e && e(r)
           }
           ), n, i),
           r
       }
   }
   class uh extends ys {
       constructor(t, e=1) {
           super(),
           this.type = "Light",
           this.color = new Vs(t),
           this.intensity = e
       }
       dispose() {}
       copy(t) {
           return super.copy(t),
           this.color.copy(t.color),
           this.intensity = t.intensity,
           this
       }
       toJSON(t) {
           const e = super.toJSON(t);
           return e.object.color = this.color.getHex(),
           e.object.intensity = this.intensity,
           void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()),
           void 0 !== this.distance && (e.object.distance = this.distance),
           void 0 !== this.angle && (e.object.angle = this.angle),
           void 0 !== this.decay && (e.object.decay = this.decay),
           void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
           void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
           e
       }
   }
   uh.prototype.isLight = !0;
   class hh extends Pl {
       constructor(t=-1, e=1, n=1, i=-1, r=.1, a=2e3) {
           super(),
           this.type = "OrthographicCamera",
           this.zoom = 1,
           this.view = null,
           this.left = t,
           this.right = e,
           this.top = n,
           this.bottom = i,
           this.near = r,
           this.far = a,
           this.updateProjectionMatrix()
       }
       copy(t, e) {
           return super.copy(t, e),
           this.left = t.left,
           this.right = t.right,
           this.top = t.top,
           this.bottom = t.bottom,
           this.near = t.near,
           this.far = t.far,
           this.zoom = t.zoom,
           this.view = null === t.view ? null : Object.assign({}, t.view),
           this
       }
       setViewOffset(t, e, n, i, r, a) {
           null === this.view && (this.view = {
               enabled: !0,
               fullWidth: 1,
               fullHeight: 1,
               offsetX: 0,
               offsetY: 0,
               width: 1,
               height: 1
           }),
           this.view.enabled = !0,
           this.view.fullWidth = t,
           this.view.fullHeight = e,
           this.view.offsetX = n,
           this.view.offsetY = i,
           this.view.width = r,
           this.view.height = a,
           this.updateProjectionMatrix()
       }
       clearViewOffset() {
           null !== this.view && (this.view.enabled = !1),
           this.updateProjectionMatrix()
       }
       updateProjectionMatrix() {
           const t = (this.right - this.left) / (2 * this.zoom)
             , e = (this.top - this.bottom) / (2 * this.zoom)
             , n = (this.right + this.left) / 2
             , i = (this.top + this.bottom) / 2;
           let r = n - t
             , a = n + t
             , o = i + e
             , s = i - e;
           if (null !== this.view && this.view.enabled) {
               const t = (this.right - this.left) / this.view.fullWidth / this.zoom
                 , e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
               r += t * this.view.offsetX,
               a = r + t * this.view.width,
               o -= e * this.view.offsetY,
               s = o - e * this.view.height
           }
           this.projectionMatrix.makeOrthographic(r, a, o, s, this.near, this.far),
           this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
       }
       toJSON(t) {
           const e = super.toJSON(t);
           return e.object.zoom = this.zoom,
           e.object.left = this.left,
           e.object.right = this.right,
           e.object.top = this.top,
           e.object.bottom = this.bottom,
           e.object.near = this.near,
           e.object.far = this.far,
           null !== this.view && (e.object.view = Object.assign({}, this.view)),
           e
       }
   }
   hh.prototype.isOrthographicCamera = !0;
   const dh = "\\[\\]\\.:\\/"
     , ph = "[^\\[\\]\\.:\\/]"
     , fh = "[^" + dh.replace("\\.", "") + "]";
   /((?:WC+[\/:])*)/.source.replace("WC", ph),
   /(WCOD+)?/.source.replace("WCOD", fh),
   /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", ph),
   /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", ph);
   const mh = new qs({
       side: 1,
       depthWrite: !1,
       depthTest: !1
   });
   new Sl(new El,mh),
   oh.prototype.extractUrlBase = function(t) {
       return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),
       class {
           static decodeText(t) {
               if ("undefined" != typeof TextDecoder)
                   return (new TextDecoder).decode(t);
               let e = "";
               for (let n = 0, i = t.length; n < i; n++)
                   e += String.fromCharCode(t[n]);
               try {
                   return decodeURIComponent(escape(e))
               } catch (t) {
                   return e
               }
           }
           static extractUrlBase(t) {
               const e = t.lastIndexOf("/");
               return -1 === e ? "./" : t.substr(0, e + 1)
           }
       }
       .extractUrlBase(t)
   }
   ,
   oh.Handlers = {
       add: function() {
           console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")
       },
       get: function() {
           console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")
       }
   },
   wo.prototype.center = function(t) {
       return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),
       this.getCenter(t)
   }
   ,
   wo.prototype.empty = function() {
       return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
       this.isEmpty()
   }
   ,
   wo.prototype.isIntersectionBox = function(t) {
       return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),
       this.intersectsBox(t)
   }
   ,
   wo.prototype.isIntersectionSphere = function(t) {
       return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
       this.intersectsSphere(t)
   }
   ,
   wo.prototype.size = function(t) {
       return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
       this.getSize(t)
   }
   ,
   ko.prototype.empty = function() {
       return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),
       this.isEmpty()
   }
   ,
   kl.prototype.setFromMatrix = function(t) {
       return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),
       this.setFromProjectionMatrix(t)
   }
   ,
   lo.prototype.flattenToArrayOffset = function(t, e) {
       return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
       this.toArray(t, e)
   }
   ,
   lo.prototype.multiplyVector3 = function(t) {
       return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),
       t.applyMatrix3(this)
   }
   ,
   lo.prototype.multiplyVector3Array = function() {
       console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
   }
   ,
   lo.prototype.applyToBufferAttribute = function(t) {
       return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),
       t.applyMatrix3(this)
   }
   ,
   lo.prototype.applyToVector3Array = function() {
       console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
   }
   ,
   lo.prototype.getInverse = function(t) {
       return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),
       this.copy(t).invert()
   }
   ,
   Zo.prototype.extractPosition = function(t) {
       return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),
       this.copyPosition(t)
   }
   ,
   Zo.prototype.flattenToArrayOffset = function(t, e) {
       return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
       this.toArray(t, e)
   }
   ,
   Zo.prototype.getPosition = function() {
       return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),
       (new _o).setFromMatrixColumn(this, 3)
   }
   ,
   Zo.prototype.setRotationFromQuaternion = function(t) {
       return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),
       this.makeRotationFromQuaternion(t)
   }
   ,
   Zo.prototype.multiplyToArray = function() {
       console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
   }
   ,
   Zo.prototype.multiplyVector3 = function(t) {
       return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),
       t.applyMatrix4(this)
   }
   ,
   Zo.prototype.multiplyVector4 = function(t) {
       return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),
       t.applyMatrix4(this)
   }
   ,
   Zo.prototype.multiplyVector3Array = function() {
       console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
   }
   ,
   Zo.prototype.rotateAxis = function(t) {
       console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),
       t.transformDirection(this)
   }
   ,
   Zo.prototype.crossVector = function(t) {
       return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),
       t.applyMatrix4(this)
   }
   ,
   Zo.prototype.translate = function() {
       console.error("THREE.Matrix4: .translate() has been removed.")
   }
   ,
   Zo.prototype.rotateX = function() {
       console.error("THREE.Matrix4: .rotateX() has been removed.")
   }
   ,
   Zo.prototype.rotateY = function() {
       console.error("THREE.Matrix4: .rotateY() has been removed.")
   }
   ,
   Zo.prototype.rotateZ = function() {
       console.error("THREE.Matrix4: .rotateZ() has been removed.")
   }
   ,
   Zo.prototype.rotateByAxis = function() {
       console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
   }
   ,
   Zo.prototype.applyToBufferAttribute = function(t) {
       return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),
       t.applyMatrix4(this)
   }
   ,
   Zo.prototype.applyToVector3Array = function() {
       console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
   }
   ,
   Zo.prototype.makeFrustum = function(t, e, n, i, r, a) {
       return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),
       this.makePerspective(t, e, i, n, r, a)
   }
   ,
   Zo.prototype.getInverse = function(t) {
       return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),
       this.copy(t).invert()
   }
   ,
   Ss.prototype.isIntersectionLine = function(t) {
       return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),
       this.intersectsLine(t)
   }
   ,
   vo.prototype.multiplyVector3 = function(t) {
       return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),
       t.applyQuaternion(this)
   }
   ,
   vo.prototype.inverse = function() {
       return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),
       this.invert()
   }
   ,
   Xo.prototype.isIntersectionBox = function(t) {
       return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),
       this.intersectsBox(t)
   }
   ,
   Xo.prototype.isIntersectionPlane = function(t) {
       return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),
       this.intersectsPlane(t)
   }
   ,
   Xo.prototype.isIntersectionSphere = function(t) {
       return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
       this.intersectsSphere(t)
   }
   ,
   Ns.prototype.area = function() {
       return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),
       this.getArea()
   }
   ,
   Ns.prototype.barycoordFromPoint = function(t, e) {
       return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),
       this.getBarycoord(t, e)
   }
   ,
   Ns.prototype.midpoint = function(t) {
       return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),
       this.getMidpoint(t)
   }
   ,
   Ns.prototypenormal = function(t) {
       return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
       this.getNormal(t)
   }
   ,
   Ns.prototype.plane = function(t) {
       return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),
       this.getPlane(t)
   }
   ,
   Ns.barycoordFromPoint = function(t, e, n, i, r) {
       return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),
       Ns.getBarycoord(t, e, n, i, r)
   }
   ,
   Ns.normal = function(t, e, n, i) {
       return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
       Ns.getNormal(t, e, n, i)
   }
   ,
   so.prototype.fromAttribute = function(t, e, n) {
       return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),
       this.fromBufferAttribute(t, e, n)
   }
   ,
   so.prototype.distanceToManhattan = function(t) {
       return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),
       this.manhattanDistanceTo(t)
   }
   ,
   so.prototype.lengthManhattan = function() {
       return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),
       this.manhattanLength()
   }
   ,
   _o.prototype.setEulerFromRotationMatrix = function() {
       console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
   }
   ,
   _o.prototype.setEulerFromQuaternion = function() {
       console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
   }
   ,
   _o.prototype.getPositionFromMatrix = function(t) {
       return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),
       this.setFromMatrixPosition(t)
   }
   ,
   _o.prototype.getScaleFromMatrix = function(t) {
       return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),
       this.setFromMatrixScale(t)
   }
   ,
   _o.prototype.getColumnFromMatrix = function(t, e) {
       return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),
       this.setFromMatrixColumn(e, t)
   }
   ,
   _o.prototype.applyProjection = function(t) {
       return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),
       this.applyMatrix4(t)
   }
   ,
   _o.prototype.fromAttribute = function(t, e, n) {
       return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),
       this.fromBufferAttribute(t, e, n)
   }
   ,
   _o.prototype.distanceToManhattan = function(t) {
       return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),
       this.manhattanDistanceTo(t)
   }
   ,
   _o.prototype.lengthManhattan = function() {
       return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),
       this.manhattanLength()
   }
   ,
   mo.prototype.fromAttribute = function(t, e, n) {
       return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),
       this.fromBufferAttribute(t, e, n)
   }
   ,
   mo.prototype.lengthManhattan = function() {
       return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),
       this.manhattanLength()
   }
   ,
   ys.prototype.getChildByName = function(t) {
       return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),
       this.getObjectByName(t)
   }
   ,
   ys.prototype.renderDepth = function() {
       console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
   }
   ,
   ys.prototype.translate = function(t, e) {
       return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),
       this.translateOnAxis(e, t)
   }
   ,
   ys.prototype.getWorldRotation = function() {
       console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
   }
   ,
   ys.prototype.applyMatrix = function(t) {
       return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),
       this.applyMatrix4(t)
   }
   ,
   Object.defineProperties(ys.prototype, {
       eulerOrder: {
           get: function() {
               return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
               this.rotation.order
           },
           set: function(t) {
               console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
               this.rotation.order = t
           }
       },
       useQuaternion: {
           get: function() {
               console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
           },
           set: function() {
               console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
           }
       }
   }),
   Sl.prototype.setDrawMode = function() {
       console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
   }
   ,
   Object.defineProperties(Sl.prototype, {
       drawMode: {
           get: function() {
               return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),
               0
           },
           set: function() {
               console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
           }
       }
   }),
   Dl.prototype.setLens = function(t, e) {
       console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),
       void 0 !== e && (this.filmGauge = e),
       this.setFocalLength(t)
   }
   ,
   Object.defineProperties(uh.prototype, {
       onlyShadow: {
           set: function() {
               console.warn("THREE.Light: .onlyShadow has been removed.")
           }
       },
       shadowCameraFov: {
           set: function(t) {
               console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),
               this.shadow.camera.fov = t
           }
       },
       shadowCameraLeft: {
           set: function(t) {
               console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),
               this.shadow.camera.left = t
           }
       },
       shadowCameraRight: {
           set: function(t) {
               console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),
               this.shadow.camera.right = t
           }
       },
       shadowCameraTop: {
           set: function(t) {
               console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),
               this.shadow.camera.top = t
           }
       },
       shadowCameraBottom: {
           set: function(t) {
               console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),
               this.shadow.camera.bottom = t
           }
       },
       shadowCameraNear: {
           set: function(t) {
               console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),
               this.shadow.camera.near = t
           }
       },
       shadowCameraFar: {
           set: function(t) {
               console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),
               this.shadow.camera.far = t
           }
       },
       shadowCameraVisible: {
           set: function() {
               console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
           }
       },
       shadowBias: {
           set: function(t) {
               console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
               this.shadow.bias = t
           }
       },
       shadowDarkness: {
           set: function() {
               console.warn("THREE.Light: .shadowDarkness has been removed.")
           }
       },
       shadowMapWidth: {
           set: function(t) {
               console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),
               this.shadow.mapSize.width = t
           }
       },
       shadowMapHeight: {
           set: function(t) {
               console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),
               this.shadow.mapSize.height = t
           }
       }
   }),
   Object.defineProperties(Xs.prototype, {
       length: {
           get: function() {
               return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),
               this.array.length
           }
       },
       dynamic: {
           get: function() {
               return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),
               this.usage === Ja
           },
           set: function() {
               console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),
               this.setUsage(Ja)
           }
       }
   }),
   Xs.prototype.setDynamic = function(t) {
       return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),
       this.setUsage(!0 === t ? Ja : Za),
       this
   }
   ,
   Xs.prototype.copyIndicesArray = function() {
       console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
   }
   ,
   Xs.prototype.setArray = function() {
       console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
   }
   ,
   ol.prototype.addIndex = function(t) {
       console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),
       this.setIndex(t)
   }
   ,
   ol.prototype.addAttribute = function(t, e) {
       return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),
       e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
       this.setIndex(e),
       this) : this.setAttribute(t, e) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
       this.setAttribute(t, new Xs(e,arguments[2])))
   }
   ,
   ol.prototype.addDrawCall = function(t, e, n) {
       void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),
       console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
       this.addGroup(t, e)
   }
   ,
   ol.prototype.clearDrawCalls = function() {
       console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),
       this.clearGroups()
   }
   ,
   ol.prototype.computeOffsets = function() {
       console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
   }
   ,
   ol.prototype.removeAttribute = function(t) {
       return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),
       this.deleteAttribute(t)
   }
   ,
   ol.prototype.applyMatrix = function(t) {
       return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),
       this.applyMatrix4(t)
   }
   ,
   Object.defineProperties(ol.prototype, {
       drawcalls: {
           get: function() {
               return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),
               this.groups
           }
       },
       offsets: {
           get: function() {
               return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),
               this.groups
           }
       }
   }),
   nh.prototype.dispose = function() {
       console.error("THREE.Scene: .dispose() has been removed.")
   }
   ,
   Object.defineProperties(Fs.prototype, {
       wrapAround: {
           get: function() {
               console.warn("THREE.Material: .wrapAround has been removed.")
           },
           set: function() {
               console.warn("THREE.Material: .wrapAround has been removed.")
           }
       },
       overdraw: {
           get: function() {
               console.warn("THREE.Material: .overdraw has been removed.")
           },
           set: function() {
               console.warn("THREE.Material: .overdraw has been removed.")
           }
       },
       wrapRGB: {
           get: function() {
               return console.warn("THREE.Material: .wrapRGB has been removed."),
               new Vs
           }
       },
       shading: {
           get: function() {
               console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
           },
           set: function(t) {
               console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
               this.flatShading = 1 === t
           }
       },
       stencilMask: {
           get: function() {
               return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."),
               this.stencilFuncMask
           },
           set: function(t) {
               console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."),
               this.stencilFuncMask = t
           }
       }
   }),
   Object.defineProperties(Cl.prototype, {
       derivatives: {
           get: function() {
               return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
               this.extensions.derivatives
           },
           set: function(t) {
               console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
               this.extensions.derivatives = t
           }
       }
   }),
   eh.prototype.clearTarget = function(t, e, n, i) {
       console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),
       this.setRenderTarget(t),
       this.clear(e, n, i)
   }
   ,
   eh.prototype.animate = function(t) {
       console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),
       this.setAnimationLoop(t)
   }
   ,
   eh.prototype.getCurrentRenderTarget = function() {
       return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),
       this.getRenderTarget()
   }
   ,
   eh.prototype.getMaxAnisotropy = function() {
       return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),
       this.capabilities.getMaxAnisotropy()
   }
   ,
   eh.prototype.getPrecision = function() {
       return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),
       this.capabilities.precision
   }
   ,
   eh.prototype.resetGLState = function() {
       return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),
       this.state.reset()
   }
   ,
   eh.prototype.supportsFloatTextures = function() {
       return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),
       this.extensions.get("OES_texture_float")
   }
   ,
   eh.prototype.supportsHalfFloatTextures = function() {
       return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),
       this.extensions.get("OES_texture_half_float")
   }
   ,
   eh.prototype.supportsStandardDerivatives = function() {
       return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),
       this.extensions.get("OES_standard_derivatives")
   }
   ,
   eh.prototype.supportsCompressedTextureS3TC = function() {
       return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),
       this.extensions.get("WEBGL_compressed_texture_s3tc")
   }
   ,
   eh.prototype.supportsCompressedTexturePVRTC = function() {
       return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),
       this.extensions.get("WEBGL_compressed_texture_pvrtc")
   }
   ,
   eh.prototype.supportsBlendMinMax = function() {
       return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),
       this.extensions.get("EXT_blend_minmax")
   }
   ,
   eh.prototype.supportsVertexTextures = function() {
       return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),
       this.capabilities.vertexTextures
   }
   ,
   eh.prototype.supportsInstancedArrays = function() {
       return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),
       this.extensions.get("ANGLE_instanced_arrays")
   }
   ,
   eh.prototype.enableScissorTest = function(t) {
       console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),
       this.setScissorTest(t)
   }
   ,
   eh.prototype.initMaterial = function() {
       console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
   }
   ,
   eh.prototype.addPrePlugin = function() {
       console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
   }
   ,
   eh.prototype.addPostPlugin = function() {
       console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
   }
   ,
   eh.prototype.updateShadowMap = function() {
       console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
   }
   ,
   eh.prototype.setFaceCulling = function() {
       console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
   }
   ,
   eh.prototype.allocTextureUnit = function() {
       console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
   }
   ,
   eh.prototype.setTexture = function() {
       console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
   }
   ,
   eh.prototype.setTexture2D = function() {
       console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
   }
   ,
   eh.prototype.setTextureCube = function() {
       console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
   }
   ,
   eh.prototype.getActiveMipMapLevel = function() {
       return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),
       this.getActiveMipmapLevel()
   }
   ,
   Object.defineProperties(eh.prototype, {
       shadowMapEnabled: {
           get: function() {
               return this.shadowMap.enabled
           },
           set: function(t) {
               console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),
               this.shadowMap.enabled = t
           }
       },
       shadowMapType: {
           get: function() {
               return this.shadowMap.type
           },
           set: function(t) {
               console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),
               this.shadowMap.type = t
           }
       },
       shadowMapCullFace: {
           get: function() {
               console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
           },
           set: function() {
               console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
           }
       },
       context: {
           get: function() {
               return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),
               this.getContext()
           }
       },
       vr: {
           get: function() {
               return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),
               this.xr
           }
       },
       gammaInput: {
           get: function() {
               return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),
               !1
           },
           set: function() {
               console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")
           }
       },
       gammaOutput: {
           get: function() {
               return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),
               !1
           },
           set: function(t) {
               console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),
               this.outputEncoding = !0 === t ? 3001 : Ya
           }
       },
       toneMappingWhitePoint: {
           get: function() {
               return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),
               1
           },
           set: function() {
               console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")
           }
       }
   }),
   Object.defineProperties(qu.prototype, {
       cullFace: {
           get: function() {
               console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
           },
           set: function() {
               console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
           }
       },
       renderReverseSided: {
           get: function() {
               console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
           },
           set: function() {
               console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
           }
       },
       renderSingleSided: {
           get: function() {
               console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
           },
           set: function() {
               console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
           }
       }
   }),
   Object.defineProperties(go.prototype, {
       wrapS: {
           get: function() {
               return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
               this.texture.wrapS
           },
           set: function(t) {
               console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
               this.texture.wrapS = t
           }
       },
       wrapT: {
           get: function() {
               return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
               this.texture.wrapT
           },
           set: function(t) {
               console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
               this.texture.wrapT = t
           }
       },
       magFilter: {
           get: function() {
               return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
               this.texture.magFilter
           },
           set: function(t) {
               console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
               this.texture.magFilter = t
           }
       },
       minFilter: {
           get: function() {
               return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
               this.texture.minFilter
           },
           set: function(t) {
               console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
               this.texture.minFilter = t
           }
       },
       anisotropy: {
           get: function() {
               return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
               this.texture.anisotropy
           },
           set: function(t) {
               console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
               this.texture.anisotropy = t
           }
       },
       offset: {
           get: function() {
               return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
               this.texture.offset
           },
           set: function(t) {
               console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
               this.texture.offset = t
           }
       },
       repeat: {
           get: function() {
               return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
               this.texture.repeat
           },
           set: function(t) {
               console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
               this.texture.repeat = t
           }
       },
       format: {
           get: function() {
               return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
               this.texture.format
           },
           set: function(t) {
               console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
               this.texture.format = t
           }
       },
       type: {
           get: function() {
               return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
               this.texture.type
           },
           set: function(t) {
               console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
               this.texture.type = t
           }
       },
       generateMipmaps: {
           get: function() {
               return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
               this.texture.generateMipmaps
           },
           set: function(t) {
               console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
               this.texture.generateMipmaps = t
           }
       }
   }),
   Ol.prototype.updateCubeMap = function(t, e) {
       return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),
       this.update(t, e)
   }
   ,
   Ol.prototype.clear = function(t, e, n, i) {
       return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),
       this.renderTarget.clear(t, e, n, i)
   }
   ,
   uo.crossOrigin = void 0,
   uo.loadTexture = function(t, e, n, i) {
       console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
       const r = new ch;
       r.setCrossOrigin(this.crossOrigin);
       const a = r.load(t, n, void 0, i);
       return e && (a.mapping = e),
       a
   }
   ,
   uo.loadTextureCube = function(t, e, n, i) {
       console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
       const r = new lh;
       r.setCrossOrigin(this.crossOrigin);
       const a = r.load(t, n, void 0, i);
       return e && (a.mapping = e),
       a
   }
   ,
   uo.loadCompressedTexture = function() {
       console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
   }
   ,
   uo.loadCompressedTextureCube = function() {
       console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
   }
   ,
   "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{
       detail: {
           revision: "128"
       }
   })),
   "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "128");
   var gh = "precision highp float;\n    attribute vec2 position;\n    void main() {\n      // Look ma! no projection matrix multiplication,\n      // because we pass the values directly in clip space coordinates.\n      gl_Position = vec4(position, 1.0, 1.0);\n    }"
     , vh = function() {
       function t(e) {
           Sa(this, t),
           this.pos = e
       }
       return Ea(t, [{
           key: "init404",
           value: function() {
               var t = this;
               this.W4 = document.querySelector(".webgl404").offsetWidth,
               this.H4 = document.querySelector(".webgl404").offsetHeight,
               this.step = 0,
               this.array4 = [],
               this.scene4 = new nh,
               this.ratio = this.W4 / this.H4,
               this.scene4.background = new Vs(592138),
               this.camera4 = new hh(-this.ratio,this.ratio,1,-1,-1,1),
               this.renderer4 = new eh({
                   antialias: !0
               }),
               this.renderer4.setSize(this.W4, this.H4),
               this.renderer4.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
               document.querySelector(".webgl404").appendChild(this.renderer4.domElement),
               this.ratio < 1 && (this.ratio = 3 * this.ratio);
               var e = .58 * this.ratio;
               this.heightGeo = 4.71 * this.ratio;
               var n = new Wl(e,this.heightGeo)
                 , i = (new ch).load("img/404/col1.webp", (function() {
                   t.step++,
                   t.testStep()
               }
               ))
                 , r = (new ch).load("img/404/col2.webp", (function() {
                   t.step++,
                   t.testStep()
               }
               ))
                 , a = (new ch).load("img/404/col3.webp", (function() {
                   t.step++,
                   t.testStep()
               }
               ))
                 , o = new qs({
                   map: i
               })
                 , s = new qs({
                   map: r
               })
                 , l = new qs({
                   map: a
               });
               this.col1 = new Sl(n,o),
               this.col1.position.set(.71 * -this.ratio, 1, 0),
               this.col2 = new Sl(n,s),
               this.col2.position.set(.085 * -this.ratio, .5, 0),
               this.col3 = new Sl(n,l),
               this.col3.position.set(.54 * this.ratio, 0, 0),
               this.col4 = new Sl(n,o),
               this.col4.position.set(1.165 * this.ratio, -.5, 0),
               this.scene4.add(this.col1, this.col2, this.col3, this.col4),
               this.array4.push(this.col1, this.col2, this.col3, this.col4),
               this.y1Set = _i.quickSetter(this.col1.position, "y"),
               this.y2Set = _i.quickSetter(this.col2.position, "y"),
               this.y3Set = _i.quickSetter(this.col3.position, "y"),
               this.y4Set = _i.quickSetter(this.col4.position, "y"),
               this.posY1 = 0,
               this.posY2 = .5,
               this.posY3 = -.5,
               this.posY4 = .2,
               this.varia1 = 0,
               this.varia2 = 0,
               this.varia3 = 0,
               this.varia4 = 0,
               this.deltaY = 0,
               this.dTrans = 0,
               this.constructorPost(this.renderer4),
               this.inten = _i.quickSetter(this.materialP.uniforms.uIntensite, "value"),
               this.trans = _i.quickSetter(this.materialP.uniforms.uTranslate, "value"),
               this.raf404()
           }
       }, {
           key: "testStep",
           value: function() {
               3 == this.step && _i.to(".webgl404", {
                   opacity: .75,
                   duration: 1,
                   delay: .2,
                   ease: "power2.inOut"
               })
           }
       }, {
           key: "wheel",
           value: function() {
               var t = this;
               window.addEventListener("wheel", this.ref = function(e) {
                   t.deltaY = e.deltaY,
                   window.clearTimeout(t.isWheeling),
                   t.isWheeling = setTimeout((function(e) {
                       t.deltaY = 0
                   }
                   ), 66)
               }
               , {
                   passive: !0
               })
           }
       }, {
           key: "touchmove",
           value: function() {
               var t = this
                 , e = 0
                 , n = 0
                 , i = !0;
               window.addEventListener("touchmove", this.ref = function(r) {
                   n = r.touches[0].clientY - e,
                   i || (t.deltaY = 5 * -n),
                   i = !1,
                   e = r.touches[0].clientY,
                   window.clearTimeout(t.isWheeling),
                   t.isWheeling = setTimeout((function(r) {
                       t.deltaY = 0,
                       n = 0,
                       e = 0,
                       i = !0
                   }
                   ), 66)
               }
               , {
                   passive: !0
               })
           }
       }, {
           key: "unwheel",
           value: function() {
               window.removeEventListener("wheel", this.ref)
           }
       }, {
           key: "untouchmove",
           value: function() {
               window.removeEventListener("touchmove", this.ref)
           }
       }, {
           key: "playTicker404",
           value: function() {
               var t = _i.ticker.deltaRatio()
                 , e = 1 - Math.pow(.9, t);
               this.y1Set(this.posY1),
               this.y2Set(this.posY2),
               this.y3Set(this.posY3),
               this.y4Set(this.posY4),
               window.scrollTo(0, 0),
               this.varia1 / 2 > .07 ? this.inten(.07) : this.varia1 / 2 < -.07 ? this.inten(-.07) : this.inten(this.varia1 / 2),
               this.trans(4 * -this.dTrans),
               this.varia1 += (this.deltaY / 900 - this.varia1) * e,
               this.posY1 += this.varia1 + t / 900,
               this.dTrans += this.varia1,
               this.varia2 += (this.deltaY / 700 - this.varia2) * e,
               this.posY2 += this.varia2 + t / 800,
               this.varia3 += (this.deltaY / 1200 - this.varia3) * e,
               this.posY3 += this.varia3 + t / 1200,
               this.varia4 += (this.deltaY / 850 - this.varia4) * e,
               this.posY4 += this.varia4 + t / 850,
               this.col1.position.y > (this.heightGeo - 2) / 2 && (this.posY1 = this.posY1 - this.heightGeo / 2),
               this.col1.position.y < -(this.heightGeo - 2) / 2 && (this.posY1 = this.posY1 + this.heightGeo / 2),
               this.col2.position.y > (this.heightGeo - 2) / 2 && (this.posY2 = this.posY2 - this.heightGeo / 2),
               this.col2.position.y < -(this.heightGeo - 2) / 2 && (this.posY2 = this.posY2 + this.heightGeo / 2),
               this.col3.position.y > (this.heightGeo - 2) / 2 && (this.posY3 = this.posY3 - this.heightGeo / 2),
               this.col3.position.y < -(this.heightGeo - 2) / 2 && (this.posY3 = this.posY3 + this.heightGeo / 2),
               this.col4.position.y > (this.heightGeo - 2) / 2 && (this.posY4 = this.posY4 - this.heightGeo / 2),
               this.col4.position.y < -(this.heightGeo - 2) / 2 && (this.posY4 = this.posY4 + this.heightGeo / 2),
               this.renderPost(this.scene4, this.camera4)
           }
       }, {
           key: "initJoin",
           value: function() {
               var t = this;
               this.WJ = document.querySelector(".innerCan").offsetWidth,
               this.HJ = document.querySelector(".innerCan").offsetHeight,
               this.sceneJ = new nh,
               this.cameraJ = new hh(-this.WJ / this.HJ,this.WJ / this.HJ,1,-1,-1,1),
               this.rendererJ = new eh({
                   antialias: !0,
                   alpha: !0
               }),
               this.rendererJ.setSize(this.WJ, this.HJ),
               this.rendererJ.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
               document.querySelector(".innerCan").appendChild(this.rendererJ.domElement);
               var e = new Wl(2,2)
                 , n = "img/cards/08.jpg";
               document.body.classList.contains("about") && (n = "img/cards/04.jpg");
               var i = (new ch).load(n, (function() {
                   _i.to(".innerCan", {
                       opacity: 1,
                       delay: .4,
                       duration: 1
                   }),
                   null != document.querySelector(".innerCan .volet") && _i.to(".innerCan .volet", {
                       scaleY: 0,
                       delay: .4,
                       duration: 2,
                       ease: "power4.out"
                   }),
                   _i.to(".innerCan canvas, .looking p", {
                       y: 0,
                       delay: .4,
                       stagger: .2,
                       opacity: 1,
                       duration: 2,
                       ease: "power4.out"
                   }),
                   t.constructorPost(t.rendererJ),
                   t.renderPost(t.sceneJ, t.cameraJ)
               }
               ))
                 , r = new qs({
                   map: i
               })
                 , a = new Sl(e,r);
               this.sceneJ.add(a)
           }
       }, {
           key: "init",
           value: function() {
               var t = this;
               this.W = window.innerWidth,
               this.H = document.getElementById("footer2").offsetHeight,
               this.table = [],
               this.zIndex = 0,
               this.speed = .1,
               this.varX = 0,
               this.varY = 0,
               this.oldX = 0,
               this.incrDist = 0,
               this.currentItem = 0;
               var e = "";
               document.body.classList.contains("single") && (e = "../");
               var n = (new ch).load(e + "img/cards/01.webp", (function() {
                   t.renderPost(t.scene, t.camera)
               }
               ))
                 , i = (new ch).load(e + "img/cards/02.webp", (function() {
                   t.renderPost(t.scene, t.camera),
                   t.cube02.visible = !1
               }
               ))
                 , r = (new ch).load(e + "img/cards/03.webp", (function() {
                   t.renderPost(t.scene, t.camera),
                   t.cube03.visible = !1
               }
               ))
                 , a = (new ch).load(e + "img/cards/04.webp", (function() {
                   t.renderPost(t.scene, t.camera),
                   t.cube04.visible = !1
               }
               ))
                 , o = (new ch).load(e + "img/cards/05.webp", (function() {
                   t.renderPost(t.scene, t.camera),
                   t.cube05.visible = !1
               }
               ))
                 , s = (new ch).load(e + "img/cards/06.webp", (function() {
                   t.renderPost(t.scene, t.camera),
                   t.cube06.visible = !1
               }
               ))
                 , l = (new ch).load(e + "img/cards/07.webp", (function() {
                   t.renderPost(t.scene, t.camera),
                   t.cube07.visible = !1
               }
               ))
                 , c = (new ch).load(e + "img/cards/08.webp", (function() {
                   t.renderPost(t.scene, t.camera),
                   t.cube08.visible = !1
               }
               ))
                 , u = (new ch).load(e + "img/cards/09.webp", (function() {
                   t.renderPost(t.scene, t.camera),
                   t.cube09.visible = !1
               }
               ))
                 , h = (new ch).load(e + "img/cards/10.webp", (function() {
                   t.renderPost(t.scene, t.camera),
                   t.cube10.visible = !1
               }
               ))
                 , d = (new ch).load(e + "img/cards/11.webp", (function() {
                   t.renderPost(t.scene, t.camera),
                   t.cube11.visible = !1
               }
               ));
               this.scene = new nh,
               this.scene.background = new Vs(592138),
               this.camera = new hh(-this.W / this.H,this.W / this.H,1,-1,-1,1),
               this.renderer = new eh({
                   antialias: !0
               }),
               this.renderer.setSize(this.W, this.H),
               this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
               document.getElementById("webgl").appendChild(this.renderer.domElement);
               var p = new Wl(1,1)
                 , f = new qs({
                   map: n
               })
                 , m = new qs({
                   map: i
               })
                 , g = new qs({
                   map: r
               })
                 , v = new qs({
                   map: a
               })
                 , _ = new qs({
                   map: o
               })
                 , x = new qs({
                   map: s
               })
                 , y = new qs({
                   map: l
               })
                 , w = new qs({
                   map: c
               })
                 , b = new qs({
                   map: u
               })
                 , M = new qs({
                   map: h
               })
                 , S = new qs({
                   map: d
               });
               this.cube01 = new Sl(p,f),
               this.cube02 = new Sl(p,m),
               this.cube03 = new Sl(p,g),
               this.cube04 = new Sl(p,v),
               this.cube05 = new Sl(p,_),
               this.cube06 = new Sl(p,x),
               this.cube07 = new Sl(p,y),
               this.cube08 = new Sl(p,w),
               this.cube09 = new Sl(p,b),
               this.cube10 = new Sl(p,M),
               this.cube11 = new Sl(p,S),
               this.cube01.material.transparent = this.cube02.material.transparent = this.cube03.material.transparent = this.cube04.material.transparent = this.cube05.material.transparent = this.cube06.material.transparent = this.cube07.material.transparent = this.cube08.material.transparent = this.cube09.material.transparent = this.cube10.material.transparent = this.cube11.material.transparent = !0,
               this.table.push(this.cube01, this.cube02, this.cube03, this.cube04, this.cube05, this.cube06, this.cube07, this.cube08, this.cube09, this.cube10, this.cube11),
               this.scene.add(this.cube01, this.cube02, this.cube03, this.cube04, this.cube05, this.cube06, this.cube07, this.cube08, this.cube09, this.cube10, this.cube11),
               this.mX01 = _i.quickSetter(this.cube01.position, "x"),
               this.mY01 = _i.quickSetter(this.cube01.position, "y"),
               this.mX02 = _i.quickSetter(this.cube02.position, "x"),
               this.mY02 = _i.quickSetter(this.cube02.position, "y"),
               this.mX03 = _i.quickSetter(this.cube03.position, "x"),
               this.mY03 = _i.quickSetter(this.cube03.position, "y"),
               this.mX04 = _i.quickSetter(this.cube04.position, "x"),
               this.mY04 = _i.quickSetter(this.cube04.position, "y"),
               this.mX05 = _i.quickSetter(this.cube05.position, "x"),
               this.mY05 = _i.quickSetter(this.cube05.position, "y"),
               this.mX06 = _i.quickSetter(this.cube06.position, "x"),
               this.mY06 = _i.quickSetter(this.cube06.position, "y"),
               this.mX07 = _i.quickSetter(this.cube07.position, "x"),
               this.mY07 = _i.quickSetter(this.cube07.position, "y"),
               this.mX08 = _i.quickSetter(this.cube08.position, "x"),
               this.mY08 = _i.quickSetter(this.cube08.position, "y"),
               this.mX09 = _i.quickSetter(this.cube09.position, "x"),
               this.mY09 = _i.quickSetter(this.cube09.position, "y"),
               this.mX10 = _i.quickSetter(this.cube10.position, "x"),
               this.mY10 = _i.quickSetter(this.cube10.position, "y"),
               this.mX11 = _i.quickSetter(this.cube11.position, "x"),
               this.mY11 = _i.quickSetter(this.cube11.position, "y"),
               this.constructorPost(this.renderer)
           }
       }, {
           key: "raf",
           value: function() {
               var t = this;
               this.addTicker = function() {
                   t.playTicker()
               }
               ,
               _i.ticker.add(this.addTicker)
           }
       }, {
           key: "killRaf",
           value: function() {
               _i.ticker.remove(this.addTicker)
           }
       }, {
           key: "raf404",
           value: function() {
               var t = this;
               this.addTicker404 = function() {
                   t.playTicker404()
               }
               ,
               _i.ticker.add(this.addTicker404)
           }
       }, {
           key: "killRaf404",
           value: function() {
               _i.ticker.remove(this.addTicker404)
           }
       }, {
           key: "constructorPost",
           value: function(t) {
               this.rendererP = t,
               this.sceneP = new nh,
               this.dummyCameraP = new hh,
               this.geometryP = new ol;
               var e = new Float32Array([-1, -1, 3, -1, -1, 3]);
               this.geometryP.setAttribute("position", new Xs(e,2)),
               this.resolutionP = new so,
               this.rendererP.getDrawingBufferSize(this.resolutionP),
               this.targetP = new go(this.resolutionP.x,this.resolutionP.y,{
                   format: Wa,
                   stencilBuffer: !1,
                   depthBuffer: !0
               }),
               t == this.renderer ? this.materialP = new ih({
                   fragmentShader: "precision highp float;\n    uniform sampler2D uScene;\n    uniform vec2 uResolution;\n\n    void main() {\n        vec2 uv = gl_FragCoord.xy / uResolution.xy;\n        vec3 color = vec3(uv, 1.0);\n        uv.x += sin(uv.x*40.0)/50.0;\n\n        color = texture2D(uScene, uv).rgb;\n\n        gl_FragColor = vec4(color, 1.0);\n    }",
                   vertexShader: gh,
                   uniforms: {
                       uScene: {
                           value: this.targetP.texture
                       },
                       uResolution: {
                           value: this.resolutionP
                       }
                   }
               }) : t == this.rendererJ ? this.materialP = new ih({
                   fragmentShader: "precision highp float;\n    uniform sampler2D uScene;\n    uniform vec2 uResolution;\n    uniform float uTranslate;\n\n    void main() {\n        vec2 uv = gl_FragCoord.xy / uResolution.xy;\n        vec3 color = vec3(uv, 1.0);\n        uv.y += sin(uv.y*10.0 + uTranslate)/15.0;\n\n        color = texture2D(uScene, uv).rgb;\n\n        gl_FragColor = vec4(color, 1.0);\n    }",
                   vertexShader: gh,
                   uniforms: {
                       uScene: {
                           value: this.targetP.texture
                       },
                       uResolution: {
                           value: this.resolutionP
                       },
                       uTranslate: {
                           value: 0
                       }
                   }
               }) : t == this.renderer4 && (this.materialP = new ih({
                   fragmentShader: "precision highp float;\n    uniform sampler2D uScene;\n    uniform vec2 uResolution;\n    uniform float uTranslate;\n    uniform float uIntensite;\n\n    void main() {\n        vec2 uv = gl_FragCoord.xy / uResolution.xy;\n        vec3 color = vec3(uv, 1.0);\n        uv.y += sin(uv.y*14.0 + uTranslate) * uIntensite;\n\n        color = texture2D(uScene, uv).rgb;\n\n        gl_FragColor = vec4(color, 1.0);\n    }",
                   vertexShader: gh,
                   uniforms: {
                       uScene: {
                           value: this.targetP.texture
                       },
                       uResolution: {
                           value: this.resolutionP
                       },
                       uTranslate: {
                           value: 0
                       },
                       uIntensite: {
                           value: 0
                       }
                   }
               })),
               this.triangleP = new Sl(this.geometryP,this.materialP),
               this.triangleP.frustumCulled = !1,
               this.sceneP.add(this.triangleP)
           }
       }, {
           key: "renderPost",
           value: function(t, e) {
               this.rendererP.setRenderTarget(this.targetP),
               this.rendererP.render(t, e),
               this.rendererP.setRenderTarget(null),
               this.rendererP.render(this.sceneP, this.dummyCameraP)
           }
       }, {
           key: "playTicker",
           value: function() {
               var t = 1 - Math.pow(1 - this.speed, _i.ticker.deltaRatio())
                 , e = _i.utils.mapRange(0, this.W, -this.W / this.H, this.W / this.H, this.pos.x)
                 , n = _i.utils.mapRange(0, this.H, 1, -1, this.pos.y - document.getElementById("webgl").getBoundingClientRect().top);
               if (this.varX += (e - this.varX) * t,
               this.varY += (n - this.varY) * t,
               0 == this.currentItem ? (this.mX01(this.varX),
               this.mY01(this.varY)) : 1 == this.currentItem ? (this.mX02(this.varX),
               this.mY02(this.varY)) : 2 == this.currentItem ? (this.mX03(this.varX),
               this.mY03(this.varY)) : 3 == this.currentItem ? (this.mX04(this.varX),
               this.mY04(this.varY)) : 4 == this.currentItem ? (this.mX05(this.varX),
               this.mY05(this.varY)) : 5 == this.currentItem ? (this.mX06(this.varX),
               this.mY06(this.varY)) : 6 == this.currentItem ? (this.mX07(this.varX),
               this.mY07(this.varY)) : 7 == this.currentItem ? (this.mX08(this.varX),
               this.mY08(this.varY)) : 8 == this.currentItem ? (this.mX09(this.varX),
               this.mY09(this.varY)) : 9 == this.currentItem ? (this.mX10(this.varX),
               this.mY10(this.varY)) : 10 == this.currentItem && (this.mX11(this.varX),
               this.mY11(this.varY)),
               this.renderPost(this.scene, this.camera),
               this.incrDist += Math.abs(this.oldX - this.varX),
               this.incrDist > .25) {
                   this.incrDist = 0;
                   var i = this.table[this.currentItem];
                   _i.to(i.position, {
                       duration: .8,
                       y: -1.5,
                       x: this.oldX - this.varX,
                       ease: "power2.in",
                       onComplete: function() {
                           i.visible = !1
                       }
                   }),
                   _i.to(i.scale, {
                       duration: .8,
                       x: .7,
                       y: .7,
                       ease: "power2.in"
                   }),
                   this.currentItem++,
                   this.currentItem >= 11 && (this.currentItem = 0),
                   _i.killTweensOf(this.table[this.currentItem].position),
                   _i.killTweensOf(this.table[this.currentItem].scale),
                   this.table[this.currentItem].position.x = this.table[this.currentItem].position.y = 0,
                   this.table[this.currentItem].scale.x = this.table[this.currentItem].scale.y = 1,
                   this.table[this.currentItem].visible = !0,
                   this.zIndex++,
                   this.table[this.currentItem].renderOrder = this.zIndex
               }
               this.oldX = this.varX
           }
       }]),
       t
   }();
   var _h, xh = (function(t) {
       function e(t) {
           return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
               return typeof t
           }
           : function(t) {
               return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
           }
           )(t)
       }
       function n() {
           var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
           for (var e in this.hooks = {},
           this.options = {},
           this.defaultOptions)
               this.options[e] = e in t ? t[e] : this.defaultOptions[e];
           this.options.autoload && this.load()
       }
       n.prototype.defaultOptions = {
           selector: "video[data-yt2html5]",
           attribute: "data-yt2html5",
           formats: "*",
           autoload: !0,
           withAudio: !1
       },
       n.prototype.globalHooks = {},
       n.prototype.getHooks = function(t, e) {
           var n = [];
           if (t in this.globalHooks) {
               var i = this.globalHooks[t];
               i = (i = i.filter((function(t) {
                   return t.name === e
               }
               ))).sort((function(t, e) {
                   return t.priority - e.priority
               }
               )),
               n = n.concat(i)
           }
           if (t in this.hooks) {
               var r = this.hooks[t];
               r = (r = r.filter((function(t) {
                   return t.name === e
               }
               ))).sort((function(t, e) {
                   return t.priority - e.priority
               }
               )),
               n = n.concat(r)
           }
           return n
       }
       ,
       n.prototype.addHook = function(t, e) {
           t in this.globalHooks || (this.globalHooks[t] = []),
           t in this.hooks || (this.hooks[t] = []),
           "global"in e && e.global ? this.globalHooks[t].push(e) : this.hooks[t].push(e)
       }
       ,
       n.prototype.addAction = function(t, e) {
           var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 10
             , i = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3];
           this.addHook("actions", {
               name: t,
               callback: e,
               priority: n,
               global: i
           })
       }
       ,
       n.prototype.doAction = function(t) {
           for (var e = this.getHooks("actions", t), n = arguments.length, i = Array(1 < n ? n - 1 : 0), r = 1; r < n; r++)
               i[r - 1] = arguments[r];
           for (var a = 0; a < e.length; a++) {
               var o;
               (o = e[a]).callback.apply(o, i)
           }
       }
       ,
       n.prototype.addFilter = function(t, e) {
           var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 10
             , i = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3];
           this.addHook("filters", {
               name: t,
               callback: e,
               priority: n,
               global: i
           })
       }
       ,
       n.prototype.applyFilters = function(t, e) {
           for (var n = this.getHooks("filters", t), i = arguments.length, r = Array(2 < i ? i - 2 : 0), a = 2; a < i; a++)
               r[a - 2] = arguments[a];
           for (var o = 0; o < n.length; o++) {
               var s;
               e = (s = n[o]).callback.apply(s, [e].concat(r))
           }
           return e
       }
       ,
       n.prototype.itagMap = {
           18: "360p",
           22: "720p",
           37: "1080p",
           38: "3072p",
           82: "360p3d",
           83: "480p3d",
           84: "720p3d",
           85: "1080p3d",
           133: "240pna",
           134: "360pna",
           135: "480pna",
           136: "720pna",
           137: "1080pna",
           264: "1440pna",
           298: "720p60",
           299: "1080p60na",
           160: "144pna",
           139: "48kbps",
           140: "128kbps",
           141: "256kbps"
       },
       n.prototype.urlToId = function(t) {
           var e = t.match(/^(?:http(?:s)?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|(?:(?:youtube-nocookie\.com\/|youtube\.com\/)(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|user)\/)))([a-zA-Z0-9\-_]*)/);
           return Array.isArray(e) && e[1] ? e[1] : t
       }
       ,
       n.prototype.fetch = function(t) {
           return new Promise((function(e, n) {
               var i = new XMLHttpRequest;
               i.open("GET", t, !0),
               i.onreadystatechange = function() {
                   4 === this.readyState && (200 <= this.status && 400 > this.status ? e(this.responseText) : n(this))
               }
               ,
               i.send(),
               i = null
           }
           ))
       }
       ,
       n.prototype.getAllowedFormats = function() {
           var t = [];
           return Array.isArray(this.options.formats) ? t = this.options.formats : this.itagMap[this.options.formats] ? t = [this.options.formats] : "*" === this.options.formats && (t = Object.values(this.itagMap).sort()),
           t
       }
       ,
       n.prototype.getElements = function(t) {
           var n = null;
           return t && (n = NodeList.prototype.isPrototypeOf(t) || HTMLCollection.prototype.isPrototypeOf(t) ? t : "object" === e(t) && "nodeType"in t && t.nodeType ? [t] : document.querySelectorAll(this.options.selector)),
           n = Array.from(n || ""),
           this.applyFilters("elements", n)
       }
       ,
       n.prototype.youtubeDataApiEndpoint = function(t) {
           var e = "https://yt2html5.com/?id=".concat(t);
           return this.applyFilters("api.endpoint", e, t, null)
       }
       ,
       n.prototype.parseUriString = function(t) {
           return t.split("&").reduce((function(t, e) {
               var n = e.split("=").map((function(t) {
                   return decodeURIComponent(t.replace("+", " "))
               }
               ));
               return t[n[0]] = n[1],
               t
           }
           ), {})
       }
       ,
       n.prototype.canPlayType = function(t) {
           var e = null
             , n = (e = /^audio/i.test(t) ? document.createElement("audio") : document.createElement("video")) && "function" == typeof e.canPlayType ? e.canPlayType(t) : "unknown";
           return n || "no"
       }
       ,
       n.prototype.parseYoutubeMeta = function(t) {
           var e = this
             , n = []
             , i = [];
           if ("string" == typeof t)
               try {
                   t = JSON.parse(t)
               } catch (t) {
                   return null
               }
           var r = t.data || {};
           return (r = this.applyFilters("api.response", r, t)).hasOwnProperty("url_encoded_fmt_stream_map") && (n = n.concat(r.url_encoded_fmt_stream_map.split(",").map((function(t) {
               return e.parseUriString(t)
           }
           )))),
           r.player_response.streamingData && r.player_response.streamingData.formats && (n = n.concat(r.player_response.streamingData.formats)),
           r.hasOwnProperty("adaptive_fmts") && (n = n.concat(r.adaptive_fmts.split(",").map((function(t) {
               return e.parseUriString(t)
           }
           )))),
           r.player_response.streamingData && r.player_response.streamingData.adaptiveFormats && (n = n.concat(r.player_response.streamingData.adaptiveFormats)),
           n.forEach((function(t) {
               if (t && "itag"in t && e.itagMap[t.itag]) {
                   var n = {
                       _raw: t,
                       itag: t.itag,
                       url: null,
                       label: null,
                       type: "unknown",
                       mime: "unknown",
                       hasAudio: !1,
                       browserSupport: "unknown"
                   };
                   if ("url"in t && t.url && (n.url = t.url),
                   "audioQuality"in t && t.audioQuality && (n.hasAudio = !0),
                   n.label = "qualityLabel"in t && t.qualityLabel ? t.qualityLabel : e.itagMap[t.itag],
                   "mimeType"in t) {
                       var r = t.mimeType.match(/^(audio|video)(?:\/([^;]+);)?/i);
                       r[1] && (n.type = r[1]),
                       r[2] && (n.mime = r[2]),
                       n.browserSupport = e.canPlayType("".concat(n.type, "/").concat(n.mime))
                   }
                   n.url && i.push(n)
               }
           }
           )),
           i = this.applyFilters("api.results", i, r)
       }
       ,
       n.prototype.load = function() {
           var t = this
             , e = this.getElements(this.options.selector);
           e && e.length && e.forEach((function(e) {
               t.loadSingle(e)
           }
           ))
       }
       ,
       n.prototype.loadSingle = function(t) {
           var e = this
             , n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null
             , i = n || this.options.attribute;
           if (t.getAttribute(i)) {
               var r = this.urlToId(t.getAttribute(i))
                 , a = this.youtubeDataApiEndpoint(r);
               this.doAction("api.before", t),
               this.fetch(a).then((function(n) {
                   if (n) {
                       var i = e.parseYoutubeMeta(n);
                       if (i && Array.isArray(i)) {
                           (i = i.filter((function(e) {
                               return e.type === t.tagName.toLowerCase()
                           }
                           ))).sort((function(t, e) {
                               var n = {
                                   unknown: -1,
                                   no: -1,
                                   maybe: 0,
                                   probably: 1
                               };
                               return n[t.browserSupport] + n[e.browserSupport]
                           }
                           )),
                           e.options.withAudio && (i = i.filter((function(t) {
                               return t.hasAudio
                           }
                           )));
                           for (var a = e.getAllowedFormats(), o = null, s = null, l = function(t) {
                               var n = a[t]
                                 , r = i.filter((function(t) {
                                   return e.itagMap[t.itag] === n
                               }
                               ));
                               if (r && r.length)
                                   return o = r.shift(),
                                   s = n,
                                   "break"
                           }, c = 0; c < a.length && "break" !== l(c); c++)
                               ;
                           var u = {
                               src: "",
                               type: ""
                           };
                           (o = e.applyFilters("video.stream", o, t, s, i)) && "url"in o && o.url && (u.src = o.url),
                           o.type && "unknown" !== o.type && o.mime && "unknown" !== o.mime && (u.type = "".concat(o.type, "/").concat(o.mime)),
                           u.src = e.applyFilters("video.source", u.src, o, t, s, i),
                           u.src && "function" == typeof u.src.toString && u.src.toString().length ? (t.src = u.src,
                           u.type && u.type.length && (t.type = u.type)) : console.warn("YouTubeToHtml5 unable to load video for ID: ".concat(r))
                       }
                   }
               }
               )).finally((function(n) {
                   e.doAction("api.after", t, n)
               }
               ))
           }
       }
       ,
       "object" === e(t) && "object" === e(t.exports) && (t.exports = n)
   }(_h = {
       exports: {}
   }, _h.exports),
   _h.exports), yh = new La("#garciScroll"), wh = function() {
       var t, e, n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
       if (0 !== document.querySelectorAll(".preload").length && document.querySelectorAll(".preload").forEach((function(t) {
           var e = new Image;
           e.src = t.getAttribute("src"),
           e.onload = function() {
               yh.resize(),
               Ma.refresh()
           }
       }
       )),
       0 !== document.querySelectorAll("video").length && document.querySelectorAll("video").forEach((function(t) {
           t.onloadeddata = function() {
               yh.resize(),
               Ma.refresh()
           }
       }
       )),
       document.getElementById("footer2").addEventListener("mouseenter", (function() {
           window.webgl.killRaf(),
           window.webgl.raf(),
           _i.killTweensOf("#webgl canvas"),
           _i.to("#webgl canvas", {
               duration: 1,
               opacity: .75
           })
       }
       )),
       document.getElementById("footer2").addEventListener("mouseleave", (function() {
           _i.to("#webgl canvas", {
               duration: 1,
               opacity: 0,
               onComplete: function() {
                   window.webgl.killRaf()
               }
           })
       }
       )),
       document.getElementById("webgl").classList.remove("cache"),
       document.body.classList.contains("single") || document.body.classList.contains("p404") || Ma.create({
           trigger: ".toContact",
           start: "top bottom",
           onToggle: function(t) {
               t.isActive ? document.querySelector(".toContact").classList.add("actif") : document.querySelector(".toContact").classList.remove("actif")
           }
       }),
       null !== document.querySelector("#main h1 span") && _i.to("#main h1 span", {
           opacity: 1,
           y: "0%",
           stagger: .1,
           delay: .2,
           ease: "power2.out",
           duration: 1
       }),
       document.querySelectorAll("#main .h2").forEach((function(t) {
           Ma.create({
               trigger: t,
               start: "top 100%",
               onEnter: function() {
                   _i.to(t.querySelectorAll("span"), {
                       opacity: 1,
                       y: "0%",
                       stagger: .1,
                       ease: "power2.out",
                       duration: 1
                   })
               },
               onLeaveBack: function() {
                   _i.killTweensOf(t.querySelectorAll("span")),
                   _i.set(t.querySelectorAll("span"), {
                       opacity: 0,
                       y: "40%"
                   })
               }
           })
       }
       )),
       document.body.classList.contains("home"))
           _i.to(".pushs", {
               y: "0%",
               ease: "power4.out",
               duration: 2
           }),
           _i.to(".paraDroite", {
               y: "0%",
               ease: "power4.out",
               delay: .2,
               duration: 2
           }),
           window.innerWidth > 767 ? (document.querySelectorAll("video").forEach((function(t) {
               t.setAttribute("autoplay", "")
           }
           )),
           _i.to(".para", {
               scrollTrigger: {
                   trigger: ".fonce",
                   start: "top top",
                   end: "bottom top",
                   scrub: !0
               },
               y: "-50%",
               ease: "none"
           }),
           _i.to("#roulette", {
               scrollTrigger: {
                   trigger: ".kidding",
                   start: "top bottom",
                   end: "bottom top",
                   scrub: !0,
                   onEnter: function() {
                       document.getElementById("roulette").classList.add("actif")
                   },
                   onLeaveBack: function() {
                       document.getElementById("roulette").classList.remove("actif")
                   },
                   onLeave: function() {
                       document.getElementById("roulette").classList.remove("actif")
                   },
                   onEnterBack: function() {
                       document.getElementById("roulette").classList.add("actif")
                   },
                   onUpdate: function(t) {
                       t.progress > .5 && !document.querySelector(".antiRota3").classList.contains("actif") ? document.querySelector(".antiRota3").classList.add("actif") : t.progress <= .5 && document.querySelector(".antiRota3").classList.contains("actif") && document.querySelector(".antiRota3").classList.remove("actif")
                   }
               },
               rotate: "-360deg",
               ease: "none"
           }),
           _i.to(".antiRota", {
               scrollTrigger: {
                   trigger: ".kidding",
                   start: "top bottom",
                   end: "bottom top",
                   scrub: !0
               },
               rotate: "360deg",
               ease: "none"
           }),
           n || document.querySelectorAll(".push").forEach((function(t) {
               t.addEventListener("mouseenter", (function() {
                   t.classList.add("actif"),
                   window.rafPush()
               }
               )),
               t.addEventListener("mouseleave", (function() {
                   cancelAnimationFrame(window.leRafPush),
                   _i.to(".push.actif img", {
                       rotationY: "0deg",
                       rotationX: "0deg",
                       duration: .6,
                       ease: "power2.inOut"
                   }),
                   t.classList.remove("actif")
               }
               ))
           }
           ))) : homeVideosDesktopToMobile();
       else if (document.body.classList.contains("about")) {
           window.webglAbout = new vh,
           window.webglAbout.initJoin(),
           _i.to(".innerCarte", {
               y: 0,
               stagger: .1,
               ease: "power4.out",
               duration: 2
           });
           var i = ".carteDesk";
           window.innerWidth < 768 && (i = ".carteMob"),
           _i.to(i, {
               scrollTrigger: {
                   trigger: ".puzzle",
                   start: "top top",
                   end: "bottom top",
                   scrub: !0
               },
               x: 0,
               y: 0,
               ease: "none"
           }),
           Ma.create({
               trigger: ".innerPuzzle",
               start: "top top",
               end: "bottom bottom",
               pin: ".bloqueCarte"
           }),
           _i.to(".team", {
               scrollTrigger: {
                   trigger: ".who",
                   start: "top bottom",
                   end: "bottom top",
                   scrub: !0
               },
               rotation: "-11deg",
               y: "0px",
               ease: "power2.out"
           }),
           _i.to(".fond", {
               scrollTrigger: {
                   trigger: ".who",
                   start: "top bottom",
                   end: "bottom top",
                   scrub: !0,
                   onUpdate: function() {
                       null != window.webglAbout.materialP && (Ra() ? window.webglAbout.materialP.uniforms.uTranslate.value = window.scrollY / 100 : window.webglAbout.materialP.uniforms.uTranslate.value = -yh.current / 100,
                       window.webglAbout.renderPost(window.webglAbout.sceneJ, window.webglAbout.cameraJ))
                   }
               },
               rotation: "14deg",
               y: "0px",
               ease: "power2.out"
           })
       } else if (document.body.classList.contains("single")) {
           null !== document.querySelector("video") && new xh({
               withAudio: !0
           }),
           document.getElementById("garciScroll").classList.contains("evolt") ? _i.to(".trans", {
               scrollTrigger: {
                   trigger: ".fiveCards",
                   start: "top bottom",
                   end: "bottom top",
                   scrub: !0
               },
               y: "0%",
               ease: "none"
           }) : document.getElementById("garciScroll").classList.contains("kard") ? _i.to(".content .fond svg", {
               scrollTrigger: {
                   trigger: ".fond",
                   start: "top bottom",
                   end: "bottom top",
                   scrub: !0
               },
               scale: .8,
               ease: "none"
           }) : document.getElementById("garciScroll").classList.contains("nabla") ? window.innerWidth > 767 && (_i.to(".content .paraS2", {
               scrollTrigger: {
                   trigger: ".duo",
                   start: "top bottom",
                   end: "bottom top",
                   scrub: !0
               },
               y: "-10%",
               ease: "none"
           }),
           _i.to(".content .paraS", {
               scrollTrigger: {
                   trigger: ".duo",
                   start: "top bottom",
                   end: "bottom top",
                   scrub: !0
               },
               y: "-15%",
               ease: "none"
           })) : document.getElementById("garciScroll").classList.contains("spendesk") ? (_i.to(".t1", {
               scrollTrigger: {
                   trigger: ".content .fond",
                   start: "top bottom",
                   end: "bottom top",
                   scrub: !0
               },
               y: "-10%",
               ease: "none"
           }),
           _i.to(".t2", {
               scrollTrigger: {
                   trigger: ".content .fond",
                   start: "top bottom",
                   end: "bottom top",
                   scrub: !0
               },
               y: "-20%",
               ease: "none"
           }),
           _i.to(".t3", {
               scrollTrigger: {
                   trigger: ".content .fond",
                   start: "top bottom",
                   end: "bottom top",
                   scrub: !0
               },
               y: "-5%",
               ease: "none"
           })) : document.getElementById("garciScroll").classList.contains("shift") && window.innerWidth > 767 && (_i.to(".content .paraS2", {
               scrollTrigger: {
                   trigger: ".duo",
                   start: "top bottom",
                   end: "bottom top",
                   scrub: !0
               },
               y: "-10%",
               ease: "none"
           }),
           _i.to(".content .paraS", {
               scrollTrigger: {
                   trigger: ".duo",
                   start: "top bottom",
                   end: "bottom top",
                   scrub: !0
               },
               y: "-15%",
               ease: "none"
           })),
           document.body.classList.contains("fromFiche") || (_i.to("#garciScroll h1 .haut", {
               duration: 1,
               y: "-100%",
               ease: "power4.inOut"
           }),
           _i.to("#garciScroll h1 .bas", {
               duration: 1,
               y: "0%",
               ease: "power4.inOut"
           })),
           document.body.classList.remove(".fromFiche"),
           window.innerWidth > 767 ? Ma.create({
               trigger: ".content",
               start: "bottom 100%",
               end: "bottom 40%",
               onEnter: function() {
                   document.getElementById("projets").classList.add("actifFooter"),
                   window.raf()
               },
               onLeaveBack: function() {
                   cancelAnimationFrame(window.leRaf),
                   document.getElementById("projets").classList.remove("actifFooter")
               }
           }) : Ma.create({
               trigger: ".content",
               start: "bottom 200%",
               end: "bottom 40%",
               onEnter: function() {
                   document.getElementById("projets").classList.add("actifFooter"),
                   window.raf(),
                   document.getElementById("projets").style.top = document.getElementById("main").offsetHeight - 400 + "px"
               },
               onLeaveBack: function() {
                   cancelAnimationFrame(window.leRaf),
                   document.getElementById("projets").classList.remove("actifFooter"),
                   document.getElementById("projets").style.top = "0px"
               }
           }),
           window.innerWidth > 767 && (_i.fromTo("#projets", {
               y: "100%"
           }, {
               scrollTrigger: {
                   id: "projetsY",
                   trigger: ".content",
                   start: "bottom 100%",
                   end: "bottom 40%",
                   scrub: !0
               },
               y: "30%",
               immediateRender: !1,
               ease: "none"
           }),
           _i.fromTo(".innerExp", {
               scale: 1,
               perspectiveOrigin: "50% 10%"
           }, {
               scrollTrigger: {
                   id: "innerExpScale",
                   trigger: ".content",
                   start: "bottom 100%",
                   end: "bottom 40%",
                   scrub: !0
               },
               perspectiveOrigin: "50% -65%",
               y: .045 * window.innerHeight + "px",
               scale: .658,
               ease: "none"
           }));
           var r, a = document.querySelector(".liste button.current");
           r = null != a.nextElementSibling ? a.nextElementSibling : document.querySelectorAll(".liste button")[0],
           t = r,
           e = new MouseEvent("click",{
               bubbles: !0,
               cancelable: !0,
               view: window
           }),
           t.dispatchEvent(e),
           window.changementSlideSet(document.querySelector(".fiche.current"), -1)
       } else
           document.body.classList.contains("join") ? (window.webglJoin = new vh,
           window.webglJoin.initJoin(),
           Ma.create({
               trigger: ".innerCan",
               start: "top bottom",
               end: "bottom top",
               onUpdate: function() {
                   null != window.webglJoin.materialP && (Ra() ? window.webglJoin.materialP.uniforms.uTranslate.value = window.scrollY / 100 : window.webglJoin.materialP.uniforms.uTranslate.value = -yh.current / 100,
                   window.webglJoin.renderPost(window.webglJoin.sceneJ, window.webglJoin.cameraJ))
               }
           }),
           Ma.create({
               trigger: ".kidding",
               start: "top top",
               end: "bottom bottom",
               pin: ".fixe"
           }),
           _i.to("#roulette", {
               scrollTrigger: {
                   trigger: ".kidding",
                   start: "top bottom",
                   end: "bottom top",
                   scrub: !0,
                   onEnter: function() {
                       document.getElementById("roulette").classList.add("actif")
                   },
                   onLeaveBack: function() {
                       document.getElementById("roulette").classList.remove("actif")
                   },
                   onLeave: function() {
                       document.getElementById("roulette").classList.remove("actif")
                   },
                   onEnterBack: function() {
                       document.getElementById("roulette").classList.add("actif")
                   }
               },
               rotate: "-150deg",
               ease: "none",
               immediateRender: !1
           }),
           _i.to(".antiRota", {
               scrollTrigger: {
                   trigger: ".kidding",
                   start: "top bottom",
                   end: "bottom top",
                   scrub: !0
               },
               rotate: "150deg",
               ease: "none"
           }),
           Ma.create({
               trigger: ".clair",
               start: "top top",
               end: "bottom bottom",
               onLeave: function() {
                   document.getElementById("webgl").classList.remove("cache")
               },
               onEnterBack: function() {
                   document.getElementById("webgl").classList.add("cache")
               }
           })) : document.body.classList.contains("p404") && (window.webgl404 = new vh,
           window.webgl404.init404(),
           Ra() ? window.webgl404.touchmove() : window.webgl404.wheel());
       null !== document.querySelector(".selected") && Ma.create({
           trigger: ".selected",
           start: "top 80%",
           onEnter: function() {
               _i.killTweensOf(".logos svg"),
               _i.to(".logos svg", {
                   opacity: 1,
                   duration: .5,
                   stagger: .08,
                   ease: "power4.out"
               })
           },
           onLeaveBack: function() {
               _i.killTweensOf(".logos svg"),
               _i.set(".logos svg", {
                   opacity: 0
               })
           }
       })
   };
   window.homeVideosDesktopToMobile = function() {
       var t = document.getElementById("vid1");
       t.classList.add("vidMob"),
       document.querySelector(".vid1Mob").appendChild(t);
       var e = document.getElementById("vid2");
       e.classList.add("vidMob"),
       document.querySelector(".vid2Mob").appendChild(e);
       var n = document.getElementById("vid3");
       n.classList.add("vidMob"),
       document.querySelector(".vid3Mob").appendChild(n)
   }
   ,
   window.homeVideosMobileToDesktop = function() {
       var t = document.getElementById("vid1");
       t.classList.remove("vidMob"),
       document.querySelector(".antiRota1").appendChild(t);
       var e = document.getElementById("vid2");
       e.classList.remove("vidMob"),
       document.querySelector(".antiRota2").appendChild(e);
       var n = document.getElementById("vid3");
       n.classList.remove("vidMob"),
       document.querySelector(".antiRota3").appendChild(n)
   }
   ;
   var bh, Mh, Sh, Th = function() {
       function t(e) {
           Sa(this, t),
           this.currentStep = 0,
           this.allSteps = 2,
           this.newClass,
           this.newTitle,
           this.newDOM,
           this.animEnCours = !0
       }
       return Ea(t, [{
           key: "start",
           value: function(t) {
               this.animEnCours = !0,
               this.animationSortie(),
               this.changementDOM(t)
           }
       }, {
           key: "animationSortie",
           value: function() {
               var t = this;
               if (window.webgl.killRaf(),
               null != window.webgl404 && (Ra() ? window.webgl404.untouchmove() : window.webgl404.unwheel(),
               window.webgl404.killRaf404()),
               document.getElementById("projets").classList.contains("actif") || document.getElementById("projets").classList.contains("actifFooter")) {
                   if (document.getElementById("explore").classList.remove("actif"),
                   yh.destroy(),
                   document.getElementById("projets").classList.contains("actifFooter") && (document.querySelector(".fiche.current .actif").classList.remove("actif"),
                   null != Ma.getById("projetsY") && (Ma.getById("projetsY").kill(!1),
                   Ma.getById("innerExpScale").kill(!1)),
                   _i.to(".content", {
                       y: -window.innerHeight / 2 + "px",
                       opacity: 0,
                       ease: "power4.inOut",
                       duration: .8
                   }),
                   _i.to("#projets", {
                       duration: .8,
                       y: "0%",
                       ease: "power4.inOut"
                   }),
                   window.innerWidth < 768)) {
                       document.getElementById("projets").style.overflow = "visible";
                       var e = document.getElementById("main").offsetHeight - window.innerHeight - window.scrollY;
                       _i.to(".nextP, .toNext", {
                           opacity: 0,
                           duration: 1
                       }),
                       _i.to("#projets", {
                           duration: 1.6,
                           y: 400 - window.innerHeight - e + "px",
                           ease: "power4.inOut"
                       })
                   }
                   _i.to(".innerExp", {
                       duration: .6,
                       perspectiveOrigin: "50% 50%",
                       ease: "power4.inOut",
                       onComplete: function() {
                           _i.to(".fiche", {
                               duration: .8,
                               rotationY: "0deg",
                               rotationX: "0deg",
                               z: "0px",
                               ease: "power4.inOut"
                           })
                       }
                   }),
                   _i.to(".liste, .innerBtn, .innerC", {
                       duration: .4,
                       opacity: 0
                   }),
                   _i.to(".innerExp", {
                       duration: 1.3,
                       delay: .4,
                       ease: "power4.inOut",
                       y: "0%",
                       scale: 1,
                       onComplete: function() {
                           yh.destroy(),
                           t.incrementStep(),
                           cancelAnimationFrame(window.leRafPush),
                           _i.set(".liste, .innerBtn, .innerC", {
                               clearProps: "all"
                           }),
                           t.killAll()
                       }
                   }),
                   _i.to(".current h1 .haut", {
                       duration: 1.3,
                       y: "-100%",
                       delay: .4,
                       ease: "power4.inOut"
                   }),
                   _i.to(".current h1 .bas", {
                       duration: 1.3,
                       y: "0%",
                       delay: .4,
                       ease: "power4.inOut",
                       onComplete: function() {
                           _i.set(".current h1 .haut", {
                               y: "0%"
                           }),
                           _i.set(".current h1 .bas", {
                               y: "100%"
                           })
                       }
                   })
               } else
                   _i.to("#main", {
                       opacity: 0,
                       onComplete: function() {
                           yh.destroy(),
                           t.incrementStep(),
                           cancelAnimationFrame(window.leRafPush),
                           t.killAll()
                       }
                   })
           }
       }, {
           key: "killAll",
           value: function() {
               Ma.getAll().forEach((function(t) {
                   t.kill()
               }
               ))
           }
       }, {
           key: "changementDOM",
           value: function(t) {
               var e = this;
               this.ajaxPromise(t).then((function(t) {
                   var n = (new DOMParser).parseFromString(t, "text/html");
                   n.body.getAttribute("class"),
                   e.newTitle = n.querySelector("title").innerHTML,
                   e.newClass = n.body.getAttribute("class"),
                   e.newDOM = n.getElementById("main").innerHTML,
                   e.incrementStep()
               }
               ))
           }
       }, {
           key: "animationEntree",
           value: function(t, e, n) {
               var i = this;
               window.scrollTo(0, 0),
               this.currentStep = 0,
               this.uneFois = !0,
               document.title = this.newTitle,
               document.body.setAttribute("class", this.newClass),
               document.getElementById("main").innerHTML = this.newDOM,
               document.body.classList.contains("single") ? (_i.to("header, .premierTexte", {
                   opacity: 1
               }),
               document.querySelectorAll("#projets .fiche").forEach((function(t) {
                   console.log("oui", t.getAttribute("data-url")),
                   t.setAttribute("href", t.getAttribute("data-url"))
               }
               )),
            //    document.querySelector(".lienHome").setAttribute("href", "../"),
               document.querySelector(".toAbout").setAttribute("href", "../about")): (console.log("non"),
            //    document.querySelector(".toJoin").setAttribute("href", "../join-the-club")) : (console.log("non"),
               document.querySelectorAll("#projets .fiche").forEach((function(t) {
                   t.setAttribute("href", t.getAttribute("data-url-basic"))
               }
               ))),
               (document.getElementById("projets").classList.contains("actif") || document.getElementById("projets").classList.contains("actifFooter")) && (_i.set("#main", {
                   opacity: 1
               }),
               document.getElementById("projets").classList.remove("actif", "actifFooter"),
               window.innerWidth < 768 && (_i.set("#projets", {
                   y: "0px"
               }),
               _i.set(".nextP, .toNext", {
                   clearProps: "all"
               }),
               document.getElementById("projets").style.overflow = "hidden"),
               document.body.classList.add("fromFiche")),
               yh.scrollTop = yh.current = 0,
               _i.to("#main", {
                   opacity: 1,
                   duration: .4,
                   onComplete: function() {
                       Ra() || (yh.resize(),
                       yh.init(),
                       yh.wheel()),
                       i.animEnCours = !1,
                       wh()
                   }
               })
           }
       }, {
           key: "incrementStep",
           value: function() {
               this.currentStep++,
               this.currentStep == this.allSteps && this.animationEntree()
           }
       }, {
           key: "ajaxPromise",
           value: function(t) {
               return new Promise((function(e) {
                   var n = new XMLHttpRequest;
                   n.open("GET", t),
                   n.onload = function() {
                       return e(n.responseText)
                   }
                   ,
                   n.send()
               }
               ))
           }
       }]),
       t
   }(), Eh = 0, Lh = 0, Ah = !1, Rh = !1, Ch = {}, Ph = {}, Dh = 0, Ih = !1;
   Ch.x = 0,
   Ch.y = 0,
   Ph.x = 0,
   Ph.y = 0,
   window.velocity = 0,
   _i.registerPlugin(Ma),
   Ra() || (Sh = document.getElementById("garciScroll"),
   Ma.defaults({
       scroller: Sh
   }));
   var Oh = new Th;
   function Nh(t) {
       var e = window.getComputedStyle(t);
       return new WebKitCSSMatrix(e.webkitTransform).m43
   }
   function zh(t) {
       Ah || (Ah = !0,
       Mh = parseInt(20 - t * Nh(document.querySelectorAll(".fiche")[Aa(document.querySelector(".liste .current"))])),
       document.querySelectorAll(".fiche").forEach((function(e) {
           var n = parseInt(e.getAttribute("data-z"));
           e.setAttribute("data-z", n + t * Mh)
       }
       )),
       setTimeout((function() {
           Ah = !1
       }
       ), 550))
   }
   window.addEventListener("resize", (function() {
       document.body.classList.contains("home") && (null == document.querySelector(".vid1Mob video") && window.innerWidth < 768 && homeVideosDesktopToMobile(),
       null == document.querySelector("#roulette video") && window.innerWidth > 767 && homeVideosMobileToDesktop()),
       Ih != Ra() && document.location.reload(),
       yh.resize()
   }
   )),
   window.addEventListener("popstate", (function(t) {
       Oh.start(location.href)
   }
   ), !1),
   window.addEventListener("DOMContentLoaded", (function() {
       window.scrollTo(0, 0),
       Ih = Ra(),
       window.webgl = new vh(Ch),
       window.webgl.init(),
       Dh = document.querySelectorAll(".fiche").length,
       document.querySelectorAll(".fiche").forEach((function(t) {
           t.addEventListener("mouseenter", (function() {
               document.getElementById("explore").classList.add("actif"),
               document.getElementById("projets").classList.contains("actifFooter") && document.querySelector(".current .toNext").classList.add("actif")
           }
           )),
           t.addEventListener("mouseleave", (function() {
               document.getElementById("explore").classList.remove("actif"),
               document.querySelector(".current .toNext").classList.remove("actif")
           }
           ))
       }
       )),
       document.querySelectorAll(".aimant").forEach((function(t) {
           t.addEventListener("mouseenter", (function() {
               t.classList.add("actif")
           }
           )),
           t.addEventListener("mouseleave", (function() {
               t.classList.remove("actif"),
               _i.to(t.querySelector(".suit"), {
                   x: "0px",
                   y: "0px",
                   duration: .2,
                   ease: "power2.inOut"
               })
           }
           ))
       }
       )),
       document.addEventListener("click", (function(t) {
           if (t.target.closest(".lien"))
               t.preventDefault(),
               Oh.animEnCours || (Oh.start(t.target.closest(".lien").getAttribute("href")),
               history.pushState({}, "", t.target.closest(".lien").getAttribute("href")),
               t.target.closest(".lien").classList.contains("fiche") && cancelAnimationFrame(leRaf));
           else if (t.target.closest(".next"))
               zh(1);
           else if (t.target.closest(".prev"))
               zh(-1);
           else if (t.target.closest(".liste button") && !Ah) {
               Ah = !0;
               var e = t.target.closest(".liste button")
                 , n = Math.round(document.querySelectorAll(".liste button").length / 2)
                 , i = Math.abs(Aa(document.querySelector(".liste .current")) - Aa(e))
                 , r = 0;
               r = Aa(e) < Aa(document.querySelector(".liste .current")) ? i >= n ? document.querySelectorAll(".liste button").length - Math.abs(Aa(e) - Aa(document.querySelector(".liste .current"))) : Aa(e) - Aa(document.querySelector(".liste .current")) : i >= n ? -(document.querySelectorAll(".liste button").length - Math.abs(Aa(e) - Aa(document.querySelector(".liste .current")))) : Aa(e) - Aa(document.querySelector(".liste .current")),
               Mh = parseInt(20 - Nh(document.querySelectorAll(".fiche")[Aa(document.querySelector(".liste .current"))])),
               document.querySelectorAll(".fiche").forEach((function(t) {
                   var e = parseInt(t.getAttribute("data-z"));
                   t.setAttribute("data-z", e + Mh * r)
               }
               )),
               setTimeout((function() {
                   Ah = !1
               }
               ), 550)
           } else if (t.target.closest(".toMenu") && !Ah) {
               Ah = !0,
               document.querySelector(".toClose").style.display = "block",
               null !== document.querySelector("#garciScroll .hero") && _i.to("#garciScroll .hero", {
                   height: window.innerHeight + "px",
                   ease: "power4.inOut",
                   duration: 1.4
               }),
               _i.to(".viewport", {
                   y: window.innerHeight + "px",
                   ease: "power4.inOut",
                   duration: 1.4,
                   onComplete: function() {
                       Ah = !1,
                       document.querySelector(".toMenu").style.display = "none"
                   }
               }),
               _i.to(".toMenu", {
                   duration: 1.4,
                   ease: "power4.inOut",
                   y: "100%",
                   opacity: 0
               }),
               _i.to(".toClose", {
                   duration: 1.4,
                   ease: "power4.inOut",
                   y: "0%",
                   opacity: 1
               }),
               _i.delayedCall(1, (function() {
                   _i.to("nav", {
                       opacity: 1,
                       duration: 1,
                       ease: "power4.out"
                   })
               }
               ));
               var a = {};
               a.currentY = window.scrollY,
               _i.to(a, {
                   currentY: 0,
                   onUpdate: function() {
                       window.scrollTo(0, a.currentY)
                   },
                   duration: 1.4,
                   ease: "power4.inOut"
               }),
               document.body.classList.add("bloque"),
               document.querySelector("nav").classList.add("actif")
           } else
               t.target.closest(".toClose") && !Ah ? (Ah = !0,
               document.querySelector(".toMenu").style.display = "block",
               null !== document.querySelector("#garciScroll .hero") && _i.to("#garciScroll .hero", {
                   height: "500px",
                   ease: "power4.inOut",
                   duration: 1.4
               }),
               _i.to(".viewport", {
                   y: "0px",
                   ease: "power4.inOut",
                   duration: 1.4,
                   onComplete: function() {
                       Ah = !1,
                       document.querySelector("nav").classList.remove("actif"),
                       document.querySelector(".toClose").style.display = "none"
                   }
               }),
               _i.to(".toMenu", {
                   duration: 1.4,
                   ease: "power4.inOut",
                   y: "0%",
                   opacity: 1
               }),
               _i.to(".toClose", {
                   duration: 1.4,
                   ease: "power4.inOut",
                   y: "-100%",
                   opacity: 0
               }),
               _i.to("nav", {
                   opacity: 0,
                   duration: 1,
                   ease: "power4.out"
               }),
               document.body.classList.remove("bloque")) : t.target.closest(".toProjets") && !Rh ? (Rh = !0,
               _i.set(".fiche", {
                   z: "0px"
               }),
               _i.to("#main", {
                   opacity: 0,
                   onComplete: function() {
                       Rh = !1,
                       yh.destroy(),
                       document.getElementById("projets").setAttribute("style", ""),
                       document.getElementById("projets").classList.add("actif"),
                       window.innerWidth > 767 ? _i.fromTo(".innerExp", {
                           perspectiveOrigin: "50% 50%",
                           scale: .6,
                           y: .045 * window.innerHeight
                       }, {
                           duration: .7,
                           scale: .658,
                           ease: "back.out"
                       }) : _i.fromTo(".innerExp", {
                           perspectiveOrigin: "50% 50%",
                           scale: .6,
                           y: .16 * window.innerHeight
                       }, {
                           duration: .7,
                           scale: .75,
                           ease: "back.out"
                       }),
                       _i.to("#projets", {
                           opacity: 1
                       }),
                       raf()
                   }
               })) : t.target.closest(".innerC") && _i.to("#projets", {
                   opacity: 0,
                   onComplete: function() {
                       Ma.refresh(),
                       document.getElementById("projets").classList.remove("actif"),
                       _i.to("#main", {
                           opacity: 1
                       }),
                       cancelAnimationFrame(leRaf),
                       Ra() || (yh.init(),
                       yh.wheel())
                   }
               })
       }
       )),
       window.addEventListener("wheel", (function(t) {
           t.detlaY < -280 || t.detlaY > 280 ? t.detlaY < -280 ? Eh = -280 / 60 : t.detlaY > 280 && (Eh = 280 / 60) : Eh = t.deltaY / 60,
           window.clearTimeout(bh),
           bh = setTimeout((function(t) {
               Eh = 0
           }
           ), 66)
       }
       ), {
           passive: !0
       });
       var t = 0
         , e = 0
         , n = !0;
       window.addEventListener("touchmove", (function(i) {
           document.getElementById("projets").classList.contains("actifFooter") || (e = i.touches[0].clientY - t,
           !n && document.getElementById("projets").classList.contains("actif") && (Eh = e / 6),
           n = !1,
           t = i.touches[0].clientY,
           window.clearTimeout(bh),
           bh = setTimeout((function(i) {
               Eh = 0,
               e = 0,
               t = 0,
               n = !0
           }
           ), 66))
       }
       ), {
           passive: !0
       }),
       Ra() || Ma.scrollerProxy(Sh, {
           scrollTop: function(t) {
               return arguments.length && (yh.current = -t),
               -yh.current
           },
           getBoundingClientRect: function() {
               return {
                   top: 0,
                   left: 0,
                   width: window.innerWidth,
                   height: window.innerHeight
               }
           }
       }),
       Oh.start(window.location.href),
       window.addEventListener("mousemove", (function(t) {
           Ch.x = t.x,
           Ch.y = t.y
       }
       ), {
           passive: !0
       })
   }
   )),
   window.raf = function() {
       window.leRaf = requestAnimationFrame(raf),
       document.getElementById("projets").classList.contains("actif") && (Lh += Eh),
       document.querySelectorAll(".fiche").forEach((function(t) {
           _i.to(t, {
               duration: .3,
               ease: "none",
               z: -t.getAttribute("data-nb") * Dh * 20 + parseInt(t.getAttribute("data-z")) + parseInt(Lh) + "px"
           }),
           Nh(t) > 10 && !t.classList.contains("desc") ? changementSlide(120, 10, t, -1) : Nh(t) < -(20 * Dh - 10) && !t.classList.contains("desc") && changementSlide(10, 120, t, 1)
       }
       )),
       document.getElementById("projets").classList.contains("actif") && (Ih ? _i.to(".innerExp", {
           duration: .2,
           perspectiveOrigin: "50% " + (20 * -(Ch.y / window.innerHeight - .5) - 65) + "%",
           ease: "none"
       }) : (_i.to(".fiche", {
           duration: .2,
           rotationY: (Ch.x / window.innerWidth - .5) / 2 + "deg",
           rotationX: -(Ch.y / window.innerHeight - .5) / 2 - Eh / 5 * 1.5 + "deg",
           ease: "none"
       }),
       _i.to(".innerExp", {
           duration: .2,
           perspectiveOrigin: 20 * -(Ch.x / window.innerWidth - .5) + 50 + "% " + (20 * -(Ch.y / window.innerHeight - .5) - 65) + "%",
           ease: "none"
       }))),
       _i.to("#explore", {
           x: Ch.x + "px",
           y: Ch.y + "px",
           duration: .4,
           ease: "none"
       }),
       _i.to(".iEx div", {
           x: 1.6 * (Ph.x - Ch.x) + "px",
           y: 1.6 * (Ph.y - Ch.y) + "px",
           duration: .3,
           ease: "none"
       }),
       Ph.x = Ch.x,
       Ph.y = Ch.y,
       null != document.querySelector(".aimant.actif") && _i.to(".aimant.actif .suit", {
           x: (Ch.x - document.querySelector(".aimant.actif").getBoundingClientRect().left - document.querySelector(".aimant.actif").offsetHeight / 2) / 1.5 + "px",
           y: (Ch.y - document.querySelector(".aimant.actif").getBoundingClientRect().top - document.querySelector(".aimant.actif").offsetWidth / 2) / 1.5 + "px",
           duration: .2,
           ease: "none"
       })
   }
   ,
   window.rafPush = function() {
       window.leRafPush = requestAnimationFrame(rafPush),
       _i.to(".push.actif img", {
           rotationY: _i.utils.mapRange(document.querySelector(".push.actif").getBoundingClientRect().left, document.querySelector(".push.actif").offsetWidth + document.querySelector(".push.actif").getBoundingClientRect().left, -8, 8, Ch.x) + "deg",
           rotationX: _i.utils.mapRange(document.querySelector(".push.actif").getBoundingClientRect().top, document.querySelector(".push.actif").offsetHeight + document.querySelector(".push.actif").getBoundingClientRect().top, 6, -6, Ch.y) + "deg",
           ease: "none",
           duration: .2
       })
   }
   ,
   window.changementSlide = function(t, e, n, i) {
       n.classList.add("desc"),
       _i.to(n, {
           y: t + "%",
           ease: "power2.in",
           duration: .4,
           onComplete: function(t) {
               n.setAttribute("data-nb", parseInt(n.getAttribute("data-nb")) - 1 * i),
               n.setAttribute("data-index", parseInt(n.getAttribute("data-index")) + i * document.querySelectorAll(".fiche").length),
               n.style.zIndex = n.getAttribute("data-index"),
               _i.killTweensOf(n),
               _i.set(n, {
                   z: -n.getAttribute("data-nb") * Dh * 20 + parseInt(n.getAttribute("data-z")) + parseInt(Lh) + "px"
               }),
               n.classList.remove("desc"),
               _i.fromTo(n, {
                   y: e + "%"
               }, {
                   y: 0,
                   ease: "power2.out",
                   duration: .4
               })
           }
       });
       var r = document.querySelector(".liste .current");
       r.classList.remove("current");
       var a = document.querySelector(".fiche.current");
       a.classList.remove("current"),
       -1 == i ? null !== r.nextElementSibling ? (r.nextElementSibling.classList.add("current"),
       a.nextElementSibling.classList.add("current")) : (document.querySelectorAll(".liste button")[0].classList.add("current"),
       document.querySelectorAll(".fiche")[0].classList.add("current")) : null !== r.previousElementSibling ? (r.previousElementSibling.classList.add("current"),
       a.previousElementSibling.classList.add("current")) : (document.querySelectorAll(".liste button")[document.querySelectorAll(".liste button").length - 1].classList.add("current"),
       document.querySelectorAll(".fiche")[document.querySelectorAll(".fiche").length - 1].classList.add("current"))
   }
   ,
   window.changementSlideSet = function(t, e) {
       t.classList.add("desc"),
       t.setAttribute("data-nb", parseInt(t.getAttribute("data-nb")) - 1 * e),
       t.setAttribute("data-index", parseInt(t.getAttribute("data-index")) + e * document.querySelectorAll(".fiche").length),
       t.style.zIndex = t.getAttribute("data-index"),
       _i.killTweensOf(t),
       _i.set(t, {
           z: -t.getAttribute("data-nb") * Dh * 20 + parseInt(t.getAttribute("data-z")) + parseInt(Lh) + "px"
       }),
       t.classList.remove("desc");
       var n = document.querySelector(".liste .current");
       n.classList.remove("current");
       var i = document.querySelector(".fiche.current");
       i.classList.remove("current"),
       -1 == e ? null !== n.nextElementSibling ? (n.nextElementSibling.classList.add("current"),
       i.nextElementSibling.classList.add("current")) : (document.querySelectorAll(".liste button")[0].classList.add("current"),
       document.querySelectorAll(".fiche")[0].classList.add("current")) : null !== n.previousElementSibling ? (n.previousElementSibling.classList.add("current"),
       i.previousElementSibling.classList.add("current")) : (document.querySelectorAll(".liste button")[document.querySelectorAll(".liste button").length - 1].classList.add("current"),
       document.querySelectorAll(".fiche")[document.querySelectorAll(".fiche").length - 1].classList.add("current"))
   }
   ,
   document.addEventListener("keydown", (function(t) {
       var e = t.key;
       "ArrowDown" == e ? zh(1) : "ArrowUp" == e && zh(-1)
   }
   ))
}();

// dared logo

const logo = document.querySelectorAll("#dared path");

for (let i = 0; i < logo.length; i++) {
   console.log (`letter ${i} is ${logo[i].getTotalLength()}`);
}

