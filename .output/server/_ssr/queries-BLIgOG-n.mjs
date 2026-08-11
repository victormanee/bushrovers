import { i as getLocalRoles, r as getLocalMembers } from "./member-directory-DUwoV1NL.mjs";
import { t as supabase } from "./client-DUbED7N7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/queries-BLIgOG-n.js
async function fetchMembers() {
	return getLocalMembers();
}
async function fetchRoles() {
	return getLocalRoles();
}
async function fetchActivities() {
	const { data, error } = await supabase.from("activities").select("*").order("sort_order").order("event_date", { ascending: false });
	if (error) throw error;
	return data ?? [];
}
async function fetchAchievements() {
	const { data, error } = await supabase.from("achievements").select("*").order("sort_order").order("event_date", { ascending: false });
	if (error) throw error;
	return data ?? [];
}
async function fetchProjects() {
	const { data, error } = await supabase.from("community_projects").select("*").order("sort_order").order("event_date", { ascending: false });
	if (error) throw error;
	return data ?? [];
}
async function fetchGallery() {
	const { data, error } = await supabase.from("gallery").select("*").order("sort_order");
	if (error) throw error;
	return data ?? [];
}
async function fetchHistory() {
	const { data, error } = await supabase.from("crew_history").select("*").order("sort_order");
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
export { fetchMembers as a, fetchSettings as c, fetchHistory as i, fetchStats as l, fetchActivities as n, fetchProjects as o, fetchGallery as r, fetchRoles as s, fetchAchievements as t };
