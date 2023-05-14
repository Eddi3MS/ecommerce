import { useQuery } from '@tanstack/react-query'
import { RequestAllProducts } from '@src/utils'

const useAllProducts = () => {
  const { data, isLoading, error } = useQuery(['products'], () =>
    RequestAllProducts()
  )

  return { data, isLoading, error }
}

export default useAllProducts
