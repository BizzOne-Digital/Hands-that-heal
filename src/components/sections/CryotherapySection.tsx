import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Snowflake, Zap, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

import cryoAesthetic from "@/assets/cryo-aesthetic.jpg";
import cryoOrtho from "@/assets/cryo-ortho.jpg";
import cryoSports from "@/assets/cryo-sports.jpg";
import cryoPostsurgery from "@/assets/cryo-postsurgery.jpg";
import cryo1 from "@/assets/cryo-1.jpg";
import cryo2 from "@/assets/cryo-2.jpg";
import cryo3 from "@/assets/cryo-3.jpg";

const subServices = [
  {
    id: "aesthetic",
    label: "Aesthetic",
    icon: Sparkles,
    image: cryoAesthetic,
    heading: "Aesthetic Cryotherapy",
    tagline: "Body sculpting, Frotox & skin rejuvenation",
    description:
      "Non-invasive cold therapy for visible aesthetic improvements — from targeted fat reduction to natural skin tightening, with zero downtime.",
    treatments: [
      { name: "Cryo Slimming", desc: "Targeted fat reduction using controlled cold to eliminate fat cells naturally." },
      { name: "Frotox", desc: "A needle-free alternative to Botox that reduces fine lines and tightens skin." },
      { name: "Skin Conditions", desc: "Reduces inflammation, redness, and uneven texture using precise cold application." },
    ],
    link: "/services/cryo-aesthetic",
    color: "from-teal-500/20 to-teal-700/10",
  },
  {
    id: "ortho",
    label: "Orthopaedic",
    icon: ShieldCheck,
    image: cryoOrtho,
    heading: "Orthopaedic Cryotherapy",
    tagline: "Joint pain relief & injury recovery",
    description:
      "Targeted cold therapy to reduce inflammation, support joint health, and aid recovery from orthopaedic conditions — drug-free.",
    treatments: [
      { name: "Joint Pain Relief", desc: "Reduces inflammation and discomfort in joints affected by arthritis or chronic pain." },
      { name: "Injury Recovery", desc: "Accelerates healing of soft tissue injuries, sprains, and strains." },
      { name: "Post-Op Support", desc: "Supports recovery after orthopaedic procedures by reducing swelling and pain." },
    ],
    link: "/services/cryo-ortho",
    color: "from-blue-500/20 to-blue-700/10",
  },
  {
    id: "sports",
    label: "Sports",
    icon: Zap,
    image: cryoSports,
    heading: "Sports Cryotherapy",
    tagline: "Athletic recovery & performance support",
    description:
      "Performance-focused cryotherapy to accelerate muscle recovery, reduce soreness, and help you train harder, longer.",
    treatments: [
      { name: "Muscle Recovery", desc: "Reduces delayed onset muscle soreness (DOMS) after intense training sessions." },
      { name: "Performance Support", desc: "Accelerates between-session recovery so athletes perform at their peak." },
      { name: "Mobility Enhancement", desc: "Reduces stiffness and improves range of motion for better athletic output." },
    ],
    link: "/services/cryo-sports",
    color: "from-emerald-500/20 to-emerald-700/10",
  },
  {
    id: "postsurgery",
    label: "Post Surgery",
    icon: ShieldCheck,
    image: cryoPostsurgery,
    heading: "Post-Surgery Cryotherapy",
    tagline: "Healing support & swelling reduction",
    description:
      "Gentle, targeted cold therapy to manage post-operative swelling, relieve pain, and support your body's natural healing process.",
    treatments: [
      { name: "Swelling Reduction", desc: "Manages post-surgical swelling and fluid retention in treated areas." },
      { name: "Pain Management", desc: "Provides natural, drug-free pain relief during post-operative recovery." },
      { name: "Healing Support", desc: "Stimulates circulation to support faster, more comfortable recovery." },
    ],
    link: "/services/cryo-postsurgery",
    color: "from-violet-500/20 to-violet-700/10",
  },
];

const badges = [
  { icon: ShieldCheck, text: "Pain-free & non-invasive" },
  { icon: Zap, text: "No needles, no downtime" },
  { icon: Snowflake, text: "Hamilton's only SubZero provider" },
];

