import { jss, theme } from 'styles';

const styles = {
  footerContainer: {
    display: 'flex',
    height: '50px',
    alignItems: 'center',
    backgroundColor: theme.palette.lightGrey,
    justifyContent: 'center',
    borderTop: `1px solid ${theme.palette.darkGrey}`,
  },
  donationtitle: {
    margin: '0 10px !important',
  },
  donationBox: {
    display: 'flex',
  },
  donationBtn: {
    cursor: 'pointer !important',
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

export { styles, classes };
