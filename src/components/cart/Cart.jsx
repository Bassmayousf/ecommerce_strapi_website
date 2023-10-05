import { FaShoppingBasket } from "react-icons/fa";
import "./cart.css";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, resetCart } from "../redux/storeReducer";
const Cart = () => {
  const [cartlist, setCartlist] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const disPatch = useDispatch();
  console.log(products);
  const hundleCart = () => {
    !cartlist ? setCartlist(true) : setCartlist(false);
  };
  return (
    <div className="cart">
      <div className="cart-icon" onClick={hundleCart}>
        <FaShoppingBasket />
      </div>
      <div className="cart-badge">{products.length}</div>
      {cartlist ? (
        <ul className="cart-list">
          <h6>items in my cart</h6>
          {products.map((product) => (
            <li className="cart-item" key={product.id}>
              <img
                src={import.meta.env.VITE_APP_URL + product.image}
                alt=""
                className="cart-item-image"
              />
              <span className="cart-item-title">{product.title}</span>
              <span className="cart-item-price">{product.price}</span>
              <span
                className="cart-item-remove"
                onClick={() =>
                  disPatch(
                    removeFromCart({
                      id: product.id,
                    })
                  )
                }
              >
                <FaTrashAlt />
              </span>
            </li>
          ))}
          <span>
            <span style={{ color: "#01b6cb" }}>Total</span> :
            {products.reduce((total, product) => total + product.price, 0)}${" "}
          </span>
          <div style={{color:"red",marginTop:"10px",cursor:"pointer"}} onClick={() =>
                  disPatch(
                    resetCart()
                  )
                }>reset cart</div>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
