import { Hamburger, SEO } from '@/components'
import { Button } from '@/components/ui/Button'
import { FileInput, Input, Select } from '@/components/ui/Input'
import useForm from '@/hooks/useForm'
import axios from '@/lib/axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const AddSKU = () => {
  const { productId } = useParams();
  const [image, setImage] = useState(null);
  const { data, handleChange, isLoading, setIsLoading, errors } = useForm({
    quantity: 0,
    size: "",
    color: ""
  });

  const createProductSKU = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      const payload = {
        name: data.name,
        category_id: 2,
        subcategory_id: 4,
        description: data.description,
        price: data.price,
        quantity: data.quantity,
        color: data.color,
        size: data.size,
        image
      };
      Object.entries(payload).map(([name, value]) => formData.append(name, value));

      if (Object.values(payload).every(value => value !== "")) {
        console.log("Submitting");
        setIsLoading(true);
        const request = await axios.post('/products', formData);
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
        title="Add Product SKU"
        description="Create a new product SKU"
      />

      <header className='flex items-center justify-between mb-7'>
        <h1 className='text-xl font-extrabold uppercase tracking-tight'>Add Product ({productId}) SKU</h1>
        <Hamburger />
      </header>

      <form 
        onSubmit={createProductSKU}
        className='w-full bg-white border border-gray-300/65 px-4 py-6 rounded-lg shadow-md shadow-black/5 space-y-3'
      >
        <div className='grid grid-cols-2 gap-4'>
            <Input 
                type="number"
                label="Product Price"
                name="price"
                value={data.price}
                onChange={handleChange}
                error={errors.price}
            />

            <Input 
                type="number"
                label="Product Quantity"
                name="quantity"
                value={data.quantity}
                onChange={handleChange}
                error={errors.quantity}
            />
            
            <Select 
                name="size"
                label="Product Size"
                options={["XS", "SM", "LG", "XL", "XXL"]}
                value={data.size}
                onChange={handleChange}
                error={errors.size}
            />

            <div className='flex flex-col gap-x-0.5'>
                <span className='text-[.9rem]'>Product Color</span>
                <input 
                type="color"
                name="color"
                value={data.color}
                onChange={handleChange}
                className="w-full h-full"
                />
                {errors.size && (
                    <span className="text-sm font-medium text-rose-500">{errors.size}</span>
                )}
            </div>

          <FileInput 
              name="image"
              file={image}
              onChange={e => setImage(e.target.files[0])}
              label="Upload Product Image"
              className="col-span-full"
            />
        </div>

        <Button
          isLoading={isLoading}
          disabled={isLoading}
        >
          Create Product SKU
        </Button>
      </form>
    </>
  )
}

export default AddSKU