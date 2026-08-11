import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import hero from "@/assets/hero-ridge.png";
import { PageHero, Section } from "@/components/page-parts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/verify/")({
  head: () => ({
    meta: [
      { title: "Member Verification — Bush Rovers" },
      {
        name: "description",
        content:
          "Verify a Bush Rovers membership card. Enter the member ID printed on the card, for example BR-2026-001.",
      },
      { property: "og:title", content: "Bush Rovers Member Verification" },
      {
        property: "og:description",
        content: "Enter the member ID printed on a Bush Rovers card to confirm membership.",
      },
    ],
  }),
  component: VerifyIndex,
});

function VerifyIndex() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  return (
    <>
      <PageHero
        eyebrow="Member verification"
        title="Verify a Bush Rovers card"
        lead="Scan the QR code on the card, or enter the member ID printed on the front."
        image={hero}
      />
      <Section>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const memberId = value.trim().toUpperCase();
            if (!memberId) return;
            void navigate({ to: "/verify/$memberId", params: { memberId } });
          }}
          className="surface-card max-w-lg space-y-4 rounded-lg p-6"
        >
          <Label htmlFor="member-id">Member ID</Label>
          <Input
            id="member-id"
            value={value}
            onChange={(event) => setValue(event.target.value.slice(0, 40))}
            placeholder="BR-2026-001"
            className="font-condensed uppercase tracking-[0.2em]"
          />
          <Button type="submit" size="lg">
            <ShieldCheck /> Verify membership
          </Button>
        </form>
      </Section>
    </>
  );
}
