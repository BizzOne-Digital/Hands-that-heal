import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getService, services } from "@/data/services";
import { GradientBlobs } from "@/components/GradientBlobs";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getService(slug || "");
  if (!service) return <Navigate to="/services" replace />;

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <title>{`${service.title} — Hands That Heal`}</title>
      <meta name="description" content={service.tagline.split("\n")[0]} />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-deep-gradient opacity-85" />
        </div>
        <div className="container-luxe relative z-10 pt-16">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl text-white leading-[1.05] max-w-4xl"
          >
            {service.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 max-w-2xl"
          >
            {service.tagline.includes("\n") ? (
              <ul className="space-y-2">
                {service.tagline.split("\n").map((line, i) =>
                  line.startsWith("-") ? (
                    <li key={i} className="flex items-center gap-2 text-white/85 font-display italic text-lg">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-glow shrink-0" />
                      {line.replace(/^-\s*/, "")}
                    </li>
                  ) : (
                    <p key={i} className="text-xl text-white/85 font-display italic mb-3">{line}</p>
                  )
                )}
              </ul>
            ) : (
              <p className="text-xl text-white/85 font-display italic">{service.tagline}</p>
            )}
          </motion.div>
          <Button asChild variant="gold" size="lg" className="mt-10">
            <Link to="/booking">Book This Treatment</Link>
          </Button>
        </div>
      </section>

      {/* Main content */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <GradientBlobs />
        <div className="container-luxe relative grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">

            {/* Overview */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Looking for Professional Aesthetic Care?</p>
              <h2 className="font-display text-3xl md:text-4xl mb-6">{service.detailHeading}</h2>
              {service.detailBody.split("\n\n").map((para, i) => (
                <p key={i} className="text-foreground leading-relaxed mt-4">{para}</p>
              ))}
            </div>

            {/* Benefits */}
            <div>
              {service.benefitsIntro.split("\n\n").map((block, i) => {
                const isShortFirstBlock = i === 0 && !block.includes("\n") && block.length < 80;
                return isShortFirstBlock
                  ? <h3 key={i} className="font-display text-2xl text-foreground mb-4">{block}</h3>
                  : <p key={i} className="text-muted-foreground mb-6 leading-relaxed">{block}</p>;
              })}
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((b) => {
                  const colonIdx = b.indexOf(":");
                  const hasTitle = colonIdx !== -1;
                  const title = hasTitle ? b.slice(0, colonIdx).trim() : null;
                  const desc = hasTitle ? b.slice(colonIdx + 1).trim() : b;
                  return (
                    <div key={b} className="glass rounded-2xl p-5 flex gap-3">
                      <span className="h-7 w-7 rounded-full bg-deep-gradient grid place-items-center shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-primary-foreground" />
                      </span>
                      <span className="text-sm text-foreground leading-relaxed">
                        {hasTitle ? <><strong>{title}:</strong> {desc}</> : desc}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Who it's for */}
            <div>
              <h2 className="font-display text-3xl mb-6">Who It's For</h2>
              <p className="text-muted-foreground mb-4">This treatment is ideal for individuals who:</p>
              <ul className="space-y-3">
                {service.forWho.map((w) => (
                  <li key={w} className="flex gap-3 text-muted-foreground">
                    <Sparkles className="h-4 w-4 text-accent mt-1 shrink-0" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience */}
            <div>
              <h2 className="font-display text-3xl mb-6">
                {service.experience.startsWith("BEFORE||") ? "Treatment Experience" : "Experience"}
              </h2>
              {service.experience.startsWith("BEFORE||") ? (
                <div className="space-y-8">
                  {service.experience.split("||").reduce<{ phase: string; steps: { title: string; desc: string }[] }[]>((acc, chunk) => {
                    if (["BEFORE", "DURING", "AFTER"].includes(chunk)) {
                      acc.push({ phase: chunk.charAt(0) + chunk.slice(1).toLowerCase() + " Session", steps: [] });
                    } else if (chunk.trim()) {
                      const parts = chunk.split("|");
                      for (let i = 0; i < parts.length - 1; i += 2) {
                        if (parts[i] && parts[i + 1]) {
                          acc[acc.length - 1]?.steps.push({ title: parts[i], desc: parts[i + 1] });
                        }
                      }
                    }
                    return acc;
                  }, []).map((phase) => (
                    <div key={phase.phase}>
                      <h3 className="font-display text-xl text-primary mb-4">{phase.phase}</h3>
                      <div className="space-y-3">
                        {phase.steps.map((step) => (
                          <div key={step.title} className="glass rounded-2xl p-5">
                            <p className="font-medium text-foreground mb-1">{step.title}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground leading-relaxed">{service.experience}</p>
              )}
            </div>

            {/* FAQs */}
            <div>
              <h2 className="font-display text-3xl mb-8">Frequently Asked</h2>
              <Accordion type="single" collapsible className="bg-card rounded-3xl shadow-soft px-6">
                {service.faqs.map((f, i) => (
                  <AccordionItem key={i} value={`f${i}`} className="border-border">
                    <AccordionTrigger className="text-left font-display text-lg hover:no-underline">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 self-start space-y-6">
            <div className="bg-deep-gradient rounded-3xl p-8 text-primary-foreground shadow-elegant">
              <p className="text-xs uppercase tracking-[0.3em] text-primary-glow mb-2">Looking for relief?</p>
              <h3 className="font-display text-3xl">Relax Your Body, Restore with Hands That Heal</h3>
              <p className="mt-3 text-primary-foreground/80 text-sm">Book a private consultation today.</p>
              <Button asChild variant="gold" size="lg" className="mt-6 w-full">
                <Link to="/booking">Book Now</Link>
              </Button>
              <Button asChild variant="glass" size="lg" className="mt-3 w-full">
                <Link to="/contact">Ask a Question</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* Service-specific CTA */}
      {service.cta && (
        <section className="py-16">
          <div className="container-luxe">
            <div className="relative overflow-hidden rounded-[2rem] bg-deep-gradient p-8 sm:p-12 md:p-16 shadow-elegant">
              <div className="blob bg-primary-glow h-[500px] w-[500px] -top-40 -right-20 opacity-30" />
              <div className="blob bg-accent h-[400px] w-[400px] -bottom-40 -left-20 opacity-20" />
              <div className="relative z-10 max-w-2xl">
                <h2 className="font-display text-4xl md:text-5xl text-primary-foreground leading-[1.05]">
                  {service.cta.heading}
                </h2>
                <div className="mt-6 space-y-3">
                  {service.cta.body.split("\n\n").map((para, i) => (
                    <p key={i} className="text-lg text-primary-foreground/80 leading-relaxed">{para}</p>
                  ))}
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button asChild variant="gold" size="xl">
                    <Link to="/booking">{service.cta.primaryLabel} <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                  <Button asChild variant="glass" size="xl">
                    <Link to="/contact">{service.cta.secondaryLabel}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="py-24 bg-soft-gradient">
        <div className="container-luxe">
          <h2 className="font-display text-4xl mb-10">Continue exploring</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link key={o.slug} to={`/services/${o.slug}`} className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={o.image} alt={o.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl group-hover:text-primary transition-colors">{o.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 italic">{o.tagline.split("\n")[0]}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
