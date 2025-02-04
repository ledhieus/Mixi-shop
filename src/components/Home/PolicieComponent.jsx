import Policies from "./Policies";

const PolicieComponent = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 grid-cols-2 py-5 mt-5 padding-layout">
        <Policies
          title="Vận chuyển toàn quốc"
          sub="Vận chuyển nhanh chóng"
          img="https://theme.hstatic.net/200000881795/1001243022/14/policies_icon_1.png?v=152"
        />
        <Policies
          title="Ưu đãi hấp dẫn"
          sub="Nhiều ưu đãi khuyến mãi hot"
          img="https://theme.hstatic.net/200000881795/1001243022/14/policies_icon_2.png?v=152"
        />
        <Policies
          title="Bảo đảm chất lượng"
          sub="Sản phẩm đã được kiểm định"
          img="https://theme.hstatic.net/200000881795/1001243022/14/policies_icon_3.png?v=152"
        />
        <Policies
          title="Hotline: 0822221992"
          sub="Vui lòng gọi hotline để hỗ trợ"
          img="https://theme.hstatic.net/200000881795/1001243022/14/policies_icon_4.png?v=152"
        />
      </div>
    </>
  );
};

export default PolicieComponent;
