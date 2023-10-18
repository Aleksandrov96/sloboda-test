import PropTypes from "prop-types";

function Rows({ listings }) {
  return (
    <>
      {listings.map(({ name, location }) => (
        <tr className="bg-white border-b" key={name}>
          <td className="w-4 p-4">
            <div className="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
              />
              <label htmlFor="checkbox-table-search-1" className="sr-only">
                checkbox
              </label>
            </div>
          </td>
          <th
            scope="row"
            className="px-6 py-4 text-gray-900 whitespace-nowrap font-bold flex items-center"
          >
            <div className="w-14 h-10 mr-1 bg-blue-50" />
            {name}
          </th>
          <td className="px-6 py-4 text-gray-900 font-bold">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 mr-2 text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M15 18h-2v-3.333a2 2 0 0 0-.4-1.2L10.45 10.6a1 1 0 0 1 0-1.2l2.15-2.867a2 2 0 0 0 .4-1.2V2h2a1 1 0 1 0 0-2H1a1 1 0 0 0 0 2h2v3.333a2 2 0 0 0 .4 1.2L5.55 9.4a1 1 0 0 1 0 1.2L3.4 13.467a2 2 0 0 0-.4 1.2V18H1a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z" />
              </svg>
              In progress
            </div>
          </td>
          <td className="px-6 py-4">
            <div className="border border-gray-900 rounded-lg text-center px-0 py-2 text-gray-900 font-bold">
              Finish
            </div>
          </td>
          <td className="px-6 py-4">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 mr-2 text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              On
            </div>
          </td>
          <td className="px-6 py-4 font-bold">1</td>
          <td className="px-6 py-4 font-bold">1</td>
          <td className="px-6 py-4 font-bold">1</td>
          <td className="px-6 py-4 font-bold">{location}</td>
        </tr>
      ))}
    </>
  );
}

Rows.propTypes = {
  listings: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.string,
    })
  ),
};

export default Rows;
