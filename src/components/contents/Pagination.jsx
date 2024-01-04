import clsx from "clsx";
import PropTypes from "prop-types";

const Pagination = ({
  className,
  currentPage,
  totalItems,
  itemsPerPage,
  totalPickNumber,
  itemsPerPageHandler,
  prevHandler,
  nextHandler,
  pickHandler,
  ...rest
}) => {
  const totalPage = Math.ceil(totalItems / itemsPerPage);

  // generate page numbers with totalPickNumber and currentPage in the middle
  const pageNumbers = [];
  if (totalPage <= totalPickNumber) {
    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i);
    }
  } else {
    const halfTotalPickNumber = Math.ceil(totalPickNumber / 2);
    const startPageNumber =
      currentPage <= halfTotalPickNumber
        ? 1
        : currentPage + halfTotalPickNumber > totalPage
        ? totalPage - totalPickNumber + 1
        : currentPage - halfTotalPickNumber + 1;
    const endPageNumber =
      currentPage <= halfTotalPickNumber
        ? totalPickNumber
        : currentPage + halfTotalPickNumber > totalPage
        ? totalPage
        : currentPage + halfTotalPickNumber - 1;

    for (let i = startPageNumber; i <= endPageNumber; i++) {
      pageNumbers.push(i);
    }
  }

  const handlePick = (value) => {
    if (value > totalPage || value < 1) pickHandler(1);
    if (value === currentPage) return;
    pickHandler(value);
  };

  const handlePrev = () => {
    if (currentPage === 1) return;
    if (totalItems === 0) return;
    prevHandler();
  };

  const handleNext = () => {
    if (currentPage === totalPage) return;
    if (totalItems === 0) return;
    nextHandler();
  };

  const changeItemsPerPageHandler = (e) => {
    itemsPerPageHandler(parseInt(e.target.value));
  };

  return (
    <div
      className={clsx(
        "flex flex-wrap flex-col sm:flex-row gap-y-4 items-center sm:justify-between mb-3",
        className
      )}
      {...rest}
    >
      <div className="flex gap-2 items-center">
        Show
        <select
          onChange={changeItemsPerPageHandler}
          className="px-3 py-1 text-sm border font-semibold border-white rounded-lg transition-colors duration-200"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        entries
      </div>
      <div className="flex gap-1">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={clsx(
            "px-3 py-1 text-sm border font-semibold rounded-lg transition-colors duration-200",
            currentPage === 1 || totalItems === 0
              ? "text-white/50 hover:text-white/50 border-white/50 cursor-not-allowed"
              : "text-white border-white hover:bg-white hover:text-dark"
          )}
        >
          Prev
        </button>
        <div className="flex gap-1">
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePick(pageNumber)}
              className={clsx(
                "px-3 py-1 text-sm border font-semibold border-white rounded-lg hover:bg-white hover:text-dark transition-colors duration-200",
                currentPage === pageNumber && "bg-white text-dark"
              )}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPage}
          className={clsx(
            "px-3 py-1 text-sm border font-semibold rounded-lg transition-colors duration-200",
            currentPage === totalPage || totalItems === 0
              ? "text-white/50 hover:text-white/50 border-white/50 cursor-not-allowed"
              : "text-white border-white hover:bg-white hover:text-dark"
          )}
        >
          Next
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  currentPage: PropTypes.number,
  totalItems: PropTypes.number,
  totalPickNumber: PropTypes.number,
  itemsPerPage: PropTypes.number,
  itemsPerPageHandler: PropTypes.func,
  prevHandler: PropTypes.func,
  nextHandler: PropTypes.func,
  pickHandler: PropTypes.func,
};

export default Pagination;
