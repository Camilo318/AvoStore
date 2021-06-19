import React from 'react'
import { useCart } from '@components/AppProvider/index'
import CartList from '@components/CartList/index'
const cart = () => {
  const { list } = useCart()
  return <CartList items={list} />
}

export default cart
