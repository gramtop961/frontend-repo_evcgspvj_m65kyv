export default function FAQ() {
  const faqs = [
    {
      q: 'Is SoCo HIPAA compliant?',
      a: 'Yes. SoCo is designed with HIPAA-conscious workflows and secure data practices. Contact us for a compliance overview.'
    },
    {
      q: 'How does SoCo work for therapists?',
      a: 'Therapists assign guided social activities and review progress between sessions through a secure portal.'
    },
    {
      q: 'Is there a free trial?',
      a: 'We offer pilots for clinics and organizations. Individuals can download the app and explore limited features.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Frequently asked questions</h2>
          <p className="mt-3 text-slate-700">Quick answers for clinicians, clients, and partners.</p>
        </div>
        <div className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="cursor-pointer list-none font-medium text-slate-900 flex items-center justify-between">
                {f.q}
                <span className="ml-4 text-slate-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
