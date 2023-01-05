import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import "../assets/css/navbar.css";

//A custom link component that styles itself as active if the pathname of the URL matches the active link

function NavBarLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });

  return(
    <li className={isActive ? "active" : "nav-item"}>
        <NavLink to={to} {...props}>
            {children}
        </NavLink>
    </li>
  )
}

function NavBar() {
    return(
        <nav>
            <ul>
                <NavBarLink to="/">Home</NavBarLink>
                <NavBarLink to="/pages/404">404 Page</NavBarLink>
                <NavBarLink to="/pages/errorBoundary">Error Boundary</NavBarLink>
            </ul>
        </nav>
    )
}

export default NavBar;