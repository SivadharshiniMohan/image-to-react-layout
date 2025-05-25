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
  offerPrice?: number;
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
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Special Multi Colour Shots",
    slug: "special-multi-colour-shots",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop"
  }
];

export const products: Product[] = [
  // Sparkles
  {
    id: 1,
    name: "10 cm Electric Sparkles",
    slug: "10-cm-electric-sparkles",
    description: "Premium quality electric sparkles that light up your celebrations with brilliant shine.",
    category: 1,
    price: 120,
    offerPrice: 95,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=300&fit=crop",
    isFeatured: true
  },
  {
    id: 2,
    name: "12 cm Electric Sparkles",
    slug: "12-cm-electric-sparkles",
    description: "Medium-sized electric sparkles perfect for family celebrations and festivals.",
    category: 1,
    price: 150,
    offerPrice: 120,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=300&fit=crop",
    isFeatured: true
  },
  {
    id: 3,
    name: "15 cm Electric Sparkles",
    slug: "15-cm-electric-sparkles",
    description: "Long-lasting electric sparkles that create magical moments for your special occasions.",
    category: 1,
    price: 180,
    offerPrice: 144,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=300&fit=crop",
    isNew: true
  },
  {
    id: 4,
    name: "18 cm Electric Sparkles",
    slug: "18-cm-electric-sparkles",
    description: "Premium long sparkles for grand celebrations and festive occasions.",
    category: 1,
    price: 210,
    offerPrice: 168,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=300&fit=crop"
  },
  {
    id: 5,
    name: "20 cm Electric Sparkles",
    slug: "20-cm-electric-sparkles",
    description: "Extra-long electric sparkles for spectacular light displays.",
    category: 1,
    price: 240,
    offerPrice: 192,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=300&fit=crop"
  },
  {
    id: 6,
    name: "25 cm Electric Sparkles",
    slug: "25-cm-electric-sparkles",
    description: "The longest electric sparkles for the most impressive celebrations.",
    category: 1,
    price: 280,
    offerPrice: 224,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=300&fit=crop"
  },

  // Fancy Sparkles
  {
    id: 7,
    name: "10 cm Blue Sparkle",
    slug: "10-cm-blue-sparkle",
    description: "Beautiful blue colored sparkles that add a unique touch to your celebrations.",
    category: 2,
    price: 200,
    offerPrice: 160,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop",
    isFeatured: true
  },
  {
    id: 8,
    name: "12 cm Red Sparkle",
    slug: "12-cm-red-sparkle",
    description: "Vibrant red sparkles perfect for festive occasions and celebrations.",
    category: 2,
    price: 220,
    offerPrice: 176,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop"
  },
  {
    id: 9,
    name: "15 cm Green Sparkle",
    slug: "15-cm-green-sparkle",
    description: "Brilliant green sparkles that create mesmerizing light effects.",
    category: 2,
    price: 250,
    offerPrice: 200,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop",
    isNew: true
  },
  {
    id: 10,
    name: "18 cm Yellow Sparkle",
    slug: "18-cm-yellow-sparkle",
    description: "Bright yellow sparkles that illuminate your special moments.",
    category: 2,
    price: 270,
    offerPrice: 216,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop"
  },
  {
    id: 11,
    name: "20 cm Pink Sparkle",
    slug: "20-cm-pink-sparkle",
    description: "Elegant pink sparkles perfect for weddings and special celebrations.",
    category: 2,
    price: 290,
    offerPrice: 232,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop"
  },
  {
    id: 12,
    name: "25 cm Multicolor Sparkle",
    slug: "25-cm-multicolor-sparkle",
    description: "Amazing multicolor sparkles that change colors as they burn.",
    category: 2,
    price: 350,
    offerPrice: 280,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop",
    isFeatured: true
  },

  // Colour Matches & Guns
  {
    id: 13,
    name: "10 in 1 Matches",
    slug: "10-in-1-matches",
    description: "Convenient pack of 10 colored matches for lighting fireworks safely.",
    category: 3,
    price: 80,
    offerPrice: 64,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=300&fit=crop"
  },
  {
    id: 14,
    name: "Color Gun",
    slug: "color-gun",
    description: "Fun colored smoke gun that creates colorful smoke effects.",
    category: 3,
    price: 150,
    offerPrice: 120,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=300&fit=crop",
    isFeatured: true
  },
  {
    id: 15,
    name: "Sparkling Matches",
    slug: "sparkling-matches",
    description: "Special matches that create sparks while lighting, adding extra excitement.",
    category: 3,
    price: 100,
    offerPrice: 80,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=300&fit=crop"
  },
  {
    id: 16,
    name: "Magic Gun",
    slug: "magic-gun",
    description: "Amazing gun that shoots colorful stars and creates magical effects.",
    category: 3,
    price: 180,
    offerPrice: 144,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=300&fit=crop",
    isNew: true
  },
  {
    id: 17,
    name: "Fire Shooter",
    slug: "fire-shooter",
    description: "Exciting fire shooter that creates spectacular flame effects.",
    category: 3,
    price: 200,
    offerPrice: 160,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=300&fit=crop"
  },
  {
    id: 18,
    name: "Thunder Matches",
    slug: "thunder-matches",
    description: "Powerful matches that create thunder sounds with sparkling effects.",
    category: 3,
    price: 120,
    offerPrice: 96,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=300&fit=crop"
  },

  // Special Multi Colour Shots
  {
    id: 19,
    name: "10 * 10 Multi Colour Shots",
    slug: "10-10-multi-colour-shots",
    description: "100 shots of brilliant multi-colored fireworks in one package.",
    category: 4,
    price: 500,
    offerPrice: 400,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop",
    isFeatured: true
  },
  {
    id: 20,
    name: "20 * 20 Multi Colour Shots",
    slug: "20-20-multi-colour-shots",
    description: "400 shots of spectacular multi-colored aerial displays.",
    category: 4,
    price: 1200,
    offerPrice: 960,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop",
    isFeatured: true
  },
  {
    id: 21,
    name: "30 * 30 Multi Colour Shots",
    slug: "30-30-multi-colour-shots",
    description: "900 shots of amazing multi-colored fireworks for grand celebrations.",
    category: 4,
    price: 2000,
    offerPrice: 1600,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop",
    isNew: true
  },
  {
    id: 22,
    name: "40 * 40 Multi Colour Shots",
    slug: "40-40-multi-colour-shots",
    description: "1600 shots of incredible multi-colored aerial fireworks display.",
    category: 4,
    price: 3200,
    offerPrice: 2560,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop"
  },
  {
    id: 23,
    name: "50 * 50 Multi Colour Shots",
    slug: "50-50-multi-colour-shots",
    description: "2500 shots of magnificent multi-colored fireworks extravaganza.",
    category: 4,
    price: 4500,
    offerPrice: 3600,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop",
    isFeatured: true
  },
  {
    id: 24,
    name: "60 * 60 Multi Colour Shots",
    slug: "60-60-multi-colour-shots",
    description: "3600 shots of the ultimate multi-colored fireworks experience.",
    category: 4,
    price: 6000,
    offerPrice: 4800,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop"
  }
];

export const banners = [
  {
    id: 1,
    title: "Diwali Special Collection",
    subtitle: "Illuminate your festivals with premium Sivakasi fireworks",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=500&fit=crop",
    link: "/products"
  },
  {
    id: 2,
    title: "Wedding Celebrations",
    subtitle: "Make your special day magical with our fancy crackers",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=500&fit=crop",
    link: "/products/fancy-sparkles"
  },
  {
    id: 3,
    title: "Bulk Orders Available",
    subtitle: "Special discounts on wholesale purchases for dealers",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=500&fit=crop",
    link: "/contact"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Festival Organizer",
    content: "K2G Crackers has been our go-to supplier for 5 years. Their quality is unmatched and delivery is always on time for our Diwali celebrations.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Event Planner",
    content: "The variety and quality of their fancy crackers made our wedding celebration truly magical. Highly recommend K2G Crackers!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Arun Patel",
    role: "Wholesale Dealer",
    content: "Excellent service and genuine Sivakasi products. Their bulk pricing and timely delivery helps us serve our customers better.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
];
