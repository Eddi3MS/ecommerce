import { z } from 'zod'

export const cartItemSchema = z.object({
  id: z.number(),
  name: z.string().nonempty(),
  unit_price: z.number(),
  quantity: z.number(),
})

export type CartDTO = z.infer<typeof cartItemSchema>

export const cartSchema = z.array(cartItemSchema)

export type CartListDTO = z.infer<typeof cartSchema>
