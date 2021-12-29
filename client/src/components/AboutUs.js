// ===== Style modules =====
import { StyledAboutUs, Card, CardsParent } from "../styles/AboutUs.styled";

// ===== Main export =====
function AboutUs() {

   return (
    <StyledAboutUs>
        <img src="/images/aboutus.png" alt="img001" /> 
        <h3>U FreeMinds-u uvijek iznova vidimo kako naizgled jednostavan čin stvaranja može biti sila za rast, promjenu i otkriće u životima ljudi. Želimo nadahnuti i umnožiti vrstu kreativnog istraživanja koje potiče izražavanje, učenje i primjenu naučenog.</h3>
        <h3>FreeMinds je online zajednica za učenje s tisućama predavanja za kreativne i znatiželjne ljude, s raznim temama uključujući programiranje, ilustraciju, dizajn, fotografiju, video, freelancing i još mnogo toga. Na FreeMinds-u se milijuni članova okupljaju kako bi pronašli inspiraciju i napravili sljedeći korak na svom kreativnom putu.</h3>

        <CardsParent>
            <h2>U FreeMinds-u osnažujemo:</h2>
            <div style={{ display: 'flex', flexFlow: 'row' }}>
                <Card>
                <img src="/images/icon1.svg"/>
                    {/* <i class="fas fa-user-friends"></i> */}
                    <h3>Studente da:</h3>
                    <ul>
                        <li>se inspiriraju</li>
                        <li>nauče nove vještine</li>
                        <li>istražuju</li>
                    </ul>
                </Card>
                <Card>
                    <img src="/images/icon2.svg"/>
                    <h3>Predavače da:</h3>
                    <ul>
                        <li>dijele znanje i iskustvo</li>
                        <li>zarade novac</li>
                        <li>napreduju</li>
                    </ul>
                </Card>
            </div>
        </CardsParent> 
    </StyledAboutUs>
   );
}

export default AboutUs;