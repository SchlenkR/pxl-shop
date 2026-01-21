(async ()=>{
    (function() {
        const n = document.createElement("link").relList;
        if (n && n.supports && n.supports("modulepreload")) return;
        for (const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);
        new MutationObserver((s)=>{
            for (const a of s)if (a.type === "childList") for (const f of a.addedNodes)f.tagName === "LINK" && f.rel === "modulepreload" && o(f);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function r(s) {
            const a = {};
            return s.integrity && (a.integrity = s.integrity), s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? a.credentials = "include" : s.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
        }
        function o(s) {
            if (s.ep) return;
            s.ep = !0;
            const a = r(s);
            fetch(s.href, a);
        }
    })();
    function ti(c) {
        if (c === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return c;
    }
    function Ug(c, n) {
        c.prototype = Object.create(n.prototype), c.prototype.constructor = c, c.__proto__ = n;
    }
    var Kn = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, fs = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, $f, Xt, it, dr = 1e8, He = 1 / dr, Cf = Math.PI * 2, Qy = Cf / 4, Zy = 0, Gg = Math.sqrt, Jy = Math.cos, e_ = Math.sin, jt = function(n) {
        return typeof n == "string";
    }, ht = function(n) {
        return typeof n == "function";
    }, si = function(n) {
        return typeof n == "number";
    }, Yf = function(n) {
        return typeof n > "u";
    }, Vr = function(n) {
        return typeof n == "object";
    }, Rn = function(n) {
        return n !== !1;
    }, Kf = function() {
        return typeof window < "u";
    }, ba = function(n) {
        return ht(n) || jt(n);
    }, Wg = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}, rn = Array.isArray, t_ = /random\([^)]+\)/g, n_ = /,\s*/g, Vh = /(?:-?\.?\d|\.)+/gi, Vg = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ts = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, tf = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Xg = /[+-]=-?[.\d]+/, r_ = /[^,'"\[\]\s]+/gi, i_ = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ut, Fr, Pf, Qf, Qn = {}, iu = {}, Hg, qg = function(n) {
        return (iu = ds(n, Qn)) && An;
    }, Zf = function(n, r) {
        return console.warn("Invalid property", n, "set to", r, "Missing plugin? gsap.registerPlugin()");
    }, Sl = function(n, r) {
        return !r && console.warn(n);
    }, $g = function(n, r) {
        return n && (Qn[n] = r) && iu && (iu[n] = r) || Qn;
    }, xl = function() {
        return 0;
    }, o_ = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    }, Ya = {
        suppressEvents: !0,
        kill: !1
    }, s_ = {
        suppressEvents: !0
    }, Jf = {}, Bi = [], Tf = {}, Yg, Vn = {}, nf = {}, Xh = 30, Ka = [], ed = "", td = function(n) {
        var r = n[0], o, s;
        if (Vr(r) || ht(r) || (n = [
            n
        ]), !(o = (r._gsap || {}).harness)) {
            for(s = Ka.length; s-- && !Ka[s].targetTest(r););
            o = Ka[s];
        }
        for(s = n.length; s--;)n[s] && (n[s]._gsap || (n[s]._gsap = new vm(n[s], o))) || n.splice(s, 1);
        return n;
    }, ho = function(n) {
        return n._gsap || td(pr(n))[0]._gsap;
    }, Kg = function(n, r, o) {
        return (o = n[r]) && ht(o) ? n[r]() : Yf(o) && n.getAttribute && n.getAttribute(r) || o;
    }, Dn = function(n, r) {
        return (n = n.split(",")).forEach(r) || n;
    }, _t = function(n) {
        return Math.round(n * 1e5) / 1e5 || 0;
    }, at = function(n) {
        return Math.round(n * 1e7) / 1e7 || 0;
    }, is = function(n, r) {
        var o = r.charAt(0), s = parseFloat(r.substr(2));
        return n = parseFloat(n), o === "+" ? n + s : o === "-" ? n - s : o === "*" ? n * s : n / s;
    }, l_ = function(n, r) {
        for(var o = r.length, s = 0; n.indexOf(r[s]) < 0 && ++s < o;);
        return s < o;
    }, ou = function() {
        var n = Bi.length, r = Bi.slice(0), o, s;
        for(Tf = {}, Bi.length = 0, o = 0; o < n; o++)s = r[o], s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0);
    }, nd = function(n) {
        return !!(n._initted || n._startAt || n.add);
    }, Qg = function(n, r, o, s) {
        Bi.length && !Xt && ou(), n.render(r, o, !!(Xt && r < 0 && nd(n))), Bi.length && !Xt && ou();
    }, Zg = function(n) {
        var r = parseFloat(n);
        return (r || r === 0) && (n + "").match(r_).length < 2 ? r : jt(n) ? n.trim() : n;
    }, Jg = function(n) {
        return n;
    }, Zn = function(n, r) {
        for(var o in r)o in n || (n[o] = r[o]);
        return n;
    }, a_ = function(n) {
        return function(r, o) {
            for(var s in o)s in r || s === "duration" && n || s === "ease" || (r[s] = o[s]);
        };
    }, ds = function(n, r) {
        for(var o in r)n[o] = r[o];
        return n;
    }, Hh = function c(n, r) {
        for(var o in r)o !== "__proto__" && o !== "constructor" && o !== "prototype" && (n[o] = Vr(r[o]) ? c(n[o] || (n[o] = {}), r[o]) : r[o]);
        return n;
    }, su = function(n, r) {
        var o = {}, s;
        for(s in n)s in r || (o[s] = n[s]);
        return o;
    }, ul = function(n) {
        var r = n.parent || ut, o = n.keyframes ? a_(rn(n.keyframes)) : Zn;
        if (Rn(n.inherit)) for(; r;)o(n, r.vars.defaults), r = r.parent || r._dp;
        return n;
    }, u_ = function(n, r) {
        for(var o = n.length, s = o === r.length; s && o-- && n[o] === r[o];);
        return o < 0;
    }, em = function(n, r, o, s, a) {
        var f = n[s], d;
        if (a) for(d = r[a]; f && f[a] > d;)f = f._prev;
        return f ? (r._next = f._next, f._next = r) : (r._next = n[o], n[o] = r), r._next ? r._next._prev = r : n[s] = r, r._prev = f, r.parent = r._dp = n, r;
    }, _u = function(n, r, o, s) {
        o === void 0 && (o = "_first"), s === void 0 && (s = "_last");
        var a = r._prev, f = r._next;
        a ? a._next = f : n[o] === r && (n[o] = f), f ? f._prev = a : n[s] === r && (n[s] = a), r._next = r._prev = r.parent = null;
    }, Ii = function(n, r) {
        n.parent && (!r || n.parent.autoRemoveChildren) && n.parent.remove && n.parent.remove(n), n._act = 0;
    }, go = function(n, r) {
        if (n && (!r || r._end > n._dur || r._start < 0)) for(var o = n; o;)o._dirty = 1, o = o.parent;
        return n;
    }, c_ = function(n) {
        for(var r = n.parent; r && r.parent;)r._dirty = 1, r.totalDuration(), r = r.parent;
        return n;
    }, Ef = function(n, r, o, s) {
        return n._startAt && (Xt ? n._startAt.revert(Ya) : n.vars.immediateRender && !n.vars.autoRevert || n._startAt.render(r, !0, s));
    }, f_ = function c(n) {
        return !n || n._ts && c(n.parent);
    }, qh = function(n) {
        return n._repeat ? ps(n._tTime, n = n.duration() + n._rDelay) * n : 0;
    }, ps = function(n, r) {
        var o = Math.floor(n = at(n / r));
        return n && o === n ? o - 1 : o;
    }, lu = function(n, r) {
        return (n - r._start) * r._ts + (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur);
    }, vu = function(n) {
        return n._end = at(n._start + (n._tDur / Math.abs(n._ts || n._rts || He) || 0));
    }, wu = function(n, r) {
        var o = n._dp;
        return o && o.smoothChildTiming && n._ts && (n._start = at(o._time - (n._ts > 0 ? r / n._ts : ((n._dirty ? n.totalDuration() : n._tDur) - r) / -n._ts)), vu(n), o._dirty || go(o, n)), n;
    }, tm = function(n, r) {
        var o;
        if ((r._time || !r._dur && r._initted || r._start < n._time && (r._dur || !r.add)) && (o = lu(n.rawTime(), r), (!r._dur || Ll(0, r.totalDuration(), o) - r._tTime > He) && r.render(o, !0)), go(n, r)._dp && n._initted && n._time >= n._dur && n._ts) {
            if (n._dur < n.duration()) for(o = n; o._dp;)o.rawTime() >= 0 && o.totalTime(o._tTime), o = o._dp;
            n._zTime = -He;
        }
    }, jr = function(n, r, o, s) {
        return r.parent && Ii(r), r._start = at((si(o) ? o : o || n !== ut ? ar(n, o, r) : n._time) + r._delay), r._end = at(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), em(n, r, "_first", "_last", n._sort ? "_start" : 0), zf(r) || (n._recent = r), s || tm(n, r), n._ts < 0 && wu(n, n._tTime), n;
    }, nm = function(n, r) {
        return (Qn.ScrollTrigger || Zf("scrollTrigger", r)) && Qn.ScrollTrigger.create(r, n);
    }, rm = function(n, r, o, s, a) {
        if (id(n, r, a), !n._initted) return 1;
        if (!o && n._pt && !Xt && (n._dur && n.vars.lazy !== !1 || !n._dur && n.vars.lazy) && Yg !== Hn.frame) return Bi.push(n), n._lazy = [
            a,
            s
        ], 1;
    }, d_ = function c(n) {
        var r = n.parent;
        return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || c(r));
    }, zf = function(n) {
        var r = n.data;
        return r === "isFromStart" || r === "isStart";
    }, p_ = function(n, r, o, s) {
        var a = n.ratio, f = r < 0 || !r && (!n._start && d_(n) && !(!n._initted && zf(n)) || (n._ts < 0 || n._dp._ts < 0) && !zf(n)) ? 0 : 1, d = n._rDelay, h = 0, g, m, w;
        if (d && n._repeat && (h = Ll(0, n._tDur, r), m = ps(h, d), n._yoyo && m & 1 && (f = 1 - f), m !== ps(n._tTime, d) && (a = 1 - f, n.vars.repeatRefresh && n._initted && n.invalidate())), f !== a || Xt || s || n._zTime === He || !r && n._zTime) {
            if (!n._initted && rm(n, r, s, o, h)) return;
            for(w = n._zTime, n._zTime = r || (o ? He : 0), o || (o = r && !w), n.ratio = f, n._from && (f = 1 - f), n._time = 0, n._tTime = h, g = n._pt; g;)g.r(f, g.d), g = g._next;
            r < 0 && Ef(n, r, o, !0), n._onUpdate && !o && $n(n, "onUpdate"), h && n._repeat && !o && n.parent && $n(n, "onRepeat"), (r >= n._tDur || r < 0) && n.ratio === f && (f && Ii(n, 1), !o && !Xt && ($n(n, f ? "onComplete" : "onReverseComplete", !0), n._prom && n._prom()));
        } else n._zTime || (n._zTime = r);
    }, h_ = function(n, r, o) {
        var s;
        if (o > r) for(s = n._first; s && s._start <= o;){
            if (s.data === "isPause" && s._start > r) return s;
            s = s._next;
        }
        else for(s = n._last; s && s._start >= o;){
            if (s.data === "isPause" && s._start < r) return s;
            s = s._prev;
        }
    }, hs = function(n, r, o, s) {
        var a = n._repeat, f = at(r) || 0, d = n._tTime / n._tDur;
        return d && !s && (n._time *= f / n._dur), n._dur = f, n._tDur = a ? a < 0 ? 1e10 : at(f * (a + 1) + n._rDelay * a) : f, d > 0 && !s && wu(n, n._tTime = n._tDur * d), n.parent && vu(n), o || go(n.parent, n), n;
    }, $h = function(n) {
        return n instanceof mn ? go(n) : hs(n, n._dur);
    }, g_ = {
        _start: 0,
        endTime: xl,
        totalDuration: xl
    }, ar = function c(n, r, o) {
        var s = n.labels, a = n._recent || g_, f = n.duration() >= dr ? a.endTime(!1) : n._dur, d, h, g;
        return jt(r) && (isNaN(r) || r in s) ? (h = r.charAt(0), g = r.substr(-1) === "%", d = r.indexOf("="), h === "<" || h === ">" ? (d >= 0 && (r = r.replace(/=/, "")), (h === "<" ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (g ? (d < 0 ? a : o).totalDuration() / 100 : 1)) : d < 0 ? (r in s || (s[r] = f), s[r]) : (h = parseFloat(r.charAt(d - 1) + r.substr(d + 1)), g && o && (h = h / 100 * (rn(o) ? o[0] : o).totalDuration()), d > 1 ? c(n, r.substr(0, d - 1), o) + h : f + h)) : r == null ? f : +r;
    }, cl = function(n, r, o) {
        var s = si(r[1]), a = (s ? 2 : 1) + (n < 2 ? 0 : 1), f = r[a], d, h;
        if (s && (f.duration = r[1]), f.parent = o, n) {
            for(d = f, h = o; h && !("immediateRender" in d);)d = h.vars.defaults || {}, h = Rn(h.vars.inherit) && h.parent;
            f.immediateRender = Rn(d.immediateRender), n < 2 ? f.runBackwards = 1 : f.startAt = r[a - 1];
        }
        return new Pt(r[0], f, r[a + 1]);
    }, Wi = function(n, r) {
        return n || n === 0 ? r(n) : r;
    }, Ll = function(n, r, o) {
        return o < n ? n : o > r ? r : o;
    }, tn = function(n, r) {
        return !jt(n) || !(r = i_.exec(n)) ? "" : r[1];
    }, m_ = function(n, r, o) {
        return Wi(o, function(s) {
            return Ll(n, r, s);
        });
    }, Rf = [].slice, im = function(n, r) {
        return n && Vr(n) && "length" in n && (!r && !n.length || n.length - 1 in n && Vr(n[0])) && !n.nodeType && n !== Fr;
    }, y_ = function(n, r, o) {
        return o === void 0 && (o = []), n.forEach(function(s) {
            var a;
            return jt(s) && !r || im(s, 1) ? (a = o).push.apply(a, pr(s)) : o.push(s);
        }) || o;
    }, pr = function(n, r, o) {
        return it && !r && it.selector ? it.selector(n) : jt(n) && !o && (Pf || !gs()) ? Rf.call((r || Qf).querySelectorAll(n), 0) : rn(n) ? y_(n, o) : im(n) ? Rf.call(n, 0) : n ? [
            n
        ] : [];
    }, Df = function(n) {
        return n = pr(n)[0] || Sl("Invalid scope") || {}, function(r) {
            var o = n.current || n.nativeElement || n;
            return pr(r, o.querySelectorAll ? o : o === n ? Sl("Invalid scope") || Qf.createElement("div") : n);
        };
    }, om = function(n) {
        return n.sort(function() {
            return .5 - Math.random();
        });
    }, sm = function(n) {
        if (ht(n)) return n;
        var r = Vr(n) ? n : {
            each: n
        }, o = mo(r.ease), s = r.from || 0, a = parseFloat(r.base) || 0, f = {}, d = s > 0 && s < 1, h = isNaN(s) || d, g = r.axis, m = s, w = s;
        return jt(s) ? m = w = {
            center: .5,
            edges: .5,
            end: 1
        }[s] || 0 : !d && h && (m = s[0], w = s[1]), function(k, _, x) {
            var v = (x || r).length, T = f[v], N, O, I, D, F, j, b, q, G;
            if (!T) {
                if (G = r.grid === "auto" ? 0 : (r.grid || [
                    1,
                    dr
                ])[1], !G) {
                    for(b = -dr; b < (b = x[G++].getBoundingClientRect().left) && G < v;);
                    G < v && G--;
                }
                for(T = f[v] = [], N = h ? Math.min(G, v) * m - .5 : s % G, O = G === dr ? 0 : h ? v * w / G - .5 : s / G | 0, b = 0, q = dr, j = 0; j < v; j++)I = j % G - N, D = O - (j / G | 0), T[j] = F = g ? Math.abs(g === "y" ? D : I) : Gg(I * I + D * D), F > b && (b = F), F < q && (q = F);
                s === "random" && om(T), T.max = b - q, T.min = q, T.v = v = (parseFloat(r.amount) || parseFloat(r.each) * (G > v ? v - 1 : g ? g === "y" ? v / G : G : Math.max(G, v / G)) || 0) * (s === "edges" ? -1 : 1), T.b = v < 0 ? a - v : a, T.u = tn(r.amount || r.each) || 0, o = o && v < 0 ? mm(o) : o;
            }
            return v = (T[k] - T.min) / T.max || 0, at(T.b + (o ? o(v) : v) * T.v) + T.u;
        };
    }, Lf = function(n) {
        var r = Math.pow(10, ((n + "").split(".")[1] || "").length);
        return function(o) {
            var s = at(Math.round(parseFloat(o) / n) * n * r);
            return (s - s % 1) / r + (si(o) ? 0 : tn(o));
        };
    }, lm = function(n, r) {
        var o = rn(n), s, a;
        return !o && Vr(n) && (s = o = n.radius || dr, n.values ? (n = pr(n.values), (a = !si(n[0])) && (s *= s)) : n = Lf(n.increment)), Wi(r, o ? ht(n) ? function(f) {
            return a = n(f), Math.abs(a - f) <= s ? a : f;
        } : function(f) {
            for(var d = parseFloat(a ? f.x : f), h = parseFloat(a ? f.y : 0), g = dr, m = 0, w = n.length, k, _; w--;)a ? (k = n[w].x - d, _ = n[w].y - h, k = k * k + _ * _) : k = Math.abs(n[w] - d), k < g && (g = k, m = w);
            return m = !s || g <= s ? n[m] : f, a || m === f || si(f) ? m : m + tn(f);
        } : Lf(n));
    }, am = function(n, r, o, s) {
        return Wi(rn(n) ? !r : o === !0 ? !!(o = 0) : !s, function() {
            return rn(n) ? n[~~(Math.random() * n.length)] : (o = o || 1e-5) && (s = o < 1 ? Math.pow(10, (o + "").length - 2) : 1) && Math.floor(Math.round((n - o / 2 + Math.random() * (r - n + o * .99)) / o) * o * s) / s;
        });
    }, __ = function() {
        for(var n = arguments.length, r = new Array(n), o = 0; o < n; o++)r[o] = arguments[o];
        return function(s) {
            return r.reduce(function(a, f) {
                return f(a);
            }, s);
        };
    }, v_ = function(n, r) {
        return function(o) {
            return n(parseFloat(o)) + (r || tn(o));
        };
    }, w_ = function(n, r, o) {
        return cm(n, r, 0, 1, o);
    }, um = function(n, r, o) {
        return Wi(o, function(s) {
            return n[~~r(s)];
        });
    }, k_ = function c(n, r, o) {
        var s = r - n;
        return rn(n) ? um(n, c(0, n.length), r) : Wi(o, function(a) {
            return (s + (a - n) % s) % s + n;
        });
    }, S_ = function c(n, r, o) {
        var s = r - n, a = s * 2;
        return rn(n) ? um(n, c(0, n.length - 1), r) : Wi(o, function(f) {
            return f = (a + (f - n) % a) % a || 0, n + (f > s ? a - f : f);
        });
    }, Cl = function(n) {
        return n.replace(t_, function(r) {
            var o = r.indexOf("[") + 1, s = r.substring(o || 7, o ? r.indexOf("]") : r.length - 1).split(n_);
            return am(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5);
        });
    }, cm = function(n, r, o, s, a) {
        var f = r - n, d = s - o;
        return Wi(a, function(h) {
            return o + ((h - n) / f * d || 0);
        });
    }, x_ = function c(n, r, o, s) {
        var a = isNaN(n + r) ? 0 : function(_) {
            return (1 - _) * n + _ * r;
        };
        if (!a) {
            var f = jt(n), d = {}, h, g, m, w, k;
            if (o === !0 && (s = 1) && (o = null), f) n = {
                p: n
            }, r = {
                p: r
            };
            else if (rn(n) && !rn(r)) {
                for(m = [], w = n.length, k = w - 2, g = 1; g < w; g++)m.push(c(n[g - 1], n[g]));
                w--, a = function(x) {
                    x *= w;
                    var v = Math.min(k, ~~x);
                    return m[v](x - v);
                }, o = r;
            } else s || (n = ds(rn(n) ? [] : {}, n));
            if (!m) {
                for(h in r)rd.call(d, n, h, "get", r[h]);
                a = function(x) {
                    return ld(x, d) || (f ? n.p : n);
                };
            }
        }
        return Wi(o, a);
    }, Yh = function(n, r, o) {
        var s = n.labels, a = dr, f, d, h;
        for(f in s)d = s[f] - r, d < 0 == !!o && d && a > (d = Math.abs(d)) && (h = f, a = d);
        return h;
    }, $n = function(n, r, o) {
        var s = n.vars, a = s[r], f = it, d = n._ctx, h, g, m;
        if (a) return h = s[r + "Params"], g = s.callbackScope || n, o && Bi.length && ou(), d && (it = d), m = h ? a.apply(g, h) : a.call(g), it = f, m;
    }, nl = function(n) {
        return Ii(n), n.scrollTrigger && n.scrollTrigger.kill(!!Xt), n.progress() < 1 && $n(n, "onInterrupt"), n;
    }, ns, fm = [], dm = function(n) {
        if (n) if (n = !n.name && n.default || n, Kf() || n.headless) {
            var r = n.name, o = ht(n), s = r && !o && n.init ? function() {
                this._props = [];
            } : n, a = {
                init: xl,
                render: ld,
                add: rd,
                kill: I_,
                modifier: F_,
                rawVars: 0
            }, f = {
                targetTest: 0,
                get: 0,
                getSetter: sd,
                aliases: {},
                register: 0
            };
            if (gs(), n !== s) {
                if (Vn[r]) return;
                Zn(s, Zn(su(n, a), f)), ds(s.prototype, ds(a, su(n, f))), Vn[s.prop = r] = s, n.targetTest && (Ka.push(s), Jf[r] = 1), r = (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) + "Plugin";
            }
            $g(r, s), n.register && n.register(An, s, Ln);
        } else fm.push(n);
    }, Xe = 255, rl = {
        aqua: [
            0,
            Xe,
            Xe
        ],
        lime: [
            0,
            Xe,
            0
        ],
        silver: [
            192,
            192,
            192
        ],
        black: [
            0,
            0,
            0
        ],
        maroon: [
            128,
            0,
            0
        ],
        teal: [
            0,
            128,
            128
        ],
        blue: [
            0,
            0,
            Xe
        ],
        navy: [
            0,
            0,
            128
        ],
        white: [
            Xe,
            Xe,
            Xe
        ],
        olive: [
            128,
            128,
            0
        ],
        yellow: [
            Xe,
            Xe,
            0
        ],
        orange: [
            Xe,
            165,
            0
        ],
        gray: [
            128,
            128,
            128
        ],
        purple: [
            128,
            0,
            128
        ],
        green: [
            0,
            128,
            0
        ],
        red: [
            Xe,
            0,
            0
        ],
        pink: [
            Xe,
            192,
            203
        ],
        cyan: [
            0,
            Xe,
            Xe
        ],
        transparent: [
            Xe,
            Xe,
            Xe,
            0
        ]
    }, rf = function(n, r, o) {
        return n += n < 0 ? 1 : n > 1 ? -1 : 0, (n * 6 < 1 ? r + (o - r) * n * 6 : n < .5 ? o : n * 3 < 2 ? r + (o - r) * (2 / 3 - n) * 6 : r) * Xe + .5 | 0;
    }, pm = function(n, r, o) {
        var s = n ? si(n) ? [
            n >> 16,
            n >> 8 & Xe,
            n & Xe
        ] : 0 : rl.black, a, f, d, h, g, m, w, k, _, x;
        if (!s) {
            if (n.substr(-1) === "," && (n = n.substr(0, n.length - 1)), rl[n]) s = rl[n];
            else if (n.charAt(0) === "#") {
                if (n.length < 6 && (a = n.charAt(1), f = n.charAt(2), d = n.charAt(3), n = "#" + a + a + f + f + d + d + (n.length === 5 ? n.charAt(4) + n.charAt(4) : "")), n.length === 9) return s = parseInt(n.substr(1, 6), 16), [
                    s >> 16,
                    s >> 8 & Xe,
                    s & Xe,
                    parseInt(n.substr(7), 16) / 255
                ];
                n = parseInt(n.substr(1), 16), s = [
                    n >> 16,
                    n >> 8 & Xe,
                    n & Xe
                ];
            } else if (n.substr(0, 3) === "hsl") {
                if (s = x = n.match(Vh), !r) h = +s[0] % 360 / 360, g = +s[1] / 100, m = +s[2] / 100, f = m <= .5 ? m * (g + 1) : m + g - m * g, a = m * 2 - f, s.length > 3 && (s[3] *= 1), s[0] = rf(h + 1 / 3, a, f), s[1] = rf(h, a, f), s[2] = rf(h - 1 / 3, a, f);
                else if (~n.indexOf("=")) return s = n.match(Vg), o && s.length < 4 && (s[3] = 1), s;
            } else s = n.match(Vh) || rl.transparent;
            s = s.map(Number);
        }
        return r && !x && (a = s[0] / Xe, f = s[1] / Xe, d = s[2] / Xe, w = Math.max(a, f, d), k = Math.min(a, f, d), m = (w + k) / 2, w === k ? h = g = 0 : (_ = w - k, g = m > .5 ? _ / (2 - w - k) : _ / (w + k), h = w === a ? (f - d) / _ + (f < d ? 6 : 0) : w === f ? (d - a) / _ + 2 : (a - f) / _ + 4, h *= 60), s[0] = ~~(h + .5), s[1] = ~~(g * 100 + .5), s[2] = ~~(m * 100 + .5)), o && s.length < 4 && (s[3] = 1), s;
    }, hm = function(n) {
        var r = [], o = [], s = -1;
        return n.split(Ni).forEach(function(a) {
            var f = a.match(ts) || [];
            r.push.apply(r, f), o.push(s += f.length + 1);
        }), r.c = o, r;
    }, Kh = function(n, r, o) {
        var s = "", a = (n + s).match(Ni), f = r ? "hsla(" : "rgba(", d = 0, h, g, m, w;
        if (!a) return n;
        if (a = a.map(function(k) {
            return (k = pm(k, r, 1)) && f + (r ? k[0] + "," + k[1] + "%," + k[2] + "%," + k[3] : k.join(",")) + ")";
        }), o && (m = hm(n), h = o.c, h.join(s) !== m.c.join(s))) for(g = n.replace(Ni, "1").split(ts), w = g.length - 1; d < w; d++)s += g[d] + (~h.indexOf(d) ? a.shift() || f + "0,0,0,0)" : (m.length ? m : a.length ? a : o).shift());
        if (!g) for(g = n.split(Ni), w = g.length - 1; d < w; d++)s += g[d] + a[d];
        return s + g[w];
    }, Ni = (function() {
        var c = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", n;
        for(n in rl)c += "|" + n + "\\b";
        return new RegExp(c + ")", "gi");
    })(), C_ = /hsl[a]?\(/, gm = function(n) {
        var r = n.join(" "), o;
        if (Ni.lastIndex = 0, Ni.test(r)) return o = C_.test(r), n[1] = Kh(n[1], o), n[0] = Kh(n[0], o, hm(n[1])), !0;
    }, Pl, Hn = (function() {
        var c = Date.now, n = 500, r = 33, o = c(), s = o, a = 1e3 / 240, f = a, d = [], h, g, m, w, k, _, x = function v(T) {
            var N = c() - s, O = T === !0, I, D, F, j;
            if ((N > n || N < 0) && (o += N - r), s += N, F = s - o, I = F - f, (I > 0 || O) && (j = ++w.frame, k = F - w.time * 1e3, w.time = F = F / 1e3, f += I + (I >= a ? 4 : a - I), D = 1), O || (h = g(v)), D) for(_ = 0; _ < d.length; _++)d[_](F, k, j, T);
        };
        return w = {
            time: 0,
            frame: 0,
            tick: function() {
                x(!0);
            },
            deltaRatio: function(T) {
                return k / (1e3 / (T || 60));
            },
            wake: function() {
                Hg && (!Pf && Kf() && (Fr = Pf = window, Qf = Fr.document || {}, Qn.gsap = An, (Fr.gsapVersions || (Fr.gsapVersions = [])).push(An.version), qg(iu || Fr.GreenSockGlobals || !Fr.gsap && Fr || {}), fm.forEach(dm)), m = typeof requestAnimationFrame < "u" && requestAnimationFrame, h && w.sleep(), g = m || function(T) {
                    return setTimeout(T, f - w.time * 1e3 + 1 | 0);
                }, Pl = 1, x(2));
            },
            sleep: function() {
                (m ? cancelAnimationFrame : clearTimeout)(h), Pl = 0, g = xl;
            },
            lagSmoothing: function(T, N) {
                n = T || 1 / 0, r = Math.min(N || 33, n);
            },
            fps: function(T) {
                a = 1e3 / (T || 240), f = w.time * 1e3 + a;
            },
            add: function(T, N, O) {
                var I = N ? function(D, F, j, b) {
                    T(D, F, j, b), w.remove(I);
                } : T;
                return w.remove(T), d[O ? "unshift" : "push"](I), gs(), I;
            },
            remove: function(T, N) {
                ~(N = d.indexOf(T)) && d.splice(N, 1) && _ >= N && _--;
            },
            _listeners: d
        }, w;
    })(), gs = function() {
        return !Pl && Hn.wake();
    }, Fe = {}, P_ = /^[\d.\-M][\d.\-,\s]/, T_ = /["']/g, E_ = function(n) {
        for(var r = {}, o = n.substr(1, n.length - 3).split(":"), s = o[0], a = 1, f = o.length, d, h, g; a < f; a++)h = o[a], d = a !== f - 1 ? h.lastIndexOf(",") : h.length, g = h.substr(0, d), r[s] = isNaN(g) ? g.replace(T_, "").trim() : +g, s = h.substr(d + 1).trim();
        return r;
    }, z_ = function(n) {
        var r = n.indexOf("(") + 1, o = n.indexOf(")"), s = n.indexOf("(", r);
        return n.substring(r, ~s && s < o ? n.indexOf(")", o + 1) : o);
    }, R_ = function(n) {
        var r = (n + "").split("("), o = Fe[r[0]];
        return o && r.length > 1 && o.config ? o.config.apply(null, ~n.indexOf("{") ? [
            E_(r[1])
        ] : z_(n).split(",").map(Zg)) : Fe._CE && P_.test(n) ? Fe._CE("", n) : o;
    }, mm = function(n) {
        return function(r) {
            return 1 - n(1 - r);
        };
    }, ym = function c(n, r) {
        for(var o = n._first, s; o;)o instanceof mn ? c(o, r) : o.vars.yoyoEase && (!o._yoyo || !o._repeat) && o._yoyo !== r && (o.timeline ? c(o.timeline, r) : (s = o._ease, o._ease = o._yEase, o._yEase = s, o._yoyo = r)), o = o._next;
    }, mo = function(n, r) {
        return n && (ht(n) ? n : Fe[n] || R_(n)) || r;
    }, Po = function(n, r, o, s) {
        o === void 0 && (o = function(h) {
            return 1 - r(1 - h);
        }), s === void 0 && (s = function(h) {
            return h < .5 ? r(h * 2) / 2 : 1 - r((1 - h) * 2) / 2;
        });
        var a = {
            easeIn: r,
            easeOut: o,
            easeInOut: s
        }, f;
        return Dn(n, function(d) {
            Fe[d] = Qn[d] = a, Fe[f = d.toLowerCase()] = o;
            for(var h in a)Fe[f + (h === "easeIn" ? ".in" : h === "easeOut" ? ".out" : ".inOut")] = Fe[d + "." + h] = a[h];
        }), a;
    }, _m = function(n) {
        return function(r) {
            return r < .5 ? (1 - n(1 - r * 2)) / 2 : .5 + n((r - .5) * 2) / 2;
        };
    }, of = function c(n, r, o) {
        var s = r >= 1 ? r : 1, a = (o || (n ? .3 : .45)) / (r < 1 ? r : 1), f = a / Cf * (Math.asin(1 / s) || 0), d = function(m) {
            return m === 1 ? 1 : s * Math.pow(2, -10 * m) * e_((m - f) * a) + 1;
        }, h = n === "out" ? d : n === "in" ? function(g) {
            return 1 - d(1 - g);
        } : _m(d);
        return a = Cf / a, h.config = function(g, m) {
            return c(n, g, m);
        }, h;
    }, sf = function c(n, r) {
        r === void 0 && (r = 1.70158);
        var o = function(f) {
            return f ? --f * f * ((r + 1) * f + r) + 1 : 0;
        }, s = n === "out" ? o : n === "in" ? function(a) {
            return 1 - o(1 - a);
        } : _m(o);
        return s.config = function(a) {
            return c(n, a);
        }, s;
    };
    Dn("Linear,Quad,Cubic,Quart,Quint,Strong", function(c, n) {
        var r = n < 5 ? n + 1 : n;
        Po(c + ",Power" + (r - 1), n ? function(o) {
            return Math.pow(o, r);
        } : function(o) {
            return o;
        }, function(o) {
            return 1 - Math.pow(1 - o, r);
        }, function(o) {
            return o < .5 ? Math.pow(o * 2, r) / 2 : 1 - Math.pow((1 - o) * 2, r) / 2;
        });
    });
    Fe.Linear.easeNone = Fe.none = Fe.Linear.easeIn;
    Po("Elastic", of("in"), of("out"), of());
    (function(c, n) {
        var r = 1 / n, o = 2 * r, s = 2.5 * r, a = function(d) {
            return d < r ? c * d * d : d < o ? c * Math.pow(d - 1.5 / n, 2) + .75 : d < s ? c * (d -= 2.25 / n) * d + .9375 : c * Math.pow(d - 2.625 / n, 2) + .984375;
        };
        Po("Bounce", function(f) {
            return 1 - a(1 - f);
        }, a);
    })(7.5625, 2.75);
    Po("Expo", function(c) {
        return Math.pow(2, 10 * (c - 1)) * c + c * c * c * c * c * c * (1 - c);
    });
    Po("Circ", function(c) {
        return -(Gg(1 - c * c) - 1);
    });
    Po("Sine", function(c) {
        return c === 1 ? 1 : -Jy(c * Qy) + 1;
    });
    Po("Back", sf("in"), sf("out"), sf());
    Fe.SteppedEase = Fe.steps = Qn.SteppedEase = {
        config: function(n, r) {
            n === void 0 && (n = 1);
            var o = 1 / n, s = n + (r ? 0 : 1), a = r ? 1 : 0, f = 1 - He;
            return function(d) {
                return ((s * Ll(0, f, d) | 0) + a) * o;
            };
        }
    };
    fs.ease = Fe["quad.out"];
    Dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(c) {
        return ed += c + "," + c + "Params,";
    });
    var vm = function(n, r) {
        this.id = Zy++, n._gsap = this, this.target = n, this.harness = r, this.get = r ? r.get : Kg, this.set = r ? r.getSetter : sd;
    }, Tl = (function() {
        function c(r) {
            this.vars = r, this._delay = +r.delay || 0, (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) && (this._rDelay = r.repeatDelay || 0, this._yoyo = !!r.yoyo || !!r.yoyoEase), this._ts = 1, hs(this, +r.duration, 1, 1), this.data = r.data, it && (this._ctx = it, it.data.push(this)), Pl || Hn.wake();
        }
        var n = c.prototype;
        return n.delay = function(o) {
            return o || o === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + o - this._delay), this._delay = o, this) : this._delay;
        }, n.duration = function(o) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? o + (o + this._rDelay) * this._repeat : o) : this.totalDuration() && this._dur;
        }, n.totalDuration = function(o) {
            return arguments.length ? (this._dirty = 0, hs(this, this._repeat < 0 ? o : (o - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
        }, n.totalTime = function(o, s) {
            if (gs(), !arguments.length) return this._tTime;
            var a = this._dp;
            if (a && a.smoothChildTiming && this._ts) {
                for(wu(this, o), !a._dp || a.parent || tm(a, this); a && a.parent;)a.parent._time !== a._start + (a._ts >= 0 ? a._tTime / a._ts : (a.totalDuration() - a._tTime) / -a._ts) && a.totalTime(a._tTime, !0), a = a.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && o < this._tDur || this._ts < 0 && o > 0 || !this._tDur && !o) && jr(this._dp, this, this._start - this._delay);
            }
            return (this._tTime !== o || !this._dur && !s || this._initted && Math.abs(this._zTime) === He || !this._initted && this._dur && o || !o && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = o), Qg(this, o, s)), this;
        }, n.time = function(o, s) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), o + qh(this)) % (this._dur + this._rDelay) || (o ? this._dur : 0), s) : this._time;
        }, n.totalProgress = function(o, s) {
            return arguments.length ? this.totalTime(this.totalDuration() * o, s) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
        }, n.progress = function(o, s) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - o : o) + qh(this), s) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
        }, n.iteration = function(o, s) {
            var a = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (o - 1) * a, s) : this._repeat ? ps(this._tTime, a) + 1 : 1;
        }, n.timeScale = function(o, s) {
            if (!arguments.length) return this._rts === -He ? 0 : this._rts;
            if (this._rts === o) return this;
            var a = this.parent && this._ts ? lu(this.parent._time, this) : this._tTime;
            return this._rts = +o || 0, this._ts = this._ps || o === -He ? 0 : this._rts, this.totalTime(Ll(-Math.abs(this._delay), this.totalDuration(), a), s !== !1), vu(this), c_(this);
        }, n.paused = function(o) {
            return arguments.length ? (this._ps !== o && (this._ps = o, o ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (gs(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== He && (this._tTime -= He)))), this) : this._ps;
        }, n.startTime = function(o) {
            if (arguments.length) {
                this._start = at(o);
                var s = this.parent || this._dp;
                return s && (s._sort || !this.parent) && jr(s, this, this._start - this._delay), this;
            }
            return this._start;
        }, n.endTime = function(o) {
            return this._start + (Rn(o) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
        }, n.rawTime = function(o) {
            var s = this.parent || this._dp;
            return s ? o && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? lu(s.rawTime(o), this) : this._tTime : this._tTime;
        }, n.revert = function(o) {
            o === void 0 && (o = s_);
            var s = Xt;
            return Xt = o, nd(this) && (this.timeline && this.timeline.revert(o), this.totalTime(-.01, o.suppressEvents)), this.data !== "nested" && o.kill !== !1 && this.kill(), Xt = s, this;
        }, n.globalTime = function(o) {
            for(var s = this, a = arguments.length ? o : s.rawTime(); s;)a = s._start + a / (Math.abs(s._ts) || 1), s = s._dp;
            return !this.parent && this._sat ? this._sat.globalTime(o) : a;
        }, n.repeat = function(o) {
            return arguments.length ? (this._repeat = o === 1 / 0 ? -2 : o, $h(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
        }, n.repeatDelay = function(o) {
            if (arguments.length) {
                var s = this._time;
                return this._rDelay = o, $h(this), s ? this.time(s) : this;
            }
            return this._rDelay;
        }, n.yoyo = function(o) {
            return arguments.length ? (this._yoyo = o, this) : this._yoyo;
        }, n.seek = function(o, s) {
            return this.totalTime(ar(this, o), Rn(s));
        }, n.restart = function(o, s) {
            return this.play().totalTime(o ? -this._delay : 0, Rn(s)), this._dur || (this._zTime = -He), this;
        }, n.play = function(o, s) {
            return o != null && this.seek(o, s), this.reversed(!1).paused(!1);
        }, n.reverse = function(o, s) {
            return o != null && this.seek(o || this.totalDuration(), s), this.reversed(!0).paused(!1);
        }, n.pause = function(o, s) {
            return o != null && this.seek(o, s), this.paused(!0);
        }, n.resume = function() {
            return this.paused(!1);
        }, n.reversed = function(o) {
            return arguments.length ? (!!o !== this.reversed() && this.timeScale(-this._rts || (o ? -He : 0)), this) : this._rts < 0;
        }, n.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -He, this;
        }, n.isActive = function() {
            var o = this.parent || this._dp, s = this._start, a;
            return !!(!o || this._ts && this._initted && o.isActive() && (a = o.rawTime(!0)) >= s && a < this.endTime(!0) - He);
        }, n.eventCallback = function(o, s, a) {
            var f = this.vars;
            return arguments.length > 1 ? (s ? (f[o] = s, a && (f[o + "Params"] = a), o === "onUpdate" && (this._onUpdate = s)) : delete f[o], this) : f[o];
        }, n.then = function(o) {
            var s = this, a = s._prom;
            return new Promise(function(f) {
                var d = ht(o) ? o : Jg, h = function() {
                    var m = s.then;
                    s.then = null, a && a(), ht(d) && (d = d(s)) && (d.then || d === s) && (s.then = m), f(d), s.then = m;
                };
                s._initted && s.totalProgress() === 1 && s._ts >= 0 || !s._tTime && s._ts < 0 ? h() : s._prom = h;
            });
        }, n.kill = function() {
            nl(this);
        }, c;
    })();
    Zn(Tl.prototype, {
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
        _zTime: -He,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var mn = (function(c) {
        Ug(n, c);
        function n(o, s) {
            var a;
            return o === void 0 && (o = {}), a = c.call(this, o) || this, a.labels = {}, a.smoothChildTiming = !!o.smoothChildTiming, a.autoRemoveChildren = !!o.autoRemoveChildren, a._sort = Rn(o.sortChildren), ut && jr(o.parent || ut, ti(a), s), o.reversed && a.reverse(), o.paused && a.paused(!0), o.scrollTrigger && nm(ti(a), o.scrollTrigger), a;
        }
        var r = n.prototype;
        return r.to = function(s, a, f) {
            return cl(0, arguments, this), this;
        }, r.from = function(s, a, f) {
            return cl(1, arguments, this), this;
        }, r.fromTo = function(s, a, f, d) {
            return cl(2, arguments, this), this;
        }, r.set = function(s, a, f) {
            return a.duration = 0, a.parent = this, ul(a).repeatDelay || (a.repeat = 0), a.immediateRender = !!a.immediateRender, new Pt(s, a, ar(this, f), 1), this;
        }, r.call = function(s, a, f) {
            return jr(this, Pt.delayedCall(0, s, a), f);
        }, r.staggerTo = function(s, a, f, d, h, g, m) {
            return f.duration = a, f.stagger = f.stagger || d, f.onComplete = g, f.onCompleteParams = m, f.parent = this, new Pt(s, f, ar(this, h)), this;
        }, r.staggerFrom = function(s, a, f, d, h, g, m) {
            return f.runBackwards = 1, ul(f).immediateRender = Rn(f.immediateRender), this.staggerTo(s, a, f, d, h, g, m);
        }, r.staggerFromTo = function(s, a, f, d, h, g, m, w) {
            return d.startAt = f, ul(d).immediateRender = Rn(d.immediateRender), this.staggerTo(s, a, d, h, g, m, w);
        }, r.render = function(s, a, f) {
            var d = this._time, h = this._dirty ? this.totalDuration() : this._tDur, g = this._dur, m = s <= 0 ? 0 : at(s), w = this._zTime < 0 != s < 0 && (this._initted || !g), k, _, x, v, T, N, O, I, D, F, j, b;
            if (this !== ut && m > h && s >= 0 && (m = h), m !== this._tTime || f || w) {
                if (d !== this._time && g && (m += this._time - d, s += this._time - d), k = m, D = this._start, I = this._ts, N = !I, w && (g || (d = this._zTime), (s || !a) && (this._zTime = s)), this._repeat) {
                    if (j = this._yoyo, T = g + this._rDelay, this._repeat < -1 && s < 0) return this.totalTime(T * 100 + s, a, f);
                    if (k = at(m % T), m === h ? (v = this._repeat, k = g) : (F = at(m / T), v = ~~F, v && v === F && (k = g, v--), k > g && (k = g)), F = ps(this._tTime, T), !d && this._tTime && F !== v && this._tTime - F * T - this._dur <= 0 && (F = v), j && v & 1 && (k = g - k, b = 1), v !== F && !this._lock) {
                        var q = j && F & 1, G = q === (j && v & 1);
                        if (v < F && (q = !q), d = q ? 0 : m % g ? g : m, this._lock = 1, this.render(d || (b ? 0 : at(v * T)), a, !g)._lock = 0, this._tTime = m, !a && this.parent && $n(this, "onRepeat"), this.vars.repeatRefresh && !b && (this.invalidate()._lock = 1, F = v), d && d !== this._time || N !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (g = this._dur, h = this._tDur, G && (this._lock = 2, d = q ? g : -1e-4, this.render(d, !0), this.vars.repeatRefresh && !b && this.invalidate()), this._lock = 0, !this._ts && !N) return this;
                        ym(this, b);
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (O = h_(this, at(d), at(k)), O && (m -= k - (k = O._start))), this._tTime = m, this._time = k, this._act = !I, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = s, d = 0), !d && m && g && !a && !F && ($n(this, "onStart"), this._tTime !== m)) return this;
                if (k >= d && s >= 0) for(_ = this._first; _;){
                    if (x = _._next, (_._act || k >= _._start) && _._ts && O !== _) {
                        if (_.parent !== this) return this.render(s, a, f);
                        if (_.render(_._ts > 0 ? (k - _._start) * _._ts : (_._dirty ? _.totalDuration() : _._tDur) + (k - _._start) * _._ts, a, f), k !== this._time || !this._ts && !N) {
                            O = 0, x && (m += this._zTime = -He);
                            break;
                        }
                    }
                    _ = x;
                }
                else {
                    _ = this._last;
                    for(var X = s < 0 ? s : k; _;){
                        if (x = _._prev, (_._act || X <= _._end) && _._ts && O !== _) {
                            if (_.parent !== this) return this.render(s, a, f);
                            if (_.render(_._ts > 0 ? (X - _._start) * _._ts : (_._dirty ? _.totalDuration() : _._tDur) + (X - _._start) * _._ts, a, f || Xt && nd(_)), k !== this._time || !this._ts && !N) {
                                O = 0, x && (m += this._zTime = X ? -He : He);
                                break;
                            }
                        }
                        _ = x;
                    }
                }
                if (O && !a && (this.pause(), O.render(k >= d ? 0 : -He)._zTime = k >= d ? 1 : -1, this._ts)) return this._start = D, vu(this), this.render(s, a, f);
                this._onUpdate && !a && $n(this, "onUpdate", !0), (m === h && this._tTime >= this.totalDuration() || !m && d) && (D === this._start || Math.abs(I) !== Math.abs(this._ts)) && (this._lock || ((s || !g) && (m === h && this._ts > 0 || !m && this._ts < 0) && Ii(this, 1), !a && !(s < 0 && !d) && (m || d || !h) && ($n(this, m === h && s >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < h && this.timeScale() > 0) && this._prom())));
            }
            return this;
        }, r.add = function(s, a) {
            var f = this;
            if (si(a) || (a = ar(this, a, s)), !(s instanceof Tl)) {
                if (rn(s)) return s.forEach(function(d) {
                    return f.add(d, a);
                }), this;
                if (jt(s)) return this.addLabel(s, a);
                if (ht(s)) s = Pt.delayedCall(0, s);
                else return this;
            }
            return this !== s ? jr(this, s, a) : this;
        }, r.getChildren = function(s, a, f, d) {
            s === void 0 && (s = !0), a === void 0 && (a = !0), f === void 0 && (f = !0), d === void 0 && (d = -dr);
            for(var h = [], g = this._first; g;)g._start >= d && (g instanceof Pt ? a && h.push(g) : (f && h.push(g), s && h.push.apply(h, g.getChildren(!0, a, f)))), g = g._next;
            return h;
        }, r.getById = function(s) {
            for(var a = this.getChildren(1, 1, 1), f = a.length; f--;)if (a[f].vars.id === s) return a[f];
        }, r.remove = function(s) {
            return jt(s) ? this.removeLabel(s) : ht(s) ? this.killTweensOf(s) : (s.parent === this && _u(this, s), s === this._recent && (this._recent = this._last), go(this));
        }, r.totalTime = function(s, a) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = at(Hn.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))), c.prototype.totalTime.call(this, s, a), this._forcing = 0, this) : this._tTime;
        }, r.addLabel = function(s, a) {
            return this.labels[s] = ar(this, a), this;
        }, r.removeLabel = function(s) {
            return delete this.labels[s], this;
        }, r.addPause = function(s, a, f) {
            var d = Pt.delayedCall(0, a || xl, f);
            return d.data = "isPause", this._hasPause = 1, jr(this, d, ar(this, s));
        }, r.removePause = function(s) {
            var a = this._first;
            for(s = ar(this, s); a;)a._start === s && a.data === "isPause" && Ii(a), a = a._next;
        }, r.killTweensOf = function(s, a, f) {
            for(var d = this.getTweensOf(s, f), h = d.length; h--;)Li !== d[h] && d[h].kill(s, a);
            return this;
        }, r.getTweensOf = function(s, a) {
            for(var f = [], d = pr(s), h = this._first, g = si(a), m; h;)h instanceof Pt ? l_(h._targets, d) && (g ? (!Li || h._initted && h._ts) && h.globalTime(0) <= a && h.globalTime(h.totalDuration()) > a : !a || h.isActive()) && f.push(h) : (m = h.getTweensOf(d, a)).length && f.push.apply(f, m), h = h._next;
            return f;
        }, r.tweenTo = function(s, a) {
            a = a || {};
            var f = this, d = ar(f, s), h = a, g = h.startAt, m = h.onStart, w = h.onStartParams, k = h.immediateRender, _, x = Pt.to(f, Zn({
                ease: a.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: d,
                overwrite: "auto",
                duration: a.duration || Math.abs((d - (g && "time" in g ? g.time : f._time)) / f.timeScale()) || He,
                onStart: function() {
                    if (f.pause(), !_) {
                        var T = a.duration || Math.abs((d - (g && "time" in g ? g.time : f._time)) / f.timeScale());
                        x._dur !== T && hs(x, T, 0, 1).render(x._time, !0, !0), _ = 1;
                    }
                    m && m.apply(x, w || []);
                }
            }, a));
            return k ? x.render(0) : x;
        }, r.tweenFromTo = function(s, a, f) {
            return this.tweenTo(a, Zn({
                startAt: {
                    time: ar(this, s)
                }
            }, f));
        }, r.recent = function() {
            return this._recent;
        }, r.nextLabel = function(s) {
            return s === void 0 && (s = this._time), Yh(this, ar(this, s));
        }, r.previousLabel = function(s) {
            return s === void 0 && (s = this._time), Yh(this, ar(this, s), 1);
        }, r.currentLabel = function(s) {
            return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + He);
        }, r.shiftChildren = function(s, a, f) {
            f === void 0 && (f = 0);
            var d = this._first, h = this.labels, g;
            for(s = at(s); d;)d._start >= f && (d._start += s, d._end += s), d = d._next;
            if (a) for(g in h)h[g] >= f && (h[g] += s);
            return go(this);
        }, r.invalidate = function(s) {
            var a = this._first;
            for(this._lock = 0; a;)a.invalidate(s), a = a._next;
            return c.prototype.invalidate.call(this, s);
        }, r.clear = function(s) {
            s === void 0 && (s = !0);
            for(var a = this._first, f; a;)f = a._next, this.remove(a), a = f;
            return this._dp && (this._time = this._tTime = this._pTime = 0), s && (this.labels = {}), go(this);
        }, r.totalDuration = function(s) {
            var a = 0, f = this, d = f._last, h = dr, g, m, w;
            if (arguments.length) return f.timeScale((f._repeat < 0 ? f.duration() : f.totalDuration()) / (f.reversed() ? -s : s));
            if (f._dirty) {
                for(w = f.parent; d;)g = d._prev, d._dirty && d.totalDuration(), m = d._start, m > h && f._sort && d._ts && !f._lock ? (f._lock = 1, jr(f, d, m - d._delay, 1)._lock = 0) : h = m, m < 0 && d._ts && (a -= m, (!w && !f._dp || w && w.smoothChildTiming) && (f._start += at(m / f._ts), f._time -= m, f._tTime -= m), f.shiftChildren(-m, !1, -1 / 0), h = 0), d._end > a && d._ts && (a = d._end), d = g;
                hs(f, f === ut && f._time > a ? f._time : a, 1, 1), f._dirty = 0;
            }
            return f._tDur;
        }, n.updateRoot = function(s) {
            if (ut._ts && (Qg(ut, lu(s, ut)), Yg = Hn.frame), Hn.frame >= Xh) {
                Xh += Kn.autoSleep || 120;
                var a = ut._first;
                if ((!a || !a._ts) && Kn.autoSleep && Hn._listeners.length < 2) {
                    for(; a && !a._ts;)a = a._next;
                    a || Hn.sleep();
                }
            }
        }, n;
    })(Tl);
    Zn(mn.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var D_ = function(n, r, o, s, a, f, d) {
        var h = new Ln(this._pt, n, r, 0, 1, Pm, null, a), g = 0, m = 0, w, k, _, x, v, T, N, O;
        for(h.b = o, h.e = s, o += "", s += "", (N = ~s.indexOf("random(")) && (s = Cl(s)), f && (O = [
            o,
            s
        ], f(O, n, r), o = O[0], s = O[1]), k = o.match(tf) || []; w = tf.exec(s);)x = w[0], v = s.substring(g, w.index), _ ? _ = (_ + 1) % 5 : v.substr(-5) === "rgba(" && (_ = 1), x !== k[m++] && (T = parseFloat(k[m - 1]) || 0, h._pt = {
            _next: h._pt,
            p: v || m === 1 ? v : ",",
            s: T,
            c: x.charAt(1) === "=" ? is(T, x) - T : parseFloat(x) - T,
            m: _ && _ < 4 ? Math.round : 0
        }, g = tf.lastIndex);
        return h.c = g < s.length ? s.substring(g, s.length) : "", h.fp = d, (Xg.test(s) || N) && (h.e = 0), this._pt = h, h;
    }, rd = function(n, r, o, s, a, f, d, h, g, m) {
        ht(s) && (s = s(a || 0, n, f));
        var w = n[r], k = o !== "get" ? o : ht(w) ? g ? n[r.indexOf("set") || !ht(n["get" + r.substr(3)]) ? r : "get" + r.substr(3)](g) : n[r]() : w, _ = ht(w) ? g ? b_ : xm : od, x;
        if (jt(s) && (~s.indexOf("random(") && (s = Cl(s)), s.charAt(1) === "=" && (x = is(k, s) + (tn(k) || 0), (x || x === 0) && (s = x))), !m || k !== s || Mf) return !isNaN(k * s) && s !== "" ? (x = new Ln(this._pt, n, r, +k || 0, s - (k || 0), typeof w == "boolean" ? N_ : Cm, 0, _), g && (x.fp = g), d && x.modifier(d, this, n), this._pt = x) : (!w && !(r in n) && Zf(r, s), D_.call(this, n, r, k, s, _, h || Kn.stringFilter, g));
    }, L_ = function(n, r, o, s, a) {
        if (ht(n) && (n = fl(n, a, r, o, s)), !Vr(n) || n.style && n.nodeType || rn(n) || Wg(n)) return jt(n) ? fl(n, a, r, o, s) : n;
        var f = {}, d;
        for(d in n)f[d] = fl(n[d], a, r, o, s);
        return f;
    }, wm = function(n, r, o, s, a, f) {
        var d, h, g, m;
        if (Vn[n] && (d = new Vn[n]).init(a, d.rawVars ? r[n] : L_(r[n], s, a, f, o), o, s, f) !== !1 && (o._pt = h = new Ln(o._pt, a, n, 0, 1, d.render, d, 0, d.priority), o !== ns)) for(g = o._ptLookup[o._targets.indexOf(a)], m = d._props.length; m--;)g[d._props[m]] = h;
        return d;
    }, Li, Mf, id = function c(n, r, o) {
        var s = n.vars, a = s.ease, f = s.startAt, d = s.immediateRender, h = s.lazy, g = s.onUpdate, m = s.runBackwards, w = s.yoyoEase, k = s.keyframes, _ = s.autoRevert, x = n._dur, v = n._startAt, T = n._targets, N = n.parent, O = N && N.data === "nested" ? N.vars.targets : T, I = n._overwrite === "auto" && !$f, D = n.timeline, F, j, b, q, G, X, ce, K, fe, ae, we, le, J;
        if (D && (!k || !a) && (a = "none"), n._ease = mo(a, fs.ease), n._yEase = w ? mm(mo(w === !0 ? a : w, fs.ease)) : 0, w && n._yoyo && !n._repeat && (w = n._yEase, n._yEase = n._ease, n._ease = w), n._from = !D && !!s.runBackwards, !D || k && !s.stagger) {
            if (K = T[0] ? ho(T[0]).harness : 0, le = K && s[K.prop], F = su(s, Jf), v && (v._zTime < 0 && v.progress(1), r < 0 && m && d && !_ ? v.render(-1, !0) : v.revert(m && x ? Ya : o_), v._lazy = 0), f) {
                if (Ii(n._startAt = Pt.set(T, Zn({
                    data: "isStart",
                    overwrite: !1,
                    parent: N,
                    immediateRender: !0,
                    lazy: !v && Rn(h),
                    startAt: null,
                    delay: 0,
                    onUpdate: g && function() {
                        return $n(n, "onUpdate");
                    },
                    stagger: 0
                }, f))), n._startAt._dp = 0, n._startAt._sat = n, r < 0 && (Xt || !d && !_) && n._startAt.revert(Ya), d && x && r <= 0 && o <= 0) {
                    r && (n._zTime = r);
                    return;
                }
            } else if (m && x && !v) {
                if (r && (d = !1), b = Zn({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: d && !v && Rn(h),
                    immediateRender: d,
                    stagger: 0,
                    parent: N
                }, F), le && (b[K.prop] = le), Ii(n._startAt = Pt.set(T, b)), n._startAt._dp = 0, n._startAt._sat = n, r < 0 && (Xt ? n._startAt.revert(Ya) : n._startAt.render(-1, !0)), n._zTime = r, !d) c(n._startAt, He, He);
                else if (!r) return;
            }
            for(n._pt = n._ptCache = 0, h = x && Rn(h) || h && !x, j = 0; j < T.length; j++){
                if (G = T[j], ce = G._gsap || td(T)[j]._gsap, n._ptLookup[j] = ae = {}, Tf[ce.id] && Bi.length && ou(), we = O === T ? j : O.indexOf(G), K && (fe = new K).init(G, le || F, n, we, O) !== !1 && (n._pt = q = new Ln(n._pt, G, fe.name, 0, 1, fe.render, fe, 0, fe.priority), fe._props.forEach(function(W) {
                    ae[W] = q;
                }), fe.priority && (X = 1)), !K || le) for(b in F)Vn[b] && (fe = wm(b, F, n, we, G, O)) ? fe.priority && (X = 1) : ae[b] = q = rd.call(n, G, b, "get", F[b], we, O, 0, s.stringFilter);
                n._op && n._op[j] && n.kill(G, n._op[j]), I && n._pt && (Li = n, ut.killTweensOf(G, ae, n.globalTime(r)), J = !n.parent, Li = 0), n._pt && h && (Tf[ce.id] = 1);
            }
            X && Tm(n), n._onInit && n._onInit(n);
        }
        n._onUpdate = g, n._initted = (!n._op || n._pt) && !J, k && r <= 0 && D.render(dr, !0, !0);
    }, M_ = function(n, r, o, s, a, f, d, h) {
        var g = (n._pt && n._ptCache || (n._ptCache = {}))[r], m, w, k, _;
        if (!g) for(g = n._ptCache[r] = [], k = n._ptLookup, _ = n._targets.length; _--;){
            if (m = k[_][r], m && m.d && m.d._pt) for(m = m.d._pt; m && m.p !== r && m.fp !== r;)m = m._next;
            if (!m) return Mf = 1, n.vars[r] = "+=0", id(n, d), Mf = 0, h ? Sl(r + " not eligible for reset") : 1;
            g.push(m);
        }
        for(_ = g.length; _--;)w = g[_], m = w._pt || w, m.s = (s || s === 0) && !a ? s : m.s + (s || 0) + f * m.c, m.c = o - m.s, w.e && (w.e = _t(o) + tn(w.e)), w.b && (w.b = m.s + tn(w.b));
    }, A_ = function(n, r) {
        var o = n[0] ? ho(n[0]).harness : 0, s = o && o.aliases, a, f, d, h;
        if (!s) return r;
        a = ds({}, r);
        for(f in s)if (f in a) for(h = s[f].split(","), d = h.length; d--;)a[h[d]] = a[f];
        return a;
    }, O_ = function(n, r, o, s) {
        var a = r.ease || s || "power1.inOut", f, d;
        if (rn(r)) d = o[n] || (o[n] = []), r.forEach(function(h, g) {
            return d.push({
                t: g / (r.length - 1) * 100,
                v: h,
                e: a
            });
        });
        else for(f in r)d = o[f] || (o[f] = []), f === "ease" || d.push({
            t: parseFloat(n),
            v: r[f],
            e: a
        });
    }, fl = function(n, r, o, s, a) {
        return ht(n) ? n.call(r, o, s, a) : jt(n) && ~n.indexOf("random(") ? Cl(n) : n;
    }, km = ed + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Sm = {};
    Dn(km + ",id,stagger,delay,duration,paused,scrollTrigger", function(c) {
        return Sm[c] = 1;
    });
    var Pt = (function(c) {
        Ug(n, c);
        function n(o, s, a, f) {
            var d;
            typeof s == "number" && (a.duration = s, s = a, a = null), d = c.call(this, f ? s : ul(s)) || this;
            var h = d.vars, g = h.duration, m = h.delay, w = h.immediateRender, k = h.stagger, _ = h.overwrite, x = h.keyframes, v = h.defaults, T = h.scrollTrigger, N = h.yoyoEase, O = s.parent || ut, I = (rn(o) || Wg(o) ? si(o[0]) : "length" in s) ? [
                o
            ] : pr(o), D, F, j, b, q, G, X, ce;
            if (d._targets = I.length ? td(I) : Sl("GSAP target " + o + " not found. https://gsap.com", !Kn.nullTargetWarn) || [], d._ptLookup = [], d._overwrite = _, x || k || ba(g) || ba(m)) {
                if (s = d.vars, D = d.timeline = new mn({
                    data: "nested",
                    defaults: v || {},
                    targets: O && O.data === "nested" ? O.vars.targets : I
                }), D.kill(), D.parent = D._dp = ti(d), D._start = 0, k || ba(g) || ba(m)) {
                    if (b = I.length, X = k && sm(k), Vr(k)) for(q in k)~km.indexOf(q) && (ce || (ce = {}), ce[q] = k[q]);
                    for(F = 0; F < b; F++)j = su(s, Sm), j.stagger = 0, N && (j.yoyoEase = N), ce && ds(j, ce), G = I[F], j.duration = +fl(g, ti(d), F, G, I), j.delay = (+fl(m, ti(d), F, G, I) || 0) - d._delay, !k && b === 1 && j.delay && (d._delay = m = j.delay, d._start += m, j.delay = 0), D.to(G, j, X ? X(F, G, I) : 0), D._ease = Fe.none;
                    D.duration() ? g = m = 0 : d.timeline = 0;
                } else if (x) {
                    ul(Zn(D.vars.defaults, {
                        ease: "none"
                    })), D._ease = mo(x.ease || s.ease || "none");
                    var K = 0, fe, ae, we;
                    if (rn(x)) x.forEach(function(le) {
                        return D.to(I, le, ">");
                    }), D.duration();
                    else {
                        j = {};
                        for(q in x)q === "ease" || q === "easeEach" || O_(q, x[q], j, x.easeEach);
                        for(q in j)for(fe = j[q].sort(function(le, J) {
                            return le.t - J.t;
                        }), K = 0, F = 0; F < fe.length; F++)ae = fe[F], we = {
                            ease: ae.e,
                            duration: (ae.t - (F ? fe[F - 1].t : 0)) / 100 * g
                        }, we[q] = ae.v, D.to(I, we, K), K += we.duration;
                        D.duration() < g && D.to({}, {
                            duration: g - D.duration()
                        });
                    }
                }
                g || d.duration(g = D.duration());
            } else d.timeline = 0;
            return _ === !0 && !$f && (Li = ti(d), ut.killTweensOf(I), Li = 0), jr(O, ti(d), a), s.reversed && d.reverse(), s.paused && d.paused(!0), (w || !g && !x && d._start === at(O._time) && Rn(w) && f_(ti(d)) && O.data !== "nested") && (d._tTime = -He, d.render(Math.max(0, -m) || 0)), T && nm(ti(d), T), d;
        }
        var r = n.prototype;
        return r.render = function(s, a, f) {
            var d = this._time, h = this._tDur, g = this._dur, m = s < 0, w = s > h - He && !m ? h : s < He ? 0 : s, k, _, x, v, T, N, O, I, D;
            if (!g) p_(this, s, a, f);
            else if (w !== this._tTime || !s || f || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m || this._lazy) {
                if (k = w, I = this.timeline, this._repeat) {
                    if (v = g + this._rDelay, this._repeat < -1 && m) return this.totalTime(v * 100 + s, a, f);
                    if (k = at(w % v), w === h ? (x = this._repeat, k = g) : (T = at(w / v), x = ~~T, x && x === T ? (k = g, x--) : k > g && (k = g)), N = this._yoyo && x & 1, N && (D = this._yEase, k = g - k), T = ps(this._tTime, v), k === d && !f && this._initted && x === T) return this._tTime = w, this;
                    x !== T && (I && this._yEase && ym(I, N), this.vars.repeatRefresh && !N && !this._lock && k !== v && this._initted && (this._lock = f = 1, this.render(at(v * x), !0).invalidate()._lock = 0));
                }
                if (!this._initted) {
                    if (rm(this, m ? s : k, f, a, w)) return this._tTime = 0, this;
                    if (d !== this._time && !(f && this.vars.repeatRefresh && x !== T)) return this;
                    if (g !== this._dur) return this.render(s, a, f);
                }
                if (this._tTime = w, this._time = k, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = O = (D || this._ease)(k / g), this._from && (this.ratio = O = 1 - O), !d && w && !a && !T && ($n(this, "onStart"), this._tTime !== w)) return this;
                for(_ = this._pt; _;)_.r(O, _.d), _ = _._next;
                I && I.render(s < 0 ? s : I._dur * I._ease(k / this._dur), a, f) || this._startAt && (this._zTime = s), this._onUpdate && !a && (m && Ef(this, s, a, f), $n(this, "onUpdate")), this._repeat && x !== T && this.vars.onRepeat && !a && this.parent && $n(this, "onRepeat"), (w === this._tDur || !w) && this._tTime === w && (m && !this._onUpdate && Ef(this, s, !0, !0), (s || !g) && (w === this._tDur && this._ts > 0 || !w && this._ts < 0) && Ii(this, 1), !a && !(m && !d) && (w || d || N) && ($n(this, w === h ? "onComplete" : "onReverseComplete", !0), this._prom && !(w < h && this.timeScale() > 0) && this._prom()));
            }
            return this;
        }, r.targets = function() {
            return this._targets;
        }, r.invalidate = function(s) {
            return (!s || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(s), c.prototype.invalidate.call(this, s);
        }, r.resetTo = function(s, a, f, d, h) {
            Pl || Hn.wake(), this._ts || this.play();
            var g = Math.min(this._dur, (this._dp._time - this._start) * this._ts), m;
            return this._initted || id(this, g), m = this._ease(g / this._dur), M_(this, s, a, f, d, m, g, h) ? this.resetTo(s, a, f, d, 1) : (wu(this, 0), this.parent || em(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
        }, r.kill = function(s, a) {
            if (a === void 0 && (a = "all"), !s && (!a || a === "all")) return this._lazy = this._pt = 0, this.parent ? nl(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Xt), this;
            if (this.timeline) {
                var f = this.timeline.totalDuration();
                return this.timeline.killTweensOf(s, a, Li && Li.vars.overwrite !== !0)._first || nl(this), this.parent && f !== this.timeline.totalDuration() && hs(this, this._dur * this.timeline._tDur / f, 0, 1), this;
            }
            var d = this._targets, h = s ? pr(s) : d, g = this._ptLookup, m = this._pt, w, k, _, x, v, T, N;
            if ((!a || a === "all") && u_(d, h)) return a === "all" && (this._pt = 0), nl(this);
            for(w = this._op = this._op || [], a !== "all" && (jt(a) && (v = {}, Dn(a, function(O) {
                return v[O] = 1;
            }), a = v), a = A_(d, a)), N = d.length; N--;)if (~h.indexOf(d[N])) {
                k = g[N], a === "all" ? (w[N] = a, x = k, _ = {}) : (_ = w[N] = w[N] || {}, x = a);
                for(v in x)T = k && k[v], T && ((!("kill" in T.d) || T.d.kill(v) === !0) && _u(this, T, "_pt"), delete k[v]), _ !== "all" && (_[v] = 1);
            }
            return this._initted && !this._pt && m && nl(this), this;
        }, n.to = function(s, a) {
            return new n(s, a, arguments[2]);
        }, n.from = function(s, a) {
            return cl(1, arguments);
        }, n.delayedCall = function(s, a, f, d) {
            return new n(a, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: s,
                onComplete: a,
                onReverseComplete: a,
                onCompleteParams: f,
                onReverseCompleteParams: f,
                callbackScope: d
            });
        }, n.fromTo = function(s, a, f) {
            return cl(2, arguments);
        }, n.set = function(s, a) {
            return a.duration = 0, a.repeatDelay || (a.repeat = 0), new n(s, a);
        }, n.killTweensOf = function(s, a, f) {
            return ut.killTweensOf(s, a, f);
        }, n;
    })(Tl);
    Zn(Pt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    });
    Dn("staggerTo,staggerFrom,staggerFromTo", function(c) {
        Pt[c] = function() {
            var n = new mn, r = Rf.call(arguments, 0);
            return r.splice(c === "staggerFromTo" ? 5 : 4, 0, 0), n[c].apply(n, r);
        };
    });
    var od = function(n, r, o) {
        return n[r] = o;
    }, xm = function(n, r, o) {
        return n[r](o);
    }, b_ = function(n, r, o, s) {
        return n[r](s.fp, o);
    }, B_ = function(n, r, o) {
        return n.setAttribute(r, o);
    }, sd = function(n, r) {
        return ht(n[r]) ? xm : Yf(n[r]) && n.setAttribute ? B_ : od;
    }, Cm = function(n, r) {
        return r.set(r.t, r.p, Math.round((r.s + r.c * n) * 1e6) / 1e6, r);
    }, N_ = function(n, r) {
        return r.set(r.t, r.p, !!(r.s + r.c * n), r);
    }, Pm = function(n, r) {
        var o = r._pt, s = "";
        if (!n && r.b) s = r.b;
        else if (n === 1 && r.e) s = r.e;
        else {
            for(; o;)s = o.p + (o.m ? o.m(o.s + o.c * n) : Math.round((o.s + o.c * n) * 1e4) / 1e4) + s, o = o._next;
            s += r.c;
        }
        r.set(r.t, r.p, s, r);
    }, ld = function(n, r) {
        for(var o = r._pt; o;)o.r(n, o.d), o = o._next;
    }, F_ = function(n, r, o, s) {
        for(var a = this._pt, f; a;)f = a._next, a.p === s && a.modifier(n, r, o), a = f;
    }, I_ = function(n) {
        for(var r = this._pt, o, s; r;)s = r._next, r.p === n && !r.op || r.op === n ? _u(this, r, "_pt") : r.dep || (o = 1), r = s;
        return !o;
    }, j_ = function(n, r, o, s) {
        s.mSet(n, r, s.m.call(s.tween, o, s.mt), s);
    }, Tm = function(n) {
        for(var r = n._pt, o, s, a, f; r;){
            for(o = r._next, s = a; s && s.pr > r.pr;)s = s._next;
            (r._prev = s ? s._prev : f) ? r._prev._next = r : a = r, (r._next = s) ? s._prev = r : f = r, r = o;
        }
        n._pt = a;
    }, Ln = (function() {
        function c(r, o, s, a, f, d, h, g, m) {
            this.t = o, this.s = a, this.c = f, this.p = s, this.r = d || Cm, this.d = h || this, this.set = g || od, this.pr = m || 0, this._next = r, r && (r._prev = this);
        }
        var n = c.prototype;
        return n.modifier = function(o, s, a) {
            this.mSet = this.mSet || this.set, this.set = j_, this.m = o, this.mt = a, this.tween = s;
        }, c;
    })();
    Dn(ed + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(c) {
        return Jf[c] = 1;
    });
    Qn.TweenMax = Qn.TweenLite = Pt;
    Qn.TimelineLite = Qn.TimelineMax = mn;
    ut = new mn({
        sortChildren: !1,
        defaults: fs,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    });
    Kn.stringFilter = gm;
    var yo = [], Qa = {}, U_ = [], Qh = 0, G_ = 0, lf = function(n) {
        return (Qa[n] || U_).map(function(r) {
            return r();
        });
    }, Af = function() {
        var n = Date.now(), r = [];
        n - Qh > 2 && (lf("matchMediaInit"), yo.forEach(function(o) {
            var s = o.queries, a = o.conditions, f, d, h, g;
            for(d in s)f = Fr.matchMedia(s[d]).matches, f && (h = 1), f !== a[d] && (a[d] = f, g = 1);
            g && (o.revert(), h && r.push(o));
        }), lf("matchMediaRevert"), r.forEach(function(o) {
            return o.onMatch(o, function(s) {
                return o.add(null, s);
            });
        }), Qh = n, lf("matchMedia"));
    }, Em = (function() {
        function c(r, o) {
            this.selector = o && Df(o), this.data = [], this._r = [], this.isReverted = !1, this.id = G_++, r && this.add(r);
        }
        var n = c.prototype;
        return n.add = function(o, s, a) {
            ht(o) && (a = s, s = o, o = ht);
            var f = this, d = function() {
                var g = it, m = f.selector, w;
                return g && g !== f && g.data.push(f), a && (f.selector = Df(a)), it = f, w = s.apply(f, arguments), ht(w) && f._r.push(w), it = g, f.selector = m, f.isReverted = !1, w;
            };
            return f.last = d, o === ht ? d(f, function(h) {
                return f.add(null, h);
            }) : o ? f[o] = d : d;
        }, n.ignore = function(o) {
            var s = it;
            it = null, o(this), it = s;
        }, n.getTweens = function() {
            var o = [];
            return this.data.forEach(function(s) {
                return s instanceof c ? o.push.apply(o, s.getTweens()) : s instanceof Pt && !(s.parent && s.parent.data === "nested") && o.push(s);
            }), o;
        }, n.clear = function() {
            this._r.length = this.data.length = 0;
        }, n.kill = function(o, s) {
            var a = this;
            if (o ? (function() {
                for(var d = a.getTweens(), h = a.data.length, g; h--;)g = a.data[h], g.data === "isFlip" && (g.revert(), g.getChildren(!0, !0, !1).forEach(function(m) {
                    return d.splice(d.indexOf(m), 1);
                }));
                for(d.map(function(m) {
                    return {
                        g: m._dur || m._delay || m._sat && !m._sat.vars.immediateRender ? m.globalTime(0) : -1 / 0,
                        t: m
                    };
                }).sort(function(m, w) {
                    return w.g - m.g || -1 / 0;
                }).forEach(function(m) {
                    return m.t.revert(o);
                }), h = a.data.length; h--;)g = a.data[h], g instanceof mn ? g.data !== "nested" && (g.scrollTrigger && g.scrollTrigger.revert(), g.kill()) : !(g instanceof Pt) && g.revert && g.revert(o);
                a._r.forEach(function(m) {
                    return m(o, a);
                }), a.isReverted = !0;
            })() : this.data.forEach(function(d) {
                return d.kill && d.kill();
            }), this.clear(), s) for(var f = yo.length; f--;)yo[f].id === this.id && yo.splice(f, 1);
        }, n.revert = function(o) {
            this.kill(o || {});
        }, c;
    })(), W_ = (function() {
        function c(r) {
            this.contexts = [], this.scope = r, it && it.data.push(this);
        }
        var n = c.prototype;
        return n.add = function(o, s, a) {
            Vr(o) || (o = {
                matches: o
            });
            var f = new Em(0, a || this.scope), d = f.conditions = {}, h, g, m;
            it && !f.selector && (f.selector = it.selector), this.contexts.push(f), s = f.add("onMatch", s), f.queries = o;
            for(g in o)g === "all" ? m = 1 : (h = Fr.matchMedia(o[g]), h && (yo.indexOf(f) < 0 && yo.push(f), (d[g] = h.matches) && (m = 1), h.addListener ? h.addListener(Af) : h.addEventListener("change", Af)));
            return m && s(f, function(w) {
                return f.add(null, w);
            }), this;
        }, n.revert = function(o) {
            this.kill(o || {});
        }, n.kill = function(o) {
            this.contexts.forEach(function(s) {
                return s.kill(o, !0);
            });
        }, c;
    })(), au = {
        registerPlugin: function() {
            for(var n = arguments.length, r = new Array(n), o = 0; o < n; o++)r[o] = arguments[o];
            r.forEach(function(s) {
                return dm(s);
            });
        },
        timeline: function(n) {
            return new mn(n);
        },
        getTweensOf: function(n, r) {
            return ut.getTweensOf(n, r);
        },
        getProperty: function(n, r, o, s) {
            jt(n) && (n = pr(n)[0]);
            var a = ho(n || {}).get, f = o ? Jg : Zg;
            return o === "native" && (o = ""), n && (r ? f((Vn[r] && Vn[r].get || a)(n, r, o, s)) : function(d, h, g) {
                return f((Vn[d] && Vn[d].get || a)(n, d, h, g));
            });
        },
        quickSetter: function(n, r, o) {
            if (n = pr(n), n.length > 1) {
                var s = n.map(function(m) {
                    return An.quickSetter(m, r, o);
                }), a = s.length;
                return function(m) {
                    for(var w = a; w--;)s[w](m);
                };
            }
            n = n[0] || {};
            var f = Vn[r], d = ho(n), h = d.harness && (d.harness.aliases || {})[r] || r, g = f ? function(m) {
                var w = new f;
                ns._pt = 0, w.init(n, o ? m + o : m, ns, 0, [
                    n
                ]), w.render(1, w), ns._pt && ld(1, ns);
            } : d.set(n, h);
            return f ? g : function(m) {
                return g(n, h, o ? m + o : m, d, 1);
            };
        },
        quickTo: function(n, r, o) {
            var s, a = An.to(n, Zn((s = {}, s[r] = "+=0.1", s.paused = !0, s.stagger = 0, s), o || {})), f = function(h, g, m) {
                return a.resetTo(r, h, g, m);
            };
            return f.tween = a, f;
        },
        isTweening: function(n) {
            return ut.getTweensOf(n, !0).length > 0;
        },
        defaults: function(n) {
            return n && n.ease && (n.ease = mo(n.ease, fs.ease)), Hh(fs, n || {});
        },
        config: function(n) {
            return Hh(Kn, n || {});
        },
        registerEffect: function(n) {
            var r = n.name, o = n.effect, s = n.plugins, a = n.defaults, f = n.extendTimeline;
            (s || "").split(",").forEach(function(d) {
                return d && !Vn[d] && !Qn[d] && Sl(r + " effect requires " + d + " plugin.");
            }), nf[r] = function(d, h, g) {
                return o(pr(d), Zn(h || {}, a), g);
            }, f && (mn.prototype[r] = function(d, h, g) {
                return this.add(nf[r](d, Vr(h) ? h : (g = h) && {}, this), g);
            });
        },
        registerEase: function(n, r) {
            Fe[n] = mo(r);
        },
        parseEase: function(n, r) {
            return arguments.length ? mo(n, r) : Fe;
        },
        getById: function(n) {
            return ut.getById(n);
        },
        exportRoot: function(n, r) {
            n === void 0 && (n = {});
            var o = new mn(n), s, a;
            for(o.smoothChildTiming = Rn(n.smoothChildTiming), ut.remove(o), o._dp = 0, o._time = o._tTime = ut._time, s = ut._first; s;)a = s._next, (r || !(!s._dur && s instanceof Pt && s.vars.onComplete === s._targets[0])) && jr(o, s, s._start - s._delay), s = a;
            return jr(ut, o, 0), o;
        },
        context: function(n, r) {
            return n ? new Em(n, r) : it;
        },
        matchMedia: function(n) {
            return new W_(n);
        },
        matchMediaRefresh: function() {
            return yo.forEach(function(n) {
                var r = n.conditions, o, s;
                for(s in r)r[s] && (r[s] = !1, o = 1);
                o && n.revert();
            }) || Af();
        },
        addEventListener: function(n, r) {
            var o = Qa[n] || (Qa[n] = []);
            ~o.indexOf(r) || o.push(r);
        },
        removeEventListener: function(n, r) {
            var o = Qa[n], s = o && o.indexOf(r);
            s >= 0 && o.splice(s, 1);
        },
        utils: {
            wrap: k_,
            wrapYoyo: S_,
            distribute: sm,
            random: am,
            snap: lm,
            normalize: w_,
            getUnit: tn,
            clamp: m_,
            splitColor: pm,
            toArray: pr,
            selector: Df,
            mapRange: cm,
            pipe: __,
            unitize: v_,
            interpolate: x_,
            shuffle: om
        },
        install: qg,
        effects: nf,
        ticker: Hn,
        updateRoot: mn.updateRoot,
        plugins: Vn,
        globalTimeline: ut,
        core: {
            PropTween: Ln,
            globals: $g,
            Tween: Pt,
            Timeline: mn,
            Animation: Tl,
            getCache: ho,
            _removeLinkedListItem: _u,
            reverting: function() {
                return Xt;
            },
            context: function(n) {
                return n && it && (it.data.push(n), n._ctx = it), it;
            },
            suppressOverwrites: function(n) {
                return $f = n;
            }
        }
    };
    Dn("to,from,fromTo,delayedCall,set,killTweensOf", function(c) {
        return au[c] = Pt[c];
    });
    Hn.add(mn.updateRoot);
    ns = au.to({}, {
        duration: 0
    });
    var V_ = function(n, r) {
        for(var o = n._pt; o && o.p !== r && o.op !== r && o.fp !== r;)o = o._next;
        return o;
    }, X_ = function(n, r) {
        var o = n._targets, s, a, f;
        for(s in r)for(a = o.length; a--;)f = n._ptLookup[a][s], f && (f = f.d) && (f._pt && (f = V_(f, s)), f && f.modifier && f.modifier(r[s], n, o[a], s));
    }, af = function(n, r) {
        return {
            name: n,
            headless: 1,
            rawVars: 1,
            init: function(s, a, f) {
                f._onInit = function(d) {
                    var h, g;
                    if (jt(a) && (h = {}, Dn(a, function(m) {
                        return h[m] = 1;
                    }), a = h), r) {
                        h = {};
                        for(g in a)h[g] = r(a[g]);
                        a = h;
                    }
                    X_(d, a);
                };
            }
        };
    }, An = au.registerPlugin({
        name: "attr",
        init: function(n, r, o, s, a) {
            var f, d, h;
            this.tween = o;
            for(f in r)h = n.getAttribute(f) || "", d = this.add(n, "setAttribute", (h || 0) + "", r[f], s, a, 0, 0, f), d.op = f, d.b = h, this._props.push(f);
        },
        render: function(n, r) {
            for(var o = r._pt; o;)Xt ? o.set(o.t, o.p, o.b, o) : o.r(n, o.d), o = o._next;
        }
    }, {
        name: "endArray",
        headless: 1,
        init: function(n, r) {
            for(var o = r.length; o--;)this.add(n, o, n[o] || 0, r[o], 0, 0, 0, 0, 0, 1);
        }
    }, af("roundProps", Lf), af("modifiers"), af("snap", lm)) || au;
    Pt.version = mn.version = An.version = "3.14.2";
    Hg = 1;
    Kf() && gs();
    Fe.Power0;
    Fe.Power1;
    Fe.Power2;
    Fe.Power3;
    Fe.Power4;
    Fe.Linear;
    Fe.Quad;
    Fe.Cubic;
    Fe.Quart;
    Fe.Quint;
    Fe.Strong;
    Fe.Elastic;
    Fe.Back;
    Fe.SteppedEase;
    Fe.Bounce;
    Fe.Sine;
    Fe.Expo;
    Fe.Circ;
    var Zh, Mi, os, ad, fo, Jh, ud, H_ = function() {
        return typeof window < "u";
    }, li = {}, ao = 180 / Math.PI, ss = Math.PI / 180, Ko = Math.atan2, eg = 1e8, cd = /([A-Z])/g, q_ = /(left|right|width|margin|padding|x)/i, $_ = /[\s,\(]\S/, Ur = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, Of = function(n, r) {
        return r.set(r.t, r.p, Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u, r);
    }, Y_ = function(n, r) {
        return r.set(r.t, r.p, n === 1 ? r.e : Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u, r);
    }, K_ = function(n, r) {
        return r.set(r.t, r.p, n ? Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u : r.b, r);
    }, Q_ = function(n, r) {
        return r.set(r.t, r.p, n === 1 ? r.e : n ? Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u : r.b, r);
    }, Z_ = function(n, r) {
        var o = r.s + r.c * n;
        r.set(r.t, r.p, ~~(o + (o < 0 ? -.5 : .5)) + r.u, r);
    }, zm = function(n, r) {
        return r.set(r.t, r.p, n ? r.e : r.b, r);
    }, Rm = function(n, r) {
        return r.set(r.t, r.p, n !== 1 ? r.b : r.e, r);
    }, J_ = function(n, r, o) {
        return n.style[r] = o;
    }, ev = function(n, r, o) {
        return n.style.setProperty(r, o);
    }, tv = function(n, r, o) {
        return n._gsap[r] = o;
    }, nv = function(n, r, o) {
        return n._gsap.scaleX = n._gsap.scaleY = o;
    }, rv = function(n, r, o, s, a) {
        var f = n._gsap;
        f.scaleX = f.scaleY = o, f.renderTransform(a, f);
    }, iv = function(n, r, o, s, a) {
        var f = n._gsap;
        f[r] = o, f.renderTransform(a, f);
    }, ct = "transform", Mn = ct + "Origin", ov = function c(n, r) {
        var o = this, s = this.target, a = s.style, f = s._gsap;
        if (n in li && a) {
            if (this.tfm = this.tfm || {}, n !== "transform") n = Ur[n] || n, ~n.indexOf(",") ? n.split(",").forEach(function(d) {
                return o.tfm[d] = ni(s, d);
            }) : this.tfm[n] = f.x ? f[n] : ni(s, n), n === Mn && (this.tfm.zOrigin = f.zOrigin);
            else return Ur.transform.split(",").forEach(function(d) {
                return c.call(o, d, r);
            });
            if (this.props.indexOf(ct) >= 0) return;
            f.svg && (this.svgo = s.getAttribute("data-svg-origin"), this.props.push(Mn, r, "")), n = ct;
        }
        (a || r) && this.props.push(n, r, a[n]);
    }, Dm = function(n) {
        n.translate && (n.removeProperty("translate"), n.removeProperty("scale"), n.removeProperty("rotate"));
    }, sv = function() {
        var n = this.props, r = this.target, o = r.style, s = r._gsap, a, f;
        for(a = 0; a < n.length; a += 3)n[a + 1] ? n[a + 1] === 2 ? r[n[a]](n[a + 2]) : r[n[a]] = n[a + 2] : n[a + 2] ? o[n[a]] = n[a + 2] : o.removeProperty(n[a].substr(0, 2) === "--" ? n[a] : n[a].replace(cd, "-$1").toLowerCase());
        if (this.tfm) {
            for(f in this.tfm)s[f] = this.tfm[f];
            s.svg && (s.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), a = ud(), (!a || !a.isStart) && !o[ct] && (Dm(o), s.zOrigin && o[Mn] && (o[Mn] += " " + s.zOrigin + "px", s.zOrigin = 0, s.renderTransform()), s.uncache = 1);
        }
    }, Lm = function(n, r) {
        var o = {
            target: n,
            props: [],
            revert: sv,
            save: ov
        };
        return n._gsap || An.core.getCache(n), r && n.style && n.nodeType && r.split(",").forEach(function(s) {
            return o.save(s);
        }), o;
    }, Mm, bf = function(n, r) {
        var o = Mi.createElementNS ? Mi.createElementNS((r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), n) : Mi.createElement(n);
        return o && o.style ? o : Mi.createElement(n);
    }, Yn = function c(n, r, o) {
        var s = getComputedStyle(n);
        return s[r] || s.getPropertyValue(r.replace(cd, "-$1").toLowerCase()) || s.getPropertyValue(r) || !o && c(n, ms(r) || r, 1) || "";
    }, tg = "O,Moz,ms,Ms,Webkit".split(","), ms = function(n, r, o) {
        var s = r || fo, a = s.style, f = 5;
        if (n in a && !o) return n;
        for(n = n.charAt(0).toUpperCase() + n.substr(1); f-- && !(tg[f] + n in a););
        return f < 0 ? null : (f === 3 ? "ms" : f >= 0 ? tg[f] : "") + n;
    }, Bf = function() {
        H_() && window.document && (Zh = window, Mi = Zh.document, os = Mi.documentElement, fo = bf("div") || {
            style: {}
        }, bf("div"), ct = ms(ct), Mn = ct + "Origin", fo.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Mm = !!ms("perspective"), ud = An.core.reverting, ad = 1);
    }, ng = function(n) {
        var r = n.ownerSVGElement, o = bf("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), s = n.cloneNode(!0), a;
        s.style.display = "block", o.appendChild(s), os.appendChild(o);
        try {
            a = s.getBBox();
        } catch  {}
        return o.removeChild(s), os.removeChild(o), a;
    }, rg = function(n, r) {
        for(var o = r.length; o--;)if (n.hasAttribute(r[o])) return n.getAttribute(r[o]);
    }, Am = function(n) {
        var r, o;
        try {
            r = n.getBBox();
        } catch  {
            r = ng(n), o = 1;
        }
        return r && (r.width || r.height) || o || (r = ng(n)), r && !r.width && !r.x && !r.y ? {
            x: +rg(n, [
                "x",
                "cx",
                "x1"
            ]) || 0,
            y: +rg(n, [
                "y",
                "cy",
                "y1"
            ]) || 0,
            width: 0,
            height: 0
        } : r;
    }, Om = function(n) {
        return !!(n.getCTM && (!n.parentNode || n.ownerSVGElement) && Am(n));
    }, ji = function(n, r) {
        if (r) {
            var o = n.style, s;
            r in li && r !== Mn && (r = ct), o.removeProperty ? (s = r.substr(0, 2), (s === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r), o.removeProperty(s === "--" ? r : r.replace(cd, "-$1").toLowerCase())) : o.removeAttribute(r);
        }
    }, Ai = function(n, r, o, s, a, f) {
        var d = new Ln(n._pt, r, o, 0, 1, f ? Rm : zm);
        return n._pt = d, d.b = s, d.e = a, n._props.push(o), d;
    }, ig = {
        deg: 1,
        rad: 1,
        turn: 1
    }, lv = {
        grid: 1,
        flex: 1
    }, Ui = function c(n, r, o, s) {
        var a = parseFloat(o) || 0, f = (o + "").trim().substr((a + "").length) || "px", d = fo.style, h = q_.test(r), g = n.tagName.toLowerCase() === "svg", m = (g ? "client" : "offset") + (h ? "Width" : "Height"), w = 100, k = s === "px", _ = s === "%", x, v, T, N;
        if (s === f || !a || ig[s] || ig[f]) return a;
        if (f !== "px" && !k && (a = c(n, r, o, "px")), N = n.getCTM && Om(n), (_ || f === "%") && (li[r] || ~r.indexOf("adius"))) return x = N ? n.getBBox()[h ? "width" : "height"] : n[m], _t(_ ? a / x * w : a / 100 * x);
        if (d[h ? "width" : "height"] = w + (k ? f : s), v = s !== "rem" && ~r.indexOf("adius") || s === "em" && n.appendChild && !g ? n : n.parentNode, N && (v = (n.ownerSVGElement || {}).parentNode), (!v || v === Mi || !v.appendChild) && (v = Mi.body), T = v._gsap, T && _ && T.width && h && T.time === Hn.time && !T.uncache) return _t(a / T.width * w);
        if (_ && (r === "height" || r === "width")) {
            var O = n.style[r];
            n.style[r] = w + s, x = n[m], O ? n.style[r] = O : ji(n, r);
        } else (_ || f === "%") && !lv[Yn(v, "display")] && (d.position = Yn(n, "position")), v === n && (d.position = "static"), v.appendChild(fo), x = fo[m], v.removeChild(fo), d.position = "absolute";
        return h && _ && (T = ho(v), T.time = Hn.time, T.width = v[m]), _t(k ? x * a / w : x && a ? w / x * a : 0);
    }, ni = function(n, r, o, s) {
        var a;
        return ad || Bf(), r in Ur && r !== "transform" && (r = Ur[r], ~r.indexOf(",") && (r = r.split(",")[0])), li[r] && r !== "transform" ? (a = zl(n, s), a = r !== "transformOrigin" ? a[r] : a.svg ? a.origin : cu(Yn(n, Mn)) + " " + a.zOrigin + "px") : (a = n.style[r], (!a || a === "auto" || s || ~(a + "").indexOf("calc(")) && (a = uu[r] && uu[r](n, r, o) || Yn(n, r) || Kg(n, r) || (r === "opacity" ? 1 : 0))), o && !~(a + "").trim().indexOf(" ") ? Ui(n, r, a, o) + o : a;
    }, av = function(n, r, o, s) {
        if (!o || o === "none") {
            var a = ms(r, n, 1), f = a && Yn(n, a, 1);
            f && f !== o ? (r = a, o = f) : r === "borderColor" && (o = Yn(n, "borderTopColor"));
        }
        var d = new Ln(this._pt, n.style, r, 0, 1, Pm), h = 0, g = 0, m, w, k, _, x, v, T, N, O, I, D, F;
        if (d.b = o, d.e = s, o += "", s += "", s.substring(0, 6) === "var(--" && (s = Yn(n, s.substring(4, s.indexOf(")")))), s === "auto" && (v = n.style[r], n.style[r] = s, s = Yn(n, r) || s, v ? n.style[r] = v : ji(n, r)), m = [
            o,
            s
        ], gm(m), o = m[0], s = m[1], k = o.match(ts) || [], F = s.match(ts) || [], F.length) {
            for(; w = ts.exec(s);)T = w[0], O = s.substring(h, w.index), x ? x = (x + 1) % 5 : (O.substr(-5) === "rgba(" || O.substr(-5) === "hsla(") && (x = 1), T !== (v = k[g++] || "") && (_ = parseFloat(v) || 0, D = v.substr((_ + "").length), T.charAt(1) === "=" && (T = is(_, T) + D), N = parseFloat(T), I = T.substr((N + "").length), h = ts.lastIndex - I.length, I || (I = I || Kn.units[r] || D, h === s.length && (s += I, d.e += I)), D !== I && (_ = Ui(n, r, v, I) || 0), d._pt = {
                _next: d._pt,
                p: O || g === 1 ? O : ",",
                s: _,
                c: N - _,
                m: x && x < 4 || r === "zIndex" ? Math.round : 0
            });
            d.c = h < s.length ? s.substring(h, s.length) : "";
        } else d.r = r === "display" && s === "none" ? Rm : zm;
        return Xg.test(s) && (d.e = 0), this._pt = d, d;
    }, og = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, uv = function(n) {
        var r = n.split(" "), o = r[0], s = r[1] || "50%";
        return (o === "top" || o === "bottom" || s === "left" || s === "right") && (n = o, o = s, s = n), r[0] = og[o] || o, r[1] = og[s] || s, r.join(" ");
    }, cv = function(n, r) {
        if (r.tween && r.tween._time === r.tween._dur) {
            var o = r.t, s = o.style, a = r.u, f = o._gsap, d, h, g;
            if (a === "all" || a === !0) s.cssText = "", h = 1;
            else for(a = a.split(","), g = a.length; --g > -1;)d = a[g], li[d] && (h = 1, d = d === "transformOrigin" ? Mn : ct), ji(o, d);
            h && (ji(o, ct), f && (f.svg && o.removeAttribute("transform"), s.scale = s.rotate = s.translate = "none", zl(o, 1), f.uncache = 1, Dm(s)));
        }
    }, uu = {
        clearProps: function(n, r, o, s, a) {
            if (a.data !== "isFromStart") {
                var f = n._pt = new Ln(n._pt, r, o, 0, 0, cv);
                return f.u = s, f.pr = -10, f.tween = a, n._props.push(o), 1;
            }
        }
    }, El = [
        1,
        0,
        0,
        1,
        0,
        0
    ], bm = {}, Bm = function(n) {
        return n === "matrix(1, 0, 0, 1, 0, 0)" || n === "none" || !n;
    }, sg = function(n) {
        var r = Yn(n, ct);
        return Bm(r) ? El : r.substr(7).match(Vg).map(_t);
    }, fd = function(n, r) {
        var o = n._gsap || ho(n), s = n.style, a = sg(n), f, d, h, g;
        return o.svg && n.getAttribute("transform") ? (h = n.transform.baseVal.consolidate().matrix, a = [
            h.a,
            h.b,
            h.c,
            h.d,
            h.e,
            h.f
        ], a.join(",") === "1,0,0,1,0,0" ? El : a) : (a === El && !n.offsetParent && n !== os && !o.svg && (h = s.display, s.display = "block", f = n.parentNode, (!f || !n.offsetParent && !n.getBoundingClientRect().width) && (g = 1, d = n.nextElementSibling, os.appendChild(n)), a = sg(n), h ? s.display = h : ji(n, "display"), g && (d ? f.insertBefore(n, d) : f ? f.appendChild(n) : os.removeChild(n))), r && a.length > 6 ? [
            a[0],
            a[1],
            a[4],
            a[5],
            a[12],
            a[13]
        ] : a);
    }, Nf = function(n, r, o, s, a, f) {
        var d = n._gsap, h = a || fd(n, !0), g = d.xOrigin || 0, m = d.yOrigin || 0, w = d.xOffset || 0, k = d.yOffset || 0, _ = h[0], x = h[1], v = h[2], T = h[3], N = h[4], O = h[5], I = r.split(" "), D = parseFloat(I[0]) || 0, F = parseFloat(I[1]) || 0, j, b, q, G;
        o ? h !== El && (b = _ * T - x * v) && (q = D * (T / b) + F * (-v / b) + (v * O - T * N) / b, G = D * (-x / b) + F * (_ / b) - (_ * O - x * N) / b, D = q, F = G) : (j = Am(n), D = j.x + (~I[0].indexOf("%") ? D / 100 * j.width : D), F = j.y + (~(I[1] || I[0]).indexOf("%") ? F / 100 * j.height : F)), s || s !== !1 && d.smooth ? (N = D - g, O = F - m, d.xOffset = w + (N * _ + O * v) - N, d.yOffset = k + (N * x + O * T) - O) : d.xOffset = d.yOffset = 0, d.xOrigin = D, d.yOrigin = F, d.smooth = !!s, d.origin = r, d.originIsAbsolute = !!o, n.style[Mn] = "0px 0px", f && (Ai(f, d, "xOrigin", g, D), Ai(f, d, "yOrigin", m, F), Ai(f, d, "xOffset", w, d.xOffset), Ai(f, d, "yOffset", k, d.yOffset)), n.setAttribute("data-svg-origin", D + " " + F);
    }, zl = function(n, r) {
        var o = n._gsap || new vm(n);
        if ("x" in o && !r && !o.uncache) return o;
        var s = n.style, a = o.scaleX < 0, f = "px", d = "deg", h = getComputedStyle(n), g = Yn(n, Mn) || "0", m, w, k, _, x, v, T, N, O, I, D, F, j, b, q, G, X, ce, K, fe, ae, we, le, J, W, Q, C, E, U, de, ie, me;
        return m = w = k = v = T = N = O = I = D = 0, _ = x = 1, o.svg = !!(n.getCTM && Om(n)), h.translate && ((h.translate !== "none" || h.scale !== "none" || h.rotate !== "none") && (s[ct] = (h.translate !== "none" ? "translate3d(" + (h.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (h.rotate !== "none" ? "rotate(" + h.rotate + ") " : "") + (h.scale !== "none" ? "scale(" + h.scale.split(" ").join(",") + ") " : "") + (h[ct] !== "none" ? h[ct] : "")), s.scale = s.rotate = s.translate = "none"), b = fd(n, o.svg), o.svg && (o.uncache ? (W = n.getBBox(), g = o.xOrigin - W.x + "px " + (o.yOrigin - W.y) + "px", J = "") : J = !r && n.getAttribute("data-svg-origin"), Nf(n, J || g, !!J || o.originIsAbsolute, o.smooth !== !1, b)), F = o.xOrigin || 0, j = o.yOrigin || 0, b !== El && (ce = b[0], K = b[1], fe = b[2], ae = b[3], m = we = b[4], w = le = b[5], b.length === 6 ? (_ = Math.sqrt(ce * ce + K * K), x = Math.sqrt(ae * ae + fe * fe), v = ce || K ? Ko(K, ce) * ao : 0, O = fe || ae ? Ko(fe, ae) * ao + v : 0, O && (x *= Math.abs(Math.cos(O * ss))), o.svg && (m -= F - (F * ce + j * fe), w -= j - (F * K + j * ae))) : (me = b[6], de = b[7], C = b[8], E = b[9], U = b[10], ie = b[11], m = b[12], w = b[13], k = b[14], q = Ko(me, U), T = q * ao, q && (G = Math.cos(-q), X = Math.sin(-q), J = we * G + C * X, W = le * G + E * X, Q = me * G + U * X, C = we * -X + C * G, E = le * -X + E * G, U = me * -X + U * G, ie = de * -X + ie * G, we = J, le = W, me = Q), q = Ko(-fe, U), N = q * ao, q && (G = Math.cos(-q), X = Math.sin(-q), J = ce * G - C * X, W = K * G - E * X, Q = fe * G - U * X, ie = ae * X + ie * G, ce = J, K = W, fe = Q), q = Ko(K, ce), v = q * ao, q && (G = Math.cos(q), X = Math.sin(q), J = ce * G + K * X, W = we * G + le * X, K = K * G - ce * X, le = le * G - we * X, ce = J, we = W), T && Math.abs(T) + Math.abs(v) > 359.9 && (T = v = 0, N = 180 - N), _ = _t(Math.sqrt(ce * ce + K * K + fe * fe)), x = _t(Math.sqrt(le * le + me * me)), q = Ko(we, le), O = Math.abs(q) > 2e-4 ? q * ao : 0, D = ie ? 1 / (ie < 0 ? -ie : ie) : 0), o.svg && (J = n.getAttribute("transform"), o.forceCSS = n.setAttribute("transform", "") || !Bm(Yn(n, ct)), J && n.setAttribute("transform", J))), Math.abs(O) > 90 && Math.abs(O) < 270 && (a ? (_ *= -1, O += v <= 0 ? 180 : -180, v += v <= 0 ? 180 : -180) : (x *= -1, O += O <= 0 ? 180 : -180)), r = r || o.uncache, o.x = m - ((o.xPercent = m && (!r && o.xPercent || (Math.round(n.offsetWidth / 2) === Math.round(-m) ? -50 : 0))) ? n.offsetWidth * o.xPercent / 100 : 0) + f, o.y = w - ((o.yPercent = w && (!r && o.yPercent || (Math.round(n.offsetHeight / 2) === Math.round(-w) ? -50 : 0))) ? n.offsetHeight * o.yPercent / 100 : 0) + f, o.z = k + f, o.scaleX = _t(_), o.scaleY = _t(x), o.rotation = _t(v) + d, o.rotationX = _t(T) + d, o.rotationY = _t(N) + d, o.skewX = O + d, o.skewY = I + d, o.transformPerspective = D + f, (o.zOrigin = parseFloat(g.split(" ")[2]) || !r && o.zOrigin || 0) && (s[Mn] = cu(g)), o.xOffset = o.yOffset = 0, o.force3D = Kn.force3D, o.renderTransform = o.svg ? dv : Mm ? Nm : fv, o.uncache = 0, o;
    }, cu = function(n) {
        return (n = n.split(" "))[0] + " " + n[1];
    }, uf = function(n, r, o) {
        var s = tn(r);
        return _t(parseFloat(r) + parseFloat(Ui(n, "x", o + "px", s))) + s;
    }, fv = function(n, r) {
        r.z = "0px", r.rotationY = r.rotationX = "0deg", r.force3D = 0, Nm(n, r);
    }, so = "0deg", Qs = "0px", lo = ") ", Nm = function(n, r) {
        var o = r || this, s = o.xPercent, a = o.yPercent, f = o.x, d = o.y, h = o.z, g = o.rotation, m = o.rotationY, w = o.rotationX, k = o.skewX, _ = o.skewY, x = o.scaleX, v = o.scaleY, T = o.transformPerspective, N = o.force3D, O = o.target, I = o.zOrigin, D = "", F = N === "auto" && n && n !== 1 || N === !0;
        if (I && (w !== so || m !== so)) {
            var j = parseFloat(m) * ss, b = Math.sin(j), q = Math.cos(j), G;
            j = parseFloat(w) * ss, G = Math.cos(j), f = uf(O, f, b * G * -I), d = uf(O, d, -Math.sin(j) * -I), h = uf(O, h, q * G * -I + I);
        }
        T !== Qs && (D += "perspective(" + T + lo), (s || a) && (D += "translate(" + s + "%, " + a + "%) "), (F || f !== Qs || d !== Qs || h !== Qs) && (D += h !== Qs || F ? "translate3d(" + f + ", " + d + ", " + h + ") " : "translate(" + f + ", " + d + lo), g !== so && (D += "rotate(" + g + lo), m !== so && (D += "rotateY(" + m + lo), w !== so && (D += "rotateX(" + w + lo), (k !== so || _ !== so) && (D += "skew(" + k + ", " + _ + lo), (x !== 1 || v !== 1) && (D += "scale(" + x + ", " + v + lo), O.style[ct] = D || "translate(0, 0)";
    }, dv = function(n, r) {
        var o = r || this, s = o.xPercent, a = o.yPercent, f = o.x, d = o.y, h = o.rotation, g = o.skewX, m = o.skewY, w = o.scaleX, k = o.scaleY, _ = o.target, x = o.xOrigin, v = o.yOrigin, T = o.xOffset, N = o.yOffset, O = o.forceCSS, I = parseFloat(f), D = parseFloat(d), F, j, b, q, G;
        h = parseFloat(h), g = parseFloat(g), m = parseFloat(m), m && (m = parseFloat(m), g += m, h += m), h || g ? (h *= ss, g *= ss, F = Math.cos(h) * w, j = Math.sin(h) * w, b = Math.sin(h - g) * -k, q = Math.cos(h - g) * k, g && (m *= ss, G = Math.tan(g - m), G = Math.sqrt(1 + G * G), b *= G, q *= G, m && (G = Math.tan(m), G = Math.sqrt(1 + G * G), F *= G, j *= G)), F = _t(F), j = _t(j), b = _t(b), q = _t(q)) : (F = w, q = k, j = b = 0), (I && !~(f + "").indexOf("px") || D && !~(d + "").indexOf("px")) && (I = Ui(_, "x", f, "px"), D = Ui(_, "y", d, "px")), (x || v || T || N) && (I = _t(I + x - (x * F + v * b) + T), D = _t(D + v - (x * j + v * q) + N)), (s || a) && (G = _.getBBox(), I = _t(I + s / 100 * G.width), D = _t(D + a / 100 * G.height)), G = "matrix(" + F + "," + j + "," + b + "," + q + "," + I + "," + D + ")", _.setAttribute("transform", G), O && (_.style[ct] = G);
    }, pv = function(n, r, o, s, a) {
        var f = 360, d = jt(a), h = parseFloat(a) * (d && ~a.indexOf("rad") ? ao : 1), g = h - s, m = s + g + "deg", w, k;
        return d && (w = a.split("_")[1], w === "short" && (g %= f, g !== g % (f / 2) && (g += g < 0 ? f : -f)), w === "cw" && g < 0 ? g = (g + f * eg) % f - ~~(g / f) * f : w === "ccw" && g > 0 && (g = (g - f * eg) % f - ~~(g / f) * f)), n._pt = k = new Ln(n._pt, r, o, s, g, Y_), k.e = m, k.u = "deg", n._props.push(o), k;
    }, lg = function(n, r) {
        for(var o in r)n[o] = r[o];
        return n;
    }, hv = function(n, r, o) {
        var s = lg({}, o._gsap), a = "perspective,force3D,transformOrigin,svgOrigin", f = o.style, d, h, g, m, w, k, _, x;
        s.svg ? (g = o.getAttribute("transform"), o.setAttribute("transform", ""), f[ct] = r, d = zl(o, 1), ji(o, ct), o.setAttribute("transform", g)) : (g = getComputedStyle(o)[ct], f[ct] = r, d = zl(o, 1), f[ct] = g);
        for(h in li)g = s[h], m = d[h], g !== m && a.indexOf(h) < 0 && (_ = tn(g), x = tn(m), w = _ !== x ? Ui(o, h, g, x) : parseFloat(g), k = parseFloat(m), n._pt = new Ln(n._pt, d, h, w, k - w, Of), n._pt.u = x || 0, n._props.push(h));
        lg(d, s);
    };
    Dn("padding,margin,Width,Radius", function(c, n) {
        var r = "Top", o = "Right", s = "Bottom", a = "Left", f = (n < 3 ? [
            r,
            o,
            s,
            a
        ] : [
            r + a,
            r + o,
            s + o,
            s + a
        ]).map(function(d) {
            return n < 2 ? c + d : "border" + d + c;
        });
        uu[n > 1 ? "border" + c : c] = function(d, h, g, m, w) {
            var k, _;
            if (arguments.length < 4) return k = f.map(function(x) {
                return ni(d, x, g);
            }), _ = k.join(" "), _.split(k[0]).length === 5 ? k[0] : _;
            k = (m + "").split(" "), _ = {}, f.forEach(function(x, v) {
                return _[x] = k[v] = k[v] || k[(v - 1) / 2 | 0];
            }), d.init(h, _, w);
        };
    });
    var Fm = {
        name: "css",
        register: Bf,
        targetTest: function(n) {
            return n.style && n.nodeType;
        },
        init: function(n, r, o, s, a) {
            var f = this._props, d = n.style, h = o.vars.startAt, g, m, w, k, _, x, v, T, N, O, I, D, F, j, b, q, G;
            ad || Bf(), this.styles = this.styles || Lm(n), q = this.styles.props, this.tween = o;
            for(v in r)if (v !== "autoRound" && (m = r[v], !(Vn[v] && wm(v, r, o, s, n, a)))) {
                if (_ = typeof m, x = uu[v], _ === "function" && (m = m.call(o, s, n, a), _ = typeof m), _ === "string" && ~m.indexOf("random(") && (m = Cl(m)), x) x(this, n, v, m, o) && (b = 1);
                else if (v.substr(0, 2) === "--") g = (getComputedStyle(n).getPropertyValue(v) + "").trim(), m += "", Ni.lastIndex = 0, Ni.test(g) || (T = tn(g), N = tn(m), N ? T !== N && (g = Ui(n, v, g, N) + N) : T && (m += T)), this.add(d, "setProperty", g, m, s, a, 0, 0, v), f.push(v), q.push(v, 0, d[v]);
                else if (_ !== "undefined") {
                    if (h && v in h ? (g = typeof h[v] == "function" ? h[v].call(o, s, n, a) : h[v], jt(g) && ~g.indexOf("random(") && (g = Cl(g)), tn(g + "") || g === "auto" || (g += Kn.units[v] || tn(ni(n, v)) || ""), (g + "").charAt(1) === "=" && (g = ni(n, v))) : g = ni(n, v), k = parseFloat(g), O = _ === "string" && m.charAt(1) === "=" && m.substr(0, 2), O && (m = m.substr(2)), w = parseFloat(m), v in Ur && (v === "autoAlpha" && (k === 1 && ni(n, "visibility") === "hidden" && w && (k = 0), q.push("visibility", 0, d.visibility), Ai(this, d, "visibility", k ? "inherit" : "hidden", w ? "inherit" : "hidden", !w)), v !== "scale" && v !== "transform" && (v = Ur[v], ~v.indexOf(",") && (v = v.split(",")[0]))), I = v in li, I) {
                        if (this.styles.save(v), G = m, _ === "string" && m.substring(0, 6) === "var(--") {
                            if (m = Yn(n, m.substring(4, m.indexOf(")"))), m.substring(0, 5) === "calc(") {
                                var X = n.style.perspective;
                                n.style.perspective = m, m = Yn(n, "perspective"), X ? n.style.perspective = X : ji(n, "perspective");
                            }
                            w = parseFloat(m);
                        }
                        if (D || (F = n._gsap, F.renderTransform && !r.parseTransform || zl(n, r.parseTransform), j = r.smoothOrigin !== !1 && F.smooth, D = this._pt = new Ln(this._pt, d, ct, 0, 1, F.renderTransform, F, 0, -1), D.dep = 1), v === "scale") this._pt = new Ln(this._pt, F, "scaleY", F.scaleY, (O ? is(F.scaleY, O + w) : w) - F.scaleY || 0, Of), this._pt.u = 0, f.push("scaleY", v), v += "X";
                        else if (v === "transformOrigin") {
                            q.push(Mn, 0, d[Mn]), m = uv(m), F.svg ? Nf(n, m, 0, j, 0, this) : (N = parseFloat(m.split(" ")[2]) || 0, N !== F.zOrigin && Ai(this, F, "zOrigin", F.zOrigin, N), Ai(this, d, v, cu(g), cu(m)));
                            continue;
                        } else if (v === "svgOrigin") {
                            Nf(n, m, 1, j, 0, this);
                            continue;
                        } else if (v in bm) {
                            pv(this, F, v, k, O ? is(k, O + m) : m);
                            continue;
                        } else if (v === "smoothOrigin") {
                            Ai(this, F, "smooth", F.smooth, m);
                            continue;
                        } else if (v === "force3D") {
                            F[v] = m;
                            continue;
                        } else if (v === "transform") {
                            hv(this, m, n);
                            continue;
                        }
                    } else v in d || (v = ms(v) || v);
                    if (I || (w || w === 0) && (k || k === 0) && !$_.test(m) && v in d) T = (g + "").substr((k + "").length), w || (w = 0), N = tn(m) || (v in Kn.units ? Kn.units[v] : T), T !== N && (k = Ui(n, v, g, N)), this._pt = new Ln(this._pt, I ? F : d, v, k, (O ? is(k, O + w) : w) - k, !I && (N === "px" || v === "zIndex") && r.autoRound !== !1 ? Z_ : Of), this._pt.u = N || 0, I && G !== m ? (this._pt.b = g, this._pt.e = G, this._pt.r = Q_) : T !== N && N !== "%" && (this._pt.b = g, this._pt.r = K_);
                    else if (v in d) av.call(this, n, v, g, O ? O + m : m);
                    else if (v in n) this.add(n, v, g || n[v], O ? O + m : m, s, a);
                    else if (v !== "parseTransform") {
                        Zf(v, m);
                        continue;
                    }
                    I || (v in d ? q.push(v, 0, d[v]) : typeof n[v] == "function" ? q.push(v, 2, n[v]()) : q.push(v, 1, g || n[v])), f.push(v);
                }
            }
            b && Tm(this);
        },
        render: function(n, r) {
            if (r.tween._time || !ud()) for(var o = r._pt; o;)o.r(n, o.d), o = o._next;
            else r.styles.revert();
        },
        get: ni,
        aliases: Ur,
        getSetter: function(n, r, o) {
            var s = Ur[r];
            return s && s.indexOf(",") < 0 && (r = s), r in li && r !== Mn && (n._gsap.x || ni(n, "x")) ? o && Jh === o ? r === "scale" ? nv : tv : (Jh = o || {}) && (r === "scale" ? rv : iv) : n.style && !Yf(n.style[r]) ? J_ : ~r.indexOf("-") ? ev : sd(n, r);
        },
        core: {
            _removeProperty: ji,
            _getMatrix: fd
        }
    };
    An.utils.checkPrefix = ms;
    An.core.getStyleSaver = Lm;
    (function(c, n, r, o) {
        var s = Dn(c + "," + n + "," + r, function(a) {
            li[a] = 1;
        });
        Dn(n, function(a) {
            Kn.units[a] = "deg", bm[a] = 1;
        }), Ur[s[13]] = c + "," + n, Dn(o, function(a) {
            var f = a.split(":");
            Ur[f[1]] = s[f[0]];
        });
    })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
    Dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(c) {
        Kn.units[c] = "px";
    });
    An.registerPlugin(Fm);
    var Be = An.registerPlugin(Fm) || An;
    Be.core.Tween;
    function gv(c, n) {
        for(var r = 0; r < n.length; r++){
            var o = n[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(c, o.key, o);
        }
    }
    function mv(c, n, r) {
        return n && gv(c.prototype, n), c;
    }
    var Vt, Za, qn, Oi, bi, ls, Im, uo, dl, jm, ii, Er, Um, Gm = function() {
        return Vt || typeof window < "u" && (Vt = window.gsap) && Vt.registerPlugin && Vt;
    }, Wm = 1, rs = [], Ae = [], Wr = [], pl = Date.now, Ff = function(n, r) {
        return r;
    }, yv = function() {
        var n = dl.core, r = n.bridge || {}, o = n._scrollers, s = n._proxies;
        o.push.apply(o, Ae), s.push.apply(s, Wr), Ae = o, Wr = s, Ff = function(f, d) {
            return r[f](d);
        };
    }, Fi = function(n, r) {
        return ~Wr.indexOf(n) && Wr[Wr.indexOf(n) + 1][r];
    }, hl = function(n) {
        return !!~jm.indexOf(n);
    }, dn = function(n, r, o, s, a) {
        return n.addEventListener(r, o, {
            passive: s !== !1,
            capture: !!a
        });
    }, fn = function(n, r, o, s) {
        return n.removeEventListener(r, o, !!s);
    }, Ba = "scrollLeft", Na = "scrollTop", If = function() {
        return ii && ii.isPressed || Ae.cache++;
    }, fu = function(n, r) {
        var o = function s(a) {
            if (a || a === 0) {
                Wm && (qn.history.scrollRestoration = "manual");
                var f = ii && ii.isPressed;
                a = s.v = Math.round(a) || (ii && ii.iOS ? 1 : 0), n(a), s.cacheID = Ae.cache, f && Ff("ss", a);
            } else (r || Ae.cache !== s.cacheID || Ff("ref")) && (s.cacheID = Ae.cache, s.v = n());
            return s.v + s.offset;
        };
        return o.offset = 0, n && o;
    }, yn = {
        s: Ba,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: fu(function(c) {
            return arguments.length ? qn.scrollTo(c, Dt.sc()) : qn.pageXOffset || Oi[Ba] || bi[Ba] || ls[Ba] || 0;
        })
    }, Dt = {
        s: Na,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: yn,
        sc: fu(function(c) {
            return arguments.length ? qn.scrollTo(yn.sc(), c) : qn.pageYOffset || Oi[Na] || bi[Na] || ls[Na] || 0;
        })
    }, zn = function(n, r) {
        return (r && r._ctx && r._ctx.selector || Vt.utils.toArray)(n)[0] || (typeof n == "string" && Vt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", n) : null);
    }, _v = function(n, r) {
        for(var o = r.length; o--;)if (r[o] === n || r[o].contains(n)) return !0;
        return !1;
    }, Gi = function(n, r) {
        var o = r.s, s = r.sc;
        hl(n) && (n = Oi.scrollingElement || bi);
        var a = Ae.indexOf(n), f = s === Dt.sc ? 1 : 2;
        !~a && (a = Ae.push(n) - 1), Ae[a + f] || dn(n, "scroll", If);
        var d = Ae[a + f], h = d || (Ae[a + f] = fu(Fi(n, o), !0) || (hl(n) ? s : fu(function(g) {
            return arguments.length ? n[o] = g : n[o];
        })));
        return h.target = n, d || (h.smooth = Vt.getProperty(n, "scrollBehavior") === "smooth"), h;
    }, jf = function(n, r, o) {
        var s = n, a = n, f = pl(), d = f, h = r || 50, g = Math.max(500, h * 3), m = function(x, v) {
            var T = pl();
            v || T - f > h ? (a = s, s = x, d = f, f = T) : o ? s += x : s = a + (x - a) / (T - d) * (f - d);
        }, w = function() {
            a = s = o ? 0 : s, d = f = 0;
        }, k = function(x) {
            var v = d, T = a, N = pl();
            return (x || x === 0) && x !== s && m(x), f === d || N - d > g ? 0 : (s + (o ? T : -T)) / ((o ? N : f) - v) * 1e3;
        };
        return {
            update: m,
            reset: w,
            getVelocity: k
        };
    }, Zs = function(n, r) {
        return r && !n._gsapAllow && n.preventDefault(), n.changedTouches ? n.changedTouches[0] : n;
    }, ag = function(n) {
        var r = Math.max.apply(Math, n), o = Math.min.apply(Math, n);
        return Math.abs(r) >= Math.abs(o) ? r : o;
    }, Vm = function() {
        dl = Vt.core.globals().ScrollTrigger, dl && dl.core && yv();
    }, Xm = function(n) {
        return Vt = n || Gm(), !Za && Vt && typeof document < "u" && document.body && (qn = window, Oi = document, bi = Oi.documentElement, ls = Oi.body, jm = [
            qn,
            Oi,
            bi,
            ls
        ], Vt.utils.clamp, Um = Vt.core.context || function() {}, uo = "onpointerenter" in ls ? "pointer" : "mouse", Im = vt.isTouch = qn.matchMedia && qn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in qn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Er = vt.eventTypes = ("ontouchstart" in bi ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in bi ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return Wm = 0;
        }, 500), Vm(), Za = 1), Za;
    };
    yn.op = Dt;
    Ae.cache = 0;
    var vt = (function() {
        function c(r) {
            this.init(r);
        }
        var n = c.prototype;
        return n.init = function(o) {
            Za || Xm(Vt) || console.warn("Please gsap.registerPlugin(Observer)"), dl || Vm();
            var s = o.tolerance, a = o.dragMinimum, f = o.type, d = o.target, h = o.lineHeight, g = o.debounce, m = o.preventDefault, w = o.onStop, k = o.onStopDelay, _ = o.ignore, x = o.wheelSpeed, v = o.event, T = o.onDragStart, N = o.onDragEnd, O = o.onDrag, I = o.onPress, D = o.onRelease, F = o.onRight, j = o.onLeft, b = o.onUp, q = o.onDown, G = o.onChangeX, X = o.onChangeY, ce = o.onChange, K = o.onToggleX, fe = o.onToggleY, ae = o.onHover, we = o.onHoverEnd, le = o.onMove, J = o.ignoreCheck, W = o.isNormalizer, Q = o.onGestureStart, C = o.onGestureEnd, E = o.onWheel, U = o.onEnable, de = o.onDisable, ie = o.onClick, me = o.scrollSpeed, ye = o.capture, ke = o.allowClicks, Ce = o.lockAxis, Pe = o.onLockAxis;
            this.target = d = zn(d) || bi, this.vars = o, _ && (_ = Vt.utils.toArray(_)), s = s || 1e-9, a = a || 0, x = x || 1, me = me || 1, f = f || "wheel,touch,pointer", g = g !== !1, h || (h = parseFloat(qn.getComputedStyle(ls).lineHeight) || 22);
            var ft, wt, Lt, Re, Qe, Ut, Ht, B = this, qt = 0, On = 0, _n = o.passive || !m && o.passive !== !1, We = Gi(d, yn), bn = Gi(d, Dt), gr = We(), zr = bn(), gt = ~f.indexOf("touch") && !~f.indexOf("pointer") && Er[0] === "pointerdown", mr = hl(d), Ze = d.ownerDocument || Oi, $t = [
                0,
                0,
                0
            ], on = [
                0,
                0,
                0
            ], sn = 0, yr = function() {
                return sn = pl();
            }, dt = function(pe, Oe) {
                return (B.event = pe) && _ && _v(pe.target, _) || Oe && gt && pe.pointerType !== "touch" || J && J(pe, Oe);
            }, Xi = function() {
                B._vx.reset(), B._vy.reset(), wt.pause(), w && w(B);
            }, Jn = function() {
                var pe = B.deltaX = ag($t), Oe = B.deltaY = ag(on), Z = Math.abs(pe) >= s, _e = Math.abs(Oe) >= s;
                ce && (Z || _e) && ce(B, pe, Oe, $t, on), Z && (F && B.deltaX > 0 && F(B), j && B.deltaX < 0 && j(B), G && G(B), K && B.deltaX < 0 != qt < 0 && K(B), qt = B.deltaX, $t[0] = $t[1] = $t[2] = 0), _e && (q && B.deltaY > 0 && q(B), b && B.deltaY < 0 && b(B), X && X(B), fe && B.deltaY < 0 != On < 0 && fe(B), On = B.deltaY, on[0] = on[1] = on[2] = 0), (Re || Lt) && (le && le(B), Lt && (T && Lt === 1 && T(B), O && O(B), Lt = 0), Re = !1), Ut && !(Ut = !1) && Pe && Pe(B), Qe && (E(B), Qe = !1), ft = 0;
            }, ai = function(pe, Oe, Z) {
                $t[Z] += pe, on[Z] += Oe, B._vx.update(pe), B._vy.update(Oe), g ? ft || (ft = requestAnimationFrame(Jn)) : Jn();
            }, Rr = function(pe, Oe) {
                Ce && !Ht && (B.axis = Ht = Math.abs(pe) > Math.abs(Oe) ? "x" : "y", Ut = !0), Ht !== "y" && ($t[2] += pe, B._vx.update(pe, !0)), Ht !== "x" && (on[2] += Oe, B._vy.update(Oe, !0)), g ? ft || (ft = requestAnimationFrame(Jn)) : Jn();
            }, er = function(pe) {
                if (!dt(pe, 1)) {
                    pe = Zs(pe, m);
                    var Oe = pe.clientX, Z = pe.clientY, _e = Oe - B.x, ue = Z - B.y, ve = B.isDragging;
                    B.x = Oe, B.y = Z, (ve || (_e || ue) && (Math.abs(B.startX - Oe) >= a || Math.abs(B.startY - Z) >= a)) && (Lt || (Lt = ve ? 2 : 1), ve || (B.isDragging = !0), Rr(_e, ue));
                }
            }, _r = B.onPress = function(xe) {
                dt(xe, 1) || xe && xe.button || (B.axis = Ht = null, wt.pause(), B.isPressed = !0, xe = Zs(xe), qt = On = 0, B.startX = B.x = xe.clientX, B.startY = B.y = xe.clientY, B._vx.reset(), B._vy.reset(), dn(W ? d : Ze, Er[1], er, _n, !0), B.deltaX = B.deltaY = 0, I && I(B));
            }, Te = B.onRelease = function(xe) {
                if (!dt(xe, 1)) {
                    fn(W ? d : Ze, Er[1], er, !0);
                    var pe = !isNaN(B.y - B.startY), Oe = B.isDragging, Z = Oe && (Math.abs(B.x - B.startX) > 3 || Math.abs(B.y - B.startY) > 3), _e = Zs(xe);
                    !Z && pe && (B._vx.reset(), B._vy.reset(), m && ke && Vt.delayedCall(.08, function() {
                        if (pl() - sn > 300 && !xe.defaultPrevented) {
                            if (xe.target.click) xe.target.click();
                            else if (Ze.createEvent) {
                                var ue = Ze.createEvent("MouseEvents");
                                ue.initMouseEvent("click", !0, !0, qn, 1, _e.screenX, _e.screenY, _e.clientX, _e.clientY, !1, !1, !1, !1, 0, null), xe.target.dispatchEvent(ue);
                            }
                        }
                    })), B.isDragging = B.isGesturing = B.isPressed = !1, w && Oe && !W && wt.restart(!0), Lt && Jn(), N && Oe && N(B), D && D(B, Z);
                }
            }, vr = function(pe) {
                return pe.touches && pe.touches.length > 1 && (B.isGesturing = !0) && Q(pe, B.isDragging);
            }, Mt = function() {
                return (B.isGesturing = !1) || C(B);
            }, At = function(pe) {
                if (!dt(pe)) {
                    var Oe = We(), Z = bn();
                    ai((Oe - gr) * me, (Z - zr) * me, 1), gr = Oe, zr = Z, w && wt.restart(!0);
                }
            }, vn = function(pe) {
                if (!dt(pe)) {
                    pe = Zs(pe, m), E && (Qe = !0);
                    var Oe = (pe.deltaMode === 1 ? h : pe.deltaMode === 2 ? qn.innerHeight : 1) * x;
                    ai(pe.deltaX * Oe, pe.deltaY * Oe, 0), w && !W && wt.restart(!0);
                }
            }, Dr = function(pe) {
                if (!dt(pe)) {
                    var Oe = pe.clientX, Z = pe.clientY, _e = Oe - B.x, ue = Z - B.y;
                    B.x = Oe, B.y = Z, Re = !0, w && wt.restart(!0), (_e || ue) && Rr(_e, ue);
                }
            }, Xr = function(pe) {
                B.event = pe, ae(B);
            }, tr = function(pe) {
                B.event = pe, we(B);
            }, ui = function(pe) {
                return dt(pe) || Zs(pe, m) && ie(B);
            };
            wt = B._dc = Vt.delayedCall(k || .25, Xi).pause(), B.deltaX = B.deltaY = 0, B._vx = jf(0, 50, !0), B._vy = jf(0, 50, !0), B.scrollX = We, B.scrollY = bn, B.isDragging = B.isGesturing = B.isPressed = !1, Um(this), B.enable = function(xe) {
                return B.isEnabled || (dn(mr ? Ze : d, "scroll", If), f.indexOf("scroll") >= 0 && dn(mr ? Ze : d, "scroll", At, _n, ye), f.indexOf("wheel") >= 0 && dn(d, "wheel", vn, _n, ye), (f.indexOf("touch") >= 0 && Im || f.indexOf("pointer") >= 0) && (dn(d, Er[0], _r, _n, ye), dn(Ze, Er[2], Te), dn(Ze, Er[3], Te), ke && dn(d, "click", yr, !0, !0), ie && dn(d, "click", ui), Q && dn(Ze, "gesturestart", vr), C && dn(Ze, "gestureend", Mt), ae && dn(d, uo + "enter", Xr), we && dn(d, uo + "leave", tr), le && dn(d, uo + "move", Dr)), B.isEnabled = !0, B.isDragging = B.isGesturing = B.isPressed = Re = Lt = !1, B._vx.reset(), B._vy.reset(), gr = We(), zr = bn(), xe && xe.type && _r(xe), U && U(B)), B;
            }, B.disable = function() {
                B.isEnabled && (rs.filter(function(xe) {
                    return xe !== B && hl(xe.target);
                }).length || fn(mr ? Ze : d, "scroll", If), B.isPressed && (B._vx.reset(), B._vy.reset(), fn(W ? d : Ze, Er[1], er, !0)), fn(mr ? Ze : d, "scroll", At, ye), fn(d, "wheel", vn, ye), fn(d, Er[0], _r, ye), fn(Ze, Er[2], Te), fn(Ze, Er[3], Te), fn(d, "click", yr, !0), fn(d, "click", ui), fn(Ze, "gesturestart", vr), fn(Ze, "gestureend", Mt), fn(d, uo + "enter", Xr), fn(d, uo + "leave", tr), fn(d, uo + "move", Dr), B.isEnabled = B.isPressed = B.isDragging = !1, de && de(B));
            }, B.kill = B.revert = function() {
                B.disable();
                var xe = rs.indexOf(B);
                xe >= 0 && rs.splice(xe, 1), ii === B && (ii = 0);
            }, rs.push(B), W && hl(d) && (ii = B), B.enable(v);
        }, mv(c, [
            {
                key: "velocityX",
                get: function() {
                    return this._vx.getVelocity();
                }
            },
            {
                key: "velocityY",
                get: function() {
                    return this._vy.getVelocity();
                }
            }
        ]), c;
    })();
    vt.version = "3.14.2";
    vt.create = function(c) {
        return new vt(c);
    };
    vt.register = Xm;
    vt.getAll = function() {
        return rs.slice();
    };
    vt.getById = function(c) {
        return rs.filter(function(n) {
            return n.vars.id === c;
        })[0];
    };
    Gm() && Vt.registerPlugin(vt);
    var ne, Jo, Me, Ke, Xn, Ge, dd, du, Rl, gl, il, Fa, Jt, ku, Uf, hn, ug, cg, es, Hm, cf, qm, pn, Gf, $m, Ym, Ri, Wf, pd, as, hd, ml, Vf, ff, Ia = 1, en = Date.now, df = en(), hr = 0, ol = 0, fg = function(n, r, o) {
        var s = Wn(n) && (n.substr(0, 6) === "clamp(" || n.indexOf("max") > -1);
        return o["_" + r + "Clamp"] = s, s ? n.substr(6, n.length - 7) : n;
    }, dg = function(n, r) {
        return r && (!Wn(n) || n.substr(0, 6) !== "clamp(") ? "clamp(" + n + ")" : n;
    }, vv = function c() {
        return ol && requestAnimationFrame(c);
    }, pg = function() {
        return ku = 1;
    }, hg = function() {
        return ku = 0;
    }, Ir = function(n) {
        return n;
    }, sl = function(n) {
        return Math.round(n * 1e5) / 1e5 || 0;
    }, Km = function() {
        return typeof window < "u";
    }, Qm = function() {
        return ne || Km() && (ne = window.gsap) && ne.registerPlugin && ne;
    }, ko = function(n) {
        return !!~dd.indexOf(n);
    }, Zm = function(n) {
        return (n === "Height" ? hd : Me["inner" + n]) || Xn["client" + n] || Ge["client" + n];
    }, Jm = function(n) {
        return Fi(n, "getBoundingClientRect") || (ko(n) ? function() {
            return ru.width = Me.innerWidth, ru.height = hd, ru;
        } : function() {
            return ri(n);
        });
    }, wv = function(n, r, o) {
        var s = o.d, a = o.d2, f = o.a;
        return (f = Fi(n, "getBoundingClientRect")) ? function() {
            return f()[s];
        } : function() {
            return (r ? Zm(a) : n["client" + a]) || 0;
        };
    }, kv = function(n, r) {
        return !r || ~Wr.indexOf(n) ? Jm(n) : function() {
            return ru;
        };
    }, Gr = function(n, r) {
        var o = r.s, s = r.d2, a = r.d, f = r.a;
        return Math.max(0, (o = "scroll" + s) && (f = Fi(n, o)) ? f() - Jm(n)()[a] : ko(n) ? (Xn[o] || Ge[o]) - Zm(s) : n[o] - n["offset" + s]);
    }, ja = function(n, r) {
        for(var o = 0; o < es.length; o += 3)(!r || ~r.indexOf(es[o + 1])) && n(es[o], es[o + 1], es[o + 2]);
    }, Wn = function(n) {
        return typeof n == "string";
    }, nn = function(n) {
        return typeof n == "function";
    }, ll = function(n) {
        return typeof n == "number";
    }, co = function(n) {
        return typeof n == "object";
    }, Js = function(n, r, o) {
        return n && n.progress(r ? 0 : 1) && o && n.pause();
    }, pf = function(n, r) {
        if (n.enabled) {
            var o = n._ctx ? n._ctx.add(function() {
                return r(n);
            }) : r(n);
            o && o.totalTime && (n.callbackAnimation = o);
        }
    }, Qo = Math.abs, e0 = "left", t0 = "top", gd = "right", md = "bottom", _o = "width", vo = "height", yl = "Right", _l = "Left", vl = "Top", wl = "Bottom", Ct = "padding", ur = "margin", ys = "Width", yd = "Height", Rt = "px", cr = function(n) {
        return Me.getComputedStyle(n);
    }, Sv = function(n) {
        var r = cr(n).position;
        n.style.position = r === "absolute" || r === "fixed" ? r : "relative";
    }, gg = function(n, r) {
        for(var o in r)o in n || (n[o] = r[o]);
        return n;
    }, ri = function(n, r) {
        var o = r && cr(n)[Uf] !== "matrix(1, 0, 0, 1, 0, 0)" && ne.to(n, {
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
        }).progress(1), s = n.getBoundingClientRect();
        return o && o.progress(0).kill(), s;
    }, pu = function(n, r) {
        var o = r.d2;
        return n["offset" + o] || n["client" + o] || 0;
    }, n0 = function(n) {
        var r = [], o = n.labels, s = n.duration(), a;
        for(a in o)r.push(o[a] / s);
        return r;
    }, xv = function(n) {
        return function(r) {
            return ne.utils.snap(n0(n), r);
        };
    }, _d = function(n) {
        var r = ne.utils.snap(n), o = Array.isArray(n) && n.slice(0).sort(function(s, a) {
            return s - a;
        });
        return o ? function(s, a, f) {
            f === void 0 && (f = .001);
            var d;
            if (!a) return r(s);
            if (a > 0) {
                for(s -= f, d = 0; d < o.length; d++)if (o[d] >= s) return o[d];
                return o[d - 1];
            } else for(d = o.length, s += f; d--;)if (o[d] <= s) return o[d];
            return o[0];
        } : function(s, a, f) {
            f === void 0 && (f = .001);
            var d = r(s);
            return !a || Math.abs(d - s) < f || d - s < 0 == a < 0 ? d : r(a < 0 ? s - n : s + n);
        };
    }, Cv = function(n) {
        return function(r, o) {
            return _d(n0(n))(r, o.direction);
        };
    }, Ua = function(n, r, o, s) {
        return o.split(",").forEach(function(a) {
            return n(r, a, s);
        });
    }, It = function(n, r, o, s, a) {
        return n.addEventListener(r, o, {
            passive: !s,
            capture: !!a
        });
    }, Ft = function(n, r, o, s) {
        return n.removeEventListener(r, o, !!s);
    }, Ga = function(n, r, o) {
        o = o && o.wheelHandler, o && (n(r, "wheel", o), n(r, "touchmove", o));
    }, mg = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, Wa = {
        toggleActions: "play",
        anticipatePin: 0
    }, hu = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, Ja = function(n, r) {
        if (Wn(n)) {
            var o = n.indexOf("="), s = ~o ? +(n.charAt(o - 1) + 1) * parseFloat(n.substr(o + 1)) : 0;
            ~o && (n.indexOf("%") > o && (s *= r / 100), n = n.substr(0, o - 1)), n = s + (n in hu ? hu[n] * r : ~n.indexOf("%") ? parseFloat(n) * r / 100 : parseFloat(n) || 0);
        }
        return n;
    }, Va = function(n, r, o, s, a, f, d, h) {
        var g = a.startColor, m = a.endColor, w = a.fontSize, k = a.indent, _ = a.fontWeight, x = Ke.createElement("div"), v = ko(o) || Fi(o, "pinType") === "fixed", T = n.indexOf("scroller") !== -1, N = v ? Ge : o, O = n.indexOf("start") !== -1, I = O ? g : m, D = "border-color:" + I + ";font-size:" + w + ";color:" + I + ";font-weight:" + _ + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return D += "position:" + ((T || h) && v ? "fixed;" : "absolute;"), (T || h || !v) && (D += (s === Dt ? gd : md) + ":" + (f + parseFloat(k)) + "px;"), d && (D += "box-sizing:border-box;text-align:left;width:" + d.offsetWidth + "px;"), x._isStart = O, x.setAttribute("class", "gsap-marker-" + n + (r ? " marker-" + r : "")), x.style.cssText = D, x.innerText = r || r === 0 ? n + "-" + r : n, N.children[0] ? N.insertBefore(x, N.children[0]) : N.appendChild(x), x._offset = x["offset" + s.op.d2], eu(x, 0, s, O), x;
    }, eu = function(n, r, o, s) {
        var a = {
            display: "block"
        }, f = o[s ? "os2" : "p2"], d = o[s ? "p2" : "os2"];
        n._isFlipped = s, a[o.a + "Percent"] = s ? -100 : 0, a[o.a] = s ? "1px" : 0, a["border" + f + ys] = 1, a["border" + d + ys] = 0, a[o.p] = r + "px", ne.set(n, a);
    }, ze = [], Xf = {}, Dl, yg = function() {
        return en() - hr > 34 && (Dl || (Dl = requestAnimationFrame(oi)));
    }, Zo = function() {
        (!pn || !pn.isPressed || pn.startX > Ge.clientWidth) && (Ae.cache++, pn ? Dl || (Dl = requestAnimationFrame(oi)) : oi(), hr || xo("scrollStart"), hr = en());
    }, hf = function() {
        Ym = Me.innerWidth, $m = Me.innerHeight;
    }, al = function(n) {
        Ae.cache++, (n === !0 || !Jt && !qm && !Ke.fullscreenElement && !Ke.webkitFullscreenElement && (!Gf || Ym !== Me.innerWidth || Math.abs(Me.innerHeight - $m) > Me.innerHeight * .25)) && du.restart(!0);
    }, So = {}, Pv = [], r0 = function c() {
        return Ft(be, "scrollEnd", c) || po(!0);
    }, xo = function(n) {
        return So[n] && So[n].map(function(r) {
            return r();
        }) || Pv;
    }, Gn = [], i0 = function(n) {
        for(var r = 0; r < Gn.length; r += 5)(!n || Gn[r + 4] && Gn[r + 4].query === n) && (Gn[r].style.cssText = Gn[r + 1], Gn[r].getBBox && Gn[r].setAttribute("transform", Gn[r + 2] || ""), Gn[r + 3].uncache = 1);
    }, o0 = function() {
        return Ae.forEach(function(n) {
            return nn(n) && ++n.cacheID && (n.rec = n());
        });
    }, vd = function(n, r) {
        var o;
        for(hn = 0; hn < ze.length; hn++)o = ze[hn], o && (!r || o._ctx === r) && (n ? o.kill(1) : o.revert(!0, !0));
        ml = !0, r && i0(r), r || xo("revert");
    }, s0 = function(n, r) {
        Ae.cache++, (r || !gn) && Ae.forEach(function(o) {
            return nn(o) && o.cacheID++ && (o.rec = 0);
        }), Wn(n) && (Me.history.scrollRestoration = pd = n);
    }, gn, wo = 0, _g, Tv = function() {
        if (_g !== wo) {
            var n = _g = wo;
            requestAnimationFrame(function() {
                return n === wo && po(!0);
            });
        }
    }, l0 = function() {
        Ge.appendChild(as), hd = !pn && as.offsetHeight || Me.innerHeight, Ge.removeChild(as);
    }, vg = function(n) {
        return Rl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r) {
            return r.style.display = n ? "none" : "block";
        });
    }, po = function(n, r) {
        if (Xn = Ke.documentElement, Ge = Ke.body, dd = [
            Me,
            Ke,
            Xn,
            Ge
        ], hr && !n && !ml) {
            It(be, "scrollEnd", r0);
            return;
        }
        l0(), gn = be.isRefreshing = !0, ml || o0();
        var o = xo("refreshInit");
        Hm && be.sort(), r || vd(), Ae.forEach(function(s) {
            nn(s) && (s.smooth && (s.target.style.scrollBehavior = "auto"), s(0));
        }), ze.slice(0).forEach(function(s) {
            return s.refresh();
        }), ml = !1, ze.forEach(function(s) {
            if (s._subPinOffset && s.pin) {
                var a = s.vars.horizontal ? "offsetWidth" : "offsetHeight", f = s.pin[a];
                s.revert(!0, 1), s.adjustPinSpacing(s.pin[a] - f), s.refresh();
            }
        }), Vf = 1, vg(!0), ze.forEach(function(s) {
            var a = Gr(s.scroller, s._dir), f = s.vars.end === "max" || s._endClamp && s.end > a, d = s._startClamp && s.start >= a;
            (f || d) && s.setPositions(d ? a - 1 : s.start, f ? Math.max(d ? a : s.start + 1, a) : s.end, !0);
        }), vg(!1), Vf = 0, o.forEach(function(s) {
            return s && s.render && s.render(-1);
        }), Ae.forEach(function(s) {
            nn(s) && (s.smooth && requestAnimationFrame(function() {
                return s.target.style.scrollBehavior = "smooth";
            }), s.rec && s(s.rec));
        }), s0(pd, 1), du.pause(), wo++, gn = 2, oi(2), ze.forEach(function(s) {
            return nn(s.vars.onRefresh) && s.vars.onRefresh(s);
        }), gn = be.isRefreshing = !1, xo("refresh");
    }, Hf = 0, tu = 1, kl, oi = function(n) {
        if (n === 2 || !gn && !ml) {
            be.isUpdating = !0, kl && kl.update(0);
            var r = ze.length, o = en(), s = o - df >= 50, a = r && ze[0].scroll();
            if (tu = Hf > a ? -1 : 1, gn || (Hf = a), s && (hr && !ku && o - hr > 200 && (hr = 0, xo("scrollEnd")), il = df, df = o), tu < 0) {
                for(hn = r; hn-- > 0;)ze[hn] && ze[hn].update(0, s);
                tu = 1;
            } else for(hn = 0; hn < r; hn++)ze[hn] && ze[hn].update(0, s);
            be.isUpdating = !1;
        }
        Dl = 0;
    }, qf = [
        e0,
        t0,
        md,
        gd,
        ur + wl,
        ur + yl,
        ur + vl,
        ur + _l,
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRowStart",
        "gridRowEnd",
        "gridArea",
        "justifySelf",
        "alignSelf",
        "placeSelf",
        "order"
    ], nu = qf.concat([
        _o,
        vo,
        "boxSizing",
        "max" + ys,
        "max" + yd,
        "position",
        ur,
        Ct,
        Ct + vl,
        Ct + yl,
        Ct + wl,
        Ct + _l
    ]), Ev = function(n, r, o) {
        us(o);
        var s = n._gsap;
        if (s.spacerIsNative) us(s.spacerState);
        else if (n._gsap.swappedIn) {
            var a = r.parentNode;
            a && (a.insertBefore(n, r), a.removeChild(r));
        }
        n._gsap.swappedIn = !1;
    }, gf = function(n, r, o, s) {
        if (!n._gsap.swappedIn) {
            for(var a = qf.length, f = r.style, d = n.style, h; a--;)h = qf[a], f[h] = o[h];
            f.position = o.position === "absolute" ? "absolute" : "relative", o.display === "inline" && (f.display = "inline-block"), d[md] = d[gd] = "auto", f.flexBasis = o.flexBasis || "auto", f.overflow = "visible", f.boxSizing = "border-box", f[_o] = pu(n, yn) + Rt, f[vo] = pu(n, Dt) + Rt, f[Ct] = d[ur] = d[t0] = d[e0] = "0", us(s), d[_o] = d["max" + ys] = o[_o], d[vo] = d["max" + yd] = o[vo], d[Ct] = o[Ct], n.parentNode !== r && (n.parentNode.insertBefore(r, n), r.appendChild(n)), n._gsap.swappedIn = !0;
        }
    }, zv = /([A-Z])/g, us = function(n) {
        if (n) {
            var r = n.t.style, o = n.length, s = 0, a, f;
            for((n.t._gsap || ne.core.getCache(n.t)).uncache = 1; s < o; s += 2)f = n[s + 1], a = n[s], f ? r[a] = f : r[a] && r.removeProperty(a.replace(zv, "-$1").toLowerCase());
        }
    }, Xa = function(n) {
        for(var r = nu.length, o = n.style, s = [], a = 0; a < r; a++)s.push(nu[a], o[nu[a]]);
        return s.t = n, s;
    }, Rv = function(n, r, o) {
        for(var s = [], a = n.length, f = o ? 8 : 0, d; f < a; f += 2)d = n[f], s.push(d, d in r ? r[d] : n[f + 1]);
        return s.t = n.t, s;
    }, ru = {
        left: 0,
        top: 0
    }, wg = function(n, r, o, s, a, f, d, h, g, m, w, k, _, x) {
        nn(n) && (n = n(h)), Wn(n) && n.substr(0, 3) === "max" && (n = k + (n.charAt(4) === "=" ? Ja("0" + n.substr(3), o) : 0));
        var v = _ ? _.time() : 0, T, N, O;
        if (_ && _.seek(0), isNaN(n) || (n = +n), ll(n)) _ && (n = ne.utils.mapRange(_.scrollTrigger.start, _.scrollTrigger.end, 0, k, n)), d && eu(d, o, s, !0);
        else {
            nn(r) && (r = r(h));
            var I = (n || "0").split(" "), D, F, j, b;
            O = zn(r, h) || Ge, D = ri(O) || {}, (!D || !D.left && !D.top) && cr(O).display === "none" && (b = O.style.display, O.style.display = "block", D = ri(O), b ? O.style.display = b : O.style.removeProperty("display")), F = Ja(I[0], D[s.d]), j = Ja(I[1] || "0", o), n = D[s.p] - g[s.p] - m + F + a - j, d && eu(d, j, s, o - j < 20 || d._isStart && j > 20), o -= o - j;
        }
        if (x && (h[x] = n || -.001, n < 0 && (n = 0)), f) {
            var q = n + o, G = f._isStart;
            T = "scroll" + s.d2, eu(f, q, s, G && q > 20 || !G && (w ? Math.max(Ge[T], Xn[T]) : f.parentNode[T]) <= q + 1), w && (g = ri(d), w && (f.style[s.op.p] = g[s.op.p] - s.op.m - f._offset + Rt));
        }
        return _ && O && (T = ri(O), _.seek(k), N = ri(O), _._caScrollDist = T[s.p] - N[s.p], n = n / _._caScrollDist * k), _ && _.seek(v), _ ? n : Math.round(n);
    }, Dv = /(webkit|moz|length|cssText|inset)/i, kg = function(n, r, o, s) {
        if (n.parentNode !== r) {
            var a = n.style, f, d;
            if (r === Ge) {
                n._stOrig = a.cssText, d = cr(n);
                for(f in d)!+f && !Dv.test(f) && d[f] && typeof a[f] == "string" && f !== "0" && (a[f] = d[f]);
                a.top = o, a.left = s;
            } else a.cssText = n._stOrig;
            ne.core.getCache(n).uncache = 1, r.appendChild(n);
        }
    }, a0 = function(n, r, o) {
        var s = r, a = s;
        return function(f) {
            var d = Math.round(n());
            return d !== s && d !== a && Math.abs(d - s) > 3 && Math.abs(d - a) > 3 && (f = d, o && o()), a = s, s = Math.round(f), s;
        };
    }, Ha = function(n, r, o) {
        var s = {};
        s[r.p] = "+=" + o, ne.set(n, s);
    }, Sg = function(n, r) {
        var o = Gi(n, r), s = "_scroll" + r.p2, a = function f(d, h, g, m, w) {
            var k = f.tween, _ = h.onComplete, x = {};
            g = g || o();
            var v = a0(o, g, function() {
                k.kill(), f.tween = 0;
            });
            return w = m && w || 0, m = m || d - g, k && k.kill(), h[s] = d, h.inherit = !1, h.modifiers = x, x[s] = function() {
                return v(g + m * k.ratio + w * k.ratio * k.ratio);
            }, h.onUpdate = function() {
                Ae.cache++, f.tween && oi();
            }, h.onComplete = function() {
                f.tween = 0, _ && _.call(k);
            }, k = f.tween = ne.to(n, h), k;
        };
        return n[s] = o, o.wheelHandler = function() {
            return a.tween && a.tween.kill() && (a.tween = 0);
        }, It(n, "wheel", o.wheelHandler), be.isTouch && It(n, "touchmove", o.wheelHandler), a;
    }, be = (function() {
        function c(r, o) {
            Jo || c.register(ne) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Wf(this), this.init(r, o);
        }
        var n = c.prototype;
        return n.init = function(o, s) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !ol) {
                this.update = this.refresh = this.kill = Ir;
                return;
            }
            o = gg(Wn(o) || ll(o) || o.nodeType ? {
                trigger: o
            } : o, Wa);
            var a = o, f = a.onUpdate, d = a.toggleClass, h = a.id, g = a.onToggle, m = a.onRefresh, w = a.scrub, k = a.trigger, _ = a.pin, x = a.pinSpacing, v = a.invalidateOnRefresh, T = a.anticipatePin, N = a.onScrubComplete, O = a.onSnapComplete, I = a.once, D = a.snap, F = a.pinReparent, j = a.pinSpacer, b = a.containerAnimation, q = a.fastScrollEnd, G = a.preventOverlaps, X = o.horizontal || o.containerAnimation && o.horizontal !== !1 ? yn : Dt, ce = !w && w !== 0, K = zn(o.scroller || Me), fe = ne.core.getCache(K), ae = ko(K), we = ("pinType" in o ? o.pinType : Fi(K, "pinType") || ae && "fixed") === "fixed", le = [
                o.onEnter,
                o.onLeave,
                o.onEnterBack,
                o.onLeaveBack
            ], J = ce && o.toggleActions.split(" "), W = "markers" in o ? o.markers : Wa.markers, Q = ae ? 0 : parseFloat(cr(K)["border" + X.p2 + ys]) || 0, C = this, E = o.onRefreshInit && function() {
                return o.onRefreshInit(C);
            }, U = wv(K, ae, X), de = kv(K, ae), ie = 0, me = 0, ye = 0, ke = Gi(K, X), Ce, Pe, ft, wt, Lt, Re, Qe, Ut, Ht, B, qt, On, _n, We, bn, gr, zr, gt, mr, Ze, $t, on, sn, yr, dt, Xi, Jn, ai, Rr, er, _r, Te, vr, Mt, At, vn, Dr, Xr, tr;
            if (C._startClamp = C._endClamp = !1, C._dir = X, T *= 45, C.scroller = K, C.scroll = b ? b.time.bind(b) : ke, wt = ke(), C.vars = o, s = s || o.animation, "refreshPriority" in o && (Hm = 1, o.refreshPriority === -9999 && (kl = C)), fe.tweenScroll = fe.tweenScroll || {
                top: Sg(K, Dt),
                left: Sg(K, yn)
            }, C.tweenTo = Ce = fe.tweenScroll[X.p], C.scrubDuration = function(Z) {
                vr = ll(Z) && Z, vr ? Te ? Te.duration(Z) : Te = ne.to(s, {
                    ease: "expo",
                    totalProgress: "+=0",
                    inherit: !1,
                    duration: vr,
                    paused: !0,
                    onComplete: function() {
                        return N && N(C);
                    }
                }) : (Te && Te.progress(1).kill(), Te = 0);
            }, s && (s.vars.lazy = !1, s._initted && !C.isReverted || s.vars.immediateRender !== !1 && o.immediateRender !== !1 && s.duration() && s.render(0, !0, !0), C.animation = s.pause(), s.scrollTrigger = C, C.scrubDuration(w), er = 0, h || (h = s.vars.id)), D && ((!co(D) || D.push) && (D = {
                snapTo: D
            }), "scrollBehavior" in Ge.style && ne.set(ae ? [
                Ge,
                Xn
            ] : K, {
                scrollBehavior: "auto"
            }), Ae.forEach(function(Z) {
                return nn(Z) && Z.target === (ae ? Ke.scrollingElement || Xn : K) && (Z.smooth = !1);
            }), ft = nn(D.snapTo) ? D.snapTo : D.snapTo === "labels" ? xv(s) : D.snapTo === "labelsDirectional" ? Cv(s) : D.directional !== !1 ? function(Z, _e) {
                return _d(D.snapTo)(Z, en() - me < 500 ? 0 : _e.direction);
            } : ne.utils.snap(D.snapTo), Mt = D.duration || {
                min: .1,
                max: 2
            }, Mt = co(Mt) ? gl(Mt.min, Mt.max) : gl(Mt, Mt), At = ne.delayedCall(D.delay || vr / 2 || .1, function() {
                var Z = ke(), _e = en() - me < 500, ue = Ce.tween;
                if ((_e || Math.abs(C.getVelocity()) < 10) && !ue && !ku && ie !== Z) {
                    var ve = (Z - Re) / We, ot = s && !ce ? s.totalProgress() : ve, Ee = _e ? 0 : (ot - _r) / (en() - il) * 1e3 || 0, Je = ne.utils.clamp(-ve, 1 - ve, Qo(Ee / 2) * Ee / .185), Ot = ve + (D.inertia === !1 ? 0 : Je), nt, qe, Ne = D, wn = Ne.onStart, $e = Ne.onInterrupt, ln = Ne.onComplete;
                    if (nt = ft(Ot, C), ll(nt) || (nt = Ot), qe = Math.max(0, Math.round(Re + nt * We)), Z <= Qe && Z >= Re && qe !== Z) {
                        if (ue && !ue._initted && ue.data <= Qo(qe - Z)) return;
                        D.inertia === !1 && (Je = nt - ve), Ce(qe, {
                            duration: Mt(Qo(Math.max(Qo(Ot - ot), Qo(nt - ot)) * .185 / Ee / .05 || 0)),
                            ease: D.ease || "power3",
                            data: Qo(qe - Z),
                            onInterrupt: function() {
                                return At.restart(!0) && $e && $e(C);
                            },
                            onComplete: function() {
                                C.update(), ie = ke(), s && !ce && (Te ? Te.resetTo("totalProgress", nt, s._tTime / s._tDur) : s.progress(nt)), er = _r = s && !ce ? s.totalProgress() : C.progress, O && O(C), ln && ln(C);
                            }
                        }, Z, Je * We, qe - Z - Je * We), wn && wn(C, Ce.tween);
                    }
                } else C.isActive && ie !== Z && At.restart(!0);
            }).pause()), h && (Xf[h] = C), k = C.trigger = zn(k || _ !== !0 && _), tr = k && k._gsap && k._gsap.stRevert, tr && (tr = tr(C)), _ = _ === !0 ? k : zn(_), Wn(d) && (d = {
                targets: k,
                className: d
            }), _ && (x === !1 || x === ur || (x = !x && _.parentNode && _.parentNode.style && cr(_.parentNode).display === "flex" ? !1 : Ct), C.pin = _, Pe = ne.core.getCache(_), Pe.spacer ? bn = Pe.pinState : (j && (j = zn(j), j && !j.nodeType && (j = j.current || j.nativeElement), Pe.spacerIsNative = !!j, j && (Pe.spacerState = Xa(j))), Pe.spacer = gt = j || Ke.createElement("div"), gt.classList.add("pin-spacer"), h && gt.classList.add("pin-spacer-" + h), Pe.pinState = bn = Xa(_)), o.force3D !== !1 && ne.set(_, {
                force3D: !0
            }), C.spacer = gt = Pe.spacer, Rr = cr(_), yr = Rr[x + X.os2], Ze = ne.getProperty(_), $t = ne.quickSetter(_, X.a, Rt), gf(_, gt, Rr), zr = Xa(_)), W) {
                On = co(W) ? gg(W, mg) : mg, B = Va("scroller-start", h, K, X, On, 0), qt = Va("scroller-end", h, K, X, On, 0, B), mr = B["offset" + X.op.d2];
                var ui = zn(Fi(K, "content") || K);
                Ut = this.markerStart = Va("start", h, ui, X, On, mr, 0, b), Ht = this.markerEnd = Va("end", h, ui, X, On, mr, 0, b), b && (Xr = ne.quickSetter([
                    Ut,
                    Ht
                ], X.a, Rt)), !we && !(Wr.length && Fi(K, "fixedMarkers") === !0) && (Sv(ae ? Ge : K), ne.set([
                    B,
                    qt
                ], {
                    force3D: !0
                }), Xi = ne.quickSetter(B, X.a, Rt), ai = ne.quickSetter(qt, X.a, Rt));
            }
            if (b) {
                var xe = b.vars.onUpdate, pe = b.vars.onUpdateParams;
                b.eventCallback("onUpdate", function() {
                    C.update(0, 0, 1), xe && xe.apply(b, pe || []);
                });
            }
            if (C.previous = function() {
                return ze[ze.indexOf(C) - 1];
            }, C.next = function() {
                return ze[ze.indexOf(C) + 1];
            }, C.revert = function(Z, _e) {
                if (!_e) return C.kill(!0);
                var ue = Z !== !1 || !C.enabled, ve = Jt;
                ue !== C.isReverted && (ue && (vn = Math.max(ke(), C.scroll.rec || 0), ye = C.progress, Dr = s && s.progress()), Ut && [
                    Ut,
                    Ht,
                    B,
                    qt
                ].forEach(function(ot) {
                    return ot.style.display = ue ? "none" : "block";
                }), ue && (Jt = C, C.update(ue)), _ && (!F || !C.isActive) && (ue ? Ev(_, gt, bn) : gf(_, gt, cr(_), dt)), ue || C.update(ue), Jt = ve, C.isReverted = ue);
            }, C.refresh = function(Z, _e, ue, ve) {
                if (!((Jt || !C.enabled) && !_e)) {
                    if (_ && Z && hr) {
                        It(c, "scrollEnd", r0);
                        return;
                    }
                    !gn && E && E(C), Jt = C, Ce.tween && !ue && (Ce.tween.kill(), Ce.tween = 0), Te && Te.pause(), v && s && (s.revert({
                        kill: !1
                    }).invalidate(), s.getChildren ? s.getChildren(!0, !0, !1).forEach(function(Mr) {
                        return Mr.vars.immediateRender && Mr.render(0, !0, !0);
                    }) : s.vars.immediateRender && s.render(0, !0, !0)), C.isReverted || C.revert(!0, !0), C._subPinOffset = !1;
                    var ot = U(), Ee = de(), Je = b ? b.duration() : Gr(K, X), Ot = We <= .01 || !We, nt = 0, qe = ve || 0, Ne = co(ue) ? ue.end : o.end, wn = o.endTrigger || k, $e = co(ue) ? ue.start : o.start || (o.start === 0 || !k ? 0 : _ ? "0 0" : "0 100%"), ln = C.pinnedContainer = o.pinnedContainer && zn(o.pinnedContainer, C), Bn = k && Math.max(0, ze.indexOf(C)) || 0, kt = Bn, St, Tt, Hr, To, De, mt, kn, Eo, Hi, qi, Nn, Lr, an;
                    for(W && co(ue) && (Lr = ne.getProperty(B, X.p), an = ne.getProperty(qt, X.p)); kt-- > 0;)mt = ze[kt], mt.end || mt.refresh(0, 1) || (Jt = C), kn = mt.pin, kn && (kn === k || kn === _ || kn === ln) && !mt.isReverted && (qi || (qi = []), qi.unshift(mt), mt.revert(!0, !0)), mt !== ze[kt] && (Bn--, kt--);
                    for(nn($e) && ($e = $e(C)), $e = fg($e, "start", C), Re = wg($e, k, ot, X, ke(), Ut, B, C, Ee, Q, we, Je, b, C._startClamp && "_startClamp") || (_ ? -.001 : 0), nn(Ne) && (Ne = Ne(C)), Wn(Ne) && !Ne.indexOf("+=") && (~Ne.indexOf(" ") ? Ne = (Wn($e) ? $e.split(" ")[0] : "") + Ne : (nt = Ja(Ne.substr(2), ot), Ne = Wn($e) ? $e : (b ? ne.utils.mapRange(0, b.duration(), b.scrollTrigger.start, b.scrollTrigger.end, Re) : Re) + nt, wn = k)), Ne = fg(Ne, "end", C), Qe = Math.max(Re, wg(Ne || (wn ? "100% 0" : Je), wn, ot, X, ke() + nt, Ht, qt, C, Ee, Q, we, Je, b, C._endClamp && "_endClamp")) || -.001, nt = 0, kt = Bn; kt--;)mt = ze[kt] || {}, kn = mt.pin, kn && mt.start - mt._pinPush <= Re && !b && mt.end > 0 && (St = mt.end - (C._startClamp ? Math.max(0, mt.start) : mt.start), (kn === k && mt.start - mt._pinPush < Re || kn === ln) && isNaN($e) && (nt += St * (1 - mt.progress)), kn === _ && (qe += St));
                    if (Re += nt, Qe += nt, C._startClamp && (C._startClamp += nt), C._endClamp && !gn && (C._endClamp = Qe || -.001, Qe = Math.min(Qe, Gr(K, X))), We = Qe - Re || (Re -= .01) && .001, Ot && (ye = ne.utils.clamp(0, 1, ne.utils.normalize(Re, Qe, vn))), C._pinPush = qe, Ut && nt && (St = {}, St[X.a] = "+=" + nt, ln && (St[X.p] = "-=" + ke()), ne.set([
                        Ut,
                        Ht
                    ], St)), _ && !(Vf && C.end >= Gr(K, X))) St = cr(_), To = X === Dt, Hr = ke(), on = parseFloat(Ze(X.a)) + qe, !Je && Qe > 1 && (Nn = (ae ? Ke.scrollingElement || Xn : K).style, Nn = {
                        style: Nn,
                        value: Nn["overflow" + X.a.toUpperCase()]
                    }, ae && cr(Ge)["overflow" + X.a.toUpperCase()] !== "scroll" && (Nn.style["overflow" + X.a.toUpperCase()] = "scroll")), gf(_, gt, St), zr = Xa(_), Tt = ri(_, !0), Eo = we && Gi(K, To ? yn : Dt)(), x ? (dt = [
                        x + X.os2,
                        We + qe + Rt
                    ], dt.t = gt, kt = x === Ct ? pu(_, X) + We + qe : 0, kt && (dt.push(X.d, kt + Rt), gt.style.flexBasis !== "auto" && (gt.style.flexBasis = kt + Rt)), us(dt), ln && ze.forEach(function(Mr) {
                        Mr.pin === ln && Mr.vars.pinSpacing !== !1 && (Mr._subPinOffset = !0);
                    }), we && ke(vn)) : (kt = pu(_, X), kt && gt.style.flexBasis !== "auto" && (gt.style.flexBasis = kt + Rt)), we && (De = {
                        top: Tt.top + (To ? Hr - Re : Eo) + Rt,
                        left: Tt.left + (To ? Eo : Hr - Re) + Rt,
                        boxSizing: "border-box",
                        position: "fixed"
                    }, De[_o] = De["max" + ys] = Math.ceil(Tt.width) + Rt, De[vo] = De["max" + yd] = Math.ceil(Tt.height) + Rt, De[ur] = De[ur + vl] = De[ur + yl] = De[ur + wl] = De[ur + _l] = "0", De[Ct] = St[Ct], De[Ct + vl] = St[Ct + vl], De[Ct + yl] = St[Ct + yl], De[Ct + wl] = St[Ct + wl], De[Ct + _l] = St[Ct + _l], gr = Rv(bn, De, F), gn && ke(0)), s ? (Hi = s._initted, cf(1), s.render(s.duration(), !0, !0), sn = Ze(X.a) - on + We + qe, Jn = Math.abs(We - sn) > 1, we && Jn && gr.splice(gr.length - 2, 2), s.render(0, !0, !0), Hi || s.invalidate(!0), s.parent || s.totalTime(s.totalTime()), cf(0)) : sn = We, Nn && (Nn.value ? Nn.style["overflow" + X.a.toUpperCase()] = Nn.value : Nn.style.removeProperty("overflow-" + X.a));
                    else if (k && ke() && !b) for(Tt = k.parentNode; Tt && Tt !== Ge;)Tt._pinOffset && (Re -= Tt._pinOffset, Qe -= Tt._pinOffset), Tt = Tt.parentNode;
                    qi && qi.forEach(function(Mr) {
                        return Mr.revert(!1, !0);
                    }), C.start = Re, C.end = Qe, wt = Lt = gn ? vn : ke(), !b && !gn && (wt < vn && ke(vn), C.scroll.rec = 0), C.revert(!1, !0), me = en(), At && (ie = -1, At.restart(!0)), Jt = 0, s && ce && (s._initted || Dr) && s.progress() !== Dr && s.progress(Dr || 0, !0).render(s.time(), !0, !0), (Ot || ye !== C.progress || b || v || s && !s._initted) && (s && !ce && (s._initted || ye || s.vars.immediateRender !== !1) && s.totalProgress(b && Re < -.001 && !ye ? ne.utils.normalize(Re, Qe, 0) : ye, !0), C.progress = Ot || (wt - Re) / We === ye ? 0 : ye), _ && x && (gt._pinOffset = Math.round(C.progress * sn)), Te && Te.invalidate(), isNaN(Lr) || (Lr -= ne.getProperty(B, X.p), an -= ne.getProperty(qt, X.p), Ha(B, X, Lr), Ha(Ut, X, Lr - (ve || 0)), Ha(qt, X, an), Ha(Ht, X, an - (ve || 0))), Ot && !gn && C.update(), m && !gn && !_n && (_n = !0, m(C), _n = !1);
                }
            }, C.getVelocity = function() {
                return (ke() - Lt) / (en() - il) * 1e3 || 0;
            }, C.endAnimation = function() {
                Js(C.callbackAnimation), s && (Te ? Te.progress(1) : s.paused() ? ce || Js(s, C.direction < 0, 1) : Js(s, s.reversed()));
            }, C.labelToScroll = function(Z) {
                return s && s.labels && (Re || C.refresh() || Re) + s.labels[Z] / s.duration() * We || 0;
            }, C.getTrailing = function(Z) {
                var _e = ze.indexOf(C), ue = C.direction > 0 ? ze.slice(0, _e).reverse() : ze.slice(_e + 1);
                return (Wn(Z) ? ue.filter(function(ve) {
                    return ve.vars.preventOverlaps === Z;
                }) : ue).filter(function(ve) {
                    return C.direction > 0 ? ve.end <= Re : ve.start >= Qe;
                });
            }, C.update = function(Z, _e, ue) {
                if (!(b && !ue && !Z)) {
                    var ve = gn === !0 ? vn : C.scroll(), ot = Z ? 0 : (ve - Re) / We, Ee = ot < 0 ? 0 : ot > 1 ? 1 : ot || 0, Je = C.progress, Ot, nt, qe, Ne, wn, $e, ln, Bn;
                    if (_e && (Lt = wt, wt = b ? ke() : ve, D && (_r = er, er = s && !ce ? s.totalProgress() : Ee)), T && _ && !Jt && !Ia && hr && (!Ee && Re < ve + (ve - Lt) / (en() - il) * T ? Ee = 1e-4 : Ee === 1 && Qe > ve + (ve - Lt) / (en() - il) * T && (Ee = .9999)), Ee !== Je && C.enabled) {
                        if (Ot = C.isActive = !!Ee && Ee < 1, nt = !!Je && Je < 1, $e = Ot !== nt, wn = $e || !!Ee != !!Je, C.direction = Ee > Je ? 1 : -1, C.progress = Ee, wn && !Jt && (qe = Ee && !Je ? 0 : Ee === 1 ? 1 : Je === 1 ? 2 : 3, ce && (Ne = !$e && J[qe + 1] !== "none" && J[qe + 1] || J[qe], Bn = s && (Ne === "complete" || Ne === "reset" || Ne in s))), G && ($e || Bn) && (Bn || w || !s) && (nn(G) ? G(C) : C.getTrailing(G).forEach(function(Hr) {
                            return Hr.endAnimation();
                        })), ce || (Te && !Jt && !Ia ? (Te._dp._time - Te._start !== Te._time && Te.render(Te._dp._time - Te._start), Te.resetTo ? Te.resetTo("totalProgress", Ee, s._tTime / s._tDur) : (Te.vars.totalProgress = Ee, Te.invalidate().restart())) : s && s.totalProgress(Ee, !!(Jt && (me || Z)))), _) {
                            if (Z && x && (gt.style[x + X.os2] = yr), !we) $t(sl(on + sn * Ee));
                            else if (wn) {
                                if (ln = !Z && Ee > Je && Qe + 1 > ve && ve + 1 >= Gr(K, X), F) if (!Z && (Ot || ln)) {
                                    var kt = ri(_, !0), St = ve - Re;
                                    kg(_, Ge, kt.top + (X === Dt ? St : 0) + Rt, kt.left + (X === Dt ? 0 : St) + Rt);
                                } else kg(_, gt);
                                us(Ot || ln ? gr : zr), Jn && Ee < 1 && Ot || $t(on + (Ee === 1 && !ln ? sn : 0));
                            }
                        }
                        D && !Ce.tween && !Jt && !Ia && At.restart(!0), d && ($e || I && Ee && (Ee < 1 || !ff)) && Rl(d.targets).forEach(function(Hr) {
                            return Hr.classList[Ot || I ? "add" : "remove"](d.className);
                        }), f && !ce && !Z && f(C), wn && !Jt ? (ce && (Bn && (Ne === "complete" ? s.pause().totalProgress(1) : Ne === "reset" ? s.restart(!0).pause() : Ne === "restart" ? s.restart(!0) : s[Ne]()), f && f(C)), ($e || !ff) && (g && $e && pf(C, g), le[qe] && pf(C, le[qe]), I && (Ee === 1 ? C.kill(!1, 1) : le[qe] = 0), $e || (qe = Ee === 1 ? 1 : 3, le[qe] && pf(C, le[qe]))), q && !Ot && Math.abs(C.getVelocity()) > (ll(q) ? q : 2500) && (Js(C.callbackAnimation), Te ? Te.progress(1) : Js(s, Ne === "reverse" ? 1 : !Ee, 1))) : ce && f && !Jt && f(C);
                    }
                    if (ai) {
                        var Tt = b ? ve / b.duration() * (b._caScrollDist || 0) : ve;
                        Xi(Tt + (B._isFlipped ? 1 : 0)), ai(Tt);
                    }
                    Xr && Xr(-ve / b.duration() * (b._caScrollDist || 0));
                }
            }, C.enable = function(Z, _e) {
                C.enabled || (C.enabled = !0, It(K, "resize", al), ae || It(K, "scroll", Zo), E && It(c, "refreshInit", E), Z !== !1 && (C.progress = ye = 0, wt = Lt = ie = ke()), _e !== !1 && C.refresh());
            }, C.getTween = function(Z) {
                return Z && Ce ? Ce.tween : Te;
            }, C.setPositions = function(Z, _e, ue, ve) {
                if (b) {
                    var ot = b.scrollTrigger, Ee = b.duration(), Je = ot.end - ot.start;
                    Z = ot.start + Je * Z / Ee, _e = ot.start + Je * _e / Ee;
                }
                C.refresh(!1, !1, {
                    start: dg(Z, ue && !!C._startClamp),
                    end: dg(_e, ue && !!C._endClamp)
                }, ve), C.update();
            }, C.adjustPinSpacing = function(Z) {
                if (dt && Z) {
                    var _e = dt.indexOf(X.d) + 1;
                    dt[_e] = parseFloat(dt[_e]) + Z + Rt, dt[1] = parseFloat(dt[1]) + Z + Rt, us(dt);
                }
            }, C.disable = function(Z, _e) {
                if (Z !== !1 && C.revert(!0, !0), C.enabled && (C.enabled = C.isActive = !1, _e || Te && Te.pause(), vn = 0, Pe && (Pe.uncache = 1), E && Ft(c, "refreshInit", E), At && (At.pause(), Ce.tween && Ce.tween.kill() && (Ce.tween = 0)), !ae)) {
                    for(var ue = ze.length; ue--;)if (ze[ue].scroller === K && ze[ue] !== C) return;
                    Ft(K, "resize", al), ae || Ft(K, "scroll", Zo);
                }
            }, C.kill = function(Z, _e) {
                C.disable(Z, _e), Te && !_e && Te.kill(), h && delete Xf[h];
                var ue = ze.indexOf(C);
                ue >= 0 && ze.splice(ue, 1), ue === hn && tu > 0 && hn--, ue = 0, ze.forEach(function(ve) {
                    return ve.scroller === C.scroller && (ue = 1);
                }), ue || gn || (C.scroll.rec = 0), s && (s.scrollTrigger = null, Z && s.revert({
                    kill: !1
                }), _e || s.kill()), Ut && [
                    Ut,
                    Ht,
                    B,
                    qt
                ].forEach(function(ve) {
                    return ve.parentNode && ve.parentNode.removeChild(ve);
                }), kl === C && (kl = 0), _ && (Pe && (Pe.uncache = 1), ue = 0, ze.forEach(function(ve) {
                    return ve.pin === _ && ue++;
                }), ue || (Pe.spacer = 0)), o.onKill && o.onKill(C);
            }, ze.push(C), C.enable(!1, !1), tr && tr(C), s && s.add && !We) {
                var Oe = C.update;
                C.update = function() {
                    C.update = Oe, Ae.cache++, Re || Qe || C.refresh();
                }, ne.delayedCall(.01, C.update), We = .01, Re = Qe = 0;
            } else C.refresh();
            _ && Tv();
        }, c.register = function(o) {
            return Jo || (ne = o || Qm(), Km() && window.document && c.enable(), Jo = ol), Jo;
        }, c.defaults = function(o) {
            if (o) for(var s in o)Wa[s] = o[s];
            return Wa;
        }, c.disable = function(o, s) {
            ol = 0, ze.forEach(function(f) {
                return f[s ? "kill" : "disable"](o);
            }), Ft(Me, "wheel", Zo), Ft(Ke, "scroll", Zo), clearInterval(Fa), Ft(Ke, "touchcancel", Ir), Ft(Ge, "touchstart", Ir), Ua(Ft, Ke, "pointerdown,touchstart,mousedown", pg), Ua(Ft, Ke, "pointerup,touchend,mouseup", hg), du.kill(), ja(Ft);
            for(var a = 0; a < Ae.length; a += 3)Ga(Ft, Ae[a], Ae[a + 1]), Ga(Ft, Ae[a], Ae[a + 2]);
        }, c.enable = function() {
            if (Me = window, Ke = document, Xn = Ke.documentElement, Ge = Ke.body, ne && (Rl = ne.utils.toArray, gl = ne.utils.clamp, Wf = ne.core.context || Ir, cf = ne.core.suppressOverwrites || Ir, pd = Me.history.scrollRestoration || "auto", Hf = Me.pageYOffset || 0, ne.core.globals("ScrollTrigger", c), Ge)) {
                ol = 1, as = document.createElement("div"), as.style.height = "100vh", as.style.position = "absolute", l0(), vv(), vt.register(ne), c.isTouch = vt.isTouch, Ri = vt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Gf = vt.isTouch === 1, It(Me, "wheel", Zo), dd = [
                    Me,
                    Ke,
                    Xn,
                    Ge
                ], ne.matchMedia ? (c.matchMedia = function(g) {
                    var m = ne.matchMedia(), w;
                    for(w in g)m.add(w, g[w]);
                    return m;
                }, ne.addEventListener("matchMediaInit", function() {
                    o0(), vd();
                }), ne.addEventListener("matchMediaRevert", function() {
                    return i0();
                }), ne.addEventListener("matchMedia", function() {
                    po(0, 1), xo("matchMedia");
                }), ne.matchMedia().add("(orientation: portrait)", function() {
                    return hf(), hf;
                })) : console.warn("Requires GSAP 3.11.0 or later"), hf(), It(Ke, "scroll", Zo);
                var o = Ge.hasAttribute("style"), s = Ge.style, a = s.borderTopStyle, f = ne.core.Animation.prototype, d, h;
                for(f.revert || Object.defineProperty(f, "revert", {
                    value: function() {
                        return this.time(-.01, !0);
                    }
                }), s.borderTopStyle = "solid", d = ri(Ge), Dt.m = Math.round(d.top + Dt.sc()) || 0, yn.m = Math.round(d.left + yn.sc()) || 0, a ? s.borderTopStyle = a : s.removeProperty("border-top-style"), o || (Ge.setAttribute("style", ""), Ge.removeAttribute("style")), Fa = setInterval(yg, 250), ne.delayedCall(.5, function() {
                    return Ia = 0;
                }), It(Ke, "touchcancel", Ir), It(Ge, "touchstart", Ir), Ua(It, Ke, "pointerdown,touchstart,mousedown", pg), Ua(It, Ke, "pointerup,touchend,mouseup", hg), Uf = ne.utils.checkPrefix("transform"), nu.push(Uf), Jo = en(), du = ne.delayedCall(.2, po).pause(), es = [
                    Ke,
                    "visibilitychange",
                    function() {
                        var g = Me.innerWidth, m = Me.innerHeight;
                        Ke.hidden ? (ug = g, cg = m) : (ug !== g || cg !== m) && al();
                    },
                    Ke,
                    "DOMContentLoaded",
                    po,
                    Me,
                    "load",
                    po,
                    Me,
                    "resize",
                    al
                ], ja(It), ze.forEach(function(g) {
                    return g.enable(0, 1);
                }), h = 0; h < Ae.length; h += 3)Ga(Ft, Ae[h], Ae[h + 1]), Ga(Ft, Ae[h], Ae[h + 2]);
            }
        }, c.config = function(o) {
            "limitCallbacks" in o && (ff = !!o.limitCallbacks);
            var s = o.syncInterval;
            s && clearInterval(Fa) || (Fa = s) && setInterval(yg, s), "ignoreMobileResize" in o && (Gf = c.isTouch === 1 && o.ignoreMobileResize), "autoRefreshEvents" in o && (ja(Ft) || ja(It, o.autoRefreshEvents || "none"), qm = (o.autoRefreshEvents + "").indexOf("resize") === -1);
        }, c.scrollerProxy = function(o, s) {
            var a = zn(o), f = Ae.indexOf(a), d = ko(a);
            ~f && Ae.splice(f, d ? 6 : 2), s && (d ? Wr.unshift(Me, s, Ge, s, Xn, s) : Wr.unshift(a, s));
        }, c.clearMatchMedia = function(o) {
            ze.forEach(function(s) {
                return s._ctx && s._ctx.query === o && s._ctx.kill(!0, !0);
            });
        }, c.isInViewport = function(o, s, a) {
            var f = (Wn(o) ? zn(o) : o).getBoundingClientRect(), d = f[a ? _o : vo] * s || 0;
            return a ? f.right - d > 0 && f.left + d < Me.innerWidth : f.bottom - d > 0 && f.top + d < Me.innerHeight;
        }, c.positionInViewport = function(o, s, a) {
            Wn(o) && (o = zn(o));
            var f = o.getBoundingClientRect(), d = f[a ? _o : vo], h = s == null ? d / 2 : s in hu ? hu[s] * d : ~s.indexOf("%") ? parseFloat(s) * d / 100 : parseFloat(s) || 0;
            return a ? (f.left + h) / Me.innerWidth : (f.top + h) / Me.innerHeight;
        }, c.killAll = function(o) {
            if (ze.slice(0).forEach(function(a) {
                return a.vars.id !== "ScrollSmoother" && a.kill();
            }), o !== !0) {
                var s = So.killAll || [];
                So = {}, s.forEach(function(a) {
                    return a();
                });
            }
        }, c;
    })();
    be.version = "3.14.2";
    be.saveStyles = function(c) {
        return c ? Rl(c).forEach(function(n) {
            if (n && n.style) {
                var r = Gn.indexOf(n);
                r >= 0 && Gn.splice(r, 5), Gn.push(n, n.style.cssText, n.getBBox && n.getAttribute("transform"), ne.core.getCache(n), Wf());
            }
        }) : Gn;
    };
    be.revert = function(c, n) {
        return vd(!c, n);
    };
    be.create = function(c, n) {
        return new be(c, n);
    };
    be.refresh = function(c) {
        return c ? al(!0) : (Jo || be.register()) && po(!0);
    };
    be.update = function(c) {
        return ++Ae.cache && oi(c === !0 ? 2 : 0);
    };
    be.clearScrollMemory = s0;
    be.maxScroll = function(c, n) {
        return Gr(c, n ? yn : Dt);
    };
    be.getScrollFunc = function(c, n) {
        return Gi(zn(c), n ? yn : Dt);
    };
    be.getById = function(c) {
        return Xf[c];
    };
    be.getAll = function() {
        return ze.filter(function(c) {
            return c.vars.id !== "ScrollSmoother";
        });
    };
    be.isScrolling = function() {
        return !!hr;
    };
    be.snapDirectional = _d;
    be.addEventListener = function(c, n) {
        var r = So[c] || (So[c] = []);
        ~r.indexOf(n) || r.push(n);
    };
    be.removeEventListener = function(c, n) {
        var r = So[c], o = r && r.indexOf(n);
        o >= 0 && r.splice(o, 1);
    };
    be.batch = function(c, n) {
        var r = [], o = {}, s = n.interval || .016, a = n.batchMax || 1e9, f = function(g, m) {
            var w = [], k = [], _ = ne.delayedCall(s, function() {
                m(w, k), w = [], k = [];
            }).pause();
            return function(x) {
                w.length || _.restart(!0), w.push(x.trigger), k.push(x), a <= w.length && _.progress(1);
            };
        }, d;
        for(d in n)o[d] = d.substr(0, 2) === "on" && nn(n[d]) && d !== "onRefreshInit" ? f(d, n[d]) : n[d];
        return nn(a) && (a = a(), It(be, "refresh", function() {
            return a = n.batchMax();
        })), Rl(c).forEach(function(h) {
            var g = {};
            for(d in o)g[d] = o[d];
            g.trigger = h, r.push(be.create(g));
        }), r;
    };
    var xg = function(n, r, o, s) {
        return r > s ? n(s) : r < 0 && n(0), o > s ? (s - r) / (o - r) : o < 0 ? r / (r - o) : 1;
    }, mf = function c(n, r) {
        r === !0 ? n.style.removeProperty("touch-action") : n.style.touchAction = r === !0 ? "auto" : r ? "pan-" + r + (vt.isTouch ? " pinch-zoom" : "") : "none", n === Xn && c(Ge, r);
    }, qa = {
        auto: 1,
        scroll: 1
    }, Lv = function(n) {
        var r = n.event, o = n.target, s = n.axis, a = (r.changedTouches ? r.changedTouches[0] : r).target, f = a._gsap || ne.core.getCache(a), d = en(), h;
        if (!f._isScrollT || d - f._isScrollT > 2e3) {
            for(; a && a !== Ge && (a.scrollHeight <= a.clientHeight && a.scrollWidth <= a.clientWidth || !(qa[(h = cr(a)).overflowY] || qa[h.overflowX]));)a = a.parentNode;
            f._isScroll = a && a !== o && !ko(a) && (qa[(h = cr(a)).overflowY] || qa[h.overflowX]), f._isScrollT = d;
        }
        (f._isScroll || s === "x") && (r.stopPropagation(), r._gsapAllow = !0);
    }, u0 = function(n, r, o, s) {
        return vt.create({
            target: n,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: r,
            onWheel: s = s && Lv,
            onPress: s,
            onDrag: s,
            onScroll: s,
            onEnable: function() {
                return o && It(Ke, vt.eventTypes[0], Pg, !1, !0);
            },
            onDisable: function() {
                return Ft(Ke, vt.eventTypes[0], Pg, !0);
            }
        });
    }, Mv = /(input|label|select|textarea)/i, Cg, Pg = function(n) {
        var r = Mv.test(n.target.tagName);
        (r || Cg) && (n._gsapAllow = !0, Cg = r);
    }, Av = function(n) {
        co(n) || (n = {}), n.preventDefault = n.isNormalizer = n.allowClicks = !0, n.type || (n.type = "wheel,touch"), n.debounce = !!n.debounce, n.id = n.id || "normalizer";
        var r = n, o = r.normalizeScrollX, s = r.momentum, a = r.allowNestedScroll, f = r.onRelease, d, h, g = zn(n.target) || Xn, m = ne.core.globals().ScrollSmoother, w = m && m.get(), k = Ri && (n.content && zn(n.content) || w && n.content !== !1 && !w.smooth() && w.content()), _ = Gi(g, Dt), x = Gi(g, yn), v = 1, T = (vt.isTouch && Me.visualViewport ? Me.visualViewport.scale * Me.visualViewport.width : Me.outerWidth) / Me.innerWidth, N = 0, O = nn(s) ? function() {
            return s(d);
        } : function() {
            return s || 2.8;
        }, I, D, F = u0(g, n.type, !0, a), j = function() {
            return D = !1;
        }, b = Ir, q = Ir, G = function() {
            h = Gr(g, Dt), q = gl(Ri ? 1 : 0, h), o && (b = gl(0, Gr(g, yn))), I = wo;
        }, X = function() {
            k._gsap.y = sl(parseFloat(k._gsap.y) + _.offset) + "px", k.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(k._gsap.y) + ", 0, 1)", _.offset = _.cacheID = 0;
        }, ce = function() {
            if (D) {
                requestAnimationFrame(j);
                var W = sl(d.deltaY / 2), Q = q(_.v - W);
                if (k && Q !== _.v + _.offset) {
                    _.offset = Q - _.v;
                    var C = sl((parseFloat(k && k._gsap.y) || 0) - _.offset);
                    k.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + C + ", 0, 1)", k._gsap.y = C + "px", _.cacheID = Ae.cache, oi();
                }
                return !0;
            }
            _.offset && X(), D = !0;
        }, K, fe, ae, we, le = function() {
            G(), K.isActive() && K.vars.scrollY > h && (_() > h ? K.progress(1) && _(h) : K.resetTo("scrollY", h));
        };
        return k && ne.set(k, {
            y: "+=0"
        }), n.ignoreCheck = function(J) {
            return Ri && J.type === "touchmove" && ce() || v > 1.05 && J.type !== "touchstart" || d.isGesturing || J.touches && J.touches.length > 1;
        }, n.onPress = function() {
            D = !1;
            var J = v;
            v = sl((Me.visualViewport && Me.visualViewport.scale || 1) / T), K.pause(), J !== v && mf(g, v > 1.01 ? !0 : o ? !1 : "x"), fe = x(), ae = _(), G(), I = wo;
        }, n.onRelease = n.onGestureStart = function(J, W) {
            if (_.offset && X(), !W) we.restart(!0);
            else {
                Ae.cache++;
                var Q = O(), C, E;
                o && (C = x(), E = C + Q * .05 * -J.velocityX / .227, Q *= xg(x, C, E, Gr(g, yn)), K.vars.scrollX = b(E)), C = _(), E = C + Q * .05 * -J.velocityY / .227, Q *= xg(_, C, E, Gr(g, Dt)), K.vars.scrollY = q(E), K.invalidate().duration(Q).play(.01), (Ri && K.vars.scrollY >= h || C >= h - 1) && ne.to({}, {
                    onUpdate: le,
                    duration: Q
                });
            }
            f && f(J);
        }, n.onWheel = function() {
            K._ts && K.pause(), en() - N > 1e3 && (I = 0, N = en());
        }, n.onChange = function(J, W, Q, C, E) {
            if (wo !== I && G(), W && o && x(b(C[2] === W ? fe + (J.startX - J.x) : x() + W - C[1])), Q) {
                _.offset && X();
                var U = E[2] === Q, de = U ? ae + J.startY - J.y : _() + Q - E[1], ie = q(de);
                U && de !== ie && (ae += ie - de), _(ie);
            }
            (Q || W) && oi();
        }, n.onEnable = function() {
            mf(g, o ? !1 : "x"), be.addEventListener("refresh", le), It(Me, "resize", le), _.smooth && (_.target.style.scrollBehavior = "auto", _.smooth = x.smooth = !1), F.enable();
        }, n.onDisable = function() {
            mf(g, !0), Ft(Me, "resize", le), be.removeEventListener("refresh", le), F.kill();
        }, n.lockAxis = n.lockAxis !== !1, d = new vt(n), d.iOS = Ri, Ri && !_() && _(1), Ri && ne.ticker.add(Ir), we = d._dc, K = ne.to(d, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: o ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: a0(_, _(), function() {
                    return K.pause();
                })
            },
            onUpdate: oi,
            onComplete: we.vars.onComplete
        }), d;
    };
    be.sort = function(c) {
        if (nn(c)) return ze.sort(c);
        var n = Me.pageYOffset || 0;
        return be.getAll().forEach(function(r) {
            return r._sortY = r.trigger ? n + r.trigger.getBoundingClientRect().top : r.start + Me.innerHeight;
        }), ze.sort(c || function(r, o) {
            return (r.vars.refreshPriority || 0) * -1e6 + (r.vars.containerAnimation ? 1e6 : r._sortY) - ((o.vars.containerAnimation ? 1e6 : o._sortY) + (o.vars.refreshPriority || 0) * -1e6);
        });
    };
    be.observe = function(c) {
        return new vt(c);
    };
    be.normalizeScroll = function(c) {
        if (typeof c > "u") return pn;
        if (c === !0 && pn) return pn.enable();
        if (c === !1) {
            pn && pn.kill(), pn = c;
            return;
        }
        var n = c instanceof vt ? c : Av(c);
        return pn && pn.target === n.target && pn.kill(), ko(n.target) && (pn = n), n;
    };
    be.core = {
        _getVelocityProp: jf,
        _inputObserver: u0,
        _scrollers: Ae,
        _proxies: Wr,
        bridge: {
            ss: function() {
                hr || xo("scrollStart"), hr = en();
            },
            ref: function() {
                return Jt;
            }
        }
    };
    Qm() && ne.registerPlugin(be);
    const Ov = {
        meta: {
            title: {
                en: "PXL Clock | Time. Design. Expression.",
                de: "PXL Clock | Zeit. Design. Ausdruck.",
                fr: "PXL Clock | Le temps. Design. Expression.",
                es: "PXL Clock | Tiempo. Diseño. Expresión.",
                it: "PXL Clock | Tempo. Design. Espressione.",
                pl: "PXL Clock | Czas. Design. Ekspresja."
            },
            description: {
                en: "A handcrafted 24x24 LED pixel clock. Limited to 100 pieces. Design object meets creative playground.",
                de: "Eine handgefertigte 24x24 LED-Pixeluhr. Limitiert auf 100 Stück. Designobjekt trifft kreativen Spielplatz.",
                fr: "Une horloge à pixels LED 24x24 artisanale. Limitée à 100 pièces. Objet design et terrain de jeu créatif.",
                es: "Un reloj de píxeles LED 24x24 artesanal. Limitado a 100 unidades. Objeto de diseño y patio de juegos creativo.",
                it: "Un orologio a pixel LED 24x24 artigianale. Limitato a 100 pezzi. Oggetto di design e parco giochi creativo.",
                pl: "Ręcznie wykonany zegar pikselowy LED 24x24. Limitowany do 100 sztuk. Obiekt designerski i kreatywny plac zabaw."
            }
        },
        nav: {
            features: {
                en: "Features",
                de: "Funktionen",
                fr: "Fonctionnalités",
                es: "Características",
                it: "Caratteristiche",
                pl: "Funkcje"
            },
            design: {
                en: "Design",
                de: "Design",
                fr: "Design",
                es: "Diseño",
                it: "Design",
                pl: "Design"
            },
            app: {
                en: "App",
                de: "App",
                fr: "Appli",
                es: "App",
                it: "App",
                pl: "Aplikacja"
            },
            appdev: {
                en: "Developer",
                de: "Entwickler",
                fr: "Développeur",
                es: "Desarrollador",
                it: "Sviluppatore",
                pl: "Programista"
            },
            specs: {
                en: "Specs",
                de: "Specs",
                fr: "Specs",
                es: "Especificaciones",
                it: "Specifiche",
                pl: "Specyfikacja"
            },
            preorder: {
                en: "Pre-Order",
                de: "Vorbestellen",
                fr: "Précommander",
                es: "Pre-pedido",
                it: "Pre-ordine",
                pl: "Zamów"
            }
        },
        hero: {
            badge: {
                en: "Limited Edition — Only 100 Units",
                de: "Limitierte Auflage — Nur 100 Stück",
                fr: "Édition Limitée — Seulement 100 Unités",
                es: "Edición Limitada — Solo 100 Unidades",
                it: "Edizione Limitata — Solo 100 Unità",
                pl: "Edycja Limitowana — Tylko 100 Sztuk"
            },
            title_line1: {
                en: "Time.",
                de: "Zeit.",
                fr: "Le temps.",
                es: "Tiempo.",
                it: "Tempo.",
                pl: "Czas."
            },
            title_line2: {
                en: "Design.",
                de: "Design.",
                fr: "Design.",
                es: "Diseño.",
                it: "Design.",
                pl: "Design."
            },
            title_line3: {
                en: "Expression.",
                de: "Ausdruck.",
                fr: "Expression.",
                es: "Expresión.",
                it: "Espressione.",
                pl: "Ekspresja."
            },
            subtitle: {
                en: "Designed for spaces that want to tell more. For a community that codes in color.",
                de: "Entworfen für Räume, die mehr erzählen wollen. Für eine Community, die in Farbe programmiert.",
                fr: "Conçu pour des espaces qui veulent en dire plus. Pour une communauté qui code en couleur.",
                es: "Diseñado para espacios que quieren contar más. Para una comunidad que programa en color.",
                it: "Progettato per spazi che vogliono raccontare di più. Per una comunità che programma a colori.",
                pl: "Zaprojektowany dla przestrzeni, które chcą mówić więcej. Dla społeczności, która programuje w kolorze."
            },
            cta_primary: {
                en: "Pre-Order Now",
                de: "Jetzt vorbestellen",
                fr: "Précommander",
                es: "Pre-ordenar ahora",
                it: "Pre-ordina ora",
                pl: "Zamów teraz"
            },
            cta_secondary: {
                en: "Discover More",
                de: "Mehr erfahren",
                fr: "En savoir plus",
                es: "Descubrir más",
                it: "Scopri di più",
                pl: "Dowiedz się więcej"
            },
            scroll: {
                en: "Scroll to explore",
                de: "Scrollen zum Entdecken",
                fr: "Défiler pour explorer",
                es: "Desplázate para explorar",
                it: "Scorri per esplorare",
                pl: "Przewiń, aby odkryć"
            }
        },
        marquee: {
            leds: {
                en: "576 RGB LEDs",
                de: "576 RGB-LEDs",
                fr: "576 LEDs RGB",
                es: "576 LEDs RGB",
                it: "576 LED RGB",
                pl: "576 diod RGB LED"
            },
            pixels: {
                en: "24 x 24 Pixels",
                de: "24 x 24 Pixel",
                fr: "24 x 24 Pixels",
                es: "24 x 24 Píxeles",
                it: "24 x 24 Pixel",
                pl: "24 x 24 piksele"
            },
            glass: {
                en: "Handcrafted Glass",
                de: "Handgefertigtes Glas",
                fr: "Verre artisanal",
                es: "Vidrio artesanal",
                it: "Vetro artigianale",
                pl: "Ręcznie wykonane szkło"
            },
            ota: {
                en: "Over-the-Air Updates",
                de: "Over-the-Air Updates",
                fr: "Mises à jour OTA",
                es: "Actualizaciones OTA",
                it: "Aggiornamenti OTA",
                pl: "Aktualizacje bezprzewodowe"
            },
            programmable: {
                en: "Fully Programmable",
                de: "Vollständig programmierbar",
                fr: "Entièrement programmable",
                es: "Totalmente programable",
                it: "Completamente programmabile",
                pl: "W pełni programowalny"
            },
            made_in: {
                en: "Made in Germany",
                de: "Made in Germany",
                fr: "Fabriqué en Allemagne",
                es: "Hecho en Alemania",
                it: "Made in Germany",
                pl: "Made in Germany"
            }
        },
        features: {
            tag: {
                en: "Why PXL Clock",
                de: "Warum PXL Clock",
                fr: "Pourquoi PXL Clock",
                es: "Por qué PXL Clock",
                it: "Perché PXL Clock",
                pl: "Dlaczego PXL Clock"
            },
            title_line1: {
                en: "Not just a clock.",
                de: "Nicht nur eine Uhr.",
                fr: "Plus qu'une horloge.",
                es: "No solo un reloj.",
                it: "Non solo un orologio.",
                pl: "Nie tylko zegar."
            },
            title_line2: {
                en: "A creative playground.",
                de: "Ein kreativer Spielplatz.",
                fr: "Un terrain de jeu créatif.",
                es: "Un patio de juegos creativo.",
                it: "Un parco giochi creativo.",
                pl: "Kreatywny plac zabaw."
            },
            card1_title: {
                en: "576 RGB Pixels",
                de: "576 RGB-Pixel",
                fr: "576 pixels RGB",
                es: "576 píxeles RGB",
                it: "576 pixel RGB",
                pl: "576 pikseli RGB"
            },
            card1_desc: {
                en: "A vibrant 24x24 grid of individually controllable LEDs. Each pixel tells part of your story.",
                de: "Ein lebendiges 24x24-Raster aus einzeln steuerbaren LEDs. Jeder Pixel erzählt einen Teil Ihrer Geschichte.",
                fr: "Une grille vibrante 24x24 de LEDs contrôlables individuellement. Chaque pixel raconte une partie de votre histoire.",
                es: "Una vibrante cuadrícula 24x24 de LEDs controlables individualmente. Cada píxel cuenta parte de tu historia.",
                it: "Una vibrante griglia 24x24 di LED controllabili singolarmente. Ogni pixel racconta parte della tua storia.",
                pl: "Żywa siatka 24x24 indywidualnie sterowanych diod LED. Każdy piksel opowiada część Twojej historii."
            },
            card2_title: {
                en: "Handcrafted Glass",
                de: "Handgefertigtes Glas",
                fr: "Verre artisanal",
                es: "Vidrio artesanal",
                it: "Vetro artigianale",
                pl: "Ręcznie wykonane szkło"
            },
            card2_desc: {
                en: "Each frame is precision-crafted from real glass. Unique character in every single unit.",
                de: "Jeder Rahmen ist präzise aus echtem Glas gefertigt. Einzigartiger Charakter in jedem einzelnen Stück.",
                fr: "Chaque cadre est fabriqué avec précision en verre véritable. Un caractère unique dans chaque unité.",
                es: "Cada marco está fabricado con precisión en vidrio real. Carácter único en cada unidad.",
                it: "Ogni cornice è realizzata con precisione in vero vetro. Carattere unico in ogni singola unità.",
                pl: "Każda rama jest precyzyjnie wykonana z prawdziwego szkła. Unikalny charakter w każdej sztuce."
            },
            card3_title: {
                en: "Fully Programmable",
                de: "Vollständig programmierbar",
                fr: "Entièrement programmable",
                es: "Totalmente programable",
                it: "Completamente programmabile",
                pl: "W pełni programowalny"
            },
            card3_desc: {
                en: "Create your own clock faces, animations, and pixel art with C# or F#. Your imagination, your display.",
                de: "Erstellen Sie eigene Zifferblätter, Animationen und Pixel-Art mit C# oder F#. Ihre Fantasie, Ihr Display.",
                fr: "Créez vos propres cadrans, animations et pixel art avec C# ou F#. Votre imagination, votre affichage.",
                es: "Crea tus propias carátulas, animaciones y pixel art con C# o F#. Tu imaginación, tu pantalla.",
                it: "Crea i tuoi quadranti, animazioni e pixel art con C# o F#. La tua immaginazione, il tuo display.",
                pl: "Twórz własne tarcze zegara, animacje i pixel art w C# lub F#. Twoja wyobraźnia, Twój wyświetlacz."
            },
            card4_title: {
                en: "OTA Updates",
                de: "OTA Updates",
                fr: "Mises à jour OTA",
                es: "Actualizaciones OTA",
                it: "Aggiornamenti OTA",
                pl: "Aktualizacje OTA"
            },
            card4_desc: {
                en: "Your clock stays fresh with over-the-air updates. New features delivered seamlessly.",
                de: "Ihre Uhr bleibt aktuell mit Over-the-Air-Updates. Neue Funktionen werden nahtlos geliefert.",
                fr: "Votre horloge reste à jour avec les mises à jour OTA. Nouvelles fonctionnalités livrées sans effort.",
                es: "Tu reloj se mantiene actualizado con actualizaciones OTA. Nuevas funciones entregadas sin problemas.",
                it: "Il tuo orologio rimane aggiornato con gli aggiornamenti OTA. Nuove funzionalità consegnate senza problemi.",
                pl: "Twój zegar pozostaje aktualny dzięki aktualizacjom bezprzewodowym. Nowe funkcje dostarczane bezproblemowo."
            },
            showcase_tag: {
                en: "Design Philosophy",
                de: "Design-Philosophie",
                fr: "Philosophie de design",
                es: "Filosofía de diseño",
                it: "Filosofia del design",
                pl: "Filozofia designu"
            },
            showcase_title: {
                en: "Where Art Meets Technology",
                de: "Wo Kunst auf Technologie trifft",
                fr: "Où l'art rencontre la technologie",
                es: "Donde el arte se encuentra con la tecnología",
                it: "Dove l'arte incontra la tecnologia",
                pl: "Gdzie sztuka spotyka technologię"
            },
            showcase_text: {
                en: "Every PXL Clock is a statement piece. The deliberate simplicity of the frame — available in black or white — lets the vibrant pixel display take center stage. It's not just about telling time; it's about making a statement.",
                de: "Jede PXL Clock ist ein Statement-Stück. Die bewusste Schlichtheit des Rahmens — erhältlich in Schwarz oder Weiß — lässt das lebendige Pixel-Display im Mittelpunkt stehen. Es geht nicht nur darum, die Zeit anzuzeigen; es geht darum, ein Statement zu setzen.",
                fr: "Chaque PXL Clock est une pièce de caractère. La simplicité délibérée du cadre — disponible en noir ou blanc — laisse l'écran pixel vibrant occuper le devant de la scène. Il ne s'agit pas seulement de donner l'heure; il s'agit de faire une déclaration.",
                es: "Cada PXL Clock es una pieza de declaración. La simplicidad deliberada del marco — disponible en negro o blanco — deja que la vibrante pantalla de píxeles sea el centro de atención. No se trata solo de dar la hora; se trata de hacer una declaración.",
                it: "Ogni PXL Clock è un pezzo di carattere. La semplicità deliberata della cornice — disponibile in nero o bianco — lascia che il vibrante display a pixel sia al centro dell'attenzione. Non si tratta solo di dare l'ora; si tratta di fare una dichiarazione.",
                pl: "Każdy PXL Clock to element dekoracyjny. Celowa prostota ramy — dostępna w czerni lub bieli — pozwala żywemu wyświetlaczowi pikselowemu być w centrum uwagi. Nie chodzi tylko o pokazywanie czasu; chodzi o wyrażenie siebie."
            },
            showcase_list1: {
                en: "Premium build quality",
                de: "Premium-Verarbeitungsqualität",
                fr: "Qualité de fabrication premium",
                es: "Calidad de construcción premium",
                it: "Qualità costruttiva premium",
                pl: "Najwyższa jakość wykonania"
            },
            showcase_list2: {
                en: "Minimalist design language",
                de: "Minimalistische Designsprache",
                fr: "Langage de design minimaliste",
                es: "Lenguaje de diseño minimalista",
                it: "Linguaggio di design minimalista",
                pl: "Minimalistyczny język designu"
            },
            showcase_list3: {
                en: "Perfect desktop companion",
                de: "Perfekter Desktop-Begleiter",
                fr: "Compagnon de bureau parfait",
                es: "Compañero de escritorio perfecto",
                it: "Compagno da scrivania perfetto",
                pl: "Idealny towarzysz na biurko"
            }
        },
        design: {
            tag: {
                en: "More Than Technology",
                de: "Mehr als Technologie",
                fr: "Plus que de la technologie",
                es: "Más que tecnología",
                it: "Più che tecnologia",
                pl: "Więcej niż technologia"
            },
            title_line1: {
                en: "Not Just Another",
                de: "Nicht nur ein weiteres",
                fr: "Pas juste un autre",
                es: "No solo otro",
                it: "Non solo un altro",
                pl: "Nie tylko kolejny"
            },
            title_line2: {
                en: "LED Gadget.",
                de: "LED-Gadget.",
                fr: "gadget LED.",
                es: "gadget LED.",
                it: "gadget LED.",
                pl: "gadżet LED."
            },
            intro: {
                en: "The PXL Clock isn't a blinking toy for the kids' room. It's a statement piece — a beautiful furniture object that commands attention in living rooms, studios, and offices. Like an ever-changing painting, it draws envious glances from visitors who've never seen anything quite like it.",
                de: "Die PXL Clock ist kein blinkendes Spielzeug fürs Kinderzimmer. Es ist ein Statement-Stück — ein schönes Möbelobjekt, das in Wohnzimmern, Studios und Büros Aufmerksamkeit erregt. Wie ein sich ständig veränderndes Gemälde zieht es neidische Blicke von Besuchern auf sich, die noch nie etwas Vergleichbares gesehen haben.",
                fr: "La PXL Clock n'est pas un jouet clignotant pour la chambre des enfants. C'est une pièce de caractère — un bel objet de mobilier qui attire l'attention dans les salons, studios et bureaux. Comme une peinture en constante évolution, elle attire les regards envieux des visiteurs qui n'ont jamais rien vu de tel.",
                es: "El PXL Clock no es un juguete parpadeante para la habitación de los niños. Es una pieza de declaración — un hermoso objeto de mobiliario que llama la atención en salas de estar, estudios y oficinas. Como una pintura en constante cambio, atrae las miradas envidiosas de los visitantes que nunca han visto nada parecido.",
                it: "Il PXL Clock non è un giocattolo lampeggiante per la cameretta dei bambini. È un pezzo di carattere — un bellissimo oggetto d'arredo che attira l'attenzione in soggiorni, studi e uffici. Come un dipinto in continua evoluzione, attira gli sguardi invidiosi dei visitatori che non hanno mai visto nulla di simile.",
                pl: "PXL Clock to nie migający gadżet do pokoju dziecięcego. To element dekoracyjny — piękny obiekt meblowy, który przyciąga uwagę w salonach, studiach i biurach. Jak ciągle zmieniający się obraz, przyciąga zazdrosne spojrzenia gości, którzy nigdy nie widzieli czegoś podobnego."
            },
            art_title: {
                en: "Art Needs No Explanation",
                de: "Kunst braucht keine Erklärung",
                fr: "L'art n'a pas besoin d'explication",
                es: "El arte no necesita explicación",
                it: "L'arte non ha bisogno di spiegazioni",
                pl: "Sztuka nie wymaga wyjaśnień"
            },
            art_quote: {
                en: "Art doesn't need to be explained — it simply works. The PXL Clock isn't art, but it has the same effect. At first glance, you feel the depth and vibrancy. Look closer, and you discover countless fascinating details: each pixel glows from its own light source, every cell has its own small world, the lines vary in brightness, and the reflections in the glass bring everything to life.",
                de: "Kunst muss nicht erklärt werden — sie funktioniert einfach. Die PXL Clock ist keine Kunst, aber sie hat denselben Effekt. Auf den ersten Blick spürt man die Tiefe und Lebendigkeit. Schaut man genauer hin, entdeckt man unzählige faszinierende Details: Jeder Pixel leuchtet aus seiner eigenen Lichtquelle, jede Zelle hat ihre eigene kleine Welt, die Linien variieren in der Helligkeit, und die Reflexionen im Glas bringen alles zum Leben.",
                fr: "L'art n'a pas besoin d'être expliqué — il fonctionne simplement. La PXL Clock n'est pas de l'art, mais elle a le même effet. Au premier regard, vous ressentez la profondeur et la vivacité. Regardez de plus près, et vous découvrez d'innombrables détails fascinants : chaque pixel brille de sa propre source lumineuse, chaque cellule a son propre petit monde, les lignes varient en luminosité, et les reflets dans le verre donnent vie à tout.",
                es: "El arte no necesita explicación — simplemente funciona. El PXL Clock no es arte, pero tiene el mismo efecto. A primera vista, sientes la profundidad y la vivacidad. Mira más de cerca y descubrirás innumerables detalles fascinantes: cada píxel brilla desde su propia fuente de luz, cada celda tiene su propio pequeño mundo, las líneas varían en brillo, y los reflejos en el vidrio dan vida a todo.",
                it: "L'arte non ha bisogno di essere spiegata — funziona semplicemente. Il PXL Clock non è arte, ma ha lo stesso effetto. A prima vista, senti la profondità e la vivacità. Guarda più da vicino e scoprirai innumerevoli dettagli affascinanti: ogni pixel brilla dalla propria fonte di luce, ogni cella ha il suo piccolo mondo, le linee variano in luminosità e i riflessi nel vetro danno vita a tutto.",
                pl: "Sztuka nie potrzebuje wyjaśnień — po prostu działa. PXL Clock nie jest sztuką, ale ma ten sam efekt. Na pierwszy rzut oka czujesz głębię i żywotność. Przyjrzyj się bliżej, a odkryjesz niezliczone fascynujące szczegóły: każdy piksel świeci z własnego źródła światła, każda komórka ma swój własny mały świat, linie różnią się jasnością, a odbicia w szkle ożywiają wszystko."
            },
            art_desc: {
                en: "A stylish accessory with real depth — inviting you to discover something new, again and again.",
                de: "Ein stilvolles Accessoire mit echter Tiefe — lädt Sie ein, immer wieder Neues zu entdecken.",
                fr: "Un accessoire élégant avec une vraie profondeur — vous invitant à découvrir quelque chose de nouveau, encore et encore.",
                es: "Un accesorio elegante con verdadera profundidad — invitándote a descubrir algo nuevo, una y otra vez.",
                it: "Un accessorio elegante con vera profondità — che ti invita a scoprire qualcosa di nuovo, ancora e ancora.",
                pl: "Stylowy dodatek z prawdziwą głębią — zapraszający do odkrywania czegoś nowego, raz za razem."
            },
            fire_title: {
                en: "576 Small Fires",
                de: "576 kleine Feuer",
                fr: "576 petits feux",
                es: "576 pequeños fuegos",
                it: "576 piccoli fuochi",
                pl: "576 małych ogni"
            },
            fire_quote: {
                en: "Fire has vanished from our daily lives — it only burns in furnaces, engines, and heaters now. The PXL Clock is like a small campfire — it radiates something meditative. We've observed how people who immerse themselves in its gentle animations and flowing color gradients quickly become fascinated.",
                de: "Feuer ist aus unserem Alltag verschwunden — es brennt nur noch in Öfen, Motoren und Heizungen. Die PXL Clock ist wie ein kleines Lagerfeuer — sie strahlt etwas Meditatives aus. Wir haben beobachtet, wie Menschen, die sich in ihre sanften Animationen und fließenden Farbverläufe vertiefen, schnell fasziniert werden.",
                fr: "Le feu a disparu de notre vie quotidienne — il ne brûle plus que dans les fours, les moteurs et les radiateurs. La PXL Clock est comme un petit feu de camp — elle dégage quelque chose de méditatif. Nous avons observé comment les gens qui s'immergent dans ses animations douces et ses dégradés de couleurs fluides deviennent rapidement fascinés.",
                es: "El fuego ha desaparecido de nuestra vida diaria — ahora solo arde en hornos, motores y calentadores. El PXL Clock es como una pequeña fogata — irradia algo meditativo. Hemos observado cómo las personas que se sumergen en sus suaves animaciones y degradados de colores fluidos rápidamente quedan fascinadas.",
                it: "Il fuoco è scomparso dalla nostra vita quotidiana — brucia solo in forni, motori e riscaldamenti ora. Il PXL Clock è come un piccolo falò — irradia qualcosa di meditativo. Abbiamo osservato come le persone che si immergono nelle sue dolci animazioni e nei gradienti di colore fluidi diventano rapidamente affascinate.",
                pl: "Ogień zniknął z naszego codziennego życia — teraz płonie tylko w piecach, silnikach i grzejnikach. PXL Clock jest jak małe ognisko — emanuje czymś medytacyjnym. Zaobserwowaliśmy, jak ludzie zanurzający się w jego delikatnych animacjach i płynnych gradientach kolorów szybko stają się zafascynowani."
            },
            fire_desc: {
                en: "No moment is like another. Nothing repeats. The image constantly changes in a calming, almost hypnotic way. You can simply sit, watch the clock, and find complete peace — while time passes quietly and serenely.",
                de: "Kein Moment ist wie der andere. Nichts wiederholt sich. Das Bild ändert sich ständig auf eine beruhigende, fast hypnotische Weise. Sie können einfach sitzen, die Uhr betrachten und vollkommene Ruhe finden — während die Zeit ruhig und gelassen vergeht.",
                fr: "Aucun moment n'est semblable à un autre. Rien ne se répète. L'image change constamment de manière apaisante, presque hypnotique. Vous pouvez simplement vous asseoir, regarder l'horloge et trouver une paix complète — tandis que le temps passe tranquillement et sereinement.",
                es: "Ningún momento es igual a otro. Nada se repite. La imagen cambia constantemente de una manera calmante, casi hipnótica. Puedes simplemente sentarte, mirar el reloj y encontrar paz completa — mientras el tiempo pasa tranquila y serenamente.",
                it: "Nessun momento è uguale a un altro. Niente si ripete. L'immagine cambia costantemente in modo calmante, quasi ipnotico. Puoi semplicemente sederti, guardare l'orologio e trovare pace completa — mentre il tempo passa tranquillamente e serenamente.",
                pl: "Żaden moment nie jest taki sam. Nic się nie powtarza. Obraz ciągle się zmienia w uspokajający, niemal hipnotyczny sposób. Możesz po prostu usiąść, patrzeć na zegar i znaleźć pełny spokój — podczas gdy czas płynie cicho i spokojnie."
            },
            material1_title: {
                en: "Real Float Glass",
                de: "Echtes Floatglas",
                fr: "Vrai verre flotté",
                es: "Vidrio flotado real",
                it: "Vero vetro float",
                pl: "Prawdziwe szkło float"
            },
            material1_desc: {
                en: "No plastic. Genuine glass surface with beautiful light reflections and premium feel.",
                de: "Kein Plastik. Echte Glasoberfläche mit schönen Lichtreflexionen und Premium-Gefühl.",
                fr: "Pas de plastique. Surface en verre véritable avec de belles réflexions lumineuses et une sensation premium.",
                es: "Sin plástico. Superficie de vidrio genuino con hermosos reflejos de luz y sensación premium.",
                it: "Niente plastica. Superficie in vetro genuino con bellissimi riflessi di luce e sensazione premium.",
                pl: "Bez plastiku. Prawdziwa szklana powierzchnia z pięknymi odbiciami światła i premium wyglądem."
            },
            material2_title: {
                en: "Handcrafted Frame",
                de: "Handgefertigter Rahmen",
                fr: "Cadre artisanal",
                es: "Marco artesanal",
                it: "Cornice artigianale",
                pl: "Ręcznie wykonana rama"
            },
            material2_desc: {
                en: "Each frame assembled by hand. Available in elegant black or white finish.",
                de: "Jeder Rahmen von Hand montiert. Erhältlich in elegantem Schwarz oder Weiß.",
                fr: "Chaque cadre assemblé à la main. Disponible en finition noire ou blanche élégante.",
                es: "Cada marco ensamblado a mano. Disponible en acabado negro o blanco elegante.",
                it: "Ogni cornice assemblata a mano. Disponibile in elegante finitura nera o bianca.",
                pl: "Każda rama montowana ręcznie. Dostępna w eleganckim wykończeniu czarnym lub białym."
            },
            material3_title: {
                en: "576 Premium LEDs",
                de: "576 Premium-LEDs",
                fr: "576 LEDs premium",
                es: "576 LEDs premium",
                it: "576 LED premium",
                pl: "576 premium diod LED"
            },
            material3_desc: {
                en: "Super-bright RGB LEDs that shine in all colors — even in bright sunlight.",
                de: "Superhelle RGB-LEDs, die in allen Farben leuchten — auch bei hellem Sonnenlicht.",
                fr: "Des LEDs RGB super-brillantes qui brillent dans toutes les couleurs — même en plein soleil.",
                es: "LEDs RGB súper brillantes que brillan en todos los colores — incluso con luz solar brillante.",
                it: "LED RGB super-luminosi che brillano in tutti i colori — anche alla luce del sole.",
                pl: "Super jasne diody RGB LED świecące we wszystkich kolorach — nawet w jasnym świetle słonecznym."
            },
            material4_title: {
                en: "27.5 × 27.5 × 6 cm",
                de: "27,5 × 27,5 × 6 cm",
                fr: "27,5 × 27,5 × 6 cm",
                es: "27,5 × 27,5 × 6 cm",
                it: "27,5 × 27,5 × 6 cm",
                pl: "27,5 × 27,5 × 6 cm"
            },
            material4_desc: {
                en: "Compact dimensions. Weighs approx. 2 kg. A presence without overwhelming.",
                de: "Kompakte Abmessungen. Wiegt ca. 2 kg. Präsenz ohne zu überwältigen.",
                fr: "Dimensions compactes. Pèse environ 2 kg. Une présence sans submerger.",
                es: "Dimensiones compactas. Pesa aprox. 2 kg. Una presencia sin abrumar.",
                it: "Dimensioni compatte. Pesa circa 2 kg. Una presenza senza sopraffare.",
                pl: "Kompaktowe wymiary. Waży ok. 2 kg. Obecność bez przytłaczania."
            }
        },
        gallery: {
            tag: {
                en: "Gallery",
                de: "Galerie",
                fr: "Galerie",
                es: "Galería",
                it: "Galleria",
                pl: "Galeria"
            },
            title_line1: {
                en: "Infinite Possibilities.",
                de: "Unendliche Möglichkeiten.",
                fr: "Possibilités infinies.",
                es: "Posibilidades infinitas.",
                it: "Possibilità infinite.",
                pl: "Nieskończone możliwości."
            },
            title_line2: {
                en: "One Display.",
                de: "Ein Display.",
                fr: "Un seul écran.",
                es: "Una pantalla.",
                it: "Un solo display.",
                pl: "Jeden wyświetlacz."
            },
            label_clock: {
                en: "Clock Faces",
                de: "Zifferblätter",
                fr: "Cadrans",
                es: "Carátulas",
                it: "Quadranti",
                pl: "Tarcze zegara"
            },
            label_pixel: {
                en: "Pixel Art",
                de: "Pixel-Art",
                fr: "Pixel Art",
                es: "Pixel Art",
                it: "Pixel Art",
                pl: "Pixel Art"
            },
            label_retro: {
                en: "Retro Gaming",
                de: "Retro Gaming",
                fr: "Jeux rétro",
                es: "Juegos retro",
                it: "Retro Gaming",
                pl: "Retro Gaming"
            },
            label_lifestyle: {
                en: "In Your Space",
                de: "In Ihrem Raum",
                fr: "Dans votre espace",
                es: "En tu espacio",
                it: "Nel tuo spazio",
                pl: "W Twojej przestrzeni"
            }
        },
        app: {
            tag: {
                en: "Companion App",
                de: "Begleit-App",
                fr: "Application compagnon",
                es: "Aplicación complementaria",
                it: "App compagna",
                pl: "Aplikacja towarzysząca"
            },
            title_line1: {
                en: "Your Clock.",
                de: "Ihre Uhr.",
                fr: "Votre horloge.",
                es: "Tu reloj.",
                it: "Il tuo orologio.",
                pl: "Twój zegar."
            },
            title_line2: {
                en: "Your Rules.",
                de: "Ihre Regeln.",
                fr: "Vos règles.",
                es: "Tus reglas.",
                it: "Le tue regole.",
                pl: "Twoje zasady."
            },
            desc: {
                en: "The PXL App puts complete control at your fingertips. Configure every aspect of your clock — from stunning clock faces to smart automations that adapt to your lifestyle.",
                de: "Die PXL App gibt Ihnen die volle Kontrolle. Konfigurieren Sie jeden Aspekt Ihrer Uhr — von atemberaubenden Zifferblättern bis hin zu intelligenten Automatisierungen, die sich Ihrem Lebensstil anpassen.",
                fr: "L'application PXL met le contrôle total à portée de main. Configurez chaque aspect de votre horloge — des cadrans époustouflants aux automatisations intelligentes qui s'adaptent à votre style de vie.",
                es: "La aplicación PXL pone el control completo en tus manos. Configura cada aspecto de tu reloj — desde impresionantes carátulas hasta automatizaciones inteligentes que se adaptan a tu estilo de vida.",
                it: "L'app PXL mette il controllo completo a portata di mano. Configura ogni aspetto del tuo orologio — dai quadranti stupendi alle automazioni intelligenti che si adattano al tuo stile di vita.",
                pl: "Aplikacja PXL daje Ci pełną kontrolę. Skonfiguruj każdy aspekt swojego zegara — od oszałamiających tarcz po inteligentne automatyzacje dostosowane do Twojego stylu życia."
            },
            feature1_title: {
                en: "Clock Faces",
                de: "Zifferblätter",
                fr: "Cadrans",
                es: "Carátulas",
                it: "Quadranti",
                pl: "Tarcze zegara"
            },
            feature1_desc: {
                en: "Browse dozens of unique clock faces. Minimalist, playful, artistic — find your style.",
                de: "Durchstöbern Sie Dutzende einzigartiger Zifferblätter. Minimalistisch, verspielt, künstlerisch — finden Sie Ihren Stil.",
                fr: "Parcourez des dizaines de cadrans uniques. Minimaliste, ludique, artistique — trouvez votre style.",
                es: "Explora docenas de carátulas únicas. Minimalista, juguetona, artística — encuentra tu estilo.",
                it: "Sfoglia dozzine di quadranti unici. Minimalista, giocoso, artistico — trova il tuo stile.",
                pl: "Przeglądaj dziesiątki unikalnych tarcz. Minimalistyczne, zabawne, artystyczne — znajdź swój styl."
            },
            feature2_title: {
                en: "Day & Night Mode",
                de: "Tag & Nacht Modus",
                fr: "Mode jour & nuit",
                es: "Modo día y noche",
                it: "Modalità giorno e notte",
                pl: "Tryb dzienny i nocny"
            },
            feature2_desc: {
                en: "Set schedules for brightness. Dim at night, vibrant by day — automatically.",
                de: "Stellen Sie Zeitpläne für die Helligkeit ein. Gedimmt in der Nacht, lebendig am Tag — automatisch.",
                fr: "Définissez des horaires pour la luminosité. Tamisé la nuit, vibrant le jour — automatiquement.",
                es: "Establece horarios para el brillo. Tenue de noche, vibrante de día — automáticamente.",
                it: "Imposta programmi per la luminosità. Attenuato di notte, vibrante di giorno — automaticamente.",
                pl: "Ustaw harmonogramy jasności. Przyciemniony w nocy, żywy w dzień — automatycznie."
            },
            feature3_title: {
                en: "WiFi Setup",
                de: "WiFi-Einrichtung",
                fr: "Configuration WiFi",
                es: "Configuración WiFi",
                it: "Configurazione WiFi",
                pl: "Konfiguracja WiFi"
            },
            feature3_desc: {
                en: "Easy wireless configuration. Connect your clock to your network in seconds.",
                de: "Einfache drahtlose Konfiguration. Verbinden Sie Ihre Uhr in Sekunden mit Ihrem Netzwerk.",
                fr: "Configuration sans fil facile. Connectez votre horloge à votre réseau en quelques secondes.",
                es: "Configuración inalámbrica fácil. Conecta tu reloj a tu red en segundos.",
                it: "Configurazione wireless facile. Connetti il tuo orologio alla rete in pochi secondi.",
                pl: "Łatwa konfiguracja bezprzewodowa. Połącz zegar z siecią w kilka sekund."
            },
            feature4_title: {
                en: "Multi-Clock",
                de: "Multi-Clock",
                fr: "Multi-horloge",
                es: "Multi-reloj",
                it: "Multi-orologio",
                pl: "Multi-zegar"
            },
            feature4_desc: {
                en: "Own multiple PXL Clocks? Manage them all from one app. Sync or individualize.",
                de: "Besitzen Sie mehrere PXL Clocks? Verwalten Sie alle von einer App aus. Synchronisieren oder individualisieren.",
                fr: "Vous possédez plusieurs PXL Clocks? Gérez-les tous depuis une seule application. Synchronisez ou individualisez.",
                es: "¿Tienes múltiples PXL Clocks? Gestiónralos todos desde una app. Sincroniza o individualiza.",
                it: "Possiedi più PXL Clock? Gestiscili tutti da un'unica app. Sincronizza o personalizza.",
                pl: "Masz wiele zegarów PXL Clock? Zarządzaj nimi wszystkimi z jednej aplikacji. Synchronizuj lub indywidualizuj."
            },
            store_google_label: {
                en: "Get it on",
                de: "Jetzt bei",
                fr: "Télécharger sur",
                es: "Disponible en",
                it: "Scarica su",
                pl: "Pobierz z"
            },
            store_google: {
                en: "Google Play",
                de: "Google Play",
                fr: "Google Play",
                es: "Google Play",
                it: "Google Play",
                pl: "Google Play"
            },
            store_apple_label: {
                en: "Coming to",
                de: "Bald im",
                fr: "Bientôt sur",
                es: "Próximamente en",
                it: "Presto su",
                pl: "Wkrótce w"
            },
            store_apple: {
                en: "App Store",
                de: "App Store",
                fr: "App Store",
                es: "App Store",
                it: "App Store",
                pl: "App Store"
            }
        },
        code: {
            tag: {
                en: "For Developers",
                de: "Für Entwickler",
                fr: "Pour les développeurs",
                es: "Para desarrolladores",
                it: "Per sviluppatori",
                pl: "Dla programistów"
            },
            title_line1: {
                en: "Your Code.",
                de: "Ihr Code.",
                fr: "Votre code.",
                es: "Tu código.",
                it: "Il tuo codice.",
                pl: "Twój kod."
            },
            title_line2: {
                en: "Your Pixels.",
                de: "Ihre Pixel.",
                fr: "Vos pixels.",
                es: "Tus píxeles.",
                it: "I tuoi pixel.",
                pl: "Twoje piksele."
            },
            desc: {
                en: "Build custom applications using C# or F#. The PXL SDK provides everything you need to create stunning visualizations, games, and more.",
                de: "Erstellen Sie benutzerdefinierte Anwendungen mit C# oder F#. Das PXL SDK bietet alles, was Sie brauchen, um atemberaubende Visualisierungen, Spiele und mehr zu erstellen.",
                fr: "Créez des applications personnalisées avec C# ou F#. Le SDK PXL fournit tout ce dont vous avez besoin pour créer des visualisations époustouflantes, des jeux et plus encore.",
                es: "Crea aplicaciones personalizadas usando C# o F#. El SDK de PXL proporciona todo lo que necesitas para crear visualizaciones impresionantes, juegos y más.",
                it: "Crea applicazioni personalizzate usando C# o F#. L'SDK PXL fornisce tutto il necessario per creare visualizzazioni mozzafiato, giochi e altro.",
                pl: "Twórz niestandardowe aplikacje w C# lub F#. SDK PXL zapewnia wszystko, czego potrzebujesz do tworzenia oszałamiających wizualizacji, gier i więcej."
            },
            btn_github: {
                en: "View on GitHub",
                de: "Auf GitHub ansehen",
                fr: "Voir sur GitHub",
                es: "Ver en GitHub",
                it: "Visualizza su GitHub",
                pl: "Zobacz na GitHub"
            }
        },
        specs: {
            tag: {
                en: "Technical Specs",
                de: "Technische Daten",
                fr: "Spécifications techniques",
                es: "Especificaciones técnicas",
                it: "Specifiche tecniche",
                pl: "Specyfikacja techniczna"
            },
            title_line1: {
                en: "Built to Last.",
                de: "Gebaut für die Ewigkeit.",
                fr: "Construit pour durer.",
                es: "Construido para durar.",
                it: "Costruito per durare.",
                pl: "Zbudowany, by przetrwać."
            },
            title_line2: {
                en: "Built to Impress.",
                de: "Gebaut zum Beeindrucken.",
                fr: "Construit pour impressionner.",
                es: "Construido para impresionar.",
                it: "Costruito per impressionare.",
                pl: "Zbudowany, by zachwycać."
            },
            label_resolution: {
                en: "Pixel Resolution",
                de: "Pixelauflösung",
                fr: "Résolution en pixels",
                es: "Resolución de píxeles",
                it: "Risoluzione pixel",
                pl: "Rozdzielczość pikseli"
            },
            label_leds: {
                en: "RGB LEDs",
                de: "RGB-LEDs",
                fr: "LEDs RGB",
                es: "LEDs RGB",
                it: "LED RGB",
                pl: "Diody RGB LED"
            },
            label_colors: {
                en: "Colors",
                de: "Farben",
                fr: "Couleurs",
                es: "Colores",
                it: "Colori",
                pl: "Kolory"
            },
            label_connectivity: {
                en: "Connectivity",
                de: "Konnektivität",
                fr: "Connectivité",
                es: "Conectividad",
                it: "Connettività",
                pl: "Łączność"
            },
            label_updates: {
                en: "Updates",
                de: "Updates",
                fr: "Mises à jour",
                es: "Actualizaciones",
                it: "Aggiornamenti",
                pl: "Aktualizacje"
            },
            label_sdk: {
                en: "SDK Support",
                de: "SDK-Unterstützung",
                fr: "Support SDK",
                es: "Soporte SDK",
                it: "Supporto SDK",
                pl: "Wsparcie SDK"
            },
            detail_display: {
                en: "Display",
                de: "Display",
                fr: "Affichage",
                es: "Pantalla",
                it: "Display",
                pl: "Wyświetlacz"
            },
            detail_display_1: {
                en: "24x24 RGB LED Matrix",
                de: "24x24 RGB-LED-Matrix",
                fr: "Matrice LED RGB 24x24",
                es: "Matriz LED RGB 24x24",
                it: "Matrice LED RGB 24x24",
                pl: "Matryca LED RGB 24x24"
            },
            detail_display_2: {
                en: "576 individually addressable pixels",
                de: "576 individuell adressierbare Pixel",
                fr: "576 pixels adressables individuellement",
                es: "576 píxeles direccionables individualmente",
                it: "576 pixel indirizzabili singolarmente",
                pl: "576 indywidualnie adresowalnych pikseli"
            },
            detail_display_3: {
                en: "16.7 million color depth",
                de: "16,7 Millionen Farbtiefe",
                fr: "Profondeur de couleur de 16,7 millions",
                es: "Profundidad de color de 16,7 millones",
                it: "Profondità colore di 16,7 milioni",
                pl: "16,7 miliona głębi kolorów"
            },
            detail_display_4: {
                en: "Adjustable brightness",
                de: "Einstellbare Helligkeit",
                fr: "Luminosité réglable",
                es: "Brillo ajustable",
                it: "Luminosità regolabile",
                pl: "Regulowana jasność"
            },
            detail_materials: {
                en: "Materials",
                de: "Materialien",
                fr: "Matériaux",
                es: "Materiales",
                it: "Materiali",
                pl: "Materiały"
            },
            detail_materials_1: {
                en: "Handcrafted glass front",
                de: "Handgefertigte Glasfront",
                fr: "Façade en verre artisanale",
                es: "Frente de vidrio artesanal",
                it: "Frontale in vetro artigianale",
                pl: "Ręcznie wykonany szklany front"
            },
            detail_materials_2: {
                en: "Premium aluminum frame",
                de: "Premium-Aluminiumrahmen",
                fr: "Cadre en aluminium premium",
                es: "Marco de aluminio premium",
                it: "Cornice in alluminio premium",
                pl: "Aluminiowa rama premium"
            },
            detail_materials_3: {
                en: "Available in Black or White",
                de: "Erhältlich in Schwarz oder Weiß",
                fr: "Disponible en noir ou blanc",
                es: "Disponible en negro o blanco",
                it: "Disponibile in nero o bianco",
                pl: "Dostępny w czerni lub bieli"
            },
            detail_materials_4: {
                en: "Precision CNC machined",
                de: "Präzisions-CNC-gefertigt",
                fr: "Usiné CNC de précision",
                es: "Mecanizado CNC de precisión",
                it: "Lavorato CNC di precisione",
                pl: "Precyzyjnie obrobiony CNC"
            },
            detail_connectivity: {
                en: "Connectivity",
                de: "Konnektivität",
                fr: "Connectivité",
                es: "Conectividad",
                it: "Connettività",
                pl: "Łączność"
            },
            detail_connectivity_1: {
                en: "WiFi 802.11 b/g/n",
                de: "WiFi 802.11 b/g/n",
                fr: "WiFi 802.11 b/g/n",
                es: "WiFi 802.11 b/g/n",
                it: "WiFi 802.11 b/g/n",
                pl: "WiFi 802.11 b/g/n"
            },
            detail_connectivity_2: {
                en: "Companion mobile app",
                de: "Begleitende Mobil-App",
                fr: "Application mobile compagnon",
                es: "Aplicación móvil complementaria",
                it: "App mobile compagna",
                pl: "Towarzysząca aplikacja mobilna"
            },
            detail_connectivity_3: {
                en: "Cloud synchronization",
                de: "Cloud-Synchronisierung",
                fr: "Synchronisation cloud",
                es: "Sincronización en la nube",
                it: "Sincronizzazione cloud",
                pl: "Synchronizacja w chmurze"
            },
            detail_connectivity_4: {
                en: "Developer API access",
                de: "Entwickler-API-Zugang",
                fr: "Accès API développeur",
                es: "Acceso a API para desarrolladores",
                it: "Accesso API sviluppatore",
                pl: "Dostęp do API dla programistów"
            }
        },
        cta: {
            badge: {
                en: "Limited to 100 Units",
                de: "Limitiert auf 100 Stück",
                fr: "Limité à 100 unités",
                es: "Limitado a 100 unidades",
                it: "Limitato a 100 unità",
                pl: "Limitowane do 100 sztuk"
            },
            title_line1: {
                en: "Ready to Own",
                de: "Bereit, ein",
                fr: "Prêt à posséder",
                es: "¿Listo para poseer",
                it: "Pronto a possedere",
                pl: "Gotowy, by posiadać"
            },
            title_line2: {
                en: "a Piece of Art?",
                de: "Kunstwerk zu besitzen?",
                fr: "une œuvre d'art?",
                es: "una obra de arte?",
                it: "un'opera d'arte?",
                pl: "dzieło sztuki?"
            },
            desc: {
                en: "Join the exclusive first batch of PXL Clock owners. Each unit is numbered and comes with a certificate of authenticity.",
                de: "Werden Sie Teil der exklusiven ersten Charge von PXL Clock-Besitzern. Jedes Stück ist nummeriert und wird mit einem Echtheitszertifikat geliefert.",
                fr: "Rejoignez le premier lot exclusif de propriétaires de PXL Clock. Chaque unité est numérotée et accompagnée d'un certificat d'authenticité.",
                es: "Únete al exclusivo primer lote de propietarios de PXL Clock. Cada unidad está numerada y viene con un certificado de autenticidad.",
                it: "Unisciti al primo lotto esclusivo di proprietari di PXL Clock. Ogni unità è numerata e viene fornita con un certificato di autenticità.",
                pl: "Dołącz do ekskluzywnej pierwszej partii właścicieli PXL Clock. Każda sztuka jest numerowana i dostarczana z certyfikatem autentyczności."
            },
            price_label: {
                en: "Starting at",
                de: "Ab",
                fr: "À partir de",
                es: "Desde",
                it: "A partire da",
                pl: "Od"
            },
            price_note: {
                en: "Use code <strong>fsharp</strong> for EUR 50 off",
                de: "Code <strong>fsharp</strong> für EUR 50 Rabatt",
                fr: "Utilisez le code <strong>fsharp</strong> pour EUR 50 de réduction",
                es: "Usa el código <strong>fsharp</strong> para EUR 50 de descuento",
                it: "Usa il codice <strong>fsharp</strong> per EUR 50 di sconto",
                pl: "Użyj kodu <strong>fsharp</strong> i otrzymaj EUR 50 zniżki"
            },
            btn: {
                en: "Pre-Order Your PXL Clock",
                de: "PXL Clock vorbestellen",
                fr: "Précommander votre PXL Clock",
                es: "Pre-ordenar tu PXL Clock",
                it: "Pre-ordina il tuo PXL Clock",
                pl: "Zamów swój PXL Clock"
            },
            shipping_note: {
                en: "Free shipping within EU. Ships Q1 2025.",
                de: "Kostenloser Versand innerhalb der EU. Lieferung Q1 2025.",
                fr: "Livraison gratuite dans l'UE. Expédition T1 2025.",
                es: "Envío gratis dentro de la UE. Envío Q1 2025.",
                it: "Spedizione gratuita nell'UE. Spedizione Q1 2025.",
                pl: "Darmowa wysyłka w UE. Wysyłka Q1 2025."
            }
        },
        footer: {
            tagline: {
                en: "Time, Reimagined in Pixels",
                de: "Zeit, neu gedacht in Pixeln",
                fr: "Le temps, réinventé en pixels",
                es: "El tiempo, reimaginado en píxeles",
                it: "Il tempo, reimmaginato in pixel",
                pl: "Czas na nowo w pikselach"
            },
            col_product: {
                en: "Product",
                de: "Produkt",
                fr: "Produit",
                es: "Producto",
                it: "Prodotto",
                pl: "Produkt"
            },
            link_features: {
                en: "Features",
                de: "Funktionen",
                fr: "Fonctionnalités",
                es: "Características",
                it: "Caratteristiche",
                pl: "Funkcje"
            },
            link_design: {
                en: "Design",
                de: "Design",
                fr: "Design",
                es: "Diseño",
                it: "Design",
                pl: "Design"
            },
            link_specs: {
                en: "Specifications",
                de: "Spezifikationen",
                fr: "Spécifications",
                es: "Especificaciones",
                it: "Specifiche",
                pl: "Specyfikacja"
            },
            col_developers: {
                en: "Developers",
                de: "Entwickler",
                fr: "Développeurs",
                es: "Desarrolladores",
                it: "Sviluppatori",
                pl: "Programiści"
            },
            link_github: {
                en: "GitHub",
                de: "GitHub",
                fr: "GitHub",
                es: "GitHub",
                it: "GitHub",
                pl: "GitHub"
            },
            link_docs: {
                en: "Documentation",
                de: "Dokumentation",
                fr: "Documentation",
                es: "Documentación",
                it: "Documentazione",
                pl: "Dokumentacja"
            },
            link_discord: {
                en: "Discord Community",
                de: "Discord-Community",
                fr: "Communauté Discord",
                es: "Comunidad Discord",
                it: "Community Discord",
                pl: "Społeczność Discord"
            },
            col_company: {
                en: "Company",
                de: "Unternehmen",
                fr: "Entreprise",
                es: "Empresa",
                it: "Azienda",
                pl: "Firma"
            },
            link_about: {
                en: "About Us",
                de: "Über uns",
                fr: "À propos",
                es: "Sobre nosotros",
                it: "Chi siamo",
                pl: "O nas"
            },
            link_contact: {
                en: "Contact",
                de: "Kontakt",
                fr: "Contact",
                es: "Contacto",
                it: "Contatto",
                pl: "Kontakt"
            },
            link_bluesky: {
                en: "Bluesky",
                de: "Bluesky",
                fr: "Bluesky",
                es: "Bluesky",
                it: "Bluesky",
                pl: "Bluesky"
            },
            copyright: {
                en: "© 2025 Cumin & Potato GmbH. All rights reserved.",
                de: "© 2025 Cumin & Potato GmbH. Alle Rechte vorbehalten.",
                fr: "© 2025 Cumin & Potato GmbH. Tous droits réservés.",
                es: "© 2025 Cumin & Potato GmbH. Todos los derechos reservados.",
                it: "© 2025 Cumin & Potato GmbH. Tutti i diritti riservati.",
                pl: "© 2025 Cumin & Potato GmbH. Wszelkie prawa zastrzeżone."
            }
        }
    };
    Be.registerPlugin(be);
    const gu = [
        "en",
        "de",
        "fr",
        "es",
        "it",
        "pl"
    ], mu = "en";
    let Co = mu;
    function bv(c, n) {
        return n.split(".").reduce((r, o)=>r?.[o], c);
    }
    function yf(c) {
        const n = bv(Ov, c);
        return n && n[Co] ? n[Co] : n && n[mu] ? n[mu] : (console.warn(`Translation missing for key: ${c}`), c);
    }
    function c0() {
        document.querySelectorAll("[data-i18n]").forEach((n)=>{
            const r = n.getAttribute("data-i18n"), o = yf(r);
            n.hasAttribute("data-i18n-html") ? n.innerHTML = o : n.textContent = o;
        });
        const c = document.querySelector('meta[name="description"]');
        c && c.setAttribute("content", yf("meta.description")), document.title = yf("meta.title"), document.documentElement.lang = Co;
    }
    function Bv(c) {
        gu.includes(c) || (c = mu), Co = c, localStorage.setItem("pxl-lang", c), c0(), f0();
    }
    function f0() {
        document.querySelectorAll(".lang-btn").forEach((c)=>{
            c.classList.toggle("active", c.dataset.lang === Co);
        });
    }
    function Nv() {
        const c = navigator.language?.split("-")[0], n = document.querySelector(".lang-btn-browser");
        if (!n) return;
        if (!c || c === "en" || !gu.includes(c)) {
            n.style.display = "none";
            return;
        }
        n.dataset.lang = c, n.textContent = c.toUpperCase(), n.style.display = "";
        const r = document.querySelector(".lang-dropdown-menu");
        r && r.querySelectorAll(".lang-btn").forEach((s)=>{
            s.dataset.lang === c && (s.style.display = "none");
        });
    }
    function Fv() {
        const c = document.querySelector(".lang-dropdown"), n = document.querySelector(".lang-dropdown-toggle");
        if (!c || !n) return;
        n.addEventListener("click", (o)=>{
            o.stopPropagation(), c.classList.toggle("open");
        }), document.addEventListener("click", (o)=>{
            c.contains(o.target) || c.classList.remove("open");
        });
        const r = document.querySelector(".lang-dropdown-menu");
        r && r.querySelectorAll(".lang-btn").forEach((o)=>{
            o.addEventListener("click", ()=>{
                c.classList.remove("open");
            });
        });
    }
    function Iv() {
        const c = navigator.language?.split("-")[0], n = localStorage.getItem("pxl-lang");
        n && gu.includes(n) ? Co = n : c && gu.includes(c) && (Co = c), Nv(), Fv(), c0(), f0(), document.querySelectorAll(".lang-btn").forEach((r)=>{
            r.addEventListener("click", ()=>{
                Bv(r.dataset.lang);
            });
        });
    }
    document.addEventListener("DOMContentLoaded", ()=>{
        Iv(), jv(), Uv(), Gv(), Wv(), Vv(), Xv(), Hv(), qv(), document.body.classList.remove("is-loading"), document.body.classList.add("is-loaded");
    });
    function jv() {
        document.querySelectorAll('a[href^="#"]').forEach((c)=>{
            c.addEventListener("click", (n)=>{
                n.preventDefault();
                const r = document.querySelector(c.getAttribute("href"));
                if (r) {
                    const s = r.getBoundingClientRect().top + window.pageYOffset - 100;
                    window.scrollTo({
                        top: s,
                        behavior: "auto"
                    });
                }
            });
        });
    }
    function Uv() {
        const c = document.getElementById("pixel-trail");
        if (!c) return;
        if (window.innerWidth < 768) {
            c.style.display = "none";
            return;
        }
        const n = c.getContext("2d"), r = 6, o = [], s = .015, a = [
            "#00f0ff",
            "#ff00aa",
            "#7c3aed",
            "#22c55e",
            "#f59e0b"
        ];
        function f() {
            c.width = window.innerWidth, c.height = window.innerHeight;
        }
        f(), window.addEventListener("resize", f);
        let d = 0, h = 0, g = 0, m = 0;
        const w = [
            {
                dx: 0,
                dy: 0,
                chance: .7
            },
            {
                dx: -1,
                dy: 0,
                chance: .15
            },
            {
                dx: 1,
                dy: 0,
                chance: .15
            },
            {
                dx: 0,
                dy: -1,
                chance: .15
            },
            {
                dx: 0,
                dy: 1,
                chance: .15
            }
        ];
        function k(x = !1) {
            const v = Math.floor(g / r) * r, T = Math.floor(m / r) * r;
            !x && v === d && T === h || (d = v, h = T, w.forEach((N)=>{
                Math.random() < N.chance && o.push({
                    x: v + N.dx * r,
                    y: T + N.dy * r,
                    color: a[Math.floor(Math.random() * a.length)],
                    alpha: .4 + Math.random() * .2
                });
            }));
        }
        document.addEventListener("mousemove", (x)=>{
            g = x.clientX, m = x.clientY, k();
        }), window.addEventListener("scroll", ()=>{
            k(!0);
        }, {
            passive: !0
        });
        function _() {
            n.clearRect(0, 0, c.width, c.height);
            for(let x = o.length - 1; x >= 0; x--){
                const v = o[x];
                if (v.alpha -= s, v.alpha <= 0) {
                    o.splice(x, 1);
                    continue;
                }
                n.globalAlpha = v.alpha, n.fillStyle = v.color, n.fillRect(v.x, v.y, r, r);
            }
            n.globalAlpha = 1, requestAnimationFrame(_);
        }
        _();
    }
    function Gv() {
        Be.timeline({
            defaults: {
                ease: "power3.out"
            }
        }).from(".hero-bg-img", {
            opacity: 0,
            scale: 1.1,
            duration: 1.5
        }).from(".hero-badge", {
            opacity: 0,
            y: 30,
            duration: .8
        }, "-=1").from(".title-line", {
            opacity: 0,
            y: 80,
            duration: 1,
            stagger: .15
        }, "-=0.6").from(".hero-subtitle", {
            opacity: 0,
            y: 30,
            duration: .8
        }, "-=0.5").from(".hero-cta", {
            opacity: 0,
            y: 30,
            duration: .8
        }, "-=0.4").from(".pixel", {
            opacity: 0,
            scale: 0,
            duration: .6,
            stagger: .1
        }, "-=0.5").from(".hero-scroll", {
            opacity: 0,
            y: 20,
            duration: .6
        }, "-=0.3"), Be.from(".nav", {
            opacity: 0,
            y: -20,
            duration: .8,
            delay: .2
        }), Be.from(".marquee", {
            scrollTrigger: {
                trigger: ".marquee",
                start: "top 90%"
            },
            opacity: 0,
            y: 30,
            duration: .8
        }), Be.utils.toArray(".section-header").forEach((n)=>{
            Be.from(n.children, {
                scrollTrigger: {
                    trigger: n,
                    start: "top 80%"
                },
                opacity: 0,
                y: 60,
                duration: 1,
                stagger: .2
            });
        }), Be.utils.toArray(".feature-card").forEach((n, r)=>{
            Be.from(n, {
                scrollTrigger: {
                    trigger: n,
                    start: "top 85%"
                },
                opacity: 0,
                y: 80,
                duration: .8,
                delay: r * .1
            });
        }), Be.from(".showcase-image", {
            scrollTrigger: {
                trigger: ".feature-showcase",
                start: "top 70%"
            },
            opacity: 0,
            x: -100,
            duration: 1
        }), Be.from(".showcase-content", {
            scrollTrigger: {
                trigger: ".feature-showcase",
                start: "top 70%"
            },
            opacity: 0,
            x: 100,
            duration: 1,
            delay: .2
        }), Be.utils.toArray(".gallery-item").forEach((n, r)=>{
            Be.from(n, {
                scrollTrigger: {
                    trigger: n,
                    start: "top 85%"
                },
                opacity: 0,
                scale: .9,
                duration: .8,
                delay: r * .1
            });
        }), Be.from(".app-content", {
            scrollTrigger: {
                trigger: ".app-section",
                start: "top 70%"
            },
            opacity: 0,
            x: -80,
            duration: 1
        }), Be.from(".phone-mockup", {
            scrollTrigger: {
                trigger: ".app-section",
                start: "top 70%"
            },
            opacity: 0,
            y: 100,
            rotation: 10,
            duration: 1.2
        }), Be.utils.toArray(".app-feature").forEach((n, r)=>{
            Be.from(n, {
                scrollTrigger: {
                    trigger: ".app-features",
                    start: "top 80%"
                },
                opacity: 0,
                y: 40,
                duration: .6,
                delay: r * .1
            });
        }), Be.from(".code-content", {
            scrollTrigger: {
                trigger: ".code-section",
                start: "top 70%"
            },
            opacity: 0,
            x: -80,
            duration: 1
        }), Be.from(".code-block", {
            scrollTrigger: {
                trigger: ".code-section",
                start: "top 70%"
            },
            opacity: 0,
            x: 80,
            duration: 1,
            delay: .3
        }), Be.utils.toArray(".spec-item").forEach((n, r)=>{
            Be.from(n, {
                scrollTrigger: {
                    trigger: ".specs-grid",
                    start: "top 80%"
                },
                opacity: 0,
                y: 50,
                scale: .9,
                duration: .6,
                delay: r * .08
            });
        }), Be.utils.toArray(".spec-detail").forEach((n, r)=>{
            Be.from(n, {
                scrollTrigger: {
                    trigger: ".specs-details",
                    start: "top 80%"
                },
                opacity: 0,
                y: 60,
                duration: .8,
                delay: r * .15
            });
        }), Be.from(".cta-content", {
            scrollTrigger: {
                trigger: ".cta",
                start: "top 60%"
            },
            opacity: 0,
            y: 80,
            duration: 1
        }), Be.from(".footer-content", {
            scrollTrigger: {
                trigger: ".footer",
                start: "top 90%"
            },
            opacity: 0,
            y: 40,
            duration: .8
        });
    }
    function Wv() {
        const c = document.querySelector(".hero-bg-img");
        c && Be.to(c, {
            yPercent: 20,
            scale: 1.1,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: !0
            }
        });
        const n = document.querySelector(".hero-content");
        n && Be.to(n, {
            yPercent: -15,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "80% top",
                scrub: !0
            }
        });
        const r = document.querySelector(".parallax-image");
        r && Be.to(r, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: ".parallax-section",
                start: "top bottom",
                end: "bottom top",
                scrub: !0
            }
        });
        const o = document.querySelector(".parallax-content");
        o && Be.fromTo(o, {
            yPercent: 30,
            opacity: 0
        }, {
            yPercent: -20,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: ".parallax-section",
                start: "top bottom",
                end: "bottom top",
                scrub: !0
            }
        }), Be.utils.toArray(".pixel").forEach((d, h)=>{
            Be.to(d, {
                yPercent: 100 + h * 30,
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: !0
                }
            });
        });
        const s = document.querySelector(".phone-mockup");
        s && Be.fromTo(s, {
            yPercent: 20,
            rotation: 5
        }, {
            yPercent: -15,
            rotation: -3,
            ease: "none",
            scrollTrigger: {
                trigger: ".app-section",
                start: "top bottom",
                end: "bottom top",
                scrub: !0
            }
        });
        const a = document.querySelector(".code-block");
        a && Be.fromTo(a, {
            yPercent: 15
        }, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
                trigger: ".code-section",
                start: "top bottom",
                end: "bottom top",
                scrub: !0
            }
        }), Be.utils.toArray(".spec-item").forEach((d, h)=>{
            Be.fromTo(d, {
                yPercent: 20 + h % 3 * 5
            }, {
                yPercent: -10,
                ease: "none",
                scrollTrigger: {
                    trigger: ".specs-grid",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: !0
                }
            });
        });
        const f = document.querySelector(".cta-grid");
        f && Be.to(f, {
            backgroundPosition: "60px 60px",
            ease: "none",
            scrollTrigger: {
                trigger: ".cta",
                start: "top bottom",
                end: "bottom top",
                scrub: !0
            }
        });
    }
    function Vv() {
        const c = document.querySelector(".nav");
        c && window.addEventListener("scroll", ()=>{
            window.pageYOffset > 100 ? (c.style.background = "rgba(10, 10, 15, 0.95)", c.style.borderBottom = "1px solid rgba(255, 255, 255, 0.05)") : (c.style.background = "linear-gradient(to bottom, rgba(10, 10, 15, 0.9) 0%, transparent 100%)", c.style.borderBottom = "none");
        }, {
            passive: !0
        });
    }
    function Xv() {
        window.innerWidth < 992 || document.querySelectorAll(".btn").forEach((c)=>{
            c.addEventListener("mousemove", (n)=>{
                const r = c.getBoundingClientRect(), o = n.clientX - r.left - r.width / 2, s = n.clientY - r.top - r.height / 2;
                c.style.transform = `translate(${o * .2}px, ${s * .2}px)`;
            }), c.addEventListener("mouseleave", ()=>{
                c.style.transform = "translate(0, 0)";
            });
        });
    }
    function Hv() {
        const c = document.querySelectorAll(".logo-dot");
        let n = 0;
        function r() {
            n += .05;
            const s = `hsl(190, 90%, ${50 + Math.sin(n) * 10}%)`;
            c.forEach((a)=>{
                a.style.background = s, a.style.boxShadow = `0 0 10px ${s}`;
            }), requestAnimationFrame(r);
        }
        r();
    }
    function qv() {
        const c = document.querySelectorAll(".parallax-img");
        if (c.length > 1) {
            let r = 0;
            setInterval(()=>{
                c[r].classList.remove("active"), r = (r + 1) % c.length, c[r].classList.add("active");
            }, 3e3);
        }
        const n = document.querySelectorAll(".app-screenshot");
        if (n.length > 1) {
            let r = 0;
            setInterval(()=>{
                n[r].classList.remove("active"), r = (r + 1) % n.length, n[r].classList.add("active");
            }, 3e3);
        }
    }
    console.log("%cPXL Clock", "font-size: 24px; font-weight: bold; color: #00f0ff;");
    console.log("%cTime, Reimagined in Pixels", "font-size: 14px; color: #8a8a9a;");
    var _f = {
        exports: {}
    }, el = {}, vf = {
        exports: {}
    }, Le = {};
    var Tg;
    function $v() {
        if (Tg) return Le;
        Tg = 1;
        var c = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), f = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), w = Symbol.iterator;
        function k(E) {
            return E === null || typeof E != "object" ? null : (E = w && E[w] || E["@@iterator"], typeof E == "function" ? E : null);
        }
        var _ = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, x = Object.assign, v = {};
        function T(E, U, de) {
            this.props = E, this.context = U, this.refs = v, this.updater = de || _;
        }
        T.prototype.isReactComponent = {}, T.prototype.setState = function(E, U) {
            if (typeof E != "object" && typeof E != "function" && E != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, E, U, "setState");
        }, T.prototype.forceUpdate = function(E) {
            this.updater.enqueueForceUpdate(this, E, "forceUpdate");
        };
        function N() {}
        N.prototype = T.prototype;
        function O(E, U, de) {
            this.props = E, this.context = U, this.refs = v, this.updater = de || _;
        }
        var I = O.prototype = new N;
        I.constructor = O, x(I, T.prototype), I.isPureReactComponent = !0;
        var D = Array.isArray, F = Object.prototype.hasOwnProperty, j = {
            current: null
        }, b = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        function q(E, U, de) {
            var ie, me = {}, ye = null, ke = null;
            if (U != null) for(ie in U.ref !== void 0 && (ke = U.ref), U.key !== void 0 && (ye = "" + U.key), U)F.call(U, ie) && !b.hasOwnProperty(ie) && (me[ie] = U[ie]);
            var Ce = arguments.length - 2;
            if (Ce === 1) me.children = de;
            else if (1 < Ce) {
                for(var Pe = Array(Ce), ft = 0; ft < Ce; ft++)Pe[ft] = arguments[ft + 2];
                me.children = Pe;
            }
            if (E && E.defaultProps) for(ie in Ce = E.defaultProps, Ce)me[ie] === void 0 && (me[ie] = Ce[ie]);
            return {
                $$typeof: c,
                type: E,
                key: ye,
                ref: ke,
                props: me,
                _owner: j.current
            };
        }
        function G(E, U) {
            return {
                $$typeof: c,
                type: E.type,
                key: U,
                ref: E.ref,
                props: E.props,
                _owner: E._owner
            };
        }
        function X(E) {
            return typeof E == "object" && E !== null && E.$$typeof === c;
        }
        function ce(E) {
            var U = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + E.replace(/[=:]/g, function(de) {
                return U[de];
            });
        }
        var K = /\/+/g;
        function fe(E, U) {
            return typeof E == "object" && E !== null && E.key != null ? ce("" + E.key) : U.toString(36);
        }
        function ae(E, U, de, ie, me) {
            var ye = typeof E;
            (ye === "undefined" || ye === "boolean") && (E = null);
            var ke = !1;
            if (E === null) ke = !0;
            else switch(ye){
                case "string":
                case "number":
                    ke = !0;
                    break;
                case "object":
                    switch(E.$$typeof){
                        case c:
                        case n:
                            ke = !0;
                    }
            }
            if (ke) return ke = E, me = me(ke), E = ie === "" ? "." + fe(ke, 0) : ie, D(me) ? (de = "", E != null && (de = E.replace(K, "$&/") + "/"), ae(me, U, de, "", function(ft) {
                return ft;
            })) : me != null && (X(me) && (me = G(me, de + (!me.key || ke && ke.key === me.key ? "" : ("" + me.key).replace(K, "$&/") + "/") + E)), U.push(me)), 1;
            if (ke = 0, ie = ie === "" ? "." : ie + ":", D(E)) for(var Ce = 0; Ce < E.length; Ce++){
                ye = E[Ce];
                var Pe = ie + fe(ye, Ce);
                ke += ae(ye, U, de, Pe, me);
            }
            else if (Pe = k(E), typeof Pe == "function") for(E = Pe.call(E), Ce = 0; !(ye = E.next()).done;)ye = ye.value, Pe = ie + fe(ye, Ce++), ke += ae(ye, U, de, Pe, me);
            else if (ye === "object") throw U = String(E), Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.");
            return ke;
        }
        function we(E, U, de) {
            if (E == null) return E;
            var ie = [], me = 0;
            return ae(E, ie, "", "", function(ye) {
                return U.call(de, ye, me++);
            }), ie;
        }
        function le(E) {
            if (E._status === -1) {
                var U = E._result;
                U = U(), U.then(function(de) {
                    (E._status === 0 || E._status === -1) && (E._status = 1, E._result = de);
                }, function(de) {
                    (E._status === 0 || E._status === -1) && (E._status = 2, E._result = de);
                }), E._status === -1 && (E._status = 0, E._result = U);
            }
            if (E._status === 1) return E._result.default;
            throw E._result;
        }
        var J = {
            current: null
        }, W = {
            transition: null
        }, Q = {
            ReactCurrentDispatcher: J,
            ReactCurrentBatchConfig: W,
            ReactCurrentOwner: j
        };
        function C() {
            throw Error("act(...) is not supported in production builds of React.");
        }
        return Le.Children = {
            map: we,
            forEach: function(E, U, de) {
                we(E, function() {
                    U.apply(this, arguments);
                }, de);
            },
            count: function(E) {
                var U = 0;
                return we(E, function() {
                    U++;
                }), U;
            },
            toArray: function(E) {
                return we(E, function(U) {
                    return U;
                }) || [];
            },
            only: function(E) {
                if (!X(E)) throw Error("React.Children.only expected to receive a single React element child.");
                return E;
            }
        }, Le.Component = T, Le.Fragment = r, Le.Profiler = s, Le.PureComponent = O, Le.StrictMode = o, Le.Suspense = h, Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q, Le.act = C, Le.cloneElement = function(E, U, de) {
            if (E == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + E + ".");
            var ie = x({}, E.props), me = E.key, ye = E.ref, ke = E._owner;
            if (U != null) {
                if (U.ref !== void 0 && (ye = U.ref, ke = j.current), U.key !== void 0 && (me = "" + U.key), E.type && E.type.defaultProps) var Ce = E.type.defaultProps;
                for(Pe in U)F.call(U, Pe) && !b.hasOwnProperty(Pe) && (ie[Pe] = U[Pe] === void 0 && Ce !== void 0 ? Ce[Pe] : U[Pe]);
            }
            var Pe = arguments.length - 2;
            if (Pe === 1) ie.children = de;
            else if (1 < Pe) {
                Ce = Array(Pe);
                for(var ft = 0; ft < Pe; ft++)Ce[ft] = arguments[ft + 2];
                ie.children = Ce;
            }
            return {
                $$typeof: c,
                type: E.type,
                key: me,
                ref: ye,
                props: ie,
                _owner: ke
            };
        }, Le.createContext = function(E) {
            return E = {
                $$typeof: f,
                _currentValue: E,
                _currentValue2: E,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
            }, E.Provider = {
                $$typeof: a,
                _context: E
            }, E.Consumer = E;
        }, Le.createElement = q, Le.createFactory = function(E) {
            var U = q.bind(null, E);
            return U.type = E, U;
        }, Le.createRef = function() {
            return {
                current: null
            };
        }, Le.forwardRef = function(E) {
            return {
                $$typeof: d,
                render: E
            };
        }, Le.isValidElement = X, Le.lazy = function(E) {
            return {
                $$typeof: m,
                _payload: {
                    _status: -1,
                    _result: E
                },
                _init: le
            };
        }, Le.memo = function(E, U) {
            return {
                $$typeof: g,
                type: E,
                compare: U === void 0 ? null : U
            };
        }, Le.startTransition = function(E) {
            var U = W.transition;
            W.transition = {};
            try {
                E();
            } finally{
                W.transition = U;
            }
        }, Le.unstable_act = C, Le.useCallback = function(E, U) {
            return J.current.useCallback(E, U);
        }, Le.useContext = function(E) {
            return J.current.useContext(E);
        }, Le.useDebugValue = function() {}, Le.useDeferredValue = function(E) {
            return J.current.useDeferredValue(E);
        }, Le.useEffect = function(E, U) {
            return J.current.useEffect(E, U);
        }, Le.useId = function() {
            return J.current.useId();
        }, Le.useImperativeHandle = function(E, U, de) {
            return J.current.useImperativeHandle(E, U, de);
        }, Le.useInsertionEffect = function(E, U) {
            return J.current.useInsertionEffect(E, U);
        }, Le.useLayoutEffect = function(E, U) {
            return J.current.useLayoutEffect(E, U);
        }, Le.useMemo = function(E, U) {
            return J.current.useMemo(E, U);
        }, Le.useReducer = function(E, U, de) {
            return J.current.useReducer(E, U, de);
        }, Le.useRef = function(E) {
            return J.current.useRef(E);
        }, Le.useState = function(E) {
            return J.current.useState(E);
        }, Le.useSyncExternalStore = function(E, U, de) {
            return J.current.useSyncExternalStore(E, U, de);
        }, Le.useTransition = function() {
            return J.current.useTransition();
        }, Le.version = "18.3.1", Le;
    }
    var Eg;
    function wd() {
        return Eg || (Eg = 1, vf.exports = $v()), vf.exports;
    }
    var zg;
    function Yv() {
        if (zg) return el;
        zg = 1;
        var c = wd(), n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        function f(d, h, g) {
            var m, w = {}, k = null, _ = null;
            g !== void 0 && (k = "" + g), h.key !== void 0 && (k = "" + h.key), h.ref !== void 0 && (_ = h.ref);
            for(m in h)o.call(h, m) && !a.hasOwnProperty(m) && (w[m] = h[m]);
            if (d && d.defaultProps) for(m in h = d.defaultProps, h)w[m] === void 0 && (w[m] = h[m]);
            return {
                $$typeof: n,
                type: d,
                key: k,
                ref: _,
                props: w,
                _owner: s.current
            };
        }
        return el.Fragment = r, el.jsx = f, el.jsxs = f, el;
    }
    var Rg;
    function Kv() {
        return Rg || (Rg = 1, _f.exports = Yv()), _f.exports;
    }
    var yu = Kv(), Di = wd(), $a = {}, wf = {
        exports: {}
    }, En = {}, kf = {
        exports: {}
    }, Sf = {};
    var Dg;
    function Qv() {
        return Dg || (Dg = 1, (function(c) {
            function n(W, Q) {
                var C = W.length;
                W.push(Q);
                e: for(; 0 < C;){
                    var E = C - 1 >>> 1, U = W[E];
                    if (0 < s(U, Q)) W[E] = Q, W[C] = U, C = E;
                    else break e;
                }
            }
            function r(W) {
                return W.length === 0 ? null : W[0];
            }
            function o(W) {
                if (W.length === 0) return null;
                var Q = W[0], C = W.pop();
                if (C !== Q) {
                    W[0] = C;
                    e: for(var E = 0, U = W.length, de = U >>> 1; E < de;){
                        var ie = 2 * (E + 1) - 1, me = W[ie], ye = ie + 1, ke = W[ye];
                        if (0 > s(me, C)) ye < U && 0 > s(ke, me) ? (W[E] = ke, W[ye] = C, E = ye) : (W[E] = me, W[ie] = C, E = ie);
                        else if (ye < U && 0 > s(ke, C)) W[E] = ke, W[ye] = C, E = ye;
                        else break e;
                    }
                }
                return Q;
            }
            function s(W, Q) {
                var C = W.sortIndex - Q.sortIndex;
                return C !== 0 ? C : W.id - Q.id;
            }
            if (typeof performance == "object" && typeof performance.now == "function") {
                var a = performance;
                c.unstable_now = function() {
                    return a.now();
                };
            } else {
                var f = Date, d = f.now();
                c.unstable_now = function() {
                    return f.now() - d;
                };
            }
            var h = [], g = [], m = 1, w = null, k = 3, _ = !1, x = !1, v = !1, T = typeof setTimeout == "function" ? setTimeout : null, N = typeof clearTimeout == "function" ? clearTimeout : null, O = typeof setImmediate < "u" ? setImmediate : null;
            typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            function I(W) {
                for(var Q = r(g); Q !== null;){
                    if (Q.callback === null) o(g);
                    else if (Q.startTime <= W) o(g), Q.sortIndex = Q.expirationTime, n(h, Q);
                    else break;
                    Q = r(g);
                }
            }
            function D(W) {
                if (v = !1, I(W), !x) if (r(h) !== null) x = !0, le(F);
                else {
                    var Q = r(g);
                    Q !== null && J(D, Q.startTime - W);
                }
            }
            function F(W, Q) {
                x = !1, v && (v = !1, N(q), q = -1), _ = !0;
                var C = k;
                try {
                    for(I(Q), w = r(h); w !== null && (!(w.expirationTime > Q) || W && !ce());){
                        var E = w.callback;
                        if (typeof E == "function") {
                            w.callback = null, k = w.priorityLevel;
                            var U = E(w.expirationTime <= Q);
                            Q = c.unstable_now(), typeof U == "function" ? w.callback = U : w === r(h) && o(h), I(Q);
                        } else o(h);
                        w = r(h);
                    }
                    if (w !== null) var de = !0;
                    else {
                        var ie = r(g);
                        ie !== null && J(D, ie.startTime - Q), de = !1;
                    }
                    return de;
                } finally{
                    w = null, k = C, _ = !1;
                }
            }
            var j = !1, b = null, q = -1, G = 5, X = -1;
            function ce() {
                return !(c.unstable_now() - X < G);
            }
            function K() {
                if (b !== null) {
                    var W = c.unstable_now();
                    X = W;
                    var Q = !0;
                    try {
                        Q = b(!0, W);
                    } finally{
                        Q ? fe() : (j = !1, b = null);
                    }
                } else j = !1;
            }
            var fe;
            if (typeof O == "function") fe = function() {
                O(K);
            };
            else if (typeof MessageChannel < "u") {
                var ae = new MessageChannel, we = ae.port2;
                ae.port1.onmessage = K, fe = function() {
                    we.postMessage(null);
                };
            } else fe = function() {
                T(K, 0);
            };
            function le(W) {
                b = W, j || (j = !0, fe());
            }
            function J(W, Q) {
                q = T(function() {
                    W(c.unstable_now());
                }, Q);
            }
            c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(W) {
                W.callback = null;
            }, c.unstable_continueExecution = function() {
                x || _ || (x = !0, le(F));
            }, c.unstable_forceFrameRate = function(W) {
                0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < W ? Math.floor(1e3 / W) : 5;
            }, c.unstable_getCurrentPriorityLevel = function() {
                return k;
            }, c.unstable_getFirstCallbackNode = function() {
                return r(h);
            }, c.unstable_next = function(W) {
                switch(k){
                    case 1:
                    case 2:
                    case 3:
                        var Q = 3;
                        break;
                    default:
                        Q = k;
                }
                var C = k;
                k = Q;
                try {
                    return W();
                } finally{
                    k = C;
                }
            }, c.unstable_pauseExecution = function() {}, c.unstable_requestPaint = function() {}, c.unstable_runWithPriority = function(W, Q) {
                switch(W){
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        W = 3;
                }
                var C = k;
                k = W;
                try {
                    return Q();
                } finally{
                    k = C;
                }
            }, c.unstable_scheduleCallback = function(W, Q, C) {
                var E = c.unstable_now();
                switch(typeof C == "object" && C !== null ? (C = C.delay, C = typeof C == "number" && 0 < C ? E + C : E) : C = E, W){
                    case 1:
                        var U = -1;
                        break;
                    case 2:
                        U = 250;
                        break;
                    case 5:
                        U = 1073741823;
                        break;
                    case 4:
                        U = 1e4;
                        break;
                    default:
                        U = 5e3;
                }
                return U = C + U, W = {
                    id: m++,
                    callback: Q,
                    priorityLevel: W,
                    startTime: C,
                    expirationTime: U,
                    sortIndex: -1
                }, C > E ? (W.sortIndex = C, n(g, W), r(h) === null && W === r(g) && (v ? (N(q), q = -1) : v = !0, J(D, C - E))) : (W.sortIndex = U, n(h, W), x || _ || (x = !0, le(F))), W;
            }, c.unstable_shouldYield = ce, c.unstable_wrapCallback = function(W) {
                var Q = k;
                return function() {
                    var C = k;
                    k = Q;
                    try {
                        return W.apply(this, arguments);
                    } finally{
                        k = C;
                    }
                };
            };
        })(Sf)), Sf;
    }
    var Lg;
    function Zv() {
        return Lg || (Lg = 1, kf.exports = Qv()), kf.exports;
    }
    var Mg;
    function Jv() {
        if (Mg) return En;
        Mg = 1;
        var c = wd(), n = Zv();
        function r(e) {
            for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++)t += "&args[]=" + encodeURIComponent(arguments[i]);
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        var o = new Set, s = {};
        function a(e, t) {
            f(e, t), f(e + "Capture", t);
        }
        function f(e, t) {
            for(s[e] = t, e = 0; e < t.length; e++)o.add(t[e]);
        }
        var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), h = Object.prototype.hasOwnProperty, g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, m = {}, w = {};
        function k(e) {
            return h.call(w, e) ? !0 : h.call(m, e) ? !1 : g.test(e) ? w[e] = !0 : (m[e] = !0, !1);
        }
        function _(e, t, i, l) {
            if (i !== null && i.type === 0) return !1;
            switch(typeof t){
                case "function":
                case "symbol":
                    return !0;
                case "boolean":
                    return l ? !1 : i !== null ? !i.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
                default:
                    return !1;
            }
        }
        function x(e, t, i, l) {
            if (t === null || typeof t > "u" || _(e, t, i, l)) return !0;
            if (l) return !1;
            if (i !== null) switch(i.type){
                case 3:
                    return !t;
                case 4:
                    return t === !1;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t;
            }
            return !1;
        }
        function v(e, t, i, l, u, p, y) {
            this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = l, this.attributeNamespace = u, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = y;
        }
        var T = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
            T[e] = new v(e, 0, !1, e, null, !1, !1);
        }), [
            [
                "acceptCharset",
                "accept-charset"
            ],
            [
                "className",
                "class"
            ],
            [
                "htmlFor",
                "for"
            ],
            [
                "httpEquiv",
                "http-equiv"
            ]
        ].forEach(function(e) {
            var t = e[0];
            T[t] = new v(t, 1, !1, e[1], null, !1, !1);
        }), [
            "contentEditable",
            "draggable",
            "spellCheck",
            "value"
        ].forEach(function(e) {
            T[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
        }), [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha"
        ].forEach(function(e) {
            T[e] = new v(e, 2, !1, e, null, !1, !1);
        }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
            T[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }), [
            "checked",
            "multiple",
            "muted",
            "selected"
        ].forEach(function(e) {
            T[e] = new v(e, 3, !0, e, null, !1, !1);
        }), [
            "capture",
            "download"
        ].forEach(function(e) {
            T[e] = new v(e, 4, !1, e, null, !1, !1);
        }), [
            "cols",
            "rows",
            "size",
            "span"
        ].forEach(function(e) {
            T[e] = new v(e, 6, !1, e, null, !1, !1);
        }), [
            "rowSpan",
            "start"
        ].forEach(function(e) {
            T[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
        var N = /[\-:]([a-z])/g;
        function O(e) {
            return e[1].toUpperCase();
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
            var t = e.replace(N, O);
            T[t] = new v(t, 1, !1, e, null, !1, !1);
        }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
            var t = e.replace(N, O);
            T[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
        }), [
            "xml:base",
            "xml:lang",
            "xml:space"
        ].forEach(function(e) {
            var t = e.replace(N, O);
            T[t] = new v(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
        }), [
            "tabIndex",
            "crossOrigin"
        ].forEach(function(e) {
            T[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }), T.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), [
            "src",
            "href",
            "action",
            "formAction"
        ].forEach(function(e) {
            T[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
        function I(e, t, i, l) {
            var u = T.hasOwnProperty(t) ? T[t] : null;
            (u !== null ? u.type !== 0 : l || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (x(t, i, u, l) && (i = null), l || u === null ? k(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i)) : u.mustUseProperty ? e[u.propertyName] = i === null ? u.type === 3 ? !1 : "" : i : (t = u.attributeName, l = u.attributeNamespace, i === null ? e.removeAttribute(t) : (u = u.type, i = u === 3 || u === 4 && i === !0 ? "" : "" + i, l ? e.setAttributeNS(l, t, i) : e.setAttribute(t, i))));
        }
        var D = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, F = Symbol.for("react.element"), j = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), X = Symbol.for("react.provider"), ce = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), we = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), W = Symbol.iterator;
        function Q(e) {
            return e === null || typeof e != "object" ? null : (e = W && e[W] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var C = Object.assign, E;
        function U(e) {
            if (E === void 0) try {
                throw Error();
            } catch (i) {
                var t = i.stack.trim().match(/\n( *(at )?)/);
                E = t && t[1] || "";
            }
            return `
` + E + e;
        }
        var de = !1;
        function ie(e, t) {
            if (!e || de) return "";
            de = !0;
            var i = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                if (t) if (t = function() {
                    throw Error();
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error();
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, []);
                    } catch (A) {
                        var l = A;
                    }
                    Reflect.construct(e, [], t);
                } else {
                    try {
                        t.call();
                    } catch (A) {
                        l = A;
                    }
                    e.call(t.prototype);
                }
                else {
                    try {
                        throw Error();
                    } catch (A) {
                        l = A;
                    }
                    e();
                }
            } catch (A) {
                if (A && l && typeof A.stack == "string") {
                    for(var u = A.stack.split(`
`), p = l.stack.split(`
`), y = u.length - 1, S = p.length - 1; 1 <= y && 0 <= S && u[y] !== p[S];)S--;
                    for(; 1 <= y && 0 <= S; y--, S--)if (u[y] !== p[S]) {
                        if (y !== 1 || S !== 1) do if (y--, S--, 0 > S || u[y] !== p[S]) {
                            var P = `
` + u[y].replace(" at new ", " at ");
                            return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), P;
                        }
                        while (1 <= y && 0 <= S);
                        break;
                    }
                }
            } finally{
                de = !1, Error.prepareStackTrace = i;
            }
            return (e = e ? e.displayName || e.name : "") ? U(e) : "";
        }
        function me(e) {
            switch(e.tag){
                case 5:
                    return U(e.type);
                case 16:
                    return U("Lazy");
                case 13:
                    return U("Suspense");
                case 19:
                    return U("SuspenseList");
                case 0:
                case 2:
                case 15:
                    return e = ie(e.type, !1), e;
                case 11:
                    return e = ie(e.type.render, !1), e;
                case 1:
                    return e = ie(e.type, !0), e;
                default:
                    return "";
            }
        }
        function ye(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch(e){
                case b:
                    return "Fragment";
                case j:
                    return "Portal";
                case G:
                    return "Profiler";
                case q:
                    return "StrictMode";
                case fe:
                    return "Suspense";
                case ae:
                    return "SuspenseList";
            }
            if (typeof e == "object") switch(e.$$typeof){
                case ce:
                    return (e.displayName || "Context") + ".Consumer";
                case X:
                    return (e._context.displayName || "Context") + ".Provider";
                case K:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case we:
                    return t = e.displayName || null, t !== null ? t : ye(e.type) || "Memo";
                case le:
                    t = e._payload, e = e._init;
                    try {
                        return ye(e(t));
                    } catch  {}
            }
            return null;
        }
        function ke(e) {
            var t = e.type;
            switch(e.tag){
                case 24:
                    return "Cache";
                case 9:
                    return (t.displayName || "Context") + ".Consumer";
                case 10:
                    return (t._context.displayName || "Context") + ".Provider";
                case 18:
                    return "DehydratedFragment";
                case 11:
                    return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
                case 7:
                    return "Fragment";
                case 5:
                    return t;
                case 4:
                    return "Portal";
                case 3:
                    return "Root";
                case 6:
                    return "Text";
                case 16:
                    return ye(t);
                case 8:
                    return t === q ? "StrictMode" : "Mode";
                case 22:
                    return "Offscreen";
                case 12:
                    return "Profiler";
                case 21:
                    return "Scope";
                case 13:
                    return "Suspense";
                case 19:
                    return "SuspenseList";
                case 25:
                    return "TracingMarker";
                case 1:
                case 0:
                case 17:
                case 2:
                case 14:
                case 15:
                    if (typeof t == "function") return t.displayName || t.name || null;
                    if (typeof t == "string") return t;
            }
            return null;
        }
        function Ce(e) {
            switch(typeof e){
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                    return e;
                case "object":
                    return e;
                default:
                    return "";
            }
        }
        function Pe(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function ft(e) {
            var t = Pe(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), l = "" + e[t];
            if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
                var u = i.get, p = i.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return u.call(this);
                    },
                    set: function(y) {
                        l = "" + y, p.call(this, y);
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: i.enumerable
                }), {
                    getValue: function() {
                        return l;
                    },
                    setValue: function(y) {
                        l = "" + y;
                    },
                    stopTracking: function() {
                        e._valueTracker = null, delete e[t];
                    }
                };
            }
        }
        function wt(e) {
            e._valueTracker || (e._valueTracker = ft(e));
        }
        function Lt(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var i = t.getValue(), l = "";
            return e && (l = Pe(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== i ? (t.setValue(e), !0) : !1;
        }
        function Re(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body;
            } catch  {
                return e.body;
            }
        }
        function Qe(e, t) {
            var i = t.checked;
            return C({}, t, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: void 0,
                checked: i ?? e._wrapperState.initialChecked
            });
        }
        function Ut(e, t) {
            var i = t.defaultValue == null ? "" : t.defaultValue, l = t.checked != null ? t.checked : t.defaultChecked;
            i = Ce(t.value != null ? t.value : i), e._wrapperState = {
                initialChecked: l,
                initialValue: i,
                controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
            };
        }
        function Ht(e, t) {
            t = t.checked, t != null && I(e, "checked", t, !1);
        }
        function B(e, t) {
            Ht(e, t);
            var i = Ce(t.value), l = t.type;
            if (i != null) l === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i);
            else if (l === "submit" || l === "reset") {
                e.removeAttribute("value");
                return;
            }
            t.hasOwnProperty("value") ? On(e, t.type, i) : t.hasOwnProperty("defaultValue") && On(e, t.type, Ce(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
        }
        function qt(e, t, i) {
            if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                var l = t.type;
                if (!(l !== "submit" && l !== "reset" || t.value !== void 0 && t.value !== null)) return;
                t = "" + e._wrapperState.initialValue, i || t === e.value || (e.value = t), e.defaultValue = t;
            }
            i = e.name, i !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, i !== "" && (e.name = i);
        }
        function On(e, t, i) {
            (t !== "number" || Re(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
        }
        var _n = Array.isArray;
        function We(e, t, i, l) {
            if (e = e.options, t) {
                t = {};
                for(var u = 0; u < i.length; u++)t["$" + i[u]] = !0;
                for(i = 0; i < e.length; i++)u = t.hasOwnProperty("$" + e[i].value), e[i].selected !== u && (e[i].selected = u), u && l && (e[i].defaultSelected = !0);
            } else {
                for(i = "" + Ce(i), t = null, u = 0; u < e.length; u++){
                    if (e[u].value === i) {
                        e[u].selected = !0, l && (e[u].defaultSelected = !0);
                        return;
                    }
                    t !== null || e[u].disabled || (t = e[u]);
                }
                t !== null && (t.selected = !0);
            }
        }
        function bn(e, t) {
            if (t.dangerouslySetInnerHTML != null) throw Error(r(91));
            return C({}, t, {
                value: void 0,
                defaultValue: void 0,
                children: "" + e._wrapperState.initialValue
            });
        }
        function gr(e, t) {
            var i = t.value;
            if (i == null) {
                if (i = t.children, t = t.defaultValue, i != null) {
                    if (t != null) throw Error(r(92));
                    if (_n(i)) {
                        if (1 < i.length) throw Error(r(93));
                        i = i[0];
                    }
                    t = i;
                }
                t == null && (t = ""), i = t;
            }
            e._wrapperState = {
                initialValue: Ce(i)
            };
        }
        function zr(e, t) {
            var i = Ce(t.value), l = Ce(t.defaultValue);
            i != null && (i = "" + i, i !== e.value && (e.value = i), t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)), l != null && (e.defaultValue = "" + l);
        }
        function gt(e) {
            var t = e.textContent;
            t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
        }
        function mr(e) {
            switch(e){
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml";
            }
        }
        function Ze(e, t) {
            return e == null || e === "http://www.w3.org/1999/xhtml" ? mr(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
        }
        var $t, on = (function(e) {
            return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, l, u) {
                MSApp.execUnsafeLocalFunction(function() {
                    return e(t, i, l, u);
                });
            } : e;
        })(function(e, t) {
            if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
            else {
                for($t = $t || document.createElement("div"), $t.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = $t.firstChild; e.firstChild;)e.removeChild(e.firstChild);
                for(; t.firstChild;)e.appendChild(t.firstChild);
            }
        });
        function sn(e, t) {
            if (t) {
                var i = e.firstChild;
                if (i && i === e.lastChild && i.nodeType === 3) {
                    i.nodeValue = t;
                    return;
                }
            }
            e.textContent = t;
        }
        var yr = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        }, dt = [
            "Webkit",
            "ms",
            "Moz",
            "O"
        ];
        Object.keys(yr).forEach(function(e) {
            dt.forEach(function(t) {
                t = t + e.charAt(0).toUpperCase() + e.substring(1), yr[t] = yr[e];
            });
        });
        function Xi(e, t, i) {
            return t == null || typeof t == "boolean" || t === "" ? "" : i || typeof t != "number" || t === 0 || yr.hasOwnProperty(e) && yr[e] ? ("" + t).trim() : t + "px";
        }
        function Jn(e, t) {
            e = e.style;
            for(var i in t)if (t.hasOwnProperty(i)) {
                var l = i.indexOf("--") === 0, u = Xi(i, t[i], l);
                i === "float" && (i = "cssFloat"), l ? e.setProperty(i, u) : e[i] = u;
            }
        }
        var ai = C({
            menuitem: !0
        }, {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        });
        function Rr(e, t) {
            if (t) {
                if (ai[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(r(137, e));
                if (t.dangerouslySetInnerHTML != null) {
                    if (t.children != null) throw Error(r(60));
                    if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(r(61));
                }
                if (t.style != null && typeof t.style != "object") throw Error(r(62));
            }
        }
        function er(e, t) {
            if (e.indexOf("-") === -1) return typeof t.is == "string";
            switch(e){
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0;
            }
        }
        var _r = null;
        function Te(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var vr = null, Mt = null, At = null;
        function vn(e) {
            if (e = Bs(e)) {
                if (typeof vr != "function") throw Error(r(280));
                var t = e.stateNode;
                t && (t = Kl(t), vr(e.stateNode, e.type, t));
            }
        }
        function Dr(e) {
            Mt ? At ? At.push(e) : At = [
                e
            ] : Mt = e;
        }
        function Xr() {
            if (Mt) {
                var e = Mt, t = At;
                if (At = Mt = null, vn(e), t) for(e = 0; e < t.length; e++)vn(t[e]);
            }
        }
        function tr(e, t) {
            return e(t);
        }
        function ui() {}
        var xe = !1;
        function pe(e, t, i) {
            if (xe) return e(t, i);
            xe = !0;
            try {
                return tr(e, t, i);
            } finally{
                xe = !1, (Mt !== null || At !== null) && (ui(), Xr());
            }
        }
        function Oe(e, t) {
            var i = e.stateNode;
            if (i === null) return null;
            var l = Kl(i);
            if (l === null) return null;
            i = l[t];
            e: switch(t){
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
                    break e;
                default:
                    e = !1;
            }
            if (e) return null;
            if (i && typeof i != "function") throw Error(r(231, t, typeof i));
            return i;
        }
        var Z = !1;
        if (d) try {
            var _e = {};
            Object.defineProperty(_e, "passive", {
                get: function() {
                    Z = !0;
                }
            }), window.addEventListener("test", _e, _e), window.removeEventListener("test", _e, _e);
        } catch  {
            Z = !1;
        }
        function ue(e, t, i, l, u, p, y, S, P) {
            var A = Array.prototype.slice.call(arguments, 3);
            try {
                t.apply(i, A);
            } catch (H) {
                this.onError(H);
            }
        }
        var ve = !1, ot = null, Ee = !1, Je = null, Ot = {
            onError: function(e) {
                ve = !0, ot = e;
            }
        };
        function nt(e, t, i, l, u, p, y, S, P) {
            ve = !1, ot = null, ue.apply(Ot, arguments);
        }
        function qe(e, t, i, l, u, p, y, S, P) {
            if (nt.apply(this, arguments), ve) {
                if (ve) {
                    var A = ot;
                    ve = !1, ot = null;
                } else throw Error(r(198));
                Ee || (Ee = !0, Je = A);
            }
        }
        function Ne(e) {
            var t = e, i = e;
            if (e.alternate) for(; t.return;)t = t.return;
            else {
                e = t;
                do t = e, (t.flags & 4098) !== 0 && (i = t.return), e = t.return;
                while (e);
            }
            return t.tag === 3 ? i : null;
        }
        function wn(e) {
            if (e.tag === 13) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
            }
            return null;
        }
        function $e(e) {
            if (Ne(e) !== e) throw Error(r(188));
        }
        function ln(e) {
            var t = e.alternate;
            if (!t) {
                if (t = Ne(e), t === null) throw Error(r(188));
                return t !== e ? null : e;
            }
            for(var i = e, l = t;;){
                var u = i.return;
                if (u === null) break;
                var p = u.alternate;
                if (p === null) {
                    if (l = u.return, l !== null) {
                        i = l;
                        continue;
                    }
                    break;
                }
                if (u.child === p.child) {
                    for(p = u.child; p;){
                        if (p === i) return $e(u), e;
                        if (p === l) return $e(u), t;
                        p = p.sibling;
                    }
                    throw Error(r(188));
                }
                if (i.return !== l.return) i = u, l = p;
                else {
                    for(var y = !1, S = u.child; S;){
                        if (S === i) {
                            y = !0, i = u, l = p;
                            break;
                        }
                        if (S === l) {
                            y = !0, l = u, i = p;
                            break;
                        }
                        S = S.sibling;
                    }
                    if (!y) {
                        for(S = p.child; S;){
                            if (S === i) {
                                y = !0, i = p, l = u;
                                break;
                            }
                            if (S === l) {
                                y = !0, l = p, i = u;
                                break;
                            }
                            S = S.sibling;
                        }
                        if (!y) throw Error(r(189));
                    }
                }
                if (i.alternate !== l) throw Error(r(190));
            }
            if (i.tag !== 3) throw Error(r(188));
            return i.stateNode.current === i ? e : t;
        }
        function Bn(e) {
            return e = ln(e), e !== null ? kt(e) : null;
        }
        function kt(e) {
            if (e.tag === 5 || e.tag === 6) return e;
            for(e = e.child; e !== null;){
                var t = kt(e);
                if (t !== null) return t;
                e = e.sibling;
            }
            return null;
        }
        var St = n.unstable_scheduleCallback, Tt = n.unstable_cancelCallback, Hr = n.unstable_shouldYield, To = n.unstable_requestPaint, De = n.unstable_now, mt = n.unstable_getCurrentPriorityLevel, kn = n.unstable_ImmediatePriority, Eo = n.unstable_UserBlockingPriority, Hi = n.unstable_NormalPriority, qi = n.unstable_LowPriority, Nn = n.unstable_IdlePriority, Lr = null, an = null;
        function Mr(e) {
            if (an && typeof an.onCommitFiberRoot == "function") try {
                an.onCommitFiberRoot(Lr, e, void 0, (e.current.flags & 128) === 128);
            } catch  {}
        }
        var wr = Math.clz32 ? Math.clz32 : g0, p0 = Math.log, h0 = Math.LN2;
        function g0(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (p0(e) / h0 | 0) | 0;
        }
        var Ml = 64, Al = 4194304;
        function _s(e) {
            switch(e & -e){
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return e & 4194240;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    return e & 130023424;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 1073741824;
                default:
                    return e;
            }
        }
        function Ol(e, t) {
            var i = e.pendingLanes;
            if (i === 0) return 0;
            var l = 0, u = e.suspendedLanes, p = e.pingedLanes, y = i & 268435455;
            if (y !== 0) {
                var S = y & ~u;
                S !== 0 ? l = _s(S) : (p &= y, p !== 0 && (l = _s(p)));
            } else y = i & ~u, y !== 0 ? l = _s(y) : p !== 0 && (l = _s(p));
            if (l === 0) return 0;
            if (t !== 0 && t !== l && (t & u) === 0 && (u = l & -l, p = t & -t, u >= p || u === 16 && (p & 4194240) !== 0)) return t;
            if ((l & 4) !== 0 && (l |= i & 16), t = e.entangledLanes, t !== 0) for(e = e.entanglements, t &= l; 0 < t;)i = 31 - wr(t), u = 1 << i, l |= e[i], t &= ~u;
            return l;
        }
        function m0(e, t) {
            switch(e){
                case 1:
                case 2:
                case 4:
                    return t + 250;
                case 8:
                case 16:
                case 32:
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return t + 5e3;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    return -1;
                case 134217728:
                case 268435456:
                case 536870912:
                case 1073741824:
                    return -1;
                default:
                    return -1;
            }
        }
        function y0(e, t) {
            for(var i = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, p = e.pendingLanes; 0 < p;){
                var y = 31 - wr(p), S = 1 << y, P = u[y];
                P === -1 ? ((S & i) === 0 || (S & l) !== 0) && (u[y] = m0(S, t)) : P <= t && (e.expiredLanes |= S), p &= ~S;
            }
        }
        function Su(e) {
            return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
        }
        function kd() {
            var e = Ml;
            return Ml <<= 1, (Ml & 4194240) === 0 && (Ml = 64), e;
        }
        function xu(e) {
            for(var t = [], i = 0; 31 > i; i++)t.push(e);
            return t;
        }
        function vs(e, t, i) {
            e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - wr(t), e[t] = i;
        }
        function _0(e, t) {
            var i = e.pendingLanes & ~t;
            e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
            var l = e.eventTimes;
            for(e = e.expirationTimes; 0 < i;){
                var u = 31 - wr(i), p = 1 << u;
                t[u] = 0, l[u] = -1, e[u] = -1, i &= ~p;
            }
        }
        function Cu(e, t) {
            var i = e.entangledLanes |= t;
            for(e = e.entanglements; i;){
                var l = 31 - wr(i), u = 1 << l;
                u & t | e[l] & t && (e[l] |= t), i &= ~u;
            }
        }
        var Ve = 0;
        function Sd(e) {
            return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
        }
        var xd, Pu, Cd, Pd, Td, Tu = !1, bl = [], ci = null, fi = null, di = null, ws = new Map, ks = new Map, pi = [], v0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
        function Ed(e, t) {
            switch(e){
                case "focusin":
                case "focusout":
                    ci = null;
                    break;
                case "dragenter":
                case "dragleave":
                    fi = null;
                    break;
                case "mouseover":
                case "mouseout":
                    di = null;
                    break;
                case "pointerover":
                case "pointerout":
                    ws.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    ks.delete(t.pointerId);
            }
        }
        function Ss(e, t, i, l, u, p) {
            return e === null || e.nativeEvent !== p ? (e = {
                blockedOn: t,
                domEventName: i,
                eventSystemFlags: l,
                nativeEvent: p,
                targetContainers: [
                    u
                ]
            }, t !== null && (t = Bs(t), t !== null && Pu(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
        }
        function w0(e, t, i, l, u) {
            switch(t){
                case "focusin":
                    return ci = Ss(ci, e, t, i, l, u), !0;
                case "dragenter":
                    return fi = Ss(fi, e, t, i, l, u), !0;
                case "mouseover":
                    return di = Ss(di, e, t, i, l, u), !0;
                case "pointerover":
                    var p = u.pointerId;
                    return ws.set(p, Ss(ws.get(p) || null, e, t, i, l, u)), !0;
                case "gotpointercapture":
                    return p = u.pointerId, ks.set(p, Ss(ks.get(p) || null, e, t, i, l, u)), !0;
            }
            return !1;
        }
        function zd(e) {
            var t = $i(e.target);
            if (t !== null) {
                var i = Ne(t);
                if (i !== null) {
                    if (t = i.tag, t === 13) {
                        if (t = wn(i), t !== null) {
                            e.blockedOn = t, Td(e.priority, function() {
                                Cd(i);
                            });
                            return;
                        }
                    } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
                        e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
                        return;
                    }
                }
            }
            e.blockedOn = null;
        }
        function Bl(e) {
            if (e.blockedOn !== null) return !1;
            for(var t = e.targetContainers; 0 < t.length;){
                var i = zu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                if (i === null) {
                    i = e.nativeEvent;
                    var l = new i.constructor(i.type, i);
                    _r = l, i.target.dispatchEvent(l), _r = null;
                } else return t = Bs(i), t !== null && Pu(t), e.blockedOn = i, !1;
                t.shift();
            }
            return !0;
        }
        function Rd(e, t, i) {
            Bl(e) && i.delete(t);
        }
        function k0() {
            Tu = !1, ci !== null && Bl(ci) && (ci = null), fi !== null && Bl(fi) && (fi = null), di !== null && Bl(di) && (di = null), ws.forEach(Rd), ks.forEach(Rd);
        }
        function xs(e, t) {
            e.blockedOn === t && (e.blockedOn = null, Tu || (Tu = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, k0)));
        }
        function Cs(e) {
            function t(u) {
                return xs(u, e);
            }
            if (0 < bl.length) {
                xs(bl[0], e);
                for(var i = 1; i < bl.length; i++){
                    var l = bl[i];
                    l.blockedOn === e && (l.blockedOn = null);
                }
            }
            for(ci !== null && xs(ci, e), fi !== null && xs(fi, e), di !== null && xs(di, e), ws.forEach(t), ks.forEach(t), i = 0; i < pi.length; i++)l = pi[i], l.blockedOn === e && (l.blockedOn = null);
            for(; 0 < pi.length && (i = pi[0], i.blockedOn === null);)zd(i), i.blockedOn === null && pi.shift();
        }
        var zo = D.ReactCurrentBatchConfig, Nl = !0;
        function S0(e, t, i, l) {
            var u = Ve, p = zo.transition;
            zo.transition = null;
            try {
                Ve = 1, Eu(e, t, i, l);
            } finally{
                Ve = u, zo.transition = p;
            }
        }
        function x0(e, t, i, l) {
            var u = Ve, p = zo.transition;
            zo.transition = null;
            try {
                Ve = 4, Eu(e, t, i, l);
            } finally{
                Ve = u, zo.transition = p;
            }
        }
        function Eu(e, t, i, l) {
            if (Nl) {
                var u = zu(e, t, i, l);
                if (u === null) Xu(e, t, l, Fl, i), Ed(e, l);
                else if (w0(u, e, t, i, l)) l.stopPropagation();
                else if (Ed(e, l), t & 4 && -1 < v0.indexOf(e)) {
                    for(; u !== null;){
                        var p = Bs(u);
                        if (p !== null && xd(p), p = zu(e, t, i, l), p === null && Xu(e, t, l, Fl, i), p === u) break;
                        u = p;
                    }
                    u !== null && l.stopPropagation();
                } else Xu(e, t, l, null, i);
            }
        }
        var Fl = null;
        function zu(e, t, i, l) {
            if (Fl = null, e = Te(l), e = $i(e), e !== null) if (t = Ne(e), t === null) e = null;
            else if (i = t.tag, i === 13) {
                if (e = wn(t), e !== null) return e;
                e = null;
            } else if (i === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null;
            } else t !== e && (e = null);
            return Fl = e, null;
        }
        function Dd(e) {
            switch(e){
                case "cancel":
                case "click":
                case "close":
                case "contextmenu":
                case "copy":
                case "cut":
                case "auxclick":
                case "dblclick":
                case "dragend":
                case "dragstart":
                case "drop":
                case "focusin":
                case "focusout":
                case "input":
                case "invalid":
                case "keydown":
                case "keypress":
                case "keyup":
                case "mousedown":
                case "mouseup":
                case "paste":
                case "pause":
                case "play":
                case "pointercancel":
                case "pointerdown":
                case "pointerup":
                case "ratechange":
                case "reset":
                case "resize":
                case "seeked":
                case "submit":
                case "touchcancel":
                case "touchend":
                case "touchstart":
                case "volumechange":
                case "change":
                case "selectionchange":
                case "textInput":
                case "compositionstart":
                case "compositionend":
                case "compositionupdate":
                case "beforeblur":
                case "afterblur":
                case "beforeinput":
                case "blur":
                case "fullscreenchange":
                case "focus":
                case "hashchange":
                case "popstate":
                case "select":
                case "selectstart":
                    return 1;
                case "drag":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "mousemove":
                case "mouseout":
                case "mouseover":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "scroll":
                case "toggle":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 4;
                case "message":
                    switch(mt()){
                        case kn:
                            return 1;
                        case Eo:
                            return 4;
                        case Hi:
                        case qi:
                            return 16;
                        case Nn:
                            return 536870912;
                        default:
                            return 16;
                    }
                default:
                    return 16;
            }
        }
        var hi = null, Ru = null, Il = null;
        function Ld() {
            if (Il) return Il;
            var e, t = Ru, i = t.length, l, u = "value" in hi ? hi.value : hi.textContent, p = u.length;
            for(e = 0; e < i && t[e] === u[e]; e++);
            var y = i - e;
            for(l = 1; l <= y && t[i - l] === u[p - l]; l++);
            return Il = u.slice(e, 1 < l ? 1 - l : void 0);
        }
        function jl(e) {
            var t = e.keyCode;
            return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
        }
        function Ul() {
            return !0;
        }
        function Md() {
            return !1;
        }
        function Fn(e) {
            function t(i, l, u, p, y) {
                this._reactName = i, this._targetInst = u, this.type = l, this.nativeEvent = p, this.target = y, this.currentTarget = null;
                for(var S in e)e.hasOwnProperty(S) && (i = e[S], this[S] = i ? i(p) : p[S]);
                return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? Ul : Md, this.isPropagationStopped = Md, this;
            }
            return C(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var i = this.nativeEvent;
                    i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = Ul);
                },
                stopPropagation: function() {
                    var i = this.nativeEvent;
                    i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = Ul);
                },
                persist: function() {},
                isPersistent: Ul
            }), t;
        }
        var Ro = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
        }, Du = Fn(Ro), Ps = C({}, Ro, {
            view: 0,
            detail: 0
        }), C0 = Fn(Ps), Lu, Mu, Ts, Gl = C({}, Ps, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Ou,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== Ts && (Ts && e.type === "mousemove" ? (Lu = e.screenX - Ts.screenX, Mu = e.screenY - Ts.screenY) : Mu = Lu = 0, Ts = e), Lu);
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : Mu;
            }
        }), Ad = Fn(Gl), P0 = C({}, Gl, {
            dataTransfer: 0
        }), T0 = Fn(P0), E0 = C({}, Ps, {
            relatedTarget: 0
        }), Au = Fn(E0), z0 = C({}, Ro, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), R0 = Fn(z0), D0 = C({}, Ro, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        }), L0 = Fn(D0), M0 = C({}, Ro, {
            data: 0
        }), Od = Fn(M0), A0 = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        }, O0 = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        }, b0 = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function B0(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = b0[e]) ? !!t[e] : !1;
        }
        function Ou() {
            return B0;
        }
        var N0 = C({}, Ps, {
            key: function(e) {
                if (e.key) {
                    var t = A0[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress" ? (e = jl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? O0[e.keyCode] || "Unidentified" : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Ou,
            charCode: function(e) {
                return e.type === "keypress" ? jl(e) : 0;
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            },
            which: function(e) {
                return e.type === "keypress" ? jl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            }
        }), F0 = Fn(N0), I0 = C({}, Gl, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }), bd = Fn(I0), j0 = C({}, Ps, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Ou
        }), U0 = Fn(j0), G0 = C({}, Ro, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), W0 = Fn(G0), V0 = C({}, Gl, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), X0 = Fn(V0), H0 = [
            9,
            13,
            27,
            32
        ], bu = d && "CompositionEvent" in window, Es = null;
        d && "documentMode" in document && (Es = document.documentMode);
        var q0 = d && "TextEvent" in window && !Es, Bd = d && (!bu || Es && 8 < Es && 11 >= Es), Nd = " ", Fd = !1;
        function Id(e, t) {
            switch(e){
                case "keyup":
                    return H0.indexOf(t.keyCode) !== -1;
                case "keydown":
                    return t.keyCode !== 229;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1;
            }
        }
        function jd(e) {
            return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
        }
        var Do = !1;
        function $0(e, t) {
            switch(e){
                case "compositionend":
                    return jd(t);
                case "keypress":
                    return t.which !== 32 ? null : (Fd = !0, Nd);
                case "textInput":
                    return e = t.data, e === Nd && Fd ? null : e;
                default:
                    return null;
            }
        }
        function Y0(e, t) {
            if (Do) return e === "compositionend" || !bu && Id(e, t) ? (e = Ld(), Il = Ru = hi = null, Do = !1, e) : null;
            switch(e){
                case "paste":
                    return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                    }
                    return null;
                case "compositionend":
                    return Bd && t.locale !== "ko" ? null : t.data;
                default:
                    return null;
            }
        }
        var K0 = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };
        function Ud(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!K0[e.type] : t === "textarea";
        }
        function Gd(e, t, i, l) {
            Dr(l), t = ql(t, "onChange"), 0 < t.length && (i = new Du("onChange", "change", null, i, l), e.push({
                event: i,
                listeners: t
            }));
        }
        var zs = null, Rs = null;
        function Q0(e) {
            sp(e, 0);
        }
        function Wl(e) {
            var t = bo(e);
            if (Lt(t)) return e;
        }
        function Z0(e, t) {
            if (e === "change") return t;
        }
        var Wd = !1;
        if (d) {
            var Bu;
            if (d) {
                var Nu = "oninput" in document;
                if (!Nu) {
                    var Vd = document.createElement("div");
                    Vd.setAttribute("oninput", "return;"), Nu = typeof Vd.oninput == "function";
                }
                Bu = Nu;
            } else Bu = !1;
            Wd = Bu && (!document.documentMode || 9 < document.documentMode);
        }
        function Xd() {
            zs && (zs.detachEvent("onpropertychange", Hd), Rs = zs = null);
        }
        function Hd(e) {
            if (e.propertyName === "value" && Wl(Rs)) {
                var t = [];
                Gd(t, Rs, e, Te(e)), pe(Q0, t);
            }
        }
        function J0(e, t, i) {
            e === "focusin" ? (Xd(), zs = t, Rs = i, zs.attachEvent("onpropertychange", Hd)) : e === "focusout" && Xd();
        }
        function ey(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return Wl(Rs);
        }
        function ty(e, t) {
            if (e === "click") return Wl(t);
        }
        function ny(e, t) {
            if (e === "input" || e === "change") return Wl(t);
        }
        function ry(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var kr = typeof Object.is == "function" ? Object.is : ry;
        function Ds(e, t) {
            if (kr(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var i = Object.keys(e), l = Object.keys(t);
            if (i.length !== l.length) return !1;
            for(l = 0; l < i.length; l++){
                var u = i[l];
                if (!h.call(t, u) || !kr(e[u], t[u])) return !1;
            }
            return !0;
        }
        function qd(e) {
            for(; e && e.firstChild;)e = e.firstChild;
            return e;
        }
        function $d(e, t) {
            var i = qd(e);
            e = 0;
            for(var l; i;){
                if (i.nodeType === 3) {
                    if (l = e + i.textContent.length, e <= t && l >= t) return {
                        node: i,
                        offset: t - e
                    };
                    e = l;
                }
                e: {
                    for(; i;){
                        if (i.nextSibling) {
                            i = i.nextSibling;
                            break e;
                        }
                        i = i.parentNode;
                    }
                    i = void 0;
                }
                i = qd(i);
            }
        }
        function Yd(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Yd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
        }
        function Kd() {
            for(var e = window, t = Re(); t instanceof e.HTMLIFrameElement;){
                try {
                    var i = typeof t.contentWindow.location.href == "string";
                } catch  {
                    i = !1;
                }
                if (i) e = t.contentWindow;
                else break;
                t = Re(e.document);
            }
            return t;
        }
        function Fu(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        function iy(e) {
            var t = Kd(), i = e.focusedElem, l = e.selectionRange;
            if (t !== i && i && i.ownerDocument && Yd(i.ownerDocument.documentElement, i)) {
                if (l !== null && Fu(i)) {
                    if (t = l.start, e = l.end, e === void 0 && (e = t), "selectionStart" in i) i.selectionStart = t, i.selectionEnd = Math.min(e, i.value.length);
                    else if (e = (t = i.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                        e = e.getSelection();
                        var u = i.textContent.length, p = Math.min(l.start, u);
                        l = l.end === void 0 ? p : Math.min(l.end, u), !e.extend && p > l && (u = l, l = p, p = u), u = $d(i, p);
                        var y = $d(i, l);
                        u && y && (e.rangeCount !== 1 || e.anchorNode !== u.node || e.anchorOffset !== u.offset || e.focusNode !== y.node || e.focusOffset !== y.offset) && (t = t.createRange(), t.setStart(u.node, u.offset), e.removeAllRanges(), p > l ? (e.addRange(t), e.extend(y.node, y.offset)) : (t.setEnd(y.node, y.offset), e.addRange(t)));
                    }
                }
                for(t = [], e = i; e = e.parentNode;)e.nodeType === 1 && t.push({
                    element: e,
                    left: e.scrollLeft,
                    top: e.scrollTop
                });
                for(typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++)e = t[i], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
            }
        }
        var oy = d && "documentMode" in document && 11 >= document.documentMode, Lo = null, Iu = null, Ls = null, ju = !1;
        function Qd(e, t, i) {
            var l = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
            ju || Lo == null || Lo !== Re(l) || (l = Lo, "selectionStart" in l && Fu(l) ? l = {
                start: l.selectionStart,
                end: l.selectionEnd
            } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
                anchorNode: l.anchorNode,
                anchorOffset: l.anchorOffset,
                focusNode: l.focusNode,
                focusOffset: l.focusOffset
            }), Ls && Ds(Ls, l) || (Ls = l, l = ql(Iu, "onSelect"), 0 < l.length && (t = new Du("onSelect", "select", null, t, i), e.push({
                event: t,
                listeners: l
            }), t.target = Lo)));
        }
        function Vl(e, t) {
            var i = {};
            return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
        }
        var Mo = {
            animationend: Vl("Animation", "AnimationEnd"),
            animationiteration: Vl("Animation", "AnimationIteration"),
            animationstart: Vl("Animation", "AnimationStart"),
            transitionend: Vl("Transition", "TransitionEnd")
        }, Uu = {}, Zd = {};
        d && (Zd = document.createElement("div").style, "AnimationEvent" in window || (delete Mo.animationend.animation, delete Mo.animationiteration.animation, delete Mo.animationstart.animation), "TransitionEvent" in window || delete Mo.transitionend.transition);
        function Xl(e) {
            if (Uu[e]) return Uu[e];
            if (!Mo[e]) return e;
            var t = Mo[e], i;
            for(i in t)if (t.hasOwnProperty(i) && i in Zd) return Uu[e] = t[i];
            return e;
        }
        var Jd = Xl("animationend"), ep = Xl("animationiteration"), tp = Xl("animationstart"), np = Xl("transitionend"), rp = new Map, ip = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        function gi(e, t) {
            rp.set(e, t), a(t, [
                e
            ]);
        }
        for(var Gu = 0; Gu < ip.length; Gu++){
            var Wu = ip[Gu], sy = Wu.toLowerCase(), ly = Wu[0].toUpperCase() + Wu.slice(1);
            gi(sy, "on" + ly);
        }
        gi(Jd, "onAnimationEnd"), gi(ep, "onAnimationIteration"), gi(tp, "onAnimationStart"), gi("dblclick", "onDoubleClick"), gi("focusin", "onFocus"), gi("focusout", "onBlur"), gi(np, "onTransitionEnd"), f("onMouseEnter", [
            "mouseout",
            "mouseover"
        ]), f("onMouseLeave", [
            "mouseout",
            "mouseover"
        ]), f("onPointerEnter", [
            "pointerout",
            "pointerover"
        ]), f("onPointerLeave", [
            "pointerout",
            "pointerover"
        ]), a("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), a("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), a("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]), a("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Ms = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ay = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ms));
        function op(e, t, i) {
            var l = e.type || "unknown-event";
            e.currentTarget = i, qe(l, t, void 0, e), e.currentTarget = null;
        }
        function sp(e, t) {
            t = (t & 4) !== 0;
            for(var i = 0; i < e.length; i++){
                var l = e[i], u = l.event;
                l = l.listeners;
                e: {
                    var p = void 0;
                    if (t) for(var y = l.length - 1; 0 <= y; y--){
                        var S = l[y], P = S.instance, A = S.currentTarget;
                        if (S = S.listener, P !== p && u.isPropagationStopped()) break e;
                        op(u, S, A), p = P;
                    }
                    else for(y = 0; y < l.length; y++){
                        if (S = l[y], P = S.instance, A = S.currentTarget, S = S.listener, P !== p && u.isPropagationStopped()) break e;
                        op(u, S, A), p = P;
                    }
                }
            }
            if (Ee) throw e = Je, Ee = !1, Je = null, e;
        }
        function et(e, t) {
            var i = t[Qu];
            i === void 0 && (i = t[Qu] = new Set);
            var l = e + "__bubble";
            i.has(l) || (lp(t, e, 2, !1), i.add(l));
        }
        function Vu(e, t, i) {
            var l = 0;
            t && (l |= 4), lp(i, e, l, t);
        }
        var Hl = "_reactListening" + Math.random().toString(36).slice(2);
        function As(e) {
            if (!e[Hl]) {
                e[Hl] = !0, o.forEach(function(i) {
                    i !== "selectionchange" && (ay.has(i) || Vu(i, !1, e), Vu(i, !0, e));
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[Hl] || (t[Hl] = !0, Vu("selectionchange", !1, t));
            }
        }
        function lp(e, t, i, l) {
            switch(Dd(t)){
                case 1:
                    var u = S0;
                    break;
                case 4:
                    u = x0;
                    break;
                default:
                    u = Eu;
            }
            i = u.bind(null, t, i, e), u = void 0, !Z || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), l ? u !== void 0 ? e.addEventListener(t, i, {
                capture: !0,
                passive: u
            }) : e.addEventListener(t, i, !0) : u !== void 0 ? e.addEventListener(t, i, {
                passive: u
            }) : e.addEventListener(t, i, !1);
        }
        function Xu(e, t, i, l, u) {
            var p = l;
            if ((t & 1) === 0 && (t & 2) === 0 && l !== null) e: for(;;){
                if (l === null) return;
                var y = l.tag;
                if (y === 3 || y === 4) {
                    var S = l.stateNode.containerInfo;
                    if (S === u || S.nodeType === 8 && S.parentNode === u) break;
                    if (y === 4) for(y = l.return; y !== null;){
                        var P = y.tag;
                        if ((P === 3 || P === 4) && (P = y.stateNode.containerInfo, P === u || P.nodeType === 8 && P.parentNode === u)) return;
                        y = y.return;
                    }
                    for(; S !== null;){
                        if (y = $i(S), y === null) return;
                        if (P = y.tag, P === 5 || P === 6) {
                            l = p = y;
                            continue e;
                        }
                        S = S.parentNode;
                    }
                }
                l = l.return;
            }
            pe(function() {
                var A = p, H = Te(i), $ = [];
                e: {
                    var V = rp.get(e);
                    if (V !== void 0) {
                        var ee = Du, re = e;
                        switch(e){
                            case "keypress":
                                if (jl(i) === 0) break e;
                            case "keydown":
                            case "keyup":
                                ee = F0;
                                break;
                            case "focusin":
                                re = "focus", ee = Au;
                                break;
                            case "focusout":
                                re = "blur", ee = Au;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                ee = Au;
                                break;
                            case "click":
                                if (i.button === 2) break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                ee = Ad;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                ee = T0;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                ee = U0;
                                break;
                            case Jd:
                            case ep:
                            case tp:
                                ee = R0;
                                break;
                            case np:
                                ee = W0;
                                break;
                            case "scroll":
                                ee = C0;
                                break;
                            case "wheel":
                                ee = X0;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                ee = L0;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                ee = bd;
                        }
                        var oe = (t & 4) !== 0, yt = !oe && e === "scroll", R = oe ? V !== null ? V + "Capture" : null : V;
                        oe = [];
                        for(var z = A, M; z !== null;){
                            M = z;
                            var Y = M.stateNode;
                            if (M.tag === 5 && Y !== null && (M = Y, R !== null && (Y = Oe(z, R), Y != null && oe.push(Os(z, Y, M)))), yt) break;
                            z = z.return;
                        }
                        0 < oe.length && (V = new ee(V, re, null, i, H), $.push({
                            event: V,
                            listeners: oe
                        }));
                    }
                }
                if ((t & 7) === 0) {
                    e: {
                        if (V = e === "mouseover" || e === "pointerover", ee = e === "mouseout" || e === "pointerout", V && i !== _r && (re = i.relatedTarget || i.fromElement) && ($i(re) || re[qr])) break e;
                        if ((ee || V) && (V = H.window === H ? H : (V = H.ownerDocument) ? V.defaultView || V.parentWindow : window, ee ? (re = i.relatedTarget || i.toElement, ee = A, re = re ? $i(re) : null, re !== null && (yt = Ne(re), re !== yt || re.tag !== 5 && re.tag !== 6) && (re = null)) : (ee = null, re = A), ee !== re)) {
                            if (oe = Ad, Y = "onMouseLeave", R = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (oe = bd, Y = "onPointerLeave", R = "onPointerEnter", z = "pointer"), yt = ee == null ? V : bo(ee), M = re == null ? V : bo(re), V = new oe(Y, z + "leave", ee, i, H), V.target = yt, V.relatedTarget = M, Y = null, $i(H) === A && (oe = new oe(R, z + "enter", re, i, H), oe.target = M, oe.relatedTarget = yt, Y = oe), yt = Y, ee && re) t: {
                                for(oe = ee, R = re, z = 0, M = oe; M; M = Ao(M))z++;
                                for(M = 0, Y = R; Y; Y = Ao(Y))M++;
                                for(; 0 < z - M;)oe = Ao(oe), z--;
                                for(; 0 < M - z;)R = Ao(R), M--;
                                for(; z--;){
                                    if (oe === R || R !== null && oe === R.alternate) break t;
                                    oe = Ao(oe), R = Ao(R);
                                }
                                oe = null;
                            }
                            else oe = null;
                            ee !== null && ap($, V, ee, oe, !1), re !== null && yt !== null && ap($, yt, re, oe, !0);
                        }
                    }
                    e: {
                        if (V = A ? bo(A) : window, ee = V.nodeName && V.nodeName.toLowerCase(), ee === "select" || ee === "input" && V.type === "file") var se = Z0;
                        else if (Ud(V)) if (Wd) se = ny;
                        else {
                            se = ey;
                            var he = J0;
                        }
                        else (ee = V.nodeName) && ee.toLowerCase() === "input" && (V.type === "checkbox" || V.type === "radio") && (se = ty);
                        if (se && (se = se(e, A))) {
                            Gd($, se, i, H);
                            break e;
                        }
                        he && he(e, V, A), e === "focusout" && (he = V._wrapperState) && he.controlled && V.type === "number" && On(V, "number", V.value);
                    }
                    switch(he = A ? bo(A) : window, e){
                        case "focusin":
                            (Ud(he) || he.contentEditable === "true") && (Lo = he, Iu = A, Ls = null);
                            break;
                        case "focusout":
                            Ls = Iu = Lo = null;
                            break;
                        case "mousedown":
                            ju = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            ju = !1, Qd($, i, H);
                            break;
                        case "selectionchange":
                            if (oy) break;
                        case "keydown":
                        case "keyup":
                            Qd($, i, H);
                    }
                    var ge;
                    if (bu) e: {
                        switch(e){
                            case "compositionstart":
                                var Se = "onCompositionStart";
                                break e;
                            case "compositionend":
                                Se = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                Se = "onCompositionUpdate";
                                break e;
                        }
                        Se = void 0;
                    }
                    else Do ? Id(e, i) && (Se = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (Se = "onCompositionStart");
                    Se && (Bd && i.locale !== "ko" && (Do || Se !== "onCompositionStart" ? Se === "onCompositionEnd" && Do && (ge = Ld()) : (hi = H, Ru = "value" in hi ? hi.value : hi.textContent, Do = !0)), he = ql(A, Se), 0 < he.length && (Se = new Od(Se, e, null, i, H), $.push({
                        event: Se,
                        listeners: he
                    }), ge ? Se.data = ge : (ge = jd(i), ge !== null && (Se.data = ge)))), (ge = q0 ? $0(e, i) : Y0(e, i)) && (A = ql(A, "onBeforeInput"), 0 < A.length && (H = new Od("onBeforeInput", "beforeinput", null, i, H), $.push({
                        event: H,
                        listeners: A
                    }), H.data = ge));
                }
                sp($, t);
            });
        }
        function Os(e, t, i) {
            return {
                instance: e,
                listener: t,
                currentTarget: i
            };
        }
        function ql(e, t) {
            for(var i = t + "Capture", l = []; e !== null;){
                var u = e, p = u.stateNode;
                u.tag === 5 && p !== null && (u = p, p = Oe(e, i), p != null && l.unshift(Os(e, p, u)), p = Oe(e, t), p != null && l.push(Os(e, p, u))), e = e.return;
            }
            return l;
        }
        function Ao(e) {
            if (e === null) return null;
            do e = e.return;
            while (e && e.tag !== 5);
            return e || null;
        }
        function ap(e, t, i, l, u) {
            for(var p = t._reactName, y = []; i !== null && i !== l;){
                var S = i, P = S.alternate, A = S.stateNode;
                if (P !== null && P === l) break;
                S.tag === 5 && A !== null && (S = A, u ? (P = Oe(i, p), P != null && y.unshift(Os(i, P, S))) : u || (P = Oe(i, p), P != null && y.push(Os(i, P, S)))), i = i.return;
            }
            y.length !== 0 && e.push({
                event: t,
                listeners: y
            });
        }
        var uy = /\r\n?/g, cy = /\u0000|\uFFFD/g;
        function up(e) {
            return (typeof e == "string" ? e : "" + e).replace(uy, `
`).replace(cy, "");
        }
        function $l(e, t, i) {
            if (t = up(t), up(e) !== t && i) throw Error(r(425));
        }
        function Yl() {}
        var Hu = null, qu = null;
        function $u(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var Yu = typeof setTimeout == "function" ? setTimeout : void 0, fy = typeof clearTimeout == "function" ? clearTimeout : void 0, cp = typeof Promise == "function" ? Promise : void 0, dy = typeof queueMicrotask == "function" ? queueMicrotask : typeof cp < "u" ? function(e) {
            return cp.resolve(null).then(e).catch(py);
        } : Yu;
        function py(e) {
            setTimeout(function() {
                throw e;
            });
        }
        function Ku(e, t) {
            var i = t, l = 0;
            do {
                var u = i.nextSibling;
                if (e.removeChild(i), u && u.nodeType === 8) if (i = u.data, i === "/$") {
                    if (l === 0) {
                        e.removeChild(u), Cs(t);
                        return;
                    }
                    l--;
                } else i !== "$" && i !== "$?" && i !== "$!" || l++;
                i = u;
            }while (i);
            Cs(t);
        }
        function mi(e) {
            for(; e != null; e = e.nextSibling){
                var t = e.nodeType;
                if (t === 1 || t === 3) break;
                if (t === 8) {
                    if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
                    if (t === "/$") return null;
                }
            }
            return e;
        }
        function fp(e) {
            e = e.previousSibling;
            for(var t = 0; e;){
                if (e.nodeType === 8) {
                    var i = e.data;
                    if (i === "$" || i === "$!" || i === "$?") {
                        if (t === 0) return e;
                        t--;
                    } else i === "/$" && t++;
                }
                e = e.previousSibling;
            }
            return null;
        }
        var Oo = Math.random().toString(36).slice(2), Ar = "__reactFiber$" + Oo, bs = "__reactProps$" + Oo, qr = "__reactContainer$" + Oo, Qu = "__reactEvents$" + Oo, hy = "__reactListeners$" + Oo, gy = "__reactHandles$" + Oo;
        function $i(e) {
            var t = e[Ar];
            if (t) return t;
            for(var i = e.parentNode; i;){
                if (t = i[qr] || i[Ar]) {
                    if (i = t.alternate, t.child !== null || i !== null && i.child !== null) for(e = fp(e); e !== null;){
                        if (i = e[Ar]) return i;
                        e = fp(e);
                    }
                    return t;
                }
                e = i, i = e.parentNode;
            }
            return null;
        }
        function Bs(e) {
            return e = e[Ar] || e[qr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
        }
        function bo(e) {
            if (e.tag === 5 || e.tag === 6) return e.stateNode;
            throw Error(r(33));
        }
        function Kl(e) {
            return e[bs] || null;
        }
        var Zu = [], Bo = -1;
        function yi(e) {
            return {
                current: e
            };
        }
        function tt(e) {
            0 > Bo || (e.current = Zu[Bo], Zu[Bo] = null, Bo--);
        }
        function Ye(e, t) {
            Bo++, Zu[Bo] = e.current, e.current = t;
        }
        var _i = {}, Yt = yi(_i), Sn = yi(!1), Yi = _i;
        function No(e, t) {
            var i = e.type.contextTypes;
            if (!i) return _i;
            var l = e.stateNode;
            if (l && l.__reactInternalMemoizedUnmaskedChildContext === t) return l.__reactInternalMemoizedMaskedChildContext;
            var u = {}, p;
            for(p in i)u[p] = t[p];
            return l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = u), u;
        }
        function xn(e) {
            return e = e.childContextTypes, e != null;
        }
        function Ql() {
            tt(Sn), tt(Yt);
        }
        function dp(e, t, i) {
            if (Yt.current !== _i) throw Error(r(168));
            Ye(Yt, t), Ye(Sn, i);
        }
        function pp(e, t, i) {
            var l = e.stateNode;
            if (t = t.childContextTypes, typeof l.getChildContext != "function") return i;
            l = l.getChildContext();
            for(var u in l)if (!(u in t)) throw Error(r(108, ke(e) || "Unknown", u));
            return C({}, i, l);
        }
        function Zl(e) {
            return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _i, Yi = Yt.current, Ye(Yt, e), Ye(Sn, Sn.current), !0;
        }
        function hp(e, t, i) {
            var l = e.stateNode;
            if (!l) throw Error(r(169));
            i ? (e = pp(e, t, Yi), l.__reactInternalMemoizedMergedChildContext = e, tt(Sn), tt(Yt), Ye(Yt, e)) : tt(Sn), Ye(Sn, i);
        }
        var $r = null, Jl = !1, Ju = !1;
        function gp(e) {
            $r === null ? $r = [
                e
            ] : $r.push(e);
        }
        function my(e) {
            Jl = !0, gp(e);
        }
        function vi() {
            if (!Ju && $r !== null) {
                Ju = !0;
                var e = 0, t = Ve;
                try {
                    var i = $r;
                    for(Ve = 1; e < i.length; e++){
                        var l = i[e];
                        do l = l(!0);
                        while (l !== null);
                    }
                    $r = null, Jl = !1;
                } catch (u) {
                    throw $r !== null && ($r = $r.slice(e + 1)), St(kn, vi), u;
                } finally{
                    Ve = t, Ju = !1;
                }
            }
            return null;
        }
        var Fo = [], Io = 0, ea = null, ta = 0, nr = [], rr = 0, Ki = null, Yr = 1, Kr = "";
        function Qi(e, t) {
            Fo[Io++] = ta, Fo[Io++] = ea, ea = e, ta = t;
        }
        function mp(e, t, i) {
            nr[rr++] = Yr, nr[rr++] = Kr, nr[rr++] = Ki, Ki = e;
            var l = Yr;
            e = Kr;
            var u = 32 - wr(l) - 1;
            l &= ~(1 << u), i += 1;
            var p = 32 - wr(t) + u;
            if (30 < p) {
                var y = u - u % 5;
                p = (l & (1 << y) - 1).toString(32), l >>= y, u -= y, Yr = 1 << 32 - wr(t) + u | i << u | l, Kr = p + e;
            } else Yr = 1 << p | i << u | l, Kr = e;
        }
        function ec(e) {
            e.return !== null && (Qi(e, 1), mp(e, 1, 0));
        }
        function tc(e) {
            for(; e === ea;)ea = Fo[--Io], Fo[Io] = null, ta = Fo[--Io], Fo[Io] = null;
            for(; e === Ki;)Ki = nr[--rr], nr[rr] = null, Kr = nr[--rr], nr[rr] = null, Yr = nr[--rr], nr[rr] = null;
        }
        var In = null, jn = null, rt = !1, Sr = null;
        function yp(e, t) {
            var i = lr(5, null, null, 0);
            i.elementType = "DELETED", i.stateNode = t, i.return = e, t = e.deletions, t === null ? (e.deletions = [
                i
            ], e.flags |= 16) : t.push(i);
        }
        function _p(e, t) {
            switch(e.tag){
                case 5:
                    var i = e.type;
                    return t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, In = e, jn = mi(t.firstChild), !0) : !1;
                case 6:
                    return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, In = e, jn = null, !0) : !1;
                case 13:
                    return t = t.nodeType !== 8 ? null : t, t !== null ? (i = Ki !== null ? {
                        id: Yr,
                        overflow: Kr
                    } : null, e.memoizedState = {
                        dehydrated: t,
                        treeContext: i,
                        retryLane: 1073741824
                    }, i = lr(18, null, null, 0), i.stateNode = t, i.return = e, e.child = i, In = e, jn = null, !0) : !1;
                default:
                    return !1;
            }
        }
        function nc(e) {
            return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
        }
        function rc(e) {
            if (rt) {
                var t = jn;
                if (t) {
                    var i = t;
                    if (!_p(e, t)) {
                        if (nc(e)) throw Error(r(418));
                        t = mi(i.nextSibling);
                        var l = In;
                        t && _p(e, t) ? yp(l, i) : (e.flags = e.flags & -4097 | 2, rt = !1, In = e);
                    }
                } else {
                    if (nc(e)) throw Error(r(418));
                    e.flags = e.flags & -4097 | 2, rt = !1, In = e;
                }
            }
        }
        function vp(e) {
            for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
            In = e;
        }
        function na(e) {
            if (e !== In) return !1;
            if (!rt) return vp(e), rt = !0, !1;
            var t;
            if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !$u(e.type, e.memoizedProps)), t && (t = jn)) {
                if (nc(e)) throw wp(), Error(r(418));
                for(; t;)yp(e, t), t = mi(t.nextSibling);
            }
            if (vp(e), e.tag === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
                e: {
                    for(e = e.nextSibling, t = 0; e;){
                        if (e.nodeType === 8) {
                            var i = e.data;
                            if (i === "/$") {
                                if (t === 0) {
                                    jn = mi(e.nextSibling);
                                    break e;
                                }
                                t--;
                            } else i !== "$" && i !== "$!" && i !== "$?" || t++;
                        }
                        e = e.nextSibling;
                    }
                    jn = null;
                }
            } else jn = In ? mi(e.stateNode.nextSibling) : null;
            return !0;
        }
        function wp() {
            for(var e = jn; e;)e = mi(e.nextSibling);
        }
        function jo() {
            jn = In = null, rt = !1;
        }
        function ic(e) {
            Sr === null ? Sr = [
                e
            ] : Sr.push(e);
        }
        var yy = D.ReactCurrentBatchConfig;
        function Ns(e, t, i) {
            if (e = i.ref, e !== null && typeof e != "function" && typeof e != "object") {
                if (i._owner) {
                    if (i = i._owner, i) {
                        if (i.tag !== 1) throw Error(r(309));
                        var l = i.stateNode;
                    }
                    if (!l) throw Error(r(147, e));
                    var u = l, p = "" + e;
                    return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === p ? t.ref : (t = function(y) {
                        var S = u.refs;
                        y === null ? delete S[p] : S[p] = y;
                    }, t._stringRef = p, t);
                }
                if (typeof e != "string") throw Error(r(284));
                if (!i._owner) throw Error(r(290, e));
            }
            return e;
        }
        function ra(e, t) {
            throw e = Object.prototype.toString.call(t), Error(r(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
        }
        function kp(e) {
            var t = e._init;
            return t(e._payload);
        }
        function Sp(e) {
            function t(R, z) {
                if (e) {
                    var M = R.deletions;
                    M === null ? (R.deletions = [
                        z
                    ], R.flags |= 16) : M.push(z);
                }
            }
            function i(R, z) {
                if (!e) return null;
                for(; z !== null;)t(R, z), z = z.sibling;
                return null;
            }
            function l(R, z) {
                for(R = new Map; z !== null;)z.key !== null ? R.set(z.key, z) : R.set(z.index, z), z = z.sibling;
                return R;
            }
            function u(R, z) {
                return R = Ei(R, z), R.index = 0, R.sibling = null, R;
            }
            function p(R, z, M) {
                return R.index = M, e ? (M = R.alternate, M !== null ? (M = M.index, M < z ? (R.flags |= 2, z) : M) : (R.flags |= 2, z)) : (R.flags |= 1048576, z);
            }
            function y(R) {
                return e && R.alternate === null && (R.flags |= 2), R;
            }
            function S(R, z, M, Y) {
                return z === null || z.tag !== 6 ? (z = Yc(M, R.mode, Y), z.return = R, z) : (z = u(z, M), z.return = R, z);
            }
            function P(R, z, M, Y) {
                var se = M.type;
                return se === b ? H(R, z, M.props.children, Y, M.key) : z !== null && (z.elementType === se || typeof se == "object" && se !== null && se.$$typeof === le && kp(se) === z.type) ? (Y = u(z, M.props), Y.ref = Ns(R, z, M), Y.return = R, Y) : (Y = Ea(M.type, M.key, M.props, null, R.mode, Y), Y.ref = Ns(R, z, M), Y.return = R, Y);
            }
            function A(R, z, M, Y) {
                return z === null || z.tag !== 4 || z.stateNode.containerInfo !== M.containerInfo || z.stateNode.implementation !== M.implementation ? (z = Kc(M, R.mode, Y), z.return = R, z) : (z = u(z, M.children || []), z.return = R, z);
            }
            function H(R, z, M, Y, se) {
                return z === null || z.tag !== 7 ? (z = oo(M, R.mode, Y, se), z.return = R, z) : (z = u(z, M), z.return = R, z);
            }
            function $(R, z, M) {
                if (typeof z == "string" && z !== "" || typeof z == "number") return z = Yc("" + z, R.mode, M), z.return = R, z;
                if (typeof z == "object" && z !== null) {
                    switch(z.$$typeof){
                        case F:
                            return M = Ea(z.type, z.key, z.props, null, R.mode, M), M.ref = Ns(R, null, z), M.return = R, M;
                        case j:
                            return z = Kc(z, R.mode, M), z.return = R, z;
                        case le:
                            var Y = z._init;
                            return $(R, Y(z._payload), M);
                    }
                    if (_n(z) || Q(z)) return z = oo(z, R.mode, M, null), z.return = R, z;
                    ra(R, z);
                }
                return null;
            }
            function V(R, z, M, Y) {
                var se = z !== null ? z.key : null;
                if (typeof M == "string" && M !== "" || typeof M == "number") return se !== null ? null : S(R, z, "" + M, Y);
                if (typeof M == "object" && M !== null) {
                    switch(M.$$typeof){
                        case F:
                            return M.key === se ? P(R, z, M, Y) : null;
                        case j:
                            return M.key === se ? A(R, z, M, Y) : null;
                        case le:
                            return se = M._init, V(R, z, se(M._payload), Y);
                    }
                    if (_n(M) || Q(M)) return se !== null ? null : H(R, z, M, Y, null);
                    ra(R, M);
                }
                return null;
            }
            function ee(R, z, M, Y, se) {
                if (typeof Y == "string" && Y !== "" || typeof Y == "number") return R = R.get(M) || null, S(z, R, "" + Y, se);
                if (typeof Y == "object" && Y !== null) {
                    switch(Y.$$typeof){
                        case F:
                            return R = R.get(Y.key === null ? M : Y.key) || null, P(z, R, Y, se);
                        case j:
                            return R = R.get(Y.key === null ? M : Y.key) || null, A(z, R, Y, se);
                        case le:
                            var he = Y._init;
                            return ee(R, z, M, he(Y._payload), se);
                    }
                    if (_n(Y) || Q(Y)) return R = R.get(M) || null, H(z, R, Y, se, null);
                    ra(z, Y);
                }
                return null;
            }
            function re(R, z, M, Y) {
                for(var se = null, he = null, ge = z, Se = z = 0, Nt = null; ge !== null && Se < M.length; Se++){
                    ge.index > Se ? (Nt = ge, ge = null) : Nt = ge.sibling;
                    var Ue = V(R, ge, M[Se], Y);
                    if (Ue === null) {
                        ge === null && (ge = Nt);
                        break;
                    }
                    e && ge && Ue.alternate === null && t(R, ge), z = p(Ue, z, Se), he === null ? se = Ue : he.sibling = Ue, he = Ue, ge = Nt;
                }
                if (Se === M.length) return i(R, ge), rt && Qi(R, Se), se;
                if (ge === null) {
                    for(; Se < M.length; Se++)ge = $(R, M[Se], Y), ge !== null && (z = p(ge, z, Se), he === null ? se = ge : he.sibling = ge, he = ge);
                    return rt && Qi(R, Se), se;
                }
                for(ge = l(R, ge); Se < M.length; Se++)Nt = ee(ge, R, Se, M[Se], Y), Nt !== null && (e && Nt.alternate !== null && ge.delete(Nt.key === null ? Se : Nt.key), z = p(Nt, z, Se), he === null ? se = Nt : he.sibling = Nt, he = Nt);
                return e && ge.forEach(function(zi) {
                    return t(R, zi);
                }), rt && Qi(R, Se), se;
            }
            function oe(R, z, M, Y) {
                var se = Q(M);
                if (typeof se != "function") throw Error(r(150));
                if (M = se.call(M), M == null) throw Error(r(151));
                for(var he = se = null, ge = z, Se = z = 0, Nt = null, Ue = M.next(); ge !== null && !Ue.done; Se++, Ue = M.next()){
                    ge.index > Se ? (Nt = ge, ge = null) : Nt = ge.sibling;
                    var zi = V(R, ge, Ue.value, Y);
                    if (zi === null) {
                        ge === null && (ge = Nt);
                        break;
                    }
                    e && ge && zi.alternate === null && t(R, ge), z = p(zi, z, Se), he === null ? se = zi : he.sibling = zi, he = zi, ge = Nt;
                }
                if (Ue.done) return i(R, ge), rt && Qi(R, Se), se;
                if (ge === null) {
                    for(; !Ue.done; Se++, Ue = M.next())Ue = $(R, Ue.value, Y), Ue !== null && (z = p(Ue, z, Se), he === null ? se = Ue : he.sibling = Ue, he = Ue);
                    return rt && Qi(R, Se), se;
                }
                for(ge = l(R, ge); !Ue.done; Se++, Ue = M.next())Ue = ee(ge, R, Se, Ue.value, Y), Ue !== null && (e && Ue.alternate !== null && ge.delete(Ue.key === null ? Se : Ue.key), z = p(Ue, z, Se), he === null ? se = Ue : he.sibling = Ue, he = Ue);
                return e && ge.forEach(function(Ky) {
                    return t(R, Ky);
                }), rt && Qi(R, Se), se;
            }
            function yt(R, z, M, Y) {
                if (typeof M == "object" && M !== null && M.type === b && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
                    switch(M.$$typeof){
                        case F:
                            e: {
                                for(var se = M.key, he = z; he !== null;){
                                    if (he.key === se) {
                                        if (se = M.type, se === b) {
                                            if (he.tag === 7) {
                                                i(R, he.sibling), z = u(he, M.props.children), z.return = R, R = z;
                                                break e;
                                            }
                                        } else if (he.elementType === se || typeof se == "object" && se !== null && se.$$typeof === le && kp(se) === he.type) {
                                            i(R, he.sibling), z = u(he, M.props), z.ref = Ns(R, he, M), z.return = R, R = z;
                                            break e;
                                        }
                                        i(R, he);
                                        break;
                                    } else t(R, he);
                                    he = he.sibling;
                                }
                                M.type === b ? (z = oo(M.props.children, R.mode, Y, M.key), z.return = R, R = z) : (Y = Ea(M.type, M.key, M.props, null, R.mode, Y), Y.ref = Ns(R, z, M), Y.return = R, R = Y);
                            }
                            return y(R);
                        case j:
                            e: {
                                for(he = M.key; z !== null;){
                                    if (z.key === he) if (z.tag === 4 && z.stateNode.containerInfo === M.containerInfo && z.stateNode.implementation === M.implementation) {
                                        i(R, z.sibling), z = u(z, M.children || []), z.return = R, R = z;
                                        break e;
                                    } else {
                                        i(R, z);
                                        break;
                                    }
                                    else t(R, z);
                                    z = z.sibling;
                                }
                                z = Kc(M, R.mode, Y), z.return = R, R = z;
                            }
                            return y(R);
                        case le:
                            return he = M._init, yt(R, z, he(M._payload), Y);
                    }
                    if (_n(M)) return re(R, z, M, Y);
                    if (Q(M)) return oe(R, z, M, Y);
                    ra(R, M);
                }
                return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, z !== null && z.tag === 6 ? (i(R, z.sibling), z = u(z, M), z.return = R, R = z) : (i(R, z), z = Yc(M, R.mode, Y), z.return = R, R = z), y(R)) : i(R, z);
            }
            return yt;
        }
        var Uo = Sp(!0), xp = Sp(!1), ia = yi(null), oa = null, Go = null, oc = null;
        function sc() {
            oc = Go = oa = null;
        }
        function lc(e) {
            var t = ia.current;
            tt(ia), e._currentValue = t;
        }
        function ac(e, t, i) {
            for(; e !== null;){
                var l = e.alternate;
                if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === i) break;
                e = e.return;
            }
        }
        function Wo(e, t) {
            oa = e, oc = Go = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Cn = !0), e.firstContext = null);
        }
        function ir(e) {
            var t = e._currentValue;
            if (oc !== e) if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Go === null) {
                if (oa === null) throw Error(r(308));
                Go = e, oa.dependencies = {
                    lanes: 0,
                    firstContext: e
                };
            } else Go = Go.next = e;
            return t;
        }
        var Zi = null;
        function uc(e) {
            Zi === null ? Zi = [
                e
            ] : Zi.push(e);
        }
        function Cp(e, t, i, l) {
            var u = t.interleaved;
            return u === null ? (i.next = i, uc(t)) : (i.next = u.next, u.next = i), t.interleaved = i, Qr(e, l);
        }
        function Qr(e, t) {
            e.lanes |= t;
            var i = e.alternate;
            for(i !== null && (i.lanes |= t), i = e, e = e.return; e !== null;)e.childLanes |= t, i = e.alternate, i !== null && (i.childLanes |= t), i = e, e = e.return;
            return i.tag === 3 ? i.stateNode : null;
        }
        var wi = !1;
        function cc(e) {
            e.updateQueue = {
                baseState: e.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: {
                    pending: null,
                    interleaved: null,
                    lanes: 0
                },
                effects: null
            };
        }
        function Pp(e, t) {
            e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects
            });
        }
        function Zr(e, t) {
            return {
                eventTime: e,
                lane: t,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            };
        }
        function ki(e, t, i) {
            var l = e.updateQueue;
            if (l === null) return null;
            if (l = l.shared, (Ie & 2) !== 0) {
                var u = l.pending;
                return u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t, Qr(e, i);
            }
            return u = l.interleaved, u === null ? (t.next = t, uc(l)) : (t.next = u.next, u.next = t), l.interleaved = t, Qr(e, i);
        }
        function sa(e, t, i) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194240) !== 0)) {
                var l = t.lanes;
                l &= e.pendingLanes, i |= l, t.lanes = i, Cu(e, i);
            }
        }
        function Tp(e, t) {
            var i = e.updateQueue, l = e.alternate;
            if (l !== null && (l = l.updateQueue, i === l)) {
                var u = null, p = null;
                if (i = i.firstBaseUpdate, i !== null) {
                    do {
                        var y = {
                            eventTime: i.eventTime,
                            lane: i.lane,
                            tag: i.tag,
                            payload: i.payload,
                            callback: i.callback,
                            next: null
                        };
                        p === null ? u = p = y : p = p.next = y, i = i.next;
                    }while (i !== null);
                    p === null ? u = p = t : p = p.next = t;
                } else u = p = t;
                i = {
                    baseState: l.baseState,
                    firstBaseUpdate: u,
                    lastBaseUpdate: p,
                    shared: l.shared,
                    effects: l.effects
                }, e.updateQueue = i;
                return;
            }
            e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t;
        }
        function la(e, t, i, l) {
            var u = e.updateQueue;
            wi = !1;
            var p = u.firstBaseUpdate, y = u.lastBaseUpdate, S = u.shared.pending;
            if (S !== null) {
                u.shared.pending = null;
                var P = S, A = P.next;
                P.next = null, y === null ? p = A : y.next = A, y = P;
                var H = e.alternate;
                H !== null && (H = H.updateQueue, S = H.lastBaseUpdate, S !== y && (S === null ? H.firstBaseUpdate = A : S.next = A, H.lastBaseUpdate = P));
            }
            if (p !== null) {
                var $ = u.baseState;
                y = 0, H = A = P = null, S = p;
                do {
                    var V = S.lane, ee = S.eventTime;
                    if ((l & V) === V) {
                        H !== null && (H = H.next = {
                            eventTime: ee,
                            lane: 0,
                            tag: S.tag,
                            payload: S.payload,
                            callback: S.callback,
                            next: null
                        });
                        e: {
                            var re = e, oe = S;
                            switch(V = t, ee = i, oe.tag){
                                case 1:
                                    if (re = oe.payload, typeof re == "function") {
                                        $ = re.call(ee, $, V);
                                        break e;
                                    }
                                    $ = re;
                                    break e;
                                case 3:
                                    re.flags = re.flags & -65537 | 128;
                                case 0:
                                    if (re = oe.payload, V = typeof re == "function" ? re.call(ee, $, V) : re, V == null) break e;
                                    $ = C({}, $, V);
                                    break e;
                                case 2:
                                    wi = !0;
                            }
                        }
                        S.callback !== null && S.lane !== 0 && (e.flags |= 64, V = u.effects, V === null ? u.effects = [
                            S
                        ] : V.push(S));
                    } else ee = {
                        eventTime: ee,
                        lane: V,
                        tag: S.tag,
                        payload: S.payload,
                        callback: S.callback,
                        next: null
                    }, H === null ? (A = H = ee, P = $) : H = H.next = ee, y |= V;
                    if (S = S.next, S === null) {
                        if (S = u.shared.pending, S === null) break;
                        V = S, S = V.next, V.next = null, u.lastBaseUpdate = V, u.shared.pending = null;
                    }
                }while (!0);
                if (H === null && (P = $), u.baseState = P, u.firstBaseUpdate = A, u.lastBaseUpdate = H, t = u.shared.interleaved, t !== null) {
                    u = t;
                    do y |= u.lane, u = u.next;
                    while (u !== t);
                } else p === null && (u.shared.lanes = 0);
                to |= y, e.lanes = y, e.memoizedState = $;
            }
        }
        function Ep(e, t, i) {
            if (e = t.effects, t.effects = null, e !== null) for(t = 0; t < e.length; t++){
                var l = e[t], u = l.callback;
                if (u !== null) {
                    if (l.callback = null, l = i, typeof u != "function") throw Error(r(191, u));
                    u.call(l);
                }
            }
        }
        var Fs = {}, Or = yi(Fs), Is = yi(Fs), js = yi(Fs);
        function Ji(e) {
            if (e === Fs) throw Error(r(174));
            return e;
        }
        function fc(e, t) {
            switch(Ye(js, t), Ye(Is, e), Ye(Or, Fs), e = t.nodeType, e){
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : Ze(null, "");
                    break;
                default:
                    e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ze(t, e);
            }
            tt(Or), Ye(Or, t);
        }
        function Vo() {
            tt(Or), tt(Is), tt(js);
        }
        function zp(e) {
            Ji(js.current);
            var t = Ji(Or.current), i = Ze(t, e.type);
            t !== i && (Ye(Is, e), Ye(Or, i));
        }
        function dc(e) {
            Is.current === e && (tt(Or), tt(Is));
        }
        var st = yi(0);
        function aa(e) {
            for(var t = e; t !== null;){
                if (t.tag === 13) {
                    var i = t.memoizedState;
                    if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || i.data === "$!")) return t;
                } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                    if ((t.flags & 128) !== 0) return t;
                } else if (t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue;
                }
                if (t === e) break;
                for(; t.sibling === null;){
                    if (t.return === null || t.return === e) return null;
                    t = t.return;
                }
                t.sibling.return = t.return, t = t.sibling;
            }
            return null;
        }
        var pc = [];
        function hc() {
            for(var e = 0; e < pc.length; e++)pc[e]._workInProgressVersionPrimary = null;
            pc.length = 0;
        }
        var ua = D.ReactCurrentDispatcher, gc = D.ReactCurrentBatchConfig, eo = 0, lt = null, Et = null, bt = null, ca = !1, Us = !1, Gs = 0, _y = 0;
        function Kt() {
            throw Error(r(321));
        }
        function mc(e, t) {
            if (t === null) return !1;
            for(var i = 0; i < t.length && i < e.length; i++)if (!kr(e[i], t[i])) return !1;
            return !0;
        }
        function yc(e, t, i, l, u, p) {
            if (eo = p, lt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ua.current = e === null || e.memoizedState === null ? Sy : xy, e = i(l, u), Us) {
                p = 0;
                do {
                    if (Us = !1, Gs = 0, 25 <= p) throw Error(r(301));
                    p += 1, bt = Et = null, t.updateQueue = null, ua.current = Cy, e = i(l, u);
                }while (Us);
            }
            if (ua.current = pa, t = Et !== null && Et.next !== null, eo = 0, bt = Et = lt = null, ca = !1, t) throw Error(r(300));
            return e;
        }
        function _c() {
            var e = Gs !== 0;
            return Gs = 0, e;
        }
        function br() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return bt === null ? lt.memoizedState = bt = e : bt = bt.next = e, bt;
        }
        function or() {
            if (Et === null) {
                var e = lt.alternate;
                e = e !== null ? e.memoizedState : null;
            } else e = Et.next;
            var t = bt === null ? lt.memoizedState : bt.next;
            if (t !== null) bt = t, Et = e;
            else {
                if (e === null) throw Error(r(310));
                Et = e, e = {
                    memoizedState: Et.memoizedState,
                    baseState: Et.baseState,
                    baseQueue: Et.baseQueue,
                    queue: Et.queue,
                    next: null
                }, bt === null ? lt.memoizedState = bt = e : bt = bt.next = e;
            }
            return bt;
        }
        function Ws(e, t) {
            return typeof t == "function" ? t(e) : t;
        }
        function vc(e) {
            var t = or(), i = t.queue;
            if (i === null) throw Error(r(311));
            i.lastRenderedReducer = e;
            var l = Et, u = l.baseQueue, p = i.pending;
            if (p !== null) {
                if (u !== null) {
                    var y = u.next;
                    u.next = p.next, p.next = y;
                }
                l.baseQueue = u = p, i.pending = null;
            }
            if (u !== null) {
                p = u.next, l = l.baseState;
                var S = y = null, P = null, A = p;
                do {
                    var H = A.lane;
                    if ((eo & H) === H) P !== null && (P = P.next = {
                        lane: 0,
                        action: A.action,
                        hasEagerState: A.hasEagerState,
                        eagerState: A.eagerState,
                        next: null
                    }), l = A.hasEagerState ? A.eagerState : e(l, A.action);
                    else {
                        var $ = {
                            lane: H,
                            action: A.action,
                            hasEagerState: A.hasEagerState,
                            eagerState: A.eagerState,
                            next: null
                        };
                        P === null ? (S = P = $, y = l) : P = P.next = $, lt.lanes |= H, to |= H;
                    }
                    A = A.next;
                }while (A !== null && A !== p);
                P === null ? y = l : P.next = S, kr(l, t.memoizedState) || (Cn = !0), t.memoizedState = l, t.baseState = y, t.baseQueue = P, i.lastRenderedState = l;
            }
            if (e = i.interleaved, e !== null) {
                u = e;
                do p = u.lane, lt.lanes |= p, to |= p, u = u.next;
                while (u !== e);
            } else u === null && (i.lanes = 0);
            return [
                t.memoizedState,
                i.dispatch
            ];
        }
        function wc(e) {
            var t = or(), i = t.queue;
            if (i === null) throw Error(r(311));
            i.lastRenderedReducer = e;
            var l = i.dispatch, u = i.pending, p = t.memoizedState;
            if (u !== null) {
                i.pending = null;
                var y = u = u.next;
                do p = e(p, y.action), y = y.next;
                while (y !== u);
                kr(p, t.memoizedState) || (Cn = !0), t.memoizedState = p, t.baseQueue === null && (t.baseState = p), i.lastRenderedState = p;
            }
            return [
                p,
                l
            ];
        }
        function Rp() {}
        function Dp(e, t) {
            var i = lt, l = or(), u = t(), p = !kr(l.memoizedState, u);
            if (p && (l.memoizedState = u, Cn = !0), l = l.queue, kc(Ap.bind(null, i, l, e), [
                e
            ]), l.getSnapshot !== t || p || bt !== null && bt.memoizedState.tag & 1) {
                if (i.flags |= 2048, Vs(9, Mp.bind(null, i, l, u, t), void 0, null), Bt === null) throw Error(r(349));
                (eo & 30) !== 0 || Lp(i, t, u);
            }
            return u;
        }
        function Lp(e, t, i) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: i
            }, t = lt.updateQueue, t === null ? (t = {
                lastEffect: null,
                stores: null
            }, lt.updateQueue = t, t.stores = [
                e
            ]) : (i = t.stores, i === null ? t.stores = [
                e
            ] : i.push(e));
        }
        function Mp(e, t, i, l) {
            t.value = i, t.getSnapshot = l, Op(t) && bp(e);
        }
        function Ap(e, t, i) {
            return i(function() {
                Op(t) && bp(e);
            });
        }
        function Op(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var i = t();
                return !kr(e, i);
            } catch  {
                return !0;
            }
        }
        function bp(e) {
            var t = Qr(e, 1);
            t !== null && Tr(t, e, 1, -1);
        }
        function Bp(e) {
            var t = br();
            return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ws,
                lastRenderedState: e
            }, t.queue = e, e = e.dispatch = ky.bind(null, lt, e), [
                t.memoizedState,
                e
            ];
        }
        function Vs(e, t, i, l) {
            return e = {
                tag: e,
                create: t,
                destroy: i,
                deps: l,
                next: null
            }, t = lt.updateQueue, t === null ? (t = {
                lastEffect: null,
                stores: null
            }, lt.updateQueue = t, t.lastEffect = e.next = e) : (i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (l = i.next, i.next = e, e.next = l, t.lastEffect = e)), e;
        }
        function Np() {
            return or().memoizedState;
        }
        function fa(e, t, i, l) {
            var u = br();
            lt.flags |= e, u.memoizedState = Vs(1 | t, i, void 0, l === void 0 ? null : l);
        }
        function da(e, t, i, l) {
            var u = or();
            l = l === void 0 ? null : l;
            var p = void 0;
            if (Et !== null) {
                var y = Et.memoizedState;
                if (p = y.destroy, l !== null && mc(l, y.deps)) {
                    u.memoizedState = Vs(t, i, p, l);
                    return;
                }
            }
            lt.flags |= e, u.memoizedState = Vs(1 | t, i, p, l);
        }
        function Fp(e, t) {
            return fa(8390656, 8, e, t);
        }
        function kc(e, t) {
            return da(2048, 8, e, t);
        }
        function Ip(e, t) {
            return da(4, 2, e, t);
        }
        function jp(e, t) {
            return da(4, 4, e, t);
        }
        function Up(e, t) {
            if (typeof t == "function") return e = e(), t(e), function() {
                t(null);
            };
            if (t != null) return e = e(), t.current = e, function() {
                t.current = null;
            };
        }
        function Gp(e, t, i) {
            return i = i != null ? i.concat([
                e
            ]) : null, da(4, 4, Up.bind(null, t, e), i);
        }
        function Sc() {}
        function Wp(e, t) {
            var i = or();
            t = t === void 0 ? null : t;
            var l = i.memoizedState;
            return l !== null && t !== null && mc(t, l[1]) ? l[0] : (i.memoizedState = [
                e,
                t
            ], e);
        }
        function Vp(e, t) {
            var i = or();
            t = t === void 0 ? null : t;
            var l = i.memoizedState;
            return l !== null && t !== null && mc(t, l[1]) ? l[0] : (e = e(), i.memoizedState = [
                e,
                t
            ], e);
        }
        function Xp(e, t, i) {
            return (eo & 21) === 0 ? (e.baseState && (e.baseState = !1, Cn = !0), e.memoizedState = i) : (kr(i, t) || (i = kd(), lt.lanes |= i, to |= i, e.baseState = !0), t);
        }
        function vy(e, t) {
            var i = Ve;
            Ve = i !== 0 && 4 > i ? i : 4, e(!0);
            var l = gc.transition;
            gc.transition = {};
            try {
                e(!1), t();
            } finally{
                Ve = i, gc.transition = l;
            }
        }
        function Hp() {
            return or().memoizedState;
        }
        function wy(e, t, i) {
            var l = Pi(e);
            if (i = {
                lane: l,
                action: i,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, qp(e)) $p(t, i);
            else if (i = Cp(e, t, i, l), i !== null) {
                var u = cn();
                Tr(i, e, l, u), Yp(i, t, l);
            }
        }
        function ky(e, t, i) {
            var l = Pi(e), u = {
                lane: l,
                action: i,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (qp(e)) $p(t, u);
            else {
                var p = e.alternate;
                if (e.lanes === 0 && (p === null || p.lanes === 0) && (p = t.lastRenderedReducer, p !== null)) try {
                    var y = t.lastRenderedState, S = p(y, i);
                    if (u.hasEagerState = !0, u.eagerState = S, kr(S, y)) {
                        var P = t.interleaved;
                        P === null ? (u.next = u, uc(t)) : (u.next = P.next, P.next = u), t.interleaved = u;
                        return;
                    }
                } catch  {}
                i = Cp(e, t, u, l), i !== null && (u = cn(), Tr(i, e, l, u), Yp(i, t, l));
            }
        }
        function qp(e) {
            var t = e.alternate;
            return e === lt || t !== null && t === lt;
        }
        function $p(e, t) {
            Us = ca = !0;
            var i = e.pending;
            i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
        }
        function Yp(e, t, i) {
            if ((i & 4194240) !== 0) {
                var l = t.lanes;
                l &= e.pendingLanes, i |= l, t.lanes = i, Cu(e, i);
            }
        }
        var pa = {
            readContext: ir,
            useCallback: Kt,
            useContext: Kt,
            useEffect: Kt,
            useImperativeHandle: Kt,
            useInsertionEffect: Kt,
            useLayoutEffect: Kt,
            useMemo: Kt,
            useReducer: Kt,
            useRef: Kt,
            useState: Kt,
            useDebugValue: Kt,
            useDeferredValue: Kt,
            useTransition: Kt,
            useMutableSource: Kt,
            useSyncExternalStore: Kt,
            useId: Kt,
            unstable_isNewReconciler: !1
        }, Sy = {
            readContext: ir,
            useCallback: function(e, t) {
                return br().memoizedState = [
                    e,
                    t === void 0 ? null : t
                ], e;
            },
            useContext: ir,
            useEffect: Fp,
            useImperativeHandle: function(e, t, i) {
                return i = i != null ? i.concat([
                    e
                ]) : null, fa(4194308, 4, Up.bind(null, t, e), i);
            },
            useLayoutEffect: function(e, t) {
                return fa(4194308, 4, e, t);
            },
            useInsertionEffect: function(e, t) {
                return fa(4, 2, e, t);
            },
            useMemo: function(e, t) {
                var i = br();
                return t = t === void 0 ? null : t, e = e(), i.memoizedState = [
                    e,
                    t
                ], e;
            },
            useReducer: function(e, t, i) {
                var l = br();
                return t = i !== void 0 ? i(t) : t, l.memoizedState = l.baseState = t, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }, l.queue = e, e = e.dispatch = wy.bind(null, lt, e), [
                    l.memoizedState,
                    e
                ];
            },
            useRef: function(e) {
                var t = br();
                return e = {
                    current: e
                }, t.memoizedState = e;
            },
            useState: Bp,
            useDebugValue: Sc,
            useDeferredValue: function(e) {
                return br().memoizedState = e;
            },
            useTransition: function() {
                var e = Bp(!1), t = e[0];
                return e = vy.bind(null, e[1]), br().memoizedState = e, [
                    t,
                    e
                ];
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(e, t, i) {
                var l = lt, u = br();
                if (rt) {
                    if (i === void 0) throw Error(r(407));
                    i = i();
                } else {
                    if (i = t(), Bt === null) throw Error(r(349));
                    (eo & 30) !== 0 || Lp(l, t, i);
                }
                u.memoizedState = i;
                var p = {
                    value: i,
                    getSnapshot: t
                };
                return u.queue = p, Fp(Ap.bind(null, l, p, e), [
                    e
                ]), l.flags |= 2048, Vs(9, Mp.bind(null, l, p, i, t), void 0, null), i;
            },
            useId: function() {
                var e = br(), t = Bt.identifierPrefix;
                if (rt) {
                    var i = Kr, l = Yr;
                    i = (l & ~(1 << 32 - wr(l) - 1)).toString(32) + i, t = ":" + t + "R" + i, i = Gs++, 0 < i && (t += "H" + i.toString(32)), t += ":";
                } else i = _y++, t = ":" + t + "r" + i.toString(32) + ":";
                return e.memoizedState = t;
            },
            unstable_isNewReconciler: !1
        }, xy = {
            readContext: ir,
            useCallback: Wp,
            useContext: ir,
            useEffect: kc,
            useImperativeHandle: Gp,
            useInsertionEffect: Ip,
            useLayoutEffect: jp,
            useMemo: Vp,
            useReducer: vc,
            useRef: Np,
            useState: function() {
                return vc(Ws);
            },
            useDebugValue: Sc,
            useDeferredValue: function(e) {
                var t = or();
                return Xp(t, Et.memoizedState, e);
            },
            useTransition: function() {
                var e = vc(Ws)[0], t = or().memoizedState;
                return [
                    e,
                    t
                ];
            },
            useMutableSource: Rp,
            useSyncExternalStore: Dp,
            useId: Hp,
            unstable_isNewReconciler: !1
        }, Cy = {
            readContext: ir,
            useCallback: Wp,
            useContext: ir,
            useEffect: kc,
            useImperativeHandle: Gp,
            useInsertionEffect: Ip,
            useLayoutEffect: jp,
            useMemo: Vp,
            useReducer: wc,
            useRef: Np,
            useState: function() {
                return wc(Ws);
            },
            useDebugValue: Sc,
            useDeferredValue: function(e) {
                var t = or();
                return Et === null ? t.memoizedState = e : Xp(t, Et.memoizedState, e);
            },
            useTransition: function() {
                var e = wc(Ws)[0], t = or().memoizedState;
                return [
                    e,
                    t
                ];
            },
            useMutableSource: Rp,
            useSyncExternalStore: Dp,
            useId: Hp,
            unstable_isNewReconciler: !1
        };
        function xr(e, t) {
            if (e && e.defaultProps) {
                t = C({}, t), e = e.defaultProps;
                for(var i in e)t[i] === void 0 && (t[i] = e[i]);
                return t;
            }
            return t;
        }
        function xc(e, t, i, l) {
            t = e.memoizedState, i = i(l, t), i = i == null ? t : C({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
        }
        var ha = {
            isMounted: function(e) {
                return (e = e._reactInternals) ? Ne(e) === e : !1;
            },
            enqueueSetState: function(e, t, i) {
                e = e._reactInternals;
                var l = cn(), u = Pi(e), p = Zr(l, u);
                p.payload = t, i != null && (p.callback = i), t = ki(e, p, u), t !== null && (Tr(t, e, u, l), sa(t, e, u));
            },
            enqueueReplaceState: function(e, t, i) {
                e = e._reactInternals;
                var l = cn(), u = Pi(e), p = Zr(l, u);
                p.tag = 1, p.payload = t, i != null && (p.callback = i), t = ki(e, p, u), t !== null && (Tr(t, e, u, l), sa(t, e, u));
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var i = cn(), l = Pi(e), u = Zr(i, l);
                u.tag = 2, t != null && (u.callback = t), t = ki(e, u, l), t !== null && (Tr(t, e, l, i), sa(t, e, l));
            }
        };
        function Kp(e, t, i, l, u, p, y) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, p, y) : t.prototype && t.prototype.isPureReactComponent ? !Ds(i, l) || !Ds(u, p) : !0;
        }
        function Qp(e, t, i) {
            var l = !1, u = _i, p = t.contextType;
            return typeof p == "object" && p !== null ? p = ir(p) : (u = xn(t) ? Yi : Yt.current, l = t.contextTypes, p = (l = l != null) ? No(e, u) : _i), t = new t(i, p), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ha, e.stateNode = t, t._reactInternals = e, l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = u, e.__reactInternalMemoizedMaskedChildContext = p), t;
        }
        function Zp(e, t, i, l) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, l), t.state !== e && ha.enqueueReplaceState(t, t.state, null);
        }
        function Cc(e, t, i, l) {
            var u = e.stateNode;
            u.props = i, u.state = e.memoizedState, u.refs = {}, cc(e);
            var p = t.contextType;
            typeof p == "object" && p !== null ? u.context = ir(p) : (p = xn(t) ? Yi : Yt.current, u.context = No(e, p)), u.state = e.memoizedState, p = t.getDerivedStateFromProps, typeof p == "function" && (xc(e, t, p, i), u.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (t = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), t !== u.state && ha.enqueueReplaceState(u, u.state, null), la(e, i, u, l), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308);
        }
        function Xo(e, t) {
            try {
                var i = "", l = t;
                do i += me(l), l = l.return;
                while (l);
                var u = i;
            } catch (p) {
                u = `
Error generating stack: ` + p.message + `
` + p.stack;
            }
            return {
                value: e,
                source: t,
                stack: u,
                digest: null
            };
        }
        function Pc(e, t, i) {
            return {
                value: e,
                source: null,
                stack: i ?? null,
                digest: t ?? null
            };
        }
        function Tc(e, t) {
            try {
                console.error(t.value);
            } catch (i) {
                setTimeout(function() {
                    throw i;
                });
            }
        }
        var Py = typeof WeakMap == "function" ? WeakMap : Map;
        function Jp(e, t, i) {
            i = Zr(-1, i), i.tag = 3, i.payload = {
                element: null
            };
            var l = t.value;
            return i.callback = function() {
                ka || (ka = !0, Uc = l), Tc(e, t);
            }, i;
        }
        function eh(e, t, i) {
            i = Zr(-1, i), i.tag = 3;
            var l = e.type.getDerivedStateFromError;
            if (typeof l == "function") {
                var u = t.value;
                i.payload = function() {
                    return l(u);
                }, i.callback = function() {
                    Tc(e, t);
                };
            }
            var p = e.stateNode;
            return p !== null && typeof p.componentDidCatch == "function" && (i.callback = function() {
                Tc(e, t), typeof l != "function" && (xi === null ? xi = new Set([
                    this
                ]) : xi.add(this));
                var y = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: y !== null ? y : ""
                });
            }), i;
        }
        function th(e, t, i) {
            var l = e.pingCache;
            if (l === null) {
                l = e.pingCache = new Py;
                var u = new Set;
                l.set(t, u);
            } else u = l.get(t), u === void 0 && (u = new Set, l.set(t, u));
            u.has(i) || (u.add(i), e = Iy.bind(null, e, t, i), t.then(e, e));
        }
        function nh(e) {
            do {
                var t;
                if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
                e = e.return;
            }while (e !== null);
            return null;
        }
        function rh(e, t, i, l, u) {
            return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (t = Zr(-1, 1), t.tag = 2, ki(i, t, 1))), i.lanes |= 1), e) : (e.flags |= 65536, e.lanes = u, e);
        }
        var Ty = D.ReactCurrentOwner, Cn = !1;
        function un(e, t, i, l) {
            t.child = e === null ? xp(t, null, i, l) : Uo(t, e.child, i, l);
        }
        function ih(e, t, i, l, u) {
            i = i.render;
            var p = t.ref;
            return Wo(t, u), l = yc(e, t, i, l, p, u), i = _c(), e !== null && !Cn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, Jr(e, t, u)) : (rt && i && ec(t), t.flags |= 1, un(e, t, l, u), t.child);
        }
        function oh(e, t, i, l, u) {
            if (e === null) {
                var p = i.type;
                return typeof p == "function" && !$c(p) && p.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (t.tag = 15, t.type = p, sh(e, t, p, l, u)) : (e = Ea(i.type, null, l, t, t.mode, u), e.ref = t.ref, e.return = t, t.child = e);
            }
            if (p = e.child, (e.lanes & u) === 0) {
                var y = p.memoizedProps;
                if (i = i.compare, i = i !== null ? i : Ds, i(y, l) && e.ref === t.ref) return Jr(e, t, u);
            }
            return t.flags |= 1, e = Ei(p, l), e.ref = t.ref, e.return = t, t.child = e;
        }
        function sh(e, t, i, l, u) {
            if (e !== null) {
                var p = e.memoizedProps;
                if (Ds(p, l) && e.ref === t.ref) if (Cn = !1, t.pendingProps = l = p, (e.lanes & u) !== 0) (e.flags & 131072) !== 0 && (Cn = !0);
                else return t.lanes = e.lanes, Jr(e, t, u);
            }
            return Ec(e, t, i, l, u);
        }
        function lh(e, t, i) {
            var l = t.pendingProps, u = l.children, p = e !== null ? e.memoizedState : null;
            if (l.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, Ye(qo, Un), Un |= i;
            else {
                if ((i & 1073741824) === 0) return e = p !== null ? p.baseLanes | i : i, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }, t.updateQueue = null, Ye(qo, Un), Un |= e, null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, l = p !== null ? p.baseLanes : i, Ye(qo, Un), Un |= l;
            }
            else p !== null ? (l = p.baseLanes | i, t.memoizedState = null) : l = i, Ye(qo, Un), Un |= l;
            return un(e, t, u, i), t.child;
        }
        function ah(e, t) {
            var i = t.ref;
            (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= 512, t.flags |= 2097152);
        }
        function Ec(e, t, i, l, u) {
            var p = xn(i) ? Yi : Yt.current;
            return p = No(t, p), Wo(t, u), i = yc(e, t, i, l, p, u), l = _c(), e !== null && !Cn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, Jr(e, t, u)) : (rt && l && ec(t), t.flags |= 1, un(e, t, i, u), t.child);
        }
        function uh(e, t, i, l, u) {
            if (xn(i)) {
                var p = !0;
                Zl(t);
            } else p = !1;
            if (Wo(t, u), t.stateNode === null) ma(e, t), Qp(t, i, l), Cc(t, i, l, u), l = !0;
            else if (e === null) {
                var y = t.stateNode, S = t.memoizedProps;
                y.props = S;
                var P = y.context, A = i.contextType;
                typeof A == "object" && A !== null ? A = ir(A) : (A = xn(i) ? Yi : Yt.current, A = No(t, A));
                var H = i.getDerivedStateFromProps, $ = typeof H == "function" || typeof y.getSnapshotBeforeUpdate == "function";
                $ || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (S !== l || P !== A) && Zp(t, y, l, A), wi = !1;
                var V = t.memoizedState;
                y.state = V, la(t, l, y, u), P = t.memoizedState, S !== l || V !== P || Sn.current || wi ? (typeof H == "function" && (xc(t, i, H, l), P = t.memoizedState), (S = wi || Kp(t, i, S, l, V, P, A)) ? ($ || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = P), y.props = l, y.state = P, y.context = A, l = S) : (typeof y.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
            } else {
                y = t.stateNode, Pp(e, t), S = t.memoizedProps, A = t.type === t.elementType ? S : xr(t.type, S), y.props = A, $ = t.pendingProps, V = y.context, P = i.contextType, typeof P == "object" && P !== null ? P = ir(P) : (P = xn(i) ? Yi : Yt.current, P = No(t, P));
                var ee = i.getDerivedStateFromProps;
                (H = typeof ee == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (S !== $ || V !== P) && Zp(t, y, l, P), wi = !1, V = t.memoizedState, y.state = V, la(t, l, y, u);
                var re = t.memoizedState;
                S !== $ || V !== re || Sn.current || wi ? (typeof ee == "function" && (xc(t, i, ee, l), re = t.memoizedState), (A = wi || Kp(t, i, A, l, V, re, P) || !1) ? (H || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(l, re, P), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(l, re, P)), typeof y.componentDidUpdate == "function" && (t.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || S === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = re), y.props = l, y.state = re, y.context = P, l = A) : (typeof y.componentDidUpdate != "function" || S === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), l = !1);
            }
            return zc(e, t, i, l, p, u);
        }
        function zc(e, t, i, l, u, p) {
            ah(e, t);
            var y = (t.flags & 128) !== 0;
            if (!l && !y) return u && hp(t, i, !1), Jr(e, t, p);
            l = t.stateNode, Ty.current = t;
            var S = y && typeof i.getDerivedStateFromError != "function" ? null : l.render();
            return t.flags |= 1, e !== null && y ? (t.child = Uo(t, e.child, null, p), t.child = Uo(t, null, S, p)) : un(e, t, S, p), t.memoizedState = l.state, u && hp(t, i, !0), t.child;
        }
        function ch(e) {
            var t = e.stateNode;
            t.pendingContext ? dp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && dp(e, t.context, !1), fc(e, t.containerInfo);
        }
        function fh(e, t, i, l, u) {
            return jo(), ic(u), t.flags |= 256, un(e, t, i, l), t.child;
        }
        var Rc = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0
        };
        function Dc(e) {
            return {
                baseLanes: e,
                cachePool: null,
                transitions: null
            };
        }
        function dh(e, t, i) {
            var l = t.pendingProps, u = st.current, p = !1, y = (t.flags & 128) !== 0, S;
            if ((S = y) || (S = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0), S ? (p = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u |= 1), Ye(st, u & 1), e === null) return rc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (y = l.children, e = l.fallback, p ? (l = t.mode, p = t.child, y = {
                mode: "hidden",
                children: y
            }, (l & 1) === 0 && p !== null ? (p.childLanes = 0, p.pendingProps = y) : p = za(y, l, 0, null), e = oo(e, l, i, null), p.return = t, e.return = t, p.sibling = e, t.child = p, t.child.memoizedState = Dc(i), t.memoizedState = Rc, e) : Lc(t, y));
            if (u = e.memoizedState, u !== null && (S = u.dehydrated, S !== null)) return Ey(e, t, y, l, S, u, i);
            if (p) {
                p = l.fallback, y = t.mode, u = e.child, S = u.sibling;
                var P = {
                    mode: "hidden",
                    children: l.children
                };
                return (y & 1) === 0 && t.child !== u ? (l = t.child, l.childLanes = 0, l.pendingProps = P, t.deletions = null) : (l = Ei(u, P), l.subtreeFlags = u.subtreeFlags & 14680064), S !== null ? p = Ei(S, p) : (p = oo(p, y, i, null), p.flags |= 2), p.return = t, l.return = t, l.sibling = p, t.child = l, l = p, p = t.child, y = e.child.memoizedState, y = y === null ? Dc(i) : {
                    baseLanes: y.baseLanes | i,
                    cachePool: null,
                    transitions: y.transitions
                }, p.memoizedState = y, p.childLanes = e.childLanes & ~i, t.memoizedState = Rc, l;
            }
            return p = e.child, e = p.sibling, l = Ei(p, {
                mode: "visible",
                children: l.children
            }), (t.mode & 1) === 0 && (l.lanes = i), l.return = t, l.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [
                e
            ], t.flags |= 16) : i.push(e)), t.child = l, t.memoizedState = null, l;
        }
        function Lc(e, t) {
            return t = za({
                mode: "visible",
                children: t
            }, e.mode, 0, null), t.return = e, e.child = t;
        }
        function ga(e, t, i, l) {
            return l !== null && ic(l), Uo(t, e.child, null, i), e = Lc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function Ey(e, t, i, l, u, p, y) {
            if (i) return t.flags & 256 ? (t.flags &= -257, l = Pc(Error(r(422))), ga(e, t, y, l)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (p = l.fallback, u = t.mode, l = za({
                mode: "visible",
                children: l.children
            }, u, 0, null), p = oo(p, u, y, null), p.flags |= 2, l.return = t, p.return = t, l.sibling = p, t.child = l, (t.mode & 1) !== 0 && Uo(t, e.child, null, y), t.child.memoizedState = Dc(y), t.memoizedState = Rc, p);
            if ((t.mode & 1) === 0) return ga(e, t, y, null);
            if (u.data === "$!") {
                if (l = u.nextSibling && u.nextSibling.dataset, l) var S = l.dgst;
                return l = S, p = Error(r(419)), l = Pc(p, l, void 0), ga(e, t, y, l);
            }
            if (S = (y & e.childLanes) !== 0, Cn || S) {
                if (l = Bt, l !== null) {
                    switch(y & -y){
                        case 4:
                            u = 2;
                            break;
                        case 16:
                            u = 8;
                            break;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            u = 32;
                            break;
                        case 536870912:
                            u = 268435456;
                            break;
                        default:
                            u = 0;
                    }
                    u = (u & (l.suspendedLanes | y)) !== 0 ? 0 : u, u !== 0 && u !== p.retryLane && (p.retryLane = u, Qr(e, u), Tr(l, e, u, -1));
                }
                return qc(), l = Pc(Error(r(421))), ga(e, t, y, l);
            }
            return u.data === "$?" ? (t.flags |= 128, t.child = e.child, t = jy.bind(null, e), u._reactRetry = t, null) : (e = p.treeContext, jn = mi(u.nextSibling), In = t, rt = !0, Sr = null, e !== null && (nr[rr++] = Yr, nr[rr++] = Kr, nr[rr++] = Ki, Yr = e.id, Kr = e.overflow, Ki = t), t = Lc(t, l.children), t.flags |= 4096, t);
        }
        function ph(e, t, i) {
            e.lanes |= t;
            var l = e.alternate;
            l !== null && (l.lanes |= t), ac(e.return, t, i);
        }
        function Mc(e, t, i, l, u) {
            var p = e.memoizedState;
            p === null ? e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: l,
                tail: i,
                tailMode: u
            } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = l, p.tail = i, p.tailMode = u);
        }
        function hh(e, t, i) {
            var l = t.pendingProps, u = l.revealOrder, p = l.tail;
            if (un(e, t, l.children, i), l = st.current, (l & 2) !== 0) l = l & 1 | 2, t.flags |= 128;
            else {
                if (e !== null && (e.flags & 128) !== 0) e: for(e = t.child; e !== null;){
                    if (e.tag === 13) e.memoizedState !== null && ph(e, i, t);
                    else if (e.tag === 19) ph(e, i, t);
                    else if (e.child !== null) {
                        e.child.return = e, e = e.child;
                        continue;
                    }
                    if (e === t) break e;
                    for(; e.sibling === null;){
                        if (e.return === null || e.return === t) break e;
                        e = e.return;
                    }
                    e.sibling.return = e.return, e = e.sibling;
                }
                l &= 1;
            }
            if (Ye(st, l), (t.mode & 1) === 0) t.memoizedState = null;
            else switch(u){
                case "forwards":
                    for(i = t.child, u = null; i !== null;)e = i.alternate, e !== null && aa(e) === null && (u = i), i = i.sibling;
                    i = u, i === null ? (u = t.child, t.child = null) : (u = i.sibling, i.sibling = null), Mc(t, !1, u, i, p);
                    break;
                case "backwards":
                    for(i = null, u = t.child, t.child = null; u !== null;){
                        if (e = u.alternate, e !== null && aa(e) === null) {
                            t.child = u;
                            break;
                        }
                        e = u.sibling, u.sibling = i, i = u, u = e;
                    }
                    Mc(t, !0, i, null, p);
                    break;
                case "together":
                    Mc(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null;
            }
            return t.child;
        }
        function ma(e, t) {
            (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
        }
        function Jr(e, t, i) {
            if (e !== null && (t.dependencies = e.dependencies), to |= t.lanes, (i & t.childLanes) === 0) return null;
            if (e !== null && t.child !== e.child) throw Error(r(153));
            if (t.child !== null) {
                for(e = t.child, i = Ei(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null;)e = e.sibling, i = i.sibling = Ei(e, e.pendingProps), i.return = t;
                i.sibling = null;
            }
            return t.child;
        }
        function zy(e, t, i) {
            switch(t.tag){
                case 3:
                    ch(t), jo();
                    break;
                case 5:
                    zp(t);
                    break;
                case 1:
                    xn(t.type) && Zl(t);
                    break;
                case 4:
                    fc(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    var l = t.type._context, u = t.memoizedProps.value;
                    Ye(ia, l._currentValue), l._currentValue = u;
                    break;
                case 13:
                    if (l = t.memoizedState, l !== null) return l.dehydrated !== null ? (Ye(st, st.current & 1), t.flags |= 128, null) : (i & t.child.childLanes) !== 0 ? dh(e, t, i) : (Ye(st, st.current & 1), e = Jr(e, t, i), e !== null ? e.sibling : null);
                    Ye(st, st.current & 1);
                    break;
                case 19:
                    if (l = (i & t.childLanes) !== 0, (e.flags & 128) !== 0) {
                        if (l) return hh(e, t, i);
                        t.flags |= 128;
                    }
                    if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), Ye(st, st.current), l) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, lh(e, t, i);
            }
            return Jr(e, t, i);
        }
        var gh, Ac, mh, yh;
        gh = function(e, t) {
            for(var i = t.child; i !== null;){
                if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
                else if (i.tag !== 4 && i.child !== null) {
                    i.child.return = i, i = i.child;
                    continue;
                }
                if (i === t) break;
                for(; i.sibling === null;){
                    if (i.return === null || i.return === t) return;
                    i = i.return;
                }
                i.sibling.return = i.return, i = i.sibling;
            }
        }, Ac = function() {}, mh = function(e, t, i, l) {
            var u = e.memoizedProps;
            if (u !== l) {
                e = t.stateNode, Ji(Or.current);
                var p = null;
                switch(i){
                    case "input":
                        u = Qe(e, u), l = Qe(e, l), p = [];
                        break;
                    case "select":
                        u = C({}, u, {
                            value: void 0
                        }), l = C({}, l, {
                            value: void 0
                        }), p = [];
                        break;
                    case "textarea":
                        u = bn(e, u), l = bn(e, l), p = [];
                        break;
                    default:
                        typeof u.onClick != "function" && typeof l.onClick == "function" && (e.onclick = Yl);
                }
                Rr(i, l);
                var y;
                i = null;
                for(A in u)if (!l.hasOwnProperty(A) && u.hasOwnProperty(A) && u[A] != null) if (A === "style") {
                    var S = u[A];
                    for(y in S)S.hasOwnProperty(y) && (i || (i = {}), i[y] = "");
                } else A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (s.hasOwnProperty(A) ? p || (p = []) : (p = p || []).push(A, null));
                for(A in l){
                    var P = l[A];
                    if (S = u?.[A], l.hasOwnProperty(A) && P !== S && (P != null || S != null)) if (A === "style") if (S) {
                        for(y in S)!S.hasOwnProperty(y) || P && P.hasOwnProperty(y) || (i || (i = {}), i[y] = "");
                        for(y in P)P.hasOwnProperty(y) && S[y] !== P[y] && (i || (i = {}), i[y] = P[y]);
                    } else i || (p || (p = []), p.push(A, i)), i = P;
                    else A === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, S = S ? S.__html : void 0, P != null && S !== P && (p = p || []).push(A, P)) : A === "children" ? typeof P != "string" && typeof P != "number" || (p = p || []).push(A, "" + P) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (s.hasOwnProperty(A) ? (P != null && A === "onScroll" && et("scroll", e), p || S === P || (p = [])) : (p = p || []).push(A, P));
                }
                i && (p = p || []).push("style", i);
                var A = p;
                (t.updateQueue = A) && (t.flags |= 4);
            }
        }, yh = function(e, t, i, l) {
            i !== l && (t.flags |= 4);
        };
        function Xs(e, t) {
            if (!rt) switch(e.tailMode){
                case "hidden":
                    t = e.tail;
                    for(var i = null; t !== null;)t.alternate !== null && (i = t), t = t.sibling;
                    i === null ? e.tail = null : i.sibling = null;
                    break;
                case "collapsed":
                    i = e.tail;
                    for(var l = null; i !== null;)i.alternate !== null && (l = i), i = i.sibling;
                    l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
            }
        }
        function Qt(e) {
            var t = e.alternate !== null && e.alternate.child === e.child, i = 0, l = 0;
            if (t) for(var u = e.child; u !== null;)i |= u.lanes | u.childLanes, l |= u.subtreeFlags & 14680064, l |= u.flags & 14680064, u.return = e, u = u.sibling;
            else for(u = e.child; u !== null;)i |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = e, u = u.sibling;
            return e.subtreeFlags |= l, e.childLanes = i, t;
        }
        function Ry(e, t, i) {
            var l = t.pendingProps;
            switch(tc(t), t.tag){
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return Qt(t), null;
                case 1:
                    return xn(t.type) && Ql(), Qt(t), null;
                case 3:
                    return l = t.stateNode, Vo(), tt(Sn), tt(Yt), hc(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (na(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Sr !== null && (Vc(Sr), Sr = null))), Ac(e, t), Qt(t), null;
                case 5:
                    dc(t);
                    var u = Ji(js.current);
                    if (i = t.type, e !== null && t.stateNode != null) mh(e, t, i, l, u), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                    else {
                        if (!l) {
                            if (t.stateNode === null) throw Error(r(166));
                            return Qt(t), null;
                        }
                        if (e = Ji(Or.current), na(t)) {
                            l = t.stateNode, i = t.type;
                            var p = t.memoizedProps;
                            switch(l[Ar] = t, l[bs] = p, e = (t.mode & 1) !== 0, i){
                                case "dialog":
                                    et("cancel", l), et("close", l);
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    et("load", l);
                                    break;
                                case "video":
                                case "audio":
                                    for(u = 0; u < Ms.length; u++)et(Ms[u], l);
                                    break;
                                case "source":
                                    et("error", l);
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    et("error", l), et("load", l);
                                    break;
                                case "details":
                                    et("toggle", l);
                                    break;
                                case "input":
                                    Ut(l, p), et("invalid", l);
                                    break;
                                case "select":
                                    l._wrapperState = {
                                        wasMultiple: !!p.multiple
                                    }, et("invalid", l);
                                    break;
                                case "textarea":
                                    gr(l, p), et("invalid", l);
                            }
                            Rr(i, p), u = null;
                            for(var y in p)if (p.hasOwnProperty(y)) {
                                var S = p[y];
                                y === "children" ? typeof S == "string" ? l.textContent !== S && (p.suppressHydrationWarning !== !0 && $l(l.textContent, S, e), u = [
                                    "children",
                                    S
                                ]) : typeof S == "number" && l.textContent !== "" + S && (p.suppressHydrationWarning !== !0 && $l(l.textContent, S, e), u = [
                                    "children",
                                    "" + S
                                ]) : s.hasOwnProperty(y) && S != null && y === "onScroll" && et("scroll", l);
                            }
                            switch(i){
                                case "input":
                                    wt(l), qt(l, p, !0);
                                    break;
                                case "textarea":
                                    wt(l), gt(l);
                                    break;
                                case "select":
                                case "option":
                                    break;
                                default:
                                    typeof p.onClick == "function" && (l.onclick = Yl);
                            }
                            l = u, t.updateQueue = l, l !== null && (t.flags |= 4);
                        } else {
                            y = u.nodeType === 9 ? u : u.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = mr(i)), e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = y.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof l.is == "string" ? e = y.createElement(i, {
                                is: l.is
                            }) : (e = y.createElement(i), i === "select" && (y = e, l.multiple ? y.multiple = !0 : l.size && (y.size = l.size))) : e = y.createElementNS(e, i), e[Ar] = t, e[bs] = l, gh(e, t, !1, !1), t.stateNode = e;
                            e: {
                                switch(y = er(i, l), i){
                                    case "dialog":
                                        et("cancel", e), et("close", e), u = l;
                                        break;
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        et("load", e), u = l;
                                        break;
                                    case "video":
                                    case "audio":
                                        for(u = 0; u < Ms.length; u++)et(Ms[u], e);
                                        u = l;
                                        break;
                                    case "source":
                                        et("error", e), u = l;
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        et("error", e), et("load", e), u = l;
                                        break;
                                    case "details":
                                        et("toggle", e), u = l;
                                        break;
                                    case "input":
                                        Ut(e, l), u = Qe(e, l), et("invalid", e);
                                        break;
                                    case "option":
                                        u = l;
                                        break;
                                    case "select":
                                        e._wrapperState = {
                                            wasMultiple: !!l.multiple
                                        }, u = C({}, l, {
                                            value: void 0
                                        }), et("invalid", e);
                                        break;
                                    case "textarea":
                                        gr(e, l), u = bn(e, l), et("invalid", e);
                                        break;
                                    default:
                                        u = l;
                                }
                                Rr(i, u), S = u;
                                for(p in S)if (S.hasOwnProperty(p)) {
                                    var P = S[p];
                                    p === "style" ? Jn(e, P) : p === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, P != null && on(e, P)) : p === "children" ? typeof P == "string" ? (i !== "textarea" || P !== "") && sn(e, P) : typeof P == "number" && sn(e, "" + P) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (s.hasOwnProperty(p) ? P != null && p === "onScroll" && et("scroll", e) : P != null && I(e, p, P, y));
                                }
                                switch(i){
                                    case "input":
                                        wt(e), qt(e, l, !1);
                                        break;
                                    case "textarea":
                                        wt(e), gt(e);
                                        break;
                                    case "option":
                                        l.value != null && e.setAttribute("value", "" + Ce(l.value));
                                        break;
                                    case "select":
                                        e.multiple = !!l.multiple, p = l.value, p != null ? We(e, !!l.multiple, p, !1) : l.defaultValue != null && We(e, !!l.multiple, l.defaultValue, !0);
                                        break;
                                    default:
                                        typeof u.onClick == "function" && (e.onclick = Yl);
                                }
                                switch(i){
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        l = !!l.autoFocus;
                                        break e;
                                    case "img":
                                        l = !0;
                                        break e;
                                    default:
                                        l = !1;
                                }
                            }
                            l && (t.flags |= 4);
                        }
                        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
                    }
                    return Qt(t), null;
                case 6:
                    if (e && t.stateNode != null) yh(e, t, e.memoizedProps, l);
                    else {
                        if (typeof l != "string" && t.stateNode === null) throw Error(r(166));
                        if (i = Ji(js.current), Ji(Or.current), na(t)) {
                            if (l = t.stateNode, i = t.memoizedProps, l[Ar] = t, (p = l.nodeValue !== i) && (e = In, e !== null)) switch(e.tag){
                                case 3:
                                    $l(l.nodeValue, i, (e.mode & 1) !== 0);
                                    break;
                                case 5:
                                    e.memoizedProps.suppressHydrationWarning !== !0 && $l(l.nodeValue, i, (e.mode & 1) !== 0);
                            }
                            p && (t.flags |= 4);
                        } else l = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(l), l[Ar] = t, t.stateNode = l;
                    }
                    return Qt(t), null;
                case 13:
                    if (tt(st), l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (rt && jn !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) wp(), jo(), t.flags |= 98560, p = !1;
                        else if (p = na(t), l !== null && l.dehydrated !== null) {
                            if (e === null) {
                                if (!p) throw Error(r(318));
                                if (p = t.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(r(317));
                                p[Ar] = t;
                            } else jo(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            Qt(t), p = !1;
                        } else Sr !== null && (Vc(Sr), Sr = null), p = !0;
                        if (!p) return t.flags & 65536 ? t : null;
                    }
                    return (t.flags & 128) !== 0 ? (t.lanes = i, t) : (l = l !== null, l !== (e !== null && e.memoizedState !== null) && l && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (st.current & 1) !== 0 ? zt === 0 && (zt = 3) : qc())), t.updateQueue !== null && (t.flags |= 4), Qt(t), null);
                case 4:
                    return Vo(), Ac(e, t), e === null && As(t.stateNode.containerInfo), Qt(t), null;
                case 10:
                    return lc(t.type._context), Qt(t), null;
                case 17:
                    return xn(t.type) && Ql(), Qt(t), null;
                case 19:
                    if (tt(st), p = t.memoizedState, p === null) return Qt(t), null;
                    if (l = (t.flags & 128) !== 0, y = p.rendering, y === null) if (l) Xs(p, !1);
                    else {
                        if (zt !== 0 || e !== null && (e.flags & 128) !== 0) for(e = t.child; e !== null;){
                            if (y = aa(e), y !== null) {
                                for(t.flags |= 128, Xs(p, !1), l = y.updateQueue, l !== null && (t.updateQueue = l, t.flags |= 4), t.subtreeFlags = 0, l = i, i = t.child; i !== null;)p = i, e = l, p.flags &= 14680066, y = p.alternate, y === null ? (p.childLanes = 0, p.lanes = e, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = y.childLanes, p.lanes = y.lanes, p.child = y.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = y.memoizedProps, p.memoizedState = y.memoizedState, p.updateQueue = y.updateQueue, p.type = y.type, e = y.dependencies, p.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), i = i.sibling;
                                return Ye(st, st.current & 1 | 2), t.child;
                            }
                            e = e.sibling;
                        }
                        p.tail !== null && De() > $o && (t.flags |= 128, l = !0, Xs(p, !1), t.lanes = 4194304);
                    }
                    else {
                        if (!l) if (e = aa(y), e !== null) {
                            if (t.flags |= 128, l = !0, i = e.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), Xs(p, !0), p.tail === null && p.tailMode === "hidden" && !y.alternate && !rt) return Qt(t), null;
                        } else 2 * De() - p.renderingStartTime > $o && i !== 1073741824 && (t.flags |= 128, l = !0, Xs(p, !1), t.lanes = 4194304);
                        p.isBackwards ? (y.sibling = t.child, t.child = y) : (i = p.last, i !== null ? i.sibling = y : t.child = y, p.last = y);
                    }
                    return p.tail !== null ? (t = p.tail, p.rendering = t, p.tail = t.sibling, p.renderingStartTime = De(), t.sibling = null, i = st.current, Ye(st, l ? i & 1 | 2 : i & 1), t) : (Qt(t), null);
                case 22:
                case 23:
                    return Hc(), l = t.memoizedState !== null, e !== null && e.memoizedState !== null !== l && (t.flags |= 8192), l && (t.mode & 1) !== 0 ? (Un & 1073741824) !== 0 && (Qt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qt(t), null;
                case 24:
                    return null;
                case 25:
                    return null;
            }
            throw Error(r(156, t.tag));
        }
        function Dy(e, t) {
            switch(tc(t), t.tag){
                case 1:
                    return xn(t.type) && Ql(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return Vo(), tt(Sn), tt(Yt), hc(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
                case 5:
                    return dc(t), null;
                case 13:
                    if (tt(st), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                        if (t.alternate === null) throw Error(r(340));
                        jo();
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 19:
                    return tt(st), null;
                case 4:
                    return Vo(), null;
                case 10:
                    return lc(t.type._context), null;
                case 22:
                case 23:
                    return Hc(), null;
                case 24:
                    return null;
                default:
                    return null;
            }
        }
        var ya = !1, Zt = !1, Ly = typeof WeakSet == "function" ? WeakSet : Set, te = null;
        function Ho(e, t) {
            var i = e.ref;
            if (i !== null) if (typeof i == "function") try {
                i(null);
            } catch (l) {
                pt(e, t, l);
            }
            else i.current = null;
        }
        function Oc(e, t, i) {
            try {
                i();
            } catch (l) {
                pt(e, t, l);
            }
        }
        var _h = !1;
        function My(e, t) {
            if (Hu = Nl, e = Kd(), Fu(e)) {
                if ("selectionStart" in e) var i = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
                else e: {
                    i = (i = e.ownerDocument) && i.defaultView || window;
                    var l = i.getSelection && i.getSelection();
                    if (l && l.rangeCount !== 0) {
                        i = l.anchorNode;
                        var u = l.anchorOffset, p = l.focusNode;
                        l = l.focusOffset;
                        try {
                            i.nodeType, p.nodeType;
                        } catch  {
                            i = null;
                            break e;
                        }
                        var y = 0, S = -1, P = -1, A = 0, H = 0, $ = e, V = null;
                        t: for(;;){
                            for(var ee; $ !== i || u !== 0 && $.nodeType !== 3 || (S = y + u), $ !== p || l !== 0 && $.nodeType !== 3 || (P = y + l), $.nodeType === 3 && (y += $.nodeValue.length), (ee = $.firstChild) !== null;)V = $, $ = ee;
                            for(;;){
                                if ($ === e) break t;
                                if (V === i && ++A === u && (S = y), V === p && ++H === l && (P = y), (ee = $.nextSibling) !== null) break;
                                $ = V, V = $.parentNode;
                            }
                            $ = ee;
                        }
                        i = S === -1 || P === -1 ? null : {
                            start: S,
                            end: P
                        };
                    } else i = null;
                }
                i = i || {
                    start: 0,
                    end: 0
                };
            } else i = null;
            for(qu = {
                focusedElem: e,
                selectionRange: i
            }, Nl = !1, te = t; te !== null;)if (t = te, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, te = e;
            else for(; te !== null;){
                t = te;
                try {
                    var re = t.alternate;
                    if ((t.flags & 1024) !== 0) switch(t.tag){
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (re !== null) {
                                var oe = re.memoizedProps, yt = re.memoizedState, R = t.stateNode, z = R.getSnapshotBeforeUpdate(t.elementType === t.type ? oe : xr(t.type, oe), yt);
                                R.__reactInternalSnapshotBeforeUpdate = z;
                            }
                            break;
                        case 3:
                            var M = t.stateNode.containerInfo;
                            M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(r(163));
                    }
                } catch (Y) {
                    pt(t, t.return, Y);
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, te = e;
                    break;
                }
                te = t.return;
            }
            return re = _h, _h = !1, re;
        }
        function Hs(e, t, i) {
            var l = t.updateQueue;
            if (l = l !== null ? l.lastEffect : null, l !== null) {
                var u = l = l.next;
                do {
                    if ((u.tag & e) === e) {
                        var p = u.destroy;
                        u.destroy = void 0, p !== void 0 && Oc(t, i, p);
                    }
                    u = u.next;
                }while (u !== l);
            }
        }
        function _a(e, t) {
            if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
                var i = t = t.next;
                do {
                    if ((i.tag & e) === e) {
                        var l = i.create;
                        i.destroy = l();
                    }
                    i = i.next;
                }while (i !== t);
            }
        }
        function bc(e) {
            var t = e.ref;
            if (t !== null) {
                var i = e.stateNode;
                e.tag, e = i, typeof t == "function" ? t(e) : t.current = e;
            }
        }
        function vh(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, vh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ar], delete t[bs], delete t[Qu], delete t[hy], delete t[gy])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        function wh(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 4;
        }
        function kh(e) {
            e: for(;;){
                for(; e.sibling === null;){
                    if (e.return === null || wh(e.return)) return null;
                    e = e.return;
                }
                for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                    if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child;
                }
                if (!(e.flags & 2)) return e.stateNode;
            }
        }
        function Bc(e, t, i) {
            var l = e.tag;
            if (l === 5 || l === 6) e = e.stateNode, t ? i.nodeType === 8 ? i.parentNode.insertBefore(e, t) : i.insertBefore(e, t) : (i.nodeType === 8 ? (t = i.parentNode, t.insertBefore(e, i)) : (t = i, t.appendChild(e)), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = Yl));
            else if (l !== 4 && (e = e.child, e !== null)) for(Bc(e, t, i), e = e.sibling; e !== null;)Bc(e, t, i), e = e.sibling;
        }
        function Nc(e, t, i) {
            var l = e.tag;
            if (l === 5 || l === 6) e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e);
            else if (l !== 4 && (e = e.child, e !== null)) for(Nc(e, t, i), e = e.sibling; e !== null;)Nc(e, t, i), e = e.sibling;
        }
        var Gt = null, Cr = !1;
        function Si(e, t, i) {
            for(i = i.child; i !== null;)Sh(e, t, i), i = i.sibling;
        }
        function Sh(e, t, i) {
            if (an && typeof an.onCommitFiberUnmount == "function") try {
                an.onCommitFiberUnmount(Lr, i);
            } catch  {}
            switch(i.tag){
                case 5:
                    Zt || Ho(i, t);
                case 6:
                    var l = Gt, u = Cr;
                    Gt = null, Si(e, t, i), Gt = l, Cr = u, Gt !== null && (Cr ? (e = Gt, i = i.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : Gt.removeChild(i.stateNode));
                    break;
                case 18:
                    Gt !== null && (Cr ? (e = Gt, i = i.stateNode, e.nodeType === 8 ? Ku(e.parentNode, i) : e.nodeType === 1 && Ku(e, i), Cs(e)) : Ku(Gt, i.stateNode));
                    break;
                case 4:
                    l = Gt, u = Cr, Gt = i.stateNode.containerInfo, Cr = !0, Si(e, t, i), Gt = l, Cr = u;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    if (!Zt && (l = i.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
                        u = l = l.next;
                        do {
                            var p = u, y = p.destroy;
                            p = p.tag, y !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && Oc(i, t, y), u = u.next;
                        }while (u !== l);
                    }
                    Si(e, t, i);
                    break;
                case 1:
                    if (!Zt && (Ho(i, t), l = i.stateNode, typeof l.componentWillUnmount == "function")) try {
                        l.props = i.memoizedProps, l.state = i.memoizedState, l.componentWillUnmount();
                    } catch (S) {
                        pt(i, t, S);
                    }
                    Si(e, t, i);
                    break;
                case 21:
                    Si(e, t, i);
                    break;
                case 22:
                    i.mode & 1 ? (Zt = (l = Zt) || i.memoizedState !== null, Si(e, t, i), Zt = l) : Si(e, t, i);
                    break;
                default:
                    Si(e, t, i);
            }
        }
        function xh(e) {
            var t = e.updateQueue;
            if (t !== null) {
                e.updateQueue = null;
                var i = e.stateNode;
                i === null && (i = e.stateNode = new Ly), t.forEach(function(l) {
                    var u = Uy.bind(null, e, l);
                    i.has(l) || (i.add(l), l.then(u, u));
                });
            }
        }
        function Pr(e, t) {
            var i = t.deletions;
            if (i !== null) for(var l = 0; l < i.length; l++){
                var u = i[l];
                try {
                    var p = e, y = t, S = y;
                    e: for(; S !== null;){
                        switch(S.tag){
                            case 5:
                                Gt = S.stateNode, Cr = !1;
                                break e;
                            case 3:
                                Gt = S.stateNode.containerInfo, Cr = !0;
                                break e;
                            case 4:
                                Gt = S.stateNode.containerInfo, Cr = !0;
                                break e;
                        }
                        S = S.return;
                    }
                    if (Gt === null) throw Error(r(160));
                    Sh(p, y, u), Gt = null, Cr = !1;
                    var P = u.alternate;
                    P !== null && (P.return = null), u.return = null;
                } catch (A) {
                    pt(u, t, A);
                }
            }
            if (t.subtreeFlags & 12854) for(t = t.child; t !== null;)Ch(t, e), t = t.sibling;
        }
        function Ch(e, t) {
            var i = e.alternate, l = e.flags;
            switch(e.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    if (Pr(t, e), Br(e), l & 4) {
                        try {
                            Hs(3, e, e.return), _a(3, e);
                        } catch (oe) {
                            pt(e, e.return, oe);
                        }
                        try {
                            Hs(5, e, e.return);
                        } catch (oe) {
                            pt(e, e.return, oe);
                        }
                    }
                    break;
                case 1:
                    Pr(t, e), Br(e), l & 512 && i !== null && Ho(i, i.return);
                    break;
                case 5:
                    if (Pr(t, e), Br(e), l & 512 && i !== null && Ho(i, i.return), e.flags & 32) {
                        var u = e.stateNode;
                        try {
                            sn(u, "");
                        } catch (oe) {
                            pt(e, e.return, oe);
                        }
                    }
                    if (l & 4 && (u = e.stateNode, u != null)) {
                        var p = e.memoizedProps, y = i !== null ? i.memoizedProps : p, S = e.type, P = e.updateQueue;
                        if (e.updateQueue = null, P !== null) try {
                            S === "input" && p.type === "radio" && p.name != null && Ht(u, p), er(S, y);
                            var A = er(S, p);
                            for(y = 0; y < P.length; y += 2){
                                var H = P[y], $ = P[y + 1];
                                H === "style" ? Jn(u, $) : H === "dangerouslySetInnerHTML" ? on(u, $) : H === "children" ? sn(u, $) : I(u, H, $, A);
                            }
                            switch(S){
                                case "input":
                                    B(u, p);
                                    break;
                                case "textarea":
                                    zr(u, p);
                                    break;
                                case "select":
                                    var V = u._wrapperState.wasMultiple;
                                    u._wrapperState.wasMultiple = !!p.multiple;
                                    var ee = p.value;
                                    ee != null ? We(u, !!p.multiple, ee, !1) : V !== !!p.multiple && (p.defaultValue != null ? We(u, !!p.multiple, p.defaultValue, !0) : We(u, !!p.multiple, p.multiple ? [] : "", !1));
                            }
                            u[bs] = p;
                        } catch (oe) {
                            pt(e, e.return, oe);
                        }
                    }
                    break;
                case 6:
                    if (Pr(t, e), Br(e), l & 4) {
                        if (e.stateNode === null) throw Error(r(162));
                        u = e.stateNode, p = e.memoizedProps;
                        try {
                            u.nodeValue = p;
                        } catch (oe) {
                            pt(e, e.return, oe);
                        }
                    }
                    break;
                case 3:
                    if (Pr(t, e), Br(e), l & 4 && i !== null && i.memoizedState.isDehydrated) try {
                        Cs(t.containerInfo);
                    } catch (oe) {
                        pt(e, e.return, oe);
                    }
                    break;
                case 4:
                    Pr(t, e), Br(e);
                    break;
                case 13:
                    Pr(t, e), Br(e), u = e.child, u.flags & 8192 && (p = u.memoizedState !== null, u.stateNode.isHidden = p, !p || u.alternate !== null && u.alternate.memoizedState !== null || (jc = De())), l & 4 && xh(e);
                    break;
                case 22:
                    if (H = i !== null && i.memoizedState !== null, e.mode & 1 ? (Zt = (A = Zt) || H, Pr(t, e), Zt = A) : Pr(t, e), Br(e), l & 8192) {
                        if (A = e.memoizedState !== null, (e.stateNode.isHidden = A) && !H && (e.mode & 1) !== 0) for(te = e, H = e.child; H !== null;){
                            for($ = te = H; te !== null;){
                                switch(V = te, ee = V.child, V.tag){
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        Hs(4, V, V.return);
                                        break;
                                    case 1:
                                        Ho(V, V.return);
                                        var re = V.stateNode;
                                        if (typeof re.componentWillUnmount == "function") {
                                            l = V, i = V.return;
                                            try {
                                                t = l, re.props = t.memoizedProps, re.state = t.memoizedState, re.componentWillUnmount();
                                            } catch (oe) {
                                                pt(l, i, oe);
                                            }
                                        }
                                        break;
                                    case 5:
                                        Ho(V, V.return);
                                        break;
                                    case 22:
                                        if (V.memoizedState !== null) {
                                            Eh($);
                                            continue;
                                        }
                                }
                                ee !== null ? (ee.return = V, te = ee) : Eh($);
                            }
                            H = H.sibling;
                        }
                        e: for(H = null, $ = e;;){
                            if ($.tag === 5) {
                                if (H === null) {
                                    H = $;
                                    try {
                                        u = $.stateNode, A ? (p = u.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (S = $.stateNode, P = $.memoizedProps.style, y = P != null && P.hasOwnProperty("display") ? P.display : null, S.style.display = Xi("display", y));
                                    } catch (oe) {
                                        pt(e, e.return, oe);
                                    }
                                }
                            } else if ($.tag === 6) {
                                if (H === null) try {
                                    $.stateNode.nodeValue = A ? "" : $.memoizedProps;
                                } catch (oe) {
                                    pt(e, e.return, oe);
                                }
                            } else if (($.tag !== 22 && $.tag !== 23 || $.memoizedState === null || $ === e) && $.child !== null) {
                                $.child.return = $, $ = $.child;
                                continue;
                            }
                            if ($ === e) break e;
                            for(; $.sibling === null;){
                                if ($.return === null || $.return === e) break e;
                                H === $ && (H = null), $ = $.return;
                            }
                            H === $ && (H = null), $.sibling.return = $.return, $ = $.sibling;
                        }
                    }
                    break;
                case 19:
                    Pr(t, e), Br(e), l & 4 && xh(e);
                    break;
                case 21:
                    break;
                default:
                    Pr(t, e), Br(e);
            }
        }
        function Br(e) {
            var t = e.flags;
            if (t & 2) {
                try {
                    e: {
                        for(var i = e.return; i !== null;){
                            if (wh(i)) {
                                var l = i;
                                break e;
                            }
                            i = i.return;
                        }
                        throw Error(r(160));
                    }
                    switch(l.tag){
                        case 5:
                            var u = l.stateNode;
                            l.flags & 32 && (sn(u, ""), l.flags &= -33);
                            var p = kh(e);
                            Nc(e, p, u);
                            break;
                        case 3:
                        case 4:
                            var y = l.stateNode.containerInfo, S = kh(e);
                            Bc(e, S, y);
                            break;
                        default:
                            throw Error(r(161));
                    }
                } catch (P) {
                    pt(e, e.return, P);
                }
                e.flags &= -3;
            }
            t & 4096 && (e.flags &= -4097);
        }
        function Ay(e, t, i) {
            te = e, Ph(e);
        }
        function Ph(e, t, i) {
            for(var l = (e.mode & 1) !== 0; te !== null;){
                var u = te, p = u.child;
                if (u.tag === 22 && l) {
                    var y = u.memoizedState !== null || ya;
                    if (!y) {
                        var S = u.alternate, P = S !== null && S.memoizedState !== null || Zt;
                        S = ya;
                        var A = Zt;
                        if (ya = y, (Zt = P) && !A) for(te = u; te !== null;)y = te, P = y.child, y.tag === 22 && y.memoizedState !== null ? zh(u) : P !== null ? (P.return = y, te = P) : zh(u);
                        for(; p !== null;)te = p, Ph(p), p = p.sibling;
                        te = u, ya = S, Zt = A;
                    }
                    Th(e);
                } else (u.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = u, te = p) : Th(e);
            }
        }
        function Th(e) {
            for(; te !== null;){
                var t = te;
                if ((t.flags & 8772) !== 0) {
                    var i = t.alternate;
                    try {
                        if ((t.flags & 8772) !== 0) switch(t.tag){
                            case 0:
                            case 11:
                            case 15:
                                Zt || _a(5, t);
                                break;
                            case 1:
                                var l = t.stateNode;
                                if (t.flags & 4 && !Zt) if (i === null) l.componentDidMount();
                                else {
                                    var u = t.elementType === t.type ? i.memoizedProps : xr(t.type, i.memoizedProps);
                                    l.componentDidUpdate(u, i.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
                                }
                                var p = t.updateQueue;
                                p !== null && Ep(t, p, l);
                                break;
                            case 3:
                                var y = t.updateQueue;
                                if (y !== null) {
                                    if (i = null, t.child !== null) switch(t.child.tag){
                                        case 5:
                                            i = t.child.stateNode;
                                            break;
                                        case 1:
                                            i = t.child.stateNode;
                                    }
                                    Ep(t, y, i);
                                }
                                break;
                            case 5:
                                var S = t.stateNode;
                                if (i === null && t.flags & 4) {
                                    i = S;
                                    var P = t.memoizedProps;
                                    switch(t.type){
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            P.autoFocus && i.focus();
                                            break;
                                        case "img":
                                            P.src && (i.src = P.src);
                                    }
                                }
                                break;
                            case 6:
                                break;
                            case 4:
                                break;
                            case 12:
                                break;
                            case 13:
                                if (t.memoizedState === null) {
                                    var A = t.alternate;
                                    if (A !== null) {
                                        var H = A.memoizedState;
                                        if (H !== null) {
                                            var $ = H.dehydrated;
                                            $ !== null && Cs($);
                                        }
                                    }
                                }
                                break;
                            case 19:
                            case 17:
                            case 21:
                            case 22:
                            case 23:
                            case 25:
                                break;
                            default:
                                throw Error(r(163));
                        }
                        Zt || t.flags & 512 && bc(t);
                    } catch (V) {
                        pt(t, t.return, V);
                    }
                }
                if (t === e) {
                    te = null;
                    break;
                }
                if (i = t.sibling, i !== null) {
                    i.return = t.return, te = i;
                    break;
                }
                te = t.return;
            }
        }
        function Eh(e) {
            for(; te !== null;){
                var t = te;
                if (t === e) {
                    te = null;
                    break;
                }
                var i = t.sibling;
                if (i !== null) {
                    i.return = t.return, te = i;
                    break;
                }
                te = t.return;
            }
        }
        function zh(e) {
            for(; te !== null;){
                var t = te;
                try {
                    switch(t.tag){
                        case 0:
                        case 11:
                        case 15:
                            var i = t.return;
                            try {
                                _a(4, t);
                            } catch (P) {
                                pt(t, i, P);
                            }
                            break;
                        case 1:
                            var l = t.stateNode;
                            if (typeof l.componentDidMount == "function") {
                                var u = t.return;
                                try {
                                    l.componentDidMount();
                                } catch (P) {
                                    pt(t, u, P);
                                }
                            }
                            var p = t.return;
                            try {
                                bc(t);
                            } catch (P) {
                                pt(t, p, P);
                            }
                            break;
                        case 5:
                            var y = t.return;
                            try {
                                bc(t);
                            } catch (P) {
                                pt(t, y, P);
                            }
                    }
                } catch (P) {
                    pt(t, t.return, P);
                }
                if (t === e) {
                    te = null;
                    break;
                }
                var S = t.sibling;
                if (S !== null) {
                    S.return = t.return, te = S;
                    break;
                }
                te = t.return;
            }
        }
        var Oy = Math.ceil, va = D.ReactCurrentDispatcher, Fc = D.ReactCurrentOwner, sr = D.ReactCurrentBatchConfig, Ie = 0, Bt = null, xt = null, Wt = 0, Un = 0, qo = yi(0), zt = 0, qs = null, to = 0, wa = 0, Ic = 0, $s = null, Pn = null, jc = 0, $o = 1 / 0, ei = null, ka = !1, Uc = null, xi = null, Sa = !1, Ci = null, xa = 0, Ys = 0, Gc = null, Ca = -1, Pa = 0;
        function cn() {
            return (Ie & 6) !== 0 ? De() : Ca !== -1 ? Ca : Ca = De();
        }
        function Pi(e) {
            return (e.mode & 1) === 0 ? 1 : (Ie & 2) !== 0 && Wt !== 0 ? Wt & -Wt : yy.transition !== null ? (Pa === 0 && (Pa = kd()), Pa) : (e = Ve, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Dd(e.type)), e);
        }
        function Tr(e, t, i, l) {
            if (50 < Ys) throw Ys = 0, Gc = null, Error(r(185));
            vs(e, i, l), ((Ie & 2) === 0 || e !== Bt) && (e === Bt && ((Ie & 2) === 0 && (wa |= i), zt === 4 && Ti(e, Wt)), Tn(e, l), i === 1 && Ie === 0 && (t.mode & 1) === 0 && ($o = De() + 500, Jl && vi()));
        }
        function Tn(e, t) {
            var i = e.callbackNode;
            y0(e, t);
            var l = Ol(e, e === Bt ? Wt : 0);
            if (l === 0) i !== null && Tt(i), e.callbackNode = null, e.callbackPriority = 0;
            else if (t = l & -l, e.callbackPriority !== t) {
                if (i != null && Tt(i), t === 1) e.tag === 0 ? my(Dh.bind(null, e)) : gp(Dh.bind(null, e)), dy(function() {
                    (Ie & 6) === 0 && vi();
                }), i = null;
                else {
                    switch(Sd(l)){
                        case 1:
                            i = kn;
                            break;
                        case 4:
                            i = Eo;
                            break;
                        case 16:
                            i = Hi;
                            break;
                        case 536870912:
                            i = Nn;
                            break;
                        default:
                            i = Hi;
                    }
                    i = Fh(i, Rh.bind(null, e));
                }
                e.callbackPriority = t, e.callbackNode = i;
            }
        }
        function Rh(e, t) {
            if (Ca = -1, Pa = 0, (Ie & 6) !== 0) throw Error(r(327));
            var i = e.callbackNode;
            if (Yo() && e.callbackNode !== i) return null;
            var l = Ol(e, e === Bt ? Wt : 0);
            if (l === 0) return null;
            if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || t) t = Ta(e, l);
            else {
                t = l;
                var u = Ie;
                Ie |= 2;
                var p = Mh();
                (Bt !== e || Wt !== t) && (ei = null, $o = De() + 500, ro(e, t));
                do try {
                    Ny();
                    break;
                } catch (S) {
                    Lh(e, S);
                }
                while (!0);
                sc(), va.current = p, Ie = u, xt !== null ? t = 0 : (Bt = null, Wt = 0, t = zt);
            }
            if (t !== 0) {
                if (t === 2 && (u = Su(e), u !== 0 && (l = u, t = Wc(e, u))), t === 1) throw i = qs, ro(e, 0), Ti(e, l), Tn(e, De()), i;
                if (t === 6) Ti(e, l);
                else {
                    if (u = e.current.alternate, (l & 30) === 0 && !by(u) && (t = Ta(e, l), t === 2 && (p = Su(e), p !== 0 && (l = p, t = Wc(e, p))), t === 1)) throw i = qs, ro(e, 0), Ti(e, l), Tn(e, De()), i;
                    switch(e.finishedWork = u, e.finishedLanes = l, t){
                        case 0:
                        case 1:
                            throw Error(r(345));
                        case 2:
                            io(e, Pn, ei);
                            break;
                        case 3:
                            if (Ti(e, l), (l & 130023424) === l && (t = jc + 500 - De(), 10 < t)) {
                                if (Ol(e, 0) !== 0) break;
                                if (u = e.suspendedLanes, (u & l) !== l) {
                                    cn(), e.pingedLanes |= e.suspendedLanes & u;
                                    break;
                                }
                                e.timeoutHandle = Yu(io.bind(null, e, Pn, ei), t);
                                break;
                            }
                            io(e, Pn, ei);
                            break;
                        case 4:
                            if (Ti(e, l), (l & 4194240) === l) break;
                            for(t = e.eventTimes, u = -1; 0 < l;){
                                var y = 31 - wr(l);
                                p = 1 << y, y = t[y], y > u && (u = y), l &= ~p;
                            }
                            if (l = u, l = De() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * Oy(l / 1960)) - l, 10 < l) {
                                e.timeoutHandle = Yu(io.bind(null, e, Pn, ei), l);
                                break;
                            }
                            io(e, Pn, ei);
                            break;
                        case 5:
                            io(e, Pn, ei);
                            break;
                        default:
                            throw Error(r(329));
                    }
                }
            }
            return Tn(e, De()), e.callbackNode === i ? Rh.bind(null, e) : null;
        }
        function Wc(e, t) {
            var i = $s;
            return e.current.memoizedState.isDehydrated && (ro(e, t).flags |= 256), e = Ta(e, t), e !== 2 && (t = Pn, Pn = i, t !== null && Vc(t)), e;
        }
        function Vc(e) {
            Pn === null ? Pn = e : Pn.push.apply(Pn, e);
        }
        function by(e) {
            for(var t = e;;){
                if (t.flags & 16384) {
                    var i = t.updateQueue;
                    if (i !== null && (i = i.stores, i !== null)) for(var l = 0; l < i.length; l++){
                        var u = i[l], p = u.getSnapshot;
                        u = u.value;
                        try {
                            if (!kr(p(), u)) return !1;
                        } catch  {
                            return !1;
                        }
                    }
                }
                if (i = t.child, t.subtreeFlags & 16384 && i !== null) i.return = t, t = i;
                else {
                    if (t === e) break;
                    for(; t.sibling === null;){
                        if (t.return === null || t.return === e) return !0;
                        t = t.return;
                    }
                    t.sibling.return = t.return, t = t.sibling;
                }
            }
            return !0;
        }
        function Ti(e, t) {
            for(t &= ~Ic, t &= ~wa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;){
                var i = 31 - wr(t), l = 1 << i;
                e[i] = -1, t &= ~l;
            }
        }
        function Dh(e) {
            if ((Ie & 6) !== 0) throw Error(r(327));
            Yo();
            var t = Ol(e, 0);
            if ((t & 1) === 0) return Tn(e, De()), null;
            var i = Ta(e, t);
            if (e.tag !== 0 && i === 2) {
                var l = Su(e);
                l !== 0 && (t = l, i = Wc(e, l));
            }
            if (i === 1) throw i = qs, ro(e, 0), Ti(e, t), Tn(e, De()), i;
            if (i === 6) throw Error(r(345));
            return e.finishedWork = e.current.alternate, e.finishedLanes = t, io(e, Pn, ei), Tn(e, De()), null;
        }
        function Xc(e, t) {
            var i = Ie;
            Ie |= 1;
            try {
                return e(t);
            } finally{
                Ie = i, Ie === 0 && ($o = De() + 500, Jl && vi());
            }
        }
        function no(e) {
            Ci !== null && Ci.tag === 0 && (Ie & 6) === 0 && Yo();
            var t = Ie;
            Ie |= 1;
            var i = sr.transition, l = Ve;
            try {
                if (sr.transition = null, Ve = 1, e) return e();
            } finally{
                Ve = l, sr.transition = i, Ie = t, (Ie & 6) === 0 && vi();
            }
        }
        function Hc() {
            Un = qo.current, tt(qo);
        }
        function ro(e, t) {
            e.finishedWork = null, e.finishedLanes = 0;
            var i = e.timeoutHandle;
            if (i !== -1 && (e.timeoutHandle = -1, fy(i)), xt !== null) for(i = xt.return; i !== null;){
                var l = i;
                switch(tc(l), l.tag){
                    case 1:
                        l = l.type.childContextTypes, l != null && Ql();
                        break;
                    case 3:
                        Vo(), tt(Sn), tt(Yt), hc();
                        break;
                    case 5:
                        dc(l);
                        break;
                    case 4:
                        Vo();
                        break;
                    case 13:
                        tt(st);
                        break;
                    case 19:
                        tt(st);
                        break;
                    case 10:
                        lc(l.type._context);
                        break;
                    case 22:
                    case 23:
                        Hc();
                }
                i = i.return;
            }
            if (Bt = e, xt = e = Ei(e.current, null), Wt = Un = t, zt = 0, qs = null, Ic = wa = to = 0, Pn = $s = null, Zi !== null) {
                for(t = 0; t < Zi.length; t++)if (i = Zi[t], l = i.interleaved, l !== null) {
                    i.interleaved = null;
                    var u = l.next, p = i.pending;
                    if (p !== null) {
                        var y = p.next;
                        p.next = u, l.next = y;
                    }
                    i.pending = l;
                }
                Zi = null;
            }
            return e;
        }
        function Lh(e, t) {
            do {
                var i = xt;
                try {
                    if (sc(), ua.current = pa, ca) {
                        for(var l = lt.memoizedState; l !== null;){
                            var u = l.queue;
                            u !== null && (u.pending = null), l = l.next;
                        }
                        ca = !1;
                    }
                    if (eo = 0, bt = Et = lt = null, Us = !1, Gs = 0, Fc.current = null, i === null || i.return === null) {
                        zt = 1, qs = t, xt = null;
                        break;
                    }
                    e: {
                        var p = e, y = i.return, S = i, P = t;
                        if (t = Wt, S.flags |= 32768, P !== null && typeof P == "object" && typeof P.then == "function") {
                            var A = P, H = S, $ = H.tag;
                            if ((H.mode & 1) === 0 && ($ === 0 || $ === 11 || $ === 15)) {
                                var V = H.alternate;
                                V ? (H.updateQueue = V.updateQueue, H.memoizedState = V.memoizedState, H.lanes = V.lanes) : (H.updateQueue = null, H.memoizedState = null);
                            }
                            var ee = nh(y);
                            if (ee !== null) {
                                ee.flags &= -257, rh(ee, y, S, p, t), ee.mode & 1 && th(p, A, t), t = ee, P = A;
                                var re = t.updateQueue;
                                if (re === null) {
                                    var oe = new Set;
                                    oe.add(P), t.updateQueue = oe;
                                } else re.add(P);
                                break e;
                            } else {
                                if ((t & 1) === 0) {
                                    th(p, A, t), qc();
                                    break e;
                                }
                                P = Error(r(426));
                            }
                        } else if (rt && S.mode & 1) {
                            var yt = nh(y);
                            if (yt !== null) {
                                (yt.flags & 65536) === 0 && (yt.flags |= 256), rh(yt, y, S, p, t), ic(Xo(P, S));
                                break e;
                            }
                        }
                        p = P = Xo(P, S), zt !== 4 && (zt = 2), $s === null ? $s = [
                            p
                        ] : $s.push(p), p = y;
                        do {
                            switch(p.tag){
                                case 3:
                                    p.flags |= 65536, t &= -t, p.lanes |= t;
                                    var R = Jp(p, P, t);
                                    Tp(p, R);
                                    break e;
                                case 1:
                                    S = P;
                                    var z = p.type, M = p.stateNode;
                                    if ((p.flags & 128) === 0 && (typeof z.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (xi === null || !xi.has(M)))) {
                                        p.flags |= 65536, t &= -t, p.lanes |= t;
                                        var Y = eh(p, S, t);
                                        Tp(p, Y);
                                        break e;
                                    }
                            }
                            p = p.return;
                        }while (p !== null);
                    }
                    Oh(i);
                } catch (se) {
                    t = se, xt === i && i !== null && (xt = i = i.return);
                    continue;
                }
                break;
            }while (!0);
        }
        function Mh() {
            var e = va.current;
            return va.current = pa, e === null ? pa : e;
        }
        function qc() {
            (zt === 0 || zt === 3 || zt === 2) && (zt = 4), Bt === null || (to & 268435455) === 0 && (wa & 268435455) === 0 || Ti(Bt, Wt);
        }
        function Ta(e, t) {
            var i = Ie;
            Ie |= 2;
            var l = Mh();
            (Bt !== e || Wt !== t) && (ei = null, ro(e, t));
            do try {
                By();
                break;
            } catch (u) {
                Lh(e, u);
            }
            while (!0);
            if (sc(), Ie = i, va.current = l, xt !== null) throw Error(r(261));
            return Bt = null, Wt = 0, zt;
        }
        function By() {
            for(; xt !== null;)Ah(xt);
        }
        function Ny() {
            for(; xt !== null && !Hr();)Ah(xt);
        }
        function Ah(e) {
            var t = Nh(e.alternate, e, Un);
            e.memoizedProps = e.pendingProps, t === null ? Oh(e) : xt = t, Fc.current = null;
        }
        function Oh(e) {
            var t = e;
            do {
                var i = t.alternate;
                if (e = t.return, (t.flags & 32768) === 0) {
                    if (i = Ry(i, t, Un), i !== null) {
                        xt = i;
                        return;
                    }
                } else {
                    if (i = Dy(i, t), i !== null) {
                        i.flags &= 32767, xt = i;
                        return;
                    }
                    if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                    else {
                        zt = 6, xt = null;
                        return;
                    }
                }
                if (t = t.sibling, t !== null) {
                    xt = t;
                    return;
                }
                xt = t = e;
            }while (t !== null);
            zt === 0 && (zt = 5);
        }
        function io(e, t, i) {
            var l = Ve, u = sr.transition;
            try {
                sr.transition = null, Ve = 1, Fy(e, t, i, l);
            } finally{
                sr.transition = u, Ve = l;
            }
            return null;
        }
        function Fy(e, t, i, l) {
            do Yo();
            while (Ci !== null);
            if ((Ie & 6) !== 0) throw Error(r(327));
            i = e.finishedWork;
            var u = e.finishedLanes;
            if (i === null) return null;
            if (e.finishedWork = null, e.finishedLanes = 0, i === e.current) throw Error(r(177));
            e.callbackNode = null, e.callbackPriority = 0;
            var p = i.lanes | i.childLanes;
            if (_0(e, p), e === Bt && (xt = Bt = null, Wt = 0), (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || Sa || (Sa = !0, Fh(Hi, function() {
                return Yo(), null;
            })), p = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || p) {
                p = sr.transition, sr.transition = null;
                var y = Ve;
                Ve = 1;
                var S = Ie;
                Ie |= 4, Fc.current = null, My(e, i), Ch(i, e), iy(qu), Nl = !!Hu, qu = Hu = null, e.current = i, Ay(i), To(), Ie = S, Ve = y, sr.transition = p;
            } else e.current = i;
            if (Sa && (Sa = !1, Ci = e, xa = u), p = e.pendingLanes, p === 0 && (xi = null), Mr(i.stateNode), Tn(e, De()), t !== null) for(l = e.onRecoverableError, i = 0; i < t.length; i++)u = t[i], l(u.value, {
                componentStack: u.stack,
                digest: u.digest
            });
            if (ka) throw ka = !1, e = Uc, Uc = null, e;
            return (xa & 1) !== 0 && e.tag !== 0 && Yo(), p = e.pendingLanes, (p & 1) !== 0 ? e === Gc ? Ys++ : (Ys = 0, Gc = e) : Ys = 0, vi(), null;
        }
        function Yo() {
            if (Ci !== null) {
                var e = Sd(xa), t = sr.transition, i = Ve;
                try {
                    if (sr.transition = null, Ve = 16 > e ? 16 : e, Ci === null) var l = !1;
                    else {
                        if (e = Ci, Ci = null, xa = 0, (Ie & 6) !== 0) throw Error(r(331));
                        var u = Ie;
                        for(Ie |= 4, te = e.current; te !== null;){
                            var p = te, y = p.child;
                            if ((te.flags & 16) !== 0) {
                                var S = p.deletions;
                                if (S !== null) {
                                    for(var P = 0; P < S.length; P++){
                                        var A = S[P];
                                        for(te = A; te !== null;){
                                            var H = te;
                                            switch(H.tag){
                                                case 0:
                                                case 11:
                                                case 15:
                                                    Hs(8, H, p);
                                            }
                                            var $ = H.child;
                                            if ($ !== null) $.return = H, te = $;
                                            else for(; te !== null;){
                                                H = te;
                                                var V = H.sibling, ee = H.return;
                                                if (vh(H), H === A) {
                                                    te = null;
                                                    break;
                                                }
                                                if (V !== null) {
                                                    V.return = ee, te = V;
                                                    break;
                                                }
                                                te = ee;
                                            }
                                        }
                                    }
                                    var re = p.alternate;
                                    if (re !== null) {
                                        var oe = re.child;
                                        if (oe !== null) {
                                            re.child = null;
                                            do {
                                                var yt = oe.sibling;
                                                oe.sibling = null, oe = yt;
                                            }while (oe !== null);
                                        }
                                    }
                                    te = p;
                                }
                            }
                            if ((p.subtreeFlags & 2064) !== 0 && y !== null) y.return = p, te = y;
                            else e: for(; te !== null;){
                                if (p = te, (p.flags & 2048) !== 0) switch(p.tag){
                                    case 0:
                                    case 11:
                                    case 15:
                                        Hs(9, p, p.return);
                                }
                                var R = p.sibling;
                                if (R !== null) {
                                    R.return = p.return, te = R;
                                    break e;
                                }
                                te = p.return;
                            }
                        }
                        var z = e.current;
                        for(te = z; te !== null;){
                            y = te;
                            var M = y.child;
                            if ((y.subtreeFlags & 2064) !== 0 && M !== null) M.return = y, te = M;
                            else e: for(y = z; te !== null;){
                                if (S = te, (S.flags & 2048) !== 0) try {
                                    switch(S.tag){
                                        case 0:
                                        case 11:
                                        case 15:
                                            _a(9, S);
                                    }
                                } catch (se) {
                                    pt(S, S.return, se);
                                }
                                if (S === y) {
                                    te = null;
                                    break e;
                                }
                                var Y = S.sibling;
                                if (Y !== null) {
                                    Y.return = S.return, te = Y;
                                    break e;
                                }
                                te = S.return;
                            }
                        }
                        if (Ie = u, vi(), an && typeof an.onPostCommitFiberRoot == "function") try {
                            an.onPostCommitFiberRoot(Lr, e);
                        } catch  {}
                        l = !0;
                    }
                    return l;
                } finally{
                    Ve = i, sr.transition = t;
                }
            }
            return !1;
        }
        function bh(e, t, i) {
            t = Xo(i, t), t = Jp(e, t, 1), e = ki(e, t, 1), t = cn(), e !== null && (vs(e, 1, t), Tn(e, t));
        }
        function pt(e, t, i) {
            if (e.tag === 3) bh(e, e, i);
            else for(; t !== null;){
                if (t.tag === 3) {
                    bh(t, e, i);
                    break;
                } else if (t.tag === 1) {
                    var l = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (xi === null || !xi.has(l))) {
                        e = Xo(i, e), e = eh(t, e, 1), t = ki(t, e, 1), e = cn(), t !== null && (vs(t, 1, e), Tn(t, e));
                        break;
                    }
                }
                t = t.return;
            }
        }
        function Iy(e, t, i) {
            var l = e.pingCache;
            l !== null && l.delete(t), t = cn(), e.pingedLanes |= e.suspendedLanes & i, Bt === e && (Wt & i) === i && (zt === 4 || zt === 3 && (Wt & 130023424) === Wt && 500 > De() - jc ? ro(e, 0) : Ic |= i), Tn(e, t);
        }
        function Bh(e, t) {
            t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Al, Al <<= 1, (Al & 130023424) === 0 && (Al = 4194304)));
            var i = cn();
            e = Qr(e, t), e !== null && (vs(e, t, i), Tn(e, i));
        }
        function jy(e) {
            var t = e.memoizedState, i = 0;
            t !== null && (i = t.retryLane), Bh(e, i);
        }
        function Uy(e, t) {
            var i = 0;
            switch(e.tag){
                case 13:
                    var l = e.stateNode, u = e.memoizedState;
                    u !== null && (i = u.retryLane);
                    break;
                case 19:
                    l = e.stateNode;
                    break;
                default:
                    throw Error(r(314));
            }
            l !== null && l.delete(t), Bh(e, i);
        }
        var Nh;
        Nh = function(e, t, i) {
            if (e !== null) if (e.memoizedProps !== t.pendingProps || Sn.current) Cn = !0;
            else {
                if ((e.lanes & i) === 0 && (t.flags & 128) === 0) return Cn = !1, zy(e, t, i);
                Cn = (e.flags & 131072) !== 0;
            }
            else Cn = !1, rt && (t.flags & 1048576) !== 0 && mp(t, ta, t.index);
            switch(t.lanes = 0, t.tag){
                case 2:
                    var l = t.type;
                    ma(e, t), e = t.pendingProps;
                    var u = No(t, Yt.current);
                    Wo(t, i), u = yc(null, t, l, e, u, i);
                    var p = _c();
                    return t.flags |= 1, typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, xn(l) ? (p = !0, Zl(t)) : p = !1, t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, cc(t), u.updater = ha, t.stateNode = u, u._reactInternals = t, Cc(t, l, e, i), t = zc(null, t, l, !0, p, i)) : (t.tag = 0, rt && p && ec(t), un(null, t, u, i), t = t.child), t;
                case 16:
                    l = t.elementType;
                    e: {
                        switch(ma(e, t), e = t.pendingProps, u = l._init, l = u(l._payload), t.type = l, u = t.tag = Wy(l), e = xr(l, e), u){
                            case 0:
                                t = Ec(null, t, l, e, i);
                                break e;
                            case 1:
                                t = uh(null, t, l, e, i);
                                break e;
                            case 11:
                                t = ih(null, t, l, e, i);
                                break e;
                            case 14:
                                t = oh(null, t, l, xr(l.type, e), i);
                                break e;
                        }
                        throw Error(r(306, l, ""));
                    }
                    return t;
                case 0:
                    return l = t.type, u = t.pendingProps, u = t.elementType === l ? u : xr(l, u), Ec(e, t, l, u, i);
                case 1:
                    return l = t.type, u = t.pendingProps, u = t.elementType === l ? u : xr(l, u), uh(e, t, l, u, i);
                case 3:
                    e: {
                        if (ch(t), e === null) throw Error(r(387));
                        l = t.pendingProps, p = t.memoizedState, u = p.element, Pp(e, t), la(t, l, null, i);
                        var y = t.memoizedState;
                        if (l = y.element, p.isDehydrated) if (p = {
                            element: l,
                            isDehydrated: !1,
                            cache: y.cache,
                            pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
                            transitions: y.transitions
                        }, t.updateQueue.baseState = p, t.memoizedState = p, t.flags & 256) {
                            u = Xo(Error(r(423)), t), t = fh(e, t, l, i, u);
                            break e;
                        } else if (l !== u) {
                            u = Xo(Error(r(424)), t), t = fh(e, t, l, i, u);
                            break e;
                        } else for(jn = mi(t.stateNode.containerInfo.firstChild), In = t, rt = !0, Sr = null, i = xp(t, null, l, i), t.child = i; i;)i.flags = i.flags & -3 | 4096, i = i.sibling;
                        else {
                            if (jo(), l === u) {
                                t = Jr(e, t, i);
                                break e;
                            }
                            un(e, t, l, i);
                        }
                        t = t.child;
                    }
                    return t;
                case 5:
                    return zp(t), e === null && rc(t), l = t.type, u = t.pendingProps, p = e !== null ? e.memoizedProps : null, y = u.children, $u(l, u) ? y = null : p !== null && $u(l, p) && (t.flags |= 32), ah(e, t), un(e, t, y, i), t.child;
                case 6:
                    return e === null && rc(t), null;
                case 13:
                    return dh(e, t, i);
                case 4:
                    return fc(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = Uo(t, null, l, i) : un(e, t, l, i), t.child;
                case 11:
                    return l = t.type, u = t.pendingProps, u = t.elementType === l ? u : xr(l, u), ih(e, t, l, u, i);
                case 7:
                    return un(e, t, t.pendingProps, i), t.child;
                case 8:
                    return un(e, t, t.pendingProps.children, i), t.child;
                case 12:
                    return un(e, t, t.pendingProps.children, i), t.child;
                case 10:
                    e: {
                        if (l = t.type._context, u = t.pendingProps, p = t.memoizedProps, y = u.value, Ye(ia, l._currentValue), l._currentValue = y, p !== null) if (kr(p.value, y)) {
                            if (p.children === u.children && !Sn.current) {
                                t = Jr(e, t, i);
                                break e;
                            }
                        } else for(p = t.child, p !== null && (p.return = t); p !== null;){
                            var S = p.dependencies;
                            if (S !== null) {
                                y = p.child;
                                for(var P = S.firstContext; P !== null;){
                                    if (P.context === l) {
                                        if (p.tag === 1) {
                                            P = Zr(-1, i & -i), P.tag = 2;
                                            var A = p.updateQueue;
                                            if (A !== null) {
                                                A = A.shared;
                                                var H = A.pending;
                                                H === null ? P.next = P : (P.next = H.next, H.next = P), A.pending = P;
                                            }
                                        }
                                        p.lanes |= i, P = p.alternate, P !== null && (P.lanes |= i), ac(p.return, i, t), S.lanes |= i;
                                        break;
                                    }
                                    P = P.next;
                                }
                            } else if (p.tag === 10) y = p.type === t.type ? null : p.child;
                            else if (p.tag === 18) {
                                if (y = p.return, y === null) throw Error(r(341));
                                y.lanes |= i, S = y.alternate, S !== null && (S.lanes |= i), ac(y, i, t), y = p.sibling;
                            } else y = p.child;
                            if (y !== null) y.return = p;
                            else for(y = p; y !== null;){
                                if (y === t) {
                                    y = null;
                                    break;
                                }
                                if (p = y.sibling, p !== null) {
                                    p.return = y.return, y = p;
                                    break;
                                }
                                y = y.return;
                            }
                            p = y;
                        }
                        un(e, t, u.children, i), t = t.child;
                    }
                    return t;
                case 9:
                    return u = t.type, l = t.pendingProps.children, Wo(t, i), u = ir(u), l = l(u), t.flags |= 1, un(e, t, l, i), t.child;
                case 14:
                    return l = t.type, u = xr(l, t.pendingProps), u = xr(l.type, u), oh(e, t, l, u, i);
                case 15:
                    return sh(e, t, t.type, t.pendingProps, i);
                case 17:
                    return l = t.type, u = t.pendingProps, u = t.elementType === l ? u : xr(l, u), ma(e, t), t.tag = 1, xn(l) ? (e = !0, Zl(t)) : e = !1, Wo(t, i), Qp(t, l, u), Cc(t, l, u, i), zc(null, t, l, !0, e, i);
                case 19:
                    return hh(e, t, i);
                case 22:
                    return lh(e, t, i);
            }
            throw Error(r(156, t.tag));
        };
        function Fh(e, t) {
            return St(e, t);
        }
        function Gy(e, t, i, l) {
            this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function lr(e, t, i, l) {
            return new Gy(e, t, i, l);
        }
        function $c(e) {
            return e = e.prototype, !(!e || !e.isReactComponent);
        }
        function Wy(e) {
            if (typeof e == "function") return $c(e) ? 1 : 0;
            if (e != null) {
                if (e = e.$$typeof, e === K) return 11;
                if (e === we) return 14;
            }
            return 2;
        }
        function Ei(e, t) {
            var i = e.alternate;
            return i === null ? (i = lr(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 14680064, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i;
        }
        function Ea(e, t, i, l, u, p) {
            var y = 2;
            if (l = e, typeof e == "function") $c(e) && (y = 1);
            else if (typeof e == "string") y = 5;
            else e: switch(e){
                case b:
                    return oo(i.children, u, p, t);
                case q:
                    y = 8, u |= 8;
                    break;
                case G:
                    return e = lr(12, i, t, u | 2), e.elementType = G, e.lanes = p, e;
                case fe:
                    return e = lr(13, i, t, u), e.elementType = fe, e.lanes = p, e;
                case ae:
                    return e = lr(19, i, t, u), e.elementType = ae, e.lanes = p, e;
                case J:
                    return za(i, u, p, t);
                default:
                    if (typeof e == "object" && e !== null) switch(e.$$typeof){
                        case X:
                            y = 10;
                            break e;
                        case ce:
                            y = 9;
                            break e;
                        case K:
                            y = 11;
                            break e;
                        case we:
                            y = 14;
                            break e;
                        case le:
                            y = 16, l = null;
                            break e;
                    }
                    throw Error(r(130, e == null ? e : typeof e, ""));
            }
            return t = lr(y, i, t, u), t.elementType = e, t.type = l, t.lanes = p, t;
        }
        function oo(e, t, i, l) {
            return e = lr(7, e, l, t), e.lanes = i, e;
        }
        function za(e, t, i, l) {
            return e = lr(22, e, l, t), e.elementType = J, e.lanes = i, e.stateNode = {
                isHidden: !1
            }, e;
        }
        function Yc(e, t, i) {
            return e = lr(6, e, null, t), e.lanes = i, e;
        }
        function Kc(e, t, i) {
            return t = lr(4, e.children !== null ? e.children : [], e.key, t), t.lanes = i, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t;
        }
        function Vy(e, t, i, l, u) {
            this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xu(0), this.expirationTimes = xu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xu(0), this.identifierPrefix = l, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null;
        }
        function Qc(e, t, i, l, u, p, y, S, P) {
            return e = new Vy(e, t, i, S, P), t === 1 ? (t = 1, p === !0 && (t |= 8)) : t = 0, p = lr(3, null, null, t), e.current = p, p.stateNode = e, p.memoizedState = {
                element: l,
                isDehydrated: i,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null
            }, cc(p), e;
        }
        function Xy(e, t, i) {
            var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: j,
                key: l == null ? null : "" + l,
                children: e,
                containerInfo: t,
                implementation: i
            };
        }
        function Ih(e) {
            if (!e) return _i;
            e = e._reactInternals;
            e: {
                if (Ne(e) !== e || e.tag !== 1) throw Error(r(170));
                var t = e;
                do {
                    switch(t.tag){
                        case 3:
                            t = t.stateNode.context;
                            break e;
                        case 1:
                            if (xn(t.type)) {
                                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                break e;
                            }
                    }
                    t = t.return;
                }while (t !== null);
                throw Error(r(171));
            }
            if (e.tag === 1) {
                var i = e.type;
                if (xn(i)) return pp(e, i, t);
            }
            return t;
        }
        function jh(e, t, i, l, u, p, y, S, P) {
            return e = Qc(i, l, !0, e, u, p, y, S, P), e.context = Ih(null), i = e.current, l = cn(), u = Pi(i), p = Zr(l, u), p.callback = t ?? null, ki(i, p, u), e.current.lanes = u, vs(e, u, l), Tn(e, l), e;
        }
        function Ra(e, t, i, l) {
            var u = t.current, p = cn(), y = Pi(u);
            return i = Ih(i), t.context === null ? t.context = i : t.pendingContext = i, t = Zr(p, y), t.payload = {
                element: e
            }, l = l === void 0 ? null : l, l !== null && (t.callback = l), e = ki(u, t, y), e !== null && (Tr(e, u, y, p), sa(e, u, y)), y;
        }
        function Da(e) {
            return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
        }
        function Uh(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var i = e.retryLane;
                e.retryLane = i !== 0 && i < t ? i : t;
            }
        }
        function Zc(e, t) {
            Uh(e, t), (e = e.alternate) && Uh(e, t);
        }
        function Hy() {
            return null;
        }
        var Gh = typeof reportError == "function" ? reportError : function(e) {
            console.error(e);
        };
        function Jc(e) {
            this._internalRoot = e;
        }
        La.prototype.render = Jc.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(r(409));
            Ra(e, t, null, null);
        }, La.prototype.unmount = Jc.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                no(function() {
                    Ra(null, e, null, null);
                }), t[qr] = null;
            }
        };
        function La(e) {
            this._internalRoot = e;
        }
        La.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = Pd();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for(var i = 0; i < pi.length && t !== 0 && t < pi[i].priority; i++);
                pi.splice(i, 0, e), i === 0 && zd(e);
            }
        };
        function ef(e) {
            return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
        }
        function Ma(e) {
            return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
        }
        function Wh() {}
        function qy(e, t, i, l, u) {
            if (u) {
                if (typeof l == "function") {
                    var p = l;
                    l = function() {
                        var A = Da(y);
                        p.call(A);
                    };
                }
                var y = jh(t, l, e, 0, null, !1, !1, "", Wh);
                return e._reactRootContainer = y, e[qr] = y.current, As(e.nodeType === 8 ? e.parentNode : e), no(), y;
            }
            for(; u = e.lastChild;)e.removeChild(u);
            if (typeof l == "function") {
                var S = l;
                l = function() {
                    var A = Da(P);
                    S.call(A);
                };
            }
            var P = Qc(e, 0, !1, null, null, !1, !1, "", Wh);
            return e._reactRootContainer = P, e[qr] = P.current, As(e.nodeType === 8 ? e.parentNode : e), no(function() {
                Ra(t, P, i, l);
            }), P;
        }
        function Aa(e, t, i, l, u) {
            var p = i._reactRootContainer;
            if (p) {
                var y = p;
                if (typeof u == "function") {
                    var S = u;
                    u = function() {
                        var P = Da(y);
                        S.call(P);
                    };
                }
                Ra(t, y, e, u);
            } else y = qy(i, t, e, u, l);
            return Da(y);
        }
        xd = function(e) {
            switch(e.tag){
                case 3:
                    var t = e.stateNode;
                    if (t.current.memoizedState.isDehydrated) {
                        var i = _s(t.pendingLanes);
                        i !== 0 && (Cu(t, i | 1), Tn(t, De()), (Ie & 6) === 0 && ($o = De() + 500, vi()));
                    }
                    break;
                case 13:
                    no(function() {
                        var l = Qr(e, 1);
                        if (l !== null) {
                            var u = cn();
                            Tr(l, e, 1, u);
                        }
                    }), Zc(e, 1);
            }
        }, Pu = function(e) {
            if (e.tag === 13) {
                var t = Qr(e, 134217728);
                if (t !== null) {
                    var i = cn();
                    Tr(t, e, 134217728, i);
                }
                Zc(e, 134217728);
            }
        }, Cd = function(e) {
            if (e.tag === 13) {
                var t = Pi(e), i = Qr(e, t);
                if (i !== null) {
                    var l = cn();
                    Tr(i, e, t, l);
                }
                Zc(e, t);
            }
        }, Pd = function() {
            return Ve;
        }, Td = function(e, t) {
            var i = Ve;
            try {
                return Ve = e, t();
            } finally{
                Ve = i;
            }
        }, vr = function(e, t, i) {
            switch(t){
                case "input":
                    if (B(e, i), t = i.name, i.type === "radio" && t != null) {
                        for(i = e; i.parentNode;)i = i.parentNode;
                        for(i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < i.length; t++){
                            var l = i[t];
                            if (l !== e && l.form === e.form) {
                                var u = Kl(l);
                                if (!u) throw Error(r(90));
                                Lt(l), B(l, u);
                            }
                        }
                    }
                    break;
                case "textarea":
                    zr(e, i);
                    break;
                case "select":
                    t = i.value, t != null && We(e, !!i.multiple, t, !1);
            }
        }, tr = Xc, ui = no;
        var $y = {
            usingClientEntryPoint: !1,
            Events: [
                Bs,
                bo,
                Kl,
                Dr,
                Xr,
                Xc
            ]
        }, Ks = {
            findFiberByHostInstance: $i,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        }, Yy = {
            bundleType: Ks.bundleType,
            version: Ks.version,
            rendererPackageName: Ks.rendererPackageName,
            rendererConfig: Ks.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: D.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(e) {
                return e = Bn(e), e === null ? null : e.stateNode;
            },
            findFiberByHostInstance: Ks.findFiberByHostInstance || Hy,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var Oa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!Oa.isDisabled && Oa.supportsFiber) try {
                Lr = Oa.inject(Yy), an = Oa;
            } catch  {}
        }
        return En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $y, En.createPortal = function(e, t) {
            var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!ef(t)) throw Error(r(200));
            return Xy(e, t, null, i);
        }, En.createRoot = function(e, t) {
            if (!ef(e)) throw Error(r(299));
            var i = !1, l = "", u = Gh;
            return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = Qc(e, 1, !1, null, null, i, !1, l, u), e[qr] = t.current, As(e.nodeType === 8 ? e.parentNode : e), new Jc(t);
        }, En.findDOMNode = function(e) {
            if (e == null) return null;
            if (e.nodeType === 1) return e;
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
            return e = Bn(t), e = e === null ? null : e.stateNode, e;
        }, En.flushSync = function(e) {
            return no(e);
        }, En.hydrate = function(e, t, i) {
            if (!Ma(t)) throw Error(r(200));
            return Aa(null, e, t, !0, i);
        }, En.hydrateRoot = function(e, t, i) {
            if (!ef(e)) throw Error(r(405));
            var l = i != null && i.hydratedSources || null, u = !1, p = "", y = Gh;
            if (i != null && (i.unstable_strictMode === !0 && (u = !0), i.identifierPrefix !== void 0 && (p = i.identifierPrefix), i.onRecoverableError !== void 0 && (y = i.onRecoverableError)), t = jh(t, null, e, 1, i ?? null, u, !1, p, y), e[qr] = t.current, As(e), l) for(e = 0; e < l.length; e++)i = l[e], u = i._getVersion, u = u(i._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
                i,
                u
            ] : t.mutableSourceEagerHydrationData.push(i, u);
            return new La(t);
        }, En.render = function(e, t, i) {
            if (!Ma(t)) throw Error(r(200));
            return Aa(null, e, t, !1, i);
        }, En.unmountComponentAtNode = function(e) {
            if (!Ma(e)) throw Error(r(40));
            return e._reactRootContainer ? (no(function() {
                Aa(null, null, e, !1, function() {
                    e._reactRootContainer = null, e[qr] = null;
                });
            }), !0) : !1;
        }, En.unstable_batchedUpdates = Xc, En.unstable_renderSubtreeIntoContainer = function(e, t, i, l) {
            if (!Ma(i)) throw Error(r(200));
            if (e == null || e._reactInternals === void 0) throw Error(r(38));
            return Aa(e, t, i, !1, l);
        }, En.version = "18.3.1-next-f1338f8080-20240426", En;
    }
    var Ag;
    function e1() {
        if (Ag) return wf.exports;
        Ag = 1;
        function c() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
            } catch (n) {
                console.error(n);
            }
        }
        return c(), wf.exports = Jv(), wf.exports;
    }
    var Og;
    function t1() {
        if (Og) return $a;
        Og = 1;
        var c = e1();
        return $a.createRoot = c.createRoot, $a.hydrateRoot = c.hydrateRoot, $a;
    }
    var n1 = t1();
    const r1 = 3;
    class i1 {
        frameBufferSize;
        _frames = [];
        _frameLength;
        constructor(n, r, o){
            this.frameBufferSize = o, this._frameLength = n * r * r1;
        }
        pushFrame(n) {
            if (n.length !== this._frameLength) throw new Error(`Pushing a frame with wrong length: ${n.length} instead of ${this._frameLength}`);
            this._frames.length >= this.frameBufferSize && this._frames.shift(), this._frames.push(n);
        }
        get remainingFrameCount() {
            return this._frames.length;
        }
        get hasFrames() {
            return this._frames.length > 0;
        }
        tryNextFrame() {
            return this._frames.shift();
        }
    }
    function o1(c, n, r, o, s, a, f, d, h, g) {
        const m = new i1(c, n, o), w = 1e3 / r;
        let k = {
            tag: "waitingForNewTransmission",
            waitingSince: new Date
        }, _ = new Date, x = 0, v = !1;
        function T() {
            const D = new Date;
            switch(k.tag){
                case "processingFrame":
                    {
                        if (k.nextFrameAt > D) return k;
                        const j = m.tryNextFrame();
                        return j === void 0 ? (console.warn("Buffer underrun; lost transmission  - waiting for new transmission ..."), {
                            tag: "waitingForNewTransmission",
                            waitingSince: D
                        }) : (d(j), x++, {
                            tag: "processingFrame",
                            nextFrameAt: new Date(k.nextFrameAt.getTime() + w)
                        });
                    }
                case "waitingForNewTransmission":
                    if (m.hasFrames) {
                        const j = o * 1e3 / r * s;
                        return v = !1, console.log(`New transmission synced - start processing in ${j}ms ...`), {
                            tag: "transmissionSynced",
                            startProcessingAt: new Date(D.getTime() + j)
                        };
                    } else return k.waitingSince.getTime() + a < D.getTime() && !v && (h(), v = !0), k;
                case "transmissionSynced":
                    return k.startProcessingAt < D ? (console.log("Sync delay awaited - starting processing in the next frame ..."), {
                        tag: "processingFrame",
                        nextFrameAt: D
                    }) : k;
                default:
                    return k;
            }
        }
        const N = (D)=>{
            m.pushFrame(D);
        };
        let O = !1;
        function I() {
            if (O) throw new Error("Processing loop already started");
            const D = ()=>{
                const b = new Date().getTime() - _.getTime();
                f !== void 0 && b > f && (console.log(`Processed frames: ${x} (FPS = ${x / (b / 1e3)})  -  Frames left in buffer: ${m.remainingFrameCount}`), x = 0, _ = new Date), k = T();
            };
            O = !0;
            const F = setInterval(()=>D(), w / 20);
            return {
                stopProcessingLoop: ()=>{
                    clearInterval(F), h(), O = !1;
                }
            };
        }
        return {
            fps: r,
            frameBufferSize: o,
            pushFrame: N,
            startProcessingLoop: I
        };
    }
    const s1 = (c)=>{
        const r = new Array(c.length / 3);
        for(let o = 0; o < c.length; o += 3)r.push(`rgb(${c[o]}, ${c[o + 1]}, ${c[o + 2]})`);
        return r;
    }, l1 = Di.forwardRef((c, n)=>{
        const r = c.config, o = Di.useMemo(()=>Array.from({
                length: r.width * r.height
            }).map(()=>"#000"), []), s = Di.useMemo(()=>{
            const m = o1(r.width, r.height, r.fps, r.frameBufferSize, r.relativeFbDelayUntilStart, r.turnOffDelayAfterBufferUnderrun, r.cyclicBufferLogEveryMs, (w)=>f({
                    data: s1(w)
                }), ()=>f({
                    data: o
                }));
            return m.startProcessingLoop(), m;
        }, []), [a, f] = Di.useState({
            data: o
        });
        Di.useEffect(()=>{}, []), Di.useImperativeHandle(n, ()=>({
                pushFrame: (w)=>s.pushFrame(w)
            }));
        const d = c.config.visualConfig, h = (m, w, k)=>{
            if (Math.max(m, w, k) === 0) return [
                0,
                0,
                0
            ];
            let x = m, v = w, T = k;
            return m >= w && m >= k ? x = Math.min(255, m * d.saturationBoost) : w >= m && w >= k ? v = Math.min(255, w * d.saturationBoost) : T = Math.min(255, k * d.saturationBoost), [
                x,
                v,
                T
            ];
        }, g = (m, w)=>{
            const k = m % r.width, _ = Math.floor(m / r.width), x = k / (r.width - 1), v = _ / (r.height - 1);
            let T = [
                0,
                0,
                0
            ];
            w.startsWith("rgb(") && (T = w.replace("rgb(", "").replace(")", "").split(",").map((J)=>parseInt(J.trim())));
            const [N, O, I] = h(T[0], T[1], T[2]), D = (N + O + I) / 765, F = D > d.glowClassThreshold ? "led-glow" : "", j = (J, W, Q, C = d.highlightAlpha)=>{
                const E = d.brightnessMultiplier, U = Math.min(255, Math.round(J * E)), de = Math.min(255, Math.round(W * E)), ie = Math.min(255, Math.round(Q * E));
                return `rgba(${U}, ${de}, ${ie}, ${C})`;
            }, b = Math.round(d.baseGradientAngle + (x - .5) * d.gradientAngleVariation + (v - .5) * d.gradientAngleVariation), q = j(N, O, I), G = `rgb(${N}, ${O}, ${I})`, X = Math.max(d.insetMin, Math.min(d.insetMax, (N + O + I) / d.insetDivisor)), ce = Math.round(D * d.glowSizeMax), K = j(N, O, I, D * d.glowAlphaMultiplier), fe = D > d.glowBrightnessThreshold ? `0 0 ${ce}px ${K}` : "", { gradientStops: ae, gradientShadowAlpha: we } = d, le = {
                className: F,
                background: `linear-gradient(${b}deg,
                  ${q} ${ae.highlightEnd}%,
                  ${G} ${ae.mainColorStart}%,
                  ${G} ${ae.mainColorEnd}%,
                  rgba(0, 0, 0, ${we}) ${ae.shadowEnd}%)`
            };
            if (D <= d.glowBrightnessThreshold) le.boxShadow = `inset 0 0 ${X}px rgba(0, 0, 0, 0)`;
            else {
                const J = `inset 0 0 ${X}px rgba(220, 220, 220, ${d.insetHighlightAlpha})`;
                le.boxShadow = `${J}, ${fe}`, le["--glow-effect"] = `${J}, ${fe}`;
            }
            return le;
        };
        return yu.jsx("div", {
            className: "ledMatrix",
            style: {
                gridTemplateColumns: `repeat(${r.width}, 1fr)`,
                gridTemplateRows: `repeat(${r.height}, 1fr)`
            },
            children: a.data.map((m, w)=>{
                const k = g(w, m), _ = `led ${k.className || ""}`.trim();
                return delete k.className, yu.jsx("div", {
                    className: _,
                    id: `led_${w}`,
                    style: k
                }, w);
            })
        });
    }), a1 = {
        soft: {
            saturationBoost: 1,
            brightnessMultiplier: 1.1,
            baseGradientAngle: 135,
            gradientAngleVariation: 0,
            gradientStops: {
                highlightEnd: 0,
                mainColorStart: 5,
                mainColorEnd: 85,
                shadowEnd: 100
            },
            gradientShadowAlpha: .05,
            glowSizeMax: 0,
            glowAlphaMultiplier: 0,
            glowBrightnessThreshold: 1,
            highlightAlpha: .3,
            insetMin: 1,
            insetMax: 2,
            insetDivisor: 50,
            insetHighlightAlpha: .1,
            glowClassThreshold: 1
        }
    };
    class L {
        r;
        g;
        b;
        a;
        constructor(n, r, o, s){
            this.r = n, this.g = r, this.b = o, this.a = s;
        }
        get redByte() {
            return Math.round(this.r * 255);
        }
        get greenByte() {
            return Math.round(this.g * 255);
        }
        get blueByte() {
            return Math.round(this.b * 255);
        }
        get alphaByte() {
            return Math.round(this.a * 255);
        }
        static fromRgb(n, r, o) {
            return new L(Math.max(0, Math.min(1, n)), Math.max(0, Math.min(1, r)), Math.max(0, Math.min(1, o)), 1);
        }
        static fromRgba(n, r, o, s) {
            return new L(Math.max(0, Math.min(1, n)), Math.max(0, Math.min(1, r)), Math.max(0, Math.min(1, o)), Math.max(0, Math.min(1, s)));
        }
        static fromArgb(n, r, o, s) {
            return L.fromRgba(r, o, s, n);
        }
        static fromRgbByte(n, r, o) {
            return new L(n / 255, r / 255, o / 255, 1);
        }
        static fromRgbaByte(n, r, o, s) {
            return new L(n / 255, r / 255, o / 255, s / 255);
        }
        static fromArgbByte(n, r, o, s) {
            return new L(r / 255, o / 255, s / 255, n / 255);
        }
        static fromHsl(n, r, o) {
            return L.fromHsl360(n * 360, r, o);
        }
        static fromHsl360(n, r, o) {
            const s = n / 360, a = r, f = o;
            if (a === 0) return new L(f, f, f, 1);
            const d = (_, x, v)=>(v < 0 && (v += 1), v > 1 && (v -= 1), v < 1 / 6 ? _ + (x - _) * 6 * v : v < 1 / 2 ? x : v < 2 / 3 ? _ + (x - _) * (2 / 3 - v) * 6 : _), h = f < .5 ? f * (1 + a) : f + a - f * a, g = 2 * f - h, m = d(g, h, s + 1 / 3), w = d(g, h, s), k = d(g, h, s - 1 / 3);
            return new L(m, w, k, 1);
        }
        static fromHsv(n, r, o) {
            return L.fromHsv360(n * 360, r, o);
        }
        static fromHsv360(n, r, o) {
            const s = n / 60, a = r, f = o, d = Math.floor(s), h = s - d, g = f * (1 - a), m = f * (1 - a * h), w = f * (1 - a * (1 - h));
            let k, _, x;
            switch(d % 6){
                case 0:
                    k = f, _ = w, x = g;
                    break;
                case 1:
                    k = m, _ = f, x = g;
                    break;
                case 2:
                    k = g, _ = f, x = w;
                    break;
                case 3:
                    k = g, _ = m, x = f;
                    break;
                case 4:
                    k = w, _ = g, x = f;
                    break;
                case 5:
                    k = f, _ = g, x = m;
                    break;
                default:
                    k = 0, _ = 0, x = 0;
            }
            return new L(k, _, x, 1);
        }
        withAlpha(n) {
            return new L(this.r, this.g, this.b, Math.max(0, Math.min(1, n)));
        }
        withAlphaByte(n) {
            return new L(this.r, this.g, this.b, n / 255);
        }
        toCanvasKitColor(n) {
            return n.Color(this.redByte, this.greenByte, this.blueByte, this.a);
        }
        toCanvasKitColor4f(n) {
            return n.Color4f(this.r, this.g, this.b, this.a);
        }
        equals(n) {
            return this.r === n.r && this.g === n.g && this.b === n.b && this.a === n.a;
        }
        toString() {
            return `Color(R=${this.r.toFixed(3)}, G=${this.g.toFixed(3)}, B=${this.b.toFixed(3)}, A=${this.a.toFixed(3)})`;
        }
    }
    const fr = {
        TransparentBlack: L.fromRgba(0, 0, 0, 0),
        TransparentWhite: L.fromRgba(1, 1, 1, 0),
        AliceBlue: L.fromRgbByte(240, 248, 255),
        AntiqueWhite: L.fromRgbByte(250, 235, 215),
        Aqua: L.fromRgbByte(0, 255, 255),
        Aquamarine: L.fromRgbByte(127, 255, 212),
        Azure: L.fromRgbByte(240, 255, 255),
        Beige: L.fromRgbByte(245, 245, 220),
        Bisque: L.fromRgbByte(255, 228, 196),
        Black: L.fromRgbByte(0, 0, 0),
        BlanchedAlmond: L.fromRgbByte(255, 235, 205),
        Blue: L.fromRgbByte(0, 0, 255),
        BlueViolet: L.fromRgbByte(138, 43, 226),
        Brown: L.fromRgbByte(165, 42, 42),
        BurlyWood: L.fromRgbByte(222, 184, 135),
        CadetBlue: L.fromRgbByte(95, 158, 160),
        Chartreuse: L.fromRgbByte(127, 255, 0),
        Chocolate: L.fromRgbByte(210, 105, 30),
        Coral: L.fromRgbByte(255, 127, 80),
        CornflowerBlue: L.fromRgbByte(100, 149, 237),
        Cornsilk: L.fromRgbByte(255, 248, 220),
        Crimson: L.fromRgbByte(220, 20, 60),
        Cyan: L.fromRgbByte(0, 255, 255),
        DarkBlue: L.fromRgbByte(0, 0, 139),
        DarkCyan: L.fromRgbByte(0, 139, 139),
        DarkGoldenrod: L.fromRgbByte(184, 134, 11),
        DarkGray: L.fromRgbByte(169, 169, 169),
        DarkGreen: L.fromRgbByte(0, 100, 0),
        DarkKhaki: L.fromRgbByte(189, 183, 107),
        DarkMagenta: L.fromRgbByte(139, 0, 139),
        DarkOliveGreen: L.fromRgbByte(85, 107, 47),
        DarkOrange: L.fromRgbByte(255, 140, 0),
        DarkOrchid: L.fromRgbByte(153, 50, 204),
        DarkRed: L.fromRgbByte(139, 0, 0),
        DarkSalmon: L.fromRgbByte(233, 150, 122),
        DarkSeaGreen: L.fromRgbByte(143, 188, 143),
        DarkSlateBlue: L.fromRgbByte(72, 61, 139),
        DarkSlateGray: L.fromRgbByte(47, 79, 79),
        DarkTurquoise: L.fromRgbByte(0, 206, 209),
        DarkViolet: L.fromRgbByte(148, 0, 211),
        DeepPink: L.fromRgbByte(255, 20, 147),
        DeepSkyBlue: L.fromRgbByte(0, 191, 255),
        DimGray: L.fromRgbByte(105, 105, 105),
        DodgerBlue: L.fromRgbByte(30, 144, 255),
        Firebrick: L.fromRgbByte(178, 34, 34),
        FloralWhite: L.fromRgbByte(255, 250, 240),
        ForestGreen: L.fromRgbByte(34, 139, 34),
        Fuchsia: L.fromRgbByte(255, 0, 255),
        Gainsboro: L.fromRgbByte(220, 220, 220),
        GhostWhite: L.fromRgbByte(248, 248, 255),
        Gold: L.fromRgbByte(255, 215, 0),
        Goldenrod: L.fromRgbByte(218, 165, 32),
        Gray: L.fromRgbByte(128, 128, 128),
        Green: L.fromRgbByte(0, 128, 0),
        GreenYellow: L.fromRgbByte(173, 255, 47),
        Honeydew: L.fromRgbByte(240, 255, 240),
        HotPink: L.fromRgbByte(255, 105, 180),
        IndianRed: L.fromRgbByte(205, 92, 92),
        Indigo: L.fromRgbByte(75, 0, 130),
        Ivory: L.fromRgbByte(255, 255, 240),
        Khaki: L.fromRgbByte(240, 230, 140),
        Lavender: L.fromRgbByte(230, 230, 250),
        LavenderBlush: L.fromRgbByte(255, 240, 245),
        LawnGreen: L.fromRgbByte(124, 252, 0),
        LemonChiffon: L.fromRgbByte(255, 250, 205),
        LightBlue: L.fromRgbByte(173, 216, 230),
        LightCoral: L.fromRgbByte(240, 128, 128),
        LightCyan: L.fromRgbByte(224, 255, 255),
        LightGoldenrodYellow: L.fromRgbByte(250, 250, 210),
        LightGray: L.fromRgbByte(211, 211, 211),
        LightGreen: L.fromRgbByte(144, 238, 144),
        LightPink: L.fromRgbByte(255, 182, 193),
        LightSalmon: L.fromRgbByte(255, 160, 122),
        LightSeaGreen: L.fromRgbByte(32, 178, 170),
        LightSkyBlue: L.fromRgbByte(135, 206, 250),
        LightSlateGray: L.fromRgbByte(119, 136, 153),
        LightSteelBlue: L.fromRgbByte(176, 196, 222),
        LightYellow: L.fromRgbByte(255, 255, 224),
        Lime: L.fromRgbByte(0, 255, 0),
        LimeGreen: L.fromRgbByte(50, 205, 50),
        Linen: L.fromRgbByte(250, 240, 230),
        Magenta: L.fromRgbByte(255, 0, 255),
        Maroon: L.fromRgbByte(128, 0, 0),
        MediumAquamarine: L.fromRgbByte(102, 205, 170),
        MediumBlue: L.fromRgbByte(0, 0, 205),
        MediumOrchid: L.fromRgbByte(186, 85, 211),
        MediumPurple: L.fromRgbByte(147, 112, 219),
        MediumSeaGreen: L.fromRgbByte(60, 179, 113),
        MediumSlateBlue: L.fromRgbByte(123, 104, 238),
        MediumSpringGreen: L.fromRgbByte(0, 250, 154),
        MediumTurquoise: L.fromRgbByte(72, 209, 204),
        MediumVioletRed: L.fromRgbByte(199, 21, 133),
        MidnightBlue: L.fromRgbByte(25, 25, 112),
        MintCream: L.fromRgbByte(245, 255, 250),
        MistyRose: L.fromRgbByte(255, 228, 225),
        Moccasin: L.fromRgbByte(255, 228, 181),
        NavajoWhite: L.fromRgbByte(255, 222, 173),
        Navy: L.fromRgbByte(0, 0, 128),
        OldLace: L.fromRgbByte(253, 245, 230),
        Olive: L.fromRgbByte(128, 128, 0),
        OliveDrab: L.fromRgbByte(107, 142, 35),
        Orange: L.fromRgbByte(255, 165, 0),
        OrangeRed: L.fromRgbByte(255, 69, 0),
        Orchid: L.fromRgbByte(218, 112, 214),
        PaleGoldenrod: L.fromRgbByte(238, 232, 170),
        PaleGreen: L.fromRgbByte(152, 251, 152),
        PaleTurquoise: L.fromRgbByte(175, 238, 238),
        PaleVioletRed: L.fromRgbByte(219, 112, 147),
        PapayaWhip: L.fromRgbByte(255, 239, 213),
        PeachPuff: L.fromRgbByte(255, 218, 185),
        Peru: L.fromRgbByte(205, 133, 63),
        Pink: L.fromRgbByte(255, 192, 203),
        Plum: L.fromRgbByte(221, 160, 221),
        PowderBlue: L.fromRgbByte(176, 224, 230),
        Purple: L.fromRgbByte(128, 0, 128),
        RebeccaPurple: L.fromRgbByte(102, 51, 153),
        Red: L.fromRgbByte(255, 0, 0),
        RosyBrown: L.fromRgbByte(188, 143, 143),
        RoyalBlue: L.fromRgbByte(65, 105, 225),
        SaddleBrown: L.fromRgbByte(139, 69, 19),
        Salmon: L.fromRgbByte(250, 128, 114),
        SandyBrown: L.fromRgbByte(244, 164, 96),
        SeaGreen: L.fromRgbByte(46, 139, 87),
        SeaShell: L.fromRgbByte(255, 245, 238),
        Sienna: L.fromRgbByte(160, 82, 45),
        Silver: L.fromRgbByte(192, 192, 192),
        SkyBlue: L.fromRgbByte(135, 206, 235),
        SlateBlue: L.fromRgbByte(106, 90, 205),
        SlateGray: L.fromRgbByte(112, 128, 144),
        Snow: L.fromRgbByte(255, 250, 250),
        SpringGreen: L.fromRgbByte(0, 255, 127),
        SteelBlue: L.fromRgbByte(70, 130, 180),
        Tan: L.fromRgbByte(210, 180, 140),
        Teal: L.fromRgbByte(0, 128, 128),
        Thistle: L.fromRgbByte(216, 191, 216),
        Tomato: L.fromRgbByte(255, 99, 71),
        Turquoise: L.fromRgbByte(64, 224, 208),
        Violet: L.fromRgbByte(238, 130, 238),
        Wheat: L.fromRgbByte(245, 222, 179),
        White: L.fromRgbByte(255, 255, 255),
        WhiteSmoke: L.fromRgbByte(245, 245, 245),
        Yellow: L.fromRgbByte(255, 255, 0),
        YellowGreen: L.fromRgbByte(154, 205, 50)
    }, cs = {
        Clamp: 0
    };
    class Vi {
    }
    class d0 extends Vi {
        color;
        constructor(n){
            super(), this.color = n;
        }
        createSkPaint(n, r, o, s) {
            const a = new n.Paint;
            return a.setColor(this.color.toCanvasKitColor(n)), a.setStyle(r ? n.PaintStyle.Stroke : n.PaintStyle.Fill), a.setStrokeWidth(o), a.setAntiAlias(s), a;
        }
    }
    class xf extends Vi {
        start;
        end;
        colors;
        positions;
        tileMode;
        constructor(n, r, o, s, a = cs.Clamp){
            super(), this.start = n, this.end = r, this.colors = o, this.positions = s ?? null, this.tileMode = a;
        }
        createSkPaint(n, r, o, s) {
            const a = new n.Paint, f = this.colors.map((g)=>g.toCanvasKitColor(n)), d = this.tileMode === 0 ? n.TileMode.Clamp : this.tileMode === 1 ? n.TileMode.Repeat : this.tileMode === 2 ? n.TileMode.Mirror : n.TileMode.Decal, h = n.Shader.MakeLinearGradient([
                this.start.x,
                this.start.y
            ], [
                this.end.x,
                this.end.y
            ], f, this.positions, d);
            return a.setShader(h), a.setStyle(r ? n.PaintStyle.Stroke : n.PaintStyle.Fill), a.setStrokeWidth(o), a.setAntiAlias(s), a;
        }
    }
    class u1 extends Vi {
        center;
        radius;
        colors;
        positions;
        tileMode;
        constructor(n, r, o, s, a = cs.Clamp){
            super(), this.center = n, this.radius = r, this.colors = o, this.positions = s ?? null, this.tileMode = a;
        }
        createSkPaint(n, r, o, s) {
            const a = new n.Paint, f = this.colors.map((g)=>g.toCanvasKitColor(n)), d = this.tileMode === 0 ? n.TileMode.Clamp : this.tileMode === 1 ? n.TileMode.Repeat : this.tileMode === 2 ? n.TileMode.Mirror : n.TileMode.Decal, h = n.Shader.MakeRadialGradient([
                this.center.x,
                this.center.y
            ], this.radius, f, this.positions, d);
            return a.setShader(h), a.setStyle(r ? n.PaintStyle.Stroke : n.PaintStyle.Fill), a.setStrokeWidth(o), a.setAntiAlias(s), a;
        }
    }
    class c1 extends Vi {
        startCenter;
        startRadius;
        endCenter;
        endRadius;
        colors;
        positions;
        tileMode;
        constructor(n, r, o, s, a, f, d = cs.Clamp){
            super(), this.startCenter = n, this.startRadius = r, this.endCenter = o, this.endRadius = s, this.colors = a, this.positions = f ?? null, this.tileMode = d;
        }
        createSkPaint(n, r, o, s) {
            const a = new n.Paint, f = this.colors.map((g)=>g.toCanvasKitColor(n)), d = this.tileMode === 0 ? n.TileMode.Clamp : this.tileMode === 1 ? n.TileMode.Repeat : this.tileMode === 2 ? n.TileMode.Mirror : n.TileMode.Decal, h = n.Shader.MakeTwoPointConicalGradient([
                this.startCenter.x,
                this.startCenter.y
            ], this.startRadius, [
                this.endCenter.x,
                this.endCenter.y
            ], this.endRadius, f, this.positions, d);
            return a.setShader(h), a.setStyle(r ? n.PaintStyle.Stroke : n.PaintStyle.Fill), a.setStrokeWidth(o), a.setAntiAlias(s), a;
        }
    }
    class f1 extends Vi {
        center;
        colors;
        positions;
        startAngle;
        endAngle;
        constructor(n, r, o, s = 0, a = 360){
            super(), this.center = n, this.colors = r, this.positions = o ?? null, this.startAngle = s, this.endAngle = a;
        }
        createSkPaint(n, r, o, s) {
            const a = new n.Paint, f = this.colors.map((h)=>h.toCanvasKitColor(n)), d = n.Shader.MakeSweepGradient(this.center.x, this.center.y, f, this.positions, 0);
            return a.setShader(d), a.setStyle(r ? n.PaintStyle.Stroke : n.PaintStyle.Fill), a.setStrokeWidth(o), a.setAntiAlias(s), a;
        }
    }
    class d1 extends Vi {
        baseFrequencyX;
        baseFrequencyY;
        numOctaves;
        seed;
        constructor(n, r, o, s){
            super(), this.baseFrequencyX = n, this.baseFrequencyY = r, this.numOctaves = o, this.seed = s;
        }
        createSkPaint(n, r, o, s) {
            const a = new n.Paint, f = n.Shader.MakeFractalNoise(this.baseFrequencyX, this.baseFrequencyY, this.numOctaves, this.seed, 0, 0);
            return a.setShader(f), a.setStyle(r ? n.PaintStyle.Stroke : n.PaintStyle.Fill), a.setStrokeWidth(o), a.setAntiAlias(s), a;
        }
    }
    class p1 extends Vi {
        baseFrequencyX;
        baseFrequencyY;
        numOctaves;
        seed;
        constructor(n, r, o, s){
            super(), this.baseFrequencyX = n, this.baseFrequencyY = r, this.numOctaves = o, this.seed = s;
        }
        createSkPaint(n, r, o, s) {
            const a = new n.Paint, f = n.Shader.MakeTurbulence(this.baseFrequencyX, this.baseFrequencyY, this.numOctaves, this.seed, 0, 0);
            return a.setShader(f), a.setStyle(r ? n.PaintStyle.Stroke : n.PaintStyle.Fill), a.setStrokeWidth(o), a.setAntiAlias(s), a;
        }
    }
    function Nr(c) {
        return c instanceof Vi ? c : new d0(c);
    }
    const h1 = {
        solid (c) {
            return new d0(c);
        },
        linearGradient (c, n, r, o, s = cs.Clamp) {
            return new xf(c, n, r, o, s);
        },
        verticalGradient (c, ...n) {
            return new xf({
                x: 0,
                y: 0
            }, {
                x: 0,
                y: c
            }, n);
        },
        horizontalGradient (c, ...n) {
            return new xf({
                x: 0,
                y: 0
            }, {
                x: c,
                y: 0
            }, n);
        },
        radialGradient (c, n, r, o, s = cs.Clamp) {
            return new u1(c, n, r, o, s);
        },
        twoPointConicalGradient (c, n, r, o, s, a, f = cs.Clamp) {
            return new c1(c, n, r, o, s, a, f);
        },
        sweepGradient (c, n, r, o = 0, s = 360) {
            return new f1(c, n, r, o, s);
        },
        perlinNoiseFractal (c, n, r, o) {
            return new d1(c, n, r, o);
        },
        perlinNoiseTurbulence (c, n, r, o) {
            return new p1(c, n, r, o);
        }
    };
    var je;
    (function(c) {
        c[c.Clear = 0] = "Clear", c[c.Source = 1] = "Source", c[c.Destination = 2] = "Destination", c[c.SourceOver = 3] = "SourceOver", c[c.DestinationOver = 4] = "DestinationOver", c[c.SourceIn = 5] = "SourceIn", c[c.DestinationIn = 6] = "DestinationIn", c[c.SourceOut = 7] = "SourceOut", c[c.DestinationOut = 8] = "DestinationOut", c[c.SourceAtop = 9] = "SourceAtop", c[c.DestinationAtop = 10] = "DestinationAtop", c[c.Xor = 11] = "Xor", c[c.Plus = 12] = "Plus", c[c.Modulate = 13] = "Modulate", c[c.Screen = 14] = "Screen", c[c.Overlay = 15] = "Overlay", c[c.Darken = 16] = "Darken", c[c.Lighten = 17] = "Lighten", c[c.ColorDodge = 18] = "ColorDodge", c[c.ColorBurn = 19] = "ColorBurn", c[c.HardLight = 20] = "HardLight", c[c.SoftLight = 21] = "SoftLight", c[c.Difference = 22] = "Difference", c[c.Exclusion = 23] = "Exclusion", c[c.Multiply = 24] = "Multiply", c[c.Hue = 25] = "Hue", c[c.Saturation = 26] = "Saturation", c[c.Color = 27] = "Color", c[c.Luminosity = 28] = "Luminosity";
    })(je || (je = {}));
    function g1(c) {
        return {
            [je.Clear]: "Clear",
            [je.Source]: "Src",
            [je.Destination]: "Dst",
            [je.SourceOver]: "SrcOver",
            [je.DestinationOver]: "DstOver",
            [je.SourceIn]: "SrcIn",
            [je.DestinationIn]: "DstIn",
            [je.SourceOut]: "SrcOut",
            [je.DestinationOut]: "DstOut",
            [je.SourceAtop]: "SrcATop",
            [je.DestinationAtop]: "DstATop",
            [je.Xor]: "Xor",
            [je.Plus]: "Plus",
            [je.Modulate]: "Modulate",
            [je.Screen]: "Screen",
            [je.Overlay]: "Overlay",
            [je.Darken]: "Darken",
            [je.Lighten]: "Lighten",
            [je.ColorDodge]: "ColorDodge",
            [je.ColorBurn]: "ColorBurn",
            [je.HardLight]: "HardLight",
            [je.SoftLight]: "SoftLight",
            [je.Difference]: "Difference",
            [je.Exclusion]: "Exclusion",
            [je.Multiply]: "Multiply",
            [je.Hue]: "Hue",
            [je.Saturation]: "Saturation",
            [je.Color]: "Color",
            [je.Luminosity]: "Luminosity"
        }[c];
    }
    class bg {
        ctx;
        pixelData = null;
        constructor(n){
            this.ctx = n;
        }
        getPixels() {
            return this.pixelData || (this.pixelData = this.ctx.getPixelData()), this.pixelData;
        }
        getByIndex(n) {
            const r = this.getPixels(), o = n * 4;
            return L.fromRgbaByte(r[o], r[o + 1], r[o + 2], r[o + 3]);
        }
        setByIndex(n, r) {
            const o = this.getPixels(), s = n * 4;
            o[s] = r.redByte, o[s + 1] = r.greenByte, o[s + 2] = r.blueByte, o[s + 3] = r.alphaByte;
        }
        get(n, r) {
            return this.getByIndex(r * this.ctx.width + n);
        }
        set(n, r, o) {
            this.setByIndex(r * this.ctx.width + n, o);
        }
        get length() {
            return this.ctx.width * this.ctx.height;
        }
        get width() {
            return this.ctx.width;
        }
        get height() {
            return this.ctx.height;
        }
        *cells() {
            const n = this.getPixels();
            for(let r = 0; r < this.ctx.height; r++)for(let o = 0; o < this.ctx.width; o++){
                const s = (r * this.ctx.width + o) * 4;
                yield {
                    x: o,
                    y: r,
                    color: L.fromRgbaByte(n[s], n[s + 1], n[s + 2], n[s + 3])
                };
            }
        }
        commit() {
            this.pixelData && (this.ctx.setPixelData(this.pixelData), this.pixelData = null);
        }
    }
    class m1 {
        ck;
        surface;
        canvas;
        width;
        height;
        halfWidth;
        halfHeight;
        fps;
        _now = new Date;
        _cycleNo = 0;
        _startTime = new Date;
        _fonts = null;
        _lastPixelsRgba = null;
        _lastPixelsRgb = null;
        constructor(n, r, o, s, a = 30){
            this.ck = n, this.surface = r, this.canvas = r.getCanvas(), this.width = o, this.height = s, this.halfWidth = o / 2, this.halfHeight = s / 2, this.fps = a;
        }
        get now() {
            return this._now;
        }
        get cycleNo() {
            return this._cycleNo;
        }
        get elapsed() {
            return this._now.getTime() - this._startTime.getTime();
        }
        updateFrame(n, r, o) {
            this._now = n, this._cycleNo = r, this._startTime = o;
        }
        setFonts(n) {
            this._fonts = n;
        }
        get fonts() {
            return this._fonts;
        }
        get lastPixelsRgba() {
            return this._lastPixelsRgba;
        }
        get lastPixelsRgb() {
            return this._lastPixelsRgb;
        }
        rememberPixels() {
            this._lastPixelsRgba = this.getPixelData(), this._lastPixelsRgb = null;
        }
        rememberPixelsRgb() {
            this._lastPixelsRgb = this.getPixelDataRgb(), this._lastPixelsRgba = null;
        }
        drawBackground(n, r = !0) {
            const s = Nr(n).createSkPaint(this.ck, !1, 0, r);
            this.canvas.drawRect(this.ck.LTRBRect(0, 0, this.width, this.height), s), s.delete();
        }
        drawCircle(n, r, o, s, a, f = 1, d = !0) {
            const h = s ?? (a ? void 0 : fr.Lime);
            if (h) {
                const g = Nr(h).createSkPaint(this.ck, !1, 0, d);
                this.canvas.drawCircle(n, r, o, g), g.delete();
            }
            if (a) {
                const g = Nr(a).createSkPaint(this.ck, !0, f, d);
                this.canvas.drawCircle(n, r, o, g), g.delete();
            }
        }
        drawRectXyWh(n, r, o, s, a, f, d = 1, h = !0) {
            const g = this.ck.LTRBRect(n, r, n + o, r + s);
            if (a) {
                const m = Nr(a).createSkPaint(this.ck, !1, 0, h);
                this.canvas.drawRect(g, m), m.delete();
            }
            if (f) {
                const m = Nr(f).createSkPaint(this.ck, !0, d, h);
                this.canvas.drawRect(g, m), m.delete();
            }
        }
        drawRectXyXy(n, r, o, s, a, f, d = 1, h = !0) {
            this.drawRectXyWh(n, r, o - n, s - r, a, f, d, h);
        }
        drawLine(n, r, o, s, a, f = 1, d = !0) {
            const h = a ?? fr.Lime, g = Nr(h).createSkPaint(this.ck, !0, f, d);
            this.canvas.drawLine(n, r, o, s, g), g.delete();
        }
        drawPoint(n, r, o, s = 1, a = !0) {
            const f = o ?? fr.Lime, d = Nr(f).createSkPaint(this.ck, !0, s, a);
            this.canvas.drawPoints(this.ck.PointMode.Points, [
                n,
                r
            ], d), d.delete();
        }
        drawArc(n, r, o, s, a, f, d, h, g = 1, m = !0) {
            const w = this.ck.LTRBRect(n, r, n + o, r + s), k = n + o / 2, _ = r + s / 2;
            if (d) {
                const x = Nr(d).createSkPaint(this.ck, !1, 0, m), v = new this.ck.Path;
                v.moveTo(k, _), v.arcToOval(w, a, f, !1), v.close(), this.canvas.drawPath(v, x), v.delete(), x.delete();
            }
            if (h) {
                const x = Nr(h).createSkPaint(this.ck, !0, g, m), v = new this.ck.Path;
                v.moveTo(k, _), v.arcToOval(w, a, f, !1), v.close(), this.canvas.drawPath(v, x), v.delete(), x.delete();
            }
        }
        drawArcCenter(n, r, o, s, a, f, d, h = 1, g = !0) {
            this.drawArc(n - o, r - o, o * 2, o * 2, s, a, f, d, h, g);
        }
        drawText(n, r, o, s, a, f, d = 1, h = 0, g = !1, m = !1) {
            if (!this._fonts) {
                console.warn("Fonts not loaded. Call loadFonts() first.");
                return;
            }
            const w = s ?? this._fonts.get("Var4x5");
            if (!w) {
                console.warn("Font not found.");
                return;
            }
            const k = a ?? fr.White, _ = Nr(k).createSkPaint(this.ck, !1, 0, m), x = f ?? w.defaultHeight, v = new this.ck.Font(w.typeface, x);
            v.setScaleX(d), v.setSkewX(h), v.setEmbolden(g);
            const T = o + w.defaultAscent + w.defaultHeight;
            this.canvas.drawText(n, r, T, _, v), v.delete(), _.delete();
        }
        drawTextVar3x5(n, r, o, s) {
            this.drawText(n, r, o, this._fonts?.get("Var3x5"), s);
        }
        drawTextMono3x5(n, r, o, s) {
            this.drawText(n, r, o, this._fonts?.get("Mono3x5"), s);
        }
        drawTextVar4x5(n, r, o, s) {
            this.drawText(n, r, o, this._fonts?.get("Var4x5"), s);
        }
        drawTextMono4x5(n, r, o, s) {
            this.drawText(n, r, o, this._fonts?.get("Mono4x5"), s);
        }
        drawTextMono6x6(n, r, o, s) {
            this.drawText(n, r, o, this._fonts?.get("Mono6x6"), s);
        }
        drawTextMono7x10(n, r, o, s) {
            this.drawText(n, r, o, this._fonts?.get("Mono7x10"), s);
        }
        drawTextVar10x10(n, r, o, s) {
            this.drawText(n, r, o, this._fonts?.get("Var10x10"), s);
        }
        drawTextMono10x10(n, r, o, s) {
            this.drawText(n, r, o, this._fonts?.get("Mono10x10"), s);
        }
        drawTextMono16x16(n, r, o, s) {
            this.drawText(n, r, o, this._fonts?.get("Mono16x16"), s);
        }
        getPixel(n, r) {
            const o = this.getPixelData(), s = (r * this.width + n) * 4;
            return L.fromRgbaByte(o[s], o[s + 1], o[s + 2], o[s + 3]);
        }
        setPixel(n, r, o) {
            const s = new bg(this);
            s.set(n, r, o), s.commit();
        }
        get pixels() {
            return new bg(this);
        }
        getPixelData() {
            this.surface.flush();
            const n = this.surface.makeImageSnapshot(), r = n.readPixels(0, 0, {
                width: this.width,
                height: this.height,
                colorType: this.ck.ColorType.RGBA_8888,
                alphaType: this.ck.AlphaType.Unpremul,
                colorSpace: this.ck.ColorSpace.SRGB
            });
            return n.delete(), r ? new Uint8Array(r) : new Uint8Array(this.width * this.height * 4);
        }
        setPixelData(n, r = je.Source) {
            const o = {
                width: this.width,
                height: this.height,
                colorType: this.ck.ColorType.RGBA_8888,
                alphaType: this.ck.AlphaType.Unpremul,
                colorSpace: this.ck.ColorSpace.SRGB
            }, s = this.ck.MakeImage(o, n, this.width * 4);
            if (s) {
                const a = new this.ck.Paint, f = g1(r), d = this.ck.BlendMode[f];
                d !== void 0 && a.setBlendMode(d), this.canvas.drawImage(s, 0, 0, a), a.delete(), s.delete();
            }
        }
        setPixels(n, r = je.Source) {
            const o = new Uint8Array(n.length * 4);
            for(let s = 0; s < n.length; s++){
                const a = n[s];
                o[s * 4] = a.redByte, o[s * 4 + 1] = a.greenByte, o[s * 4 + 2] = a.blueByte, o[s * 4 + 3] = a.alphaByte;
            }
            this.setPixelData(o, r);
        }
        flush() {
            this.surface.flush();
        }
        clear(n = fr.Black) {
            this.canvas.clear(n.toCanvasKitColor(this.ck));
        }
        getPixelDataRgb() {
            const n = this.getPixelData(), r = new Uint8Array(this.width * this.height * 3);
            for(let o = 0; o < this.width * this.height; o++)r[o * 3] = n[o * 4], r[o * 3 + 1] = n[o * 4 + 1], r[o * 3 + 2] = n[o * 4 + 2];
            return r;
        }
    }
    const y1 = "modulepreload", _1 = function(c) {
        return "/pxl-shop/" + c;
    }, Bg = {}, v1 = function(n, r, o) {
        let s = Promise.resolve();
        if (r && r.length > 0) {
            let h = function(g) {
                return Promise.all(g.map((m)=>Promise.resolve(m).then((w)=>({
                            status: "fulfilled",
                            value: w
                        }), (w)=>({
                            status: "rejected",
                            reason: w
                        }))));
            };
            document.getElementsByTagName("link");
            const f = document.querySelector("meta[property=csp-nonce]"), d = f?.nonce || f?.getAttribute("nonce");
            s = h(r.map((g)=>{
                if (g = _1(g), g in Bg) return;
                Bg[g] = !0;
                const m = g.endsWith(".css"), w = m ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${g}"]${w}`)) return;
                const k = document.createElement("link");
                if (k.rel = m ? "stylesheet" : y1, m || (k.as = "script"), k.crossOrigin = "", k.href = g, d && k.setAttribute("nonce", d), document.head.appendChild(k), m) return new Promise((_, x)=>{
                    k.addEventListener("load", _), k.addEventListener("error", ()=>x(new Error(`Unable to preload CSS for ${g}`)));
                });
            }));
        }
        function a(f) {
            const d = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (d.payload = f, window.dispatchEvent(d), !d.defaultPrevented) throw f;
        }
        return s.then((f)=>{
            for (const d of f || [])d.status === "rejected" && a(d.reason);
            return n().catch(a);
        });
    };
    let tl = null;
    async function w1() {
        if (tl) return tl;
        const c = await v1(()=>import("./canvaskit-DSS8ZYVY.js").then((o)=>o.c), []), n = c.default ?? c;
        if (typeof document < "u") {
            const o = import.meta.url?.includes("/pxl-shop/") ? "/pxl-shop/canvaskit.wasm" : "/canvaskit.wasm";
            tl = await n({
                locateFile: (s)=>s.endsWith(".wasm") ? o : s
            });
        } else tl = await n();
        return tl;
    }
    async function k1(c, n = [], r = 24, o = 24, s = 40, a = !0, f, d) {
        const h = await w1(), g = Array.isArray(n) ? n : [
            n
        ], m = h.MakeSurface(r, o);
        if (!m) throw new Error("Failed to create surface");
        const w = new m1(h, m, r, o, s);
        w.clear(fr.Black);
        const k = 1e3 / s, _ = new Date;
        let x = 0, v = !0, T = null;
        const N = ()=>{
            if (!v) return;
            const O = new Date;
            try {
                if (w.updateFrame(O, x, _), a && w.clear(fr.Black), c(w), w.flush(), w.rememberPixels(), g.length > 0) {
                    const I = w.getPixelDataRgb();
                    for (const D of g)D(I, w);
                }
                x++;
            } catch (I) {
                console.error("Evaluation error:", I);
            }
            if (v) {
                const I = Date.now() - O.getTime(), D = Math.max(0, k - I);
                T = setTimeout(N, D);
            }
        };
        return N(), {
            stop: ()=>{
                v = !1, T && (clearTimeout(T), T = null), m.delete();
            },
            isRunning: ()=>v,
            ctx: w
        };
    }
    const Ng = 24, Fg = 24, Ig = 40, S1 = (c)=>{
        c.drawBackground(fr.Black);
        const n = c.elapsed / 1e3, r = 12 + Math.sin(n * 2) * 8, o = 12 + Math.cos(n * 2) * 8;
        c.drawRectXyWh(2, 2, 8, 6, fr.Red), c.drawRectXyWh(2, 16, 20, 6, h1.horizontalGradient(20, fr.Yellow, fr.Magenta)), c.drawCircle(r, o, 3, fr.Green);
    };
    function x1() {
        const c = Di.useRef(null);
        Di.useEffect(()=>{
            let r = null;
            return (async ()=>{
                try {
                    r = await k1(S1, (a, f)=>{
                        c.current && c.current.pushFrame(a);
                    }, Ng, Fg, Ig);
                } catch (s) {
                    console.error("Failed to start PXL:", s);
                }
            })(), ()=>{
                r && r.stop();
            };
        }, []);
        const n = {
            width: Ng,
            height: Fg,
            fps: Ig,
            frameBufferSize: 30,
            relativeFbDelayUntilStart: .8,
            turnOffDelayAfterBufferUnderrun: 5e3,
            cyclicBufferLogEveryMs: void 0,
            visualConfig: a1.soft
        };
        return yu.jsx(l1, {
            ref: c,
            config: n
        });
    }
    const jg = document.getElementById("pxl-playground");
    jg && n1.createRoot(jg).render(yu.jsx(x1, {}));
})();
