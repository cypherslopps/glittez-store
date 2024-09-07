import PropTypes from "prop-types";
import { useStore } from "@/providers/StoreProvider";

const CartCheckoutItem = ({ product }) => {
    const { addToCart, removeItemFromCart } = useStore();

    return (
        <blockquote className="grid grid-cols-1 sm:grid-cols-[35%_1fr] lg:grid-cols-[28%_1fr] gap-x-2.5">
            <figure className="h-[7.5rem] lg:h-32 border border-gray-200/90 select-none rounded-lg overflow-hidden">
                <img 
                    src={product?.sku[0]?.image}
                    alt={product?.name}
                    className="w-full h-full object-cover"
                />
            </figure>

            <div className="flex flex-col justify-between gap-y-2 sm:gap-y-0 py-2">
                <header className="space-y-1 sm:space-y-2">
                    <div className="flex justify-between">
                        <h4 className="text-[.92rem] font-semibold">{product?.name}</h4>
                        <p className="font-nunito font-semibold text-sm sm:text-md">${(parseFloat(product?.sku[0].price.toLocaleString()) * product?.count).toFixed(3)}</p>
                    </div>
                    
                    <div className="mt-0.5 flex flex-row sm:flex-col sm:mt-1 gap-x-2.5 sm:-space-y-0.5">
                        <span className="text-[.82rem] sm:text-sm text-gray-700 flex items-center gap-x-1.5">Size <span className="w-1.5 h-1.5 bg-black rounded-black rounded-full" /> <span className="font-semibold text-black uppercase">{product?.attributes.size[0]}</span></span>

                        <span className="text-[.82rem] sm:text-sm text-gray-700 flex items-center gap-x-1.5">Color <span className="w-1.5 h-1.5 bg-black rounded-black rounded-full" /> <span className="font-semibold text-black capitalize">{product?.attributes.color[0]}</span></span>
                    </div>
                </header>

                <footer className="flex items-center  sm:justify-end">
                    <ul className="border border-gray-400/45 divide-x divide-gray-400/45 flex items-center rounded-md">
                        <span 
                            className="px-3 py-1 sm:py-0.5 font-nunito hover:cursor-pointer select-none text-sm sm:text-base"
                            onClick={() => removeItemFromCart(product?.id)}
                            tabIndex={0}
                        >
                            -
                            <span className="sr-only">Remove cart item</span>
                        </span>
                        <span 
                            className="px-3 py-1 sm:py-0.5 font-nunito select-none text-sm sm:text-base"
                            tabIndex={1}
                        >
                            {product?.count}
                        </span>
                        <span 
                            className="px-3 py-1 sm:py-0.5 font-nunito hover:cursor-pointer select-none text-sm sm:text-base"
                            onClick={() => addToCart(product)}
                            tabIndex={3}
                        >
                            +
                            <span className="sr-only">Add cart item</span>
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