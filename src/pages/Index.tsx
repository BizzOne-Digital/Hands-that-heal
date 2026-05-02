import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { NextStep } from "@/components/sections/NextStep";
import { Stats } from "@/components/sections/Stats";
import { FAQPreview } from "@/components/sections/FAQPreview";
import { BookingCTA } from "@/components/sections/BookingCTA";

const Index = () => {
  return (
    <>
      <title>Hands That Heal — Feel Comfortable and Confident in Your Own Skin</title>
      <meta name="description" content="Laser hair removal, body contouring, organic teeth whitening, Brazilian laser, and cryotherapy. Safe for all skin tones. Hamilton, ON." />
      <link rel="canonical" href="/" />

      {/* 1. Hero — "Feel Comfortable and Confident in your own skin" */}
      <Hero />

      {/* 2. About Us — "Skin Care That Understands You" */}
      <AboutSection />

      {/* 3. Special Offer — $499 Laser Hair Removal */}
      <CTASection />

      {/* 4. Services — "Step Into Luxury at Our Premier Aesthetic Haven" */}
      <ServicesPreview />

      {/* 5. Why Choose Us — "Care that feels right from the moment you walk in" */}
      <WhyChooseUs />

      {/* 6. Testimonials — "What our clients say about their experience" */}
      <Testimonials />

      {/* 7. Next Step CTA — "Your next step starts here" */}
      <NextStep />

      {/* 8. Stats — 100% Satisfaction, 0 Side Effects, 20+ Solutions, 1000+ Clients */}
      <Stats />

      {/* 8. FAQ Preview — "The most common questions we've had so far" */}
      <FAQPreview />

      {/* 9. Booking CTA — "Start Your Transformation Today" */}
      <BookingCTA />
    </>
  );
};

export default Index;
