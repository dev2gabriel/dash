import { AuthContext } from '../../Auth';
import { useContext, useEffect, useState } from 'react';
import './NavMenu.css';
import { Link } from 'react-router-dom';


function NavMenu(){
    const { userDepartment, user } = useContext(AuthContext);
    const [ links, setLinks] = useState();

    useEffect(() =>{
        if(userDepartment === "Assistência Técnica"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>
             </ul>
            )
        }

        if(userDepartment === "Comercial"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>            
                 <Link to="/links-comercial"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Comercial</span></li></Link>         
             </ul>
            )
         }

         if(userDepartment === "Comercial" && user === "FLÁVIA BAGATINI STEFANES"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>            
                 <Link to="/links-comercial"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Comercial</span></li></Link>                    
                 <Link to="/power-bi"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Power Bi</span></li></Link>                        
             </ul>
            )
         } 

         if(userDepartment === "Comercial" && user === "FERNANDA CRESPO CANDIDO"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>            
                 <Link to="/links-comercial"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Comercial</span></li></Link>                    
                 <Link to="/power-bi"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Power Bi</span></li></Link>                        
             </ul>
            )
         } 

         if(userDepartment === "Comercial" && user === "MICHELLE PASCINI SILVA"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>            
                 <Link to="/links-comercial"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Comercial</span></li></Link>                    
                 <Link to="/power-bi"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Power Bi</span></li></Link>                        
             </ul>
            )
         } 

         if(userDepartment === "Comercial" && user === "FILIPE MAIA MAFASSIOLI"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>            
                 <Link to="/links-comercial"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Comercial</span></li></Link>                    
                 <Link to="/power-bi"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Power Bi</span></li></Link>                        
             </ul>
            )
         }

         if(userDepartment === "Comercial" && user === "LAUAI TRIDAPALLI RODRIGUES CARRETA"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>            
                 <Link to="/links-comercial"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Comercial</span></li></Link>                    
                 <Link to="/power-bi"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Power Bi</span></li></Link>                        
             </ul>
            )
         }

         if(userDepartment === "Comercial" && user === "VITÓRIA CRISTINA ALVES PADILHA"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>            
                 <Link to="/links-comercial"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Comercial</span></li></Link>                    
                 <Link to="/power-bi"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Power Bi</span></li></Link>                        
             </ul>
            )
         }

         if(userDepartment === "Comercial" && user === "FERNANDO DE ANDRADE MUNIZ"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>            
                 <Link to="/links-comercial"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Comercial</span></li></Link>                    
                 <Link to="/power-bi"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Power Bi</span></li></Link>                        
             </ul>
            )
         }

         if(userDepartment === "Comercial" && user === "EVELIN EGGERT DA COSTA"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>            
                 <Link to="/links-comercial"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Comercial</span></li></Link>                    
                 <Link to="/power-bi"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Power Bi</span></li></Link>                        
             </ul>
            )
         }

         if(userDepartment === "Comercial" && user === "KARINA MICHEL"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>            
                 <Link to="/links-comercial"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Comercial</span></li></Link>                    
                 <Link to="/power-bi"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Power Bi</span></li></Link>                        
             </ul>
            )
         }

         if(userDepartment === "Comercial" && user === "KAROLINA FORTES GRAEFF"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>            
                 <Link to="/links-comercial"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Comercial</span></li></Link>                    
                 <Link to="/power-bi"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Power Bi</span></li></Link>                        
             </ul>
            )
         }

        if(userDepartment === "Comex"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>
             </ul>
            )
        }

        if(userDepartment === "Compras"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>
                 <Link to="/links-comercial"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Comercial</span></li></Link>         
             </ul>
            )
        }

        if(userDepartment === "Diretoria"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/cadastrar-rh-news"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Cadastrar RH News</span></li></Link>
                 <Link to="/colaborador"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Colaboradores</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>            
                 <Link to="/links-comercial"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Comercial</span></li></Link>            
                 {/* <Link to="/requisicoes"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Requisições</span></li></Link> */}
             </ul>
            )
         }

         if(userDepartment === "Expedição"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>
             </ul>
            )
        }

        if(userDepartment === "Faturamento"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>
                 <Link to="/links-comercial"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Comercial</span></li></Link>            
             </ul>
            )
        }

        if(userDepartment === "Gynoprep (Comercial)"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>
                 <Link to="/links-comercial"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Comercial</span></li></Link>            
             </ul>
            )
        }

        if(userDepartment === "Licitação (Comercial)"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>
                 <Link to="/links-comercial"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Comercial</span></li></Link>            
             </ul>
            )
        }

        if(userDepartment === "Logística"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>            
             </ul>
            )
        }

        if(userDepartment === "Marketing"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>            
             </ul>
            )
        }

        if(userDepartment === "Produção"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>            
             </ul>
            )
        }

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

        if(userDepartment === "SAC"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>            
             </ul>
            )
        }

        if(userDepartment === "Tecnologia"){
            setLinks(
             <ul id="menu-list">
                 <Link to="/"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Início</span></li></Link>
                 <Link to="/cadastrar-rh-news"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Cadastrar RH News</span></li></Link>
                 <Link to="/colaborador"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Colaboradores</span></li></Link>
                 <Link to="/links-uteis"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Úteis</span></li></Link>            
                 <Link to="/links-comercial"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Links Comercial</span></li></Link>            
                 <Link to="/power-bi"><li className=""><span className="item-menu-hover"></span><span className="item-menu">Power Bi</span></li></Link>                        
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