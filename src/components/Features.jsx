import { Sparkles, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Elegant UI',
    desc: 'Clean, modern components styled with Tailwind that look great out of the box.'
  },
  {
    icon: Shield,
    title: 'Best Practices',
    desc: 'A sensible structure with separation of concerns to keep you moving fast.'
  },
  {
    icon: Zap,
    title: 'Performance',
    desc: 'Vite-powered dev server and production build for a snappy experience.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">What you get</h2>
          <p className="mt-3 text-gray-600">Everything you need to start building immediately.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow transition bg-white">
              <Icon className="h-6 w-6 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
