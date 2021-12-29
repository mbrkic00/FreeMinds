// ===== Style modules =====
import { StyledNavbar } from "../styles/Navbar.styled";
// ===== Router =====
import { Link } from "react-router-dom"

// ===== Main export =====
function Navbar() {
  return (
    <StyledNavbar>
      <Link style={{ textDecoration: 'none' }} to="/">
        <logo>FreeMinds</logo>
      </Link>
      <input/>
      <div>
        <Link style={{ textDecoration: 'none' }} to="/">
          <span>Naslovna</span>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/about_us">
          <span>O nama</span>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/profile">
          <span>Profil</span>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/log_in">
          <span>Prijava</span>
        </Link>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
