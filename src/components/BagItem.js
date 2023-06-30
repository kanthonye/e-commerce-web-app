import {Spinner, XButn} from './Buttons'

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
    params.decrementItem(id);
  }

  const onIncrement = () =>
  {
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
