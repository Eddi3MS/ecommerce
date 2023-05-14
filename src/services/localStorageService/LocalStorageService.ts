import { CartListDTO, cartSchema } from './DTO'

class LocalStorageService {
  public static saveCartToStorage(itemsToSave: CartListDTO): void {
    localStorage.setItem('@commerce-cart', JSON.stringify(itemsToSave))
  }

  public static getCartFromStorage(): CartListDTO | null {
    const cart = localStorage.getItem('@commerce-cart')

    if (cart) {
      try {
        const cartParsed = cartSchema.parse(JSON.parse(cart))

        return cartParsed as CartListDTO
      } catch (error) {
        return null
      }
    }
    return null
  }

  public static deleteCartFromStorage(): void {
    localStorage.deleteItem('@commerce-cart')
  }
}

export { LocalStorageService }
