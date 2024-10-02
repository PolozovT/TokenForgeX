import TelegramIcon from 'src/assets/telegram.svg?react';
import XIcon from 'src/assets/x.svg?react';
import { useFooterStyles } from './useFooterStyles';
import { Link } from '@mui/material';
import { SUPPORT_EMAIL_LINK, TELEGRAM_LINK, X_LINK } from '../../const';

export const Footer = () => {
  const { classes } = useFooterStyles();

  return (
    <div className={classes.root}>
      <div className={classes.socialLinks}>
        <Link href={TELEGRAM_LINK} >
          <TelegramIcon className={classes.logo} />
        </Link>
        <Link href={X_LINK} >
          <XIcon className={classes.logo} />
        </Link>
      </div>
      <Link target='_blank' href={SUPPORT_EMAIL_LINK} >
        support@tokenforgex.xyz
      </Link>
    </div>
  )
}