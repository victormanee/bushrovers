import type { PublicMember, VerifyMember } from "@/lib/member-types";
import placeholder from "@/assets/member-placeholder.svg";
import kelvinNjoroge from "@/assets/kelvin-njoroge.png";
import victorManee from "@/assets/victor-manee.png";
import johnKibara from "@/assets/john-kibara.jpeg";
import evansMaina from "@/assets/evans-maina.jpg";
import andreaneKaniaru from "@/assets/andreane-kaniaru.png";
//import antonyNgui from "@/assets/antony-ngui.png";
import angelKabi from "@/assets/angel-kabi.png";
import roseMwendwa from "@/assets/rose-mwendwa.png";
import ashleyMwende from "@/assets/ashley-mwende.png";
import hopeWanjiru from "@/assets/hope-wanjiru.png";
//import solomon from "@/assets/solomon.jpg";
import derickOwuor from "@/assets/derick-owuor.png";
//import machoka from "@/assets/machoka.jpg";
import jacksonKagema from "@/assets/jackson-kagema.jpeg";
import ivanaFlorence from "@/assets/ivana-florence.jpeg"
import candiceKangethe from "@/assets/candice-kang'ethe.jpeg"
import davidKaranja from "@/assets/david-karanja.png";
import { de } from "date-fns/locale";

