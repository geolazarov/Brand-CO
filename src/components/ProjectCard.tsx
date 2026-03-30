import type { Project } from '../types';

interface ProjectCardProps extends Project {}

/**
 * Reusable project card.
 *
 * Structure:
 *   ┌─────────────────────────┐
 *   │  Image area (642px h)   │
 *   │   [bgImage as cover]    │
 *   │   [projectImage inset]  │
 *   └─────────────────────────┘
 *   Title (medium)
 *   Description (light)   ↗
 *
 * The entire card is a clickable external link when `link` is provided.
 */
export default function ProjectCard({
  title,
  description,
  bgImage,
  projectImage,
  link,
}: ProjectCardProps) {
  const cardContent = (
    <>
      {/* ── Image area ── */}
      <div className="relative w-full h-[260px] sm:h-[420px] lg:h-[642px] bg-black overflow-hidden flex items-center justify-center">
        {/* Background fill */}
        {bgImage && (
          <img
            src={bgImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Optional overlay dimming when both images are shown */}
        {bgImage && projectImage && (
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        )}
        {/* Centered project screenshot */}
        {projectImage && (
          <img
            src={projectImage}
            alt={`${title} — project screenshot`}
            className="relative z-10 max-h-[100%] max-w-[80%] object-contain"
          />
        )}
      </div>

      {/* ── Title row ── */}
      <div className="flex items-start justify-between pt-4">
        <div className="flex flex-col gap-1">
          <span className="text-white text-sm sm:text-lg font-medium leading-snug">
            {title}
          </span>
          <span className="text-white text-sm sm:text-lg font-light leading-snug">
            {description}
          </span>
        </div>

        {link && (
          <ArrowUpRight className="shrink-0 mt-0.5 text-white" />
        )}
      </div>
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col group cursor-pointer"
        aria-label={title}
      >
        {cardContent}
      </a>
    );
  }

  return <div className="flex flex-col">{cardContent}</div>;
}

function ArrowUpRight({ className = '' }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
