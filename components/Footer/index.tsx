import React from 'react'
import styles from './Footer.module.scss'

const Footer: React.FC = ({ children }) => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.copy}>
          <h4>Camilo Perilla &copy; {new Date().getFullYear()}</h4>
          <a href=''>More stuff</a>
        </div>

        <div className={styles.mikasa}>
          <h4>Mikasa Ackerman</h4>

          <img src='/images/happy-avocado.svg' alt='happy avocado' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
