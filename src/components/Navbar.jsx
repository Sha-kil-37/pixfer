import { LuUser2 } from "react-icons/lu";
import { GrCart } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { Link } from "react-router-dom";
import CartListModal from "./CartListModal";
import { setSearchValue } from "../redux/slices/searchValueSlice/searchValueSlice";

//
const Navbar = () => {
  // handle cartlist modal
  const [isModalOpen, setModalOpen] = useState(false);
  // productCartList from redux
  const productCartList = useSelector(
    (state) => state.productCartList.productCartList
  );
  // handle modal toggle
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  //
  const dispatch = useDispatch();
  // handleSearchValue
  const handleSearchValue = (e) => {
    dispatch(setSearchValue(e.target.value)); // Dispatch the action on input change
  };
  //

  //
  return (
    <>
      <nav className="bg-primary sticky top-0 z-20 py-5 hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
        <div className="container">
          <div className="flex justify-between items-center gap-5 flex-wrap md:flex-nowrap">
            <div className="flex-grow basis-0">
              <Link
                to="/"
                className="font-bold text-3xl text-white font-primary"
              >
                PIXFER
              </Link>
            </div>
            <div className="basis-1/2">
              <input
                placeholder="Search for products.."
                onChange={(e) => handleSearchValue(e)}
                className="w-full py-2 px-3 outline-none font-medium rounded-sm text-dark font-primary"
                type="search"
              />
            </div>
            <div className="flex-grow basis-0 flex items-center justify-center gap-x-3">
              <div className="h-10 w-10 rounded-full border-2 border-white flex justify-center items-center">
                <LuUser2 className="text-2xl cursor-pointer text-dark transition duration-200 hover:text-white" />
              </div>
              <div className="h-10 w-10 rounded-full border-2 border-white flex justify-center items-center relative">
                <GrCart
                  onClick={() => toggleModal()}
                  className="text-2xl cursor-pointer text-dark transition duration-200 hover:text-white"
                />
                {productCartList.length > 0 && (
                  <div className="absolute top-[-49%] right-[-25%] bg-third flex justify-center items-center z-20 h-auto w-auto rounded-full px-1 py-1">
                    <span className="text-white font-medium">
                      {productCartList.length}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <CartListModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        cartItems={productCartList}
      />
    </>
  );
};

export default Navbar;
