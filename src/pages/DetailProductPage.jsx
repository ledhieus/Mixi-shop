import { useEffect, useState } from "react";
import DetailItem from "../components/DetailProduct/DetailItem";
import MiniCart from "../components/DetailProduct/MiniCart";
import RecommentItem from "../components/DetailProduct/RecommentItem";
import { getItem } from "../service/productService";
import { useParams } from "react-router-dom";

const DetailProductPage = () => {
  const { slugProduct: slug } = useParams();

  const [detailProduct, setDetailProduct] = useState([]);
  const [recommentItem, setRecommentItem] = useState([]);

  const [sizeActive, setSizeActive] = useState("M");
  const [quantity, setQuantity] = useState(1);
  
  const handleOnchange = (e) => {
    const value = e.target.value;
    const parsedValue = parseInt(value, 10);

    if (value === "") {
      setQuantity("");
    } else if (!isNaN(parsedValue) && parsedValue > detailProduct.stock) {
      setQuantity(detailProduct.stock);
    } else if (!isNaN(parsedValue) && parsedValue >= 1) {
      setQuantity(parsedValue);
    } else if (parsedValue < 1 || isNaN(parsedValue)) {
      setQuantity(1);
    }
  };

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getItem(`/products?slug=${slug}`);
      setDetailProduct(data);
    };
    fetchApi();
  }, [slug]);

  useEffect(() => {
    if (detailProduct.length > 0 && detailProduct[0]?.type) {
      const fetchApi = async () => {
        const data = await getItem(`/products?type=${detailProduct[0].type}`);
        setRecommentItem(data);
      };
      fetchApi();
    }
  }, [detailProduct]);
  return (
    <>
      <DetailItem
        {...detailProduct[0]}
        quantity={quantity}
        setQuantity={setQuantity}
        handleOnchange={handleOnchange}
        setSizeActive={setSizeActive}
        sizeActive={(detailProduct || 0)[0]?.size ? sizeActive : "" }
      />
      <MiniCart
        {...detailProduct[0]}
        quantity={quantity}
        setQuantity={setQuantity}
        handleOnchange={handleOnchange}
        setSizeActive={setSizeActive}
        sizeActive={sizeActive}
      />
      <RecommentItem
        title="Sản phẩm cùng loại"
        recommentItem={recommentItem || []}
      />
    </>
  );
};

export default DetailProductPage;
