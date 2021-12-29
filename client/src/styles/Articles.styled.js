import styled from "styled-components";

export const StyledArticles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: calc(100vw * 0.015);
  grid-row-gap: calc(100vw * 0.015);
  align-items: end;
  margin-top: calc(100vh * 0.04);
  margin-left: calc(100vw * 0.1);
  margin-right: calc(100vw * 0.1);
`
export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: #ffffff8a;
  min-height: calc(100vh * 0.3);
  transition-duration: 400ms;
  transition-timing-function: ease-in-out;

  section {
    margin-bottom: 5px;
  }

  span {
    font-size: calc(100vw * 0.01);
    margin-right: calc(100vw * 0.05);
  }

  time {
    font-size: calc(100vw * 0.01);
    margin-left: calc(100vw * 0.05);
  }

  &:hover {
    cursor: pointer;
    background: white;
  }
`
export const StyledDescription = styled.p`
  margin: 0px 0px 0px 0px !important;
  padding-left: calc(100vw * 0.04);
  padding-right: calc(100vw * 0.04);
  border: none !important;
  font-size: calc(100vw * 0.01) !important;
`
export const StyledTitle = styled.h3`
  font-size: calc(100vw * 0.015) !important;
  margin-bottom: 0px;
`
