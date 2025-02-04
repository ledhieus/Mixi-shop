import { Link, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const SuccessSearch = ({
  setIsShowingSuccess,
  productSuccess = [],
  searchTerm,
  setIsShowing,
}) => {
  const naviagte = useNavigate();
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
        onClick={() => {
          setIsShowingSuccess(false);
        }}
      ></div>
      <div className="h-fit max-h-80 w-full bg-white absolute p-2 rounded-lg z-[9998]">
        <div>
          <p>Kết quả tìm kiếm</p>
          <div className="max-h-64 overflow-y-auto ">
            {productSuccess.map((item) => (
              <Link key={item.id} to={`/product/${item.slug}`} onClick={()=> {setIsShowing(false), setIsShowingSuccess(false)}}>
                <div  className="flex py-2 gap-4 border-t-[1px]">
                  <img src={item.images[0] || []} className="w-24" />
                  <div>
                    <p>{item.title}</p>
                    <p className="text-red-500">{item.price}.000đ</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p
            className="text-center border-t-[1px] py-1 text-[14px] cursor-pointer"
            onClick={() => {
              naviagte(`/search/${searchTerm}`);
              setIsShowing(false);
            }}
          >
            Xem kết quả tìm kiếm
          </p>
        </div>
      </div>
    </>
  );
};

export default SuccessSearch;
