import { Hamburger, CategoriesTable, SEO } from '@/components'

const CategoriesList = () => {

  return (
    <>
      <SEO 
        title="Categories"
        description="Product Categories Overview"
      />

      <header className='flex items-center justify-between mb-7'>
        <h1 className='text-xl font-extrabold uppercase tracking-tight'>Categories</h1>
        <Hamburger />
      </header>

      <CategoriesTable 
        data={[]}
        isLoading={false}
      />
    </>
  )
}

export default CategoriesList