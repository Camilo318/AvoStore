import React from 'react'
import ProductDetail from '@components/ProductDetail/index'
import About from '@components/About/index'
import { Toaster } from 'react-hot-toast'

import { GetStaticProps } from 'next'

export async function getStaticPaths() {
  const res = await fetch('https://avo-store-nine.vercel.app/api/avo')
  const { data }: { data: TProduct[]; length: number } =
    await res.json()
  const paths = data.map(item => ({ params: { id: item.id } }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://avo-store-nine.vercel.app/api/avo/${params.id}`
  )
  const data: TProduct = await res.json()

  return {
    props: {
      data
    }
  }
}

const ProductItem = ({ data: avo }: { data: TProduct }) => {
  return (
    <>
      <Toaster />
      <ProductDetail product={avo} />
      <About product={avo} />
    </>
  )
}

export default ProductItem
