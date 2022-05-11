import React, { useState, useEffect, createContext } from "react"; 
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState();
    const [loading, setLoading] = useState(true);
    const [userPhoto, setUserPhoto] = useState();
 
    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');
        const recoveredToken = localStorage.getItem('token');
        const recoveredUserId = localStorage.getItem('userId');
        const recoveredUserPhoto = localStorage.getItem('userPhoto');
        if(recoveredUser && recoveredToken && recoveredUserId && recoveredUserPhoto){
            setUser(JSON.parse(recoveredUser))
            setUserId(JSON.parse(recoveredUserId))
            setToken(JSON.parse(recoveredToken))
            setUserPhoto(JSON.parse(recoveredUserPhoto))
        }

        setLoading(false);
    }, []); 

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData.user.name));
        localStorage.setItem('token', JSON.stringify(userData.token));
        localStorage.setItem('userId', JSON.stringify(userData.user.id));
        localStorage.setItem('userPhoto', JSON.stringify(userData.user.photo_url));

        //const response = await asynda

        setUser(userData.user.name)
        setUserId(userData.user.id)
        setToken(userData.token)
        setUserPhoto(userData.user.photo_url)
        navigate("/");       
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('userPhoto');
        navigate("/login")
    };

    return(
        <AuthContext.Provider value={{authenticated: !!user, user, userId, login, logout, loading, token, userPhoto}}> {children} </AuthContext.Provider>
    )
}