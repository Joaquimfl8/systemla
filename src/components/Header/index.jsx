import styles from './Header.module.css';
import PhoenixImg from '../../imgs/Phoenix-removebg-preview.png';

function Header() {
    return (
        <> 
            <div className={styles.header_components}>
                <div className={styles.header_title}>
                    <img src={PhoenixImg} alt="" />
                    <h1 className={styles.header_titulo}>Phoenix Eats</h1>
                </div>
                <div className={styles.header_anchors}>
                    <p>aaaaaa</p>
                    <p>/aaaaaa</p>
                    <p>/aaaaaa</p>
                    <p>/aaaaaa</p>
                </div>
            </div>
        </>
    )
}

export default Header;