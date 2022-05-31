import { Component } from 'react';
import Header from '../template/header/Header';
import NavMenu from '../template/nav_menu/NavMenu';
import Body from '../template/body/Body';

class Home extends Component {

render(){
  document.title = "Grupo Stra - Dashboard"

  return(
    <div className="App">
        <Header />
        <div className="main">
          <div id="side-bar" className="side-bar open">
            <NavMenu />
          </div>
          <div className="body">
            <Body/>
          </div>
        </div>
    </div>
  )
}

}

export default Home;
