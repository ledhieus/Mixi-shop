/* eslint-disable react/prop-types */
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getItem } from "../../service/productService";
import InputQuantity from "../InputQuantity";
import { setCart } from "../../helper/localStorage";
import { useDispatch } from "react-redux";
import { updateTotalBill } from "../../redux/slices/totalBill";

const ItemProduct = ({ id, size, handleClick, stock, quantity, itemOrder }) => {
  const dispatch = useDispatch();
  const [cartItem, setCartItem] = useState([]);
  const [updateQuantity, setUpdateQuantity] = useState(quantity);
  // const cartItemList = getCart()
  // console.log(cartItemList)
  useEffect(() => {
    const updateCart = (newQuantity) => {
      // const cartItemList = getCart()
      const updatedCart = itemOrder.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      );
      setCart(updatedCart);
      dispatch(updateTotalBill(updatedCart));
    };
    updateCart(updateQuantity);
  }, [updateQuantity, id, size, dispatch, itemOrder]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getItem(`/products?id=${id}`);
      setCartItem(data);
    };
    fetchApi();
  }, [id]);
  const handleOnchange = (e) => {
    const value = e.target.value;
    const parsedValue = parseInt(value, 10);
    if (value === "") {
      setUpdateQuantity("");
    } else if (!isNaN(parsedValue) && parsedValue > stock) {
      setUpdateQuantity(stock);
    } else if (!isNaN(parsedValue) && parsedValue >= 1) {
      setUpdateQuantity(parsedValue);
    } else if (parsedValue < 1 || isNaN(parsedValue)) {
      setUpdateQuantity(1);
    }
  };
  return (
    <div>
      {cartItem.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faX}
              className="cursor-pointer text-[14px]"
              onClick={() => {
                handleClick(id, size);
              }}
            />
            <div className="px-2">
              <img src={item.images[0]} className="w-[70px]" />
            </div>
            <div>
              <p className="text-[16px]">{item.title}</p>
              {size && <p className="text-[14px] text-stone-400">{size}</p>}
              <div className="flex items-center gap-4 mt-2 md:hidden">
                <p className="text-[#155BF6]">
                  {item.price * updateQuantity}.000đ
                </p>
                <InputQuantity
                  stock={stock}
                  quantity={updateQuantity}
                  setQuantity={setUpdateQuantity}
                  handleOnchange={handleOnchange}
                />
              </div>
            </div>
          </div>
          <div className="md:flex items-center justify-between gap-2 hidden">
            <p className="text-[#155BF6]">{item.price * updateQuantity}.000đ</p>
            <InputQuantity
              stock={stock}
              quantity={updateQuantity}
              setQuantity={setUpdateQuantity}
              handleOnchange={handleOnchange}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemProduct;
