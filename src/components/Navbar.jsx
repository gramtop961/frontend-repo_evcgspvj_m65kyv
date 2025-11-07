import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'SoCo', href: '#soco' },
    { label: 'Why SoCo', href: '#why' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-indigo-600 text-white grid place-items-center font-bold">I</div>
          <span className="font-semibold text-slate-900">Invincia</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">
              {item.label}
            </a>
          ))}
          <a
            href="#download"
            className="inline-flex items-center rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-indigo-700"
          >
            Download SoCo
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
          aria-label="Toggle Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 bg-indigo-600 text-white text-center"
            >
              Download SoCo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
