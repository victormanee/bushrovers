import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Button } from "./router-C63gRTOf.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as PageHero, r as Section } from "./page-parts-j6cm8YG0.mjs";
import { t as hero_ridge_default } from "./hero-ridge-CijXp33Y.mjs";
import { t as supabase } from "./client-DUbED7N7.mjs";
import { a as fetchMembers } from "./queries-BLIgOG-n.mjs";
import { t as Input } from "./input-Cs51PjLi.mjs";
import { t as Label } from "./label-BJgiIEwT.mjs";
import { n as MemberCard } from "./member-card-mCRrJH3D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DGv6LfJy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Admin() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [signedIn, setSignedIn] = (0, import_react.useState)(false);
	const members = useQuery({
		queryKey: ["members"],
		queryFn: fetchMembers,
		enabled: signedIn
	});
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => setSignedIn(Boolean(data.session)));
		const { data } = supabase.auth.onAuthStateChange((_event, session) => setSignedIn(Boolean(session)));
		return () => data.subscription.unsubscribe();
	}, []);
	async function signIn(event) {
		event.preventDefault();
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		if (error) toast.error(error.message);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Crew admin",
		title: "Manage the register",
		image: hero_ridge_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: !signedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: signIn,
		className: "surface-card max-w-md space-y-4 rounded-lg p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "admin-email",
				children: "Email"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "admin-email",
				type: "email",
				value: email,
				onChange: (e) => setEmail(e.target.value),
				className: "mt-1.5",
				required: true
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "admin-password",
				children: "Password"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "admin-password",
				type: "password",
				value: password,
				onChange: (e) => setPassword(e.target.value),
				className: "mt-1.5",
				required: true
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				children: "Sign in"
			})
		]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "eyebrow",
			children: [
				"Crew register · ",
				(members.data ?? []).length,
				" members"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			onClick: () => {
				supabase.auth.signOut();
			},
			children: "Sign out"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
		children: (members.data ?? []).map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberCard, { member }, member.id))
	})] }) })] });
}
//#endregion
export { Admin as component };
