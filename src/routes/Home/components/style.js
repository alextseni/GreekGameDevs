import { jss, theme } from 'styles';

const styles = {
  welcome: {
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
    backgroundSize: 'cover',
    minHeight: '372px',
    backgroundAttachment: 'fixed',
    backgroundPosition: '50% 314%',
    padding: '20px',
  },
  databases: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    padding: '40px',
    flexWrap: 'wrap',
  },
  dbCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
    width: '150px',
    backgroundColor: theme.palette.darkestGrey,
    margin: '10px',
    '&:hover': {
      boxShadow: '0px 0px 12px #888888',
      cursor: 'pointer',
    },
  },
  header: {
    textAlign: 'center',
    color: 'white',
    marginTop: '26px',
  },
  subheader: {
    color: 'white',
    marginTop: '10px',
  },
  cardTitle: {
    color: 'white',
    marginTop: '10px',
    fontSize: '16px',
  },
  dashContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 40px',
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '40px',
  },
  '@media (max-width: 960px)': {
    rowContainer: {
      flexDirection: 'column',
    },
    dashContent: {
      padding: '0 20px',
    },
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

export { styles, classes };
