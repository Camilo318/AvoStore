import ProductList from '@components/ProductList/index'
import Heading from '@components/Heading/index'

export async function getStaticProps() {
  const res = await fetch('https://avo-store-nine.vercel.app/api/avo')
  const { data } = await res.json()

  return {
    props: {
      data
    }
  }
}

function HomePage({ data: list }: { data: TProduct[] }) {
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
