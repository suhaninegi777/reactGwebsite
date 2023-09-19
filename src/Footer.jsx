import React from "react";
const Footer= () =>{
    let year = new Date().getFullYear();
return(<>
<footer>
    <p>copyright  © {year}</p>
</footer>
</>);
}
export default Footer;