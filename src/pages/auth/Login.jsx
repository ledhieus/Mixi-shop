import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"
import { getUser } from "../../service/userService";
import TextInput from "../../components/FormInput/TextInput";
import FormField from "../../components/FormField";
import { setCookie } from "../../helper/cookie";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/login";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { control, handleSubmit } = useForm();
  const onSubmit = async(formData)=> {
    const email = formData.email
    const password = formData.password
    const existEmail = await getUser(`email=${email}`)
    console.log(existEmail)
    if(existEmail.length > 0){
      if(existEmail[0].password === password){
        setCookie("token", existEmail[0].token, 3)
        setCookie("id", existEmail[0].id, 3)
        dispatch(login())
        navigate("/account")
      }
      else{
        alert("Sai mật khẩu")
      }
    } else{
      alert("Email không tồn tại")
    }
  }
  return (
    <div>
      <div className="mb-5 text-center">
        <p className=" text-2xl font-bold">ĐĂNG KÝ TÀI KHOẢN</p>
        <p className="">
          Bạn chưa có tải khoản?{" "}
          <Link to={"/register"} className="text-[#2F80ED]">
            Đăng ký tại đây
          </Link>
        </p>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name="email"
          lable="Email"
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
          Đăng nhập
        </button>
      </form>
    </div>
  )
}

export default Login