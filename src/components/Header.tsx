import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import logoutIcon from "../assets/logout.svg";
import { useAppContext } from "../context/appContext";

const Header: React.FC = () => {
  const { isAuthorized, logout } = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (isAuthorized) {
      logout();
    }
    navigate("/auth");
  };

  return (
    <div className="w-full py-4 px-8 flex justify-between items-center fixed top-0 h-16 bg-white">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" className="h-6 w-6" />
        <span className="text-md font-semibold">foo-rum</span>
      </div>
      {location.pathname === "/home" ? (
        <button
          className="text-md font-semibold flex items-center gap-1 cursor-pointer bg-transparent border-none outline-none"
          onClick={handleLogout}
          type="button"
        >
          {isAuthorized ? "Log out" : "Login"}
          <img src={logoutIcon} alt="" className="h-6 w-6" />
        </button>
      ) : (
        <Link to="/home">
          <span className="text-md font-semibold cursor-pointer">
            Back to Home
          </span>
        </Link>
      )}
    </div>
  );
};

export default Header;
