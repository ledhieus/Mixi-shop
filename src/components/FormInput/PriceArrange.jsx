import { useState } from "react";

/* eslint-disable react/prop-types */
const PriceArrange = ({ name, onChange }) => {
  const [selectedValue, setSelectedValue] = useState("all");
  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Cập nhật giá trị khi người dùng chọn
    if (onChange) {
      onChange(event); // Gọi hàm onChange để truyền dữ liệu ra ngoài (nếu có)
    }
  };
  return (
    <div>
      <p className="font-medium mb-4 ">MỨC GIÁ</p>
      <div className="flex flex-col gap-2 accent-black">
        <div>
          <input
            type="radio"
            id="1"
            className="mr-2"
            value={"all"}
            name={name}
            onChange={handleChange}
            checked={selectedValue === "all"}
          />
          <label htmlFor="1">Tất cả</label>
        </div>
        <div>
          <input
            type="radio"
            id="1"
            className="mr-2"
            value={"0-100"}
            name={name}
            onChange={handleChange}
            checked={selectedValue === "0-100"}
          />
          <label htmlFor="1">Giá dưới 100,000đ</label>
        </div>
        <div>
          <input
            type="radio"
            id="2"
            className="mr-2"
            value={"100-300"}
            name={name}
            onChange={handleChange}
            checked={selectedValue === "100-300"}
          />
          <label htmlFor="2">100,000đ - 300,000đ</label>
        </div>
        <div>
          <input
            type="radio"
            id="3"
            className="mr-2"
            value={"300-500"}
            name={name}
            onChange={handleChange}
            checked={selectedValue === "300-500"}
          />
          <label htmlFor="3">300,000đ - 500,000đ</label>
        </div>
      </div>
    </div>
  );
};

export default PriceArrange;
