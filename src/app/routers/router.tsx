import { HomePage } from '@/pages/home-page';

import { useRoutes } from 'react-router';

export const AppRouter = () => {
  const mainRoutes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
  ]);

  return <>{mainRoutes}</>;
};
