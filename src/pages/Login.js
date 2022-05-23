import './Login.css'
import Legend from '../components/Legend'
import Input from '../components/Input'
import Button from '../components/Button'
import logoImg from '../assets/grupostra_horizontal_2_180x.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import axios from 'axios';
import { useState, useContext } from 'react';
import { AuthContext } from '../Auth';

function Login(){
    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();
    const { login } = useContext(AuthContext)
    
    const body = {
        email: userEmail,
        password: userPassword
    }

    function submitFields(){
        axios.post("https://pedidos.grupostra.com/api/v1/login", body)
        .then((response) => {
            login(response.data);
        })
    }

    return(
        <div className="login_screen">
            <div className="container_login">
                <div className="login_left">
                    <div className="left_header">
                        <img src={logoImg} alt=""/>
                    </div>
                    <div className="left_bottom">
                        <h1>Bem Vindo(a)</h1>
                        <p>Se você não segue ainda nossas redes sociais, aproveite e acesse para conferir nossas postagens.</p>
                        <div className="social_logos">
                            <a href="https://www.instagram.com/grupo_stra/" target="_blank"><InstagramIcon /></a>
                            <a href="https://www.linkedin.com/company/grupo-stra" target="_blank"><LinkedInIcon /></a>
                            <a href="https://www.facebook.com/grupostra" target="_blank"><FacebookIcon /></a>
                        </div>
                    </div>
                </div>
                <div className="login_right">
                    <h1>Entrar</h1>
                    <div className="form">
                        <div className="credentials-line">
                            <Legend value="Email"/>
                            <Input type="email" name="email" id="email" placeholder="usuario@grupostra.com.br" onChange={(e) => setUserEmail(e.target.value)}/>
                        </div>
                        <div className="credentials-line">
                            <Legend value="Senha"/>
                            <Input type="password" name="pass" id="pass" placeholder="Sua senha" onChange={(e) => setUserPassword(e.target.value)}/>
                        </div>
                        <Button type="submit" value="Entrar" onClick={submitFields}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login