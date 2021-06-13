import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'

const Navbar: React.FC = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <Link href='/'>
          <a className={styles.navbar__logo}>Mikasa</a>
        </Link>
        <div>
          <Link href='/cart'>
            <a className={styles.navbar__cart}>
              {/* <img src="" alt="" /> */}
              <span>Cart (0)</span>
            </a>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
