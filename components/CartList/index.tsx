import React from 'react'

interface Props {
  items: Cart
}
const CartList = ({ items }: Props) => {
  return (
    <section>
      {Object.values(items.items).map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <span>x{item.quantity}</span>
        </div>
      ))}
    </section>
  )
}

export default CartList
