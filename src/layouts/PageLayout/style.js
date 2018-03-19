import { jss, theme } from 'styles';

const styles = {
  viewport: {
    marginTop: '60px',
  },
  appContainer: {
    height: '100%',
    textAlign: 'center !important',
  },
  navbar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    maxWidth: '430px',
  },
  logoArea: {
    backgroundImage: "url('/logo.png')",
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '173px',
    height: '55px',
    margin: '0px 10px',
  },
  navItemLink: {
    fontWeight: 'bold',
    textDecoration: 'none !important',
    '&:hover': {
      textDecoration: 'none !important',
    },
  },
  popperClose: {
    pointerEvents: 'none',
  },
  appbar: {
    alignItems: 'center',
    backgroundColor: `${theme.palette.mainBlue} !important`,
  },
  menuBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuLabel: {
    color: 'white !important',
    fontWeight: '700 !important',
    fontSize: '12px !important',
    padding: '0 !important',
    cursor: 'pointer',
  },
  menuItem: {
    height: '30px !important',
    '& > span': {
      flexDirection: 'column',
    },
  },

  '@media (max-width: 640px)': {
    viewport: {
      marginTop: '50px',
    },
    navbar: {
      display: 'none !important',
    },
    logoArea: {
      width: '100px',
      height: '43px',
      margin: '0px 10px',
    },
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

export { styles, classes };
