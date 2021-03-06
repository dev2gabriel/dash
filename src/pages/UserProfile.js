import Header from '../template/header/Header';
import NavMenu from '../template/nav_menu/NavMenu';
import './UserProfile.css'
import { useRef, useEffect, useState } from 'react'
import { useContext } from 'react'; 
import { AuthContext } from '../Auth' 
import axios from 'axios';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SectorIcon from '../assets/noun-job-2043818.svg'
import OfficeIcon from '../assets/noun-user-name-4162838.svg' 
import { useParams } from "react-router-dom";

function UserProfile(){

    const [content, setContent] = useState()
    const [rhImage, setRhImage] = useState()
    const [title, setTitle] = useState()
    const [subTitle, setSubTitle] = useState()
    const [textBody, setTextBody] = useState(content)
    const [data, setData] = useState([])
    
    const { token } = useContext(AuthContext);

    const { userId } = useParams();

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
            url: 'http://api-dash.grupostra.com/api/v1/post/create',
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
        axios.get(`http://api-dash.grupostra.com/api/v1/user/show/${userId}`, configB)
        .then((response) => {
            setData(response.data)
        }).catch(function(err){
            window.location = "/";
        })
    }, []);

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
                                <h1>Solicita????es de F??rias</h1>
                                <table className='requests-table'>
                                    <tr>
                                        <th>Data da Sa??da</th>
                                        <th>Data do Retorno</th>
                                        <th>Data de Solicita????o</th>
                                        <th>Status</th>
                                    </tr>
                                </table>
                            </div>
                            <div className="attests-container">
                                <h1>Entrega de Atestados</h1>
                                <table className='requests-table'>
                                    <tr>
                                        <th>Data da Aus??ncia</th>
                                        <th>Motivo</th>
                                        <th>Entrega do Atestado</th>
                                        <th>Status</th>
                                    </tr>
                                </table>
                            </div>
                            <div className="refounds-container">
                                <h1>Solicita????es de Reembolsos</h1>
                                <table className='requests-table'>
                                    <tr>
                                        <th>Data Sa??da</th>
                                        <th>Data Retorno</th>
                                        <th>Data de Solicita????o</th>
                                        <th>Status</th>
                                    </tr>                                    
                                </table>
                            </div>
                        </div>
                    </div>
                        <div className="col-1">
                            <div className="rh-news container">
                                <div className="user-header">
                                    <div className="user-img">
                                        <img src={data?.user?.photo_url} alt="" />
                                    </div>
                                </div>
                                <div className="user-info">
                                    <div className="line-user">
                                        <div className="line-icon">
                                            <PersonIcon />
                                        </div>
                                        <p>{data?.user?.name}</p>
                                    </div>
                                    <div className="line-user">
                                        <div className="line-icon">
                                            <object data={SectorIcon}/>
                                        </div>
                                        <p>{data?.user?.department?.name}</p>
                                    </div>
                                    <div className="line-user">
                                        <div className="line-icon">
                                            <object data={OfficeIcon}/>
                                        </div>
                                        <p>{data?.user?.position}</p>
                                    </div>
                                    <div className="line-user">
                                        <div className="line-icon">
                                            <EmailIcon />
                                        </div>
                                        <p>{data?.user?.email}</p>
                                    </div>
                                    <div className="line-user">
                                        <div className="line-icon">
                                            <PhoneInTalkIcon />
                                        </div>
                                        <p>Ramal {data?.user?.extension_number}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>         
                <div className="div-adjust">
                    <div className="col-1">
                        <div className="rh-news container">
                            <h1>Equipamentos</h1>
                            <table className='user-equipaments'>
                                <tr>
                                    <th>Item</th>
                                    <th>N??mero do Patrim??nio</th>
                                    <th>Estado</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default UserProfile