import './NewCollaborator.css'
import './PowerBi.css'
import Header from '../template/header/Header';
import NavMenu from '../template/nav_menu/NavMenu';
import { useEffect, useState } from 'react';
import { AuthContext } from '../Auth' 
import { useContext } from 'react'; 

function PowerBi(){

    const [render, setRender] = useState();
    const { user } = useContext(AuthContext);

    document.title = "Grupo Stra - Power Bi"

    useEffect(() => {
        if(user === "FLÁVIA BAGATINI STEFANES"){
            setRender(<iframe title="Grupo Stra - 1. Flavia Bagatini - Geral" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiYjE2OWI1ZWItZjNhNS00YzlmLWJkYjQtODliNmUwYjE0MWJiIiwidCI6ImZjNmQ5OWE1LTRjZTAtNGQ3Ny04MDA4LWE0NDEzMjI1OGJjZiJ9" frameborder="0" allowFullScreen="true"></iframe>)
        }

        if(user === "FILIPE MAIA MAFASSIOLI"){
            setRender(<iframe title="Grupo Stra - 1.1 Filipe Maia" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiNDdhNGU5YjQtYTJiMC00NDZlLTg1NjgtNzdjOGNhZDBmMTlhIiwidCI6ImZjNmQ5OWE1LTRjZTAtNGQ3Ny04MDA4LWE0NDEzMjI1OGJjZiJ9&pageName=ReportSection523e10ad4c42d9b20508" frameborder="0" allowFullScreen="true"></iframe>)
        }

        if(user === "LAUAI TRIDAPALLI RODRIGUES CARRETA"){
            setRender(<iframe title="Grupo Stra - 1.2 Lauai Rodrigues " width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMmE3MmJhOGUtNmQzOS00OWJhLWE3ZjYtNDA2MGZhM2M3YzI3IiwidCI6ImZjNmQ5OWE1LTRjZTAtNGQ3Ny04MDA4LWE0NDEzMjI1OGJjZiJ9&pageName=ReportSection523e10ad4c42d9b20508" frameborder="0" allowFullScreen="true"></iframe>)
        }

        if(user === "VITÓRIA CRISTINA ALVES PADILHA"){
            setRender(<iframe title="Grupo Stra - 1.3 Vitoria Padilha - Geral" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiYjBhYjYyOGItNDQ2Yy00NmE1LWE5Y2QtNzNlNmI3ODdlZjA3IiwidCI6ImZjNmQ5OWE1LTRjZTAtNGQ3Ny04MDA4LWE0NDEzMjI1OGJjZiJ9" frameborder="0" allowFullScreen="true"></iframe>)
        }

        if(user === "FERNANDO DE ANDRADE MUNIZ"){
            setRender(<iframe title="Grupo Stra - 2. Fernando Muniz - Geral" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiYjYzZGVmNTItODRjNS00M2JhLTgyZGMtYjVhYjExNzM4Mzc0IiwidCI6ImZjNmQ5OWE1LTRjZTAtNGQ3Ny04MDA4LWE0NDEzMjI1OGJjZiJ9" frameborder="0" allowFullScreen="true"></iframe>)
        }

        if(user === "EVELIN EGGERT DA COSTA"){
            setRender(<iframe title="Grupo Stra - 2.1 Evelin Eggert - Geral" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiNmZjOWU1M2YtZDIzNS00MzM5LWFjNTctNGMwMWJhOGJlMzk4IiwidCI6ImZjNmQ5OWE1LTRjZTAtNGQ3Ny04MDA4LWE0NDEzMjI1OGJjZiJ9" frameborder="0" allowFullScreen="true"></iframe>)
        }

        if(user === "KARINA MICHEL"){
            setRender(<iframe title="Grupo Stra - 2.2 Karina Michel - Geral" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiOWFlM2EyYWQtMWI5My00ZjJmLTg1NDgtZTVkNzk4MDRmNGJmIiwidCI6ImZjNmQ5OWE1LTRjZTAtNGQ3Ny04MDA4LWE0NDEzMjI1OGJjZiJ9" frameborder="0" allowFullScreen="true"></iframe>)
        }

        if(user === "KAROLINA FORTES GRAEFF"){
            setRender(<iframe title="Grupo Stra - 2.3 Karolina Graeff - Geral" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiNTBiNzM4NjUtN2U0YS00N2JhLTkyNTMtZWZiZjY1ODk1NTdlIiwidCI6ImZjNmQ5OWE1LTRjZTAtNGQ3Ny04MDA4LWE0NDEzMjI1OGJjZiJ9" frameborder="0" allowFullScreen="true"></iframe>)
        }

        if(user === "Gabriel Müller Oliveira"){
            setRender(<iframe title="Grupo Stra - 2.3 Karolina Graeff - Geral" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiNTBiNzM4NjUtN2U0YS00N2JhLTkyNTMtZWZiZjY1ODk1NTdlIiwidCI6ImZjNmQ5OWE1LTRjZTAtNGQ3Ny04MDA4LWE0NDEzMjI1OGJjZiJ9" frameborder="0" allowFullScreen="true"></iframe>)
        }

        if(user === "MICHELLE PASCINI SILVA"){
            setRender(<iframe title="Grupo Stra - Comercial - Geral" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMDA1MmUzY2UtNTNlYy00MTQ5LTlhZTItODI2ZjMzYTI5OTJmIiwidCI6ImZjNmQ5OWE1LTRjZTAtNGQ3Ny04MDA4LWE0NDEzMjI1OGJjZiJ9" frameborder="0" allowFullScreen="true"></iframe>)
        }

        if(user === "FERNANDA CRESPO CANDIDO"){
            setRender(<iframe title="Grupo Stra - Comercial - Geral" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMDA1MmUzY2UtNTNlYy00MTQ5LTlhZTItODI2ZjMzYTI5OTJmIiwidCI6ImZjNmQ5OWE1LTRjZTAtNGQ3Ny04MDA4LWE0NDEzMjI1OGJjZiJ9" frameborder="0" allowFullScreen="true"></iframe>)
        }
        
    }, [user])

    return(
        <div id="body-main" className="body-main home open">
            <Header />
            <div className="main">
                <div id="side-bar" className="side-bar open">
                    <NavMenu />
                </div>
            <div id="power-bi-container" className="body">
                {render}
            </div>
        </div>
    </div>
    )
}

export default PowerBi;
