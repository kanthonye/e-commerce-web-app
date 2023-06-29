import BagItem from './BagItem';

const Cart = ( params ) => 
{
  const subtotal = params.subtotal;
  const shipping = params.shipping;
  const items = params.bag.items;

  const RenderItems = () =>
  {
    return (
      <div>
        <div>
          {items.map((data, key) => {
              return (
                  <div key={key}>
                      <BagItem 
                        item={data} 
                        removeItem={params.removeItem}
                        decrementItem={params.decrementItem}
                        incrementItem={params.incrementItem}
                      />
                  </div>
              );
          })}
        </div>
      </div>
    );
  }
  
  const Checkout = () =>
  {
    return (
      <div>
        <div style={{marginTop:'80px',marginBottom:'40px'}}>
          <div className="row-align center jc-space-between">
            <div className="ff-agdasima fs-25">Subtotal</div>
            <div className="ff-agdasima bold fs-25">${subtotal}</div>
          </div>

          <hr/>

          <div className="row-align center jc-space-between">
            <div className="ff-agdasima fs-25">Shipping</div>
            <div className="ff-agdasima bold fs-25">${shipping}</div>
          </div>

          <hr/>
          
          <div className="row-align center jc-space-between">
            <div className="ff-agdasima fs-25">Bag Total</div>
            <div className="ff-agdasima bold fs-25">${parseFloat(subtotal) + parseFloat(shipping)}</div>
          </div>
        </div>

        <button className="button">checkout</button>

        <div style={{padding:'20px'}}></div>
      </div>
    );
  }

  const Display = ( item ) => {
    return (
      <div className="page cart">
        { items.length 
          ?
            <>
              <RenderItems />
              <Checkout />
            </>
          :
          <div className='row-align center' style={{width:'100%',height:'100%'}}>
            <h1 style={{color:"#AAA"}}>Bag is empty!</h1>
          </div>
        }
      </div>
    );
  }

  return (
    <div>
      {params.show && <Display />}
    </div>
  );
}

export default Cart;
