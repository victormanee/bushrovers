import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-parts-j6cm8YG0.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, lead, image, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden border-b border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				loading: "lazy",
				className: "absolute inset-0 h-full w-full object-cover opacity-45"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "var(--gradient-canopy)" },
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-7xl px-4 py-20 md:py-28 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow animate-rise",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "animate-rise mt-4 max-w-4xl font-display text-4xl leading-[0.95] text-cream sm:text-5xl md:text-6xl",
						children: title
					}),
					lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "animate-rise mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
						children: lead
					}) : null,
					children
				]
			})
		]
	});
}
function Section({ eyebrow, title, lead, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `mx-auto w-full max-w-7xl px-4 py-16 md:py-24 lg:px-8 ${className}`,
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: eyebrow
			}) : null,
			title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 max-w-3xl font-display text-3xl leading-tight text-cream md:text-4xl",
				children: title
			}) : null,
			lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl leading-relaxed text-muted-foreground",
				children: lead
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: eyebrow || title || lead ? "mt-10" : "",
				children
			})
		]
	});
}
function EmptyState({ message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "surface-card rounded-lg p-8 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-condensed text-lg uppercase tracking-[0.12em] text-muted-foreground",
			children: message
		})
	});
}
//#endregion
export { PageHero as n, Section as r, EmptyState as t };
