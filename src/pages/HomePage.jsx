import { useEffect, useState } from "react";
import CategoryComponent from "../components/Home/CategoryComponent";
import Collection from "../components/Home/Collection";
import FeedBack from "../components/Home/FeedBack";
import HotItem from "../components/Home/HotItem";
import Instagram from "../components/Home/Instagram";
import PolicieComponent from "../components/Home/PolicieComponent";
import SummerItem from "../components/Home/SummerItem";
import { getItem } from "../service/productService";
import { getCategory } from "../service/categoryService";
const HomePage = () => {
  const [itemNew, setItemNew] = useState([]);
  const [collections, setCollections] = useState([]);
  const [status, setStatus] = useState("new");
  const [statusCollection, setStatusCollection] = useState("lego");
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getItem(
        `${status === "new" ? "/products?state=new" : "/products?type=summer"}`
      );
      setItemNew(data);
    };
    fetchApi();
  }, [status]);

  useEffect(() => {
    const fetchApi = async () => {
      let url = "";

      switch (statusCollection) {
        case "lego":
          url = "/products?type=lego";
          break;
        case "summer":
          url = "/products?type=summer";
          break;
        case "winter":
          url = "/products?type=winter";
          break;
        default:
          console.log("Không phải ngày hợp lệ");
      }
      const data = await getItem(url);
      setCollections(data);
    };
    fetchApi();
  }, [statusCollection]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCategory("/category");
      setCategory(data);
    };
    fetchApi();
  }, []);
  return (
    <>
      <div className=" mx-auto space-y-20">
        <div className=" padding-layout">
          <img
            src="https://theme.hstatic.net/200000881795/1001243022/14/slider_1.jpg?v=152"
            className="w-full"
          />
        </div>
        <PolicieComponent />
        <CategoryComponent category={category || []} />
        <HotItem
          itemNew={itemNew || []}
          setStatus={setStatus}
          status={status}
        />
        <SummerItem />
        <img
          src="https://theme.hstatic.net/200000881795/1001243022/14/imgtext_1_img.jpg?v=152"
          className="w-full padding-layout"
        />
        <Collection
          collections={collections || []}
          setStatusCollection={setStatusCollection}
          statusCollection={statusCollection}
        />
        <FeedBack />
        <img
          src="https://theme.hstatic.net/200000881795/1001243022/14/imgtext_2_img.jpg?v=152"
          className="w-full padding-layout"
        />
        <Instagram />
      </div>
    </>
  );
};

export default HomePage;
