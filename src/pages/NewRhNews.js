import Header from '../template/header/Header';
import NavMenu from '../template/nav_menu/NavMenu';
import Legend from '../components/Legend'
import Input from '../components/Input'
import Button from '../components/Button'
import './NewRhNews.css'
import { useState, useRef, useMemo, useEffect } from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import EditIcon from '@mui/icons-material/Edit';
import JoditEditor from "jodit-react";
import { useContext } from 'react'; 
import { AuthContext } from '../Auth' 
import axios from 'axios';

function NewRhNews(){

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
                                <div className="container_rh">
                                    <h1 className="title_register">Cadastrar Rh News</h1>
                                    <div className='form'>
                                        <div className="line">
                                            <Legend value="Título" />
                                            <Input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)}/>
                                        </div>
                                        <div className="line">
                                            <div className="line_flex">
                                                <Legend value="Sub Título" />
                                                <Input type="text" name="sub-title" id="sub-title" onChange={(e) => setSubTitle(e.target.value)}/>
                                                </div>
                                        </div>
                                        <div className="line_flex">
                                            <label htmlFor="file" className="input_img">Enviar Imagem <FileUploadIcon /></label>
                                            <input type="file" name="file" id="file" onChange={(e) => setRhImage(e.target.files[0])} />
                                            {rhImage ? <img src={URL.createObjectURL(rhImage)} /> : <img src="" />}
                                        </div>
                                        <div className="line_flex">
                                            <JoditEditor
                                                ref={editor}
                                                value={textBody}
                                                config={config}
                                                tabIndex={1} // tabIndex of textarea
                                                onBlur={newContent => setTextBody(newContent)} // preferred to use only this option to update the content for performance reasons
                                                onChange={newContent => {}}
                                            />
                                        </div>
                                        <div className="line">
                                            <div className="line_flex">
                                                <a onClick={() => document.location.reload(true)} >Limpar Campos</a>
                                            </div>
                                            <div className="line_flex">
                                                <Button type="submit" value="Cadastrar" onClick={submitFields} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="rh-news container">
                                <h1>Últimos lançados</h1>
                                <div className='last_news'> 
                                {
                                    data.map((index, i) => 
                                        <div key={i} className="line_last">
                                            <p>{index?.title}</p>
                                            <div className="date_div">
                                                <a href="#" id={index.id} onClick={(e) => handleEditItem(e)}>Editar <EditIcon /></a>
                                                <p>{index?.created_at.slice(0, 10).split('-').reverse().join('/')}</p>
                                            </div>
                                        </div>
                                    ).reverse()
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>         
            </div>
        
    )
}

export default NewRhNews