import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ChevronDown, Code2 } from "lucide-react";
import { GithubIcon, YoutubeIcon } from "./icons";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-3xl"
      >
        <motion.div variants={item} className="flex items-center justify-center gap-2 mb-6">
          <Code2 size={16} className="text-primary" />
          <span className="text-primary text-sm font-mono tracking-widest uppercase">
            Full-Stack Developer
          </span>
        </motion.div>

        <motion.p variants={item} className="text-slate-400 text-lg mb-2 font-mono">
          {t("hero.greeting")}
        </motion.p>

        <motion.h1
          variants={item}
          className="text-6xl md:text-8xl font-bold gradient-text mb-4 leading-tight"
        >
          {t("hero.name")}
        </motion.h1>

        <motion.div
          variants={item}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <span className="w-8 h-px bg-primary" />
          <span className="text-secondary font-mono text-base md:text-lg">
            {t("hero.role")}
          </span>
          <span className="w-8 h-px bg-primary" />
        </motion.div>

        <motion.p
          variants={item}
          className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10 font-mono"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="https://github.com/IslomFargoniy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg font-mono text-sm transition-all duration-200 hover:scale-105"
          >
            <GithubIcon size={16} />
            {t("hero.github")}
          </a>
          <a
            href="https://www.youtube.com/@IslomFargniy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-secondary text-secondary hover:bg-secondary/10 rounded-lg font-mono text-sm transition-all duration-200 hover:scale-105"
          >
            <YoutubeIcon size={16} />
            {t("hero.youtube")}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#stack"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-primary transition-colors flex flex-col items-center gap-1"
      >
        <span className="text-xs font-mono">{t("hero.scroll")}</span>
        <ChevronDown size={18} />
      </motion.a>
    </section>
  );
}
