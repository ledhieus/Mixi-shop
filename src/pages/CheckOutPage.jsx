import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import InfoUser from "../components/CheckOut/infoUser";
import InfoCart from "../components/CheckOut/InfoCart";
import { removeAll } from "../redux/slices/cart";
import { removeBill } from "../redux/slices/bill";
import { useNavigate } from "react-router-dom";
import { postOrder } from "../service/orderService";

const CheckOutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { infoUser } = useSelector((state) => state.infoUser);
  const { cartItemList } = useSelector((state) => state.cart);
  const { totalBill } = useSelector((state) => state.totalBill);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      phone: "",
      fullName: "",
    },
  });
  useEffect(() => {
    if (infoUser) {
      reset({
        phone: infoUser.phone,
        fullName: infoUser.fullName,
      });
    }
  }, [infoUser, reset]);
  const onSubmit = async (formData) => {
    const order = {
      ...formData,
      item: cartItemList,
      totalBill: totalBill + 30,
      userId: infoUser.id,
    };
    const post = await postOrder(order);
    if(post){
      dispatch(removeAll());
      dispatch(removeBill());
      navigate("/success")
      console.log(order);
    }else{
      alert("Không thành công, kiểm tra lại thông tin")
    }
    
  };
  return (
    <div className="px-[400px] m-24">
      <div className="grid grid-cols-2 bg-slate-100 py-6 shadow-sm">
        <InfoUser
          control={control}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
        <div className="px-10 text-[16px] space-y-6 ">
          {cartItemList.map((item) => (
            <InfoCart
              key={item.id}
              id={item.id}
              size={item.size}
              quantity={item.quantity}
              price={item.price}
              totalBill={totalBill}
            />
          ))}
          <div className="py-4 border-t-[1px] border-slate-200">
            <div className="flex items-center justify-between">
              <p>Tạm tính</p>
              <p>{totalBill}.000đ</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Phí vận chuyển</p>
              <p>30.000đ</p>
            </div>
          </div>
          <div className="py-4 border-t-[1px] border-slate-200">
            <div className="flex items-center justify-between">
              <p>Tổng cộng</p>
              <p>{totalBill + 30}.000đ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
