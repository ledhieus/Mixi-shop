import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CartItem from "../components/CartItem";

const SearchPage = () => {
  const { productList } = useSelector((state) => state.productList);
  const { slugSearch: slug } = useParams();
  const productResult = productList.filter((item) => item.slug.includes(slug));
  return (
    <div className="padding-layout mt-10">
      <p className="font-medium text-[20px]">Có {productResult.length} kết quả tìm kiếm phù hợp</p>
      <div className="grid grid-cols-5 gap-8 mt-4">
        {productResult.map((item) => (
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
  );
};

export default SearchPage;
