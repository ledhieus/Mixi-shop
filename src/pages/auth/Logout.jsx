import { useDispatch } from "react-redux";
import { deleteCookie } from "../../helper/cookie";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/login";
import { useEffect } from "react";

const Logout = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    deleteCookie("token");
    deleteCookie("id");
    dispatch(logout());
    navigate("/");
  }, [dispatch, navigate]);
  return <></>;
};

export default Logout;
