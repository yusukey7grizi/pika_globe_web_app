import { Button, Link, styled } from '@mui/material';
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
      sx={{ fontSize: '1.3rem' }}
    >
      Pika Globe
    </Button>
  );
};

const FormButton = styled(Button)({
  width: '90%',
  margin: 'auto',
  marginTop: '2rem',
  marginBottom: '2rem',
});

export { TitleButton, FormButton };
