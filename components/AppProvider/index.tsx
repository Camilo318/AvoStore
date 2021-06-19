import React, {
  createContext,
  useContext,
  useReducer,
  Dispatch
} from 'react'

//Context object to pass data through the component tree
const AppContext = createContext(undefined)

import { appReducer, initialState } from '../../reducer/index'

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
