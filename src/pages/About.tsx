import { motion } from "framer-motion";
import { Heart, ShieldCheck, Sparkles, Users, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { staff } from "@/data/staff";
import { GradientBlobs } from "@/components/GradientBlobs";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const missionCards = [
  {
    title: "Our Mission",
    text: "To deliver high-quality wellness services that help relieve stress, restore balance, and support a healthier lifestyle for every client.",
  },
  {
    title: "Our Vision",
    text: "To be a trusted name in wellness, known for compassionate care, professional service, and lasting results.",
  },
  {
    title: "Our Goal",
    text: "To ensure every visit leaves you feeling relaxed, refreshed, and truly cared for.",
  },
];

const whyFeatures = [
  { icon: ShieldCheck, title: "Safe for All Skin Tones", desc: "Our advanced technology is designed to work gently and effectively on every skin type, including darker tones." },
  { icon: Heart, title: "Comfort Comes First", desc: "We keep every session calm, private, and easy for you — from the moment you walk in to the moment you leave." },
  { icon: Sparkles, title: "Real Results That Last", desc: "Less regrowth, smoother skin, and visible change over time. We prioritize long-lasting, visible outcomes." },
  { icon: Users, title: "People Who Truly Care", desc: "You're treated with attention, respect, and honesty every time. Our team is here to guide you every step." },
  { icon: Clock, title: "No Downtime", desc: "All our treatments are non-invasive. Return to your daily routine immediately after every session." },
  { icon: Star, title: "Inclusive & Welcoming", desc: "We serve everyone — all genders, all skin tones, all backgrounds. Everyone deserves to feel cared for." },
];

const testimonials = [
  {
    name: "Grace T",
    role: "Tranquil Escape Enthusiast",
    rating: 5,
    text: "The moment I step into this spa, I'm transported to a world of tranquility. The serene ambiance, skilled therapists, and personalized treatments make every visit an indulgent escape. It's not just a spa; it's my sanctuary for relaxation and rejuvenation.",
  },
  {
    name: "David S",
    role: "Stress-Free Convert",
    rating: 5,
    text: "As someone with a demanding job, I never realized the importance of self-care until I discovered this spa. The massages are heavenly, and the staff's attention to detail is remarkable. It's become my go-to place to unwind and de-stress. Highly recommend!",
  },
  {
    name: "Isabella M",
    role: "Radiance Unleashed",
    rating: 5,
    text: "I've tried various skincare treatments, but nothing compares to the radiant glow I've achieved at this spa. The skincare experts here go beyond expectations, customizing facials that leave my skin luminous. It's my secret weapon for a confidence boost!",
  },
  {
    name: "Alex B",
    role: "Couples' Retreat Fanatic",
    rating: 5,
    text: "My partner and I love indulging in the couples' spa experiences here. The intimate atmosphere, coupled with skilled therapists, creates magical moments of relaxation. It's become our ritual for reconnecting and unwinding together. Truly a gem!",
  },
];

const TestimonialsSlider = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[i];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative glass rounded-3xl p-10 md:p-16 shadow-elegant">
        <Quote className="absolute top-8 left-8 h-12 w-12 text-primary/15" />
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="font-display text-2xl md:text-3xl text-foreground leading-relaxed italic">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="mt-6 font-semibold text-foreground">{t.name}</p>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-primary">{t.role}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-3 mt-10">
          <button onClick={prev} className="h-11 w-11 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors grid place-items-center">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={next} className="h-11 w-11 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors grid place-items-center">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, k) => (
          <button
            key={k}
            onClick={() => setI(k)}
            className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-1.5 bg-primary/20"}`}
          />
        ))}
      </div>
    </div>
  );
};

