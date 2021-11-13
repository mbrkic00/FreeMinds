import styled from "styled-components";

export const StyledNavbar = styled.div`
   background-color: ${({ theme }) => theme.colors.tan};
   height: calc(100vh * 0.075);
   color: ${({ theme }) => theme.colors.blackBrown};
   display: flex;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-bottom: 1px solid gray;

   logo {
      border: solid 2px;
      border-radius: 10px 0px 10px 0px;
      padding: 4px;
      margin-left: 15px;
      font-size: calc(100vh * 0.035);
      background-color: rosybrown;
      cursor: pointer;
   }

   input {
      width: calc(100vw * 0.3);
      height: calc(100vh * 0.03);
      border: solid 1.5px;
      border-radius: 10px;
      outline: none;
      font-size: calc(100vh * 0.02);
      padding-left: 6px;
      padding-right: 6px;
   }

   span {
      margin-right: calc(100vw * 0.025);
      font-size: larger;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.blackBrown};

      &:hover {
         color: white;
         transition-duration: 400ms;
      }
   }
`