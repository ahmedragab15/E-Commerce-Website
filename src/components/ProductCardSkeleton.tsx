const ProductCardSkeleton = () => {
  return (
    <div className="product-card w-2xs p-4 pb-2 rounded-lg bg-gray-200 animate-pulse">
      <div className="h-40 bg-gray-300 rounded-lg mb-4"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
      <div className="flex justify-between">
        <div className="h-5 bg-gray-300 rounded w-1/4"></div>
        <div className="h-5 bg-gray-300 rounded w-10"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
