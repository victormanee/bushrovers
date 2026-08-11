import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Flame, HandHeart, Mountain, Sprout, Users } from "lucide-react";
import forest from "@/assets/forest-trail.jpg";
import { PageHero, Section } from "@/components/page-parts";
import { Button } from "@/components/ui/button";
import { CREW, PILLARS } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Bush Rovers — Adventure, Service, Leadership" },
      {
        name: "description",
        content:
          "Who the Bush Rovers are: a Rover Scout crew developing leadership, resilience and service through adventure in the African wilderness.",
      },
      { property: "og:title", content: "About Bush Rovers" },
      {
        property: "og:description",
        content:
          "A Rover Scout crew developing leadership, resilience and service through adventure.",
      },
    ],
  }),
  component: About,
});

const ICONS = { mountain: Mountain, "hand-heart": HandHeart, compass: Compass, flame: Flame, users: Users, sprout: Sprout };

const MEANING = [
  {
    title: "Through the Bush",
    body: "The bush is the trail, the thicket, the long climb and the unmarked path. It is every real obstacle that stands between a Rover and the person they are becoming.",
  },
  {
    title: "Beyond the Impossible",
    body: "Beyond is what happens when a crew refuses to accept the limits placed before it — the summit reached, the project delivered, the community served.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A Rover crew built for the trail ahead"
        lead={CREW.intro}
        image={forest}
      />

      <Section eyebrow="Our motto" title={`\u201c${CREW.motto}\u201d`}>
        <div className="grid gap-6 md:grid-cols-2">
          {MEANING.map((item) => (
            <article key={item.title} className="surface-card rounded-lg p-7">
              <h3 className="font-display text-2xl text-cream">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What we stand for"
        title="Six pillars of the crew"
        lead="Everything we plan, climb, build and serve comes back to these."
        className="border-t border-border"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = ICONS[pillar.icon];
            return (
              <article key={pillar.title} className="surface-card rounded-lg p-6">
                <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="mt-5 font-display text-2xl text-cream">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="The Rover programme"
        title="Personal development through adventure"
        className="border-t border-border"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="surface-card rounded-lg p-7">
            <h3 className="font-display text-xl text-cream">Who can join</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Bush Rovers is a Rover / Jasiri Scout crew. Membership details, age range and
              requirements: [MEMBERSHIP REQUIREMENTS].
            </p>
          </div>
          <div className="surface-card rounded-lg p-7">
            <h3 className="font-display text-xl text-cream">Where we operate</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              The crew is based in [CREW LOCATION] and runs activities across [OPERATING AREA].
            </p>
          </div>
          <div className="surface-card rounded-lg p-7">
            <h3 className="font-display text-xl text-cream">Our commitment</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Environmental responsibility, service to community and the development of leaders who
              go beyond what is expected of them.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/contact">Join our journey</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/story">Read our story</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
