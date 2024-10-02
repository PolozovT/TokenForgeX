import { makeStyles } from 'tss-react/mui';
import { MIN_LAYOUT_WIDTH } from '../../const';

export const useLayoutStyles = makeStyles()(theme => ({
  root: {
    minWidth: MIN_LAYOUT_WIDTH,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },

  main: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
  },
  mainContent: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
}));
