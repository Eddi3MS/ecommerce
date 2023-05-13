import { createSlice } from '@reduxjs/toolkit'

interface CartItem {
  id: number
  name: string
  unit_price: number
  quantity: number
}

interface CartState {
  cart: CartItem[]
}

const initialState: CartState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    handleAddItemToCart(state, { payload }: { payload: CartItem }) {
      const hasItem = state.cart.findIndex((item) => item.id === payload.id)

      if (hasItem >= 0) {
        state.cart = state.cart.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + payload.quantity }
            : item
        )
      } else {
        state.cart = [...state.cart, payload]
      }
    },
  },
})

export const { handleAddItemToCart } = cartSlice.actions

export default cartSlice.reducer
