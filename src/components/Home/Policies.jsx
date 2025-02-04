/* eslint-disable react/prop-types */
const Policies = ({title, sub, img}) => {
  return (
    <div className="flex flex-col xl:flex-row gap-3  items-center mb-4">
      <div className="flex items-center">
        <img src={img} />
      </div>
      <div>
        <p className="font-bold text-center xl:text-left">{title}</p>
        <p className="text-[14px] text-center xl:text-left">{sub}</p>
      </div>
    </div>
  );
};

export default Policies;
