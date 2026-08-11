export type PublicRole = {
  name: string;
  description: string | null;
  responsibilities: string | null;
  is_leadership: boolean;
} | null;

export type PublicMember = {
  id: string;
  slug: string;
  member_id: string;
  full_name: string;
  photo_url: string | null;
  bio: string | null;
  join_date: string | null;
  birth_day: number | null;
  birth_month: number | null;
  show_birthday: boolean;
  skills: string[];
  interests: string[];
  scout_level: string | null;
  responsibilities: string | null;
  previous_section: string | null;
  current_section: string | null;
  years_in_scouting: number | null;
  status: string;
  roles: PublicRole;
};

export type PublicGalleryItem = {
  id: string;
  title: string | null;
  caption: string | null;
  category: string;
  image_url: string;
};

export type PublicAchievement = {
  id: string;
  title: string;
  category: string | null;
  event_date: string | null;
  year_label: string | null;
  description: string | null;
  photo_url: string | null;
};

export type PublicActivity = {
  id: string;
  title: string;
  category: string | null;
  event_date: string | null;
  location: string | null;
  description: string | null;
  photo_url: string | null;
};

export type PublicProject = {
  id: string;
  title: string;
  category: string | null;
  event_date: string | null;
  location: string | null;
  description: string | null;
  impact: string | null;
  photo_url: string | null;
};

export type MemberProfileData = {
  member: PublicMember | null;
  gallery: PublicGalleryItem[];
  achievements: PublicAchievement[];
  activities: PublicActivity[];
  projects: PublicProject[];
};

export type VerifyMember = {
  id: string;
  slug: string;
  member_id: string;
  full_name: string;
  photo_url: string | null;
  join_date: string | null;
  status: string;
  roles: { name: string; is_leadership: boolean } | null;
};
