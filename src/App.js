import "./assets/style.css";
import RouteApp from "./routes/routes";
import Loading from "./components/loading";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return <>{loading ? <Loading /> : <RouteApp />}</>;
}

export default App;
