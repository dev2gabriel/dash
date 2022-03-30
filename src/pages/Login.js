import styles from './Login.module.css'
import Legend from '../components/Legend'
import Input from '../components/Input'
import Form from '../containers/Form'
import Container from '../containers/Container'
import logoImg from '../assets/grupostra_horizontal_2_180x.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import axios from 'axios';
import { useState, useContext } from 'react';
import { AuthContext } from '../Auth';

function Login(){
    const styledContainer = {
        display: "grid",
        gridTemplateColumns: "70% 30%",
        padding: "0px",
        height: "88vh"
    }

    const styledForm = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        justifyContent: "space-around",
        height: "100%"
    }

    const styledInput = {
        border: "0px",
        borderBottom: "2px solid black",
        padding: "15px 0px",
        outline: "none",
        fontSize: "18px",
        marginBottom: "10px"
    }

    const styledSubmit = {
        backgroundColor: "var(--azul-grupo)",
        color: "white",
        fontSize: "15px",
        padding: "15px",
        borderRadius: "20px",
        border: "none",
        cursor: "pointer",
    }

    const styledLegend = {
        fontWeight: "bold",
        fontSize: "14px",
        marginBottom: "10px"
    }

    const styledCheckbox = {
        marginLeft: "10px",
    }

    return(
        <div className={styles.login_screen}>
            <Container style={styledContainer}>
                <div className={styles.login_left}>
                    <div className={styles.left_header}>
                        <img src={logoImg} />
                    </div>
                    <div className={styles.left_bottom}>
                        <h1>Bem Vindo(a)</h1>
                        <p>Se você não segue ainda nossas redes sociais, aproveite e acesse para conferir nossas postagens.</p>
                        <div className={styles.social_logos}>
                            <a href="https://www.instagram.com/grupo_stra/" target="_blank"><InstagramIcon /></a>
                            <a href="https://www.linkedin.com/company/grupo-stra" target="_blank"><LinkedInIcon /></a>
                            <a href="https://www.facebook.com/grupostra" target="_blank"><FacebookIcon /></a>
                        </div>
                    </div>
                </div>
                <div className={styles.login_right}>
                    <h1>Entrar</h1>
                    <Form style={styledForm}>
                        <Legend value="Email" style={styledLegend}/>
                        <Input type="email" name="email" id="email" placeholder="usuario@grupostra.com.br" style={styledInput}/>
                        <Legend value="Senha" style={styledLegend}/>
                        <Input type="password" name="pass" id="pass" placeholder="Sua senha" style={styledInput}/>
                        <div>
                            <Input type="checkbox" name="check" id="check" />
                            <Legend for="check" value="Manter conectado" style={styledCheckbox}/>
                        </div>
                        <Input type="submit" value="Entrar" style={styledSubmit}/>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default Login