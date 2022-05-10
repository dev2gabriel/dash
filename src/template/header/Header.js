import './Header.css';
import { useContext } from 'react'; 
import { AuthContext } from '../../Auth' 
import logo from '../../assets/grupostra_horizontal_2_180x.png';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

function Header(){
    const { user, logout, userId } = useContext(AuthContext);
    function handleUserMenu(e){
        e.preventDefault();
        let userMenu = document.querySelector('.user-menu')
        userMenu.classList.toggle('on')
    }

    function handleLogout(){
        logout();
    }

    function userProfile(e){
        e.preventDefault()
        window.location = `/perfil-usuario/${userId}`
    }

    return(
        <div className="full-width">
            <div className="nav-container">
                <div className="nav-toggle">
                    <div id="title" className="title open">MENU</div>
                    <div id="burger" className="burger-container open" onClick={(e) =>{
                        document.getElementById('title').classList.toggle('open')
                        document.getElementById('burger').classList.toggle('open')
                        document.getElementById('side-bar').classList.toggle('open')
                        document.getElementById('body-main').classList.toggle('open')
                    }}>
                        <span className="burger"></span>
                        <span className="burger"></span>
                        <span className="burger"></span>
                    </div>
                </div>
                <div className="nav-logo">
                    <img src={logo} alt="Grupo Stra"></img>
                </div>
                <div className="nav-person">
                    <a href="#" onClick={handleUserMenu}>
                        <p className="user-name">{user}</p>
                        <div className="user-photo" style={
                        {
                            backgroundColor: "black"
                        }
                        }></div>
                    </a>
                    <div className="user-menu">
                        <a onClick={userProfile}>Perfil</a>
                        <Button onClick={handleLogout} value="Sair" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;