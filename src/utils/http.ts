import { FakeService } from '../services/fakeService'
import { CategoryType } from '../services/fakeService/DTO'

export async function RequestCategories() {
  const categories = await FakeService.listCategories()

  return categories
}

export async function RequestProductsFromCategory(category?: CategoryType) {
  if (!category) return []
  const categoryProducts = FakeService.listProductsFromCategory(category)

  return categoryProducts
}

export async function RequestSingleProduct(id?: string) {
  if (!id) return null
  const product = FakeService.getSingleProduct(id)

  return product
}
