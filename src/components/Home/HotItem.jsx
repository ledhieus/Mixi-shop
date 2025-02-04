/* eslint-disable react/prop-types */
import ButtonShowMore from "../ButtonShowMore";
import CartItem from "../CartItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
const HotItem = ({ itemNew, setStatus, status }) => {
  return (
    <>
      <div className="mt-16 padding-layout">
        <div className="flex items-center border-b py-4">
          <p className="text-[40px] font-medium ">HÀNG HOT</p>
          <img
            src="https://theme.hstatic.net/200000881795/1001243022/14/flashsale-hot.png?v=152"
            className="w-14"
          />
        </div>
        <div className="flex mb-6 gap-6 border-b text-[#9c9c9c] ">
          <div
            className={`${
              status === "new"
                ? "text-black border-b-2 border-b-black font-medium"
                : ""
            } p-4 cursor-pointer`}
            onClick={() => {
              setStatus("new");
            }}
          >
            <p>Hàng mới về</p>
          </div>
          <div
            className={`${
              status === "summer"
                ? "text-black border-b-2 border-b-black font-medium"
                : ""
            } p-4 cursor-pointer`}
            onClick={() => {
              setStatus("summer");
            }}
          >
            <p>Năng động ngày hè</p>
          </div>
        </div>
        <div className="sm:hidden">
          <Swiper
            spaceBetween={10}
            navigation={true}
            grabCursor={true}
          >
            {itemNew.map((item) => (
              <SwiperSlide key={item.id}>
                <CartItem
                  img={item.images[0] || []}
                  title={item.title}
                  price={item.price}
                  slug={item.slug}
                  code={item.code}
                  size={item.size || []}
                  id={item.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden sm:grid grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 gap-8">
          {itemNew.map((item) => (
            <CartItem
              key={item.id}
              img={item.images[0] || []}
              title={item.title}
              price={item.price}
              slug={item.slug}
              code={item.code}
              size={item.size || []}
              id={item.id}
            />
          ))}
        </div>
        <ButtonShowMore />
      </div>
    </>
  );
};

export default HotItem;
