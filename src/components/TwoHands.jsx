import { Zap } from "lucide-react";
import { motion } from "framer-motion";
import { twoHandsSteps } from "../data/siteData.js";

export default function TwoHands() {
  return (
    <section id="two-hands" className="relative overflow-hidden bg-ink px-5 py-24 md:px-8 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(200,169,106,0.12),transparent_34%),radial-gradient(circle_at_88%_22%,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-gold"
          >
            <Zap size={15} />
            performance rara
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl"
          >
            Desenhando com as duas maos ao mesmo tempo.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-mist/[.64]"
          >
            Uma experiencia artistica rara feita ao vivo.
          </motion.p>

          <div className="mt-10 space-y-3">
            {twoHandsSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.045] p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-black">
                  {index + 1}
                </span>
                <span className="text-mist/[.76]">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="grid min-h-[580px] grid-cols-2 gap-4"
        >
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=84"
              alt="Processo de desenho em sketchbook"
              loading="lazy"
              className="h-full w-full object-cover grayscale"
            />
          </div>
          <div className="relative mt-16 overflow-hidden rounded-lg border border-gold/[0.24] bg-white/[0.04]">
            <img
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=900&q=84"
              alt="Ferramentas de desenho e linhas de sketch"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/[0.18]" />
          </div>
          <div className="col-span-2 -mt-10 rounded-lg border border-white/10 bg-black/70 p-6 shadow-glow backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-gold">efeito viral</p>
            <p className="mt-3 text-2xl font-semibold leading-snug text-white">
              O publico nao ve apenas o resultado. Ele assiste a habilidade acontecendo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
