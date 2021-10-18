import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
 * {
   box-sizing: border-box;
   font-family: -apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕", Roboto, Helvetica, Arial, sans-serif;
 }
	
`;

export default GlobalStyle;
