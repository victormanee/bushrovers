import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Button } from "./router-C63gRTOf.mjs";
import { o as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as PageHero, r as Section } from "./page-parts-j6cm8YG0.mjs";
import { t as hero_ridge_default } from "./hero-ridge-CijXp33Y.mjs";
import { t as Input } from "./input-Cs51PjLi.mjs";
import { t as Label } from "./label-BJgiIEwT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/verify.index-BKIDFlc5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VerifyIndex() {
	const navigate = useNavigate();
	const [value, setValue] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Member verification",
		title: "Verify a Bush Rovers card",
		lead: "Scan the QR code on the card, or enter the member ID printed on the front.",
		image: hero_ridge_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (event) => {
			event.preventDefault();
			const memberId = value.trim().toUpperCase();
			if (!memberId) return;
			navigate({
				to: "/verify/$memberId",
				params: { memberId }
			});
		},
		className: "surface-card max-w-lg space-y-4 rounded-lg p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "member-id",
				children: "Member ID"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "member-id",
				value,
				onChange: (event) => setValue(event.target.value.slice(0, 40)),
				placeholder: "BR-2026-001",
				className: "font-condensed uppercase tracking-[0.2em]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "submit",
				size: "lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {}), " Verify membership"]
			})
		]
	}) })] });
}
//#endregion
export { VerifyIndex as component };
