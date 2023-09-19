import React from "react";
import logo from "./Images/logo.jpeg"
const Header= () =>{
return(<>
<div className="header" >
    <img src={logo} alt="logo" height="30px" width="40px" />
    <h2>Negi keep </h2>
</div>
</>);
}
export default Header;