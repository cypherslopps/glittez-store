import { ProductCollection, SEO } from '@/components'
import { useProducts } from '@/hooks/useProducts'

const Home = () => {
  const { products } = useProducts();

  return (
    <>
      <SEO 
        title="Glittez"
        description="Your destination for your unlimited needs"
      />

      <section className='h-[80vh] rounded-lg p-5 bg-gray-200/60'>Hero</section>

      <ProductCollection 
        title="Recommended products"
        products={products} 
      />
    </>
  )
}

export default Home