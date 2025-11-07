export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-600 to-violet-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to get in touch?</h2>
        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
          Whether you’re a therapist, partner, or investor, we’d love to talk. Tell us about your goals and we’ll follow up.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#download" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-white/90">
            Download SoCo
          </a>
          <a href="mailto:hello@invincia.health" className="inline-flex items-center rounded-md ring-1 ring-white/60 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
