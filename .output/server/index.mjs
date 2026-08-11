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
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-08-11T17:02:52.382Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-08-11T17:02:58.989Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/about-C21tozq2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e38-ey3PxQzX9N7vm5oj5OT8wMkIthY\"",
		"mtime": "2026-08-11T18:38:47.055Z",
		"size": 3640,
		"path": "../public/assets/about-C21tozq2.js"
	},
	"/assets/achievements-D6xYHIa-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f9-Vfl5+Prrn0iWSPA2Zwlkn8oowiA\"",
		"mtime": "2026-08-11T18:38:47.057Z",
		"size": 2553,
		"path": "../public/assets/achievements-D6xYHIa-.js"
	},
	"/assets/activities-CRh-z9Km.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"913-VwJ5TdaDDaMqgFzUhEVv82iraRo\"",
		"mtime": "2026-08-11T18:38:47.058Z",
		"size": 2323,
		"path": "../public/assets/activities-CRh-z9Km.js"
	},
	"/assets/admin-BE7Lo0UT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"802-MCCvqcsWJCYhsMpWqOy2HgBmYtY\"",
		"mtime": "2026-08-11T18:38:47.058Z",
		"size": 2050,
		"path": "../public/assets/admin-BE7Lo0UT.js"
	},
	"/assets/calendar-days-DSVFIEqJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-sVt/zCL/6or8oa1Ts4NdDtNd5tE\"",
		"mtime": "2026-08-11T18:38:47.059Z",
		"size": 483,
		"path": "../public/assets/calendar-days-DSVFIEqJ.js"
	},
	"/assets/campfire-CQFbV69L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-JWErsYPWDHtHBRyEQR+enIhtyjM\"",
		"mtime": "2026-08-11T18:38:47.059Z",
		"size": 53,
		"path": "../public/assets/campfire-CQFbV69L.js"
	},
	"/assets/campfire-DA5RjFKc.jpg": {
		"type": "image/jpeg",
		"etag": "\"28494-liGx4wQWDmAgJF5Iy+mhHQFujOo\"",
		"mtime": "2026-08-11T18:38:47.085Z",
		"size": 165012,
		"path": "../public/assets/campfire-DA5RjFKc.jpg"
	},
	"/assets/community-service-DAY8Ur-g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9fb-txnDAFg4Lca/FdRFkpANjkIOD1c\"",
		"mtime": "2026-08-11T18:38:47.060Z",
		"size": 2555,
		"path": "../public/assets/community-service-DAY8Ur-g.js"
	},
	"/assets/contact-XEN6HQ9K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"edc2-bf9lzn3rgPzuS6Bgd/nqxV2ODOo\"",
		"mtime": "2026-08-11T18:38:47.061Z",
		"size": 60866,
		"path": "../public/assets/contact-XEN6HQ9K.js"
	},
	"/assets/forest-trail-BfNeoBUv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"39-jtKzeYRzmjMPLMoCrQIKkexnaJU\"",
		"mtime": "2026-08-11T18:38:47.061Z",
		"size": 57,
		"path": "../public/assets/forest-trail-BfNeoBUv.js"
	},
	"/assets/forest-trail-BoSB8FRc.jpg": {
		"type": "image/jpeg",
		"etag": "\"4c53b-WuWpDFzEv2L19hDl8sSi85b4Hj0\"",
		"mtime": "2026-08-11T18:38:47.086Z",
		"size": 312635,
		"path": "../public/assets/forest-trail-BoSB8FRc.jpg"
	},
	"/assets/hand-heart-Df27HgVI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ab-GrCM8vpsFVHESxb0SB8PTI0mW3E\"",
		"mtime": "2026-08-11T18:38:47.064Z",
		"size": 683,
		"path": "../public/assets/hand-heart-Df27HgVI.js"
	},
	"/assets/gallery-IH2XGe5L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fca-sWnyOuLgOjrhYd+SPsg4H+L/7pA\"",
		"mtime": "2026-08-11T18:38:47.063Z",
		"size": 4042,
		"path": "../public/assets/gallery-IH2XGe5L.js"
	},
	"/assets/hero-ridge-BxPX4ZI3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37-wtKQ+ax/dUszPtzygLlXtmHbPns\"",
		"mtime": "2026-08-11T18:38:47.064Z",
		"size": 55,
		"path": "../public/assets/hero-ridge-BxPX4ZI3.js"
	},
	"/assets/input-DRimjzFf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26d-X1lOI4OFjbVODx7D2QKH0YBuxcA\"",
		"mtime": "2026-08-11T18:38:47.065Z",
		"size": 621,
		"path": "../public/assets/input-DRimjzFf.js"
	},
	"/assets/jsx-runtime-Cltr0gcK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20ee-ObwGPj96dlkL76iVLbX2wLAXzuw\"",
		"mtime": "2026-08-11T18:38:47.066Z",
		"size": 8430,
		"path": "../public/assets/jsx-runtime-Cltr0gcK.js"
	},
	"/assets/label-CA93-dF-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28d-aK1wdc2wa6WujWdvJmnlmhPBrP4\"",
		"mtime": "2026-08-11T18:38:47.067Z",
		"size": 653,
		"path": "../public/assets/label-CA93-dF-.js"
	},
	"/assets/leadership-DJPrAJb6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"434-MDTqMHspw0g5hXgFN0kOuQBb380\"",
		"mtime": "2026-08-11T18:38:47.067Z",
		"size": 1076,
		"path": "../public/assets/leadership-DJPrAJb6.js"
	},
	"/assets/link-CutWeY-C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b24-10c1ahqxvyQeH40t4NeOwXG1XHY\"",
		"mtime": "2026-08-11T18:38:47.070Z",
		"size": 23332,
		"path": "../public/assets/link-CutWeY-C.js"
	},
	"/assets/map-pin-CR8KDppR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8-vWbz8B9lNxoJpOHOElRzycMNYRQ\"",
		"mtime": "2026-08-11T18:38:47.070Z",
		"size": 248,
		"path": "../public/assets/map-pin-CR8KDppR.js"
	},
	"/assets/index-DWNA_4Fm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e5f5-Zu0D/N2n9uT063m0f62VjjGOYvI\"",
		"mtime": "2026-08-11T18:38:47.055Z",
		"size": 648693,
		"path": "../public/assets/index-DWNA_4Fm.js"
	},
	"/assets/member-card-Bwg0pnzv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f89-cbjSuk8zj+6Pp0D2tSYMTCt1NhE\"",
		"mtime": "2026-08-11T18:38:47.071Z",
		"size": 3977,
		"path": "../public/assets/member-card-Bwg0pnzv.js"
	},
	"/assets/members.index-DS2pNWOS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f4-kBYXX2t9ZNNTpPp2RaKv8l62VV8\"",
		"mtime": "2026-08-11T18:38:47.073Z",
		"size": 2548,
		"path": "../public/assets/members.index-DS2pNWOS.js"
	},
	"/assets/bush-rovers-logo-8lR0ip0A.png": {
		"type": "image/png",
		"etag": "\"18cdaf-eAKmUgFTmk5Vsg8JMBr/TXC8n2Q\"",
		"mtime": "2026-08-11T18:38:47.085Z",
		"size": 1625519,
		"path": "../public/assets/bush-rovers-logo-8lR0ip0A.png"
	},
	"/assets/members._slug-2szzpPQU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"321-wB7Rwuhw4rPiakzP/KJSgv+2PcE\"",
		"mtime": "2026-08-11T18:38:47.071Z",
		"size": 801,
		"path": "../public/assets/members._slug-2szzpPQU.js"
	},
	"/assets/members._slug-BOi9oqAp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8382-C71AyoFLoaSIcV/YgtLcrjBUTD0\"",
		"mtime": "2026-08-11T18:38:47.072Z",
		"size": 33666,
		"path": "../public/assets/members._slug-BOi9oqAp.js"
	},
	"/assets/mountain-CuJg3A4t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10f-Kj8jAD+dI1zwA4RuuYoTLO3zrsk\"",
		"mtime": "2026-08-11T18:38:47.073Z",
		"size": 271,
		"path": "../public/assets/mountain-CuJg3A4t.js"
	},
	"/assets/page-parts-BBMoKoeF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"66f-oAW7yxjv0lBvLLb7pQTdYm7bGj8\"",
		"mtime": "2026-08-11T18:38:47.074Z",
		"size": 1647,
		"path": "../public/assets/page-parts-BBMoKoeF.js"
	},
	"/assets/hero-ridge-s2uuG71s.png": {
		"type": "image/png",
		"etag": "\"1adef6-tf4JpqLhSLFP7hkB9fYTiN/D+/8\"",
		"mtime": "2026-08-11T18:38:47.087Z",
		"size": 1761014,
		"path": "../public/assets/hero-ridge-s2uuG71s.png"
	},
	"/assets/queries-B09HpjNB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d92-6VrQxs4b4Be/xBsGWGB95il117M\"",
		"mtime": "2026-08-11T18:38:47.075Z",
		"size": 7570,
		"path": "../public/assets/queries-B09HpjNB.js"
	},
	"/assets/react-dom-c8CiVcdp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dde-v2rj0M/R609wdLvPW5J0CbS25fk\"",
		"mtime": "2026-08-11T18:38:47.077Z",
		"size": 3550,
		"path": "../public/assets/react-dom-c8CiVcdp.js"
	},
	"/assets/routes-Dapa6LKy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15de-tLBmfNa6xIgPDtMB/8mhPy5L6nY\"",
		"mtime": "2026-08-11T18:38:47.077Z",
		"size": 5598,
		"path": "../public/assets/routes-Dapa6LKy.js"
	},
	"/assets/sprout-DV3d4wbB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12a-SCXZ5c4afrAs5AOV/zRXhAQPYsE\"",
		"mtime": "2026-08-11T18:38:47.077Z",
		"size": 298,
		"path": "../public/assets/sprout-DV3d4wbB.js"
	},
	"/assets/story-Bo0KSOTt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d4-Or5IgKo6x23l1mQuKmfpDJmgEuk\"",
		"mtime": "2026-08-11T18:38:47.079Z",
		"size": 2260,
		"path": "../public/assets/story-Bo0KSOTt.js"
	},
	"/assets/styles-DXA5GDQX.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15584-kXsv+jJ9Pn7+JxAPcmioksVB/4E\"",
		"mtime": "2026-08-11T18:38:47.088Z",
		"size": 87428,
		"path": "../public/assets/styles-DXA5GDQX.css"
	},
	"/assets/useQuery-DJNgWTAy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2256-PjPV+WLbo8SCfqlHU5dWTMXTd3s\"",
		"mtime": "2026-08-11T18:38:47.079Z",
		"size": 8790,
		"path": "../public/assets/useQuery-DJNgWTAy.js"
	},
	"/assets/useRouter-CwjitLz4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-RAU16egCj2YoU17v/JNQx0lTbng\"",
		"mtime": "2026-08-11T18:38:47.080Z",
		"size": 151,
		"path": "../public/assets/useRouter-CwjitLz4.js"
	},
	"/assets/users-BtZLBRBo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"127-NqewO8roID2lZP8l3Vawj6TgS+k\"",
		"mtime": "2026-08-11T18:38:47.081Z",
		"size": 295,
		"path": "../public/assets/users-BtZLBRBo.js"
	},
	"/assets/verify.index-DGS5Z2uH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"464-Z7fYsPWK3uljzBJIO1hWFBfcFRs\"",
		"mtime": "2026-08-11T18:38:47.083Z",
		"size": 1124,
		"path": "../public/assets/verify.index-DGS5Z2uH.js"
	},
	"/assets/verify._memberId-B651-EcJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a93-XjUqMHkFY+AU8uHc0fgFrbeg1h8\"",
		"mtime": "2026-08-11T18:38:47.082Z",
		"size": 2707,
		"path": "../public/assets/verify._memberId-B651-EcJ.js"
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
