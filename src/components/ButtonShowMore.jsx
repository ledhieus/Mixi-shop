import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ButtonShowMore = () => {
  return (
    <>
      <Link to={"/collection/all"}>
        <div className="flex justify-center items-center ">
          <button className="border border-slate-700 my-8 px-4 py-2 rounded-md flex justify-center items-center gap-2 hover:bg-black hover:text-white">
            <p>Xem tất cả</p>
            <FontAwesomeIcon icon={faAngleRight} className="text-[16px]" />
          </button>
        </div>
      </Link>
    </>
  );
};

export default ButtonShowMore;
