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
            console.log(categoryName)
            console.log(categoryText)
        }

        if(categoryNewName === "" || categoryNewOrder === ""){
            let errorLog = document.querySelectorAll('.error-log p')[3]
            errorLog.innerHTML = "Você precisa preencher todos os campos"
        } else {
            linkData.append('name', categoryNewName)
            linkData.append('order', categoryNewOrder)
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
    }

    function deleteCategory(e, urlId){
        e.preventDefault()
        axios({
            method: 'DELETE',
            url: `https://pedidos.grupostra.com/api/v1/category-link/delete/${urlId}`,
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
    }

    function deleteButton(e, urlId){
        e.preventDefault()
        axios({
            method: 'DELETE',
            url: `https://pedidos.grupostra.com/api/v1/item-link/delete/${urlId}`,
            headers: {'Authorization' : `Bearer ${token}`}
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
        
    }

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

    function editPage(e, urlId){
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
            let pageInput = document.querySelector('.line-opt-edit-category input')
            pageInput.value = categoryText
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
            let pageInput = document.querySelector('.line-opt-edit-button input')
            pageInput.value = buttonText
        }
    }

    function setButtonSelected(e, urlId){
        setButtonText(e.target.innerHTML)
        setSelectedButton(urlId)
        let errorLog = document.querySelectorAll('.error-log p')[5]
        errorLog.innerHTML = ""
        axios.get(`https://pedidos.grupostra.com/api/v1/links/items/${urlId}`, configB)
        .then((response) => {
            setButtonByIdData(response.data)
            setButtonUrl(buttonByIdData?.url)
        })
        console.log(buttonByIdData)
        console.log(buttonUrl)
        let pageInput = document.querySelector('.line-opt-edit-button input:nth-child(3)')
        pageInput.value = buttonUrl
    }

    function getCategories(e, urlId){
        e.preventDefault()
        setPageText(e.target.innerHTML)
        let errorLog = document.querySelectorAll('.error-log p')[0]
        errorLog.innerHTML = ""
        setButtonData("")
        setSelectedPage(urlId)
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
        console.log(urlId)
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

    const getChangedPos = (currentPos, newPos) => {
        setCategoryOrder(currentPos)
        setCategoryNewOrder(newPos)
    };

    const DraggableRenderCategory = useCallback(() => {
        if (categoryData && categoryData.length) {
          return (
            <Draggable onPosChange={getChangedPos}>
              {categoryData.map((value, index) => (
                <div className='categories-buttons'>
                    <div key={index} className="line-opt">
                        <div className="handle-drag">
                            <DragHandleIcon />
                        </div>
                        <Button value={value?.name} onClick={(e) => {getButtons(e, value.id); setSelectedColorCategory(e); setSelectedCategory(value.id)}}/>
                        <a href="#" onClick={(e) => editCategory(e, value.id)}>Editar</a>
                        <a href="#" onClick={(e) => deleteCategory(e, value.id)}>Excluir</a>
                    </div>
                </div>
               ))}
            </Draggable>
          );
        }
        return null;
      }, [categoryData]);

      const DraggableRenderButton = useCallback(() => {
        if (buttonData && buttonData.length) {
          return (
            <Draggable>
              {
                buttonData?.map((button, i) =>
                    <div className='buttons-buttons'>
                        <div key={i} className="line-opt">
                            <div className="handle-drag">
                                <DragHandleIcon />
                            </div>
                            <Button value={button?.text} onClick={(e) => {setButtonSelected(e, button?.id); setSelectedColorButton(e)}}/>
                            <a href="#" onClick={(e) => editButton(e, button?.id)}>Editar</a>
                            <a href="#" onClick={(e) => deleteButton(e, button.id)}>Excluir</a>
                        </div>
                    </div>
                )   
            }
            </Draggable>
          );
        }
        return null;
      }, [buttonData]);


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
                                <div className='pages-buttons'>
                                    <div key={i} className="line-opt">
                                        <Button value={url?.name} onClick={(e) => {getCategories(e, url.id); setSelectedColorPage(e)}}/>
                                        <a href="#" onClick={(e) => editPage(e, url.id)}>Editar</a>
                                        <a href="#" onClick={(e) => deletePage(e, url.id)}>Excluir</a>
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
                                <DraggableRenderCategory />
                            </div>
                        </div>
                        <div className="rh-news container">
                            <div className="line-opt-edit-category">
                                <p>Editar categoria</p>
                                <div className="line-opt-inside">
                                    <Input onChange={(e) => setCategoryNewName(e.target.value)}/>
                                </div>
                                <Button value="Salvar" onClick={(e) => updateCategory(e)}/>
                                <div className="error-log">
                                    <p></p>
                                </div>
                            </div>
                            <p>Criar nova categoria</p>
                            <div className="line-opt">
                                <Input type="text" id="new-url" name="new-url" onChange={(e) => setCategoryName(e.target.value)}/>
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
                                <DraggableRenderButton />
                            </div>
                        </div>
                        <div className="rh-news container">
                            <div className="line-opt-edit-button">
                                <p>Editar botão</p>
                                <div className="line-opt-inside">
                                    <Input onChange={(e) => setButtonNewName(e.target.value)}/>
                                </div>
                                <Input type="text" id="new-url" name="new-url" onChange={(e) => setButtonNewUrl(e.target.value)}/>
                                <Button value="Salvar" onClick={updateButton}/>
                                <div className="error-log">
                                    <p></p>
                                </div>
                            </div>
                            <p>Criar novo botão</p>
                            <Legend value="Titulo"/>
                            <div className="line-opt">
                                <Input type="text" id="new-text" name="new-text" onChange={(e) => setButtonName(e.target.value)}/>
                            </div>
                            <Legend value="Link"/>
                            <Input type="text" id="new-url" name="new-url" onChange={(e) => setButtonUrl(e.target.value)}/>
                            <Button value="Cadastrar" onClick={createButton}/>
                            <div className="error-log">
                                <p></p>
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
