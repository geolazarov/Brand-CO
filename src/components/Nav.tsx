/**
 * Fixed top navigation.
 * Uses mix-blend-difference so the white text stays readable
 * over both light and dark hero content.
 */
export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 z-50 flex items-center gap-5 sm:gap-10 px-4 sm:px-6 h-[70px]">
      <a
        href="#about"
        className="text-white text-lg leading-snug mix-blend-difference hover:opacity-70 transition-opacity"
      >
        about
      </a>
      <a
        href="#work"
        className="text-white text-lg leading-snug mix-blend-difference hover:opacity-70 transition-opacity"
      >
        work
      </a>
      <a
        href="#contact"
        className="text-white text-lg leading-snug mix-blend-difference hover:opacity-70 transition-opacity"
      >
        contact
      </a>
    </nav>
  );
}
