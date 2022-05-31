import './NewCollaborator.css'
import Header from '../template/header/Header';
import NavMenu from '../template/nav_menu/NavMenu';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './LinksComercial.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react'; 
import { AuthContext } from '../Auth' 

function LinksComercial(){

  document.title = "Grupo Stra - Links Comercial"

  const { token } = useContext(AuthContext);
  const [urlData, setUrlData] = useState([])
  const [urlByIdData, setUrlByIdData] = useState([])
  const [urlSelected, setUrlSelected] = useState("0")
  const [rendered, setRendered] = useState()

  const configB = {
    headers: { Authorization: `Bearer ${token}` }
}

  useEffect(() => {
    axios.get('https://pedidos.grupostra.com/api/v1/links', configB)
    .then((response) => {
        setUrlData(response.data)
    })
  }, [])

  useEffect(() =>{
    axios.get(`https://pedidos.grupostra.com/api/v1/links/categories/${urlSelected}`, configB)
    .then((response) => {
        setUrlByIdData(response.data)
    })
  }, [urlSelected])

  /* useEffect(() => {
    if(urlSelected === "0"){
      setRendered(
        <>{
          arrayLinks.links.map((setor, i) => (
              <div key={i}>
              <div><h2>{setor.setorTitle}</h2></div>
              <ul>
                  {setor.lista.map((lista, e) => (
                  <div key={e}>
                      <li><a href={setor.lista[e].link} target="_blank">{setor.lista[e].name}</a></li>
                  </div>
                  ))}
              </ul>
              </div>
          ))
        }</>
      )
    }

    if(urlSelected === "2"){
      setRendered(
        <>{
          urlByIdData.map((page, i) => (
            <div key={i}>
              <div><h2>{page?.name}</h2></div>
              <ul>
                <div>
                  <li><a href={page.name} target="_blank">{page.name}</a></li>
                </div>
              </ul>
            </div>
          ))
        }</>
      )
    }
  }, [urlByIdData]) */

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
                          <div className="links-categories">
                            <div className="title-rh-news">
                              <select name="url-links" id="url-links" onChange={(e) => setUrlSelected(e.target.value)}>             
                                {
                                  urlData.map((item, i) => 
                                    <option key={i} value={item?.id}>{item?.name}</option>                              
                                  )
                                }
                              </select>
                              <div className="add-collaborator-btn">
                                <Link to="/cadastrar-link">Editar Links <AddCircleOutlineIcon /></Link>
                              </div>
                            </div>
                                <div className="content">
                                  { rendered }
                                </div>
                            </div>
                          </div>
                    </div>
                </div>         
            </div>
        </div>
    </div>
  )
}

export default LinksComercial;
