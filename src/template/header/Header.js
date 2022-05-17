import './Header.css';
import { useContext } from 'react'; 
import { AuthContext } from '../../Auth' 
import logo from '../../assets/grupostra_horizontal_2_180x.png';
import Button from '../../components/Button';
import SignNotification from '../../assets/icons8-lembrete-de-compromissos.gif'
import SignNotificationStatic from '../../assets/icons8-lembrete-de-compromissos-48.png'
import ErrorIcon from '@mui/icons-material/Error';

function Header(){
    const { user, logout, userId, userPhoto } = useContext(AuthContext);

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
   
    function openNotificationModal(e){
        e.preventDefault()
        let modalNotifications = document.querySelector('.modal-notifications')
        modalNotifications.classList.toggle('notifications-on')
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
                    <div className="nav-notifications">
                        <a href="#" onClick={openNotificationModal} onMouseEnter={() => document.querySelector('.sign-notification').src = SignNotification} onMouseLeave={() => document.querySelector('.sign-notification').src = SignNotificationStatic}><img className='sign-notification' src={SignNotificationStatic} alt="" /></a>
                    </div>
                    <div className="modal-notifications">
                        <div className="notifications-container">
                            <div className="notifications-line">
                                <div className="left-color"></div>
                                <div className="icon-color"><ErrorIcon /></div>
                                <div className="text-info">
                                    <h1>Você sabia?</h1>
                                    <p>Aqui tem alguma coisa que você gostaria de saber!</p>
                                </div>
                            </div>
                            <div className="notifications-line">
                                <div className="left-color"></div>
                                <div className="icon-color"><ErrorIcon /></div>
                                <div className="text-info">
                                    <h1>Você sabia?</h1>
                                    <p>Aqui tem alguma coisa que você gostaria de saber!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" onClick={handleUserMenu}>
                        <p className="user-name">{user}</p>
                        <div className="user-photo">
                            <img src={userPhoto} alt="" />
                        </div>
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