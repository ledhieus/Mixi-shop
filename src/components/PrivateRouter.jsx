import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const {checkLogin} = useSelector((state) => state.checkLogin);
  console.log(checkLogin)
  
  if (checkLogin === undefined) {
    return <div>Loading...</div>; // Hoặc một spinner
  }

  return checkLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
