import PropTypes from "prop-types";
import { useStore } from "../providers/StoreProvider";
import Product1 from "../assets/images/product-1.jpg";
import { Button, buttonVariants } from "./ui/Button";
import { Icons } from "./Icons";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export const ProductCollectionItemSkeleton = () => {
  return (
    <div>Loader</div>
  )
}

export const ProductCollectionItem = ({ product={} }) => {
  const { addToCart } = useStore();

  return (
    <blockquote className="product-box flex flex-col justify-between rounded-xl overflow-hidden border border-gray-200/80 h-[20rem]">
      <div className="h-[75%] overflow-hidden border-b border-gray-200/80 relative">
        <img 
          src={Product1}
          alt="product1"
          className="w-full h-full transition-all duration-300 hover:scale-105 hover:cursor-pointer object-cover"
        />

        <Button className="absolute">
          <Icons.heart />
        </Button>
      </div>
      <div className="h-[25%] py-1.5 px-2 flex flex-col justify-between">
        <h5 className="text-[.97rem] font-medium">{product?.name}</h5>

        <div className="flex items-center justify-between">
          <div className="flex flex-col -space-y-1.5">
            <h6 className="text-[.84rem] font-medium text-gray-500">Price:</h6>
            <span className="font-bold font-nunito text-base inline-block">${product?.sku[0]?.price}</span>
          </div>

          <div className="space-x-2">
            <Link 
              to={`/products/category/${product.category_id}/${product?.slug}`} 
              className={cn(buttonVariants({ variant: "link" }), "px-0")}
            >
              View
            </Link>
            <Button 
              size="sm"
              className="rounded-md gap-x-1 px-2"
              onClick={() => addToCart(product)}
            >
              <Icons.cart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </blockquote>
  )
}

ProductCollectionItem.propTypes = {
  product: PropTypes.object,
}