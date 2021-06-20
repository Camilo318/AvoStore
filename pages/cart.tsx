import React from 'react'
import { useCart } from '@components/AppProvider/index'
import CartList from '@components/CartList/index'
import { Toaster } from 'react-hot-toast'

const cart = () => {
  const { list } = useCart()
  return (
    <>
      <Toaster />
      <CartList items={list} />
    </>
  )
}

export default cart
