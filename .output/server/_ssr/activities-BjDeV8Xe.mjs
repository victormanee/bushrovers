import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as formatDate } from "./router-C63gRTOf.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { f as MapPin, n as Users, y as CalendarDays } from "../_libs/lucide-react.mjs";
import { t as forest_trail_default } from "./forest-trail-Defs9tA2.mjs";
import { n as PageHero, r as Section, t as EmptyState } from "./page-parts-j6cm8YG0.mjs";
import { n as fetchActivities } from "./queries-BLIgOG-n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/activities-BjDeV8Xe.js
var import_jsx_runtime = require_jsx_runtime();
function Activities() {
	const activities = useQuery({
		queryKey: ["activities"],
		queryFn: fetchActivities
	});
	const items = activities.data ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Activities",
		title: "The Bush Rovers experience",
		lead: "From ridge trails at first light to service in our own neighbourhoods — this is how the crew spends its time.",
		image: forest_trail_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: items.length === 0 && !activities.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { message: "The activity programme is being published." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
		children: items.map((activity) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "surface-card overflow-hidden rounded-lg",
			children: [activity.photo_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: activity.photo_url,
				alt: activity.title,
				loading: "lazy",
				className: "aspect-[4/3] w-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-[4/3] w-full bg-secondary topo-texture",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6",
				children: [
					activity.category ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: activity.category
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl text-cream",
						children: activity.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-x-5 gap-y-1 font-condensed text-xs uppercase tracking-[0.14em] text-muted-foreground",
						children: [activity.event_date ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3.5 w-3.5 text-primary" }), formatDate(activity.event_date)]
						}) : null, activity.location ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-primary" }),
								" ",
								activity.location
							]
						}) : null]
					}),
					activity.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: activity.description
					}) : null,
					activity.participants?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 inline-flex items-center gap-2 font-condensed text-xs uppercase tracking-[0.14em] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5 text-primary" }), activity.participants.join(", ")]
					}) : null
				]
			})]
		}, activity.id))
	}) })] });
}
//#endregion
export { Activities as component };
