function Search() {
  return (
    <>
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <div className="relative max-[425px]:w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          id="table-search"
          type="text"
          className="block p-2 pl-10 mr-10 text-sm text-gray-900 rounded-full w-96 max-[425px]:w-full bg-gray-50 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
          placeholder="Search listings"
        />
      </div>
    </>
  );
}

export default Search;
