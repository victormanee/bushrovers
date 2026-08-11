import type {
  PublicAchievement,
  PublicActivity,
  PublicGalleryItem,
  PublicProject,
} from "@/lib/member-types";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Award,
  BadgeCheck,
  CalendarDays,
  Compass,
  HandHeart,
  MapPin,
  QrCode,
  ShieldCheck,
} from "lucide-react";
import logo from "@/assets/bush-rovers-logo.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MemberPhoto } from "@/components/member-card";
import { QrImage } from "@/components/qr-image";
import { getPublicMemberBySlug, recordScan } from "@/lib/public.functions";
import { CREW, formatBirthday, formatDate } from "@/lib/site";

export const Route = createFileRoute("/members/$slug")({
  loader: async ({ params }) => {
    const data = await getPublicMemberBySlug({ data: { slug: params.slug } });
    if (!data.member) throw notFound();
    return data;
  },
  head: ({ loaderData }) => {
    if (!loaderData?.member) {
      return {
        meta: [{ title: "Member not found — Bush Rovers" }, { name: "robots", content: "noindex" }],
      };
    }
    const m = loaderData.member;
    const role = m.roles?.name ?? "Member";
    const title = `${m.full_name} — ${role} | Bush Rovers`;
    const description = `${m.full_name}, ${role} of Bush Rovers. Member ID ${m.member_id}. Verified Bush Rovers member profile.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(m.photo_url
          ? [
              { property: "og:image", content: m.photo_url },
              { name: "twitter:image", content: m.photo_url },
            ]
          : []),
      ],
    };
  },
  component: MemberProfile,
  notFoundComponent: MemberNotFound,
});

function MemberNotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl text-cream">This Rover could not be found</h1>
      <p className="mt-3 text-muted-foreground">
        The profile linked to this card is not available. Check the card or verify by member ID.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Button asChild>
          <Link to="/members">Member directory</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/verify">Verify by member ID</Link>
        </Button>
      </div>
    </div>
  );
}

function MemberProfile() {
  const { member, gallery, achievements, activities, projects } = Route.useLoaderData();
  const role = member!.roles?.name ?? "Member";
  const active = member!.status === "active";
  const profileUrl =
    typeof window !== "undefined" ? window.location.href : `/members/${member!.slug}`;
  const birthday = member!.show_birthday
    ? formatBirthday(member!.birth_month, member!.birth_day)
    : null;

  useEffect(() => {
    const deviceType = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? "mobile" : "desktop";
    void recordScan({ data: { memberUuid: member!.id, source: "profile", deviceType } });
  }, [member]);

  return (
    <>
      <section className="border-b border-border bg-forest-deep topo-texture">
        <div className="mx-auto w-full max-w-5xl px-4 py-10 md:py-14 lg:px-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Bush Rovers emblem" width={56} height={56} className="h-12 w-12 md:h-14 md:w-14" />
            <div>
              <p className="font-display text-xl tracking-widest text-cream">{CREW.nameUpper}</p>
              <p className="font-condensed text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
                Scout Rover Crew
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-7 sm:flex-row sm:items-end">
            <MemberPhoto
              src={member!.photo_url}
              name={member!.full_name}
              className="h-40 w-40 shrink-0 rounded-lg border border-primary/40 md:h-48 md:w-48"
            />
            <div>
              {active ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-verified/50 bg-verified/10 px-3 py-1 font-condensed text-xs uppercase tracking-[0.2em] text-verified">
                  <BadgeCheck className="h-4 w-4" /> Verified Bush Rovers member
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 font-condensed text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Inactive member
                </span>
              )}
              <h1 className="mt-4 font-display text-4xl leading-none text-cream md:text-6xl">
                {member!.full_name}
              </h1>
              <p className="mt-2 font-condensed text-xl uppercase tracking-[0.2em] text-primary">
                {role}
              </p>
              <p className="mt-4 font-condensed text-sm uppercase tracking-[0.18em] text-muted-foreground">
                Member ID: <span className="text-cream">{member!.member_id}</span>
              </p>
              <p className="mt-1 font-condensed text-sm uppercase tracking-[0.18em] text-muted-foreground">
                {CREW.motto}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm">
              <Link to="/verify/$memberId" params={{ memberId: member!.member_id }}>
                <ShieldCheck /> Verification page
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/about">About Bush Rovers</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/members">Other Rovers</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-5xl gap-10 px-4 py-14 lg:grid-cols-[1fr_260px] lg:px-8">
        <div className="space-y-12">
          <section>
            <p className="eyebrow">About the member</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {member!.bio || "[Biography to be added by the crew administrator.]"}
            </p>
          </section>

          <section>
            <p className="eyebrow">Scout role</p>
            <h2 className="mt-3 font-display text-2xl text-cream">{role}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {member!.roles?.description || "[Role description]"}
            </p>
            {member!.responsibilities || member!.roles?.responsibilities ? (
              <p className="mt-3 leading-relaxed text-muted-foreground">
                <span className="text-cream">Responsibilities: </span>
                {member!.responsibilities || member!.roles?.responsibilities}
              </p>
            ) : null}
          </section>

          <section>
            <p className="eyebrow">Scout journey</p>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              <Fact label="Date joined" value={formatDate(member!.join_date) ?? "[JOIN DATE]"} />
              <Fact label="Current section" value={member!.current_section ?? "[CURRENT SECTION]"} />
              <Fact label="Previous section" value={member!.previous_section ?? "[PREVIOUS SECTION]"} />
              <Fact
                label="Years in Scouting"
                value={member!.years_in_scouting ? String(member!.years_in_scouting) : "[YEARS]"}
              />
              <Fact label="Scout level" value={member!.scout_level ?? "[SCOUT LEVEL]"} />
              {birthday ? <Fact label="Born" value={birthday} /> : null}
            </dl>
          </section>

          {member!.skills.length ? (
            <section>
              <p className="eyebrow">Skills</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {member!.skills.map((skill: string) => (
                  <Badge key={skill} className="font-condensed uppercase tracking-[0.12em]">
                    {skill}
                  </Badge>
                ))}
              </div>
            </section>
          ) : null}

          {member!.interests.length ? (
            <section>
              <p className="eyebrow">Interests</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {member!.interests.map((item: string) => (
                  <Badge key={item} variant="outline" className="font-condensed uppercase tracking-[0.12em]">
                    {item}
                  </Badge>
                ))}
              </div>
            </section>
          ) : null}

          {achievements.length ? (
            <section>
              <p className="eyebrow">Achievements</p>
              <ul className="mt-4 space-y-4">
                {achievements.map((item: PublicAchievement) => (
                  <li key={item.id} className="surface-card rounded-lg p-5">
                    <p className="font-condensed text-sm uppercase tracking-[0.2em] text-primary">
                      {item.year_label || formatDate(item.event_date) || ""}
                    </p>
                    <h3 className="mt-1 font-display text-xl text-cream">{item.title}</h3>
                    {item.description ? (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {activities.length ? (
            <section>
              <p className="eyebrow">Activities</p>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {activities.map((item: PublicActivity) => (
                  <li key={item.id} className="surface-card rounded-lg p-5">
                    <h3 className="font-display text-lg text-cream">{item.title}</h3>
                    <p className="mt-1 font-condensed text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {[formatDate(item.event_date), item.location].filter(Boolean).join(" · ")}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {projects.length ? (
            <section>
              <p className="eyebrow">Community service</p>
              <ul className="mt-4 space-y-4">
                {projects.map((item: PublicProject) => (
                  <li key={item.id} className="surface-card rounded-lg p-5">
                    <h3 className="font-display text-lg text-cream">{item.title}</h3>
                    {item.impact ? (
                      <p className="mt-1 text-sm text-primary">{item.impact}</p>
                    ) : null}
                    {item.description ? (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {gallery.length ? (
            <section>
              <p className="eyebrow">Gallery</p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {gallery.map((item: PublicGalleryItem) => (
                  <img
                    key={item.id}
                    src={item.image_url}
                    alt={item.title ?? `${member!.full_name} in Scout activity`}
                    loading="lazy"
                    className="surface-card aspect-square rounded-md object-cover"
                  />
                ))}
              </div>
            </section>
          ) : null}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="surface-card rounded-lg p-5 text-center">
            <p className="eyebrow">Digital badge</p>
            <QrImage
              value={profileUrl}
              size={180}
              className="mx-auto mt-4"
              alt={`QR code linking to ${member!.full_name}'s Bush Rovers profile`}
            />
            <p className="mt-4 font-condensed text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <QrCode className="mr-1 inline h-3.5 w-3.5 text-primary" />
              Scan to open this profile
            </p>
          </div>
          <div className="surface-card rounded-lg p-5">
            <p className="eyebrow">Crew</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-primary" /> {CREW.name}
              </li>
              <li className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-primary" />
                Joined {formatDate(member!.join_date) ?? "[JOIN DATE]"}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> [CREW LOCATION]
              </li>
              <li className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" /> {achievements.length} achievements
              </li>
              <li className="flex items-center gap-2">
                <HandHeart className="h-4 w-4 text-primary" /> {projects.length} service projects
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="surface-card rounded-lg p-4">
      <dt className="font-condensed text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 text-cream">{value}</dd>
    </div>
  );
}
