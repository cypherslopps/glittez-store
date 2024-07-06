import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";

const StoreContext = createContext({
    cart: [],
    addToCart: () => {},
    removeItemFromCart: () => {},
    clearCart: () => {},
    cartCount: 0,
    totalAmount: 0
});

export const StoreProvider = ({ children }) => {
    const localizedCart = localStorage.getItem("glittez_store") ? JSON.parse(localStorage.getItem("glittez_store")) : [];
    const [cart, setCart] = useState(localizedCart);
    const cartCount = cart.reduce((acc, cur) => acc + cur.count, 0);
    const totalAmount = cart.reduce((acc, cur) => acc + cur.price * cur.count, 0).toFixed(3);

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
    };
    
    // Add to cart
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

    // Add to cart
    const clearCart = () => {
        setCart([]);
    };

    return (
        <StoreContext.Provider
            value={{
                cart,
                addToCart,
                removeItemFromCart,
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
