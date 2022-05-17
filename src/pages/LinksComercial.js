import './NewCollaborator.css'
import Header from '../template/header/Header';
import NavMenu from '../template/nav_menu/NavMenu';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './LinksComercial.css'

function LinksComercial(){

  document.title = "Grupo Stra - Communication"

  var arrayLinks = {
    links: [
        {
          setorTitle:'Catálogos - Perfil de Cliente',
          lista: [
            {
              name: 'Banco de Sangue',
              link: 'https://cdn.shopify.com/s/files/1/0534/2812/5857/files/banco-de-sangue.pdf?v=1639449171'
            },
            {
              name: 'Distribuidor/Revenda',
              link: 'https://catalogos.grupostra.com/distribuidor'
            },
            {
              name: 'Hospitalar',
              link: 'https://catalogos.grupostra.com/cfhospitalar'
            },
            {
              name: 'Laboratorial',
              link: 'https://catalogos.grupostra.com/laboratorial'
            },
            {
              name: 'PDV',
              link: 'https://catalogos.grupostra.com/pdv'
            }
          ]
        },
        {
          setorTitle:'Catálogos - Representantes (uso exclusivo supervisor comercial)',
          lista: [
            {
              name: 'Representante Distribuidor',
              link: 'https://catalogos.grupostra.com/representantedistribuidor'
            },
            {
              name: 'Representante Hospitalar',
              link: 'https://catalogos.grupostra.com/representante-hospitalar'
            },
            {
              name: 'Representante PDV',
              link: 'https://catalogos.grupostra.com/representante-pdv'
            }
          ]
        },
        {
          setorTitle:'Referências Comerciais',
          lista: [
            {
              name: 'Referências Comerciais',
              link: 'https://drive.google.com/drive/u/0/folders/1I8fQ_b3C_JOg9SSria9nRE4shwpDApq4'
            }
          ]
        },
        {
          setorTitle:'Documentos - Produtos',
          lista: [
            {
              name: 'AMA RUT Pro - Teste de Urease',
              link: 'https://drive.google.com/drive/folders/1O_a8D2kRxBwXpNbjAadW6KcUm1oaKwhB'
            },
            {
              name: 'Banco de Sangue',
              link: 'https://grupostra.com.br/pages/catalogo-banco-de-sangue'
            },
            {
              name: 'Bolsa Pressurizadora',
              link: 'https://drive.google.com/drive/folders/1Tp6bCcIHW-JvjKiGzPcfTwZ-C3unZrTO'
            },
            {
              name: 'Bug Bite',
              link: 'https://drive.google.com/drive/folders/1qazww2YG7tWD0hpgSb-WPSK4VjHnwWaA?usp=sharing'
            },
            {
              name: 'Centrífuga de Tubos - SM4000',
              link: 'https://drive.google.com/drive/folders/1mlmt4FEPFD3N4Un4HkH0pRoKoMAfiSLe'
            },
            {
              name: 'Colchão Pneumático',
              link: 'https://drive.google.com/drive/folders/1XYMSlLTEO_CsjWGfUhC5KtRcIzehgHyM'
            },
            {
              name: 'DEA - i5 - Amoul',
              link: 'https://drive.google.com/drive/folders/19lDeZ7Iec78ZqF4czgMhrhB-PdxGFpDE'
            },
            {
              name: 'Flux Air - Dilatador Nasal',
              link: '#'
            },
            {
              name: 'Frasco Biópsia com Formol 10% - HistoPot',
              link: 'https://drive.google.com/drive/folders/1svgG8A6l3ljLOgJBAgAeAQo6zkwWmdbo'
            },
            {
              name: 'Frasco Coletor Plástico 40 ml - Stra Medical',
              link: 'https://drive.google.com/drive/folders/1IASZi5y28khVgC2Gz2Zlz2maxtznTcA7'
            },
            {
              name: 'KIGI - Porta Comprimidos Inteligente',
              link: '#'
            },
            {
              name: 'Laringoscópios - Scope Medical',
              link: 'https://drive.google.com/drive/folders/14u1roKcdRwLQVjWAg7VTT9qYFmuRhhUG'
            },
            {
              name: 'Lavador de Ouvido',
              link: 'https://drive.google.com/drive/folders/1Awdx493z9kXB0uyWr13MPw_Xa_ddv8C3'
            },
            {
              name: 'Luvas de Procedimento - MR Safety',
              link: 'https://drive.google.com/drive/folders/1XReivIJwA2aVkHwXOp-uoEm4pXkluGaC'
            },
            {
              name: 'Oxímetro de Pulso - BM1000',
              link: 'https://drive.google.com/drive/folders/13SYiwFqs7ACfCeqYr_1fMgJLkF_WIYcq'
            },
            {
              name: 'Oxímetro de Pulso - 7500FO - Nonin',
              link: '#'
            },
            {
              name: 'Pistola de Limpeza e Secagem - EasyClean',
              link: 'https://drive.google.com/drive/folders/1Ut_qeFWLjoZL01y5qqDYzQ9ifknKLZw-'
            },
            {
              name: 'Reanimador Manual',
              link: 'https://drive.google.com/drive/folders/1pQc4YmIY0WZTo-v0LIE2zWHZPD9di-pz'
            },
            {
              name: 'Termômetro Infravermelho - E125',
              link: 'https://drive.google.com/drive/folders/1JzuzEveS0nAStQHT9JCQa7C3Wmg3WP6D'
            },
            {
              name: 'Teste Rápido Ag SARS-COV-2 - Egens',
              link: '#'
            },
            {
              name: 'Ventilador Pulmonar T5 - Amoul',
              link: '#'
            }
          ]
        },
        {
          setorTitle:'Treinamentos - Produtos',
          lista: [
            {
              name: 'DEA Amoul',
              link: 'https://drive.google.com/drive/u/0/folders/1jz61Dn0QjGwFP9omXYjeh6hava5XoqJQ'
            },
            {
              name: 'Oxímetro 7500FO Nonin',
              link: 'https://drive.google.com/drive/u/0/folders/1nIzDAxz27kssNBId0IKoWgiuMDDz0AhQ'
            },
            {
              name: 'Laringoscópios',
              link: 'https://drive.google.com/drive/u/0/folders/1hyuYPiRN82iWijnpT0soHcAhyZ8Dooyw'
            }
          ]
        },
        {
          setorTitle:'Tutoriais',
          lista: [
            {
              name: 'Criar contrato',
              link: 'https://www.figma.com/proto/iVSdT2s9f6jHNbHU7Wv6ty/Demo-Assinatura-Clicksign-v2.0?page-id=0%3A1&node-id=7%3A62&viewport=320%2C389%2C0.055961474776268005&scaling=min-zoom'
            },
            {
              name: 'Assinar Contrato - Clicksign',
              link: 'https://www.figma.com/proto/iVSdT2s9f6jHNbHU7Wv6ty/Demo-Assinatura-Clicksign-v2.0?page-id=0%3A1&node-id=7%3A43&viewport=320%2C389%2C0.055961474776268005&scaling=min-zoom'
            }
          ]
        }
    ]
  };

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
                          <h3>Links Comercial</h3>
                          <Link to="/cadastrar-link">Cadastrar Link <AddCircleOutlineIcon /></Link>
                        </div>
                            <div className="content">
                            {arrayLinks.links.map((setor, i) => (
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
                            ))}
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
