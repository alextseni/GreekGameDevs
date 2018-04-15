import { jss, theme } from 'styles';

const styles = {
  newsletter: {
    display: 'flex',
  },
  subscribeIframe: {
    width: '100%',
    height: '450px',
    border: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  description: {
    textAlign: 'left',
    margin: 'auto !important',
    marginTop: '20px !important',
  },
  textField: {
    backgroundColor: theme.palette.lightestGrey,
    maxWidth: '350px',
    width: '100%',
  },
  multiline: {
    backgroundColor: theme.palette.lightestGrey,
    width: '100%',
  },
  title: {
    textAlign: 'center',
  },
  submitBtn: {
    width: '50px',
    margin: '20px',
    alignSelf: 'flex-end',
  },
  contact: {
    margin: '0px',
    padding: '52px 20px',
    backgroundColor: theme.palette.lightGrey,
    width: '100%',
    clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0, 76% 6%, 48% 0, 24% 5%)',
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

export { styles, classes };
