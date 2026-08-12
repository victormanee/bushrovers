globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
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
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-08-11T17:02:52.382Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/admin-D1zzBLSU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7fd-Y6pNUBP5aWRoBo6Fn5EVvTMWVKU\"",
		"mtime": "2026-08-12T17:58:51.405Z",
		"size": 2045,
		"path": "../public/assets/admin-D1zzBLSU.js"
	},
	"/assets/achievements-DHSlmWXl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f4-CsNYBk9GBKGFjVNpIgAbVxlHLsI\"",
		"mtime": "2026-08-12T17:58:51.402Z",
		"size": 2548,
		"path": "../public/assets/achievements-DHSlmWXl.js"
	},
	"/assets/arrow-left-BIU_Z2aJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-1rXCSMy9IyN8Zc1PhnOItTxjiMk\"",
		"mtime": "2026-08-12T17:58:51.408Z",
		"size": 155,
		"path": "../public/assets/arrow-left-BIU_Z2aJ.js"
	},
	"/assets/button-DdNWVIcw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a216-13nsLSBQ2wpsacwuWqOs9+n/TBo\"",
		"mtime": "2026-08-12T17:58:51.410Z",
		"size": 41494,
		"path": "../public/assets/button-DdNWVIcw.js"
	},
	"/assets/campfire-CQFbV69L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-JWErsYPWDHtHBRyEQR+enIhtyjM\"",
		"mtime": "2026-08-12T17:58:51.411Z",
		"size": 53,
		"path": "../public/assets/campfire-CQFbV69L.js"
	},
	"/assets/campfire-DA5RjFKc.jpg": {
		"type": "image/jpeg",
		"etag": "\"28494-liGx4wQWDmAgJF5Iy+mhHQFujOo\"",
		"mtime": "2026-08-12T17:58:51.457Z",
		"size": 165012,
		"path": "../public/assets/campfire-DA5RjFKc.jpg"
	},
	"/assets/gallery-BUiLCWNy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fba-FYIqNuu8IkoD0A+wbz7gnL4K3No\"",
		"mtime": "2026-08-12T17:58:51.414Z",
		"size": 4026,
		"path": "../public/assets/gallery-BUiLCWNy.js"
	},
	"/assets/contact-Ci8Cw91T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ee53-jM3bpqYRVEei5KMgWKiVMnLyIQ4\"",
		"mtime": "2026-08-12T17:58:51.414Z",
		"size": 61011,
		"path": "../public/assets/contact-Ci8Cw91T.js"
	},
	"/assets/hero-ridge-BxPX4ZI3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37-wtKQ+ax/dUszPtzygLlXtmHbPns\"",
		"mtime": "2026-08-12T17:58:51.414Z",
		"size": 55,
		"path": "../public/assets/hero-ridge-BxPX4ZI3.js"
	},
	"/assets/crew-image-Rz0UUP-B.jpg": {
		"type": "image/jpeg",
		"etag": "\"4b7de-sbDod//71DF057Mfx0AINlbkmVE\"",
		"mtime": "2026-08-12T17:58:51.461Z",
		"size": 309214,
		"path": "../public/assets/crew-image-Rz0UUP-B.jpg"
	},
	"/assets/input-DXdYwMaj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"247-XRptpbS9JUpHhgHi0V5MV1cYB5w\"",
		"mtime": "2026-08-12T17:58:51.419Z",
		"size": 583,
		"path": "../public/assets/input-DXdYwMaj.js"
	},
	"/assets/label-2AphpqsZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"288-dLFY4ouPlHNvIq9Qhv4HYAUQAJ0\"",
		"mtime": "2026-08-12T17:58:51.421Z",
		"size": 648,
		"path": "../public/assets/label-2AphpqsZ.js"
	},
	"/assets/link-y1oaIvxI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b1f-ap2hTQ48f3FZrYDHhBr2/49IH/Y\"",
		"mtime": "2026-08-12T17:58:51.421Z",
		"size": 23327,
		"path": "../public/assets/link-y1oaIvxI.js"
	},
	"/assets/member-card-CAjz5MlN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f76-JqALgPDsRk67MtqlvZ6Rgtg0tZ0\"",
		"mtime": "2026-08-12T17:58:51.423Z",
		"size": 3958,
		"path": "../public/assets/member-card-CAjz5MlN.js"
	},
	"/assets/index-DMStyGrN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95323-MOrvLcazAD1vj5vkGChbO4fTmjc\"",
		"mtime": "2026-08-12T17:58:51.400Z",
		"size": 611107,
		"path": "../public/assets/index-DMStyGrN.js"
	},
	"/assets/david-karanja-CSiDUTdT.png": {
		"type": "image/png",
		"etag": "\"15028b-Ew1I5rnmEeFvEHnCZXIwtaKLP90\"",
		"mtime": "2026-08-12T17:58:51.462Z",
		"size": 1376907,
		"path": "../public/assets/david-karanja-CSiDUTdT.png"
	},
	"/assets/angel-kabi-CM6akO1X.png": {
		"type": "image/png",
		"etag": "\"1949e0-1n4r3ZSzfe4usKtBZrW2KOfIeT0\"",
		"mtime": "2026-08-12T17:58:51.451Z",
		"size": 1657312,
		"path": "../public/assets/angel-kabi-CM6akO1X.png"
	},
	"/assets/andreane-kaniaru-BSgm1lpL.png": {
		"type": "image/png",
		"etag": "\"1e52c9-+ZM5sRCm/jPmBc9XghQ8NREBlkE\"",
		"mtime": "2026-08-12T17:58:51.447Z",
		"size": 1987273,
		"path": "../public/assets/andreane-kaniaru-BSgm1lpL.png"
	},
	"/assets/antony-ngui-BnIbRtqh.png": {
		"type": "image/png",
		"etag": "\"18b625-6tf4ZdX4bCDs/dhING4Or9cOWKs\"",
		"mtime": "2026-08-12T17:58:51.453Z",
		"size": 1619493,
		"path": "../public/assets/antony-ngui-BnIbRtqh.png"
	},
	"/assets/bush-rovers-logo-8lR0ip0A.png": {
		"type": "image/png",
		"etag": "\"18cdaf-eAKmUgFTmk5Vsg8JMBr/TXC8n2Q\"",
		"mtime": "2026-08-12T17:58:51.457Z",
		"size": 1625519,
		"path": "../public/assets/bush-rovers-logo-8lR0ip0A.png"
	},
	"/assets/kelvin-njoroge-CVaUonYk.png": {
		"type": "image/png",
		"etag": "\"1b109e-VQ+OwlBM73CcbFHZVyE1Rr+Qv/8\"",
		"mtime": "2026-08-12T17:58:51.466Z",
		"size": 1773726,
		"path": "../public/assets/kelvin-njoroge-CVaUonYk.png"
	},
	"/assets/members.index-B9Z2WG5L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d3-TZLdEf4w+JXl8aw/4MQb5MAXqNU\"",
		"mtime": "2026-08-12T17:58:51.429Z",
		"size": 2515,
		"path": "../public/assets/members.index-B9Z2WG5L.js"
	},
	"/assets/hero-ridge-s2uuG71s.png": {
		"type": "image/png",
		"etag": "\"1adef6-tf4JpqLhSLFP7hkB9fYTiN/D+/8\"",
		"mtime": "2026-08-12T17:58:51.466Z",
		"size": 1761014,
		"path": "../public/assets/hero-ridge-s2uuG71s.png"
	},
	"/assets/members._slug-BtSMa4cl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"67f-O+yBFecr6glh39FsSCZKzGlX4uM\"",
		"mtime": "2026-08-12T17:58:51.425Z",
		"size": 1663,
		"path": "../public/assets/members._slug-BtSMa4cl.js"
	},
	"/assets/members._slug-Bzu-OTLu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"358-Mpa0zxCBevZn2+Ps/7rhA2PCZSw\"",
		"mtime": "2026-08-12T17:58:51.426Z",
		"size": 856,
		"path": "../public/assets/members._slug-Bzu-OTLu.js"
	},
	"/assets/page-parts-471FMs4b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"66a-gt+j0GicWwO0pkd/HXNxcYbvFGs\"",
		"mtime": "2026-08-12T17:58:51.429Z",
		"size": 1642,
		"path": "../public/assets/page-parts-471FMs4b.js"
	},
	"/assets/queries-Cpx8U5qJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f4e-vGTjg4uIUZrT+5sh6DWj3dQUlYA\"",
		"mtime": "2026-08-12T17:58:51.432Z",
		"size": 8014,
		"path": "../public/assets/queries-Cpx8U5qJ.js"
	},
	"/assets/react-dom-DPktNLVf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dd9-PUzhaZGvoE774VXPu5Ykqu5f0KU\"",
		"mtime": "2026-08-12T17:58:51.436Z",
		"size": 3545,
		"path": "../public/assets/react-dom-DPktNLVf.js"
	},
	"/assets/routes-Dd2VRBbD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19d3-e9he12EE1i0Gg8gV5NNPv24V9ek\"",
		"mtime": "2026-08-12T17:58:51.436Z",
		"size": 6611,
		"path": "../public/assets/routes-Dd2VRBbD.js"
	},
	"/assets/useQuery-CcCYTbsW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2251-mlzxVZwyuHjfYIQWkDgoGle9gMw\"",
		"mtime": "2026-08-12T17:58:51.440Z",
		"size": 8785,
		"path": "../public/assets/useQuery-CcCYTbsW.js"
	},
	"/assets/styles-Dn0BAMxP.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1572b-rpPERiWAkh6zfrrjeqSHJPetvXk\"",
		"mtime": "2026-08-12T17:58:51.476Z",
		"size": 87851,
		"path": "../public/assets/styles-Dn0BAMxP.css"
	},
	"/assets/useRouter-JxMYdnBr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"92-V7l3z/+yaWrh+DsU50aPkFvACSA\"",
		"mtime": "2026-08-12T17:58:51.440Z",
		"size": 146,
		"path": "../public/assets/useRouter-JxMYdnBr.js"
	},
	"/assets/verify.index-YodRDgnQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45f-PyCOWHpbBC68d2OZ41zzLJnhkok\"",
		"mtime": "2026-08-12T17:58:51.444Z",
		"size": 1119,
		"path": "../public/assets/verify.index-YodRDgnQ.js"
	},
	"/assets/verify._memberId-CSufcMVw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a93-+CNDchahdaizVFwdo9NofeKhkDI\"",
		"mtime": "2026-08-12T17:58:51.443Z",
		"size": 2707,
		"path": "../public/assets/verify._memberId-CSufcMVw.js"
	},
	"/assets/evans-maina-CQ-S3fWL.jpg": {
		"type": "image/jpeg",
		"etag": "\"213eac-IszX+OC9uxXr1TNw2O+YwGNFjxE\"",
		"mtime": "2026-08-12T17:58:51.466Z",
		"size": 2178732,
		"path": "../public/assets/evans-maina-CQ-S3fWL.jpg"
	},
	"/assets/victor-manee-nefwqz_J.png": {
		"type": "image/png",
		"etag": "\"1cc01d-1hXwS0GB+o4nXi+CYTTHUMkFP9Y\"",
		"mtime": "2026-08-12T17:58:51.478Z",
		"size": 1884189,
		"path": "../public/assets/victor-manee-nefwqz_J.png"
	},
	"/assets/victor-manee-card-CjcqZlEw.png": {
		"type": "image/png",
		"etag": "\"2857d6-iiZZ0WFmBl0QiAozibXXT3uBpGQ\"",
		"mtime": "2026-08-12T17:58:51.478Z",
		"size": 2643926,
		"path": "../public/assets/victor-manee-card-CjcqZlEw.png"
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
var _lazy_oS5FcV = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_oS5FcV
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
