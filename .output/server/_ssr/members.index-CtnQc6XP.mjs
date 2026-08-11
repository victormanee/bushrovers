import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Button } from "./router-C63gRTOf.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { s as Search } from "../_libs/lucide-react.mjs";
import { n as PageHero, r as Section, t as EmptyState } from "./page-parts-j6cm8YG0.mjs";
import { t as hero_ridge_default } from "./hero-ridge-CijXp33Y.mjs";
import { a as fetchMembers, s as fetchRoles } from "./queries-BLIgOG-n.mjs";
import { t as Input } from "./input-Cs51PjLi.mjs";
import { n as MemberCard } from "./member-card-mCRrJH3D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/members.index-CtnQc6XP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MembersPage() {
	const members = useQuery({
		queryKey: ["members"],
		queryFn: fetchMembers
	});
	const roles = useQuery({
		queryKey: ["roles"],
		queryFn: fetchRoles
	});
	const [query, setQuery] = (0, import_react.useState)("");
	const [role, setRole] = (0, import_react.useState)("all");
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return (members.data ?? []).filter((m) => m.is_published).filter((m) => role === "all" ? true : m.roles?.name === role).filter((m) => !q ? true : m.full_name.toLowerCase().includes(q) || m.member_id.toLowerCase().includes(q) || (m.roles?.name ?? "").toLowerCase().includes(q));
	}, [
		members.data,
		query,
		role
	]);
	const roleNames = (0, import_react.useMemo)(() => {
		const used = new Set((members.data ?? []).map((m) => m.roles?.name).filter(Boolean));
		return (roles.data ?? []).filter((r) => used.has(r.name)).map((r) => r.name);
	}, [members.data, roles.data]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Our members",
		title: "Meet the Bush Rovers",
		lead: "Every Rover below carries a Bush Rovers membership card with a unique QR code that opens their verified profile.",
		image: hero_ridge_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full md:max-w-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: query,
					onChange: (event) => setQuery(event.target.value.slice(0, 80)),
					placeholder: "Search by name, member ID or role",
					"aria-label": "Search members",
					className: "pl-9"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: role === "all" ? "default" : "outline",
					size: "sm",
					onClick: () => setRole("all"),
					children: "All"
				}), roleNames.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: role === name ? "default" : "outline",
					size: "sm",
					onClick: () => setRole(name),
					children: name
				}, name))]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-6 font-condensed text-sm uppercase tracking-[0.2em] text-muted-foreground",
			children: [
				filtered.length,
				" ",
				filtered.length === 1 ? "Rover" : "Rovers"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children: filtered.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberCard, { member }, member.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { message: members.isLoading ? "Loading the crew register…" : "No Rovers match that search." })
		})
	] })] });
}
//#endregion
export { MembersPage as component };
