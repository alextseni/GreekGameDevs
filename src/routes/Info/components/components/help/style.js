import { jss } from 'styles';

const styles = {
  help: {
    margin: '10px',
  },
  helpList: {
    margin: '15px 0px',
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

export { styles, classes };
