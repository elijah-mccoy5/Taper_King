import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <p>
        <Link style={{ color: "white" }} to="/home">
          ELIJAH MCCOY 🚀
          {/* 👋 */}
        </Link>
      </p>
    </div>
  );
};

export default Header;
