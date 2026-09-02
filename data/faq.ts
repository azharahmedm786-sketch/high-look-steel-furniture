import type { FaqItem } from "@/types";

export const faqs: FaqItem[] = [
  {
    id: "faq-01",
    category: "Orders & Manufacturing",
    question: "Can I order an almirah in a custom size?",
    answer:
      "Yes. New almirahs are built to the size, shelf layout, and finish you specify — see New Almirah Orders.",
  },
  {
    id: "faq-02",
    category: "Orders & Manufacturing",
    question: "Do you handle bulk orders for hostels or offices?",
    answer:
      "Yes, we manufacture multiple identical units to a single specification for hostels, offices, and institutions. See Bulk Manufacturing.",
  },
  {
    id: "faq-03",
    category: "Orders & Manufacturing",
    question: "What is cutting & preparing, exactly?",
    answer:
      "It's the measuring, cutting, and surface preparation of steel sheet ahead of assembly or painting — either as part of a larger order or as a standalone service.",
  },
  {
    id: "faq-04",
    category: "Repairs",
    question: "Can a rusted almirah be repaired instead of replaced?",
    answer:
      "In most cases, yes. Share photos of the damage and we'll assess whether repair is a good fit for your piece.",
  },
  {
    id: "faq-05",
    category: "Repairs",
    question: "Do you repair almirahs you didn't originally build?",
    answer: "Yes, we repair steel almirahs regardless of who originally made them.",
  },
  {
    id: "faq-06",
    category: "Painting",
    question: "Can you match a specific paint colour?",
    answer:
      "Let us know the colour you have in mind when you request the service and we'll confirm whether it can be matched.",
  },
  {
    id: "faq-07",
    category: "Painting",
    question: "Is rust treated before painting?",
    answer: "Yes, surface preparation — including rust treatment where needed — is part of the painting process.",
  },
  {
    id: "faq-08",
    category: "Locks & Handles",
    question: "My almirah lock is jammed — can it be fixed?",
    answer: "Most jammed or worn lock mechanisms can be repaired or replaced. Contact us with details of the issue.",
  },
  {
    id: "faq-09",
    category: "Legs & Base",
    question: "My almirah wobbles — is that a leg issue?",
    answer: "Often, yes — corroded or bent legs are a common cause. See Almirah New Legs Installation.",
  },
  {
    id: "faq-10",
    category: "Service Requests",
    question: "How do I request a service?",
    answer:
      "Use the Request a Service form, call, or message us on WhatsApp with your requirement and photos if available.",
  },
  {
    id: "faq-11",
    category: "Service Requests",
    question: "What photos should I send with my request?",
    answer:
      "Clear photos of the item and the specific area of concern (damage, lock, legs, or finish) help us assess the work before we arrive.",
  },
  {
    id: "faq-12",
    category: "Quotes & Pricing",
    question: "How much will my service cost?",
    answer:
      "Pricing depends on the specific item and work involved. Contact us for a quotation based on your requirement.",
  },
  {
    id: "faq-13",
    category: "Service Availability",
    question: "Do you serve my area?",
    answer: "Contact us to check service availability in your area.",
  },
];

export const faqCategories = Array.from(new Set(faqs.map((f) => f.category)));
