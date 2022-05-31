import './Births.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useContext } from 'react'; 
import { AuthContext } from '../../Auth' 

function Births(){

    const { token } = useContext(AuthContext);
    const [data, setData] = useState([])
    const date = new Date();
    const currentMonth = date.getMonth() + 1; 
    var arrBirthFilter = [];

    const config = {
      headers : {
          'Authorization' : `Bearer ${token}`
        }
    };

      useEffect(() => {
        axios.get("https://pedidos.grupostra.com/api/v1/user/show-all", config)
        .then((response) => {
            setData(response.data)  
        })
      }, []);

      useEffect(() =>{
        data.filter(month => parseInt(month.birth_date.slice(5, 7)) === currentMonth).map((filteredBirth) => (
          arrBirthFilter.push(filteredBirth)
        ))
      }, [arrBirthFilter])
      
      const [currentItems, setCurrentItems] = useState([]);
      const [pageCount, setPageCount] = useState(0);
      const [itemsPerPage, setItemsPerPage] = useState(1);
      const [itemOffset, setItemOffset] = useState(0);

      useEffect(() => {
          const endOffset = itemOffset + itemsPerPage;
          setCurrentItems(arrBirthFilter.slice(itemOffset, endOffset));
          setPageCount(Math.ceil(arrBirthFilter.length / itemsPerPage));
      }, [itemOffset, itemsPerPage, data]);

      const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % arrBirthFilter.length;
          setItemOffset(newOffset);
      }
  
      function Items({ currentItems }) {
        return (
          <>
            {
            currentItems.map((item, index) => (
                <div key={index} className="aniversario-container">
                    <div className="birthday-photo">
                      <img src={item?.photo_url} alt="" />
                    </div>
                    <div className="birthday-name">{item?.name.split(" ", 1)}, nosso(a) {item?.position}, faz {2022 - item?.birth_date.slice(0, 4)} anos neste mês, no dia {item.birth_date?.slice(5, 7)}.</div>
                </div>
            ))}
          </>
        );
      }

    return(
        <div className='container_births'>
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
    )
}

export default Births;