import type { PublicMember, VerifyMember } from "@/lib/member-types";
import placeholder from "@/assets/member-placeholder.svg";
import kelvinNjoroge from "@/assets/kelvin-njoroge.png";
import victorManee from "@/assets/victor-manee.png";
import johnKibara from "@/assets/john-kibara.jpeg";
import evansMaina from "@/assets/evans-maina.jpg";
import andreaneKaniaru from "@/assets/andreane-kaniaru.png";
import antonyNgui from "@/assets/antony-ngui.png";
import angelKabi from "@/assets/angel-kabi.png";
import roseMwendwa from "@/assets/rose-Mwendwa.png";
import ashleyMwende from "@/assets/ashley-mwende.png";
/*import ngumi from "@/assets/ngumi.jpg";
import solomon from "@/assets/solomon.jpg";*/
import derickOwuor from "@/assets/derick-owuor.jpg";
/*import machoka from "@/assets/machoka.jpg";
import jacksonKagema from "@/assets/jackson-kagema.jpg";*/
import davidKaranja from "@/assets/david-karanja.png";

type LocalMember = Omit<PublicMember, "roles"> & {
  roles: NonNullable<PublicMember["roles"]>;
  is_published: boolean;
  sort_order: number;
  role_id: string | null;
};

type LocalRole = {
  id: string;
  name: string;
  description: string;
  responsibilities: string;
  is_leadership: boolean;
  rank: number;
};

const roleToBeAdded: LocalRole = {
  id: "local-role-to-be-added",
  name: "Role to be added",
  description: "Role details coming soon.",
  responsibilities: "To be added",
  is_leadership: false,
  rank: 100,
};

const scribeRole: LocalRole = {
  id: "local-role-scribe",
  name: "Scribe",
  description: "Scribe role details coming soon.",
  responsibilities: "To be added",
  is_leadership: false,
  rank: 101,
};

const crewLeader: LocalRole = {
  id: "local-role-crew-leader",
  name: "Crew Leader",
  description: "Crew Leader role details coming soon.",
  responsibilities: "To be added",
  is_leadership: true,
  rank: 102,
};

