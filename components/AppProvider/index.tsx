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
export const useAppState = () => useContext(AppContext)

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
