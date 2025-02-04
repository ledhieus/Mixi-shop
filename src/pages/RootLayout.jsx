import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LayoutWrapper from "../components/LayoutWrap";
import Footer from "../components/Footer";
import ScrollToTop from "../utils/scrollToTop";
import { getCookie } from "../helper/cookie";
import { useEffect, useState } from "react";
import { getUser } from "../service/userService";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/login";
import { addInforUser } from "../redux/slices/infoUser";
import SearchForm from "../components/SearchForm";

const RootLayout = () => {
  const token = getCookie("token")
  const dispatch = useDispatch()
  const {countFavorite} = useSelector((state)=> state.countFavorite)
  const {countCart} = useSelector((state)=> state.countCart)

  const [isShowing, setIsShowing] = useState(false)

  useEffect(()=> {
    const fetchApi = async()=> {
      const data= await getUser(`token=${token}`)
      if(data.length > 0){
        dispatch(login())
        dispatch(addInforUser(data[0]))
      }
    }
    fetchApi()
  }, [token, dispatch])
  return (
    <>
      <LayoutWrapper>
        <ScrollToTop/>
        {isShowing && <SearchForm setIsShowing={setIsShowing}/>}
        <Header countFavorite={countFavorite} countCart={countCart} setIsShowing={setIsShowing}/>
        <Outlet/>
        <Footer/>
      </LayoutWrapper>
      
    </>
  );
};

export default RootLayout;
