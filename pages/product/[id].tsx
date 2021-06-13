import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ProductDetail from '@components/ProductDetail/index'
import About from '@components/About/index'

const ProductItem = () => {
  const router = useRouter()
  const { id } = router.query
  const [avo, setAvo] = useState<TProduct>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function getAvo() {
      const res = await fetch(`/api/avo/${id}`)
      const data = await res.json()

      setAvo(data)
      setLoading(false)
    }

    getAvo()
  }, [])

  return loading ? (
    <h2>Loading avocado's info...</h2>
  ) : (
    <>
      <ProductDetail product={avo} />
      <About product={avo} />
    </>
  )
}

export default ProductItem
