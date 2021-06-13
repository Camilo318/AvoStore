import React from 'react'
import Link from 'next/link'
interface ProductProps {
  product: TProduct
}

import styles from './Product.module.scss'

const Product = ({ product }: ProductProps) => {
  return (
    <Link href={`/product/${product.id}`}>
      <a className={styles.product}>
        <figure className={styles.product__image}>
          <img src='/images/avocado.svg' alt={product.name} />
        </figure>
        <section className={styles.product__info}>
          <div className={styles.product__title}>{product.name}</div>
          <div className={styles.product__price}>{product.price}</div>
        </section>
      </a>
    </Link>
  )
}

export default Product
