import Section from '../components/layout/Section';

export default function FooterSection() {
  return (
    <Section variant="light" padded={true} className="pt-14 pb-4">
      {/* Contact block */}
      <div className="flex flex-col gap-12 mb-12">
        <p className="font-medium text-[clamp(20px,4.8vw,92px)] leading-[1.2]">
          Say hello:
        </p>

        <div className="flex flex-col">
          <p className="font-medium text-[clamp(20px,4.8vw,92px)] leading-[1.2]">
            <span aria-hidden="true">→ </span>
            <a
              href="mailto:hi@crunchyoyster.com"
              className="hover:opacity-70 transition-opacity"
            >
              hi(at)crunchyoyster.com
            </a>
          </p>
          <p className="font-medium text-[clamp(20px,4.8vw,92px)] leading-[1.2]">
            <a
              href="tel:+359886300020"
              className="hover:opacity-70 transition-opacity"
            >
              +359 886 300 020
            </a>
          </p>
        </div>

        <p className="font-medium text-[clamp(20px,4.8vw,92px)] leading-[1.2]">
          Dondukov 5 A
          <br />
          Sofia, Bulgaria
        </p>
      </div>

      {/* Divider + copyright */}
      <div className="flex flex-col gap-4 border-t border-black/20 pt-4">
        <p className="font-light text-sm text-black">
          Copyright © 2025, Crunchy Oyster. All rights reserved
        </p>
      </div>
    </Section>
  );
}
