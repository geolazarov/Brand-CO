import { useState, MouseEvent } from "react";
import { slides } from "../data/heroSlides";

function Arrow({ direction = "right" }) {
  return (
    <svg
      width="75"
      height="62"
      viewBox="0 0 75 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={direction === "left" ? "scale-x-[-1]" : ""}
    >
      <path
        d="M74.2747 32.0256L45.0247 61.2756C44.7198 61.5805 44.3062 61.7518 43.875 61.7518C43.4438 61.7518 43.0302 61.5805 42.7253 61.2756C42.4204 60.9707 42.2491 60.5571 42.2491 60.1259C42.2491 59.6947 42.4204 59.2811 42.7253 58.9762L69.2006 32.5009H1.625C1.19402 32.5009 0.780698 32.3297 0.475952 32.025C0.171205 31.7202 0 31.3069 0 30.8759C0 30.4449 0.171205 30.0316 0.475952 29.7269C0.780698 29.4221 1.19402 29.2509 1.625 29.2509H69.2006L42.7253 2.77559C42.4204 2.47068 42.2491 2.05712 42.2491 1.6259C42.2491 1.19469 42.4204 0.781133 42.7253 0.476217C43.0302 0.171301 43.4438 0 43.875 0C44.3062 0 44.7198 0.171299 45.0247 0.476215L74.2747 29.7262C74.4258 29.8771 74.5456 30.0564 74.6274 30.2536C74.7092 30.4509 74.7513 30.6624 74.7513 30.8759C74.7513 31.0895 74.7092 31.3009 74.6274 31.4982C74.5456 31.6955 74.4258 31.8747 74.2747 32.0256Z"
        fill="white"
      />
    </svg>
  );
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null); // "left" | "right" | null
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleZoneMove = (e: MouseEvent, side: "left" | "right") => {
    const heroElement = e.currentTarget.closest("[data-hero-root]");
    if (!heroElement) return;

    const heroBounds = heroElement.getBoundingClientRect();

    setCursorPos({
      x: e.clientX - heroBounds.left,
      y: e.clientY - heroBounds.top,
    });
    setHoveredSide(side);
  };

  const handleZoneEnter = (e: MouseEvent, side: "left" | "right") => {
    handleZoneMove(e, side);
    setHoveredSide(side);
  };

  const handleZoneLeave = () => {
    setHoveredSide(null);
  };

  return (
    <section
      data-hero-root
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Slides track */}
      <div
        className="flex h-full transition-transform duration-0 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className={`relative flex-shrink-0 w-full h-full flex ${slide.objPosition}`}>
            <img
              src={slide.src}
              alt={slide.alt}
              className={`w-full ${slide?.imgWidth} h-full object-cover `}
              loading={i === 0 ? "eager" : "lazy"}
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Brand wordmark overlay */}
      <div
        className="absolute pointer-events-none z-20 translate-z-[-50%, 0] text-right lg:text-left mix-blend-difference"
        style={{ left: "50%", top: "47.8%", transform: "translateX(-50%)" }}
      >
        <span className="display-text text-[clamp(54px,2.8vw,68px)] ">
          Crunchy&ensp;Oyster
        </span>
      </div>

      {/* Moving DOM arrow */}
      {hoveredSide && (
        <div
          className="pointer-events-none absolute z-40 mix-blend-difference hidden md:block"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Arrow direction={hoveredSide} />
        </div>
      )}

      {/* Click / hover zones */}
      <div className="absolute inset-0 z-30">
        <button
          onClick={goPrev}
          onMouseEnter={(e) => handleZoneEnter(e, "left")}
          onMouseMove={(e) => handleZoneMove(e, "left")}
          onMouseLeave={handleZoneLeave}
          className="absolute top-0 left-0 w-1/2 h-full cursor-none"
          aria-label="Previous Slide"
        >
          <span className="sr-only">Previous Slide</span>
        </button>

        <button
          onClick={goNext}
          onMouseEnter={(e) => handleZoneEnter(e, "right")}
          onMouseMove={(e) => handleZoneMove(e, "right")}
          onMouseLeave={handleZoneLeave}
          className="absolute top-0 right-0 w-1/2 h-full cursor-none"
          aria-label="Next Slide"
        >
          <span className="sr-only">Next Slide</span>
        </button>
      </div>
    </section>
  );
}
