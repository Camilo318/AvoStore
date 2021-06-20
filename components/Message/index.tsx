import React from 'react'

interface Props {
  header: string
  desc: string
  type?: 'success' | 'error' | 'info' | 'warning'
}

import styles from './Message.module.scss'

const Message = ({ header, desc, type = 'success' }: Props) => {
  return (
    <section
      className={`${styles.message} ${styles[`message__${type}`]}`}>
      <div className={styles.header}>{header}</div>
      <p className={styles.desc}>{desc}</p>
    </section>
  )
}

export default Message
