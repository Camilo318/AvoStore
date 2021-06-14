import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'

import { useAppState } from '../AppProvider/index'

const Navbar: React.FC = () => {
  const [state] = useAppState()

  return (
    <header className={styles.navbar}>
      <nav>
        <Link href='/'>
          <a className={styles.navbar__logo}>Mikasa</a>
        </Link>
        <div>
          <Link href='/cart'>
            <a className={styles.navbar__cart}>
              <span>Cart ({state.cart.amount})</span>
            </a>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
