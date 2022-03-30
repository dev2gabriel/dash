import styles from './NavMenu.module.css'
import logoImg from '../../assets/grupostra_horizontal_2_180x.png'
import { Link } from 'react-router-dom'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function NavMenu(){
    return(
        <nav className={styles.nav_menu}>
            <div className={styles.nav_link}>
                <div className={styles.nav_logo}>
                    <img src={logoImg}/>
                </div>
                <Link to="/">Link <span><ChevronRightIcon /></span></Link>
                <Link to="/">Link <span><ChevronRightIcon /></span></Link>
                <Link to="/">Link <span><ChevronRightIcon /></span></Link>
                <Link to="/">Link <span><ChevronRightIcon /></span></Link>
                <Link to="/">Link <span><ChevronRightIcon /></span></Link>
                <Link to="/">Link <span><ChevronRightIcon /></span></Link>
                <Link to="/">Link <span><ChevronRightIcon /></span></Link>
            </div>
        </nav>
    )
}

export default NavMenu