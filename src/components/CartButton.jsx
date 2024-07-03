import { Button } from "./ui/Button"
import { Icons } from "./Icons"
import { useStore } from "@/providers/StoreProvider"

const CartButton = () => {
  const { cart, cartCount } = useStore();

  return (
    <Button 
      variant="ghost"
      size="ghost"
      className="relative"
    >
      <Icons.cart className='w-6 h-6 text-gray-600/95' />
      {cart.length ? (
        <span className={`w-[1.15rem] h-[1.15rem] font-nunito rounded-full bg-rose-500/90 text-white flex items-center justify-center ${cartCount > 9 ? "text-[.7rem]" : "text-[.8rem]"} font-semibold absolute top-2.5 -right-2 -translate-y-1/2 -translate-x-1/2 font-nunito`}>{cartCount}</span>
      ) : null}
    </Button>
  )
}

export default CartButton