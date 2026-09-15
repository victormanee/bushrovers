import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, ShieldCheck } from "lucide-react";
import logo from "@/assets/bush-rovers-logo.png";
import { CREW, NAV_LINKS } from "@/lib/site";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled ? "border-border bg-background/95 backdrop-blur" : "border-transparent bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 md:h-20 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt={`${CREW.name} crew emblem`} width={48} height={48} className="h-10 w-10 md:h-12 md:w-12" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-widest text-cream md:text-2xl">
              {CREW.nameUpper}
            </span>
            <span className="font-condensed text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
              Scout Rover Crew
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.slice(0, 10).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-sm px-2.5 py-2 font-condensed text-sm uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <Link to="/verify">
              <ShieldCheck /> Verify member
            </Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Open navigation">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm border-border bg-card">
              <div className="mt-8 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 font-condensed text-lg uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-secondary hover:text-primary"
                    activeProps={{ className: "text-primary" }}
                    activeOptions={{ exact: link.to === "/" }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/admin"
                  onClick={() => setOpen(false)}
                  className="mt-4 rounded-md px-3 py-3 font-condensed text-sm uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Member Portal
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
