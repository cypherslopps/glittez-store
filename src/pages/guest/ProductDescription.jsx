import { ProductCollection, SEO } from "@/components"
import { useProducts, useSingleProduct } from "@/hooks/useProducts";
import { useParams } from "react-router-dom"
import Product1 from "../../assets/images/product-1.jpg";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useStore } from "@/providers/StoreProvider";
import { Skeleton } from "@/components/ui/Skeleton";

const ProductDescription = () => {
  const { productSlug } = useParams();
  const { product, isLoading } = useSingleProduct(productSlug);
  const { products } = useProducts();
  const { addToCart } = useStore();
  const colors = ["red", "blue", "brown"];
  const sizes = ['xl', 'xs', 'lg', 'sm'];
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [activeColor, setActiveColor] = useState(colors[0]);
  const filteredProducts = !isLoading ? products.filter(pd => pd.category_id === product.category_id || pd.subcategory_id === product.subcategory_id) : [];

  return (
    <>
      <SEO 
        title={product?.name}
        description={product?.description}
      />

      <section className={`grid grid-cols-1 md:grid-cols-2 mb-2 sm:mb-4 md:mb-0 ${product ? "" : "gap-x-3"}`}>
        {product ? (
          <>
            <figure className="w-full sm:h-[40vh]  md:h-full">
              <img 
                src={Product1}
                alt={productSlug}
                className="w-full h-full overflow-hidden object-cover"
              />
            </figure>

            <div className="px-2 md:px-0">
              <header className="flex flex-col space-y-1 md:space-y-2">
                <div className="-space-y-0.5">
                  <h1 className="font-extrabold text-xl md:text-2xl">{product?.name}</h1>
                  <span className="font-medium text-[1.05rem] md:text-lg text-black/70">${product?.price ?? 12}</span>
                </div>
                <p className="text-gray-800/90 text-[.98rem] max-w-[56ch] leading-[1.5rem]">{product?.description}</p>
              </header>

              {/* Filters */}
              <div className="mt-2 md:mt-4 flex flex-col gap-y-2.5 sm:flex-row sm:gap-x-8 md:flex-col md:gap-y-4">
                <div className="space-y-[0.3rem]">
                  <h4 className="text-sm sm:text-base font-semibold">Colors</h4>

                  <ul className="flex items-center gap-x-2">
                    {product?.attributes?.color.map(color => (
                      <>
                        {activeColor === color ? (
                          <li 
                            key={color}
                            className="w-5 h-5 sm:w-6 sm:h-6 border border-gray-700 rounded-full flex items-center justify-center hover:cursor-pointer group"
                          >
                            <div 
                              className="w-[70%] h-[70%] sm:w-[75%] sm:h-[75%] rounded-full transition-all duration-200 group-hover:scale-105" 
                              style={{ background: color }}
                            />
                          </li>
                        ) : (
                          <li 
                            key={color} 
                            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full hover:cursor-pointer"
                            style={{ background: color }}
                            onClick={() => setActiveColor(color)}
                          />
                        )}
                      </>
                    ))}
                  </ul>
                </div>

                <div className="space-y-[0.3rem]">
                  <h4 className="text-sm sm:text-base font-semibold">Size</h4>

                  <ul className="flex items-center gap-x-2">
                    {product?.attributes?.size.map(size => (
                      <li 
                        key={size}
                        className={`w-10 sm:w-12 px-2 sm:px-2.5 py-[0.1rem] text-center border border-gray-700 rounded-md text-sm font-medium ${activeSize === size ? "bg-gray-900 text-white" : "hover:bg-gray-900 hover:text-white"} transition-colors duration-150 hover:cursor-pointer`}
                        onClick={() => setActiveSize(size)}
                      >
                        {size}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <footer className="mt-5">
                <Button 
                  variant="none" 
                  className="bg-black text-white text-[.96rem] h-max w-full py-2"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </Button>
              </footer>
            </div>
          </>
        ) : (
          <>
            <Skeleton className="h-full" />
            <div className="space-y-1.5">
              <Skeleton className="h-12 w-2/3" />
              <Skeleton className="h-7 w-[20%]" />
              <Skeleton className="h-40 w-full" />
              <div className="space-y-1.5">
                <Skeleton className="h-8 w-[20%]" />
                <Skeleton className="h-12 w-1/2" />
              </div>

              <div className="space-y-1.5">
                <Skeleton className="h-8 w-[20%]" />
                <Skeleton className="h-12 w-1/2" />
              </div>
            </div>
          </>
        )}
      </section>

      <ProductCollection 
        title="Similar Products"
        products={filteredProducts}
        isLoading={isLoading}
      />
    </>
  )
}

export default ProductDescription