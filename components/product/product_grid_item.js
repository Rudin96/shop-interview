import { Component } from "react";
import shopStyles from "../../styles/shop.module.css"
import Link from "next/link";

class Product_Grid_Item_Component extends Component {
    render()
    {
        return <div className={shopStyles.productGridItem}>
            {this.props.productInfo.images.map((e, i) => {
                if(i < 1)
                return <Link oncontextmenu="return false;" key={i} href={`/product/${this.props.productInfo.slug}`}>
                    <a><img className={shopStyles.productGridItemImage} src={e.src}></img></a>
                </Link>
            })}
            <h2 className={shopStyles.productGridItemTitle}>{this.props.productInfo.name}</h2>
            <p>{`${this.props.productInfo.price} $`}</p>
        </div>
    }
}

export default Product_Grid_Item_Component;