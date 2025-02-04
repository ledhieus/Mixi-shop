/* eslint-disable react/prop-types */
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FeedBackItem = ({ cmt, avt, img, title, name}) => {
  return (
    <div className="flex flex-col bg-white px-6 py-8">
      <div className="flex mb-6 gap-2">
        <div className="flex-[3] space-y-4 ">
          <p>{name}</p>
          <div className="text-yellow-400">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <p>{cmt}</p>
        </div>
        <div className="flex-1">
          <img src={avt} />
        </div>
      </div>
      <div className="flex gap-4 py-4 border-t-[1px] items-center">
        <div className="flex-1">
          <img src={img} />
        </div>
        <p className="flex-[8]">{title}</p>
      </div>
    </div>
  );
};

export default FeedBackItem;
