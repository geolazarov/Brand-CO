export default function Nav() {
  const classNameLink =
    "text-white text-lg leading-snug mix-blend-difference hover:opacity-70 transition-opacity";

  return (
    <nav className="absolute w-full mix-blend-exclusion top-0 left-0 z-50 flex items-center justify-center md:justify-start gap-10  px-4 sm:px-6 h-[70px]">
      <a href="#about" className={classNameLink}>
        about
      </a>
      <a href="#work" className={classNameLink}>
        work
      </a>
      <a href="#contact" className={classNameLink}>
        contact
      </a>
    </nav>
  );
}
