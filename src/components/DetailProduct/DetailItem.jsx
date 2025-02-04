/* eslint-disable react/prop-types */
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import InputQuantity from "../InputQuantity";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cart";
import { updateCart } from "../../redux/slices/countCart";
import { message } from "antd";

const DetailItem = ({
  images = [],
  title,
  price,
  code,
  size = [],
  stock,
  quantity,
  setQuantity,
  handleOnchange,
  setSizeActive,
  sizeActive,
  id,
}) => {
  const dispatch = useDispatch();
  const [imgActive, setImgActive] = useState(0);

  useEffect(() => {
    setImgActive(0); // Reset imgActive về 0 khi images thay đổi
  }, [images]);
  let addToCartItem = {};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OK")
    addToCartItem = {
      ...addToCartItem,
      id: id,
      size: sizeActive,
      quantity: quantity,
      price: price,
      stock: stock,
    };
    dispatch(updateCart(id))
    dispatch(addToCart(addToCartItem));
    message.success("Thao tác thành công! 🎉");
  };
  return (
    <>
      <div className="padding-layout mt-6">
        <div className="grid grid-cols-2 gap-8">
          {images.length > 1 ? (
            <>
              <div className="flex">
                <div className="flex-1 flex flex-col space-y-4 px-4">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      className={`${
                        index === imgActive ? "border border-slate-900" : ""
                      } p-1`}
                      onClick={() => {
                        setImgActive(index);
                      }}
                    />
                  ))}
                </div>
                <div className="flex-[5] cusFlex pr-20 pl-8">
                  <div className="relative">
                    <img src={images[imgActive]} />
                    <img
                      src="https://theme.hstatic.net/200000881795/1001243022/14/frame_2.png?v=152"
                      className="absolute top-0 w-full left-0"
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="cusFlex px-28">
                <div className="relative">
                  <img src={images} />
                  <img
                    src="https://theme.hstatic.net/200000881795/1001243022/14/frame_2.png?v=152"
                    className="absolute top-0 w-full left-0"
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <div className="flex justify-between items-center text-[25px] font-normal">
              <p>{title}</p>
              <FontAwesomeIcon icon={faHeart} className="cursor-pointer" />
            </div>
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
              <div className="flex flex-col gap-2 mt-4">
                {size.length > 0 ? (
                  <>
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
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="flex mt-6 gap-2">
                <InputQuantity
                  stock={stock}
                  quantity={quantity}
                  setQuantity={setQuantity}
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
            <button className="mt-4 bg-[#155BF6] w-full text-white py-3 rounded-lg">
              MUA NGAY
            </button>
            <p className="mt-2 font-medium text-center">
              Hotline: <span className="font-normal">0822221992</span> (7:30 -
              22:00)
            </p>
            <div className="mt-4 grid grid-cols-3 border-dashed border-t-[1px] p-4  text-[16px]">
              <div className="flex gap-2">
                <img src="https://theme.hstatic.net/200000881795/1001243022/14/policy_product_image_1.png?v=152" />
                <p>Giao hàng toàn quốc</p>
              </div>
              <div className="flex gap-2">
                <img src="https://theme.hstatic.net/200000881795/1001243022/14/policy_product_image_2.png?v=152" />
                <p>Ưu đãi hấp dẫn</p>
              </div>
              <div className="flex gap-2">
                <img src="https://theme.hstatic.net/200000881795/1001243022/14/policy_product_image_3.png?v=152" />
                <p>Sản phẩm chính hãng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailItem;
