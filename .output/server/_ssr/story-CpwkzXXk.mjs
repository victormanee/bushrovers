import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { f as MapPin, n as Users } from "../_libs/lucide-react.mjs";
import { n as PageHero, r as Section, t as EmptyState } from "./page-parts-j6cm8YG0.mjs";
import { i as fetchHistory } from "./queries-Yxztq1Vw.mjs";
import { t as campfire_default } from "./campfire-BzrRXohF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/story-CpwkzXXk.js
var import_jsx_runtime = require_jsx_runtime();
function Story() {
	const history = useQuery({
		queryKey: ["history"],
		queryFn: fetchHistory
	});
	const entries = history.data ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Our story",
		title: "The Bush Rovers story",
		lead: "Every crew starts somewhere. This is the trail we have walked so far.",
		image: campfire_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: entries.length === 0 && !history.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { message: "The crew timeline is being written." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "relative ml-3 border-l border-border pl-8 md:ml-6 md:pl-12",
		children: entries.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "relative pb-14 last:pb-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute -left-[2.35rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background md:-left-[3.4rem]",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-condensed text-sm uppercase tracking-[0.24em] text-primary",
					children: entry.date_label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl text-cream md:text-4xl",
					children: entry.title
				}),
				entry.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl leading-relaxed text-muted-foreground",
					children: entry.description
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-x-6 gap-y-2 font-condensed text-sm uppercase tracking-[0.12em] text-muted-foreground",
					children: [entry.location ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary" }),
							" ",
							entry.location
						]
					}) : null, entry.participants?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-primary" }),
							" ",
							entry.participants.join(", ")
						]
					}) : null]
				}),
				entry.photo_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: entry.photo_url,
					alt: entry.title,
					loading: "lazy",
					className: "surface-card mt-6 max-w-2xl rounded-lg object-cover"
				}) : null,
				entry.video_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: entry.video_url,
					target: "_blank",
					rel: "noreferrer",
					className: "mt-4 inline-block font-condensed text-sm uppercase tracking-[0.2em] text-primary",
					children: "Watch the film"
				}) : null
			]
		}, entry.id))
	}) })] });
}
//#endregion
export { Story as component };
