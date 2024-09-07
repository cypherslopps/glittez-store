import { Hamburger, SEO } from '@/components'
import { Button } from '@/components/ui/Button'
import { FileInput, Input, Select, Textarea } from '@/components/ui/Input'
import { useCategories, useSubCategories } from '@/hooks/useCategories'
import useForm from '@/hooks/useForm'
import axios from '@/lib/axios'
import { errorEntries } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const { data, setData, handleChange, isLoading, setIsLoading, errors, setErrors } = useForm({
    category: "",
    subCategory: "",
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    size: "",
    color: ""
  });
  const { productCategories, isProductsCategoriesLoading } = useCategories();
  const { subCategories, isSubCategoriesLoading } = useSubCategories();
  const [allCategories, setAllCategories] = useState([]);
  const [allSubCategories, seAllSubCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");

  useEffect(() => {
    if (productCategories.length) {
      const categories = productCategories.map(category => category.name);
      setAllCategories(categories);
    }
  }, [productCategories])

  useEffect(() => {
    if (subCategories.length) {
      const subCategoriesData = subCategories.map(sbc => sbc.name);
      seAllSubCategories(subCategoriesData);
    }
  }, [subCategories])

  useEffect(() => {
    if (data.category) {
      const category = productCategories.filter(c => c.name.toLowerCase() === data.category.toLowerCase())[0];
      setCategoryId(category.id);
    }
  }, [data.category]);

  useEffect(() => {
    if (data.subCategory) {
      const subcategory = subCategories.filter(sc => sc.name.toLowerCase() === data.subCategory.toLowerCase())[0];
      setSubCategoryId(subcategory.id);
    }
  }, [data.subCategory]);

  const createNewProduct = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      const payload = {
        name: data.name,
        category_id: categoryId,
        subcategory_id: subCategoryId,
        description: data.description,
        price: parseFloat(data.price),
        quantity: data.quantity,
        color: data.color,
        size: data.size,
        image
      };
      Object.entries(payload).map(([name, value]) => formData.append(name, value));

      if (Object.values(payload).every(value => value !== "")) {
        setIsLoading(true);
        const request = await axios.post('/products', formData);
        const { message } = request.data;

        setData(prev => ({
          ...prev,
          category: "",
          subCategory: "",
          name: "",
          description: "",
          price: 0,
          quantity: 0,
          size: "",
          color: ""
        }));
        setCategoryId("");
        setSubCategoryId("");
        toast(message);
      }
    } catch (err) {
      const error = err.response.data;
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
        <h1 className='text-xl font-extrabold uppercase tracking-tight'>Add Product</h1>
        <Hamburger />
      </header>

      <form 
        onSubmit={createNewProduct}
        className='w-full bg-white border border-gray-300/65 px-4 py-6 rounded-lg shadow-md shadow-black/5 space-y-3'
      >
        <div className='grid grid-cols-2 gap-4'>
          <Select 
            name="category"
            label="Category"
            options={allCategories}
            value={data.category}
            disabled={isProductsCategoriesLoading}
            onChange={handleChange}
            error={errors.category}
          />
          
          <Select 
            name="subCategory"
            label="Subcategory"
            options={allSubCategories}
            disabled={isSubCategoriesLoading}
            value={data.subCategory}
            onChange={handleChange}
            error={errors.subCategory}
          />

          <Input 
            type="text"
            label="Product Name"
            name="name"
            value={data.name}
            onChange={handleChange}
            error={errors.name}
            containerClassName="col-span-full"
          />

          <Textarea 
            type="text"
            label="Product Description"
            name="description"
            value={data.description}
            onChange={handleChange}
            error={errors.description}
            containerClassName="col-span-full"
          />

          <FileInput 
              name="image"
              file={image}
              onChange={e => setImage(e.target.files[0])}
              label="Upload Product Image"
              className="col-span-full"
            />
          
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

        <Input 
          type="text"
          name="color"
          label="Color"
          value={data.color}
          onChange={handleChange}
          error={errors.color}
        />
      </div>

        <Button
          isLoading={isLoading}
          disabled={isLoading}
        >
          Create Product
        </Button>
      </form>
    </>
  )
}

export default AddProduct