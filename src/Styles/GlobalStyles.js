import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --background-color: #F6F5F4;
    --titles-color: #333333;
    --buttons-color-1: #FFB6C1;
    --buttons-color-2: #9AD0EC;
    --lines-borders-color: #FFABAB;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Space Mono', sans-serif; /* La fuente ya está en el HTML */
    background-color: var(--background-color);
    color: var(--titles-color);
    box-sizing: border-box;
}

*, *::before, *::after {
    box-sizing: inherit;
}
`;

export default GlobalStyles;
