import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, children, align = "left" }) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`mx-auto max-w-3xl ${isCenter ? "text-center" : ""}`}
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-gold">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold leading-tight text-mist md:text-6xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-6 text-base leading-8 text-mist/[.64] md:text-lg">{children}</p>
      ) : null}
    </motion.div>
  );
}
