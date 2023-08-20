import "./App.css";
import Header from "./components/header";
import Checkout from "./pages/checkout";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
