/*
 * DISABLED ROUTE: this page is intentionally inactive for now.
 * Keep the file in place so it can be re-enabled later without deleting it.
 */

/*
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { MapPin, Users } from "lucide-react";
import campfire from "@/assets/campfire.jpg";
import { EmptyState, PageHero, Section } from "@/components/page-parts";
import { fetchHistory } from "@/lib/queries";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "The Bush Rovers Story — How the Crew Began" },
      {
        name: "description",
        content:
          "The Bush Rovers story: how the crew began, when it was formed, its first adventure, its first service project and where it stands today.",
      },
      { property: "og:title", content: "The Bush Rovers Story" },
      {
        property: "og:description",
        content: "How the crew began, its first adventure, its first service project and where it stands today.",
      },
    ],
  }),
  component: Story,
});

function Story() {
  const history = useQuery({ queryKey: ["history"], queryFn: fetchHistory });
  const entries = history.data ?? [];

  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="The Bush Rovers story"
        lead="Every crew starts somewhere. This is the trail we have walked so far."
        image={campfire}
      />

      <Section>
        {entries.length === 0 && !history.isLoading ? (
          <EmptyState message="The crew timeline is being written." />
        ) : (
          <ol className="relative ml-3 border-l border-border pl-8 md:ml-6 md:pl-12">
            {entries.map((entry) => (
              <li key={entry.id} className="relative pb-14 last:pb-0">
                <span
                  className="absolute -left-[2.35rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background md:-left-[3.4rem]"
                  aria-hidden="true"
                />
                <p className="font-condensed text-sm uppercase tracking-[0.24em] text-primary">
                  {entry.date_label}
                </p>
                <h2 className="mt-2 font-display text-3xl text-cream md:text-4xl">{entry.title}</h2>
                {entry.description ? (
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                    {entry.description}
                  </p>
                ) : null}

                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-condensed text-sm uppercase tracking-[0.12em] text-muted-foreground">
                  {entry.location ? (
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> {entry.location}
                    </span>
                  ) : null}
                  {entry.participants?.length ? (
                    <span className="inline-flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" /> {entry.participants.join(", ")}
                    </span>
                  ) : null}
                </div>

                {entry.photo_url ? (
                  <img
                    src={entry.photo_url}
                    alt={entry.title}
                    loading="lazy"
                    className="surface-card mt-6 max-w-2xl rounded-lg object-cover"
                  />
                ) : null}
                {entry.video_url ? (
                  <a
                    href={entry.video_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block font-condensed text-sm uppercase tracking-[0.2em] text-primary"
                  >
                    Watch the film
                  </a>
                ) : null}
              </li>
            ))}
          </ol>
        )}
      </Section>
    </>
  );
}
*/
