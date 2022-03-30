import React, { useState, useEffect, createContext } from "react"; 
import { useNavigate } from "react-router-dom";
import { api, createSession } from "./services/Api";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [ loading, setLoading] = useState(true);
 
    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');
        if(recoveredUser){
            setUser(JSON.parse(recoveredUser))
        }

        setLoading(false);
    }, []); 

    const login = (username) => {
        localStorage.setItem('user', JSON.stringify(username));

        //const response = await asynda

        setUser({username})
        navigate("/");       
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        navigate("/login")
    };

    return(
        <AuthContext.Provider value={{authenticated: !!user, user, login, logout, loading}}> {children} </AuthContext.Provider>
    )
}