const localMemberProfiles: LocalMember[] = [
  {
    id: "local-kelvin-njoroge",
    slug: "kelvin-njoroge",
    member_id: "BR-001",
    full_name: "Kelvin Njoroge",
    photo_url: kelvinNjoroge,
    bio: "Member profile information coming soon.",
    join_date: null,
    birth_day: null,
    birth_month: null,
    show_birthday: false,
    skills: ["To be added"],
    interests: ["To be added"],
    scout_level: "To be added",
    responsibilities: "To be added",
    previous_section: "To be added",
    current_section: "To be added",
    years_in_scouting: null,
    status: "active",
    roles: { ...crewLeader },
    is_published: true,
    sort_order: 1,
    role_id: null,
  },
  {
    id: "local-victor-manee",
    slug: "victor-manee",
    member_id: "BR-002",
    full_name: "Victor Manee",
    photo_url: victorManee,
    bio: "Member profile information coming soon.",
    join_date: null,
    birth_day: 28,
    birth_month: 10,
    show_birthday: true,
    skills: ["Programming", "Web Development", "UI/UX Design "],
    interests: ["To be added"],
    scout_level: "Jasiri",
    responsibilities: "To be added",
    previous_section: "Mwamba",
    current_section: "Jasiri",
    years_in_scouting: 4,
    status: "active",
    roles: { ...scribeRole },
    is_published: true,
    sort_order: 2,
    role_id: null,
  },
  {
    id: "local-derrick-owuor",
    slug: "derrick-owuor",
    member_id: "BR-012",
    full_name: "Derrick Owuor",
    photo_url: derickOwuor,
    bio: "Member profile information coming soon.",
    join_date: null,
    birth_day: null,
    birth_month: null,
    show_birthday: false,
    skills: ["To be added"],
    interests: ["To be added"],
    scout_level: "To be added",
    responsibilities: "To be added",
    previous_section: "To be added",
    current_section: "To be added",
    years_in_scouting: null,
    status: "active",
    roles: { ...roleToBeAdded },
    is_published: true,
    sort_order: 3,
    role_id: null,
  },
  {
    id: "local-john-kibara",
    slug: "john-kibara",
    member_id: "BR-003",
    full_name: "John Kibara",
    photo_url: johnKibara,
    bio: "Member profile information coming soon.",
    join_date: null,
    birth_day: null,
    birth_month: null,
    show_birthday: false,
    skills: ["To be added"],
    interests: ["To be added"],
    scout_level: "To be added",
    responsibilities: "To be added",
    previous_section: "To be added",
    current_section: "To be added",
    years_in_scouting: null,
    status: "active",
    roles: { ...roleToBeAdded },
    is_published: true,
    sort_order: 4,
    role_id: null,
  },
  {
    id: "local-andreane-kaniaru",
    slug: "andreane-kaniaru",
    member_id: "BR-004",
    full_name: "Andreane Kaniaru",
    photo_url: andreaneKaniaru,
    bio: "Member profile information coming soon.",
    join_date: null,
    birth_day: null,
    birth_month: null,
    show_birthday: false,
    skills: ["To be added"],
    interests: ["To be added"],
    scout_level: "To be added",
    responsibilities: "To be added",
    previous_section: "To be added",
    current_section: "To be added",
    years_in_scouting: null,
    status: "active",
    roles: { ...roleToBeAdded },
    is_published: true,
    sort_order: 5,
    role_id: null,
  },
  {
    id: "local-evans-maina",
    slug: "evans-maina",
    member_id: "BR-005",
    full_name: "Evans Maina",
    photo_url: evansMaina,
    bio: "Member profile information coming soon.",
    join_date: null,
    birth_day: null,
    birth_month: null,
    show_birthday: false,
    skills: ["To be added"],
    interests: ["To be added"],
    scout_level: "To be added",
    responsibilities: "To be added",
    previous_section: "To be added",
    current_section: "To be added",
    years_in_scouting: null,
    status: "active",
    roles: { ...roleToBeAdded },
    is_published: true,
    sort_order: 6,
    role_id: null,
  },
  {
    id: "local-solomon",
    slug: "solomon",
    member_id: "BR-006",
    full_name: "Solomon",
    photo_url: placeholder,
    bio: "Member profile information coming soon.",
    join_date: null,
    birth_day: null,
    birth_month: null,
    show_birthday: false,
    skills: ["To be added"],
    interests: ["To be added"],
    scout_level: "To be added",
    responsibilities: "To be added",
    previous_section: "To be added",
    current_section: "To be added",
    years_in_scouting: null,
    status: "active",
    roles: { ...roleToBeAdded },
    is_published: true,
    sort_order: 7,
    role_id: null,
  },
  {
    id: "local-jackson-kagema",
    slug: "jackson-kagema",
    member_id: "BR-007",
    full_name: "Jackson Kagema",
    photo_url: placeholder,
    bio: "Member profile information coming soon.",
    join_date: null,
    birth_day: null,
    birth_month: null,
    show_birthday: false,
    skills: ["To be added"],
    interests: ["To be added"],
    scout_level: "To be added",
    responsibilities: "To be added",
    previous_section: "To be added",
    current_section: "To be added",
    years_in_scouting: null,
    status: "active",
    roles: { ...roleToBeAdded },
    is_published: true,
    sort_order: 8,
    role_id: null,
  },
  {
    id: "local-antony-ngui",
    slug: "antony-ngui",
    member_id: "BR-008",
    full_name: "Antony Ngui",
    photo_url: antonyNgui,
    bio: "Member profile information coming soon.",
    join_date: null,
    birth_day: null,
    birth_month: null,
    show_birthday: false,
    skills: ["To be added"],
    interests: ["To be added"],
    scout_level: "To be added",
    responsibilities: "To be added",
    previous_section: "To be added",
    current_section: "To be added",
    years_in_scouting: null,
    status: "active",
    roles: { ...roleToBeAdded },
    is_published: true,
    sort_order: 9,
    role_id: null,
  },
  {
    id: "local-angel-kabi",
    slug: "angel-kabi",
    member_id: "BR-009",
    full_name: "Angel Kabi",
    photo_url: angelKabi,
    bio: "Member profile information coming soon.",
    join_date: null,
    birth_day: 8,
    birth_month: 5,
    show_birthday: true,
    skills: ["To be added"],
    interests: ["To be added"],
    scout_level: "To be added",
    responsibilities: "To be added",
    previous_section: "To be added",
    current_section: "To be added",
    years_in_scouting: null,
    status: "active",
    roles: { ...roleToBeAdded },
    is_published: true,
    sort_order: 10,
    role_id: null,
  },
  {
    id: "local-rose-mwendwa",
    slug: "rose-mwendwa",
    member_id: "BR-010",
    full_name: "Rose Mwendwa",
    photo_url: roseMwendwa,
    bio: "Member profile information coming soon.",
    join_date: null,
    birth_day: 6,
    birth_month: 12,
    show_birthday: true,
    skills: ["To be added"],
    interests: ["To be added"],
    scout_level: "To be added",
    responsibilities: "To be added",
    previous_section: "To be added",
    current_section: "To be added",
    years_in_scouting: null,
    status: "active",
    roles: { ...roleToBeAdded },
    is_published: true,
    sort_order: 11,
    role_id: null,
  },
  {
    id: "local-ashley-mwende",
    slug: "ashley-mwende",
    member_id: "BR-011",
    full_name: "Ashley Mwende",
    photo_url: ashleyMwende,
    bio: "Member profile information coming soon.",
    join_date: null,
    birth_day: 23,
    birth_month: 9,
    show_birthday: true,
    skills: ["To be added"],
    interests: ["To be added"],
    scout_level: "To be added",
    responsibilities: "To be added",
    previous_section: "To be added",
    current_section: "To be added",
    years_in_scouting: null,
    status: "active",
    roles: { ...roleToBeAdded },
    is_published: true,
    sort_order: 12,
    role_id: null,
  },
  {
    id: "local-ngumi",
    slug: "ngumi",
    member_id: "BR-013",
    full_name: "Ngumi",
    photo_url: placeholder,
    bio: "Member profile information coming soon.",
    join_date: null,
    birth_day: null,
    birth_month: null,
    show_birthday: false,
    skills: ["To be added"],
    interests: ["To be added"],
    scout_level: "To be added",
    responsibilities: "To be added",
    previous_section: "To be added",
    current_section: "To be added",
    years_in_scouting: null,
    status: "active",
    roles: { ...roleToBeAdded },
    is_published: true,
    sort_order: 13,
    role_id: null,
  },
  {
    id: "local-david-karanja",
    slug: "david-karanja",
    member_id: "BR-014",
    full_name: "David Karanja",
    photo_url: davidKaranja,
    bio: "Member profile information coming soon.",
    join_date: null,
    birth_day: 24,
    birth_month: 4,
    show_birthday: true,
    skills: ["To be added"],
    interests: ["To be added"],
    scout_level: "To be added",
    responsibilities: "To be added",
    previous_section: "To be added",
    current_section: "To be added",
    years_in_scouting: null,
    status: "active",
    roles: { ...roleToBeAdded },
    is_published: true,
    sort_order: 14,
    role_id: null,
  },
  {
    id: "local-machoka",
    slug: "machoka",
    member_id: "BR-015",
    full_name: "Machoka",
    photo_url: placeholder,
    bio: "Member profile information coming soon.",
    join_date: null,
    birth_day: null,
    birth_month: null,
    show_birthday: false,
    skills: ["To be added"],
    interests: ["To be added"],
    scout_level: "To be added",
    responsibilities: "To be added",
    previous_section: "To be added",
    current_section: "To be added",
    years_in_scouting: null,
    status: "active",
    roles: { ...roleToBeAdded },
    is_published: true,
    sort_order: 15,
    role_id: null,
  },
];

