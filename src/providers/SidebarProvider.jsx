import { useState } from "react";
import PropTypes from "prop-types";
import { createContext, useContext } from "react";

const SidebarContext = createContext({
    isOpen: false,
    toggleSidebar: () => {}
});

export const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <SidebarContext.Provider value={{
            isOpen,
            toggleSidebar
        }}>
            {children}
        </SidebarContext.Provider>
    )
}

SidebarProvider.propTypes = {
    children: PropTypes.node
}

export const useSidebar = () => {
    const context = useContext(SidebarContext);

    if (!context) {
        throw new Error("SidebarContext is out of scope");
    }

    return context;
}