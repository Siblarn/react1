import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <Navbar />
          <div className="btn btn-outline-primary mx-0.5">
            <Link to="/testapi">ลองยิงมะม่วง</Link>
          </div>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
