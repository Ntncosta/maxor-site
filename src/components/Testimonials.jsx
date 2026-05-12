import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "../data/siteData.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Testimonials() {
  return (
    <section className="bg-[#080808] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Testimonials" title="Quiet confidence, visible results." align="center">
          Feedbacks de clientes que buscaram uma entrega visual mais sofisticada e memoravel.
        </SectionHeading>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-md"
            >
              <Quote className="text-gold" size={28} />
              <p className="mt-8 text-lg leading-8 text-mist/78">"{testimonial.quote}"</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-mist/45">{testimonial.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
