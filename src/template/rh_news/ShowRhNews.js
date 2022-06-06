import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react'; 
import { AuthContext } from '../../Auth' 
import './ShowRhNews.css';
import ReactPaginate from 'react-paginate';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const ShowRhNews = () => {
  const [data, setData] = useState([]);
  const { token } = useContext(AuthContext);

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  
  useEffect(() => {
    axios.get("http://api-dash.grupostra.com/api/v1/post", config)
        .then((response) => {
          setData(response.data)  
          setCurrentItems(response.data)
        })
  }, []);

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(2);
    const [itemOffset, setItemOffset] = useState(0);
    const [selectedFilter, setSelectedFilter] = useState("#");
    const [render, setRender] = useState();
    const [txtBody, setTxtBody] = useState();
  
    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    }  

    useEffect(() => {
      if(selectedFilter != "#"){
        setRender(
          <>{
            currentItems.filter(current => current.tag === selectedFilter).filter(current => current.is_published === 1).map((item, i) =>
                <div className='new-rh-container' key={i}>
                  <h1>{item.title}</h1>
                  <div className="img-news">
                    <img src={item.image} alt="" />
                  </div>
                  <h3>{item.subtitle}</h3>
                  <div className="text-body">
                    {
                      <li dangerouslySetInnerHTML={{ __html: item.body }} />
                    }
                  </div>
                </div>
              )
          }</>
        )
      } else {
        setRender(
          <>{
            currentItems.filter(current => current.is_published === 1).map((item, i) =>
                <div className='new-rh-container' key={i}>
                  <h1>{item.title}</h1>
                  <div className="img-news">
                    <img src={item.image} alt="" />
                  </div>
                  <h3>{item.subtitle}</h3>
                  <div className="text-body">
                    {
                      <li dangerouslySetInnerHTML={{ __html: item.body }} />
                    }
                  </div>
                </div>
            )
          }</>
        )
      }
    }, [selectedFilter, currentItems])

    function Items({ currentItems }) {
      return (
        <>
          {render}
        </>
      );
    }
    
  return (
    <div className='container-posts'>
      <div className="filter-news">
        <p>Filtrar por </p>
        <select name="filter-news" id="filter-news" className="select_pers" onChange={(e) => setSelectedFilter(e.target.value)} >
          <option value="birthday_person">Aniversários</option>
          <option value="article">Artigos</option>
          <option value="important_notices">Avisos importantes</option>
          <option value="event">Eventos</option>
          <option value="news">News</option>
          <option value="new_collaborators">Novos colaboradores</option>
          <option value="#" selected>Todos</option>
        </select>
      </div>
      <Items currentItems={currentItems} />
      <div className="pagination-items">
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
  );
};

export default ShowRhNews;