export const CREW = {
  name: "Bush Rovers",
  nameUpper: "BUSH ROVERS",
  motto: "Through the Bush, Beyond the Impossible.",
  intro:
    "Bush Rovers is a Scout Rover crew built around adventure, personal growth, leadership, service and the courage to go beyond the limits placed before us.",
};

export const PILLARS = [
  {
    title: "Adventure",
    body: "We embrace challenges and explore beyond our comfort zones.",
    icon: "mountain",
  },
  {
    title: "Service",
    body: "We use our skills to make a difference in our communities.",
    icon: "hand-heart",
  },
  {
    title: "Leadership",
    body: "We develop the courage and responsibility to lead.",
    icon: "compass",
  },
  {
    title: "Resilience",
    body: "We continue moving forward when the trail becomes difficult.",
    icon: "flame",
  },
  {
    title: "Brotherhood",
    body: "We support, respect and grow alongside one another.",
    icon: "users",
  },
  {
    title: "Purpose",
    body: "We seek to leave every place and person better than we found them.",
    icon: "sprout",
  },
] as const;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/members", label: "Our Members" },
  { to: "/achievements", label: "Achievements" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
  { to: "/verify", label: "Verify" },
] as const;

export const GALLERY_CATEGORIES = [
  "Adventures",
  "Camping",
  "Community Service",
  "Competitions",
  "Training",
  "Members",
  "Events",
] as const;

export const ACHIEVEMENT_CATEGORIES = [
  "Competitions",
  "Community Service",
  "Expeditions",
  "Environmental Conservation",
  "Training",
  "Leadership",
] as const;

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatBirthday(month: number | null, day: number | null) {
  if (!month || !day) return null;
  return `${MONTHS[month - 1]} ${day}`;
}

export function formatDate(value: string | null) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
