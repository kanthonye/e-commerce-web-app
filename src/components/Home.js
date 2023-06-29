import { Outlet, Link } from "react-router-dom";
import ProductList from "./ProductList";
import Menu from "./Menu";



function Home( params ) 
{
  return (
    <div className="page">
      {/* <ul className="hlist-links">[
        <li><Link to="/">Casual</Link></li> |
        <li><Link to="/">Formal</Link></li> |
        <li><Link to="/">Sports</Link></li> |
        <li><Link to="/">Swimwear</Link></li> |
        <li><Link to="/">Urben</Link></li> ]
      </ul> */}
      <ProductList />
    </div>
  );
}

export default Home;