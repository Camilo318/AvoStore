import React from 'react'
import CartItem from '../CartItem/index'
import styles from './CartList.module.scss'
import Message from '@components/Message'

interface Props {
  items: CartItemType[]
}
const CartList = ({ items }: Props) => {
  return (
    <section className={styles.cartList}>
      {items.length > 0 ? (
        items.map(item => <CartItem item={item} key={item.id} />)
      ) : (
        <Message
          header='Your cart is empty'
          desc='When you add avocados, you will see them here'
          type='warning'
        />
      )}
    </section>
  )
}

export default CartList
