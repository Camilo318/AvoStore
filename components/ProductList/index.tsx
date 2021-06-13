import React from 'react'
import Product from '../Product/index'

import styles from './ProductList.module.scss'

interface ProductListProps {
  products: TProduct[]
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className={styles.productList}>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
