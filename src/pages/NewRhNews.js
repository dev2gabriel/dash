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
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function NewRhNews(){

    document.title = "Grupo Stra - RH News"

    const [content, setContent] = useState()
    const [rhImage, setRhImage] = useState()
    const [title, setTitle] = useState()
    const [subTitle, setSubTitle] = useState()
    const [textBody, setTextBody] = useState(content)
    const [data, setData] = useState([])
    const [flag, setFlag] = useState()
    var deleteConfirmation;
    const [modal, setModal] = useState(document.querySelector('.confirmation-modal'))
    
    const { token } = useContext(AuthContext);

    const editor = useRef(null)

    const config = {
		readonly: false,
		placeholder: 'Digite seu texto'
	}

    const configB = {
        headers: { Authorization: `Bearer ${token}` }
    }

    function submitDraft(){
        const photoData = new FormData()
        
        if(rhImage){
            photoData.append('image', rhImage)
        }

        photoData.append('title', title)
        photoData.append('body', textBody)
        photoData.append('subtitle', subTitle)
        photoData.append('tag', flag)
        photoData.append('is_published', 1)
        photoData.append('_method', 'POST')

        photoData.append('_method', 'POST')
        axios({
            method: 'POST',
            url: 'http://api-dash.grupostra.com/api/v1/post/create',
            data: photoData,
            headers: {'Authorization' : `Bearer ${token}`, 'Content-Type': 'multipart/form-data', '_method': 'POST'}
        })
        .then((response) => {
            alert("Rascunho salvo com sucesso!")
            window.location = window.location.href;
        }).catch(function(error){ 
            if (error.response) {
                alert(error.response.data.message)
            }
        })
    }

    function submitFields(){
        const photoData = new FormData()
        if(rhImage){
            photoData.append('image', rhImage)
        }

        photoData.append('title', title)
        photoData.append('body', textBody)
        photoData.append('subtitle', subTitle)
        photoData.append('tag', flag)
        photoData.append('is_published', 1)
        photoData.append('_method', 'POST')

        axios({
            method: 'POST',
            url: 'http://api-dash.grupostra.com/api/v1/post/create',
            data: photoData,
            headers: {'Authorization' : `Bearer ${token}`, 'Content-Type': 'multipart/form-data', '_method': 'POST'}
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
        axios.get("http://api-dash.grupostra.com/api/v1/post", configB)
            .then((response) => {
              setData(response.data)  
        })
        setModal(document.querySelector('.confirmation-modal'))
      }, []);

      function handleEditItem(e, id){
        e.preventDefault()
        window.location = `/editar-post/${id}`
      }

      function handleDeleteItem(e, deleteConfirmation){
        e.preventDefault()
        axios({
            method: 'DELETE',
            url: `http://api-dash.grupostra.com/api/v1/post/delete/${deleteConfirmation}`,
            headers: {
                'Authorization' : `Bearer ${token}`, '_method' : 'DELETE'
            }
        })
        .then(() => {
            alert("News deletado com sucesso")
            window.location = window.location.href
        }).catch(function(error){ 
            if (error.response) {
                alert(error.response.data.message)
            }
        })
      }

    function openConfirmationModal(e){
        if(e.target.id === ""){
            deleteConfirmation = e.target.parentNode.parentNode.id
        } else {
            deleteConfirmation = e.target.id
        }
        modal.classList.add("on-conf")
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
                    <div className="col-1" id="col-1-min">
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
                                            <div className="img-news">
                                                {rhImage ? <img src={URL.createObjectURL(rhImage)} /> : <img src="" />}
                                            </div>
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
                                                <Legend value="Tipo de news (Flag)" />
                                                <select name="flag" id="flag" onChange={(e) => setFlag(e.target.value)}>
                                                    <option value="#" selected disabled>Selecione uma categoria</option>
                                                    <option value="birthday_person">Aniversários</option>
                                                    <option value="article">Artigos</option>
                                                    <option value="important_notices">Avisos importantes</option>
                                                    <option value="event">Eventos</option>
                                                    <option value="news">News</option>
                                                    <option value="new_collaborators">Novos colaboradores</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="line">
                                            <div className="line_flex">
                                                <a onClick={() => document.location.reload(true)} >Limpar Campos</a>
                                            </div>
                                            <div className="line_flex">
                                                <Button type="submit" value="Salvar Rascunho" onClick={submitDraft} />
                                            </div>
                                            <div className="line_flex">
                                                <Button type="submit" value="Publicar" onClick={submitFields} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="new-rh-news">
                            <div className="col-1">
                                <div className="rh-news container">
                                    <h1>Últimos lançados</h1>
                                    <div className='last_news'> 
                                    {
                                        data.map((index, i) => 
                                            <div key={i} className="line_last">
                                                <div className="title-paragrahp">
                                                    <p>{index?.title}</p>
                                                </div>
                                                <div className="date_div">
                                                    <p>{index?.is_published === 0 ? "Rascunho" : "Publicado"}</p>
                                                    <a href="#" onClick={(e) => handleEditItem(e, index.id)}> <EditIcon /></a>
                                                    <button id={index.id} onClick={openConfirmationModal}> <HighlightOffIcon /></button>
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
                <div className="confirmation-modal">
                    <div className="modal-container">
                        <p>Você tem certeza que deseja deletar esse post?</p>
                        <div className="line-confirmation">
                            <a href="#" onClick={document.querySelector('.confirmation-modal') ? document.querySelector('.confirmation-modal').classList.remove('on-conf') : ""}>Cancelar</a>
                            <a href="#" onClick={(e) => handleDeleteItem(e, deleteConfirmation)}>Confirmar</a>
                        </div>
                    </div>
                </div>   
            </div>
        
    )
}

export default NewRhNews