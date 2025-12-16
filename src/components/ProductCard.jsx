const ProductCard = ({ product, onQuickView }) => {
  const { title, price, category, images, id } = product;

  return (
    <div
      onClick={() => onQuickView(product)}
      className="
         bg-white rounded-lg shadow-sm cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1
        
      "
    >
      {/* Image */}
      <div className="h-48 bg-gray-100 rounded-t-lg overflow-hidden">
        <img
          src={images?.[0]}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-medium line-clamp-2">{title}</h3>

        <div className="flex gap-2 items-center">
          <span className="text-lg font-bold text-green-600">${price}</span>
          <span className="text-sm text-gray-400 line-through">
            ${price + 50}
          </span>
        </div>

        <p className="text-xs text-gray-500">{category?.name}</p>

        <a
          href={`https://api.escuelajs.co/api/v1/products/${id}`}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="
            mt-2 block text-center
            bg-green-600 text-white
            py-2 rounded
            hover:bg-green-700 transition
          "
        >
          View Deal
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
