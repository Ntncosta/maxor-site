import { ArrowRight, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { contact, heroPoster, heroVideo, stats } from "../data/siteData.js";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 180]);
  const opacity = useTransform(scrollY, [0, 520], [1, 0.35]);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Filmagem aerea cinematografica"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/[.72] via-black/[.42] to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(200,169,106,0.18),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.72),transparent_58%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-28 pt-36 md:px-8 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.38em] text-gold">
            FIMI X8 SE 4K Drone Filmmaking
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[0.98] text-white md:text-7xl lg:text-8xl">
            Cinematic Aerial Filmmaking
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-mist/[.72] md:text-xl">
            Filmagem aerea profissional e edicao cinematografica para marcas,
            imoveis, eventos e destinos que precisam ser sentidos antes de serem explicados.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:bg-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black"
            >
              Request a Quote
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/[.18] bg-white/[.08] px-7 py-4 font-semibold text-white backdrop-blur-md transition hover:border-white/[.34] hover:bg-white/[.14] focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <Play size={18} fill="currentColor" />
              Watch Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-16 grid max-w-3xl grid-cols-3 gap-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/7 px-4 py-4 backdrop-blur-md"
            >
              <p className="text-2xl font-semibold text-white md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-mist/[.46]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.1, duration: 1.6, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/50 md:flex"
      >
        Scroll
        <span className="h-12 w-px bg-gradient-to-b from-white/70 to-transparent" />
      </motion.a>
    </section>
  );
}
