import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logout from "../assets/logout.svg";
import { useAppContext } from "../context/appContext";

function handleInputChange(
  setValue: (v: string) => void,
  setError: (e: string) => void
) {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setError("");
  };
}

const SigninForm = () => {
  const [username, setUsername] = useState("demo@example.com");
  const [password, setPassword] = useState("password123");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const { login, isAuthorized } = useAppContext();

  useEffect(() => {
    if (isAuthorized) {
      navigate("/home");
    }
  }, [isAuthorized, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUsernameError("");
    setPasswordError("");

    let isValid = true;
    if (!username.trim()) {
      setUsernameError("Email or username is required");
      isValid = false;
    }
    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    }

    if (isValid) {
      login();
    }
  };

  return (
    <>
      <span className="h-12 w-12 flex justify-center items-center rounded-full p-2 bg-[#F8F8F8]">
        <img src={logout} alt="logout" className="h-6 w-6" />
      </span>
      <h3 className="text-xl font-semibold">Sign in to continue</h3>
      <span className="text-[#0000007A] text-sm">
        Sign in to access all the features on this app
      </span>
      <form
        className="flex flex-col gap-3 w-full mt-6 px-4"
        onSubmit={handleSubmit}
      >
        <span className="flex flex-col gap-1">
          <label htmlFor="username"> Email or username</label>
          <input
            id="username"
            placeholder="Enter your email or username"
            value={username}
            onChange={handleInputChange(setUsername, setUsernameError)}
          />
          {usernameError && (
            <span className="text-red-500 text-sm">{usernameError}</span>
          )}
        </span>
        <span className="flex flex-col gap-1">
          <label htmlFor="password"> Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="bg-[#F8F8F8]"
            value={password}
            onChange={handleInputChange(setPassword, setPasswordError)}
          />
          {passwordError && (
            <span className="text-red-500 text-sm">{passwordError}</span>
          )}
        </span>
        <button type="submit" className="primary-btn mt-4">
          Sign In
        </button>
      </form>
    </>
  );
};

export default SigninForm;
