import { Rocket, Github, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-gray-900 font-semibold">
            <Rocket className="h-6 w-6 text-blue-600" />
            <span>Vibe Starter</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm text-gray-700">
              <a href="#features" className="hover:text-gray-900">Features</a>
              <a href="#about" className="hover:text-gray-900">About</a>
              <a href="#contact" className="hover:text-gray-900">Contact</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
