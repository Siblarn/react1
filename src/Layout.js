import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/health">Health</Link>
          </li>
          <li>
            <Link to="/new">สินค้าใหม่</Link>
          </li>
          <li>
            <Link to="/others">สินค้าอื่นๆ</Link>
          </li>
          <li>
            <Link to="/fashion">เสื้อผ้าและเครื่องประดับ</Link>
          </li>
          <li>
            <Link to="/mombaby">แม่และเด็ก</Link>
          </li>
          <li>
            <Link to="/food">Food & Drink </Link>
          </li>
          <li>
            <Link to="/mobile">Mobile & Gadgets </Link>
          </li>
          <li>
            <Link to="/pet"> Pet </Link>
          </li>
          <li>
            <Link to="/audio"> Audio </Link>
          </li>
          <li>
            <Link to="/camera"> Camera/Drones </Link>
          </li>
          <li>
            <Link to="/book"> Book/Magazines </Link>
          </li>
          <li>
            <Link to="/tickets"> Tickets/Vouchers </Link>
          </li>
          <li>
            <Link to="/motocycles"> Motorcycles </Link>
          </li>
          <li>
            <Link to="/automobiles"> Automobiles </Link>
          </li>
          <li>
            <Link to="/stationery"> Stationery </Link>
          </li>
          <li>
            <Link to="/hobbies"> Hobbies & Collections </Link>
          </li>
          <li>
            <Link to="/sports"> Sports & Outdoors </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;