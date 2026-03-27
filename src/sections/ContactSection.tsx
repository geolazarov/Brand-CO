import Section from '../components/layout/Section';

/**
 * "Temporary website" notice — white background, black text.
 * The strikethrough portion mirrors the Figma design where
 * "Visit us on Instagram for recent updates." is struck through.
 */
export default function ContactSection() {
  return (
    <Section id="contact" variant="light" padded={true} className="py-12">
      <p className="font-medium text-[clamp(28px,4.8vw,92px)] leading-[1.2]">
        This is a temporary website.
        <br />
        A full archive of our work will be available soon.{' '}
        <span className="line-through">
          Visit us on Instagram
          <br />
          for recent updates.
        </span>
      </p>
    </Section>
  );
}
