import { Suspense, lazy } from "react";
import RequireAuth from "../components/RequireAuth";

//Global suspense for all component
const suspense = (Component) => (props) =>
  (
    <Suspense fallback={<div>Loading</div>}>
      <Component {...props} />
    </Suspense>
  );

const Login = suspense(lazy(() => import("../feature/Login")));
const Home = suspense(lazy(() => import("../feature/Home")));
const routeDirect = [
  {
    path: "*",
    element: (
      <RequireAuth>
        <Home />
      </RequireAuth>
    ),
  },
  {
    path: "home",
    element: (
      <RequireAuth>
        <Home />
      </RequireAuth>
    ),
  },
  {
    path: "login",
    element: <Login />,
  },
];

export default routeDirect;
