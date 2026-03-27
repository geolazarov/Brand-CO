import { useState, useEffect } from 'react';

const slides = [
  {
    src: 'https://www.figma.com/api/mcp/asset/1268b9ee-1bfe-4d9f-baf7-447548e326ce',
    alt: 'Dark architectural corridor',
  },
  {
    src: 'https://www.figma.com/api/mcp/asset/8ca25580-a88f-42a3-ae6b-f9c1d59687fa',
    alt: 'MIR mobile app mockup',
  },
  {
    src: 'https://www.figma.com/api/mcp/asset/5f5718d4-083e-4314-90c2-c686a07d40e6',
    alt: 'Nine Elephants festival poster in urban space',
  },
  {
    src: 'https://www.figma.com/api/mcp/asset/3ca40a77-cf12-46b9-b176-b406e25a2f66',
    alt: 'Brand the City laptop mockup',
  },
];

const SLIDE_INTERVAL = 5000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides track */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative flex-shrink-0 w-full h-full">
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Brand wordmark overlay — positioned ~36% from left, ~48% from top */}
      <div className="absolute pointer-events-none" style={{ left: '36.3%', top: '47.8%' }}>
        <span className="text-white text-[clamp(28px,2.8vw,54px)] font-normal leading-none tracking-tight">
          Crunchy Oyster
        </span>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === current ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
