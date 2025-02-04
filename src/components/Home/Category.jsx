/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Category = ({ img, title, count, slug }) => {
  return (
    <>
      <Link to={`/collection/${slug}`}>
        <div className="flex flex-col items-center space-y-4 transform transition-transform duration-300 hover:scale-110">
          <img src={img} />
          <div className="flex flex-col items-center">
            <p className="font-bold">{title}</p>
            <p className="text-[14px]">{count} sản phẩm</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Category;
