import Product_Grid_Component from "../components/product/product_grid"
import CategorySwitcher_Component from "../components/navigation/category_switcher"
import shopStyle from "../styles/shop.module.css"
import Document from "next/document"

export default function Home()
{
    
    return(
        <div className={shopStyle.body}>
            <h1>Shop</h1>
            <CategorySwitcher_Component></CategorySwitcher_Component>
            <Product_Grid_Component></Product_Grid_Component>
        </div>
    )
}