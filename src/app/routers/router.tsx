import { CreateTaskPage } from '@/pages/create-task-page';
import { HomePage } from '@/pages/home-page';
import { UpdateTaskPage } from '@/pages/update-task-page';

import { useRoutes } from 'react-router';

export const AppRouter = () => {
  const mainRoutes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/task/:id',
      element: <UpdateTaskPage />,
    },
    {
      path: '/task/new',
      element: <CreateTaskPage />,
    },
  ]);

  return <>{mainRoutes}</>;
};
