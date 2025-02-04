import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <div className="bg-[#14B8B9] text-white mt-10 text-[16px]">
        <div className="padding-layout ">
          <div className="lg:grid grid-cols-4 py-20 flex flex-col">
            <div className="space-y-4 mb-8">
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faLocationDot} />
                <p>Địa chỉ: Yên Lãng, Hà Nội</p>
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faMobile} />
                <p>Số điện thoại: 0822221992</p>
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>Email: Mixiishop@gmail.com</p>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              <p className="text-[18px] font-medium">Chính sách</p>
              <p>Trang chủ</p>
              <p>Giới thiệu</p>
              <p>Sản phẩm</p>
              <p>Blog</p>
              <p>Liên hệ</p>
              <p>Kiểm tra đơn hàng</p>
            </div>
            <div className="space-y-4 mb-8">
              <p className="text-[18px] font-medium">HỖ TRỢ KHÁCH HÀNG</p>
              <p>Tìm kiếm</p>
              <p>Chính sách bảo mật</p>
              <p>Điều khoản dịch vụ</p>
              <p>Hướng dẫn kiểm tra đơn hàng</p>
            </div>
            <div className="space-y-4">
              <p className="text-[18px] font-medium">ĐĂNG KÝ NHẬN TIN</p>
              <form>
                <div className="flex border border-slate-950 rounded-full bg-white p-[1px]">
                  <input type="email" className="text-black lg:flex-1 px-2 rounded-l-full outline-none py-0 w-full lg:w-[20px]" placeholder="Nhập email"/>
                  <button className="bg-black text-white lg:px-4 lg:py-2 px-2 py-1 rounded-full text-[16px] whitespace-nowrap">Đăng ký</button>
                </div>
              </form>
              <div className="flex gap-4">
                <img src="https://theme.hstatic.net/200000881795/1001243022/14/facebook.png?v=152"/>
                <img src="https://theme.hstatic.net/200000881795/1001243022/14/instagram.png?v=152"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
