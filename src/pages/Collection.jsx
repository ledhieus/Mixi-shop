/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { getItem } from "../service/productService";
import { useParams } from "react-router-dom";
import SelectInput from "../components/FormInput/SelectInput";
import FormField from "../components/FormField";
import { useForm } from "react-hook-form";
import PriceArrange from "../components/FormInput/PriceArrange";
import CategoryArrange from "../components/FormInput/CategoryArrange";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import DrawerFilter from "../components/DrawComponents/DrawerFilter";

const Collection = () => {
  const { slugCollection: slug } = useParams();
  const [allItem, setAllItem] = useState([]);
  const [categorySlug, setCategorySlug] = useState([]);
  const [filterForm, setFilterForm] = useState([])
  const [arrangeItem, setArrangeItem] = useState({
    arrange: {
      sort: "slug",
      order: "asc",
    },
    category: "",
    price: "",
  });

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      arrange: {
        sort: "slug",
        order: "asc",
      },
    },
  });
  const onSubmit = () => {
    console.log("OK");
  };
  const formValue = watch();
  useEffect(() => {
    setFilterForm(prev => {
      return JSON.stringify(prev) === JSON.stringify(formValue) ? prev : formValue;
    });
  }, [formValue]);

  // useEffect(() => {
  //   if (!filterForm.arrange && !filterForm.price && !filterForm.category) return;
  //   let updatedArrangeItem = { ...arrangeItem };
  //   const arrangeMapping = {
  //     "Tên A-Z": { sort: "slug", order: "asc" },
  //     "Tên Z-A": { sort: "slug", order: "desc" },
  //     "Giá tăng dần": { sort: "price", order: "asc" },
  //     "Giá giảm dần": { sort: "price", order: "desc" },
  //   };
  //   if (arrangeMapping[filterForm.arrange]) {
  //     updatedArrangeItem.arrange = arrangeMapping[filterForm.arrange];
  //   }
  //   if (filterForm.price) {
  //     if (filterForm.price === "all") {
  //       updatedArrangeItem.price = "";
  //     } else {
  //       const [gte, lte] = filterForm.price.split("-");
  //       updatedArrangeItem.price = { gte, lte };
  //     }
  //   }
  //   if (filterForm.category) {
  //     updatedArrangeItem.category = filterForm.category;
  //   }
  //   setArrangeItem(updatedArrangeItem);
  // }, [filterForm.arrange, filterForm.price, filterForm.category]);
  useEffect(() => {
    setArrangeItem(prev => {
      let updatedArrangeItem = { ...prev };
      const arrangeMapping = {
        "Tên A-Z": { sort: "slug", order: "asc" },
        "Tên Z-A": { sort: "slug", order: "desc" },
        "Giá tăng dần": { sort: "price", order: "asc" },
        "Giá giảm dần": { sort: "price", order: "desc" },
      };
      if (arrangeMapping[filterForm.arrange]) {
        updatedArrangeItem.arrange = arrangeMapping[filterForm.arrange];
      }
      if (filterForm.price) {
        if (filterForm.price === "all") {
          updatedArrangeItem.price = "";
        } else {
          const [gte, lte] = filterForm.price.split("-");
          updatedArrangeItem.price = { gte, lte };
        }
      }
      if (filterForm.category) {
        updatedArrangeItem.category = filterForm.category;
      }
      
      return JSON.stringify(updatedArrangeItem) === JSON.stringify(prev) ? prev : updatedArrangeItem;
    });
  }, [filterForm.arrange, filterForm.price, filterForm.category]);
  useEffect(() => {
    if (slug === "all") return;
    if (slug !== "all") {
      const fetchApi = async () => {
        const categoryData = await getItem(`/category?slug=${slug}`);
        setCategorySlug(categoryData);
      };
      fetchApi();
    }
  }, [slug]);

  useEffect(() => {
    const fetchApi = async () => {
      let url = "";
      if (slug === "all") {
        url = `/products?_sort=${arrangeItem.arrange.sort}&_order=${arrangeItem.arrange.order}`;
        if (
          arrangeItem.price &&
          arrangeItem.price.gte &&
          arrangeItem.price.lte
        ) {
          url += `&price_gte=${arrangeItem.price.gte}&price_lte=${arrangeItem.price.lte}`;
        }
        if (arrangeItem.category) {
          url += `&categoryId=${arrangeItem.category}`;
        }
      } else {
        if (categorySlug.length > 0) {
          url = `/products?categoryId=${categorySlug[0].id}&_sort=${arrangeItem.arrange.sort}&_order=${arrangeItem.arrange.order}`;
          if (
            arrangeItem.price &&
            arrangeItem.price.gte &&
            arrangeItem.price.lte
          ) {
            url += `&price_gte=${arrangeItem.price.gte}&price_lte=${arrangeItem.price.lte}`;
          }
          if (arrangeItem.category) {
            url += `&categoryId=${arrangeItem.category}`;
          }
        }
      }
      if (url) {
        const data = await getItem(url);
        setAllItem(data);
      }
    };
    fetchApi();
  }, [slug, arrangeItem.arrange.sort, arrangeItem.arrange.order, arrangeItem.price, arrangeItem.category, categorySlug]);

  return (
    <>
      <div className="padding-layout mt-10">
        <img
          src="https://theme.hstatic.net/200000881795/1001243022/14/collection_main_banner.jpg?v=152"
          className="w-full"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-10">
            <div className=" md:flex items-center justify-between">
              <p className="text-[35px]">Tất cả sản phẩm</p>
              <div className="flex items-center gap-2 mb-4 lg:mb-0">
                <FormField
                  name="arrange"
                  label="Arrange"
                  control={control}
                  Component={SelectInput}
                />
                <div className="cursor-pointer lg:hidden flex items-center" onClick={()=> {showDrawer()}}>
                  <FontAwesomeIcon icon={faFilter} />
                  <span>Lọc</span>
                </div>
              </div>
            </div>
            <div className="flex gap-8 ">
              <div className="flex-1 mt-10 lg:flex flex-col hidden">
                <FormField
                  name="price"
                  label="Price"
                  control={control}
                  Component={PriceArrange}
                />
                <FormField
                  name="category"
                  label="Category"
                  control={control}
                  Component={CategoryArrange}
                />
              </div>
              <div className="flex-[4]">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
                  {allItem.map((item) => (
                    <CartItem
                      key={item.id}
                      img={item.images[0] || []}
                      title={item.title}
                      price={item.price}
                      slug={item.slug}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </form>
        <DrawerFilter onClose={onClose} open={open} setFilterForm={setFilterForm}/>
      </div>
    </>
  );
};

export default Collection;
