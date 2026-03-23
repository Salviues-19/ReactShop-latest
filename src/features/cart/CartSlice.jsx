import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    totalQuantity: 0,
  totalPrice: 0,
}
const cartSlice = createSlice({
    name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.items.find((item)=>
        item.id === newItem.id
      )
      state.totalQuantity++;
      if(!existingItem){
        state.items.push({
          ...newItem,
          quantity:1,
        });

      }else{
        existingItem.quantity++;
      }
      state.totalPrice += newItem.price;
    },
   removeFromCart: (state, action) => {
  const id = action.payload;

  const existingItem = state.items.find((item) => item.id === id);

  if (!existingItem) return;

  state.totalQuantity--;
  state.totalPrice -= existingItem.price;

  if (existingItem.quantity === 1) {
    state.items = state.items.filter((item) => item.id !== id);
  } else {
    existingItem.quantity--;
  }
},
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;