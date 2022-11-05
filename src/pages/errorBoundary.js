import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { NavLink, useNavigate } from "react-router-dom";
import "../assets/errorBoundary.css";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className="errFallBack">
      <div className="container">
        <h1 className="errFallBack_para" style={{ color: "red" }}>OOPs! Something went wrong</h1>
        <pre >{error.message}</pre>
        <button onClick={resetErrorBoundary}>Reset</button>
      </div>
    </div>
  );
};

// causing an error for the error fall back
const User = ({ heroName }) => {
  if (heroName === "Joker") {
    throw new Error("Looks like one of the developers fell asleep");
  }
  return (
    <div className="user">
      <h1>{heroName}</h1>
    </div>
  );
};

function ErrFallBack() {
  const navigate = useNavigate();
  return (
    <div className="error-boundary">
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/pages/404"}>See 404 Page</NavLink>
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
          to={"/pages/errorBoundary"}
        >
          Test Error Boundary
        </NavLink>
      </nav>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => navigate("/")}
      >
        <User heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}
export default ErrFallBack;
