import { useEffect } from 'react'
import { Hamburger, SEO } from '@/components'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import useForm from '@/hooks/useForm'
import axios from '@/lib/axios'
import { useParams } from 'react-router-dom'

const EditCategory = () => {
  const { slug } = useParams();  
  const { data, setData, handleChange, isLoading, setIsLoading, errors } = useForm({
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
    } else {
      setData(prev => ({
        ...prev,
        slug: ""
      }))
    }
  }, [data.name])

  const updateCategory = async (e) => {
    e.preventDefault();

    try {
      if (Object.values(data).every(value => value !== "")) {
        setIsLoading(true);
        const request = await axios.put(`/categories/${slug}/update`, data);
        const response = request.data;
        console.log(response.message);

        setData({
            ...data,
            name: "",
            slug: ""
        });
      }
    } catch (err) {
      console.log(err);
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
        <h1 className='text-xl font-extrabold uppercase tracking-tight'>Edit Category ({slug})</h1>
        <Hamburger />
      </header>

      <form 
        onSubmit={updateCategory}
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
            disabled={true}
            value={data.slug}
            error={errors.slug}
        />

        <Button
          isLoading={isLoading}
          disabled={isLoading}
        >
          Update Category
        </Button>
      </form>
    </>
  )
}

export default EditCategory