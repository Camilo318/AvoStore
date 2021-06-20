import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ProductDetail from '@components/ProductDetail/index'
import About from '@components/About/index'
import { Toaster } from 'react-hot-toast'

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
    <div
      style={{
        minHeight: 'calc(100vh - 107px - 109px)',
        width: 'clamp(288px, 90%, 900px)',
        margin: '0 auto'
      }}>
      <h2>Loading avocado's info...</h2>
    </div>
  ) : (
    <>
      <Toaster />
      <ProductDetail product={avo} />
      <About product={avo} />
    </>
  )
}

export default ProductItem
