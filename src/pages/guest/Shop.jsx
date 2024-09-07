import { BreadCrumbs, ProductCollection, SEO, ShopSidebar, Tags } from "@/components"
import { useProducts } from "@/hooks/useProducts"


const Shop = () => {
  const { products, isLoading } = useProducts();

  return (
    <>
      <SEO 
          title="Shop"
          description="Shop"     
      />

      <main className="grid grid-cols-[17vw_1fr] gap-x-3.5">
          <ShopSidebar />

          <main className="space-y-1 px-1 lg:px-3">
            <BreadCrumbs />

            <section className="w-full">
              <header className="space-y-3">
                <h1 className="text-3xl text-left font-extrabold">Shop</h1>
                <div>
                  <Tags />
                </div>
              </header>

              <ProductCollection 
                products={products}
                isLoading={isLoading}
                className="grid-cols-3 lg:grid-cols-4"
              />
            </section>
          </main>
      </main>
    </>
  )
}

export default Shop