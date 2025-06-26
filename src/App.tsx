import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Header = lazy(() => import("./components/Header"));
const DefaultLayout = lazy(() => import("./pages/DefaultLayout"));
const AuthenticationModal = lazy(() => import("./pages/AuthenticationModal"));

const App = () => {
  return (
    <Router>
      <div className="h-screen w-screen flex flex-col ">
        <Header />
        <div className="w-full h-full mt-20">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/auth" element={<AuthenticationModal />} />
              <Route path="/home" element={<DefaultLayout />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
