import strawberryImg from "../../assets/strawberry.png";
import broccoliImg from "../../assets/broccoli.png";
import bananaImg from "../../assets/banana.png";
import capsicumImg from "../../assets/capsicum.png";
import grapesImg from "../../assets/grapes.png";
import kiwiImg from "../../assets/kiwi.png";
import milkImg from "../../assets/milk.png";
import butterImg from "../../assets/butter.png";
import eggsImg from "../../assets/eggs.png";
import cheeseImg from "../../assets/cheese.png";
import yogurtImg from "../../assets/yogurt.png";
import salmonImg from "../../assets/salmon.png";
import beefImg from "../../assets/beef.png";
import shrimpImg from "../../assets/shrimp.png";
import chickenImg from "../../assets/chicken-breast.png";
import tilapiaImg from "../../assets/tilapia.png";

export const CATEGORIES = [
  "All",
  "Fruits & Veggies",
  "Dairy & Eggs",
  "Meat & Seafood",
];

export const CATEGORY_INFO = {
  "Fruits & Veggies": {
    storage: "Keep refrigerated in a breathable bag and wash just before eating.",
    shelfLife: "3–5 days",
    highlights: [
      "Hand-picked at peak ripeness",
      "Grown without synthetic pesticides",
      "Delivered within 24 hours",
    ],
  },
  "Dairy & Eggs": {
    storage: "Keep refrigerated at 2–4°C. Store eggs point-down in their carton.",
    shelfLife: "5–7 days",
    highlights: [
      "Sourced from local family farms",
      "No added hormones",
      "Cold-chain delivered",
    ],
  },
  "Meat & Seafood": {
    storage:
      "Keep refrigerated at 0–4°C and cook within 1–2 days, or freeze on arrival.",
    shelfLife: "1–2 days",
    highlights: [
      "Responsibly sourced",
      "Cut fresh to order",
      "Kept at 0–4°C in transit",
    ],
  },
};

