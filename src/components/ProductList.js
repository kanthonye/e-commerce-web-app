import {products} from "./data"
import ProductTile from "./ProductTile";

function ProductList() 
{
  return (
    <div>
        <div className="display-list">
            {products.map((data, key) => {
                return (
                    <div key={key}>
                        <ProductTile item={data} />
                    </div>
                );
            })}
        </div>
    </div>
  );
}

export default ProductList;