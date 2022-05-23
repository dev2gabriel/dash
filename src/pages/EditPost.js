import Header from '../template/header/Header';
import NavMenu from '../template/nav_menu/NavMenu';
import Legend from '../components/Legend'
import Input from '../components/Input'
import Button from '../components/Button'
import './NewRhNews.css'
import { useState, useRef, useMemo, useEffect } from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import JoditEditor from "jodit-react";
import { useContext } from 'react'; 
import { AuthContext } from '../Auth' 
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditPost(){

    const [content, setContent] = useState()
    const [rhImage, setRhImage] = useState()
    const [title, setTitle] = useState()
    const [subTitle, setSubTitle] = useState()
    const [textBody, setTextBody] = useState()
    const [data, setData] = useState([])
    const [newRhImage, setNewRhImage] = useState("")
    const [flag, setFlag] = useState()
    const { postId } = useParams();

    const { token } = useContext(AuthContext);

    const editor = useRef(null)

    const config = {
		readonly: false,
		placeholder: "digite o texto"
	}

    const configB = {
        headers: { Authorization: `Bearer ${token}` }
    }

    function submitFields(){
        const photoData = new FormData()
        if(newRhImage === ""){
            photoData.append('title', title)
            photoData.append('body', textBody)
            photoData.append('subtitle', subTitle)
            photoData.append('tag', flag)
            photoData.append('is_published', 1)
            photoData.append('_method', 'PUT')
        } else {
            photoData.append('title', title)
            photoData.append('body', textBody)
            photoData.append('image', newRhImage)
            photoData.append('subtitle', subTitle)
            photoData.append('tag', flag)
            photoData.append('is_published', 1)
            photoData.append('_method', 'PUT')
        }

        axios({
            method: 'POST',
            url: `https://pedidos.grupostra.com/api/v1/post/update/${postId}`,
            data: photoData,
            headers: {'Authorization' : `Bearer ${token}`, 'Content-Type': 'multipart/form-data', '_method': 'PUT'}
        })
        .then((response) => {
            alert("News Atualizado com sucesso!")
            window.location = window.location.href;
        }).catch(function(error){ 
            if (error.response) {
                alert(error.response.data.message)
            }
        })
    }

    useEffect(() => {
        axios.get(`https://pedidos.grupostra.com/api/v1/post/${postId}`, configB)
            .then((response) => {
              setData(response.data)  
        })
      }, []);

    useEffect(() => { 
        setTitle(data?.title)
        setSubTitle(data?.subtitle)
        setRhImage(data?.image)
        setTextBody(data?.body)
        setFlag(data?.tag)
    }, [data])

   

    function handleChange(e){
        setTitle(document.querySelector('#title-text').value)
        setSubTitle(document.querySelector('#sub-title').value)
        setNewRhImage(document.querySelector('#file').files[0] ? document.querySelector('#file').files[0] : "")
        setTextBody(document.querySelector('.jodit-wysiwyg').innerHTML)
        setFlag(document.querySelector('#flag').value)
        console.log(newRhImage)
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
                                            <Input type="text" name="title-text" id="title" value={title} onChange={handleChange}/>
                                        </div>
                                        <div className="line">
                                            <div className="line_flex">
                                                <Legend value="Sub Título" />
                                                <Input type="text" name="sub-title" id="sub-title" value={subTitle} onChange={handleChange}/>
                                                </div>
                                        </div>
                                        <div className="line_flex">
                                            <label htmlFor="file" className="input_img">Enviar Imagem <FileUploadIcon /></label>
                                            <input type="file" name="file" id="file" onChange={handleChange} />
                                            <div className="images-show">
                                                <Legend value="Imagem"/>
                                                {newRhImage ? <img src={URL.createObjectURL(newRhImage)} /> : <img src={rhImage} />}
                                                {/* {renderImg} */}
                                            </div>
                                        </div>
                                        <div className="line_flex">
                                            <JoditEditor
                                                ref={editor}
                                                value={textBody}
                                                config={config}
                                                tabIndex={1} // tabIndex of textarea
                                                onBlur={handleChange} // preferred to use only this option to update the content for performance reasons
                                                onChange={newContent => {}}
                                            />
                                        </div>
                                        <div className="line">
                                            <div className="line_flex">
                                                <Legend value="Tipo de news (Flag)" />
                                                <select name="flag" id="flag" value={flag} onChange={handleChange}>
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
                                                <Button type="submit" value="Publicar" onClick={submitFields} />
                                            </div>
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

export default EditPost