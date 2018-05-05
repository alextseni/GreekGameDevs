import { jss, theme } from 'styles';

const styles = {
  statsContainer: {
    margin: '100px auto',
    height: '100%',
    maxWidth: '700px',
    textAlign: 'left',
    '& .chartjs-size-monitor': {
      margin: '12px 0px',
    },
  },
  sectionTitle: {
    minHeight: '80px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.lightGrey,
    padding: '2px 20px',
    flexWrap: 'wrap',
    margin: '80px 0px 20px',
  },
  titleContainer: {
    width: '100%',
    padding: '12px',
    backgroundColor: `${theme.palette.lighterGrey} !important`,
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    marginBottom: '24px',
    marginTop: '80px',
  },
  counterContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  totalsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  counter: {
    whiteSpace: 'no-wrap',
    fontSize: '22px',
    fontWeight: 700,
    backgroundColor: theme.palette.colors.orange,
    color: theme.palette.white,
    borderRadius: '50px',
    padding: '2px 12px',
  },
  label: {
    whiteSpace: 'no-wrap',
    fontSize: '18px',
    color: theme.palette.black,
    opacity: 0.87,
    marginRight: '8px',
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

export { styles, classes };
