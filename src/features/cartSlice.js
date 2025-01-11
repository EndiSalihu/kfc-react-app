import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
  cartItems: [],
  cartQuantity: 0,
  cartTotal: 0,
  cartShipping: 1,
  cartOrderTotal: 0,
};

const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : defaultState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    calculateTotals: (state) => {
      state.cartOrderTotal = state.cartTotal + state.cartShipping;
      localStorage.setItem('cart', JSON.stringify(state));
    },

    addItem: (state, action) => {
      const { prodId, product } = action.payload;
    
      const existingItem = state.cartItems.find(item => item.id === prodId);
    
      if (existingItem) {
        existingItem.amount += 1;
        toast.success(`${product.title} increased by 1.`);
      } else {
        state.cartItems.push({ ...product, amount: 1 });
        toast.success(`${product.title} added to cart.`);
      }
    
      state.cartQuantity += 1;
      state.cartTotal += product.price;
      cartSlice.caseReducers.calculateTotals(state);
    },
    

    decreaseItem: (state, action) => {
      const { prodId } = action.payload;
      const item = state.cartItems.find((item) => item.id === prodId);
    
      if (item) {
        if (item.amount <= 1) {
          state.cartItems = state.cartItems.filter((i) => i.id !== prodId);
          toast.success(`${item.title} removed from your cart.`);
        } else {
          item.amount -= 1;
          toast.success(`${item.title} decreased by 1.`);
        }
    
        state.cartQuantity -= 1;
        state.cartTotal -= item.price;
        cartSlice.caseReducers.calculateTotals(state);
      }
    },
    
    removeItem: (state, action) => {
      const { prodId } = action.payload;
      const product = state.cartItems.find((i) => i.id === prodId);
    
      if (product) {
        state.cartItems = state.cartItems.filter((i) => i.id !== prodId);
        state.cartQuantity -= product.amount;
        state.cartTotal -= product.price * product.amount;
        toast.success(`${product.title} removed from your cart.`);
        cartSlice.caseReducers.calculateTotals(state); 
      }
    },

    clearCart: () => {
      toast.success('Cart cleared.');
      localStorage.setItem('cart', JSON.stringify(defaultState));
      return defaultState;
    },
  },
});

export const { addItem, decreaseItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
