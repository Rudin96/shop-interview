import Product_Grid_Item_Component from "./product_grid_item";
import { Component } from "react";
import ShopDataService from "../../src/utilites/ShopDataService"
import shopStyles from "../../styles/shop.module.css"

class Product_Grid_Component extends Component {
    constructor(props)
    {
        super(props);
        this.state = {products: [], loading: true};
    }
    
    render()
    {
        if(!this.state.loading)
        {
            return <div className={shopStyles.productGrid}>{this.state.products}</div>;
        }

        return <div>Hämtar produkter...</div>
    }

    async componentDidMount()
    {
        await this.getProducts();
        this.state.loading = false;
    }

    async getProducts()
    {
        let productComps = [];
        try {
            let fetchedProducts = await ShopDataService.getAllProducts();
            fetchedProducts.forEach(element => {
                if (element.price !== "")
                    productComps.push(<Product_Grid_Item_Component key={element.id} productInfo={element}></Product_Grid_Item_Component>)
            });

            this.setState({products: productComps, loading: false});
        } catch (error) {
            console.log(error);
            productComps.push(<Product_Grid_Item_Component name={"Product Name"}></Product_Grid_Item_Component>)
        }
    }
}

export default Product_Grid_Component;