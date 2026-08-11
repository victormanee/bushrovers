import { Link } from "@tanstack/react-router";
import { QrCode, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { MemberRow } from "@/lib/queries";
import { CREW } from "@/lib/site";

export function StatusBadge({ status }: { status: string }) {
  const active = status === "active";
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 font-condensed text-xs uppercase tracking-[0.16em]">
      <span
        className={`h-2 w-2 rounded-full ${active ? "bg-verified" : "bg-muted-foreground"}`}
        aria-hidden="true"
      />
      {active ? "Active member" : "Inactive member"}
    </span>
  );
}

export function MemberPhoto({
  src,
  name,
  className = "",
}: {
  src: string | null;
  name: string;
  className?: string;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={`${name} — ${CREW.name}`}
        loading="lazy"
        className={`object-cover ${className}`}
      />
    );
  }
  return (
    <div
      className={`flex items-center justify-center bg-secondary text-muted-foreground ${className}`}
    >
      <User className="h-1/4 w-1/4" aria-hidden="true" />
    </div>
  );
}

export function MemberCard({ member }: { member: MemberRow }) {
  const role = member.roles?.name ?? "Member";
  return (
    <article className="surface-card group flex flex-col overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/5] overflow-hidden">
        <MemberPhoto
          src={member.photo_url}
          name={member.full_name}
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-card via-card/70 to-transparent p-4">
          <p className="font-condensed text-xs uppercase tracking-[0.24em] text-primary">
            {member.member_id}
          </p>
          <h3 className="font-display text-2xl leading-none text-cream">{member.full_name}</h3>
          <p className="font-condensed text-sm uppercase tracking-[0.14em] text-muted-foreground">
            {role} — {CREW.name}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <StatusBadge status={member.status} />
        {member.bio ? (
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
        ) : null}
        {member.skills.length ? (
          <div className="flex flex-wrap gap-1.5">
            {member.skills.slice(0, 4).map((skill) => (
              <Badge key={skill} variant="outline" className="font-condensed uppercase tracking-[0.1em]">
                {skill}
              </Badge>
            ))}
          </div>
        ) : null}
        <div className="mt-auto flex flex-wrap gap-2">
          <Button asChild size="sm">
            <Link to="/members/$slug" params={{ slug: member.slug }}>
              View profile
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link to="/verify/$memberId" params={{ memberId: member.member_id }}>
              <QrCode /> Verify
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
