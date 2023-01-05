import { Helmet } from "react-helmet-async";
import "../assets/css/style.css";
import useCounter from "../hooks/useCounter";

function Home() {
  const [state, increment, decrement, reset, setValue, inputRef] = useCounter();
  return (
    <>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Counter App using React hooks and custom hooks to increase, decrease, reset and set value of the count." />
      <link rel="canonical" href="/home" />
    </Helmet>
    <div className="home">

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
    </>
  );
}

export default Home;
