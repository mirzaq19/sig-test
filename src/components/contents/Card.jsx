import clsx from "clsx";
import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";
import { categoryType } from "@/utilities/categoryType";
import { currencyFormat } from "@/utilities/currencyFormat";

const Card = ({
  className,
  id,
  type,
  name,
  status,
  price,
  discount,
  attachment,
  ...rest
}) => {
  const approvalStatus = status === 1 ? true : false;

  return (
    <div
      className={clsx(
        "p-4 border border-white rounded-lg flex flex-col justify-between",
        className
      )}
      {...rest}
    >
      <div>
        <div className="flex justify-between mb-2">
          <span className="flex gap-1 items-center bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-1 rounded">
            id: {id}
          </span>
          <span
            className={clsx(
              "flex gap-1 items-center text-xs font-medium px-2.5 py-1 rounded",
              approvalStatus
                ? "bg-green-900 text-green-300"
                : "bg-yellow-900 text-yellow-300"
            )}
          >
            {approvalStatus ? (
              <>
                <FaCheckCircle /> Approved
              </>
            ) : (
              <>
                <AiOutlineEdit /> Waiting Approval
              </>
            )}
          </span>
        </div>
        <div className="text-center">
          <h4>{name}</h4>
          <p className="text-gray-400 text-sm">{categoryType[type].title}</p>
        </div>
        <hr className="border-0 border-b border-gray-400 my-3" />
        <p className="font-light">
          <span className="font-semibold">Price:</span> {currencyFormat(price)}
        </p>
      </div>
      <div className="mt-4 md:mt-0">
        {discount > 0 && (
          <div className="bg-gray-300/10 text-center py-3 rounded-lg mt-2">
            <p className="font-light">
              <span className="font-semibold">Discount: </span>
              {currencyFormat(discount)}
            </p>
            {discount >= 1000000 && (
              <span className="inline-block bg-blue-900 text-blue-300 text-xs font-medium px-3 py-1 rounded mt-1">
                Approval needed
              </span>
            )}
          </div>
        )}

        {attachment === 1 ? (
          <span className="flex items-center gap-2 justify-center bg-gray-600/30 p-2 rounded-lg mt-2">
            <IoDocumentAttachOutline /> Attachment
          </span>
        ) : (
          <span className="flex items-center gap-2 justify-center border border-gray-500 border-dashed p-2 rounded-lg mt-2">
            No Attachment
          </span>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number.isRequired,
  type: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  attachment: PropTypes.number.isRequired,
};

export default Card;
