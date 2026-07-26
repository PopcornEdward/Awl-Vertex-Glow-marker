export interface Product {
  id: string;
  name: string;
  title: string;
  price: number;
  description: string;
  category: string;
  subcategory?: string;
  stock: number;
  images: string[];
  slug: string;
  badge?: string;
  discount?: number;
  specs?: { label: string; value: string }[];
  moq?: string;
}

// ===== NAIL SUPPLIES =====
export const nailProducts: Product[] = [
   {
    id: "n0001",
    name: "Professional UV/chh Nail Lamp 168W",
    title: "Professional UV/chh Nail Lamp 168W — Fast Curing Salon Grade",
    price: 12.5,
    description:
      "High-power 168W UV/chh dual-source nail curing lamp with 33 LED beads. Cures all gel types in 10-30 seconds. Smart sensor auto on/off, digital timer with 10s/30s/60s/99s presets. Removable magnetic base for pedicure convenience. Suitable for professional nail salons and home use. CE, FCC, ROHS certified.",
    category: "nails",
    subcategory: "equipment",
    stock: 500,
    images: [
      "https://ownshop.usbartimgotolink.qzz.io/2026/07/26/3b8bd0756a919de7e7758b46edd9b955.png",
      "https://ownshop.usbartimgotolink.qzz.io/2026/07/26/ec085ee0d6326ac3b885a4b8c42d2a45.jpeg",
      "https://ownshop.usbartimgotolink.qzz.io/2026/07/26/ec085ee0d6326ac3b885a4b8c42d2a45.jpeg",
      "https://ownshop.usbartimgotolink.qzz.io/2026/07/26/9e9bed51eeba9776e78f978e34e40089.jpeg",
    ],
    slug: "chh-nail-lamp-168w",
    badge: "Hot Seller",
    discount: 15,
    specs: [
      { label: "Power", value: "168W" },
      { label: "chh Beads", value: "33 pcs" },
      { label: "Timer", value: "10s/30s/60s/99s" },
      { label: "Certification", value: "CE, FCC, ROHS" },
      { label: "MOQ", value: "50 pcs" },
    ],
    moq: "50 pcs",
  },
  {
    id: "n001",
    name: "Professional UV/LED Nail Lamp 168W",
    title: "Professional UV/LED Nail Lamp 168W — Fast Curing Salon Grade",
    price: 12.5,
    description:
      "High-power 168W UV/LED dual-source nail curing lamp with 33 LED beads. Cures all gel types in 10-30 seconds. Smart sensor auto on/off, digital timer with 10s/30s/60s/99s presets. Removable magnetic base for pedicure convenience. Suitable for professional nail salons and home use. CE, FCC, ROHS certified.",
    category: "nails",
    subcategory: "equipment",
    stock: 500,
    images: [
      "https://images.pexels.com/photos/3997375/pexels-photo-3997375.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    slug: "uv-led-nail-lamp-168w",
    badge: "Hot Seller",
    discount: 15,
    specs: [
      { label: "Power", value: "168W" },
      { label: "LED Beads", value: "33 pcs" },
      { label: "Timer", value: "10s/30s/60s/99s" },
      { label: "Certification", value: "CE, FCC, ROHS" },
      { label: "MOQ", value: "50 pcs" },
    ],
    moq: "50 pcs",
  },
  {
    id: "n002",
    name: "Electric Nail Drill 35000RPM",
    title: "Electric Nail Drill 35000RPM — Professional Manicure File Machine",
    price: 18.0,
    description:
      "Professional electric nail drill with 35000 RPM brushless motor. Low vibration, low noise, low heat. Adjustable speed control with forward/reverse rotation. Includes 6 interchangeable drill bits. USB rechargeable with long battery life. Ergonomic pen-style handpiece for precision work.",
    category: "nails",
    subcategory: "equipment",
    stock: 350,
    images: [
      "https://images.pexels.com/photos/3997371/pexels-photo-3997371.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    slug: "electric-nail-drill-35000rpm",
    badge: "Bestseller",
    specs: [
      { label: "RPM", value: "0-35000" },
      { label: "Motor", value: "Brushless" },
      { label: "Battery", value: "USB Rechargeable" },
      { label: "Bits Included", value: "6 pcs" },
      { label: "MOQ", value: "50 pcs" },
    ],
    moq: "50 pcs",
  },
  {
    id: "n003",
    name: "Gel Nail Polish Set 60 Colors",
    title: "60 Colors Gel Nail Polish Set — Soak Off UV LED Nail Art Kit",
    price: 28.0,
    description:
      "Complete 60-color gel nail polish collection. 7.3ml per bottle. High-pigment formula, smooth application, 21-day long-lasting wear. Soak-off removal. Includes base coat and top coat. Rich color range from classic nudes to vibrant neons. Non-toxic, low odor, cruelty-free formula.",
    category: "nails",
    subcategory: "consumables",
    stock: 1000,
    images: [
      "https://images.pexels.com/photos/3997388/pexels-photo-3997388.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    slug: "gel-nail-polish-set-60-colors",
    badge: "Value Set",
    discount: 10,
    specs: [
      { label: "Colors", value: "60" },
      { label: "Volume", value: "7.3ml/bottle" },
      { label: "Type", value: "Soak-off UV/LED" },
      { label: "Wear Time", value: "21+ Days" },
      { label: "MOQ", value: "20 sets" },
    ],
    moq: "20 sets",
  },
  {
    id: "n004",
    name: "Nail Art Rhinestones Kit 1200pcs",
    title: "Nail Art Rhinestones Crystal Gems Kit — 1200pcs Mixed Shapes",
    price: 5.8,
    description:
      "1200 pieces of nail art rhinestones and crystal gems. Mixed shapes including round, square, teardrop, heart, star. Multiple sizes from 2mm to 6mm. 12 sparkling colors. Comes in a 24-grid organizer box. Flat-back design for easy application with nail glue. Perfect for nail art decoration.",
    category: "nails",
    subcategory: "accessories",
    stock: 2000,
    images: [
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    slug: "nail-art-rhinestones-kit-1200",
    badge: "New Arrival",
    specs: [
      { label: "Quantity", value: "1200 pcs" },
      { label: "Shapes", value: "6 Types" },
      { label: "Colors", value: "12" },
      { label: "Sizes", value: "2mm-6mm" },
      { label: "MOQ", value: "100 pcs" },
    ],
    moq: "100 pcs",
  },
];

// ===== EYELASH SUPPLIES =====
export const eyelashProducts: Product[] = [
  {
    id: "e001",
    name: "15-Layer Magnetic Eyelash Storage Box",
    title: "15-Layer Magnetic Eyelash Storage Box — Acrylic Dustproof Organizer",
    price: 8.5,
    description:
      "Premium 15-layer eyelash extension storage box with magnetic closure. Made of high-transparency acrylic. Dustproof design keeps lashes clean and organized. Each layer holds 12-16 trays of eyelash extensions. Rectangular shape, stackable. Removable dividers for customizable storage. Perfect for professional lash technicians and salons.",
    category: "eyelashes",
    subcategory: "storage",
    stock: 800,
    images: [
      "https://images.pexels.com/photos/3993446/pexels-photo-3993446.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/7754656/pexels-photo-7754656.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    slug: "15-layer-magnetic-eyelash-storage-box",
    badge: "Hot Seller",
    discount: 12,
    specs: [
      { label: "Material", value: "Acrylic" },
      { label: "Layers", value: "15" },
      { label: "Closure", value: "Magnetic" },
      { label: "Feature", value: "Dustproof, Stackable" },
      { label: "Dimensions", value: "23x13x11 cm" },
      { label: "MOQ", value: "50 pcs" },
    ],
    moq: "50 pcs",
  },
  {
    id: "e002",
    name: "Individual Eyelash Extensions 20 Trays Mix",
    title: "Individual Eyelash Extensions Mix — 20 Trays Classic Flat Lashes",
    price: 15.0,
    description:
      "Professional individual eyelash extensions. 20 mixed trays with C/D curl, 0.07-0.15mm thickness, 8-15mm length. Premium Korean PBT fiber. Matte black finish, soft and natural look. Long-lasting curl retention. Suitable for classic and volume techniques. Cruelty-free and hypoallergenic.",
    category: "eyelashes",
    subcategory: "lashes",
    stock: 600,
    images: [
      "https://images.pexels.com/photos/3993443/pexels-photo-3993443.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    slug: "individual-eyelash-extensions-20-trays",
    badge: "Bestseller",
    specs: [
      { label: "Material", value: "Korean PBT Fiber" },
      { label: "Trays", value: "20" },
      { label: "Curl", value: "C/D Mix" },
      { label: "Thickness", value: "0.07-0.15mm" },
      { label: "Length", value: "8-15mm" },
      { label: "MOQ", value: "30 sets" },
    ],
    moq: "30 sets",
  },
  {
    id: "e003",
    name: "Lash Extension Adhesive 5ml",
    title: "Professional Lash Extension Adhesive 5ml — 1-2 Sec Drying",
    price: 4.2,
    description:
      "Professional-grade eyelash extension adhesive with 1-2 second drying time. Ultra-strong bond that lasts 6-8 weeks. Low fume formula, suitable for sensitive clients. 5ml bottle with precision nozzle. Black color. Storage: 2-8°C. Made in China under strict GMP standards.",
    category: "eyelashes",
    subcategory: "adhesive",
    stock: 1500,
    images: [
      "https://images.pexels.com/photos/7754663/pexels-photo-7754663.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    slug: "lash-extension-adhesive-5ml",
    specs: [
      { label: "Volume", value: "5ml" },
      { label: "Drying Time", value: "1-2 sec" },
      { label: "Retention", value: "6-8 weeks" },
      { label: "Color", value: "Black" },
      { label: "MOQ", value: "100 pcs" },
    ],
    moq: "100 pcs",
  },
];

// ===== PERMANENT MAKEUP =====
export const pmuProducts: Product[] = [
  {
    id: "p001",
    name: "Wireless PMU Machine Kit",
    title: "Wireless Permanent Makeup Machine Kit — Microblading Pen Full Set",
    price: 45.0,
    description:
      "Complete wireless permanent makeup machine kit for microblading, powder brows, lip blushing, and eyeliner. Brushless motor with adjustable speed and needle depth. 1800mAh rechargeable battery. Includes 5 needle cartridges, practice skin, pigment rings, and carrying case. Lightweight aluminum alloy body. Compatible with all standard needle cartridges.",
    category: "permanent-makeup",
    subcategory: "machines",
    stock: 250,
    images: [
      "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    slug: "wireless-pmu-machine-kit",
    badge: "Premium",
    discount: 8,
    specs: [
      { label: "Type", value: "Wireless Pen" },
      { label: "Battery", value: "1800mAh" },
      { label: "Motor", value: "Brushless" },
      { label: "Speed", value: "Adjustable" },
      { label: "MOQ", value: "30 sets" },
    ],
    moq: "30 sets",
  },
  {
    id: "p002",
    name: "PMU Pigment Set 30 Colors",
    title: "Semi-Permanent Makeup Pigment Set — 30 Colors Microblading Ink",
    price: 22.0,
    description:
      "30-color semi-permanent makeup pigment set. Highly concentrated formula for long-lasting results (12-18 months). Suitable for eyebrows, lips, and eyeliner. CE and MSDS certified. Vegan, cruelty-free, no heavy metals. Smooth consistency for easy implantation. Each bottle 15ml with dropper cap.",
    category: "permanent-makeup",
    subcategory: "pigments",
    stock: 400,
    images: [
      "https://images.pexels.com/photos/3738338/pexels-photo-3738338.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    slug: "pmu-pigment-set-30-colors",
    badge: "Value Set",
    specs: [
      { label: "Colors", value: "30" },
      { label: "Volume", value: "15ml/bottle" },
      { label: "Duration", value: "12-18 months" },
      { label: "Certification", value: "CE, MSDS" },
      { label: "MOQ", value: "20 sets" },
    ],
    moq: "20 sets",
  },
];

// ===== BEAUTY TOOLS =====
export const beautyToolProducts: Product[] = [
  {
    id: "b001",
    name: "LED Face Mask 7-Color Photon Therapy",
    title: "LED Facial Mask 7-Color — Photon Light Therapy Skin Rejuvenation",
    price: 32.0,
    description:
      "Professional LED photon therapy face mask with 7 colors: red (anti-aging), blue (acne), green (brightening), yellow (redness), purple (firming), cyan (soothing), white (repair). 192 high-quality LED bulbs. 3 energy levels. USB powered with remote control. Ergonomic design fits all face shapes. Home and salon use.",
    category: "beauty-tools",
    subcategory: "facial-devices",
    stock: 300,
    images: [
      "https://images.pexels.com/photos/5069610/pexels-photo-5069610.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    slug: "led-face-mask-7-color",
    badge: "Trending",
    discount: 10,
    specs: [
      { label: "Colors", value: "7 (R/B/G/Y/P/C/W)" },
      { label: "LED Bulbs", value: "192 pcs" },
      { label: "Levels", value: "3" },
      { label: "Power", value: "USB" },
      { label: "MOQ", value: "50 pcs" },
    ],
    moq: "50 pcs",
  },
  {
    id: "b002",
    name: "Ultrasonic Skin Scrubber Spatula",
    title: "Ultrasonic Skin Scrubber — Deep Cleansing Facial Spatula",
    price: 9.8,
    description:
      "4-in-1 ultrasonic skin scrubber with cleansing, product infusion, lifting, and exfoliation modes. 28KHz high-frequency vibration removes blackheads, whiteheads, and dead skin cells. Stainless steel probe head. USB rechargeable. Portable design. Water-resistant IPX5. Complete with protective cap and charging cable.",
    category: "beauty-tools",
    subcategory: "facial-devices",
    stock: 600,
    images: [
      "https://images.pexels.com/photos/3738344/pexels-photo-3738344.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    slug: "ultrasonic-skin-scrubber",
    badge: "Bestseller",
    specs: [
      { label: "Frequency", value: "28KHz" },
      { label: "Modes", value: "4-in-1" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Battery", value: "USB Rechargeable" },
      { label: "MOQ", value: "100 pcs" },
    ],
    moq: "100 pcs",
  },
];

// ===== DAILY CHEMICAL =====
export const dailyChemicalProducts: Product[] = [
  {
    id: "d001",
    name: "Keratin Hair Mask 500ml",
    title: "Professional Keratin Hair Mask 500ml — Deep Repair Treatment",
    price: 6.5,
    description:
      "Professional salon-grade keratin hair mask with hydrolyzed keratin, argan oil, and vitamin E. Deeply repairs damaged, dry, and color-treated hair. Restores elasticity and shine. Paraben-free, sulfate-free formula. 500ml salon-size jar. Suitable for all hair types. Ideal for professional salon use and retail.",
    category: "daily-chemical",
    subcategory: "haircare",
    stock: 2000,
    images: [
      "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    slug: "keratin-hair-mask-500ml",
    specs: [
      { label: "Volume", value: "500ml" },
      { label: "Key Ingredient", value: "Keratin + Argan Oil" },
      { label: "Hair Type", value: "All Types" },
      { label: "Free From", value: "Paraben, Sulfate" },
      { label: "MOQ", value: "100 pcs" },
    ],
    moq: "100 pcs",
  },
  {
    id: "d002",
    name: "Hair Dye Shampoo 3-in-1 300ml",
    title: "3-in-1 Hair Color Shampoo 300ml — Instant Grey Coverage",
    price: 3.8,
    description:
      "Innovative 3-in-1 hair dye shampoo that cleans, colors, and conditions in one step. Natural herbal formula with ginseng and polygonum extract. Covers grey hair in 5-10 minutes. Available in black, dark brown, and burgundy. Ammonia-free, gentle on scalp. 300ml bottle. Long-lasting color up to 4 weeks.",
    category: "daily-chemical",
    subcategory: "haircare",
    stock: 3000,
    images: [
      "https://images.pexels.com/photos/3738343/pexels-photo-3738343.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    slug: "hair-dye-shampoo-300ml",
    badge: "Trending",
    specs: [
      { label: "Volume", value: "300ml" },
      { label: "Colors", value: "Black, Brown, Burgundy" },
      { label: "Processing Time", value: "5-10 min" },
      { label: "Duration", value: "4 weeks" },
      { label: "MOQ", value: "200 pcs" },
    ],
    moq: "200 pcs",
  },
];

// ===== MAKEUP TOOLS =====
export const makeupToolProducts: Product[] = [
  {
    id: "m001",
    name: "Makeup Brush Set 24pcs Pro",
    title: "24-Piece Professional Makeup Brush Set — Complete Cosmetic Kit",
    price: 12.0,
    description:
      "Complete 24-piece professional makeup brush set with premium synthetic bristles. Includes foundation, concealer, powder, blush, contour, highlight, eyeshadow, eyeliner, brow, and lip brushes. Soft and dense bristles for flawless application. Sleek black aluminum ferrules and wooden handles. Comes with a stylish PU leather storage case.",
    category: "makeup-tools",
    subcategory: "brushes",
    stock: 700,
    images: [
      "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    slug: "makeup-brush-set-24pcs",
    badge: "Bestseller",
    discount: 15,
    specs: [
      { label: "Bristles", value: "Synthetic" },
      { label: "Pieces", value: "24" },
      { label: "Handle", value: "Wood + Aluminum" },
      { label: "Case", value: "PU Leather" },
      { label: "MOQ", value: "50 sets" },
    ],
    moq: "50 sets",
  },
  {
    id: "m002",
    name: "LED Vanity Mirror with Light",
    title: "LED Makeup Mirror with Lights — 3-Color Dimmable Desktop Vanity",
    price: 25.0,
    description:
      "Large LED vanity mirror with 21 built-in LED bulbs. 3 color modes: warm, natural, and cool white. Stepless dimming from bright to soft. 10X magnification spot mirror included. 180° rotation. Touch sensor control. USB charging port. Sturdy base with storage tray. Perfect for professional makeup application.",
    category: "makeup-tools",
    subcategory: "mirrors",
    stock: 350,
    images: [
      "https://images.pexels.com/photos/3738340/pexels-photo-3738340.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    slug: "led-vanity-mirror",
    badge: "Hot Seller",
    specs: [
      { label: "LED Bulbs", value: "21 pcs" },
      { label: "Color Modes", value: "3 (Warm/Natural/Cool)" },
      { label: "Magnification", value: "1X + 10X" },
      { label: "Power", value: "USB + Battery" },
      { label: "MOQ", value: "30 pcs" },
    ],
    moq: "30 pcs",
  },
  {
    id: "m003",
    name: "Silicone Makeup Sponge Set 6pcs",
    title: "Silicone Makeup Blender Sponge Set — 6pcs Reusable Beauty Tools",
    price: 3.5,
    description:
      "Set of 6 reusable silicone makeup sponges in different shapes: teardrop, oval, diamond, and wedge. Non-absorbent silicone material saves 50%+ foundation compared to traditional sponges. Easy to clean, hygienic, and long-lasting. Smooth, streak-free application. Suitable for liquid, cream, and powder products.",
    category: "makeup-tools",
    subcategory: "sponges",
    stock: 2500,
    images: [
      "https://images.pexels.com/photos/3373740/pexels-photo-3373740.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    slug: "silicone-makeup-sponge-set",
    badge: "Value Deal",
    specs: [
      { label: "Quantity", value: "6 pcs" },
      { label: "Material", value: "Silicone" },
      { label: "Shapes", value: "4 Types" },
      { label: "Reusable", value: "Yes" },
      { label: "MOQ", value: "200 sets" },
    ],
    moq: "200 sets",
  },
];

// ===== ALL PRODUCTS =====
export const products: Product[] = [
  ...nailProducts,
  ...eyelashProducts,
  ...pmuProducts,
  ...beautyToolProducts,
  ...dailyChemicalProducts,
  ...makeupToolProducts,
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getRelatedProducts = (category: string, currentSlug: string) =>
  products
    .filter((p) => p.category === category && p.slug !== currentSlug)
    .slice(0, 4);

export const getProductsByCategory = (catSlug: string) =>
  products.filter((p) => p.category === catSlug);

export const getFeaturedProducts = () =>
  products.filter((p) => p.badge === "Hot Seller" || p.badge === "Bestseller").slice(0, 8);
