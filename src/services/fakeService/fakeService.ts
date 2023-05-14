import { AppError, ErrorHandling } from '@src/errors'
import { z } from 'zod'
import { api } from '../api'
import {
  CategoriesDTO,
  CategoryType,
  ProductDTO,
  ProductsListDTO,
  categoriesSchema,
  productSchema,
  productsListSchema,
} from './DTO'

class FakeService {
  public static async listAllProducts(): Promise<ProductsListDTO> {
    try {
      const response = await api.get<ProductsListDTO>('')

      if (!response.data) {
        throw new AppError('Something went wrong when listing products.')
      }

      const parsedData = productsListSchema.parse(response.data)

      return parsedData
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.errors?.[0]?.message

        throw new AppError(`Failed to parse products data: ${errorMessages}`)
      } else {
        const errorHandling = new ErrorHandling(error)
        throw new AppError(
          errorHandling.error.message,
          errorHandling.error.statusCode
        )
      }
    }
  }

  public static async listCategories(): Promise<CategoriesDTO> {
    try {
      const response = await api.get<CategoriesDTO>(`categories`)

      if (!response.data) {
        throw new AppError('Something went wrong when listing categories.')
      }

      const parsedData = categoriesSchema.parse(response.data)

      return parsedData
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.errors?.[0]?.message

        throw new AppError(`Failed to parse categories data: ${errorMessages}`)
      } else {
        const errorHandling = new ErrorHandling(error)
        throw new AppError(
          errorHandling.error.message,
          errorHandling.error.statusCode
        )
      }
    }
  }

  public static async listProductsFromCategory(
    category: CategoryType
  ): Promise<ProductsListDTO> {
    try {
      const response = await api.get<ProductsListDTO>(`category/${category}`)

      if (!response.data.length) {
        throw new AppError("Category with the given identifier doesn't exist.")
      }

      const parsedData = productsListSchema.parse(response.data)

      return parsedData
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.errors?.[0]?.message

        throw new AppError(`Failed to parse products data: ${errorMessages}`)
      } else {
        const errorHandling = new ErrorHandling(error)
        throw new AppError(
          errorHandling.error.message,
          errorHandling.error.statusCode
        )
      }
    }
  }

  public static async getSingleProduct(productId: string): Promise<ProductDTO> {
    try {
      const response = await api.get<ProductDTO>(`${productId}`)

      if (!response.data) {
        throw new AppError("Product with the given ID doesn't exist.")
      }

      const parsedData = productSchema.parse(response.data)

      return parsedData
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.errors?.[0]?.message

        throw new AppError(`Failed to parse product data: ${errorMessages}`)
      } else {
        const errorHandling = new ErrorHandling(error)
        throw new AppError(
          errorHandling.error.message,
          errorHandling.error.statusCode
        )
      }
    }
  }
}

export { FakeService }
