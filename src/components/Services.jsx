import { motion } from "framer-motion";
import { services } from "../data/siteData.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#080808] px-5 py-24 md:px-8 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(182,107,66,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(200,169,106,0.12),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Production for brands that need motion, not noise."
          align="center"
        >
          Servicos modulares para captar, editar e entregar filmes aereos com acabamento premium.
        </SectionHeading>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.05, duration: 0.55 }}
                whileHover={{ y: -8 }}
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-xl transition hover:border-gold/[.38] hover:bg-white/[0.085]"
              >
                <div className="mb-12 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/12 text-gold ring-1 ring-gold/20 transition group-hover:bg-gold group-hover:text-black">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-mist/[.58]">{service.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
