import { Product, Review } from "../types";

const RING_IMAGES = [
  "https://images.pexels.com/photos/14466162/pexels-photo-14466162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/29502436/pexels-photo-29502436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/29502314/pexels-photo-29502314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/27206250/pexels-photo-27206250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/29502435/pexels-photo-29502435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/29502321/pexels-photo-29502321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

const NECKLACE_IMAGES = [
  "https://images.pexels.com/photos/7407595/pexels-photo-7407595.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/29502933/pexels-photo-29502933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/7407597/pexels-photo-7407597.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/29502931/pexels-photo-29502931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/28985983/pexels-photo-28985983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/13325937/pexels-photo-13325937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/30746008/pexels-photo-30746008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/29502932/pexels-photo-29502932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

const BRACELET_IMAGES = [
  "https://images.pexels.com/photos/29193415/pexels-photo-29193415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/8891958/pexels-photo-8891958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/18285651/pexels-photo-18285651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/30746010/pexels-photo-30746010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/18285682/pexels-photo-18285682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/13160939/pexels-photo-13160939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/27206257/pexels-photo-27206257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

const EARRING_IMAGES = [
  "https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/21235147/pexels-photo-21235147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/28389453/pexels-photo-28389453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/20943478/pexels-photo-20943478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/27206253/pexels-photo-27206253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/29502969/pexels-photo-29502969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

// Full-width landscape hero images (high-res)
const HERO_IMAGES = [
  "https://images.pexels.com/photos/17988453/pexels-photo-17988453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920",
  "https://images.pexels.com/photos/33181038/pexels-photo-33181038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920",
  "https://images.pexels.com/photos/32159815/pexels-photo-32159815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920",
  "https://images.pexels.com/photos/8396322/pexels-photo-8396322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920",
];

// Portrait-oriented editorial images for collection sections (high-res)
const COLLECTION_IMAGES = [
  "https://images.pexels.com/photos/30985153/pexels-photo-30985153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=800",
  "https://images.pexels.com/photos/37097155/pexels-photo-37097155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=800",
  "https://images.pexels.com/photos/37401956/pexels-photo-37401956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=800",
  "https://images.pexels.com/photos/7615245/pexels-photo-7615245.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=800",
  "https://images.pexels.com/photos/6467618/pexels-photo-6467618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=800",
  "https://images.pexels.com/photos/35274516/pexels-photo-35274516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=800",
];

export { HERO_IMAGES, COLLECTION_IMAGES };

function getImages(category: string, index: number): string[] {
  const imageMap: Record<string, string[]> = {
    rings: RING_IMAGES,
    necklaces: NECKLACE_IMAGES,
    bracelets: BRACELET_IMAGES,
    earrings: EARRING_IMAGES,
  };
  const imgs = imageMap[category] || RING_IMAGES;
  const primary = imgs[index % imgs.length];
  const secondary = imgs[(index + 1) % imgs.length];
  const tertiary = imgs[(index + 2) % imgs.length];
  return [primary, secondary, tertiary];
}

export const products: Product[] = [
  // RINGS (8 products)
  {
    id: "ring-001",
    name: "Soleil Solitaire",
    description:
      "A stunning solitaire ring featuring a brilliant-cut diamond set in 18K gold.",
    longDescription:
      "The Soleil Solitaire captures the essence of timeless elegance. Crafted from 18-karat yellow gold, this ring features a single brilliant-cut diamond that catches light from every angle. The minimalist band design allows the stone to command attention, making it the perfect statement piece for any occasion. Each ring is hand-polished to achieve a mirror finish that speaks of our commitment to perfection.",
    category: "rings",
    price: 2450,
    rating: 4.9,
    reviewCount: 47,
    stock: 12,
    images: getImages("rings", 0),
    materials: ["18K Yellow Gold", "Diamond"],
    featured: true,
    bestSeller: true,
    newArrival: false,
    sku: "LB-R001",
  },
  {
    id: "ring-002",
    name: "Aurelia Band",
    description: "A delicate textured band with intricate hammered detailing.",
    longDescription:
      "The Aurelia Band is inspired by ancient Roman craftsmanship and contemporary minimalism. Each band is individually hammered by our artisans to create a unique texture that catches light differently on every surface. Crafted in 14K gold, this versatile piece transitions effortlessly from everyday wear to special occasions.",
    category: "rings",
    price: 890,
    rating: 4.7,
    reviewCount: 63,
    stock: 24,
    images: getImages("rings", 1),
    materials: ["14K Gold"],
    featured: false,
    bestSeller: true,
    newArrival: false,
    sku: "LB-R002",
  },
  {
    id: "ring-003",
    name: "Crescent Moon Ring",
    description: "An ethereal crescent moon design adorned with pavé diamonds.",
    longDescription:
      "Inspired by the mystique of moonlit evenings, the Crescent Moon Ring features a delicate arc of pavé-set diamonds that trace the silhouette of a crescent moon. Set in 18K white gold, this celestial creation embodies the poetry of the night sky, making it an enchanting addition to any jewelry collection.",
    category: "rings",
    price: 1680,
    rating: 4.8,
    reviewCount: 29,
    stock: 8,
    images: getImages("rings", 2),
    materials: ["18K White Gold", "Pavé Diamonds"],
    featured: true,
    bestSeller: false,
    newArrival: true,
    sku: "LB-R003",
  },
  {
    id: "ring-004",
    name: "Éternité Stack Ring",
    description: "A refined stacking ring with a row of channel-set sapphires.",
    longDescription:
      "The Éternité Stack Ring is designed to be layered and loved. A continuous channel of deep blue sapphires encircles a slim 14K gold band, creating an effect of endless beauty. Whether worn alone for understated sophistication or stacked with other Luna Bijoux rings, this piece adds depth and color to your personal style.",
    category: "rings",
    price: 1290,
    rating: 4.6,
    reviewCount: 41,
    stock: 15,
    images: getImages("rings", 3),
    materials: ["14K Gold", "Sapphires"],
    featured: false,
    bestSeller: false,
    newArrival: false,
    sku: "LB-R004",
  },
  {
    id: "ring-005",
    name: "Torsade Signet",
    description:
      "A modern signet ring with a twisted rope motif around the bezel.",
    longDescription:
      "The Torsade Signet reinterprets the classic signet ring for the modern wearer. A twisted rope motif frames a smooth oval bezel, blending heritage craft with contemporary sensibility. Cast in solid 18K gold and finished by hand, this statement ring carries a satisfying weight that speaks of quality.",
    category: "rings",
    price: 1540,
    rating: 4.8,
    reviewCount: 22,
    stock: 10,
    images: getImages("rings", 4),
    materials: ["18K Gold"],
    featured: false,
    bestSeller: false,
    newArrival: true,
    sku: "LB-R005",
  },
  {
    id: "ring-006",
    name: "Fleur Cocktail Ring",
    description:
      "An opulent cocktail ring with a floral cluster of colored gemstones.",
    longDescription:
      "The Fleur Cocktail Ring is a celebration of color and craftsmanship. A cluster of hand-selected gemstones—tourmaline, peridot, and citrine—are arranged in a floral formation atop an 18K gold setting. This bold, show-stopping piece is designed for those who believe jewelry should spark conversation.",
    category: "rings",
    price: 3200,
    originalPrice: 3800,
    rating: 5.0,
    reviewCount: 14,
    stock: 4,
    images: getImages("rings", 5),
    materials: ["18K Gold", "Tourmaline", "Peridot", "Citrine"],
    featured: true,
    bestSeller: false,
    newArrival: false,
    sku: "LB-R006",
  },
  {
    id: "ring-007",
    name: "Infinity Twist",
    description:
      "An intertwined double-band ring symbolizing eternal connection.",
    longDescription:
      "Two slender bands of polished gold intertwine in an elegant figure-eight, symbolizing an unbreakable bond. The Infinity Twist ring is equally suited to mark a milestone moment or to serve as a daily reminder of love. Its streamlined profile sits close to the finger, ensuring comfort throughout the day.",
    category: "rings",
    price: 960,
    rating: 4.7,
    reviewCount: 55,
    stock: 20,
    images: getImages("rings", 0),
    materials: ["14K Gold"],
    featured: false,
    bestSeller: true,
    newArrival: false,
    sku: "LB-R007",
  },
  {
    id: "ring-008",
    name: "Perle Solitaire",
    description:
      "A lustrous South Sea pearl perched on a sculptural gold setting.",
    longDescription:
      "A single South Sea pearl, selected for its exceptional luster and perfectly round shape, is cradled in a sculptural 18K gold setting. The Perle Solitaire elevates organic beauty through architectural design, creating a piece that feels both modern and timeless.",
    category: "rings",
    price: 2100,
    rating: 4.9,
    reviewCount: 18,
    stock: 6,
    images: getImages("rings", 1),
    materials: ["18K Gold", "South Sea Pearl"],
    featured: false,
    bestSeller: false,
    newArrival: true,
    sku: "LB-R008",
  },

  // NECKLACES (8 products)
  {
    id: "necklace-001",
    name: "Cascade Pendant",
    description: "A cascading chain pendant with graduated gold droplets.",
    longDescription:
      "The Cascade Pendant features a series of delicately graduated gold droplets that fall in a graceful cascade from a fine chain. As you move, the droplets catch light independently, creating a shimmering waterfall effect against the skin. Crafted in 18K gold with a 42cm adjustable chain.",
    category: "necklaces",
    price: 1850,
    rating: 4.9,
    reviewCount: 52,
    stock: 14,
    images: getImages("necklaces", 0),
    materials: ["18K Gold"],
    featured: true,
    bestSeller: true,
    newArrival: false,
    sku: "LB-N001",
  },
  {
    id: "necklace-002",
    name: "Lumière Choker",
    description: "A sleek gold choker with a single floating diamond.",
    longDescription:
      "The Lumière Choker strips jewelry to its purest essence: a single brilliant diamond appears to float at the hollow of the throat, suspended on an invisible nylon cord anchored by gold clasps. The effect is mesmerizing—a point of light that moves with you. Available in 0.25ct and 0.50ct diamond options.",
    category: "necklaces",
    price: 2200,
    rating: 4.8,
    reviewCount: 38,
    stock: 9,
    images: getImages("necklaces", 1),
    materials: ["18K Gold", "Diamond"],
    featured: true,
    bestSeller: false,
    newArrival: false,
    sku: "LB-N002",
  },
  {
    id: "necklace-003",
    name: "Héritage Locket",
    description: "A contemporary oval locket with hand-engraved detailing.",
    longDescription:
      "Our Héritage Locket reimagines the sentimental classic for a modern audience. The smooth 18K gold oval opens to reveal space for two photographs, while the exterior is adorned with hand-engraved botanical motifs by our master engravers. A piece meant to hold memories close to the heart.",
    category: "necklaces",
    price: 1620,
    rating: 4.7,
    reviewCount: 27,
    stock: 11,
    images: getImages("necklaces", 2),
    materials: ["18K Gold"],
    featured: false,
    bestSeller: false,
    newArrival: true,
    sku: "LB-N003",
  },
  {
    id: "necklace-004",
    name: "Constellation Chain",
    description: "A delicate chain dotted with tiny diamond stars.",
    longDescription:
      "Like stars scattered across a midnight sky, tiny brilliant-cut diamonds are set at irregular intervals along a fine 18K gold chain. The Constellation Chain drapes beautifully at the collarbone and layers perfectly with other necklaces. Each piece features seven diamonds, one for each day of the week.",
    category: "necklaces",
    price: 1950,
    rating: 4.9,
    reviewCount: 44,
    stock: 7,
    images: getImages("necklaces", 3),
    materials: ["18K Gold", "Diamonds"],
    featured: false,
    bestSeller: true,
    newArrival: false,
    sku: "LB-N004",
  },
  {
    id: "necklace-005",
    name: "Serpentine Collar",
    description: "A fluid collar necklace inspired by serpentine forms.",
    longDescription:
      "The Serpentine Collar is an exercise in fluid metalwork. Inspired by the sinuous movement of a serpent, this 18K gold collar necklace hugs the neck with supple articulated links, creating a second-skin effect that is both bold and refined. A true collector's piece for the discerning wearer.",
    category: "necklaces",
    price: 4500,
    originalPrice: 5200,
    rating: 5.0,
    reviewCount: 11,
    stock: 3,
    images: getImages("necklaces", 4),
    materials: ["18K Gold"],
    featured: true,
    bestSeller: false,
    newArrival: false,
    sku: "LB-N005",
  },
  {
    id: "necklace-006",
    name: "Rivière Pearl Strand",
    description: "A classic strand of Akoya pearls with a gold toggle clasp.",
    longDescription:
      "Our Rivière Pearl Strand features 45 individually knotted Akoya pearls, each selected for its exceptional luster, smooth surface, and rosy overtone. The 18K gold toggle clasp—stamped with the Luna Bijoux crescent—adds a modern finishing touch to this timeless silhouette.",
    category: "necklaces",
    price: 3400,
    rating: 4.8,
    reviewCount: 33,
    stock: 5,
    images: getImages("necklaces", 5),
    materials: ["18K Gold", "Akoya Pearls"],
    featured: false,
    bestSeller: false,
    newArrival: false,
    sku: "LB-N006",
  },
  {
    id: "necklace-007",
    name: "Bar Minimalist Pendant",
    description: "A sleek horizontal bar pendant on a fine cable chain.",
    longDescription:
      "Pure geometry meets precious materials in this minimalist pendant. A slim bar of polished 14K gold hangs horizontally from a fine cable chain, creating a clean line that sits perfectly at the collarbone. Available for personalized engraving—add initials, a date, or a meaningful word.",
    category: "necklaces",
    price: 680,
    rating: 4.6,
    reviewCount: 71,
    stock: 30,
    images: getImages("necklaces", 6),
    materials: ["14K Gold"],
    featured: false,
    bestSeller: true,
    newArrival: false,
    sku: "LB-N007",
  },
  {
    id: "necklace-008",
    name: "Eclipse Layered Set",
    description: "A pre-layered three-strand necklace set in varying lengths.",
    longDescription:
      'Take the guesswork out of layering with the Eclipse Set. Three individual chains—14", 16", and 18"—connect at a single clasp for effortless styling. Each strand features a different pendant: a tiny crescent, a polished disc, and a diamond bezel. Together they create the curated layered look you see in fashion editorials.',
    category: "necklaces",
    price: 1480,
    rating: 4.7,
    reviewCount: 39,
    stock: 13,
    images: getImages("necklaces", 7),
    materials: ["14K Gold", "Diamond"],
    featured: false,
    bestSeller: false,
    newArrival: true,
    sku: "LB-N008",
  },

  // BRACELETS (7 products)
  {
    id: "bracelet-001",
    name: "Chaîne d'Or",
    description: "A bold chain-link bracelet with a luxurious matte finish.",
    longDescription:
      "The Chaîne d'Or makes an unapologetic statement on the wrist. Oversized oval links are cast in solid 18K gold and finished with a contemporary matte texture that sets it apart from traditional polished chains. The substantial weight and smooth edges ensure comfort despite its bold proportions.",
    category: "bracelets",
    price: 2800,
    rating: 4.9,
    reviewCount: 25,
    stock: 8,
    images: getImages("bracelets", 0),
    materials: ["18K Gold"],
    featured: true,
    bestSeller: true,
    newArrival: false,
    sku: "LB-B001",
  },
  {
    id: "bracelet-002",
    name: "Fil d'Or Bangle",
    description: "A slim wire bangle with a delicate twisted texture.",
    longDescription:
      "The Fil d'Or Bangle is the epitome of understated luxury. A single wire of 14K gold is gently twisted along its circumference, creating subtle texture that catches light with every gesture. Designed to be stacked in multiples or worn alone as a whisper of elegance.",
    category: "bracelets",
    price: 720,
    rating: 4.7,
    reviewCount: 58,
    stock: 25,
    images: getImages("bracelets", 1),
    materials: ["14K Gold"],
    featured: false,
    bestSeller: true,
    newArrival: false,
    sku: "LB-B002",
  },
  {
    id: "bracelet-003",
    name: "Jardin Cuff",
    description: "A sculpted cuff bracelet with botanical relief work.",
    longDescription:
      "The Jardin Cuff transforms the wrist into a canvas for wearable art. Intricate botanical reliefs—leaves, vines, and blossoms—are sculpted into the surface of a wide 18K gold cuff. Despite its ornate design, the interior is smooth and comfortable, and the open-back construction allows easy on and off.",
    category: "bracelets",
    price: 3600,
    originalPrice: 4200,
    rating: 5.0,
    reviewCount: 16,
    stock: 4,
    images: getImages("bracelets", 2),
    materials: ["18K Gold"],
    featured: true,
    bestSeller: false,
    newArrival: false,
    sku: "LB-B003",
  },
  {
    id: "bracelet-004",
    name: "Tennis Classique",
    description: "A timeless diamond tennis bracelet with round brilliants.",
    longDescription:
      "Our Tennis Classique features a continuous line of 38 individually set round brilliant diamonds, totaling 3.2 carats. Each stone is hand-selected for exceptional color and clarity, then secured in a four-prong 18K white gold setting. The hidden safety clasp ensures peace of mind for daily wear.",
    category: "bracelets",
    price: 5800,
    rating: 4.9,
    reviewCount: 19,
    stock: 3,
    images: getImages("bracelets", 3),
    materials: ["18K White Gold", "Diamonds"],
    featured: true,
    bestSeller: false,
    newArrival: false,
    sku: "LB-B004",
  },
  {
    id: "bracelet-005",
    name: "Silk Cord Bracelet",
    description: "A gold charm on a hand-tied silk cord with adjustable knots.",
    longDescription:
      "Where precious metal meets organic material, something special happens. The Silk Cord Bracelet features a small 18K gold charm—choose from crescent moon, star, or heart—threaded onto a hand-dyed silk cord. Adjustable sliding knots let you customize the fit. Perfect for gifting or layering with metal bracelets.",
    category: "bracelets",
    price: 340,
    rating: 4.5,
    reviewCount: 82,
    stock: 40,
    images: getImages("bracelets", 4),
    materials: ["18K Gold", "Silk"],
    featured: false,
    bestSeller: true,
    newArrival: false,
    sku: "LB-B005",
  },
  {
    id: "bracelet-006",
    name: "Médaillon Charm Bracelet",
    description: "A chain bracelet with three interchangeable gold medallions.",
    longDescription:
      "The Médaillon Charm Bracelet invites you to curate your own story. A robust 14K gold cable chain supports three detachable medallion charms, each engraved with a different Luna Bijoux motif. Additional charms are available separately, allowing your bracelet to evolve with you over time.",
    category: "bracelets",
    price: 1350,
    rating: 4.6,
    reviewCount: 34,
    stock: 16,
    images: getImages("bracelets", 5),
    materials: ["14K Gold"],
    featured: false,
    bestSeller: false,
    newArrival: true,
    sku: "LB-B006",
  },
  {
    id: "bracelet-007",
    name: "Rivage Pearl Bracelet",
    description: "Baroque freshwater pearls linked by golden chain segments.",
    longDescription:
      "The Rivage Bracelet celebrates the beauty of imperfection. Baroque freshwater pearls—each with its own unique shape and iridescence—are linked by short segments of 14K gold chain, creating a rhythm of organic and geometric forms. A modern heirloom designed to be passed down through generations.",
    category: "bracelets",
    price: 980,
    rating: 4.8,
    reviewCount: 28,
    stock: 12,
    images: getImages("bracelets", 6),
    materials: ["14K Gold", "Freshwater Pearls"],
    featured: false,
    bestSeller: false,
    newArrival: true,
    sku: "LB-B007",
  },

  // EARRINGS (7 products)
  {
    id: "earring-001",
    name: "Goutte d'Or Drops",
    description: "Elegant teardrop earrings with a brushed gold finish.",
    longDescription:
      "The Goutte d'Or Drops are a study in graceful simplicity. Each earring features a single teardrop of solid 18K gold with a soft brushed finish that gives the metal a warm, satiny glow. The lightweight construction ensures all-day comfort, while the silhouette elongates the face beautifully.",
    category: "earrings",
    price: 1240,
    rating: 4.8,
    reviewCount: 46,
    stock: 18,
    images: getImages("earrings", 0),
    materials: ["18K Gold"],
    featured: true,
    bestSeller: true,
    newArrival: false,
    sku: "LB-E001",
  },
  {
    id: "earring-002",
    name: "Étoile Studs",
    description: "Petite star-shaped studs with a single diamond center.",
    longDescription:
      "Our Étoile Studs are the jewelry equivalent of a whispered secret. Tiny five-pointed stars, each just 6mm across, are set with a single brilliant-cut diamond at the center. Crafted in 18K gold with secure butterfly backs, these studs add a touch of celestial charm to any outfit.",
    category: "earrings",
    price: 780,
    rating: 4.9,
    reviewCount: 73,
    stock: 22,
    images: getImages("earrings", 1),
    materials: ["18K Gold", "Diamond"],
    featured: false,
    bestSeller: true,
    newArrival: false,
    sku: "LB-E002",
  },
  {
    id: "earring-003",
    name: "Cascadeur Chandeliers",
    description: "Statement chandelier earrings with tiered gold elements.",
    longDescription:
      "The Cascadeur Chandeliers are designed for moments when you want all eyes on you. Three tiers of delicate gold elements—circles, teardrops, and bars—sway independently, creating a mesmerizing kinetic effect. Despite their dramatic length, these earrings are surprisingly lightweight, crafted from thin sheets of 18K gold.",
    category: "earrings",
    price: 2100,
    rating: 4.7,
    reviewCount: 21,
    stock: 7,
    images: getImages("earrings", 2),
    materials: ["18K Gold"],
    featured: true,
    bestSeller: false,
    newArrival: true,
    sku: "LB-E003",
  },
  {
    id: "earring-004",
    name: "Orbit Hoops",
    description: "Medium-sized hoops with a unique squared-off silhouette.",
    longDescription:
      "Our Orbit Hoops challenge the conventional round hoop with a subtly squared silhouette that feels fresh and architectural. Crafted in 14K gold with a high-polish finish, these 30mm hoops feature a secure click-shut closure. A modern essential for every jewelry wardrobe.",
    category: "earrings",
    price: 650,
    rating: 4.8,
    reviewCount: 67,
    stock: 28,
    images: getImages("earrings", 3),
    materials: ["14K Gold"],
    featured: false,
    bestSeller: true,
    newArrival: false,
    sku: "LB-E004",
  },
  {
    id: "earring-005",
    name: "Perle Baroque Drops",
    description: "Asymmetric baroque pearl drops on sculptural gold hooks.",
    longDescription:
      "Celebrating the beauty of irregularity, the Perle Baroque Drops feature hand-selected baroque pearls suspended from sculptural 18K gold hooks. No two pearls are alike, ensuring that each pair of earrings is truly one of a kind. The hooks are designed to sit comfortably and securely in the ear.",
    category: "earrings",
    price: 1580,
    rating: 4.9,
    reviewCount: 31,
    stock: 9,
    images: getImages("earrings", 4),
    materials: ["18K Gold", "Baroque Pearls"],
    featured: false,
    bestSeller: false,
    newArrival: true,
    sku: "LB-E005",
  },
  {
    id: "earring-006",
    name: "Huggie Pavé",
    description: "Small huggie hoops encrusted with micro-pavé diamonds.",
    longDescription:
      "The Huggie Pavé earrings prove that luxury can come in small packages. These snug-fitting mini hoops are completely encrusted with micro-pavé diamonds, totaling 0.40 carats per pair. Set in 18K white gold, they hug the earlobe closely, adding a continuous band of sparkle that elevates any look from day to night.",
    category: "earrings",
    price: 1890,
    rating: 4.8,
    reviewCount: 42,
    stock: 11,
    images: getImages("earrings", 5),
    materials: ["18K White Gold", "Diamonds"],
    featured: true,
    bestSeller: false,
    newArrival: false,
    sku: "LB-E006",
  },
  {
    id: "earring-007",
    name: "Thread Earrings",
    description: "Ultra-delicate threader earrings with a flowing chain tail.",
    longDescription:
      "The Thread Earrings are the essence of barely-there beauty. An ultra-fine chain threads through the ear, leaving a gentle drape in front and a longer flowing tail behind. Crafted in 14K gold, they move with every turn of the head, creating an almost liquid effect that is endlessly captivating.",
    category: "earrings",
    price: 420,
    rating: 4.6,
    reviewCount: 54,
    stock: 35,
    images: getImages("earrings", 0),
    materials: ["14K Gold"],
    featured: false,
    bestSeller: false,
    newArrival: false,
    sku: "LB-E007",
  },
];

export const reviews: Review[] = [
  {
    id: "rev-1",
    productId: "ring-001",
    author: "Isabelle M.",
    rating: 5,
    date: "2025-12-15",
    title: "Absolutely breathtaking",
    content:
      "This ring exceeded every expectation. The diamond catches light beautifully and the gold has a warm, rich tone. I receive compliments every time I wear it.",
    verified: true,
  },
  {
    id: "rev-2",
    productId: "ring-001",
    author: "Charlotte D.",
    rating: 5,
    date: "2025-11-22",
    title: "Worth every penny",
    content:
      "My partner surprised me with this ring for our anniversary. The craftsmanship is impeccable—you can tell it is handmade with care. The packaging was also gorgeous.",
    verified: true,
  },
  {
    id: "rev-3",
    productId: "ring-001",
    author: "Sophia L.",
    rating: 4,
    date: "2025-10-30",
    title: "Beautiful but runs slightly small",
    content:
      "The ring itself is stunning—true luxury. I would recommend sizing up half a size as it runs a touch small. Customer service was very helpful with the exchange.",
    verified: true,
  },
  {
    id: "rev-4",
    productId: "necklace-001",
    author: "Elena R.",
    rating: 5,
    date: "2025-12-01",
    title: "My new everyday necklace",
    content:
      "I have not taken this off since I received it. The cascading droplets are so delicate and catch light beautifully. Transitions perfectly from work to evening.",
    verified: true,
  },
  {
    id: "rev-5",
    productId: "necklace-001",
    author: "Amara T.",
    rating: 5,
    date: "2025-11-15",
    title: "Perfect gift",
    content:
      "Purchased this for my mother birthday and she was thrilled. The presentation, the quality, and the design—everything screams luxury. Will be ordering more from Luna Bijoux.",
    verified: true,
  },
  {
    id: "rev-6",
    productId: "bracelet-001",
    author: "Victoria S.",
    rating: 5,
    date: "2025-12-10",
    title: "Statement piece perfection",
    content:
      "This bracelet is substantial without being heavy. The matte finish is gorgeous and unique—I have never seen anything like it. Makes every outfit look more intentional.",
    verified: true,
  },
  {
    id: "rev-7",
    productId: "earring-001",
    author: "Margaux B.",
    rating: 5,
    date: "2025-11-28",
    title: "Lightweight luxury",
    content:
      "These drops are incredibly comfortable for all-day wear. The brushed gold finish gives them a soft, warm glow that is different from typical shiny jewelry. Truly elegant.",
    verified: true,
  },
  {
    id: "rev-8",
    productId: "earring-002",
    author: "Léa F.",
    rating: 5,
    date: "2025-12-05",
    title: "Dainty and perfect",
    content:
      "These studs are exactly what I was looking for—small but impactful. The diamond catches light even though it is tiny. Perfect for someone who prefers subtle jewelry.",
    verified: true,
  },
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};

export const getBestSellers = (): Product[] => {
  return products.filter((p) => p.bestSeller);
};

export const getNewArrivals = (): Product[] => {
  return products.filter((p) => p.newArrival);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getSimilarProducts = (product: Product, limit = 4): Product[] => {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};

export const getProductReviews = (productId: string): Review[] => {
  return reviews.filter((r) => r.productId === productId);
};
