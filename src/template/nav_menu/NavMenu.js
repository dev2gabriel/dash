import { AuthContext } from '../../Auth';
import { useContext, useEffect, useState } from 'react';
import './NavMenu.css';
import { Link } from 'react-router-dom';


function NavMenu(){
    const { userDepartment } = useContext(AuthContext);
    const [ links, setLinks] = useState();

    useEffect(() =>{
        if(userDepartment === "RH"){
           setLinks(
            <ul id="menu-list">
                <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                <Link to="/cadastrar-rh-news"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Cadastrar RH News</span></li></Link>
                <Link to="/colaborador"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Colaboradores</span></li></Link>        
               {/*  <Link to="/requisicoes"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Requisições</span></li></Link> */}
            </ul>
           )
        }

        if(userDepartment === "Tecnologia"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/cadastrar-rh-news"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Cadastrar RH News</span></li></Link>
                 <Link to="/colaborador"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Colaboradores</span></li></Link>
                 <Link to="/links-comercial"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Comercial</span></li></Link>            
                 {/* <Link to="/requisicoes"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Requisições</span></li></Link> */}
             </ul>
            )
         }

        if(userDepartment === "Marketing"){
            setLinks(
                <ul id="menu-list">
                    <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>          
                    {/* <Link to="/requisicoes"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Requisições</span></li></Link> */}
                </ul>
            )
        }

    }, [])

    return(
        <div className="side-bar-main">
            {
                links
            }
        </div>
    )
}

export default NavMenu;