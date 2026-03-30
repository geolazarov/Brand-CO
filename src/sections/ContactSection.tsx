import Section from "../components/layout/Section";

/**
 * "Temporary website" notice — white background, black text.
 * The strikethrough portion mirrors the Figma design where
 * "Visit us on Instagram for recent updates." is struck through.
 */
export default function ContactSection() {
  return (
    <Section
      id="info"
      variant="light"
      padded={true}
      className="py-12 min-h-[40vh] md:min-h-[80vh]"
    >
      <p className="font-bold md:font-semibold text-[clamp(26px,4.8vw,92px)] leading-[1.2]">
        This is a temporary website.
        <br />A full archive of our work will be available soon.{" "}
      </p>
    </Section>
  );
}
