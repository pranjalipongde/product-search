import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const CategoryDropdown = ({ value, onChange, categories }) => {
  const [open, setOpen] = useState(false);

  const selectedCategory = categories.find(
    (c) => String(c.id) === String(value)
  );

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2
          bg-gray-100 px-4 py-2.5
          rounded-lg shadow-sm
          text-sm text-gray-700
          hover:bg-gray-200 transition
        "
      >
        {selectedCategory?.name || "Category"}
        <FiChevronDown size={16} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-lg p-2 z-50 origin-top-right animate-dropdown">
          <button
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
            className="w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100"
          >
            All Categories
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                onChange(cat.id);
                setOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100"
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
