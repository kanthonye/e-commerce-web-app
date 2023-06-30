import { Outlet, Link } from "react-router-dom";
import MiniShoppingBag from "./MiniShoppingBag";
import Icon from "./Icon";

const Layout = ( params ) => {
    return (
        <>
        <nav className="nav">
            <div className="container">
                <div className="row-align gap-10 v-center">
                    <div onClick={() => params.toggleMenu()}>
                        <Icon src={"menu.png"} />
                    </div>

                    <Link to="/" onClick={() => params.clearOverlays()}>
                        <div className="fs-20 fc-black bold">SWAGLANE</div>
                    </Link>
                </div>
                <div className="display-row gap-30">
                    <Icon src={"advanced-search.png"}/>
                    <div onClick={() => params.toggleCart()} style={{cursor:"pointer"}}>
                        <MiniShoppingBag 
                            total_item={params.total_item}
                            subtotal={params.subtotal} 
                            bag={params.bag} 
                        />
                    </div>
                </div>
            </div>
        </nav>

        <Outlet />
        </>
    )
};

export default Layout;