import "./index.css";
import { useState } from "react";

interface AuthenticationProps {
  name: string;
  email: string;
  password: string;
  emailAlreadyInUse: string;
  handleCreateUser: () => void;
  handleSignInUser: () => void;
  handleSetName: (value: string) => void;
  handleSetEmail: (value: string) => void;
  handleSetPassword: (value: string) => void;
}
const Authentication = ({
  name,
  email,
  password,
  handleCreateUser,
  handleSignInUser,
  handleSetName,
  handleSetEmail,
  handleSetPassword,
  emailAlreadyInUse,
}: AuthenticationProps) => {
  const [isExistingUser, setIsExistingUser] = useState(false);
  return (
    <div className="authentication">
      <div className="authentication-text">
        <div className="auth-left">
          <h1>What's up! 🔥</h1>
          <p>
            This is the new scheduling website I built. I wanted to practice my
            programming skills, and I figured this would be a cool way to do so.
            You can check out some of my other projects on my developer
            portfolio here ⬇️
          </p>
          <a href="http://elijahmccoy.com">
            <button className="auth-left-button">Portfolio</button>
          </a>
        </div>
        <div className="auth-right">
          <h1>📜 Instructions</h1>
          <p>
            Create an account <br />
            Book an appointment <br />
            Share link with your friends
          </p>
        </div>
      </div>
      {isExistingUser ? (
        <div className="account">
          <div className="account-header">
            <h1>Sign In</h1>
            <div className="info">
              <h1>ℹ️</h1>
              <p>
                Your credenitals are encrypted and stored securely with Firebase
                Firestore.
              </p>
            </div>
          </div>
          <div className="create">
            <input
              onChange={(e) => handleSetName(e.target.value)}
              value={name}
              placeholder="Name"
            />
            <input
              onChange={(e) => handleSetEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
            <input
              type="password"
              onChange={(e) => handleSetPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
            <button onClick={handleSignInUser}>Done</button>
            <p className="exist" onClick={() => setIsExistingUser(false)}>
              Dont have an account? Create one
            </p>
          </div>
        </div>
      ) : (
        <div className="account">
          <div className="account-header">
            <h1>Create Account</h1>
            <div className="info">
              <h1>ℹ️</h1>
              <p>
                Your credenitals are encrypted and stored securely with Firebase
                Firestore.
              </p>
            </div>
          </div>
          <div className="create">
            <input
              onChange={(e) => handleSetName(e.target.value)}
              value={name}
              placeholder="Name"
            />
            <input
              onChange={(e) => handleSetEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
            <input
              type="password"
              onChange={(e) => handleSetPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
            <p
              className={
                emailAlreadyInUse == " " ? "email-error-hidden" : "email-error"
              }
            >
              {emailAlreadyInUse}
            </p>
            <button onClick={handleCreateUser}>Done</button>
            <p className="exist" onClick={() => setIsExistingUser(true)}>
              Already have an account? Sign in
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Authentication;
