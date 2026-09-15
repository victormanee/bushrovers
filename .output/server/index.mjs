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
	"/assets/achievements-17-ZDPlS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f4-2x1GmK0yBjSCLxgy5ZaV5c4AcMI\"",
		"mtime": "2026-09-15T16:28:09.512Z",
		"size": 2548,
		"path": "../public/assets/achievements-17-ZDPlS.js"
	},
	"/assets/admin-J8dta1J2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7fd-n46MHBLTt0llwgrVjHi5+HLr5UA\"",
		"mtime": "2026-09-15T16:28:09.515Z",
		"size": 2045,
		"path": "../public/assets/admin-J8dta1J2.js"
	},
	"/assets/arrow-left-DY6fX5TN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-PBYkKb8D2s+jWe8UIKLAnK43WdU\"",
		"mtime": "2026-09-15T16:28:09.515Z",
		"size": 155,
		"path": "../public/assets/arrow-left-DY6fX5TN.js"
	},
	"/assets/button-DSlVaVzA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a49a-VEVX15a2K+Q6sYHVF22p8BXCSPk\"",
		"mtime": "2026-09-15T16:28:09.516Z",
		"size": 42138,
		"path": "../public/assets/button-DSlVaVzA.js"
	},
	"/assets/campfire-CQFbV69L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-JWErsYPWDHtHBRyEQR+enIhtyjM\"",
		"mtime": "2026-09-15T16:28:09.517Z",
		"size": 53,
		"path": "../public/assets/campfire-CQFbV69L.js"
	},
	"/assets/candice-kang'ethe-CuiIqppE.jpeg": {
		"type": "image/jpeg",
		"etag": "\"171e6-PQeGmgQK0tb0incSBB5EBi0Z08E\"",
		"mtime": "2026-09-15T16:28:09.566Z",
		"size": 94694,
		"path": "../public/assets/candice-kang'ethe-CuiIqppE.jpeg"
	},
	"/assets/contact-B6NPY_p_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ee36-HHYMH/TK8SVqKREPHMpkTN5XUwQ\"",
		"mtime": "2026-09-15T16:28:09.518Z",
		"size": 60982,
		"path": "../public/assets/contact-B6NPY_p_.js"
	},
	"/assets/campfire-DA5RjFKc.jpg": {
		"type": "image/jpeg",
		"etag": "\"28494-liGx4wQWDmAgJF5Iy+mhHQFujOo\"",
		"mtime": "2026-09-15T16:28:09.565Z",
		"size": 165012,
		"path": "../public/assets/campfire-DA5RjFKc.jpg"
	},
	"/assets/crew-image-Rz0UUP-B.jpg": {
		"type": "image/jpeg",
		"etag": "\"4b7de-sbDod//71DF057Mfx0AINlbkmVE\"",
		"mtime": "2026-09-15T16:28:09.567Z",
		"size": 309214,
		"path": "../public/assets/crew-image-Rz0UUP-B.jpg"
	},
	"/assets/gallery-CvkVb9HO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c47-W/i/mxkdHKmfdCsV+yHsImw1JbY\"",
		"mtime": "2026-09-15T16:28:09.519Z",
		"size": 3143,
		"path": "../public/assets/gallery-CvkVb9HO.js"
	},
	"/assets/hero-ridge-BxPX4ZI3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37-wtKQ+ax/dUszPtzygLlXtmHbPns\"",
		"mtime": "2026-09-15T16:28:09.520Z",
		"size": 55,
		"path": "../public/assets/hero-ridge-BxPX4ZI3.js"
	},
	"/assets/index-trileeaE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9dab8-7RzHGbrjzFx2VJaWuPnlY5MjDZ4\"",
		"mtime": "2026-09-15T16:28:09.512Z",
		"size": 645816,
		"path": "../public/assets/index-trileeaE.js"
	},
	"/assets/evans-maina-DSJN40IS.png": {
		"type": "image/png",
		"etag": "\"144018-CmWw61X+yetmLMb1RVKM6EiQDi0\"",
		"mtime": "2026-09-15T16:28:09.577Z",
		"size": 1327128,
		"path": "../public/assets/evans-maina-DSJN40IS.png"
	},
	"/assets/david-karanja-CSiDUTdT.png": {
		"type": "image/png",
		"etag": "\"15028b-Ew1I5rnmEeFvEHnCZXIwtaKLP90\"",
		"mtime": "2026-09-15T16:28:09.571Z",
		"size": 1376907,
		"path": "../public/assets/david-karanja-CSiDUTdT.png"
	},
	"/assets/andreane-kaniaru-BSgm1lpL.png": {
		"type": "image/png",
		"etag": "\"1e52c9-+ZM5sRCm/jPmBc9XghQ8NREBlkE\"",
		"mtime": "2026-09-15T16:28:09.544Z",
		"size": 1987273,
		"path": "../public/assets/andreane-kaniaru-BSgm1lpL.png"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"18cdaf-eAKmUgFTmk5Vsg8JMBr/TXC8n2Q\"",
		"mtime": "2026-08-11T18:13:39.554Z",
		"size": 1625519,
		"path": "../public/favicon.png"
	},
	"/assets/antony-ngui-BnIbRtqh.png": {
		"type": "image/png",
		"etag": "\"18b625-6tf4ZdX4bCDs/dhING4Or9cOWKs\"",
		"mtime": "2026-09-15T16:28:09.555Z",
		"size": 1619493,
		"path": "../public/assets/antony-ngui-BnIbRtqh.png"
	},
	"/assets/angel-kabi-CM6akO1X.png": {
		"type": "image/png",
		"etag": "\"1949e0-1n4r3ZSzfe4usKtBZrW2KOfIeT0\"",
		"mtime": "2026-09-15T16:28:09.547Z",
		"size": 1657312,
		"path": "../public/assets/angel-kabi-CM6akO1X.png"
	},
	"/assets/bush-rovers-logo-8lR0ip0A.png": {
		"type": "image/png",
		"etag": "\"18cdaf-eAKmUgFTmk5Vsg8JMBr/TXC8n2Q\"",
		"mtime": "2026-09-15T16:28:09.563Z",
		"size": 1625519,
		"path": "../public/assets/bush-rovers-logo-8lR0ip0A.png"
	},
	"/assets/ashley-mwende-CoSZj6rf.png": {
		"type": "image/png",
		"etag": "\"1dbae3-ZMWarmIxbnJipAxprBKo0rlrk3s\"",
		"mtime": "2026-09-15T16:28:09.561Z",
		"size": 1948387,
		"path": "../public/assets/ashley-mwende-CoSZj6rf.png"
	},
	"/assets/hero-ridge-s2uuG71s.png": {
		"type": "image/png",
		"etag": "\"1adef6-tf4JpqLhSLFP7hkB9fYTiN/D+/8\"",
		"mtime": "2026-09-15T16:28:09.580Z",
		"size": 1761014,
		"path": "../public/assets/hero-ridge-s2uuG71s.png"
	},
	"/assets/derick-owuor-z9nILSgo.png": {
		"type": "image/png",
		"etag": "\"1dff9d-vyh1QeqjsMS7lR4KCzPlAv/wvB4\"",
		"mtime": "2026-09-15T16:28:09.574Z",
		"size": 1965981,
		"path": "../public/assets/derick-owuor-z9nILSgo.png"
	},
	"/assets/input-1gx45PQL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"236-MbTMa5Sf4+uwsC04nc24PL8v4XU\"",
		"mtime": "2026-09-15T16:28:09.521Z",
		"size": 566,
		"path": "../public/assets/input-1gx45PQL.js"
	},
	"/assets/ivana-florence-CYnX-CvI.jpeg": {
		"type": "image/jpeg",
		"etag": "\"18f76-vz7/J5HgPtfC4CMY4FXGsHJW6VU\"",
		"mtime": "2026-09-15T16:28:09.584Z",
		"size": 102262,
		"path": "../public/assets/ivana-florence-CYnX-CvI.jpeg"
	},
	"/assets/jackson-kagema-nW1H392I.jpeg": {
		"type": "image/jpeg",
		"etag": "\"141df-3CzfLH8rspj4jucM+eV5cFxx6/g\"",
		"mtime": "2026-09-15T16:28:09.586Z",
		"size": 82399,
		"path": "../public/assets/jackson-kagema-nW1H392I.jpeg"
	},
	"/assets/amgel-kabi-card-Cg2o5Ra5.png": {
		"type": "image/png",
		"etag": "\"226a50-9KKz8BwBGSJ9EtKgWn+0llS2Z3o\"",
		"mtime": "2026-09-15T16:28:09.541Z",
		"size": 2255440,
		"path": "../public/assets/amgel-kabi-card-Cg2o5Ra5.png"
	},
	"/assets/john-kibara-tMLw5C87.jpeg": {
		"type": "image/jpeg",
		"etag": "\"172e5-aDL/duLMZaLhgfi/nKEhst5bK3E\"",
		"mtime": "2026-09-15T16:28:09.592Z",
		"size": 94949,
		"path": "../public/assets/john-kibara-tMLw5C87.jpeg"
	},
	"/assets/label-BAXV6q_V.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"278-7CO/CS/X5jMoERe2GyWER1mlL0o\"",
		"mtime": "2026-09-15T16:28:09.523Z",
		"size": 632,
		"path": "../public/assets/label-BAXV6q_V.js"
	},
	"/assets/link-DTDjB8yr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b17-T6p7+OTcp8l+6bpr6CK2jvrruTU\"",
		"mtime": "2026-09-15T16:28:09.524Z",
		"size": 23319,
		"path": "../public/assets/link-DTDjB8yr.js"
	},
	"/assets/member-card-DLLs8H2m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f28-GptYuTUTOLQkr1UFaOvBaPprYbc\"",
		"mtime": "2026-09-15T16:28:09.525Z",
		"size": 3880,
		"path": "../public/assets/member-card-DLLs8H2m.js"
	},
	"/assets/martina-were-igAUAWw9.jpeg": {
		"type": "image/jpeg",
		"etag": "\"328a2-b5+FKeo+RAeKFT8a4UNcLpEmPnk\"",
		"mtime": "2026-09-15T16:28:09.597Z",
		"size": 207010,
		"path": "../public/assets/martina-were-igAUAWw9.jpeg"
	},
	"/assets/members.index-CaTQfGcw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ba8-N75KA50gYetyzXEhI6C8A50DsNA\"",
		"mtime": "2026-09-15T16:28:09.527Z",
		"size": 2984,
		"path": "../public/assets/members.index-CaTQfGcw.js"
	},
	"/assets/hope-wanjiru-DMTNffAF.png": {
		"type": "image/png",
		"etag": "\"215070-z09Ror8suPG+ZuMChvd2w7vrg2Q\"",
		"mtime": "2026-09-15T16:28:09.583Z",
		"size": 2183280,
		"path": "../public/assets/hope-wanjiru-DMTNffAF.png"
	},
	"/assets/members._slug-BpY2xtrC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6db-stNx3vkDOfD9mj6Tc7yP7l/jvig\"",
		"mtime": "2026-09-15T16:28:09.526Z",
		"size": 1755,
		"path": "../public/assets/members._slug-BpY2xtrC.js"
	},
	"/assets/members._slug-BucH2R8M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"358-42CJJhTFdCHqup4tRZfiOGf/OU8\"",
		"mtime": "2026-09-15T16:28:09.527Z",
		"size": 856,
		"path": "../public/assets/members._slug-BucH2R8M.js"
	},
	"/assets/page-parts-CI6aBwaE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"66a-ZjI11hbzjEAdeO/Q6J5OdBw/2GY\"",
		"mtime": "2026-09-15T16:28:09.529Z",
		"size": 1642,
		"path": "../public/assets/page-parts-CI6aBwaE.js"
	},
	"/assets/queries-CfX24iZy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3d88-LB2kJ600YcQ7yFh1DHY5B/Jz+Rw\"",
		"mtime": "2026-09-15T16:28:09.531Z",
		"size": 15752,
		"path": "../public/assets/queries-CfX24iZy.js"
	},
	"/assets/react-dom-Cl0WmrMD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f16-mAlqGtRTyE2hGRcYxHnUHAqmSKU\"",
		"mtime": "2026-09-15T16:28:09.532Z",
		"size": 3862,
		"path": "../public/assets/react-dom-Cl0WmrMD.js"
	},
	"/assets/routes-yyGX8zcT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19d3-r7qtReu0oHJmRnp98yuv9VMNE5w\"",
		"mtime": "2026-09-15T16:28:09.533Z",
		"size": 6611,
		"path": "../public/assets/routes-yyGX8zcT.js"
	},
	"/assets/kelvin-njoroge-CVaUonYk.png": {
		"type": "image/png",
		"etag": "\"1b109e-VQ+OwlBM73CcbFHZVyE1Rr+Qv/8\"",
		"mtime": "2026-09-15T16:28:09.594Z",
		"size": 1773726,
		"path": "../public/assets/kelvin-njoroge-CVaUonYk.png"
	},
	"/assets/styles-CplmY1Aq.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"9c55-EJXdoEi+Qc/321KdHAW7MV8EVZg\"",
		"mtime": "2026-09-15T16:28:09.616Z",
		"size": 40021,
		"path": "../public/assets/styles-CplmY1Aq.css"
	},
	"/assets/kennedy-kinene-B8UYs4eP.png": {
		"type": "image/png",
		"etag": "\"1b219e-YNyTjVBFsOUu3LigNjeow4Dkqbg\"",
		"mtime": "2026-09-15T16:28:09.596Z",
		"size": 1778078,
		"path": "../public/assets/kennedy-kinene-B8UYs4eP.png"
	},
	"/assets/useQuery-C1_OkdtM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f73-BHSz1zLb5fereW/7fguTNDOQjG0\"",
		"mtime": "2026-09-15T16:28:09.535Z",
		"size": 8051,
		"path": "../public/assets/useQuery-C1_OkdtM.js"
	},
	"/assets/useRouter-DVqa9RBd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"92-7RYjcgguCnGLy7pyo1s0ixOMSNc\"",
		"mtime": "2026-09-15T16:28:09.537Z",
		"size": 146,
		"path": "../public/assets/useRouter-DVqa9RBd.js"
	},
	"/assets/verify.index-BZtJpl9J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45d-APHjRTXBD6mdfbtrvhXskoe+R2k\"",
		"mtime": "2026-09-15T16:28:09.539Z",
		"size": 1117,
		"path": "../public/assets/verify.index-BZtJpl9J.js"
	},
	"/assets/verify._memberId-lTlgcGWC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a93-AapJlu5XJGaA0I7OYRqvMSRN6OI\"",
		"mtime": "2026-09-15T16:28:09.538Z",
		"size": 2707,
		"path": "../public/assets/verify._memberId-lTlgcGWC.js"
	},
	"/assets/john-kibara-card-4C6jxODD.png": {
		"type": "image/png",
		"etag": "\"263d72-e0MxvRuaHJswg67klRgNgxmJjpg\"",
		"mtime": "2026-09-15T16:28:09.590Z",
		"size": 2506098,
		"path": "../public/assets/john-kibara-card-4C6jxODD.png"
	},
	"/assets/rose-mwendwa-CDkiDhwq.png": {
		"type": "image/png",
		"etag": "\"1a29c9-QUZuPTzqz44HRYss+GplyuAN8Qo\"",
		"mtime": "2026-09-15T16:28:09.612Z",
		"size": 1714633,
		"path": "../public/assets/rose-mwendwa-CDkiDhwq.png"
	},
	"/assets/solomon-muchiri-Cfg9TaFb.png": {
		"type": "image/png",
		"etag": "\"1c9915-xjSdnhXk023GQghUigjL/rJ2X3M\"",
		"mtime": "2026-09-15T16:28:09.615Z",
		"size": 1874197,
		"path": "../public/assets/solomon-muchiri-Cfg9TaFb.png"
	},
	"/assets/victor-manee-DUgy3Pxh.png": {
		"type": "image/png",
		"etag": "\"1be9b8-BKKGoLdVKjH34lXcl1QGatmW2U8\"",
		"mtime": "2026-09-15T16:28:09.618Z",
		"size": 1829304,
		"path": "../public/assets/victor-manee-DUgy3Pxh.png"
	},
	"/assets/placeholder-card-C4wcBtkD.png": {
		"type": "image/png",
		"etag": "\"227eb9-h4JYO8exHAoJraMipS+iclCgd8k\"",
		"mtime": "2026-09-15T16:28:09.608Z",
		"size": 2260665,
		"path": "../public/assets/placeholder-card-C4wcBtkD.png"
	},
	"/assets/victor-manee-card-CjcqZlEw.png": {
		"type": "image/png",
		"etag": "\"2857d6-iiZZ0WFmBl0QiAozibXXT3uBpGQ\"",
		"mtime": "2026-09-15T16:28:09.621Z",
		"size": 2643926,
		"path": "../public/assets/victor-manee-card-CjcqZlEw.png"
	},
	"/assets/moses-machoka-CrqEO2Nk.jpeg": {
		"type": "image/jpeg",
		"etag": "\"af4ab4-FRHuDOmd0RnLh2DHycowUc1mzTc\"",
		"mtime": "2026-09-15T16:28:09.606Z",
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
