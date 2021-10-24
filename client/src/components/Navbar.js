// ===== Style modules =====
import { StyledNavbar } from "../styles/Navbar.styled";

// ===== Main export =====
function Navbar() {
   return (
      <StyledNavbar>
         <logo>FreeMinds</logo>
         <input></input>
         <div>
            <span>Naslovna</span>
            <span>O nama</span>
            <span>Profil</span>
            <span>Prijava</span>
         </div>
      </StyledNavbar>
   );
}

export default Navbar;