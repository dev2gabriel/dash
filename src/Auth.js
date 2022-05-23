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
    const [userDepartment, setUserDepartment] = useState();
 
    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');
        const recoveredToken = localStorage.getItem('token');
        const recoveredUserId = localStorage.getItem('userId');
        const recoveredUserPhoto = localStorage.getItem('userPhoto');
        const recoveredUserDepartment = localStorage.getItem('userDepartment');
        if(recoveredUser && recoveredToken && recoveredUserId && recoveredUserPhoto && recoveredUserDepartment){
            setUser(JSON.parse(recoveredUser))
            setUserId(JSON.parse(recoveredUserId))
            setToken(JSON.parse(recoveredToken))
            setUserPhoto(JSON.parse(recoveredUserPhoto))
            setUserDepartment(JSON.parse(recoveredUserDepartment))
        }

        setLoading(false);
    }, []); 

    const login = (userData) => {
        console.log(userData)
        localStorage.setItem('user', JSON.stringify(userData.user.name));
        localStorage.setItem('token', JSON.stringify(userData.token));
        localStorage.setItem('userId', JSON.stringify(userData.user.id));
        localStorage.setItem('userPhoto', JSON.stringify(userData.user.photo_url));
        localStorage.setItem('userDepartment', JSON.stringify(userData.user.department.name));

        setUser(userData.user.name)
        setUserId(userData.user.id)
        setToken(userData.token)
        setUserPhoto(userData.user.photo_url)
        setUserDepartment(userData.user.department.name)
        navigate("/");       
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('userPhoto');
        localStorage.removeItem('userDepartment');
        navigate("/login")
    };

    return(
        <AuthContext.Provider value={{authenticated: !!user, user, userId, login, logout, loading, token, userPhoto, userDepartment}}> {children} </AuthContext.Provider>
    )
}