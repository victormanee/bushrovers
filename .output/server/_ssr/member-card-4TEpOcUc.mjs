import "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as QrCode, r as User } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as cn, i as Button, s as CREW } from "./router-DQVJDyP1.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function StatusBadge({ status }) {
	const active = status === "active";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 font-condensed text-xs uppercase tracking-[0.16em]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `h-2 w-2 rounded-full ${active ? "bg-verified" : "bg-muted-foreground"}`,
			"aria-hidden": "true"
		}), active ? "Active member" : "Inactive member"]
	});
}
function MemberPhoto({ src, name, className = "" }) {
	if (src) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt: `${name} — ${CREW.name}`,
		loading: "lazy",
		className: `object-cover ${className}`
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex items-center justify-center bg-secondary text-muted-foreground ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
			className: "h-1/4 w-1/4",
			"aria-hidden": "true"
		})
	});
}
function MemberCard({ member }) {
	const role = member.roles?.name ?? "Member";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "surface-card group flex flex-col overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/5] overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberPhoto, {
				src: member.photo_url,
				name: member.full_name,
				className: "h-full w-full transition-transform duration-500 group-hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-card via-card/70 to-transparent p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-condensed text-xs uppercase tracking-[0.24em] text-primary",
						children: member.member_id
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl leading-none text-cream",
						children: member.full_name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-condensed text-sm uppercase tracking-[0.14em] text-muted-foreground",
						children: [
							role,
							" — ",
							CREW.name
						]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-4 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: member.status }),
				member.bio ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "line-clamp-3 text-sm leading-relaxed text-muted-foreground",
					children: member.bio
				}) : null,
				member.skills.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: member.skills.slice(0, 4).map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "font-condensed uppercase tracking-[0.1em]",
						children: skill
					}, skill))
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/members/$slug",
							params: { slug: member.slug },
							children: "View profile"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/verify/$memberId",
							params: { memberId: member.member_id },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, {}), " Verify"]
						})
					})]
				})
			]
		})]
	});
}
//#endregion
export { MemberCard as t };
