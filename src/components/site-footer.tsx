import { Link } from "@tanstack/react-router";
import logo from "@/assets/bush-rovers-logo.png";
import { CREW, NAV_LINKS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-forest-deep">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" loading="lazy" width={56} height={56} className="h-14 w-14" />
            <span className="font-display text-2xl tracking-widest text-cream">{CREW.nameUpper}</span>
          </div>
          <p className="mt-4 max-w-sm font-condensed text-lg uppercase tracking-[0.08em] text-primary">
            {CREW.motto}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{CREW.intro}</p>
        </div>

        <div>
          <h2 className="font-condensed text-sm uppercase tracking-[0.24em] text-cream">The Crew</h2>
          <ul className="mt-4 grid grid-cols-2 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="font-condensed text-sm uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-condensed text-sm uppercase tracking-[0.24em] text-cream">Membership</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Every Bush Rover carries a membership card with a unique QR code. Scanning it opens that
            Rover&apos;s verified profile on this website.
          </p>
          <Link
            to="/verify"
            className="mt-4 inline-block font-condensed text-sm uppercase tracking-[0.2em] text-primary"
          >
            Verify a membership card
          </Link>
          <Link
            to="/admin"
            className="mt-6 block font-condensed text-xs uppercase tracking-[0.24em] text-muted-foreground"
          >
            Member Portal
          </Link>
        </div>
      </div>
      <div className="border-t border-border/60 px-4 py-6 text-center font-condensed text-xs uppercase tracking-[0.24em] text-muted-foreground">
        {CREW.nameUpper} · {new Date().getFullYear()} · We don&apos;t simply walk the trail. We go beyond it.
      </div>
    </footer>
  );
}
