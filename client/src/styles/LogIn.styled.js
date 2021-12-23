import styled from "styled-components";

export const StyledLogIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: calc(100vh * 0.35);
  width: calc(100vw * 0.25);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: #ffffff8a;
  padding-top: calc(100vh * 0.025);
  padding-bottom: calc(100vh * 0.015);
  padding-left: calc(100vw * 0.001);
  padding-right: calc(100vw * 0.001);

  text {
    margin-bottom: calc(100vh * 0.040);
    font-size: calc(100vh * 0.035);
  }

  input {
    width: calc(100vw * 0.15);
    margin: calc(100vw * 0.0055);
    padding: calc(100vw * 0.0035);
  }

  div {
    display: flex;
    flex-direction: column;
    width: calc(100vw * 0.25);
    align-items: center;
    padding-top: 10px;
  }

  span {
    padding-bottom: 10px;
    font-size: calc(100vh * 0.018);

    &:hover {
      cursor: pointer;
    }
  }
`
