import React from 'react'
import { useAppState } from '@components/AppProvider/index'
import CartList from '@components/CartList/index'
const cart = () => {
  const [state, dispatch] = useAppState()
  const { amount, items } = state.cart
  return <CartList items={state.cart} />
}

export default cart
