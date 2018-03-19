import { jss } from 'styles';

const styles = {
  layoutContainer: {
    eight: '100%',
    padding: '20px 20px 80px',
  },
  contentContainer: {
    height: '100%',
    overflow: 'auto',
    padding: '25px 0px',
  },
  contentLoader: {
    margin: '40px',
  },
  containerGrid: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    '& > div > div:first-child': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      justifyContent: 'space-around',
    },
    '& > div': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      justifyContent: 'space-around',
    },
  },
  containerList: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

export { styles, classes };
