import styles from './styles.module.scss'

const Search = ({
  search,
  handleSearch,
}: {
  search: string
  handleSearch: (value: string) => void
}) => {
  return (
    <label className={styles.c_search}>
      <i className={`ph ph-magnifying-glass`} />

      <input
        onChange={(e) => {
          const value = e.target.value
          handleSearch(value)
        }}
        placeholder="Search for a product..."
        value={search}
      />
      {search ? (
        <div onClick={(e) => e.stopPropagation()}>
          <i
            className="ph ph-x"
            tabIndex={0}
            onClick={() => handleSearch('')}
          ></i>
        </div>
      ) : null}
    </label>
  )
}

export default Search

/*  filteredProducts?.length ? (
          <>
            {filteredProducts.map((product) => (
              <Card>
                <Card.Row>
                  <Card.Image src={product.image} style={{ width: '40px' }} />
                  <Card.Title title={product.title} />
                </Card.Row>
              </Card>
            ))}
          </>
        ) : (
          <p>No match found.</p>
        ) */
