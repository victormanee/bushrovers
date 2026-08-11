import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as PILLARS, c as bush_rovers_logo_default, n as Button, r as CREW } from "./router-C63gRTOf.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as ArrowRight, a as Sprout, c as QrCode, g as Compass, h as Flame, m as HandHeart, n as Users, u as Mountain } from "../_libs/lucide-react.mjs";
import { r as Section } from "./page-parts-j6cm8YG0.mjs";
import { t as hero_ridge_default } from "./hero-ridge-CijXp33Y.mjs";
import { a as fetchMembers, l as fetchStats } from "./queries-BLIgOG-n.mjs";
import { n as MemberCard } from "./member-card-mCRrJH3D.mjs";
import { t as campfire_default } from "./campfire-BzrRXohF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BjSopZIC.js
var import_jsx_runtime = require_jsx_runtime();
var ICONS = {
	mountain: Mountain,
	"hand-heart": HandHeart,
	compass: Compass,
	flame: Flame,
	users: Users,
	sprout: Sprout
};
function Home() {
	const members = useQuery({
		queryKey: ["members"],
		queryFn: fetchMembers
	});
	const stats = useQuery({
		queryKey: ["stats"],
		queryFn: fetchStats
	});
	const featured = (members.data ?? []).filter((m) => m.is_published).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate flex min-h-[88vh] items-center overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_ridge_default,
					alt: "Bush Rovers hiking a ridge trail at sunrise",
					width: 1920,
					height: 1088,
					className: "animate-slow-zoom absolute inset-0 h-full w-full object-cover",
					fetchPriority: "high"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "var(--gradient-canopy)" },
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-background/45",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto w-full max-w-7xl px-4 py-24 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: bush_rovers_logo_default,
							alt: "Bush Rovers crew emblem",
							width: 128,
							height: 128,
							className: "animate-rise h-24 w-24 md:h-32 md:w-32"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "animate-rise mt-6 font-display text-6xl leading-[0.9] text-cream sm:text-7xl md:text-8xl lg:text-9xl",
							children: CREW.nameUpper
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "animate-rise mt-4 max-w-2xl font-condensed text-xl uppercase tracking-[0.14em] text-primary md:text-2xl",
							children: [
								"“",
								CREW.motto,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "animate-rise mt-6 max-w-2xl text-base leading-relaxed text-cream/80 md:text-lg",
							children: CREW.intro
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-rise mt-10 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/members",
										children: ["Meet the Rovers ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/story",
										children: "Our story"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										children: "Join our journey"
									})
								})
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			eyebrow: "Who we are",
			title: "We are Bush Rovers.",
			lead: "We are young people united by adventure, service, leadership and the determination to go beyond what seems impossible.",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-3xl leading-relaxed text-muted-foreground",
				children: "Through Scouting, we challenge ourselves physically, intellectually, socially, emotionally and morally while developing the skills needed to become responsible leaders and active members of our communities."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: PILLARS.map((pillar) => {
					const Icon = ICONS[pillar.icon];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "surface-card group rounded-lg p-6 transition-colors duration-300 hover:border-primary/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-7 w-7 text-primary",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-2xl tracking-wide text-cream",
								children: pillar.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: pillar.body
							})
						]
					}, pillar.title);
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden border-y border-border",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: campfire_default,
					alt: "",
					loading: "lazy",
					width: 1600,
					height: 1008,
					className: "absolute inset-0 h-full w-full object-cover opacity-40"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-background/70",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto grid w-full max-w-7xl gap-8 px-4 py-20 sm:grid-cols-2 lg:grid-cols-4 lg:px-8",
					children: (stats.data ?? []).map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-5xl text-primary md:text-6xl",
						children: stat.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-condensed text-sm uppercase tracking-[0.2em] text-cream",
						children: stat.label
					})] }, stat.id))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			eyebrow: "The crew",
			title: "Meet the Bush Rovers",
			lead: "Every Rover carries a membership card with a unique QR code that opens their verified profile.",
			children: [featured.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: featured.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberCard, { member }, member.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Crew members are being added. Check back soon."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/members",
						children: ["See the full directory ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ghost",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/verify",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, {}), " Verify a membership card"]
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border topo-texture",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-4 py-24 text-center lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Our creed"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-display text-3xl leading-tight text-cream md:text-5xl",
						children: "We don't simply walk the trail. We go beyond it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-condensed text-lg uppercase tracking-[0.2em] text-primary",
						children: CREW.motto
					})
				]
			})
		})
	] });
}
//#endregion
export { Home as component };
