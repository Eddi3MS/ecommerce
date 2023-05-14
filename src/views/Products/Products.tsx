import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, ErrorCard, Loading, Search } from '../../components'
import { useDebounce } from '../../hooks'
import useAllProduct from '../../queries/useAllProducts'
import styles from './styles.module.scss'
import { IError } from '../../errors'

const Products = () => {
  const { data: products, isLoading, error } = useAllProduct()

  const [search, setSearch] = useState('')
  const value = useDebounce(search)

  const handleSearch = (search: string) => {
    setSearch(search)
  }

  if (isLoading) {
    return <Loading />
  }

  if (!!error || !products?.length) {
    return (
      <section className={styles.p_all_products}>
        <ErrorCard
          errorMessage={(error as IError)?.message ?? 'No products found.'}
        />
      </section>
    )
  }

  const filteredProducts =
    value && value.length
      ? products?.filter((p) =>
          p.title.toLowerCase().includes(value.toLowerCase())
        )
      : products

  return (
    <section className={styles.p_all_products}>
      <div className={styles.p_all_products_heading}>
        <h2>All Products</h2>
        <Search search={search} handleSearch={handleSearch} />
      </div>

      <div className={styles.p_all_products_products}>
        {filteredProducts?.length ? (
          <>
            {filteredProducts.map((p) => (
              <NavLink to={`${String(p.id)}`} key={p.id}>
                <Card>
                  <Card.Image src={p.image} alt={`${p.title} image`} />
                  <Card.Title title={p.title} className="clamp-2" />
                  <Card.Price price={p.price} />
                </Card>
              </NavLink>
            ))}
          </>
        ) : (
          <p>No match found.</p>
        )}
      </div>
    </section>
  )
}

export default Products
