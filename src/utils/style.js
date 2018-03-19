import { jss, theme } from 'styles';

const styles = {
  socialIcon: {
    margin: '2px',
    fill: '#34a56f',
    display: 'flex',
    '& > svg': {
      width: '28px',
      height: '28px',
    },
  },
  dbIcon: {
    width: '32px',
    height: '32px',
    fill: 'white',
  },
  dbIconSmall: {
    width: '24px',
    height: '24px',
    fill: 'rgba(0,0,0,0.84)',
  },
  menuIcon: {
    width: '32px',
    height: '32px',
    fill: theme.palette.white,
  },
  menuIconSmall: {
    width: '24px',
    height: '24px',
    fill: 'rgba(0,0,0,0.84)',
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

export { styles, classes };
