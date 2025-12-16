import { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "../services/api";
import { useDebounce } from "../hooks/useDebounce";

import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import PriceRangeFilter from "../components/PriceRangeFilter";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import QuickViewModal from "../components/QuickViewModal";
import CategoryDropdown from "../components/CategoryDropDown";

const LIMIT = 20;
const TOTAL_PRODUCTS_ESTIMATE = 200;

function filterByCategory(products, categoryId) {
  if (!categoryId) return products;
  return products.filter((p) => p.category?.id === Number(categoryId));
}

function filterByPrice(products, [min, max]) {
  return products.filter((p) => p.price >= min && p.price <= max);
}

function getSortedProducts(products, sortOption) {
  const arr = [...products];
  if (sortOption === "price_asc") return arr.sort((a, b) => a.price - b.price);
  if (sortOption === "price_desc") return arr.sort((a, b) => b.price - a.price);
  if (sortOption === "newest") return arr.sort((a, b) => b.id - a.id);
  return products;
}

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedSearch = useDebounce(searchQuery, 500);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, selectedCategory, priceRange]);

  useEffect(() => {
    async function load() {
      try {
        setIsLoading(true);
        const offset = (currentPage - 1) * LIMIT;
        const data = await fetchProducts({
          title: debouncedSearch,
          offset,
          limit: LIMIT,
        });
        setProducts(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [debouncedSearch, currentPage]);

  const filtered = filterByPrice(
    filterByCategory(products, selectedCategory),
    priceRange
  );

  const sortedProducts = getSortedProducts(filtered, sortOption);
  const totalPages = Math.ceil(TOTAL_PRODUCTS_ESTIMATE / LIMIT);

  return (
    <div className="min-h-screen bg-gray-50">
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      <div className="max-w-6xl mx-auto px-4 mt-4 flex flex-wrap gap-3 justify-end">
        <CategoryDropdown
          value={selectedCategory}
          onChange={setSelectedCategory}
          categories={categories}
        />
        <SortDropdown value={sortOption} onChange={setSortOption} />
        <PriceRangeFilter value={priceRange} onChange={setPriceRange} />
      </div>

      <main className="max-w-6xl mx-auto px-4 mt-6">
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!isLoading && !error && (
          <ProductGrid
            products={sortedProducts}
            onQuickView={setSelectedProduct}
          />
        )}
      </main>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {selectedProduct && (
        <QuickViewModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductsPage;
