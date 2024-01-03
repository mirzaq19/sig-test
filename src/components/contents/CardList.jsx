import PropTypes from "prop-types";
import clsx from "clsx";
import Card from "@/components/contents/Card";
import Pagination from "@/components/contents/Pagination";

const CardList = ({ className, items, ...rest }) => {
  return (
    <div>
      <Pagination />
      {items && items.length > 0 ? (
        <div
          className={clsx(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 md:gap-2",
            className
          )}
          {...rest}
        >
          {items.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              type={item.type}
              name={item.name}
              status={item.status}
              price={item.price}
              discount={item.discount}
              attachment={item.attachment}
            />
          ))}
        </div>
      ) : (
        <p className="text-center border-2 border-dotted border-secondary rounded py-8 text-gray-600 dark:text-gray-300 dark:border-secondary/60">
          No items.
        </p>
      )}
    </div>
  );
};

CardList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
};

export default CardList;
