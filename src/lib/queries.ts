import { supabase } from "@/integrations/client";
import { getLocalMembers, getLocalRoles } from "@/lib/member-directory";

export const MEMBER_LIST_COLUMNS = `id, slug, member_id, full_name, photo_url, bio, join_date, skills,
  interests, scout_level, responsibilities, status, sort_order, role_id, is_published,
  roles ( id, name, is_leadership, description, responsibilities, rank )`;

export async function fetchMembers() {
  return getLocalMembers() as MemberRow[];
}

export async function fetchRoles() {
  return getLocalRoles() as RoleRow[];
}

export async function fetchActivities() {
  const { data, error } = await supabase
    .from("activities")
    .select("*")
    .order("sort_order")
    .order("event_date", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function fetchAchievements() {
  const { data, error } = await supabase
    .from("achievements")
    .select("*")
    .order("sort_order")
    .order("event_date", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function fetchProjects() {
  const { data, error } = await supabase
    .from("community_projects")
    .select("*")
    .order("sort_order")
    .order("event_date", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function fetchGallery() {
  const { data, error } = await supabase.from("gallery").select("*").order("sort_order");
  if (error) throw error;
  return data ?? [];
}

export async function fetchHistory() {
  const { data, error } = await supabase.from("crew_history").select("*").order("sort_order");
  if (error) throw error;
  return data ?? [];
}

export async function fetchStats() {
  const { data, error } = await supabase.from("crew_stats").select("*").order("sort_order");
  if (error) throw error;
  return data ?? [];
}

export async function fetchSettings() {
  const { data, error } = await supabase.from("site_settings").select("*");
  if (error) throw error;
  const map: Record<string, string> = {};
  for (const row of data ?? []) map[row.key] = row.value ?? "";
  return map;
}

export type MemberRow = Awaited<ReturnType<typeof fetchMembers>>[number];
export type RoleRow = Awaited<ReturnType<typeof fetchRoles>>[number];

export async function uploadMedia(file: File, folder: string) {
  const ext = file.name.split(".").pop() ?? "jpg";
  const path = `${folder}/${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from("bushrovers").upload(path, file, {
    cacheControl: "31536000",
    upsert: false,
  });
  if (error) throw error;
  const { data, error: signError } = await supabase.storage
    .from("bushrovers")
    .createSignedUrl(path, 60 * 60 * 24 * 365 * 10);
  if (signError) throw signError;
  return data.signedUrl;
}
