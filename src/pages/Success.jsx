import { Link } from "react-router-dom";

const Success = () => {
  return (
    <>
      <div className="mt-10 text-center ">
        <div className="font-bold text-[40px] mb-5">
          Đặt hàng thành công
        </div>
        <Link to={"/account"}>
          <button className="bg-[#338dbc] text-white px-4 py-2 rounded-md hover:bg-[#7ccefa]">
          Chi tiết đơn hàng
          </button>
        </Link>
      </div>
    </>
  );
};

export default Success;
