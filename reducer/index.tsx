type state = {
  cart: Cart
  avocados: TProduct[]
}

export const initialState: state = {
  cart: {
    items: {},
    amount: 0
  },
  avocados: []
}

export const appReducer = (state: state, action: Action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const item = action.payload

      if (item.id in state.cart.items) {
        return {
          ...state,
          cart: {
            ...state.cart,
            items: {
              ...state.cart.items,
              [item.id]: {
                ...item,
                quantity:
                  state.cart.items[item.id].quantity + action.quantity
              }
            },
            amount: state.cart.amount + action.quantity
          }
        }
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          items: {
            ...state.cart.items,
            [action.payload.id]: {
              ...item,
              quantity: action.quantity
            }
          },
          amount: state.cart.amount + action.quantity
        }
      }
    }

    case 'DELETE_ITEM': {
      const id = action.payload.id

      const newItems = { ...state.cart.items }
      delete newItems[id]

      return {
        ...state,
        cart: {
          ...state.cart,
          items: newItems
        }
      }
    }
    default:
      return state
  }
}
