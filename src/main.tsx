import { ThemeProvider } from 'styled-components';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { DropdownProvider, FontsVTBGroup, LIGHT_THEME } from '@admiral-ds/react-ui';

import App from './app/App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={LIGHT_THEME}>
      <DropdownProvider>
        <FontsVTBGroup />
        <App />
      </DropdownProvider>
    </ThemeProvider>
  </StrictMode>,
);
