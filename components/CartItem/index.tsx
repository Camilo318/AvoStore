import React, { Dispatch } from 'react'

interface Props {
  item: CartItemType
}

import styles from './CartItem.module.scss'
import { useAppState } from '@components/AppProvider'

const CartItem = ({ item }: Props) => {
  const [state, dispatch]: [state, Dispatch<Action>] = useAppState()

  function handleChange(e: any) {
    const amount = e.target.value
    dispatch({ type: 'ADD_ITEM', payload: item, quantity: +amount })
  }
  return (
    <div className={styles.cartItem}>
      <figure>
        <img src='/images/avocado.svg' alt={item.name} />
      </figure>
      <div className={styles.cartItem__info}>
        <h3 className='heading-3'>{item.name}</h3>
        <p>
          {item.quantity} X {item.price}
        </p>
        <p>You'll love this avocado</p>
        <div className='amount-selector'>
          <select
            name='amount'
            id='amount'
            onChange={handleChange}
            value={item.quantity}>
            <option value='0'>0 (Delete)</option>
            {new Array(10).fill(0).map((item, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default CartItem
