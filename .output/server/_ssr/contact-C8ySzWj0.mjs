import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { f as MapPin, l as Phone, p as Mail } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as cn, i as Button, s as CREW } from "./router-DQVJDyP1.mjs";
import { n as PageHero, r as Section } from "./page-parts-j6cm8YG0.mjs";
import { t as supabase } from "./client-DUbED7N7.mjs";
import { a as fetchSettings } from "./queries-Dd4LEQr9.mjs";
import { t as Input } from "./input-2UxvtnPw.mjs";
import { t as Label } from "./label-BB2Imkre.mjs";
import { t as campfire_default } from "./campfire-BzrRXohF.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-C8ySzWj0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var schema = objectType({
	name: stringType().trim().min(1, "Please enter your name").max(100),
	email: stringType().trim().email("Enter a valid email address").max(255),
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
	async function onSubmit(event) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const parsed = schema.safeParse({
			name: form.get("name"),
			email: form.get("email"),
			subject: form.get("subject"),
			message: form.get("message")
		});
		if (!parsed.success) {
			toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
			return;
		}
		setSending(true);
		const { error } = await supabase.from("contact_messages").insert({
			name: parsed.data.name,
			email: parsed.data.email,
			subject: parsed.data.subject ?? null,
			message: parsed.data.message
		});
		setSending(false);
		if (error) {
			toast.error("Message could not be sent. Please try again.");
			return;
		}
		toast.success("Message sent. The crew will be in touch.");
		event.currentTarget.reset();
	}
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Reach the crew"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
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
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "surface-card space-y-4 rounded-lg p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "name",
					children: "Name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "name",
					name: "name",
					maxLength: 100,
					required: true,
					className: "mt-1.5"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "email",
					children: "Email"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "email",
					name: "email",
					type: "email",
					maxLength: 255,
					required: true,
					className: "mt-1.5"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "subject",
					children: "Subject"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "subject",
					name: "subject",
					maxLength: 150,
					className: "mt-1.5"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "message",
					children: "Message"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "message",
					name: "message",
					rows: 6,
					maxLength: 1500,
					required: true,
					className: "mt-1.5"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "lg",
					disabled: sending,
					children: sending ? "Sending…" : "Send message"
				})
			]
		})]
	}) })] });
}
//#endregion
export { Contact as component };
