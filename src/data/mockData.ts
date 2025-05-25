
export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  category: number;
  price: number;
  image: string;
  isFeatured?: boolean;
  isNew?: boolean;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Sparkles",
    slug: "sparkles",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Fancy Sparkles",
    slug: "fancy-sparkles",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Colour Matches & Guns",
    slug: "colour-matches-guns",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Special Multi Colour Shots",
    slug: "special-multi-colour-shots",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Flower Pots",
    slug: "flower-pots",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Gift Boxes",
    slug: "gift-boxes",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop"
  }
];

export const products: Product[] = [
  // Sparkles
  {
    id: 1,
    name: "10 cm Electric Sparkles",
    slug: "10-cm-electric-sparkles",
    description: "Premium quality electric sparkles from Sivakasi. Perfect for Diwali celebrations and festivals. Burns bright for 45 seconds with golden sparks.",
    category: 1,
    price: 120,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
    isFeatured: true
  },
  {
    id: 2,
    name: "12 cm Electric Sparkles",
    slug: "12-cm-electric-sparkles",
    description: "Medium-sized electric sparkles ideal for family celebrations. Safe and reliable quality from trusted Sivakasi manufacturers.",
    category: 1,
    price: 150,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
    isFeatured: true
  },
  {
    id: 3,
    name: "15 cm Electric Sparkles",
    slug: "15-cm-electric-sparkles",
    description: "Long-lasting electric sparkles with brilliant golden light. Perfect for creating magical moments during festivals.",
    category: 1,
    price: 200,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "18 cm Electric Sparkles",
    slug: "18-cm-electric-sparkles",
    description: "Extended length sparkles for longer celebration time. Premium Sivakasi quality with consistent performance.",
    category: 1,
    price: 250,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "20 cm Electric Sparkles",
    slug: "20-cm-electric-sparkles",
    description: "Extra-long electric sparkles for grand celebrations. Burns for over a minute with dazzling golden sparks.",
    category: 1,
    price: 300,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "25 cm Electric Sparkles",
    slug: "25-cm-electric-sparkles",
    description: "Premium jumbo sparkles for special occasions. Longest burning time with spectacular golden fountain effect.",
    category: 1,
    price: 400,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
    isNew: true
  },

  // Fancy Sparkles
  {
    id: 7,
    name: "10 cm Blue Sparkle",
    slug: "10-cm-blue-sparkle",
    description: "Beautiful blue colored sparkles that create stunning blue light effects. Perfect for themed celebrations and parties.",
    category: 2,
    price: 180,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
    isFeatured: true
  },
  {
    id: 8,
    name: "12 cm Red Sparkle",
    slug: "12-cm-red-sparkle",
    description: "Vibrant red sparkles that add a festive touch to any celebration. Safe and colorful for family enjoyment.",
    category: 2,
    price: 200,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
  },
  {
    id: 9,
    name: "15 cm Green Sparkle",
    slug: "15-cm-green-sparkle",
    description: "Eco-friendly green sparkles perfect for nature-themed celebrations. Bright green sparks with extended burn time.",
    category: 2,
    price: 220,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
    isNew: true
  },
  {
    id: 10,
    name: "18 cm Yellow Sparkle",
    slug: "18-cm-yellow-sparkle",
    description: "Bright yellow sparkles that create warm, golden-yellow light. Perfect for prosperity-themed celebrations.",
    category: 2,
    price: 240,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop"
  },
  {
    id: 11,
    name: "20 cm Pink Sparkle",
    slug: "20-cm-pink-sparkle",
    description: "Elegant pink sparkles ideal for weddings and special occasions. Creates romantic pink light effects.",
    category: 2,
    price: 280,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
  },
  {
    id: 12,
    name: "25 cm Multicolor Sparkle",
    slug: "25-cm-multicolor-sparkle",
    description: "Spectacular multicolor sparkles that change colors while burning. Perfect for grand celebrations and festivals.",
    category: 2,
    price: 450,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
    isFeatured: true
  },

  // Colour Matches & Guns
  {
    id: 13,
    name: "10 in 1 Matches",
    slug: "10-in-1-matches",
    description: "Convenient pack of 10 color matches in one box. Multiple colors for extended celebration fun.",
    category: 3,
    price: 350,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop"
  },
  {
    id: 14,
    name: "Color Gun",
    slug: "color-gun",
    description: "Exciting color gun that shoots colorful sparks. Safe handheld firework for thrilling celebrations.",
    category: 3,
    price: 150,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
    isFeatured: true
  },
  {
    id: 15,
    name: "Sparkling Matches",
    slug: "sparkling-matches",
    description: "Traditional sparkling matches with bright colorful flames. Classic Sivakasi quality for festive lighting.",
    category: 3,
    price: 80,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop"
  },

  // Special Multi Colour Shots
  {
    id: 16,
    name: "10 * 10 Multi Colour Shots",
    slug: "10x10-multi-colour-shots",
    description: "100 shots of spectacular multi-colored aerial effects. Perfect for grand celebrations and festivals.",
    category: 4,
    price: 800,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
    isFeatured: true
  },
  {
    id: 17,
    name: "20 * 20 Multi Colour Shots",
    slug: "20x20-multi-colour-shots",
    description: "400 shots of amazing multi-colored aerial display. Premium quality for professional-level celebrations.",
    category: 4,
    price: 1500,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
    isNew: true
  },
  {
    id: 18,
    name: "30 * 30 Multi Colour Shots",
    slug: "30x30-multi-colour-shots",
    description: "900 shots of breathtaking multi-colored fireworks. Ultimate choice for grand festival celebrations.",
    category: 4,
    price: 2500,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop"
  }
];

export const banners = [
  {
    id: 1,
    title: "Premium Sivakasi Fireworks",
    subtitle: "Celebrate festivals with authentic K2G Crackers",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=1200&h=600&fit=crop",
    link: "/products"
  },
  {
    id: 2,
    title: "Diwali Special Offers",
    subtitle: "Up to 30% off on festival combos and gift boxes",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1200&h=600&fit=crop",
    link: "/products/gift-boxes"
  },
  {
    id: 3,
    title: "Safe & Quality Fireworks",
    subtitle: "ISO certified products with nationwide delivery",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=600&fit=crop",
    link: "/about"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Festival Organizer",
    content: "K2G Crackers has been our trusted partner for 5 years. Their quality is unmatched and delivery is always on time for our Diwali celebrations.",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Happy Customer",
    content: "Best fireworks in Sivakasi! The sparkles are so beautiful and safe for children. We order every year for our family celebrations.",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Arun Patel",
    role: "Bulk Buyer",
    content: "Excellent bulk pricing and fantastic customer service. K2G Crackers makes our wedding celebrations truly spectacular!",
    avatar: "/placeholder.svg"
  }
];
