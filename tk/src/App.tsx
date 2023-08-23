import "./App.css";
import Header from "./components/header";
import Authentication from "./pages/authentication";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./index.css";
import Checkout from "./pages/checkout";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [emailAlreadyInUse, setEmailAlreadyInUse] = useState("");

  const navigate = useNavigate();

  const handleSignInUser = () => {
    signInWithEmailAndPassword(auth, email, password).then(() => {
      setIsLoggedIn(true);
      navigate("/home");
    });
  };

  const handleCreateUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsLoggedIn(true);
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setEmailAlreadyInUse("Invalid credentials");
      });
  };
  const handleSetName = (value: string) => {
    setName(value);
  };
  const handleSetEmail = (value: string) => {
    setEmail(value);
  };
  const handleSetPassword = (value: string) => {
    setPassword(value);
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/"
          element={
            <Authentication
              name={name}
              email={email}
              password={password}
              handleCreateUser={handleCreateUser}
              handleSignInUser={handleSignInUser}
              handleSetName={handleSetName}
              handleSetEmail={handleSetEmail}
              handleSetPassword={handleSetPassword}
              emailAlreadyInUse={emailAlreadyInUse}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
