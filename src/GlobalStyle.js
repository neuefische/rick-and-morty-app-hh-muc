import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 112.5%;
    font-family: sans-serif;
    margin: 0;
  }

  input, textarea, button {
    font-size: 1em;
  }

`
