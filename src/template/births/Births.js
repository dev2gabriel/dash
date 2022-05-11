import './Births.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Births(){

    const [data, setData] = useState([])
    const date = new Date();
    const currentMonth = date.getMonth() + 1; 


    useEffect(() => {
        axios.get("https://pedidos.grupostra.com/api/v1/table/users")
        .then((response) => {
            setData(response.data)  
        })
      }, []);
      

    return(
        <div className='container_births'>
            {data.filter(month => parseInt(month.birth_date.slice(5, 7)) === currentMonth).map((filteredBirth, index) => (
                <div key={index} className="aniversario-container">
                    <div className="birthday-photo">
                      <img src={filteredBirth.photo_url} alt="" srcset="" />
                    </div>
                    <div className="birthday-name">{filteredBirth.name}, nosso(a) {filteredBirth.position}, faz {2022 - filteredBirth.birth_date.slice(0, 4)} anos neste mês, no dia {filteredBirth.birth_date.slice(5, 7)}.</div>
                </div>
            ))}
        </div>
    )
}

export default Births;