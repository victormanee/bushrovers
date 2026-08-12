import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as ArrowLeft } from "../_libs/lucide-react.mjs";
import { i as Button, r as Route$2 } from "./router-DQVJDyP1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/members._slug-CJj4df7m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var memberCardImages = { "victor-manee": "/assets/victor-manee-card-CjcqZlEw.png" };
function MemberProfile() {
	const { member } = Route$2.useLoaderData();
	const [hasImageError, setHasImageError] = (0, import_react.useState)(false);
	const cardUrl = memberCardImages[member.slug] ?? `/assets/members/${member.slug}.png`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-forest-deep text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 py-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "sr-only",
					children: [member.full_name, " membership card"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full max-w-5xl rounded-[2rem] border border-border bg-background/85 p-6 shadow-[0_32px_80px_rgba(0,0,0,0.32)] backdrop-blur-md",
					children: hasImageError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-h-[40vh] items-center justify-center rounded-[1.5rem] border border-dashed border-muted-foreground bg-secondary/20 p-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-center text-muted-foreground",
							children: [
								"Membership card image not found.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Add ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-cream",
									children: [
										"/assets/members/",
										member.slug,
										".png"
									]
								}),
								" in public."
							]
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: cardUrl,
						alt: `${member.full_name} membership card`,
						onError: () => setHasImageError(true),
						className: "mx-auto max-h-[75vh] w-full max-w-full rounded-[1.5rem] object-contain"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex justify-center",
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
export { MemberProfile as component };
