import { motion } from "framer-motion";
import { aboutPoints } from "../data/siteData.js";
import SectionHeading from "./SectionHeading.jsx";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink px-5 py-24 md:px-8 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_24%,rgba(200,169,106,0.13),transparent_32%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75 }}
          className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-graphite shadow-glow"
        >
          <img
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1300&q=84"
            alt="Artista desenhando em um ambiente criativo com materiais de arte"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
          <div className="absolute -right-16 top-16 h-48 w-48 rounded-full border border-gold/[0.24]" />
          <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/10 bg-black/[0.54] p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">ao vivo e humano</p>
            <p className="mt-3 text-2xl font-semibold text-white">
              Cada rosto vira personagem, memoria e presente.
            </p>
          </div>
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="Sobre o artista"
            title="Transformando pessoas em arte atraves da caricatura ao vivo."
          >
            Um encontro entre rua, sketchbook e personagem estilizado. O desenho acontece na frente
            do publico com energia, humor e acabamento sofisticado para eventos que precisam ser
            lembrados.
          </SectionHeading>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {aboutPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.article
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.06, duration: 0.55 }}
                  className="rounded-lg border border-white/[0.09] bg-white/[0.045] p-5 transition hover:border-gold/30 hover:bg-white/[0.07]"
                >
                  <Icon className="mb-6 text-gold" size={24} />
                  <h3 className="text-lg font-semibold text-white">{point.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-mist/[.58]">{point.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
