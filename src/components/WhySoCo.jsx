export default function WhySoCo() {
  const points = [
    {
      title: 'For Therapists',
      desc: 'Streamline homework, measure outcomes, and keep clients engaged between sessions with a HIPAA-conscious workflow.'
    },
    {
      title: 'For Clients',
      desc: 'Build real-life social habits with gentle prompts, guided activities, and supportive feedback loops.'
    },
    {
      title: 'For Organizations',
      desc: 'Drive evidence-based engagement at scale with analytics, dashboards, and secure integrations.'
    }
  ];

  return (
    <section id="why" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Why SoCo?</h2>
          <p className="mt-3 text-slate-700">Social connectedness is a powerful determinant of mental health. SoCo helps people practice and sustain it.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
