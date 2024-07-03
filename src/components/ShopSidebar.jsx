import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/Collapsible"
import { Button } from './ui/Button'
import { Icons } from './Icons'

const ShopSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isColorsOpen, setIsColorsOpen] = useState(true);
  const [isPricesOpen, setIsPricesOpen] = useState(true);
  const [isSizesOpen, setIsSizesOpen] = useState(false);
  const colors = ["red", "pink", "black", "purple dfdsf dsfp", "blue"];
  const sizes = ["xl", "xxl", "xls", "xs", "lg"];
  const prices = [500, 1000, 100, 10, 10000];
  const [priceValue, setPriceValue] = useState("");
  const [sizeValue, setSizeValue] = useState("");
  const [colorValue, setColorValue] = useState("");

  console.log(colorValue)

  return (
    <aside className='border-r border-gray-200 sticky top-5 left-0 space-y-4 pr-2.5 pt-2'>
      <div className='space-y-1'>
        <h4 className='text-base font-semibold'>Category</h4>

        <ul className='px-4 list-none'>
          <li>
            <Link 
              to="/products/category/cars"
              className='text-md hover:underline text-gray-700'
            >
              Cars
            </Link>
          </li>

          <li>
            <Link 
              to="/products/category/shoes"
              className='text-md hover:underline text-gray-700'
            >
              Shoes
            </Link>
          </li>

          <li>
            <Link 
              to="/products/category/laptops"
              className='text-md hover:underline text-gray-700'
            >
              Laptops
            </Link>
          </li>
        </ul>
      </div>

      <div className='space-y-1'>
        <h4 className='text-base font-semibold'>Filter by:</h4>

        <div className='pl-2 space-y-2'>
          <Collapsible
            open={isColorsOpen}
            onOpenChange={setIsColorsOpen}
            className="space-y-1"
          >
            <div className="flex items-center justify-between space-x-4">
              <h4 className="text-md font-medium">
                Colors
              </h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="p-1 h-max">
                  {isColorsOpen ? (
                    <Icons.arrowTopS className="h-5 w-5 text-gray-600" strokeWidth={1} />
                  ) : (
                    <Icons.arrowBottomS className="h-5 w-5 text-gray-600" strokeWidth={1} />
                  )}
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-1.5 transition-all duration-300 pl-1.5">
              {colors.map(color => (
                <label
                  key={color}
                  htmlFor={color}
                  className='flex items-center gap-x-1 hover:cursor-pointer'
                >
                  <input 
                    type="radio"
                    name="color"
                    id={color}
                    className='active:bg-default-500 checked:text-default-500'
                    value={color}
                    onChange={({ target }) => {
                      console.log(target.value, target.name, target)
                      setColorValue(target.value)
                      searchParams.set("color", target.value);
                      setSearchParams(searchParams);
                    }}
                  />
                  
                  <div className='flex items-center gap-x-1'>
                    <span className='text-md capitalize font-medium text-gray-700'>{color}</span>
                    <span className='w-8 h-2.5 rounded-full' style={{ background: color }} />
                  </div>
                </label>
              ))}
            </CollapsibleContent>
          </Collapsible>

          <Collapsible
            open={isSizesOpen}
            onOpenChange={setIsSizesOpen}
            className="space-y-1"
          >
            <div className="flex items-center justify-between space-x-4">
              <h4 className="text-md font-medium">
                Sizes
              </h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="p-1 h-max">
                  {isSizesOpen ? (
                    <Icons.arrowTopS className="h-5 w-5 text-gray-600" strokeWidth={1} />
                  ) : (
                    <Icons.arrowBottomS className="h-5 w-5 text-gray-600" strokeWidth={1} />
                  )}
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-1.5 transition-all duration-300 pl-1.5">
              {sizes.map(size => (
                <label
                  key={size}
                  htmlFor={size}
                  className='flex items-center gap-x-1 hover:cursor-pointer'
                >
                  <input 
                    type="radio"
                    name="size"
                    id={size}
                    value={size}
                    onChange={({ target }) => {
                      setSizeValue(target.value);
                      searchParams.set("size", target.value);
                      setSearchParams(searchParams);
                    }}
                  />
                  
                  <span className='text-md uppercase font-semibold text-gray-700'>{size}</span>
                </label>
              ))}
            </CollapsibleContent>
          </Collapsible>

          <Collapsible
            open={isPricesOpen}
            onOpenChange={setIsPricesOpen}
            className="space-y-1"
          >
            <div className="flex items-center justify-between space-x-4">
              <h4 className="text-md font-medium">
                Prices
              </h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="p-1 h-max">
                  {isPricesOpen ? (
                    <Icons.arrowTopS className="h-5 w-5 text-gray-600" strokeWidth={1} />
                  ) : (
                    <Icons.arrowBottomS className="h-5 w-5 text-gray-600" strokeWidth={1} />
                  )}
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-1.5 transition-all duration-300 pl-1.5">
              {prices.map(price => (
                <label
                  key={price}
                  htmlFor={price}
                  className='flex items-center gap-x-1 hover:cursor-pointer'
                >
                  <input 
                    type="radio"
                    name="price"
                    id={price}
                    value={price}
                    onChange={({ target }) => {
                      console.log(target.name, target.value)
                      setPriceValue(target.value);
                      searchParams.set("price", target.value);
                      setSearchParams(searchParams);
                    }}
                  />
                  
                  <span className='text-md uppercase font-semibold text-gray-700'>${price}</span>
                </label>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </aside>
  )
}

export default ShopSidebar