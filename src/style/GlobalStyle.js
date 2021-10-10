import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
   
    body {
        margin: 0;
        background-color: #0f171e;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Condensed', sans-serif;
        min-height: 100vh;
    }
    #root{
        min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    }
`;
export default GlobalStyle;
