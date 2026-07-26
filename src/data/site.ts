// Site-wide configuration for Awl Vertex Glow Market
// Beauty Tools Source Factory — B2B Wholesale Independent Station

export const SITE = {
  name: "Awl Vertex Glow Market",
  tagline: "Professional Beauty Tools Source Factory",
  description:
    "China source factory for nail, eyelash, permanent makeup, beauty tools, daily chemical & makeup accessories. Wholesale B2B supplier exporting to 60+ countries.",
  url: "https://awlvertexglowmarket.com",
  location: "Zhejiang, China",
  founded: 2015,
  experience: "10+ Years",
  exportCountries: 60,
  factoryCount: 2,
  whatsapp: "+8618898634001",
  email: "info@awlvertexglowmarket.com",
  phone: "+8618898634001",
  address: "Yiwu, Zhejiang, China",
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  {
    label: "Products",
    path: "#",
    children: [
      { label: "Nail Supplies", path: "/category/nails" },
      { label: "Eyelash Supplies", path: "/category/eyelashes" },
      { label: "Permanent Makeup", path: "/category/permanent-makeup" },
      { label: "Beauty Tools", path: "/category/beauty-tools" },
      { label: "Daily Chemical", path: "/category/daily-chemical" },
      { label: "Makeup Tools", path: "/category/makeup-tools" },
    ],
  },
  { label: "About Us", path: "/about" },
  { label: "Factory Tour", path: "/factory" },
  { label: "How to Order", path: "/how-to-order" },
  { label: "Contact", path: "/contact" },
];

export const CATEGORIES = [
  {
    name: "Nail Supplies",
    slug: "nails",
    icon: "lucide:palette",
    description: "Professional nail art tools, UV gel, nail polish, manicure sets",
    image:
      "https://images.pexels.com/photos/3997388/pexels-photo-3997388.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Eyelash Supplies",
    slug: "eyelashes",
    icon: "lucide:eye",
    description: "Eyelash extensions, storage boxes, lash tools, adhesive",
    image:
      "https://images.pexels.com/photos/3993446/pexels-photo-3993446.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Permanent Makeup",
    slug: "permanent-makeup",
    icon: "lucide:pen-tool",
    description: "Microblading pens, tattoo machines, pigments, needles",
    image:
      "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Beauty Tools",
    slug: "beauty-tools",
    icon: "lucide:sparkles",
    description: "Facial machines, skin analyzers, salon equipment",
    image:
      "https://images.pexels.com/photos/5069610/pexels-photo-5069610.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Daily Chemical",
    slug: "daily-chemical",
    icon: "lucide:flask-conical",
    description: "Shampoo, conditioner, hair dye, skincare products",
    image:
      "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Makeup Tools",
    slug: "makeup-tools",
    icon: "lucide:brush",
    description: "Brushes, sponges, mirrors, makeup organizers, applicators",
    image:
      "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export const TRUST_PILLARS = [
  {
    icon: "lucide:shield-check",
    title: "Quality Control",
    description:
      "Every product goes through 6-stage quality inspection before shipment. A-grade standard guaranteed.",
  },
  {
    icon: "lucide:factory",
    title: "Source Factory",
    description:
      "Own 2 factories in Zhejiang. No middlemen. Direct factory pricing for all wholesale orders.",
  },
  {
    icon: "lucide:truck",
    title: "Fast Delivery",
    description:
      "Strategic logistics partnerships. Orders processed within 3-7 days. Global shipping available.",
  },
  {
    icon: "lucide:award",
    title: SITE.experience,
    description:
      "Over a decade of manufacturing excellence. Trusted by importers across 60+ countries worldwide.",
  },
  {
    icon: "lucide:package",
    title: "Custom OEM/ODM",
    description:
      "Custom packaging, private labeling, and product customization available for bulk orders.",
  },
  {
    icon: "lucide:headphones",
    title: "24/7 Support",
    description:
      "Dedicated account managers. WhatsApp support in multiple languages for your convenience.",
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    icon: "lucide:clipboard-list",
    title: "Inquiry & Quote",
    description: "Send your product requirements via WhatsApp or contact form. Get a quote within 24 hours.",
  },
  {
    step: 2,
    icon: "lucide:check-circle",
    title: "Sample Confirmation",
    description: "Request samples to verify quality. We support sample orders before bulk purchase.",
  },
  {
    step: 3,
    icon: "lucide:settings",
    title: "Production",
    description: "Once confirmed, production begins in our factory. Strict QC at every stage.",
  },
  {
    step: 4,
    icon: "lucide:search",
    title: "Quality Inspection",
    description: "6-point quality check: material, function, appearance, packaging, weight, certification.",
  },
  {
    step: 5,
    icon: "lucide:package-search",
    title: "Packing & Loading",
    description: "Professional export packaging. Container loading with photo documentation.",
  },
  {
    step: 6,
    icon: "lucide:ship",
    title: "Global Shipping",
    description: "Sea freight, air freight, or express. Full logistics support to your destination port.",
  },
];

export const FAQS = [
  {
    q: "What is your minimum order quantity (MOQ)?",
    a: "MOQ varies by product. Most items start from 50-100 pieces. Contact us for specific product MOQs — we're flexible for trial orders.",
  },
  {
    q: "Do you offer samples?",
    a: "Yes! We encourage sample orders so you can verify quality. Sample orders typically ship within 3-5 days.",
  },
  {
    q: "Can you do OEM / private labeling?",
    a: "Absolutely. We offer custom packaging, logo printing, and private label services. Minimum quantities apply for customization.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept T/T bank transfer, Western Union, L/C, and Alibaba Trade Assurance for secure transactions.",
  },
  {
    q: "How long does shipping take?",
    a: "By sea: 15-35 days depending on destination. By air: 5-10 days. By express (DHL/FedEx): 3-7 days.",
  },
  {
    q: "Which countries do you export to?",
    a: "We export to 60+ countries across Africa, Southeast Asia, the Middle East, South America, and Europe.",
  },
];
