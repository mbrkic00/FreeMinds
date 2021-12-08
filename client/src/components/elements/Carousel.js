// ===== Syle modules =====
import {
  StyledCarousel,
  StyledCarouselMainImage,
  StyledCarouselImagePreview
} from "../../styles/Carousel.styled";

// ===== Component modules =====
import { useState } from 'react';
import { ArrowKeyRight, ArrowKeyLeft } from "./ArrowKeys.js";

// ===== Exports =====
export const Carousel = () => {
  const [count, setCount] = useState(0);
  const [images, setImages] = useState([
    {
      image: "/images/carousel/learningWith.jpeg",
      alt: "image_1"
    },
    {
      image: "/images/carousel/registration.png",
      alt: "image_2"
    },
    {
      image: "/images/carousel/studyNotebook.jpeg",
      alt: "image_3"
    }
  ]);

  const onArrowClickRight = () => {
    if(count === (images.length) - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  const onArrowClickLeft = () => {
    if(count === 0) {
      setCount(images.length - 1);
    } else {
      setCount(count - 1);
    }
  }

   return (
     <StyledCarousel>
       <StyledCarouselMainImage>
         <ArrowKeyLeft onClick={onArrowClickLeft} />
         <img src={images[count].image} alt={images[count].alt} />
         <ArrowKeyRight onClick={onArrowClickRight} />
       </StyledCarouselMainImage>
       <StyledCarouselImagePreview>
        {
          images.map(({image, alt}) => (
            <img key={alt} src={image} alt={alt} />
          ))
        }
       </StyledCarouselImagePreview>
     </StyledCarousel>
   );
}
