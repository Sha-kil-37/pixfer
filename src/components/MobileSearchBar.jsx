import { useDispatch } from "react-redux";
import { setSearchValue } from "../redux/slices/searchValueSlice/searchValueSlice";


const MobileSearchBar = () => {
  //
  const dispatch = useDispatch();
  // handleSearchValue
  const handleSearchValue = (e) => {
    dispatch(setSearchValue(e.target.value)); // Dispatch the action on input change
  };
  //
  return (
    <section className="py-3 bg-primary lg:hidden xl:hidden 2xl:hidden sticky w-full top-0 z-20 ">
      <div className="container">
        <div className="w-full">
          <input
            placeholder="Search products..."
            className="w-full py-1 px-3 rounded-sm outline-none font-medium text-dark font-primary"
            onChange={(e) => handleSearchValue(e)}
            type="search"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileSearchBar;
