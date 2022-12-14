import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/signup.css";
import "../assets/css/navbar.css";
import { AuthContext } from "../context/authContext";
import { auth, googleProvider } from "../assets/config/firebase";
import { sendEmailVerification } from "firebase/auth";
import { Helmet } from "react-helmet-async";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //handle submission of form
  //an asynchroneous function that handles the submission of the form and creates a new user, then redirects to the login page; if there is an error, it displays the error; if the passwords do not match, it displays an error; it also sends an email verification to the user
  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(auth, emailRef.current.value, passwordRef.current.value);
      sendEmailVerification(auth.currentUser)
      navigate("/pages/login");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  //google submit function that signs in the user through google authentication, and redirects the user to the home page.
  function googleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      googleSignIn(auth, googleProvider);
      navigate("/");
    } catch {
      setError("Failed to sign in with Google");
    }
  }

  return (
    <>
    <Helmet>
        <title>Sign Up</title>
        <meta
          name="description"
          content="Sign up to use the counter app"
        />
        <link rel="canonical" href="/pages/signup" />
      </Helmet>
    <nav>
        <div className="logo">
          Counter App
        </div>
        <p className="log-in-msg">
          Hello! Please Log in to play the counter game
        </p>
      </nav>
      <section className="signup-container">
        <div className="heading">
          <h2>Sign Up</h2>
          <svg
            className="s-up-img"
            width="151"
            height="156"
            viewBox="0 0 151 156"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2_152)">
              <path
                d="M134.154 118.72L134.151 118.791L137.696 156H111.827L108.474 133.147L106.998 155.414L80.4324 155.121L83.2542 125.887L85.654 112.336V112.333L86.0141 110.294H133.449L133.511 111.033L134.154 118.72Z"
                fill="#2F2E41"
              />
              <path
                d="M65.7892 140.291C68.529 140.786 71.3858 137.724 72.1702 133.45C72.5135 131.58 72.4027 129.787 71.9399 128.321L72.36 125.858L79.4097 92.7183C79.4097 92.7183 92.3916 66.9428 92.3912 62.468C92.3909 57.9932 88.6359 55.7988 88.6359 55.7988L83.5547 55.8459L67.6204 94.4752L64.7507 123.021L64.2864 126.937C63.3325 128.147 62.592 129.785 62.2487 131.656C61.4643 135.929 63.0495 139.795 65.7892 140.291V140.291Z"
                fill="#FFB6B6"
              />
              <path
                d="M117.477 39.831L112.754 28.9905L97.4047 31.6274L96.3716 44.3815L117.477 39.831Z"
                fill="#FFB6B6"
              />
              <path
                opacity="0.1"
                d="M117.477 39.831L112.754 28.9905L97.4047 31.6274L96.3716 44.3815L117.477 39.831Z"
                fill="black"
              />
              <path
                d="M150.831 62.3909C150.831 62.3909 139.91 42.1749 137.844 40.124C136.924 39.211 135.478 39.1983 134.156 39.4644L118.953 34.2643L113.799 31.3903L113.46 36.858L96.5418 39.8721C96.6358 36.5377 97.1097 35.2694 97.1097 35.2694L90.911 42.4679L78.8089 48.3276L78.8155 48.3804C77.9274 48.6881 77.0854 49.2146 76.4475 50.0855C74.0861 53.3084 67.5923 92.5685 67.5923 92.5685L81.4655 95.4984L83.3535 83.7381L84.7124 94.3264L85.7455 114.103C85.7455 114.103 104.637 130.217 113.787 124.358C122.937 118.498 134.154 118.791 134.154 118.791L134.434 109.624C134.633 109.308 134.744 109.122 134.744 109.122L134.449 76.6054V67.9529C136.698 71.0625 139.412 73.7368 142.566 74.9894C152.898 79.0912 150.831 62.391 150.831 62.391V62.3909Z"
                fill="#282973"
              />
              <path
                d="M103.475 33.5347C111.274 33.5347 117.596 27.2595 117.596 19.5187C117.596 11.7779 111.274 5.50269 103.475 5.50269C95.6763 5.50269 89.3542 11.7779 89.3542 19.5187C89.3542 27.2595 95.6763 33.5347 103.475 33.5347Z"
                fill="#FFB6B6"
              />
              <path
                d="M113.605 23.4798C113.605 23.4798 114.833 19.214 117.596 19.5187C120.358 19.8234 120.972 17.3858 120.358 16.1671C119.745 14.9483 118.517 8.85436 118.517 8.85436C118.517 8.85436 119.131 4.58861 115.447 3.97922C111.763 3.36983 110.535 2.76044 109.921 1.54165C109.308 0.322869 100.098 -0.895915 97.0287 0.932263C93.959 2.76044 91.5032 6.26804 89.3544 7.2565C87.2056 8.24497 85.3638 10.0731 86.5916 13.1201C87.8195 16.1671 89.6003 22.1263 89.6003 22.1263C89.6003 22.1263 92.7311 21.0422 93.345 22.8704C93.959 24.6985 91.5032 22.261 94.5729 17.3858C97.6426 12.5107 97.6426 7.63557 102.554 9.46375C107.466 11.2919 112.991 10.6825 112.377 14.3389C111.763 17.9952 113.605 23.4798 113.605 23.4798V23.4798Z"
                fill="#2F2E41"
              />
              <path
                d="M112.742 134.593H5.50004C2.46726 134.593 0 132.144 0 129.134V72.5896C0 69.5796 2.46726 67.1304 5.50004 67.1304H112.742C115.774 67.1304 118.242 69.5796 118.242 72.5896V129.134C118.242 132.144 115.774 134.593 112.742 134.593V134.593Z"
                fill="white"
              />
              <path
                d="M112.742 134.593H5.50004C2.46726 134.593 0 132.144 0 129.134V72.5896C0 69.5796 2.46726 67.1304 5.50004 67.1304H112.742C115.774 67.1304 118.242 69.5796 118.242 72.5896V129.134C118.242 132.144 115.774 134.593 112.742 134.593V134.593ZM5.50004 68.042C2.97381 68.042 0.918466 70.0821 0.918466 72.5896V129.134C0.918466 131.641 2.97381 133.682 5.50004 133.682H112.742C115.268 133.682 117.323 131.641 117.323 129.134V72.5896C117.323 70.0821 115.268 68.042 112.742 68.042H5.50004Z"
                fill="#3F3D56"
              />
              <path
                d="M104.465 73.9678C105.225 73.9678 105.842 73.3556 105.842 72.6003C105.842 71.8451 105.225 71.2328 104.465 71.2328C103.704 71.2328 103.087 71.8451 103.087 72.6003C103.087 73.3556 103.704 73.9678 104.465 73.9678Z"
                fill="#3F3D56"
              />
              <path
                d="M108.138 73.9678C108.899 73.9678 109.516 73.3556 109.516 72.6003C109.516 71.8451 108.899 71.2328 108.138 71.2328C107.378 71.2328 106.761 71.8451 106.761 72.6003C106.761 73.3556 107.378 73.9678 108.138 73.9678Z"
                fill="#3F3D56"
              />
              <path
                d="M111.812 73.9678C112.573 73.9678 113.19 73.3556 113.19 72.6003C113.19 71.8451 112.573 71.2328 111.812 71.2328C111.051 71.2328 110.435 71.8451 110.435 72.6003C110.435 73.3556 111.051 73.9678 111.812 73.9678Z"
                fill="#3F3D56"
              />
              <path
                d="M7.80702 94.7081C7.42716 94.7081 7.11816 95.0148 7.11816 95.3918C7.11816 95.5757 7.1897 95.7457 7.31953 95.8712C7.45048 96.0043 7.62202 96.0756 7.80702 96.0756H110.894C111.274 96.0756 111.583 95.7689 111.583 95.3918C111.583 95.208 111.511 95.0379 111.381 94.9124C111.25 94.7793 111.079 94.7081 110.894 94.7081H7.80702Z"
                fill="#E6E6E6"
              />
              <path
                d="M98.0352 94.4802V96.3035H7.8069C7.55433 96.3035 7.32471 96.2032 7.15939 96.0345C6.98945 95.8704 6.88843 95.6425 6.88843 95.3918C6.88843 94.8904 7.30175 94.4802 7.80689 94.4802H98.0352Z"
                fill="#85E0A3"
              />
              <path
                d="M109.746 91.0614H100.561C99.5482 91.0614 98.7241 90.2437 98.7241 89.2381C98.7241 88.2325 99.5482 87.4148 100.561 87.4148H109.746C110.759 87.4148 111.583 88.2325 111.583 89.2381C111.583 90.2437 110.759 91.0614 109.746 91.0614Z"
                fill="#85E0A3"
              />
              <path
                d="M49.5862 81.489H8.49587C7.483 81.489 6.65894 80.6713 6.65894 79.6657C6.65894 78.6601 7.483 77.8423 8.49587 77.8423H49.5862C50.5991 77.8423 51.4231 78.6601 51.4231 79.6657C51.4231 80.6713 50.5991 81.489 49.5862 81.489Z"
                fill="#85E0A3"
              />
              <path
                d="M7.80702 115.22C7.42716 115.22 7.11816 115.527 7.11816 115.904C7.11816 116.088 7.1897 116.258 7.31953 116.384C7.45048 116.517 7.62202 116.588 7.80702 116.588H110.894C111.274 116.588 111.583 116.281 111.583 115.904C111.583 115.72 111.511 115.55 111.381 115.425C111.25 115.292 111.079 115.22 110.894 115.22H7.80702Z"
                fill="#E6E6E6"
              />
              <path
                d="M62.6742 114.992V116.816H7.8069C7.55433 116.816 7.32471 116.716 7.15939 116.547C6.98945 116.383 6.88843 116.155 6.88843 115.904C6.88843 115.403 7.30175 114.992 7.80689 114.992H62.6742Z"
                fill="#85E0A3"
              />
              <path
                d="M109.746 111.574H100.561C99.5482 111.574 98.7241 110.756 98.7241 109.75C98.7241 108.745 99.5482 107.927 100.561 107.927H109.746C110.759 107.927 111.583 108.745 111.583 109.75C111.583 110.756 110.759 111.574 109.746 111.574Z"
                fill="#85E0A3"
              />
              <path
                d="M125.825 34.6136C133.768 34.6136 140.208 28.3566 140.208 20.6382C140.208 12.9198 133.768 6.66284 125.825 6.66284C117.882 6.66284 111.442 12.9198 111.442 20.6382C111.442 28.3566 117.882 34.6136 125.825 34.6136Z"
                fill="#85E0A3"
              />
              <path
                d="M130.706 13.5889C128.792 17.0497 126.877 20.5105 124.962 23.9714C123.742 21.8311 122.528 19.6871 121.305 17.5485C120.882 16.8099 119.733 17.4742 120.156 18.2146C121.575 20.6937 122.978 23.1811 124.396 25.6602C124.639 26.0841 125.304 26.0939 125.544 25.6602C127.648 21.8585 129.751 18.0568 131.855 14.2551C132.267 13.5101 131.119 12.8434 130.706 13.5889V13.5889Z"
                fill="white"
              />
              <path
                d="M145.68 57.4756L131.35 50.6715C131.35 50.6715 130.774 46.1174 128.087 44.493C127.63 43.4112 127.104 42.2227 126.627 41.2809C125.446 38.952 127.217 34.5573 125.742 34.5573C124.266 34.5573 122.084 39.1792 122.199 40.417C122.288 41.3671 123.079 43.0259 123.243 44.478C121.443 45.1517 119.991 46.3065 119.037 47.226C118.21 48.0216 117.904 49.2087 118.226 50.3054C119.162 53.4835 121.5 60.047 124.856 60.047C129.284 60.047 130.464 59.1681 130.464 59.1681C130.464 59.1681 139.615 70.5945 146.404 71.4735C153.193 72.3525 145.68 57.4756 145.68 57.4756V57.4756Z"
                fill="#FFB6B6"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_152">
                <rect width="151" height="156" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="signUpEmail">Email</label>
          <div className="s-u-input-wrapper">
            <input
              type="email"
              name="email"
              id="signUpEmail"
              className="s-u-email"
              title="Must be a correct email address like: example@gmail.com"
              ref={emailRef}
              required
            />
          </div>

          <label htmlFor="signUpCreatePwd">Create Password</label>
          <div className="s-u-input-wrapper">
            <input
              type="password"
              name="create-password"
              id="signUpCreatePwd"
              className="s-u-create-pwd"
              ref={passwordRef}
              required
            />
          </div>
          <p className="warning">*Password must be at least 6 characters</p>
          <label htmlFor="signUpConfirmPwd">Confirm Password</label>
          <div className="s-u-input-wrapper">
            <input
              type="password"
              name="confirm-password"
              id="signUpConfirmPwd"
              className="s-u-confirm-pwd"
              ref={passwordConfirmRef}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          {loading ? (
            <button disabled={loading} className="loading-btn">
              Loading....
            </button>
          ) : (
            <button type="submit" className="s-u-btn">
              Sign Up
            </button>
          )}
        </form>

        <aside className="log-in-link">
          <Link to={"/pages/login"}>Log In</Link>
        </aside>

        <div className="s-u-socials">
          <h3>or sign up with:</h3>

          <div className="social-media-icons">
            <svg
              onClick={googleSubmit}
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="41" height="41" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlinkHref="#image0_2_149" transform="scale(0.0025)" />
                </pattern>
                <image
                  id="image0_2_149"
                  width="400"
                  height="400"
                  xlinkHref="data:image/jpeg;base64,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"
                />
              </defs>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
