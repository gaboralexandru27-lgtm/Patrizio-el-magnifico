interface CartItem extends Product {
  quantity: number;
}

interface CartItemWithQuantity {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  category: string;
  description: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  tags?: string[];
  goals?: string[];
  features?: string[];
  warnings?: string[];
  images?: string[];
  originalPrice?: number;
  nutritionalFacts?: any;
  usage: string;
  servingsPerContainer: number;
  servingSize: string;
  quantity: number;
}

interface CartState {
  items: CartItemWithQuantity[];
  total: number;
  discountCode: string | null;
  discountAmount: number;
}

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        cartItems: state.items,
        total: state.total,
        discountCode: state.discountCode,
        discountAmount: state.discountAmount,