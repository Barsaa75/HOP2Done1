import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo" to="./home">
        Home
      </Link>
      <div className="bar">
        <Link style={{ color: "black" }} className="page" to="./products">
          Products
        </Link>
        <Link style={{ color: "black" }} className="page" to="./services">
          Services
        </Link>
        <Link style={{ color: "black" }} className="page" to="./contact">
          Contact
        </Link>
        <Link style={{ color: "black" }} className="page" to="./login">
          LogIn
        </Link>
      </div>
    </div>
  );
};

export default Header;
