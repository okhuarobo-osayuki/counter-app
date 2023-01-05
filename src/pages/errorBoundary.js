import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../assets/css/errorBoundary.css";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <>
    <Helmet>
      <title>Error Boundary</title>
      <meta name="description" content="A page for testing react error boundary for any error occurring in react" />
      <link rel="canonical" href="/pages/errorBoundary" />
    </Helmet>
    <div role="alert" className="errFallBack">
      <div className="container">
        <h1 className="errFallBack_para" style={{ color: "red" }}>OOPs! Something went wrong</h1>
        <pre >{error.message}</pre>
        <button onClick={resetErrorBoundary}>Reset</button>
      </div>
    </div>
    </>
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
