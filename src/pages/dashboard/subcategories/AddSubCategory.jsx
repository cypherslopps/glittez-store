import { Hamburger, SEO } from '@/components'
import { Button } from '@/components/ui/Button'
import { Input, Select } from '@/components/ui/Input'
import { useCategories } from '@/hooks/useCategories'
import useForm from '@/hooks/useForm'
import axios from '@/lib/axios'
import { errorEntries } from '@/lib/utils'
import { useEffect, useState } from 'react'

const AddSubCategory = () => {
  const { productCategories, isProductsCategoriesLoading } = useCategories();
  const [categoryId, setCategoryId] = useState(null);
  const { data, setData, handleChange, isLoading, setIsLoading, errors, setErrors } = useForm({
    category: "",
    name: "",
    slug: ""
  });
  const [allCategories, setAllCategories] = useState([]);
  
  useEffect(() => {
    if (productCategories.length) {
      const categories = productCategories.map(category => category.name);
      setAllCategories(categories);
    }
  }, [productCategories])

  useEffect(() => {
    if (data.name) {
        const replaceWhiteSpaceWithHyphens = data.name.replaceAll(" ", "-");
        setData(prev => ({
            ...prev,
            slug: replaceWhiteSpaceWithHyphens.toLowerCase()
        }))
    }
  }, [data.name])

  const createNewSubCategory = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        category_id: categoryId,
        name: data.name,
        slug: data.slug
      }
      if (Object.values(payload).every(value => value !== "")) {
        setIsLoading(true);
        const request = await axios.post('/subcategories', payload);
        const response = request.data;
        console.log(response.message);
        
        setData({
            ...data,
            category: "",
            name: "",
            slug: ""
        });
        setCategoryId("");
      } else {
        setData(prev => ({
          ...prev,
          slug: ""
        }))
      }
    } catch (err) {
        const error = err.response.data;
        errorEntries(error, setErrors)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (data.category) {
      const category = productCategories.filter(c => c.name.toLowerCase() === data.category.toLowerCase())[0];
      setCategoryId(category.id);
    }
  }, [data.category])

  return (
    <>
      <SEO 
        title="Add Product"
        description="Create a new product"
      />

      <header className='flex items-center justify-between mb-7'>
        <h1 className='text-xl font-extrabold uppercase tracking-tight'>Add SubCategory</h1>
        <Hamburger />
      </header>

      <form 
        onSubmit={createNewSubCategory}
        className='w-full bg-white border border-gray-300/65 px-4 py-6 rounded-lg shadow-md shadow-black/5 space-y-3.5'
      >
        <Select 
            name="category"
            label="Category"
            optionLabel=""
            options={allCategories}
            disabled={isProductsCategoriesLoading}
            value={data.category}
            onChange={handleChange}
            error={errors.category}
          />

        <Input 
            name="name"
            label="SubCategory Name"
            value={data.name}
            onChange={handleChange}
            error={errors.name}
        />

        <Input 
            name="slug"
            label="Slug"
            value={data.slug}
            disabled={true}
            onChange={handleChange}
            error={errors.slug}
        />

        <Button
          isLoading={isLoading}
          disabled={isLoading}
        >
          Add Product SubCategory
        </Button>
      </form>
    </>
  )
}

export default AddSubCategory