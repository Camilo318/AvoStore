import React from 'react'
import styles from './Gutter.module.scss'

const Gutter: React.FC = ({ children }) => {
  return <div className={styles.gutter}>{children}</div>
}

export default Gutter
