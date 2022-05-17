import './NewCollaborator.css'
import Header from '../template/header/Header';
import NavMenu from '../template/nav_menu/NavMenu';
import './CreateLink.css'
import Input from '../components/Input';
import Legend from '../components/Legend';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import { useContext } from 'react'; 
import { AuthContext } from '../Auth' 
import axios from 'axios';

function CreateLink(){
    
    const [counter, setCounter] = useState(0)
    
    const [urlSelected, setUrlSelected] = useState()
    const [optCategory, setOptCategory] = useState("")
    const [optButton, setOptButton] = useState("")

    const [categoryRender, setCategoryRender] = useState()
    const [buttonRender, setButtonRender] = useState()
    const [categoryName, setCategoryName] = useState()
    const [categoryOrder, setCategoryOrder] = useState()
    const [buttonName, setButtonName] = useState()
    const [buttonUrl, setButtonUrl] = useState()
    const [buttonOrder, setButtonOrder] = useState()
    const [urlName, setUrlName] = useState()
    const [urlData, setUrlData] = useState([])
    const [urlCategory, setUrlCategory] = useState([])
    const [urlButton, setUrlButton] = useState([])
    const [buttonId, setButtonId] = useState()
    const [categoryId, setCategoryId] = useState()
    const [renderUpdate, setRenderUpdate] = useState()
    const [urlSelectedName, setUrlSelectedName] = useState()

    const { token } = useContext(AuthContext);

    function createCategory(){
        const linkData = new FormData()
        linkData.append('name', categoryName)
        linkData.append('order', categoryOrder)
        axios({
            method: 'POST',
            url: 'https://pedidos.grupostra.com/api/v1/category-link/store',
            data: linkData,
            headers: {'Authorization' : `Bearer ${token}`, 'Content-Type': 'multipart/form-data'}
        })
        .then((response) => {
            alert("Categoria Cadastrada com sucesso!")
            window.location = window.location.href;
        }).catch(function(error){ 
            if (error.response) {
                alert(error.response.data.message)
            }
        })
    }

    function updateCategory(){
        const linkData = new FormData()
        linkData.append('name', categoryName)
        linkData.append('order', categoryOrder)
        axios({
            method: 'POST',
            url: `https://pedidos.grupostra.com/api/v1/page-link/update/${categoryId}`,
            data: linkData,
            headers: {'Authorization' : `Bearer ${token}`, 'Content-Type': 'multipart/form-data', '_method': 'PUT'}
        })
        .then((response) => {
            alert("Categoria Cadastrada com sucesso!")
            window.location = window.location.href;
        }).catch(function(error){ 
            if (error.response) {
                alert(error.response.data.message)
            }
        })
    }

    function createButton(){
        const buttonData = new FormData()
        buttonData.append('text', buttonName)
        buttonData.append('url', buttonUrl)
        buttonData.append('order', buttonOrder)
        axios({
            method: 'POST',
            url: 'https://pedidos.grupostra.com/api/v1/item-link/store',
            data: buttonData,
            headers: {'Authorization' : `Bearer ${token}`, 'Content-Type': 'multipart/form-data'}
        })
        .then((response) => {
            alert("Botão Cadastrado com sucesso!")
            window.location = window.location.href;
        }).catch(function(error){ 
            if (error.response) {
                alert(error.response.data.message)
            }
        })
    }

    function updateButton(){
        const buttonData = new FormData()
        buttonData.append('text', buttonName)
        buttonData.append('url', buttonUrl)
        buttonData.append('order', buttonOrder)
        axios({
            method: 'POST',
            url: `https://pedidos.grupostra.com/api/v1/item-link/update/${buttonId}`,
            data: buttonData,
            headers: {'Authorization' : `Bearer ${token}`, 'Content-Type': 'multipart/form-data', '_method': 'PUT'}
        })
        .then((response) => {
            alert("Botão Atualizado com sucesso!")
            window.location = window.location.href;
        }).catch(function(error){ 
            if (error.response) {
                alert(error.response.data.message)
            }
        })
    }

    function createUrl(){
        const urlData = new FormData()
        urlData.append('name', urlName)

        axios({
            method: 'POST',
            url: 'https://pedidos.grupostra.com/api/v1/page-link/store',
            data: urlData,
            headers: {'Authorization' : `Bearer ${token}`, 'Content-Type': 'multipart/form-data'}
        })
        .then((response) => {
            alert("Url Criada com sucesso!")
            window.location = window.location.href;
        }).catch(function(error){ 
            if (error.response) {
                alert(error.response.data.message)
            }
        })
    }

    function updateUrl(){
        const urlData = new FormData()
        urlData.append('name', urlSelectedName)
        urlData.append('_method', 'PUT')
        axios({
            method: 'POST',
            url: `https://pedidos.grupostra.com/api/v1/page-link/update/${urlSelected}`,
            data: urlData,
            headers: {'Authorization' : `Bearer ${token}`, 'Content-Type': 'multipart/form-data', '_method': 'PUT'}
        })
        .then((response) => {
            alert("Url Atualizada com sucesso!")
            window.location = window.location.href;
        }).catch(function(error){ 
            if (error.response) {
                alert(error.response.data.message)
            }
        })
    }

    function handleEdit(e){
        setUrlSelectedName(document.querySelector('#new-url').value)
    }

    useEffect(() => {
        setRenderUpdate(
            <>
                <Input type="text" id="new-url" name="new-url" value={urlSelectedName} onChange={handleEdit}/>
                <Button value="Atualizar" onClick={updateUrl}/>
            </>
        )
    }, [urlSelectedName])

    const configB = {
        headers: { Authorization: `Bearer ${token}` }
    }

    useEffect(() => {
        axios.get('https://pedidos.grupostra.com/api/v1/links', configB)
        .then((response) => {
            setUrlData(response.data)
        }).catch(function(error){ 
            if (error.response) {
                alert(error.response.data.message)
            }
        })
    }, [])

    useEffect(() => {
        if(optCategory === "Editar categoria"){
            setCategoryRender(
                <>
                    <Legend value="Editar Categoria" />
                    <select name="url-option-select" id="url-option-select">
                        <option value="#" selected disabled>Selecione a categoria</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <Legend value="Novo nome da categoria" />
                    <Input type="text" id="category-new" name="category-new" />
                    <Legend value="Posição da categoria" />
                    <select name="url-option-select" id="url-option-select" onChange={(e) => setOptButton(e.target.value)}>
                        <option value="#" selected disabled>Posição da categoria</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <Button onClick={saveButton} value="Salvar" />
                    <select name="url-option-select" id="url-option-select" onChange={(e) => setOptButton(e.target.value)}>
                        <option value="#" selected disabled>Opção botão</option>
                        <option value="Editar botão">Editar botão</option>
                        <option value="Criar novo botão">Criar novo botão</option>
                        <option value="Excluir botão">Excluir botão</option>
                    </select>
                </>
            )
        } else if(optCategory === "Criar nova categoria"){
            setCategoryRender(
                <>
                    <Legend value="Criar nova categoria" />
                    <Input type="text" id="category-new" name="category-new" />
                    <Legend value="Posição da categoria" />
                    <select name="url-option-select" id="url-option-select" onChange={(e) => setOptButton(e.target.value)}>
                        <option value="#" selected disabled>Posição da categoria</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <Button onClick={saveButton} value="Salvar" />
                    <select name="url-option-select" id="url-option-select" onChange={(e) => setOptButton(e.target.value)}>
                        <option value="#" selected disabled>Opção botão</option>
                        <option value="Editar botão">Editar botão</option>
                        <option value="Criar novo botão">Criar novo botão</option>
                        <option value="Excluir botão">Excluir botão</option>
                    </select>
                </>
            )
        } else if(optCategory === "Excluir categoria"){
            setCategoryRender(
                <>
                    <h1>Excluir Categoria</h1>
                    <select name="url-option-select" id="url-option-select" onChange={(e) => setOptButton(e.target.value)}>
                        <option value="#" selected disabled>Opção botão</option>
                        <option value="Editar botão">Editar botão</option>
                        <option value="Criar novo botão">Criar novo botão</option>
                        <option value="Excluir botão">Excluir botão</option>
                    </select>
                </>
            )
        } else if(optCategory === ""){
            setCategoryRender(<span>Selecione uma opção</span>)
        }


        if(optButton === "Editar botão"){
            setButtonRender(
                <>
                    <Legend value="Editar botão" />
                    <select name="url-option-select" id="url-option-select">
                        <option value="#" selected disabled>Selecione o botão</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <Legend value="Novo nome do botão" />
                    <Input type="text" id="category-new" name="category-new" />
                    <Legend value="Posição do botão" />
                    <select name="url-option-select" id="url-option-select" onChange={(e) => setOptButton(e.target.value)}>
                        <option value="#" selected disabled>Posição da categoria</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <Button onClick={saveButton} value="Salvar" />
                </>
            )
        } else if(optButton === "Criar novo botão"){
            setButtonRender(
                <>
                    <Legend value="Nome do Botão" />
                    <Input type="text" id="button-name" name="button-name" />
                    <Legend value="Link do Botão" />
                    <Input type="text" id="button-link" name="button-link" />
                    <Legend value="Posição da categoria" />
                    <select name="url-option-select" id="url-option-select" onChange={(e) => setOptButton(e.target.value)}>
                        <option value="#" selected disabled>Posição do botão</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <Button onClick={saveButton} value="Salvar" />  
                </>
            )
        } else if(optButton === "Excluir botão"){
            setButtonRender(<h1>Excluir botão</h1>)
        } else if(optButton === ""){
            setButtonRender(<span>Selecione uma opção</span>)
        }

    }, [optCategory, optButton, counter])
    
    function addNewButton(e){
        e.preventDefault()
        setCounter(counter + 1);
    }

    function saveButton(){
        console.log("asd")
    }

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
                <div className="create-link">
                    <div className="col-1">
                        <div className="rh-news container">
                            <Legend value="Selecione a url para editar"/>
                            <select name="url-select" id="url-select" onChange={(e) => {setUrlSelected(e.target.value); setUrlSelectedName(e.target.textContent)}}>
                                <option value="#" selected disabled>Selecione a url</option>
                                {
                                    urlData.map((url, i) =>
                                        <option key={i} value={url?.id}>{url?.name}</option>
                                    )
                                }
                            </select>
                            {
                                renderUpdate
                            }
                            <Legend value="ou crie uma nova Url"/>
                            <Input type="text" id="new-url" name="new-url" onChange={(e) => setUrlName(e.target.value)}/>
                            <Button value="Cadastrar" onClick={createUrl}/>
                            <select name="url-option-select" id="url-option-select" onChange={(e) => setOptCategory(e.target.value)}>
                                <option value="#" selected disabled>Opção categoria</option>
                                <option value="Editar categoria">Editar categoria</option>
                                <option value="Criar nova categoria">Criar nova categoria</option>
                                <option value="Excluir categoria">Excluir categoria</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="create-link">
                    <div className="col-1">
                        <div className="rh-news container">
                            <div className="button-container">
                                {
                                    categoryRender
                                }
                            </div>
                        </div>
                    </div>       
                </div> 
                <div className="create-link">
                    <div className="col-1">
                        <div className="rh-news container">
                            <div className="button-container">
                                {
                                    buttonRender
                                }       
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
    </div>
    )
}

export default CreateLink;
