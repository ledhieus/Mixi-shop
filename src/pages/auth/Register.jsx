import { Link, useNavigate } from "react-router-dom";
import FormField from "../../components/FormField";
import { useForm } from "react-hook-form";
import TextInput from "../../components/FormInput/TextInput";
import { createUser, getUser } from "../../service/userService";
import { generateToken } from "../../helper/createToken";
import { setCookie } from "../../helper/cookie";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/login";

const Register = () => {
  const nagetive = useNavigate()
  const dispatch = useDispatch()
  const { control, handleSubmit } = useForm();
  const onSubmit = async(formData)=> {
    const email = formData.email
    const existEmail = await getUser(`email=${email}`)
    
    if(existEmail.length > 0){
      alert("Email đã tồn tại")
    } else {
      const token = generateToken()
      const newFormData = {...formData, token: token}
      const result = await createUser(newFormData) 
      if(result){
        setCookie("token", token, 3)
        setCookie("id", result.id, 3)
        dispatch(login())
        nagetive("/account")
      }
    }
  }
  return (
    <div>
      <div className="mb-5 text-center">
        <p className=" text-2xl font-bold">ĐĂNG KÝ TÀI KHOẢN</p>
        <p className="">
          Bạn đã có tải khoản?{" "}
          <Link to={"/login"} className="text-[#2F80ED]">
            Đăng nhập tại đây
          </Link>
        </p>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name="fullName"
          lable="Full Name"
          type="text"
          Component={TextInput}
        />
        <FormField
          control={control}
          name="email"
          lable="Email"
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
          name="password"
          lable="Password"
          type="password"
          Component={TextInput}
        />
        <button type="submit" className="bg-black text-white py-2 rounded-md">
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default Register;
