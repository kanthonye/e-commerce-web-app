import { Outlet, Link } from "react-router-dom";
import Icon from "./Icon";
import MiniShoppingBag from "./MiniShoppingBag";

const Layout = ( params ) => {
  return (
    <>
      <nav className="nav">
        <div className="container">
            <div className="row-align gap-0 v-center">
                <Link onClick={() => params.toggleMenu()}><Icon src={"menu.png"} /></Link>
                <Link to="/">
                  <div className="fs-20 fc-black bold">SWAGLANE</div>
                </Link>
            </div>
            <div className="display-row gap-30">
                <Icon src={"advanced-search.png"}/>
                <div onClick={() => params.toggleCart()} style={{cursor:"pointer"}}>
                  <MiniShoppingBag shoppingBag={params.shoppingBag} />
                </div>
            </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;