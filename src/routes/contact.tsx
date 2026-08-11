import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import campfire from "@/assets/campfire.jpg";
import { PageHero, Section } from "@/components/page-parts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/client";
import { fetchSettings } from "@/lib/queries";
import { CREW } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Bush Rovers — Join Our Journey" },
      {
        name: "description",
        content:
          "Contact the Bush Rovers crew about membership, partnerships, service projects or invitations to activities.",
      },
      { property: "og:title", content: "Contact Bush Rovers" },
      {
        property: "og:description",
        content: "Reach the crew about membership, partnerships or community service projects.",
      },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().max(150).optional(),
  message: z.string().trim().min(1, "Please write a message").max(1500),
});

function Contact() {
  const settings = useQuery({ queryKey: ["settings"], queryFn: fetchSettings });
  const [sending, setSending] = useState(false);
  const s = settings.data ?? {};

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSending(true);
    const { error } = await supabase.from("contact_messages").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      subject: parsed.data.subject ?? null,
      message: parsed.data.message,
    });
    setSending(false);
    if (error) {
      toast.error("Message could not be sent. Please try again.");
      return;
    }
    toast.success("Message sent. The crew will be in touch.");
    event.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Join our journey"
        lead={`${CREW.name} — “${CREW.motto}”`}
        image={campfire}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <div className="surface-card rounded-lg p-6">
              <p className="eyebrow">Reach the crew</p>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" /> {s["contact_email"] || "[EMAIL ADDRESS]"}
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" /> {s["contact_phone"] || "[PHONE NUMBER]"}
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary" /> {s["location"] || "[CREW LOCATION]"}
                </li>
              </ul>
            </div>
            <div className="surface-card rounded-lg p-6">
              <p className="eyebrow">Social</p>
              <ul className="mt-4 space-y-2">
                {(["instagram", "facebook", "twitter", "whatsapp"] as const).map((key) =>
                  s[key] ? (
                    <li key={key}>
                      <a
                        href={s[key]}
                        target="_blank"
                        rel="noreferrer"
                        className="font-condensed text-sm uppercase tracking-[0.16em] text-primary"
                      >
                        {key}
                      </a>
                    </li>
                  ) : (
                    <li
                      key={key}
                      className="font-condensed text-sm uppercase tracking-[0.16em] text-muted-foreground"
                    >
                      {key} — [LINK]
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          <form onSubmit={onSubmit} className="surface-card space-y-4 rounded-lg p-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" maxLength={100} required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" maxLength={255} required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" maxLength={150} className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={6} maxLength={1500} required className="mt-1.5" />
            </div>
            <Button type="submit" size="lg" disabled={sending}>
              {sending ? "Sending…" : "Send message"}
            </Button>
          </form>
        </div>
      </Section>
    </>
  );
}
