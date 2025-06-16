import { createContext, useContext, useEffect, useState, useCallback } from "react";
const API_URL = process.env.REACT_APP_BACKEND_URL;


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Initialize token from localStorage
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [userData, setUserData] = useState("");
    const AuthorizationToken = `Bearer ${token}`;

    // Memoize the userAuthentication function using useCallback
    const userAuthentication = useCallback(async () => {
        if (!token) return;

        console.log("Checking if we have token or not: " + token);

        try {
            const response = await fetch(`${API_URL}/auth/user`, {
                method: 'GET',
                headers: {
                    Authorization: AuthorizationToken
                }
            });

            if (response.ok) {
                console.log("Response of fetching user is OK");
                const data = await response.json();
                console.log("Fetched user: ", data);
                setUserData(data.userData);
            } else {
                console.error("Error fetching user data");
            }
        } catch (error) {
            console.log("Error while fetching user:", error);
        }
    }, [token, AuthorizationToken]); // Add token and AuthorizationToken as dependencies

    useEffect(() => {
        userAuthentication();
    }, [userAuthentication]); // Add userAuthentication as a dependency

    // Store token in localStorage
    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        localStorage.setItem("token", serverToken); // Persist token
    };

    // Check if user is logged in
    let isLoggedIn = !!token;

    // Logout Function
    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem("token");
        console.log('removed');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, userData, AuthorizationToken }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook to use Auth Context
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of a provider");
    }
    return authContextValue;
};
