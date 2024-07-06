import { Hamburger, SEO } from '@/components'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import useForm from '@/hooks/useForm'
import axios from '@/lib/axios'
import { errorEntries } from '@/lib/utils'
import { useEffect } from 'react'

const AddCategory = () => {
  const { data, setData, handleChange, isLoading, setIsLoading, errors, setErrors } = useForm({
    name: "",
    slug: ""
  });

  useEffect(() => {
    if (data.name) {
        const replaceWhiteSpaceWithHyphens = data.name.replaceAll(" ", "-");
        setData(prev => ({
            ...prev,
            slug: replaceWhiteSpaceWithHyphens.toLowerCase()
        }))
    }
  }, [data.name])

  const createNewCategory = async (e) => {
    e.preventDefault();

    try {
      if (Object.values(data).every(value => value !== "")) {
        setIsLoading(true);
        const request = await axios.post('/categories', data);
        const response = request.data;
        console.log(response.message);

        setData({
            ...data,
            name: "",
            slug: ""
        });
      } else {
        setData(prev => ({
          ...prev,
          slug: ""
        }))
      }
    } catch (err) {
        const error = err.response.data;
        console.log(error);
        errorEntries(error, setErrors)
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <SEO 
        title="Add Product"
        description="Create a new product"
      />

      <header className='flex items-center justify-between mb-7'>
        <h1 className='text-xl font-extrabold uppercase tracking-tight'>Add Category</h1>
        <Hamburger />
      </header>

      <form 
        onSubmit={createNewCategory}
        className='w-full bg-white border border-gray-300/65 px-4 py-6 rounded-lg shadow-md shadow-black/5 space-y-3.5'
      >
        <Input 
            name="name"
            label="Category Name"
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
          Add Product Category
        </Button>
      </form>
    </>
  )
}

export default AddCategory