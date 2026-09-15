import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle2, XCircle } from "lucide-react";
import hero from "@/assets/hero-ridge.png";
import { PageHero, Section } from "@/components/page-parts";
import { Button } from "@/components/ui/button";
import { getPublicMemberByMemberId } from "@/lib/public.functions";
import { formatDate } from "@/lib/site";

export const Route = createFileRoute("/verify/$memberId")({
  head: () => ({
    meta: [
      { title: "Verification Result — Bush Rovers Membership" },
      {
        name: "description",
        content: "Verification result for a Bush Rovers membership card scanned or entered by member ID.",
      },
      { property: "og:title", content: "Bush Rovers Membership Verification" },
      { property: "og:description", content: "Confirm whether a Bush Rovers membership card is valid." },
    ],
  }),
  component: VerifyMemberPage,
});

function VerifyMemberPage() {
  const { memberId } = Route.useParams();
  const result = useQuery({
    queryKey: ["verify", memberId],
    queryFn: () => getPublicMemberByMemberId({ data: { memberId } }),
  });

  const member = result.data?.member ?? null;
  const active = member?.status === "Active";

  return (
    <>
      <PageHero eyebrow="Verification" title={memberId.toUpperCase()} image={hero} />
      <Section>
        <div className="surface-card mx-auto max-w-xl rounded-lg p-8 text-center">
          {result.isLoading ? (
            <p className="text-muted-foreground">Checking the register…</p>
          ) : member ? (
            <>
              {member.photo_url ? (
                <img
                  src={member.photo_url}
                  alt={member.full_name}
                  className="mx-auto h-28 w-28 rounded-full object-cover"
                />
              ) : null}
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-condensed text-xs uppercase tracking-[0.2em] text-primary">
                <CheckCircle2 className="h-4 w-4" />
                {active ? "Verified active member" : `Verified — ${member.status}`}
              </div>
              <h2 className="mt-4 font-display text-3xl text-cream">{member.full_name}</h2>
              <p className="mt-1 font-condensed uppercase tracking-[0.18em] text-muted-foreground">
                {member.roles?.name ?? "Rover"} · {member.member_id}
              </p>
              {member.join_date ? (
                <p className="mt-2 text-sm text-muted-foreground">
                  Member since {formatDate(member.join_date)}
                </p>
              ) : null}
              <Button asChild size="lg" className="mt-6">
                <Link to="/members/$slug" params={{ slug: member.slug }}>
                  View full profile
                </Link>
              </Button>
            </>
          ) : (
            <>
              <div className="inline-flex items-center gap-2 rounded-full border border-destructive/40 bg-destructive/10 px-4 py-1.5 font-condensed text-xs uppercase tracking-[0.2em] text-destructive">
                <XCircle className="h-4 w-4" /> Not found
              </div>
              <h2 className="mt-4 font-display text-3xl text-cream">No matching member</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                This ID is not on the Bush Rovers register. Check the ID on the card and try again.
              </p>
              <Button asChild variant="outline" className="mt-6">
                <Link to="/verify">Try another ID</Link>
              </Button>
            </>
          )}
        </div>
      </Section>
    </>
  );
}
