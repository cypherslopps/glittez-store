import { Hamburger, SEO } from '@/components'
import { Button } from '@/components/ui/Button'
import { Select } from '@/components/ui/Input'
import useForm from '@/hooks/useForm'
import axios from '@/lib/axios'
import { useParams } from 'react-router-dom'

const EditCategory = () => {
  const { categoryID } = useParams();  
  const { data, handleChange, isLoading, setIsLoading, errors } = useForm({
    category: "",
  });

  const updateCategory = async (e) => {
    e.preventDefault();

    try {
      if (Object.values(data).every(value => value !== "")) {
        setIsLoading(true);
        const request = await axios.post('/products', data);
        const response = request.data;
        console.log(response);
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
        <h1 className='text-xl font-extrabold uppercase tracking-tight'>Edit Category ({categoryID})</h1>
        <Hamburger />
      </header>

      <form 
        onSubmit={updateCategory}
        className='w-full bg-white border border-gray-300/65 px-4 py-6 rounded-lg shadow-md shadow-black/5 space-y-3'
      >
        <Select 
            name="category"
            label="Category"
            options={["Bags", "Gadgets"]}
            value={data.category}
            onChange={handleChange}
            error={errors.category}
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