/* eslint-disable react/prop-types */
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import SuccessSearch from "./SuccessSearch";
import { useEffect, useState } from "react";
import { getItem } from "../../service/productService";
import { removeVietnameseTones } from "../../helper/replace";
import { useDispatch, useSelector } from "react-redux";
import { updateProductList } from "../../redux/slices/product";
import { Badge } from "antd";

const SearchForm = ({ setIsShowing }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productSuccess, setProductSuccess] = useState([]);
  const [product, setProduct] = useState([]);
  const [isShowingSuccess, setIsShowingSuccess] = useState(false);

  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const { countCart } = useSelector((state) => state.countCart);
  const { countFavorite } = useSelector((state) => state.countFavorite);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getItem("/products");
      setProduct(data);
      dispatch(updateProductList(data));
    };
    fetchApi();
  }, [dispatch]);

  const handleOnChange = (e) => {
    const value = e.target.value.trim().toLowerCase();
    const slug = removeVietnameseTones(value).split(" ").join("-");
    setSearchTerm(slug);
    if (value === "") {
      setIsShowingSuccess(false);
    } else {
      const successList = product.filter((item) =>
        item.slug.includes(searchTerm)
      );
      setProductSuccess(successList);
      setIsShowingSuccess(true);
    }
  };
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
        onClick={() => {
          setIsShowing(false);
        }}
      ></div>
      <div className="fixed top-0 w-full z-[9999]">
        <div className=" bg-white text-black">
          <div className="padding-layout flex items-center justify-between gap-6 py-4">
            <Link to={"/"} className="hidden md:flex">
              <img src="./logo.webp" className="w-[140px]" />
            </Link>
            <div className="w-[650px] relative">
              <div className="border border-black rounded-full flex pl-4 pr-1 py-1 items-center">
                <input
                  type="text"
                  placeholder="Tìm kiếm theo tên sản phẩm"
                  className="flex-1 text-[16px] outline-none"
                  onChange={handleOnChange}
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="bg-black text-white px-4 py-2 rounded-full"
                  onClick={() => {
                    naviagte(`/search/${searchTerm}`);
                    setIsShowing(false);
                  }}
                />
              </div>
              <p className="text-[14px] text-slate-500 ml-2">
                Áo Mixi, Cốc giữ nhiệt, Lego...
              </p>
              {isShowingSuccess && (
                <SuccessSearch
                  setIsShowingSuccess={setIsShowingSuccess}
                  productSuccess={productSuccess}
                  searchTerm={searchTerm}
                  setIsShowing={setIsShowing}
                />
              )}
            </div>
            <div className="flex gap-4 items-center hidden md:flex">
              <FontAwesomeIcon
                icon={faSearch}
                onClick={() => setIsShowing(false)}
                className="cursor-pointer"
              />
              <FontAwesomeIcon icon={faUser} />
              <Badge count={countFavorite}>
                <FontAwesomeIcon
                  icon={faHeart}
                  className="cusFlex text-[20px] cursor-pointer"
                  onClick={() => {
                    setIsShowing(false), naviagte(`/favorites`);
                  }}
                />
              </Badge>

              <Badge count={countCart}>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="cusFlex text-[20px] cursor-pointer"
                  onClick={() => {
                    setIsShowing(false), naviagte(`/cart`);
                  }}
                />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
