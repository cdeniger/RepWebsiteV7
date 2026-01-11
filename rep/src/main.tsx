import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      oxford: '#0A231F',
      signal: '#D44322',
      bone: '#F9F9F9',
    },
  },
  fonts: {
    heading: `'Merriweather', serif`,
    body: `'Source Code Pro', monospace`,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
