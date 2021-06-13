import React, { ReactChildren } from 'react'
import styles from './Heading.module.scss'

interface HeadingProps {
  children: string
  subtitle: string
}

const Heading = ({ children, subtitle }: HeadingProps) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}>{children}</h1>
      <div className={styles.header__subtitle}>{subtitle}</div>
    </div>
  )
}

export default Heading
