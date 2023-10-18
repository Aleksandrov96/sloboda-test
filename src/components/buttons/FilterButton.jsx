import PropTypes from "prop-types";

function FilterButton({ name }) {
  return (
    <button
      className="inline-flex items-center max-[425px]:justify-center max-[425px]:mt-1 max-[425px]:w-full text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5"
      type="button"
    >
      <span className="sr-only">Sort by {name.toLowerCase()} button</span>
      {name}
      <svg
        className="w-2.5 h-2.5 ml-2.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
  );
}

FilterButton.propTypes = {
  name: PropTypes.string,
};

export default FilterButton;
