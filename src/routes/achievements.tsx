import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Trophy } from "lucide-react";
import hero from "@/assets/hero-ridge.png";
import { EmptyState, PageHero, Section } from "@/components/page-parts";
import { Button } from "@/components/ui/button";
import { fetchAchievements } from "@/lib/queries";
import { ACHIEVEMENT_CATEGORIES, formatDate } from "@/lib/site";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Bush Rovers Achievements — Competitions, Service & Expeditions" },
      {
        name: "description",
        content:
          "Bush Rovers achievements across competitions, community service, expeditions, conservation, training and leadership.",
      },
      { property: "og:title", content: "Bush Rovers Achievements" },
      {
        property: "og:description",
        content: "Competitions, service, expeditions, conservation, training and leadership milestones.",
      },
    ],
  }),
  component: Achievements,
});

function Achievements() {
  const achievements = useQuery({ queryKey: ["achievements"], queryFn: fetchAchievements });
  const [category, setCategory] = useState("all");

  const items = useMemo(
    () =>
      (achievements.data ?? []).filter((item) =>
        category === "all" ? true : item.category === category,
      ),
    [achievements.data, category],
  );

  return (
    <>
      <PageHero
        eyebrow="Achievements"
        title="Milestones on the trail"
        lead="What the crew has earned, built and won — recorded as it happens."
        image={hero}
      />

      <Section>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant={category === "all" ? "default" : "outline"}
            onClick={() => setCategory("all")}
          >
            All
          </Button>
          {ACHIEVEMENT_CATEGORIES.map((name) => (
            <Button
              key={name}
              size="sm"
              variant={category === name ? "default" : "outline"}
              onClick={() => setCategory(name)}
            >
              {name}
            </Button>
          ))}
        </div>

        <div className="mt-10">
          {items.length === 0 ? (
            <EmptyState
              message={
                achievements.isLoading ? "Loading achievements…" : "No achievements recorded in this category yet."
              }
            />
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {items.map((item) => (
                <article key={item.id} className="surface-card overflow-hidden rounded-lg">
                  {item.photo_url ? (
                    <img
                      src={item.photo_url}
                      alt={item.title}
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover"
                    />
                  ) : null}
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <Trophy className="h-5 w-5 text-primary" aria-hidden="true" />
                      <p className="font-condensed text-sm uppercase tracking-[0.2em] text-primary">
                        {item.year_label || formatDate(item.event_date) || "[DATE]"}
                      </p>
                    </div>
                    <h2 className="mt-3 font-display text-2xl text-cream">{item.title}</h2>
                    {item.category ? (
                      <p className="mt-1 font-condensed text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {item.category}
                      </p>
                    ) : null}
                    {item.description ? (
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
