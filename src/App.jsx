import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import WhySoCo from './components/WhySoCo.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import CTA from './components/CTA.jsx';

export default function App() {
  return (
    <div className="font-inter text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <section id="soco" className="py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold">What is SoCo?</h2>
                <p className="mt-3 text-slate-700">
                  SoCo (Social Connectedness) is a therapeutic mobile app designed for clinicians and clients. It guides
                  real-world social practice with structured activities, reflective check-ins, and progress tracking.
                </p>
                <ul className="mt-6 space-y-2 text-slate-700 list-disc pl-5">
                  <li>Assign and track activities between sessions</li>
                  <li>Measure outcomes with privacy-conscious analytics</li>
                  <li>Support clients through prompts, nudges, and insights</li>
                </ul>
                <div id="download" className="mt-6 flex flex-wrap gap-3">
                  <a href="#" className="inline-flex items-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium">App Store</a>
                  <a href="#" className="inline-flex items-center rounded-md bg-green-600 text-white px-4 py-2 text-sm font-medium">Google Play</a>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="aspect-[9/16] w-full rounded-xl bg-gradient-to-br from-indigo-100 via-white to-violet-100" />
                <p className="mt-3 text-sm text-slate-600">Preview of the SoCo mobile experience.</p>
              </div>
            </div>
          </div>
        </section>
        <WhySoCo />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <footer className="py-10 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Invincia. All rights reserved.</p>
          <div className="text-sm text-slate-500">Follow us on <a className="underline" href="#">LinkedIn</a></div>
        </div>
      </footer>
    </div>
  );
}
