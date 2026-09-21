globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-08-11T17:02:58.989Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/admin-XHRB6lz4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7fd-NLDjZ8NcTvhI5PTaiezjoceCKFA\"",
		"mtime": "2026-09-21T18:54:13.443Z",
		"size": 2045,
		"path": "../public/assets/admin-XHRB6lz4.js"
	},
	"/assets/achievements-fFWxMigO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f4-Oq/RFPGCP8ik9h2lTc4dm5N0gow\"",
		"mtime": "2026-09-21T18:54:13.440Z",
		"size": 2548,
		"path": "../public/assets/achievements-fFWxMigO.js"
	},
	"/assets/arrow-left-DY6fX5TN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-PBYkKb8D2s+jWe8UIKLAnK43WdU\"",
		"mtime": "2026-09-21T18:54:13.444Z",
		"size": 155,
		"path": "../public/assets/arrow-left-DY6fX5TN.js"
	},
	"/assets/campfire-CQFbV69L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-JWErsYPWDHtHBRyEQR+enIhtyjM\"",
		"mtime": "2026-09-21T18:54:13.445Z",
		"size": 53,
		"path": "../public/assets/campfire-CQFbV69L.js"
	},
	"/assets/button-DSlVaVzA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a49a-VEVX15a2K+Q6sYHVF22p8BXCSPk\"",
		"mtime": "2026-09-21T18:54:13.445Z",
		"size": 42138,
		"path": "../public/assets/button-DSlVaVzA.js"
	},
	"/assets/candice-kang'ethe-CuiIqppE.jpeg": {
		"type": "image/jpeg",
		"etag": "\"171e6-PQeGmgQK0tb0incSBB5EBi0Z08E\"",
		"mtime": "2026-09-21T18:54:13.473Z",
		"size": 94694,
		"path": "../public/assets/candice-kang'ethe-CuiIqppE.jpeg"
	},
	"/assets/contact-uoQCTNrA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ee36-wMuI9O7zE8nrFa8tWSJp/w30j8Q\"",
		"mtime": "2026-09-21T18:54:13.445Z",
		"size": 60982,
		"path": "../public/assets/contact-uoQCTNrA.js"
	},
	"/assets/campfire-DA5RjFKc.jpg": {
		"type": "image/jpeg",
		"etag": "\"28494-liGx4wQWDmAgJF5Iy+mhHQFujOo\"",
		"mtime": "2026-09-21T18:54:13.472Z",
		"size": 165012,
		"path": "../public/assets/campfire-DA5RjFKc.jpg"
	},
	"/assets/crew-image-Rz0UUP-B.jpg": {
		"type": "image/jpeg",
		"etag": "\"4b7de-sbDod//71DF057Mfx0AINlbkmVE\"",
		"mtime": "2026-09-21T18:54:13.476Z",
		"size": 309214,
		"path": "../public/assets/crew-image-Rz0UUP-B.jpg"
	},
	"/assets/gallery-kCDcV6UU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c47-7l7W4Ls8UHhB8bMEi1aPC2NltH8\"",
		"mtime": "2026-09-21T18:54:13.447Z",
		"size": 3143,
		"path": "../public/assets/gallery-kCDcV6UU.js"
	},
	"/assets/hero-ridge-BxPX4ZI3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37-wtKQ+ax/dUszPtzygLlXtmHbPns\"",
		"mtime": "2026-09-21T18:54:13.448Z",
		"size": 55,
		"path": "../public/assets/hero-ridge-BxPX4ZI3.js"
	},
	"/assets/david-karanja-CSiDUTdT.png": {
		"type": "image/png",
		"etag": "\"15028b-Ew1I5rnmEeFvEHnCZXIwtaKLP90\"",
		"mtime": "2026-09-21T18:54:13.478Z",
		"size": 1376907,
		"path": "../public/assets/david-karanja-CSiDUTdT.png"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"18cdaf-eAKmUgFTmk5Vsg8JMBr/TXC8n2Q\"",
		"mtime": "2026-08-11T18:13:39.554Z",
		"size": 1625519,
		"path": "../public/favicon.png"
	},
	"/assets/evans-maina-DSJN40IS.png": {
		"type": "image/png",
		"etag": "\"144018-CmWw61X+yetmLMb1RVKM6EiQDi0\"",
		"mtime": "2026-09-21T18:54:13.481Z",
		"size": 1327128,
		"path": "../public/assets/evans-maina-DSJN40IS.png"
	},
	"/assets/antony-ngui-BnIbRtqh.png": {
		"type": "image/png",
		"etag": "\"18b625-6tf4ZdX4bCDs/dhING4Or9cOWKs\"",
		"mtime": "2026-09-21T18:54:13.467Z",
		"size": 1619493,
		"path": "../public/assets/antony-ngui-BnIbRtqh.png"
	},
	"/assets/andreane-kaniaru-BSgm1lpL.png": {
		"type": "image/png",
		"etag": "\"1e52c9-+ZM5sRCm/jPmBc9XghQ8NREBlkE\"",
		"mtime": "2026-09-21T18:54:13.460Z",
		"size": 1987273,
		"path": "../public/assets/andreane-kaniaru-BSgm1lpL.png"
	},
	"/assets/ashley-mwende-CoSZj6rf.png": {
		"type": "image/png",
		"etag": "\"1dbae3-ZMWarmIxbnJipAxprBKo0rlrk3s\"",
		"mtime": "2026-09-21T18:54:13.468Z",
		"size": 1948387,
		"path": "../public/assets/ashley-mwende-CoSZj6rf.png"
	},
	"/assets/angel-kabi-CM6akO1X.png": {
		"type": "image/png",
		"etag": "\"1949e0-1n4r3ZSzfe4usKtBZrW2KOfIeT0\"",
		"mtime": "2026-09-21T18:54:13.463Z",
		"size": 1657312,
		"path": "../public/assets/angel-kabi-CM6akO1X.png"
	},
	"/assets/input-1gx45PQL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"236-MbTMa5Sf4+uwsC04nc24PL8v4XU\"",
		"mtime": "2026-09-21T18:54:13.448Z",
		"size": 566,
		"path": "../public/assets/input-1gx45PQL.js"
	},
	"/assets/ivana-florence-CYnX-CvI.jpeg": {
		"type": "image/jpeg",
		"etag": "\"18f76-vz7/J5HgPtfC4CMY4FXGsHJW6VU\"",
		"mtime": "2026-09-21T18:54:13.487Z",
		"size": 102262,
		"path": "../public/assets/ivana-florence-CYnX-CvI.jpeg"
	},
	"/assets/jackson-kagema-nW1H392I.jpeg": {
		"type": "image/jpeg",
		"etag": "\"141df-3CzfLH8rspj4jucM+eV5cFxx6/g\"",
		"mtime": "2026-09-21T18:54:13.487Z",
		"size": 82399,
		"path": "../public/assets/jackson-kagema-nW1H392I.jpeg"
	},
	"/assets/derick-owuor-z9nILSgo.png": {
		"type": "image/png",
		"etag": "\"1dff9d-vyh1QeqjsMS7lR4KCzPlAv/wvB4\"",
		"mtime": "2026-09-21T18:54:13.479Z",
		"size": 1965981,
		"path": "../public/assets/derick-owuor-z9nILSgo.png"
	},
	"/assets/bush-rovers-logo-8lR0ip0A.png": {
		"type": "image/png",
		"etag": "\"18cdaf-eAKmUgFTmk5Vsg8JMBr/TXC8n2Q\"",
		"mtime": "2026-09-21T18:54:13.472Z",
		"size": 1625519,
		"path": "../public/assets/bush-rovers-logo-8lR0ip0A.png"
	},
	"/assets/john-kibara-tMLw5C87.jpeg": {
		"type": "image/jpeg",
		"etag": "\"172e5-aDL/duLMZaLhgfi/nKEhst5bK3E\"",
		"mtime": "2026-09-21T18:54:13.490Z",
		"size": 94949,
		"path": "../public/assets/john-kibara-tMLw5C87.jpeg"
	},
	"/assets/angel-kabi-card-Cg2o5Ra5.png": {
		"type": "image/png",
		"etag": "\"226a50-9KKz8BwBGSJ9EtKgWn+0llS2Z3o\"",
		"mtime": "2026-09-21T18:54:13.465Z",
		"size": 2255440,
		"path": "../public/assets/angel-kabi-card-Cg2o5Ra5.png"
	},
	"/assets/link-DTDjB8yr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b17-T6p7+OTcp8l+6bpr6CK2jvrruTU\"",
		"mtime": "2026-09-21T18:54:13.450Z",
		"size": 23319,
		"path": "../public/assets/link-DTDjB8yr.js"
	},
	"/assets/label-rtNYCgzV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"278-MhV8hOg+judwyVD6Mcj2bjKnwOo\"",
		"mtime": "2026-09-21T18:54:13.449Z",
		"size": 632,
		"path": "../public/assets/label-rtNYCgzV.js"
	},
	"/assets/andreane-kaniaru-card-DkLgyDfq.png": {
		"type": "image/png",
		"etag": "\"26c0ea-QDuRM7cG3agCbsGP9jSXCMqo3NA\"",
		"mtime": "2026-09-21T18:54:13.461Z",
		"size": 2539754,
		"path": "../public/assets/andreane-kaniaru-card-DkLgyDfq.png"
	},
	"/assets/ashley-mwende-card-C1Z-aEU1.png": {
		"type": "image/png",
		"etag": "\"271ef7-Yj+9UMXjCHct9hATB6w1DSLMHJ4\"",
		"mtime": "2026-09-21T18:54:13.470Z",
		"size": 2563831,
		"path": "../public/assets/ashley-mwende-card-C1Z-aEU1.png"
	},
	"/assets/index-B-N7lGMO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9dab8-HxmWDTTSz1b74mVd0uE3KrQnDMg\"",
		"mtime": "2026-09-21T18:54:13.440Z",
		"size": 645816,
		"path": "../public/assets/index-B-N7lGMO.js"
	},
	"/assets/candice-kangethe-card-DMGuAlqU.png": {
		"type": "image/png",
		"etag": "\"284d5d-enBJU4B8QQc4EgOWu18Hfl/3FlM\"",
		"mtime": "2026-09-21T18:54:13.475Z",
		"size": 2641245,
		"path": "../public/assets/candice-kangethe-card-DMGuAlqU.png"
	},
	"/assets/member-card-CDSe8kfo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f28-yIOrk34g43zCVJdx2rl9dK9loDM\"",
		"mtime": "2026-09-21T18:54:13.450Z",
		"size": 3880,
		"path": "../public/assets/member-card-CDSe8kfo.js"
	},
	"/assets/hero-ridge-s2uuG71s.png": {
		"type": "image/png",
		"etag": "\"1adef6-tf4JpqLhSLFP7hkB9fYTiN/D+/8\"",
		"mtime": "2026-09-21T18:54:13.483Z",
		"size": 1761014,
		"path": "../public/assets/hero-ridge-s2uuG71s.png"
	},
	"/assets/members.index-tb2kBc1c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ba8-vD9InWtLSyh6TZ8T+ERsPXlNZ9E\"",
		"mtime": "2026-09-21T18:54:13.452Z",
		"size": 2984,
		"path": "../public/assets/members.index-tb2kBc1c.js"
	},
	"/assets/members._slug-BucH2R8M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"358-42CJJhTFdCHqup4tRZfiOGf/OU8\"",
		"mtime": "2026-09-21T18:54:13.451Z",
		"size": 856,
		"path": "../public/assets/members._slug-BucH2R8M.js"
	},
	"/assets/members._slug-C8bqdLT0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"81e-YFHSRF1e1//i+BVqQshjhYKzcpU\"",
		"mtime": "2026-09-21T18:54:13.452Z",
		"size": 2078,
		"path": "../public/assets/members._slug-C8bqdLT0.js"
	},
	"/assets/page-parts-CI6aBwaE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"66a-ZjI11hbzjEAdeO/Q6J5OdBw/2GY\"",
		"mtime": "2026-09-21T18:54:13.453Z",
		"size": 1642,
		"path": "../public/assets/page-parts-CI6aBwaE.js"
	},
	"/assets/kelvin-njoroge-CVaUonYk.png": {
		"type": "image/png",
		"etag": "\"1b109e-VQ+OwlBM73CcbFHZVyE1Rr+Qv/8\"",
		"mtime": "2026-09-21T18:54:13.491Z",
		"size": 1773726,
		"path": "../public/assets/kelvin-njoroge-CVaUonYk.png"
	},
	"/assets/hope-wanjiru-DMTNffAF.png": {
		"type": "image/png",
		"etag": "\"215070-z09Ror8suPG+ZuMChvd2w7vrg2Q\"",
		"mtime": "2026-09-21T18:54:13.486Z",
		"size": 2183280,
		"path": "../public/assets/hope-wanjiru-DMTNffAF.png"
	},
	"/assets/queries-C7oNRJ7p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"38a4-9WVDAorUFNtgB+blrJUKGuJAzYs\"",
		"mtime": "2026-09-21T18:54:13.454Z",
		"size": 14500,
		"path": "../public/assets/queries-C7oNRJ7p.js"
	},
	"/assets/react-dom-Cl0WmrMD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f16-mAlqGtRTyE2hGRcYxHnUHAqmSKU\"",
		"mtime": "2026-09-21T18:54:13.454Z",
		"size": 3862,
		"path": "../public/assets/react-dom-Cl0WmrMD.js"
	},
	"/assets/routes-CMATSyky.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19d3-7QvM4ZM6lGPpnF6LkWd3jC2LVNU\"",
		"mtime": "2026-09-21T18:54:13.456Z",
		"size": 6611,
		"path": "../public/assets/routes-CMATSyky.js"
	},
	"/assets/styles-CplmY1Aq.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"9c55-EJXdoEi+Qc/321KdHAW7MV8EVZg\"",
		"mtime": "2026-09-21T18:54:13.505Z",
		"size": 40021,
		"path": "../public/assets/styles-CplmY1Aq.css"
	},
	"/assets/useQuery-CWsGSyyK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f73-Lc0N6oZi2mgMebAFc8dx6Y55ZFY\"",
		"mtime": "2026-09-21T18:54:13.456Z",
		"size": 8051,
		"path": "../public/assets/useQuery-CWsGSyyK.js"
	},
	"/assets/useRouter-DVqa9RBd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"92-7RYjcgguCnGLy7pyo1s0ixOMSNc\"",
		"mtime": "2026-09-21T18:54:13.457Z",
		"size": 146,
		"path": "../public/assets/useRouter-DVqa9RBd.js"
	},
	"/assets/verify.index-BtFDPhVz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45d-a7UWpUAers+3GdvhcX8hgh1ZdkY\"",
		"mtime": "2026-09-21T18:54:13.458Z",
		"size": 1117,
		"path": "../public/assets/verify.index-BtFDPhVz.js"
	},
	"/assets/verify._memberId-DtTKOTgm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a93-a7LHGl7JUczEy9IyzgyotuIZ2ks\"",
		"mtime": "2026-09-21T18:54:13.458Z",
		"size": 2707,
		"path": "../public/assets/verify._memberId-DtTKOTgm.js"
	},
	"/assets/john-kibara-card-4C6jxODD.png": {
		"type": "image/png",
		"etag": "\"263d72-e0MxvRuaHJswg67klRgNgxmJjpg\"",
		"mtime": "2026-09-21T18:54:13.490Z",
		"size": 2506098,
		"path": "../public/assets/john-kibara-card-4C6jxODD.png"
	},
	"/assets/kelvin-njoroge-card-Dyfw2WnW.png": {
		"type": "image/png",
		"etag": "\"2451da-SqhIGatHWO5OJ3/UDz4sI1tol20\"",
		"mtime": "2026-09-21T18:54:13.492Z",
		"size": 2380250,
		"path": "../public/assets/kelvin-njoroge-card-Dyfw2WnW.png"
	},
	"/assets/rose-mwendwa-CDkiDhwq.png": {
		"type": "image/png",
		"etag": "\"1a29c9-QUZuPTzqz44HRYss+GplyuAN8Qo\"",
		"mtime": "2026-09-21T18:54:13.501Z",
		"size": 1714633,
		"path": "../public/assets/rose-mwendwa-CDkiDhwq.png"
	},
	"/assets/solomon-muchiri-Cfg9TaFb.png": {
		"type": "image/png",
		"etag": "\"1c9915-xjSdnhXk023GQghUigjL/rJ2X3M\"",
		"mtime": "2026-09-21T18:54:13.505Z",
		"size": 1874197,
		"path": "../public/assets/solomon-muchiri-Cfg9TaFb.png"
	},
	"/assets/placeholder-card-C4wcBtkD.png": {
		"type": "image/png",
		"etag": "\"227eb9-h4JYO8exHAoJraMipS+iclCgd8k\"",
		"mtime": "2026-09-21T18:54:13.500Z",
		"size": 2260665,
		"path": "../public/assets/placeholder-card-C4wcBtkD.png"
	},
	"/assets/victor-manee-DUgy3Pxh.png": {
		"type": "image/png",
		"etag": "\"1be9b8-BKKGoLdVKjH34lXcl1QGatmW2U8\"",
		"mtime": "2026-09-21T18:54:13.507Z",
		"size": 1829304,
		"path": "../public/assets/victor-manee-DUgy3Pxh.png"
	},
	"/assets/rose-mwendwa-card-DXyVpcQz.png": {
		"type": "image/png",
		"etag": "\"283168-HMJbUhO1yg83flUrrUgGPfiR5NQ\"",
		"mtime": "2026-09-21T18:54:13.503Z",
		"size": 2634088,
		"path": "../public/assets/rose-mwendwa-card-DXyVpcQz.png"
	},
	"/assets/victor-manee-card-CjcqZlEw.png": {
		"type": "image/png",
		"etag": "\"2857d6-iiZZ0WFmBl0QiAozibXXT3uBpGQ\"",
		"mtime": "2026-09-21T18:54:13.509Z",
		"size": 2643926,
		"path": "../public/assets/victor-manee-card-CjcqZlEw.png"
	},
	"/assets/moses-machoka-CrqEO2Nk.jpeg": {
		"type": "image/jpeg",
		"etag": "\"af4ab4-FRHuDOmd0RnLh2DHycowUc1mzTc\"",
		"mtime": "2026-09-21T18:54:13.498Z",
		"size": 11487924,
		"path": "../public/assets/moses-machoka-CrqEO2Nk.jpeg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_oRUfJX = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_oRUfJX
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
