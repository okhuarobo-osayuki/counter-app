import { lazy } from "react";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import "../assets/css/style.css";
import { NavBarLink } from "../components/header";

const CounterWithReducer = lazy(() => import("./CounterWithReducer"));
const CounterWithCustomHook = lazy(() => import("./CounterWithCustomHook"));

function Home() {
  // const [state, increment, decrement, reset, setValue, inputRef] = useCounter();
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
      <section className="child-nav">
        <NavBarLink
          to={"/pages/CounterWithReducer"}
          element={<CounterWithReducer />}
          className="child-nav-link"
        >
          Counter with Reducer
        </NavBarLink>
        <NavBarLink to={"/pages/CounterWithCustomHook"} element={<CounterWithCustomHook />} className="child-nav-link">
          Counter with Custom Hook
        </NavBarLink>
      </section>
      {/* <div className="home">
      <main className="content">
        <p className="counter-value">Count: {state.count}</p>
        <div className="set-value-input">
          <input ref={inputRef} type={"number"} placeholder={"Enter number here"} name="value" />
          <button onClick={setValue}>Set Value</button>
        </div>
        <div className="buttons">
          <button className="btn" onClick={increment}>Increase</button>
          <button className="btn" onClick={decrement}>Decrease</button>
          <button className="btn reset" onClick={reset}>Reset</button>
        </div>
      </main>
    </div> */}
      <Outlet />
    </>
  );
}

export default Home;
