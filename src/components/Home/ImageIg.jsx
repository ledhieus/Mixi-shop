import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/prop-types */
const ImageIg = ({img}) => {
  return (
    <>
      <div className="transform smooth hover:scale-75 cursor-pointer relative group">
        <img src={img} />
        <div className="text-[30px] bg-white rounded-full w-12 h-12 absolute top-0 inset-0 m-auto cusFlex group-hover:opacity-100 opacity-0 transition-opacity ease-in-out duration-500">
          <FontAwesomeIcon icon={faInstagram}/>
        </div>
      </div>
    </>
  );
};

export default ImageIg;
