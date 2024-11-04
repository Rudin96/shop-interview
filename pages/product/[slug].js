import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ShopDataService from "../../src/utilites/ShopDataService";
import BreadCrumbComponent from "../../components/navigation/breadcrumb";

const ProductPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    const [product, setProduct] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [categoryNames, setCategories] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            if (!slug)
                return;

            try {
                let products = await ShopDataService.getAllProducts();
                products.forEach(element => {
                    if(element.slug === slug)
                    {
                        setProduct(element);
                        element.categories.forEach((e, i) => categoryNames.push(e.name));
                        console.log(categoryNames);
                        return;
                    }
                });
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [slug]);

    if(loading)
        return(<div>Laddar...</div>);

    if(error)
        return(<div>Error has occurred...</div>);   

    return(
        <div>
            <BreadCrumbComponent breadCrumbs={categoryNames}></BreadCrumbComponent>
            <h1>{product.name}</h1>
            <div className="product-image">{product.images.map((e, i) => {
                if (i < 1)
                    return <img key={i} src={e.src}></img>
            })}</div>
            <h2>{product.price}</h2>


        </div>
    )
}



export default ProductPage;