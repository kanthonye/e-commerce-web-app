import {products} from "./data"
import ProductTile from "./ProductTile";

function ProductList( params ) 
{
  return (
    <div>
        <div className="display-list">
            {
                products.map((data, key) => 
                {
                    return (
                        <div key={key}>
                            <ProductTile item={data} clearOverlays={params.clearOverlays}  />
                        </div>
                    );
                })
            }
        </div>
    </div>
  );
}

export default ProductList;