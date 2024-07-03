import { ProductCollection, SEO } from "@/components"
import { useProducts, useSingleProduct } from "@/hooks/useProducts";
import { useParams } from "react-router-dom"
import Product1 from "../../assets/images/product-1.jpg";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/Icons";
import { useStore } from "@/providers/StoreProvider";

const ProductDescription = () => {
  const { productSlug } = useParams();
  const { product } = useSingleProduct(productSlug);
  const { products } = useProducts();
  const { addToCart } = useStore();
  const colors = ["red", "blue", "brown"];
  const sizes = ['xl', 'xs', 'lg', 'sm'];
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [activeColor, setActiveColor] = useState(colors[0]);

  return (
    <>
      <SEO 
        title={product.title}
        description=""
      />

      <section className="grid grid-cols-2">
        <figure>
          <img 
            src={Product1}
            alt={productSlug}
            className="w-full h-full overflow-hidden"
          />
        </figure>

        <div>
          <header className="flex flex-col space-y-2">
            <div className="-space-y-0.5">
              <h1 className="font-extrabold text-2xl">{product.title}</h1>
              <span className="font-medium text-lg text-black/70">${product.price}</span>
            </div>
            <p className="text-gray-800/90 text-[.98rem] max-w-[56ch] leading-[1.5rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo labore minus nobis cupiditate repellendus ipsam sunt officiis inventore, dolorem distinctio rerum, omnis possimus.</p>
          </header>

          {/* Filters */}
          <div className="mt-4 space-y-4">
            <div className="space-y-[0.3rem]">
              <h4 className="text-base font-semibold">Colors</h4>

              <ul className="flex items-center gap-x-2">
                {colors.map(color => (
                  <>
                    {activeColor === color ? (
                      <li 
                        key={color}
                        className="w-6 h-6 border border-gray-700 rounded-full flex items-center justify-center hover:cursor-pointer group"
                      >
                        <div 
                          className="w-[75%] h-[75%] rounded-full transition-all duration-200 group-hover:scale-105" 
                          style={{ background: color }}
                        />
                      </li>
                    ) : (
                      <li 
                        key={color} 
                        className="w-6 h-6 rounded-full hover:cursor-pointer"
                        style={{ background: color }}
                        onClick={() => setActiveColor(color)}
                      />
                    )}
                  </>
                ))}
              </ul>
            </div>

            <div className="space-y-[0.3rem]">
              <h4 className="text-base font-semibold">Size</h4>

              <ul className="flex items-center gap-x-2">
                {sizes.map(size => (
                  <li 
                    key={size}
                    className={`w-12 px-2.5 py-[0.1rem] text-center border border-gray-700 rounded-md text-sm font-medium ${activeSize === size ? "bg-gray-900 text-white" : "hover:bg-gray-900 hover:text-white"} transition-colors duration-150 hover:cursor-pointer`}
                    onClick={() => setActiveSize(size)}
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <footer className="grid grid-cols-[1fr_max-content] gap-x-1.5 mt-5">
              <Button 
                variant="none" 
                className="bg-black text-white text-[.96rem] h-max py-2"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </Button>
              <Button  
                variant="outline"
                className="h-max px-[0.6rem] py-2 transition-colors duration-150 hover:bg-black hover:text-white"
              >
                <Icons.heartFill className="transition-colors duration-100" />
              </Button>
          </footer>
        </div>
      </section>

      <ProductCollection 
        title="Similar Products"
        products={products}
      />
    </>
  )
}

export default ProductDescription