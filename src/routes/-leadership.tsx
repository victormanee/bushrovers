/*
 * DISABLED ROUTE: this page is intentionally inactive for now.
 * Keep the file in place so it can be re-enabled later without deleting it.
 */

/*
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import hero from "@/assets/hero-ridge.png";
import { EmptyState, PageHero, Section } from "@/components/page-parts";
import { MemberCard } from "@/components/member-card";
import { fetchMembers } from "@/lib/queries";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — The Bush Rovers Crew Council" },
      {
        name: "description",
        content:
          "The Rovers currently leading Bush Rovers: crew leader, assistant, scribe, quartermaster, treasurer and team leaders.",
      },
      { property: "og:title", content: "Bush Rovers Leadership" },
      {
        property: "og:description",
        content: "Meet the Rovers currently leading the crew and their responsibilities.",
      },
    ],
  }),
  component: Leadership,
});

function Leadership() {
  const members = useQuery({ queryKey: ["members"], queryFn: fetchMembers });
  const leaders = (members.data ?? []).filter((m) => m.is_published && m.roles?.is_leadership);

  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Who leads the crew"
        lead="Leadership in Bush Rovers is a responsibility carried in the field, not a title on a page."
        image={hero}
      />

      <Section>
        {leaders.length === 0 ? (
          <EmptyState
            message={members.isLoading ? "Loading the crew council…" : "Crew leadership is being appointed."}
          />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((member) => (
              <div key={member.id}>
                <MemberCard member={member} />
                {member.roles?.responsibilities ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.roles.responsibilities}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
*/
