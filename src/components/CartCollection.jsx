import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types";
import CartCollectionItem from "./CartCollectionItem"
import { Button } from "./ui/Button"
import { ScrollArea } from "./ui/ScrollArea"
import { useStore } from "@/providers/StoreProvider"
import { Icons } from "./Icons"
import { AnimatePresence, motion } from "framer-motion"

const CartCollectionVariant = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0
  }
}

const CartCollection = ({ isOpen }) => {
  const navigate = useNavigate();
  const { cart, cartCount, totalAmount } = useStore();

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        variants={CartCollectionVariant}
        initial="hidden"
        animate={isOpen ? "show" : "hidden"}
        exit="hidden"
        className={`absolute -bottom-[23.8rem] z-[1000] -left-[17.5rem] -translate-x-1/2 bg-white w-80 py-2 px-2.5 border border-gray-200 rounded-md space-y-1.5 ${isOpen ? "" : "pointer-events-none"}`}
      >
        <ScrollArea className="h-64">
          <div className="flex flex-col gap-y-1">
            {cart.length ? cart.map(cart => (
            <CartCollectionItem 
                key={cart.name}
                cart={cart}
              />
            )) : (
              <div className="h-64 flex flex-col items-center justify-center gap-y-3.5">
                <Icons.cart className="w-12 h-12 text-gray-500/80" />
                <p className="text-md font-semibold text-gray-700/95 uppercase">Cart is empty</p>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="space-y-1.5 px-0.5 border-t border-gray-100 pt-2">
          <ul className="space-y-1 w-full">
            <li className="text-[.92rem] leading-5 flex items-center justify-between">
              Total Cart Items: {" "}
              <span className="font-semibold text-md font-nunito">{cartCount}</span>
            </li>

            <li className="text-[.92rem] leading-5 flex items-center justify-between">
              Total Amount: {" "}
              <span className="font-semibold text-md font-nunito">${totalAmount}</span>
            </li>
          </ul>
          <Button 
            size="md"
            className="w-full"
            onClick={() => navigate("/cart/checkout")}
          >
            Checkout
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

CartCollection.propTypes = {
  isOpen: PropTypes.bool
}

export default CartCollection