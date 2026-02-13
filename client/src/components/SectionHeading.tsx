import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl text-primary font-mono mb-3 flex items-center gap-3">
          <span className="text-primary/40 text-2xl">./</span>
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto md:mx-0">
            {subtitle}
          </p>
        )}
        <div className={`h-1 w-24 bg-primary/20 mt-4 rounded-full ${align === "center" ? "mx-auto" : ""}`}>
          <motion.div 
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "40%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>
      </motion.div>
    </div>
  );
}
