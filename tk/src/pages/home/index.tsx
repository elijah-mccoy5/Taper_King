import HomeError from "../../components/home-error";
import HomeHeader from "../../components/home-header";
import HomeIntroduction from "../../components/home-introduction";
import "./index.css";

interface HomeProps {
  isLoggedIn: boolean;
}
const Home = ({ isLoggedIn }: HomeProps) => {
  return (
    <>
      {isLoggedIn ? (
        <div className="home">
          <HomeHeader />
          <HomeIntroduction />
        </div>
      ) : (
        <HomeError />
      )}
    </>
  );
};

export default Home;
