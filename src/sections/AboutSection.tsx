import Section from '../components/layout/Section';

export default function AboutSection() {
  return (
    <Section id="about" padded={true} className="min-h-0 lg:min-h-[90vh]">
      <p className="text-white font-semibold text-[clamp(28px,3.5vw,68px)] leading-[1.2] max-w-full lg:max-w-[80%]">
        They say the world is your oyster, but most digital products are just…
        empty shells.<br/> At Crunchy Oyster, we help ambitious brands crack the
        code. We're a specialized studio that blends high-level strategy and UX
        with branding that actually sticks. From the first sketch to the final
        site, we're the strategic partner you need to find the pearl in your
        business.
      </p>
    </Section>
  );
}
