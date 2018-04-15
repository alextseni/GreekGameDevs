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
  answer: {
    fontFamily: 'Helvetica',
    fontSize: '14px',
    lineHeight: '20px',
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

export { styles, classes };
