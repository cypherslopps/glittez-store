import axios from "@/lib/axios";
import PropTypes from "prop-types";
import { useContext, createContext, useState, useEffect } from "react"

const AuthContext = createContext({
    user: {},
    token: null,
    login: () => {},
    logout: () => {},
    registerUser: () => {},
    loginUser: () => {},
    logoutUser: () => {}
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const currentToken = localStorage.getItem("glittez_tk") ? JSON.parse(localStorage.getItem("glittez_tk")) : null;
    const [token, setToken] = useState(currentToken);

    useEffect(() => {
        if (token) {
            (async () => {
                try {
                    const request = await axios('/user');
                    const response = request.data;
                    
                    setUser(prev => ({
                        ...prev,
                        ...response
                    }));
                } catch (err) {
                    const message = err.response.data.message; 
                    
                    if (message.toLowerCase() === "unauthenticated" && token) {
                        localStorage.setItem("glittez_tk", null);
                        setToken(null);
                    }
                }
            })();
        }
    }, [token]);

    const registerUser = async (payload) => {
        try {
            const request = await axios.post("/register", payload);
            const response = request.data;
            const token = response.token;
            
            setToken(token);
            setUser(response.user);
            localStorage.setItem("glittez_tk", JSON.stringify(token));
        } catch(err) {
            throw err.response.data;
        }
    }

    const loginUser = async (payload) => {
        try {
            const request = await axios.post("/login", payload);
            const response = request.data;
            const token = response.token;
            
            setToken(token);
            setUser(response.user);
            localStorage.setItem("glittez_tk", JSON.stringify(token));
        } catch(err) {
            throw err.response.data;
        }
    }

    const logoutUser = async () => {
        try {
            await axios.post("/logout");
        } catch (err) { 
            throw err.response.data;
        }
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                registerUser,
                loginUser,
                logoutUser
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