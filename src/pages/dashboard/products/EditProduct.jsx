import { Hamburger, SEO } from '@/components'
import { Icons } from '@/components/Icons'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import useForm from '@/hooks/useForm'
import { useSingleProduct } from '@/hooks/useProducts'
import axios from '@/lib/axios'
import { validateText } from '@/lib/validation'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'

const EditProduct = () => {
  const navigate = useNavigate();
  const { productSlug } = useParams();  
  const { product, isLoading: isProductFetching } = useSingleProduct(productSlug);
  const { data, setData, handleChange, isLoading, setIsLoading, errors, setErrors } = useForm({
    name: "",
    description: ""
  });

  useEffect(() => {
    if (product) {
      setData(prev => ({
        ...prev,
        name: product.name,
        description: product.description
      }))
    }
  }, [product]);

  const updateOrderStatus = async (e) => {
    e.preventDefault();

    try {
      if (Object.values(data).every(value => value !== "")) {
        setIsLoading(true);
        const request = await axios.put(`/products/${productSlug}/update`, data);
        const { message } = request.data;

        setData(prev => ({
          ...prev,
          name: "",
          description: "",
        }));
        toast(message);

        setTimeout(() => {
          navigate(-1);
        }, 1500);
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
        title="Edit Product"
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
          <h1 className='text-xl font-extrabold uppercase tracking-tight'>Edit Order ({productSlug})</h1>
        </div>
        <Hamburger />
      </header>

      <form 
        onSubmit={updateOrderStatus}
        className='w-full bg-white border border-gray-300/65 px-4 py-6 rounded-lg shadow-md shadow-black/5 space-y-3'
      >
        <Input 
          type="text"
          label="Product Name"
          name="name"
          value={data.name}
          onChange={handleChange}
          onBlur={({ target }) => validateText(target.value, data.name, /^[\w]+$/ig, "Fill in a valid value", setErrors)}
          disabled={isProductFetching}
          error={errors.name}
          containerClassName="col-span-full"
        />

        <Input 
          type="text"
          label="Product Description"
          name="description"
          value={data.description}
          onChange={handleChange}
          disabled={isProductFetching}
          error={errors.description}
          containerClassName="col-span-full"
        />

        <Button
          isLoading={isLoading}
          disabled={isLoading}
        >
          Update Product
        </Button>
      </form>
    </>
  )
}

export default EditProduct