import AuthenticationCreateAccount from "../../components/authentication-createaccount";
import AuthenticationInstruction from "../../components/authentication-instruction";
import AuthenticationIntroduction from "../../components/authentication-intro";
import AuthenticationSignIn from "../../components/authentication-signin";
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
  const handleSetExistingUser = (valid: boolean) => {
    setIsExistingUser(valid);
  };
  return (
    <div className="authentication">
      <div className="authentication-text">
        <div className="auth-left">
          <AuthenticationIntroduction />
        </div>
        <div className="auth-right">
          <AuthenticationInstruction />
        </div>
      </div>
      {isExistingUser ? (
        <AuthenticationSignIn
          email={email}
          password={password}
          handleSetEmail={handleSetEmail}
          handleSetPassword={handleSetPassword}
          handleSignInUser={handleSignInUser}
          handleSetExistingUser={handleSetExistingUser}
        />
      ) : (
        <AuthenticationCreateAccount
          name={name}
          email={email}
          password={password}
          emailAlreadyInUse={emailAlreadyInUse}
          handleSetName={handleSetName}
          handleSetEmail={handleSetEmail}
          handleSetPassword={handleSetPassword}
          handleCreateUser={handleCreateUser}
          handleSetExistingUser={handleSetExistingUser}
        />
      )}
    </div>
  );
};

export default Authentication;
