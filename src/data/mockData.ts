
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
    name: "Crackers",
    slug: "crackers",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Biscuits",
    slug: "biscuits",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Cookies",
    slug: "cookies",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Wafers",
    slug: "wafers",
    image: "/placeholder.svg"
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Saltine Crackers",
    slug: "classic-saltine-crackers",
    description: "Our original classic saltine crackers made with premium ingredients for the perfect crunch.",
    category: 1,
    price: 3.99,
    image: "/placeholder.svg",
    isFeatured: true
  },
  {
    id: 2,
    name: "Whole Grain Crackers",
    slug: "whole-grain-crackers",
    description: "Hearty whole grain crackers that are both nutritious and delicious.",
    category: 1,
    price: 4.49,
    image: "/placeholder.svg",
    isFeatured: true
  },
  {
    id: 3,
    name: "Cheese Crackers",
    slug: "cheese-crackers",
    description: "Savory cheese crackers made with real cheddar cheese for a flavorful snack.",
    category: 1,
    price: 3.79,
    image: "/placeholder.svg",
    isNew: true
  },
  {
    id: 4,
    name: "Butter Cookies",
    slug: "butter-cookies",
    description: "Rich and buttery cookies that melt in your mouth.",
    category: 3,
    price: 5.29,
    image: "/placeholder.svg",
    isFeatured: true
  },
  {
    id: 5,
    name: "Chocolate Wafers",
    slug: "chocolate-wafers",
    description: "Crispy chocolate wafers with a hint of cocoa.",
    category: 4,
    price: 4.99,
    image: "/placeholder.svg",
    isNew: true
  },
  {
    id: 6,
    name: "Digestive Biscuits",
    slug: "digestive-biscuits",
    description: "Classic digestive biscuits perfect with tea or coffee.",
    category: 2,
    price: 3.49,
    image: "/placeholder.svg"
  },
  {
    id: 7,
    name: "Cream Crackers",
    slug: "cream-crackers",
    description: "Light and crispy cream crackers ideal for cheese and spreads.",
    category: 1,
    price: 2.99,
    image: "/placeholder.svg"
  },
  {
    id: 8,
    name: "Chocolate Chip Cookies",
    slug: "chocolate-chip-cookies",
    description: "Classic cookies packed with chocolate chips in every bite.",
    category: 3,
    price: 4.79,
    image: "/placeholder.svg",
    isFeatured: true
  }
];

export const banners = [
  {
    id: 1,
    title: "Premium Quality Crackers",
    subtitle: "Made with the finest ingredients",
    image: "/placeholder.svg",
    link: "/products/crackers"
  },
  {
    id: 2,
    title: "New Flavors Available",
    subtitle: "Try our latest product line",
    image: "/placeholder.svg",
    link: "/new-arrivals"
  },
  {
    id: 3,
    title: "Special Discount",
    subtitle: "Get 20% off on selected items",
    image: "/placeholder.svg",
    link: "/offers"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Regular Customer",
    content: "These are the best crackers I've ever had! The quality and taste are unmatched.",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Food Blogger",
    content: "K2G Crackers has become my go-to brand for all snack needs. Their variety is impressive!",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Chef",
    content: "I use these crackers in my restaurant. The quality is consistent and my customers love them.",
    avatar: "/placeholder.svg"
  }
];
