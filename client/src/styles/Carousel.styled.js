import styled from "styled-components";

export const StyledCarousel = styled.div`
  margin-left: calc(100vw * 0.1);
  margin-right: calc(100vw * 0.1);
  margin-top: calc(100vh * 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledCarouselMainImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: calc(100vw * 0.8);
    height: calc(100vh * 0.6);
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
    &:hover {
      cursor:pointer;
      opacity: 0.8;
    }
  }

  svg {
    font-size: calc(100vw * 0.025);
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px 5px 5px 5px;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
    &:hover {
      cursor: pointer;
      color: white;
    }
  }
`

export const StyledCarouselImagePreview = styled.div`
  margin-top: calc(100vh * 0.04);

  img {
    width: calc(100vw * 0.15);
    height: calc(100vh * 0.15);
    border: 1px solid;
    margin-left: calc(100vw * 0.01);
    margin-right: calc(100vw * 0.01);
    transition: 150ms;
    transition-timing-function: ease-in-out;
    &:hover {
      cursor:pointer;
      opacity: 0.7;
    }
  }
`
