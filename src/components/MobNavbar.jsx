import { useEffect, useState } from "react";
import CartListModal from "./CartListModal";
import { useSelector } from "react-redux";
import { GrCart } from "react-icons/gr";
import { LuUser2 } from "react-icons/lu";

const MobNavbar = (props) => {
  //

  // productCartList from redux
  const productCartList = useSelector(
    (state) => state.productCartList.productCartList
  );
  const [showMobNav, setShowMobNav] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  // handle show mobNav
  useEffect(() => {
    // Function to check the scroll position
    const handleScroll = () => {
      if (window.scrollY > 500) {
        // Change 300 to the number of pixels you want
        setShowMobNav(true);
      } else {
        setShowMobNav(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // handle modal toggle
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  //
  return (
    <>
      {showMobNav && (
        <section
          ref={props.data}
          className="fixed py-3 bg-primary bottom-0 left-0 w-full z-20 sm:fixed md:fixed lg:hidden xl:hidden 2xl:hidden"
        >
          <div className="container flex justify-center">
            <div className="flex space-x-6 items-center">
              <a
                href="#"
                className="hover:text-gray-300 transition-none duration-100 text-white font-primary font-medium"
              >
                PIXFER
              </a>

              <div className="h-8 w-8 rounded-full border-[1px] border-white flex justify-center items-center relative">
                <a>
                  <GrCart onClick={()=>toggleModal()} className="text-xl cursor-pointer text-dark transition duration-200 hover:text-white" />
                </a>
                {productCartList.length > 0 && (
                  <div className="absolute top-[-30%] right-[-25%] bg-third flex justify-center items-center z-20 h-auto w-auto rounded-full px-1 py-1">
                    <span className="text-white font-medium">
                      {productCartList.length}
                    </span>
                  </div>
                )}
              </div>

              <div className="h-8 w-8 rounded-full border-[1px] border-white flex justify-center items-center">
                <a>
                  <LuUser2 className="text-xl cursor-pointer text-dark transition duration-200 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      <CartListModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        cartItems={productCartList}
      />
    </>
  );
};

export default MobNavbar;
//
//
