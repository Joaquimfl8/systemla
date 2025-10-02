import Header from "../../components/Header";
import Products from "../../components/Products";
import styles from "./ProductsPage.module.css"

function ProductsPage() {
    return (
        <>
            <Header />
            <div className={styles.products_index}>
                <Products
                    ProductTitle = "X-Salada"
                    ProductImg = "https://cardapiodigital.vinculacao.com/wp-content/uploads/2021/02/xsalada-removebg-preview.png"
                    ProductDesc = "Hambúrguer suculento, queijo derretido, alface crocante, tomate fresco e maionese especial no pão macio."
                    ProductPrice = "$10000000"
                />

                <Products
                    ProductTitle = "Bolo com morango"
                    ProductImg = "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112615/20412_fotos_96-morango-trufado-com-leite-condensado_bolo_fatia_540x400px92.png"
                    ProductDesc = "Camadas fofinhas de chocolate, recheio cremoso e morangos frescos, coberto com ganache irresistível."
                    ProductPrice = "$10000000"
                />

                <Products
                    ProductTitle = "Coxinha de frango"
                    ProductImg = "https://oyshi.com.br/wp-content/uploads/2021/12/Coxinha-de-Mandioca-Frango_Prancheta-1-1.png"
                    ProductDesc = "Massa dourada e crocante, recheada com frango temperado e suculento."
                    ProductPrice = "$10000000"
                />
                
                <Products
                    ProductTitle = "Suco Natural de Laranja"
                    ProductImg = "https://giassi.vtexassets.com/arquivos/ids/1163044/Suco-Integral-Laranja-Natural-One-Refrigerado-Garrafa-15l.png?v=638510173969700000"
                    ProductDesc = "Laranjas frescas espremidas na hora, cheias de sabor e vitaminas."
                    ProductPrice = "$10000000"
                />
            </div>
        </>
    )
}

export default ProductsPage