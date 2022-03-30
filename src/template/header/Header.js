import styles from './Header.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import userImg from '../../assets/user.jpg'

function Header(){
    return(
        <header>
            <div className={styles.header_container}>
                <div className={styles.header_btn}>
                    <a href="#"><span><MenuIcon fontSize='large'/></span> Menu</a>
                </div>
                <div className={styles.header_user}>
                    <div className={styles.header_img}>
                        <div className={styles.user_img}>
                            <img src={userImg} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header