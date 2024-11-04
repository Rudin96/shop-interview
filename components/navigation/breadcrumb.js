import { Component } from "react";

class BreadCrumbComponent extends Component {
    render()
    {
        return <div>{this.props.breadCrumbs.map((e, i) => { 
            return <p key={i}>{`${e} ${i === this.props.breadCrumbs.length - 1 ? "" : "/"}`}</p>
        })}</div>
    }
}

export default BreadCrumbComponent;