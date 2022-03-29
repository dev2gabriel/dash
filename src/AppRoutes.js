import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

const AppRoutes = () =>{
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route exact path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes