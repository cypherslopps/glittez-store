import { Hamburger, OverviewStats, ProductTable } from "@/components"
import { Button } from "@/components/ui/Button"
import { useNavigate } from "react-router-dom"

const Overview = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-7">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Hello, Admin!</h1>

        <div className="flex items-center gap-x-1 md:gap-x-0">
          <Button 
            className="font-semibold"
            onClick={() => navigate('/dashboard/products')}
          >
            View Products
          </Button>
          <Hamburger />
        </div>
      </header>

      <OverviewStats />

      <section className="grid grid-cols-[70%_1fr] gap-x-2">
        <ProductTable 
          data={[]}
          isLoading={false}
        />
        <div className="bg-white border border-gray-300/70 rounded-lg p-3">Notifications</div>
      </section>
    </div>
  )
}

export default Overview