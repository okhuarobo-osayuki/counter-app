import "../assets/css/style.css";
import useCounter from "../hooks/useCounter";

function CounterWithCustomHook() {
  const [count, increment, decrement, reset, setValue, inputRef] =
    useCounter();

  return (
    <main className="content">
      <p className="counter-value">custom hook count is: <span>{count}</span></p>
      <div className="set-value-input">
        <input
          ref={inputRef}
          type={"number"}
          placeholder={"Enter number here"}
          name="value"
        />
        <button onClick={setValue}>Set Value</button>
      </div>
      <div className="buttons">
        <button className="btn" onClick={increment}>
          Increase
        </button>
        <button className="btn" onClick={decrement}>
          Decrease
        </button>
        <button className="btn reset" onClick={reset}>
          Reset
        </button>
      </div>
    </main>
  );
}

export default CounterWithCustomHook;
