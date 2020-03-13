import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Barlow:300,400,500,700&&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');
 
  @font-face {
    font-family: 'Roboto';
    src: url('https://fonts.googleapis.com/css?family=Roboto&display=swap')
      format('font-woff');
  }

  @font-face {
    font-family: 'Roboto Condensed';
    src: url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap')
      format('font-woff');
  }
  
  @font-face {
    font-family: 'Barlow';
    src: url('https://fonts.googleapis.com/css?family=Barlow&display=swap')
      format('font-woff');
  }  
`;

export default GlobalStyle;
