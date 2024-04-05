import { useSelector } from "react-redux";
import ItemList from "./ItemList";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      This is cart
      {cartItems.length === 0 ? (
        <h1>Add Items to Cart</h1>
      ) : (
        <ItemList items={cartItems} />
      )}
    </div>
  );
};

export default Cart;
