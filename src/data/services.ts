import laser from "@/assets/service-laser.jpg";
import teeth from "@/assets/service-teeth.jpg";
import contour from "@/assets/service-contouring.jpg";
import brazilian from "@/assets/service-brazilian.jpg";
import cryo from "@/assets/service-cryo.jpg";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  detailHeading: string;
  detailBody: string;
  benefitsIntro: string;
  image: string;
  benefits: string[];
  forWho: string[];
  experience: string;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "laser-hair-removal",
    title: "Laser Hair Removal",
    tagline: "Smooth skin without the constant shaving or waxing.",
    description:
      "Say goodbye to constant shaving and waxing. Our laser hair removal treatments use advanced technology to target hair follicles at the root, helping reduce hair growth over time while keeping your skin smooth and irritation-free.",
    detailHeading: "Advanced Laser Hair Removal for Smooth Skin",
    detailBody:
      "Say goodbye to constant shaving and waxing. Our laser hair removal treatments use advanced technology to target hair follicles at the root, helping reduce hair growth over time while keeping your skin smooth and irritation-free. The treatment is precise, safe, and designed to work effectively across different skin types.\n\nWe use premium equipment like Primelase, a high-powered diode laser known for its speed, effectiveness, and comfort. Its advanced cooling system ensures a more comfortable experience while delivering consistent results, even on sensitive areas.",
    benefitsIntro:
      "The procedure is quick and efficient, with sessions tailored to your hair type, skin tone, and treatment area. Over multiple sessions, hair becomes finer, lighter, and significantly reduced.",
    image: laser,
    benefits: [
      "Long-term reduction in unwanted hair",
      "Smoother, irritation-free skin",
      "Helps prevent ingrown hairs",
      "Safe and effective for multiple body areas",
      "Fast sessions with minimal discomfort",
    ],
    forWho: [
      "Individuals tired of frequent shaving or waxing",
      "People dealing with ingrown hairs or skin irritation",
      "Suitable for both men and women",
      "Works on a wide range of skin tones and hair types (best results on darker hair)",
      "Ideal for areas like face, arms, legs, underarms, bikini, and back",
    ],
    experience:
      "Each session is designed to be comfortable and efficient. You may feel a mild warming or snapping sensation, but advanced cooling technology minimizes discomfort. There's no downtime, so you can return to your routine immediately after treatment. With a proper treatment plan, you'll notice a visible reduction and smoother skin after just a few sessions.",
    faqs: [
      { q: "Does laser hair removal hurt?", a: "Most clients describe it as a slight warming or tingling sensation. Our trained team uses gentle techniques to make each session as comfortable as possible." },
      { q: "How many laser sessions will I need?", a: "Everyone's hair growth is different, but most clients see significant results within 6–8 sessions. Our unlimited yearly plan ensures you get the full benefit without worrying about extra costs." },
      { q: "Can laser be done on darker skin tones?", a: "Yes! We use advanced technology that is safe and effective for all skin tones, including darker skin." },
    ],
  },
  {
    slug: "organic-teeth-whitening",
    title: "Organic Teeth Whitening",
    tagline: "A brighter smile using gentle, safe whitening methods.",
    description:
      "Achieve a brighter, more confident smile with our organic teeth whitening treatment. Formulated with gentle, non-toxic ingredients, this treatment effectively lifts stains and discolouration while protecting enamel and minimizing sensitivity.",
    detailHeading: "Radiant Smiles with Advanced Teeth Whitening",
    detailBody:
      "Achieve a brighter, more confident smile with our organic teeth whitening treatment. Formulated with gentle, non-toxic ingredients, this treatment effectively lifts stains and discolouration while protecting enamel and minimizing sensitivity — making it a safer alternative to traditional whitening methods.\n\nWe use advanced Sunna teeth whitening technology combined with organic, peroxide-free or low-peroxide formulas. The system accelerates results while protecting your enamel, breaking down stains caused by coffee, tea, smoking, and daily habits, for a natural, healthy-looking whiteness.",
    benefitsIntro:
      "Each session is carefully tailored to your current tooth shade and desired brightness, ensuring even, natural-looking results.",
    image: teeth,
    benefits: [
      "Whitens teeth safely without harsh chemicals",
      "Minimizes tooth sensitivity",
      "Removes stains from food, drinks, and smoking",
      "Protects enamel while enhancing brightness",
      "Quick and noticeable results",
    ],
    forWho: [
      "Individuals with stained or discoloured teeth",
      "People looking for a gentle, non-toxic whitening option",
      "Those with sensitivity to traditional whitening treatments",
      "Anyone wanting a brighter, more confident smile",
      "Suitable for regular maintenance of dental brightness",
    ],
    experience:
      "The treatment is quick, comfortable, and non-invasive. A whitening gel is applied to the teeth and activated using LED light technology to enhance effectiveness. You may feel slight tingling, but the process is generally sensitivity-free. There's no downtime, and you can resume normal activities immediately, with visibly brighter teeth after just one session.",
    faqs: [
      { q: "Is teeth whitening safe?", a: "Yes, we use organic, gentle ingredients that minimize sensitivity while effectively reducing stains." },
      { q: "How long does a session take?", a: "A standard session lasts 30–45 minutes, and results are often visible immediately." },
      { q: "Can it damage my enamel?", a: "Not at all. Our method is designed to protect enamel while brightening your smile." },
    ],
  },
  {
    slug: "body-contouring",
    title: "Body Contouring",
    tagline: "Shape and define areas that don't change with diet or workouts.",
    description:
      "Shape and refine your body with advanced, non-surgical body contouring treatments designed to target stubborn fat and improve overall definition. Our approach focuses on reducing localized fat deposits while supporting skin tightening.",
    detailHeading: "Achieve a more toned and defined look without surgery or downtime.",
    detailBody:
      "Shape and refine your body with advanced, non-surgical body contouring treatments designed to target stubborn fat and improve overall definition. Our approach focuses on reducing localized fat deposits while supporting skin tightening, helping you achieve a smoother, more sculpted appearance without downtime.\n\nWe use the MCI Med Contour system, a high-performance body contouring device that combines technologies like radiofrequency, ultrasound, and vacuum therapy. It works by breaking down fat cells, stimulating collagen production, and improving skin firmness, delivering safe, gradual, and natural-looking results.",
    benefitsIntro:
      "Each treatment is customized based on your body type, target areas, and desired outcome. Over multiple sessions, you'll notice improved contour, reduced fat in treated areas, and firmer-looking skin.",
    image: contour,
    benefits: [
      "Targets and reduces stubborn fat pockets",
      "Improves skin tightness and elasticity",
      "Enhances body shape and definition",
      "Non-invasive with no downtime",
      "Natural-looking, gradual results",
    ],
    forWho: [
      "Individuals close to their ideal weight with stubborn fat areas",
      "People looking for non-surgical body shaping solutions",
      "Those experiencing mild to moderate skin laxity",
      "Suitable for both men and women",
      "Ideal for areas like face, arms, legs, underarms, bikini, and back",
    ],
    experience:
      "Each session is comfortable and tailored to your needs. Depending on the technology used, you may experience cooling, gentle warmth, or mild vibrations during the treatment. There is no downtime, so you can return to your daily routine immediately. With a consistent treatment plan, results become more noticeable over time, leaving you with a more contoured and refined silhouette.",
    faqs: [
      { q: "Is body contouring safe?", a: "Absolutely. Our treatments are non-invasive and gentle, using proven techniques to reduce fat without surgery." },
      { q: "Will I need downtime after treatment?", a: "No downtime is required. You can resume your daily routine immediately." },
      { q: "When will I see results?", a: "Most clients notice subtle changes after the first few sessions, with more visible results over multiple treatments." },
    ],
  },
  {
    slug: "brazilian-laser",
    title: "Brazilian Laser (M/F)",
    tagline: "Comfortable, private care for sensitive areas and all skin tones.",
    description:
      "Experience smooth, hair-free skin with our Brazilian laser hair removal treatment, designed for both men and women. This treatment targets hair at the root using advanced laser technology, helping reduce hair growth over time while keeping the skin soft, clean, and irritation-free.",
    detailHeading: "Precision Brazilian Laser Treatment for Lasting Results",
    detailBody:
      "Experience smooth, hair-free skin with our Brazilian laser hair removal treatment, designed for both men and women. This treatment targets hair at the root using advanced laser technology, helping reduce hair growth over time while keeping the skin soft, clean, and irritation-free.\n\nWe use premium equipment like Primelase, a high-powered diode laser known for its precision, speed, and comfort. Its advanced cooling system ensures a safe and comfortable experience, even on sensitive intimate areas, while delivering effective and long-lasting results.",
    benefitsIntro:
      "Each session is tailored to your hair type, skin tone, and sensitivity level. Over multiple sessions, hair becomes finer, lighter, and significantly reduced, leaving the area smooth and well-maintained.",
    image: brazilian,
    benefits: [
      "Long-term reduction in intimate hair growth",
      "Smoother, cleaner, and irritation-free skin",
      "Helps prevent ingrown hairs and razor bumps",
      "Safe for sensitive areas",
      "Quick sessions with minimal discomfort",
    ],
    forWho: [
      "Individuals tired of shaving or waxing intimate areas",
      "People dealing with ingrown hairs or irritation",
      "Suitable for both men and women",
      "Those looking for a hygienic and long-term solution",
      "Anyone wanting smooth, low-maintenance results",
    ],
    experience:
      "Each session is designed to be quick, discreet, and comfortable. You may feel a mild warming or snapping sensation, but advanced cooling technology helps minimize discomfort. There's no downtime, and you can return to your routine immediately after treatment. With a proper treatment plan, you'll notice a visible reduction and smoother skin after just a few sessions.",
    faqs: [
      { q: "Is Brazilian laser safe for sensitive skin?", a: "Yes. Our trained professionals prioritize comfort and hygiene, making every session private and gentle." },
      { q: "How often should I schedule sessions?", a: "Typically every 4–6 weeks until desired results are achieved. After that, touch-ups are usually needed every few months." },
      { q: "Will it cause irritation?", a: "Minimal redness may occur, which usually disappears within a few hours. We also provide tips to care for your skin post-treatment." },
    ],
  },
  {
    slug: "localized-cryotherapy",
    title: "Localized Cryotherapy",
    tagline: "Target stubborn areas with advanced cryotherapy for a sculpted appearance.",
    description:
      "Target stubborn areas with precision using our localized cryotherapy treatment. This non-invasive solution uses controlled cooling to help reduce fat cells, support skin tightening, and enhance body contour — without surgery or downtime.",
    detailHeading: "Sculpt Your Body with Advanced Cryotherapy",
    detailBody:
      "Target stubborn areas with precision using our localized cryotherapy treatment. This non-invasive solution uses controlled cooling to help reduce fat cells, support skin tightening, and enhance body contour — without surgery or downtime.\n\nWe use the advanced Sub Zero cryotherapy system, which delivers precise, controlled low temperatures to targeted areas. This triggers the natural breakdown of fat cells while preserving surrounding tissue and also stimulates circulation, improving skin firmness for a more sculpted appearance.",
    benefitsIntro:
      "Each session is tailored to your target areas and body goals, ensuring safe, effective, and gradual results over time.",
    image: cryo,
    benefits: [
      "Helps reduce stubborn fat in targeted areas",
      "Supports skin tightening and firmness",
      "Enhances body contour and definition",
      "Non-invasive with no downtime",
      "Natural, gradual results",
    ],
    forWho: [
      "Individuals with localized fat that resists diet and exercise",
      "People looking for non-surgical fat reduction",
      "Those wanting to improve body contour and skin firmness",
      "Suitable for both men and women",
      "Ideal for areas like abdomen, thighs, arms, and love handles",
    ],
    experience:
      "Each session is quick, comfortable, and focused on specific areas. You'll feel a cooling sensation as the treatment works beneath the skin. There is no downtime, allowing you to return to your daily routine immediately. With a consistent treatment plan, you'll notice a more sculpted, smoother, and refined look over time.",
    faqs: [
      { q: "Does localized cryotherapy hurt?", a: "Most clients feel a cold, tingling, or mild numbness sensation during treatment. The Sub Zero system is designed to be comfortable, targeting only the treatment area while keeping surrounding tissue safe." },
      { q: "How many sessions will I need?", a: "Results vary depending on your body type and target areas, but most clients see noticeable improvement after 4–6 sessions. Your plan can be tailored to achieve gradual, natural-looking results." },
      { q: "Is it safe for all areas of the body?", a: "Yes! Localized cryotherapy with Sub Zero is safe for areas like the abdomen, thighs, arms, and love handles, and it is non-invasive with no downtime." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
