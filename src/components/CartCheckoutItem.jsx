import PropTypes from "prop-types";
import { useStore } from "@/providers/StoreProvider";
import Product1 from "../assets/images/product-1.jpg";

const CartCheckoutItem = ({ product }) => {
    const { addToCart, removeItemFromCart } = useStore();

    return (
        <blockquote className="grid grid-cols-[25%_1fr] gap-x-2">
            <figure className="h-32 border border-gray-200/70 select-none">
                <img 
                    src={Product1}
                    alt="product-1"
                    className="w-full h-full object-cover"
                />
            </figure>

            <div className="flex flex-col justify-between">
                <header>
                    <h4 className="text-[.92rem] font-medium">{product?.name ?? product?.title}</h4>
                    <span className="text-sm text-gray-700">Size: <span className="font-semibold text-black">XL</span></span>
                </header>

                <footer className="flex items-center justify-between">
                    <p className="font-nunito font-semibold">${(parseFloat(product?.price.toLocaleString()) * product?.count).toFixed(3)}</p>
                    <ul className="border border-gray-400/45 divide-x divide-gray-400/45 flex items-center rounded-md">
                        <span 
                            className="px-3 py-0.5 font-nunito hover:cursor-pointer select-none"
                            onClick={() => removeItemFromCart(product?.id)}
                        >
                            -
                        </span>
                        <span className="px-3 py-0.5 font-nunito select-none">{product?.count}</span>
                        <span 
                            className="px-3 py-0.5 font-nunito hover:cursor-pointer select-none"
                            onClick={() => addToCart(product)}
                        >
                            +
                        </span>
                    </ul>
                </footer>
            </div>
        </blockquote>
    )
}

CartCheckoutItem.propTypes = {
    product: PropTypes.object
}

export default CartCheckoutItem