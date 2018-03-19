import { jss, theme } from 'styles';

const styles = {
  tableWrapper: {
    marginTop: '20px',
    backgroundColor: `${theme.palette.lighterGrey} !important`,
    width: '100%',
  },
  flexClass: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  footerItem: {
    marginRight: '10px',
  },
  marginClass: {
    marginRight: '10px',
  },
  '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
    cell: {
      maxWidth: '0 !important',
    },
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

export { styles, classes };
