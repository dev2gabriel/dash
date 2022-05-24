import './NewCollaborator.css'
import Header from '../template/header/Header';
import NavMenu from '../template/nav_menu/NavMenu';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import Legend from '../components/Legend';
import Input from '../components/Input';
import PersonIcon from '@mui/icons-material/Person';
import ReactPaginate from 'react-paginate';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { AuthContext } from '../Auth' 
import { useContext } from 'react'; 

function NewColaborator(){
  document.title = "Grupo Stra - Communication"
  
  const [data, setData] = useState([])
  const [isRendered, setIsRendered] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [itemOffset, setItemOffset] = useState(0);

  const { token } = useContext(AuthContext);
  
  useEffect(() =>{
    axios.get("https://pedidos.grupostra.com/api/v1/user/show-all")
        .then((response) => {
          setData(response.data)
          setSearchResults(response.data)
          setIsRendered(true)     
        })
  }, [isRendered])

  function userProfile(e, id){
    e.preventDefault()
    window.location = `/perfil-usuario/${id}`
  }

  function handleEditItem(e, id){
    e.preventDefault()
    window.location = `/editar-usuario/${id}`
  }

  const configB = {
    headers: { Authorization: `Bearer ${token}` }
  }

  function handleDeleteItem(e, id){
    e.preventDefault()
    axios.delete(`https://pedidos.grupostra.com/api/v1/user/delete/${id}`, configB)
    .then((response) => {
        alert("Usuário deletado com sucesso")
        window.location = window.location.href
    })
  }

  useEffect(() => {
    const results = data.filter(searchNameFilter =>
      searchNameFilter.name.toLowerCase().includes(searchTerm)  
    );

    setSearchResults(results)
  }, [searchTerm]);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(searchResults.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(searchResults.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, searchResults]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  }

  function Items({ currentItems }) {
    return (
      <>
        {
        currentItems.map((item, i) => 
          <div key={i} className="col-line">
            <p>{item.name}</p> 
            <div className="line-opt">
              <div className="opt-user-config">
                <a href="#" onClick={(e) => userProfile(e, item.id)}>Ver Perfil <PersonIcon /></a>
                <a href="#" onClick={(e) => handleEditItem(e, item.id)}>Editar <EditIcon /></a>
                <a href="#" onClick={(e) => handleDeleteItem(e, item.id)}>Excluir <HighlightOffIcon /></a>
              </div>
            </div>
          </div>
        )
      }
      </>
    );
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
            <div className="col-2">
              <div className="rh-news container">
                <div className="title-rh-news">
                  <h3>Colaboradores</h3>
                  <div className="add-collaborator-btn">
                    <Link to="/cadastrar-colaborador">Cadastrar novo colaborador <AddCircleOutlineIcon /></Link>
                  </div>
                </div>
                <div className="search-name">
                  <Legend value="Buscar por nome:"/>
                  <Input type="text" name="search" id="search" onChange={(e) => setSearchTerm(e.target.value)}/>
                </div>
                <div className="ramais-body">
                  <div className='names-list'>
                    <Items currentItems={currentItems} />
                    <div className="pagination-col">
                      <ReactPaginate
                        className='list-pagination'
                        breakLabel="..."
                        nextLabel={<NavigateNextIcon />}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={2}
                        pageCount={pageCount}
                        previousLabel={<NavigateBeforeIcon />}
                        renderOnZeroPageCount={null}
                      />
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

export default NewColaborator;
