import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as formatDate } from "./router-CLi673bs.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as Sprout, f as MapPin, y as CalendarDays } from "../_libs/lucide-react.mjs";
import { n as PageHero, r as Section, t as EmptyState } from "./page-parts-j6cm8YG0.mjs";
import { l as fetchStats, o as fetchProjects } from "./queries-Yxztq1Vw.mjs";
import { t as campfire_default } from "./campfire-BzrRXohF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/community-service-DLVHERmA.js
var import_jsx_runtime = require_jsx_runtime();
function CommunityService() {
	const projects = useQuery({
		queryKey: ["projects"],
		queryFn: fetchProjects
	});
	const stats = useQuery({
		queryKey: ["stats"],
		queryFn: fetchStats
	});
	const items = projects.data ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Projects & community service",
			title: "Service is the point",
			lead: "A Rover crew is measured by what it leaves behind. These are the projects the crew has carried.",
			image: campfire_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border bg-forest-deep",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8",
				children: (stats.data ?? []).map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-4xl text-primary md:text-5xl",
					children: stat.value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-condensed text-sm uppercase tracking-[0.2em] text-cream",
					children: stat.label
				})] }, stat.id))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: items.length === 0 && !projects.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { message: "Community service projects will be published here." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: items.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "surface-card overflow-hidden rounded-lg",
				children: [project.photo_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.photo_url,
					alt: project.title,
					loading: "lazy",
					className: "aspect-[4/3] w-full object-cover"
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, {
							className: "h-5 w-5 text-primary",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl text-cream",
							children: project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex flex-wrap gap-x-5 gap-y-1 font-condensed text-xs uppercase tracking-[0.14em] text-muted-foreground",
							children: [project.event_date ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3.5 w-3.5 text-primary" }), formatDate(project.event_date)]
							}) : null, project.location ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-primary" }),
									" ",
									project.location
								]
							}) : null]
						}),
						project.impact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-primary",
							children: project.impact
						}) : null,
						project.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: project.description
						}) : null
					]
				})]
			}, project.id))
		}) })
	] });
}
//#endregion
export { CommunityService as component };
