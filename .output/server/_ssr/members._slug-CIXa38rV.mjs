import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as ArrowLeft } from "../_libs/lucide-react.mjs";
import { i as Button } from "./router-DQVJDyP1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/members._slug-CIXa38rV.js
var import_jsx_runtime = require_jsx_runtime();
function MemberNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-forest-deep px-4 py-20 text-center text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-xl rounded-[2rem] border border-border bg-background/90 p-10 shadow-xl shadow-black/20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl text-cream",
					children: "Member not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "The requested membership card is unavailable. Please return to the member directory."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/members",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 h-4 w-4" }), " Back to Members"]
						})
					})
				})
			]
		})
	});
}
//#endregion
export { MemberNotFound as notFoundComponent };
