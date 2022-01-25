import React from 'react';
import { Typography, Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import style from './Header.module.scss';

const Header = () => {
  const router = useRouter();
  return (
    <header className={style.header}>
      <Button onClick={() => router.push('/')}>
        <Image src="/kooleposhti.svg" width={40} height={40} />
        <Typography component="h1">کوله پشتی</Typography>
      </Button>
    </header>
  );
};

export default Header;
