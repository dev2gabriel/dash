import { Component } from 'react';
/* import { AuthContext } from './Auth'; */
import { useContext } from 'react';
import './NavMenu.css';
import { Link } from 'react-router-dom';


function NavMenu(){
    /* const { logout, user } = useContext(AuthContext); */
    /* function handleClick(){
        logout();
    }
    let li;
    let li2;
    if(1){
        li = <li className=""><span className="item-menu-hover"></span><span className="item-menu">Banco de Horas</span></li>;
        li2 = <li className=""><span className="item-menu-hover"></span><span className="item-menu">Catálogos de Produtos</span></li>
    } else {
        li = "";
        li2 = "";
    } */

    return(
        <div className="side-bar-main">
            <ul id="menu-list">
            <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
            {/* <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Avaliações</span></li></Link>
            <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Banco de Horas</span></li></Link> */}
            <Link to="/cadastrar-rh-news"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Cadastrar RH News</span></li></Link>
            <Link to="/colaborador"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Colaboradores</span></li></Link>
            <Link to="/links-comercial"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Comercial</span></li></Link>            
            <Link to="/requisicoes"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Requisições</span></li></Link>
            </ul>
        </div>
    )
}

export default NavMenu;