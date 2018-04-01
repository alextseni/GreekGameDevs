import { jss, theme } from 'styles';

const styles = {
  calendar: {
    minHeight: '650px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  pagination: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: theme.palette.lighterGrey,
    display: 'flex',
    justifyContent: 'center',
  },
  dummy: {
    height: '60px',
  },
  eventDetails: {
    padding: '10px',
    backgroundColor: theme.palette.lightestBlue,
    border: '1px solid',
  },
  newsWidth: {
    width: '50%',
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  sectionTitle: {
    minHeight: '80px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.lightGrey,
    padding: '2px 20px',
    flexWrap: 'wrap',
    margin: '20px 0px',
  },
  social: {
    display: 'flex',
    alignItems: 'center',
  },
  subscribeButton: {
    margin: '5px 0px',
  },
  facebookIcon: {
    width: '54px',
    height: '54px',
    fill: theme.palette.facebookBlue,
  },
  iconContainer: {
    '&:hover': {
      boxShadow: '0px 0px 12px #888888',
    },
    alignItems: 'center',
    borderRadius: '100px',
    display: 'flex',
    cursor: 'pointer',
  },
  updatesList: {
    width: '100%',
    position: 'relative',
    textAlign: 'left',
    height: '100%',
    '& > ul > li': {
      alignItems: 'flex-start',
    },
  },
  // polls: {
  //   textAlign: 'left',
  //   marginTop: '10px',
  //   display: 'flex',
  //   justifyContent: 'space-around',
  //   flexWrap: 'wrap',
  // },
  // pollsIframe: {
  //   width: '600px',
  //   height: '1000px',
  //   border: 0,
  // },
  icon: {
    marginLeft: '10px',
  },
  '@media (max-width: 960px)': {
    newsWidth: {
      width: '100%',
      margin: 0,
    },
    calendar: {
      height: '650px',
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export { styles, classes };