const About = () => (
  <>
    <title>About Us — Hands That Heal</title>
    <meta name="description" content="Dedicated to providing care that relaxes, heals, and enhances your overall well-being. Meet the team at Hands That Heal." />

    {/* Hero */}
    <section className="relative pt-28 sm:pt-40 pb-12 sm:pb-20 overflow-hidden">
      <GradientBlobs />
      <div className="container-luxe relative max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">About Hands That Heal</p>
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl leading-[1.02]">
          Meet Hands <br />
          <span className="italic text-gradient">That Heal.</span>
        </h1>
        <p className="font-display text-xl sm:text-2xl text-muted-foreground mt-6 italic">
          Where advanced aesthetic care meets trusted expertise to help you feel confident in your skin.
        </p>
      </div>
    </section>

    {/* Clinic built on expertise */}
    <section className="py-24">
      <div className="container-luxe">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-[1.05]">
              A clinic built on expertise and precision.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              The Hands That Heal brings over 12+ years of professional experience in aesthetic and wellness care, delivering results-driven treatments with a clinical, detail-focused approach.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We are among the first to introduce advanced Cryotherapy treatments for the first time in HAMILTON, offering innovation in both beauty and orthopaedic care, alongside services such as laser hair removal with Primelase, organic teeth whitening, Brazilian waxing, and skin rejuvenation.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every treatment begins with understanding your concerns and building a personalised plan that always stays focused on safe procedures, visible results, and long-term improvement, not generic solutions.
            </p>
          </div>
          {/* Right — 2×2 cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, title: "Medical-Grade", desc: "Clinically trusted systems used in advanced dermatology for safe, precise results." },
              { icon: Heart,       title: "Inclusive",     desc: "A premium care for every skin tone, every body, every identity without limitation." },
              { icon: Users,       title: "Private",       desc: "Dedicated treatment spaces that ensure full comfort, discretion, and personal care." },
              { icon: Sparkles,    title: "Visibility",    desc: "Measurable, visible results designed to go beyond surface-level change." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-card rounded-2xl p-6 shadow-soft"
              >
                <f.icon className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-display text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Caring Hands Trusted Healing — image + text intro */}
    <section className="py-20">
      <div className="container-luxe grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Image grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-soft">
            <img src={staff[0].image} alt="Treatment" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-soft mt-8">
            <img src={staff[1].image} alt="Treatment" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">About Us</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
            Caring <span className="italic text-gradient">Hands</span>{" "}
            Trusted <span className="italic text-gradient">Healing</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            At Hands That Heal, we believe your skin deserves care that is gentle, effective, and tailored just for you. We understand that every person's skin is unique, and our goal is to make every visit comfortable, professional, and results-driven.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether it's laser hair removal, body contouring, or organic teeth whitening, we focus on treatments that leave you feeling confident, cared for, and at ease, from the moment you walk in to the moment you leave.
          </p>
          <Link to="/services">
            <button className="mt-8 px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors">
              View Our Services
            </button>
          </Link>
        </div>
      </div>
    </section>

    {/* Mission / Vision / Goal */}
    <section className="py-20 bg-soft-gradient">
      <div className="container-luxe">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Mission and Vision</p>
          <h2 className="font-display text-4xl md:text-5xl">
            Dedicated to providing care that relaxes, heals, and enhances your overall well-being.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {missionCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-3xl p-8"
            >
              <h3 className="font-display text-2xl text-primary mb-4">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-32">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Team</p>
          <h2 className="font-display text-5xl md:text-6xl">
            Caring <span className="italic text-gradient">Experts</span> You Can{" "}
            <span className="italic text-gradient">Trust</span>
          </h2>
        </div>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
          Our team is made up of trained, caring professionals who understand the importance of comfort, safety, and visible results. From your first consultation to your final session, you'll be guided with expertise, attention, and empathy. We combine experience with innovation, ensuring that every client receives treatments that are both safe and effective.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {staff.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img src={s.image} alt={s.name} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl">{s.name}</h3>
                <p className="text-sm text-primary mt-1">{s.role}</p>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{s.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-32 bg-soft-gradient">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Why Choose Us</p>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.05]">
            Care that feels right{" "}
            <span className="italic text-gradient">from the moment you walk in</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass rounded-3xl p-8 hover:shadow-elegant transition-all"
            >
              <span className="h-12 w-12 rounded-2xl bg-deep-gradient grid place-items-center mb-5">
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </span>
              <h3 className="font-display text-xl mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-32">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Testimonial</p>
          <h2 className="font-display text-5xl md:text-6xl">
            What our clients say about their{" "}
            <span className="italic text-gradient">experience</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Real stories from people who trusted us with their skin and left feeling more comfortable, confident, and cared for. Every visit is designed to make you feel at ease and see results that truly matter.
          </p>
        </div>
        <TestimonialsSlider />
      </div>
    </section>
  </>
);

export default About;
