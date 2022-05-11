import { Component, useState } from 'react';
import './Requests.css'
import Header from '../template/header/Header';
import NavMenu from '../template/nav_menu/NavMenu';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Legend from '../components/Legend'
import Input from '../components/Input'

function Requests(){
  document.title = "Grupo Stra - Communication"

  const [searchTerm, setSearchTerm] = useState();
  return(
    <div id="body-main" className="body-main home open">
      <Header />
        <div className="main">
          <div id="side-bar" className="side-bar open">
            <NavMenu />
          </div>
          <div className="body">    
        </div>
            <div className="row">
                <div className="col-2">
                <div className="rh-news container">
                  <div className="ramais-body">
                    <div className="holidays-container">
                      <div className="search-name">
                        <h1>Solicitações de Férias</h1>
                        <Legend value="Buscar por nome:"/>
                        <Input type="text" name="search" id="search" onChange={(e) => setSearchTerm(e.target.value)}/>
                      </div>
                      <table className='requests-table'>
                          <tr>
                              <th>Data da Saída</th>
                              <th>Data do Retorno</th>
                              <th>Data de Solicitação</th>
                              <th>Status</th>
                          </tr>
                          <tr>
                              <td>23/05/2021</td>
                              <td>23/05/2022</td>
                              <td>23/05/2022</td>
                              <td>Em análise</td>
                          </tr>
                      </table>
                  </div>
                  <div className="attests-container">
                    <div className="search-name">
                        <h1>Entrega de Atestados</h1>
                        <Legend value="Buscar por nome:"/>
                        <Input type="text" name="search" id="search" onChange={(e) => setSearchTerm(e.target.value)}/>
                      </div>
                      <table className='requests-table'>
                          <tr>
                              <th>Data da Ausência</th>
                              <th>Motivo</th>
                              <th>Entrega do Atestado</th>
                              <th>Status</th>
                          </tr>
                          <tr>
                              <td>23/05/2021</td>
                              <td>Consulta</td>
                              <td>23/05/2022</td>
                              <td>Registrado</td>
                          </tr>
                          <tr>
                              <td>23/05/2021</td>
                              <td>Consulta</td>
                              <td>23/05/2022</td>
                              <td>Registrado</td>
                          </tr>
                      </table>
                  </div>
                  <div className="refounds-container">
                  <div className="search-name">
                        <h1>Solicitação de Reembolsos</h1>
                        <Legend value="Buscar por nome:"/>
                        <Input type="text" name="search" id="search" onChange={(e) => setSearchTerm(e.target.value)}/>
                      </div>
                      <table className='requests-table'>
                          <tr>
                              <th>Data Saída</th>
                              <th>Data Retorno</th>
                              <th>Data de Solicitação</th>
                              <th>Status</th>
                          </tr>
                          <tr>
                              <td>23/05/2021</td>
                              <td>23/05/2022</td>
                              <td>23/05/2022</td>
                              <td>Em análise</td>
                          </tr>
                          <tr>
                              <td>23/05/2021</td>
                              <td>Consulta</td>
                              <td>23/05/2022</td>
                              <td>Registrado</td>
                          </tr>
                          <tr>
                              <td>23/05/2021</td>
                              <td>Consulta</td>
                              <td>23/05/2022</td>
                              <td>Registrado</td>
                          </tr>
                      </table>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>         
  </div>
  )
}

export default Requests;
