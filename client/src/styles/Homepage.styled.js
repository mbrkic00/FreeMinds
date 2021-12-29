import styled from "styled-components";

export const StyledHomepage = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: calc(100vh * 0.1);
`
export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: #ffffff8a;
  margin-top: calc(100vh * 0.06);
  margin-left: calc(100vw * 0.1);
  margin-right: calc(100vw * 0.1);
  padding-left: calc(100vw * 0.02);
  padding-right: calc(100vw * 0.02);

  h1 {
    margin-top: calc(100vh * 0.011);
    font-size: calc(100vw * 0.035);
    margin-bottom: 0;
    padding-bottom: 0;
    margin-top: calc(100vh * 0.035);
    padding-top: 0;
  }

  p {
    font-size: calc(100vw * 0.016);
    text-align: justify;
  }
`
