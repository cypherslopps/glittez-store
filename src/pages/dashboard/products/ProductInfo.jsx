import { Hamburger, SEO, SKUsTable } from '@/components';
import { useNavigate, useParams } from 'react-router-dom'
import ProductImage from "../../../assets/images/product-1.jpg";
import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/Icons';
import { useSingleProduct, useSkus } from '@/hooks/useProducts';

const ProductInfo = () => {
  const navigate = useNavigate();
  const { productSlug } = useParams();
  const { product, isLoading: isProductFetching } = useSingleProduct(productSlug);
  const { productSKUs, isProductSkusLoading } = useSkus(productSlug);

  return (
    <>
      <SEO 
        title={`Product ${productSlug} Overview`}
        description="Product overview"
      />

      <section className='mb-7 space-y-6'>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-extrabold'>Product {product?.id}</h2>
          <div className='flex items-center gap-x-1'>
            <Button 
              variant="black"
              className="gap-x-1 font-medium"
              disabled={isProductFetching}
              onClick={() => navigate(`/dashboard/products/skus/${product.id}/create`)}
            >
              <Icons.plus className='w-[1.02rem] h-[1.02rem]' />
              Add SKU
            </Button>
            <Button>Delete Product</Button>
            <Hamburger />
          </div>
        </div>
        
        <div className='grid grid-cols-[40%_60%] gap-x-3'>
          <figure className='h-[70vh] bg-gray-100 border border-gray-300/20 rounded-md select-none'>
            <img 
              src={ProductImage}
              alt={`Product ${product?.name}`}
              className='w-full h-full object-cover'
            />
          </figure>

          <div className=''>
            <p className='text-[1.02rem] text-gray-700'>{product?.description}</p>

            <div className='mt-3 space-y-1'> 
              <h5 className='font-bold'>Colors</h5>
              <ul className='flex items-center gap-x-1 pl-1'>
                {["red", "blue"].map(color => (
                  <li 
                    key={color} 
                    className='w-5 h-5 rounded-full'
                    style={{
                      background: color
                    }}  
                  />
                ))}
              </ul>
            </div>

            <div className='mt-3 space-y-1'> 
              <h5 className='font-bold'>Sizes</h5>
              <ul className='flex items-center gap-x-1 pl-1'>
                {["xl", "lg", "xxl"].map(size => (
                  <li 
                    key={size} 
                    className='w-5 h-5 rounded-full uppercase font-medium text-md'
                  >{size}</li>
                ))}
              </ul>
            </div>

            <div className='mt-3 flex items-center gap-x-1'>
              <span className='text-base'>Price:</span>
              <span className='text-base font-nunito font-semibold'>${233}</span>
            </div>
          </div>
        </div>
      </section>

      <section className='space-y-2'>
        <h3 className='text-lg font-extrabold'>Product SKUs</h3>

        <SKUsTable 
          data={productSKUs}
          isLoading={isProductSkusLoading}
        />
      </section>
    </>
  )
}

export default ProductInfo