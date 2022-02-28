import { FC, useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

type SearchFieldWithClearButtonProps = {
  setIsSearchFieldOpen: (arg: boolean) => void;
};

const SearchField: FC = () => {
  return (
    <TextField
      size='small'
      autoComplete='off'
      placeholder='住所で検索する'
      variant='filled'
      sx={{
        pl: '1rem',
        pr: '1rem',
        height: '2.5rem',
        width: '20rem',
      }}
      InputProps={{
        disableUnderline: true,
        style: { borderRadius: 0 },
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton color='secondary'>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const SearchFieldWithClearButton: FC<SearchFieldWithClearButtonProps> = ({
  setIsSearchFieldOpen,
}) => {
  return (
    <TextField
      size='small'
      autoComplete='off'
      placeholder='住所で検索する'
      variant='filled'
      sx={{
        pl: '1rem',
        pr: '1rem',
        height: '2.5rem',
        width: '100%',
      }}
      InputProps={{
        disableUnderline: true,
        style: { borderRadius: 0 },
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton color='secondary'>
              <SearchIcon />
            </IconButton>
            <IconButton
              color='default'
              onClick={() => {
                setIsSearchFieldOpen(false);
              }}
            >
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const EmailField: FC = () => {
  return (
    <TextField
      required
      sx={{
        width: '90%',
        mb: '0.5rem',
        margin: 'auto',
      }}
      helperText='メールアドレスを入力してください'
      variant='standard'
      type='email'
      color='secondary'
      placeholder='例:sample@gmail.com'
      label='メールアドレス'
      autoComplete='off'
    />
  );
};

const PasswordField: FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <TextField
      required
      sx={{ width: '90%', margin: 'auto', mb: '0.5rem' }}
      helperText='パスワードを入力してください'
      variant='standard'
      type={isPasswordVisible ? 'text' : 'password'}
      color='secondary'
      placeholder='例:sample@gmail.com'
      label='パスワード'
      autoComplete='off'
      InputProps={{
        style: { borderRadius: 0 },
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton
              color='secondary'
              onClick={() => {
                setIsPasswordVisible(!isPasswordVisible);
              }}
            >
              {isPasswordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const UsernameField: FC = () => {
  return (
    <TextField
      required
      sx={{
        width: '90%',
        mb: '0.5rem',
        margin: 'auto',
      }}
      helperText='ユーザーネームを入力してください'
      variant='standard'
      type='text'
      color='secondary'
      placeholder='sample_user'
      label='ユーザーネーム'
      autoComplete='off'
    />
  );
};

export {
  SearchField,
  SearchFieldWithClearButton,
  EmailField,
  PasswordField,
  UsernameField,
};
