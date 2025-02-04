/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { getItem } from "../../service/productService";

const InfoCart = ({id, quantity, size = "", price }) => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getItem(`/products?id=${id}`);
      console.log(data)
      if (data && data.length > 0) {
        setItem(data);
      }
    };
    fetchApi();
  }, [id]);
  return (
    <div className="flex gap-2 items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-20 px-3 border rounded-lg">
        <img src={item[0] ? item[0].images[0] : "" } />
      </div>
      <div>
        <p>{item.title}</p>
        <div className="flex gap-3">
          <p>{size}</p>
          <p>{`SL: ${quantity}`}</p>
        </div>
      </div>
    </div>
    <p>{price*quantity}.000đ</p>
  </div>
  );
};

export default InfoCart;
