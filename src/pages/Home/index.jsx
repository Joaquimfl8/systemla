import Header from "../../components/Header";
import Products from "../../components/Products";

function Home() {
    return (
        <>
            <Header />
            <Products
            ProductTitle="X-Salada"
            ProductImg="https://static.codepill.com.br/domains/7e4e09e5-31af-44d5-bd1e-428319709832/products/gallery_6a868b45-ddf4-4a4f-b030-dd9172b363fb.jpg"
            ProductDesc="Um chis salada no caprixo."
            />
        </>
    )
}

export default Home;