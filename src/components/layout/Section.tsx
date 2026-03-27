import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  /** 'dark' = black bg / white text (default); 'light' = white bg / black text */
  variant?: 'dark' | 'light';
  /** Whether to apply standard horizontal + vertical padding */
  padded?: boolean;
}

/**
 * Shared layout wrapper for every page section.
 * Enforces consistent horizontal padding, max-width, and background.
 */
export default function Section({
  id,
  className = '',
  children,
  variant = 'dark',
  padded = true,
}: SectionProps) {
  const bg = variant === 'light' ? 'bg-white text-black' : 'bg-black text-white';
  const padding = padded ? 'px-4 py-8 sm:px-14 sm:py-12' : '';

  return (
    <section id={id} className={`w-full ${bg} ${padding} ${className}`}>
      {children}
    </section>
  );
}
