import { useDispatch, useSelector } from "react-redux";
import ItemProduct from "../components/Cart/ItemProduct";
import { removeCartId } from "../redux/slices/cart";
import { getCart } from "../helper/localStorage";
import FormOrder from "../components/Cart/FormOrder";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../helper/cookie";
import { addBill } from "../redux/slices/bill";
import { downCart } from "../redux/slices/countCart";

const Cart = () => {
  const dispatch = useDispatch();
  const userId = getCookie("id")

  const {checkLogin} = useSelector(state => state.checkLogin)
  const navigate = useNavigate()

  const { cartItemList } = useSelector((state) => state.cart);
  const { totalBill } = useSelector((state) => state.totalBill);

  const today = new Date();
  const [date, setDate] = useState(today.toISOString().split("T")[0]);
  const [time, setTime] = useState("");
  const [note, setNote] = useState("")

  const itemOrder = getCart();

  const handleClick = (id, size) => {
    dispatch(downCart())
    dispatch(removeCartId({ id, size }));
  };


  const handleSubmit =async(e) => {
    e.preventDefault();
    if (!date || !time) {
        alert("Vui lòng điền đầy đủ thông tin ngày và thời gian!");
        return;
      }
    if(checkLogin){
      const order = {
        date: date,
        timeCheck: time,
        totalBill: totalBill,
        itemList: itemOrder,
        note: note,
        userId: userId
      };
      dispatch(addBill(order))
      navigate("/checkout")
      // const postOrder = await postOrder(order)
      // dispatch(removeAll())
    } else {
      navigate("/login")
    }
    
  };

  return (
    <>
      {cartItemList && cartItemList.length > 0 ? (
        <>
          <div className="padding-layout">
            <p className="font-medium text-[30px] mt-10">Giỏ hàng </p>
            <div className="lg:flex lg:flex-row flex flex-col mt-6">
              <div className="flex-[2] lg:px-10 lg:py-4 px-0 py-0 space-y-4">
                {cartItemList.map((item) => (
                  <ItemProduct
                    key={`${item.id}-${item.size}`}
                    id={item.id}
                    size={item.size}
                    handleClick={handleClick}
                    stock={item.stock}
                    quantity={item.quantity}
                    itemOrder={itemOrder}
                  />
                ))}
                <div>
                  <p>Ghi chú đơn hàng</p>
                  <textarea
                    className="border-[1px] border-slate-400 w-full px-4 py-2"
                    rows="2" onChange={(e)=> {setNote(e.target.value)}}
                  ></textarea>
                </div>
              </div>

              <FormOrder
                handleSubmit={handleSubmit}
                totalBill={totalBill}
                setDate={setDate}
                today={today}
                date={date}
                setTime={setTime}
                time={time}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="padding-layout mt-8 text-center text-[35px]">
            Chưa có sản phẩm
          </p>
        </>
      )}
    </>
  );
};

export default Cart;
