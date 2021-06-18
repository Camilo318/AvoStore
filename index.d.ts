type Url = string

type Json = string | number

type TProductId = string

interface TProductAttributes {
  description: string
  shape: string
  hardiness: string
  taste: string
}

type TProduct = {
  name: string
  id: TProductId
  sku: string
  price: number
  image: Url
  attributes: TProductAttributes
}

interface Cart {
  [key: string]: CartItemType
}
type CartItemType = TProduct & { quantity: number }

interface Action {
  type: 'ADD_ITEM' | 'DELETE_ITEM' | 'EDIT_AMOUNT'
  payload: TProduct
  quantity?: number
}

type state = {
  cart: Cart
  avocados: TProduct[]
}
