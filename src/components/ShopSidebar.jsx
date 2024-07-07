import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useCategories } from "../hooks/useCategories";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/Collapsible"
import { Button } from './ui/Button'
import { Icons } from './Icons'
import { Skeleton } from './ui/Skeleton';
import { useProducts } from '@/hooks/useProducts';
import { ScrollArea } from './ui/ScrollArea';

const ShopSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { productCategories, isProductsCategoriesLoading } = useCategories();
  const { productColors, productSizes, productPrices, isLoading } = useProducts();
  const [isColorsOpen, setIsColorsOpen] = useState(true);
  const [isPricesOpen, setIsPricesOpen] = useState(true);
  const [isSizesOpen, setIsSizesOpen] = useState(false);
  const [priceQuery, setPriceQuery] = useState(searchParams.get("price"));
  const [colorQuery, setColorQuery] = useState(searchParams.get("color"));
  const [sizeQuery, setSizeQuery] = useState(searchParams.get("size"));

  return (
    <aside className='border-r border-gray-200 sticky top-0 h-screen bg-white left-0 pr-2.5 pt-2'>
      <ScrollArea className="h-full">
        <div className='space-y-4'>
          <div className='space-y-1'>
            <h4 className='text-md font-semibold'>Categories</h4>

            <ul className='px-4 space-y-0.5 list-none'>
              {!isProductsCategoriesLoading ? productCategories.map(category => (
                <li key={category.name}>
                  <Link 
                    to={`/products/category/${category.name}`}
                    className='text-md font-medium hover:underline text-gray-700'
                  >
                    {category.name}
                  </Link>
                </li>
              )) : (
                <ul className='flex flex-col gap-y-1'>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Skeleton key={idx} className="w-full h-6" />
                  ))}
                </ul>
              )}
            </ul>
          </div>

          <div className='space-y-1'>
            <h4 className='text-md font-semibold'>Filter by:</h4>

            <div className='pl-2 space-y-2'>
              <Collapsible
                open={isColorsOpen}
                onOpenChange={setIsColorsOpen}
                className="space-y-1"
              >
                <div className="flex items-center justify-between space-x-4">
                  <h4 className="text-[.92rem] font-semibold">
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
                  {!isLoading ? productColors.map(color => (
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
                          searchParams.set("color", target.value);
                          setSearchParams(searchParams);
                        }}
                      />
                      
                      <div className='flex items-center gap-x-1'>
                        <span className='text-md capitalize font-medium text-gray-700'>{color}</span>
                        <span className='w-8 h-2.5 rounded-full' style={{ background: color }} />
                      </div>
                    </label>
                  )) : (
                    <ul className='flex flex-col gap-y-1'>
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Skeleton key={idx} className="w-full h-6" />
                      ))}
                    </ul>
                  )}
                </CollapsibleContent>
              </Collapsible>

              <Collapsible
                open={isSizesOpen}
                onOpenChange={setIsSizesOpen}
                className="space-y-1"
              >
                <div className="flex items-center justify-between space-x-4">
                  <h4 className="text-[.92rem] font-semibold">
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
                  {!isLoading ? productSizes.map(size => (
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
                          searchParams.set("size", target.value);
                          setSearchParams(searchParams);
                        }}
                      />
                      
                      <span className='text-md uppercase font-semibold text-gray-700'>{size}</span>
                    </label>
                  )) : (
                    <ul className='flex flex-col gap-y-1'>
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Skeleton key={idx} className="w-full h-6" />
                      ))}
                    </ul>
                  )}
                </CollapsibleContent>
              </Collapsible>

              <Collapsible
                open={isPricesOpen}
                onOpenChange={setIsPricesOpen}
                className="space-y-1"
              >
                <div className="flex items-center justify-between space-x-4">
                  <h4 className="text-[.92rem] font-semibold">
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
                  {!isLoading ? productPrices.map(price => (
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
                          searchParams.set("price", target.value);
                          setSearchParams(searchParams);
                        }}
                      />
                      
                      <span className='text-md uppercase font-medium text-gray-600'>${price}</span>
                    </label>
                  )) : (
                    <ul className='flex flex-col gap-y-1'>
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Skeleton key={idx} className="w-full h-6" />
                      ))}
                    </ul>
                  )}
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}

export default ShopSidebar