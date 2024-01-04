import PropTypes from "prop-types";
import clsx from "clsx";
import Card from "@/components/contents/Card";
import Pagination from "@/components/contents/Pagination";
import { useState } from "react";
import FilterBar from "@/components/layouts/FilterBar";
import SortBar from "@/components/layouts/SortBar";

const CardList = ({ className, items, ...rest }) => {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({
    category: "all",
    approvalStatus: "all",
    attachment: "all",
    discount: "all",
  });
  const [sort, setSort] = useState("asc");

  const filterHandler = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  const sortHandler = (e) => {
    setSort(e.target.value);
    setCurrentPage(1);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePick = (value) => {
    setCurrentPage(value);
  };

  const itemsPerPageHandler = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  let itemsFiltered = items
    .filter((item) => {
      if (filter.category === "all") return true;
      return item.type === Number(filter.category);
    })
    .filter((item) => {
      if (filter.approvalStatus === "all") return true;
      return item.status === Number(filter.approvalStatus);
    })
    .filter((item) => {
      if (filter.attachment === "all") return true;
      return item.attachment === Number(filter.attachment);
    })
    .filter((item) => {
      if (filter.discount === "all") return true;
      if (filter.discount === "0") return item.discount === 0;
      return item.discount > 0;
    });

  if (sort === "asc") {
    itemsFiltered = itemsFiltered.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sort === "desc") {
    itemsFiltered = itemsFiltered.sort((a, b) => b.name.localeCompare(a.name));
  }

  const itemsToDisplay = itemsFiltered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <FilterBar
        className="mb-3"
        filter={filter}
        filterHandler={filterHandler}
      />
      <SortBar className="mb-3" sort={sort} sortHandler={sortHandler} />
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={itemsFiltered.length}
        totalPickNumber={5}
        itemsPerPageHandler={itemsPerPageHandler}
        prevHandler={handlePrev}
        nextHandler={handleNext}
        pickHandler={handlePick}
      />

      {itemsToDisplay && itemsToDisplay.length > 0 ? (
        <div
          className={clsx(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 md:gap-2",
            className
          )}
          {...rest}
        >
          {itemsToDisplay.map((item) => (
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
  items: PropTypes.array.isRequired,
};

export default CardList;
