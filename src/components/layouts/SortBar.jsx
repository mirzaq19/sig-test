import PropTypes from "prop-types";

const SortBar = ({ className, sort, sortHandler, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="w-full sm:w-fit flex flex-col sm:flex-row gap-2">
        <span>Sort:</span>
        <select
          name="sort"
          value={sort}
          onChange={sortHandler}
          className="w-full sm:w-fit px-3 py-1 text-sm border font-semibold border-white rounded-lg transition-colors duration-200"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

SortBar.propTypes = {
  className: PropTypes.string,
  sort: PropTypes.string.isRequired,
  sortHandler: PropTypes.func.isRequired,
};

export default SortBar;
