import { Component } from 'react';
import './Requests.css'
import Header from '../template/header/Header';
import NavMenu from '../template/nav_menu/NavMenu';
import { Link } from 'react-router-dom';
import Refund from '../template/refund/Refund';
import Attests from '../template/attests/Attests';
import Holidays from '../template/holidays/Holidays';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

class Requests extends Component {

render(){
  document.title = "Grupo Stra - Communication"

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
                  <div className="title-container">
                    <h3>Requisições</h3>
                    <Link to="/solicitar-ferias">Solicitar Férias <AddCircleOutlineIcon /></Link>
                  </div>
                  <div className="ramais-body">
                      <Refund />
                      <Attests />
                      <Holidays />
                  </div>
                </div>
            </div>         
          </div>
        </div>
      </div>
  )
}

}

export default Requests;
