import { Link } from "react-router-dom"
import Header from "../template/header/Header"
import NavMenu from "../template/nav_menu/NavMenu"
import styles from './Home.module.css'

function Home(){

    return(
        <div className={styles.home}>
            <NavMenu />
            <Header />
            
        </div>)
}

export default Home