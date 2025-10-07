import Header from "../../components/Header";
import styles from "./Home.module.css";
import { Link } from "react-router";

function Home() {
    return (
        <>
            <Header />
            <div className={styles.cardContainer}>
                <div className="card">
                    <div className={styles.card_content}>
                        <h2>Pizza de Calabresa</h2>
                        <div className={styles.Cards}>
                            <p>Deliciosa pizza de calabresa com borda recheada de catupiry, perfeita para compartilhar com amigos e família.</p>
                            <Link to="/Products" className={styles.whiteLink}>Peça Agora</Link>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className={styles.card_content}>
                        <h2>Lasanha à Bolonhesa</h2>
                        <div className={styles.Cards}>
                            <p>Camadas de massa fresca com molho bolonhesa e queijo gratinado, uma explosão de sabor italiano.</p>
                            <Link to="/Products" className={styles.whiteLink}>Peça Agora</Link>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className={styles.card_content}>
                        <h2>Hambúrguer Artesanal</h2>
                        <div className={styles.Cards}>
                            <p>Pão brioche, carne suculenta, queijo cheddar e molho especial. Uma experiência gourmet irresistível.</p>
                            <Link to="/Products" className={styles.whiteLink}>Peça Agora</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
