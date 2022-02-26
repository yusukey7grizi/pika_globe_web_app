import {
  BottomNavigationAction,
  BottomNavigation as MuiBottomNavigation,
  styled,
} from '@mui/material';
import React, { FC, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from 'next/router';
import { Color } from 'components/constants';

const BottomNavigation: FC = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState(router.asPath);

  const getColor = (value: '/' | '/favorites' | '/myPage'): string => {
    return currentPath === value ? Color.green : Color.gray;
  };

  return (
    <CustomBottomNavigation
      onChange={(_, value) => {
        setCurrentPath(value);
        router.push(value);
      }}
      showLabels
      value={currentPath}
    >
      <CustomBottomNavigationAction
        value='/'
        label='ホーム'
        icon={
          <HomeIcon
            sx={{
              color: getColor('/'),
            }}
          />
        }
      />
      <CustomBottomNavigationAction
        value='/favorites'
        label='お気に入り'
        icon={
          <FavoriteIcon
            sx={{
              color: getColor('/favorites'),
            }}
          />
        }
      />
      <CustomBottomNavigationAction
        value='/myPage'
        label='マイページ'
        icon={
          <PersonIcon
            sx={{
              color: getColor('/myPage'),
            }}
          />
        }
      />
    </CustomBottomNavigation>
  );
};

const CustomBottomNavigation = styled(MuiBottomNavigation)({
  position: 'absolute',
  bottom: 0,
  width: '100%',
});

const CustomBottomNavigationAction = styled(BottomNavigationAction)({
  '&	.Mui-selected': {
    color: Color.green,
  },
});

export { BottomNavigation };
