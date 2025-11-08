export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Vibe Starter. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
