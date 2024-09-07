import { Hamburger, SEO } from '@/components'
import { Icons } from '@/components/Icons'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useSingleSubCategory } from '@/hooks/useCategories'
import useForm from '@/hooks/useForm'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'

const EditCategory = () => {
  const navigate = useNavigate();
  const { slug } = useParams();  
  const { productSubCategories, isProductsSubCategoriesLoading } = useSingleSubCategory(slug);
  const { data, setData, handleChange, isLoading, setIsLoading, errors } = useForm({
    name: "",
    slug: ""
  });

  useEffect(() => {
    if (productSubCategories) {
      setData(prev => ({
        ...prev,
        name: productSubCategories.name,
        slug: productSubCategories.slug
      }))
    }
  }, [productSubCategories])

  useEffect(() => {
    if (data.name) {
        const replaceWhiteSpaceWithHyphens = data.name.trim().replaceAll(" ", "-");
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

  const updateSubCategory = async (e) => {
    e.preventDefault();

    try {
      if (Object.values(data).every(value => value !== "")) {
        setIsLoading(true);
        const request = await axios.put(`/subcategories/${slug}`, {
          ...data,
          category_id: productSubCategories.category_id
        });
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
      toast("Error updating subcategory");
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

          <h1 className='text-xl font-extrabold uppercase tracking-tight'>Edit SubCategory ({slug})</h1>
        </div>
        <Hamburger />
      </header>

      <form 
        onSubmit={updateSubCategory}
        className='w-full bg-white border border-gray-300/65 px-4 py-6 rounded-lg shadow-md shadow-black/5 space-y-3'
      >
        <Input 
          name="name"
          label="Subcategory Name"
          value={data.name}
          disabled={isProductsSubCategoriesLoading}
          onChange={handleChange}
          error={errors.name}
        />

        <Input 
          name="slug"
          label="Subcategory slug"
          value={data.slug}
          disabled={isProductsSubCategoriesLoading}
          onChange={handleChange}
          error={errors.slug}
        />

        <Button
          isLoading={isLoading}
          disabled={isLoading}
        >
          Update SubCategory
        </Button>
      </form>
    </>
  )
}

export default EditCategory