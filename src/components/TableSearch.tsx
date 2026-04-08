import { CiSearch } from "react-icons/ci";

const TableSearch = () => {
  return (
    <div className="w-full md:w-55 flex items-center gap-2 text-sm rounded-full border border-gray-300 px-3 py-1.5">
      <CiSearch className="text-gray-500" />

      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-transparent outline-none placeholder:text-gray-400"
      />
    </div>
  );
};

export default TableSearch;
