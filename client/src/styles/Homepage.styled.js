import styled from "styled-components";

export const StyledHomepage = styled.div`
  background-color: ${({ theme }) => theme.colors.tan};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: calc(100vh * 0.1);

  h1 {
    font-size: calc(100vw * 0.035);
    margin-bottom: 0;
    padding-bottom: 0;
    margin-top: calc(100vh * 0.035);
    padding-top: 0;
  }

  p {
    border-bottom: 1px solid gray;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: justify;
    margin-top: calc(100vh * 0.08);
    margin-left: calc(100vw * 0.1);
    margin-right: calc(100vw * 0.1);
    font-size: calc(100vw * 0.018);
  }
`
