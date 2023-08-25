interface AuthenticationCreateAccountProps {
  name: string;
  email: string;
  password: string;
  emailAlreadyInUse: string;
  handleSetName: (value: string) => void;
  handleSetEmail: (value: string) => void;
  handleSetPassword: (value: string) => void;
  handleCreateUser: () => void;
  handleSetExistingUser: (value: boolean) => void;
}

const AuthenticationCreateAccount = ({
  name,
  email,
  password,
  emailAlreadyInUse,
  handleSetName,
  handleSetEmail,
  handleSetPassword,
  handleCreateUser,
  handleSetExistingUser,
}: AuthenticationCreateAccountProps) => {
  return (
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
        <p className="exist" onClick={() => handleSetExistingUser(true)}>
          Already have an account? Sign in
        </p>
      </div>
    </div>
  );
};

export default AuthenticationCreateAccount;
