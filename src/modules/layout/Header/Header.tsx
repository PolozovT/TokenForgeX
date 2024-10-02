import { ConnectButton } from '@rainbow-me/rainbowkit';

import Logo from 'src/assets/logo.svg?react';
import { useHeaderStyles } from './useHeaderStyles';

export const Header = () => {
  const { classes } = useHeaderStyles();

  return (
    <div className={classes.root}>
      <Logo className={classes.logo} />
      <ConnectButton />
    </div>
  )
}