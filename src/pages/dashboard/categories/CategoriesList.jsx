import { Hamburger, CategoriesTable, SEO } from '@/components'
import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/Icons';
import { useNavigate } from 'react-router-dom'
import { useCategories } from '@/hooks/useCategories';

const CategoriesList = () => {
  const navigate = useNavigate();
  const { productCategories, isProductsCategoriesLoading } = useCategories();

  return (
    <>
      <SEO 
        title="Categories"
        description="Product Categories Overview"
      />

      <header className='flex items-center justify-between mb-7'>
        <h1 className='text-xl font-extrabold uppercase tracking-tight'>Categories</h1>
        <div className='flex items-center gap-x-1 md:gap-x-0'>
          <Button 
            className="px-3 gap-x-1 font-semibold"
            onClick={() => navigate("/dashboard/categories/create")}
          >
              <Icons.plus className='w-4 h-4' />
              Add Category
            </Button>
          <Hamburger />
        </div>
      </header>

      <CategoriesTable 
        data={productCategories}
        isLoading={isProductsCategoriesLoading}
      />
    </>
  )
}

export default CategoriesList