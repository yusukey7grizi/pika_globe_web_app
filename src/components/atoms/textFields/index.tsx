import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { FC } from 'react';

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

export { SearchField, SearchFieldWithClearButton };
