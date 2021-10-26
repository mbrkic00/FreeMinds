// ===== Style modules =====
import { StyledNavbar } from "../styles/Navbar.styled";
// ===== Router =====
import { Link } from "react-router-dom"

// ===== Main export =====
function Navbar() {
   return (
      <StyledNavbar>
         <logo>FreeMinds</logo>
         <input></input>
         <div>
            <Link style={{ textDecoration: 'none' }} to="/">
               <span>Naslovna</span>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/about_us">
               <span>O nama</span>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/profile">
               <span>Naslovna</span>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/login">
               <span>Naslovna</span>
            </Link>
         </div>
      </StyledNavbar>
   );
}

export default Navbar;