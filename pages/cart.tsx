import React, { Dispatch } from 'react'
import { useAppState } from '@components/AppProvider/index'
import CartList from '@components/CartList/index'
const cart = () => {
  const [state]: [state, Dispatch<Action>] = useAppState()
  return <CartList items={state.cart.items} />
}

export default cart
