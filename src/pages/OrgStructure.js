import Header from '../template/header/Header';
import NavMenu from '../template/nav_menu/NavMenu';
import Body from '../template/body/Body';
import OrgChartHome from '../components/OrgChartHome';

function OrgStructure(){

  document.title = "Grupo Stra - Communication"

  return(
    <div className="App">
        <Header />
        <div className="main">
            <div id="side-bar" className="side-bar open">
                <NavMenu />
            </div>
            <div className="body">
                <div id="body-main" className="body-main home open">
                    <div className="row">
                        <div className="col-2">
                            <div className="rh-news container">
                                <OrgChartHome />                         
                            </div>
                        </div>            
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrgStructure;
