import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from '../../components/Posts';
import Pagination from '../../components/Pagination';
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
    axios.get("https://pedidos.grupostra.com/api/v1/post", config)
        .then((response) => {
          setData(response.data)  
        })
  }, []);

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(2);
    const [itemOffset, setItemOffset] = useState(0);
  
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

    function Items({ currentItems }) {
      return (
        <>
          {
            currentItems.map((item, i) =>
              <div className='new-rh-container' key={i}>
                <h1>{item.title}</h1>
                <img src={item.image} alt="" />
                <p>{item.body}</p>
              </div>
          )
        }
        </>
      );
    }
    
  return (
    <div className='container-posts'>
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