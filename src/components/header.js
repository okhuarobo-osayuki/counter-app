import { useContext, useState } from "react";
import { Link, NavLink, useMatch, useNavigate, useResolvedPath, } from "react-router-dom";
import "../assets/css/navbar.css";
import { AuthContext } from "../context/authContext";

//A custom link component that styles itself as active if the pathname of the URL matches the active link

export function NavBarLink({ to, children, className, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });

  return (
    <li className={isActive ? "active" : "nav-item"}>
      <NavLink to={to} className={className} {...props}>
        {children}
      </NavLink>
    </li>
  );
}

function NavBar() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/pages/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <nav>
      <Link to="/" className="logo">
        Counter App
      </Link>
      {currentUser ? (
        <>
          <ul>
            <NavBarLink to="/">Home</NavBarLink>
            <NavBarLink to="/pages/404">404 Page</NavBarLink>
            <NavBarLink to="/pages/errorBoundary">Error Boundary</NavBarLink>
          </ul>
          <div>
            <p className="user">
              Hi <span>{currentUser.email}</span>!
            </p>
            <button className="logout" onClick={handleLogout}>
              Log out
            </button>
          </div>
        </>
      ) : <p className="log-in-msg">Hello! Please Log in to play the counter game</p>}
      {error && <p className="error">{error}</p>}
    </nav>
  );
}

export default NavBar;
