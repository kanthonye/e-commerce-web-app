import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const ProductPage = () =>
{
   const location = useLocation();
   const item = location.state;
   console.log(item);
   const imgurl = require("../../public/product-images/" + item.images[0]);

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

   const ImageCatalog = () =>
   {
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


   var divStyle = {
      backgroundImage: 'url(' + imgurl + ')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width:'100%',
      height:'700px',
    };
    var circle_style = {
       width:'500px',
       height:'200px',
       borderRadius:'50%',
       backgroundColor:'#fff',
       position:'absolute',
       top:'-100px'
,     };
     var bod_style = {
        width:'500px',
        height:'500px',
        backgroundColor:'red',
      };

   return (
      <div className="page">
         <Link to={'..'}>Go back</Link>
            <ImageCatalog />
         <div style={divStyle}>
         </div>
         <button>add to cart</button>
      </div>
   );
}

export default ProductPage;