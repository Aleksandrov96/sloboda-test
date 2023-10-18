import FilterButton from "../buttons/FilterButton";
import Search from "../Search";
import Rows from "./Rows";
import Cols from "./Cols";

const listingsMock = [
  {
    name: "Hector Cave House",
    location: "Portland, OR",
  },
  {
    name: "Hector Cave House",
    location: "Frankfurt, Germany",
  },
  {
    name: "Hector Cave House",
    location: "Portland, OR",
  },
  {
    name: "Hector Cave House",
    location: "Portland, OR",
  },
  {
    name: "Hector Cave House",
    location: "Frankfurt, Germany",
  },
];

function Listings() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-4">
      <div className="flex items-center justify-between mt-10 ml-4 mr-4">
        <h5 className="text-xl font-bold">{listingsMock.length} listings</h5>
        <button
          type="button"
          className="inline-flex items-center w-36 justify-between text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-1.5"
        >
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
          Create listing
        </button>
      </div>
      <div className="flex items-center pb-4 bg-white flex-wrap m-4 max-[425px]:m-0 max-[425px]:mt-4">
        <Search />
        <div className="flex items-center justify-between lg:w-3/4 xl:w-2/5 md:w-full max-[425px]:w-full max-[425px]:flex-wrap">
          <FilterButton name="Rooms and beds" />
          <FilterButton name="Amenities" />
          <FilterButton name="Listing status" />
          <FilterButton name="More filters" />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-500 uppercase bg-white">
          <Cols />
        </thead>
        <tbody>
          <Rows listings={listingsMock}/>
        </tbody>
      </table>
    </div>
  );
}

export default Listings;
