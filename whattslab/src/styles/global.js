import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;

}
html, #root {
    max-width: 100vw;
    min-height: 100vh;
    font-size: 85%;
}
body {
    width: 100%;
    height: 100%;
    font-family: "Segoe UI", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
`