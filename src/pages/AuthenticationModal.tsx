import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SigninForm from "../components/SigninForm";
import SignupForm from "../components/SignupForm";
import "./styles.css";

const AuthenticationModal: React.FC = () => {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const location = useLocation();

  const handleSignupClick = () => {
    setShowSignupForm(!showSignupForm);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {location.pathname === "/home" && <div className="modal-wrapper" />}
      <div
        className="modal-container rounded-3xl bg-[#EBEBEB] p-3"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-white px-4 py-10 flex flex-col justify-center items-center gap-2 rounded-2xl shadow-4xl">
          {showSignupForm ? <SignupForm /> : <SigninForm />}
        </div>
        <div className="flex gap-2 items-center justify-center text-sm mt-2">
          <span className="text-[#00000099]">
            {showSignupForm
              ? "Already have an account?"
              : "Do not have an account?"}
          </span>
          <button
            type="button"
            className="secondary-btn"
            onClick={handleSignupClick}
          >
            {showSignupForm ? "Sign in" : "Sign Up"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AuthenticationModal;
