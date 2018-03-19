import { grey, lightBlue, green, red } from 'material-ui/colors';
import { createMuiTheme } from 'material-ui/styles';

// Needed for onTouchTap
// Check this repo:
// // https://github.com/zilverline/react-tap-event-plugin
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

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
    facebookBlue: '#3b5998',
    successColor: green[300],
    errorColor: red[300],
    warningColor: '',
  },
});

export default theme;