export const CryotherapySection = () => {
  const [active, setActive] = useState("aesthetic");
  const current = subServices.find((s) => s.id === active)!;

  return (
    <section className="py-12 sm:py-20 overflow-hidden relative">
      {/* subtle background gradient */}
      <div className="absolute inset-0 bg-soft-gradient pointer-events-none" />

      <div className="container-luxe relative">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          {/* ice icon */}
          <span className="inline-flex h-14 w-14 rounded-2xl bg-deep-gradient items-center justify-center mb-5 shadow-elegant mx-auto">
            <Snowflake className="h-7 w-7 text-primary-foreground" />
          </span>

          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Advanced Cold Therapy</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Localized{" "}
            <span className="italic text-gradient">Cryotherapy</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
            Hamilton's only provider of SubZero Cryotherapy. Targeted cold therapy for aesthetic results, pain relief, athletic recovery, and post-surgical healing.
          </p>

          {/* ── 3 images ── */}
          <div className="grid grid-cols-3 gap-3 mt-8">
            {[cryo1, cryo2, cryo3].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden shadow-soft group h-36 sm:h-44"
              >
                <img
                  src={src}
                  alt="Cryotherapy treatment"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>

          {/* trust badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {badges.map((b) => (
              <div key={b.text} className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-soft">
                <b.icon className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{b.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Tab buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {subServices.map((s) => {
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === s.id
                    ? "bg-primary text-primary-foreground shadow-elegant scale-105"
                    : "bg-card border border-border text-foreground hover:bg-primary/10 hover:border-primary/30"
                }`}
              >
                <Icon className="h-4 w-4" />
                {s.label}
              </button>
            );
          })}
        </motion.div>

        {/* ── Tab Content ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-8 items-stretch"
          >
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-elegant group min-h-[340px]">
              <img
                src={current.image}
                alt={current.heading}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 absolute inset-0"
              />
              {/* overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              {/* bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-sm font-medium">
                  <Snowflake className="h-3.5 w-3.5" />
                  {current.label} Cryotherapy
                </span>
                <p className="mt-2 text-white/90 text-base font-display italic">{current.tagline}</p>
              </div>
            </div>

            {/* Content card */}
            <div className="bg-card rounded-3xl shadow-soft p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-3xl md:text-4xl mb-3">{current.heading}</h3>
                <p className="text-muted-foreground leading-relaxed mb-7">{current.description}</p>

                {/* Treatments */}
                <div className="space-y-4">
                  {current.treatments.map((t, i) => (
                    <motion.div
                      key={t.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.35 }}
                      className="flex gap-4 p-4 rounded-2xl bg-secondary/60 hover:bg-secondary transition-colors"
                    >
                      <span className="h-8 w-8 rounded-xl bg-deep-gradient grid place-items-center shrink-0 mt-0.5 shadow-soft">
                        <Snowflake className="h-4 w-4 text-primary-foreground" />
                      </span>
                      <div>
                        <p className="font-medium text-foreground text-sm">{t.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{t.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mt-8">
                <Button asChild variant="hero" size="lg">
                  <Link to={current.link}>
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/booking">Book a Session</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 relative overflow-hidden rounded-[2rem] bg-deep-gradient p-6 sm:p-10 shadow-elegant flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="blob bg-primary-glow h-[300px] w-[300px] -top-20 -right-10 opacity-25" />
          <div className="blob bg-accent h-[200px] w-[200px] -bottom-16 -left-10 opacity-20" />
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.3em] text-primary-glow mb-2">Hamilton's Only Provider</p>
            <h3 className="font-display text-2xl sm:text-3xl text-primary-foreground leading-[1.1]">
              Experience SubZero Cryotherapy — <span className="italic">First in Hamilton</span>
            </h3>
            <p className="mt-2 text-primary-foreground/75 text-sm max-w-xl">
              From body sculpting to sports recovery, our SubZero technology delivers clinical results with zero downtime.
            </p>
          </div>
          <div className="relative z-10 flex flex-wrap gap-3 shrink-0">
            <Button asChild variant="gold" size="lg">
              <Link to="/services/localized-cryotherapy">
                Explore Cryotherapy <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="lg">
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
