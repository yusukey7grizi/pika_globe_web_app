const Color = {
  white: '#FFFFFF',
  green: '#4caf50',
  gray: '#767676',
  red: '#d32f2f',
} as const;

const ScreenSize = {
  largerThanIpad: '(min-width:769px)',
  largerThanIphone: '(min-width:477px)',
} as const;

const NavigationRoutes = [
  { path: '/', label: 'ホーム' },
  { path: '/favorites', label: 'お気に入り' },
  { path: '/myPage', label: 'マイページ' },
] as const;

export { Color, ScreenSize, NavigationRoutes };
