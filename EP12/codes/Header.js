import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);

  const cart = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-gray-100">
      <div className="w-20 p-1 m-1">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="flex">
        <ul className="flex">
          <li className="px-3">
            <Link to="/">Home </Link>
            {onlineStatus ? "On" : "Off"}
          </li>
          <li className="px-3">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="px-3">
            <Link to="/cart">Cart ({cart.length} items)</Link>
          </li>
          <li className="px-3">
            <button
              onClick={() => {
                setBtnName(btnName === "Login" ? "Logout" : "Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li>{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
