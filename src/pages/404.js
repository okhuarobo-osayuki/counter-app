import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import '../assets/css/404.css';
import NavBar from "../components/header";

function NotFoundPage() {
  return (
    <>
    <Helmet>
      <title>404 page</title>
      <meta name="description" content="404 page for catching any routing error occurring in react caused by the user" />
      <link rel="canonical" href="/pages/404" />
    </Helmet>
    <NavBar />
    <section className="four-0-four">
        <div className="four-0-four-img">
          <img
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt="Cave Man"
          />
          <div className="text">
            <h3>Looks like you're lost</h3>

            <p>the page you are looking for is not available!</p>

            <Link to={"/"}>Go to Home Page</Link>
          </div>
        </div>
    </section>
    </>
  );
}

export default NotFoundPage;
