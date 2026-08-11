import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { CalendarDays, MapPin, Sprout } from "lucide-react";
import campfire from "@/assets/campfire.jpg";
import { EmptyState, PageHero, Section } from "@/components/page-parts";
import { fetchProjects, fetchStats } from "@/lib/queries";
import { formatDate } from "@/lib/site";

export const Route = createFileRoute("/community-service")({
  head: () => ({
    meta: [
      { title: "Community Service — Bush Rovers Projects & Impact" },
      {
        name: "description",
        content:
          "Tree planting, cleanups, mentorship, awareness and disaster response: how Bush Rovers serve their community, with measured impact.",
      },
      { property: "og:title", content: "Bush Rovers Community Service" },
      {
        property: "og:description",
        content: "Conservation, cleanups, mentorship and outreach projects with measured community impact.",
      },
    ],
  }),
  component: CommunityService,
});

function CommunityService() {
  const projects = useQuery({ queryKey: ["projects"], queryFn: fetchProjects });
  const stats = useQuery({ queryKey: ["stats"], queryFn: fetchStats });
  const items = projects.data ?? [];

  return (
    <>
      <PageHero
        eyebrow="Projects & community service"
        title="Service is the point"
        lead="A Rover crew is measured by what it leaves behind. These are the projects the crew has carried."
        image={campfire}
      />

      <section className="border-b border-border bg-forest-deep">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {(stats.data ?? []).map((stat) => (
            <div key={stat.id}>
              <p className="font-display text-4xl text-primary md:text-5xl">{stat.value}</p>
              <p className="mt-1 font-condensed text-sm uppercase tracking-[0.2em] text-cream">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Section>
        {items.length === 0 && !projects.isLoading ? (
          <EmptyState message="Community service projects will be published here." />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((project) => (
              <article key={project.id} className="surface-card overflow-hidden rounded-lg">
                {project.photo_url ? (
                  <img
                    src={project.photo_url}
                    alt={project.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                ) : null}
                <div className="p-6">
                  <Sprout className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h2 className="mt-3 font-display text-2xl text-cream">{project.title}</h2>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 font-condensed text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {project.event_date ? (
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5 text-primary" />
                        {formatDate(project.event_date)}
                      </span>
                    ) : null}
                    {project.location ? (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-primary" /> {project.location}
                      </span>
                    ) : null}
                  </div>
                  {project.impact ? <p className="mt-3 text-primary">{project.impact}</p> : null}
                  {project.description ? (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
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
