import { AppBar, Box, Tab, Tabs, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import { TitleButton } from 'components/atoms';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { CustomSyntheticEvent } from 'types';

const NavigationBar: FC = () => {
  const router = useRouter();
  const [path, setPath] = useState(router.asPath);

  const NavigationRoutes = [
    { path: '/', label: 'ホーム' },
    { path: '/favorites', label: 'お気に入り' },
    { path: '/myPage', label: 'マイページ' },
  ] as const;

  const handleChange = (_: CustomSyntheticEvent, path: string) => {
    setPath(path);
    router.push(path);
  };

  return (
    <AppBar>
      <Toolbar>
        <Wrapper>
          <TitleButton />
        </Wrapper>
      </Toolbar>
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
    </AppBar>
  );
};

const Wrapper = styled(Box)({
  paddingLeft: '10%',
});

export { NavigationBar };
