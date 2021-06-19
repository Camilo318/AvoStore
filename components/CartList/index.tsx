import React from 'react'
import CartItem from '../CartItem/index'
import styles from './CartList.module.scss'

interface Props {
  items: CartItemType[]
}
const CartList = ({ items }: Props) => {
  return (
    <section className={styles.cartList}>
      {items.map(item => (
        <CartItem item={item} key={item.id} />
      ))}
    </section>
  )
}

export default CartList
