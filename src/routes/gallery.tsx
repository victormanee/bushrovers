import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import crew from "@/assets/crew-image.jpg";
import { EmptyState, PageHero, Section } from "@/components/page-parts";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { fetchGallery } from "@/lib/queries";
import { GALLERY_CATEGORIES } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Bush Rovers in the Field" },
      {
        name: "description",
        content:
          "Photographs from Bush Rovers adventures, camps, community service, competitions, training and crew events.",
      },
      { property: "og:title", content: "Bush Rovers Gallery" },
      {
        property: "og:description",
        content: "Photographs from crew adventures, camps, service projects, competitions and training.",
      },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const gallery = useQuery({ queryKey: ["gallery"], queryFn: fetchGallery });
  const [category, setCategory] = useState("all");
  const [active, setActive] = useState<string | null>(null);

  const items = useMemo(
    () => (gallery.data ?? []).filter((item) => (category === "all" ? true : item.category === category)),
    [gallery.data, category],
  );

  const activeItem = items.find((item) => item.id === active) ?? null;

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Frames from the trail"
        lead="Moments from the crew's adventures, camps, service projects and competitions."
        image={crew}
      />

      <Section>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant={category === "all" ? "default" : "outline"}
            onClick={() => setCategory("all")}
          >
            All
          </Button>
          {GALLERY_CATEGORIES.map((name) => (
            <Button
              key={name}
              size="sm"
              variant={category === name ? "default" : "outline"}
              onClick={() => setCategory(name)}
            >
              {name}
            </Button>
          ))}
        </div>

        <div className="mt-10">
          {items.length === 0 ? (
            <EmptyState
              message={gallery.isLoading ? "Loading the gallery…" : "No photographs in this category yet."}
            />
          ) : (
            <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(item.id)}
                  className="surface-card mb-4 block w-full overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <img
                    src={item.image_url}
                    alt={item.title ?? item.category}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </Section>

      <Dialog open={Boolean(activeItem)} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent
          className="max-w-4xl border-border bg-card p-2 sm:p-3"
        >
          <DialogTitle className="sr-only">{activeItem?.title ?? "Gallery image"}</DialogTitle>
          {activeItem ? (
            <>
              <img
                src={activeItem.image_url}
                alt={activeItem.title ?? activeItem.category}
                className="max-h-[75vh] w-full rounded-md object-contain"
              />
              <div className="flex items-start justify-between gap-4 px-2 py-3">
                <div>
                  <p className="eyebrow">{activeItem.category}</p>
                  {activeItem.title ? (
                    <h2 className="mt-1 font-display text-xl text-cream">{activeItem.title}</h2>
                  ) : null}
                  {activeItem.caption ? (
                    <p className="mt-1 text-sm text-muted-foreground">{activeItem.caption}</p>
                  ) : null}
                </div>
                <Button variant="ghost" size="icon" onClick={() => setActive(null)} aria-label="Close">
                  <X />
                </Button>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
