import React, {
  createContext,
  useContext,
  useReducer,
  Dispatch
} from 'react'

//Context object to pass data through the component tree
const AppContext = createContext(undefined)

import { appReducer, initialState } from '../../reducer/index'
import toast from 'react-hot-toast'

//Custom hook to subscribe to the context changes
const useAppState = () => useContext(AppContext)

const getCartAmount = (sum: number, item: CartItemType) =>
  sum + item.quantity

const getCartTotal = (sum: number, item: CartItemType) =>
  sum + item.price * item.quantity

export const useCart = () => {
  const [state, dispatch]: [state, Dispatch<Action>] = useAppState()
  const list: CartItemType[] = Object.values(state.cart)
  const amount: number = list.reduce(getCartAmount, 0)
  const total: number = list.reduce(getCartTotal, 0)

  return {
    list,
    amount,
    total,
    dispatch
  }
}

export const useCartActions = () => {
  const [state, dispatch]: [state, Dispatch<Action>] = useAppState()

  const addItem = (product: TProduct, quantity: number) => {
    if (product.id in state.cart) {
      if (quantity === 0) {
        deleteItem(product)
        return
      }
      dispatch({
        type: 'EDIT_AMOUNT',
        payload: product,
        quantity: quantity
      })

      toast.success('Avo amount updated', {
        position: 'top-center',
        icon: '⚠️',
        style: {
          fontSize: '1.3rem',
          padding: '1rem',
          background: '#333',
          color: '#fff'
        }
      })
    } else {
      dispatch({
        type: 'ADD_ITEM',
        payload: product,
        quantity: quantity
      })

      toast.success('Avocado added', {
        position: 'top-center',
        style: {
          fontSize: '1.3rem',
          padding: '1rem',
          background: '#333',
          color: '#fff'
        }
      })
    }
  }

  const deleteItem = (product: TProduct) => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: product
    })

    toast.success('Avo deleted', {
      position: 'top-center',
      icon: '🗑',
      style: {
        fontSize: '1.3rem',
        padding: '1rem',
        background: '#333',
        color: '#fff'
      }
    })
  }

  return {
    addItem,
    deleteItem
  }
}

const AppProvider: React.FC = ({ children }) => {
  let contextValue: [state, Dispatch<Action>] = useReducer(
    appReducer,
    initialState
  )
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
