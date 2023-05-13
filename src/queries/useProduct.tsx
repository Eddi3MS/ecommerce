import { useQuery } from '@tanstack/react-query'
import { RequestSingleProduct } from '../utils'

const useProduct = ({
  productId,
  enabled,
}: {
  productId?: string
  enabled: boolean
}) => {
  const { data, isLoading, error } = useQuery(
    ['product', productId],
    () => RequestSingleProduct(productId),
    {
      enabled,
    }
  )

  return { data, isLoading, error }
}

export default useProduct
