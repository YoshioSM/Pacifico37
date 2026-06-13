import { useState, useEffect } from "react";
import { icon } from "../../assets/Icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigation = [
    { title: "Inicio", path: "/" },
    { title: "Galería", path: "/Gallery" },
    { title: "About", path: "/About" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".menu-btn")) setMenuOpen(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a1628]/96 backdrop-blur-md shadow-lg shadow-black/30 border-b border-[#c9a84c]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="/" aria-label="Inicio" className="flex-shrink-0 group">
            <div className="w-44 h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-200">
              <img
                alt="Pacifico37"
                src={icon.pacifico37}
                className="w-full h-full object-contain brightness-0 invert"
              />
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="text-[#f5f0e8]/80 hover:text-[#c9a84c] text-sm font-medium tracking-widest uppercase transition-colors duration-200 relative group"
              >
                {item.title}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a84c] group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* CTA Contacto */}
            <a
              href="/Contact"
              className="ml-2 px-5 py-2.5 text-sm font-semibold tracking-widest uppercase text-[#c9a84c] border border-[#c9a84c]/60 rounded hover:bg-[#c9a84c] hover:text-[#0a1628] transition-all duration-300"
            >
              Contacto
            </a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="menu-btn md:hidden p-2 text-[#f5f0e8] hover:text-[#c9a84c] transition-colors"
            aria-label="Abrir menú"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-6 pt-2 space-y-1 border-t border-[#c9a84c]/20">
            {navigation.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium tracking-widest uppercase text-[#f5f0e8]/80 hover:text-[#c9a84c] transition-colors"
              >
                {item.title}
              </a>
            ))}
            <a
              href="/Contact"
              onClick={() => setMenuOpen(false)}
              className="block mx-4 mt-2 px-4 py-3 text-sm font-semibold tracking-widest uppercase text-center text-[#0a1628] bg-[#c9a84c] rounded transition-all hover:bg-[#e8c97a]"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}