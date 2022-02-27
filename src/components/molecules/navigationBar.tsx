import {
  AppBar,
  Box,
  Button,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/system';
import {
  SearchField,
  SearchFieldWithClearButton,
  TitleButton,
} from 'components/atoms';
import { Color, NavigationRoutes, ScreenSize } from 'components/constants';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import type { CustomSyntheticEvent } from 'types';
import SearchIcon from '@mui/icons-material/Search';

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
            <FlexBox>
              <Button color='secondary'>ログイン</Button>
              <RegisterButton>新規登録</RegisterButton>
            </FlexBox>
          </>
        );

      case isSearchFieldOpen:
        return (
          <SearchFieldWithClearButton
            setIsSearchFieldOpen={setIsSearchFieldOpen}
          />
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
            {isLargerThanIphone && (
              <FlexBox>
                <Button color='secondary'>ログイン</Button>
                <RegisterButton>新規登録</RegisterButton>
              </FlexBox>
            )}
          </>
        );
    }
  };

  return (
    <AppBar position='static'>
      <CustomToolBar>
        <ToolBarContent />
      </CustomToolBar>
      {isLargerThanIphone ? (
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
      ) : (
        <FlexBox>
          <h6>Pika Globeへようこそ！</h6>
          <FlexBox>
            <Button color='secondary'>ログイン</Button>
            <RegisterButton>新規登録</RegisterButton>
          </FlexBox>
        </FlexBox>
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

const RegisterButton = styled(Button)({
  color: Color.red,
});

const FlexBox = styled('div')({
  display: 'flex',
  justifyContent: 'space-evenly',
});

export { NavigationBar };
