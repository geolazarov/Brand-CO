import { useState, useMemo } from "react";

import { slides } from "../data/heroSlides";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const rightCursor = useMemo(() => {
    const svg = `
      <svg width="75" height="62" viewBox="0 0 75 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M74.2747 32.0256L45.0247 61.2756C44.7198 61.5805 44.3062 61.7518 43.875 61.7518C43.4438 61.7518 43.0302 61.5805 42.7253 61.2756C42.4204 60.9707 42.2491 60.5571 42.2491 60.1259C42.2491 59.6947 42.4204 59.2811 42.7253 58.9762L69.2006 32.5009H1.625C1.19402 32.5009 0.780698 32.3297 0.475952 32.025C0.171205 31.7202 0 31.3069 0 30.8759C0 30.4449 0.171205 30.0316 0.475952 29.7269C0.780698 29.4221 1.19402 29.2509 1.625 29.2509H69.2006L42.7253 2.77559C42.4204 2.47068 42.2491 2.05712 42.2491 1.6259C42.2491 1.19469 42.4204 0.781133 42.7253 0.476217C43.0302 0.171301 43.4438 0 43.875 0C44.3062 0 44.7198 0.171299 45.0247 0.476215L74.2747 29.7262C74.4258 29.8771 74.5456 30.0564 74.6274 30.2536C74.7092 30.4509 74.7513 30.6624 74.7513 30.8759C74.7513 31.0895 74.7092 31.3009 74.6274 31.4982C74.5456 31.6955 74.4258 31.8747 74.2747 32.0256Z" fill="white"/>
      </svg>
    `;
    return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}") 37 31, auto`;
  }, []);

  const leftCursor = useMemo(() => {
    const svg = `
      <svg width="75" height="62" viewBox="0 0 75 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(75, 62) rotate(180)">
          <path d="M74.2747 32.0256L45.0247 61.2756C44.7198 61.5805 44.3062 61.7518 43.875 61.7518C43.4438 61.7518 43.0302 61.5805 42.7253 61.2756C42.4204 60.9707 42.2491 60.5571 42.2491 60.1259C42.2491 59.6947 42.4204 59.2811 42.7253 58.9762L69.2006 32.5009H1.625C1.19402 32.5009 0.780698 32.3297 0.475952 32.025C0.171205 31.7202 0 31.3069 0 30.8759C0 30.4449 0.171205 30.0316 0.475952 29.7269C0.780698 29.4221 1.19402 29.2509 1.625 29.2509H69.2006L42.7253 2.77559C42.4204 2.47068 42.2491 2.05712 42.2491 1.6259C42.2491 1.19469 42.4204 0.781133 42.7253 0.476217C43.0302 0.171301 43.4438 0 43.875 0C44.3062 0 44.7198 0.171299 45.0247 0.476215L74.2747 29.7262C74.4258 29.8771 74.5456 30.0564 74.6274 30.2536C74.7092 30.4509 74.7513 30.6624 74.7513 30.8759C74.7513 31.0895 74.7092 31.3009 74.6274 31.4982C74.5456 31.6955 74.4258 31.8747 74.2747 32.0256Z" fill="white"/>
        </g>
      </svg>
    `;
    return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}") 37 31, auto`;
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides track */}
      <div
        className="flex h-full transition-transform duration-0 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative flex-shrink-0 w-full h-full">
            <img
              src={slide.src}
              alt={slide.alt}
              className={`w-full h-full ${slide?.objFit} object-cover ${slide.objPosition}`}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Brand wordmark overlay — positioned ~36% from left, ~48% from top */}
      <div
        className="absolute pointer-events-none"
        style={{ left: "36.3%", top: "47.8%" }}
      >
        <span className="display-text text-[clamp(28px,2.8vw,54px)]">
          Crunchy Oyster
        </span>
      </div>

      <div className="absolute inset-0 z-30">
        <button
          onClick={goPrev}
          className="absolute top-0 left-0 w-1/2 h-full text-transparent"
          aria-label="Previous Slide"
          style={{
            cursor: leftCursor,
            mixBlendMode: "difference",
          }}
        >
          Previous Slide
        </button>

        <button
          onClick={goNext}
          className="absolute top-0 right-0 w-1/2 h-full text-transparent"
          aria-label="Next Slide"
          style={{
            cursor: rightCursor,
            mixBlendMode: "difference",
          }}
        >
          Next Slide
        </button>
      </div>
    </section>
  );
}
