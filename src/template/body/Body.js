import { Component } from 'react';
import Ramais from '../ramais/Ramais';
import ShowRhNews from '../rh_news/ShowRhNews';
import Aniversario from '../births/Births';
import './Body.css';

class Body extends Component {

render(){

    return(
        <div id="body-main" className="body-main home open">
            <div className="row">
                <div className="col-2">
                    <div className="rh-news container">
                        {/* <PaginatedItems itemsPerPage={1} /> */}
                         <ShowRhNews/>
                    </div>
                </div>
                <div className="col-1">
                    <div className="ramais container">
                        <h3>Ramais e E-mails</h3>
                        <div className="ramais-body">
                             <Ramais /> 
                        </div>
                    </div>                  
                </div>
                <div className="col-1">
                    <div className="suporte container">
                        <h3>Suporte TI</h3>
                        <div className="suporte-body">
                            <a href="https://forms.clickup.com/f/2yd14-12083/VEP0XG9JCRGMGDDRNX" target="_blank"><button>Abrir chamado</button></a>
                        </div>
                    </div>
                    <div className="aniversariantes container">
                        <h3>Aniversariantes do Mês</h3>
                        <div className="aniversariantes-body">
                             <Aniversario /> 
                        </div>
                    </div>                    
                </div>                             
            </div>
        </div>
    )
}

}

export default Body;