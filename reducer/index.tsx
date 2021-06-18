export const initialState: state = {
  cart: {},
  avocados: []
}

export const appReducer = (state: state, action: Action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const item = action.payload
      const { id } = item

      if (item.id in state.cart) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [id]: { ...item, quantity: action.quantity }
          }
        }
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          [id]: { ...item, quantity: action.quantity }
        }
      }
    }

    case 'DELETE_ITEM': {
      const { id } = action.payload

      const newCart = { ...state.cart }
      delete newCart[id]

      return {
        ...state,
        cart: newCart
      }
    }

    case 'EDIT_AMOUNT': {
      const { id } = action.payload
      return {
        ...state,
        cart: {
          ...state.cart,
          [id]: {
            ...state.cart[id],
            quantity: action.quantity
          }
        }
      }
    }
    default:
      return state
  }
}
