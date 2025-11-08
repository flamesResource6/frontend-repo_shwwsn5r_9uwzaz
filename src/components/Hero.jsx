import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Build beautiful apps faster
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              A polished React + Tailwind starter with a clean structure and modern components. Perfect for landing pages, dashboards, and product sites.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#features" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700 transition">
                Explore Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-gray-700 font-medium hover:bg-gray-50 transition">
                Contact Us
              </a>
            </div>
          </div>
          <div className="lg:justify-self-end">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="aspect-[4/3] rounded-2xl bg-white shadow-xl ring-1 ring-gray-200 p-6">
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="h-20 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
