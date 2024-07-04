import { Hamburger, SubCategoriesTable, SEO } from '@/components'

const SubCategoriesList = () => {

  return (
    <>
      <SEO 
        title="Product SubCategories"
        description="Product Categories Overview"
      />

      <header className='flex items-center justify-between mb-7'>
        <h1 className='text-xl font-extrabold uppercase tracking-tight'>Products SubCategories</h1>
        <Hamburger />
      </header>

      <SubCategoriesTable 
        data={[]}
        isLoading={false}
      />
    </>
  )
}

export default SubCategoriesList