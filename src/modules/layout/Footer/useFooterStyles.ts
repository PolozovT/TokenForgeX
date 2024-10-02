import { makeStyles } from 'tss-react/mui';

export const useFooterStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(3),
    height: 40,
  },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(3),
  },
  logo: {
    height: 24,
    width: 24,
  },
}));
