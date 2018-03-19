import { jss } from 'styles';

const styles = {
  comContainer: {
    margin: '0 auto',
    maxWidth: '700px',
    textAlign: 'left',
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

export { styles, classes };
