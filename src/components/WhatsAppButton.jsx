import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { contact } from "../data/siteData.js";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={contact.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.35 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/25 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-black"
      aria-label="Abrir conversa no WhatsApp"
    >
      <MessageCircle size={26} />
    </motion.a>
  );
}
