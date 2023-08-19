import NavBar from './navbar';
import styles from './layout.module.css';

export default function Layout({children}){


    return(
        <div>
            <NavBar />
            <div className={styles.containerStyle}>{children}</div>
        </div>
    )
}
