import { FiSearch } from "react-icons/fi";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="mt-6 flex justify-center px-4">
      <div className="relative w-full max-w-2xl">
        {/* Search Icon */}
        <FiSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        {/* Input */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search for products"
          className="
            w-full pl-12 pr-4 py-3 rounded-lg bg-gray-100 text-sm text-gray-700
            placeholder-gray-400
            shadow-sm
            focus:outline-none
            focus:bg-white
            focus:ring-2
            focus:ring-green-500/30
            transition
          "
        />
      </div>
    </div>
  );
};

export default SearchBar;
