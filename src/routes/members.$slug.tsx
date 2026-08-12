import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import victorManeeCard from "@/assets/victor-manee-card.png";
import placeholderCard from "@/assets/placeholder-card.png";
import { getPublicMemberBySlug } from "@/lib/public.functions";
import { CREW } from "@/lib/site";

const memberCardImages: Record<string, string> = {
  "victor-manee": victorManeeCard,
  "kelvin-njoroge": placeholderCard,
  "john-kibara": placeholderCard,
  "andreane-kaniaru": placeholderCard,
  "evans-maina": placeholderCard,
  "solomon": placeholderCard,
  "john": placeholderCard,
  "antony-ngui": placeholderCard,
  "angel-kabi": placeholderCard,
  "ashley-mwende": placeholderCard,
  "ngumi": placeholderCard,
  "david-karanja": placeholderCard,
};

export const Route = createFileRoute("/members/$slug")({
  loader: async ({ params }) => {
    const data = await getPublicMemberBySlug({ data: { slug: params.slug } });
    if (!data.member) throw notFound();
    return data;
  },
  head: ({ loaderData }) => {
    if (!loaderData?.member) {
      return {
        meta: [{ title: "Member not found — Bush Rovers" }, { name: "robots", content: "noindex" }],
      };
    }
    const m = loaderData.member;
    return {
      meta: [
        { title: `${m.full_name} membership card — Bush Rovers` },
        {
          name: "description",
          content: `${m.full_name}'s official Bush Rovers membership card.`,
        },
      ],
    };
  },
  component: MemberProfile,
  notFoundComponent: MemberNotFound,
});

function MemberNotFound() {
  return (
    <div className="min-h-screen bg-forest-deep px-4 py-20 text-center text-cream">
      <div className="mx-auto max-w-xl rounded-[2rem] border border-border bg-background/90 p-10 shadow-xl shadow-black/20">
        <h1 className="font-display text-3xl text-cream">Member not found</h1>
        <p className="mt-4 text-muted-foreground">
          The requested membership card is unavailable. Please return to the member directory.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link to="/members">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Members
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function MemberProfile() {
  const { member } = Route.useLoaderData();
  const [hasImageError, setHasImageError] = useState(false);
  const cardUrl = memberCardImages[member!.slug] ?? `/assets/members/${member!.slug}.png`;

  return (
    <div className="min-h-screen bg-forest-deep text-cream">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 py-10 text-center">
        <h1 className="sr-only">{member!.full_name} membership card</h1>

        <div className="w-full max-w-5xl rounded-[2rem] border border-border bg-background/85 p-6 shadow-[0_32px_80px_rgba(0,0,0,0.32)] backdrop-blur-md">
          {hasImageError ? (
            <div className="flex min-h-[40vh] items-center justify-center rounded-[1.5rem] border border-dashed border-muted-foreground bg-secondary/20 p-10">
              <p className="text-center text-muted-foreground">
                Membership card image not found.
                <br />Add <span className="font-mono text-cream">/assets/members/{member!.slug}.png</span> in public.
              </p>
            </div>
          ) : (
            <img
              src={cardUrl}
              alt={`${member!.full_name} membership card`}
              onError={() => setHasImageError(true)}
              className="mx-auto max-h-[75vh] w-full max-w-full rounded-[1.5rem] object-contain"
            />
          )}
        </div>

        <div className="mt-6 flex justify-center">
          <Button asChild>
            <Link to="/members">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Members
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
