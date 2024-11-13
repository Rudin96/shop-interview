import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Product_Grid_Component from "../../components/product/product_grid";
import shopStyle from "../../styles/shop.module.css"
import CategorySwitcher_Component from "../../components/navigation/category_switcher";

const CategoryPage = () => {
    const router = useRouter();
    const [category, setCategory] = useState(null);

    useEffect(() => {
        if(router.query.category !== category) {
            setCategory(router.query.category);
        }
    }, [router.query.category]);

    useEffect(() => {
        console.log("Category Updated", category);
    }, [category]);

    return(
        <div className={shopStyle.body}>
            <h1>Shop</h1>
            <CategorySwitcher_Component></CategorySwitcher_Component>
            <Product_Grid_Component category={category}></Product_Grid_Component>
        </div>
    )
}

export default CategoryPage;