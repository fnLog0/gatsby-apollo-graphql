/* eslint no-unused-expressions: 0 */

import { createGlobalStyle } from 'styled-components';

export const colors = {
  blueish: 'rgba(1, 54, 136, 1)',
  grey:'rgba(42,42,42,.1)',
  white:'#ffff'
};

export default {
  background: colors.white,
  brandColor:colors.white,
  primaryColor:colors.blueish,
  secondaryColor:colors.grey
};

createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif !important;
		margin: 0;
  	padding: 0;
  }
`;
