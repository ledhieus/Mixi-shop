import CartItem from "../CartItem";

/* eslint-disable react/prop-types */
const RecommentItem = ({ title, recommentItem }) => {
  return (
    <>
      <div className="padding-layout mt-8">
        <div className="text-[36px] font-normal mb-2">{title}</div>
        <div className="grid grid-cols-5 gap-8">
          {recommentItem.map((item) => (
            <CartItem
              key={item.id}
              img={item.images[0] || []}
              title={item.title}
              price={item.price}
              slug={item.slug}
              code={item.code}
              size={item.size || []}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RecommentItem;
