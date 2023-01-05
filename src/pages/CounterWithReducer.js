import { useRef } from "react";
import useCounterReducer from "../hooks/reducer";
import "../assets/css/style.css";

function CounterWithReducer() {
  const [state, dispatch] = useCounterReducer({ count: 0 });
  const inputRef = useRef(null);

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    if (state.count > 0) {
      dispatch({ type: "decrement" });
    } else {
      return state.count;
    }
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };

  const setValue = () => {
    if (inputRef.current.value === "") {
      return state.count;
    } else {
      dispatch({ type: "setValue", payload: Number(inputRef.current.value) });
      inputRef.current.value = "";
    }
  };

  return (
      <main className="content">
        <p className="counter-value">Count: {state.count}</p>
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

export default CounterWithReducer;