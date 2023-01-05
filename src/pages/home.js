import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import "../assets/css/style.css";
import { NavBarLink } from "../components/header";
import Loading from "../components/loading";

const CounterWithReducer = lazy(() => import("./CounterWithReducer"));
const CounterWithCustomHook = lazy(() => import("./CounterWithCustomHook"));

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Counter App using React hooks and custom hooks to increase, decrease, reset and set value of the count."
        />
        <link rel="canonical" href="/home" />
      </Helmet>
      <Suspense fallback={<Loading />}>
        <section className="child-nav">
          <NavBarLink
            to={"/pages/CounterWithReducer"}
            element={<CounterWithReducer />}
            className="child-nav-link"
          >
            Counter with Reducer
          </NavBarLink>
          <NavBarLink
            to={"/pages/CounterWithCustomHook"}
            element={<CounterWithCustomHook />}
            className="child-nav-link"
          >
            Counter with Custom Hook
          </NavBarLink>
        </section>
      </Suspense>
      <Outlet />
    </>
  );
}

export default Home;
