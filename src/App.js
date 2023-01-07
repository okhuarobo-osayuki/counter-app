import "./assets/css/style.css";
import "./assets/css/errorBoundary.css";
import RouteApp from "./routes/routes";
import Loading from "./components/loading";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AuthProvider } from "./context/authContext";
import { useNavigate } from "react-router-dom";

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

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
    <AuthProvider>
      {loading ? (
        <Loading />
      ) : (
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {navigate("/")}}>
          <RouteApp />
        </ErrorBoundary>
      )}
      </AuthProvider>
    </>
  );
}

export default App;
