import React, { createContext, useContext, useReducer } from 'react'

const AppContext = createContext(undefined) //Context object to pass data through the component tree

import { appReducer, initialState } from '../../reducer/index'

//Custom hook to subscribe to the context changes
export const useAppState = () => useContext(AppContext)

const AppProvider: React.FC = ({ children }) => {
  let contextValue = useReducer(appReducer, initialState)
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
