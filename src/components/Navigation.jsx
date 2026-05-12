import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { contact, navItems } from "../data/siteData.js";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 md:px-6 ${
          scrolled
            ? "border-white/[.12] bg-black/[.54] shadow-2xl shadow-black/30 backdrop-blur-xl"
            : "border-white/[.08] bg-white/[.06] backdrop-blur-md"
        }`}
        aria-label="Navegacao principal"
      >
        <a href="#top" className="group flex items-center gap-3" onClick={close}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-gold/12 text-xs font-bold text-gold">
            4K
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
            Drone Films
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-mist/70 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={contact.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gold md:inline-flex"
        >
          Orcamento
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-black/[.82] p-4 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-2xl px-4 py-3 text-mist/80 transition hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-2xl bg-white px-4 py-3 text-center font-semibold text-black"
            >
              Pedir orcamento
            </a>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
