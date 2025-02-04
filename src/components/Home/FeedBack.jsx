import FeedBackItem from "./FeedBackItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
const FeedBack = () => {
  const feedBack = [
    {
      id: "1",
      name: "Trần Linh",
      cmt: "Sản phẩm chất lượng, chất vải mềm mát mặc vào rất thoải mái và dễ hoạt động, giá cả hợp lý, giao hàng nhanh",
      avt: "https://theme.hstatic.net/200000881795/1001243022/14/cus_review_avatar_1_compact.jpg?v=152",
      img: "https://product.hstatic.net/200000881795/product/ao-khoac-mixi-8-scaled_8bb77d5894534d6ab3c5961643f1547a_medium.jpg",
      title: "Áo khoác Mixi đen",
    },
    {
      id: 2,
      name: "Bá Đức",
      cmt: "Sản phẩm chất lượng, chất vải mềm mát mặc vào rất thoải mái và dễ hoạt động, giá cả hợp lý, giao hàng nhanh",
      avt: "https://theme.hstatic.net/200000881795/1001243022/14/cus_review_avatar_2_compact.jpg?v=152",
      img: "https://product.hstatic.net/200000881795/product/ao-ba-lo-hi-anh-em-scaled_2a1e1143f0c94ee18ebbd2bca25551fc_medium.jpg",
      title: "Áo balo Mixi",
    },
    {
      id: 3,
      name: "Độ Phùng",
      cmt: "Sản phẩm chất lượng, chất vải mềm mát mặc vào rất thoải mái và dễ hoạt động, giá cả hợp lý, giao hàng nhanh",
      avt: "https://theme.hstatic.net/200000881795/1001243022/14/cus_review_avatar_3_compact.jpg?v=152",
      img: "https://product.hstatic.net/200000881795/product/1_9ddebb3a5f5b452399be563b0dea4c54_medium.png",
      title: "Lego Mixi",
    },
  ];
  return (
    <div className="bg-[#f5f5f5] py-10">
      <div className="padding-layout">
        <div className="title mt-4 mb-10">Khách hàng nói gì</div>
        <div className="sm:hidden">
          <Swiper spaceBetween={10} navigation={true} grabCursor={true}>
            {feedBack.map((item) => (
              <SwiperSlide key={item.id}>
                <FeedBackItem
                  key={item.id}
                  name={item.name}
                  cmt={item.cmt}
                  avt={item.avt}
                  img={item.img}
                  title={item.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden sm:grid lg:grid-cols-3 grid-cols-2 gap-8">
          {feedBack.map((item) => (
            <FeedBackItem
              key={item.id}
              name={item.name}
              cmt={item.cmt}
              avt={item.avt}
              img={item.img}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
