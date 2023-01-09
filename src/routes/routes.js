import { lazy, Suspense, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../components/loading";
import Signup from "../pages/signup";
import Login from "../pages/login";
import { AuthContext } from "../context/authContext";
import CounterWithReducer from "../pages/CounterWithReducer";
import CounterWithCustomHook from "../pages/CounterWithCustomHook";

const Home = lazy(() => import("../pages/home"));
const NotFoundPage = lazy(() => import("../pages/404"));
const ErrFallBack = lazy(() => import("../pages/errorBoundary"));

function RouteApp() {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      {currentUser ? (
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route
                path="/pages/CounterWithReducer"
                element={<CounterWithReducer />}
              />
              <Route
                path="/pages/CounterWithCustomHook"
                element={<CounterWithCustomHook />}
              />
            </Route>
            <Route path="/pages/signup" element={<Signup />} />
            <Route path="/pages/login" element={<Login />} />
            <Route path="/pages/404" element={<NotFoundPage />} />
            <Route path="/pages/errorBoundary" element={<ErrFallBack />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      ) : (
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/pages/signup" element={<Signup />} />
            <Route path="/pages/login" element={<Login />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
}
export default RouteApp;
