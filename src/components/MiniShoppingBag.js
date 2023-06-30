
const MiniShoppingBag = ( params ) =>
{
    const bag = params.bag;
    const subtotal = params.subtotal;
    const total_item = params.total_item;
    const shopping_bag_icon = require("../images/shopping-bag.png"); 

    const DisplayItemCount = () => 
    {
        return (
        <>
            { total_item
            ? <div className="count-bubble fc-white fs-14 ff-agdasima center-xy ">
                {total_item}
                </div> 
            : null }
        </>
        );
    }

    return (
        <div className="center-xy gap-5">
        <div>
            <DisplayItemCount/>
            <img className="icons" src={shopping_bag_icon} alt="shopping-bag-icon" />
        </div>
        <div className="fc-red fs-20 ff-agdasima">${subtotal}</div>
        </div>
    );
}

export default MiniShoppingBag;