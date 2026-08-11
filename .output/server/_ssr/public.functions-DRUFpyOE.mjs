import { r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-Dtk4XxEG.mjs";
import { a as getLocalVerifyMemberByMemberId, n as getLocalMemberBySlug, t as getLocalMemberByMemberId } from "./member-directory-CS1y1haT.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/public.functions-DRUFpyOE.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/** Publishable-key Supabase client for public reads inside server function handlers. */
function createPublicServerClient() {
	const key = processModule.env["SUPABASE_PUBLISHABLE_KEY"];
	const url = processModule.env["SUPABASE_URL"];
	return createClient(url, key, {
		auth: {
			persistSession: false,
			autoRefreshToken: false
		},
		global: { fetch: (input, init) => {
			const headers = new Headers(init?.headers);
			if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
			headers.set("apikey", key);
			return fetch(input, {
				...init,
				headers
			});
		} }
	});
}
var getPublicMemberBySlug_createServerFn_handler = createServerRpc({
	id: "bc7e1467af0a9ec134a6baf881210f4369e755957457e57c1d9c2c955493b477",
	name: "getPublicMemberBySlug",
	filename: "src/lib/public.functions.ts"
}, (opts) => getPublicMemberBySlug.__executeServer(opts));
var getPublicMemberBySlug = createServerFn({ method: "GET" }).inputValidator((data) => ({ slug: String(data.slug).slice(0, 120) })).handler(getPublicMemberBySlug_createServerFn_handler, async ({ data }) => {
	try {
		const supabase = createPublicServerClient();
		const { data: member } = await supabase.from("members").select(`id, slug, member_id, full_name, photo_url, bio, join_date, birth_day, birth_month,
  show_birthday, skills, interests, scout_level, responsibilities, previous_section, current_section,
  years_in_scouting, status, roles ( name, description, responsibilities, is_leadership )`).eq("slug", data.slug).eq("is_published", true).maybeSingle();
		if (!member) {
			const fallback = getLocalMemberBySlug(data.slug);
			if (!fallback) return {
				member: null,
				gallery: [],
				achievements: [],
				activities: [],
				projects: []
			};
			return {
				member: fallback,
				gallery: [],
				achievements: [],
				activities: [],
				projects: []
			};
		}
		const [gallery, achievements, activities, projects] = await Promise.all([
			supabase.from("gallery").select("id, title, caption, category, image_url").eq("member_id", member.id).eq("is_published", true).order("sort_order"),
			supabase.from("achievements").select("id, title, category, event_date, year_label, description, photo_url").contains("member_ids", [member.id]).eq("is_published", true).order("event_date", { ascending: false }),
			supabase.from("activities").select("id, title, category, event_date, location, description, photo_url").contains("member_ids", [member.id]).eq("is_published", true).order("event_date", { ascending: false }),
			supabase.from("community_projects").select("id, title, category, event_date, location, description, impact, photo_url").contains("member_ids", [member.id]).eq("is_published", true).order("event_date", { ascending: false })
		]);
		return {
			member,
			gallery: gallery.data ?? [],
			achievements: achievements.data ?? [],
			activities: activities.data ?? [],
			projects: projects.data ?? []
		};
	} catch {
		const fallback = getLocalMemberBySlug(data.slug);
		if (!fallback) return {
			member: null,
			gallery: [],
			achievements: [],
			activities: [],
			projects: []
		};
		return {
			member: fallback,
			gallery: [],
			achievements: [],
			activities: [],
			projects: []
		};
	}
});
var getPublicMemberByMemberId_createServerFn_handler = createServerRpc({
	id: "a7f851c282bb865ee3749724515ef80049382643c3c93264cdca614e9103f8e1",
	name: "getPublicMemberByMemberId",
	filename: "src/lib/public.functions.ts"
}, (opts) => getPublicMemberByMemberId.__executeServer(opts));
var getPublicMemberByMemberId = createServerFn({ method: "GET" }).inputValidator((data) => ({ memberId: String(data.memberId).slice(0, 40) })).handler(getPublicMemberByMemberId_createServerFn_handler, async ({ data }) => {
	try {
		const { data: member } = await createPublicServerClient().from("members").select("id, slug, member_id, full_name, photo_url, join_date, status, roles ( name, is_leadership )").ilike("member_id", data.memberId).eq("is_published", true).maybeSingle();
		return { member: member ?? null };
	} catch {
		return { member: getLocalMemberByMemberId(data.memberId) ? getLocalVerifyMemberByMemberId(data.memberId) : null };
	}
});
var recordScan_createServerFn_handler = createServerRpc({
	id: "9403e4d18479aa0600c41fd67767a34658a2a931addec643a0dd7b8de9b608ac",
	name: "recordScan",
	filename: "src/lib/public.functions.ts"
}, (opts) => recordScan.__executeServer(opts));
var recordScan = createServerFn({ method: "POST" }).inputValidator((data) => ({
	memberUuid: String(data.memberUuid),
	source: String(data.source).slice(0, 20),
	deviceType: String(data.deviceType).slice(0, 20)
})).handler(recordScan_createServerFn_handler, async ({ data }) => {
	await createPublicServerClient().from("qr_scans").insert({
		member_uuid: data.memberUuid,
		source: data.source,
		device_type: data.deviceType
	});
	return { ok: true };
});
//#endregion
export { getPublicMemberByMemberId_createServerFn_handler, getPublicMemberBySlug_createServerFn_handler, recordScan_createServerFn_handler };
