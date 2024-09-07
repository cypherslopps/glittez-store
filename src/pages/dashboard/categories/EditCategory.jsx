import { useEffect } from 'react'
import { Hamburger, SEO } from '@/components'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import useForm from '@/hooks/useForm'
import axios from '@/lib/axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSingleCategory } from '@/hooks/useCategories'
import { toast } from 'sonner'
import { Icons } from '@/components/Icons'

const EditCategory = () => {
  const navigate = useNavigate();
  const { slug } = useParams();  
  const { category, isCategoryLoading } = useSingleCategory(slug);
  const { data, setData, handleChange, isLoading, setIsLoading, errors } = useForm({
    name: "",
    slug: ""
  });

  useEffect(() => {
    if (category) {
      setData(prev => ({
        ...prev,
        name: category.name,
        slug: category.slug
      }))
    }
  }, [category])

  useEffect(() => {
    if (data.name) {
        const replaceWhiteSpaceWithHyphens = data.name?.trim()?.replaceAll(" ", "-");
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
        const { message } = request.data;

        setData(prev => ({
          ...prev,
          name: "",
          slug: "",
        }));
        toast(message);

        setTimeout(() => {
          navigate(-1);
        }, 1500);
      }
    } catch (err) {
      toast("Error updating category");
      navigate(-1);
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
        <div className='flex items-center gap-x-1'>
          <Button
            variant="ghost"
            size="ghost"
            onClick={() => navigate(-1)}
          >
            <Icons.arrowLeftS />
          </Button>

          <h1 className='text-xl font-extrabold uppercase tracking-tight'>Edit Category ({slug})</h1>
        </div>
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
          disabled={isCategoryLoading}
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