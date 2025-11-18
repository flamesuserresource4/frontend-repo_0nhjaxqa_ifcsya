import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="pricing" className="relative mx-auto max-w-5xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-fuchsia-400/30 bg-gradient-to-br from-fuchsia-600/10 via-violet-600/10 to-indigo-600/10 p-10 text-center backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,70,239,0.15),transparent_60%)]" />
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-3xl font-bold text-white"
        >
          Ready to make them blush?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto mt-3 max-w-2xl text-sm text-violet-100/85"
        >
          Start free for 14 days. No credit card required. Cancel anytime.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-600/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40">
            Create my account
          </a>
          <p className="text-xs text-violet-100/70">No commitments. Keep your data private.</p>
        </motion.div>
      </div>
    </section>
  );
}
