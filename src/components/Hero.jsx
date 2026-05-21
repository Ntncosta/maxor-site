import { ArrowRight, Images, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { contact, stats } from "../data/siteData.js";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 720], [0, 150]);
  const opacity = useTransform(scrollY, [0, 520], [1, 0.38]);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-ink">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=2200&q=86"
          alt="Mesa de artista com sketchbook, papeis e ferramentas de desenho"
          className="h-full w-full object-cover opacity-[0.42]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.96),rgba(5,5,5,0.74)_42%,rgba(5,5,5,0.4)),linear-gradient(180deg,rgba(5,5,5,0.38),#050505_92%)]" />
        <div className="sketch-lines absolute inset-0 opacity-35" />
      </motion.div>

      <div className="absolute right-0 top-20 hidden h-[78vh] w-[50vw] lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-full"
        >
          <div className="absolute right-20 top-10 h-[34rem] w-[28rem] rotate-3 rounded-[2rem] border border-gold/[0.28] bg-white/[0.04] shadow-glow backdrop-blur-sm" />
          <div className="absolute right-28 top-20 h-[34rem] w-[28rem] -rotate-2 overflow-hidden rounded-[2rem] border border-white/12 bg-mist p-4 shadow-2xl shadow-black/60">
            <img
              src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1100&q=84"
              alt="Arte expressiva em parede de galeria"
              className="h-full w-full rounded-[1.35rem] object-cover grayscale"
            />
            <div className="absolute inset-4 rounded-[1.35rem] bg-[radial-gradient(circle_at_50%_30%,transparent,rgba(0,0,0,0.18))]" />
          </div>
          <div className="absolute bottom-16 right-10 rounded-full border border-gold/30 bg-black/70 px-5 py-3 text-sm font-semibold text-gold backdrop-blur-xl">
            sketchbook + rua + personagem
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-16 pt-36 md:px-8 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.34em] text-gold">
            <Sparkles size={15} />
            Caricatura ao vivo premium
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[0.96] text-white md:text-7xl lg:text-8xl">
            Caricaturas feitas ao vivo com personalidade.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-mist/[.74] md:text-xl">
            Arte urbana, caricatura estilizada e desenhos feitos com as duas maos.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#gallery"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:bg-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black"
            >
              <Images size={18} />
              Ver trabalhos
            </a>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/[.18] bg-white/[.08] px-7 py-4 font-semibold text-white backdrop-blur-md transition hover:border-gold/[.45] hover:bg-white/[.14] focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Solicitar caricatura
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-14 grid max-w-2xl grid-cols-3 gap-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-white/10 bg-white/[0.065] px-4 py-4 backdrop-blur-md"
            >
              <p className="text-2xl font-semibold text-white md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-[0.68rem] uppercase tracking-[0.2em] text-mist/[.48]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
