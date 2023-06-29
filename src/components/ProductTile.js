import { Link } from "react-router-dom";

const ProductTile = ( params ) =>
{
    const item = params.item;
    const logo = require("../../public/product-images/" + item.images[0]); 
    return (
        <div className="item-display">
            <Link to="/product" state={item}>
                <img width="100%" src={logo} alt="Logo" />
            </Link>
            <div className="fs-16" style={{color:'#555'}}>{ item.name }</div>
            <div className="fs-14" style={{color:'#999'}}>{ item.brand }</div>
            <div className="fs-20 bold" style={{color:'#017c87'}}>${ item.price }</div>
        </div>
    );
}

export default ProductTile;