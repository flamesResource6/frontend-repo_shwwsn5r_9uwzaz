import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="about" className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold">About this starter</h2>
              <p className="mt-4 text-gray-700">
                A clean foundation to help you ship quickly. It embraces modular components and a thoughtful layout so you can focus on your product, not boilerplate.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
                <li>Responsive by default</li>
                <li>Accessible interactions</li>
                <li>Beautiful, pragmatic design</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="aspect-[4/3] w-full rounded-lg bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100" />
            </div>
          </div>
        </section>
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Get in touch</h2>
              <p className="mt-2 text-gray-600">We'd love to hear about your project. Send us a message and we'll respond soon.</p>
              <form className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Jane Doe" />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="jane@example.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Tell us about your idea..." />
                </div>
                <div className="sm:col-span-2">
                  <button type="button" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-white font-medium shadow hover:bg-blue-700 transition">
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
