import { useQuery } from '@tanstack/react-query'
import { CategoryType } from '@src/services/fakeService/DTO'
import { RequestProductsFromCategory } from '@src/utils'

const useCategory = ({
  category,
  enabled,
}: {
  category?: CategoryType
  enabled: boolean
}) => {
  const { data, isLoading, error } = useQuery(
    ['category', category],
    () => RequestProductsFromCategory(category),
    {
      enabled,
    }
  )

  return { data, isLoading, error }
}

export default useCategory
