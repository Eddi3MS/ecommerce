import { Card, ErrorCard, Loading, Search } from '@src/components'
import { IError } from '@src/errors'
import { useDebounce } from '@src/hooks'
import { useAllProducts } from '@src/queries'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'

const Products = () => {
  const { data: products, isLoading, error } = useAllProducts()

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
      <section className={styles.p_home}>
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
    <section className={styles.p_home}>
      <div className={styles.p_home_heading}>
        <h2>All Products</h2>
        <Search search={search} handleSearch={handleSearch} />
      </div>
      <NavLink className={styles.p_home_link_cat} to="/categories">
        See All Categories
      </NavLink>

      <div className={styles.p_home_products}>
        {filteredProducts?.length ? (
          <>
            {filteredProducts.map((p) => (
              <NavLink to={`/products/${String(p.id)}`} key={p.id}>
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
