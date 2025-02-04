import { faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCheckLogin from "../components/useCheckLogin";

const Account = () => {
  const checkLogin = useCheckLogin()
  const infoUser = checkLogin[0]
  console.log(checkLogin)
  return (
    <div className="padding-layout mt-10 ">
      <div className="flex text-[16px]">
        <div className="flex-1 space-y-4 border-r-[1px] border-slate-200">
          <div>
            <p className="text-[20px]">TRANG TÀI KHOẢN</p>
            <p className="font-medium">Xin chào {infoUser && infoUser.fullName}</p>
          </div>
          <p>Thông tin tài khoản</p>
          <p>Sổ địa chỉ</p>
          <p>Đăng xuất</p>
        </div>
        <div className="flex-[5] space-y-6 px-20">
          <p className="text-[20px]">TÀI KHOẢN</p>
          <p>Tên tài khoản: {infoUser && infoUser.fullName}</p>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faHome} />
            <p>Địa chỉ: Vietnam</p>
          </div>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faPhone} />
            <p>Điện thoại: {infoUser && infoUser.phone}</p>
          </div>
          <p className="text-[20px]">ĐƠN HÀNG CỦA BẠN</p>
          <div className="bg-gray-100 flex items-center justify-center">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-gray-700 font-bold bg-gray-200 border-b border-gray-300">Mã đơn hàng</th>
                  <th className="px-6 py-3 text-left text-gray-700 font-bold bg-gray-200 border-b border-gray-300">Ngày đặt</th>
                  <th className="px-6 py-3 text-left text-gray-700 font-bold bg-gray-200 border-b border-gray-300">Thành tiền</th>
                  <th className="px-6 py-3 text-left text-gray-700 font-bold bg-gray-200 border-b border-gray-300">TT thanh toán</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="px-6 py-4 border-b border-gray-300 text-gray-800">12345</td>
                  <td className="px-6 py-4 border-b border-gray-300 text-gray-800">2025-01-20</td>
                  <td className="px-6 py-4 border-b border-gray-300 text-gray-800">1,000,000 VND</td>
                  <td className="px-6 py-4 border-b border-gray-300 text-gray-800 font-semibold">Đã thanh toán</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
