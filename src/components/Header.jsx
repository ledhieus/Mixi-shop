/* eslint-disable react/prop-types */
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faBars,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategory } from "../service/categoryService";
import { useSelector } from "react-redux";
import { Badge } from "antd";
import DrawerComponent from "./DrawComponents/DrawerComponent";

const Header = ({ countFavorite, countCart, setIsShowing }) => {
  const [category, setCategory] = useState([]);
  const { checkLogin } = useSelector((state) => state.checkLogin);
  const [open, setOpen] = useState(false);
  const [detailCategory, setDetailCategory] = useState(true);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setDetailCategory(true)
  };
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCategory("/category");
      setCategory(data);
    };
    fetchApi();
  }, []);
  return (
    <>
      <div className="py-1 sticky top-0 bg-white z-50 shadow-lg">
        <div className="padding-layout flex items-center justify-between">
          <div className="lg:hidden flex text-[25px] " onClick={showDrawer}>
            <FontAwesomeIcon icon={faBars} className="cursor-pointer"/>
          </div>
          <Link to={"/"}>
            <img src="/logo.webp" className="w-[140px]" />
          </Link>
          <div className="gap-6 lg:flex hidden">
            <Link to="/" className="cursor-pointer py-2 relative group">
              <span>Trang chủ</span>
              <span className="hover-header"></span>
            </Link>
            <Link to="/about" className="cursor-pointer py-2 relative group">
              <span>Giới thiệu</span>
              <span className="hover-header"></span>
            </Link>
            <Link
              to={"/collection/all"}
              className="cursor-pointer py-2 relative group"
            >
              <span>
                Sản phẩm
                <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
              </span>
              <span className="hover-header"></span>
              <div className="absolute bg-white p-4 w-[250px] top-[43px] hidden group-hover:block left-[-10px]">
                {category.map((item) => (
                  <Link
                    to={`/collection/${item.slug}`}
                    key={item.id}
                    className="hover:text-[#2F80ED]"
                  >
                    <p className="mb-3">{item.title}</p>
                  </Link>
                ))}
              </div>
            </Link>
            <Link to="/blog" className="cursor-pointer py-2 relative group">
              <span>Blog</span>
              <span className="hover-header"></span>
            </Link>
            <Link to="/contact" className="cursor-pointer py-2 relative group">
              <span>Liên hệ</span>
              <span className="hover-header"></span>
            </Link>
            <Link to="/tracking" className="cursor-pointer py-2 relative group">
              <span>Kiểm tra đơn hàng</span>
              <span className="hover-header"></span>
            </Link>
          </div>
          <div className="flex lg:gap-5 gap-3 mr-2 items-center">
            <FontAwesomeIcon
              icon={faSearch}
              className="cursor-pointer"
              onClick={() => {
                setIsShowing(true);
              }}
            />
            <div className="relative group hidden lg:flex p-2">
              <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
              <div className="absolute top-[30px] left-[-30px] bg-black text-white flex-col w-[90px] text-[14px] hidden group-hover:flex">
                {checkLogin ? (
                  <>
                    <Link className="p-2 hover:bg-slate-800" to={"/account"}>
                      <p className="">Tài khoản</p>
                    </Link>
                    <Link className="p-2 hover:bg-slate-800" to={"/logout"}>
                      <p>Đăng Xuất</p>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link className="p-2 hover:bg-slate-800" to={"/login"}>
                      <p className="">Đăng nhập</p>
                    </Link>
                    <Link className="p-2 hover:bg-slate-800" to={"/register"}>
                      <p>Đăng Ký</p>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <Link to={"/favorites"} className="flex">
              <Badge count={countFavorite}>
                <FontAwesomeIcon
                  icon={faHeart}
                  className="cusFlex text-[20px]"
                />
              </Badge>
            </Link>
            <Link to={"/cart"} className="flex">
              <Badge count={countCart}>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="cusFlex text-[20px]"
                />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
      <DrawerComponent onClose={onClose} open={open} detailCategory={detailCategory} setDetailCategory={setDetailCategory}/>
    </>
  );
};

export default Header;
