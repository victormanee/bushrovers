import { i as getLocalRoles, r as getLocalMembers } from "./member-directory-DvXpFVHz.mjs";
import { t as supabase } from "./client-DUbED7N7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/queries-Dd4LEQr9.js
async function fetchMembers() {
	return getLocalMembers();
}
async function fetchRoles() {
	return getLocalRoles();
}
async function fetchAchievements() {
	const { data, error } = await supabase.from("achievements").select("*").order("sort_order").order("event_date", { ascending: false });
	if (error) throw error;
	return data ?? [];
}
async function fetchGallery() {
	const { data, error } = await supabase.from("gallery").select("*").order("sort_order");
	if (error) throw error;
	return data ?? [];
}
async function fetchStats() {
	const { data, error } = await supabase.from("crew_stats").select("*").order("sort_order");
	if (error) throw error;
	return data ?? [];
}
async function fetchSettings() {
	const { data, error } = await supabase.from("site_settings").select("*");
	if (error) throw error;
	const map = {};
	for (const row of data ?? []) map[row.key] = row.value ?? "";
	return map;
}
//#endregion
export { fetchSettings as a, fetchRoles as i, fetchGallery as n, fetchStats as o, fetchMembers as r, fetchAchievements as t };
