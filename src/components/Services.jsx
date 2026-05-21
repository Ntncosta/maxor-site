import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { contact, events } from "../data/siteData.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Services() {
  return (
    <section id="events" className="relative overflow-hidden bg-[#080808] px-5 py-24 md:px-8 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(200,169,106,0.12),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Eventos"
            title="Leve caricatura ao vivo para seu evento."
          >
            Uma atracao artistica, elegante e interativa para gerar conversa, fotos, presentes e
            memoria afetiva.
          </SectionHeading>
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:bg-gold lg:justify-self-end"
          >
            Solicitar disponibilidade
            <ArrowRight size={18} className="transition group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.05, duration: 0.55 }}
                whileHover={{ y: -8 }}
                className="group min-h-[250px] rounded-lg border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition hover:border-gold/[.38] hover:bg-white/[0.085]"
              >
                <div className="mb-12 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/[0.12] text-gold ring-1 ring-gold/20 transition group-hover:bg-gold group-hover:text-black">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                <p className="mt-4 text-sm leading-7 text-mist/[.58]">{event.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
