import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";

const points = [
  "Captacao aerea em 4K com FIMI X8 SE",
  "Direcao visual para imoveis, marcas e destinos",
  "Edicao, cor e entregas otimizadas para cada canal"
];

export default function About() {
  return (
    <section id="about" className="bg-ink px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75 }}
          className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-graphite shadow-glow"
        >
          <img
            src="https://images.unsplash.com/photo-1524143986875-3b098d78b363?auto=format&fit=crop&w=1300&q=82"
            alt="Piloto de drone preparando filmagem aerea"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-black/48 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">Aerial Storytelling</p>
            <p className="mt-3 text-2xl font-semibold text-white">Imagem, movimento e intencao.</p>
          </div>
        </motion.div>

        <div>
          <SectionHeading eyebrow="About" title="A cinematic drone filmmaker with a storyteller's eye.">
            Trabalho com captacao aerea e edicao para criar filmes que elevam a percepcao de
            lugares, marcas e momentos. O drone FIMI X8 SE 4K entra como ferramenta de composicao:
            nao apenas altura, mas perspectiva, movimento e emocao.
          </SectionHeading>

          <div className="mt-10 space-y-4">
            {points.map((point) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 rounded-2xl border border-white/9 bg-white/[0.045] p-4"
              >
                <CheckCircle2 className="shrink-0 text-gold" size={22} />
                <span className="text-mist/[.76]">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
