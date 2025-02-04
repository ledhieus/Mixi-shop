/* eslint-disable react/prop-types */
import Category from "./Category";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "./homeStyle.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const CategoryComponent = ({ category }) => {
  return (
    <>
      <div className="mt-5 space-y-10 padding-layout">
        <p className="text-center font-normal text-[30px]">ĐỒ HIỆU MIXI</p>
        <div className="lg:px-0 px-6">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={true}
            grabCursor={true}
            breakpoints={{
              320: { slidesPerView: 2 }, // Mobile nhỏ
              640: { slidesPerView: 3 }, // Tablet nhỏ
              768: { slidesPerView: 4 }, // Tablet lớn
              1024: { slidesPerView: 4 }, // Dưới 1024px sẽ hiển thị 4 slide
              1280: { slidesPerView: 6 }, // Trên 1280px hiển thị 6 slide
            }}
          >
            {category &&
              category.map((item) => (
                <SwiperSlide key={item.id} className="py-10">
                  <Category
                    img={item.image}
                    title={item.title}
                    count={item.stock}
                    slug={item.slug}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CategoryComponent;
