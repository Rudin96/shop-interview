import { Component } from "react";
import LinkItem_Component from "./link_item";
import shopStyle from "../../styles/shop.module.css"
import ShopDataService from "../../src/utilites/ShopDataService";

class CategorySwitcher_Component extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            categoryUrl: "https://shop-interview.acrowd.se",
            categories: [],
            loading: true
        }
    }

    render()
    {
        if(!this.state.loading)
        {
            return(
                <div className={shopStyle.categorySwitcher}>
                    {this.state.categories.map((o, i) => <LinkItem_Component key={i} pageName={`${o.name}`}></LinkItem_Component>)}
                </div>
            )
        }

        return(<div><p>Laddar...</p></div>)
    }

    async componentDidMount()
    {
        this.setState({categories: await ShopDataService.getAllCategories(), loading: false});
    }
}

export default CategorySwitcher_Component;