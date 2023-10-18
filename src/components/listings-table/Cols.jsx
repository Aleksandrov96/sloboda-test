import ConfigureButton from "../buttons/ConfigureButton";
import SortButton from "../buttons/SortButton";
import ChevronButton from "../buttons/ChevronButton";

function Cols() {
  return (
    <tr className="border-b border-b-gray-200">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 mr-3 text-gray-600 border-gray-300 rounded"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th scope="col" className="px-6 py-3">
        <div className="flex items-center">
          Listings
          <SortButton />
        </div>
      </th>
      <th scope="col" className="px-6 py-3">
        <div className="flex items-center">
          Status
          <SortButton />
        </div>
      </th>
      <th scope="col" className="px-6 py-3">
        To Do
      </th>
      <th scope="col" className="px-6 py-3">
        <div className="flex items-center">
          Instant Book
          <ChevronButton />
        </div>
      </th>
      <th scope="col" className="px-6 py-3">
        <div className="flex items-center">
          Bedrooms
          <SortButton />
        </div>
      </th>
      <th scope="col" className="px-6 py-3">
        <div className="flex items-center">
          Beds
          <SortButton />
        </div>
      </th>
      <th scope="col" className="px-6 py-3">
        <div className="flex items-center">
          Baths
          <SortButton />
        </div>
      </th>
      <th scope="col" className="px-6 py-3">
        <div className="flex items-center">
          Location
          <SortButton />
        </div>
      </th>
      <th scope="col" className="px-6 py-3">
        <ConfigureButton />
      </th>
    </tr>
  );
}

export default Cols;
