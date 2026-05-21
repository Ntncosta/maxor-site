import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { gallery, galleryCategories } from "../data/siteData.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Projects() {
  const [active, setActive] = useState("Todos");
  const filtered = useMemo(
    () => (active === "Todos" ? gallery : gallery.filter((item) => item.category === active)),
    [active]
  );

  return (
    <section id="gallery" className="relative bg-[#080808] px-5 py-24 md:px-8 md:py-32">
      <div className="absolute inset-0 paper-grain opacity-45" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Galeria" title="Caricaturas grandes, vivas e cheias de atitude.">
            Um portfolio com energia de rua, exagero elegante e um olhar de personagem moderno para
            pessoas, marcas e encontros.
          </SectionHeading>
          <div className="flex max-w-xl flex-wrap gap-2">
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                  active === category
                    ? "border-gold bg-gold text-black"
                    : "border-white/10 bg-white/[0.05] text-mist/[0.62] hover:border-gold/40 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {filtered.map((project, index) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04, duration: 0.55, ease: "easeOut" }}
              className={`group relative min-h-[430px] overflow-hidden rounded-lg border border-white/10 bg-graphite ${
                index % 5 < 2 ? "lg:col-span-6" : "lg:col-span-4"
              }`}
            >
              <img
                src={project.image}
                alt={`${project.title} - ${project.category}`}
                loading={index > 1 ? "lazy" : "eager"}
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/[.34] to-transparent" />
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="sketch-lines h-full w-full opacity-50" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/[0.14] bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black opacity-0 transition group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <h3 className="font-display text-3xl font-semibold text-white">{project.title}</h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
