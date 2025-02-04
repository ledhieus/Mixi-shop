/* eslint-disable react/prop-types */
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputQuantity from "./InputQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cart";
import { updateCart } from "../redux/slices/countCart";
import { message } from 'antd';
const QuickItem = ({ img, title, price, code, size, stock = 100, id }) => {
  const [sizeActive, setSizeActive] = useState(size.length > 0 ? "M" : "");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  let addToCartItem = {};
  const handleSubmit = (e) => {
    e.preventDefault();
    addToCartItem = {
      ...addToCartItem,
      id: id,
      size: sizeActive,
      quantity: quantity,
      stock: stock,
      price: price
    };
    dispatch(updateCart())
    dispatch(addToCart(addToCartItem));
    message.success("Thao tác thành công! 🎉");
  };

  const handleOnchange = (e) => {
    const value = e.target.value;
    const parsedValue = parseInt(value, 10);

    if (value === "") {
      setQuantity("");
    } else if (!isNaN(parsedValue) && parsedValue > stock) {
      setQuantity(stock);
    } else if (!isNaN(parsedValue) && parsedValue >= 1) {
      setQuantity(parsedValue);
    } else if (parsedValue < 1 || isNaN(parsedValue)) {
      setQuantity(1);
    }
  };
  return (
    <div className="bg-white text-black w-[50vw] p-6">
      <div className="grid grid-cols-2">
        <div className="px-20">
          <div className="relative">
            <img src={img} />
            <img
              src="https://theme.hstatic.net/200000881795/1001243022/14/frame_2.png?v=152"
              className="absolute top-0"
            />
          </div>
        </div>
        <div>
          <p>{title}</p>
          <div className="flex gap-5 text-[15px] mt-2">
            <p>
              Thương hiệu: <span className="text-[#007bff]">Mixi</span>
            </p>
            <p>
              Mã sản phẩm:
              <span className="text-[#007bff]">{code}</span>
            </p>
          </div>
          <p className="font-medium text-[#007bff] mt-4">{price}.000đ</p>
          <img
            src="https://theme.hstatic.net/200000881795/1001243022/14/promo_tag_2.png?v=152"
            className="mt-4"
          />
          <div className="border-dashed border-[#155BF6] border-2 px-6 py-6 mt-10 relative">
            <ul>
              <li>Chuyển khoản với đơn hàng từ 500k trở lên (Bắt buộc)</li>
              <li>Đồng giá ship toàn quốc 30k</li>
              <li>Hỗ trợ trả lời thắc mắc qua fanpage chính thức</li>
              <li>Khuyến mãi trực tiếp trên giá sản phẩm</li>
              <li>Đổi trả nếu sản phẩm lỗi bất kì</li>
            </ul>
            <p className="px-4 py-2 bg-white absolute top-[-25px] text-[#155BF6]">
              <FontAwesomeIcon icon={faGift} /> KHUYẾN MÃI - ƯU ĐÃI
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            {size.length > 0 ? (
              <>
                <div className="flex flex-col gap-2 mt-4">
                  <p className="font-medium ">
                    Kích thước:{" "}
                    <span className="font-normal">{sizeActive}</span>
                  </p>
                  <div className="flex items-center gap-2 text-[16px] ">
                    {size.map((size) => (
                      <p
                        key={size}
                        className={`${
                          sizeActive === size ? " border-slate-950" : ""
                        } border  px-3 py-1 font-medium rounded-md`}
                        onClick={() => {
                          setSizeActive(size);
                        }}
                      >
                        {size}
                      </p>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            <div className="flex mt-6 gap-2">
              <InputQuantity
                stock={stock}
                setQuantity={setQuantity}
                quantity={quantity}
                handleOnchange={handleOnchange}
              />
              <button
                type="submit"
                className="flex-1 border border-[#155BF6] rounded-md text-[#155BF6] font-normal  hover:bg-[#155BF6] hover:text-white"
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickItem;
