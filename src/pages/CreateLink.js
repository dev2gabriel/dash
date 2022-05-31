import './NewCollaborator.css'
import Header from '../template/header/Header';
import NavMenu from '../template/nav_menu/NavMenu';
import './CreateLink.css'
import Input from '../components/Input';
import Legend from '../components/Legend';
import { useCallback, useEffect, useState } from 'react';
import Button from '../components/Button';
import { useContext } from 'react'; 
import { AuthContext } from '../Auth' 
import axios from 'axios';
import { Draggable } from "react-drag-reorder";
import DragHandleIcon from '@mui/icons-material/DragHandle';

function CreateLink(){
    
    document.title = "Grupo Stra - Editar Links"

    const [urlSelected, setUrlSelected] = useState()
    const [categoryName, setCategoryName] = useState("")
    const [categoryNewName, setCategoryNewName] = useState("")
    const [categoryOrder, setCategoryOrder] = useState("")
    const [categoryNewOrder, setCategoryNewOrder] = useState("")
    const [buttonName, setButtonName] = useState("")
    const [buttonNewName, setButtonNewName] = useState("")
    const [buttonUrl, setButtonUrl] = useState("")
    const [buttonNewUrl, setButtonNewUrl] = useState("")
    const [buttonOrder, setButtonOrder] = useState("")
    const [buttonNewOrder, setButtonNewOrder] = useState("")
    const [urlName, setUrlName] = useState("")
    const [urlData, setUrlData] = useState([])
    const [buttonId, setButtonId] = useState()
    const [categoryId, setCategoryId] = useState()
    const [urlNewName, setUrlNewName] = useState("")
    const [positionCategoryCreate, setPositionCategoryCreate] = useState()

    const [categoryData, setCategoryData] = useState([])
    const [buttonData, setButtonData] = useState([])
    const [buttonByIdData, setButtonByIdData] = useState([])

    const [selectedButton, setSelectedButton] = useState("")
    const [selectedPage, setSelectedPage] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")

    const [pageText, setPageText] = useState("");
    const [categoryText, setCategoryText] = useState("");
    const [buttonText, setButtonText] = useState("");

    const { token } = useContext(AuthContext);

    var deletedCategoryId;
    var deletedButtonId;

    function createCategory(){
        if(selectedPage === ""){
            let errorLog = document.querySelectorAll('.error-log p')[4]
            errorLog.innerHTML = "Você precisa selecionar uma página!"
        } else if(categoryName === "" || categoryOrder === ""){
            let errorLog = document.querySelectorAll('.error-log p')[4]
            errorLog.innerHTML = "Você precisa preencher todos os campos!"
        } else {
            const linkData = new FormData()
            linkData.append('name', categoryName)
            linkData.append('order', categoryOrder)
            linkData.append('page_link_id', selectedPage)
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
    }

    function updateCategory(){
        const linkData = new FormData()
        if(categoryName === ""){
            setCategoryName(categoryText)
        }
        if(categoryNewName === "" || categoryNewOrder === ""){
            let errorLog = document.querySelectorAll('.error-log p')[3]
            errorLog.innerHTML = "Você precisa preencher todos os campos"
        } else {
            linkData.append('name', categoryNewName)
            linkData.append('order', categoryNewOrder)
            linkData.append('_method', 'PUT')
            axios({
                method: 'POST',
                url: `https://pedidos.grupostra.com/api/v1/category-link/update/${selectedCategory}`,
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
    }

    function deleteCategory(e, urlId){
        e.preventDefault()
        axios({
            method: 'DELETE',
            url: `https://pedidos.grupostra.com/api/v1/category-link/delete/${deletedCategoryId}`,
            headers: {'Authorization' : `Bearer ${token}`}
        })
        .then((response) => {
            alert("Categoria Deletada com sucesso!")
            window.location = window.location.href;
        }).catch(function(error){ 
            if (error.response) {
                alert(error.response.data.message)
            }
        })
    }

    function createButton(){
        if(selectedCategory === ""){
            let errorLog = document.querySelectorAll('.error-log p')[7]
            errorLog.innerHTML = "Você precisa selecionar uma categoria!"
        } else if(buttonName === "" || buttonUrl === "" || buttonOrder === "") {
            let errorLog = document.querySelectorAll('.error-log p')[7]
            errorLog.innerHTML = "Preencha todos os campos"
        } else {
            const buttonData = new FormData()
            buttonData.append('text', buttonName)
            buttonData.append('url', buttonUrl)
            buttonData.append('order', buttonOrder)
            buttonData.append('category_link_id', selectedCategory)
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
    }

    function updateButton(){
        const buttonData = new FormData()
        if(buttonNewName === "" || buttonNewUrl === "" || buttonNewOrder === "") {
            let errorLog = document.querySelectorAll('.error-log p')[6]
            errorLog.innerHTML = "Preencha todos os campos"
        } else {
            buttonData.append('text', buttonNewName)
            buttonData.append('url', buttonNewUrl)
            buttonData.append('order', buttonNewOrder)
            buttonData.append('_method', 'PUT')
            axios({
                method: 'POST',
                url: `https://pedidos.grupostra.com/api/v1/item-link/update/${selectedButton}`,
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
    }

    function deleteButton(e, urlId){
        e.preventDefault()
        axios({
            method: 'DELETE',
            url: `https://pedidos.grupostra.com/api/v1/item-link/delete/${deletedButtonId}`,
            headers: {'Authorization' : `Bearer ${token}`, '_method' : 'DELETE'}
        })
        .then((response) => {
            alert("Botão Deletado com sucesso!")
            window.location = window.location.href;
        }).catch(function(error){ 
            if (error.response) {
                alert(error.response.data.message)
            }
        })
    }


    function createUrl(){
        if(urlName === ""){
            let errorLog = document.querySelectorAll('.error-log p')[0]
            errorLog.innerHTML = "Você precisa preencher o nome da página"
        } else {
            const urlData = new FormData()
            urlData.append('name', urlName)
    
            axios({
                method: 'POST',
                url: 'https://pedidos.grupostra.com/api/v1/page-link/store',
                data: urlData,
                headers: {'Authorization' : `Bearer ${token}`, 'Content-Type': 'multipart/form-data'}
            })
            .then((response) => {
                alert("Página Criada com sucesso!")
                window.location = window.location.href;
            }).catch(function(error){ 
                if (error.response) {
                    alert(error.response.data.message)
                }
            })
        }  
    }

    function deletePage(e, urlId){
        e.preventDefault()
        axios({
            method: 'DELETE',
            url: `https://pedidos.grupostra.com/api/v1/page-link/delete/${urlId}`,
            headers: {'Authorization' : `Bearer ${token}`}
        })
        .then((response) => {
            alert("Página Deletada com sucesso!")
            window.location = window.location.href;
        }).catch(function(error){ 
            if (error.response) {
                alert(error.response.data.message)
            }
        })
    }

    function updateUrl(){
        const urlData = new FormData()
        if(urlNewName === ""){
            let errorLog = document.querySelectorAll('.error-log p')[1]
            errorLog.innerHTML = "Você precisa preencher o campo"
        } else {
            urlData.append('name', urlNewName)
            urlData.append('_method', 'PUT')
            axios({
                method: 'POST',
                url: `https://pedidos.grupostra.com/api/v1/page-link/update/${selectedPage}`,
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
    }

    const configB = {
        headers: { Authorization: `Bearer ${token}` }
    }

    useEffect(() => {
        axios.get('https://pedidos.grupostra.com/api/v1/links', configB)
        .then((response) => {
            setUrlData(response.data)
            document.querySelectorAll('button')[1].click()
        }).catch(function(error){ 
            if (error.response) {
                alert(error.response.data.message)
            }
        })
    }, [])

    function editPage(e){
        e.preventDefault()
        let errorLog = document.querySelectorAll('.error-log p')[0]
        if(selectedPage === ""){
            errorLog.innerHTML = "Você precisa selecionar uma página"
        } else {
            errorLog.innerHTML = ""
            let lineEdit = document.querySelector('.line-opt-edit')
            let cardLine = document.querySelector('.create-link:nth-child(1) .rh-news.container:nth-child(2)')
            lineEdit.classList.add('edit-on')
            cardLine.classList.add('edit-on')
            let pageInput = document.querySelector('.line-opt-edit input')
            pageInput.value = pageText
        }
    }

    function editCategory(e, urlId){
        e.preventDefault()
        if(selectedCategory === ""){
            let errorLog = document.querySelectorAll('.error-log p')[2]
            errorLog.innerHTML = "Você precisa selecionar uma categoria"
        } else {
            let lineEdit = document.querySelector('.line-opt-edit-category')
            lineEdit.classList.add('edit-on')
            let pageInput = document.querySelectorAll('.line-opt-edit-category input')
            pageInput[0].value = categoryText
            setCategoryNewName(categoryText)
            pageInput[1].value = parseInt(e.target.getAttribute('order'))
            setCategoryNewOrder(parseInt(e.target.getAttribute('order')))
        }
    }

    function editButton(e, urlId){
        e.preventDefault()
        if(selectedButton === ""){
            let errorLog = document.querySelectorAll('.error-log p')[5]
            errorLog.innerHTML = "Você precisa selecionar um botão"
        } else {
            let lineEdit = document.querySelector('.line-opt-edit-button')
            lineEdit.classList.add('edit-on')
            let pageInput = document.querySelectorAll('.line-opt-edit-button input')
            pageInput[0].value = buttonText
            setButtonNewName(buttonText)
            pageInput[1].value = parseInt(e.target.getAttribute('order'))
            setButtonNewOrder(parseInt(e.target.getAttribute('order')))
            pageInput[2].value = e.target.id
            setButtonNewUrl(e.target.id)
        }
    }

    function setButtonSelected(e, urlId){
        setButtonText(e.target.innerHTML)
        setSelectedButton(urlId)
        let errorLog = document.querySelectorAll('.error-log p')[5]
        errorLog.innerHTML = ""
    }

    function getCategories(e, urlId){
        e.preventDefault()
        setSelectedPage(urlId)
        setPageText(e.target.innerHTML)
        let errorLog = document.querySelectorAll('.error-log p')[0]
        errorLog.innerHTML = ""
        setButtonData("")
        axios.get(`https://pedidos.grupostra.com/api/v1/links/categories/${urlId}`, configB)
        .then((response) => {
            setCategoryData(response.data)
        })
    }

    function getButtons(e, urlId){
        e.preventDefault()
        setCategoryText(e.target.innerHTML)
        setSelectedCategory(urlId)     
        let errorLog = document.querySelectorAll('.error-log p')[2]
        errorLog.innerHTML = ""
        axios.get(`https://pedidos.grupostra.com/api/v1/links/items/${urlId}`, configB)
        .then((response) => {
            setButtonData(response.data)
        })
    }
    
    function setSelectedColorPage(e){
        let pagesButtons = document.querySelectorAll('.pages-buttons .line-opt button')
        for(let i=0; i<pagesButtons.length; i++){
            pagesButtons[i].style.backgroundColor = "gray"
        }
        e.target.style.backgroundColor = "var(--verde-grupo)"
    }

    function setSelectedColorCategory(e){
        let pagesButtons = document.querySelectorAll('.categories-buttons .line-opt button')
        for(let i=0; i<pagesButtons.length; i++){
            pagesButtons[i].style.backgroundColor = "gray"
        }
        e.target.style.backgroundColor = "var(--verde-grupo)"
    }

    function setSelectedColorButton(e){
        let pagesButtons = document.querySelectorAll('.buttons-buttons .line-opt button')
        for(let i=0; i<pagesButtons.length; i++){
            pagesButtons[i].style.backgroundColor = "gray"
        }
        e.target.style.backgroundColor = "var(--verde-grupo)"
    }

    function openConfirmationModal(e){
        e.preventDefault()
        deletedCategoryId = parseInt(e.target.getAttribute('order'))
        let modal = document.querySelector('.modal-category-confirmation')
        modal.classList.add("on-conf")
    }

    function openConfirmationModalButton(e){
        e.preventDefault()
        deletedButtonId = parseInt(e.target.getAttribute('order'))
        let modal = document.querySelector('.modal-button-confirmation')
        modal.classList.add("on-conf")
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
                            <p>Selecione a página para editar</p>
                            <div className="error-log">
                                <p></p>
                            </div>
                            {
                                urlData.map((url, i) =>
                                <div key={i} className='pages-buttons'>
                                    <div className="line-opt">
                                        <Button id={url?.id} value={url?.name} onClick={(e) => {getCategories(e, url?.id); setSelectedColorPage(e)}}/>
                                        <a href="#" onClick={(e) => editPage(e, url.id)}>Editar</a>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                        <div className="rh-news container">
                            <div className="line-opt-edit">
                                <p>Editar título da página</p>
                                <div className="line-opt-inside">
                                    <Input onChange={(e) => setUrlNewName(e.target.value)} />
                                    <Button value="Salvar" onClick={(e) => updateUrl(e, selectedPage)}/>
                                </div>
                                <div className="error-log">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="create-link">
                    <div className="col-1">
                        <div className="rh-news container">
                            <div className="button-container">
                                <p>Lista de categorias</p>
                                <div className="error-log">
                                    <p></p>
                                </div>
                                {categoryData?.map((value, index) => (
                                    <div key={index} className='categories-buttons'>
                                        <div className="line-opt">
                                            <Button value={value?.name} onClick={(e) => {getButtons(e, value.id); setSelectedColorCategory(e)}}/>
                                            <a href="#" order={value?.order} onClick={(e) => editCategory(e, value.id)}>Editar</a>
                                            <a href="#" order={value?.id} onClick={openConfirmationModal}>Excluir</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rh-news container">
                            <div className="line-opt-edit-category">
                                <p>Editar categoria</p>
                                <div className="line-flex">
                                    <div className="line-flex-col">
                                        <Legend value="Nome"/>
                                        <Input type="text" id="new-url" name="new-url" onChange={(e) => setCategoryNewName(e.target.value)}/>
                                    </div>
                                    <div className="line-flex-col">
                                        <Legend value="Posição"/>
                                        <Input type="number" id="new-order-btn" name="new-order-btn" onChange={(e) => setCategoryNewOrder(e.target.value)}/>
                                    </div>
                                </div>
                                <Button value="Salvar" onClick={(e) => updateCategory(e)}/>
                                <div className="error-log">
                                    <p></p>
                                </div>
                            </div>
                            <p>Criar nova categoria</p>
                            <div className="line-flex">
                                <div className="line-flex-col">
                                    <Legend value="Nome"/>
                                    <Input type="text" id="new-url" name="new-url" onChange={(e) => setCategoryName(e.target.value)}/>
                                </div>
                                <div className="line-flex-col">
                                    <Legend value="Posição"/>
                                    <Input type="number" id="new-order-btn" name="new-order-btn" onChange={(e) => setCategoryOrder(e.target.value)}/>
                                </div>
                            </div>
                            <Button value="Cadastrar" onClick={createCategory}/>
                            <div className="error-log">
                                <p></p>
                            </div>
                        </div>
                    </div>       
                </div> 
                <div className="create-link">
                    <div className="col-1">
                        <div className="rh-news container">
                            <div className="button-container">
                                <p>Lista de botões</p>
                                <div className="error-log">
                                    <p></p>
                                </div>
                                {
                                    buttonData&&
                                    buttonData?.map((button, i) =>
                                        <div key={i} className='buttons-buttons'>
                                            <div className="line-opt">
                                                <Button id={button?.url} value={button?.text} onClick={(e) => {setButtonSelected(e, button?.id); setSelectedColorButton(e)}}/>
                                                <a id={button?.url} order={button?.order} href="#" onClick={(e) => editButton(e, button?.id)}>Editar</a>
                                                <a id={button?.url} order={button?.id} href="#" onClick={openConfirmationModalButton}>Excluir</a>
                                            </div>
                                        </div>
                                    )   
                                }
                            </div>
                        </div>
                        <div className="rh-news container">
                            <div className="line-opt-edit-button">
                                <p>Editar botão</p>
                                <div className="line-flex">
                                    <div className="line-flex-col">
                                        <Legend value="Nome"/>
                                        <Input type="text" id="new-url" name="new-url" onChange={(e) => setButtonNewName(e.target.value)}/>
                                    </div>
                                    <div className="line-flex-col">
                                        <Legend value="Posição"/>
                                        <Input type="number" id="new-order-btn" name="new-order-btn" onChange={(e) => setButtonNewOrder(e.target.value)}/>
                                    </div>
                                </div>
                                <Legend value="Link"/>
                                <Input type="text" id="new-url" name="new-url" onChange={(e) => setButtonNewUrl(e.target.value)}/>
                                <Button value="Salvar" onClick={updateButton}/>
                                <div className="error-log">
                                    <p></p>
                                </div>
                            </div>
                            <p>Criar novo botão</p>
                            <div className="line-flex">
                                <div className="line-flex-col">
                                    <Legend value="Nome"/>
                                    <Input type="text" id="new-url" name="new-url" onChange={(e) => setButtonName(e.target.value)}/>
                                </div>
                                <div className="line-flex-col">
                                    <Legend value="Posição"/>
                                    <Input type="number" id="new-order-btn" name="new-order-btn" onChange={(e) => setButtonOrder(e.target.value)}/>
                                </div>
                            </div>
                            <Legend value="Link"/>
                            <Input type="text" id="new-order-btn" name="new-order-btn" onChange={(e) => setButtonUrl(e.target.value)}/>
                            <Button value="Cadastrar" onClick={createButton}/>
                            <div className="error-log">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
        <div className="modal-category-confirmation">
            <div className="modal-container">
                <p>Você tem certeza que deseja deletar essa categoria?</p>
                <div className="line-confirmation">
                    <a href="#" onClick={document.querySelector('.modal-category-confirmation') ? document.querySelector('.modal-category-confirmation').classList.remove('on-conf') : ""}>Cancelar</a>
                    <a href="#" onClick={(e) => deleteCategory(e)}>Confirmar</a>
                </div>
            </div>
        </div>
        <div className="modal-button-confirmation">
            <div className="modal-container">
                <p>Você tem certeza que deseja deletar esse botão?</p>
                <div className="line-confirmation">
                    <a href="#" onClick={document.querySelector('.modal-button-confirmation') ? document.querySelector('.modal-button-confirmation').classList.remove('on-conf') : ""}>Cancelar</a>
                    <a href="#" onClick={(e) => deleteButton(e)}>Confirmar</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CreateLink;
