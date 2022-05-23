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

  document.title = "Grupo Stra - Communication"

  var arrayLinks = {
    links: [
      {
        setorTitle:'Suporte TI',
        lista: [
          {
            name: 'Suporte Técnico',
            link: 'https://forms.clickup.com/f/2yd14-12083/VEP0XG9JCRGMGDDRNX'
          }
        ]
      },
      {
        setorTitle:'Compras',
        lista: [
          {
            name: 'Solicitação de Compra',
            link: 'https://forms.clickup.com/f/2yd14-1956/82VJMP1E0WORLYVOD5'
          }
        ]
      },
      {
        setorTitle:'Faturamento',
        lista: [
          {
            name: 'Devolução/Cancelamento de NF',
            link: 'https://forms.clickup.com/f/2yd14-4383/XXVPBZJPCQWGXWSHFG'
          },
          {
            name: 'Atualização de Cadastro de Clientes',
            link: 'https://forms.clickup.com/f/2yd14-5723/YRT0ZFZ4AQ2T9HT49A'
          },
          {
            name: 'Transferência de Itens',
            link: 'https://forms.clickup.com/f/2yd14-2313/K1HMG27TH8OTH4YU37'
          },
          {
            name: 'Envio de Amostra e Demonstração',
            link: 'https://forms.clickup.com/3093540/f/2yd14-14382/JNO2EDM16GYRP1XKTP'
          }
        ]
      },
      {
        setorTitle:'Financeiro',
        lista: [
          {
            name: 'Relatório de Despesas (Reembolso)',
            link: 'https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Relatorio_de_viagem_Stra_medical_1.xlsx?v=1652189836'
          }
        ]
      },
      {
        setorTitle:'Logística',
        lista: [
          {
            name: 'Barrar Entrega',
            link: 'https://forms.clickup.com/f/2yd14-4043/N5X8SAQSEC4ZQIVJ5U'
          },
          {
            name: 'Envio de Amostra',
            link: 'https://forms.clickup.com/f/2yd14-5483/0VS5UEG2TITMIC04S1'
          },
          {
            name: 'Agendamento de Entrega',
            link: 'https://forms.clickup.com/f/2yd14-6663/ATFJ72ISUK35Z37N7S'
          },
          {
            name: 'Solicitação de Coleta Reversa',
            link: 'https://forms.clickup.com/f/2yd14-9163/018ZX5V17GQWP3CCHR'
          }
        ]
      },
      {
        setorTitle:'Marketing',
        lista: [
          {
            name: 'Solicitação e/ou Ideias',
            link: 'https://forms.clickup.com/f/2yd14-5343/2AH8DARUO2LARKK6TC'
          },
          {
            name: 'Novo Colaborador',
            link: 'https://forms.clickup.com/3093540/f/2yd14-5603/HNLLZUTN6U8DA1QMYF'
          }
        ]
      },
      {
        setorTitle:'RH',
        lista: [
          {
            name: 'Envio de Atestados/ Declarações',
            link: 'https://forms.clickup.com/f/2yd14-1102/FSUMXR133Z9CQN6EVQ?utm_campaign=rh_news_-_2705_-_atestados&utm_medium=email&utm_source=RD%20Station'
          }
        ]
      },
      {
        setorTitle:'Ferramentas',
        lista: [
          {
            name: 'Dashboard API',
            link: 'https://api.grupostra.com/'
          }
        ]
      }
    ]
  };

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

  useEffect(() => {
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

    if(urlSelected === "19"){
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
  }, [urlByIdData])

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
                        <div className="title-rh-news">
                          <select name="url-links" id="url-links" onChange={(e) => setUrlSelected(e.target.value)}>       
                            <option value="0" >Links úteis</option>        
                            {
                              urlData.map((item, i) => 
                                <option key={i} value={item?.id}>{item?.name}</option>                              
                              )
                            }
                          </select>
                          <Link to="/cadastrar-link">Cadastrar Link <AddCircleOutlineIcon /></Link>
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
  )
}

export default LinksComercial;
