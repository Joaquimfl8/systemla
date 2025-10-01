import styles from './Products.module.css';

function Products({ProductTitle = "", ProductImg = "", ProductDesc = ""}) {
    return (
        <>
            <div className={styles.products_components}>
                <h2>{ProductTitle}</h2>
                <img src={ProductImg} alt={ProductTitle} />
                <p>{ProductDesc}</p>
                <button>Comprar</button>
            </div>
        </>
    )
}

export default Products