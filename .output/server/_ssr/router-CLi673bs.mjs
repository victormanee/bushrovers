import { i as __toESM, n as __exportAll } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { M as notFound, _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay, c as DialogTrigger, f as Slot, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { i as getServerFnById, n as __exportAll$1, r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-Dtk4XxEG.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { d as Menu, o as ShieldCheck, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/public.functions-CYM2wQ5O.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getPublicMemberBySlug = createServerFn({ method: "GET" }).inputValidator((data) => ({ slug: String(data.slug).slice(0, 120) })).handler(createSsrRpc("bc7e1467af0a9ec134a6baf881210f4369e755957457e57c1d9c2c955493b477"));
var getPublicMemberByMemberId = createServerFn({ method: "GET" }).inputValidator((data) => ({ memberId: String(data.memberId).slice(0, 40) })).handler(createSsrRpc("a7f851c282bb865ee3749724515ef80049382643c3c93264cdca614e9103f8e1"));
var recordScan = createServerFn({ method: "POST" }).inputValidator((data) => ({
	memberUuid: String(data.memberUuid),
	source: String(data.source).slice(0, 20),
	deviceType: String(data.deviceType).slice(0, 20)
})).handler(createSsrRpc("9403e4d18479aa0600c41fd67767a34658a2a931addec643a0dd7b8de9b608ac"));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CLi673bs.js
var router_CLi673bs_exports = /* @__PURE__ */ __exportAll({
	a: () => cn,
	c: () => GALLERY_CATEGORIES,
	d: () => formatDate,
	f: () => bush_rovers_logo_default,
	getRouter: () => getRouter,
	i: () => Button,
	l: () => PILLARS,
	n: () => Route,
	o: () => ACHIEVEMENT_CATEGORIES,
	r: () => Route$2,
	s: () => CREW,
	t: () => router_exports,
	u: () => formatBirthday
});
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DXA5GDQX.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var bush_rovers_logo_default = "/assets/bush-rovers-logo-8lR0ip0A.png";
var CREW = {
	name: "Bush Rovers",
	nameUpper: "BUSH ROVERS",
	motto: "Through the Bush, Beyond the Impossible.",
	intro: "Bush Rovers is a Scout Rover crew built around adventure, personal growth, leadership, service and the courage to go beyond the limits placed before us."
};
var PILLARS = [
	{
		title: "Adventure",
		body: "We embrace challenges and explore beyond our comfort zones.",
		icon: "mountain"
	},
	{
		title: "Service",
		body: "We use our skills to make a difference in our communities.",
		icon: "hand-heart"
	},
	{
		title: "Leadership",
		body: "We develop the courage and responsibility to lead.",
		icon: "compass"
	},
	{
		title: "Resilience",
		body: "We continue moving forward when the trail becomes difficult.",
		icon: "flame"
	},
	{
		title: "Brotherhood",
		body: "We support, respect and grow alongside one another.",
		icon: "users"
	},
	{
		title: "Purpose",
		body: "We seek to leave every place and person better than we found them.",
		icon: "sprout"
	}
];
var NAV_LINKS = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/story",
		label: "Our Story"
	},
	{
		to: "/members",
		label: "Our Members"
	},
	{
		to: "/activities",
		label: "Activities"
	},
	{
		to: "/achievements",
		label: "Achievements"
	},
	{
		to: "/community-service",
		label: "Community Service"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/leadership",
		label: "Leadership"
	},
	{
		to: "/contact",
		label: "Contact"
	},
	{
		to: "/verify",
		label: "Verify"
	}
];
var GALLERY_CATEGORIES = [
	"Adventures",
	"Camping",
	"Community Service",
	"Competitions",
	"Training",
	"Members",
	"Events"
];
var ACHIEVEMENT_CATEGORIES = [
	"Competitions",
	"Community Service",
	"Expeditions",
	"Environmental Conservation",
	"Training",
	"Leadership"
];
var MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
function formatBirthday(month, day) {
	if (!month || !day) return null;
	return `${MONTHS[month - 1]} ${day}`;
}
function formatDate(value) {
	if (!value) return null;
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return value;
	return date.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `sticky top-0 z-50 w-full border-b transition-colors duration-300 ${scrolled ? "border-border bg-background/95 backdrop-blur" : "border-transparent bg-background/40 backdrop-blur-sm"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 md:h-20 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: bush_rovers_logo_default,
						alt: `${CREW.name} crew emblem`,
						width: 48,
						height: 48,
						className: "h-10 w-10 md:h-12 md:w-12"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex flex-col leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl tracking-widest text-cream md:text-2xl",
							children: CREW.nameUpper
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-condensed text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground",
							children: "Scout Rover Crew"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 xl:flex",
					children: NAV_LINKS.slice(0, 10).map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "rounded-sm px-2.5 py-2 font-condensed text-sm uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary",
						activeProps: { className: "text-primary" },
						activeOptions: { exact: link.to === "/" },
						children: link.label
					}, link.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "sm",
						className: "hidden md:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/verify",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {}), " Verify member"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
						open,
						onOpenChange: setOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "xl:hidden",
								"aria-label": "Open navigation",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
							side: "right",
							className: "w-[85vw] max-w-sm border-border bg-card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-1",
								children: [NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: link.to,
									onClick: () => setOpen(false),
									className: "rounded-md px-3 py-3 font-condensed text-lg uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-secondary hover:text-primary",
									activeProps: { className: "text-primary" },
									activeOptions: { exact: link.to === "/" },
									children: link.label
								}, link.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/admin",
									onClick: () => setOpen(false),
									className: "mt-4 rounded-md px-3 py-3 font-condensed text-sm uppercase tracking-[0.2em] text-muted-foreground",
									children: "Member Portal"
								})]
							})
						})]
					})]
				})
			]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-forest-deep",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: bush_rovers_logo_default,
							alt: "",
							loading: "lazy",
							width: 56,
							height: 56,
							className: "h-14 w-14"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl tracking-widest text-cream",
							children: CREW.nameUpper
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm font-condensed text-lg uppercase tracking-[0.08em] text-primary",
						children: CREW.motto
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: CREW.intro
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-condensed text-sm uppercase tracking-[0.24em] text-cream",
					children: "The Crew"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid grid-cols-2 gap-y-2",
					children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "font-condensed text-sm uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary",
						children: link.label
					}) }, link.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-condensed text-sm uppercase tracking-[0.24em] text-cream",
						children: "Membership"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: "Every Bush Rover carries a membership card with a unique QR code. Scanning it opens that Rover's verified profile on this website."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/verify",
						className: "mt-4 inline-block font-condensed text-sm uppercase tracking-[0.2em] text-primary",
						children: "Verify a membership card"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						className: "mt-6 block font-condensed text-xs uppercase tracking-[0.24em] text-muted-foreground",
						children: "Member Portal"
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-border/60 px-4 py-6 text-center font-condensed text-xs uppercase tracking-[0.24em] text-muted-foreground",
			children: [
				CREW.nameUpper,
				" · ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" · We don't simply walk the trail. We go beyond it."
			]
		})]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70vh] items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-2xl text-cream",
					children: "Off the trail"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "This page doesn't exist or has been moved. Head back to base camp."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 font-condensed text-sm uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70vh] items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl text-cream",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. Try again or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 font-condensed text-sm uppercase tracking-[0.16em] text-primary-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 font-condensed text-sm uppercase tracking-[0.16em] text-foreground",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$14 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Bush Rovers — Scout Rover Crew" },
			{
				name: "description",
				content: "Bush Rovers is a Scout Rover crew built around adventure, service, leadership and going beyond the impossible."
			},
			{
				property: "og:site_name",
				content: "Bush Rovers"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#14251b"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;500;600;700&family=Barlow:wght@300;400;500;600&display=swap"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$14.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" })]
	});
}
var $$splitComponentImporter$13 = () => import("./routes-DAwilxxO.mjs");
var Route$13 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Bush Rovers — Through the Bush, Beyond the Impossible" },
		{
			name: "description",
			content: "The official home of Bush Rovers, a Scout Rover crew built on adventure, service, leadership and resilience. Meet the crew and verify membership cards."
		},
		{
			property: "og:title",
			content: "Bush Rovers — Through the Bush, Beyond the Impossible"
		},
		{
			property: "og:description",
			content: "A Scout Rover crew built on adventure, service, leadership and resilience. Meet the Rovers and explore our story."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./about-BBf_2STs.mjs");
var Route$12 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Bush Rovers — Adventure, Service, Leadership" },
		{
			name: "description",
			content: "Who the Bush Rovers are: a Rover Scout crew developing leadership, resilience and service through adventure in the African wilderness."
		},
		{
			property: "og:title",
			content: "About Bush Rovers"
		},
		{
			property: "og:description",
			content: "A Rover Scout crew developing leadership, resilience and service through adventure."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./achievements-DhIoxanG.mjs");
var Route$11 = createFileRoute("/achievements")({
	head: () => ({ meta: [
		{ title: "Bush Rovers Achievements — Competitions, Service & Expeditions" },
		{
			name: "description",
			content: "Bush Rovers achievements across competitions, community service, expeditions, conservation, training and leadership."
		},
		{
			property: "og:title",
			content: "Bush Rovers Achievements"
		},
		{
			property: "og:description",
			content: "Competitions, service, expeditions, conservation, training and leadership milestones."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./activities-YI888TRi.mjs");
var Route$10 = createFileRoute("/activities")({
	head: () => ({ meta: [
		{ title: "The Bush Rovers Experience — Activities & Expeditions" },
		{
			name: "description",
			content: "Hiking, camping, expeditions, first aid, conservation, leadership training and outdoor skills — the Bush Rovers activity programme."
		},
		{
			property: "og:title",
			content: "The Bush Rovers Experience"
		},
		{
			property: "og:description",
			content: "Hikes, camps, expeditions, training and service — the Bush Rovers activity programme."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./admin-DKHuDaA5.mjs");
var Route$9 = createFileRoute("/admin")({
	head: () => ({ meta: [
		{ title: "Crew Admin — Bush Rovers" },
		{
			name: "description",
			content: "Administrator access for managing the Bush Rovers crew register."
		},
		{
			name: "robots",
			content: "noindex"
		},
		{
			property: "og:title",
			content: "Crew Admin — Bush Rovers"
		},
		{
			property: "og:description",
			content: "Administrator access for the Bush Rovers crew register."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./community-service-DLVHERmA.mjs");
var Route$8 = createFileRoute("/community-service")({
	head: () => ({ meta: [
		{ title: "Community Service — Bush Rovers Projects & Impact" },
		{
			name: "description",
			content: "Tree planting, cleanups, mentorship, awareness and disaster response: how Bush Rovers serve their community, with measured impact."
		},
		{
			property: "og:title",
			content: "Bush Rovers Community Service"
		},
		{
			property: "og:description",
			content: "Conservation, cleanups, mentorship and outreach projects with measured community impact."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./contact-CTPJVyPT.mjs");
var Route$7 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Bush Rovers — Join Our Journey" },
		{
			name: "description",
			content: "Contact the Bush Rovers crew about membership, partnerships, service projects or invitations to activities."
		},
		{
			property: "og:title",
			content: "Contact Bush Rovers"
		},
		{
			property: "og:description",
			content: "Reach the crew about membership, partnerships or community service projects."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./gallery-KGajOtJD.mjs");
var Route$6 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery — Bush Rovers in the Field" },
		{
			name: "description",
			content: "Photographs from Bush Rovers adventures, camps, community service, competitions, training and crew events."
		},
		{
			property: "og:title",
			content: "Bush Rovers Gallery"
		},
		{
			property: "og:description",
			content: "Photographs from crew adventures, camps, service projects, competitions and training."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./leadership-DfacWXXQ.mjs");
var Route$5 = createFileRoute("/leadership")({
	head: () => ({ meta: [
		{ title: "Leadership — The Bush Rovers Crew Council" },
		{
			name: "description",
			content: "The Rovers currently leading Bush Rovers: crew leader, assistant, scribe, quartermaster, treasurer and team leaders."
		},
		{
			property: "og:title",
			content: "Bush Rovers Leadership"
		},
		{
			property: "og:description",
			content: "Meet the Rovers currently leading the crew and their responsibilities."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./story-CpwkzXXk.mjs");
var Route$4 = createFileRoute("/story")({
	head: () => ({ meta: [
		{ title: "The Bush Rovers Story — How the Crew Began" },
		{
			name: "description",
			content: "The Bush Rovers story: how the crew began, when it was formed, its first adventure, its first service project and where it stands today."
		},
		{
			property: "og:title",
			content: "The Bush Rovers Story"
		},
		{
			property: "og:description",
			content: "How the crew began, its first adventure, its first service project and where it stands today."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./members.index-BZxDUp1D.mjs");
var Route$3 = createFileRoute("/members/")({
	head: () => ({ meta: [
		{ title: "Meet the Bush Rovers — Crew Member Directory" },
		{
			name: "description",
			content: "The Bush Rovers member directory. Search Rovers by name, member ID or crew role and open a verified member profile."
		},
		{
			property: "og:title",
			content: "Meet the Bush Rovers"
		},
		{
			property: "og:description",
			content: "Search the crew directory by name, member ID or role and open a verified profile."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitNotFoundComponentImporter = () => import("./members._slug-B0OFA4BG.mjs");
var $$splitComponentImporter$2 = () => import("./members._slug-i_YXHU5c.mjs");
var Route$2 = createFileRoute("/members/$slug")({
	loader: async ({ params }) => {
		const data = await getPublicMemberBySlug({ data: { slug: params.slug } });
		if (!data.member) throw notFound();
		return data;
	},
	head: ({ loaderData }) => {
		if (!loaderData?.member) return { meta: [{ title: "Member not found — Bush Rovers" }, {
			name: "robots",
			content: "noindex"
		}] };
		const m = loaderData.member;
		const role = m.roles?.name ?? "Member";
		const title = `${m.full_name} — ${role} | Bush Rovers`;
		const description = `${m.full_name}, ${role} of Bush Rovers. Member ID ${m.member_id}. Verified Bush Rovers member profile.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			...m.photo_url ? [{
				property: "og:image",
				content: m.photo_url
			}, {
				name: "twitter:image",
				content: m.photo_url
			}] : []
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
var $$splitComponentImporter$1 = () => import("./verify.index-qJ--ZpzQ.mjs");
var Route$1 = createFileRoute("/verify/")({
	head: () => ({ meta: [
		{ title: "Member Verification — Bush Rovers" },
		{
			name: "description",
			content: "Verify a Bush Rovers membership card. Enter the member ID printed on the card, for example BR-2026-001."
		},
		{
			property: "og:title",
			content: "Bush Rovers Member Verification"
		},
		{
			property: "og:description",
			content: "Enter the member ID printed on a Bush Rovers card to confirm membership."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./verify._memberId-B5Rgm6nR.mjs");
var Route = createFileRoute("/verify/$memberId")({
	head: () => ({ meta: [
		{ title: "Verification Result — Bush Rovers Membership" },
		{
			name: "description",
			content: "Verification result for a Bush Rovers membership card scanned or entered by member ID."
		},
		{
			property: "og:title",
			content: "Bush Rovers Membership Verification"
		},
		{
			property: "og:description",
			content: "Confirm whether a Bush Rovers membership card is valid."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$14
});
var AboutRoute = Route$12.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$14
});
var AchievementsRoute = Route$11.update({
	id: "/achievements",
	path: "/achievements",
	getParentRoute: () => Route$14
});
var ActivitiesRoute = Route$10.update({
	id: "/activities",
	path: "/activities",
	getParentRoute: () => Route$14
});
var AdminRoute = Route$9.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$14
});
var CommunityServiceRoute = Route$8.update({
	id: "/community-service",
	path: "/community-service",
	getParentRoute: () => Route$14
});
var ContactRoute = Route$7.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$14
});
var GalleryRoute = Route$6.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$14
});
var LeadershipRoute = Route$5.update({
	id: "/leadership",
	path: "/leadership",
	getParentRoute: () => Route$14
});
var StoryRoute = Route$4.update({
	id: "/story",
	path: "/story",
	getParentRoute: () => Route$14
});
var MembersIndexRoute = Route$3.update({
	id: "/members/",
	path: "/members/",
	getParentRoute: () => Route$14
});
var MembersSlugRoute = Route$2.update({
	id: "/members/$slug",
	path: "/members/$slug",
	getParentRoute: () => Route$14
});
var VerifyIndexRoute = Route$1.update({
	id: "/verify/",
	path: "/verify/",
	getParentRoute: () => Route$14
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AchievementsRoute,
	ActivitiesRoute,
	AdminRoute,
	CommunityServiceRoute,
	ContactRoute,
	GalleryRoute,
	LeadershipRoute,
	StoryRoute,
	MembersSlugRoute,
	VerifyMemberIdRoute: Route.update({
		id: "/verify/$memberId",
		path: "/verify/$memberId",
		getParentRoute: () => Route$14
	}),
	MembersIndexRoute,
	VerifyIndexRoute
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll$1({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { PILLARS as a, bush_rovers_logo_default as c, formatDate as d, router_CLi673bs_exports as f, GALLERY_CATEGORIES as i, cn as l, recordScan as m, Button as n, Route as o, getPublicMemberByMemberId as p, CREW as r, Route$2 as s, ACHIEVEMENT_CATEGORIES as t, formatBirthday as u };
