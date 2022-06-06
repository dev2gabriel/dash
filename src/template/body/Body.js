import { Component } from 'react';
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
                    <div className="suporte container">
                        <h3>Suporte TI</h3>
                        <div className="suporte-body">
                            <a href="https://forms.clickup.com/f/2yd14-12083/VEP0XG9JCRGMGDDRNX" target="_blank"><button>Abrir chamado</button></a>
                        </div>
                    </div>
                    <div className="ramais container">
                        <div className="ramais-body">
                            <div className="btn-info">
                                <div className="btn-info-div">
                                    <h3>Organograma</h3>
                                    <a href="/estrutura-organizacao">Ramais e E-mails</a>
                                </div>
                                <div className="btn-info-div">
                                    <h3>Conteúdos</h3>
                                    <a href="https://doc.clickup.com/d/h/2yd14-4023/a745019179b2528" target="_blank">Biblioteca Stra</a>
                                </div>
                            </div>
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