
const MiniShoppingBag = ( params ) =>
{
  const bag = params.shoppingBag;
  const shopping_bag_icon = require("../images/shopping-bag.png"); 

  const Counter = () => 
  {
    return (
      <>
        { bag.items.length 
          ? <div className="count-bubble fc-white fs-14 ff-agdasima center-xy ">
              {bag.items.length}
            </div> 
          : null }
      </>
    );
  }
  return (
    <div className="center-xy gap-5">
      <div>
        <Counter/>
        <img className="icons" src={shopping_bag_icon} alt="shopping-bag-icon" />
      </div>
      <div className="fc-red fs-20 ff-agdasima">${bag.subtotal}</div>
    </div>
  );
}

export default MiniShoppingBag;