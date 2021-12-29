import styled from "styled-components";

export const StyledAboutUs = styled.div`
    background-color: ${({ theme }) => theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: calc(100vh * 0.1);

    img {
        width: 1519px;
        height: 400px;
        margin-bottom: 30px;
        
    }

    h3 {
        text-align: center;
        font-size: 22px;
        line-height: 1.4em;
        color: rgb(0, 35, 51);
        margin-left: 200px;
        margin-right: 200px;
        margin-bottom: 60px;
    }
`

export const CardsParent = styled.div`
    display: flex;
    flex-flow: column;
    text-align: center;
    margin: auto;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: 30px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: #ffffff8a;
`

export const Card = styled.div` 
    h3 {
        text-align: left;
        margin-left: 100px;
        margin-right: 100px;
        list-style-type: square;
        margin-top: -10px;
    }

    img {
        width: 50px;
        height: 50px;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    h2 {
        margin-bottom: 30px;
    }

    ul {
        list-style-type: square;
        margin-top: -30px;
    }
`