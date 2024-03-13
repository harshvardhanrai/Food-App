import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Title = () => (
  <a href="/" className="w-[6vw] h-[6vw] p-1">
    <img className='logo' src={LOGO_URL} />
  </a>
);


const Header = () => {

const [btnName, setBtnName] = useState("Login");

const onlineStatus = useOnlineStatus();

  return (
    <div className='header flex items-center justify-between w-full bg-zinc-300 my-2 mx-auto'>
      <Title />
      <div className='nav-items'>
        
        <ul className="flex items-center justify-between px-10 gap-6 font-semibold">
          <li>Status : {onlineStatus ? "Online 🟢" : "Offline 🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contacts">Contact</Link></li>
          <li>Cart</li>
          <button className="login-btn bg-green-500 px-6 py-1 rounded text-white" onClick={() => {
           btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");;
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
}

export default Header;