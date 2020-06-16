import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html {
  /** esta propriedade deixa a fonte mais nítida */
  -webkit-font-smoothing: antialiased;
  font-family: 'Ubuntu Mono', monospace;
  font-size: 16px;
}

body {
  background-color: #DDC;
}
`;
