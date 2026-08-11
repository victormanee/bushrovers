import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  Compass,
  Flame,
  HandHeart,
  Mountain,
  Sprout,
  Users,
  ArrowRight,
  QrCode,
} from "lucide-react";
import hero from "@/assets/hero-ridge.png";
import campfire from "@/assets/campfire.jpg";
import logo from "@/assets/bush-rovers-logo.png";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/page-parts";
import { MemberCard } from "@/components/member-card";
import { CREW, PILLARS } from "@/lib/site";
import { fetchMembers, fetchStats } from "@/lib/queries";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bush Rovers — Through the Bush, Beyond the Impossible" },
      {
        name: "description",
        content:
          "The official home of Bush Rovers, a Scout Rover crew built on adventure, service, leadership and resilience. Meet the crew and verify membership cards.",
      },
      { property: "og:title", content: "Bush Rovers — Through the Bush, Beyond the Impossible" },
      {
        property: "og:description",
        content:
          "A Scout Rover crew built on adventure, service, leadership and resilience. Meet the Rovers and explore our story.",
      },
    ],
  }),
  component: Home,
});

const ICONS = { mountain: Mountain, "hand-heart": HandHeart, compass: Compass, flame: Flame, users: Users, sprout: Sprout };

function Home() {
  const members = useQuery({ queryKey: ["members"], queryFn: fetchMembers });
  const stats = useQuery({ queryKey: ["stats"], queryFn: fetchStats });
  const featured = (members.data ?? []).filter((m) => m.is_published).slice(0, 3);

  return (
    <>
      <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden">
        <img
          src={hero}
          alt="Bush Rovers hiking a ridge trail at sunrise"
          width={1920}
          height={1088}
          className="animate-slow-zoom absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-canopy)" }} aria-hidden="true" />
        <div className="absolute inset-0 bg-background/45" aria-hidden="true" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 lg:px-8">
          <img
            src={logo}
            alt="Bush Rovers crew emblem"
            width={128}
            height={128}
            className="animate-rise h-24 w-24 md:h-32 md:w-32"
          />
          <h1 className="animate-rise mt-6 font-display text-6xl leading-[0.9] text-cream sm:text-7xl md:text-8xl lg:text-9xl">
            {CREW.nameUpper}
          </h1>
          <p className="animate-rise mt-4 max-w-2xl font-condensed text-xl uppercase tracking-[0.14em] text-primary md:text-2xl">
            &ldquo;{CREW.motto}&rdquo;
          </p>
          <p className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-cream/80 md:text-lg">
            {CREW.intro}
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/members">
                Meet the Rovers <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Join our journey</Link>
            </Button>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Who we are"
        title="We are Bush Rovers."
        lead="We are young people united by adventure, service, leadership and the determination to go beyond what seems impossible."
      >
        <p className="max-w-3xl leading-relaxed text-muted-foreground">
          Through Scouting, we challenge ourselves physically, intellectually, socially, emotionally
          and morally while developing the skills needed to become responsible leaders and active
          members of our communities.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = ICONS[pillar.icon];
            return (
              <article
                key={pillar.title}
                className="surface-card group rounded-lg p-6 transition-colors duration-300 hover:border-primary/60"
              >
                <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="mt-5 font-display text-2xl tracking-wide text-cream">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <section className="relative isolate overflow-hidden border-y border-border">
        <img
          src={campfire}
          alt=""
          loading="lazy"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-background/70" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 py-20 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {(stats.data ?? []).map((stat) => (
            <div key={stat.id}>
              <p className="font-display text-5xl text-primary md:text-6xl">{stat.value}</p>
              <p className="mt-2 font-condensed text-sm uppercase tracking-[0.2em] text-cream">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Section eyebrow="The crew" title="Meet the Bush Rovers" lead="Every Rover carries a membership card with a unique QR code that opens their verified profile.">
        {featured.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            Crew members are being added. Check back soon.
          </p>
        )}
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link to="/members">
              See the full directory <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/verify">
              <QrCode /> Verify a membership card
            </Link>
          </Button>
        </div>
      </Section>

      <section className="border-t border-border topo-texture">
        <div className="mx-auto max-w-4xl px-4 py-24 text-center lg:px-8">
          <p className="eyebrow">Our creed</p>
          <p className="mt-6 font-display text-3xl leading-tight text-cream md:text-5xl">
            We don&apos;t simply walk the trail. We go beyond it.
          </p>
          <p className="mt-6 font-condensed text-lg uppercase tracking-[0.2em] text-primary">
            {CREW.motto}
          </p>
        </div>
      </section>
    </>
  );
}
