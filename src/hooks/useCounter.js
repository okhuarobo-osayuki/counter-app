import { useRef, useState } from "react";

const useCounter = () => {
    const [count, setCount] = useState(0);

    const inputRef = useRef(null);

    const increment = () => {
        setCount(prev => prev + 1)
    };

    const decrement = () => {
        if (count > 0) {
            setCount(prev => prev - 1)
        } else {
            return 
        }
    };

    const reset = () => {
        setCount(0);
    };

    const setValue = () => {
        if (inputRef.current.value === "") {
            return count;
        } else {
            setCount(Number(inputRef.current.value));
            inputRef.current.value = "";
        }
    };

    return [count, increment, decrement, reset, setValue, inputRef];
}

export default useCounter;