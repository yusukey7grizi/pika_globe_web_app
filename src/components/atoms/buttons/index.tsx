import { Button, Link } from '@mui/material';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

const TitleButton: FC = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push('/');
      }}
      component={Link}
      disableRipple
      variant='text'
      color='secondary'
    >
      Pika Globe
    </Button>
  );
};

export { TitleButton };
