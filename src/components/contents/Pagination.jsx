import PropTypes from "prop-types";

const Pagination = () => {
  return (
    <div className="flex flex-wrap flex-col sm:flex-row gap-y-4 items-center sm:justify-between mb-3 ">
      <div className="flex gap-2 items-center">
        Show
        <select className="px-3 py-1 text-sm border font-semibold border-white rounded-lg transition-colors duration-200">
          <option>10</option>
          <option>20</option>
          <option>30</option>
        </select>
        entries
      </div>
      <div className="flex gap-1">
        <button className="px-3 py-1 text-sm border font-semibold border-white rounded-lg hover:bg-white hover:text-dark transition-colors duration-200">
          Prev
        </button>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <button
              key={i}
              className="px-3 py-1 text-sm border font-semibold border-white rounded-lg hover:bg-white hover:text-dark transition-colors duration-200"
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button className="px-3 py-1 text-sm border font-semibold border-white rounded-lg hover:bg-white hover:text-dark transition-colors duration-200">
          Next
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {};

export default Pagination;
