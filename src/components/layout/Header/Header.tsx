import React from 'react';
import { Typography, Button, Avatar } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { User } from 'common/types';
import { getUsername } from 'common/utils';
import classes from 'components/Posts/PostItem/PostItem.module.scss';
import style from './Header.module.scss';

type Props = {
  profile?: User;
};

const Header = ({ profile }: Props) => {
  const router = useRouter();
  return (
    <header className={style.header}>
      <Button onClick={() => router.push('/')}>
        <Image src="/kooleposhti.svg" width={40} height={40} />
        <Typography component="h1">کوله پشتی</Typography>
      </Button>
      {profile && (
        <div className="d-flex flex-row align-items-center">
          <p className={classes.username}>{getUsername(profile)}</p>
          <Avatar src={profile?.avatar} alt={getUsername(profile)} sx={{ width: 54, height: 54 }} />
        </div>
      )}
    </header>
  );
};

export default Header;
