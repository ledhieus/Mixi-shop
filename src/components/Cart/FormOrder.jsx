/* eslint-disable react/prop-types */


const FormOrder = ({ handleSubmit, totalBill, setDate, today, date, setTime, time }) => {
  
  return (
    <div className="flex-1 ">
      <div className="px-6 py-4 bg-[#f7f7f7] h-full">
        <p>HẸN GIỜ CHECK ĐƠN</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center gap-2">
            <input
              type="date"
              className="flex-1 border p-1"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              value={date}
              min={today.toISOString().split("T")[0]}
              max={
                new Date(today.setDate(today.getDate() + 5))
                  .toISOString()
                  .split("T")[0]
              }
            />
            <select className="flex-1 border p-1" value={time} onChange={(e) => setTime(e.target.value)}>
              <option>Chọn thời gian</option>
              <option value="8h00 - 12h00">8h00 - 12h00</option>
              <option value="12h00 - 18h00">12h00 - 18h00</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-medium ">TỔNG CỘNG</p>
            <p className="font-medium text-[#155BF6]">{totalBill}.000đ</p>
          </div>
          <button
            type="submit"
            className="bg-black text-white w-full rounded-md py-2 px-4 hover:font-medium"
          >
            Thanh toán
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormOrder;
