import { Hamburger, SEO } from '@/components'
import { Icons } from '@/components/Icons'
import { Button } from '@/components/ui/Button'
import { Checkbox } from '@/components/ui/Checkbox'
import { FileInput, Input } from '@/components/ui/Input'
import useForm from '@/hooks/useForm'
import { useSku } from '@/hooks/useProducts'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'

const EditSKU = () => {
  const navigate = useNavigate();
  const { skuCode, productID } = useParams();
  const { productSKU } = useSku(skuCode);  
  const [image, setImage] = useState(null);
  const { data, setData, handleChange, isLoading, setIsLoading, errors } = useForm({
    price: 0,
    old_price: 0,
    quantity: 0,
    default: false
  });
  

  useEffect(() => {
    if (productSKU) {
      setData(prev => ({
        ...prev,
        price: productSKU.price,
        old_price: productSKU.old_price ?? productSKU.price,
        quantity: productSKU.quantity,
        default: productSKU.default
      }));
    }
  }, [productSKU])

  const updateSKU = async (e) => {
    e.preventDefault();

    try {
      if (Object.values(data).every(value => value !== "" || value === true) && productID !== "") {
        setIsLoading(true);

        const formData = new FormData();
        const payload = {
          product_id: productID,
          ...data,
        };

        if (image) {
          payload.image = image;
        }

        Object.entries(payload).map(([name, value]) => formData.append(name, value));

        const request = await axios.put(`/skus/${skuCode}/update`, formData);
        const { message } = request.data;
        
        setData(prev => ({
          ...prev,
          price: 0,
          old_price: 0,
          quantity: 0,
          default: false
        }));
        toast(message);
      }
    } catch (err) {
      toast("There was an error updating SKU");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <SEO 
        title="Edit SKU"
        description={`Edit SKU Code ${skuCode}`}
      />

      <header className='flex items-center justify-between mb-7'>
        <div className='flex items-center gap-x-0.5'>
          <Button
            onClick={() => navigate(-1)}
            variant="ghost"
            size="ghost"
          >
            <Icons.arrowLeftS />
          </Button>
          <h1 className='text-xl font-extrabold uppercase tracking-tight'>Edit SKU ({skuCode})</h1>
        </div>
        <Hamburger />
      </header>

      <form 
        onSubmit={updateSKU}
        encType='multipart/form-data'
        className='w-full bg-white border border-gray-300/65 px-4 py-6 rounded-lg shadow-md shadow-black/5 space-y-3'
      >
        <Input 
          type="text"
          label="Price"
          name="price"
          value={data.price}
          onChange={handleChange}
          error={errors.price}
          containerClassName="col-span-full"
        />

        <Input 
          type="text"
          label="Old Price"
          name="old_price"
          value={data.old_price}
          onChange={handleChange}
          error={errors.old_price}
          containerClassName="col-span-full"
        />

        <Input 
          type="text"
          label="Quantity"
          name="quantity"
          value={data.quantity}
          onChange={handleChange}
          error={errors.quantity}
          containerClassName="col-span-full"
        />

        <FileInput 
          name="image"
          file={image}
          onChange={e => setImage(e.target.files[0])}
          label="Change Product SKU Image"
          className="col-span-full"
        />

        <div className='flex items-center gap-x-1.5'>
          <Checkbox 
            name="default"
            id="sku_default"
            checked={data.default}
            onCheckedChange={() => {
              return setData(prev => ({
                ...prev,
                default: !data.default
              }))
            }}
          />
          <label 
            htmlFor="sku_default"
            className="font-medium text-md cursor-pointer select-none"          
          >
            Set as Product SKU Default
          </label>
        </div>

        <Button
          isLoading={isLoading}
          disabled={isLoading}
        >
          Update Order
        </Button>
      </form>
    </>
  )
}

export default EditSKU