// ===== Style modules =====
import { StyledHomepage } from "../styles/Homepage.styled";

// ===== Component modules =====
import { Carousel } from "./elements/Carousel.js"

// ===== Main export =====
function Homepage() {

   return (
      <StyledHomepage>
        <h1> Dobrodošli na FreeMinds </h1>
        <p>
          FreeMinds je online platforma za učenje namjenjena
          specifično za Balkansko područije, materijal je pretežno
          na hrvatskom jeziku te je namjenjen za sve dobne skupine.
          Materijal se sastoji trenutno od materijala za
          Računalnim znanostima, konceptima te jezicima.
          Osnovni materijali su besplatni. Napredni materijali
          su iza platnog izda.
        </p>
        <Carousel />
      </StyledHomepage>
   );
}

export default Homepage;
