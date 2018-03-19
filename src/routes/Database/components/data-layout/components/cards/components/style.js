import { jss, theme } from 'styles';

const styles = {
  info: {
    position: 'relative',
    top: '20px',
    minWidth: '40px !important',
    padding: '0 !important',
    display: 'flex',
    alignSelf: 'flex-start',
  },
  btnandcardGrid: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '375px',
    width: '100%',
    margin: '0px 10px',
  },
  btnandcardList: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    margin: '0px 10px',
    maxWidth: '1000px',
  },
  cardContainer: {
    width: '100%',
    padding: '10px',
    backgroundColor: `${theme.palette.lighterGrey} !important`,
    alignItems: 'flex-end',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(93,93,93,.06)',
    padding: '5px 5px 5px 10px',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemButton: {
    textAlign: 'left',
  },
  dot: {
    height: '5px',
    width: '5px',
    backgroundColor: theme.palette.darkerGrey,
    borderRadius: '50%',
    display: 'inline-block',
    marginBottom: '2px',
  },
  logoGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(93,93,93,.06)',
    padding: '10px',
    flexWrap: 'wrap',
  },
  otherInfo: {
    display: 'flex',
    marginTop: '2px',
  },
  socialGrid: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  socialList: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },
  contentGrid: {
    flexWrap: 'wrap',
    minHeight: '24px',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: 'rgba(93,93,93,.06)',
  },
  contentList: {
    flexWrap: 'wrap',
    minHeight: '24px',
    height: 'auto',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: 'rgba(93,93,93,.06)',
  },
  line: {
    border: '1px solid rgba(0,0,0,.1)',
    height: '30px',
    margin: '5px 0px',
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
  },
  icon: {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100%',
    width: '160px',
    height: '76px',
  },
  iconGrid: {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    width: '100%',
    height: '150px',
    marginBottom: '10px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5px',
    flexWrap: 'wrap',
  },
  tags: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  tag: {
    height: '24px !important',
    marginLeft: '10px',
    marginTop: '5px',
  },

// form 
  infoContainer: {
    display: 'flex',
    padding: '32px',
    flexDirection: 'column',
    fontSize: '22px',
    width: '100%',
    maxWidth: '600px',
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    cursor: 'pointer',
    margin: '8px',
  },
  infoForm: {
    marginTop: '20px',
    display: 'flex',
    alignItems: 'left',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '500px',
  },
  formLabel: {
    fontSize: '18px !important',
  },
  multiline: {
    '& > div': {
      marginTop: '33px !important',
      backgroundColor: theme.palette.lightestGrey,
    },
  },
  textField: {
    width: '100%',
  },
  statusIcon: {
    width: '50px',
    height: '50px',
  },
  success: {
    backgroundColor: theme.palette.successColor,
  },
  error: {
    backgroundColor: theme.palette.errorColor,
  },
  popupStatusForm: {
    position: 'absolute',
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    zIndex: '9',
    opacity: '0.8',
    height: '100%',
    top: '0',
    left: '0',
    backgroundColor: theme.palette.white,
  },
  submitBtn: {
    width: '50px',
    margin: '20px',
    alignSelf: 'flex-end',
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

export { styles, classes };
