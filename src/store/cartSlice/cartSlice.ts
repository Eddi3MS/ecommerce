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
    handleChangeCartItemQtty(
      state,
      { payload }: { payload: { type: 'add' | 'remove'; id: number } }
    ) {
      state.cart = state.cart.map((product) =>
        product.id === payload.id
          ? {
              ...product,
              quantity:
                payload.type === 'add'
                  ? product.quantity + 1
                  : product.quantity - 1,
            }
          : product
      )
    },

    handleRemoveProductFromCart(
      state,
      { payload }: { payload: { id: number } }
    ) {
      state.cart = state.cart.filter((product) => product.id !== payload.id)
    },
  },
})

export const {
  handleAddItemToCart,
  handleChangeCartItemQtty,
  handleRemoveProductFromCart,
} = cartSlice.actions

export default cartSlice.reducer
