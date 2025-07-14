import { AddTaskPage } from '@/pages/add-task-page';
import { EditTaskPage } from '@/pages/edit-task-page';
import { HomePage } from '@/pages/home-page';

import { useRoutes } from 'react-router';

export const AppRouter = () => {
  const mainRoutes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/edit/task/:taskId',
      element: <EditTaskPage />,
    },
    {
      path: '/add/task',
      element: <AddTaskPage />,
    },
  ]);

  return <>{mainRoutes}</>;
};
