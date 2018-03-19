import { jss } from 'styles';

const styles = {
  infocontainer: {
    maxWidth: '750px',
    margin: 'auto',
    textAlign: 'left',
  },
  question: {
    fontWeight: '700',
    textAlign: 'left',
    fontSize: '16px',
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

export { styles, classes };
