import Link from "next/link";
import shopStyle from "../../styles/shop.module.css"

const LinkItem_Component = ({pageName}) => {
    return (
        //TODO: Fix the url pagename thingy
        <div className={shopStyle.linkItemComponent}>
            <Link href={`/shop/${pageName.toLowerCase()}`}>
                <a>{pageName}</a>
            </Link>
        </div>
    )
}

export default LinkItem_Component;