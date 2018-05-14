!
function(r, e) {
	if ("function" == typeof define && define.amd) define([], e);
	else if ("object" == typeof exports) {
		var n = e();
		"object" == typeof module && module && module.exports && (exports = module.exports = n), exports.randomColor = n
	} else r.randomColor = e()
}(this, function() {
	function r(r) {
		var e = o(r.hue),
			n = i(e);
		return 0 > n && (n = 360 + n), n
	}
	function e(r, e) {
		if ("random" === e.luminosity) return i([0, 100]);
		if ("monochrome" === e.hue) return 0;
		var n = u(r),
			t = n[0],
			a = n[1];
		switch (e.luminosity) {
		case "bright":
			t = 55;
			break;
		case "dark":
			t = a - 10;
			break;
		case "light":
			a = 55
		}
		return i([t, a])
	}
	function n(r, e, n) {
		var t = a(r, e),
			o = 100;
		switch (n.luminosity) {
		case "dark":
			o = t + 20;
			break;
		case "light":
			t = (o + t) / 2;
			break;
		case "random":
			t = 0, o = 100
		}
		return i([t, o])
	}
	function t(r, e) {
		switch (e.format) {
		case "hsvArray":
			return r;
		case "hslArray":
			return d(r);
		case "hsl":
			var n = d(r);
			return "hsl(" + n[0] + ", " + n[1] + "%, " + n[2] + "%)";
		case "hsla":
			var t = d(r);
			return "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + Math.random() + ")";
		case "rgbArray":
			return h(r);
		case "rgb":
			var a = h(r);
			return "rgb(" + a.join(", ") + ")";
		case "rgba":
			var o = h(r);
			return "rgba(" + o.join(", ") + ", " + Math.random() + ")";
		default:
			return f(r)
		}
	}
	function a(r, e) {
		for (var n = s(r).lowerBounds, t = 0; t < n.length - 1; t++) {
			var a = n[t][0],
				o = n[t][1],
				u = n[t + 1][0],
				i = n[t + 1][1];
			if (e >= a && u >= e) {
				var f = (i - o) / (u - a),
					l = o - f * a;
				return f * e + l
			}
		}
		return 0
	}
	function o(r) {
		if ("number" == typeof parseInt(r)) {
			var e = parseInt(r);
			if (360 > e && e > 0) return [e, e]
		}
		if ("string" == typeof r && m[r]) {
			var n = m[r];
			if (n.hueRange) return n.hueRange
		}
		return [0, 360]
	}
	function u(r) {
		return s(r).saturationRange
	}
	function s(r) {
		r >= 334 && 360 >= r && (r -= 360);
		for (var e in m) {
			var n = m[e];
			if (n.hueRange && r >= n.hueRange[0] && r <= n.hueRange[1]) return m[e]
		}
		return "Color not found"
	}
	function i(r) {
		if (null === g) return Math.floor(r[0] + Math.random() * (r[1] + 1 - r[0]));
		var e = r[1] || 1,
			n = r[0] || 0;
		g = (9301 * g + 49297) % 233280;
		var t = g / 233280;
		return Math.floor(n + t * (e - n))
	}
	function f(r) {
		function e(r) {
			var e = r.toString(16);
			return 1 == e.length ? "0" + e : e
		}
		var n = h(r),
			t = "#" + e(n[0]) + e(n[1]) + e(n[2]);
		return t
	}
	function l(r, e, n) {
		var t = n[0][0],
			a = n[n.length - 1][0],
			o = n[n.length - 1][1],
			u = n[0][1];
		m[r] = {
			hueRange: e,
			lowerBounds: n,
			saturationRange: [t, a],
			brightnessRange: [o, u]
		}
	}
	function c() {
		l("monochrome", null, [
			[0, 0],
			[100, 0]
		]), l("red", [-26, 18], [
			[20, 100],
			[30, 92],
			[40, 89],
			[50, 85],
			[60, 78],
			[70, 70],
			[80, 60],
			[90, 55],
			[100, 50]
		]), l("orange", [19, 46], [
			[20, 100],
			[30, 93],
			[40, 88],
			[50, 86],
			[60, 85],
			[70, 70],
			[100, 70]
		]), l("yellow", [47, 62], [
			[25, 100],
			[40, 94],
			[50, 89],
			[60, 86],
			[70, 84],
			[80, 82],
			[90, 80],
			[100, 75]
		]), l("green", [63, 178], [
			[30, 100],
			[40, 90],
			[50, 85],
			[60, 81],
			[70, 74],
			[80, 64],
			[90, 50],
			[100, 40]
		]), l("blue", [179, 257], [
			[20, 100],
			[30, 86],
			[40, 80],
			[50, 74],
			[60, 60],
			[70, 52],
			[80, 44],
			[90, 39],
			[100, 35]
		]), l("purple", [258, 282], [
			[20, 100],
			[30, 87],
			[40, 79],
			[50, 70],
			[60, 65],
			[70, 59],
			[80, 52],
			[90, 45],
			[100, 42]
		]), l("pink", [283, 334], [
			[20, 100],
			[30, 90],
			[40, 86],
			[60, 84],
			[80, 80],
			[90, 75],
			[100, 73]
		])
	}
	function h(r) {
		var e = r[0];
		0 === e && (e = 1), 360 === e && (e = 359), e /= 360;
		var n = r[1] / 100,
			t = r[2] / 100,
			a = Math.floor(6 * e),
			o = 6 * e - a,
			u = t * (1 - n),
			s = t * (1 - o * n),
			i = t * (1 - (1 - o) * n),
			f = 256,
			l = 256,
			c = 256;
		switch (a) {
		case 0:
			f = t, l = i, c = u;
			break;
		case 1:
			f = s, l = t, c = u;
			break;
		case 2:
			f = u, l = t, c = i;
			break;
		case 3:
			f = u, l = s, c = t;
			break;
		case 4:
			f = i, l = u, c = t;
			break;
		case 5:
			f = t, l = u, c = s
		}
		var h = [Math.floor(255 * f), Math.floor(255 * l), Math.floor(255 * c)];
		return h
	}
	function d(r) {
		var e = r[0],
			n = r[1] / 100,
			t = r[2] / 100,
			a = (2 - n) * t;
		return [e, Math.round(n * t / (1 > a ? a : 2 - a) * 1e4) / 100, a / 2 * 100]
	}
	function v(r) {
		for (var e = 0, n = 0; n !== r.length && !(e >= Number.MAX_SAFE_INTEGER); n++) e += r.charCodeAt(n);
		return e
	}
	var g = null,
		m = {};
	c();
	var b = function(a) {
			if (a = a || {}, void 0 !== a.seed && null !== a.seed && a.seed === parseInt(a.seed, 10)) g = a.seed;
			else if ("string" == typeof a.seed) g = v(a.seed);
			else {
				if (void 0 !== a.seed && null !== a.seed) throw new TypeError("The seed value must be an integer or string");
				g = null
			}
			var o, u, s;
			if (null !== a.count && void 0 !== a.count) {
				var i = a.count,
					f = [];
				for (a.count = null; i > f.length;) g && a.seed && (a.seed += 1), f.push(b(a));
				return a.count = i, f
			}
			return o = r(a), u = e(o, a), s = n(o, u, a), t([o, u, s], a)
		};
	return b
});