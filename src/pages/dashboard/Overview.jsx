import { Hamburger, OverviewStats, ProductTable } from "@/components"
import { Button } from "@/components/ui/Button"

const Overview = () => {
  return (
    <div className="space-y-7">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Hello, Admin!</h1>

        <div className="flex items-center gap-x-1 md:gap-x-0">
          <Button className="font-semibold">View Products</Button>
          <Hamburger />
        </div>
      </header>

      <OverviewStats />

      <ProductTable 
        data={[]}
        isLoading={false}
      />
      <div>Notifications</div>
    </div>
  )
}

export default Overview