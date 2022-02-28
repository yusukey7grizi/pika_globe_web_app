import { Box, Typography, useMediaQuery } from '@mui/material';
import { ScreenSize } from 'components/constants';
import {
  CustomDivider,
  EmailField,
  FormButton,
  FormWrapper,
  PasswordField,
} from 'components/atoms';
import { useRouter } from 'next/router';
import { FC } from 'react';

const LogInTemplate: FC = () => {
  const router = useRouter();
  const isLargerThanIpad = useMediaQuery(ScreenSize.largerThanIpad);

  return (
    <FormWrapper sx={{ width: isLargerThanIpad ? '50%' : '100%' }}>
      <Box component='form'>
        <Typography color='secondary' variant='h5'>
          ログイン
        </Typography>
        <EmailField />
        <PasswordField />
        <FormButton type='submit' variant='contained'>
          ログイン
        </FormButton>
      </Box>
      <CustomDivider />
      <Typography gutterBottom>
        まだアカウントをお持ちではないですか？
      </Typography>
      <FormButton
        onClick={() => {
          router.push('/auth/register');
        }}
        color='error'
        variant='contained'
      >
        新規登録
      </FormButton>
    </FormWrapper>
  );
};

export { LogInTemplate };
