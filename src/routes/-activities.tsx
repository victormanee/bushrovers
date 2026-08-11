/*
 * DISABLED ROUTE: this page is intentionally inactive for now.
 * Keep the file in place so it can be re-enabled later without deleting it.
 */

/*
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { CalendarDays, MapPin, Users } from "lucide-react";
import forest from "@/assets/forest-trail.jpg";
import { EmptyState, PageHero, Section } from "@/components/page-parts";
import { fetchActivities } from "@/lib/queries";
import { formatDate } from "@/lib/site";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "The Bush Rovers Experience — Activities & Expeditions" },
      {
        name: "description",
        content:
          "Hiking, camping, expeditions, first aid, conservation, leadership training and outdoor skills — the Bush Rovers activity programme.",
      },
      { property: "og:title", content: "The Bush Rovers Experience" },
      {
        property: "og:description",
        content: "Hikes, camps, expeditions, training and service — the Bush Rovers activity programme.",
      },
    ],
  }),
  component: Activities,
});

function Activities() {
  const activities = useQuery({ queryKey: ["activities"], queryFn: fetchActivities });
  const items = activities.data ?? [];

  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="The Bush Rovers experience"
        lead="From ridge trails at first light to service in our own neighbourhoods — this is how the crew spends its time."
        image={forest}
      />

      <Section>
        {items.length === 0 && !activities.isLoading ? (
          <EmptyState message="The activity programme is being published." />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((activity) => (
              <article key={activity.id} className="surface-card overflow-hidden rounded-lg">
                {activity.photo_url ? (
                  <img
                    src={activity.photo_url}
                    alt={activity.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                ) : (
                  <div className="aspect-[4/3] w-full bg-secondary topo-texture" aria-hidden="true" />
                )}
                <div className="p-6">
                  {activity.category ? (
                    <p className="eyebrow">{activity.category}</p>
                  ) : null}
                  <h2 className="mt-2 font-display text-2xl text-cream">{activity.title}</h2>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-condensed text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {activity.event_date ? (
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5 text-primary" />
                        {formatDate(activity.event_date)}
                      </span>
                    ) : null}
                    {activity.location ? (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-primary" /> {activity.location}
                      </span>
                    ) : null}
                  </div>
                  {activity.description ? (
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {activity.description}
                    </p>
                  ) : null}
*/
                  {activity.participants?.length ? (
                    <p className="mt-4 inline-flex items-center gap-2 font-condensed text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      <Users className="h-3.5 w-3.5 text-primary" />
                      {activity.participants.join(", ")}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
