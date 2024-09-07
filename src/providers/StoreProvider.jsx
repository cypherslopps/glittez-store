import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const StoreContext = createContext({
    cart: [],
    addToCart: () => {},
    removeItemFromCart: () => {},
    clearCart: () => {},
    removeItemFromCartWithoutCount: () => {},
    cartCount: 0,
    totalAmount: 0
});

export const StoreProvider = ({ children }) => {
    const localizedCart = localStorage.getItem("glittez_store") ? JSON.parse(localStorage.getItem("glittez_store")) : [];
    const [cart, setCart] = useState(localizedCart);
    const cartCount = cart.length ? cart.reduce((acc, cur) => acc + cur?.count, 0) : 0;
    const totalAmount = cart.length ? cart.reduce((acc, cur) => acc + cur?.sku[0]?.price * cur?.count, 0).toFixed(3) : 0;

    useEffect(() => {
        localStorage.setItem('glittez_store', JSON.stringify(cart));
    }, [cart]);

    // Add to cart
    const addToCart = (product) => {
        const existingCart = cart.find(item => item.id === product.id);

        if (existingCart) {
            // Increment product count
            const newCart = cart.map(item => item.id === product.id ? { ...item, count: item.count + 1 } : item);

            setCart(newCart);
        } else {
            const newProduct = {
                ...product,
                count: 1
            };

            setCart([
                ...cart,
                newProduct    
            ]);
        }

        toast(`${product.name} added to cart`);
    };

    // Remove Item from cart
    const removeItemFromCartWithoutCount = (productId) => {
        const existingCart = cart.find(item => item.id === productId);

        if (existingCart) {
            const newCartItems = cart.filter(item => item.id !== productId);
            setCart(newCartItems);
        }

        toast(`${existingCart?.name} removed from cart`);
    } 
    
    // Remove item from cart using item count
    const removeItemFromCart = (productId) => {
        const existingCart = cart.find(item => item.id === productId);

        if (existingCart) {
            const newCartItems = [];

            cart.map(item => {
                if (item.id === productId) {
                    item.count !== 1 && newCartItems.push({ ...item, count: item.count - 1 });
                } else {
                    newCartItems.push(item);
                }
            });

            setCart(newCartItems);
        }
    };

    // Clear to cart
    const clearCart = () => {
        setCart([]);
    };

    return (
        <StoreContext.Provider
            value={{
                cart,
                addToCart,
                removeItemFromCart,
                removeItemFromCartWithoutCount,
                clearCart,
                cartCount,
                totalAmount
            }}
        >
            {children}
        </StoreContext.Provider>
    )
}

StoreProvider.propTypes = {
    children: PropTypes.node
};

export const useStore = () => {
    const storeContext = useContext(StoreContext);

    if (!storeContext) {
        throw new Error("StoreContext is out of scope");
    }

    return storeContext;
};

