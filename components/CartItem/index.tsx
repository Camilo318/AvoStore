import React from 'react'

interface Props {
  item: CartItemType
}

import styles from './CartItem.module.scss'

const CartItem = ({ item }: Props) => {
  return (
    <div className={styles.cartItem}>
      <figure>
        <img src='/images/avocado.svg' alt={item.name} />
      </figure>
      <div className={styles.cartItem__info}>
        <h3 className='heading-3'>{item.name}</h3>
        <p>
          {item.quantity} X {item.price}
        </p>
        <p>You'll love this avocado</p>
      </div>
    </div>
  )
}

export default CartItem
