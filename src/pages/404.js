import { NavLink, Link } from "react-router-dom";
import '../assets/404.css';

function NotFoundPage() {
  return (
    <section className="four-0-four">
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "#000",
                  color: "#fff",
                  textDecoration: "none",
                }
              : { backgroundColor: "#fff", color: "#000" }
          }
          to={"/pages/404"}
        >
          See 404 Page
        </NavLink>
        <NavLink to={"/pages/errorBoundary"}>Test Error Boundary</NavLink>
      </nav>

        <div className="four-0-four-img">
          <img
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt="Cave Man"
          />
          <div className="text">
            <h3>Looks like you're lost</h3>

            <p>the page you are looking for is not available!</p>

            <Link to={"/"}>Go to Home</Link>
          </div>
        </div>
    </section>
  );
}

export default NotFoundPage;
