import { Box, Typography, useMediaQuery } from '@mui/material';
import { ScreenSize } from 'components/constants';
import {
  CustomDivider,
  EmailField,
  FormButton,
  FormWrapper,
  PasswordField,
  UsernameField,
} from 'components/atoms';
import { useRouter } from 'next/router';
import { FC } from 'react';

const RegisterTemplate: FC = () => {
  const router = useRouter();
  const isLargerThanIpad = useMediaQuery(ScreenSize.largerThanIpad);

  return (
    <FormWrapper sx={{ width: isLargerThanIpad ? '50%' : '100%' }}>
      <Box component='form'>
        <Typography color='secondary' variant='h5'>
          新規登録
        </Typography>
        <EmailField />
        <PasswordField />
        <UsernameField />
        <FormButton type='submit' color='error' variant='contained'>
          登録する
        </FormButton>
      </Box>
      <CustomDivider />
      <Typography gutterBottom>既にアカウントをお持ちですか？</Typography>
      <FormButton
        onClick={() => {
          router.push('/auth/logIn');
        }}
        variant='contained'
      >
        ログイン
      </FormButton>
    </FormWrapper>
  );
};

export { RegisterTemplate };
