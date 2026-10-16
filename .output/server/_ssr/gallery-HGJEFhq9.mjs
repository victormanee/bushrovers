import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogTitle$1, i as DialogPortal, n as DialogContent$1, r as DialogOverlay, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as X } from "../_libs/lucide-react.mjs";
import { a as cn, c as GALLERY_CATEGORIES, i as Button } from "./router-NdDDhCBF.mjs";
import { n as PageHero, r as Section, t as EmptyState } from "./page-parts-j6cm8YG0.mjs";
import { n as fetchGallery } from "./queries-Du0xesIC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-HGJEFhq9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var crew_image_default = "/assets/crew-image-Rz0UUP-B.jpg";
var Dialog = Dialog$1;
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-black/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent$1, {
	ref,
	className: cn("fixed left-1/2 top-1/2 z-50 grid w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border border-border bg-background p-6 text-foreground shadow-lg focus:outline-none", className),
	...props,
	children
})] }));
DialogContent.displayName = DialogContent$1.displayName;
function Gallery() {
	const gallery = useQuery({
		queryKey: ["gallery"],
		queryFn: fetchGallery
	});
	const [category, setCategory] = (0, import_react.useState)("all");
	const [active, setActive] = (0, import_react.useState)(null);
	const items = (0, import_react.useMemo)(() => (gallery.data ?? []).filter((item) => category === "all" ? true : item.category === category), [gallery.data, category]);
	const activeItem = items.find((item) => item.id === active) ?? null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Gallery",
			title: "Frames from the trail",
			lead: "Moments from the crew's adventures, camps, service projects and competitions.",
			image: crew_image_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: category === "all" ? "default" : "outline",
				onClick: () => setCategory("all"),
				children: "All"
			}), GALLERY_CATEGORIES.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: category === name ? "default" : "outline",
				onClick: () => setCategory(name),
				children: name
			}, name))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10",
			children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { message: gallery.isLoading ? "Loading the gallery…" : "No photographs in this category yet." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "columns-2 gap-4 md:columns-3 lg:columns-4",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setActive(item.id),
					className: "surface-card mb-4 block w-full overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-0.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image_url,
						alt: item.title ?? item.category,
						loading: "lazy",
						className: "w-full object-cover"
					})
				}, item.id))
			})
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: Boolean(activeItem),
			onOpenChange: (open) => !open && setActive(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "max-w-4xl border-border bg-card p-2 sm:p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "sr-only",
					children: activeItem?.title ?? "Gallery image"
				}), activeItem ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: activeItem.image_url,
					alt: activeItem.title ?? activeItem.category,
					className: "max-h-[75vh] w-full rounded-md object-contain"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4 px-2 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: activeItem.category
						}),
						activeItem.title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-xl text-cream",
							children: activeItem.title
						}) : null,
						activeItem.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: activeItem.caption
						}) : null
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => setActive(null),
						"aria-label": "Close",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
					})]
				})] }) : null]
			})
		})
	] });
}
//#endregion
export { Gallery as component };
