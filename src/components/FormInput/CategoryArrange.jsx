/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getCategory } from "../../service/categoryService";

const CategoryArrange = ({ name, onChange }) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCategory(`/category`);
      setCategory(data);
    };
    fetchApi();
  }, []);
  return (
    <div className="mt-10">
      <p className="font-medium mb-4 ">DANH MỤC</p>
      <div className="flex flex-col gap-2 accent-black">
        {category.map((item) => (
          <div key={item.id}>
            <input
              type="radio"
              id={item.slug}
              className="mr-2"
              value={item.id}
              name={name}
              onChange={onChange}
            />
            <label htmlFor={item.slug}>{item.title}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryArrange;
