import { useQuery } from '@tanstack/react-query'
import { RequestAllProducts } from '../utils'

const useAllProduct = () => {
  const { data, isLoading, error } = useQuery(['products'], () =>
    RequestAllProducts()
  )

  return { data, isLoading, error }
}

export default useAllProduct
