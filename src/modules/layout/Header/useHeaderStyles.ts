import { makeStyles } from 'tss-react/mui';

export const useHeaderStyles = makeStyles()(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },

  logo: {
    height: 60,
    width: 60,
  },
}));
