import { useParams } from "react-router-dom"
import { BreadCrumbs, ProductCollection, SEO, ShopSidebar, Tags } from "@/components"
import { useProducts } from "@/hooks/useProducts"
import { useEffect, useState } from "react";
import { useSingleCategory } from "@/hooks/useCategories";

const ProductsCategory = () => {
  const { categorySlug } = useParams();
  const { category, isCategoryLoading } = useSingleCategory(categorySlug);
  const { products, isLoading } = useProducts();
  const [categoryProducts, setCategoryProducts] = useState([]);

  console.log(category, products);

  useEffect(() => {
    if (products.length && Object.values(category)) {
      const allCategoryProducts = products.filter(product => product.category_id === category.id);
      
      setCategoryProducts(prev => ([
        ...prev,
        ...allCategoryProducts
      ]));
    }
  }, [products, category]);

  return (
    <>
      <SEO 
          title="Shop"
          description="Shop"    
      />

      <main className="grid grid-cols-[17vw_1fr] gap-x-3.5">
        <ShopSidebar />

        <main className="space-y-1 px-3">
          <BreadCrumbs />

          <section className="w-full">
            <header className="space-y-3">
              <h1 className="text-3xl text-left font-extrabold">Shop</h1>
              <div>
                <Tags />
              </div>
            </header>

            <ProductCollection 
              products={categoryProducts}
              isLoading={isLoading}
              className="grid-cols-4"
            />
          </section>
        </main>
      </main>
    </>
  )
}

export default ProductsCategory