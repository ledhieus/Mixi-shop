/* eslint-disable react/prop-types */
import ButtonShowMore from "../ButtonShowMore";
import CartItem from "../CartItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Collection = ({ collections, setStatusCollection, statusCollection }) => {
  const handleClick = (status) => {
    setStatusCollection(status);
  };
  return (
    <>
      <div className="space-y-6 padding-layout">
        <p className="title">Bộ sưu tập</p>
        <div className="flex items-center justify-center gap-6">
          <p
            className={`${
              statusCollection === "lego"
                ? "text-black border-b-2 border-b-black font-medium"
                : ""
            } cursor-pointer`}
            onClick={() => {
              handleClick("lego");
            }}
          >
            Lego
          </p>
          <p
            className={`${
              statusCollection === "summer"
                ? "text-black border-b-2 border-b-black font-medium"
                : ""
            }  cursor-pointer`}
            onClick={() => {
              handleClick("summer");
            }}
          >
            Đồ xuân hè
          </p>
          <p
            className={`${
              statusCollection === "winter"
                ? "text-black border-b-2 border-b-black font-medium"
                : ""
            } cursor-pointer`}
            onClick={() => {
              handleClick("winter");
            }}
          >
            Đồ thu đông
          </p>
        </div>
        <div className="sm:hidden">
          <Swiper spaceBetween={10} navigation={true} grabCursor={true}>
            {collections.map((item) => (
              <SwiperSlide key={item.id}>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden sm:grid grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 gap-8">
          {collections.map((item) => (
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

export default Collection;
