import { Button } from "./ui/Button"
import { Icons } from "./Icons"
import { useStore } from "@/providers/StoreProvider"
import { useState } from "react";
import CartCollection from "./CartCollection";

const CartButton = () => {
  const { cart } = useStore();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="relative">
      <Button 
        variant="ghost"
        size="ghost"
        className="relative"
        onClick={() => setIsCartOpen(prev => !prev)}
      >
        <Icons.cart className='w-6 h-6 text-gray-600/95' />
        {cart.length ? (
          <span className="w-2.5 h-2.5 border-2 border-white font-nunito rounded-full bg-rose-500/90 text-white flex items-center justify-center $font-semibold absolute top-3 right-0 -translate-y-1/2 -translate-x-1/2" />
        ) : null}
      </Button>

      <CartCollection isOpen={isCartOpen} />
    </div>
  )
}

export default CartButton