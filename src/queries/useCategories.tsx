import { useQuery } from '@tanstack/react-query'
import { RequestCategories } from '@src/utils'

const useCategories = () => {
  const { data, isLoading, error } = useQuery(['categories'], RequestCategories)

  return { data, isLoading, error }
}

export default useCategories
