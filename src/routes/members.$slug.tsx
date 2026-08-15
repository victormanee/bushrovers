import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import victorManeeCard from "@/assets/victor-manee-card.png";
import angelKabiCard from "@/assets/amgel-kabi-card.png";
import johnKibaraCard from "@/assets/john-kibara-card.png";
import placeholderCard from "@/assets/placeholder-card.png";

// Note: asset discovery is performed client-side in `useEffect` to avoid SSR errors
import { getPublicMemberBySlug } from "@/lib/public.functions";
import { CREW } from "@/lib/site";

const memberCardImages: Record<string, string> = {
  "victor-manee": victorManeeCard,
  "angel-kabi": angelKabiCard,
  "john-kibara": johnKibaraCard,
  // discoveredCards will be preferred at runtime for any matching slug
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
  // Prefer any explicit static mappings first, then discovered assets loaded client-side, then public folder, then placeholder on error
  const initialUrl = memberCardImages[member!.slug] ?? `/assets/members/${member!.slug}.png`;
  const [src, setSrc] = useState<string>(initialUrl);

  // Client-only: discover any `*-card.*` assets in src/assets and prefer them
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const modules: Record<string, any> = (import.meta as any).globEager(
        "/src/assets/*-card.{png,jpg,jpeg,webp}"
      );
      for (const p in modules) {
        const m = modules[p];
        const match = p.match(/\/([^\/]+)-card\.(png|jpe?g|webp)$/i);
        if (!match) continue;
        let slug = match[1] as string;
        const url = (m && (m.default ?? m)) as string;
        // normalize common typo
        if (slug.startsWith("amgel-")) slug = slug.replace(/^amgel-/, "angel-");
        if (slug === member!.slug) {
          setSrc(url);
          return;
        }
      }
    } catch (e) {
      // ignore discovery errors on client
      // console.debug("card discovery failed", e);
    }
  }, [member?.slug]);

  return (
    <div className="min-h-screen bg-forest-deep text-cream">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 py-10 text-center">
        <h1 className="sr-only">{member!.full_name} membership card</h1>

        <div className="w-full max-w-5xl rounded-[2rem] border border-border bg-background/85 p-6 shadow-[0_32px_80px_rgba(0,0,0,0.32)] backdrop-blur-md">
          <img
            src={src}
            alt={`${member!.full_name} membership card`}
            onError={() => {
              if (src !== placeholderCard) setSrc(placeholderCard);
            }}
            className="mx-auto max-h-[75vh] w-full max-w-full rounded-[1.5rem] object-contain"
          />
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
