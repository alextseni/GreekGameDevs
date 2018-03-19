import { jss, theme } from 'styles';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
  },
  success: {
    backgroundColor: theme.palette.successColor,
  },
  error: {
    backgroundColor: theme.palette.errorColor,
  },
  popupStatus: {
    position: 'absolute',
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    zIndex: '9',
    opacity: '0.8',
    backgroundColor: theme.palette.white,
  },
  statusIcon: {
    width: '50px',
    height: '50px',
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

export { styles, classes };
