import Header from "../../components/Header";
import styles from "./Home.module.css";
import PhoenixImg from '../../imgs/Phoenix-removebg-preview.png';
import { Link } from "react-router";

function Home() {
    return (
        <>
            <Header />
            <div className={styles.home_components}>
                <p className={styles.textAbout}>
                    <div class="card">
                        <div className={styles.card_content}>
                            <h2>Pizza de Calabresa</h2>
                            <div className={styles.Cards}>
                                <p>Deliciosa pizza de calabresa com borda recheada de catupiry, perfeita para compartilhar com amigos e família.</p>
                                <Link to="/Products">Peça Agora</Link>
                            </div>
                        </div>
                    </div>
                </p>
            </div>
        </>
    )
}

export default Home;