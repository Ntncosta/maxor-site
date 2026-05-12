import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/siteData.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Projects() {
  return (
    <section id="projects" className="relative bg-ink px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <SectionHeading eyebrow="Featured Projects" title="Aerial stories with scale and silence.">
            Uma selecao de projetos pensados para impacto visual, ritmo de cinema e conversao.
          </SectionHeading>
          <p className="max-w-sm text-sm leading-7 text-mist/50">
            Cada imagem e tratada como uma cena: composicao, movimento, atmosfera e entrega pronta
            para web, social e apresentacao comercial.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ delay: index * 0.06, duration: 0.65, ease: "easeOut" }}
              className={`group relative min-h-[420px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-graphite ${
                index < 2 ? "lg:col-span-6" : "lg:col-span-4"
              }`}
            >
              <img
                src={project.image}
                alt={`${project.title} - ${project.category}`}
                loading={index > 1 ? "lazy" : "eager"}
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/[.34] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/14 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black opacity-0 transition group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <h3 className="font-display text-3xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-white/[.66]">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
