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

function LinksUteis(){

  document.title = "Grupo Stra - Links Uteis"

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
              },
              {
                name: 'Recibo de Compra',
                link: 'https://cdn.shopify.com/s/files/1/0534/2812/5857/files/RECIBO_DE_COMPRA.docx?v=1653569579'
              },
              {
                name: 'Solicitação de Compra',
                link: 'https://docs.google.com/forms/d/e/1FAIpQLSfchLucaJGnCqg1VxkyE1Jpi-RflwNIS3YVuRgLMTRY5aX9GA/viewform'
              },{
                name: 'Recibo de Hospedagem',
                link: 'https://docs.google.com/forms/d/e/1FAIpQLSdg84WlWzaRnRS6Dad6VySelEvtG67UJoo3wj5Glag2FX8usQ/viewform'
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
                            </div>
                                <div className="content">
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

export default LinksUteis;
