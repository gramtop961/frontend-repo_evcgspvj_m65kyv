export default function Testimonials() {
  const items = [
    {
      quote: 'SoCo reshaped how my clients engage between sessions. Our outcomes are improving.',
      author: 'Dr. Maya L., LCSW'
    },
    {
      quote: 'The structured prompts make social practice less intimidating and more consistent.',
      author: 'Jamie R., Client'
    },
    {
      quote: 'Implementation was straightforward and our clinicians love the simplicity.',
      author: 'Clinical Director, Community Health Org'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">What people say</h2>
          <p className="mt-3 text-slate-700">Evidence meets empathy—hear from clinicians and clients using SoCo.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((t, idx) => (
            <figure key={idx} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-slate-900">{t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
