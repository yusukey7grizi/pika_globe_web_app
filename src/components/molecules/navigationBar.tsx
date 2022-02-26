import { AppBar, Box, Tab, Tabs, Toolbar, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { TitleButton } from 'components/atoms';
import { NavigationRoutes, ScreenSize } from 'components/constants';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import type { CustomSyntheticEvent } from 'types';

const NavigationBar: FC = () => {
  const router = useRouter();
  const [path, setPath] = useState(router.asPath);
  const isLargerThanIphone = useMediaQuery(ScreenSize.largerThanIphone);

  const handleChange = (
    _: CustomSyntheticEvent,
    path: '/' | 'favorites' | '/myPage'
  ) => {
    setPath(path);
    router.push(path);
  };

  return (
    <AppBar position='static'>
      <CustomToolBar>
        <Wrapper>
          <TitleButton />
        </Wrapper>
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

export { NavigationBar };
