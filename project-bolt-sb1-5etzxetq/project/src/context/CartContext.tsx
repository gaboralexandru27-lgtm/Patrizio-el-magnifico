import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product } from '../types';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  discountCode: string | null;
  discountAmount: number;
}

interface CartContextType extends CartState {
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  applyDiscount: (code: string) => boolean;
  removeDiscount: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'APPLY_DISCOUNT'; payload: { code: string; amount: number } }
  | { type: 'REMOVE_DISCOUNT' }
  | { type: 'LOAD_CART'; payload: CartState };

const discountCodes: Record<string, number> = {
  'WELCOME10': 0.1,
  'SAVE20': 0.2,
  'FIRST15': 0.15,
  'BULK25': 0.25,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.id === action.payload.product.id);
      let newItems;
      
      if (existingItem) {
        newItems = state.items.map(item =>
          item.id === action.payload.product.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newItems = [...state.items, { ...action.payload.product, quantity: action.payload.quantity }];
      }

      const subtotal = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const total = subtotal - (subtotal * state.discountAmount);

      return { ...state, items: newItems, total };
    }

    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      const subtotal = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const total = subtotal - (subtotal * state.discountAmount);

      return { ...state, items: newItems, total };
    }

    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.id === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

      const subtotal = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const total = subtotal - (subtotal * state.discountAmount);

      return { ...state, items: newItems, total };
    }

    case 'CLEAR_CART':
      return { ...state, items: [], total: 0, discountCode: null, discountAmount: 0 };

    case 'APPLY_DISCOUNT': {
      const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const total = subtotal - (subtotal * action.payload.amount);

      return {
        ...state,
        discountCode: action.payload.code,
        discountAmount: action.payload.amount,
        total,
      };
    }

    case 'REMOVE_DISCOUNT': {
      const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

      return {
        ...state,
        discountCode: null,
        discountAmount: 0,
        total: subtotal,
      };
    }

    case 'LOAD_CART':
      return action.payload;

    default:
      return state;
  }
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    discountCode: null,
    discountAmount: 0,
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) });
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const addToCart = (product: Product, quantity = 1) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } });
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const applyDiscount = (code: string): boolean => {
    const discount = discountCodes[code.toUpperCase()];
    if (discount) {
      dispatch({ type: 'APPLY_DISCOUNT', payload: { code: code.toUpperCase(), amount: discount } });
      return true;
    }
    return false;
  };

  const removeDiscount = () => {
    dispatch({ type: 'REMOVE_DISCOUNT' });
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        total: state.total,
        discountCode: state.discountCode,
        discountAmount: state.discountAmount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        applyDiscount,
        removeDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};