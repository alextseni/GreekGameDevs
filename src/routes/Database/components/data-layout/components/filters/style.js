import { jss, theme } from 'styles';

const styles = {
  filtersContainer: {
    display: 'flex',
  },
  otherTools: {
    display: 'flex',
    maxWidth: '300px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sortByLabel: {
    margin: '0',
  },
  form: {
    margin: '0px 20px !important',
  },
  noDrawer: {
    display: 'none',
  },
  mainFilters: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '250px',
    minWidth: '110px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: '100px',
  },
  filtersBtn: {
    WebkitAnimation: 'pulse 1.5s infinite',
    minHeight: '31px',
    height: '31px',
    width: '20px',
    minWidth: '80px',
  },
  // '@-webkit-keyframes pulse': {
  //   '70%': {
  //     boxShadow: '0 0 0 50px rgba(#5a99d4, 0)',
  //   },
  //   '100%': {
  //     boxShadow: '0 0 0 0 rgba(#5a99d4, 0)',
  //   },
  // },
  filtersToolbar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: '64px',
    left: '0',
    backgroundColor: theme.palette.lightestBlue,
    position: 'fixed',
    padding: '0px 20px',
    zIndex: '2',
    height: '50px',
    borderBottom: '1px solid rgba(0,0,0,0.34)',
    borderTop: '1px solid rgba(0,0,0,0.34)',
  },
  tooltip: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  searchIcon: {
    height: '30px',
    width: '36px',
    backgroundColor: theme.palette.lightGrey,
    borderLeft: '1px solid #d4d4d4',
    borderRadius: 'inherit',
  },
  multiselect: {
    maxWidth: '240px',
    width: '100%',
    margin: '10px 5px 5px',
  },
  subfilters: {
    minHeight: '84px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  tools: {
    position: 'fixed',
    bottom: '20px',
    right: '0',
  },
  drawerHandle: {
    zIndex: '1500',
    position: 'fixed',
    top: '75px',
    left: '10px',
  },
  searchBar: {
    height: '32px !important',
    width: '233px',
    padding: '5px 0px 5px 10px !important',
    border: '1px solid #d0d0d0 !important',
    alignItems: 'center !important',
    justifyContent: 'space-between !important',
    flexDirection: 'row !important',
  },
  searchInput: {
    display: 'flex !important',
    alignItems: 'center !important',
    '& > input': {
      padding: 0,
    },
    '& > div': {
      display: 'flex',
    },
  },
  drawerInner: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  drawerHeader: {
    height: '30px',
  },
  sortField: {
    '& > div': {
      marginTop: '10px !important',
      height: '26px !important',
    },
  },
  drawerBox: {
    '& > div': {
      overflow: 'visible',
      backgroundColor: theme.palette.lightestBlue,
      paddingBottom: '20px',
      paddingLeft: '110px',
    },
  },
  '@media (max-width: 500px)': {
    viewButton: {
      display: 'none !important',
    },
  },
  '@media (max-width: 640px)': {
    otherTools: {
      justifyContent: 'flex-end',
    },
    searchBar: {
      width: '115px',
    },
    filtersToolbar: {
      top: '47px',
      padding: '5px',
      paddingTop: '2px',
      alignItems: 'center',
    },
    drawerHandle: {
      top: '55px',
    },
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

export { styles, classes };
