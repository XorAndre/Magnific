const RELATIVE_UNIT_BASE = 16;

const breakpoints: any = {
  tablet: 960,
  phone: 768,
};

const browserDocument: any = document;
const isIE = /*@cc_on!@*/ false || !!browserDocument.documentMode;
const isEDGE = window.navigator.userAgent.indexOf('Edge') > -1;

const generateBreakpoint = (width: number, cssMarkup: any) => `
@media (max-width: ${width / RELATIVE_UNIT_BASE}em) {
  ${cssMarkup};
  }
`;

export type variant2Types = 'primary' | 'secondary';
export type variant3Types = 'primary' | 'secondary' | 'tertiary';
export type fillTypes = 'filled' | 'outline';
export type sizeTypes = 'sm' | 'md';

const theme = {
  isIE,
  isEDGE,
  baseline: '62px',
  fonts: {
    roboto: 'Roboto,sans-serif',
    robotoCondensed: 'Roboto Condensed,sans-serif',
    barlow: 'Barlow, sans-serif',
  },
  fontsize: {
    pt72: '4.5em',
    pt40: '2.5em',
    pt32: '2em',
    pt24: '1.5em',
    pt20: '1.25em',
    pt16: '1em',
    pt14: '0.875em',
    pt12: '0.75em',
    pt10: '0.63em',
  },
  colors: {
    // Weir Division Colors
    weirGroupBlue: '#425563',
    weirMineralsOrange: '#ed8b00',
    weirEscoRed: '#c92c2b',

    // System colors
    weirBlue: '#005eb8',
    weirBlueAccent: '#003d8a',

    // Gray Scale
    onyx: '#2d343d',
    slate: '#72808a',
    silver: '#a0aab1',
    stone: '#d0d4d8',
    dust: '#eceeef',
    snow: '#fafbfc',

    // Data visualization colors
    blueSlate: '#2f4c6e',
    blueSlateHighlight: '#08162f',
    blueSilver: '#8fa8f0',
    blueSilverHighlight: '#506e90',
    blueStone: '#cdd8e3',
    lightBlue: '#f0f6fb',
    blueStoneHighlight: '#a4b6ca',
    weirBlueHighlight: '#003d8a',
    ocean: '#418fdf',
    oceanHighlight: '#1050c3',
    sky: '#9ac9f3',
    skyHighlight: '#5d9ee7',

    // Indicator colors
    redLight: '#fcedeb',
    red: '#e04e39',
    redHighlight: '#c4170c',
    yellowLight: '#fffaea',
    yellow: '#ffc72c',
    yellowHighlight: '#ff9b07',
    greenLight: '#e5f8f1',
    green: '#00b26e',
    greenHighlight: '#007c2e',

    orange: '#EB665B',

    // other colors
    white: '#ffffff',
    black: '#000000',
    skyLight: '#f0f6fb',
    darkBlueBorder: '#002a88',

    greyBorder: 'rgba(0,0,0,0.2)',
  },
  generateBreakpoint,
  media: Object.keys(breakpoints).reduce((acc: any, label: string) => {
    acc[label] = (...args: any) => generateBreakpoint(breakpoints[label], args);

    return acc;
  }, {}),
};

export default theme;
