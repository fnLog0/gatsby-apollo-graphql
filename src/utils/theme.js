/* eslint no-unused-expressions: 0 */

import { createGlobalStyle } from 'styled-components';

export const colors = {
  pumpkin: '#37b091',
  white:'#ffff'
};

export default {
  background: colors.pumpkin,
  brandColor:colors.white
};

createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif !important;
		margin: 0;
  	padding: 0;
  }
`;
