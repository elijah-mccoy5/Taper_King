import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <>
      <div className="home-text">
        <h1 className="home-header">Get Fresh.</h1>
        <h1 className="home-emoji">💈</h1>
      </div>
      <Link style={{ color: "white" }} to="/checkout">
        <div className="home-book">Book</div>
      </Link>
    </>
  );
};

export default HomeHeader;
