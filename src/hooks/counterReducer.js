import { useReducer } from "react";

//create a custom reducer hook

const useCounterReducer = () => {
    const initialState = {
        count: 0,
    };
    
    //set up reducer for state management
    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { ...state, count: state.count + 1 };
            case "decrement":
                return { ...state, count: state.count - 1 };
            case "reset":
                return { ...state, count: initialState.count };
            case "setValue":
                return { ...state, count: action.payload };
            default:
                return state;
        }
    };

    //create a reducer hook
    const [state, dispatch] = useReducer(reducer, initialState);
    
    //return the state and dispatch
    return [state, dispatch];
};

export default useCounterReducer;