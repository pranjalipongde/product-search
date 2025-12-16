import { FiX } from "react-icons/fi";

const QuickViewModal = ({ product, onClose }) => {
  if (!product) return null;

  const { title, price, description, images, category, id } = product;

  return (
    // Overlay
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-end lg:items-center justify-center animate-overlay"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          bg-white w-full
          lg:max-w-3xl
          h-[90vh] lg:h-auto
          rounded-t-2xl lg:rounded-lg
          overflow-hidden
          flex flex-col animate-modal
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-base lg:text-lg font-semibold line-clamp-1">
            {title}
          </h2>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Image */}
            <div
              className="
                w-full
                h-48 sm:h-56 md:h-64 lg:h-auto
                bg-gray-100
                rounded
                overflow-hidden
              "
            >
              <img
                src={images?.[0]}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-3">
              <p className="text-sm text-gray-500">
                Category: {category?.name}
              </p>

              <div className="flex gap-3 items-center">
                <span className="text-2xl font-bold text-green-600">
                  ${price}
                </span>
                <span className="text-gray-400 line-through">
                  ${price + 50}
                </span>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {description}
              </p>

              <a
                href={`https://api.escuelajs.co/api/v1/products/${id}`}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-block mt-4
                  bg-green-600 text-white
                  px-5 py-2 rounded
                  hover:bg-green-700 transition
                "
              >
                View Full Deal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
