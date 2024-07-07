import PropTypes from "prop-types";
import { useStore } from "@/providers/StoreProvider";
import { Icons } from "./Icons";
import { Button } from "./ui/Button";

const CartCollectionItem = ({ cart={} }) => {
  const { removeItemFromCart, addToCart,removeItemFromCartWithoutCount } = useStore();

  return (
    <div className="p-0.5 flex gap-x-1.5 focus:bg-gray-100/60 focus:border focus:border-gray-100 focus:outline-none" tabIndex={0}>
      <figure className="w-44 h-20 min-h-full border border-gray-100 rounded-lg overflow-hidden">
        <img 
          src={cart.sku[0]?.image}
          alt={cart?.name}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="py-0.5 flex flex-col justify-between relative w-full">
        <div className="-space-y-0.5">
          <h4 className="text-[.9rem] font-semibold">{cart?.name}</h4>
          <p className="text-[.85rem]">
            Price: {" "}
            <span className="font-semibold font-nunito">${cart?.sku[0]?.price}</span>
          </p>
        </div>

        <ul className="w-max border border-gray-400/45 divide-x divide-gray-400/45 flex items-center rounded-md">
          <span 
              className="px-2.5 py-0.5 font-nunito hover:cursor-pointer select-none text-sm text-center"
              onClick={() => removeItemFromCart(cart?.id)}
              tabIndex={0}
          >
            -
            <span className="sr-only">Remove cart item</span>
          </span>
          <span 
            className="px-2.5 py-0.5 font-nunito select-none text-sm text-center"
            tabIndex={0}ag
          >
            {cart?.count}
          </span>
          <span 
              className="px-2.5 py-0.5 font-nunito hover:cursor-pointer select-none text-sm text-center"
              onClick={() => addToCart(cart)}
              tabIndex={0}
          >
              +
              <span className="sr-only">Add cart item</span>
          </span>
        </ul>

        <Button
          variant="ghost"
          size="none"
          className="absolute top-0 right-0 p-0.5"
          onClick={() => removeItemFromCartWithoutCount(cart.id)}
        >
          <Icons.close className="w-5 h-5 text-gray-700/90" />
          <span className="sr-only">Remove Cart Item</span>
        </Button>
      </div>
    </div>
  )
}

CartCollectionItem.propTypes = {
  cart: PropTypes.object
}

export default CartCollectionItem