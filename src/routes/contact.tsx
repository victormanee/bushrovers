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
        content: " about membership, partnerships or community service projects.",
      },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid ").max(255),
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
              <p className="eyebrow"></p>
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

          <div className="surface-card rounded-lg p-6">
            <div className="flex flex-col items-start gap-4">
              <h3 className="font-display text-2xl text-cream">Want to Join Bush Rovers?</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Interested in becoming part of the Bush Rovers Crew? Contact our crew representative on
                WhatsApp to learn more about joining.
              </p>
              <div className="w-full">
                <Button asChild size="lg" className="w-full">
                  <a
                    href="https://wa.me/254716802450?text=Hello%20Bush%20Rovers%2C%20I%20am%20interested%20in%20joining%20the%20crew.%20I%20would%20like%20to%20know%20more%20about%20how%20I%20can%20join."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-md px-4 py-3 text-sm font-medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
                      <path d="M20.52 3.48A11.83 11.83 0 0 0 12 .5C6.21.5 1.5 5.21 1.5 11c0 1.95.51 3.86 1.48 5.56L.5 23.5l6.97-1.83A11.82 11.82 0 0 0 12 22.5c5.79 0 10.5-4.71 10.5-10.5 0-2.84-1.08-5.51-3.98-7.52zM12 20c-1.43 0-2.83-.36-4.06-1.04l-.29-.17-4.14 1.09 1.11-3.98-.18-.31A8 8 0 1 1 20 12c0 4.42-3.58 8-8 8z" />
                      <path d="M17.2 14.2c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14-.18.28-.7.9-.86 1.09-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.22-1.37-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.04-.34-.02-.48-.07-.14-.64-1.54-.88-2.12-.23-.56-.47-.48-.64-.49-.16 0-.34-.01-.52-.01s-.48.07-.73.34c-.26.27-.99.96-.99 2.34 0 1.38 1.01 2.72 1.15 2.91.14.18 1.98 3.02 4.8 4.24 1.16.5 2.07.8 2.78 1.03 1.17.36 2.24.31 3.09.19.94-.13 1.64-.66 1.88-1.3.24-.64.24-1.19.17-1.3-.07-.1-.26-.16-.55-.3z" />
                    </svg>
                    Chat with us on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
