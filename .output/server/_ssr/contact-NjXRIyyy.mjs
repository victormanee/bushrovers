import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { f as MapPin, l as Phone, p as Mail } from "../_libs/lucide-react.mjs";
import "../_libs/sonner.mjs";
import { i as Button, s as CREW } from "./router-BhZF8hBF.mjs";
import { n as PageHero, r as Section } from "./page-parts-j6cm8YG0.mjs";
import { a as fetchSettings } from "./queries-CLihVytA.mjs";
import { t as campfire_default } from "./campfire-BzrRXohF.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-NjXRIyyy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
objectType({
	name: stringType().trim().min(1, "Please enter your name").max(100),
	email: stringType().trim().email("Enter a valid ").max(255),
	subject: stringType().trim().max(150).optional(),
	message: stringType().trim().min(1, "Please write a message").max(1500)
});
function Contact() {
	const settings = useQuery({
		queryKey: ["settings"],
		queryFn: fetchSettings
	});
	const [sending, setSending] = (0, import_react.useState)(false);
	const s = settings.data ?? {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "Join our journey",
		lead: `${CREW.name} — “${CREW.motto}”`,
		image: campfire_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-10 lg:grid-cols-[1fr_1.2fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card rounded-lg p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "eyebrow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary" }),
								" ",
								s["contact_email"] || "[EMAIL ADDRESS]"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary" }),
								" ",
								s["contact_phone"] || "[PHONE NUMBER]"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary" }),
								" ",
								s["location"] || "[CREW LOCATION]"
							]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card rounded-lg p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Social"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: [
						"instagram",
						"facebook",
						"twitter",
						"whatsapp"
					].map((key) => s[key] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: s[key],
						target: "_blank",
						rel: "noreferrer",
						className: "font-condensed text-sm uppercase tracking-[0.16em] text-primary",
						children: key
					}) }, key) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "font-condensed text-sm uppercase tracking-[0.16em] text-muted-foreground",
						children: [key, " — [LINK]"]
					}, key))
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "surface-card rounded-lg p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl text-cream",
						children: "Want to Join Bush Rovers?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: "Interested in becoming part of the Bush Rovers Crew? Contact our crew representative on WhatsApp to learn more about joining."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/254716802450?text=Hello%20Bush%20Rovers%2C%20I%20am%20interested%20in%20joining%20the%20crew.%20I%20would%20like%20to%20know%20more%20about%20how%20I%20can%20join.",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex w-full items-center justify-center gap-3 rounded-md px-4 py-3 text-sm font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									viewBox: "0 0 24 24",
									fill: "currentColor",
									className: "h-5 w-5 text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.52 3.48A11.83 11.83 0 0 0 12 .5C6.21.5 1.5 5.21 1.5 11c0 1.95.51 3.86 1.48 5.56L.5 23.5l6.97-1.83A11.82 11.82 0 0 0 12 22.5c5.79 0 10.5-4.71 10.5-10.5 0-2.84-1.08-5.51-3.98-7.52zM12 20c-1.43 0-2.83-.36-4.06-1.04l-.29-.17-4.14 1.09 1.11-3.98-.18-.31A8 8 0 1 1 20 12c0 4.42-3.58 8-8 8z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.2 14.2c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14-.18.28-.7.9-.86 1.09-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.22-1.37-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.04-.34-.02-.48-.07-.14-.64-1.54-.88-2.12-.23-.56-.47-.48-.64-.49-.16 0-.34-.01-.52-.01s-.48.07-.73.34c-.26.27-.99.96-.99 2.34 0 1.38 1.01 2.72 1.15 2.91.14.18 1.98 3.02 4.8 4.24 1.16.5 2.07.8 2.78 1.03 1.17.36 2.24.31 3.09.19.94-.13 1.64-.66 1.88-1.3.24-.64.24-1.19.17-1.3-.07-.1-.26-.16-.55-.3z" })]
								}), "Chat with us on WhatsApp"]
							})
						})
					})
				]
			})
		})]
	}) })] });
}
//#endregion
export { Contact as component };
