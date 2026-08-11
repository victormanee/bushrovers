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
	"/assets/about-s_ICaD-4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e38-Gsp3TiIzpedcRh3qQivV53rS1kc\"",
		"mtime": "2026-08-11T21:44:15.633Z",
		"size": 3640,
		"path": "../public/assets/about-s_ICaD-4.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-08-11T17:02:58.989Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/achievements-Do3xYzrz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f9-b0cLIyfn9Xs/4bNtaBLHoRazrFY\"",
		"mtime": "2026-08-11T21:44:15.657Z",
		"size": 2553,
		"path": "../public/assets/achievements-Do3xYzrz.js"
	},
	"/assets/admin-nlkfxBHW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"802-RNyw0AnnvD3Q52BfX+sUh97ugjY\"",
		"mtime": "2026-08-11T21:44:15.659Z",
		"size": 2050,
		"path": "../public/assets/admin-nlkfxBHW.js"
	},
	"/assets/activities-DTb3hT44.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"913-xPoMk8xXlfx3c1ksZjJYhsB6d4s\"",
		"mtime": "2026-08-11T21:44:15.658Z",
		"size": 2323,
		"path": "../public/assets/activities-DTb3hT44.js"
	},
	"/assets/calendar-days-Bsp9fbKu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-SIyimd0QY+G76d2zbv4kv7czokQ\"",
		"mtime": "2026-08-11T21:44:15.659Z",
		"size": 483,
		"path": "../public/assets/calendar-days-Bsp9fbKu.js"
	},
	"/assets/campfire-CQFbV69L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-JWErsYPWDHtHBRyEQR+enIhtyjM\"",
		"mtime": "2026-08-11T21:44:15.660Z",
		"size": 53,
		"path": "../public/assets/campfire-CQFbV69L.js"
	},
	"/assets/community-service-CuF2bU20.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9fb-IbL7iF1kN1OYkXNpkDbVbmxR2X8\"",
		"mtime": "2026-08-11T21:44:15.661Z",
		"size": 2555,
		"path": "../public/assets/community-service-CuF2bU20.js"
	},
	"/assets/contact-BUMJRrfa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"edc2-u+AZUElHBs5F2Y2XOt/L1kKXrCg\"",
		"mtime": "2026-08-11T21:44:15.662Z",
		"size": 60866,
		"path": "../public/assets/contact-BUMJRrfa.js"
	},
	"/assets/forest-trail-BfNeoBUv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"39-jtKzeYRzmjMPLMoCrQIKkexnaJU\"",
		"mtime": "2026-08-11T21:44:15.663Z",
		"size": 57,
		"path": "../public/assets/forest-trail-BfNeoBUv.js"
	},
	"/assets/campfire-DA5RjFKc.jpg": {
		"type": "image/jpeg",
		"etag": "\"28494-liGx4wQWDmAgJF5Iy+mhHQFujOo\"",
		"mtime": "2026-08-11T21:44:15.683Z",
		"size": 165012,
		"path": "../public/assets/campfire-DA5RjFKc.jpg"
	},
	"/assets/gallery-CH1rWbHR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fca-QUs1ithLbaK/ae0BXRNkTUfBHQ8\"",
		"mtime": "2026-08-11T21:44:15.664Z",
		"size": 4042,
		"path": "../public/assets/gallery-CH1rWbHR.js"
	},
	"/assets/hand-heart-BZzIRWHc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ab-Vm+8tjWt+1ivMLgsEHTAcIjwU/c\"",
		"mtime": "2026-08-11T21:44:15.665Z",
		"size": 683,
		"path": "../public/assets/hand-heart-BZzIRWHc.js"
	},
	"/assets/hero-ridge-BxPX4ZI3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37-wtKQ+ax/dUszPtzygLlXtmHbPns\"",
		"mtime": "2026-08-11T21:44:15.665Z",
		"size": 55,
		"path": "../public/assets/hero-ridge-BxPX4ZI3.js"
	},
	"/assets/forest-trail-BoSB8FRc.jpg": {
		"type": "image/jpeg",
		"etag": "\"4c53b-WuWpDFzEv2L19hDl8sSi85b4Hj0\"",
		"mtime": "2026-08-11T21:44:15.685Z",
		"size": 312635,
		"path": "../public/assets/forest-trail-BoSB8FRc.jpg"
	},
	"/assets/input-CYNGE12_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26d-4nXYjjtS+92xo/TVYhhgN+j/leQ\"",
		"mtime": "2026-08-11T21:44:15.666Z",
		"size": 621,
		"path": "../public/assets/input-CYNGE12_.js"
	},
	"/assets/label-C2MZ1uTE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28d-4oDNQIgbKPd7UH6KYX+qj64F+ak\"",
		"mtime": "2026-08-11T21:44:15.667Z",
		"size": 653,
		"path": "../public/assets/label-C2MZ1uTE.js"
	},
	"/assets/leadership-C9hX4Oog.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"434-7IcL56y3YwNzjl/YNgaUkq2MYZE\"",
		"mtime": "2026-08-11T21:44:15.668Z",
		"size": 1076,
		"path": "../public/assets/leadership-C9hX4Oog.js"
	},
	"/assets/jsx-runtime-Cltr0gcK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20ee-ObwGPj96dlkL76iVLbX2wLAXzuw\"",
		"mtime": "2026-08-11T21:44:15.667Z",
		"size": 8430,
		"path": "../public/assets/jsx-runtime-Cltr0gcK.js"
	},
	"/assets/link-CutWeY-C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b24-10c1ahqxvyQeH40t4NeOwXG1XHY\"",
		"mtime": "2026-08-11T21:44:15.670Z",
		"size": 23332,
		"path": "../public/assets/link-CutWeY-C.js"
	},
	"/assets/index-1Fq6JLIt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e5f5-7nGq/hP4yNio+kamV1kL60kEYHo\"",
		"mtime": "2026-08-11T21:44:15.632Z",
		"size": 648693,
		"path": "../public/assets/index-1Fq6JLIt.js"
	},
	"/assets/bush-rovers-logo-8lR0ip0A.png": {
		"type": "image/png",
		"etag": "\"18cdaf-eAKmUgFTmk5Vsg8JMBr/TXC8n2Q\"",
		"mtime": "2026-08-11T21:44:15.682Z",
		"size": 1625519,
		"path": "../public/assets/bush-rovers-logo-8lR0ip0A.png"
	},
	"/assets/hero-ridge-s2uuG71s.png": {
		"type": "image/png",
		"etag": "\"1adef6-tf4JpqLhSLFP7hkB9fYTiN/D+/8\"",
		"mtime": "2026-08-11T21:44:15.687Z",
		"size": 1761014,
		"path": "../public/assets/hero-ridge-s2uuG71s.png"
	},
	"/assets/map-pin-CW6b42Jf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8-oguHN+Uv+L0PKBssdjRFhr2XjK0\"",
		"mtime": "2026-08-11T21:44:15.670Z",
		"size": 248,
		"path": "../public/assets/map-pin-CW6b42Jf.js"
	},
	"/assets/members.index-B1I8X-cy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f4-AcH33o4Yz4gp4G6MabaxFMEVeRI\"",
		"mtime": "2026-08-11T21:44:15.672Z",
		"size": 2548,
		"path": "../public/assets/members.index-B1I8X-cy.js"
	},
	"/assets/member-card-CLulE3S0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f89-lFYEjSH5j62tIuoGNSYLspdoKRA\"",
		"mtime": "2026-08-11T21:44:15.671Z",
		"size": 3977,
		"path": "../public/assets/member-card-CLulE3S0.js"
	},
	"/assets/members._slug-BZXO40g4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"321-Z0TOBlgOgApgCIeQR48O14OTngI\"",
		"mtime": "2026-08-11T21:44:15.671Z",
		"size": 801,
		"path": "../public/assets/members._slug-BZXO40g4.js"
	},
	"/assets/mountain-ByN9B0EY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10f-NkG5yrs+AHnXj9k4clD8GWylMgM\"",
		"mtime": "2026-08-11T21:44:15.674Z",
		"size": 271,
		"path": "../public/assets/mountain-ByN9B0EY.js"
	},
	"/assets/members._slug-DvM5BoVs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8382-9MzPpWUbpvXFEqKesk7QG57I5mU\"",
		"mtime": "2026-08-11T21:44:15.672Z",
		"size": 33666,
		"path": "../public/assets/members._slug-DvM5BoVs.js"
	},
	"/assets/page-parts-BBMoKoeF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"66f-oAW7yxjv0lBvLLb7pQTdYm7bGj8\"",
		"mtime": "2026-08-11T21:44:15.674Z",
		"size": 1647,
		"path": "../public/assets/page-parts-BBMoKoeF.js"
	},
	"/assets/queries-BTMKlvZz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ddd-+/fHETBSBoOaaKiVA00K9SOoi3E\"",
		"mtime": "2026-08-11T21:44:15.675Z",
		"size": 7645,
		"path": "../public/assets/queries-BTMKlvZz.js"
	},
	"/assets/react-dom-c8CiVcdp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dde-v2rj0M/R609wdLvPW5J0CbS25fk\"",
		"mtime": "2026-08-11T21:44:15.675Z",
		"size": 3550,
		"path": "../public/assets/react-dom-c8CiVcdp.js"
	},
	"/assets/routes-Bs-tpNzX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15de-nif3eJ9GKo5L7Z+5z/qrpC+GTWw\"",
		"mtime": "2026-08-11T21:44:15.676Z",
		"size": 5598,
		"path": "../public/assets/routes-Bs-tpNzX.js"
	},
	"/assets/sprout-BqNRoHiC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12a-S2B+jnx7NUuuvzRhhjUu3Xf5CLY\"",
		"mtime": "2026-08-11T21:44:15.676Z",
		"size": 298,
		"path": "../public/assets/sprout-BqNRoHiC.js"
	},
	"/assets/story-Bw2xZtkQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d4-BF0aINi/l+yLPSsvrcd67Cz80YM\"",
		"mtime": "2026-08-11T21:44:15.678Z",
		"size": 2260,
		"path": "../public/assets/story-Bw2xZtkQ.js"
	},
	"/assets/styles-DXA5GDQX.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15584-kXsv+jJ9Pn7+JxAPcmioksVB/4E\"",
		"mtime": "2026-08-11T21:44:15.688Z",
		"size": 87428,
		"path": "../public/assets/styles-DXA5GDQX.css"
	},
	"/assets/useRouter-CwjitLz4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-RAU16egCj2YoU17v/JNQx0lTbng\"",
		"mtime": "2026-08-11T21:44:15.680Z",
		"size": 151,
		"path": "../public/assets/useRouter-CwjitLz4.js"
	},
	"/assets/useQuery-BmRAuA4H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2256-8RWgJdGpdJokCJkFWWt/gd9jfJQ\"",
		"mtime": "2026-08-11T21:44:15.679Z",
		"size": 8790,
		"path": "../public/assets/useQuery-BmRAuA4H.js"
	},
	"/assets/users-ClnNP4kg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"127-vvrr1AMHOZKNrFPBOyA68uyuANo\"",
		"mtime": "2026-08-11T21:44:15.680Z",
		"size": 295,
		"path": "../public/assets/users-ClnNP4kg.js"
	},
	"/assets/verify.index-BmQTIBki.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"464-03zzwfKv6Fmhe3nZqYBEBpD4TQY\"",
		"mtime": "2026-08-11T21:44:15.681Z",
		"size": 1124,
		"path": "../public/assets/verify.index-BmQTIBki.js"
	},
	"/assets/verify._memberId-CsjnIzVJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a93-F76nwfnDw1y7agz4+DgnHO4a5FU\"",
		"mtime": "2026-08-11T21:44:15.681Z",
		"size": 2707,
		"path": "../public/assets/verify._memberId-CsjnIzVJ.js"
	},
	"/assets/evans-maina-CQ-S3fWL.jpg": {
		"type": "image/jpeg",
		"etag": "\"213eac-IszX+OC9uxXr1TNw2O+YwGNFjxE\"",
		"mtime": "2026-08-11T21:44:15.684Z",
		"size": 2178732,
		"path": "../public/assets/evans-maina-CQ-S3fWL.jpg"
	},
	"/assets/victor-manee-nefwqz_J.png": {
		"type": "image/png",
		"etag": "\"1cc01d-1hXwS0GB+o4nXi+CYTTHUMkFP9Y\"",
		"mtime": "2026-08-11T21:44:15.689Z",
		"size": 1884189,
		"path": "../public/assets/victor-manee-nefwqz_J.png"
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
