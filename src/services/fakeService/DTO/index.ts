import * as z from 'zod'

const icons = {
  electronics: 'ph ph-devices',
  jewelery: 'ph ph-watch',
  "men's clothing": 'ph ph-gender-male',
  "women's clothing": 'ph ph-gender-female',
}

export const categoryUnion = z.union([
  z.literal('electronics'),
  z.literal('jewelery'),
  z.literal("men's clothing"),
  z.literal("women's clothing"),
])

export type CategoryType = z.infer<typeof categoryUnion>

export const categoriesSchema = z.array(categoryUnion).transform((categories) =>
  categories.map((category, index) => ({
    id: index + 1,
    name: category,
    route: category,
    icon: icons[category],
  }))
)

export type CategoriesDTO = z.infer<typeof categoriesSchema>

export const productSchema = z.object({
  id: z.number(),
  title: z.string().nonempty(),
  price: z.number(),
  description: z.string().nonempty(),
  image: z.string().url(),
  category: categoryUnion,
})

export type ProductDTO = z.infer<typeof productSchema>

export const productsListSchema = z.array(productSchema)

export type ProductsListDTO = z.infer<typeof productsListSchema>
