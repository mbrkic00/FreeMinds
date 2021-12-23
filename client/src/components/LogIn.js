// ===== Style modules =====
import {
  StyledLogIn
} from "../styles/LogIn.styled";
// ===== Component modules =====

// ===== Main export =====
function LogIn() {
  return (
    <StyledLogIn>
      <text>Prijavite se</text>
      <input/>
      <input/>
      <div>
        <span>Nemate račun?</span>
        <span>Zaboravili ste podatak?</span>
      </div>
    </StyledLogIn>
 );
}

export default LogIn;
