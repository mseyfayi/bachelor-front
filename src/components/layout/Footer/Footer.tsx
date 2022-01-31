import React from 'react';
import { IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useRouter } from 'next/router';
import classes from './Footer.module.scss';

const Footer = () => {
  const router = useRouter();

  return (
    <footer className={classes.footer}>
      <IconButton onClick={() => router.push('/github')}>
        <GitHubIcon />
      </IconButton>
      <Typography>&copy; کوله پشتی ۱۴۰۰-</Typography>
    </footer>
  );
};

export default Footer;
