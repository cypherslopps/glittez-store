import PropTypes from "prop-types";
import { useContext, createContext, useState } from "react"

const AuthContext = createContext({
    user: {},
    login: () => {},
    logout: () => {},
    register: () => {},
});

export const AuthProvider = ({ children }) => {
    const [user] = useState({name: "user"});

    return (
        <AuthContext.Provider
            value={{
                user
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node
}

export const useAuth = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error("AuthContext is out of scope");
    }

    return authContext;
};