type LocalMember = Omit<PublicMember, "roles"> & {
  gender?: string | null;
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

const crewLeader: LocalRole = {
  id: "local-role-crew-leader",
  name: "Crew Leader",
  description: "Leads the crew and represents their interests.",
  responsibilities: "To be added",
  is_leadership: true,
  rank: 1,
};
const assistantCrewLeader: LocalRole = {
  id: "local-role-assistant-crew-leader",
  name: "Assistant Crew Leader",
  description: "Supports the Crew Leader in leading the crew.",
  responsibilities: "To be added",
  is_leadership: true,
  rank: 2,
};
const scribe: LocalRole = {
  id: "local-role-scribe",
  name: "Scribe",
  description: "Records meeting minutes and other important information.",
  responsibilities: "To be added",
  is_leadership: true,
  rank: 3,
};
const firstAider: LocalRole = {
  id: "local-role-first-aider",
  name: "First Aider",
  description: "Provides immediate medical assistance in emergency situations.",
  responsibilities: "To be added",
  is_leadership: false,
  rank: 4,
};
const quaterMaster: LocalRole = {
  id: "local-role-quarter-master",
  name: "Quarter Master",
  description: "Manages the crew's equipment and supplies.",
  responsibilities: "To be added",
  is_leadership: false,
  rank: 5,
};
const drillsMaster: LocalRole = {
  id: "local-role-drills-master",
  name: "Drills Master",
  description: "Oversees training exercises and drills.",
  responsibilities: "To be added",
  is_leadership: false,
  rank: 6,
};
const advisorGeneral: LocalRole = {
  id: "local-role-advisor-general",
  name: "Advisor General",
  description: "Provides guidance and support to the crew.",
  responsibilities: "To be added",
  is_leadership: false,
  rank: 7,
};
const eventsandactivitiesCoordinator: LocalRole = {
  id: "local-role-events-and-activities-coordinator",
  name: "Events and Activities Coordinator",
  description: "Plans and organizes events and activities for the crew.",
  responsibilities: "To be added",
  is_leadership: false,
  rank: 8,
};
const spiritualLeader: LocalRole = {
  id: "local-role-spiritual-leader",
  name: "Spiritual Leader",
  description: "Provides spiritual guidance and support to the crew.",
  responsibilities: "To be added",
  is_leadership: false,
  rank: 9,
};
const resourceManager: LocalRole = {
  id: "local-role-resource-manager",
  name: "Resource Manager",
  description: "Manages the crew's resources and supplies.",
  responsibilities: "To be added",
  is_leadership: false,
  rank: 10,
};
const denKeeper: LocalRole = {
  id: "local-role-den-keeper",
  name: "Den Keeper",
  description: "Manages the den and ensures its proper maintenance.",
  responsibilities: "To be added",
  is_leadership: false,
  rank: 11,
};
const projectManager: LocalRole = {
  id: "local-role-project-manager",
  name: "Project Manager",
  description: "Manages projects and ensures their successful completion.",
  responsibilities: "To be added",
  is_leadership: true,
  rank: 11,
};

const localMemberProfiles: LocalMember[] = [
  {
    id: "local-kelvin-njoroge",
    slug: "kelvin-njoroge",
    member_id: "BR2026001",
    full_name: "Kelvin Njoroge",
    gender: "male",
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
    role_id: "local-role-crew-leader",
  },
  {
    id: "local-angel-kabi",
    slug: "angel-kabi",
    member_id: "BR2026002",
    full_name: "Angel Kabi",
    gender: "female",
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
    roles: { ...crewLeader },
    is_published: true,
    sort_order: 2,
    role_id: "local-role-crew-leader",
  },
  {
    id: "local-andreane-kaniaru",
    slug: "andreane-kaniaru",
    member_id: "BR2026003",
    full_name: "Andreane Kaniaru",
    gender: "male",
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
    roles: { ...assistantCrewLeader },
    is_published: true,
    sort_order: 3,
    role_id: "local-role-assistant-crew-leader",
  },
  {
    id: "local-rose-mwendwa",
    slug: "rose-mwendwa",
    member_id: "BR2026004",
    full_name: "Rose Mwendwa",
    gender: "female",
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
    roles: { ...assistantCrewLeader },
    is_published: true,
    sort_order: 4,
    role_id: "local-role-assistant-crew-leader",
  },
  {
    id: "local-victor-manee",
    slug: "victor-manee",
    member_id: "BR2026005",
    full_name: "Victor Manee",
    gender: "male",
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
    roles: { ...scribe },
    is_published: true,
    sort_order: 5,
    role_id: "local-role-scribe",
  },
  {
    id: "local-candice-kangéthe",
    slug: "candice-kangéthe",
    member_id: "BR2026006",
    full_name: "Candice Kangéthe",
    gender: "female",
    photo_url: candiceKangethe,
    bio: "Member profile information coming soon.",
    join_date: null,
    birth_day: 3,
    birth_month: 6,
    show_birthday: true,
    skills: ["To be added"],
    interests: ["To be added"],
    scout_level: "To be added",
    responsibilities: "To be added",
    previous_section: "To be added",
    current_section: "To be added",
    years_in_scouting: null,
    status: "active",
    roles: { ...scribe },
    is_published: true,
    sort_order: 6,
    role_id: "local-role-scribe",
  },
  {
    id: "local-john-kibara",
    slug: "john-kibara",
    member_id: "BR2026007",
    full_name: "John Kibara",
    gender: "male",
    photo_url: johnKibara,
    bio: "Member profile information coming soon.",
    join_date: null,
    birth_day: 27,
    birth_month: 10,
    show_birthday: true,
    skills: ["To be added"],
    interests: ["To be added"],
    scout_level: "To be added",
    responsibilities: "To be added",
    previous_section: "To be added",
    current_section: "To be added",
    years_in_scouting: null,
    status: "active",
    roles: { ...firstAider , ...projectManager },
    is_published: true,
    sort_order: 7,
    role_id: "local-role-first-aider",
  },
  {
    id: "local-ashley-mwende",
    slug: "ashley-mwende",
    member_id: "BR2026008",
    full_name: "Ashley Mwende",
    gender: "female",
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
    roles: { ...firstAider , ...projectManager },
    is_published: true,
    sort_order: 8,
    role_id: "local-role-first-aider",
  },
  {
    id: "local-evans-maina",
    slug: "evans-maina",
    member_id: "BR2026009",
    full_name: "Evans Maina",
    gender: "male",
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
    roles: { ...quaterMaster },
    is_published: true,
    sort_order: 9,
    role_id: "local-role-quater-master",
  },
  {
    id: "local-ivana-florence",
    slug: "ivana-florence",
    member_id: "BR2026010",
    full_name: "Ivana Florence Nyangi",
    gender: "female",
    photo_url: ivanaFlorence,
    bio: "Member profile information coming soon.",
    join_date: null,
    birth_day: 9,
    birth_month: 10,
    show_birthday: true,
    skills: ["To be added"],
    interests: ["To be added"],
    scout_level: "To be added",
    responsibilities: "To be added",
    previous_section: "To be added",
    current_section: "To be added",
    years_in_scouting: null,
    status: "active",
    roles: { ...quaterMaster },
    is_published: true,
    sort_order: 10,
    role_id: "local-role-quater-master",
  },
  {
    id: "local-jackson-kagema",
    slug: "jackson-kagema",
    member_id: "BR2026011",
    full_name: "Jackson Kagema",
    gender: "male",
    photo_url: jacksonKagema,
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
    roles: { ...drillsMaster },
    is_published: true,
    sort_order: 11,
    role_id: "local-role-drills-master",
  },
  {
    id: "local-hope-wanjiru",
    slug: "hope-wanjiru",
    member_id: "BR2026012",
    full_name: "Hope Wanjiru",
    gender: "female",
    photo_url: hopeWanjiru,
    bio: "Member profile information coming soon.",
    join_date: null,
    birth_day: 16,
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
    roles: { ...drillsMaster },
    is_published: true,
    sort_order: 12,
    role_id: "local-role-drills-master",
  },
  {
    id: "local-derrick-owuor",
    slug: "derrick-owuor",
    member_id: "BR2026013",
    full_name: "Derrick Owuor",
    gender: "male",
    photo_url: derickOwuor,
    bio: "Member profile information coming soon.",
    join_date: null,
    birth_day: 13,
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
    roles: { ...advisorGeneral },
    is_published: true,
    sort_order: 13,
    role_id: "local-role-advisor-general",
  },
  {
    id: "local-solomon",
    slug: "solomon",
    member_id: "BR2026014",
    full_name: "Solomon",
    gender: "male",
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
    roles: { ...denKeeper },
    is_published: true,
    sort_order: 14,
    role_id: "local-role-den-keeper",
  },
  /*{
    id: "local-antony-ngui",
    slug: "antony-ngui",
    member_id: "BR2026015",
    full_name: "Antony Ngui",
    gender: "male",
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
    roles: { ...spiritualLeader },
    is_published: true,
    sort_order: 15,
    role_id: "local-role-spiritual-leader",
  },*/
  {
    id: "local-david-karanja",
    slug: "david-karanja",
    member_id: "BR2026016",
    full_name: "David Karanja",
    gender: "male",
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
    roles: { ...resourceManager },
    is_published: true,
    sort_order: 16,
    role_id: "local-role-resource-manager",
  },
  {
    id: "local-machoka",
    slug: "machoka",
    member_id: "BR2026017",
    full_name: "Machoka",
    gender: "male",
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
    roles: { ...eventsandactivitiesCoordinator },
    is_published: true,
    sort_order: 17,
    role_id: "local-role-events-and-activities-coordinator" ,
  },
];

export function getLocalMembers() {
  function generateRandomBio(member: LocalMember) {
    const firstName = (member.full_name || "").split(" ")[0] || member.full_name;
    const roleName = (member.roles && (member.roles as any).name) || "member";
    const roleLower = roleName.toLowerCase();
    const templates = [
      `${firstName} serves as ${roleName}, coordinating ${roleLower} activities and keeping the crew organized.`,
      `${firstName} is the ${roleName} who focuses on practical ${roleLower} work and supports the team during events.`,
      `${firstName} brings dependable energy to the ${roleName} role and helps the crew run smoothly.`,
      `As ${roleName}, ${firstName} handles ${roleLower} tasks and ensures everyone is ready for action.`,
      `${firstName} supports the crew as ${roleName}, often taking the lead on ${roleLower} logistics.`,
    ];
    return templates[Math.floor(Math.random() * templates.length)];
  }

  return localMemberProfiles.map((member) => ({ ...member, bio: generateRandomBio(member) }));
}

export function getLocalMemberBySlug(slug: string) {
  return getLocalMembers().find((member) => member.slug === slug) ?? null;
}

export function getLocalMemberByMemberId(memberId: string) {
  return getLocalMembers().find((member) => member.member_id.toLowerCase() === memberId.toLowerCase()) ?? null;
}

export function getLocalRoles() {
  return [
    { ...crewLeader },
    { ...assistantCrewLeader },
    { ...scribe },
    { ...projectManager },
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

export function getLocalGenders() {
  return [
    { name: "male" },
    { name: "female" },
    { name: "other" },
  ];
}

export function mergeGendersWithLocalData<T extends { name?: string | null }>(genders: T[]) {
  const merged = [...genders];
  for (const g of getLocalGenders()) {
    const exists = merged.some((item) => item.name === g.name);
    if (!exists) {
      merged.push(g as unknown as T);
    }
  }
  return merged;
}

export function filterLocalMembersByGender(gender?: string | null) {
  if (!gender) return getLocalMembers();
  const g = gender.toLowerCase();
  return getLocalMembers().filter((m) => (m.gender ?? "").toLowerCase() === g);
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
