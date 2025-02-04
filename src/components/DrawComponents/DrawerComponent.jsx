/* eslint-disable react/prop-types */
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer } from "antd";
import { Link } from "react-router-dom";

const DrawerComponent = ({ onClose, open, setDetailCategory, detailCategory }) => {
  
  return (
    <>
      {detailCategory ? (
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
            placement="left"
            onClose={onClose}
            open={open}
          >
            <div className="flex flex-col text-[20px] space-y-3">
              <Link to={"/"} onClick={()=> onClose()}>Trang chủ</Link>
              <Link to={"/about"} onClick={()=> onClose()}>Giới thiệu</Link>
              <div className="flex items-center justify-between cursor-pointer">
                <Link to={"/collection/all"} onClick={()=> onClose()}>Sản phẩm</Link>
                <FontAwesomeIcon icon={faAngleRight} onClick={()=>setDetailCategory(false)}/>
              </div>
              <Link to={"/blog"} onClick={()=> onClose()}>Blog</Link>
              <Link to={"/contact"} onClick={()=> onClose()}>Liên hệ</Link>
              <Link to={"/tracking-order"} onClick={()=> onClose()}>Kiểm tra đơn hàng</Link>
            </div>
          </Drawer>
        </>
      ) : (
        <>
          <Drawer
            title={
              <div className="bg-black text-white flex items-center gap-2 px-2 py-2">
                <FontAwesomeIcon icon={faAngleLeft} onClick={()=>setDetailCategory(true)}/>
                <p>SẢN PHẨM</p>
              </div>
            }
            closable={false}
            placement="left"
            onClose={onClose}
            open={open}
          >
            <div className="flex flex-col text-[20px] space-y-3">
              <Link to={"/collection/do-xuan-he"} onClick={()=> onClose()}>Đồ xuân hè</Link>
              <Link to={"/collection/do-thu-dong"} onClick={()=> onClose()}>Đồ thu đông</Link>
              <Link to={"/collection/coc-binh"} onClick={()=> onClose()}>Cốc bình</Link>
              <Link to={"/collection/lego"} onClick={()=> onClose()}>lego</Link>
              <Link to={"/collection/giay-dep"} onClick={()=> onClose()}>Giày dép</Link>
              <Link to={"/collection/do-luu-niem"} onClick={()=> onClose()}>Đồ lưu niệm</Link>
            </div>
          </Drawer>
        </>
      )}
    </>
  );
};

export default DrawerComponent;
