import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as PageHero, r as Section, t as EmptyState } from "./page-parts-j6cm8YG0.mjs";
import { t as hero_ridge_default } from "./hero-ridge-CijXp33Y.mjs";
import { a as fetchMembers } from "./queries-BLIgOG-n.mjs";
import { n as MemberCard } from "./member-card-mCRrJH3D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leadership-DGkX05rZ.js
var import_jsx_runtime = require_jsx_runtime();
function Leadership() {
	const members = useQuery({
		queryKey: ["members"],
		queryFn: fetchMembers
	});
	const leaders = (members.data ?? []).filter((m) => m.is_published && m.roles?.is_leadership);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Leadership",
		title: "Who leads the crew",
		lead: "Leadership in Bush Rovers is a responsibility carried in the field, not a title on a page.",
		image: hero_ridge_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: leaders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { message: members.isLoading ? "Loading the crew council…" : "Crew leadership is being appointed." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
		children: leaders.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberCard, { member }), member.roles?.responsibilities ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm leading-relaxed text-muted-foreground",
			children: member.roles.responsibilities
		}) : null] }, member.id))
	}) })] });
}
//#endregion
export { Leadership as component };
