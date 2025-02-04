import ImageIg from "./ImageIg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
const Instagram = () => {
  const listAccount = [
    {
      id: 1,
      img: "https://theme.hstatic.net/200000881795/1001243022/14/insta_1_img.jpg?v=152",
    },
    {
      id: 2,
      img: "https://theme.hstatic.net/200000881795/1001243022/14/insta_2_img.jpg?v=152",
    },
    {
      id: 3,
      img: "https://theme.hstatic.net/200000881795/1001243022/14/insta_3_img.jpg?v=152",
    },
    {
      id: 4,
      img: "https://theme.hstatic.net/200000881795/1001243022/14/insta_4_img.jpg?v=152",
    },
    {
      id: 5,
      img: "https://theme.hstatic.net/200000881795/1001243022/14/insta_5_img.jpg?v=152",
    },
  ];
  return (
    <div className="padding-layout">
      <div className="title mt-4 mb-10">@ Follow Instagram</div>

      <div className="sm:hidden">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={10}
          navigation={true}
          grabCursor={true}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {listAccount.map((item) => (
            <SwiperSlide key={item.id}>
              <ImageIg key={item.id} img={item.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden sm:grid md:grid-cols-5 grid-cols-3 gap-6 items-center">
        {listAccount.map((item) => (
          <ImageIg key={item.id} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default Instagram;
