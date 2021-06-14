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
  items: {
    [key: string]: TProduct
  }
  amount: number
}

interface Action {
  type: string
  payload: TProduct
  quantity?: number
}