export const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Fresh Organic Strawberries",
    category: "Fruits & Veggies",
    price: 4.99,
    originalPrice: 6.5,
    unit: "500g",
    rating: 4.9,
    reviews: 142,
    badge: "Fresh",
    badgeType: "fresh",
    description:
      "Sun-ripened organic strawberries with a deep ruby colour and a sweet, slightly tart finish. Hand-picked at peak season and packed the same day.",
    image: strawberryImg,
  },
  {
    id: 2,
    name: "Crisp Organic Broccoli",
    category: "Fruits & Veggies",
    price: 2.89,
    originalPrice: 3.5,
    unit: "1 kg",
    rating: 4.8,
    reviews: 95,
    badge: "Organic",
    badgeType: "organic",
    description:
      "Tight, vivid green florets with crisp stems. Harvested young for a tender bite and a mild, earthy sweetness that holds up to roasting or steaming.",
    image: broccoliImg,
  },
  {
    id: 3,
    name: "Fresh Atlantic Salmon Fillet",
    category: "Meat & Seafood",
    price: 13.99,
    originalPrice: 16.5,
    unit: "500g",
    rating: 5.0,
    reviews: 210,
    badge: "Best Seller",
    badgeType: "best-seller",
    description:
      "Thick, hand-cut Atlantic salmon fillets with a buttery texture and clean ocean flavour. Skin-on and pin-boned for easy cooking.",
    image: salmonImg,
  },
  {
    id: 4,
    name: "Farm Fresh Whole Milk",
    category: "Dairy & Eggs",
    price: 3.29,
    originalPrice: 4.0,
    unit: "1 Liter",
    rating: 4.9,
    reviews: 184,
    badge: "Popular",
    badgeType: "popular",
    description:
      "Creamy whole milk from pasture-raised cows, gently pasteurised to preserve its natural richness. Perfect for drinking, coffee, and baking.",
    image: milkImg,
  },
  {
    id: 5,
    name: "Farm Fresh Brown Eggs",
    category: "Dairy & Eggs",
    price: 4.5,
    originalPrice: 5.5,
    unit: "12 pcs",
    rating: 5.0,
    reviews: 320,
    badge: "Sale",
    badgeType: "sale",
    description:
      "Free-range brown eggs with firm whites and golden yolks. Laid by hens raised on open pasture with a natural grain diet.",
    image: eggsImg,
  },
  {
    id: 6,
    name: "Organic Bell Pepper Trio",
    category: "Fruits & Veggies",
    price: 3.49,
    originalPrice: 4.25,
    unit: "500g",
    rating: 4.7,
    reviews: 78,
    badge: "Fresh",
    badgeType: "fresh",
    description:
      "A trio of red, yellow, and green bell peppers — crisp, sweet, and glossy. Great for roasting, stir-fries, and salads.",
    image: capsicumImg,
  },
  {
    id: 7,
    name: "Wild Caught Jumbo Shrimp",
    category: "Meat & Seafood",
    price: 11.99,
    originalPrice: 14.99,
    unit: "500g",
    rating: 4.9,
    reviews: 116,
    badge: "-20%",
    badgeType: "sale",
    description:
      "Plump wild-caught jumbo shrimp, cleaned and deveined. Sweet, firm flesh that holds up beautifully on the grill or in a pan.",
    image: shrimpImg,
  },
  {
    id: 8,
    name: "Premium Tender Beef Steak",
    category: "Meat & Seafood",
    price: 15.99,
    originalPrice: 18.99,
    unit: "1 kg",
    rating: 4.9,
    reviews: 164,
    badge: "Premium",
    badgeType: "popular",
    description:
      "Generously marbled premium beef steak, hand-trimmed by our butchers. Rich flavour and a tender, juicy bite every time.",
    image: beefImg,
  },
  {
    id: 9,
    name: "Sweet Red Seedless Grapes",
    category: "Fruits & Veggies",
    price: 3.99,
    originalPrice: 4.99,
    unit: "500g",
    rating: 4.8,
    reviews: 89,
    badge: "Organic",
    badgeType: "organic",
    description:
      "Sweet, seedless red grapes with a satisfying snap. Grown in sun-drenched vineyards and delivered in protective bunches.",
    image: grapesImg,
  },
  {
    id: 10,
    name: "Pure Salted Cream Butter",
    category: "Dairy & Eggs",
    price: 3.89,
    originalPrice: 4.75,
    unit: "250g",
    rating: 4.8,
    reviews: 105,
    badge: "Popular",
    badgeType: "popular",
    description:
      "Slow-churned salted cream butter with a smooth, velvety texture and a clean dairy finish. Ideal for baking and finishing sauces.",
    image: butterImg,
  },
  {
    id: 11,
    name: "Boneless Chicken Breast",
    category: "Meat & Seafood",
    price: 8.99,
    originalPrice: 10.99,
    unit: "1 kg",
    rating: 4.8,
    reviews: 152,
    badge: "Fresh",
    badgeType: "fresh",
    description:
      "Boneless, skinless chicken breast trimmed to an even thickness for consistent cooking. Lean, tender, and mild in flavour.",
    image: chickenImg,
  },
  {
    id: 12,
    name: "Greek Style Plain Yogurt",
    category: "Dairy & Eggs",
    price: 3.69,
    originalPrice: 4.5,
    unit: "500g",
    rating: 4.9,
    reviews: 92,
    badge: "Organic",
    badgeType: "organic",
    description:
      "Thick Greek-style yogurt strained for a dense, creamy texture. High in protein with a pleasant tang; enjoy plain or with fruit.",
    image: yogurtImg,
  },
  {
    id: 13,
    name: "Organic Cavendish Bananas",
    category: "Fruits & Veggies",
    price: 1.99,
    originalPrice: 2.5,
    unit: "1 kg",
    rating: 4.9,
    reviews: 130,
    badge: "Popular",
    badgeType: "popular",
    description:
      "Naturally sweet Cavendish bananas with soft, creamy flesh. Picked slightly green so they ripen perfectly at home.",
    image: bananaImg,
  },
  {
    id: 14,
    name: "Fresh Zesty Kiwi",
    category: "Fruits & Veggies",
    price: 3.29,
    originalPrice: 4.1,
    unit: "500g",
    rating: 4.7,
    reviews: 64,
    badge: "Fresh",
    badgeType: "fresh",
    description:
      "Fragrant, juicy kiwi with bright green flesh and a sweet-tart punch. Packed with vitamin C and ready to spoon.",
    image: kiwiImg,
  },
  {
    id: 15,
    name: "Artisan Aged Cheddar Cheese",
    category: "Dairy & Eggs",
    price: 5.49,
    originalPrice: 6.8,
    unit: "200g",
    rating: 4.8,
    reviews: 112,
    badge: "Premium",
    badgeType: "popular",
    description:
      "Artisan cheddar aged for a rounded, nutty flavour and a pleasantly crumbly bite. A versatile cheese for boards, melts, and sauces.",
    image: cheeseImg,
  },
  {
    id: 16,
    name: "Fresh Tilapia Fish Fillet",
    category: "Meat & Seafood",
    price: 7.99,
    originalPrice: 9.5,
    unit: "1 kg",
    rating: 4.7,
    reviews: 86,
    badge: "Fresh",
    badgeType: "fresh",
    description:
      "Mild, flaky tilapia fillets trimmed and boneless. A lean, versatile white fish that cooks in minutes.",
    image: tilapiaImg,
  },
];
