import type { Service } from "@/types";

/**
 * The seven approved services. This list is intentionally exhaustive —
 * do not add unrelated services (roofing, gates, railings, structural
 * steel, general fabrication, construction, standalone welding).
 *
 * When a real backend/admin exists, this array becomes the seed data
 * for a `Service` database table.
 */
export const services: Service[] = [
  {
    slug: "new-almirah-orders",
    name: "New Almirah Orders",
    shortName: "New Almirahs",
    tagline: "Built to your size, made to hold up.",
    cardDescription:
      "A new steel almirah, sized and configured for your room and what you need to store.",
    icon: "cabinet",
    heroImage: {
      src: "/images/services/new-almirah-orders.jpg",
      alt: "New steel almirah placeholder",
      aspect: "landscape",
    },
    gridSpan: "large",
    intro:
      "A new almirah is a long-term piece of furniture. We build each one to the dimensions and layout you need, using steel that's prepared and finished properly before it ever reaches your home.",
    whatWeDo: [
      "Discuss the space, size, and storage needs with you",
      "Confirm shelf layout, shutter style, and finish",
      "Cut and prepare the steel to the agreed specification",
      "Assemble, finish, and deliver the completed almirah",
    ],
    commonRequirements: [
      "A specific height, width, or depth to fit an alcove or wall",
      "A particular number of shelves or a locker section",
      "A finish or colour to match existing furniture",
      "Replacing an old almirah that's no longer usable",
    ],
    process: [
      { title: "Tell Us What You Need", description: "Share the size, layout, and any specific requirements for your almirah." },
      { title: "Share Photos & Requirements", description: "Send photos of the space or an existing piece so we understand the context." },
      { title: "Get Your Quote & Schedule", description: "We confirm the specification and give you a quotation and timeline." },
      { title: "We Complete the Service", description: "Your almirah is built, finished, and delivered as agreed." },
    ],
    hasBeforeAfter: false,
    faqs: [
      {
        question: "Can I choose a custom size for my almirah?",
        answer:
          "Yes. New almirahs are built to the size and shelf layout you specify, not off a fixed catalogue.",
      },
      {
        question: "How long does a new almirah order take?",
        answer:
          "It depends on the size and specification. Contact us with your requirements and we'll give you a realistic timeline.",
      },
      {
        question: "What does a new almirah cost?",
        answer: "Contact us for a quotation — pricing depends on size, steel gauge, and finish.",
      },
    ],
    metaDescription:
      "Order a new steel almirah built to your exact size, shelf layout, and finish from High Look Steel Furniture.",
  },
  {
    slug: "bulk-manufacturing",
    name: "New Bulk Manufacturing",
    shortName: "Bulk Manufacturing",
    tagline: "Multiple units, one consistent standard.",
    cardDescription:
      "Volume orders of steel almirahs and furniture for hostels, offices, and institutions, built to a consistent spec.",
    icon: "factory",
    heroImage: {
      src: "/images/services/bulk-manufacturing.jpg",
      alt: "Bulk steel furniture manufacturing placeholder",
      aspect: "landscape",
    },
    gridSpan: "medium",
    intro:
      "For hostels, offices, and institutions that need several identical units, we manufacture in bulk while keeping every unit to the same specification and finish.",
    whatWeDo: [
      "Agree a single specification for the full order",
      "Plan the cutting and production schedule",
      "Manufacture units to a consistent standard",
      "Coordinate delivery in line with your timeline",
    ],
    commonRequirements: [
      "A fixed quantity of identical almirahs or lockers",
      "A delivery schedule spread across phases",
      "A specific budget per unit",
      "Institutional or hostel-style storage furniture",
    ],
    process: [
      { title: "Tell Us What You Need", description: "Share the quantity, specification, and intended use of the units." },
      { title: "Share Photos & Requirements", description: "Provide reference photos or drawings if you have a specific design in mind." },
      { title: "Get Your Quote & Schedule", description: "We confirm per-unit pricing and a realistic production schedule." },
      { title: "We Complete the Service", description: "Units are manufactured and delivered according to the agreed plan." },
    ],
    hasBeforeAfter: false,
    faqs: [
      {
        question: "Is there a minimum quantity for bulk manufacturing?",
        answer: "Contact us with your required quantity and we'll confirm whether it fits our bulk manufacturing process.",
      },
      {
        question: "Can units be delivered in phases?",
        answer: "Yes, delivery can be scheduled in phases where that suits your project timeline.",
      },
    ],
    metaDescription:
      "Bulk manufacturing of steel almirahs and furniture for hostels, offices, and institutions from High Look Steel Furniture.",
  },
  {
    slug: "cutting-preparing",
    name: "Cutting & Preparing",
    shortName: "Cutting & Preparing",
    tagline: "Precise cuts, properly prepared steel.",
    cardDescription:
      "Steel sheet cutting and surface preparation, done to the measurements your project needs.",
    icon: "cut",
    heroImage: {
      src: "/images/services/cutting-preparing.jpg",
      alt: "Steel cutting and preparing placeholder",
      aspect: "square",
    },
    gridSpan: "medium",
    intro:
      "Before any almirah is assembled or painted, the steel has to be cut and prepared correctly. We handle this stage precisely, whether it's for one of our own furniture orders or a preparation job on its own.",
    whatWeDo: [
      "Measure and mark steel sheet to the required dimensions",
      "Cut to size with clean, consistent edges",
      "Prepare surfaces for the next stage of work",
      "Check finished pieces against the original specification",
    ],
    commonRequirements: [
      "Steel sheet cut to specific panel sizes",
      "Preparation ahead of assembly or painting",
      "Consistent sizing across multiple pieces",
    ],
    process: [
      { title: "Tell Us What You Need", description: "Share the measurements and quantity of pieces to be cut and prepared." },
      { title: "Share Photos & Requirements", description: "Send a sketch, drawing, or reference if the shapes are non-standard." },
      { title: "Get Your Quote & Schedule", description: "We confirm the scope and give you a timeline for the work." },
      { title: "We Complete the Service", description: "Steel is cut, prepared, and handed off ready for the next stage." },
    ],
    hasBeforeAfter: false,
    faqs: [
      {
        question: "Do you cut steel for projects that aren't almirahs?",
        answer: "This service covers cutting and preparing steel furniture components. Contact us to check if your project fits.",
      },
      {
        question: "Can you match measurements from an existing piece?",
        answer: "Yes, share the measurements or the piece itself and we'll cut to match.",
      },
    ],
    metaDescription:
      "Precise steel sheet cutting and surface preparation services from High Look Steel Furniture.",
  },
  {
    slug: "almirah-repairs",
    name: "Almirah Repairs",
    shortName: "Repairs",
    tagline: "Fix what's worn, not what's fine.",
    cardDescription:
      "Structural and surface repairs for steel almirahs — dents, rust, weak joints, and worn panels.",
    icon: "wrench",
    heroImage: {
      src: "/images/services/almirah-repairs.jpg",
      alt: "Steel almirah repair placeholder",
      aspect: "landscape",
    },
    gridSpan: "large",
    intro:
      "An almirah with rust, a dent, or a weakened joint doesn't always need replacing. We assess the damage and repair what can be repaired, so the piece lasts longer.",
    whatWeDo: [
      "Inspect the almirah and identify the damage",
      "Repair rust, dents, or weak joints and panels",
      "Reinforce structural points where needed",
      "Finish the repaired area to match the rest of the piece",
    ],
    commonRequirements: [
      "Rust spots on panels, shelves, or the base",
      "A dented door or side panel",
      "A joint or hinge point that's come loose",
      "General wear after years of use",
    ],
    process: [
      { title: "Tell Us What You Need", description: "Describe the damage or send photos of the almirah." },
      { title: "Share Photos & Requirements", description: "Clear photos help us assess the repair before we arrive." },
      { title: "Get Your Quote & Schedule", description: "We confirm the repair approach and a quotation." },
      { title: "We Complete the Service", description: "The repair is carried out and finished to match the piece." },
    ],
    hasBeforeAfter: true,
    faqs: [
      {
        question: "Can rusted almirahs always be repaired?",
        answer: "Most rust and surface damage can be repaired. Share photos and we'll assess whether repair or another approach is more suitable.",
      },
      {
        question: "Do you repair almirahs you didn't originally make?",
        answer: "Yes, we repair steel almirahs regardless of who originally made them.",
      },
    ],
    metaDescription:
      "Steel almirah repair services for rust, dents, and structural damage from High Look Steel Furniture.",
  },
  {
    slug: "new-legs-installation",
    name: "Almirah New Legs Installation",
    shortName: "New Legs",
    tagline: "Stable footing for an ageing base.",
    cardDescription:
      "Replacement and installation of new legs for steel almirahs that have started to wobble or corrode at the base.",
    icon: "leg",
    heroImage: {
      src: "/images/services/new-legs-installation.jpg",
      alt: "Steel almirah leg installation placeholder",
      aspect: "square",
    },
    gridSpan: "medium",
    intro:
      "Legs take the most wear and moisture exposure of any part of an almirah. When they corrode or bend, we fit new legs so the piece stands level and stable again.",
    whatWeDo: [
      "Inspect the existing legs and base",
      "Remove damaged or corroded legs",
      "Fit and secure new legs",
      "Check the almirah stands level and stable",
    ],
    commonRequirements: [
      "An almirah that wobbles or leans",
      "Legs corroded from moisture at floor level",
      "A missing or bent leg",
    ],
    process: [
      { title: "Tell Us What You Need", description: "Describe the issue with the legs or base." },
      { title: "Share Photos & Requirements", description: "Photos of the base help us bring the right materials." },
      { title: "Get Your Quote & Schedule", description: "We confirm the work and a quotation." },
      { title: "We Complete the Service", description: "New legs are fitted and checked for stability." },
    ],
    hasBeforeAfter: true,
    faqs: [
      {
        question: "Can you match the height of the original legs?",
        answer: "Yes, new legs are fitted to keep the almirah at its original height unless you'd prefer otherwise.",
      },
    ],
    metaDescription:
      "New leg installation and replacement for steel almirahs from High Look Steel Furniture.",
  },
  {
    slug: "steel-painting",
    name: "All Types of Steel Items Painting Services",
    shortName: "Steel Painting",
    tagline: "A clean, even finish that holds up.",
    cardDescription:
      "Painting and refinishing for steel almirahs and steel furniture items, including surface prep before painting.",
    icon: "spray",
    heroImage: {
      src: "/images/services/steel-painting.jpg",
      alt: "Steel furniture painting placeholder",
      aspect: "wide",
    },
    gridSpan: "large",
    intro:
      "A worn or faded finish affects how a steel piece looks and how well it resists rust. We prepare the surface properly and apply a clean, even coat.",
    whatWeDo: [
      "Assess the current finish and surface condition",
      "Prepare the surface — sanding, cleaning, rust treatment where needed",
      "Apply primer and paint in the agreed colour",
      "Finish and inspect for an even coat",
    ],
    commonRequirements: [
      "A faded or chipped almirah finish",
      "Rust breaking through the existing paint",
      "A colour change to match a repainted room",
      "Refinishing after a repair",
    ],
    process: [
      { title: "Tell Us What You Need", description: "Tell us which item needs painting and the colour you have in mind." },
      { title: "Share Photos & Requirements", description: "Photos of the current condition help us plan the prep work." },
      { title: "Get Your Quote & Schedule", description: "We confirm the finish, colour, and a quotation." },
      { title: "We Complete the Service", description: "The item is prepared, painted, and finished." },
    ],
    hasBeforeAfter: true,
    faqs: [
      {
        question: "Do you paint items other than almirahs?",
        answer: "Yes, this covers painting for steel furniture items generally, not only almirahs.",
      },
      {
        question: "Can rust be treated before painting?",
        answer: "Yes, surface preparation including rust treatment is part of the painting process where needed.",
      },
    ],
    metaDescription:
      "Painting and refinishing services for steel almirahs and steel furniture items from High Look Steel Furniture.",
  },
  {
    slug: "locks-handles-repair",
    name: "Almirah Locks & Handles Repairs",
    shortName: "Locks & Handles",
    tagline: "Secure again, opening smoothly.",
    cardDescription:
      "Repair and replacement of almirah locks and handles that have jammed, loosened, or stopped working.",
    icon: "lock",
    heroImage: {
      src: "/images/services/locks-handles-repair.jpg",
      alt: "Steel almirah lock and handle repair placeholder",
      aspect: "square",
    },
    gridSpan: "medium",
    intro:
      "A lock that sticks or a handle that's come loose is a small fix that makes a big difference to daily use. We repair or replace the hardware so the almirah opens and locks properly again.",
    whatWeDo: [
      "Inspect the lock or handle mechanism",
      "Repair or replace the faulty hardware",
      "Adjust alignment so doors open and close smoothly",
      "Confirm the lock secures properly",
    ],
    commonRequirements: [
      "A lock that's jammed or won't turn",
      "A missing or broken key mechanism",
      "A loose or broken handle",
      "Misaligned doors affecting the lock",
    ],
    process: [
      { title: "Tell Us What You Need", description: "Describe the issue with the lock or handle." },
      { title: "Share Photos & Requirements", description: "A photo of the hardware helps us bring the right parts." },
      { title: "Get Your Quote & Schedule", description: "We confirm the repair and a quotation." },
      { title: "We Complete the Service", description: "The lock or handle is repaired or replaced and tested." },
    ],
    hasBeforeAfter: true,
    faqs: [
      {
        question: "Can a lost almirah key be replaced?",
        answer: "In many cases the lock mechanism can be repaired or replaced. Contact us with the details of your lock.",
      },
    ],
    metaDescription:
      "Lock and handle repair services for steel almirahs from High Look Steel Furniture.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const serviceSlugs = services.map((service) => service.slug);
