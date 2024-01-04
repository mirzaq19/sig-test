import PropTypes from "prop-types";
import clsx from "clsx";
import { categoryType } from "@/utilities/categoryType";

const FilterBar = ({ className, filter, filterHandler, ...rest }) => {
  return (
    <div className={clsx("mb-6", className)} {...rest}>
      <h4 className="mb-3">Filter :</h4>
      <div className="flex flex-wrap justify-between gap-3">
        <div className="w-full sm:w-fit flex flex-col sm:flex-row gap-2">
          <span>Category: </span>
          <select
            value={filter.category}
            onChange={filterHandler}
            name="category"
            className="w-full sm:w-fit px-3 py-1 text-sm border font-semibold border-white rounded-lg transition-colors duration-200"
          >
            <option value="all">All</option>
            {Object.keys(categoryType).map((key) => (
              <option key={key} value={key}>
                {categoryType[key].title}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full sm:w-fit flex flex-col sm:flex-row gap-2">
          <span>Approval Status:</span>
          <select
            value={filter.approvalStatus}
            onChange={filterHandler}
            name="approvalStatus"
            className="w-full sm:w-fit px-3 py-1 text-sm border font-semibold border-white rounded-lg transition-colors duration-200"
          >
            <option value="all">All</option>
            <option value="0">Waiting Approval</option>
            <option value="1">Approved</option>
          </select>
        </div>
        <div className="w-full sm:w-fit flex flex-col sm:flex-row gap-2">
          <span>Attachment:</span>
          <select
            value={filter.attachment}
            onChange={filterHandler}
            name="attachment"
            className="w-full sm:w-fit px-3 py-1 text-sm border font-semibold border-white rounded-lg transition-colors duration-200"
          >
            <option value="all">All</option>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
        <div className="w-full sm:w-fit flex flex-col sm:flex-row gap-2">
          <span>Discount:</span>
          <select
            value={filter.discount}
            onChange={filterHandler}
            name="discount"
            className="w-full sm:w-fit px-3 py-1 text-sm border font-semibold border-white rounded-lg transition-colors duration-200"
          >
            <option value="all">All</option>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
      </div>
    </div>
  );
};

FilterBar.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.object.isRequired,
  filterHandler: PropTypes.func.isRequired,
};

export default FilterBar;
