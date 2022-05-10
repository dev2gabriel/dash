import React, { useState, useEffect, createContext } from "react"; 
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState();
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');
        const recoveredToken = localStorage.getItem('token');
        const recoveredUserId = localStorage.getItem('userId');
        if(recoveredUser && recoveredToken && recoveredUserId){
            setUser(JSON.parse(recoveredUser))
            setUserId(JSON.parse(recoveredUserId))
            setToken(JSON.parse(recoveredToken))
        }

        setLoading(false);
    }, []); 

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData.user.name));
        localStorage.setItem('token', JSON.stringify(userData.token));
        localStorage.setItem('userId', JSON.stringify(userData.user.id));

        //const response = await asynda

        setUser(userData.user.name)
        setUserId(userData.user.id)
        setToken(userData.token)
        navigate("/");       
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        navigate("/login")
    };

    return(
        <AuthContext.Provider value={{authenticated: !!user, user, userId, login, logout, loading, token}}> {children} </AuthContext.Provider>
    )
}