export function getLocalMembers() {
  return localMemberProfiles.map((member) => ({ ...member }));
}

export function getLocalMemberBySlug(slug: string) {
  return getLocalMembers().find((member) => member.slug === slug) ?? null;
}

export function getLocalMemberByMemberId(memberId: string) {
  return getLocalMembers().find((member) => member.member_id.toLowerCase() === memberId.toLowerCase()) ?? null;
}

export function getLocalRoles() {
  return [
    { ...roleToBeAdded },
    { ...scribeRole },
  ];
}

export function mergeMembersWithLocalData<T extends { slug?: string | null }>(members: T[]) {
  const merged = [...members];
  for (const member of getLocalMembers()) {
    const exists = merged.some((item) => item.slug === member.slug);
    if (!exists) {
      merged.push(member as unknown as T);
    }
  }
  return merged.sort((a, b) => {
    const left = a.slug ?? "";
    const right = b.slug ?? "";
    return left.localeCompare(right);
  });
}

export function mergeRolesWithLocalData<T extends { name?: string | null }>(roles: T[]) {
  const merged = [...roles];
  for (const role of getLocalRoles()) {
    const exists = merged.some((item) => item.name === role.name);
    if (!exists) {
      merged.push(role as unknown as T);
    }
  }
  return merged;
}

export function getLocalMemberProfileForDisplay() {
  return getLocalMembers().map((member) => ({
    ...member,
    photo_url: member.photo_url ?? placeholder,
  })) as PublicMember[];
}

export function getLocalVerifyMemberByMemberId(memberId: string) {
  const member = getLocalMemberByMemberId(memberId);
  if (!member) return null;
  return {
    id: member.id,
    slug: member.slug,
    member_id: member.member_id,
    full_name: member.full_name,
    photo_url: member.photo_url,
    join_date: member.join_date,
    status: member.status,
    roles: member.roles
      ? { name: member.roles.name, is_leadership: member.roles.is_leadership }
      : null,
  } as VerifyMember;
}
