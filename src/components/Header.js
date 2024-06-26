import { LOGO_URL } from "../utils/constants";
const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img src= {LOGO_URL}/>
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Sign Up</li>
                <li>Sign in</li>
            </ul>
            </div>
        </div>
    )
};
 
export default Header;