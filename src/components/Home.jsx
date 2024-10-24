// import Categorys from "./Categorys";
import { useEffect, useState } from "react";
import Categorys from "./Categorys";
import Products from "./Products";
//
const Home = () => {
  //
  const [showClickToTop, setShowClickToTop] = useState(false);
  //
  useEffect(() => {
    // Function to check the scroll position
    const handleScroll = () => {
      if (window.scrollY > 500) {
        // Change 300 to the number of pixels you want
        setShowClickToTop(true);
      } else {
        setShowClickToTop(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };
  //
  return (
    <section className="container relative">
      {showClickToTop ? (
        <button
          onClick={scrollToTop}
          className="fixed right-3 bottom-16 px-2 py-2 bg-secondary text-white font-primary z-30"
        >
          ↑ Top
        </button>
      ) : null}
      <div className="my-5">
        <h2 className="font-medium text-2xl text-dark font-primary">
          Top Categorys
        </h2>
      </div>
      <Categorys />
      <Products />
    </section>
  );
};

export default Home;
