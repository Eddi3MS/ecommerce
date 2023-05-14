import { createSlice } from '@reduxjs/toolkit'
import {
  CartDTO,
  CartListDTO,
  LocalStorageService,
} from '@src/services/localStorageService'

const localStorageCart = LocalStorageService.getCartFromStorage()

interface CartState {
  cart: CartListDTO
}

const initialState: CartState = {
  cart: localStorageCart ?? [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    handleAddItemToCart(state, { payload }: { payload: CartDTO }) {
      const hasItem = state.cart.findIndex((item) => item.id === payload.id)
      let updatedState
      if (hasItem >= 0) {
        updatedState = state.cart.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + payload.quantity }
            : item
        )
      } else {
        updatedState = [...state.cart, payload]
      }

      state.cart = updatedState
      LocalStorageService.saveCartToStorage(updatedState)
    },
    handleChangeCartItemQtty(
      state,
      { payload }: { payload: { type: 'add' | 'remove'; id: number } }
    ) {
      const updatedState = state.cart.map((product) =>
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

      state.cart = updatedState
      LocalStorageService.saveCartToStorage(updatedState)
    },

    handleRemoveProductFromCart(
      state,
      { payload }: { payload: { id: number } }
    ) {
      const updatedState = state.cart.filter(
        (product) => product.id !== payload.id
      )

      state.cart = updatedState
      LocalStorageService.saveCartToStorage(updatedState)
    },
    handleClearCart(state) {
      state.cart = []
      LocalStorageService.saveCartToStorage([])
    },
  },
})

export const {
  handleAddItemToCart,
  handleChangeCartItemQtty,
  handleRemoveProductFromCart,
  handleClearCart,
} = cartSlice.actions

export default cartSlice.reducer
