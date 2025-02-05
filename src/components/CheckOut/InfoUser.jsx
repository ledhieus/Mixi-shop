/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import FormField from "../FormField"
import TextInput from "../FormInput/TextInput"

const InfoUser = ({control, handleSubmit, onSubmit}) => {
  return (
    <div className="px-6 text-[16px] sm:border-r-[1px] border-slate-200 ">
          <p className="text-[30px]">MIXI SHOP</p>
          <p className="font-normal">Thông tin giao hàng</p>
          <div className="mt-6">
            <div className="flex items-center gap-2">
              <div className="w-14">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg" />
              </div>
              <div>
                <p>Lê Đức Hiếu</p>
                <Link to={"/logout"} className="text-[14px] text-[#338dbc]">
                  Đăng Xuất
                </Link>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
              <div className="space-y-4">
                <FormField
                  control={control}
                  name="fullName"
                  lable="Full Name"
                  type="text"
                  Component={TextInput}
                />
                <FormField
                  control={control}
                  name="phone"
                  lable="Phone"
                  type="text"
                  Component={TextInput}
                />
                <FormField
                  control={control}
                  name="address"
                  lable="Address"
                  type="text"
                  Component={TextInput}
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <Link to={"/cart"} className="text-[#338dbc]">
                  Giỏ hàng
                </Link>
                <button
                  type="submit"
                  className="bg-[#338dbc] text-white px-4 py-2 rounded-md hover:bg-[#7ccefa]"
                >
                  Thanh toán
                </button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default InfoUser