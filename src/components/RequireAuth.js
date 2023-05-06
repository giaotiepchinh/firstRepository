import { Navigate, useNavigate } from "react-router";
import { useAuth } from "./auth";

const RequireAuth = ({ children }) => {
  const auth = useAuth();
  if (auth.checkLogin) return <Navigate to="login" />;
  else return children;
};

export default RequireAuth;
