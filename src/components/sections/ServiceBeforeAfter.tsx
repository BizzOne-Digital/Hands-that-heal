import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

// ── IMAGE MAP ─────────────────────────────────────────────────────────────────
// Place before/after images in src/assets/results/ with these filenames:
//   laser-before.jpg   laser-after.jpg
//   teeth-before.jpg   teeth-after.jpg
//   contour-before.jpg contour-after.jpg
//   waxing-before.jpg  waxing-after.jpg
//   cryo-before.jpg    cryo-after.jpg
//
// Once images are added, uncomment the real imports below and remove placeholders.
// ─────────────────────────────────────────────────────────────────────────────

// import laserBefore   from "@/assets/results/laser-before.jpg";
// import laserAfter    from "@/assets/results/laser-after.jpg";
// import teethBefore   from "@/assets/results/teeth-before.jpg";
// import teethAfter    from "@/assets/results/teeth-after.jpg";
// import contourBefore from "@/assets/results/contour-before.jpg";
// import contourAfter  from "@/assets/results/contour-after.jpg";
// import waxingBefore  from "@/assets/results/waxing-before.jpg";
// import waxingAfter   from "@/assets/results/waxing-after.jpg";
// import cryoBefore    from "@/assets/results/cryo-before.jpg";
// import cryoAfter     from "@/assets/results/cryo-after.jpg";

const PH_B = (label: string) => `https://placehold.co/800x600/d4e8e0/4a9e8a?text=Before+%E2%80%94+${encodeURIComponent(label)}`;
const PH_A = (label: string) => `https://placehold.co/800x600/4a9e8a/ffffff?text=After+%E2%80%94+${encodeURIComponent(label)}`;

const resultMap: Record<string, { before: string; after: string; desc: string }> = {
  "laser-hair-removal": {
    before: PH_B("Laser"),
    after:  PH_A("Smooth Skin"),
    desc:   "Visible hair reduction after Primelase laser sessions — smooth, irritation-free skin.",
  },
  "organic-teeth-whitening": {
    before: PH_B("Teeth"),
    after:  PH_A("Bright Smile"),
    desc:   "Noticeably brighter smile after a single organic whitening session.",
  },
  "body-contouring": {
    before: PH_B("Contouring"),
    after:  PH_A("Sculpted"),
    desc:   "Visible body definition and reduced fat deposits after MC1 PLUS sessions.",
  },
  "brazilian-laser": {
    before: PH_B("Waxing"),
    after:  PH_A("Smooth Skin"),
    desc:   "Clean, smooth skin after professional Brazilian waxing — no irritation.",
  },
  "localized-cryotherapy": {
    before: PH_B("Cryo"),
    after:  PH_A("Sculpted"),
    desc:   "Improved contour and reduced puffiness after SubZero cryotherapy sessions.",
  },
};

// ── Slider ────────────────────────────────────────────────────────────────────
const Slider = ({ before, after }: { before: string; after: string }) => {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-elegant select-none cursor-col-resize"
      onMouseDown={() => { dragging.current = true; }}
      onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchMove={(e) => updatePos(e.touches[0].clientX)}
      onTouchStart={() => { dragging.current = true; }}
      onTouchEnd={() => { dragging.current = false; }}
    >
      {/* After — full width behind */}
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover object-center" draggable={false} />

      {/* Before — clipped left */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt="Before"
          className="absolute inset-0 h-full object-cover object-left"
          style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
          draggable={false}
        />
      </div>

      {/* Divider + handle */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white shadow-elegant flex items-center justify-center pointer-events-auto cursor-col-resize">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M8 5L4 11L8 17" stroke="#4a9e8a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 5L18 11L14 17" stroke="#4a9e8a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute bottom-4 left-4 z-10 bg-foreground/60 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">Before</span>
      <span className="absolute bottom-4 right-4 z-10 bg-primary/80 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">After</span>
    </div>
  );
};

// ── Section ───────────────────────────────────────────────────────────────────
export const ServiceBeforeAfter = ({ slug }: { slug: string }) => {
  const result = resultMap[slug];
  if (!result) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-display text-3xl mb-6">See the Results</h2>
      <Slider before={result.before} after={result.after} />
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed text-center">{result.desc}</p>
      <p className="text-center text-xs text-muted-foreground mt-2 flex items-center justify-center gap-2">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-primary">
          <path d="M5 3L2 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 3L12 7L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Drag the handle to compare before &amp; after
      </p>
    </motion.div>
  );
};
