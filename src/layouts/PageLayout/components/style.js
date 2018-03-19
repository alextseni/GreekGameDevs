import { jss } from 'styles';

const styles = {
  burger: {
    width: '36px !important',
    height: '36px !important',
  },
  '@media (min-width: 641px)': {
    burgerContainer: {
      display: 'none !important',
    },
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

export { styles, classes };
