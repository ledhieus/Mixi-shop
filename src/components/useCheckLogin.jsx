import { useEffect, useState } from "react";
import { getCookie } from "../helper/cookie";
import { getUser } from "../service/userService";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/login";

const useCheckLogin = () => {
  const [checkLogin, setCheckLogin] = useState([]);
  const dispatch = useDispatch()
  const tokenUser = getCookie("token");

  useEffect(() => {
    if (tokenUser) {
      const fetchApi = async () => {
        const data = await getUser(`token=${tokenUser}`);
        if (data) {
          setCheckLogin(data);
          dispatch(login)
        }
      };
      fetchApi();
    }
  }, [tokenUser, dispatch]);
  return checkLogin;
};

export default useCheckLogin;
