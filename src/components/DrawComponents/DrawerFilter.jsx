/* eslint-disable react/prop-types */
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer } from "antd";
import FormField from "../FormField";
import { useForm } from "react-hook-form";
import PriceArrange from "../FormInput/PriceArrange";
import CategoryArrange from "../FormInput/CategoryArrange";
import { useEffect } from "react";

const DrawerFilter = ({ onClose, open, setFilterForm }) => {
  const { control, watch } = useForm({
    defaultValues: {
      arrange: {
        sort: "slug",
        order: "asc",
      },
    },
  });
  const formValue = watch();
  useEffect(()=> {
      setFilterForm(formValue)
    }, [formValue, setFilterForm])
  return (
    <>
      <Drawer
        title={
          <div className="bg-black text-white flex items-center gap-2 px-2 py-2">
            <div className="bg-white text-black px-2 py-1 rounded-full">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>
              <p>Tài khoản</p>
              <p>Đăng nhập</p>
            </div>
          </div>
        }
        closable={false}
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="flex flex-col ">
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
      </Drawer>
    </>
  );
};

export default DrawerFilter;
