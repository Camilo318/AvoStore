import { useState, useEffect } from 'react'
import ProductList from '@components/ProductList/index'
import Heading from '@components/Heading/index'

function HomePage() {
  const [list, setList] = useState<TProduct[]>([])

  useEffect(() => {
    async function getAvos() {
      const res = await fetch('/api/avo')
      const { data } = await res.json()
      setList(data)
    }

    getAvos()
  }, [])

  return (
    <>
      <Heading subtitle='Best avos on paradis'>
        Mikasa's 🥑 Avos
      </Heading>
      <ProductList products={list} />
    </>
  )
}

export default HomePage
