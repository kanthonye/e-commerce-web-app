import {PlusButn, MinusButn, XButn} from './Buttons'


const Spinner = ( params ) =>
{
  return (
    <div className="row-align center gap-15">
        <MinusButn onClick={() => params.decrement()} />
        {params.count}
        <PlusButn onClick={() => params.increment()} />
    </div>
  );
}


const BagItem = ( params ) =>
{
  const id = params.item.item.id;
  const count = params.item.count;
  const item = params.item.item;
  const imgurl = require("../../public/product-images/" + item.images[0]);

  var divStyle = {
    backgroundImage: 'url(' + imgurl + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const onRemove = () =>
  {
    params.removeItem(id);
  }
  
  const onDecrement = () =>
  {
    console.log("decrement quantity");
    params.decrementItem(id);
  }

  const onIncrement = () =>
  {
    console.log("increment quantity");
    params.incrementItem(id);
  }

  return (

    <div className="row-align pad-20 gap-20">
      {/* image on the left */}
      <div className="square-100 br-20" style={divStyle}>
      </div>
      
      {/* detail on the right */}
      <div className="col-align w100p" >
        <div className="row-align jc-space-between center w100p">
          <div className="ff-agdasima fc-gray bold">
            {item.name}
          </div>
          <XButn onClick={() => onRemove() }/>
        </div>

        <div className="row-align jc-space-between center ff-agdasima fc-gray" style={{marginBottom:'15px',}}>
          <div><span>size:</span> {item.size}</div>
          <div><span>color:</span> {item.color}</div>
        </div>

        <div className="row-align jc-space-between center">
          { item.discount 
            ? <div className="ff-agdasima fs-25 fc-red"> ${parseFloat(item.price) - parseFloat(item.discount)}</div>
            : <div className="ff-agdasima fs-25"> ${parseFloat(item.price)} </div>
          }
          <Spinner 
            count={count} 
            decrement={() => onDecrement()} 
            increment={() => onIncrement()} 
          />
        </div>
      </div>
    </div>
  );
}

export default BagItem;
