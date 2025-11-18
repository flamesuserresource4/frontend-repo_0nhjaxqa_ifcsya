import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-fuchsia-500 to-violet-600 shadow-lg" />
          <span className="text-sm font-semibold tracking-wide text-violet-100">VelvetCloud</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-violet-100/80 sm:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#" className="rounded-lg border border-violet-400/30 bg-white/5 px-3 py-1.5 text-white hover:bg-white/10">Sign in</a>
        </nav>
      </header>

      <main className="relative">
        <Hero />
        <Features />
        <CTA />

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black/60">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-xs text-violet-200/70 sm:flex-row">
            <p>© {new Date().getFullYear()} VelvetCloud. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
