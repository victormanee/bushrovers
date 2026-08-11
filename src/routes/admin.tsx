import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { PageHero, Section } from "@/components/page-parts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MemberCard } from "@/components/member-card";
import { supabase } from "@/integrations/client";
import { fetchMembers } from "@/lib/queries";
import hero from "@/assets/hero-ridge.png";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Crew Admin — Bush Rovers" },
      { name: "description", content: "Administrator access for managing the Bush Rovers crew register." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Crew Admin — Bush Rovers" },
      { property: "og:description", content: "Administrator access for the Bush Rovers crew register." },
    ],
  }),
  component: Admin,
});

function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const members = useQuery({ queryKey: ["members"], queryFn: fetchMembers, enabled: signedIn });

  useEffect(() => {
    void supabase.auth.getSession().then(({ data }) => setSignedIn(Boolean(data.session)));
    const { data } = supabase.auth.onAuthStateChange((_event, session) =>
      setSignedIn(Boolean(session)),
    );
    return () => data.subscription.unsubscribe();
  }, []);

  async function signIn(event: React.FormEvent) {
    event.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) toast.error(error.message);
  }

  return (
    <>
      <PageHero eyebrow="Crew admin" title="Manage the register" image={hero} />
      <Section>
        {!signedIn ? (
          <form onSubmit={signIn} className="surface-card max-w-md space-y-4 rounded-lg p-6">
            <div>
              <Label htmlFor="admin-email">Email</Label>
              <Input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5"
                required
              />
            </div>
            <div>
              <Label htmlFor="admin-password">Password</Label>
              <Input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1.5"
                required
              />
            </div>
            <Button type="submit" size="lg">
              Sign in
            </Button>
          </form>
        ) : (
          <>
            <div className="flex items-center justify-between gap-4">
              <p className="eyebrow">Crew register · {(members.data ?? []).length} members</p>
              <Button
                variant="outline"
                onClick={() => {
                  void supabase.auth.signOut();
                }}
              >
                Sign out
              </Button>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {(members.data ?? []).map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </>
        )}
      </Section>
    </>
  );
}
