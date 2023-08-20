import "./index.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-text">
        <h1 className="home-header">Get Fresh.</h1>
        <h1 className="home-emoji">💈</h1>
      </div>
      <button className="home-book">
        <Link style={{ color: "white" }} to="/checkout">
          Book
        </Link>
      </button>
      <div className="introduction">
        <div className="introduction-left">
          <h2>Hello, Im Elijah 👋</h2>
          <p>
            I'm a 20-year-old Barber based in California. I provide quality
            haircuts and efficient service. <br />
            Your barber's favorite barber 🔥. <br />
          </p>
          <p>✅ Zelle</p>
          <p>✅ Venmo</p>
          <p>✅ Apple Pay</p>
          <p>✅ Paypal</p>
          <p>✅ Cash App</p>
        </div>
        <div className="introduction-right">
          <a href="tel:657-286-9548">
            <h3>📞</h3>
          </a>
          <a href="mailto:elijah.mccoy5@gmail.com">
            <h3>📧</h3>
          </a>
          <a href="https://www.instagram.com/elijah.mccoyy/">
            <h3>📷</h3>
          </a>
          <a href="https://www.youtube.com/channel/UCreJZj-uD3ndJNHKRs4Y5zw">
            <h3>▶️</h3>
          </a>
          <a href="https://twitter.com/SmoothBrainProd">
            <h3>🐦</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
