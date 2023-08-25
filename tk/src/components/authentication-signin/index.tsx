interface AuthenticationSignInProps {
  email: string;
  password: string;
  handleSetEmail: (value: string) => void;
  handleSetPassword: (value: string) => void;
  handleSignInUser: () => void;
  handleSetExistingUser: (value: boolean) => void;
}

const AuthenticationSignIn = ({
  email,
  password,
  handleSetEmail,
  handleSetPassword,
  handleSignInUser,
  handleSetExistingUser,
}: AuthenticationSignInProps) => {
  return (
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
        <p className="exist" onClick={() => handleSetExistingUser(false)}>
          Dont have an account? Create one
        </p>
      </div>
    </div>
  );
};

export default AuthenticationSignIn;
