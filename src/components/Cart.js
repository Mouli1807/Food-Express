import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../RTStore/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {

  const dispatch = useDispatch();  

  const handleClearCart = () =>{
    dispatch(clearCart());
  }  

  //here subscribing to a portion of the store for efficiency , not the whole store
  const cartItems = useSelector((store) => store.cart.items);  

  

  return (
    
        <div className="w-[60vw] h-[100vh] bg-gray-100  shadow-lg my-5 mx-auto p-6 rounded-lg">
          {/* Cart Header */}
          <div className="flex justify-between items-center border-b-2 pb-4 mb-4">
            <h1 className="text-3xl font-bold text-gray-800">🛒 Your Cart</h1>
            <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 transition"
            onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        
        <div>
            <ItemList items={cartItems} />
        </div>
    </div>
  )
}

export default Cart;