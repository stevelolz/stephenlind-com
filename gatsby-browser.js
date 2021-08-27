import React from 'react';
import { ModalProvider } from './src/store/modalContext';

import "@fontsource/major-mono-display"; // Defaults to weight 400.

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <ModalProvider>{element}</ModalProvider>;
};
