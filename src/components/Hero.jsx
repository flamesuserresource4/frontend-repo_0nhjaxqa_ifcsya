import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-black">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Vignette and gradient accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(132,94,247,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-fuchsia-200 backdrop-blur"
        >
          Bold • Playful • Secure
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-balance bg-gradient-to-br from-fuchsia-200 via-violet-200 to-indigo-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent drop-shadow sm:text-6xl"
        >
          Launch your daring SaaS with a seductive, cyberpunk edge
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-5 max-w-2xl text-pretty text-base text-violet-100/80 sm:text-lg"
        >
          A tastefully provocative landing experience for subscription products that want to flirt with the future. Elegant, encrypted, and irresistibly clickable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-600/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40">
            Start free trial
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-violet-400/30 bg-black/40 px-6 py-3 text-sm font-semibold text-violet-100 backdrop-blur transition hover:border-violet-300/50 focus:outline-none focus:ring-2 focus:ring-violet-400/30">
            Explore features
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col items-center gap-3 text-center text-xs text-violet-100/70 sm:flex-row"
        >
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/40?img=${i + 12}`}
                alt="avatar"
                className="h-7 w-7 rounded-full border border-white/10 object-cover"
              />
            ))}
          </div>
          <p className="sm:ml-2">Trusted by bold creators and boutique platforms</p>
        </motion.div>
      </div>
    </section>
  );
}
