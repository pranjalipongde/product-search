import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const PriceRangeFilter = ({ value, onChange }) => {
  const [min, max] = value;
  const [open, setOpen] = useState(false);
  const [tempMin, setTempMin] = useState(min);
  const [tempMax, setTempMax] = useState(max);

  const applyFilter = () => {
    onChange([tempMin || 0, tempMax || 2000]);
    setOpen(false);
  };

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
          hover:bg-gray-200
          transition
        "
      >
        Price
        <FiChevronDown size={16} />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute right-0 mt-2 w-56
            bg-white rounded-lg shadow-lg
            p-4 z-50
          "
        >
          <p className="text-sm font-medium mb-3">Price range</p>

          <div className="flex gap-2 mb-4">
            <input
              type="number"
              placeholder="Min"
              value={tempMin}
              onChange={(e) => setTempMin(Number(e.target.value))}
              className="
                w-full px-2 py-1.5
                border rounded
                text-sm
                focus:outline-none focus:ring-1 focus:ring-green-500
              "
            />

            <input
              type="number"
              placeholder="Max"
              value={tempMax}
              onChange={(e) => setTempMax(Number(e.target.value))}
              className="
                w-full px-2 py-1.5
                border rounded
                text-sm
                focus:outline-none focus:ring-1 focus:ring-green-500
              "
            />
          </div>

          <button
            onClick={applyFilter}
            className="
              w-full bg-green-600 text-white
              py-2 rounded text-sm
              hover:bg-green-700 transition
            "
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default PriceRangeFilter;
