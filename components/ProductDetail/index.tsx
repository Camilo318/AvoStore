import React from 'react'

interface ProductDetailProps {
  product: TProduct
}

import styles from './ProductDetail.module.scss'
import { useAppState } from '../AppProvider/index'

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [state, dispatch] = useAppState()
  return (
    <div className={styles.productDetail}>
      <figure className={styles.productDetail__image}>
        <img src='/images/avocado.svg' alt={`${product?.name}`} />
      </figure>

      <div className={styles.productDetail__info}>
        <h3 className='heading-3'>{product?.name}</h3>
        <span className={styles.price}>{product.price}</span>
        <span className={styles.sku}>SKU: {product.sku}</span>
        <div className={styles.inputs}>
          <input
            className='input-1'
            type='number'
            min={1}
            step={1}
            defaultValue={1}
          />
          <button
            className='button-1'
            onClick={() =>
              dispatch({
                type: 'ADD_ITEM',
                payload: product,
                quantity: 1
              })
            }>
            Add to the Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
