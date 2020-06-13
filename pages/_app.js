import App from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import 'react-placeholder/lib/reactPlaceholder.css';

const theme = {
  primary: '#ee25a5',
  accent: '#00ffde',
};

const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  height: 100%;
  background: #303436;
  font-family: 'Open Sans';
}
#__next {
  height: 100%;
}
@font-face {
  font-family: 'Another Danger';
  src: url('/fonts/another-danger.otf') format("opentype");
}
@font-face {
  font-family: 'Open Sans';
  src: url('/fonts/OpenSans-Regular.ttf') format("truetype");
}
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
