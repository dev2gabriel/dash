import React, { useContext }  from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NewCollaborator from './pages/NewCollaborator';
import NewCollaboratorRegister from './pages/NewCollaboratorRegister';
import Rating from './pages/Rating';
import Requests from './pages/Requests';
import { AuthProvider, AuthContext } from './Auth';
import NewRhNews from './pages/NewRhNews';
import RequestHolidays from './pages/RequestHolidays';
import LinksComercial from './pages/LinksComercial';
import EditUser from './pages/EditUser';
import EditPost from './pages/EditPost';
import UserProfile from './pages/UserProfile';

const AppRoutes = () =>{

    const Private = ({children}) =>{
        const { authenticated, loading } = useContext(AuthContext);
        if(loading){
            return <div className="loading">Carregando...</div>
        }
        if(!authenticated){
            return <Navigate to="/login"/>
        } 
        return children;
    }

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<Private><Home /></Private>} />
                </Routes>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                </Routes>
                <Routes>
                    <Route exact path="/colaborador" element={<Private><NewCollaborator /></Private>} />
                </Routes>
                <Routes>
                    <Route exact path="/cadastrar-colaborador" element={<Private><NewCollaboratorRegister /></Private>} />
                </Routes>
                <Routes>
                    <Route exact path="/avaliacoes" element={<Private><Rating /></Private>} />
                </Routes>
                <Routes>
                    <Route exact path="/requisicoes" element={<Private><Requests /></Private>} />
                </Routes>
                <Routes>
                    <Route exact path="/cadastrar-rh-news" element={<Private><NewRhNews /></Private>} />
                </Routes>
                <Routes>
                    <Route exact path="/solicitar-ferias" element={<Private><RequestHolidays /></Private>} />
                </Routes>
                <Routes>
                    <Route exact path="/links-comercial" element={<Private><LinksComercial /></Private>} />
                </Routes>
                <Routes>
                    <Route exact path="/editar-usuario/:userId" element={<Private><EditUser /></Private>} />
                </Routes>
                <Routes>
                    <Route exact path="/editar-post/:postId" element={<Private><EditPost /></Private>} />
                </Routes>
                <Routes>
                    <Route exact path="/perfil-usuario/:userId" element={<Private><UserProfile /></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}


export default AppRoutes