/* eslint-disable react/prop-types */


const InputQuantity = ({ stock, quantity, setQuantity, handleOnchange }) => {
  const handleBlur = () => {
    if (quantity === "") {
      setQuantity(1);
    }
  };
  return (
    <div>
      <div className="flex border border-slate-300 w-fit rounded-md items-center">
        <span
          className="px-5 py-2 cursor-pointer"
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
        >
          -
        </span>
        <input
          className="px-5 py-2 w-20 text-center"
          type="number"
          min="1"
          value={quantity === "" ? "" : quantity}
          onChange={handleOnchange}
          onBlur={handleBlur}
        />
        <span
          className="px-5 py-2  cursor-pointer"
          onClick={() => {
            if (quantity < stock) {
              console.log("OK");
              setQuantity(quantity + 1);
            }
          }}
        >
          +
        </span>
      </div>
    </div>
  );
};

export default InputQuantity;
