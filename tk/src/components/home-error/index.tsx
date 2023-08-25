import { Link } from "react-router-dom";

const HomeError = () => {
  return (
    <div className="home-error">
      <p>🙅</p>
      <h1>You must sign in before booking an appoointment</h1>
      <Link to="/">Go back to login screen</Link>
    </div>
  );
};

export default HomeError;
