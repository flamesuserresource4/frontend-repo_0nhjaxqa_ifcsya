import { motion } from 'framer-motion';
import { Shield, Sparkles, Lock, Gauge, CreditCard, Wand2 } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Privacy-first',
    desc: 'Consent-centric flows and bank-grade encryption baked in from day one.',
  },
  {
    icon: Sparkles,
    title: 'Seductive design',
    desc: 'A lush dark UI with micro-animations that tease, not overwhelm.',
  },
  {
    icon: Lock,
    title: 'Creator controls',
    desc: 'Fine-grained visibility, watermarking, and flexible access rules.',
  },
  {
    icon: Gauge,
    title: 'Lightning fast',
    desc: 'Edge-cached media and optimized delivery for instant gratification.',
  },
  {
    icon: CreditCard,
    title: 'Subscriptions done right',
    desc: 'Trials, bundles, and upsells with transparent, PCI-compliant billing.',
  },
  {
    icon: Wand2,
    title: 'Automations',
    desc: 'Smart flows that woo visitors into loyal customers automatically.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="bg-gradient-to-br from-fuchsia-100 via-violet-100 to-indigo-100 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          Designed to entice, built to convert
        </h2>
        <p className="mt-3 text-sm text-violet-100/80 sm:text-base">
          Tasteful visuals, serious infrastructure, and everything you need to sell with confidence.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, idx) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.04 * idx }}
            className="group rounded-2xl border border-violet-400/20 bg-white/5 p-6 backdrop-blur-lg transition hover:border-violet-300/40 hover:bg-white/10"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-600/40 to-violet-600/40 text-violet-100 ring-1 ring-inset ring-white/10">
              <f.icon size={20} />
            </div>
            <h3 className="text-lg font-semibold text-white">{f.title}</h3>
            <p className="mt-1 text-sm text-violet-100/80">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
