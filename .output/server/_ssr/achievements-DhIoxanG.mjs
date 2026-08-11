import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as formatDate, n as Button, t as ACHIEVEMENT_CATEGORIES } from "./router-CLi673bs.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { i as Trophy } from "../_libs/lucide-react.mjs";
import { n as PageHero, r as Section, t as EmptyState } from "./page-parts-j6cm8YG0.mjs";
import { t as hero_ridge_default } from "./hero-ridge-CijXp33Y.mjs";
import { t as fetchAchievements } from "./queries-Yxztq1Vw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/achievements-DhIoxanG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Achievements() {
	const achievements = useQuery({
		queryKey: ["achievements"],
		queryFn: fetchAchievements
	});
	const [category, setCategory] = (0, import_react.useState)("all");
	const items = (0, import_react.useMemo)(() => (achievements.data ?? []).filter((item) => category === "all" ? true : item.category === category), [achievements.data, category]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Achievements",
		title: "Milestones on the trail",
		lead: "What the crew has earned, built and won — recorded as it happens.",
		image: hero_ridge_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			size: "sm",
			variant: category === "all" ? "default" : "outline",
			onClick: () => setCategory("all"),
			children: "All"
		}), ACHIEVEMENT_CATEGORIES.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			size: "sm",
			variant: category === name ? "default" : "outline",
			onClick: () => setCategory(name),
			children: name
		}, name))]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-10",
		children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { message: achievements.isLoading ? "Loading achievements…" : "No achievements recorded in this category yet." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "surface-card overflow-hidden rounded-lg",
				children: [item.photo_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.photo_url,
					alt: item.title,
					loading: "lazy",
					className: "aspect-[16/9] w-full object-cover"
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
								className: "h-5 w-5 text-primary",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-condensed text-sm uppercase tracking-[0.2em] text-primary",
								children: item.year_label || formatDate(item.event_date) || "[DATE]"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl text-cream",
							children: item.title
						}),
						item.category ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-condensed text-xs uppercase tracking-[0.18em] text-muted-foreground",
							children: item.category
						}) : null,
						item.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: item.description
						}) : null
					]
				})]
			}, item.id))
		})
	})] })] });
}
//#endregion
export { Achievements as component };
