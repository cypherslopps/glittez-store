import { Hamburger, ProductTable, SEO } from '@/components'
import { Icons } from '@/components/Icons'
import { Button } from '@/components/ui/Button'
import { useProducts } from '@/hooks/useProducts'
import { useNavigate } from 'react-router-dom'

const ProductsList = () => {
  const navigate = useNavigate();
  const { products, isLoading } = useProducts();

  return (
    <>
      <SEO 
        title="Products"
        description="Products Overview"
      />

      <header className='flex items-center justify-between mb-7'>
        <h1 className='text-xl font-extrabold uppercase tracking-tight'>Products</h1>
        <div className='flex items-center gap-x-1 md:gap-x-0'>
          <Button 
            className="px-3 gap-x-1 font-semibold"
            onClick={() => navigate("/dashboard/products/create")}
          >
              <Icons.plus className='w-4 h-4' />
              Add Product
            </Button>
          <Hamburger />
        </div>
      </header>

      <ProductTable 
        data={products}
        isLoading={isLoading}
      />
    </>
  )
}

export default ProductsList