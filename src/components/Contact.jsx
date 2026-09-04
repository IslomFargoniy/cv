import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { Terminal } from "lucide-react";
import { GithubIcon, YoutubeIcon, TelegramIcon, LinkedinIcon, UpworkIcon, InstagramIcon } from "./icons";

export default function Contact() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-primary text-sm font-mono tracking-widest uppercase mb-3">
          {"// "}{t("contact.subtitle")}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          {t("contact.title")}
        </h2>
        <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-xl mx-auto"
      >
        <div className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-4 card-glow">
          <div className="flex items-center gap-2 mb-2 text-slate-500 text-xs font-mono">
            <Terminal size={12} className="text-primary" />
            <span>~/islombek $</span>
            <span className="text-secondary">contact --list</span>
          </div>

          <a
            href="https://github.com/IslomFargoniy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group"
          >
            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <GithubIcon size={20} />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">GitHub</p>
              <p className="text-slate-500 text-xs font-mono">
                github.com/IslomFargoniy
              </p>
            </div>
          </a>

          <a
            href="https://www.youtube.com/@IslomFargniy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-secondary/50 hover:bg-secondary/5 transition-all duration-200 group"
          >
            <div className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary/20 transition-colors">
              <YoutubeIcon size={20} />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">YouTube</p>
              <p className="text-slate-500 text-xs font-mono">
                @IslomFargniy
              </p>
            </div>
          </a>

          <a
            href="https://t.me/IslomFargniy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-sky-400/50 hover:bg-sky-400/5 transition-all duration-200 group"
          >
            <div className="p-2 rounded-lg bg-sky-400/10 text-sky-400 group-hover:bg-sky-400/20 transition-colors">
              <TelegramIcon size={20} />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Telegram</p>
              <p className="text-slate-500 text-xs font-mono">
                @IslomFargniy
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/islamabdurahman/?locale=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-200 group"
          >
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20 transition-colors">
              <LinkedinIcon size={20} />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">LinkedIn</p>
              <p className="text-slate-500 text-xs font-mono">
                in/islamabdurahman
              </p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/IslomFargniy/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-pink-500/50 hover:bg-pink-500/5 transition-all duration-200 group"
          >
            <div className="p-2 rounded-lg bg-pink-500/10 text-pink-500 group-hover:bg-pink-500/20 transition-colors">
              <InstagramIcon size={20} />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Instagram</p>
              <p className="text-slate-500 text-xs font-mono">
                @IslomFargniy
              </p>
            </div>
          </a>

          <a
            href="https://www.upwork.com/freelancers/~0181636e3834545e53"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-green-400/50 hover:bg-green-400/5 transition-all duration-200 group"
          >
            <div className="p-2 rounded-lg bg-green-400/10 text-green-400 group-hover:bg-green-400/20 transition-colors">
              <UpworkIcon size={20} />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Upwork</p>
              <p className="text-slate-500 text-xs font-mono">
                upwork.com/fl/islamabdurahman
              </p>
            </div>
          </a>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16 text-slate-600 text-xs font-mono"
      >
        <p>
          &copy; {new Date().getFullYear()} Islombek — Built with React &amp; Tailwind CSS
        </p>
      </motion.div>
    </section>
  );
}
