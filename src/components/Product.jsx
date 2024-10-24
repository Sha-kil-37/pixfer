import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextShort from "../utils/TextShort";
import { toast } from "react-toastify";
import { setProductCartList } from "../redux/slices/productCartSlice/productCartListSlice";

const Product = (props) => {
  //
  const dispatch = useDispatch();
  const { id, title, price, description, category, image, rating } = props.data;
  const [cartList, setCartList] = useState([]);
  const productCartList = useSelector(
    (state) => state.productCartList.productCartList
  );
  //

  //handle addToCart
  const addToCart = (product) => {
    const findExistCartProduct = productCartList.find(
      (item) => item.id === product.id
    );
    if (findExistCartProduct !== undefined) {
      return toast.error("Product Already Exist");
    } else {
      dispatch(setProductCartList(product));
      return toast.success("Added Product Successfully");
    }
  };

  //
  return (
    <section>
      <div className="px-[40px] py-[40px] bg-white w-full transition duration-200 hover:shadow-md rounded-md">
        <figure>
          <img
            className="h-full w-full object-contain max-h-[200px]"
            src={image}
            alt="product"
          />
        </figure>
        <div>
          <h2 className="font-primary text-dark font-medium text-xl mb-3 mt-5">
            {title}
          </h2>
          <TextShort data={[description, 40]} />
          <h2 className="font-medium font-primary text-lg text-dark">
            {category}
          </h2>
          <div className="flex justify-between mt-5">
            <p className="font-medium font-primary text-lg text-dark">
              $:{price}
            </p>
            <button
              onClick={() => addToCart(props.data)}
              className="px-2 z-10 py-1 bg-secondary rounded-sm text-white relative font-medium after:-z-10 after:absolute after:h-1 after:w-1 after:bg-primary after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-sm after:hover:scale-[30] after:hover:transition-all after:hover:duration-100 after:transition-all after:duration-100 transition-all duration-100 hover:[text-shadow:1px_1px_1px_#27496D] text-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
