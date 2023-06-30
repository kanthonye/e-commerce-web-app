import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Spinner } from "./Buttons";
const ProductPage = ( params ) =>
{
   const location = useLocation();
   const item = location.state;
   const discount = item.discount / item.price;
   const imgurl = require("../../public/product-images/" + item.images[0]);

   const [ quantity, setQuantity ] = useState(1);
   const [ selected_size, setSelectedSize] = useState('XS');

   const img_style = {
      backgroundImage: 'url(' + imgurl + ')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width:'100%',
      height:'700px',
   };

   var content_style = {
       width:'100%',
       height:'auto',
       padding:'30px',
       backgroundColor:'#fff',
   };

   const bod_style = {
      width:'500px',
      height:'500px',
      backgroundColor:'red',
   };
   
   const ImageCatalog = () =>
   {
      const Image = ( params ) =>
      {
         const url = require("../../public/product-images/" + params.image);
         
         var style = {
            backgroundImage: 'url(' + url + ')',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
         };

         return (
            <div className="square-100 br-20" style={style}></div>
         );
      }

      return (
         <div className="row-align">
            {item.images.map((data, key) => {
               return (
                  <div key={key}>
                     <Image image={data} />
                  </div>
               );
            })}
         </div>
      );
   }

   const incrementQuantity = () =>
   {
      setQuantity((quantity + 1));
   }

   const decrementQuantity = () =>
   {
      setQuantity((quantity - 1));
   }

   const onSizeChange = (event) =>
   {
      setSelectedSize(event.target.value);
   };

   const addToBag = () =>
   {
      const elem = {
         item_id: item.id,
         count: quantity,
         size: selected_size,
      };
      params.addToBag(elem);
   }

   const DisplayPrice = () =>
   {
      const Price = () =>
      {
         return (
            <div className="row-align center gap-10">
               <label  className="fs-20">price:</label>
               <div className="bold fs-30">${ (item.price - item.price * discount).toFixed(2) }</div>
            </div>
         )
      }
      
      return (
         <div>
            { (item.discount !== 0)
            ?  <div>
                  <div className="row-align center gap-10">
                     <div>
                        
                        <span className="fs-20">( </span> 
                        <span className="fc-red fs-16">{ discount * 100 }%</span> 
                        <span className="fs-16"> discount off of </span>
                        <span className="bold fs-18">${ item.price }</span>
                        <span className="fs-20"> )</span> 
                        
                     </div>
                     <div className="fc-red"><Price/></div>
                  </div>
               </div>
            :  <Price />
            }
         </div>
      );
   }

   return (
      <div className="page">
         <Link to={'..'}>Go back</Link>
         <div style={img_style}>
         </div>
         <div style={content_style}>
            <div>{item.brand}</div>
            <div className="fs-25">{item.name}</div>

            <div className="pad-10"></div>

            <div className="row-align jc-space-between">
               <div className="row-align center gap-10">
                  <label>size: </label>
                  <select value={selected_size} onChange={onSizeChange}>
                  {
                     item.size.map((elem, key) => <option key={elem}>{elem}</option>)
                  }
                  </select>
               </div>
               <DisplayPrice/>
            </div>
            
            <div className="pad-10"></div>

            <hr/>
            <div><span>color: </span> {item.color}</div>
            <hr/>
            <div><span>gender: </span> {item.gender}</div>
            <hr/>
            <div><span>category: </span> {item.category}</div>
            <hr/>

            <div className="pad-10"></div>

            <div className="col-align gap-5"><div>description: </div> {item.description}</div>

            <div className="pad-10"></div>
            
            <Spinner count={quantity} increment={incrementQuantity} decrement={decrementQuantity} />

            <div className="pad-10"></div>

            <button className="button" onClick={() => addToBag()}>Add to Bag</button>
         </div>
         {/* <ImageCatalog /> */}
      </div>
   );
}

export default ProductPage;