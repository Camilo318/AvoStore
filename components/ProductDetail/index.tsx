import React, { useState } from 'react'

interface ProductDetailProps {
  product: TProduct
}

import styles from './ProductDetail.module.scss'
import { useAppState } from '../AppProvider/index'

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [state, dispatch] = useAppState()
  const [amount, setAmount] = useState<number>(1)

  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value

    if (name === 'amount') {
      setAmount(() => +value)
    }
  }

  const addItem = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: product,
      quantity: amount
    })
  }
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
            name='amount'
            className='input-1'
            type='number'
            min={1}
            step={1}
            value={amount}
            onChange={handleChange}
          />
          <button className='button-1' onClick={addItem}>
            Add to the Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
