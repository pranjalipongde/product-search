import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const SORT_OPTIONS = [
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Newest First", value: "newest" },
];

const SortDropdown = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);

  const selected = SORT_OPTIONS.find((o) => o.value === value);

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
        {selected?.label || "Sort"}
        <FiChevronDown size={16} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg p-2 z-50 origin-top-right animate-dropdown">
          {SORT_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
