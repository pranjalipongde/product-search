import ProductSkeleton from "./ProductsSkeleton";

const SkeletonGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  );
};

export default SkeletonGrid;
