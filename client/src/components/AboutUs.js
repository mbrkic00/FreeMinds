// ===== Style modules =====
import { StyledAboutUs } from "../styles/AboutUs.styled";
import img from "../images/aboutus2.png"

// ===== Main export =====
function AboutUs() {

   return (
    <StyledAboutUs>
        <img src={img} alt="img001" /> 
        <h3>U FreeMinds-u uvijek iznova vidimo kako naizgled jednostavan čin stvaranja može biti sila za rast, promjenu i otkriće u životima ljudi. Želimo nadahnuti i umnožiti vrstu kreativnog istraživanja koje potiče izražavanje, učenje i primjenu naučenog.</h3>
        <h3>FreeMinds je online zajednica za učenje s tisućama predavanja za kreativne i znatiželjne ljude, s raznim temama uključujući programiranje, ilustraciju, dizajn, fotografiju, video, freelancing i još mnogo toga. Na FreeMinds-u se milijuni članova okupljaju kako bi pronašli inspiraciju i napravili sljedeći korak na svom kreativnom putu.</h3>
        
        
    </StyledAboutUs>
   );
}

export default AboutUs;