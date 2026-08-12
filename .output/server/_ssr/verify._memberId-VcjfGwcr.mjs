import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { _ as CircleX, v as CircleCheck } from "../_libs/lucide-react.mjs";
import { f as getPublicMemberByMemberId, i as Button, n as Route, u as formatDate } from "./router-DQVJDyP1.mjs";
import { t as hero_ridge_default } from "./hero-ridge-CijXp33Y.mjs";
import { n as PageHero, r as Section } from "./page-parts-j6cm8YG0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/verify._memberId-VcjfGwcr.js
var import_jsx_runtime = require_jsx_runtime();
function VerifyMemberPage() {
	const { memberId } = Route.useParams();
	const result = useQuery({
		queryKey: ["verify", memberId],
		queryFn: () => getPublicMemberByMemberId({ data: { memberId } })
	});
	const member = result.data?.member ?? null;
	const active = member?.status === "Active";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Verification",
		title: memberId.toUpperCase(),
		image: hero_ridge_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "surface-card mx-auto max-w-xl rounded-lg p-8 text-center",
		children: result.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Checking the register…"
		}) : member ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			member.photo_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: member.photo_url,
				alt: member.full_name,
				className: "mx-auto h-28 w-28 rounded-full object-cover"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-condensed text-xs uppercase tracking-[0.2em] text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), active ? "Verified active member" : `Verified — ${member.status}`]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-3xl text-cream",
				children: member.full_name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 font-condensed uppercase tracking-[0.18em] text-muted-foreground",
				children: [
					member.roles?.name ?? "Rover",
					" · ",
					member.member_id
				]
			}),
			member.join_date ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: ["Member since ", formatDate(member.join_date)]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "lg",
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/members/$slug",
					params: { slug: member.slug },
					children: "View full profile"
				})
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex items-center gap-2 rounded-full border border-destructive/40 bg-destructive/10 px-4 py-1.5 font-condensed text-xs uppercase tracking-[0.2em] text-destructive",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-4 w-4" }), " Not found"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-3xl text-cream",
				children: "No matching member"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "This ID is not on the Bush Rovers register. Check the ID on the card and try again."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/verify",
					children: "Try another ID"
				})
			})
		] })
	}) })] });
}
//#endregion
export { VerifyMemberPage as component };
