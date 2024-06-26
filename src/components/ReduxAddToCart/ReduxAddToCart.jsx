// import "./ReduxAddToCart.css";
import { useDispatch, useSelector } from "react-redux";
import { BsCartDash, BsCartPlus } from "react-icons/bs";

function ReduxAddToCart({ product }) {
    let prodQty = useSelector(state => state.cart[product.id]?.qty ?? 0);
    let dispatch = useDispatch();

    function increase() {
        dispatch({
            type: "ADD_TO_CART",
            payload: product
        });
    }

    function decrease() {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: product
        });
    }

    return (
        <div className="add-to-cart">
            {prodQty ? (
                <div className="product-controls">
                    <button onClick={decrease} className="control-button">
                        <BsCartDash />
                    </button>
                    <span>
                        {prodQty}
                    </span>

                    <button onClick={increase} className="control-button">
                        <BsCartPlus />
                    </button>
                </div>
            ) : (
                <div className="product-controls">
                    <button onClick={increase}>
                        <BsCartPlus />
                        Add to Cart
                    </button>
                </div>
            )}
        </div>
    );
}

export default ReduxAddToCart;