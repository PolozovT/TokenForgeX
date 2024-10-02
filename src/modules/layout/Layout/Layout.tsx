import { ReactNode } from 'react';
import { Box } from '@mui/material';
import { useLayoutStyles } from './useLayoutStyles'
import { Header } from '../Header';
import { Footer } from '../Footer';

export interface ILayoutProps {
  children?: ReactNode;
}

export const Layout = ({
  children,
}: ILayoutProps) => {
  const { classes } = useLayoutStyles();

  return (
    <Box className={classes.root}>
      <Header />
      <Box component="main" className={classes.main}>
        <Box className={classes.mainContent}>{children}</Box>
        <Footer />
      </Box>
    </Box>
  )
}