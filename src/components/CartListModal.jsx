import { RxCross2 } from "react-icons/rx";
import { IoRemove } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
import TextShort from "../utils/TextShort";
import { useEffect, useState } from "react";
// import { persistor } from "../redux/store/store";
//
const CartListModal = ({ isOpen, onClose, cartItems }) => {
  const [cartItemQuantityArray, setCartItemQuantityArray] = useState([]);
  const [totalCartItemPrice, setTotalCartItemPrice] = useState(0);
  //
  // handle set cart data in browser local storage
  useEffect(() => {
    localStorage.setItem("Carts", JSON.stringify(cartItems));
  }, [cartItems]);
  //handleCartItemIncrement
  function handleCartItemIncrement(cart, index) {
    const updatedQuantities = [...cartItemQuantityArray];
    updatedQuantities[index] += 1;
    setCartItemQuantityArray(updatedQuantities);
  }

  // handleCartItemDecrement
  function handleCartItemDecrement(item, index) {
    const updatedQuantities = [...cartItemQuantityArray];
    if (updatedQuantities[index] > 1) {
      updatedQuantities[index] -= 1;
    }
    setCartItemQuantityArray(updatedQuantities);
    // persistor.purge()
  }

  //handle cartList quanrtity array
  useEffect(() => {
    const cartListArray = cartItems.map(() => 1);
    setCartItemQuantityArray(cartListArray);
  }, [cartItems]);
  // handle cartItem total price
  useEffect(() => {
    const totalPrice = cartItems
      .map((item) => item.price)
      .reduce((acc, price) => acc + price, 0);
    setTotalCartItemPrice(totalPrice);
  }, [cartItems]);
  //
  return (
    <div className={`side-modal ${isOpen ? "open" : ""}`}>
      <div className="py-5 px-5 bg-slate-50 flex items-center justify-between">
        <h2 className="font-medium font-primary text-dark text-lg">Your Cart</h2>
        <RxCross2 className="cursor-pointer text-2xl text-dark" onClick={onClose} />
      </div>
      <div className="py-5 px-5">
        {cartItems.length === 0 ? (
          <p className="text-dark font-primary font-medium text-lg">Your cart is empty</p>
        ) : (
          <div>
            <ul>
              {cartItems.map((item, i) => {
                return (
                  <li key={i} className="py-3 border-b border-gray-200">
                    <div className="flex justify-between gap-x-2">
                      <TextShort data={[item.title, 10]} />
                      <AiOutlineDelete className="text-xl text-dark" />
                    </div>

                    <div className="flex justify-between mt-2 gap-x-3">
                      <label className="flex items-center border-[2px] w-[120px] justify-between">
                        <button
                          onClick={() => handleCartItemIncrement(item, i)}
                          className="px-3 py-1 text-dark cursor-pointer transition duration-200 hover:bg-secondaryColor"
                        >
                          <GoPlus className="text-xl" />
                        </button>
                        {cartItemQuantityArray.map((quantity, key) => {
                          if (i === key) {
                            return (
                              <span
                                key={key}
                                className="flex justify-center items-center text-dark font-primary font-medium"
                              >
                                {quantity}
                              </span>
                            );
                          }
                        })}

                        <button
                          onClick={() => handleCartItemDecrement(item, i)}
                          className="px-3 py-1 text-dark cursor-pointer transition duration-200 hover:bg-secondaryColor"
                        >
                          <IoRemove className="text-xl" />
                        </button>
                      </label>
                      <p className="font-primary font-medium text-dark">$:{item.price}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="flex my-2 justify-between">
              <h5 className="font-primary text-dark  font-medium">Total Products</h5>
              <h5 className="font-primary text-dark">{cartItems.length}</h5>
            </div>
            <div className="flex justify-between">
              <p className="font-primary text-dark font-medium text-lg">Total Price</p>
              <p className="text-dark font-primary font-medium">${totalCartItemPrice}</p>
            </div>
            <div className="my-2">
            <button
              // onClick={() => }
              className="w-full px-2 z-10 py-1 bg-secondary rounded-sm text-white relative font-medium after:-z-10 after:absolute after:h-1 after:w-1 after:bg-primary after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-sm after:hover:scale-[30] after:hover:transition-all after:hover:duration-100 after:transition-all after:duration-100 transition-all duration-100 hover:[text-shadow:1px_1px_1px_#27496D] text-lg"
            >
              View Cart
            </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartListModal;
