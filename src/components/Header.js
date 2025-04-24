import { CART_URL } from "../utils/constants";
import { useContext, useState } from "react";
import headerImg from "../../asset/svgviewer-png-output.png";
import { NavLink } from "react-router"; 
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Log In");

    const {loggedInUser} = useContext(userContext);

    //subscribing to the store using selector
    // const cartItems = useSelector((store) => store.cart.items || []);
    // console.log(cartItems);
    const cartState = useSelector((store) => store.cart);
    console.log("Cart State:", cartState);

    const cartItems = cartState ? cartState.items : [];
    console.log("Cart Items:", cartItems);
   
    return (
        <div className="flex justify-between items-center w-[80vw] mx-auto my-5 p-5 rounded-lg shadow-lg bg-[#c6a8ed]">
            
            {/* Logo Section */}
            <div className="flex items-center">
                <img className="w-[180px] h-auto object-contain" src={headerImg} alt="Logo" />
            </div>

            {/* Navigation Links */}
            <nav className="flex gap-12 text-[25px] font-medium">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        isActive ? "font-bold underline text-[#492e6b]" : "hover:text-[#492e6b] transition"
                    }
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => 
                        isActive ? "font-bold underline text-[#492e6b]" : "hover:text-[#492e6b] transition"
                    }
                >
                    About
                </NavLink>      
                <NavLink 
                    to="/contact" 
                    className={({ isActive }) => 
                        isActive ? "font-bold underline text-[#492e6b]" : "hover:text-[#492e6b] transition"
                    }
                >
                    Contact Us
                </NavLink>
            </nav>

            {/* Cart Section with Link */}
            <NavLink to="/cart" className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#b291da] transition">
                <div className="w-10 h-10">
                    <img className="w-full h-full object-contain" src={CART_URL} alt="Cart" />
                </div>
                <div data-testid="cart-items" className="text-lg font-semibold">{cartItems.length} items</div>
            </NavLink>

            {/* Login Section */}
            <div className="flex items-center gap-4">
                {/* Login Button */}
                <button className="px-6 py-3 text-white border border-[#492e6b] rounded-lg shadow-md bg-[#492e6b] hover:bg-[#3a2458] transition"
                    onClick={() => setbtnNameReact(btnNameReact === "Log In" ? "Log Out" : "Log In")}>
                    {btnNameReact}
                </button>

                {/* Username */}
                <div className="text-md font-semibold text-gray-800">{loggedInUser}</div>
            </div>
        </div>
    );
};
    

export default Header;