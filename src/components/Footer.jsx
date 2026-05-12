import { contact, socialLinks } from "../data/siteData.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white">Drone Films</p>
          <p className="mt-3 text-sm text-mist/45">
            Cinematic aerial filmmaking with FIMI X8 SE 4K.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {socialLinks.slice(0, 3).map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mist/70 transition hover:border-gold/40 hover:text-gold"
                aria-label={link.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
        <p className="text-sm text-mist/40">
          © {new Date().getFullYear()} Drone Films. {contact.email}
        </p>
      </div>
    </footer>
  );
}
