import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getItem } from "../service/productService";
import CartItem from "../components/CartItem";

const Favorite = () => {
  const { favoriteList } = useSelector((state) => state.favorite);
  const [favoriteItem, setFavoriteItem] = useState([]);
  let array = [];
  favoriteList.map((item) => {
    array.push(`id=${item.id}`);
  });
  const string = array.join("&");
  useEffect(() => {
    if (favoriteList.length > 0) {
      const fetchApi = async () => {
        const data = await getItem(`/products?${string}`);
        console.log(data);
        setFavoriteItem(data);
      };
      fetchApi();
    }
    else{
      setFavoriteItem([]);
    }
  }, [string, favoriteList]);
  return (
    <div className="padding-layout mt-10">
      <div>
        <p className="text-[35px]">Wishlist</p>
        {favoriteItem.length > 0 ? (
          <>
            <div className="grid lg:grid-cols-5 lg:gap-8 md:grid-cols-3 md:gap-6 grid-cols-2 gap-4">
              {favoriteItem.map((item) => (
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
          </>
        ) : (
          <>
            <p>Bạn chưa thêm sản phẩm yêu thích</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Favorite;
