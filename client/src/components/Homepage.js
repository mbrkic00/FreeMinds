// ===== Style modules =====
import {
  StyledHomepage,
  StyledDescription,
  StyledTitle
} from "../styles/Homepage.styled";

// ===== Component modules =====
import { Carousel } from "./elements/Carousel.js"
import { Articles } from "./elements/Articles.js"

// ===== Main export =====
function Homepage() {
  return (
    <StyledHomepage>
      <main>
        <StyledDescription>
          <h1>Dobrodošli na FreeMinds</h1>
          <p>
            FreeMinds je online platforma za učenje namjenjena
            specifično za područje Balkana, materijal je pretežno
            na hrvatskom jeziku te je namjenjen za sve dobne skupine.
            Materijal se sastoji trenutno od materijala za
            Računalnim znanostima, konceptima te jezicima.
            Osnovni materijali su besplatni. Napredni materijali
            su iza platnog izda.
          </p>
        </StyledDescription>
        <Carousel />
      </main>
      <Articles />
    </StyledHomepage>
 );
}

export default Homepage;
