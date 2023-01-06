import "./assets/css/style.css";
import "./assets/css/errorBoundary.css";
import RouteApp from "./routes/routes";
import Loading from "./components/loading";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AuthProvider } from "./context/authContext";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className="errFallBack">
      <div className="container">
        <h1 className="errFallBack_para" style={{ color: "red" }}>
          OOPs! Something went wrong
        </h1>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Reset</button>
      </div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <AuthProvider>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <RouteApp />
          </ErrorBoundary>
        </AuthProvider>
      )}
    </>
  );
}

export default App;
