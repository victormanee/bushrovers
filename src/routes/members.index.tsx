import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import hero from "@/assets/hero-ridge.png";
import { EmptyState, PageHero, Section } from "@/components/page-parts";
import { MemberCard } from "@/components/member-card";
import { Input } from "@/components/ui/input";
import { fetchMembers, fetchRoles } from "@/lib/queries";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/members/")({
  head: () => ({
    meta: [
      { title: "Meet the Bush Rovers — Crew Member Directory" },
      {
        name: "description",
        content:
          "The Bush Rovers member directory. Search Rovers by name, member ID or crew role and open a verified member profile.",
      },
      { property: "og:title", content: "Meet the Bush Rovers" },
      {
        property: "og:description",
        content: "Search the crew directory by name, member ID or role and open a verified profile.",
      },
    ],
  }),
  component: MembersPage,
});

function MembersPage() {
  const members = useQuery({ queryKey: ["members"], queryFn: fetchMembers });
  const roles = useQuery({ queryKey: ["roles"], queryFn: fetchRoles });
  const [query, setQuery] = useState("");
  const [role, setRole] = useState<string>("all");
  const [gender, setGender] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (members.data ?? [])
      .filter((m) => m.is_published)
      .filter((m) => (role === "all" ? true : m.roles?.name === role))
      .filter((m) => (gender === "all" ? true : (m.gender ?? "").toLowerCase() === gender))
      .filter((m) =>
        !q
          ? true
          : m.full_name.toLowerCase().includes(q) ||
            m.member_id.toLowerCase().includes(q) ||
            (m.roles?.name ?? "").toLowerCase().includes(q),
      );
  }, [members.data, query, role, gender]);


  const roleNames = useMemo(() => {
    const used = new Set((members.data ?? []).map((m) => m.roles?.name).filter(Boolean));
    return (roles.data ?? []).filter((r) => used.has(r.name)).map((r) => r.name);
  }, [members.data, roles.data]);

  return (
    <>
      <PageHero
        eyebrow="Our members"
        title="Meet the Bush Rovers"
        lead="Every Rover below carries a Bush Rovers membership card with a unique QR code that opens their verified profile."
        image={hero}
      />

      <Section>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value.slice(0, 80))}
              placeholder="Search by name, member ID or role"
              aria-label="Search members"
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={role === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setRole("all")}
            >
              All
            </Button>
            {roleNames.map((name) => (
              <Button
                key={name}
                variant={role === name ? "default" : "outline"}
                size="sm"
                onClick={() => setRole(name)}
              >
                {name}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={gender === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setGender("all")}
            >
              All genders
            </Button>
            <Button
              variant={gender === "male" ? "default" : "outline"}
              size="sm"
              onClick={() => setGender("male")}
            >
              Male
            </Button>
            <Button
              variant={gender === "female" ? "default" : "outline"}
              size="sm"
              onClick={() => setGender("female")}
            >
              Female
            </Button>
            </div>
        </div>

        <p className="mt-6 font-condensed text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "Rover" : "Rovers"}
        </p>

        <div className="mt-6">
          {filtered.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            <EmptyState
              message={members.isLoading ? "Loading the crew register…" : "No Rovers match that search."}
            />
          )}
        </div>
      </Section>
    </>
  );
}
