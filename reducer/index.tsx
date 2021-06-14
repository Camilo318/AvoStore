type state = {
  cart: Cart
  avocados: TProduct[]
}

export const initialState: state = {
  cart: {
    items: {},
    amount: 18
  },
  avocados: []
}

export const appReducer = (state: state, action: Action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: action.payload,
          amount: state.cart.amount + action.quantity
        }
      }
    }
    default:
      return state
  }
}
