/* eslint-disable react/prop-types */

const SelectInput = ({name, onChange}) => {
  return (
    <div className="flex gap-2" name={name} onChange={onChange}>
      <p>Sắp xếp:</p>
      <select className="border-[1px] border-black">
        <option>Tên A-Z</option>
        <option>Tên Z-A</option>
        <option>Giá tăng dần</option>
        <option>Giá giảm dần</option>
      </select>
    </div>
  );
};

export default SelectInput;
