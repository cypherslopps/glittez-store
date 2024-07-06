import { Hamburger, SubCategoriesTable, SEO } from '@/components'
import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/Button';
import { useSubCategories } from '@/hooks/useCategories';
import { useNavigate } from 'react-router-dom'

const SubCategoriesList = () => {
  const navigate = useNavigate();
  const { subCategories, isSubCategoriesLoading } = useSubCategories();
  
  return (
    <>
      <SEO 
        title="SubCategories"
        description="Product Categories Overview"
      />

      <header className='flex items-center justify-between mb-7'>
        <h1 className='text-xl font-extrabold uppercase tracking-tight'>SubCategories</h1>
        <div className='flex items-center gap-x-1 md:gap-x-0'>
          <Button 
            className="px-3 gap-x-1 font-semibold"
            onClick={() => navigate("/dashboard/subcategory/create")}
          >
              <Icons.plus className='w-4 h-4' />
              Add SubCategory
            </Button>
          <Hamburger />
        </div>
      </header>

      <SubCategoriesTable 
        data={subCategories}
        isLoading={isSubCategoriesLoading}
      />
    </>
  )
}

export default SubCategoriesList