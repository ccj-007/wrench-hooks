// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: 'hotpink',

  // UI
  appBg: 'white',
  appContentBg: '#fff',
  appBorderColor: '#ff3399',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#fff',
  barSelectedColor: '#fff',
  barBg: 'hotpink',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandUrl: 'logo.png',
  brandImage: 'logo.png',
  brandTarget: '_self',
});