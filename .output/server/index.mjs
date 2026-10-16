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
	"/assets/achievements-Dn_Wi9cQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f4-/3N5kz5ux+44E6TaZqKoVqssnnM\"",
		"mtime": "2026-10-16T21:54:05.030Z",
		"size": 2548,
		"path": "../public/assets/achievements-Dn_Wi9cQ.js"
	},
	"/assets/admin-DWjb1Dg1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7fd-C79J01cV8vS61GHqkvBupZWxjjQ\"",
		"mtime": "2026-10-16T21:54:05.031Z",
		"size": 2045,
		"path": "../public/assets/admin-DWjb1Dg1.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-08-11T17:02:58.989Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/arrow-left-DY6fX5TN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-PBYkKb8D2s+jWe8UIKLAnK43WdU\"",
		"mtime": "2026-10-16T21:54:05.032Z",
		"size": 155,
		"path": "../public/assets/arrow-left-DY6fX5TN.js"
	},
	"/assets/button-DSlVaVzA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a49a-VEVX15a2K+Q6sYHVF22p8BXCSPk\"",
		"mtime": "2026-10-16T21:54:05.033Z",
		"size": 42138,
		"path": "../public/assets/button-DSlVaVzA.js"
	},
	"/assets/campfire-CQFbV69L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-JWErsYPWDHtHBRyEQR+enIhtyjM\"",
		"mtime": "2026-10-16T21:54:05.034Z",
		"size": 53,
		"path": "../public/assets/campfire-CQFbV69L.js"
	},
	"/assets/campfire-DA5RjFKc.jpg": {
		"type": "image/jpeg",
		"etag": "\"28494-liGx4wQWDmAgJF5Iy+mhHQFujOo\"",
		"mtime": "2026-10-16T21:54:05.087Z",
		"size": 165012,
		"path": "../public/assets/campfire-DA5RjFKc.jpg"
	},
	"/assets/candice-kang'ethe-CuiIqppE.jpeg": {
		"type": "image/jpeg",
		"etag": "\"171e6-PQeGmgQK0tb0incSBB5EBi0Z08E\"",
		"mtime": "2026-10-16T21:54:05.088Z",
		"size": 94694,
		"path": "../public/assets/candice-kang'ethe-CuiIqppE.jpeg"
	},
	"/assets/contact-D5SC5W_Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ee36-xL4rV/eRkeA44wyqCpRJIGNPfyg\"",
		"mtime": "2026-10-16T21:54:05.035Z",
		"size": 60982,
		"path": "../public/assets/contact-D5SC5W_Y.js"
	},
	"/assets/crew-image-Rz0UUP-B.jpg": {
		"type": "image/jpeg",
		"etag": "\"4b7de-sbDod//71DF057Mfx0AINlbkmVE\"",
		"mtime": "2026-10-16T21:54:05.093Z",
		"size": 309214,
		"path": "../public/assets/crew-image-Rz0UUP-B.jpg"
	},
	"/assets/gallery-DMHEm2IC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c47-jsJOM03BAoCJK3BTYRvt8rVMNXg\"",
		"mtime": "2026-10-16T21:54:05.036Z",
		"size": 3143,
		"path": "../public/assets/gallery-DMHEm2IC.js"
	},
	"/assets/david-karanja-CSiDUTdT.png": {
		"type": "image/png",
		"etag": "\"15028b-Ew1I5rnmEeFvEHnCZXIwtaKLP90\"",
		"mtime": "2026-10-16T21:54:05.094Z",
		"size": 1376907,
		"path": "../public/assets/david-karanja-CSiDUTdT.png"
	},
	"/assets/evans-maina-DSJN40IS.png": {
		"type": "image/png",
		"etag": "\"144018-CmWw61X+yetmLMb1RVKM6EiQDi0\"",
		"mtime": "2026-10-16T21:54:05.105Z",
		"size": 1327128,
		"path": "../public/assets/evans-maina-DSJN40IS.png"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"18cdaf-eAKmUgFTmk5Vsg8JMBr/TXC8n2Q\"",
		"mtime": "2026-08-11T18:13:39.554Z",
		"size": 1625519,
		"path": "../public/favicon.png"
	},
	"/assets/angel-kabi-CM6akO1X.png": {
		"type": "image/png",
		"etag": "\"1949e0-1n4r3ZSzfe4usKtBZrW2KOfIeT0\"",
		"mtime": "2026-10-16T21:54:05.063Z",
		"size": 1657312,
		"path": "../public/assets/angel-kabi-CM6akO1X.png"
	},
	"/assets/antony-ngui-BnIbRtqh.png": {
		"type": "image/png",
		"etag": "\"18b625-6tf4ZdX4bCDs/dhING4Or9cOWKs\"",
		"mtime": "2026-10-16T21:54:05.074Z",
		"size": 1619493,
		"path": "../public/assets/antony-ngui-BnIbRtqh.png"
	},
	"/assets/bush-rovers-logo-8lR0ip0A.png": {
		"type": "image/png",
		"etag": "\"18cdaf-eAKmUgFTmk5Vsg8JMBr/TXC8n2Q\"",
		"mtime": "2026-10-16T21:54:05.085Z",
		"size": 1625519,
		"path": "../public/assets/bush-rovers-logo-8lR0ip0A.png"
	},
	"/assets/andreane-kaniaru-BSgm1lpL.png": {
		"type": "image/png",
		"etag": "\"1e52c9-+ZM5sRCm/jPmBc9XghQ8NREBlkE\"",
		"mtime": "2026-10-16T21:54:05.054Z",
		"size": 1987273,
		"path": "../public/assets/andreane-kaniaru-BSgm1lpL.png"
	},
	"/assets/ashley-mwende-CoSZj6rf.png": {
		"type": "image/png",
		"etag": "\"1dbae3-ZMWarmIxbnJipAxprBKo0rlrk3s\"",
		"mtime": "2026-10-16T21:54:05.076Z",
		"size": 1948387,
		"path": "../public/assets/ashley-mwende-CoSZj6rf.png"
	},
	"/assets/derick-owuor-z9nILSgo.png": {
		"type": "image/png",
		"etag": "\"1dff9d-vyh1QeqjsMS7lR4KCzPlAv/wvB4\"",
		"mtime": "2026-10-16T21:54:05.099Z",
		"size": 1965981,
		"path": "../public/assets/derick-owuor-z9nILSgo.png"
	},
	"/assets/hero-ridge-BxPX4ZI3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37-wtKQ+ax/dUszPtzygLlXtmHbPns\"",
		"mtime": "2026-10-16T21:54:05.036Z",
		"size": 55,
		"path": "../public/assets/hero-ridge-BxPX4ZI3.js"
	},
	"/assets/input-1gx45PQL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"236-MbTMa5Sf4+uwsC04nc24PL8v4XU\"",
		"mtime": "2026-10-16T21:54:05.038Z",
		"size": 566,
		"path": "../public/assets/input-1gx45PQL.js"
	},
	"/assets/jackson-kagema-nW1H392I.jpeg": {
		"type": "image/jpeg",
		"etag": "\"141df-3CzfLH8rspj4jucM+eV5cFxx6/g\"",
		"mtime": "2026-10-16T21:54:05.119Z",
		"size": 82399,
		"path": "../public/assets/jackson-kagema-nW1H392I.jpeg"
	},
	"/assets/ivana-florence-CYnX-CvI.jpeg": {
		"type": "image/jpeg",
		"etag": "\"18f76-vz7/J5HgPtfC4CMY4FXGsHJW6VU\"",
		"mtime": "2026-10-16T21:54:05.118Z",
		"size": 102262,
		"path": "../public/assets/ivana-florence-CYnX-CvI.jpeg"
	},
	"/assets/john-kibara-tMLw5C87.jpeg": {
		"type": "image/jpeg",
		"etag": "\"172e5-aDL/duLMZaLhgfi/nKEhst5bK3E\"",
		"mtime": "2026-10-16T21:54:05.124Z",
		"size": 94949,
		"path": "../public/assets/john-kibara-tMLw5C87.jpeg"
	},
	"/assets/andreane-kaniaru-card-DkLgyDfq.png": {
		"type": "image/png",
		"etag": "\"26c0ea-QDuRM7cG3agCbsGP9jSXCMqo3NA\"",
		"mtime": "2026-10-16T21:54:05.058Z",
		"size": 2539754,
		"path": "../public/assets/andreane-kaniaru-card-DkLgyDfq.png"
	},
	"/assets/angel-kabi-card-Cg2o5Ra5.png": {
		"type": "image/png",
		"etag": "\"226a50-9KKz8BwBGSJ9EtKgWn+0llS2Z3o\"",
		"mtime": "2026-10-16T21:54:05.071Z",
		"size": 2255440,
		"path": "../public/assets/angel-kabi-card-Cg2o5Ra5.png"
	},
	"/assets/ashley-mwende-card-C1Z-aEU1.png": {
		"type": "image/png",
		"etag": "\"271ef7-Yj+9UMXjCHct9hATB6w1DSLMHJ4\"",
		"mtime": "2026-10-16T21:54:05.082Z",
		"size": 2563831,
		"path": "../public/assets/ashley-mwende-card-C1Z-aEU1.png"
	},
	"/assets/index-oLcV8b7v.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9db5c-67sE3zi7tVQlJMBMdyo3l6WlHa8\"",
		"mtime": "2026-10-16T21:54:05.029Z",
		"size": 645980,
		"path": "../public/assets/index-oLcV8b7v.js"
	},
	"/assets/derrick-owuor-card-CbTIynru.png": {
		"type": "image/png",
		"etag": "\"28287c-qP0vsYyHDNbm2kTxEXCXpt3N9pI\"",
		"mtime": "2026-10-16T21:54:05.103Z",
		"size": 2631804,
		"path": "../public/assets/derrick-owuor-card-CbTIynru.png"
	},
	"/assets/candice-kangethe-card-DMGuAlqU.png": {
		"type": "image/png",
		"etag": "\"284d5d-enBJU4B8QQc4EgOWu18Hfl/3FlM\"",
		"mtime": "2026-10-16T21:54:05.092Z",
		"size": 2641245,
		"path": "../public/assets/candice-kangethe-card-DMGuAlqU.png"
	},
	"/assets/label-C5R5fB_7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"278-XaQTmYnvSlUBAY7nVHYglxLmO4I\"",
		"mtime": "2026-10-16T21:54:05.038Z",
		"size": 632,
		"path": "../public/assets/label-C5R5fB_7.js"
	},
	"/assets/link-DTDjB8yr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b17-T6p7+OTcp8l+6bpr6CK2jvrruTU\"",
		"mtime": "2026-10-16T21:54:05.039Z",
		"size": 23319,
		"path": "../public/assets/link-DTDjB8yr.js"
	},
	"/assets/hero-ridge-s2uuG71s.png": {
		"type": "image/png",
		"etag": "\"1adef6-tf4JpqLhSLFP7hkB9fYTiN/D+/8\"",
		"mtime": "2026-10-16T21:54:05.108Z",
		"size": 1761014,
		"path": "../public/assets/hero-ridge-s2uuG71s.png"
	},
	"/assets/members.index-KU4eFatw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ba8-KDZ6R6sWszFJG8zZM9awbY+6/rU\"",
		"mtime": "2026-10-16T21:54:05.043Z",
		"size": 2984,
		"path": "../public/assets/members.index-KU4eFatw.js"
	},
	"/assets/member-card-MkqufspQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f28-jpfsqJv82FAwOAZDJXcICSDslrI\"",
		"mtime": "2026-10-16T21:54:05.041Z",
		"size": 3880,
		"path": "../public/assets/member-card-MkqufspQ.js"
	},
	"/assets/members._slug-BucH2R8M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"358-42CJJhTFdCHqup4tRZfiOGf/OU8\"",
		"mtime": "2026-10-16T21:54:05.042Z",
		"size": 856,
		"path": "../public/assets/members._slug-BucH2R8M.js"
	},
	"/assets/members._slug-Cb49E4xn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d6-vbG4UFQsEoZd1ERMwymjk95t0dM\"",
		"mtime": "2026-10-16T21:54:05.042Z",
		"size": 2262,
		"path": "../public/assets/members._slug-Cb49E4xn.js"
	},
	"/assets/page-parts-CI6aBwaE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"66a-ZjI11hbzjEAdeO/Q6J5OdBw/2GY\"",
		"mtime": "2026-10-16T21:54:05.044Z",
		"size": 1642,
		"path": "../public/assets/page-parts-CI6aBwaE.js"
	},
	"/assets/queries-z46aiG18.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"389b-mNN/F/MsK4E16oJHybcX0bimkbo\"",
		"mtime": "2026-10-16T21:54:05.047Z",
		"size": 14491,
		"path": "../public/assets/queries-z46aiG18.js"
	},
	"/assets/react-dom-Cl0WmrMD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f16-mAlqGtRTyE2hGRcYxHnUHAqmSKU\"",
		"mtime": "2026-10-16T21:54:05.047Z",
		"size": 3862,
		"path": "../public/assets/react-dom-Cl0WmrMD.js"
	},
	"/assets/john-kibara-card-4C6jxODD.png": {
		"type": "image/png",
		"etag": "\"263d72-e0MxvRuaHJswg67klRgNgxmJjpg\"",
		"mtime": "2026-10-16T21:54:05.123Z",
		"size": 2506098,
		"path": "../public/assets/john-kibara-card-4C6jxODD.png"
	},
	"/assets/routes-cRCelO1J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19d3-WStt3omKZG1huArSz58/S9W48WE\"",
		"mtime": "2026-10-16T21:54:05.048Z",
		"size": 6611,
		"path": "../public/assets/routes-cRCelO1J.js"
	},
	"/assets/hope-wanjiru-DMTNffAF.png": {
		"type": "image/png",
		"etag": "\"215070-z09Ror8suPG+ZuMChvd2w7vrg2Q\"",
		"mtime": "2026-10-16T21:54:05.111Z",
		"size": 2183280,
		"path": "../public/assets/hope-wanjiru-DMTNffAF.png"
	},
	"/assets/kelvin-njoroge-card-Dyfw2WnW.png": {
		"type": "image/png",
		"etag": "\"2451da-SqhIGatHWO5OJ3/UDz4sI1tol20\"",
		"mtime": "2026-10-16T21:54:05.129Z",
		"size": 2380250,
		"path": "../public/assets/kelvin-njoroge-card-Dyfw2WnW.png"
	},
	"/assets/hope-wanjiru-card-BIHS1ib7.png": {
		"type": "image/png",
		"etag": "\"281445-t1s/CeMJJQo0Yqe5rrwEunl+J24\"",
		"mtime": "2026-10-16T21:54:05.116Z",
		"size": 2626629,
		"path": "../public/assets/hope-wanjiru-card-BIHS1ib7.png"
	},
	"/assets/styles-CplmY1Aq.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"9c55-EJXdoEi+Qc/321KdHAW7MV8EVZg\"",
		"mtime": "2026-10-16T21:54:05.159Z",
		"size": 40021,
		"path": "../public/assets/styles-CplmY1Aq.css"
	},
	"/assets/useQuery-CMB_o-KM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f73-y812lCpYm5XXkxqhElnyT3eb8o4\"",
		"mtime": "2026-10-16T21:54:05.049Z",
		"size": 8051,
		"path": "../public/assets/useQuery-CMB_o-KM.js"
	},
	"/assets/useRouter-DVqa9RBd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"92-7RYjcgguCnGLy7pyo1s0ixOMSNc\"",
		"mtime": "2026-10-16T21:54:05.050Z",
		"size": 146,
		"path": "../public/assets/useRouter-DVqa9RBd.js"
	},
	"/assets/kelvin-njoroge-CVaUonYk.png": {
		"type": "image/png",
		"etag": "\"1b109e-VQ+OwlBM73CcbFHZVyE1Rr+Qv/8\"",
		"mtime": "2026-10-16T21:54:05.126Z",
		"size": 1773726,
		"path": "../public/assets/kelvin-njoroge-CVaUonYk.png"
	},
	"/assets/verify.index-Cyzv6Abt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45d-tb3w7V3C/x84jurNUZ+gu9VWaqw\"",
		"mtime": "2026-10-16T21:54:05.052Z",
		"size": 1117,
		"path": "../public/assets/verify.index-Cyzv6Abt.js"
	},
	"/assets/verify._memberId-CM4rXlcM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a93-unyM17rOqxEnJEDwUZGq1OWU/zE\"",
		"mtime": "2026-10-16T21:54:05.051Z",
		"size": 2707,
		"path": "../public/assets/verify._memberId-CM4rXlcM.js"
	},
	"/assets/rose-mwendwa-CDkiDhwq.png": {
		"type": "image/png",
		"etag": "\"1a29c9-QUZuPTzqz44HRYss+GplyuAN8Qo\"",
		"mtime": "2026-10-16T21:54:05.152Z",
		"size": 1714633,
		"path": "../public/assets/rose-mwendwa-CDkiDhwq.png"
	},
	"/assets/solomon-muchiri-Cfg9TaFb.png": {
		"type": "image/png",
		"etag": "\"1c9915-xjSdnhXk023GQghUigjL/rJ2X3M\"",
		"mtime": "2026-10-16T21:54:05.158Z",
		"size": 1874197,
		"path": "../public/assets/solomon-muchiri-Cfg9TaFb.png"
	},
	"/assets/moses-machoka-card-Ml-RXoVw.png": {
		"type": "image/png",
		"etag": "\"266337-8TugKnKZyKCxpMMTAjflp7Pnb/M\"",
		"mtime": "2026-10-16T21:54:05.147Z",
		"size": 2515767,
		"path": "../public/assets/moses-machoka-card-Ml-RXoVw.png"
	},
	"/assets/placeholder-card-C4wcBtkD.png": {
		"type": "image/png",
		"etag": "\"227eb9-h4JYO8exHAoJraMipS+iclCgd8k\"",
		"mtime": "2026-10-16T21:54:05.150Z",
		"size": 2260665,
		"path": "../public/assets/placeholder-card-C4wcBtkD.png"
	},
	"/assets/rose-mwendwa-card-DXyVpcQz.png": {
		"type": "image/png",
		"etag": "\"283168-HMJbUhO1yg83flUrrUgGPfiR5NQ\"",
		"mtime": "2026-10-16T21:54:05.155Z",
		"size": 2634088,
		"path": "../public/assets/rose-mwendwa-card-DXyVpcQz.png"
	},
	"/assets/victor-manee-DUgy3Pxh.png": {
		"type": "image/png",
		"etag": "\"1be9b8-BKKGoLdVKjH34lXcl1QGatmW2U8\"",
		"mtime": "2026-10-16T21:54:05.161Z",
		"size": 1829304,
		"path": "../public/assets/victor-manee-DUgy3Pxh.png"
	},
	"/assets/victor-manee-card-CjcqZlEw.png": {
		"type": "image/png",
		"etag": "\"2857d6-iiZZ0WFmBl0QiAozibXXT3uBpGQ\"",
		"mtime": "2026-10-16T21:54:05.164Z",
		"size": 2643926,
		"path": "../public/assets/victor-manee-card-CjcqZlEw.png"
	},
	"/assets/moses-machoka-CrqEO2Nk.jpeg": {
		"type": "image/jpeg",
		"etag": "\"af4ab4-FRHuDOmd0RnLh2DHycowUc1mzTc\"",
		"mtime": "2026-10-16T21:54:05.141Z",
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
