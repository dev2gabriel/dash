import Header from '../template/header/Header';
import NavMenu from '../template/nav_menu/NavMenu';
import Legend from '../components/Legend'
import Input from '../components/Input'
import Button from '../components/Button'
import './NewRhNews.css'
import { useState, useRef, useMemo, useEffect } from 'react'
import { useContext } from 'react'; 
import { AuthContext } from '../Auth' 
import axios from 'axios';
import './RequestHolidays.css'

function RequestHolidays(){
    
    const { token } = useContext(AuthContext);

    function submitFields(){
        axios({
            method: 'post',
            url: 'http://api-dash.grupostra.com/api/v1/post/create',
            /* data:{
                title: title,
                body: textBody,
                button: null,
                link: null,
                image: null
            }, */
            headers: {'Authorization' : `Bearer ${token}`}
        })
        .then((response) => {
             console.log(response.data)
        })
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
                        <div className="request-holidays container">
                            <div className='form'>
                                <h1 className="title_register">Solicitar Férias</h1>
                                <div className="line">
                                    <div className="line_flex">
                                        <Legend value="Nome Completo" />
                                        <Input type="text" name="name" id="name" />
                                    </div>
                                </div>
                                <div className="line">
                                    <div className="line_flex">
                                        <Legend value="Começo das Férias" />
                                        <Input type="date" name="date-vacation-on" id="date-vacation-on" />
                                    </div>
                                    <div className="line_flex">
                                        <Legend value="Retorno das Férias" />
                                        <Input type="date" name="date-vacation-off" id="date-vacation-off" />
                                    </div>
                                </div>
                                <div className="line">
                                    <div className="line_flex">
                                        <Button type="submit"  value="Cadastrar" />
                                    </div>
                                    <div className="line_flex">
                                        <a onClick={() => document.location = "/"} >Voltar</a>
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

export default RequestHolidays