
import InputQuantity from "../InputQuantity";

/* eslint-disable react/prop-types */
const MiniCart = ({
  images = [],
  price,
  size = [],
  stock,
  quantity,
  setQuantity,
  handleOnchange,
  setSizeActive,
  sizeActive,
}) => {
  return (
    <>
      <div className="padding-layout mt-6">
        <div className="border border-slate-200 flex gap-4 rounded-md">
          <div className="px-4 py-6">
            {images.length > 1 ? (
              <>
                <img src={images[0]} className="w-[70px]" />
              </>
            ) : (
              <>
                <img src={images} className="w-[70px]" />
              </>
            )}
          </div>
          <div className="flex flex-1 items-center justify-between px-4">
            <p className="font-medium text-[#007bff]">{price}.000đ</p>
            <div className="flex items-center space-x-6">
              <select
                className="border border-slate-200 py-2 rounded-md"
                value={sizeActive}
                onChange={(e) => {
                  setSizeActive(e.target.value);
                }}
              >
                {size.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              <p>Số lượng:</p>
              <InputQuantity
                stock={stock}
                quantity={quantity}
                setQuantity={setQuantity}
                handleOnchange={handleOnchange}
              />
              <button className="font-medium border border-[#155BF6] px-8 py-2 rounded-md text-[#155BF6] hover:text-white hover:bg-[#155BF6]">
                Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniCart;
