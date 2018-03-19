import { jss } from 'styles';

const styles = {
  tableCell: {
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 600,
  },
  credits: {
    marginBottom: '40px',
  },
  creditsList: {
    margin: '15px 0px',
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

export { styles, classes };
