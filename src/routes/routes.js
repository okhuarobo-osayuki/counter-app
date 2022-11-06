import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../components/loading";

const Home = lazy(() => import("../pages/home"));
const NotFoundPage = lazy(() => import("../pages/404"));
const ErrFallBack = lazy(() => import("../pages/errorBoundary"));

function RouteApp() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/404" element={<NotFoundPage />} />
        <Route path="/pages/errorBoundary" element={<ErrFallBack />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
export default RouteApp;
