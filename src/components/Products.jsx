import { useState, useEffect } from "react";
import Product from "../components/Product";
import Loading from "./Loading.jsx";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../redux/slices/apiSlice/productsApiSlice.js";

//
//
const Products = () => {
  const { data: allProducts, error, isLoading } = useGetProductsQuery();
  const searchValue = useSelector((state) => state.searchValue.value);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [productsPerPage] = useState(10); // Number of products to load per scroll
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false); // Tracks if new products are being fetched

  // When data is fetched, initialize with the first page of products
  useEffect(() => {
    if (allProducts) {
      filterProducts(allProducts);
    }
  }, [allProducts, searchValue, currentPage]);

  // Function to filter products based on the search term
  const filterProducts = (products) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setVisibleProducts(filtered.slice(0, currentPage * productsPerPage));
  };

  // Function to handle infinite scroll
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.offsetHeight &&
      !isFetching // Check if products are not already being fetched
    ) {
      loadMoreProducts();
    }
  };

  // Simulate loading more products with a delay
  const loadMoreProducts = () => {
    if (allProducts && visibleProducts.length < allProducts.length) {
      setIsFetching(true); // Start loading

      setTimeout(() => {
        setCurrentPage((prevPage) => prevPage + 1);
        setIsFetching(false); // Stop loading
      }, 1000); // Simulate a 1 second delay for loading
    }
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleProducts, allProducts]);
  //
  return (
    <section>
      <h2 className="font-medium text-2xl text-dark font-primary my-5">
        Collections
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visibleProducts.map((product, i) => {
          return <Product key={i} data={product} />;
        })}
      </div>
      {isFetching && (
        <p className="font-medium font-primary text-secondary text-center text-lg">
          Loading more products...
        </p>
      )}
      {/* Show loading text while fetching */}
      {isLoading && <Loading />}
      {/* Show loading text while fetching initially */}
      {error && (
        <p className="font-primary text-third font-medium">
          Error loading products.
        </p>
      )}
    </section>
  );
};

export default Products;
