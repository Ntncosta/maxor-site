import { Instagram, Mail, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";
import { contact } from "../data/siteData.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink px-5 py-24 md:px-8 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(200,169,106,0.14),transparent_32%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading eyebrow="Contact" title="Let's plan the next flight.">
            Conte sobre seu projeto e receba uma proposta para captacao, edicao e entrega final.
          </SectionHeading>

          <div className="mt-10 space-y-3">
            <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="contact-link">
              <MessageCircle size={20} />
              <span>{contact.phoneLabel}</span>
            </a>
            <a href={contact.instagramUrl} target="_blank" rel="noreferrer" className="contact-link">
              <Instagram size={20} />
              <span>{contact.instagramLabel}</span>
            </a>
            <a href={`mailto:${contact.email}`} className="contact-link">
              <Mail size={20} />
              <span>{contact.email}</span>
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          action={`mailto:${contact.email}`}
          method="post"
          encType="text/plain"
          className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-5 shadow-glow backdrop-blur-xl md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" name="name" autoComplete="name" placeholder="Seu nome" />
            <Field
              label="WhatsApp"
              name="whatsapp"
              type="tel"
              autoComplete="tel"
              placeholder="+55 11 99999-9999"
            />
          </div>
          <label className="mt-5 block">
            <span className="form-label">Project Type</span>
            <select name="projectType" required className="form-field">
              <option value="">Selecione uma opcao</option>
              <option>Drone Filming</option>
              <option>Video Editing</option>
              <option>Real Estate Videos</option>
              <option>Tourism Videos</option>
              <option>Event Coverage</option>
              <option>Social Media Content</option>
            </select>
          </label>
          <label className="mt-5 block">
            <span className="form-label">Message</span>
            <textarea
              name="message"
              required
              rows="6"
              className="form-field resize-none"
              placeholder="Fale sobre local, objetivo, prazo e estilo desejado."
            />
          </label>
          <button
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:bg-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black"
          >
            <Send size={18} />
            Enviar Mensagem
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, autoComplete }) {
  return (
    <label className="block">
      <span className="form-label">{label}</span>
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="form-field"
      />
    </label>
  );
}
