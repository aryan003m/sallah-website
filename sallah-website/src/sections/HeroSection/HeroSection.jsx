
import { ArrowDownRight } from "lucide-react";
import Button from "../../components/common/Button";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero__image" aria-hidden="true" />

      <div className="hero__content container">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            LEARN <span>|</span> GROW <span>|</span> BUILD
          </p>

          <h1 className="hero__title">
            Build Better
            <br />
            Versions of <em>Yourself</em>
          </h1>

          <p className="hero__description">
            Sallah is the student-led club at ABES Engineering
            College focused on mentorship, skill development and
            real-world learning. We connect students with industry
            experts, create opportunities and help you grow beyond
            the classroom.
          </p>

          <div className="hero__actions">
            <Button
              href="#programs"
              variant="light"
              showArrow
            >
              Explore Programs
            </Button>

            <Button href="#about" variant="outline">
              Know More
            </Button>
          </div>
        </div>

        <div className="hero__signature" aria-label="Our philosophy">
          <span>Mentorship</span>
          <span>Builds</span>
          <span>Momentum</span>
          <ArrowDownRight size={30} strokeWidth={1} />
        </div>

        <a
          className="hero__scroll"
          href="#about"
          aria-label="Scroll to learn about Sallah"
        >
          <span>DISCOVER SALLAH</span>
          <span className="hero__scroll-line" />
        </a>
      </div>
    </section>
  );
}
