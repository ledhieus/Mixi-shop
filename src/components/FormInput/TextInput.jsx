/* eslint-disable react/prop-types */

const TextInput = ({ type= "text", onChange, name, value}) => {
  return (
    <div className="">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border rounded-sm w-full px-2 py-1"
        required
      />
    </div>
  );
};

export default TextInput;
