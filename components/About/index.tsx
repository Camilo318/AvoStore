import React from 'react'

interface AboutProps {
  product: TProduct
}

import styles from './About.module.scss'

const About = ({ product }: AboutProps) => {
  return (
    <section className={styles.about}>
      <h3 className='heading-3'>{product.name}</h3>
      <p>{product.attributes.description}</p>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Attributes</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(product.attributes)
            .slice(1)
            .map((att, i) => (
              <tr key={i}>
                <td>{att}</td>
                <td>{product.attributes[att]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  )
}

export default About
