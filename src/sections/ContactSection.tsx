import ContactForm from "../components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[var(--white)]">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center mb-10">
          <h2 className="font-bold text-[28px] [@media(min-width:1100px)]:text-[30px] mb-1"
            style={{
              fontFamily: "var(--font-poppins)",
              color: "var(--color-rich-black-fogra-29)",
              lineHeight: 1.2,
            }}>
            Contact Me
          </h2>
          <p
            className="mb-1 uppercase tracking-wide"
            style={{
              fontFamily: "var(--font-rubik)",
              color: "var(--color-mango-tango)",
            }}
          >
            Have questions? Send me a message below
          </p>
        </div>

        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
