import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/header";
import Loading from "../components/loading";

const Home = lazy(() => import("../pages/home"));
const NotFoundPage = lazy(() => import("../pages/404"));
const ErrFallBack = lazy(() => import("../pages/errorBoundary"));
const CounterWithReducer = lazy(() => import("../pages/CounterWithReducer"));
const CounterWithCustomHook = lazy(() => import("../pages/CounterWithCustomHook"));

function RouteApp() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/pages/CounterWithReducer" element={<CounterWithReducer/>} />
            <Route path="/pages/CounterWithCustomHook" element={<CounterWithCustomHook/>} />
          </Route>
          <Route path="/pages/404" element={<NotFoundPage />} />
          <Route path="/pages/errorBoundary" element={<ErrFallBack />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default RouteApp;
