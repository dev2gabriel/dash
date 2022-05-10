import { Component } from 'react';
import './NewCollaborator.css'
import Header from '../template/header/Header';
import NavMenu from '../template/nav_menu/NavMenu';
import { Link } from 'react-router-dom';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

class Rating extends Component {

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
                <h3>Formulários</h3>
                    <div className="ramais-body">
                        
                    </div>
                </div>
            </div>         
            </div>
        </div>
        </div>
  )
}

}

export default Rating;
