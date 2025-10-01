import styles from './Header.module.css';

function Header() {
    return (
        <> 
            <div className={styles.header_components}>
                <h1 className={styles.header_titulo}>Phoenix Eats</h1>
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