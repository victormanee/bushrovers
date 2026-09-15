import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as ArrowLeft } from "../_libs/lucide-react.mjs";
import { i as Button, r as Route$2 } from "./router-BhZF8hBF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/members._slug-CTQ-sgwj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var victor_manee_card_default = "/assets/victor-manee-card-CjcqZlEw.png";
var amgel_kabi_card_default = "/assets/amgel-kabi-card-Cg2o5Ra5.png";
var john_kibara_card_default = "/assets/john-kibara-card-4C6jxODD.png";
var placeholder_card_default = "/assets/placeholder-card-C4wcBtkD.png";
var memberCardImages = {
	"victor-manee": victor_manee_card_default,
	"angel-kabi": amgel_kabi_card_default,
	"john-kibara": john_kibara_card_default
};
function MemberProfile() {
	const { member } = Route$2.useLoaderData();
	const initialUrl = memberCardImages[member.slug] ?? `/assets/members/${member.slug}.png`;
	const [src, setSrc] = (0, import_react.useState)(initialUrl);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		try {
			const modules = import.meta.globEager("/src/assets/*-card.{png,jpg,jpeg,webp}");
			for (const p in modules) {
				const m = modules[p];
				const match = p.match(/\/([^\/]+)-card\.(png|jpe?g|webp)$/i);
				if (!match) continue;
				let slug = match[1];
				const url = m && (m.default ?? m);
				if (slug.startsWith("amgel-")) slug = slug.replace(/^amgel-/, "angel-");
				if (slug === member.slug) {
					setSrc(url);
					return;
				}
			}
		} catch (e) {}
	}, [member?.slug]);
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
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: `${member.full_name} membership card`,
						onError: () => {
							if (src !== placeholder_card_default) setSrc(placeholder_card_default);
						},
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
