import { TaskFilter } from '@/components/task-filter';
import { TaskList } from '@/components/task-list';

import Style from './HomePage.module.css';

export const HomePage = () => {
  return (
    <main className={Style.HomePage}>
      <TaskFilter />
      <TaskList />
    </main>
  );
};
