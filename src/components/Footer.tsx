export default function Footer() {
  return (
    <footer className="bg-black w-full py-12 border-t border-stone-800">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold text-white font-headline">Neon Architect</span>
          <p className="text-stone-500 text-sm tracking-wide">© 2024 Neon Architect. Built with precision.</p>
        </div>
        <div className="flex gap-8">
          <a className="text-stone-500 hover:text-white transition-colors text-sm tracking-wide" href="#">GitHub</a>
          <a className="text-stone-500 hover:text-white transition-colors text-sm tracking-wide" href="#">LinkedIn</a>
          <a className="text-stone-500 hover:text-white transition-colors text-sm tracking-wide" href="#">Source Code</a>
        </div>
      </div>
    </footer>
  );
}
