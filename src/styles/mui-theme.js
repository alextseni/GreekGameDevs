import {
  grey,
  lightBlue,
  green,
  red,
  purple,
  indigo,
  amber,
  deepOrange,
  blueGrey,
  brown,
  pink,
  blue,
  teal,
  cyan,
  yellow,
  lime,
} from 'material-ui/colors';
import { createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  fontFamily: 'Ubuntu',
  mainTextSize: '16px',
  primaryFontFamily: 'Ubuntu',
  secondaryFontFamily: 'Roboto Slab',
  palette: {
    lightestGrey: grey[50], // #FAFAFA
    lighterGrey: grey[100], // #F5F5F5
    lightGrey: grey[200], // #EEEEEE
    darkGrey: grey[400], // #BDBDBD
    darkerGrey: grey[600], // #757575
    darkestGrey: grey[800], // #424242
    lightestBlue: lightBlue[50], // #E1F5FE
    //  lighterBlue: lightBlue[100],
    mainBlue: lightBlue[600], // #039BE5
    white: '#FFFFFF',
    black: '#000000',
    facebookBlue: '#3b5998',
    successColor: green[300],
    errorColor: red[300],
    warningColor: '',
    colors: {
      red: red[400],
      purple: purple[400],
      orange: deepOrange[400],
      indigo: indigo[400],
      amber: amber[400],
      blueGrey: blueGrey[400],
      brown: brown[400],
      blue: blue[400],
      pink: pink[400],
      teal: teal[400],
      cyan: cyan[400],
      yellow: yellow[700],
      lime: lime[400],
    },
  },
});

export default theme;
