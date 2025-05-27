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



export const p1:any= {
  "Combo Packages": [
    {
      "name": "2500 Combo",
      "price": 2500,
      "offerPrice": 2500,
      "image": "https://k2gcrackers.com/images/combos/2500_combo.jpg"
    },
    {
      "name": "5000 Combo",
      "price": 5000,
      "offerPrice": 5000,
      "image": "https://k2gcrackers.com/images/combos/5000_combo.jpg"
    },
    {
      "name": "7000 Combo",
      "price": 7000,
      "offerPrice": 7000,
      "image": "https://k2gcrackers.com/images/combos/7000_combo.jpg"
    },
    {
      "name": "10k mega combo pack",
      "price": 10000,
      "offerPrice": 10000,
      "image": "https://k2gcrackers.com/images/combos/10k_mega_combo.jpg"
    }
  ],
  "Ground Chakkar": [
    {
      "name": "Ground chakkar big",
      "price": 31,
      "offerPrice": 155,
      "image": "https://k2gcrackers.com/images/ground_chakkar/big.jpg"
    },
    {
      "name": "Ground chakkar ashoka",
      "price": 46,
      "offerPrice": 230,
      "image": "https://k2gcrackers.com/images/ground_chakkar/ashoka.jpg"
    },
    {
      "name": "Ground chakkar SPL",
      "price": 56,
      "offerPrice": 280,
      "image": "https://k2gcrackers.com/images/ground_chakkar/spl.jpg"
    },
    {
      "name": "Ground chakkar deluxe",
      "price": 100,
      "offerPrice": 500,
      "image": "https://k2gcrackers.com/images/ground_chakkar/deluxe.jpg"
    },
    {
      "name": "Moto wheel",
      "price": 160,
      "offerPrice": 800,
      "image": "https://k2gcrackers.com/images/ground_chakkar/moto_wheel.jpg"
    },
    {
      "name": "Whistling wheel",
      "price": 100,
      "offerPrice": 500,
      "image": "https://k2gcrackers.com/images/ground_chakkar/whistling.jpg"
    }
  ],
  "New Arrivals": [
    {
      "name": "Lucky money",
      "price": 160,
      "offerPrice": 800,
      "image": "https://k2gcrackers.com/images/new_arrivals/lucky_money.jpg"
    },
    {
      "name": "Bat and ball",
      "price": 200,
      "offerPrice": 1000,
      "image": "https://k2gcrackers.com/images/new_arrivals/bat_ball.jpg"
    },
    {
      "name": "Android 4 in 1",
      "price": 200,
      "offerPrice": 1000,
      "image": "https://k2gcrackers.com/images/new_arrivals/android_4in1.jpg"
    },
    {
      "name": "Old is gold (Olai Vedi)",
      "price": 160,
      "offerPrice": 800,
      "image": "https://k2gcrackers.com/images/new_arrivals/old_is_gold.jpg"
    },
    {
      "name": "Volcano",
      "price": 220,
      "offerPrice": 1100,
      "image": "https://k2gcrackers.com/images/new_arrivals/volcano.jpg"
    },
    {
      "name": "AK47",
      "price": 200,
      "offerPrice": 1000,
      "image": "https://k2gcrackers.com/images/new_arrivals/ak47.jpg"
    }
  ],
  "Sparklers": [
    {
      "name": "10cm Colour",
      "price": 15,
      "offerPrice": 75,
      "image": "https://k2gcrackers.com/images/sparklers/10cm_colour.jpg"
    },
    {
      "name": "15cm Green",
      "price": 40,
      "offerPrice": 200,
      "image": "https://k2gcrackers.com/images/sparklers/15cm_green.jpg"
    },
    {
      "name": "15cm Red",
      "price": 40,
      "offerPrice": 200,
      "image": "https://k2gcrackers.com/images/sparklers/15cm_red.jpg"
    },
    {
      "name": "30cm Red",
      "price": 40,
      "offerPrice": 200,
      "image": "https://k2gcrackers.com/images/sparklers/30cm_red.jpg"
    },
    {
      "name": "30cm Green",
      "price": 40,
      "offerPrice": 200,
      "image": "https://k2gcrackers.com/images/sparklers/30cm_green.jpg"
    },
    {
      "name": "10cm 4 in 1",
      "price": 20,
      "offerPrice": 100,
      "image": "https://k2gcrackers.com/images/sparklers/10cm_4in1.jpg"
    }
  ],
  "Fancy Sparklers": [
    {
      "name": "15cm pink",
      "price": 50,
      "offerPrice": 250,
      "image": "https://k2gcrackers.com/images/fancy_sparklers/15cm_pink.jpg"
    },
    {
      "name": "15cm silver drop",
      "price": 46,
      "offerPrice": 230,
      "image": "https://k2gcrackers.com/images/fancy_sparklers/silver_drop.jpg"
    },
    {
      "name": "Lovely heart",
      "price": 125,
      "offerPrice": 625,
      "image": "https://k2gcrackers.com/images/fancy_sparklers/lovely_heart.jpg"
    },
    {
      "name": "15 CM violet",
      "price": 50,
      "offerPrice": 250,
      "image": "https://k2gcrackers.com/images/fancy_sparklers/15cm_violet.jpg"
    },
    {
      "name": "15 CM blue",
      "price": 50,
      "offerPrice": 250,
      "image": "https://k2gcrackers.com/images/fancy_sparklers/15cm_blue.jpg"
    }
  ]
}


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
