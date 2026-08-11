import { createServerFn } from "@tanstack/react-start";
import { createPublicServerClient } from "@/lib/supabase-public-client";
import type {
  MemberProfileData,
  PublicAchievement,
  PublicActivity,
  PublicGalleryItem,
  PublicMember,
  PublicProject,
  VerifyMember,
} from "@/lib/member-types";
import { getLocalMemberByMemberId, getLocalMemberBySlug, getLocalVerifyMemberByMemberId } from "@/lib/member-directory";

export const getPublicMemberBySlug = createServerFn({ method: "GET" })
  .inputValidator((data: { slug: string }) => ({ slug: String(data.slug).slice(0, 120) }))
  .handler(async ({ data }): Promise<MemberProfileData> => {
    try {
      const supabase = createPublicServerClient();
      const { data: member } = await supabase
        .from("members")
        .select(
          `id, slug, member_id, full_name, photo_url, bio, join_date, birth_day, birth_month,
  show_birthday, skills, interests, scout_level, responsibilities, previous_section, current_section,
  years_in_scouting, status, roles ( name, description, responsibilities, is_leadership )`,
        )
        .eq("slug", data.slug)
        .eq("is_published", true)
        .maybeSingle<PublicMember>();
      if (!member) {
        const fallback = getLocalMemberBySlug(data.slug);
        if (!fallback) return { member: null, gallery: [], achievements: [], activities: [], projects: [] };
        return {
          member: fallback,
          gallery: [],
          achievements: [],
          activities: [],
          projects: [],
        };
      }

      const [gallery, achievements, activities, projects] = await Promise.all([
        supabase
          .from("gallery")
          .select("id, title, caption, category, image_url")
          .eq("member_id", member.id)
          .eq("is_published", true)
          .order("sort_order"),
        supabase
          .from("achievements")
          .select("id, title, category, event_date, year_label, description, photo_url")
          .contains("member_ids", [member.id])
          .eq("is_published", true)
          .order("event_date", { ascending: false }),
        supabase
          .from("activities")
          .select("id, title, category, event_date, location, description, photo_url")
          .contains("member_ids", [member.id])
          .eq("is_published", true)
          .order("event_date", { ascending: false }),
        supabase
          .from("community_projects")
          .select("id, title, category, event_date, location, description, impact, photo_url")
          .contains("member_ids", [member.id])
          .eq("is_published", true)
          .order("event_date", { ascending: false }),
      ]);

      return {
        member,
        gallery: (gallery.data ?? []) as PublicGalleryItem[],
        achievements: (achievements.data ?? []) as PublicAchievement[],
        activities: (activities.data ?? []) as PublicActivity[],
        projects: (projects.data ?? []) as PublicProject[],
      };
    } catch {
      const fallback = getLocalMemberBySlug(data.slug);
      if (!fallback) return { member: null, gallery: [], achievements: [], activities: [], projects: [] };
      return {
        member: fallback,
        gallery: [],
        achievements: [],
        activities: [],
        projects: [],
      };
    }
  });

export const getPublicMemberByMemberId = createServerFn({ method: "GET" })
  .inputValidator((data: { memberId: string }) => ({ memberId: String(data.memberId).slice(0, 40) }))
  .handler(async ({ data }): Promise<{ member: VerifyMember | null }> => {
    try {
      const supabase = createPublicServerClient();
      const { data: member } = await supabase
        .from("members")
        .select(
          "id, slug, member_id, full_name, photo_url, join_date, status, roles ( name, is_leadership )",
        )
        .ilike("member_id", data.memberId)
        .eq("is_published", true)
        .maybeSingle<VerifyMember>();
      return { member: member ?? null };
    } catch {
      const fallback = getLocalMemberByMemberId(data.memberId);
      return { member: fallback ? getLocalVerifyMemberByMemberId(data.memberId) : null };
    }
  });

export const recordScan = createServerFn({ method: "POST" })
  .inputValidator((data: { memberUuid: string; source: string; deviceType: string }) => ({
    memberUuid: String(data.memberUuid),
    source: String(data.source).slice(0, 20),
    deviceType: String(data.deviceType).slice(0, 20),
  }))
  .handler(async ({ data }) => {
    const supabase = createPublicServerClient();
    await supabase.from("qr_scans").insert({
      member_uuid: data.memberUuid,
      source: data.source,
      device_type: data.deviceType,
    });
    return { ok: true };
  });
