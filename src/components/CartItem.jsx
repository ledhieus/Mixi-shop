/* eslint-disable react/prop-types */
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useModelContext } from "../context/ModelProvider";
import QuickItem from "./QuickItem";
import { addToFavorite } from "../helper/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteId } from "../redux/slices/favorite";
import { updateCount } from "../redux/slices/countFavorite";

const CartItem = ({ img, title, price, slug, code, size = [], id, stock }) => {
  const { setIsShowing, setContent } = useModelContext();
  const dispatch = useDispatch();
  const { favoriteList } = useSelector((state) => state.favorite);
  return (
    <>
      <div>
        <div className="relative bg-white shadow-lg group">
          <Link to={`/product/${slug}`}>
            <div className="group-hover:scale-90 smooth relative">
              <img src={img} />
              <img
                src="https://theme.hstatic.net/200000881795/1001243022/14/frame_2.png?v=152"
                className="absolute top-0"
              />
            </div>
          </Link>
          <div className="absolute bottom-2 bg-white text-black flex items-center rounded-lg left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500">
            <Link to={`/product/${slug}`}>
              <div className="cusFlex w-12 h-12 border-r-2 hover:bg-black hover:text-white relative">
                <FontAwesomeIcon icon={faCartShopping} />
                {/* <p className="absolute text-[11px] cusFlex w-16 text-white  bottom-[50px] py-1 bg-black">Chi tiết</p> */}
              </div>
            </Link>
            <div
              className="cusFlex w-12 h-12 hover:bg-black hover:text-white relative"
              onClick={(e) => {
                e.stopPropagation();
                setIsShowing(true);
                setContent(
                  <QuickItem
                    img={img}
                    title={title}
                    price={price}
                    slug={slug}
                    code={code}
                    size={size}
                    id={id}
                    stock={stock}
                  />
                );
              }}
            >
              <FontAwesomeIcon icon={faEye} />
              {/* <p className="absolute text-[11px] cusFlex w-16 text-white opacity-0 icon-hover:opacity-100 bottom-[50px] py-1 bg-black">Xem nhanh</p> */}
            </div>
          </div>
        </div>
        <div className="space-y-2 mt-2">
          <div className="flex justify-between text-[14px]">
            <p className="text-[#9c9c9c]">MIXI</p>
            <FontAwesomeIcon
              icon={faHeart}
              className={`${
                favoriteList.find((item) => item.id === id)
                  ? "text-red-700 font-bold text-[18px]"
                  : ""
              } cursor-pointer`}
              onClick={() => {
                addToFavorite(id),dispatch(updateCount({id})), dispatch(addFavoriteId({ id }));
              }}
            />
          </div>
          <p className="font-medium">{title}</p>
          <p className="text-[#155BF6] font-medium text-[16px]">{price}.000đ</p>
          <img src="https://theme.hstatic.net/200000881795/1001243022/14/promo_tag_2.png?v=152" />
        </div>
      </div>
    </>
  );
};

export default CartItem;
