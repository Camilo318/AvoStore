import React from 'react'
import CartItem from '../CartItem/index'
import styles from './CartList.module.scss'

interface Props {
  items: {
    [key: string]: CartItemType
  }
}
const CartList = ({ items }: Props) => {
  return (
    <section className={styles.cartList}>
      {Object.values(items).map(item => (
        <CartItem item={item} key={item.id} />
      ))}
    </section>
  )
}

export default CartList
