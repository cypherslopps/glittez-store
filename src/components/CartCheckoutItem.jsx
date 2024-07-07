import PropTypes from "prop-types";
import { useStore } from "@/providers/StoreProvider";

const CartCheckoutItem = ({ product }) => {
    const { addToCart, removeItemFromCart } = useStore();

    return (
        <blockquote className="grid grid-cols-[28%_1fr] gap-x-2.5">
            <figure className="h-32 border border-gray-200/90 select-none rounded-lg overflow-hidden">
                <img 
                    src={product?.sku[0]?.image}
                    alt={product?.name}
                    className="w-full h-full object-cover"
                />
            </figure>

            <div className="flex flex-col justify-between py-2">
                <header className="space-y-2">
                    <div className="flex justify-between">
                        <h4 className="text-[.92rem] font-semibold">{product?.name}</h4>
                        <p className="font-nunito font-semibold text-md">${(parseFloat(product?.sku[0].price.toLocaleString()) * product?.count).toFixed(3)}</p>
                    </div>
                    
                    <div className="mt-1 -space-y-0.5">
                        <span className="text-sm text-gray-700 flex items-center gap-x-1.5">Size <span className="w-1.5 h-1.5 bg-black rounded-black rounded-full" /> <span className="font-semibold text-black uppercase">{product?.attributes.size[0]}</span></span>

                        <span className="text-sm text-gray-700 flex items-center gap-x-1.5">Color <span className="w-1.5 h-1.5 bg-black rounded-black rounded-full" /> <span className="font-semibold text-black capitalize">{product?.attributes.color[0]}</span></span>
                    </div>
                </header>

                <footer className="flex items-center justify-end">
                    <ul className="border border-gray-400/45 divide-x divide-gray-400/45 flex items-center rounded-md">
                        <span 
                            className="px-3 py-0.5 font-nunito hover:cursor-pointer select-none"
                            onClick={() => removeItemFromCart(product?.id)}
                            tabIndex={0}
                        >
                            -
                            <span className="sr-only">Remove cart item</span>
                        </span>
                        <span 
                            className="px-3 py-0.5 font-nunito select-none"
                            tabIndex={1}
                        >
                            {product?.count}
                        </span>
                        <span 
                            className="px-3 py-0.5 font-nunito hover:cursor-pointer select-none"
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