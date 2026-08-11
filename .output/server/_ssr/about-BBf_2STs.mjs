import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as PILLARS, n as Button, r as CREW } from "./router-CLi673bs.mjs";
import { a as Sprout, g as Compass, h as Flame, m as HandHeart, n as Users, u as Mountain } from "../_libs/lucide-react.mjs";
import { t as forest_trail_default } from "./forest-trail-Defs9tA2.mjs";
import { n as PageHero, r as Section } from "./page-parts-j6cm8YG0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BBf_2STs.js
var import_jsx_runtime = require_jsx_runtime();
var ICONS = {
	mountain: Mountain,
	"hand-heart": HandHeart,
	compass: Compass,
	flame: Flame,
	users: Users,
	sprout: Sprout
};
var MEANING = [{
	title: "Through the Bush",
	body: "The bush is the trail, the thicket, the long climb and the unmarked path. It is every real obstacle that stands between a Rover and the person they are becoming."
}, {
	title: "Beyond the Impossible",
	body: "Beyond is what happens when a crew refuses to accept the limits placed before it — the summit reached, the project delivered, the community served."
}];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About us",
			title: "A Rover crew built for the trail ahead",
			lead: CREW.intro,
			image: forest_trail_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Our motto",
			title: `\u201c${CREW.motto}\u201d`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: MEANING.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "surface-card rounded-lg p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl text-cream",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 leading-relaxed text-muted-foreground",
						children: item.body
					})]
				}, item.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "What we stand for",
			title: "Six pillars of the crew",
			lead: "Everything we plan, climb, build and serve comes back to these.",
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: PILLARS.map((pillar) => {
					const Icon = ICONS[pillar.icon];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "surface-card rounded-lg p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-7 w-7 text-primary",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-2xl text-cream",
								children: pillar.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: pillar.body
							})
						]
					}, pillar.title);
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			eyebrow: "The Rover programme",
			title: "Personal development through adventure",
			className: "border-t border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card rounded-lg p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl text-cream",
							children: "Who can join"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 leading-relaxed text-muted-foreground",
							children: "Bush Rovers is a Rover / Jasiri Scout crew. Membership details, age range and requirements: [MEMBERSHIP REQUIREMENTS]."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card rounded-lg p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl text-cream",
							children: "Where we operate"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 leading-relaxed text-muted-foreground",
							children: "The crew is based in [CREW LOCATION] and runs activities across [OPERATING AREA]."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card rounded-lg p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl text-cream",
							children: "Our commitment"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 leading-relaxed text-muted-foreground",
							children: "Environmental responsibility, service to community and the development of leaders who go beyond what is expected of them."
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						children: "Join our journey"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/story",
						children: "Read our story"
					})
				})]
			})]
		})
	] });
}
//#endregion
export { About as component };
