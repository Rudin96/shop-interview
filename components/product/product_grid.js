import Product_Grid_Item_Component from "./product_grid_item";
import { Component, useEffect, useState } from "react";
import ShopDataService from "../../src/utilites/ShopDataService"
import shopStyles from "../../styles/shop.module.css"

class Product_Grid_Component extends Component {
    constructor(props)
    {
        super(props);
        this.state = {products: [], loading: true, category: props.category};
        console.log("product grid constructor!");
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
                {
                    console.log(this.props.category);
                    if(this.props.category === "" || this.props.category === undefined)
                        productComps.push(<Product_Grid_Item_Component key={element.id} productInfo={element}></Product_Grid_Item_Component>)
                    else if(element.categories.some(c => {
                        let cleanSlug = c.slug.split("-").at(0);
                        return cleanSlug === this.props.category;
                    }))
                        productComps.push(<Product_Grid_Item_Component key={element.id} productInfo={element}></Product_Grid_Item_Component>)
                }
            });

            this.setState({products: productComps, loading: false});
        } catch (error) {
            console.log(error);
            productComps.push(<Product_Grid_Item_Component name={"Product Name"}></Product_Grid_Item_Component>)
        }
    }
}

export default Product_Grid_Component;