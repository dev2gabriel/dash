import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Teste from './pages/Teste'

const AppRoutes = () =>{
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route exact path="/teste" element={<Teste />} />
            </Routes>
            <Routes>
                <Route exact path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes