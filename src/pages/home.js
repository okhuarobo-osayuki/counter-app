import { NavLink } from "react-router-dom";
import "../assets/style.css";
import useCounter from "../hooks/useCounter";

function Home() {
  const [state, increment, decrement, reset, setValue, inputRef] = useCounter();
  return (
    <div className="home">
      <nav>
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
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink to={"/pages/404"}>See 404 Page</NavLink>
        <NavLink to={"/pages/errorBoundary"}>Test Error Boundary</NavLink>
      </nav>

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
    </div>
  );
}

export default Home;
