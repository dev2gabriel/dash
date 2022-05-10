import Header from '../template/header/Header';
import NavMenu from '../template/nav_menu/NavMenu';
import Legend from '../components/Legend'
import Input from '../components/Input'
import Button from '../components/Button'
import './UserProfile.css'
import { useRef, useEffect, useState } from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import EditIcon from '@mui/icons-material/Edit';
import JoditEditor from "jodit-react";
import { useContext } from 'react'; 
import { AuthContext } from '../Auth' 
import axios from 'axios';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SectorIcon from '../assets/noun-job-2043818.svg'
import OfficeIcon from '../assets/noun-user-name-4162838.svg' 

function UserProfile(){

    const [content, setContent] = useState()
    const [rhImage, setRhImage] = useState()
    const [title, setTitle] = useState()
    const [subTitle, setSubTitle] = useState()
    const [textBody, setTextBody] = useState(content)
    const [data, setData] = useState([])
    
    const { token } = useContext(AuthContext);

    const editor = useRef(null)

    const config = {
		readonly: false,
		placeholder: 'Digite seu texto'
	}

    const configB = {
        headers: { Authorization: `Bearer ${token}` }
    }

    function submitFields(){
        const photoData = new FormData()
        photoData.append('title', title)
        photoData.append('image', document.querySelector('input[type=file]').files[0])
        photoData.append('body', textBody)
        photoData.append('subtitle', subTitle)
        console.log(photoData)
        axios({
            method: 'post',
            url: 'https://pedidos.grupostra.com/api/v1/post/create',
            data: photoData,
            headers: {'Authorization' : `Bearer ${token}`, 'Content-Type': 'multipart/form-data'}
        })
        .then((response) => {
            alert("News Cadastrado com sucesso!")
            window.location = window.location.href;
        }).catch(function(error){ 
            if (error.response) {
                alert(error.response.data.message)
            }
        })
    }

    useEffect(() => {
        axios.get("https://pedidos.grupostra.com/api/v1/post", configB)
            .then((response) => {
              setData(response.data)  
        })
      }, []);


      function handleEditItem(e){
        e.preventDefault()
        let id = e.target.id
        window.location = `/editar-post/${id}`
      }

    return(
        <div id="body-main" className="body-main home open">
            <Header />
            <div className="main">
            <div id="side-bar" className="side-bar open">
                <NavMenu />
            </div>
            <div className="body"></div>
                <div className="row">
                    <div className="col-2">
                        <div className="rh-news container">
                            <div className="holidays-container">
                                <h1>Solicitações de Férias</h1>
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
                                <h1>Entrega de Atestados</h1>
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
                                <h1>Solicitações de Reembolsos</h1>
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
                        <div className="col-1">
                            <div className="rh-news container">
                                <div className="user-header">
                                    <div className="user-img">
                                        <img src="https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg" alt="" srcset="" />
                                    </div>
                                </div>
                                <div className="user-info">
                                    <div className="line-user">
                                        <div className="line-icon">
                                            <PersonIcon />
                                        </div>
                                        <p>João Pedro da Silva</p>
                                    </div>
                                    <div className="line-user">
                                        <div className="line-icon">
                                            <object data={SectorIcon}/>
                                        </div>
                                        <p>Tecnologia</p>
                                    </div>
                                    <div className="line-user">
                                        <div className="line-icon">
                                            <object data={OfficeIcon}/>
                                        </div>
                                        <p>Programador</p>
                                    </div>
                                    <div className="line-user">
                                        <div className="line-icon">
                                            <EmailIcon />
                                        </div>
                                        <p>tecnologia@grupostra.com.br</p>
                                    </div>
                                    <div className="line-user">
                                        <div className="line-icon">
                                            <PhoneInTalkIcon />
                                        </div>
                                        <p>Ramal 351</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>         
                <div className="col-1">
                    <div className="rh-news container">
                        <h1>Equipamentos</h1>
                        <table className='user-equipaments'>
                            <tr>
                                <th>Item</th>
                                <th>Número do Patrimônio</th>
                                <th>Estado</th>
                            </tr>
                            <tr>
                                <td>Notebook</td>
                                <td>01010201</td>
                                <td>Novo</td>
                            </tr>
                            <tr>
                                <td>Monitor Dell 23</td>
                                <td>01010222</td>
                                <td>Novo</td>
                            </tr>
                            <tr>
                                <td>Monitor Dell 23</td>
                                <td>01010211</td>
                                <td>Novo</td>
                            </tr>
                            <tr>
                                <td>Teclado</td>
                                <td></td>
                                <td>Novo</td>
                            </tr>
                            <tr>
                                <td>Mouse</td>
                                <td></td>
                                <td>Novo</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
    )
}

export default UserProfile