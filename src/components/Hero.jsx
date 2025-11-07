import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[80vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">Mental Health Technology</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Invincia — Building Social Connectedness in Care
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              SoCo is a therapeutic app that helps clinicians and clients build healthy, real-world connections—secure, simple, and designed for outcomes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#soco" className="inline-flex items-center rounded-md bg-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-indigo-700">
                Learn more about SoCo
              </a>
              <a href="#download" className="inline-flex items-center rounded-md bg-white/80 backdrop-blur px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-white">
                Download SoCo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  );
}
