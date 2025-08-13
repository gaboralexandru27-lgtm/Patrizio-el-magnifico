export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  images: string[];
  brand: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  features: string[];
  nutritionalFacts?: NutritionalFacts;
  usage: string;
  warnings: string[];
  tags: string[];
  goals: string[];
  servingsPerContainer: number;
  servingSize: string;
}

export interface NutritionalFacts {
  servingSize: string;
  servingsPerContainer: number;
  calories?: number;
  ingredients: Ingredient[];
}

export interface Ingredient {
  name: string;
  amount: string;
  dailyValue?: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: number;
}

export interface Order {
  id: string;
  items: Array<{
    product: Product;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
  shippingAddress: Address;
  trackingNumber?: string;
}

export interface Address {
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}