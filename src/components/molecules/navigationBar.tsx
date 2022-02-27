import {
  AppBar,
  Box,
  IconButton,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import { styled, width } from '@mui/system';
import { TitleButton } from 'components/atoms';
import { Color, NavigationRoutes, ScreenSize } from 'components/constants';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import type { CustomSyntheticEvent } from 'types';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const NavigationBar: FC = () => {
  const router = useRouter();
  const [path, setPath] = useState<string>(router.asPath);

  const isLargerThanIphone = useMediaQuery(ScreenSize.largerThanIphone);
  const isLargerThanIpad = useMediaQuery(ScreenSize.largerThanIpad);

  const handleChange = (
    _: CustomSyntheticEvent,
    path: '/' | 'favorites' | '/myPage'
  ) => {
    setPath(path);
    router.push(path);
  };

  const ToolBarContent: FC = () => {
    const [isSearchFieldOpen, setIsSearchFieldOpen] = useState<boolean>(false);

    switch (true) {
      case isLargerThanIpad:
        return (
          <>
            <Wrapper>
              <TitleButton />
            </Wrapper>
            <SearchField />
          </>
        );

      case isSearchFieldOpen:
        return (
          <>
            <IconButton
              color='secondary'
              onClick={() => {
                setIsSearchFieldOpen(false);
              }}
            >
              <ClearIcon />
            </IconButton>
            <SearchField />
          </>
        );

      default:
        return (
          <>
            <Wrapper>
              <TitleButton />
            </Wrapper>
            <IconButton
              color='secondary'
              onClick={() => {
                setIsSearchFieldOpen(true);
              }}
            >
              <SearchIcon />
            </IconButton>
          </>
        );
    }
  };

  return (
    <AppBar position='static'>
      <CustomToolBar>
        <ToolBarContent />
      </CustomToolBar>
      {isLargerThanIphone && (
        <Wrapper>
          <Tabs
            indicatorColor='secondary'
            textColor='secondary'
            value={path}
            onChange={handleChange}
          >
            {NavigationRoutes.map(({ path, label }) => {
              return <Tab key={label} value={path} label={label} />;
            })}
          </Tabs>
        </Wrapper>
      )}
    </AppBar>
  );
};

const Wrapper = styled(Box)({
  paddingLeft: '10%',
});

const CustomToolBar = styled(Toolbar)({
  height: '4.6rem',
});

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
        style: { height: '100%', width: '100%', fontSize: '0.9rem' },
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
export { NavigationBar };
