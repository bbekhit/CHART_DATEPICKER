import { createGlobalStyle } from "styled-components";
import { setColor, setFont, media } from "../styles/helpers";
const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Courgette|Lato:400,700');

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  ${media.tablet` 
    font-size: 80%;
  `}
}

body {
 font-size: 100%;
 color: ${setColor.mainBlack};
 background: ${setColor.mainWhite};
 ${setFont.main};
}

p {
 line-height: 1.5;
 margin: 0 0 1.5rem 0;
}
`;

export default GlobalStyles;
