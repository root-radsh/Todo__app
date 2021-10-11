import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;

}

html,
body {
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    font-size: 14px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

a,
a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}



button {
    cursor: pointer;
}

button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

ul li {
    list-style: none;
}
`;
